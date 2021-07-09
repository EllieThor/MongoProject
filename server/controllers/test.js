

var a = 10;
var s = "ssss"

function a() {
    console.log("A1")
    setTimeout(function () { alert("Hello"); }, 0);
    b();
    a = 8;
    console.log("A2",a)
    //code
}

function b() {
    c()
    console.log("B")
}


function c() {
    console.log("C")
}

a();

