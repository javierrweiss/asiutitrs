/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"F042B7FD-2D1B-452F-B5B2-C2A3AC315165"}
 */
var f_medicoNombre = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"4ECC0540-D9CD-4EF8-ACE5-56EAB9DF7601"}
 */
var f_matricula = '';

/**
 * @properties={typeid:35,uuid:"645479C8-7A28-41C1-8343-D0903BC0DFB6",variableType:-4}
 */
var dsAux = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"D3CC734D-2908-4778-A5C4-F2EF1E2001C5"}
 */
var f_histClinIngreso = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"55A08F1A-FF84-44DE-890A-89DBB5D509DE"}
 */
var f_egreso = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"8C610B83-B996-439D-9ACC-C153EF7E033A"}
 */
var f_ingreso = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"8EC96D2E-F13B-4E94-92DC-A69D6D53FEB1"}
 */
var f_cobertura = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"F6801BD6-34C7-4522-B36E-1BB293E9A8B4"}
 */
var f_sexo = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"22A2DA3A-F447-42F7-9662-1B62E4580BBF"}
 */
var f_hora = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"7A2336F8-D2A1-4288-B86D-591AA0887DCB"}
 */
var f_medico = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"61617437-A9C8-4822-AE75-7B5904211137"}
 */
var f_edad = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"A35A6C81-0286-4746-B724-F62DF4E29CEB"}
 */
var f_cama = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"15522854-589D-4738-A16A-6AE1754A9006",variableType:4}
 */
var f_habitacion = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"73CFFB72-530B-42B6-B6EC-672E5A323094",variableType:93}
 */
var f_fechaImpresion = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"BF449CF4-55FF-47B9-BC52-94899BE06E6F"}
 */
var f_histclinunica = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"BC63AFCD-F1F2-48FC-A691-007C94D0CCD0"}
 */
var f_apelnom = null;

/**
 * @properties={typeid:24,uuid:"FF6BFA32-68E6-4DBB-9EB0-54F17B20F606"}
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
	
	globals.AsiUtiTrs_histClinAsist = 0;
	globals.AsiUtiTrs_histClinPrint = 0;
	globals.AsiUtiTrs_fechaPrint = 0;
	globals.AsiUtiTrs_horaPrint = 0;
	
	globals.AsiUtiTrs_obrCodigo = 0;
	globals.AsiUtiTrs_hcUnicaPrint = 0;
	globals.AsiUtiTrs_fechaIngresoPrint = 0;
	globals.AsiUtiTrs_horaIngresoPrint = 0;
	globals.AsiUtiTrs_alerHistClinPrint = 0;
	
	globals.AsiUtiTrs_perLegajoPrint = 0;
	globals.AsiUtiTrs_medCodigoPrint = 0;
	globals.AsiUtiTrs_patCodiPrint = 0;
	
	
	if(forms.AsiUtiTrs_print.foundset.getSize() > 0)
		forms.AsiUtiTrs_print.foundset.clear();
	
	controller.setPageFormat(210,297,10,10,10,10,1,0);
}

/**
 * TODO generated, please specify type and doc for the params
 * @param {Number} histClin
 * @param {Number} fecha
 * @param {Number} hora
 *
 * @properties={typeid:24,uuid:"8C26268E-21A3-426F-A4FC-8ED436201456"}
 */
