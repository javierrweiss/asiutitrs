/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"C28F1283-887E-4667-91BB-D2B4755ED331",variableType:93}
 */
var var_fecha = null;

/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"0333B2C3-601A-4B63-8C90-88CA87C6CEE3"}
 */
function onLoad_cargar_titulo(event) {
	var dataset = application.getValueListItems('vl_tipo_consulta');
	elements.prn_titulo.text = 'Consulta '+ dataset.getValue(globals.gbl_con_tipo_consulta, 1)
	var_fecha = application.getServerTimeStamp()	
}
