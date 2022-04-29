
EditMyHealthButton.onclick=function(){
    ChangeForm(MyHealthEdit);
}


MyHealth.onshow=function(){


  if (localStorage.myAge) {
  LabelAgeResults.innerHTML = localStorage.myAge;
  }
  
  if (localStorage.myWeight) {
  LabelWeightResults.innerHTML = localStorage.myWeight;
  }
  
    if (localStorage.myHeight) {
  LabelHeightResults.innerHTML = localStorage.myHeight;
  }
  
//      if (localStorage.mySmoking) {
//  LabelSmokerResults.innerHTML = localStorage.mySmoking;
//  }
//  
//      if (localStorage.myExercise) {
//  LabelExerciseResults.innerHTML = localStorage.myExercise;
//  }
}


