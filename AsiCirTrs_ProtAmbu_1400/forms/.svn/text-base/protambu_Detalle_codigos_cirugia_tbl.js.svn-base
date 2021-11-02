/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"542F9167-4413-48F6-8383-09D7F4FFFCA7"}
 * @AllowToRunInFind
 */
function onAction_delete_tbc_cirugint_tbl(event) {
	try{
		globals.protambu1400_codnome=foundset.vcircodnome
		globals.protambu1400_tiponome=foundset.vcirtiponome
		globals.protambu1400_secuencia=foundset.vcirsecuencia
		protambu1400_vhiscli_to_tbc_prest_guar.deleteRecord()
	}catch (msg){
		(plugins.dialogs.showInfoDialog("No borra Detalle de Prestaciones Ambulatorias",msg.toString(),"ok"))
	}
	try{
		protambu1400_vhiscli_to_tbc_val_ciru.deleteRecord()
	}catch (msg){
		(plugins.dialogs.showInfoDialog("No borra Detalle de Cirugía Ambulatoria",msg.toString(),"ok"))
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"8E6EB3A0-3A1E-4E11-8B6E-CAD314C460A8"}
 */
function onAction_edit_tbc_cirugint_tbl(event) {
	forms.protambu_IngresoCirugia_tab.elements.btn_new.visible=false
	forms.protambu_IngresoCirugia_tab.elements.lbl_new.visible=false
	forms.protambu_IngresoCirugia_tab.elements.btn_ayuda.visible=false
	forms.protambu_frm_1400.elements.volver_form116.enabled=false
	globals.protambu1400_codnome=foundset.vcircodnome
	globals.protambu1400_tiponome=foundset.vcirtiponome
	globals.protambu1400_secuencia=foundset.vcirsecuencia
	forms.protambu_IngresoCirugia_tab.elements.tabless_ingreso_cirugia.tabIndex=3
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"7FB8D40A-DAD1-494F-BDA5-7B8B9B76A047"}
 */
function onShow_tbc_cirugint_tbl(firstShow, event) {
	forms.protambu_IngresoCirugia_tab.controller.focusFirstField()
}
