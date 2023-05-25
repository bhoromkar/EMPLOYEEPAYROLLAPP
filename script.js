document.addEventListener('DOMContentLoaded', function() {
    populateStartDate();
  
    document.getElementById('salary').addEventListener('input', function() {
      var salaryOutput = document.getElementById('salaryOutput');
      salaryOutput.textContent = this.value;
    });
  
    document.getElementById('employeeForm').addEventListener('submit', function(e) {
      e.preventDefault();
      var name = document.getElementById('name').value;
      var profilePic = document.getElementById('profilePic').value;
      var gender = document.querySelector('input[name="gender"]:checked').value;
      var departments = Array.from(document.querySelectorAll('input[name="department"]:checked')).map(function(checkbox) {
        return checkbox.value;
      });
      var salary = document.getElementById('salary').value;
      var day = document.getElementById('day').value;
      var month = document.getElementById('month').value;
      var year = document.getElementById('year').value;
      var startDate = day + '-' + month + '-' + year;
      var notes = document.getElementById('notes').value;
  
      var employeeData = {
        name: name,
        profilePic: profilePic,
        gender: gender,
        departments: departments,
        salary: salary,
        startDate: startDate,
        notes: notes
      };
  
      console.log(employeeData);
    });
  });
  
  function populateStartDate() {
    var daySelect = document.getElementById('day');
    var monthSelect = document.getElementById('month');
    var yearSelect = document.getElementById('year');
  
    for (var i = 1; i <= 31; i++) {
      var option = document.createElement('option');
      option.value = i;
      option.textContent = i;
      daySelect.appendChild(option);
    }
  
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    for (var i = 0; i < months.length; i++) {
      var option = document.createElement('option');
      option.value = months[i];
      option.textContent = months[i];
      monthSelect.appendChild(option);
    }
  
    var currentYear = new Date().getFullYear();
    for (var i = currentYear; i >= currentYear - 10; i--) {
      var option = document.createElement('option');
      option.value = i;
      option.textContent = i;
      yearSelect.appendChild(option);
    }
    function cancelForm() {
      document.getElementById("employeeForm").reset();
    }
   
    
  }
  