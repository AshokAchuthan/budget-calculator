Name=localStorage.getItem("name")//ashok
// let n1 = document.getElementById('n1');
n1.innerHTML=`Hello ${Name} welcome to VOYA financial <i class="fa-sharp fa-solid fa-handshake"></i>`
  

var acblc = 0;
function ADD(){
    Salary=s2.value;
    acblc = parseFloat(Number(acblc)+Number(Salary));
    localStorage.setItem("salary",Salary);
    Salary=localStorage.getItem("salary")//ashok
    b1.innerHTML=`Your available amount is  ${acblc} `
    
   
}
function Submit(){
    room=r1.value;
    localStorage.setItem("roomrent",room);
    eletricity=e1.value;
    localStorage.setItem("eletricityrent",eletricity);
    food=f1.value;
    localStorage.setItem("foodrent",food);
    insurance=i1.value;
    localStorage.setItem("insurancerent",insurance);
    total=t1.value;
    localStorage.setItem("total",total);



    var room = parseInt(localStorage.getItem("roomrent"));
    var eletricity = parseInt(localStorage.getItem("eletricityrent"));
    var food = parseInt(localStorage.getItem("foodrent"));
    var insurance = parseInt(localStorage.getItem("insurancerent"));
    var total = parseInt(localStorage.getItem("total"));
  
    var etotal = room + eletricity + food + insurance +total;
    localStorage.setItem("etotal", etotal);
    
    acblc= parseFloat(Number(acblc)-Number(etotal));
    b1.innerHTML=`Your available amount is  ${acblc  } `

    return etotal;

}

function clearData() {
    // Clear input value
    document.getElementById("r1").value = '';
    document.getElementById("e1").value = '';
    document.getElementById("f1").value = '';
    document.getElementById("i1").value = '';
    document.getElementById("t1").value = '';
  
    // Clear localStorage
    // localStorage.clear();
  }
