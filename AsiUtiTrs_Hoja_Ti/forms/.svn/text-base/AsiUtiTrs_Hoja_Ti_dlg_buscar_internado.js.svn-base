/**
 * // TODO generated, please specify type and doc for the params
 * @param {Object} firstShow
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"37A24A73-698D-43F1-BB0C-0DF7512E469C"}
 */
function onShow(firstShow, event) {
	
	//El origen de la busqueda es mediante la accion sobre un boton 1
	if(globals.AsiUtiTrs_Hoja_eventSourceButton == 1){
		
		globals.AsiUtiTrs_Hoja_hisclistrynro = '';
		elements.Histclin.requestFocus();
		
	}
	else{
		
		var largo = globals.AsiUtiTrs_Hoja_hisclistrynro.length;
		var esnumero = true;
		for (var i= 0;i<largo && esnumero == true; i++){
			if(isNaN(globals.AsiUtiTrs_Hoja_hisclistrynro)){ //Si no es numero es true!!
				esnumero=false
			}
		}
		
	    if (esnumero){
	    	if(largo<7){
	    		plugins.dialogs.showInfoDialog("Error en Nro.Internación","El número de Internación es menor a 7 digitos."+'\n'+" Completar la cantidad de dígitos.","Ok")
				
		   	}else{
	    	
			    globals.AsiUtiTrs_Hoja_hisclin = utils.stringToNumber(globals.AsiUtiTrs_Hoja_hisclistrynro.valueOf());
				elements.tab_scroll.tabIndex = 2;
				forms.AsiUtiTrs_Hoja_Ti_tbl_internado_num.controller.setSelectedIndex(1);
				forms.AsiUtiTrs_Hoja_Ti_tbl_internado_num.elements.btn_seleccionar.requestFocus()
	    	}
	    }
	    else{
	    	
	    	globals.AsiUtiTrs_Hoja_apellido=globals.AsiUtiTrs_Hoja_hisclistrynro.toLocaleUpperCase()
	 		elements.tab_scroll.tabIndex = 1;
	    	forms.AsiUtiTrs_Hoja_Ti_tbl_internado_alfa.controller.setSelectedIndex(1);
	 		forms.AsiUtiTrs_Hoja_Ti_tbl_internado_alfa.elements.btn_seleccionar.requestFocus()
	    }
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"0158A5D6-D6A2-4341-B8BE-092C5EE856E5"}
 */
function onAction_histcli(event) {
	var largo = globals.AsiUtiTrs_Hoja_hisclistrynro.length;
	var esnumero = true;
	for (var i= 0;i<largo && esnumero == true; i++){
		if (globals.AsiUtiTrs_Hoja_hisclistrynro.charCodeAt(i)< 48 || globals.AsiUtiTrs_Hoja_hisclistrynro.charCodeAt(i) > 57){
			esnumero = false;
		}
	}
	
    if (esnumero){
    	if(largo<7){
    		plugins.dialogs.showInfoDialog("Error en Nro.Internación","El número de Internación es menor a 7 digitos."+'\n'+" Completar la cantidad de dígitos.","Ok")
			
	   	}else{
    	
		     globals.AsiUtiTrs_Hoja_hisclin = utils.stringToNumber(globals.AsiUtiTrs_Hoja_hisclistrynro.valueOf());
		     elements.tab_scroll.tabIndex = 2;
		     forms.AsiUtiTrs_Hoja_Ti_tbl_internado_num.controller.setSelectedIndex(1);
		     forms.AsiUtiTrs_Hoja_Ti_tbl_internado_num.elements.btn_seleccionar.requestFocus();
    	}
    }
    else{
    	//creoDatasetInternadosAlfabetico();	
    	globals.AsiUtiTrs_Hoja_apellido=globals.AsiUtiTrs_Hoja_hisclistrynro.toLocaleUpperCase()
 		elements.tab_scroll.tabIndex = 1
 		forms.AsiUtiTrs_Hoja_Ti_tbl_internado_alfa.controller.setSelectedIndex(1);
 		forms.AsiUtiTrs_Hoja_Ti_tbl_internado_alfa.elements.btn_seleccionar.requestFocus()		
    }
}

/**
 * @properties={typeid:24,uuid:"9FEEF8E5-2277-4616-97D7-17089CB0CAEA"}
 */
function creoDatasetInternadosAlfabetico() {
	
	var apeynom = globals.AsiUtiTrs_Hoja_hisclistrynro.toLocaleUpperCase();
	//var $SQL="select adm_histclin, adm_apelnom, adm_habita, adm_cama, adm_fecing, adm_fecaltaefec from tbc_admision_scroll where Adm_ApelNom >='"+apeynom+" ' and Adm_ApelNom <='"+apeynom+"Z' order by Adm_ApelNom asc"
	var $SQL="select adm_histclin, adm_apelnom, adm_habita, adm_cama, adm_fecing, adm_fecaltaefec from tbc_admision_scroll where adm_apellido_5 like '" + apeynom + "%' and adm_fecaltaefec=0 order by adm_fecaltaefec asc, adm_apellido_5 asc"
    var ds_inter = databaseManager.getDataSetByQuery("admisionscroll", $SQL, null, 500);
  
	//$hiscli_edit=$hiscli_edit.toString().substr(0,$largo_edit-1)+"/"+$hiscli_edit.toString().substr($largo_edit,1)
		
	var $tipos = [JSColumn.TEXT,JSColumn.TEXT,JSColumn.NUMBER, JSColumn.TEXT,JSColumn.TEXT,JSColumn.TEXT]

	var $frm = solutionModel.getForm('AsiUtiTrs_Hoja_Ti_tbl_internado_alfa')
	$frm.dataSource = ds_inter.createDataSource('ds_Admision', $tipos)
	forms.AsiUtiTrs_Hoja_Ti_tbl_internado_alfa.controller.recreateUI()
}
