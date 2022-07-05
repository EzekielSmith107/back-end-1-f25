const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());

// First endpoint to handle sending a friends array back to the client.
app.get("/api/users", (req, res) => {
    let friends = ["Nitin", "Eric", "Jeddy", "Cameron", "Riley"];
    res.status(200).send(friends);
  });

// Second enpoint that will tell us how the weather is today.
app.get("/weather/:temperature", (req, res) => {
    const { temperature } = req.params;
    const phrase = `<h3>It was ${temperature} today</h3>`;
    res.status(200).send(phrase);
  });
  
app.listen(4000, () => console.log("Server running on port 4000"));