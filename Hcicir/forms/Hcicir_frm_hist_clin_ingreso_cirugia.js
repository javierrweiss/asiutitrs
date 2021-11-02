/**
 * @properties={typeid:35,uuid:"F1F19587-6A01-4674-8C62-4361FC4EFB3E",variableType:-4}
 */
var f_cerrarForm = false;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"EB7CEB69-78C7-46A9-B458-1A12B9844771"}
 */
var $legajo_medico = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"1BECA0EA-4A90-42D7-BA9B-56910FB69F71"}
 */
var $tipo_medico = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"C872901A-7417-4B32-B416-4D987FA2A459"}
 */
var $cama = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"F3CF4947-BE6C-4087-A9AA-3DDE3C879E8C",variableType:4}
 */
var $habita = null;

/**
 * @properties={typeid:35,uuid:"E70EC73E-36EE-4CBB-A015-50D38E62E7C3",variableType:-4}
 */
var $isDirty = false;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"D7714BC5-CC55-4C4B-BD59-7A49D4BB09F1"}
 */
var $horaIngreso = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"2D6B0E7B-4311-464D-8596-E983ABACEBDA"}
 */
var $fechaIngreso = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"2965894A-E11C-4A68-960F-ECF8E8993138",variableType:4}
 */
var f_protocolo = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"34FAD16B-D899-4725-8036-84E4526CD7DF"}
 */
var f_nroInternado = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"990FAEB9-4177-4E6A-AD11-DC1F7E1B1255",variableType:4}
 */
var f_fecNac = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"C9ACE5BA-029A-4F9B-93A6-DF93D133B397"}
 */
var $messageErrorAmbu = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"B9199E53-0BDE-47D8-9E04-5E8B8B16708E",variableType:93}
 */
var f_fecaltaefec = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"D914ACA7-0775-49D2-A71B-A352CBF6B4E0"}
 */
var $messageErrorInter = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"51BD2B02-C266-4A6A-87BE-4A02EEE86808"}
 */
var f_medico = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"246DE808-487F-4120-BBA0-49A9CF7CE381"}
 */
var f_edad = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"36E82342-1D27-4534-B360-17DFC30FE1D7"}
 */
var f_plan = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"B93BB8AF-42C1-4ECF-B944-061E2E588C7F"}
 */
var f_cobertura = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"1E5F310E-891C-4E84-8922-B62B272C3CEC"}
 */
var f_nroAfiliado = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"839BA399-D121-40A2-93DE-298AE71DE072"}
 */
var f_histClinUnica = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"AB794352-F359-49FD-8BB0-30197766CBDA"}
 */
var f_paciente = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"19086241-9EF3-4C75-A4D1-81E0C4D60506",variableType:4}
 */
var f_tipoPaciente = null;

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"47C14961-D052-4CE0-8BC2-5478E853F925"}
 */
function onShow_inicializarForm(firstShow, event) {
	
	var ds_prot = databaseManager.createEmptyDataSet();
	ds_prot.addColumn("protocolo");
	ds_prot.addColumn("fecha_carga");
	ds_prot.addColumn("hora_carga");
	ds_prot.addColumn("fecha_inicio");
	ds_prot.addColumn("hora_inicio");
	ds_prot.addColumn("tipo_medico");
	ds_prot.addColumn("legajo_medico");
	ds_prot.addColumn("interven");
	ds_prot.addColumn("codigo_interven");
	
	var $frm = solutionModel.getForm('Hcicir_tbl_buscar_protocolo');
	var $tipos = [JSColumn.TEXT,JSColumn.TEXT,JSColumn.TEXT,JSColumn.TEXT,JSColumn.TEXT,JSColumn.TEXT,JSColumn.TEXT,JSColumn.TEXT,JSColumn.TEXT];
	$frm.dataSource = ds_prot.createDataSource('Hcicir_tbl_buscar_protocolo', $tipos);
	forms.Hcicir_tbl_buscar_protocolo.controller.recreateUI();
	/*
	inicializarForm();
	globals.InitializarCheks("HistoriaClinica_dtl")
	inicializarTabHcir();
	
	elements.cbo_tipoPaciente.requestFocus();
	*/
	limpiarForm();
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"CB2911DB-C058-4476-BF45-91B955A92067"}
 */
