
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"5132CAA1-FD09-462E-89B2-C7E414414629"}
 */
function onAction_selection(event) {
	globals.vCodigoMed=foundset.art_codigo
	globals.vDescriArticulo='<html><body>'+foundset.art_descrip+'<br>'+foundset.art_presenta+'</body></html>'
	application.closeAllWindows()
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"BB0773CB-F7A3-4135-97FC-49BF2E9BE1E1"}
 */
function onShow_scroll_articulos(firstShow, event) {
	controller.focusFirstField()
	elements.art_codigo.requestFocus()
}
