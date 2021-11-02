/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"D5BD7C90-D46E-4B5F-889A-C8111FB511E6"}
 */
var laboratorio = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"EC4B2E81-CAFC-46A2-BF3F-462583056B6D"}
 */
var $itemRecibidoId = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"3835F8E0-8200-42C3-B2D7-E94939A3C0AA",variableType:93}
 */
var fecha_novedad = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"811E18E5-883A-4194-B4DB-9F9205254360"}
 */
var descripcion = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"BD5B638E-8DCA-4E88-9731-4D1135FD9642"}
 */
var tipo_novedad = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"96E063B2-52C5-4109-97C6-6C2EF28C8406"}
 */
var observacion = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"24FAC24A-95E8-40D1-A082-6CE21384B365"}
 */
var cantidad = '';

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"B9088F15-77A2-4486-A61D-5243542DF269"}
 */
function onAction_editarItem(event) {
	globals.gbl_protesisNuevoItem = false;
	
	var obj = new Object();
	obj.cantidad = forms.protesis_lst_protesis.foundset['cantidad'];
	obj.codigo = forms.protesis_lst_protesis.foundset['codigo'];
	obj.detalle = forms.protesis_lst_protesis.foundset['detalle'];
	forms.prote_dlgModificarProtesisItems.$item = obj;
	
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
 * @properties={typeid:24,uuid:"63DF04AF-CB34-4B56-BE6A-9514F7BA9354"}
 */
function onAction_eliminarItem(event) {
	
	if(globals.DIALOGS.showQuestionDialog('¡Atención!','¿Está seguro que desea borrar el item?', 'Si', 'No') == 'Si'){
		var borrado = forms.prote_tbl_protesisSubItems.foundset.deleteRecord();
		if(!borrado)
			globals.DIALOGS.showErrorDialog("Error","No ha sido posible borrar el item. Vuelva a intentar. Si el problema persiste, contacte al administrador del sistema.","Aceptar");
			//globals.DIALOGS.showInfoDialog("Resultado","El item se borro correctamente.","Aceptar");
	}
}

/**
 * @properties={typeid:24,uuid:"26CBC4B1-2CFE-483E-AB37-9408AFBF577D"}
 */
function loadDataForm() {
	
	var sqlsubItem = "SELECT nov.cantidad,ir.descripcion,ir.laboratorio,nov.tipo_novedad,nov.fecha_novedad,nov.observacion\
		FROM prote_item_novedades nov\
		left join prote_item_recibidos ir on ir.id = nov.item_recibido_id\
		WHERE nov.item_recibido_id = '" + $itemRecibidoId + "'";
	
	var dsNovedad = databaseManager.getDataSetByQuery('desal',sqlsubItem,null,-1);
	
	var $frm = solutionModel.getForm('prote_tbl_protesisNovedadItem');
	var $tipos = [JSColumn.TEXT,JSColumn.TEXT,JSColumn.TEXT,JSColumn.TEXT,JSColumn.DATETIME,JSColumn.TEXT];
	$frm.dataSource = dsNovedad.createDataSource('prote_tbl_protesisNovedadItem', $tipos);
	forms.prote_tbl_protesisNovedadItem.controller.recreateUI();
	
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"026E34EB-680A-498E-9E13-632653B50979"}
 */
function onShow_inicializarform(firstShow, event) {
	
	var dsProtesis = databaseManager.createEmptyDataSet();
	dsProtesis.addColumn('cantidad');
	dsProtesis.addColumn('descripcion');
	dsProtesis.addColumn('laboratorio');
	dsProtesis.addColumn('tipo_novedad');
	dsProtesis.addColumn('fecha_novedad');
	dsProtesis.addColumn('observacion');
	
	var $frm = solutionModel.getForm('prote_tbl_protesisNovedadItem');
	var $tipos = [JSColumn.TEXT,JSColumn.TEXT,JSColumn.TEXT,JSColumn.TEXT, JSColumn.DATETIME,JSColumn.TEXT];
	$frm.dataSource = dsProtesis.createDataSource('prote_tbl_protesisNovedadItem', $tipos);
	forms.prote_tbl_protesisNovedadItem.controller.recreateUI();
}
