
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"FA9B252C-1F6F-4451-9486-CF94887F1113"}
 */
function onActionGetEspecial(event) {
	var largo = globals.gbl_especial_a.length;
	var esnumero = true;
	for (var i= 0;i<largo && esnumero == true; i++){
		if (globals.gbl_especial_a.charCodeAt(i)< 48 || globals.gbl_especial_a.charCodeAt(i) > 57){
			esnumero = false
		}
	}
	
    if (esnumero){
		   
			    globals.gbl_especial_n = utils.stringToNumber(globals.gbl_especial_a.valueOf());
			
				
				elements.tabless.tabIndex = 2	
				
    }
    else{
    	 globals.gbl_especial_a = globals.gbl_especial_a.toLocaleUpperCase()
 		
 			
 			elements.tabless.tabIndex = 1
 			
    }
 			
    }
