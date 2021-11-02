/**
 * @properties={typeid:35,uuid:"E9024072-8C31-42EA-A75F-116912AB0320",variableType:-4}
 */
var ioq_12 = false;

/**
 * @properties={typeid:35,uuid:"8BAA9E46-5354-4209-A2F6-598706988AFF",variableType:-4}
 */
var ioq_6 = false;

/**
 * @properties={typeid:35,uuid:"5CD30403-D375-4D4E-8863-4707496BB40E",variableType:-4}
 */
var ioq_3 = false;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"22ADB2C0-955F-420B-AD5A-F677DCFCB15F",variableType:4}
 */
var f_hora_guardia = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"9534CC4E-D6C6-4C12-B3AB-40EBF7E27EDE",variableType:4}
 */
var f_fecha_guardia = 0;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"9B051068-C077-4E18-9931-07D110869965"}
 */
var f_cama = '';

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"C882C00F-19FC-40CB-B90C-465A343A43A3",variableType:4}
 */
var f_habita = 0;

/**
 * Handle changed data.
 *
 * @param {Number} oldValue old value
 * @param {Number} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"6B696B22-D67B-4B1B-B8D7-A8920AEE28E0"}
 */
function onDataChange_habita(oldValue, newValue, event) {
	if(bandejaciru_habita_to_tbc_habita.getSize()>0){
		f_cama=busco_cama_libre()
		if(f_cama!=''){
			f_habita=globals.bandejaciru_habita
			globals.bandejaciru_cama=f_cama
		}else{
			globals.DIALOGS.showWarningDialog("Atención!","Error, no hay camas disponibles","Ok")
		}
	}else{
		globals.DIALOGS.showWarningDialog("Atención!","Error, habitación inexistente","Ok")
	}
	return true
}

/**
 * @properties={typeid:24,uuid:"CC5C9901-B056-4A21-88F5-FE603BE66B9F"}
 */
function busco_cama_libre (){
	var largo_camas=0;
	var encontre_cama=false;
	var retorno_cama='';
	if(bandejaciru_habita_to_tbc_camas.getSize()>0){
		largo_camas=bandejaciru_habita_to_tbc_camas.getSize()
		for(var i=1;i<=largo_camas&&!encontre_cama;i++){
			bandejaciru_habita_to_tbc_camas.setSelectedIndex(i)
			if(bandejaciru_habita_to_tbc_camas.cam_est==0){
				retorno_cama=bandejaciru_habita_to_tbc_camas.cam_cama
				encontre_cama=true
			}
		}
	}
	return retorno_cama
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"D20219A0-804E-48FB-89D4-F81C9FD6E4BA"}
 */
function onAction_btn_si(event) {
	if(globals.bandejaciru_tipoRecuperacion==0||globals.bandejaciru_tipoRecuperacion==null||globals.bandejaciru_tipoRecuperacion==''){
		globals.DIALOGS.showWarningDialog("Atención!","Debe seleccionar la cantidad de horas en Recuperación Anestésica","Ok")
		return
	}
	var encontre_cama=true
	if(bandejaciru_habita_to_tbc_habita.getSize()>0){
		if(bandejaciru_camas_to_tbc_camas.getSize()>0){
			if(globals.bandejaciru_cama==f_cama){
				if(bandejaciru_camas_to_tbc_camas.cam_est==0){
					if(bandejaciru_camas_to_tbc_camas.cam_utilstand!=3&&bandejaciru_camas_to_tbc_camas.cam_utilstand!=1&&bandejaciru_camas_to_tbc_camas.cam_utilstand!=13&&bandejaciru_camas_to_tbc_camas.cam_utilstand!=14&&bandejaciru_camas_to_tbc_camas.cam_utilstand!=15&&bandejaciru_camas_to_tbc_camas.cam_utilstand!=16){
						encontre_cama=false
						for(var i=1;i<=5&&!encontre_cama;i++){
							if(bandejaciru_camas_to_tbc_camas['cam_utilalterna_'+i]==1||bandejaciru_camas_to_tbc_camas['cam_utilalterna_'+i]==3||bandejaciru_camas_to_tbc_camas['cam_utilalterna_'+i]==13||bandejaciru_camas_to_tbc_camas['cam_utilalterna_'+i]==14||bandejaciru_camas_to_tbc_camas['cam_utilalterna_'+i]==15||bandejaciru_camas_to_tbc_camas['cam_utilalterna_'+i]==16){
								encontre_cama=true
							}
						}
					}
					if(encontre_cama){
						f_habita=globals.bandejaciru_habita
						actualizo_nueva_cama()
						var name=application.getActiveWindow()
						name.getName()
						var $win=application.getWindow(name.getName())
						if($win!=null){
							globals.vClose=true
							$win.hide()
							$win.destroy()
							globals.vClose=false
						}
					}else{
						globals.DIALOGS.showWarningDialog("Atención!","Error, Cama No Asignable a Internac.Observ.Quirúrgica.","Ok")
					}
				}else{
					globals.DIALOGS.showWarningDialog("Atención!","Error, la cama no está libre","Ok")
				}
			}else{
				globals.DIALOGS.showWarningDialog("Atención!","Error, Debe usar Cama propuesta","Ok")
			}
		}else{
			globals.DIALOGS.showWarningDialog("Atención!","Error, cama inexistente","Ok")
		}
	}else{
		globals.DIALOGS.showWarningDialog("Atención!","Error, habitación inexistente","Ok")
	}
}

