alert("Lê Tuấn Dũng")

console.log("Lê Tuấn Dũng")

document.write("Lê Tuấn Dũng")


function showname() {
    document.getElementById("demo1").innerText = "<h1>Lê Tuấn Dũng</h1>";
    document.getElementById("demo2").innerHTML = "<h1>Lê Tuấn Dũng</h1>";
}

var demo3 = document.getElementById("demo3");
demo3.addEventListener("click", name);
function name () {
    alert("Dũng");
}