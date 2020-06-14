function dropdown()
{
	 document.getElementById("dropdown1").classList.toggle("show");
}


var etape1_1;
var etape1_2;
var etape1_3;

var etape2_1;
var etape2_2;

var etape3_1;
var etape3_2;

var etape3_2_1;
var etape3_2_2;
var etape3_2_3;

var etape3_3_1;
var etape3_3_2;
var etape3_3_3;

var etape3_4_1;
var etape3_4_2;
var etape3_4_3;

/* Variables Quizz 2*/
var q2etape1_1;
var q2etape1_2;
var q2etape1_3;

var q2etape2_1;
var q2etape2_2;
var q2etape2_3;

var q2etape2_2_1;
var q2etape2_2_2;
var q2etape2_2_3;

var q2etape3_1;
var q2etape3_2;
var q2etape3_3;

var q2etape3_2_1;
var q2etape3_2_2;
var q2etape3_2_3;

var points = 0;




function start()
{

	document.getElementById("start").style.display ="block";
	document.getElementById("etape1.0").style.display = "none";
	document.getElementById("etape2.0").style.display = "none";
	document.getElementById("etape3.0").style.display = "none";
	document.getElementById("etape3.1").style.display = "none";
	document.getElementById("etape3.2").style.display = "none";
	document.getElementById("etape3.3").style.display = "none";
	document.getElementById("answer1").style.display = "none";

	document.getElementById("q2-etape1").style.display = "none";
	document.getElementById("q2-etape2.1").style.display = "none";
	document.getElementById("q2-etape2.2").style.display = "none";
	document.getElementById("q2-etape2.3").style.display = "none";
	document.getElementById("q2-etape3.1").style.display = "none";
	document.getElementById("q2-etape3.2").style.display = "none";
	document.getElementById("answer2").style.display = "none";
	
}

/* --------------------Fonctions ShowForm-----------------*/
function showForm1()
{
	document.getElementById("etape1.0").style.display = "block";
	/* NORMALEMENT PAS BESOIN document.getElementById("etape2.0").style.display = "none";
	document.getElementById("etape3.0").style.display = "none";
	document.getElementById("etape3.1").style.display = "none";
	document.getElementById("etape3.2").style.display = "none";
	document.getElementById("etape3.3").style.display = "none";*/
	document.getElementById("start").style.display="none";
}
function showForm2()
{
	document.getElementById("etape2.0").style.display = "block";
    document.getElementById("etape1.0").style.display = "none";
}
function showForm3()
{
	document.getElementById("etape3.0").style.display = "block";
    document.getElementById("etape2.0").style.display = "none";
}
function showForm3_1()
{
	document.getElementById("etape3.1").style.display = "block";
    document.getElementById("etape2.0").style.display = "none";
}
function showForm3_2()
{
	document.getElementById("etape3.2").style.display = "block";
    document.getElementById("etape2.0").style.display = "none";
}
function showForm3_3()
{
	document.getElementById("etape3.3").style.display = "block";
    document.getElementById("etape2.0").style.display = "none";
}
function showDiv1(quest, answ)
{
	document.getElementById(quest).style.display = "none";
	document.getElementById(answ).style.display = "block";
}
/*-------------------------SHOW QUIZZ 2---------------------*/
function showQ2form1()
{
	document.getElementById("q2-etape1").style.display = "block";
	document.getElementById("start").style.display="none";
}

function showQ2form2_1()
{
	document.getElementById("q2-etape2.1").style.display = "block";
	document.getElementById("q2-etape1").style.display = "none";
	
}
function showQ2form2_2()
{
	document.getElementById("q2-etape1").style.display = "none";
	document.getElementById("q2-etape2.2").style.display = "block";
}
function showQ2form2_3()
{
	document.getElementById("q2-etape1").style.display = "none";
	document.getElementById("q2-etape2.3").style.display = "block";
}
function showQ2form3_1()
{
	document.getElementById("q2-etape2.1").style.display = "none";
	document.getElementById("q2-etape2.2").style.display = "none";
	document.getElementById("q2-etape3.1").style.display = "block";
}
function showQ2form3_2()
{
	document.getElementById("q2-etape2.3").style.display = "none";
	document.getElementById("q2-etape3.2").style.display = "block";
}
/*-----------------------------------------------------------*/

function complet1(c1, c2, c3)
{
	if(c1 == 0 && c2 == 0 && c3 == 0)
	{
		return false;
	}
	else
	{
		return true;
	}
}
function complet2(c1, c2)
{
	if(c1 == 0 && c2 == 0)
	{
		return false;
	}
	else
	{
		return true;
	}
}

