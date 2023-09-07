// fill in javascript code here

let myname = document.getElementById("name");
// console.log(myname)
let empid = document.getElementById("employeeID")
// console.log(empid)
let department = document.getElementById("department");
// console.log(department)
let exp = document.getElementById("exp");
// console.log(exp)
let email = document.getElementById("email");
// console.log(email)
let mobile = document.getElementById("mbl");
// console.log(mobile)

let tbody = document.querySelector("tbody")
// let tr = document.createElement("tr");
// tbody.append(tr);

let form = document.querySelector("form");
form.addEventListener("submit",function(e){
    e.preventDefault()

    let tr = document.createElement("tr");


    let td1 = document.createElement("td");
    td1.innerText = myname.value;
    tr.append(td1);

    let td2 = document.createElement("td");
    td2.innerText = empid.value;
    tr.append(td2);

    let td3 = document.createElement("td");
    td3.innerText = department.value;
    tr.append(td3);

    let td4 = document.createElement("td");
    td4.innerText = exp.value;
    tr.append(td4);

    let td5 = document.createElement("td");
    td5.innerText = email.value;
    tr.append(td5);

    let td6 = document.createElement("td");
    td6.innerText = mobile.value;
    tr.append(td6);
    
    let position = ""

    if(exp.value >= 5){
        position = "Senior"
    }
    else if( exp.value >= 2 && exp.value < 5){
        position = "Junior"
    }
    else if ( exp.value <= 1){
        position= "Fresher"
    }
    else{
        position='Invalid'
    }
    
    let td7 = document.createElement("td");
    td7.innerText = position;
    tr.append(td7);

    let btn = document.createElement("button")
    btn.innerText = "Delete"
    tr.append(btn)

    btn.addEventListener("click",function(){
        tr.innerHTML = ""
    })


    tbody.append(tr);
})