/**
 * @properties={typeid:24,uuid:"B1CF825D-1ACA-45DE-A3E5-61CD7DEAF8A9"}
 */
function actualizo_nueva_cama(){
	
	try{
		regraba_Habita_IOQ()
	}catch(msg){
		application.output(msg.message)
	}
	try{
		regraba_Camas_IOQ()
	}catch(msg){
		application.output(msg.message)
	}
	
	try{
		guardo_Hiscamas_IOQ()
	}catch(msg){
		application.output(msg.message)
	}
	try{
		guardo_Detalle_amb_IOQ()
	}catch(msg){
		application.output(msg.message)
	}
	try{
		guardo_Guardia_IOQ()
	}catch(msg){
		application.output(msg.message)
	}
	try{
		regrabo_Hist_cab_IOQ()
	}catch(msg){
		application.output(msg.message)
	}
	try{
		guardo_PrestGuar_TipoRecuperacion()
	}catch(msg){
		application.output(msg.message)
	}
	globals.DIALOGS.showInfoDialog("Confirmación","Asignacion de Cama OK !","Ok")
}

/**
 * Handle hide window.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"CA7041B0-1848-4279-AC8A-E42E164956E4"}
 */
function onHide_frm_ingreso_habita(event) {
	return globals.vClose
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"765EA37E-A93E-4C8B-A80C-D29AA004E31C"}
 */
function onShow_frm_ingreso_habita(firstShow, event) {
	f_cama = ' '
	f_habita = 0
	globals.bandejaciru_cama=' '
	globals.bandejaciru_habita=0
	globals.bandejaciru_tipoRecuperacion=null
	globals.vClose=false
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"A3A9C753-8FE3-4F32-9308-38B9222EE799"}
 */
function onActionbtn_no(event) {
	var name=application.getActiveWindow()
	name.getName()
	var $win=application.getWindow(name.getName())
	if($win!=null){
		globals.vClose=true
		$win.hide()
		$win.destroy()
		globals.vClose=false
	}
}

/**
 * @properties={typeid:24,uuid:"EA8C016C-0A0E-482D-B878-6D54D464FAE5"}
 */
