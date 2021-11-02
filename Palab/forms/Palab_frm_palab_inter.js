/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"11D1FD51-3B94-45E2-9036-60DAEA1DA548"}
 */
var $_planx10 = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"0308693B-5401-48AA-B7A5-57E8331E0FBE"}
 */
var $_planx = '';

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"23DF521D-D704-4F4D-829D-2C8AAAE52692",variableType:4}
 */
var $_servicio = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"14790B83-9373-4009-BD72-3255EB60F657",variableType:4}
 */
var $_empresa = 0;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"D2256BC0-818A-4B23-88F3-33EF8F0C4A86"}
 */
var $_causa = null;

/**
 * @properties={typeid:35,uuid:"1A10235D-8BEA-4385-9C3A-43A13A1AB34E",variableType:-4}
 */
var $_dependencias = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"9628FCF3-0D36-43D6-8E7E-6F3D55EB1B77",variableType:4}
 */
var $_codAutoFuncion = 0;

/**
 * @properties={typeid:35,uuid:"88323FFF-71CD-4ED5-A54F-46C269526E72",variableType:-4}
 */
var $_wHIV = false;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"F3D93F20-D1DE-4CA0-9302-8731040F88FE"}
 */
var $_motivo = '';

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"85A0956E-27B0-42AB-8347-4EF7A7B897A5",variableType:4}
 */
var $_wJS = 0;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"28B184DA-7192-4FDA-A22A-DA96DD599F19"}
 */
var $_protPendiente = '';

/**
 * @properties={typeid:35,uuid:"713E0BC1-4856-425D-BEEB-2D384CA941A3",variableType:-4}
 */
var $_listAnalisis = new Array();

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"B9C8B89E-05D0-4255-87AD-B904E076AB09",variableType:4}
 */
var f_diferido = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"AA903422-3FE2-41F6-A65B-E0A4A47445F0",variableType:4}
 */
var f_estado = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"DD39839A-C251-4011-AFDE-C45CE3FCF153",variableType:4}
 */
var f_egreso = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"0C759218-DC82-4FEA-B69A-230979859109"}
 */
var f_medico = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"15A26BA7-7F46-477B-83EC-E81926FE547B",variableType:4}
 */
var $_flagJS = 0;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"4A4DD860-5C16-4B99-9AD4-B0C06685B227"}
 */
var f_utiliza = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"28C8FB79-EAE5-42E5-B21B-F802331EBDAE"}
 */
var f_analisis = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"7B7D88DF-06B8-4207-8872-5DAB986D00C5"}
 */
var f_cama = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"ACC748C0-4290-49BE-8987-810F2281156D"}
 */
var f_habita = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"7B22893B-D167-4948-80CF-C6E877F3A1E2"}
 */
var $_messageErrorItem = '';

/**
 * @properties={typeid:35,uuid:"62F11892-6F9F-42E6-B086-7DAD72AEEA02",variableType:-4}
 */
var f_cerrarForm = false;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"B3E2270A-D782-4691-B121-5D0457C7957B",variableType:4}
 */
var f_protocolo = null;

/**
 * @properties={typeid:35,uuid:"EF70A9A8-E241-44B7-9294-A26A609B6D0C",variableType:-4}
 */
var $isDirty = false;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"32929295-09D1-4269-88FD-987C69FC057B"}
 */
var f_histClinUnica = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"DFFE733B-2D3C-4BE9-BAC1-3EE3726263CC"}
 */
var f_cobertura = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"937DA807-D75C-4F41-BF20-16081028371F"}
 */
var f_paciente = '';

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"8230D0CC-4B1F-4B9B-95C3-59D883832143"}
 * @AllowToRunInFind
 */
function onShow_inicializarForm(firstShow, event) {
	
	$_empresa = 1;
	$_servicio = 9;
	
	// Inicializando foundset de impresion
	forms.Palab_print_cupon.onShow_inicializarForm(true,event);
	
	// Inicializando foundset de analisis dependientes
	var dsDependencias = databaseManager.createEmptyDataSet();
	dsDependencias.addColumn('it_ped_depen');
	dsDependencias.addColumn('it_depen');
	dsDependencias.addColumn('it_d_js');
	dsDependencias.addColumn('it_d_mca_rep');
	
	var frm = solutionModel.getForm('Palab_tbl_palab_dependencias');
	var tipos = [JSColumn.TEXT,JSColumn.TEXT,JSColumn.TEXT,JSColumn.TEXT];
	frm.dataSource = dsDependencias.createDataSource('Palab_tbl_palab_dependencias', tipos);
	forms.Palab_tbl_palab_dependencias.controller.recreateUI();
	
	// Inicializando foundset de pedidos
	var dsAnalisis = databaseManager.createEmptyDataSet();
	dsAnalisis.addColumn('protocolo');
	dsAnalisis.addColumn('codigo');
	dsAnalisis.addColumn('analisis');
	dsAnalisis.addColumn('cantidad');
	dsAnalisis.addColumn('ana19');//it_mca_dep 1:tiene dependencias
	dsAnalisis.addColumn('ana24');
	dsAnalisis.addColumn('ana40');
	dsAnalisis.addColumn('it_mca_rep');
	dsAnalisis.addColumn('it_ped_ant');
	dsAnalisis.addColumn('it_fec_ant');
	dsAnalisis.addColumn('it_hor_ant');
	dsAnalisis.addColumn('it_det_causa');
	dsAnalisis.addColumn('it_hc_amb');
	
	var $frm = solutionModel.getForm('Palab_tbl_palabde');
	var $tipos = [JSColumn.TEXT,JSColumn.TEXT,JSColumn.TEXT,JSColumn.TEXT,JSColumn.TEXT,JSColumn.TEXT,JSColumn.TEXT,JSColumn.TEXT,JSColumn.TEXT,JSColumn.TEXT,JSColumn.TEXT,JSColumn.TEXT,JSColumn.TEXT];
	$frm.dataSource = dsAnalisis.createDataSource('Palab_tbl_palabde', $tipos);
	forms.Palab_tbl_palabde.controller.recreateUI();
	
	// Inicializando matriz lab para internados
	forms.Palab_tbl_matriz.foundset.find();
	forms.Palab_tbl_matriz.foundset.matrizlabctip = 0;
	forms.Palab_tbl_matriz.foundset.newRecord();
	forms.Palab_tbl_matriz.foundset.matrizlabctip = 1;
	forms.Palab_tbl_matriz.foundset.search();
	
	var formName = controller.getName();
	forms.Palab_tbl_analisis_alfa.$_callerFormName = formName; 
	forms.Palab_tbl_analisis_num.$_callerFormName = formName;
	forms.Palab_tbl_matriz.$_callerFormName = formName;

	// control del elemento por perfil
	//globals.prote_controlarElementos($form);
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"5EC770E4-944C-4F71-86BB-BE43B3825D27"}
 * @AllowToRunInFind
 */
function onAction_btnGuardar(event) {
	
	var res = globals.DIALOGS.showQuestionDialog('¡Atención!','¿ Esta seguro que desea guardar el pedido de análisis de laboratorio ?', 'Si', 'No');
	if( res == 'Si'){
		
	if($isDirty && f_protocolo == null){
		
		if(isValidDataForm()){
			
			if(isValidData()) {
				
				databaseManager.saveData(forms.Palab_tbl_palabde.foundset);
				databaseManager.saveData(forms.Palab_tbl_palab_dependencias.foundset);
				
				// LEER-PARAM Obtener protocolo param
				var protocolo = obtenerNumerador("desal","tbl_parametros","contador_entero","paramid",26);
				var resultSave = false;
				
				if (protocolo != null) {
					
					var fecha = utils.stringToNumber(globals.CapturaFechaSistema());
					var hora = utils.stringToNumber(globals.CapturaHoraSistema("HHMM"));
					var analisis;
					var record;
					$_wHIV = false;
					
					// GR-CABE
					for(var k= 1;k <= forms.Palab_tbl_palabde.foundset.getSize(); k++){
							
						forms.Palab_tbl_palabde.foundset.setSelectedIndex(k);
						record = forms.Palab_tbl_palabde.foundset.getSelectedRecord();
						
						if(record['it_mca_rep'] != 'N'){
							
							globals.Palab_ana1 = record['codigo'];
							analisis = new Object();
							
							if(palab_rel_analisis.ana1 == 1094)
								$_wHIV = true;
							
							analisis.ana1 = palab_rel_analisis.ana1;
							analisis.ana3 = palab_rel_analisis.ana3;
							analisis.ana4 = palab_rel_analisis.ana4;
							analisis.ana28 = palab_rel_analisis.ana28;
							analisis.ana29 = palab_rel_analisis.ana29;
							analisis.ana6 = palab_rel_analisis.ana6;
							
							// grabar protocolo
							resultSave = guardarItem(analisis,protocolo,fecha,hora,0);
							
							if(resultSave){
								
								if(record['it_mca_rep'] == 'S'){
									
									// WRITE-CAUSA-REP
									guardarCausaRep(analisis,protocolo,fecha,hora,record);
								}
								
								//GRABAR-CODAUTO-00
								generarCodAuto(protocolo,fecha,hora,palab_rel_analisis.ana30,palab_rel_analisis.ana25);
							}
							else
								break;
							
						}
					}
					
					// GR-DEPEN
					if(resultSave){
						
						for(var i= 1; i <= forms.Palab_tbl_palab_dependencias.foundset.getSize(); i++){
							
							forms.Palab_tbl_palab_dependencias.foundset.setSelectedIndex(i);
							record = forms.Palab_tbl_palab_dependencias.foundset.getSelectedRecord();
							
							if(record['it_d_mca_rep'] != 'N'){
								
								globals.Palab_ana1 = record['it_depen'];
								analisis = new Object();
								
								if(palab_rel_analisis.ana1 == 1094)
									$_wHIV = true;
								
								analisis.ana1 = palab_rel_analisis.ana1;
								analisis.ana3 = palab_rel_analisis.ana3;
								analisis.ana4 = palab_rel_analisis.ana4;
								analisis.ana28 = palab_rel_analisis.ana28;
								analisis.ana29 = palab_rel_analisis.ana29;
								analisis.ana6 = palab_rel_analisis.ana6;
								// grabar dependencia
								guardarItem(analisis,protocolo,fecha,hora,record['it_ped_depen']);
							}
						}
					}

					if(resultSave){
						
						if($_flagJS == 1 && $_wJS > 0){
							
							// GR-TXT Guardando motivo y fundamento
							grabar_TextoMotivo(protocolo,$_motivo);
						}
						
						if(f_estado > 0 ){
							
							// GR-AVISO 1:Urgente 0:Diferido
							var fs_avisoTec = databaseManager.getFoundSet('desal','tbl_avisotec');
							fs_avisoTec.newRecord();
							fs_avisoTec['protocolo'] = protocolo; 
							fs_avisoTec['admision'] = 0;
							
							databaseManager.saveData(fs_avisoTec.getRecord(1));
						}
					}
					
					if(resultSave){
						
						f_protocolo = protocolo;
						
						/*
						for(k = 1; k <= forms.Palab_tbl_palabde.foundset.getSize(); k++){
							forms.Palab_tbl_palabde.foundset.setSelectedIndex(k);
							forms.Palab_tbl_palabde.foundset['protocolo'] = protocolo;
						}
						*/
						
							
						globals.DIALOGS.showInfoDialog("Resultado","El pedido de análisis de laboratorio se Guardó correctamente.","Aceptar");
						
						//IMPRE-CUPON
						if($_wHIV == 1){
							
							imprimirCupon(palab_rel_buscar_admision_num.adm_histclin,protocolo,fecha,hora);
							globals.DIALOGS.showInfoDialog("Información","Imprimiendo cupón de consentimiento informado.","Aceptar");
							var print = globals.DIALOGS.showQuestionDialog('¡Atención!','¿Desea reimprimir el cupón?', 'Si', 'No');
							if( print == 'Si'){
								imprimirCupon(palab_rel_buscar_admision_num.adm_histclin,protocolo,fecha,hora);								
							}
						}
						
						//TODO LISTAR-CODAUTO-00
						if($_codAutoFuncion == 1){
						
							$_codAutoFuncion = 0;
							
						}
						
						if(application.getSolutionName() == "Hcipiso")
							cerrarForm();
						else
							limpiarForm();
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
						
						if(error1!=''){
							globals.DIALOGS.showErrorDialog("Error de grabación","Record validation failed: " + thrown)
							globals.DIALOGS.showErrorDialog("Error en grabacion de Histórico",error1,"Aceptar")
							globals.DIALOGS.showErrorDialog("Error en grabacion de Histórico",error2,"Aceptar")
						}
						globals.DIALOGS.showErrorDialog("Error en grabación","Se ha producido un error de grabación. "+'\n'+"Avise a Sistemas, por favor.", "Aceptar")
					}
				}
				else{
					
					globals.DIALOGS.showWarningDialog("Atención!","No ha sido posible guardar el pedido. Vuelva a intentar.\nSi el problema persiste contacte al administrador del sistema.","Aceptar")
				}
			}	
		}
	}
	else{
		
		if(f_protocolo != null)
			globals.DIALOGS.showWarningDialog("Atención!","Para generar una nuevo pedido, presione el boton Nuevo.","Aceptar")
		else{
			if($isDirty == false)
				globals.DIALOGS.showWarningDialog("Atención!","No hay datos para guardar.","Aceptar")
		}
	}
	}
}

/**
 * TODO generated, please specify type and doc for the params
 * @param analisis
 * @param protocolo
 * @param fecha
 * @param hora
 * @param cabeceraCod
 *
 * @properties={typeid:24,uuid:"36F9725C-8A49-4F7F-AA83-8D0506598AC0"}
 */
