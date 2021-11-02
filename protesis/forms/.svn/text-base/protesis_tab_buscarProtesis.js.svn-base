/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"09BA60DC-96C6-4C67-BD9E-C14A438796A5"}
 */
function onShow_carga_formulario(firstShow, event) {
	if(globals.gbl_eventSourceButton == 1){
		
		globals.gbl_protesisDescripcion = String('a').toLocaleUpperCase()	
 		elements.tabless.tabIndex = 1
 		//forms.protesis_tbl_protesisDescripcion.elements.mp_codiprot.requestFocus()
	
		globals.gbl_protesisCodDesc = '';
		elements.txt_codDesc.requestFocus();
		globals.gbl_activoFormBuscarInternado = 1;
	}
	else{
		
		var largo = globals.gbl_protesisCodDesc.length;
		var esnumero = true;
		for (var i= 0;i<largo && esnumero == true; i++){
			if (globals.gbl_protesisCodDesc.charCodeAt(i)< 48 || globals.gbl_protesisCodDesc.charCodeAt(i) > 57){
				esnumero = false
			}
		}
		
	    if (esnumero){
	    	//if(largo<7){
	    		//plugins.dialogs.showInfoDialog("Error en Nro.Internación","El número de Internación es menor a 7 digitos."+'\n'+" Completar la cantidad de dígitos.","Ok")
				
		   	//}else{
	    	
			    globals.gbl_protesisCodigo = utils.stringToNumber(globals.gbl_protesisCodDesc.valueOf());
				elements.tabless.tabIndex = 2					
				forms.protesis_tbl_protesisCodigo.elements.mp_codiprot.requestFocus();
	    	//}
	    }
	    else{
	    	globals.gbl_protesisDescripcion = globals.gbl_protesisCodDesc.toLocaleUpperCase()	
	 		elements.tabless.tabIndex = 1
	 		forms.protesis_tbl_protesisDescripcion.elements.mp_codiprot.requestFocus()		
	    }
	} 
}

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"F67E7399-7231-4BE7-97C4-CC35730C0122"}
 */
function onAction_histcli(event) {
	var largo = globals.gbl_protesisCodDesc.length;
	var esnumero = true;
	for (var i= 0;i<largo && esnumero == true; i++){
		if (globals.gbl_protesisCodDesc.charCodeAt(i)< 48 || globals.gbl_protesisCodDesc.charCodeAt(i) > 57){
			esnumero = false
		}
	}
	
    if (esnumero){
    	//if(largo<7){
    		//plugins.dialogs.showInfoDialog("Error en Nro.Internación","El número de Internación es menor a 7 digitos."+'\n'+" Completar la cantidad de dígitos.","Ok")
			
	   	//}else{
    	
		    globals.gbl_protesisCodigo = utils.stringToNumber(globals.gbl_protesisCodDesc.valueOf());
		    globals.gbl_activoFormBuscarInternado = 0;
			elements.tabless.tabIndex = 2
			forms.protesis_tbl_protesisCodigo.controller.focusFirstField()
			forms.protesis_tbl_protesisCodigo.elements.mp_codiprot.requestFocus()
			
    	//}
    }
    else{
    	globals.gbl_protesisDescripcion = globals.gbl_protesisCodDesc.toLocaleUpperCase()
    	globals.gbl_activoFormBuscarInternado = 0;
 		elements.tabless.tabIndex = 1
 		forms.protesis_tbl_protesisDescripcion.controller.focusFirstField()
 		forms.protesis_tbl_protesisDescripcion.elements.mp_codiprot.requestFocus()
			
    }
}
