// ==UserScript==
// @name         Multiple URL selection and opening userscript
// @namespace    https://github.com/JumpJets/Multiple-URL-selection-and-opening-userscript
// @version      1.0
// @description  Use Ctrl + Left mouse click to select multiple urls, they will be highlighted with red outline and opened when you release mouse.
// @author       X4
// @match        http://*
// @match        https://*
// @grant        none
// ==/UserScript==

(function() {
	'use strict';

	var currKey = null,
		urlsToOpen = [];

	window.onkeydown = function(e) {
		currKey = e.keyCode ? e.keyCode : e.which;
	}
	window.onkeyup = function(e) {
		currKey = null;
	}
	window.onmousedown = function(e) {
		window.onmousemove = function(e) {
			if (currKey == 17) {
				document.body.style.userSelect = "none";
				document.body.style.MozUserSelect = "none";
				let q = document.querySelectorAll(":hover");
				for (let i = 0; i < q.length; i++) {
					if (q[i].tagName === "A" && !urlsToOpen.includes(q[i])) {
						urlsToOpen.push(q[i]);
						q[i].style.outline = "1px dashed red";
					}
				}
			}
		}
	}
	window.onmouseup = function(e) {
		window.onmousemove = null;
		document.body.style.userSelect = "unset";
		document.body.style.MozUserSelect = "unset";
		let a = document.createElement("a");
		for (let i = 0; i < urlsToOpen.length; i++) {
			console.log(urlsToOpen[i].href);
			urlsToOpen[i].style.outline = "unset";
			window.open(urlsToOpen[i].href, '_blank');
		}
		urlsToOpen = [];
	}
})();