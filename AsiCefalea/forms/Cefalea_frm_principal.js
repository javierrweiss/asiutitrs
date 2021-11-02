/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"DBD1BE36-539F-4C87-B7F1-A94BCC84E5C8"}
 */
var f_fechanac = ' ';

/**
 * @properties={typeid:35,uuid:"99CC40C2-5A07-40AF-AF7C-4E08A3A39705",variableType:-4}
 */
var $_wHayArm = false;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"340E51CB-7489-466D-A161-22D3756015B1",variableType:4}
 */
var f_arm = 0;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"E8B3ABA4-82C2-40AE-8902-671640911BDF"}
 */
var f_derivado = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"4BEA26F0-C6AA-4B42-AD8E-FDB08A081746"}
 */
var f_ingresoUco = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"D90270A8-B164-485F-B58C-4E78A3331367"}
 */
var f_ingresoSanatorio = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"92F8F611-8C8A-4A5A-9C02-0ACCA0B47E3A"}
 */
var $_msgSMS = '';

/**
 * @properties={typeid:35,uuid:"223F4DA2-85A9-4CD5-B470-E5C644FA8344",variableType:-4}
 */
var $_listNumberSMS = new Array();

/**
 * @properties={typeid:35,uuid:"BE907DAF-6EE6-4D75-BF46-5AA86AD3C6D8",variableType:-4}
 */
var $_wtrau = false;

/**
 * @properties={typeid:35,uuid:"3D30D7C6-D153-4D35-A577-CE01E2CFD3EA",variableType:-4}
 */
var $_wsele = false;

/**
 * @properties={typeid:35,uuid:"A1DCB098-619C-4004-AF02-1830CC7602A7",variableType:-4}
 */
var $_isUserOSTEE = false;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"976E4CA9-44A1-4277-BA5A-328C516EB0F7",variableType:4}
 */
var $_countChange = 1;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"21A96350-24B0-4841-84E4-039DC1C33780"}
 */
var f_habita = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"FB765BF2-51FB-488B-9298-897F76A7A813"}
 */
var f_cama = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"934D183A-54BF-41F8-BAA8-88EF490C6CC4",variableType:4}
 */
var f_sexo = null;

/**
 * @properties={typeid:35,uuid:"AD527850-FB74-4960-AE2C-7BC8B81F4ECF",variableType:-4}
 */
var f_cerrarForm = false;

/**
 * @properties={typeid:35,uuid:"6EB400B3-8E72-4C0E-A049-55410B209709",variableType:-4}
 */
var $isDirty = false;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"033078EB-3C3F-45BD-B99B-FD233F829776",variableType:4}
 */
var f_protocolo = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"C92CA656-C19D-450B-A076-C2E88A453896"}
 */
var $messageErrorInter = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"47B173CD-0B5E-4A97-8233-45550D58CB56"}
 */
var f_medico = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"4404C8DF-0D67-4985-AC5E-FC6BDBB1AC5E"}
 */
var f_edad = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"145CDFEB-C055-45E8-AD30-BBB92CA09969"}
 */
var f_cobertura = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"CC97BB09-8F6E-491B-ABE4-90F1C1B9D4D4"}
 */
var f_histClinUnica = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"9973FD45-C5D3-470F-AC9F-C61C28D550AF"}
 */
var f_paciente = null;

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"A80DB6A8-C651-4D8D-B168-A0685B583C98"}
 */
function onShow_inicializarForm(firstShow, event) {

	//initFormFirstShow();
	loadData()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"959DDF77-BFF6-4607-9E53-FDD89017AAFC"}
 */
function onAction_btnBuscarPaciente(event) {

	
}

/**
 * @properties={typeid:24,uuid:"516DDC76-9609-45E3-B533-77ED4E964CE4"}
 */
function openSearch() {

	
}

/**
 * @properties={typeid:24,uuid:"7FABBB2D-9A27-475F-9E87-0FC7D76D4B54"}
 * @AllowToRunInFind
 */
