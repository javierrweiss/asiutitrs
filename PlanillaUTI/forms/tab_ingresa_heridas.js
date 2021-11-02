/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"B71F321D-CE37-4FCA-AA84-12DA8CC1DD55"}
 */
function onAction_ingresa_otros(event) {
	if(heridas_to_hojauti_items.concepto!=''&&heridas_to_hojauti_items.concepto!=null){
		if(heridas_to_hojauti_items.cantidad!=''&&heridas_to_hojauti_items.cantidad!=null){
			forms.frm_valoracion_3.elements.tabless_66.tabIndex=1
		}
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"48AC364D-3DA9-412B-9AFB-0B7260A9EEFD"}
 */
function onAction_cancela_ingresa_otros(event) {
	if(globals.vAccionAgrega){
	   heridas_to_hojauti_items.deleteRecord()
	   globals.renglon6=globals.renglon6-1
	}   
	forms.frm_valoracion_3.elements.tabless_66.tabIndex=1
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"B0944C8E-9F36-40DB-AED6-55728FA4AC2A"}
 */
function onAction_btn_borra(event) {
	if(!globals.vAccionAgrega){
	    heridas_to_hojauti_items.deleteRecord()
	    globals.renglon6=globals.renglon6-1
	}	
	forms.frm_valoracion_3.elements.tabless_66.tabIndex=1
}
