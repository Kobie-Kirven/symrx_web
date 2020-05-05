function myFunction() {
    var type = document.getElementById("type").value
    document.getElementById("one").src = "static/images/" + type +  ".png";
    document.getElementById("one").height = "150"
    document.getElementById("one").width = "180"

    var quantity = document.getElementById("quantity").value
    document.getElementById("two").src = "static/images/" + quantity +  ".png";
    document.getElementById("two").height = "120"
    document.getElementById("two").width = "50"

    var route = document.getElementById("route").value
    document.getElementById("three").src = "static/images/" + route +  ".png";
    document.getElementById("three").height = "150"
    document.getElementById("three").width = "180"

    var time = document.getElementById("time").value
    document.getElementById("four").src = "static/images/" +time+  ".png";
    document.getElementById("four").height = "150"
    document.getElementById("four").width = "180"
}
function info(){
  var e = document.getElementById("Meds");
  var strUser = e.options[e.selectedIndex].text;
  document.getElementById("preName").innerHTML = "Medication: " + strUser;

  var nam = document.getElementById('pname').value
  document.getElementById("pName").innerHTML = "Patient Name " + nam;

  document.getElementById('special_side').innerHTML = ""
  var selectedValues = $('#specialInstructions').val()|| [];
  var x;
  var arrayLength = selectedValues.length;
  for (var i = 0; i < arrayLength; i++) {
    var img = document.createElement('img');
    img.src ='static/images/'+ selectedValues[i] + '.png';
    document.getElementById('special_side').appendChild(img);
    img.height = "150";
    img.width = "180";}
  }

function printPageArea(areaID){
var printContent = document.getElementById(areaID);
var WinPrint = window.open('', '', 'width=900, height=650');
WinPrint.document.write(printContent.innerHTML);
WinPrint.document.close();
WinPrint.focus();
WinPrint.print();
WinPrint.close();
}
