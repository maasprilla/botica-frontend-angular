function habilitarinput(button) {
  var padre = $(button).parent();
  var input = padre.find('input').removeAttr("disabled");
}

//$('span.hijo').parent();
