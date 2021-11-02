/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"F1D2323C-7334-4BB3-A758-24DD560808F4"}
 */
var f_medicoNombre = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"B8A91EC1-15A7-4456-8AC0-6E4EB057ADAC"}
 */
var html_content = ''

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"5E14F5DB-FFB2-440C-8C25-A0D31C5368C2"}
 */
var f_matricula = '';

/**
 * @properties={typeid:35,uuid:"7C06E663-5B9D-4198-B0C5-A207F38EFAC6",variableType:-4}
 */
var dsAux = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"190AEBF4-EA24-41AD-8E54-6901A3D78687"}
 */
var html = '';
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"FC7F09BC-8ED6-4EA4-9879-B834E968398B"}
 */
var f_histClinIngreso = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"FE61965A-19BD-43FF-8A66-C6C793FD82D7"}
 */
var f_egreso = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"F8B85DB5-89B5-495B-BC9D-73BB7BF8CA98"}
 */
var f_ingreso = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"766F210D-D16F-47C2-8EEE-4EE76B90CF84"}
 */
var f_titulo_reporte = ''

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"66CC4E4F-FFC4-4EB7-B6E4-B8FD5428D586"}
 */
var f_cobertura = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"F60DB734-1418-40A4-ACAF-41B7DC10E431"}
 */
var f_sexo = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"D61F7000-A8EF-41E5-938E-32A6D784F4DA"}
 */
var f_hora = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"EA90B197-1A4D-4DB4-B415-E4B56AFE4AA6"}
 */
var f_medico = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"714DAD0C-53F9-4D9E-B1F0-62F3BBC75843"}
 */
var f_edad = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"66292CBC-D7F7-45DB-8723-0DF198EBD709"}
 */
var f_cama = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"271FDFD4-F50E-44CC-AF2C-D44E8D22BC8C"}
 */
var f_habitacion = '';

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"3CA4748B-2CF7-47E3-8AE1-433FD27DD5C2",variableType:93}
 */
var f_fechaImpresion = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"35DA9491-A338-41DC-B408-0DB31F094C5E"}
 */
var f_histclinunica = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"69DBDA75-5E48-421C-9869-3E1544749DC0"}
 */
var f_apelnom = '';

/**
 * @properties={typeid:24,uuid:"24E6A959-4774-4212-B5A4-AA882BE3BCEB"}
 */
function limpiarForm (){
	
	f_apelnom = '';
	f_cama = '';
	f_medico = '';
	f_fechaImpresion = null;
	f_habitacion = '';
	f_histclinunica = '';
	f_hora = '';
	f_cobertura = '';
	f_sexo = '';
	f_edad = '';
	f_egreso = '';
	f_histClinIngreso = '';
	f_ingreso = '';
	f_matricula = '';
	f_medicoNombre = '';
	
	globals.AsiVm_histClinAsist = 0;
	globals.AsiVm_histClinPrint = 0;
	globals.AsiVm_fechaPrint = 0;
//	globals.AsiVm_horaPrint = 0;
	
	globals.AsiVm_obrCodigo = 0;
	globals.AsiVm_hcUnicaPrint = 0;
//	globals.AsiVm_fechaIngresoPrint = 0;
//	globals.AsiVm_horaIngresoPrint = 0;
//	globals.AsiVm_alerHistClinPrint = 0;
	
	globals.AsiVm_perLegajoPrint = 0;
	globals.AsiVm_medCodigoPrint = 0;
//	globals.AsiVm_patCodiPrint = 0;
	
	
	if(forms.frm_asivm_template_html.foundset.getSize() > 0)
		forms.frm_asivm_template_html.foundset.clear();
	
	controller.setPageFormat(210,297,10,10,10,10,1,0);
}

/**
 * @properties={typeid:24,uuid:"D1134483-1260-48B1-97F3-A9F7AA6C0D2C"}
 */
