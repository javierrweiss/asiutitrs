
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"6C1C9CA2-9C77-43F9-B25A-3A48F28A2EE6"}
 */
function onAction_ingresa_otros(event) {
	if(vs_to_hojauti_items.concepto!=''&&vs_to_hojauti_items.concepto!=null){
     	forms.frm_valoracion.elements.tabless_119.tabIndex=1
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"CC03BAE9-1DDF-402A-A6C1-DCD6326C3285"}
 */
function onAction_cancela_ingresa_otros(event) {
	if(globals.vAccionAgrega){
		vs_to_hojauti_items.deleteRecord()
		globals.renglon=globals.renglon-1
	}
	forms.frm_valoracion.elements.tabless_119.tabIndex=1
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"E0D0A014-5BB8-4D31-896C-49D6CF3EC87A"}
 */
function onAction_linea(event) {
	if(!globals.vAccionAgrega){
		vs_to_hojauti_items.deleteRecord()
		globals.renglon=globals.renglon-1
	}
	forms.frm_valoracion.elements.tabless_119.tabIndex=1
}
