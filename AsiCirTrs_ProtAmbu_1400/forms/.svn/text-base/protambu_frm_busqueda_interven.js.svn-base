/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"27AB6758-F99F-4520-B2D6-B0C9CC0B7BA4"}
 */
function onAction_FIND(event) {
	globals.protambu1400_intervenAlfa=globals.protambu1400_intervenAlfa.toLocaleUpperCase()
	elements.tabless_30.tabIndex = 1
	forms.protambu_frm_scroll_interven.controller.focusFirstField()
	forms.protambu_frm_scroll_interven.elements.itv_codi.requestFocus()
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"A1847B38-A668-4809-8CC7-B3D3DA80C400"}
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
 * @properties={typeid:24,uuid:"3BA97A02-165E-42CF-9F57-8822E9D622B7"}
 */
function onAction_ayuda_busqueda_interven(event) {
	globals.textoAyuda='AYUDA-7'
	var win = application.createWindow("p",JSWindow.MODAL_DIALOG)
	win.title = "Ayuda en Búsqueda de Código de Intervención";
	win.setLocation(810,300)
	win.setSize(500,350)
	win.show(forms.frm_ayuda_gral_Z)
}
