/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"48D3D59B-A313-4DC3-A840-E37FFA94FFE7"}
 * @AllowToRunInFind
 */
function onAction_graba_Anatomia(event) {
	
	var fs = databaseManager.getFoundSet("asistencial","tbc_anatpaca")
	fs.find()
	fs['apca_protocolo']=globals.vNroProtocolo
	fs['apca_servicio']=11
	fs.search()
	//if(vs_to_tbc_anatpaca.getSize()<1){
	if(fs.getSize()<1){
		
		var done0 = plugins.rawSQL.executeSQL("parametros", "param", "begin; lock table param in row exclusive mode;")
		if (!done0) {
			var msg0 = plugins.rawSQL.getException().getMessage(); //see exception node for more info about the exception obj
			plugins.dialogs.showErrorDialog('Error', 'SQL exception: ' + msg0, 'Ok')
		}
		var done = plugins.rawSQL.executeSQL("parametros", "param", "select * from param where key_param = 1 for update;")
		if (!done) {
			var msg = plugins.rawSQL.getException().getMessage(); //see exception node for more info about the exception obj
			plugins.dialogs.showErrorDialog('Error', 'SQL exception: ' + msg, 'Ok')
		}

		var vQuery = " SELECT prm_31 FROM param WHERE key_param = 1";
		var vDataset = databaseManager.getDataSetByQuery("parametros", vQuery, null, 1);
		
		//plugins.dialogs.showInfoDialog("contador",vDataset.getValue(1,1));
		
		globals.vNroSolicitud=vDataset.getValue(1,1)+1;
		
		var done1 = plugins.rawSQL.executeSQL("parametros", "param", "update param set prm_31 = prm_31 + 1 where key_param = 1; commit;")
		if (!done1) {
			var msg1 = plugins.rawSQL.getException().getMessage(); //see exception node for more info about the exception obj
			plugins.dialogs.showErrorDialog('Error', 'SQL exception: ' + msg1, 'Ok')
		}
		//globals.vNroSolicitud=fs7['prm31']
		//plugins.dialogs.showInfoDialog("NroSolicitud",globals.vNroSolicitud.toString())
		//show dialog
		//vs_to_tbc_anatpaca.newRecord()
		
		
		//fs.newRecord()
		vnrosolic_to_tbc_anatpaca.newRecord()
		
		vnrosolic_to_tbc_anatpaca.apca_codmed=globals.vciri_legciru
		vnrosolic_to_tbc_anatpaca.apca_estado=0
		vnrosolic_to_tbc_anatpaca.apca_fecingr=0
		vnrosolic_to_tbc_anatpaca.apca_fecsolic_3=globals.vFechaActual
		vnrosolic_to_tbc_anatpaca.apca_histclin=globals.vHiscli
		vnrosolic_to_tbc_anatpaca.apca_horingr=0
		vnrosolic_to_tbc_anatpaca.apca_nrosolic=globals.vNroSolicitud
		vnrosolic_to_tbc_anatpaca.apca_nrosolic_3=globals.vNroSolicitud
		vnrosolic_to_tbc_anatpaca.apca_obrsoc=vhiscli_unico_to_tbc_admision_scroll.adm_obrsoc
		vnrosolic_to_tbc_anatpaca.apca_histnom=vhiscli_unico_to_tbc_admision_scroll.adm_apelnom
		vnrosolic_to_tbc_anatpaca.apca_protocolo=globals.vNroProtocolo
		vnrosolic_to_tbc_anatpaca.apca_servicio=11
		vnrosolic_to_tbc_anatpaca.apca_tipadmi=0
		vnrosolic_to_tbc_anatpaca.apca_tipmed=globals.vtipo_ciru_ie
		
		vnrosolic_to_tbc_anatpaca.apca_obsgral=0
		vnrosolic_to_tbc_anatpaca.apca_lineas=0
		vnrosolic_to_tbc_anatpaca.apca_tipmed=0
		
		vnrosolic_to_tbc_anatpaca.apca_profinfor=' '
		vnrosolic_to_tbc_anatpaca.apca_matprofinfor=0
		vnrosolic_to_tbc_anatpaca.apca_profinforcompl=' '
		vnrosolic_to_tbc_anatpaca.apca_matprofinforcompl=0
		//vnrosolic_to_tbc_anatpaca.apca_filler=' '
		vnrosolic_to_tbc_anatpaca.apca_fecingr=0
		
		vnrosolic_to_tbc_anatpaca.apca_fecreci=0
		vnrosolic_to_tbc_anatpaca.apca_fecentre=0
		vnrosolic_to_tbc_anatpaca.apca_feccargares=0
		vnrosolic_to_tbc_anatpaca.apca_feccargacompl=0
		
			
		var thePressedButton = plugins.dialogs.showQuestionDialog('Ingreso Observación General', '¿Ingresa Observación General?','Si','No');
	    if (thePressedButton == "Si"){
	    	var win = application.createWindow("t",JSWindow.MODAL_DIALOG)
			win.title = "Observación General";
			win.setSize(450,300)
			win.show(forms.ObservacionGral)
			if(globals.anatobgral!=''){
				vnrosolic_to_tbc_anatpaca.apca_obsgral=1
			}else{
				vnrosolic_to_tbc_anatpaca.apca_obsgral=0
			}
	    }else{
	    	vnrosolic_to_tbc_anatpaca.apca_obsgral=0
	    }
		
		/*
		application.output(vnrosolic_to_tbc_anatpaca.apca_codmed)
		application.output(vnrosolic_to_tbc_anatpaca.apca_estado)
		application.output(vnrosolic_to_tbc_anatpaca.apca_feccargacompl)
		application.output(vnrosolic_to_tbc_anatpaca.apca_feccargares)
		application.output(vnrosolic_to_tbc_anatpaca.apca_fecentre)
		application.output(vnrosolic_to_tbc_anatpaca.apca_fecingr)
		application.output(vnrosolic_to_tbc_anatpaca.apca_fecreci)
		application.output(vnrosolic_to_tbc_anatpaca.apca_fecsolic_3)
		application.output(vnrosolic_to_tbc_anatpaca.apca_histclin)
		application.output(vnrosolic_to_tbc_anatpaca.apca_histnom)
		application.output(vnrosolic_to_tbc_anatpaca.apca_horingr)
		application.output(vnrosolic_to_tbc_anatpaca.apca_lineas)
		application.output(vnrosolic_to_tbc_anatpaca.apca_matprofinfor)
		application.output(vnrosolic_to_tbc_anatpaca.apca_matprofinforcompl)
		application.output(vnrosolic_to_tbc_anatpaca.apca_nrosolic)
		application.output(vnrosolic_to_tbc_anatpaca.apca_nrosolic_3)
		application.output(vnrosolic_to_tbc_anatpaca.apca_obrsoc)
		application.output(vnrosolic_to_tbc_anatpaca.apca_obsgral)
		application.output(vnrosolic_to_tbc_anatpaca.apca_profinfor)
		application.output(vnrosolic_to_tbc_anatpaca.apca_profinforcompl)
		application.output(vnrosolic_to_tbc_anatpaca.apca_protocolo)
		application.output(vnrosolic_to_tbc_anatpaca.apca_tipadmi)
		application.output(vnrosolic_to_tbc_anatpaca.apca_servicio)
		application.output(vnrosolic_to_tbc_anatpaca.apca_tipmed)
		*/
		
		try{
			databaseManager.saveData(vnrosolic_to_tbc_anatpaca)
		}catch (msg){
			(plugins.dialogs.showInfoDialog("No graba Cabecera Anatomía Patológica",msg.toString(),"ok"))
		}
		var array = databaseManager.getFailedRecords(vnrosolic_to_tbc_anatpaca)
		for (var i = 0; i < array.length; i++) {
			var record = array[i];
			plugins.dialogs.showErrorDialog("Error en Ingreso_anatomia_dtl - tbc_antapaca en Protocolo "+globals.vNroProtocolo,"Error en grabación de registro cabecera de Anatomía Patológica.  Avise urgente a Sistemas por favor!")
			plugins.dialogs.showErrorDialog("Error en grabación de tbc_antapaca en Protocolo "+globals.vNroProtocolo,record.exception);
			application.output(record.exception)
			if (record.exception.getErrorCode() == ServoyException.RECORD_VALIDATION_FAILED) {
				// exception thrown in pre-insert/update/delete event method
				var thrown = record.exception.getValue()
				plugins.dialogs.showErrorDialog("Error de grabación","Record validation failed: " + thrown)
			}
			// find out the table of the record (similar to getEditedRecords)
			var jstable = databaseManager.getTable(record);
			var tableSQLName = jstable.getSQLName();
			plugins.dialogs.showErrorDialog("Error de Grabación",'Tabla:' + tableSQLName + ' en server:' + jstable.getServerName() + ' falló la grabación de Anatomía Patológica en Protocolo '+globals.vNroProtocolo+'. Avise urgente a Sistemas, por favor!')
		}
		//databaseManager.refreshRecordFromDatabase(fs,1)
		/*
		vhiscli_to_tbc_cirugint.ciripatologia=1
		try{
			databaseManager.saveData(vhiscli_to_tbc_cirugint.getRecord(1))
			
		}catch (msg){
			(plugins.dialogs.showInfoDialog("No graba patología en cirugint",msg.toString(),"ok"))
		}
		*/
		forms.IngresoAnatomia_tab.elements.btn_new.visible=true
		forms.IngresoAnatomia_tab.elements.btn_edit.visible=true
		forms.IngresoAnatomia_tab.elements.btn_delete.visible=true
		forms.IngresoAnatomia_tab.elements.btn_ayuda.visible=true
		forms.form116_dtl.elements.volver_form116.enabled=true
	}else{
		fs.setSelectedIndex(1)
		globals.vNroSolicitud=fs['apca_nrosolic']
	}
	if(foundset.apde_codnom!=0&&foundset.apde_codnom!=null&&foundset.apde_cantidad!=0&&foundset.apde_cantidad!=null){
		foundset.apde_histclin=globals.vHiscli
		foundset.apde_fecingr=0
		foundset.apde_fecsolic=globals.vFechaActual
		foundset.apde_horingr=0
		foundset.apde_nrosolic=globals.vNroSolicitud
		foundset.apde_nrosolic_3=globals.vNroSolicitud
		foundset.apde_codnom_3=foundset.apde_codnom
		foundset.apde_protocolo=globals.vNroProtocolo
		foundset.apde_servicio=11
		foundset.apde_tipnom=1
		foundset.apde_tipnom_3=1
		
		try{
			databaseManager.saveData(forms.Ingreso_anatomia_dtl.foundset.getRecord(1))
			var array1 = databaseManager.getFailedRecords(forms.Ingreso_anatomia_dtl.foundset)
			for (var ii = 0; ii < array1.length; ii++) {
				var record1 = array1[ii];
				plugins.dialogs.showErrorDialog("Error en Ingreso_anatomia_dtl - tbc_antapade","Error en grabación de registro detalle de Anatomía Patológica.  Avise urgente a Sistemas por favor!")
				plugins.dialogs.showErrorDialog("Error en grabación de tbc_antapade",record1.exception);
				application.output(record1.exception)
				if (record1.exception.getErrorCode() == ServoyException.RECORD_VALIDATION_FAILED) {
				// exception thrown in pre-insert/update/delete event method
					var thrown1 = record1.exception.getValue()
					plugins.dialogs.showErrorDialog("Error de grabación","Record validation failed: " + thrown1)
				}
				// find out the table of the record (similar to getEditedRecords)
				var jstable1 = databaseManager.getTable(record1);
				var tableSQLName1 = jstable1.getSQLName();
				plugins.dialogs.showErrorDialog("Error de Grabación",'Tabla:' + tableSQLName + ' en server:' + jstable.getServerName() + ' falló la grabación de Anatomía Patológica en Protocolo '+globals.vNroProtocolo+'. Avise urgente a Sistemas, por favor!')
				application.output("Error de Grabación Tabla:" + tableSQLName1 + " en server:" + jstable1.getServerName() + " falló la grabación.")
			}
			databaseManager.refreshRecordFromDatabase(forms.Ingreso_anatomia_dtl.foundset,1)
			borrar_TextoAnatomiaObs(foundset.apde_nrosolic, foundset.apde_codnom,1)
			application.sleep(1000)
			grabar_TextoAnatomiaObs(foundset.apde_nrosolic, foundset.apde_codnom, globals.anatpaob1,1)
			/*
			if(globals.anatobgral!=''){
				borrar_TextoAnatomiaObs(foundset.apde_nrosolic, 0,0)
				application.sleep(1000)
				grabar_TextoAnatomiaObs(foundset.apde_nrosolic, 0, globals.anatobgral,0)
			}
			*/
		}catch (msg){
			(plugins.dialogs.showInfoDialog("No graba detalle de Anatomía Patológica",msg.toString(),"ok"))
	 	}	
		forms.IngresoAnatomia_tab.elements.btn_new.visible=true
		forms.IngresoAnatomia_tab.elements.btn_edit.visible=true
		forms.IngresoAnatomia_tab.elements.btn_delete.visible=true
		forms.IngresoAnatomia_tab.elements.btn_ayuda.visible=true
		forms.form116_dtl.elements.volver_form116.enabled=true
		forms.IngresoAnatomia_tab.elements.tabless_ingreso_anatomia.tabIndex=1
		
   }
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"EB851535-AD9F-4827-AAF9-7ED3835EE062"}
 */
