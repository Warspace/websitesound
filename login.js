function checkCreds() {
    console.log("checkCreds() started");
    var firstname = document.getElementById("fName").value;
    var lastname = document.getElementById("lName").value;
    var badgenumb = document.getElementById("badgeID").value;
    var fullname = firstname + " " + lastname;
    document.getElementById("LoginStatus").innerHTML = fullname;

    console.log("Full name is" + fullname)
    if (fullname.length > 20 || fullname.length < 2) {
        document.getElementById("LoginStatus").innerHTML =
            "Invalid Full Name! Plaese Submit a Valid Full Name";
    } else if(badgenumb > 999 || badgenumb < 0){
        document.getElementById("LoginStatus").innerHTML = 
        "Invalid Badge Number Please Enter a Valid Bage Number";
    }else{
        alert("Welcome, "+ fullname);
        location.replace("UATSpacePage.html");
    }
}