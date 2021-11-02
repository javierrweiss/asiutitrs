


/**
 * // TODO generated, please specify type and doc for the params
 * @param {Object} firstShow
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"5623DA95-1702-4B31-8613-4CD8022111D1"}
 */
function onShow(firstShow, event) {
	
	//El origen de la busqueda es mediante la accion sobre un boton 1
	if(globals.AsiUtiTrs_eventSourceButton == 1){
		
		globals.AsiUtiTrs_hisclistrynro = '';
		elements.Histclin.requestFocus();
		
	}else{
		
		var largo = globals.AsiUtiTrs_hisclistrynro.length;
		var esnumero = true;
		for (var i= 0;i<largo && esnumero == true; i++){
			/*if (globals.AsiUtiTrs_hisclistrynro.charCodeAt(i)< 48 || globals.AsiUtiTrs_hisclistrynro.charCodeAt(i) > 57){
				esnumero = false
			}*/
			if(isNaN(globals.AsiUtiTrs_hisclistrynro)){ //Si no es numero es true!!
				esnumero=false
			}
		}
		
	    if (esnumero){
	    	if(largo<7){
	    		plugins.dialogs.showInfoDialog("Error en Nro.Internación","El número de Internación es menor a 7 digitos."+'\n'+" Completar la cantidad de dígitos.","Ok")
				
		   	}else{
	    	
			    globals.AsiUtiTrs_hisclin = utils.stringToNumber(globals.AsiUtiTrs_hisclistrynro.valueOf());
			    globals.AsiUtiTrs_hiiHisCli = utils.stringToNumber(globals.AsiUtiTrs_hisclistrynro.valueOf());
				elements.tab_scroll.tabIndex = 2;
				forms.AsiUtiTrs_tbl_internado_num.controller.setSelectedIndex(1);
				forms.AsiUtiTrs_tbl_internado_num.elements.btn_seleccionar.requestFocus()
	    	}
	    }else{
	    	
	    	//creoDatasetInternadosAlfabetico();	
	    	globals.AsiUtiTrs_apellido=globals.AsiUtiTrs_hisclistrynro.toLocaleUpperCase()
	 		elements.tab_scroll.tabIndex = 1;
	    	forms.AsiUtiTrs_tbl_internado_alfa.controller.setSelectedIndex(1);
	 		forms.AsiUtiTrs_tbl_internado_alfa.elements.btn_seleccionar.requestFocus()
	    }
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"2C958ECA-E96F-456B-8FED-07DAF508491F"}
 */
function onAction_histcli(event) {
	var largo = globals.AsiUtiTrs_hisclistrynro.length;
	var esnumero = true;
	for (var i= 0;i<largo && esnumero == true; i++){
		if (globals.AsiUtiTrs_hisclistrynro.charCodeAt(i)< 48 || globals.AsiUtiTrs_hisclistrynro.charCodeAt(i) > 57){
			esnumero = false;
		}
	}
	
    if (esnumero){
    	if(largo<7){
    		plugins.dialogs.showInfoDialog("Error en Nro.Internación","El número de Internación es menor a 7 digitos."+'\n'+" Completar la cantidad de dígitos.","Ok")
			
	   	}else{
    	
		     globals.AsiUtiTrs_hisclin = utils.stringToNumber(globals.AsiUtiTrs_hisclistrynro.valueOf());
		     elements.tab_scroll.tabIndex = 2;
		     forms.AsiUtiTrs_tbl_internado_num.controller.setSelectedIndex(1);
		     forms.AsiUtiTrs_tbl_internado_num.elements.btn_seleccionar.requestFocus();
    	}
    }
    else{
    	//creoDatasetInternadosAlfabetico();	
    	globals.AsiUtiTrs_apellido=globals.AsiUtiTrs_hisclistrynro.toLocaleUpperCase()
 		elements.tab_scroll.tabIndex = 1
 		forms.AsiUtiTrs_tbl_internado_alfa.controller.setSelectedIndex(1);
 		forms.AsiUtiTrs_tbl_internado_alfa.elements.btn_seleccionar.requestFocus()		
    }
}

/**
 * @properties={typeid:24,uuid:"C59ACDC8-2E3C-4461-BB88-A457DB61A716"}
 */
function creoDatasetInternadosAlfabetico() {
	
	var apeynom = globals.AsiUtiTrs_hisclistrynro.toLocaleUpperCase();
	//var $SQL="select adm_histclin, adm_apelnom, adm_habita, adm_cama, adm_fecing, adm_fecaltaefec from tbc_admision_scroll where Adm_ApelNom >='"+apeynom+" ' and Adm_ApelNom <='"+apeynom+"Z' order by Adm_ApelNom asc"
	var $SQL="select adm_histclin, adm_apelnom, adm_habita, adm_cama, adm_fecing, adm_fecaltaefec from tbc_admision_scroll where adm_apellido_5 like '" + apeynom + "%' and adm_fecaltaefec=0 order by adm_fecaltaefec asc, adm_apellido_5 asc"
    var ds_inter = databaseManager.getDataSetByQuery("admisionscroll", $SQL, null, 500);
  
	//$hiscli_edit=$hiscli_edit.toString().substr(0,$largo_edit-1)+"/"+$hiscli_edit.toString().substr($largo_edit,1)
		
	var $tipos = [JSColumn.TEXT,JSColumn.TEXT,JSColumn.NUMBER, JSColumn.TEXT,JSColumn.TEXT,JSColumn.TEXT]

	var $frm = solutionModel.getForm('AsiUtiTrs_tbl_internado_alfa')
	$frm.dataSource = ds_inter.createDataSource('ds_Admision', $tipos)
	forms.AsiUtiTrs_tbl_internado_alfa.controller.recreateUI()
}
