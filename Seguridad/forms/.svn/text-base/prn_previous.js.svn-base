/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"4DC4180B-E5B5-4C16-8D0E-E6724B66A614",variableType:93}
 */
var fecha_impre = new Date();
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"8713727A-58EC-4FAD-BFDA-3C0E637AAF15",variableType:4}
 */
var i = 0

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"D7DA2687-98D5-4816-B0EB-81569E21E5A9"}
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
 * @properties={typeid:24,uuid:"B5573C9E-25F2-4572-82AC-BB27F56EE882"}
 */
function onHide_cierra(event) {
	i = 0
	return true
}
