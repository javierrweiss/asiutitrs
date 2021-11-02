/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"88B636CC-1CF2-4305-ACDD-A8BA9F8F0500",variableType:8}
 */
var fhoring = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"8727A1BD-9508-4D4C-B0AB-C2F387C3F760",variableType:8}
 */
var ffecing = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"FCD1025B-170B-4A46-956A-9F5B0FD1250F",variableType:8}
 */
var fsexo = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"1147826A-413C-4C3D-B83D-3BB093D66CCA",variableType:8}
 */
var fhiscli = 0;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"D0F13F69-3012-4982-99F3-B95C9E470E45"}
 */
var fegreso = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"6DBEC835-6025-4C51-9433-0FD37546354B"}
 */
var fingreso = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"2B9E4E17-4757-4A81-85EC-27E4EBE19CBF"}
 */
var fcama = '';

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"D5EF8E10-1EF4-4C24-B2FA-47AFBFA0E7AD",variableType:8}
 */
var fhabi = 0;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"AD6B8FB5-5112-42B7-AC6E-56A2FE58E55F"}
 */
var fapeynom = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"BC5BC086-D924-49F1-972E-473656CF4115"}
 */
var fhiscli_edit = '';

/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"0ABBFE5B-CB01-4DBF-A825-F2AC7D271732"}
 */
function onLoad(event) {
	forms.frm_scr_tbc_admision_N.elements.adm_histclin.format = '##########'
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"EFA04FE6-C1FB-4273-9214-1DF370F629F2"}
 */
function onAction(event) {
	globals.vHiscli=foundset['fhiscli']
	globals.vApeyNom=foundset['fapeynom']
	globals.vSexo=foundset['fsexo']
	globals.vFechaIngreso=globals.IntegerToDate(foundset['ffecing'])
	globals.vHoraIngreso=foundset['fhoring']
	forms.frm_elige_menu.controller.show()
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"8C321A72-6878-42B1-B7C8-94C2973FF529"}
 */
function onShow_tbc_admision_L(firstShow, event) {
	forms.frm_scr_tbc_admision_L_super.controller.focusFirstField()
	forms.frm_scr_tbc_admision_L_super.elements.adm_histclin.requestFocus()
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"90CA6DEE-F42A-4870-B9CF-A72BC5E7BCAB"}
 */
function onShow_frm_scr_tbc_admision_L_super(firstShow, event) {
	/*
	var query = 'select adm_histclin from tbc_admision_scroll where adm_histclin > 2000000 and adm_apelnom >= ? order by adm_apelnom'
	var args = new Array()
	args[0]=globals.vAlfa
	var ds = databaseManager.getDataSetByQuery("admisionscroll",query,args,200)
	foundset.clear()
	foundset.loadRecords(ds)
	*/
}