function imprimirVm(histClin, dateFile, fileType){ //fileType 1: ficha de ingreso, 2: ficha  de monitoreo
	
		limpiarForm();
//		scopes.globals.AsiVm_fecha_Ficha = dateFile
		//Variables globales para la relacion 
//		globals.AsiVm_histClinAsist = histClin;
		globals.AsiVm_histClinPrint = histClin;
		scopes.globals.AsiVm_hisclin_monitoreo_print = histClin
		
		if(fileType==2){
			globals.AsiVm_fechaPrint = asivm_fichakine.fecha; //datos de ficha inicio
			scopes.globals.AsiVm_fecha_monitoreo_print= dateFile //para monotoreo
			globals.Asivm_prestacion = asivm_fichakine.prestacion

		}else if(fileType==1){
			globals.AsiVm_fechaPrint = dateFile;
		}
		else if(fileType==4){
			globals.AsiVm_fechaPrint = dateFile;
		}
		
		if(asivm_rel_buscar_fichavm_print.getSize() > 0 || asivm_ficha_monitoreo_print.getSize()==1){
			
			globals.AsiVm_obrCodigo = asivm_numero_to_asistencial_admision.adm_obrsoc;
			globals.AsiVm_hcUnicaPrint = asivm_numero_to_asistencial_admision.adm_histclinuni;

			var medico = "Confeccionada por ";
			var matricula = "";
			
			if(globals.Srv_Login_Sanatorio_vTipoOperador == 0){
				
				globals.AsiVm_perLegajoPrint = globals.Srv_Login_Sanatorio_vLega;
				if(asivm_rel_buscar_personal_print.per_sexo == 'M'){
					medico += "el Dr. ";
					f_medicoNombre = "Dr. ";
				}
				else{
					medico += "la Dra. ";
					f_medicoNombre = "Dra. ";
				}
				medico += utils.stringTrim(asivm_rel_buscar_personal_print.per_apelnom);
				matricula = asivm_rel_buscar_personal_print.per_codmatri;
				f_medicoNombre += utils.stringTrim(asivm_rel_buscar_personal_print.per_apelnom);
			}
			
			if(globals.Srv_Login_Sanatorio_vTipoOperador== 1){
				globals.AsiVm_medCodigoPrint =  globals.Srv_Login_Sanatorio_vLega;
				medico += "el Dr. " + utils.stringTrim(asivm_rel_buscar_medico_print.med_apenom);
				matricula = asivm_rel_buscar_medico_print.med_matricula;
				f_medicoNombre = "Dr. " + utils.stringTrim(asivm_rel_buscar_medico_print.med_apenom);
			}
			
			var date = new Date();
				date = dateFile;
			medico += " el " + globals.getDayName(date,true) + " " + date.getDate() + " " + globals.getMonthName(date,true) + " / " + date.getFullYear() + " a las " + date.getHours() + " hrs.";
			
			var sexo = "";
			if(asivm_numero_to_asistencial_admision.adm_sexo == 1){
				sexo = "Femenino"; 
			}
			else{
				if(asivm_numero_to_asistencial_admision.adm_sexo == 2)
					sexo = "Masculino";	
			}
			
			if(fileType!=3){
				// cargar Header
				f_fechaImpresion = application.getServerTimeStamp();
				f_medico = medico;
				f_matricula = matricula;
				f_sexo = sexo; 
				if(asivm_numero_to_asistencial_admision.getSize()>0){//no deberia venir nulo.
					f_edad = globals.CalculoEdad(asivm_numero_to_asistencial_admision.adm_fecnac) + ' ' +  globals.vTipoEdad;;
					f_apelnom =  formatearHistclin(asivm_numero_to_asistencial_admision.adm_histclin) + "  " + utils.stringTrim(asivm_numero_to_asistencial_admision.adm_apelnom); 
					f_histclinunica = asivm_numero_to_asistencial_admision.adm_histclinuni;
					f_habitacion = asivm_numero_to_asistencial_admision.adm_habita;
					f_cama = asivm_numero_to_asistencial_admision.adm_cama;
//					f_cobertura = utils.stringTrim(asivm_rel_buscar_obrasocial.obr_razonsoc) + ' (' +asivm_rel_buscar_obrasocial.obr_codigo + ')'; 
//					f_histClinIngreso = asivm_rel_tbc_hist_cab_new.histcabnrounico;
				}
				
//				if(asivm_rel_buscar_guardia.getSize() > 0){
//					
//					var fechaIngreso = globals.IntegerToDate(asivm_rel_buscar_guardia.guar_fechaingreso);
//					f_ingreso = globals.getDayName(fechaIngreso,true) + " " + fechaIngreso.getDate() + " " + globals.getMonthName(fechaIngreso,true) + " / " + fechaIngreso.getFullYear() + " " + convertNumberToHour_HHMM(asivm_rel_buscar_guardia.guar_horaingreso) + " hrs.";
//					
//					var fechaEgreso = globals.IntegerToDate(asivm_rel_buscar_guardia.guar_fechaalta);
//					f_egreso = globals.getDayName(fechaEgreso,true) + " " + fechaEgreso.getDate() + " " + globals.getMonthName(fechaEgreso,true) + " / " + fechaEgreso.getFullYear() + " " + convertNumberToHour_HHMM(asivm_rel_buscar_guardia.guar_horaalta) + " hrs.";
//					
//				}
			}

		
			cargarBody(fileType);
			imprimir(fileType);
		}
		else{
			globals.DIALOGS.showWarningDialog("Atención!","No hay datos para imprimir.","Aceptar")
		}
	
}

/**
 * @properties={typeid:24,uuid:"D7BED1AF-6132-4D9A-9365-F4526DD970F8"}
 */
