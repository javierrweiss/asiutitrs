/**
 * @properties={typeid:35,uuid:"C75A5B83-1DCB-48A3-95EC-7FE544D922E5",variableType:-4}
 */
var ioq_12 = false;

/**
 * @properties={typeid:35,uuid:"D13B12CD-3A5A-499C-B1F5-DCA49C32C44D",variableType:-4}
 */
var ioq_6 = false;

/**
 * @properties={typeid:35,uuid:"A387770F-616C-4E82-821D-F45154AD58C3",variableType:-4}
 */
var ioq_3 = false;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"85467F73-0845-411C-B36E-CA187292EC64",variableType:4}
 */
var f_hora_guardia = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"61FCA5B0-8480-4D44-A315-0D03E035BA0E",variableType:4}
 */
var f_fecha_guardia = 0;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"4E6C3334-5530-4FBB-BE1D-DD18918359BB"}
 */
var f_cama = '';

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"903AF6DB-1E37-44E2-BC35-198DA7DBB316",variableType:4}
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
 * @properties={typeid:24,uuid:"F138DD1B-665C-48AE-B35D-BC73429BB815"}
 */
function onDataChange_habita(oldValue, newValue, event) {
	if(protambu1400_habita_to_tbc_habita.getSize()>0){
		f_cama=busco_cama_libre()
		if(f_cama!=''){
			f_habita=globals.protambu1400_habita
			globals.protambu1400_cama=f_cama
		}else{
			globals.DIALOGS.showWarningDialog("Atención!","Error, no hay camas disponibles","Ok")
		}
	}else{
		globals.DIALOGS.showWarningDialog("Atención!","Error, habitación inexistente","Ok")
	}
	return true
}

/**
 * @properties={typeid:24,uuid:"11FA3EC6-4485-4BFE-948F-56DF35BF9BE7"}
 */
