//Gets Input elements related to difficulty
const difficultyLevels = document.getElementsByName("difficulty");

const operators = ["+","-","*", "/"];
const equationText = document.getElementById("equation-text");

const userAnswerInput = document.getElementById("user-answer");
const feedbackText = document.getElementById("feedback-text");

const userWorkSpace = document.getElementById("workSpace");

function getRandomEquation(){
  //Resets the elements
  userWorkSpace.value="";
  feedbackText.innerHTML = "...";
  userAnswerInput.value = "0";
  //Cycles through DifficultyLevels to find selected difficulty
  for(difficultyLevel of difficultyLevels)
  {
    if(difficultyLevel.checked)
    {
      if(difficultyLevel.value == "easiest")
      {
       equationText.innerHTML = String(getRandomInt(20,2)) + String(operators[getRandomInt(2,0)]) + String(getRandomInt(20,2)) ;
       
       console.log(Number(eval(equationText.innerHTML).toFixed(2)));
       return;
      }
      else if(difficultyLevel.value == "medium")
      {
       equationText.innerHTML = String( getRandomInt(45,3)) + String(operators[getRandomInt(2,0)]) + String(Number(getRandomFloat(30,1.01).toFixed(2))) ;
       
       console.log(Number(eval(equationText.innerHTML).toFixed(2)));
       return;
      }
      else if(difficultyLevel.value == "hard")
      {
       equationText.innerHTML = String( getRandomInt(45,10)) + String(operators[getRandomInt(3,0)]) + String(Number(getRandomFloat(20,1.01).toFixed(2))) ;
       
       console.log(Number(eval(equationText.innerHTML).toFixed(2)));
       return;
      }
      //Add code for other difficulty levels
    }
  }
}




function getRandomInt(max,min){
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function getRandomFloat(max,min){
  return Math.random() * (max - min + 1) + min;
}



function checkUserAnswer(){
  if(userAnswerInput.value != 0)
  {
    if(Number(parseFloat(userAnswerInput.value)
    .toFixed(2)) == Number(eval(equationText.innerHTML).toFixed(2)))
    {
      feedbackText.innerHTML = "correct!";
    }
    else
    {
      feedbackText.innerHTML = "...incorrect";
    }
  }
}