function loadData() {
	limpiarForm();
	forms.Cefalea_frm_principal.f_paciente=cefalea_vhiscli_to_tbc_hist_cab_new.histcabapellnom
	forms.Cefalea_frm_principal.f_histClinUnica=globals.vHiscli
	globals.cefalea_obra=cefalea_vhiscli_to_tbc_hist_cab_new.histcabobra
	forms.Cefalea_frm_principal.f_cobertura=cefalea_obra_to_tbc_obras.obr_razonsoc
	forms.Cefalea_frm_principal.f_edad=utils.numberFormat(globals.CalculoEdad(cefalea_vhiscli_to_tbc_hist_cab_new.histcabfechanac),0)+" "+globals.vTipoEdad
	forms.Cefalea_frm_principal.f_fechanac=cefalea_vhiscli_to_tbc_hist_cab_new.histcabfechanac.toString().substr(6,2)+"/"+cefalea_vhiscli_to_tbc_hist_cab_new.histcabfechanac.toString().substr(4,2)+"/"+cefalea_vhiscli_to_tbc_hist_cab_new.histcabfechanac.toString().substr(0,4)
	forms.Cefalea_frm_principal.f_sexo=cefalea_vhiscli_to_tbc_hist_cab_new.histcabsexo
	if(cefalea_vhiscli_to_tbl_cefalea.getSize()>0){
				globals.cefalea_fecha = cefalea_vhiscli_to_tbl_cefalea.fecha;
				// cargar informes de Postgres
				globals.cefalea_grupo = 1;
				if(cefalea_vhiscli_txt_to_tbl_cefalea_txt.getSize()>0){
					forms.Cefalea_chk_1_localizacion.f_texto = cefalea_vhiscli_txt_to_tbl_cefalea_txt.linea;
				}
				globals.cefalea_grupo = 2;
				if(cefalea_vhiscli_txt_to_tbl_cefalea_txt.getSize()>0){
					forms.Cefalea_chk_2_caracter.f_texto = cefalea_vhiscli_txt_to_tbl_cefalea_txt.linea;
				}
				globals.cefalea_grupo = 4;
				if(cefalea_vhiscli_txt_to_tbl_cefalea_txt.getSize()>0){
					forms.Cefalea_chk_4_causa.f_texto = cefalea_vhiscli_txt_to_tbl_cefalea_txt.linea;
				}
				globals.cefalea_grupo = 5;
				if(cefalea_vhiscli_txt_to_tbl_cefalea_txt.getSize()>0){
					forms.Cefalea_chk_5_aura.f_texto = cefalea_vhiscli_txt_to_tbl_cefalea_txt.linea;
				}
				globals.cefalea_grupo = 7;
				if(cefalea_vhiscli_txt_to_tbl_cefalea_txt.getSize()>0){
					forms.Cefalea_chk_7_presentacion.f_texto = cefalea_vhiscli_txt_to_tbl_cefalea_txt.linea;
				}
				globals.cefalea_grupo = 8;
				if(cefalea_vhiscli_txt_to_tbl_cefalea_txt.getSize()>0){
					forms.Cefalea_chk_0_semiologia.f_texto = cefalea_vhiscli_txt_to_tbl_cefalea_txt.linea;
				}
				globals.cefalea_grupo = 9;
				if(cefalea_vhiscli_txt_to_tbl_cefalea_txt.getSize()>0){
					forms.Cefalea_chk_9_sintomas.f_texto = cefalea_vhiscli_txt_to_tbl_cefalea_txt.linea;
				}
				globals.cefalea_grupo = 12;
				if(cefalea_vhiscli_txt_to_tbl_cefalea_txt.getSize()>0){
					forms.Cefalea_chk_12_factores.f_texto = cefalea_vhiscli_txt_to_tbl_cefalea_txt.linea;
				}
				globals.cefalea_grupo = 13;
				if(cefalea_vhiscli_txt_to_tbl_cefalea_txt.getSize()>0){
					forms.Cefalea_chk_13_remision.f_texto = cefalea_vhiscli_txt_to_tbl_cefalea_txt.linea;
				}
				globals.cefalea_grupo = 14;
				if(cefalea_vhiscli_txt_to_tbl_cefalea_txt.getSize()>0){
					forms.Cefalea_chk_14_resolutorio.f_texto = cefalea_vhiscli_txt_to_tbl_cefalea_txt.linea;
				}
				globals.cefalea_grupo = 15;
				if(cefalea_vhiscli_txt_to_tbl_cefalea_txt.getSize()>0){
					forms.Cefalea_txt_efn_otros.f_informe = cefalea_vhiscli_txt_to_tbl_cefalea_txt.linea;
				}
				globals.cefalea_grupo = 16;
				if(cefalea_vhiscli_txt_to_tbl_cefalea_txt.getSize()>0){
					forms.Cefalea_txt_ec_rx.f_informe = cefalea_vhiscli_txt_to_tbl_cefalea_txt.linea;
				}
				globals.cefalea_grupo = 17;
				if(cefalea_vhiscli_txt_to_tbl_cefalea_txt.getSize()>0){
					forms.Cefalea_txt_ec_tac.f_informe = cefalea_vhiscli_txt_to_tbl_cefalea_txt.linea;
				}
				globals.cefalea_grupo = 18;
				if(cefalea_vhiscli_txt_to_tbl_cefalea_txt.getSize()>0){
					forms.Cefalea_txt_ec_rmn.f_informe = cefalea_vhiscli_txt_to_tbl_cefalea_txt.linea;
				}
				globals.cefalea_grupo = 19;
				if(cefalea_vhiscli_txt_to_tbl_cefalea_txt.getSize()>0){
					forms.Cefalea_txt_ec_otros.f_informe = cefalea_vhiscli_txt_to_tbl_cefalea_txt.linea;
				}
				globals.cefalea_grupo = 20;
				if(cefalea_vhiscli_txt_to_tbl_cefalea_txt.getSize()>0){
					forms.Cefalea_txt_mc.f_informe = cefalea_vhiscli_txt_to_tbl_cefalea_txt.linea;
				}
				globals.cefalea_grupo = 21;
				if(cefalea_vhiscli_txt_to_tbl_cefalea_txt.getSize()>0){
					forms.Cefalea_txt_ea.f_informe = cefalea_vhiscli_txt_to_tbl_cefalea_txt.linea;
				}
				globals.cefalea_grupo = 22;
				if(cefalea_vhiscli_txt_to_tbl_cefalea_txt.getSize()>0){
					forms.Cefalea_txt_ap.f_informe = cefalea_vhiscli_txt_to_tbl_cefalea_txt.linea;
				}
				globals.cefalea_grupo = 23;
				if(cefalea_vhiscli_txt_to_tbl_cefalea_txt.getSize()>0){
					forms.Cefalea_txt_habitos.f_informe = cefalea_vhiscli_txt_to_tbl_cefalea_txt.linea;
				}
				globals.cefalea_grupo = 24;
				if(cefalea_vhiscli_txt_to_tbl_cefalea_txt.getSize()>0){
					forms.Cefalea_txt_af.f_informe = cefalea_vhiscli_txt_to_tbl_cefalea_txt.linea;
				}
				globals.cefalea_grupo = 25;
				if(cefalea_vhiscli_txt_to_tbl_cefalea_txt.getSize()>0){
					forms.Cefalea_txt_efn_conciencia.f_informe = cefalea_vhiscli_txt_to_tbl_cefalea_txt.linea;
				}
				globals.cefalea_grupo = 26;
				if(cefalea_vhiscli_txt_to_tbl_cefalea_txt.getSize()>0){
					forms.Cefalea_txt_efn_lenguaje.f_informe = cefalea_vhiscli_txt_to_tbl_cefalea_txt.linea;
				}
				globals.cefalea_grupo = 27;
				if(cefalea_vhiscli_txt_to_tbl_cefalea_txt.getSize()>0){
					forms.Cefalea_txt_efn_craneales.f_informe = cefalea_vhiscli_txt_to_tbl_cefalea_txt.linea;
				}
				globals.cefalea_grupo = 28;
				if(cefalea_vhiscli_txt_to_tbl_cefalea_txt.getSize()>0){
					forms.Cefalea_txt_efn_motor.f_informe = cefalea_vhiscli_txt_to_tbl_cefalea_txt.linea;
				}
				globals.cefalea_grupo = 29;
				if(cefalea_vhiscli_txt_to_tbl_cefalea_txt.getSize()>0){
					forms.Cefalea_txt_efn_sensibilidad.f_informe = cefalea_vhiscli_txt_to_tbl_cefalea_txt.linea;
				}
				globals.cefalea_grupo = 30;
				if(cefalea_vhiscli_txt_to_tbl_cefalea_txt.getSize()>0){
					forms.Cefalea_txt_efn_reflejos.f_informe = cefalea_vhiscli_txt_to_tbl_cefalea_txt.linea;
				}
				globals.cefalea_grupo = 31;
				if(cefalea_vhiscli_txt_to_tbl_cefalea_txt.getSize()>0){
					forms.Cefalea_txt_efn_taxia.f_informe = cefalea_vhiscli_txt_to_tbl_cefalea_txt.linea;
				}
				
	} else {
		cefalea_vhiscli_to_tbl_cefalea.newRecord()
		globals.cefalea_fecha = utils.stringToNumber(globals.CapturaFechaSistema());
		$isDirty = false;
	}
}

/**
 * TODO generated, please specify type and doc for the params
 * @param value
 *
 * @properties={typeid:24,uuid:"3724856F-2717-4F06-B953-E67A8F3CF45B"}
 */
function editablePaciente(value) {
	elements.txt_paciente.editable = value;
	//elements.btn_buscarPaciente.enabled = value;
}

/**
 * @properties={typeid:24,uuid:"9F93237B-7381-4733-B7E1-BF2E577232A1"}
 */
