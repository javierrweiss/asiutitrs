/**
 * @properties={typeid:35,uuid:"9422244A-FFA2-46F6-BA6D-166D1DFF3B47",variableType:-4}
 */
var validReingreso = false;
/**
 * @properties={typeid:35,uuid:"B511BFBD-10D9-4E52-A158-F82252510B7F",variableType:-4}
 */
var validProcedencia = false;
/**
 * @properties={typeid:35,uuid:"4AA66BB8-38CD-4DA2-BC32-C20791F5C684",variableType:-4}
 */
var validPatologia= false;
/**
 * @properties={typeid:35,uuid:"B0D47FB0-1196-42DC-BE51-740F67080704",variableType:-4}
 */
var isValidForm = false;
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"F93B04FB-09E2-406A-8373-A52522BD71FA"}
 */


/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"81C32E8B-9B32-4A37-A5D0-4CCC3870EE63",variableType:4}
 */
var $hist_clin_reingreso = -1;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"645DBDAB-977A-466E-8F8A-6C316C5844A4",variableType:4}
 */
var $hist_clin_patologia = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"3FA3FAB4-FB0A-4A98-863E-EC88EA6FA298",variableType:4}
 */
var $hist_clin_procedencia = 0;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"9D3E8F27-D977-4129-AEF2-5E678F6D1A74"}
 */
var $_msgSMS = '';

/**
 * @properties={typeid:35,uuid:"87062088-3FA6-496E-8FBA-E5A1A5333D7E",variableType:-4}
 */
var nuevoHciint = false;

/**
 * @properties={typeid:35,uuid:"C5C47FE0-B7A1-49E8-85E3-5CEA86543265",variableType:-4}
 */
var $_wHayArm = false;

/**
 * @properties={typeid:35,uuid:"821D09CA-684F-4D1E-A908-684227CE59AC",variableType:-4}
 */
var $_listNumberSMS = new Array();

/**
 * @properties={typeid:35,uuid:"A03E3ADA-AB5C-49AE-A778-B2FB3A95E1E3",variableType:-4}
 */
var $_wtrau = false;

/**
 * @properties={typeid:35,uuid:"2A70F173-FC07-4259-9E23-1964B0967410",variableType:-4}
 */
var $_wsele = false;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"64242E48-B40F-419F-B91C-EF808E16193A",variableType:4}
 */
var generarECG = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"83E2C8B9-676C-4760-8717-FFF0F1CA66D2",variableType:4}
 */
var generarARM = 0;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"381F0962-166A-4A22-AC71-86A5C4750DD8"}
 */
var messageError = "";

/**
 * @properties={typeid:35,uuid:"BDAD5AFD-8252-4973-A89D-CD6622D80328",variableType:-4}
 */
var $_isUserOSTEE = false;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"5E23C9E1-386D-4DAF-A8CD-FD281DEAC055",variableType:4}
 */
var $_countChange = 1;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"1613631A-E463-4197-8839-5D799B571162"}
 */
var f_habita = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"7A4BF562-F230-401D-9AE4-D7E70A8019FD"}
 */
var f_cama = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"D7F3D23C-306A-4A8A-A0A3-B27EFCFEB3EC",variableType:4}
 */
var f_sexo = null;

/**
 * @properties={typeid:35,uuid:"C103CCBE-D55E-43B0-A87A-C1E760A35695",variableType:-4}
 */
var f_cerrarForm = false;

/**
 * @properties={typeid:35,uuid:"A5FB5934-CD8B-4571-8EE8-87664C35259B",variableType:-4}
 */
var $isDirty = false;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"478CEB37-47B8-48ED-B53E-24C5AF0280F6",variableType:4}
 */
var f_protocolo = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"3D3AB5B2-072A-4EA4-83A8-310AEC564D6B"}
 */
var $messageErrorInter = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"77023291-8E40-464F-A4B7-A889FF439D1B"}
 */
var f_medico = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"5877ECEC-120E-4A8E-858F-87B9E58B2959"}
 */
var f_edad = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"923511D1-06BB-4822-AC8A-0C84CC88EFA5"}
 */
var f_cobertura = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"A96F0F59-C98A-44FE-97A6-9A2E943B4D2F"}
 */
var f_histClinUnica = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"CD5ECEBC-2080-4E3B-BB60-32B743CBDC35"}
 */
var f_paciente = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"F6EBBB59-6A87-40BE-B36E-087FE8D00944"}
 */
var f_patologia1 = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"7E01CF23-B0AB-49AD-ABE2-C900481774C3"}
 */
var f_patologia2 = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"8FBFF507-A7C1-42C7-80A1-91ABCDACA1BD"}
 */
var f_patologia3 = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"57C7F1FC-B773-40CD-A1AE-FCFE65BB16AF"}
 */
var f_patologia = '';

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"AA55BED8-A21A-45E3-A44B-87888AB80FD1",variableType:4}
 */
var obraSocialOSTEE_OS = 1132;

/**
 * @properties={typeid:35,uuid:"449C0160-CFD4-4C47-8692-55AB8FF194BE",variableType:-4}
 */
var f_pendienteDeSeleccion = false;

/**
 * TODO generated, please specify type and doc for the params
 * @param firstShow
 * @param event
 *
 * @properties={typeid:24,uuid:"B7079520-24B4-4D9F-AE53-826B910C8570"}
 */


/**
 * TODO generated, please specify type and doc for the params
 * @param firstShow
 * @param event
 *
 * @properties={typeid:24,uuid:"6AEC5A73-9DAF-4BE2-A0EF-DA9DD0E98650"}
 */
function onShow_inicializarForm(firstShow, event) {
	elements.txt_paciente.requestFocus(); 
}

/**
 * @properties={typeid:24,uuid:"2E393B62-9CC2-4F73-9EA2-5A0317430AB8"}
 */
function mostrarRecordatorio() {

	var texto = 
		"<html><div style='text-align:justify;width:350px;height:80px'> <meta name='viewport' content='width=device-width, initial-scale=1.0'>"
	    + "<p>Resulta indispensable, con el fin de evitar inconvenientes " 
		+ "legales, <strong>NO</strong> utilizar abreviaturas, <strong>EVITAR</strong> faltas de ortografía " 
		+ "y señalar puntualmente localizaciones, utilizando superior, " 
		+ "inferior, derecho, izquierdo, distal, proximal, etc., y llenar " 
		+ "todos los espacios de la historia clínica de ingreso a guardia.</p>"
		+"<br></br>"
		+"<b>Recuerde firmar y sellar la impresión de la Historia Clínica.</b>" 
		+ "</div></html>"
	globals.DIALOGS.showInfoDialog("Recordatorio", texto, "Aceptar");
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"800D37C4-E775-4835-BF87-7713A2ED7687"}
 */
function onAction_btnBuscarPaciente(event) {

	globals.AsiUtiTrs_eventSourceButton = 1;
	openSearch();
}

/**
 * @properties={typeid:24,uuid:"18A3B22B-4746-454E-A4E3-7DF69F6B4806"}
 */
function openSearch() {

	var win2 = application.createWindow("seleccion_internado", JSWindow.MODAL_DIALOG);
	win2.title = 'Búsqueda de Pacientes Internados';
	win2.resizable = false;
	win2.show(forms.AsiUtiTrs_dlg_buscar_internado);

}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"F63C7DE0-6C21-46C0-B6A6-4D7772A5C458"}
 */
function onAction_txtBusquedaRapida(event) {
	globals.AsiUtiTrs_hisclistrynro = f_paciente
	if(!f_paciente) {
		plugins.dialogs.showInfoDialog('¡Atención!','Debe ingresar un parámetro de búsqueda válido','Ok')	
	}else{
		globals.AsiUtiTrs_eventSourceButton = 0;
		openSearch();
	}
}

/**
 * @properties={typeid:24,uuid:"DDCEEAB9-87D1-4781-9087-A87C95E7C9C6"}
 */
function pacienteSeleccionadoInter() {

	if(isValidDatosPacienteInter()){
		
		editablePaciente(false);
		//$isDirty = true;
		f_paciente = asiutitrs_numero_to_tbc_admision.hiscli_hciti + ' ' + utils.stringTrim(asiutitrs_numero_to_tbc_admision.adm_apelnom);
		f_histClinUnica = asiutitrs_numero_to_tbc_admision.adm_histclinuni;
		f_sexo = asiutitrs_numero_to_tbc_admision.adm_sexo;
		f_edad = globals.CalculoEdad(asiutitrs_numero_to_tbc_admision.adm_fecnac) + ' ' + globals.vTipoEdad;
		f_habita = asiutitrs_numero_to_tbc_admision.adm_habita;
		f_cama = asiutitrs_numero_to_tbc_admision.adm_cama;
		globals.AsiUtiTrs_obrCodigo = asiutitrs_numero_to_tbc_admision.adm_obrsoc;
		f_cobertura = asiutitrs_rel_buscar_obrasocial.obr_razonsoc;

		//var espeMed = globals.AsiUtiTrs_vEspeMed;
		
		globals.AsiUtiTrs_hiiHisCli = asiutitrs_numero_to_tbc_admision.adm_histclin;
		  globals.AsiUtiTrs_hisclin = asiutitrs_numero_to_tbc_admision.adm_histclin;
		
		globals.AsiUtiTrs_histClinAsist = asiutitrs_numero_to_tbc_admision.adm_histclin;
		
		var fechaIngreso = asiutitrs_numero_to_tbc_admision.adm_fecing.toString().substr(6, 2) + "/" + asiutitrs_numero_to_tbc_admision.adm_fecing.toString().substr(4, 2) + "/" + asiutitrs_numero_to_tbc_admision.adm_fecing.toString().substr(0, 4);
		var hora = convertNumberToHour_HHMM(asiutitrs_numero_to_tbc_admision.adm_horing);
		var horaAux = hora.split(':')
		var fechaDesde = globals.IntegerToDate(asiutitrs_numero_to_tbc_admision.adm_fecing);
		fechaDesde.setHours(Number(horaAux[0]), Number(horaAux[1]));
		var fechaActual = application.getServerTimeStamp();
		//var fechaAux = fechaActual;
		var dias = contar_dias(fechaDesde, fechaActual);
		var info = "Ingresó al Sanatorio : " + fechaIngreso + "  " + globals.AsiUtiTrs_convertNumberToHour_HHMM(String(asiutitrs_numero_to_tbc_admision.adm_horing)) + " Hrs.   " + dias + " días de Internado" + "\nDomicilio : " + utils.stringTrim(asiutitrs_numero_to_tbc_admision.adm_domicilio) + "\nTlf: " + utils.stringTrim(asiutitrs_numero_to_asistencial_admision.adm_telefefono);
		if (asiutitrs_rel_buscar_hciti.getSize() == 0)
			info += "\n\nLa Historia Clínica de Ingreso de este paciente aún no ha sido \n"+"confeccionada.\n";
		info += "\n¿Confirma paciente?";
		var res = globals.DIALOGS.showInfoDialog('Información de ingreso', info, 'Sí', 'No');
		
		globals.modificarCampos("HciutiTrs_frm_hist_clin_ingreso_utiTrs");
		var elementosTab1 = forms.HciutiTrs_frm_hist_clin_ingreso_utiTrs.elements.tab_informe_1.getMaxTabIndex()
		for (var index = 1; index <= elementosTab1; index++) {
			var nombreFormulario = forms.HciutiTrs_frm_hist_clin_ingreso_utiTrs.elements.tab_informe_1.getTabFormNameAt(index);
			globals.modificarCampos(nombreFormulario); 

		}
		var elementosTab2 = forms.HciutiTrs_frm_hist_clin_ingreso_utiTrs.elements.tab_informe_2.getMaxTabIndex()
		for (var index2 = 1; index2 <= elementosTab2; index2++) {
			var nombreFormulario2 = forms.HciutiTrs_frm_hist_clin_ingreso_utiTrs.elements.tab_informe_2.getTabFormNameAt(index2);
			globals.modificarCampos(nombreFormulario2);
		}

		var sqlHistCliIngrTi = "select HitFecha,HitHora from tbc_hciti"
					  + " where  HitHiscli = " + globals.AsiUtiTrs_hiiHisCli 
					  + " and HitFecha >= " + asiutitrs_numero_to_tbc_admision.adm_fecing
					  + " order by HitFecha,HitHora";
		var dsHistCliIngrTi = databaseManager.getDataSetByQuery('asistencial',sqlHistCliIngrTi,null,-1);
		
		if (res == 'Sí') {
			
					globals.ControlAlerta(0,globals.AsiUtiTrs_hiiHisCli,1,1)
			
					if(asiutitrs_rel_buscar_hciti.getSize() >= 1){
						
						//evaluar si agregar  NUEVA/NUEVO
						//var utiliza=asiutitrs_numero_to_tbc_admision.adm_utiliza
						
						var dsrowfechaMax = databaseManager.getDataSetByQuery("asistencial", "select  max(HitFecha)  from tbc_hciti where HitHiscli="+globals.AsiUtiTrs_hiiHisCli, null, -1);
						var fechaMaximaHistClin=dsrowfechaMax.getValue(1,1);
						var dsrowhoraMax = databaseManager.getDataSetByQuery("asistencial", "select  max(HitHora)  from tbc_hciti where HitHiscli="+globals.AsiUtiTrs_hiiHisCli +" and HitFecha="+fechaMaximaHistClin, null, -1);
						var horaMaximaHistClin=dsrowhoraMax.getValue(1,1);
						var dsrowfechaMaxDetalle = databaseManager.getDataSetByQuery("asistencial", "select  max(Det2)  from tbc_detalle where Det1="+globals.AsiUtiTrs_hiiHisCli, null, -1);
						var fechaMaximaDetalle=dsrowfechaMaxDetalle.getValue(1,1);
						if(fechaMaximaDetalle!=null){
							var dsrowhoraMaxDetalle = databaseManager.getDataSetByQuery("asistencial", "select  max(Det3)  from tbc_detalle where Det1="+globals.AsiUtiTrs_hiiHisCli +" and Det2="+fechaMaximaDetalle, null, -1);
							var horaMaximaDetalle=dsrowhoraMaxDetalle.getValue(1,1);
						}
						
						
//						var generarNueva=false;
//						if(fechaMaximaDetalle>fechaMaximaHistClin || (fechaMaximaHistClin==fechaMaximaDetalle && horaMaximaDetalle>horaMaximaHistClin)){
//							generarNueva=true;
//						}
						
						var dsHistCliIngrtiAux = databaseManager.createEmptyDataSet();
						dsHistCliIngrtiAux.addColumn('id');
						dsHistCliIngrtiAux.addColumn('fecha');
						dsHistCliIngrtiAux.addColumn('hora');
						dsHistCliIngrtiAux.addColumn('ult_clin_flag');
						dsHistCliIngrtiAux.addColumn('texto');
						
						
						for(var j=1; j<=dsHistCliIngrTi.getMaxRowIndex(); j++){
							var ultima = (fechaMaximaHistClin==dsHistCliIngrTi.getValue(j,1) && horaMaximaHistClin==dsHistCliIngrTi.getValue(j,2))==true?1:0;
							fechaIngreso = dsHistCliIngrTi.getValue(j,1);
							dsHistCliIngrtiAux.addRow([globals.AsiUtiTrs_hiiHisCli 
												,dsHistCliIngrTi.getValue(j,1)
												,dsHistCliIngrTi.getValue(j,2)
												,ultima
												,fechaIngreso.toString().substr(6, 2) + "/" + fechaIngreso.toString().substr(4, 2) + "/" + fechaIngreso.toString().substr(0, 4) + "  " + convertNumberToHour_HHMM(dsHistCliIngrTi.getValue(j,2).toString())
												]);
						}
						
						var $tipos = [JSColumn.NUMBER,JSColumn.NUMBER,JSColumn.NUMBER, JSColumn.NUMBER, JSColumn.TEXT];
						var $frm = solutionModel.getForm('AsiUtiTrs_tbl_hciti');
						$frm.dataSource = dsHistCliIngrtiAux.createDataSource('pepe', $tipos);
						forms.AsiUtiTrs_tbl_hciti.controller.recreateUI();
						
						var win2 = application.createWindow("seleccion_hciint", JSWindow.MODAL_DIALOG);
						win2.title = 'Historias clínicas de Ingreso';
						win2.resizable = true;
						//win2.setSize(250,600);
						//win2.show(forms.AsiUtiTrs_dlg_historial_his_clinicas);
						win2.show(forms.AsiUtiTrs_tbl_hciti);
					}else{
							ingresoFechaTerapia();
						
					}
			
		} else{
			
			limpiarForm();
		}	
	}else{
		plugins.dialogs.showErrorDialog('Error','La información del paciente ingresado no pudo ser validada')
		elements.txt_paciente.requestFocus();
	}
}

/**
 * @properties={typeid:24,uuid:"75232E43-D6A6-4362-BE6A-D94A2FC35F46"}
 */
function ingresoFechaTerapia(){
	var popupIngresoTerapia = application.createWindow("fechaIngresoTerapia", JSWindow.MODAL_DIALOG);
	popupIngresoTerapia.title = 'Fecha de Ingreso a Terapia';
	popupIngresoTerapia.resizable = false;
	popupIngresoTerapia.show(forms.AsiUtiTrs_dlg_fechaIngresoTerapia);
	
	if(globals.fechaIngresadaTerapia){
		visibleBody(true);
		forms.AsiUtiTrs_txt_examen_fisico.elements.cbo_tieneUPP.enabled=true
		forms.HciutiTrs_frm_hist_clin_ingreso_utiTrs.elements.btn_grabar.enabled=true;
	}else{
		limpiarForm();
		forms.HciutiTrs_frm_hist_clin_ingreso_utiTrs.elements.txt_paciente.editable=true;
		forms.HciutiTrs_frm_hist_clin_ingreso_utiTrs.elements.txt_paciente.requestFocus();
	}
	
}

/**
 * @properties={typeid:24,uuid:"8B3B031F-0430-4D34-BC14-C066FBF911AA"}
 * 
 */
