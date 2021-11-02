/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"C753DB06-A9DD-41D4-A0DD-D750C3CEB9F4"}
 */
function onShow_foco(firstShow, event) {
	controller.focusFirstField()
	elements.obr_codigo.requestFocus()
	/* Esta consulta carga la vista de la tabla tbl_obras con un fitro por obr_estado <> 2 y 
	 * obr_ctroaten <> 0
	 */  
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"DD37984A-8971-4860-A568-A97FECE26118"}
 */
function onAction_captura(event) {
	globals.gbl_cobertura = foundset.obr_codigo
	application.getWindow('Busca_cober').hide();
}

/**
 * @AllowToRunInFind
 *
 * @properties={typeid:24,uuid:"7D8BD4C3-51B2-4C6B-8E75-3DB0204C7D13"}
 */
function filtra(){
	var largo = globals.gbl_con_busca.length;
    var esnumero = true;
    
    for (var i= 0;i<largo && esnumero == true; i++){
	   if (globals.gbl_con_busca.charCodeAt(i)< 48 || globals.gbl_con_busca.charCodeAt(i) > 57){
		   esnumero = false
	   }
    }

    foundset.find()
	if(esnumero){
		foundset.obr_codigo = '>= ' +  utils.stringToNumber(globals.gbl_con_busca.valueOf())
	}else{
		foundset.obr_razonsoc = '>' +  globals.gbl_con_busca.valueOf()		
	}
	if (forms.frm_tab_coberturas.frm_campo_N1 != 0){      
        foundset.obr_tipclie = forms.frm_tab_coberturas.frm_campo_N1             
    }
	if(forms.frm_tab_coberturas.frm_campo_N2 != 9999){
        foundset.obr_estado =forms.frm_tab_coberturas.frm_campo_N2
	}
	foundset.search()	
	
	if(esnumero){
		foundset.sort('obr_codigo asc')
	}else{
		foundset.sort('obr_razonsoc asc')	
	}
}