/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"8E7FAD20-096E-4872-9476-860A29FD3FD7"}
 */
function onAction_seleccionar(event) {	
	/*
	var win = application.createWindow("detalle_protocolo",JSWindow.MODAL_DIALOG);	
    win.title= 'Detalle de protocolos quirurgicos ambulatorios';
    win.resizable = false;
    globals.gbl_cerrarDetalleProtocolo = false;
    win.show(forms.consulta_288_dtl_protocolo_quirurgico_ambulatorio);*/    
}

/**
 * Called before the form component is rendered.
 *
 * @param {JSRenderEvent} event the render event
 *
 * @properties={typeid:24,uuid:"33D8BDD5-922F-4001-941B-D18C357CC736"}
 */
function onRender_estado(event) {
	var $rcd = event.getRecord()
	if ($rcd.pbacestado < 2)
		event.getRenderable().fgcolor = '#ff0000';
	else
		event.getRenderable().fgcolor = '#000000';
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"EF29CBF8-00EC-4C67-8CED-278D1134FAD8"}
 */
function onAction_verDetalle(event) {
	//elements.btn_detalle.requestFocus();
}

/**
 * Perform the element double-click action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"981D932A-6EA2-4B0D-BA9A-1F8DDCE9474A"}
 */
function onDoubleClick_selecciona(event) {
	onAction_seleccionar(event)
}
