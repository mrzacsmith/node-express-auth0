const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

const app = express();

const ads = [{ title: "Hello, world (again)!" }];

app.use(helmet());
app.use(bodyParser.json());
app.use(cors());
app.use(morgan("combined"));

app.get("/", (req, res) => {
  res.send(ads);
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`\n ** Server is listening on port ${PORT} **\n`);
});
