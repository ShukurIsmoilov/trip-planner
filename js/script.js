//Selecting cities
const moscow = document.querySelector(".moscow");
const london = document.querySelector(".london");
const newYork = document.querySelector(".new-york");
const paris = document.querySelector(".paris");
const jet = document.querySelector(".jet");

//Selecting array of inputs
const inputsNodeList = document.querySelectorAll("input");
const inputsArray = Array.prototype.slice.call(inputsNodeList);

//Selecting run button
const runButton = document.querySelector(".btn-run");

function readCommand() {
    const rawCitiesArray = [];
    let citiesArray = [];
    const reCity = /^airplane.flyTo\('(.*?)'\);$/;
    let isAlgorithmCorrect = true;

    for (let i = 0; i < 4; i++) {
        rawCitiesArray[i] = inputsArray[i].value.trim().match(reCity);
    }
    for (let i = 0; i < 4; i++) {
        citiesArray[i] = rawCitiesArray[i][1].toLowerCase();
    }
    citiesArray = [... new Set(citiesArray)];

    if (citiesArray.length === 4) {
        for (let i = 0; i < 4; i++) {
            if (citiesArray[i] === 'moscow') {
                citiesArray[i] = moscow;
            } else if (citiesArray[i] === 'london') {
                citiesArray[i] = london;
            } else if (citiesArray[i] === 'paris') {
                citiesArray[i] = paris;
            } else if (citiesArray[i] === 'new-york') {
                citiesArray[i] = newYork;
            } else {
                isAlgorithmCorrect = false;
                break;
            }
        }

        if (isAlgorithmCorrect) {
            jet.classList.remove("jet");
            for (let i = 0; i < 4; i++) {
                task(i);
            }

            function task(i) {
                setTimeout(function () {
                    citiesArray[i].classList.add("jet");
                    inputsArray[i].classList.add("correct-command");
                }, 2000 * i);
            }

            for (let i = 0; i < 4; i++) {
                task2(i);
            }

            function task2(i) {
                setTimeout(function () {
                    citiesArray[i].classList.remove("jet");
                }, 2000 * i + 2000);
            }


        } else {
            console.log("Syntax error, Correctly type city names");
            alert("Syntax error, Correctly type city names");
        }

    } else {
        console.log("Syntax error");
        alert("Syntax error");
    }








}

runButton.addEventListener('click', readCommand);