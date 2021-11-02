/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"E939C6F5-442A-4FF2-B619-4535EEF95783",variableType:4}
 */
var f_nroSolicitud = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"4E934963-D7BD-4221-BF73-8B529A1E8259",variableType:93}
 */
var f_fechaSolicitud = null;

/**
 * @properties={typeid:35,uuid:"FB814169-B26B-4ED8-ABA7-CF0C76A14C57",variableType:-4}
 */
var $isDirty = false;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"6E4C2F7D-6C80-4EAF-BAA5-5F5E8DA86746",variableType:93}
 */
var $fechaSolicitud = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"014AFBCD-FC3F-4520-8B12-697855FAF331"}
 */
var $paciente = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"F5C46BD4-0B9F-4A11-AA9E-2EF8626AF3DF"}
 */
var $id = null;

/**
 * @properties={typeid:35,uuid:"821B30FF-0B97-4CF3-BFFC-3E60C78D2F5B",variableType:-4}
 */
var $fs_protesis = databaseManager.getFoundSet("desal","prote_solicitud_protesis");

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"696CE545-185A-4E1B-A376-7D39001BD2D4"}
 */
var f_messageErrorItem = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"E34F24D5-B379-4B62-8362-892FD5A2A585"}
 */
var f_plan = '';

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"41C3757F-C632-406D-8D86-A9045BF98570",variableType:93}
 */
var f_fechaRecepcion = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"53A9ECB2-DD85-4DD7-899A-550BEEC554CD",variableType:93}
 */
var f_fechaImplante = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"FE238395-2B5B-4654-BB08-9C369C148B6D",variableType:93}
 */
var f_horaImplante = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"4D7366E0-3154-470F-A358-9BDA4E7CF8A2"}
 */
var f_edad = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"47ABA99A-F80F-46F9-B948-872CB8C98560"}
 */
var f_histClinUnica = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"AE322B32-9A81-471E-8742-98D81D6F8424"}
 */
var f_cobertura = '';

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"EAAA4AD3-D804-4216-A3FB-DFC417410DE9",variableType:4}
 */
var f_lugarEntrega = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"ACDBE348-B605-4DAE-9800-85AB38FED626"}
 */
var f_paciente = '';

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"235E04A0-66F5-4EED-81CC-0D41502F45C5",variableType:4}
 */
var f_tipoPrioridad = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"DFCD2E6D-6ECA-4131-B8D2-46FDC0773BFF",variableType:4}
 */
var f_tipoPaciente = null;

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"6E1DB7C2-66E1-4068-BC85-EAAAE3A98BDD"}
 */
function onShow_inicializarForm(firstShow, event) {
	/*
	var dsProtesis = databaseManager.createEmptyDataSet();
	dsProtesis.addColumn('codigo');
	dsProtesis.addColumn('detalle');
	dsProtesis.addColumn('cantidad');
	var $frm = solutionModel.getForm('protesis_lst_protesis');
	var $tipos = [JSColumn.TEXT,JSColumn.TEXT, JSColumn.TEXT];
	$frm.dataSource = dsProtesis.createDataSource('protesis_lst_protesis', $tipos);
	forms.protesis_lst_protesis.controller.recreateUI();
	*/
	
	f_fechaSolicitud = utils.timestampToDate(application.getServerTimeStamp());
	globals.smsciru_fecha_actual=application.getServerTimeStamp();
	elements.grp_cabecera.readOnly=true
	elements.btn_grabar.enabled=false
	elements.btn_nuevo.enabled=true
	elements.btn_limpia.enabled=false
	elements.lbl_procesando.visible=false
	forms.smsciru_frm_texto.foundset.clear()
	
	setIsDirty(false);
	globals.smsciru_close=true
	elements.tabless_1.enabled=false
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"427433F4-801D-4A2F-AFCE-F4F424E1DE9C"}
 */
function onAction_buscarPaciente(event) {

	globals.smsciru_gbl_eventSourceButton = 1;
	openSearch();
	if (f_paciente!=null&&f_paciente!=''){
		setDefaultBorderElements()
	}
	
}

/**
 * @properties={typeid:24,uuid:"23E22F1A-76D0-4FAD-A792-2A1B4AA8901A"}
 */
