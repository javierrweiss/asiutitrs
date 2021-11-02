/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"B1341366-F5D4-4174-89D6-955F12E915D1",variableType:4}
 */
var f_ww = 0;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"62D0B522-700B-4C7D-B208-CB7324BA0C47"}
 */
var f_erroresSeguridadQ = '';

/**
 * Handle changed data.
 *
 * @param oldValue old value
 * @param newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"B2DA97A8-0BC0-4221-B30D-2DEA55743DCC"}
 */
function onDataChange_fecbano(oldValue, newValue, event) {
	
			return true
	
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
 * @properties={typeid:24,uuid:"DF142E69-3673-402F-A71E-0884BA9C1AC7"}
 */
function onDataChange_fuebaniado(oldValue, newValue, event) {
	
	
	elements.btn_graba_preparacion.visible=true
	
	return true
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
 * @properties={typeid:24,uuid:"D80433D1-66AB-46B1-83CE-09318D62141B"}
 */
function onDataChange_fuerasurado(oldValue, newValue, event) {
	
	elements.btn_graba_preparacion.visible=true
	return true
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"0D1D7406-ABC6-44F9-A278-EADACDF30829"}
 * @AllowToRunInFind
 */
function onAction_graba_Alta(event) {
	elements.btn_graba_preparacion.visible=false
	application.updateUI()
	elements.bean_243.visible=true
	elements.bean_243.minimum=1
	elements.bean_243.maximum=100
	elements.bean_243.stringPainted=true
	elements.bean_243.value = 0
	application.updateUI()	
	var ww = 0;
	var itemsPendientes='';
	
	if(verPrestacionesCirugia()!=true){
		itemsPendientes+='No ingreso códigos de Cirugía '+'\n'
	}
	if(controloTextosCirugia(1)!=true){
		itemsPendientes+='Falta cargar ó grabar descripción Protocolo '+'\n'
	}
	if(controloTextosCirugia(3)!=true){
		itemsPendientes+='Falta cargar ó grabar descripción Monitoreo '+'\n'
	}
	if(verCajasQuirurgicas()!=true){
		itemsPendientes+='No tiene Cajas quirúrgicas cargadas '+'\n'
	}
	if(protambu1400_vhiscli_to_tbc_ciruguar.cirgusoanestesia==1){
		if(controloFichaAnestesica()!=true){
			itemsPendientes+='Falta cargar ó finalizar Ficha Anestésica '+'\n'
		}
	}
	ww = ww + 10
	elements.bean_243.value = ww
	application.updateUI()
	
	if(itemsPendientes!=''){
		itemsPendientes+='No se puede dar de Alta.'
		globals.DIALOGS.showWarningDialog("Items sin cargar",itemsPendientes,"Ok")
		elements.btn_graba_preparacion.visible=false
		elements.combo_gasas_final.enabled=false
		elements.fld_pinzas_final.enabled=false
		elements.lbl_cirgpresmaxpre.enabled=false
		elements.lbl_cirgpresminpre.enabled=false
		elements.lbl_cirgpulsopre.enabled=false
		return
	}
	
	ww = ww + 10
	elements.bean_243.value = ww
	application.updateUI()
	
	var $fecha_final=globals.CapturaFechaSistema()
	var $hora_final=globals.CapturaHoraSistema("HHMM")
	if(foundset.cirgprotocolo==0){
		var done0 = plugins.rawSQL.executeSQL("desal", "tbl_parametros", "begin; lock table tbl_parametros in row exclusive mode;")
		if (!done0) {
			var msg0 = plugins.rawSQL.getException().getMessage(); //see exception node for more info about the exception obj
			plugins.dialogs.showErrorDialog('Error', 'SQL exception: ' + msg0, 'Ok')
		}
		var done = plugins.rawSQL.executeSQL("desal", "tbl_parametros", "select * from tbl_parametros where paramid = 17 for update;")
		if (!done) {
			var msg = plugins.rawSQL.getException().getMessage(); //see exception node for more info about the exception obj
			plugins.dialogs.showErrorDialog('Error', 'SQL exception: ' + msg, 'Ok')
		}

		var vQuery = " SELECT contador_entero FROM tbl_parametros WHERE paramid = 17";
		var vDataset = databaseManager.getDataSetByQuery("desal", vQuery, null, 1);
		
		//plugins.dialogs.showInfoDialog("contador",vDataset.getValue(1,1));
		
		globals.vNroProtocolo=vDataset.getValue(1,1)+1;
		
		var done1 = plugins.rawSQL.executeSQL("desal", "tbl_parametros", "update tbl_parametros set contador_entero = contador_entero + 1 where paramid = 17; commit;")
		if (!done1) {
			var msg1 = plugins.rawSQL.getException().getMessage(); //see exception node for more info about the exception obj
			plugins.dialogs.showErrorDialog('Error', 'SQL exception: ' + msg1, 'Ok')
		}
		foundset.cirgprotocolo=globals.vNroProtocolo
	}
	if(foundset.cirgtipointerven==2){
		globals.protambu1400_vEstado=3
		globals.protambu1400_vSector=34
		//globals.protambu1400_vEstado=1
		//globals.protambu1400_vSector=66
	}else{
		globals.protambu1400_vEstado=1
		globals.protambu1400_vSector=66
	}
	
	
	foundset.cirgusoanestesia=globals.vAnesChek
	foundset.cirgnroquirofa=globals.vQuirofano
	foundset.cirgfechafinal=$fecha_final
	foundset.cirghorafinal=$hora_final
	try{
		databaseManager.saveData(foundset.getRecord(1))
		var error3 = ''
		var error4 = ''
		var array1 = databaseManager.getFailedRecords(foundset)
		for (var j = 0; j < array1.length; j++) {
			var record1 = array1[j];
			var jstable1 = databaseManager.getTable(record1);
			var tableSQLName1 = jstable1.getSQLName();
			error3='Error de Grabación en Tabla:' + tableSQLName1 + ' en server:' + jstable1.getServerName() + ' falló la grabación. Avise urgente a Sistemas, por favor!'
			error4='Error en grabación '+record1.exception;
			if (record1.exception.getErrorCode() == ServoyException.RECORD_VALIDATION_FAILED) {
		// exception thrown in pre-insert/update/delete event method
				var thrown1 = record1.exception.getValue()
				//plugins.dialogs.showErrorDialog("Error de grabación","Record validation failed: " + thrown)
			}
		}
		if(error3!=''){
			plugins.dialogs.showErrorDialog("Error en grabación","Se ha producido un error de grabación. "+'\n'+"Avise a Sistemas, por favor.", "Ok")
			plugins.dialogs.showErrorDialog("Error de grabación","Record validation failed: " + thrown1)
			plugins.dialogs.showErrorDialog("Error en grabacion",error3,"Ok")
			plugins.dialogs.showErrorDialog("Error en grabacion",error4,"Ok")
		}
		
	}catch (msg){
		(plugins.dialogs.showInfoDialog("Prueba de error",msg.toString(),"ok"))
	}
	ww = ww + 10
	elements.bean_243.value = ww
	application.updateUI()
	
	//protambul1400_vhiscli_to_tbc_guardia.guar_estado=4
	//protambul1400_vhiscli_to_tbc_guardia.guar_estado1=4
	//protambul1400_vhiscli_to_tbc_guardia.guar_estado3=4
	protambul1400_vhiscli_to_tbc_guardia.guar_fechaalta=$fecha_final
	protambul1400_vhiscli_to_tbc_guardia.guar_horaalta=$hora_final
	if(globals.protambu1400_SolucionQueLlama=='AtiendeConsultorio'||globals.protambu1400_SolucionQueLlama=='LLama_Soluciones'){
		protambul1400_vhiscli_to_tbc_guardia.guar_estado=4
		protambul1400_vhiscli_to_tbc_guardia.guar_estado1=4
		protambul1400_vhiscli_to_tbc_guardia.guar_estado3=4
	}else{
		protambul1400_vhiscli_to_tbc_guardia.guar_estado=4
		protambul1400_vhiscli_to_tbc_guardia.guar_estado1=4
		protambul1400_vhiscli_to_tbc_guardia.guar_estado3=4
	}
	try{
		databaseManager.saveData(protambul1400_vhiscli_to_tbc_guardia)
		error3 = ''
		error4 = ''
		array1 = databaseManager.getFailedRecords(protambul1400_vhiscli_to_tbc_guardia)
		for (j = 0; j < array1.length; j++) {
			record1 = array1[j];
			jstable1 = databaseManager.getTable(record1);
			tableSQLName1 = jstable1.getSQLName();
			error3='Error de Grabación en Tabla:' + tableSQLName1 + ' en server:' + jstable1.getServerName() + ' falló la grabación. Avise urgente a Sistemas, por favor!'
			error4='Error en grabación '+record1.exception;
			if (record1.exception.getErrorCode() == ServoyException.RECORD_VALIDATION_FAILED) {
		// exception thrown in pre-insert/update/delete event method
				 thrown1 = record1.exception.getValue()
				//plugins.dialogs.showErrorDialog("Error de grabación","Record validation failed: " + thrown)
			}
		}
		if(error3!=''){
			plugins.dialogs.showErrorDialog("Error en grabación","Se ha producido un error de grabación. "+'\n'+"Avise a Sistemas, por favor.", "Ok")
			plugins.dialogs.showErrorDialog("Error de grabación","Record validation failed: " + thrown1)
			plugins.dialogs.showErrorDialog("Error en grabacion en GUARDIA",error3,"Ok")
			plugins.dialogs.showErrorDialog("Error en grabacion en GUARDIA",error4,"Ok")
		}
		
	}catch (msg){
		(plugins.dialogs.showInfoDialog("Prueba de error",msg.toString(),"ok"))
	}
	ww = ww + 10
	elements.bean_243.value = ww
	application.updateUI()
	
	protambu1400_vhiscli_to_tbc_hcicir_new.hcirprotocolo=foundset.cirgprotocolo
	protambu1400_vhiscli_to_tbc_hcicir_new.hcirtipohc3=1
	
	try{
		databaseManager.saveData(protambu1400_vhiscli_to_tbc_hcicir_new)
		error3 = ''
		error4 = ''
		array1 = databaseManager.getFailedRecords(protambu1400_vhiscli_to_tbc_hcicir_new)
		for (j = 0; j < array1.length; j++) {
			record1 = array1[j];
			jstable1 = databaseManager.getTable(record1);
			tableSQLName1 = jstable1.getSQLName();
			error3='Error de Grabación en Tabla:' + tableSQLName1 + ' en server:' + jstable1.getServerName() + ' falló la grabación. Avise urgente a Sistemas, por favor!'
			error4='Error en grabación '+record1.exception;
			if (record1.exception.getErrorCode() == ServoyException.RECORD_VALIDATION_FAILED) {
		// exception thrown in pre-insert/update/delete event method
				 thrown1 = record1.exception.getValue()
				//plugins.dialogs.showErrorDialog("Error de grabación","Record validation failed: " + thrown)
			}
		}
		if(error3!=''){
			plugins.dialogs.showErrorDialog("Error en grabación","Se ha producido un error de grabación. "+'\n'+"Avise a Sistemas, por favor.", "Ok")
			plugins.dialogs.showErrorDialog("Error de grabación","Record validation failed: " + thrown1)
			plugins.dialogs.showErrorDialog("Error en grabacion en HCICIR",error3,"Ok")
			plugins.dialogs.showErrorDialog("Error en grabacion en HCICIR",error4,"Ok")
		}
		
	}catch (msg){
		(plugins.dialogs.showInfoDialog("Prueba de error",msg.toString(),"ok"))
	}
	ww = ww + 10
	elements.bean_243.value = ww
	application.updateUI()
	
	protambu1400_vs_to_tbc_anes_ambu.anesestado=1
	try{
		databaseManager.saveData(protambu1400_vs_to_tbc_anes_ambu)
		error3 = ''
		error4 = ''
		array1 = databaseManager.getFailedRecords(protambu1400_vs_to_tbc_anes_ambu)
		for (j = 0; j < array1.length; j++) {
			record1 = array1[j];
			jstable1 = databaseManager.getTable(record1);
			tableSQLName1 = jstable1.getSQLName();
			error3='Error de Grabación en Tabla:' + tableSQLName1 + ' en server:' + jstable1.getServerName() + ' falló la grabación. Avise urgente a Sistemas, por favor!'
			error4='Error en grabación '+record1.exception;
			if (record1.exception.getErrorCode() == ServoyException.RECORD_VALIDATION_FAILED) {
		// exception thrown in pre-insert/update/delete event method
				 thrown1 = record1.exception.getValue()
				//plugins.dialogs.showErrorDialog("Error de grabación","Record validation failed: " + thrown)
			}
		}
		if(error3!=''){
			plugins.dialogs.showErrorDialog("Error en grabación","Se ha producido un error de grabación. "+'\n'+"Avise a Sistemas, por favor.", "Ok")
			plugins.dialogs.showErrorDialog("Error de grabación","Record validation failed: " + thrown1)
			plugins.dialogs.showErrorDialog("Error en grabación en tbc_anes_ambu",error3,"Ok")
			plugins.dialogs.showErrorDialog("Error en grabación en tbc_anes_ambu",error4,"Ok")
		}
		
	}catch (msg){
		(plugins.dialogs.showInfoDialog("Prueba de error",msg.toString(),"ok"))
	}
	ww = ww + 10
	elements.bean_243.value = ww
	application.updateUI()
	
	var fs_fichaanestesica = databaseManager.getFoundSet("desal","fichaaneste_cab")
	fs_fichaanestesica.find()
	fs_fichaanestesica['histcli_unico']=globals.vHiscli
	fs_fichaanestesica['tbc_anest_carga_fecha']=globals.protambu1400_fechaingreso
	fs_fichaanestesica['tbc_anest_carga_hora']=globals.protambu1400_hora_ingreso
	fs_fichaanestesica.search()
	var largo_fichaanes = fs_fichaanestesica.getSize()
	if(largo_fichaanes > 0){
		fs_fichaanestesica['cirprotocolo']=foundset.cirgprotocolo
		fs_fichaanestesica['anes_numero']=protambu1400_vs_to_tbc_anes_ambu.anesnumero
		try{
			databaseManager.saveData(fs_fichaanestesica)
			error3 = ''
			error4 = ''
			array1 = databaseManager.getFailedRecords(fs_fichaanestesica)
			for (j = 0; j < array1.length; j++) {
				record1 = array1[j];
				jstable1 = databaseManager.getTable(record1);
				tableSQLName1 = jstable1.getSQLName();
				error3='Error de Grabación en Tabla:' + tableSQLName1 + ' en server:' + jstable1.getServerName() + ' falló la grabación. Avise urgente a Sistemas, por favor!'
				error4='Error en grabación '+record1.exception;
				if (record1.exception.getErrorCode() == ServoyException.RECORD_VALIDATION_FAILED) {
			// exception thrown in pre-insert/update/delete event method
					 thrown1 = record1.exception.getValue()
					//plugins.dialogs.showErrorDialog("Error de grabación","Record validation failed: " + thrown)
				}
			}
			if(error3!=''){
				plugins.dialogs.showErrorDialog("Error en grabación","Se ha producido un error de grabación. "+'\n'+"Avise a Sistemas, por favor.", "Ok")
				plugins.dialogs.showErrorDialog("Error de grabación","Record validation failed: " + thrown1)
				plugins.dialogs.showErrorDialog("Error en grabacion en Ficha Anestesica",error3,"Ok")
				plugins.dialogs.showErrorDialog("Error en grabacion en Ficha Anestesica",error4,"Ok")
			}
			
		}catch (msg){
			(plugins.dialogs.showInfoDialog("Prueba de error Ficha Anestesica",msg.toString(),"ok"))
		}
		
	}
	ww = ww + 10
	elements.bean_243.value = ww
	application.updateUI()
	f_ww=ww
	try{
		grabo_Prestguar()
	}catch(msg){
		application.output(msg.message)
	}
	ww = ww + 10
	elements.bean_243.value = ww
	application.updateUI()
		
	try{
		fin_Protocolo_Ambulatorio()
	}catch(msg){
		application.output(msg.message)
	}
	ww = ww + 10
	elements.bean_243.value = ww
	application.updateUI()
	
	try{
		imprime_Protocolo_Ambulatorio()
	}catch(msg){
		application.output(msg.message)
	}	
	ww = ww + 10
	elements.bean_243.value = ww
	application.updateUI()
					
	var confirma_asignacion = '';
	var ingresa_cama=true;
	globals.protambu1400_asignacama=false
	forms.protambu1400_frm_asigna_cama.f_apeynom=protambu1400_vhiscli_to_tbc_hist_cab_new.histcabapellnom
	forms.protambu1400_frm_asigna_cama.f_hc=globals.vHiscli
	while (ingresa_cama){
		var win = application.createWindow("asigna",JSWindow.MODAL_DIALOG)
		win.title = " ";
		win.setSize(425,240)
		win.show(forms.protambu1400_frm_asigna_cama)
		if(globals.protambu1400_asignacama){
			if(busco_guardia_IOQ()){
				confirma_asignacion = globals.DIALOGS.showQuestionDialog("Confirma Asignación","Confirma que pasa al paciente al sector Recuperación Post-Quirúrgica?","Si","No")
				if (confirma_asignacion=="Si"){
					var win1 = application.createWindow("habita",JSWindow.MODAL_DIALOG)
					win1.title = " ";
					//win1.setSize(425,300)
					win1.show(forms.protambu1400_frm_ingreso_habita)
					if(forms.protambu1400_frm_ingreso_habita.f_habita==0||forms.protambu1400_frm_ingreso_habita.f_habita==null||forms.protambu1400_frm_ingreso_habita.f_cama==' '||forms.protambu1400_frm_ingreso_habita.f_cama==null||forms.protambu1400_frm_ingreso_habita.f_cama==''){
						ingresa_cama=true
					}else{
						
						ingresa_cama=false
						
					}
				}else{
					confirma_asignacion = globals.DIALOGS.showQuestionDialog("Atención!","Está seguro de no pasar al paciente al sector Recuperación Post-Quirúrgica?","Si","No")
					if (confirma_asignacion=="Si"){
						ingresa_cama=false
					}else{
						ingresa_cama=true
					}
				}
			}else{
				ingresa_cama=false
			}
		}else{
			confirma_asignacion = globals.DIALOGS.showQuestionDialog("Atención!","Está seguro de no pasar al paciente al sector Recuperación Post-Quirúrgica?","Si","No")
			if (confirma_asignacion=="Si"){
				ingresa_cama=false
			}else{
				ingresa_cama=true
			}
		}
	}
	globals.vLegajo=0
	globals.vClave=0
	globals.vOperador=''
	globals.vPassOperador=''
	globals.vHiscli1=0
	globals.vHiscli=0
	globals.vHisclin=0
	globals.vNroProtocolo=0
	globals.vClose=true
	application.showForm("protambu_tab_pacientes_en_espera")

	/*
	globals.vClose=true
	if(globals.protambu1400_SolucionQueLlama=='AtiendeConsultorio'||globals.protambu1400_SolucionQueLlama=='LLama_Soluciones'){
		var name=application.getActiveWindow()
		name.getName()
		var $win=application.getWindow(name.getName())
		if($win!=null){
			$win.hide()
			$win.destroy()
		}
	}else{
		application.showForm('protambu_frm_menu_principal')
	}
	*/
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"D7C1D962-9DB5-4184-A5E1-550B32B983A7"}
 */
function onShow_preparacion_dtl(firstShow, event) {
	elements.bean_244.visible=false
	elements.bean_243.visible=true
	elements.bean_243.minimum=1
	elements.bean_243.maximum=100
	elements.bean_243.stringPainted=true
	elements.bean_243.value = 0
	application.updateUI()	
	var ww = 0;
	var itemsPendientes='';
	if(foundset.cirgtipointerven==2){
		globals.protambu1400_vEstado=3
		globals.protambu1400_vSector=34
		//globals.protambu1400_vEstado=1
		//globals.protambu1400_vSector=66
	}else{
		globals.protambu1400_vEstado=1
		globals.protambu1400_vSector=66
	}
	
	if(verPrestacionesCirugia()!=true){
		itemsPendientes+='No ingreso códigos de Cirugía '+'\n'
	}
	ww = ww + 10
	elements.bean_243.value = ww
	application.updateUI()
	if(controloTextosCirugia(1)!=true){
		itemsPendientes+='Falta cargar ó grabar descripción Protocolo '+'\n'
	}
	ww = ww + 10
	elements.bean_243.value = ww
	application.updateUI()
	if(controloTextosCirugia(3)!=true){
		itemsPendientes+='Falta cargar ó grabar descripción Monitoreo '+'\n'
	}
	ww = ww + 10
	elements.bean_243.value = ww
	application.updateUI()
	if(verCajasQuirurgicas()!=true){
		itemsPendientes+='No tiene Cajas quirúrgicas cargadas '+'\n'
	}
	ww = ww + 10
	elements.bean_243.value = ww
	application.updateUI()
	globals.protambu1400_vImed=1
	if(protambu1400_vestado2259_to_tbc_his_lectora.getSize()<1){
		itemsPendientes+='Falta cargar Medicamentos de Cirugía '+'\n'
	}
	ww = ww + 20
	elements.bean_243.value = ww
	application.updateUI()
	if(protambu1400_vhiscli_to_tbc_ciruguar.cirgusoanestesia==1){
		if(controloFichaAnestesica()!=true){
			itemsPendientes+='Falta cargar ó finalizar Ficha Anestésica '+'\n'
		}
		globals.protambu1400_vImed=2
		if(protambu1400_vestado2259_to_tbc_his_lectora.getSize()<1){
			itemsPendientes+='Falta cargar Medicamentos de Anestesia '+'\n'
		}
	}
	ww = ww + 20
	elements.bean_243.value = ww
	application.updateUI()
	if(globals.protambu1400_SolucionQueLlama!='AtiendeConsultorio'){
		if(verSeguridadQuirurgica()!=true){
			itemsPendientes+=f_erroresSeguridadQ
		}
	}
	ww = ww + 20
	elements.bean_243.value = ww
	application.updateUI()
	elements.bean_243.visible=false
	application.updateUI()
	if(itemsPendientes!=''){
		itemsPendientes+='No se puede dar de Alta.'
		globals.DIALOGS.showWarningDialog("Items sin cargar",itemsPendientes,"Ok")
		elements.btn_graba_preparacion.visible=false
		elements.combo_gasas_final.enabled=false
		elements.fld_pinzas_final.enabled=false
		elements.lbl_cirgpresmaxpre.enabled=false
		elements.lbl_cirgpresminpre.enabled=false
		elements.lbl_cirgpulsopre.enabled=false
	}else{
		elements.btn_graba_preparacion.visible=true
		elements.combo_gasas_final.enabled=true
		elements.fld_pinzas_final.enabled=true
		elements.lbl_cirgpresmaxpre.enabled=true
		elements.lbl_cirgpresminpre.enabled=true
		elements.lbl_cirgpulsopre.enabled=true
		controller.focusFirstField()
	}
}

/**
 * Handle changed data.
 *
 * @param {Date} oldValue old value
 * @param {Date} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"1C59331B-7E41-48FD-8FA6-9AA874F85BFD"}
 */
function onDataChange_ciri_fecrasura(oldValue, newValue, event) {
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
 * @properties={typeid:24,uuid:"B17E1348-D674-4B38-8509-D0B08C281434"}
 */
function onDataChange_conquerasura(oldValue, newValue, event) {
	elements.btn_graba_preparacion.requestFocus()
	
	return true
}

/**
 * 
 * @param codigo
 *
 * @properties={typeid:24,uuid:"FCDA1546-70C4-4835-AD4C-3F640A3DD44B"}
 */
function buscaProtocoloAbierto(codigo) {
	var fecha_actual=application.getServerTimeStamp();
	var anio = fecha_actual.getFullYear();
	var mes = fecha_actual.getMonth();
	//var dia = fecha_actual.getDate();
	var mes_ed='';
	//var dia_ed='';
	if(mes<10){
		mes_ed='0'+mes
	}else{
		mes_ed=mes
	}
	var protocolo_abierto='';

	var protocolos_abiertos=new Array();
	var encontro_proto=false;
	var kant_protocolos_abiertos=0;
	var fecha_selec=anio+''+mes_ed+''+'01'
	var sql = "select ciriprotocolo, cirilegciru from tbc_cirugint where CiriFechaCarga>="+fecha_selec+" and CiriEstado=0 and CiriTipoNome=0"
	var dataset = databaseManager.getDataSetByQuery("asistencial",sql,null,-1)
	var kanti = dataset.getMaxRowIndex()
	if(kanti>0){
		protocolos_abiertos[0]=dataset.getValue(1,1)
		for(var i=1;i<=kanti;i++){
			if(dataset.getValue(i,1)!=globals.vNroProtocolo){
				var sql2 = "select ciricodmed_1, ciricodmed_2, ciricodmed_3, ciricodmed_4, ciricodmed_5, ciricodmed_6, ciricodmed_7, ciricodmed_8, ciricodmed_9, ciricodmed_10 from tbc_cirugint_dtl where CiriProtocolo="+dataset.getValue(i,1)+" and CiriTipoNome<>0"
				var dataset2 = databaseManager.getDataSetByQuery("asistencial",sql2,null,-1)
				var kanti2 = dataset2.getMaxRowIndex()
				if(kanti2>0){
					for(var j=1;j<=kanti2;j++){
						for(var k=1;k<=10;k++){
							if(codigo==dataset2.getValue(j,k)){
								kant_protocolos_abiertos++
								for(var s=0;s<protocolos_abiertos.length&&!encontro_proto;s++){
									if(protocolos_abiertos[s]==dataset.getValue(i,1)){
										encontro_proto=true
									}else{
										protocolos_abiertos[s]=dataset.getValue(i,1)
									}
								}
								if(!encontro_proto){
									protocolo_abierto+=dataset.getValue(i,1)+' '
								}else{
									encontro_proto=true
								}
							}
						}
					}
				}
			}	
		}
		if(kant_protocolos_abiertos>0){
			plugins.dialogs.showWarningDialog("Protocolo sin Cerrar","El Profesional con código "+codigo+" tiene el protocolo "+protocolos_abiertos+" sin cerrar","Ok")
			return false
		}else{
			return true
		}
	}else{
		return true
	}
}

/**
 * @param {Number} tipo
 * @properties={typeid:24,uuid:"192CFA66-11CB-4ACF-90E8-5347DBFFBC16"}
 */
function controloHisLectoraMedicamentos(tipo){
	var $fecha_actual=globals.CapturaFechaSistema()
	var retorno = false
	var sql = "select * from tbc_HIS_LECTORA where Hlec_HistClin="+globals.vHiscli+" and Hlec_ArtPedfar <> 0 and Hlec_Art <> 9999 and (hlec_estado=0 or Hlec_Estado=1 or Hlec_Estado=3) and hlec_imed="+tipo+" and (hlec_fec="+globals.protambu1400_fechaingreso+" or hlec_fec="+$fecha_actual+")"
	var $dataset = databaseManager.getDataSetByQuery("asistencial",sql,null,-1)
	if($dataset.getMaxRowIndex()>0){
		retorno = true
	}
	return retorno
}
/**
 * @properties={typeid:24,uuid:"0FEFAACB-8CBA-4440-91D4-56B39FF02552"}
 */
function verPrestacionesCirugia(){
	var retorno = false
	var sql = "select * from tbc_prest_guar where PregHistClinica="+globals.vHiscli+" and PregFechaIngreso="+globals.protambu1400_fechaingreso+" and PregHoraIngreso="+globals.protambu1400_hora_ingreso+" and (PregTipoPrest=1 or PregTipoPrest=3 or PregTipoPrest=7 or PregTipoPrest=8 or PregTipoPrest=9)"
	var $dataset = databaseManager.getDataSetByQuery("asistencial",sql,null,-1)
	if($dataset.getMaxRowIndex()>0){
		retorno = true
	}
	return retorno
}
/**
 * @param {Number} grupo
 * @properties={typeid:24,uuid:"1FE28670-7947-4733-8A67-389CFB76B79B"}
 */
function controloTextosCirugia(grupo){
	var retorno = false;
	if(grupo==1){
		if(protambu1400_vhiscli_to_tbc_ciruguar.cirgmarcadescrip==1){
			globals.protambu1400_vItemTexto=grupo
			if(protambu1400_vs_to_tbl_proamb_t.texto!=null){
				if(protambu1400_vs_to_tbl_proamb_t.texto.length>0){
					if(protambu1400_vs_to_tbl_proamb_t.texto==globals.proto1){
						retorno=true
					}
				}
			}
		}
	}else{
		if(protambu1400_vhiscli_to_tbc_ciruguar.cirgmarcamonito==1){
			globals.protambu1400_vItemTexto=grupo
			if(protambu1400_vs_to_tbl_proamb_t.texto!=null){
				if(protambu1400_vs_to_tbl_proamb_t.texto.length>0){
					if(protambu1400_vs_to_tbl_proamb_t.texto==globals.proto5){
						retorno=true
					}
				}
			}
		}
	}
	return retorno;
}
/**
 * @properties={typeid:24,uuid:"A1477371-F8E0-410A-AADE-7D29339BAEDF"}
 */
function verCajasQuirurgicas(){
	var retorno = false;
	globals.protambu1400_horaingreso_cajas=globals.protambu1400_hora_ingreso+''+'00'
	if(protambu1400_vs_to_tbc_cajcirugia.getSize()>0){
		retorno=true
	}
	return retorno;
}
/**
 * @properties={typeid:24,uuid:"01CE4032-893C-4436-8AB0-17C7C2D7A3B4"}
 * @AllowToRunInFind
 */
function verSeguridadQuirurgica(){
	var retorno = true;
	var query = "select * from tbc_seguqui_new where segtipohc = 1 and seghistclinica = ? and segfechacarga = ? and seghoracarga = ?";
    var args = new Array();
    args[0]=globals.vHiscli;
    args[1]=globals.protambu1400_fechaingreso;
    args[2]=globals.protambu1400_hora_ingreso;
    var dataset = new Array();
    dataset = databaseManager.getDataSetByQuery("asistencial", query, args, 1);
    /*
	var fs = databaseManager.getFoundSet("asistencial","tbc_seguqui_new")
	fs.find()
	fs['segtipohc']=1
	fs['seghistclinica']=globals.vHiscli
	fs['segfechacarga']=globals.protambu1400_fechaingreso
	fs['seghoracarga']=globals.protambu1400_hora_ingreso
	fs.search(true)
	*/
	var tieneSeguquiAntes=true
	var tieneSeguquiAIncision=true
	var tieneSeguqui=true
	//if(vhiscli_to_tbc_seguqui_new.getSize()>0){
	//if(fs.getSize()>0){
	if(dataset.getMaxRowIndex()>0){
		if(dataset.getValue(1,14)==0||dataset.getValue(1,15)==0||dataset.getValue(1,16)==0||dataset.getValue(1,17)==0||dataset.getValue(1,18)==0||dataset.getValue(1,19)==0||dataset.getValue(1,20)==0||dataset.getValue(1,10)==0||dataset.getValue(1,21)==0){
		//if(fs['segcirculident']==0||fs['segcirculbanio']==0||fs['segcirculmate']==0||fs['segcirculhiscli']==0||fs['segcirculestu']==0||fs['segcirculprote']==0||fs['segcirculconsen']==0||fs['segadmindiag']==0||fs['seglegacirculini']==0){
			tieneSeguquiAntes=false
		}
		if(dataset.getValue(1,23)==0||dataset.getValue(1,24)==0||dataset.getValue(1,25)==0||dataset.getValue(1,26)==0||dataset.getValue(1,28)==0||dataset.getValue(1,29)==0||dataset.getValue(1,30)==0||dataset.getValue(1,31)==0||dataset.getValue(1,62)==0||dataset.getValue(1,63)==0||dataset.getValue(1,64)==0){
		//if(fs['seganestident']==0||fs['seganestpulso']==0||fs['seganestseguri']==0||fs['seganestviaaerea']==0||fs['seganestacceso']==0||fs['seganestsangre']==0||fs['seglegaanestini']==0||fs['seganestcomorb']==0){
			tieneSeguquiAntes=false
		}
		if(dataset.getValue(1,33)==0||dataset.getValue(1,34)==0||dataset.getValue(1,35)==0||dataset.getValue(1,36)==0||dataset.getValue(1,37)==0){
		//if(fs['segciruident']==0||fs['segciruantibiot']==0||fs['segcirubisturi']==0||fs['segciruincidentes']==0||fs['seglegaciruini']==0){
			tieneSeguquiAntes=false
		}
		if(dataset.getValue(1,39)==0||dataset.getValue(1,42)==0||dataset.getValue(1,43)==0||dataset.getValue(1,44)==0||dataset.getValue(1,40)==0||dataset.getValue(1,45)==0){
		//if(fs['seganestrepasaini']==0||fs['seginstrurepasaini']==0||fs['seginstrugasasini']==0||fs['seginstrupinzasini']==0||fs['seglegaanestrepi']==0||fs['seglegainstruini']==0){
			tieneSeguquiAntes=false
		}
		if(dataset.getValue(1,47)==0||dataset.getValue(1,48)==0||dataset.getValue(1,49)==0){
		//if(fs['segciruproced']==0||fs['segciruindica']==0||fs['seglegacirufin']==0){
			tieneSeguqui=false
		}
		if(dataset.getValue(1,51)==0||dataset.getValue(1,54)==0||dataset.getValue(1,55)==0||dataset.getValue(1,52)==0||dataset.getValue(1,56)==0){
		//if(fs['seganestplan']==0||fs['seginstrugasasfin']==0||fs['seginstrupinzasfin']==0||fs['seglegaanestfin']==0||fs['seglegainstrufin']==0){
			tieneSeguqui=false
		}
		if(dataset.getValue(1,58)==0||dataset.getValue(1,60)==0||dataset.getValue(1,65)==0||dataset.getValue(1,66)==0||dataset.getValue(1,67)==0||dataset.getValue(1,68)==0){
		//if(fs['segcirculmuestras']==0||fs['seglegacirculfin']==0||fs['segcirculproinstru']==0||fs['segcirculnormot']==0||fs['segcirculparteciru']==0||fs['segcirculparteanes']==0){
			tieneSeguqui=false
		}
		if(dataset.getValue(1,69)==0||dataset.getValue(1,70)==0||dataset.getValue(1,71)==0||dataset.getValue(1,72)==0||dataset.getValue(1,73)==0||dataset.getValue(1,74)==0||dataset.getValue(1,75)==0){
		//if(fs['segcirculequipres']==0||fs['segcirculequifunc']==0||fs['segcirculidsipr']==0||fs['segcirculdecubi']==0||fs['segcirculimprev']==0||fs['segcirculanesproblema']==0||fs['seglegacirculcut']==0){
			tieneSeguquiAIncision=false
		}
	}else{
		tieneSeguquiAIncision=false
		tieneSeguqui=false
		tieneSeguquiAntes=false
	}
	if(!tieneSeguqui){
		retorno=false
		f_erroresSeguridadQ+="Falta llenar Seguridad Quirúrgica al final de la Cirugía"+'\n'
	}
	if(!tieneSeguquiAIncision){
		retorno=false
		f_erroresSeguridadQ+="Falta llenar Seguridad Quirúrgica antes de La Incisión Cutánea"+'\n'
	}
	if(!tieneSeguquiAntes){
		retorno=false
		f_erroresSeguridadQ+="Falta llenar Seguridad Quirúrgica antes de la Cirugía"+'\n'
	}
	return retorno;
}
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"57BD8FEC-344D-41C4-8B91-25A560A5CE15"}
 */
function onAction_presmax(event) {
	elements.lbl_cirgpresminpre.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"CB19D62A-B67D-4A91-A986-E58E04D1FC3C"}
 */
function onAction_presmin(event) {
	elements.lbl_cirgpulsopre.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"DB1DF0A7-AC99-423D-814F-685B3FA8EFCA"}
 */
function onAction_pulso(event) {
	elements.fld_pinzas_final.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"86A00B47-6A91-4144-A6D0-5874553E721A"}
 */
function onAction_pinzasfinal(event) {
	elements.combo_gasas_final.requestFocus()
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
 * @properties={typeid:24,uuid:"F8A79E4B-10B6-49EA-A862-274ADED7251D"}
 */
function onDataChange_gasasfinal(oldValue, newValue, event) {
	elements.btn_graba_preparacion.requestFocus()
	return true
}

/**
 * @properties={typeid:24,uuid:"00D6EF7A-C4FB-4F3A-91A8-2AF7D84D0DB3"}
 */
function controloFichaAnestesica() {
	var retorno = false
	var sql = "select histcli, fecha_final from fichaaneste_cab where histcli_unico="+globals.vHiscli+" and tbc_anest_carga_fecha="+globals.protambu1400_fechaingreso+" and tbc_anest_carga_hora="+globals.protambu1400_hora_ingreso
	var $dataset = databaseManager.getDataSetByQuery("desal",sql,null,-1)
	if($dataset.getMaxRowIndex()>0){
		if($dataset.getValue(1,2)!=null){
				retorno = true
		}
	}
	return retorno
}

/**
 * @properties={typeid:24,uuid:"E17B2C9F-056E-4DCF-80AC-8C086A803B03"}
 * @AllowToRunInFind
 */
function grabo_Prestguar(){
	var fs =databaseManager.getFoundSet("asistencial","tbc_his_lectora")
	var largo_his_lectora = 0
	var largo_prest_guar = 0
	for(var j=1;j<=2;j++){
		elements.bean_244.visible=true
		elements.bean_244.minimum=1
		elements.bean_244.maximum=100
		elements.bean_244.stringPainted=true
		elements.bean_244.value = 0
		application.updateUI()	
		globals.protambu1400_vImed=j
		fs.clear()
		fs.find()
		fs['hlec_histclin']=globals.vHiscli
		fs['hlec_fecing']=globals.protambu1400_fechaingreso
		fs['hlec_horing']=globals.protambu1400_hora_ingreso
		fs['hlec_imed']=globals.protambu1400_vImed
		fs['hlec_sector']=globals.protambu1400_vSector
		fs['hlec_estado']=globals.protambu1400_vEstado
		fs['hlec_cant']= '>0'
		fs.search()
		largo_his_lectora = fs.getSize()
		if(largo_his_lectora> 0){
			elements.bean_244.maximum=largo_his_lectora
			for(var i = 1; i <= largo_his_lectora;i++){
				fs.setSelectedIndex(i)
				globals.protambu1400_secuencia=1
				globals.vCodNome=fs['hlec_artpedfar']
				globals.protambu1400_codnome=fs['hlec_artpedfar']
				globals.vTipoNome=99
				globals.protambu1400_tiponome=99
				largo_prest_guar=protambu1400_vhiscli_to_tbc_prest_guar.getSize()
				if(largo_prest_guar>0){
					protambu1400_vhiscli_to_tbc_prest_guar.setSelectedIndex(largo_prest_guar)
					globals.protambu1400_secuencia=protambu1400_vhiscli_to_tbc_prest_guar.pregsecuencia
					globals.protambu1400_secuencia++
				}
				protambu1400_vhiscli_to_tbc_prest_guar.newRecord()
				globals.InicializarDatosDeRelacion(protambu1400_vhiscli_to_tbc_prest_guar,"asistencial","tbc_prest_guar")
				protambu1400_vhiscli_to_tbc_prest_guar.preghistclinica=globals.vHiscli
				protambu1400_vhiscli_to_tbc_prest_guar.pregfechaingreso=globals.protambu1400_fechaingreso
				protambu1400_vhiscli_to_tbc_prest_guar.preghoraingreso=globals.protambu1400_hora_ingreso
				protambu1400_vhiscli_to_tbc_prest_guar.pregtiponome=99
				protambu1400_vhiscli_to_tbc_prest_guar.pregcodnome=fs['hlec_artpedfar']
				protambu1400_vhiscli_to_tbc_prest_guar.pregsecuencia=globals.protambu1400_secuencia
				protambu1400_vhiscli_to_tbc_prest_guar.pregtipoprest=98
				protambu1400_vhiscli_to_tbc_prest_guar.pregtipoestu2='04'
				protambu1400_vhiscli_to_tbc_prest_guar.pregservicio2='00'	
				protambu1400_vhiscli_to_tbc_prest_guar.pregcantidad=fs['hlec_cant']
				protambu1400_vhiscli_to_tbc_prest_guar.pregpedido='000000'
				protambu1400_vhiscli_to_tbc_prest_guar.pregpedido2='000000'
				protambu1400_vhiscli_to_tbc_prest_guar.pregnumefc='000000'	
				protambu1400_vhiscli_to_tbc_prest_guar.preghorapedido=globals.CapturaHoraSistema("HHMM")
				try{
					databaseManager.saveData(protambu1400_vhiscli_to_tbc_prest_guar)
				}catch(msg){
					application.output(msg.message)
				}
				
				var array1 = databaseManager.getFailedRecords(protambu1400_vhiscli_to_tbc_prest_guar)
				var jj = 0
				for (jj = 0; jj < array1.length; jj++) {
					var record1 = array1[jj];
					var jstable1 = databaseManager.getTable(record1);
					var tableSQLName1 = jstable1.getSQLName();
					plugins.dialogs.showErrorDialog("Error de Grabación",'Tabla:' + tableSQLName1 + ' en server:' + jstable1.getServerName() + ' falló la grabación. Avise urgente a Sistemas, por favor!')
					plugins.dialogs.showErrorDialog("Error en grabación de bandejaciru_vhiscli_to_tbc_prest_guar",record1.exception.getMessage());
					application.output(record1.exception);
					if (record1.exception.getErrorCode() == ServoyException.RECORD_VALIDATION_FAILED) {
					// exception thrown in pre-insert/update/delete event method
						var thrown1 = record1.exception.getErrorCode()
						application.output("Record validation failed: " + thrown1)
					}
				}
				fs['hlec_protocolo']=globals.vNroProtocolo
				try{
					databaseManager.saveData(fs)
				}catch(msg){
					application.output(msg.message)
				}
				array1 = databaseManager.getFailedRecords(fs)
				for (jj = 0; jj < array1.length; jj++) {
					record1 = array1[jj];
					jstable1 = databaseManager.getTable(record1);
					tableSQLName1 = jstable1.getSQLName();
					plugins.dialogs.showErrorDialog("Error de Grabación",'Tabla:' + tableSQLName1 + ' en server:' + jstable1.getServerName() + ' falló la grabación. Avise urgente a Sistemas, por favor!')
					plugins.dialogs.showErrorDialog("Error en grabación de bandejaciru_vhiscli_to_tbc_prest_guar",record1.exception.getMessage());
					application.output(record1.exception);
					if (record1.exception.getErrorCode() == ServoyException.RECORD_VALIDATION_FAILED) {
					// exception thrown in pre-insert/update/delete event method
						thrown1 = record1.exception.getErrorCode()
						application.output("Record validation failed: " + thrown1)
					}
				}
				elements.bean_244.value = i
				application.updateUI()
			}
			
		}
		elements.bean_244.visible=false
	}
}


/**
 * @properties={typeid:24,uuid:"F2FC2647-5F1C-4985-97CC-C5B60CFB90C1"}
 */
function fin_Protocolo_Ambulatorio(){
	if(protambu1400_vhiscli_to_tbc_ciruguar.getSize()>0){
		if(protambul1400_vhiscli_to_tbc_guardia.getSize()>0){
			/*
			protambul1400_vhiscli_to_tbc_guardia.guar_estado=4
			protambul1400_vhiscli_to_tbc_guardia.guar_estado1=4
			protambul1400_vhiscli_to_tbc_guardia.guar_estado3=4
			try{
				databaseManager.saveData(protambul1400_vhiscli_to_tbc_guardia)
			}catch(msg){
				application.output(msg.message)
			}
			var array1 = databaseManager.getFailedRecords(protambul1400_vhiscli_to_tbc_guardia)
			for (var jj = 0; jj < array1.length; jj++) {
				var record1 = array1[jj];
				var jstable1 = databaseManager.getTable(record1);
				var tableSQLName1 = jstable1.getSQLName();
				plugins.dialogs.showErrorDialog("Error de Grabación",'Tabla:' + tableSQLName1 + ' en server:' + jstable1.getServerName() + ' falló la grabación. Avise urgente a Sistemas, por favor!')
				plugins.dialogs.showErrorDialog("Error en grabación de bandejaciru_vhiscli_to_tbc_guardia",record1.exception.getMessage());
				application.output(record1.exception);
				if (record1.exception.getErrorCode() == ServoyException.RECORD_VALIDATION_FAILED) {
				// exception thrown in pre-insert/update/delete event method
					var thrown1 = record1.exception.getErrorCode()
					application.output("Record validation failed: " + thrown1)
				}
			}
			*/
			if(protambu1400_vhiscli_to_tbc_ciruguar.cirgnroquirofa==8){
				try{
					grabo_Pracquiro()
				}catch(msg){
					plugins.dialogs.showErrorDialog("grabo Pracquiro",msg.message)
				}
				try{
					genero_Txt_Visual()
				}catch(msg){
					plugins.dialogs.showErrorDialog("genero TXT Visual",msg.message)
				}
			}
		}
	}
}

/**
 * @properties={typeid:24,uuid:"3D05FEA6-7DDA-4805-93B2-76478D453C62"}
 */
function grabo_Pracquiro(){
	globals.protambu1400_nropedunico = 0
	var done0 = plugins.rawSQL.executeSQL("parametros", "param2", "begin; lock table param2 in row exclusive mode;")
	if (!done0) {
		var msg0 = plugins.rawSQL.getException().getMessage(); //see exception node for more info about the exception obj
		globals.DIALOGS.showErrorDialog('Error', 'SQL exception: ' + msg0, 'Ok')
	}
	var done = plugins.rawSQL.executeSQL("parametros", "param2", "select * from param2 where key_param2 = 1 for update;")
	if (!done) {
		var msg = plugins.rawSQL.getException().getMessage(); //see exception node for more info about the exception obj
		globals.DIALOGS.showErrorDialog('Error', 'SQL exception: ' + msg, 'Ok')
	}
	var vQuery = " SELECT * FROM param2 WHERE key_param2 = 1";
	var vDataset = databaseManager.getDataSetByQuery("parametros", vQuery, null, 1);
	
	var nombre_campo='prm2_54';
	var numero_campo=54;
	globals.protambu1400_nropedunico=vDataset.getValue(1,numero_campo)+1;
	var done1 = plugins.rawSQL.executeSQL("parametros", "param2", "update param2 set " + nombre_campo + " = " + nombre_campo +" + 1 where key_param2 = 1; commit;")
	if (!done1) {
		var msg1 = plugins.rawSQL.getException().getMessage(); //see exception node for more info about the exception obj
		globals.DIALOGS.showErrorDialog('Error', 'SQL exception: ' + msg1, 'Ok')
	}
	
	var fs = databaseManager.getFoundSet("asistencial","tbc_pracquiro")
	fs.newRecord()
	fs['pracquirohistclinica']=globals.vHiscli
	fs['pracquirofechacarga']=globals.CapturaFechaSistema()
	fs['pracquirohoracarga']=globals.CapturaHoraSistema("HHMMSSDD")
	fs['pracquiroresp']=0
	fs['pracquirormed']=0
	fs['pracquirorfech']=0
	fs['pracquirorhora']=0
	fs['pracquiroghistclinica']=globals.vHiscli
	fs['pracquirogfechaingreso']=globals.protambu1400_fechaingreso
	fs['pracquiroghoraingreso']=globals.protambu1400_hora_ingreso
	fs['pracquirohhiscli']=0
	fs['pracquirohfecha']=0
	fs['pracquirohhora']=0
	fs['pracquiroservicio']=5
	fs['pracquiroestado']=1
	fs['pracquiroprotocolo']=protambu1400_vhiscli_to_tbc_ciruguar.cirgprotocolo
	fs['pracquironropedunico']=globals.protambu1400_nropedunico
	try{
		databaseManager.saveData(fs)
	}catch(msg){
		application.output(msg.message)
	}
	var array1 = databaseManager.getFailedRecords(fs)
	for (var jj = 0; jj < array1.length; jj++) {
		var record1 = array1[jj];
		var jstable1 = databaseManager.getTable(record1);
		var tableSQLName1 = jstable1.getSQLName();
		plugins.dialogs.showErrorDialog("Error de Grabación",'Tabla:' + tableSQLName1 + ' en server:' + jstable1.getServerName() + ' falló la grabación. Avise urgente a Sistemas, por favor!')
		plugins.dialogs.showErrorDialog("Error en grabación de pracquiro",record1.exception.getMessage());
		application.output(record1.exception);
		if (record1.exception.getErrorCode() == ServoyException.RECORD_VALIDATION_FAILED) {
		// exception thrown in pre-insert/update/delete event method
			var thrown1 = record1.exception.getErrorCode()
			application.output("Record validation failed: " + thrown1)
		}
	}
}

/**
 * @properties={typeid:24,uuid:"4D1CF52E-35D5-475E-96B9-AEB13441C539"}
 */
function genero_Txt_Visual(){
	var pedido=globals.protambu1400_nropedunico;
	var hclin=globals.vHiscli;
	var fecha=globals.protambu1400_fechaingreso;
	var hora8=globals.protambu1400_hora_ingreso;
	var hora4=globals.protambu1400_hora_ingreso;
	globals.GenerarTXTInterfaseVisualMedica(4, 5, pedido, hclin, fecha, hora8, hora4)
}


/**
 * @properties={typeid:24,uuid:"22B04576-D3F1-4BB3-98EE-19E936418440"}
 */
function imprime_Protocolo_Ambulatorio(){
	var ww = 60;
	globals.vFechaActual=globals.protambu1400_fechaingreso
	globals.vHoraCarga=globals.protambu1400_hora_ingreso
	globals.Nprotocolo=globals.vNroProtocolo
	globals.vHisclin=globals.vHiscli
	
	globals.vEdad=scopes.globals.reimpresor_CalculaEdad(protambu1400_vhiscli_to_tbc_hist_cab_new.histcabfechanac, globals.protambu1400_fechaingreso)
	globals.anesambu_fechaingreso=protambu1400_vhiscli_to_tbc_ciruguar.cirgfechaingreso
	globals.anesambu_horaingreso=protambu1400_vhiscli_to_tbc_ciruguar.cirghoraingreso
	globals.segambu_fecha_ingreso=globals.protambu1400_fechaingreso
	
	globals.reimpresor_fecha_ingreso=globals.protambu1400_fechaingreso
	globals.segambu_hora_ingreso=globals.protambu1400_hora_ingreso
	
	globals.reimpresor_hora_ingreso=globals.protambu1400_hora_ingreso
	
	globals.vTipoListado=4
	globals.numeroJobs9=1
	forms.reimpresor_frm_protocolo.sub_buildReportNew()
	ww = ww + 5
	elements.bean_243.value = ww
	application.updateUI()
	if(protambu1400_vhiscli_to_tbc_seguqui_new.getSize()>0){
		//Seguridad Quirurgica
		globals.seguquiHOJA1='Hoja 1 de 2';
		globals.seguquiHOJA2='Hoja 2 de 2';
		forms.reimpresor_frm_seguqui_html_1.sub_buildReport();
		globals.vfrmActual='reimpresor_frm_seguqui_html_1'
		globals.printRoutine4('reimpresor_frm_seguqui_html_1', null);
		ww = ww + 5
		elements.bean_243.value = ww
		application.updateUI()
		
		if(globals.seguquiHTML2!=''){
			globals.vfrmActual='reimpresor_frm_seguqui_html_2'
			
			globals.printRoutine4('reimpresor_frm_seguqui_html_2', null);
		}
		
	}
	if(protambu1400_vhiscli_to_tbc_ciruguar.cirgusoanestesia==1){
		forms.reimpresor_frm_anestesia.sub_buildReportNew();
	}
	ww = ww + 5
	elements.bean_243.value = ww
	application.updateUI()
	//Certificado de Implante
	var encontre_protesis=false
	globals.reimpresor_grupoTexto=4
	if(reimpresor_vhiscli_to_tbc_proamb_t.getSize()>0 || reimpresor_vhiscli_to_tbl_proamb_t>0){
		encontre_protesis=true
	}else{
		globals.reimpresor_grupoTexto=5
		if(reimpresor_vhiscli_to_tbc_proamb_t.getSize()>0 || reimpresor_vhiscli_to_tbl_proamb_t>0){
			encontre_protesis=true
		}
	}
	if(encontre_protesis){
		forms.reimpresor_frm_certificado_implante.sub_buildReport();
		globals.vfrmActual='reimpresor_frm_certificado_implante'
		globals.printRoutine4('reimpresor_frm_certificado_implante', null);
		globals.printRoutine4('reimpresor_frm_certificado_implante', null);
	}
	ww = ww + 5
	elements.bean_243.value = ww
	application.updateUI()
	//Historia Clinica de Ingreso
	if(reimpresor_vhiscli_to_tbc_hcicir_new.getSize()>0){
		globals.numeroJobs9=10	  
		forms.reimpresor_frm_historia_clinica_ingreso.sub_buildReport();
		if(globals.hcicirHTML4!=''){
			globals.hcicirHOJA4='Hoja 4 de 4'
			globals.hcicirHOJA3='Hoja 3 de 4'
			globals.hcicirHOJA2='Hoja 2 de 4'
			globals.hcicirHOJA1='Hoja 1 de 4'
		}else{
			if(globals.anatopatHTML3!=''){
				globals.hcicirHOJA3='Hoja 3 de 3'
				globals.hcicirHOJA2='Hoja 2 de 3'
				globals.hcicirHOJA1='Hoja 1 de 3'
			}else{
				if(globals.hcicirHTML2!=''){
					globals.hcicirHOJA3='Hoja 2 de 2'
					globals.hcicirHOJA1='Hoja 1 de 2'
				}else{
					globals.hcicirHOJA1='Hoja 1 de 1'
				}
			}
		}
		globals.vfrmActual='reimpresor_frm_historia_clinica_ingreso'
		globals.printRoutine4('reimpresor_frm_historia_clinica_ingreso', null);
	}
	ww = ww + 5
	elements.bean_243.value = ww
	application.updateUI()
	/*
	if(bandejaciru_vs_to_fichaaneste_cab.getSize()>0){
		crear_ds_grilla_fichaanestesica()
		forms.fichaaneste_impr_det_1.controller.setPageFormat(210,297,15,5,3,2,1,0);
		forms.fichaaneste_impr_det_1.controller.print(false,false); 
	}
	*/
}

/**
 * @properties={typeid:24,uuid:"6567BCF1-72AB-4C1A-A9B4-2F6E2592D2BB"}
 */
function busco_guardia_IOQ(){
	var retorno = true
	if(protambu1400_vhiscli_to_tbc_hist_cab.getSize()>0){
		if(protambu1400_vhiscli_to_tbc_hist_cab.histcab_subestado==11){
			if(protambu1400_vhiscli_to_tbc_hist_cab.histcab_intobsamd!=0&&protambu1400_vhiscli_to_tbc_hist_cab.histcab_intobsamd!=''&&protambu1400_vhiscli_to_tbc_hist_cab.histcab_intobsamd!=null){
				globals.protambu1400_fechaingreso_aux=protambu1400_vhiscli_to_tbc_hist_cab.histcab_intobsamd
				globals.protambu1400_horaingreso_aux=protambu1400_vhiscli_to_tbc_hist_cab.histcab_intobshor			
				if(protambu1400_vhiscli_aux_to_tbc_guardia.guar_estado<4){
					globals.DIALOGS.showErrorDialog("Paciente ya ingresado o sin alta en guardia anterior","El Paciente ya tiene un ingreso en Internación"+'\n'+"Obs.Post-Quirurgica el:"+globals.protambu1400_fechaingreso_aux.toString().substr(6,2)+"/"+globals.protambu1400_fechaingreso_aux.toString().substr(4,2)+"/"+globals.protambu1400_fechaingreso_aux.toString().substr(0,4)+" a las "+globals.protambu1400_horaingreso_aux.toString().substr(0,2)+":"+globals.protambu1400_horaingreso_aux.toString().substr(2,2)+"Hs."+'\n'+"Se Cancela el ingreso a Recuperación Post-Quir.")       
					retorno = false
				}
			}
		}
	}
	return retorno
}
