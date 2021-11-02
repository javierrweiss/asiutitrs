
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"57A599AF-AB72-46CF-AD2C-F6EECF7E4FC3"}
 */
function onAction_Buscar_Medico_n(event) {
	var win = application.createWindow("c",JSWindow.MODAL_DIALOG)
	win.title = "Búsqueda de Código de Medico";
	win.setSize(850,550)
	win.show(forms.frm_medicos_dtl)
}
