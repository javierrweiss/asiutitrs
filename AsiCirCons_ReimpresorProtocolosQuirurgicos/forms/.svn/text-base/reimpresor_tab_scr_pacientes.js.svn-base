/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"3881B6A5-13C2-4C9C-8FA7-910622FE141F"}
 */
var f_tipo_nro_o_str = '';

/**
 * // TODO generated, please specify type and doc for the params
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"14CBCB95-C1A5-4720-9ACA-C32A9226B463"}
 */
function onAction_FIND_LetrasOnumeros(event) {
	var largo = globals.vHisclistrynro.length;
	var esnumero = true;
	for (var i= 0;i<largo && esnumero == true; i++){
		if (globals.vHisclistrynro.charCodeAt(i)< 48 || globals.vHisclistrynro.charCodeAt(i) > 57){
			esnumero = false
		}
	}
	
    if (esnumero){
    	if(largo<7){
    		if(globals.reimpresor_tipoPac==0){
	    		plugins.dialogs.showInfoDialog("Error en Nro.Internación","El número de Internación es menor a 7 digitos."+'\n'+" Completar la cantidad de dígitos.","Ok")
				if (event.getType() == JSEvent.ACTION) {
					elements.Histclin.requestFocus()
				}
	    		return
    		}
    	}
	   	   	
		     globals.vHiscli = utils.stringToNumber(globals.vHisclistrynro.valueOf());
		
		
			//plugins.dialogs.showInfoDialog("",globals.vHiscli,"ok")
			//globals.muestroNuevoDatasetN("frm_scr_tbc_admision_N")
			
		     if(globals.reimpresor_tipoPac==0){
					elements.tabless_72.tabIndex = 3	
					forms.reimpresor_frm_scr_tbc_admision_N_1.controller.focusFirstField()
					forms.reimpresor_frm_scr_tbc_admision_N_1.elements.adm_histclin.requestFocus()
			}else{
					elements.tabless_72.tabIndex = 4
			}	
			//forms.frm_scr_tbc_admision_N.controller.focusFirstField()
			//forms.frm_scr_tbc_admision_N.elements.adm_histclin.requestFocus()
    	
    }
    else{
    	 globals.vAlfa = globals.vHisclistrynro.toLocaleUpperCase()
		 if(globals.reimpresor_tipoPac==0){
			 	creoDatasetInternadosAlfabetico()
	 			//globals.muestroNuevoDatasetAlfa("tbc_admisionL_copy")
	 			elements.tabless_72.tabIndex = 2
	 			forms.reimpresor_frm_scr_tbc_admision_alf_dataset.controller.focusFirstField()
			 }else{
				 cargaDatasetAmbulatorios()
				 elements.tabless_72.tabIndex = 5
	 			forms.reimpresor_frm_scr_hist_clin_unica_alf.controller.focusFirstField()
			 }
    }
}

/**
 * // TODO generated, please specify type and doc for the params
 * @param {Object} firstShow
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"62A39086-79C9-4194-81AB-87EE3A2BD535"}
 */
function onShow(firstShow, event) {
	if(globals.reimpresor_tipoPac==0){
		f_tipo_nro_o_str="Ingrese Apellido ó Nro.Iternación"
	}else{
		f_tipo_nro_o_str="Ingrese Apellido ó Hist.Clin.Única"
	}
	globals.vHisclistrynro='';
	globals.vAlfa='';
	globals.vFormulario=currentcontroller.getName()
	//creoDatasetInternadosAlfabetico()
	controller.focusFirstField()
	elements.Histclin.requestFocus()
	elements.tabless_72.tabIndex=1
}

/**
 * // TODO generated, please specify type and doc for the params
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"20FB9327-FA08-4D9D-81EC-A1887A748367"}
 */
function onAction_btn_volver(event) {
	globals.vClose=true
	var args1 = globals.vLegajo+';'+globals.vLega+';'+globals.vOperador+';'+globals.vTipoOperador+';'+"true";
	application.closeSolution('Menu','retorno_MenuCirugia',args1)
	//globals.vLegajo=0
	//globals.vClave=0
	//globals.vOperador=''
	//globals.vPassOperador=''
	//forms.LoginCirugia.controller.show()
}

/**
 * // TODO generated, please specify type and doc for the params
 * @param {Object} oldValue
 * @param {Object} newValue
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"E53D4735-77DF-407A-A4B2-7B1652AACDA4"}
 */
