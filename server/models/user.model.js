import mongoose from 'mongoose';

const { Schema } = mongoose;
const memberSchema = new Schema({
name: {
  type: String,
},
avatar: {
  type: String
},
email: {
  type: String
},
emailVerified:{
  type: Boolean
},
registerFrom: {
  type: String
}})

const user = mongoose.model("hashdata", memberSchema, "test");

export default user;
