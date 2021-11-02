/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"5DA73198-BA96-4CF7-82D1-8E36FB4B935B"}
 */
function onAction_FIND(event) {
	globals.vImacodiAlfa2=globals.vImacodiAlfa2.toLocaleUpperCase()
	elements.tabless_nomenclador_imacodi.tabIndex = 1
	forms.frm_scroll_nomencla_imacodi.controller.focusFirstField()
	forms.frm_scroll_nomencla_imacodi.elements.icod_codinom.requestFocus()
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"38C8EC23-4F72-4CFB-90CD-92E994DDA3A8"}
 */
function onShow_busqueda_interven(firstShow, event) {
	elements.buscar.requestFocus()
	
}
