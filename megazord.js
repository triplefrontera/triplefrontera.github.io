// No scalability, just get the job done and create functions as needed


console.log("VIVA PERON")


function f1() {
    alert("f1 called");
    //form validation that recalls the page showing with supplied inputs.    
}
window.onload = function() {
    document.getElementById("btn-culo").onclick = function fun() {
        alert("hello");
        f1();
        //validation code to see State field is mandatory.  
    }
}