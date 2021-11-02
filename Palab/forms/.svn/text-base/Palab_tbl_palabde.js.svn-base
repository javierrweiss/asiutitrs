/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"A2AE92A1-8DBC-4575-93F4-EDCFDC08E89C"}
 * @AllowToRunInFind
 */
function onAction_eliminarItem(event) {

	var protocolo = forms.Palab_tbl_palabde.foundset['protocolo'];
	if(protocolo == null || protocolo == 'null'){
		
		if(globals.DIALOGS.showQuestionDialog('¡Atención!','¿Está seguro que desea borrar el item?', 'Si', 'No') == 'Si'){
			
			var descontar = false;
			if(foundset['ana40'] == 1 || foundset['ana40'] == '1')
				descontar = true;
			
			var tieneDepen = false;
			var analisisCod = 0;
			if(foundset['ana19'] == 1 || foundset['ana19'] == '1'){
				
				tieneDepen = true;
				analisisCod = foundset['codigo'];
			}
				
			var borrado = forms.Palab_tbl_palabde.foundset.deleteRecord();
			if(!borrado){
				
				globals.DIALOGS.showErrorDialog("Error","No ha sido posible borrar el item. Vuelva a intentar. Si el problema persiste, contacte al administrador del sistema.","Aceptar");
				//globals.DIALOGS.showInfoDialog("Resultado","El item se borro correctamente.","Aceptar");
			}
			else{
				
				forms.Palab_frm_palab_inter.elements.lbl_countItem.text = forms.Palab_tbl_palabde.foundset.getSize()+ " Items sin Guardar";
				if(descontar)
					forms.Palab_frm_palab_inter.$_wJS--;
				
				//Borrar si tiene dependencias
				if(tieneDepen){
					
					var ds_aux = databaseManager.createEmptyDataSet();
					ds_aux.addColumn('it_ped_depen');
					ds_aux.addColumn('it_depen');
					ds_aux.addColumn('it_d_js');
					ds_aux.addColumn('it_d_mca_rep');
					
					if(forms.Palab_tbl_palab_dependencias.foundset.find()){
						
						forms.Palab_tbl_palab_dependencias.foundset['it_ped_depen'] = '!' + analisisCod;
						forms.Palab_tbl_palab_dependencias.foundset.search();
						
						if(forms.Palab_tbl_palab_dependencias.foundset.getSize() > 0){
							
							for(var i = 1; i <= forms.Palab_tbl_palab_dependencias.foundset.getSize() ; i++ ){
								
								forms.Palab_tbl_palab_dependencias.foundset.setSelectedIndex(i);
								ds_aux.addRow([forms.Palab_tbl_palab_dependencias.foundset['it_ped_depen'],forms.Palab_tbl_palab_dependencias.foundset['it_depen'],forms.Palab_tbl_palab_dependencias.foundset['it_d_js'],forms.Palab_tbl_palab_dependencias.foundset['it_d_mca_rep']]);
							}
							
							var frm = solutionModel.getForm('Palab_tbl_palab_dependencias');
							var tipos = [JSColumn.TEXT,JSColumn.TEXT,JSColumn.TEXT,JSColumn.TEXT];
							frm.dataSource = ds_aux.createDataSource('Palab_tbl_palab_dependencias', tipos);
							forms.Palab_tbl_palab_dependencias.controller.recreateUI();
						}
						else{
							
							forms.Palab_tbl_palab_dependencias.foundset.clear();
							forms.Palab_tbl_palab_dependencias.foundset.loadAllRecords();
							forms.Palab_tbl_palab_dependencias.foundset.deleteAllRecords();
						}
					}
				}
			}		
		}
	}
}

/**
 * Called before the form component is rendered.
 *
 * @param {JSRenderEvent} event the render event
 *
 * @properties={typeid:24,uuid:"619F9BE2-B662-452E-981F-F91863407209"}
 */
function onRender_itemSinGuardar(event) {
	
	var $rcd = event.getRecord();
	if ($rcd['protocolo'] == null)
		event.getRenderable().fgcolor = '#ff0000';
	else
		event.getRenderable().fgcolor = '#000000';
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"7E61BAD0-C4A4-4FF5-95CE-07D666FDED5F"}
 */
function onAction_btnVerDependencia(event) {
	
	globals.Palab_ana24 = foundset['codigo'];
	
	if(palab_rel_buscar_analisis_dependecia.getSize() > 0){
		
		var win2 = application.createWindow("ver_dependencia", JSWindow.MODAL_DIALOG);
		win2.title = 'Dependencias';
		win2.resizable = false;
		win2.show(forms.Palab_dlg_buscar_analisis_dependencia);
	}
	else{
		
		globals.DIALOGS.showInfoDialog("Resultado","Analisis sin dependencias.","Aceptar");
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"85A34513-19BF-479E-A80B-CCFB6C931E7A"}
 */
function onAction_txtData(event) {
	
	elements.btn_verDependencia.requestFocus();
}
