let command = "";
const view = function (){
    render();
}

const setView = function () {
    $('.content').empty();
    command = "";
    view ();
}
const setDelete = function () {
    $('.content').empty();
    command = 'delete';
    view ();
}
const setAdd = function () {
    $('.content').empty();
    command = "add";
    view ();
}
const setUpdate = function () {
    $('.content').empty();
    command = "update";
    view ();
}
const submitFun = function (e) {
    e.preventDefault();
    if (command = 'add'){
        getInputVal();
    }else if (command = 'verify'){
        verifyFun();
    }else if (command = 'update'){
        updateFun();
    }else {
        deleteFun();
    };
}

// add 
const getInputVal = function () {
    const phoneVal = $('.phoneInput').val();
    const nameVal = $('.nameInput').val();
    const roomVal = $('.roomInput').val();
    employeeList.push({
        name: nameVal,
        officeNum: roomVal,
        phoneNum: phoneVal
    })
// clear actions 
    $('.phoneInput').val("");
    $('.nameInput').val("");
    $('.roomInput').val("");
    render();
};

//verify
const verifyFun = function() {
    const nameVal = $('.nameInput').val();
    
    const nameMatches = function (employee) {
        return employee.name === nameVal;
    }

    if(employeeList.find(nameMatches)) {
        $(".content").html('<p>"yes"</p>');
    } else {
        $(".content").html('<p>"no"</p>');
    }
    $('.phoneInput').val("");
    $('.nameInput').val("");
    $('.roomInput').val("");
}
//update
const updateFun = function () {
    const phoneVal = $('.phoneInput').val();
    const nameVal = $('.nameInput').val();
    const roomVal = $('.roomInput').val();
    employeeList.push({
        name: nameVal,
        officeNum: roomVal,
        phoneNum: phoneVal
    })
// clear actions 
    $('.phoneInput').val("");
    $('.nameInput').val("");
    $('.roomInput').val("");
    render();
};

//delete
const deleteFun = function () {
    const nameVal = $('.nameInput').val();
    for (let i = 0; i < employeeList.length; i++) {
        if(employeeList[i].name === nameVal){
            employeeList.splice(i, 1);
        }
    }
    $('.phoneInput').val("");
    $('.nameInput').val("");
    $('.roomInput').val("");
    render();
}


// rendering 
const render = function () {
    let emptyList = "";
    for (let i = 0; i < employeeList.length; i++){
        emptyList += `<div class = "employeeInfo"><p>${employeeList[i].name} </p><p>${employeeList[i].officeNum} </p><p>${employeeList[i].phoneNum} </p></div>`;
    }
    $('.content').html(emptyList);
}

  
// Event Listeners
$(".submit").on("click",submitFun);
$("#viewButton").on("click",setView);
$("#addButton").on("click",getInputVal);
$("#verifyButton").on("click",verifyFun);
$("#updateButton").on("click",updateFun);
$("#deleteButton").on("click",deleteFun);
