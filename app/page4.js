//page 4 getting user data 
function getDataFromPage4(){
  let p4NextButton = document.getElementById('p4-next-button')
  p4NextButton.addEventListener('click',  () =>{

    const interest = document.querySelector('select[name="interest"]').value
    const arr = []

    document.querySelectorAll('input[type="checkbox"]:checked').forEach(item =>{
      arr.push(item.id)
    })

    localStorage.setItem('p4-data', JSON.stringify({interest, arr}))
  })

}
getDataFromPage4()
