/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"94B756C4-6904-4041-86D6-07D464E9D8E2"}
 */
function onAction_FIND_especial(event) {
	var largo = globals.vAlfaEspe.length;
	var esnumero = true;
	for (var i= 0;i<largo && esnumero == true; i++){
		if (globals.vAlfaEspe.charCodeAt(i)< 48 || globals.vAlfaEspe.charCodeAt(i) > 57){
			esnumero = false
		}
	}
    if (esnumero){
    	    globals.vEspecial = utils.stringToNumber(globals.vAlfaEspe.valueOf());
			elements.tabless.tabIndex = 2	
    }
    else{
    	 globals.vAlfaEspe = globals.vAlfaEspe.toLocaleUpperCase()
		 elements.tabless.tabIndex = 1
    }
}

/**
 * Handle hide window.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"D4007C9A-4D6C-4E90-8B7B-D8C20AC968F9"}
 */
function onHide_tab_especial(event) {
	globals.vAlfaEspe=''
	return true
}
