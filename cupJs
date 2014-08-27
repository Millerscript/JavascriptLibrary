/*---------------------------------------------------------------------*
 * AUTHOR : MILLER MOSQUERA. © 2014 GRAYCUP TEAM. ALL RIGHT RESERVED   *
 * DESCRIPTION: CUP JS LIBRARY FOR THE USE AND HANDLE OF DOM HTML,     *
 * RESERVED USE ONLY GRAY·CUP APP.                                     *
 * CLASS CONCEPT IN JAVASCRIPT: OBJECTS AND PROTOTYPES                 *
 *---------------------------------------------------------------------*
 *---------------------------------------------------------------------*/

var gray = function (_selector)
{
	var info = {
		Version : '1.0',
		Date : '06/08/2014',
		Company : 'GrayCup',
		Author : 'Miller Mosquera'
	};
	/*
	 * Property 
	 */
	 this.selector = _selector || '';
	 this.element = document;
     
	 if(typeof(this.selector)=='string' && _selector!='')
	 {
	 	if( (_selector.charAt(0)=="#") ) this.selector = _selector;
		if( (_selector.charAt(0)==".") ) this.selector = _selector;
	 }
}
/*
 * this function execute an ajax request
 * @params[paramsData] : this parameter is a object that contains the followings data:
 * 		{URL, METHOD, RESPONSEELEMENT}
 */
 function _ajax(paramsData)
 {
 	//if(e.target.tagName.toLowerCase()=='span'){alert('im span');}
	if (    window.XMLHttpRequest   ){  xmlhttp = new XMLHttpRequest(); }
	else { 	xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");   }

	xmlhttp.onreadystatechange = function() {	    
	if (    xmlhttp.readyState == 4 && xmlhttp.status == 200    )
	{
		document.getElementById(paramsData.responseElement).innerHTML = xmlhttp.responseText;
	}};
				            
	xmlhttp.open(paramsData.method, paramsData.url, true);
	xmlhttp.send(); 
 }

 /*
 * this function set a attribute for the DOM element
 * @params[attrName] : attribute name of element
 * @params[attrValue] : attribute value of element
 */
function statsSetAttr(attrName, attrValue)
{ 
	this.element.querySelector(this.selector).setAttribute(attrName, attrValue); 
}
/*
 * this function return the attribute value passed as parameter
 * @params[attrName] : attribute name of element
 */
function statsGetAttr(attrName)
{ 
	return this.element.querySelector(this.selector).getAttribute(attrName); 
}


/*
 * Methods
 */
gray.prototype = {
//this function add element at required node
//@params[elementType] : element type to add
addElement : function(elementType)
{ 
     /*Statements...*/
    if(typeof(elementType)!='undefined')
	{
        newElement = this.element.createElement(elementType);
        this.element.querySelector(this.selector).appendChild(newElement);
        return {
            attr : function(attrName, attrStats)
            {
                newElement.setAttribute(attrName, attrStats);
            },
            css : function(style)
            {
                var _style = (newElement.getAttribute('style')==null) ? '' : style;
                newElement.setAttribute('style', ""+_style+style);
            }
				};
	}
},

//add class to a element
//@params[_class] : class to add
addClass : function(_class)
{ 
    /*Statements...*/
	var editClass = ' '+_class;
	var element = this.element.querySelector(this.selector);
	var existClass = (statsGetAttr.call(this, 'class')!=null) ? statsGetAttr.call(this, 'class') : '';
	var allClass = existClass + editClass;
	statsSetAttr.call(this, 'class', allClass);
},

event : function(eventHandler)
{
    var _selector = this.selector;
    return{
            ajax : function(objectArgs){},
			      delete : function(withEffect, effectType){},
            css : function(){},
			      showElement : function(){},
            insertThisClass : function(){},
			      hiddenElement : function(){},
            attr : function(attrName, value){}
};
/*
 * instance of class
 * '_$' object identifier for the glass library
 * syntax for some functions: _$(selector).functionSelect(arguments);
 */
var _$ = (function(){
	
	return function (_params)
	{
		var obj = new gray(_params);
		return obj;
	};
})();