function openSearch(){
	
	if(f_tipoPaciente != null){
		
		// Ambulatorio
		if(f_tipoPaciente == 1){
			globals.smsciru_gbl_eventSourceButton = 0
			globals.vAlfa=f_paciente
			var win = application.createWindow("seleccion_ambulatorio",JSWindow.MODAL_DIALOG);	
		    win.title= 'Búsqueda de Pacientes Ambulatorios';
		    win.resizable = false;
		    win.show(forms.smsciru_frm_tab_hist_clin_unica);
		}
		
		// Internado
		if(f_tipoPaciente == 0){
			var win2 = application.createWindow("seleccion_internado",JSWindow.MODAL_DIALOG);	
		    win2.title= 'Búsqueda de Pacientes Internados';
		    win2.resizable = false;
		    win2.show(forms.smsciru_frm_buscarInternado_dg);
		}
		
		elements.combo_texto.requestFocus();
	}
	else{
		globals.DIALOGS.showWarningDialog("Atención",'Debe seleccionar tipo de paciente.',"Aceptar")
	}
}

/**
 * @properties={typeid:24,uuid:"8C7CD5E7-1F4D-4F8D-BDE8-5E5EBB7CC757"}
 */
function inicializarForm() {
	
	$id = null;
	f_nroSolicitud = null;
	f_histClinUnica = "";
	$paciente = "";
	f_cobertura = "";
	f_edad = "";
	f_fechaImplante = null;
	f_fechaRecepcion = null;
	f_horaImplante = null;
	f_lugarEntrega = null;
	f_paciente = null;
	f_plan = "";
	f_tipoPaciente = null;
	globals.smsciru_textosms=null
	elements.txt_histClinUnica.border='LineBorder,2,#008040';
	elements.lbl_paciente.text = 'Paciente';
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"2FE0A26C-54E5-48E0-88FD-FE4C22D45308"}
 * @AllowToRunInFind
 */
function onAction_nuevo(event) {
	databaseManager.revertEditedRecords(forms.smsciru_frm_texto.foundset)
	forms.smsciru_frm_texto.foundset.texto=''
	elements.grp_cabecera.readOnly=false
	inicializarForm();
	elements.btn_grabar.enabled=true
	elements.btn_limpia.enabled=true
	elements.btn_nuevo.enabled=false
	globals.smsciru_close=false
	//elements.btn_limpia.enabled=true
	//setDefaultBorderElements();
	//setEditableElements(true);
	elements.cbo_tipoPaciente.requestFocus();
	setIsDirty(false);
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"B934C745-1F4B-4A44-8F70-6095678FDA9D"}
 */
function onAction_busquedaRapida(event) {
	globals.vHisclistrynro = f_paciente;
	if(globals.vHisclistrynro != '' && globals.vHisclistrynro != null){
		globals.smsciru_gbl_eventSourceButton = 0;
		openSearch();
	}
	else{
		globals.DIALOGS.showWarningDialog("Atención",'Debe ingresar Nro. de paciente o apellido.',"Aceptar")
	}
	
	setIsDirty(true);
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"B57525FB-27A0-4871-8F36-3222236397B8"}
 */
function onAction_cboTipoPaciente(event) {
	
	f_paciente = '';
	f_cobertura = '';
	f_edad = '';
	f_histClinUnica = '';
	$paciente = '';
	f_plan = '';
	
	
	if(f_tipoPaciente == 1){
		elements.lbl_paciente.text = 'H. Clinica U. - Pac.';
		elements.txt_paciente.requestFocus();
	}
	
	if(f_tipoPaciente == 0){
		elements.lbl_paciente.text = 'Nro. Internación-Pac.';
		elements.txt_paciente.requestFocus();
	}
	
	setIsDirty(true);
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"10E40F15-DA85-46E2-9B7C-C81CE9E08537"}
 */
function onAction_agregarProtesis(event) {
	
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"F9ADC4B4-FE5B-4389-AF67-B75BDA2CCB1E"}
 */
function onAction_cboPrioridadUrgente(event) {
	
	
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"3A857EA4-03BD-4A10-9466-CA491BE4EF42"}
 * @AllowToRunInFind
 */
