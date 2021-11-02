
/**
 * Called before the form component is rendered.
 *
 * @param {JSRenderEvent} event the render event
 *
 * @properties={typeid:24,uuid:"ADB59903-6D68-45F0-8157-990D24404DD6"}
 */
function onRender_scroll_protesis(event) {
	// TODO Auto-generated method stub
	// NOTE: a property set on the renderable, will be kept on the element also after onRender is done
	if (event.isRecordSelected()) {
		event.getRenderable().fgcolor = '#00ff00';
	} else if (event.getRecordIndex() % 2) {
		event.getRenderable().fgcolor = '#ff0000';
	} else {
		event.getRenderable().fgcolor = '#000000';
	}
}

/**
 * Handle record selected.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"17954B76-1329-4B8B-BED4-E0E34FF6DE17"}
 */
function onRecordSelection_scroll_protesis(event) {
			
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"30C9D03E-0F9C-4913-9191-6F463A27C944"}
 */
function onAction_boton1(event) {
	globals.vNroPedidoProtesis=forms.frm_scroll_protesis.foundset.prote_nroprote
	var win = application.createWindow("f",JSWindow.MODAL_DIALOG)
	win.title = "Selección de Prótesis Implantada";
	win.setSize(1200,700)
	forms.frm_muestro_protesis_tab.controller.show(win)
}
