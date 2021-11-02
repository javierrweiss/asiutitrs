/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"36A797F0-F9D1-4BDA-A0C0-90525F2313BF"}
 */
function onAction_sector(event) {
	// TODO Auto-generated method stub
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"B91A1F87-7EA8-4C6B-85EC-9A6B0A425245"}
 */
function onAction_cancela_sector(event) {
	globals.vAltaSector=false
	forms.frm_tab_sectores_que_atiende.elements.tabless.tabIndex=1
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"CF062F61-BE1A-4AB2-8073-2F86B63E7062"}
 */
function onAction_graba(event) {
	if(globals.vAltaSector){
		if(vs_to_tbc_profmese.getSize()<1){
			vs_to_tbc_profmese.newRecord()
		}
	}
	vs_to_tbc_profmese.prose_carac_con=globals.prose_carac_con
	vs_to_tbc_profmese.prose_otro_cara=globals.prose_otro_cara
	vs_to_tbc_profmese.prose_fec_modif=globals.fechaActual()
	vs_to_tbc_profmese.prose_hor_modif=globals.horaActual()
	vs_to_tbc_profmese.prose_codoper=globals.vLega
	vs_to_tbc_profmese.prose_tipoper=0
	databaseManager.saveData(vs_to_tbc_profmese.getRecord(1))
	forms.frm_tab_sectores_que_atiende.elements.tabless.tabIndex=1
}

/**
 * Handle changed data.
 *
 * @param {Number} oldValue old value
 * @param {Number} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"1B6B166E-AE70-4457-A5D4-8559DA268E4C"}
 */
function onDataChange_modalidad(oldValue, newValue, event) {
	if(newValue==5){
		elements.otro_cara.visible=true
		elements.otro_cara.requestFocus()
	}else{
		elements.otro_cara.visible=false
		elements.btn_graba.requestFocus()
	}
	return true
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"48AB81F5-D3C5-4BC6-8C75-3DDE9B26EAB5"}
 */
function onAction_btn_sectores(event) {
	var win = application.createWindow("Sectores",JSWindow.MODAL_DIALOG);
	win.title = "Sectores";
	win.show(forms.frm_tab_sector);
}
