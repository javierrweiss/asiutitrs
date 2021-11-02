/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"73FC1B41-C553-4B6C-8FF0-FFBDCBB438C9"}
 */
function onAction_Add_IngresoCirugia(event) {
	//vs_to_tbc_cirugint_dtl.newRecord()
	//globals.InicializarDatosDeRelacion(vs_to_tbc_cirugint_dtl,"asistencial","tbc_cirugint_dtl")
	//forms.tbc_cirugint_detalle_dtl.foundset.newRecord()
	//globals.InicializarDatos("tbc_cirugint_detalle_dtl","asistencial","tbc_cirugint_dtl")
	forms.protambu_IngresoCirugia_tab.elements.btn_new.visible=false
	forms.protambu_IngresoCirugia_tab.elements.lbl_new.visible=false
	forms.protambu_IngresoCirugia_tab.elements.btn_ayuda.visible=false
	forms.protambu_frm_1400.elements.volver_form116.enabled=false
	forms.protambu_IngresoCirugia_tab.elements.tabless_ingreso_cirugia.tabIndex=2
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"B7D0F437-3E61-4050-832E-46BF67D824C5"}
 */
function onAction_btn_delete_IngresoCirugia(event) {
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"8C4B87FB-C4F0-46C8-B475-0332F96A49CA"}
 */
function onAction_edit_Cirugia(event) {
	/**
	vhiscli_to_tbc_protesis.setSelectedIndex(1)
	globals.vNroPedidoProtesis=vhiscli_to_tbc_protesis.prote_nroprote
	globals.vfrmActual='frm_certificado_implante_prn'
	forms.frm_certificado_implante_prn.sub_buildReport()
	globals.printRoutine('frm_certificado_implante_prn',null)
	
	globals.vfrmActual='frm_anatomia_patologica_prn'
	forms.frm_anatomia_patologica_prn.sub_buildReport()
	globals.vfrmActual='frm_anatomia_patologica_prn_2'
	forms.frm_anatomia_patologica_prn_2.sub_buildReport_2()
	globals.printRoutine('frm_anatomia_patologica_prn_2',null)
	*/
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"313BC34E-6FB5-4EB7-B3CF-232FECE66A46"}
 */
function onAction_ayuda_IngresoCirugia_tab(event) {
	//globals.textoAyuda='AYUDA-13'
	var win = application.createWindow("p",JSWindow.MODAL_DIALOG)
	win.title = "Ayuda en Ingreso de Códigos de Cirugía según Nomenclador";
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
 * @properties={typeid:24,uuid:"790946DE-E2E4-4496-8E9D-90C6485E960C"}
 */
function onShow_IngresoCirugia(firstShow, event) {
	controller.focusFirstField()
}
