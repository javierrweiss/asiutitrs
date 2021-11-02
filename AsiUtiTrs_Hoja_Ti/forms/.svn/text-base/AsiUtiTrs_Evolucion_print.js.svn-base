/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"D466A422-2DF8-474B-B7E2-F033AB62E00B"}
 */
var f_medicoNombre = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"475FCBDB-32CC-4CE0-9854-4877DCBD1E37"}
 */
var f_matricula = '';

/**
 * @properties={typeid:35,uuid:"40E421FA-9F4F-4E9D-8EFE-349740EFC8A5",variableType:-4}
 */
var dsAux = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"678B013E-1BCF-44E8-993B-B4BA4E4E0EDE"}
 */
var f_histClinIngreso = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"FAB5BA6B-C38D-4F9A-ACEC-AEE7BB4EBE5B"}
 */
var f_egreso = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"14659A9B-4AC5-4EE9-8AE5-8E5552E817FF"}
 */
var f_ingreso = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"D0D88AD1-0F42-4BD1-8E66-776CBDB4DDCC"}
 */
var f_cobertura = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"02A75FB3-E56D-4CE2-9C4F-CEBCBA0E9464"}
 */
var f_sexo = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"1BCA70AA-91BD-4978-8E77-BD97F93BC7B1"}
 */
var f_hora = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"6C3B2093-DC90-4800-AD63-A29136B34354"}
 */
var f_medico = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"15F0E1C0-7FF9-4B01-9646-B6F5BD8302EC"}
 */
var f_edad = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"E19B5F89-6CA4-4B19-9FE6-EF1E85A7B2CB"}
 */
var f_cama = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"020F21FF-3BEC-4436-98A7-D4275438C620",variableType:4}
 */
var f_habitacion = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"100A8C70-1884-4478-9447-7BC5C65781B7",variableType:93}
 */
var f_fechaImpresion = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"C6513B47-1E49-42E4-A221-65FA3E56E936"}
 */
var f_histclinunica = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"D3B71E6B-87BE-428F-9902-E78763A2438F"}
 */
var f_apelnom = null;

/**
 * @properties={typeid:24,uuid:"7D0A4BF4-42F4-46BB-B7E7-289154F51E3A"}
 */
function limpiarForm (){
	
	f_apelnom = null;
	f_cama = null;
	f_medico = null;
	f_fechaImpresion = null;
	f_habitacion = null;
	f_histclinunica = null;
	f_hora = null;
	f_cobertura = null;
	f_sexo = null;
	f_edad = null;
	f_egreso = null;
	f_histClinIngreso = null;
	f_ingreso = null;
	f_matricula = null;
	f_medicoNombre = null;
	
	globals.AsiUtiTrs_Hoja_histClinAsist = 0;
	globals.AsiUtiTrs_Hoja_histClinPrint = 0;
	globals.AsiUtiTrs_Hoja_fechaPrint = 0;
	globals.AsiUtiTrs_Hoja_horaPrint = 0;
	
	globals.AsiUtiTrs_Hoja_obrCodigo = 0;
	globals.AsiUtiTrs_Hoja_hcUnicaPrint = 0;
	globals.AsiUtiTrs_Hoja_fechaIngresoPrint = 0;
	globals.AsiUtiTrs_Hoja_horaIngresoPrint = 0;
	globals.AsiUtiTrs_Hoja_alerHistClinPrint = 0;
	
	globals.AsiUtiTrs_Hoja_perLegajoPrint = 0;
	globals.AsiUtiTrs_Hoja_medCodigoPrint = 0;
	globals.AsiUtiTrs_Hoja_patCodiPrint = 0;
	
	
	if(forms.AsiUtiTrs_Evolucion_print.foundset.getSize() > 0)
		forms.AsiUtiTrs_Evolucion_print.foundset.clear();
	
	controller.setPageFormat(210,297,10,10,10,10,1,0);
}



/**
 * TODO generated, please specify type and doc for the params
 * @param histClin
 * @param fecha
 * @param hora
 *
 * @properties={typeid:24,uuid:"28D3A396-1ADF-4BB8-8205-6FCA79C6CCAD"}
 */
