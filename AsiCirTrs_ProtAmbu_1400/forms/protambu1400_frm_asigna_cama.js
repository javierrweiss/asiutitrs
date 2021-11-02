/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"D991CE92-03FE-45E1-99C6-C8DF8C206CEE",variableType:8}
 */
var f_hc = 0;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"31ED93D2-92AD-44CF-837A-A57C0E2C151D"}
 */
var f_apeynom = '';

/**
 * Handle hide window.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"EC558FE3-DFA2-4418-88C0-B4B69F5C1CD3"}
 */
function onHide_frm_asigna_cama(event) {
	var name=application.getActiveWindow()
	name.getName()
	var $win=application.getWindow(name.getName())
	if($win!=null){
		$win.hide()
		$win.destroy()
	}
	return true
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"524F0953-0764-49B0-9F4D-7A08A29ED966"}
 */
function onAction_btn_si(event) {
	globals.protambu1400_asignacama=true
	var name=application.getActiveWindow()
	name.getName()
	var $win=application.getWindow(name.getName())
	if($win!=null){
		$win.hide()
		$win.destroy()
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"4BDE72BE-4A80-4B66-96BA-B318173B7C84"}
 */
function onAction_btn_no(event) {
	var name=application.getActiveWindow()
	name.getName()
	var $win=application.getWindow(name.getName())
	if($win!=null){
		$win.hide()
		$win.destroy()
	}
}