function limpiarForm() {

	databaseManager.revertEditedRecords();
	inicializarForm();
	$isDirty = false;

}

/**
 * @properties={typeid:24,uuid:"A3E8C33B-A2F7-41C1-B29C-49C614A97CA2"}
 */
function inicializarForm() {

	f_histClinUnica = null;
	f_paciente = null;
	f_cobertura = null;
	f_protocolo = null;
	f_edad = null;
	f_sexo = null;
	f_cerrarForm = false;
	//f_medico = null;
	f_habita = null;
	f_cama = null;
	f_derivado = null;
	f_ingresoSanatorio = null;
	f_ingresoUco = null;
	//f_arm = 0;
	f_arm = 1;
	$_countChange = 1;
	$_wsele = false;
	$_wtrau = false;
	$_msgSMS = "";
	$_listNumberSMS = new Array();
	
	elements.lbl_procesando.visible = false;
	application.updateUI();
	forms.Cefalea_chk_1_localizacion.f_texto= null;
	forms.Cefalea_chk_2_caracter.f_texto = null;
	forms.Cefalea_chk_4_causa.f_texto = null;
	forms.Cefalea_chk_5_aura.f_texto = null;
	forms.Cefalea_chk_7_presentacion.f_texto= null;
	forms.Cefalea_chk_0_semiologia.f_texto = null;
	forms.Cefalea_chk_9_sintomas.f_texto = null;
	forms.Cefalea_chk_12_factores.f_texto = null;
	forms.Cefalea_chk_13_remision.f_texto = null;
	forms.Cefalea_chk_14_resolutorio.f_texto = null;
	forms.Cefalea_txt_efn_otros.f_informe = null;
	forms.Cefalea_txt_ec_rx.f_informe = null;
	forms.Cefalea_txt_ec_tac.f_informe = null;
	forms.Cefalea_txt_ec_rmn.f_informe = null;
	forms.Cefalea_txt_ec_otros.f_informe = null;
	forms.Cefalea_txt_af.f_informe = null;
	forms.Cefalea_txt_ap.f_informe = null;
	forms.Cefalea_txt_habitos.f_informe = null;
	forms.Cefalea_txt_mc.f_informe = null;
	forms.Cefalea_txt_efn_conciencia.f_informe = null;
	forms.Cefalea_txt_efn_craneales.f_informe = null;
	forms.Cefalea_txt_efn_lenguaje.f_informe = null;
	forms.Cefalea_txt_efn_motor.f_informe = null;
	forms.Cefalea_txt_efn_reflejos.f_informe = null;
	forms.Cefalea_txt_efn_sensibilidad.f_informe = null;
	forms.Cefalea_txt_efn_taxia.f_informe = null;
			
	//visibleBody(false);
	editablePaciente(true);
}

/**
 * 
 * @param {Boolean} value
 *
 * @properties={typeid:24,uuid:"70DB8DA9-23DC-4548-8C06-8216B56C9D6D"}
 */
function visibleBody(value) {

	elements.tab_informe_1.visible = value;
	elements.tab_informe_2.visible = value;
	//elements.shs_informe.visible = value;

	if (value) {
		elements.tab_informe_1.tabIndex = 1;
		elements.tab_informe_2.tabIndex = 1;
	}
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"86F69599-8CD1-49CA-9DE0-5164620A4003"}
 * @AllowToRunInFind
 */
