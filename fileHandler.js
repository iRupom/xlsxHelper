/**
 * Handling input file upload in web page
 */

let fileUpload = document.getElementById("imageUpload");

let input;

imageUpload.onchange = function () {
  input = this.files[0];
};

let studentFile;

function saveFile() {
  if (!input) {
    alert("Please select a file");
  } else {
    console.log("Input file is selected successfully");
    studentFile = input;
  }
}

console.log(studentFile);
