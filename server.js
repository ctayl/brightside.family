const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.listen(PORT, () =>
  console.log(`Server now listening on PORT ${PORT}!`)
);