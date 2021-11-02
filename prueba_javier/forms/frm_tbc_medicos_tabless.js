


/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"45D917C1-BBF2-44CA-B0D7-941092995080"}
 */
function onAction(event) {
	var esnumero = true;
	for (var i= 0;i<globals.gbl_medico_a.length && esnumero == true; i++){
		if (globals.gbl_medico_a.charCodeAt(i)< 48 || globals.gbl_medico_a.charCodeAt(i) > 57){
			esnumero = false
		}
	}
	
    if (esnumero){
		   
			    globals.gbl_medico_n = utils.stringToNumber(globals.gbl_medico_a.valueOf());
			
				
				elements.tabless.tabIndex = 2	
				
    }
    else{
    	 globals.gbl_medico_a = globals.gbl_medico_a.toLocaleUpperCase()
 		
 			
 			elements.tabless.tabIndex = 1
 			
    }
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"B8F822F8-C213-498D-A257-C05E5D82704C"}
 */
function onShow_medicos_tabless(firstShow, event) {
	onAction(event);
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"07206426-1AEA-43E1-A916-86BBBDA2FA65"}
 */
function onActionShowNewMedForm(event) {
	// TODO Auto-generated method stub
	forms.frm_medicos_nuevo_medico.foundset.newRecord()
	scopes.globals.InicializarDatos("frm_medicos_nuevo_medico","maestros","tbc_medicos")
	elements.tabless.tabIndex=3;
}
