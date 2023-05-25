class EmployeePayRollData{
    get id(){
        return this._id;
    }
    set id(id){
        this._id=id
    }
  get name(){
    return this._name;
  }
    set name(name) {
      let nameRegex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$');
      if (nameRegex.test(name)) {
        this._name = name;
      } else {
        throw new Error('Invalid name format. Name must start with a capital letter and have a minimum of 3 characters.');
      }
    }
    
        get department() {
          return this._department;
        }
        set department(department) {
          this._department = department;
        }
      
        get gender() {
          return this._gender;
        }
        set gender(gender) {
          this._gender = gender;
        }
      
        
        get employeeNotes() {
          return this._employeeNotes;
        }
        set employeeNotes(notes) {
          this._employeeNotes = notes;
        }
      
        
        get profilePic() {
          return this._profilePic;
        }
        set profilePic(pic) {
          this._profilePic = pic;
        }
        get startDate() {
              return this._startDate;
            }
        set startDate(startDate) {
              let now = new Date();
              let thirtyDaysAgo = new Date();
              thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
          
              if (startDate <= now && startDate >= thirtyDaysAgo) {
                this._startDate = startDate;
              } else {
                throw new Error('Invalid start date. Start date must not be a future date and should be within 30 days of joining.');
              }
            }
      }
      
      window.addEventListener('DOMContentLoaded',add);
      function add() {
        const name =document.querySelector('#fullname');
        const texterror=document.querySelector('.text-error');
        name.addEventListener('input',function(){
          if(name.value.length==0){
          texterror.textContent="";
          return;
          }
          try{
          (new EmployeePayRollData())._name=name.value;
          texterror.textContent="";
          }catch(e){
            texterror.textContent.e;
          }
        })
      


// const salaryRange = document.getElementById('#salary');
// const salaryValue = document.getElementById('.salaryValue');
// console.log(salaryRange);
// salaryRange.addEventListener('input', function() {
//   salaryValue.textContent = salaryRange.value;
// });
const salary = document.querySelector('#salary');
    const output = document.querySelector('.salaryValue');
    output.textContent = salary.value;
    salary.addEventListener('input',function(){
        output.textContent = salary.value
    });
      }



const createEmployeePayroll = () => { 
  let employeePayrollData = new EmployeePayRollData();
 try{ employeePayrollData.name = getInputValueById('#name'); 
}catch (e) {
  setTextValue('.text-error', e); 
  throw e; 
} employeePayrollData.profilePic = getSelectedValues('[name=profile]').pop();
   employeePayrollData.gender = getSelectedValues('[name=gender]').pop(); 
   employeePayrollData.department = getSelectedValues( '[name=department]');
    employeePayrollData.salary = getInputValueById('#salary');
     employeePayrollData.note = getInputValueById('#notes');
    let date = getInputValueById('#day')+" "+getInputValueById('#month')+" "+ getInputValueById('#year') ; 
    employeePayrollData.date = Date.parse(date); alert(employeePayrollData.toString()); 
    return employeePayrollData; 
}
const getSelectedValues = (propertyValue) => {
  let allItems = document.querySelectorAll(propertyValue); 
let setitems = [];
 allItems.forEach(item => { 
  if(item.checked) setitems.push(item.value); }); 
 return setitems; 
} 

const getInputValueById = (id) => { 
  let value = document.querySelector(id).value;
   return value; 
  } 
 const getInputElementValue = (id) => {
   let value = document.getElementById(id).value;
   return value; 
 }
    
 const save = () => { try {
  let employeePayrollData = createEmployeePayroll(); 
  createAndupdateStorage(employeePayrollData); 
} catch (e){ return; 
} 
}
function createAndupdateStorage(employeePayrollData){
 let employeePayrolllist = JSON.parse(localStorage.getItem("EmployeePayrolllist")); 
if(employeePayrolllist != undefined)
{ employeePayrolllist.push(employeePayrollData);
 } else{employeePayrolllist = [employeePayrollData]
 }
 alert(employeePayrolllist.toString()); 
localStorage.setItem("EmployeePayrolllist", JSON.stringify(employeePayrolllist)) 
}

const resetForm = () => { setValue('#name',''); 
unsetSelectedValues('[name=profile]'); 
unsetSelectedValues('[name=gender]'); 
unsetSelectedValues('[name=department]');
 setValue('#salary',''); 
 setValue('#notes',''); 
 setValue('#day','1'); 
 setValue('#month','January'); 
 setValue('#year','2020'); 
} 
const unsetSelectedValues = (propertyValue) => 
{ let allItems = document.querySelectorAll(propertyValue);
   allItems.forEach(item => 
    { item.checked = false; 
    }) ; 
} 
const setTextValue = (id, value) => 
{ const element = document.querySelector(id);
   element.textContent = value; 
} 
const setValue = (id, value) => 
{ const element = document.querySelector(id);
   element.value = value; 
} 
    
      
