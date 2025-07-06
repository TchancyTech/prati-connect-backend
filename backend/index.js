// backend/index.js
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const products = {
  PRT123456789: {
    name: "Paracetamol",
    lot: "PDC0526L24E54K",
    expiration: "05/2026",
    image:
      "https://th.bing.com/th/id/OIP.z4d3JcI12NR1U62Oh4FIAAHaHa?w=215&h=215&c=7&r=0&o=5&pid=1.7",
  },
  PRT987654321: {
    name: "Dipirona",
    lot: "PDC2626L68O79M",
    expiration: "06/2026",
    image:
      "https://th.bing.com/th/id/OIP.kO5BmKuMKLdYlObW52kJsQHaHa?w=189&h=189&c=7&r=0&o=5&pid=1.7",
  },
};

app.get("/verify/:code", (req, res) => {
  const { code } = req.params;
  const product = products[code];
  if (product) {
    res.json({ success: true, ...product });
  } else {
    res.status(404).json({ success: false, message: "Product not found" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
