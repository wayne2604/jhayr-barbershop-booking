import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.post('/api/book', async (req, res) => {
  const { name, email, phone, service, date, time, barber } = req.body;

  // Setup Gmail transporter
  // IMPORTANT: For Gmail, you must use an App Password, not your normal password!
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER || 'rmanubag308@gmail.com', // Your Gmail address
      pass: process.env.EMAIL_PASS ? process.env.EMAIL_PASS.replace(/\s+/g, '') : '', // Strip spaces dynamically
    },
  });

  const mailOptions = {
    from: `"Jhay Barbershop Booking" <${process.env.EMAIL_USER || 'rmanubag308@gmail.com'}>`,
    to: 'rmanubag308@gmail.com',
    subject: `New Booking Confirmed: ${service} with ${barber}`,
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>New Booking Notification</title>
        <style>
          body {
            font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
            background-color: #0c0c0e;
            color: #ffffff;
            margin: 0;
            padding: 40px 20px;
          }
          .container {
            max-width: 600px;
            margin: 0 auto;
            background: #121214;
            border: 1px solid #d4a853;
            border-radius: 16px;
            overflow: hidden;
            box-shadow: 0 20px 50px rgba(0, 0, 0, 0.7);
          }
          .accent-bar {
            height: 4px;
            background: linear-gradient(90deg, #121214, #d4a853, #121214);
          }
          .header {
            text-align: center;
            padding: 30px 20px;
            border-bottom: 1px solid rgba(212, 168, 83, 0.1);
          }
          .header h1 {
            font-family: 'Playfair Display', Georgia, serif;
            color: #d4a853;
            margin: 0;
            font-size: 26px;
            letter-spacing: 0.1em;
            text-transform: uppercase;
          }
          .header p {
            color: rgba(255, 255, 255, 0.5);
            font-size: 12px;
            margin: 5px 0 0 0;
            letter-spacing: 0.05em;
          }
          .content {
            padding: 40px 30px;
          }
          .section-title {
            color: #d4a853;
            font-size: 14px;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.08em;
            margin-bottom: 15px;
            border-left: 2px solid #d4a853;
            padding-left: 10px;
          }
          .grid {
            margin-bottom: 30px;
          }
          .row {
            display: flex;
            justify-content: space-between;
            padding: 12px 0;
            border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          }
          .row:last-child {
            border-bottom: none;
          }
          .label {
            color: rgba(255, 255, 255, 0.5);
            font-size: 13px;
            font-weight: 500;
          }
          .value {
            color: #ffffff;
            font-size: 13px;
            font-weight: 600;
            text-align: right;
          }
          .highlight {
            color: #d4a853;
          }
          .footer {
            background: rgba(0, 0, 0, 0.2);
            padding: 20px;
            text-align: center;
            font-size: 11px;
            color: rgba(255, 255, 255, 0.3);
            border-top: 1px solid rgba(212, 168, 83, 0.05);
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="accent-bar"></div>
          
          <div class="header">
            <h1>Jhay Barbershop</h1>
            <p>New Appointment Secured</p>
          </div>
          
          <div class="content">
            <div class="section-title">Client Information</div>
            <div class="grid">
              <div class="row">
                <span class="label">Name:</span>
                <span class="value">${name}</span>
              </div>
              <div class="row">
                <span class="label">Email:</span>
                <span class="value">${email}</span>
              </div>
              <div class="row">
                <span class="label">Phone:</span>
                <span class="value">${phone || 'Not Provided'}</span>
              </div>
            </div>
            
            <div class="section-title">Booking Details</div>
            <div class="grid">
              <div class="row">
                <span class="label">Service:</span>
                <span class="value highlight">${service}</span>
              </div>
              <div class="row">
                <span class="label">Barber:</span>
                <span class="value">${barber}</span>
              </div>
              <div class="row">
                <span class="label">Date:</span>
                <span class="value">${date || 'Selected Date'}</span>
              </div>
              <div class="row">
                <span class="label">Time Slot:</span>
                <span class="value highlight" style="font-size: 15px;">${time}</span>
              </div>
            </div>
          </div>
          
          <div class="footer">
            This is an automated notification. Please do not reply directly to this email.
          </div>
        </div>
      </body>
      </html>
    `,
  };

  try {
    if (!process.env.EMAIL_PASS) {
      console.warn("WARNING: EMAIL_PASS is not configured in .env. Email sending will be skipped.");
      return res.status(200).json({ 
        success: true, 
        message: 'Booking saved successfully (email skipped because EMAIL_PASS is not set).' 
      });
    }

    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