function regraba_Habita_IOQ(){
	if(bandejaciru_habita_to_tbc_habita.getSize()>0){
		var tope = bandejaciru_habita_to_tbc_habita.hab_camasreales+bandejaciru_habita_to_tbc_habita.hab_cantsnumespera
		for(var i=1;i<=tope&&bandejaciru_habita_to_tbc_habita['hab_histclin_'+i]!=0;i++){}
		if(bandejaciru_habita_to_tbc_habita['hab_histclin_'+i]==0){
			bandejaciru_habita_to_tbc_habita['hab_histclin_'+i]=globals.vHiscli
			bandejaciru_habita_to_tbc_habita['hab_tiphistclin_'+i]=1
			try{
				databaseManager.saveData(bandejaciru_habita_to_tbc_habita.getRecord(1))
			}catch(msg){
				application.output(msg.message)
			}
			var array1 = databaseManager.getFailedRecords(bandejaciru_habita_to_tbc_habita)
			for (var jj = 0; jj < array1.length; jj++) {
				var record1 = array1[jj];
				var jstable1 = databaseManager.getTable(record1);
				var tableSQLName1 = jstable1.getSQLName();
				globals.DIALOGS.showErrorDialog("Error de Grabación",'Tabla:' + tableSQLName1 + ' en server:' + jstable1.getServerName() + ' falló la grabación. Avise urgente a Sistemas, por favor!')
				globals.DIALOGS.showErrorDialog("Error en grabación de bandejaciru_habita_to_tbc_habita",record1.exception.getMessage());
				
				//application.output(record1.exception);
				if (record1.exception.getErrorCode() == ServoyException.RECORD_VALIDATION_FAILED) {
				// exception thrown in pre-insert/update/delete event method
					var thrown1 = record1.exception.getErrorCode()
					application.output("Record validation failed: " + thrown1)
				}
			}
		}
	}
}

/**
 * @properties={typeid:24,uuid:"4440BF31-C0BD-41F7-84EC-3944E86801C7"}
 */
function regraba_Camas_IOQ(){
	if(bandejaciru_camas_to_tbc_camas.getSize()>0){
		bandejaciru_camas_to_tbc_camas.cam_est=1
		bandejaciru_camas_to_tbc_camas.cam_histclin=globals.vHiscli
		bandejaciru_camas_to_tbc_camas.cam_tiphistclin=1
		if(bandejaciru_camas_to_tbc_camas.cam_utilstand!=3){
			for(var i=1;i<=5&&bandejaciru_camas_to_tbc_camas['cam_utilalterna_'+i]!=3;i++){}
			if(bandejaciru_camas_to_tbc_camas['cam_utilalterna_'+i]==3){	
				bandejaciru_camas_to_tbc_camas['cam_utilactual_'+i]=1
			}
		}
		try{
			databaseManager.saveData(bandejaciru_camas_to_tbc_camas.getRecord(1))
		}catch(msg){
			application.output(msg.message)
		}
		var array1 = databaseManager.getFailedRecords(bandejaciru_camas_to_tbc_camas)
		for (var jj = 0; jj < array1.length; jj++) {
			var record1 = array1[jj];
			var jstable1 = databaseManager.getTable(record1);
			var tableSQLName1 = jstable1.getSQLName();
			globals.DIALOGS.showErrorDialog("Error de Grabación",'Tabla:' + tableSQLName1 + ' en server:' + jstable1.getServerName() + ' falló la grabación. Avise urgente a Sistemas, por favor!')
			globals.DIALOGS.showErrorDialog("Error en grabación de bandejaciru_camas_to_tbc_camas",record1.exception.getMessage());
			
			//application.output(record1.exception);
			if (record1.exception.getErrorCode() == ServoyException.RECORD_VALIDATION_FAILED) {
			// exception thrown in pre-insert/update/delete event method
				var thrown1 = record1.exception.getErrorCode()
				application.output("Record validation failed: " + thrown1)
			}
		}
	}
}

/**
 * @properties={typeid:24,uuid:"4553068E-6312-42A4-BD6D-68AC82AF6054"}
 */
