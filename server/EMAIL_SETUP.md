# Email Configuration Setup

The dealer registration system sends an automated email with the Dealer ID to the registered email address.

## Gmail Setup (Recommended for Development)

1. **Enable 2-Step Verification** on your Google Account:
   - Go to: https://myaccount.google.com/security
   - Enable 2-Step Verification

2. **Generate App Password**:
   - Go to: https://myaccount.google.com/apppasswords
   - Select "Mail" and your device
   - Copy the 16-character password

3. **Create `.env` file** in the `server` folder:
   ```env
   MONGODB_URI=mongodb://localhost:27017/alliedpro
   JWT_SECRET=your-secret-key-change-this-in-production
   PORT=5000
   
   # Email Settings
   EMAIL_HOST=smtp.gmail.com
   EMAIL_PORT=587
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-16-char-app-password
   EMAIL_FROM="Allied PRO Beauty Supply <noreply@alliedpro.ca>"
   ```

4. **Restart the backend server** for changes to take effect

## Testing Without Email (Development)

If you don't configure email:
- Registration will still work
- The Dealer ID will be shown on screen
- Email sending will fail silently (logged in console)
- User can still use the system normally

## Production Email Services

For production, consider using:
- **SendGrid**: https://sendgrid.com
- **AWS SES**: https://aws.amazon.com/ses/
- **Mailgun**: https://www.mailgun.com
- **Postmark**: https://postmarkapp.com

## Email Template

The email includes:
- Welcome message with dealer's name
- Large, prominent Dealer ID display
- Account information (company, business type, email, phone)
- Login instructions
- Direct link to dealer portal
- Professional HTML formatting with brand colors



