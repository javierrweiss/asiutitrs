/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"4B2F38CE-958E-40EE-AA3D-05FF77490927",variableType:4}
 */
var frm_campo_N1 = 0;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"8F13A315-BCB6-41A8-96EC-B926051FD861",variableType:4}
 */
var frm_campo_N2 = 0;
/**
 * @properties={typeid:35,uuid:"4A7CAF97-C52A-4207-8816-D4B9FD1DB1D0",variableType:-4}
 */
var frm_ds2 = new Array();
/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"31BE29C5-2F6E-4B7C-8DB3-846BAC743D01"}
 */
function onShow_carga_formulario(firstShow, event) {
	elements.tabless.tabIndex= 1
	frm_campo_N1 = 0
	frm_campo_N2 = 0
	forms.frm_scr_coberturas.filtra()
}
/**
 * Handle changed data.
 *
 * @param {String} oldValue old value
 * @param {String} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"E4E83672-DD87-471D-A40A-1808B885B220"}
 */
function onDataChange_filtra(oldValue, newValue, event) {
	forms.frm_scr_coberturas.filtra()
	elements.tabless.tabIndex = globals.gbl_con_indice
	controller.setSelectedIndex(1)
	return true
}
