/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"6CC6C391-873B-48B6-A93E-ED79F9E80861",variableType:93}
 */
var fecha_impre = new Date();
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"A7A39EF8-7B9C-47AD-BB16-CC564F932115",variableType:4}
 */
var i = 0

/** 
 * @param event
 *
 * @properties={typeid:24,uuid:"2852D513-78CD-4566-B356-89F314DACEC5"}
 * @AllowToRunInFind
 */
function onLoad_inicia(event) {
	if(i == 0){
	    forms[globals.gbl_Form].controller.setPageFormat(210,297,5,5,10,10,globals.gbl_orienta,0)
	    forms[globals.gbl_Form].controller.showPrintPreview(true)
		i = 1
	}else{		
		var $win = application.getWindow('prn') 
		$win.hide()
		$win.destroy()
		i = 0
	}
}
/** 
 * @param event
 *
 * @properties={typeid:24,uuid:"1B77D115-22ED-4144-9437-9246F7CB5A78"}
 */
function onHide_cierra(event) {
	i = 0
	return true
}