function guardarItem(analisis,protocolo,fecha,hora,cabeceraCod){

	//databaseManager.revertEditedRecords();
	
	palab_rel_protocol.newRecord();
	inicializarProtocol();
	
	palab_rel_protocol.prot1 = palab_rel_buscar_admision_num.adm_histclin;
	palab_rel_protocol.prot4 = protocolo;
	palab_rel_protocol.prot24 = protocolo;
	palab_rel_protocol.prot10 = fecha;
	palab_rel_protocol.prot14 = hora;
	palab_rel_protocol.prot5 = analisis.ana1;
	palab_rel_protocol.prot13 = analisis.ana1;
	palab_rel_protocol.prot11 = analisis.ana3;
	palab_rel_protocol.prot12 = analisis.ana4;
	palab_rel_protocol.prot39 = palab_rel_buscar_medicos_personal.medpercod;
	palab_rel_protocol.prot15 = f_egreso == 1? 3 : f_estado;
	palab_rel_protocol.prot17 = 4;
	palab_rel_protocol.prot22 = analisis.ana29;
	
	if($_flagJS == 0 || $_wJS == 0)
		palab_rel_protocol.prot25 = 0; 
	else
		palab_rel_protocol.prot25 = 1;
	
	palab_rel_protocol.prot26 = analisis.ana28;
	palab_rel_protocol.prot32 = cabeceraCod;
	palab_rel_protocol.prot361 = 1;//TODO PRM54
	palab_rel_protocol.prot362 = palab_rel_buscar_admision_num.adm_utiliza;
	palab_rel_protocol.prot41 = f_diferido;
	palab_rel_protocol.prot50 = palab_rel_buscar_medicos_personal.medpertipoie;
	palab_rel_protocol.prot52 = palab_rel_buscar_admision_num.adm_habita;
	palab_rel_protocol.prot53 = palab_rel_buscar_admision_num.adm_cama;
	palab_rel_protocol.protcodpl = analisis.ana6;
	/*
	plugins.dialogs.showInfoDialog("protocolo",protocolo,"Si")
	plugins.dialogs.showInfoDialog("protocolo codpl",palab_rel_protocol.protcodpl,"Si")
	plugins.dialogs.showInfoDialog("histclin",palab_rel_buscar_admision_num.adm_histclin,"Si")
	plugins.dialogs.showInfoDialog("fecha",fecha,"Si")
	plugins.dialogs.showInfoDialog("hora",hora,"Si")
	plugins.dialogs.showInfoDialog("analisis.ana1",analisis.ana1,"Si")
	plugins.dialogs.showInfoDialog("analisis.ana3",analisis.ana3,"Si")
	plugins.dialogs.showInfoDialog("analisis.ana4",analisis.ana4,"Si")
	plugins.dialogs.showInfoDialog("palab_rel_buscar_medicos_personal.medpercod",palab_rel_buscar_medicos_personal.medpercod,"Si")
	plugins.dialogs.showInfoDialog("f_egreso",f_egreso,"Si")
	plugins.dialogs.showInfoDialog("f_estado",f_estado,"Si")
	plugins.dialogs.showInfoDialog("analisis.ana29a",analisis.ana29,"Si")
	plugins.dialogs.showInfoDialog("analisis.ana28",analisis.ana28,"Si")
	plugins.dialogs.showInfoDialog("cabeceraCod",cabeceraCod,"Si")
	plugins.dialogs.showInfoDialog("palab_rel_buscar_admision_num.adm_utiliza",palab_rel_buscar_admision_num.adm_utiliza,"Si")
	plugins.dialogs.showInfoDialog("f_diferido",f_diferido,"Si")
	plugins.dialogs.showInfoDialog("palab_rel_buscar_medicos_personal.medpertipoie",palab_rel_buscar_medicos_personal.medpertipoie,"Si")
	plugins.dialogs.showInfoDialog("palab_rel_buscar_admision_num.adm_habita",palab_rel_buscar_admision_num.adm_habita,"Si")
	plugins.dialogs.showInfoDialog("palab_rel_buscar_admision_num.adm_cama",palab_rel_buscar_admision_num.adm_cama,"Si")
	plugins.dialogs.showInfoDialog("hora",hora,"Si")
	*/
	
	return databaseManager.saveData(palab_rel_protocol.getRecord(1));
	/*
	application.output(palab_rel_protocol.prot1
		+' '+palab_rel_protocol.prot4
		+' '+palab_rel_protocol.prot5
		+' '+palab_rel_protocol.prot10
		+' '+palab_rel_protocol.prot24
		+' '+palab_rel_protocol.prot11
		+' '+palab_rel_protocol.prot12
		+' '+palab_rel_protocol.prot13
		+' '+palab_rel_protocol.prot39
		+' '+palab_rel_protocol.prot14
		+' '+palab_rel_protocol.prot15
		+' '+palab_rel_protocol.prot16
		+' '+palab_rel_protocol.prot17
		+' '+palab_rel_protocol.prot18
		+' '+palab_rel_protocol.prot19
		+' '+palab_rel_protocol.prot20
		+' '+palab_rel_protocol.prot22
		+' '+palab_rel_protocol.prot23
		+' '+palab_rel_protocol.prot25
		+' '+palab_rel_protocol.prot26
		+' '+palab_rel_protocol.prot27
		+' '+palab_rel_protocol.prot28
		+' '+palab_rel_protocol.prot32
		+' '+palab_rel_protocol.prot33
		+' '+palab_rel_protocol.prot34
		+' '+palab_rel_protocol.prot35
		+' '+palab_rel_protocol.prot361
		+' '+palab_rel_protocol.prot362
		+' '+palab_rel_protocol.prot40
		+' '+palab_rel_protocol.prot41
		+' '+palab_rel_protocol.prot50
		+' '+palab_rel_protocol.prot51
		+' '+palab_rel_protocol.prot52
		+' '+palab_rel_protocol.prot53
		+' '+palab_rel_protocol.prot54
		+' '+palab_rel_protocol.prot55
		+' '+palab_rel_protocol.prot56
		+' '+palab_rel_protocol.prot57
		+' '+palab_rel_protocol.prot58
		);*/
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"17131173-A7FE-472A-B4EA-3867858F4658"}
 */
function onAction_btnBuscarPaciente(event) {
	
	globals.Palab_eventSourceButton = 1;
	openSearch();
}

/**

 * @private
 *
 * @properties={typeid:24,uuid:"8303D18B-4D1E-4DC6-9F41-E22F91A3204D"}
 */
function openSearch() {
	
	var win2 = application.createWindow("seleccion_internado", JSWindow.MODAL_DIALOG);
	win2.title = 'Búsqueda de Pacientes Internados';
	win2.resizable = false;
	win2.show(forms.Palab_dlg_buscar_internado);
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"5406C628-AB7E-40C0-8C13-2240AE59CEA7"}
 */
function onAction_txtBusquedaRapida(event) {
	
	if(elements.txt_paciente.editable){
		
		globals.Palab_hisclistrynro = f_paciente;
		if(globals.Palab_hisclistrynro != '' && globals.Palab_hisclistrynro != null){
			globals.Palab_eventSourceButton = 0;
			openSearch();
			//$isDirty = true;
		}
		else{
			globals.DIALOGS.showWarningDialog("Atención",'Debe ingresar Nro. de paciente o apellido.',"Aceptar")
		}
	}
}

/**

 * @private
 *
 * @properties={typeid:24,uuid:"2304608B-1E70-4A75-967E-912147AB309E"}
 */
function isValidDataForm() {
	
	var isValid = true;	
	var messageError = "No ha sido posible guardar la solicitud. Corrija los siguientes errores y vuelva a intentar."
	var borderError = 'LineBorder,1,#ff0000';
	setDefaultBorderElements();
		
	if(f_histClinUnica == null){
		elements.txt_paciente.border = borderError;
		messageError += "\nDebe ingresar paciente.";
		isValid = false;
	}

	if (forms.Palab_tbl_palabde.foundset.getSize() == 0){
		elements.lbl_analisis.border = borderError;	
		messageError += "\nDebe ingresar al menos un item de práctica.";        
        isValid = false;
	}
	
	if(!isValid){
		globals.DIALOGS.showWarningDialog("¡Atención!",messageError,"Aceptar")
	}
	
	return isValid;
}

/**
 * @properties={typeid:24,uuid:"D391BB8D-7230-487B-AF73-7508F148EF14"}
 * @AllowToRunInFind
 */
function isValidData () {
	
	var isValid = true;	
	var messageError = "No ha sido posible guardar el pedido. Corrija los siguientes errores y vuelva a intentar.";
	globals.Palab_admHistClin = globals.Palab_hisclin;
	var mcaProtHug = 0;
	var wPedAnt1 = 0;
	var wPedAnt2 = 0;
	var fechaSistema = application.getServerTimeStamp();
	var feSistema = utils.stringToNumber( globals.FormatearFecha(fechaSistema,'AAAAMMDD'));
	
	//Para osecac no se pide fundamentacion
	var obr = palab_rel_admision.adm_obrsoc;
	if(obr == 101 || obr == 1545 || obr == 1721 || obr == 1821){
	}
	else{
		//Se pide fundamentacion cuando el medico es responsable y si almenos un analisis solicita legajo autorizado
		if($_flagJS == 1 && $_wJS > 0){
			
			// PEDIR-MOT-FUND
			openProtxt("$_motivo");
		}
	}
	
	var mcaRepHug = false;
	// VER-PED-HUG Se pidio HEMOGRAMA-UREMIA-GLUCEMIA (juntos)
	var continuar = ver_ped_hug();
	if(continuar){
		
		//FECHA-INT-MAS-CINCO La fecha del estudio esta dentro de los primeros cinco dias de internado
		continuar = fecha_int_mas_cinco();
	}
	
	//continuar
	if(continuar){
		
		// VER-HEMO-UREA-GLUC
		var sqlHUG = "select Prot5,Prot4,Prot10,Prot14 from tbc_protocol"
			      + " where Prot1 = " + palab_rel_admision.adm_histclin
			      + " and (prot17 <> 3 and prot17 <> 6 and prot17 <> 7)"
			      + " and (Prot10 >= " + palab_rel_admision.adm_fecing + " and Prot10 <= " + feSistema + ")"
			      + " and (Prot5 = 1000 or Prot5 = 1030 or Prot5 = 1029)"
			      + " order by Prot10 desc";
		var ds_hemoUreaGluc = databaseManager.getDataSetByQuery('asistencial',sqlHUG,null,-1);
		
		var hug1 = new Object();
		hug1.mca = false;
		var hug2 = new Object();
		hug2.mca = false;
		var hug3 = new Object();
		hug3.mca = false;
		//Verificando si ya existe pedido 
		if(ds_hemoUreaGluc.getMaxRowIndex() > 0){
			
			for(var i = 1 ; i <=ds_hemoUreaGluc.getMaxRowIndex() ; i++){
				
				if(ds_hemoUreaGluc.getValue(i,1) == 1000 && hug1.mca == false){
					
					hug1.mca = true;
					hug1.ped = ds_hemoUreaGluc.getValue(i,2);
					hug1.fec = ds_hemoUreaGluc.getValue(i,3);
					hug1.hor = ds_hemoUreaGluc.getValue(i,4);
				}
					
				if(ds_hemoUreaGluc.getValue(i,1) == 1030 && hug2.mca == false){
					
					hug2.mca = true;
					hug2.ped = ds_hemoUreaGluc.getValue(i,2);
					hug2.fec = ds_hemoUreaGluc.getValue(i,3);
					hug2.hor = ds_hemoUreaGluc.getValue(i,4);
				}
					
				
				if(ds_hemoUreaGluc.getValue(i,1) == 1029 && hug3.mca == false){
					
					hug3.mca = true;
					hug3.ped = ds_hemoUreaGluc.getValue(i,2);
					hug3.fec = ds_hemoUreaGluc.getValue(i,3);
					hug3.hor = ds_hemoUreaGluc.getValue(i,4);
				}
				
				if(hug1.mca && hug2.mca && hug3.mca)
					break;
			}
		}
		
		if(hug1.mca == true && hug2.mca == true && hug3.mca == true){
			// Se pidieron nuevamente los 3 codigos 1000 1030 y 1029 
			for(var m=1 ; m<=forms.Palab_tbl_palabde.foundset.getSize() ; m++){
				
				forms.Palab_tbl_palabde.foundset.setSelectedIndex(m);
				
				if(forms.Palab_tbl_palabde.foundset['codigo'] == 1000 || forms.Palab_tbl_palabde.foundset['codigo'] == '1000'){
					
					forms.Palab_tbl_palabde.foundset['it_mca_rep'] = 'X';
					forms.Palab_tbl_palabde.foundset['it_ped_ant'] = hug1.ped;
					forms.Palab_tbl_palabde.foundset['it_fec_ant'] = hug1.fec;
					forms.Palab_tbl_palabde.foundset['it_hor_ant'] = hug1.hor;
				}
				
				if(forms.Palab_tbl_palabde.foundset['codigo'] == 1030 || forms.Palab_tbl_palabde.foundset['codigo'] == '1030'){
					
					forms.Palab_tbl_palabde.foundset['it_mca_rep'] = 'X';
					forms.Palab_tbl_palabde.foundset['it_ped_ant'] = hug2.ped;
					forms.Palab_tbl_palabde.foundset['it_fec_ant'] = hug2.fec;
					forms.Palab_tbl_palabde.foundset['it_hor_ant'] = hug2.hor;
				}

				if(forms.Palab_tbl_palabde.foundset['codigo'] == 1029 || forms.Palab_tbl_palabde.foundset['codigo'] == '1029'){
					
					forms.Palab_tbl_palabde.foundset['it_mca_rep'] = 'X';
					forms.Palab_tbl_palabde.foundset['it_ped_ant'] = hug3.ped;
					forms.Palab_tbl_palabde.foundset['it_fec_ant'] = hug3.fec;
					forms.Palab_tbl_palabde.foundset['it_hor_ant'] = hug3.hor;
				}	
			}
				
			mcaRepHug = true;
		}
		
		// OBT-FECHA-HORA-HUG
		if(hug1.fec < hug2.fec){
			
			hug1.ped = hug2.ped; 
			hug1.fec = hug2.fec;
			hug1.hor = hug2.hor;
		}
		
		if(hug1.fec < hug3.fec){
			
			hug1.ped = hug3.ped; 
			hug1.fec = hug3.fec;
			hug1.hor = hug3.hor;
		}
		
		// OBT-PROT-ANT
		mcaProtHug = 0;
		wPedAnt1 = 0;
		wPedAnt2 = 0;
		if(hug1.ped == hug2.ped && hug1.ped == hug3.ped){
			
			mcaProtHug = 1;
		}
		else{
			if(hug1.ped == hug2.ped){
				
				mcaProtHug = 2;
				wPedAnt1 = hug1.ped;
				wPedAnt2 = hug3.ped;
			}
			else{
				if(hug1.ped == hug3.ped){
					
					mcaProtHug = 2;
					wPedAnt1 = hug1.ped;
					wPedAnt2 = hug2.ped;
				}
				else{
					if(hug2.ped == hug3.ped){
						
						mcaProtHug = 2;
						wPedAnt1 = hug1.ped;
						wPedAnt2 = hug2.ped;
					}
				}
			}
		}
	}
	
	//SIGO-LABORATORIO
	
	//FECHA-INT-MAS-UNO
	
	try{
	var fIntMasUno = sumarDiferido(palab_rel_admision.adm_fecing,1);
	}catch (msg){
		plugins.dialogs.showInfoDialog(" error fIntMasUno",palab_rel_admision.adm_fecing)
	}
	if(palab_rel_admision.adm_fecing == feSistema || fIntMasUno == feSistema){
		
		// VER-PED-AMBULATORIO
		verPedAmbulatorio(palab_rel_admision.adm_histclin,palab_rel_admision.adm_fecing,feSistema,palab_rel_admision.adm_obrsoc,palab_rel_admision.adm_nrobenef);
		
		// VER-PED-INTERNADO
		verPedInternado(palab_rel_admision.adm_histclin,palab_rel_admision.adm_fecing,feSistema);
	}
	

	// VER-REPET-ESTUDIOS
	var pVez = true;
	var mcaAux = ' ';
	var wCausaHug = "";
	var record;
	
	for(var n =1; n <= forms.Palab_tbl_palabde.foundset.getSize() ; n++){
		
		forms.Palab_tbl_palabde.foundset.setSelectedIndex(n);
		record = forms.Palab_tbl_palabde.foundset.getSelectedRecord();
		
		if(record['it_mca_rep'] == 'X'){
			
			if(mcaRepHug == true && (forms.Palab_tbl_palabde.foundset['codigo'] == 1000 || forms.Palab_tbl_palabde.foundset['codigo'] == 1030 || forms.Palab_tbl_palabde.foundset['codigo'] == 1029) && pVez == false){
				
				forms.Palab_tbl_palabde.foundset['it_mca_rep'] = mcaAux;
				forms.Palab_tbl_palabde.foundset['it_det_causa'] = wCausaHug;
			}
			else{
				
				var fechaHug;
				var horaHug;
				var texto = "";
				var result;
				var conf = "";
				
				if(mcaRepHug == true && (forms.Palab_tbl_palabde.foundset['codigo'] == 1000 || forms.Palab_tbl_palabde.foundset['codigo'] == 1030 || forms.Palab_tbl_palabde.foundset['codigo'] == 1029)){
					
					fechaHug = String(hug1.fec).substr(6,2) + "/" + String(hug1.fec).substr(4,2) + "/" + String(hug1.fec).substr(0,4);
					horaHug = convertNumberToHour_HHMM(hug1.hor);
					texto = "";
					pVez = false;
					
					if(mcaProtHug == 1){
						
						// PERFORM DISP-MSG-HUG-1
						texto = "Sr. Profesional: el dia " + fechaHug + " a las " + horaHug + " hs se solicitaron para el paciente los estudios HEMOGRAMA/UREMIA/GLUCEMIA con prot. " + hug1.ped;		
					}
					else{
						// PERFORM DISP-MSG-HUG-2
						texto = "Sr. Profesional: el dia " + fechaHug + " se solicitaron para el paciente los ";
						if(mcaProtHug == 2)
							texto += "estudios HEMOGRAMA/UREMIA/GLUCEMIA con prot. " + wPedAnt1 + ", " + wPedAnt2; 
						if(mcaProtHug == 3)
							texto += "estudios HEMOGRAMA/UREMIA/GLUCEMIA con prot. " + hug1.ped + ", " + hug2.ped + ", " + hug3.ped;	
					}
				}
				else{
					// PERFORM DISP-MSG-LABORATORIO.
					fechaHug = String(forms.Palab_tbl_palabde.foundset['it_fec_ant']).substr(6,2) + "/" + String(forms.Palab_tbl_palabde.foundset['it_fec_ant']).substr(4,2) + "/" + String(forms.Palab_tbl_palabde.foundset['it_fec_ant']).substr(0,4);
					horaHug = convertNumberToHour_HHMM(forms.Palab_tbl_palabde.foundset['it_hor_ant']);
					texto = "Sr. Profesional: el dia " + fechaHug + " a las " + horaHug + " hs, con prot. " + forms.Palab_tbl_palabde.foundset['it_ped_ant'] + " se solicito para el paciente el estudio " + forms.Palab_tbl_palabde.foundset['analisis'];
				}
				
				result = "";
				var exit = false;
				while(!exit){
					
					result = globals.DIALOGS.showQuestionDialog('¡Atención!', texto + '\n¿ Confirma nuevo pedido ?', 'Si', 'No');
					if(result == 'Si'){
						exit = true;
						conf = 'S';
					}
						
					if(result == 'No'){
						exit = true;
						conf = 'N'
					}
				}
				
				if(conf == 'S'){
					
					if(palab_rel_admision.adm_obrsoc == 101 || palab_rel_admision.adm_obrsoc == 1545 || palab_rel_admision.adm_obrsoc == 1721 || palab_rel_admision.adm_obrsoc == 1842){
					}
					else{
						
						openProtxt("$_causa");
						forms.Palab_tbl_palabde.foundset['it_det_causa'] = $_causa;
					}
				}
				
				forms.Palab_tbl_palabde.foundset['it_mca_rep'] = conf;
				
				if(mcaRepHug){
					mcaAux = conf;
					wCausaHug = forms.Palab_tbl_palabde.foundset['it_det_causa']   
				}
			}
		}
	}
	
	// MARCAR-DEPEN-REPETIDOS
	marcarDepenRepetidos();
	
	// Validar si hay almenos un item para guardar
	if(isValid){
		
		var item;
		isValid = false;
		var listItems ="";
		for(var k=1 ; k<= forms.Palab_tbl_palabde.foundset.getSize() ; k++){
			
			forms.Palab_tbl_palabde.foundset.setSelectedIndex(k);
			item = forms.Palab_tbl_palabde.foundset.getSelectedRecord();
			
			if(item['it_mca_rep'] == 'S' || utils.stringTrim(item['it_mca_rep']).length == 0){
				isValid = true;
			}
			else{
				listItems += " " + item['codigo'];
			}
		}
		
		if(!isValid)
			messageError += "\n Análisis no confirmados:" + listItems + ".";
	}
	
	if(!isValid){

		globals.DIALOGS.showWarningDialog("Atención!",messageError,"Aceptar")
		elements.txt_analisis.requestFocus();
	}
	
	return isValid;
}

