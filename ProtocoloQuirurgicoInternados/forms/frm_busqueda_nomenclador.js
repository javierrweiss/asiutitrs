/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"6EC19380-DC45-4910-B25B-16268C2EA5A9"}
 */
function onAction_FIND(event) {
	globals.vNomenclaAlfa=globals.vNomenclaAlfa.toLocaleUpperCase()
	elements.tabless_30.tabIndex = 1
	forms.frm_scroll_nomenclador.controller.focusFirstField()
	forms.frm_scroll_nomenclador.elements.nome_codigo.requestFocus()
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"1D08566E-C7FD-4D68-A8FE-5E0F596C058A"}
 */
function onShow_busqueda_interven(firstShow, event) {
	if(globals.vNomenclaAlfa==''){
		elements.buscar.requestFocus()
	}else{
		forms.frm_scroll_nomenclador.elements.nome_codigo.requestFocus()
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
 * @properties={typeid:24,uuid:"0B68EC6D-3A8D-4A58-85BA-CAD222472E97"}
 */
function onAction_ayuda_busqueda_nomenclador(event) {
	globals.textoAyuda='AYUDA-9'
	var win = application.createWindow("p",JSWindow.MODAL_DIALOG)
	win.title = "Ayuda en Búsqueda de Código de Nomenclador";
	win.setLocation(810,300)
	win.setSize(500,350)
	win.show(forms.frm_ayuda_gral_Z)
}