function reporteFichaCierre(){
	
	var diasVM = asivm_rel_buscar_fichavm_print.fecha_inicio==null?0:(Math.floor((f_fechaImpresion.getTime() - asivm_rel_buscar_fichavm_print.fecha_inicio.getTime()) / (1000 * 3600 * 24)));

	setTitlePrint("DATOS DE FICHA CIERRE")
	
	if(asivm_rel_buscar_fichavm_print.prestacion==1){
		html = ''
		html += '<html><body>'
		html += '<table width="1024">'
		html += '<tr>'
		html += '<td width="40%"><b>Días de ventilación mecánica invasiva: '+ diasVM +'</b></td>'
		html += '</tr>'
		html += '</table>'
		html += '</body></html>'
		dsAux.addRow([html]);
	
		
		setTitlePrint("WEANING");
		
		setTextoPrintDate('Fecha de cierre',asivm_rel_buscar_fichavm_print.fecha_fin)
		
		// weaning
		if(asivm_rel_buscar_fichavm_print.vm_liberado_vent_mec!=0){
				
				html = ''
				html += '<html><body>'
				html += '<table width="1024">'
				html += '<tr>'
				html += '<td width="40%"><b>Liberado ventilacion mécanica: '+ (application.getValueListDisplayValue('AsiVm_vl_SINO',asivm_rel_buscar_fichavm_print.vm_liberado_vent_mec))+'</b></td>'
				html += '</tr>'
				html += '</table>'
				html += '</body></html>'
				dsAux.addRow([html]);
				
		}
		setTitlePrint("EXTUBACIÓN");
		//extubación
		setTextoPrintValueList('Extubación no programada',asivm_rel_buscar_fichavm_print.vm_extub_no_programada,'AsiVm_vl_SINO');
		setTextoPrintValueList('Auto extubación',asivm_rel_buscar_fichavm_print.vm_extub_auto,'AsiVm_vl_SINO');	
		setTextoPrintValueList('extubación accedental',asivm_rel_buscar_fichavm_print.vm_extub_accidental,'AsiVm_vl_SINO');
		setTextoPrintDate('Fecha de extubación no programada',asivm_rel_buscar_fichavm_print.vm_extub_fecha);
		setTextoPrintValueList('Reintubado',asivm_rel_buscar_fichavm_print.vm_extub_reintubado,'AsiVm_vl_SINO');
		setTextoPrintMultiList('Causa de reintubación',asivm_rel_buscar_fichavm_print.vm_extub_causa_reintubado,'AsiVm_vl_causa_reintubacion');
		
		setTitlePrint("TQT");
		setTextoPrintValueList('TQT',asivm_rel_buscar_fichavm_print.vm_tqt,'AsiVm_vl_SINO');
		setTextoPrintDate('Fecha de TQT',asivm_rel_buscar_fichavm_print.vm_tqt_fecha);
		setTextoPrintValueList('Decanulación',asivm_rel_buscar_fichavm_print.vm_tqt_decanulacion,'AsiVm_vl_SINO');
		setTextoPrintDate('Fecha de decanulación',asivm_rel_buscar_fichavm_print.vm_tqt_fecha_decanulacion);

		setTitlePrint("COMPLICACIONES");
		setTextoPrintValueList('SDRA',asivm_rel_buscar_fichavm_print.complicaciones_sdra,'AsiVm_vl_SINO');
		setTextoPrint('PaO2/Fio2 de diagnóstico',asivm_rel_buscar_fichavm_print.complicaciones_pao2_fio2.toString());
		setTextoPrintValueList('Neumotórax',asivm_rel_buscar_fichavm_print.complicaciones_neumotorax,'AsiVm_vl_SINO');
		setTextoPrintValueList('Shock',asivm_rel_buscar_fichavm_print.complicaciones_shock,'AsiVm_vl_SINO');
	}
	
	
	if(asivm_rel_buscar_fichavm_print.prestacion==2){
		html = ''
		html += '<html><body>'
		html += '<table width="1024">'
		html += '<tr>'
		html += '<td width="40%"><b>Días de ventilación no invasiva: '+ diasVM+'</b></td>'
		html += '</tr>'
		html += '</table>'
		html += '</body></html>'
		dsAux.addRow([html]);
		
		setTextoPrintDate('Fecha de cierre',asivm_rel_buscar_fichavm_print.fecha_fin)
		
		setTextoPrintValueList('Intubado',asivm_rel_buscar_fichavm_print.intubado,'AsiVm_vl_SINO');
		setTextoPrintValueList('Éxito de vni',asivm_rel_buscar_fichavm_print.exito,'AsiVm_vl_SINO');
		setTextoPrintMultiList('Causa de fracaso',asivm_rel_buscar_fichavm_print.causa_fracaso,'AsiVm_vl_causa_fracasos_vni');
		setTextoPrintMultiList("Complicaciones",asivm_rel_buscar_fichavm_print.complicaciones,'AsiVm_vl_complicaciones_vni');
	}

	if(asivm_rel_buscar_fichavm_print.prestacion==3){
		html = ''
		html += '<html><body>'
		html += '<table width="1024">'
		html += '<tr>'
		html += '<td width="40%"><b>Días de caf: '+ diasVM+'</b></td>'
		html += '</tr>'
		html += '</table>'
		html += '</body></html>'
		dsAux.addRow([html]);
		
		setTextoPrintDate('Fecha de cierre',asivm_rel_buscar_fichavm_print.fecha_fin)
		
		setTextoPrintValueList('Intubado',asivm_rel_buscar_fichavm_print.intubado,'AsiVm_vl_SINO');
		setTextoPrintValueList('Éxito de caf',asivm_rel_buscar_fichavm_print.exito,'AsiVm_vl_SINO');
		setTextoPrintMultiList('Causa de fracaso',asivm_rel_buscar_fichavm_print.causa_fracaso,'AsiVm_vl_causa_fracasos_caf');
		setTextoPrintMultiList("Complicaciones",asivm_rel_buscar_fichavm_print.complicaciones,'AsiVm_vl_complicaciones_caf');
	}
	
	//campos comunes
	setTitlePrint("PALIATIVOS");
	setTextoPrintValueList('Paliativos',asivm_rel_buscar_fichavm_print.paliativos,'AsiVm_vl_SINO');
	setTextoPrintDate('Fecha de paliativos',asivm_rel_buscar_fichavm_print.paliativos_fecha);

	//datos de cierre final
	setTitlePrint("Datos finales de Cierre");
	setTextoPrintValueList('Egreso Vivo de UCI',asivm_rel_buscar_fichavm_print.egreso_vivo_uci,'AsiVm_vl_SINO');
	setTextoPrintDate('Fecha de egreso de UCI',asivm_rel_buscar_fichavm_print.fecha_egreso_uci);
	setTextoPrintDate('Fecha de egreso de Sanatorio',asivm_rel_buscar_fichavm_print.fecha_egreso_sanatorio);
	setTextoPrintMultiList('Derivación',asivm_rel_buscar_fichavm_print.derivacion,'AsiVm_vl_derivacion')
	

}

/**
 * @properties={typeid:24,uuid:"CDF7F4EC-7302-4052-94A2-5B16EB40A746"}
 */
