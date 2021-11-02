/**
 * // TODO generated, please specify type and doc for the params
 * @param {Object} firstShow
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"B0DAE133-C58B-4EB2-A52C-AA8004C6F250"}
 */
function onShow(firstShow, event) {
	
	//El origen de la busqueda es mediante la accion sobre un boton 1
	if(globals.AsiUcoTrs_eventSourceButton == 1){
		
		globals.AsiUcoTrs_hisclistrynro = '';
		elements.Histclin.requestFocus();
		
	}
	else{
		
		var largo = globals.AsiUcoTrs_hisclistrynro.length;
		var esnumero = true;
		for (var i= 0;i<largo && esnumero == true; i++){
			if (globals.AsiUcoTrs_hisclistrynro.charCodeAt(i)< 48 || globals.AsiUcoTrs_hisclistrynro.charCodeAt(i) > 57){
				esnumero = false
			}
		}
		
	    if (esnumero){
	    	if(largo<7){
	    		plugins.dialogs.showInfoDialog("Error en Nro.Internación","El número de Internación es menor a 7 digitos."+'\n'+" Completar la cantidad de dígitos.","Ok")
				
		   	}else{
	    	
			    globals.AsiUcoTrs_hisclin = utils.stringToNumber(globals.AsiUcoTrs_hisclistrynro.valueOf());
				elements.tab_scroll.tabIndex = 2;
				forms.AsiUcoTrs_tbl_internado_num.controller.setSelectedIndex(1);
				forms.AsiUcoTrs_tbl_internado_num.elements.btn_seleccionar.requestFocus()
	    	}
	    }
	    else{
	    	
	    	creoDatasetInternadosAlfabetico();	
	 		elements.tab_scroll.tabIndex = 1;
	    	forms.AsiUcoTrs_tbl_internado_alfa.controller.setSelectedIndex(1);
	 		forms.AsiUcoTrs_tbl_internado_alfa.elements.btn_seleccionar.requestFocus()
	    }
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"49CBC47E-8A5D-43B3-9E1B-28B5E772BEBE"}
 */
function onAction_histcli(event) {
	var largo = globals.AsiUcoTrs_hisclistrynro.length;
	var esnumero = true;
	for (var i= 0;i<largo && esnumero == true; i++){
		if (globals.AsiUcoTrs_hisclistrynro.charCodeAt(i)< 48 || globals.AsiUcoTrs_hisclistrynro.charCodeAt(i) > 57){
			esnumero = false;
		}
	}
	
    if (esnumero){
    	if(largo<7){
    		plugins.dialogs.showInfoDialog("Error en Nro.Internación","El número de Internación es menor a 7 digitos."+'\n'+" Completar la cantidad de dígitos.","Ok")
			
	   	}else{
    	
		     globals.AsiUcoTrs_hisclin = utils.stringToNumber(globals.AsiUcoTrs_hisclistrynro.valueOf());
		     elements.tab_scroll.tabIndex = 2;
		     forms.AsiUcoTrs_tbl_internado_num.controller.setSelectedIndex(1);
		     forms.AsiUcoTrs_tbl_internado_num.elements.btn_seleccionar.requestFocus();
    	}
    }
    else{
    	creoDatasetInternadosAlfabetico();	
 		elements.tab_scroll.tabIndex = 1
 		forms.AsiUcoTrs_tbl_internado_alfa.controller.setSelectedIndex(1);
 		forms.AsiUcoTrs_tbl_internado_alfa.elements.btn_seleccionar.requestFocus()		
    }
}

/**
 * @properties={typeid:24,uuid:"D7A97F03-8A76-4AC1-AA1F-5533C960BCD5"}
 */
function creoDatasetInternadosAlfabetico() {
	
	var apeynom = globals.AsiUcoTrs_hisclistrynro.toLocaleUpperCase();
	//var $SQL="select adm_histclin, adm_apelnom, adm_habita, adm_cama, adm_fecing, adm_fecaltaefec from tbc_admision_scroll where Adm_ApelNom >='"+apeynom+" ' and Adm_ApelNom <='"+apeynom+"Z' order by Adm_ApelNom asc"
	var $SQL="select adm_histclin, adm_apelnom, adm_habita, adm_cama, adm_fecing, adm_fecaltaefec from tbc_admision_scroll where Adm_FecAltaEfec = 0 and Adm_Apellido_5 like '" + apeynom + "%' order by Adm_FecAltaEfec asc, Adm_Apellido_5 asc"
    var ds_inter = databaseManager.getDataSetByQuery("admisionscroll", $SQL, null, 500);
  
	//$hiscli_edit=$hiscli_edit.toString().substr(0,$largo_edit-1)+"/"+$hiscli_edit.toString().substr($largo_edit,1)
		
	var $tipos = [JSColumn.TEXT,JSColumn.TEXT,JSColumn.NUMBER, JSColumn.TEXT,JSColumn.TEXT,JSColumn.TEXT]

	var $frm = solutionModel.getForm('AsiUcoTrs_tbl_internado_alfa')
	$frm.dataSource = ds_inter.createDataSource('ds_Admision', $tipos)
	forms.AsiUcoTrs_tbl_internado_alfa.controller.recreateUI()
}
