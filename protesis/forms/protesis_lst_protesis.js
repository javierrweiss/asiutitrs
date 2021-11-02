/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"A3B66DA7-A71E-4B6E-AD7B-820451137842"}
 */
var codigo = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"93E9C29B-0B4E-43D2-A7B4-9E2E7A9D437E"}
 */
var detalle = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"545FC4AB-A4C2-4C39-9A57-FA0B4E0570EB"}
 */
var cantidad = '';

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"02B7B459-9D53-4228-AF6C-1290F4007A6C"}
 */
function onAction_editarItem(event) {
	globals.gbl_protesisNuevoItem = false;
	
	var obj = new Object();
	obj.cantidad = forms.protesis_lst_protesis.foundset['cantidad'];
	obj.codigo = forms.protesis_lst_protesis.foundset['codigo'];
	obj.detalle = forms.protesis_lst_protesis.foundset['detalle'];
	forms.prote_dlgAgregarProtesisItems.$item = obj;
	
	var win = application.createWindow("detalle_protesis_items",JSWindow.MODAL_DIALOG);	
    win.title= 'Detalle solicitud de protesis';
    win.resizable = false;
    win.show(forms.prote_dlgAgregarProtesisItems);

}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"C156F7AB-C778-4AE6-9A16-C4EA1CED7111"}
 */
function onAction_eliminarItem(event) {
	
	if(globals.DIALOGS.showQuestionDialog('¡Atención!','¿Está seguro que desea borrar el item?', 'Si', 'No') == 'Si'){
		var borrado = forms.protesis_lst_protesis.foundset.deleteRecord();
		if(!borrado)
			globals.DIALOGS.showErrorDialog("Error","No ha sido posible borrar el item. Vuelva a intentar. Si el problema persiste, contacte al administrador del sistema.","Aceptar");
			//globals.DIALOGS.showInfoDialog("Resultado","El item se borro correctamente.","Aceptar");
	}
}
