/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"C42B87A5-9169-4172-B3F0-077CD194DA41"}
 */
function onAction_ingresa_otros(event) {
	if(otros_estudios_to_hojauti_otros_estudios.concepto!=''&&otros_estudios_to_hojauti_otros_estudios.concepto!=null){
		if(otros_estudios_to_hojauti_otros_estudios.valor!=''&&otros_estudios_to_hojauti_otros_estudios.valor!=null){
			if(globals.vHoraCorrecta){
				forms.frm_cultivos.elements.tabless_282.tabIndex=1
			}	
		}
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"5CB50D5F-44AD-480F-9B41-DECD4AA059E6"}
 */
function onAction_cancela_ingresa_otros(event) {
	if(globals.vAccionAgrega){
		otros_estudios_to_hojauti_otros_estudios.deleteRecord()
		globals.renglon9=globals.renglon9-1
	}	
	forms.frm_cultivos.elements.tabless_282.tabIndex=1
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"DC7F1010-6A2C-4B13-B8A2-A2F587261060"}
 */
function onAction_btn_borra(event) {
	if(!globals.vAccionAgrega){
		otros_estudios_to_hojauti_otros_estudios.deleteRecord()
		globals.renglon9=globals.renglon9-1
	}	
	forms.frm_cultivos.elements.tabless_282.tabIndex=1
}
