/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"7C155DCB-2093-40A2-903F-5254D87CD3B1"}
 */
function onShow_carga_formulario(firstShow, event) {
	if(globals.smsciru_gbl_eventSourceButton == 1){
	
		globals.vHisclistrynro = '';
		elements.Histclin.requestFocus();
		globals.smsciru_gbl_activoFormBuscarInternado = 1;
	}
	else{
		
		var largo = globals.vHisclistrynro.length;
		var esnumero = true;
		for (var i= 0;i<largo && esnumero == true; i++){
			if (globals.vHisclistrynro.charCodeAt(i)< 48 || globals.vHisclistrynro.charCodeAt(i) > 57){
				esnumero = false
			}
		}
		
	    if (esnumero){
	    	//if(largo<7){
	    		//plugins.dialogs.showInfoDialog("Error en Nro.Internación","El número de Internación es menor a 7 digitos."+'\n'+" Completar la cantidad de dígitos.","Ok")
				
		   	//}else{
	    	
			    globals.vHiscli = utils.stringToNumber(globals.vHisclistrynro.valueOf());
				elements.tabless.tabIndex = 1					
				forms.smsciru_frm_scr_hist_clin_unica.controller.focusFirstField()
				forms.smsciru_frm_scr_hist_clin_unica.elements.adm_histclinuni.requestFocus();
	    	//}
	    }
	    else{
	    	globals.vAlfa = globals.vHisclistrynro.toLocaleUpperCase()	
	    	globals.smsciru_gbl_activoFormBuscarInternado = 0;
	    	cargaDatasetAmbulatorios()
	 		elements.tabless.tabIndex = 2
	 		forms.smsciru_frm_scr_hist_clin_unica_alf.controller.focusFirstField()
	 		forms.smsciru_frm_scr_hist_clin_unica_alf.elements.numerounico.requestFocus()	
	    }
	} 
}

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"8F9B1DFE-A023-46F3-BF08-E1CBD2AA6D54"}
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
    	//if(largo<7){
    		//plugins.dialogs.showInfoDialog("Error en Nro.Internación","El número de Internación es menor a 7 digitos."+'\n'+" Completar la cantidad de dígitos.","Ok")
			
	   	//}else{
    	
		    globals.vHiscli = utils.stringToNumber(globals.vHisclistrynro.valueOf());
		    globals.smsciru_gbl_activoFormBuscarInternado = 0;
			elements.tabless.tabIndex = 1
			forms.smsciru_frm_scr_hist_clin_unica.controller.focusFirstField()
			forms.smsciru_frm_scr_hist_clin_unica.elements.adm_histclinuni.requestFocus()
			
    	//}
    }
    else{
    	globals.vAlfa = globals.vHisclistrynro.toLocaleUpperCase()
    	globals.smsciru_gbl_activoFormBuscarInternado = 0;
    	cargaDatasetAmbulatorios()
 		elements.tabless.tabIndex = 2
 		forms.smsciru_frm_scr_hist_clin_unica_alf.controller.focusFirstField()
 		forms.smsciru_frm_scr_hist_clin_unica_alf.elements.numerounico.requestFocus()
			
    }
}

/**
 * @properties={typeid:24,uuid:"60DAD62E-4EF9-45CF-81B9-07DFD3A01CCB"}
 */
function cargaDatasetAmbulatorios() {
	var $SQL="select histcabnrounico, histcabapellnom from tbc_hist_cab_new where histcabapellnom>='"+globals.vAlfa+" ' "
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


	var $frm = solutionModel.getForm('smsciru_frm_scr_hist_clin_unica_alf')
	$frm.dataSource = $ds.createDataSource('Ds_Histcab', $tipos)
	forms.smsciru_frm_scr_hist_clin_unica_alf.controller.recreateUI()
}

/**
 * Handle hide window.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"E2DE4A3A-5E10-464D-8B4F-544729ED9731"}
 */
function onHide(event) {
	var $name = application.getActiveWindow().getName()
	var $win = application.getWindow($name)
	if($win!=null){
		$win.hide()
		$win.destroy()
	}
	return true
}
