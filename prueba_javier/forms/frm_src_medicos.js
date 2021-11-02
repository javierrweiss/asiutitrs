
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"877BDF7B-CA58-4E90-96D2-7B388DC98303"}
 */
function onAction_seleccion_medico(event) {
	globals.gbl_medico_n=foundset.med_codigo;
	var name=application.getActiveWindow()
	name.getName()
	var $win=application.getWindow(name.getName())
	if($win!=null){
		$win.hide()
		$win.destroy()
	}
}
