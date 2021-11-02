/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"D4F8E219-8E57-45A7-8086-403D0C2CDA57"}
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
 * @properties={typeid:24,uuid:"E61BC576-948F-4D40-9057-E0DDD7A46953"}
 */
function onRender_estado(event) {
	//Estado: 9-anulado 
	//incompleto: string vacio 
	
	var $rcd = event.getRecord();
	
	if($rcd != null){
		
		var color = '#000000';
		
		if($rcd['estado'] == 9 || $rcd['prad12'] == 0){
			
		}
		else{
			
			// Protocolos sin validar
			if ($rcd['prac16']  == 0 || ($rcd['prad19'] == 0 && $rcd['prad10'] <= 2))
				color = '#0000FF';
			
			// Protocolos incompletos
			if (utils.stringTrim($rcd['incompleto']).length  == 0)
				color = '#ff0000';
		}
	}
	
	event.getRenderable().font = 'Microsoft Sans Serif,0,12';
	if(event.isRecordSelected()){
		color = '#ffffff';
		event.getRenderable().bgcolor ='#777777';
		event.getRenderable().font = 'Microsoft Sans Serif,0,14';
	}
	
	event.getRenderable().fgcolor = color;
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"2E753030-F161-4CEA-8DF7-59A78756ABD9"}
 */
function onAction_verDetalle(event) {
	//elements.nombre.fgcolor = '#ff0000';
}

/**
 * Perform the element double-click action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"98162B94-185C-42C7-8A62-634D15C359BC"}
 */
function onDoubleClick_selecciona(event) {
	onAction_seleccionar(event)
}
