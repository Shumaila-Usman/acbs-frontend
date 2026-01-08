const nodemailer = require('nodemailer');

// Create transporter
const createTransporter = () => {
  // You can configure this with your email service (Gmail, SendGrid, etc.)
  // For now, using a test account (ethereal.email) for development
  return nodemailer.createTransport({
    host: process.env.EMAIL_HOST || 'smtp.gmail.com',
    port: process.env.EMAIL_PORT || 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER || 'your-email@gmail.com',
      pass: process.env.EMAIL_PASS || 'your-app-password'
    }
  });
};

// Send dealer registration email
const sendDealerRegistrationEmail = async (dealerData) => {
  try {
    const transporter = createTransporter();

    const mailOptions = {
      from: process.env.EMAIL_FROM || 'Allied PRO Beauty Supply <noreply@alliedpro.ca>',
      to: dealerData.email,
      subject: 'Welcome to Allied PRO - Your Dealer Account Details',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body {
              font-family: Arial, sans-serif;
              line-height: 1.6;
              color: #333;
            }
            .container {
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
              background-color: #f9f9f9;
            }
            .header {
              background: linear-gradient(90deg, rgba(14,167,224,0.85), rgba(86,49,207,0.85));
              color: white;
              padding: 30px;
              text-align: center;
              border-radius: 10px 10px 0 0;
            }
            .content {
              background: white;
              padding: 30px;
              border-radius: 0 0 10px 10px;
            }
            .dealer-id-box {
              background: #f0f8ff;
              border: 2px solid #0ea7e0;
              border-radius: 8px;
              padding: 20px;
              text-align: center;
              margin: 20px 0;
            }
            .dealer-id {
              font-size: 32px;
              font-weight: bold;
              color: #0ea7e0;
              letter-spacing: 2px;
            }
            .info-section {
              margin: 20px 0;
              padding: 15px;
              background: #f9f9f9;
              border-radius: 8px;
            }
            .footer {
              text-align: center;
              padding: 20px;
              color: #666;
              font-size: 12px;
            }
            .button {
              display: inline-block;
              padding: 12px 30px;
              background: linear-gradient(90deg, rgba(14,167,224,0.85), rgba(86,49,207,0.85));
              color: white;
              text-decoration: none;
              border-radius: 5px;
              margin: 20px 0;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Welcome to Allied PRO!</h1>
              <p>Your Dealer Account is Ready</p>
            </div>
            <div class="content">
              <h2>Hello ${dealerData.firstName} ${dealerData.lastName},</h2>
              <p>Congratulations! Your dealer account has been successfully created with Allied PRO Beauty Supply.</p>
              
              <div class="dealer-id-box">
                <p style="margin: 0; font-size: 14px; color: #666;">Your Dealer ID</p>
                <p class="dealer-id">${dealerData.dealerId}</p>
                <p style="margin: 0; font-size: 12px; color: #999;">Please save this ID for future reference</p>
              </div>

              <div class="info-section">
                <h3 style="margin-top: 0;">Account Information:</h3>
                <p><strong>Company Name:</strong> ${dealerData.companyName}</p>
                <p><strong>Business Type:</strong> ${dealerData.businessType}</p>
                <p><strong>Email:</strong> ${dealerData.email}</p>
                <p><strong>Phone:</strong> ${dealerData.phone}</p>
              </div>

              <h3>How to Access Your Dealer Portal:</h3>
              <ol>
                <li>Visit the Allied PRO website</li>
                <li>Click on "Dealer Portal" in the footer</li>
                <li>Use your <strong>Dealer ID</strong> (shown above) and your password to login</li>
              </ol>

              <div style="text-align: center;">
                <a href="http://localhost:5173/dealer-login" class="button">Login to Dealer Portal</a>
              </div>

              <div style="margin-top: 30px; padding: 15px; background: #fff3cd; border-left: 4px solid #ffc107; border-radius: 4px;">
                <p style="margin: 0;"><strong>Important:</strong> Keep your Dealer ID safe. You will need it every time you login to the dealer portal.</p>
              </div>

              <p>If you have any questions or need assistance, please don't hesitate to contact our support team.</p>
              
              <p>Best regards,<br>
              <strong>Allied PRO Beauty Supply Team</strong></p>
            </div>
            <div class="footer">
              <p>This is an automated message. Please do not reply to this email.</p>
              <p>&copy; ${new Date().getFullYear()} Allied PRO Beauty Supply. All rights reserved.</p>
            </div>
          </div>
        </body>
        </html>
      `
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('✅ Dealer registration email sent:', info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('❌ Error sending dealer registration email:', error);
    // Don't fail the registration if email fails
    return { success: false, error: error.message };
  }
};

module.exports = {
  sendDealerRegistrationEmail
};


