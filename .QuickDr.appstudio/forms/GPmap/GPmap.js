
GPmap.onshow=function(){

  if (typeof mapNSB == 'undefined') {
  mapNSB = L.map(MapContainer);
  mapNSB.setView([51.748130,-0.326490], 13);
  
  // add an OpenStreetMap tile layer
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(mapNSB);
    
    // Chosen Surgery
    var marker = L.marker([51.748130,-0.326490]).addTo(mapNSB)
      .bindPopup("<b>Hatfield Road Surgery</b><br>2 The Parade Ellis House<br>Charrington Pl<br>St Albans<br>AL1 3FY")
      .openPopup();
      
      // Other Surgery
      var marker = L.marker([51.757298,-0.335878]).addTo(mapNSB)
      .bindPopup("<b>Grange Street Surgery</b><br>2 Grange St<br>St Albans<br>AL3 5NF")
    
      // Other Surgery1
      var marker = L.marker([51.754148,-0.340152]).addTo(mapNSB)
      .bindPopup("<b>Harvey House Surgery</b><br>13-15 Russel Avenue<br>St Albans<br>AL3 5HB")
      
      // Other Surgery2
      var marker = L.marker([51.757298,-0.335878]).addTo(mapNSB)
      .bindPopup("<b>Highfield Surgery</b><br>1 Jacob Court<br>61 Russet Dr<br>St Albans<br>AL4 0AY")
      
      // Other Surgery3
      var marker = L.marker([51.722849,-0.299636]).addTo(mapNSB)
      .bindPopup("<b>Summerfield Health Centre</b><br>Caledon Rd<br>London Colney<br>St Albans<br>AL2 1PU")
  }
}
