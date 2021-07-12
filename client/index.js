const complimentButton = document.getElementById("complimentButton")
const fortuneButton = document.getElementById("fortuneButton")
const vehicleButton = document.getElementById("vehicleButton")
const vacationButton = document.getElementById("vacationButton")
const numberButton = document.getElementById("numberButton")
const goalButton =document.getElementById("goalButton")

//Event Listeners/Functions

complimentButton.addEventListener("click", () => {
    axios.get("http://localhost:4000/api/compliment").then(res) => alert(res.data)
})
fortuneButton.addEventListener("click", () => {
    axios.get("http://localhost:4000/api/fortune").then((res) => alert(res.data))
  }; 
       
vehicleButton.addEventListener("click", () => {
    axios.get("http://localhost:4000/api/vehicles").then(res) => alert(res.data))
})

vacationButton.addEventListener("click", () => {
    axios.get("http://localhost:4000/api/vacation").then((res) => alert(res.data))
  }; 

numberButton.addEventListener("click", () => {
    axios.get("http://localhost:4000/api/number").then((res) => alert(res.data))
  }; 

goalButton.addEventListener("click", () => {
    axios.get("http://localhost:4000/api/goal").then((res) => alert(res.data))
  }; 