/**
 * @properties={typeid:24,uuid:"86A556C7-ADB6-441C-A5F7-CFFF091AF8D2"}
 * @AllowToRunInFind
 */
function marcarDepenRepetidos(){
	
	var fs_depen = forms.Palab_tbl_palab_dependencias.foundset.duplicateFoundSet();
	var data;
	
	for(var i=1 ; i<=forms.Palab_tbl_palabde.foundset.getSize() ; i++){
		
		forms.Palab_tbl_palabde.foundset.setSelectedIndex(i);
		
		if(utils.stringTrim(forms.Palab_tbl_palabde.foundset['it_mca_rep']).length > 0){
			
			fs_depen.clear();
			fs_depen.loadAllRecords();
			fs_depen.find();
			fs_depen['it_ped_depen'] = forms.Palab_tbl_palabde.foundset['codigo'];
				
			if(fs_depen.search() > 0){
				
				for(var j=1 ; j<=forms.Palab_tbl_palab_dependencias.foundset.getSize() ; j++){
					
					forms.Palab_tbl_palab_dependencias.foundset.setSelectedIndex(j);
					data = forms.Palab_tbl_palab_dependencias.foundset.getSelectedRecord();
					
					
					if(forms.Palab_tbl_palabde.foundset['codigo'] == data['it_ped_depen'])
						forms.Palab_tbl_palab_dependencias['it_d_mca_rep'] = forms.Palab_tbl_palabde.foundset['it_mca_rep']; 
				}
			}	
		}
	}
}

/**
 * TODO generated, please specify type and doc for the params
 * @param {Number} histClin
 * @param {Number} fechaInt
 * @param {Number} fechaActual
 *
 * @properties={typeid:24,uuid:"60BB8279-36EE-4A54-8ED4-419C66F3EB9D"}
 */
function verPedInternado(histClin,fechaInt,fechaActual) {
	// VER-PED-INTERNADO
	var sqlHUG = "select Prot5,Prot4,Prot10,Prot14 from tbc_protocol"
			  + " where Prot1 = " + histClin
			  + " and (prot17 <> 3 and prot17 <> 6 and prot17 <> 7)"
			  + " and (Prot10 >= " + fechaInt + " and Prot10 <= " + fechaActual + ")"
			  + " order by Prot10 desc";
    var ds_protocol = databaseManager.getDataSetByQuery('asistencial',sqlHUG,null,-1);
    
    if(ds_protocol.getMaxRowIndex() > 0){
    	
    	for(var j = 1 ; j<=forms.Palab_tbl_palabde.foundset.getSize() ; j++){
    		
    		forms.Palab_tbl_palabde.foundset.setSelectedIndex(j);
    		
    		for(var i=1 ; i<= ds_protocol.getMaxRowIndex() ; i++){
            			
    			if(forms.Palab_tbl_palabde.foundset['codigo'] == ds_protocol.getValue(i,1)){
    				
    				forms.Palab_tbl_palabde.foundset['it_mca_rep'] = 'X';
    				forms.Palab_tbl_palabde.foundset['it_ped_ant'] = ds_protocol.getValue(i,2);
    				forms.Palab_tbl_palabde.foundset['it_fec_ant'] = ds_protocol.getValue(i,3);
    				forms.Palab_tbl_palabde.foundset['it_hor_ant'] = ds_protocol.getValue(i,4);
    				
    				break;
    			}
            }
    	}
    	forms.Palab_tbl_palabde.foundset.setSelectedIndex(1);
    	
    }
}

/**
 * TODO generated, please specify type and doc for the params
 * @param {Number} histClin
 * @param {Number} fechaInt
 * @param {Number} fechaActual
 * @param {Number} obr
 * @param {String} afiliado
 *
 * @properties={typeid:24,uuid:"4D09D352-0B29-4294-99F9-FA3538E8332A"}
 * @AllowToRunInFind
 */
function verPedAmbulatorio(histClin,fechaInt,fechaActual,obr,afiliado) {
	// VER-PED-AMBULATORIO
	var fechaIntMenosUno = restarDias(fechaInt,1)
	
	var sqlHUG = "select Prac1,Prac3,Prac8,Prac2 from tbc_protamb_cab"
			  + " where Prac7 >= " + fechaIntMenosUno
			  + " and Prac7 <= " + fechaActual
			  + " and Prac4 = " + obr
			  + " and Prac6 = " + afiliado
			  + " and Prac10 <> 9";
    var ds_protAmbCab = databaseManager.getDataSetByQuery('asistencial',sqlHUG,null,-1);
    
    if(ds_protAmbCab.getMaxRowIndex() > 0){
    	
    	var fs_depen = forms.Palab_tbl_palab_dependencias.foundset.duplicateFoundSet();
    	
    	for(var j = 1 ; j<=forms.Palab_tbl_palabde.foundset.getSize() ; j++){
    		
    		forms.Palab_tbl_palabde.foundset.setSelectedIndex(j);
    		var codigo = forms.Palab_tbl_palabde.foundset['codigo'];
    		
    		// El analisis a evaluar tiene dependencias
    		if(forms.Palab_tbl_palabde.foundset['ana19'] == 1){
    			
    			fs_depen.clear();
    			fs_depen.loadAllRecords();
    			
    			if(fs_depen.find()){
    				
    				fs_depen['it_ped_depen'] = codigo;
    				fs_depen.search();
    				
    				if(fs_depen.getSize() > 0){
    					fs_depen.setSelectedIndex(1);
    					codigo = fs_depen['it_depen'];
    				}
    			}
    		}
    		
    		for(var i=1 ; i<= ds_protAmbCab.getMaxRowIndex() ; i++){
            			
    			if(codigo == ds_protAmbCab.getValue(i,1)){
    				
    				forms.Palab_tbl_palabde.foundset['it_mca_rep'] = 'X';
    				forms.Palab_tbl_palabde.foundset['it_ped_ant'] = ds_protAmbCab.getValue(i,1);
    				forms.Palab_tbl_palabde.foundset['it_fec_ant'] = ds_protAmbCab.getValue(i,2);
    				forms.Palab_tbl_palabde.foundset['it_hor_ant'] = ds_protAmbCab.getValue(i,3);
    				forms.Palab_tbl_palabde.foundset['it_hc_amb'] = ds_protAmbCab.getValue(i,4);
    				
    				break;
    			}
            }
    	}
    	
    }
}

/**
 * TODO generated, please specify type and doc for the params
 * @param {String} varName
 *
 * @properties={typeid:24,uuid:"29476AF6-BCBA-4502-98CE-341444AB3AED"}
 */
function openProtxt(varName) {
	
	forms.Palab_dlg_protxt.$_varName = varName;
	
	var win2 = application.createWindow("motivo_fundamentacion", JSWindow.MODAL_DIALOG);
	win2.title = 'Motivo y Fundamentación';
	win2.resizable = false;
	win2.show(forms.Palab_dlg_protxt);
}

/**
 * @properties={typeid:24,uuid:"D20F8D12-7D71-4A30-A823-6A987F84829A"}
 */
function setDefaultBorderElements() {
	
	var border = 'LineBorder,1,null';
	elements.txt_paciente.border = border;
	elements.lbl_analisis.border = null;
	
}

/**
 * TODO generated, please specify type and doc for the params
 * @param editable
 *
 * @properties={typeid:24,uuid:"E0DA5133-2421-42A9-83B5-51318BEEB6F8"}
 */
function setEditableElements(editable) {
	
	//elements.btn_agregarItem.enabled = editable,
	elements.btn_buscarPaciente.enabled = editable;
	elements.txt_paciente.editable= editable;
}

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"6B52EF14-7232-43D1-97D0-46B6FF6EB5DB"}
 * @AllowToRunInFind
 */
function onAction_btnNuevo(event) {
		
		/*
	var fs_avisoTec = databaseManager.getFoundSet('Asistencial','tbc_avisotec');
	fs_avisoTec.newRecord();
	fs_avisoTec['a23691'] = 40000; 
	fs_avisoTec['a23692'] = 0;
	fs_avisoTec['a23693'] = 0;
	
	databaseManager.saveData(fs_avisoTec.getRecord(1));
	*/
	//tienePermiPedUsuario(0,11421,0,99,4,99,999999);
	//marcarDepenRepetidos();

	//verPedInternado(2466140,20180112,20180116);
	
	/*
	for(var j=1 ; j<= forms.Palab_tbl_palab_dependencias.foundset.getSize() ; j++){
		
		forms.Palab_tbl_palab_dependencias.foundset.setSelectedIndex(j);
	    application.output(forms.Palab_tbl_palab_dependencias.foundset['it_ped_depen'] + " " + forms.Palab_tbl_palab_dependencias.foundset['it_depen'] + " " + forms.Palab_tbl_palab_dependencias.foundset['it_d_js'] + " "+ forms.Palab_tbl_palab_dependencias.foundset['it_d_mca_rep']);
	    
	 }
	
	application.output("Causa: " + $_causa);
	for(var i=1 ; i<= forms.Palab_tbl_palabde.foundset.getSize() ; i++){
		
		forms.Palab_tbl_palabde.foundset.setSelectedIndex(i);
	    application.output(forms.Palab_tbl_palabde.foundset['codigo'] + " " + forms.Palab_tbl_palabde.foundset['it_mca_rep'] + " " + forms.Palab_tbl_palabde.foundset['it_ped_ant'] + " "+ forms.Palab_tbl_palabde.foundset['it_fec_ant'] + " " + forms.Palab_tbl_palabde.foundset['it_hor_ant'] + " " + forms.Palab_tbl_palabde.foundset['it_det_causa']);
	    
	 }
*/
	//imprimirCupon(palab_rel_buscar_admision_num.adm_histclin,24569,20180322,1054);
	
	//imprimirAutorizacion(2466140,100999,20180326,1213,$_empresa,$_planx,9);
	
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
		limpiarForm();
	}

}

