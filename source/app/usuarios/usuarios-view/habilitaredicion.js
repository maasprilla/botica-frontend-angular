function habilitarinput(button) {
  var padre = $(button).parent();
  var input = padre.find('input').removeAttr("disabled");
  $(button).hide();
  var input = padre.find('button').show();

}
