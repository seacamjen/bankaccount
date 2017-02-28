//Busniness logic
function Account (inputName, firstMoney) {
  this.inputName = inputName;
  this.firstMoney = firstMoney;
}



//front end logic
 $(function(){
  $("#register").submit(function(){
    event.preventDefault();

    var name = $("input#name").val();
    var initialDeposit = parseInt($("input#initialDeposit").val());

    var money = new Account(name, initialDeposit);
    console.log(money.firstMoney);
  $("#balance").text(money.firstMoney);

  });
 });