function onAction_Cancela_anatomia_dtl(event) {
	forms.Ingreso_anatomia_dtl.foundset.deleteRecord()
	forms.IngresoAnatomia_tab.elements.btn_new.visible=true
	forms.IngresoAnatomia_tab.elements.btn_edit.visible=true
	forms.IngresoAnatomia_tab.elements.btn_delete.visible=true
	forms.IngresoAnatomia_tab.elements.btn_ayuda.visible=true
	forms.form116_dtl.elements.volver_form116.enabled=true
	forms.IngresoAnatomia_tab.elements.tabless_ingreso_anatomia.tabIndex=1
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"54E8330F-8637-4B4C-BDA5-A1956F85824B"}
 */
function onAction_busco_nomancla_anatopat(event) {
	var win = application.createWindow("e",JSWindow.MODAL_DIALOG)
	win.title = "Búsqueda de Código de Nomenclador";
	win.setSize(600,450)
	win.show(forms.frm_busqueda_nomenclador_anatopat)
	win.hide()
	forms.Ingreso_anatomia_dtl.foundset.apde_codnom=globals.vNomencla
	forms.Ingreso_anatomia_dtl.elements.cantidad.requestFocus()
}

/**
 * Handle changed data.
 *
 * @param oldValue old value
 * @param newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"E27E712B-1EF7-41CC-A842-EF23DBFBBE92"}
 */
