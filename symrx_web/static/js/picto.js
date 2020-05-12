var width = 230

function myFunction() {
    var type = document.getElementById("type").value
    document.getElementById("one").src = "static/images/" + type +  ".png";
    document.getElementById("one").height = "180"
    document.getElementById("one").width = width

    var quantity = document.getElementById("quantity").value
    document.getElementById("two").src = "static/images/" + quantity +  ".png";
    document.getElementById("two").height = "120"
    document.getElementById("two").width = "40"

    var route = document.getElementById("route").value
    document.getElementById("three").src = "static/images/" + route +  ".png";
    document.getElementById("three").height = "180"
    document.getElementById("three").width = width

    var time = document.getElementById("time").value
    document.getElementById("four").src = "static/images/" +time+  ".png";
    document.getElementById("four").height = "180"
    document.getElementById("four").width = width
}
function info(){
  var e = document.getElementById("Meds");
  var strUser = e.options[e.selectedIndex].text;
  document.getElementById("preName").innerHTML = "Medication: ".bold() + strUser;

  var pharm = document.getElementById('pharmName').value
  document.getElementById("pharmacist").innerHTML = "Pharmacist: ".bold() + pharm;

  var nam = document.getElementById('pname').value
  document.getElementById("pName").innerHTML = "Patient: ".bold() + nam;

  document.getElementById('special_side').innerHTML = ""
  var selectedValues = $('#specialInstructions').val()|| [];
  var x;
  var arrayLength = selectedValues.length;
  for (var i = 0; i < arrayLength; i++) {
    var img = document.createElement('img');
    img.src ='static/images/'+ selectedValues[i] + '.png';
    document.getElementById('special_side').appendChild(img);
    img.height = "180";
    img.width = width;}
    img.margin = "-50"
  }
