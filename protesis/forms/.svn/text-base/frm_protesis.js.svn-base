/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"0A64E561-7BE2-4920-8EDB-17C1E2A7E75E",variableType:4}
 */
var f_nroSolicitud = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"868A46A0-DD74-4D41-BEE9-4CD24B73DE45",variableType:93}
 */
var f_fechaSolicitud = null;

/**
 * @properties={typeid:35,uuid:"A18776E5-12DB-419E-A415-41C9942C968C",variableType:-4}
 */
var $isDirty = false;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"6A109EDA-2EE2-4EB5-9B29-FBBA5753C2D7",variableType:93}
 */
var $fechaSolicitud = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"572B7551-8E48-4864-BADE-62706D280AA8"}
 */
var $paciente = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"02E2753F-2C4C-4413-919E-7ECF789C527C"}
 */
var $id = null;

/**
 * @properties={typeid:35,uuid:"84324E68-E85C-4915-91B8-8E1E4B05D967",variableType:-4}
 */
var $fs_protesis = databaseManager.getFoundSet("desal","prote_solicitud_protesis");

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"7ADDB1AB-83A1-46C2-A08A-FB86C55F442D"}
 */
var f_messageErrorItem = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"37F39A10-E0FA-4296-A0A0-A4136CB5BD0B"}
 */
var f_plan = '';

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"E686FF1B-2DAF-49F1-B1DE-A25626C7FB95",variableType:93}
 */
var f_fechaRecepcion = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"8092656A-8E65-452B-93AA-E0E8F1AAA93F",variableType:93}
 */
var f_fechaImplante = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"F34208C3-57F4-4089-BC86-7F2E1FC33D1C",variableType:93}
 */
var f_horaImplante = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"2600C8DF-3F36-4D91-95CA-E5FB23C9C491"}
 */
var f_edad = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"F435E71E-5D51-4572-94C0-EC8B57B0A0A6"}
 */
var f_histClinUnica = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"0486517B-5B46-41CD-A80A-C5A1D6B51F19"}
 */
var f_cobertura = '';

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"2CE917C8-9609-45BA-BACB-92EFC00A7E0F",variableType:4}
 */
var f_lugarEntrega = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"EC5BAE31-44F4-41D1-A782-D4EB387C1DDC"}
 */
var f_paciente = '';

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"2D0414A3-960E-4645-8826-B3FE50374DD1",variableType:4}
 */
var f_tipoPrioridad = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"9F005374-19D1-406B-AFD4-D3C6BDDBFA1D",variableType:4}
 */
var f_tipoPaciente = null;

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"6D1DBF26-CBB7-4443-9A6B-7BA4DD70E510"}
 */
function onShow_inicializarForm(firstShow, event) {
	
	var dsProtesis = databaseManager.createEmptyDataSet();
	dsProtesis.addColumn('codigo');
	dsProtesis.addColumn('detalle');
	dsProtesis.addColumn('cantidad');
	var $frm = solutionModel.getForm('protesis_lst_protesis');
	var $tipos = [JSColumn.TEXT,JSColumn.TEXT, JSColumn.TEXT];
	$frm.dataSource = dsProtesis.createDataSource('protesis_lst_protesis', $tipos);
	forms.protesis_lst_protesis.controller.recreateUI();
	
	f_fechaSolicitud = utils.timestampToDate(application.getServerTimeStamp());
	elements.cbo_tipoPaciente.requestFocus();
	setIsDirty(false);
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"3B2531C1-C866-4876-A98A-60FCA040D4B5"}
 */
function onAction_buscarPaciente(event) {

	globals.gbl_eventSourceButton = 1;
	openSearch();
	
}

/**
 * @properties={typeid:24,uuid:"95ACBDEA-B4DA-4FD7-AD22-5A47690A5094"}
 */
function openSearch(){
	
	if(f_tipoPaciente != null){
		
		// Ambulatorio
		if(f_tipoPaciente == 1){
			var win = application.createWindow("seleccion_ambulatorio",JSWindow.MODAL_DIALOG);	
		    win.title= 'Búsqueda de Pacientes Ambulatorios';
		    win.resizable = false;
		    win.show(forms.frm_protesis_buscarAmbulatorio_dg);
		}
		
		// Internado
		if(f_tipoPaciente == 0){
			var win2 = application.createWindow("seleccion_internado",JSWindow.MODAL_DIALOG);	
		    win2.title= 'Búsqueda de Pacientes Internados';
		    win2.resizable = false;
		    win2.show(forms.frm_protesis_buscarInternado_dg);
		}
		
		elements.txt_paciente.requestFocus();
	}
	else{
		globals.DIALOGS.showWarningDialog("Atención",'Debe seleccionar tipo de paciente.',"Aceptar")
	}
}

