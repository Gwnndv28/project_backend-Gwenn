const express = require("express");
const app = express();
const PORT = 4000;

// Routes import here (once you create routes)

// View engine setup
app.set("view engine", "ejs");

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
