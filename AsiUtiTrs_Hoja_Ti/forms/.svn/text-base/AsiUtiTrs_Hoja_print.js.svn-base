/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"8FECCC43-169A-403A-8CA9-0512792FC06B"}
 */
var f_medicoNombre = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"A3CBB361-BD31-4C1E-B927-44F5673913BE"}
 */
var f_matricula = '';

/**
 * @properties={typeid:35,uuid:"1DF1615B-5F12-4AA4-93E9-CA1CA0E5511A",variableType:-4}
 */
var dsAux = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"78547247-EB5F-48E6-A7D0-F643C309127A"}
 */
var f_histClinIngreso = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"ED0F0C30-4092-4C61-9A88-B5EE2B60B61B"}
 */
var f_egreso = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"538C5178-E62F-47F2-927C-31AA2D6066C5"}
 */
var f_ingreso = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"17EFDFF6-364F-4260-8289-270279925F5A"}
 */
var f_cobertura = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"865B1AD4-4E61-41CD-8A25-F50A83F79E6A"}
 */
var f_sexo = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"F2F80C3A-3D8A-43D5-83DF-01879AEFA3BA"}
 */
var f_hora = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"17B7EE98-BFE3-4DD2-A748-FD4C37D60E47"}
 */
var f_medico = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"76887587-8223-4581-8500-36460F05BBD1"}
 */
var f_edad = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"3EACA325-0F43-4173-B3E4-876AAF4AE2B9"}
 */
var f_cama = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"9BCE7BCF-DA18-423C-AEDC-0750C4C70C1E",variableType:4}
 */
var f_habitacion = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"55BDAE9A-18D4-4CF8-9E6F-C3C4D3DC9AFB",variableType:93}
 */
var f_fechaImpresion = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"E92CDB6E-6237-4AFA-8D75-47605CFF0CD5"}
 */
var f_histclinunica = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"5FE117B8-1F44-46D4-AAA4-AF9038502099"}
 */
var f_apelnom = null;

/**
 * @properties={typeid:24,uuid:"3DBC08DE-D2F6-475C-B40D-C2EDBAB7E421"}
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
	
	
	if(forms.AsiUtiTrs_Hoja_print.foundset.getSize() > 0)
		forms.AsiUtiTrs_Hoja_print.foundset.clear();
	
	controller.setPageFormat(210,297,10,10,10,10,1,0);
}

/**
 * TODO generated, please specify type and doc for the params
 * @param {Number} histClin
 * @param {Number} fecha
 * @param {Number} hora
 *
 * @properties={typeid:24,uuid:"C910D1AF-7F28-4F94-B8D0-CC01EAC54ED1"}
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
		f_edad = globals.CalculoEdad(asiutitrs_hoja_numero_to_asistencial_admision.adm_fecnac) + ' ' +  globals.vTipoEdad;;
		f_apelnom =  formatearHistclin(asiutitrs_hoja_numero_to_asistencial_admision.adm_histclin) + "  " + utils.stringTrim(asiutitrs_hoja_numero_to_asistencial_admision.adm_apelnom); 
		f_histclinunica = asiutitrs_hoja_numero_to_asistencial_admision.adm_histclinuni;
		f_habitacion = asiutitrs_hoja_numero_to_asistencial_admision.adm_habita;
		f_cama = asiutitrs_hoja_numero_to_asistencial_admision.adm_cama;
		f_cobertura = utils.stringTrim(asiutitrs_hoja_rel_buscar_obrasocial.obr_razonsoc) + ' (' +asiutitrs_hoja_rel_buscar_obrasocial.obr_codigo + ')'; 
		f_histClinIngreso = asiutitrs_hoja_rel_tbc_hist_cab_new.histcabnrounico;
		
		
		//No hace falta
		/*if(AsiUtiTrs_Hoja_rel_buscar_guardia.getSize() > 0){
			
			var fechaIngreso = globals.IntegerToDate(AsiUtiTrs_Hoja_rel_buscar_guardia.guar_fechaingreso);
			f_ingreso = globals.getDayName(fechaIngreso,true) + " " + fechaIngreso.getDate() + " " + globals.getMonthName(fechaIngreso,true) + " / " + fechaIngreso.getFullYear() + " " + convertNumberToHour_HHMM(AsiUtiTrs_Hoja_rel_buscar_guardia.guar_horaingreso) + " hrs.";
			
			var fechaEgreso = globals.IntegerToDate(AsiUtiTrs_Hoja_rel_buscar_guardia.guar_fechaalta);
			f_egreso = globals.getDayName(fechaEgreso,true) + " " + fechaEgreso.getDate() + " " + globals.getMonthName(fechaEgreso,true) + " / " + fechaEgreso.getFullYear() + " " + convertNumberToHour_HHMM(AsiUtiTrs_Hoja_rel_buscar_guardia.guar_horaalta) + " hrs.";
			
		}*/
	
		cargarBody();
		imprimir();
	}
	else{
		globals.DIALOGS.showWarningDialog("Atención!","No hay datos para imprimir.","Aceptar")
	}
}

