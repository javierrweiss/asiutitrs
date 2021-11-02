/**
 * Callback method for when form is shown.
 *
 *
 * @properties={typeid:24,uuid:"62492E96-A187-4946-A98E-22CE64BDB37A"}
 * @AllowToRunInFind
 */
function onShow(frm, names, server, tabla, relacion, campo) {
	var name = new Array()
	name = names;
	var filas = foundset[relacion].getSize()
	globals[campo] = '';
	if (filas > 0)
	{
		foundset[relacion].sort('anestxt_protocolo asc, anestxt_grupo asc, anestxt_nro1 asc, anestxt_secuen asc')
		
		foundset[relacion].setSelectedIndex(1)
	    globals[campo] = foundset[relacion][name[4]];
		for (var j=2;j<filas+1;j++)
 		{
			foundset[relacion].setSelectedIndex(j)
			
			if (globals.txt_1 < 77200){
			    globals[campo] = globals[campo] + "\n" + foundset[relacion][name[4]];
			}
			else{
			    globals[campo] = globals[campo] + foundset[relacion][name[4]];
			}    
		}
	}
	/*
	if (globals.txt_1 < 77200){
		elements.btn_graba.visible = false;
		elements.txtarea.editable = false;
	}
	else{
	     elements.btn_graba.visible = true;
	     elements.txtarea.editable = true;
	}
	*/
	

}

/**
 * Perform the element default action.
 *
 *
 * @properties={typeid:24,uuid:"E56BC124-C8C3-48E5-B91B-8B815AAB6206"}
 * @AllowToRunInFind
 */
function onAction(frm, names, server, tabla, relacion, campo) {
	var name = new Array()
	name = names;
	   	application.setClipboardContent(globals[campo])
		var longitudTexto = 0;
		longitudTexto = globals[campo].length;
		
		var posicionFinal = 0;
		posicionFinal = globals[campo].indexOf("\n");
	    var posicionInicial = 0;
	    
	    if (posicionFinal < 0)
	    {
	    	posicionFinal = globals[campo].length
	    }
	    
	    if (globals.txt_1 < 77200){
	    	var kenter = globals[campo].indexOf("\n");
	    	while (kenter > 0){
	    	   globals[campo] = globals[campo].replace("\n","");
			   kenter = globals[campo].indexOf("\n");
	    	}
			
	    }
	    var tamanio = 0;
		tamanio = foundset[relacion].getSize();
		
		if (tamanio > 0)
		{
			foundset[relacion].deleteAllRecords()
			application.sleep(300)
			//databaseManager.refreshRecordFromDatabase(foundset[relacion],-1)
		}
	    
	    var j=0;
	    var lineas = Math.round(longitudTexto / 78);
	   
	    var resto = longitudTexto % 78;
	    posicionFinal = 78;
	    if (resto > 0) 
	    {
	    	++lineas;
	    }
	    var lineascab = 0;
	    
	    for (j=1;j<lineas+1;j++)
	    {
	    	var vlarguito = globals[campo].substr(posicionInicial,78)
			if (vlarguito != ''){
				foundset[relacion].newRecord();
	      			
				foundset[relacion][name[0]] = globals.txt_1;
				foundset[relacion][name[1]] = globals.txt_1g;
				foundset[relacion][name[2]] = 1;
				foundset[relacion][name[3]] = j;
				foundset[relacion][name[4]] = globals[campo].substr(posicionInicial,78);
				foundset[relacion][name[5]] = 0;
				foundset[relacion][name[6]] = " ";
			    databaseManager.saveData(foundset[relacion].getRecord(1))
			    posicionInicial = posicionInicial + 78;
			    ++lineascab
			}
		}
		//databaseManager.refreshRecordFromDatabase(foundset[relacion],-1)
		
		globals.vNro1 = 0
		var filascab = foundset[relacion].getSize()
		
		if (filascab > 0){
			
			foundset[relacion].deleteAllRecords()
			application.sleep(200)
			//databaseManager.refreshRecordFromDatabase(foundset[relacion],-1)
			
		}
		foundset[relacion].newRecord();
		foundset[relacion][name[0]] = globals.txt_1;
		foundset[relacion][name[1]] = globals.txt_1g;
		foundset[relacion][name[2]] = 0;
		foundset[relacion][name[3]] = 0;
		foundset[relacion][name[4]] = " ";
		foundset[relacion][name[5]] = lineascab;
		foundset[relacion][name[6]] = " ";
	    
		databaseManager.saveData(foundset[relacion].getRecord(1))
		//databaseManager.refreshRecordFromDatabase(foundset[relacion],-1)
		/*
		var array = databaseManager.getFailedRecords(foundset[relacion])
		for (var i = 0; i < array.length; i++) {
			var record = array[i];
			plugins.dialogs.showErrorDialog("Error en Ingreso_anatomia_dtl","Error en grabación de registro de observaciones de Anatomía Patológica.  Avise urgente a Sistemas por favor!")
			plugins.dialogs.showErrorDialog("Error en grabación de tbc_antapaob",record.exception);
			application.output(record.exception)
			if (record.exception.getErrorCode() == ServoyException.RECORD_VALIDATION_FAILED) {
	// exception thrown in pre-insert/update/delete event method
				var thrown = record.exception.getValue()
				plugins.dialogs.showErrorDialog("Error de grabación","Record validation failed: " + thrown)
			}
// find out the table of the record (similar to getEditedRecords)
			var jstable = databaseManager.getTable(record);
			var tableSQLName = jstable.getSQLName();
			plugins.dialogs.showErrorDialog("Error de Grabación",'Tabla:' + tableSQLName + ' en server:' + jstable.getServerName() + ' falló la grabación. Avise urgente a Sistemas, por favor!')
			application.output("Error de Grabación Tabla:" + tableSQLName + " en server:" + jstable.getServerName() + " falló la grabación.")
		}
		*/
	    elements.btn_graba.visible = false
	   	globals.txt_4 = ""
	   	elements.txtarea.editable = false
	   	//forms.frm_anestesia_preoperatoria_dtl.elements.tabless_246.tabIndex=1
	   	// Modificado el 25/02/2014 pedido por el anestesiólogo
	   	application.showForm("frm_menu_principal")
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"4D3A7865-0B4E-4F70-A308-575A74EC7371"}
 */
