
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"7C80D946-CEC7-4DAA-BCA2-C860CC02B0C8"}
 */
function onActionSiguientePuntuacion(event) {
	// TODO Auto-generated method stub
	globals.confirmaValoracionPuntuacion=true;
	
	
	var $name = application.getActiveWindow().getName();
	var $win = application.getWindow($name);
	if($win!=null){
		$win.hide();
		$win.destroy();
	}
	
	
}

/**
 * Handle hide window.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"2F40326C-0747-47B3-8B2F-4E3AEF7CC7E4"}
 */
function onHideCierreValoracion(event) {
	// TODO Auto-generated method stub
	
	if(!globals.confirmaValoracionPuntuacion){
		plugins.dialogs.showInfoDialog("Valoración","Los cambios realizados no fueron guardados");
	}
	return true
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"2A8D83A3-CE37-44CB-AD4F-C0C39B033114"}
 */
function onShow(firstShow, event) {
	// TODO Auto-generated method stub
	globals.confirmaValoracionPuntuacion=false
	
}