function onAction_btnGrabar(event) {
	
	if(isValidDataForm()){
	  var respuesta = globals.DIALOGS.showQuestionDialog("¡Atención!","¿Está seguro de enviar por SMS los datos ingresados?","No","Si")
	  if(respuesta=="Si"){
		elements.grp_cabecera.readOnly=true
		elements.btn_grabar.enabled=false
		elements.btn_limpia.enabled=false
		elements.btn_nuevo.enabled=false
		elements.lbl_procesando.visible=true
		application.updateUI()
		if($id == null || $id == 'null'){
			
			$id = application.getUUID();
			//Verificando si existe clave primaria
			var sql = "SELECT EXISTS( SELECT id FROM smsciru_envios WHERE id='" + $id + "')"
			var dsExists = databaseManager.getDataSetByQuery('desal',sql,null,-1);
			while(dsExists.getValue(1,1) == 1){
				$id = application.getUUID();
				sql = "SELECT EXISTS( SELECT id FROM smsciru_envios WHERE id='" + $id + "')"
				dsExists = databaseManager.getDataSetByQuery('desal',sql,null,-1);
			}
			var hora_actual = application.getServerTimeStamp()
			var hora = hora_actual.getHours()
			var minutos = hora_actual.getMinutes()
			var hora_ed = ''
			var minutos_ed = ''
			if (hora < 10){
				hora_ed = '0'+hora
			}else{
				hora_ed = hora
			}
			if (minutos < 10){
				minutos_ed = '0'+minutos
			}else{
				minutos_ed = minutos
			}
			var paciente_nro_ed = ''
			var tipopac_ed = ''
			if (f_tipoPaciente==0){
				tipopac_ed = 'Int'
				paciente_nro_ed = globals.smsciru_formatearNumeroIntervencion(globals.vHiscli)
			}else{
				tipopac_ed = 'Amb'
				paciente_nro_ed = globals.vHiscli
			}
			globals.smsciru_hiscliunica=f_histClinUnica;
			var area = 0; 
			area =	smsciru_histcliunica_to_tbc_hist_cab.histcabcodareacel_2;
			var nro_cel = 0;
			nro_cel = smsciru_histcliunica_to_tbc_hist_cab.histcabnrolineacel_2;
			var area_ed ='';
			var nro_cel_ed = '';
			if(area<100){
				area_ed = area.toString().substr(0,2); 
			}else{
				if(area<1000){
					area_ed = area.toString().substr(0,3); 
				}else{
					if(area<10000){
						area_ed = area.toString().substr(0,4);
					}
				}
			}
			if(nro_cel<1000000){
				nro_cel_ed = nro_cel.toString().substr(0,6);
			}else{
				if(nro_cel<10000000){
					nro_cel_ed = nro_cel.toString().substr(0,7);
				}else{
					nro_cel_ed = nro_cel;
				}
			}
			
			forms.smsciru_frm_texto.foundset.id = $id;
			forms.smsciru_frm_texto.foundset.tipo_pac = tipopac_ed;
			forms.smsciru_frm_texto.foundset.fecha = globals.smsciru_fecha_actual;
			forms.smsciru_frm_texto.foundset.hcu = f_histClinUnica;
			forms.smsciru_frm_texto.foundset.apeynom = utils.stringTrim($paciente);
			forms.smsciru_frm_texto.foundset.hora = hora_ed+':'+minutos_ed
			forms.smsciru_frm_texto.foundset.nro_celular = area_ed+''+nro_cel_ed;
			forms.smsciru_frm_texto.foundset.nro_paciente = globals.vHiscli;
			forms.smsciru_frm_texto.foundset.nro_paciente_ed = paciente_nro_ed;
			
			smsciru_envia_sms();
			
			databaseManager.startTransaction()
			var result = databaseManager.saveData(forms.smsciru_frm_texto.foundset);
			if(result){
				databaseManager.commitTransaction();
				globals.DIALOGS.showInfoDialog("Resultado","Los datos de envío se guardaron correctamente.","Aceptar");
								
			}
			else{
				var error1 = ''
				var error2 = ''
				var array = databaseManager.getFailedRecords()
				for (var i = 0; i < array.length; i++) {
					var record = array[i];
					var jstable = databaseManager.getTable(record);
					var tableSQLName = jstable.getSQLName();
					error1='Error de Grabación en Tabla:' + tableSQLName + ' en server:' + jstable.getServerName() + ' falló la grabación. Avise urgente a Sistemas, por favor!'
					error2='Error en grabación '+record.exception;
					if (record.exception.getErrorCode() == ServoyException.RECORD_VALIDATION_FAILED) {
				// exception thrown in pre-insert/update/delete event method
						var thrown = record.exception.getValue()
						//plugins.dialogs.showErrorDialog("Error de grabación","Record validation failed: " + thrown)
					}
				}
				databaseManager.rollbackTransaction()
				if(error1!=''){
					globals.DIALOGS.showErrorDialog("Error de grabación","Record validation failed: " + thrown)
					globals.DIALOGS.showErrorDialog("Error en grabacion de Histórico",error1,"Aceptar")
					globals.DIALOGS.showErrorDialog("Error en grabacion de Histórico",error2,"Aceptar")
				}
				globals.DIALOGS.showErrorDialog("Error en grabación","Se ha producido un error de grabación. "+'\n'+"Avise a Sistemas, por favor.", "Aceptar")
			}
			
			forms.smsciru_frm_texto.foundset.texto=''
			forms.smsciru_frm_texto.foundset.clear()
			databaseManager.revertEditedRecords(forms.smsciru_frm_texto.foundset)
			elements.grp_cabecera.readOnly=true
			inicializarForm();
			globals.smsciru_textosms=null
			databaseManager.refreshRecordFromDatabase(smsciru_fecha_actual_to_smsciru_envios,-1)
			elements.tabless.tabIndex=1
			elements.btn_grabar.enabled=false
			elements.btn_limpia.enabled=false
			elements.btn_nuevo.enabled=true
			elements.lbl_procesando.visible=false
			globals.smsciru_close=true
			elements.btn_nuevo.requestFocus()
			application.updateUI()
			
		}
	}
}
}


