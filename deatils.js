
const employeeDetails = [
    { name: "John Doe", gender: "m", department: "Sales", salary: 5000 },
    { name: "Jane Smith", gender: "m", department: "HR", salary: 6000 },
    { name: "Mark Johnson", gender: "m", department: "IT", salary: 7000 }
  ];
  
  document.addEventListener("DOMContentLoaded", () => {
    const tableBody = document.getElementById("employee-table-body");
    
    employeeDetails.forEach((employee) => {
      const row = `
        <tr>
          <td>${employee.name}</td>
          <td>${employee.gender}</td>
          <td>${employee.department}</td>
          <td>${employee.salary}</td>
        </tr>
      `;
      tableBody.innerHTML += row;
    });
  });
  
  
  const departments = ["Sales", "HR", "IT"];
  
  document.addEventListener("DOMContentLoaded", () => {
    const tableBody = document.getElementById("employee-table-body");
  
    departments.forEach((department) => {
      employeeDetails.forEach((employee) => {
        if (employee.department === department) {
          const row = `
            <tr>
              <td>${employee.name}</td>
              <td>${employee.gender}</td>
              <td>${employee.department}</td>
              <td>${employee.salary}</td>
            </tr>
          `;
          tableBody.innerHTML += row;
        }
      });
    });
  });
  