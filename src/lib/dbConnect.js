const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = process.env.NEXT_PUBLIC_MONGODB_URI;

export const collectionObj = {
  userCollection: "userData",
  productsCollection: "products",
  cartDataCollection: "cartData"
};

export const dbConnect = (collectionName) => {
  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });
  return client.db(process.env.DB_NAME).collection(collectionName);
};
