
/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"EAD19F82-94F6-4727-9082-79F92A16151A",variableType:93}
 */
var fecha_impre = new Date();

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"2C0DAC1E-F870-4C76-A8DF-87C40845F330",variableType:4}
 */
var i = 0


/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"0FD69DC4-0574-41EF-9C51-45CAF6B5DEDD"}
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
 * @properties={typeid:24,uuid:"5CA5B8FD-3B7D-4736-992F-7A77AA82E151"}
 */
function onHide_cierra(event) {
	i = 0
	return true
}
