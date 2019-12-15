

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
		document.getElementById('asas').innerHTML = "যদি লোকাল তাহলে নাম্বার প্রবেশ করুন :";
		document.getElementById("localgari").value = '';
	}
}


function garikhoroch(){
	

	var a = document.getElementById('nop').value;
	if ( document.getElementById('gari').value == 'local')
	{
		
		var k = document.getElementById('localgari').value;
		
	}
	else{
		
		var x = document.getElementById("localgari").value;
		var l = x/ a;
		var k = Math.round(l);
		}
			
		document.getElementById('garivara').innerHTML = k;
	roomroom();
}

function roomroom()
{  

	var a = document.getElementById('nop').value;
		var b = document.getElementById('room').value;
			var c = document.getElementById('numberofroom').value;
				var d = document.getElementById('numberofdays').value;
				//var d = document.getElementById('nop').value;
	
	var l =  b * c * d;
	var n = l / a;
	var k =Math.round(n);

	document.getElementById('roomkhoroch').innerHTML = k;
			
		
		
	kkhoroch();
}
	
function kkhoroch()
{
	var b = document.getElementById('numberofdays').value;
	var a = document.getElementById('khawa').value;
	
	var c = a * b;
	
	
	
	document.getElementById('khawan').innerHTML =  c;
	
	tota();
}
	


function tota(){
	//alert('asas');
     
		var c = document.getElementById('nop').value;
		var a = document.getElementById('roomkhoroch').innerHTML;
		var b = document.getElementById('garivara').innerHTML;
		var d = document.getElementById('jvara').value;
		var e = document.getElementById('khawan').innerHTML;
		var f = document.getElementById('xxtra').value;
		
		var z = 2*d;
		 
		 
		 var tota = +a + +b + +z + +e + +f;
		 var totlll = c* tota;
		 
	
		
	
		
		document.getElementById('total').innerHTML =  tota;
		
		document.getElementById('totalll').innerHTML =  totlll;
		
		
		
		
}
function checker()
{ 

if(document.getElementById('localgari').value == "" ||
	document.getElementById('jvara').value == "" || 
		document.getElementById('room').value == ""||
			document.getElementById('nop').value == "" ||
				document.getElementById('khawa').value == "") 
	{
		alert("দয়া করে সবগুলো value প্রবেশ করেন ");
		
	}
	else
	{ garikhoroch(); }
}
		

