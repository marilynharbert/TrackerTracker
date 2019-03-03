/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */ 
function myFunction() {
  var x = document.getElementById("myFile");
 
  x.disabled = true;
  return x;
}

function loadJSON(callback) {   
  var xobj = new XMLHttpRequest();
  xobj.overrideMimeType("application/json");
  //xobj.open('GET',myFunction(),true);
  xobj.open('GET','https://cdn.glitch.com/5b704818-88ef-44f4-aff7-4fbf56bfdde6%2FlightbeamData.json?1551582782415',true);
  xobj.onreadystatechange = function () {
    if (xobj.readyState == 4 && xobj.status == "200") {
      callback(JSON.parse(xobj.responseText));
    }
  };
  xobj.send(null);  
}

function init() {
    loadJSON(function(response) {
        // Parse JSON string into object
        var actual_JSON = JSON.parse(response);
    });
}
var lightBeam = init()
console.log(typeof lightBeam);
var hostNameArray = [];
var i;
for (i in lightBeam.key) {
  //if (json.hasOwnProperty(key)) {
    //hostNameArray.push(json[key].hostname);
    console.log(lightBeam[i]);
  //}
}

//console.log(hostNameArray);
