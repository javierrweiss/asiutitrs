/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"E5976D03-D01B-4A20-BFB1-ACEF5B88A023"}
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
 * @properties={typeid:24,uuid:"D3B4CBB2-58D2-4F3A-87D6-A9A3BCF59942"}
 */
function onRender_estado(event) {
	//Estado: 3-item anulado 6-suspendido 7-anulado 
	//resultado: fecha de resultado
	//resultadovalido 0-NO 1-SI
	
	var $rcd = event.getRecord();
	
	if($rcd != null){
		
		var color = '#000000';
		
		if($rcd.estado == 7 || $rcd.propio == 0){
			
		}
		else{
			// protocolos sin validar
			if ($rcd.resultadovalido == 0 && ($rcd.estado != 3 && $rcd.estado != 6 && $rcd.estado != 7))
				color = '#0000FF';
			
			// Protocolos incompletos
			if ($rcd.resultado == '0')
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
 * @properties={typeid:24,uuid:"9A5D5131-BED8-4348-ABFB-9CC96A0EFCC7"}
 */
function onAction_verDetalle(event) {
	//elements.btn_detalle.requestFocus();
}

/**
 * Perform the element double-click action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"B6B7C199-018B-438E-B8FA-7DA5884A5821"}
 */
function onDoubleClick_selecciona(event) {
	onAction_seleccionar(event)
}
