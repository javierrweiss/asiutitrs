
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"049562AA-F38E-4524-A158-4CBD042E722E"}
 */
function onAction_busco_cajacirugia(event) {
	globals.vCajaAlfa=''
	var win = application.createWindow("f",JSWindow.MODAL_DIALOG)
	win.title = "Búsqueda de Caja de Cirugía";
	win.show(forms.frm_busqueda_cajascirugia)
	forms.Ingreso_cajcirugia_dtl.foundset.cajcirugia_caja=globals.vCaja
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"FAE90F7E-5501-47C7-9390-C34439B48BC7"}
 */
function onShow_Ingreso_cirugia_dtl(firstShow, event) {
	forms.Ingreso_cajcirugia_dtl.foundset.newRecord()
	globals.InicializarDatos("Ingreso_cajcirugia_dtl","asistencial","tbc_cajcirugia")
	forms.form116_dtl.elements.volver_form116.enabled=false
	globals.vCajaAlfa=''
	var win = application.createWindow("f",JSWindow.MODAL_DIALOG)
	win.title = "Búsqueda de Caja de Cirugía";
	win.show(forms.frm_busqueda_cajascirugia)
	forms.Ingreso_cajcirugia_dtl.foundset.cajcirugia_caja=globals.vCaja
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"56DA7E86-8846-463C-96ED-D7BEEA84DC1E"}
 */
function onAction_cancela_Ingreso_cajcicrugia_dtl(event) {
	forms.Ingreso_cajcirugia_dtl.foundset.deleteRecord()
	forms.Cajas_dtl.elements.btn_new.visible=true
	forms.Cajas_dtl.elements.btn_delete.visible=true
	forms.Cajas_dtl.elements.btn_ayuda.visible=true
	forms.form116_dtl.elements.volver_form116.enabled=true
	forms.Cajas_dtl.elements.tab_cajas_cirugia.tabIndex=1
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"1B9572F7-F86D-43CD-B2F3-514DBE845757"}
 * @AllowToRunInFind
 */
function onAction_confirma_Ingreso_cajcirugia_dtl(event) {
	var fs8 = databaseManager.getFoundSet("asistencial","tbc_cajcirugia")
	fs8.find()
	fs8['cajcirugia_caja']=foundset.cajcirugia_caja
	fs8['cajcirugia_tipo']=0
	fs8['cajcirugia_histclin']=globals.vHiscli
	fs8['cajcirugia_fec']=vhiscli_to_tbc_cirugint.cirifechacarga
	fs8['cajcirugia_hora']=vhiscli_to_tbc_cirugint.cirihoracarga
	fs8.search()
	if(fs8.getSize()<1){
		foundset.cajcirugia_des=tbc_cajcirugia_to_tbc_mae_est.maeest_des
		foundset.cajcirugia_fec=vhiscli_to_tbc_cirugint.cirifechacarga
		foundset.cajcirugia_histclin=globals.vHiscli
		foundset.cajcirugia_hora=vhiscli_to_tbc_cirugint.cirihoracarga
		foundset.cajcirugia_prot=globals.vNroProtocolo
		foundset.cajcirugia_tipo=0
		try{
			databaseManager.saveData(foundset.getRecord(1))
		}catch (msg){
			(plugins.dialogs.showInfoDialog("No graba Caja de Cirugía",msg.toString(),"ok"))
		}	
	}else{
		foundset.deleteRecord()
	}
	forms.Cajas_dtl.elements.btn_new.visible=true
	forms.Cajas_dtl.elements.btn_delete.visible=true
	forms.Cajas_dtl.elements.btn_ayuda.visible=true
	forms.form116_dtl.elements.volver_form116.enabled=true
	forms.Cajas_dtl.elements.tab_cajas_cirugia.tabIndex=1
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"FCE78E73-38FD-4FEE-8E7E-8CFB33957813"}
 */
function onAction_ayuda_Ingreso_cajcirugia_dtl(event) {
	globals.textoAyuda='AYUDA-27'
	var win = application.createWindow("p",JSWindow.MODAL_DIALOG)
	win.title = "Ayuda en Ingreso de Cajas de Cirugía";
	win.setLocation(810,300)
	win.setSize(500,350)
	win.show(forms.frm_ayuda_gral_Z)
}
