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

  const protocol = req.headers['x-forwarded-proto'] || req.protocol;
  const host = `${protocol}://${req.get('host')}`;

  const payload = { name, email, phone, service, date, time, barber };
  const encodedData = Buffer.from(JSON.stringify(payload)).toString('base64');

  const approveUrl = `${host}/api/approve?data=${encodeURIComponent(encodedData)}`;
  const rejectUrl = `${host}/api/reject?data=${encodeURIComponent(encodedData)}`;

  const mailOptions = {
    from: `"Jhay Barbershop Booking" <${process.env.EMAIL_USER || 'rmanubag308@gmail.com'}>`,
    to: 'rmanubag308@gmail.com',
    subject: `New Booking Request: ${service} with ${barber} (Pending Approval)`,
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
            text-transform: uppercase;
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
          .actions {
            text-align: center;
            margin-top: 40px;
            margin-bottom: 10px;
            padding-top: 25px;
            border-top: 1px solid rgba(255, 255, 255, 0.05);
          }
          .btn {
            display: inline-block;
            padding: 12px 28px;
            border-radius: 8px;
            font-weight: bold;
            font-size: 13px;
            text-decoration: none;
            letter-spacing: 0.05em;
            text-transform: uppercase;
            transition: all 0.3s ease;
          }
          .btn-approve {
            background-color: #2e7d32;
            color: #ffffff;
            border: 1px solid #388e3c;
            box-shadow: 0 4px 12px rgba(46, 125, 50, 0.15);
            margin-right: 15px;
          }
          .btn-decline {
            background-color: #c62828;
            color: #ffffff;
            border: 1px solid #d32f2f;
            box-shadow: 0 4px 12px rgba(198, 40, 40, 0.15);
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
            <p>New Appointment Request</p>
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

            <div class="actions">
              <a href="${approveUrl}" class="btn btn-approve">Approve Request</a>
              <a href="${rejectUrl}" class="btn btn-decline">Decline Request</a>
            </div>
            <p style="text-align: center; color: rgba(255, 255, 255, 0.4); font-size: 11px; margin-top: 15px;">
              Clicking "Approve" or "Decline" will automatically notify the client via email.
            </p>
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
      console.warn("WARNING: EMAIL_PASS is not configured in environment. Email sending will be skipped.");
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

app.get('/api/approve', async (req, res) => {
  const { data } = req.query;
  if (!data) {
    return res.status(400).send('Missing booking data.');
  }

  try {
    const jsonStr = Buffer.from(data, 'base64').toString('utf-8');
    const { name, email, service, date, time, barber } = JSON.parse(jsonStr);

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER || 'rmanubag308@gmail.com',
        pass: process.env.EMAIL_PASS ? process.env.EMAIL_PASS.replace(/\s+/g, '') : '',
      },
    });

    const mailOptions = {
      from: `"Jhay Barbershop Booking" <${process.env.EMAIL_USER || 'rmanubag308@gmail.com'}>`,
      to: email, // Send to client!
      subject: `Booking Confirmed: ${service} with ${barber}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <title>Booking Approved</title>
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
              color: #2e7d32;
              font-size: 14px;
              font-weight: bold;
              margin: 8px 0 0 0;
              letter-spacing: 0.05em;
              text-transform: uppercase;
            }
            .content {
              padding: 40px 30px;
            }
            .greeting {
              font-size: 16px;
              line-height: 1.6;
              margin-bottom: 25px;
              color: rgba(255, 255, 255, 0.9);
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
              <p>✦ Booking Approved ✦</p>
            </div>
            
            <div class="content">
              <div class="greeting">
                Hello ${name},<br/><br/>
                We are pleased to inform you that your booking request has been <strong>approved</strong>! We look forward to seeing you.
              </div>

              <div class="section-title">Your Booking Details</div>
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
              If you need to make changes or cancel, please contact us. Jhay Barbershop.
            </div>
          </div>
        </body>
        </html>
      `
    };

    if (process.env.EMAIL_PASS) {
      await transporter.sendMail(mailOptions);
    }

    res.send(`
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>Booking Approved</title>
        <style>
          body {
            font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
            background-color: #0c0c0e;
            color: #ffffff;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100vh;
            margin: 0;
          }
          .card {
            background: #121214;
            border: 1px solid #d4a853;
            padding: 40px;
            border-radius: 16px;
            text-align: center;
            max-width: 400px;
            box-shadow: 0 20px 50px rgba(0, 0, 0, 0.7);
          }
          h1 { color: #d4a853; font-size: 24px; margin-bottom: 20px; text-transform: uppercase; letter-spacing: 0.05em; }
          p { color: rgba(255, 255, 255, 0.8); font-size: 15px; line-height: 1.6; margin-bottom: 30px; }
          .badge { display: inline-block; padding: 6px 12px; background: rgba(46, 125, 50, 0.2); border: 1px solid #2e7d32; color: #4caf50; border-radius: 20px; font-size: 12px; font-weight: bold; text-transform: uppercase; margin-bottom: 20px; }
        </style>
      </head>
      <body>
        <div class="card">
          <div class="badge">Success</div>
          <h1>Booking Approved</h1>
          <p>You have approved the booking for <strong>${name}</strong> (${service} with ${barber} at ${time}). A confirmation email has been sent to the client.</p>
        </div>
      </body>
      </html>
    `);
  } catch (error) {
    console.error('Error approving booking:', error);
    res.status(500).send(`Error processing request: ${error.message}`);
  }
});

