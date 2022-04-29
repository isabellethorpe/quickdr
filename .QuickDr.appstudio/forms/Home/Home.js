
// Hamburger navigation form change
Hamburger1.onclick=function(s){
    if (typeof(s) == "object") {
        return;
    }
    if (s === "Home") {
        ChangeForm(Home)
    }
    if (s === "My Health") {
        ChangeForm(MyHealth)
    }
    if (s === "View Appointments") {
        ChangeForm(ViewAppointments)
    }
    if (s === "Book Appointment") {
        ChangeForm(BookAppointment)
    }
    if (s === "My GP") {
        ChangeForm(MyGP)
    }
    if (s === "News") {
        ChangeForm(News)
    }
    if (s === "Profile") {
        ChangeForm(Profile)
    }
    if (s === "Emergency") {
        ChangeForm(Emergency)
    }
};


// Navbar change forms 
Navbar.onclick=function(s){
  // NSB.MsgBox("Item clicked: " + Navbar.value);
    if (typeof(s) == "object") {
        return;
    }
    if (Navbar.value === 0) {
        ChangeForm(Home)
    }
    if (Navbar.value === 1) {
        ChangeForm(News)
        // todo
    }
    if (Navbar.value === 2) {
        ChangeForm(Profile)
        // todo
    }
};

// Navbar persists on all pages
Home.onshow=function(){
  NSBPage.appendChild(Navbar);
  NSBPage.appendChild(HeaderGlobal);
  NSBPage.appendChild(Hamburger1);
}

// Changes form to My Health
MyHealthButton.onclick=function(){
  ChangeForm(MyHealth);
}

// Changes form to appointments
AppointmentsButton.onclick=function(){
  ChangeForm(Appointments);
}

// Changes form to My GP 
MyGPButton.onclick=function(){
  ChangeForm(MyGP);
}

// Changes form to Emergency 
EmergencyButton.onclick=function(){
  ChangeForm(Emergency);
}
