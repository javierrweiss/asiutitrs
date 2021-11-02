/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"0457F828-C8D0-44C3-9D67-CA9A746EBA3A",variableType:4}
 */
var $_hora = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"22908AB1-A750-4FDE-966E-AFC69D8F0D27",variableType:4}
 */
var $_fecha = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"73ABC305-29DF-49C1-81CF-E81F8ACCDB1D",variableType:8}
 */
var $_histClin = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"7401ED5F-9066-4F0A-B92C-0A178C5EF8DB",variableType:4}
 */
var $_armModo = 0;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"16E597CF-6CC4-4EE9-AB8F-30C65FEE324E"}
 */
var f_concieX = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"857AD988-B189-4102-BD8F-D1A916B0FA12",variableType:4}
 */
var $_armInvasiva = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"B9475A45-6604-4293-8001-D114D7D95945",variableType:4}
 */
var f_modoInvasiva = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"3AC55CCB-D1D8-46E9-916C-CF5B7AF6D295",variableType:4}
 */
var f_modoNoInvasiva = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"9934E7A8-C6EE-4946-B0B3-C470A415FBDA",variableType:4}
 */
var f_tipoArm = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"44CCCE1E-2D43-4C47-8CDE-A6C7157E8F25",variableType:4}
 */
var f_ramsay = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"E91F852B-2213-4C44-90F0-E490D2053262",variableType:4}
 */
var f_conciencia = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"332689AA-FCD5-4871-99AB-86D96E4517AC",variableType:4}
 */
var f_evolucion = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"79976208-C94F-47F9-B097-011C69EBD7FB",variableType:4}
 */
var f_modifica = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"BBB84445-4F18-489B-BB64-F86DB740B8BA",variableType:4}
 */
var f_estado = 0;

/**
 * @properties={typeid:35,uuid:"5B2D7DCE-D21A-42EF-83C9-D19D791E7D5B",variableType:-4}
 */
var f_cerrarForm = false;

/**
 * @properties={typeid:35,uuid:"9038E776-6822-46B9-A7ED-35E27E322DE9",variableType:-4}
 */
var $isDirty = false;

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"95CD06B6-FD71-46CB-8C5C-11A9E9B0469B"}
 * @AllowToRunInFind
 */
function onShow_inicializarForm(firstShow, event) {
	
	//initFormFirstShow();
	inicializarForm();
	$_histClin = globals.AsiArmTrs_Mod_wHistClin;
	$_fecha = globals.AsiArmTrs_Mod_wFecha;
	$_hora = globals.AsiArmTrs_Mod_wHora;

	// BUSCO-TIENE-ARM
	var sqlArm = "select ArmInvasiva from tbc_arm_dia_noinva" + " where ArmHcli = " + $_histClin + " and ArmFech = " + $_fecha + " and ArmHora = " + $_hora;
	var dsArm = databaseManager.getDataSetByQuery('asistencial', sqlArm, null, -1);
	
	if (dsArm.getMaxRowIndex() > 0) {
		
		$_armInvasiva = dsArm.getValue(1,1);
		if($_armInvasiva == 2){
			
			sqlArm = "select ArmModo from tbc_arm_dia_invaps" + " where ArmHcli = " + $_histClin + " and ArmFech = " + $_fecha + " and ArmHora = " + $_hora;
			dsArm = databaseManager.getDataSetByQuery('asistencial', sqlArm, null, -1);
			if(dsArm.getMaxRowIndex() > 0)
				$_armModo = dsArm.getValue(1,1);//armModo
		}
			
		visibleModifica(true);
		elements.cbo_modifica.requestFocus();
	} else {

		visibleBody(true);
		elements.cbo_armTipo.requestFocus();
	}

	// QUE-RESPIRADOR
	var sqlResp = "select Rsp_CodInt,Rsp_CodSeq from tbc_respirador" + " where Rsp_HistCli = " + $_histClin + " and Rsp_EnUso = 1";
	var dsResp = databaseManager.getDataSetByQuery('asistencial', sqlResp, null, -1);
	if (dsResp.getMaxColumnIndex() > 0) {

		globals.AsiArmTrs_Mod_rspCodInt = dsResp.getValue(1, 1);
		globals.AsiArmTrs_Mod_rspCodSeq = dsResp.getValue(1, 2);
	}

	$isDirty = false;
}

/**
 *
 * @param {Boolean} value
 *
 * @properties={typeid:24,uuid:"5231782C-7432-4154-A670-D2E6872A77B4"}
 */
function visibleBody(value) {

	elements.btn_cancelar.visible = value;
	elements.btn_guardar.visible = value;
	elements.btn_buscarRespirador.visible = value;
	elements.cbo_armTipo.visible = value;
	//elements.cbo_conciencia.visible = value;
	elements.cbo_estado.visible = value;
	elements.cbo_evolucion.visible = value;
	elements.cbo_modoInvasiva.visible = value;
	elements.cbo_modoNoInvasiva.visible = value;
	//elements.cbo_ramsay.visible = value;
	elements.shs_diagnostico.visible = value;
	elements.shs_informe.visible = value;
	elements.tab_arm.visible = value;
	elements.lbl_armTipo.visible = value;
	elements.lbl_estado.visible = value;
	elements.lbl_evolucion.visible = value;
	elements.lbl_respirador.visible = value;
	elements.lbl_modo.visible = value;

	elements.txt_respirador.visible = value;

	elements.shs_evolucion.visible = value;
}

/**
 *
 * @param {Boolean} value
 *
 * @properties={typeid:24,uuid:"92DCC6B5-FFD0-44A1-8341-9DFA990A16F3"}
 */
function visibleModifica(value) {

	elements.lbl_modifica.visible = value;
	elements.cbo_modifica.visible = value;
}

/**
 * @properties={typeid:24,uuid:"45AB8FED-2A18-42A1-9BF1-833E3C4FEDC9"}
 */
function inicializarForm() {

	f_tipoArm = 0;
	f_modoInvasiva = 0;
	f_modoNoInvasiva = 0;
	$_armInvasiva = 0;
	$_armModo = 0;
	$_histClin = 0;
	$_fecha = 0;
	$_hora = 0;
	f_modifica = 0;
	f_evolucion = 0;
	f_estado = 0;
	f_conciencia = 0;
	f_ramsay = 0;
	f_cerrarForm = false;
	/*
	globals.AsiArmTrs_Mod_armFech_invapc = 0;
	globals.AsiArmTrs_Mod_armHcli_invapc = 0;
	globals.AsiArmTrs_Mod_armHora_invapc = 0;
	
	globals.AsiArmTrs_Mod_armFech_invaps = 0;
	globals.AsiArmTrs_Mod_armHcli_invaps = 0;
	globals.AsiArmTrs_Mod_armHora_invaps = 0;
	
	globals.AsiArmTrs_Mod_armFech_invavc = 0;
	globals.AsiArmTrs_Mod_armHcli_invavc = 0;
	globals.AsiArmTrs_Mod_armHora_invavc = 0;
	
	globals.AsiArmTrs_Mod_armFech_noinva = 0;
	globals.AsiArmTrs_Mod_armHcli_noinva = 0;
	globals.AsiArmTrs_Mod_armHora_noinva = 0;
	*/
	globals.AsiArmTrs_Mod_rspCodInt = 0;
	globals.AsiArmTrs_Mod_rspCodSeq = 0;
	globals.AsiArmTrs_Mod_txtFecha = 0;
	globals.AsiArmTrs_Mod_txtGrupo = 0;
	globals.AsiArmTrs_Mod_txtHistClin = 0;
	globals.AsiArmTrs_Mod_txtHora = 0;
	
	elements.tab_arm.tabIndex = 1;
	elements.tab_arm.setTabEnabledAt(1, false);
	elements.tab_arm.setTabEnabledAt(2, false);
	elements.tab_arm.setTabEnabledAt(3, false);
	elements.tab_arm.setTabEnabledAt(4, false);
	//elements.tab_arm.enabled = false;
	elements.cbo_modifica.enabled = true;
	elements.cbo_armTipo.enabled = true;
	elements.cbo_modoInvasiva.enabled = false;
	elements.cbo_modoNoInvasiva.enabled = false;
	elements.cbo_conciencia.visible = false;
	elements.cbo_ramsay.visible = false;
	elements.tab_arm.setTabTextAt(1, 'No Invasiva');
	elements.cbo_conciencia.enabled = true;
	elements.txt_concieX.visible = false;

	forms.AsiArmTrs_Mod_dtl_invasiva_no.f_armFlujo = 0;
	forms.AsiArmTrs_Mod_dtl_invasiva_no.f_armFlujoUnidad = '';
	forms.AsiArmTrs_Mod_dtl_invasiva_no.f_armTipoFlujo = 0;
	forms.AsiArmTrs_Mod_dtl_invasiva_vc.f_relacionI = '1 :';
	forms.AsiArmTrs_Mod_dtl_invasiva_pc.f_relacionI = '1 :';
	forms.AsiArmTrs_Mod_tab_invasiva.elements.cbo_armIot.enabled = true;
	forms.AsiArmTrs_Mod_tab_invasiva.elements.txt_manguito.readOnly = false;

	visibleModifica(false);
	visibleBody(false);
	editableEvolucion(false);
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"E30F0680-7184-428E-9622-BB650A57ECF7"}
 * @AllowToRunInFind
 */
