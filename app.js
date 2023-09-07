var tBody = document.getElementById('tbody')
var studentList = []   //array of objects
var inp1 = document.getElementById('inp1')   // firstname
var inp2 = document.getElementById('inp2')   // lastname
var inp3 = document.getElementById('inp3')   // age

function addValue() {
    tBody.innerHTML = ''
    var a = inp1.value
    var b = inp2.value
    var c = inp3.value
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
    var totStds = document.getElementById('totStds')
    totStds.innerHTML = `${studentList.length}`

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






