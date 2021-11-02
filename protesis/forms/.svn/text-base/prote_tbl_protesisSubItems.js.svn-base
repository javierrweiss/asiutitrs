/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"69E7AA90-CFB9-4908-9C78-E876EFE58A2A",variableType:93}
 */
var fecha_recepcion = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"C361AB71-7BCF-47A2-B1D2-765E066DFF59"}
 */
var descripcion = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"8075F8A8-4E8B-42E7-9C0A-D9D679D13A16"}
 */
var laboratorio = null;

/**
 * @properties={typeid:35,uuid:"7E07A7C5-1844-4563-9E7B-D792D95C2F8B",variableType:-4}
 */
var esteril = false;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"6481D325-7CF1-4D53-8FB3-36A6ADE13DDC"}
 */
var observacion = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"7577AEE6-130F-4826-B5A5-D2FC5F43A5C3"}
 */
var cantidad = '';

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"68B284CF-D406-493E-B024-3E8DAAF2DB3E"}
 */
function onAction_editarItem(event) {
	
	var id = forms.prote_tbl_protesisSubItems.foundset['id'];
	if(id == null || id == 'null'){
		forms.prote_dlgModificarProtesisItems.$item = null;
		
		var obj = new Object();
		obj.cantidad = forms.prote_tbl_protesisSubItems.foundset['cantidad'];
		obj.descripcion = forms.prote_tbl_protesisSubItems.foundset['descripcion'];
		obj.esteril_value = forms.prote_tbl_protesisSubItems.foundset['esteril_value'];
		obj.laboratorio = forms.prote_tbl_protesisSubItems.foundset['laboratorio'];
		obj.observacion = forms.prote_tbl_protesisSubItems.foundset['observacion'];
		forms.prote_dlgModificarProtesisItems.$item = obj;
		
		var win = application.createWindow("modificar_item_recibido",JSWindow.MODAL_DIALOG);	
	    win.title= 'Agregar - Recepción de Prótesis e Implantes Quirúrgicos';
	    win.resizable = false;
	    win.show(forms.prote_dlgModificarProtesisItems);
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"BE00ECDD-BEA6-4F58-BA7D-7C30F9741F51"}
 */
function onAction_eliminarItem(event) {
	var id = forms.prote_tbl_protesisSubItems.foundset['id'];
	if(id == null || id == 'null'){
		if(globals.DIALOGS.showQuestionDialog('¡Atención!','¿Está seguro que desea borrar el item?', 'Si', 'No') == 'Si'){
			var borrado = forms.prote_tbl_protesisSubItems.foundset.deleteRecord();
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
 * @private
 *
 * @properties={typeid:24,uuid:"57C9A9C4-C102-4E59-BFD7-51FA5C157D9E"}
 */
function onAction_btnAgregarNovedad(event) {
	
	var id = forms.prote_tbl_protesisSubItems.foundset['id'];
	if(id != null && id != 'null'){
		onAction_mostrarNovedades(event);
		
		var obj = new Object();
		obj.id = forms.prote_tbl_protesisSubItems.foundset['id'];
		obj.cantidad = forms.prote_tbl_protesisSubItems.foundset['cantidad'];
		obj.esteril = forms.prote_tbl_protesisSubItems.foundset['esteril'];
		obj.descripcion = forms.prote_tbl_protesisSubItems.foundset['descripcion'];
		obj.observacion = forms.prote_tbl_protesisSubItems.foundset['observacion'];
		obj.laboratorio = forms.prote_tbl_protesisSubItems.foundset['laboratorio'];
		forms.prote_dlgAgregarNovedadItem.$item = obj;
		
		var win = application.createWindow("Agregar_novedad",JSWindow.MODAL_DIALOG);	
	    win.title= 'Agregar Novedad';
	    win.resizable = false;
	    //globals.gbl_cerrarDetalleProtocolo = false;
	    win.show(forms.prote_dlgAgregarNovedadItem);
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"54DD4277-AF0C-4A33-925E-C1DC6BCDB87F"}
 */
function onAction_mostrarNovedades(event) {
	
	var itemRecibidoId = forms.prote_tbl_protesisSubItems.foundset['id'];
	forms.prote_tbl_protesisNovedadItem.$itemRecibidoId = itemRecibidoId;
	forms.prote_tbl_protesisNovedadItem.loadDataForm();

}

/**
 * Called before the form component is rendered.
 *
 * @param {JSRenderEvent} event the render event
 *
 * @properties={typeid:24,uuid:"4669E044-004B-4681-817F-C0273BA6A230"}
 */
function onRender_itemSinGuardar(event) {
	
	var $rcd = event.getRecord()
	if ($rcd.id == null)
		event.getRenderable().fgcolor = '#ff0000';
	else
		event.getRenderable().fgcolor = '#000000';
	
}