app.get('/api/reject', async (req, res) => {
  const { data } = req.query;
  if (!data) {
    return res.status(400).send('Missing booking data.');
  }

  try {
    const jsonStr = Buffer.from(data, 'base64').toString('utf-8');
    const { name, email, service, date, time, barber } = JSON.parse(jsonStr);

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER || 'rmanubag308@gmail.com',
        pass: process.env.EMAIL_PASS ? process.env.EMAIL_PASS.replace(/\s+/g, '') : '',
      },
    });

    const mailOptions = {
      from: `"Jhay Barbershop Booking" <${process.env.EMAIL_USER || 'rmanubag308@gmail.com'}>`,
      to: email, // Send to client!
      subject: `Booking Request Update: ${service} with ${barber}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <title>Booking Update</title>
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
              border: 1px solid rgba(255, 255, 255, 0.1);
              border-radius: 16px;
              overflow: hidden;
              box-shadow: 0 20px 50px rgba(0, 0, 0, 0.7);
            }
            .accent-bar {
              height: 4px;
              background: linear-gradient(90deg, #121214, #c62828, #121214);
            }
            .header {
              text-align: center;
              padding: 30px 20px;
              border-bottom: 1px solid rgba(255, 255, 255, 0.05);
            }
            .header h1 {
              font-family: 'Playfair Display', Georgia, serif;
              color: #ffffff;
              margin: 0;
              font-size: 26px;
              letter-spacing: 0.1em;
              text-transform: uppercase;
            }
            .header p {
              color: #c62828;
              font-size: 14px;
              font-weight: bold;
              margin: 8px 0 0 0;
              letter-spacing: 0.05em;
              text-transform: uppercase;
            }
            .content {
              padding: 40px 30px;
            }
            .greeting {
              font-size: 16px;
              line-height: 1.6;
              margin-bottom: 25px;
              color: rgba(255, 255, 255, 0.9);
            }
            .section-title {
              color: rgba(255, 255, 255, 0.6);
              font-size: 14px;
              font-weight: 600;
              text-transform: uppercase;
              letter-spacing: 0.08em;
              margin-bottom: 15px;
              border-left: 2px solid #c62828;
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
              color: rgba(255, 255, 255, 0.8);
            }
            .footer {
              background: rgba(0, 0, 0, 0.2);
              padding: 20px;
              text-align: center;
              font-size: 11px;
              color: rgba(255, 255, 255, 0.3);
              border-top: 1px solid rgba(255, 255, 255, 0.05);
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="accent-bar"></div>
            
            <div class="header">
              <h1>Jhay Barbershop</h1>
              <p>✦ Booking Update ✦</p>
            </div>
            
            <div class="content">
              <div class="greeting">
                Hello ${name},<br/><br/>
                We regret to inform you that your booking request for the session below could not be accepted at this time. Please try booking a different slot or contact us for assistance.
              </div>

              <div class="section-title">Requested Booking Details</div>
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
              Thank you for your understanding. Jhay Barbershop.
            </div>
          </div>
        </body>
        </html>
      `
    };

    if (process.env.EMAIL_PASS) {
      await transporter.sendMail(mailOptions);
    }

    res.send(`
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>Booking Declined</title>
        <style>
          body {
            font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
            background-color: #0c0c0e;
            color: #ffffff;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100vh;
            margin: 0;
          }
          .card {
            background: #121214;
            border: 1px solid rgba(255, 255, 255, 0.1);
            padding: 40px;
            border-radius: 16px;
            text-align: center;
            max-width: 400px;
            box-shadow: 0 20px 50px rgba(0, 0, 0, 0.7);
          }
          h1 { color: #ffffff; font-size: 24px; margin-bottom: 20px; text-transform: uppercase; letter-spacing: 0.05em; }
          p { color: rgba(255, 255, 255, 0.8); font-size: 15px; line-height: 1.6; margin-bottom: 30px; }
          .badge { display: inline-block; padding: 6px 12px; background: rgba(198, 40, 40, 0.2); border: 1px solid #c62828; color: #ef5350; border-radius: 20px; font-size: 12px; font-weight: bold; text-transform: uppercase; margin-bottom: 20px; }
        </style>
      </head>
      <body>
        <div class="card">
          <div class="badge">Declined</div>
          <h1>Booking Declined</h1>
          <p>You have declined the booking for <strong>${name}</strong> (${service} with ${barber} at ${time}). A notification email has been sent to the client.</p>
        </div>
      </body>
      </html>
    `);
  } catch (error) {
    console.error('Error declining booking:', error);
    res.status(500).send(`Error processing request: ${error.message}`);
  }
});

// Listen only when running locally (not in Vercel Serverless environment)
if (process.env.NODE_ENV !== 'production' && !process.env.VERCEL) {
  app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
}

export default app;