function onAction_btnGuardar(event) {
	$isDirty=true
	var res = globals.DIALOGS.showQuestionDialog('¡Atención!', '¿ Esta seguro que desea guardar el protocolo de Cefalea ?', 'Si', 'No');
	if (res == 'Si') {

		if ($isDirty) {

			if (isValidDataForm()) {

				if (isValidData()) {
					
					var $hora = 0;
					$hora = utils.stringToNumber(globals.CapturaHoraSistema("HHMM"));
						
						// Completando cabecera
						cefalea_vhiscli_to_tbl_cefalea.hiscli=globals.vHiscli
						cefalea_vhiscli_to_tbl_cefalea.histpacnro=globals.vHiscli
						cefalea_vhiscli_to_tbl_cefalea.fecha=globals.cefalea_fecha
						cefalea_vhiscli_to_tbl_cefalea.hora=$hora
						cefalea_vhiscli_to_tbl_cefalea.apellido=cefalea_vhiscli_to_tbc_hist_cab_new.histcabapellido
						cefalea_vhiscli_to_tbl_cefalea.nombre=cefalea_vhiscli_to_tbc_hist_cab_new.histcabnombres
						cefalea_vhiscli_to_tbl_cefalea.edad=globals.CalculoEdad(cefalea_vhiscli_to_tbc_hist_cab_new.histcabfechanac)
						cefalea_vhiscli_to_tbl_cefalea.obra=cefalea_vhiscli_to_tbc_hist_cab_new.histcabobra
						cefalea_vhiscli_to_tbl_cefalea.cab_mc=utils.stringTrim(forms.Cefalea_txt_mc.f_informe).length > 0 ? 1 : 0;
						cefalea_vhiscli_to_tbl_cefalea.ec_rx=utils.stringTrim(forms.Cefalea_txt_ec_rx.f_informe).length > 0 ? 1 : 0;
						cefalea_vhiscli_to_tbl_cefalea.ec_tac=utils.stringTrim(forms.Cefalea_txt_ec_tac.f_informe).length > 0 ? 1 : 0;
						cefalea_vhiscli_to_tbl_cefalea.ec_rmn=utils.stringTrim(forms.Cefalea_txt_ec_rmn.f_informe).length > 0 ? 1 : 0;
						cefalea_vhiscli_to_tbl_cefalea.ec_otros=utils.stringTrim(forms.Cefalea_txt_ec_otros.f_informe).length > 0 ? 1 : 0;
						cefalea_vhiscli_to_tbl_cefalea.efn_otros=utils.stringTrim(forms.Cefalea_txt_efn_otros.f_informe).length > 0 ? 1 : 0;
						cefalea_vhiscli_to_tbl_cefalea.cab_ea=utils.stringTrim(forms.Cefalea_txt_ea.f_informe).length > 0 ? 1 : 0;
						cefalea_vhiscli_to_tbl_cefalea.cab_ap=utils.stringTrim(forms.Cefalea_txt_ap.f_informe).length > 0 ? 1 : 0;
						cefalea_vhiscli_to_tbl_cefalea.cab_habitos=utils.stringTrim(forms.Cefalea_txt_habitos.f_informe).length > 0 ? 1 : 0;
						cefalea_vhiscli_to_tbl_cefalea.cab_af=utils.stringTrim(forms.Cefalea_txt_af.f_informe).length > 0 ? 1 : 0;
						cefalea_vhiscli_to_tbl_cefalea.efn_conciencia=utils.stringTrim(forms.Cefalea_txt_efn_conciencia.f_informe).length > 0 ? 1 : 0;
						cefalea_vhiscli_to_tbl_cefalea.efn_lenguaje=utils.stringTrim(forms.Cefalea_txt_efn_lenguaje.f_informe).length > 0 ? 1 : 0;
						cefalea_vhiscli_to_tbl_cefalea.efn_pares_craneo=utils.stringTrim(forms.Cefalea_txt_efn_craneales.f_informe).length > 0 ? 1 : 0;
						cefalea_vhiscli_to_tbl_cefalea.efn_motor=utils.stringTrim(forms.Cefalea_txt_efn_motor.f_informe).length > 0 ? 1 : 0;
						cefalea_vhiscli_to_tbl_cefalea.efn_sensibilidad=utils.stringTrim(forms.Cefalea_txt_efn_sensibilidad.f_informe).length > 0 ? 1 : 0;
						cefalea_vhiscli_to_tbl_cefalea.efn_reflejos=utils.stringTrim(forms.Cefalea_txt_efn_reflejos.f_informe).length > 0 ? 1 : 0;
						cefalea_vhiscli_to_tbl_cefalea.efn_taxia=utils.stringTrim(forms.Cefalea_txt_efn_taxia.f_informe).length > 0 ? 1 : 0;
						cefalea_vhiscli_to_tbl_cefalea.legajo_medico=globals.cefalea_leg_medico
						cefalea_vhiscli_to_tbl_cefalea.tipo_medico=globals.cefalea_tip_medico
						cefalea_vhiscli_to_tbl_cefalea.especialidad=globals.cefalea_especial
					// Actualizando base de datos
					try{
						databaseManager.startTransaction()
						var resultSave = databaseManager.saveData(cefalea_vhiscli_to_tbl_cefalea.getRecord(1));
						if(resultSave){
							databaseManager.commitTransaction()
						}else{
							var error1 = ''
							var error2 = ''
							var array = databaseManager.getFailedRecords(cefalea_vhiscli_to_tbl_cefalea)
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
								plugins.dialogs.showErrorDialog("Error de grabación","Record validation failed: " + thrown)
								plugins.dialogs.showErrorDialog("Error en grabacion de Texto",error1,"Ok")
								plugins.dialogs.showErrorDialog("Error en grabacion de Texto",error2,"Ok")
							}
							plugins.dialogs.showErrorDialog("Error en grabación","Se ha producido un error de grabación. "+'\n'+"Avise a Sistemas, por favor.", "Ok")
						}
					}catch(msg){
						plugins.dialogs.showErrorDialog("Error","error de grabaciòn")
					}
					
									
					// Guardando informes
					var itemHistClin = globals.vHiscli;
					var itemFecha = foundset.fecha;
					var itemHora = foundset.hora;
					var itemGrupo = 0;

					
					// Informe 1.- Localizacion -> Otros
					itemGrupo=1;
					if (cefalea_vhiscli_to_tbl_cefalea.sc1_otro && resultSave){
						resultSave = guardarTexto(itemHistClin, itemFecha, itemHora, itemGrupo,  forms.Cefalea_chk_1_localizacion.f_texto);
					} 
					itemGrupo=2;
					if (cefalea_vhiscli_to_tbl_cefalea.sc2_otro && resultSave){
						resultSave = guardarTexto(itemHistClin, itemFecha, itemHora, itemGrupo,  forms.Cefalea_chk_2_caracter.f_texto);
					} 
					itemGrupo=4;
					if (cefalea_vhiscli_to_tbl_cefalea.sc4_otro && resultSave){
						resultSave = guardarTexto(itemHistClin, itemFecha, itemHora, itemGrupo,  forms.Cefalea_chk_4_causa.f_texto);
					} 
					itemGrupo=5;
					if (cefalea_vhiscli_to_tbl_cefalea.sc5_otro && resultSave){
						resultSave = guardarTexto(itemHistClin, itemFecha, itemHora, itemGrupo,  forms.Cefalea_chk_5_aura.f_texto);
					} 
					itemGrupo=7;
					if (cefalea_vhiscli_to_tbl_cefalea.sc7_otro && resultSave){
						resultSave = guardarTexto(itemHistClin, itemFecha, itemHora, itemGrupo,  forms.Cefalea_chk_7_presentacion.f_texto);
					} 
					itemGrupo=8;
					if (cefalea_vhiscli_to_tbl_cefalea.sc8_frecuencia==5 && resultSave){
						resultSave = guardarTexto(itemHistClin, itemFecha, itemHora, itemGrupo,  forms.Cefalea_chk_0_semiologia.f_texto);
					} 
					itemGrupo=9;
					if (cefalea_vhiscli_to_tbl_cefalea.sc9_otro && resultSave){
						resultSave = guardarTexto(itemHistClin, itemFecha, itemHora, itemGrupo,  forms.Cefalea_chk_9_sintomas.f_texto);
					} 
					itemGrupo=12;
					if (cefalea_vhiscli_to_tbl_cefalea.sc12_otro && resultSave){
						resultSave = guardarTexto(itemHistClin, itemFecha, itemHora, itemGrupo,  forms.Cefalea_chk_12_factores.f_texto);
					} 
					itemGrupo=13;
					if (cefalea_vhiscli_to_tbl_cefalea.sc13_otro && resultSave){
						resultSave = guardarTexto(itemHistClin, itemFecha, itemHora, itemGrupo,  forms.Cefalea_chk_13_remision.f_texto);
					} 
					itemGrupo=14;
					if (cefalea_vhiscli_to_tbl_cefalea.sc14_otro && resultSave){
						resultSave = guardarTexto(itemHistClin, itemFecha, itemHora, itemGrupo,  forms.Cefalea_chk_14_resolutorio.f_texto);
					} 
					itemGrupo=15;
					if (cefalea_vhiscli_to_tbl_cefalea.efn_otros && resultSave){
						resultSave = guardarTexto(itemHistClin, itemFecha, itemHora, itemGrupo,  forms.Cefalea_txt_efn_otros.f_informe);
					} 
					itemGrupo=16;
					if (cefalea_vhiscli_to_tbl_cefalea.ec_rx && resultSave){
						resultSave = guardarTexto(itemHistClin, itemFecha, itemHora, itemGrupo,  forms.Cefalea_txt_ec_rx.f_informe);
					} 
					itemGrupo=17;
					if (cefalea_vhiscli_to_tbl_cefalea.ec_tac && resultSave){
						resultSave = guardarTexto(itemHistClin, itemFecha, itemHora, itemGrupo,  forms.Cefalea_txt_ec_tac.f_informe);
					} 
					itemGrupo=18;
					if (cefalea_vhiscli_to_tbl_cefalea.ec_rmn && resultSave){
						resultSave = guardarTexto(itemHistClin, itemFecha, itemHora, itemGrupo,  forms.Cefalea_txt_ec_rmn.f_informe);
					} 
					itemGrupo=19;
					if (cefalea_vhiscli_to_tbl_cefalea.ec_otros && resultSave){
						resultSave = guardarTexto(itemHistClin, itemFecha, itemHora, itemGrupo,  forms.Cefalea_txt_ec_otros.f_informe);
					} 
					itemGrupo=20;
					if (cefalea_vhiscli_to_tbl_cefalea.cab_mc && resultSave){
						resultSave = guardarTexto(itemHistClin, itemFecha, itemHora, itemGrupo,  forms.Cefalea_txt_mc.f_informe);
					} 
					itemGrupo=21;
					if (cefalea_vhiscli_to_tbl_cefalea.cab_ea && resultSave){
						resultSave = guardarTexto(itemHistClin, itemFecha, itemHora, itemGrupo,  forms.Cefalea_txt_ea.f_informe);
					} 
					itemGrupo=22;
					if (cefalea_vhiscli_to_tbl_cefalea.cab_ap && resultSave){
						resultSave = guardarTexto(itemHistClin, itemFecha, itemHora, itemGrupo,  forms.Cefalea_txt_ap.f_informe);
					}
					itemGrupo=23;
					if (cefalea_vhiscli_to_tbl_cefalea.cab_habitos && resultSave){
						resultSave = guardarTexto(itemHistClin, itemFecha, itemHora, itemGrupo,  forms.Cefalea_txt_habitos.f_informe);
					}
					itemGrupo=24;
					if (cefalea_vhiscli_to_tbl_cefalea.cab_af && resultSave){
						resultSave = guardarTexto(itemHistClin, itemFecha, itemHora, itemGrupo,  forms.Cefalea_txt_af.f_informe);
					}
					itemGrupo=25;
					if (cefalea_vhiscli_to_tbl_cefalea.efn_conciencia && resultSave){
						resultSave = guardarTexto(itemHistClin, itemFecha, itemHora, itemGrupo,  forms.Cefalea_txt_efn_conciencia.f_informe);
					}
					itemGrupo=26;
					if (cefalea_vhiscli_to_tbl_cefalea.efn_lenguaje && resultSave){
						resultSave = guardarTexto(itemHistClin, itemFecha, itemHora, itemGrupo,  forms.Cefalea_txt_efn_lenguaje.f_informe);
					}
					itemGrupo=27;
					if (cefalea_vhiscli_to_tbl_cefalea.efn_pares_craneo && resultSave){
						resultSave = guardarTexto(itemHistClin, itemFecha, itemHora, itemGrupo,  forms.Cefalea_txt_efn_craneales.f_informe);
					}
					itemGrupo=28;
					if (cefalea_vhiscli_to_tbl_cefalea.efn_motor && resultSave){
						resultSave = guardarTexto(itemHistClin, itemFecha, itemHora, itemGrupo,  forms.Cefalea_txt_efn_motor.f_informe);
					}
					itemGrupo=29;
					if (cefalea_vhiscli_to_tbl_cefalea.efn_sensibilidad && resultSave){
						resultSave = guardarTexto(itemHistClin, itemFecha, itemHora, itemGrupo,  forms.Cefalea_txt_efn_sensibilidad.f_informe);
					}
					itemGrupo=30;
					if (cefalea_vhiscli_to_tbl_cefalea.efn_reflejos && resultSave){
						resultSave = guardarTexto(itemHistClin, itemFecha, itemHora, itemGrupo,  forms.Cefalea_txt_efn_reflejos.f_informe);
					}
					itemGrupo=31;
					if (cefalea_vhiscli_to_tbl_cefalea.efn_taxia && resultSave){
						resultSave = guardarTexto(itemHistClin, itemFecha, itemHora, itemGrupo,  forms.Cefalea_txt_efn_taxia.f_informe);
					}
					
					
					if (resultSave == true) {

						//databaseManager.commitTransaction();
						globals.DIALOGS.showInfoDialog("Resultado", "El protocolo de Cefalea se guardo correctamente.", "Aceptar");
						$isDirty=false
						//editablePaciente(false);	
						//imprimir(asiucotrs_rel_hciuco.hiuhiscli, asiucotrs_rel_hciuco.hiufecha, asiucotrs_rel_hciuco.hiuhora);
						
						//globals.AsistFunciones_unLockRegisterTable(application.getSolutionName(),controller.getName(),asiucotrs_rel_buscar_admision.adm_histclin.toString(),globals.AsiUcoTrs_vLega.toString(),"Historia Clinica");
						//cerrarForm();
						//limpiarForm();
						//$isDirty = false;
						
					} 
				}
			}
		} else {
			globals.DIALOGS.showWarningDialog("Atención!", "No hay datos para guardar.", "Aceptar")
			elements.txt_paciente.requestFocus();
		}
	} else
		elements.txt_paciente.requestFocus();
}

