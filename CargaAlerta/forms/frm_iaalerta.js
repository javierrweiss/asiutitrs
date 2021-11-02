/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"8D117F09-3A9C-40BD-87DE-BD389C9E4D05"}
 */
function onActionInternado(event) {
	globals.vhclin9 = 0
	globals.vhclinica = ''
	application.showForm(forms.frm_tablesalerta)
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"A0D21DC1-AE76-481E-AF05-E9D0E0269023"}
 */
function onActionAmbulatorio(event) {
	globals.vhclin9 = 0
	application.showForm(forms.frm_tablesalerta)
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"C35F495A-0FB9-44B8-8E9C-000932EC8981"}
 */
function onActionSalir(event) {
	application.exit()
}
