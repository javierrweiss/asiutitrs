/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"AA59A56A-EA4E-465E-8E91-8A0658FC3C62"}
 */
function onAction_FIND_especial(event) {
	var largo = globals.vAlfaSector.length;
	var esnumero = true;
	for (var i= 0;i<largo && esnumero == true; i++){
		if (globals.vAlfaSector.charCodeAt(i)< 48 || globals.vAlfaSector.charCodeAt(i) > 57){
			esnumero = false
		}
	}
    if (esnumero){
    	    globals.vSector = utils.stringToNumber(globals.vAlfaSector.valueOf());
			elements.tabless.tabIndex = 2	
    }
    else{
    	 globals.vAlfaSector = globals.vAlfaSector.toLocaleUpperCase()
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
 * @properties={typeid:24,uuid:"6CA5EB90-E20B-4AD0-850C-C4FC3ED19F0E"}
 */
function onHide_tab_especial(event) {
	globals.vAlfaEspe=''
	return true
}
