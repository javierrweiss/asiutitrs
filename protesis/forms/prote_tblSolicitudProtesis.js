/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"6BAFAE23-B655-451A-912E-4E11C52295D9"}
 */
var medico = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"CF8AD11B-B0F9-4BD4-8229-5007CC0825B3"}
 */
var prioridad = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"A65CA8FF-78A5-4395-BB24-7D6925DDEF67"}
 */
var hist_clin_unica = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"BD39F9DD-2ACE-490D-967A-BEBFAD81A023"}
 */
var paciente = '';

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"5858DB3E-D789-4CC2-B65B-38543222C404",variableType:93}
 */
var fecha_solicitud = null;

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"EA17F1A2-EAAC-4CCA-B715-7F3B53C1C9F4"}
 */
function onAction_seleccionar(event) {
	
	forms.prote_frmRecepcionProtesis.$id = foundset['id'];
	forms.prote_frmRecepcionProtesis.onShow_inicializarForm(false,event);
	
	forms.prote_frmSolicitudProtesisSearch.onAction_cerrar(event);
}

/**
 * Called before the form component is rendered.
 *
 * @param {JSRenderEvent} event the render event
 *
 * @properties={typeid:24,uuid:"E0F05CBA-62DD-444C-8318-4ACD6162FF71"}
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
 * @properties={typeid:24,uuid:"25755D35-BBB0-4936-8B0D-1E8B7046F061"}
 */
function onAction_verDetalle(event) {
	elements.btn_detalle.requestFocus();
}

/**
 * Perform the element double-click action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"CB3482DF-68B9-4385-8FC0-053DD4120DE6"}
 */
function onDoubleClick_selecciona(event) {
	//onAction_seleccionar(event)
}
