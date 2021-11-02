/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"01718DA1-A6EE-47A1-B762-158815CADA8A"}
 */
function onAction_FIND(event) {
	globals.vNomenclaAlfa=globals.vNomenclaAlfa.toLocaleUpperCase()
	elements.tabless_30.tabIndex = 1
	application.updateUI()
	forms.protambu_frm_scroll_nomenclador.controller.focusFirstField()
	forms.protambu_frm_scroll_nomenclador.elements.nome_codigo.requestFocus()
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"B14A11EA-19AA-4B97-91C1-C1859D3AEF05"}
 */
function onShow_busqueda_interven(firstShow, event) {
	if(globals.vNomenclaAlfa==''){
		elements.buscar.requestFocus()
	}else{
		forms.protambu_frm_scroll_nomenclador.elements.nome_codigo.requestFocus()
	}
	
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
 * @properties={typeid:24,uuid:"0FFAFA4F-8C3F-48A6-808C-B4736B0070B9"}
 */
function onAction_ayuda_busqueda_nomenclador(event) {
	globals.textoAyuda='AYUDA-9'
	var win = application.createWindow("p",JSWindow.MODAL_DIALOG)
	win.title = "Ayuda en Búsqueda de Código de Nomenclador";
	win.setLocation(810,300)
	win.setSize(500,350)
	win.show(forms.frm_ayuda_gral_Z)
}