function reporteFicha(){
	var html = ''
	html_content='<TABLE BORDER=\"0\" CELLPADDING=\"2\" CELLSPACING=\"0\">'
	var hora = convertNumberToHour_HHMM(asivm_numero_to_tbc_admision.adm_horing);
	var horaAux = hora.split(':')
	var fechaDesde = globals.IntegerToDate(asivm_numero_to_tbc_admision.adm_fecing);
	fechaDesde.setHours(Number(horaAux[0]), Number(horaAux[1]));
	
	var dias = contar_dias(fechaDesde, f_fechaImpresion);
	
	setTitlePrint("DATOS DE FICHA INICIAL")

	
//	// Ingreso a UCI
	var fechaIngresoUCi = utils.dateFormat(asivm_rel_buscar_fichavm_print.fecha_ingreso_uci,'dd/MM/yyyy hh:mm aa')
	var diasVM = asivm_rel_buscar_fichavm_print.fecha_inicio==null?0:(Math.floor((f_fechaImpresion.getTime() - asivm_rel_buscar_fichavm_print.fecha_inicio.getTime()) / (1000 * 3600 * 24)));

	
	if(!globals.IsBlank(fechaIngresoUCi)){
		setTextoPrint("Ingreso UCI", fechaIngresoUCi)
		
	}
	
	html = ''
	html += '<html><body>'
	html += '<table width="1024">'
	html += '<tr>'
	html += '<td width="40%"><b>Días de internación en el sanatorio: '+ dias +'</b></td>'
	html += '</tr>'
	html += '</table>'
	html += '</body></html>'
	html_content += html;
	dsAux.addRow([html]);
	
	
	if(asivm_rel_buscar_fichavm_print.prestacion==1){
		html = ''
		html += '<html><body>'
		html += '<table width="1024">'
		html += '<tr>'
		html += '<td width="40%"><b>Días de ventilación mecánica invasiva: '+ diasVM +'</b></td>'
		html += '</tr>'
		html += '</table>'
		html += '</body></html>'
		dsAux.addRow([html]);
		html_content += html;
	}
	
	if(asivm_rel_buscar_fichavm_print.prestacion==2){
		html = ''
		html += '<html><body>'
		html += '<table width="1024">'
		html += '<tr>'
		html += '<td width="40%"><b>Días de ventilación no invasiva: '+ diasVM+'</b></td>'
		html += '</tr>'
		html += '</table>'
		html += '</body></html>'
		html_content += html;
		dsAux.addRow([html]);
		
	}

	
	if(asivm_rel_buscar_fichavm_print.prestacion==3){
		html = ''
		html += '<html><body>'
		html += '<table width="1024">'
		html += '<tr>'
		html += '<td width="40%"><b>Días de caf: '+ diasVM+'</b></td>'
		html += '</tr>'
		html += '</table>'
		html += '</body></html>'
		dsAux.addRow([html]);
		html_content += html;
	}
	
	
	
	if(!globals.IsBlank(asivm_rel_buscar_fichavm_print.prestacion.toString()) && asivm_rel_buscar_fichavm_print.prestacion!=0){
		setTextoPrint("Prestación", application.getValueListDisplayValue('AsiVm_vl_prestaciones',asivm_rel_buscar_fichavm_print.prestacion))
		setTextoPrint("Observacion Inicial", asivm_rel_buscar_fichavm_print.observaciones)

		setTextoPrint("Altura", asivm_rel_buscar_fichavm_print.altura)
		setTextoPrint("Peso corporal predicho", asivm_rel_buscar_fichavm_print.peso_corporal_predicho)
		setTextoPrint("Peso Estimado", asivm_rel_buscar_fichavm_print.peso_estimado)
		setTextoPrint("Diagnostico", asivm_rel_buscar_fichavm_print.diagnostico)
		
		setTextoPrint("SAPS II", asivm_rel_buscar_fichavm_print.sap2)
		setTextoPrint("Mortalidad predicha", asivm_rel_buscar_fichavm_print.mortalidad_predicha_sap2)
		setTextoPrint("Score Charlson", asivm_rel_buscar_fichavm_print.score_charlson)
		setTextoPrint("Sobrevida", asivm_rel_buscar_fichavm_print.sobrevida_diez_anio)
		setTextoPrint("Glasgow", asivm_rel_buscar_fichavm_print.glasgow)
		var codMotivos = asivm_rel_buscar_fichavm_print.motivo.split(",");
		var codAntecedentes = asivm_rel_buscar_fichavm_print.antecedentes.split(",");
		var antecedentes = '';
		var motivos = '';
		for (var j = 0; j < codAntecedentes.length; j++) {
			antecedentes=application.getValueListDisplayValue('AsiVm_vl_antecedentes',codAntecedentes[j]) + ((antecedentes=='')?'': ', '+antecedentes);
		}
		for (var index = 0; index < codMotivos.length; index++) {
			switch (asivm_rel_buscar_fichavm_print.prestacion) {
			case 1:
			motivos=application.getValueListDisplayValue('AsiVm_vl_motivo_vm',codMotivos[index])+((motivos=='')?'': ', '+motivos)
				break;
			case 2:
			motivos=application.getValueListDisplayValue('AsiVm_vl_motivo_vni',codMotivos[index]) + ((motivos=='')?'': ', '+motivos)
			break;
		
			case 3:
			motivos=application.getValueListDisplayValue('AsiVm_vl_motivo_caf',codMotivos[index]) + ((motivos=='')?'': ', '+motivos) 
			break;
		
			}
			
		}
		setTextoPrint("Motivo ventilación", motivos)
		setTextoPrint("Antecedentes", antecedentes)
		
	}else{
		setTextoPrint("Soporte", application.getValueListDisplayValue('AsiVm_vl_sin_soporte',asivm_rel_buscar_fichavm_print.soporte_ventilatorio))
		setTextoPrint("Observacion Inicial", asivm_rel_buscar_fichavm_print.observaciones)
		if(asivm_buscar_observacion.getSize()>0){
			for (var index = 1; index <= asivm_buscar_observacion.getSize(); index++) {
				var fechaObservacion = utils.dateFormat(asivm_buscar_observacion.getRecord(index).fecha,'dd/MM/yyyy hh:mm aa');
				setTextoPrint("Observacion "+ fechaObservacion, asivm_buscar_observacion.getRecord(index).observacion)
			}
		
		}
	}
	
	
	switch (asivm_rel_buscar_fichavm_print.prestacion) {
	case 1:
	setTextoPrint("Inicio VM", utils.dateFormat(asivm_rel_buscar_fichavm_print.fecha_inicio_ventilacion,'dd/MM/yyyy hh:mm aa'))
		break;
	
	case 2:
	setTextoPrint("Inicio VNI", utils.dateFormat(asivm_rel_buscar_fichavm_print.fecha_inicio_ventilacion,'dd/MM/yyyy hh:mm aa'))
	break;
	
	case 3:
	setTextoPrint("Inicio CNAF", utils.dateFormat(asivm_rel_buscar_fichavm_print.fecha_inicio_ventilacion,'dd/MM/yyyy hh:mm aa'))
	break;

	}	
	html_content += "</TABLE>"
}

