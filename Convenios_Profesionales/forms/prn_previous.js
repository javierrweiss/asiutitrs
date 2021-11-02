/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"AF981C0E-265C-4955-ADE0-2C016CAE2F4D",variableType:93}
 */
var fecha_impre = new Date();

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"A90F9816-9B7D-43B3-B9D6-26B400552A52",variableType:4}
 */
var i = 0;

/** 
 * @param event
 *
 * @properties={typeid:24,uuid:"15D9EC44-8E33-4D14-A9F3-64C4FE584930"}
 */
function onLoad_inicia(event) {
	if(i == 0){
	    forms[globals.gbl_Form].controller.setPageFormat(210,297,5,5,10,10,globals.gbl_orienta,0)
	    forms[globals.gbl_Form].controller.showPrintPreview(false)
		i = 1
	}else{		
		var $win = application.getWindow('prn') 
		$win.hide()
		$win.destroy()
		i = 0
	}
}

/**
 * Handle hide window.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"17354A1F-DF9E-4BDE-80B7-6AA9AA649BB1"}
 */
function onHide_cierra(event) {
	i = 0
	return true
}