/**

 * @private
 *
 * @properties={typeid:24,uuid:"B81446BC-80E4-4410-92C8-E22846DDB8CF"}
 */
function formToObject() {
	var obj = new Object();
	obj.id = 0;
	obj.tipo_paciente = 1;
	obj.tipo_prioiridad = 2;
	obj.fecha_implante = null;
	obj.hora_implante= null;
	obj.fecha_recepcion = null;
	obj.lugar_entrega_id = 2;
	obj.paciente_id = 5;
	
	return obj;
}

/**

 * @private
 *
 * @properties={typeid:24,uuid:"C7A9BB30-EBBD-4DAF-A557-609BB5642027"}
 */
function isValidDataForm() {
	var isValid = true;	
	var messageError = "No ha sido posible enviar y guardar el aviso. Corrija los siguientes errores y vuelva a intentar."
	var borderError = 'LineBorder,1,#ff0000';
	setDefaultBorderElements();
		
	if(f_tipoPaciente == null){
		elements.cbo_tipoPaciente.border = borderError;
		messageError += "\nDebe seleccionar tipo paciente.";        
        isValid = false;
	}
	
	if(f_paciente == null || f_paciente == ''){
		elements.txt_paciente.border = borderError;
		messageError += "\nDebe ingresar paciente.";        
        isValid = false;
	}
	if(f_histClinUnica == null || f_histClinUnica == ''){
		elements.txt_histClinUnica.border = borderError;
		messageError += "\nDebe ingresar Historia Clínica Única.";        
        isValid = false;
	}
	if(globals.smsciru_textosms == null || globals.smsciru_textosms == ''){
		elements.combo_texto.border = borderError;
		messageError += "\nDebe seleccionar un tipo de texto.";        
        isValid = false;
	}
	if(forms.smsciru_frm_texto.texto == null || forms.smsciru_frm_texto.texto == ''){
		forms.smsciru_frm_texto.elements.area_texto.border = borderError;
		messageError += "\nDebe ingresar un texto.";        
        isValid = false;
	}
	
	if(!isValid){
		globals.DIALOGS.showWarningDialog("Atención",messageError,"Aceptar")
		elements.cbo_tipoPaciente.requestFocus();
	}
	
	return isValid;
	
}

/**

 * @private
 *
 * @properties={typeid:24,uuid:"D1FDDC80-661D-4B2C-8C96-7EBD1A671C9D"}
 */
function setDefaultBorderElements() {
	var border = 'LineBorder,1,null';
	elements.cbo_tipoPaciente.border = 'LineBorder,1,#abadb3';
	elements.txt_paciente.border = border;

	
}

/**

 * @private
 *
 * @properties={typeid:24,uuid:"183BF649-690E-456E-9FC1-9603F2A3BD9F"}
 */
