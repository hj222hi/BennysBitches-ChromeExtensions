"use strict";

var benny = benny || {};

benny.selsectAllImage = function(){
	return document.querySelectorAll("img");
};



benny.replaceAllImage = function(){
	var images = document.querySelectorAll("img");
	for (var i = 0; i < images.length; i++) {
		images[i].src = chrome.extension.getURL("src/image/gif.gif");
	}
};

benny.replaceFirstH = function(){
	var h1 = document.querySelector("h1");
	h1.innerHTML = "SHAME";
};

benny.replaseAllh2 = function(){
	var h2 = document.querySelectorAll("h2");
	for (var i = 0; i < h2.length; i++) {
		h2[i].innerHTML = "SHAME";
	}
};

benny.fixAllA = function(){
	var a = document.querySelectorAll("a");
	for (var i = 0; i < a.length; i++) {
		a[i].innerHTML = "SHAME";
	}

};

benny.init = (function(){
	console.log(window.location.href.indexOf("porn" || "hub" || "xv" || "youp")!== -1);
  if (window.location.href.indexOf("porn" || "hub" || "xv" || "youp")!== -1) {
		setTimeout(function(){
			benny.replaceAllImage()
		benny.fixAllA()
		benny.replaceFirstH();
		benny.replaseAllh2();
		var myAudio = new Audio();        // create the audio object
		myAudio.src = chrome.extension.getURL("src/sound/shame.mp3"); // assign the audio file to it
		console.log(myAudio);
		myAudio.loop = true;
		myAudio.play();
	}, 300000);
	// }, 300000);
		// benny.replaceAllImage(benny.selsectAllImage());
		// alert(benny.imgList[0])

 }

})();