/**
 * @properties={typeid:24,uuid:"A684BFA2-0E09-455B-A2A6-EB71705872E1"}
 */
function reporteFichaMonitoreo(){
	var html = ''
	setTitlePrint("DATOS DE FICHA MONITOREO");
	
	var hora = convertNumberToHour_HHMM(asivm_numero_to_tbc_admision.adm_horing);
	var horaAux = hora.split(':')
	var fechaDesde = globals.IntegerToDate(asivm_numero_to_tbc_admision.adm_fecing);
	fechaDesde.setHours(Number(horaAux[0]), Number(horaAux[1]));
	
	var dias = contar_dias(fechaDesde, f_fechaImpresion);
	
	
	// Ingreso a UCI
	var fechaIngresoUCi = utils.dateFormat(asivm_rel_buscar_fichavm_print.fecha_ingreso_uci,'dd/MM/yyyy hh:mm aa')
	var diasVM = Math.floor((f_fechaImpresion.getTime() - asivm_rel_buscar_fichavm_print.fecha_inicio.getTime()) / (1000 * 3600 * 24));

	if(!globals.IsBlank(fechaIngresoUCi)){
		setTextoPrint("Ingreso UCI", fechaIngresoUCi)
		
	}
	
	html = ''
	html += '<html><body>'
	html += '<table width="1024">'
	html += '<tr>'
	html += '<td width="40%"><b>FECHA MONITOREO: '+ utils.dateFormat(asivm_ficha_monitoreo_print.fecha,'dd/MM/yyyy hh:mm aa') + '</b></td>'
	html += '</tr>'
	html += '</table>'
	html += '</body></html>'
	dsAux.addRow([html]);
	html_content += html;
	
	html = ''
	html += '<html><body>'
	html += '<table width="1024">'
	html += '<tr>'
	html += '<td width="40%"><b>Días de internación en el sanatorio: '+ dias +'</b></td>'
	html += '</tr>'
	html += '</table>'
	html += '</body></html>'
	dsAux.addRow([html]);
	html_content += html;
	
	if(asivm_rel_buscar_fichavm_print.prestacion==1){
		html = ''
		html += '<html><body>'
		html += '<table width="1024">'
		html += '<tr>'
		html += '<td width="40%"><b>Días de ventilación mecánica invasiva: '+ diasVM +'</b></td>'
		html += '</tr>'
		html += '</table>'
		html += '</body></html>'
		dsAux.addRow([html]);
	}
	
	if(asivm_rel_buscar_fichavm_print.prestacion==2){
		html = ''
		html += '<html><body>'
		html += '<table width="1024">'
		html += '<tr>'
		html += '<td width="40%"><b>Días de ventilación no invasiva: '+ diasVM+'</b></td>'
		html += '</tr>'
		html += '</table>'
		html += '</body></html>'
		dsAux.addRow([html]);
		html_content += html;
		
	}

	if(asivm_rel_buscar_fichavm_print.prestacion==3){
		html = ''
		html += '<html><body>'
		html += '<table width="1024">'
		html += '<tr>'
		html += '<td width="40%"><b>Días de caf: '+ diasVM+'</b></td>'
		html += '</tr>'
		html += '</table>'
		html += '</body></html>'
		dsAux.addRow([html]);
		html_content += html;
	}
	
	setTitlePrint("ESTADO GENERAL");
	
	setTextoPrint("Frecuencia Cardíaca", asivm_ficha_monitoreo_print.frecuencia_cardiaca)
	setTextoPrint("Tensión Arterial Sistólica", asivm_ficha_monitoreo_print.tension_arterial_sistolica)
	setTextoPrint("Tensión Arterial Diastólica", asivm_ficha_monitoreo_print.tension_arterial_diastolica)
	setTextoPrint("Tensión Arterial Media", asivm_ficha_monitoreo_print.tesion_arterial_media)
	setTextoPrint("Temperatura", asivm_ficha_monitoreo_print.temperatura)
	setTextoPrint("RASS", asivm_ficha_monitoreo_print.rass)
	
	
	switch (globals.Asivm_prestacion) {
	case 1:
		setTextoPrint("CPOT",asivm_ficha_monitoreo_print.cpot)
		var codAnalgesicos = asivm_ficha_monitoreo_print.analgesicos.split(",");
		var analgesicos = "";
		for (var indiceCodAnalgesicos = 0; indiceCodAnalgesicos < codAnalgesicos.length; indiceCodAnalgesicos++) {
			
			analgesicos = application.getValueListDisplayValue('AsiVm_vl_analgésicos',codAnalgesicos[indiceCodAnalgesicos])+ (analgesicos==''?analgesicos: ', '+ analgesicos);
		}
		setTextoPrint("Analgésicos",analgesicos);
		
		var codSedacion = asivm_ficha_monitoreo_print.analgesicos.split(",");
		var sedacion = "";
		for (var indiceCodSedacion = 0; indiceCodSedacion < codSedacion.length; indiceCodSedacion++) {
			
			sedacion = application.getValueListDisplayValue('AsiVm_vl_sedación',codSedacion[indiceCodSedacion])+ (sedacion==''?sedacion: ', '+ sedacion);
		}
		
		setTextoPrint("Sedación",sedacion)
		setTextoPrint("CAM-ICU",application.getValueListDisplayValue('AsiVm_vl_cam_icu',asivm_ficha_monitoreo_print.cam_icu))
		setTextoPrint("Bloqueantes Neuromsuculares",application.getValueListDisplayValue('AsiVm_vl_SINO',asivm_ficha_monitoreo_print.bloqueantes_neuromsucualares))
		setTextoPrint("Modo Ventilatirio",application.getValueListDisplayValue('AsiVm_vl_modo_ventilatorio',asivm_ficha_monitoreo_print.vm_modo_ventilatorio))
		setTitlePrint("PROGRAMACIÓN");
		setTextoPrint("Frecuencia respitoria",asivm_ficha_monitoreo_print.progr_frec_respira)
		setTextoPrint("Volumen corriente",asivm_ficha_monitoreo_print.progr_volumen_corriente)
		setTextoPrint("Presión inspiratoria",asivm_ficha_monitoreo_print.progr_presion_inspiratoria)
		setTextoPrint("Presión soporte",asivm_ficha_monitoreo_print.progr_presion_soporte)
		setTextoPrint("Flujo",asivm_ficha_monitoreo_print.progr_flujo)
		setTextoPrint("Tiempo inspiratorio",asivm_ficha_monitoreo_print.progr_tiempo_inspiratorio)
		setTextoPrint("FiO2",asivm_ficha_monitoreo_print.progr_fi02)
		setTextoPrint("PEEP",asivm_ficha_monitoreo_print.progr_peep)
		
		setTitlePrint("mONITOREO");
		setTextoPrint("Frecuencia respiratoria total",asivm_ficha_monitoreo_print.vm_monit_frec_respitoria_total)
		setTextoPrint("Presión Pico",asivm_ficha_monitoreo_print.vm_monit_presion_pico)
		setTextoPrint("PresiónPlateau",asivm_ficha_monitoreo_print.vm_monit_presion_plateau)
		setTextoPrint("Presión Media",asivm_ficha_monitoreo_print.vm_monit_presion_media)
		setTextoPrint("PEEP total",asivm_ficha_monitoreo_print.vm_monit_peep_total)
		setTextoPrint("Delta Presion",asivm_ficha_monitoreo_print.vm_monit_delta_presion)
		setTextoPrint("P 0.1",asivm_ficha_monitoreo_print.vm_monit_p01)
		setTextoPrint("Volumen corriente exhalado",asivm_ficha_monitoreo_print.vm_monit_vol_corriente_exhalado)
		setTextoPrint("Compliance",asivm_ficha_monitoreo_print.vm_monit_compliance)
		setTextoPrint("Resistencia",asivm_ficha_monitoreo_print.vm_monit_resistencia)
		setTextoPrint("PMI",asivm_ficha_monitoreo_print.vm_monit_pmi)
		setTextoPrint("Presión de oclusión",asivm_ficha_monitoreo_print.vm_monit_presion_oclusion)

		setTitlePrint("Varios");
		setTextoPrint("SAT",asivm_ficha_monitoreo_print.vm_varios_sat)
		setTextoPrint("Éxito",asivm_ficha_monitoreo_print.vm_varios_exito)
		setTextoPrint("PRE",asivm_ficha_monitoreo_print.vm_varios_pre)
		setTextoPrint("EOT",asivm_ficha_monitoreo_print.vm_varios_eot)
		setTextoPrint("Diálisis",asivm_ficha_monitoreo_print.vm_varios_dialisis)
		setTextoPrint("Aspirado Traqueal",asivm_ficha_monitoreo_print.vm_varios_aspirado_traqueal)
		setTextoPrint("Balance diario",asivm_ficha_monitoreo_print.vm_varios_balance_diario)
		setTextoPrint("SOFA diario",asivm_ficha_monitoreo_print.vm_varios_sat)
		break;
	case 3:
	case 2:
		setTextoPrint("Frecuencia Respiratoria",asivm_ficha_monitoreo_print.frecuencia_respiratoria)
		
		var codMecanica = globals.IsBlank(asivm_ficha_monitoreo_print.mecanica)?"":asivm_ficha_monitoreo_print.mecanica.split(",");
		var mecanica = "";
		for (var indiceCodMecanica = 0; indiceCodMecanica < codMecanica.length; indiceCodMecanica++) {
			
			mecanica = application.getValueListDisplayValue('AsiVm_vl_mecanica',codMecanica[indiceCodMecanica])+ (mecanica==''?mecanica: ', '+ sedacion);
		}
		setTextoPrint("Mecánica",mecanica)
		setTextoPrint("Disnea",application.getValueListDisplayValue("AsiVm_vl_disnea",asivm_ficha_monitoreo_print.disnea))
		
		if(globals.Asivm_prestacion==2){
			setTitlePrint("SETEO");
			setTextoPrint("Ventilador",asivm_ficha_monitoreo_print.vni_seteo_ventilador)
			setTextoPrint("Interfase",asivm_ficha_monitoreo_print.vni_seteo_interfase)
			
				var codModo = globals.IsBlank(asivm_ficha_monitoreo_print.mecanica)?"":asivm_ficha_monitoreo_print.mecanica.split(",");
			var modo = "";
			for (var indiceCodModo = 0; indiceCodModo < codModo.length; indiceCodModo++) {
				
				modo = application.getValueListDisplayValue('AsiVm_vl_modo_ventilatorio',codModo[indiceCodModo])+ (modo==''?modo: ', '+ modo);
			}
			
			setTextoPrint("Modo",modo);
			setTextoPrint("Presión Inspiratoria",asivm_ficha_monitoreo_print.vni_seteo_presion_inspiratoria)
			setTextoPrint("PEEP",asivm_ficha_monitoreo_print.vni_seteo_peep)
			setTextoPrint("Frecuencia Respiratoria",asivm_ficha_monitoreo_print.vni_seteo_frec_respiratoria)
			setTextoPrint("Tiempo inspiratorio",asivm_ficha_monitoreo_print.vni_seteo_tiempo_inspiratorio)
			setTextoPrint("FiO2",asivm_ficha_monitoreo_print.vni_seteo_fio2)
		}
		
		if(globals.Asivm_prestacion==3){
			setTitlePrint("Programación");
			setTextoPrint("Equipo",application.getValueListDisplayValue('AsiVm_vl_programacion_equipo',asivm_ficha_monitoreo_print.caf_prog_equipo));
			setTextoPrint("Tamaño de cánula",application.getValueListDisplayValue('AsiVm_vl_programacion_tam_canula',asivm_ficha_monitoreo_print.caf_prog_tamanio_canula));
			setTextoPrint("Flujo",asivm_ficha_monitoreo_print.progr_flujo);
			setTextoPrint("FiO2",asivm_ficha_monitoreo_print.progr_fi02);
			
		}
	break;

	
	}

	
	
	setTitlePrint("EAB");
	setTextoPrint('pH',asivm_ficha_monitoreo_print.eab_ph)
	setTextoPrint('PO2',asivm_ficha_monitoreo_print.eab_p02)
	setTextoPrint('PCO2',asivm_ficha_monitoreo_print.eab_pc02)
	setTextoPrint('HCO3-',asivm_ficha_monitoreo_print.eab_hc03)
	setTextoPrint('PaO2/FiO2',asivm_ficha_monitoreo_print.eab_pa02_fi02)	
}
/**
 * @properties={typeid:24,uuid:"7232AD72-9E3B-40DC-8653-663D9FB87112"}
 */
