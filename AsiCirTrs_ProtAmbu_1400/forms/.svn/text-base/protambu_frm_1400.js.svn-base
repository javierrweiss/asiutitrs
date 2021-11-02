/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"3EC378EF-DEC5-4C86-8EBA-F5A8414FB43C"}
 */
var fItemsFaltantes = '';

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"347352B3-9142-4ED3-96FF-AE9FF2F9163E",variableType:4}
 */
var fCirujano_tipo_ie = 0;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"053AFEA6-C862-4F34-8E6C-B43463742FD5"}
 */
var fCirujano_Apeynom = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"635890DB-9726-44B1-B17A-10EB271373B4"}
 */
var fCirujano = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"058F16AA-2B24-4A04-A2E1-097EEB0BD172"}
 */
var fdes_interven = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"4898955E-3E65-4F51-AB70-AC3CAE438CD1"}
 */
var fInterven = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"6FBCC83C-817A-47EB-B93F-BE01BD4CE6A6"}
 */
var fAfiliado = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"91BC9761-E886-4360-9C35-493636F1F2B5"}
 */
var fPlan = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"93FCFB53-D2DB-4CC2-80D3-F4BE437923AC"}
 */
var fSexo = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"29691F34-BFC7-44C6-B135-C71615374572"}
 */
var fEdad = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"42BA756A-33CF-4EA3-A69A-8C719C147FC5"}
 */
var fcobertura = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"F55AB395-5DD0-4B83-8322-AAF06B702698"}
 */
var vString = 'null';

/**
 * Handle changed data.
 *
 * @param oldValue old value
 * @param newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"BF63CBC4-96E7-4FFB-B988-5FDB526B9F86"}
 */
function onDataChange_AnestesiaChek(oldValue, newValue, event) {
	if(newValue==1){
		if(!BuscoAnestesia()){
			plugins.dialogs.showInfoDialog("Evaluación PreAnestésica","FALTA EVALUACION PREOPERATORIA DEL ANESTESIÓLOGO")
			newValue=0
			oldValue=0
			globals.vAnesChek=0
			elements.tab_extension.setTabEnabledAt(5,false)
			return false
		}else{
			elements.tab_extension.setTabEnabledAt(5,true)
			return true
		}	
	}else{
		elements.tab_extension.setTabEnabledAt(5,false)
		return true
	}

}

/**
 * @properties={typeid:24,uuid:"088A5EBC-1CA1-4A46-A56F-82AEB141BFB5"}
 */
function BuscoAnestesia() {
	globals.vAnestesiaOk=false
	if(protambu1400_vs_to_tbc_anes_ambu.getSize()>0){
		globals.vAnestesiaOk=true
		return true
	}else{
		return false
	}
}

/**
 * @properties={typeid:24,uuid:"47F68EF5-9574-45B4-A73E-1C52815E664B"}
 */
function valida_campos_obligatorios() {
	fItemsFaltantes=''
	var retorno=true
	if(fInterven==''||fInterven==null){
		fItemsFaltantes+="Falta ingresar la intervención"+'\n'
		retorno=false
	}
	if(globals.vEsHemodinamia==null){
		fItemsFaltantes+="Falta indicar si es o no es de Hemodinamia"+'\n'
		retorno=false
	}
	if(globals.vAnesChek==null){
		fItemsFaltantes+="Falta indicar si lleva anestesia"+'\n'
		retorno=false
	}
	if(globals.vQuirofano==0){
		fItemsFaltantes+="Falta ingresar el número de Quirofano"+'\n'
		retorno=false
	}
	if(globals.vFechaInicio==0||globals.vFechaInicio==null){
		retorno=false
	}
	if(protambul1400_legcirujano_to_tbc_medicos_personal.getSize()<1||fCirujano_Apeynom==''){
		fItemsFaltantes+="Falta ingresar el cirujano responsable"+'\n'
		retorno=false
	}
	if(protambu1400_interven_to_tbc_interven.getSize()<1){
		fItemsFaltantes+="Falta ingresar un código de intervención válido"+'\n'
		retorno=false
	}
	return retorno
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"C2F360E7-4EDA-4381-B990-63FDDE32B147"}
 * @AllowToRunInFind
 */
