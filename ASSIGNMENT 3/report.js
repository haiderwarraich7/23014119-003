
function loadReports() {
  const section = document.getElementById("reportSection").value;
  const attendanceKey = `attendance_${section}`;
  const reports = JSON.parse(localStorage.getItem(attendanceKey)) || [];
  const tableBody = document.getElementById("reportTableBody");
  tableBody.innerHTML = "";
  reports.forEach(entry => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td class="px-4 py-2">${new Date(entry.date).toLocaleString()}</td>
      <td class="px-4 py-2">${section}</td>
      <td class="px-4 py-2">
        <ul class="list-disc ml-4">
          ${entry.attendance.map(a => `<li>${a.roll} - ${a.status}</li>`).join("")}
        </ul>
      </td>
    `;
    tableBody.appendChild(row);
  });
}
