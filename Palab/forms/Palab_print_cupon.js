/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"B84D8FA8-D026-4D33-AA46-24BEEFD856AD"}
 */
var f_tipoDoc = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"F2479B4A-51F6-46A2-A9DF-8B29ADE18089",variableType:4}
 */
var f_protocolo = 0;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"E8008A72-81BD-43A2-90A1-C9E19809F030"}
 */
var f_html = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"CA92B765-96FE-4BDA-B027-EDA76FA4552F"}
 */
var f_nroDoc = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"7231959F-FD34-486E-9A18-903704A92F90"}
 */
var f_localidad = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"C97BF9A6-5B98-44D1-8854-8F5104D2E046"}
 */
var f_domicilio = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"1BC1227D-6A9F-4A60-9A59-EA7B4A34B5CE"}
 */
var f_fechaNac = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"FA7C288B-C5E9-4D7E-A4BD-3C2529E2164C"}
 */
var f_estado = '';

/**
 * @properties={typeid:35,uuid:"9CEC1E84-A552-48AA-8FFD-D479C115B9B8",variableType:-4}
 */
var dsAux = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"0BF15A02-9FD2-483C-A317-749409D3B655",variableType:93}
 */
var f_fechaImpresion = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"D5725B77-5DE0-41B2-9591-B0579E91233A"}
 */
var f_apelnom = null;

/**
 * @properties={typeid:24,uuid:"CCE0E580-AEC9-4D86-A858-1A72FA18DF33"}
 */
function limpiarForm (){
	
	f_apelnom = null;
	f_domicilio = null;
	f_estado = null;
	f_fechaImpresion = null;
	f_fechaNac = null;
	f_localidad = null;
	f_nroDoc = null;
	f_html = null;

	globals.Palab_hisclinPrint = 0;
}


/**
 * TODO generated, please specify type and doc for the params
 * @param {Number} histClin
 * @param {Number} protocolo
 * @param {Number} fecha
 * @param {Number} hora
 *
 * @properties={typeid:24,uuid:"A717F6D9-9EB4-4C4E-A969-99E6C6059E2C"}
 */
function imprimirHcipiso(histClin,protocolo,fecha,hora){
	
	limpiarForm();
	globals.Palab_hisclinPrint = histClin;
	
	if(palab_rel_buscar_admision_num_print .getSize() > 0){
		
		// cargar Header
		f_fechaImpresion = application.getServerTimeStamp();
		f_apelnom =  formatearHistclin(palab_rel_buscar_admision_num_print.adm_histclin) + "  " + utils.stringTrim(palab_rel_buscar_admision_num_print.adm_apelnom);
		f_estado = getEstadoCivil(palab_rel_buscar_admision_num_print.adm_estadocivil);
		var fechaNac = String(palab_rel_buscar_admision_num_print.adm_fecnac);
		f_fechaNac = fechaNac.substr(6,2) + "/" + fechaNac.substr(4,2) + "/" + fechaNac.substr(0,4);
		f_domicilio = utils.stringTrim(palab_rel_buscar_admision_num_print.adm_domicilio);
		f_localidad = utils.stringTrim(palab_rel_buscar_admision_num_print.adm_localidad);
		f_protocolo = protocolo;
		f_tipoDoc = getTipoDoc(palab_rel_buscar_admision_num_print.adm_tipdocu);
		f_nroDoc = palab_rel_buscar_admision_num_print.adm_nrodocu;
		
		// Cargar body
		cargarBody();
		imprimir();
	}
	else{
		globals.DIALOGS.showWarningDialog("Atención!","No hay datos para imprimir.","Aceptar")
	}
}

/**
 * @properties={typeid:24,uuid:"457B5016-43CB-47FB-9C0F-FC3CD5844609"}
 */
