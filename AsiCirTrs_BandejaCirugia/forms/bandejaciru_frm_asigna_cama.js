/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"2D8836A3-794D-49BA-91C7-D284C16F9417",variableType:8}
 */
var f_hc = 0;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"EC69CEEF-D11C-46D7-8766-8D9B6BE04D11"}
 */
var f_apeynom = '';

/**
 * Handle hide window.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"3D000B52-6428-4365-9703-88D8E5E5220D"}
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
 * @properties={typeid:24,uuid:"1CEDF872-3649-4C02-8CA8-FA79E99B285F"}
 */
function onAction_btn_si(event) {
	globals.bandejaciru_asignacama=true
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
 * @properties={typeid:24,uuid:"DBF942BE-B847-4FCE-90E7-EA9723E17383"}
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
