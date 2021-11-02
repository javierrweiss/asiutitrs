
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"05173B3C-11BB-447B-8B55-EE15AF223F36"}
 */
function onAction_Add_IngresoCirugia(event) {
	//vs_to_tbc_cirugint_dtl.newRecord()
	//globals.InicializarDatosDeRelacion(vs_to_tbc_cirugint_dtl,"asistencial","tbc_cirugint_dtl")
	//forms.tbc_cirugint_detalle_dtl.foundset.newRecord()
	//globals.InicializarDatos("tbc_cirugint_detalle_dtl","asistencial","tbc_cirugint_dtl")
	forms.IngresoCirugia_tab.elements.btn_new.visible=false
	forms.IngresoCirugia_tab.elements.btn_edit.visible=false
	forms.IngresoCirugia_tab.elements.btn_delete.visible=false
	forms.IngresoCirugia_tab.elements.btn_ayuda.visible=false
	forms.form116_dtl.elements.volver_form116.enabled=false
	forms.IngresoCirugia_tab.elements.tabless_ingreso_cirugia.tabIndex=2
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"B48F44CA-2264-434A-B7BC-B9FCA7959795"}
 */
function onAction_btn_delete_IngresoCirugia(event) {
	try{
		vs_to_tbc_cirugint_dtl.deleteRecord()
	}catch (msg){
		(plugins.dialogs.showInfoDialog("No borra Detalle de Cirugía",msg.toString(),"ok"))
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"EFF6E676-B2A3-400A-A07E-E3CF488D2B49"}
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
 * @properties={typeid:24,uuid:"923B692F-2122-47D4-9024-DEB9DBE7FAF8"}
 */
function onAction_ayuda_IngresoCirugia_tab(event) {
	globals.textoAyuda='AYUDA-13'
	var win = application.createWindow("p",JSWindow.MODAL_DIALOG)
	win.title = "Ayuda en Ingreso de Códigos de Cirugía según Nomenclador";
	win.setLocation(810,300)
	win.setSize(500,350)
	win.show(forms.frm_ayuda_gral_Z)
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"E4E0F98B-759B-4A37-B1F3-8339767D153A"}
 */
function onShow_IngresoCirugia(firstShow, event) {
	controller.focusFirstField()
}
