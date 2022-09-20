import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SG_KEY);

async function sendEmail(req, res) {
  const data = req.body;
  
    try {
        const msg = {
          to: 'ryleykeegan47@gmail.com',
          from: 'ryleykeegan47@gmail.com',
          subject: `New Contact Submission`,
          text: data,
        }
        sgMail
          .send(msg)
          .then(() => {
            console.log('Email sent');
          })
          .catch((error) => {
            return res.status(error.statusCode || 500).json({ error: error.message });
          })
    } catch (error) {
        return res.status(200).json({ error: "" });
    }
}

export default sendEmail;
