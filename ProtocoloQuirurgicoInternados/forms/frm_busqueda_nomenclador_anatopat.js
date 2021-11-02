/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"BFA1320C-EBD7-408D-8A40-F9BF3EF32B4E"}
 */
function onAction_FIND(event) {
	globals.vNomenclaAlfa=globals.vNomenclaAlfa.toLocaleUpperCase()
	elements.tabless_30.tabIndex = 1
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"318D847B-AFA7-4098-8C4F-6A1BBE46BAE3"}
 */
function onShow_busqueda_interven(firstShow, event) {
	forms.frm_scroll_nomencla_anatopat.controller.focusFirstField()
	forms.frm_scroll_nomencla_anatopat.elements.nome_codigo.requestFocus()
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
 * @properties={typeid:24,uuid:"3AB0790A-5ABE-47C0-ADC3-48C7C001E42F"}
 */
function onAction_ayuda_nomenclador_anatopat(event) {
	globals.textoAyuda='AYUDA-10'
	var win = application.createWindow("p",JSWindow.MODAL_DIALOG)
	win.title = "Ayuda en selección de código de Anatomía Patológica";
	win.setLocation(810,300)
	win.setSize(500,350)
	win.show(forms.frm_ayuda_gral_Z)
}
