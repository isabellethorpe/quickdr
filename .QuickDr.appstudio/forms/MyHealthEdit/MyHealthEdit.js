// When user clicks on save button
SaveHealthDetails.onclick=function(){

// Assigns yes and no to smoker radiobutton values
if(RadiobuttonSmokerInput.value == 0)
  {LabelSmokerResults.value = "Yes"}
else
  {LabelSmokerResults.value = "No"}

// Assigns never, sometimes or regularly to exercise radiobutton values
if(RadiobuttonExerciseInput.value == 0)
  {LabelExerciseResults.value = "Never"}
else if(RadiobuttonExerciseInput.value == 1)
  {LabelExerciseResults.value = "Sometimes"}
else 
  {LabelExerciseResults.value = "Regularly"}


  LabelAgeResults.value = InputAge.value;
    var myAge =
  InputAge.value;
  localStorage.myAge = myAge;
  
  LabelWeightResults.value = InputWeight.value;
    var myWeight =
  InputWeight.value;
  localStorage.myWeight = myWeight;
  
  LabelHeightResults.value = InputHeight.value;
    var myHeight =
  InputHeight.value;
  localStorage.myHeight = myHeight;

//  LabelSmokerResults.value = RadiobuttonSmokerInput.value;
//    var mySmoking =
//  RadiobuttonSmokerInput.value;
//  localStorage.mySmoking = mySmoking;
//  
//  LabelExerciseResults.value = RadiobuttonExerciseInput.value;
//    var myExercise =
//  RadiobuttonExerciseInput.value;
//  localStorage.myExercise = myExercise;


  
  ChangeForm(MyHealth);
    $("#Toast3").toast("show");
}
