var inc = 2;

function cloneTable () {
    if (inc <= 5) {
        var div = document.getElementById("chart");
        var table = document.getElementById("core-mix-clone");
        var clone = table.cloneNode(true);
        clone.id = "core-mix-clone" + inc;
        div.appendChild(clone);

        document.getElementById("core-mix-clone" + inc).caption.innerHTML = "Core Mix #" + inc;

        inc+=1;
    }
}

function fillForm () {
    var user = sessionStorage.getItem("calculator_user");
    if (user) {
        user = JSON.parse(user);
        console.log(user);
    }
}