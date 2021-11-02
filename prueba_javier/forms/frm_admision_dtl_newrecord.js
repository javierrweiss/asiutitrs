
/**
 * Perform the element right-click action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"717EF3CC-F439-4F09-AC30-AC0F33AA4D04"}
 */
function onRightClickNewRecord(event) {
	// TODO Auto-generated method stub
	var idx = globals.gbl_admision_crud_hist_clin_idx;
	//idx = currentcontroller.newRecord();//default adds on top
	//currentcontroller.newRecord(false); //adds at bottom
	//currentcontroller.newRecord(2); //adds as second record
	if(idx>=0){
		forms.frm_admision_dtl.foundset.newRecord()
		forms.frm_admision_dtl.foundset.adm_apelnom = globals.gbl_admision_crud_nombre;
		forms.frm_admision_dtl.foundset.adm_cama = globals.gbl_admision_crud_cama;
		forms.frm_admision_dtl.foundset.adm_habita =globals.gbl_admision_crud_habitacion;
		forms.frm_admision_dtl.foundset.adm_fecnac = globals.gbl_admision_crud_nacimiento;
		forms.frm_admision_dtl.foundset.adm_fecaltaefec = globals.gbl_admision_crud_fecalta;
		forms.frm_admision_dtl.foundset.adm_fecing = globals.gbl_admision_crud_fecing;
		forms.frm_admision_dtl.foundset.adm_obrsoc = globals.gbl_admision_crud_obrsoc;
		forms.frm_admision_dtl.foundset.adm_sexo = globals.gbl_admision_crud_sexo;
	}
	databaseManager.saveData(forms.frm_admision_dtl.foundset.getRecord(1))
	var array = databaseManager.getFailedRecords(forms.frm_admision_dtl.foundset)
	for (var i = 0; i < array.length; i++) {
		var record = array[i];
		var jstable = databaseManager.getTable(record);
		var tableSQLName = jstable.getSQLName();
		//plugins.dialogs.showErrorDialog("Error de Grabación",'Tabla:' + tableSQLName + ' en server:' + jstable.getServerName() + ' falló la grabación. Avise urgente a Sistemas, por favor!')
		//plugins.dialogs.showErrorDialog("Error en grabación de tbc_cirugint",record.exception);
		var error1='Error de Grabación en Tabla:' + tableSQLName + ' en server:' + jstable.getServerName() + ' falló la grabación. Avise urgente a Sistemas, por favor!'
		var error2='Error en grabación de tbc_cirugint '+record.exception;
		application.output(record.exception)
		if (record.exception.getErrorCode() == ServoyException.RECORD_VALIDATION_FAILED) {
		// exception thrown in pre-insert/update/delete event method
			 var thrown = record.exception.getValue()
			//plugins.dialogs.showErrorDialog("Error de grabación","Record validation failed: " + thrown)
		}
	// find out the table of the record (similar to getEditedRecords)
		application.output("Error de Grabación Tabla:" + tableSQLName + " en server:" + jstable.getServerName() + " falló la grabación.")
	}
	if(error1!=''){
		plugins.dialogs.showErrorDialog("Error en grabación","Se ha producido un error de grabación. "+'\n'+"Avise a Sistemas, por favor.", "Ok")
		plugins.dialogs.showErrorDialog("Error de grabación al Alta de Protocolo","Record validation failed: " + thrown)
		plugins.dialogs.showErrorDialog("Error en grabacion en tbc_cirugint al Alta",error1,"Ok")
		plugins.dialogs.showErrorDialog("Error en grabacion en tbc_cirugint al Alta",error2,"Ok")
	}
	
	
	var name=application.getActiveWindow()
	name.getName()
	var $win=application.getWindow(name.getName())
	if($win!=null){
		$win.hide()
		$win.destroy()
	}
	
}


/**
 * Handle hide window.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"B4ED3B68-29AD-4EF8-B4D1-9FC45399DC35"}
 */
function onHide(event) {
	// TODO Auto-generated method stub
	return true
}
