let maths = document.querySelector(".maths");
let science = document.querySelector(".science");
let english = document.querySelector(".english");
let gujrati = document.querySelector(".gujrati");
let totalMarks = document.querySelector(".total-Marks");
let percentage = document.querySelector(".percentage");
let grade = document.querySelector(".grade");
let table = document.querySelector("table")

function getResult(){
    let mathsValue = maths.value
    let scienceValue = science.value
    let englishValue = english.value
    let gujratiValue = gujrati.value

    if(mathsValue === "" || scienceValue === ""|| englishValue === "" || gujratiValue === ""){
        alert("Please fill the Marks")
        return false
    }

    if(mathsValue < 0 || mathsValue > 100 || scienceValue < 0 || scienceValue > 100 || englishValue < 0 || englishValue > 100 || gujratiValue < 0 || gujratiValue > 100) {
        alert (" Please fill marks should be between 0 to 100")
        return false
    }
    
    let totalCalculateMark = Number(mathsValue) + Number(scienceValue) + Number(englishValue) + Number(gujratiValue)

    totalMarks.textContent = totalCalculateMark 
    let totalPercentage = totalCalculateMark / 4
    percentage.textContent = `${totalPercentage}%`

    if(totalPercentage <= 33){
        grade.textContent = "Fail"
    }
    else if ( totalPercentage <=50){
        grade.textContent =" Second Class"
        table.style.backgroundColor="orange"
    }
    else if ( totalPercentage <= 80){
        grade.textContent = "First Class"
        table.style.backgroundColor="lightgreen"
    }
    else{
        grade.textContent = "Distenction"
        table.style.backgroundColor="green"

    }


    if (mathsValue < 33){
        maths.style.backgroundColor = "red";
        grade.textContent = "Fail"
        table.style.backgroundColor="#d64e18"
    }
    if (scienceValue < 33){
        science.style.backgroundColor = "red";
        grade.textContent = "Fail"
        table.style.backgroundColor="#d64e18"
    }
    if (englishValue < 33){
        english.style.backgroundColor = "red";
        grade.textContent = "Fail"
        table.style.backgroundColor="#d64e18"
    }
    if (gujratiValue < 33){
        gujrati.style.backgroundColor = "red";
        grade.textContent = "Fail"
        table.style.backgroundColor="#d64e18"
    }
    }
