/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"625C68A3-8168-4B39-8F56-EB1E6C41B1B1"}
 */
function onShow_carga_formulario(firstShow, event) {
	if(globals.Hcicir_eventSourceButton == 1){
	
		globals.Hcicir_hisclistrynro = '';
		elements.Histclin.requestFocus();
		globals.Hcicir_activoFormBuscarPaciente = 1;
	}
	else{
		
		var largo = globals.Hcicir_hisclistrynro.length;
		var esnumero = true;
		for (var i= 0;i<largo && esnumero == true; i++){
			if (globals.Hcicir_hisclistrynro.charCodeAt(i)< 48 || globals.Hcicir_hisclistrynro.charCodeAt(i) > 57){
				esnumero = false
			}
		}
		
	    if (esnumero){
	    	
			    globals.Hcicir_hiscli = utils.stringToNumber(globals.Hcicir_hisclistrynro.valueOf());
				elements.tabless.tabIndex = 2					
				forms.Hcicir_tbl_ambulatorio_num.elements.btn_seleccionar.requestFocus();
	    }
	    else{
	    	globals.Hcicir_apeynom = globals.Hcicir_hisclistrynro.toLocaleUpperCase()
			cargaDatasetAmbulatorios();
	 		elements.tabless.tabIndex = 1
	 		forms.Hcicir_tbl_ambulatorio_alfa.elements.btn_seleccionar.requestFocus()		
	    }
	} 
}

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"ED39BB4F-EF39-4F8B-9074-FD9D62E86EA8"}
 */
function onAction_histcli(event) {
	var largo = globals.Hcicir_hisclistrynro.length;
	var esnumero = true;
	for (var i= 0;i<largo && esnumero == true; i++){
		if (globals.Hcicir_hisclistrynro.charCodeAt(i)< 48 || globals.Hcicir_hisclistrynro.charCodeAt(i) > 57){
			esnumero = false
		}
	}
	
    if (esnumero){
    	
		    globals.Hcicir_hiscli = utils.stringToNumber(globals.Hcicir_hisclistrynro.valueOf());
		    globals.Hcicir_activoFormBuscarPaciente = 0;
			elements.tabless.tabIndex = 2
			//forms.Anatpa_tbl_ambulatorio_num.controller.focusFirstField()
			forms.Hcicir_tbl_ambulatorio_num.elements.btn_seleccionar.requestFocus()
    }
    else{
    	globals.Hcicir_apeynom = globals.Hcicir_hisclistrynro.toLocaleUpperCase()
    	globals.Hcicir_activoFormBuscarPaciente = 0;
    	cargaDatasetAmbulatorios();
 		elements.tabless.tabIndex = 1
 		//forms.Anatpa_tbl_ambulatorio_alfa.controller.focusFirstField()
 		forms.Hcicir_tbl_ambulatorio_alfa.elements.btn_seleccionar.requestFocus()
			
    }
}

/**
 * @properties={typeid:24,uuid:"C0EE221F-F257-420E-B406-A23B24B9D8E0"}
 */
function cargaDatasetAmbulatorios (){
	
	var $SQL="select histcabnrounico, histcabapellnom,histcabobra,histcabnrobenef,histcabplanx,histcabtipodoc,histcabnrodoc,histcabfechanac from tbc_hist_cab_new where histcabapellnom>='"+globals.Hcicir_apeynom+" ' "
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


	var $frm = solutionModel.getForm('Hcicir_tbl_ambulatorio_alfa')
	$frm.dataSource = $ds.createDataSource('Ds_Histcab', $tipos)
	forms.Hcicir_tbl_ambulatorio_alfa.controller.recreateUI()
}