/**
 * @properties={typeid:24,uuid:"73D0CBB5-35FC-490D-9765-5804039332B0"}
 */
function limpiarForm () {
	
	inicializarForm();
	setDefaultBorderElements();
	setEditableElements(true);
	setVisibleAnalisis(false);
	elements.txt_paciente.requestFocus();
	$isDirty = false;
}

/**
 * @properties={typeid:24,uuid:"54A29983-393F-4365-ABAD-FB35AB0E92B8"}
 */
function inicializarForm() {
	
	f_histClinUnica = null;
	f_paciente = null;
	f_cobertura = null;
	f_protocolo = null;
	f_analisis = null;
	f_cama = null;
	f_habita = null;
	//f_medico = null;
	f_utiliza = null;
	f_egreso = null;
	f_cerrarForm = false;
	$_motivo = '';
	$_wHIV = false;
	$_causa = '';
	
	elements.cbo_egreso.visible = false;
	elements.lbl_estado.visible = false;
	elements.cbo_estado.visible = false;
	elements.cbo_diferido.visible = false;
	elements.cbo_estado.readOnly = false;
	elements.cbo_diferido.readOnly = false;
	forms.Palab_tbl_palabde.foundset.deleteAllRecords();
	forms.Palab_tbl_palab_dependencias.foundset.deleteAllRecords();
	elements.lbl_countItem.text = "Items sin Guardar";
}

/**
 * Handle hide window.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"09D6CA5E-B5A9-4452-B0BF-43E43F0DDFBF"}
 */
function onHide_recepcionProtesis(event) {
	
	return f_cerrarForm;
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"0E34DF1D-17BF-4E1E-87F7-759AFADAC761"}
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
		
		cerrarForm();
	}
}

/**
 * @properties={typeid:24,uuid:"1124D205-9597-4CED-AD75-0FD9B4F871DF"}
 */
function cerrarForm() {
	
	f_cerrarForm = true;
	
	var $win = application.getWindow(application.getActiveWindow().getName());
	if($win != null){
		
		$win.hide();
		$win.destroy();
	}
}

/**
 * @properties={typeid:24,uuid:"540CC594-B0B6-4F8D-A069-F9C032A41B19"}
 */
function editablePaciente (value){
	elements.txt_paciente.editable = value;
	elements.btn_buscarPaciente.enabled = value;
}

/**
 * @properties={typeid:24,uuid:"83DA1FB3-0F07-4DE4-A3E4-4BF345B6398B"}
 */
function isValidDatosPacienteInter (){
	
	var isValid = true;	
	//$messageErrorInter = '';
	
	return isValid;
}

/**
 * @properties={typeid:24,uuid:"76E10222-A4E7-4B1E-81B5-36646CB0EF4A"}
 */
function clearDatosPaciente () {
	f_paciente = null;
	f_histClinUnica = null;
	f_cobertura = null;
}

/**
 * @properties={typeid:24,uuid:"6A1AB4D8-7BE5-4DF2-BA61-1C8FBEB1EB78"}
 */
function obtenerFechaDesde (fechaHasta) {
	var dateAux = new Date();
	dateAux = globals.IntegerToDate(utils.stringToNumber(fechaHasta));
	dateAux.setTime(dateAux.getTime()-(1000*60*60*24));
	var fechaDesde = globals.FormatearFecha(dateAux, 'AAAAMMDD');
	 
	return fechaDesde;
}

/**
 * TODO generated, please specify type and doc for the params
 * @param {Number} protocolo
 * @param {String} texto
 *
 * @properties={typeid:24,uuid:"1B3F0A8F-DD70-45FD-9504-00D7238FB75D"}
 */
function grabar_TextoMotivo(protocolo,texto) {
	
	if(utils.stringTrim(texto).length > 0){
		
		//application.setClipboardContent(texto)
		var fs1 = databaseManager.getFoundSet("asistencial", "tbc_protxt")
		var j = 0;

		var longitudTexto = 0;
		longitudTexto = texto.length;
		
		var posicionFinal = 0;
		posicionFinal = texto.indexOf("\n");
		
		var posicionInicial = 0;
		if (posicionFinal < 0)
			posicionFinal = texto.length
			
		var lineas = Math.round(longitudTexto / 78);

		var resto = longitudTexto % 78;
		posicionFinal = 78;
		if (resto > 0)
			++lineas;
		var lineascab = 0;

		for (j = 1; j < lineas + 1; j++) {
			var vlarguito = texto.substr(posicionInicial, 78)
			if (vlarguito != '') {
				fs1.newRecord();
				fs1['ptxprotocolo'] = protocolo;
				fs1['ptxtipo'] = 1;
				fs1['ptxanalisis'] = 0;
				fs1['ptxsecuencia'] = j;
				fs1['ptxlinea'] = texto.substr(posicionInicial, 78);
				
				try{
					databaseManager.saveData(fs1.getRecord(1))
					var error1 = ''
					var error2 = ''
					var array = databaseManager.getFailedRecords(fs1)
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
					
					if(error1!=''){
						globals.DIALOGS.showErrorDialog("Error en grabación","Se ha producido un error de grabación. "+'\n'+"Avise a Sistemas, por favor.", "Aceptar")
						globals.DIALOGS.showErrorDialog("Error de grabación","Record validation failed: " + thrown)
						globals.DIALOGS.showErrorDialog("Error en grabacion de Protxt",error1,"Aceptar")
						globals.DIALOGS.showErrorDialog("Error en grabacion de Protxt",error2,"Aceptar")
					}
										
				}catch (msg){
					(plugins.dialogs.showInfoDialog("No graba texto de pedido de laboratorio internados",msg.toString(),"ok"))
					//application.output(msg.message);
				}
				posicionInicial = posicionInicial + 78;
				++lineascab
			}
		}
	}
	
}

/**
 * TODO generated, please specify type and doc for the params
 * @param texto
 *
 * @properties={typeid:24,uuid:"18D2F713-6CB3-4C5D-8D2F-053453F5C73D"}
 */
function cantidadLineas(texto) {
	
	var j = 0;

	var longitudTexto = 0;
	longitudTexto = texto.length;
	
	var posicionFinal = 0;
	posicionFinal = texto.indexOf("\n");
	
	var posicionInicial = 0;
	if (posicionFinal < 0)
		posicionFinal = texto.length
		
	var lineas = Math.round(longitudTexto / 78);

	var resto = longitudTexto % 78;
	posicionFinal = 78;
	if (resto > 0)
		++lineas;
	var lineascab = 0;

	for (j = 1; j < lineas + 1; j++) {
		var vlarguito = texto.substr(posicionInicial, 78)
		if (vlarguito != '') {
			
			//application.output(texto.substr(posicionInicial, 78));
			posicionInicial = posicionInicial + 78;
			++lineascab
		}
	}
	
	return lineascab;
}

/**
 * TODO generated, please specify type and doc for the params
 * @param {Number} histClin
 * @param {Number} protocolo
 * @param {Number} fecha
 * @param {Number} hora
 *
 * @properties={typeid:24,uuid:"1A4BD254-291A-4C37-BE63-AE9DA71F46E4"}
 */
function imprimirCupon(histClin,protocolo,fecha, hora) {

	forms.Palab_print_cupon.imprimirHcipiso(histClin,protocolo,fecha,hora);
	/*
	var win = application.createWindow("impri_cupon_hiv",JSWindow.MODAL_DIALOG);
	win.title = "Cupon";
	win.resizable = false;
	win.show(forms.Palab_print_cupon);
	*/
}

/**
 * TODO generated, please specify type and doc for the params
 * @param {Number} histClin
 * @param {Number} protocolo
 * @param {Number} fecha
 * @param {Number} hora
 * @param {Number} empresa
 * @param {String} planx
 * @param {Number} servicio
 *
 * @properties={typeid:24,uuid:"26F68343-27FF-40C1-84A9-3AC508B0BC3F"}
 */
function imprimirAutorizacion(histClin,protocolo,fecha,hora,empresa,planx,servicio) {

	forms.Palab_print_autorizacion.imprimirAutorizacion(histClin,protocolo,fecha,hora,empresa,planx,servicio);
	/*
	var win = application.createWindow("impri_atori",JSWindow.MODAL_DIALOG);
	win.title = "Solicitud de Autorización";
	win.resizable = false;
	win.show(forms.Palab_print_autorizacion);
	*/
}

/**
 * @properties={typeid:24,uuid:"FB990898-8D35-42EB-BE38-B730F6679F1B"}
 */
function pacienteSeleccionadoInter() {

	if(isValidDatosPacienteInter()){
		
		editablePaciente(false);
		$isDirty = true;
		f_paciente = palab_rel_buscar_admision_num.hiscli2_palab + ' ' + utils.stringTrim(palab_rel_buscar_admision_num.adm_apelnom);
		f_histClinUnica = palab_rel_buscar_admision_num.adm_histclinuni;
		//f_edad = globals.CalculoEdad(hcipiso_numero_to_tbc_admision.adm_fecnac) + ' ' + globals.vTipoEdad;
		f_habita = palab_rel_buscar_admision_num.adm_habita;
		f_cama = palab_rel_buscar_admision_num.adm_cama;
		
		if(palab_rel_buscar_admision_num.adm_utiliza == 0)
			globals.Palab_utiliza = 1;
		else
			globals.Palab_utiliza = palab_rel_buscar_admision_num.adm_utiliza;
		f_utiliza = palab_rel_buscar_utilcama.utic_usolargo;
		
		globals.Palab_obrCodigo = palab_rel_buscar_admision_num.adm_obrsoc;
		f_cobertura = utils.stringTrim(palab_rel_buscar_obrasocial.obr_razonsoc);
		
		$_planx10 = utils.stringTrim(palab_rel_buscar_admision_num.adm_planobr).length > 0 ? utils.stringTrim(palab_rel_buscar_admision_num.adm_planobr) : '';
		var sqlplan = "select PloPlanX from tbc_plan_obra where PloObra = " + palab_rel_buscar_admision_num.adm_obrsoc + " and PloPlanX10 = '" + $_planx10 + "'";
		var ds_planObra = databaseManager.getDataSetByQuery('asistencial',sqlplan,null,-1);
		
		if(ds_planObra.getMaxRowIndex() > 0){
			$_planx = ds_planObra.getValue(1,1);
		}
		
		elements.cbo_egreso.readOnly = false;
		elements.cbo_egreso.visible = true;
		elements.cbo_egreso.requestFocus();
		
		globals.ControlAlerta(0,globals.Palab_hisclin,1,0);
		
		if(application.getSolutionName() == "Hcipiso"){	
		}
		else{
			
			var admUtiliza = palab_rel_buscar_admision_num.adm_utiliza;
			if(admUtiliza == 2 || admUtiliza == 4 || admUtiliza == 5 || admUtiliza == 12){
				// CONTROL-ACH
				globals.Palab_achHistCl = palab_rel_buscar_admision_num.adm_histclin;
				if(palab_rel_buscar_apache.getSize() == 0)
					globals.DIALOGS.showInfoDialog("Atención","El paciente debe tener cargado su Score Apache.","Aceptar");
			}
		}
	}
	else{
		
		elements.txt_paciente.requestFocus();
	}
}

/**
 * @properties={typeid:24,uuid:"C2523C63-7CE7-4677-9D65-782B3E3A7878"}
 */
function isValidFechaSolicitud() {
	var isValid = true;
	
	var wFlagLink = verificarFechaSolicitudEstudio();
	if(wFlagLink > 0){
		
		if(wFlagLink == 1){
			
			if(palab_rel_buscar_obrasocial.obr_espami != 2)
				isValid = false;
		}
		else
			isValid = false;
	}
	
	return isValid;
}

/**
 * @properties={typeid:24,uuid:"87BFF8B3-FA00-48D4-B8A4-D66E7F39EA55"}
 */
function verificarFechaSolicitudEstudio() {
	
	var fechaMayor = 0;
	var wFlagLink = 0;
	var fechaAltaEfec = palab_rel_buscar_admision_num.adm_fecaltaefec;
	
	if(palab_rel_buscar_admision_num.adm_fecegresanat > palab_rel_buscar_admision_num.adm_fecepic)
		fechaMayor = palab_rel_buscar_admision_num.adm_fecegresanat;
	else
		fechaMayor = palab_rel_buscar_admision_num.adm_fecepic;
	
	if(fechaAltaEfec == 0){
		var fechaSistema= new Date();
		fechaSistema=application.getServerTimeStamp();
		fechaSistema.setTime(fechaSistema.getTime()+((1000*60*60*24)*f_diferido));
		var fechaOut = globals.FormatearFecha(fechaSistema,'AAAAMMDD'); 
		if(utils.stringToNumber(fechaOut) < fechaMayor){
			wFlagLink = 0;
		}
		else{
			
			if(fechaMayor == 0)
				wFlagLink = 0;
			else
				wFlagLink = 1;
		}
	}
	else
		wFlagLink = 2;
	
	if(wFlagLink == 1 || wFlagLink == 2){
		var fechaPrint;
		var message = 'NO SE PUEDE SOLICITAR PRESTACIONES';
		
		
		if(wFlagLink == 1){
			
			fechaPrint = fechaMayor.toString().substr(6,2)+ '/' + fechaMayor.toString().substr(4,2)+ '/' + fechaMayor.toString().substr(0,4);
			message += '\n  Paciente con Alta Médica, Verifique la fecha de Epicrisis.';
			message += '\n  Fecha de epicrisis ' + fechaPrint;
			
		}
		else{
			
			fechaPrint = fechaAltaEfec.toString().substr(6,2)+ '/' + fechaAltaEfec.toString().substr(4,2)+ '/' + fechaAltaEfec.toString().substr(0,4);
			message += '\n  Paciente con  EGRESO SANATORIAL';			
			message += '\n  Fecha de Egreso ' + fechaPrint;
			
		}
		
		globals.DIALOGS.showWarningDialog("Atención",message,"Aceptar");
	}
	
	return wFlagLink;
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"541A64B0-467E-4269-8345-720291D119FF"}
 */
function onAction_verMatriz(event) {
	
	var win = application.createWindow("ver_matriz",JSWindow.MODAL_DIALOG);	
    win.title= 'Agregar desde Matriz';
    win.resizable = false;
    win.show(forms.Palab_dlg_buscar_matriz);
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"D1018E4C-3B95-4BF8-B94A-D2EDC20D107B"}
 */
