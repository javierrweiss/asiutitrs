
/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"83E6EA16-4BF5-4BD1-BC01-11D3EFA818F5"}
 */
function onShow_carga_informe(firstShow, event) {
	elements.tabless_1.enabled=false
	if(atcons_to_tbc_servicios.servpatologico!=1){
		if(atcons_vs_to_atcons_imapedet_inf.getSize()>0){
			atcons_vs_to_atcons_imapedet_inf.setSelectedIndex(1)
			globals.AtCons_patologico=atcons_vs_to_atcons_imapedet_inf.imapedipatologico
		}else{
			globals.AtCons_patologico=0
		}
		elements.patologico_lbl.visible=true
		elements.patologico_cbo.visible=true
	}else{
		elements.patologico_lbl.visible=false
		elements.patologico_cbo.visible=false
		globals.AtCons_patologico=1
	}
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
 * @properties={typeid:24,uuid:"4ABCD6D5-99E8-40ED-BEB2-9F2FFF1D8313"}
 */
function onDataChange_patologico(oldValue, newValue, event) {
	if(forms.AtCons_imapedet.foundset.getSize()>0){
		for(var i=1;i<=forms.AtCons_imapedet.foundset.getSize();i++){
			forms.AtCons_imapedet.foundset.setSelectedIndex(i)
			forms.AtCons_imapedet.foundset.imapedipatologico=globals.AtCons_patologico
		}
	}
		
	try {databaseManager.saveData(forms.AtCons_imapedet.foundset)}
	catch (msg){
		(plugins.dialogs.showInfoDialog("Error en 'Atender Paciente' al grabar en forms.AtCons_texto",msg.toString(),"ok"))
		//	application.output(msg.rhinoException.getMessage())
	}
	var error1=''
	var error2=''
	var i = 0
	var array = databaseManager.getFailedRecords(forms.AtCons_imapedet.foundset)
	for (i = 0; i < array.length; i++) {
		var record = array[i];
		var jstable = databaseManager.getTable(record);
		var tableSQLName = jstable.getSQLName();
		error1='Error de Grabación en Tabla: ' + tableSQLName + ' en server: ' + jstable.getServerName() + ' falló la grabación. Avise a Sistemas, por favor!'
		error2='Error en grabación '+record.exception;
		if (record.exception.getErrorCode() == ServoyException.RECORD_VALIDATION_FAILED) {
			var thrown = record.exception.getValue()
			plugins.dialogs.showErrorDialog("Error de grabación","Record validation failed: " + thrown)
		}
	}
	if(error1!=''){
		plugins.dialogs.showErrorDialog("Error en grabacion ",error1,"Ok")
		plugins.dialogs.showErrorDialog("Error en grabacion ",error2,"Ok")
		plugins.dialogs.showInfoDialog("Reintentar","Reintente grabar!!")
	}
	return true
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"9A657A69-F6A1-4DA5-BCA0-28D6E8FDFBB1"}
 */
function onAction_btn_informa(event) {
	
	if(forms.AtCons_imapedet.foundset.imapedettextoinforme!=null){
		forms.AtCons_texto.f_informe=forms.AtCons_imapedet.foundset.imapedettextoinforme
	}else{
		forms.AtCons_texto.f_informe=''
	}
	forms.AtCons_texto.f_nroinforme=forms.AtCons_imapedet.foundset.imapedetnroinforme
	forms.AtCons_carga_informe.elements.tabless_1.enabled=true
	forms.AtCons_carga_informe.elements.tabless_1.tabIndex=1
	forms.AtCons_texto.elements.btn_graba.enabled=true
	forms.AtCons_texto.elements.txt_texto.editable=true
	forms.AtCons_texto.elements.txt_texto.requestFocus()
}


