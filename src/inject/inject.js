"use strict";

var benny = benny || {};

benny.selsectAllImage = function(){
	return document.querySelectorAll("img");
};

benny.strings = [
	"Benny",
	"Bennys Bitches",
	"mini-Bitches",
	"Mother-Bitches"
];

benny.imgList = [
	"http://bennysbitches.com/img/bennsys.jpg",
	"http://bennysbitches.com/img/bennsys.jpg",
	"http://bennysbitches.com/gifs/arrow_down.gif",
	"http://bennysbitches.com/gifs/arrow_up_2.gif",
	"http://bennysbitches.com/gifs/arrow_up.gif",
	"http://bennysbitches.com/gifs/ask.gif",
	"http://bennysbitches.com/gifs/beacon.gif",
	"http://bennysbitches.com/gifs/bird.gif",
	"http://bennysbitches.com/gifs/cactus.gif",
	"http://bennysbitches.com/gifs/camel.gif",
	"http://bennysbitches.com/gifs/chicken.gif",
	"http://bennysbitches.com/gifs/clapperboard.gif",
	"http://bennysbitches.com/gifs/contact.gif",
	"http://bennysbitches.com/gifs/diamond_line.gif",
	"http://bennysbitches.com/gifs/dino_running.gif",
	"http://bennysbitches.com/gifs/dino.gif",
	"http://bennysbitches.com/gifs/dinosaur.gif",
	"http://bennysbitches.com/gifs/dj.gif",
	"http://bennysbitches.com/gifs/download.gif",
	"http://bennysbitches.com/gifs/earth.gif",
	"http://bennysbitches.com/gifs/faq.gif",
	"http://bennysbitches.com/gifs/fb_thump.gif",
	"http://bennysbitches.com/gifs/fb.gif",
	"http://bennysbitches.com/gifs/fire_face.gif",
	"http://bennysbitches.com/gifs/flame_line.gif",
	"http://bennysbitches.com/gifs/bird_flying.gif",
	"http://bennysbitches.com/gifs/godzilla.gif",
	"http://bennysbitches.com/gifs/heart_turn.gif",
	"http://bennysbitches.com/gifs/heart.gif",
	"http://bennysbitches.com/gifs/insect.gif",
	"http://bennysbitches.com/gifs/just_click.gif",
	"http://bennysbitches.com/gifs/line.gif",
	"http://bennysbitches.com/gifs/mailbox.gif",
	"http://bennysbitches.com/gifs/mchammer.gif",
	"http://bennysbitches.com/gifs/moblog_2.gif",
	"http://bennysbitches.com/gifs/moblog.gif",
	"http://bennysbitches.com/gifs/mona.gif",
	"http://bennysbitches.com/gifs/monkey.gif",
	"http://bennysbitches.com/gifs/monster.gif",
	"http://bennysbitches.com/gifs/new_2.gif",
	"http://bennysbitches.com/gifs/new.gif",
	"http://bennysbitches.com/gifs/pokemon.gif",
	"http://bennysbitches.com/gifs/poop.gif",
	"http://bennysbitches.com/gifs/rambo.gif",
	"http://bennysbitches.com/gifs/send_mail.gif",
	"http://bennysbitches.com/gifs/simba.gif",
	"http://bennysbitches.com/gifs/siren.gif",
	"http://bennysbitches.com/gifs/snowing.gif",
	"http://bennysbitches.com/gifs/sponsored.gif",
	"http://bennysbitches.com/gifs/stars.gif",
	"http://bennysbitches.com/gifs/t-rex.gif",
	"http://bennysbitches.com/gifs/the-best.gif",
	"http://bennysbitches.com/gifs/towel.gif",
	"http://bennysbitches.com/gifs/varning.gif",
	"http://bennysbitches.com/gifs/wow.gif",
	"http://bennysbitches.com/img/bennsys.jpg",
	"http://bennysbitches.com/img/bennsys.jpg",
	"http://bennysbitches.com/img/bennsys.jpg",
	"http://bennysbitches.com/img/bennsys.jpg"
];

benny.replaceAllImage = function(images){
	for (var i = 0; i < images.length; i++) {
		images[i].src = benny.imgList[Math.floor(Math.random() * benny.imgList.length)];
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
	var p = document.querySelectorAll("p");
	for (var i = 0; i < p.length; i++) {
		p[i].innerHTML = "Året var 1993, under en stormig natt så skapade gudarna ett barn vars framtid skulle innebära en hel del bitches. I flera år låg hans krafter vilandes till en dag då det var dags för Kvastkamp 2015 och han öde skulle uppfyllas. Han blåste i Gethornet av Förintelse och så de första Bitches skapades. De kämpade sig igenom tävlingarna där de vann Lekarna och därmed fick folkets kärlek och tro. Folket kände därefter att de ville vara en del utav denna gemenskap och så skapades Benny's Mini Bitches, det första steget för att bli en fullbordad Bitch.";
	}
};

benny.replaseAllh2 = function(){
	var h2 = document.querySelectorAll("h2");
	for (var i = 0; i < h2.length; i++) {
		h2[i].innerHTML = benny.strings[Math.floor(Math.random() * benny.strings.length)];
	}
};

benny.fixAllA = function(){
	var a = document.querySelectorAll("a");
	var urls = [
		"http://bennysbitches.com/",
		"http://www.karolin-lnu.se/"
	];
	for (var i = 0; i < a.length; i++) {
		a[i].innerHTML += " "+benny.strings[Math.floor(Math.random() * benny.strings.length)];
	}

};

benny.init = (function(){
	benny.replaceAllImage(benny.selsectAllImage());
	benny.replaceFirstH();
	benny.replaseAllh2();
	benny.fixAllA();
	benny.background();
	benny.about();
})();
