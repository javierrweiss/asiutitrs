/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"52BF0C38-3FAD-40CC-A5FF-742116EAF325"}
 */
function onAction_ingresa_otros(event) {
	if(arritmias_to_hojauti_items.concepto!=''&&arritmias_to_hojauti_items.concepto!=null){
     	forms.frm_valoracion.elements.tabless_188.tabIndex=1
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"FCD022A5-EF1C-4A09-992F-F3C097DD3424"}
 */
function onAction_cancela_ingresa_otros(event) {
	if(globals.vAccionAgrega){
		arritmias_to_hojauti_items.deleteRecord()
		globals.renglon2=globals.renglon2-1
	}
	forms.frm_valoracion.elements.tabless_188.tabIndex=1
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"E315A1DE-61F7-43AA-981F-115F2069F15D"}
 */
function onAction_btn_borra(event) {
	if(!globals.vAccionAgrega){
		arritmias_to_hojauti_items.deleteRecord()
		globals.renglon2=globals.renglon2-1
	}
	forms.frm_valoracion.elements.tabless_188.tabIndex=1
}
