/**
 * // TODO generated, please specify type and doc for the params
 * @param {Object} firstShow
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"B7BF89E7-E5F8-49BD-AE9A-D9B6471983DD"}
 */
function onShow(firstShow, event) {
	
	if(globals.hojaenfer_eventSourceButton == 1){

		globals.hojaenfer_histclin_apeynom = '';
		elements.Histclin.requestFocus();
		globals.hojaenfer_activoFormBuscarInternado = 1;
	}
	else{
		
		var largo = globals.hojaenfer_histclin_apeynom.length;
		var esnumero = true;
		for (var i= 0;i<largo && esnumero == true; i++){
			if (globals.hojaenfer_histclin_apeynom.charCodeAt(i)< 48 || globals.hojaenfer_histclin_apeynom.charCodeAt(i) > 57){
				esnumero = false
			}
		}
		
	    if (esnumero){
	    	if(largo<7){
	    		plugins.dialogs.showInfoDialog("Error en Nro.Internación","El número de Internación es menor a 7 digitos."+'\n'+" Completar la cantidad de dígitos.","Ok");
				
		   	}else{
	    	
			    globals.hojaenfer_hisclin = utils.stringToNumber(globals.hojaenfer_histclin_apeynom.valueOf());
				elements.tabless_72.tabIndex = 2;
				forms.hojaenfer_tbl_buscar_internado_nro.elements.adm_histclin.requestFocus();
	    	}
	    }
	    else{
	    	globals.hojaenfer_apeynom = globals.hojaenfer_histclin_apeynom.toLocaleUpperCase();	
	 		elements.tabless_72.tabIndex = 1;
	 		forms.hojaenfer_tbl_buscar_internado_alfa.elements.adm_histclin.requestFocus();
	    }
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"FA06B528-B9FE-4D22-A92B-73C4F947B960"}
 */
function onAction_histcli(event) {
	var largo = globals.hojaenfer_histclin_apeynom.length;
	var esnumero = true;
	for (var i= 0;i<largo && esnumero == true; i++){
		if (globals.hojaenfer_histclin_apeynom.charCodeAt(i)< 48 || globals.hojaenfer_histclin_apeynom.charCodeAt(i) > 57){
			esnumero = false;
		}
	}
	
    if (esnumero){
    	if(largo<7){
    		plugins.dialogs.showInfoDialog("Error en Nro.Internación","El número de Internación es menor a 7 digitos."+'\n'+" Completar la cantidad de dígitos.","Ok")
			
	   	}else{
    	
		     globals.hojaenfer_hisclin = utils.stringToNumber(globals.hojaenfer_histclin_apeynom.valueOf());
		     globals.hojaenfer_activoFormBuscarInternado = 0;
		
		     elements.tabless_72.tabIndex = 2;
		     forms.hojaenfer_tbl_buscar_internado_nro.controller.focusFirstField();
		     forms.hojaenfer_tbl_buscar_internado_nro.elements.adm_histclin.requestFocus();
    	}
    }
    else{
    	globals.hojaenfer_apeynom = globals.hojaenfer_histclin_apeynom.toLocaleUpperCase();
    	globals.hojaenfer_activoFormBuscarInternado = 0;
 		elements.tabless_72.tabIndex = 1;
 		forms.hojaenfer_tbl_buscar_internado_alfa.controller.focusFirstField();
 		forms.hojaenfer_tbl_buscar_internado_alfa.elements.adm_histclin.requestFocus();	
    }
}
