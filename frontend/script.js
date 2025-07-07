async function cargarEstudiantes() {
  const response = await fetch("/api/students");
  const students = await response.json();
  const tbody = document.querySelector("#studentsTable tbody");
  tbody.innerHTML = "";
  students.forEach((student) => {
    const row = document.createElement("tr");
    row.innerHTML = `<td>${student.id}</td><td>${student.name}</td>`;
    tbody.appendChild(row);
  });
}

document.getElementById("loadButton").addEventListener("click", cargarEstudiantes);

// Hace que la tabla se cargue sola al abrir la página
window.onload = cargarEstudiantes;