/**
 * @properties={typeid:24,uuid:"088BD75D-2D50-4DDD-B9A5-2D66DD6AE801"}
 */
function cargarBody() {
	
	dsAux = databaseManager.createEmptyDataSet();
	dsAux.addColumn('html_hoja');
	
	var html = ''

	
	html = ''
	html += '<html><body>'
	html += '<table width="1024">'
	html += '<tr>'
	html += '<td width="40%">' + 'Ingreso a Terapia : INFORME CONFIDENCIAL, secrete Médico dentro de los alcances del árticulo 156 del Código Penal. </td>'
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

/*	if(globals.AsiUtiTrs_Primera_Evol_Medica){
		
		
		
		
	}*/
	if(asiutitrs_hoja_rel_buscar_hojati_print.htidiagnos1 > 0){
		
		globals.AsiUtiTrs_Hoja_patCodiPrint = asiutitrs_hoja_rel_buscar_hojati_print.htidiagnos1;
		// Diagnostico 1
		html = ''
		html += '<html><body>'
		html += '<table width="1024">'
		html += '<tr>'
		html += '<td width="60%">&nbsp;&nbsp;' + asiutitrs_hoja_rel_buscar_patologia_print.pat_descrip + '</td>'
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
		html += '<table width="1024">'
		html += '<tr>'
		html += '<td width="60%">&nbsp;&nbsp;' + asiutitrs_hoja_rel_buscar_patologia_print.pat_descrip + '</td>'
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
		html += '<table width="1024">'
		html += '<tr>'
		html += '<td width="60%">&nbsp;&nbsp;' + asiutitrs_hoja_rel_buscar_patologia_print.pat_descrip + '</td>'
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
		html += '<table width="1024">'
		html += '<tr>'
		html += '<td width="60%">&nbsp;&nbsp;' + asiutitrs_hoja_rel_buscar_patologia_print.pat_descrip + '</td>'
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
		html += '<table width="1024">'
		html += '<tr>'
		html += '<td width="60%">&nbsp;&nbsp;' + asiutitrs_hoja_rel_buscar_patologia_print.pat_descrip + '</td>'
		html += '</tr>'
		html += '</table>'
		html += '</body></html>'
		dsAux.addRow([html]);
	}
	
	
	
	
	html = ''
	html += '<html><body>'
	html += '<table width="1024">'
	html += '<tr>'
	html += '<td width="90%">Tensión arterial :  '+asiutitrs_hoja_rel_buscar_hojati_print.htitensionmin+' - '+ asiutitrs_hoja_rel_buscar_hojati_print.htitensionmax+'&ensp Peso: '+asiutitrs_hoja_rel_buscar_hojati_print.htipeso+' kgrs.</td>'
	html += '</tr>'
	html += '</table>'
	html += '</body></html>'
	dsAux.addRow([html]);
	
	
	html = ''
	html += '<html><body>'
	html += '<table width="1024">'
	html += '<tr>'
	html += '<td width="90%">Temperatura:  '+asiutitrs_hoja_rel_buscar_hojati_print.htitemper+'&ensp Altura: '+asiutitrs_hoja_rel_buscar_hojati_print.htialtura+' mts.</td>'
	
	html += '</tr>'
	html += '</table>'
	html += '</body></html>'
	dsAux.addRow([html]);
	
	
	html = ''
	html += '<html><body>'
	html += '<table width="1024">'
	html += '<tr>'
	html += '<td width="90%">Pulso: Frecuencia: '+asiutitrs_hoja_rel_buscar_hojati_print.htipulsofrec+' </td>'
	
	html += '</tr>'
	html += '</table>'
	html += '</body></html>'
	dsAux.addRow([html]);
	
	
	html = ''
	html += '<html><body>'
	html += '<table width="1024">'
	html += '<tr>'
	html += '<td width="90%">Puslo: Caracteris.: '+asiutitrs_hoja_rel_buscar_hojati_print.htipulsocarac+'&ensp IMC ='+forms.HciutiTrs_frm_evo_medica_utiTrs_hoja_TI.f_IMC+' - '+forms.HciutiTrs_frm_evo_medica_utiTrs_hoja_TI.f_IMC_resultado+'</td>'
	
	html += '</tr>'
	html += '</table>'
	html += '</body></html>'
	dsAux.addRow([html]);
	
	
	
	html = ''
	html += '<html><body>'
	html += '<table width="1024">'
	html += '<tr>'
	
	html += '<td width="90%">Via End.Ctral:  '+asiutitrs_hoja_rel_buscar_hojati_print.htiviav+' - '+ asiutitrs_hoja_rel_buscar_hojati_print.htitensionmax+' </td>'
	
	html += '</tr>'
	html += '</table>'
	html += '</body></html>'
	dsAux.addRow([html]);
	
	
	
	html = ''
	html += '<html><body>'
	html += '<table width="1024">'
	html += '<tr>'
	html += '<td width="90%">Cateter Cook :  '+asiutitrs_hoja_rel_buscar_hojati_print.hticatc==1?'SI':'NO'+'&ensp &ensp Inicio: </td>'
	html += '</tr>'
	html += '</table>'
	html += '</body></html>'
	dsAux.addRow([html]);
	
	
	html = ''
	html += '<html><body>'
	html += '<table width="1024">'
	html += '<tr>'
	html += '<td width="90%">Sonda Vesical:  '+asiutitrs_hoja_rel_buscar_hojati_print.htivesical==1?'SI':'NO'+'<pre>  Observaciones: '+ asiutitrs_hoja_rel_buscar_hojati_print.htivesicalobs+'</pre></td>'
	
	html += '</tr>'
	html += '</table>'
	html += '</body></html>'
	dsAux.addRow([html]);
	
	
	
	html = ''
	html += '<html><body>'
	html += '<table width="1024">'
	html += '<tr>'
	html += '<td width="90%">Sonda NG:  '+asiutitrs_hoja_rel_buscar_hojati_print.hting==1?'SI':'NO'+'<pre>  Observaciones: '+ asiutitrs_hoja_rel_buscar_hojati_print.htingobs+'</pre></td>'
	
	html += '</tr>'
	html += '</table>'
	html += '</body></html>'
	dsAux.addRow([html]);
	
	
	html = ''
	html += '<html><body>'
	html += '<table width="1024">'
	html += '<tr>'
	html += '<td width="90%">Sonda SOG:  '+asiutitrs_hoja_rel_buscar_hojati_print.htisog==1?'SI':'NO'+'<pre>  Observaciones: '+ asiutitrs_hoja_rel_buscar_hojati_print.htisogobs+'</pre></td>'
	html += '</tr>'
	html += '</table>'
	html += '</body></html>'
	dsAux.addRow([html]);
	
	
	html = ''
	html += '<html><body>'
	html += '<table width="1024">'
	html += '<tr>'
	html += '<td width="90%">Sonda Otras:  '+asiutitrs_hoja_rel_buscar_hojati_print.htiotras==1?'SI':'NO'+'<pre>  Observaciones: '+ asiutitrs_hoja_rel_buscar_hojati_print.htiotrasobs+'</pre></td>'
	
	html += '</tr>'
	html += '</table>'
	html += '</body></html>'
	dsAux.addRow([html]);
	
	
	
	html = ''
	html += '<html><body>'
	html += '<table width="1024">'
	html += '<tr>'
	html += '<td width="90%">Escaras:  '+asiutitrs_hoja_rel_buscar_hojati_print.htiescara==1?'SI':'NO'+'<pre>  Observaciones: '+ asiutitrs_hoja_rel_buscar_hojati_print.htiescaraobs+'</pre></td>'
	
	html += '</tr>'
	html += '</table>'
	html += '</body></html>'
	dsAux.addRow([html]);
	
	
	html = ''
	html += '<html><body>'
	html += '<table width="1024">'
	html += '<tr>'
	html += '<td width="90%">ARM:  '+asiutitrs_hoja_rel_buscar_hojati_print.htiarm==1?'SI':'NO'+'</td>'
	
	html += '</tr>'
	html += '</table>'
	html += '</body></html>'
	dsAux.addRow([html]);
	
	
	
	
	if(asiutitrs_hoja_rel_buscar_escaras_print.getSize()>0){
	
		html = ''
		html += '<html><body>'
		html += '<table width="1024">'
		html += '<tr>'
		html += '<td width="100%">FACTORES DE RIESGO PARA EL DESARROLLO DE ULCERAS POR PRESION(ESCARAS)</td>'
		html += '</tr>'
		html += '</table>'
		html += '</body></html>'
		dsAux.addRow([html]);
		
		
		if(asiutitrs_hoja_rel_buscar_escaras_print.teesneop>0){
			html = ''
			html += '<html><body>'
			html += '<table width="1024">'
			html += '<tr>'
			html += '<td width="100%">&#8226; PACIENTE NEOPLASICO</td>'
			html += '</tr>'
			html += '</table>'
			html += '</body></html>'
			dsAux.addRow([html]);
		}
		
		
		if(asiutitrs_hoja_rel_buscar_escaras_print.teescons>0){
			html = ''
			html += '<html><body>'
			html += '<table width="1024">'
			html += '<tr>'
			html += '<td width="100%">&#8226; PACIENTE CON ENFERMEDADES CONSUNTIVAS"</td>'
			html += '</tr>'
			html += '</table>'
			html += '</body></html>'
			dsAux.addRow([html]);
		}
		
		
		if(asiutitrs_hoja_rel_buscar_escaras_print.teesquir>0){
			html = ''
			html += '<html><body>'
			html += '<table width="1024">'
			html += '<tr>'
			html += '<td width="100%">&#8226; PACIENTE CON COMPLICACIONES QUIRURGICAS"</td>'
			html += '</tr>'
			html += '</table>'
			html += '</body></html>'
			dsAux.addRow([html]);
		}
		var tieneEstadoObesidad=false;
		
		if(
		 asiutitrs_hoja_rel_buscar_escaras_print.teesnutr_1!=0 
		 || asiutitrs_hoja_rel_buscar_escaras_print.teesnutr_2!=0 
		 || asiutitrs_hoja_rel_buscar_escaras_print.teesnutr_3!=0 	
		 || asiutitrs_hoja_rel_buscar_escaras_print.teesnutr_4!=0 	
		 || asiutitrs_hoja_rel_buscar_escaras_print.teesnutr_5!=0 	
		){
			html = ''
			html += '<html><body>'
			html += '<table width="1024">'
			html += '<tr>'
			html += '<td width="100%">&#8226; ESTADO NUTRICIONAL: "</td>'
			html += '</tr>'
			html += '</table>'
			html += '</body></html>'
			dsAux.addRow([html]);
		}
		
		
		if(asiutitrs_hoja_rel_buscar_escaras_print.teesnutr_1!=0){
			html = ''
			html += '<html><body>'
			html += '<table width="1024">'
			html += '<tr>'
			html += '<td width="100%">&#8226; Obesidad"</td>'
			html += '</tr>'
			html += '</table>'
			html += '</body></html>'
			dsAux.addRow([html]);
			
		}
	
	
		
		var tieneAntecedentesPatologicos= false;
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
		
		){
			html = ''
			html += '<html><body>'
			html += '<table width="1024">'
			html += '<tr>'
			html += '<td width="100%">&#8226; ANTECEDENTES PATOLÓGICOS: "</td>'
			html += '</tr>'
			html += '</table>'
			html += '</body></html>'
			dsAux.addRow([html]);
			tieneAntecedentesPatologicos=true;
		}
		
		
		
		
		
	
		if(asiutitrs_hoja_rel_buscar_escaras_print.teessens!=0){
			html = ''
			html += '<html><body>'
			html += '<table width="1024">'
			html += '<tr>'
			html += '<td width="100%">&#8226; PACIENTE CON DETERIORO DEL SENSORIO "</td>'
			html += '</tr>'
			html += '</table>'
			html += '</body></html>'
			dsAux.addRow([html]);
			tieneAntecedentesPatologicos=true;
		}
		
		
		
		
		if(asiutitrs_hoja_rel_buscar_escaras_print.teesdesh!=0){
			html = ''
			html += '<html><body>'
			html += '<table width="1024">'
			html += '<tr>'
			html += '<td width="100%">&#8226; PACIENTE CON DESHIDRATACIÓN "</td>'
			html += '</tr>'
			html += '</table>'
			html += '</body></html>'
			dsAux.addRow([html]);
			tieneAntecedentesPatologicos=true;
		}
		
		if(tieneAntecedentesPatologicos==false){
			html = ''
			html += '<html><body>'
			html += '<table width="1024">'
			html += '<tr>'
			html += '<td width="100%">&#8226; NINGUNO"</td>'
			html += '</tr>'
			html += '</table>'
			html += '</body></html>'
			dsAux.addRow([html]);
		}
		
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
		html += '<table width="1024">'
		html += '<tr>'
		html += '<td width="100%">&#8226; VALORACION DEL RIESGO DE ULCERA POR DECUBITO(ESCALA DE ARNELL)"</td>'
		html += '</tr>'
		html += '</table>'
		html += '</body></html>'
		dsAux.addRow([html]);
		
		
		html = ''
		html += '<html><body>'
		html += '<table width="1024">'
		html += '<tr>'
		html += '<td width="100%">&#8226; VARIABLE:&#8226;VALOR:&#8226;PUNTUACION"</td>'
		html += '</tr>'
		html += '</table>'
		html += '</body></html>'
		dsAux.addRow([html]);
		
		//definición de arrays puntuacion
		
		var puntunacionEstadoMental=[0,1,2,3]
		var puntunacionIncontinencia=[0,2,4,6]
		var puntunacionActividad=[0,2,4,6]
		var puntunacionMovilidad=[0,2,4,6]
		var puntunacionNutricion=[0,1,2,3]
		var puntunacionAspectoPiel=[0,1,2,3]
		var puntunacionSensibilidadCutanea=[0,1,2,3]
		
		
		var valorArnell='';
				valorArnell= 	application.getValueListDisplayValue('vl_estado_mental',asiutitrs_hoja_rel_buscar_escaras_print.teesarnell_1);
				
				html = ''
				html += '<html><body>'
				html += '<table width="1024">'
				html += '<tr>'
				html += '<td width="100%">&#8226; Estado mental:&#8226;'+valorArnell+'&#8226;'+puntunacionEstadoMental[asiutitrs_hoja_rel_buscar_escaras_print.teesarnell_1]+'</td>'
				html += '</tr>'
				html += '</table>'
				html += '</body></html>'
					
				
				valorArnell= application.getValueListDisplayValue('vl_incontinencia',asiutitrs_hoja_rel_buscar_escaras_print.teesarnell_2);
				
				html = ''
				html += '<html><body>'
				html += '<table width="1024">'
				html += '<tr>'
				html += '<td width="100%">&#8226; Incontinencia:&#8226;'+valorArnell+'&#8226;'+puntunacionIncontinencia[asiutitrs_hoja_rel_buscar_escaras_print.teesarnell_2]+'</td>'
				html += '</tr>'
				html += '</table>'
				html += '</body></html>'
					
				
				valorArnell= application.getValueListDisplayValue('vl_actividad',asiutitrs_hoja_rel_buscar_escaras_print.teesarnell_3);
				html = ''
				html += '<html><body>'
				html += '<table width="1024">'
				html += '<tr>'
				html += '<td width="100%">&#8226; Actividad:&#8226;'+valorArnell+'&#8226;'+puntunacionActividad[asiutitrs_hoja_rel_buscar_escaras_print.teesarnell_3]+'</td>'
				html += '</tr>'
				html += '</table>'
				html += '</body></html>'
					
				valorArnell= application.getValueListDisplayValue('vl_movilidad',asiutitrs_hoja_rel_buscar_escaras_print.teesarnell_4);
				
				html = ''
				html += '<html><body>'
				html += '<table width="1024">'
				html += '<tr>'
				html += '<td width="100%">&#8226; Movilidad:&#8226;'+valorArnell+'&#8226;'+puntunacionMovilidad[asiutitrs_hoja_rel_buscar_escaras_print.teesarnell_4]+'</td>'
				html += '</tr>'
				html += '</table>'
				html += '</body></html>'
					
				valorArnell= application.getValueListDisplayValue('vl_nutricion',asiutitrs_hoja_rel_buscar_escaras_print.teesarnell_5);
				
				html = ''
				html += '<html><body>'
				html += '<table width="1024">'
				html += '<tr>'
				html += '<td width="100%">&#8226; Nutricion:&#8226;'+valorArnell+'&#8226;'+puntunacionNutricion[asiutitrs_hoja_rel_buscar_escaras_print.teesarnell_5]+'</td>'
				html += '</tr>'
				html += '</table>'
				html += '</body></html>'
				valorArnell= application.getValueListDisplayValue('vl_aspecto_piel',asiutitrs_hoja_rel_buscar_escaras_print.teesarnell_6);
				html = ''
				html += '<html><body>'
				html += '<table width="1024">'
				html += '<tr>'
				html += '<td width="100%">&#8226; Aspecto de la piel:&#8226;'+valorArnell+'&#8226;'+puntunacionAspectoPiel[asiutitrs_hoja_rel_buscar_escaras_print.teesarnell_6]+'</td>'
				html += '</tr>'
				html += '</table>'
				html += '</body></html>'
					
				valorArnell= application.getValueListDisplayValue('vl_sensibilidad_cutanea',asiutitrs_hoja_rel_buscar_escaras_print.teesarnell_7);
				html = ''
				html += '<html><body>'
				html += '<table width="1024">'
				html += '<tr>'
				html += '<td width="100%">&#8226; Sensibilidad cutanea:&#8226;'+valorArnell+'&#8226;'+puntunacionSensibilidadCutanea[asiutitrs_hoja_rel_buscar_escaras_print.teesarnell_7]+'</td>'
				html += '</tr>'
				html += '</table>'
				html += '</body></html>'
		
		html = ''
		html += '<html><body>'
		html += '<table width="1024">'
		html += '<tr>'
		html += '<td width="100%">RESULTADO</td>'
		html += '</tr>'
		html += '</table>'
		html += '</body></html>'
		dsAux.addRow([html]);
		
		html = ''
		html += '<html><body>'
		html += '<table width="1024">'
		html += '<tr>'
		html += '<td width="100%">PUNTUACION TOTAL: '+asiutitrs_hoja_rel_buscar_escaras_print.tearnellscore+'</td>'
		html += '</tr>'
		html += '</table>'
		html += '</body></html>'
		dsAux.addRow([html]);
		
		if(asiutitrs_hoja_rel_buscar_escaras_print.tearnellscore>=12){
			html = ''
			html += '<html><body>'
			html += '<table width="1024">'
			html += '<tr>'
			html += '<td width="100%">RIESGO AUMENTADO PARA DESARROLLAR ULCERAS POR DECUBITO</td>'
			html += '</tr>'
			html += '</table>'
			html += '</body></html>'
			dsAux.addRow([html]);
		}else{
			html = ''
			html += '<html><body>'
			html += '<table width="1024">'
			html += '<tr>'
			html += '<td width="100%">RIESGO INSUFICIENTE PARA DESARROLLAR ULCERAS POR DECUBITO</td>'
			html += '</tr>'
			html += '</table>'
			html += '</body></html>'
				
		}
	}
	html = ''
	html += '<html><body>'
	html += '<table width="1024">'
	html += '<tr>'
	html += '<td width="40%">INFORME AL FAMILIAR Y/O PACIENTE: Efectuado: A QUIEN: '+asiutitrs_hoja_rel_buscar_hojati_print.htiaquien+'.</td>'
	html += '</tr>'
	html += '</table>'
	html += '</body></html>'
	dsAux.addRow([html]);
	
	
	//FUNCIONA BIEN
	//De esto, hay que ver como no harcodear.
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
	

	

	

	
	// actualizando lista de impresion
	var $frm = solutionModel.getForm('AsiUtiTrs_Hoja_print');
	var $tipos = [JSColumn.TEXT];
	$frm.dataSource = dsAux.createDataSource('AsiUtiTrs_Hoja_print', $tipos);
	forms.AsiUtiTrs_Hoja_print.controller.recreateUI();
	
	
		
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
 * @properties={typeid:24,uuid:"361C2ED1-B6D0-41D0-A930-92683D89ACD8"}
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
 * @properties={typeid:24,uuid:"6EBA9278-0201-40FD-B22F-726CB52FEE17"}
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
			html += '<table width="1024">'
			html += '<tr>'
			html += '<td width="100%"><p>&nbsp;&nbsp;' + ds_hciintTXT.getValue(indicek,1); + '</p></td>'
			html += '</tr>'
			html += '</table>'
			html += '</body></html>'
			dsAux.addRow([html]);
		}
	}

}