function imprimirAsiUtiTrs(histClin,fecha,hora){
	
	limpiarForm();
	
	globals.AsiUtiTrs_histClinAsist = histClin;
	globals.AsiUtiTrs_histClinPrint = histClin;
	globals.AsiUtiTrs_fechaPrint = fecha;
	globals.AsiUtiTrs_horaPrint = hora;
	
	if(asiutitrs_rel_buscar_hciti_print.getSize() > 0){
		
		globals.AsiUtiTrs_obrCodigo = asiutitrs_numero_to_asistencial_admision.adm_obrsoc;
		globals.AsiUtiTrs_hcUnicaPrint = asiutitrs_numero_to_asistencial_admision.adm_histclinuni;
		globals.AsiUtiTrs_fechaIngresoPrint = asiutitrs_rel_tbc_hist_cab_new.histcabintobsamd;
		globals.AsiUtiTrs_horaIngresoPrint = asiutitrs_rel_tbc_hist_cab_new.histcabintobshor;
		globals.AsiUtiTrs_alerHistClinPrint = histClin;
		
		var medico = "Confeccionada por ";
		var matricula = "";
		
		if(asiutitrs_rel_buscar_hciti_print.hittipomed == 0){
			
			globals.AsiUtiTrs_perLegajoPrint = asiutitrs_rel_buscar_hciti_print.hitlegajomed;
			if(asiutitrs_rel_buscar_personal_print.per_sexo == 'M'){
				medico += "el Dr. ";
				f_medicoNombre = "Dr. ";
			}
			else{
				medico += "la Dra. ";
				f_medicoNombre = "Dra. ";
			}
			medico += utils.stringTrim(asiutitrs_rel_buscar_personal_print.per_apelnom);
			matricula = asiutitrs_rel_buscar_personal_print.per_codmatri;
			f_medicoNombre += utils.stringTrim(asiutitrs_rel_buscar_personal_print.per_apelnom);
		}
		
		if(asiutitrs_rel_buscar_hciti_print.hittipomed == 1){
			globals.AsiUtiTrs_medCodigoPrint = asiutitrs_rel_buscar_hciti_print.hitlegajomed;
			medico += "el Dr. " + utils.stringTrim(asiutitrs_rel_buscar_medico_print.med_apenom);
			matricula = asiutitrs_rel_buscar_medico_print.med_matricula;
			f_medicoNombre = "Dr. " + utils.stringTrim(asiutitrs_rel_buscar_medico_print.med_apenom);
		}
		
		var date = globals.IntegerToDate(fecha);
		medico += " el " + globals.getDayName(date,true) + " " + date.getDate() + " " + globals.getMonthName(date,true) + " / " + date.getFullYear() + " a las " + convertNumberToHour_HHMM(hora) + " hrs.";
		
		var sexo = "";
		if(asiutitrs_numero_to_asistencial_admision.adm_sexo == 1){
			sexo = "Femenino"; 
		}
		else{
			if(asiutitrs_numero_to_asistencial_admision.adm_sexo == 2)
				sexo = "Masculino";	
		}
		
		// cargar Header
		f_fechaImpresion = application.getServerTimeStamp();
		f_medico = medico;
		f_matricula = matricula;
		f_sexo = sexo; 
		if(asiutitrs_numero_to_asistencial_admision.getSize()>0){//no deberia venir nulo.
			f_edad = globals.CalculoEdad(asiutitrs_numero_to_asistencial_admision.adm_fecnac) + ' ' +  globals.vTipoEdad;;
			f_apelnom =  formatearHistclin(asiutitrs_numero_to_asistencial_admision.adm_histclin) + "  " + utils.stringTrim(asiutitrs_numero_to_asistencial_admision.adm_apelnom); 
			f_histclinunica = asiutitrs_numero_to_asistencial_admision.adm_histclinuni;
			f_habitacion = asiutitrs_numero_to_asistencial_admision.adm_habita;
			f_cama = asiutitrs_numero_to_asistencial_admision.adm_cama;
			f_cobertura = utils.stringTrim(asiutitrs_rel_buscar_obrasocial.obr_razonsoc) + ' (' +asiutitrs_rel_buscar_obrasocial.obr_codigo + ')'; 
			f_histClinIngreso = asiutitrs_rel_tbc_hist_cab_new.histcabnrounico;
		}
		
		if(asiutitrs_rel_buscar_guardia.getSize() > 0){
			
			var fechaIngreso = globals.IntegerToDate(asiutitrs_rel_buscar_guardia.guar_fechaingreso);
			f_ingreso = globals.getDayName(fechaIngreso,true) + " " + fechaIngreso.getDate() + " " + globals.getMonthName(fechaIngreso,true) + " / " + fechaIngreso.getFullYear() + " " + convertNumberToHour_HHMM(asiutitrs_rel_buscar_guardia.guar_horaingreso) + " hrs.";
			
			var fechaEgreso = globals.IntegerToDate(asiutitrs_rel_buscar_guardia.guar_fechaalta);
			f_egreso = globals.getDayName(fechaEgreso,true) + " " + fechaEgreso.getDate() + " " + globals.getMonthName(fechaEgreso,true) + " / " + fechaEgreso.getFullYear() + " " + convertNumberToHour_HHMM(asiutitrs_rel_buscar_guardia.guar_horaalta) + " hrs.";
			
		}
	
		cargarBody();
		imprimir();
	}
	else{
		globals.DIALOGS.showWarningDialog("Atención!","No hay datos para imprimir.","Aceptar")
	}
}

