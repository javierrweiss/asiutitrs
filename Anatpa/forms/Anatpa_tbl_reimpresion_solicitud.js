/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"F7555623-E371-4EF4-B116-C390238E0E13"}
 */
function onAction_seleccionar(event) {
	
	var obj = new Object();
	obj['nro_solicitud'] = foundset['nro_solicitud'];
	obj['fecha_solicitud'] = foundset['fecha_solicitud'];
	obj['hist_clinica'] = foundset['hist_clinica'];
	obj['paciente'] = foundset['paciente'];
	obj['cobertura'] = foundset['cobertura'];
	obj['servicio'] = foundset['servicio'];
	obj['pedido'] = foundset['pedido'];
	obj['tipo_admi'] = foundset['tipo_admi'];
	obj['fecha_ingreso'] = foundset['fecha_ingreso'];
	obj['hora_ingreso'] = foundset['hora_ingreso'];
	obj['tipo_med'] = foundset['tipo_med'];
	obj['cod_med'] = foundset['cod_med'];
	obj['fecha_recibido'] = foundset['fecha_recibido'];
	obj['prof_infor'] = foundset['prof_infor'];
	obj['mat_prof_infor'] = foundset['mat_prof_infor'];

	forms.Anatpa_frm_reimpresion_solicitud.loadDataForm(obj);
	forms.Anatpa_frm_reimpresion_solicitud.elements.txt_nroSolicitud.enabled = false;
	forms.Anatpa_frm_reimpresion_solicitud.elements.btn_imprimir.requestFocus();
	
	var $name = application.getActiveWindow().getName();
	var $win = application.getWindow($name);
	if($win!=null){
		$win.hide();
		$win.destroy();
	}
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"9A406F98-FC82-4BD7-AD89-E4AB1D45E580"}
 */
function onAction_verDetalle(event) {
	elements.btn_seleccionar.requestFocus();
}

/**
 * Perform the element double-click action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"61E3447D-9B05-4666-9759-CDBDB16CDEA8"}
 */
function onDoubleClick_selecciona(event) {
	onAction_seleccionar(event)
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"265F8B2D-1E66-455B-9A95-F0C29AD0003F"}
 */
function onAction_element(event) {
	elements.btn_seleccionar.requestFocus();
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"8E7C3776-0774-4C7D-9841-E40F195F9D88"}
 */
function onShow_inicializarForm(firstShow, event) {
	
	if(foundset.getSize() > 0)
		forms.Anatpa_tbl_reimpresion_solicitud.elements.btn_seleccionar.requestFocus();
}
