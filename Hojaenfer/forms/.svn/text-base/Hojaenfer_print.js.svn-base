/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"98D14110-14C5-4DF0-A04A-BD75A8FB3B8E"}
 */
var $_horaSegunTurno = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"E4423E2C-6E3E-4142-8CB9-8F0A27FF76A6"}
 */
var f_turno = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"428020EC-8429-40E5-9869-0471C34083EA"}
 */
var f_hora = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"DF212ECA-9C16-49EE-A68A-2E091594DFC4"}
 */
var f_fecha = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"B0E657E5-1FEC-4D8C-8792-07E407350F6E"}
 */
var f_sector = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"1043D5F3-260B-4A73-A0B4-5A1AD604E1C3"}
 */
var f_cama = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"7D4631C6-CBAA-433E-9909-86FB5EBCA683",variableType:4}
 */
var f_habitacion = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"BD655428-B703-4C13-9614-C1757C62C084",variableType:4}
 */
var $_hora = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"23A009D8-9C06-4533-8E42-3CB40A7375C8",variableType:4}
 */
var $_fecha = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"C4784D23-5472-4DC6-8ACE-F96547D1C244",variableType:4}
 */
var $_histclin = 0;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"5D55AC4A-8BA7-44AA-854D-2045ABBA382D",variableType:93}
 */
var f_fechaImpresion = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"ED4E7A07-A08C-4EB2-9B9E-21E299D67ED7"}
 */
var f_histclinunica = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"69B0AC26-8C6C-409A-8595-EF62CF00C144"}
 */
var f_apelnom = null;

/**
 * @properties={typeid:24,uuid:"652FEFDC-8081-4E68-B389-B9FD67D8B0C4"}
 */
function limpiarForm (){
	
	f_apelnom = null;
	f_cama = null;
	f_fecha = null;
	f_fechaImpresion = null;
	f_habitacion = null;
	f_histclinunica = null;
	f_hora = null;
	f_sector = null;
	f_turno = null;
	
	$_fecha = null;
	$_histclin = null;
	$_hora = null;
	$_horaSegunTurno = null;
	
	globals.Hojaenfer_histClinPrint = 0;
	globals.Hojaenfer_fechaPrint = 0;
	globals.Hojaenfer_horaPrint = 0;
	globals.Hojaenfer_perLegajo = 0;
	globals.Hojaenfer_utic_utiliza = 0;
	
	if(forms.Hojaenfer_print.foundset.getSize() > 0)
		forms.Hojaenfer_print.foundset.clear();
	
}

/**
 * TODO generated, please specify type and doc for the params
 * @param histClin
 * @param fecha
 * @param hora
 *
 * @properties={typeid:24,uuid:"732684E2-A6C5-4119-A4E9-10C0A5CAA580"}
 */
function imprimirHojaEnfer(histClin,fecha,hora){
	
	limpiarForm();
	
	globals.Hojaenfer_histClinPrint = histClin;
	globals.Hojaenfer_fechaPrint = fecha;
	globals.Hojaenfer_horaPrint = hora;
	$_fecha = fecha;
	$_hora = hora;
	
	if(hojaenfer_rel_busca_hoja.getSize() > 0){
		
		globals.Hojaenfer_perLegajo = hojaenfer_rel_busca_hoja.hoenumleg;
		// cargar Header
		f_fechaImpresion = application.getServerTimeStamp();
		f_fecha = fecha.toString().substr(6,2)+"/"+fecha.toString().substr(4,2)+"/"+fecha.toString().substr(0,4);
		f_hora = convertNumberToHour_HHMM(hora);
		f_turno = getTurnoSegunhora(hora);
		f_apelnom =  hojaenfer_rel_busca_inter.hiscli2_hojaenfer + "  " + utils.stringTrim(hojaenfer_rel_busca_inter.adm_apelnom); 
		f_histclinunica = hojaenfer_rel_busca_inter.adm_histclinuni;
		f_habitacion = hojaenfer_rel_busca_inter.adm_habita;
		f_cama = hojaenfer_rel_busca_inter.adm_cama;
		
		globals.Hojaenfer_utic_utiliza = hojaenfer_rel_busca_hoja.hoeutiliza;
		f_sector = hojaenfer_rel_busca_sector.utic_usoabrev;
		
		// Cargar body
		cargarBody();
		imprimir();
	}
	else{
		globals.DIALOGS.showWarningDialog("Atención!","No hay datos para imprimir.","Aceptar")
	}
}

/**
 * @properties={typeid:24,uuid:"252691FC-8725-4038-BA51-C4E3E3929E12"}
 */
