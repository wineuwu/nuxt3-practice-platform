import moduleName from '';
// import mongoose from "mongoose";

// export default async (_nitroApp) => {
//  try {
//    mongoose.set("strictQuery", true);  // 嚴格模式
//    await mongoose.connect(
//      "mongodb+srv://mikename:mikepassword@nuxt3-test.8c8yxks.mongodb.net/mike-data"
//    );
//    console.log("連接 MongoDB");
//  } catch (e) {
//    console.error("Error MongoDB =>", e);
//  }
// };

import mongoose from 'mongoose';

const runtimeConfig = useRuntimeConfig();
// 將 
const { dbPassword: DB_PASSWORD } = runtimeConfig.public;

// 連接到 MongoDB
export default async() => { 
  try {
    mongoose.set("strictQuery", true)
    await mongoose.connect(`mongodb+srv://winnieuw:${DB_PASSWORD}@nuxt-test.vbnp8hp.mongodb.net/hashdata`);
    console.log("Connect 2 MongoDB !!");
    
  } catch (e) {
    console.log('Err MongoDB =>',e)
  }
}


// mongodb+srv://winnieuw:<password>@nuxt-test.vbnp8hp.mongodb.net/