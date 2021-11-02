/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"B176F2F6-E79E-4B9C-B3EE-BBC6C6B8778D"}
 */
function onShow_tab_movimientos(firstShow, event) {
	elements.etk_nombre.text = utils.stringTrim(forms.frm_visitantes.foundset.vis_nombre) + ' ' +
	                           utils.stringTrim(forms.frm_visitantes.foundset.vis_apellido) 
							   
	forms.frm_movimientos_dtl.foundset.newRecord()
}

/**
 * Handle hide window.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"46962CD1-A66A-4991-8B75-9A248719B70C"}
 */
function onHide_cancela_tab_mov(event) {
	if (globals.ok_grabo_mov == 0 ){
	    forms.frm_movimientos_dtl.cancela_mov()
	    if (globals.core_dlg_buttonPressed == 'Si'){
           return true
    	}else{
	       return false
    	}
	}else{
		return true
	}
}
