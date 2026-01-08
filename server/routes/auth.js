const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const { authMiddleware } = require('../middleware/auth');
const { sendDealerRegistrationEmail } = require('../utils/emailService');

const router = express.Router();

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-change-this-in-production';
const JWT_EXPIRES_IN = '7d';

// Helper function to generate dealer ID
const generateDealerId = async () => {
  const prefix = 'DLR';
  let isUnique = false;
  let dealerId;
  
  while (!isUnique) {
    const randomNum = Math.floor(100000 + Math.random() * 900000); // 6-digit number
    dealerId = `${prefix}${randomNum}`;
    const existing = await User.findOne({ dealerId });
    if (!existing) {
      isUnique = true;
    }
  }
  
  return dealerId;
};

// Register new customer
router.post('/register', async (req, res) => {
  try {
    const { firstName, lastName, email, phone, password } = req.body;

    // Validate required fields
    if (!firstName || !lastName || !email || !password) {
      return res.status(400).json({ 
        success: false, 
        message: 'Please provide first name, last name, email, and password' 
      });
    }

    // Validate password strength
    if (password.length < 8) {
      return res.status(400).json({ 
        success: false, 
        message: 'Password must be at least 8 characters long' 
      });
    }

    // Check password requirements
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    if (!hasUppercase || !hasLowercase || !hasNumber || !hasSpecial) {
      return res.status(400).json({ 
        success: false, 
        message: 'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character' 
      });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ 
        success: false, 
        message: 'Email already registered' 
      });
    }

    // Create new user
    const user = new User({
      firstName,
      lastName,
      name: `${firstName} ${lastName}`,
      email,
      phone: phone || '',
      password,
      accountType: 'customer'
    });

    await user.save();

    // Generate JWT token
    const token = jwt.sign(
      { userId: user._id, email: user.email },
      JWT_SECRET,
      { expiresIn: JWT_EXPIRES_IN }
    );

    // Set cookie
    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
    });

    res.status(201).json({
      success: true,
      message: 'Registration successful',
      user: {
        id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        name: user.name,
        email: user.email,
        phone: user.phone,
        accountType: user.accountType
      },
      token
    });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Server error during registration' 
    });
  }
});

// Register new dealer
router.post('/register-dealer', async (req, res) => {
  try {
    const { 
      companyName, 
      businessType, 
      businessAddress, 
      city, 
      province,
      hasTireSupplier,
      currentSupplierName,
      firstName, 
      lastName, 
      phone, 
      email, 
      password 
    } = req.body;

    // Validate required fields
    if (!companyName || !businessType || !businessAddress || !city || !province || !firstName || !lastName || !email || !password) {
      return res.status(400).json({ 
        success: false, 
        message: 'Please provide all required business and contact information' 
      });
    }

    // Validate password strength
    if (password.length < 8) {
      return res.status(400).json({ 
        success: false, 
        message: 'Password must be at least 8 characters long' 
      });
    }

    // Check password requirements
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    if (!hasUppercase || !hasLowercase || !hasNumber || !hasSpecial) {
      return res.status(400).json({ 
        success: false, 
        message: 'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character' 
      });
    }

    // Check if email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ 
        success: false, 
        message: 'Email already registered' 
      });
    }

    // Generate unique dealer ID
    const dealerId = await generateDealerId();

    // Create new dealer
    const dealer = new User({
      firstName,
      lastName,
      name: `${firstName} ${lastName}`,
      email,
      phone: phone || '',
      password,
      accountType: 'dealer',
      dealerId,
      companyName,
      businessType,
      businessAddress,
      city,
      province,
      hasTireSupplier: hasTireSupplier || false,
      currentSupplierName: currentSupplierName || ''
    });

    await dealer.save();

    // Send dealer registration email with Dealer ID
    await sendDealerRegistrationEmail({
      email: dealer.email,
      firstName: dealer.firstName,
      lastName: dealer.lastName,
      dealerId: dealer.dealerId,
      companyName: dealer.companyName,
      businessType: dealer.businessType,
      phone: dealer.phone
    });

    // Generate JWT token
    const token = jwt.sign(
      { userId: dealer._id, email: dealer.email, dealerId: dealer.dealerId },
      JWT_SECRET,
      { expiresIn: JWT_EXPIRES_IN }
    );

    // Set cookie
    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
    });

    res.status(201).json({
      success: true,
      message: 'Dealer registration successful',
      dealerId: dealer.dealerId,
      user: {
        id: dealer._id,
        firstName: dealer.firstName,
        lastName: dealer.lastName,
        name: dealer.name,
        email: dealer.email,
        phone: dealer.phone,
        accountType: dealer.accountType,
        dealerId: dealer.dealerId,
        companyName: dealer.companyName
      },
      token
    });
  } catch (error) {
    console.error('Dealer registration error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Server error during dealer registration' 
    });
  }
});

