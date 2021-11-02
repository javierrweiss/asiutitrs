/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"F0568F5C-3A33-4FD3-B106-465F95ED718B"}
 */
var f_medicoNombre = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"8DB23876-352A-4296-97D4-67B1B8797056"}
 */
var f_matricula = '';

/**
 * @properties={typeid:35,uuid:"EEF541CB-67EF-4190-88BA-7941760BA7F6",variableType:-4}
 */
var dsAux = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"9CB5386E-1C84-4E7F-8ADB-2AEF27993663"}
 */
var f_histClinIngreso = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"F2EBFCF7-40DB-4E76-8F95-5183035568F3"}
 */
var f_egreso = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"5E444D7A-C2CA-4B13-8E52-13C58C2636A9"}
 */
var f_ingreso = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"99A98396-50FD-4385-9D9F-A599CA57AE94"}
 */
var f_cobertura = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"81FC95D1-C65E-4E9A-995B-A883D572F7E9"}
 */
var f_sexo = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"B423137F-B386-497C-873A-D72B8E4E0541"}
 */
var f_hora = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"299AE378-4E50-4CA7-BEDB-CF39653CDF2A"}
 */
var f_medico = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"035B876B-8F2C-4573-ABB1-48250E5531F5"}
 */
var f_edad = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"D0751946-5AF1-44A7-81D8-91E432388D82"}
 */
var f_cama = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"4217666D-1BEA-4DE8-A70B-75BBEF8DF7A0",variableType:4}
 */
var f_habitacion = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"E5B0F28D-205E-4575-B71D-E46AA29DCDE0",variableType:93}
 */
var f_fechaImpresion = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"6AA3DABC-BED6-4ECB-9546-19B4A9EE094D"}
 */
var f_histclinunica = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"D0AFD2EA-4971-4F2F-B9C5-982DF8612E78"}
 */
var f_apelnom = null;

/**
 * @properties={typeid:24,uuid:"AE79BCE8-9559-4350-B7D8-BFB6FB0772B0"}
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
	
	globals.Hcipiso_histClinAsist = 0;
	globals.Hcipiso_histClinPrint = 0;
	globals.Hcipiso_fechaPrint = 0;
	globals.Hcipiso_horaPrint = 0;
	
	globals.Hcipiso_obrCodigo = 0;
	globals.Hcipiso_hcUnicaPrint = 0;
	globals.Hcipiso_fechaIngresoPrint = 0;
	globals.Hcipiso_horaIngresoPrint = 0;
	globals.Hcipiso_alerHistClinPrint = 0;
	
	globals.Hcipiso_perLegajoPrint = 0;
	globals.hcipiso_medCodigoPrint = 0;
	globals.Hcipiso_patCodiPrint = 0;
	
	
	if(forms.Hcipiso_print.foundset.getSize() > 0)
		forms.Hcipiso_print.foundset.clear();
	
	controller.setPageFormat(210,297,10,10,10,10,1,0);
}

/**
 * TODO generated, please specify type and doc for the params
 * @param {Number} histClin
 * @param {Number} fecha
 * @param {Number} hora
 *
 * @properties={typeid:24,uuid:"1553EC85-CB27-47D4-8DEA-D5F628FF298C"}
 */