function guardo_Hiscamas_IOQ(){
	var $periodo_inmediato=globals.CapturaFechaSistema();
	var $mes_dia=' ';
	var $anio=0;
	$mes_dia=$periodo_inmediato.toString().substr(4,4)
	$anio=utils.stringToNumber($periodo_inmediato.toString().substr(0,4))
	if($mes_dia=="0101"){
		$anio--
		$mes_dia="1231"
	}else{
		$mes_dia="0101"
	}
	var fecha_actual = globals.CapturaFechaSistema()
	var hora_actual = globals.CapturaHoraSistema("HHMMSSDD")
	var $sql="select hisca3, hisca4 from tbc_hiscamas where Hisca1="+globals.bandejaciru_habita+" and Hisca2='"+globals.bandejaciru_cama+"' and Hisca3>="+$anio+''+$mes_dia
	var ds_hiscamas=databaseManager.getDataSetByQuery("asistencial",$sql,null,-1)
	var largo_hiscamas=ds_hiscamas.getMaxRowIndex()
	if(largo_hiscamas>0){
		globals.bandejaciru_fecha_hiscamas=ds_hiscamas.getValue(largo_hiscamas,1)
		globals.bandejaciru_hora_hiscamas=ds_hiscamas.getValue(largo_hiscamas,2)
		bandejaciru_habita_to_tbc_hiscamas.hisca7=fecha_actual
		bandejaciru_habita_to_tbc_hiscamas.hisca8=hora_actual
		bandejaciru_habita_to_tbc_hiscamas.hisca12=globals.vTipoOperador
		bandejaciru_habita_to_tbc_hiscamas.hisca13=globals.vLega
		try{
			databaseManager.saveData(bandejaciru_habita_to_tbc_hiscamas.getRecord(1))
		}catch(msg){
			application.output(msg.message)
		}
		var array1 = databaseManager.getFailedRecords(bandejaciru_habita_to_tbc_hiscamas)
		for (var jj = 0; jj < array1.length; jj++) {
			var record1 = array1[jj];
			var jstable1 = databaseManager.getTable(record1);
			var tableSQLName1 = jstable1.getSQLName();
			globals.DIALOGS.showErrorDialog("Error de Grabación",'Tabla:' + tableSQLName1 + ' en server:' + jstable1.getServerName() + ' falló la grabación. Avise urgente a Sistemas, por favor!')
			globals.DIALOGS.showErrorDialog("Error en grabación de bandejaciru_habita_to_tbc_hiscamas",record1.exception.getMessage());
			
			//application.output(record1.exception);
			if (record1.exception.getErrorCode() == ServoyException.RECORD_VALIDATION_FAILED) {
			// exception thrown in pre-insert/update/delete event method
				var thrown1 = record1.exception.getErrorCode()
				application.output("Record validation failed: " + thrown1)
			}
		}
	}
	globals.bandejaciru_fecha_hiscamas=fecha_actual
	globals.bandejaciru_hora_hiscamas=hora_actual
	if(bandejaciru_habita_to_tbc_hiscamas.getSize()<1){
		bandejaciru_habita_to_tbc_hiscamas.newRecord()
		globals.InicializarDatosDeRelacion(bandejaciru_habita_to_tbc_hiscamas,"asistencial","tbc_hiscamas")
		bandejaciru_habita_to_tbc_hiscamas.hisca1=globals.bandejaciru_habita
		bandejaciru_habita_to_tbc_hiscamas.hisca2=globals.bandejaciru_cama
		bandejaciru_habita_to_tbc_hiscamas.hisca3=globals.bandejaciru_fecha_hiscamas
		bandejaciru_habita_to_tbc_hiscamas.hisca4=globals.bandejaciru_hora_hiscamas
		bandejaciru_habita_to_tbc_hiscamas.hisca5=bandejaciru_camas_to_tbc_camas.cam_est
		bandejaciru_habita_to_tbc_hiscamas.hisca6=16
		bandejaciru_habita_to_tbc_hiscamas.hisca7=0
		bandejaciru_habita_to_tbc_hiscamas.hisca8=0
		bandejaciru_habita_to_tbc_hiscamas.hisca9=bandejaciru_camas_to_tbc_camas.cam_tipcama
		bandejaciru_habita_to_tbc_hiscamas.hisca10=globals.vTipoOperador
		bandejaciru_habita_to_tbc_hiscamas.hisca11=globals.vLega
		try{
			databaseManager.saveData(bandejaciru_habita_to_tbc_hiscamas.getRecord(1))
		}catch(msg){
			application.output(msg.message)
		}
		var array = databaseManager.getFailedRecords(bandejaciru_habita_to_tbc_hiscamas)
		for (var j = 0; j < array.length; j++) {
			var record = array[j];
			var jstable = databaseManager.getTable(record1);
			var tableSQLName = jstable.getSQLName();
			globals.DIALOGS.showErrorDialog("Error de Grabación",'Tabla:' + tableSQLName + ' en server:' + jstable.getServerName() + ' falló la grabación. Avise urgente a Sistemas, por favor!')
			globals.DIALOGS.showErrorDialog("Error en grabación de bandejaciru_habita_to_tbc_hiscamas",record.exception.getMessage());
			
			//application.output(record1.exception);
			if (record.exception.getErrorCode() == ServoyException.RECORD_VALIDATION_FAILED) {
			// exception thrown in pre-insert/update/delete event method
				var thrown = record.exception.getErrorCode()
				application.output("Record validation failed: " + thrown)
			}
		}
	}
}