function onAction_btnGuardar(event) {

	var res = globals.DIALOGS.showQuestionDialog('¡Atención!', '¿ Esta seguro que desea guardar ?', 'Si', 'No');
	if (res == 'Si') {

		if ($isDirty) {

			if (isValidDataForm()) {

				if (isValidData()) {
					
					var messageError = '';
					var message = '';
					var resultSave;
					var resultSaveAux = true;
					var result; 
					
					// Guardando ARM
					
					if(f_tipoArm == 1){
						
						completeDataNoInvasiva();
						resultSave = databaseManager.saveData(asiarmtrs_mod_rel_arm_dia_noinva.getRecord(1));
						if(!resultSave)
							messageError = obtenerMessageError(asiarmtrs_mod_rel_arm_dia_noinva);
					}
					
					if(f_tipoArm == 2){
						
						if(f_modoInvasiva == 1){
							
							completeDataInvasiva_vc();
							resultSave = databaseManager.saveData(asiarmtrs_mod_rel_arm_dia_invavc.getRecord(1));
							if(!resultSave)
								messageError = obtenerMessageError(asiarmtrs_mod_rel_arm_dia_invavc);
						}
						
						if(f_modoInvasiva == 2){
							
							completeDataInvasiva_pc();
							resultSave = databaseManager.saveData(asiarmtrs_mod_rel_arm_dia_invapc.getRecord(1));
							if(!resultSave)
								messageError = obtenerMessageError(asiarmtrs_mod_rel_arm_dia_invapc);
						}

						if(f_modoInvasiva == 3){
							
							completeDataInvasiva_ps();
							resultSave = databaseManager.saveData(asiarmtrs_mod_rel_arm_dia_invaps.getRecord(1));
							if(!resultSave)
								messageError = obtenerMessageError(asiarmtrs_mod_rel_arm_dia_invaps);
						}
					}
					
					// Guardando informes
					var itemHistClin = $_histClin;
					var itemFecha = $_fecha;
					var itemHora = $_hora;
					var grupo = 2;
					
					// Comentario
					if (resultSave && f_modifica == 1){
						
						result = guardarTexto(itemHistClin, itemFecha, itemHora, grupo, forms.AsiArmTra_Mod_txt_comentario.f_informe);
						if(!result){
							
							messageError += '\nComentarios: ' + obtenerMessageError(asiarmtrs_mod_rel_asiarmtrs_armtxt);
							resultSaveAux = false;
						}
					}
						
					// Causa Egreso
					if (f_modifica == 1 && f_evolucion == 2 && resultSave){
						
						grupo = 3;
						result = guardarTexto(itemHistClin, itemFecha, itemHora, grupo, forms.AsiArmTra_Mod_txt_causaEgreso.f_informe);
						if(!result){
							
							messageError += '\nCausa de Egreso: ' + obtenerMessageError(asiarmtrs_mod_rel_asiarmtrs_armtxt);
							resultSaveAux = false;
						}
						
						// tratamiento respirador
						if(asiarmtrs_mod_rel_respirador.getSize() > 0){
							
							asiarmtrs_mod_rel_respirador.rsp_enuso = 0;
							asiarmtrs_mod_rel_respirador.rsp_histcli = 0;
						}
					}
						
					// Actualizando Respirador
					if (resultSave && asiarmtrs_mod_rel_respirador.getSize() > 0){
						
						asiarmtrs_mod_rel_respirador.rsp_enuso = 1;
						asiarmtrs_mod_rel_respirador.rsp_histcli = $_histClin;
						
						result = databaseManager.saveData(asiarmtrs_mod_rel_respirador.getRecord(1));
						if(!result){
							
							messageError += '\nRespirador: ' + obtenerMessageError(asiarmtrs_mod_rel_respirador);
							resultSaveAux = false;
						}
						else{
							//liberar si estaba usando otro respirador
							var sqlResp = "select Rsp_CodInt,Rsp_CodSeq from tbc_respirador where Rsp_HistCli = " + $_histClin;
							var dsResp = databaseManager.getDataSetByQuery('asistencial',sqlResp,null,-1);
							
							var liberar = false;
							for(var i= 1;i<=dsResp.getMaxRowIndex(); i++){
								
								liberar = false
								if(asiarmtrs_mod_rel_respirador.rsp_codint != dsResp.getValue(i,1))
									liberar = true;
								else{
									
									if(asiarmtrs_mod_rel_respirador.rsp_codseq != dsResp.getValue(i,2))
										liberar = true;									
								}
									
								if(liberar){
									
									globals.AsiArmTrs_Mod_rspCodIntLib = dsResp.getValue(i,1);
									globals.AsiArmTrs_Mod_rspCodSeqLib = dsResp.getValue(i,2);
									if(asiarmtrs_mod_rel_respirador_liberar.getSize() > 0){
										
										asiarmtrs_mod_rel_respirador_liberar.rsp_enuso = 0;
										asiarmtrs_mod_rel_respirador_liberar.rsp_histcli = 0;
										databaseManager.saveData(asiarmtrs_mod_rel_respirador_liberar.getRecord(1));
									}
								}
							}
							
						}
					}
					
					// CONTROL DE CODOBRA
					var empresa = 1;
					var tipoNom = 1;
					var codNom = 431103;
					
					globals.Call_2142_InicializarVariables();
					globals.Call_2142_empresa = empresa;
					globals.Call_2142_sector = 2;
					globals.Call_2142_tipoNome = tipoNom;
					globals.Call_2142_codiNome = codNom;
					
					globals.AsiArmTrs_Mod_admHistClin = $_histClin;
					if(asiarmtrs_mod_rel_buscar_admision.getSize() > 0){
						globals.Call_2142_obra = asiarmtrs_mod_rel_buscar_admision.adm_obrsoc;
						globals.Call_2142_planX10 = asiarmtrs_mod_rel_buscar_admision.adm_planobr;
					}
					
					globals.Call_2142_ControlCodobra();
					if(globals.Call_2142_ok){
						
						//GRABO-REND
						var admision = 0;
						var cierre = 1;
						var pantalla = globals.Call_2142_pantNome;
						var periodo = $_fecha.toString().substr(0,6);
						
						var sqlRendDet = "select RdHClinica from tbc_rend_det"
									+ " where RdEmpresa = " + empresa
									+ " and RdAdmision = " + admision
									+ " and RdHClinica = " + $_histClin
									+ " and RdPeriodo = " + periodo
									+ " and RdCierre = " + cierre
									+ " and RdPantalla = " + pantalla
									+ " and RdFecha = " + $_fecha
									+ " and RdTipo = " + tipoNom
									+ " and RdCodNom = " + codNom
									+ " and RdPaso <> 1";
						var dsRendDet = databaseManager.getDataSetByQuery("asistencial",sqlRendDet,null,-1);
						
						if(dsRendDet.getMaxRowIndex() == 0){
							
							var sqlHabita = "select h.Hab_TipHabi from tbc_ADMISION a"
										  + " inner join Maestros.tbc_habita h on h.Hab_NroHabi = a.Adm_Habita"
										  + " where Adm_HistClin = " + $_histClin;
							var dsHabita = databaseManager.getDataSetByQuery('asistencial',sqlHabita,null,-1);
							var tipoHabi = (dsHabita.getMaxRowIndex() > 0 ? dsHabita.getValue(1,1) : 2);
							
							asiarmtrs_mod_rel_rend_det.newRecord();
							inicializarRelacionRendDet();
							
							asiarmtrs_mod_rel_rend_det.rdempresa = empresa;
							asiarmtrs_mod_rel_rend_det.rdadmision = admision;
							asiarmtrs_mod_rel_rend_det.rdadmision1 = admision;
							asiarmtrs_mod_rel_rend_det.rdhclinica = $_histClin;
							asiarmtrs_mod_rel_rend_det.rdperiodo = periodo;
							asiarmtrs_mod_rel_rend_det.rdcierre = cierre;
							asiarmtrs_mod_rel_rend_det.rdpantalla = pantalla;
							asiarmtrs_mod_rel_rend_det.rdfecha = $_fecha;
							asiarmtrs_mod_rel_rend_det.rdhora = $_hora;
							asiarmtrs_mod_rel_rend_det.rdtipo = tipoNom;
							asiarmtrs_mod_rel_rend_det.rdcodnom = codNom;
							asiarmtrs_mod_rel_rend_det.rdmodalidad = tipoHabi;
							asiarmtrs_mod_rel_rend_det.rdfechahasta = $_fecha;
							asiarmtrs_mod_rel_rend_det.rdduracion = 1;
							asiarmtrs_mod_rel_rend_det.rddias = 1;
							asiarmtrs_mod_rel_rend_det.rdcantmod = 1;
							
							result = databaseManager.saveData(asiarmtrs_mod_rel_rend_det.getRecord(1));
							if(!result){
								
								messageError += '\nRendicion detalle: ' + obtenerMessageError(asiarmtrs_mod_rel_rend_det);
								resultSaveAux = false;
							}
							
							//VER-REND-CAB
							globals.AsiArmTrs_Mod_rcAdmision = admision;
							globals.AsiArmTrs_Mod_rcCierre = cierre;
							globals.AsiArmTrs_Mod_rcEmpresa = empresa;
							globals.AsiArmTrs_Mod_rcHClinica = $_histClin;
							globals.AsiArmTrs_Mod_rcPeriodo = periodo;
							
							if(asiarmtrs_mod_rel_rend_cab.getSize() == 0){
								
								globals.AsiArmTrs_Mod_ploObra = asiarmtrs_mod_rel_buscar_admision.adm_obrsoc;
								globals.AsiArmTrs_Mod_ploPlanx10 = asiarmtrs_mod_rel_buscar_admision.adm_planobr
								var ploPlanX = ' ';
								if(asiarmtrs_mod_rel_buscar_plan_obra.getSize() > 0)
									ploPlanX = asiarmtrs_mod_rel_buscar_plan_obra.plo_planx;
								
								asiarmtrs_mod_rel_rend_cab.newRecord();
								inicializarRelacionRendCab();
								
								asiarmtrs_mod_rel_rend_cab.rcempresa = empresa;
								asiarmtrs_mod_rel_rend_cab.rcempresa1 = empresa;
								asiarmtrs_mod_rel_rend_cab.rcempresa2 = empresa;
								asiarmtrs_mod_rel_rend_cab.rcempresa3 = empresa;
								asiarmtrs_mod_rel_rend_cab.rcempresa4 = empresa;
								asiarmtrs_mod_rel_rend_cab.rcempresa5 = empresa;
								asiarmtrs_mod_rel_rend_cab.rcperiodo = periodo;
								asiarmtrs_mod_rel_rend_cab.rcperiodo2 = periodo;
								asiarmtrs_mod_rel_rend_cab.rcperiodo3 = periodo;
								asiarmtrs_mod_rel_rend_cab.rcperiodo6 = periodo;
								asiarmtrs_mod_rel_rend_cab.rccierre = cierre;
								asiarmtrs_mod_rel_rend_cab.rccierre2 = cierre;
								asiarmtrs_mod_rel_rend_cab.rccierre3 = cierre;
								asiarmtrs_mod_rel_rend_cab.rchclinica = $_histClin;
								asiarmtrs_mod_rel_rend_cab.rchclinica2 = $_histClin;
								asiarmtrs_mod_rel_rend_cab.rchclinica3 = $_histClin;
								asiarmtrs_mod_rel_rend_cab.rchclinica5 = $_histClin;
								asiarmtrs_mod_rel_rend_cab.rcadmision = admision;
								asiarmtrs_mod_rel_rend_cab.rcadmision1 = admision;
								asiarmtrs_mod_rel_rend_cab.rcadmision2 = admision;
								asiarmtrs_mod_rel_rend_cab.rcadmision3 = admision;
								asiarmtrs_mod_rel_rend_cab.rcadmision4 = admision;
								asiarmtrs_mod_rel_rend_cab.rcobra = asiarmtrs_mod_rel_buscar_admision.adm_obrsoc;
								asiarmtrs_mod_rel_rend_cab.rcobra5 = asiarmtrs_mod_rel_buscar_admision.adm_obrsoc;
								asiarmtrs_mod_rel_rend_cab.rcestado = 0
								asiarmtrs_mod_rel_rend_cab.rcestado5 = 0
								asiarmtrs_mod_rel_rend_cab.rcpaciente = utils.stringTrim(asiarmtrs_mod_rel_buscar_admision.adm_apelnom);
								asiarmtrs_mod_rel_rend_cab.rcfactura = 0;
								asiarmtrs_mod_rel_rend_cab.rctipograb = 1;
								asiarmtrs_mod_rel_rend_cab.rcfecha = $_fecha;
								asiarmtrs_mod_rel_rend_cab.rchora = $_hora;
								asiarmtrs_mod_rel_rend_cab.rcimpobra = 0;
								asiarmtrs_mod_rel_rend_cab.rcimppaciente1 = 0;
								asiarmtrs_mod_rel_rend_cab.rcimppaciente2 = 0;
								asiarmtrs_mod_rel_rend_cab.rcimpfiller = 0;
								asiarmtrs_mod_rel_rend_cab.rcplan = ploPlanX;
								asiarmtrs_mod_rel_rend_cab.rcafiliado = asiarmtrs_mod_rel_buscar_admision.adm_nrobenef;
								asiarmtrs_mod_rel_rend_cab.rcfechaemision = $_fecha;
								asiarmtrs_mod_rel_rend_cab.rchoraemision = $_hora;
								asiarmtrs_mod_rel_rend_cab.rcatencion = 1;
								asiarmtrs_mod_rel_rend_cab.rciva = asiarmtrs_mod_rel_buscar_admision.adm_iva;
								
								//OBT-SECUENCIA
								asiarmtrs_mod_rel_rend_cab.rcsecuencia = obtenerNumerador("desal","tbl_parametros","contador_entero","paramid",27);
								if(asiarmtrs_mod_rel_rend_cab.rcsecuencia > 0){
									
									result = databaseManager.saveData(asiarmtrs_mod_rel_rend_cab.getRecord(1));
									if(!result){
										
										messageError += '\nRendicion cabecera: ' + obtenerMessageError(asiarmtrs_mod_rel_rend_cab);
										resultSaveAux = false;
									}
								}
								else{
									
									messageError += '\nNo ha sido posible Guardar Rendicion cabecera. Error al obtener obtener numerador de secuencia ' + asiarmtrs_mod_rel_rend_cab.rcsecuencia;
									resultSaveAux = false;
								}
							}
						}
					}
					
					// Evaluando resultado general
					if (resultSave) {
						
						globals.AsiArmTrs_Mod_wGraboARM = true;
						imprimir($_histClin, $_fecha, $_hora,globals.AsiArmTrs_Mod_wTipLega,globals.AsiArmTrs_Mod_wNumLega);
						
						if(resultSaveAux)
							globals.DIALOGS.showInfoDialog("Resultado", "La asistencia respitatoria mecanica se guardo correctamente.", "Aceptar");
						else{
							
							message = 'Algunos items no se guardaron. Intente de nuevo. Si el problema persiste, contacte al administrador del sistema.' + messageError;
							globals.DIALOGS.showWarningDialog("Resultado",message, "Aceptar");
						}
						
						$isDirty = false;
						cerrarForm();
					} 
					else{
						
						message = 'No ha sido posible guardar la asistencia respitatoria mecanica. Intente de nuevo. Si el problema persiste, contacte al administrador del sistema.' + messageError;	
						globals.DIALOGS.showErrorDialog('Error de grabacion',message,'Aceptar');
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
 * @properties={typeid:24,uuid:"7BE40D81-13B9-4274-8984-F62CFDCEB01C"}
 */
function completeDataNoInvasiva(){

	if (f_modifica == 0)
		asiarmtrs_mod_rel_arm_dia_noinva.armhcli = $_histClin;
	
	asiarmtrs_mod_rel_arm_dia_noinva.arminvasiva = f_tipoArm;
	asiarmtrs_mod_rel_arm_dia_noinva.armcontinua = f_modoNoInvasiva;
	asiarmtrs_mod_rel_arm_dia_noinva.armfech = $_fecha;
	asiarmtrs_mod_rel_arm_dia_noinva.armhora = $_hora;
	asiarmtrs_mod_rel_arm_dia_noinva.armfecing = $_fecha;
	asiarmtrs_mod_rel_arm_dia_noinva.armhoring = $_hora;
	asiarmtrs_mod_rel_arm_dia_noinva.armfecegr = 0;
	asiarmtrs_mod_rel_arm_dia_noinva.armhoregr = 0;
	asiarmtrs_mod_rel_arm_dia_noinva.armtiplega = globals.AsiArmTrs_Mod_wTipLega;
	asiarmtrs_mod_rel_arm_dia_noinva.armnumlega = globals.AsiArmTrs_Mod_wNumLega;
	asiarmtrs_mod_rel_arm_dia_noinva.armconcie = f_conciencia;
	asiarmtrs_mod_rel_arm_dia_noinva.armramsay = f_ramsay;
	asiarmtrs_mod_rel_arm_dia_noinva.armconciex = ' ';
	
	if(f_conciencia == 7)
		asiarmtrs_mod_rel_arm_dia_noinva.armconciex = f_concieX;
	
	if (forms.AsiArmTrs_Mod_dtl_invasiva_no.f_armTipoFlujo == 1){
		
		asiarmtrs_mod_rel_arm_dia_noinva.armflujoo2 = forms.AsiArmTrs_Mod_dtl_invasiva_no.f_armFlujo;
		asiarmtrs_mod_rel_arm_dia_noinva.armfio2 = 0;
	}
		
	if (forms.AsiArmTrs_Mod_dtl_invasiva_no.f_armTipoFlujo == 2){
		
		asiarmtrs_mod_rel_arm_dia_noinva.armfio2 = forms.AsiArmTrs_Mod_dtl_invasiva_no.f_armFlujo;
		asiarmtrs_mod_rel_arm_dia_noinva.armflujoo2 = 0;
	}
	
	if (f_modifica == 1 && f_evolucion == 2) {

		asiarmtrs_mod_rel_arm_dia_noinva.armfecegr = $_fecha;
		asiarmtrs_mod_rel_arm_dia_noinva.armhoregr = $_hora;
	}
	
	if(asiarmtrs_mod_rel_respirador.getSize() > 0){
		
		asiarmtrs_mod_rel_arm_dia_noinva.armcodint = asiarmtrs_mod_rel_respirador.rsp_codint;
		asiarmtrs_mod_rel_arm_dia_noinva.armcodseq = asiarmtrs_mod_rel_respirador.rsp_codseq;
	}
	else{
	
		asiarmtrs_mod_rel_arm_dia_noinva.armcodint = ' ';
		asiarmtrs_mod_rel_arm_dia_noinva.armcodseq = 0;
	}
}

/**
 * @properties={typeid:24,uuid:"8901E451-7954-4E9E-83A0-F37B1B3A9ED2"}
 */
function completeDataInvasiva_vc(){
	
	if(f_modifica == 0)
		asiarmtrs_mod_rel_arm_dia_invavc.armhcli = $_histClin;
	
	asiarmtrs_mod_rel_arm_dia_invavc.arminvasiva = f_tipoArm;
	asiarmtrs_mod_rel_arm_dia_invavc.armmodo = f_modoInvasiva;
	asiarmtrs_mod_rel_arm_dia_invavc.armiot = forms.AsiArmTrs_Mod_tab_invasiva.f_iot;
	asiarmtrs_mod_rel_arm_dia_invavc.armpresmang = forms.AsiArmTrs_Mod_tab_invasiva.f_manguito;
	asiarmtrs_mod_rel_arm_dia_invavc.armfech = $_fecha;
	asiarmtrs_mod_rel_arm_dia_invavc.armhora = $_hora;
	asiarmtrs_mod_rel_arm_dia_invavc.armfecing = $_fecha;
	asiarmtrs_mod_rel_arm_dia_invavc.armhoring = $_hora;
	asiarmtrs_mod_rel_arm_dia_invavc.armfecegr = 0;
	asiarmtrs_mod_rel_arm_dia_invavc.armhoregr = 0;
	asiarmtrs_mod_rel_arm_dia_invavc.armtiplega = globals.AsiArmTrs_Mod_wTipLega;
	asiarmtrs_mod_rel_arm_dia_invavc.armnumlega = globals.AsiArmTrs_Mod_wNumLega;
	asiarmtrs_mod_rel_arm_dia_invavc.armconcie = f_conciencia;
	asiarmtrs_mod_rel_arm_dia_invavc.armramsay = f_ramsay;
	asiarmtrs_mod_rel_arm_dia_invavc.armconciex = ' ';
	
	if(f_conciencia == 7)
		asiarmtrs_mod_rel_arm_dia_invavc.armconciex = f_concieX;
	
	if (f_modifica == 1 && f_evolucion == 2) {

		asiarmtrs_mod_rel_arm_dia_invavc.armfecegr = $_fecha;
		asiarmtrs_mod_rel_arm_dia_invavc.armhoregr = $_hora;
	}
	
	if(asiarmtrs_mod_rel_respirador.getSize() > 0){
		
		asiarmtrs_mod_rel_arm_dia_invavc.armcodint = asiarmtrs_mod_rel_respirador.rsp_codint;
		asiarmtrs_mod_rel_arm_dia_invavc.armcodseq = asiarmtrs_mod_rel_respirador.rsp_codseq;
	}
	else{
	
		asiarmtrs_mod_rel_arm_dia_invavc.armcodint = ' ';
		asiarmtrs_mod_rel_arm_dia_invavc.armcodseq = 0;
	}
}

/**
 * @properties={typeid:24,uuid:"D668B4B0-F74F-4526-987D-CE73C521C82B"}
 */
function completeDataInvasiva_pc(){
	
	if(f_modifica == 0)
		asiarmtrs_mod_rel_arm_dia_invapc.armhcli = $_histClin;
	
	asiarmtrs_mod_rel_arm_dia_invapc.arminvasiva = f_tipoArm;
	asiarmtrs_mod_rel_arm_dia_invapc.armmodo = f_modoInvasiva;
	asiarmtrs_mod_rel_arm_dia_invapc.armiot = forms.AsiArmTrs_Mod_tab_invasiva.f_iot;
	asiarmtrs_mod_rel_arm_dia_invapc.armpresmang = forms.AsiArmTrs_Mod_tab_invasiva.f_manguito;
	asiarmtrs_mod_rel_arm_dia_invapc.armfech = $_fecha;
	asiarmtrs_mod_rel_arm_dia_invapc.armhora = $_hora;
	asiarmtrs_mod_rel_arm_dia_invapc.armfecing = $_fecha;
	asiarmtrs_mod_rel_arm_dia_invapc.armhoring = $_hora;
	asiarmtrs_mod_rel_arm_dia_invapc.armfecegr = 0;
	asiarmtrs_mod_rel_arm_dia_invapc.armhoregr = 0;
	asiarmtrs_mod_rel_arm_dia_invapc.armtiplega = globals.AsiArmTrs_Mod_wTipLega;
	asiarmtrs_mod_rel_arm_dia_invapc.armnumlega = globals.AsiArmTrs_Mod_wNumLega;
	asiarmtrs_mod_rel_arm_dia_invapc.armconcie = f_conciencia;
	asiarmtrs_mod_rel_arm_dia_invapc.armramsay = f_ramsay;
	asiarmtrs_mod_rel_arm_dia_invapc.armconciex = ' ';
	
	if(f_conciencia == 7)
		asiarmtrs_mod_rel_arm_dia_invapc.armconciex = f_concieX;
	
	if (f_modifica == 1 && f_evolucion == 2) {

		asiarmtrs_mod_rel_arm_dia_invapc.armfecegr = $_fecha;
		asiarmtrs_mod_rel_arm_dia_invapc.armhoregr = $_hora;
	}
	
	if(asiarmtrs_mod_rel_respirador.getSize() > 0){
		
		asiarmtrs_mod_rel_arm_dia_invapc.armcodint = asiarmtrs_mod_rel_respirador.rsp_codint;
		asiarmtrs_mod_rel_arm_dia_invapc.armcodseq = asiarmtrs_mod_rel_respirador.rsp_codseq;
	}
	else{
	
		asiarmtrs_mod_rel_arm_dia_invapc.armcodint = ' ';
		asiarmtrs_mod_rel_arm_dia_invapc.armcodseq = 0;
	}
}

/**
 * @properties={typeid:24,uuid:"B65491AA-349D-411E-9921-84F72269DB69"}
 */
function completeDataInvasiva_ps(){
	
	if(f_modifica == 0)
		asiarmtrs_mod_rel_arm_dia_invaps.armhcli = $_histClin;
	
	asiarmtrs_mod_rel_arm_dia_invaps.arminvasiva = f_tipoArm;
	asiarmtrs_mod_rel_arm_dia_invaps.armmodo = f_modoInvasiva;
	asiarmtrs_mod_rel_arm_dia_invaps.armiot = forms.AsiArmTrs_Mod_tab_invasiva.f_iot;
	asiarmtrs_mod_rel_arm_dia_invaps.armpresmang = forms.AsiArmTrs_Mod_tab_invasiva.f_manguito;
	asiarmtrs_mod_rel_arm_dia_invaps.armfech = $_fecha;
	asiarmtrs_mod_rel_arm_dia_invaps.armhora = $_hora;
	asiarmtrs_mod_rel_arm_dia_invaps.armfecing = $_fecha;
	asiarmtrs_mod_rel_arm_dia_invaps.armhoring = $_hora;
	asiarmtrs_mod_rel_arm_dia_invaps.armfecegr = 0;
	asiarmtrs_mod_rel_arm_dia_invaps.armhoregr = 0;
	asiarmtrs_mod_rel_arm_dia_invaps.armtiplega = globals.AsiArmTrs_Mod_wTipLega;
	asiarmtrs_mod_rel_arm_dia_invaps.armnumlega = globals.AsiArmTrs_Mod_wNumLega;
	asiarmtrs_mod_rel_arm_dia_invaps.armconcie = f_conciencia;
	asiarmtrs_mod_rel_arm_dia_invaps.armramsay = f_ramsay;
	asiarmtrs_mod_rel_arm_dia_invaps.armconciex = ' ';
	
	if(f_conciencia == 7)
		asiarmtrs_mod_rel_arm_dia_invaps.armconciex = f_concieX;
	
	if (f_modifica == 1 && f_evolucion == 2) {

		asiarmtrs_mod_rel_arm_dia_invaps.armfecegr = $_fecha;
		asiarmtrs_mod_rel_arm_dia_invaps.armhoregr = $_hora;
	}
	
	if(asiarmtrs_mod_rel_respirador.getSize() > 0){
		
		asiarmtrs_mod_rel_arm_dia_invaps.armcodint = asiarmtrs_mod_rel_respirador.rsp_codint;
		asiarmtrs_mod_rel_arm_dia_invaps.armcodseq = asiarmtrs_mod_rel_respirador.rsp_codseq;
	}
	else{
	
		asiarmtrs_mod_rel_arm_dia_invaps.armcodint = ' ';
		asiarmtrs_mod_rel_arm_dia_invaps.armcodseq = 0;
	}
}

/**
 * 
 * @param {JSFoundSet} foundsetData
 *
 * @return {String}
 * @properties={typeid:24,uuid:"2F1ABEBF-4111-4989-ABB6-9AF008FC26B1"}
 */
function obtenerMessageError(foundsetData){
	
	var errorMessage = '';
	var array = databaseManager.getFailedRecords(foundsetData);
	
	for (var i = 0; i < array.length; i++) {
		
		var record = array[i];
		var jstable = databaseManager.getTable(record);
		var tableSQLName = jstable.getSQLName();
		
		errorMessage += '\nTabla: ' + jstable.getServerName() + '.' + tableSQLName + ' [' + record.exception + ']';
		if (record.exception.getErrorCode() == ServoyException.RECORD_VALIDATION_FAILED) {
			// exception thrown in pre-insert/update/delete event method
			errorMessage += '\nError de validacion [' + record.exception.getMessage() + ']'
		}
	}

	 return errorMessage;
}

/**
 *
 * @param {Number} histClin
 * @param {Number} fechaCarga
 * @param {Number} horaCarga
 * @param {Number} grupoArm
 * @param {String} textoArm
 *
 * @return {Boolean}
 * @properties={typeid:24,uuid:"C510DCC2-40D6-4114-8C44-C72A31FB61AB"}
 */
function guardarTexto(histClin, fechaCarga, horaCarga, grupoArm, textoArm) {

	globals.AsiArmTrs_Mod_txtFecha = fechaCarga;
	globals.AsiArmTrs_Mod_txtGrupo = grupoArm;
	globals.AsiArmTrs_Mod_txtHistClin = histClin;
	globals.AsiArmTrs_Mod_txtHora = horaCarga;

	if (asiarmtrs_mod_rel_asiarmtrs_armtxt.getSize() == 0) {

		asiarmtrs_mod_rel_asiarmtrs_armtxt.newRecord();
		asiarmtrs_mod_rel_asiarmtrs_armtxt.histclinica = histClin;
		asiarmtrs_mod_rel_asiarmtrs_armtxt.fecha = fechaCarga;
		asiarmtrs_mod_rel_asiarmtrs_armtxt.hora = horaCarga;
		asiarmtrs_mod_rel_asiarmtrs_armtxt.grupo = grupoArm;
	}

	asiarmtrs_mod_rel_asiarmtrs_armtxt.linea = utils.stringTrim(textoArm);
	
	return databaseManager.saveData(asiarmtrs_mod_rel_asiarmtrs_armtxt.getRecord(1));
}

/**
 * @properties={typeid:24,uuid:"FFEB11C2-73A4-4E8F-B8F1-D624D9C225D9"}
 */
function isValidDataForm() {

	var isValid = true;
	var messageError = "No ha sido posible guardar. Corrija los siguientes errores y vuelva a intentar."
		//var borderError = 'LineBorder,1,#ff0000';
	//setDefaultBorderElements();

	if ($_histClin < 1) {
		//elements.txt_paciente.border = borderError;
		messageError += "\nDebe ingresar paciente.";
		isValid = false;
	}
	
	if (f_tipoArm < 1) {
		//elements.txt_paciente.border = borderError;
		messageError += "\nDebe seleccionar A.R.M. Tipo";
		isValid = false;
	} else {

		var list;
		//1:No invasiva
		if (f_tipoArm == 1) {

			if (f_modoNoInvasiva < 1) {
				//elements.txt_paciente.border = borderError;
				messageError += "\nDebe seleccionar Modo";
				isValid = false;
			} else {

				// campos comunes a continua e intermitente
				if (asiarmtrs_mod_rel_arm_dia_noinva.armipap == null) {
					//elements.txt_paciente.border = borderError;
					messageError += "\nDebe ingresar IPAP.";
					isValid = false;
				}

				if (asiarmtrs_mod_rel_arm_dia_noinva.armepap == null) {
					//elements.txt_paciente.border = borderError;
					messageError += "\nDebe ingresar EPAP.";
					isValid = false;
				}

				if (forms.AsiArmTrs_Mod_dtl_invasiva_no.f_armTipoFlujo < 1) {
					//elements.txt_paciente.border = borderError;
					messageError += "\nDebe Seleccionar FLUJOO2/FIO2.";
					isValid = false;
				}

				if (forms.AsiArmTrs_Mod_dtl_invasiva_no.f_armFlujo == null) {
					//elements.txt_paciente.border = borderError;
					messageError += "\nDebe ingresar FIO2";
					isValid = false;
				}
				else{
					
					list = forms.AsiArmTrs_Mod_dtl_invasiva_no.f_armFlujo.toString().split('.');
					if (list[0].length > 3) {
						
						messageError += "\nFIO2 no puede ser mayor a 3 digitos en la parte entera.";
						isValid = false;
					}
				}
				
				if (asiarmtrs_mod_rel_arm_dia_noinva.armvtaprox == null) {
					//elements.txt_paciente.border = borderError;
					messageError += "\nDebe ingresar VT Aprox.";
					isValid = false;
				}

				if (asiarmtrs_mod_rel_arm_dia_noinva.armfr == null) {
					//elements.txt_paciente.border = borderError;
					messageError += "\nDebe ingresar Frec. Respirat.";
					isValid = false;
				}

				if (asiarmtrs_mod_rel_arm_dia_noinva.armrampa == null) {
					//elements.txt_paciente.border = borderError;
					messageError += "\nDebe ingresar Rampa.";
					isValid = false;
				}
				else{
					
					list = asiarmtrs_mod_rel_arm_dia_noinva.armrampa.toString().split('.');
					if (list[0].length > 3) {
						
						messageError += "\nRampa no puede ser mayor a 3 digitos en la parte entera.";
						isValid = false;
					}
				}

				if (asiarmtrs_mod_rel_arm_dia_noinva.armsato2 == null) {
					//elements.txt_paciente.border = borderError;
					messageError += "\nDebe ingresar Saturacion de O2.";
					isValid = false;
				}
				else{
					
					list = asiarmtrs_mod_rel_arm_dia_noinva.armsato2.toString().split('.');
					if (list[0].length > 3) {
						
						messageError += "\nSaturacion de O2 no puede ser mayor a 3 digitos en la parte entera.";
						isValid = false;
					}
				}
			}
		}

		//2: invasiva
		if (f_tipoArm == 2) {

			if (forms.AsiArmTrs_Mod_tab_invasiva.f_iot < 1) {
				//elements.txt_paciente.border = borderError;
				messageError += "\nDebe seleccionar IOT";
				isValid = false;
			}

			if (forms.AsiArmTrs_Mod_tab_invasiva.f_manguito == null) {
				//elements.txt_paciente.border = borderError;
				messageError += "\nDebe ingresar Presión Manguito.";
				isValid = false;
			}

			if (f_modoInvasiva < 1) {
				//elements.txt_paciente.border = borderError;
				messageError += "\nDebe seleccionar Modo";
				isValid = false;
			} else {

				//1:AC/VC
				if (f_modoInvasiva == 1) {

					if (asiarmtrs_mod_rel_arm_dia_invavc.arm1vt == null) {
						//elements.txt_paciente.border = borderError;
						messageError += "\nDebe ingresar VT.";
						isValid = false;
					}

					if (asiarmtrs_mod_rel_arm_dia_invavc.arm1fr == null) {
						//elements.txt_paciente.border = borderError;
						messageError += "\nDebe ingresar Frec. Respirat.";
						isValid = false;
					}

					if (asiarmtrs_mod_rel_arm_dia_invavc.arm1peep == null) {
						//elements.txt_paciente.border = borderError;
						messageError += "\nDebe ingresar PEEP.";
						isValid = false;
					}

					if (asiarmtrs_mod_rel_arm_dia_invavc.arm1fio2 == null) {
						//elements.txt_paciente.border = borderError;
						messageError += "\nDebe ingresar FIO2.";
						isValid = false;
					}
					else{
						
						list = asiarmtrs_mod_rel_arm_dia_invavc.arm1fio2.toString().split('.');
						if (list[0].length > 3) {
							
							messageError += "\nFIO2 no puede ser mayor a 3 digitos en la parte entera.";
							isValid = false;
						}
					}

					if (asiarmtrs_mod_rel_arm_dia_invavc.arm1sato2 == null) {
						//elements.txt_paciente.border = borderError;
						messageError += "\nDebe ingresar Saturacion de O2.";
						isValid = false;
					}
					else{
						
						list = asiarmtrs_mod_rel_arm_dia_invavc.arm1sato2.toString().split('.');
						if (list[0].length > 3) {
							
							messageError += "\nSaturación de O2 no puede ser mayor a 3 digitos en la parte entera.";
							isValid = false;
						}
					}

					if (asiarmtrs_mod_rel_arm_dia_invavc.arm1pafi == null) {
						//elements.txt_paciente.border = borderError;
						messageError += "\nDebe ingresar PAFI.";
						isValid = false;
					}

					if (asiarmtrs_mod_rel_arm_dia_invavc.arm1cest == null) {
						//elements.txt_paciente.border = borderError;
						messageError += "\nDebe ingresar CEST.";
						isValid = false;
					}

					if (asiarmtrs_mod_rel_arm_dia_invavc.arm1ppico == null) {
						//elements.txt_paciente.border = borderError;
						messageError += "\nDebe ingresar PPico.";
						isValid = false;
					}

					if (asiarmtrs_mod_rel_arm_dia_invavc.arm1pplateau == null) {
						//elements.txt_paciente.border = borderError;
						messageError += "\nDebe ingresar PPlateau.";
						isValid = false;
					}

					if (asiarmtrs_mod_rel_arm_dia_invavc.arm1sensib == null) {
						//elements.txt_paciente.border = borderError;
						messageError += "\nDebe ingresar Sensibilidad.";
						isValid = false;
					}

					if (asiarmtrs_mod_rel_arm_dia_invavc.arm1pausainsp == null) {
						//elements.txt_paciente.border = borderError;
						messageError += "\nDebe ingresar Pausa Inspiratoria.";
						isValid = false;
					}
					else{
						
						list = asiarmtrs_mod_rel_arm_dia_invavc.arm1pausainsp.toString().split('.');
						if (list[0].length > 3) {
							
							messageError += "\nPausa Inspiratoria no puede ser mayor a 3 digitos en la parte entera.";
							isValid = false;
						}
					}

					if (asiarmtrs_mod_rel_arm_dia_invavc.arm1relie == null) {
						//elements.txt_paciente.border = borderError;
						messageError += "\nDebe ingresar Relacion I:E.";
						isValid = false;
					}
					else{
						
						list = asiarmtrs_mod_rel_arm_dia_invavc.arm1relie.toString().split('.');
						if (list[0].length > 1) {
							
							messageError += "\nRelación I:E no puede ser mayor a 1 digito en la parte entera.";
							isValid = false;
						}
					}
				}

				//2:AC/PC
				if (f_modoInvasiva == 2) {

					if (asiarmtrs_mod_rel_arm_dia_invapc.arm2pins == null) {
						//elements.txt_paciente.border = borderError;
						messageError += "\nDebe ingresar PINS.";
						isValid = false;
					}

					if (asiarmtrs_mod_rel_arm_dia_invapc.arm2tins == null) {
						//elements.txt_paciente.border = borderError;
						messageError += "\nDebe ingresar TINS.";
						isValid = false;
					}
					else{
						
						list = asiarmtrs_mod_rel_arm_dia_invapc.arm2tins.toString().split('.');
						if (list[0].length > 3) {
							
							messageError += "\nTINS no puede ser mayor a 3 digitos en la parte entera.";
							isValid = false;
						}
					}

					if (asiarmtrs_mod_rel_arm_dia_invapc.arm2fr == null) {
						//elements.txt_paciente.border = borderError;
						messageError += "\nDebe ingresar Frec. Respirat.";
						isValid = false;
					}

					if (asiarmtrs_mod_rel_arm_dia_invapc.arm2vtaprox == null) {
						//elements.txt_paciente.border = borderError;
						messageError += "\nDebe ingresar VT Aprox.";
						isValid = false;
					}

					if (asiarmtrs_mod_rel_arm_dia_invapc.arm2fio2 == null) {
						//elements.txt_paciente.border = borderError;
						messageError += "\nDebe ingresar FIO2.";
						isValid = false;
					}
					else{
						
						list = asiarmtrs_mod_rel_arm_dia_invapc.arm2fio2.toString().split('.');
						if (list[0].length > 3) {
							
							messageError += "\nFIO2 no puede ser mayor a 3 digitos en la parte entera.";
							isValid = false;
						}
					}

					if (asiarmtrs_mod_rel_arm_dia_invapc.arm2sato2 == null) {
						//elements.txt_paciente.border = borderError;
						messageError += "\nDebe ingresar Saturacion de O2.";
						isValid = false;
					}
					else{
						
						list = asiarmtrs_mod_rel_arm_dia_invapc.arm2sato2.toString().split('.');
						if (list[0].length > 3) {
							
							messageError += "\nSaturacion de O2 no puede ser mayor a 3 digitos en la parte entera.";
							isValid = false;
						}
					}

					if (asiarmtrs_mod_rel_arm_dia_invapc.arm2pafio2 == null) {
						//elements.txt_paciente.border = borderError;
						messageError += "\nDebe ingresar PAFI.";
						isValid = false;
					}

					if (asiarmtrs_mod_rel_arm_dia_invapc.arm2cest == null) {
						//elements.txt_paciente.border = borderError;
						messageError += "\nDebe ingresar CEST.";
						isValid = false;
					}

					if (asiarmtrs_mod_rel_arm_dia_invapc.arm2relie == null) {
						//elements.txt_paciente.border = borderError;
						messageError += "\nDebe ingresar Relacion I:E.";
						isValid = false;
					}
					else{
						
						list = asiarmtrs_mod_rel_arm_dia_invapc.arm2relie.toString().split('.');
						if (list[0].length > 1) {
							
							messageError += "\nRelacion I:E no puede ser mayor a 1 digito en la parte entera.";
							isValid = false;
						}
					}
				}

				//3:AC/PS
				if (f_modoInvasiva == 3) {

					if (asiarmtrs_mod_rel_arm_dia_invaps.arm3cpap == null) {
						//elements.txt_paciente.border = borderError;
						messageError += "\nDebe ingresar CPAP.";
						isValid = false;
					}

					if (asiarmtrs_mod_rel_arm_dia_invaps.arm3ps == null) {
						//elements.txt_paciente.border = borderError;
						messageError += "\nDebe ingresar PS.";
						isValid = false;
					}

					if (asiarmtrs_mod_rel_arm_dia_invaps.arm3fio2 == null) {
						//elements.txt_paciente.border = borderError;
						messageError += "\nDebe ingresar FIO2.";
						isValid = false;
					}
					else{
						
						list = asiarmtrs_mod_rel_arm_dia_invaps.arm3fio2.toString().split('.');
						if (list[0].length > 3) {
							
							messageError += "\nFIO2 no puede ser mayor a 3 digitos en la parte entera.";
							isValid = false;
						}
					}

					if (asiarmtrs_mod_rel_arm_dia_invaps.arm3fraprox == null) {
						//elements.txt_paciente.border = borderError;
						messageError += "\nDebe ingresar Fr. Resp. Aprox.";
						isValid = false;
					}

					if (asiarmtrs_mod_rel_arm_dia_invaps.arm3vtaprox == null) {
						//elements.txt_paciente.border = borderError;
						messageError += "\nDebe ingresar VT Aprox.";
						isValid = false;
					}

					if (asiarmtrs_mod_rel_arm_dia_invaps.arm3pafio2 == null) {
						//elements.txt_paciente.border = borderError;
						messageError += "\nDebe ingresar PAFI O2.";
						isValid = false;
					}
				}
			}
		}

	}

	if (f_modifica == 1) {

		if (f_evolucion < 1) {
			//elements.txt_paciente.border = borderError;
			messageError += "\nDebe seleccionar evolución.";
			isValid = false;
		}

		if (f_estado < 1) {
			//elements.txt_paciente.border = borderError;
			messageError += "\nDebe seleccionar estado.";
			isValid = false;
		} else {

			//1:Estado de conciencia
			if (f_estado == 1) {

				if (f_conciencia < 1) {
					//elements.txt_paciente.border = borderError;
					messageError += "\nDebe seleccionar Estado de conciencia.";
					isValid = false;
				}
			}

			//1:Ramsay
			if (f_estado == 2) {

				if (f_ramsay < 1) {
					//elements.txt_paciente.border = borderError;
					messageError += "\nDebe seleccionar Score de Ramsay.";
					isValid = false;
				}

			}
		}
	}
	/*
	if (asiarmtrs_mod_rel_respirador.getSize() == 0) {
		//elements.txt_paciente.border = borderError;
		messageError += "\nDebe seleccionar Respirador.";
		isValid = false;
	}
	*/
	// Validando longitud de textos
	
	if (isValid && f_modifica == 1){
		
		if (utils.stringTrim(forms.AsiArmTra_Mod_txt_comentario.f_informe).length == 0) {
			//elements.txt_paciente.border = borderError;
			elements.tab_arm.tabIndex = 3;
			messageError += "\nDebe ingresar Comentarios.";
			isValid = false;
		}
	}
	
	if (isValid && f_modifica == 1 && f_evolucion == 2){
		
		if (isValid && utils.stringTrim(forms.AsiArmTra_Mod_txt_causaEgreso.f_informe).length == 0) {
			
			//elements.txt_paciente.border = borderError;
			elements.tab_arm.tabIndex = 4;
			messageError += "\nDebe ingresar Causa de egreso.";
			isValid = false;
		}
	}

	if (!isValid) {
		globals.DIALOGS.showWarningDialog("¡Atención!", messageError, "Aceptar")
	}

	return isValid;
}

/**
 * @return {Boolean}
 * @properties={typeid:24,uuid:"8EECC220-50B3-43CE-9B94-9A8C3E4AB361"}
 */
function isValidData() {

	var isValid = true;
	var messageError = "No ha sido posible guardar. Corrija los siguientes errores y vuelva a intentar."
		
	if(asiarmtrs_mod_rel_respirador.rsp_enuso == 1){
		
		if(asiarmtrs_mod_rel_respirador.rsp_histcli != $_histClin){
			
			messageError += "\nEl respirador esta en uso por otro paciente. Debe seleccionar otro respirador.";
			isValid = false;
		}
	}
	
	 if(!isValid){

		 globals.DIALOGS.showWarningDialog("Atención!",messageError,"Aceptar");
		 //elements.txt_paciente.requestFocus();
	 }
	
	return isValid;
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"1F00FC2B-E783-4801-8792-8F721DF7DB81"}
 */
function onAction_btnCerrar(event) {

	if ($isDirty) {
		if (globals.DIALOGS.showQuestionDialog('¡Atención!', 'Existen datos que no hay sido guardados. ¿Está seguro que desea continuar?', 'Si', 'No') == 'Si')
			cerrarForm();
	} else {
		cerrarForm();
	}
}

/**
 * @properties={typeid:24,uuid:"CEDE3C5B-4FE9-4F6B-903F-A49EFC13D5FD"}
 */
function cerrarForm() {

	f_cerrarForm = true;
	globals.AsistFunciones_unLockRegisterTable(application.getSolutionName(),controller.getName(), $_histClin.toString(),globals.AsiArmTrs_Mod_wNumLega.toString(),"Asistencia Respiratoria Mecanica");
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
 * @properties={typeid:24,uuid:"B7B38429-DB5A-402D-BA88-C529A114E59C"}
 */
function onHide_cerrarForm(event) {

	if (!f_cerrarForm)
		globals.DIALOGS.showInfoDialog("Atención", "Para cerrar el programa debe presionar el boton Cancelar.", "Aceptar")
	return f_cerrarForm;
}

/**
 * @properties={typeid:24,uuid:"EE4E9398-4629-475F-9BA1-B77CE0461468"}
 */
function inicializarRelacionRendDet() {
	
	asiarmtrs_mod_rel_rend_det.rdadmision = 0;
	asiarmtrs_mod_rel_rend_det.rdadmision1 = 0;
	asiarmtrs_mod_rel_rend_det.rdcierre = 0;
	asiarmtrs_mod_rel_rend_det.rdcodnom = 0;
	asiarmtrs_mod_rel_rend_det.rdempresa = 0;
	asiarmtrs_mod_rel_rend_det.rdfecha = 0;
	asiarmtrs_mod_rel_rend_det.rdhclinica = 0;
	asiarmtrs_mod_rel_rend_det.rdhora = 0;
	asiarmtrs_mod_rel_rend_det.rdmodalidad = 0;
	asiarmtrs_mod_rel_rend_det.rdpantalla = 0;
	asiarmtrs_mod_rel_rend_det.rdperiodo = 0;
	asiarmtrs_mod_rel_rend_det.rdtipo = 0;
	asiarmtrs_mod_rel_rend_det.rdcantmod = 0;
	asiarmtrs_mod_rel_rend_det.rddias = 0;
	asiarmtrs_mod_rel_rend_det.rdduracion = 0;
	asiarmtrs_mod_rel_rend_det.rdedcodigo = 0;
	asiarmtrs_mod_rel_rend_det.rdespec = 0;
	asiarmtrs_mod_rel_rend_det.rdfechahasta = 0;
	asiarmtrs_mod_rel_rend_det.rdgto = 0;
	asiarmtrs_mod_rel_rend_det.rdhon = 0;
	asiarmtrs_mod_rel_rend_det.rdimpo = 0;
	asiarmtrs_mod_rel_rend_det.rdmarca = 0;
	asiarmtrs_mod_rel_rend_det.rdmed = 0;
	asiarmtrs_mod_rel_rend_det.rdnivelpami = 0;
	asiarmtrs_mod_rel_rend_det.rdopelega = 0;
	asiarmtrs_mod_rel_rend_det.rdopetipo = 0;
	asiarmtrs_mod_rel_rend_det.rdordencarga = 0;
	asiarmtrs_mod_rel_rend_det.rdpaso = 0;
	asiarmtrs_mod_rel_rend_det.rdtipomed = 0;
	asiarmtrs_mod_rel_rend_det.rdunit = 0;
}

/**
 * @properties={typeid:24,uuid:"247AC337-7ABB-4460-92BE-E1CFAE1E664A"}
 */
function inicializarRelacionRendCab() {
	
	asiarmtrs_mod_rel_rend_cab.rcadmision = 0;
	asiarmtrs_mod_rel_rend_cab.rccierre = 0;
	asiarmtrs_mod_rel_rend_cab.rcempresa = 0;
	asiarmtrs_mod_rel_rend_cab.rchclinica = 0;
	asiarmtrs_mod_rel_rend_cab.rcperiodo = 0;
	asiarmtrs_mod_rel_rend_cab.libre = 0;
	asiarmtrs_mod_rel_rend_cab.rcadmision1 = 0;
	asiarmtrs_mod_rel_rend_cab.rcadmision2 = 0;
	asiarmtrs_mod_rel_rend_cab.rcadmision3 = 0;
	asiarmtrs_mod_rel_rend_cab.rcadmision4 = 0;
	asiarmtrs_mod_rel_rend_cab.rcafiliado = ' ';
	asiarmtrs_mod_rel_rend_cab.rcatencion = 0;
	asiarmtrs_mod_rel_rend_cab.rccierre2 = 0;
	asiarmtrs_mod_rel_rend_cab.rccierre3 = 0;
	asiarmtrs_mod_rel_rend_cab.rcempresa1 = 0;
	asiarmtrs_mod_rel_rend_cab.rcempresa2 = 0;
	asiarmtrs_mod_rel_rend_cab.rcempresa3 = 0;
	asiarmtrs_mod_rel_rend_cab.rcempresa4 = 0;
	asiarmtrs_mod_rel_rend_cab.rcempresa5 = 0;
	asiarmtrs_mod_rel_rend_cab.rcestado = 0;
	asiarmtrs_mod_rel_rend_cab.rcestado5 = 0;
	asiarmtrs_mod_rel_rend_cab.rcfactura = 0;
	asiarmtrs_mod_rel_rend_cab.rcfecha = 0;
	asiarmtrs_mod_rel_rend_cab.rcfechaemision = 0;
	asiarmtrs_mod_rel_rend_cab.rchclinica2 = 0;
	asiarmtrs_mod_rel_rend_cab.rchclinica3 = 0;
	asiarmtrs_mod_rel_rend_cab.rchclinica5 = 0;
	asiarmtrs_mod_rel_rend_cab.rchcturnos = 0;
	asiarmtrs_mod_rel_rend_cab.rchora = 0;
	asiarmtrs_mod_rel_rend_cab.rchoraemision = 0;
	asiarmtrs_mod_rel_rend_cab.rcimpfiller = 0;
	asiarmtrs_mod_rel_rend_cab.rcimpobra = 0;
	asiarmtrs_mod_rel_rend_cab.rcimppaciente1 = 0;
	asiarmtrs_mod_rel_rend_cab.rcimppaciente2 = 0;
	asiarmtrs_mod_rel_rend_cab.rciva = 0;
	asiarmtrs_mod_rel_rend_cab.rcletrafc = ' ';
	asiarmtrs_mod_rel_rend_cab.rcmarca = 0;
	asiarmtrs_mod_rel_rend_cab.rcobra = 0;
	asiarmtrs_mod_rel_rend_cab.rcobra5 = 0;
	asiarmtrs_mod_rel_rend_cab.rcoperador = 0;
	asiarmtrs_mod_rel_rend_cab.rcpaciente = ' ';
	asiarmtrs_mod_rel_rend_cab.rcperiodo2 = 0;
	asiarmtrs_mod_rel_rend_cab.rcperiodo3 = 0;
	asiarmtrs_mod_rel_rend_cab.rcperiodo6 = 0;
	asiarmtrs_mod_rel_rend_cab.rcperiodofact = 0;
	asiarmtrs_mod_rel_rend_cab.rcplan = ' ';
	asiarmtrs_mod_rel_rend_cab.rcptovtafc = 0;
	asiarmtrs_mod_rel_rend_cab.rcquienfac = 0;
	asiarmtrs_mod_rel_rend_cab.rcsecuencia = 0;
	asiarmtrs_mod_rel_rend_cab.rctipograb = 0;
	asiarmtrs_mod_rel_rend_cab.rctipooperador = 0;
	asiarmtrs_mod_rel_rend_cab.rcultfechapac = 0;
}

/**
 * TODO generated, please specify type and doc for the params
 * @param {Number} histClin
 * @param {Number} fecha
 * @param {Number} hora
 * @param {Number} tipoLega
 * @param {Number} numLega
 *
 * @properties={typeid:24,uuid:"2782514E-5E18-46B8-ABF2-9A79155938D6"}
 */
function imprimir(histClin, fecha, hora, tipoLega, numLega) {

	// 0 : imprime hoja 1 : genera PDF 
	var absoluteFileName = globals.AsiArmMod_Rep_imprimir(histClin,fecha,hora,tipoLega,numLega,0,false);
	//globals.VisualizarPDF_URL(null,absoluteFileName);
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
 * @properties={typeid:24,uuid:"1B1BBD22-1057-4AE4-AB70-DAD0CA5F6843"}
 */
function onDataChange_cboArmTipo(oldValue, newValue, event) {

	// NO INVASIVA
	if (f_tipoArm == 1) {

		elements.cbo_modoInvasiva.visible = false;
		elements.cbo_modoNoInvasiva.visible = true;
		elements.cbo_modoNoInvasiva.enabled = true;
		f_modoNoInvasiva = 0;
		elements.cbo_modoNoInvasiva.requestFocus();
	}

	//INVASIVA
	if (f_tipoArm == 2) {

		elements.cbo_modoNoInvasiva.visible = false;
		elements.cbo_modoInvasiva.visible = true;
		elements.cbo_modoInvasiva.enabled = true;
		f_modoInvasiva = 0;
		elements.cbo_modoInvasiva.requestFocus();
	}

	elements.tab_arm.setTabEnabledAt(1, false);
	elements.tab_arm.setTabEnabledAt(2, false);
	forms.AsiArmTra_Mod_txt_comentario.controller.readOnly = false;
	elements.cbo_armTipo.enabled = false;
	$isDirty = true;

	return true
}

/**
 * @properties={typeid:24,uuid:"4BFE4FAD-8CB5-4111-99E1-75BE88B5491E"}
 */
function updateArmTipo() {

	// NO INVASIVA
	if ($_armInvasiva == 1) {

		elements.cbo_modoInvasiva.visible = false;
		elements.cbo_modoNoInvasiva.visible = true;
		elements.cbo_modoNoInvasiva.enabled = true;
	}

	//INVASIVA
	if ($_armInvasiva == 2) {

		elements.cbo_modoNoInvasiva.visible = false;
		elements.cbo_modoInvasiva.visible = true;
		elements.cbo_modoInvasiva.enabled = true;
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
 * @properties={typeid:24,uuid:"46324E08-D1C2-42A9-A665-074019B64DFD"}
 */
function onDataChange_cboModoNoInvasiva(oldValue, newValue, event) {

	if (f_modifica == 0) 
		asiarmtrs_mod_rel_arm_dia_noinva.newRecord();
	else{
	
		globals.AsiArmTrs_Mod_armHcli_noinva = $_histClin;
		globals.AsiArmTrs_Mod_armFech_noinva = $_fecha;
		globals.AsiArmTrs_Mod_armHora_noinva = $_hora;
		
		databaseManager.refreshRecordFromDatabase(asiarmtrs_mod_rel_arm_dia_noinva,1);
	}
	
	inicializarModoNoInvasiva(f_modoNoInvasiva);
	inicializarDatosNoInvasiva();
	editableNoInvasiva(true);
	
	forms.AsiArmTrs_Mod_dtl_invasiva_no.elements.txt_armIpap.requestFocus();
	$isDirty = true;
	return true
}


/**
 * 
 * @param {Number} armContinua
 *
 * @properties={typeid:24,uuid:"7EFD5490-703F-4F2F-A232-441DFE357060"}
 */
function inicializarModoNoInvasiva(armContinua) {
	
	elements.tab_arm.tabIndex = 1;
	elements.tab_arm.setTabEnabledAt(1, true);
	elements.cbo_modoNoInvasiva.enabled = false;

	if (armContinua == 1)
		elements.tab_arm.setTabTextAt(1, 'No Invasiva - Continua');
	else
		elements.tab_arm.setTabTextAt(1, 'No Invasiva - Intermitente');
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
 * @properties={typeid:24,uuid:"2B7D4E44-0ADF-4180-B282-ED835451F0BF"}
 */
function onDataChange_cboInvasiva(oldValue, newValue, event) {

	inicializarModoInvasiva(f_modoInvasiva);
	
	if (f_modifica == 1) {

		forms.AsiArmTrs_Mod_tab_invasiva.elements.cbo_armIot.enabled = true;
		forms.AsiArmTrs_Mod_tab_invasiva.elements.txt_manguito.readOnly = false;
	}
	
	forms.AsiArmTrs_Mod_tab_invasiva.f_iot = 0;
	forms.AsiArmTrs_Mod_tab_invasiva.f_manguito = null;
	
	if (f_modoInvasiva == 1){
		
		if(f_modifica == 0)
			asiarmtrs_mod_rel_arm_dia_invavc.newRecord();
		else{
			
			globals.AsiArmTrs_Mod_armHcli_invavc = $_histClin;
			globals.AsiArmTrs_Mod_armFech_invavc = $_fecha;
			globals.AsiArmTrs_Mod_armHora_invavc = $_hora;
			
			databaseManager.refreshRecordFromDatabase(asiarmtrs_mod_rel_arm_dia_invavc,1);
		}
		
		inicializarDatosInvasiva_VC();
	}
	
	if (f_modoInvasiva == 2){
		
		if(f_modifica == 0)
			asiarmtrs_mod_rel_arm_dia_invapc.newRecord();
		else{
		
			globals.AsiArmTrs_Mod_armHcli_invapc = $_histClin;
			globals.AsiArmTrs_Mod_armFech_invapc = $_fecha;
			globals.AsiArmTrs_Mod_armHora_invapc = $_hora;
			
			databaseManager.refreshRecordFromDatabase(asiarmtrs_mod_rel_arm_dia_invapc,1);
		}
		
		inicializarDatosInvasiva_PC();
	}
		
	if (f_modoInvasiva == 3){
		
		if(f_modifica == 0)
			asiarmtrs_mod_rel_arm_dia_invaps.newRecord();
		else{
			
			globals.AsiArmTrs_Mod_armHcli_invaps = $_histClin;
			globals.AsiArmTrs_Mod_armFech_invaps = $_fecha;
			globals.AsiArmTrs_Mod_armHora_invaps = $_hora;
			
			databaseManager.refreshRecordFromDatabase(asiarmtrs_mod_rel_arm_dia_invaps,1);
		}
		
		inicializarDatosInvasiva_PS();
	}
		
	forms.AsiArmTrs_Mod_tab_invasiva.elements.cbo_armIot.requestFocus();
	$isDirty = true;
	return true
}

/**
 * 
 * @param {Number} modo
 *
 * @properties={typeid:24,uuid:"D279229B-C6B8-44D1-B06A-78A650987DE1"}
 */
function inicializarModoInvasiva(modo) {

	elements.tab_arm.tabIndex = 2;
	elements.tab_arm.setTabEnabledAt(2, true);

	// A/C VC
	if (modo == 1) {

		forms.AsiArmTrs_Mod_tab_invasiva.elements.tab_modo_invasiva.tabIndex = 1;
		forms.AsiArmTrs_Mod_tab_invasiva.elements.tab_modo_invasiva.setTabEnabledAt(1, true);
		forms.AsiArmTrs_Mod_tab_invasiva.elements.tab_modo_invasiva.setTabEnabledAt(2, false);
		forms.AsiArmTrs_Mod_tab_invasiva.elements.tab_modo_invasiva.setTabEnabledAt(3, false);
	}

	// A/C PC
	if (modo == 2) {

		forms.AsiArmTrs_Mod_tab_invasiva.elements.tab_modo_invasiva.tabIndex = 2;
		forms.AsiArmTrs_Mod_tab_invasiva.elements.tab_modo_invasiva.setTabEnabledAt(2, true);
		forms.AsiArmTrs_Mod_tab_invasiva.elements.tab_modo_invasiva.setTabEnabledAt(1, false);
		forms.AsiArmTrs_Mod_tab_invasiva.elements.tab_modo_invasiva.setTabEnabledAt(3, false);
	}

	// CPAP/PS
	if (modo == 3) {

		forms.AsiArmTrs_Mod_tab_invasiva.elements.tab_modo_invasiva.tabIndex = 3;
		forms.AsiArmTrs_Mod_tab_invasiva.elements.tab_modo_invasiva.setTabEnabledAt(3, true);
		forms.AsiArmTrs_Mod_tab_invasiva.elements.tab_modo_invasiva.setTabEnabledAt(1, false);
		forms.AsiArmTrs_Mod_tab_invasiva.elements.tab_modo_invasiva.setTabEnabledAt(2, false);
	}

	elements.cbo_modoInvasiva.enabled = false;
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
 * @properties={typeid:24,uuid:"F3BE45D8-CBE3-448A-BDC8-CC11A9804556"}
 */
function onDataChange_cboEstado(oldValue, newValue, event) {

	f_conciencia = 0;
	f_ramsay = 0;
	// CONCIENCIA
	if (f_estado == 1) {

		//f_conciencia = 0;
		elements.cbo_ramsay.visible = false;
		elements.cbo_conciencia.visible = true;
		elements.cbo_conciencia.requestFocus();

	}

	// RAMSAY
	if (f_estado == 2) {

		//f_ramsay = 0;
		elements.cbo_conciencia.visible = false;
		elements.cbo_ramsay.visible = true;
		elements.cbo_ramsay.requestFocus();
	}

	elements.cbo_estado.enabled = false;
	$isDirty = true;
	//elements.txt_temperatura.requestFocus();

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
 * @properties={typeid:24,uuid:"48FEE999-EBF3-4A84-A040-03437049E1B7"}
 */
function onDataChange_cboModifica(oldValue, newValue, event) {

	// MODIFICA SI : 1
	if (f_modifica == 1) {

		elements.cbo_modifica.enabled = false;
		visibleBody(true);
		editableEvolucion(true);

		// CARGAR ARM
		updateArmTipo();
		
		if ($_armInvasiva == 1) {
			
			globals.AsiArmTrs_Mod_armHcli_noinva = $_histClin;
			globals.AsiArmTrs_Mod_armFech_noinva = $_fecha;
			globals.AsiArmTrs_Mod_armHora_noinva = $_hora;
			
			databaseManager.refreshRecordFromDatabase(asiarmtrs_mod_rel_arm_dia_noinva,1);
			
			inicializarModoNoInvasiva(asiarmtrs_mod_rel_arm_dia_noinva.armcontinua);
			
			if (asiarmtrs_mod_rel_arm_dia_noinva.armflujoo2 > 0) {
				forms.AsiArmTrs_Mod_dtl_invasiva_no.f_armTipoFlujo = 1;
				forms.AsiArmTrs_Mod_dtl_invasiva_no.f_armFlujoUnidad = '( lt/min )';
				forms.AsiArmTrs_Mod_dtl_invasiva_no.f_armFlujo = asiarmtrs_mod_rel_arm_dia_noinva.armflujoo2;
			} else {
				forms.AsiArmTrs_Mod_dtl_invasiva_no.f_armTipoFlujo = 2
				forms.AsiArmTrs_Mod_dtl_invasiva_no.f_armFlujoUnidad = '( % )';
				forms.AsiArmTrs_Mod_dtl_invasiva_no.f_armFlujo = asiarmtrs_mod_rel_arm_dia_noinva.armfio2;
			}
			
			editableNoInvasiva(false);
		}

		if ($_armInvasiva == 2) {

			if($_armModo == 1){
				
				globals.AsiArmTrs_Mod_armHcli_invavc = $_histClin;
				globals.AsiArmTrs_Mod_armFech_invavc = $_fecha;
				globals.AsiArmTrs_Mod_armHora_invavc = $_hora;
				
				databaseManager.refreshRecordFromDatabase(asiarmtrs_mod_rel_arm_dia_invavc,1);
				
				forms.AsiArmTrs_Mod_tab_invasiva.f_iot = asiarmtrs_mod_rel_arm_dia_invavc.armiot;
				forms.AsiArmTrs_Mod_tab_invasiva.f_manguito = asiarmtrs_mod_rel_arm_dia_invavc.armpresmang;
			}
			
			if($_armModo == 2){
				
				globals.AsiArmTrs_Mod_armHcli_invapc = $_histClin;
				globals.AsiArmTrs_Mod_armFech_invapc = $_fecha;
				globals.AsiArmTrs_Mod_armHora_invapc = $_hora;
				
				databaseManager.refreshRecordFromDatabase(asiarmtrs_mod_rel_arm_dia_invapc,1);
				
				forms.AsiArmTrs_Mod_tab_invasiva.f_iot = asiarmtrs_mod_rel_arm_dia_invapc.armiot;
				forms.AsiArmTrs_Mod_tab_invasiva.f_manguito = asiarmtrs_mod_rel_arm_dia_invapc.armpresmang;
			}

			if($_armModo == 3){
				
				globals.AsiArmTrs_Mod_armHcli_invaps = $_histClin;
				globals.AsiArmTrs_Mod_armFech_invaps = $_fecha;
				globals.AsiArmTrs_Mod_armHora_invaps = $_hora;
				
				databaseManager.refreshRecordFromDatabase(asiarmtrs_mod_rel_arm_dia_invaps,1);
				
				forms.AsiArmTrs_Mod_tab_invasiva.f_iot = asiarmtrs_mod_rel_arm_dia_invaps.armiot;
				forms.AsiArmTrs_Mod_tab_invasiva.f_manguito = asiarmtrs_mod_rel_arm_dia_invaps.armpresmang;
			}
			
			inicializarModoInvasiva($_armModo);

			forms.AsiArmTrs_Mod_tab_invasiva.elements.cbo_armIot.enabled = false;
			forms.AsiArmTrs_Mod_tab_invasiva.elements.txt_manguito.readOnly = true;
			forms.AsiArmTrs_Mod_tab_invasiva.elements.tab_modo_invasiva.setTabEnabledAt($_armModo, false);
		}

		forms.AsiArmTrs_Mod_dtl_invasiva_no.onDataChange_cboArmFlujo(oldValue, newValue, event);

		// CARGAR INFORME
		cargarTexto($_histClin,$_fecha,$_hora,2)
		
		elements.cbo_armTipo.enabled = true;
		elements.tab_arm.setTabEnabledAt(3,true);
		forms.AsiArmTra_Mod_txt_comentario.controller.readOnly = true;
		elements.cbo_evolucion.requestFocus();
		$isDirty = false;
		
	} else {
		cerrarForm();
	}
	return true
}

/**
 *
 * @param {Number} histClin
 * @param {Number} fecha
 * @param {Number} hora
 * @param {Number} grupo
 *
 * @properties={typeid:24,uuid:"161AD792-9860-4B80-9497-EC50882016CF"}
 */
function cargarTexto(histClin, fecha, hora, grupo) {

	var sql = "SELECT linea FROM asiarmtrs_armtxt" + " WHERE histclinica=" + histClin + " AND fecha =" + fecha + " AND hora =" + hora + " AND grupo = " + grupo;
	var dsTexto = databaseManager.getDataSetByQuery('desal', sql, null, -1);

	if (dsTexto.getMaxRowIndex() > 0) {

		// cargar informes de Postgres
		forms.AsiArmTra_Mod_txt_comentario.f_informe = dsTexto.getValue(1, 1);
	} else {
		//cargar informes de Relativity
		var sqlInfo = "select ArmTxtTexto from tbc_arm_txt" + " where ArmTxtHcli = " + histClin + " and ArmTxtFech = " + fecha + " and ArmTxtHora = " + hora + " and ArmTxtTipo = " + grupo + " order by ArmTxtSeq";
		var ds_info = databaseManager.getDataSetByQuery("asistencial", sqlInfo, null, -1);

		for (var i = 1; i <= ds_info.getMaxRowIndex(); i++) {

			if (utils.stringTrim(forms.AsiArmTra_Mod_txt_comentario.f_informe).length == 0)
				forms.AsiArmTra_Mod_txt_comentario.f_informe += utils.stringTrim(ds_info.getValue(i, 1));
			else
				forms.AsiArmTra_Mod_txt_comentario.f_informe += '\n' + utils.stringTrim(ds_info.getValue(i, 1));
		}
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
 * @properties={typeid:24,uuid:"55F5F79E-39DC-4659-BD67-6B408E7450E2"}
 */
function onDataChange_cboEvolucion(oldValue, newValue, event) {

	elements.cbo_evolucion.enabled = false;
	if (f_evolucion == 2) {

		elements.tab_arm.setTabEnabledAt(4, true);
	}

	elements.cbo_estado.requestFocus();
	$isDirty = true;
	
	return true
}

/**
 *
 * @param {Boolean} value
 *
 * @properties={typeid:24,uuid:"B87B0C5A-0D95-4235-8B1C-C1F8A3E83654"}
 */
function editableEvolucion(value) {

	elements.cbo_evolucion.enabled = value;
	elements.cbo_estado.enabled = value;
	//elements.cbo_conciencia.enabled = value;
	//elements.cbo_ramsay.enabled = value;

}

/**
 * @properties={typeid:24,uuid:"4FAF1D2A-9BA3-4511-B500-951B34646CC7"}
 */
function inicializarDatosNoInvasiva() {

	asiarmtrs_mod_rel_arm_dia_noinva.armipap = null;
	asiarmtrs_mod_rel_arm_dia_noinva.armepap = null;
	forms.AsiArmTrs_Mod_dtl_invasiva_no.f_armFlujo = null;
	forms.AsiArmTrs_Mod_dtl_invasiva_no.f_armFlujoUnidad = ' ';
	forms.AsiArmTrs_Mod_dtl_invasiva_no.f_armTipoFlujo = 0;
	asiarmtrs_mod_rel_arm_dia_noinva.armvtaprox = null;
	asiarmtrs_mod_rel_arm_dia_noinva.armfr = null;
	asiarmtrs_mod_rel_arm_dia_noinva.armrampa = null;
	asiarmtrs_mod_rel_arm_dia_noinva.armsato2 = null;
}

/**
 * @properties={typeid:24,uuid:"7676DAB2-7179-4B45-94E6-84D400DFA7EE"}
 */
function inicializarDatosInvasiva_VC() {

	asiarmtrs_mod_rel_arm_dia_invavc.arm1vt = null;
	asiarmtrs_mod_rel_arm_dia_invavc.arm1fr = null;
	asiarmtrs_mod_rel_arm_dia_invavc.arm1peep = null;
	asiarmtrs_mod_rel_arm_dia_invavc.arm1fio2 = null;
	asiarmtrs_mod_rel_arm_dia_invavc.arm1sato2 = null;
	asiarmtrs_mod_rel_arm_dia_invavc.arm1pafi = null;
	asiarmtrs_mod_rel_arm_dia_invavc.arm1cest = null;
	asiarmtrs_mod_rel_arm_dia_invavc.arm1ppico = null;
	asiarmtrs_mod_rel_arm_dia_invavc.arm1pplateau = null;
	asiarmtrs_mod_rel_arm_dia_invavc.arm1sensib = null;
	asiarmtrs_mod_rel_arm_dia_invavc.arm1pausainsp = null;
	asiarmtrs_mod_rel_arm_dia_invavc.arm1relie = null;
	
}

/**
 * @properties={typeid:24,uuid:"741FC6A0-0FDF-4244-80E7-E01DD6777C83"}
 */
function inicializarDatosInvasiva_PC() {

	asiarmtrs_mod_rel_arm_dia_invapc.arm2cest = null;
	asiarmtrs_mod_rel_arm_dia_invapc.arm2fio2 = null;
	asiarmtrs_mod_rel_arm_dia_invapc.arm2fr = null;
	asiarmtrs_mod_rel_arm_dia_invapc.arm2pafio2 = null;
	asiarmtrs_mod_rel_arm_dia_invapc.arm2pins = null;
	asiarmtrs_mod_rel_arm_dia_invapc.arm2relie = null;
	asiarmtrs_mod_rel_arm_dia_invapc.arm2sato2 = null;
	asiarmtrs_mod_rel_arm_dia_invapc.arm2tins = null;
	asiarmtrs_mod_rel_arm_dia_invapc.arm2vtaprox = null;
}

/**
 * @properties={typeid:24,uuid:"5F62A56B-09C4-4C08-8719-DA5D2C4A63AE"}
 */
function inicializarDatosInvasiva_PS() {

	asiarmtrs_mod_rel_arm_dia_invaps.arm3cpap = null;
	asiarmtrs_mod_rel_arm_dia_invaps.arm3fio2 = null;
	asiarmtrs_mod_rel_arm_dia_invaps.arm3fraprox = null;
	asiarmtrs_mod_rel_arm_dia_invaps.arm3pafio2 = null;
	asiarmtrs_mod_rel_arm_dia_invaps.arm3ps = null;
	asiarmtrs_mod_rel_arm_dia_invaps.arm3vtaprox = null;
}

/**
 *
 * @param {Boolean} value
 *
 * @properties={typeid:24,uuid:"9F99D747-8C66-4827-8E7A-BD1EAD89DF9B"}
 */
function editableNoInvasiva(value) {

	forms.AsiArmTrs_Mod_dtl_invasiva_no.elements.cbo_armFlujo.enabled = value;
	forms.AsiArmTrs_Mod_dtl_invasiva_no.elements.txt_armEpap.readOnly = !value;
	forms.AsiArmTrs_Mod_dtl_invasiva_no.elements.txt_armFlujo.readOnly = !value;
	forms.AsiArmTrs_Mod_dtl_invasiva_no.elements.txt_armFr.readOnly = !value;
	forms.AsiArmTrs_Mod_dtl_invasiva_no.elements.txt_armIpap.readOnly = !value;
	forms.AsiArmTrs_Mod_dtl_invasiva_no.elements.txt_armSato.readOnly = !value;
	forms.AsiArmTrs_Mod_dtl_invasiva_no.elements.txt_armVtAprox.readOnly = !value;
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"3D284801-791D-4D7B-8C8F-055D371F1C50"}
 */
function onAction_openRespirador(event) {

	var win2 = application.createWindow("seleccionar_respirador", JSWindow.MODAL_DIALOG);
	win2.title = 'Respiradores Disponibles';
	win2.resizable = false;
	win2.show(forms.AsiArmTrs_Mod_dlg_buscar_respirador);
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
 * @properties={typeid:24,uuid:"6447DE75-6310-4198-8139-6D4C9F9225F8"}
 */
function onDataChange_cboConciencia(oldValue, newValue, event) {
	
	elements.cbo_conciencia.enabled = false;
	if(f_conciencia == 7){
		
		elements.txt_concieX.visible = true;
		elements.txt_concieX.requestFocus();
	}
	
	return true
}

/**
 * 
 * @param {String} serverName
 * @param {String} tableName
 * @param {String} columnName
 * @param {String} primaryKey
 * @param {Number} keyValue
 *
 * @properties={typeid:24,uuid:"3EC20BFB-189F-436B-968C-1E7D533E31DB"}
 */
function obtenerNumerador (serverName,tableName,columnName,primaryKey,keyValue) {
	
	var numero = 0;
	
	var msg = '';
	var msgEn = '';
	
	var sql = "begin; lock table " + tableName + " in row exclusive mode;";
    var done = plugins.rawSQL.executeSQL(serverName,tableName,sql);
	if (done) {
		
		// Lock de registros
		sql = "select * from " + tableName + " where " + primaryKey + " = " + keyValue + " for update;";
		done = plugins.rawSQL.executeSQL(serverName,tableName,sql);
		if (done) {
			
			sql = "SELECT " + columnName + " FROM " + tableName + " WHERE " + primaryKey + " = " + keyValue;
			var vDataset = databaseManager.getDataSetByQuery(serverName, sql, null, 1);
			
			if(vDataset.getMaxRowIndex() > 0){
				
				sql = "update " + tableName + " set " + columnName + " = " + columnName + " + 1 where " + primaryKey + " = " + keyValue + "; commit;";
				done = plugins.rawSQL.executeSQL(serverName, tableName, sql);
				if(done){
					
					numero = vDataset.getValue(1,1) + 1;
				}
				else{
					
					plugins.rawSQL.executeSQL(serverName, tableName, "end;");
					globals.DIALOGS.showWarningDialog("¡Atencion!", "No ha sido posible actualizar el numerador : \n" + msgEn, "Aceptar");
				}
			}
			else{
				
				plugins.rawSQL.executeSQL(serverName, tableName, "end;");
				globals.DIALOGS.showWarningDialog("¡Atencion!", "No existe el numerador : \n" + msgEn, "Aceptar");
			}
		}
		else{
			
			plugins.rawSQL.executeSQL(serverName, tableName, "end;");
			globals.DIALOGS.showWarningDialog("¡Atencion!", "Error al consultar tabla de numerador :\n" + msgEn + "Error en Select for update" , 'Aceptar');
		}
	}
	else{
		
		msg = plugins.rawSQL.getException().getMessage(); //see exception node for more info about the exception obj
		globals.DIALOGS.showWarningDialog("¡Atencion!", "Error al consultar tabla de numerador :\n" + msgEn + "\nSQL exception:" + msg, 'Aceptar');
	}
	
	return numero;
}
