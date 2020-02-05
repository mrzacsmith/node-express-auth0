const { getDatabase } = require("./mongo.js");

const collectionName = "ads";

// async function insertAd(ad) {
//   const database = await getDatabase();
//   const { insertedId } = await database
//     .collection(collectionName)
//     .insertOne(ad);
//   return insertedId;
// }

const insertAd = async ad => {
  const database = await getDatabase();
  const { insertedId } = await database
    .collection(collectionName)
    .insertOne(ad);
  return insertedId;
};

const getAds = async () => {
  const database = await getDatabase();
  return await database
    .collection(collectionName)
    .find({})
    .toArray();
};

// async function getAds() {
//   const database = await getDatabase();
//   return await database
//     .collection(collectionName)
//     .find({})
//     .toArray();
// }

module.exports = {
  insertAd,
  getAds
};
