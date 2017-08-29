var _$ = (function(){

  return function (target, col)
  {
    var obj = document.querySelector(target);
    return obj;
  };

})();


var session = false;
const ENTER_KEY = 13, BACKSPACE_KEY = 8, DELETE_KEY = 46;

const _root = "http://www.site.co/child";
const _root_parent = "http://www.site.co/";

if(_$("#have_session")){
	session = (_$("#have_session").value == 1) ? true : false;
}

var uid = (_$("#user_id_hid")) ? _$("#user_id_hid").value : 0;

/*
 * CHECK BROWSER
 */

// Opera 8.0+ (UA detection to detect Blink/v8-powered Opera)
isOpera = !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
// Firefox 1.0+
isFirefox = typeof InstallTrigger !== 'undefined';
// Safari 3.0+
isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || safari.pushNotification);
// Internet Explorer 6-11
isIE = /*@cc_on!@*/false || !!document.documentMode;
// Edge 20+
isEdge = !isIE && !!window.StyleMedia;
// Chrome 1+
isChrome = !!window.chrome && !!window.chrome.webstore;
// Blink engine detection
isBlink = (isChrome || isOpera) && !!window.CSS;

/*
 * Prototype : Contructor
 */
var __prot__ = function( _selector ){
	
	this.selector = _selector || ''
	this.element = document;
}

__prot__.prototype = {
	
	_click: function(callback){
		
		let coll = this.element.querySelectorAll(this.selector)

		for(let i = 0; i < coll.length; i++){
			coll.item(i).addEventListener("click", function(e){
				callback(e)
			})
		}

	},

	compile:()=>{
		console.log("exec...")
	}

};

var _ = (function(window, document){

  return function (selector)
  {
    
    var obj = new __prot__(selector);

    return obj;

  };

})(window, document);


_(".cssClass")._click( function(e){
	console.log(e.target)
});
_(".cssClass")._click( function(e){
	console.log(e.target)
});