function onDataChange_FIND_LetrasOnumeros(oldValue, newValue, event) {
	
	
	var largo = globals.vHisclistrynro.length;
	var esnumero = true;
	for (var i= 0;i<largo && esnumero == true; i++){
		if (globals.vHisclistrynro.charCodeAt(i)< 48 || globals.vHisclistrynro.charCodeAt(i) > 57){
			esnumero = false
		}
	}
	
    if (esnumero){
    	if(largo<7){
    		if(globals.reimpresor_tipoPac==0){
    			plugins.dialogs.showInfoDialog("Error en Nro.Internación","El número de Internación es menor a 7 digitos."+'\n'+" Completar la cantidad de dígitos.","Ok")
    			return false
    		}
	   	}
    	
		     globals.vHiscli = utils.stringToNumber(globals.vHisclistrynro.valueOf());
		
		
			//plugins.dialogs.showInfoDialog("",globals.vHiscli,"ok")
			//globals.muestroNuevoDatasetN("frm_scr_tbc_admision_N")
			
		     if(globals.reimpresor_tipoPac==0){
					elements.tabless_72.tabIndex = 3	
					forms.reimpresor_frm_scr_tbc_admision_N_1.controller.focusFirstField()
					forms.reimpresor_frm_scr_tbc_admision_N_1.elements.adm_histclin.requestFocus()
			}else{
					elements.tabless_72.tabIndex = 4
			}
			return true
    	
    }
    else{
    	 globals.vAlfa = globals.vHisclistrynro.toLocaleUpperCase()
		 if(globals.reimpresor_tipoPac==0){
			 	creoDatasetInternadosAlfabetico()
	 			//globals.muestroNuevoDatasetAlfa("tbc_admisionL_copy")
	 			elements.tabless_72.tabIndex = 2
	 			forms.reimpresor_frm_scr_tbc_admision_alf_dataset.controller.focusFirstField()
			 }else{
				 cargaDatasetAmbulatorios()
				 elements.tabless_72.tabIndex = 5
	 			forms.reimpresor_frm_scr_hist_clin_unica_alf.controller.focusFirstField()
			 }
			return true
    }
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"728537FD-D77A-47EE-A71A-B69177F396B7"}
 */
function onAction_ayuda_busqueda_pacientes(event) {
	globals.textoAyuda='AYUDA-2'
	var win = application.createWindow("p",JSWindow.MODAL_DIALOG)
	win.title = "Ayuda en Búsqueda de Pacientes Internados";
	win.setLocation(810,300)
	win.setSize(500,350)
	//win.show(forms.frm_ayuda_1)
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"6AE8BCC5-1C70-45B6-9443-612F2CF81AE2"}
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
    	if(largo<7){
    		if(globals.reimpresor_tipoPac==0){
    			plugins.dialogs.showInfoDialog("Error en Nro.Internación","El número de Internación es menor a 7 digitos."+'\n'+" Completar la cantidad de dígitos.","Ok")
				return
    		}
	   	}
    	
		     globals.vHiscli = utils.stringToNumber(globals.vHisclistrynro.valueOf());
		
		
			//plugins.dialogs.showInfoDialog("",globals.vHiscli,"ok")
			//globals.muestroNuevoDatasetN("frm_scr_tbc_admision_N")
			if(globals.reimpresor_tipoPac==0){
				elements.tabless_72.tabIndex = 3	
				forms.reimpresor_frm_scr_tbc_admision_N_1.controller.focusFirstField()
				forms.reimpresor_frm_scr_tbc_admision_N_1.elements.adm_histclin.requestFocus()
			}else{
				elements.tabless_72.tabIndex = 4
			}
			
    }
    else{
    	 globals.vAlfa = globals.vHisclistrynro.toLocaleUpperCase()
		 if(globals.reimpresor_tipoPac==0){
		 	creoDatasetInternadosAlfabetico()
 			//globals.muestroNuevoDatasetAlfa("tbc_admisionL_copy")
 			elements.tabless_72.tabIndex = 2
 			forms.reimpresor_frm_scr_tbc_admision_alf_dataset.controller.focusFirstField()
		 }else{
			 cargaDatasetAmbulatorios()
			 elements.tabless_72.tabIndex = 5
 			forms.reimpresor_frm_scr_hist_clin_unica_alf.controller.focusFirstField()
		 }
			
    }
}

/**
 * @properties={typeid:24,uuid:"20F0CF45-22F6-4597-B3E2-81392DD49F67"}
 */