/**
 * 
 * @param {Number} histClin
 * @param {Number} fecha1
 * @param {Number} hora1
 * @param {Number} grupo
 * @param {String} texto
 *
 * @properties={typeid:24,uuid:"10653807-D017-45FB-944E-507B8E3A8475"}
 */
function guardarTexto(histClin, fecha1, hora1, grupo, texto) {
	var retorno = true;
	globals.cefalea_grupo = grupo;
	
	
	if (cefalea_vhiscli_txt_to_tbl_cefalea_txt.getSize() == 0) {

		cefalea_vhiscli_txt_to_tbl_cefalea_txt.newRecord();
		cefalea_vhiscli_txt_to_tbl_cefalea_txt.hiscli = histClin;
		cefalea_vhiscli_txt_to_tbl_cefalea_txt.fecha = fecha;
		cefalea_vhiscli_txt_to_tbl_cefalea_txt.grupo = grupo;
		
	}

	cefalea_vhiscli_txt_to_tbl_cefalea_txt.linea = utils.stringTrim(texto);
	try{
		databaseManager.startTransaction()
		if(databaseManager.saveData(cefalea_vhiscli_txt_to_tbl_cefalea_txt.getRecord(1))){
			databaseManager.commitTransaction()
			retorno = true
		}else{
			var error1 = ''
			var error2 = ''
			var array = databaseManager.getFailedRecords(cefalea_vhiscli_txt_to_tbl_cefalea_txt)
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
			retorno = false
			if(error1!=''){
				plugins.dialogs.showErrorDialog("Error de grabación","Record validation failed: " + thrown)
				plugins.dialogs.showErrorDialog("Error en grabacion de Texto",error1,"Ok")
				plugins.dialogs.showErrorDialog("Error en grabacion de Texto",error2,"Ok")
			}
			plugins.dialogs.showErrorDialog("Error en grabación","Se ha producido un error de grabación. "+'\n'+"Avise a Sistemas, por favor.", "Ok")
		}
	}catch(msg){
		plugins.dialogs.showErrorDialog("Error","error de grabaciòn")
	}
	return retorno;

}

/**
 * @properties={typeid:24,uuid:"6AD48F00-1F87-473A-B472-2FD9945218C3"}
 */
