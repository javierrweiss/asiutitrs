
/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"BD3D40C1-FEAC-4550-9CF7-230522771E14",variableType:93}
 */
var fecha_impre = new Date();

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"FA4BAD67-2D0E-4B8B-95FD-D08FB7C11CE8",variableType:4}
 */
var i = 0

/**
 * @param event
 *
 * @properties={typeid:24,uuid:"C1776B19-B548-4E3E-BAE8-78ADF24BFAF1"}
 * @AllowToRunInFind
 */
function onLoad_inicia(event) {
	if(i == 0){
		forms[globals.gbl_Form].foundset.find()
		forms[globals.gbl_Form].foundset['tipo']= globals.texto
		forms[globals.gbl_Form].foundset.search()
		
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
 * @param event
 *
 * @properties={typeid:24,uuid:"64B8EC18-4F4C-4280-A4B8-6AC846550C3F"}
 */
function onHide_cierra(event) {
	i = 0
	return true
}