function creoDatasetInternadosAlfabetico() {
	var $SQL="select adm_histclin, adm_apelnom, adm_habita, adm_cama, adm_fecing, adm_fecaltaefec from tbc_admision_scroll where Adm_ApelNom LIKE '"+globals.vAlfa+"%' order by Adm_ApelNom asc"
	//var $SQL="select adm_histclin, adm_apelnom, adm_habita, adm_cama, adm_fecing, adm_fecaltaefec from tbc_admision_scroll where Adm_ApelNom >='"+globals.vAlfa+" ' and Adm_ApelNom <='"+globals.vAlfa+"Z' order by Adm_ApelNom asc"
    var frm_ds = databaseManager.getDataSetByQuery("admisionscroll", $SQL, null, 500);
    
   	var $ds = databaseManager.createEmptyDataSet()
	$ds.addColumn('fhiscli_edit',1,JSColumn.TEXT)   
	$ds.addColumn('fapeynom',2,JSColumn.TEXT)
	$ds.addColumn('fhabi',3,JSColumn.NUMBER)
	$ds.addColumn('fcama',4,JSColumn.TEXT)
	$ds.addColumn('fingreso',5,JSColumn.TEXT)
	$ds.addColumn('fegreso',6,JSColumn.TEXT)
	$ds.addColumn('fhiscli',7,JSColumn.NUMBER)
			
	var $max= frm_ds.getMaxRowIndex()
	var $hiscli_edit=' ';
   	var $largo_edit=0;
   	var $fingreso=' ';
   	var $fegreso=' ';
	if ($max > 0){
		for(var i=1;i<=$max;i++){
			$hiscli_edit=frm_ds.getValue(i,1)
			
			if($hiscli_edit!=null&&$hiscli_edit!=''){
				$largo_edit=$hiscli_edit.toString().length
				$hiscli_edit=$hiscli_edit.toString().substr(0,$largo_edit-1)+"/"+$hiscli_edit.toString().substr($largo_edit-1,1)
			}
			$fingreso=frm_ds.getValue(i,5)
			$fegreso=frm_ds.getValue(i,6)
			if(frm_ds.getValue(i,6)==0){
				$fegreso=' '
			}else{
				$fegreso=$fegreso.toString().substr(6,2)+"/"+$fegreso.toString().substr(4,2)+"/"+$fegreso.toString().substr(0,4)
			}
			$ds.addRow([$hiscli_edit,frm_ds.getValue(i,2),frm_ds.getValue(i,3),frm_ds.getValue(i,4),$fingreso.toString().substr(6,2)+"/"+$fingreso.toString().substr(4,2)+"/"+$fingreso.toString().substr(0,4),$fegreso,frm_ds.getValue(i,1)])
		}
    }

	var $tipos = [JSColumn.TEXT,JSColumn.TEXT,JSColumn.NUMBER, JSColumn.TEXT,JSColumn.TEXT,JSColumn.TEXT,JSColumn.NUMBER]


	var $frm = solutionModel.getForm('reimpresor_frm_scr_tbc_admision_alf_dataset')
	$frm.dataSource = $ds.createDataSource('Ds_Admision', $tipos)
	forms.reimpresor_frm_scr_tbc_admision_alf_dataset.controller.recreateUI()
}


/**
 * @properties={typeid:24,uuid:"21FC2881-0A1C-4879-A417-2C2F214ECCDE"}
 */
function cargaDatasetAmbulatorios() {
	var $SQL="select histcabnrounico, histcabapellnom, histcabfechanac from tbc_hist_cab_new where histcabapellnom LIKE '"+globals.vAlfa+"%' order by histcabapellnom"
	var frm_ds = databaseManager.getDataSetByQuery("asistencial", $SQL, null, 500);
	
		var $ds = databaseManager.createEmptyDataSet()
	$ds.addColumn('histcabnrounico',1,JSColumn.NUMBER)   
	$ds.addColumn('histcabapellnom',2,JSColumn.TEXT)
	$ds.addColumn('histcabfechanac',3,JSColumn.NUMBER)		
	var $max= frm_ds.getMaxRowIndex()
	
	if ($max > 0){
		for(var i=1;i<=$max;i++){
			$ds.addRow([frm_ds.getValue(i,1),frm_ds.getValue(i,2),frm_ds.getValue(i,3)])
		}
	}
	
	var $tipos = [JSColumn.NUMBER, JSColumn.TEXT, JSColumn.NUMBER]
	
	
	var $frm = solutionModel.getForm('reimpresor_frm_scr_hist_clin_unica_alf')
	$frm.dataSource = $ds.createDataSource('Ds_Histcab', $tipos)
	forms.reimpresor_frm_scr_hist_clin_unica_alf.controller.recreateUI()
}
/**
 * Handle changed data.
 *
 * @param {Number} oldValue old value
 * @param {Number} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"3BC7E76D-DA2E-427F-B454-CF2D8066BE72"}
 */
function onDataChange_tipo_pac(oldValue, newValue, event) {
	if(newValue==0){
		f_tipo_nro_o_str="Ingrese Apellido ó Nro.Iternación"
	}else{
		f_tipo_nro_o_str="Ingrese Apellido ó Hist.Clin.Única"
	}
	return true
}
