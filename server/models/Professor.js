import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  nome: String,
  email: String,
  ra: String,
  turma: Array,
  materia: Array,
  profileImg: String,
  password: String,
});

export const UserModel = mongoose.model("professor", UserSchema);
