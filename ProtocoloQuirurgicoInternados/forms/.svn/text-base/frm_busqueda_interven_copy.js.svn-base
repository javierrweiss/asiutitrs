/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"C618AAE7-B9F0-45B9-BA7C-6033CE539C5C"}
 */
function onAction_FIND(event) {
	globals.vIntervenAlfa0=globals.vIntervenAlfa0.toLocaleUpperCase()
	elements.tabless_30.tabIndex = 1
	forms.frm_scroll_interven_copy.controller.focusFirstField()
	forms.frm_scroll_interven_copy.elements.itv_codi.requestFocus()
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"CABBE568-A9B9-41F3-B822-E78950F4BD01"}
 */
function onShow_busqueda_interven(firstShow, event) {
	elements.buscar.requestFocus()
	/*
		if (globals.vEsHemodinamia=="Si"){
			databaseManager.removeTableFilterParam("maestros","RESTO")
			databaseManager.addTableFilterParam("maestros","tbc_interven","itv_tipestudio","in",[2,3],"HEMO")
		}else{
			databaseManager.removeTableFilterParam("maestros","HEMO")
			databaseManager.addTableFilterParam("maestros","tbc_interven","itv_tipestudio","in",[0,1],"RESTO")
		}
		
	*/
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"9641C50D-B489-4685-BA20-4CC047B6E7A7"}
 */
function onAction_ayuda_busqueda_interven(event) {
	globals.textoAyuda='AYUDA-7'
	var win = application.createWindow("p",JSWindow.MODAL_DIALOG)
	win.title = "Ayuda en Búsqueda de Código de Intervención";
	win.setLocation(810,300)
	win.setSize(500,350)
	win.show(forms.frm_ayuda_gral_Z)
}