function loadHciint() {

	if (asiutitrs_rel_tbc_hciti_to_tbc_hciti.getSize() > 0) {
									globals.AsiUtiTrs_hisclin = asiutitrs_numero_to_tbc_admision.adm_histclin;
									f_paciente=  asiutitrs_numero_to_tbc_admision.hiscli_hciti + ' ' + utils.stringTrim(asiutitrs_numero_to_tbc_admision.adm_apelnom);
									f_histClinUnica = asiutitrs_numero_to_tbc_admision.adm_histclinuni;
									f_sexo = asiutitrs_numero_to_tbc_admision.adm_sexo;
									f_edad = globals.CalculoEdad(asiutitrs_numero_to_tbc_admision.adm_fecnac) + ' ' + globals.vTipoEdad;
									f_habita = asiutitrs_rel_tbc_hciti_to_tbc_hciti.hithabi;
									f_cama = asiutitrs_rel_tbc_hciti_to_tbc_hciti.hitcama;
									globals.AsiUtiTrs_obrCodigo = asiutitrs_numero_to_tbc_admision.adm_obrsoc
									f_cobertura = asiutitrs_rel_buscar_obrasocial.obr_razonsoc;
									globals.AsiUtiTrs_hiiHisCli =  asiutitrs_rel_tbc_hciti_to_tbc_hciti.hithiscli; 
									
									var fechaIngreso = asiutitrs_numero_to_tbc_admision.adm_fecing.toString().substr(6, 2) + "/" + asiutitrs_numero_to_tbc_admision.adm_fecing.toString().substr(4, 2) + "/" + asiutitrs_numero_to_tbc_admision.adm_fecing.toString().substr(0, 4);
									var hora = convertNumberToHour_HHMM(asiutitrs_numero_to_tbc_admision.adm_horing);
									var horaAux = hora.split(':')
									var fechaDesde = globals.IntegerToDate(asiutitrs_numero_to_tbc_admision.adm_fecing);
									fechaDesde.setHours(Number(horaAux[0]), Number(horaAux[1]));
									var fechaActual = application.getServerTimeStamp();
									var dias = contar_dias(fechaDesde, fechaActual);
									var info = "Ingresó al Sanatorio : " + fechaIngreso + "  " + globals.AsiUtiTrs_convertNumberToHour_HHMM(String(asiutitrs_numero_to_tbc_admision.adm_horing)) + " Hrs.   " + dias + " días de Internado" + "\nDomicilio : " + utils.stringTrim(asiutitrs_numero_to_tbc_admision.adm_domicilio) + "\nTlf: " + utils.stringTrim(asiutitrs_numero_to_asistencial_admision.adm_telefefono);
									globals.DIALOGS.showInfoDialog('Información de ingreso', info);
									
									globals.AsiUtiTrs_fechaTxt = asiutitrs_rel_tbc_hciti_to_tbc_hciti.hitfecha;
									globals.AsiUtiTrs_horaTxt = asiutitrs_rel_tbc_hciti_to_tbc_hciti.hithora;
									globals.AsiUtiTrs_grupoTxt = 1;
									globals.AsiUtiTrs_ppcTxt = asiutitrs_rel_tbc_hciti_to_tbc_hciti.hitval10 -asiutitrs_rel_tbc_hciti_to_tbc_hciti.hitval11;
									
									forms.HciutiTrs_frm_hist_clin_ingreso_utiTrs.f_patologia1=asiutitrs_rel_tbc_hciti_to_tbc_hciti.hitpat1;
									if(!globals.IsBlank(forms.HciutiTrs_frm_hist_clin_ingreso_utiTrs.f_patologia1) && forms.HciutiTrs_frm_hist_clin_ingreso_utiTrs.f_patologia1!=0){
										forms.HciutiTrs_frm_hist_clin_ingreso_utiTrs.elements.txt_diagnostico2.editable=false;
									}
									forms.HciutiTrs_frm_hist_clin_ingreso_utiTrs.f_patologia2=asiutitrs_rel_tbc_hciti_to_tbc_hciti.hitpat2;
									if(!globals.IsBlank(forms.HciutiTrs_frm_hist_clin_ingreso_utiTrs.f_patologia2) && forms.HciutiTrs_frm_hist_clin_ingreso_utiTrs.f_patologia2!=0){
										forms.HciutiTrs_frm_hist_clin_ingreso_utiTrs.elements.txt_diagnostico3.editable=false;
									}
									forms.HciutiTrs_frm_hist_clin_ingreso_utiTrs.f_patologia3=asiutitrs_rel_tbc_hciti_to_tbc_hciti.hitpat3;
									
									forms.HciutiTrs_frm_hist_clin_ingreso_utiTrs.$hist_clin_patologia = asiutitrs_rel_tbc_hciti_to_tbc_hciti.hitsatiqpatologia;
									forms.HciutiTrs_frm_hist_clin_ingreso_utiTrs.$hist_clin_procedencia = asiutitrs_rel_tbc_hciti_to_tbc_hciti.hitsatiqprocedencia;
									forms.HciutiTrs_frm_hist_clin_ingreso_utiTrs.$hist_clin_reingreso = asiutitrs_rel_tbc_hciti_to_tbc_hciti.hitsatiqreingreso;
									
									forms.AsiUtiTrs_txt_neurológico.calcularGlassgow();
									forms.AsiUtiTrs_txt_neurológico.calcularPcc();
								
									// asiutitrs_rel_tbc_hciti_to_tbc_hciti.tieneGrado!='' tiene grado y ubcacion upp
									cargarUPP()
								
									globals.modificarCampos("HciutiTrs_frm_hist_clin_ingreso_utiTrs");
									
									var elementosTab1 = forms.HciutiTrs_frm_hist_clin_ingreso_utiTrs.elements.tab_informe_1.getMaxTabIndex()
									for (var index = 1; index <= elementosTab1; index++) {
										var nombreFormulario = forms.HciutiTrs_frm_hist_clin_ingreso_utiTrs.elements.tab_informe_1.getTabFormNameAt(index);
										globals.modificarCampos(nombreFormulario);
										
										
									}
									var elementosTab2 = forms.HciutiTrs_frm_hist_clin_ingreso_utiTrs.elements.tab_informe_2.getMaxTabIndex()
									for (var index2 = 1; index2 <= elementosTab2; index2++) {
										var nombreFormulario2 = forms.HciutiTrs_frm_hist_clin_ingreso_utiTrs.elements.tab_informe_2.getTabFormNameAt(index2);
										globals.modificarCampos(nombreFormulario2);
									}
									
									if (asiutitrs_rel_hcititxt.getSize() > 0) {				
									 	cargarInformes()

									} else {
										//cargar informes de Relativity
										var sqlInfo = "select HtixItem,HtixSec,HtixLinea from tbc_hcititxt"
													+ " where HtixHiscli = " + asiutitrs_rel_tbc_hciti_to_tbc_hciti.hithiscli 
													+ " and HtixFecha = " + asiutitrs_rel_tbc_hciti_to_tbc_hciti.hitfecha
													+ " and HtixHora = " + asiutitrs_rel_tbc_hciti_to_tbc_hciti.hithora
													+ " and HtixGrupo = 1" 
													+ " order by HtixItem, HtixSec";
										var ds_info = databaseManager.getDataSetByQuery("asistencial", sqlInfo, null, -1);
							
										var i;
							
										for (i = 1; i <= ds_info.getMaxRowIndex(); i++) {
							
											if (ds_info.getValue(i, 1) == 1){
												
												if(utils.stringTrim(forms.AsiUtiTrs_txt_motivo_ingreso.f_informe).length == 0)
													forms.AsiUtiTrs_txt_motivo_ingreso.f_informe += utils.stringTrim(ds_info.getValue(i, 3));
												else
													forms.AsiUtiTrs_txt_motivo_ingreso.f_informe += '\n' + utils.stringTrim(ds_info.getValue(i, 3));
											}
							
											if (ds_info.getValue(i, 1) == 7){
												
												if(utils.stringTrim(forms.AsiUtiTrs_txt_examen_fisico.f_informe).length == 0)
													forms.AsiUtiTrs_txt_examen_fisico.f_informe += utils.stringTrim(ds_info.getValue(i, 3));
												else
													forms.AsiUtiTrs_txt_examen_fisico.f_informe += '\n' + utils.stringTrim(ds_info.getValue(i, 3));
											}
											
											if (ds_info.getValue(i, 1) == 8){
												
												if(utils.stringTrim(forms.AsiUtiTrs_txt_neurológico.f_informe).length == 0)
													forms.AsiUtiTrs_txt_neurológico.f_informe += utils.stringTrim(ds_info.getValue(i, 3));
												else
													forms.AsiUtiTrs_txt_neurológico.f_informe += '\n' + utils.stringTrim(ds_info.getValue(i, 3));
											}
								
											if (ds_info.getValue(i, 1) == 12){
												
												if(utils.stringTrim(forms.AsiUtiTrs_txt_cardiovascular.f_informe).length == 0)
													forms.AsiUtiTrs_txt_cardiovascular.f_informe += utils.stringTrim(ds_info.getValue(i, 3));
												else
													forms.AsiUtiTrs_txt_cardiovascular.f_informe += '\n' + utils.stringTrim(ds_info.getValue(i, 3));
											}
							
											if (ds_info.getValue(i, 1) == 13){
												
												if(utils.stringTrim(forms.AsiUtiTrs_txt_respiratorio.f_informe).length == 0)
													forms.AsiUtiTrs_txt_respiratorio.f_informe += utils.stringTrim(ds_info.getValue(i, 3));
												else
													forms.AsiUtiTrs_txt_respiratorio.f_informe += '\n' + utils.stringTrim(ds_info.getValue(i, 3));
											}
							
											if (ds_info.getValue(i, 1) == 15){
												
												if(utils.stringTrim(forms.AsiUtiTrs_txt_abdominal.f_informe).length == 0)
													forms.AsiUtiTrs_txt_abdominal.f_informe += utils.stringTrim(ds_info.getValue(i, 3));
												else
													forms.AsiUtiTrs_txt_abdominal.f_informe += '\n' + utils.stringTrim(ds_info.getValue(i, 3));
											}
							
											if (ds_info.getValue(i, 1) == 16){
												
												if(utils.stringTrim(forms.AsiUtiTrs_txt_osteo_articular.f_informe).length == 0)
													forms.AsiUtiTrs_txt_osteo_articular.f_informe += utils.stringTrim(ds_info.getValue(i, 3));
												else
													forms.AsiUtiTrs_txt_osteo_articular.f_informe += '\n' + utils.stringTrim(ds_info.getValue(i, 3));
											}
							
											if (ds_info.getValue(i, 1) == 17){
												
												if(utils.stringTrim(forms.AsiUtiTrs_txt_urogenital.f_informe).length == 0)
													forms.AsiUtiTrs_txt_urogenital.f_informe += utils.stringTrim(ds_info.getValue(i, 3));
												else
													forms.AsiUtiTrs_txt_urogenital.f_informe += '\n' + utils.stringTrim(ds_info.getValue(i, 3));
											}
							
							
											if (ds_info.getValue(i, 1) == 20){
												
												if(utils.stringTrim(forms.AsiUtiTrs_txt_tratamiento_ingreso.f_informe).length == 0)
													forms.AsiUtiTrs_txt_tratamiento_ingreso.f_informe += utils.stringTrim(ds_info.getValue(i, 3));
												else
													forms.AsiUtiTrs_txt_tratamiento_ingreso.f_informe += '\n' + utils.stringTrim(ds_info.getValue(i, 3));
											}
							
											if (ds_info.getValue(i, 1) == 19){
												
												if(utils.stringTrim(forms.AsiUtiTrs_txt_estudios_solicitados.f_informe).length == 0)
													forms.AsiUtiTrs_txt_estudios_solicitados.f_informe += utils.stringTrim(ds_info.getValue(i, 3));
												else
													forms.AsiUtiTrs_txt_estudios_solicitados.f_informe += '\n' + utils.stringTrim(ds_info.getValue(i, 3));
											}
							
											if (ds_info.getValue(i, 1) == 21){
												
												if(utils.stringTrim(forms.AsiUtiTrs_txt_interconsulta.f_informe).length == 0)
													forms.AsiUtiTrs_txt_interconsulta.f_informe += utils.stringTrim(ds_info.getValue(i, 3));
												else
													forms.AsiUtiTrs_txt_interconsulta.f_informe += '\n' + utils.stringTrim(ds_info.getValue(i, 3));
											}
							
											if (ds_info.getValue(i, 1) == 22){
												
												if(utils.stringTrim(forms.AsiUtiTrs_txt_otros.f_informe).length == 0)
													forms.AsiUtiTrs_txt_otros.f_informe += utils.stringTrim(ds_info.getValue(i, 3));
												else
													forms.AsiUtiTrs_txt_otros.f_informe += '\n' + utils.stringTrim(ds_info.getValue(i, 3));
											}
							
											
										}
									}
							
									$isDirty = false;
									visibleBody(true);
									elements.chk_arm.visible=false;
									elements.chk_ecg.visible=false;
									elements.shs_pedidos.visible=false;

	} else {
		
		plugins.dialogs.showErrorDialog('Error','No se pudo cargar la historia clínica solicitada.')
		 
		
	}
	
}


/**
 * @properties={typeid:24,uuid:"EE08DFBE-888F-43EE-A4BB-58BA23613DE5"}
 */
function isValidDatosPacienteInter() {

	var isValid = true;
	//$messageErrorInter = '';

	if($_isUserOSTEE){
		 if(asiutitrs_numero_to_tbc_admision.adm_obrsoc != obraSocialOSTEE_OS){
			 $messageErrorInter += "\nEl paciente no corresponde a OSTEE.";
			 isValid = false;
		 }
	 }
	/*
	 var utiliza=asiutitrs_numero_to_tbc_admision.adm_utiliza
	if(utiliza!=2 && utiliza!=10 && utiliza!=12){
		 $messageErrorInter += "\nEl paciente no está en Terapia Intensiva";
		 isValid = false;
	}
		
	 if(!isValid){
		 globals.DIALOGS.showWarningDialog("Atención!", $messageErrorInter, "Aceptar")
	 }
	*/
	return isValid;
}

/**
 * TODO generated, please specify type and doc for the params
 * @param value
 *
 * @properties={typeid:24,uuid:"7835B704-D662-4D68-AFBA-5E1E122E4369"}
 */
function editablePaciente(value) {
	elements.txt_paciente.editable = value;
	elements.btn_buscarPaciente.enabled = value;
}

/**
 * @properties={typeid:24,uuid:"0677B9E4-AD47-4D7D-ADD3-9AC7D3E864A0"}
 */
function limpiarForm() {

	databaseManager.revertEditedRecords();
	inicializarForm();
	forms.HciutiTrs_frm_hist_clin_ingreso_utiTrs.elements.btn_cancelar.enabled=false;
	elements.txt_paciente.requestFocus();
	$isDirty = false;

}

/**
 * @properties={typeid:24,uuid:"D6BFB2C8-8A13-4F43-95D8-6229891E2A30"}
 */
function inicializarForm() {

	f_histClinUnica = null;
	f_paciente = null;
	f_cobertura = null;
	f_protocolo = null;
	f_edad = null;
	f_sexo = null;
	f_cerrarForm = false;
	f_medico = null;
	f_habita = null;
	f_cama = null;
	$_countChange = 1;
	$_wsele = false;
	$_wtrau = false;
	$_msgSMS = "";
	$_listNumberSMS = new Array();
	f_patologia1='';
	f_patologia2='';
	f_patologia3='';
	generarARM = 0
	
	
	elements.lbl_procesando.visible = false;
	globals.fechaIngresadaTerapia=false;
	application.updateUI();

	// SEGUIR ADEMAS LIMPIAR LAS VARIABLES GLOBALES ANALIZAR CUALES.

	forms.AsiUtiTrs_txt_abdominal.f_informe = null;
	forms.AsiUtiTrs_txt_cardiovascular.f_informe = null;
	forms.AsiUtiTrs_txt_examen_fisico.f_informe = null;
	forms.AsiUtiTrs_txt_interconsulta.f_informe = null;
	forms.AsiUtiTrs_txt_motivo_ingreso.f_informe = null;
	forms.AsiUtiTrs_txt_neurológico.f_informe = null;
	forms.AsiUtiTrs_txt_osteo_articular.f_informe = null;
	forms.AsiUtiTrs_txt_respiratorio.f_informe = null;
	forms.AsiUtiTrs_txt_tratamiento_ingreso.f_informe = null;
	forms.AsiUtiTrs_txt_urogenital.f_informe = null;
	forms.AsiUtiTrs_txt_otros.f_informe = null;
	forms.AsiUtiTrs_txt_estudios_solicitados.f_informe = null;
	forms.HciutiTrs_frm_hist_clin_ingreso_utiTrs.generarECG=0;
	forms.HciutiTrs_frm_hist_clin_ingreso_utiTrs.$_wsele=false;
	forms.AsiUtiTrs_txt_neurológico.f_glassgow = '';
	forms.AsiUtiTrs_txt_neurológico.f_ppc='';
	forms.AsiUtiTrs_txt_examen_fisico.tieneUPP='0'
	forms.AsiUtiTrs_txt_examen_fisico.otraLocalizacionUPP=' ' 
	
	
	globals.AsiUtiTrs_hisclin = 0;
	globals.AsiUtiTrs_hisclistrynro = '';
	globals.AsiUtiTrs_hiiHisCli = 0;
	globals.AsiUtiTrs_itemTxt = 0;
	globals.AsiUtiTrs_obrCodigo = 0;
	globals.AsiUtiTrs_patDataProvider = '';
	globals.AsiUtiTrs_histClinAsist = 0;
	globals.AsiUtiTrs_fechaHciint = 0;
	globals.AsiUtiTrs_horaHciint = 0;
	globals.AsiUtiTrs_servCodigo = 0;
	globals.AsiUtiTrs_ipedPedido = 0;
	globals.AsiUtiTrs_ipedServicio = 0;
	globals.AsiUtiTrs_camCama = '';
	globals.AsiUtiTrs_camHabita = 0;
	globals.fechaIngresoTerapia =utils.timestampToDate( application.getServerTimeStamp());
	globals.horaIngresoTerapia=0;
	globals.minIngresoTerapia=0;
	//globals.closeFechaIngresoTI=false;

	
	visibleBody(false);
	editablePaciente(true);
	forms.HciutiTrs_frm_hist_clin_ingreso_utiTrs.elements.btn_grabar.enabled=false;
	forms.HciutiTrs_frm_hist_clin_ingreso_utiTrs.elements.btn_cancelar.enabled=true;
	forms.AsiUtiTrs_txt_examen_fisico.elements.cbo_grado.visible=false;
	forms.AsiUtiTrs_txt_examen_fisico.elements.cbo_localizacion.visible=false;
	forms.AsiUtiTrs_txt_examen_fisico.elements.lvl_grado1.visible=false;
	forms.AsiUtiTrs_txt_examen_fisico.elements.txt_localizacion.visible=false;
}

