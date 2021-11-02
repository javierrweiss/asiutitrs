/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"6290C56C-3C66-41DB-924F-DDE26FF9B38D"}
 */
function onShow_carga_formulario(firstShow, event) {
	if(globals.gbl_eventSourceButton == 1){
	
		globals.pHisclistrynro = '';
		elements.Histclin.requestFocus();
		globals.gbl_activoFormBuscarInternado = 1;
	}
	else{
		
		var largo = globals.pHisclistrynro.length;
		var esnumero = true;
		for (var i= 0;i<largo && esnumero == true; i++){
			if (globals.pHisclistrynro.charCodeAt(i)< 48 || globals.pHisclistrynro.charCodeAt(i) > 57){
				esnumero = false
			}
		}
		
	    if (esnumero){
	    	//if(largo<7){
	    		//plugins.dialogs.showInfoDialog("Error en Nro.Internación","El número de Internación es menor a 7 digitos."+'\n'+" Completar la cantidad de dígitos.","Ok")
				
		   	//}else{
	    	
			    globals.gbl_hiscli_protesis = utils.stringToNumber(globals.pHisclistrynro.valueOf());
				elements.tabless.tabIndex = 2					
				forms.frm_scr_hist_clin_unica_protesis.elements.adm_histclinuni.requestFocus();
	    	//}
	    }
	    else{
	    	globals.gbl_apeynom_protesis = globals.pHisclistrynro.toLocaleUpperCase()
			cargaDatasetAmbulatorios();
	 		elements.tabless.tabIndex = 1
	 		forms.frm_scr_hist_clin_unica_n_protesis.elements.adm_histclinuni.requestFocus()		
	    }
	} 
}

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"7D7278A4-DFD6-469D-B544-BAFCB1EB827B"}
 */
function onAction_histcli(event) {
	var largo = globals.pHisclistrynro.length;
	var esnumero = true;
	for (var i= 0;i<largo && esnumero == true; i++){
		if (globals.pHisclistrynro.charCodeAt(i)< 48 || globals.pHisclistrynro.charCodeAt(i) > 57){
			esnumero = false
		}
	}
	
    if (esnumero){
    	//if(largo<7){
    		//plugins.dialogs.showInfoDialog("Error en Nro.Internación","El número de Internación es menor a 7 digitos."+'\n'+" Completar la cantidad de dígitos.","Ok")
			
	   	//}else{
    	
		    globals.gbl_hiscli_protesis = utils.stringToNumber(globals.pHisclistrynro.valueOf());
		    globals.gbl_activoFormBuscarInternado = 0;
			elements.tabless.tabIndex = 2
			forms.frm_scr_hist_clin_unica_protesis.controller.focusFirstField()
			forms.frm_scr_hist_clin_unica_protesis.elements.adm_histclinuni.requestFocus()
			
    	//}
    }
    else{
    	globals.gbl_apeynom_protesis = globals.pHisclistrynro.toLocaleUpperCase()
    	globals.gbl_activoFormBuscarInternado = 0;
    	cargaDatasetAmbulatorios();
 		elements.tabless.tabIndex = 1
 		forms.frm_scr_hist_clin_unica_n_protesis.controller.focusFirstField()
 		forms.frm_scr_hist_clin_unica_n_protesis.elements.adm_histclinuni.requestFocus()
			
    }
}

/**
 * @properties={typeid:24,uuid:"90DBE5CE-E716-490A-938E-23383AA9653D"}
 */
function cargaDatasetAmbulatorios (){
	
	var $SQL="select histcabnrounico, histcabapellnom from tbc_hist_cab_new where histcabapellnom>='"+globals.gbl_apeynom_protesis+" ' "
    var frm_ds = databaseManager.getDataSetByQuery("asistencial", $SQL, null, 500);
    
   	var $ds = databaseManager.createEmptyDataSet()
	$ds.addColumn('histcabnrounico',1,JSColumn.NUMBER)   
	$ds.addColumn('histcabapellnom',2,JSColumn.TEXT)
			
	var $max= frm_ds.getMaxRowIndex()

	if ($max > 0){
		for(var i=1;i<=$max;i++){
			$ds.addRow([frm_ds.getValue(i,1),frm_ds.getValue(i,2)])
		}
    }

	var $tipos = [JSColumn.NUMBER, JSColumn.TEXT]


	var $frm = solutionModel.getForm('frm_scr_hist_clin_unica_n_protesis')
	$frm.dataSource = $ds.createDataSource('Ds_Histcab', $tipos)
	forms.frm_scr_hist_clin_unica_n_protesis.controller.recreateUI()
}