function imprimirAsiUtiTrs(histClin,fecha,hora){
	
	limpiarForm();
	
	globals.AsiUtiTrs_Hoja_histClinAsist = histClin;
	globals.AsiUtiTrs_Hoja_histClinPrint = histClin;
	globals.AsiUtiTrs_Hoja_fechaPrint = fecha;
	globals.AsiUtiTrs_Hoja_horaPrint = hora;
	
	if(asiutitrs_hoja_rel_buscar_hojati_print.getSize() > 0){
		
		globals.AsiUtiTrs_Hoja_obrCodigo = asiutitrs_hoja_numero_to_asistencial_admision.adm_obrsoc;
		globals.AsiUtiTrs_Hoja_hcUnicaPrint = asiutitrs_hoja_numero_to_asistencial_admision.adm_histclinuni;
		globals.AsiUtiTrs_Hoja_fechaIngresoPrint = asiutitrs_hoja_rel_tbc_hist_cab_new.histcabintobsamd;
		globals.AsiUtiTrs_Hoja_horaIngresoPrint = asiutitrs_hoja_rel_tbc_hist_cab_new.histcabintobshor;
		globals.AsiUtiTrs_Hoja_alerHistClinPrint = histClin;
		
		var medico = "Confeccionada por ";
		var matricula = "";
		
		if(asiutitrs_hoja_rel_buscar_hojati_print.htitipomed == 0){
			
			globals.AsiUtiTrs_Hoja_perLegajoPrint = asiutitrs_hoja_rel_buscar_hojati_print.htilegajomed;
			if(asiutitrs_hoja_rel_buscar_personal_print.per_sexo == 'M'){
				medico += "el Dr. ";
				f_medicoNombre = "Dr. ";
			}
			else{
				medico += "la Dra. ";
				f_medicoNombre = "Dra. ";
			}
			medico += utils.stringTrim(asiutitrs_hoja_rel_buscar_personal_print.per_apelnom);
			matricula = asiutitrs_hoja_rel_buscar_personal_print.per_codmatri;
			f_medicoNombre += utils.stringTrim(asiutitrs_hoja_rel_buscar_personal_print.per_apelnom);
		}
		
		if(asiutitrs_hoja_rel_buscar_hojati_print.htitipomed == 1){
			globals.AsiUtiTrs_Hoja_medCodigoPrint = asiutitrs_hoja_rel_buscar_hojati_print.htilegajomed;
			medico += "el Dr. " + utils.stringTrim(asiutitrs_hoja_rel_buscar_medico_print.med_apenom);
			matricula = asiutitrs_hoja_rel_buscar_medico_print.med_matricula;
			f_medicoNombre = "Dr. " + utils.stringTrim(asiutitrs_hoja_rel_buscar_medico_print.med_apenom);
		}
		
		var date = globals.IntegerToDate(fecha);
		medico += " el " + globals.getDayName(date,true) + " " + date.getDate() + " " + globals.getMonthName(date,true) + " / " + date.getFullYear() + " a las " + convertNumberToHour_HHMM(hora) + " hrs.";
		
		var sexo = "";
		if(asiutitrs_hoja_numero_to_asistencial_admision.adm_sexo == 1){
			sexo = "Femenino"; 
		}
		else{
			if(asiutitrs_hoja_numero_to_asistencial_admision.adm_sexo == 2)
				sexo = "Masculino";	
		}
		
		// cargar Header
		f_fechaImpresion = application.getServerTimeStamp();
		f_medico = medico;
		f_matricula = matricula;
		f_sexo = sexo; 
		//si no muestra edad y demas es un error de datos faltantes en asistencial.tbc_admision
		if(asiutitrs_hoja_numero_to_asistencial_admision.getSize()>0){
			f_edad = globals.CalculoEdad(asiutitrs_hoja_numero_to_asistencial_admision.adm_fecnac) + ' ' +  globals.vTipoEdad;;
			f_apelnom =  formatearHistclin(asiutitrs_hoja_numero_to_asistencial_admision.adm_histclin) + "  " + utils.stringTrim(asiutitrs_hoja_numero_to_asistencial_admision.adm_apelnom); 
			f_histclinunica = asiutitrs_hoja_numero_to_asistencial_admision.adm_histclinuni;
			f_habitacion = asiutitrs_hoja_numero_to_asistencial_admision.adm_habita;
			f_cama = asiutitrs_hoja_numero_to_asistencial_admision.adm_cama;
			f_cobertura = utils.stringTrim(asiutitrs_hoja_rel_buscar_obrasocial.obr_razonsoc) + ' (' +asiutitrs_hoja_rel_buscar_obrasocial.obr_codigo + ')'; 
			f_histClinIngreso = asiutitrs_hoja_rel_tbc_hist_cab_new.histcabnrounico;
		}
		
		if(asiutitrs_hoja_rel_buscar_guardia.getSize() > 0){
			
			var fechaIngreso = globals.IntegerToDate(asiutitrs_hoja_rel_buscar_guardia.guar_fechaingreso);
			f_ingreso = globals.getDayName(fechaIngreso,true) + " " + fechaIngreso.getDate() + " " + globals.getMonthName(fechaIngreso,true) + " / " + fechaIngreso.getFullYear() + " " + convertNumberToHour_HHMM(asiutitrs_hoja_rel_buscar_guardia.guar_horaingreso) + " hrs.";
			
			var fechaEgreso = globals.IntegerToDate(asiutitrs_hoja_rel_buscar_guardia.guar_fechaalta);
			f_egreso = globals.getDayName(fechaEgreso,true) + " " + fechaEgreso.getDate() + " " + globals.getMonthName(fechaEgreso,true) + " / " + fechaEgreso.getFullYear() + " " + convertNumberToHour_HHMM(asiutitrs_hoja_rel_buscar_guardia.guar_horaalta) + " hrs.";
			
		}
	
		// Cargar body
		//que hago
		cargarBody();
		imprimir();
		
	
		
	}
	else{
		globals.DIALOGS.showWarningDialog("Atención!","No hay datos para imprimir.","Aceptar")
	}
}

/**
 * @properties={typeid:24,uuid:"13B4BDC1-1680-4479-B55E-B63126E972A2"}
 */
