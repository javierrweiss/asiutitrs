/**
 * // TODO generated, please specify type and doc for the params
 * @param {Object} firstShow
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"22F89FD2-884F-4EC3-812A-C006B41D4C34"}
 */
function onShow(firstShow, event) {
	
	//El origen de la busqueda es mediante la accion sobre un boton 1
	if(globals.Palab_eventSourceButton == 1){
		
		globals.Palab_anaCodAlfa = '';
		elements.Histclin.requestFocus();
		
	}
	else{
		
		var largo = globals.Palab_anaCodAlfa.length;
		var esnumero = true;
		for (var i= 0;i<largo && esnumero == true; i++){
			if (globals.Palab_anaCodAlfa.charCodeAt(i)< 48 || globals.Palab_anaCodAlfa.charCodeAt(i) > 57){
				esnumero = false
			}
		}
		
	    if (esnumero){
	    	/*if(largo<7){
	    		plugins.dialogs.showInfoDialog("Error en Nro.Internación","El número de Internación es menor a 7 digitos."+'\n'+" Completar la cantidad de dígitos.","Ok")
				
		   	}else{*/
	    	
			    globals.Palab_anaCod = utils.stringToNumber(globals.Palab_anaCodAlfa.valueOf());
				elements.tab_scroll.tabIndex = 2;
				forms.Palab_tbl_analisis_num.controller.setSelectedIndex(1);
				forms.Palab_tbl_analisis_num.elements.btn_seleccionar.requestFocus()
	    	//}
	    }
	    else{
	    	
	    	creoDatasetAnalisisAlfabetico();	
	 		elements.tab_scroll.tabIndex = 1;
	    	forms.Palab_tbl_analisis_alfa.controller.setSelectedIndex(1);
	 		forms.Palab_tbl_analisis_alfa.elements.btn_seleccionar.requestFocus()
	    }
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"E9328171-0102-42FE-BE77-90182E8C1195"}
 */
function onAction_histcli(event) {
	var largo = globals.Palab_anaCodAlfa.length;
	var esnumero = true;
	for (var i= 0;i<largo && esnumero == true; i++){
		if (globals.Palab_anaCodAlfa.charCodeAt(i)< 48 || globals.Palab_anaCodAlfa.charCodeAt(i) > 57){
			esnumero = false;
		}
	}
	
    if (esnumero){
    	/*if(largo<7){
    		plugins.dialogs.showInfoDialog("Error en Nro.Internación","El número de Internación es menor a 7 digitos."+'\n'+" Completar la cantidad de dígitos.","Ok")
			
	   	}else{*/
    	
		     globals.Palab_anaCod = utils.stringToNumber(globals.Palab_anaCodAlfa.valueOf());
		     elements.tab_scroll.tabIndex = 2;
		     forms.Palab_tbl_analisis_num.controller.setSelectedIndex(1);
		     forms.Palab_tbl_analisis_num.elements.btn_seleccionar.requestFocus();
    	//}
    }
    else{
    	creoDatasetAnalisisAlfabetico();	
 		elements.tab_scroll.tabIndex = 1
 		forms.Palab_tbl_analisis_alfa.controller.setSelectedIndex(1);
 		forms.Palab_tbl_analisis_alfa.elements.btn_seleccionar.requestFocus()		
    }
}


/**
 * @properties={typeid:24,uuid:"FD7436E5-F073-4052-BADB-63638E41B1D4"}
 */
function creoDatasetAnalisisAlfabetico() {
	
	var analisis = globals.Palab_anaCodAlfa.toLocaleUpperCase();
	
	var $SQL="select ana1 as codigo, ana22alfa as analisis,ana19,ana24,ana21,ana3,anaestado,ana25,ana30,anasinourg,ana40 from tbc_analisis_new where ana2 like '%" + analisis + "%' order by ana22alfa asc";
    var ds_inter = databaseManager.getDataSetByQuery("maestros", $SQL, null, 500);
  	
	var $tipos = [JSColumn.TEXT,JSColumn.TEXT,JSColumn.TEXT,JSColumn.TEXT,JSColumn.TEXT,JSColumn.TEXT,JSColumn.TEXT,JSColumn.TEXT,JSColumn.TEXT,JSColumn.TEXT,JSColumn.TEXT];

	var $frm = solutionModel.getForm('Palab_tbl_analisis_alfa');
	$frm.dataSource = ds_inter.createDataSource('ds_analisisalfa', $tipos);
	forms.Palab_tbl_analisis_alfa.controller.recreateUI();
}
