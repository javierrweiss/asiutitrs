
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"89C5DA33-FC96-4253-91E2-3FD248E4453D"}
 */
function onAction_add_Cajas_dtl(event) {
	//forms.Ingreso_cajcirugia_dtl.foundset.newRecord()
	forms.Cajas_dtl.elements.btn_new.visible=false
	forms.Cajas_dtl.elements.btn_delete.visible=false
	forms.Cajas_dtl.elements.btn_ayuda.visible=false
	forms.form116_dtl.elements.volver_form116.enabled=false
	forms.Cajas_dtl.elements.tab_cajas_cirugia.tabIndex=2
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"84912654-60E8-4D0E-9B7A-D44C61F1221B"}
 */
function onAction_btn_delete_cajascirugia(event) {
	try{
		vhiscli_to_tbc_cirugint.tbc_cirugint_to_tbc_cajcirugia.deleteRecord()
	}catch (msg){
		(plugins.dialogs.showInfoDialog("No borra Cajas de Cirugía",msg.toString(),"ok"))
	}	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"34DBC95E-9EB4-4295-9899-6F1171E1AD92"}
 */
function onAction_ayuda_Cajas_dtl(event) {
	globals.textoAyuda='AYUDA-26'
	var win = application.createWindow("p",JSWindow.MODAL_DIALOG)
	win.title = "Ayuda en Ingreso de Cajas de Cirugía";
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
 * @properties={typeid:24,uuid:"0890A8A0-1585-45D0-B5B8-E235205C793B"}
 */
function onShow_Cajas_dtl(firstShow, event) {
	controller.focusFirstField()
}
