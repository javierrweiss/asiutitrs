/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"5E0B1167-61D6-48AB-B887-8B797B6C015D"}
 */
function onAction_FIND(event) {
	globals.vCajaAlfa=globals.vCajaAlfa.toLocaleUpperCase()
	elements.tabless_30.tabIndex = 1
	forms.frm_scroll_cajascirugia.controller.focusFirstField()
	forms.frm_scroll_cajascirugia.elements.maeest_nro.requestFocus()
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"E26301FE-3EA6-41F4-B1ED-220BECF07757"}
 */
function onShow_busqueda_interven(firstShow, event) {
	elements.buscar.requestFocus()
	/**
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
 * @properties={typeid:24,uuid:"33ADB2BC-AB90-43CF-8154-D8AA584ADD17"}
 */
function onAction_ayuda_busqueda_cajacirugia(event) {
	globals.textoAyuda='AYUDA-6'
	var win = application.createWindow("p",JSWindow.MODAL_DIALOG)
	win.title = "Ayuda en Búsqueda de Cajas de Cirugía";
	win.setLocation(810,300)
	win.setSize(500,350)
	win.show(forms.frm_ayuda_gral_Z)
}
