/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"8B9E09BF-0CE4-4BE3-B742-CDE6B9780717"}
 */
function onAction_selecciona_obra(event) {
	globals.per_23=foundset.obpobra
	globals.per_27=foundset.obpplan
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
 * @properties={typeid:24,uuid:"C3D243D0-5EF8-4273-9E33-99A08E2E1C79"}
 */
function onAction_buscar(event) {
	globals.per_23_str=globals.per_23_str.toLocaleUpperCase()
}

/**
 * Handle hide window.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"EA31F6CE-5FB1-461E-A57D-2ECA337490F3"}
 */
function onHide_frm_scr_obras_pers(event) {
	var name=application.getActiveWindow()
	name.getName()
	var $win=application.getWindow(name.getName())
	if($win!=null){
		$win.hide()
		$win.destroy()
	}
	return true
}
