const woman_percentage = new Array();
woman_percentage["latina"] = .54;
woman_percentage["black"] = .63;
woman_percentage["pacificislander"] = .62;
woman_percentage["ndn"] = .59;
woman_percentage["asian"] = .9;

function getPercentage() {
    let ethnicityPercentage = 0;
    let theForm = document.forms["wage-gap"];
    let selectedEthnicity = theForm.elements["womanethnicity"];

    ethnicityPercentage = woman_percentage[selectedEthnicity.value];

    return ethnicityPercentage;
  }

  function getInitialSalary() {
    let theForm = document.forms["wage-gap"];
    let initialSalaryAmount = theForm.elements["salary-initial"];
    let initialSalary = 0;
    if (initialSalaryAmount.value != "") {
      initialSalary = parseInt(initialSalaryAmount.value);
    }
  
    return initialSalary;
  }
  
  function calculateTotal() {
    let getCalculatedSalary = getInitialSalary() * getPercentage();
    let calculatedSalary = Math.round(getCalculatedSalary * Math.pow(10, 2)) / Math.pow(10, 2);
  
    document.getElementById('salary-calculated').innerHTML = "$" + calculatedSalary + ".";
}
