/**
 * // TODO generated, please specify type and doc for the params
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"9307648A-2BEA-444F-AD65-F7390CD92DD9"}
 */
function onAction_FIND_LetrasOnumeros(event) {
	var largo = globals.vHisclistrynro.length;
	var esnumero = true;
	for (var i= 0;i<largo && esnumero == true; i++){
		if (globals.vHisclistrynro.charCodeAt(i)< 48 || globals.vHisclistrynro.charCodeAt(i) > 57){
			esnumero = false
		}
	}
	
    if (esnumero){
    	if(largo<7){
    		plugins.dialogs.showInfoDialog("Error en Nro.Internación","El número de Internación es menor a 7 digitos."+'\n'+" Completar la cantidad de dígitos.","Ok")
			if (event.getType() == JSEvent.ACTION) {
				elements.Histclin.requestFocus()
			}
	   	}else{
    	
		     globals.gbl_hiscli = utils.stringToNumber(globals.vHisclistrynro.valueOf()); 
		
		
			//plugins.dialogs.showInfoDialog("",globals.vHiscli,"ok")
			//globals.muestroNuevoDatasetN("frm_scr_tbc_admision_N")
			
			elements.tabless_72.tabIndex = 2	
			//forms.frm_scr_tbc_admision_N.controller.focusFirstField()
			//forms.frm_scr_tbc_admision_N.elements.adm_histclin.requestFocus()
    	}
    }
    else{
    	 globals.gbl_apeynom = globals.vHisclistrynro.toLocaleUpperCase()
 		
 			//globals.muestroNuevoDatasetAlfa("tbc_admisionL_copy")
 			elements.tabless_72.tabIndex = 1
 			//forms.frm_scr_tbc_admision_L.controller.focusFirstField()
 		    //forms.frm_scr_tbc_admision_L.elements.adm_histclin.requestFocus()
    }
}

/**
 * // TODO generated, please specify type and doc for the params
 * @param {Object} firstShow
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"48A27A39-B0C9-455F-BEFF-64560FB3B528"}
 */
function onShow(firstShow, event) {
	//globals.vHisclistrynro='';
	globals.gbl_apeynom='';
	
	var largo = globals.vHisclistrynro.length;
	var esnumero = true;
	for (var i= 0;i<largo && esnumero == true; i++){
		if (globals.vHisclistrynro.charCodeAt(i)< 48 || globals.vHisclistrynro.charCodeAt(i) > 57){
			esnumero = false
		}
	}
	
    if (esnumero){
    	if(largo<7){
    		plugins.dialogs.showInfoDialog("Error en Nro.Internación","El número de Internación es menor a 7 digitos."+'\n'+" Completar la cantidad de dígitos.","Ok")
			
	   	}else{
    	
		     globals.gbl_hiscli = utils.stringToNumber(globals.vHisclistrynro.valueOf());
		
		
			//plugins.dialogs.showInfoDialog("",globals.vHiscli,"ok")
			//globals.muestroNuevoDatasetN("frm_scr_tbc_admision_N")
			
			elements.tabless_72.tabIndex = 2	
			forms.frm_scr_tbc_admision_N.controller.focusFirstField()
			forms.frm_scr_tbc_admision_N.elements.adm_histclin.requestFocus()
			
    	}
    }
    else{
    	 globals.gbl_apeynom = globals.vHisclistrynro.toLocaleUpperCase()
 			//globals.muestroNuevoDatasetAlfa("tbc_admisionL_copy")
 			elements.tabless_72.tabIndex = 1
 			forms.frm_scr_tbc_admision_L.controller.focusFirstField()
 		    forms.frm_scr_tbc_admision_L.elements.adm_histclin.requestFocus()
			
    }
	//forms.tab_scr_tbc_admision.controller.focusFirstField()
	//forms.tab_scr_tbc_admision.elements.Histclin.requestFocus()
	//forms.tab_scr_tbc_admision.elements.tabless_72.tabIndex=1
}

/**
 * // TODO generated, please specify type and doc for the params
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"725EB321-E5BE-49C2-8E9C-DFFE34ECF353"}
 */
function onAction_btn_volver(event) {

}

/**
 * // TODO generated, please specify type and doc for the params
 * @param {Object} oldValue
 * @param {Object} newValue
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"A09FF55C-0DE8-4442-A5BB-9C7D9CFF1EF5"}
 */
function onDataChange_FIND_LetrasOnumeros(oldValue, newValue, event) {
	
	
	var largo = globals.vHisclistrynro.length;
	var esnumero = true;
	for (var i= 0;i<largo && esnumero == true; i++){
		if (globals.vHisclistrynro.charCodeAt(i)< 48 || globals.vHisclistrynro.charCodeAt(i) > 57){
			esnumero = false
		}
	}
	
    if (esnumero){
    	if(largo<7){
    		plugins.dialogs.showInfoDialog("Error en Nro.Internación","El número de Internación es menor a 7 digitos."+'\n'+" Completar la cantidad de dígitos.","Ok")
			return false
	   	}else{
    	
		     globals.gbl_hiscli = utils.stringToNumber(globals.vHisclistrynro.valueOf());
		
		
			//plugins.dialogs.showInfoDialog("",globals.vHiscli,"ok")
			//globals.muestroNuevoDatasetN("frm_scr_tbc_admision_N")
			
			elements.tabless_72.tabIndex = 2	
			forms.frm_scr_tbc_admision_N.controller.focusFirstField()
			forms.frm_scr_tbc_admision_N.elements.adm_histclin.requestFocus()
			return true
    	}
    }
    else{
    	 globals.gbl_apeynom = globals.vHisclistrynro.toLocaleUpperCase()
 		
 			//globals.muestroNuevoDatasetAlfa("tbc_admisionL_copy")
 			elements.tabless_72.tabIndex = 1
 			forms.frm_scr_tbc_admision_L.controller.focusFirstField()
 		    forms.frm_scr_tbc_admision_L.elements.adm_histclin.requestFocus()
			return true
    }
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"242B7D55-56D3-433B-B585-5BD1730E5EC5"}
 */
function onAction_ayuda_busqueda_pacientes(event) {
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"DFF8DEBF-610E-41EC-BEB8-6414696FA0ED"}
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
    		plugins.dialogs.showInfoDialog("Error en Nro.Internación","El número de Internación es menor a 7 digitos."+'\n'+" Completar la cantidad de dígitos.","Ok")
			
	   	}else{
    	
		     globals.gbl_hiscli = utils.stringToNumber(globals.vHisclistrynro.valueOf());
		
		
			//plugins.dialogs.showInfoDialog("",globals.vHiscli,"ok")
			//globals.muestroNuevoDatasetN("frm_scr_tbc_admision_N")
			
			elements.tabless_72.tabIndex = 2	
			forms.frm_scr_tbc_admision_N.controller.focusFirstField()
			forms.frm_scr_tbc_admision_N.elements.adm_histclin.requestFocus()
			
    	}
    }
    else{
    	 globals.gbl_apeynom = globals.vHisclistrynro.toLocaleUpperCase()
 		
 			//globals.muestroNuevoDatasetAlfa("tbc_admisionL_copy")
 			elements.tabless_72.tabIndex = 1
 			forms.frm_scr_tbc_admision_L.controller.focusFirstField()
 		    forms.frm_scr_tbc_admision_L.elements.adm_histclin.requestFocus()
			
    }
}
