
function addStudent(event) {
  event.preventDefault();
  const name = document.getElementById("studentName").value;
  const roll = document.getElementById("studentRoll").value;
  const section = document.getElementById("studentSection").value;
  if (!name || !roll || !section) {
    alert("Please fill all fields");
    return;
  }
  const key = `students_${section}`;
  const students = JSON.parse(localStorage.getItem(key)) || [];
  students.push({ name, roll });
  localStorage.setItem(key, JSON.stringify(students));
  document.getElementById("studentName").value = "";
  document.getElementById("studentRoll").value = "";
  loadStudents(section);
}

function loadStudents(section) {
  const studentList = document.getElementById("studentList");
  studentList.innerHTML = "";
  const students = JSON.parse(localStorage.getItem(`students_${section}`)) || [];
  students.forEach(student => {
    const li = document.createElement("li");
    li.textContent = `Name: ${student.name}, Roll: ${student.roll}`;
    studentList.appendChild(li);
  });
}
