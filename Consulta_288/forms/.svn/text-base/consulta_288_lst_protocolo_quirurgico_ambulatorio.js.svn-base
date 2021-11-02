/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"BCE14E7D-7D19-4193-A677-3D496B2AFE32"}
 */
function onAction_seleccionar(event) {	
	
	var win = application.createWindow("detalle_protocolo",JSWindow.MODAL_DIALOG);	
    win.title= 'Detalle de protocolos quirurgicos ambulatorios';
    win.resizable = false;
    globals.gbl_cerrarDetalleProtocolo = false;
    win.show(forms.consulta_288_dtl_protocolo_quirurgico_ambulatorio);    
}

/**
 * Called before the form component is rendered.
 *
 * @param {JSRenderEvent} event the render event
 *
 * @properties={typeid:24,uuid:"1C1A27C6-D1B5-416C-9DBE-96C79E8A329C"}
 */
function onRender_estado(event) {
	var $rcd = event.getRecord()
	if ($rcd.guar_estado <= 3 || $rcd.cirgfechafinal == 0)
		event.getRenderable().fgcolor = '#ff0000';
	else
		event.getRenderable().fgcolor = '#000000';
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"D379A666-CDD3-4E95-A980-DE01572E8FDF"}
 */
function onAction_verDetalle(event) {
	elements.btn_detalle.requestFocus();
}

/**
 * Perform the element double-click action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"9E3743BB-0B55-4495-9BF4-4A728A4A25DF"}
 */
function onDoubleClick_selecciona(event) {
	onAction_seleccionar(event)
}
