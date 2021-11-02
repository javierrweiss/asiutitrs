/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"38C459F4-BE35-4A7E-9119-7B0A7DA7D9CF"}
 */
function onShow_foco(firstShow, event) {
	controller.focusFirstField()
	var query = 'select B.id from (select distinct on (C.legajo) legajo, C.* from permi_legajo_carpetas C) B'
	var ds = databaseManager.getDataSetByQuery("desal",query,null,-1)
	foundset.clear()
	foundset.loadRecords(ds)
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"8399FF14-2795-4703-891D-EFE1F03A5B7C"}
 */
function onAction_captura(event) {
	globals.gbl_selec       = foundset.getSelectedIndex()
	globals.gbl_con_usuario = foundset.legajo	
	application.getWindow('Busca_permiso_carpetas').hide();
}
