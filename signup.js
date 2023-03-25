function register(){
    Name=n1.value;
    dob=n2.value;
    email=n3.value;
    passwrd=n4.value;
    localStorage.setItem("name",Name);//login value

    cust={
        NAME:Name,
        DOB:dob,
        EMAIL:email,
        PASSWORD:passwrd
    }
    if(email in localStorage ){
        alert('email is already present')
    }
    else{
        localStorage.setItem(email,JSON.stringify(cust));
        alert("registration successfull");
        window.location.href="./login.html"
    }


}