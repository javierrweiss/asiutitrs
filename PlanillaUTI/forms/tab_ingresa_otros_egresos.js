/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"84A09A92-9525-489D-898F-CF4D445A0C4B"}
 */
function onAction_ingresa_otros(event) {
	if(otros_egresos_to_hojauti_items.concepto!=''&&otros_egresos_to_hojauti_items.concepto!=null){
		if(otros_egresos_to_hojauti_items.cantidad!=''&&otros_egresos_to_hojauti_items.cantidad!=null){
			forms.frm_balance_egresos.elements.tabless_299.tabIndex=1
		}	
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"7720CE9D-0063-4004-A0B6-1273E430A514"}
 */
function onAction_cancela_ingresa_otros(event) {
	if(globals.vAccionAgrega){
		otros_egresos_to_hojauti_items.deleteRecord()
		globals.renglon4=globals.renglon4-1
	}	
	forms.frm_balance_egresos.elements.tabless_299.tabIndex=1
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"8F37FE0A-6453-448E-9209-5763F10C4B28"}
 */
function onAction_btn_borra(event) {
	if(!globals.vAccionAgrega){
		otros_egresos_to_hojauti_items.deleteRecord()
		globals.renglon4=globals.renglon4-1
	}	
	forms.frm_balance_egresos.elements.tabless_299.tabIndex=1
}
