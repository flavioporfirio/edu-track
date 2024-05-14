const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());
const port = process.env.PORT || 3000;

const Professor = mongoose.model("professor", {
  nome: String,
  email: String,
  ra: String,
  turma: Array,
  materia: Array,
  profileImg: String,
  password: String,
});

const Fato_Aluno = mongoose.model("fato_aluno", {
  faltas: Array,
  situacao: String,
  ra: String,
  nome: String,
  data_nascimento: String,
  ano: String,
  turma: String,
  disciplina: Array,
  email: String,
});

app.get("/fato_aluno", async (req, res) => {
  const fato_aluno = await Fato_Aluno.find();
  res.send(fato_aluno);
});

app.post("/fato_aluno", async (req, res) => {
  const aluno = new Fato_Aluno({
    faltas: req.body.faltas,
    situacao: req.body.situacao,
    ra: req.body.ra,
    nome: req.body.nome,
    data_nascimento: req.body.data_nascimento,
    ano: req.body.ano,
    turma: req.body.turma,
    disciplina: req.body.disciplina,
    email: req.body.email,
  });

  await aluno.save();
  res.send(aluno);
});

app.put("/fato_aluno/:id", async (req, res) => {
  const attAluno = await Fato_Aluno.findByIdAndUpdate(
    req.params.id,
    {
      faltas: req.body.faltas,
      situacao: req.body.situacao,
      ra: req.body.ra,
      nome: req.body.nome,
      data_nascimento: req.body.data_nascimento,
      ano: req.body.ano,
      turma: req.body.turma,
      disciplina: req.body.disciplina,
      email: req.body.email,
    },
    {
      new: true,
    }
  );

  return res.send(attAluno);
});

app.get("/:ra", async (req, res) => {
  const ra = req.params.ra;

  const professors = await Professor.findOne({ ra: ra });
  res.send(professors);
});

app.post("/", async (req, res) => {
  const professor = new Professor({
    nome: req.body.nome,
    email: req.body.email,
    ra: req.body.ra,
    turma: req.body.turma,
    materia: req.body.materia,
    profileImg: req.body.profileImg,
    password: req.body.password,
  });

  await professor.save();
  res.send(professor);
});

app.delete("/:id", async (req, res) => {
  const professor = await Professor.findByIdAndDelete(req.params.id);

  return res.send(professor);
});

app.put("/:id", async (req, res) => {
  const professor = await Professor.findByIdAndUpdate(
    req.params.id,
    {
      nome: req.body.nome,
      email: req.body.email,
      ra: req.body.ra,
      turma: req.body.turma,
      materia: req.body.materia,
      profileImg: req.body.profileImg,
      password: req.body.password,
    },
    { new: true }
  );

  return res.send(professor);
});

app.listen(port, () => {
  mongoose.connect(
    "mongodb+srv://flavioporfirio86:senha123@edutrackdb.byjl0cj.mongodb.net/?retryWrites=true&w=majority&appName=edutrackDB"
  );
  console.log(`Server rodando na porta ${port}`);
});
