const express = require('express');
const app = express();
const dotenv = require('dotenv');

require("./routes/SurveyRoutes")(app);

app.listen(process.env.PORT || 3000, function () {
  // init function
});
