/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"46AE1E55-044A-4C67-8F48-677306379D74",variableType:93}
 */
var fecha_impre = new Date();

/**
 * @properties={typeid:24,uuid:"0113AD5D-CF58-45EC-95D5-CD377A7251D1"}
 */
function sub_buildReport() {
	globals.campoRTF = texto_to_consentimientos.rtf_html;
	
	var html = ''
	html += '<html><body>'
	html += '<table width=100% cellpadding=0 cellspacing=0>'
	html += '<tr>'
	html += '<td width="75%" align="left"><p>Por la presente dejo constancia que el/la paciente ' + globals.apeynom + '</p></td>'
	html += '<td width="25%"  align="left"><p>con ' + globals.tipo_docu + ' ' + globals.documento +  '</p></td>'
	html += '</tr>'
	html += '</table>'
		
	html += '<table width=100% cellpadding=0 cellspacing=0>'	
	html += '<tr>'
    html += '<td width="47%" align="left"><p> ha ingresado al Sanatorio Colegiales para efectuarse un</p></td>'
	html += '<td width="53%" align="left"><p>procedimiento programado denominado _____________</p></td>'
	html += '</tr>'
	html += '</table>'

	html += '<table width=100% cellpadding=0 cellspacing=0>'	
	html += '<tr>'
	html += '<td width="100%" align="left"><p>_____________________________________________________________________________________________________________</p></td>'
	html += '</tr>'
	html += '</table>'
	
		
	html += '</table></body></html>'
	globals.campoHTML = html	
}

/** 
 * @param event
 *
 * @properties={typeid:24,uuid:"AEDB18C5-3E7D-424B-A32F-8DB62967CAA8"}
 */
function onLoad_inicializa_fecha(event) {
	fecha_impre = application.getServerTimeStamp()
}
