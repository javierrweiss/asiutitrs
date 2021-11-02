
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"421D558B-D47B-4093-A61F-C23CF90E3AD7"}
 */
function onAction_FIND_LetrasOnumeros(event) {
	var date2 = new Date();
	date2.setFullYear(2011,10,05)
	date2.setHours(0,0,0,0)
	
	var date = utils.timestampToDate(application.getServerTimeStamp());
	var parsedDate = utils.dateFormat(date2, 'd MMM yyyy');
	
	var largo = globals.vHisclistrynro.length;
	var esnumero = true;
	for (var i= 0;i<largo && esnumero == true; i++){
		if (globals.vHisclistrynro.charCodeAt(i)< 48 || globals.vHisclistrynro.charCodeAt(i) > 57){
			esnumero = false
		}
	}
	
    if (esnumero){
    	if(largo<7){
    		plugins.dialogs.showInfoDialog("Error en Nro.Internación","El número de Internación es menor a 7 digitos."+'\n'+" Completar la cantidad de dígitos.","Ok")
			if (event.getType() == JSEvent.ACTION) {
				elements.Histclin.requestFocus()
			}
	   	}else{
    	
		     globals.vHiscli = utils.stringToNumber(globals.vHisclistrynro.valueOf());
		
		
			//plugins.dialogs.showInfoDialog("",globals.vHiscli,"ok")
			//globals.muestroNuevoDatasetN("frm_scr_tbc_admision_N")
			
			elements.tabless_72.tabIndex = 2	
			forms.frm_scr_tbc_admision_N.controller.focusFirstField()
			forms.frm_scr_tbc_admision_N.elements.adm_histclin.requestFocus()
    	}
    }
    else{
    	 globals.vAlfa = globals.vHisclistrynro.toLocaleUpperCase()
 		
 			//globals.muestroNuevoDatasetAlfa("tbc_admisionL_copy")
 			if (!globals.vSupervisor){
 				elements.tabless_72.tabIndex = 1
 				forms.frm_scr_tbc_admision_L.controller.focusFirstField()
 				forms.frm_scr_tbc_admision_L.elements.adm_histclin.requestFocus()
 			}else{
 				elements.tabless_72.tabIndex = 3
 				forms.frm_scr_tbc_admision_L_super.controller.focusFirstField()
 				forms.frm_scr_tbc_admision_L_super.elements.adm_histclin.requestFocus()
 			}
    }
}

/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"0935D371-90A9-4B34-92B8-9E294265F9DB"}
 */
function onLoad(event) {
	globals.vHiscli = 1860000;
	//globals.muestroNuevoDatasetN("frm_scr_tbc_admision_N");
	forms.tab_scr_tbc_admsion.controller.focusFirstField()
	forms.tab_scr_tbc_admsion.elements.Histclin.requestFocus()
	elements.tabless_72.tabIndex = 1;
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"84B4DA90-31DC-483E-96CB-1DBDA69DE10B"}
 */
function onShow(firstShow, event) {
	forms.tab_scr_tbc_admsion.controller.focusFirstField()
	forms.tab_scr_tbc_admsion.elements.Histclin.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"9B05C445-EDE5-4941-97DF-74ABAA1D8385"}
 */
function onAction_btn_volver(event) {
	globals.vLegajo=0
	globals.vClave=0
	globals.vOperador=''
	globals.vPassOperador=''
	forms.loginPlanillaNueva.controller.show()
}

/**
 * Handle changed data.
 *
 * @param oldValue old value
 * @param newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"EBBE818A-A7B4-473C-BD54-D05B7F9AEA1A"}
 */