function cargarBody(fileType) {
	
	dsAux = databaseManager.createEmptyDataSet();
//	dsAux.addColumn('html_hoja');
	
	if(fileType==1){
		f_titulo_reporte = 'Ficha'
		reporteFicha();
	}else if(fileType==2){
		f_titulo_reporte = 'Ficha'
		reporteFichaMonitoreo();
	}
	else if(fileType==4){
		f_titulo_reporte = 'Ficha'
		reporteFichaCierre();
	}
	html = dsAux.getAsHTML()
//	html.replace(findString,newString)
//	globals.printRoutine('frm_asivm_template_html', null);
	// actualizando lista de impresion
//	var $frm = solutionModel.getForm('frm_asivm_template_html');
//	var $tipos = [JSColumn.TEXT];
//	$frm.dataSource = dsAux.createDataSource('frm_asivm_template_html', $tipos);
//	forms.frm_asivm_template_html.controller.recreateUI();
	
	globals.printRoutine('frm_asivm_template_html', null);


	
		
}


/**
 * TODO generated, please specify type and doc for the params
 * @param Fecha_Desde
 * @param Fecha_Hasta
 *
 * @properties={typeid:24,uuid:"4F72693C-F043-4FE3-95B5-B28633B9ADDB"}
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
 * @param labelValue
 * @param value
 *
 * @properties={typeid:24,uuid:"CE43D455-3CC0-4632-8260-6C052C8E4D47"}
 */