/**
 * TODO generated, please specify type and doc for the params
 * @param value
 *
 * @properties={typeid:24,uuid:"D8755649-60B0-46A0-B315-8103DF10FC56"}
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
	elements.grp_solicitud.visible = value;
	elements.shs_pedidos.visible=value;
	elements.shs_satiq.visible=value;
	elements.hciuittrs_patologia.visible=value;
	elements.hciutitrs_procedencia.visible=value;
	elements.hciutitrs_reingreso.visible=value;
	elements.lbl_reingreso.visible=value;
	elements.lbl_patologia.visible=value;
	elements.lbl_procedencia.visible=value;
	elements.chk_arm.visible=value;
	
}

/**
 * TODO generated, please specify type and doc for the params
 * @param {Boolean} value
 *
 * @properties={typeid:24,uuid:"E10C8EEB-08E5-4A8D-BF61-349222FEE941"}
 */
function editableSolicitudAutomatica(value){
	
	forms.HciutiTrs_frm_hist_clin_ingreso_utiTrs.elements.chk_ecg.enabled=value

}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"88BD1C68-B0C4-4C5E-BE74-F6E23BC6B870"}
 * @AllowToRunInFind
 */
function onAction_btnGuardar(event) {
			if ($isDirty) {

			if (isValidDataForm()) {
				
				if (isValidData()) {
					
					var res = globals.DIALOGS.showQuestionDialog('¡Atención!', '¿Está seguro que desea guardar la historia clínica de ingreso a Terapia Intensiva?\n Una vez guardada no podrá volver a modificarla.', 'Sí', 'No');
					if (res == 'No'){
						elements.txt_paciente.requestFocus();
						return;}
					
					var fecha = 0;
					var hora = 0;
					var fechaIngresoTi=0;
					var horaIngresoTI=0;
					nuevoHciint = true;
					
				fechaIngresoTi = utils.stringToNumber(globals.FormatearFecha(globals.fechaIngresoTerapia, 'AAAAMMDD'));
				horaIngresoTI = utils.stringToNumber(globals.horaIngresoTerapia);

				fecha = utils.stringToNumber(globals.CapturaFechaSistema());
				hora = utils.stringToNumber(globals.CapturaHoraSistema("HHMM"));

				// Completando cabecera
				asiutitrs_rel_tbc_hciti_to_tbc_hciti.hithiscli = asiutitrs_numero_to_tbc_admision.adm_histclin;
				asiutitrs_rel_tbc_hciti_to_tbc_hciti.hitfecha = fecha;
				asiutitrs_rel_tbc_hciti_to_tbc_hciti.hithora = hora;

				asiutitrs_rel_tbc_hciti_to_tbc_hciti.hittipomed = globals.AsiUtiTrs_vTipoOperador;
				asiutitrs_rel_tbc_hciti_to_tbc_hciti.hitlegajomed = globals.AsiUtiTrs_vLega;

				asiutitrs_rel_tbc_hciti_to_tbc_hciti.hitfecha2 = fecha;
				asiutitrs_rel_tbc_hciti_to_tbc_hciti.hithora2 = hora;

				asiutitrs_rel_tbc_hciti_to_tbc_hciti.hitfechaing = fechaIngresoTi;
				asiutitrs_rel_tbc_hciti_to_tbc_hciti.hithoraing = horaIngresoTI;

				asiutitrs_rel_tbc_hciti_to_tbc_hciti.hitapyno = utils.stringTrim(asiutitrs_numero_to_tbc_admision.adm_apelnom);
				asiutitrs_rel_tbc_hciti_to_tbc_hciti.hithabi = asiutitrs_numero_to_tbc_admision.adm_habita;
				asiutitrs_rel_tbc_hciti_to_tbc_hciti.hitcama = asiutitrs_numero_to_tbc_admision.adm_cama;

				habilitarECG();
					
					asiutitrs_rel_tbc_hciti_to_tbc_hciti.hitval1 = utils.stringTrim(forms.AsiUtiTrs_txt_motivo_ingreso.f_informe).length > 0 ? 1 : 0;
					asiutitrs_rel_tbc_hciti_to_tbc_hciti.hitval7 = utils.stringTrim(forms.AsiUtiTrs_txt_examen_fisico.f_informe).length > 0 ? 1 : 0;
					asiutitrs_rel_tbc_hciti_to_tbc_hciti.hitval8 = utils.stringTrim(forms.AsiUtiTrs_txt_neurológico.f_informe).length > 0 ? 1 : 0;
					asiutitrs_rel_tbc_hciti_to_tbc_hciti.hitval12 = utils.stringTrim(forms.AsiUtiTrs_txt_cardiovascular.f_informe).length > 0 ? 1 : 0;
					asiutitrs_rel_tbc_hciti_to_tbc_hciti.hitval13 = utils.stringTrim(forms.AsiUtiTrs_txt_respiratorio.f_informe).length > 0 ? 1 : 0;
					asiutitrs_rel_tbc_hciti_to_tbc_hciti.hitval15 = utils.stringTrim(forms.AsiUtiTrs_txt_abdominal.f_informe).length > 0 ? 1 : 0;
					
					
					asiutitrs_rel_tbc_hciti_to_tbc_hciti.hitval16 = utils.stringTrim(forms.AsiUtiTrs_txt_osteo_articular.f_informe).length > 0 ? 1 : 0;
					asiutitrs_rel_tbc_hciti_to_tbc_hciti.hitval17 = utils.stringTrim(forms.AsiUtiTrs_txt_urogenital.f_informe).length > 0 ? 1 : 0;
					/*asiutitrs_rel_tbc_hciti_to_tbc_hciti.hittval_18 = utils.stringTrim(forms.AsiUtiTrs_txt_diagnostico.f_informe).length > 0 ? 1 : 0;*/
					asiutitrs_rel_tbc_hciti_to_tbc_hciti.hitval20 = utils.stringTrim(forms.AsiUtiTrs_txt_tratamiento_ingreso.f_informe).length > 0 ? 1 : 0;
					asiutitrs_rel_tbc_hciti_to_tbc_hciti.hitval19 = utils.stringTrim(forms.AsiUtiTrs_txt_estudios_solicitados.f_informe).length > 0 ? 1 : 0;
					asiutitrs_rel_tbc_hciti_to_tbc_hciti.hitval21 = utils.stringTrim(forms.AsiUtiTrs_txt_interconsulta.f_informe).length > 0 ? 1 : 0;
					asiutitrs_rel_tbc_hciti_to_tbc_hciti.hitval22 = utils.stringTrim(forms.AsiUtiTrs_txt_otros.f_informe).length > 0 ? 1 : 0;
					
					
					if(asiutitrs_rel_tbc_hciti_to_tbc_hciti.asiutitrs_rel_buscar_patologia_1.getSize()==0){
						asiutitrs_rel_tbc_hciti_to_tbc_hciti.hitpat1=0;
					}
					if(asiutitrs_rel_tbc_hciti_to_tbc_hciti.asiutitrs_re_buscar_patologia_2.getSize()==0){
						asiutitrs_rel_tbc_hciti_to_tbc_hciti.hitpat2=0;
					}
					if(asiutitrs_rel_tbc_hciti_to_tbc_hciti.asiutitrs_re_buscar_patologia_3.getSize()==0){
						asiutitrs_rel_tbc_hciti_to_tbc_hciti.hitpat3=0;
					}
					
					// UPP
					if(forms.AsiUtiTrs_txt_examen_fisico.tieneUPP=='1'){
						asiutitrs_rel_tbc_hciti_to_tbc_hciti.hitgradoupp = utils.stringToNumber(forms.AsiUtiTrs_txt_examen_fisico.gradoUPP);
						asiutitrs_rel_tbc_hciti_to_tbc_hciti.hitlocalupp = utils.stringToNumber(forms.AsiUtiTrs_txt_examen_fisico.localizacionUPP);
						if(forms.AsiUtiTrs_txt_examen_fisico.localizacionUPP=='4'){
							asiutitrs_rel_tbc_hciti_to_tbc_hciti.hitlocalotupp = forms.AsiUtiTrs_txt_examen_fisico.otraLocalizacionUPP;
						}else{
							asiutitrs_rel_tbc_hciti_to_tbc_hciti.hitlocalotupp = ' ';
						}
					}
					else if(forms.AsiUtiTrs_txt_examen_fisico.tieneUPP==2){
						asiutitrs_rel_tbc_hciti_to_tbc_hciti.hitgradoupp = 0
						asiutitrs_rel_tbc_hciti_to_tbc_hciti.hitlocalupp = 0
						asiutitrs_rel_tbc_hciti_to_tbc_hciti.hitlocalotupp = ' ';
					}
					
					//SATI-Q
					asiutitrs_rel_tbc_hciti_to_tbc_hciti.hitsatiqreingreso = $hist_clin_reingreso
					asiutitrs_rel_tbc_hciti_to_tbc_hciti.hitsatiqprocedencia = $hist_clin_procedencia
					asiutitrs_rel_tbc_hciti_to_tbc_hciti.hitsatiqpatologia = $hist_clin_patologia
					
					//Seteamos a cero cualquier valor del foundset que sea null
					var dataproviders = asiutitrs_rel_tbc_hciti_to_tbc_hciti.alldataproviders;
					for(var i = 0;i<dataproviders.length; i++){
						if(asiutitrs_rel_tbc_hciti_to_tbc_hciti[dataproviders[i]]==null){
							asiutitrs_rel_tbc_hciti_to_tbc_hciti[dataproviders[i]]= 0;
						}
					}
					
					// Actualizando base de datos
					databaseManager.startTransaction()
					var resultSave = databaseManager.saveData(asiutitrs_rel_tbc_hciti_to_tbc_hciti.getRecord(1));
					if(resultSave && nuevoHciint){
						
						globals.AsiUtiTrs_hiiHisCli = asiutitrs_numero_to_tbc_admision.adm_histclin;
						globals.AsiUtiTrs_fechaHciint = fecha;
						globals.AsiUtiTrs_horaHciint = hora;
					}
					
					// Guardando informes
					var itemHistClin = asiutitrs_numero_to_tbc_admision.adm_histclin;
					var itemFecha = asiutitrs_rel_tbc_hciti_to_tbc_hciti.hitfecha;
					var itemHora = asiutitrs_rel_tbc_hciti_to_tbc_hciti.hithora;
					var itemGrupo = 1;

					
					// Informe Motivo de ingreso
					if (asiutitrs_rel_tbc_hciti_to_tbc_hciti.hitval1 == 1 && resultSave)
						resultSave = guardarTexto(itemHistClin, itemFecha, itemHora, itemGrupo, 1, forms.AsiUtiTrs_txt_motivo_ingreso.f_informe);

					// Examen Físico
					if (asiutitrs_rel_tbc_hciti_to_tbc_hciti.hitval7 == 1 && resultSave)
						resultSave = guardarTexto(itemHistClin, itemFecha, itemHora, itemGrupo, 2, forms.AsiUtiTrs_txt_examen_fisico.f_informe);

					// Neurológico
					if (asiutitrs_rel_tbc_hciti_to_tbc_hciti.hitval8 == 1 && resultSave)
						resultSave = guardarTexto(itemHistClin, itemFecha, itemHora, itemGrupo, 3, forms.AsiUtiTrs_txt_neurológico.f_informe);

					// Cardiovascular
					if (asiutitrs_rel_tbc_hciti_to_tbc_hciti.hitval12 == 1 && resultSave)
						resultSave = guardarTexto(itemHistClin, itemFecha, itemHora, itemGrupo, 4, forms.AsiUtiTrs_txt_cardiovascular.f_informe);

					// Respiratorio
					if (asiutitrs_rel_tbc_hciti_to_tbc_hciti.hitval13 == 1 && resultSave)
						resultSave = guardarTexto(itemHistClin, itemFecha, itemHora, itemGrupo, 5, forms.AsiUtiTrs_txt_respiratorio.f_informe);

					// Abdomen
					if (asiutitrs_rel_tbc_hciti_to_tbc_hciti.hitval15 == 1 && resultSave)
						resultSave = guardarTexto(itemHistClin, itemFecha, itemHora, itemGrupo, 6, forms.AsiUtiTrs_txt_abdominal.f_informe);

					// Osteo articular
					if (asiutitrs_rel_tbc_hciti_to_tbc_hciti.hitval16 == 1 && resultSave)
						resultSave = guardarTexto(itemHistClin, itemFecha, itemHora, itemGrupo, 7, forms.AsiUtiTrs_txt_osteo_articular.f_informe);
					// Urología
					if (asiutitrs_rel_tbc_hciti_to_tbc_hciti.hitval17 == 1 && resultSave)
						resultSave = guardarTexto(itemHistClin, itemFecha, itemHora, itemGrupo, 8, forms.AsiUtiTrs_txt_urogenital.f_informe);

					// Tratamiento
					if (asiutitrs_rel_tbc_hciti_to_tbc_hciti.hitval20 == 1 && resultSave)
						resultSave = guardarTexto(itemHistClin, itemFecha, itemHora, itemGrupo, 9, forms.AsiUtiTrs_txt_tratamiento_ingreso.f_informe);

					// Estado solicitud
					if (asiutitrs_rel_tbc_hciti_to_tbc_hciti.hitval19 == 1 && resultSave)
						resultSave = guardarTexto(itemHistClin, itemFecha, itemHora, itemGrupo, 10, forms.AsiUtiTrs_txt_estudios_solicitados.f_informe);

					// Interconsultas
					if (asiutitrs_rel_tbc_hciti_to_tbc_hciti.hitval21 == 1 && resultSave)
						resultSave = guardarTexto(itemHistClin, itemFecha, itemHora, itemGrupo, 11, forms.AsiUtiTrs_txt_interconsulta.f_informe);

					// OTROS
					if (asiutitrs_rel_tbc_hciti_to_tbc_hciti.hitval22 == 1 && resultSave)
						resultSave = guardarTexto(itemHistClin, itemFecha, itemHora, itemGrupo, 12, forms.AsiUtiTrs_txt_otros.f_informe);
	
			
					var nuevaFechaActual = application.getServerTimeStamp();
					var nuevaFechaAux = nuevaFechaActual;
					var nuevaNow = globals.FormatearFecha(nuevaFechaActual,"AAAAMMDD");
					
					nuevaFechaAux.setDate( nuevaFechaActual.getDate() - 1 );
					var nuevaAyer = globals.FormatearFecha(nuevaFechaAux,"AAAAMMDD");
					
					var sql_query = "select * from tbc_imapedi_new IMAPEDI inner join tbc_imapedet_new IMAPEDET on IMAPEDET.IdetServicio = IMAPEDI.IpedServicio AND IMAPEDET.IdetPedido = IMAPEDI.IpedPedido AND IMAPEDET.IdetCodiNom=170101 AND IMAPEDET.IdetTipoNom=01";
					sql_query += " WHERE IMAPEDI.IpedServicio1=12 AND IMAPEDI.IpedAdmis=0 AND IMAPEDI.IpedHistClinica="+asiutitrs_rel_tbc_hciti_to_tbc_hciti.hithiscli+" and (IMAPEDI.IpedFechaPedido="+nuevaAyer+" OR IMAPEDI.IpedFechaPedido="+nuevaNow+") ORDER BY IMAPEDI.IpedServicio1, IMAPEDI.IpedAdmis, IMAPEDI.IpedHistClinica";
					var pElectro = databaseManager.getDataSetByQuery('asistencial',sql_query,null,-1);
					if(pElectro.getMaxRowIndex() <= 0 && generarECG==1){
					generarImagen(12,asiutitrs_rel_tbc_hciti_to_tbc_hciti.hitfecha,asiutitrs_rel_tbc_hciti_to_tbc_hciti.hithora);
						editableSolicitudAutomatica(false);
						forms.HciutiTrs_frm_hist_clin_ingreso_utiTrs.generarECG=0;
					}
					
					
					if (resultSave == true) {

						databaseManager.commitTransaction();
						globals.DIALOGS.showInfoDialog("Resultado", "La historia clínica de ingreso a Terapia Intensiva se guardó correctamente.", "Aceptar");
						//que hago
						/*asiutitrs_rel_tbc_hciti_to_tbc_hciti.hiitsele_1 = 0;
						asiutitrs_rel_tbc_hciti_to_tbc_hciti.hiitsele_2 = 0;
						asiutitrs_rel_tbc_hciti_to_tbc_hciti.hiitsele_3 = 0;
						asiutitrs_rel_tbc_hciti_to_tbc_hciti.hiitsele_4 = 0;*/

						// Desbloquear paciente en asi_bloqueos y setear $usuario_actual a null para liberar el recurso
						globals.bloquearHistClin(globals.AsiUtiTrs_hisclin.toString(),false)
						
						
						editablePaciente(false);				
						habilitarECG();
						
						//FUNCIONALIDAD ARM COMENTADO. PROBLEMAS DE TABLAS EN PRODUCCION.
						verificarARM();

						globals.modificarCampos("HciutiTrs_frm_hist_clin_ingreso_utiTrs");
						
						var elementosTab1 = forms.HciutiTrs_frm_hist_clin_ingreso_utiTrs.elements.tab_informe_1.getMaxTabIndex()
						for (var index = 1; index <= elementosTab1; index++) {
							var nombreFormulario = forms.HciutiTrs_frm_hist_clin_ingreso_utiTrs.elements.tab_informe_1.getTabFormNameAt(index);
							globals.modificarCampos(nombreFormulario);						
						}
						var elementosTab2 = forms.HciutiTrs_frm_hist_clin_ingreso_utiTrs.elements.tab_informe_2.getMaxTabIndex()
						for (var index2 = 1; index2 <= elementosTab2; index2++) {
							var nombreFormulario2 = forms.HciutiTrs_frm_hist_clin_ingreso_utiTrs.elements.tab_informe_2.getTabFormNameAt(index2);
							globals.modificarCampos(nombreFormulario2);
						}
						forms.HciutiTrs_frm_hist_clin_ingreso_utiTrs.elements.btn_grabar.enabled=false;
						forms.HciutiTrs_frm_hist_clin_ingreso_utiTrs.elements.btn_cancelar.enabled=false;
						
						globals.AsiUtiTrs_soloLectura=true;
						

						var print = globals.DIALOGS.showQuestionDialog('¡Atención!', '¿Desea imprimir la historia clínica de ingreso a Terapia Intensiva?', 'Sí', 'No');
						if (print == 'Si') {
							imprimir(asiutitrs_rel_tbc_hciti_to_tbc_hciti.hithiscli, asiutitrs_rel_tbc_hciti_to_tbc_hciti.hitfecha, asiutitrs_rel_tbc_hciti_to_tbc_hciti.hithora);
						}

						$isDirty = false;
						//Limpiamos el formulario
						inicializarForm();
						
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
								var thrown = record.exception.getStackTrace()
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
}

/**
 * @properties={typeid:24,uuid:"77260CB0-49AD-4441-AEA8-5D67592EBACA"}
 */
function grabarCodAuto() {
	
	var camaActual = 0;
	
	var sql = "select Cam_UtilActual_1,Cam_UtilActual_2,Cam_UtilActual_3,Cam_UtilActual_4,Cam_UtilActual_5"
		    + ",Cam_UtilAlterna_1,Cam_UtilAlterna_2,Cam_UtilAlterna_3,Cam_UtilAlterna_4,Cam_UtilAlterna_5,Cam_UtilStand"
			+ " from tbc_camas where Cam_Habi = " + asiutitrs_numero_to_tbc_admision.adm_habita + " and cam_Cama = '" + asiutitrs_numero_to_tbc_admision.adm_cama + "'";
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
	var obra = asiutitrs_numero_to_tbc_admision.adm_obrsoc;
	var planX10 = asiutitrs_numero_to_tbc_admision.adm_planobr;
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
		
		asiutitrs_rel_codauto.newRecord();
		inicializarRelacionCodAuto();
		
		asiutitrs_rel_codauto.codautoempr = empresa;
		asiutitrs_rel_codauto.codautoempr5 = empresa;
		asiutitrs_rel_codauto.codautoadmi = 0;
		asiutitrs_rel_codauto.codautoobra = obra;
		asiutitrs_rel_codauto.codautoobra3 = obra;
		asiutitrs_rel_codauto.codautoobra4 = obra;
		asiutitrs_rel_codauto.codautoobra6 = obra;
		
		asiutitrs_rel_codauto.codautohist = asiutitrs_numero_to_tbc_admision.adm_histclin;
		asiutitrs_rel_codauto.codautohist3 = asiutitrs_numero_to_tbc_admision.adm_histclin;
		asiutitrs_rel_codauto.codautohist4 = asiutitrs_numero_to_tbc_admision.adm_histclin;
		asiutitrs_rel_codauto.codautohist5 = asiutitrs_numero_to_tbc_admision.adm_histclin;
		asiutitrs_rel_codauto.codautohist6 = asiutitrs_numero_to_tbc_admision.adm_histclin;
		
		asiutitrs_rel_codauto.codautoserv = servCodAuto;
		asiutitrs_rel_codauto.codautoserv3 = servCodAuto;
		asiutitrs_rel_codauto.codautoserv4 = servCodAuto;
		asiutitrs_rel_codauto.codautoserv6 = servCodAuto;
		asiutitrs_rel_codauto.codautofsol = fecha
		asiutitrs_rel_codauto.codautohsol = hora;
		asiutitrs_rel_codauto.codautotipo = nomeTipo;
		asiutitrs_rel_codauto.codautocdar = nomeCodi;
		asiutitrs_rel_codauto.codautosect = camaActual;
		asiutitrs_rel_codauto.codautopedi = 0;
		asiutitrs_rel_codauto.codautotmed = globals.AsiUtiTrs_vTipoOperador;
		asiutitrs_rel_codauto.codautomedi = globals.AsiUtiTrs_vLega;
		asiutitrs_rel_codauto.codautoutiliza = asiutitrs_numero_to_tbc_admision.adm_utiliza;
		asiutitrs_rel_codauto.codautohabita = 0;
		
		if(asiutitrs_rel_buscar_obrasocial.obrmodautpre == 1 || asiutitrs_rel_buscar_obrasocial.obrmodautpre == 3){
			var codAutoEsta = 2;
			asiutitrs_rel_codauto.codautoesta3 = codAutoEsta;
			asiutitrs_rel_codauto.codautoesta4 = codAutoEsta;
			asiutitrs_rel_codauto.codautoesta6 = codAutoEsta;
		}
	
		var sql_query = "select nome_pantalla,nome_descr from tbc_nomencla where nome_tipo = " + nomeTipo + " and nome_codigo = " + nomeCodi;
		var ds_nomencla = databaseManager.getDataSetByQuery('maestros',sql_query,null,-1);
		if(ds_nomencla.getMaxRowIndex() > 0){
			asiutitrs_rel_codauto.codautopant = ds_nomencla.getValue(1,1);
			nomeDesc = utils.stringTrim(ds_nomencla.getValue(1,2));
		}
		else
			asiutitrs_rel_codauto.codautopant = 4;
		
		asiutitrs_rel_codauto.codautoplan = globals.Call_2142_planX;
		asiutitrs_rel_codauto.codautoplan3 = globals.Call_2142_planX;
		asiutitrs_rel_codauto.codautoplan4 = globals.Call_2142_planX;
		asiutitrs_rel_codauto.codautoplan6 = globals.Call_2142_planX;
		
		var isValidSave = databaseManager.saveData(asiutitrs_rel_codauto.getRecord(1));
		if(isValidSave){
			
			var paciente = utils.stringTrim(asiutitrs_numero_to_tbc_admision.adm_apelnom);
			var afiliado = utils.stringTrim(asiutitrs_numero_to_tbc_admision.adm_nrobenef);
			enviarEmail(paciente,afiliado,nomeDesc,fecha,camaActual,Number(hora));
		}
	}
}

/**
 * @AllowToRunInFind
 * 
 * TODO generated, please specify type and doc for the params
 * @param paciente
 * @param afiliado
 * @param nomeDesc
 * @param fecha
 * @param sector
 * @param hora
 *
 * @properties={typeid:24,uuid:"DD71739C-0434-4B3E-B1E2-1F08056D180A"}
 */
function enviarEmail(paciente,afiliado,nomeDesc,fecha,sector,hora) {
	
	if(asiutitrs_rel_buscar_obrasocial.obrmodautpre == 1 || asiutitrs_rel_buscar_obrasocial.obrmodautpre == 3){
		
		var mailObrTipo = 2;
		if(asiutitrs_rel_buscar_obrasocial.obr_codigo == 1132)
			mailObrTipo = 4;

		var fs_mailObra = databaseManager.getFoundSet("asistencial","tbc_mail_obra");
		fs_mailObra.find();
		fs_mailObra['mailobr1'] = asiutitrs_rel_buscar_obrasocial.obr_codigo
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
				var patCie = asiutitrs_numero_to_asistencial_admision.adm_patoling;
				
				var sqlMaxFecha = "select ptpfecha,ptphora,ptppatol from tbc_patolpac where"
				  + " ptphistclinica = " + asiutitrs_numero_to_asistencial_admision.adm_histclin
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
								
				if(asiutitrs_rel_buscar_obrasocial.obr_espami == 1){
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
				
				var histClinica = asiutitrs_numero_to_asistencial_admision.adm_histclin;
				var histClin =  "Nro.Inter. "+histClinica.toString().substr(0,histClinica.toString().length-1)+"/"+histClinica.toString().substr(histClinica.toString().length -1,1)
				
				$ds2.addRow([paciente,asiutitrs_rel_buscar_obrasocial.obr_razonsoc,afiliado,histClin,nomeDesc,diagnostico,medico,matricula])
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
				
				var fileName = asiutitrs_numero_to_asistencial_admision.adm_histclin + "-"+ fecha + "-" + hora + "-431110.pdf";
				var arch;
				try{
					arch = plugins.file.createFile(fileName);
					//application.output( arch.getAbsolutePath());
					//globals.DIALOGS.showWarningDialog("Atencion","Directorio del archivo: " + arch.getAbsolutePath(),"Aceptar");
					
				}catch(msg){
					grabaLog(msg.toString(),asiutitrs_numero_to_asistencial_admision.adm_histclin);
				}
				
				if (arch){	
					try{
						//var fileName = "c:/temp/LB-CIRUAMBU-" + fechaDesde + "-" + fechaHasta;
						//plugins.jasperPluginRMI.compileReport("ASI-UCO-SOL-AUT.jrxml");
						plugins.jasperPluginRMI.runReport($ds2,'ASI-UCO-SOL-AUT.jasper',arch.getAbsolutePath(),plugins.jasperPluginRMI.OUTPUT_FORMAT.PDF,params)
					}catch(e){
						grabaLog(e.message,asiutitrs_numero_to_asistencial_admision.adm_histclin)
					}
				}
				
				var attachment1;
				try{
					attachment1 = plugins.mail.createBinaryAttachment(fileName,plugins.file.readFile(arch.getAbsolutePath()));
					
				}catch(msg){
					grabaLog(msg.toString(),asiutitrs_numero_to_asistencial_admision.adm_histclin)
				}	
				
				// Envio de email
				var subJect = "Solicitud Autoriz.- Paciente " + paciente + " - " + nomeDesc;
				
				var msgText = "Estimado/a\n\n"
				+ "                Se adjunta Práctica en formato PDF para Autorizar correspondiente al paciente " + paciente + " Afiliado: " + afiliado + " con indicacion de: " + nomeDesc + "\n\n"
				
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
						to = globals.DIALOGS.showInputDialog(puerto[2],"Ingrese dirección de correo electrónico",'fhuertas@cirendsa.com.ar');
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
						
						grabarReenviaMail(asiutitrs_numero_to_asistencial_admision.adm_histclin,to,cc,cco,subJect,msgText,attachmentList,cuenta);
						var msgMail = "No ha sido posible enviar la autorización de UCO via E-mail";
						grabaLog(msgMail,asiutitrs_numero_to_asistencial_admision.adm_histclin);
					}
				}
				else{
					
					grabarReenviaMail(asiutitrs_numero_to_asistencial_admision.adm_histclin,to,cc,cco,subJect,msgText,attachmentList,cuenta);
					var msg = "No ha sido posible enviar la autorización de UCO. Dirección de correo electrónico no válido.\n E-mail: " + aux_mail_error;
					grabaLog(msg,asiutitrs_numero_to_asistencial_admision.adm_histclin)
				}
				
				if(arch){
					
					try{
					  	plugins.file.deleteFile(arch.getAbsolutePath())
					  	plugins.file.deleteFile(arch)
					  }catch(msg){
							grabaLog("Error al eliminar archivo pdf.",asiutitrs_numero_to_asistencial_admision.adm_histclin)
					}	
				}
			//}
		}
	}
}

/**
 * TODO generated, please specify type and doc for the params
 * @param {Number} histClin
 * @param {Number} fecha
 * @param {Number} hora
 * @param {Number} grupo
 * @param {Number} item
 * @param {String} texto
 *
 * @properties={typeid:24,uuid:"827E308A-9C31-4B6F-ABD1-E154B2EA137F"}
 */
function guardarTexto(histClin, fecha, hora, grupo, item, texto) {
	
	globals.AsiUtiTrs_hiiHisCli = histClin;
	globals.AsiUtiTrs_fechaTxt = fecha;
	globals.AsiUtiTrs_horaTxt = hora;
	globals.AsiUtiTrs_grupoTxt = grupo;
	globals.AsiUtiTrs_itemTxt = item;
	
	
	//globals.AsiUtiTrs_itemTxt = item;
	if (asiutitrs_rel_buscar_hcititxt.getSize() == 0) {

		asiutitrs_rel_buscar_hcititxt.newRecord();
		asiutitrs_rel_buscar_hcititxt.histclinica = histClin;
		asiutitrs_rel_buscar_hcititxt.fecha = fecha;
		asiutitrs_rel_buscar_hcititxt.hora = hora;
		asiutitrs_rel_buscar_hcititxt.grupo = grupo;
		asiutitrs_rel_buscar_hcititxt.item = item;

	}

	asiutitrs_rel_buscar_hcititxt.linea = utils.stringTrim(texto);

	return databaseManager.saveData(asiutitrs_rel_buscar_hcititxt.getRecord(1));

}

/**
 * @properties={typeid:24,uuid:"99EF0B9C-F958-49BF-BB1A-A89E99691D08"}
 */
function isValidDataForm() {	
	isValidForm = true;
	messageError = "<html> <span>No ha sido posible guardar la solicitud. Corrija los siguientes errores y vuelva a intentar:<span> <ol>"
	
	
	if (globals.IsBlank(f_patologia1) || asiutitrs_rel_tbc_hciti_to_tbc_hciti.hitpat1<1) {
		messageError += "<li> Debe ingresar al menos una patología. <li>";
		isValidForm = false;
	}

	
	validateRequired('HciutiTrs_frm_hist_clin_ingreso_utiTrs',false,'',false,0);
	
	var elementosTab1 = forms.HciutiTrs_frm_hist_clin_ingreso_utiTrs.elements.tab_informe_1.getMaxTabIndex()
	for (var index = 1; index <= elementosTab1; index++) {
		var nombreFormulario = forms.HciutiTrs_frm_hist_clin_ingreso_utiTrs.elements.tab_informe_1.getTabFormNameAt(index);
		validateRequired(nombreFormulario,true,'txt_area_',true,17);
		
	}
	var elementosTab2 = forms.HciutiTrs_frm_hist_clin_ingreso_utiTrs.elements.tab_informe_2.getMaxTabIndex()
	for (var index2 = 1; index2 <= elementosTab2; index2++) {
		var nombreFormulario2 = forms.HciutiTrs_frm_hist_clin_ingreso_utiTrs.elements.tab_informe_2.getTabFormNameAt(index2);
		
		validateRequired(nombreFormulario2,true,'txt_area_',true,17);
	}

	
	if (asiutitrs_rel_tbc_hciti_to_tbc_hciti.hitval3 > asiutitrs_rel_tbc_hciti_to_tbc_hciti.hitval2) {
		messageError += "<li> La Tensión Arterial Mínima debe ser menor o igual a la Máxima. </li>";
		isValidForm = false;
	}

	if (asiutitrs_rel_tbc_hciti_to_tbc_hciti.hitresver< 1) {
		messageError += "<li> Debe ingresar: Respuesta verbal. </li>";
		isValidForm = false;
	}

	if (asiutitrs_rel_tbc_hciti_to_tbc_hciti.hitresocu<1) {
		messageError += "<li> Debe ingresar: Respuesta ocular. </li>";
		isValidForm = false;
	}

	if (asiutitrs_rel_tbc_hciti_to_tbc_hciti.hitresmot<1) {
		messageError += "<li> Debe ingresar: Respuesta motora.</li>";
		isValidForm = false;
	}
	
	if(forms.AsiUtiTrs_txt_examen_fisico.tieneUPP==''){ //asiutitrs_rel_tbc_hciti_to_tbc_hciti.hitgradoupp==9
		messageError += "<li> Debe ingresar: Si paciente tiene úlcera por presión.</li>";
		isValidForm = false;
	}
	if(validProcedencia==false){
		messageError += "<li> Debe seleccionar procedencia del paciente en el panel de Sati-q.</li>";
		isValidForm = false;
	}
	
	if(validReingreso==false){
		messageError += "<li> Debe seleccionar si el paciente es un reingreso en el panel de Sati-q. Recuerde que el episodio de internación es un reingreso, dentro de la misma internación y dentro de las 48hs.</li>";
		isValidForm = false;
	}
	
	if(validPatologia==false){
		messageError += "<li> Debe seleccionar la patología en el panel de Sati-q.</li>";
		isValidForm = false;
	}
	//casos por default con grado 9. No se sabe. Al guardar no saldra validacion. En caso que genere una nueva no podra guardar no se sabe.
	if(asiutitrs_rel_tbc_hciti_to_tbc_hciti.hitgradoupp!=9 && forms.AsiUtiTrs_txt_examen_fisico.tieneUPP=='0'){
		messageError += "<li> La úlcera por presión no puede permanecer indefinida.</li>";
		isValidForm = false;
	}
	messageError += "</ol> </html>"
	var nuevaFechaActual = application.getServerTimeStamp();
	var nuevaFechaAux = nuevaFechaActual;
	var nuevaNow = globals.FormatearFecha(nuevaFechaActual,"AAAAMMDD");
	nuevaFechaAux.setDate( nuevaFechaActual.getDate() - 1 );
	var nuevaAyer = globals.FormatearFecha(nuevaFechaAux,"AAAAMMDD");
	
	var sql_query = "select * from tbc_imapedi_new IMAPEDI inner join tbc_imapedet_new IMAPEDET on IMAPEDET.IdetServicio = IMAPEDI.IpedServicio AND IMAPEDET.IdetPedido = IMAPEDI.IpedPedido AND IMAPEDET.IdetCodiNom=170101 AND IMAPEDET.IdetTipoNom=01";
	sql_query += " WHERE IMAPEDI.IpedServicio1=12 AND IMAPEDI.IpedAdmis=0 AND IMAPEDI.IpedHistClinica="+asiutitrs_rel_tbc_hciti_to_tbc_hciti.hithiscli+" and (IMAPEDI.IpedFechaPedido="+nuevaAyer+" OR IMAPEDI.IpedFechaPedido="+nuevaNow+") ORDER BY IMAPEDI.IpedServicio1, IMAPEDI.IpedAdmis, IMAPEDI.IpedHistClinica";
	var pElectro = databaseManager.getDataSetByQuery('asistencial',sql_query,null,-1);
	
	
	if(elements.chk_ecg.enabled==true && pElectro.getMaxRowIndex()<=0 && forms.HciutiTrs_frm_hist_clin_ingreso_utiTrs.generarECG==0){
		var seguroECG= globals.DIALOGS.showQuestionDialog("Generación ECG","¿Está seguro que no quiere generar ECG?","SÍ","NO ESTOY SEGURO");
		if(seguroECG=="NO ESTOY SEGURO"){
			messageError += "\nChequee la opción ECG para generarla";
			isValidForm = false;
		}
	}
	
	if(forms.AsiUtiTrs_txt_examen_fisico.tieneUPP=='1'){
		if(forms.AsiUtiTrs_txt_examen_fisico.gradoUPP==''){
			messageError += "\nDebe elegir un nivel de grado para UPP";
			isValidForm = false;
		}
		if(forms.AsiUtiTrs_txt_examen_fisico.localizacionUPP==''){
			messageError += "\nDebe elegir una localización del UPP";
			isValidForm = false;
		}
		if(forms.AsiUtiTrs_txt_examen_fisico.localizacionUPP=='4' && utils.stringTrim(forms.AsiUtiTrs_txt_examen_fisico.otraLocalizacionUPP)==''){
			messageError += "\nDebe cargar la nueva localización del UPP";
			isValidForm = false;
		}
	}

	
	/*////////// INICIO VALIDADOR ////////////////////*/
	if (!isValidForm) {
		globals.DIALOGS.showWarningDialog("¡Atención!", messageError, "Aceptar")
		return isValidForm;
	}
	/*////////// FIN VALIDADOR ////////////////////*/
	validarPatologia(f_patologia1,'hitpat1');
	validarPatologia(f_patologia2,'hitpat2');
	validarPatologia(f_patologia3,'hitpat3');
	
	return isValidForm;
}

/**
 * @properties={typeid:24,uuid:"696A92F1-A3BB-44E5-9F19-06E67F0DE250"}
 * @SuppressWarnings(unused)
 */
function isValidData() {

	var isValid = true;
	var messageError1 = "No ha sido posible guardar la solicitud. Corrija los siguientes errores y vuelva a intentar."
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
 * TODO generated, please specify type and doc for the params
 * @param {String} formName
 * @param {Boolean} validarSinPropertys
 * @param {String} patron
 * @param {Boolean} validarCantCaracteres
 * @param {Number} minCaracteres
 *
 * @properties={typeid:24,uuid:"C287AB55-610B-4068-A9FD-AD6FF941B9AD"}
 */
function validateRequired(formName, validarSinPropertys, patron, validarCantCaracteres, minCaracteres){
    var ok = true;
    var textReplace=(patron!=null && !globals.IsBlank(patron))? patron:'txt_';
    var flds = forms[formName].elements
	for (var item in flds) {
		var elm = flds[item];
		var name = elm.getName();
		var propEncontrada = elm.getDesignTimeProperty('requerido');
		textReplace = name.split("_")[0]; //+"_"+name.split("_")[1];
//		application.output("Name: ")
//		application.output(name)
//		application.output("Element: ")
//		application.output(elm)
		//si tiene propertys hay que validar
		if (name != null && name.indexOf("grp") == -1 && propEncontrada == true || validarSinPropertys && propEncontrada == undefined) { 
			if (!name instanceof RuntimeComponent){
			//obtenemos variable asociada
			var dp = elm.getDataProviderID(); 
			var arrRelacion = dp.split(".");
//			application.output("DP: ")
//			application.output(dp)
//			application.output("ArrRelacion: ")
//		    application.output(arrRelacion)
			if (dp.indexOf("rel") > 0 && !globals[arrRelacion[0]][arrRelacion[1]] >= 1) {
				isValidForm = false;
				if (propEncontrada && name.indexOf(textReplace) == -1) {
					messageError += "\nDebe ingresar: " + forms[formName].elements[name].getName().replace('txt_', '').replace(/\_/g, ' ');
				} else {
					messageError += "\nDebe ingresar: " + forms[formName].elements[name].getName().replace(textReplace, '').replace(/\_/g, ' ');
				}
				if (validarCantCaracteres && propEncontrada == undefined) {
					messageError += ' Con ' + minCaracteres + ' caracteres como mínimo.';
				}
			} else if (dp.indexOf("rel") == -1) {
				if ( (validarCantCaracteres && forms[formName][dp] != null && forms[formName][dp].length < minCaracteres) || globals.IsBlank(forms[formName][dp])) {
					isValidForm = false;
					if (propEncontrada && name.indexOf(textReplace) == -1) {
						messageError += "\nDebe ingresar: " + forms[formName].elements[name].getName().replace('txt_', '').replace(/\_/g, ' ');
					} else {
						messageError += "\nDebe ingresar: " + forms[formName].elements[name].getName().replace(textReplace, '').replace(/\_/g, ' ');
					}
					if (validarCantCaracteres && propEncontrada == undefined)messageError += ' Con ' + minCaracteres + ' caracteres como mínimo.'; 
				} else {
				propEncontrada = false;
			     }
		}
			}
			}   
  }
	return ok;
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"BB33BD51-9685-4A5A-B9CB-093A1148CD89"}
 */
function onAction_btnCerrar(event) {
	f_cerrarForm=true;
	var $win = application.getWindow(application.getActiveWindow().getName());
	if ($isDirty) {
		var respuesta = globals.DIALOGS.showQuestionDialog('¡Atención!', 'Existen datos que no han sido guardados. ¿Está seguro que desea continuar?', 'Sí', 'No')
		if (respuesta == 'Sí'){
			if($win){
				$win.hide();
				$win.destroy();
			} else {
				globals.DIALOGS.showErrorDialog('¡Error!',"No se pudo cerrar la ventana")
			}
		} else {
			elements.txt_frecuencia.requestFocus();
		}
	} else {
		if($win){
			$win.hide();
			$win.destroy();
		} else {
			globals.DIALOGS.showErrorDialog('¡Error!',"No se pudo cerrar la ventana")
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
 * @properties={typeid:24,uuid:"D34DA033-D1A9-45AA-968D-2EF38D994348"}
 */
function onHide_cerrarForm(event) {
	if(!f_cerrarForm)
		globals.DIALOGS.showInfoDialog("Atención","Para cerrar el programa debe presionar el botón Salir.","Aceptar")
	return f_cerrarForm;
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"8307310A-2814-4B7F-8792-DF0CF822F8FC"}
 */
function onAction_buscarPatologia_1(event) {
	f_patologia = f_patologia1;
	globals.AsiUtiTrs_patDataProvider = 'hitpat1';
	openBuscarPatologia();
}

/**
 * @properties={typeid:24,uuid:"44EB6F80-D83B-4AC4-A84B-F2887E7C1AE3"}
 */
function openBuscarPatologia() {
	//f_patologia = f_patologia1;
	if(globals.AsiUtiTrs_ultimaHisCli==true && globals.AsiUtiTrs_soloLectura==false){
		var win2 = application.createWindow("seleccion_patologia", JSWindow.MODAL_DIALOG);
		win2.title = 'Búsqueda de Diagnóstico';
		win2.resizable = false;
		win2.show(forms.AsiUtiTrs_dlg_buscar_patologia);
	}

}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"C65E09F6-F5BF-4618-9587-88FBBF271E2C"}
 */
function onAction_buscarPatologia_2(event) {
	f_patologia = f_patologia2;
	globals.AsiUtiTrs_patDataProvider = 'hitpat2';  //'hiidiag2'; --
	if(!globals.IsBlank(f_patologia1) && f_patologia1!=0 && asiutitrs_rel_tbc_hciti_to_tbc_hciti.asiutitrs_rel_buscar_patologia_1.getSize()>0)
		openBuscarPatologia();
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"71814C2A-5F95-4DDD-B0B7-370E11F97BAF"}
 */
function onAction_buscarPatologia_3(event) {
	f_patologia = f_patologia3;
	globals.AsiUtiTrs_patDataProvider = 'hitpat3';
	if(!globals.IsBlank(f_patologia2) && f_patologia2!=0 && asiutitrs_rel_tbc_hciti_to_tbc_hciti.asiutitrs_re_buscar_patologia_2.getSize() && asiutitrs_rel_tbc_hciti_to_tbc_hciti.asiutitrs_rel_buscar_patologia_1.getSize()>0)
		openBuscarPatologia();
}

/**
 * @properties={typeid:24,uuid:"A54B7547-0B62-4923-93C2-AC43C93CA935"}
 */
function inicializarRelacionHcint() {

	asiutitrs_rel_tbc_hciti_to_tbc_hciti.hitfecha = 0;
	asiutitrs_rel_tbc_hciti_to_tbc_hciti.hithiscli = 0;
	asiutitrs_rel_tbc_hciti_to_tbc_hciti.hithora = 0;
	asiutitrs_rel_tbc_hciti_to_tbc_hciti.hitval15 = 0;
	asiutitrs_rel_tbc_hciti_to_tbc_hciti.hitval12 = 0;
	asiutitrs_rel_tbc_hciti_to_tbc_hciti.hitval18 = 0;
	asiutitrs_rel_tbc_hciti_to_tbc_hciti.hitval7 = 0;
	asiutitrs_rel_tbc_hciti_to_tbc_hciti.hitfecha2 = 0;
	asiutitrs_rel_tbc_hciti_to_tbc_hciti.hithora2 = 0;
	asiutitrs_rel_tbc_hciti_to_tbc_hciti.hitval5 = 0;
	asiutitrs_rel_tbc_hciti_to_tbc_hciti.hitval21 = 0;
	asiutitrs_rel_tbc_hciti_to_tbc_hciti.hitlegajomed = 0;
	asiutitrs_rel_tbc_hciti_to_tbc_hciti.hitval1 = 0;
	asiutitrs_rel_tbc_hciti_to_tbc_hciti.hitval8 = 0;
	asiutitrs_rel_tbc_hciti_to_tbc_hciti.hitval22 = 0;
	asiutitrs_rel_tbc_hciti_to_tbc_hciti.hitval16 = 0;
	asiutitrs_rel_tbc_hciti_to_tbc_hciti.hitval4 = 0;
	asiutitrs_rel_tbc_hciti_to_tbc_hciti.hitval6 = 0;
	asiutitrs_rel_tbc_hciti_to_tbc_hciti.hitval2 = 0;
	asiutitrs_rel_tbc_hciti_to_tbc_hciti.hitval3 = 0;
	asiutitrs_rel_tbc_hciti_to_tbc_hciti.hitval23 = 0;
	asiutitrs_rel_tbc_hciti_to_tbc_hciti.hitval20 = 0;
	asiutitrs_rel_tbc_hciti_to_tbc_hciti.hitval17 = 0;
	asiutitrs_rel_tbc_hciti_to_tbc_hciti.hitval9 = 0;
	asiutitrs_rel_tbc_hciti_to_tbc_hciti.hitval10 = 0;
	asiutitrs_rel_tbc_hciti_to_tbc_hciti.hitval11 = 0;
	asiutitrs_rel_tbc_hciti_to_tbc_hciti.hitval13 = 0;
	asiutitrs_rel_tbc_hciti_to_tbc_hciti.hitval14 = 0;
	asiutitrs_rel_tbc_hciti_to_tbc_hciti.hitval19 = 0;
	
}

/**
 * @properties={typeid:24,uuid:"EE24E64F-04BB-4668-B50D-8CCCF5804382"}
 */
function inicializarRelacionAlert() {

	asiutitrs_rel_alerta.aler_histclin=0;
	asiutitrs_rel_alerta.aler_tipadmi = 0;
	asiutitrs_rel_alerta.aler_alergico = ' ';
	asiutitrs_rel_alerta.aler_codoper = 0;
	asiutitrs_rel_alerta.aler_filler = ' ';
	asiutitrs_rel_alerta.aler_tipaler_1 = 0;
	asiutitrs_rel_alerta.aler_tipaler_10 = 0;
	asiutitrs_rel_alerta.aler_tipaler_11 = 0;
	asiutitrs_rel_alerta.aler_tipaler_12 = 0;
	asiutitrs_rel_alerta.aler_tipaler_13 = 0;
	asiutitrs_rel_alerta.aler_tipaler_14 = 0;
	asiutitrs_rel_alerta.aler_tipaler_15 = 0;
	asiutitrs_rel_alerta.aler_tipaler_16 = 0;
	asiutitrs_rel_alerta.aler_tipaler_17 = 0;
	asiutitrs_rel_alerta.aler_tipaler_18 = 0;
	asiutitrs_rel_alerta.aler_tipaler_19 = 0;
	asiutitrs_rel_alerta.aler_tipaler_2 = 0;
	asiutitrs_rel_alerta.aler_tipaler_20 = 0;
	asiutitrs_rel_alerta.aler_tipaler_21 = 0;
	asiutitrs_rel_alerta.aler_tipaler_22 = 0;
	asiutitrs_rel_alerta.aler_tipaler_23 = 0;
	asiutitrs_rel_alerta.aler_tipaler_24 = 0;
	asiutitrs_rel_alerta.aler_tipaler_25 = 0;
	asiutitrs_rel_alerta.aler_tipaler_3 = 0;
	asiutitrs_rel_alerta.aler_tipaler_4 = 0;
	asiutitrs_rel_alerta.aler_tipaler_5 = 0;
	asiutitrs_rel_alerta.aler_tipaler_6 = 0;
	asiutitrs_rel_alerta.aler_tipaler_7 = 0;
	asiutitrs_rel_alerta.aler_tipaler_8 = 0;
	asiutitrs_rel_alerta.aler_tipaler_9 = 0;
	asiutitrs_rel_alerta.aler_tipoper = 0;

}

/**
 * TODO generated, please specify type and doc for the params
 * @param {Date} Fecha_Desde
 * @param {Date} Fecha_Hasta
 *
 * @properties={typeid:24,uuid:"AE67D14A-59F7-4918-99F4-F4593AF5A2C3"}
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
 * @properties={typeid:24,uuid:"88F33F88-A79E-46DA-A864-5A5A3DD1B35A"}
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
 * @properties={typeid:24,uuid:"401DE2F0-45F5-400D-9C73-2A5DDABDDF09"}
 */
function onTabChange_informe_1(previousIndex, event) {

	//if($_countChange == 1)
	//validarInforme(previousIndex,elements.tab_informe_1.getName(),elements.tab_informe_1.getTabFormNameAt(previousIndex),elements.tab_informe_1.getTabTextAt(previousIndex));
	elements.tab_informe_1.setTabFGColorAt(previousIndex, '#000000');
	elements.tab_informe_1.setTabFGColorAt(elements.tab_informe_1.tabIndex, '#3336ff');
	
	if(elements.tab_informe_1.tabIndex == 1)
		forms.AsiUtiTrs_txt_motivo_ingreso.elements.txt_area_Motivo_Ingreso.requestFocus();
	
	if(elements.tab_informe_1.tabIndex == 2)
		forms.AsiUtiTrs_txt_examen_fisico.elements.txt_area_Examen_Fisico.requestFocus();
	
	if(elements.tab_informe_1.tabIndex == 3)
		forms.AsiUtiTrs_txt_neurológico.elements.txt_area_Neurológico.requestFocus();
	
	if(elements.tab_informe_1.tabIndex == 4)
		forms.AsiUtiTrs_txt_cardiovascular.elements.txt_area_Cardiovascular.requestFocus();
	
	if(elements.tab_informe_1.tabIndex == 5)
		forms.AsiUtiTrs_txt_respiratorio.elements.txt_area_Respiratorio.requestFocus();
	
	if(elements.tab_informe_1.tabIndex == 6)
		forms.AsiUtiTrs_txt_abdominal.elements.txt_area_Abdominal.requestFocus();

}

/**
 * TODO generated, please specify type and doc for the params
 * @param {Number} previousIndex
 * @param {String} tabName
 * @param {String} formName
 * @param {String} title
 *
 * @properties={typeid:24,uuid:"9930321F-FEFB-4F81-80C8-FB5DF6434FF5"}
 */
function validarInforme(previousIndex, tabName, formName, title) {

	if (previousIndex != 3) {

		var isValid = true;
		if (utils.stringTrim(forms[formName].f_informe).length < 18)
			isValid = false;

		if (!isValid) {

			// Para evitar la recursividad
			$_countChange = 0;
			elements[tabName].tabIndex = previousIndex;

			var messageError2 = "";
			messageError += "Informe : " + title;
			messageError += "\n\n Dr.";
			messageError += "\nPor favor, expláyese algo más."
			messageError += "\nResulta indispensable, con el fin de evitar inconvenientes";
			messageError += "\nlegales, NO utilizar abreviaturas."

			globals.DIALOGS.showWarningDialog("¡Atención!", messageError, "Aceptar");
			//forms[formName].controller.focusFirstField()
			$_countChange = 1;

		} else {
			//forms[formName].controller.focusFirstField();
			elements[tabName].setTabFGColorAt(previousIndex, '#000000');
			elements[tabName].setTabFGColorAt(elements[tabName].tabIndex, '#3336ff');

			$_countChange = 1;
		}
	} else {
		elements[tabName].setTabFGColorAt(previousIndex, '#000000');
		elements[tabName].setTabFGColorAt(elements[tabName].tabIndex, '#3336ff');
	}
}

/**
 * Callback method when the user changes tab in a tab panel or divider position in split pane.
 *
 * @param {Number} previousIndex index of tab shown before the change
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"6D6638E5-802D-4609-BE1E-71E903515612"}
 */
function onTabChange_informe_2(previousIndex, event) {

	//if($_countChange == 1)
	//validarInforme(previousIndex,elements.tab_informe_2.getName(),elements.tab_informe_2.getTabFormNameAt(previousIndex),elements.tab_informe_2.getTabTextAt(previousIndex));

	elements.tab_informe_2.setTabFGColorAt(previousIndex, '#000000');
	elements.tab_informe_2.setTabFGColorAt(elements.tab_informe_2.tabIndex, '#3336ff');
	
	if(elements.tab_informe_2.tabIndex == 1)
		forms.AsiUtiTrs_txt_osteo_articular.elements.txt_area_Osteo_Articular_Muscular.requestFocus();
	
	if(elements.tab_informe_2.tabIndex == 2) 
		forms.AsiUtiTrs_txt_urogenital.elements.txt_area_Urogenital.requestFocus();
	
	/*if(elements.tab_informe_2.tabIndex == 3)
		forms.AsiUtiTrs_txt_diagnostico.elements.hcicirtxt1.requestFocus();*/
	
	if(elements.tab_informe_2.tabIndex == 3)
		forms.AsiUtiTrs_txt_tratamiento_ingreso.elements.txt_area_Tratamiento_Ingreso.requestFocus();
	
	if(elements.tab_informe_2.tabIndex == 4)
		forms.AsiUtiTrs_txt_estudios_solicitados.elements.txt_area_Estudios_Solicitados.requestFocus();
	
	if(elements.tab_informe_2.tabIndex == 5)
		forms.AsiUtiTrs_txt_interconsulta.elements.txt_area_Interconsulta.requestFocus();
	
	if(elements.tab_informe_2.tabIndex == 6)
		forms.AsiUtiTrs_txt_otros.elements.txt_area_Otros.requestFocus();
	

}

/**
 * TODO generated, please specify type and doc for the params
 * @param {Number} histClin
 * @param {Number} fecha
 * @param {Number} hora
 *
 * @properties={typeid:24,uuid:"F089CD1C-EE53-4BAD-8713-48648F97CE23"}
 */
function imprimir(histClin, fecha, hora) {
	
	forms.AsiUtiTrs_print.imprimirAsiUtiTrs(histClin, fecha, hora)
	//forms.AsiUtiTrs_print.controller.setPageFormat(210,297,10,10,10,10,1,0);
	//forms.AsiUtiTrs_print.controller.print(false,false);
	/*
	 var win = application.createWindow("impri_paciente",JSWindow.MODAL_DIALOG);
	 win.title = "Impresion de Hitória Clínica";
	 win.resizable = false;
	 win.show(forms.AsiUtiTrs_print)
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
 * @properties={typeid:24,uuid:"BCB827CE-1EB5-4DB5-8E28-8D98CF918B87"}
 */
function onDataChange_txtField(oldValue, newValue, event) {
	return validarPatologia(f_patologia1,'hitpat1');
	/*if(f_patologia1==null || globals.IsBlank(f_patologia1)){
		f_patologia1=0;
	}
	if(f_patologia1!=0 && (!isNaN(f_patologia1) && utils.stringToNumber(f_patologia1)>2147483647)){
		plugins.dialogs.showInfoDialog("Valor Diagnostico","valor no valido","ok")
		return;
	}
	if(!globals.IsBlank(f_patologia1) && !isNaN(f_patologia1)){
		asiutitrs_rel_tbc_hciti_to_tbc_hciti.hitpat1=f_patologia1;
	}else{
		asiutitrs_rel_tbc_hciti_to_tbc_hciti.hitpat1=0;
	}
	$isDirty = true;
	return true*/
}

/**
 * TODO generated, please specify type and doc for the params
 * @param oldValue
 * @param newValue
 * @param event
 *
 * @properties={typeid:24,uuid:"2707349A-5949-4498-A771-36BCD1D3A774"}
 */
function onDataChange_txtField2(oldValue, newValue, event) {
	// TODO Auto-generated method stub
	
	validarPatologia(f_patologia2,'hitpat2');
	/*if(f_patologia2==null || globals.IsBlank(f_patologia2)){
		f_patologia2=0;
	}
	if(f_patologia2!=0  && (!isNaN(f_patologia2) && utils.stringToNumber(f_patologia2)>2147483647)){
		plugins.dialogs.showInfoDialog("Valor Diagnostico","valor no valido","ok")
		return;
	}
	if(!globals.IsBlank(f_patologia2) && !isNaN(f_patologia2)){
		asiutitrs_rel_tbc_hciti_to_tbc_hciti.hitpat2=f_patologia2;
	}else{
		asiutitrs_rel_tbc_hciti_to_tbc_hciti.hitpat2=0;
	}
		
		$isDirty = true;
	
	return true*/
}

/**
 * TODO generated, please specify type and doc for the params
 * @param oldValue
 * @param newValue
 * @param event
 *
 * @properties={typeid:24,uuid:"E1654438-DB11-485D-A9D6-96B9A65C281D"}
 */
function onDataChange_txtField3(oldValue, newValue, event) {
	// TODO Auto-generated method stub
	validarPatologia(f_patologia3,'hitpat3');
	/*if(f_patologia3==null || globals.IsBlank(f_patologia3)){
		f_patologia3=0;
	}
	if(f_patologia3!=0  && (!isNaN(f_patologia3) && utils.stringToNumber(f_patologia3)>2147483647)){
		plugins.dialogs.showInfoDialog("Valor Diagnostico","valor no valido","ok")
		return;
	}
	if(!globals.IsBlank(f_patologia3) && !isNaN(f_patologia3)){
		asiutitrs_rel_tbc_hciti_to_tbc_hciti.hitpat3=f_patologia3;
	}else{
		asiutitrs_rel_tbc_hciti_to_tbc_hciti.hitpat3=0;
	}
		
		$isDirty = true;
	
	return true*/
}

/**
 * TODO generated, please specify type and doc for the params
 * @param patologia
 * @param secPatologia
 *
 * @properties={typeid:24,uuid:"5D2D5958-CB8C-4C11-B470-81E239D6C355"}
 * @AllowToRunInFind
 */
function validarPatologia(patologia, secPatologia){ //hitpat1, hitpat2, hitpat3
	
	if(patologia==null || globals.IsBlank(patologia)){
		patologia="";
	}
	if(patologia!=0  && (!isNaN(patologia) && utils.stringToNumber(patologia)>2147483647)){
		plugins.dialogs.showInfoDialog("Valor Diagnóstico","valor no válido","ok")
		return;
	}
	// si es codigo
	if(!globals.IsBlank(patologia) && !isNaN(patologia)){
		switch (secPatologia) {
		case 'hitpat1':
			asiutitrs_rel_tbc_hciti_to_tbc_hciti.asiutitrs_rel_buscar_patologia_1.pat_codi=patologia;
			asiutitrs_rel_tbc_hciti_to_tbc_hciti[secPatologia]=patologia;
			forms.HciutiTrs_frm_hist_clin_ingreso_utiTrs.elements.txt_diagnostico2.editable=true;
			if(asiutitrs_rel_tbc_hciti_to_tbc_hciti.asiutitrs_rel_buscar_patologia_1.getSize()==0){
				asiutitrs_rel_tbc_hciti_to_tbc_hciti[secPatologia]=0;
				forms.HciutiTrs_frm_hist_clin_ingreso_utiTrs.elements.txt_diagnostico2.editable=false;
			}
			break;
		case 'hitpat2':
			asiutitrs_rel_tbc_hciti_to_tbc_hciti.asiutitrs_re_buscar_patologia_2.pat_codi=patologia;
			asiutitrs_rel_tbc_hciti_to_tbc_hciti[secPatologia]=patologia;
			forms.HciutiTrs_frm_hist_clin_ingreso_utiTrs.elements.txt_diagnostico3.editable=true;
			if(asiutitrs_rel_tbc_hciti_to_tbc_hciti.asiutitrs_re_buscar_patologia_2.getSize()==0){
				asiutitrs_rel_tbc_hciti_to_tbc_hciti[secPatologia]=0;
				forms.HciutiTrs_frm_hist_clin_ingreso_utiTrs.elements.txt_diagnostico3.editable=false;
			}
			break;
		case 'hitpat3':
			asiutitrs_rel_tbc_hciti_to_tbc_hciti.asiutitrs_re_buscar_patologia_3.pat_codi=patologia;
			asiutitrs_rel_tbc_hciti_to_tbc_hciti[secPatologia]=patologia;
			
			if(asiutitrs_rel_tbc_hciti_to_tbc_hciti.asiutitrs_re_buscar_patologia_3.getSize()==0){
				asiutitrs_rel_tbc_hciti_to_tbc_hciti[secPatologia]=0;
			}
			break;
		default:
			break;
		}
		
		//asiutitrs_rel_tbc_hciti_to_tbc_hciti.asiutitrs_rel_buscar_patologia_1.pat_codi=patologia;
		
	}else{//si es texto
		if(!globals.IsBlank(patologia)){
			f_pendienteDeSeleccion=true;
		}else{
			asiutitrs_rel_tbc_hciti_to_tbc_hciti[secPatologia]=0;
			switch (secPatologia) {
			case 'hitpat1':
			forms.HciutiTrs_frm_hist_clin_ingreso_utiTrs.elements.txt_diagnostico2.editable=false;
			forms.HciutiTrs_frm_hist_clin_ingreso_utiTrs.elements.txt_diagnostico3.editable=false;
			forms.HciutiTrs_frm_hist_clin_ingreso_utiTrs.f_patologia2="";
			forms.HciutiTrs_frm_hist_clin_ingreso_utiTrs.f_patologia3="";
				break;
			case 'hitpat2':
			forms.HciutiTrs_frm_hist_clin_ingreso_utiTrs.elements.txt_diagnostico3.editable=false;
			forms.HciutiTrs_frm_hist_clin_ingreso_utiTrs.f_patologia3="";
				break;	
			default:
				break;
			}
		}
		/*var textoPatologia = patologia.toLocaleUpperCase();
		
		if(textoPatologia){
			forms.AsiUtiTrs_tbl_patologia_alfa.foundset.find();
		    forms.AsiUtiTrs_tbl_patologia_alfa.foundset.pat_descrip = '>=' + valorIngresado;
		    forms.AsiUtiTrs_tbl_patologia_alfa.foundset.search();
		}
		asiutitrs_rel_tbc_hciti_to_tbc_hciti[globals.AsiUtiTrs_patDataProvider] = foundset.pat_codi;
		forms.HciutiTrs_frm_hist_clin_ingreso_utiTrs.$isDirty = true;*/
		
	}
		
		$isDirty = true;
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
 * @properties={typeid:24,uuid:"D4B31608-8015-4681-A418-923AF9822D05"}
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
 * @properties={typeid:24,uuid:"FA3BF6D0-DC97-416E-8F6D-648AB2C6E13C"}
 */
function onAction_imprimir(event) {
	
	if (asiutitrs_rel_tbc_hciti_to_tbc_hciti.hitfecha > 0) {
		
		if(!$isDirty){
			
			var respuesta = globals.DIALOGS.showQuestionDialog('¡Atención!', '¿Está seguro que desea imprimir?', 'Sí', 'No');
			if (respuesta == 'Sí') {
				imprimir(asiutitrs_rel_tbc_hciti_to_tbc_hciti.hithiscli,asiutitrs_rel_tbc_hciti_to_tbc_hciti.hitfecha,asiutitrs_rel_tbc_hciti_to_tbc_hciti.hithora);
			}
		}
		else
			globals.DIALOGS.showInfoDialog("Atención", "No ha sido posible imprimir. Existen modificaciones pendientes para guardar.", "Aceptar")
	} else
		globals.DIALOGS.showWarningDialog("Atención!", "No existe una historia clínica de ingreso para imprimir.", "Aceptar");
}

/**
 * TODO generated, please specify type and doc for the params
 * @param {Number} servicio
 * @param {Number} fecha
 * @param {Number} hora
 *
 * @properties={typeid:24,uuid:"BB198416-C61E-4C85-8361-3815232454BF"}
 */
function generarImagen(servicio,fecha,hora) {
	
	var nroPedido = 0;
	var nroPedUnico = 0;
	var isValidSave = false;
	
	globals.AsiUtiTrs_servCodigo = servicio;
	var modalidad = asiutitrs_rel_buscar_servicio.servmodalidadvisual;
	var servCodAuto = asiutitrs_rel_buscar_servicio.servcodauto;
	var completarNroPedidoUnico = false;
	if(utils.stringTrim(modalidad).length > 0){

		if((asiutitrs_rel_buscar_obrasocial.obr_espami == 2 && asiutitrs_rel_buscar_servicio.servcodigo != 6)  || (asiutitrs_rel_buscar_obrasocial.obr_espami != 2 && servicio != 6)){
			
			completarNroPedidoUnico = true;
		}
	}
	
	if(servicio == 12)
		nroPedido = obtenerNumerador("desal","tbl_parametros","contador_entero","paramid",21);
	
	if(servicio == 1)
		nroPedido = obtenerNumerador("desal","tbl_parametros","contador_entero","paramid",20);
	
	if (nroPedido > 0) {
		
		asiutitrs_rel_imapedi_new.newRecord();
		inicializarRelacionImapediNew();
		
		if(completarNroPedidoUnico)
			nroPedUnico = obtenerNumerador("parametros","param2","prm2_54","key_param2",1);
		
		// Completando imapedi
		asiutitrs_rel_imapedi_new.ipedpedido = nroPedido;
		asiutitrs_rel_imapedi_new.ipedservicio = servicio;
		asiutitrs_rel_imapedi_new.ipedservicio1 = servicio;
		asiutitrs_rel_imapedi_new.ipedservicio2 = servicio;
		asiutitrs_rel_imapedi_new.ipedservicio3 = servicio;
		asiutitrs_rel_imapedi_new.ipedservicio4 = servicio;
		
		var sector = obtenerSector();
		asiutitrs_rel_imapedi_new.ipedsector = sector; 
		asiutitrs_rel_imapedi_new.ipedhistclinica = asiutitrs_numero_to_tbc_admision.adm_histclin;
		asiutitrs_rel_imapedi_new.ipedhistcldesc = utils.stringTrim(asiutitrs_numero_to_tbc_admision.adm_apelnom);
		asiutitrs_rel_imapedi_new.ipedfechapedido = fecha;
		asiutitrs_rel_imapedi_new.ipedfechapedido4 = fecha;
		asiutitrs_rel_imapedi_new.ipedhorapedido = hora; 
		asiutitrs_rel_imapedi_new.ipedhorapedido4 = hora;
		
		asiutitrs_rel_imapedi_new.ipedobra = asiutitrs_numero_to_tbc_admision.adm_obrsoc;
		asiutitrs_rel_imapedi_new.ipedplan = utils.stringTrim(asiutitrs_numero_to_tbc_admision.adm_planobr).length > 0 ? utils.stringTrim(asiutitrs_numero_to_tbc_admision.adm_planobr) : ' ';
		asiutitrs_rel_imapedi_new.ipedmedsolic = globals.AsiUtiTrs_vLega;
		asiutitrs_rel_imapedi_new.ipediesolic = globals.AsiUtiTrs_vTipoOperador;
		asiutitrs_rel_imapedi_new.ipedhabi = asiutitrs_numero_to_tbc_admision.adm_habita;
		asiutitrs_rel_imapedi_new.ipedcama = asiutitrs_numero_to_tbc_admision.adm_cama;
		asiutitrs_rel_imapedi_new.ipedurgen = 2;
		asiutitrs_rel_imapedi_new.ipednropedunico = nroPedUnico;
		
		
		// Actualizando base de datos
		isValidSave = databaseManager.saveData(asiutitrs_rel_imapedi_new.getRecord(1));
		if(isValidSave){
			
			//Completando imapedet
			asiutitrs_rel_imapedet_new.newRecord();
			inicializarImapedetNew();
			
			asiutitrs_rel_imapedet_new.idetservicio = servicio;
			asiutitrs_rel_imapedet_new.idetservicio3 = servicio;
			asiutitrs_rel_imapedet_new.idetservicio4 = servicio;
			asiutitrs_rel_imapedet_new.idetservicio5 = servicio;
			asiutitrs_rel_imapedet_new.idetpedido = nroPedido;
			asiutitrs_rel_imapedet_new.idetpedido3 = nroPedido;
			asiutitrs_rel_imapedet_new.idetpedido4 = nroPedido;
			
			var tipoNom = 1;
			var codiNom = 0;
			if(servicio == 12)
				codiNom = 170101;
			else
				codiNom = 340301;
			
			asiutitrs_rel_imapedet_new.idettiponom = tipoNom;
			asiutitrs_rel_imapedet_new.idettiponom1 = tipoNom;
			asiutitrs_rel_imapedet_new.idetcodinom = codiNom;	
			asiutitrs_rel_imapedet_new.idetcodinom1 = codiNom;
			asiutitrs_rel_imapedet_new.idethistclinica = asiutitrs_numero_to_tbc_admision.adm_histclin;
			
			isValidSave = databaseManager.saveData(asiutitrs_rel_imapedet_new.getRecord(1));
			
			if(isValidSave){
				
				// Cod Auto
				var empresa = 1;
				var obra = asiutitrs_numero_to_tbc_admision.adm_obrsoc;
				var nomeDesc = '';
				var planx10 = utils.stringTrim(asiutitrs_numero_to_tbc_admision.adm_planobr).length > 0 ? utils.stringTrim(asiutitrs_numero_to_tbc_admision.adm_planobr) : '';
				
				globals.Call_2142_InicializarVariables();
				globals.Call_2142_empresa = empresa;
				globals.Call_2142_obra = obra;
				globals.Call_2142_planX10 = planx10;
				globals.Call_2142_sector = sector;
				globals.Call_2142_tipoNome = tipoNom;
				globals.Call_2142_codiNome = codiNom;
				
				// AUTORIZACION-CODAUTO
				globals.Call_2142_ControlCodobra();
				
				if(globals.Call_2142_ok == true && globals.Call_2142_autori == 1){
					
					asiutitrs_rel_codauto.newRecord();
					inicializarRelacionCodAuto();
					
					asiutitrs_rel_codauto.codautoempr = empresa;
					asiutitrs_rel_codauto.codautoempr5 = empresa;
					asiutitrs_rel_codauto.codautoadmi = 0;
					asiutitrs_rel_codauto.codautoobra = obra;
					asiutitrs_rel_codauto.codautoobra3 = obra;
					asiutitrs_rel_codauto.codautoobra4 = obra;
					asiutitrs_rel_codauto.codautoobra6 = obra;
				
					asiutitrs_rel_codauto.codautohist = asiutitrs_numero_to_tbc_admision.adm_histclin;
					asiutitrs_rel_codauto.codautohist3 = asiutitrs_numero_to_tbc_admision.adm_histclin;
					asiutitrs_rel_codauto.codautohist4 = asiutitrs_numero_to_tbc_admision.adm_histclin;
					asiutitrs_rel_codauto.codautohist5 = asiutitrs_numero_to_tbc_admision.adm_histclin;
					asiutitrs_rel_codauto.codautohist6 = asiutitrs_numero_to_tbc_admision.adm_histclin;
					
					asiutitrs_rel_codauto.codautoserv = servCodAuto;
					asiutitrs_rel_codauto.codautoserv3 = servCodAuto;
					asiutitrs_rel_codauto.codautoserv4 = servCodAuto;
					asiutitrs_rel_codauto.codautoserv6 = servCodAuto;
					asiutitrs_rel_codauto.codautofsol = fecha;
					asiutitrs_rel_codauto.codautohsol = globals.CapturaHoraSistema('HHMMSSDD');
					asiutitrs_rel_codauto.codautotipo = tipoNom;
					asiutitrs_rel_codauto.codautocdar = codiNom;
					asiutitrs_rel_codauto.codautosect = sector;
					asiutitrs_rel_codauto.codautopedi = nroPedido;
					asiutitrs_rel_codauto.codautotmed = globals.AsiUtiTrs_vTipoOperador;
					asiutitrs_rel_codauto.codautomedi = globals.AsiUtiTrs_vLega;
					asiutitrs_rel_codauto.codautoutiliza = asiutitrs_numero_to_tbc_admision.adm_utiliza;
					asiutitrs_rel_codauto.codautohabita = 0;
					
					if(asiutitrs_rel_buscar_obrasocial.obrmodautpre == 1 || asiutitrs_rel_buscar_obrasocial.obrmodautpre == 3){
						var codAutoEsta = 2;
						asiutitrs_rel_codauto.codautoesta3 = codAutoEsta;
						asiutitrs_rel_codauto.codautoesta3 = codAutoEsta;
						asiutitrs_rel_codauto.codautoesta3 = codAutoEsta;
					}
					
					var sql_query = "select nome_pantalla,nome_descr from tbc_nomencla where nome_tipo = " + tipoNom + " and nome_codigo = " + codiNom;
					var ds_nomencla = databaseManager.getDataSetByQuery('maestros',sql_query,null,-1);
					if(ds_nomencla.getMaxRowIndex() > 0){
						asiutitrs_rel_codauto.codautopant = ds_nomencla.getValue(1,1);
						nomeDesc = utils.stringTrim(ds_nomencla.getValue(1,2));
					}
					else
						asiutitrs_rel_codauto.codautopant = 4;
					
					var sqlplan = "select PloPlanX from tbc_plan_obra where PloObra = " + asiutitrs_numero_to_tbc_admision.adm_obrsoc + " and PloPlanX10 = '" + planx10 + "'";
					var ds_planObra = databaseManager.getDataSetByQuery('asistencial',sqlplan,null,-1);
					if(ds_planObra.getMaxRowIndex() > 0){
						
						asiutitrs_rel_codauto.codautoplan = ds_planObra.getValue(1,1);
						asiutitrs_rel_codauto.codautoplan3 = ds_planObra.getValue(1,1);
						asiutitrs_rel_codauto.codautoplan4 = ds_planObra.getValue(1,1);
						asiutitrs_rel_codauto.codautoplan6 = ds_planObra.getValue(1,1);
					}
						
					isValidSave = databaseManager.saveData(asiutitrs_rel_codauto.getRecord(1));
					if(isValidSave){
						var paciente = utils.stringTrim(asiutitrs_numero_to_asistencial_admision.adm_apelnom);
						var afiliado = utils.stringTrim(asiutitrs_numero_to_asistencial_admision.adm_nrobenef);
						//enviarEmail(paciente,afiliado,nomeDesc,fecha,sector,hora);
					}
					
				}
				
				// Interfase Visual Medica
				if(utils.stringTrim(modalidad).length > 0){
					
					if((asiutitrs_rel_buscar_obrasocial.obr_espami == 2 && asiutitrs_rel_buscar_servicio.servcodigo != 6) || asiutitrs_rel_buscar_obrasocial.obr_espami != 2){
						
						globals.GenerarTXTInterfaseVisualMedica(1, servicio, nroPedido, asiutitrs_numero_to_tbc_admision.adm_histclin, fecha, 0, hora)
						
					}
				}
				
				// TODO SERV-REALIZA-TEC 
				// alctualmente los servicios 1 y 12 tienen valor 1
				if(asiutitrs_rel_buscar_servicio.servrealizatec == 0){
					
				}
			}
		}
		
		if(!isValidSave){
			
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
					var thrown = record.exception.getStackTrace()
					//plugins.dialogs.showErrorDialog("Error de grabación","Record validation failed: " + thrown)
				}
			}

			//databaseManager.rollbackTransaction()

			if (error1 != '') {
				globals.DIALOGS.showErrorDialog("Error de grabación", "Record validation failed: " + thrown)
				globals.DIALOGS.showErrorDialog("Error en grabación de Histórico", error1, "Aceptar")
				globals.DIALOGS.showErrorDialog("Error en grabación de Histórico", error2, "Aceptar")
			}
			globals.DIALOGS.showErrorDialog("Error en grabación", asiutitrs_rel_buscar_servicio.servabrevia + "\nSe ha producido un error de grabación. " + '\n' + "Avise a Sistemas, por favor.", "Aceptar")	
		}
			
	}
}

/**
 * @properties={typeid:24,uuid:"7631C5A5-BDBB-45E8-993B-361B340EC4F8"}
 */
function obtenerSector() {
	
	var sector = 0;
	globals.AsiUtiTrs_camCama = asiutitrs_numero_to_tbc_admision.adm_cama;
	globals.AsiUtiTrs_camHabita = asiutitrs_numero_to_tbc_admision.adm_habita;
	
	if(asiutitrs_rel_buscar_cama.getSize() > 0){
		
		sector = asiutitrs_rel_buscar_cama.cam_utilstand;
		                         
		var i;
		for(i = 1; i <= 5; i++){
			
			if(asiutitrs_rel_buscar_cama['cam_utilactual_'+ i] == 1){
				
				sector = asiutitrs_rel_buscar_cama['cam_utilalterna_'+ i]
			}
		}
	}
	
	return sector;
}

/**
 * TODO generated, please specify type and doc for the params
 * @param {String} serverName
 * @param {String} tableName
 * @param {String} columnName
 * @param {String} primaryKey
 * @param {Number} keyValue
 *
 * @properties={typeid:24,uuid:"7A1F014D-7247-4AA1-8499-8B01FA33D8A2"}
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

/**
 * @properties={typeid:24,uuid:"D33FA735-A45E-42DC-9262-A236C491BCB2"}
 */
function inicializarRelacionImapediNew() {
	
	asiutitrs_rel_imapedi_new.ipedpedido= 0;
	asiutitrs_rel_imapedi_new.ipedservicio= 0;
	asiutitrs_rel_imapedi_new.ipedadmis= 0;
	asiutitrs_rel_imapedi_new.ipedadmis4= 0;
	asiutitrs_rel_imapedi_new.ipedatendiportecnico= 0;
	asiutitrs_rel_imapedi_new.ipedcama= ' ';
	asiutitrs_rel_imapedi_new.ipedcodianeste= 0;
	asiutitrs_rel_imapedi_new.ipedcodioper= 0;
	asiutitrs_rel_imapedi_new.ipedestado= 0;
	asiutitrs_rel_imapedi_new.ipedfechadife= 0;
	asiutitrs_rel_imapedi_new.ipedfechapedido= 0;
	asiutitrs_rel_imapedi_new.ipedfechapedido4= 0;
	asiutitrs_rel_imapedi_new.ipedfecharesul= 0;
	asiutitrs_rel_imapedi_new.ipedhabi= 0;
	asiutitrs_rel_imapedi_new.ipedhcprotesis= 0;
	asiutitrs_rel_imapedi_new.ipedhistcldesc= ' ';
	asiutitrs_rel_imapedi_new.ipedhistclinica= 0;
	asiutitrs_rel_imapedi_new.ipedhoradife= 0;
	asiutitrs_rel_imapedi_new.ipedhorapedido= 0;
	asiutitrs_rel_imapedi_new.ipedhorapedido4= 0;
	asiutitrs_rel_imapedi_new.ipedhoraresul= 0;
	asiutitrs_rel_imapedi_new.ipediesolic= 0;
	asiutitrs_rel_imapedi_new.ipedimpreaviso= 0;
	asiutitrs_rel_imapedi_new.ipedlconfecc= 0;
	asiutitrs_rel_imapedi_new.ipedlegatecni= 0;
	asiutitrs_rel_imapedi_new.ipedmedsolic= 0;
	asiutitrs_rel_imapedi_new.ipedmotfund= 0;
	asiutitrs_rel_imapedi_new.ipedmotlegalanu= 0;
	asiutitrs_rel_imapedi_new.ipednrocine= ' ';
	asiutitrs_rel_imapedi_new.ipednropedunico= 0;
	asiutitrs_rel_imapedi_new.ipedobra= 0;
	asiutitrs_rel_imapedi_new.ipedoklectora= 0;
	asiutitrs_rel_imapedi_new.ipedparticular= 0;
	asiutitrs_rel_imapedi_new.ipedpatologico= 0;
	asiutitrs_rel_imapedi_new.ipedplan= ' ';
	asiutitrs_rel_imapedi_new.ipedresdiag= 0;
	asiutitrs_rel_imapedi_new.ipedreservasesp= 0;
	asiutitrs_rel_imapedi_new.ipedreservasfech= 0;
	asiutitrs_rel_imapedi_new.ipedreservashora= 0;
	asiutitrs_rel_imapedi_new.ipedreservasmed= 0;
	asiutitrs_rel_imapedi_new.ipedsector= 0;
	asiutitrs_rel_imapedi_new.ipedservicio1= 0;
	asiutitrs_rel_imapedi_new.ipedservicio2= 0;
	asiutitrs_rel_imapedi_new.ipedservicio3= 0;
	asiutitrs_rel_imapedi_new.ipedservicio4= 0;
	asiutitrs_rel_imapedi_new.ipedtipoaneste= 0;
	asiutitrs_rel_imapedi_new.ipedtipohcprotesis= 0;
	asiutitrs_rel_imapedi_new.ipedtipooper= 0;
	asiutitrs_rel_imapedi_new.ipedtipotecni= 0;
	asiutitrs_rel_imapedi_new.ipedtomo= 0;
	asiutitrs_rel_imapedi_new.ipedurgen= 0;
	asiutitrs_rel_imapedi_new.ipedembarazo=0;
	asiutitrs_rel_imapedi_new.ipedenvioimagen=0;
	asiutitrs_rel_imapedi_new.ipednordeges=0;
}

/**
 * @properties={typeid:24,uuid:"3802142A-6FD8-4D1C-A1DA-D434B9315408"}
 */
function inicializarImapedetNew() {
	
	asiutitrs_rel_imapedet_new.idetcodinom = 0;
	asiutitrs_rel_imapedet_new.idetpedido = 0;
	asiutitrs_rel_imapedet_new.idetservicio = 0;
	asiutitrs_rel_imapedet_new.idettiponom = 0;
	asiutitrs_rel_imapedet_new.idetadmis = 0;
	asiutitrs_rel_imapedet_new.idetcodinom1 = 0;
	asiutitrs_rel_imapedet_new.idetestado = 0;
	asiutitrs_rel_imapedet_new.idetfechainfor = 0;
	asiutitrs_rel_imapedet_new.idetfechareali = 0;
	asiutitrs_rel_imapedet_new.idetflagpasaje = 0;
	asiutitrs_rel_imapedet_new.idethistclinica = 0;
	asiutitrs_rel_imapedet_new.idethorainfor = 0;
	asiutitrs_rel_imapedet_new.idethorareali = 0;
	asiutitrs_rel_imapedet_new.idetieinfor = 0;
	asiutitrs_rel_imapedet_new.idetinforme = 0;
	asiutitrs_rel_imapedet_new.idetlegaanu = 0;
	asiutitrs_rel_imapedet_new.idetmedicamen = 0;
	asiutitrs_rel_imapedet_new.idetmedinfor = 0;
	asiutitrs_rel_imapedet_new.idetmotanu = 0;
	asiutitrs_rel_imapedet_new.idetmotlegalanu = 0;
	asiutitrs_rel_imapedet_new.idetpedido3 = 0;
	asiutitrs_rel_imapedet_new.idetpedido4 = 0;
	asiutitrs_rel_imapedet_new.idetpreinfor = 0;
	asiutitrs_rel_imapedet_new.idetservicio3 = 0;
	asiutitrs_rel_imapedet_new.idetservicio4 = 0;
	asiutitrs_rel_imapedet_new.idetservicio5 = 0;
	asiutitrs_rel_imapedet_new.idettipoinf = 0;
	asiutitrs_rel_imapedet_new.idettiponom1 = 0;
	asiutitrs_rel_imapedet_new.idettleganu = 0;
	asiutitrs_rel_imapedet_new.idetinsumosol = 0;
	asiutitrs_rel_imapedet_new.idetremoto = 0;
}

/**
 * @properties={typeid:24,uuid:"3431A72F-6282-4FA1-86B3-A932FEF19A62"}
 */
function inicializarRelacionCodAuto(){
	
	asiutitrs_rel_codauto.codautoadmi = 0;
	asiutitrs_rel_codauto.codautocdar = 0;
	asiutitrs_rel_codauto.codautoempr = 0;
	asiutitrs_rel_codauto.codautofsol = 0;
	asiutitrs_rel_codauto.codautohist = 0;
	asiutitrs_rel_codauto.codautohsol = 0;
	asiutitrs_rel_codauto.codautoobra = 0;
	asiutitrs_rel_codauto.codautoplan = ' ';
	asiutitrs_rel_codauto.codautoserv = 0;
	asiutitrs_rel_codauto.codautotipo = 0;
	asiutitrs_rel_codauto.codautoempr5 = 0;
	asiutitrs_rel_codauto.codautoesta3 = 0;
	asiutitrs_rel_codauto.codautoesta4 = 0;
	asiutitrs_rel_codauto.codautoesta6 = 0;
	asiutitrs_rel_codauto.codautofaut = 0;
	asiutitrs_rel_codauto.codautohabita = 0;
	asiutitrs_rel_codauto.codautohaut = 0;
	asiutitrs_rel_codauto.codautohist3 = 0;
	asiutitrs_rel_codauto.codautohist4 = 0;
	asiutitrs_rel_codauto.codautohist5 = 0;
	asiutitrs_rel_codauto.codautohist6 = 0;
	asiutitrs_rel_codauto.codautoimpre = 0;
	asiutitrs_rel_codauto.codautomedi = 0;
	asiutitrs_rel_codauto.codautoobra3 = 0;
	asiutitrs_rel_codauto.codautoobra4 = 0;
	asiutitrs_rel_codauto.codautoobra6 = 0;
	asiutitrs_rel_codauto.codautooper = 0;
	asiutitrs_rel_codauto.codautopant = 0;
	asiutitrs_rel_codauto.codautopedi = 0;
	asiutitrs_rel_codauto.codautoplan3 = ' ';
	asiutitrs_rel_codauto.codautoplan4 = ' ';
	asiutitrs_rel_codauto.codautoplan6 = ' ';
	asiutitrs_rel_codauto.codautosect = 0;
	asiutitrs_rel_codauto.codautoserv3 = 0;
	asiutitrs_rel_codauto.codautoserv4 = 0;
	asiutitrs_rel_codauto.codautoserv6 = 0;
	asiutitrs_rel_codauto.codautotmed = 0;
	asiutitrs_rel_codauto.codautotope = 0;
	asiutitrs_rel_codauto.codautoutiliza = 0;
	
}

/**
 * @properties={typeid:24,uuid:"0572BFB9-3F75-45CF-AB51-34B156F6CDD3"}
 * @SuppressWarnings(unused)
 */
function enviarSMSinterconsulta(){
	
	var nroCelular;
	var destinatario;
	elements.lbl_procesando.visible = true;
	application.updateUI();
	for(var j=0;j<$_listNumberSMS.length ; j++){
		
		var item = $_listNumberSMS.slice(j);
		var subItem = String(item[0]).split('|');
		nroCelular = subItem[0]+subItem[1];
		application.output("CodArea-NroCelular: " + subItem[0] + " - " + subItem[1]);
		
		// Validar codigo de area y numero celular
		
		destinatario = "";
		var url='';
		var largo_url=application.getServerURL().length
		if (largo_url<24){
			
			destinatario = "0";
			globals.DIALOGS.showInfoDialog("SMS",nroCelular + "\n" +  $_msgSMS,"Aceptar");
			
			
		}else{
			url = application.getServerURL().substr(0,23);
			var puerto = url.split(':');
			
			if(puerto[2]!='8080'){
				// Ambiente de pruebas 
				destinatario = globals.DIALOGS.showInputDialog(puerto[2],"Ingrese dirección de correo electrónico",'1199999999');
				
			}
			else{
				// Ambiente operativo
				destinatario = nroCelular;
			}
		}
		
		// Enviando SMS
		
		//var vString = vServer.executeCommand('ssh -l svysc 10.200.0.90 -C "sh sh-pruebaservoy1"');
		//var vString = vServer.executeCommand("`/usr/bin/curl --insecure --progress-bar -X POST -F 'number=03484360393' -F 'text=Prueba de comando' https://10.200.0.65:44443/EnvioSMS.php`");
		//var vString = vServer.executeCommand("/usr/bin/curl  --insecure https://10.200.0.65:44443/EnvioSMS.php?number=3484360393&text=Hola Mundo");
		//var vString = vServer.executeCommand("/app/servoy/scripts/sh-curl "+3484360393+" "+ftexto1+" "+ftexto2+" "+ftexto1+" "+ftexto2+" "+ftexto1+" "+ftexto2+" "+ftexto1+" "+ftexto2);
		if(utils.stringToNumber(destinatario) > 0){
			
			plugins.UserManager.register( "Hypertelia", "q9SA5eCyb085cvATVO8s9onGe3iBzJyCTel8Y7J72BuG599wodOiU5OL26/pkKyv");
			var vServer = plugins.UserManager.Server();
			var vString = vServer.executeCommand("/app/servoy/scripts/sh-curl "+destinatario+" "+$_msgSMS);
			//ENVIO OK
		}
		
	}
	elements.lbl_procesando.visible = false;
	application.updateUI();
}

/**
 * TODO generated, please specify type and doc for the params
 * @param {String} texto
 * @param {Number} histClin 
 *
 * @properties={typeid:24,uuid:"02F4FA3A-4B0F-4727-A669-B14C02BA02EC"}
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
		
				var thrown = record.exception.getStackTrace()
			
			}
		}
		databaseManager.rollbackTransaction()
	}
}

/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"91CB34E2-18AF-4463-B5B9-688A26C629D1"}
 */
function onLoad_inicializarForm(event) {
	
	initFormFirstShow();
	//forms.HciutiTrs_frm_hist_clin_ingreso_utiTrs.elements.ejemplo_menu.

	/*var vMenu = new Array();
	var vMenuItem;
	// Add some items
	vMenuItem = plugins.popupmenu.createMenuItem('Menu 1', aMethod);
	vMenu[vMenu.length] = vMenuItem;
	
	vMenuItem = plugins.popupmenu.createMenuItem('Menu 2', aMethod);
	vMenu[vMenu.length] = vMenuItem;
	// Create submenu
	var vSubMenu = new Array();
	vMenuItem = plugins.popupmenu.createMenuItem('Menu 2.1', aMethod);
	vSubMenu [vSubMenu.length] = vMenuItem;
	vMenuItem = plugins.popupmenu.createMenuItem('Menu 2.2', aMethod);
	vSubMenu [vSubMenu.length] = vMenuItem;
	// Add submenu
	vMenuItem = plugins.popupmenu.createMenuItem('mySubmenu', vSubMenu );
	vMenu[vMenu.length] = vMenuItem;*/
	
	
}

/**
 * @properties={typeid:24,uuid:"A74A0234-EE10-4A59-B539-634798CBA0F3"}
 */
function initFormFirstShow(){
	
	inicializarForm();
	f_medico = utils.stringTrim(globals.AsiUtiTrs_vOperador);
	mostrarRecordatorio();
	
	if(globals.AsiUtiTrs_vTipoOperador == 0){
		
		var ds_personal = databaseManager.getDataSetByQuery('maestros','select per_espemed from tbc_personal where per_legajo = ' + globals.AsiUtiTrs_vLega,null,-1);
		globals.AsiUtiTrs_vEspeMed = ds_personal.getMaxRowIndex() > 0 ? ds_personal.getValue(1,1) : 0;
	}	
	else{
		
		var ds_medicos = databaseManager.getDataSetByQuery('maestros','select med_espemed from tbc_medicos where med_codigo = ' + globals.AsiUtiTrs_vLega,null,-1);
		globals.AsiUtiTrs_vEspeMed = ds_medicos.getMaxRowIndex() > 0 ? ds_medicos.getValue(1,1) : 0;
	}
	
	
	// Evaluando si el usuario logeado es ostee    		
	var $form = controller.getName();
	//for (var i = 1; i <= globals.AsiUtiTrs_permisos.getMaxRowIndex(); i++){	
//		for (var i = 1; i <= globals.AsiUtiTrs_permisos.length; i++){	
//		
//		if ($form == globals.AsiUtiTrs_permisos.getValue(i,3)){
//			
//			if('user_ostee' == globals.AsiUtiTrs_permisos.getValue(i,4)){
//					
//				if(globals.AsiUtiTrs_permisos.getValue(i,6)==true){
//						
//					$_isUserOSTEE = true;
//					break;
//				}
//			}
//			
//		}
//	}
	
	// Inicializando impresion
	forms.AsiUtiTrs_print.onShow_inicializarForm(true,null);
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
 * @properties={typeid:24,uuid:"B31C5147-3A04-481F-B16C-434FF56597F6"}
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
 * Handle focus lost event of the element.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"74F2B762-3813-48DB-B3CF-8D6F91D82D9F"}
 */
function onFocusLostTensionMin(event) {
	// TODO Auto-generated method stub
	if (asiutitrs_rel_tbc_hciti_to_tbc_hciti.hitval3 < 1) {
		globals.DIALOGS.showWarningDialog("Dato incompleto","Debe ingresar Tensión Arterial Mínima")
		forms.HciutiTrs_frm_hist_clin_ingreso_utiTrs.elements.txt_Tensión_Mínima.requestFocus();
		return
	}

	if (asiutitrs_rel_tbc_hciti_to_tbc_hciti.hitval3 > asiutitrs_rel_tbc_hciti_to_tbc_hciti.hitval2) {
		globals.DIALOGS.showWarningDialog("Dato incorrecto","La Tensión Arterial Mínima debe ser menor o igual a la Máxima.")
		if(asiutitrs_rel_tbc_hciti_to_tbc_hciti.hitval2==0 || asiutitrs_rel_tbc_hciti_to_tbc_hciti.hitval2==null){
			forms.HciutiTrs_frm_hist_clin_ingreso_utiTrs.elements.txt_Tensión_Máxima.requestFocus();
		}else{
			forms.HciutiTrs_frm_hist_clin_ingreso_utiTrs.elements.txt_Tensión_Mínima.requestFocus();
		}
		
		return
	}
	
	
}

/**
 * Handle focus lost event of the element.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"97E2F876-ACE7-499E-962D-252E62010685"}
 */
function onFocusLostTxtTemperatura(event) {
	// TODO Auto-generated method stub
	
	if (asiutitrs_rel_tbc_hciti_to_tbc_hciti.hitval6 < 1) {
		globals.DIALOGS.showWarningDialog("Dato incompleto","Debe ingresar valor de Temperatura.")
		forms.HciutiTrs_frm_hist_clin_ingreso_utiTrs.elements.txt_temperatura.requestFocus();
		return
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
 * @properties={typeid:24,uuid:"0A2720C1-6261-44F8-9478-7A370D3CC8A7"}
 */
function onDataChange(oldValue, newValue, event) {
	// TODO Auto-generated method stub
	
	if(isNaN(f_paciente)){ //Si no es numero es true!!
	}else{
		//var largo = globals.AsiUtiTrs_hisclistrynro.length;
		 if(f_paciente>2147483647){
			 plugins.dialogs.showInfoDialog("Error en Nro.Internación","El número de internación no es válido","Ok")
		 } 
	}	
	return true
}

/**
 * Handle focus gained event of the element.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"38FFC1BE-38F8-4755-A91C-C3B79A5A926A"}
 */
function onFocusGained(event) {
	// TODO Auto-generated method stub
	var tabSeq=controller.getTabSequence()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"664FAB1C-DCDF-4C53-AA6E-EAC379A4CD94"}
 */
function onAction(event) {
	// TODO Auto-generated method stub
	var tabseq = forms.HciutiTrs_frm_hist_clin_ingreso_utiTrs.controller.getTabSequence();
	var secActual= tabseq.indexOf(event.getElementName());
	if (tabseq.length > 1) {
	    forms.HciutiTrs_frm_hist_clin_ingreso_utiTrs.controller.focusField(tabseq[secActual+1], true);
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"BBCF15F4-30FF-4DAC-A56F-6CC733601147"}
 */
function onEnterFocusSecuence(event) {
	// TODO Auto-generated method stub
	var tabseq = forms.HciutiTrs_frm_hist_clin_ingreso_utiTrs.controller.getTabSequence();
	//if (tabseq.length > 1 && isNaN(event)) 
		if (tabseq.length > 1) {
	var secActual= tabseq.indexOf(event.getElementName());
	    forms.HciutiTrs_frm_hist_clin_ingreso_utiTrs.controller.focusField(tabseq[secActual+1], true);
	  //  forms.HciutiTrs_frm_hist_clin_ingreso_utiTrs.controller.focusField(tabseq[tabseq.indexOf(event.getElementName())+1], true);
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
 * @properties={typeid:24,uuid:"65C29475-57C5-41A6-931A-EA2A79854573"}
 */
function onDataChangeEcg(oldValue, newValue, event) {
	// TODO Auto-generated method stub
	generarECG = newValue
	$isDirty = true;
	return true
}

/**
 * @properties={typeid:24,uuid:"8D8D0DBF-9CF3-4830-B66F-EEA2A6E1EC6A"}
 */
function habilitarECG(){
	
	var fechaActual = application.getServerTimeStamp();
	var fechaAux = fechaActual;
	var now = globals.FormatearFecha(fechaActual,"AAAAMMDD");
	
	fechaAux.setDate( fechaActual.getDate() - 1 );
	var ayer = globals.FormatearFecha(fechaAux,"AAAAMMDD");
	
	
	var sql_query = "select * from tbc_imapedi_new IMAPEDI inner join tbc_imapedet_new IMAPEDET on IMAPEDET.IdetServicio = IMAPEDI.IpedServicio AND IMAPEDET.IdetPedido = IMAPEDI.IpedPedido AND IMAPEDET.IdetCodiNom=170101 AND IMAPEDET.IdetTipoNom=01";
	sql_query += " WHERE IMAPEDI.IpedServicio1=12 AND IMAPEDI.IpedAdmis=0 AND IMAPEDI.IpedHistClinica="+asiutitrs_rel_tbc_hciti_to_tbc_hciti.hithiscli+" and (IMAPEDI.IpedFechaPedido="+ayer+" OR IMAPEDI.IpedFechaPedido="+now+") ORDER BY IMAPEDI.IpedServicio1, IMAPEDI.IpedAdmis, IMAPEDI.IpedHistClinica";
	var pElectro = databaseManager.getDataSetByQuery('asistencial',sql_query,null,-1);
	if(pElectro.getMaxRowIndex() > 0 || nuevoHciint==false ){
		editableSolicitudAutomatica(false)
		forms.HciutiTrs_frm_hist_clin_ingreso_utiTrs.generarECG=0;
	}else{
		editableSolicitudAutomatica(true)
	
	}
	
}

/**
 * @properties={typeid:24,uuid:"A1B0F6A9-2FEB-49B9-B4C1-7974FC9FBF06"}
 */
function contador(){
	
msToTime(utils.stringToNumber(globals.horaContador)-60000).toString();
forms.HciutiTrs_frm_hist_clin_ingreso_utiTrs.foundset.setDataProviderValue('txt_contador',globals.horaContador)
}

/**
 * TODO generated, please specify type and doc for the params
 * @param duration
 *
 * @properties={typeid:24,uuid:"13F25BE3-23FF-4F43-AE53-02A5EFE5F753"}
 */
function msToTime(duration) {
	    var minutes = Math.floor((duration / (1000 * 60)) % 60);
	    var hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

	  hours = (hours < 10) ? "0" + hours : hours;
	  minutes = (minutes < 10) ? "0" + minutes : minutes;

	  return hours + ":" + minutes;  //+ ":" + seconds + "." + milliseconds;
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"1C273D9E-B8D6-4367-A486-70F683584E44"}
 */
function onAction_btnCancelar(event) {
	databaseManager.revertEditedRecords();
	var res = globals.DIALOGS.showQuestionDialog('¡Atención!', '¿Está seguro que desea cancelar y volver a la búsqueda de pacientes?', 'Sí', 'No');
	if(res=='Sí'){
		inicializarForm()
	}
	if(globals.isLocked(application.getSolutionName(),controller.getName(),globals.AsiUtiTrs_hisclin)== true){
		globals.bloquearHistClin(globals.AsiUtiTrs_hisclin.toString(),false);
	}
}

/**
 * @properties={typeid:24,uuid:"6B8DC89E-8E00-48D3-A06F-8088164D3A71"}
 */
function openARM() {
	var myform = solutionModel.getForm('AsiArmTrs_Mod_frm_arm_dia');	
	if(myform != null){
		globals.AsiArmTrs_Mod_wPaciente = f_paciente;
		var win2 = application.createWindow("tratamiento_ARM", JSWindow.MODAL_DIALOG);
		win2.title = 'Asistencia Respiratoria Mecánica';
		win2.resizable = false;
		win2.show(forms.AsiArmTrs_Mod_frm_arm_dia);
	} else {
		globals.DIALOGS.showInfoDialog("Resultado", "No existe el formulario de ARM.", "Aceptar");
	}
	
}

/**
 * @properties={typeid:24,uuid:"C4E4EF74-EBC2-4A34-8873-0DBD0FF4B51B"}
 */
function tratamientoARM() {
	
	globals.AsiArmTrs_Mod_wGraboARM = false;
	$_wHayArm = false;
	var wHoraArm = 0;
	var wFecinArm = 0;
	
	// BUSCO-TIENE-ARM
	var sqlArm = "select ArmFecing,ArmHora,ArmFecegr from tbc_arm_dia_noinva"
			   + " where ArmHcli = " + asiutitrs_numero_to_tbc_admision.adm_histclin
			   + " order by ArmFech desc, ArmHora desc";
			   
	var dsArm = databaseManager.getDataSetByQuery('asistencial',sqlArm,null,-1);
	if(dsArm.getMaxRowIndex() > 0){
		
		$_wHayArm = true;
		if(dsArm.getValue(1,3) == 0){
		
			wFecinArm = dsArm.getValue(1,1);		
			wHoraArm = dsArm.getValue(1,2);
		}
	}
	
	globals.AsiArmTrs_Mod_wNumLega = globals.AsiUtiTrs_vLega;
	globals.AsiArmTrs_Mod_wTipLega = globals.AsiUtiTrs_vTipoOperador;
	
	// Existe ARM fecha ingreso?
	if(wFecinArm != 0){
		if(generarARM == 0){
			// Paciente en ARM : NO : 1
			globals.DIALOGS.showInfoDialog("Resultado", "Paciente en ARM.\nDebe generar informe y dejar respirador.", "Aceptar");
		}
		else{
			
			// Paciente en ARM : SI : 2
		}
		
		globals.AsiArmTrs_Mod_wHistClin = asiutitrs_numero_to_asistencial_admision.adm_histclin;
		globals.AsiArmTrs_Mod_wFecha = utils.stringToNumber(globals.CapturaFechaSistema());
		globals.AsiArmTrs_Mod_wHora = wHoraArm; // aca hay un problema en cobol 
		openARM();
		
	}
	else{
		// Paciene en ARM : SI : 1
		if(generarARM == 1){
			globals.AsiArmTrs_Mod_wHistClin = asiutitrs_numero_to_tbc_admision.adm_histclin;
			globals.AsiArmTrs_Mod_wFecha = utils.stringToNumber(globals.CapturaFechaSistema());
			globals.AsiArmTrs_Mod_wHora = utils.stringToNumber(globals.CapturaHoraSistema("HHMM"));
			
			openARM();
		}
	}	   
}

/**
 * @properties={typeid:24,uuid:"AC9B5E33-CF5C-4F0F-A5BD-48092722BC9C"}
 */
function cargarInformes(){
	// cargar informes de Postgres
	globals.AsiUtiTrs_itemTxt = 1;
	forms.AsiUtiTrs_txt_motivo_ingreso.f_informe = asiutitrs_rel_buscar_hcititxt.linea;

	globals.AsiUtiTrs_itemTxt = 2;
	forms.AsiUtiTrs_txt_examen_fisico.f_informe = asiutitrs_rel_buscar_hcititxt.linea;
	
	globals.AsiUtiTrs_itemTxt = 3;
	forms.AsiUtiTrs_txt_neurológico.f_informe = asiutitrs_rel_buscar_hcititxt.linea;
	
	globals.AsiUtiTrs_itemTxt = 4;
	forms.AsiUtiTrs_txt_cardiovascular.f_informe = asiutitrs_rel_buscar_hcititxt.linea;
	
	globals.AsiUtiTrs_itemTxt = 5;
	forms.AsiUtiTrs_txt_respiratorio.f_informe = asiutitrs_rel_buscar_hcititxt.linea;
	
	globals.AsiUtiTrs_itemTxt = 6;
	forms.AsiUtiTrs_txt_abdominal.f_informe = asiutitrs_rel_buscar_hcititxt.linea;
	
	//segundo bloque de tabs
	
	globals.AsiUtiTrs_itemTxt = 7;
	forms.AsiUtiTrs_txt_osteo_articular.f_informe = asiutitrs_rel_buscar_hcititxt.linea;
	
	
	globals.AsiUtiTrs_itemTxt = 8;
	forms.AsiUtiTrs_txt_urogenital.f_informe = asiutitrs_rel_buscar_hcititxt.linea;


	globals.AsiUtiTrs_itemTxt = 9;
	forms.AsiUtiTrs_txt_tratamiento_ingreso.f_informe = asiutitrs_rel_buscar_hcititxt.linea;

	globals.AsiUtiTrs_itemTxt = 10;
	forms.AsiUtiTrs_txt_estudios_solicitados.f_informe = asiutitrs_rel_buscar_hcititxt.linea;

	globals.AsiUtiTrs_itemTxt = 11;
	forms.AsiUtiTrs_txt_interconsulta.f_informe = asiutitrs_rel_buscar_hcititxt.linea;

	globals.AsiUtiTrs_itemTxt = 12;
	forms.AsiUtiTrs_txt_otros.f_informe = asiutitrs_rel_buscar_hcititxt.linea;
}

/**
 * @properties={typeid:24,uuid:"976BAADD-C4BD-4606-9F4A-2AFBBD0FD8A3"}
 */
function verificarARM(){
	// ACC-ARM
	tratamientoARM();
	// Paciene en ARM : SI : 1

	if(generarARM == 1 && globals.AsiArmTrs_Mod_wGraboARM){

		if(!$_wHayArm){

			grabarCodAuto();
		}else{
			//asiutitrs_rel_tbc_hciti_to_tbc_hciti.hit=1;
			asiutitrs_rel_tbc_hciti_to_tbc_hciti.hitfecinicioarm = globals.AsiArmTrs_Mod_wFecha
			databaseManager.saveData(asiutitrs_rel_tbc_hciti_to_tbc_hciti);
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
 * @properties={typeid:24,uuid:"58474026-4BAD-48FB-8CC7-4F1F366C79A3"}
 */
function onDataChangeArm(oldValue, newValue, event) {
	// TODO Auto-generated method stub
	generarARM = newValue
	$isDirty = true;
	return true
}

/**
 * @properties={typeid:24,uuid:"36C04A56-7AE0-407C-8621-EFC3AFAEB8DD"}
 */
function cargarUPP(){
	//si Existe grado y local. tiene upp.
	if(asiutitrs_rel_tbc_hciti_to_tbc_hciti.hitgradoupp!=0 && asiutitrs_rel_tbc_hciti_to_tbc_hciti.hitlocalupp!=0){
		forms.AsiUtiTrs_txt_examen_fisico.tieneUPP='1'
		forms.AsiUtiTrs_txt_examen_fisico.elements.grp_upp_grado_localizacion.visible=true;		
		forms.AsiUtiTrs_txt_examen_fisico.gradoUPP = asiutitrs_rel_tbc_hciti_to_tbc_hciti.hitgradoupp
		forms.AsiUtiTrs_txt_examen_fisico.localizacionUPP = asiutitrs_rel_tbc_hciti_to_tbc_hciti.hitlocalupp; //application.getValueListDisplayValue('AsiUtiTrs_vl_localizacion_upp',
		if('4'==forms.AsiUtiTrs_txt_examen_fisico.localizacionUPP){
			forms.AsiUtiTrs_txt_examen_fisico.otraLocalizacionUPP = asiutitrs_rel_tbc_hciti_to_tbc_hciti.hitlocalotupp
			forms.AsiUtiTrs_txt_examen_fisico.elements.txt_localizacion.visible=true
			forms.AsiUtiTrs_txt_examen_fisico.elements.txt_localizacion.editable=true
		}else{
			forms.AsiUtiTrs_txt_examen_fisico.elements.txt_localizacion.visible=false
			forms.AsiUtiTrs_txt_examen_fisico.elements.txt_localizacion.editable=false
			
		}
		
	}
	else if(asiutitrs_rel_tbc_hciti_to_tbc_hciti.hitgradoupp==9){
		forms.AsiUtiTrs_txt_examen_fisico.tieneUPP = '0'
	
		
	}else if(asiutitrs_rel_tbc_hciti_to_tbc_hciti.hitgradoupp==0 && asiutitrs_rel_tbc_hciti_to_tbc_hciti.hitlocalupp==0){
		forms.AsiUtiTrs_txt_examen_fisico.tieneUPP = '2'
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
 * @properties={typeid:24,uuid:"D664B620-9E15-4FDD-BB44-415FEA2404E5"}
 */
function onDataChangeGrado(oldValue, newValue, event) {
	$isDirty = true;
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
 * @properties={typeid:24,uuid:"A49B628A-E00B-4253-84FE-E9C9EB515242"}
 */
 function onDataChangePatologia(oldValue, newValue, event) {
	if (newValue!=-1){
		return validPatologia=true;		 
	}
	return validPatologia=false;
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
 * @properties={typeid:24,uuid:"E622F484-01BE-4727-819A-C31EBBD7401C"}
 */
function onDataChangeProcedencia(oldValue, newValue, event) {
	if (newValue != -1){
		return validProcedencia=true;
	}
	return validProcedencia=false;
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
 * @properties={typeid:24,uuid:"3B20074E-B182-47E7-A54F-967FFD507AA8"}
 */
function onDataChangeReingreso(oldValue, newValue, event) {
	if (newValue==0 || newValue==1){
		return validReingreso=true;
	}
	return validReingreso=false;
}
