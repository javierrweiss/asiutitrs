/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"344485C0-9A26-41FD-97C3-365CE415168E",variableType:4}
 */
var Histcli_unico2259 = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"B0C95F5A-5B0B-494E-B6F7-A3B751F9D718",variableType:4}
 */
var HoraCargaAnes2259 = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"0B4FCE8F-9A84-4F4B-BF87-0D7C0C4D686C",variableType:4}
 */
var FechaCargaAnes2259 = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"70120E72-05F4-4C48-BEE8-72B5CB408F0D",variableType:4}
 */
var vCodigoArt_tmp = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"9760E8AB-3584-4CE7-A0E5-4D08B37D3781",variableType:4}
 */
var vSector = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"8E755972-4DC1-4FB8-9F2E-D548DABBD3F1",variableType:4}
 */
var vTipoHC = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"8F759893-9EE9-4EC0-B779-F320B7053946",variableType:4}
 */
var vNroLegajo = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"FAC41AE3-4908-4A58-9F92-E29D7873ED4C",variableType:4}
 */
var vTipoLegajo = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"037F6C0D-EAC3-4F0E-857D-B11D5A4F875F",variableType:4}
 */
var vEstado2259 = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"7EB4030C-0E26-4FFD-A32B-C07DE594FB10",variableType:4}
 */
var vCantidad2259 = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"A5228180-A6C8-465D-8F02-916DB75ADDFA",variableType:4}
 */
var vHoraCarga2259 = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"D6CCB8A9-0375-4A4E-989C-7F5AA67EBCAB",variableType:4}
 */
var vFechaCarga2259 = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"9C52391A-CB28-4A92-ABCE-314C504B5BEC",variableType:4}
 */
var vCodigoMed = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"28578579-669D-4045-A2F0-E3C66CF98D92",variableType:4}
 */
var vCodigoCombo = 0;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"547FD864-C53C-44F5-8603-677B53D4CCA8"}
 */
var vAlfaCodigoMed = '';

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"476C96AE-C9CF-428A-83F5-C280D4D7DA5C",variableType:4}
 */
var value_three = 3;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"9F9B5CA0-5B56-4E2D-926A-9E36093FA4BA",variableType:4}
 */
var value_two = 2;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"EFCCCE04-6958-48D2-B95C-7C45CC36F743",variableType:4}
 */
var value_one = 1;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"D8E97966-EFAE-45A0-9480-EB0C612FB468",variableType:4}
 */
var vImed = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"466ABB63-4E44-4648-A380-0521E90DC571",variableType:4}
 */
var vNroProtocolo2259 = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"E76F1AC1-EEC6-45AC-8588-D6291186870D",variableType:4}
 */
var vHiscli2259 = 0;

/**
 * Callback method for when solution is opened.
 *
 * @properties={typeid:24,uuid:"E0E03AC8-9DBC-4247-8DEF-2D25C35A95D9"}
 */
function onSolutionOpen_IngresoMedicamentosCirugia() {
	var names1 = plugins.window.getToolbarNames();
    for (var i = 0 ; i < names1.length ; i++) {
     	plugins.window.removeToolBar(names1[i])
    }	
    plugins.window.setFullScreen(false)
	plugins.window.maximize()
    plugins.window.getMenuBar().setVisible(false)
	plugins.window.setToolBarAreaVisible(false)

	globals.vHiscli2259=2043220
	globals.vNroProtocolo2259=102375
	globals.vEstado2259=5
	//globals.vImed=0
}

/**
 * @param {JSFoundset} relacion
 * @param {String} base
 * @param {String} tabla
 *
 * @properties={typeid:24,uuid:"F7F124D7-DD0A-491F-924C-4CC271BB3398"}
 */
function InicializarDatosRelacion(relacion, base, tabla) {
	var table = databaseManager.getTable(base, tabla)
	var columnNamesArray = table.getColumnNames()
	
	for (var i = 0; i < relacion.alldataproviders.length; i++) {
		//var name = relacion.alldataproviders[i]
		//var columnNames = table.getColumnNames()
		var firstColumnName = columnNamesArray[i]
		//plugins.dialogs.showInfoDialog("firstColumnName",firstColumnName)
		var jscolumn = table.getColumn(firstColumnName)
		//var columnLength = jscolumn.getLength()
		
		relacion[firstColumnName] = 0
		var columnType = jscolumn.getType()
		if (columnType == 12){
			relacion[firstColumnName] = ' '
		}
		
	}

}