/**
 * @properties={typeid:24,uuid:"BB3C3E3D-5498-4ED4-B6B4-DC0039C4E40E"}
 */
function imprimir() {
	/*forms.AsiUtiTrs_Hoja_print.controller.setPageFormat(210,297,10,10,10,10,1,0);
	forms.HciutiTrs_frm_evo_medica_utiTrs_hoja_TI.f_cerrarForm=true;
	forms.AsiUtiTrs_Hoja_print.controller.showPrintPreview(true)*/
	 //controller.print(false,false);
	 
	//controller.print(false,false);
		/*asiutitrs_rel_tbc_hojati_to_tbc_hojati.htiimprimio = 0;
		var resultSave = databaseManager.saveData(asiutitrs_rel_tbc_hojati_to_tbc_hojati.getRecord(1));
		if(resultSave){
			plugins.dialogs.showInfoDialog("Documento Impreso","Esta evolución ya no será posible editar");
		}*/

}

/**
 * TODO generated, please specify type and doc for the params
 * @param value
 *
 * @properties={typeid:24,uuid:"8A0B157E-999F-4F13-AF77-B31E28574ADF"}
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
 * @properties={typeid:24,uuid:"805E41B2-6838-409B-8729-54FBCE645BB5"}
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
 * @properties={typeid:24,uuid:"8A64FA5D-F280-4846-B633-977FE3907DD9"}
 */
