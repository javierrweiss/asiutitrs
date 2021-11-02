
/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"02B2580E-552C-4834-81A4-ED81F062E3F0",variableType:93}
 */
var fecha_impre = new Date();

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"0D3AFEB5-DFBB-47F7-AA33-6A6C8CBF84F5",variableType:4}
 */
var i = 0


/**
 * 
 * @param event
 *
 * @properties={typeid:24,uuid:"7E2800A5-B239-4821-BFFC-58A44203123C"}
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
 * @properties={typeid:24,uuid:"728C71F5-51AD-481C-81D3-744C71353664"}
 */
function onHide_cierra(event) {
	i = 0
	return true
}
