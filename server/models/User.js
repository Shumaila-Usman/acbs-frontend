const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  // Customer fields
  firstName: {
    type: String,
    trim: true
  },
  lastName: {
    type: String,
    trim: true
  },
  name: {
    type: String,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  phone: {
    type: String,
    trim: true,
    default: ''
  },
  password: {
    type: String,
    required: true,
    minlength: 8
  },
  accountType: {
    type: String,
    enum: ['customer', 'dealer'],
    default: 'customer'
  },
  
  // Dealer-specific fields
  dealerId: {
    type: String,
    unique: true,
    sparse: true, // Only unique if present
    trim: true
  },
  companyName: {
    type: String,
    trim: true
  },
  businessType: {
    type: String,
    trim: true
  },
  businessAddress: {
    type: String,
    trim: true
  },
  city: {
    type: String,
    trim: true
  },
  province: {
    type: String,
    trim: true
  },
  hasTireSupplier: {
    type: Boolean,
    default: false
  },
  currentSupplierName: {
    type: String,
    trim: true,
    default: ''
  },
  
  isEmailVerified: {
    type: Boolean,
    default: false
  },
  recentCategories: {
    type: [String],
    default: []
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Hash password before saving
userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error);
  }
});

// Compare password method
userSchema.methods.comparePassword = async function(candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

module.exports = mongoose.model('User', userSchema);

