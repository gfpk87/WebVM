pmt("root", "/")

function pmt(username, path) {
    /*let username = "root";
    let path = "~";*/
    let prompt = username + " at " + path;
    document.getElementById("prompt").innerText = prompt;
}

function runcmd() {
    /*let orgi = document.getElementById("cons").innerHTML;*/
    let command = document.querySelector('#cmd').value;
    check(command);
    /*document.getElementById("cons").innerHTML = orgi + " 123"*/
}
function simpPrint(message) {
    /* let org = document.getElementById("cons").value; */

    document.getElementById("cons").innerHTML += "<br/>"+message;
}
function check(cmd) {

    if (cmd == "hello") {
        simpPrint("Hello world!");
    } else if (cmd == "") {
        simpPrint("Psh: invalid command: blank.");
    } else {
        simpPrint("Psh: command not found.");
    }
    document.getElementById("cmd").value = ""
}
