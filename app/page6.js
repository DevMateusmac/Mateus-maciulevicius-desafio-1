//page 6 getting user data
function getDataFromPage6(){
  let submitForm = document.getElementById('p6-form')

  submitForm.addEventListener('submit', (ev) => {
    ev.preventDefault()
    let name = document.getElementById('name-input').value
    let email = document.getElementById('email-input').value
    let age = document.getElementById('age-input').value
    
    if(!name || !email || !age){
      return alert("insira os dados no formulário")
    }
    localStorage.setItem("p6-data", JSON.stringify({name, email, age}))
    window.location.href = 'finalPage.html'
  })
}
getDataFromPage6()
