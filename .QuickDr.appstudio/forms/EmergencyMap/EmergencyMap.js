EmergencyMap.onshow=function(){

  if (typeof mapNSB1 == 'undefined') {
  mapNSB1 = L.map(MapContainerHospital);
  mapNSB1.setView([51.760074,-0.343963], 13);
  
  // add an OpenStreetMap tile layer
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(mapNSB1);
    
    // Closest Hospital
    var marker = L.marker([51.760074,-0.343963]).addTo(mapNSB1)
      .bindPopup("<b>St Albans City Hospital</b><br>Waverley Rd<br>St Albans<br>AL3 5PN<br><br>01727 866122")
      .openPopup();

  }
}
