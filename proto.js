/*
 * Miller Mosquera
 * 2017/08/30
 * Prototype
 */


/* Constructor */
var __prot__ = function( _selector ){
	
	this.selector = _selector || '' 
	
	this.element = document;

}


/* functions */
var init = (function(){
	
	/* funcion privada */
	var selectorType = { 
												isObject : function(){ 
													let type = (typeof arguments[0] == 'object') ? true : false;
													return type; 
												}, 
												isString : function(){ 
													let type = (typeof arguments[0] == 'string') ? true : false;
													return type; 
												}

											};

	return {

					_click: function(callback){
						
						let coll = this.element.querySelectorAll(this.selector)

						for(let i = 0; i < coll.length; i++){

							coll.item(i).addEventListener("click", function(e){
								callback(e)
							})

						}

					},

					_typing:function(callback){
						
						let coll = this.element.querySelectorAll(this.selector)

						for(let i = 0; i < coll.length; i++){

							coll.item(i).addEventListener("keydown", function(e){
								callback(e)
							})

						}

					},

					_compile:function(callback) {

					},

					_html:function(){
						
						let content = '';

						/* Si existen argumentos pasados */
						if(arguments.length > 0 ){

							/* verifica el tipo de argumento, no sé para que (..)? */
							if( typeof arguments[0] == 'string' || typeof arguments[0] == 'number'){

								if(selectorType.isString(this.selector)){
									this.element.querySelector(this.selector).innerHTML = arguments[0]
									content = this.element.querySelector(this.selector).innerHTML
								}

								if(selectorType.isObject(this.selector)){
									this.selector.target.innerHTML = arguments[0]
									content = this.selector.target.innerHTML
								}

							}else{
								// ... si es una función o alguna otra cosa viene aquí (Ya sé para qué valído los tipos de argumentos jajjaja)
							}

						}else{

							if(selectorType.isString(this.selector)){
								content = this.element.querySelector(this.selector).innerHTML
							}

							if(selectorType.isObject(this.selector)){
								content = this.selector.target.innerHTML
							}

						}


						return content;
					},

					_key:function(){
						
						const ENTER_KEY = 13
						, BACKSPACE_KEY = 8
						, DELETE_KEY = 46;

						let key = this.selector.keyCode || this.selector.charCode;

						return {
							backSpace : function(){
								return ( key == BACKSPACE_KEY || key == DELETE_KEY ) ? true : false;
							},
							enter : function(){
								return ( key == ENTER_KEY ) ? true : false;
							}
						}

					},

					_cross:function(callbackOpera, callbackFirefox, callbackSafari, callbackIE, callbackEdge, callbackChrome, callbackBlink){

						// [This code get on link: https://stackoverflow.com/questions/9847580/how-to-detect-safari-chrome-ie-firefox-and-opera-browser ]
						
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

						if(isOpera){
							callbackOpera(isOpera);
						}else if(isFirefox){
							callbackFirefox(isFirefox);
						}else if(isSafari){
							callbackSafari(isSafari);
						}else if(isIE){
							callbackIE(isIE);
						}else if(isEdge){
							callbackEdge(isEdge);
						}else if(isChrome){
							callbackChrome(isChrome);
						}else if(isBlink){
							callbackBlink(isBlink);
						}

					}

				};

})();

__prot__.prototype = init;

var _ = (function(window, document){

  return function (selector)
  {
    
    var obj = new __prot__(selector);

    return obj;

  };

})(window, document);


_("._sgn_ocup_js")._click( function(e){
	console.log(e)
});

_("._p_placeholder_js")._click( function(e){

	//_(e)._html("<span>Miller Mosquera</span>");
	//console.log(_(e)._html());

	_()._cross(  (isOpera)=>{
								console.log(isOpera)
							},
							(isFirefox)=>{
								console.log(isFirefox)
							},
							(isSafari)=>{
								console.log(isSafari)
							},
							(isIE)=>{
								console.log(isIE)
							},
							(isEdge)=>{
								console.log(isEdge)
							},
							(isChrome)=>{
								console.log(isChrome)
							},
							(isBlink)=>{
								console.log(isBlink)
							});

});

_("._p_placeholder_js")._typing( function(e){
	
	/*console.log(_(e)._key().backSpace())
	console.log(_(e)._key().enter())*/

	//let key = e.keyCode || e.charCode;

  //if(key==ENTER_KEY){
  if(_(e)._key().enter()){

		e.preventDefault();

	}else{
		
		//var word = e.target.innerHTML.trim();
		//let contentSize = e.target.innerHTML;
		let contentSize = _(e)._html();

		if(contentSize.length <= 100){
			
			//_$("#_p_max_title_marker").innerHTML = contentSize.length;
			_("#_p_max_title_marker")._html(contentSize.length);

      if( _(e)._key().backSpace() ){
      	
  			//let content = e.target.innerHTML;
  			let content = _(e)._html();

          if(content.trim() == ""){

          	// Add the placeholder
          	e.target.classList.add("_p_prv_title_placeholder")

          }else{
          	
						_()._cross(  
												(isOpera)=>{
													console.log(isOpera)
												},
												(isFirefox)=>{

						            	if(content.length == 4){

						            		e.target.removeChild(e.target.childNodes[0])

						                e.target.classList.add("_p_prv_title_placeholder")

						              }

												},
												(isSafari)=>{
													console.log(isSafari)
												},
												(isIE)=>{
													console.log(isIE)
												},
												(isEdge)=>{
													console.log(isEdge)
												},
												(isChrome)=>{

						            	if(content.length == 1){

						            		// add the placeholder
						                e.target.classList.add("_p_prv_title_placeholder")
						                content = "";

						              }

												},
												(isBlink)=>{
													console.log(isBlink)
												}
											);

          }

      }else{
      	e.target.classList.remove("_p_prv_title_placeholder")
      }

		}else{
			
			//if( key == BACKSPACE_KEY || key == DELETE_KEY ){
			if( _(e)._key().backSpace() ){
				//_$("#_p_max_title_marker").innerHTML = (contentSize.length > 100) ? (parseInt(contentSize.length)) - 1 : contentSize.length;
				_("#_p_max_title_marker")._html( ((contentSize.length > 100) ? (parseInt(contentSize.length)) - 1 : contentSize.length) );
			}else{
				e.preventDefault();
			}     			

		}

	}

});