function onAction_Cancela(event) {
	//application.showForm("frm_anestesia_preoperatoria_dtl")
	forms.frm_anestesia_preoperatoria_dtl.elements.tabless_246.tabIndex=1
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"A16F57B4-D5B5-4248-BC0A-7ACE20F9B0F4"}
 */
function onAction1(event) {
	var thePressedButton = plugins.dialogs.showQuestionDialog('Confirma Grabación', 'Confirma Texto Ingresado','Si','No');
	if (thePressedButton == "Si"){
    	onAction(globals.frm_txt, globals.names_campos, globals.vServer, globals.vTabla, globals.names_relacion, globals.campo_texto1)
	}
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"C97E674F-47E4-4F93-8ED3-C01A0C9A2695"}
 */
function onShow1(firstShow, event) {
	globals.txt_1 = globals.vHisclin
	globals.txt_1g = 1
	globals.vTipoTexto = "1.- Informe de Evaluación Pre-anestésica"
	
	globals.names_campos[0] = "anestxt_protocolo"
	globals.names_campos[1] = "anestxt_grupo"
	globals.names_campos[2] = "anestxt_nro1"
	globals.names_campos[3] = "anestxt_secuen"
	globals.names_campos[4] = "anestxt_linea"
	globals.names_campos[5] = "anestxt_tope"
	globals.names_campos[6] = "anestxt_filler"
    /**
    globals.names_campos[0] = "protxt_protocolo"
	globals.names_campos[1] = "protxt_grupo"
	globals.names_campos[2] = "protxt_nro1"
	globals.names_campos[3] = "protxt_secuen"
	globals.names_campos[4] = "protxt_linea"
	globals.names_campos[5] = "protxt_tope"
	globals.names_campos[6] = "protxt_filler"
     */
	globals.frm_txt = "tbarchtxt"
	globals.vServer = "asistencial"
	globals.vTabla = "tbc_aneste_txt"	
	//globals.vTabla = "tbc_protoc_txt"
	globals.vTipoTxt1 = "Historia Clínica: " 
	globals.names_relacion = 'vs_to_tbc_aneste_txt'
	//globals.names_relacion = 'vs_to_tbc_protoc_txt'	
	globals.vGrupo = 1
	globals.vNro1 = 1
	globals.campo_texto1='txt_4'
	onShow(globals.frm_txt, globals.names_campos, globals.vServer, globals.vTabla, globals.names_relacion, globals.campo_texto1)
	elements.btn_graba.visible = true
	elements.txtarea.editable = true
	elements.txtarea.requestFocus()
}
