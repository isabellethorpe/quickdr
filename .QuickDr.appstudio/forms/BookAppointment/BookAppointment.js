
ConfirmAppointmentButton.onclick=function(){

  LabelDoctorResults.value = InputDoctor.value;
    var myDoctor =
  InputDoctor.value;
  localStorage.myDoctor = myDoctor;
  
  LabelDateResults.value = InputDate.value;
    var myDate =
  InputDate.value;
  localStorage.myDate = myDate;
  
  LabelTimeResults.value = InputTime.value;
    var myTime =
  InputTime.value;
  localStorage.myTime = myTime;
  
  LabelSymptomsResults.value = InputSymptoms.value;
    var mySymptoms =
  InputSymptoms.value;
  localStorage.mySymptoms = mySymptoms;

  PictureBox1.value = Camera1.value;
    var myPicture = 
  Camera1.value;
  localStorage.myPicture = myPicture;


  $("#Toast1").toast("show");
  ChangeForm(ViewAppointments);
}


