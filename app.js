var tBody = document.getElementById('tbody')
console.log(tBody)

var student1 = {
    firstName: "john",
    lastName: "Doe",
    age: 200,
    id: Math.random(),
};

var student2 = {
    firstName: "king",
    lastName: "Hashmi",
    age: 100,
    id: Math.random(),
};
var student3 = {
    firstName: "Prince",
    lastName: "Ali",
    age: 499,
    id: Math.random(),
};
var student4 = {
    firstName: "Xtylish",
    lastName: "Hasan",
    age: 999,
    id: Math.random(),
};
var student5 = {
    firstName: "lol",
    lastName: "lol",
    age: 0,
    id: Math.random(),
};


// var studentList = [student1, student2, student3, student4, student5]
// console.log(studentList)

var studentList = []
console.log(studentList)

var inp1 = document.getElementById('inp1')
var inp2 = document.getElementById('inp2')
var inp3 = document.getElementById('inp3')

function addValue() {

    tBody.innerHTML = ''

    var a = inp1.value
    var b = inp2.value
    var c = inp3.value
    console.log(a)
    console.log(b)
    console.log(c)

    inp1.value = ''
    inp2.value = ''
    inp3.value = ''

    var obj = {
        firstName: a,
        lastName: b,
        age: c,
        id: Math.round(Math.random() * 100 + 10 - 3),
    }
    studentList.push(obj)
    console.log(studentList)

    var totStds = document.getElementById('totStds')
    totStds.innerHTML = `${studentList.length}`
    // console.log(totStds.innerHTML)

    for (var i = 0; i < studentList.length; i++) {
        tBody.innerHTML += ` <tr>
                                 <td><b>${i + 1}.</b></td>
                                 <td>${studentList[i].firstName}</td>
                                 <td>${studentList[i].lastName}</td>
                                 <td>${studentList[i].age}</td>
                                 <td>${studentList[i].id}</td>
                             </tr>`

    }


}




function clearValue() {

    tBody.innerHTML = ''
    studentList = []

}






