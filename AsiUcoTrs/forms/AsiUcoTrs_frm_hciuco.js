/**
 * @properties={typeid:35,uuid:"049D843C-4429-4A15-BE9B-2AB3B1DE1085",variableType:-4}
 */
var $_wHayArm = false;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"F3E0E7FA-937C-48DA-B866-B4F8377AE7F5",variableType:4}
 */
var f_arm = 0;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"C626014C-DAD0-4FA5-8A7F-8AA7C90587B1"}
 */
var f_derivado = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"64715FA7-4C0D-4F0D-83AF-3DFAC9C9D976"}
 */
var f_ingresoUco = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"A562DB17-8B92-4E01-9E62-311745EC65BA"}
 */
var f_ingresoSanatorio = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"4FEDEE85-FF0E-4CC3-9F10-18C39943802B"}
 */
var $_msgSMS = '';

/**
 * @properties={typeid:35,uuid:"C53E9246-31C5-44D3-AD2D-24DE064CB5E1",variableType:-4}
 */
var $_listNumberSMS = new Array();

/**
 * @properties={typeid:35,uuid:"FD83EC57-2E51-48A4-BCA9-504B72D9FB6B",variableType:-4}
 */
var $_wtrau = false;

/**
 * @properties={typeid:35,uuid:"7A2BFF53-72D7-4D9F-B704-C1ABF2F23DE6",variableType:-4}
 */
var $_wsele = false;

/**
 * @properties={typeid:35,uuid:"9750614D-C12E-44D8-8E7F-2BEA266539B1",variableType:-4}
 */
var $_isUserOSTEE = false;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"D5E0BC12-40E3-4E5A-858A-F7A9656073E7",variableType:4}
 */
var $_countChange = 1;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"60F4867E-DBF9-44CE-8A0A-5E98DB4251D1"}
 */
var f_habita = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"C4A04A80-AEF7-4616-A95C-32306DB0B5AF"}
 */
var f_cama = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"8977F2E3-9465-4D8D-A9E3-E9536C39B91E",variableType:4}
 */
var f_sexo = null;

/**
 * @properties={typeid:35,uuid:"7310418A-1F93-4AFF-895B-BBEFC0F3014B",variableType:-4}
 */
var f_cerrarForm = false;

/**
 * @properties={typeid:35,uuid:"3AE907A7-109E-40ED-A724-A2C51F6376B2",variableType:-4}
 */
var $isDirty = false;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"A0E85F0B-48C3-4CC5-AD9C-A327F13D1E09",variableType:4}
 */
var f_protocolo = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"1D9A3E7B-3C68-4619-9F18-4E9C5A997B02"}
 */
var $messageErrorInter = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"6A1EFEF7-EA19-4E20-A2FB-25B446ACFB19"}
 */
var f_medico = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"27759D20-F6C4-4A9D-998C-0326A4280EA3"}
 */
var f_edad = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"7C1E8404-BC8E-4699-B663-772B2054FBBA"}
 */
var f_cobertura = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"E0E6EE57-19F6-44FA-A125-53CE1FE0ACB4"}
 */
var f_histClinUnica = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"E43FFDD5-02F9-4519-A136-F3225439D2E9"}
 */
var f_paciente = null;

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"AFA32059-1167-4803-AB91-B3C1C40470CB"}
 */
function onShow_inicializarForm(firstShow, event) {

	//initFormFirstShow();
	elements.txt_paciente.requestFocus(); 
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"0EF93FC4-3741-4DBD-81D2-DFFCDAA32198"}
 */
function onAction_btnBuscarPaciente(event) {

	globals.AsiUcoTrs_eventSourceButton = 1;
	openSearch();
}

/**
 * @properties={typeid:24,uuid:"C742FD73-298F-4EAB-ABC2-1336F27D3657"}
 */
function openSearch() {

	var win2 = application.createWindow("seleccion_internado", JSWindow.MODAL_DIALOG);
	win2.title = 'Búsqueda de Pacientes Internados';
	win2.resizable = false;
	win2.show(forms.AsiUcoTrs_dlg_buscar_internado);

}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"C9881EA3-7421-48FB-BCE0-0B4099E2F0E1"}
 */
function onAction_txtBusquedaRapida(event) {

	if(elements.txt_paciente.editable){
		
		globals.AsiUcoTrs_hisclistrynro = f_paciente;
		if (globals.AsiUcoTrs_hisclistrynro != '' && globals.AsiUcoTrs_hisclistrynro != null) {
			globals.AsiUcoTrs_eventSourceButton = 0;
			openSearch();
			//$isDirty = true;
		} else {
			globals.DIALOGS.showWarningDialog("Atención", 'Debe ingresar Nro. de paciente o apellido.', "Aceptar")
		}
	}
}

/**
 * @properties={typeid:24,uuid:"8FCEF0E2-63CD-4663-A79C-AE040B8C9436"}
 */
function pacienteSeleccionadoInter() {

	globals.AsiUcoTrs_nroHabi = asiucotrs_rel_buscar_admision.adm_habita;
	globals.AsiUcoTrs_alerHistClin = asiucotrs_rel_buscar_admision.adm_histclin;
	
	//ACC-HCL
	if(isValidDatosPacienteInter()){
		
		//CARGO-ADMISION
		editablePaciente(false);
		$isDirty = true;
		f_paciente = formatear_HistClinInter(asiucotrs_rel_buscar_admision.adm_histclin) + ' ' + utils.stringTrim(asiucotrs_rel_buscar_admision.adm_apelnom);
		f_histClinUnica = asiucotrs_rel_buscar_admision.adm_histclinuni;
		f_sexo = asiucotrs_rel_buscar_admision.adm_sexo;
		f_edad = globals.CalculoEdad(asiucotrs_rel_buscar_admision.adm_fecnac) + ' ' + globals.vTipoEdad;
		f_habita = asiucotrs_rel_buscar_admision.adm_habita;
		f_cama = asiucotrs_rel_buscar_admision.adm_cama;
		globals.AsiUcoTrs_obrCodigo = asiucotrs_rel_buscar_admision.adm_obrsoc;
		f_cobertura = utils.stringTrim(asiucotrs_rel_buscar_obrasocial.obr_razonsoc);
		//f_derivado = '';
		
		// Fecha de ingreso a Sanatorio
		var fechaIngreso = asiucotrs_rel_buscar_admision.adm_fecing.toString().substr(6, 2) + "/" + asiucotrs_rel_buscar_admision.adm_fecing.toString().substr(4, 2) + "/" + asiucotrs_rel_buscar_admision.adm_fecing.toString().substr(0, 4);
		var hora = convertNumberToHour_HHMM(asiucotrs_rel_buscar_admision.adm_horing);
		var horaAux = hora.split(':')
		var fechaDesde = globals.IntegerToDate(asiucotrs_rel_buscar_admision.adm_fecing);
		fechaDesde.setHours(Number(horaAux[0]), Number(horaAux[1]));
		//var fechaActual = utils.timestampToDate(application.getServerTimeStamp());
		var fechaActual = application.getServerTimeStamp();
		var dias = contar_dias(fechaDesde, fechaActual);
		
		var fechaHora = fechaIngreso + "  " + convertNumberToHour_HHMM(asiucotrs_rel_buscar_admision.adm_horing);
		f_ingresoSanatorio = fechaHora;
		var info = "Ingresó al Sanatorio : " + fechaHora + " Hrs." + "   " + dias + " días de Internado";

		//BUSCO-DETALLE-UCO
		//var wAmdEgr = 0;
		var wAmdIng = 0;
		var wHorIng = 0;
		var wCerrada = 0;
		var sqlDetalle = "select Det2,Det3,Det9 from tbc_detalle"
					   + " where Det1 = " + asiucotrs_rel_buscar_admision.adm_histclin
					   + " and Det8 = 4"
					   + " order by Det2,Det3";
					   
		var dsDetalle = databaseManager.getDataSetByQuery('asistencial',sqlDetalle,null,-1);
		for(var i= 1; i<=dsDetalle.getMaxRowIndex(); i++){
			
			if(dsDetalle.getValue(i,3) > 0)
				wCerrada = 1;
			
			//wAmdEgr = dsDetalle.getValue(i,3);
			wAmdIng = dsDetalle.getValue(i,1);
			wHorIng = dsDetalle.getValue(i,2);
		}
		
		//Fecha de ingreso a UCO
		fechaIngreso = wAmdIng.toString().substr(6, 2) + "/" + wAmdIng.toString().substr(4, 2) + "/" + wAmdIng.toString().substr(0, 4);
		hora = convertNumberToHour_HHMM(wHorIng);
		horaAux = hora.split(':')
		fechaDesde = globals.IntegerToDate(asiucotrs_rel_buscar_admision.adm_fecing);
		fechaDesde.setHours(Number(horaAux[0]), Number(horaAux[1]));
		dias = contar_dias(fechaDesde, fechaActual);
		
		fechaHora = fechaIngreso + "  " + convertNumberToHour_HHMM(asiucotrs_rel_buscar_admision.adm_horing);
		f_ingresoUco = fechaHora;
		
		info +=  "\n" + "Ingresó al Serv. UCO : " + fechaIngreso + "  " + convertNumberToHour_HHMM(asiucotrs_rel_buscar_admision.adm_horing) + " Hrs." + "   " + dias + " días en Serv. UCO";
		info += "\n\n" + "Domicilio : " + utils.stringTrim(asiucotrs_rel_buscar_admision.adm_domicilio) + "  T.E. : " + utils.stringTrim(asiucotrs_rel_buscar_admision.adm_telefefono);
		info += "\n" + "Resp.Solidario : " + utils.stringTrim(asiucotrs_rel_buscar_admision.adm_nomrespon) + "  T.E. : " + utils.stringTrim(asiucotrs_rel_buscar_admision.adm_telefrespon);
		
		globals.DIALOGS.showInfoDialog('Atención',info,'Aceptar')
	
		//BUSCO-HISTORIAS-INGRESO
		var wImpresa = 0;
		var histclin = asiucotrs_rel_buscar_admision.adm_histclin;
		var sqlHciUco = "select HiuFecha,HiuHora,HiuImprimio from tbc_hciuco"
					  + " where  HiuHiscli = " + histclin
					  + " and HiuFecha >= " + asiucotrs_rel_buscar_admision.adm_fecing
					  + " order by HiuFecha,HiuHora";
		var dsHciUco = databaseManager.getDataSetByQuery('asistencial',sqlHciUco,null,-1);
		
		if(dsHciUco.getMaxRowIndex() > 1 || (dsHciUco.getMaxRowIndex() == 1 && wCerrada == 1)){
			
			//evaluat si agregar  NUEVA
			var dsHciUcoAux = databaseManager.createEmptyDataSet();
			dsHciUcoAux.addColumn('id');
			dsHciUcoAux.addColumn('fecha');
			dsHciUcoAux.addColumn('hora');
			dsHciUcoAux.addColumn('texto');
			
			for(var j=1; j<=dsHciUco.getMaxRowIndex(); j++){
				
				if(dsHciUco.getValue(j,3) == 0)
					wImpresa = 1;
				
				fechaIngreso = dsHciUco.getValue(j,1);
				dsHciUcoAux.addRow([histclin
									,dsHciUco.getValue(j,1)
									,dsHciUco.getValue(j,2)
									,fechaIngreso.toString().substr(6, 2) + "/" + fechaIngreso.toString().substr(4, 2) + "/" + fechaIngreso.toString().substr(0, 4) + "  " + convertNumberToHour_HHMM(dsHciUco.getValue(j,2))
									]);
			}
			
			if(wCerrada == 1 && wImpresa == 0)
				dsHciUcoAux.addRow([0,0,0,'NUEVA']);
				
			var $tipos = [JSColumn.NUMBER,JSColumn.NUMBER,JSColumn.NUMBER,JSColumn.TEXT];
			var $frm = solutionModel.getForm('AsiUcoTrs_tbl_hciuco');
			$frm.dataSource = dsHciUcoAux.createDataSource('ds_hciuco', $tipos);
			forms.AsiUcoTrs_tbl_hciuco.controller.recreateUI();
			
			var win2 = application.createWindow("seleccion_hciuco", JSWindow.MODAL_DIALOG);
			win2.title = 'Historias clínicas de Ingreso a UCO';
			win2.resizable = false;
			win2.show(forms.AsiUcoTrs_tbl_hciuco);
		}
		else{
			
			//hci a uco sin cerrar
			if(dsHciUco.getMaxRowIndex() == 1){
				
				globals.AsiUcoTrs_hiuFecha = dsHciUco.getValue(1,1);
				globals.AsiUcoTrs_hiuHora = dsHciUco.getValue(1,2);
				globals.AsiUcoTrs_hiuHisCli = histclin;
			}
			
			loadData();
		}
	}
	else{
		
		elements.txt_paciente.requestFocus();
	}
}

/**
 * @properties={typeid:24,uuid:"D8C06104-3742-4E91-B4BB-A25835D4AE3C"}
 * @AllowToRunInFind
 */