/**
 * @properties={typeid:24,uuid:"4F5DB3FD-C5C2-4018-88D1-805269AD6140"}
 */
function guardo_Detalle_amb_IOQ(){
	var fs_detalle = databaseManager.getFoundSet("asistencial","tbc_detalle_amb")
	fs_detalle.newRecord()
	fs_detalle['detamb1']=globals.vHiscli
	fs_detalle['detamb2']=globals.CapturaFechaSistema()
	fs_detalle['detamb3']=globals.CapturaHoraSistema("HHMM")
	fs_detalle['detamb4']=globals.bandejaciru_habita
	fs_detalle['detamb5']=fs_detalle['detamb2']
	fs_detalle['detamb6']=fs_detalle['detamb3']
	fs_detalle['detamb7']=globals.bandejaciru_cama
	fs_detalle['detamb8']=16
	fs_detalle['detamb9']=0
	fs_detalle['detamb10']=0
	fs_detalle['detamb11']=bandejaciru_hiscli_to_tbc_hist_cab_new.histcabobra
	fs_detalle['detamb12']=fs_detalle['detamb2']
	fs_detalle['detamb13']=0
	fs_detalle['detamb14']=0
	try{
		databaseManager.saveData(fs_detalle)
	}catch(msg){
		application.output(msg.message)
	}
	var array1 = databaseManager.getFailedRecords(fs_detalle)
	for (var jj = 0; jj < array1.length; jj++) {
		var record1 = array1[jj];
		var jstable1 = databaseManager.getTable(record1);
		var tableSQLName1 = jstable1.getSQLName();
		globals.DIALOGS.showErrorDialog("Error de Grabación",'Tabla:' + tableSQLName1 + ' en server:' + jstable1.getServerName() + ' falló la grabación. Avise urgente a Sistemas, por favor!')
		globals.DIALOGS.showErrorDialog("Error en grabación de tbc_detalle_amb",record1.exception.getMessage());
		
		//application.output(record1.exception);
		if (record1.exception.getErrorCode() == ServoyException.RECORD_VALIDATION_FAILED) {
		// exception thrown in pre-insert/update/delete event method
			var thrown1 = record1.exception.getErrorCode()
			application.output("Record validation failed: " + thrown1)
		}
	}
}

/**
 * @properties={typeid:24,uuid:"8C08EA49-8C01-49DF-8DC1-B3092C3E2BAB"}
 */
