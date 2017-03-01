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
function resetFields() {
  $("input#name").val("");
  $("input#initialDeposit").val("");
  $("input#deposit").val("");
  $("input#withdrawal").val("");
}
var total;
//front end logic
 $(function(){
  $("#register").submit(function(){
    event.preventDefault();

    var name = $("input#name").val();
    var initialDeposit = parseInt($("input#initialDeposit").val());

    var money = new Account(name, initialDeposit, deposit, withdrawal);

    $(".welcomeName").text(" " + money.inputName);
    $("#balance").text("$ " + money.firstMoney);
    total = money.firstMoney;
    $("#register").hide();
    $("#loggedIn").show();
  //Transaction Submit
    $("#transaction").submit(function(){
      event.preventDefault();

      var deposit = parseInt($("input#deposit").val());
      var withdrawal = parseInt($("input#withdrawal").val());

      var money = new Account(name, initialDeposit, deposit, withdrawal);
      if (deposit > 0 && withdrawal > 0){
        $("#balance").text("$ " + money.doubletrans());
        total = money.doubletrans();
      } else if (deposit > 0) {
        $("#balance").text("$ " + money.addDeposit());
        total = money.addDeposit();
      } else {
        $("#balance").text("$ " + money.subWithdra());
        total = money.subWithdra();
      }
      if (total < 0) {
        $("#balance").css("color", "red");
      } else {
        $("#balance").css("color", "green");
      }

      resetFields();
    });

  //Transaction Submit
  });

 });
