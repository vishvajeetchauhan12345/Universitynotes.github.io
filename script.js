var SlideIndex=0;
SlideShow();
function SlideShow() {
	var Slides=document.getElementsByClassName("MySlides");
	var v;
	for (v = 0;v<Slides.length;v++)
	 {
		Slides[v].style.display="none";
	}
	SlideIndex++;
	if (SlideIndex > Slides.length)
	 {
		SlideIndex=1;
	}
	Slides[SlideIndex-1].style.display="grid";
	
	setTimeout(SlideShow,6000);
}


//body onload function
function setCookie(cname,cvalue,exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires=" + d.toGMTString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie() {
  var user=getCookie("username");
  if (user != "") {
    alert("Welcome again " + user);
  } else {
     user = prompt("Please enter your name:","");
     if (user != "" && user != null) {
       setCookie("username", user, 30);
     }
  }
}

/*
function myscale() {
  var elem = $("body");
  var   elems=$("section"); 
  function scale() {
    if (elem.lenght <="50vw") {
      clearInterval(elems);
      elems.style.transformScale="0.0";
    } else { 
      elems.style.transformScale="1.0";
    }
  }
}*/
//university slider
var SlideIndex1=0;
SlideShow1();
function SlideShow1() {
	var Slides1=document.getElementsByClassName("Sliders");
	var i;
	for (i = 0;i<Slides1.length;i++)
	 {
		Slides1[i].style.display="none";
	}
	SlideIndex1++;
	if (SlideIndex1 > Slides1.length)
	 {
		SlideIndex1=1;
	}
	Slides1[SlideIndex1-1].style.display="grid";
	Slides1[SlideIndex1-1].style.animationDelay="1s";
	Slides1[SlideIndex1-1].style.transitionDelay="0.5s";
	setTimeout(SlideShow1,4000);
}

//university slider
var SlideIndex8=0;
MGKVP();
function MGKVP() {
	var Slides8=document.getElementsByClassName("Sliders8");
	var j;
	for (j = 0;j< Slides8.length;j++)
	 {
		Slides8[j].style.display="none";
	}
	SlideIndex8++;
	if (SlideIndex8 > Slides8.length)
	 {
		SlideIndex8=1;
	}
	Slides8[SlideIndex8-1].style.display="grid";
	setTimeout(MGKVP,5000);
}

//university slider
var SlideIndex9=0;
BHU();
function BHU() {
	var Slides9=document.getElementsByClassName("Sliders-9");
	var k;
	for (k = 0;k< Slides9.length;k++)
	 {
		Slides9[k].style.display="none";
	}
	SlideIndex9++;
	if (SlideIndex9 > Slides9.length)
	 {
		SlideIndex9=1;
	}
	Slides9[SlideIndex9-1].style.display="grid";
	setTimeout(BHU,5000);
}

//university slider
var SlideIndex10=0;
AMITY();
function AMITY() {
	var Slides10=document.getElementsByClassName("Sliders-10");
	var l;
	for (l = 0;l< Slides10.length;l++)
	 {
		Slides10[l].style.display="none";
	}
	SlideIndex10++;
	if (SlideIndex10 > Slides10.length)
	 {
		SlideIndex10=1;
	}
	Slides10[SlideIndex10-1].style.display="grid";
	setTimeout(AMITY,4500);
}

//university slider
var SlideIndex11=0;
Galgotias();
function Galgotias() {
	var Slides11=document.getElementsByClassName("Sliders-11");
	var m;
	for (m = 0;m< Slides11.length;m++)
	 {
		Slides11[m].style.display="none";
	}
	SlideIndex11++;
	if (SlideIndex11 > Slides11.length)
	 {
		SlideIndex11=1;
	}
	Slides11[SlideIndex11-1].style.display="grid";
	setTimeout(Galgotias,2000);
}

//university slider
var SlideIndex12=0;
AMU();
function AMU() {
	var Slides12=document.getElementsByClassName("Sliders-12");
	var n;
	for (n = 0;n< Slides12.length;n++)
	 {
		Slides12[n].style.display="none";
	}
	SlideIndex12++;
	if (SlideIndex12 > Slides12.length)
	 {
		SlideIndex12=1;
	}
	Slides12[SlideIndex12-1].style.display="grid";
	setTimeout(AMU,3000);
}
