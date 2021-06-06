//Load express module with `require` directive
var express = require("express");
var app = express();

//Define request response in root URL (/)
app.get("/", function (req, res) {
  res.json({
    message: `${process.pid}: Hello world!!`,
  });
});

//Launch listening server on port 3000
app.listen(5000, function () {
  console.log("app listening on port http://localhost:5000!");
});