function guardo_Guardia_IOQ(){
	var fs_guardia = databaseManager.getFoundSet("asistencial","tbc_guardia")
	fs_guardia.newRecord()
	fs_guardia['guar_habita']=globals.bandejaciru_habita
	fs_guardia['guar_cama']=globals.bandejaciru_cama
	var fecha_actual = globals.CapturaFechaSistema()
	f_fecha_guardia=fecha_actual
	fs_guardia['guar_fechacama']=fecha_actual
	fs_guardia['guar_fechaingreso']=fecha_actual
	fs_guardia['guar_fechaingreso1']=fecha_actual
	fs_guardia['guar_fechaingreso3']=fecha_actual
	var hora_actual = globals.CapturaHoraSistema("HHMM")
	f_hora_guardia=hora_actual
	fs_guardia['guar_horacama']=hora_actual
	fs_guardia['guar_horaingreso']=hora_actual
	fs_guardia['guar_horaingreso1']=hora_actual
	fs_guardia['guar_horaingreso3']=hora_actual
	fs_guardia['guar_especialidad']=11
	fs_guardia['guar_especialidad1']=11
	fs_guardia['guar_especialidad3']=11
	fs_guardia['guar_estado']=2
	fs_guardia['guar_estado1']=2
	fs_guardia['guar_estado3']=2
	fs_guardia['guar_espmed']=8
	fs_guardia['guar_diagnostico']=bandejaciru_vhiscli_to_tbc_ciruguar.cirginterven
	fs_guardia['guar_medico']=bandejaciru_vhiscli_to_tbc_guardia.guar_medico
	fs_guardia['guar_tipomed']=bandejaciru_vhiscli_to_tbc_guardia.guar_tipomed
	fs_guardia['guar_opetipcama']=bandejaciru_vhiscli_to_tbc_guardia.guar_opetipcama
	fs_guardia['guar_tipooperador']=bandejaciru_vhiscli_to_tbc_guardia.guar_tipooperador
	fs_guardia['guar_opelegcama']=globals.vLega
	fs_guardia['guar_operador']=bandejaciru_vhiscli_to_tbc_guardia.guar_operador
	fs_guardia['guar_obra']=bandejaciru_hiscli_to_tbc_hist_cab_new.histcabobra
	fs_guardia['guar_plan']=bandejaciru_hiscli_to_tbc_hist_cab_new.histcabplanx
	fs_guardia['guar_nroben']=bandejaciru_hiscli_to_tbc_hist_cab_new.histcabnrobenef
	fs_guardia['guariva']=bandejaciru_vhiscli_to_tbc_guardia.guariva
	fs_guardia['guar_histclinica']=globals.vHiscli
	fs_guardia['guar_histclinica1']=globals.vHiscli
	fs_guardia['guar_apenom']=bandejaciru_vhiscli_to_tbc_guardia.guar_apenom
	fs_guardia['guar_fechaalta']=0
	fs_guardia['guar_horaalta']=0
	fs_guardia['guar_turno']=0
	fs_guardia['guar_primeravez']=0
	fs_guardia['guar_horaatenc']=0
	fs_guardia['guar_letrafc']=' '
	fs_guardia['guar_numefc']=0
	fs_guardia['guar_deriva']=0
	fs_guardia['guar_derivasec']=0
	fs_guardia['guar_medicab']=' '
	fs_guardia['guar_pamifup']=0
	fs_guardia['guar_anestesia']=0
	fs_guardia['guar_ctro']=0
	fs_guardia['guar_reingreso']=0
	fs_guardia['guar_fechaepic']=0
	fs_guardia['guar_menoracom']=0
	fs_guardia['guar_opetipreingreso']=0
	fs_guardia['guar_opelegreingreso']=0
	fs_guardia['guar_estadofebril']=0
	fs_guardia['guar_quienanula']=0
	fs_guardia['guar_otrctro']=0
	
	
	try{
		databaseManager.saveData(fs_guardia)
	}catch(msg){
		application.output(msg.message)
	}
	var array1 = databaseManager.getFailedRecords(fs_guardia)
	for (var jj = 0; jj < array1.length; jj++) {
		var record1 = array1[jj];
		var jstable1 = databaseManager.getTable(record1);
		var tableSQLName1 = jstable1.getSQLName();
		globals.DIALOGS.showErrorDialog("Error de Grabación",'Tabla:' + tableSQLName1 + ' en server:' + jstable1.getServerName() + ' falló la grabación. Avise urgente a Sistemas, por favor!')
		globals.DIALOGS.showErrorDialog("Error en grabación de tbc_guardia",record1.exception.getMessage());
		
		//application.output(record1.exception);
		if (record1.exception.getErrorCode() == ServoyException.RECORD_VALIDATION_FAILED) {
		// exception thrown in pre-insert/update/delete event method
			var thrown1 = record1.exception.getErrorCode()
			application.output("Record validation failed: " + thrown1)
		}
	}
}

/**
 * @properties={typeid:24,uuid:"C4372CBA-E3EE-40B4-950D-569A1FA09B3C"}
 */
