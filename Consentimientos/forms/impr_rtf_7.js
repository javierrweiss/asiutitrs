/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"D12FC3F8-EAB5-4334-BC38-63D0B4B1557D",variableType:93}
 */
var fecha_impre = new Date();

/**
 * @properties={typeid:24,uuid:"C5870737-C43E-460E-8BBF-7D2606B10AF5"}
 */
function sub_buildReport() {
	globals.campoRTF = texto_to_consentimientos.rtf_html;
}

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"482C5A3A-5895-4BCF-875A-E8FBCB91A217"}
 */
function onLoad_inicializa_fecha(event) {
	fecha_impre = application.getServerTimeStamp()
}
