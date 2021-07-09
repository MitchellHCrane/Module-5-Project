const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

//Compliment

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});

//Fortune

app.get("/api/fortune", (req, res) => {
  const fortune = ["A beautiful, smart, and loving person will be coming into your life.",
"A dubious friend may be an enemy in camouflage.", 
"A faithful friend is a strong defense.",
"A feather in the hand is better than a bird in the air.",
"A fresh start will put you on your way.",
];
let randomI = Math.floor(Math.random() * fortune.length);
let randomFortune = fortune[randomI];

res.status(200).send(randomFortune);
})

//Vehicle

app.get("/api/vehicles", (req, res) => {
  const vehicles = ["Chevrolet C8 Corvette", "Audi R8", "Nissan GT-R", "Tesla Model S Plaid", "McClaren 720 S", "Ferrari La Ferrari", "Porsche 918", "McClaren P1", "Chevrolet Silverado 2500", "Ford F-350"];
let randomCar = Math.floor(Math.random() * vehicles.length);
let randomV = vehicles[randomCar];

res.status(200).send(randomV);
})

//Vacation

app.get("/api/vacation", (req, res) => {
  const vacation = ["Lake Tahoe CA/NV", "Newport Beach CA", "Orlando FL", "Courdelene ID", "Italy", "Germany", "Scottland", "Ireland", "Malta", "Cozumel Mexico", "Spain"];
let randomTrip = Math.floor(Math.random() * vacation.length);
let randomVacation = vacation[randomTrip];

res.status(200).send(randomVacation);
})

//Lucky Number

app.get("/api/number", (req, res) => {
  const number = ["27", "47", "7", "3", "24", "6", "90", "58", "2", "101", "14"];
let randomNum = Math.floor(Math.random() * number.length);
let randomNumber = number[randomNum];

res.status(200).send(randomNumber);
})

//Input Goal
app.post("/api/goals", (req, res) => {
  res.status(200).send(data);


})



app.listen(4000, () => console.log("Server running on 4000"));