function onAction_Alta_Nuevo_protocolo(event) {
	if(valida_campos_obligatorios()){
		if(!buscaProtocoloAbierto(globals.protambu1400_legcirujano)){
			return
		}
		var win = application.createWindow("pinzaini",JSWindow.MODAL_DIALOG)
		win.title = "Pinzas al Inicio";
		win.setSize(400,300)
		win.show(forms.protambu_PinzasInicio)
		//application.output(forms.PinzasInicio.f_pinzasinicio)
		if(!forms.protambu_PinzasInicio.f_pinzasinicio){
			return
		}
		
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

		
		
		var fecha_actual = application.getServerTimeStamp()
		globals.vFechaInicio= fecha_actual
		var anio=fecha_actual.getFullYear()
		var mes=fecha_actual.getMonth()+1
		var mes_ed
		if((fecha_actual.getMonth()+1) < 10){
			mes_ed="0"+mes
		}else{
			mes_ed=mes
		}
		var dia=fecha_actual.getDate()
		var dia_ed
		if(fecha_actual.getDate()<10){
			dia_ed="0"+dia
		}else{
			dia_ed=dia
		}
		var fecha_hoy=anio.toString()+''+mes_ed.toString()+''+dia_ed.toString()
		var hora=utils.stringToNumber(fecha_actual.getHours().toString())
		var min =utils.stringToNumber(fecha_actual.getMinutes().toString())
		var min_ed=''
	    var hora_ed=''
	    if(hora < 10){
	    	hora_ed='0'+hora
		}else{
			hora_ed=hora
		}	    
		if (min < 10){
			min_ed='0'+min
		}else{
			min_ed=min
		}
		
		var hora_hoy=hora_ed+''+min_ed
		globals.vFechaCarga=fecha_hoy
		globals.vHoraCarga=hora_hoy
		globals.vInterven0=fInterven
		globals.vInterven=fInterven
		
		protambu1400_vhiscli_to_tbc_ciruguar.newRecord()
		globals.InicializarDatosDeRelacion(protambu1400_vhiscli_to_tbc_ciruguar,"asistencial","tbc_ciruguar")
		protambu1400_vhiscli_to_tbc_ciruguar.cirghistclinica=globals.vHiscli
		protambu1400_vhiscli_to_tbc_ciruguar.cirgfechaingreso=globals.protambu1400_fechaingreso
		protambu1400_vhiscli_to_tbc_ciruguar.cirghoraingreso=globals.protambu1400_hora_ingreso
		protambu1400_vhiscli_to_tbc_ciruguar.cirgfechainicio = globals.vFechaCarga
		protambu1400_vhiscli_to_tbc_ciruguar.cirghorainicio = globals.vHoraCarga
		protambu1400_vhiscli_to_tbc_ciruguar.cirginterven=globals.vInterven0
		protambu1400_vhiscli_to_tbc_ciruguar.cirgusoanestesia=globals.vAnesChek
		protambu1400_vhiscli_to_tbc_ciruguar.cirgnroquirofa=globals.vQuirofano
		protambu1400_vhiscli_to_tbc_ciruguar.cirgfechafinal=0
		protambu1400_vhiscli_to_tbc_ciruguar.cirgpinzasinicio=globals.vPinzasInicio
		protambu1400_vhiscli_to_tbc_ciruguar.cirgprotocolo=globals.vNroProtocolo
		if(globals.vEsHemodinamia=="Si"){
			protambu1400_vhiscli_to_tbc_ciruguar.cirgtipointerven=2
			globals.vEstadoCirugia=3
		}else{
			protambu1400_vhiscli_to_tbc_ciruguar.cirgtipointerven=0
			globals.vEstadoCirugia=1
		}
				
		try {
		
			databaseManager.saveData(protambu1400_vhiscli_to_tbc_ciruguar.getRecord(1))
			
		}catch (msg){
			(plugins.dialogs.showInfoDialog("Error al grabar Ciruguar",msg.toString(),"ok"))
			//	application.output(msg.rhinoException.getMessage())
		}
		var error1=''
		var error2=''
		var array = databaseManager.getFailedRecords(protambu1400_vhiscli_to_tbc_ciruguar)
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
			plugins.dialogs.showErrorDialog("Error en grabacion de CiruGuar",error1,"Ok")
			plugins.dialogs.showErrorDialog("Error en grabacion de CiruGuar",error2,"Ok")
			plugins.dialogs.showInfoDialog("Reintentar","Reintente grabar!!")
		}else{
			
			protambul1400_vhiscli_to_tbc_guardia.guar_medico=globals.protambu1400_legcirujano
			protambul1400_vhiscli_to_tbc_guardia.guar_tipomed=globals.protambu1400_io_legcirujano
			try {
				
				databaseManager.saveData(protambul1400_vhiscli_to_tbc_guardia.getRecord(1))
				
			}catch (msg){
				(plugins.dialogs.showInfoDialog("Error al grabar Ciruguar",msg.toString(),"ok"))
				//	application.output(msg.rhinoException.getMessage())
			}
			error1=''
			error2=''
			array = databaseManager.getFailedRecords(protambul1400_vhiscli_to_tbc_guardia)
			for (i = 0; i < array.length; i++) {
				record = array[i];
				jstable = databaseManager.getTable(record);
				tableSQLName = jstable.getSQLName();
				error1='Error de Grabación en Tabla:' + tableSQLName + ' en server:' + jstable.getServerName() + ' falló la grabación. Avise urgente a Sistemas, por favor!'
				error2='Error en grabación '+record.exception;
				if (record.exception.getErrorCode() == ServoyException.RECORD_VALIDATION_FAILED) {
					 thrown = record.exception.getValue()
					plugins.dialogs.showErrorDialog("Error de grabación","Record validation failed: " + thrown)
				}
			}
			if(error1!=''){
				plugins.dialogs.showErrorDialog("Error en grabacion de CiruGuar",error1,"Ok")
				plugins.dialogs.showErrorDialog("Error en grabacion de CiruGuar",error2,"Ok")
				plugins.dialogs.showInfoDialog("Reintentar","Reintente grabar!!")
			}else{
				protambu1400_vhiscli_to_tbc_ciruguar.loadAllRecords()
				elements.tab_extension.enabled=true
				elements.tab_extension.tabIndex=1
				elements.alta_protocolo.visible=false
				forms.protambu_EvaluacionPrequirurgica.controller.focusFirstField()
				forms.protambu_EvaluacionPrequirurgica.elements.cirgpresmaxpre.requestFocus()
			}
		}
	}else{
		if(fItemsFaltantes!=''){
			fItemsFaltantes+='No se puede generar Nuevo protocolo.'
			globals.DIALOGS.showWarningDialog("Items sin cargar",fItemsFaltantes,"Ok")
		}
	}
}

