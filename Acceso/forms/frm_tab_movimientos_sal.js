/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"04A135B4-1A26-4395-BA53-B0F232D2787A"}
 */
function onShow_tab_movimientos(firstShow, event) {
	elements.etk_nombre.text = utils.stringTrim(forms.frm_visitantes.foundset.vis_nombre) + ' ' +
                               utils.stringTrim(forms.frm_visitantes.foundset.vis_apellido)  
}

/**
 * Handle hide window.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"5900EDEE-ECF0-40A6-94F6-C44FA52CD185"}
 */
function onHide_cancela_tab_mov(event) {
	if (globals.ok_grabo_mov == 0 ){
	    forms.frm_movimientos_dtl_sal.cancela_mov()
	    if (globals.core_dlg_buttonPressed == 'Si'){
           return true
    	}else{
	       return false
    	}
	}else{
		return true
	}
}
