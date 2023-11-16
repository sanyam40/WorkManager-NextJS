import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  about: String,
  photo: String,
});

export const User = mongoose.models.User || mongoose.model("User", userSchema);