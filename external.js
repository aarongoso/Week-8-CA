function randomNumber() {
  var fRandomNumber = Math.random();

  var sPreviousContent = document.getElementById('displayNumber').innerHTML

  document.getElementById('displayNumber').innerHTML = sPreviousContent + "<br>" + fRandomNumber;
}

function promptMe(){
    var a = prompt("Enter first number");
    var b = prompt("Enter second number");
    var parseA = parseInt(a);
    var parseB = parseInt(b);
    var sum = (parseA + parseB);
    document.write("The sum of" + a + "+" + b + "=" + sum);
    alert("The sum of" + a + "+" + b + "=" + sum);
}