function onDataChange_FIND_LetrasOnumeros(oldValue, newValue, event) {
	var date2 = new Date();
	date2.setFullYear(2011,10,05)
	date2.setHours(0,0,0,0)
	
	var date = utils.timestampToDate(application.getServerTimeStamp());
	var parsedDate = utils.dateFormat(date2, 'd MMM yyyy');
	
	var largo = globals.vHisclistrynro.length;
	var esnumero = true;
	for (var i= 0;i<largo && esnumero == true; i++){
		if (globals.vHisclistrynro.charCodeAt(i)< 48 || globals.vHisclistrynro.charCodeAt(i) > 57){
			esnumero = false
		}
	}
	
    if (esnumero){
    	if(largo<7){
    		plugins.dialogs.showInfoDialog("Error en Nro.Internación","El número de Internación es menor a 7 digitos."+'\n'+" Completar la cantidad de dígitos.","Ok")
			return false
	   	}else{
    	
		     globals.vHiscli = utils.stringToNumber(globals.vHisclistrynro.valueOf());
		
		
			//plugins.dialogs.showInfoDialog("",globals.vHiscli,"ok")
			//globals.muestroNuevoDatasetN("frm_scr_tbc_admision_N")
			
			elements.tabless_72.tabIndex = 2	
			forms.frm_scr_tbc_admision_N.controller.focusFirstField()
			forms.frm_scr_tbc_admision_N.elements.adm_histclin.requestFocus()
			return true
    	}
    }
    else{
    	 globals.vAlfa = globals.vHisclistrynro.toLocaleUpperCase()
 		 
 			//globals.muestroNuevoDatasetAlfa("tbc_admisionL_copy")
 			if(!globals.vSupervisor){
 				elements.tabless_72.tabIndex = 1
 				forms.frm_scr_tbc_admision_L.controller.focusFirstField()
 				forms.frm_scr_tbc_admision_L.elements.adm_histclin.requestFocus()
 			}else{
 				var params = databaseManager.getTableFilterParams("admisionscroll")
				for (var j = 0; params != null && j < params.length; j++) {
					databaseManager.removeTableFilterParam("admisionscroll",params[j][4])
				}
 				creoDatasetInternadosAlfabetico()
 				elements.tabless_72.tabIndex = 3
 				forms.frm_scr_tbc_admision_L_super.controller.focusFirstField()
 				//forms.frm_scr_tbc_admision_L_super.elements.adm_histclin.requestFocus()
 			}
			return true
    }
}

/**
 * @properties={typeid:24,uuid:"E33F5119-97F8-48D5-B3E9-08DB97E71F96"}
 */
function creoDatasetInternadosAlfabetico() {
	var $SQL="select adm_histclin, adm_apelnom, adm_habita, adm_cama, adm_fecing, adm_fecaltaefec, adm_sexo, adm_fecing, adm_horing from tbc_admision_scroll where Adm_ApelNom LIKE '"+globals.vAlfa+"%' order by Adm_ApelNom asc"
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
	$ds.addColumn('fsexo',8,JSColumn.NUMBER)
	$ds.addColumn('ffecing',9,JSColumn.NUMBER)
	$ds.addColumn('fhoring',10,JSColumn.NUMBER)
			
	var $max= frm_ds.getMaxRowIndex()
	var $hiscli_edit=' ';
   	var $largo_edit=0;
   	var $fingreso=' ';
   	var $fegreso=' ';
   	var $fegreso0=0;
	if ($max > 0){
		for(var i=1;i<=$max;i++){
			$hiscli_edit=frm_ds.getValue(i,1)
			
			if($hiscli_edit!=null&&$hiscli_edit!=''){
				$largo_edit=$hiscli_edit.toString().length
				$hiscli_edit=$hiscli_edit.toString().substr(0,$largo_edit-1)+"/"+$hiscli_edit.toString().substr($largo_edit-1,1)
			}
			$fingreso=frm_ds.getValue(i,5)
			$fegreso=frm_ds.getValue(i,6)
			$fegreso0=utils.stringToNumber(frm_ds.getValue(i,6))
			if($fegreso0==0){
				$fegreso=''
			}else{
				$fegreso=$fegreso.toString().substr(6,2)+"/"+$fegreso.toString().substr(4,2)+"/"+$fegreso.toString().substr(0,4)
			}
			$ds.addRow([$hiscli_edit,frm_ds.getValue(i,2),frm_ds.getValue(i,3),frm_ds.getValue(i,4),$fingreso.toString().substr(6,2)+"/"+$fingreso.toString().substr(4,2)+"/"+$fingreso.toString().substr(0,4),$fegreso,frm_ds.getValue(i,1),frm_ds.getValue(i,8),frm_ds.getValue(i,9),frm_ds.getValue(i,10)])
		}
    }

	var $tipos = [JSColumn.TEXT,JSColumn.TEXT,JSColumn.NUMBER, JSColumn.TEXT,JSColumn.TEXT,JSColumn.TEXT,JSColumn.NUMBER,JSColumn.NUMBER,JSColumn.NUMBER,JSColumn.NUMBER]


	var $frm = solutionModel.getForm('frm_scr_tbc_admision_L_super')
	$frm.dataSource = $ds.createDataSource('Ds_Admision', $tipos)
	forms.frm_scr_tbc_admision_L_super.controller.recreateUI()
}