function step1()
{
	etape1_1 = document.getElementById('choice1').checked;
	etape1_2 = document.getElementById('choice2').checked;
	etape1_3 = document.getElementById('choice3').checked;
	if(etape1_1 == 1)
	{
		points = points+1;
		showForm2();
	}
	else if(etape1_3 == 1)
	{
		showForm2();
	}
	else if(etape1_2 == 1)
	{
		points = points-1;
		showForm2();
	}
	else if(!complet1(etape1_1, etape1_2, etape1_3))
	{
		alert("Veuillez choisir un des champs svp !");
		showForm1();
	}
	
}
function step2()
{
	etape2_1 = document.getElementById('choice4').checked;
	etape2_2 = document.getElementById('choice5').checked;
	if(etape2_1 == 1)
	{
		points = points+1;
		showForm3();
	}
	else if(etape2_2 == 1 && etape1_2 == 1)
	{
		points = points-1;
		showForm3_1();
	}
	else if(etape2_2 == 1 && etape1_3 == 1)
	{
		points = points-1;
		showForm3_2();
	}
	else if(etape2_2 == 1 && etape1_1 == 1)
	{
		points = points-1;
		showForm3_3();
	}
	else if(!complet2(etape2_1, etape2_2))
	{

		alert("Veuillez choisir un des champs svp !");
		showForm2();
	}
	

}

function step3()
{
	etape3_1 = document.getElementById('choice6').checked;
	etape3_2 = document.getElementById('choice7').checked;
	if(etape3_1 == 1)
	{
		points = points+1;

	}
	else if(etape3_2 == 1)
	{
		points = points-1;
	}
	if(!complet2(etape3_1, etape3_2))
	{
		alert("Veuillez choisir un des champs svp !");
		showForm3();
	}
	else
	{
		final("demo1");
		showDiv1("etape3.0", "answer1");
	}
	
	/*document.getElementById("demo").innerHTML = "Vous avez "+ points +" points";*/
}

function step3_1()
{
	etape3_2_1 = document.getElementById('choice8').checked;
	etape3_2_2 = document.getElementById('choice9').checked;
	etape3_2_3 = document.getElementById('choice10').checked;
	if(etape3_2_1 == 1)
	{
		points = points-1;

	}
	else if(etape3_2_2 == 1)
	{
		points = points-1;
	}
	else if(etape3_2_3 == 1)
	{
		points = points+1;
	}
	if(!complet1(etape3_2_1, etape3_2_2, etape3_2_3))
	{
		alert("Veuillez choisir un des champs svp !");
		showForm3_1();
	}
	else 
	{
		final("demo1");
		showDiv1("etape3.1", "answer1");
	}
	
	/*document.getElementById("demo").innerHTML = "Vous avez "+ points +" points";*/
}

function step3_2()
{
	etape3_3_1 = document.getElementById('choice11').checked;
	etape3_3_2 = document.getElementById('choice12').checked;
	etape3_3_3 = document.getElementById('choice13').checked;
	if(etape3_3_1 == 1)
	{
		points = points-1;

	}
	else if(etape3_3_2 == 1)
	{
		points = points+1;
	}
	else if(etape3_3_3 == 1)
	{
		points = points-1;
	}
	if(!complet1(etape3_3_1, etape3_3_2, etape3_3_3))
	{
		alert("Veuillez choisir un des champs svp !");
		showForm3_2();
	}
	else
	{
		final("demo1");
		showDiv1("etape3.2", "answer1");

	}
	
	/*document.getElementById("demo").innerHTML = "Vous avez "+ points +" points";*/
}

function step3_3()
{
	etape3_4_1 = document.getElementById('choice14').checked;
	etape3_4_2 = document.getElementById('choice15').checked;
	etape3_4_3 = document.getElementById('choice16').checked;
	if(etape3_4_1 == 1)
	{
		points = points-1;

	}
	else if(etape3_4_2 == 1)
	{
		points = points-1;
	}
	else if(etape3_4_3 == 1)
	{
		points = points+1;
	}
	if(!complet1(etape3_4_1, etape3_4_2, etape3_4_3))
	{
		alert("Veuillez choisir un des champs svp !");
		showForm3_3();
	}
	else
	{
		final("demo1");
		showDiv1("etape3.3", "answer1");
	}
	
	/*document.getElementById("demo").innerHTML = "Vous avez "+ points +" points";*/
}



/*---------------------QUIZZ 2-----------------*/

function q2step1()
{
	q2etape1_1 = document.getElementById("q2-choice1").checked;
	q2etape1_2 = document.getElementById("q2-choice2").checked;
	q2etape1_3 = document.getElementById("q2-choice3").checked;

	if(q2etape1_1 == 1)
	{
		points = points-1;
		showQ2form2_1();
	}
	else if(q2etape1_2 == 1)
	{
		showQ2form2_2();
	}
	else if(q2etape1_3 == 1)
	{
		points = points+1;
		showQ2form2_3();
	}
	else if(!complet1(q2etape1_1, q2etape1_2, q2etape1_3))
	{
		alert("Veuillez choisir un des champs svp !");
		showQ2form1();
	}
}