function loadData() {
	globals.AsiUcoTrs_bloqueado=false;
	var bloqueado = globals.AsistFunciones_isRegisterTableLocked(application.getSolutionName(),controller.getName(),asiucotrs_rel_buscar_admision.adm_histclin.toString(),globals.AsiUcoTrs_vLega.toString(),"Historia Clinica de Ingreso a UCO");
	if(!bloqueado){
		
		var message = '';
		// Existe historia clinica de ingreso a UCO para el paciente seleccionado
		if (asiucotrs_rel_hciuco.getSize() > 0) {
			globals.AsiUcoTrs_bloqueado=true;
			var sql = "SELECT EXISTS( SELECT histclinica FROM  asiucotrs_hciucotxt" 
					+ " WHERE histclinica = " + asiucotrs_rel_buscar_admision.adm_histclin
					+ " and fecha = " + asiucotrs_rel_hciuco.hiufecha 
					+ " and hora = " + asiucotrs_rel_hciuco.hiuhora
					+ " and grupo = 2"
					+ ")";
			
			var dsExists = databaseManager.getDataSetByQuery('desal',sql,null,-1);
			
			if (dsExists.getValue(1,1) == 1) {
				
				globals.AsiUcoTrs_txtHistClinica = asiucotrs_rel_hciuco.hiuhiscli;
				globals.AsiUcoTrs_txtFecha = asiucotrs_rel_hciuco.hiufecha;
				globals.AsiUcoTrs_txtHora = asiucotrs_rel_hciuco.hiuhora;
				globals.AsiUcoTrs_txtGrupo = 2;
				
				// cargar informes de Postgres
				globals.AsiUcoTrs_txtItem = 1;
				forms.AsiUcoTrs_txt_motivo_ingreso.f_informe = asiucotrs_rel_buscar_hciucotxt.linea;
				
				globals.AsiUcoTrs_txtItem = 2;
				forms.AsiUcoTrs_txt_motivo_consulta.f_informe = asiucotrs_rel_buscar_hciucotxt.linea;

				globals.AsiUcoTrs_txtItem = 3;
				forms.AsiUcoTrs_txt_enfermedad_actual.f_informe = asiucotrs_rel_buscar_hciucotxt.linea;

				globals.AsiUcoTrs_txtItem = 4;
				forms.AsiUcoTrs_txt_antec_personal.f_informe = asiucotrs_rel_buscar_hciucotxt.linea;
				
				globals.AsiUcoTrs_txtItem = 5;
				forms.AsiUcoTrs_txt_antec_familiar.f_informe = asiucotrs_rel_buscar_hciucotxt.linea;

				globals.AsiUcoTrs_txtItem = 6;
				forms.AsiUcoTrs_txt_examen_clinico.f_informe = asiucotrs_rel_buscar_hciucotxt.linea;

				globals.AsiUcoTrs_txtItem = 7;
				forms.AsiUcoTrs_txt_examen_complementario.f_informe = asiucotrs_rel_buscar_hciucotxt.linea;

				globals.AsiUcoTrs_txtItem = 8;
				forms.AsiUcoTrs_txt_comentario_ingreso.f_informe = asiucotrs_rel_buscar_hciucotxt.linea;

				globals.AsiUcoTrs_txtItem = 10;
				forms.AsiUcoTrs_txt_plan_terapeutico.f_informe = asiucotrs_rel_buscar_hciucotxt.linea;

				globals.AsiUcoTrs_txtItem = 11;
				forms.AsiUcoTrs_txt_diagnostico_diferencial.f_informe = asiucotrs_rel_buscar_hciucotxt.linea;

				globals.AsiUcoTrs_txtItem = 12;
				forms.AsiUcoTrs_txt_mediacion_habitual.f_informe = asiucotrs_rel_buscar_hciucotxt.linea;
				
			} else {
				//cargar informes de Relativity
				var sqlInfo = "select HiucxItem,HiucxSec,HiucxLinea from tbc_hciucotxt" 
							+ " where HiucxHiscli = " + asiucotrs_rel_hciuco.hiuhiscli 
							+ " and HiucxFecha = " + asiucotrs_rel_hciuco.hiufecha
							+ " and HiucxHora = " + asiucotrs_rel_hciuco.hiuhora
							+ " and HiucxGrupo = 2" 
							+ " order by HiucxItem,HiucxSec";
				var ds_info = databaseManager.getDataSetByQuery("asistencial", sqlInfo, null, -1);

				for (var i = 1; i <= ds_info.getMaxRowIndex(); i++) {

					if (ds_info.getValue(i, 1) == 1){
						
						if(utils.stringTrim(forms.AsiUcoTrs_txt_motivo_ingreso.f_informe).length == 0)
							forms.AsiUcoTrs_txt_motivo_ingreso.f_informe += utils.stringTrim(ds_info.getValue(i, 3));
						else
							forms.AsiUcoTrs_txt_motivo_ingreso.f_informe += '\n' + utils.stringTrim(ds_info.getValue(i, 3));
					}

					if (ds_info.getValue(i, 1) == 2){
						
						if(utils.stringTrim(forms.AsiUcoTrs_txt_motivo_consulta.f_informe).length == 0)
							forms.AsiUcoTrs_txt_motivo_consulta.f_informe += utils.stringTrim(ds_info.getValue(i, 3));
						else
							forms.AsiUcoTrs_txt_motivo_consulta.f_informe += '\n' + utils.stringTrim(ds_info.getValue(i, 3));
					}
					
					if (ds_info.getValue(i, 1) == 3){
						
						if(utils.stringTrim(forms.AsiUcoTrs_txt_enfermedad_actual.f_informe).length == 0)
							forms.AsiUcoTrs_txt_enfermedad_actual.f_informe += utils.stringTrim(ds_info.getValue(i, 3));
						else
							forms.AsiUcoTrs_txt_enfermedad_actual.f_informe += '\n' + utils.stringTrim(ds_info.getValue(i, 3));
					}
						
					if (ds_info.getValue(i, 1) == 4){
						
						if(utils.stringTrim(forms.AsiUcoTrs_txt_antec_personal.f_informe).length == 0)
							forms.AsiUcoTrs_txt_antec_personal.f_informe += utils.stringTrim(ds_info.getValue(i, 3));
						else
							forms.AsiUcoTrs_txt_antec_personal.f_informe += '\n' + utils.stringTrim(ds_info.getValue(i, 3));
					}

					if (ds_info.getValue(i, 1) == 5){
						
						if(utils.stringTrim(forms.AsiUcoTrs_txt_antec_familiar.f_informe).length == 0)
							forms.AsiUcoTrs_txt_antec_familiar.f_informe += utils.stringTrim(ds_info.getValue(i, 3));
						else
							forms.AsiUcoTrs_txt_antec_familiar.f_informe += '\n' + utils.stringTrim(ds_info.getValue(i, 3));
					}

					if (ds_info.getValue(i, 1) == 6){
						
						if(utils.stringTrim(forms.AsiUcoTrs_txt_examen_clinico.f_informe).length == 0)
							forms.AsiUcoTrs_txt_examen_clinico.f_informe += utils.stringTrim(ds_info.getValue(i, 3));
						else
							forms.AsiUcoTrs_txt_examen_clinico.f_informe += '\n' + utils.stringTrim(ds_info.getValue(i, 3));
					}

					if (ds_info.getValue(i, 1) == 7){
						
						if(utils.stringTrim(forms.AsiUcoTrs_txt_examen_complementario.f_informe).length == 0)
							forms.AsiUcoTrs_txt_examen_complementario.f_informe += utils.stringTrim(ds_info.getValue(i, 3));
						else
							forms.AsiUcoTrs_txt_examen_complementario.f_informe += '\n' + utils.stringTrim(ds_info.getValue(i, 3));
					}

					if (ds_info.getValue(i, 1) == 8){
						
						if(utils.stringTrim(forms.AsiUcoTrs_txt_comentario_ingreso.f_informe).length == 0)
							forms.AsiUcoTrs_txt_comentario_ingreso.f_informe += utils.stringTrim(ds_info.getValue(i, 3));
						else
							forms.AsiUcoTrs_txt_comentario_ingreso.f_informe += '\n' + utils.stringTrim(ds_info.getValue(i, 3));
					}

					if (ds_info.getValue(i, 1) == 10){
						
						if(utils.stringTrim(forms.AsiUcoTrs_txt_plan_terapeutico.f_informe).length == 0)
							forms.AsiUcoTrs_txt_plan_terapeutico.f_informe += utils.stringTrim(ds_info.getValue(i, 3));
						else
							forms.AsiUcoTrs_txt_plan_terapeutico.f_informe += '\n' + utils.stringTrim(ds_info.getValue(i, 3));
					}

					if (ds_info.getValue(i, 1) == 11){
						
						if(utils.stringTrim(forms.AsiUcoTrs_txt_diagnostico_diferencial.f_informe).length == 0)
							forms.AsiUcoTrs_txt_diagnostico_diferencial.f_informe += utils.stringTrim(ds_info.getValue(i, 3));
						else
							forms.AsiUcoTrs_txt_diagnostico_diferencial.f_informe += '\n' + utils.stringTrim(ds_info.getValue(i, 3));
					}

					if (ds_info.getValue(i, 1) == 12){
						
						if(utils.stringTrim(forms.AsiUcoTrs_txt_mediacion_habitual.f_informe).length == 0)
							forms.AsiUcoTrs_txt_mediacion_habitual.f_informe += utils.stringTrim(ds_info.getValue(i, 3));
						else
							forms.AsiUcoTrs_txt_mediacion_habitual.f_informe += '\n' + utils.stringTrim(ds_info.getValue(i, 3));
					}
				}
			}
			
			if(asiucotrs_rel_hciuco.hiuimprimio==1){
				//forms.AsiUcoTrs_txt_alerta.elements.chk_alergia.enabled=false
				forms.AsiUcoTrs_txt_alerta.elements.shs_signoVitale.enabled=false
				//forms.AsiUcoTrs_txt_alerta.elements.txt_alergia.readOnly=true
				forms.AsiUcoTrs_txt_motivo_ingreso.elements.tea_texto.editable=false
				forms.AsiUcoTrs_txt_motivo_consulta.elements.tea_texto.editable=false
				forms.AsiUcoTrs_txt_enfermedad_actual.elements.tea_texto.editable=false
				forms.AsiUcoTrs_txt_antec_personal.elements.tea_texto.editable=false
				forms.AsiUcoTrs_txt_antec_familiar.elements.tea_texto.editable=false
				forms.AsiUcoTrs_txt_examen_clinico.elements.tea_texto.editable=false
				forms.AsiUcoTrs_txt_examen_complementario.elements.tea_texto.editable=false
				forms.AsiUcoTrs_txt_comentario_ingreso.elements.tea_texto.editable=false
				forms.AsiUcoTrs_txt_plan_terapeutico.elements.tea_texto.editable=false
				forms.AsiUcoTrs_txt_diagnostico_diferencial.elements.tea_texto.editable=false
				forms.AsiUcoTrs_txt_mediacion_habitual.elements.tea_texto.editable=false
				elements.grp_diagnostico.readOnly=true
				elements.grp_signovitale.readOnly=true
				elements.cbo_arm.readOnly=true
				elements.tab_informe_1.readOnly=true
			}else{
				//forms.AsiUcoTrs_txt_alerta.elements.chk_alergia.enabled=true
				forms.AsiUcoTrs_txt_alerta.elements.shs_signoVitale.enabled=true
				//forms.AsiUcoTrs_txt_alerta.elements.txt_alergia.readOnly=false
				forms.AsiUcoTrs_txt_motivo_ingreso.elements.tea_texto.editable=true
				forms.AsiUcoTrs_txt_motivo_consulta.elements.tea_texto.editable=true
				forms.AsiUcoTrs_txt_enfermedad_actual.elements.tea_texto.editable=true
				forms.AsiUcoTrs_txt_antec_personal.elements.tea_texto.editable=true
				forms.AsiUcoTrs_txt_antec_familiar.elements.tea_texto.editable=true
				forms.AsiUcoTrs_txt_examen_clinico.elements.tea_texto.editable=true
				forms.AsiUcoTrs_txt_examen_complementario.elements.tea_texto.editable=true
				forms.AsiUcoTrs_txt_comentario_ingreso.elements.tea_texto.editable=true
				forms.AsiUcoTrs_txt_plan_terapeutico.elements.tea_texto.editable=true
				forms.AsiUcoTrs_txt_diagnostico_diferencial.elements.tea_texto.editable=true
				forms.AsiUcoTrs_txt_mediacion_habitual.elements.tea_texto.editable=true
				elements.grp_diagnostico.readOnly=false
				elements.grp_signovitale.readOnly=false
				//elements.cbo_arm.readOnly=false
				elements.tab_informe_1.readOnly=false
			}
			var fechaIngreso = asiucotrs_rel_hciuco.hiufecha.toString();
			message += 'Historia de Ingreso a UCO Confeccionada el ' + fechaIngreso.substr(6, 2) + "/" + fechaIngreso.substr(4, 2) + "/" + fechaIngreso.substr(0, 4) + ' a las ' + convertNumberToHour_HHMM(asiucotrs_rel_hciuco.hiuhora) + ' Hrs.';
			visibleBody(true);
			elements.txt_tensionMax.requestFocus();
			$isDirty = false;
			//asiucotrs_rel_hciuco.hiicama = asiucotrs_rel_buscar_admision.adm_cama;
			//asiucotrs_rel_hciuco.hiihabi = asiucotrs_rel_buscar_admision.adm_habita;

		} 
		else {
			
			var info = "\n\nHistoria de Ingreso a UCO, aún no ha sido Confeccionada.";
			info += "\n¿Confirma paciente?";
			
			var res = globals.DIALOGS.showQuestionDialog('¡Atención!', info, 'Si', 'No');
			if (res == 'Si') {
				forms.AsiUcoTrs_txt_alerta.elements.shs_signoVitale.enabled=true
				//forms.AsiUcoTrs_txt_alerta.elements.txt_alergia.readOnly=false
				forms.AsiUcoTrs_txt_motivo_ingreso.elements.tea_texto.editable=true
				forms.AsiUcoTrs_txt_motivo_consulta.elements.tea_texto.editable=true
				forms.AsiUcoTrs_txt_enfermedad_actual.elements.tea_texto.editable=true
				forms.AsiUcoTrs_txt_antec_personal.elements.tea_texto.editable=true
				forms.AsiUcoTrs_txt_antec_familiar.elements.tea_texto.editable=true
				forms.AsiUcoTrs_txt_examen_clinico.elements.tea_texto.editable=true
				forms.AsiUcoTrs_txt_examen_complementario.elements.tea_texto.editable=true
				forms.AsiUcoTrs_txt_comentario_ingreso.elements.tea_texto.editable=true
				forms.AsiUcoTrs_txt_plan_terapeutico.elements.tea_texto.editable=true
				forms.AsiUcoTrs_txt_diagnostico_diferencial.elements.tea_texto.editable=true
				forms.AsiUcoTrs_txt_mediacion_habitual.elements.tea_texto.editable=true
				elements.grp_diagnostico.readOnly=false
				elements.grp_signovitale.readOnly=false
				//elements.cbo_arm.readOnly=false
				elements.tab_informe_1.readOnly=false
				globals.AsiUcoTrs_hiuHisCli = 0;
				globals.AsiUcoTrs_hiuFecha = 0;
				globals.AsiUcoTrs_hiuHora = 0;
				asiucotrs_rel_hciuco.newRecord();
				inicializarRelacionHciuco();
				globals.AsiUcoTrs_bloqueado=true;
				visibleBody(true);
				elements.txt_tensionMax.requestFocus();
			}
			else{
				globals.AsistFunciones_unLockRegisterTable(application.getSolutionName(),controller.getName(),asiucotrs_rel_buscar_admision.adm_histclin.toString(),globals.AsiUcoTrs_vLega.toString(),"Historia Clinica");
				limpiarForm();
			}
		}
		
		// las Alertas se cargan automaticamente al estar definida como relacion
		if (asiucotrs_rel_alerta.getSize() == 0) {

			asiucotrs_rel_alerta.newRecord();
			inicializarRelacionAlert();
		}
		else{
			
			forms.AsiUcoTrs_txt_alerta.f_alergia = ( asiucotrs_rel_alerta.aler_tipaler_1 == 1 ? asiucotrs_rel_alerta.aler_alergico : '');
			
			if(asiucotrs_rel_hciuco.hiuimprimio == 0 && asiucotrs_rel_alerta.getSize()>0){
				var encontre_alertas=0;
				for(var j=1;j<=25;j++){
					if(asiucotrs_rel_alerta['aler_tipaler_'+j]>0){
						encontre_alertas++
					}
				}
				if (encontre_alertas >0){
					message += "\nEl paciente tiene alertas asistenciales.";
				}
			}
		}
			
		if(utils.stringTrim(message).length > 0){
			
			globals.DIALOGS.showInfoDialog("Atención",message,"Aceptar");
		}
		
		elements.txt_tensionMax.requestFocus();	
	}else{
		limpiarForm();
	}
}

