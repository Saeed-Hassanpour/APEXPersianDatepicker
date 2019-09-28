/*
 *  change Grogorian date to Jajli date
 *  APEX versions: 5.1,18+ 
 *  Edited By Saeed Hassanpour | Team Leader, Software Development | Oracle APEX
 *  Company : Paya Shetaban Andisheh(APEXRAD)- https://apexrad.info
 *  Date    : 2018/07
 *  Telegram: @SaeedHassanpour | @apexrad
 *  Twitter:@HassanpourSaeed
 *  Blogs: oracleapex.blogfa.com | Saeedhassanpour.blogspot.co.uk | https://apexrad.info/blog | iranoug.org/ir/f?p=SITE:IROUGBLOG
 *  Email: info@apexrad.info
*/
/**
* @namespace apexrad
**/
var apexrad = apexrad || {};

/**
* @module util
**/
apexrad.util = {

	/**
	* http://www.javascriptkit.com/javatutors/loadjavascriptcss.shtml
	* @function typeText
	**/
	loadjscssFile: function loadjscssFile(filename, filetype){
		if (filetype=="js"){ //if filename is a external JavaScript file
		    var fileref=document.createElement('script')
		    fileref.setAttribute("type","text/javascript")
		    fileref.setAttribute("src", filename)
		}
		else if (filetype=="css"){ //if filename is an external CSS file
			var fileref=document.createElement("link")
			fileref.setAttribute("rel", "stylesheet")
			fileref.setAttribute("type", "text/css")
			fileref.setAttribute("href", filename)
		}
		if (typeof fileref!="undefined")
		    document.getElementsByTagName("head")[0].appendChild(fileref)
	},

	/**
	* @function goToNext
	* go to next item
	**/
         
	goToNext: function goToNext(currentCtrlId, nextCtrlId) {
	    var nextCtrl 
	    if (nextCtrlId != "")
	        nextCtrl = document.getElementById(nextCtrlId);
	    if (currentCtrlId != "") {
	        var currentCtrl = document.getElementById(currentCtrlId);
	        var maxLength = currentCtrl.maxLength;
	        if (nextCtrl && !nextCtrl.disabled && currentCtrl.value.length == maxLength) {
	            nextCtrl.focus();
	        }
	    }
	}

};
