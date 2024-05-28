var tablinks = Array.from(document.getElementsByClassName("tab-links"));
var tabcontents = Array.from(document.getElementsByClassName("tab-contents"));

function opentab(event, tabname) {
  for (let tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (let tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}


const scriptURL = 'https://script.google.com/macros/s/AKfycby6lRlMBCMxezYEcDg8ER46WN1bvpAxcdZE_dU5Jx6x5SAq8WP_WxI_Hs-mhpvzKRzM/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg");
 
form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
      msg.innerHTML = "Message sent successfully!"
      setTimeout(function(){
        msg.innerHTML = ""
      },5000)
      form.reset();
    })
    .catch(error => console.error('Error!', error.message))
})

