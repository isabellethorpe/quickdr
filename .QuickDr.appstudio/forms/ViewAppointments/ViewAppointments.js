
ViewAppointments.onshow=function(){
  if (localStorage.myDoctor) {
  LabelDoctorResults.innerHTML = localStorage.myDoctor;
  }
  
  if (localStorage.myDate) {
  LabelDateResults.innerHTML = localStorage.myDate;
  }
  
  if (localStorage.myTime) {
  LabelTimeResults.innerHTML = localStorage.myTime;
  }
  
  if (localStorage.mySymptoms) {
  LabelSymptomsResults.innerHTML = localStorage.mySymptoms;
  }
  
  if (localStorage.myPicture) {
  PictureBox1.innerHTML = localStorage.myPicture;
  }
}



ButtonDeleteAppointment.onclick=function(){

  localStorage.clear();
  LabelDoctorResults.innerHTML = "";
  
  ChangeForm(Appointments);
  $("#Toast2").toast("show");
}