function imprimirHcipiso(histClin,fecha,hora){
	
	limpiarForm();
	
	globals.Hcipiso_histClinAsist = histClin;
	globals.Hcipiso_histClinPrint = histClin;
	globals.Hcipiso_fechaPrint = fecha;
	globals.Hcipiso_horaPrint = hora;
	
	if(hcipiso_rel_buscar_hciint_print.getSize() > 0){
		
		globals.Hcipiso_obrCodigo = hcipiso_numero_to_asistencial_admision.adm_obrsoc;
		globals.Hcipiso_hcUnicaPrint = hcipiso_numero_to_asistencial_admision.adm_histclinuni;
		globals.Hcipiso_fechaIngresoPrint = hcipiso_rel_tbc_hist_cab_new.histcabintobsamd;
		globals.Hcipiso_horaIngresoPrint = hcipiso_rel_tbc_hist_cab_new.histcabintobshor;
		globals.Hcipiso_alerHistClinPrint = histClin;
		
		var medico = "Confeccionada por ";
		var matricula = "";
		
		if(hcipiso_rel_buscar_hciint_print.hiitipomed == 0){
			
			globals.Hcipiso_perLegajoPrint = hcipiso_rel_buscar_hciint_print.hiilegajomed;
			if(hcipiso_rel_buscar_personal_print.per_sexo == 'M'){
				medico += "el Dr. ";
				f_medicoNombre = "Dr. ";
			}
			else{
				medico += "la Dra. ";
				f_medicoNombre = "Dra. ";
			}
			medico += utils.stringTrim(hcipiso_rel_buscar_personal_print.per_apelnom);
			matricula = hcipiso_rel_buscar_personal_print.per_codmatri;
			f_medicoNombre += utils.stringTrim(hcipiso_rel_buscar_personal_print.per_apelnom);
		}
		
		if(hcipiso_rel_buscar_hciint_print.hiitipomed == 1){
			globals.hcipiso_medCodigoPrint = hcipiso_rel_buscar_hciint_print.hiilegajomed;
			medico += "el Dr. " + utils.stringTrim(hcipiso_rel_buscar_medico_print.med_apenom);
			matricula = hcipiso_rel_buscar_medico_print.med_matricula;
			f_medicoNombre = "Dr. " + utils.stringTrim(hcipiso_rel_buscar_medico_print.med_apenom);
		}
		
		var date = globals.IntegerToDate(fecha);
		medico += " el " + globals.getDayName(date,true) + " " + date.getDate() + " " + globals.getMonthName(date,true) + " / " + date.getFullYear() + " a las " + convertNumberToHour_HHMM(hora) + " hrs.";
		
		var sexo = "";
		if(hcipiso_numero_to_asistencial_admision.adm_sexo == 1){
			sexo = "Femenino"; 
		}
		else{
			if(hcipiso_numero_to_asistencial_admision.adm_sexo == 2)
				sexo = "Masculino";	
		}
		
		// cargar Header
		f_fechaImpresion = application.getServerTimeStamp();
		f_medico = medico;
		f_matricula = matricula;
		f_sexo = sexo; 
		f_edad = globals.CalculoEdad(hcipiso_numero_to_asistencial_admision.adm_fecnac) + ' ' +  globals.vTipoEdad;;
		f_apelnom =  formatearHistclin(hcipiso_numero_to_asistencial_admision.adm_histclin) + "  " + utils.stringTrim(hcipiso_numero_to_asistencial_admision.adm_apelnom); 
		f_histclinunica = hcipiso_numero_to_asistencial_admision.adm_histclinuni;
		f_habitacion = hcipiso_numero_to_asistencial_admision.adm_habita;
		f_cama = hcipiso_numero_to_asistencial_admision.adm_cama;
		f_cobertura = utils.stringTrim(hcipiso_rel_buscar_obrasocial.obr_razonsoc) + ' (' +hcipiso_rel_buscar_obrasocial.obr_codigo + ')'; 
		f_histClinIngreso = hcipiso_rel_tbc_hist_cab_new.histcabnrounico;
		
		if(hcipiso_rel_buscar_guardia.getSize() > 0){
			
			var fechaIngreso = globals.IntegerToDate(hcipiso_rel_buscar_guardia.guar_fechaingreso);
			f_ingreso = globals.getDayName(fechaIngreso,true) + " " + fechaIngreso.getDate() + " " + globals.getMonthName(fechaIngreso,true) + " / " + fechaIngreso.getFullYear() + " " + convertNumberToHour_HHMM(hcipiso_rel_buscar_guardia.guar_horaingreso) + " hrs.";
			
			var fechaEgreso = globals.IntegerToDate(hcipiso_rel_buscar_guardia.guar_fechaalta);
			f_egreso = globals.getDayName(fechaEgreso,true) + " " + fechaEgreso.getDate() + " " + globals.getMonthName(fechaEgreso,true) + " / " + fechaEgreso.getFullYear() + " " + convertNumberToHour_HHMM(hcipiso_rel_buscar_guardia.guar_horaalta) + " hrs.";
			
		}
	
		// Cargar body
		cargarBody();
		imprimir();
	}
	else{
		globals.DIALOGS.showWarningDialog("Atención!","No hay datos para imprimir.","Aceptar")
	}
}

/**
 * @properties={typeid:24,uuid:"B44362EC-2FAA-4F5D-9269-939AB493B119"}
 */
