/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"C0648106-C0F8-4C3C-9B87-5C1D2C3AB7C9"}
 */
function onAction_add_Cajas_dtl(event) {
	//forms.Ingreso_cajcirugia_dtl.foundset.newRecord()
	forms.protambu_Cajas_quirurgicas.elements.btn_new.visible=false
	forms.protambu_Cajas_quirurgicas.elements.lbl_new.visible=false
	forms.protambu_Cajas_quirurgicas.elements.btn_ayuda.visible=false
	forms.protambu_frm_1400.elements.volver_form116.enabled=false
	forms.protambu_Cajas_quirurgicas.elements.tab_cajas_cirugia.tabIndex=2
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"3DCBB0CC-E01D-48BD-9B07-0A26C300A756"}
 */
function onAction_btn_delete_cajascirugia(event) {
		
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"8F13FAC4-69F7-4756-B667-2D67B556CED2"}
 */
function onAction_ayuda_Cajas_dtl(event) {
	//globals.textoAyuda='AYUDA-26'
	var win = application.createWindow("p",JSWindow.MODAL_DIALOG)
	win.title = "Ayuda en Ingreso de Cajas de Cirugía";
	win.setLocation(810,300)
	win.setSize(500,350)
	//win.show(forms.frm_ayuda_gral_Z)
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"44953968-80F6-497B-9044-8B0F72551C8A"}
 */
function onShow_Cajas_dtl(firstShow, event) {
	globals.protambu1400_horaingreso_cajas=globals.protambu1400_hora_ingreso+''+'00'
	controller.focusFirstField()
}
