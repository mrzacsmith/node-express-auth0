const { getDatabase } = require("./mongo.js");
const { ObjectID } = require("mongodb");
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

const deleteAd = async id => {
  const database = await getDatabase();
  await database.collection(collectionName).deleteOne({
    _id: new ObjectID(id)
  });
};

// async function deleteAd(id) {
//   const database = await getDatabase();
//   await database.collection(collectionName).deleteOne({
//     _id: new ObjectID(id)
//   });
// }

const updateAd = async (id, ad) => {
  const database = await getDatabase();
  delete ad._id;
  await database.collection(collectionName).update(
    { _id: new ObjectID(id) },
    {
      $set: {
        ...ad
      }
    }
  );
};

// async function updateAd(id, ad) {
//   const database = await getDatabase();
//   delete ad._id;
//   await database.collection(collectionName).update(
//     { _id: new ObjectID(id) },
//     {
//       $set: {
//         ...ad
//       }
//     }
//   );
// }

// async function getAds() {
//   const database = await getDatabase();
//   return await database
//     .collection(collectionName)
//     .find({})
//     .toArray();
// }

module.exports = {
  insertAd,
  getAds,
  deleteAd,
  updateAd
};
