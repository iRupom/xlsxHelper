/**
 * This file read xlsx file and convert xlsx file into array of json objects.
 * The we upload the record of the students into the firebase firestore
 */

const StudentList = require("./config");
const xlsx = require("xlsx");

// extracting student list as json file from student xlsx file
let workBook = xlsx.readFile("student.xlsx");
let workSheet = workBook.Sheets[workBook.SheetNames[0]];
console.log(workBook.SheetNames[0]);
const studentArray = xlsx.utils.sheet_to_json(workSheet);
console.log(studentArray);

// uploading data to firebase firesotre
// studentArray.forEach((student) => {
//   StudentList.add(student).then(() => {
//     console.log(`${student.Name} upladed successfully`);
//   });
// });
