"use strict";

var benny = benny || {};

benny.selsectAllImage = function(){
	return document.querySelectorAll("img");
};

benny.imgList = [
	"http://bennysbitches.com/img/drudgesiren.gif",
	"http://bennysbitches.com/img/yoji.gif",
	"http://bennysbitches.com/img/moblog_2da64cc6.gif",
	"http://bennysbitches.com/img/heart_turn.gif",
	"http://bennysbitches.com/img/new.gif",
	"http://bennysbitches.com/img/ask.gif",
	"http://bennysbitches.com/img/t-rex_e0.gif",
	"http://bennysbitches.com/img/fbGif.gif",
	"http://bennysbitches.com/img/simba.gif",
	"http://bennysbitches.com/img/blulinea.gif",
	"http://bennysbitches.com/img/fbGif2.gif",
	"http://bennysbitches.com/img/bennsys.jpg",
	"http://bennysbitches.com/img/bennsys.jpg",
	"http://bennysbitches.com/img/bennsys.jpg",
	"http://bennysbitches.com/img/bennsys.jpg",
	"http://bennysbitches.com/img/bennsys.jpg",
	"http://bennysbitches.com/img/bennsys.jpg",
	"http://bennysbitches.com/img/212.gif",
	"http://bennysbitches.com/img/animated_wow.gif",
	"http://bennysbitches.com/img/diamonds.gif",
	"http://bennysbitches.com/img/background_animated_twinkle_color_stars.gif"
];

benny.replaceAllImage = function(image){
	for (var i = 0; i < image.length; i++) {
		image[i].src = benny.imgList[Math.floor(Math.random() * benny.imgList.length)];
	}
};

benny.replaceFirstH = function(){
	var h1 = document.querySelector("h1");
	h1.innerHTML = "Välkommen till Bennys Bitches hemsida!";
	h1.style.backgroundColor = "#00FFFF";
	h1.style.background = "#00FFFF";
};

benny.background = function(){
	document.body.style.backgroundColor = "#00FFFF";
};

benny.about = function(){
	var p = document.querySelector("p");
	console.log(p);
	p.innerHTML = "Året var 1993, under en stormig natt så skapade gudarna ett barn vars framtid skulle innebära en hel del bitches. I flera år låg hans krafter vilandes till en dag då det var dags för Kvastkamp 2015 och han öde skulle uppfyllas. Han blåste i Gethornet av Förintelse och så de första Bitches skapades. De kämpade sig igenom tävlingarna där de vann Lekarna och därmed fick folkets kärlek och tro. Folket kände därefter att de ville vara en del utav denna gemenskap och så skapades Benny's Mini Bitches, det första steget för att bli en fullbordad Bitch.";
};

benny.init = (function(){
	benny.replaceAllImage(benny.selsectAllImage());
	benny.replaceFirstH();
	benny.background();
	benny.about();
})();
