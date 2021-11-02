/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"9D4F7E57-B54D-4E39-BE69-184E5DD43CEF",variableType:93}
 */
var fecha_impre = new Date();

/**
 * @properties={typeid:24,uuid:"F2974D48-E13C-40AE-80BC-003C9B38DEA7"}
 */
function sub_buildReport() {
	globals.campoRTF = texto_to_consentimientos.rtf_html;
	
	var html = ''
	html += '<html><body>'
	html += '<table width=100% cellpadding=0 cellspacing=0>'
	html += '<tr>'
	html += '<td width="25%" align="left"><p>Nombre y Apellido</p></td>'
	html += '<td width="75%" align="left"><p>' + globals.apeynom + '</td>'
	html += '</tr>'
	html += '<tr>'
	html += '<td width="25%" align="left"><p>Tipo y Nro. de Doc. </p></td>'
	html += '<td width="75%" align="left"><p>' + globals.tipo_docu + ' ' + globals.documento + '</p></td>'
	html += '</tr>'
		
	html += '<tr>'
	html += '<td width="25%" align="left"><p>Domicilio</p></td>'
	html += '<td width="75%" align="left"><p>' + globals.domicilio + '</p></td>'
	html += '</tr>'
		
	html += '<tr>'
	html += '<td width="25%" align="left"><p>Número de Internación</p></td>'
	html += '<td width="75%" align="left"><p>' + globals.hist_clinica + '</td>'
	html += '</tr>'
	html += '<tr>'
	html += '<td width="25%" align="left"><p>Obra Social</p></td>'
	html += '<td width="75%" align="left"><p>' + globals.obra_social + '</td>'
	html += '</tr>'
	html += '</table></body></html>'
	globals.campoHTML = html	
}

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"D8D186B2-9F2D-4919-AFD0-940258E9F8B6"}
 */
function onLoad_inicializa_fecha(event) {
	fecha_impre = application.getServerTimeStamp()
}