/**
 * @properties={typeid:24,uuid:"E376739F-7808-4AFC-9093-FEA8C08F8B17"}
 */
function isValidDatosPacienteInter() {

	var isValid = true;
	$messageErrorInter = '';
/*
	if($_isUserOSTEE){
		 if(asiucotrs_rel_buscar_admision.adm_obrsoc != 1132){
			 $messageErrorInter += "\nEl paciente NO corresponde a OSTEE.";
			 isValid = false;
		 }
	 }
	*/
	 if(asiucotrs_rel_buscar_admision.adm_fecaltaefec > 0){
		 $messageErrorInter += "\nEl paciente egresó del Sanatorio.";
		 isValid = false;
	 }
	 
	 if(asiucotrs_rel_buscar_habita.getSize() == 0){
		 $messageErrorInter += "\nEl paciente no esta en U.C.";
		 isValid = false;
	 }
	 else{
		 
		 if( asiucotrs_rel_buscar_habita.hab_sector != 28){
			 $messageErrorInter += "\nEl paciente no esta en U.C.";
			 isValid = false;
		 }
	 }
	 
	 if(!isValid){
		 globals.DIALOGS.showWarningDialog("Atención!", $messageErrorInter, "Aceptar")
	 }
	
	return isValid;
}

/**
 * TODO generated, please specify type and doc for the params
 * @param value
 *
 * @properties={typeid:24,uuid:"413EF735-20E7-4FDD-9026-5D9F5D82CA6C"}
 */
function editablePaciente(value) {
	elements.txt_paciente.editable = value;
	elements.btn_buscarPaciente.enabled = value;
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"5AC1FC25-E7CE-4E00-A202-CC9BE18C5491"}
 * @AllowToRunInFind
 */
function onAction_btnNuevo(event) {
	
	//enviarEmail('hector','546465465','ingreso a arm',20190101,2,1256)
	//globals.ReenvioMail_reenviarMail();
	
	var limpiar = false;
	if ($isDirty) {
		var respuesta = globals.DIALOGS.showQuestionDialog('¡Atención!', 'Existen datos que no han sido guardados. ¿Está seguro que desea continuar?', 'Si', 'No');
		if (respuesta == 'Si')
			limpiar = true;
	} else {
		limpiar = true;
	}

	if (limpiar) {
		if(asiucotrs_rel_buscar_admision.getSize() > 0){
			if(globals.AsiUcoTrs_bloqueado){
					globals.AsistFunciones_unLockRegisterTable(application.getSolutionName(),controller.getName(),asiucotrs_rel_buscar_admision.adm_histclin.toString(),globals.AsiUcoTrs_vLega.toString(),'Historia Clinica de Ingreso a UCO');
			}
		}
		limpiarForm();
	}
}

/**
 * @properties={typeid:24,uuid:"B920D0E8-6157-4588-9F4A-382A62D54F72"}
 */
function limpiarForm() {

	databaseManager.revertEditedRecords();

	inicializarForm();

	elements.txt_paciente.requestFocus();
	//elements.txt_paciente.requestFocus();
	$isDirty = false;

}

/**
 * @properties={typeid:24,uuid:"8FB98FFC-DE72-4CE5-B911-D3D695DF1B5A"}
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

	forms.AsiUcoTrs_txt_motivo_ingreso.f_informe = null;
	forms.AsiUcoTrs_txt_motivo_consulta.f_informe = null;
	forms.AsiUcoTrs_txt_enfermedad_actual.f_informe = null;
	forms.AsiUcoTrs_txt_antec_personal.f_informe = null;
	forms.AsiUcoTrs_txt_antec_familiar.f_informe = null;
	forms.AsiUcoTrs_txt_examen_clinico.f_informe = null;
	
	forms.AsiUcoTrs_txt_examen_complementario.f_informe = null;
	forms.AsiUcoTrs_txt_comentario_ingreso.f_informe = null;
	forms.AsiUcoTrs_txt_plan_terapeutico.f_informe = null;
	forms.AsiUcoTrs_txt_diagnostico_diferencial.f_informe = null;
	forms.AsiUcoTrs_txt_mediacion_habitual.f_informe = null;
	
	visibleBody(false);
	editablePaciente(true);
}

/**
 * 
 * @param {Boolean} value
 *
 * @properties={typeid:24,uuid:"3434DC53-9983-4E1B-891B-288054E74C94"}
 */
function visibleBody(value) {

	elements.tab_informe_1.visible = value;
	elements.tab_informe_2.visible = value;
	elements.shs_informe.visible = value;

	if (value) {
		elements.tab_informe_1.tabIndex = 1;
		elements.tab_informe_2.tabIndex = 1;
	}
	elements.grp_diagnostico.visible = value;
	elements.grp_signovitale.visible = value;
	elements.btn_buscarPatologia1.visible = value;
	elements.btn_buscarPatologia2.visible = value;
	elements.btn_buscarPatologia3.visible = value;
	
	elements.lbl_arm.visible = value;
	elements.cbo_arm.visible = value;
	elements.shs_arm.visible = value;
	// TODO elements.grp_solicitud.visible = value;
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"A8936D97-4D53-4925-A9D1-71D45D41D555"}
 * @AllowToRunInFind
 */
