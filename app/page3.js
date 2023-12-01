// page 3 getting user data -> 
function getDataFromPage3(){
  let p3Button = document.getElementById('p3-next-button')
  p3Button.addEventListener('click', () =>{
  
    
    let AccountStatus = document.querySelector('select[name="accountType"]').value
  
    const financialMarket = document.querySelector('[type="radio"]:checked').id
    const userData = {
      financialMarket: financialMarket,
      AccountStatus: AccountStatus
    }
    localStorage.setItem("p3-data", JSON.stringify(userData))
  })
  }
  getDataFromPage3()
  