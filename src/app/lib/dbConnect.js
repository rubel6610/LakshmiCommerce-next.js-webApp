import { MongoClient, ServerApiVersion } from "mongodb";

const uri = process.env.NEXT_PUBLIC_MONGODB_URI;

export const collectionsobj = {
  usersCollection: "users",
  productsCollection:"products"
};

let client;
let clientPromise;

export const dbConnect = async (collectionName) => {
  if (!clientPromise) {
    client = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
    });
    clientPromise = client.connect();
  }

  await clientPromise; 

  return client.db(process.env.DB_NAME).collection(collectionName);
};
