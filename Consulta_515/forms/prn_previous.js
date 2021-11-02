
/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"43B58CFF-C3F4-4482-853E-5CED797F8281",variableType:93}
 */
var fecha_impre = new Date();

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"6A0B67E1-5D91-4A98-A76B-1AF4C0F52248",variableType:4}
 */
var i = 0


/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"280728BF-B658-47B3-818F-85CD2C4CEF1E"}
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
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"C2AFDA73-EFA0-45A6-BB32-C8C39D0BFC3D"}
 */
function onHide_cierra(event) {
	i = 0
	return true
}

