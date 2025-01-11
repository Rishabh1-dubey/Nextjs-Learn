import mongoose from "mongoose";

export async function connect() {
  try {
    await mongoose.connect(process.env.MONGO_URL!);
    const connection = mongoose.connection;
    connection.on("Connected", () => {
      console.log("MongoDB connected");
    });

    connection.on("Error", (err) => {
      console.log("MongDb Connection Error make sure your db is up running :" + err);
      process.exit()
    });

  } catch (error) {
    console.log("Something went wrong");
    console.log("error", error);
  }
}
