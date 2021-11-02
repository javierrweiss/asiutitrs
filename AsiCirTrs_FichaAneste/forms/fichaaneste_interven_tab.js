/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"A8AEA15D-940A-4F5D-9E2C-8080230E075D"}
 */
function onAction_FIND(event) {
	scopes.globals.fichaaneste_interven_des = scopes.globals.fichaaneste_interven_des.toLocaleUpperCase()
	elements.tabless_30.tabIndex = 1
	forms.fichaaneste_interven_scroll.controller.focusFirstField()
	forms.fichaaneste_interven_scroll.elements.itv_codi.requestFocus()
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"F821649A-A0E3-4FD1-A842-18885F26FB5D"}
 */
function onShow_busqueda_interven(firstShow, event) {
	elements.buscar.requestFocus()
}
