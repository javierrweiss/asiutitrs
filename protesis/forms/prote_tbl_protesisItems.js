/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"9EDDD56F-30CA-46F1-91D8-A742064F8C36"}
 */
var total = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"AFA7D130-A7A7-4579-9ABF-67BE5E1B61FE"}
 */
var cantidad = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"30CE17D6-EC2E-4190-AAAC-EB9EBC16F969"}
 */
var detalle = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"7472D840-D07E-4C2B-9041-AB1C10068BF9"}
 */
var codigo = null;

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"F6F190EF-74C6-48EC-BC4D-8317A0806E06"}
 */
function onAction_seleccionar(event) {
	
	globals.gbl_protesisNuevoItem = true;
	
	var obj = new Object();
	obj.id = forms.prote_tbl_protesisItems.foundset['id'];
	obj.cantidad = forms.prote_tbl_protesisItems.foundset['cantidad'];
	obj.codigo = forms.prote_tbl_protesisItems.foundset['codigo'];
	obj.detalle = forms.prote_tbl_protesisItems.foundset['detalle'];
	obj.total = forms.prote_tbl_protesisItems.foundset['total'];
	forms.prote_dlgModificarProtesisItems.$item = obj;
	
	onAction_btnDetalle(event);
	
	var win = application.createWindow("_recepcion_protesis",JSWindow.MODAL_DIALOG);	
    win.title= 'Detalle - Solicitud de Protesis e Implantes Quirúrgicos';
    win.resizable = false;
    //globals.gbl_cerrarDetalleProtocolo = false;
    win.show(forms.prote_dlgModificarProtesisItems);   
}

/**
 * Called before the form component is rendered.
 *
 * @param {JSRenderEvent} event the render event
 *
 * @properties={typeid:24,uuid:"B20B10E7-B9E0-4F1F-8980-B131A17AF5CD"}
 */
function onRender_estado(event) {
	/*
	var $rcd = event.getRecord()
	if ($rcd.guar_estado <= 3 || $rcd.cirgfechafinal == 0)
		event.getRenderable().fgcolor = '#ff0000';
	else
		event.getRenderable().fgcolor = '#000000';
		*/
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"3CCF02F2-3AFF-4136-BE35-6383B0E443F8"}
 */
function onAction_verDetalle(event) {
	elements.btn_detalle.requestFocus();
}

/**
 * Perform the element double-click action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"A0D5B21D-3CD9-4891-AD5B-7217D656F8B1"}
 */
function onDoubleClick_selecciona(event) {
	//onAction_seleccionar(event)
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"E3815CB5-43BE-4C61-A5BF-EFC208260D25"}
 */
function onAction_btnDetalle(event) {
	
	var solicitudItemId = forms.prote_tbl_protesisItems.foundset['id'];
	var codigo = forms.prote_tbl_protesisItems.foundset['codigo'];
	var detalle = forms.prote_tbl_protesisItems.foundset['detalle'];
	forms.prote_frmRecepcionProtesis.elements.lbl_protesisRecibida.text = "Protesis Recibidas - Código: " + utils.stringTrim(codigo) + " - Detalle: " + utils.stringTrim(detalle);
	
	// cargando datos de protesis solicitado
	var sqlsubItem = "SELECT sr.id,sr.cantidad,sr.esteril,sr.observacion\
		FROM prote_solicitud_recibida sr\
		WHERE sr.solicitud_item_id = '" + solicitudItemId + "'";
	
	var dsSubItem = databaseManager.getDataSetByQuery('desal',sqlsubItem,null,-1);
	var $frm = solutionModel.getForm('prote_tbl_protesisSubItems');
	var $tipos = [JSColumn.TEXT,JSColumn.TEXT,JSColumn.TEXT,JSColumn.TEXT];
	$frm.dataSource = dsSubItem.createDataSource('prote_tbl_protesisSubItems', $tipos);
	forms.prote_tbl_protesisSubItems.controller.recreateUI();
}
