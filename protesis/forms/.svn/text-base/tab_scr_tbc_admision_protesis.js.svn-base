/**
 * // TODO generated, please specify type and doc for the params
 * @param {Object} firstShow
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"2F93EB8B-0F9D-4619-BB63-3FE19F4373F8"}
 */
function onShow(firstShow, event) {
	
	
	if(globals.gbl_eventSourceButton == 1){
		//globals.gbl_apeynom_protesis='';
		//globals.gbl_hiscli_protesis = 0;
		globals.pHisclistrynro = '';
		elements.Histclin.requestFocus();
		globals.gbl_activoFormBuscarInternado = 1;
	}
	else{
		
		var largo = globals.pHisclistrynro.length;
		var esnumero = true;
		for (var i= 0;i<largo && esnumero == true; i++){
			if (globals.pHisclistrynro.charCodeAt(i)< 48 || globals.pHisclistrynro.charCodeAt(i) > 57){
				esnumero = false
			}
		}
		
	    if (esnumero){
	    	if(largo<7){
	    		plugins.dialogs.showInfoDialog("Error en Nro.Internación","El número de Internación es menor a 7 digitos."+'\n'+" Completar la cantidad de dígitos.","Ok")
				
		   	}else{
	    	
			     globals.gbl_hiscli_protesis = utils.stringToNumber(globals.pHisclistrynro.valueOf());
			
			
				//plugins.dialogs.showInfoDialog("",globals.vHiscli,"ok")
				//globals.muestroNuevoDatasetN("frm_scr_tbc_admision_N")
				
				elements.tabless_72.tabIndex = 2	
				//forms.frm_scr_tbc_admision_N_protesis.controller.focusFirstField()
				forms.frm_scr_tbc_admision_N_protesis.elements.adm_histclin.requestFocus()
				
	    	}
	    }
	    else{
	    	 globals.gbl_apeynom_protesis = globals.pHisclistrynro.toLocaleUpperCase()
	 			//globals.muestroNuevoDatasetAlfa("tbc_admisionL_copy")
	 			elements.tabless_72.tabIndex = 1
	 			//forms.frm_scr_tbc_admision_L_protesis.controller.focusFirstField()
	 		    forms.frm_scr_tbc_admision_L_protesis.elements.adm_histclin.requestFocus()
				
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
 * @properties={typeid:24,uuid:"742EE106-7432-4589-8D6B-E9FD4ECE3DFF"}
 */
function onAction_histcli(event) {
	var largo = globals.pHisclistrynro.length;
	var esnumero = true;
	for (var i= 0;i<largo && esnumero == true; i++){
		if (globals.pHisclistrynro.charCodeAt(i)< 48 || globals.pHisclistrynro.charCodeAt(i) > 57){
			esnumero = false
		}
	}
	
    if (esnumero){
    	if(largo<7){
    		plugins.dialogs.showInfoDialog("Error en Nro.Internación","El número de Internación es menor a 7 digitos."+'\n'+" Completar la cantidad de dígitos.","Ok")
			
	   	}else{
    	
		     globals.gbl_hiscli_protesis = utils.stringToNumber(globals.pHisclistrynro.valueOf());
		     globals.gbl_activoFormBuscarInternado = 0;
		
			//plugins.dialogs.showInfoDialog("",globals.vHiscli,"ok")
			//globals.muestroNuevoDatasetN("frm_scr_tbc_admision_N")
			
			elements.tabless_72.tabIndex = 2	
			forms.frm_scr_tbc_admision_N_protesis.controller.focusFirstField()
			forms.frm_scr_tbc_admision_N_protesis.elements.adm_histclin.requestFocus()
			
    	}
    }
    else{
    	 globals.gbl_apeynom_protesis = globals.pHisclistrynro.toLocaleUpperCase()
    	 globals.gbl_activoFormBuscarInternado = 0;
 			//globals.muestroNuevoDatasetAlfa("tbc_admisionL_copy")
 			elements.tabless_72.tabIndex = 1
 			forms.frm_scr_tbc_admision_L_protesis.controller.focusFirstField()
 		    forms.frm_scr_tbc_admision_L_protesis.elements.adm_histclin.requestFocus()
			
    }
}
