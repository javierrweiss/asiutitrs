/**
 * // TODO generated, please specify type and doc for the params
 * @param {Object} firstShow
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"29CA693A-A18A-40D4-9E4D-A6AB4109E011"}
 */
function onShow(firstShow, event) {
	cargarRegistros();
}

/**
 * @properties={typeid:24,uuid:"91F489A6-002E-4999-B3A8-79F76F3407E5"}
 * @AllowToRunInFind
 */
function cargarRegistros(){
	if(globals.AsiVm_eventSourceButton == 1){
		
		globals.AsiVm_paciente = '';
		elements.Paciente.requestFocus();
		
	}
	else{
		
		var largo = globals.AsiVm_paciente.length;
		var esnumero = true;
		for (var i= 0;i<largo && esnumero == true; i++){
			if(isNaN(globals.AsiVm_paciente)){ //Si no es numero es true!!
				esnumero=false
			}
		}
		
	    if (esnumero){
	    	if(largo<7){
	    		plugins.dialogs.showInfoDialog("Error en Nro.Internación","El número de Internación es menor a 7 digitos."+'\n'+" Completar la cantidad de dígitos.","Ok")
				
		   	}else{
	    	
			    globals.AsiVm_hisclin = utils.stringToNumber(globals.AsiVm_paciente.valueOf());
				elements.tab_scroll.tabIndex = 2;
				forms.AsiVm_tbl_internado_num.controller.setSelectedIndex(1);
				forms.AsiVm_tbl_internado_num.elements.btn_seleccionar.requestFocus()
	    	}
	    }
	    else{            

	    	scopes.globals.AsiVm_apellido = globals.AsiVm_paciente.toLocaleUpperCase()
	    	elements.tab_scroll.tabIndex = 1;
	    	forms.AsiVm_tbl_internado_alfa.controller.setSelectedIndex(1);
	 		forms.AsiVm_tbl_internado_alfa.elements.btn_seleccionar.requestFocus()
//	    	creoDatasetInternadosAlfabetico();	
	 		
	    }
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"2C5ED17E-AABF-489F-8C42-075004C4831C"}
 */
function onAction_histcli(event) {
	
	cargarRegistros();
}

/**
 * @properties={typeid:24,uuid:"AF1B6F57-094B-43E2-A44B-5D7F739878A2"}
 */
function creoDatasetInternadosAlfabetico() {
//	forms.AsiVm_tbl_internado_alfa.foundset.clear()
	var ape = globals.AsiVm_paciente.toLocaleUpperCase();
//	var $SQL="select adm_histclin, adm_apelnom, adm_habita, adm_cama, adm_fecing, adm_fecaltaefec from tbc_admision_scroll where Adm_ApelNom >='"+apeynom+" ' and Adm_ApelNom <='"+apeynom+"Z' order by Adm_ApelNom asc"
	var $SQL="select adm_histclin, adm_apelnom, adm_habita, adm_cama, adm_fecing, adm_fecaltaefec from tbc_admision_scroll where Adm_FecAltaEfec = 0 and Adm_Apellido_5 like '%"+ape+"%' order by Adm_FecAltaEfec asc, Adm_Apellido_5 asc";

	//	var $SQL="select adm_histclin, adm_apelnom, adm_habita, adm_cama, adm_fecing, adm_fecaltaefec from tbc_admision_scroll where Adm_FecAltaEfec = 0 and Adm_Apellido_5 like '" + apeynom + "%' order by Adm_FecAltaEfec asc, Adm_Apellido_5 asc"
    var ds_inter = databaseManager.getDataSetByQuery("admisionscroll", $SQL, null, 500);
  
	//$hiscli_edit=$hiscli_edit.toString().substr(0,$largo_edit-1)+"/"+$hiscli_edit.toString().substr($largo_edit,1)
	var $tipos = [JSColumn.TEXT,JSColumn.TEXT,JSColumn.NUMBER, JSColumn.TEXT,JSColumn.TEXT,JSColumn.TEXT]
	
	//databaseManager.getFoundSet(datasource).deleteAllRecords()
	var frm = solutionModel.getForm('AsiVm_tbl_internado_alfa')
	//ds_inter.removeRow(1);
//	frm.dataSource = '' 
	forms.AsiVm_tbl_internado_alfa.controller.recreateUI()
	frm.dataSource = ds_inter.createDataSource('ds_Admision', $tipos)
//	elements.tab_scroll.tabIndex = 1;
	forms.AsiVm_tbl_internado_alfa.controller.recreateUI()
	
//	var $frm = solutionModel.getForm('Asivm_tbl_hcivm');
//	$frm.dataSource = monitoreoRegistros.createDataSource('ds_hciuco', $tipos);
//	forms.Asivm_tbl_hcivm.controller.recreateUI();
	
	
}
