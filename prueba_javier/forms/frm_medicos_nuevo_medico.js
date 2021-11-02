
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"FEF6158D-B02E-40DD-90AB-E4CFCF327061"}
 */
function onActionSave(event) {
	// TODO Auto-generated method stub
	// foreign key data is only filled in for equals (=) relation items
	var idx = 0;//default adds on top
	
	if(idx>=0){
		//forms.frm_medicos_nuevo_medico.foundset.newRecord()
		//scopes.globals.InicializarDatos("frm_medicos_nuevo_medico","maestros","tbc_medicos")
		/*
		foms.frm_medicos_nuevo_medico.foundset.med_codigo = globals.gbl_med_new_cod;
		foms.frm_medicos_nuevo_medico.foundset.med_apenom = globals.gbl_med_new_apenom;
		foms.frm_medicos_nuevo_medico.foundset.med_codlega = globals.gbl_med_new_codlega;
		foms.frm_medicos_nuevo_medico.foundset.med_domicipart = globals.gbl_med_new_domicipart;
		foms.frm_medicos_nuevo_medico.foundset.med_domiciprof = globals.gbl_med_new_domiciprof;
		foms.frm_medicos_nuevo_medico.foundset.med_email = globals.gbl_med_new_email;
		foms.frm_medicos_nuevo_medico.foundset.med_espemed = globals.gbl_med_new_espemed;
		foms.frm_medicos_nuevo_medico.foundset.med_feccontra = globals.gbl_med_new_feccontra;
		foms.frm_medicos_nuevo_medico.foundset.med_fecnac = globals.gbl_med_new_fecnac;
		foms.frm_medicos_nuevo_medico.foundset.med_matricula = globals.gbl_med_new_matricula;
		foms.frm_medicos_nuevo_medico.foundset.med_numdoc = globals.gbl_med_new_numdoc;
		foms.frm_medicos_nuevo_medico.foundset.med_telefprof = globals.gbl_med_new_telefprof;
		foms.frm_medicos_nuevo_medico.foundset.med_telefprof_2 = globals.gbl_med_new_telefprof_2;
		foms.frm_medicos_nuevo_medico.foundset.med_tipdoc = globals.gbl_med_new_tipdoc;
		*/
	}
	databaseManager.saveData(forms.frm_medicos_nuevo_medico.foundset.getRecord(1))
	var error1='';
	var error2='';
	var array = databaseManager.getFailedRecords(forms.frm_medicos_nuevo_medico.foundset)
	for (var i = 0; i < array.length; i++) {
		var record = array[i];
		var jstable = databaseManager.getTable(record);
		var tableSQLName = jstable.getSQLName();
		//plugins.dialogs.showErrorDialog("Error de Grabación",'Tabla:' + tableSQLName + ' en server:' + jstable.getServerName() + ' falló la grabación. Avise urgente a Sistemas, por favor!')
		//plugins.dialogs.showErrorDialog("Error en grabación de tbc_cirugint",record.exception);
		 error1='Error de Grabación en Tabla:' + tableSQLName + ' en server:' + jstable.getServerName() + ' falló la grabación. Avise urgente a Sistemas, por favor!'
		 error2='Error en grabación de tbc_cirugint '+record.exception;
		application.output(record.exception)
		if (record.exception.getErrorCode() == ServoyException.RECORD_VALIDATION_FAILED) {
		// exception thrown in pre-insert/update/delete event method
			 var thrown = record.exception.getStackTrace()
			//plugins.dialogs.showErrorDialog("Error de grabación","Record validation failed: " + thrown)
		}
	// find out the table of the record (similar to getEditedRecords)
		application.output("Error de Grabación Tabla:" + tableSQLName + " en server:" + jstable.getServerName() + " falló la grabación.")
	}
	if(error1!=''){
		plugins.dialogs.showErrorDialog("Error en grabación","Se ha producido un error de grabación. "+'\n'+"Avise a Sistemas, por favor.", "Ok")
		plugins.dialogs.showErrorDialog("Error de grabación al Alta de Protocolo","Record validation failed: " + thrown)
		plugins.dialogs.showErrorDialog("Error en grabacion en tbc_medicos al Alta",error1,"Ok")
		plugins.dialogs.showErrorDialog("Error en grabacion en tbc_medicos al Alta",error2,"Ok")
	}
	
	
	forms.frm_tbc_medicos_tabless.elements.tabless.tabIndex=1
}