/**
 * @properties={typeid:24,uuid:"CC05C610-CFFB-42FA-BFD3-6719E0342726"}
 */
function cargarBody() {
	
	dsAux = databaseManager.createEmptyDataSet();
	dsAux.addColumn('html_hoja');
	
	var html = ''
	
	/*html = ''
	html += '<html><body>'
	html += '<table width="1024">'
	html += '<tr>'
	html += '<td width="40%"><b>' + 'SIGNOS VITALES :' + '</b></td>'
	html += '</tr>'
	html += '</table>'
	html += '</body></html>'
	dsAux.addRow([html]);
	
	// Pulso
	html = ''
	html += '<html><body>'
	html += '<table width="1024">'
	html += '<tr>'
	html += '<td width="40%">&nbsp;&nbsp;Pulso : ' + asiutitrs_rel_buscar_hciti_print.hittval_4 + ' por minuto</td>'
	html += '</tr>'
	html += '</table>'
	html += '</body></html>'
	dsAux.addRow([html]);
	
	// Tension arterial
	html = ''
	html += '<html><body>'
	html += '<table width="1024">'
	html += '<tr>'
	html += '<td width="60%">&nbsp;&nbsp;Tensión Arterial Máxima : ' + asiutitrs_rel_buscar_hciti_print.hittval_2 + ' Mínima : ' + asiutitrs_rel_buscar_hciti_print.hittval_3 + '</td>'
	html += '</tr>'
	html += '</table>'
	html += '</body></html>'
	dsAux.addRow([html]);
	
	
	// Frecuencia Respiratoria
	html = ''
	html += '<html><body>'
	html += '<table width="1024">'
	html += '<tr>'
	html += '<td width="60%">&nbsp;&nbsp;Frecuencia Respiratoria : ' + asiutitrs_rel_buscar_hciti_print.hittval_5 + ' por minuto</td>'
	html += '</tr>'
	html += '</table>'
	html += '</body></html>'
	dsAux.addRow([html]);
	
	
	
	// Temperatura
	html = ''
	html += '<html><body>'
	html += '<table width="1024">'
	html += '<tr>'
	html += '<td width="60%">&nbsp;&nbsp;Temperatura : ' + application.getValueListDisplayValue('AsiUtiTrs_vl_temperatura',asiutitrs_rel_buscar_hciti_print.hittval_6) + ' ' + asiutitrs_rel_buscar_hciti_print.hittval_6 +'º' + '</td>'
	html += '</tr>'
	html += '</table>'
	html += '</body></html>'
	dsAux.addRow([html]);
	
	// Diagnostico
	html = ''
	html += '<html><body>'
	html += '<table width="1024">'
	html += '<tr>'
	html += '<td width="40%"><b>' + 'DIAGNOSTICOS :' + '</b></td>'
	html += '</tr>'
	html += '</table>'
	html += '</body></html>'
	dsAux.addRow([html]);
	
	if(asiutitrs_rel_buscar_hciti_print.hitpat1 > 0){
		
		globals.AsiUtiTrs_patCodiPrint = asiutitrs_rel_buscar_hciti_print.hitpat1;
		// Diagnostico 1
		html = ''
		html += '<html><body>'
		html += '<table width="1024">'
		html += '<tr>'
		html += '<td width="60%">&nbsp;&nbsp;' + asiutitrs_rel_buscar_patologia_print.pat_descrip + '</td>'
		html += '</tr>'
		html += '</table>'
		html += '</body></html>'
		dsAux.addRow([html]);
	}
	
	if(asiutitrs_rel_buscar_hciti_print.hitpat2 > 0){
		
		globals.AsiUtiTrs_patCodiPrint = asiutitrs_rel_buscar_hciti_print.hitpat2;
		// Diagnostico 2
		html = ''
		html += '<html><body>'
		html += '<table width="1024">'
		html += '<tr>'
		html += '<td width="60%">&nbsp;&nbsp;' + asiutitrs_rel_buscar_patologia_print.pat_descrip + '</td>'
		html += '</tr>'
		html += '</table>'
		html += '</body></html>'
		dsAux.addRow([html]);
	}
	
	if(asiutitrs_rel_buscar_hciti_print.hitpat3 > 0){
		
		globals.AsiUtiTrs_patCodiPrint = asiutitrs_rel_buscar_hciti_print.hitpat3;
		// Diagnostico 3
		html = ''
		html += '<html><body>'
		html += '<table width="1024">'
		html += '<tr>'
		html += '<td width="60%">&nbsp;&nbsp;' + asiutitrs_rel_buscar_patologia_print.pat_descrip + '</td>'
		html += '</tr>'
		html += '</table>'
		html += '</body></html>'
		dsAux.addRow([html]);
	}*/
	
	// Ingreso a Terapia
	var fechaTerapiaAux = asiutitrs_rel_buscar_hciti_print.hitfecha;
	html = ''
	html += '<html><body>'
	html += '<table width="1024">'
	html += '<tr>'
	html += '<td width="40%"><b>' + 'Ingreso a Terapia :' + asiutitrs_rel_buscar_hciti_print.hitfechaing.toString().substring(6,8).toString()+'/'+fechaTerapiaAux.toString().substring(4,6).toString() + '/'+fechaTerapiaAux.toString().substring(0,4).toString()+ '  '+globals.asiutitrs_rel_buscar_hciti_print.hithoraing.toString().substr(0,2)+':'+globals.asiutitrs_rel_buscar_hciti_print.hithoraing.toString().substr(2,2)+ 'Hs.</b></td>'
	html += '</tr>'
	html += '</table>'
	html += '</body></html>'
	dsAux.addRow([html]);
	
	
	// Informes que hago
	if(asiutitrs_rel_buscar_hciti_print.hittval_1 == 1)
		setTextoInforme("Motivo de Ingreso",1);
	
	if(asiutitrs_rel_buscar_hciti_print.hittval_7 == 1)
		setTextoInforme("Examen Fisico",2);
	
	if(asiutitrs_rel_buscar_hciti_print.hittval_8 == 1)
		setTextoInforme("Neurologico",3);
	
	// pic, tam y ppc
/*	html = ''
	html += '<html><body>'
	html += '<table width="1024">'
	html += '<tr>'
	html += '<td width="20%"><b>Escala Glassgow: '+ forms.AsiUtiTrs_txt_neurológico.f_glassgow +'</b></td><br>'
	html += '<td width="20%"><b>PIC: ' + asiutitrs_rel_tbc_hciti_to_tbc_hciti.hittval_10 + '</b></td><br>'
	html += '<td width="20%"><b>TAM: '+ asiutitrs_rel_tbc_hciti_to_tbc_hciti.hittval_11 +'</b></td><br>'
	html += '<td width="20%"><b>PPC: '+ forms.AsiUtiTrs_txt_neurológico.f_ppc + '</b></td><br>'
	html += '</tr>'
	html += '</table>'
	html += '</body></html>'
	dsAux.addRow([html]);*/
	
	
	html = ''
	html += '<html><body>'
	html += '<table width="1024">'
	html += '<tr>'
	html += '<td width="40%"><b>Escala Glassgow: '+ forms.AsiUtiTrs_txt_neurológico.f_glassgow +'</b></td>'
	html += '</tr>'
	html += '</table>'
	html += '</body></html>'
	dsAux.addRow([html]);
	
	
	html = ''
	html += '<html><body>'
	html += '<table width="1024">'
	html += '<tr>'
	html += '<td width="40%"><b>PIC: ' + asiutitrs_rel_tbc_hciti_to_tbc_hciti.hittval_10 + '</b></td>'
	html += '</tr>'
	html += '</table>'
	html += '</body></html>'
	dsAux.addRow([html]);
	
	
	html = ''
	html += '<html><body>'
	html += '<table width="1024">'
	html += '<tr>'
	html += '<td width="40%"><b>TAM: '+ asiutitrs_rel_tbc_hciti_to_tbc_hciti.hittval_11 +'</b></td>'
	html += '</tr>'
	html += '</table>'
	html += '</body></html>'
	dsAux.addRow([html]);
	
	
	html = ''
	html += '<html><body>'
	html += '<table width="1024">'
	html += '<tr>'
	html += '<td width="40%"><b>PPC: '+ forms.AsiUtiTrs_txt_neurológico.f_ppc + '</b></td>'
	html += '</tr>'
	html += '</table>'
	html += '</body></html>'
	dsAux.addRow([html]);
	
	
	
	if(asiutitrs_rel_buscar_hciti_print.hittval_12 == 1)
		setTextoInforme("Cardiovascular",4);
	
	
	if(asiutitrs_rel_buscar_hciti_print.hittval_13 == 1)
		setTextoInforme("Respiratorio",5);
	
	if(asiutitrs_rel_buscar_hciti_print.hittval_15 == 1)
		setTextoInforme("Abdominal",6);
	
	if(asiutitrs_rel_buscar_hciti_print.hittval_16 == 1)
		setTextoInforme("Osteo Articular Muscular",7);
	
	if(asiutitrs_rel_buscar_hciti_print.hittval_17 == 1)
		setTextoInforme("Urogenital",8);
	

	// Diagnostico
	html = ''
	html += '<html><body>'
	html += '<table width="1024">'
	html += '<tr>'
	html += '<td width="40%"><b>' + 'DIAGNOSTICOS :' + '</b></td>'
	html += '</tr>'
	html += '</table>'
	html += '</body></html>'
	dsAux.addRow([html]);
	
	if(asiutitrs_rel_buscar_hciti_print.hitpat1 > 0){
		
		globals.AsiUtiTrs_patCodiPrint = asiutitrs_rel_buscar_hciti_print.hitpat1;
		// Diagnostico 1
		html = ''
		html += '<html><body>'
		html += '<table width="1024">'
		html += '<tr>'
		html += '<td width="60%">&nbsp;&nbsp;' + asiutitrs_rel_buscar_patologia_print.pat_descrip + '</td>'
		html += '</tr>'
		html += '</table>'
		html += '</body></html>'
		dsAux.addRow([html]);
	}
	
	if(asiutitrs_rel_buscar_hciti_print.hitpat2 > 0){
		
		globals.AsiUtiTrs_patCodiPrint = asiutitrs_rel_buscar_hciti_print.hitpat2;
		// Diagnostico 2
		html = ''
		html += '<html><body>'
		html += '<table width="1024">'
		html += '<tr>'
		html += '<td width="60%">&nbsp;&nbsp;' + asiutitrs_rel_buscar_patologia_print.pat_descrip + '</td>'
		html += '</tr>'
		html += '</table>'
		html += '</body></html>'
		dsAux.addRow([html]);
	}
	
	if(asiutitrs_rel_buscar_hciti_print.hitpat3 > 0){
		
		globals.AsiUtiTrs_patCodiPrint = asiutitrs_rel_buscar_hciti_print.hitpat3;
		// Diagnostico 3
		html = ''
		html += '<html><body>'
		html += '<table width="1024">'
		html += '<tr>'
		html += '<td width="60%">&nbsp;&nbsp;' + asiutitrs_rel_buscar_patologia_print.pat_descrip + '</td>'
		html += '</tr>'
		html += '</table>'
		html += '</body></html>'
		dsAux.addRow([html]);
	}
	
	if(asiutitrs_rel_buscar_hciti_print.hittval_20 == 1)
		setTextoInforme("Tratamiento de Ingreso",9);
	
	if(asiutitrs_rel_buscar_hciti_print.hittval_19 == 1)
		setTextoInforme("Estudios Solicitados",10);
	
	if(asiutitrs_rel_buscar_hciti_print.hittval_21 == 1)
		setTextoInforme("Interconsultas",11);
	
	
	if(asiutitrs_rel_buscar_hciti_print.hittval_22 == 1)
		setTextoInforme("Otros",12);
	
	
	// actualizando lista de impresion
	var $frm = solutionModel.getForm('AsiUtiTrs_print');
	var $tipos = [JSColumn.TEXT];
	$frm.dataSource = dsAux.createDataSource('AsiUtiTrs_print', $tipos);
	forms.AsiUtiTrs_print.controller.recreateUI();
		
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
 * @properties={typeid:24,uuid:"0806F8C4-9F5C-4A9F-BB83-838027B6084A"}
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
 * TODO generated, please specify type and doc for the params
 * @param {String} titulo
 * @param {Number} item
 *
 * @properties={typeid:24,uuid:"66F02A1A-F3C2-4CB3-96D0-A08F6ADBFE9B"}
 */
function setTextoInforme (titulo,item){
	
	var html = ''
	html += '<html><body>'
    html += '<table width="1024">'
	html += '<tr>'
	html += '<td width="50%"><b>' + titulo.toUpperCase() + ' :'  + '</b></td>'
	html += '<td width="50%">' + '' + '</td>'
	html += '</tr>'
	html += '</table>'
	html += '</body></html>'
	dsAux.addRow([html]);
	
	if(item == 2){ //examen fisico
		cargarSignosVitales();
	}
	
	var sqlInfo = "select linea from asiutitrs_hcititxt"
	+ " where histclinica = " + asiutitrs_rel_buscar_hciti_print.hithiscli
	+ " and fecha = " + asiutitrs_rel_buscar_hciti_print.hitfecha
	+ " and hora = " + asiutitrs_rel_buscar_hciti_print.hithora
	+ " and grupo = " + 1
	+ " and item = " + item;
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
				html += '<table width="1024">'
				html += '<tr>'
				html += '<td width="100%"><p>&nbsp;&nbsp;' + lineaTexto + '</p></td>'
				html += '</tr>'
				html += '</table>'
				html += '</body></html>'
				dsAux.addRow([html]);
				
				
			}catch (msg){
				//	application.output(msg.rhinoException.getMessage())
			}
			
			}
		}
		
	}else{
		
		// Obteniendo datos de observacion de relativity
		var sqlObserva = "select HtixLinea from tbc_hcititxt"
			+ " where HtixHiscli= " + asiutitrs_rel_buscar_hciti_print.hithiscli
			+ " and HtixFecha= " + asiutitrs_rel_buscar_hciti_print.hitfecha
			+ " and HtixHora = " + asiutitrs_rel_buscar_hciti_print.hithora
			+ " and HtixGrupo = " + 1
			+ " and HtixItem = " + item
			+ " order by HtixSec";
			var ds_hciintTXT = databaseManager.getDataSetByQuery('asistencial',sqlObserva,null,-1);
		
		var k;
		for(k=1 ; k <= ds_hciintTXT.getMaxRowIndex() ; k++){
			
			html = ''
			html += '<html><body>'
			html += '<table width="1024">'
			html += '<tr>'
			html += '<td width="100%"><p>&nbsp;&nbsp;' + ds_hciintTXT.getValue(k,1); + '</p></td>'
			html += '</tr>'
			html += '</table>'
			html += '</body></html>'
			dsAux.addRow([html]);
		}
	}
	

}

