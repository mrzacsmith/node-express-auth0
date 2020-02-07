const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

const app = express();

const ads = [{ title: "Hello, world (again)!" }];
const { startDatabase } = require("./database/mongo.js");
const { insertAd, getAds, deleteAd, updateAd } = require("./database/ads.js");

app.use(helmet());
app.use(bodyParser.json());
app.use(cors());
app.use(morgan("combined"));

// app.get("/", (req, res) => {
//   res.send(ads);
// });

app.get("/", async (req, res) => {
  res.send(await getAds());
});

app.post("/", async (req, res) => {
  const newAd = req.body;
  await insertAd(newAd);
  res.send({
    message: `New add inserted ... `
  });
});

app.delete("/:id", async (req, res) => {
  await deleteAd(req.params.id);
  res.send({
    message: `Ad removed ... `
  });
});

startDatabase().then(async () => {
  await insertAd({
    title: "Hello, now from the in-memory database!"
  });
});

const PORT = 5755;
app.listen(PORT, async () => {
  console.log(`\n ** Server is listening on port ${PORT} **\n`);
});