function setTextoPrint(labelValue, value){
	var valor = value==null?"":value
	var html = ''
	html += '<html><body>'
	html += '<table width="1024">'
	html += '<tr>'
	html += '<td width="40%"><p>'+labelValue+': '+ valor +'</p></td>'
	html += '</tr>'
	html += '</table>'
	html += '</body></html>'
	html_content += html;
	dsAux.addRow([html]);
}

/**
 * TODO generated, please specify type and doc for the params
 * @param labelValue
 * @param value
 *
 * @properties={typeid:24,uuid:"99485EDB-15E1-4BE1-9F8A-474CB90D87A3"}
 */
function setTextoPrintDate(labelValue, value){
	var html = ''
	html += '<html><body>'
	html += '<table width="1024">'
	html += '<tr>'
	html += '<td width="40%"><p>'+labelValue+': '+ utils.dateFormat(value,'dd/MM/yyyy hh:mm:ss')+'</table>'
	html += '</body></html>'
	dsAux.addRow([html]);
}



/**
 * TODO generated, please specify type and doc for the params
 * @param labelValue
 * @param valor
 * @param valuelist
 *
 * @properties={typeid:24,uuid:"13DDC351-A06F-405B-A409-5A8726A1990A"}
 */
function setTextoPrintMultiList(labelValue,valor, valuelist){
	var codList = globals.IsBlank(valor)?"":valor.split(",");
	var valores = "";
	for (var indiceCod = 0; indiceCod < codList.length; indiceCod++) {
		
		valores = application.getValueListDisplayValue(valuelist,codList[indiceCod])+ (valores==''?valores: ', '+ valores);
	}
	setTextoPrint(labelValue,valores)
}
/**
 * TODO generated, please specify type and doc for the params
 * @param labelValue
 * @param value
 * @param valuelist
 *
 * @properties={typeid:24,uuid:"892B45DC-2677-438D-BF46-AD8F3C7793D6"}
 */
function setTextoPrintValueList(labelValue, value, valuelist){
	var valor=value==null?0:value
	var html = ''
	html += '<html><body>'
	html += '<table width="1024">'
	html += '<tr>'
	html += '<td width="40%"><p>'+labelValue+': '+ (application.getValueListDisplayValue(valuelist,valor))+'</p></td>'
	html += '</tr>'
	html += '</table>'
	html += '</body></html>'
	dsAux.addRow([html]);
}

/**
 * TODO generated, please specify type and doc for the params
 * @param title
 *
 * @properties={typeid:24,uuid:"BE0036D0-F0AE-45EF-BFA0-61D921B5313A"}
 */
function setTitlePrint(title){
//	lineHorizontal();
	var html = ''
	html += '<html><body>'
	html += '<table width="1024">'
	html += '<tr>'
	html += '<td width="40%"><b><font size="3">' + title + '</font></b></td>'
	html += '</tr>'
	html += '</table>'
	html += '</body></html>'
	html_content += html;
	dsAux.addRow([html]);
	
}

/**
 * @properties={typeid:24,uuid:"6BABBC5A-9F82-4767-A771-993AE710AE36"}
 */
function lineHorizontal(){
	var html = ''
	html += '<html><body>'
	html += '<table width="1024">'
	html += '<tr>'
	html +='<hr>'
	html += '</tr>'
	html += '</table>'
	html += '</body></html>'
	dsAux.addRow([html]);
}
/**
 * TODO generated, please specify type and doc for the params
 * @param {String} dataCol_1
 * @param {String} dataCol_2
 * @param {String} dataCol_3
 * @param {String} dataCol_4
 * @param {String} dataCol_5
 *
 * @return {String}
 * @properties={typeid:24,uuid:"EA9293EC-506A-4302-843C-AFA7A822559B"}
 */
