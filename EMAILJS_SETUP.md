# EmailJS Setup Guide for Contact Form

## Overview
Your contact form is now configured to send emails directly to **supun9402@gmail.com** using EmailJS. Follow these steps to complete the setup.

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click **"Sign Up"** and create a free account
3. Verify your email address

## Step 2: Add Email Service

1. In your EmailJS dashboard, go to **"Email Services"**
2. Click **"Add New Service"**
3. Choose **Gmail** (or your preferred email provider)
4. Connect your Gmail account (supun9402@gmail.com)
5. Copy the **Service ID** (e.g., `service_xxxxxxx`)

## Step 3: Create Email Template

1. Go to **"Email Templates"** in the dashboard
2. Click **"Create New Template"**
3. Use this template content:

### Template Settings:
- **Template Name**: Contact Form Submission
- **Subject**: `{{subject}} - Portfolio Contact`

### Email Content:
```
New message from your portfolio website!

From: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
This message was sent via your portfolio contact form.
```

4. In the **"To Email"** field, enter: `supun9402@gmail.com`
5. Save the template and copy the **Template ID** (e.g., `template_xxxxxxx`)

## Step 4: Get Your Public Key

1. Go to **"Account"** → **"General"** in EmailJS dashboard
2. Find your **Public Key** (looks like: `aBcDeFgHiJkLmNoPqR`)
3. Copy this key

## Step 5: Update Your Code

Open `Portfolio.tsx` and find these lines (around line 180-182):

```tsx
const serviceId = 'service_portfolio'; // Replace this
const templateId = 'template_contact'; // Replace this
const publicKey = 'YOUR_PUBLIC_KEY'; // Replace this
```

Replace them with your actual values:

```tsx
const serviceId = 'service_xxxxxxx'; // Your Service ID from Step 2
const templateId = 'template_xxxxxxx'; // Your Template ID from Step 3
const publicKey = 'aBcDeFgHiJkLmNoPqR'; // Your Public Key from Step 4
```

## Step 6: Test the Form

1. Save the file
2. Go to your portfolio at http://localhost:5174
3. Scroll to the Contact section
4. Fill out the form and click "Send Message"
5. Check your email at supun9402@gmail.com

## Features Implemented

✅ **Form Validation** - All fields are required
✅ **Character Limit** - Message limited to 500 characters with live counter
✅ **Loading State** - Button shows "Sending..." while processing
✅ **Success Message** - Green confirmation when email is sent
✅ **Error Handling** - Red error message if sending fails
✅ **Form Reset** - Form clears after successful submission
✅ **Direct to Email** - All messages go to supun9402@gmail.com

## Free Tier Limits

EmailJS free tier includes:
- ✅ 200 emails per month
- ✅ Unlimited templates
- ✅ No credit card required

## Troubleshooting

### If emails aren't sending:
1. Check browser console for errors
2. Verify all three IDs are correct in the code
3. Make sure your EmailJS service is connected to Gmail
4. Check EmailJS dashboard for any error logs

### Alternative: Use FormSubmit (No Setup Required)

If you want a simpler solution without EmailJS setup, I can configure the form to use FormSubmit.co which requires zero configuration. Just let me know!

## Security Note

The EmailJS public key is safe to expose in client-side code. It's designed to be public and only allows sending emails through your configured templates.
