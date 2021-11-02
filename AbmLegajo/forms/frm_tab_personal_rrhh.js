/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"445FA4F6-BADD-4210-B18F-7568BAD7AE67"}
 * @AllowToRunInFind
 */
function onAction_FIND(event) {
	var largo = globals.vAlfaPer.length;
	var esnumero = true;
	for (var i= 0;i<largo && esnumero == true; i++){
		if (globals.vAlfaPer.charCodeAt(i)< 48 || globals.vAlfaPer.charCodeAt(i) > 57){
			esnumero = false
		}
	}
    if (esnumero){
    	globals.per_1 = utils.stringToNumber(globals.vAlfaPer.valueOf());
    	    
			//application.output(globals.per_1)
    	    /*
			if(forms.frm_scr_personal_rrhh_N.foundset.find()){
				forms.frm_scr_personal_rrhh_N.foundset.per_1= '>= '+globals.per_1
				forms.frm_scr_personal_rrhh_N.foundset.search()
			}
			*/
			application.updateUI()
			elements.tabless.tabIndex = 2
    }
    else{
    	 globals.vAlfaPer = globals.vAlfaPer.toLocaleUpperCase()
		 //application.output(globals.vAlfaPer)
		  application.updateUI()
		 elements.tabless.tabIndex = 1
    }
}
