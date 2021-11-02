/**
 * // TODO generated, please specify type and doc for the params
 * @param {Object} firstShow
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"A418B4F3-FDF2-4F36-8E8C-F7D33A5B79FF"}
 */
function onShow(firstShow, event) {
	
	if(globals.Hcicir_eventSourceButton == 1){
		
		globals.Hcicir_hisclistrynro = '';
		elements.Histclin.requestFocus();
		globals.Hcicir_activoFormBuscarPaciente = 1;
	}
	else{
		
		var largo = globals.Hcicir_hisclistrynro.length;
		var esnumero = true;
		for (var i= 0;i<largo && esnumero == true; i++){
			if (globals.Hcicir_hisclistrynro.charCodeAt(i)< 48 || globals.Hcicir_hisclistrynro.charCodeAt(i) > 57){
				esnumero = false
			}
		}
		
	    if (esnumero){
	    	if(largo<7){
	    		plugins.dialogs.showInfoDialog("Error en Nro.Internación","El número de Internación es menor a 7 digitos."+'\n'+" Completar la cantidad de dígitos.","Ok")
				
		   	}else{
	    	
			    globals.Hcicir_hiscli = utils.stringToNumber(globals.Hcicir_hisclistrynro.valueOf());
				elements.tabless_72.tabIndex = 2;
				forms.Hcicir_tbl_internado_num.controller.setSelectedIndex(1);
				forms.Hcicir_tbl_internado_num.elements.btn_seleccionar.requestFocus()
				
	    	}
	    }
	    else{
	    	globals.Hcicir_apeynom = globals.Hcicir_hisclistrynro.toLocaleUpperCase()	
	 		elements.tabless_72.tabIndex = 1;
	    	forms.Hcicir_tbl_internado_alfa.controller.setSelectedIndex(1);
	 		forms.Hcicir_tbl_internado_alfa.elements.btn_seleccionar.requestFocus()
	    }
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"39603E00-5C94-4789-9813-4C8C85E1D56A"}
 */
function onAction_histcli(event) {
	var largo = globals.Hcicir_hisclistrynro.length;
	var esnumero = true;
	for (var i= 0;i<largo && esnumero == true; i++){
		if (globals.Hcicir_hisclistrynro.charCodeAt(i)< 48 || globals.Hcicir_hisclistrynro.charCodeAt(i) > 57){
			esnumero = false;
		}
	}
	
    if (esnumero){
    	if(largo<7){
    		plugins.dialogs.showInfoDialog("Error en Nro.Internación","El número de Internación es menor a 7 digitos."+'\n'+" Completar la cantidad de dígitos.","Ok")
			
	   	}else{
    	
		     globals.Hcicir_hiscli = utils.stringToNumber(globals.Hcicir_hisclistrynro.valueOf());
		     globals.Hcicir_activoFormBuscarPaciente = 0;
		
		     elements.tabless_72.tabIndex = 2;
		     forms.Hcicir_tbl_internado_num.controller.setSelectedIndex(1);
		     //forms.Hcicir_tbl_internado_num.controller.focusFirstField();
		     forms.Hcicir_tbl_internado_num.elements.btn_seleccionar.requestFocus();
    	}
    }
    else{
    	globals.Hcicir_apeynom = globals.Hcicir_hisclistrynro.toLocaleUpperCase()
    	globals.Hcicir_activoFormBuscarPaciente = 0;
 			
 		elements.tabless_72.tabIndex = 1
 		forms.Hcicir_tbl_internado_alfa.controller.setSelectedIndex(1);
 		//forms.Hcicir_tbl_internado_alfa.controller.focusFirstField()
 		forms.Hcicir_tbl_internado_alfa.elements.btn_seleccionar.requestFocus()
			
    }
}
