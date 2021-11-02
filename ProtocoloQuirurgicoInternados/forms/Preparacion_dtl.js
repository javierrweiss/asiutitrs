/**
 * Handle changed data.
 *
 * @param oldValue old value
 * @param newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"084B976B-20B2-4EDF-A265-2C22E0291DA3"}
 */
function onDataChange_fecbano(oldValue, newValue, event) {
	//globals.var_ciri_fecbanio1=globals.var_ciri_fecbanio
	var largo = vhiscli_unico_to_tbc_admision_scroll.adm_horing.toString().length
	var hora=0
	var minutos=0
	switch (largo){
		case 1:hora=0;minutos=utils.stringToNumber(vhiscli_unico_to_tbc_admision_scroll.adm_horing.toString().substr(0,1));break;
		case 2:hora=0;minutos=utils.stringToNumber(vhiscli_unico_to_tbc_admision_scroll.adm_horing.toString().substr(0,2));break;
		case 3:hora=utils.stringToNumber(vhiscli_unico_to_tbc_admision_scroll.adm_horing.toString().substr(0,1));minutos=utils.stringToNumber(vhiscli_unico_to_tbc_admision_scroll.adm_horing.toString().substr(1,2));break;
		case 4:hora=utils.stringToNumber(vhiscli_unico_to_tbc_admision_scroll.adm_horing.toString().substr(0,2));minutos=utils.stringToNumber(vhiscli_unico_to_tbc_admision_scroll.adm_horing.toString().substr(2,2));break;
		default:hora=0;minutos=0;break;
	}
	var fecha_ingreso = application.getServerTimeStamp()
	
	fecha_ingreso.setFullYear(utils.stringToNumber(vhiscli_unico_to_tbc_admision_scroll.adm_fecing.toString().substr(0,4)),utils.stringToNumber(vhiscli_unico_to_tbc_admision_scroll.adm_fecing.toString().substr(4,2))-1,utils.stringToNumber(vhiscli_unico_to_tbc_admision_scroll.adm_fecing.toString().substr(6,2)))
	fecha_ingreso.setHours(hora,minutos,0,0)
		
	if(globals.FechaHoraAmayorB(globals.var_ciri_fecbanio, globals.vFechaInicio)){
		plugins.dialogs.showInfoDialog("Error en fecha u hora del Baño","El baño debe ser anterior al inicio de la Cirugía")
		return false
	}else{
		if(globals.FechaHoraAmayorB(fecha_ingreso, globals.var_ciri_fecbanio)){
			plugins.dialogs.showInfoDialog("Error en fecha u hora del Baño","El baño debe ser posterior a la fecha de ingreso")
			return false
		}else{
			elements.btn_graba_preparacion.visible=true
			elements.combo_rasura.requestFocus()
			return true
		}
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
 * @properties={typeid:24,uuid:"C8FF176B-8350-45D0-B9D3-798A067F6BA5"}
 */
function onDataChange_fuebaniado(oldValue, newValue, event) {
	if(newValue=='Si'){
		globals.var_ciri_fecbanio=application.getServerTimeStamp()
		elements.lbl_1.visible=true
		elements.var_ciri_fecbano_lbl.visible=true
		elements.var_ciri_fecbano_lbl.requestFocus()
	}else{
		elements.lbl_1.visible=false
		elements.var_ciri_fecbano_lbl.visible=false
		foundset.cirifechabanio=0
		foundset.cirihorabanio=0
		elements.combo_rasura.requestFocus()
	}
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
 * @properties={typeid:24,uuid:"78FA022D-B3B6-42AA-9D9A-6A2A85EC8111"}
 */
function onDataChange_fuerasurado(oldValue, newValue, event) {
	if(newValue=='Si'){
		globals.var_ciri_fecrasura=application.getServerTimeStamp()
		elements.lbl_2.visible=true
		elements.lbl_3.visible=true
		elements.var_ciri_fecrasura_lbl.visible=true
		elements.ciri_conquerasura_lbl.visible=true
		elements.var_ciri_fecrasura_lbl.requestFocus()
	}else{
		elements.lbl_2.visible=false
		elements.lbl_3.visible=false
		elements.var_ciri_fecrasura_lbl.visible=false
		elements.ciri_conquerasura_lbl.visible=false
		foundset.cirifecharasura=0
		foundset.cirihorarasura=0
		foundset.ciriconquerasura=0
	}
	elements.btn_graba_preparacion.visible=true
	return true
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"C7CBC93D-C5BC-48D8-9548-109C24148A17"}
 */
function onAction_graba_Preparacion(event) {
	if(vciri_legciru_to_tbc_medicos_personal.getSize()<1){
		plugins.dialogs.showWarningDialog("Error en Cirujano","Código de Cirujano Inexistente. Ingrese un código correcto para poder grabar.","Ok")
		return 
	}
	if(vinterven0_to_tbc_interven.getSize()<1){
		plugins.dialogs.showWarningDialog("Error en Intervención","Código de Intervención Inexistente. Ingrese un código válido para poder grabar.","Ok")
		return
	}
	if(!buscaProtocoloAbierto(globals.vciri_legciru)){
		plugins.dialogs.showWarningDialog("Error en Cirujano","Código de Cirujano con protocolo sin cerrar. Ingrese un código correcto para poder grabar.","Ok")
		return
	}
	vhiscli_to_tbc_cirugint.ciriinterven=globals.vInterven0
	vhiscli_to_tbc_cirugint.cirianestesia=globals.vAnesChek
	vhiscli_to_tbc_cirugint.ciriieciru=globals.vtipo_ciru_ie
	vhiscli_to_tbc_cirugint.cirilegciru=globals.vciri_legciru
	vhiscli_to_tbc_cirugint.cirilegpartero=globals.vciri_legpartero
	vhiscli_to_tbc_cirugint.cirilegneonato=globals.vciri_legneonato
	vhiscli_to_tbc_cirugint.cirinroquirofa=globals.vQuirofano
	//vhiscli_to_tbc_cirugint.cirifechainicio=globals.vFechaInicio.getFullYear()+''+globals.vFechaInicio.getMonth()+''+globals.vFechaInicio.getDate()
	//vhiscli_to_tbc_cirugint.cirifechafinal=0
	vhiscli_to_tbc_cirugint.ciripinzasinicio=globals.vPinzasInicio
	if(globals.vEsHemodinamia=="Si"){
		vhiscli_to_tbc_cirugint.ciritipointerven=2
	}else{
			vhiscli_to_tbc_cirugint.ciritipointerven=0
	}
	if(globals.vFuebaniado=="Si"){
		var anio=0
		var mes=0
		var dia=0
		var hora=0
		var minutos=0
		anio = globals.var_ciri_fecbanio.getFullYear()
		mes = globals.var_ciri_fecbanio.getMonth()+1
		dia = globals.var_ciri_fecbanio.getDate()
		hora = globals.var_ciri_fecbanio.getHours()
		minutos = globals.var_ciri_fecbanio.getMinutes()
		var mes_ed=''
		var dia_ed=''
		var hora_ed=''
		var minutos_ed=''
		if(mes<10){
			mes_ed='0'+mes
		}else{
			mes_ed=mes
		}
		if(dia<10){
			dia_ed='0'+dia
		}else{
			dia_ed=dia
		}
		if (hora<10){
			hora_ed='0'+hora
		}else{
			hora_ed=hora
		}
		if(minutos<10){
			minutos_ed='0'+minutos
		}else{
			minutos_ed=minutos
		}
		vhiscli_to_tbc_cirugint.cirifechabanio=anio+''+mes_ed+''+dia_ed
		vhiscli_to_tbc_cirugint.cirihorabanio=hora_ed+''+minutos_ed
	}
	if(globals.vFuerasurado=="Si"){
		var anio1=0
		var mes1=0
		var dia1=0
		var hora1=0
		var minutos1=0
		anio1= globals.var_ciri_fecrasura.getFullYear()
		mes1= globals.var_ciri_fecrasura.getMonth()+1
		dia1= globals.var_ciri_fecrasura.getDate()
		hora1= globals.var_ciri_fecrasura.getHours()
		minutos1= globals.var_ciri_fecrasura.getMinutes()
		var mes_ed1=''
		var dia_ed1=''
		var hora_ed1=''
		var minutos_ed1=''
		if(mes1<10){
			mes_ed1='0'+mes1
		}else{
			mes_ed1=mes1
		}
		if(dia1<10){
			dia_ed1='0'+dia1
		}else{
			dia_ed1=dia1
		}
		if (hora1<10){
			hora_ed1='0'+hora1
		}else{
			hora_ed1=hora1
		}
		if(minutos1<10){
			minutos_ed1='0'+minutos1
		}else{
			minutos_ed1=minutos1
		}
		vhiscli_to_tbc_cirugint.cirifecharasura=anio1+''+mes_ed1+''+dia_ed1
		vhiscli_to_tbc_cirugint.cirihorarasura=hora_ed1+''+minutos_ed1
	}
	
	var anio2=0
	var mes2=0
	var dia2=0
	var hora2=0
	var minutos2=0
	anio2 = globals.vFechaInicio.getFullYear()
	mes2 = globals.vFechaInicio.getMonth()+1
	dia2 = globals.vFechaInicio.getDate()
	hora2 = globals.vFechaInicio.getHours()
	minutos2 = globals.vFechaInicio.getMinutes()
	var mes_ed2=''
	var dia_ed2=''
	var hora_ed2=''
	var minutos_ed2=''
	if(mes2<10){
		mes_ed2='0'+mes2
	}else{
		mes_ed2 = mes2
	}
	if(dia2<10){
		dia_ed2='0'+dia2
	}else{
		dia_ed2=dia2
	}
	if(hora2<10){
		hora_ed2='0'+hora2
	}else{
		hora_ed2=hora2
	}
	if(minutos2<10){
		minutos_ed2='0'+minutos2
	}else{
		minutos_ed2=minutos2
	}
	vhiscli_to_tbc_cirugint.cirifechainicio=anio2+''+mes_ed2+''+dia_ed2
	
	vhiscli_to_tbc_cirugint.cirihorainicio=hora_ed2+''+minutos_ed2
	
	if(globals.vFechaFinal!=null){
		var anio3=0
		var mes3=0
		var dia3=0
		var hora3=0
		var minutos3=0
		anio3 = globals.vFechaFinal.getFullYear()
		mes3 = globals.vFechaFinal.getMonth()+1
		dia3 = globals.vFechaFinal.getDate()
		hora3 = globals.vFechaFinal.getHours()
		minutos3 = globals.vFechaFinal.getMinutes()
		var mes_ed3=''
		var dia_ed3=''
		var hora_ed3=''
		var minutos_ed3=''
		if(mes3<10){
			mes_ed3='0'+mes3
		}else{
			mes_ed3=mes3
		}
		if(dia3<10){
			dia_ed3='0'+dia3
		}else{
			dia_ed3=dia3
		}
		if (hora3<10){
			hora_ed3='0'+hora3
		}else{
			hora_ed3=hora3
		}
		if(minutos3<10){
			minutos_ed3='0'+minutos3
		}else{
			minutos_ed3=minutos3
		}
		vhiscli_to_tbc_cirugint.cirifechafinal=anio3+''+mes_ed3+''+dia_ed3
	
		vhiscli_to_tbc_cirugint.cirihorafinal=hora_ed3+''+minutos_ed3
	}	
	
	vhiscli_to_tbc_cirugint.cirianestesia=globals.vAnesChek
	
	if(vhiscli_to_tbc_cirugint.tbc_cirugint_to_tbc_obstetri_gesta.getSize()>0){
			vhiscli_to_tbc_cirugint.ciriobstgesta=globals.current_obstetri_gest
			vhiscli_to_tbc_cirugint.ciriobsttipo=0
			vhiscli_to_tbc_cirugint.ciriparto=1
	}
	
	try{
		databaseManager.saveData(vhiscli_to_tbc_cirugint.getRecord(1))
		var error3 = ''
		var error4 = ''
		var array1 = databaseManager.getFailedRecords(vhiscli_to_tbc_cirugint)
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
	//databaseManager.refreshRecordFromDatabase(vhiscli_to_tbc_cirugint,-1)
	elements.btn_graba_preparacion.visible=false
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"A207449E-6984-4A3B-9E6F-F4F97D473EBE"}
 */
function onShow_preparacion_dtl(firstShow, event) {
	elements.btn_graba_preparacion.visible=true
	controller.focusFirstField()
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
 * @properties={typeid:24,uuid:"0BB9D450-5AD8-4C30-B8EA-BE891E289452"}
 */
function onDataChange_ciri_fecrasura(oldValue, newValue, event) {
	if(globals.FechaHoraAmayorB(globals.var_ciri_fecrasura, globals.vFechaInicio)){
		plugins.dialogs.showInfoDialog("Error en fecha u hora del Rasurado","El rasurado debe ser anterior al inicio de la Cirugía")
		return false
	}else{
		elements.ciri_conquerasura_lbl.requestFocus()
		return true
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
 * @properties={typeid:24,uuid:"3464AD20-5A77-450E-8843-DDD42B57F6A9"}
 */
function onDataChange_conquerasura(oldValue, newValue, event) {
	elements.btn_graba_preparacion.requestFocus()
	
	return true
}

/**
 * TODO generated, please specify type and doc for the params
 * @param codigo
 *
 * @properties={typeid:24,uuid:"7C5E481A-D1C0-4D3C-815E-DEF35D0671AE"}
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