function setIsDirty(dirty) {
	$isDirty = dirty;
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"30A002E1-04EA-4A60-AB72-2ED23846CF17"}
 */
function onAction_cldFechaImplante(event) {
	setIsDirty(true);
}

/**

 * @private
 *
 * @properties={typeid:24,uuid:"662A9BAB-54F6-4524-9265-01DAD934B1A9"}
 */
function setEditableElements(editable) {
	
	elements.btn_buscarPaciente.enabled = editable;
	elements.btn_grabar.enabled = editable;
	
	elements.cbo_tipoPaciente.enabled = editable;
	
	
	
	elements.cld_fechaSolicitud.enabled = editable;
	
	elements.tabless.enabled = editable;
	
	elements.txt_paciente.enabled = editable;
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"DE3ED39E-634B-4104-A153-53E8CF7273B7"}
 */
function onAction_combo_texto(event) {
	//elements.grp_cabecera.readOnly=true
	databaseManager.revertEditedRecords(forms.smsciru_frm_texto.foundset)
	forms.smsciru_frm_texto.foundset.newRecord()
	forms.smsciru_frm_texto.foundset.texto=application.getValueListDisplayValue('vl_tipotexto',globals.smsciru_textosms)
	elements.combo_texto.border='LineBorder,1,null';
	forms.smsciru_frm_texto.elements.area_texto.border='LineBorder,1,null';
	if(globals.smsciru_textosms.toString()=='1'||globals.smsciru_textosms.toString()=='4'){
		elements.tabless_1.enabled=true
		elements.tabless_1.tabIndex=1
		forms.smsciru_frm_texto.elements.area_texto.requestFocus()
	}else{
		elements.tabless_1.enabled=false
		elements.btn_grabar.requestFocus()
	}
}

/**

 * @private
 *
 * @properties={typeid:24,uuid:"445CAEB0-F350-40CD-B547-CC7650D8EAEB"}
 */
function smsciru_envia_sms() {
	plugins.UserManager.register( "Hypertelia", "q9SA5eCyb085cvATVO8s9onGe3iBzJyCTel8Y7J72BuG599wodOiU5OL26/pkKyv" );
	var vServer = plugins.UserManager.Server();
	var texto = forms.smsciru_frm_texto.foundset.texto;
	var fnumero = '';
	var url=''
	var largo_url=application.getServerURL().length
	if (largo_url<24){
		url=application.getServerURL()
		fnumero='3484360393'
	}else{
		url=application.getServerURL().substr(0,23)
		var puerto = url.split(':');
		if(puerto[2]=='9080'){
			fnumero=globals.DIALOGS.showInputDialog(puerto[2],"Ingrese el número de celular a enviar la prueba",'3484360393')
		}else{
			fnumero=forms.smsciru_frm_texto.foundset.nro_celular;
			
		}
	}

	//fnumero=forms.smsciru_frm_texto.foundset.nro_celular;
	//fnumero = '3484360393';
	 //var vString = vServer.executeCommand('ssh -l svysc 10.200.0.90 -C "sh sh-pruebaservoy1"');
	//var vString = vServer.executeCommand("`/usr/bin/curl --insecure --progress-bar -X POST -F 'number=03484360393' -F 'text=Prueba de comando' https://10.200.0.65:44443/EnvioSMS.php`");
	//var vString = vServer.executeCommand("/usr/bin/curl  --insecure https://10.200.0.65:44443/EnvioSMS.php?number=3484360393&text=Hola Mundo");
	//var vString = vServer.executeCommand("/app/servoy/scripts/sh-curl "+3484360393+" "+ftexto1+" "+ftexto2+" "+ftexto1+" "+ftexto2+" "+ftexto1+" "+ftexto2+" "+ftexto1+" "+ftexto2);
	var vString = vServer.executeCommand("/app/servoy/scripts/sh-curl "+fnumero+" "+texto);
	forms.smsciru_frm_texto.foundset.estado=vString;
	// var respuesta = globals.DIALOGS.showInfoDialog("Resultado",vString,"Ok")
	//plugins.dialogs.showInfoDialog("Prueba de shell",vString)
	//application.output(vString)

}
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"4347007B-3AFB-4E7D-ACC3-EBAF935CCFDB"}
 */
