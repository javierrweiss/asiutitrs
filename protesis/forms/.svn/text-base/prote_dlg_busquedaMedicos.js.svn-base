/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"D93C4F08-F1E5-4C1F-9D1F-596514459E9F"}
 */
function onAction_FIND(event) {
	globals.prote_activoFormBuscarMedico = 0;
	
	globals.vProfeAlfa=globals.vProfeAlfa.toLocaleUpperCase()
	elements.tabless_medicos_personal.tabIndex = 1
	forms.prote_tbl_medicos.controller.focusFirstField()
	forms.prote_tbl_medicos.elements.codigo.requestFocus()
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"F1666852-FB8C-4025-8DC3-7EB82F309E2E"}
 */
function onShow_busqueda_interven(firstShow, event) {
	
	if(globals.gbl_eventSourceButton == 1){
		
		globals.vProfeAlfa = '';
		elements.buscar.requestFocus();
		globals.prote_activoFormBuscarMedico = 0;
	}
	else{
		
		var largo = globals.vProfeAlfa.length;
		var esnumero = true;
		for (var i= 0;i<largo && esnumero == true; i++){
			if (globals.vProfeAlfa.charCodeAt(i)< 48 || globals.vProfeAlfa.charCodeAt(i) > 57){
				esnumero = false
			}
		}
		
	    if (esnumero){
	    	if(largo<7){
	    		plugins.dialogs.showInfoDialog("Error en legajo.","El número de Legajo es menor a 7 digitos."+'\n'+" Completar la cantidad de dígitos.","Ok")
				
		   	}else{
	    	
			    //globals.gbl_hiscli_protesis = utils.stringToNumber(globals.pHisclistrynro.valueOf());
		   		globals.prote_activoFormBuscarMedico = 0;
				//elements.tabless_72.tabIndex = 2;
				//forms.frm_scr_tbc_admision_N_protesis.elements.adm_histclin.requestFocus();
				
	    	}
	    }
	    else{
			 
			 globals.vProfeAlfa=globals.vProfeAlfa.toLocaleUpperCase();
			 globals.prote_activoFormBuscarMedico = 0;
			 
			 elements.tabless_medicos_personal.tabIndex = 1
			 forms.prote_tbl_medicos.controller.focusFirstField()
			 forms.prote_tbl_medicos.elements.codigo.requestFocus()
				
	    }
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"3D63F5F0-9759-4C02-80F5-0F95F8D1BF34"}
 */
function onAction_ayuda_medicos_personal(event) {
	globals.textoAyuda='AYUDA-8'
	var win = application.createWindow("p",JSWindow.MODAL_DIALOG)
	win.title = "Ayuda en Búsqueda de Médicos";
	win.setLocation(810,300)
	win.setSize(500,350)
	//win.show(forms.frm_ayuda_gral_Z)
}
