
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"6E305959-8929-4844-9D0B-76267DA8BA04"}
 */
function onAction_BuscarMedicos(event) {
	var win = application.createWindow("c",JSWindow.MODAL_DIALOG)
	win.title = "Búsqueda de Código de Medico";
	win.setSize(850,550)
	win.show(forms.frm_tbc_medicos_tabless)
}