function onDataChange_tiene_observaciones(oldValue, newValue, event) {
	if(newValue==1){
		elements.tabless_5.enabled=true
		controller.focusField("tabless_5",true)
	}else{
		globals.anatpaob1=''
		elements.tabless_5.enabled=false
		controller.focusField("graba_anato",true)
	}
	return true
}

/**
 * @param {number} nro_solicitud
 * @param {number} codigo_nome
 * @param {string} f_texto
 * @param {number} tipo_nome
 * 
 * @properties={typeid:24,uuid:"58B17C5F-6736-41C5-95AA-56B00D101AA6"}
 * @AllowToRunInFind
 */
function grabar_TextoAnatomiaObs(nro_solicitud, codigo_nome, f_texto, tipo_nome) {
	f_texto = utils.stringTrim(f_texto)
	application.setClipboardContent(f_texto)
	
	var fs1 = databaseManager.getFoundSet("asistencial", "tbc_anatpaob")
	var j = 0;

	var name = new Array()
	name[0] = "apobnrosolic"
	name[1] = "apobtiponome"
	name[2] = "apobcodnome"
	name[3] = "apobsecuencia"
	name[4] = "apoblinea"
	name[5] = "apobfiller"

	
	var longitudTexto = 0;
	longitudTexto = f_texto.length;
	var posicionFinal = 0;
	posicionFinal = f_texto.indexOf("\n");
	var posicionInicial = 0;
	if (posicionFinal < 0)
		posicionFinal = f_texto.length
	//var lengthTexto = 0;
	//lengthTexto = posicionFinal + 1;
	
	//var i = 0;
	var lineas = Math.round(longitudTexto / 78);

	var resto = longitudTexto % 78;
	posicionFinal = 78;
	if (resto > 0)
		++lineas;
	var lineascab = 0;

	for (j = 1; j < lineas + 1; j++) {
		var vlarguito = f_texto.substr(posicionInicial, 78)
		if (vlarguito != '') {
			fs1.newRecord();
			fs1[name[0]] = nro_solicitud
			fs1[name[1]] = 1
			fs1[name[2]] = codigo_nome
			fs1[name[3]] = j;
			fs1[name[4]] = f_texto.substr(posicionInicial, 78);
			
			try{
				databaseManager.saveData(fs1.getRecord(1))
				
			}catch (msg){
				(plugins.dialogs.showInfoDialog("No graba texto de Anatomía Patológica",msg.toString(),"ok"))
				//	application.output(msg.rhinoException.getMessage())
			}
			posicionInicial = posicionInicial + 78;
			++lineascab
		}
	}
	var array = databaseManager.getFailedRecords(fs1)
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
	fs1.loadAllRecords()
	//databaseManager.refreshRecordFromDatabase(fs1,-1)
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"560F6DB2-E38D-43E8-A60F-F37DA925BD92"}
 */
