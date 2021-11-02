/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"B18C2F3A-55D9-45D0-BB39-1ECF7F3949E3",variableType:4}
 */
var it_d_js = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"10BB9413-1F12-40DF-BE60-01AECF506E7A",variableType:4}
 */
var it_depen = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"49175818-6031-41DB-8038-45716D3B2757",variableType:4}
 */
var it_ped_depen = 0;

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"B6EA37C7-3E20-4848-A552-C104719AD2E2"}
 */
function onAction_eliminarItem(event) {

	var protocolo = forms.Palab_tbl_palabde.foundset['protocolo'];
	if(protocolo == null || protocolo == 'null'){
		
		if(globals.DIALOGS.showQuestionDialog('¡Atención!','¿Está seguro que desea borrar el item?', 'Si', 'No') == 'Si'){
			
			var descontar = false;
			if(foundset['ana40'] == 1 || foundset['ana40'] == '1')
				descontar = true;
			
			var borrado = forms.Palab_tbl_palabde.foundset.deleteRecord();
			if(!borrado){
				
				globals.DIALOGS.showErrorDialog("Error","No ha sido posible borrar el item. Vuelva a intentar. Si el problema persiste, contacte al administrador del sistema.","Aceptar");
				//globals.DIALOGS.showInfoDialog("Resultado","El item se borro correctamente.","Aceptar");
			}
			else{
				
				forms.Palab_frm_palab_inter.elements.lbl_countItem.text = forms.Palab_tbl_palabde.foundset.getSize()+ " Items sin Guardar";
				if(descontar)
					forms.Palab_frm_palab_inter.$_wJS--;
			}
				
		}
	}
}

/**
 * Called before the form component is rendered.
 *
 * @param {JSRenderEvent} event the render event
 *
 * @properties={typeid:24,uuid:"AF3B4547-6DDC-416B-8BF1-42FBD3BE8E1C"}
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
 * @properties={typeid:24,uuid:"404E31E6-DA4A-4D04-B03A-CE97EB0FC039"}
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
 * @properties={typeid:24,uuid:"A0CF364A-75B0-4409-BDC6-4F3FAE055FB2"}
 */
function onAction_txtData(event) {
	
	elements.btn_verDependencia.requestFocus();
}
