
let empPayrollList;
window.addEventListener('DOMContentLoaded', (event) => {
    empPayrollList = getEmployeePayrollDataFromStorage();
    document.querySelector(".emp-count").textContent = empPayrollList.length;
    createInnerHtml();
    console.log(empPayrollList);
    localStorage.removeItem('editEmp');
});
const getEmployeePayrollDataFromStorage = () => {
    return localStorage.getItem('EmployeePayrolllist') ?
        JSON.parse(localStorage.getItem('EmployeePayrolllist')) : [];
}
//template for es6 feature
const createInnerHtml = () => {
    //if (empPayrollList.length === 0) return;
    const headerHtml = "<th></th> <th>Name</th> <th>Gender</th> <th>Department</th> <th>Salary</th>" +
    "<th>Start Date</th> <th>Actions</th>";
    //  let empPayrollData = creteEmployeePayrollJSON[0];
    let innerHtml = `${headerHtml}`;
    for (const empPayrollData of empPayrollList) {
        innerHtml = `${innerHtml}
     <tr> 
        <td>
     <img class="profile" src="${empPayrollData._profilePic}" alt="">
        </td> 
        <td>${empPayrollData._name}</td>
        <td>${empPayrollData._gender}</td>
        <td>${getDeptHtml(empPayrollData._department)}</td>
        <td>${empPayrollData._salary}</td> 
        <td>${empPayrollData._startDate}</td>
       <img name=${empPayrollData._id}" onclick="update(this)"
        src="../assets/icons/create-black-18dp.svg" alt="edit">     
        </td> 
        </tr>`;
    }
    document.querySelector('#tabledisplay').innerHTML = innerHtml;
}

const creteEmployeePayrolJSON = () => {
    let empPayrollListLocal =
        [{
            _name: 'Marayan Mahadevan',
            _gender: 'male',
            _department: ['Engineering', 'Finance'],
            _salary: '500000',
            _startDate: '29 Oct 2019',
            _note: '',
            _id: new Date.getTime(),
            _profilePic: '../assets/profile-imanes/Ellinse -2.png.'
        }

        ];
    return empPayrollListLocal;
}

const getDeptHtml = (deptList) => {
    let deptHtml = '';
    for (const dept of deptList) {
        deptHtml = `${deptHtml} <div class='dept—label'>${dept}</div>`
    }
    return deptHtml;
}