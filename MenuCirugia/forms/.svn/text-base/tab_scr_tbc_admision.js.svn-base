/**
 * // TODO generated, please specify type and doc for the params
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"E0F6DCC8-07A7-4689-A50A-C8365F0C0369"}
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
    	
		     globals.vHiscli = utils.stringToNumber(globals.vHisclistrynro.valueOf());
		
		
			//plugins.dialogs.showInfoDialog("",globals.vHiscli,"ok")
			//globals.muestroNuevoDatasetN("frm_scr_tbc_admision_N")
			
			elements.tabless_72.tabIndex = 2	
			//forms.frm_scr_tbc_admision_N.controller.focusFirstField()
			//forms.frm_scr_tbc_admision_N.elements.adm_histclin.requestFocus()
    	}
    }
    else{
    	 globals.vAlfa = globals.vHisclistrynro.toLocaleUpperCase()
 		
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
 * @properties={typeid:24,uuid:"703860A3-4A8B-4310-BE51-B78DD7CC2DF6"}
 */
function onShow(firstShow, event) {
	globals.vHisclistrynro='';
	globals.vAlfa='';
	globals.vservicio=0
	globals.vantinstru=''
	globals.valergia=''
	globals.vmaterial=''
	globals.vmuestras=''
	globals.vdesinstru=''
	globals.vcodnome=0	
	globals.vtipohist = 0
	//globals.vhiscli = 0
	//globals.vhisclinica = ''
	forms.frm_menu_0.elements.lbl_cirugia.visible = false
	forms.frm_menu_0.elements.vservicio.visible = false
	forms.frm_menu_0.elements.vcodnome.visible = false
	forms.frm_menu_0.elements.icod_descrcod.visible = false
	//databaseManager.refreshRecordFromDatabase(vhiscli_to_tbc_admision_scroll,-1)
	//databaseManager.refreshRecordFromDatabase(valfa_to_tbc_admision_scroll,-1)
	forms.tab_scr_tbc_admision.controller.focusFirstField()
	forms.tab_scr_tbc_admision.elements.Histclin.requestFocus()
	forms.tab_scr_tbc_admision.elements.tabless_72.tabIndex=1
}

/**
 * // TODO generated, please specify type and doc for the params
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"782691C7-B235-42CC-858E-B31BDB9EA48A"}
 */
function onAction_btn_volver(event) {
	globals.vClose=true
	var args1 = globals.vLegajo+';'+globals.vLega+';'+globals.vOperador+';'+globals.vTipoOperador+';'+"true";
	application.closeSolution('Menu','retorno_MenuCirugia',args1)
	//globals.vLegajo=0
	//globals.vClave=0
	//globals.vOperador=''
	//globals.vPassOperador=''
	//forms.LoginCirugia.controller.show()
}

/**
 * // TODO generated, please specify type and doc for the params
 * @param {Object} oldValue
 * @param {Object} newValue
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"2A8FAA84-DCCB-4CE2-BC1C-0565347442D0"}
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
    	
		     globals.vHiscli = utils.stringToNumber(globals.vHisclistrynro.valueOf());
		
		
			//plugins.dialogs.showInfoDialog("",globals.vHiscli,"ok")
			//globals.muestroNuevoDatasetN("frm_scr_tbc_admision_N")
			
			elements.tabless_72.tabIndex = 2	
			forms.frm_scr_tbc_admision_N_1.controller.focusFirstField()
			forms.frm_scr_tbc_admision_N_1.elements.adm_histclin.requestFocus()
			return true
    	}
    }
    else{
    	 globals.vAlfa = globals.vHisclistrynro.toLocaleUpperCase()
 		
 			//globals.muestroNuevoDatasetAlfa("tbc_admisionL_copy")
 			elements.tabless_72.tabIndex = 1
 			forms.frm_scr_tbc_admision_L_1.controller.focusFirstField()
 		    forms.frm_scr_tbc_admision_L_1.elements.adm_histclin.requestFocus()
			return true
    }
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"AED35579-857F-4B00-BF25-BB93F6C24EB2"}
 */
function onAction_ayuda_busqueda_pacientes(event) {
	globals.textoAyuda='AYUDA-2'
	var win = application.createWindow("p",JSWindow.MODAL_DIALOG)
	win.title = "Ayuda en Búsqueda de Pacientes Internados";
	win.setLocation(810,300)
	win.setSize(500,350)
	win.show(forms.frm_ayuda_1)
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"E79985AB-A3D8-4B20-BABB-009C398F98F7"}
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
    	
		     globals.vHiscli = utils.stringToNumber(globals.vHisclistrynro.valueOf());
		
		
			//plugins.dialogs.showInfoDialog("",globals.vHiscli,"ok")
			//globals.muestroNuevoDatasetN("frm_scr_tbc_admision_N")
			
			elements.tabless_72.tabIndex = 2	
			forms.frm_scr_tbc_admision_N_1.controller.focusFirstField()
			forms.frm_scr_tbc_admision_N_1.elements.adm_histclin.requestFocus()
			
    	}
    }
    else{
    	 globals.vAlfa = globals.vHisclistrynro.toLocaleUpperCase()
 		
 			//globals.muestroNuevoDatasetAlfa("tbc_admisionL_copy")
 			elements.tabless_72.tabIndex = 1
 			forms.frm_scr_tbc_admision_L_1.controller.focusFirstField()
 		    forms.frm_scr_tbc_admision_L_1.elements.adm_histclin.requestFocus()
			
    }
}