function onAction_btnGuardar(event) {

	var res = globals.DIALOGS.showQuestionDialog('¡Atención!', '¿ Esta seguro que desea guardar la historia clínica de ingreso a UCO ?', 'Si', 'No');
	if (res == 'Si') {

		if ($isDirty) {

			if (isValidDataForm()) {

				if (isValidData()) {
					
					var fecha = 0;
					var hora = 0;
					var nuevoHciint = false;
					
					if (asiucotrs_rel_hciuco.hiufecha == 0) {
						
						nuevoHciint = true;
						fecha = utils.stringToNumber(globals.CapturaFechaSistema());
						hora = utils.stringToNumber(globals.CapturaHoraSistema("HHMM"));

						// Completando cabecera
						asiucotrs_rel_hciuco.hiuhiscli = asiucotrs_rel_buscar_admision.adm_histclin;
						asiucotrs_rel_hciuco.hiufecha = fecha;
						asiucotrs_rel_hciuco.hiuhora = hora;

						asiucotrs_rel_hciuco.hiutipomed = globals.AsiUcoTrs_vTipoOperador;
						asiucotrs_rel_hciuco.hiulegajomed = globals.AsiUcoTrs_vLega;

						asiucotrs_rel_hciuco.hiufecha2 = fecha;
						asiucotrs_rel_hciuco.hiuhora2 = hora;

						asiucotrs_rel_hciuco.hiuapyno = utils.stringTrim(asiucotrs_rel_buscar_admision.adm_apelnom);
						asiucotrs_rel_hciuco.hiuhabi = asiucotrs_rel_buscar_admision.adm_habita;
						asiucotrs_rel_hciuco.hiucama = asiucotrs_rel_buscar_admision.adm_cama;
						asiucotrs_rel_hciuco.hiuutiliza = asiucotrs_rel_buscar_admision.adm_utiliza;
						asiucotrs_rel_hciuco.hiuespec = globals.AsiUcoTrs_vEspeMed;

						asiucotrs_rel_alerta.aler_histclin = asiucotrs_rel_buscar_admision.adm_histclin;
						asiucotrs_rel_alerta.aler_tipadmi = 0;
						asiucotrs_rel_alerta.aler_tipoper = globals.AsiUcoTrs_vTipoOperador;
						asiucotrs_rel_alerta.aler_codoper = globals.AsiUcoTrs_vLega;
						asiucotrs_rel_alerta.aler_alergico = ( asiucotrs_rel_alerta.aler_tipaler_1 == 1 ? forms.AsiUcoTrs_txt_alerta.f_alergia : ' ');
					}
					else{
						fecha = utils.stringToNumber(globals.CapturaFechaSistema());
						hora = utils.stringToNumber(globals.CapturaHoraSistema("HHMM"));
					}
					
					// completando referencia a informes
					if(asiucotrs_rel_hciuco.hiupat1 > 0)
						asiucotrs_rel_hciuco.hiuplandiagnostico = 1;
					
					asiucotrs_rel_hciuco.hiumotivodeingreso = utils.stringTrim(forms.AsiUcoTrs_txt_motivo_ingreso.f_informe).length > 0 ? 1 : 0;
					asiucotrs_rel_hciuco.hiudatossubjetivos = utils.stringTrim(forms.AsiUcoTrs_txt_motivo_consulta.f_informe).length > 0 ? 1 : 0;
					asiucotrs_rel_hciuco.hiuenfermedadactual = utils.stringTrim(forms.AsiUcoTrs_txt_enfermedad_actual.f_informe).length > 0 ? 1 : 0;
					asiucotrs_rel_hciuco.hiuantecedentespersonal = utils.stringTrim(forms.AsiUcoTrs_txt_antec_personal.f_informe).length > 0 ? 1 : 0;
					asiucotrs_rel_hciuco.hiuantecedentesheredo = utils.stringTrim(forms.AsiUcoTrs_txt_antec_familiar.f_informe).length > 0 ? 1 : 0;
					asiucotrs_rel_hciuco.hiuexamenclinico = utils.stringTrim(forms.AsiUcoTrs_txt_examen_clinico.f_informe).length > 0 ? 1 : 0;
					asiucotrs_rel_hciuco.hiuexamencomplementario = utils.stringTrim(forms.AsiUcoTrs_txt_examen_complementario.f_informe).length > 0 ? 1 : 0;
					asiucotrs_rel_hciuco.hiucomentarioingreso = utils.stringTrim(forms.AsiUcoTrs_txt_comentario_ingreso.f_informe).length > 0 ? 1 : 0;
					asiucotrs_rel_hciuco.hiuplanterapeutico = utils.stringTrim(forms.AsiUcoTrs_txt_plan_terapeutico.f_informe).length > 0 ? 1 : 0;
					asiucotrs_rel_hciuco.hiudiagnosdiferenciales = utils.stringTrim(forms.AsiUcoTrs_txt_diagnostico_diferencial.f_informe).length > 0 ? 1 : 0;
					asiucotrs_rel_hciuco.hiumedicacionhabitual = utils.stringTrim(forms.AsiUcoTrs_txt_mediacion_habitual.f_informe).length > 0 ? 1 : 0;
					
					// Actualizando base de datos
					var resultSave = databaseManager.saveData(asiucotrs_rel_hciuco.getRecord(1));
					if(resultSave && nuevoHciint){
						
						globals.AsiUcoTrs_hiuHisCli = asiucotrs_rel_buscar_admision.adm_histclin;
						globals.AsiUcoTrs_hiuFecha = fecha;
						globals.AsiUcoTrs_hiuHora = hora;
					}
					
					// Guardando informes
					var itemHistClin = asiucotrs_rel_buscar_admision.adm_histclin;
					var itemFecha = asiucotrs_rel_hciuco.hiufecha;
					var itemHora = asiucotrs_rel_hciuco.hiuhora;
					var itemGrupo = 2;

					// Informe Motivo de ingreso
					if (asiucotrs_rel_hciuco.hiumotivodeingreso == 1 && resultSave)
						resultSave = guardarTexto(itemHistClin, itemFecha, itemHora, itemGrupo, 1, forms.AsiUcoTrs_txt_motivo_ingreso.f_informe);

					// Datos Subj.que Motivan Consul.
					if (asiucotrs_rel_hciuco.hiudatossubjetivos == 1 && resultSave)
						resultSave = guardarTexto(itemHistClin, itemFecha, itemHora, itemGrupo, 2, forms.AsiUcoTrs_txt_motivo_consulta.f_informe);

					// Enfermedad Actual y sus Antec.
					if (asiucotrs_rel_hciuco.hiuenfermedadactual == 1 && resultSave)
						resultSave = guardarTexto(itemHistClin, itemFecha, itemHora, itemGrupo, 3, forms.AsiUcoTrs_txt_enfermedad_actual.f_informe);

					// Antecedentes Personales
					if (asiucotrs_rel_hciuco.hiuantecedentespersonal == 1 && resultSave)
						resultSave = guardarTexto(itemHistClin, itemFecha, itemHora, itemGrupo, 4, forms.AsiUcoTrs_txt_antec_personal.f_informe);

					// Antec.HeredoFamil.Importantes
					if (asiucotrs_rel_hciuco.hiuantecedentesheredo == 1 && resultSave)
						resultSave = guardarTexto(itemHistClin, itemFecha, itemHora, itemGrupo, 5, forms.AsiUcoTrs_txt_antec_familiar.f_informe);

					// Examen Clinico
					if (asiucotrs_rel_hciuco.hiuexamenclinico == 1 && resultSave)
						resultSave = guardarTexto(itemHistClin, itemFecha, itemHora, itemGrupo, 6, forms.AsiUcoTrs_txt_examen_clinico.f_informe);

					// Examenes Complementarios
					if (asiucotrs_rel_hciuco.hiuexamencomplementario == 1 && resultSave)
						resultSave = guardarTexto(itemHistClin, itemFecha, itemHora, itemGrupo, 7, forms.AsiUcoTrs_txt_examen_complementario.f_informe);

					// Comentario de Ingreso
					if (asiucotrs_rel_hciuco.hiucomentarioingreso == 1 && resultSave)
						resultSave = guardarTexto(itemHistClin, itemFecha, itemHora, itemGrupo, 8, forms.AsiUcoTrs_txt_comentario_ingreso.f_informe);

					// Diagnostico
					if (asiucotrs_rel_hciuco.hiuplanterapeutico == 1 && resultSave)
						resultSave = guardarTexto(itemHistClin, itemFecha, itemHora, itemGrupo, 10, forms.AsiUcoTrs_txt_plan_terapeutico.f_informe);

					// Diagnosticos Diferenciales
					if (asiucotrs_rel_hciuco.hiudiagnosdiferenciales == 1 && resultSave)
						resultSave = guardarTexto(itemHistClin, itemFecha, itemHora, itemGrupo, 11, forms.AsiUcoTrs_txt_diagnostico_diferencial.f_informe);

					// Medicacion Habitual
					if (asiucotrs_rel_hciuco.hiumedicacionhabitual == 1 && resultSave)
						resultSave = guardarTexto(itemHistClin, itemFecha, itemHora, itemGrupo, 12, forms.AsiUcoTrs_txt_mediacion_habitual.f_informe);

					// Guardando alertas
					if (asiucotrs_rel_alerta.aler_histclin == 0) {
						asiucotrs_rel_alerta.aler_histclin = asiucotrs_rel_buscar_admision.adm_histclin;
						asiucotrs_rel_alerta.aler_tipadmi = 0;
						asiucotrs_rel_alerta.aler_tipoper = globals.AsiUcoTrs_vTipoOperador;
						asiucotrs_rel_alerta.aler_codoper = globals.AsiUcoTrs_vLega;
						
					}
					else{
						asiucotrs_rel_alerta.aler_alergico = ( asiucotrs_rel_alerta.aler_tipaler_1 == 1 ? forms.AsiUcoTrs_txt_alerta.f_alergia : ' ');
					}
					databaseManager.startTransaction()
					resultSave = databaseManager.saveData(asiucotrs_rel_alerta.getRecord(1));
					
					if (resultSave == true) {

						databaseManager.commitTransaction();
						globals.DIALOGS.showInfoDialog("Resultado", "La historia clínica de ingreso a UCO se guardo correctamente.", "Aceptar");
						
						editablePaciente(false);	
						imprimir(asiucotrs_rel_hciuco.hiuhiscli, asiucotrs_rel_hciuco.hiufecha, asiucotrs_rel_hciuco.hiuhora);
						
						// ACC-ARM
						tratamientoARM();
						
						// Paciene en ARM : SI : 2
						
						if(f_arm == 2 && globals.AsiArmTrs_Mod_wGraboARM){
							regrabaMarcaARM()
							if(!$_wHayArm){
								
								grabarCodAuto();
							}
						}
						
						globals.AsistFunciones_unLockRegisterTable(application.getSolutionName(),controller.getName(),asiucotrs_rel_buscar_admision.adm_histclin.toString(),globals.AsiUcoTrs_vLega.toString(),"Historia Clinica");
						cerrarForm();
						//limpiarForm();
						//$isDirty = false;
						
					} else {
						var error1 = ''
						var error2 = ''
						var array = databaseManager.getFailedRecords()
						for (var i = 0; i < array.length; i++) {
							var record = array[i];
							var jstable = databaseManager.getTable(record);
							var tableSQLName = jstable.getSQLName();
							error1 = 'Error de Grabación en Tabla:' + tableSQLName + ' en server:' + jstable.getServerName() + ' falló la grabación. Avise urgente a Sistemas, por favor!'
							error2 = 'Error en grabación ' + record.exception;
							if (record.exception.getErrorCode() == ServoyException.RECORD_VALIDATION_FAILED) {
								// exception thrown in pre-insert/update/delete event method
								var thrown = record.exception.getMessage()
								//plugins.dialogs.showErrorDialog("Error de grabación","Record validation failed: " + thrown)
							}
						}

						databaseManager.rollbackTransaction()

						if (error1 != '') {
							globals.DIALOGS.showErrorDialog("Error de grabación", "Record validation failed: " + thrown)
							globals.DIALOGS.showErrorDialog("Error en grabacion de Histórico", error1, "Aceptar")
							globals.DIALOGS.showErrorDialog("Error en grabacion de Histórico", error2, "Aceptar")
						}
						globals.DIALOGS.showErrorDialog("Error en grabación", "Se ha producido un error de grabación. " + '\n' + "Avise a Sistemas, por favor.", "Aceptar")
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
 * @param {Number} fecha
 * @param {Number} hora
 * @param {Number} grupo
 * @param {Number} item
 * @param {String} texto
 *
 * @properties={typeid:24,uuid:"C6D3872B-685E-4F67-9B0C-D7D561DBF525"}
 */
function guardarTexto(histClin, fecha, hora, grupo, item, texto) {

	globals.AsiUcoTrs_txtHistClinica = histClin;
	globals.AsiUcoTrs_txtFecha = fecha;
	globals.AsiUcoTrs_txtHora = hora;
	globals.AsiUcoTrs_txtGrupo = grupo;
	globals.AsiUcoTrs_txtItem = item;
	
	if (asiucotrs_rel_buscar_hciucotxt.getSize() == 0) {

		asiucotrs_rel_buscar_hciucotxt.newRecord();
		asiucotrs_rel_buscar_hciucotxt.histclinica = histClin;
		asiucotrs_rel_buscar_hciucotxt.fecha = fecha;
		asiucotrs_rel_buscar_hciucotxt.hora = hora;
		asiucotrs_rel_buscar_hciucotxt.grupo = grupo;
		asiucotrs_rel_buscar_hciucotxt.item = item;

	}

	asiucotrs_rel_buscar_hciucotxt.linea = utils.stringTrim(texto);

	return databaseManager.saveData(asiucotrs_rel_buscar_hciucotxt.getRecord(1));

}

/**
 * @properties={typeid:24,uuid:"A8AA7488-0080-4E16-A413-8AE170E1C2CF"}
 */
function isValidDataForm() {
	var isValid = true;
	var messageError = "No ha sido posible guardar la historia de ingreso a UCO. Corrija los siguientes errores y vuelva a intentar."		//var borderError = 'LineBorder,1,#ff0000';
	
	if(asiucotrs_rel_hciuco.hiuimprimio == 1){
		isValid = false
		messageError = "No ha sido posible regrabar la historia de ingreso a UCO. Ya fue impresa";
		globals.DIALOGS.showWarningDialog("¡Atención!", messageError, "Aceptar")
		return isValid
	}
		
	if (f_histClinUnica == null) {
		//elements.txt_paciente.border = borderError;
		messageError += "\nDebe ingresar paciente.";
		isValid = false;
	}

	if (asiucotrs_rel_hciuco.hiutensionmax < 1) {
		//elements.txt_paciente.border = borderError;
		messageError += "\nDebe ingresar Tensión Arterial Máxima.";
		isValid = false;
	}

	if (asiucotrs_rel_hciuco.hiutensionmin < 1) {
		//elements.txt_paciente.border = borderError;
		messageError += "\nDebe ingresar Tensión Arterial Mínima.";
		isValid = false;
	}
	
	if (asiucotrs_rel_hciuco.hiutensionmin > asiucotrs_rel_hciuco.hiutensionmax) {
		//elements.txt_paciente.border = borderError;
		messageError += "\n La Tensión Arterial Mínima debe ser menor o igual a la Máxima.";
		isValid = false;
	}
	
	if (asiucotrs_rel_hciuco.hiufrecuenciacar < 1) {
		//elements.txt_paciente.border = borderError;
		messageError += "\nDebe ingresar Frecuencia del Cardíaca.";
		isValid = false;
	}
	
	if (asiucotrs_rel_hciuco.hiufrecuenciares < 1) {
		//elements.txt_paciente.border = borderError;
		messageError += "\nDebe ingresar Frecuencia del Respiratoria.";
		isValid = false;
	}

	if (asiucotrs_rel_hciuco.hiutipotemperatura < 1) {
		//elements.txt_paciente.border = borderError;
		messageError += "\nDebe seleccionar Tipo Temperatura.";
		isValid = false;
	}

	if (asiucotrs_rel_hciuco.hiutemperatura < 1) {
		//elements.txt_paciente.border = borderError;
		messageError += "\nDebe ingresar valor de Temperatura.";
		isValid = false;
	}

	// validando longitud de texto
	var isValidText = true;
	var titulo = "";
	var tabIndex = 0;
	var tab = 1;
	
	if (isValidText) {
		//tieneAlertas()
		if(asiucotrs_rel_alerta.aler_tipaler_1 == 1 && utils.stringTrim(forms.AsiUcoTrs_txt_alerta.f_alergia).length == 0){
			
			//elements.txt_paciente.border = borderError;
			tabIndex = 1;
			titulo += elements.tab_informe_1.getTabTextAt(tabIndex);
			
			messageError += "\nDebe ingresar detalle de la alergia.";
			isValidText = false;
		}
		else{
			
			if(asiucotrs_rel_alerta.aler_tipaler_1 == 1 && utils.stringTrim(forms.AsiUcoTrs_txt_alerta.f_alergia).length > 50){
				
				//elements.txt_paciente.border = borderError;
				tabIndex = 1;
				titulo += elements.tab_informe_1.getTabTextAt(tabIndex);
				
				messageError += "\nEl detalle de alergia debe ser menor a 50 caracteres.";
				isValidText = false;	
			}
		}
	}

	if (isValidText && utils.stringTrim(forms.AsiUcoTrs_txt_motivo_ingreso.f_informe).length < 1) {
		//elements.txt_paciente.border = borderError;
		tabIndex = 2;
		titulo += elements.tab_informe_1.getTabTextAt(tabIndex);
		isValidText = false;
	}

	if (isValidText && utils.stringTrim(forms.AsiUcoTrs_txt_motivo_consulta.f_informe).length < 1) {
		//elements.txt_paciente.border = borderError;
		tabIndex = 3;
		titulo += elements.tab_informe_1.getTabTextAt(tabIndex);
		isValidText = false;
	}

	if (isValidText && utils.stringTrim(forms.AsiUcoTrs_txt_enfermedad_actual.f_informe).length < 1) {
		//elements.txt_paciente.border = borderError;
		tabIndex = 4;
		titulo += elements.tab_informe_1.getTabTextAt(tabIndex);
		isValidText = false;
	}

	if (isValidText && utils.stringTrim(forms.AsiUcoTrs_txt_antec_personal.f_informe).length < 1) {
		//elements.txt_paciente.border = borderError;
		tabIndex = 5;
		titulo += elements.tab_informe_1.getTabTextAt(tabIndex);
		isValidText = false;
	}

	if (isValidText && utils.stringTrim(forms.AsiUcoTrs_txt_antec_familiar.f_informe).length < 1) {
		//elements.txt_paciente.border = borderError;
		tabIndex = 6;
		titulo += elements.tab_informe_1.getTabTextAt(tabIndex);
		isValidText = false;
	}

	if (isValidText && utils.stringTrim(forms.AsiUcoTrs_txt_examen_clinico.f_informe).length < 1) {
		//elements.txt_paciente.border = borderError;
		tab = 2;
		tabIndex = 1;
		titulo += elements.tab_informe_2.getTabTextAt(tabIndex);
		isValidText = false;
	}

	if (isValidText && utils.stringTrim(forms.AsiUcoTrs_txt_examen_complementario.f_informe).length < 1) {
		//elements.txt_paciente.border = borderError;
		tab = 2;
		tabIndex = 2;
		titulo += elements.tab_informe_2.getTabTextAt(tabIndex);
		isValidText = false;
	}

	if (isValidText && utils.stringTrim(forms.AsiUcoTrs_txt_comentario_ingreso.f_informe).length < 1) {
		//elements.txt_paciente.border = borderError;
		tab = 2;
		tabIndex = 3;
		titulo += elements.tab_informe_2.getTabTextAt(tabIndex);
		isValidText = false;
	}

	if (isValidText && utils.stringTrim(forms.AsiUcoTrs_txt_plan_terapeutico.f_informe).length < 1) {
		//elements.txt_paciente.border = borderError;
		tab = 2;
		tabIndex = 4;
		titulo += elements.tab_informe_2.getTabTextAt(tabIndex);
		isValidText = false;
	}

	if (isValidText && utils.stringTrim(forms.AsiUcoTrs_txt_diagnostico_diferencial.f_informe).length < 1) {
		//elements.txt_paciente.border = borderError;
		tab = 2;
		tabIndex = 5;
		titulo += elements.tab_informe_2.getTabTextAt(tabIndex);
		isValidText = false;
	}

	if (isValidText && utils.stringTrim(forms.AsiUcoTrs_txt_mediacion_habitual.f_informe).length < 1) {
		//elements.txt_paciente.border = borderError;
		tab = 2;
		tabIndex = 6;
		titulo += elements.tab_informe_2.getTabTextAt(tabIndex);
		isValidText = false;
	}
	
	if (!isValidText) {
		
		if (tab == 1 && tabIndex == 1){
			//messageError += "\nInforme : " + titulo + ". Debe seleccionar al menos un alerta.";
		}
		else
			messageError += "\nInforme : " + titulo + ". Debe ingresar 17 caracteres como mínimo.";
		
		if(tab == 1)
			forms.AsiUcoTrs_frm_hciuco.elements.tab_informe_1.tabIndex = tabIndex;
		
		if(tab == 2)
			forms.AsiUcoTrs_frm_hciuco.elements.tab_informe_2.tabIndex = tabIndex;
		
		isValid = false;
	}
	
	/* bloqueado hasta solucionar tablas de ARM en Relativity del sc3*/
	if (isValid) {
		
		if(f_arm == 0){
			
			//elements.txt_paciente.border = borderError;
			messageError += "\nDebe seleccionar paciente en ARM.";
			isValid = false;
			elements.cbo_arm.requestFocus();
		}
	}
	
	if (!isValid) {
		globals.DIALOGS.showWarningDialog("¡Atención!", messageError, "Aceptar")
	}

	return isValid;
}

/**
 * @properties={typeid:24,uuid:"3FB8072C-8B47-4BF3-9AD5-7E30FD08AD6D"}
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
 * @properties={typeid:24,uuid:"2980753F-9F62-43A5-B2FC-42669FF3BD6A"}
 */
function onAction_btnCerrar(event) {

	if ($isDirty) {
		if (globals.DIALOGS.showQuestionDialog('¡Atención!', 'Existen datos que no han sido guardados. ¿Está seguro que desea continuar?', 'Si', 'No') == 'Si')
			f_cerrarForm = true;
	} else {
		f_cerrarForm = true;
	}

	if (f_cerrarForm) {
		
		cerrarForm();
	}
}

/**
 * @properties={typeid:24,uuid:"406EEF96-7A98-4D52-881C-D9499DB5977F"}
 */
function cerrarForm(){
	
	f_cerrarForm = true;
	if(asiucotrs_rel_buscar_admision.getSize() > 0){
		if(globals.AsiUcoTrs_bloqueado){
			globals.AsistFunciones_unLockRegisterTable(application.getSolutionName(),controller.getName(),asiucotrs_rel_buscar_admision.adm_histclin.toString(),globals.AsiUcoTrs_vLega.toString(),"Historia Clinica");
		}
	}
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
 * @properties={typeid:24,uuid:"C0F4265D-878B-4099-91CC-A14988389B40"}
 */
function onHide_cerrarForm(event) {
	
	if(!f_cerrarForm)
		globals.DIALOGS.showInfoDialog("Atención","Para cerrar el programa debe presionar el boton Salir.","Aceptar")
	return f_cerrarForm;
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"16F65F7E-5049-4106-8437-3690AF610443"}
 */
function onAction_buscarPatologia_1(event) {

	globals.AsiUcoTrs_patDataProvider = 'hiupat1';
	openBuscarPatologia();

}

/**
 * @properties={typeid:24,uuid:"0A13F0B7-6330-4548-B18D-C1B1ADDA3686"}
 */
function openBuscarPatologia() {

	var win2 = application.createWindow("seleccion_patologia", JSWindow.MODAL_DIALOG);
	win2.title = 'Búsqueda de Diagnóstico';
	win2.resizable = false;
	win2.show(forms.AsiUcoTrs_dlg_buscar_patologia);

}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"7C01FDCF-4575-4DFD-90B6-9142512E3620"}
 */
function onAction_buscarPatologia_2(event) {

	globals.AsiUcoTrs_patDataProvider = 'hiupat2';
	openBuscarPatologia();
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"F80777EC-9DBB-4477-BF61-31D60002EF80"}
 */
function onAction_buscarPatologia_3(event) {

	globals.AsiUcoTrs_patDataProvider = 'hiupat3';
	openBuscarPatologia();
}

/**
 * @properties={typeid:24,uuid:"35DC3FBF-2B9E-40D1-94FD-EDE53E3C031C"}
 */
function inicializarRelacionHciuco() {

	asiucotrs_rel_hciuco.hiufecha = 0;
	asiucotrs_rel_hciuco.hiuhiscli = 0;
	asiucotrs_rel_hciuco.hiuhora = 0;
	asiucotrs_rel_hciuco.hiuabdomenauscultacion = 0;
	asiucotrs_rel_hciuco.hiuabdomencomentarios = 0;
	asiucotrs_rel_hciuco.hiuabdomeninspeccion = 0;
	asiucotrs_rel_hciuco.hiuabdomenpalpacion = 0;
	asiucotrs_rel_hciuco.hiuabdomenpercusion = 0;
	asiucotrs_rel_hciuco.hiuantecedentesheredo = 0;
	asiucotrs_rel_hciuco.hiuantecedentespersonal = 0;
	asiucotrs_rel_hciuco.hiuaprespauscultacion = 0;
	asiucotrs_rel_hciuco.hiuaprespcomentarios = 0;
	asiucotrs_rel_hciuco.hiuaprespinspeccion = 0;
	asiucotrs_rel_hciuco.hiuapresppalpacion = 0;
	asiucotrs_rel_hciuco.hiuapresptiporesp = 0;
	asiucotrs_rel_hciuco.hiuapresptipotorax = 0;
	asiucotrs_rel_hciuco.hiuapyno = ' ';
	asiucotrs_rel_hciuco.hiucabcueboca = 0;
	asiucotrs_rel_hciuco.hiucabcuecarotidas = 0;
	asiucotrs_rel_hciuco.hiucabcuefosasnasales = 0;
	asiucotrs_rel_hciuco.hiucabcueinguryugular = 0;
	asiucotrs_rel_hciuco.hiucabcuemucosa = 0;
	asiucotrs_rel_hciuco.hiucama = ' ';
	asiucotrs_rel_hciuco.hiucardiocomentarios = 0;
	asiucotrs_rel_hciuco.hiucardiofrotes = 0;
	asiucotrs_rel_hciuco.hiucardiopvc = 0;
	asiucotrs_rel_hciuco.hiucardior1 = 0;
	asiucotrs_rel_hciuco.hiucardior2 = 0;
	asiucotrs_rel_hciuco.hiucardior3 = 0;
	asiucotrs_rel_hciuco.hiucardior4 = 0;
	asiucotrs_rel_hciuco.hiucardiosoplos = 0;
	asiucotrs_rel_hciuco.hiucomentarioingreso = 0;
	asiucotrs_rel_hciuco.hiudatossubjetivos = 0;
	asiucotrs_rel_hciuco.hiudiagnosdiferenciales = 0;
	asiucotrs_rel_hciuco.hiuecg = 0;
	asiucotrs_rel_hciuco.hiuenfermedadactual = 0;
	asiucotrs_rel_hciuco.hiuespec = 0;
	asiucotrs_rel_hciuco.hiuexamenclinico = 0;
	asiucotrs_rel_hciuco.hiuexamencomplementario = 0;
	asiucotrs_rel_hciuco.hiuexamenfisico = 0;
	asiucotrs_rel_hciuco.hiufecha2 = 0;
	asiucotrs_rel_hciuco.hiufrecuenciacar = 0;
	asiucotrs_rel_hciuco.hiufrecuenciares = 0;
	asiucotrs_rel_hciuco.hiuhabi = 0;
	asiucotrs_rel_hciuco.hiuhora2 = 0;
	asiucotrs_rel_hciuco.hiuimprimio = 0;
	asiucotrs_rel_hciuco.hiujustificauco = 0;
	asiucotrs_rel_hciuco.hiulegajomed = 0;
	asiucotrs_rel_hciuco.hiumedicacionhabitual = 0;
	asiucotrs_rel_hciuco.hiumotivodeingreso = 0;
	asiucotrs_rel_hciuco.hiuneurolocomentarios = 0;
	asiucotrs_rel_hciuco.hiuneuroloconciencia = 0;
	asiucotrs_rel_hciuco.hiuneurolomotilidadvol = 0;
	asiucotrs_rel_hciuco.hiuneuroloparescran = 0;
	asiucotrs_rel_hciuco.hiuneuroloreflejososteo = 0;
	asiucotrs_rel_hciuco.hiuneurolosensibilidad = 0;
	asiucotrs_rel_hciuco.hiuneurolosignosmeninge = 0;
	asiucotrs_rel_hciuco.hiuotrosestudios = 0;
	asiucotrs_rel_hciuco.hiupat1 = 0;
	asiucotrs_rel_hciuco.hiupat2 = 0;
	asiucotrs_rel_hciuco.hiupat3 = 0;
	asiucotrs_rel_hciuco.hiupiel = 0;
	asiucotrs_rel_hciuco.hiuplandiagnostico = 0;
	asiucotrs_rel_hciuco.hiuplanterapeutico = 0;
	asiucotrs_rel_hciuco.hiupulsoamplitud = 0;
	asiucotrs_rel_hciuco.hiupulsofrecuencia = 0;
	asiucotrs_rel_hciuco.hiupulsointensidad = 0;
	asiucotrs_rel_hciuco.hiupulsoritmo = 0;
	asiucotrs_rel_hciuco.hiupulsotension = 0;
	asiucotrs_rel_hciuco.hiurxtorax = 0;
	asiucotrs_rel_hciuco.hiutemperatura = 0;
	asiucotrs_rel_hciuco.hiutensionmax = 0;
	asiucotrs_rel_hciuco.hiutensionmin = 0;
	asiucotrs_rel_hciuco.hiutipomed = 0;
	asiucotrs_rel_hciuco.hiutipotemperatura = 0;
	asiucotrs_rel_hciuco.hiuutiliza = 0;
}

/**
 * @properties={typeid:24,uuid:"3B6A52D1-8706-4FE1-8CA6-2721EB9C17A4"}
 */
function inicializarRelacionAlert() {

	asiucotrs_rel_alerta.aler_histclin = 0;
	asiucotrs_rel_alerta.aler_tipadmi = 0;
	asiucotrs_rel_alerta.aler_alergico = ' ';
	asiucotrs_rel_alerta.aler_codoper = 0;
	asiucotrs_rel_alerta.aler_filler = ' ';
	asiucotrs_rel_alerta.aler_tipaler_1 = 0;
	asiucotrs_rel_alerta.aler_tipaler_10 = 0;
	asiucotrs_rel_alerta.aler_tipaler_11 = 0;
	asiucotrs_rel_alerta.aler_tipaler_12 = 0;
	asiucotrs_rel_alerta.aler_tipaler_13 = 0;
	asiucotrs_rel_alerta.aler_tipaler_14 = 0;
	asiucotrs_rel_alerta.aler_tipaler_15 = 0;
	asiucotrs_rel_alerta.aler_tipaler_16 = 0;
	asiucotrs_rel_alerta.aler_tipaler_17 = 0;
	asiucotrs_rel_alerta.aler_tipaler_18 = 0;
	asiucotrs_rel_alerta.aler_tipaler_19 = 0;
	asiucotrs_rel_alerta.aler_tipaler_2 = 0;
	asiucotrs_rel_alerta.aler_tipaler_20 = 0;
	asiucotrs_rel_alerta.aler_tipaler_21 = 0;
	asiucotrs_rel_alerta.aler_tipaler_22 = 0;
	asiucotrs_rel_alerta.aler_tipaler_23 = 0;
	asiucotrs_rel_alerta.aler_tipaler_24 = 0;
	asiucotrs_rel_alerta.aler_tipaler_25 = 0;
	asiucotrs_rel_alerta.aler_tipaler_3 = 0;
	asiucotrs_rel_alerta.aler_tipaler_4 = 0;
	asiucotrs_rel_alerta.aler_tipaler_5 = 0;
	asiucotrs_rel_alerta.aler_tipaler_6 = 0;
	asiucotrs_rel_alerta.aler_tipaler_7 = 0;
	asiucotrs_rel_alerta.aler_tipaler_8 = 0;
	asiucotrs_rel_alerta.aler_tipaler_9 = 0;
	asiucotrs_rel_alerta.aler_tipoper = 0;

}

/**
 * @properties={typeid:24,uuid:"5F407FBC-B7F3-4608-A617-774892984921"}
 */
function tieneAlertas() {

	var value = false;

	var dataprovidersNames = asiucotrs_rel_alerta.alldataproviders;
	for (var i = 0; i < dataprovidersNames.length; i++) {
		if (asiucotrs_rel_alerta[dataprovidersNames[i]] == 1) {
			value = true;
			break;
		}
	}

	return value;
}

/**
 * TODO generated, please specify type and doc for the params
 * @param {Date} Fecha_Desde
 * @param {Date} Fecha_Hasta
 *
 * @properties={typeid:24,uuid:"46D711E9-B785-447D-AFFE-41FE76CF7ECD"}
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
 * @properties={typeid:24,uuid:"A44AF5D8-5EDA-4655-AE26-C78F9156C290"}
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
 * Callback method when the user changes tab in a tab panel or divider position in split pane.
 *
 * @param {Number} previousIndex index of tab shown before the change
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"503FD2A8-E24C-4454-9C39-C6D0A3A9FEA0"}
 */
function onTabChange_informe_1(previousIndex, event) {

	//if($_countChange == 1)
	//validarInforme(previousIndex,elements.tab_informe_1.getName(),elements.tab_informe_1.getTabFormNameAt(previousIndex),elements.tab_informe_1.getTabTextAt(previousIndex));
	elements.tab_informe_1.setTabFGColorAt(previousIndex, '#000000');
	elements.tab_informe_1.setTabFGColorAt(elements.tab_informe_1.tabIndex, '#3336ff');
	
	if(elements.tab_informe_1.tabIndex == 1)
		forms.AsiUcoTrs_txt_alerta.elements.chk_alergia.requestFocus();
	
	if(elements.tab_informe_1.tabIndex == 2)
		forms.AsiUcoTrs_txt_motivo_ingreso.elements.tea_texto.requestFocus();
	
	if(elements.tab_informe_1.tabIndex == 3)
		forms.AsiUcoTrs_txt_motivo_consulta.elements.tea_texto.requestFocus();
	
	if(elements.tab_informe_1.tabIndex == 4)
		forms.AsiUcoTrs_txt_enfermedad_actual.elements.tea_texto.requestFocus();
	
	if(elements.tab_informe_1.tabIndex == 5)
		forms.AsiUcoTrs_txt_antec_personal.elements.tea_texto.requestFocus();
	
	if(elements.tab_informe_1.tabIndex == 6)
		forms.AsiUcoTrs_txt_antec_familiar.elements.tea_texto.requestFocus();
}

/**
 * Callback method when the user changes tab in a tab panel or divider position in split pane.
 *
 * @param {Number} previousIndex index of tab shown before the change
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"DFCC62DB-3B6C-4F81-B821-EA7FB7322035"}
 */
function onTabChange_informe_2(previousIndex, event) {

	//if($_countChange == 1)
	//validarInforme(previousIndex,elements.tab_informe_2.getName(),elements.tab_informe_2.getTabFormNameAt(previousIndex),elements.tab_informe_2.getTabTextAt(previousIndex));

	elements.tab_informe_2.setTabFGColorAt(previousIndex, '#000000');
	elements.tab_informe_2.setTabFGColorAt(elements.tab_informe_2.tabIndex, '#3336ff');
	
	if(elements.tab_informe_2.tabIndex == 1)
		forms.AsiUcoTrs_txt_examen_clinico.elements.tea_texto.requestFocus();
	
	if(elements.tab_informe_2.tabIndex == 2)
		forms.AsiUcoTrs_txt_examen_complementario.elements.tea_texto.requestFocus();
	
	if(elements.tab_informe_2.tabIndex == 3)
		forms.AsiUcoTrs_txt_comentario_ingreso.elements.tea_texto.requestFocus();
	
	if(elements.tab_informe_2.tabIndex == 4)
		forms.AsiUcoTrs_txt_plan_terapeutico.elements.tea_texto.requestFocus();
	
	if(elements.tab_informe_2.tabIndex == 5)
		forms.AsiUcoTrs_txt_diagnostico_diferencial.elements.tea_texto.requestFocus();
	
	if(elements.tab_informe_2.tabIndex == 6)
		forms.AsiUcoTrs_txt_mediacion_habitual.elements.tea_texto.requestFocus();
}

/**
 * 
 * @param {Number} histClin
 * @param {Number} fecha
 * @param {Number} hora
 *
 * @properties={typeid:24,uuid:"B1FEBA77-9A90-48B3-973F-9B08667807BE"}
 */
function imprimir(histClin, fecha, hora) {
	
	var texto = '';
	if(asiucotrs_rel_hciuco.hiuimprimio == 0)
		texto = '¿Imprime Hoja de Evolucion Medica Definitiva?' 
	else
		texto = '¿Desea Reimprimir la Historia Clínica de Ingreso a UCO?';
	
	var print = globals.DIALOGS.showQuestionDialog('¡Atención!', texto, 'Si', 'No');
	if (print == 'Si') {
		
		// 0 : imprime hoja 1 : genera PDF 
		var absoluteFileName = globals.AsiUcoMod_Rep_imprimir(histClin,fecha,hora,0,false);
		//globals.VisualizarPDF_URL(null,absoluteFileName);
		
		if(asiucotrs_rel_hciuco.hiuimprimio == 0){
			
			asiucotrs_rel_hciuco.hiuimprimio = 1;
			databaseManager.saveData(asiucotrs_rel_hciuco.getRecord(1));
		}
	}
	
	//forms.Hcipiso_print.controller.setPageFormat(210,297,10,10,10,10,1,0);
	//forms.Hcipiso_print.controller.print(false,false);
	/*
	 var win = application.createWindow("impri_paciente",JSWindow.MODAL_DIALOG);
	 win.title = "Impresion de Hitória Clínica";
	 win.resizable = false;
	 win.show(forms.Hcipiso_print)
	 */
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
 * @properties={typeid:24,uuid:"4513B932-EB8C-4AE9-B7A2-952774C5C5E7"}
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
 * @properties={typeid:24,uuid:"A398B3EE-EE78-4C60-99AE-3D577FDD5D2E"}
 */
function onDataChange_cboSelect(oldValue, newValue, event) {
	// TODO Auto-generated method stub
	$isDirty = true;
	elements.txt_temperatura.requestFocus();
	return true
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"531B79E8-214F-4E11-A53B-376E4A367D9C"}
 */
function onAction_imprimir(event) {
	
	if (asiucotrs_rel_hciuco.hiufecha > 0) {
		
		if(!$isDirty){
			
			imprimir(asiucotrs_rel_hciuco.hiuhiscli,asiucotrs_rel_hciuco.hiufecha,asiucotrs_rel_hciuco.hiuhora);
		}
		else
			globals.DIALOGS.showInfoDialog("Atención", "No ha sido posible imprimir. Existen modificaciones pendientes para guardar.", "Aceptar")
	} else
		globals.DIALOGS.showWarningDialog("Atención!", "No existe una hitória clínica para imprimir.", "Aceptar");
}

/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"075A3EAD-4D48-4FC7-8226-CF453924CC9D"}
 */
function onLoad_inicializarForm(event) {
	
	initFormFirstShow();
}

/**
 * @properties={typeid:24,uuid:"714E8154-D271-4446-9443-7BA380EAD88C"}
 */
function initFormFirstShow(){
	
	inicializarForm();
	f_medico = utils.stringTrim(globals.AsiUcoTrs_vOperador);
	
	if(globals.AsiUcoTrs_vTipoOperador == 0){
		
		var ds_personal = databaseManager.getDataSetByQuery('maestros','select per_espemed from tbc_personal where per_legajo = ' + globals.AsiUcoTrs_vLega,null,-1);
		globals.AsiUcoTrs_vEspeMed = ds_personal.getMaxRowIndex() > 0 ? ds_personal.getValue(1,1) : 0;
	}	
	else{
		
		var ds_medicos = databaseManager.getDataSetByQuery('maestros','select med_espemed from tbc_medicos where med_codigo = ' + globals.AsiUcoTrs_vLega,null,-1);
		globals.AsiUcoTrs_vEspeMed = ds_medicos.getMaxRowIndex() > 0 ? ds_medicos.getValue(1,1) : 0;
	}
}

/**
 * 
 * @param {Number} value
 *
 * @properties={typeid:24,uuid:"0450D585-E577-451B-9800-985AA779A3E4"}
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

/**
 * @properties={typeid:24,uuid:"78FD293D-624C-474F-8898-AAA598701AE0"}
 */
function tratamientoARM() {
	
	globals.AsiArmTrs_Mod_wGraboARM = false;
	$_wHayArm = false;
	var wHoraArm = 0;
	var wFecinArm = 0;
	
	// BUSCO-TIENE-ARM
	var sqlArm = "select ArmFecing,ArmHora,ArmFecegr from tbc_arm_dia_noinva"
			   + " where ArmHcli = " + asiucotrs_rel_buscar_admision.adm_histclin
			   + " order by ArmFech desc, ArmHora desc";
			   
	var dsArm = databaseManager.getDataSetByQuery('asistencial',sqlArm,null,-1);
	if(dsArm.getMaxRowIndex() > 0){
		
		$_wHayArm = true;
		if(dsArm.getValue(1,3) == 0){
		
			wFecinArm = dsArm.getValue(1,1);		
			wHoraArm = dsArm.getValue(1,2);
		}
	}
	
	globals.AsiArmTrs_Mod_wNumLega = globals.AsiUcoTrs_vLega;
	globals.AsiArmTrs_Mod_wTipLega = globals.AsiUcoTrs_vTipoOperador;
	
	// Existe ARM
	if(wFecinArm != 0){
		
		if(f_arm == 1){
			
			// Paciente en ARM : NO : 1
			globals.DIALOGS.showInfoDialog("Resultado", "Paciente en ARM.\nDebe generar Informe y Dejar Respirador.", "Aceptar");
		}
		else{
			
			// Paciente en ARM : SI : 2
		}
		
		globals.AsiArmTrs_Mod_wHistClin = asiucotrs_rel_buscar_admision.adm_histclin;
		globals.AsiArmTrs_Mod_wFecha = utils.stringToNumber(globals.CapturaFechaSistema());
		globals.AsiArmTrs_Mod_wHora = wHoraArm;
		openARM();
		
	}
	else{
		
		// Paciene en ARM : SI : 2
		if(f_arm == 2){
			
			globals.AsiArmTrs_Mod_wHistClin = asiucotrs_rel_buscar_admision.adm_histclin;
			globals.AsiArmTrs_Mod_wFecha = utils.stringToNumber(globals.CapturaFechaSistema());
			globals.AsiArmTrs_Mod_wHora = utils.stringToNumber(globals.CapturaHoraSistema("HHMM"));
			
			openARM();
		}
	}	   
}

/**
 * @properties={typeid:24,uuid:"2489A9C7-F51C-420D-871D-9E636CD7D10F"}
 */
function openARM() {
	
	var formName = 'AsiArmTrs_Mod_frm_arm_dia';
	var myform = solutionModel.getForm(formName);
	
	if(myform != null){
		
		
		var bloqueado = globals.AsistFunciones_isRegisterTableLocked(application.getSolutionName(),formName,asiucotrs_rel_buscar_admision.adm_histclin.toString(),globals.AsiUcoTrs_vLega.toString(),"Asistencia Respiratoria Mecanica");
		if(!bloqueado){
			
			globals.AsiArmTrs_Mod_wPaciente = f_paciente;
			var win2 = application.createWindow("tratamiento_ARM", JSWindow.MODAL_DIALOG);
			win2.title = 'Asistencia Respiratoria Mecanica';
			win2.resizable = false;
			win2.show(forms[formName]);
		}
	}
	else
		globals.DIALOGS.showInfoDialog("Resultado", "No existe el formulario de ARM.", "Aceptar");
	
}

/**
 * @properties={typeid:24,uuid:"A9BD5939-6CC8-4460-B2D7-8F6CDE1B1D0A"}
 */
function grabarCodAuto() {
	
	var camaActual = 0;
	
	var sql = "select Cam_UtilActual_1,Cam_UtilActual_2,Cam_UtilActual_3,Cam_UtilActual_4,Cam_UtilActual_5"
		    + ",Cam_UtilAlterna_1,Cam_UtilAlterna_2,Cam_UtilAlterna_3,Cam_UtilAlterna_4,Cam_UtilAlterna_5,Cam_UtilStand"
			+ " from tbc_camas where Cam_Habi = " + asiucotrs_rel_buscar_admision.adm_habita + " and cam_Cama = '" + asiucotrs_rel_buscar_admision.adm_cama + "'";
	var ds = databaseManager.getDataSetByQuery('maestros',sql,null,-1);
	
	if(ds.getMaxRowIndex() > 0){
		
		//Cam_UtilActual_1
		if(ds.getValue(1,1) == 1)
			camaActual = ds.getValue(1,6);//Cam_UtilAlterna_1
		//Cam_UtilActual_2
		if(ds.getValue(1,2) == 1)
			camaActual = ds.getValue(1,7);//Cam_UtilAlterna_2
		//Cam_UtilActual_3
		if(ds.getValue(1,3) == 1)
			camaActual = ds.getValue(1,8);//Cam_UtilAlterna_3
		//Cam_UtilActual_4
		if(ds.getValue(1,4) == 1)
			camaActual = ds.getValue(1,9);//Cam_UtilAlterna_4
		//Cam_UtilActual_5
		if(ds.getValue(1,5) == 1)
			camaActual = ds.getValue(1,10);//Cam_UtilAlterna_5
		
		if(camaActual == 0)
			camaActual = ds.getValue(1,11);//Cam_UtilStand
	}
	
	// Cod Auto
	var empresa = 1;
	var obra = asiucotrs_rel_buscar_admision.adm_obrsoc;
	var planX10 = asiucotrs_rel_buscar_admision.adm_planobr;
	var nomeTipo = 1;
	var nomeCodi = 431110;
	var nomeDesc = '';

	globals.Call_2142_InicializarVariables();
	globals.Call_2142_empresa = empresa;
	globals.Call_2142_obra = obra;
	globals.Call_2142_planX10 = planX10;
	globals.Call_2142_sector = camaActual;
	globals.Call_2142_tipoNome = nomeTipo;
	globals.Call_2142_codiNome = nomeCodi;
	globals.Call_2142_planX = ' ';
	
	sql = "select PloPlanX from tbc_PLAN_OBRA where PloObra = " + obra + " and PloPlanX10 = '" + planX10 + "'";
	ds = databaseManager.getDataSetByQuery('asistencial',sql,null,-1);
	if(ds.getMaxRowIndex() > 0)
		globals.Call_2142_planX = ds.getValue(1,1);
	
	// AUTORIZACION-CODAUTO
	globals.Call_2142_ControlCodobra();
	if(globals.Call_2142_ok == true && globals.Call_2142_autori == 1){
		
		var servCodAuto = 22;
		var fecha = utils.stringToNumber(globals.CapturaFechaSistema());
		var hora = globals.CapturaHoraSistema('HHMMSSDD');
		
		asiucotrs_rel_codauto.newRecord();
		inicializarRelacionCodAuto();
		
		asiucotrs_rel_codauto.codautoempr = empresa;
		asiucotrs_rel_codauto.codautoempr5 = empresa;
		asiucotrs_rel_codauto.codautoadmi = 0;
		asiucotrs_rel_codauto.codautoobra = obra;
		asiucotrs_rel_codauto.codautoobra3 = obra;
		asiucotrs_rel_codauto.codautoobra4 = obra;
		asiucotrs_rel_codauto.codautoobra6 = obra;
		
		asiucotrs_rel_codauto.codautohist = asiucotrs_rel_buscar_admision.adm_histclin;
		asiucotrs_rel_codauto.codautohist3 = asiucotrs_rel_buscar_admision.adm_histclin;
		asiucotrs_rel_codauto.codautohist4 = asiucotrs_rel_buscar_admision.adm_histclin;
		asiucotrs_rel_codauto.codautohist5 = asiucotrs_rel_buscar_admision.adm_histclin;
		asiucotrs_rel_codauto.codautohist6 = asiucotrs_rel_buscar_admision.adm_histclin;
		
		asiucotrs_rel_codauto.codautoserv = servCodAuto;
		asiucotrs_rel_codauto.codautoserv3 = servCodAuto;
		asiucotrs_rel_codauto.codautoserv4 = servCodAuto;
		asiucotrs_rel_codauto.codautoserv6 = servCodAuto;
		asiucotrs_rel_codauto.codautofsol = fecha
		asiucotrs_rel_codauto.codautohsol = hora;
		asiucotrs_rel_codauto.codautotipo = nomeTipo;
		asiucotrs_rel_codauto.codautocdar = nomeCodi;
		asiucotrs_rel_codauto.codautosect = camaActual;
		asiucotrs_rel_codauto.codautopedi = 0;
		asiucotrs_rel_codauto.codautotmed = globals.AsiUcoTrs_vTipoOperador;
		asiucotrs_rel_codauto.codautomedi = globals.AsiUcoTrs_vLega;
		asiucotrs_rel_codauto.codautoutiliza = asiucotrs_rel_buscar_admision.adm_utiliza;
		asiucotrs_rel_codauto.codautohabita = 0;
		
		if(asiucotrs_rel_buscar_obrasocial.obrmodautpre == 1 || asiucotrs_rel_buscar_obrasocial.obrmodautpre == 3){
			var codAutoEsta = 2;
			asiucotrs_rel_codauto.codautoesta3 = codAutoEsta;
			asiucotrs_rel_codauto.codautoesta4 = codAutoEsta;
			asiucotrs_rel_codauto.codautoesta6 = codAutoEsta;
		}
	
		var sql_query = "select nome_pantalla,nome_descr from tbc_nomencla where nome_tipo = " + nomeTipo + " and nome_codigo = " + nomeCodi;
		var ds_nomencla = databaseManager.getDataSetByQuery('maestros',sql_query,null,-1);
		if(ds_nomencla.getMaxRowIndex() > 0){
			asiucotrs_rel_codauto.codautopant = ds_nomencla.getValue(1,1);
			nomeDesc = utils.stringTrim(ds_nomencla.getValue(1,2));
		}
		else
			asiucotrs_rel_codauto.codautopant = 4;
		
		asiucotrs_rel_codauto.codautoplan = globals.Call_2142_planX;
		asiucotrs_rel_codauto.codautoplan3 = globals.Call_2142_planX;
		asiucotrs_rel_codauto.codautoplan4 = globals.Call_2142_planX;
		asiucotrs_rel_codauto.codautoplan6 = globals.Call_2142_planX;
		
		var isValidSave = databaseManager.saveData(asiucotrs_rel_codauto.getRecord(1));
		if(isValidSave){
			
			var paciente = utils.stringTrim(asiucotrs_rel_buscar_admision.adm_apelnom);
			var afiliado = utils.stringTrim(asiucotrs_rel_buscar_admision.adm_nrobenef);
			enviarEmail(paciente,afiliado,nomeDesc,fecha,camaActual,Number(hora));
		}
	}
}

/**
 * @AllowToRunInFind
 * 
 * @param {String} paciente
 * @param {String} afiliado
 * @param {String} nomeDesc
 * @param {Number} fecha
 * @param {Number} sector
 * @param {Number} hora
 *
 * @properties={typeid:24,uuid:"511A1F43-87E7-49F9-96B7-36238BDF80E3"}
 */
function enviarEmail(paciente,afiliado,nomeDesc,fecha,sector,hora) {
	
	if(asiucotrs_rel_buscar_obrasocial.obrmodautpre == 1 || asiucotrs_rel_buscar_obrasocial.obrmodautpre == 3){
		
		var mailObrTipo = 2;
		if(asiucotrs_rel_buscar_obrasocial.obr_codigo == 1132)
			mailObrTipo = 4;

		var fs_mailObra = databaseManager.getFoundSet("asistencial","tbc_mail_obra");
		fs_mailObra.find();
		fs_mailObra['mailobr1'] = asiucotrs_rel_buscar_obrasocial.obr_codigo
		fs_mailObra['mailobrtipo'] = mailObrTipo;
		fs_mailObra.search();
		
		if(fs_mailObra.getSize() > 0){
			
			var aux_mail_para = '';
			var aux_mail_cc = '';
			var aux_mail_cco = '';
			var aux_mail_error = '';
			for (var x=1;x<=10;x++){
				
				switch (fs_mailObra['mailobrdestino_'+x]){
					
					case 1:{
						
						if(plugins.mail.isValidEmailAddress(utils.stringTrim(fs_mailObra['mailobrmail_'+x]))){
							
							if(utils.stringTrim(aux_mail_para).length == 0)
								aux_mail_para = utils.stringTrim(fs_mailObra['mailobrmail_'+x]);
							else
								aux_mail_para += "," + utils.stringTrim(fs_mailObra['mailobrmail_'+x]);
						}
						else
							aux_mail_error += ' ' + utils.stringTrim(fs_mailObra['mailobrmail_'+x]);
						
					}
					break;
					case 2:{
						
						if(plugins.mail.isValidEmailAddress(utils.stringTrim(fs_mailObra['mailobrmail_'+x]))){
							
							if(utils.stringTrim(aux_mail_cc).length == 0)
								aux_mail_cc = utils.stringTrim(fs_mailObra['mailobrmail_'+x]);
							else
								aux_mail_cc += "," + utils.stringTrim(fs_mailObra['mailobrmail_'+x]);
						}
						else
							aux_mail_error += ' ' + utils.stringTrim(fs_mailObra['mailobrmail_'+x]);
					}
					break;
					case 3:{
						
						if(plugins.mail.isValidEmailAddress(utils.stringTrim(fs_mailObra['mailobrmail_'+x]))){
							
							if(utils.stringTrim(aux_mail_cco).length == 0)
								aux_mail_cco = utils.stringTrim(fs_mailObra['mailobrmail_'+x]);
							else
								aux_mail_cco += "," + utils.stringTrim(fs_mailObra['mailobrmail_'+x]);
						}
						else
							aux_mail_error += ' ' + utils.stringTrim(fs_mailObra['mailobrmail_'+x]);
					}
					break;
				}
			}
			
			//if(utils.stringTrim(aux_mail_para).length > 0){
				
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
				var patCie = asiucotrs_rel_buscar_admision.adm_patoling;
				
				var sqlMaxFecha = "select ptpfecha,ptphora,ptppatol from tbc_patolpac where"
				  + " ptphistclinica = " + asiucotrs_rel_buscar_admision.adm_histclin
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
								
				if(asiucotrs_rel_buscar_obrasocial.obr_espami == 1){
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
				
				var histClinica = asiucotrs_rel_buscar_admision.adm_histclin;
				var histClin =  "Nro.Inter. "+histClinica.toString().substr(0,histClinica.toString().length-1)+"/"+histClinica.toString().substr(histClinica.toString().length -1,1)
				
				$ds2.addRow([paciente,asiucotrs_rel_buscar_obrasocial.obr_razonsoc,afiliado,histClin,nomeDesc,diagnostico,medico,matricula])
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
				
				var fileName = asiucotrs_rel_buscar_admision.adm_histclin + "-"+ fecha + "-" + hora + "-431110.pdf";
				var arch;
				try{
					arch = plugins.file.createFile(fileName);
					//application.output( arch.getAbsolutePath());
					//globals.DIALOGS.showWarningDialog("Atencion","Directorio del archivo: " + arch.getAbsolutePath(),"Aceptar");
					
				}catch(msg){
					grabaLog(msg.toString(),asiucotrs_rel_buscar_admision.adm_histclin);
				}
				
				if (arch){	
					try{
						//var fileName = "c:/temp/LB-CIRUAMBU-" + fechaDesde + "-" + fechaHasta;
						//plugins.jasperPluginRMI.compileReport("ASI-UCO-SOL-AUT.jrxml");
						plugins.jasperPluginRMI.runReport($ds2,'ASI-UCO-SOL-AUT.jasper',arch.getAbsolutePath(),plugins.jasperPluginRMI.OUTPUT_FORMAT.PDF,params)
					}catch(e){
						grabaLog(e.message,asiucotrs_rel_buscar_admision.adm_histclin)
					}
				}
				
				var attachment1;
				try{
					attachment1 = plugins.mail.createBinaryAttachment(fileName,plugins.file.readFile(arch.getAbsolutePath()));
					
				}catch(msg){
					grabaLog(msg.toString(),asiucotrs_rel_buscar_admision.adm_histclin)
				}	
				
				// Envio de email
				var subJect = "Solicitud Autoriz.- Paciente " + paciente + " - " + nomeDesc;
				
				var msgText = "Estimado/a\n\n"
				+ "                Se adjunta Practica en formato PDF para Autorizar correspondiente al paciente " + paciente + " Afiliado: " + afiliado + " con indicacion de: " + nomeDesc + "\n\n"
				
				msgText+= "Atte.\n"; 
				//msgText+= "Unidad Quirugica\n";
				msgText+= "Sanatorio Colegiales";
				
				// Enviando email
				var cuenta = '2';
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
					
					to = 'hchoque@cirendsa.com.ar';
					globals.DIALOGS.showInfoDialog("E-MAIL",msgText + '\nTo: ' + to,"Aceptar");
					
				}else{
					url = application.getServerURL().substr(0,23);
					var puerto = url.split(':');
					
					if(puerto[2]!='8080'){
						// Ambiente de pruebas
						to = globals.DIALOGS.showInputDialog(puerto[2],"Ingrese Dirección de correo electronico",'fhuertas@cirendsa.com.ar');
						//cc = 'fhuertas@cirendsa.com.ar';
						cc = 'hchoque@cirendsa.com.ar';
					}
					else{
						// Ambiente operativo
						to = utils.stringTrim(aux_mail_para).length > 0 ? aux_mail_para : null;
						cc = utils.stringTrim(aux_mail_cc).length > 0 ? aux_mail_cc : null;
						cco = utils.stringTrim(aux_mail_cco).length > 0 ? aux_mail_cco : 'fhuertas@cirendsa.com.ar';
						cco += ","+'fhuertas@cirendsa.com.ar'
					}
				}
				
				var attachmentList = new Array();
				var archivo_1 = {nombre:fileName,path:arch.getAbsolutePath()};
				attachmentList.push(archivo_1);
				
				if(utils.stringTrim(aux_mail_error).length == 0){
					
					var success = plugins.mail.sendMail(to, userName, subJect, msgText,cc,cco,[attachment1], properties);
					if (!success){
						
						grabarReenviaMail(asiucotrs_rel_buscar_admision.adm_histclin,to,cc,cco,subJect,msgText,attachmentList,cuenta);
						var msgMail = "No ha sido posible enviar la autorización de UCO via E-mail";
						grabaLog(msgMail,asiucotrs_rel_buscar_admision.adm_histclin);
					}
				}
				else{
					
					grabarReenviaMail(asiucotrs_rel_buscar_admision.adm_histclin,to,cc,cco,subJect,msgText,attachmentList,cuenta);
					var msg = "No ha sido posible enviar la autorización de UCO. Direccion de correo electrónico no válido.\n E-mail: " + aux_mail_error;
					grabaLog(msg,asiucotrs_rel_buscar_admision.adm_histclin)
				}
				
				if(arch){
					
					try{
					  	plugins.file.deleteFile(arch.getAbsolutePath())
					  	plugins.file.deleteFile(arch)
					  }catch(msg){
							grabaLog("Error al elimnar archivo pdf.",asiucotrs_rel_buscar_admision.adm_histclin)
					}	
				}
			//}
		}
	}
}	

/**
 * TODO generated, please specify type and doc for the params
 * @param texto
 * @param histClin
 *
 * @properties={typeid:24,uuid:"84B353AF-2E6D-4E2C-9AAC-E07AA35F1137"}
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

/**
 * 
 * @param {Number} hisCli
 * @param {String} to
 * @param {String} cc
 * @param {String} cco
 * @param {String} asunto
 * @param {String} mensaje
 * @param {Array<Object>} attachment
 * @param {String} cuenta
 *
 * @properties={typeid:24,uuid:"2F725FC3-C5DF-40A5-B519-079937293D32"}
 */
function grabarReenviaMail(hisCli,to,cc,cco,asunto,mensaje,attachment,cuenta){
	
	var id = application.getUUID();
	//Verificando si existe clave primaria
	var sql = "SELECT EXISTS( SELECT id FROM reenvia_mail WHERE id='" + id + "')";
	var dsExists = databaseManager.getDataSetByQuery('desal',sql,null,-1);
	while(dsExists.getValue(1,1) == 1){
		id = application.getUUID();
		sql = "SELECT EXISTS( SELECT id FROM reenvia_mail WHERE id='" + id + "')";
		dsExists = databaseManager.getDataSetByQuery('desal',sql,null,-1);
	}
	
	var fs = databaseManager.getFoundSet("desal","reenvia_mail");
	fs.newRecord();
	
	fs['id'] = id;
	fs['hiscli'] = hisCli;
	fs['fecha'] = application.getServerTimeStamp();;
	fs['mail_para'] = to;
	fs['mail_cc'] = cc;
	fs['mail_cco'] = cco;
	fs['id_cuenta_origen'] = cuenta;
	fs['asunto'] = asunto;
	fs['mensaje'] = mensaje;
	fs['estado'] = false;
	
	var fsItem = databaseManager.getFoundSet('desal','reenvia_mail_adjunto');
	if(attachment != null){
		
		var idItem;
		for(var k=0; k<attachment.length; k++){
			
			fsItem.newRecord();
			idItem = application.getUUID();
			//Verificando si existe clave primaria
			sql = "SELECT EXISTS( SELECT id FROM reenvia_mail_adjunto WHERE id='" + idItem + "')";
			dsExists = databaseManager.getDataSetByQuery('desal',sql,null,-1);
			while(dsExists.getValue(1,1) == 1){
				idItem = application.getUUID();
				sql = "SELECT EXISTS( SELECT id FROM reenvia_mail_adjunto WHERE id='" + idItem + "')";
				dsExists = databaseManager.getDataSetByQuery('desal',sql,null,-1);
			}
			
			fsItem['id'] = idItem;
			fsItem['id_reenvia_mail'] = id;
			fsItem['nombre_archivo'] = attachment[k]['nombre'];
			fsItem['archivo'] = plugins.file.readFile(attachment[k]['path']);
		}
	}
	
	databaseManager.startTransaction()
	var resultFs = databaseManager.saveData(fs);
	
	var resultItem = true;
	if(fsItem.getSize() > 0)
		resultItem = databaseManager.saveData(fsItem);
	
	if(resultFs && resultItem){

		databaseManager.commitTransaction();				
	}
	else{
		
		databaseManager.rollbackTransaction();
		var msgMail = "No ha sido posible grabar en tabla reenvia_mail. HC " + hisCli + "para " + to + cc + cco;
		grabaLog(msgMail,hisCli);
	}
}

/**
 * @properties={typeid:24,uuid:"C80F02CB-4858-4A48-AF5E-B08AB3FB349B"}
 */
function inicializarRelacionCodAuto(){
	
	asiucotrs_rel_codauto.codautoadmi = 0;
	asiucotrs_rel_codauto.codautocdar = 0;
	asiucotrs_rel_codauto.codautoempr = 0;
	asiucotrs_rel_codauto.codautofsol = 0;
	asiucotrs_rel_codauto.codautohist = 0;
	asiucotrs_rel_codauto.codautohsol = 0;
	asiucotrs_rel_codauto.codautoobra = 0;
	asiucotrs_rel_codauto.codautoplan = ' ';
	asiucotrs_rel_codauto.codautoserv = 0;
	asiucotrs_rel_codauto.codautotipo = 0;
	asiucotrs_rel_codauto.codautoempr5 = 0;
	asiucotrs_rel_codauto.codautoesta3 = 0;
	asiucotrs_rel_codauto.codautoesta4 = 0;
	asiucotrs_rel_codauto.codautoesta6 = 0;
	asiucotrs_rel_codauto.codautofaut = 0;
	asiucotrs_rel_codauto.codautohabita = 0;
	asiucotrs_rel_codauto.codautohaut = 0;
	asiucotrs_rel_codauto.codautohist3 = 0;
	asiucotrs_rel_codauto.codautohist4 = 0;
	asiucotrs_rel_codauto.codautohist5 = 0;
	asiucotrs_rel_codauto.codautohist6 = 0;
	asiucotrs_rel_codauto.codautoimpre = 0;
	asiucotrs_rel_codauto.codautomedi = 0;
	asiucotrs_rel_codauto.codautoobra3 = 0;
	asiucotrs_rel_codauto.codautoobra4 = 0;
	asiucotrs_rel_codauto.codautoobra6 = 0;
	asiucotrs_rel_codauto.codautooper = 0;
	asiucotrs_rel_codauto.codautopant = 0;
	asiucotrs_rel_codauto.codautopedi = 0;
	asiucotrs_rel_codauto.codautoplan3 = ' ';
	asiucotrs_rel_codauto.codautoplan4 = ' ';
	asiucotrs_rel_codauto.codautoplan6 = ' ';
	asiucotrs_rel_codauto.codautosect = 0;
	asiucotrs_rel_codauto.codautoserv3 = 0;
	asiucotrs_rel_codauto.codautoserv4 = 0;
	asiucotrs_rel_codauto.codautoserv6 = 0;
	asiucotrs_rel_codauto.codautotmed = 0;
	asiucotrs_rel_codauto.codautotope = 0;
	asiucotrs_rel_codauto.codautoutiliza = 0;
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"DC51BF13-B2E8-4B6C-B88B-2E632FBF732A"}
 */
function onAction_txt_tensionMaxima(event) {
	elements.txt_tensionMin.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"C8835BA9-0DCD-4C3F-B44C-3375E9972816"}
 */
function onAction_txtfrecuenciac(event) {
	elements.txt_frecuencia.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"394F7DE6-ADB0-4E88-BF40-528F2BA5A954"}
 */
function onAction_txttensionMin(event) {
	elements.txt_frecuenciac.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"CE3421C2-F2C2-4581-B635-34A306DC60C0"}
 */
function onAction_txtfrecuencia(event) {
	elements.cbo_temperatura.requestFocus()
}

/**
 * @properties={typeid:24,uuid:"3639B458-4905-4608-817E-AC04CBCAE47E"}
 */
function regrabaMarcaARM(){
	asiucotrs_rel_buscar_admision.admarm=1
	try{
		databaseManager.saveData(asiucotrs_rel_buscar_admision.getRecord(1))
	}catch(msg){
		plugins.dialogs.showErrorDialog("Error grabacion ADMISION",msg.message)
	}
	var error1=''
	var error2=''
	var i = 0
	var array = databaseManager.getFailedRecords(asiucotrs_rel_buscar_admision)
	for (i = 0; i < array.length; i++) {
		var record = array[i];
		var jstable = databaseManager.getTable(record);
		var tableSQLName = jstable.getSQLName();
		error1='Error de Grabación en Tabla: ' + tableSQLName + ' en server: ' + jstable.getServerName() + ' falló la grabación. Avise a Sistemas, por favor!'
		error2='Error en grabación '+record.exception;
		if (record.exception.getErrorCode() == ServoyException.RECORD_VALIDATION_FAILED) {
			var thrown = record.exception.getValue()
			plugins.dialogs.showErrorDialog("Error de grabación","Record validation failed: " + thrown)
		}
	}
	if(error1!=''){
		plugins.dialogs.showErrorDialog("Error en grabacion de tbc_admision",error1,"Ok")
		plugins.dialogs.showErrorDialog("Error en grabacion de tbc_admision",error2,"Ok")
		plugins.dialogs.showInfoDialog("Reintentar","Reintente grabar!!")
		
	}
}
