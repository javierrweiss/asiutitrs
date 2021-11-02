/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"061022B3-66B9-4AFE-984C-2009D80E3822"}
 */
var valergico = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"CD77D89B-F1F4-43CD-B8E8-1043F4EDBB91"}
 */
var vapelnom = '';

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"D5523F5E-BFC7-482E-A629-007C76D02FDC",variableType:8}
 */
var vhclin9 = 0;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"D70B35C2-28A0-4684-889F-7543C297B5D3"}
 */
var vhclinica = '';

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"18639DFE-9110-4B0D-889A-61E978AC774E",variableType:4}
 */
var vtipo = 0;

/**
 * Callback method for when solution is opened.
 *
 * @properties={typeid:24,uuid:"991C1343-610E-47B8-8538-A17F97D16C5D"}
 */
function onSolutionOpenCargaAlerta() {
	plugins.window.getMenuBar().setVisible(false)
	plugins.window.setToolBarAreaVisible(false)
	databaseManager.setAutoSave(false)
}
