/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"A09EA69A-B898-467B-A427-145F523D418B"}
 */
function onAction_registro(event){
	
	if(foundset['cirgprotocolo'] == 0 || foundset['cirgprotocolo'] == "0"){
		forms.Anatpa_frm_anatpaca.f_nroPedido = null;
		forms.Anatpa_frm_anatpaca.$fechaPedido = 0;
		forms.Anatpa_frm_anatpaca.elements.txt_nroPedido.requestFocus();
	}
	else{
		forms.Anatpa_frm_anatpaca.f_nroPedido = foundset['cirgprotocolo'];
		
		forms.Anatpa_frm_anatpaca.f_ciriInterven = foundset['cirginterven'];
		forms.Anatpa_frm_anatpaca.f_ciriLegCiru = foundset['guar_medico'];
		forms.Anatpa_frm_anatpaca.f_ciriIeCiru = foundset['guar_tipomed'];
		forms.Anatpa_frm_anatpaca.$fechaIngreso = foundset['cirgfechaingreso'];
		forms.Anatpa_frm_anatpaca.$horaIngreso = foundset['cirghoraingreso'];
		forms.Anatpa_frm_anatpaca.$fechaPedido = foundset['cirgfechaingreso'];
		
		forms.Anatpa_frm_anatpaca.elements.txt_nroPedido.enabled = false;
		forms.Anatpa_frm_anatpaca.elements.txt_obserGeneral.requestFocus();
		//forms.Anatpa_frm_anatpaca.$isDirty = true;
	}
		
	cerrarForm();
}

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"3D971F95-F2FF-432F-96B1-E28B89FEFB6D"}
 */
function onRender_ciruAmbu(event) {
	
	var $rcd = event.getRecord();

	if($rcd != null){
		
		var color = '#000000';
		
		if($rcd['cirgprotocolo'] == 0){
			color = '#ff0000';
		}
	}
	
	event.getRenderable().fgcolor = color;
}

/**
 * @properties={typeid:24,uuid:"BC8A4B59-CD43-4959-BC65-DC465A432E43"}
 */
function cerrarForm () {
	
	//var $name = application.getActiveWindow().getName();
	var $name = 'buscar_ciru_ambu';
	var $win = application.getWindow($name);
	if($win!=null){
		$win.hide();
		$win.destroy();
	}
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"63136B70-2C30-4E54-8740-D115588D36F7"}
 */
function onShow_inicializar(firstShow, event) {
	
	if(forms.Anatpa_tbl_ciruAmbu.foundset.getSize() == 0){
		
		foundset.clear();
		globals.DIALOGS.showWarningDialog("¡Atención!",'No hay pedidos para esta H.Clinica.',"Aceptar");
		forms.Anatpa_frm_anatpaca.f_nroPedido = null;
		forms.Anatpa_frm_anatpaca.$fechaPedido = 0;
		forms.Anatpa_frm_anatpaca.elements.txt_nroPedido.requestFocus();
		cerrarForm();
		
	}
	else{
		if(globals.Anatpa_eventSourceButton == 0){
			onAction_registro(event);
		}
		
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"EDE1CEE3-82FE-4A75-81BB-0F9E757676E3"}
 */
function onAction_elementField(event) {
	// TODO Auto-generated method stub
	elements.btn_seleccionar.requestFocus();
}
