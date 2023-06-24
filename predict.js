import {DecisionTree} from "./libraries/decisiontree.js"
import {VegaTree} from "./libraries/vegatree.js"

//set variables and listeners
const result = document.getElementById("result");
const submitButton = document.getElementById("submit");
submitButton.addEventListener("click", () => loadSavedModel());

//load the model
function loadSavedModel() {
    console.log("Loading saved model..")
    fetch("model.json")
        .then((response) => response.json())
        .then((model) => modelLoaded(model))
}

//predict using data input by user
function modelLoaded(model) {
    let decisionTree = new DecisionTree(model)

    let bmi = document.getElementById('bmi').value;
    let Age = document.getElementById('age').value;

    console.log(`${bmi} + ${Age}`)

    //do prediction
    let data = {bmi: bmi, Age: age}
    let prediction = decisionTree.predict(data)
    console.log("Predicted: " + prediction)

    if (prediction == 1) {
        result.innerText = `You may have diabetes.`
    } else {
        result.innerText = `You may not have diabetes.`
    }

}