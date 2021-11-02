
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"869C1CAE-387C-469D-A6D7-DCD38914D8D7"}
 */
function onAction_seleccion_medico_n(event) {
	globals.gbl_medico_n=foundset.med_codigo;
	var name=application.getActiveWindow()
	name.getName()
	var $win=application.getWindow(name.getName())
	if($win!=null){
		$win.hide()
		$win.destroy()
	}
}
