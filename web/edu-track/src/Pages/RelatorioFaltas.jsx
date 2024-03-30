import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useReactToPrint } from "react-to-print";
import useGetStudentList from "../Hooks/useGetStudentList";
import PageNav from "./PageNav";
import styles from "./RelatorioFaltas.module.css";

export default function AbsenceReport({ user }) {
  const [filterOption, setFilterOption] = useState("turma");

  const { studentList } = useGetStudentList();
  const absenceObj = [];
  console.log(studentList);

  const documentContent = useRef();
  const handlePrint = useReactToPrint({
    content: () => documentContent.current,
  });

  studentList.map((student) =>
    absenceObj.push({
      faltas: student.faltas,
      ano: student.ano,
      turma: student.turma,
    })
  );

  const getTurmasComFaltas = () => {
    const turmasComFaltas = absenceObj.reduce((acc, aluno) => {
      const turma = aluno.turma;
      const faltas = aluno.faltas.length;

      if (!acc[turma]) {
        acc[turma] = {
          turma,
          faltas: 0,
        };
      }

      acc[turma].faltas += faltas;

      return acc;
    }, {});

    return Object.values(turmasComFaltas);
  };

  const getAnoComFaltas = () => {
    const turmasComFaltas = absenceObj.reduce((acc, aluno) => {
      const ano = aluno.ano;
      const faltas = aluno.faltas.length;

      if (!acc[ano]) {
        acc[ano] = {
          ano,
          faltas: 0,
        };
      }

      acc[ano].faltas += faltas;

      return acc;
    }, {});

    return Object.values(turmasComFaltas);
  };

  const getProfessorComFaltas = () => {
    const turmasComFaltas = absenceObj.reduce((acc, aluno) => {
      const ano = aluno.ano;
      const faltas = aluno.faltas;

      for (let i = 0; i < faltas.length; i++) {
        const nomeProfessor = faltas[i].professor;

        const professorEncontrado = acc.find(
          (professor) => professor.professor === nomeProfessor
        );

        if (professorEncontrado) {
          professorEncontrado.faltas += 1;
        } else {
          acc.push({
            ano,
            professor: nomeProfessor,
            faltas: 1,
          });
        }
      }

      return acc;
    }, []);

    return turmasComFaltas;
  };

  const getDataComFaltas = () => {
    const turmasComFaltas = absenceObj.reduce((acc, aluno) => {
      const ano = aluno.ano;
      const faltas = aluno.faltas;

      for (let i = 0; i < faltas.length; i++) {
        const umaData = faltas[i]?.data;

        const dataEncontrada = acc.find((data) => data.data === umaData);

        if (dataEncontrada) {
          dataEncontrada.faltas += 1;
        } else {
          acc.push({
            ano,
            data: umaData,
            faltas: 1,
          });
        }
      }

      return acc;
    }, []);

    return turmasComFaltas;
  };

  const getMateriaComFaltas = () => {
    const turmasComFaltas = absenceObj.reduce((acc, aluno) => {
      const ano = aluno.ano;
      const faltas = aluno.faltas;

      for (let i = 0; i < faltas.length; i++) {
        const umaMateria = faltas[i]?.materia;

        const materiaEncontrada = acc.find(
          (materia) => materia.materia === umaMateria
        );

        if (materiaEncontrada) {
          materiaEncontrada.faltas += 1;
        } else {
          acc.push({
            ano,
            materia: umaMateria,
            faltas: 1,
          });
        }
      }

      return acc;
    }, []);

    return turmasComFaltas;
  };

  const turmasComFaltas = getTurmasComFaltas();
  const anoComFaltas = getAnoComFaltas();
  const professorComFaltas = getProfessorComFaltas();
  const dataComFaltas = getDataComFaltas();
  const materiaComFaltas = getMateriaComFaltas();

  console.log(professorComFaltas);

  return (
    <main className="main">
      <PageNav user={user} />

      <h1>EduTrack</h1>
      <h3 className="subtitle">Relatório de faltas</h3>

      <select onChange={(e) => setFilterOption(e.target.value)}>
        <option value="turma">turma</option>
        <option value="ano">ano</option>
        <option value="professor">professor</option>
        <option value="data">data</option>
        <option value="materia">materia</option>
      </select>

      <div className={styles.absenceContainer} ref={documentContent}>
        <table>
          <thead>
            <tr>
              <th>{filterOption}</th>
              <th>Faltas</th>
            </tr>
          </thead>
          <tbody>
            {filterOption == "turma" &&
              turmasComFaltas.map((turma) => (
                <tr key={turma.turma}>
                  <td>{turma.turma}</td>
                  <td>{turma.faltas}</td>
                </tr>
              ))}
            {filterOption == "ano" &&
              anoComFaltas.map((ano) => (
                <tr key={ano.ano}>
                  <td>{ano.ano}</td>
                  <td>{ano.faltas}</td>
                </tr>
              ))}

            {filterOption == "professor" &&
              professorComFaltas.map((prof) => (
                <tr key={prof.id}>
                  <td>{prof.professor}</td>
                  <td>{prof.faltas}</td>
                </tr>
              ))}
            {filterOption == "data" &&
              dataComFaltas.map((data) => (
                <tr key={data.data}>
                  <td>{data.data}</td>
                  <td>{data.faltas}</td>
                </tr>
              ))}
            {filterOption == "materia" &&
              materiaComFaltas.map((materia) => (
                <tr key={materia.materia}>
                  <td>{materia.materia}</td>
                  <td>{materia.faltas}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <div className={styles.btnContainer}>
        <Link to="ajuda" type="link">
          Ajuda*
        </Link>
        <div>
          <Link to="/opcao" type="link">
            Cancel
          </Link>
          <button
            onClick={() => {
              handlePrint();
              // navigate("/opcao");
            }}
          >
            Gerar relatório
          </button>
        </div>
      </div>
    </main>
  );
}