function busco_cama_libre (){
	var largo_camas=0;
	var encontre_cama=false;
	var retorno_cama='';
	if(protambu1400_habita_to_tbc_camas.getSize()>0){
		largo_camas=protambu1400_habita_to_tbc_camas.getSize()
		for(var i=1;i<=largo_camas&&!encontre_cama;i++){
			protambu1400_habita_to_tbc_camas.setSelectedIndex(i)
			if(protambu1400_habita_to_tbc_camas.cam_est==0){
				retorno_cama=protambu1400_habita_to_tbc_camas.cam_cama
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
 * @properties={typeid:24,uuid:"D6C32BF1-25E6-4C41-84D6-AAA6AA536E35"}
 */
function onAction_btn_si(event) {
	if(globals.protambu1400_tipoRecuperacion==0||globals.protambu1400_tipoRecuperacion==null||globals.protambu1400_tipoRecuperacion==''){
		globals.DIALOGS.showWarningDialog("Atención!","Debe seleccionar la cantidad de horas en Recuperación Anestésica","Ok")
		return
	}
	var encontre_cama=true
	if(protambu1400_habita_to_tbc_habita.getSize()>0){
		if(protambu1400_camas_to_tbc_camas.getSize()>0){
			if(globals.protambu1400_cama==f_cama){
				if(protambu1400_camas_to_tbc_camas.cam_est==0){
					if(protambu1400_camas_to_tbc_camas.cam_utilstand!=3&&protambu1400_camas_to_tbc_camas.cam_utilstand!=1&&protambu1400_camas_to_tbc_camas.cam_utilstand!=13&&protambu1400_camas_to_tbc_camas.cam_utilstand!=14&&protambu1400_camas_to_tbc_camas.cam_utilstand!=15&&protambu1400_camas_to_tbc_camas.cam_utilstand!=16){
						encontre_cama=false
						for(var i=1;i<=5&&!encontre_cama;i++){
							if(protambu1400_camas_to_tbc_camas['cam_utilalterna_'+i]==1||protambu1400_camas_to_tbc_camas['cam_utilalterna_'+i]==3||protambu1400_camas_to_tbc_camas['cam_utilalterna_'+i]==13||protambu1400_camas_to_tbc_camas['cam_utilalterna_'+i]==14||protambu1400_camas_to_tbc_camas['cam_utilalterna_'+i]==15||protambu1400_camas_to_tbc_camas['cam_utilalterna_'+i]==16){
								encontre_cama=true
							}
						}
					}
					if(encontre_cama){
						f_habita=globals.protambu1400_habita
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
 * @properties={typeid:24,uuid:"93167798-5EB1-45F4-A56F-BFB6DDDCCFD3"}
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
 * @properties={typeid:24,uuid:"BACAF26B-B9C0-41E8-8506-A3BB5A5BF28C"}
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
 * @properties={typeid:24,uuid:"4D1E8584-EB7D-4E81-AF2F-6770B75673D4"}
 */
function onShow_frm_ingreso_habita(firstShow, event) {
	f_cama = ' '
	f_habita = 0
	globals.protambu1400_cama=' '
	globals.protambu1400_habita=0
	globals.protambu1400_tipoRecuperacion=null
	globals.vClose=false
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"D56C6E1A-83F6-4328-96EC-832C91F12E58"}
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
 * @properties={typeid:24,uuid:"37F605D0-D3CC-4588-8262-B7664E9DC477"}
 */
function regraba_Habita_IOQ(){
	if(protambu1400_habita_to_tbc_habita.getSize()>0){
		var tope = protambu1400_habita_to_tbc_habita.hab_camasreales+protambu1400_habita_to_tbc_habita.hab_cantsnumespera
		for(var i=1;i<=tope&&protambu1400_habita_to_tbc_habita['hab_histclin_'+i]!=0;i++){}
		if(protambu1400_habita_to_tbc_habita['hab_histclin_'+i]==0){
			protambu1400_habita_to_tbc_habita['hab_histclin_'+i]=globals.vHiscli
			protambu1400_habita_to_tbc_habita['hab_tiphistclin_'+i]=1
			try{
				databaseManager.saveData(protambu1400_habita_to_tbc_habita.getRecord(1))
			}catch(msg){
				application.output(msg.message)
			}
			var array1 = databaseManager.getFailedRecords(protambu1400_habita_to_tbc_habita)
			for (var jj = 0; jj < array1.length; jj++) {
				var record1 = array1[jj];
				var jstable1 = databaseManager.getTable(record1);
				var tableSQLName1 = jstable1.getSQLName();
				globals.DIALOGS.showErrorDialog("Error de Grabación",'Tabla:' + tableSQLName1 + ' en server:' + jstable1.getServerName() + ' falló la grabación. Avise urgente a Sistemas, por favor!')
				globals.DIALOGS.showErrorDialog("Error en grabación de protambu1400_habita_to_tbc_habita",record1.exception.getMessage());
				
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
 * @properties={typeid:24,uuid:"5E2273E6-647E-4977-8EB6-79203A3E5AB8"}
 */
function regraba_Camas_IOQ(){
	if(protambu1400_camas_to_tbc_camas.getSize()>0){
		protambu1400_camas_to_tbc_camas.cam_est=1
		protambu1400_camas_to_tbc_camas.cam_histclin=globals.vHiscli
		protambu1400_camas_to_tbc_camas.cam_tiphistclin=1
		if(protambu1400_camas_to_tbc_camas.cam_utilstand!=3){
			for(var i=1;i<=5&&protambu1400_camas_to_tbc_camas['cam_utilalterna_'+i]!=3;i++){}
			if(protambu1400_camas_to_tbc_camas['cam_utilalterna_'+i]==3){	
				protambu1400_camas_to_tbc_camas['cam_utilactual_'+i]=1
			}
		}
		try{
			databaseManager.saveData(protambu1400_camas_to_tbc_camas.getRecord(1))
		}catch(msg){
			application.output(msg.message)
		}
		var array1 = databaseManager.getFailedRecords(protambu1400_camas_to_tbc_camas)
		for (var jj = 0; jj < array1.length; jj++) {
			var record1 = array1[jj];
			var jstable1 = databaseManager.getTable(record1);
			var tableSQLName1 = jstable1.getSQLName();
			globals.DIALOGS.showErrorDialog("Error de Grabación",'Tabla:' + tableSQLName1 + ' en server:' + jstable1.getServerName() + ' falló la grabación. Avise urgente a Sistemas, por favor!')
			globals.DIALOGS.showErrorDialog("Error en grabación de protambu1400_camas_to_tbc_camas",record1.exception.getMessage());
			
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
 * @properties={typeid:24,uuid:"1B910C3D-706A-4507-92C4-88628001A9CC"}
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
	var $sql="select hisca3, hisca4 from tbc_hiscamas where Hisca1="+globals.protambu1400_habita+" and Hisca2='"+globals.protambu1400_cama+"' and Hisca3>="+$anio+''+$mes_dia
	var ds_hiscamas=databaseManager.getDataSetByQuery("asistencial",$sql,null,-1)
	var largo_hiscamas=ds_hiscamas.getMaxRowIndex()
	if(largo_hiscamas>0){
		globals.protambu1400_fecha_hiscamas=ds_hiscamas.getValue(largo_hiscamas,1)
		globals.protambu1400_hora_hiscamas=ds_hiscamas.getValue(largo_hiscamas,2)
		protambu1400_habita_to_tbc_hiscamas.hisca7=fecha_actual
		protambu1400_habita_to_tbc_hiscamas.hisca8=hora_actual
		protambu1400_habita_to_tbc_hiscamas.hisca12=globals.vTipoOperador
		protambu1400_habita_to_tbc_hiscamas.hisca13=globals.vLega
		try{
			databaseManager.saveData(protambu1400_habita_to_tbc_hiscamas.getRecord(1))
		}catch(msg){
			application.output(msg.message)
		}
		var array1 = databaseManager.getFailedRecords(protambu1400_habita_to_tbc_hiscamas)
		for (var jj = 0; jj < array1.length; jj++) {
			var record1 = array1[jj];
			var jstable1 = databaseManager.getTable(record1);
			var tableSQLName1 = jstable1.getSQLName();
			globals.DIALOGS.showErrorDialog("Error de Grabación",'Tabla:' + tableSQLName1 + ' en server:' + jstable1.getServerName() + ' falló la grabación. Avise urgente a Sistemas, por favor!')
			globals.DIALOGS.showErrorDialog("Error en grabación de protambu1400_habita_to_tbc_hiscamas",record1.exception.getMessage());
			
			//application.output(record1.exception);
			if (record1.exception.getErrorCode() == ServoyException.RECORD_VALIDATION_FAILED) {
			// exception thrown in pre-insert/update/delete event method
				var thrown1 = record1.exception.getErrorCode()
				application.output("Record validation failed: " + thrown1)
			}
		}
	}
	globals.protambu1400_fecha_hiscamas=fecha_actual
	globals.protambu1400_hora_hiscamas=hora_actual
	if(protambu1400_habita_to_tbc_hiscamas.getSize()<1){
		protambu1400_habita_to_tbc_hiscamas.newRecord()
		globals.InicializarDatosDeRelacion(protambu1400_habita_to_tbc_hiscamas,"asistencial","tbc_hiscamas")
		protambu1400_habita_to_tbc_hiscamas.hisca1=globals.protambu1400_habita
		protambu1400_habita_to_tbc_hiscamas.hisca2=globals.protambu1400_cama
		protambu1400_habita_to_tbc_hiscamas.hisca3=globals.protambu1400_fecha_hiscamas
		protambu1400_habita_to_tbc_hiscamas.hisca4=globals.protambu1400_hora_hiscamas
		protambu1400_habita_to_tbc_hiscamas.hisca5=protambu1400_camas_to_tbc_camas.cam_est
		protambu1400_habita_to_tbc_hiscamas.hisca6=16
		protambu1400_habita_to_tbc_hiscamas.hisca7=0
		protambu1400_habita_to_tbc_hiscamas.hisca8=0
		protambu1400_habita_to_tbc_hiscamas.hisca9=protambu1400_camas_to_tbc_camas.cam_tipcama
		protambu1400_habita_to_tbc_hiscamas.hisca10=globals.vTipoOperador
		protambu1400_habita_to_tbc_hiscamas.hisca11=globals.vLega
		try{
			databaseManager.saveData(protambu1400_habita_to_tbc_hiscamas.getRecord(1))
		}catch(msg){
			application.output(msg.message)
		}
		var array = databaseManager.getFailedRecords(protambu1400_habita_to_tbc_hiscamas)
		for (var j = 0; j < array.length; j++) {
			var record = array[j];
			var jstable = databaseManager.getTable(record1);
			var tableSQLName = jstable.getSQLName();
			globals.DIALOGS.showErrorDialog("Error de Grabación",'Tabla:' + tableSQLName + ' en server:' + jstable.getServerName() + ' falló la grabación. Avise urgente a Sistemas, por favor!')
			globals.DIALOGS.showErrorDialog("Error en grabación de protambu1400_habita_to_tbc_hiscamas",record.exception.getMessage());
			
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
 * @properties={typeid:24,uuid:"681FE935-1C23-4295-A63A-1DF7077ABE88"}
 */
function guardo_Detalle_amb_IOQ(){
	var fs_detalle = databaseManager.getFoundSet("asistencial","tbc_detalle_amb")
	fs_detalle.newRecord()
	fs_detalle['detamb1']=globals.vHiscli
	fs_detalle['detamb2']=globals.CapturaFechaSistema()
	fs_detalle['detamb3']=globals.CapturaHoraSistema("HHMM")
	fs_detalle['detamb4']=globals.protambu1400_habita
	fs_detalle['detamb5']=fs_detalle['detamb2']
	fs_detalle['detamb6']=fs_detalle['detamb3']
	fs_detalle['detamb7']=globals.protambu1400_cama
	fs_detalle['detamb8']=16
	fs_detalle['detamb9']=0
	fs_detalle['detamb10']=0
	fs_detalle['detamb11']=protambu1400_vhiscli_to_tbc_hist_cab_new.histcabobra
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
 * @properties={typeid:24,uuid:"F1DCD6DC-C311-42B4-B372-B9CF88028EFD"}
 */
function guardo_Guardia_IOQ(){
	var fs_guardia = databaseManager.getFoundSet("asistencial","tbc_guardia")
	fs_guardia.newRecord()
	fs_guardia['guar_habita']=globals.protambu1400_habita
	fs_guardia['guar_cama']=globals.protambu1400_cama
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
	fs_guardia['guar_diagnostico']=protambu1400_vhiscli_to_tbc_ciruguar.cirginterven
	fs_guardia['guar_medico']=protambul1400_vhiscli_to_tbc_guardia.guar_medico
	fs_guardia['guar_tipomed']=protambul1400_vhiscli_to_tbc_guardia.guar_tipomed
	fs_guardia['guar_opetipcama']=protambul1400_vhiscli_to_tbc_guardia.guar_opetipcama
	fs_guardia['guar_tipooperador']=protambul1400_vhiscli_to_tbc_guardia.guar_tipooperador
	fs_guardia['guar_opelegcama']=globals.vLega
	fs_guardia['guar_operador']=protambul1400_vhiscli_to_tbc_guardia.guar_operador
	fs_guardia['guar_obra']=protambu1400_vhiscli_to_tbc_hist_cab_new.histcabobra
	fs_guardia['guar_plan']=protambu1400_vhiscli_to_tbc_hist_cab_new.histcabplanx
	fs_guardia['guar_nroben']=protambu1400_vhiscli_to_tbc_hist_cab_new.histcabnrobenef
	fs_guardia['guariva']=protambul1400_vhiscli_to_tbc_guardia.guariva
	fs_guardia['guar_histclinica']=globals.vHiscli
	fs_guardia['guar_histclinica1']=globals.vHiscli
	fs_guardia['guar_apenom']=protambul1400_vhiscli_to_tbc_guardia.guar_apenom
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
 * @properties={typeid:24,uuid:"1BC036C7-AB92-49BF-B113-4BD8BDB71A41"}
 */
function regrabo_Hist_cab_IOQ(){
	if(protambu1400_vhiscli_to_tbc_hist_cab.getSize()>0){
		protambu1400_vhiscli_to_tbc_hist_cab.histcab_intobsamd=f_fecha_guardia
		protambu1400_vhiscli_to_tbc_hist_cab.histcab_intobshor=f_hora_guardia
		protambu1400_vhiscli_to_tbc_hist_cab.histcab_estado=2
		protambu1400_vhiscli_to_tbc_hist_cab.histcab_subestado=11
		try{
			databaseManager.saveData(protambu1400_vhiscli_to_tbc_hist_cab.getRecord(1))
		}catch(msg){
			application.output(msg.message)
		}
		var array1 = databaseManager.getFailedRecords(protambu1400_vhiscli_to_tbc_hist_cab)
		for (var jj = 0; jj < array1.length; jj++) {
			var record1 = array1[jj];
			var jstable1 = databaseManager.getTable(record1);
			var tableSQLName1 = jstable1.getSQLName();
			globals.DIALOGS.showErrorDialog("Error de Grabación",'Tabla:' + tableSQLName1 + ' en server:' + jstable1.getServerName() + ' falló la grabación. Avise urgente a Sistemas, por favor!')
			globals.DIALOGS.showErrorDialog("Error en grabación de protambu1400_vhiscli_to_tbc_hist_cab",record1.exception.getMessage());
			
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
 * @properties={typeid:24,uuid:"454EA5B8-CED2-493A-8D65-D51F52DB1283"}
 */
function onAction_btn_mapa(event) {
	globals.protambu1400_hiscli=globals.vHiscli
	var win = application.createWindow("mapa",JSWindow.MODAL_DIALOG)
	win.title = "Mapa de Habitaciones";
	win.setSize(1250,700)
	win.show(forms.frm_MenuMapa)
	globals.vHiscli=globals.protambu1400_hiscli
}

/**
 * @properties={typeid:24,uuid:"F09A6007-5857-4C60-A1F5-23757B716ED3"}
 */
function guardo_PrestGuar_TipoRecuperacion() {
	var fs_prestguar = databaseManager.getFoundSet("asistencial","tbc_prest_guar")
	fs_prestguar.newRecord()
	fs_prestguar['preghistclinica']=globals.vHiscli
	fs_prestguar['pregfechaingreso']=f_fecha_guardia
	fs_prestguar['preghoraingreso']=f_hora_guardia
	fs_prestguar['pregtiponome']=1
	switch (globals.protambu1400_tipoRecuperacion){
		case 1:fs_prestguar['pregcodnome']=430112;break;
		case 2:fs_prestguar['pregcodnome']=430113;break;
		case 3:fs_prestguar['pregcodnome']=430114;break;
	}
	fs_prestguar['pregsecuencia']=1
	fs_prestguar['pregtipoprest']=2
	fs_prestguar['pregmedico']=protambul1400_vhiscli_to_tbc_guardia.guar_medico
	fs_prestguar['pregtipomed']=protambul1400_vhiscli_to_tbc_guardia.guar_tipomed
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