function q2step2_1() /* VOITURE THERMIQUE*/
{
	q2etape2_1 = document.getElementById("q2-choice4").checked;
	q2etape2_2 = document.getElementById("q2-choice5").checked;
	q2etape2_3 = document.getElementById("q2-choice6").checked;

	if(q2etape2_1 == 1)
	{
		points = points-1;
		showQ2form3_1();
	}
	else if(q2etape2_2 == 1)
	{
		points = points-1;
		showQ2form3_1();
	}
	else if(q2etape2_3 == 1)
	{
		points = points+1;
		showQ2form3_1();
	}
	else if(!complet1(q2etape2_1, q2etape2_2, q2etape2_3))
	{
		alert("Veuillez choisir un des champs svp !");
		showQ2form2_1();
	}
}
function q2step2_2() /* VOITURE HYBRIDE*/
{
	q2etape2_2_1 = document.getElementById("q2-choice7").checked;
	q2etape2_2_2 = document.getElementById("q2-choice8").checked;
	q2etape2_2_3 = document.getElementById("q2-choice9").checked;

	if(q2etape2_2_1 == 1)
	{
		points = points-1;
		showQ2form3_1();
	}
	else if(q2etape2_2_2 == 1)
	{
		points = points-1;
		showQ2form3_1();
	}
	else if(q2etape2_2_3 == 1)
	{
		points = points+1;
		showQ2form3_1();
	}
	else if(!complet1(q2etape2_2_1, q2etape2_2_2, q2etape2_2_3))
	{
		alert("Veuillez choisir un des champs svp !");
		showQ2form2_2();
	}
}
function q2step2_3() /*VOITURE ELECTRIQUE*/
{
	q2etape2_3_1 = document.getElementById("q2-choice10").checked;
	q2etape2_3_2 = document.getElementById("q2-choice11").checked;
	q2etape2_3_3 = document.getElementById("q2-choice12").checked;

	if(q2etape2_3_1 == 1)
	{
		points = points-1;
		showQ2form3_2();
	}
	else if(q2etape2_3_2 == 1)
	{
		points = points-1;
		showQ2form3_2();
	}
	else if(q2etape2_3_3 == 1)
	{
		points = points+1;
		showQ2form3_2();
	}
	else if(!complet1(q2etape2_3_1, q2etape2_3_2, q2etape2_3_3))
	{
		alert("Veuillez choisir un des champs svp !");
		showQ2form2_3()
	}
}

function q2step3_1() 
{
	q2etape3_1 = document.getElementById("q2-choice13").checked;
	q2etape3_2 = document.getElementById("q2-choice14").checked;
	q2etape3_3 = document.getElementById("q2-choice15").checked;

	if(q2etape3_1 == 1)
	{
		points = points-1;
	}
	else if(q2etape3_2 == 1)
	{
		points = points+1;
	}
	else if(q2etape3_3 == 1)
	{
		points = points-1;
	}
	if(!complet1(q2etape3_1, q2etape3_2, q2etape3_3))
	{
		alert("Veuillez choisir un des champs svp !");
		showQ2form3_1()
	}
	else
	{
		final("demo2");
		showDiv1("q2-etape3.1", "answer2");
	}
}
function q2step3_2() 
{
	q2etape3_2_1 = document.getElementById("q2-choice16").checked;
	q2etape3_2_2 = document.getElementById("q2-choice17").checked;
	q2etape3_2_3 = document.getElementById("q2-choice18").checked;

	if(q2etape3_2_1 == 1)
	{
		points = points-1;
	}
	else if(q2etape3_2_2 == 1)
	{
		points = points+1;
	}
	else if(q2etape3_2_3 == 1)
	{
		points = points-1;
	}
	if(!complet1(q2etape3_2_1, q2etape3_2_2, q2etape3_2_3))
	{
		alert("Veuillez choisir un des champs svp !");
		showQ2form3_2()
	}
	else
	{
		final("demo2");
		showDiv1("q2-etape3.2", "answer2");
	}
}



function final(demo)
{
	if(points <= 0)
	{
		document.getElementById(demo).innerHTML = "Vous avez "+ points +" points. Vous devez être plus écolo !";
	}
	else if (1 <= points < 3)
	{
		document.getElementById(demo).innerHTML = "Vous avez "+ points +" points. Vous êtes un citoyen assez écolo !";
	}
	else if (points >= 3)
	{
		document.getElementById(demo).innerHTML = "Vous avez "+ points +" points. Vous devez êtes un citoyen très écolo !";
	}
	points = 0;
}
/*-----------------------CAROUSSEL-------------------*/

var index = 1;
showpage(index);

function nextslide(k)
{
	showpage(index += k);
}

function showpage(k)
{
	var cpt;
	var page = document.getElementsByClassName("slide");
	if(page.length == 0)
	{
		return;
	}
	if (k > page.length)
	{
		index = 1;
	}
	if(k < 1)
	{
		index = page.length;
	}
	for(cpt = 0; cpt < page.length; cpt++)
	{
		page[cpt].style.display = "none";
	}
	page[index-1].style.display = "block"; 
}