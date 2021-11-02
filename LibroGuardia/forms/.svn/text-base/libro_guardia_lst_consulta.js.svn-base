/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"D39318FC-0D5B-4805-AE16-E208430A1680"}
 */
var guar_medico = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"E33A938F-56E4-4A93-A671-5D03AD16E5C3"}
 */
var guar_diagnostico = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"705FC94E-3F98-4BE7-9C30-E25564F73F68"}
 */
var guar_apenom = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"D8897B7C-25A4-489C-A55D-ADC25264C762"}
 */
var guar_histclinica = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"0CA613DA-8475-4C30-BD3D-2F25943D2235"}
 */
var guar_horaingreso = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"E15CD64A-4205-4813-8426-229062CD4A26"}
 */
var guar_fechaingreso = null;

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"55B8E1D6-C975-4E34-BC21-B82CDEDB720D"}
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
 * @properties={typeid:24,uuid:"D0B66BF9-64EB-4C53-9E24-2A96DD5E94E8"}
 */
function onRender_estado(event) {
	//Estado: 9-anulado 
	//Estado: 5-alta administrativa 
	
	var $rcd = event.getRecord();
	
	if($rcd != null){
		var color = '#000000';
		
		if($rcd['guar_estado'] < 4 && $rcd['guar_especialidad'] < 5) {
			color = '#ff0000';
		}
	}
	
	event.getRenderable().fgcolor = color;
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"07F3D3ED-78EF-434D-B328-4647E0F376AD"}
 */
function onAction_verDetalle(event) {
	//elements.btn_detalle.requestFocus();
}

/**
 * Perform the element double-click action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"0870D2AA-B953-496E-A466-BD58CA484338"}
 */
function onDoubleClick_selecciona(event) {
	onAction_seleccionar(event)
}