function isValidDataForm() {
	var isValid = true;
	var messageError = "No ha sido posible guardar el protocolo de Cefalea. Corrija los siguientes errores y vuelva a intentar." + '\n'		//var borderError = 'LineBorder,1,#ff0000';
	if(utils.stringTrim(forms.Cefalea_txt_mc.f_informe).length < 1){
		messageError += "Falta ingresar texto MC."+'\n';
		isValid = false;
	}
	if(utils.stringTrim(forms.Cefalea_txt_mc.f_informe).length < 1){
		messageError += "Falta ingresar texto MC."+'\n';
		isValid = false;
	}
	if(utils.stringTrim(forms.Cefalea_txt_ea.f_informe).length < 1){
		messageError += "Falta ingresar texto EA."+'\n';
		isValid = false;
	}
	if(utils.stringTrim(forms.Cefalea_txt_ap.f_informe).length < 1){
		messageError += "Falta ingresar texto ap."+'\n';
		isValid = false;
	}
	if(utils.stringTrim(forms.Cefalea_txt_habitos.f_informe).length < 1){
		messageError += "Falta ingresar texto Hábitos."+'\n';
		isValid = false;
	}
	if(utils.stringTrim(forms.Cefalea_txt_af.f_informe).length < 1){
		messageError += "Falta ingresar texto AF."+'\n';
		isValid = false;
	}
	if(utils.stringTrim(forms.Cefalea_txt_efn_conciencia.f_informe).length < 1){
		messageError += "Falta ingresar texto Examen Físico Neurológico - Conciencia."+'\n';
		isValid = false;
	}
	if(utils.stringTrim(forms.Cefalea_txt_efn_lenguaje.f_informe).length < 1){
		messageError += "Falta ingresar texto Examen Físico Neurológico - Lenguaje."+'\n';
		isValid = false;
	}
	if(utils.stringTrim(forms.Cefalea_txt_efn_craneales.f_informe).length < 1){
		messageError += "Falta ingresar texto Examen Físico Neurológico - Pares Craneales."+'\n';
		isValid = false;
	}
	if(utils.stringTrim(forms.Cefalea_txt_efn_motor.f_informe).length < 1){
		messageError += "Falta ingresar texto Examen Físico Neurológico - Motor."+'\n';
		isValid = false;
	}
	if(utils.stringTrim(forms.Cefalea_txt_efn_sensibilidad.f_informe).length < 1){
		messageError += "Falta ingresar texto Examen Físico Neurológico - Sensibilidad."+'\n';
		isValid = false;
	}
	if(utils.stringTrim(forms.Cefalea_txt_efn_reflejos.f_informe).length < 1){
		messageError += "Falta ingresar texto Examen Físico Neurológico - Reflejos."+'\n';
		isValid = false;
	}
	if(utils.stringTrim(forms.Cefalea_txt_efn_taxia.f_informe).length < 1){
		messageError += "Falta ingresar texto Examen Físico Neurológico - Taxia."+'\n';
		isValid = false;
	}
	if(utils.stringTrim(forms.Cefalea_txt_ec_rx.f_informe).length < 1){
		messageError += "Falta ingresar texto Examen complementario: RX."+'\n';
		isValid = false;
	}
	if(utils.stringTrim(forms.Cefalea_txt_ec_tac.f_informe).length < 1){
		messageError += "Falta ingresar texto Examen complementario: TAC."+'\n';
		isValid = false;
	}
	if(utils.stringTrim(forms.Cefalea_txt_ec_rmn.f_informe).length < 1){
		messageError += "Falta ingresar texto Examen complementario: RMN."+'\n';
		isValid = false;
	}
	if(utils.stringTrim(forms.Cefalea_txt_ec_otros.f_informe).length < 1){
		messageError += "Falta ingresar texto Examen complementario: Otros."+'\n';
		isValid = false;
	}
	var names = new Array()
	var i=0
	var combo_cargado=true
	if(forms.Cefalea_chk_0_semiologia.foundset.sc0_edad<1||forms.Cefalea_chk_0_semiologia.foundset.sc0_edad==null){
		combo_cargado=false
	}else{
		if(forms.Cefalea_chk_0_semiologia.foundset.sc3_instalacion<1||forms.Cefalea_chk_0_semiologia.foundset.sc3_instalacion==null){
			combo_cargado=false
		}else{
			if(forms.Cefalea_chk_0_semiologia.foundset.sc6_duracion<1||forms.Cefalea_chk_0_semiologia.foundset.sc6_duracion==null){
				combo_cargado=false
			}else{
				if(forms.Cefalea_chk_0_semiologia.foundset.sc11_intensidad<1||forms.Cefalea_chk_0_semiologia.foundset.sc11_intensidad==null){
					combo_cargado=false
				}else{
					if(forms.Cefalea_chk_0_semiologia.foundset.sc8_frecuencia<1||forms.Cefalea_chk_0_semiologia.foundset.sc8_frecuencia==null){
						combo_cargado=false
					}else{
						if(forms.Cefalea_chk_0_semiologia.foundset.sc8_frecuencia==5&&(forms.Cefalea_chk_0_semiologia.f_texto==null||forms.Cefalea_chk_0_semiologia.f_texto.length==0)){
							combo_cargado=false
						}	
					}
				}	
			}	
		}
	}
	
	if(!combo_cargado){
		messageError += "Falta ingresar algún elemento del formulario de Semiología Resto"+'\n';
		isValid = false;
	}
	names = forms.Cefalea_chk_1_localizacion.elements.allnames
	var check_cargado=false
	for(i=0;i<names.length&&!check_cargado;i++){
		if(forms.Cefalea_chk_1_localizacion.foundset[names[i]]>0){
			check_cargado=true
		}
	}
	if(!check_cargado){
		messageError += "Falta ingresar algún elemento del formulario de Localización"+'\n';
		isValid = false;
	}
	names = forms.Cefalea_chk_2_caracter.elements.allnames
	check_cargado=false
	for(i=0;i<names.length&&!check_cargado;i++){
		if(forms.Cefalea_chk_2_caracter.foundset[names[i]]>0){
			check_cargado=true
		}
	}
	if(!check_cargado){
		messageError += "Falta ingresar algún elemento del formulario de Caracter"+'\n';
		isValid = false;
	}
	names = forms.Cefalea_chk_4_causa.elements.allnames
	check_cargado=false
	for(i=0;i<names.length&&!check_cargado;i++){
		if(forms.Cefalea_chk_4_causa.foundset[names[i]]>0){
			check_cargado=true
		}
	}
	if(!check_cargado){
		messageError += "Falta ingresar algún elemento del formulario de Causas"+'\n';
		isValid = false;
	}
	names = forms.Cefalea_chk_5_aura.elements.allnames
	check_cargado=false
	for(i=0;i<names.length&&!check_cargado;i++){
		if(forms.Cefalea_chk_5_aura.foundset[names[i]]>=0){
			check_cargado=true
		}
	}
	if(!check_cargado){
		messageError += "Falta ingresar algún elemento del formulario de Prodromo/Aura"+'\n';
		isValid = false;
	}
	names = forms.Cefalea_chk_7_presentacion.elements.allnames
	check_cargado=false
	for(i=0;i<names.length&&!check_cargado;i++){
		if(forms.Cefalea_chk_7_presentacion.foundset[names[i]]>0){
			check_cargado=true
		}
	}
	if(!check_cargado){
		messageError += "Falta ingresar algún elemento del formulario de Presentacion"+'\n';
		isValid = false;
	}
	names = forms.Cefalea_chk_9_sintomas.elements.allnames
	check_cargado=false
	for(i=0;i<names.length&&!check_cargado;i++){
		if(forms.Cefalea_chk_9_sintomas.foundset[names[i]]>0){
			check_cargado=true
		}
	}
	if(!check_cargado){
		messageError += "Falta ingresar algún elemento del formulario de Sintomas asociados"+'\n';
		isValid = false;
	}
	names = forms.Cefalea_chk_10_sintomas.elements.allnames
	check_cargado=false
	for(i=0;i<names.length&&!check_cargado;i++){
		if(forms.Cefalea_chk_10_sintomas.foundset[names[i]]>0){
			check_cargado=true
		}
	}
	if(!check_cargado){
		messageError += "Falta ingresar algún elemento del formulario de Sintomas autonomicos"+'\n';
		isValid = false;
	}
	names = forms.Cefalea_chk_12_factores.elements.allnames
	check_cargado=false
	for(i=0;i<names.length&&!check_cargado;i++){
		if(forms.Cefalea_chk_12_factores.foundset[names[i]]>0){
			check_cargado=true
		}
	}
	if(!check_cargado){
		messageError += "Falta ingresar algún elemento del formulario de Factores agravantes"+'\n';
		isValid = false;
	}
	names = forms.Cefalea_chk_13_remision.elements.allnames
	check_cargado=false
	for(i=0;i<names.length&&!check_cargado;i++){
		if(forms.Cefalea_chk_13_remision.foundset[names[i]]>0){
			check_cargado=true
		}
	}
	if(!check_cargado){
		messageError += "Falta ingresar algún elemento del formulario de remision"+'\n';
		isValid = false;
	}
	names = forms.Cefalea_chk_14_resolutorio.elements.allnames
	check_cargado=false
	for(i=0;i<names.length&&!check_cargado;i++){
		if(forms.Cefalea_chk_14_resolutorio.foundset[names[i]]>0){
			check_cargado=true
		}
	}
	if(!check_cargado){
		messageError += "Falta ingresar algún elemento del formulario de Resolutorio"+'\n';
		isValid = false;
	}
	if (!isValid) {
		globals.DIALOGS.showWarningDialog("¡Atención!", messageError, "Aceptar")
	}

	return isValid;
}

