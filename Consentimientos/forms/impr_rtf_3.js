/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"A56C83EC-B5F1-485E-AA5A-1F9DD7D04630",variableType:93}
 */
var fecha_impre = new Date();

/**
 * @properties={typeid:24,uuid:"3228B286-7E10-4089-9212-999A4F123FE6"}
 */
function sub_buildReport() {
	globals.campoRTF = texto_to_consentimientos.rtf_html;
}

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"1D312EEA-88E6-42B2-920A-362D373BA424"}
 */
function onLoad_inicializa_fecha(event) {
	fecha_impre = application.getServerTimeStamp()
}
