console.log(createReport(allLessons, 'Maria Clara'));
/* {
  professor: 'Maria Clara',
  aulas: [ 'Matemática', 'Matemática' ],
  estudantes: 30
} */

//Utilizando o objeto (allLesson), crie uma função para contar quantos estudantes assistiram às aulas de Matemática.

const getNumberOfStudentsMath = (obj) => {
    let total = 0;
    const keys = Object.keys(obj);
    for (index in keys) {
      if(obj[keys[index]].materia === 'Matemática'){
      total += obj[keys[index]].numeroEstudantes;
      }
    }
    return total;
  }
  console.log(getNumberOfStudentsMath(allLessons));


//Utilizando o objeto (allLesson), crie uma função que deva retornar um objeto que represente o relatório do professor ou professora, as aulas que ele ou ela ministrou e o número total de estudantes.

const getInfo = (obj, name) => {
    const allLessons = [];
    let allStudent = 0;
    const values = Object.values(obj);
    for (index in values) {
      if (values[index].professor === name) {
        allLessons.push(values[index].materia)
        allStudent += values[index].numeroEstudantes;
      }
    }
    return { aulas: allLessons, estudantes: allStudent };
  }
  
  const createReport = (allLessons, name) => {
    const report = {};
    report.professor = name;
    Object.assign(report, getInfo(allLessons, name));
    return report;
  }
  console.log(createReport(allLessons, 'Maria Clara'));