function onShow_inicializarForm(firstShow, event) {
	
	var dsAux1 = databaseManager.createEmptyDataSet();
	dsAux1.addColumn('html_hoja');
	dsAux1.addRow(['']);
	
	// actualizando lista de impresion
	var $frm = solutionModel.getForm('AsiUtiTrs_Hoja_print');
	var $tipos = [JSColumn.TEXT];
	$frm.dataSource = dsAux1.createDataSource('AsiUtiTrs_Hoja_print', $tipos);
	forms.AsiUtiTrs_Hoja_print.controller.recreateUI();
}

/**
 * @properties={typeid:24,uuid:"49179F8F-E993-4787-9FA7-D942E23FF4B1"}
 */
function cargarSignosVitales(){

	// Pulso
	html = ''
	html += '<html><body>'
	html += '<table width="1024">'
	html += '<tr>'
	html += '<td width="40%">&nbsp;&nbsp;Pulso : ' + asiutitrs_hoja_rel_buscar_hojati_print.hittval_4 + ' por minuto</td>'
	html += '</tr>'
	html += '</table>'
	html += '</body></html>'
	dsAux.addRow([html]);
	
	// Tension arterial
	html = ''
	html += '<html><body>'
	html += '<table width="1024">'
	html += '<tr>'
	html += '<td width="60%">&nbsp;&nbsp;Tensión Arterial Máxima : ' + asiutitrs_hoja_rel_buscar_hojati_print.hittval_2 + ' Mínima : ' + asiutitrs_hoja_rel_buscar_hojati_print.hittval_3 + '</td>'
	html += '</tr>'
	html += '</table>'
	html += '</body></html>'
	dsAux.addRow([html]);
	
	
	// Frecuencia Respiratoria
	html = ''
	html += '<html><body>'
	html += '<table width="1024">'
	html += '<tr>'
	html += '<td width="60%">&nbsp;&nbsp;Frecuencia Respiratoria : ' + asiutitrs_hoja_rel_buscar_hojati_print.hittval_5 + ' por minuto</td>'
	html += '</tr>'
	html += '</table>'
	html += '</body></html>'
	dsAux.addRow([html]);
	
	
	
	// Temperatura
	html = ''
	html += '<html><body>'
	html += '<table width="1024">'
	html += '<tr>'
	html += '<td width="60%">&nbsp;&nbsp;Temperatura : ' + application.getValueListDisplayValue('AsiUtiTrs_Hoja_vl_temperatura',asiutitrs_hoja_rel_buscar_hojati_print.hittval_6) + ' ' + asiutitrs_hoja_rel_buscar_hojati_print.hittval_6 +'º' + '</td>'
	html += '</tr>'
	html += '</table>'
	html += '</body></html>'
	dsAux.addRow([html]);
	

}
