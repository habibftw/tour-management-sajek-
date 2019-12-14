

function garicheck()
{
	if ( document.getElementById('gari').value == 'chaad' )
	{
		document.getElementById("localgari").value = 8000;
		document.getElementById("localgari").disabled = true;
			document.getElementById('asas').innerHTML = "-------------";
	}
	else{
		document.getElementById("localgari").disabled = false;
		document.getElementById('asas').innerHTML = " if local";
	}
}


function persom(){
	

	var a = document.getElementById('nop').value;
	if ( document.getElementById('gari').value == 'local')
	{
		
		var k = document.getElementById('localgari').value;
		
	}
	else{
		
		var x = document.getElementById("localgari").value;
		var k = x/ a;
			}
		document.getElementById('garivara').innerHTML = k;
	oom();
}

function oom()
{  
	var a = document.getElementById('nop').value;
		var b = document.getElementById('room').value;
			var c = document.getElementById('numberofroom').value;
				//var d = document.getElementById('nop').value;
	
	var l =  b * c ;
	var k = l / a;

		
	document.getElementById('roomkhoroch').innerHTML = k;
			
		
		
	tota();
}
	
		
	


function tota(){
	//alert('asas');
     
		var c = document.getElementById('nop').value;
		 var a = document.getElementById('roomkhoroch').innerHTML;
		 var b = document.getElementById('garivara').innerHTML;
		 var d = document.getElementById('jvara').value;
		 var e = document.getElementById('khawa').value;
		  var f = document.getElementById('xxtra').value;
		 
		 
		 var tota = +a + +b + +d + +e + +f;
		 var totlll = c* tota;
		 
	
		
	
		
		document.getElementById('total').innerHTML =  tota;
		
		document.getElementById('totalll').innerHTML =  totlll;
		
		document.getElementById('khawan').innerHTML =  e;
		
		
}
function checker()
{ 
	
	
	
	
	if(document.getElementById('localgari').value == "" || document.getElementById('jvara').value == "" )
	{
		alert("এরে মাদারছদ value বসা ");
		
	}
	else{persom();}
}
		

