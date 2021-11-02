/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"D9196479-EB0E-4F89-A84A-FD566F80127D"}
 */
function onAction_seleccionar(event) {	
	//forms.frm_protocolos_quirurgicos.onAction_seleccionar(event);
	var win = application.createWindow("detalle_protocolo",JSWindow.MODAL_DIALOG);	
    win.title= 'Detalle de protocolos quirurgicos';
    win.resizable = false;
    globals.gbl_cerrarDetalleProtocolo = false;
    win.show(forms.frm_protocolos_quirurgicos_dtl);    
}

/**
 * Called before the form component is rendered.
 *
 * @param {JSRenderEvent} event the render event
 *
 * @properties={typeid:24,uuid:"DF4658A0-93F6-4D62-9AB3-B0C55DC4510C"}
 */
function onRender_ciriestado(event) {
	var $rcd = event.getRecord()
	if ($rcd.ciriestado == 0 || $rcd.cirifechafinal == 0)
		event.getRenderable().fgcolor = '#ff0000';
	else
		event.getRenderable().fgcolor = '#000000';
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"8446974F-4A77-412C-94D7-E12E11B8CD8B"}
 */
function onAction_verDetalle(event) {
	elements.btn_detalle.requestFocus();
}

/**
 * Perform the element double-click action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"8697209D-0708-4E80-A0D0-0FADBB002C49"}
 */
function onDoubleClick_selecciona(event) {
	onAction_seleccionar(event)
}