function onAction_btn_limpia(event) {
	var respuesta = globals.DIALOGS.showQuestionDialog("¡Atención!","¿Está seguro de limpiar los datos ingresados?","No","Si")
	if(respuesta=="Si"){
		$id = null;
		f_histClinUnica = "";
		$paciente = "";
		f_cobertura = "";
		f_edad = "";
		f_paciente = null;
		f_plan = "";
		f_tipoPaciente = null;
		globals.smsciru_textosms=null
		elements.btn_grabar.enabled=false
		elements.btn_limpia.enabled=false
		elements.btn_nuevo.enabled=true
		elements.lbl_paciente.text = 'Paciente';
		elements.txt_histClinUnica.border='LineBorder,2,#008040';
		elements.grp_cabecera.readOnly=true
		databaseManager.revertEditedRecords(forms.smsciru_frm_texto.foundset);
		elements.combo_texto.border='LineBorder,1,null';
		forms.smsciru_frm_texto.elements.area_texto.border='LineBorder,1,null';
		setDefaultBorderElements()
		globals.smsciru_close=true
		application.updateUI()
	}
}

/**
 * Handle hide window.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"D5D33DE0-CC75-43DA-83FF-08D9E0B13CA8"}
 */
function onHide_enviasms_ini(event) {
	if(globals.smsciru_close){
		var $name = application.getActiveWindow().getName()
		var $win = application.getWindow($name)
		if($win!=null){
			$win.hide()
			$win.destroy()
		}
		globals.smsciru_close=false
		return true
	}else{
		var respuesta = globals.DIALOGS.showQuestionDialog("¡Atención!","¿Está seguro de salir y perder los datos ingresados?","No","Si")
		if(respuesta=="Si"){
			databaseManager.revertEditedRecords(forms.smsciru_frm_texto.foundset)
			var $name1 = application.getActiveWindow().getName()
			var $win1 = application.getWindow($name1)
			if($win1!=null){
				$win1.hide()
				$win1.destroy()
			}
			globals.smsciru_close=false
			return true
		}else{
			return false
		}
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"FCFF49BD-F96F-49DB-AEAB-E337F737C88A"}
 */
function onAction_prueba_mail(event) {
	var userName = 'aviso@sanatoriocolegiales.com.ar';

	var passWord = 'avi32avi';
	

	var properties = new Array();

	properties[0] = 'mail.smtp.host=smtp.sanatoriocolegiales.com.ar';

	properties[1] = 'mail.smtp.auth=true';

	properties[2] = 'mail.smtp.username=' + userName;

	properties[3] = 'mail.smtp.password=' + passWord;

	properties[4] = 'mail.smtp.port=25';

	//properties[5] = 'mail.smtp.starttls.enable=true';

	
var attachment1 = plugins.mail.createBinaryAttachment('RecetarioSC2.pdf',plugins.file.readFile('c:/temp/RecetarioSC2.pdf'));

//var attachment2 = plugins.mail.createBinaryAttachment('proto61.pdf',plugins.file.readFile('c:/temp/proto61.pdf'));

var success = plugins.mail.sendMail('fhuertas@cirendsa.com.ar', 'aviso@sanatoriocolegiales.com.ar', 'Prueba de envioa de PDF', 'Protocolo en formato PDF',null,null,attachment1, properties);

if (!success)

{

    plugins.dialogs.showWarningDialog('Alert','Failed to send mail','OK');

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
 * @private
 *
 * @properties={typeid:24,uuid:"CDCAC84E-24B1-4F74-9316-FBA05D6887EE"}
 */
function onDataChange(oldValue, newValue, event) {
	// TODO Auto-generated method stub
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
 * @properties={typeid:24,uuid:"776F8D26-23B4-4760-A340-B2751F8642EB"}
 */
function onDataChange_tipopaciente(oldValue, newValue, event) {
	f_paciente = '';
	f_cobertura = '';
	f_edad = '';
	f_histClinUnica = '';
	$paciente = '';
	f_plan = '';
	
	
	if(f_tipoPaciente == 1){
		elements.lbl_paciente.text = 'H. Clinica U. - Pac.';
		elements.txt_paciente.requestFocus();
	}
	
	if(f_tipoPaciente == 0){
		elements.lbl_paciente.text = 'Nro. Internación-Pac.';
		elements.txt_paciente.requestFocus();
	}
	
	setIsDirty(true);
	return true
}