function onAction_txtBusquedaAnalisis(event) {
	
	globals.Palab_anaCodAlfa = f_analisis;
	if(globals.Palab_anaCodAlfa != '' && globals.Palab_anaCodAlfa != null){
		globals.Palab_eventSourceButton = 0;
		openSearchAnalisis();
		//$isDirty = true;
	}
	else{
		globals.DIALOGS.showWarningDialog("Atención",'Debe ingresar Código de Análisis o descripcion.',"Aceptar")
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"14517BC8-22F2-4F39-8F1B-51951420E1D6"}
 */
function onAction_btnBuscarAnalisis(event) {
	
	globals.Palab_eventSourceButton = 1;
	openSearchAnalisis();
}

/**
 * @properties={typeid:24,uuid:"78890C3F-C95A-4758-A425-1910AABF6721"}
 */
function openSearchAnalisis() {
	
	var win2 = application.createWindow("seleccion_analisis", JSWindow.MODAL_DIALOG);
	win2.title = 'Búsqueda de Análisis';
	win2.resizable = false;
	win2.show(forms.Palab_dlg_buscar_analisis);
}

/**
 * TODO generated, please specify type and doc for the params
 * @param item
 * @param mostrarError
 *
 * @properties={typeid:24,uuid:"5CAB9E98-8F08-48CA-AEC3-87D4227F9EFF"}
 */
function agregarItem(item,mostrarError) {
	
	if(isValidItem(item)){
	
		forms.Palab_tbl_palabde.foundset.newRecord();
		
		forms.Palab_tbl_palabde.foundset['protocolo'] = null;
		forms.Palab_tbl_palabde.foundset['codigo'] = item.codigo;
		forms.Palab_tbl_palabde.foundset['analisis'] = item.analisis;
		forms.Palab_tbl_palabde.foundset['cantidad'] = item.cantidad;
		forms.Palab_tbl_palabde.foundset['ana19'] = item.ana19;
		forms.Palab_tbl_palabde.foundset['ana24'] = item.ana24;
		forms.Palab_tbl_palabde.foundset['ana40'] = item.ana40;
		forms.Palab_tbl_palabde.foundset['it_mca_rep'] = '';
		forms.Palab_tbl_palabde.foundset['it_ped_ant'] = '';
		forms.Palab_tbl_palabde.foundset['it_fec_ant'] = '';
		forms.Palab_tbl_palabde.foundset['it_hor_ant'] = '';
		forms.Palab_tbl_palabde.foundset['it_det_causa'] = '';
		forms.Palab_tbl_palabde.foundset['it_hc_amb'] = '';

		databaseManager.saveData(forms.Palab_tbl_palabde.foundset);
		elements.lbl_countItem.text = forms.Palab_tbl_palabde.foundset.getSize()+ " Items sin Guardar";
		
		//Solicita legajo autorizado
		if(item.ana40 == 1)
			$_wJS++;
		
		//MOVER-DEPEN
		if(item.ana19 == 1)
			moverDependendias(item.codigo);
	
	}else{
		
		if(mostrarError){
			
			var messageError = "No ha sido posible agregar el análisis con código " + item.codigo + ".\n\n" + $_messageErrorItem;
			globals.DIALOGS.showWarningDialog("Atención!",messageError,"Aceptar")
		}
		
	}
	
	elements.txt_analisis.requestFocus();
}

/**
 * @AllowToRunInFind
 * 
 * TODO generated, please specify type and doc for the params
 * @param item
 *
 * @properties={typeid:24,uuid:"6A3113CC-D45B-48B4-869E-01FAC5AD8879"}
 */
function isValidItem(item) {
	
	var valid = true;
	$_messageErrorItem = "";
	
	//ACC-ANA
	if(item.anaestado == 9){
		valid = false
		$_messageErrorItem += "Análisis dado de baja.";
	}
	
	if(valid && item.ana21 == 0){
		valid = false
		$_messageErrorItem += "Análisis no solicitable en forma independiente.";
	}
	
	if(valid && item.ana3 == 13){
		valid = false
		$_messageErrorItem += "Solicitarlo por Pedido de Bacteriología.";
	}
	
	// Los de osecac pueden hacer lo que quieran
	var obr = palab_rel_buscar_admision_num.adm_obrsoc;
	if(obr == 0101 || obr == 1545 || obr == 1721 || obr == 1842){
	}
	else{
		
		if(item.ana40 == 1){
			
			// pr-2439 Controla si el usuario esta autorizado a realizar pedidos de estudios
			valid = globals.AsistFunciones_tienePermiPedUsuario(palab_rel_buscar_medicos_personal.medpertipoie,palab_rel_buscar_medicos_personal.medpercod,0,palab_rel_buscar_admision_num.adm_utiliza,9,item.ana30,item.ana25);
			if(!valid){
				
				$_messageErrorItem += "Legajo no autorizado para realizar el pedido con código " + item.codigo + ".";
				valid = false;
			}
		}
	}
	
	if(valid && f_estado == 1){
		
		var pacPiso = pacDePiso(palab_rel_buscar_admision_num.adm_utiliza);
		var pacUco = pacDeUco(palab_rel_buscar_admision_num.adm_utiliza);
		var pacUti = pacDeUti(palab_rel_buscar_admision_num.adm_utiliza);
		var anasinourg = item.anasinourg;// ver que retorna que valores como comparar con true o por numeros.
		if(anasinourg == 0 || anasinourg == 2 || (pacPiso && (anasinourg == 4 || anasinourg == 5)) || (pacUti && anasinourg == 5) || (pacUco && anasinourg == 4)){
			
			valid = false
			$_messageErrorItem += "No se puede solicitar con carácter Urgente.";
		}
	}
	
	if(valid == false)
		return valid;
	
	if(item.ana25 > 0){
		
		valid = isValid_PMO_especialidad(item.codigo,item.ana25,item.ana30);
		if(!valid){
			
			$_messageErrorItem += globals.AsistFunciones_messageError;
			return valid;
		}
	}
	
	if(valid){
		
		var fs_items = forms.Palab_tbl_palabde.foundset.duplicateFoundSet();
		fs_items.find();
		fs_items['codigo'] = item.codigo;
		fs_items.search();
		
		if(fs_items.getSize()){
			valid = false
			$_messageErrorItem += "Análisis ya solicitado.";
		}
		else{
			
			//Evaluando dependencias Es cabecera cuando ana19:1
			if(item.ana19 == '1' || item.ana19 == 1){
				
				globals.Palab_ana24 = item.codigo;
				for(var i=1 ; i<=palab_rel_buscar_analisis_dependecia.getSize();i++){
					
					palab_rel_buscar_analisis_dependecia.setSelectedIndex(i);
					
					fs_items.clear();
					fs_items.loadAllRecords();
					fs_items.find();
					fs_items['codigo'] = palab_rel_buscar_analisis_dependecia.ana31;
					fs_items.search();
					
					if(fs_items.getSize() > 0){
						$_messageErrorItem += "Se ha solicitado un dependiente con código " + palab_rel_buscar_analisis_dependecia.ana31 + ".";
						valid = false;
						break;
					}
						
				}
					
			}
			else{
				
				fs_items.clear();
				fs_items.loadAllRecords();
				fs_items.find();
				fs_items['codigo'] = item.ana24;
				fs_items.search();
				
				if(fs_items.getSize() > 0){
					
					$_messageErrorItem += "Se ha solicitado la cabecera con código " + item.ana24 + ".";
					valid = false;	
				}	
			}
		}
	}
	
	if(valid){
		
		// evalua si Hay PEDIDOS DE ANALISIS PENDIENTES sin resultado
		var hayPendiente = false;
		if(item.ana19 == 1){
			//El analisis tiene dependencias
			globals.Palab_ana24 = item.codigo;
			var evaluar = true;
			
			for(var j=1; j<=palab_rel_buscar_analisis_dependecia.getSize(); j++){
				
				palab_rel_buscar_analisis_dependecia.setSelectedIndex(j);
				evaluar = true;
				
				// Tiene nomenclador
				if(palab_rel_buscar_analisis_dependecia.ana25 > 0)
					evaluar = isValid_PMO_especialidad(palab_rel_buscar_analisis_dependecia.ana31,palab_rel_buscar_analisis_dependecia.ana25,palab_rel_buscar_analisis_dependecia.ana30);
				
				if(evaluar){
					
					// evaluando si hay pendientes
					hayPendiente = tienePedidoAnterior(palab_rel_buscar_admision_num.adm_histclin,palab_rel_buscar_analisis_dependecia.ana31,palab_rel_buscar_admision_num.adm_utiliza);
					if(hayPendiente){

						break;
					}
				}
			}
		}
		else{
			// no es cabecera, evaluando si hay pendientes
			hayPendiente = tienePedidoAnterior(palab_rel_buscar_admision_num.adm_histclin,item.codigo,palab_rel_buscar_admision_num.adm_utiliza);
		}
		
		if(hayPendiente){
		
			valid = false
			$_messageErrorItem += "Hay PEDIDOS DE ANALISIS PENDIENTES sin resultado en protocolo " + $_protPendiente;
		}
	}
	
	return valid;
}

/**
 * TODO generated, please specify type and doc for the params
 * @param {Number} codigo
 *
 * @properties={typeid:24,uuid:"AAC79CD9-22C4-4E50-9A1F-9380F3493688"}
 */
function moverDependendias(codigo) {
	
	// Buscando dependencias
	globals.Palab_ana24 = codigo;
	var mover = true;
	
	for(var j=1; j<=palab_rel_buscar_analisis_dependecia.getSize(); j++){
		
		mover = true;
		palab_rel_buscar_analisis_dependecia.setSelectedIndex(j);
		
		// Tiene nomenclador
		if(palab_rel_buscar_analisis_dependecia.ana25 > 0)
			mover = isValid_PMO_especialidad(codigo,palab_rel_buscar_analisis_dependecia.ana25,palab_rel_buscar_analisis_dependecia.ana30);
		
		if(mover){
			
			forms.Palab_tbl_palab_dependencias.foundset.newRecord();
	
			forms.Palab_tbl_palab_dependencias.foundset['it_ped_depen'] = codigo;
			forms.Palab_tbl_palab_dependencias.foundset['it_depen'] = palab_rel_buscar_analisis_dependecia.ana31;
			forms.Palab_tbl_palab_dependencias.foundset['it_d_js'] = palab_rel_buscar_analisis_dependecia.ana40;
			//forms.Palab_tbl_palab_dependencias.foundset['it_d_mca_rep'] = 0;
			databaseManager.saveData(forms.Palab_tbl_palab_dependencias.foundset);
			
			if(palab_rel_buscar_analisis_dependecia.ana40 == 1)
				$_wJS++;
		}
	}
	
}

/**
 * TODO generated, please specify type and doc for the params
 * @param {Number} codigo
 * @param {Number} ana25
 * @param {Number} ana30
 *
 * @properties={typeid:24,uuid:"ECC7AAC7-7F9F-416C-81AA-4C821C3927AB"}
 */
function isValid_PMO_especialidad(codigo,ana25,ana30) {
	
	var valid = true;
	
	var admis = 0;
	var hiscli = 0;
	var obra = palab_rel_buscar_admision_num.adm_obrsoc;
	var legMed = palab_rel_buscar_medicos_personal.medpercod;
	var tipoMed = palab_rel_buscar_medicos_personal.medpertipoie;
	var jefeSe = $_flagJS;
	var displa = 1;
	var autori = 0;
	var estado = 0
	var analisis = codigo;
	var especi = palab_rel_buscar_medicos_personal.medperesp;
	var deProg = 934;
		
	var tipoNom = ana30;
	var codNom = ana25;
	var partEs = 0;
	
	if(palab_rel_buscar_medicos_personal.medpercod == 2041 && palab_rel_buscar_medicos_personal.medpertipoie == 1){	
	}
	else{
		//completar validacion en asistFunciones
		valid = globals.AsistFunciones_controlarPMOEntreObraSocialNomencla(admis,hiscli,obra,tipoNom,codNom,legMed,tipoMed,jefeSe,partEs,displa,autori,estado);
	}
	
	if(valid){
		//completar validacion en asistFunciones
		valid = globals.AsistFunciones_controlarAnalisisEntreObraSocialEspecialidad(admis,hiscli,obra,analisis,legMed,tipoMed,jefeSe,especi,displa,autori,deProg,estado);
	}
	
	return valid;
}

/**
 * @properties={typeid:24,uuid:"FC4C5057-8029-4E1E-8A12-DD90C9B61940"}
 */
function inicializarProtocol() {
	
	palab_rel_protocol.prot1 = 0;
	palab_rel_protocol.prot4 = 0;
	palab_rel_protocol.prot5 = 0;
	palab_rel_protocol.prot10 = 0;
	palab_rel_protocol.prot11 = 0;
	palab_rel_protocol.prot12 = 0;
	palab_rel_protocol.prot13 = 0;
	palab_rel_protocol.prot14 = 0;
	palab_rel_protocol.prot15 = 0;
	palab_rel_protocol.prot16 = 0;
	palab_rel_protocol.prot17 = 0;
	palab_rel_protocol.prot18 = ' ';
	palab_rel_protocol.prot19 = 0;
	palab_rel_protocol.prot20 = 0;
	palab_rel_protocol.prot21 = 0;
	palab_rel_protocol.prot22 = ' ';
	palab_rel_protocol.prot23 = 0;
	palab_rel_protocol.prot24 = 0;
	palab_rel_protocol.prot25 = 0;
	palab_rel_protocol.prot26 = 0;
	palab_rel_protocol.prot27 = 0;
	palab_rel_protocol.prot28 = 0;
	palab_rel_protocol.prot32 = 0;
	palab_rel_protocol.prot33 = 0;
	palab_rel_protocol.prot34 = 0;
	palab_rel_protocol.prot35 = 0;
	palab_rel_protocol.prot361 = 0;
	palab_rel_protocol.prot362 = 0;
	palab_rel_protocol.prot39 = 0;
	palab_rel_protocol.prot40 = 0;
	palab_rel_protocol.prot41 = 0;
	palab_rel_protocol.prot50 = 0;
	palab_rel_protocol.prot51 = 0;
	palab_rel_protocol.prot52 = 0;
	palab_rel_protocol.prot53 = ' ';
	palab_rel_protocol.prot54 = 0;
	palab_rel_protocol.prot55 = 0;
	palab_rel_protocol.prot56 = 0;
	palab_rel_protocol.prot57 = 0;
	palab_rel_protocol.prot58 = 0;
	palab_rel_protocol.prot59 = 0;
	palab_rel_protocol.protcodpl = 0;
	globals.InicializarDatosDeRelacion(palab_rel_protocol,"asistencial","tbc_protocol")
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"26EC04BD-1477-423E-ABD9-79D109AF5309"}
 */
function onAction_cboEgreso(event) {
	
	f_estado = null;
	elements.cbo_estado.visible = true;
	elements.lbl_estado.visible = true;
	
	if(f_egreso == 0){
		
		elements.cbo_estado.requestFocus();
	}
	
	if(f_egreso == 1){
		f_estado = 1;
		onAction_cboEstado(event);
	}
	
	//elements.cbo_egreso.readOnly = true;
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"AB6FB803-9A49-4A5C-946B-9F0D68BBF93F"}
 */
function onAction_cboEstado(event) {
	
	f_diferido = 0;
	
	if(f_estado == 0){
		elements.cbo_diferido.visible = true;
		elements.cbo_diferido.requestFocus();
	}
	
	if(f_estado == 1){
		elements.cbo_diferido.visible = false;
		
		if(confirmarEstado() == 'Si'){
			
			if(isValidFechaSolicitud()){
				
				elements.cbo_egreso.readOnly = true;
				elements.cbo_estado.readOnly = true;
				setVisibleAnalisis(true);
				elements.txt_analisis.requestFocus();
			}
			else
				limpiarForm();
		}
		else{
			f_egreso = null;
			elements.lbl_estado.visible = false;
			elements.cbo_estado.visible = false;
			elements.cbo_egreso.requestFocus();
		}
	}
	
}

/**
 * @properties={typeid:24,uuid:"5FCF844A-DB8C-4411-BC23-DB59D266F5B9"}
 */
function confirmarEstado() {
	
	var result = globals.DIALOGS.showQuestionDialog('¡Atención!', '¿ Confirma datos ?', 'Si', 'No');
	
	return result;
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"3795C745-099E-4DB2-9F15-695A2AF1A81E"}
 */
function onAction_cboDiferido(event) {
	
	if(f_diferido > 0){
		
		if(confirmarEstado() == 'Si'){
			
			if(isValidFechaSolicitud()){
				
				elements.cbo_egreso.readOnly = true;
				elements.cbo_estado.readOnly = true;
				elements.cbo_diferido.readOnly = true;
				
				setVisibleAnalisis(true);
				elements.txt_analisis.requestFocus();
				
			}
			else
				limpiarForm();
		}	
		else{
			f_egreso = null;
			elements.lbl_estado.visible = false;
			elements.cbo_estado.visible = false;
			elements.cbo_diferido.visible = false;
			
			elements.cbo_egreso.requestFocus();
			
		}
	}
}

/**
 * TODO generated, please specify type and doc for the params
 * @param {Boolean} value
 *
 * @properties={typeid:24,uuid:"EB4C479F-AAAD-473F-8C9F-A0B690FDD63C"}
 */
function setVisibleAnalisis (value){

	elements.lbl_analisis.visible = value;
	elements.txt_analisis.visible = value;
	elements.btn_buscarAnalisis.visible = value;
	//elements.btn_verMatriz.visible = value;
	elements.tab_analisis.visible = value;
	elements.lbl_linea.visible = value;
	elements.lbl_countItem.visible = value;
	elements.rec_analisis.visible = value;
}

/**
 * @AllowToRunInFind
 *
 * @properties={typeid:24,uuid:"81C20D69-B522-4DF0-B48E-B8F51EA62006"}
 */
function loadAnalisisInterface () {

	// Agrega analisis provenientes de la interface
	var countItems = globals.Palab_listAnalisis.length;
	
	if(countItems > 0){
		
		//globals.DIALOGS.showInfoDialog("Atención","Se agregaran análisis automáticos.","Aceptar");
		
		for(var i = 1; i <= countItems; i++ ){
			
			globals.Palab_anaCod = utils.stringToNumber(globals.Palab_listAnalisis.pop());
			var fs = palab_rel_buscar_analisis.duplicateFoundSet();
			
			fs.find();
			fs.ana1 = globals.Palab_anaCod;
			fs.search();
			
			if(fs.getSize() > 0){
				
				var item = new Object();
				item.codigo = fs.ana1;
				item.analisis = fs.ana22alfa;
				item.cantidad = '1';
				item.ana19 = fs.ana19;
				item.ana24 = fs.ana24;
				item.ana21 = fs.ana21;
				item.ana3 = fs.ana3;
				item.anaestado = fs.anaestado;
				item.ana25 = fs.ana25;
				item.ana30 = fs.ana30;
				item.anasinourg = fs.anasinourg;
				item.ana40 = fs.ana40;
				
				agregarItemInterface(item,true);

			}
			else{
				globals.DIALOGS.showWarningDialog("Atención!","No existe el análisis con código " + fs.ana1,"Aceptar");
			}
		}
	}
}

/**
 * TODO generated, please specify type and doc for the params
 * @param item
 * @param mostrarError
 *
 * @properties={typeid:24,uuid:"E95A7145-A514-49B4-9650-C3669CF66F93"}
 */
function agregarItemInterface(item,mostrarError) {
	
	if(isValidItemInerface(item)){
	
		forms.Palab_tbl_palabde.foundset.newRecord();
		
		forms.Palab_tbl_palabde.foundset['protocolo'] = null;
		forms.Palab_tbl_palabde.foundset['codigo'] = item.codigo;
		forms.Palab_tbl_palabde.foundset['analisis'] = item.analisis;
		forms.Palab_tbl_palabde.foundset['cantidad'] = item.cantidad;
		forms.Palab_tbl_palabde.foundset['ana19'] = item.ana19;
		forms.Palab_tbl_palabde.foundset['ana24'] = item.ana24;
		forms.Palab_tbl_palabde.foundset['ana40'] = item.ana40;
		forms.Palab_tbl_palabde.foundset['it_mca_rep'] = '';
		forms.Palab_tbl_palabde.foundset['it_ped_ant'] = '';
		forms.Palab_tbl_palabde.foundset['it_fec_ant'] = '';
		forms.Palab_tbl_palabde.foundset['it_hor_ant'] = '';
		forms.Palab_tbl_palabde.foundset['it_det_causa'] = '';
		forms.Palab_tbl_palabde.foundset['it_hc_amb'] = '';

		databaseManager.saveData(forms.Palab_tbl_palabde.foundset);
		elements.lbl_countItem.text = forms.Palab_tbl_palabde.foundset.getSize()+ " Items sin Guardar";
		
		//Solicita legajo autorizado
		if(item.ana40 == 1)
			$_wJS++;
		
		//MOVER-DEPEN
		if(item.ana19 == 1)
			moverDependendias(item.codigo);
	
	}
	else{
		
		if(mostrarError){
			
			var messageError = "No ha sido posible agregar el análisis con código " + item.codigo + ".\n\n" + $_messageErrorItem;
			globals.DIALOGS.showWarningDialog("Atención!",messageError,"Aceptar")
		}
		
	}
}

/**
 * @AllowToRunInFind
 * 
 * TODO generated, please specify type and doc for the params
 * @param item
 *
 * @properties={typeid:24,uuid:"AEA863EC-11E6-439F-95AD-7B0F1700C4D2"}
 */
function isValidItemInerface(item) {
	
	var valid = true;
	$_messageErrorItem = "";
	
	// TRASPASO-TABLA
	if(item.ana21 == 0){
		valid = false
		$_messageErrorItem += "Análisis no solicitable en forma independiente.";
	}
	
	if(valid && item.ana25 > 0){
		
		valid = isValid_PMO_especialidad(item.codigo,item.ana25,item.ana30);
		if(!valid){
			
			$_messageErrorItem += globals.AsistFunciones_messageError;
			return valid;
		}
	}
	
	if(valid){
		
		var fs_items = forms.Palab_tbl_palabde.foundset.duplicateFoundSet();
		fs_items.find();
		fs_items['codigo'] = item.codigo;
		fs_items.search();
		
		if(fs_items.getSize()){
			valid = false
			$_messageErrorItem += "Análisis ya solicitado.";
		}
		else{
			
			//Evaluando dependencias Es cabecera cuando ana19:1
			if(item.ana19 == '1' || item.ana19 == 1){
				
				globals.Palab_ana24 = item.codigo;
				for(var i=1 ; i<=palab_rel_buscar_analisis_dependecia.getSize();i++){
					
					palab_rel_buscar_analisis_dependecia.setSelectedIndex(i);
					
					fs_items.clear();
					fs_items.loadAllRecords();
					fs_items.find();
					fs_items['codigo'] = palab_rel_buscar_analisis_dependecia.ana31;
					fs_items.search();
					
					if(fs_items.getSize() > 0){
						$_messageErrorItem += "Se ha solicitdo un dependiente con código " + palab_rel_buscar_analisis_dependecia.ana31 + ".";
						valid = false;
						break;
					}
						
				}
					
			}
			else{
				
				fs_items.clear();
				fs_items.loadAllRecords();
				fs_items.find();
				fs_items['codigo'] = item.ana24;
				fs_items.search();
				
				if(fs_items.getSize() > 0){
					
					$_messageErrorItem += "Se ha solicitado la cabecera con código " + item.ana24 + ".";
					valid = false;	
				}	
			}
		}
	}
	
	// Los de osecac pueden hacer lo que quieran
	var obr = palab_rel_buscar_admision_num.adm_obrsoc;
	if(obr == 0101 || obr == 1545 || obr == 1721 || obr == 1842){
	}
	else{
		
		if(valid && item.ana40 == 1){
			
			// pr-2439 Controla si el usuario esta autorizado a realizar pedidos de estudios
			valid =  globals.AsistFunciones_tienePermiPedUsuario(palab_rel_buscar_medicos_personal.medpertipoie,palab_rel_buscar_medicos_personal.medpercod,0,palab_rel_buscar_admision_num.adm_utiliza,9,item.ana30,item.ana25);
			
			if(!valid){
				
				$_messageErrorItem += "Legajo no autorizado para realizar el pedido con código " + item.codigo + ".";
				valid = false;
			}
		}
	}
	
	return valid;
}

/**
 * TODO generated, please specify type and doc for the params
 * @param {Number} utiliza
 *
 * @return {Boolean}
 * @properties={typeid:24,uuid:"8E2CA261-0F74-460E-B377-9C7235D525C1"}
 */
function pacDePiso (utiliza){
	var value = false;
	
	switch(utiliza){
		
		case 1 : value = true; break; 
		case 3 : value = true; break;
		case 7 : value = true; break;
		case 9 : value = true; break;
		case 11 : value = true; break;
		case 13 : value = true; break;
		case 14 : value = true; break;
		case 15 : value = true; break;
		default : value = false; break;
	}
	
	return value;
}

/**
 * TODO generated, please specify type and doc for the params
 * @param utiliza
 *
 * @return {Boolean}
 * @properties={typeid:24,uuid:"584CDF8A-932B-4CF7-8AB1-52D4ADC39608"}
 */
function pacDeUti (utiliza){
	var value = false;
	
	switch(utiliza){
		
		case 2 : value = true; break; 
		case 6 : value = true; break;
		case 8 : value = true; break;
		case 10 : value = true; break;
		case 12 : value = true; break;
		default : value = false; break;
	}
	
	return value;
}

/**
 * TODO generated, please specify type and doc for the params
 * @param utiliza
 *
 * @return {Boolean}
 * @properties={typeid:24,uuid:"2E1F4306-772A-467F-92C9-D614DDCF5624"}
 */
function pacDeUco (utiliza){
	var value = false;
	
	switch(utiliza){
		
		case 4 : value = true; break; 
		case 5 : value = true; break;
		default : value = false; break;
	}
	
	return value;
}

/**
 * Verifica si Hay PEDIDOS DE ANALISIS PENDIENTES sin resultado
 * 
 * @param {Number} histClin
 * @param {Number} codAnalisis
 * @param {Number} utiliza
 *
 * @return {Boolean}
 * @properties={typeid:24,uuid:"09BBD391-6B87-4B6F-884D-FB0E871BB275"}
 */
function tienePedidoAnterior(histClin,codAnalisis,utiliza) {
	
	$_protPendiente = '';
	var hayPend = false;
	var fechaSistema = application.getServerTimeStamp();
	//fechaSistema.setTime(fechaSistema.getTime()+((1000*60*60*24)*f_diferido));
	var fechaPedido = utils.stringToNumber(globals.FormatearFecha(fechaSistema,'AAAAMMDD'));
	
	var pacUco = pacDeUco(utiliza);
	var pacUti = pacDeUti(utiliza);
	
	if(pacUco || pacUti){
		
		hayPend = false;
	}
	else{
		
		var sql = "select Prot4,Prot10,Prot15,Prot41,Prot18,Prot17 from tbc_protocol"
		  + " where Prot1 = " + histClin
		  + " and (Prot17 <> 7 and (prot17 = 0 or prot17 = 4))"
		  + " and Prot5 = " + codAnalisis 
		  + " and Prot18 = ''";
				  
		var ds_protocol = databaseManager.getDataSetByQuery('asistencial',sql,null,-1);
		
		var fechaAux;
		for(var i=1 ; i <= ds_protocol.getMaxRowIndex() ; i++){
			
			fechaAux = ds_protocol.getValue(i,2);
			if(ds_protocol.getValue(i,3) == 0){
				
				fechaAux = sumarDiferido(fechaAux,ds_protocol.getValue(i,4));
			}
			
			// si fechaAux (es la fecha de un pedido existente) es mayor a fechaPedido actual no hay pedidos pendientes 
			if( fechaAux > fechaPedido){
			}
			else{
				$_protPendiente = ds_protocol.getValue(i,1);
				hayPend = true;
				break;
			}
		}
	}
		
	return hayPend;
}

/**
 * Suma cantidad de dias a una fecha dada
 * 
 * @param {Number} fecha
 * @param {Number} cantDias
 *
 * @return {Number}
 * @properties={typeid:24,uuid:"DBB41A79-4FEB-47D2-A530-84A2A7F59E74"}
 */
function sumarDiferido (fecha,cantDias) {
	var fechaAux = new Date();
	fechaAux = globals.IntegerToDate(fecha); 
	fechaAux.setTime(fechaAux.getTime()+((1000*60*60*24)*cantDias));
	var fechaOut = globals.FormatearFecha(fechaAux,'AAAAMMDD'); 
	
	return utils.stringToNumber(fechaOut);
}

/**
 * TODO generated, please specify type and doc for the params
 * @param {Number} fecha
 * @param {Number} cantDias
 *
 * @properties={typeid:24,uuid:"F80A01EC-56B6-421A-9788-C2667203550D"}
 */
function restarDias (fecha,cantDias) {
	var fechaAux = new Date();
	fechaAux = globals.IntegerToDate(fecha); 
	fechaAux.setTime(fechaAux.getTime()-((1000*60*60*24)*cantDias));
	var fechaOut = globals.FormatearFecha(fechaAux,'AAAAMMDD'); 
	
	return utils.stringToNumber(fechaOut);
}

/**
 * Verificar si se pidieron HEMOGRAMA-UREMIA-GLUCEMIA juntos
 * @AllowToRunInFind
 *
 * @properties={typeid:24,uuid:"23BB5C2C-ED24-4D1F-9E8A-FC62711BFD01"}
 */
function ver_ped_hug() {
	
	var valid = false;
	var fs_aux = forms.Palab_tbl_palabde.foundset.duplicateFoundSet();
	
	fs_aux.find();
	fs_aux['codigo'] = '1000';//Hemograma
	fs_aux.newRecord();
	fs_aux.find();
	fs_aux['codigo'] = '1030';//Uremia
	fs_aux.newRecord();
	fs_aux.find();
	fs_aux['codigo'] = '1029';//Glucemia
	fs_aux.search();
	
	if(fs_aux.getSize() == 3)
		valid = true;
	
	return valid;
}

/**
 * Verificar si la fecha del estudio esta dentro de los primeros cinco
 * dias de internado
 * 
 * @properties={typeid:24,uuid:"6A747473-B280-4FAB-BFE5-24D805F97C9A"}
 */
function fecha_int_mas_cinco() {
	
	var valid = false;
	var dias = 5;
	var fechaIngreso = new Date();
	fechaIngreso = globals.IntegerToDate(palab_rel_buscar_admision_num.adm_fecing);
	fechaIngreso.setTime(fechaIngreso.getTime()+((1000*60*60*24)*dias));
	var feIngreso = globals.FormatearFecha(fechaIngreso,'AAAAMMDD');

	var fechaSistema=application.getServerTimeStamp();
	var feSistema = globals.FormatearFecha(fechaSistema,'AAAAMMDD');
	
	//Si sumo 5 dias a la fecha de internacion y resulta >= a la fecha 
	//de proceso (fecha de solicitud del estudio), significa que la 
	//repeticion del estudio esta dentro de los primeros 5 dias de internacion
	
	if(utils.stringToNumber(feIngreso) < utils.stringToNumber(feSistema))
		valid = false;
	else
		valid = true;
	
	return valid;
}

/**
 * TODO generated, please specify type and doc for the params
 * @param {String} serverName
 * @param {String} tableName
 * @param {String} columnName
 * @param {String} primaryKey
 * @param {Number} keyValue
 *
 * @properties={typeid:24,uuid:"601F420C-8807-4AB6-9FA6-FEF24A0F9CBF"}
 */
function obtenerNumerador (serverName,tableName,columnName,primaryKey,keyValue) {
	
	var numero = 0;
	
	var done0 = plugins.rawSQL.executeSQL(serverName, tableName, "begin; lock table " + tableName + " in row exclusive mode;")
	if (!done0) {
		var msg0 = plugins.rawSQL.getException().getMessage(); //see exception node for more info about the exception obj
		plugins.dialogs.showErrorDialog('Error', 'SQL exception: ' + msg0, 'Ok');
	}
	
	var done = plugins.rawSQL.executeSQL(serverName, tableName, "select * from " + tableName + " where " + primaryKey + " = " + keyValue + " for update;");
	if (!done) {
		var msg = plugins.rawSQL.getException().getMessage(); //see exception node for more info about the exception obj
		plugins.dialogs.showErrorDialog('Error', 'SQL exception: ' + msg, 'Ok');
	}

	var vQuery = "SELECT " + columnName + " FROM " + tableName + " WHERE " + primaryKey + " = " + keyValue;
	var vDataset = databaseManager.getDataSetByQuery(serverName, vQuery, null, 1);
	
	var done1 = plugins.rawSQL.executeSQL(serverName, tableName, "update " + tableName + " set " + columnName + " = " + columnName + " + 1 where " + primaryKey + " = " + keyValue + "; commit;")
	if (done1) {
		
		numero = vDataset.getValue(1,1) + 1;
	}
	else{
		var msg1 = plugins.rawSQL.getException().getMessage(); //see exception node for more info about the exception obj
		plugins.dialogs.showErrorDialog('Error', 'SQL exception: ' + msg1, 'Ok')
	}
	
	return numero;
}

/**
 * TODO generated, please specify type and doc for the params
 * @param {Number} protocolo
 * @param {Number} fecha
 * @param {Number} hora
 * @param {Number} nomeTipo
 * @param {Number} nomeCodi
 *
 * @return {Boolean}
 * @properties={typeid:24,uuid:"F9EBCDCE-5610-4868-9163-2F10CF86DC55"}
 */
function generarCodAuto(protocolo,fecha,hora,nomeTipo,nomeCodi) {
	
	var isValid = true;

	// Cod Auto
	var que = 0;
	var sector = palab_rel_buscar_admision_num.adm_utiliza;
	var empresa = 1;
	var obra = palab_rel_buscar_admision_num.adm_obrsoc;
	//var planx10 = utils.stringTrim(palab_rel_buscar_admision_num.adm_planobr).length > 0 ? utils.stringTrim(palab_rel_buscar_admision_num.adm_planobr) : '';
	var tipoNom = nomeTipo;
	var codiNom = nomeCodi;
	
	// AUTORIZACION-CODAUTO
	var result = globals.ControlCodobra(que,sector,empresa,tipoNom,codiNom,obra,$_planx10);
	if(result){
		
		palab_rel_codauto.newRecord();
		inicializarRelacionCodAuto();
		
		var servCodAuto = 9;
		
		palab_rel_codauto.codautoempr = empresa;
		palab_rel_codauto.codautoempr5 = empresa;
		palab_rel_codauto.codautoadmi = 0;
		palab_rel_codauto.codautoobra = obra;
		palab_rel_codauto.codautoobra3 = obra;
		palab_rel_codauto.codautoobra4 = obra;
		palab_rel_codauto.codautoobra6 = obra;
	
		palab_rel_codauto.codautohist = palab_rel_buscar_admision_num.adm_histclin;
		palab_rel_codauto.codautohist3 = palab_rel_buscar_admision_num.adm_histclin;
		palab_rel_codauto.codautohist4 = palab_rel_buscar_admision_num.adm_histclin;
		palab_rel_codauto.codautohist5 = palab_rel_buscar_admision_num.adm_histclin;
		palab_rel_codauto.codautohist6 = palab_rel_buscar_admision_num.adm_histclin;
		
		palab_rel_codauto.codautoserv = servCodAuto;
		palab_rel_codauto.codautoserv3 = servCodAuto;
		palab_rel_codauto.codautoserv4 = servCodAuto;
		palab_rel_codauto.codautoserv6 = servCodAuto;
		palab_rel_codauto.codautofsol = fecha;
		palab_rel_codauto.codautohsol = globals.CapturaHoraSistema('HHMMSSDD');
		palab_rel_codauto.codautotipo = tipoNom;
		palab_rel_codauto.codautocdar = codiNom;
		palab_rel_codauto.codautosect = sector;
		palab_rel_codauto.codautopedi = protocolo;
		palab_rel_codauto.codautotmed = palab_rel_buscar_medicos_personal.medpertipoie;
		palab_rel_codauto.codautomedi = palab_rel_buscar_medicos_personal.medpercod;
		palab_rel_codauto.codautoutiliza = palab_rel_buscar_admision_num.adm_utiliza;
		palab_rel_codauto.codautohabita = 0;
		palab_rel_codauto.codautopant = 5;
		
		if(palab_rel_buscar_obrasocial.obrmodautpre == 1 || palab_rel_buscar_obrasocial.obrmodautpre == 3){
			var codAutoEsta = 2;
			palab_rel_codauto.codautoesta3 = codAutoEsta;
			palab_rel_codauto.codautoesta4 = codAutoEsta;
			palab_rel_codauto.codautoesta6 = codAutoEsta;
		}
		
		if(utils.stringTrim($_planx).length > 0){
			
			palab_rel_codauto.codautoplan = $_planx;
			palab_rel_codauto.codautoplan3 = $_planx;
			palab_rel_codauto.codautoplan4 = $_planx;
			palab_rel_codauto.codautoplan6 = $_planx;
		}
			
		var isValidSave = databaseManager.saveData(palab_rel_codauto.getRecord(1));
		if(isValidSave){
			$_codAutoFuncion = 1;
			var paciente = utils.stringTrim(palab_rel_buscar_admision_num.adm_apelnom);
			var afiliado = utils.stringTrim(palab_rel_buscar_admision_num.adm_nrobenef);
			
			var nomeDesc = "";
			var sql_query = "select nome_pantalla,nome_descr from tbc_nomencla where nome_tipo = " + tipoNom + " and nome_codigo = " + codiNom;
			var ds_nomencla = databaseManager.getDataSetByQuery('maestros',sql_query,null,-1);
			if(ds_nomencla.getMaxRowIndex() > 0){
				nomeDesc = utils.stringTrim(ds_nomencla.getValue(1,2));
			}
			
			enviarEmail(paciente,afiliado,nomeDesc,fecha,sector,hora);
		}
		else
			isValid = false;
	}
	
	return isValid;
}

/**
 * @properties={typeid:24,uuid:"94BF67B4-5560-4B99-A1F1-44D6F4DD1CF0"}
 */
function inicializarRelacionCodAuto(){
	
	palab_rel_codauto.codautoadmi = 0;
	palab_rel_codauto.codautocdar = 0;
	palab_rel_codauto.codautoempr = 0;
	palab_rel_codauto.codautofsol = 0;
	palab_rel_codauto.codautohist = 0;
	palab_rel_codauto.codautohsol = 0;
	palab_rel_codauto.codautoobra = 0;
	palab_rel_codauto.codautoplan = ' ';
	palab_rel_codauto.codautoserv = 0;
	palab_rel_codauto.codautotipo = 0;
	palab_rel_codauto.codautoempr5 = 0;
	palab_rel_codauto.codautoesta3 = 0;
	palab_rel_codauto.codautoesta4 = 0;
	palab_rel_codauto.codautoesta6 = 0;
	palab_rel_codauto.codautofaut = 0;
	palab_rel_codauto.codautohabita = 0;
	palab_rel_codauto.codautohaut = 0;
	palab_rel_codauto.codautohist3 = 0;
	palab_rel_codauto.codautohist4 = 0;
	palab_rel_codauto.codautohist5 = 0;
	palab_rel_codauto.codautohist6 = 0;
	palab_rel_codauto.codautoimpre = 0;
	palab_rel_codauto.codautomedi = 0;
	palab_rel_codauto.codautoobra3 = 0;
	palab_rel_codauto.codautoobra4 = 0;
	palab_rel_codauto.codautoobra6 = 0;
	palab_rel_codauto.codautooper = 0;
	palab_rel_codauto.codautopant = 0;
	palab_rel_codauto.codautopedi = 0;
	palab_rel_codauto.codautoplan3 = ' ';
	palab_rel_codauto.codautoplan4 = ' ';
	palab_rel_codauto.codautoplan6 = ' ';
	palab_rel_codauto.codautosect = 0;
	palab_rel_codauto.codautoserv3 = 0;
	palab_rel_codauto.codautoserv4 = 0;
	palab_rel_codauto.codautoserv6 = 0;
	palab_rel_codauto.codautotmed = 0;
	palab_rel_codauto.codautotope = 0;
	palab_rel_codauto.codautoutiliza = 0;
	
}

/**
 * TODO generated, please specify type and doc for the params
 * @param {Number} realValue
 *
 * @properties={typeid:24,uuid:"DABD433F-0C0D-428F-8F38-038B0F8AD518"}
 */
function convertNumberToHour_HHMM(realValue) {

	var hora = "";
	if (realValue != null) {
		var value = realValue;
		if (value < 1) {
			hora = "00:00";
		} else {
			if (value < 10) {
				hora = "00:0" + value.toString().substr(0, 1);
			} else {
				if (value < 100) {
					hora = "00:" + value.toString().substr(0, 2);
				} else {
					if (value < 1000) {
						hora = "0" + value.toString().substr(0, 1) + ":" + value.toString().substr(1, 2);
					} else {
						if (value <= 2359) {
							hora = value.toString().substr(0, 2) + ":" + value.toString().substr(2, 2);
						}
					}
				}
			}
		}
	}

	return hora;
}

/**
 * @properties={typeid:24,uuid:"0B4A4F9D-96E0-4EEC-96D0-EDCA5A4CC9A7"}
 */
function inicializarRelacionCausaRep() {
	
	palab_rel_causa_rep.crcodanalisisi = 0;
	palab_rel_causa_rep.crhc = 0;
	palab_rel_causa_rep.crnroprotocoloi = 0;
	palab_rel_causa_rep.crtipo = 0;
	palab_rel_causa_rep.cradmis = 0;
	palab_rel_causa_rep.crdetcausa_1 = ' ';
	palab_rel_causa_rep.crdetcausa_2 = ' ';
	palab_rel_causa_rep.crdetcausa_3 = ' ';
	palab_rel_causa_rep.crdetcausa_4 = ' ';
	palab_rel_causa_rep.crdetcausa_5 = ' ';
	palab_rel_causa_rep.crfechaant = 0;
	palab_rel_causa_rep.crfechaestudio = 0;
	palab_rel_causa_rep.crhcamb = 0;
	palab_rel_causa_rep.crhcint = 0;
	palab_rel_causa_rep.crhoraant = 0;
	palab_rel_causa_rep.crhoraestudio = 0;
	palab_rel_causa_rep.crmedico = 0;
	palab_rel_causa_rep.crnroafiliado = ' ';
	palab_rel_causa_rep.cros = 0;
	palab_rel_causa_rep.crpedant = 0;
	palab_rel_causa_rep.crtipomed = 0;
	
}

/**
 * TODO generated, please specify type and doc for the params
 * @param analisis
 * @param protocolo
 * @param fecha
 * @param hora
 * @param record
 *
 * @properties={typeid:24,uuid:"AABB2400-064B-4D5A-95DE-8F142E0F43E5"}
 */
function guardarCausaRep(analisis,protocolo,fecha,hora,record) {
	
	palab_rel_causa_rep.newRecord();
	inicializarRelacionCausaRep();
	
	palab_rel_causa_rep.crtipo = 2;
	palab_rel_causa_rep.crhc = palab_rel_buscar_admision_num.adm_histclin;
	palab_rel_causa_rep.crhcint = palab_rel_buscar_admision_num.adm_histclin;
	palab_rel_causa_rep.crnroprotocoloi = protocolo;
	palab_rel_causa_rep.crcodanalisisi = analisis.ana1;
	palab_rel_causa_rep.cros = palab_rel_buscar_obrasocial.obr_codigo;
	palab_rel_causa_rep.crnroafiliado = utils.stringTrim(palab_rel_buscar_admision_num.adm_nrobenef);
	palab_rel_causa_rep.crfechaestudio = fecha;
	palab_rel_causa_rep.crhoraestudio = hora;
	palab_rel_causa_rep.crtipomed = palab_rel_buscar_medicos_personal.medpertipoie;
	palab_rel_causa_rep.crmedico = palab_rel_buscar_medicos_personal.medpercod;
	palab_rel_causa_rep.cradmis = 0;
	palab_rel_causa_rep.crpedant = utils.stringTrim(record['it_ped_ant']).length > 0 ? record['it_ped_ant'] : 0;
	palab_rel_causa_rep.crfechaant = utils.stringTrim(record['it_fec_ant']).length > 0 ? record['it_fec_ant'] : 0;
	palab_rel_causa_rep.crhoraant = utils.stringTrim(record['it_hor_ant']).length > 0 ? record['it_hor_ant'] : 0;
	palab_rel_causa_rep.crhcamb = utils.stringTrim(record['it_hc_amb']).length > 0 ? record['it_hc_amb'] : 0;
	
	completarTextoCausaRep(record['it_det_causa']);
	
	databaseManager.saveData(palab_rel_causa_rep.getRecord(1));
}

/**
 * TODO generated, please specify type and doc for the params
 * @param texto
 *
 * @properties={typeid:24,uuid:"0CBCA50A-B413-4582-80C1-68E9E4B1521A"}
 */
function completarTextoCausaRep(texto) {
	
	if(utils.stringTrim(texto).length > 0){
		
		var j = 0;

		var longitudTexto = 0;
		longitudTexto = texto.length;
		
		var posicionFinal = 0;
		posicionFinal = texto.indexOf("\n");
		
		var posicionInicial = 0;
		if (posicionFinal < 0)
			posicionFinal = texto.length
			
		var lineas = Math.round(longitudTexto / 70);

		var resto = longitudTexto % 70;
		posicionFinal = 70;
		if (resto > 0)
			++lineas;
		
		for (j = 1; j < lineas + 1; j++) {
			
			var vlarguito = texto.substr(posicionInicial, 70)
			if (vlarguito != '') {
				
				palab_rel_causa_rep['crdetcausa_' + j] = texto.substr(posicionInicial, 70);
				posicionInicial = posicionInicial + 70;
			
				if(j == 5)
					break;
			}
		}
	}
}

/**
 * @AllowToRunInFind
 * 
 * TODO generated, please specify type and doc for the params
 * @param {String} paciente
 * @param {String} afiliado
 * @param {String} nomeDesc
 * @param {Number} fecha
 * @param {Number} sector
 * @param {Number} hora
 *
 * @properties={typeid:24,uuid:"08280C6D-8F16-40A0-B444-8F4F68D05EE6"}
 */
function enviarEmail(paciente,afiliado,nomeDesc,fecha,sector,hora) {
	
	if(palab_rel_buscar_obrasocial.obrmodautpre == 1 || palab_rel_buscar_obrasocial.obrmodautpre == 3){
		
		var mailObrTipo = 2;
		if(palab_rel_buscar_obrasocial.obr_codigo == 1132)
			mailObrTipo = 4;

		var fs_mailObra = databaseManager.getFoundSet("asistencial","tbc_mail_obra");
		fs_mailObra.find();
		fs_mailObra['mailobr1'] = palab_rel_buscar_obrasocial.obr_codigo
		fs_mailObra['mailobrtipo'] = mailObrTipo;
		fs_mailObra.search();
		
		if(fs_mailObra.getSize() > 0){
			
			globals.Palab_admHistClin = globals.Palab_hisclin;
			var aux_mail_para = '';
			var aux_mail_cc = '';
			var aux_mail_cco = '';
			for (var x=1;x<=10;x++){
				
				switch (fs_mailObra['mailobrdestino_'+x]){
					case 1:aux_mail_para+=utils.stringTrim(fs_mailObra['mailobrmail_'+x])+",";break;
					case 2:aux_mail_cc+=utils.stringTrim(fs_mailObra['mailobrmail_'+x])+",";break;
					case 3:aux_mail_cco+=utils.stringTrim(fs_mailObra['mailobrmail_'+x])+",";break;
				}
			}
			
			if(utils.stringTrim(aux_mail_para).length > 0){
				
				// Medico responsable por sector
				var codAutoSect = sector;
				var firmaRecCod = 0;
				
				if( codAutoSect == 2 || codAutoSect == 6 || codAutoSect == 8 || codAutoSect == 9 || codAutoSect == 10 || codAutoSect == 12)
					firmaRecCod = 8017;
				
				if( codAutoSect == 4 || codAutoSect == 05 || codAutoSect == 11)
					firmaRecCod = 7004;
				
				if( codAutoSect == 1 || codAutoSect == 3 || codAutoSect == 13 || codAutoSect == 14 || codAutoSect == 15 || codAutoSect == 16 )
					firmaRecCod = 7127;
				
				// Buscar Medico responsable, imagen y matricula
				var fileNameFirma = "Logo300px.png";//Default
				var matricula = "";
				
				var fs_firmaRec = databaseManager.getFoundSet('maestros','tbc_firma_rec');
				fs_firmaRec.find();
				fs_firmaRec['firmareccod'] = firmaRecCod;
				fs_firmaRec.search();
				
				if(fs_firmaRec.getSize() > 0){
					
					var myMedia = solutionModel.getMedia(utils.stringTrim(fs_firmaRec['firmarecarchjpg']));
					if(myMedia)
						fileNameFirma = fs_firmaRec['firmarecarchjpg'];
					
					matricula = fs_firmaRec['firmarecmatricula'];
				}
	
				var medPerCod = firmaRecCod;
				// Buscar Medico
				var medico = "Dr. ";
				var sqlMedPer = "select MedPerApeynom from tbc_medicos_personal where MedPerCod = " + medPerCod;
				var ds_medPer = databaseManager.getDataSetByQuery("maestros",sqlMedPer,null,-1);
				if(ds_medPer.getMaxRowIndex() > 0 )
					medico += utils.stringTrim(ds_medPer.getValue(1,1));
				
				//Buscar Diagnostico
				var diagnostico = 'Dx : ';
				var patCie = palab_rel_admision.adm_patoling;
				
				var sqlMaxFecha = "select ptpfecha,ptphora,ptppatol from tbc_patolpac where"
				  + " ptphistclinica = " + palab_rel_buscar_admision_num.adm_histclin
				  + " and ptpfecha <= " + fecha
				  + " order by ptpfecha desc, ptphora desc";
				var ds_PatolPac = databaseManager.getDataSetByQuery('asistencial',sqlMaxFecha,null,-1);
				if(ds_PatolPac.getMaxRowIndex() > 0){
					
					if(ds_PatolPac.getValue(1,1) < fecha){
						// tomar el primer registro
						patCie = ds_PatolPac.getValue(1,3);
					}
					else{
						// mismo dia
						for(var i=1 ; i<= ds_PatolPac.getMaxRowIndex() ; i++ ){
							//evaluar la hora
							if( ds_PatolPac.getValue(i,2) <= hora){
								patCie = ds_PatolPac.getValue(i,3);
								break;
							}
						}
					}
				}
								
				if(palab_rel_buscar_obrasocial.obr_espami == 1){
					// Es pami
					/*
					var fs_patCie = databaseManager.getFoundSet('maestros','tbc_patcie'); 
					fs_patCie.find();
					fs_patCie['patcie1'] = patCie;
					// TODO Faltaria un criterio de filtro, o cual de la lista tomar ??
					//TODO: fs_patCie['patcie3'] = ;
					fs_patCie.search();
					
					if(fs_patCie.getSize() > 0)
						diagnostico += utils.stringTrim(fs_patCie['patcie22']);
					*/
				}
				else{
					
					var fs_patologia = databaseManager.getFoundSet('maestros','tbc_patologia'); 
					fs_patologia.find();
					fs_patologia['pat_codi'] = patCie;
					fs_patologia.search();
					
					if(fs_patologia.getSize() > 0)
						diagnostico += utils.stringTrim(fs_patologia['pat_descrip']);
				}
				
				var $ds2 = databaseManager.createEmptyDataSet()
				$ds2.addColumn('fld_apeynom',1,JSColumn.TEXT)
				$ds2.addColumn('fld_cobertura',2,JSColumn.TEXT)
				$ds2.addColumn('fld_afiliado',3,JSColumn.TEXT)
				$ds2.addColumn('fld_cod',4,JSColumn.TEXT)
				$ds2.addColumn('fld_rp1',5,JSColumn.TEXT)
				$ds2.addColumn('fld_rp5',6,JSColumn.TEXT)
				$ds2.addColumn('fld_apeynom_dr',7,JSColumn.TEXT)
				$ds2.addColumn('fld_matricula',8,JSColumn.TEXT)
				
				var histClinica = palab_rel_buscar_admision_num.adm_histclin;
				var histClin =  histClinica.toString().substr(0,histClinica.toString().length-1)+"/"+histClinica.toString().substr(histClinica.toString().length -1,1)
				
				$ds2.addRow([paciente,palab_rel_buscar_obrasocial.obr_razonsoc,afiliado,histClin,nomeDesc,diagnostico,medico,matricula])
				// Generacion de PDF
				var title = "";
				if(codAutoSect == 2 || codAutoSect == 6 || codAutoSect == 8 || codAutoSect == 10 || codAutoSect == 12)
					title = "TERAPIA INTENSIVA";
				else{
					
					if( codAutoSect == 4 || codAutoSect == 5 )
						title = "UNIDAD CORONARIA";
					else
						title = "PISO";
				}
				
				var params = {
					pr_firma: "media:///" + fileNameFirma,
					pr_recetario: "media:///RecetarioSC2_004.jpg",
					pr_titulo_dr: title
				}
				
				var fileName = palab_rel_buscar_admision_num.adm_histclin + "-"+ fecha + "-" + hora + ".pdf";
				var arch;
				try{
					arch = plugins.file.createFile(fileName);
					//application.output( arch.getAbsolutePath());
					//globals.DIALOGS.showWarningDialog("Atencion","Directorio del archivo: " + arch.getAbsolutePath(),"Aceptar");
					
				}catch(msg){
					grabaLog(msg.toString(),palab_rel_buscar_admision_num.adm_histclin);
				}
				
				if (arch){	
					try{
						//var fileName = "c:/temp/LB-CIRUAMBU-" + fechaDesde + "-" + fechaHasta;
						//plugins.jasperPluginRMI.compileReport("HCIPISO-SOL-AUT.jrxml");
						plugins.jasperPluginRMI.runReport($ds2,'HCIPISO-SOL-AUT.jasper',arch.getAbsolutePath(),plugins.jasperPluginRMI.OUTPUT_FORMAT.PDF,params)
					}catch(e){
						grabaLog(e.message,palab_rel_buscar_admision_num.adm_histclin)
					}
				}
				
				var attachment1;
				try{
					attachment1 = plugins.mail.createBinaryAttachment(fileName,plugins.file.readFile(arch.getAbsolutePath()));
					
				}catch(msg){
					grabaLog(msg.toString(),palab_rel_buscar_admision_num.adm_histclin)
				}	
				
				// Envio de email
				var subJect = "Solicitud Autoriz.- Paciente " + paciente + " - " + nomeDesc;
				
				var msgText = "Estimado/a\n\n"
				+ "                Se adjunta Practica en formato PDF para Autorizar correspondiente al paciente " + paciente + " Afiliado: " + afiliado + " con indicacion de: " + nomeDesc + "\n\n"
				
				msgText+= "Atte.\n"; 
				//msgText+= "Unidad Quirugica\n";
				msgText+= "Sanatorio Colegiales";
				
				// Enviando email
				var userName = 'autorizaciones@sanatoriocolegiales.com.ar';
				var passWord = 'auto45';
				var properties = new Array();
				properties[0] = 'mail.smtp.host=200.80.43.104';
				properties[1] = 'mail.smtp.auth=true';
				properties[2] = 'mail.smtp.username=' + userName;
				properties[3] = 'mail.smtp.password=' + passWord;
				properties[4] = 'mail.smtp.port=25';
				
				//TODO  test-1
				/*
				var toAux = utils.stringTrim(aux_mail_para).length > 0 ? aux_mail_para : null;
				var ccAux = utils.stringTrim(aux_mail_cc).length > 0 ? aux_mail_cc : null;
				var ccoAux = utils.stringTrim(aux_mail_cco).length > 0 ? aux_mail_cco : null;
				application.output("TO: " + toAux);
				application.output("CC: " + ccAux);
				application.output("CCO: " + ccoAux);
				*/
				// end test-1
				var to = null;
				var cc = null;
				var cco = null;
				var url='';
				
				var largo_url=application.getServerURL().length
				if (largo_url<24){
					
					//to = 'hchoque@cirendsa.com.ar';
					to = 'fhuertas@cirendsa.com.ar';
					globals.DIALOGS.showInfoDialog("E-MAIL",msgText + '\nTo: ' + to,"Aceptar");
					
				}else{
					url = application.getServerURL().substr(0,23);
					var puerto = url.split(':');
					
					if(puerto[2]!='8080'){
						// Ambiente de pruebas
						to = globals.DIALOGS.showInputDialog(puerto[2],"Ingrese Dirección de correo electrónico",'fhuertas@cirendsa.com.ar');
						//cc = 'fhuertas@cirendsa.com.ar';
						cc = 'hchoque@cirendsa.com.ar';
					}
					else{
						// Ambiente operativo
						to = utils.stringTrim(aux_mail_para).length > 0 ? aux_mail_para : null;
						cc = utils.stringTrim(aux_mail_cc).length > 0 ? aux_mail_cc : null;
						cco = utils.stringTrim(aux_mail_cco).length > 0 ? aux_mail_cco : null;
						
					}
				}
				
				if(plugins.mail.isValidEmailAddress(utils.stringTrim(to))){
					
					var success = plugins.mail.sendMail(to, userName, subJect, msgText,cc,cco,[attachment1], properties);
					if (!success){
						var msgMail = "No ha sido posible enviar la autorización via E-mail";
						grabaLog(msgMail,palab_rel_buscar_admision_num.adm_histclin);
					}
				}
				else{
					var msg = "No ha sido posible enviar la autorización. Direccion de correo electrónico no válido.\n E-mail: " + to;
					grabaLog(msg,palab_rel_buscar_admision_num.adm_histclin)
				}
					
				if(arch){
					
					try{
					  	plugins.file.deleteFile(arch.getAbsolutePath())
					  	plugins.file.deleteFile(arch)
					  }catch(msg){
							grabaLog("Error al eliminar archivo pdf.",palab_rel_buscar_admision_num.adm_histclin)
					}	
				}
			}
		}
	}
}

/**
 * TODO generated, please specify type and doc for the params
 * @param {String} texto
 * @param {Number} histClin
 *
 * @properties={typeid:24,uuid:"A4E7B211-D896-4338-80D6-D7C37FAB1AAD"}
 */
function grabaLog(texto,histClin) {
	
	var id = application.getUUID();
	//Verificando si existe clave primaria
	var sql = "SELECT EXISTS( SELECT id FROM cirugia_errores WHERE id='" + id + "')"
	var dsExists = databaseManager.getDataSetByQuery('bases_auxiliares',sql,null,-1);
	while(dsExists.getValue(1,1) == 1){
		id = application.getUUID();
		sql = "SELECT EXISTS( SELECT id FROM cirugia_errores WHERE id='" + id + "')"
		dsExists = databaseManager.getDataSetByQuery('bases_auxiliares',sql,null,-1);
	}
	
	var fs = databaseManager.getFoundSet("bases_auxiliares","cirugia_errores")
	var fechacarga = application.getServerTimeStamp();
	fs.newRecord()
	fs['id'] = id;
	fs['hiscli'] = histClin;
	fs['protocolo'] = 0;
	fs['texto_errores'] = application.getSolutionName() + "|" +  application.getIPAddress() + "|" + controller.getName() + "|" +  texto;
	fs['tipo_pac'] = 'Int';
	fs['fecha']=application.getServerTimeStamp();
	fs['hora']=fechacarga.getHours()+''+fechacarga.getMinutes()
	
	databaseManager.startTransaction()
	var result = databaseManager.saveData(fs);
	if(result){
		databaseManager.commitTransaction();				
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
		
				var thrown = record.exception.getValue()
			
			}
		}
		databaseManager.rollbackTransaction()
	}
}
