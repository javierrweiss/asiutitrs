/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"41864C29-81DD-428D-A12C-19DDA352C93C"}
 */
function onAction_ingresa_otros(event) {
	if(otros_ingresos_to_hojauti_items.concepto!=''&&otros_ingresos_to_hojauti_items.concepto!=null){
		if(otros_ingresos_to_hojauti_items.cantidad!=''&&otros_ingresos_to_hojauti_items.cantidad!=null){
			forms.frm_balance_ingresos.elements.tabless_72.tabIndex=1
		}
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"38C74EE1-0D45-4469-BE3F-F217E12F95CE"}
 */
function onAction_cancela_ingresa_otros(event) {
	if(globals.vAccionAgrega){
		otros_ingresos_to_hojauti_items.deleteRecord()
		globals.renglon3=globals.renglon3-1
	}
	forms.frm_balance_ingresos.elements.tabless_72.tabIndex=1
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"4AD85C07-1BD5-42D6-9629-4EBD8F59F18A"}
 */
function onAction_btn_borra(event) {
	if(!globals.vAccionAgrega){
		otros_ingresos_to_hojauti_items.deleteRecord()
		globals.renglon3=globals.renglon3-1
	}
	forms.frm_balance_ingresos.elements.tabless_72.tabIndex=1
}
