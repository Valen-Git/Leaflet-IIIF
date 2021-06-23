var map = L.map('map', {
  center: [0, 0],
  crs: L.CRS.Simple,
  zoom: 0,
})

L.tileLayer.iiif('https://images.lib.cam.ac.uk/iiif/MS-STPETNLR-PNS-00382-000-00002.jp2/info.json')
.addTo(map);

var polygon = L.polygon([
  [-55, 66],
  [-55, 80],
  [-66, 80],
  [-66, 66]
],
{
  color: 'white',
  coloropacity: 0,
  fillColor: 0,
  
}).addTo(map)
.bindPopup("<h4>زدش بر زمین بر به کردار شیر</h4><h4>هم آنگه که تو تشنه گشتی به خون</h4>")


var polygon = L.polygon([
  [-55, 51],
  [-55, 64],
  [-66, 64],
  [-66, 51]
],
{
  color: 'white',
  coloropacity: 0,
  fillColor: 0,
  
}).addTo(map)
.bindPopup("<h4>بدانست کاو هم نماند به زیر</h5><h5>بیالود آن خنجر آبگون</h4>")
