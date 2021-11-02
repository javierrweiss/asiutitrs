/**
 * Handle changed data.
 *
 * @param oldValue old value
 * @param newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"39660703-4003-40A4-98D9-BC7AFD250132"}
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
 * @properties={typeid:24,uuid:"227F2F19-0094-4211-B0AD-B8B1665BF318"}
 */
function onDataChange_fuebaniado(oldValue, newValue, event) {
	
	
	elements.btn_graba_preparacion.visible=true
	elements.combo_ayuna.requestFocus()
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
 * @properties={typeid:24,uuid:"8CE83C24-E640-4B83-A161-CFBA9803352B"}
 */
function onDataChange_ayunas(oldValue, newValue, event) {
	
	elements.btn_graba_preparacion.visible=true
	elements.combo_antitetanica.requestFocus()
	return true
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"E491CD72-C333-4E62-A0E6-4FA55ED4E31B"}
 */
function onAction_graba_Preparacion(event) {
	elements.btn_graba_preparacion.visible=false
	application.updateUI()
	if(protambul1400_vhiscli_to_tbc_guardia.guar_medico!=globals.protambu1400_legcirujano){
		if(buscaProtocoloAbierto(globals.protambu1400_legcirujano)){
			protambul1400_vhiscli_to_tbc_guardia.guar_medico=globals.protambu1400_legcirujano
			protambul1400_vhiscli_to_tbc_guardia.guar_tipomed=globals.protambu1400_io_legcirujano
			try {
				
				databaseManager.saveData(protambul1400_vhiscli_to_tbc_guardia.getRecord(1))
				
			}catch (msg){
				(plugins.dialogs.showInfoDialog("Error al grabar Guardia",msg.toString(),"ok"))
				//	application.output(msg.rhinoException.getMessage())
			}
			var error1=''
			var error2=''
			var array = databaseManager.getFailedRecords(protambul1400_vhiscli_to_tbc_guardia)
			for (var i = 0; i < array.length; i++) {
				var record = array[i];
				var jstable = databaseManager.getTable(record);
				var tableSQLName = jstable.getSQLName();
				error1='Error de Grabación en Tabla:' + tableSQLName + ' en server:' + jstable.getServerName() + ' falló la grabación. Avise urgente a Sistemas, por favor!'
				error2='Error en grabación '+record.exception;
				if (record.exception.getErrorCode() == ServoyException.RECORD_VALIDATION_FAILED) {
					 var thrown = record.exception.getValue()
					plugins.dialogs.showErrorDialog("Error de grabación","Record validation failed: " + thrown)
				}
			}
			if(error1!=''){
				plugins.dialogs.showErrorDialog("Error en grabacion de Guardia",error1,"Ok")
				plugins.dialogs.showErrorDialog("Error en grabacion de Guardia",error2,"Ok")
				plugins.dialogs.showInfoDialog("Reintentar","Reintente grabar!!")
			}
		}else{
			globals.DIALOGS.showErrorDialog("Atención!!","El cirujano ingresado tiene protocolos abiertos, NO se efectuará el cambio","OK")
		}
	}
	foundset.cirgusoanestesia=globals.vAnesChek
	foundset.cirgtipointerven=globals.vEsHemodinamia
	foundset.cirgnroquirofa=globals.vQuirofano
	foundset.cirginterven=forms.protambu_frm_1400.fInterven
	
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
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"885ED932-C9BD-4E5B-9269-E59D67511CF6"}
 */
function onShow_preparacion_dtl(firstShow, event) {
	elements.btn_graba_preparacion.visible=true
	controller.focusFirstField()
	elements.cirgpresmaxpre.requestFocus()
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
 * @properties={typeid:24,uuid:"F25FFD03-267C-4B21-B41F-5B90070C1398"}
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
 * @properties={typeid:24,uuid:"14BB516B-B43D-4BE0-B549-39BDA2AA4B3C"}
 */
function onDataChange_conquerasura(oldValue, newValue, event) {
	elements.btn_graba_preparacion.requestFocus()
	
	return true
}

/**
 * TODO generated, please specify type and doc for the params
 * @param codigo
 *
 * @properties={typeid:24,uuid:"D320F3DB-1E5A-40E5-A8E6-401E15167D07"}
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
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"448A53DF-31A5-493E-9753-4DB7C7DA8484"}
 */
function onAction_cirgpresmax(event) {
	elements.cirgpresminpre.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"D15BB444-EF93-4334-9A9B-4E1CE7250E35"}
 */
function onAction_cirgpresmin(event) {
	elements.cirgpulsopre.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"6E5EF092-92DB-4053-885F-40ECF9F88C22"}
 */
function onAction_cirgpulso(event) {
	elements.combo_banio.requestFocus()
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
 * @properties={typeid:24,uuid:"A81C2183-B344-4858-A743-683D9AA092D6"}
 */
function onDataChange_antitetanica(oldValue, newValue, event) {
	elements.btn_graba_preparacion.visible=true
	elements.btn_graba_preparacion.requestFocus()
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
 * @properties={typeid:24,uuid:"ABEF098E-E0E7-4D5E-BF5D-E9734C868C2D"}
 */
function onDataChange_cirgpresmax(oldValue, newValue, event) {
	elements.btn_graba_preparacion.visible=true
	return true
}
