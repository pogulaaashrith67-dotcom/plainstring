// alert("hello  from js")
console.log("hello from js")

data = {
    "name" : "john",
    "gender" : "Male"
}

data.name


var users =[
    {
        "name" : "john Doe",
        "gender" : "Male",
        "img" : "john.png"
    },
    {
         "name" : "jane Doe",
        "gender" : "female",
        "img" : "jane.png"
    }
]


var id = 0;
function toggleUser(){
    id = (id + 1) % users.length;
    var userimage=document.getElementById("userimage");
    userimage.src =users[id].img;
    var username=document.getElementById("user-name");
    username.textContent = users[id].name;
    var usergender=document.getElementById("user-gender");
    usegender.innerHTML = users[id].gender;

}