function onAction_btnBuscarPaciente(event) {
	
	globals.Hcicir_eventSourceButton = 1;
	openSearch();
}

/**
 * @properties={typeid:24,uuid:"4F5379B7-545E-480D-89ED-DF7700B6E738"}
 */
function openSearch() {
	
	if(f_tipoPaciente != null){
		
		// Ambulatorio
		if(f_tipoPaciente == 1){
			var win = application.createWindow("seleccion_ambulatorio",JSWindow.MODAL_DIALOG);	
		    win.title= 'Búsqueda de Pacientes Ambulatorios';
		    win.resizable = false;
		    win.show(forms.Hcicir_dg_buscarAmbulatorio);
		}
		
		// Internado
		if(f_tipoPaciente == 0){
			var win2 = application.createWindow("seleccion_internado",JSWindow.MODAL_DIALOG);	
		    win2.title= 'Búsqueda de Pacientes Internados';
		    win2.resizable = false;
		    win2.show(forms.Hcicir_dg_buscarInternado);
		}
		
	}
	else{
		globals.DIALOGS.showWarningDialog("Atención",'Debe seleccionar tipo de ingreso.',"Aceptar");
		elements.cbo_tipoPaciente.requestFocus();
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"C7733EBF-6116-44F3-9AAF-FBF19ACAE0D6"}
 */
function onAction_txtBusquedaRapida(event) {
	
	globals.Hcicir_hisclistrynro = f_paciente;
	if(globals.Hcicir_hisclistrynro != '' && globals.Hcicir_hisclistrynro != null){
		globals.Hcicir_eventSourceButton = 0;
		openSearch();
		//$isDirty = true;
	}
	else{
		globals.DIALOGS.showWarningDialog("Atención",'Debe ingresar Nro. de paciente o apellido.',"Aceptar")
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"A33D9B5E-0BB2-4D0C-BE49-E637F0B8F84F"}
 */
function onAction_cboTipoPaciente(event) {
	
	inicializarForm();
	elements.txt_paciente.requestFocus();
}

/**
 * @properties={typeid:24,uuid:"9FA8CE91-2E8A-48F4-ADEE-1B82F1F86363"}
 */
function isValidDatosPacienteInter (){
	
	var isValid = true;	
	$messageErrorInter = '';
	
	if(f_fecaltaefec != null){
		$messageErrorInter += "\nPaciente, egresado del sanatorio.";        
        isValid = false;
	}
	
	
	return isValid;
}

/**
 * @properties={typeid:24,uuid:"79352371-148E-45E5-BCBF-B8508442AD9A"}
 * @AllowToRunInFind
 */
function isValidDatosPacienteAmbu (){
	
	var isValid = true;	
	$messageErrorAmbu = '';
	
	var fs = databaseManager.getFoundSet('asistencial','tbc_guardia');
	//databaseManager.refreshRecordFromDatabase(fs,-1);
	fs.find();
	fs['guar_especialidad'] = 5;
	fs['guar_estado'] = "< 4"
	fs['guar_fechaalta'] = 0
	fs['guar_histclinica'] = f_histClinUnica;
	fs.search();
	
	if(fs.getSize() == 0){
		$messageErrorAmbu += "\nPaciente egresado o no válido.";        
		isValid = false;
	}
	else{
		
		if(fs['guar_estado'] == 3){
			$messageErrorAmbu += "\nPaciente tomado en otra terminal.";        
			isValid = false;
		}
		else{
			$fechaIngreso = fs['guar_fechaingreso'];
			$horaIngreso = fs['guar_horaingreso'];
		}
	}
	
	return isValid;
}

/**
 * TODO generated, please specify type and doc for the params
 * @param value
 *
 * @properties={typeid:24,uuid:"93679B21-11C3-4787-ABF8-FF96A750812C"}
 */
function editablePaciente (value){
	elements.txt_paciente.enabled = value;
	elements.btn_buscarPaciente.enabled = value;
}

/**
 * @properties={typeid:24,uuid:"0E982A63-571F-4A6B-90E3-A0784660F7FE"}
 */
function clearDatosPaciente () {
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"ED96E1F7-0929-4F8F-B916-AC4F8F33F286"}
 */
function onAction_btnNuevo(event) {

	var limpiar = false;
	if($isDirty){
		var respuesta = globals.DIALOGS.showQuestionDialog('¡Atención!','Existen datos que no han sido guardados. ¿Está seguro que desea continuar?', 'Si', 'No');
		if( respuesta == 'Si')
			limpiar = true;
	}
	else{
		limpiar = true;
	}
		
	if(limpiar){
		
		f_tipoPaciente = null;
		limpiarForm();
	}
}

/**
 * @properties={typeid:24,uuid:"E763B476-0D7B-4A9B-94F3-4233C9667900"}
 */
function limpiarForm(){
	
	databaseManager.revertEditedRecords();
	inicializarForm();
	
	forms.HistoriaClinica_dtl.foundset.newRecord()
	globals.InicializarDatos("HistoriaClinica_dtl","asistencial","tbc_hcicir_new")
	globals.InitializarCheks("HistoriaClinica_dtl")
	inicializarTabHcir();
	forms.HistoriaClinica_dtl.foundset.hciritvcod1=globals.vInterven0
	editableInterven(true);
	
	elements.cbo_tipoPaciente.requestFocus();
	//elements.txt_paciente.requestFocus();
	$isDirty = false;
	
}

/**
 * @properties={typeid:24,uuid:"A23B4CE5-F00D-495C-81DB-F20EF35589B7"}
 */
function inicializarForm() {
	
	f_histClinUnica = null;
	f_nroAfiliado = null;
	f_paciente = null;
	f_cobertura = null;
	f_protocolo = null;
	f_edad = null;
	f_plan = null;
	f_nroInternado = null;
	f_fecaltaefec = null;
	f_fecNac = null;
	f_cerrarForm = false;
	f_medico = null;
	
	$fechaIngreso = null;
	$horaIngreso = null;
	$habita = null;
	$cama = null;
	$tipo_medico = null;
	$legajo_medico = null;
	//f_ciriIeCiru = null;
	//f_ciriInterven = null;
	//f_ciriLegCiru = null;
	//$matriculaMedico = null;
	//$nombreMedico = null;
	//$itv_descripcion = null;
	
	//f_fechaSolicitud = utils.timestampToDate(application.getServerTimeStamp());
	
	globals.vHiscli = 0;
	globals.vZero = 0;
	globals.vHoraHcir = 0;
	globals.vFechaHcir = 0;
	
	elements.lbl_medico.visible = false;
	elements.txt_medico.visible = false;
	
	//elements.cbo_tipoPaciente.readOnly = true;
	elements.tab_hcicir.visible = false;
	elements.shs_rectangulo.visible = false;
	
	forms.HistoriaClinica_dtl.elements.btn_graba_hcicir.enabled = false;
	forms.HistoriaClinica_dtl.elements.btn_graba_hcicir.setSize(0,0);
	
	forms.Hcicir_tbl_buscar_protocolo.foundset.clear();
	elements.txt_paciente.enabled = true;
	elements.btn_buscarPaciente.enabled = true;
	elements.btn_buscarProtocolo.enabled = false;
	//elements.cbo_tipoPaciente.requestFocus();
	
}

/**
 * @properties={typeid:24,uuid:"DF1A254F-4367-474C-A37A-4DAA5B7348CF"}
 */
function inicializarTabHcir(){
	
	if(forms.HistoriaClinica_dtl.foundset.hciralerta!=1){
		globals.hcicirtxt1=''
		forms.HistoriaClinica_dtl.elements.tab_hcir.setTabEnabledAt(1,false)
	}else{
		forms.HistoriaClinica_dtl.elements.tab_hcir.setTabEnabledAt(1,true)
		globals.hcicirtxt1=mostrarTextoCargadoHCIR(globals.vHiscli,globals.vFechaHcir,globals.vHoraHcir,1,f_tipoPaciente)
	}
	if(forms.HistoriaClinica_dtl.foundset.hcirotros!=1){
		globals.hcicirtxt2=''
		forms.HistoriaClinica_dtl.elements.tab_hcir.setTabEnabledAt(2,false)
	}else{
		forms.HistoriaClinica_dtl.elements.tab_hcir.setTabEnabledAt(2,true)
		globals.hcicirtxt2=mostrarTextoCargadoHCIR(globals.vHiscli,globals.vFechaHcir,globals.vHoraHcir,2,f_tipoPaciente)
	}
	if(forms.HistoriaClinica_dtl.foundset.hcirriesgo!=1){
		globals.hcicirtxt3=''
		forms.HistoriaClinica_dtl.elements.tab_hcir.setTabEnabledAt(3,false)
	}else{
		forms.HistoriaClinica_dtl.elements.tab_hcir.setTabEnabledAt(3,true)
		globals.hcicirtxt3=mostrarTextoCargadoHCIR(globals.vHiscli,globals.vFechaHcir,globals.vHoraHcir,3,f_tipoPaciente)
	}
	if(forms.HistoriaClinica_dtl.foundset.hcirrx!=1){
		globals.hcicirtxt4=''
		forms.HistoriaClinica_dtl.elements.tab_hcir.setTabEnabledAt(4,false)
	}else{
		forms.HistoriaClinica_dtl.elements.tab_hcir.setTabEnabledAt(4,true)
		globals.hcicirtxt4=mostrarTextoCargadoHCIR(globals.vHiscli,globals.vFechaHcir,globals.vHoraHcir,4,f_tipoPaciente)
	}
	if(forms.HistoriaClinica_dtl.foundset.hcireco!=1){
		globals.hcicirtxt5=''
		forms.HistoriaClinica_dtl.elements.tab_hcir.setTabEnabledAt(5,false)
	}else{
		forms.HistoriaClinica_dtl.elements.tab_hcir.setTabEnabledAt(5,true)
		globals.hcicirtxt5=mostrarTextoCargadoHCIR(globals.vHiscli,globals.vFechaHcir,globals.vHoraHcir,5,f_tipoPaciente)
	}
	if(forms.HistoriaClinica_dtl.foundset.hcirtacrmn!=1){
		globals.hcicirtxt6=''
		forms.HistoriaClinica_dtl.elements.tab_hcir.setTabEnabledAt(6,false)
	}else{
		forms.HistoriaClinica_dtl.elements.tab_hcir.setTabEnabledAt(6,true)
		globals.hcicirtxt6=mostrarTextoCargadoHCIR(globals.vHiscli,globals.vFechaHcir,globals.vHoraHcir,6,f_tipoPaciente)
	}
	if(forms.HistoriaClinica_dtl.foundset.hcircondqui!=1){
		globals.hcicirtxt7=''
		forms.HistoriaClinica_dtl.elements.tab_hcir.setTabEnabledAt(7,false)
	}else{
		forms.HistoriaClinica_dtl.elements.tab_hcir.setTabEnabledAt(7,true)
		globals.hcicirtxt7=mostrarTextoCargadoHCIR(globals.vHiscli,globals.vFechaHcir,globals.vHoraHcir,7,f_tipoPaciente)
	}
	if(forms.HistoriaClinica_dtl.foundset.hcircomenta!=1){
		globals.hcicirtxt8=''
		forms.HistoriaClinica_dtl.elements.tab_hcir.setTabEnabledAt(8,false)
	}else{
		forms.HistoriaClinica_dtl.elements.tab_hcir.setTabEnabledAt(8,true)
		globals.hcicirtxt8=mostrarTextoCargadoHCIR(globals.vHiscli,globals.vFechaHcir,globals.vHoraHcir,8,f_tipoPaciente)
	}
	
}

/**
 * TODO generated, please specify type and doc for the params
 * @param visible
 *
 * @properties={typeid:24,uuid:"C10C9695-17AA-42D1-9B13-A3369CB062BB"}
 */
function setVisibleElementsAux(visible) {
	
	elements.lbl_fechaAltaEfectiva.visible = visible;
	elements.lbl_nroInternado.visible = visible;
	elements.lbl_fecNac.visible = visible;

	elements.cld_fecaltaefec.visible = visible;
	elements.txt_nroInternado.visible = visible;
	elements.txt_fecNac.visible = visible;
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"0F3895C6-67EA-43FF-BF58-8C57A7BA8358"}
 */
function onAction_btnBuscarProtocolo(event) {
	// TODO Auto-generated method stub
	globals.Hcicir_eventSourceButton = 1;
	openSearchProtocolo();
}

/**
 * @properties={typeid:24,uuid:"E56B1ECA-2328-4465-BB10-74CC4394066B"}
 */
function openSearchProtocolo (){
	
	forms.Hcicir_dlg_buscar_protocolo.f_cerrarForm = false;
	
	var win2 = application.createWindow("seleccion_protocolo",JSWindow.MODAL_DIALOG);
	if(f_tipoPaciente == 0)
		win2.title= 'Protocolos sin Hcl.de Ingreso a Cirugia';
	else
		win2.title= 'Protocolos';
    win2.resizable = false;
    win2.show(forms.Hcicir_dlg_buscar_protocolo);
}

/**
 * @properties={typeid:24,uuid:"F8F45750-73A7-4F8D-BFE1-83548B969C22"}
 * @AllowToRunInFind
 */
function inicializarHcicir() {
	
	elements.tab_hcicir.visible = true;
	elements.shs_rectangulo.visible = true;
	forms.HistoriaClinica_dtl.elements.hcir_patcodi1_code.requestFocus();
	forms.HistoriaClinica_dtl.elements.hcir_patcodi1_label.enabled = true;
	
	// Modificacion solo para paciente ambulatorio
	if(f_tipoPaciente == 1){
		
		// Antes de recargar el founsed se consulta si existe, si no existe se mantiene el foundset que esta inicializado con newRecord() 
		var fs_hcir = databaseManager.getFoundSet('asistencial','tbc_hcicir_new');
		fs_hcir.find();
		fs_hcir['hcirhiscli'] = f_nroInternado;
		fs_hcir['hcirfecha'] = $fechaIngreso;
		fs_hcir['hcirhora'] = $horaIngreso;
		fs_hcir['hcirtipohc'] = f_tipoPaciente;
		fs_hcir.search();
		
		if(fs_hcir.getSize() > 0){
			loadHcicir();
		}
	}
	
	//globals.vFechaHcir==0
	//globals.vFechaHcir=utils.stringToNumber(globals.CapturaFechaSistema())
	//globals.vHoraHcir=utils.stringToNumber(globals.CapturaHoraSistema("HHMM"))
}


/**
 * @AllowToRunInFind
 *
 * @properties={typeid:24,uuid:"F8E1DA50-C9B0-481B-8721-C1CC768B9DD7"}
 */
function loadHcicir(){
	
	databaseManager.revertEditedRecords();
	
	globals.vHiscli = f_nroInternado;
	globals.vHoraHcir = $horaIngreso;
	globals.vFechaHcir = $fechaIngreso;
	globals.vZero = f_tipoPaciente;
	
	if(vfecha_hora_to_tbc_hcicir_new.getSize() > 0){
		
		globals.InitializarCheks("HistoriaClinica_dtl");
		inicializarTabHcir();
		$isDirty = false;
	}
}

/**
 * Callback method when the user changes tab in a tab panel or divider position in split pane.
 *
 * @param {Number} previousIndex index of tab shown before the change
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"8A9802E2-7070-41E2-9501-4DAA01526200"}
 */
function onTabChange_tabHistClin(previousIndex, event) {
	// TODO Auto-generated method stub
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"B2070B10-68B1-4479-B89C-A6AC8DA4B9EF"}
 * @AllowToRunInFind
 */
function onAction_btnGuardar(event) {
	
	var res = globals.DIALOGS.showQuestionDialog('¡Atención!','¿ Esta seguro que desea guardar la historia clínica ?', 'Si', 'No');
	if( res == 'Si'){
		
		if($isDirty || forms.HistoriaClinica_dtl.foundset.hcirfecha > 0){
			
			if(isValidDataForm()){
				
				if(isValidData()) {
					
					var hcirFecha;
					var hcirHora;
					
					if(forms.HistoriaClinica_dtl.foundset.hcirhiscli == 0 && forms.HistoriaClinica_dtl.foundset.hcirfecha == 0 && forms.HistoriaClinica_dtl.foundset.hcirhora == 0){
						
						hcirFecha = utils.stringToNumber(globals.CapturaFechaSistema());
						hcirHora = utils.stringToNumber(globals.CapturaHoraSistema("HHMM"));
						
						if(f_tipoPaciente == 1){
							
							$cama = ' ';
							$habita = 0;
							hcirFecha = $fechaIngreso
							hcirHora = $horaIngreso;
							
						}
						
						forms.HistoriaClinica_dtl.foundset.hcirhiscli= f_nroInternado;
						forms.HistoriaClinica_dtl.foundset.hcirtipohc = f_tipoPaciente;
						
						forms.HistoriaClinica_dtl.foundset.hcirfecha2= hcirFecha;
						forms.HistoriaClinica_dtl.foundset.hcirhora2= hcirHora;
						
						forms.HistoriaClinica_dtl.foundset.hcircama=$cama;//globals.hcicir_numero_to_tbc_admision.adm_cama;
						forms.HistoriaClinica_dtl.foundset.hcirhabi=$habita;//globals.hcicir_numero_to_tbc_admision.adm_habita;
						forms.HistoriaClinica_dtl.foundset.hcirfechacarga=globals.vFeccarga
						forms.HistoriaClinica_dtl.foundset.hcirhoracarga = 0;
						
						forms.HistoriaClinica_dtl.foundset.hcirtipomed= $tipo_medico == null ? 0 : $tipo_medico; 
						forms.HistoriaClinica_dtl.foundset.hcirlegajomed= $legajo_medico == null ? 0 : $legajo_medico;
						forms.HistoriaClinica_dtl.foundset.hcirprotocolo= f_protocolo == null ? 0 : f_protocolo;
						
						forms.HistoriaClinica_dtl.foundset.hciredad = 0;
						forms.HistoriaClinica_dtl.foundset.hcirxedad= " ";
						if(f_edad != null){
							
							forms.HistoriaClinica_dtl.foundset.hciredad = utils.stringToNumber(f_edad.split(' ')[0]);
							forms.HistoriaClinica_dtl.foundset.hcirxedad= utils.stringTrim(f_edad.split(' ')[1]);
						}
						
						forms.HistoriaClinica_dtl.foundset.hcirtipohc3 = forms.HistoriaClinica_dtl.foundset.hcirtipohc;
						
						forms.HistoriaClinica_dtl.foundset.hcirfiller = " ";
						forms.HistoriaClinica_dtl.foundset.hcirblokear = " ";
						forms.HistoriaClinica_dtl.foundset.hcirfecha = forms.HistoriaClinica_dtl.foundset.hcirfecha2;
						forms.HistoriaClinica_dtl.foundset.hcirhora = forms.HistoriaClinica_dtl.foundset.hcirhora2;
					}
					else{
						hcirFecha = forms.HistoriaClinica_dtl.foundset.hcirfecha;
						hcirHora =  forms.HistoriaClinica_dtl.foundset.hcirhora;
					}
					
					forms.form116_dtl.ConvierteCheksaGrabarSN("HistoriaClinica_dtl");
				
					// Actualizando base de datos
					databaseManager.startTransaction();
					var result = databaseManager.saveData(foundset.getRecord(1));
					
					globals.InitializarCheks("HistoriaClinica_dtl");
						
					if (globals.hcicirtxt1!=null&&globals.hcicirtxt1!=''){
						grabarTextoHCICIR(Number(f_nroInternado),Number(hcirFecha),Number(hcirHora),globals.hcicirtxt1,1,f_tipoPaciente)
					}
					if (globals.hcicirtxt2!=null&&globals.hcicirtxt2!=''){
						grabarTextoHCICIR(Number(f_nroInternado),Number(hcirFecha),Number(hcirHora),globals.hcicirtxt2,2,f_tipoPaciente)
					}
					if (globals.hcicirtxt3!=null&&globals.hcicirtxt3!=''){
						grabarTextoHCICIR(Number(f_nroInternado),Number(hcirFecha),Number(hcirHora),globals.hcicirtxt3,3,f_tipoPaciente)
					}
					if (globals.hcicirtxt4!=null&&globals.hcicirtxt4!=''){
						grabarTextoHCICIR(Number(f_nroInternado),Number(hcirFecha),Number(hcirHora),globals.hcicirtxt4,4,f_tipoPaciente)
					}
					if (globals.hcicirtxt5!=null&&globals.hcicirtxt5!=''){
						grabarTextoHCICIR(Number(f_nroInternado),Number(hcirFecha),Number(hcirHora),globals.hcicirtxt5,5,f_tipoPaciente)
					}
					if (globals.hcicirtxt6!=null&&globals.hcicirtxt6!=''){
						grabarTextoHCICIR(Number(f_nroInternado),Number(hcirFecha),Number(hcirHora),globals.hcicirtxt6,6,f_tipoPaciente)
					}
					if (globals.hcicirtxt7!=null&&globals.hcicirtxt7!=''){
						grabarTextoHCICIR(Number(f_nroInternado),Number(hcirFecha),Number(hcirHora),globals.hcicirtxt7,7,f_tipoPaciente)
					}
					if (globals.hcicirtxt8!=null&&globals.hcicirtxt8!=''){
						grabarTextoHCICIR(Number(f_nroInternado),Number(hcirFecha),Number(hcirHora),globals.hcicirtxt8,8,f_tipoPaciente)
					}
					
					if(result == true){
						
						databaseManager.commitTransaction();
						globals.DIALOGS.showInfoDialog("Resultado","La história clínica de ingreso a cirugía se guardo correctamente.","Aceptar");
						
						if(f_tipoPaciente == 0){
							
							f_tipoPaciente = null;
							limpiarForm();
						}
						else{
							loadHcicir();
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
		else{
			globals.DIALOGS.showWarningDialog("Atención!","No hay datos para guardar.","Aceptar")
			elements.txt_paciente.requestFocus();
		}
	}
	else
		elements.txt_paciente.requestFocus();
}

/**
 * @properties={typeid:24,uuid:"9F6F3069-0EA0-4B71-AA48-C86040E26002"}
 */
function isValidDataForm() {
	
	var isValid = true;	
	var messageError = "No ha sido posible guardar la solicitud. Corrija los siguientes errores y vuelva a intentar."
	//var borderError = 'LineBorder,1,#ff0000';
	//setDefaultBorderElements();
		
	if(f_tipoPaciente == null){
		//elements.cbo_tipoPaciente.border = borderError;
		messageError += "\nDebe seleccionar tipo de paciente.";        
        isValid = false;
	}
	
	if(f_histClinUnica == null){
		//elements.txt_paciente.border = borderError;
		messageError += "\nDebe ingresar paciente.";
		isValid = false;
	}
	
	/*
	if($fechaIngreso == null){
		//elements.txt_paciente.border = borderError;
		messageError += "\nDebe ingresar fecha de ingreso por admisión o guardia.";
		isValid = false;
	}
	
	if($horaIngreso == null){
		//elements.txt_paciente.border = borderError;
		messageError += "\nDebe ingresar hora de ingreso por admisión o guardia.";
		isValid = false;
	}
	*/
	
	if(!isValid){
		globals.DIALOGS.showWarningDialog("¡Atención!",messageError,"Aceptar")
	}
	
	return isValid;
}

/**
 * @properties={typeid:24,uuid:"3249EC1E-1F39-410C-B4DF-31B5B7627B8E"}
 */
function isValidData () {
	
	var isValid = true;	
	var messageError = "No ha sido posible guardar la solicitud. Corrija los siguientes errores y vuelva a intentar."
	//var borderError = 'LineBorder,1,#ff0000';
	//setDefaultBorderElements();
	
	if(isValid){
		
		if(f_protocolo == null){
			
			var res = globals.DIALOGS.showQuestionDialog('¡Atención!','¿ Desea Guardar Ingreso de Historia Clinica de Cirugia sin Protocolo ?', 'Si', 'No');
			if( res == 'Si'){
			}
			else{
				
				messageError += "\nHistoria Clinica de Cirugia sin Protocolo."
				isValid = false;
			}
		}
	}
	else{
		globals.DIALOGS.showWarningDialog("Atención!",messageError,"Aceptar")
		elements.cbo_tipoPaciente.requestFocus();
	}
	
	return isValid;
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"07281BEA-91CF-4AC0-8D67-D4DC97757B98"}
 */
function onAction_btnCerrar(event) {
	
	if($isDirty){
		if(globals.DIALOGS.showQuestionDialog('¡Atención!','Existen datos que no han sido guardados. ¿Está seguro que desea continuar?', 'Si', 'No') == 'Si')
			f_cerrarForm = true;
	}
	else{
		f_cerrarForm = true;
	}
	
	if(f_cerrarForm){
		var $win = application.getWindow(application.getActiveWindow().getName());
		if($win != null){
			$win.hide();
			$win.destroy();
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
 * @properties={typeid:24,uuid:"D749B24F-F020-43A1-B6DC-794EB6E5046A"}
 */
function onHide_cerrarForm(event) {
	// TODO Auto-generated method stub
	return f_cerrarForm;
}

/**
 * TODO generated, please specify type and doc for the params
 * @param value
 *
 * @properties={typeid:24,uuid:"60D4F363-2747-47BC-9803-671ED112091F"}
 */
function editableInterven(value){
	
	forms.HistoriaClinica_dtl.elements.hciritvcodi1.enabled = value;
	forms.HistoriaClinica_dtl.elements.btn_hciritvcodi1.enabled = value;
	forms.HistoriaClinica_dtl.elements.hciritvcodi1desc.enabled = value;
	
}

/**
 * @AllowToRunInFind
 * 
 * TODO generated, please specify type and doc for the params
 * @param historia
 * @param fecha
 * @param hora
 * @param f_texto
 * @param tipo
 * @param tipoHistClin
 *
 * @properties={typeid:24,uuid:"8D48539B-2F66-466F-8E39-7DB1F7ABDCE2"}
 */
function grabarTextoHCICIR(historia, fecha, hora, f_texto, tipo, tipoHistClin) {
	f_texto = utils.stringTrim(f_texto)
	application.setClipboardContent(f_texto)
	
	var fs1 = databaseManager.getFoundSet("asistencial", "tbc_hcicirtxt")
	var j = 0;

	fs1.find()
	fs1['hcirx_tiphistclin'] = tipoHistClin
	fs1['hcirx_histclin'] = historia
	fs1['hcirx_fec'] = fecha
	fs1['hcirx_hora'] = hora
	fs1['hcirx_tittxt'] = tipo
	fs1.search()

	var longitudTexto = 0;
	longitudTexto = f_texto.length;
	var posicionFinal = 0;
	posicionFinal = f_texto.indexOf("\n");
	var posicionInicial = 0;
	if (posicionFinal < 0){
		posicionFinal = f_texto.length
	}
	
	if (historia < 77200) {
		var kenter = f_texto.indexOf("\n");
		while (kenter > 0) {
			f_texto = f_texto.replace("\n", "");
			kenter = f_texto.indexOf("\n");
		}
	}
	var tamanio = 0;
	tamanio = fs1.getSize();

	if (tamanio > 0)
		fs1.deleteAllRecords()
	application.sleep(200)
	
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
			fs1['hcirx_tiphistclin'] = tipoHistClin
			fs1['hcirx_histclin'] = historia
			fs1['hcirx_fec'] = fecha
			fs1['hcirx_hora'] = hora
			fs1['hcirx_tittxt'] = tipo
			fs1['hcirx_nrolinea'] = j;
			fs1['hcirx_linea'] = f_texto.substr(posicionInicial, 78);
			databaseManager.saveData(fs1.getSelectedRecord())
			posicionInicial = posicionInicial + 78;
			++lineascab
		}
	}
}

/**
 * @AllowToRunInFind
 * 
 * TODO generated, please specify type and doc for the params
 * @param historia
 * @param fecha
 * @param hora
 * @param tipo
 * @param tipoHistClin
 *
 * @properties={typeid:24,uuid:"20C0030F-C495-414E-8B54-ED89D1EF6263"}
 */
function mostrarTextoCargadoHCIR(historia, fecha, hora, tipo, tipoHistClin) {
	var fs1 = databaseManager.getFoundSet("asistencial", "tbc_hcicirtxt")
	var texto = '';
	var j = 0;
	var name = new Array()
	name[0] = "hcirx_tiphistclin"
	name[1] = "hcirx_histclin"
	name[2] = "hcirx_fec"
	name[3] = "hcirx_hora"
	name[4] = "hcirx_tittxt"
	name[5] = "hcirx_nrolinea"
	name[6] = "hcirx_linea"

	fs1.find()
	fs1[name[0]] = tipoHistClin
	fs1[name[1]] = historia
	fs1[name[2]] = fecha
	fs1[name[3]] = hora
	fs1[name[4]] = tipo
	fs1.search()

	var filasf = fs1.getSize()
	if (filasf > 0) {

		fs1.setSelectedIndex(1)
		texto = utils.stringTrim(fs1[name[6]]);
		for (j = 2; j < filasf + 1; j++) {
			fs1.setSelectedIndex(j)
			texto = texto + utils.stringTrim(fs1[name[6]]);
		}
	}
	return texto
}
