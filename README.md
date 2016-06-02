# jquery-and-ajax
This is an exercise for people learning ajax and jquery.

Setup:
make sure you have node installed on your system.
clone down this repo
run `npm install` from the root of this file to install dependancies
run `nodemon server.js` to server the app on http://localhost:3000

Instructions:
wtire some jquery in scripts.js to do the following:
When page is loaded it should show all the people that are altrady created:
  on page load send a get request to '/people'
  take that response and append each person to the <ul> element

Allow a user to create a new person:
  capture the submit event on the form using jQuery's submit event: https://api.jquery.com/submit/
  prevent the default action of the form 
  capture the values in form fields
  send a post request to the endpoint '/post' with the data from the form
  take the object returned from the request and append it to the <ul> item

Resources:
jQuery page load: https://learn.jquery.com/using-jquery-core/document-ready/
jQuery prevent default: https://api.jquery.com/event.preventdefault/
jQuery's submit event: https://api.jquery.com/submit/
Get request with jQuery: https://api.jquery.com/jquery.get/
Post request with jQuery: https://api.jquery.com/jquery.post/
