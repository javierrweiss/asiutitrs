/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"1708F24F-62FF-4130-8415-BB4137AD1B9E"}
 */
function onAction_ingresa_otros(event) {
	if(otras_valoriz_to_hojauti_items.concepto!=''&&otras_valoriz_to_hojauti_items.concepto!=null){
		if(otras_valoriz_to_hojauti_items.cantidad!=''&&otras_valoriz_to_hojauti_items.cantidad!=null){
			forms.frm_valoracion_3.elements.tabless_88.tabIndex=1
		}	
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"1BE9663C-31C9-4E8D-A8EC-0F38D0DEC53B"}
 */
function onAction_cancela_ingresa_otros(event) {
	if(globals.vAccionAgrega){
		otras_valoriz_to_hojauti_items.deleteRecord()
		globals.renglon7=globals.renglon7-1
	}	
	forms.frm_valoracion_3.elements.tabless_88.tabIndex=1
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"78B9A93A-CF6B-4809-95D0-D10ACA477FDD"}
 */
function onAction_btn_borra(event) {
	if(!globals.vAccionAgrega){
		otras_valoriz_to_hojauti_items.deleteRecord()
		globals.renglon7=globals.renglon7-1
	}	
	forms.frm_valoracion_3.elements.tabless_88.tabIndex=1
}
