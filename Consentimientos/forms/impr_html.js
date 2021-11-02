/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"37D2EF1D-AB9E-496B-80C3-332AEC33E4A3",variableType:93}
 */
var fecha_impre = new Date();

/**
 * @properties={typeid:24,uuid:"48CDF3D2-FCC9-4E2E-8AD9-5C3A3E72C9CD"}
 */
function sub_buildReport() {
	//forms.Ingreso_HTML.foundset.setSelectedIndex(4)
	//forms.impr_html.foundset.rtf_html = forms.Ingreso_HTML.foundset.rtf_html;
	globals.campoRTF = texto_to_consentimientos.rtf_html
	globals.texto = globals.talon1
	globals.campoHTML1 = texto_to_consentimientos.rtf_html	
	globals.texto = globals.talon2
	globals.campoHTML2 = texto_to_consentimientos.rtf_html
	
	var html = ''
	html += '<html><body>'
	html += '<table width=100% cellpadding=0 cellspacing=0>'
	html += '<tr>'
	html += '<td width="35%" align="left"><p>Nombre y Apellido</p></td>'
	html += '<td width="65%" align="left"><p>' + globals.apeynom + '</td>'
	html += '</tr>'
	html += '<tr>'
	html += '<td width="35%" align="left"><p>Tipo y Nro. de Doc. </p></td>'
	html += '<td width="15%" align="left"><p>' + globals.tipo_docu + ' ' + globals.documento + '</p></td>'
	html += '<td width="15%" align="left"><p>Habitación </td>'
	html += '<td width="35%" align="left"><p>' + globals.habitacion + '</td>'
	html += '</tr>'
	html += '<tr>'
	html += '<td width="35%" align="left"><p>Número de Internación</p></td>'
	html += '<td width="15%" align="left"><p>' + globals.hist_clinica + '</td>'
	html += '<td width="15%" align="left"><p>Afiliado Nro.</td>'
	html += '<td width="35%" align="left"><p>' + globals.afiliado + '</td>'
	html += '</tr>'
	html += '<tr>'
	html += '<td width="22%" align="left"><p>Obra Social</p></td>'
	html += '<td width="30%" align="left"><p>' + globals.obra_social + '</td>'
	html += '</tr>'
	html += '</table></body></html>'
	globals.campoHTML = html	
}

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"95F33459-8656-4CEA-BA03-C36066962AD6"}
 */
function onLoad_inicializa_fecha(event) {
	fecha_impre = application.getServerTimeStamp()
}
