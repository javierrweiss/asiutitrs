/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"16B30882-C2E1-494E-9DA8-A615C8DE671F"}
 */
function onAction_btn_si(event) {
	globals.preguntaReglamentos=true
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
 * @properties={typeid:24,uuid:"902DD8F1-CD65-40C4-8E4A-FC1FCA9A9147"}
 */
function onAction_btn_no(event) {
	globals.preguntaReglamentos=false
	var name=application.getActiveWindow()
	name.getName()
	var $win=application.getWindow(name.getName())
	if($win!=null){
		$win.hide()
		$win.destroy()
	}
}