function cargarBody() {
		/*
	var dsAux1 = databaseManager.createEmptyDataSet();
	dsAux1.addColumn('html_hoja');
	dsAux1.addRow([' ']);
*/
	var espacio = '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
	var html = ''

	html = ''
	html += '<html><body>'
	//html += '<table width=100% cellpadding=1 cellspacing=0>'
	//html += '<tr>'
	//html += '<td width=100%>'
	/*	
	html += '<p>'+ espacio + 'Declaro en forma libre y voluntaria, con plena capacidad para</p>'
	html += '<p>ejercer mis derechos, que he sido ampliamente informado sobre la necesi-</p>'
	html += '<p>dad de someterme a una prueba diagnóstica para la detección indirecta del</p>'
	html += '<p>virus que transmite el SIDA (H.I.V.), mediante la técnica ELISA o simi-</p>'
	html += '<p>lar.</p>'
	html += '<p>' + espacio + 'A su vez, se me ha asegurado la confidencialidad de los resul-</p>'
	html += '<p>tados, como asi también el debido asesoramiento, en el caso de estar in-</p>'
	html += '<p>fectado por el virus HIV.</p>'
	html += '<p >' + espacio + 'Por todo lo expuesto, consiento expresamente a que se me efec-</p>'
	html += '<p>túe dicha prueba diagnóstica y en el caso de que fuesen positivos los</p>'
	html += '<p>primeros resultados, las que sean necesarias para la confirmación defi-</p>'
	html += '<p>nitiva.</p>'
	*/
	
	if(application.getOSName().charAt(0)=='L'){
		html +='<p >'+ espacio+'Declaro en forma libre y voluntaria, con plena capacidad para ejercer mis derechos,  que he sido '
		html +='ampliamente informado sobre la necesidad de someterme a una prueba diagnóstica para la detección indirecta del '
		html +='virus que transmite el SIDA (H.I.V.), mediante la técnica ELISA o similar.</p>'
		html +='<p >'+ espacio+'A su vez, se me ha asegurado la confidencialidad de los resultados,  como asi también el  debido '
		html +='asesoramiento, en el caso de estar infectado por el virus HIV.</p>'
		html +='<p >'+ espacio+'Por todo lo expuesto, consiento expresamente a que se me efectúe dicha prueba diagnóstica y en el '
		html +='caso de que fuesen positivos los primeros resultados, las que sean necesarias para la confirmación definitiva.</p>'
	}else{
		html +='<p >'+ espacio+'Declaro en forma libre y voluntaria, con plena capacidad para ejercer mis derechos,  que he sido ampliamente<br>'
		html +='informado sobre la necesidad de someterme a una prueba diagnóstica para la detección indirecta del virus que transmite el<br>'
		html +='SIDA (H.I.V.), mediante la técnica ELISA o similar.<br>'
		html +='<p >'+ espacio+'A su vez, se me ha asegurado la confidencialidad de los resultados, como asi también el debido asesoramiento,<br>'
		html +='en el caso de estar infectado por el virus HIV.<br>'
		html +='<p >'+ espacio+'Por todo lo expuesto, consiento expresamente a que se me efectúe dicha prueba diagnóstica y en el caso de<br>'
		html +='que fuesen positivos los primeros resultados, las que sean necesarias para la confirmación definitiva.<br>'
	}
	//html +=	'</td>'
	//html += '</tr>'
	//html += '</table>'
	html += '</body></html>'
	
	f_html = html;
	
	// actualizando lista de impresion
	/*
	var $frm = solutionModel.getForm('Palab_print_cupon');
	var $tipos = [JSColumn.TEXT];
	$frm.dataSource = dsAux1.createDataSource('Palab_print_cupon', $tipos);
	controller.recreateUI();
	*/
	
}

/**
 * @properties={typeid:24,uuid:"787AF445-9AB8-4ACE-B1D3-6A8C2C04A6A0"}
 */
function imprimir() {
	controller.setPageFormat(210,297,10,10,10,10,1,0);
	controller.print(false,false);
	
}

/**
 * TODO generated, please specify type and doc for the params
 * @param value
 *
 * @properties={typeid:24,uuid:"15762512-96DB-492D-A0F4-4B58D59E7389"}
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
 * @properties={typeid:24,uuid:"21601965-1477-4E67-B50D-DBA2AF3C680D"}
 */
function formatearHistclin(HistClin) {
	var histClin = '';
	if(arguments[0] != undefined)
		histClin =  HistClin.toString().substr(0,HistClin.toString().length-1)+"/"+HistClin.toString().substr(HistClin.toString().length -1,1)	

	return histClin;
}

/**
 * TODO generated, please specify type and doc for the params
 * @param codigo
 *
 * @properties={typeid:24,uuid:"899DB6C6-A2B9-4B0D-B355-11CCBDDC87B2"}
 */
function getEstadoCivil (codigo){
	var value = false;
	
	switch(codigo){
		
		case 1 : value = 'Soltero'; break; 
		case 2 : value = 'Casado'; break;
		case 3 : value = 'Divorciado'; break;
		case 4 : value = 'Viudo'; break;
		
		default : value = ''; break;
	}
	
	return value;
}

/**
 * TODO generated, please specify type and doc for the params
 * @param codigo
 *
 * @properties={typeid:24,uuid:"C3DE5070-AF87-4F67-B97C-56AF8313BBD8"}
 */
function getTipoDoc (codigo){
	var value = false;
	
	switch(codigo){
		
		case 1 : value = 'C.I.'; break; 
		case 2 : value = 'L.E.'; break;
		case 3 : value = 'L.C.'; break;
		case 4 : value = 'D.N.I'; break;
		case 5 : value = 'PASAP.'; break;
		
		default : value = ''; break;
	}
	
	return value;
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"AF19C1AA-5C7D-4C06-A60F-4A1D0251BB31"}
 */
function onShow_inicializarForm(firstShow, event) {
	
	// Inicializando foundset de impresion
	var dsAux1 = databaseManager.createEmptyDataSet();
	dsAux1.addColumn('html_hoja');
	dsAux1.addRow(['']);
	var $frm = solutionModel.getForm('Palab_print_cupon');
	var $tipos = [JSColumn.TEXT];
	$frm.dataSource = dsAux1.createDataSource('Palab_print_cupon', $tipos);
	forms.Palab_print_cupon.controller.recreateUI();
}
