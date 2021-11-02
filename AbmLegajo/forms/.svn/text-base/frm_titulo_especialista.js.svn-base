/**
 * @properties={typeid:35,uuid:"3DC88A08-9296-46A5-8014-8B20E6067E54",variableType:-4}
 */
var fGraboBien = false;

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"BE2FD3C8-5614-46FD-9A74-2BB07DF87D96"}
 */
function onAction_busca_Especialidad(event) {
	var win = application.createWindow("c",JSWindow.MODAL_DIALOG)
	win.title = "Búsqueda de Código de Especialidad";
	win.setSize(400,400)
	win.show(forms.frm_tab_especial)
	if(globals.vEspecial>0){
		foundset.prfme_especi=globals.vEspecial
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"44DFBA1D-F89E-480C-B0B8-E7599394EA90"}
 */
function onAction_new_titulo_especialidad(event) {
	foundset.newRecord()
	globals.InicializarDatos("frm_titulo_especialista","rrhh","tbc_profmedesp")
	elements.btn_agrega.visible=false
	elements.lbl_agrega.visible=false
	elements.btn_graba.visible=true
	elements.lbl_graba.visible=true
	elements.btn_cancela.visible=true
	elements.lbl_cancela.visible=true
	application.updateUI()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"1B586707-A575-4D4B-A3DA-7F734186EDA8"}
 */
function onAction_graba_titulo_especialidad(event) {
	elements.btn_graba.visible=false
	elements.lbl_graba.visible=false
	elements.btn_cancela.visible=false
	elements.lbl_cancela.visible=false
	application.updateUI()
	
	foundset.prfme_codmed=globals.per_1
	foundset.prfme_tipmed=0
	if(globals.ed_prfme_fec_exped==null){
		foundset.prfme_fec_exped=0
	}else{
		foundset.prfme_fec_exped=globals.ConvierteFechaToInteger(globals.ed_prfme_fec_exped)
	}
	if(globals.ed_prfme_fec_recert==null){
		foundset.prfme_fec_recert=0
	}else{
		foundset.prfme_fec_recert=globals.ConvierteFechaToInteger(globals.ed_prfme_fec_recert)
	}
	if(globals.ed_prfme_fec_vtosss==null){
		foundset.prfme_fec_vtosss=0
	}else{
		foundset.prfme_fec_vtosss=globals.ConvierteFechaToInteger(globals.ed_prfme_fec_vtosss)
	}
	if(globals.ed_prfme_ins_fec_egr==null){
		foundset.prfme_ins_fec_egr=0
	}else{
		foundset.prfme_ins_fec_egr=utils.stringToNumber(globals.ConvierteFechaToInteger(globals.ed_prfme_ins_fec_egr))
	}
	if(globals.ed_prfme_ins_fec_ing==null){
		foundset.prfme_ins_fec_ing=0
	}else{
		foundset.prfme_ins_fec_ing=globals.ConvierteFechaToInteger(globals.ed_prfme_ins_fec_ing)	
	}
	if(globals.ed_prfme_jef_fec_egr==null){
		foundset.prfme_jef_fec_egr=0
	}else{
		foundset.prfme_jef_fec_egr=globals.ConvierteFechaToInteger(globals.ed_prfme_jef_fec_egr)	
	}
	if(globals.ed_prfme_jef_fec_ing==null){
		foundset.prfme_jef_fec_ing=0
	}else{
		foundset.prfme_jef_fec_ing=globals.ConvierteFechaToInteger(globals.ed_prfme_jef_fec_ing)	
	}
	if(globals.ed_prfme_res_fec_egr==null){
		foundset.prfme_res_fec_egr=0
	}else{
		foundset.prfme_res_fec_egr=globals.ConvierteFechaToInteger(globals.ed_prfme_res_fec_egr)	
	}
	if(globals.ed_prfme_res_fec_ing==null){
		foundset.prfme_res_fec_ing=0
	}else{
		foundset.prfme_res_fec_ing=globals.ConvierteFechaToInteger(globals.ed_prfme_res_fec_ing)	
	}
	foundset.prfme_codoper=globals.vLega
	foundset.prfme_tipoper=globals.vTipoOperador
	foundset.prfme_fec_modif=globals.fechaActual()
	foundset.prfme_hor_modif=globals.horaActual()
	//application.output(globals.ed_prfme_ins_fec_egr)
	//application.output(globals.ConvierteFechaToInteger(globals.ed_prfme_ins_fec_egr))
	var name=''
	
	//for(var i=0;i<foundset.alldataproviders.length;i++){
		//name=foundset.alldataproviders[i]
		
		//application.output(name)
		//application.output(foundset[name])
	//}	
	fGraboBien=databaseManager.saveData(forms.frm_titulo_especialista.foundset)
	
	elements.btn_agrega.visible=true
	elements.lbl_agrega.visible=true
	application.updateUI()
}

/**
 * Handle hide window.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"F2174726-695D-453D-8A25-845B1FAC6E88"}
 */
function onHide_titulo_especialidad(event) {
	if (!fGraboBien){
		databaseManager.revertEditedRecords(forms.frm_titulo_especialista.foundset)
	}
	return true
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"36C6B752-91D7-4144-9FC6-F26D4C00A27A"}
 */
function onAction_irAnterior(event) {
	var $actual = controller.getSelectedIndex()
	controller.setSelectedIndex($actual - 1)
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"AFA25C8A-3ABD-4DE7-8D83-1B4F75E49590"}
 */
function onAction_irSiguiente(event) {
	var $actual = controller.getSelectedIndex()
	var $ultimo = databaseManager.getFoundSetCount(foundset)
	if ($actual == $ultimo){
		controller.setSelectedIndex(1)
	}else{
		controller.setSelectedIndex($actual + 1)
	}
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"1B571F05-737E-4105-8654-C46B082796BB"}
 */
function onShow_titulo_especialista(firstShow, event) {
	//elements.btn_graba.visible=false
	//elements.lbl_graba.visible=false
	elements.btn_cancela.visible=false
	elements.lbl_cancela.visible=false
	elements.btn_agrega.visible=true
	elements.lbl_agrega.visible=true
	application.updateUI()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"C47545FF-9B8B-4428-BA7E-059484AC91F0"}
 */
function onAction_campo_gral(event) {
	switch (event.getElementName()){
	case 'prfme_especi':elements.prfme_tit_exped.requestFocus();break;
	case 'prfme_tit_exped':elements.prfme_fec_exped.requestFocus();break;
	case 'prfme_fec_exped':elements.prfme_residencia.requestFocus();break;
	case 'prfme_residencia':if(foundset.prfme_residencia==1){foundset.prfme_res_entidad=0;elements.prfme_res_lugar.requestFocus()}else{elements.prfme_res_entidad.requestFocus()};break;
	case 'prfme_res_entidad':elements.prfme_res_lugar.requestFocus();break;
	case 'prfme_res_lugar':elements.prfme_res_fec_ing.requestFocus();break;
	case 'prfme_res_fec_ing':elements.prfme_res_fec_egr.requestFocus();break;
	case 'prfme_res_fec_egr':elements.prfme_jef_reside.requestFocus();break;
	case 'prfme_jef_reside':if(foundset.prfme_jef_reside==1){foundset.prfme_jef_entidad=0;elements.prfme_jef_lugar.requestFocus()}else{elements.prfme_jef_entidad.requestFocus()};break;
	case 'prfme_jef_entidad':elements.prfme_jef_lugar.requestFocus();break;
	case 'prfme_jef_lugar':elements.prfme_jef_fec_ing.requestFocus();break;
	case 'prfme_jef_fec_ing':elements.prfme_jef_fec_egr.requestFocus();break;
	case 'prfme_jef_fec_egr':elements.prfme_ins_reside.requestFocus();break;
	case 'prfme_ins_reside':if(foundset.prfme_ins_reside==1){foundset.prfme_ins_entidad=0;elements.prfme_ins_lugar.requestFocus()}else{elements.prfme_ins_entidad.requestFocus()};break;
	case 'prfme_ins_entidad':elements.prfme_ins_lugar.requestFocus();break;
	case 'prfme_ins_lugar':elements.prfme_ins_fec_ing.requestFocus();break;
	case 'prfme_ins_fec_ing':elements.prfme_ins_fec_egr.requestFocus();break;
	case 'prfme_ins_fec_egr':elements.prfme_recert_lug.requestFocus();break;
	case 'prfme_recert_lug':elements.prfme_fec_recert.requestFocus();break;
	case 'prfme_fec_recert':elements.prfme_nroins_sss.requestFocus();break;
	case 'prfme_nroins_sss':elements.prfme_fec_vtosss.requestFocus();break;
	case 'prfme_fec_vtosss':elements.btn_graba.requestFocus();break;
	}
}

/**
 * Handle changed data.
 *
 * @param {String} oldValue old value
 * @param {String} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"329B266D-B112-428E-8C1F-328CD23DCAAB"}
 */
function onDataChange_gral(oldValue, newValue, event) {
	elements.btn_graba.visible=true
	elements.lbl_graba.visible=true
	application.updateUI()
	return true
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"0885A49E-10EF-4E42-BFA1-7FFA5FE34D75"}
 */
function onAction_btn_cancela(event) {
	elements.btn_cancela.visible=false
	elements.lbl_cancela.visible=false
	application.updateUI()
	databaseManager.revertEditedRecords(foundset)
	elements.btn_agrega.visible=true
	elements.lbl_agrega.visible=true
	application.updateUI()
}
