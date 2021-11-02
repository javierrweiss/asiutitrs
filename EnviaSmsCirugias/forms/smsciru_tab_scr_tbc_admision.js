/**
 * // TODO generated, please specify type and doc for the params
 * @param {Object} firstShow
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"CB442F35-DF75-473E-8978-DDF4C0488713"}
 */
function onShow(firstShow, event) {
	
	
	if(globals.smsciru_gbl_eventSourceButton == 1){
		//globals.gbl_apeynom_protesis='';
		//globals.gbl_hiscli_protesis = 0;
		globals.vHisclistrynro = '';
		elements.Histclin.requestFocus();
		globals.smsciru_gbl_activoFormBuscarInternado = 1;
	}
	else{
		
		var largo = globals.vHisclistrynro.length;
		var esnumero = true;
		for (var i= 0;i<largo && esnumero == true; i++){
			if (globals.vHisclistrynro.charCodeAt(i)< 48 || globals.vHisclistrynro.charCodeAt(i) > 57){
				esnumero = false
			}
		}
		
	    if (esnumero){
	    	if(largo<7){
	    		globals.DIALOGS.showInfoDialog("Error en Nro.Internación","El número de Internación es menor a 7 digitos."+'\n'+" Completar la cantidad de dígitos.","Ok")
				
		   	}else{
	    	
			     globals.vHiscli = utils.stringToNumber(globals.vHisclistrynro.valueOf());
			
			
				//plugins.dialogs.showInfoDialog("",globals.vHiscli,"ok")
				//globals.muestroNuevoDatasetN("frm_scr_tbc_admision_N")
				
				elements.tabless_72.tabIndex = 2	
				//forms.frm_scr_tbc_admision_N_protesis.controller.focusFirstField()
				forms.smsciru_frm_scr_tbc_admision_N.elements.adm_histclin.requestFocus()
				
	    	}
	    }
	    else{
	    	 globals.vAlfa = globals.vHisclistrynro.toLocaleUpperCase()
	 			//globals.muestroNuevoDatasetAlfa("tbc_admisionL_copy")
	 			elements.tabless_72.tabIndex = 1
	 			//forms.frm_scr_tbc_admision_L_protesis.controller.focusFirstField()
	 		    forms.smsciru_frm_scr_tbc_admision_L.elements.adm_histclin.requestFocus()
				
	    }
	}
	
	//forms.tab_scr_tbc_admision.controller.focusFirstField()
	//forms.tab_scr_tbc_admision.elements.Histclin.requestFocus()
	//forms.tab_scr_tbc_admision.elements.tabless_72.tabIndex=1
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"37779408-0066-4845-A932-F1D477DF481B"}
 */
function onAction_histcli(event) {
	var largo = globals.vHisclistrynro.length;
	var esnumero = true;
	for (var i= 0;i<largo && esnumero == true; i++){
		if (globals.vHisclistrynro.charCodeAt(i)< 48 || globals.vHisclistrynro.charCodeAt(i) > 57){
			esnumero = false
		}
	}
	
    if (esnumero){
    	if(largo<7){
    		globals.DIALOGS.showInfoDialog("Error en Nro.Internación","El número de Internación es menor a 7 digitos."+'\n'+" Completar la cantidad de dígitos.","Ok")
			
	   	}else{
    	
		     globals.vHiscli = utils.stringToNumber(globals.vHisclistrynro.valueOf());
		     globals.smsciru_gbl_activoFormBuscarInternado = 0;
		
			//plugins.dialogs.showInfoDialog("",globals.vHiscli,"ok")
			//globals.muestroNuevoDatasetN("frm_scr_tbc_admision_N")
			
			elements.tabless_72.tabIndex = 2	
			forms.smsciru_frm_scr_tbc_admision_N.controller.focusFirstField()
			forms.smsciru_frm_scr_tbc_admision_N.elements.adm_histclin.requestFocus()
			
    	}
    }
    else{
    	 globals.vAlfa = globals.vHisclistrynro.toLocaleUpperCase()
    	 globals.smsciru_gbl_activoFormBuscarInternado = 0;
 			//globals.muestroNuevoDatasetAlfa("tbc_admisionL_copy")
 			elements.tabless_72.tabIndex = 1
 			forms.smsciru_frm_scr_tbc_admision_L.controller.focusFirstField()
 		    forms.smsciru_frm_scr_tbc_admision_L.elements.adm_histclin.requestFocus()
			
    }
}
