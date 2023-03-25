function login(){
    email=uname.value;
    paswd=upass.value;
    localStorage.setItem("EMAIL",email);
    localStorage.setItem("PASWD",paswd);

    if(email in localStorage){
        cust=JSON.parse(localStorage.getItem(email));

        if(paswd==cust.PASSWORD){
            alert("login successfull");
            window.location.href="./home.html";
        }
        else{
            alert("incorrect password")
        }
    }
    else{
        alert("invalid userid number")
    }
}