/**
 * @properties={typeid:24,uuid:"9DE0A73F-4F28-4076-A4DC-D253CAE8C555"}
 */
function imprimir() {
	//forms.AsiUtiTrs_print.controller.setPageFormat(210,297,10,10,10,10,1,0);
	// controller.showPrintPreview(true)
	
	//amb desa
	/*var patchArchivoPrueba = 'c:/temp/algo.pdf';
	var success = plugins.pdf_output.startMetaPrintJob(patchArchivoPrueba);
	if (success)
	{
		controller.print(false,false,plugins.pdf_output.getPDFPrinter(patchArchivoPrueba));
		forms.AsiUtiTrs_print.controller.print(false,false,plugins.pdf_output.getPDFPrinter());
	}
	plugins.pdf_output.endMetaPrintJob()*/
	
	// amb Produccion
	 controller.print(false,false);

}

/**
 * TODO generated, please specify type and doc for the params
 * @param value
 *
 * @properties={typeid:24,uuid:"875C77C8-EE4A-480A-9A54-440A2FD49B92"}
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
 * @properties={typeid:24,uuid:"E4F5421D-5E70-4A23-A62E-CB29C54D31EC"}
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
 * @properties={typeid:24,uuid:"7D23D666-DA76-4A7C-84F5-EE6F2B6F43EF"}
 */
