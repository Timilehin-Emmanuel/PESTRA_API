require("dotenv").config();
const express = require("express");
const PORT = process.env.PORT || 3000;
const bodyParser = require("body-parser");
const mailRoutes = require("./routes/sendMailRoute");


const cors = require("cors");
const app = express();
const corsOption = require("./config/cors");

app.use(bodyParser.json());
app.use(cors(corsOption));
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/mail", mailRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
