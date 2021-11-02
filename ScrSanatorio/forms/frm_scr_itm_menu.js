/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"BAA131EE-3C20-4A71-8114-1A55C14307DB"}
 */
function onShow_foco(firstShow, event) {
	controller.focusFirstField()
	elements.codigo.requestFocus()  
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"062F1CEA-C6CE-45F8-AC2B-F00E97097331"}
 */
function onAction_captura(event) {
	globals.gbl_selec = foundset.getSelectedIndex()
	globals.gbl_item  = foundset.codigo_item
	application.getWindow('Busca_item_menu').hide();
}
