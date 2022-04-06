const express = require("express");
const path = require("path");
const logger = require("./middleware/logger");

const app = express();

app.use(express.json());
//middleware
app.use(logger);
//static folder to get html and css files
app.use(express.static(path.join(__dirname, "public")));
//fetching html page
app.get("/index", (req, res) => {
  res.send("index");
});
//routes
app.use("/accounts", require("./routes/accs"));

PORT = 5050;
app.listen(PORT, () => console.log(`server running at : ${PORT}`));
