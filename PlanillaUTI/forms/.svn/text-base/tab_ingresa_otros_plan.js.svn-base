/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"8AA33DE4-6D51-4EB8-A650-365C53D46FD3"}
 */
function onAction_ingresa_otros(event) {
	if(otros_plan_to_hojauti_items.concepto!=''&&otros_plan_to_hojauti_items.concepto!=null){
	  forms.frm_plan_cuidados.elements.tabless_249.tabIndex=1
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"AD61C149-FB2C-4C76-9E22-74E4A00E065C"}
 */
function onAction_cancela_ingresa_otros(event) {
	if(globals.vAccionAgrega){
		otros_plan_to_hojauti_items.deleteRecord()
		globals.renglon8=globals.renglon8-1
	}
	forms.frm_plan_cuidados.elements.tabless_249.tabIndex=1
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"6D57CF7F-1A02-4397-993B-FDC6517D5465"}
 */
function onAction_btn_borra(event) {
	if(!globals.vAccionAgrega){
		otros_plan_to_hojauti_items.deleteRecord()
		globals.renglon8=globals.renglon8-1
	}
	forms.frm_plan_cuidados.elements.tabless_249.tabIndex=1
}
