const express = require("express");
// http://localhost:4000/api/workouts
const mongoose = require("mongoose");

const app = express();

const PORT = 4000;

const MONG_URI =
  "mongodb+srv://username:<password>@cluster0.jfrcmsx.mongodb.net/?retryWrites=true&w=majority"; // !! This URI is working , username and passwords has been removed for security reasons

const wokeroutRoutes = require("./routes/workouts");

app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use("/api/workouts", wokeroutRoutes);

// Connect to db
mongoose
  .connect(MONG_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on PORT ${PORT}`);
    });
  })
  .catch((err) => console.log(err));