/**
 * @properties={typeid:24,uuid:"7054B3D7-119A-4406-9D31-1D87A7EF29DB"}
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
	f_tipoPrioridad = null;
	globals.prote_diagnostico = null;
	globals.prote_intervencion = null;
	forms.protesis_lst_protesis.foundset.clear();
	elements.lbl_paciente.text = 'Paciente';
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"29A3D318-86F5-43D1-BF05-9DD4FC56D611"}
 * @AllowToRunInFind
 */
function onAction_nuevo(event) {
	
	inicializarForm();
	setDefaultBorderElements();
	setEditableElements(true);
	elements.cbo_tipoPaciente.requestFocus();
	setIsDirty(false);
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"1261F998-1E3D-48E6-8DBB-4318C6347B42"}
 */
function onAction_busquedaRapida(event) {
	globals.pHisclistrynro = f_paciente;
	if(globals.pHisclistrynro != '' && globals.pHisclistrynro != null){
		globals.gbl_eventSourceButton = 0;
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
 * @properties={typeid:24,uuid:"B4692E79-640A-4F27-89AC-4DCB49ED8AA5"}
 */
function onAction_cboTipoPaciente(event) {
	
	f_paciente = '';
	f_cobertura = '';
	f_edad = '';
	f_histClinUnica = '';
	$paciente = '';
	f_plan = '';
	globals.prote_diagnostico = '';
	globals.prote_intervencion = '';
	
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
 * @properties={typeid:24,uuid:"0C4AC8FE-D7AC-4F50-B8C9-651DCC47838E"}
 */
function onAction_agregarProtesis(event) {
	/*
	forms.frm_protesis.elements.tabless.tabIndex = 2;
	globals.gbl_protesisNuevoItem = true,
	visibleElementsItem(true);
	forms.protesis_frm_agregarProtesis.f_protesis = '';
	forms.protesis_frm_agregarProtesis.f_observacion = '';
	forms.protesis_frm_agregarProtesis.elements.txt_protesis.requestFocus();
	*/
	
	globals.gbl_protesisNuevoItem = true;
	var win = application.createWindow("detalle_protesis_items",JSWindow.MODAL_DIALOG);	
    win.title= 'Detalle solicitud de protesis';
    win.resizable = false;
    //globals.gbl_cerrarDetalleProtocolo = false;
    win.show(forms.prote_dlgAgregarProtesisItems);
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"1C712D2E-5E0E-42D0-BA39-73172EAA74E8"}
 */
function onAction_cboPrioridadUrgente(event) {
	
	if(f_tipoPrioridad == 0){
		f_fechaImplante = utils.timestampToDate(application.getServerTimeStamp()); 
		f_fechaRecepcion = utils.timestampToDate(application.getServerTimeStamp());
		f_horaImplante = application.getServerTimeStamp();
		elements.cbo_lugarEntrega.requestFocus();
	}
	
	if(f_tipoPrioridad == 1){
		f_fechaImplante = null;
		f_fechaRecepcion = null;
		f_horaImplante = null;
		elements.cld_fechaImplante.requestFocus();
	}
	
	setIsDirty(true);
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"0E48C055-2697-44C8-B78F-330145368757"}
 * @AllowToRunInFind
 */
function onAction_btnGrabar(event) {
	
	var fsNroSolicitud = databaseManager.getFoundSet("parametros","numprot")
	fsNroSolicitud.find()
	fsNroSolicitud['nprot_1']=1
	fsNroSolicitud.search()
	if(fsNroSolicitud.getSize()>0){
		f_nroSolicitud = fsNroSolicitud['nprot_2'];
		f_nroSolicitud +=1;
	}
	 
	if(isValidDataForm()){
		
		if($id == null || $id == 'null'){
			
			$id = application.getUUID();
			//Verificando si existe clave primaria
			var sql = "SELECT EXISTS( SELECT id FROM prote_solicitud_protesis WHERE id='" + $id + "')"
			var dsExists = databaseManager.getDataSetByQuery('desal',sql,null,-1);
			while(dsExists.getValue(1,1) == 1){
				$id = application.getUUID();
				sql = "SELECT EXISTS( SELECT id FROM prote_solicitud_protesis WHERE id='" + $id + "')"
				dsExists = databaseManager.getDataSetByQuery('desal',sql,null,-1);
			}
			
			$fs_protesis.newRecord()
			$fs_protesis['id'] = $id;
			$fs_protesis['tipo_paciente'] = f_tipoPaciente;
			$fs_protesis['tipo_prioridad'] = f_tipoPrioridad;
			$fs_protesis['fecha_implante'] = f_fechaImplante;
			$fs_protesis['hora_implante'] = f_horaImplante;
			$fs_protesis['fecha_recepcion'] = f_fechaRecepcion;
			$fs_protesis['lugar_entrega_id'] = f_lugarEntrega;
			$fs_protesis['hist_clinica'] = f_histClinUnica;
			$fs_protesis['paciente'] = utils.stringTrim($paciente);
			//$fs_protesis['fecha_solicitud'] = utils.timestampToDate(application.getServerTimeStamp());
			$fs_protesis['fecha_solicitud'] = f_fechaSolicitud;
			$fs_protesis['diagnostico'] = utils.stringTrim(globals.prote_diagnostico);
			$fs_protesis['intervencion'] = utils.stringTrim(globals.prote_intervencion);
			$fs_protesis['nro_solicitud'] = f_nroSolicitud;
			
			var fs_protesisItems = databaseManager.getFoundSet("desal","prote_protesis_items");
			var maxItems = forms.protesis_lst_protesis.foundset.getSize();
			var k;
			var item;
			var sqlItem;
			var idItem;
			for(k= 1;k <= maxItems; k++){
				forms.protesis_lst_protesis.foundset.setSelectedIndex(k);
				item = forms.protesis_lst_protesis.foundset.getSelectedRecord();
				
				idItem = application.getUUID();
				// Verificando si existe clave primaria
				sqlItem = "SELECT EXISTS( SELECT id FROM prote_protesis_items WHERE id='" + idItem + "')";
				var dsExistsItem = databaseManager.getDataSetByQuery('desal',sqlItem,null,-1);
				while(dsExistsItem.getValue(1,1) == 1){
					idItem = application.getUUID();
					sqlItem = "SELECT EXISTS( SELECT id FROM prote_protesis_items WHERE id='" + idItem + "')";
					dsExistsItem = databaseManager.getDataSetByQuery('desal',sqlItem,null,-1);
				}
				
				fs_protesisItems.newRecord();
				fs_protesisItems['id'] = idItem;
				fs_protesisItems['codigo'] = item.codigo;
				fs_protesisItems['solicitud_protesis_id'] = $id;
				fs_protesisItems['detalle'] = item.detalle;
				fs_protesisItems['cantidad'] = item.cantidad;
			}
			
			// Actualizando tabla parametros
			fsNroSolicitud['nprot_2'] = f_nroSolicitud;
			
			databaseManager.startTransaction()
			var result = databaseManager.saveData();
			if(result){
				databaseManager.commitTransaction();
				globals.DIALOGS.showInfoDialog("Resultado","La solcicitud de protesis se guardo correctamente.","Aceptar");
				setEditableElements(false);
				
				// Enviando email
				var userName = 'aviso@sanatoriocolegiales.com.ar';
				var passWord = 'avi32avi';
				var properties = new Array();
				properties[0] = 'mail.smtp.host=smtp.sanatoriocolegiales.com.ar';
				properties[1] = 'mail.smtp.auth=true';
				properties[2] = 'mail.smtp.username=' + userName;
				properties[3] = 'mail.smtp.password=' + passWord;
				properties[4] = 'mail.smtp.port=25';

				//properties[5] = 'mail.smtp.starttls.enable=true';
				var attachment1 = plugins.mail.createBinaryAttachment('LB-CIRUINTER-20140216-20140301.pdf',plugins.file.readFile('c:/temp/LB-CIRUINTER-20140216-20140301.pdf'));
				//var attachment2 = plugins.mail.createBinaryAttachment('proto61.pdf',plugins.file.readFile('c:/temp/proto61.pdf'));
				//var success = plugins.mail.sendMail('fhuertas@cirendsa.com.ar', 'aviso@sanatoriocolegiales.com.ar', 'Prueba de envioa de PDF', 'Protocolo en formato PDF',null,null,attachment1, properties);
				//if (!success){
				if(1==1){
					globals.DIALOGS.showWarningDialog("Alert","No ha sido posible enviar las notificaciones de E-mail. Contacte al administrador del sistema.","Aceptar");
				}
				
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
		}
	}
}

/**

 * @private
 *
 * @properties={typeid:24,uuid:"E642E88D-EE82-45E6-85E2-F376D4C22F98"}
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
 * @properties={typeid:24,uuid:"6A36D28B-D5C4-4A00-BA72-FFB81914AD2C"}
 */
function isValidDataForm() {
	var isValid = true;	
	var messageError = "No ha sido posible guardar la solcicitud. Corrija los siguientes errores y vuelva a intentar."
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
	
	if(f_tipoPrioridad == null){
		elements.cbo_tipoPrioridad.border = borderError;
		messageError += "\nDebe seleccionar tipo prioridad.";        
        isValid = false;
	}
	
	if (f_fechaImplante == null){
		elements.cld_fechaImplante.border = borderError;
		messageError += "\nDebe ingresar fecha de implante.";        
        isValid = false;
	}
	else{
		if (f_fechaImplante < f_fechaSolicitud){
			elements.cld_fechaImplante.border = borderError;
			messageError += "\nLa fecha de implante debe ser mayor o igual a la fecha de solicitud.";        
	        isValid = false;
		}
	}
	
	if(f_horaImplante == null || f_horaImplante == ''){
		elements.txt_horaImplante.border = borderError;
		messageError += "\nDebe ingresar hora de implante.";        
        isValid = false;
	}
	
	if (f_fechaRecepcion == null){
		elements.cld_fechaRecepcion.border = borderError;
		messageError += "\nDebe ingresar fecha máxima de recepción.";        
        isValid = false;
	}
	else{
		if (f_fechaRecepcion < f_fechaSolicitud){
			elements.cld_fechaRecepcion.border = borderError;
			messageError += "\nLa fecha máxima de recepción debe ser mayor o igual a la fecha de solicitud.";        
	        isValid = false;
		}
	}
	
	if(f_lugarEntrega == null){
		elements.cbo_lugarEntrega.border = borderError;
		messageError += "\nDebe seleccionar lugar de entrega.";        
        isValid = false;
	}
	
	if (forms.protesis_lst_protesis.foundset.getSize() == 0){
		elements.lbl_agregarItem.border = borderError;	
		messageError += "\nDebe ingresar al menos un item de protesis.";        
        isValid = false;
	}
	
	if (f_fechaImplante < f_fechaRecepcion){
		elements.cld_fechaImplante.border = borderError;
		elements.cld_fechaRecepcion.border = borderError;
		messageError += "\nLa fecha de implante debe ser mayor o igual a la fecha máxima de recepción.";        
        isValid = false;
	}
	
	if(globals.prote_intervencion == null || utils.stringTrim( globals.prote_intervencion) == ''){
		forms.prote_txtIntervencion.elements.txt_intervencion.border = borderError;
		messageError += "\nDebe ingresar la intervención.";        
        isValid = false;
	}
	
	if(globals.prote_diagnostico == null || utils.stringTrim( globals.prote_diagnostico) == ''){
		forms.frm_protesis_txtDiagnostico.elements.txt_diagnostico.border = borderError;
		messageError += "\nDebe ingresar el diagnostico.";        
        isValid = false;
	}
	
	// Verificando si existe nro de solicitud
	var sqlNro = "SELECT EXISTS( SELECT id FROM prote_solicitud_protesis WHERE nro_solicitud=" + f_nroSolicitud + ")"
	var dsExistsNro = databaseManager.getDataSetByQuery('desal',sqlNro,null,-1);
	if(dsExistsNro.getValue(1,1) == 1){
		messageError += "\nYa existe el número de solicitud " + f_nroSolicitud + ".";        
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
 * @properties={typeid:24,uuid:"9512C79B-5846-4C15-B8FA-B2E7466D03E0"}
 */
function setDefaultBorderElements() {
	var border = 'LineBorder,1,null';
	elements.cbo_tipoPaciente.border = 'LineBorder,1,#abadb3';
	elements.txt_paciente.border = border;
	elements.cbo_tipoPrioridad.border = 'LineBorder,1,#abadb3';
	elements.cld_fechaImplante.border = border;
	elements.txt_horaImplante.border = border;
	elements.cld_fechaRecepcion.border = border;
	elements.cbo_lugarEntrega.border = 'LineBorder,1,#abadb3';
	elements.lbl_agregarItem.border = null;
	forms.frm_protesis_txtDiagnostico.elements.txt_diagnostico.border = 'LineBorder,1,#abadb3';
	forms.prote_txtIntervencion.elements.txt_intervencion.border = 'LineBorder,1,#abadb3';
}

/**

 * @private
 *
 * @properties={typeid:24,uuid:"13F6D7DF-0CC1-4D31-ADD7-0F3E1F84C4EF"}
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
 * @properties={typeid:24,uuid:"91C52856-6507-41E3-960C-55743CD7D93F"}
 */
function onAction_cldFechaImplante(event) {
	setIsDirty(true);
}

/**

 * @private
 *
 * @properties={typeid:24,uuid:"FF405E6E-A6C2-471C-9090-3EB5A6C6F519"}
 */
function setEditableElements(editable) {
	elements.btn_agregarItem.enabled = editable,
	elements.btn_buscarPaciente.enabled = editable;
	elements.btn_grabar.enabled = editable;
	elements.cbo_lugarEntrega.enabled = editable;
	elements.cbo_tipoPaciente.enabled = editable;
	elements.cbo_tipoPrioridad.enabled = editable;
	elements.cld_fechaImplante.enabled = editable;
	elements.cld_fechaRecepcion.enabled = editable;
	elements.cld_fechaSolicitud.enabled = editable;
	elements.lbl_agregarItem.enabled = editable;
	elements.tabless.enabled = editable;
	elements.tabs.enabled = editable;
	elements.txt_horaImplante.enabled= editable;
	elements.txt_paciente.enabled = editable;
	
}