/**
 * @properties={typeid:24,uuid:"8DE69CF0-0DF2-4D5A-BD70-E09DE2095623"}
 */
function isValidData() {

	var isValid = true;
	//var messageError = "No ha sido posible guardar la solicitud. Corrija los siguientes errores y vuelva a intentar."
		//var borderError = 'LineBorder,1,#ff0000';
		//setDefaultBorderElements();
		/*
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
	 elements.txt_paciente.requestFocus();
	 }
	 */
	return isValid;

}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"F7718555-91F9-4AD0-B93E-6321F2108466"}
 */
function onAction_btnCerrar(event) {

	if ($isDirty) {
		if (globals.DIALOGS.showQuestionDialog('¡Atención!', 'Existen datos que no han sido guardados. ¿Está seguro que desea continuar?', 'Si', 'No') == 'Si')
			f_cerrarForm = true;
	} else {
		f_cerrarForm = true;
	}

	if (f_cerrarForm) {
		databaseManager.revertEditedRecords()
		cerrarForm();
	}
}

/**
 * @properties={typeid:24,uuid:"CB64ED0E-5379-46CB-804C-3B0F61213AC7"}
 */
function cerrarForm(){
	
	f_cerrarForm = true;
	
	var $win = application.getWindow(application.getActiveWindow().getName());
	if ($win != null) {
		$win.hide();
		$win.destroy();
	}
}

/**
 * Handle hide window.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"0BD403FF-516F-46FB-9CA6-7C024F290175"}
 */
function onHide_cerrarForm(event) {
	
	if(!f_cerrarForm)
		globals.DIALOGS.showInfoDialog("Atención","Para cerrar el programa debe presionar el boton Salir.","Aceptar")
	return f_cerrarForm;
}

/**
 * TODO generated, please specify type and doc for the params
 * @param {Date} Fecha_Desde
 * @param {Date} Fecha_Hasta
 *
 * @properties={typeid:24,uuid:"FBA9B49F-AD96-4C4F-A154-171B644EBF25"}
 */
function contar_dias(Fecha_Desde, Fecha_Hasta) {
	// El hasta dede ser mayor al desde
	var $contar = 0;

	var $x = Fecha_Hasta - Fecha_Desde//diferencias entre dos dias y lo muestra en milisegundos
	var $un_dia = 1000 * 60 * 60 * 24 //ms * sec * min * hrs de un día
	var $dif_dias = $x / $un_dia //calcula la diferencia en días
		//$contar = Math.ceil($dif_dias )   //redondea
	//$contar = Math.round($dif_dias)
	$contar = Math.floor($dif_dias) //redondea

	return $contar
}

/**
 * TODO generated, please specify type and doc for the params
 * @param {Number} realValue
 *
 * @properties={typeid:24,uuid:"520F436B-338C-4681-B533-A2AE22E2F804"}
 */
function convertNumberToHour_HHMM(realValue) {

	var $hora = "";
	if (realValue != null) {
		var value = realValue;
		if (value < 1) {
			$hora = "00:00";
		} else {
			if (value < 10) {
				$hora = "00:0" + value.toString().substr(0, 1);
			} else {
				if (value < 100) {
					$hora = "00:" + value.toString().substr(0, 2);
				} else {
					if (value < 1000) {
						$hora = "0" + value.toString().substr(0, 1) + ":" + value.toString().substr(1, 2);
					} else {
						if (value <= 2359) {
							$hora = value.toString().substr(0, 2) + ":" + value.toString().substr(2, 2);
						}
					}
				}
			}
		}
	}

	return $hora;
}

/**
 * Callback method when the user changes tab in a tab panel or divider position in split pane.
 *
 * @param {Number} previousIndex index of tab shown before the change
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"FFF37546-C7CA-4DDF-A9D7-9126437CF277"}
 */
