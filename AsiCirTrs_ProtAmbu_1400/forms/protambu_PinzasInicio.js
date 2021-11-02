/**
 * @properties={typeid:35,uuid:"2586DB1E-CD61-4104-9BB1-9A0CD02BF9FB",variableType:-4}
 */
var f_pinzasinicio = false;

/**
 * @properties={typeid:24,uuid:"A841AB6B-E696-4852-9202-93C38D429E33"}
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
		elements.pinzasinicio.requestFocus()
	}
}

/**
 * @properties={typeid:24,uuid:"FDDAFE88-210C-407A-9478-E85D84871579"}
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
 * @properties={typeid:24,uuid:"F1E82DB1-09F8-4216-B2A4-7D12DCE9923D"}
 */
function onShow_PinzasInicio(firstShow, event) {
	f_pinzasinicio=false
	elements.pinzasinicio.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"5CE3A34E-A0CA-42F4-8FC1-C1F97BDFD843"}
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
 * @properties={typeid:24,uuid:"9170DFFB-0E5A-47E7-90B1-500D0454748E"}
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
