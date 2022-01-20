
function calculateDiscount() {

    let totalItems = document.getElementById("totalItems").value;
    let percentageOff = document.getElementById("percentageOff").value;
  
    if (totalItems === "" || percentageOff == 0) {
      alert("Please enter values");
      return;
    }

    let total = (totalItems * percentageOff); 

    total = total.toFixed(2);

    document.getElementById("totalPrice").style.display = "block";
    document.getElementById("price").innerHTML = total;
  
    }
  
    document.getElementById("totalPrice").style.display = "none";
    
    document.getElementById("calculate").onclick = function() {
        calculateDiscount();
    
};