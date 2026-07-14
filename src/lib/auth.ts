import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.MONGO_DB_URI!);
const db = client.db(process.env.AUTH_DB_NAME);

export const auth = betterAuth({
  database: mongodbAdapter(db, {
    client,
  }),

  emailAndPassword: {
    enabled: true,
  },

  user: {
    additionalFields: {
      role: {
        type: "string",
        defaultValue: "user",
      },
      num: {
        type: "string",
        required: true,
      },
      address: {
        type: "string",
        required: true,
      },
      city: {
        type: "string",
        required: true,
      },
      postCode: {
        type: "string",
        required: true,
      },
    },
  },
});