/**
 * // TODO generated, please specify type and doc for the params
 * @param {String} form
 *
 * @properties={typeid:24,uuid:"71A41BF5-D3C7-4D54-BA8E-A0C4EED89770"}
 */
function ConvierteCheksaGrabarSN(form) {
	for (var i = 0; i < forms[form].elements.allnames.length; i++) {
		var name = forms[form].elements.allnames[i]; // nombre de el elemento
		var elem = forms[form].elements[name]; // propiedades del elemento
		
		if (elem.getElementType() == 'CHECK') {
			switch (forms[form].foundset[name]) {
				case "1":forms[form].foundset[name] = 'S';break;
				case "0":forms[form].foundset[name] = 'N';break;
				default:forms[form].foundset[name] = ' ';break;
			}
		}
		
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"AEA32AF2-8385-47D7-AC24-D679BD0A343A"}
 */
function onAction_Interven0(event) {
	var win = application.createWindow("c",JSWindow.MODAL_DIALOG)
	win.title = "Búsqueda de Código de Intervención";
	win.setSize(600,600)
	win.show(forms.protambu_frm_busqueda_interven)
	//fInterven=globals.protambu1400_interven
	/*
	if (fInterven!=161&&fInterven!=162&&fInterven!=878){
		forms.protambu_frm_1400.elements.tab_extension.setTabEnabledAt(6,false)
	}else{
		forms.protambu_frm_1400.elements.tab_extension.setTabEnabledAt(6,true)
	}
	*/
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"60B12172-8702-4AC3-83F1-1591C2A7C681"}
 */
function onShow_form116(firstShow, event) {
		
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"5D78E5B6-C715-425A-B4D0-205DBA5BED6C"}
 */
function onAction_vInterven0(event) {
	var largo = fInterven.length;
	var esnumero = true;
	for (var i= 0;i<largo && esnumero == true; i++){
		if (fInterven.charCodeAt(i)< 48 || fInterven.charCodeAt(i) > 57){
			esnumero = false
		}
	}
	
    if (esnumero){
    	globals.protambu1400_interven=fInterven
		/*
    	if(protambu1400_interven_to_tbc_interven.getSize()>0){
    		if (fInterven!=161&&fInterven!=162&&fInterven!=878){
    			forms.protambu_frm_1400.elements.tab_extension.setTabEnabledAt(6,false)
    		}else{
    			forms.protambu_frm_1400.elements.tab_extension.setTabEnabledAt(6,true)
    		}	
		}
		*/
	}else{
		globals.protambu1400_intervenAlfa=fInterven.toUpperCase()
		var win = application.createWindow("c",JSWindow.MODAL_DIALOG)
		win.title = "Búsqueda de Código de Intervención";
		win.setSize(600,600)
		win.show(forms.protambu_frm_busqueda_interven)
		//fInterven=globals.protambu1400_interven
		/*
		if (fInterven!=161&&fInterven!=162&&fInterven!=878){
			forms.protambu_frm_1400.elements.tab_extension.setTabEnabledAt(6,false)
		}else{
			forms.protambu_frm_1400.elements.tab_extension.setTabEnabledAt(6,true)
		}
		*/
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"13781944-6689-45F4-996B-B5902646E306"}
 */
function onAction_busco_Cirujano(event) {
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"69ACCEE0-F88C-4F77-B99B-7B2B6FD408D5"}
 */
function onAction_volver_forms116_dtl(event) {
	
	if(!controloTextosCirugia(1)){
		plugins.dialogs.showErrorDialog("Error en Operación efectuada","Falta grabar texto de operación ingresado")
		return
	}
	if(!controloTextosCirugia(3)){
		plugins.dialogs.showErrorDialog("Error en Monitoreo","Falta grabar texto de monitoreo ingresado")
		return
	}
	globals.vClose=true
	actualizaEstadoGuardiaLiberado()
	if(globals.protambu1400_SolucionQueLlama=='AtiendeConsultorio'||globals.protambu1400_SolucionQueLlama=='LLama_Soluciones'){
		var name=application.getActiveWindow()
		name.getName()
		var $win=application.getWindow(name.getName())
		if($win!=null){
			$win.hide()
			$win.destroy()
		}
	}else{
		application.showForm("protambu_frm_menu_principal")
	}
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
 * @properties={typeid:24,uuid:"8A2DB451-F255-49FC-B9D5-1556F721F064"}
 */
function onDataChange_vciri_legciru(oldValue, newValue, event) {
	if(fCirujano!=null&&fCirujano!=''&&fCirujano!=0){
		var largo = fCirujano.length;
		var esnumero = true;
		for (var i= 0;i<largo && esnumero == true; i++){
			if (fCirujano.charCodeAt(i)< 48 || fCirujano.charCodeAt(i) > 57){
				esnumero = false
			}
		}
		if(esnumero){
			var largo_legajo = fCirujano.toString().length - 1
			var digito_verif = fCirujano.toString().substr(largo_legajo,1)
			if(largo_legajo>0){
				globals.protambu1400_legcirujano = fCirujano.toString().substr(0,largo_legajo)
			}
			if(protambul1400_legcirujano_to_tbc_medicos_personal.getSize()>0){
				if(validoDigitoVerificador(globals.protambu1400_legcirujano,digito_verif)){
					if(buscaProtocoloAbierto(globals.protambu1400_legcirujano)){
						fCirujano_Apeynom=protambul1400_legcirujano_to_tbc_medicos_personal.medperapeynom
						fCirujano_tipo_ie=protambul1400_legcirujano_to_tbc_medicos_personal.medpertipoie
						globals.protambu1400_vCodigoMedico=protambul1400_legcirujano_to_tbc_medicos_personal.medpercod
						globals.protambu1400_legcirujano=protambul1400_legcirujano_to_tbc_medicos_personal.medpercod
						fCirujano=protambul1400_legcirujano_to_tbc_medicos_personal.medpercod
						globals.LegajoApeynomCiru=''
						globals.protambu1400_io_legcirujano=protambul1400_legcirujano_to_tbc_medicos_personal.medpertipoie
						if(globals.protambu1400_SolucionQueLlama!='AtiendeConsultorio'){
							elements.ciri_nroquirofa.requestFocus()
						}
						return true
					}else{
						return false
					}
				}else{
					if(digito_verif==0){
						if(buscaProtocoloAbierto(globals.protambu1400_legcirujano)){
							fCirujano_Apeynom=protambul1400_legcirujano_to_tbc_medicos_personal.medperapeynom
							fCirujano_tipo_ie=protambul1400_legcirujano_to_tbc_medicos_personal.medpertipoie
							globals.protambu1400_vCodigoMedico=protambul1400_legcirujano_to_tbc_medicos_personal.medpercod
							globals.protambu1400_legcirujano=protambul1400_legcirujano_to_tbc_medicos_personal.medpercod
							fCirujano=protambul1400_legcirujano_to_tbc_medicos_personal.medpercod
							globals.LegajoApeynomCiru=''
							globals.protambu1400_io_legcirujano=protambul1400_legcirujano_to_tbc_medicos_personal.medpertipoie
							if(globals.protambu1400_SolucionQueLlama!='AtiendeConsultorio'){
								elements.ciri_nroquirofa.requestFocus()
							}
							return true
						}else{
							return false
						}
					}else{
						plugins.dialogs.showInfoDialog("Error","El Digito Verificador ingresado no corresponde con el legajo")
						return false
					}
				}
			}else{
				return false
			}
		}else{
			globals.protambu1400_cirujanoalf=fCirujano.toLocaleUpperCase()
			globals.vTipoMedico=1
			var win = application.createWindow("c",JSWindow.MODAL_DIALOG)
			win.title = "Búsqueda de Código de Cirujano";
			win.setSize(850,550)
			win.show(forms.protambu_frm_busqueda_medicos_personal)
			if(globals.protambu1400_vCodigoMedico!=0&&globals.protambu1400_vCodigoMedico!=null){
				fCirujano_Apeynom=globals.protambu1400_vApeynomMedico
				fCirujano=globals.protambu1400_vCodigoMedico
				fCirujano_tipo_ie=globals.vtipo_ciru_ie
				globals.protambu1400_legcirujano=globals.protambu1400_vCodigoMedico
				globals.protambu1400_io_legcirujano=globals.vtipo_ciru_ie
				globals.LegajoApeynomCiru=''
				return true
			}else{
				return false
			}
		}
	}else{
		return false
	}
}

/**
 * @param {number} legajo  
 * @param {string} digito
 * 
 * @properties={typeid:24,uuid:"CE6D0355-E4EF-48B6-9C5F-C738C86B40DA"}
 */
function validoDigitoVerificador(legajo, digito) {
	var aux_dig = new Array(5);
	var lega = 0;
	lega = legajo;
	if(lega<100){
		aux_dig[0] = 0
		aux_dig[1] = 0
		aux_dig[2] = 0
		aux_dig[3] = lega.toString().substr(0,1);
		aux_dig[4] = lega.toString().substr(1,1);
	}else{
		if (lega<1000){
			aux_dig[0] = 0
			aux_dig[1] = 0
			aux_dig[2] = lega.toString().substr(0,1);
			aux_dig[3] = lega.toString().substr(1,1);
			aux_dig[4] = lega.toString().substr(2,1);
		}else{
			if(lega<10000){
				aux_dig[0] = 0
				aux_dig[1] = lega.toString().substr(0,1);
				aux_dig[2] = lega.toString().substr(1,1);
				aux_dig[3] = lega.toString().substr(2,1);
				aux_dig[4] = lega.toString().substr(3,1);
			}else{
				if(lega<100000){
					aux_dig[0] = lega.toString().substr(0,1);
					aux_dig[1] = lega.toString().substr(1,1);
					aux_dig[2] = lega.toString().substr(2,1);
					aux_dig[3] = lega.toString().substr(3,1);
					aux_dig[4] = lega.toString().substr(4,1);
				}
			}
		}
	}
	var verificador = 0;
	verificador = utils.stringToNumber(aux_dig[1]) + utils.stringToNumber(aux_dig[2]) * 3 + utils.stringToNumber(aux_dig[3]) * 9 + utils.stringToNumber(aux_dig[4]) * 7;
	var larg = verificador.toString().length - 1;
	if(digito!=verificador.toString().substr(larg,1)){
		return false
	}else{
		return true
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"A3EA0D4B-CFD7-414E-A059-E63148035132"}
 */
function onAction_ayuda_frm_116(event) {
	//globals.textoAyuda='AYUDA-5'
	var win = application.createWindow("p",JSWindow.MODAL_DIALOG)
	win.title = "Ayuda en Protocolo Quirúrgico";
	win.setLocation(810,300)
	win.setSize(500,350)
	//win.show(forms.frm_ayuda_gral_Z)
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
 * @properties={typeid:24,uuid:"E3F47705-5548-4B10-BF89-453670476E3D"}
 */
function onDataChange_quirofano(oldValue, newValue, event) {
	globals.vFechaInicio=application.getServerTimeStamp()
	//elements.ciri_fecinicio.requestFocus()
	elements.alta_protocolo.requestFocus()
	return true
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"BB7021CF-DF9B-4304-A5AD-4E57AFB9EE4A"}
 */
function onAction_fechaInicio(event) {
	if(globals.vFechaInicio==null){
		globals.vFechaInicio=application.getServerTimeStamp()
		elements.alta_protocolo.requestFocus()
	}else{
		globals.vFechaAhora9=application.getServerTimeStamp()
		if(globals.vFechaInicio>globals.vFechaAhora9){
			globals.vFechaInicio=null
			plugins.dialogs.showErrorDialog("Error en Fecha y Hora Inicio","La fecha y/o la hora de Inicio son mayores a la fecha y hora actual","Ok")
			elements.ciri_fecinicio.requestFocus()
		}else{
			elements.alta_protocolo.requestFocus()
		}
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"11E57762-3BC6-442C-BAB8-EC64041815A1"}
 */
function onAction_ciri_legciru(event) {
	
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
 * @properties={typeid:24,uuid:"09292AAF-3FEF-4D14-954A-E2C96ABA861D"}
 */
function onDataChange_vfechaInicio(oldValue, newValue, event) {
	if(globals.vFechaInicio==null){
		globals.vFechaInicio=application.getServerTimeStamp()
		elements.alta_protocolo.requestFocus()
		return true
	}else{
		globals.vFechaAhora9=application.getServerTimeStamp()
		if(globals.vFechaInicio>globals.vFechaAhora9){
			globals.vFechaInicio=null
			plugins.dialogs.showErrorDialog("Error en Fecha y Hora Inicio","La fecha y/o la hora de Inicio son mayores a la fecha y hora actual","Ok")
			return false
		}else{
			elements.alta_protocolo.requestFocus()
			return true
		}
	}
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"60C36A24-3A82-4E54-BCDF-FA4AE812532F"}
 */
function onAction_next_1(event) {
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"4AD41318-C0EB-4343-8BDC-77D93C117F16"}
 */
function onAction_next_ciri_nroquirofa(event) {
	elements.ciri_nroquirofa.requestFocus()
}

/**
 * @properties={typeid:24,uuid:"1C60B90E-A5C5-430F-B563-7D18EB699BDD"}
 */
function GrabaConRuncobol() {

}

/**
 * TODO generated, please specify type and doc for the params
 * @param codigo
 *
 * @properties={typeid:24,uuid:"AE7B49C1-74FC-41D1-B4C6-7544E7BB578F"}
 */
function buscaProtocoloAbierto(codigo) {
	var fecha_ingreso_tope = ''
	var mes_ingreso_tope_ed = ''
	var anio_ingreso_tope = utils.stringToNumber(globals.protambu1400_fechaingreso.toString().substr(0,4))
	var mes_ingreso_tope = utils.stringToNumber(globals.protambu1400_fechaingreso.toString().substr(4,2))
	if(mes_ingreso_tope==1){
		mes_ingreso_tope = 12
		anio_ingreso_tope--
	}else{
		mes_ingreso_tope--
	}
	if(mes_ingreso_tope<10){
		mes_ingreso_tope_ed = '0' + mes_ingreso_tope
	}else{
		mes_ingreso_tope_ed = mes_ingreso_tope
	}
	fecha_ingreso_tope = anio_ingreso_tope +''+mes_ingreso_tope_ed+'01'
	var protocolo_abierto='';
	var fecha = ' ';
	var hora = ' ';
	var encontro_proto=false;
	var kant_protocolos_abiertos=0;
	var historias='';
	
	var sql =  "select GUA.Guar_Medico, VAL.VcirCodAyud1, VAL.VcirCodAyud2, CIR.CirgProtocolo, GUA.Guar_HistClinica, GUA.Guar_FechaIngreso, GUA.Guar_HoraIngreso \
				from tbc_guardia GUA inner join tbc_val_ciru VAL on VAL.VcirHistClinica=GUA.Guar_HistClinica and VAL.VcirFechaIngreso=GUA.Guar_FechaIngreso and VAL.VcirHoraIngreso=GUA.Guar_HoraIngreso \
				inner join tbc_ciruguar CIR on CIR.CirgHistClinica=GUA.Guar_HistClinica and CIR.CirgFechaIngreso=GUA.Guar_FechaIngreso and CIR.CirgHoraIngreso=GUA.Guar_HoraIngreso \
				where Guar_Especialidad=5 and Guar_Estado<4 and Guar_FechaIngreso1>="+fecha_ingreso_tope
		
	var dataset = databaseManager.getDataSetByQuery("asistencial",sql,null,-1)
	var kanti = dataset.getMaxRowIndex()
	if(kanti>0){
		for(var i=1;i<=kanti&&!encontro_proto;i++){
			if(dataset.getValue(i,1)==codigo||dataset.getValue(i,2)==codigo||dataset.getValue(i,3)==codigo){
				if(dataset.getValue(i,1)==0){
					fecha=globals.IntegerToDate(dataset.getValue(i,6))
					hora=dataset.getValue(i,7)
					protocolo_abierto+="la Guardia con HC:"+dataset.getValue(i,5)+' Fec.'+fecha+' Hora:'+hora.toString().substr(0,2)+":"+hora.toString().substr(2,2)
				}else{
					kant_protocolos_abiertos++
					encontro_proto=true
					protocolo_abierto+="el protocolo "+dataset.getValue(i,4)+' '
				}
				historias+=dataset.getValue(i,5)+' '+dataset.getValue(i,6)+' '+dataset.getValue(i,7)
			}	
		}
		if(kant_protocolos_abiertos>0){
			plugins.dialogs.showWarningDialog("Fecha Ingreso Tope","Fecha Ingreso Tope "+fecha_ingreso_tope,"Ok")
			plugins.dialogs.showWarningDialog("Detalle historias","Historias: "+historias,"Ok")
			plugins.dialogs.showWarningDialog("Protocolo sin Cerrar","El Profesional con código "+codigo+" tiene "+protocolo_abierto+" sin cerrar","Ok")
			return false
		}else{
			return true
		}
	}else{
		return true
	}
}

/**
 * Handle focus lost event of the element.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"B128B733-BD1E-45A0-ABCF-8FA8BB01CB84"}
 */
function onFocusLost_legciru(event) {
	if(!buscaProtocoloAbierto(globals.vciri_legciru)){
		elements.fld_cirujanoresponsable.requestFocus()
	}
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"0F9E61D1-4AB0-4703-A7A7-EAE1A0A08794"}
 */
function onShow_protambu_frm_1400(firstShow, event) {
	elements.ciri_fecfinal.visible=false
	elements.ciri_fecfinal_lbl.visible=false
	globals.vClose=false
	actualizaEstadoGuardiaTomado()
	if(protambu1400_vhiscli_to_tbc_ciruguar.getSize()>0){
		globals.protambu1400_vItemTexto=1
		if(protambu1400_vs_to_tbl_proamb_t.getSize()>0){
			globals.proto1=protambu1400_vs_to_tbl_proamb_t.texto
		}
		globals.protambu1400_vItemTexto=2
		if(protambu1400_vs_to_tbl_proamb_t.getSize()>0){
			globals.proto4=protambu1400_vs_to_tbl_proamb_t.texto
			globals.protambu1400_responsableHemoterapia=protambu1400_vs_to_tbl_proamb_t.linea_cab
		}
		globals.protambu1400_vItemTexto=3
		if(protambu1400_vs_to_tbl_proamb_t.getSize()>0){
			globals.proto5=protambu1400_vs_to_tbl_proamb_t.texto
			globals.protambu1400_responsableMonitoreo=protambu1400_vs_to_tbl_proamb_t.linea_cab
		}
		globals.protambu1400_vItemTexto=4
		if(protambu1400_vs_to_tbl_proamb_t.getSize()>0){
			globals.proto6=protambu1400_vs_to_tbl_proamb_t.texto
		}
		globals.protambu1400_vItemTexto=5
		if(protambu1400_vs_to_tbl_proamb_t.getSize()>0){
			globals.proto7=protambu1400_vs_to_tbl_proamb_t.texto
		}
		globals.protambu1400_vItemTexto=6
		if(protambu1400_vs_to_tbl_proamb_t.getSize()>0){
			globals.proto9=protambu1400_vs_to_tbl_proamb_t.texto
		}
		
		globals.vNroProtocolo=protambu1400_vhiscli_to_tbc_ciruguar.cirgprotocolo
		globals.vEsHemodinamia=protambu1400_vhiscli_to_tbc_ciruguar.cirgtipointerven
		globals.vAnesChek=protambu1400_vhiscli_to_tbc_ciruguar.cirgusoanestesia
		fInterven=protambu1400_vhiscli_to_tbc_ciruguar.cirginterven
		globals.protambu1400_interven=fInterven
		fdes_interven=protambu1400_interven_to_tbc_interven.itv_descripcion
		globals.vQuirofano=protambu1400_vhiscli_to_tbc_ciruguar.cirgnroquirofa
		globals.vFechaInicio=globals.vFechaInicio.setFullYear(protambu1400_vhiscli_to_tbc_ciruguar.cirgfechainicio.toString().substr(0,4))
		globals.vFechaInicio=globals.vFechaInicio.setMonth(utils.stringToNumber(protambu1400_vhiscli_to_tbc_ciruguar.cirgfechainicio.toString().substr(4,2))-1)
		globals.vFechaInicio=globals.vFechaInicio.setDate(protambu1400_vhiscli_to_tbc_ciruguar.cirgfechainicio.toString().substr(6,2))
		globals.vFechaInicio=globals.vFechaInicio.setHours(protambu1400_vhiscli_to_tbc_ciruguar.cirghorainicio.toString().substr(0,2))
		globals.vFechaInicio=globals.vFechaInicio.setMinutes(protambu1400_vhiscli_to_tbc_ciruguar.cirghorainicio.toString().substr(2,2))
		globals.protambu1400_cirujanoalf=protambul1400_vhiscli_to_tbc_guardia.guar_medico
		globals.protambu1400_legcirujano=protambul1400_vhiscli_to_tbc_guardia.guar_medico
		globals.protambu1400_io_legcirujano=protambul1400_vhiscli_to_tbc_guardia.guar_tipomed
		globals.protambu1400_cirujanoApeynom=protambul1400_legcirujano_to_tbc_medicos_personal.medperapeynom
		fCirujano=protambul1400_vhiscli_to_tbc_guardia.guar_medico
		fCirujano_tipo_ie=protambul1400_vhiscli_to_tbc_guardia.guar_tipomed
		fCirujano_Apeynom=protambul1400_legcirujano_to_tbc_medicos_personal.medperapeynom
		elements.tab_extension.enabled=true
		if(globals.vAnesChek==1){
			if(protambu1400_vs_to_tbc_anes_ambu.getSize()>0){
				elements.tab_extension.setTabEnabledAt(5,true)
			}else{
				elements.tab_extension.setTabEnabledAt(5,false)
				globals.vAnesChek=0
			}
		}else{
			elements.tab_extension.setTabEnabledAt(5,false)
		}
		if(globals.protambu1400_SolucionQueLlama=='AtiendeConsultorio'||globals.protambu1400_SolucionQueLlama=='LLama_Soluciones'){
			elements.cirg_anestesia.enabled=false
			elements.ciri_nroquirofa.enabled=false
		}else{
			elements.cirg_anestesia.enabled=true
			elements.ciri_nroquirofa.enabled=true
		}
		elements.tab_extension.tabIndex=1
		elements.alta_protocolo.visible=false
	}else{
		globals.vAnesChek=null
		globals.vEsHemodinamia=null
		elements.Intervencion.enabled=true
		elements.EsHemo.enabled=true
		elements.ciri_interven.enabled=false
		elements.ciri_interven_code.enabled=false
		elements.busca_interven.enabled=false
		elements.alta_protocolo.visible=true
		elements.tab_extension.enabled=false
		elements.alta_protocolo.visible=true
		if(globals.protambu1400_SolucionQueLlama=='AtiendeConsultorio'||globals.protambu1400_SolucionQueLlama=='Llama_Soluciones'){
			elements.cirg_anestesia.enabled=false
			elements.ciri_protocolo.enabled=false
			globals.vAnesChek=0
			globals.vQuirofano=0
		}else{
			elements.cirg_anestesia.enabled=true
			elements.ciri_protocolo.enabled=true
		}
		controller.focusFirstField()
		elements.EsHemo.requestFocus()
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"04A2ED0D-ED72-4951-9C1B-BAD25E0F4D21"}
 * @AllowToRunInFind
 */
function onAction_cirujanoresponsable(event) {
	var largo = fCirujano.length;
	var esnumero = true;
	for (var i= 0;i<largo && esnumero == true; i++){
		if (fCirujano.charCodeAt(i)< 48 || fCirujano.charCodeAt(i) > 57){
			esnumero = false
		}
	}
	
    if (esnumero){
    	var fs = databaseManager.getFoundSet('maestros','tbc_medicos_personal')
		if(fs.find()){
			fs['medpercod']=utils.stringToNumber(fCirujano.substr(0,largo-1))
			fs.search()
			if(fs.getSize()>0){
				fs.setSelectedIndex(1)
				fCirujano_Apeynom=fs['medperapeynom']
				fCirujano_tipo_ie=fs['medpertipoie']
				globals.protambu1400_vCodigoMedico=fs['medpercod']
				globals.protambu1400_legcirujano=fs['medpercod']
				globals.protambu1400_io_legcirujano=fs['medpertipoie']
				fCirujano=fs['medpercod']
				globals.LegajoApeynomCiru=''
				
			}else{
				fCirujano_Apeynom='Profesional Inexistente'
				fCirujano_tipo_ie=0
				fCirujano=''
				globals.protambu1400_vCodigoMedico=0
				globals.LegajoApeynomCiru=''
				
			}
		}
    }else{
		globals.protambu1400_cirujanoalf=fCirujano.toLocaleUpperCase()
		globals.vTipoMedico=1
		var win = application.createWindow("c",JSWindow.MODAL_DIALOG)
		win.title = "Búsqueda de Código de Cirujano";
		win.setSize(850,550)
		win.show(forms.protambu_frm_busqueda_medicos_personal)
		fCirujano_Apeynom=globals.protambu1400_vApeynomMedico
		fCirujano=globals.protambu1400_vCodigoMedico
		fCirujano_tipo_ie=globals.vtipo_ciru_ie
		globals.protambu1400_legcirujano=globals.protambu1400_vCodigoMedico
		globals.protambu1400_io_legcirujano=globals.vtipo_ciru_ie
		globals.LegajoApeynomCiru=''
    }
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"B27BD01A-BF97-4427-A457-56DD951BA762"}
 */
function onAction_busco_cirujano(event) {
	globals.vTipoMedico=1
	globals.protambu1400_vCodigoMedico=0
	var win = application.createWindow("c",JSWindow.MODAL_DIALOG)
	win.title = "Búsqueda de Código de Especialista";
	win.setSize(850,550)
	win.show(forms.protambu_frm_busqueda_medicos_personal)
	if(globals.protambu1400_vCodigoMedico!=0){
		fCirujano=globals.protambu1400_vCodigoMedico
		fCirujano_tipo_ie=globals.vtipo_ciru_ie
		fCirujano_Apeynom=globals.protambu1400_vApeynomMedico
		globals.protambu1400_legcirujano=globals.protambu1400_vCodigoMedico
		globals.protambu1400_io_legcirujano=globals.vtipo_ciru_ie
	}else{
		elements.fld_cirujanoresponsable.requestFocus()
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
 * @properties={typeid:24,uuid:"A4F8D6BC-85C6-42D8-BA45-E5E9AC8F308C"}
 */
function onDataChange_EsHemodinamia(oldValue, newValue, event) {
	elements.busca_interven.enabled=true
	elements.ciri_interven.enabled=true
	elements.ciri_interven_code.enabled=true
	return true
}

/**
 * @properties={typeid:24,uuid:"3FBEC97F-12DD-4EE6-832D-C1DDE0A86B2F"}
 */
function actualizaEstadoGuardiaTomado(){
	if(protambul1400_vhiscli_to_tbc_guardia.getSize()>0){
		protambul1400_vhiscli_to_tbc_guardia.guar_estado=3
		protambul1400_vhiscli_to_tbc_guardia.guar_estado1=3
		protambul1400_vhiscli_to_tbc_guardia.guar_estado3=3
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
	}
}

/**
 * @properties={typeid:24,uuid:"3C2BBF6D-3B6F-4FC3-99F0-DDAF59EA0EDC"}
 */
function actualizaEstadoGuardiaLiberado(){
	if(protambul1400_vhiscli_to_tbc_guardia.getSize()>0){
		if(protambul1400_vhiscli_to_tbc_guardia.guar_estado<4){
			protambul1400_vhiscli_to_tbc_guardia.guar_estado=2
			protambul1400_vhiscli_to_tbc_guardia.guar_estado1=2
			protambul1400_vhiscli_to_tbc_guardia.guar_estado3=2
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
		}
	}
}
/**
 * Handle hide window.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"89CAB95F-F9A9-4904-88D8-F863EAA9F629"}
 */
function onHide_frm_1400(event) {
	//actualizaEstadoGuardiaLiberado()
	return globals.vClose
}

/**
 * TODO generated, please specify type and doc for the params
 * @param grupo
 *
 * @properties={typeid:24,uuid:"5B6BC56E-9B22-4A4B-9085-DA3B6678050A"}
 */
function controloTextosCirugia(grupo){
	var retorno = false;
	if(grupo==1){
		if(protambu1400_vhiscli_to_tbc_ciruguar.cirgmarcadescrip==1){
			globals.protambu1400_vItemTexto=grupo
			if(protambu1400_vs_to_tbl_proamb_t.getSize()>0){
				if(protambu1400_vs_to_tbl_proamb_t.texto!=null){
					if(protambu1400_vs_to_tbl_proamb_t.texto.length>0){
						if(protambu1400_vs_to_tbl_proamb_t.texto==globals.proto1){
							retorno=true
						}else{
							retorno=false
						}
					}else{
						if(globals.proto1!=null){
							if(globals.proto1.length>0){
								retorno=false
							}else{
								retorno=true
							}
						}else{
							retorno=true
						}
					}
				}else{
					if(globals.proto1!=null){
						if(globals.proto1.length>0){
							retorno=false
						}else{
							retorno=true
						}
					}else{
						retorno=true
					}
				}
			}else{
				if(globals.proto1!=null){
					if(globals.proto1.length>0){
						retorno=false
					}else{
						retorno=true
					}
				}else{
					retorno=true
				}
			}
		}else{
			if(globals.proto1!=null){
				if(globals.proto1.length>0){
					retorno=false
				}else{
					retorno=true
				}
			}else{
				retorno=true
			}
		}
	}else{
		if(protambu1400_vhiscli_to_tbc_ciruguar.cirgmarcamonito==1){
			globals.protambu1400_vItemTexto=grupo
			if(protambu1400_vs_to_tbl_proamb_t.getSize()>0){
				if(protambu1400_vs_to_tbl_proamb_t.texto!=null){
					if(protambu1400_vs_to_tbl_proamb_t.texto.length>0){
						if(protambu1400_vs_to_tbl_proamb_t.texto==globals.proto5){
							retorno=true
						}else{
							retorno=false
						}
					}else{
						if(globals.proto5!=null){
							if(globals.proto1.length>0){
								retorno=false
							}else{
								retorno=true
							}
						}else{
							retorno=true
						}
					}
				}else{
					if(globals.proto5!=null){
						if(globals.proto5.length>0){
							retorno=false
						}else{
							retorno=true
						}
					}else{
						retorno=true
					}
				}
			}else{
				if(globals.proto5!=null){
					if(globals.proto5.length>0){
						retorno=false
					}else{
						retorno=true
					}
				}else{
					retorno=true
				}
			}
		}else{
			if(globals.proto5!=null){
				if(globals.proto5.length>0){
					retorno=false
				}else{
					retorno=true
				}
			}else{
				retorno=true
			}
		}
	}
	return retorno;
}