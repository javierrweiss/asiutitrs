/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"C5911BFA-AC81-45F9-9C17-1F77EBC3F0C8",variableType:8}
 */
var f_hc = 0;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"6BA906F5-5F82-496B-AFC9-277E35E6994E"}
 */
var f_apeynom = '';

/**
 * Handle hide window.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"C580D23E-8DF1-4B31-8C40-6246F7F1D8DB"}
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
 * @properties={typeid:24,uuid:"C93C7534-CD13-4A50-A981-D61B2E4B9327"}
 */
function onAction_btn_si(event) {
	globals.AtCons_entrega_medicam=true
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
 * @properties={typeid:24,uuid:"9EFF9383-078E-4141-A1B3-6D1E08FD09F6"}
 */
function onAction_btn_no(event) {
	globals.AtCons_entrega_medicam=false
	var name=application.getActiveWindow()
	name.getName()
	var $win=application.getWindow(name.getName())
	if($win!=null){
		$win.hide()
		$win.destroy()
	}
}