function onAction_ayuda_Ingreso_anatomia_dtl(event) {
	globals.textoAyuda='AYUDA-25'
	var win = application.createWindow("p",JSWindow.MODAL_DIALOG)
	win.title = "Ayuda en Ingreso de Anatomía Patológica";
	win.setLocation(810,300)
	win.setSize(500,350)
	win.show(forms.frm_ayuda_gral_Z)
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
 * @properties={typeid:24,uuid:"BFA34215-5465-471C-80AE-2691A9902E3A"}
 */
function onDataChange_codnom(oldValue, newValue, event) {
	forms.Ingreso_anatomia_dtl.elements.cantidad.requestFocus()
	return true
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
 * @properties={typeid:24,uuid:"2BB28D2B-DAAE-4F0B-8C06-C4534733A3D8"}
 */
function onDataChange_cantidad(oldValue, newValue, event) {
	if(newValue==0){
		return false
	}else{
		forms.Ingreso_anatomia_dtl.elements.obser.requestFocus()
		return true
	}
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"4A67E00A-BDFF-4F5B-9596-6E959B48E3E6"}
 */
function onShow_Ingreso_anatomia_dtl(firstShow, event) {
	forms.Ingreso_anatomia_dtl.foundset.newRecord()
	globals.InicializarDatos("Ingreso_anatomia_dtl","asistencial","tbc_anatpade")
	controller.focusFirstField()
}

/**
 * @properties={typeid:24,uuid:"02900553-C7F4-4694-AB7A-CFDF4FBE6952"}
 */
function InicializoRegistroAnatpaca() {
	// TODO Auto-generated method stub
}

/**
 * @param {number} nro_solicitud
 * @param {number} codigo_nome
 * @param {number} tipo_nome
 * 
 * @properties={typeid:24,uuid:"71C68518-E7CB-4FF6-9D87-420B28997F38"}
 * @AllowToRunInFind
 */
function borrar_TextoAnatomiaObs(nro_solicitud, codigo_nome, tipo_nome) {
	var fs1 = databaseManager.getFoundSet("asistencial", "tbc_anatpaob")
	
	var name = new Array()
	name[0] = "apobnrosolic"
	name[1] = "apobtiponome"
	name[2] = "apobcodnome"
	name[3] = "apobsecuencia"
	name[4] = "apoblinea"
	name[5] = "apobfiller"

	fs1.find()
	fs1[name[0]] = nro_solicitud
	fs1[name[1]] = tipo_nome
	fs1[name[2]] = codigo_nome
	fs1.search()

	var tamanio = 0;
	tamanio = fs1.getSize();
	
	if (tamanio > 0){
		fs1.deleteAllRecords()
		databaseManager.refreshRecordFromDatabase(fs1,-1)
	}
}