function cargarBody() {
	
	dsAux = databaseManager.createEmptyDataSet();
	dsAux.addColumn('html_hoja');
	
	// Signos vitales
	var html = ''
	
	html = ''
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
	html += '<td width="40%">&nbsp;&nbsp;Pulso : ' + hcipiso_rel_buscar_hciint_print.hiipulsocardiaco + ' por minuto</td>'
	html += '</tr>'
	html += '</table>'
	html += '</body></html>'
	dsAux.addRow([html]);
	
	// Tension arterial
	html = ''
	html += '<html><body>'
	html += '<table width="1024">'
	html += '<tr>'
	html += '<td width="60%">&nbsp;&nbsp;Tensión Arterial Máxima : ' + hcipiso_rel_buscar_hciint_print.hiitensionmax + ' Mínima : ' + hcipiso_rel_buscar_hciint_print.hiitensionmin + '</td>'
	html += '</tr>'
	html += '</table>'
	html += '</body></html>'
	dsAux.addRow([html]);
	
	// Temperatura
	html = ''
	html += '<html><body>'
	html += '<table width="1024">'
	html += '<tr>'
	html += '<td width="60%">&nbsp;&nbsp;Temperatura : ' + application.getValueListDisplayValue('Hcipiso_vl_temperatura',hcipiso_rel_buscar_hciint_print.hiitipotemperatura) + ' ' + hcipiso_rel_buscar_hciint_print.hiitemperatura +'º' + '</td>'
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
	
	if(hcipiso_rel_buscar_hciint_print.hiidiag1 > 0){
		
		globals.Hcipiso_patCodiPrint = hcipiso_rel_buscar_hciint_print.hiidiag1;
		// Diagnostico 1
		html = ''
		html += '<html><body>'
		html += '<table width="1024">'
		html += '<tr>'
		html += '<td width="60%">&nbsp;&nbsp;' + hcipiso_rel_buscar_patologia_print.pat_descrip + '</td>'
		html += '</tr>'
		html += '</table>'
		html += '</body></html>'
		dsAux.addRow([html]);
	}
	
	if(hcipiso_rel_buscar_hciint_print.hiidiag2 > 0){
		
		globals.Hcipiso_patCodiPrint = hcipiso_rel_buscar_hciint_print.hiidiag2;
		// Diagnostico 2
		html = ''
		html += '<html><body>'
		html += '<table width="1024">'
		html += '<tr>'
		html += '<td width="60%">&nbsp;&nbsp;' + hcipiso_rel_buscar_patologia_print.pat_descrip + '</td>'
		html += '</tr>'
		html += '</table>'
		html += '</body></html>'
		dsAux.addRow([html]);
	}
	
	if(hcipiso_rel_buscar_hciint_print.hiidiag3 > 0){
		
		globals.Hcipiso_patCodiPrint = hcipiso_rel_buscar_hciint_print.hiidiag3;
		// Diagnostico 3
		html = ''
		html += '<html><body>'
		html += '<table width="1024">'
		html += '<tr>'
		html += '<td width="60%">&nbsp;&nbsp;' + hcipiso_rel_buscar_patologia_print.pat_descrip + '</td>'
		html += '</tr>'
		html += '</table>'
		html += '</body></html>'
		dsAux.addRow([html]);
	}
	
	// Alertas
	html = ''
	html += '<html><body>'
	html += '<table width="1024">'
	html += '<tr>'
	html += '<td width="40%"><b>' + 'ALERTAS :' + '</b></td>'
	html += '</tr>'
	html += '</table>'
	html += '</body></html>'
	dsAux.addRow([html]);
	
	if(hcipiso_rel_buscar_alerta_print.getSize() > 0){
		
		var dataAlert = new Array();
		
		if(hcipiso_rel_buscar_alerta_print.aler_tipaler_1 == 1)
			dataAlert.push('Alergico a');	
		
		if(hcipiso_rel_buscar_alerta_print.aler_tipaler_2 == 1)
			dataAlert.push('Hipertenso');
			
		if(hcipiso_rel_buscar_alerta_print.aler_tipaler_3 == 1)
			dataAlert.push('Farmacodependiente');
		
		if(hcipiso_rel_buscar_alerta_print.aler_tipaler_4 == 1)
			dataAlert.push('Diabetico');
		
		if(hcipiso_rel_buscar_alerta_print.aler_tipaler_5 == 1)
			dataAlert.push('Epileptico');
		
		if(hcipiso_rel_buscar_alerta_print.aler_tipaler_6 == 1)
			dataAlert.push('Con Glaucoma');
		
		if(hcipiso_rel_buscar_alerta_print.aler_tipaler_7 == 1)
			dataAlert.push('Inmunodeprimido');
		
		if(hcipiso_rel_buscar_alerta_print.aler_tipaler_8 == 1)
			dataAlert.push('Anticoagulado');
		
		if(hcipiso_rel_buscar_alerta_print.aler_tipaler_9 == 1)
			dataAlert.push('Coronario');
		
		if(hcipiso_rel_buscar_alerta_print.aler_tipaler_10 == 1)
			dataAlert.push('Asmatico');
		
		if(hcipiso_rel_buscar_alerta_print.aler_tipaler_11 == 1)
			dataAlert.push('Testigo de Jehova');
		
		if(hcipiso_rel_buscar_alerta_print.aler_tipaler_12 == 1)
			dataAlert.push('Con Marcapasos');
		
		if(hcipiso_rel_buscar_alerta_print.aler_tipaler_13 == 1)
			dataAlert.push('Con Protesis metal.');
		
		if(hcipiso_rel_buscar_alerta_print.aler_tipaler_14 == 1)
			dataAlert.push('Obesidad clase II');
		
		if(hcipiso_rel_buscar_alerta_print.aler_tipaler_15 == 1)
			dataAlert.push('Obesidad clase III');
		
		if(hcipiso_rel_buscar_alerta_print.aler_tipaler_16 == 1)
			dataAlert.push('Insuficiencia renal');
		
		if(hcipiso_rel_buscar_alerta_print.aler_tipaler_17 == 1)
			dataAlert.push('Escaras');
		
		if(hcipiso_rel_buscar_alerta_print.aler_tipaler_18 == 1)
			dataAlert.push('Trombosis Venosa');
		
		if(hcipiso_rel_buscar_alerta_print.aler_tipaler_19 == 1)
			dataAlert.push('Alerta Epidemiolog.');
		
		if(hcipiso_rel_buscar_alerta_print.aler_tipaler_20 == 1)
			dataAlert.push('Rechazo Terapeutico');
		
		if(hcipiso_rel_buscar_alerta_print.aler_tipaler_21 == 1)
			dataAlert.push('Alerta Social');
		
		var data = new Array();
		var i;
		for(i=0 ; i<dataAlert.length; i++){
			
			data.push(dataAlert[i]);
			
			if(data.length == 5){
				
				dsAux.addRow([getAlertHTML(data[0],data[1],data[2],data[3],data[4])]);
				data = new Array();
			}
			
		}
		
		if(data.length > 0){
			if(data.length == 1){
				dsAux.addRow([getAlertHTML(data[0],"","","","")]);
			}
			
			if(data.length == 2){
				dsAux.addRow([getAlertHTML(data[0],data[1],"","","")]);
			}
			
			if(data.length == 3){
				dsAux.addRow([getAlertHTML(data[0],data[1],data[2],"","")]);
			}
			
			if(data.length == 4){
				dsAux.addRow([getAlertHTML(data[0],data[1],data[2],data[3],"")]);
			}
			
			if(data.length == 5){
				dsAux.addRow([getAlertHTML(data[0],data[1],data[2],data[3],data[4])]);
			}
		}
	}
	
	// Informes
	if(hcipiso_rel_buscar_hciint_print.hiimotivo == 1)
		setTextoInforme("Motivo de Ingreso",1);
	
	if(hcipiso_rel_buscar_hciint_print.hiiantecedentesgrales == 1)
		setTextoInforme("Antec.Fam.y Pers.Grales.",2);
	
	if(hcipiso_rel_buscar_hciint_print.hiiantecedentesactual == 1)
		setTextoInforme("Antec.de Enfermedad Actual",4);
	
	if(hcipiso_rel_buscar_hciint_print.hiimedicacionactual == 1)
		setTextoInforme("Medicacion que toma actualm.",5);
	
	if(hcipiso_rel_buscar_hciint_print.hiiexamenfisico == 1)
		setTextoInforme("Examen Fisico",6);
	
	if(hcipiso_rel_buscar_hciint_print.hiicabezaycuello == 1)
		setTextoInforme("Cabeza y Cuello",7);
	
	if(hcipiso_rel_buscar_hciint_print.hiirespiratorio == 1)
		setTextoInforme("Respiratorio",8);
	
	if(hcipiso_rel_buscar_hciint_print.hiicardiovascular == 1)
		setTextoInforme("Cardiovascular",9);
	
	if(hcipiso_rel_buscar_hciint_print.hiiabdominal == 1)
		setTextoInforme("Abdominal",10);
	
	if(hcipiso_rel_buscar_hciint_print.hiineurologico == 1)
		setTextoInforme("Neurologico",11);
	
	if(hcipiso_rel_buscar_hciint_print.hiiurogenital == 1)
		setTextoInforme("Urogenital",12);
	
	if(hcipiso_rel_buscar_hciint_print.hiiosteoarticular == 1)
		setTextoInforme("Osteo Articular",13);
	
	if(hcipiso_rel_buscar_hciint_print.hiilaboratorio == 1)
		setTextoInforme("Laboratoio",14);
	
	if(hcipiso_rel_buscar_hciint_print.hiiimagenes == 1)
		setTextoInforme("Imagenes",15);
	
	if(hcipiso_rel_buscar_hciint_print.hiitratamiento == 1)
		setTextoInforme("Tratamiento de Ingreso",16);
	
	if(hcipiso_rel_buscar_hciint_print.hiiinterconsultas == 1)
		setTextoInforme("Interconsultas",17);
	
	if(hcipiso_rel_buscar_hciint_print.hiiobservaciones == 1)
		setTextoInforme("Observaciones",18);
	
	// actualizando lista de impresion
	var $frm = solutionModel.getForm('Hcipiso_print');
	var $tipos = [JSColumn.TEXT];
	$frm.dataSource = dsAux.createDataSource('Hcipiso_print', $tipos);
	forms.Hcipiso_print.controller.recreateUI();
		
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
 * @properties={typeid:24,uuid:"FC190556-C207-40C5-9752-78D302307199"}
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
 * @properties={typeid:24,uuid:"E05360E2-D330-4D51-B570-E514D65773B7"}
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
	
	var sqlInfo = "select linea from hcipiso_hciinttxt"
	+ " where histclinica = " + hcipiso_rel_buscar_hciint_print.hiihiscli
	+ " and fecha = " + hcipiso_rel_buscar_hciint_print.hiifecha
	+ " and hora = " + hcipiso_rel_buscar_hciint_print.hiihora
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
		
	}
	else{
		
		// Obteniendo datos de observacion de relativity
		var sqlObserva = "select HiinxLinea from tbc_hciinttxt"
			+ " where HiinxHiscli = " + hcipiso_rel_buscar_hciint_print.hiihiscli
			+ " and HiinxFecha = " + hcipiso_rel_buscar_hciint_print.hiifecha
			+ " and HiinxHora = " + hcipiso_rel_buscar_hciint_print.hiihora
			+ " and HiinxGrupo = " + 1
			+ " and HiinxItem = " + item
			+ " order by HiinxSec";
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
 * @properties={typeid:24,uuid:"D8CF35D0-638D-4BD5-8DA8-8DF215531338"}
 */
function imprimir() {
	
	controller.print(false,false);
	//controller.print(false,false,plugins.pdf_output.getPDFPrinter('c:/desarrollo/out.pdf'));
}

/**
 * TODO generated, please specify type and doc for the params
 * @param value
 *
 * @properties={typeid:24,uuid:"D4462F36-24C7-4483-A472-D3AFD239B50E"}
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
 * @properties={typeid:24,uuid:"133712F4-28CC-4FB8-A88A-B53501DB12E1"}
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
 * @properties={typeid:24,uuid:"2C863839-F3A5-4211-80A1-B6B724AAE21F"}
 */
function onShow_inicializarForm(firstShow, event) {
	
	var dsAux1 = databaseManager.createEmptyDataSet();
	dsAux1.addColumn('html_hoja');
	dsAux1.addRow(['']);
	
	// actualizando lista de impresion
	var $frm = solutionModel.getForm('Hcipiso_print');
	var $tipos = [JSColumn.TEXT];
	$frm.dataSource = dsAux1.createDataSource('Hcipiso_print', $tipos);
	forms.Hcipiso_print.controller.recreateUI();
}