// Login user (customer)
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validate input
    if (!email || !password) {
      return res.status(400).json({ 
        success: false, 
        message: 'Please provide email and password' 
      });
    }

    // Find user
    const user = await User.findOne({ email, accountType: 'customer' });
    if (!user) {
      return res.status(401).json({ 
        success: false, 
        message: 'Invalid email or password' 
      });
    }

    // Check password
    const isPasswordValid = await user.comparePassword(password);
    if (!isPasswordValid) {
      return res.status(401).json({ 
        success: false, 
        message: 'Invalid email or password' 
      });
    }

    // Generate JWT token
    const token = jwt.sign(
      { userId: user._id, email: user.email },
      JWT_SECRET,
      { expiresIn: JWT_EXPIRES_IN }
    );

    // Set cookie
    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
    });

    res.json({
      success: true,
      message: 'Login successful',
      user: {
        id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        name: user.name,
        email: user.email,
        phone: user.phone,
        accountType: user.accountType
      },
      token
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Server error during login' 
    });
  }
});

// Login dealer (using dealer ID)
router.post('/login-dealer', async (req, res) => {
  try {
    const { dealerId, password } = req.body;

    // Validate input
    if (!dealerId || !password) {
      return res.status(400).json({ 
        success: false, 
        message: 'Please provide dealer ID and password' 
      });
    }

    // Find dealer
    const dealer = await User.findOne({ dealerId, accountType: 'dealer' });
    if (!dealer) {
      return res.status(401).json({ 
        success: false, 
        message: 'Invalid dealer ID or password' 
      });
    }

    // Check password
    const isPasswordValid = await dealer.comparePassword(password);
    if (!isPasswordValid) {
      return res.status(401).json({ 
        success: false, 
        message: 'Invalid dealer ID or password' 
      });
    }

    // Generate JWT token
    const token = jwt.sign(
      { userId: dealer._id, email: dealer.email, dealerId: dealer.dealerId },
      JWT_SECRET,
      { expiresIn: JWT_EXPIRES_IN }
    );

    // Set cookie
    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
    });

    res.json({
      success: true,
      message: 'Dealer login successful',
      user: {
        id: dealer._id,
        firstName: dealer.firstName,
        lastName: dealer.lastName,
        name: dealer.name,
        email: dealer.email,
        phone: dealer.phone,
        accountType: dealer.accountType,
        dealerId: dealer.dealerId,
        companyName: dealer.companyName
      },
      token
    });
  } catch (error) {
    console.error('Dealer login error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Server error during login' 
    });
  }
});

// Logout user
router.post('/logout', (req, res) => {
  res.clearCookie('token');
  res.json({ 
    success: true, 
    message: 'Logout successful' 
  });
});

// Get current user (verify token)
router.get('/me', authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user.userId).select('-password');
    if (!user) {
      return res.status(404).json({ 
        success: false, 
        message: 'User not found' 
      });
    }

    res.json({
      success: true,
      user: {
        id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        name: user.name,
        email: user.email,
        phone: user.phone,
        accountType: user.accountType,
        dealerId: user.dealerId,
        companyName: user.companyName
      }
    });
  } catch (error) {
    console.error('Get user error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Server error' 
    });
  }
});

module.exports = router;

