/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"4D056786-DD38-4B6B-9EA2-233D2E69E5F2"}
 */
function onAction_FIND(event) {
	globals.prote_activoFormBuscarInterven = 0;
	
	globals.prote_intervenAlfa=globals.prote_intervenAlfa.toLocaleUpperCase()
	//elements.tabless_30.tabIndex = 1
	forms.prote_tbl_intervenciones.controller.focusFirstField()
	forms.prote_tbl_intervenciones.elements.itv_codi.requestFocus()
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"130EEB79-3764-4480-95EB-B7BDFBEEAF99"}
 */
function onShow_busqueda_interven(firstShow, event) {
	
	/*
		if (globals.vEsHemodinamia=="Si"){
			databaseManager.removeTableFilterParam("maestros","RESTO")
			databaseManager.addTableFilterParam("maestros","tbc_interven","itv_tipestudio","in",[2,3],"HEMO")
		}else{
			databaseManager.removeTableFilterParam("maestros","HEMO")
			databaseManager.addTableFilterParam("maestros","tbc_interven","itv_tipestudio","in",[0,1],"RESTO")
		}
		
	*/
	
if(globals.gbl_eventSourceButton == 1){
		
		globals.prote_intervenAlfa = '';
		elements.buscar.requestFocus();
		globals.prote_activoFormBuscarInterven = 0;
	}
	else{
		
		var largo = globals.prote_intervenAlfa.length;
		var esnumero = true;
		for (var i= 0;i<largo && esnumero == true; i++){
			if (globals.prote_intervenAlfa.charCodeAt(i)< 48 || globals.prote_intervenAlfa.charCodeAt(i) > 57){
				esnumero = false
			}
		}
		
	    if (esnumero){
	    	if(largo<7){
	    		plugins.dialogs.showInfoDialog("Error en legajo.","El número de Legajo es menor a 7 digitos."+'\n'+" Completar la cantidad de dígitos.","Ok")
				
		   	}else{
	    	
			    //globals.gbl_hiscli_protesis = utils.stringToNumber(globals.pHisclistrynro.valueOf());
		   		globals.prote_activoFormBuscarInterven = 0;
				//elements.tabless_72.tabIndex = 2;
				//forms.frm_scr_tbc_admision_N_protesis.elements.adm_histclin.requestFocus();
				
	    	}
	    }
	    else{
			 
			 globals.prote_intervenAlfa=globals.prote_intervenAlfa.toLocaleUpperCase();
			 globals.prote_activoFormBuscarInterven = 0;
			 
			 //elements.tabless_30.tabIndex = 1
			 forms.prote_tbl_intervenciones.controller.focusFirstField()
			 forms.prote_tbl_intervenciones.elements.itv_codi.requestFocus()
				
	    }
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"3C406039-CB9C-470E-8F57-F8B8940ECE3F"}
 */
function onAction_ayuda_busqueda_interven(event) {
	globals.textoAyuda='AYUDA-7'
	var win = application.createWindow("p",JSWindow.MODAL_DIALOG)
	win.title = "Ayuda en Búsqueda de Código de Intervención";
	win.setLocation(810,300)
	win.setSize(500,350)
	win.show(forms.frm_ayuda_gral_Z)
}