function regrabo_Hist_cab_IOQ(){
	if(bandejaciru_vhiscli_to_tbc_hist_cab.getSize()>0){
		bandejaciru_vhiscli_to_tbc_hist_cab.histcab_intobsamd=f_fecha_guardia
		bandejaciru_vhiscli_to_tbc_hist_cab.histcab_intobshor=f_hora_guardia
		bandejaciru_vhiscli_to_tbc_hist_cab.histcab_estado=2
		bandejaciru_vhiscli_to_tbc_hist_cab.histcab_subestado=11
		try{
			databaseManager.saveData(bandejaciru_vhiscli_to_tbc_hist_cab.getRecord(1))
		}catch(msg){
			application.output(msg.message)
		}
		var array1 = databaseManager.getFailedRecords(bandejaciru_vhiscli_to_tbc_hist_cab)
		for (var jj = 0; jj < array1.length; jj++) {
			var record1 = array1[jj];
			var jstable1 = databaseManager.getTable(record1);
			var tableSQLName1 = jstable1.getSQLName();
			globals.DIALOGS.showErrorDialog("Error de Grabación",'Tabla:' + tableSQLName1 + ' en server:' + jstable1.getServerName() + ' falló la grabación. Avise urgente a Sistemas, por favor!')
			globals.DIALOGS.showErrorDialog("Error en grabación de bandejaciru_vhiscli_to_tbc_hist_cab",record1.exception.getMessage());
			
			//application.output(record1.exception);
			if (record1.exception.getErrorCode() == ServoyException.RECORD_VALIDATION_FAILED) {
			// exception thrown in pre-insert/update/delete event method
				var thrown1 = record1.exception.getErrorCode()
				application.output("Record validation failed: " + thrown1)
			}
		}
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"A9F498FC-92FB-4B57-B631-821EC490FA41"}
 */
function onAction_btn_mapa(event) {
	globals.bandejaciru_hiscli=globals.vHiscli
	var win = application.createWindow("mapa",JSWindow.MODAL_DIALOG)
	win.title = "Mapa de Habitaciones";
	win.setSize(1250,700)
	win.show(forms.frm_MenuMapa)
	globals.vHiscli=globals.bandejaciru_hiscli
}

/**
 * @properties={typeid:24,uuid:"7236AA02-2FDE-483D-9211-431CEFF2F857"}
 */
function guardo_PrestGuar_TipoRecuperacion() {
	var fs_prestguar = databaseManager.getFoundSet("asistencial","tbc_prest_guar")
	fs_prestguar.newRecord()
	fs_prestguar['preghistclinica']=globals.vHiscli
	fs_prestguar['pregfechaingreso']=f_fecha_guardia
	fs_prestguar['preghoraingreso']=f_hora_guardia
	fs_prestguar['pregtiponome']=1
	switch (globals.bandejaciru_tipoRecuperacion){
		case 1:fs_prestguar['pregcodnome']=430112;break;
		case 2:fs_prestguar['pregcodnome']=430113;break;
		case 3:fs_prestguar['pregcodnome']=430114;break;
	}
	fs_prestguar['pregsecuencia']=1
	fs_prestguar['pregtipoprest']=2
	fs_prestguar['pregmedico']=bandejaciru_vhiscli_to_tbc_guardia.guar_medico
	fs_prestguar['pregtipomed']=bandejaciru_vhiscli_to_tbc_guardia.guar_tipomed
	fs_prestguar['pregcantidad']=1
	fs_prestguar['pregestado']=1
	fs_prestguar['pregpasehistpac']=0
	fs_prestguar['pregpedido']='000000'
	fs_prestguar['preghorapedido']=globals.CapturaHoraSistema("HHMM")
	fs_prestguar['pregtipoestu2']='00'
	fs_prestguar['pregservicio2']='00'
	fs_prestguar['pregpedido2']='000000'
	fs_prestguar['pregletrafc']=' '
	fs_prestguar['pregnumefc']='000000'
	try{
		databaseManager.saveData(fs_prestguar)
	}catch(msg){
		application.output(msg.message)
	}
	var array1 = databaseManager.getFailedRecords(fs_prestguar)
	for (var jj = 0; jj < array1.length; jj++) {
		var record1 = array1[jj];
		var jstable1 = databaseManager.getTable(record1);
		var tableSQLName1 = jstable1.getSQLName();
		globals.DIALOGS.showErrorDialog("Error de Grabación",'Tabla:' + tableSQLName1 + ' en server:' + jstable1.getServerName() + ' falló la grabación. Avise urgente a Sistemas, por favor!')
		globals.DIALOGS.showErrorDialog("Error en grabación de tbc_prest_guar",record1.exception.getMessage());
		
		//application.output(record1.exception);
		if (record1.exception.getErrorCode() == ServoyException.RECORD_VALIDATION_FAILED) {
		// exception thrown in pre-insert/update/delete event method
			var thrown1 = record1.exception.getErrorCode()
			application.output("Record validation failed: " + thrown1)
		}
	}
}
