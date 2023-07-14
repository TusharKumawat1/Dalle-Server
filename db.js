import mongoose from "mongoose";

const connectDb=(uri)=>{
    mongoose.set("strictQuery",true)

    mongoose.connect(uri).then((result) => {
        console.log("connected to mongoDB")
    }).catch((err) => {
        console.log(err)        
    });
}
export default connectDb;