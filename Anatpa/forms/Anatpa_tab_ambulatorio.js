/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"F08E4EBA-FBA1-4375-B3BB-C3AE92C68F18"}
 */
function onShow_carga_formulario(firstShow, event) {
	if(globals.Anatpa_eventSourceButton == 1){
	
		globals.Anatpa_hisclistrynro = '';
		elements.Histclin.requestFocus();
		globals.Anatpa_activoFormBuscarPaciente = 1;
	}
	else{
		
		var largo = globals.Anatpa_hisclistrynro.length;
		var esnumero = true;
		for (var i= 0;i<largo && esnumero == true; i++){
			if (globals.Anatpa_hisclistrynro.charCodeAt(i)< 48 || globals.Anatpa_hisclistrynro.charCodeAt(i) > 57){
				esnumero = false
			}
		}
		
	    if (esnumero){
	    	
			    globals.Anatpa_hiscli = utils.stringToNumber(globals.Anatpa_hisclistrynro.valueOf());
				elements.tabless.tabIndex = 2					
				forms.Anatpa_tbl_ambulatorio_num.elements.btn_seleccionar.requestFocus();
	    }
	    else{
	    	globals.Anatpa_apeynom = globals.Anatpa_hisclistrynro.toLocaleUpperCase()
			cargaDatasetAmbulatorios();
	 		elements.tabless.tabIndex = 1
	 		forms.Anatpa_tbl_ambulatorio_alfa.elements.btn_seleccionar.requestFocus()		
	    }
	} 
}

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"5996D6FC-D40B-4DE1-9519-889EE29436DF"}
 */
function onAction_histcli(event) {
	var largo = globals.Anatpa_hisclistrynro.length;
	var esnumero = true;
	for (var i= 0;i<largo && esnumero == true; i++){
		if (globals.Anatpa_hisclistrynro.charCodeAt(i)< 48 || globals.Anatpa_hisclistrynro.charCodeAt(i) > 57){
			esnumero = false
		}
	}
	
    if (esnumero){
    	
		    globals.Anatpa_hiscli = utils.stringToNumber(globals.Anatpa_hisclistrynro.valueOf());
		    globals.Anatpa_activoFormBuscarPaciente = 0;
			elements.tabless.tabIndex = 2
			//forms.Anatpa_tbl_ambulatorio_num.controller.focusFirstField()
			forms.Anatpa_tbl_ambulatorio_num.elements.btn_seleccionar.requestFocus()
    }
    else{
    	globals.Anatpa_apeynom = globals.Anatpa_hisclistrynro.toLocaleUpperCase()
    	globals.Anatpa_activoFormBuscarPaciente = 0;
    	cargaDatasetAmbulatorios();
 		elements.tabless.tabIndex = 1
 		//forms.Anatpa_tbl_ambulatorio_alfa.controller.focusFirstField()
 		forms.Anatpa_tbl_ambulatorio_alfa.elements.btn_seleccionar.requestFocus()
			
    }
}

/**
 * @properties={typeid:24,uuid:"6284A8EE-2CC0-4607-B613-BC83A3576A7E"}
 */
function cargaDatasetAmbulatorios (){
	
	var $SQL="select histcabnrounico, histcabapellnom,histcabobra,histcabnrobenef,histcabplanx,histcabtipodoc,histcabnrodoc,histcabfechanac from tbc_hist_cab_new where histcabapellnom>='"+globals.Anatpa_apeynom+" ' "
    var frm_ds = databaseManager.getDataSetByQuery("asistencial", $SQL, null, 500);
    
   	var $ds = databaseManager.createEmptyDataSet()
	$ds.addColumn('histcabnrounico',1,JSColumn.TEXT)   
	$ds.addColumn('histcabapellnom',2,JSColumn.TEXT)
	$ds.addColumn('histcabobra',3,JSColumn.NUMBER)
	$ds.addColumn('histcabnrobenef',4,JSColumn.TEXT)
	$ds.addColumn('histcabplanx',5,JSColumn.TEXT)
	$ds.addColumn('histcabtipodoc',6,JSColumn.NUMBER)
	$ds.addColumn('histcabnrodoc',7,JSColumn.NUMBER)
	$ds.addColumn('histcabfechanac',8,JSColumn.NUMBER)
			
	var $max= frm_ds.getMaxRowIndex()

	if ($max > 0){
		for(var i=1;i<=$max;i++){
			$ds.addRow([frm_ds.getValue(i,1),frm_ds.getValue(i,2),frm_ds.getValue(i,3),frm_ds.getValue(i,4),frm_ds.getValue(i,5),frm_ds.getValue(i,6),frm_ds.getValue(i,7),frm_ds.getValue(i,8)])
		}
    }

	var $tipos = [JSColumn.TEXT, JSColumn.TEXT,JSColumn.NUMBER,JSColumn.TEXT,JSColumn.TEXT,JSColumn.NUMBER,JSColumn.NUMBER,JSColumn.NUMBER]


	var $frm = solutionModel.getForm('Anatpa_tbl_ambulatorio_alfa')
	$frm.dataSource = $ds.createDataSource('Ds_Histcab', $tipos)
	forms.Anatpa_tbl_ambulatorio_alfa.controller.recreateUI()
}
