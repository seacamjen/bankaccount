//Busniness logic
function Account (inputName, firstMoney, deposit, withdrawal) {
  this.inputName = inputName;
  this.firstMoney = firstMoney;
  this.deposit = deposit;
  this.withdrawal = withdrawal;
}

Account.prototype.addDeposit = function () {
 return total + this.deposit;
}

Account.prototype.subWithdra = function () {
  return total - this.withdrawal;
}

Account.prototype.doubletrans = function () {
  return total + (this.deposit - this.withdrawal);
}

var total;
//front end logic
 $(function(){
  $("#register").submit(function(){
    event.preventDefault();

    var name = $("input#name").val();
    var initialDeposit = parseInt($("input#initialDeposit").val());

    var money = new Account(name, initialDeposit, deposit, withdrawal);
  $("#balance").text(money.firstMoney);
    total = money.firstMoney;

  //Transaction Submit
    $("#transaction").submit(function(){
      event.preventDefault();

      var deposit = parseInt($("input#deposit").val());
      var withdrawal = parseInt($("input#withdrawal").val());

      var money = new Account(name, initialDeposit, deposit, withdrawal);
      if (deposit > 0 && withdrawal > 0){
        $("#balance").text(money.doubletrans());
        total = money.doubletrans();
      } else if (deposit > 0) {
        $("#balance").text(money.addDeposit());
        total = money.addDeposit();
      } else {
        $("#balance").text(money.subWithdra());
        total = money.subWithdra();
      }
    });

  //Transaction Submit
  });

 });
