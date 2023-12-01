// page 5 getting user data
function getDataFromPage5(){
  let p5NextButton = document.getElementById('p5-next-button')
  p5NextButton.addEventListener('click', () => {

    const textArea = document.getElementById('p5-description').value

    localStorage.setItem('p5-data', JSON.stringify(textArea))
  })
}
getDataFromPage5()

