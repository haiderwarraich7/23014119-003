
function loadStudentList(section) {
  const container = document.getElementById("studentList");
  container.innerHTML = "";
  const students = JSON.parse(localStorage.getItem(`students_${section}`)) || [];
  students.forEach(student => {
    const div = document.createElement("div");
    div.classList.add("flex", "items-center", "mb-2");
    div.innerHTML = `
      <span class="w-1/2">${student.name} (${student.roll})</span>
      <label class="inline-flex items-center">
        <input type="radio" name="attendance_${student.roll}" value="Present" class="form-radio" checked>
        <span class="ml-2">Present</span>
      </label>
      <label class="inline-flex items-center ml-4">
        <input type="radio" name="attendance_${student.roll}" value="Absent" class="form-radio">
        <span class="ml-2">Absent</span>
      </label>
    `;
    container.appendChild(div);
  });
}

function submitAttendance(event) {
  event.preventDefault();
  const section = document.getElementById("attendanceSection").value;
  const students = JSON.parse(localStorage.getItem(`students_${section}`)) || [];
  const attendance = students.map(student => {
    const status = document.querySelector(`input[name="attendance_${student.roll}"]:checked`).value;
    return { ...student, status };
  });

  const key = `attendance_${section}`;
  const existing = JSON.parse(localStorage.getItem(key)) || [];
  existing.push({ date: new Date(), attendance });
  localStorage.setItem(key, JSON.stringify(existing));
  alert("Attendance submitted successfully!");
}
