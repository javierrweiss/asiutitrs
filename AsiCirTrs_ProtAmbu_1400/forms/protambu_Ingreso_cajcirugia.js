/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"F095FC33-9F12-48C8-BE89-CEDCD0D7BED3"}
 */
function onAction_busco_cajacirugia(event) {
	globals.vCajaAlfa=''
	var win = application.createWindow("f",JSWindow.MODAL_DIALOG)
	win.title = "Búsqueda de Caja de Cirugía";
	win.show(forms.protambu_frm_busqueda_cajascirugia)
	forms.protambu_Ingreso_cajcirugia.foundset.cajcirugia_caja=globals.vCaja
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"8FF67F09-56F1-4698-ACFD-900BA539517D"}
 */
function onShow_Ingreso_cirugia_dtl(firstShow, event) {
	forms.protambu_Ingreso_cajcirugia.foundset.newRecord()
	globals.InicializarDatos("protambu_Ingreso_cajcirugia","asistencial","tbc_cajcirugia")
	forms.protambu_frm_1400.elements.volver_form116.enabled=false
	globals.vCajaAlfa=''
	var win = application.createWindow("f",JSWindow.MODAL_DIALOG)
	win.title = "Búsqueda de Caja de Cirugía";
	win.show(forms.protambu_frm_busqueda_cajascirugia)
	forms.protambu_Ingreso_cajcirugia.foundset.cajcirugia_caja=globals.vCaja
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"3A083CB0-5B30-48C1-872C-BE141FB092CE"}
 */
function onAction_cancela_Ingreso_cajcicrugia_dtl(event) {
    databaseManager.revertEditedRecords()
	forms.protambu_Cajas_quirurgicas.elements.btn_new.visible=true
	forms.protambu_Cajas_quirurgicas.elements.lbl_new.visible=true
	forms.protambu_Cajas_quirurgicas.elements.btn_ayuda.visible=true
	forms.protambu_frm_1400.elements.volver_form116.enabled=true
	forms.protambu_Cajas_quirurgicas.elements.tab_cajas_cirugia.tabIndex=1
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"76961379-4486-45E3-ACCB-BA52D5ED349A"}
 * @AllowToRunInFind
 */
function onAction_confirma_Ingreso_cajcirugia_dtl(event) {
	globals.vCaja=foundset.cajcirugia_caja
	if(protambu1400_vhiscli_to_tbc_cajcirugia.getSize()<1){
		foundset.cajcirugia_des=protambu1400_tbc_cajcirugia_to_tbc_mae_est.maeest_des
		foundset.cajcirugia_fec=globals.protambu1400_fechaingreso
		foundset.cajcirugia_histclin=globals.vHiscli
		foundset.cajcirugia_hora=globals.protambu1400_horaingreso_cajas
		foundset.cajcirugia_prot=globals.vNroProtocolo
		foundset.cajcirugia_tipo=1
		try{
			databaseManager.saveData(foundset.getRecord(1))
		}catch (msg){
			(plugins.dialogs.showInfoDialog("No graba Caja de Cirugía",msg.toString(),"ok"))
		}	
	}else{
		databaseManager.revertEditedRecords()
	}
	forms.protambu_Cajas_quirurgicas.elements.btn_new.visible=true
	forms.protambu_Cajas_quirurgicas.elements.lbl_new.visible=true
	forms.protambu_Cajas_quirurgicas.elements.btn_ayuda.visible=true
	forms.protambu_frm_1400.elements.volver_form116.enabled=true
	forms.protambu_Cajas_quirurgicas.elements.tab_cajas_cirugia.tabIndex=1
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"DFABA8B8-501A-4E39-9188-8114170876EB"}
 */
function onAction_ayuda_Ingreso_cajcirugia_dtl(event) {
	//globals.textoAyuda='AYUDA-27'
	var win = application.createWindow("p",JSWindow.MODAL_DIALOG)
	win.title = "Ayuda en Ingreso de Cajas de Cirugía";
	win.setLocation(810,300)
	win.setSize(500,350)
	//win.show(forms.frm_ayuda_gral_Z)
}
