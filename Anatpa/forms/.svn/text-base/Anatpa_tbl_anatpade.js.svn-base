/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"9E4B3013-E1AE-4AE8-8E12-B2E375C106A0"}
 */
function onAction_editarItem(event) {
	
	forms.Anatpa_frm_anatpaca.actualizarObservaPractica();
	
	var id = forms.Anatpa_tbl_anatpade.foundset['id'];
	if(id == null || id == 'null'){
		forms.Anatpa_dlg_agregarItem.$item = null;
		
		var obj = new Object();
		obj.cantidad = forms.Anatpa_tbl_anatpade.foundset['apde_cantidad'];
		obj.descripcion = forms.Anatpa_tbl_anatpade.foundset['descripcion'];
		obj.codigo = forms.Anatpa_tbl_anatpade.foundset['apde_codnom'];
		obj.tipoNom = forms.Anatpa_tbl_anatpade.foundset['apde_tipnom'];
		obj.observacion = forms.Anatpa_tbl_anatpade.foundset['observacion'];
		forms.Anatpa_dlg_agregarItem.$item = obj;
		
		var win = application.createWindow("modificar_item_practica",JSWindow.MODAL_DIALOG);	
	    win.title= 'Agregar - Practicas';
	    win.resizable = false;
	    win.show(forms.Anatpa_dlg_agregarItem);
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"C07382A1-71EA-463B-9925-A0102C204D5C"}
 */
function onAction_eliminarItem(event) {
	
	forms.Anatpa_frm_anatpaca.actualizarObservaPractica();
	
	var id = forms.Anatpa_tbl_anatpade.foundset['id'];
	if(id == null || id == 'null'){
		if(globals.DIALOGS.showQuestionDialog('¡Atención!','¿Está seguro que desea borrar el item?', 'Si', 'No') == 'Si'){
			forms.Anatpa_frm_anatpaca.f_observaPractica = null;
			var borrado = forms.Anatpa_tbl_anatpade.foundset.deleteRecord();
			forms.Anatpa_frm_anatpaca.actualizarObservaPractica();
			if(!borrado)
				globals.DIALOGS.showErrorDialog("Error","No ha sido posible borrar el item. Vuelva a intentar. Si el problema persiste, contacte al administrador del sistema.","Aceptar");
				//globals.DIALOGS.showInfoDialog("Resultado","El item se borro correctamente.","Aceptar");
		}
	}
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"BF684703-A679-4B89-BD0D-38A2B26319C2"}
 */
function onAction_tableView(event) {
	
	forms.Anatpa_frm_anatpaca.actualizarObservaPractica();
}

/**
 * Called before the form component is rendered.
 *
 * @param {JSRenderEvent} event the render event
 *
 * @properties={typeid:24,uuid:"FF26413C-CE59-487E-9148-981705538044"}
 */
function onRender_itemSinGuardar(event) {
	
	var $rcd = event.getRecord();
	if ($rcd['id'] == null)
		event.getRenderable().fgcolor = '#ff0000';
	else
		event.getRenderable().fgcolor = '#000000';
}