function onShow_inicializarForm(firstShow, event) {
	
	var dsAux1 = databaseManager.createEmptyDataSet();
	dsAux1.addColumn('html_hoja');
	dsAux1.addRow(['']);
	
	// actualizando lista de impresion
	var $frm = solutionModel.getForm('AsiUtiTrs_print');
	var $tipos = [JSColumn.TEXT];
	$frm.dataSource = dsAux1.createDataSource('AsiUtiTrs_print', $tipos);
	forms.AsiUtiTrs_print.controller.recreateUI();
}

/**
 * @properties={typeid:24,uuid:"C2E43F45-F1A2-43DC-A33C-2758F09B562C"}
 */
function cargarSignosVitales(){

	// Pulso
	html = ''
	html += '<html><body>'
	html += '<table width="1024">'
	html += '<tr>'
	html += '<td width="40%">&nbsp;&nbsp;Pulso : ' + asiutitrs_rel_buscar_hciti_print.hittval_4 + ' por minuto</td>'
	html += '</tr>'
	html += '</table>'
	html += '</body></html>'
	dsAux.addRow([html]);
	
	// Tension arterial
	html = ''
	html += '<html><body>'
	html += '<table width="1024">'
	html += '<tr>'
	html += '<td width="60%">&nbsp;&nbsp;Tensión Arterial Máxima : ' + asiutitrs_rel_buscar_hciti_print.hittval_2 + ' Mínima : ' + asiutitrs_rel_buscar_hciti_print.hittval_3 + '</td>'
	html += '</tr>'
	html += '</table>'
	html += '</body></html>'
	dsAux.addRow([html]);
	
	
	// Frecuencia Respiratoria
	html = ''
	html += '<html><body>'
	html += '<table width="1024">'
	html += '<tr>'
	html += '<td width="60%">&nbsp;&nbsp;Frecuencia Respiratoria : ' + asiutitrs_rel_buscar_hciti_print.hittval_5 + ' por minuto</td>'
	html += '</tr>'
	html += '</table>'
	html += '</body></html>'
	dsAux.addRow([html]);
	
	
	
	// Temperatura
	html = ''
	html += '<html><body>'
	html += '<table width="1024">'
	html += '<tr>'
	html += '<td width="60%">&nbsp;&nbsp;Temperatura : ' + application.getValueListDisplayValue('AsiUtiTrs_vl_temperatura',asiutitrs_rel_buscar_hciti_print.hittval_6) + ' ' + asiutitrs_rel_buscar_hciti_print.hittval_6 +'º' + '</td>'
	html += '</tr>'
	html += '</table>'
	html += '</body></html>'
	dsAux.addRow([html]);
	
	if(forms.AsiUtiTrs_txt_examen_fisico.tieneUPP=='1' || forms.AsiUtiTrs_txt_examen_fisico.tieneUPP=='0'){
		var ubicacion= ''

		if(utils.stringTrim(asiutitrs_rel_buscar_hciti_print.hitlocalupp)=='4'){
			ubicacion = asiutitrs_rel_buscar_hciti_print.hitlocalotupp
		}else{
			
			ubicacion = application.getValueListDisplayValue('AsiUtiTrs_vl_localizacion_upp',asiutitrs_rel_buscar_hciti_print.hitlocalupp)
		}
		// Ulcera por presion
		html = ''
		html += '<html><body>'
		html += '<table width="1024">'
		html += '<tr>'
		html += '<td width="60%">&nbsp;&nbsp;Ulcera por presión.' + (forms.AsiUtiTrs_txt_examen_fisico.tieneUPP=='0'?' Dato no Cargado' : ('Ubicación: ' + ubicacion + ' Grado: ' + asiutitrs_rel_buscar_hciti_print.hitgradoupp +'º')) + '</td>'
		html += '</tr>'
		html += '</table>'
		html += '</body></html>'
		dsAux.addRow([html]);
	}

	

}
