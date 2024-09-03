const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // cors'u import edin

const app = express();
const port = 5000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors()); // CORS middleware'ini ekleyin

// POST endpoint
app.post('/contact', (req, res) => {
  const { fullName, phone, email, message } = req.body;

  if (!fullName || !phone || !message) {
    return res.status(400).send('Eksik veri gönderildi!');
  }

  // Bilgileri konsola yazdırın
  console.log('Received contact form data:', {
    fullName,
    phone,
    email,
    message
  });

  res.send('Form verileri alındı!');
});

app.listen(port, () => {
  console.log(`Sunucu http://localhost:${port} adresinde çalışıyor`);
});
