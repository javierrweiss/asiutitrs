/**
 * // TODO generated, please specify type and doc for the params
 * @param {Object} firstShow
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"C8B5E0A4-B647-4809-BA7E-FBD249BA945C"}
 */
function onShow(firstShow, event) {
	
	if(globals.Anatpa_eventSourceButton == 1){
		
		globals.Anatpa_hisclistrynro = '';
		elements.Histclin.requestFocus();
		globals.Anatpa_activoFormBuscarPaciente = 1;
	}
	else{
		
		var largo = globals.Anatpa_hisclistrynro.length;
		var esnumero = true;
		for (var i= 0;i<largo && esnumero == true; i++){
			if (globals.Anatpa_hisclistrynro.charCodeAt(i)< 48 || globals.Anatpa_hisclistrynro.charCodeAt(i) > 57){
				esnumero = false
			}
		}
		
	    if (esnumero){
	    	if(largo<7){
	    		plugins.dialogs.showInfoDialog("Error en Nro.Internación","El número de Internación es menor a 7 digitos."+'\n'+" Completar la cantidad de dígitos.","Ok")
				
		   	}else{
	    	
			    globals.Anatpa_hiscli = utils.stringToNumber(globals.Anatpa_hisclistrynro.valueOf());
				elements.tabless_72.tabIndex = 2;
				forms.Anatpa_tbl_internado_num.elements.btn_seleccionar.requestFocus()
	    	}
	    }
	    else{
	    	globals.Anatpa_apeynom = globals.Anatpa_hisclistrynro.toLocaleUpperCase()	
	 		elements.tabless_72.tabIndex = 1;
	 		forms.Anatpa_tbl_internado_alfa.elements.btn_seleccionar.requestFocus()
	    }
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"9D5F3E20-6B6D-4014-B0BD-08A5216FE506"}
 */
function onAction_histcli(event) {
	var largo = globals.Anatpa_hisclistrynro.length;
	var esnumero = true;
	for (var i= 0;i<largo && esnumero == true; i++){
		if (globals.Anatpa_hisclistrynro.charCodeAt(i)< 48 || globals.Anatpa_hisclistrynro.charCodeAt(i) > 57){
			esnumero = false;
		}
	}
	
    if (esnumero){
    	if(largo<7){
    		plugins.dialogs.showInfoDialog("Error en Nro.Internación","El número de Internación es menor a 7 digitos."+'\n'+" Completar la cantidad de dígitos.","Ok")
			
	   	}else{
    	
		     globals.Anatpa_hiscli = utils.stringToNumber(globals.Anatpa_hisclistrynro.valueOf());
		     globals.Anatpa_activoFormBuscarPaciente = 0;
		
		     elements.tabless_72.tabIndex = 2;
		     //forms.Anatpa_tbl_internado_num.controller.focusFirstField();
		     forms.Anatpa_tbl_internado_num.elements.btn_seleccionar.requestFocus();
    	}
    }
    else{
    	globals.Anatpa_apeynom = globals.Anatpa_hisclistrynro.toLocaleUpperCase()
    	globals.Anatpa_activoFormBuscarPaciente = 0;
 			
 		elements.tabless_72.tabIndex = 1
 		//forms.Anatpa_tbl_internado_alfa.controller.focusFirstField()
 		forms.Anatpa_tbl_internado_alfa.elements.btn_seleccionar.requestFocus()
			
    }
}
