/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"52CB8635-0E88-4C7E-97CF-F215A663EF98"}
 */
var f_puntero_pag_ant = '';


/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"D900B189-B560-4245-ADC3-D691021EB0DD"}
 */
function onAction_hist_clinica_alf(event) {
	globals.smsciru_hiscliunica=forms.smsciru_frm_scr_hist_clin_unica_alf.foundset.histcabnrounico;
	if(vs_to_smsciru_envios.getSize()>0){
		var existente = globals.DIALOGS.showQuestionDialog("Hist.Clinica Unica existente","Paciente con SMS enviado en la fecha."+'\n'+"¿Confirma un nuevo envío a este paciente?","No","Si")
		if(existente=="No"){
			return
		}
	}
	if((smsciru_histcliunica_to_tbc_hist_cab.histcabcodareacel_2<11||smsciru_histcliunica_to_tbc_hist_cab.histcabcodareacel_2==null)||(smsciru_histcliunica_to_tbc_hist_cab.histcabnrolineacel_2==0||smsciru_histcliunica_to_tbc_hist_cab.histcabnrolineacel_2==null||smsciru_histcliunica_to_tbc_hist_cab.histcabnrolineacel_2=='')){
		var error_celular = globals.DIALOGS.showErrorDialog("Hist.Clinica Unica celular erróneo","Paciente sin número de celular ó con celular erróneo."+'\n'+"Avise a Admisión para que ingresen el celular.","Ok")
			return
	}
	var paciente = forms.smsciru_frm_scr_hist_clin_unica_alf.foundset.histcabnrounico;
	paciente += ' - ' +  forms.smsciru_frm_scr_hist_clin_unica_alf.foundset.histcabapellnom;
	forms.smsciru_frm_enviasms_ini.f_paciente = paciente.toString().trim();
	globals.vHiscli = forms.smsciru_frm_scr_hist_clin_unica_alf.foundset.histcabnrounico;
	globals.smsciru_hiscliunica=forms.smsciru_frm_scr_hist_clin_unica_alf.foundset.histcabnrounico;
	globals.smsciru_codObraSocial = smsciru_histcliunica_to_tbc_hist_cab.histcabobra;
	forms.smsciru_frm_enviasms_ini.f_cobertura = smsciru_codobra_to_tbc_obras.obr_razonsoc;
	
	forms.smsciru_frm_enviasms_ini.f_plan = smsciru_histcliunica_to_tbc_hist_cab.histcabplanx;
	forms.smsciru_frm_enviasms_ini.f_histClinUnica = globals.vHiscli;
	forms.smsciru_frm_enviasms_ini.$paciente = forms.smsciru_frm_scr_hist_clin_unica_alf.foundset.histcabapellnom;
	forms.smsciru_frm_enviasms_ini.f_edad = globals.CalculoEdad(smsciru_histcliunica_to_tbc_hist_cab.histcabfechanac)+" "+globals.vTipoEdad;
	forms.smsciru_frm_enviasms_ini.elements.txt_histClinUnica.border='LineBorder,2,#008040';
	var $name = application.getActiveWindow().getName()
	var $win = application.getWindow($name)
	if($win!=null){
		$win.hide()
		$win.destroy()
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"52384F37-7BB4-4C25-948C-43C7E7DE8CFC"}
 */
function onAction(event) {
	// TODO Auto-generated method stub
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"04A419E0-8394-4C72-A615-DED7309634E5"}
 */
function onAction_siguiente_pagina(event) {
	foundset.setSelectedIndex(1)
	f_puntero_pag_ant=foundset.histcabapellnom;
	foundset.setSelectedIndex(foundset.getSize())
	var $SQL="select histcabnrounico, histcabapellnom from tbc_hist_cab_new where histcabapellnom>='"+utils.stringTrim(foundset.histcabapellnom)+" '"
    var frm_ds = databaseManager.getDataSetByQuery("asistencial", $SQL, null, 20);
    
   	var $ds = databaseManager.createEmptyDataSet()
	$ds.addColumn('histcabnrounico',1,JSColumn.NUMBER)   
	$ds.addColumn('histcabapellnom',2,JSColumn.TEXT)
	
	var $max= frm_ds.getMaxRowIndex()

	if ($max > 0){
		for(var i=1;i<=$max;i++){
			$ds.addRow([frm_ds.getValue(i,1),frm_ds.getValue(i,2)])
		}
	}

	var $tipos = [JSColumn.NUMBER, JSColumn.TEXT]


	var $frm = solutionModel.getForm('smsciru_frm_scr_hist_clin_unica_alf')
	$frm.dataSource = $ds.createDataSource('Ds_Histcab', $tipos)
	forms.smsciru_frm_scr_hist_clin_unica_alf.controller.recreateUI()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"0443B16A-C71F-4C2E-99F1-5885CD45DB43"}
 */
function onAction_pagina_anterior(event) {
	var $SQL="select histcabnrounico, histcabapellnom from tbc_hist_cab_new where histcabapellnom>='"+utils.stringTrim(f_puntero_pag_ant)+" '"
    var frm_ds = databaseManager.getDataSetByQuery("asistencial", $SQL, null, 20);
    
   	var $ds = databaseManager.createEmptyDataSet()
	$ds.addColumn('histcabnrounico',1,JSColumn.NUMBER)   
	$ds.addColumn('histcabapellnom',2,JSColumn.TEXT)
	
	var $max= frm_ds.getMaxRowIndex()

	if ($max > 0){
		for(var i=1;i<=$max;i++){
			$ds.addRow([frm_ds.getValue(i,1),frm_ds.getValue(i,2)])
		}
	}

	var $tipos = [JSColumn.NUMBER, JSColumn.TEXT]


	var $frm = solutionModel.getForm('smsciru_frm_scr_hist_clin_unica_alf')
	$frm.dataSource = $ds.createDataSource('Ds_Histcab', $tipos)
	forms.smsciru_frm_scr_hist_clin_unica_alf.controller.recreateUI()
}

/**
 * Handle focus gained event of the element.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"E98C26FC-C1E3-4CBD-B4F9-73048F300F4F"}
 */
function onFocusGained_elemento(event) {
	onAction_hist_clinica_alf(event)
}

/**
 * Handle hide window.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"C0E296F3-11A7-47A6-BDC7-CAD9CEBC2295"}
 */
function onHide(event) {
	var $name = application.getActiveWindow().getName()
	application.output($name)
	var $win = application.getWindow($name)
	if($win!=null){
		$win.hide()
		$win.destroy()
	}
	return true
}