function getAlertHTML (dataCol_1,dataCol_2,dataCol_3,dataCol_4,dataCol_5) {

	// alertas
	var html = "";
	html += '<html><body>'
	html += '<table width="1024">'
	html += '<tr>'
	html += '<td width="10%">&nbsp;&nbsp;' + dataCol_1 + '</td>'
	html += '<td width="10%">' + dataCol_2 + '</td>'
	html += '<td width="10%">' + dataCol_3 + '</td>'
	html += '<td width="10%">' + dataCol_4 + '</td>'
	html += '<td width="60%">' + dataCol_5 + '</td>'
	html += '</tr>'
	html += '</table>'
	html += '</body></html>';
	
	return html;
}

/**
 * @properties={typeid:24,uuid:"EA4C8A94-40BB-4574-85FA-3A4B11C3EDA0"}
 * @AllowToRunInFind
 */
function imprimir(fileType) {
//	forms.frm_asivm_template_html.controller.setPageFormat(210,297,10,10,10,10,1,0);
//	 controller.showPrintPreview(true)
	
	//amb desa
	/*var absoluteFileName = '';
		
	    var fileName = 'prueba' + '.pdf';
	    var $arch = plugins.file.showFileSaveDialog(fileName)
		//var absoluteFileNamep = arch.getAbsoluteFile();
		if($arch){
			
			absoluteFileName = $arch.getAbsolutePath();
			try{
			
				forms.frm_asivm_template_html.controller.print(false,false,plugins.pdf_output.getPDFPrinter(absoluteFileName));
			}
			catch (ex) {
				
				absoluteFileName = '';
				globals.DIALOGS.showWarningDialog("¡Atención!","Error, GenerarReporte_servoyPDF.\n" + ex.message,"Aceptar");
			}
			
		}
		else
			globals.DIALOGS.showWarningDialog("¡Atención!","Error GenerarReporte_servoyPDF, plugins.file.createFile " + fileNameReport,"Aceptar");
	*/
	
	//amb desa
//	var patchArchivoPrueba = ''
//	if(fileType==1){
//		patchArchivoPrueba = 'c:/temp/ficha_kine_'+globals.AsiVm_adm_HistClin.toString()+'_'+utils.dateFormat(f_fechaImpresion,'dd-MM-yyyy hh-mm-ss')+'.pdf';
//	}else if(fileType==2){
//		 patchArchivoPrueba = 'C:/temp/monitoreo_kine_'+globals.AsiVm_adm_HistClin.toString()+'_'+utils.dateFormat(f_fechaImpresion,'dd-MM-yyyy hh-mm-ss')+'.pdf';
//	}else if(fileType==4){
//		 patchArchivoPrueba = 'C:/temp/cierre_kine_'+globals.AsiVm_adm_HistClin.toString()+'_'+utils.dateFormat(f_fechaImpresion,'dd-MM-yyyy hh-mm-ss')+'.pdf';
//	}
//	
//	var success = plugins.pdf_output.startMetaPrintJob(patchArchivoPrueba);
//	if (success)
//	{
//		controller.print(false,false,plugins.pdf_output.getPDFPrinter(patchArchivoPrueba));
//		forms.frm_asivm_template_html.controller.print(false,false,plugins.pdf_output.getPDFPrinter());
//	}
//	plugins.pdf_output.endMetaPrintJob()
	

	// amb Produccion
//	forms.frm_asivm_template_html.controller.recreateUI();
	forms.frm_asivm_template_html.controller.print(false,false);
//	forms.frm_asivm_template_html.controller.print(false,false,plugins.pdf_output.getPDFPrinter());

}

/**
 * TODO generated, please specify type and doc for the params
 * @param value
 *
 * @properties={typeid:24,uuid:"AE636713-E35C-4F6B-A4E4-60C4B806BCAD"}
 */
function convertNumberToHour_HHMM(value) {
	
	var hora = "";
	
	if(value < 1){
		hora = "00:00";
	}
	else{
		if(value < 10){
			hora = "00:0" + value.toString().substr(0,1);
		}
		else{
			if(value < 100){
				hora = "00:" + value.toString().substr(0,2);
			}
			else{
				if(value < 1000){
					hora = "0" + value.toString().substr(0,1) + ":" + value.toString().substr(1,2);
				}
				else{
					if(value <= 2359){
						hora = value.toString().substr(0,2) + ":" + value.toString().substr(2,2);
					}
				}
			}
		}
	}

	return hora;
}

/**
 * TODO generated, please specify type and doc for the params
 * @param {Number} HistClin
 *
 * @properties={typeid:24,uuid:"EB03379C-0C07-46A0-8AE7-95E93D9CC982"}
 */
function formatearHistclin(HistClin) {
	var histClin = '';
	if(arguments[0] != undefined)
		histClin =  HistClin.toString().substr(0,HistClin.toString().length-1)+"/"+HistClin.toString().substr(HistClin.toString().length -1,1)	

	return histClin;
}


/**
 * TODO generated, please specify type and doc for the params
 * @param firstShow
 * @param event
 *
 * @properties={typeid:24,uuid:"FCDC2812-E0B5-42C9-B21D-91C48B80FA55"}
 */
function onShow_inicializarForm(firstShow, event) {
	
	var dsAux1 = databaseManager.createEmptyDataSet();
	dsAux1.addColumn('html_hoja');
	dsAux1.addRow(['']);
	
	// actualizando lista de impresion
	var $frm = solutionModel.getForm('frm_asivm_template_html');
	var $tipos = [JSColumn.TEXT];
	$frm.dataSource = dsAux1.createDataSource('frm_asivm_template_html', $tipos);
	forms.frm_asivm_template_html.controller.recreateUI();
	
	globals.printRoutine('frm_asivm_template_html', null);
}