function cargarBody() {
	
	var dsAux = databaseManager.createEmptyDataSet();
	dsAux.addColumn('html_hoja');
	
	// Temperatura
	var html = ''
	
	html = ''
	html += '<html><body>'
	html += '<table width=100% cellpadding=1 cellspacing=0>'
	html += '<tr>'
	html += '<td width=40%>' + 'Temperatura . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .' + '</td>'
	html += '<td width=60%>' + utils.numberFormat(hojaenfer_rel_busca_hoja.hoetemper,1)  + '  ' + $_horaSegunTurno + '</td>'
	html += '</tr>'
	html += '</table>'
	html += '</body></htFml>'
	dsAux.addRow([html]);
	
	// Pulso
	html = ''
	html += '<html><body>'
	html += '<table width=100% cellpadding=1 cellspacing=0>'
	html += '<tr>'
	html += '<td width=40%>' + 'Pulso . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .' + '</td>'
	html += '<td width=60%>' + hojaenfer_rel_busca_hoja.hoepulso == 0 ? "s/p" : hojaenfer_rel_busca_hoja.hoepulso + ' ' + $_horaSegunTurno  + '</td>'
	html += '</tr>'
	html += '</table>'
	html += '</body></html>'
	dsAux.addRow([html]);
	
	// Respiracion
	html = ''
	html += '<html><body>'
	html += '<table width=100% cellpadding=1 cellspacing=0>'
	html += '<tr>'
	html += '<td width=40%>' + 'Respiracion . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .' + '</td>'
	html += '<td width=60%>' + hojaenfer_rel_busca_hoja.hoerespir == 0 ? "s/r" : hojaenfer_rel_busca_hoja.hoerespir + ' ' + $_horaSegunTurno + '</td>'
	html += '</tr>'
	html += '</table>'
	html += '</body></html>'
	dsAux.addRow([html]);
	
	// Tension arterial
	html = ''
	html += '<html><body>'
	html += '<table width=100% cellpadding=1 cellspacing=0>'
	html += '<tr>'
	html += '<td width=40%>' + 'Tension arterial . . . . . . . . . . . . . . . . . . . . . . . .  . . . .' + '</td>'
	html += '<td width=60%> Max ' + hojaenfer_rel_busca_hoja.hoetamax +  "  Min  " + hojaenfer_rel_busca_hoja.hoetamin + '</td>'
	html += '</tr>'
	html += '</table>'
	html += '</body></html>'
	dsAux.addRow([html]);
	
	// Saturometria
	html = ''
	html += '<html><body>'
	html += '<table width=100% cellpadding=1 cellspacing=0>'
	html += '<tr>'
	html += '<td width=40%>' + 'Saturometria % . . . . . . . . . . . . . . . . . . . . . . . . . . . .' + '</td>'
	html += '<td width=60%>' + hojaenfer_rel_busca_hoja.hoesaturo == 0 ? "s/s" : hojaenfer_rel_busca_hoja.hoesaturo + ' ' + $_horaSegunTurno + '</td>'
	html += '</tr>'
	html += '</table>'
	html += '</body></html>'
	dsAux.addRow([html]);
	
	// Oxigenoterapia
	if(hojaenfer_rel_busca_hoja.hoeoxigen > 0){
		html = ''
		html += '<html><body>'
		html += '<table width=100% cellpadding=1 cellspacing=0>'
		html += '<tr>'
		html += '<td width=40%>' + 'Oxigenoterapia % . . . . . . . . . . . . . . . . . . . . . . . . . .' + '</td>'
		html += '<td width=60%>' + hojaenfer_rel_busca_hoja.hoeoxigen + '</td>'
		html += '</tr>'
		html += '</table>'
		html += '</body></html>'
		dsAux.addRow([html]);
	}
	
	// Nebulizaciones c/4
	if( utils.stringTrim(hojaenfer_rel_busca_hoja.hoenebuli).length > 0){
		html = ''
		html += '<html><body>'
		html += '<table width=100% cellpadding=1 cellspacing=0>'
		html += '<tr>'
		html += '<td width=40%>' + 'Nebulizaciones c/4 hs. . . . . . . . . . . . . . . . . . . . . . .' + '</td>'
		html += '<td width=60%>' + hojaenfer_rel_busca_hoja.hoenebuli + '</td>'
		html += '</tr>'
		html += '</table>'
		html += '</body></html>'
		dsAux.addRow([html]);
	}
	
	// HGT
	if(hojaenfer_rel_busca_hoja.hoehgt == 'X'  ){
		
		if($_fecha < 20110523 || ($_fecha == 20110523 && $_hora < 1000)){
			
			html = ''
			html += '<html><body>'
			html += '<table width=100% cellpadding=1 cellspacing=0>'
			html += '<tr>'
			html += '<td width=40%>' + 'HGT . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .' + '</td>'
			html += '<td width=60%>' + hojaenfer_rel_busca_hoja.hoehgt1 + '</td>'
			html += '</tr>'
			html += '</table>'
			html += '</body></html>'
			dsAux.addRow([html]);
		}
		else{
			
			html = ''
			html += '<html><body>'
			html += '<table width=100% cellpadding=1 cellspacing=0>'
			html += '<tr>'
			html += '<td width=40%>' + 'HGT . . . . . . . . . . . . . . . . . . . . . . . . . . .  . . . . . . . . .' + '</td>'
			html += '<td width=60%>' + hojaenfer_rel_busca_hoja.hoehgt + '</td>'
			html += '</tr>'
			html += '</table>'
			html += '</body></html>'
			dsAux.addRow([html]);
			
			html = ''
			html += '<html><body>'
			html += '<table width=100% cellpadding=1 cellspacing=0>'
			html += '<tr>'
			html += '<td width=40%>&nbsp;&nbsp;' + hojaenfer_rel_busca_hoja.hoehgt1 + ' a las ' + convertNumberToHour_HHMM(hojaenfer_rel_busca_hoja.hoehgth1) + ' hs' + '</td>'
			html += '<td width=60%>' +""+ '</td>'
			html += '</tr>'
			html += '</table>'
			html += '</body></html>'
			dsAux.addRow([html]);
			
			html = ''
			html += '<html><body>'
			html += '<table width=100% cellpadding=1 cellspacing=0>'
			html += '<tr>'
			html += '<td width=40%>&nbsp;&nbsp;' + hojaenfer_rel_busca_hoja.hoehgt2 + ' a las ' + convertNumberToHour_HHMM(hojaenfer_rel_busca_hoja.hoehgth2) + ' hs' + '</td>'
			html += '<td width=60%>' +""+ '</td>'
			html += '</tr>'
			html += '</table>'
			html += '</body></html>'
			dsAux.addRow([html]);
		}	
	}
	
	// Correccion c/insulina
	if(hojaenfer_rel_busca_hoja.hoeinsuli == 'X'  ){
		
		if($_fecha < 20110523 || ($_fecha == 20110523 && $_hora < 1000)){
			
			html = ''
			html += '<html><body>'
			html += '<table width=100% cellpadding=1 cellspacing=0>'
			html += '<tr>'
			html += '<td width=40%>' + 'Correccion c/insulina . . . . . . .  . . . . . . . . . . . . . . . . .' + '</td>'
			html += '<td width=60%>' + hojaenfer_rel_busca_hoja.hoeinsuli1 + '</td>'
			html += '</tr>'
			html += '</table>'
			html += '</body></html>'
			dsAux.addRow([html]);
		}
		else{
			
			html = ''
			html += '<html><body>'
			html += '<table width=100% cellpadding=1 cellspacing=0>'
			html += '<tr>'
			html += '<td width=40%>' + 'Correccion c/insulina . . . . . .  . . . . . . . . . . . . . . . . . .' + '</td>'
			html += '<td width=60%>' + hojaenfer_rel_busca_hoja.hoeinsuli + '</td>'
			html += '</tr>'
			html += '</table>'
			html += '</body></html>'
			dsAux.addRow([html]);
			
			html = ''
			html += '<html><body>'
			html += '<table width=100% cellpadding=1 cellspacing=0>'
			html += '<tr>'
			html += '<td width=40%>&nbsp;&nbsp;' + hojaenfer_rel_busca_hoja.hoeinsuli1 + ' a las ' + convertNumberToHour_HHMM(hojaenfer_rel_busca_hoja.hoeinsulih1) + ' hs' + '</td>'
			html += '<td width=60%>' +""+ '</td>'
			html += '</tr>'
			html += '</table>'
			html += '</body></html>'
			dsAux.addRow([html]);
			
			html = ''
			html += '<html><body>'
			html += '<table width=100% cellpadding=1 cellspacing=0>'
			html += '<tr>'
			html += '<td width=40%>&nbsp;&nbsp;' + hojaenfer_rel_busca_hoja.hoeinsuli2 + ' a las ' + convertNumberToHour_HHMM(hojaenfer_rel_busca_hoja.hoeinsulih2) + ' hs' + '</td>'
			html += '<td width=60%>' +""+ '</td>'
			html += '</tr>'
			html += '</table>'
			html += '</body></html>'
			dsAux.addRow([html]);
		}	
	}
	
	// Diuresis
	if(hojaenfer_rel_busca_hoja.hoediuresx == 'X'){
		
		var diuresis =  null;
		if(hojaenfer_rel_busca_hoja.hoeopcdiures_1 == 1)
			diuresis = "Pañal";
		
		if(diuresis == null){
			if(hojaenfer_rel_busca_hoja.hoeopcdiures_2 == 1)
				diuresis = "Se levanta al baño";
		}
		else{
			if(hojaenfer_rel_busca_hoja.hoeopcdiures_2 == 1)
				diuresis += " / Se levanta al baño";
		}
		
		if(diuresis == null){
			if(hojaenfer_rel_busca_hoja.hoeopcdiures_3 == 1)
				diuresis = "Volumen = " + hojaenfer_rel_busca_hoja.hoediures;
		}
		else{
			if(hojaenfer_rel_busca_hoja.hoeopcdiures_3 == 1)
				diuresis += " / Volumen = " + hojaenfer_rel_busca_hoja.hoediures;
		}
			
		html = ''
		html += '<html><body>'
		html += '<table width=100% cellpadding=1 cellspacing=0>'
		html += '<tr>'
		html += '<td width=40%>' + 'Diuresis . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .' + '</td>'
		html += '<td width=60%>' + (diuresis == null? "":diuresis) + '</td>'
		html += '</tr>'
		html += '</table>'
		html += '</body></html>'
		dsAux.addRow([html]);
	}
	
	// SNG
	if(hojaenfer_rel_busca_hoja.hoesng > 0){
		html = ''
		html += '<html><body>'
		html += '<table width=100% cellpadding=1 cellspacing=0>'
		html += '<tr>'
		html += '<td width=40%>' + 'SNG . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .' + '</td>'
		html += '<td width=60%>' + hojaenfer_rel_busca_hoja.hoesng + '</td>'
		html += '</tr>'
		html += '</table>'
		html += '</body></html>'
		dsAux.addRow([html]);
	}
	
	// KHER
	if(hojaenfer_rel_busca_hoja.hoesng > 0){
		html = ''
		html += '<html><body>'
		html += '<table width=100% cellpadding=1 cellspacing=0>'
		html += '<tr>'
		html += '<td width=40%>' + 'KHER . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .' + '</td>'
		html += '<td width=60%>' + hojaenfer_rel_busca_hoja.hoekher + '</td>'
		html += '</tr>'
		html += '</table>'
		html += '</body></html>'
		dsAux.addRow([html]);
	}
	
	// Drenaje 1
	if(hojaenfer_rel_busca_hoja.hoedrena1 > 0){
		html = ''
		html += '<html><body>'
		html += '<table width=100% cellpadding=1 cellspacing=0>'
		html += '<tr>'
		html += '<td width=40%>' + 'Drenaje 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .' + '</td>'
		html += '<td width=60%>' + hojaenfer_rel_busca_hoja.hoedrena1 + '</td>'
		html += '</tr>'
		html += '</table>'
		html += '</body></html>'
		dsAux.addRow([html]);
	}
	
	// Drenaje 2
	if(hojaenfer_rel_busca_hoja.hoedrena2 > 0){
		html = ''
		html += '<html><body>'
		html += '<table width=100% cellpadding=1 cellspacing=0>'
		html += '<tr>'
		html += '<td width=40%>' + 'Drenaje 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . ' + '</td>'
		html += '<td width=60%>' + hojaenfer_rel_busca_hoja.hoedrena2 + '</td>'
		html += '</tr>'
		html += '</table>'
		html += '</body></html>'
		dsAux.addRow([html]);
	}
	
	// Drenaje 3
	if(hojaenfer_rel_busca_hoja.hoedrena3 > 0){
		html = ''
		html += '<html><body>'
		html += '<table width=100% cellpadding=1 cellspacing=0>'
		html += '<tr>'
		html += '<td width=40%>' + 'Drenaje 3 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .' + '</td>'
		html += '<td width=60%>' + hojaenfer_rel_busca_hoja.hoedrena3 + '</td>'
		html += '</tr>'
		html += '</table>'
		html += '</body></html>'
		dsAux.addRow([html]);
	}
	
	// Deposiciones
	if(hojaenfer_rel_busca_hoja.hoedeposi > 0){
		html = ''
		html += '<html><body>'
		html += '<table width=100% cellpadding=1 cellspacing=0>'
		html += '<tr>'
		html += '<td width=40%>' + 'Deposiciones . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .' + '</td>'
		html += '<td width=60%>' + hojaenfer_rel_busca_hoja.hoedeposi + '</td>'
		html += '</tr>'
		html += '</table>'
		html += '</body></html>'
		dsAux.addRow([html]);
	}
	
	// Diarrea
	if(hojaenfer_rel_busca_hoja.hoediarre > 0){
		html = ''
		html += '<html><body>'
		html += '<table width=100% cellpadding=1 cellspacing=0>'
		html += '<tr>'
		html += '<td width=40%>' + 'Diarrea . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .' + '</td>'
		html += '<td width=60%>' + hojaenfer_rel_busca_hoja.hoediarre + '</td>'
		html += '</tr>'
		html += '</table>'
		html += '</body></html>'
		dsAux.addRow([html]);
	}
	
	// Vomitos
	if(hojaenfer_rel_busca_hoja.hoevomito > 0){
		html = ''
		html += '<html><body>'
		html += '<table width=100% cellpadding=1 cellspacing=0>'
		html += '<tr>'
		html += '<td width=40%>' + 'Vomitos . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .' + '</td>'
		html += '<td width=60%>' + hojaenfer_rel_busca_hoja.hoevomito + '</td>'
		html += '</tr>'
		html += '</table>'
		html += '</body></html>'
		dsAux.addRow([html]);
	}
	
	// Colostomia
	if(hojaenfer_rel_busca_hoja.hoecolost > 0){
		html = ''
		html += '<html><body>'
		html += '<table width=100% cellpadding=1 cellspacing=0>'
		html += '<tr>'
		html += '<td width=40%>' + 'Colostomia . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .' + '</td>'
		html += '<td width=60%>' + hojaenfer_rel_busca_hoja.hoecolost + '</td>'
		html += '</tr>'
		html += '</table>'
		html += '</body></html>'
		dsAux.addRow([html]);
	}
	
	// Estudios
	if(utils.stringTrim(hojaenfer_rel_busca_hoja.hoeestud).length > 0){
		html = ''
		html += '<html><body>'
		html += '<table width=100% cellpadding=1 cellspacing=0>'
		html += '<tr>'
		html += '<td width=40%>' + 'Estudios . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .' + '</td>'
		html += '<td width=60%>' + utils.stringTrim(hojaenfer_rel_busca_hoja.hoeestud) + '</td>'
		html += '</tr>'
		html += '</table>'
		html += '</body></html>'
		dsAux.addRow([html]);
	}
	
	// laboratorio
	if(utils.stringTrim(hojaenfer_rel_busca_hoja.hoelabora).length > 0){
		html = ''
		html += '<html><body>'
		html += '<table width=100% cellpadding=1 cellspacing=0>'
		html += '<tr>'
		html += '<td width=40%>' + 'Laboratorio . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .' + '</td>'
		html += '<td width=60%>' + utils.stringTrim(hojaenfer_rel_busca_hoja.hoelabora) + '</td>'
		html += '</tr>'
		html += '</table>'
		html += '</body></html>'
		dsAux.addRow([html]);
	}
	
	// Bacteriologia
	if(utils.stringTrim(hojaenfer_rel_busca_hoja.hoebacter).length > 0){
		html = ''
		html += '<html><body>'
		html += '<table width=100% cellpadding=1 cellspacing=0>'
		html += '<tr>'
		html += '<td width=40%>' + 'Bacteriologia . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .' + '</td>'
		html += '<td width=60%>' + utils.stringTrim(hojaenfer_rel_busca_hoja.hoebacter) + '</td>'
		html += '</tr>'
		html += '</table>'
		html += '</body></html>'
		dsAux.addRow([html]);
	}
	
	// Dolor
	if(utils.stringTrim(hojaenfer_rel_busca_hoja.hoedolor).length > 0){
		html = ''
		html += '<html><body>'
		html += '<table width=100% cellpadding=1 cellspacing=0>'
		html += '<tr>'
		html += '<td width=40%>' + 'Dolor . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .' + '</td>'
		html += '<td width=60%>' + utils.stringTrim(hojaenfer_rel_busca_hoja.hoedolor) + '</td>'
		html += '</tr>'
		html += '</table>'
		html += '</body></html>'
		dsAux.addRow([html]);
	}
	
	// Conciencia
	html = ''
	html += '<html><body>'
	html += '<table width=100% cellpadding=1 cellspacing=0>'
	html += '<tr>'
	html += '<td width=40%>' + 'Conciencia . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . ' + '</td>'
	html += '<td width=60%>' + application.getValueListDisplayValue('hojaenfer_vl_conciencia',hojaenfer_rel_busca_hoja.hoeconcie) + '</td>'
	html += '</tr>'
	html += '</table>'
	html += '</body></html>'
	dsAux.addRow([html]);
	
	// Disnea
	if(utils.stringTrim(hojaenfer_rel_busca_hoja.hoedisnea).length > 0){
		html = ''
		html += '<html><body>'
		html += '<table width=100% cellpadding=1 cellspacing=0>'
		html += '<tr>'
		html += '<td width=40%>' + 'Disnea . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . ' + '</td>'
		html += '<td width=60%>' + hojaenfer_rel_busca_hoja.hoedisnea + '</td>'
		html += '</tr>'
		html += '</table>'
		html += '</body></html>'
		dsAux.addRow([html]);
	}
	
	// Broncoespasmo
	if(utils.stringTrim(hojaenfer_rel_busca_hoja.hoebronco).length > 0){
		html = ''
		html += '<html><body>'
		html += '<table width=100% cellpadding=1 cellspacing=0>'
		html += '<tr>'
		html += '<td width=40%>' + 'Broncoespasmo . . . . . . . . . . . . . . . . . . . . . . . . . . . .' + '</td>'
		html += '<td width=60%>' + hojaenfer_rel_busca_hoja.hoebronco + '</td>'
		html += '</tr>'
		html += '</table>'
		html += '</body></html>'
		dsAux.addRow([html]);
	}
	
	// Secreciones
	html = ''
	html += '<html><body>'
	html += '<table width=100% cellpadding=1 cellspacing=0>'
	html += '<tr>'
	html += '<td width=40%>' + 'Secreciones . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .' + '</td>'
	html += '<td width=60%>' + hojaenfer_rel_busca_hoja.hoeconcie == 1? "NO":"SI" + '</td>'
	html += '</tr>'
	html += '</table>'
	html += '</body></html>'
	dsAux.addRow([html]);
	
	// Hemorragia digestiva
	if(utils.stringTrim(hojaenfer_rel_busca_hoja.hoehemdig).length > 0){
		html = ''
		html += '<html><body>'
		html += '<table width=100% cellpadding=1 cellspacing=0>'
		html += '<tr>'
		html += '<td width=40%>' + 'Hemorragia digestiva . . . . . . . . . . . . . . . . . . . . . . . .' + '</td>'
		html += '<td width=60%>' + hojaenfer_rel_busca_hoja.hoehemdig + '</td>'
		html += '</tr>'
		html += '</table>'
		html += '</body></html>'
		dsAux.addRow([html]);
	}
	
	// Convulsiones
	if(hojaenfer_rel_busca_hoja.hoeconvul > 0){
		html = ''
		html += '<html><body>'
		html += '<table width=100% cellpadding=1 cellspacing=0>'
		html += '<tr>'
		html += '<td width=40%>' + 'Convulsiones . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .' + '</td>'
		html += '<td width=60%>' + hojaenfer_rel_busca_hoja.hoeconvul + '</td>'
		html += '</tr>'
		html += '</table>'
		html += '</body></html>'
		dsAux.addRow([html]);
	}
	
	// Medicacion cumplida
	html = ''
	html += '<html><body>'
	html += '<table width=100% cellpadding=1 cellspacing=0>'
	html += '<tr>'
	html += '<td width=40%>' + 'Medicacion cumplida . . . . . . . . . . . . . . . . . . . . . . . .' + '</td>'
	html += '<td width=60%>' + hojaenfer_rel_busca_hoja.hoemedcum + '</td>'
	html += '</tr>'
	html += '</table>'
	html += '</body></html>'
	dsAux.addRow([html]);
	
	//Higiene y Confort
	var higiene = null;
	if(hojaenfer_rel_busca_hoja.hoeopchigcon_1 == 1)
		higiene = " por sus medios";
	
	if(higiene == null){
		if(hojaenfer_rel_busca_hoja.hoeopchigcon_2 == 1)
			higiene = "segun necesidad";
	}
	else{
		if(hojaenfer_rel_busca_hoja.hoeopchigcon_2 == 1)
			higiene += " / segun necesidad";
	}
	
	if(higiene == null){
		if(hojaenfer_rel_busca_hoja.hoeopchigcon_3 == 1)
			higiene = "cada 3 horas";
	}
	else{
		if(hojaenfer_rel_busca_hoja.hoeopchigcon_3 == 1)
			higiene += " / cada 3 horas";
	}
	
	if(higiene == null){
		if(hojaenfer_rel_busca_hoja.hoeopchigcon_4 == 1)
			higiene = "baño en cama";
	}
	else{
		if(hojaenfer_rel_busca_hoja.hoeopchigcon_4 == 1)
			higiene += " / baño en cama";
	}
	
	if(higiene == null){
		if(hojaenfer_rel_busca_hoja.hoeopchigcon_5 == 1)
			higiene = "baño en ducha";
	}
	else{
		if(hojaenfer_rel_busca_hoja.hoeopchigcon_5 == 1)
			higiene += " / baño en ducha";
	}
	
	html = ''
	html += '<html><body>'
	html += '<table width=100% cellpadding=1 cellspacing=0>'
	html += '<tr>'
	html += '<td width=40%>' + 'Higiene y Confort . . . . . . . . . . . . . . . . . . . . . . . . . . .' + '</td>'
	html += '<td width=60%>' + hojaenfer_rel_busca_hoja.hoehigcon + ' ' + (higiene == null ? "":" / " + higiene) + '</td>'
	html += '</tr>'
	html += '</table>'
	html += '</body></html>'
	dsAux.addRow([html]);
	
	// Cambio de decubito
	html = ''
	html += '<html><body>'
	html += '<table width=100% cellpadding=1 cellspacing=0>'
	html += '<tr>'
	html += '<td width=40%>' + 'Cambio de decubito . . . . . . . . . . . . . . . . . . . . . . . . .' + '</td>'
	html += '<td width=60%>' + hojaenfer_rel_busca_hoja.hoecbiode  + ' ' + (hojaenfer_rel_busca_hoja.hoeopccbiode > 0 ? application.getValueListDisplayValue('hojaenfer_vl_hoeopccbiode',hojaenfer_rel_busca_hoja.hoeopccbiode) : "") + '</td>'
	html += '</tr>'
	html += '</table>'
	html += '</body></html>'
	dsAux.addRow([html]);
	
	// Colocacion de Via / Via Periferica
	if(utils.stringTrim( hojaenfer_rel_busca_hoja.hoecolviap).length > 0){
		
		if($_fecha < 20110523 || ($_fecha == 20110523 && $_hora < 1000)){
			html = ''
			html += '<html><body>'
			html += '<table width=100% cellpadding=1 cellspacing=0>'
			html += '<tr>'
			html += '<td width=40%>' + 'Colocacion de Via . . . . . . . . . . . . . . . . . . . . . . . . . . . .' + '</td>'
			html += '<td width=60%>' + hojaenfer_rel_busca_hoja.hoecolviap + '</td>'
			html += '</tr>'
			html += '</table>'
			html += '</body></html>'
			dsAux.addRow([html]);
		}
		else{
			
			var via = null;
			if(hojaenfer_rel_busca_hoja.hoeopccolviap_1 == 1)
				via = " Colocacion";
			
			if(via == null){
				if(hojaenfer_rel_busca_hoja.hoeopccolviap_2 == 1)
					via = "Curacion";
			}
			else{
				if(hojaenfer_rel_busca_hoja.hoeopccolviap_2 == 1)
					via += " / Curacion";
			}
			
			if(via == null){
				if(hojaenfer_rel_busca_hoja.hoeopccolviap_3 == 1)
					via = "Cambio";
			}
			else{
				if(hojaenfer_rel_busca_hoja.hoeopccolviap_3 == 1)
					via += " / Cambio";
			}
			
			html = ''
			html += '<html><body>'
			html += '<table width=100% cellpadding=1 cellspacing=0>'
			html += '<tr>'
			html += '<td width=40%>' + 'Via Periferica . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .' + '</td>'
			html += '<td width=60%>' + (via == null ? "":via) + '</td>'
			html += '</tr>'
			html += '</table>'
			html += '</body></html>'
			dsAux.addRow([html]);
		}
	}
	
	// Colocacion de Via Central
	if(hojaenfer_rel_busca_hoja.hoecolviac > 0){
		
		if(hojaenfer_rel_busca_hoja.hoecolviac == 1){
			
			html = ''
			html += '<html><body>'
			html += '<table width=100% cellpadding=1 cellspacing=0>'
			html += '<tr>'
			html += '<td width=40%>' + 'Colocacion de Via Central . . . .  . . . . . . . . . . . . . . .' + '</td>'
			html += '<td width=60%>' + "NO" + '</td>'
			html += '</tr>'
			html += '</table>'
			html += '</body></html>'
			dsAux.addRow([html]);
		}
		else{
			
			html = ''
			html += '<html><body>'
			html += '<table width=100% cellpadding=1 cellspacing=0>'
			html += '<tr>'
			html += '<td width=40%>' + 'Colocacion de Via Central . . . . . .  . . . . . . . . . . . . . .' + '</td>'
			html += '<td width=60%>' + "SI" + '</td>'
			html += '</tr>'
			html += '</table>'
			html += '</body></html>'
			dsAux.addRow([html]);
			
			html = ''
			html += '<html><body>'
			html += '<table width=100% cellpadding=1 cellspacing=0>'
			html += '<tr>'
			html += '<td width=40%>' + '&nbsp;&nbsp;.Gorro, barbijo, guantes y camisolin' + '</td>'
			html += '<td width=60%>' + "" +'</td>'
			html += '</tr>'
			html += '</table>'
			html += '</body></html>'
			dsAux.addRow([html]);
			
			html = ''
			html += '<html><body>'
			html += '<table width=100% cellpadding=1 cellspacing=0>'
			html += '<tr>'
			html += '<td width=40%>' + '&nbsp;&nbsp;.Antisepsia del sitio de insercion' + '</td>'
			html += '<td width=60%>' + "" + '</td>'
			html += '</tr>'
			html += '</table>'
			html += '</body></html>'
			dsAux.addRow([html]);
			
			html = ''
			html += '<html><body>'
			html += '<table width=100% cellpadding=1 cellspacing=0>'
			html += '<tr>'
			html += '<td width=40%>' + '&nbsp;&nbsp;.Cobertura con campos esteriles' + '</td>'
			html += '<td width=60%>' + "" + '</td>'
			html += '</tr>'
			html += '</table>'
			html += '</body></html>'
			dsAux.addRow([html]);
			
			html = ''
			html += '<html><body>'
			html += '<table width=100% cellpadding=1 cellspacing=0>'
			html += '<tr>'
			html += '<td width=40%>' + '&nbsp;&nbsp;.Doble operador' + '</td>'
			html += '<td width=60%>' + "" + '</td>'
			html += '</tr>'
			html += '</table>'
			html += '</body></html>'
			dsAux.addRow([html]);
			
			html = ''
			html += '<html><body>'
			html += '<table width=100% cellpadding=1 cellspacing=0>'
			html += '<tr>'
			html += '<td width=40%>' + '&nbsp;&nbsp;.Cobertura con gasa esteril del sitio de insercion' + '</td>'
			html += '<td width=60%>' + "" + '</td>'
			html += '</tr>'
			html += '</table>'
			html += '</body></html>'
			dsAux.addRow([html]);
		}
	}
		// Colocacion de K108
		if( utils.stringTrim( hojaenfer_rel_busca_hoja.hoecolk108).length > 0){
			html = ''
			html += '<html><body>'
			html += '<table width=100% cellpadding=1 cellspacing=0>'
			html += '<tr>'
			html += '<td width=40%>' + 'Colocacion de K108 . . . . . . . . . . . . . . . . . . . . . . . . .' + '</td>'
			html += '<td width=60%>' + hojaenfer_rel_busca_hoja.hoecolk108 + '</td>'
			html += '</tr>'
			html += '</table>'
			html += '</body></html>'
			dsAux.addRow([html]);
		}
		
		// Colocacion de SNG
		if( utils.stringTrim( hojaenfer_rel_busca_hoja.hoecolsng).length > 0){
			html = ''
			html += '<html><body>'
			html += '<table width=100% cellpadding=1 cellspacing=0>'
			html += '<tr>'
			html += '<td width=40%>' + 'Colocacion de SNG . . . . . . . . . . . . . . . . . . . . . . . . .' + '</td>'
			html += '<td width=60%>' + hojaenfer_rel_busca_hoja.hoecolsng + '</td>'
			html += '</tr>'
			html += '</table>'
			html += '</body></html>'
			dsAux.addRow([html]);
		}
		
		// Colocacion de SV
		if( hojaenfer_rel_busca_hoja.hoecolsv ==  1){
			html = ''
			html += '<html><body>'
			html += '<table width=100% cellpadding=1 cellspacing=0>'
			html += '<tr>'
			html += '<td width=40%>' + 'Colocacion de SV . . . . . . . . . . . . . . . . . . . . . . . . . .' + '</td>'
			html += '<td width=60%>' + "NO" + '</td>'
			html += '</tr>'
			html += '</table>'
			html += '</body></html>'
			dsAux.addRow([html]);
		}
		else{
			html = ''
			html += '<html><body>'
			html += '<table width=100% cellpadding=1 cellspacing=0>'
			html += '<tr>'
			html += '<td width=40%>' + 'Colocacion de SV . . . . . . . . . . . . . . . . . . . . . . . . . . .' + '</td>'
			html += '<td width=60%>' + "SI" + '</td>'
			html += '</tr>'
			html += '</table>'
			html += '</body></html>'
			dsAux.addRow([html]);
			
			html = ''
			html += '<html><body>'
			html += '<table width=100% cellpadding=1 cellspacing=0>'
			html += '<tr>'
			html += '<td width=40%>' + '&nbsp;&nbsp;.Higiene perineal' + '</td>'
			html += '<td width=60%>' + "" + '</td>'
			html += '</tr>'
			html += '</table>'
			html += '</body></html>'
			dsAux.addRow([html]);
			
			html = ''
			html += '<html><body>'
			html += '<table width=100% cellpadding=1 cellspacing=0>'
			html += '<tr>'
			html += '<td width=40%>' + '&nbsp;&nbsp;.Antisepsia perineal' + '</td>'
			html += '<td width=60%>' + "" + '</td>'
			html += '</tr>'
			html += '</table>'
			html += '</body></html>'
			dsAux.addRow([html]);
			
			html = ''
			html += '<html><body>'
			html += '<table width=100% cellpadding=1 cellspacing=0>'
			html += '<tr>'
			html += '<td width=40%>' + '&nbsp;&nbsp;.Tecnica aseptica' + '</td>'
			html += '<td width=60%>' + "" + '</td>'
			html += '</tr>'
			html += '</table>'
			html += '</body></html>'
			dsAux.addRow([html]);
			
			html = ''
			html += '<html><body>'
			html += '<table width=100% cellpadding=1 cellspacing=0>'
			html += '<tr>'
			html += '<td width=40%>' + '&nbsp;&nbsp;.Doble operador del balon segun indicacion' + '</td>'
			html += '<td width=60%>' + "" + '</td>'
			html += '</tr>'
			html += '</table>'
			html += '</body></html>'
			dsAux.addRow([html]);
		}
		
		// Paciente con SV
		if( hojaenfer_rel_busca_hoja.hoepaccsv > 0){
			
			if(hojaenfer_rel_busca_hoja.hoepaccsv == 1){
				html = ''
				html += '<html><body>'
				html += '<table width=100% cellpadding=1 cellspacing=0>'
				html += '<tr>'
				html += '<td width=40%>' + 'Paciente con SV . . . . . . . . . . . . . . . . . . . . . . . . . . .' + '</td>'
				html += '<td width=60%>' + "NO" + '</td>'
				html += '</tr>'
				html += '</table>'
				html += '</body></html>'
				dsAux.addRow([html]);
			}
			else{
				html = ''
				html += '<html><body>'
				html += '<table width=100% cellpadding=1 cellspacing=0>'
				html += '<tr>'
				html += '<td width=40%>' + 'Paciente con SV . . . . . . . . . . . . . . . . . . . . . . . . . . .' + '</td>'
				html += '<td width=60%>' + "SI" + '</td>'
				html += '</tr>'
				html += '</table>'
				html += '</body></html>'
				dsAux.addRow([html]);
				
				html = ''
				html += '<html><body>'
				html += '<table width=100% cellpadding=1 cellspacing=0>'
				html += '<tr>'
				html += '<td width=40%>' + '&nbsp;&nbsp;.Higiene perineal' + '</td>'
				html += '<td width=60%>' + "" + '</td>'
				html += '</tr>'
				html += '</table>'
				html += '</body></html>'
				dsAux.addRow([html]);
				
				html = ''
				html += '<html><body>'
				html += '<table width=100% cellpadding=1 cellspacing=0>'
				html += '<tr>'
				html += '<td width=40%>' + '&nbsp;&nbsp;.Bolsa debajo del nivel de la cadera' + '</td>'
				html += '<td width=60%>' + "" + '</td>'
				html += '</tr>'
				html += '</table>'
				html += '</body></html>'
				dsAux.addRow([html]);
				
				html = ''
				html += '<html><body>'
				html += '<table width=100% cellpadding=1 cellspacing=0>'
				html += '<tr>'
				html += '<td width=40%>' + '&nbsp;&nbsp;.Sonda libre de obstrucciones y acodaduras' + '</td>'
				html += '<td width=60%>' + "" + '</td>'
				html += '</tr>'
				html += '</table>'
				html += '</body></html>'
				dsAux.addRow([html]);
				
				html = ''
				html += '<html><body>'
				html += '<table width=100% cellpadding=1 cellspacing=0>'
				html += '<tr>'
				html += '<td width=40%>' + '&nbsp;&nbsp;.Bolsa vacia' + '</td>'
				html += '<td width=60%>' + "" + '</td>'
				html += '</tr>'
				html += '</table>'
				html += '</body></html>'
				dsAux.addRow([html]);
				
			}
			
		}
	
		// Posicion del paciente
		html = ''
		html += '<html><body>'
		html += '<table width=100% cellpadding=1 cellspacing=0>'
		html += '<tr>'
		html += '<td width=40%>' + 'Posicion del paciente . . . . . . . . . . . . . . . . . . . . . . . .' + '</td>'
		html += '<td width=60%>' + application.getValueListDisplayValue('hojaenfer_vl_hoepospac',hojaenfer_rel_busca_hoja.hoepospac) + '</td>'
		html += '</tr>'
		html += '</table>'
		html += '</body></html>'
		dsAux.addRow([html]);
		
	// Traqueotomia
	if( utils.stringTrim(hojaenfer_rel_busca_hoja.hoetraqueo).length > 0){
		html = ''
		html += '<html><body>'
		html += '<table width=100% cellpadding=1 cellspacing=0>'
		html += '<tr>'
		html += '<td width=40%>' + 'Traqueotomia . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .' + '</td>'
		html += '<td width=60%>' + hojaenfer_rel_busca_hoja.hoetraqueo + '</td>'
		html += '</tr>'
		html += '</table>'
		html += '</body></html>'
		dsAux.addRow([html]);
	}
	
	// Ayuno
	if( utils.stringTrim(hojaenfer_rel_busca_hoja.hoeayuno).length > 0){
		html = ''
		html += '<html><body>'
		html += '<table width=100% cellpadding=1 cellspacing=0>'
		html += '<tr>'
		html += '<td width=40%>' + 'Ayuno . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .' + '</td>'
		html += '<td width=60%>' + hojaenfer_rel_busca_hoja.hoeayuno + '</td>'
		html += '</tr>'
		html += '</table>'
		html += '</body></html>'
		dsAux.addRow([html]);
	}
	
	// Alimentacion enteral
	if( hojaenfer_rel_busca_hoja.hoealient > 0){
		html = ''
		html += '<html><body>'
		html += '<table width=100% cellpadding=1 cellspacing=0>'
		html += '<tr>'
		html += '<td width=40%>' + 'Alimentacion enteral . . . . . . . . . . . . . . . . . . . . . . . .' + '</td>'
		html += '<td width=60%>' + hojaenfer_rel_busca_hoja.hoealient + '</td>'
		html += '</tr>'
		html += '</table>'
		html += '</body></html>'
		dsAux.addRow([html]);
	}
	
	// Enemas
	if( hojaenfer_rel_busca_hoja.hoeenema > 0){
		html = ''
		html += '<html><body>'
		html += '<table width=100% cellpadding=1 cellspacing=0>'
		html += '<tr>'
		html += '<td width=40%>' + 'Enemas . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .' + '</td>'
		html += '<td width=60%>' + hojaenfer_rel_busca_hoja.hoeenema + '</td>'
		html += '</tr>'
		html += '</table>'
		html += '</body></html>'
		dsAux.addRow([html]);
	}
	
	// Escaras curacion
	if(utils.stringTrim( hojaenfer_rel_busca_hoja.hoeesccur).length > 0){
		
		if($_fecha < 20110523 || ($_fecha == 20110523 && $_hora < 1000)){
			html = ''
			html += '<html><body>'
			html += '<table width=100% cellpadding=1 cellspacing=0>'
			html += '<tr>'
			html += '<td width=40%>' + 'Escaras, curacion . . . . . . . . . . . . . . . . . . . . . . . . . . . . .' + '</td>'
			html += '<td width=60%>' + hojaenfer_rel_busca_hoja.hoeesccur + '</td>'
			html += '</tr>'
			html += '</table>'
			html += '</body></html>'
			dsAux.addRow([html]);
		}
		else{
			
			var escCur = null;
			if(hojaenfer_rel_busca_hoja.hoeopcesccur_1 == 1)
				escCur = "Talica";
			
			if(escCur == null){
				if(hojaenfer_rel_busca_hoja.hoeopcesccur_2 == 1)
					via = "Sacro";
			}
			else{
				if(hojaenfer_rel_busca_hoja.hoeopcesccur_2 == 1)
					escCur += " / Sacro";
			}
			
			if(escCur == null){
				if(hojaenfer_rel_busca_hoja.hoeopcesccur_3 == 1)
					via = "Trocante";
			}
			else{
				if(hojaenfer_rel_busca_hoja.hoeopcesccur_3 == 1)
					escCur += " / Trocante";
			}
			
			if(escCur == null){
				if(hojaenfer_rel_busca_hoja.hoeopcesccur_4 == 1)
					via = "Omoplato";
			}
			else{
				if(hojaenfer_rel_busca_hoja.hoeopcesccur_4 == 1)
					escCur += " / Omoplato";
			}
			
			if(escCur == null){
				if(hojaenfer_rel_busca_hoja.hoeopcesccur_5 == 1)
					via = "Cabeza";
			}
			else{
				if(hojaenfer_rel_busca_hoja.hoeopcesccur_5 == 1)
					escCur += " / Cabeza";
			}
			
			if(escCur == null){
				if(hojaenfer_rel_busca_hoja.hoeopcesccur_6 == 1)
					via = "Gluteo";
			}
			else{
				if(hojaenfer_rel_busca_hoja.hoeopcesccur_6 == 1)
					escCur += " / Gluteo";
			}
			
			if(escCur == null){
				if(hojaenfer_rel_busca_hoja.hoeopcesccur_7 == 1)
					via = "Otra";
			}
			else{
				if(hojaenfer_rel_busca_hoja.hoeopcesccur_7 == 1)
					escCur += " / Otra";
			}
			
			html = ''
			html += '<html><body>'
			html += '<table width=100% cellpadding=1 cellspacing=0>'
			html += '<tr>'
			html += '<td width=40%>' + 'Escaras, curacion . . . . . . . . . . . . . . . . . . . . . . . . . .' + '</td>'
			html += '<td width=60%>' + (escCur == null ? "":escCur) + '</td>'
			html += '</tr>'
			html += '</table>'
			html += '</body></html>'
			dsAux.addRow([html]);
		}
	}
	
	// Inicio tolerancia V.O.
	if( utils.stringTrim(hojaenfer_rel_busca_hoja.hoetolvo).length > 0){
		html = ''
		html += '<html><body>'
		html += '<table width=100% cellpadding=1 cellspacing=0>'
		html += '<tr>'
		html += '<td width=40%>' + 'Inicio tolerancia V.O. . . . . . . . . . . . . . . . . . . . . . . . .' + '</td>'
		html += '<td width=60%>' + hojaenfer_rel_busca_hoja.hoetolvo + '</td>'
		html += '</tr>'
		html += '</table>'
		html += '</body></html>'
		dsAux.addRow([html]);
	}
	
	// Aspirac.Secreciones
	if( hojaenfer_rel_busca_hoja.hoeaspsec > 0){
		html = ''
		html += '<html><body>'
		html += '<table width=100% cellpadding=1 cellspacing=0>'
		html += '<tr>'
		html += '<td width=40%>' + 'Aspirac.Secreciones . . . . . . . . . . . . . . . . . . . . . . . .' + '</td>'
		html += '<td width=60%>' + hojaenfer_rel_busca_hoja.hoeaspsec + '</td>'
		html += '</tr>'
		html += '</table>'
		html += '</body></html>'
		dsAux.addRow([html]);
		
		html = ''
		html += '<html><body>'
		html += '<table width=100% cellpadding=1 cellspacing=0>'
		html += '<tr>'
		html += '<td width=40%>' + '&nbsp;&nbsp;.Tecnica aseptica' + '</td>'
		html += '<td width=60%>' + "" + '</td>'
		html += '</tr>'
		html += '</table>'
		html += '</body></html>'
		dsAux.addRow([html]);
		
		html = ''
		html += '<html><body>'
		html += '<table width=100% cellpadding=1 cellspacing=0>'
		html += '<tr>'
		html += '<td width=40%>' + '&nbsp;&nbsp;.Doble operador' + '</td>'
		html += '<td width=60%>' + "" + '</td>'
		html += '</tr>'
		html += '</table>'
		html += '</body></html>'
		dsAux.addRow([html]);
	}
	else{
		html = ''
		html += '<html><body>'
		html += '<table width=100% cellpadding=1 cellspacing=0>'
		html += '<tr>'
		html += '<td width=40%>' + 'Aspirac.Secreciones . . . . . . . . . . . . . . . . . . . . . . . .' + '</td>'
		html += '<td width=60%>' + "NO" + '</td>'
		html += '</tr>'
		html += '</table>'
		html += '</body></html>'
		dsAux.addRow([html]);
		
	}

	// Paciente con Via Central / Via Central: Curac./Cambio
	if(hojaenfer_rel_busca_hoja.hoeviacur > 0){
		
		var titulo ="";
		if($_fecha < 20110523 || ($_fecha == 20110523 && $_hora < 1000))
			titulo = "Paciente con Via Central";
		else
			titulo = "Via Central: Curac./Cambio";
		
		if(hojaenfer_rel_busca_hoja.hoeviacur == 1){
			html = ''
			html += '<html><body>'
			html += '<table width=100% cellpadding=1 cellspacing=0>'
			html += '<tr>'
			html += '<td width=40%>' + titulo + ' . . . . . . . . . . . . . . . . . .' + '</td>'
			html += '<td width=60%>' + "NO" + '</td>'
			html += '</tr>'
			html += '</table>'
			html += '</body></html>'
			dsAux.addRow([html]);
			
		}
		else{
			var viaCur = null;
			if(hojaenfer_rel_busca_hoja.hoeopcviacur_1 == 1)
				viaCur = " Curacion";
			
			if(viaCur == null){
				if(hojaenfer_rel_busca_hoja.hoeopcviacur_2 == 1)
					viaCur = "Cambio";
			}
			else{
				if(hojaenfer_rel_busca_hoja.hoeopcviacur_2 == 1)
					viaCur += " / Cambio";
			}
						
			html = ''
			html += '<html><body>'
			html += '<table width=100% cellpadding=1 cellspacing=0>'
			html += '<tr>'
			html += '<td width=40%>' + titulo + ' . . . . . . . . . . . . . . . . . .' + '</td>'
			html += '<td width=60%>' + (viaCur == null ? "":viaCur) + '</td>'
			html += '</tr>'
			html += '</table>'
			html += '</body></html>'
			dsAux.addRow([html]);
		}
		
	}
	
	// Curaciones
	if(hojaenfer_rel_busca_hoja.hoecurac > 0){
		
		if(hojaenfer_rel_busca_hoja.hoecurac == 1){
			html = ''
			html += '<html><body>'
			html += '<table width=100% cellpadding=1 cellspacing=0>'
			html += '<tr>'
			html += '<td width=40%>' + 'Curaciones . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .' + '</td>'
			html += '<td width=60%>' + "NO" + '</td>'
			html += '</tr>'
			html += '</table>'
			html += '</body></html>'
			dsAux.addRow([html]);
			
		}
		else{
			var curacion = null;
			if(hojaenfer_rel_busca_hoja.hoeopccurac_1 == 1)
				curacion = "heridas";
			
			if(curacion == null){
				if(hojaenfer_rel_busca_hoja.hoeopccurac_2 == 1)
					curacion = "escaras";
			}
			else{
				if(hojaenfer_rel_busca_hoja.hoeopccurac_2 == 1)
					curacion += " / escaras";
			}
			
			if(curacion == null){
				if(hojaenfer_rel_busca_hoja.hoeopccurac_3 == 1)
					curacion = "piel";
			}
			else{
				if(hojaenfer_rel_busca_hoja.hoeopccurac_3 == 1)
					curacion += " / piel";
			}
			
			if(curacion == null){
				if(hojaenfer_rel_busca_hoja.hoeopccurac_4 == 1)
					curacion = "otras";
			}
			else{
				if(hojaenfer_rel_busca_hoja.hoeopccurac_4 == 1)
					curacion += " / otras";
			}
						
			html = ''
			html += '<html><body>'
			html += '<table width=100% cellpadding=1 cellspacing=0>'
			html += '<tr>'
			html += '<td width=40%>' + 'Curaciones . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .' + '</td>'
			html += '<td width=60%>' + (curacion == null ? "":curacion) + '</td>'
			html += '</tr>'
			html += '</table>'
			html += '</body></html>'
			dsAux.addRow([html]);
		}
	}
	
	// Preparac.p/cirugia
	if( utils.stringTrim( hojaenfer_rel_busca_hoja.hoeprecir).length > 0){
		html = ''
		html += '<html><body>'
		html += '<table width=100% cellpadding=1 cellspacing=0>'
		html += '<tr>'
		html += '<td width=40%>' + 'Preparac.p/cirugia . . . . . . . . . . . . . . . . . . . . . . . . . .' + '</td>'
		html += '<td width=60%>' + hojaenfer_rel_busca_hoja.hoeprecir + '</td>'
		html += '</tr>'
		html += '</table>'
		html += '</body></html>'
		dsAux.addRow([html]);
	}
	
	// Colaborac.en alimentacion
	if( utils.stringTrim( hojaenfer_rel_busca_hoja.hoecolali).length > 0){
		html = ''
		html += '<html><body>'
		html += '<table width=100% cellpadding=1 cellspacing=0>'
		html += '<tr>'
		html += '<td width=40%>' + 'Colaborac.en alimentacion . . . . . . . . . . . . . . . . . . .' + '</td>'
		html += '<td width=60%>' + hojaenfer_rel_busca_hoja.hoecolali + '</td>'
		html += '</tr>'
		html += '</table>'
		html += '</body></html>'
		dsAux.addRow([html]);
	}
	
	// Presencia Fliar./cuidadora
	if( hojaenfer_rel_busca_hoja.hoepresfl == 1){
		html = ''
		html += '<html><body>'
		html += '<table width=100% cellpadding=1 cellspacing=0>'
		html += '<tr>'
		html += '<td width=40%>' + 'Presencia Fliar./cuidadora . . . . . . . . . . . . . . . . . . .' + '</td>'
		html += '<td width=60%>' + "NO" + '</td>'
		html += '</tr>'
		html += '</table>'
		html += '</body></html>'
		dsAux.addRow([html]);
	}
	else{
		html = ''
		html += '<html><body>'
		html += '<table width=100% cellpadding=1 cellspacing=0>'
		html += '<tr>'
		html += '<td width=40%>' + 'Presencia Fliar./cuidadora . . . . . . . . . . . . . . . . . . .' + '</td>'
		html += '<td width=60%>' + "SI" + '</td>'
		html += '</tr>'
		html += '</table>'
		html += '</body></html>'
		dsAux.addRow([html]);
	}
	
	// Uso de barandas
	html = ''
	html += '<html><body>'
	html += '<table width=100% cellpadding=1 cellspacing=0>'
	html += '<tr>'
	html += '<td width=40%>' + 'Uso de barandas . . . . . . . . . . . . . . . . . . . . . . . . . . .' + '</td>'
	html += '<td width=60%>' + hojaenfer_rel_busca_hoja.hoebaran + '</td>'
	html += '</tr>'
	html += '</table>'
	html += '</body></html>'
	dsAux.addRow([html]);
	
	// Llamados Medico
	if( hojaenfer_rel_busca_hoja.hoellamamed > 0){
		html = ''
		html += '<html><body>'
		html += '<table width=100% cellpadding=1 cellspacing=0>'
		html += '<tr>'
		html += '<td width=40%>' + 'Llamados Medico . . . . . . . . . . . . . . . . . . . . . . . . . .' + '</td>'
		html += '<td width=60%>' + hojaenfer_rel_busca_hoja.hoellamamed + '</td>'
		html += '</tr>'
		html += '</table>'
		html += '</body></html>'
		dsAux.addRow([html]);
	}
	
	// Aislamiento
	if( hojaenfer_rel_busca_hoja.hoeaislam > 0){
		html = ''
		html += '<html><body>'
		html += '<table width=100% cellpadding=1 cellspacing=0>'
		html += '<tr>'
		html += '<td width=40%>' + 'Aislamiento . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .' + '</td>'
		html += '<td width=60%>' + application.getValueListDisplayValue('hojaenfer_vl_hoeaislam',hojaenfer_rel_busca_hoja.hoeaislam) + '</td>'
		html += '</tr>'
		html += '</table>'
		html += '</body></html>'
		dsAux.addRow([html]);
	}
	
	// Obito
	if( utils.stringTrim(hojaenfer_rel_busca_hoja.hoeobito).length > 0){
		html = ''
		html += '<html><body>'
		html += '<table width=100% cellpadding=1 cellspacing=0>'
		html += '<tr>'
		html += '<td width=40%>' + 'Obito . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .' + '</td>'
		html += '<td width=60%>' + hojaenfer_rel_busca_hoja.hoeobito + '</td>'
		html += '</tr>'
		html += '</table>'
		html += '</body></html>'
		dsAux.addRow([html]);
	}
	
	// Pase a otro sector
	if( hojaenfer_rel_busca_hoja.hoepasesec > 0){
		html = ''
		html += '<html><body>'
		html += '<table width=100% cellpadding=1 cellspacing=0>'
		html += '<tr>'
		html += '<td width=40%>' + 'Pase a otro sector . . . . . . . . . . . . . . . . . . . . . . . . . .' + '</td>'
		html += '<td width=60%>' + application.getValueListDisplayValue('hojaenfer_vl_hoepasesec',hojaenfer_rel_busca_hoja.hoepasesec) + '</td>'
		html += '</tr>'
		html += '</table>'
		html += '</body></html>'
		dsAux.addRow([html]);
	}
	
	// Higiene bucal
	html = ''
	html += '<html><body>'
	html += '<table width=100% cellpadding=1 cellspacing=0>'
	html += '<tr>'
	html += '<td width=40%>' + 'Higiene bucal . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .' + '</td>'
	html += '<td width=60%>' + application.getValueListDisplayValue('hojaenfer_vl_hoehigbuc',hojaenfer_rel_busca_hoja.hoehigbuc) + '</td>'
	html += '</tr>'
	html += '</table>'
	html += '</body></html>'
	dsAux.addRow([html]);
	
	if( hojaenfer_rel_busca_hoja.hoehigbuc == 1){
		html = ''
		html += '<html><body>'
		html += '<table width=100% cellpadding=1 cellspacing=0>'
		html += '<tr>'
		html += '<td width=40%>' + '&nbsp;&nbsp;a.Se indica al paciente realizarse higiene bucal' + '</td>'
		html += '<td width=60%>' + "" + '</td>'
		html += '</tr>'
		html += '</table>'
		html += '</body></html>'
		dsAux.addRow([html]);
		
		html = ''
		html += '<html><body>'
		html += '<table width=100% cellpadding=1 cellspacing=0>'
		html += '<tr>'
		html += '<td width=40%>' + '&nbsp;&nbsp;b.Se explica al paciente tecnica adecuada' + '</td>'
		html += '<td width=60%>' + "" + '</td>'
		html += '</tr>'
		html += '</table>'
		html += '</body></html>'
		dsAux.addRow([html]);
		
		html = ''
		html += '<html><body>'
		html += '<table width=100% cellpadding=1 cellspacing=0>'
		html += '<tr>'
		html += '<td width=40%>' + '&nbsp;&nbsp;c.Se proveen materiales auxiliares' + '</td>'
		html += '<td width=60%>' + "" + '</td>'
		html += '</tr>'
		html += '</table>'
		html += '</body></html>'
		dsAux.addRow([html]);
	}
	
	if( hojaenfer_rel_busca_hoja.hoehigbuc == 2){
		html = ''
		html += '<html><body>'
		html += '<table width=100% cellpadding=1 cellspacing=0>'
		html += '<tr>'
		html += '<td width=40%>' + '&nbsp;&nbsp;a.Se informa al paciente la higiene que se le realizara' + '</td>'
		html += '<td width=60%>' + "" + '</td>'
		html += '</tr>'
		html += '</table>'
		html += '</body></html>'
		dsAux.addRow([html]);
		
		html = ''
		html += '<html><body>'
		html += '<table width=100% cellpadding=1 cellspacing=0>'
		html += '<tr>'
		html += '<td width=40%>' + '&nbsp;&nbsp;b.Se protegen ropas de paciente y cama' + '</td>'
		html += '<td width=60%>' + "" + '</td>'
		html += '</tr>'
		html += '</table>'
		html += '</body></html>'
		dsAux.addRow([html]);
		
		html = ''
		html += '<html><body>'
		html += '<table width=100% cellpadding=1 cellspacing=0>'
		html += '<tr>'
		html += '<td width=40%>' + '&nbsp;&nbsp;c.Se examinan mucosas, encias, lengua y dientes' + '</td>'
		html += '<td width=60%>' + "" + '</td>'
		html += '</tr>'
		html += '</table>'
		html += '</body></html>'
		dsAux.addRow([html]);
		
		html = ''
		html += '<html><body>'
		html += '<table width=100% cellpadding=1 cellspacing=0>'
		html += '<tr>'
		html += '<td width=40%>' + '&nbsp;&nbsp;d.Se higieniza segun tecnica, se enjuaga con solucion antiseptica' + '</td>'
		html += '<td width=60%>' + "" + '</td>'
		html += '</tr>'
		html += '</table>'
		html += '</body></html>'
		dsAux.addRow([html]);
	}
	
	if( hojaenfer_rel_busca_hoja.hoehigbuc == 3){
		html = ''
		html += '<html><body>'
		html += '<table width=100% cellpadding=1 cellspacing=0>'
		html += '<tr>'
		html += '<td width=40%>' + '&nbsp;&nbsp;a.Se valora estado de la cavidad bucal' + '</td>'
		html += '<td width=60%>' + "" + '</td>'
		html += '</tr>'
		html += '</table>'
		html += '</body></html>'
		dsAux.addRow([html]);
		
		html = ''
		html += '<html><body>'
		html += '<table width=100% cellpadding=1 cellspacing=0>'
		html += '<tr>'
		html += '<td width=40%>' + '&nbsp;&nbsp;b.Se aplica vaselina solida durante 15 minutos' + '</td>'
		html += '<td width=60%>' + "" + '</td>'
		html += '</tr>'
		html += '</table>'
		html += '</body></html>'
		dsAux.addRow([html]);
		
		html = ''
		html += '<html><body>'
		html += '<table width=100% cellpadding=1 cellspacing=0>'
		html += '<tr>'
		html += '<td width=40%>' + '&nbsp;&nbsp;c.Se protegen ropas de paciente y cama' + '</td>'
		html += '<td width=60%>' + "" + '</td>'
		html += '</tr>'
		html += '</table>'
		html += '</body></html>'
		dsAux.addRow([html]);
		
		html = ''
		html += '<html><body>'
		html += '<table width=100% cellpadding=1 cellspacing=0>'
		html += '<tr>'
		html += '<td width=40%>' + '&nbsp;&nbsp;d.Se higieniza segun tecnica' + '</td>'
		html += '<td width=60%>' + "" + '</td>'
		html += '</tr>'
		html += '</table>'
		html += '</body></html>'
		dsAux.addRow([html]);
		
		html = ''
		html += '<html><body>'
		html += '<table width=100% cellpadding=1 cellspacing=0>'
		html += '<tr>'
		html += '<td width=40%>' + '&nbsp;&nbsp;e.Se coloca vaselina en los labios' + '</td>'
		html += '<td width=60%>' + "" + '</td>'
		html += '</tr>'
		html += '</table>'
		html += '</body></html>'
		dsAux.addRow([html]);
	}
	
	// linea en blanco
	html = ''
	html += '<html><body>'
    html += '<table width=100% cellpadding=1 cellspacing=0>'
	html += '<tr>'
	html += '<td>' + ' ' + '</td>'
	html += '</tr>'
	html += '</table>'
	html += '</body></html>'
	dsAux.addRow([html]);
	
	// Observacion
	if(hojaenfer_rel_busca_hoja.hoeobserva == 'X'){
		
		html = ''
		html += '<html><body>'
	    html += '<table width=100% cellpadding=1 cellspacing=0>'
		html += '<tr>'
		html += '<td width=50%>' + 'OBSERVACIONES : ' + '</td>'
		html += '<td width=50%>' + '                   ' + '</td>'
		html += '</tr>'
		html += '</table>'
		html += '</body></html>'
		dsAux.addRow([html]);
		
		var texto = utils.stringTrim(hojaenfer_rel_busca_observa.linea);
		// Si la observacion no esta en postgres lo buca en relativity
		if(utils.stringTrim(texto).length > 0){
			
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

			for (j = 1; j < lineas + 1; j++) {
				var vlarguito = texto.substr(posicionInicial, 78)
				if (vlarguito != '') {
					
					html = ''
					html += '<html><body>'
					html += '<table width=100% cellpadding=1 cellspacing=0>'
					html += '<tr>'
					html += '<td width=100%><p>' + texto.substr(posicionInicial, 78) + '</p></td>'
					html += '</tr>'
					html += '</table>'
					html += '</body></html>'
					dsAux.addRow([html]);
					
					posicionInicial = posicionInicial + 78;
					
				}
			}	
		}
		else{
			
			// Obteniendo datos de observacion de relativity
			var sqlObserva = "select ht.HoexLinea from tbc_hojentxt ht"
				+ " where ht.HoexHistClinica = " + globals.Hojaenfer_histClinPrint
				+ " and ht.HoexFecha = " + globals.Hojaenfer_fechaPrint
				+ " and ht.HoexHora = " + globals.Hojaenfer_horaPrint
				+ " and ht.HoexGrupo = " + 1
				+ " order by ht.HoexSecuencia";
				var ds_observa = databaseManager.getDataSetByQuery('asistencial',sqlObserva,null,-1);
			
			var k;
			for(k=1 ; k <= ds_observa.getMaxRowIndex() ; k++){
				
				html = ''
				html += '<html><body>'
				html += '<table width=100% cellpadding=1 cellspacing=0>'
				html += '<tr>'
				html += '<td width=100%><p>' + ds_observa.getValue(k,1); + '</p></td>'
				html += '</tr>'
				html += '</table>'
				html += '</body></html>'
				dsAux.addRow([html]);
			}
		}
	}
	
	// Enfermera/o
	var enfer = "INEXISTENTE";
	if(hojaenfer_rel_busca_enfermero.getSize() > 0)
		enfer = hojaenfer_rel_busca_enfermero.per_apelnom;
	
	// linea en blanco
	html = ''
	html += '<html><body>'
    html += '<table width=100% cellpadding=1 cellspacing=0>'
	html += '<tr>'
	html += '<td>' + ' ' + '</td>'
	html += '</tr>'
	html += '</table>'
	html += '</body></html>'
	dsAux.addRow([html]);
	
	html = ''
	html += '<html><body>'
    html += '<table width=100% cellpadding=1 cellspacing=0>'
	html += '<tr>'
	html += '<td align="center">' + 'Enfermera/o :&nbsp;&nbsp;' + enfer + '</td>'
	html += '</tr>'
	html += '</table>'
	html += '</body></html>'
	dsAux.addRow([html]);
	
	var $frm = solutionModel.getForm('Hojaenfer_print');
	var $tipos = [JSColumn.TEXT];
	$frm.dataSource = dsAux.createDataSource('Hojaenfer_print', $tipos);
	forms.Hojaenfer_print.controller.recreateUI();
	
}

/**
 * @properties={typeid:24,uuid:"DFF16E15-A354-4A63-B6DE-D593B808A222"}
 */
function imprimir() {
	controller.setPageFormat(210,297,10,10,10,10,1,0);
	controller.print(false,false);
}

/**
 * TODO generated, please specify type and doc for the params
 * @param value
 *
 * @properties={typeid:24,uuid:"E4E0EA24-02C6-4041-8272-A7EF32CD48A6"}
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
 * @param hora
 *
 * @properties={typeid:24,uuid:"15AB2613-D837-4C94-B239-915771F6932A"}
 */
function getTurnoSegunhora (hora){
	var turno = null;
	if(hora > 2159 && hora <=2359 ){
		turno = "Noche";
		$_horaSegunTurno = "a las 23hs."
	}
		
	if(hora >= 0  && hora < 600){
		turno = "Noche";
		$_horaSegunTurno = "a las 23hs." 
	}
		
	if(hora > 559 && hora < 1400){
		turno = "Mañana";
		$_horaSegunTurno = "a las 7hs."
	}
		
	
	if(hora > 1359 && hora < 2200){
		turno = "Tarde";
		$_horaSegunTurno = "a las 15hs."
	}
		
	
	return turno;
}
