function sendEmail(e) {
  
  //response
  //getRespondentEmail
  var html = HtmlService.createTemplateFromFile("email.html");
  var htmlText = html.evaluate().getContent();
  Logger.log(htmlText);
  var emailto = e.response.getRespondentEmail();
  var subject = "Thanks for registering E-Conference!"
  var textBody = "This email requires HTML support. Please make sure you open with a client that support it."
  var options = { htmlBody: htmlText };
  
  if(emailto !== undefined){
  
  GmailApp.sendEmail(emailto, subject, textBody, options)
}
}