function cargarBody() {
	
	dsAux = databaseManager.createEmptyDataSet();
	dsAux.addColumn('html_hoja');
	
	
	
	var html = ''

	
	html = ''
	html += '<html><body>'
	html += '<table width=1024 cellpadding=1 cellspacing=0>'
	html += '<tr>'
	html += '<td width=1024>' + 'INFORME CONFIDENCIAL, secreto Médico dentro de los alcances del árticulo 156 del Código Penal. </td>'
	html += '</tr>'
	html += '</table>'
	html += '</body></html>'
	dsAux.addRow([html]);
	

	
	// Diagnostico
	html = ''
	html += '<html><body>'
	html += '<table width=1024 cellpadding=1 cellspacing=0>'
	html += '<tr>'
	html += '<td width=1024><b>' + 'DIAGNOSTICOS :' + '</b></td>'
	html += '</tr>'
	html += '</table>'
	html += '</body></html>'
	dsAux.addRow([html]);

/*	if(globals.AsiUtiTrs_Primera_Evol_Medica){
		
		
		
		
	}*/
	if(asiutitrs_hoja_rel_buscar_hojati_print.htidiagnos1 > 0){
		
		globals.AsiUtiTrs_Hoja_patCodiPrint = asiutitrs_hoja_rel_buscar_hojati_print.htidiagnos1;
		// Diagnostico 1
		html = ''
		html += '<html><body>'
		html += '<table width=1024 cellpadding=1 cellspacing=0>'
		html += '<tr>'
		html += '<td width=1024>&nbsp;&nbsp;' + asiutitrs_hoja_rel_buscar_patologia_print.pat_descrip + '</td>'
		html += '</tr>'
		html += '</table>'
		html += '</body></html>'
		dsAux.addRow([html]);
	}
	
	if(asiutitrs_hoja_rel_buscar_hojati_print.htidiagnos2 > 0){
		
		globals.AsiUtiTrs_Hoja_patCodiPrint = asiutitrs_hoja_rel_buscar_hojati_print.htidiagnos2;
		// Diagnostico 2
		html = ''
		html += '<html><body>'
		html += '<table width=1024 cellpadding=1 cellspacing=0>'
		html += '<tr>'
		html += '<td width=1024>&nbsp;&nbsp;' + asiutitrs_hoja_rel_buscar_patologia_print.pat_descrip + '</td>'
		html += '</tr>'
		html += '</table>'
		html += '</body></html>'
		dsAux.addRow([html]);
	}
	
	if(asiutitrs_hoja_rel_buscar_hojati_print.htidiagnos3 > 0){
		
		globals.AsiUtiTrs_Hoja_patCodiPrint = asiutitrs_hoja_rel_buscar_hojati_print.htidiagnos3;
		// Diagnostico 3
		html = ''
		html += '<html><body>'
		html += '<table width=1024 cellpadding=1 cellspacing=0>'
		html += '<tr>'
		html += '<td width=1024>&nbsp;&nbsp;' + asiutitrs_hoja_rel_buscar_patologia_print.pat_descrip + '</td>'
		html += '</tr>'
		html += '</table>'
		html += '</body></html>'
		dsAux.addRow([html]);
	}
	
	if(asiutitrs_hoja_rel_buscar_hojati_print.htidiagevo1 > 0){
		
		globals.AsiUtiTrs_Hoja_patCodiPrint = asiutitrs_hoja_rel_buscar_hojati_print.htidiagevo1;
		// Diagnostico 3
		html = ''
		html += '<html><body>'
		html += '<table width=1024 cellpadding=1 cellspacing=0>'
		html += '<tr>'
		html += '<td width=1024>&nbsp;&nbsp;' + asiutitrs_hoja_rel_buscar_patologia_print.pat_descrip + '</td>'
		html += '</tr>'
		html += '</table>'
		html += '</body></html>'
		dsAux.addRow([html]);
	}
	
	
	if(asiutitrs_hoja_rel_buscar_hojati_print.htidiagevo2 > 0){
		
		globals.AsiUtiTrs_Hoja_patCodiPrint = asiutitrs_hoja_rel_buscar_hojati_print.htidiagevo2;
		// Diagnostico 3
		html = ''
		html += '<html><body>'
		html += '<table width=1024 cellpadding=1 cellspacing=0>'
		html += '<tr>'
		html += '<td width=1024>&nbsp;&nbsp;' + asiutitrs_hoja_rel_buscar_patologia_print.pat_descrip + '</td>'
		html += '</tr>'
		html += '</table>'
		html += '</body></html>'
		dsAux.addRow([html]);
	}
	
	
	//Si no es primer evolución del dia, se debe mostrar en examen fisico los datos de la primera el dia. 
	
	if(asiutitrs_hoja_rel_buscar_hojati_print.hties1erevoldia!=0){
		//asiutitrs_hoja_rel_buscar_hojati_print_primera_dia
		armarExamenFisico(dsAux, asiutitrs_hoja_rel_buscar_hojati_print);
		
	}else{
		armarExamenFisico(dsAux, asiutitrs_hoja_rel_buscar_hojati_print_primera_dia); 
	}
	
	if(asiutitrs_hoja_rel_buscar_hojati_print.htievolinmant == 1)
		setTextoInforme("Datos de interes de la evolucion inmediata anterior",1);
	
	
	if(asiutitrs_hoja_rel_buscar_hojati_print.htiaparrespi == 1)
		setTextoInforme("Examen Semiologico - Aparato Respiratorio(Solo datos Positivos)",2);
	
	if(asiutitrs_hoja_rel_buscar_hojati_print.htiaparcircu == 1)
		setTextoInforme("Examen Semiologico - Aparato Circulatorio(Solo datos Positivos)",3);
	
	if(asiutitrs_hoja_rel_buscar_hojati_print.htiapardiges == 1)
		setTextoInforme("Examen Semiologico - Aparato digestivo(Solo datos Positivos)",4);
	
	if(asiutitrs_hoja_rel_buscar_hojati_print.htisistnervi == 1)
		setTextoInforme("examen semiologico - sistema nervioso central(Solo datos positivos)",5);
	
	if(asiutitrs_hoja_rel_buscar_hojati_print.htiotras == 1)
		setTextoInforme("Examen semiologico - otros (solo datos positivos)",6);
	
	if(asiutitrs_hoja_rel_buscar_hojati_print.htiestrecfec == 1)
		setTextoInforme("Estudios recibidos en la fecha",7);
	
	if(asiutitrs_hoja_rel_buscar_hojati_print.htiestpendefec == 1)
		setTextoInforme("estudios pendientes de efectuar",8);
	
	if(asiutitrs_hoja_rel_buscar_hojati_print.htiestpendinf == 1)
		setTextoInforme("estudios pendientes de informe",9);
	
	if(asiutitrs_hoja_rel_buscar_hojati_print.htitratind == 1)
		setTextoInforme("Tratamiento Indicado",10);
	
	if(asiutitrs_hoja_rel_buscar_hojati_print.htiatb == 1)
		setTextoInforme("Antibioticos",12);
	
	if(asiutitrs_hoja_rel_buscar_hojati_print.htipresdiagact == 1)
		setTextoInforme("Presuncion y/u Orientacion Diagnostica actual",13);
	
	if(asiutitrs_hoja_rel_buscar_hojati_print.htimotsegint == 1)
		setTextoInforme("Motivo por el cual debe continuar internado",14);
	
	if(asiutitrs_hoja_rel_buscar_hojati_print.htiotrosdatosint == 1)
		setTextoInforme("Otros datos de Interes",15);
	
	
	
	
	
	if(asiutitrs_hoja_rel_buscar_escaras_print.getSize()>0){
		
		if(asiutitrs_hoja_rel_buscar_escaras_print.teesscore>0){
		html = ''
		html += '<html><body>'
		html += '<table width=1024 cellpadding=1 cellspacing=0>'
		html += '<tr>'
		html += '<td width=1024><b><u>FACTORES DE RIESGO PARA EL DESARROLLO DE ULCERAS POR PRESION(ESCARAS)</u></b></td>'
		html += '</tr>'
		html += '</table>'
		html += '</body></html>'
		dsAux.addRow([html]);
		}
		
		
		if(asiutitrs_hoja_rel_buscar_escaras_print.teesneop>0){
			html = ''
			html += '<html><body>'
			html += '<table width=1024 cellpadding=1 cellspacing=0>'
			html += '<tr>'
			html += '<td width=1024>&#8226; PACIENTE NEOPLASICO</td>'
			html += '</tr>'
			html += '</table>'
			html += '</body></html>'
			dsAux.addRow([html]);
		}
		
		
		if(asiutitrs_hoja_rel_buscar_escaras_print.teescons>0){
			html = ''
			html += '<html><body>'
			html += '<table width=1024 cellpadding=1 cellspacing=0>'
			html += '<tr>'
			html += '<td width=1024>&#8226; PACIENTE CON ENFERMEDADES CONSUNTIVAS</td>'
			html += '</tr>'
			html += '</table>'
			html += '</body></html>'
			dsAux.addRow([html]);
		}
		
		
		if(asiutitrs_hoja_rel_buscar_escaras_print.teesquir>0){
			html = ''
			html += '<html><body>'
			html += '<table width=1024 cellpadding=1 cellspacing=0>'
			html += '<tr>'
			html += '<td width=1024>&#8226; PACIENTE CON COMPLICACIONES QUIRURGICAS</td>'
			html += '</tr>'
			html += '</table>'
			html += '</body></html>'
			dsAux.addRow([html]);
		}
		
		if(
		 asiutitrs_hoja_rel_buscar_escaras_print.teesnutr_1!=0 
		 || asiutitrs_hoja_rel_buscar_escaras_print.teesnutr_2!=0 
		 || asiutitrs_hoja_rel_buscar_escaras_print.teesnutr_3!=0 	
		 || asiutitrs_hoja_rel_buscar_escaras_print.teesnutr_4!=0 	
		 || asiutitrs_hoja_rel_buscar_escaras_print.teesnutr_5!=0 	
		){
			html = ''
			html += '<html><body>'
			html += '<table width=1024 cellpadding=1 cellspacing=0>'
			html += '<tr>'
			html += '<td width=1024><u>ESTADO NUTRICIONAL:</u> </td>'
			html += '</tr>'
			html += '</table>'
			html += '</body></html>'
			dsAux.addRow([html]);
		}
		
		
		if(asiutitrs_hoja_rel_buscar_escaras_print.teesnutr_1!=0){
			html = ''
			html += '<html><body>'
			html += '<table width=1024 cellpadding=1 cellspacing=0>'
			html += '<tr>'
			html += '<td width=1024>&#8226; Obesidad</td>'
			html += '</tr>'
			html += '</table>'
			html += '</body></html>'
			dsAux.addRow([html]);
			
		}
		
		if(
				asiutitrs_hoja_rel_buscar_escaras_print.teesapat_1!=0
			|| 	asiutitrs_hoja_rel_buscar_escaras_print.teesapat_2!=0
			|| 	asiutitrs_hoja_rel_buscar_escaras_print.teesapat_3!=0
			|| 	asiutitrs_hoja_rel_buscar_escaras_print.teesapat_4!=0
			|| 	asiutitrs_hoja_rel_buscar_escaras_print.teesapat_5!=0
			|| 	asiutitrs_hoja_rel_buscar_escaras_print.teesapat_6!=0
			|| 	asiutitrs_hoja_rel_buscar_escaras_print.teesapat_7!=0
			|| 	asiutitrs_hoja_rel_buscar_escaras_print.teesapat_8!=0
			|| 	asiutitrs_hoja_rel_buscar_escaras_print.teesapat_9!=0
			||  asiutitrs_hoja_rel_buscar_escaras_print.teessens!=0
			|| 	asiutitrs_hoja_rel_buscar_escaras_print.teesdesh!=0
		
		){
			html = ''
			html += '<html><body>'
			html += '<table width=1024 cellpadding=1 cellspacing=0>'
			html += '<tr>'
			html += '<td width=1024><u>ANTECEDENTES PATOLÓGICOS:</u> </td>'
			html += '</tr>'
			html += '</table>'
			html += '</body></html>'
			dsAux.addRow([html]);
		}
		
		
		if(asiutitrs_hoja_rel_buscar_escaras_print.teesapat_1!=0){
			html = ''
			html += '<html><body>'
			html += '<table width=1024 cellpadding=1 cellspacing=0>'
			html += '<tr>'
			html += '<td width=1024>&#8226; PACIENTE CON DIABETES MELLITUS </td>'
			html += '</tr>'
			html += '</table>'
			html += '</body></html>'
			dsAux.addRow([html]);
		}
		
		
		if(asiutitrs_hoja_rel_buscar_escaras_print.teesapat_2!=0){
			html = ''
			html += '<html><body>'
			html += '<table width=1024 cellpadding=1 cellspacing=0>'
			html += '<tr>'
			html += '<td width=1024>&#8226; PACIENTE CON CANCER </td>'
			html += '</tr>'
			html += '</table>'
			html += '</body></html>'
			dsAux.addRow([html]);
		}
		
		if(asiutitrs_hoja_rel_buscar_escaras_print.teesapat_3!=0){
			html = ''
			html += '<html><body>'
			html += '<table width=1024 cellpadding=1 cellspacing=0>'
			html += '<tr>'
			html += '<td width=1024>&#8226; PACIENTE CON ENFERMEDADES NEUROLOGICAS </td>'
			html += '</tr>'
			html += '</table>'
			html += '</body></html>'
			dsAux.addRow([html]);
		}
		
		
		
		if(asiutitrs_hoja_rel_buscar_escaras_print.teesapat_4!=0){
			html = ''
			html += '<html><body>'
			html += '<table width=1024 cellpadding=1 cellspacing=0>'
			html += '<tr>'
			html += '<td width=1024>&#8226; PACIENTE CON ENFERMEDADES DE CORTICOESTEROIDES </td>'
			html += '</tr>'
			html += '</table>'
			html += '</body></html>'
			dsAux.addRow([html]);
		}
		
		if(asiutitrs_hoja_rel_buscar_escaras_print.teesapat_5!=0){
			html = ''
			html += '<html><body>'
			html += '<table width=1024 cellpadding=1 cellspacing=0>'
			html += '<tr>'
			html += '<td width=1024>&#8226; PACIENTE CON ENFERMEDADES VASCULARES </td>'
			html += '</tr>'
			html += '</table>'
			html += '</body></html>'
			dsAux.addRow([html]);
		}
		
		if(asiutitrs_hoja_rel_buscar_escaras_print.teesapat_6!=0){
			html = ''
			html += '<html><body>'
			html += '<table width=1024 cellpadding=1 cellspacing=0>'
			html += '<tr>'
			html += '<td width=1024>&#8226; PACIENTE CON SINDROME DE GILLAN BARRE </td>'
			html += '</tr>'
			html += '</table>'
			html += '</body></html>'
			dsAux.addRow([html]);
		}
		
		if(asiutitrs_hoja_rel_buscar_escaras_print.teesapat_7!=0){
			html = ''
			html += '<html><body>'
			html += '<table width=1024 cellpadding=1 cellspacing=0>'
			html += '<tr>'
			html += '<td width=1024>&#8226; PACIENTE CON ESCLEROSIS MULTIPLE </td>'
			html += '</tr>'
			html += '</table>'
			html += '</body></html>'
			dsAux.addRow([html]);
		}
		
		if(asiutitrs_hoja_rel_buscar_escaras_print.teesapat_8!=0){
			html = ''
			html += '<html><body>'
			html += '<table width=1024 cellpadding=1 cellspacing=0>'
			html += '<tr>'
			html += '<td width=1024>&#8226; PACIENTE CON FRACTURAS OSEAS </td>'
			html += '</tr>'
			html += '</table>'
			html += '</body></html>'
			dsAux.addRow([html]);
		}
		
		if(asiutitrs_hoja_rel_buscar_escaras_print.teesapat_9!=0){
			html = ''
			html += '<html><body>'
			html += '<table width=1024 cellpadding=1 cellspacing=0>'
			html += '<tr>'
			html += '<td width=1024>&#8226; PACIENTE CON FRACTURA/COMPRESION MEDULA OSEA </td>'
			html += '</tr>'
			html += '</table>'
			html += '</body></html>'
			dsAux.addRow([html]);
		}
		
		if(asiutitrs_hoja_rel_buscar_escaras_print.teesdesh!=0){
			html = ''
			html += '<html><body>'
			html += '<table width=1024 cellpadding=1 cellspacing=0>'
			html += '<tr>'
			html += '<td width=1024>&#8226; PACIENTE CON DESHIDRATACIÓN </td>'
			html += '</tr>'
			html += '</table>'
			html += '</body></html>'
			dsAux.addRow([html]);
		}
	
		if(asiutitrs_hoja_rel_buscar_escaras_print.teessens!=0){
			html = ''
			html += '<html><body>'
			html += '<table width=1024 cellpadding=1 cellspacing=0>'
			html += '<tr>'
			html += '<td width=1024>&#8226; PACIENTE CON DETERIORO DEL SENSORIO </td>'
			html += '</tr>'
			html += '</table>'
			html += '</body></html>'
			dsAux.addRow([html]);
		}
		
		
		/*if(tieneAntecedentesPatologicos==false){
			html = ''
			html += '<html><body>'
			html += '<table width=1024 cellpadding=1 cellspacing=0>'
			html += '<tr>'
			html += '<td width=1024>&#8226; NINGUNO</td>'
			html += '</tr>'
			html += '</table>'
			html += '</body></html>'
			dsAux.addRow([html]);
		}*/
		
		//CALCULO ESCORE 
		
		/*( ( TE-ES-ARNELL(1) - 1 ) * 1 ) +
		 ( ( TE-ES-ARNELL(2) - 1 ) * 2 ) +
		 ( ( TE-ES-ARNELL(3) - 1 ) * 2 ) +
		 ( ( TE-ES-ARNELL(4) - 1 ) * 2 ) +
		 ( ( TE-ES-ARNELL(5) - 1 ) * 1 ) +
		 ( ( TE-ES-ARNELL(6) - 1 ) * 1 ) +
		( ( TE-ES-ARNELL(7) - 1 ) * 1 ).
	*/
		
			
		
		html = ''
		html += '<html><body>'
		html += '<table width=1024 cellpadding=1 cellspacing=0>'
		html += '<tr>'
		html += '<td width=1024><b><u>VALORACION DEL RIESGO DE ULCERA POR DECUBITO(ESCALA DE ARNELL)</u></b></td>'
		html += '</tr>'
		html += '</table>'
		html += '</body></html>'
		dsAux.addRow([html]);
		
		
		/*html = ''
		html += '<html><body>'
		html += '<table width=1024  cellpadding=1 cellspacing=0>'
		html += '<tr>'
		html += '<td>VARIABLE:</td><td>VALOR:</td><td>PUNTUACION</td>'
		html += '</tr>'
		html += '</table>'
		html += '</body></html>'
		dsAux.addRow([html]);*/
		
		
	/*	html += '<table width=1024 cellpadding=1 cellspacing=0>'
		html += '<tr>'
		html += '<td width=50%>' + 'Observaciones: ' + '</td>'
		html += '<td width=50%>' + '                   ' + '</td>'
		html += '</tr>'
		html += '</table>'
			*/
		
		//definición de arrays puntuacion
		
		var puntunacionEstadoMental=[0,1,2,3]
		var puntunacionIncontinencia=[0,2,4,6]
		var puntunacionActividad=[0,2,4,6]
		var puntunacionMovilidad=[0,2,4,6]
		var puntunacionNutricion=[0,1,2,3]
		var puntunacionAspectoPiel=[0,1,2,3]
		var puntunacionSensibilidadCutanea=[0,1,2,3]
		
		//&nbsp;&nbsp;&nbsp;&nbsp;&nbsp
		var valorArnell='';
				valorArnell= 	application.getValueListDisplayValue('vl_estado_mental',asiutitrs_hoja_rel_buscar_escaras_print.teesarnell_1);
				
				
				html = ''
				html += '<html><body>'
				html += '<table>'
				html += '<tr>'
				html += '<td width="100px">VARIABLE: </td>'
				html += '<td width="100px">VALOR: </td>'
				html += '<td width="100px">PUNTAJE </td>'
				html += '</tr>'
				html += '</table>'
				html += '</body></html>'
				dsAux.addRow([html]);	
				
				
				html = ''
				html += '<html><body>'
				html += '<table>'
				html += '<tr>'
				html += '<td width="100px">Estado mental: </td>'
				html += '<td width="100px">'+valorArnell+'</td>'
				html += '<td width="100px">'+(puntunacionEstadoMental[asiutitrs_hoja_rel_buscar_escaras_print.teesarnell_1-1])+'</td>'
				html += '</tr>'
				html += '</table>'
				html += '</body></html>'
				dsAux.addRow([html]);	
				
				valorArnell= application.getValueListDisplayValue('vl_incontinencia',asiutitrs_hoja_rel_buscar_escaras_print.teesarnell_2);
				
				html = ''
				html += '<html><body>'
				html += '<table>'
				html += '<tr>'
				html += '<td width="100px">Incontinencia:</td>'
				html += '<td width="100px">'+valorArnell+'</td>'
				html += '<td width="100px">'+(puntunacionIncontinencia[asiutitrs_hoja_rel_buscar_escaras_print.teesarnell_2-1])+'</td>'
			
				html += '</tr>'
				html += '</table>'
				html += '</body></html>'
				dsAux.addRow([html]);	
				
				valorArnell= application.getValueListDisplayValue('vl_actividad',asiutitrs_hoja_rel_buscar_escaras_print.teesarnell_3);
				html = ''
				html += '<html><body>'
				html += '<table>'
				html += '<tr>'
				html += '<td width="100px">Actividad:</td>'
				html += '<td width="100px">'+valorArnell+'</td>'
				html += '<td width="100px">'+(puntunacionActividad[asiutitrs_hoja_rel_buscar_escaras_print.teesarnell_3-1])+'</td>'
				html += '</tr>'
				html += '</table>'
				html += '</body></html>'
				dsAux.addRow([html]);	
				
				valorArnell= application.getValueListDisplayValue('lv_movilidad',asiutitrs_hoja_rel_buscar_escaras_print.teesarnell_4);
				
				html = ''
				html += '<html><body>'
				html += '<table>'
				html += '<tr>'
				html += '<td width="100px">Movilidad:</td>'
				html += '<td width="100px">'+valorArnell+'</td>'
				html += '<td width="100px">'+(puntunacionMovilidad[asiutitrs_hoja_rel_buscar_escaras_print.teesarnell_4-1])+'</td>'
				html += '</tr>'
				html += '</table>'
				html += '</body></html>'
				dsAux.addRow([html]);	
				valorArnell= application.getValueListDisplayValue('lv_nutricion',asiutitrs_hoja_rel_buscar_escaras_print.teesarnell_5);
				
				html = ''
				html += '<html><body>'
				html += '<table>'
				html += '<tr>'
				html += '<td width="100px">Nutricion:</td>'
				html += '<td width="100px">'+valorArnell+'</td>'
				html += '<td width="100px">'+(puntunacionNutricion[asiutitrs_hoja_rel_buscar_escaras_print.teesarnell_5-1])+'</td>'
				html += '</tr>'
				html += '</table>'
				html += '</body></html>'
				dsAux.addRow([html]);
				valorArnell= application.getValueListDisplayValue('lv_aspecto_piel',asiutitrs_hoja_rel_buscar_escaras_print.teesarnell_6);
				html = ''
				html += '<html><body>'
				html += '<table>'
				html += '<tr>'
				html += '<td width="100px">Aspecto de la piel:</td>'
				html += '<td width="100px">'+valorArnell+'</td>'
				html += '<td width="100px">'+(puntunacionAspectoPiel[asiutitrs_hoja_rel_buscar_escaras_print.teesarnell_6-1])+'</td>'
				html += '</tr>'
				html += '</table>'
				html += '</body></html>'
				dsAux.addRow([html]);
				valorArnell= application.getValueListDisplayValue('lv_sensibilidad_cutanea',asiutitrs_hoja_rel_buscar_escaras_print.teesarnell_7);
				html = ''
				html += '<html><body>'
				html += '<table>'
				html += '<tr>'
				html += '<td width="100px">Sensibilidad cutanea:</td>'
				html += '<td width="100px">'+valorArnell+'</td>'
				html += '<td width="100px">'+(puntunacionSensibilidadCutanea[asiutitrs_hoja_rel_buscar_escaras_print.teesarnell_7-1])+'</td>'
				html += '</tr>'
				html += '</table>'
				html += '</body></html>'
				dsAux.addRow([html]);
		
		html = ''
		html += '<html><body>'
		html += '<table cellpadding=1 cellspacing=0>'
		html += '<tr>'
		html += '<td width="180px"></td>'
		html += '<td width="150px"><b><u>RESULTADO</u></b></td>'
	
		html += '</tr>'
		html += '</table>'
		html += '</body></html>'
		dsAux.addRow([html]);
		
		html = ''
		html += '<html><body>'
		html += '<table width=1024 cellpadding=1 cellspacing=0>'
		html += '<tr>'
		html += '<td width=1024>PUNTUACION TOTAL: '+asiutitrs_hoja_rel_buscar_escaras_print.tearnellscore+'</td>'
		html += '</tr>'
		html += '</table>'
		html += '</body></html>'
		dsAux.addRow([html]);
		
		if(asiutitrs_hoja_rel_buscar_escaras_print.tearnellscore>=12){
			html = ''
			html += '<html><body>'
			html += '<table width=1024 cellpadding=1 cellspacing=0>'
			html += '<tr>'
			html += '<td width=1024>RIESGO AUMENTADO PARA DESARROLLAR ULCERAS POR DECUBITO</td>'
			html += '</tr>'
			html += '</table>'
			html += '</body></html>'
			dsAux.addRow([html]);
		}else{
			html = ''
			html += '<html><body>'
			html += '<table width=1024 cellpadding=1 cellspacing=0>'
			html += '<tr>'
			html += '<td width=1024>RIESGO INSUFICIENTE PARA DESARROLLAR ULCERAS POR DECUBITO</td>'
			html += '</tr>'
			html += '</table>'
			html += '</body></html>'
			dsAux.addRow([html]);
				
		}
	}
	html = ''
	html += '<html><body><br><br>'
	html += '<table cellpadding=1 cellspacing=0>'
	html += '<tr>'
	html += '<td width="120px">INFORME AL FAMILIAR Y/O PACIENTE:</td>'
	html += '<td width="80px">Efectuado</td>'
	html += '</tr>'
	html += '</table>'
	html += '</body></html>'
	dsAux.addRow([html]);
	
	html = ''
	html += '<html><body>'
	html += '<table cellpadding=1 cellspacing=0>'
	html += '<tr>'
		
	html += '<td width="120px"></td>'
	html += '<td width="80px">A QUIEN: '+asiutitrs_hoja_rel_buscar_hojati_print.htiaquien+'</td>'
		
	html += '</tr>'
	html += '</table>'
	html += '<br><br></body></html>'
	dsAux.addRow([html]);
	

	
	/*var html = ''

	
	html = ''
	html += '<html><body>'
	html += '<table width=1024 cellpadding=1 cellspacing=0>'
	html += '<tr>'
	html += '<td width=40%>' + 'Ingreso a Terapia : INFORME CONFIDENCIAL, secrete Médico dentro de los alcances del árticulo 156 del Código Penal. </td>'
	html += '</tr>'
	html += '</table>'
	html += '</body></html>'
	dsAux.addRow([html]);
	

	
	// Diagnostico
	html = ''
	html += '<html><body>'
	html += '<table width=1024 cellpadding=1 cellspacing=0>'
	html += '<tr>'
	html += '<td width=40%><b>' + 'DIAGNOSTICOS :' + '</b></td>'
	html += '</tr>'
	html += '</table>'
	html += '</body></html>'
	dsAux.addRow([html]);*/
	
	
	// actualizando lista de impresion
	var $frm = solutionModel.getForm('AsiUtiTrs_Evolucion_print');
	var $tipos = [JSColumn.TEXT];
	$frm.dataSource = dsAux.createDataSource('AsiUtiTrs_Evolucion_print', $tipos);
	forms.AsiUtiTrs_Evolucion_print.controller.recreateUI();
		
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
 * @properties={typeid:24,uuid:"84E1661C-B006-4E22-90B9-EBF9B4B2A051"}
 */
function getAlertHTML (dataCol_1,dataCol_2,dataCol_3,dataCol_4,dataCol_5) {

	// alertas
	var html = "";
	html += '<html><body>'
	html += '<table width=1024 cellpadding=1 cellspacing=0>'
	html += '<tr>'
	html += '<td width="10%">&nbsp;&nbsp;' + dataCol_1 + '</td>'
	html += '<td width="10%">' + dataCol_2 + '</td>'
	html += '<td width="10%">' + dataCol_3 + '</td>'
	html += '<td width="10%">' + dataCol_4 + '</td>'
	html += '<td width=60%>' + dataCol_5 + '</td>'
	html += '</tr>'
	html += '</table>'
	html += '</body></html>';
	
	return html;
}

/**
 * TODO generated, please specify type and doc for the params
 * @param titulo
 * @param item
 *
 * @properties={typeid:24,uuid:"71265EAD-E3B1-4D5C-9B06-2D528DB35FA6"}
 */
function setTextoInforme (titulo,item){
	
	var html = ''
	html += '<html><body>'
    html += '<table width="1024" cellpadding=1 cellspacing=0>'
	html += '<tr>'
	html += '<td width=50%><b>' + titulo.toUpperCase() + ' :'  + '</b></td>'
	html += '<td width=50%>' + '' + '</td>'
	html += '</tr>'
	html += '</table>'
	html += '</body></html>'
	dsAux.addRow([html]);
	
	var sqlInfo = "select linea from asiutitrs_hojatitxt"
	+ " where histclinica = " + asiutitrs_hoja_rel_buscar_hojati_print.htihistclinica
	+ " and fecha = " + asiutitrs_hoja_rel_buscar_hojati_print.htifecha
	+ " and hora = " + asiutitrs_hoja_rel_buscar_hojati_print.htihora
	+ " and grupo = " + item;
	var ds_info = databaseManager.getDataSetByQuery('desal',sqlInfo,null,-1);
	
	// Si el informe no esta en postgres lo busca en relativity
	if(ds_info.getMaxRowIndex() > 0){
		
		var $campo2 = utils.stringTrim(ds_info.getValue(1,1));
		var lineaTexto = '';
		
		// Segundo : se quitan los 'enters' y se crea nueva linea	x c/u
		var $campo = new Array();
		$campo = $campo2.split('\n', 7800);
		var $cuantas_partes = 0
		$cuantas_partes = $campo.length 
		var ii = 0
		var lineascab = 0;
		for (var i = 1; i < $cuantas_partes + 1; i++)
		{
		var longitudTexto = 0
		var lineas = 0
		ii = i - 1
		longitudTexto = $campo[ii].length
		var posicionInicial = 0
		if (longitudTexto > 78)
		{	//lineas = Math.round(longitudTexto / 78)  //original
			lineas = Math.floor(longitudTexto / 78)
			var resto = longitudTexto % 78
			if (resto > 0)
				{++lineas}
		}
		else {lineas = 1}
		
		var $aux_tex = ''
		var $aux_texto_79 = ''
		var $aux_pos = 77
		var $txt4 = ''

		// n lineas/reg de texto
		for (var j = 1; j < lineas + 1; j++) {
			
			var aux_largo_final = posicionInicial + 78
			if (aux_largo_final < longitudTexto)
			{
				var vlarguito = $campo[ii].substr(posicionInicial, 78)
				if (vlarguito != '') 
				{
					++lineascab
					lineaTexto = $campo[ii].substr(posicionInicial, 78)
					
					$txt4  = $campo[ii].substr(posicionInicial, 78)  		
					$aux_tex = $txt4.substr (77,1) 
					if ($aux_tex != ' ')
					{
						$aux_texto_79 = $campo[ii].substr(posicionInicial + 78, 1)  // caracter 79
						$aux_tex = $txt4.substr (77,1)        // caracter 78
						if ($aux_texto_79 == ' ')  //  asi estaría ok, porque la palabra termina justo en la 78
							{posicionInicial = posicionInicial + 79}   // 78 para que no ponga un blanco al iniciar
						else  // queda cortada la palabra, va hacia atras hasta encontrar un espacio
							{$aux_pos =  posicionInicial + 77   
							for (var k = 77; k > 1; k--)
							{
								$aux_tex = $txt4.substr(k,1)
								if ($aux_tex != ' ')
									{$aux_pos = $aux_pos - 1}
								else     // rellena a derecha con espacios los caracteres de la palabra que estaba cortada hasta completar 78
								{	var $nn = $aux_pos - posicionInicial
									$aux_tex = $txt4.substr(0,$nn)
									for (var l = $nn ; l < 78 ; l++) 
									{$aux_tex = $aux_tex + ' '}
									var longitudTexto1 = longitudTexto + 78 - $nn
									if (longitudTexto1 > 78)
									{
									var lineas1 = Math.floor(longitudTexto1 / 78)
									resto = longitudTexto1 % 78
									if (resto > 0)
										{++lineas1} 
									}
									else{lineas1 = 1} 
									lineas = lineas1
									break
								}
							}
							posicionInicial = $aux_pos + 1
							lineaTexto =  $aux_tex
							}
					}
					else {
						
						posicionInicial = posicionInicial + 78
					}
				} 
			}
			else  
			{  	
				
				++lineascab
				
				if (lineas == 1)
					{if (longitudTexto == 0)
						{lineaTexto = '                                                                              '}
					else
						{lineaTexto = $campo[ii].substr(0, longitudTexto)}}
				else {
					 
					var dife = longitudTexto - posicionInicial
					lineaTexto = $campo[ii].substr(posicionInicial, dife)
				}
			}
			
			// control logintud para no tener problema al grabar en arch. cobol
			if (lineaTexto.length > 78){
				lineaTexto = lineaTexto.substr(0, 77)
			}
			
			if (lineaTexto.length < 78){
				
				$nn = lineaTexto.length
				for (var m = $nn + 1 ; m < 79 ; m++) {
					
					lineaTexto = lineaTexto + ' '
				}
			}
			
			try{
				
				html = ''
				html += '<html><body>'
				html += '<table width=1024 cellpadding=1 cellspacing=0>'
				html += '<tr>'
				html += '<td width=1024><p>&nbsp;&nbsp;' + lineaTexto + '</p></td>'
				html += '</tr>'
				html += '</table>'
				html += '</body></html>'
				dsAux.addRow([html]);
				
				
			}catch (msg){
				//	application.output(msg.rhinoException.getMessage())
			}
			
			}
		}
		
	}	else{
		
		// Obteniendo datos de observacion de relativity
		var sqlObserva = "select HetiLinea from tbc_hojatitxt"
			+ " where HetiHistClinica = " + asiutitrs_hoja_rel_buscar_hojati_print.htihistclinica
			+ " and HetiFecha= " + asiutitrs_hoja_rel_buscar_hojati_print.htifecha
			+ " and HetiHora = " + asiutitrs_hoja_rel_buscar_hojati_print.htihora
			+ " and HetiGrupo = " + item
			+ " order by HetiSecuencia";
			var ds_hciintTXT = databaseManager.getDataSetByQuery('asistencial',sqlObserva,null,-1);
		
		var indicek;
		for(indicek=1 ; indicek <= ds_hciintTXT.getMaxRowIndex() ; indicek++){
			
			html = ''
			html += '<html><body>'
			html += '<table width=1024 cellpadding=1 cellspacing=0>'
			html += '<tr>'
			html += '<td width=1024><p>&nbsp;&nbsp;' + ds_hciintTXT.getValue(indicek,1); + '</p></td>'
			html += '</tr>'
			html += '</table>'
			html += '</body></html>'
			dsAux.addRow([html]);
		}
	}

}



/**
 * @properties={typeid:24,uuid:"75DE446B-049F-4DDB-B1F4-50CB430E1BFE"}
 */
function imprimir() {
	forms.AsiUtiTrs_Evolucion_print.controller.setPageFormat(210,297,10,10,10,10,1,0);
	//forms.HciutiTrs_frm_evo_medica_utiTrs_hoja_TI.f_cerrarForm=true;
	/*var patchArchivoPrueba = 'c:/temp/evol_med_'+asiutitrs_hoja_rel_buscar_hojati_print.htihistclinica+'.pdf';
		var success = plugins.pdf_output.startMetaPrintJob(patchArchivoPrueba);
		if (success)
		{
			controller.print(false,false,plugins.pdf_output.getPDFPrinter());
			forms.AsiUtiTrs_Evolucion_print.controller.print(false,false,plugins.pdf_output.getPDFPrinter());
		}
		globals.AsiUtiTrs_Hoja_CantidadHojas =  plugins.pdf_output.getPagesPrinted()
		plugins.pdf_output.endMetaPrintJob()*/
		controller.print(false,false);
	
}

/**
 * TODO generated, please specify type and doc for the params
 * @param value
 *
 * @properties={typeid:24,uuid:"8D70047D-0051-4F18-848C-82B2C3BE799B"}
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
 * @properties={typeid:24,uuid:"8DF5C19A-4CF9-42E5-B775-BB962B7B5152"}
 */
function formatearHistclin(HistClin) {
	var histClin = '';
	if(arguments[0] != undefined)
		histClin =  HistClin.toString().substr(0,HistClin.toString().length-1)+"/"+HistClin.toString().substr(HistClin.toString().length -1,1)	

	return histClin;
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"AAF6451A-5202-4E82-97A9-1672591FB1FE"}
 */
function onShow_inicializarForm(firstShow, event) {
	
	var dsAux1 = databaseManager.createEmptyDataSet();
	dsAux1.addColumn('html_hoja');
	dsAux1.addRow(['']);
	
	// actualizando lista de impresion
	var $frm = solutionModel.getForm('AsiUtiTrs_Evolucion_print');
	var $tipos = [JSColumn.TEXT];
	$frm.dataSource = dsAux1.createDataSource('AsiUtiTrs_Evolucion_print', $tipos);
	forms.AsiUtiTrs_Evolucion_print.controller.recreateUI();
}

/**
 * @properties={typeid:24,uuid:"78B544CE-7505-4AC6-8CCC-39CE2795D61F"}
 */
function armarExamenFisico(dsRows, relacion_para_examen){
	
	
	var html = ''
	html += '<html><body>'
    html += '<table width="1024" cellpadding=1 cellspacing=0>'
	html += '<tr>'
	html += '<td width=50%><b>EXAMEN FISICO ACTUAL </b></td>'
	html += '<td width=50%>' + '' + '</td>'
	html += '</tr>'
	html += '</table>'
	html += '</body></html>'
	dsRows.addRow([html]);
	
	html = ''
	html += '<html><body>'
	html += '<table width=1024 cellpadding=1 cellspacing=0>'
	html += '<tr>'
	html += '<td width="1024">Tensión arterial :  '+relacion_para_examen.htitensionmin+' - '+ relacion_para_examen.htitensionmax+'&ensp Peso: '+relacion_para_examen.htipeso+' kgrs.</td>'
	html += '</tr>'
	html += '</table>'
	html += '</body></html>'
	dsRows.addRow([html]);
	
	
	html = ''
	html += '<html><body>'
	html += '<table width=1024 cellpadding=1 cellspacing=0>'
	html += '<tr>'
	html += '<td width="1024">Temperatura:  '+relacion_para_examen.htitemper+'&ensp Altura: '+relacion_para_examen.htialtura+' mts.</td>'
	
	html += '</tr>'
	html += '</table>'
	html += '</body></html>'
	dsRows.addRow([html]);
	
	
	html = ''
	html += '<html><body>'
	html += '<table width=1024 cellpadding=1 cellspacing=0>'
	html += '<tr>'
	html += '<td width="1024">Pulso: Frecuencia: '+relacion_para_examen.htipulsofrec+' </td>'
	
	html += '</tr>'
	html += '</table>'
	html += '</body></html>'
	dsRows.addRow([html]);
	
	
	html = ''
	html += '<html><body>'
	html += '<table width=1024 cellpadding=1 cellspacing=0>'
	html += '<tr>'
	html += '<td width="1024">Pulso: Caracteris.: '+relacion_para_examen.htipulsocarac+'&ensp IMC ='+forms.HciutiTrs_frm_evo_medica_utiTrs_hoja_TI.f_IMC+' - '+forms.HciutiTrs_frm_evo_medica_utiTrs_hoja_TI.f_IMC_resultado+'</td>'
	
	html += '</tr>'
	html += '</table>'
	html += '</body></html>'
	dsRows.addRow([html]);
	
	
	
	html = ''
	html += '<html><body>'
	html += '<table cellpadding=1 cellspacing=0>'
	
	html += '<tr>'
	html += '<td width="45px">Via End.Ctral: </td>'
	html += '<td width="10px">'+ (relacion_para_examen.htiviavl==1?'SI':'NO')+'</td>'
	html += '<td width="200px">Lugar: '+ relacion_para_examen.htiviavl+'</td>'
	html += '</tr>'
	
	html += '</table>'
	html += '</body></html>'
	dsRows.addRow([html]);
	
	
	
	html = ''
	html += '<html><body>'
	html += '<table cellpadding=1 cellspacing=0>'
	html += '<tr>'
	html += '<td width="45px">Cateter Cook: </td>'
	html += '<td width="10px">'+ (relacion_para_examen.hticatc==1?'SI':'NO')+'</td>'
	html += '<td width="200px">Lugar:  '+ relacion_para_examen.hticatcl+'</td>'
	html += '</tr>'
	html += '</table>'
	html += '</body></html>'
	dsRows.addRow([html]);
	
	
	html = ''
	html += '<html><body>'
	html += '<table cellpadding=1 cellspacing=0>'
	html += '<tr>'
	html += '<td width="45px">Sonda Vesical: </td>'
	html += '<td width="10px">'+ (relacion_para_examen.htivesical==1?'SI':'NO')+'</td>'
	html += '<td width="200px">Observaciones:  '+ relacion_para_examen.htivesicalobs+'</td>'
	html += '</tr>'
	html += '</table>'
	html += '</body></html>'
	dsRows.addRow([html]);
	
	
	
	html = ''
	html += '<html><body>'
	html += '<table cellpadding=1 cellspacing=0>'
	html += '<tr>'
	html += '<td width="45px">Sonda NG: </td>'
	html += '<td width=10>'+(relacion_para_examen.hting==1?'SI':'NO')+'</td>'
	html += '<td width="200px">Observaciones:  '+ relacion_para_examen.htingobs+'</td>'
	html += '</tr>'
	html += '</table>'
	html += '</body></html>'
	dsRows.addRow([html]);
	
	
	html = ''
	html += '<html><body>'
	html += '<table cellpadding=1 cellspacing=0>'
	html += '<tr>'
	html += '<td width="45px">Sonda SOG: </td>'
	html += '<td width=10>'+(relacion_para_examen.htisog==1?'SI':'NO')+'</td>'
	html += '<td width="200px">Observaciones:  '+ relacion_para_examen.htisogobs+'</td>'
	html += '</tr>'
	html += '</table>'
	html += '</body></html>'
	dsRows.addRow([html]);
	
	
	html = ''
	html += '<html><body>'
	html += '<table cellpadding=1 cellspacing=0>'
	html += '<tr>'
	html += '<td width="45px">Sonda Otras: </td>'
	html += '<td width=10>'+(relacion_para_examen.htiotras==1?'SI':'NO')+'</td>'
	html += '<td width="200px">Observaciones:  '+ relacion_para_examen.htiotrasobs+'</td>'
	html += '</tr>'
	html += '</table>'
	html += '</body></html>'
	dsRows.addRow([html]);
	
	
	
	html = ''
	html += '<html><body>'
	html += '<table cellpadding=1 cellspacing=0>'
	html += '<tr>'
	html += '<td width="45px">Escaras: </td>'
	html += '<td width=10>'+(relacion_para_examen.htiescara==1?'SI':'NO')+'</td>'
	html += '<td width="200px">Observaciones:  '+ relacion_para_examen.htiescaraobs+'</td>'
	html += '</tr>'
	html += '</table>'
	html += '</body></html>'
	dsRows.addRow([html]);
	
	
	html = ''
	html += '<html><body>'
	html += '<table cellpadding=1 cellspacing=0>'
	html += '<tr>'
	html += '<td width="45px">ARM: </td>'
	html += '<td width=10>'+(relacion_para_examen.htiarm==1?'SI':'NO')+'</td>'
	
	html += '</tr>'
	html += '</table>'
	html += '</body></html>'
	dsRows.addRow([html]);
	
	
}

