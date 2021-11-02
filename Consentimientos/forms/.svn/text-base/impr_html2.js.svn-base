/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"0644E172-8B26-410E-841B-ADDAF588362D",variableType:93}
 */
var fecha_impre = new Date();

/**
 * @properties={typeid:24,uuid:"E17325B3-C0A5-487F-9A7E-B64131C5669F"}
 */
function sub_buildReport() {
	//forms.Ingreso_HTML.foundset.setSelectedIndex(4)
	//forms.impr_html.foundset.rtf_html = forms.Ingreso_HTML.foundset.rtf_html;
	globals.campoRTF = texto_to_consentimientos.rtf_html;
	globals.texto = globals.talon1
	globals.campoHTML1 = texto_to_consentimientos.rtf_html	
	globals.texto = globals.talon2
	globals.campoHTML2 = texto_to_consentimientos.rtf_html
	
	var html = ''
	html += '<html><body>'
	html += '<table width=100% cellpadding=0 cellspacing=0>'
	html += '<tr>'
	html += '<td width="35%" align="left"><p>Nombre y Apellido</font></p></td>'
	html += '<td width="60%" align="left"><p>' + globals.apeynom + '</td>'
	html += '</tr>'
	html += '<tr>'
	html += '<td width="35%" align="left"><p>Tipo y Nro. de Doc. </font></p></td>'
	html += '<td width="15%" align="left"><p>' + globals.tipo_docu + ' ' + globals.documento + '</p></td>'
	html += '<td width="15%" align="left"><p>Habitación </td>'
	html += '<td width="35%" align="left"><p>' + globals.habitacion + '</td>'
	html += '</tr>'
	html += '<tr>'
	html += '<td width="35%" align="left"><p>Número de Internación</font></p></td>'
	html += '<td width="15%" align="left"><p>' + globals.hist_clinica + '</td>'
	html += '<td width="15%" align="left"><p>Afiliado Nro.</td>'
	html += '<td width="35%" align="left"><p>' + globals.afiliado + '</td>'
	html += '</tr>'
	html += '<tr>'
	html += '<td width="22%" align="left"><p>Obra Social</font></p></td>'
	html += '<td width="30%" align="left"><p>' + globals.obra_social + '</td>'
	html += '</tr>'
	html += '</table></body></html>'
	globals.campoHTML = html	
}

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"5DE97CD1-3796-4597-A17E-ACF3F8A579F1"}
 */
function onLoad_inicializa_fecha(event) {
	fecha_impre = application.getServerTimeStamp()
}
