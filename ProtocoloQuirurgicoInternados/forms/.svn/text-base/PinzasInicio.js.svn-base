/**
 * @properties={typeid:35,uuid:"377C94B7-866E-4684-AAE5-953D7397997F",variableType:-4}
 */
var f_pinzasinicio = false;

/**
 * @properties={typeid:24,uuid:"B7030905-FDEB-45AB-B504-E057117D2056"}
 */
function onAction_confirma(event) {
	if(globals.vPinzasInicio>0){
		//application.closeAllWindows()
		f_pinzasinicio=true
		var name=application.getActiveWindow()
		name.getName()
		var $win=application.getWindow(name.getName())
		if($win!=null){
			$win.hide()
			$win.destroy()
		}
	}else{
		f_pinzasinicio=false
		forms.PinzasInicio.elements.pinzasinicio.requestFocus()
	}
}

/**
 * @properties={typeid:24,uuid:"F47F3507-0180-4191-9D20-8C20C3C274F5"}
 */
function onAction_cancela(event) {
	f_pinzasinicio=false
	var name=application.getActiveWindow()
	name.getName()
	var $win=application.getWindow(name.getName())
	if($win!=null){
		$win.hide()
		$win.destroy()
	}
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"E77285E6-E011-4A06-95C3-24A183973349"}
 */
function onShow_PinzasInicio(firstShow, event) {
	f_pinzasinicio=false
	forms.PinzasInicio.elements.pinzasinicio.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"908AF193-15AC-43DB-976F-60361E2D05A3"}
 */
function onAction_pinzasinicio(event) {
	elements.btn_confirma.requestFocus()
}

/**
 * Handle hide window.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"9E553A7C-89CC-4E56-8CCA-8B1C087E0A5D"}
 */
function onHide_PinzasInicio(event) {
	if(globals.vPinzasInicio==0||globals.vPinzasInicio==null){
		f_pinzasinicio=false
	}
	var name=application.getActiveWindow()
	name.getName()
	var $win=application.getWindow(name.getName())
	if($win!=null){
		$win.hide()
		$win.destroy()
	}
	return true
}
