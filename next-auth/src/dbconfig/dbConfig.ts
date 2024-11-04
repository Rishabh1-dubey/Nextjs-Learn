import mongoose, { connection } from "mongoose";
import { root } from "postcss";

export async function connect() {
  try {
    mongoose.connect(process.env.MONGO_URL!);
    const connection = mongoose.connection;
    connection.on("Connected", () => {
      console.log("MongoDB connected");
    });



    connection.on('Error',(err)=>{
        console.log("MongDb not connected :" + err)
    })
  } catch (error) {
    console.log("Something went wrong");
    console.log("error", error);
  }
}
