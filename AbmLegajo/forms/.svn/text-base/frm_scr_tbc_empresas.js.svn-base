
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"332588A1-6F31-4608-B154-50C9F38D3E28"}
 */
function onAction_selection_empresas(event) {
	globals.proem_empres=foundset.keyempresas
	forms.frm_profmeem_dtl.fDescripcionEmpresa=proem_empres_to_tbc_empresas.emp1
	var name=application.getActiveWindow()
	name.getName()
	var $win=application.getWindow(name.getName())
	if($win!=null){
		$win.hide()
		$win.destroy()
	}
}
