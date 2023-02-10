/**
 * In this file we fetched student list data from firestore.
 * Then we make an array of today present students list.
 * Then we make a new xlsx sheet with present or absent information of students.
 */

const StudentList = require("./config");
const xlsx = require("xlsx");

const day = new Date().toLocaleDateString().toString();

const RegNumbers = [
  2018331002, 2018331008, 2018331010, 2018331012, 2018331024, 2018331025,
  2018331044, 2018331062, 2018331104,
];

async function getStudentList() {
  const snapshot = await StudentList.get();
  const list = snapshot.docs.map((doc) => ({ ...doc.data() }));
  console.log(list);

  console.log(typeof list[0]["Registration Number"]);

  let newList = list.map((student) => {
    if (RegNumbers.includes(student["Registration Number"])) {
      student = { ...student };
      student[day] = "Present";
    } else {
      student = { ...student };
      student[day] = "Absent";
    }

    return student;
  });

  console.log(newList);

  const newWB = xlsx.utils.book_new();
  const newWS = xlsx.utils.json_to_sheet(newList);
  xlsx.utils.book_append_sheet(newWB, newWS, "Present-Absent");
  xlsx.writeFile(newWB, "Present Absent File.xlsx");
}

getStudentList();