function onTabChange_informe_1(previousIndex, event) {

	//if($_countChange == 1)
	//validarInforme(previousIndex,elements.tab_informe_1.getName(),elements.tab_informe_1.getTabFormNameAt(previousIndex),elements.tab_informe_1.getTabTextAt(previousIndex));
	elements.tab_informe_1.setTabFGColorAt(previousIndex, '#000000');
	elements.tab_informe_1.setTabFGColorAt(elements.tab_informe_1.tabIndex, '#3336ff');
	
	if(elements.tab_informe_1.tabIndex == 1)
		elements.tab_informe_1.setTabFGColorAt(1,'#0000ff')
		forms.Cefalea_txt_mc.elements.tea_texto.requestFocus();
	
	if(elements.tab_informe_1.tabIndex == 2)
		elements.tab_informe_1.setTabFGColorAt(2,'#0000ff')
		forms.Cefalea_txt_ea.elements.tea_texto.requestFocus();
	
	if(elements.tab_informe_1.tabIndex == 3)
		elements.tab_informe_1.setTabFGColorAt(3,'#0000ff')
		forms.Cefalea_txt_ap.elements.tea_texto.requestFocus();
	
	if(elements.tab_informe_1.tabIndex == 4)
		elements.tab_informe_1.setTabFGColorAt(4,'#0000ff')
		forms.Cefalea_txt_habitos.elements.tea_texto.requestFocus();
	
	if(elements.tab_informe_1.tabIndex == 5)
		elements.tab_informe_1.setTabFGColorAt(5,'#0000ff')
		forms.Cefalea_txt_af.elements.tea_texto.requestFocus();
	
	
}

/**
 * Callback method when the user changes tab in a tab panel or divider position in split pane.
 *
 * @param {Number} previousIndex index of tab shown before the change
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"B316CFC9-C451-46C7-B451-357D6FC723A2"}
 */
function onTabChange_informe_2(previousIndex, event) {

	
	elements.tab_informe_2.setTabFGColorAt(previousIndex, '#000000');
	elements.tab_informe_2.setTabFGColorAt(elements.tab_informe_2.tabIndex, '#3336ff');
	
	if(elements.tab_informe_2.tabIndex == 1){
		elements.tab_informe_2.setTabFGColorAt(1,'#0000ff')
		forms.Cefalea_chk_1_localizacion.elements.sc1_focal.requestFocus();
	}
	
	if(elements.tab_informe_2.tabIndex == 2){
		elements.tab_informe_2.setTabFGColorAt(2,'#0000ff')
		forms.Cefalea_chk_2_caracter.elements.sc2_pulsatil.requestFocus();
	}
	
	if(elements.tab_informe_2.tabIndex == 3){
		elements.tab_informe_2.setTabFGColorAt(3,'#0000ff')
		forms.Cefalea_chk_4_causa.elements.sc4_espontaneo.requestFocus();
	}
	
	if(elements.tab_informe_2.tabIndex == 4){
		elements.tab_informe_2.setTabFGColorAt(4,'#0000ff')
		forms.Cefalea_chk_5_aura.elements.sc5_aura.requestFocus();
	}
	
	if(elements.tab_informe_2.tabIndex == 5){
		elements.tab_informe_2.setTabFGColorAt(5,'#0000ff')
		forms.Cefalea_chk_7_presentacion.elements.sc7_diurna.requestFocus();
	}
	
	if(elements.tab_informe_2.tabIndex == 6){
		elements.tab_informe_2.setTabFGColorAt(6,'#0000ff')
		forms.Cefalea_chk_9_sintomas.elements.sc9_vertigo.requestFocus();
	}
	if(elements.tab_informe_2.tabIndex == 7){
		elements.tab_informe_2.setTabFGColorAt(7,'#0000ff')
		forms.Cefalea_chk_10_sintomas.elements.sc10_conjuntival.requestFocus();
	}
	if(elements.tab_informe_2.tabIndex == 8){
		elements.tab_informe_2.setTabFGColorAt(8,'#0000ff')
		forms.Cefalea_chk_12_factores.elements.sc12_ejercicio.requestFocus();
	}
	if(elements.tab_informe_2.tabIndex == 9){
		elements.tab_informe_2.setTabFGColorAt(9,'#0000ff')
		forms.Cefalea_chk_13_remision.elements.sc13_brusca.requestFocus();
	}
	if(elements.tab_informe_2.tabIndex == 10){
		elements.tab_informe_2.setTabFGColorAt(10,'#0000ff')
		forms.Cefalea_chk_14_resolutorio.elements.sc14_cansancio.requestFocus();
	}
	if(elements.tab_informe_2.tabIndex == 11){
		elements.tab_informe_2.setTabFGColorAt(11,'#0000ff')
		forms.Cefalea_chk_0_semiologia.elements.sc0_edad.requestFocus();
	}
}

/**
 * 
 * @param {Number} histClin
 * @param {Number} fecha
 * @param {Number} hora
 *
 * @properties={typeid:24,uuid:"691E0B46-D805-4378-89AF-D709ADCDF9EF"}
 */
function imprimir(histClin, fecha, hora) {
	
		
	
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
 * @properties={typeid:24,uuid:"67CE7918-7CE2-46DA-8F9E-E9FA3B53D569"}
 */
function onDataChange_txtField(oldValue, newValue, event) {
	// TODO Auto-generated method stub
	$isDirty = true;
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
 * @properties={typeid:24,uuid:"1949C244-3252-40A8-B500-E83EC3850399"}
 */
function onDataChange_cboSelect(oldValue, newValue, event) {
	// TODO Auto-generated method stub
	$isDirty = true;
	
	return true
}

/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"00540C07-6977-4577-9F67-FEAB5744107F"}
 */
function onLoad_inicializarForm(event) {
	
	initFormFirstShow();
}

/**
 * @properties={typeid:24,uuid:"143BA439-4C25-462E-924C-3CF4AAD8391A"}
 */
function initFormFirstShow(){
	
	inicializarForm();
	
}

/**
 * 
 * @param {Number} value
 *
 * @properties={typeid:24,uuid:"8BE97BB3-EA4F-49FF-A66F-015EEDF6B341"}
 */
function formatear_HistClinInter(value)
{
	var hiscli1 = value.toString();
	switch (hiscli1.length){
		case 2:	hiscli1 = hiscli1.substr(0,1)+'/'+hiscli1.substr(1,1);break;
		case 3:	hiscli1 = hiscli1.substr(0,2)+'/'+hiscli1.substr(2,1);break;
		case 4:	hiscli1 = hiscli1.substr(0,3)+'/'+hiscli1.substr(3,1);break;
		case 5:	hiscli1 = hiscli1.substr(0,4)+'/'+hiscli1.substr(4,1);break;
		case 6:	hiscli1 = hiscli1.substr(0,5)+'/'+hiscli1.substr(5,1);break;
		case 7:	hiscli1 = hiscli1.substr(0,6)+'/'+hiscli1.substr(6,1);break;
		case 8:	hiscli1 = hiscli1.substr(0,7)+'/'+hiscli1.substr(7,1);break;
	}	
	return hiscli1;
}
