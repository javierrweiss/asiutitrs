/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"25CEA02D-868F-4CFC-94C7-803DC5791557"}
 */
function onAction_registro(event){
	
		forms.Anatpa_frm_anatpaca.f_nroPedido = foundset['ipedpedido'];
		forms.Anatpa_frm_anatpaca.$fechaPedido = foundset['ipedfechapedido'];
		
		forms.Anatpa_frm_anatpaca.f_ciriInterven = 0;
		forms.Anatpa_frm_anatpaca.f_ciriLegCiru = foundset['ipedmedsolic'];
		forms.Anatpa_frm_anatpaca.f_ciriIeCiru = foundset['ipediesolic'];
		
		//forms.Anatpa_frm_anatpaca.cargarFechaPrestacion();
		
		forms.Anatpa_frm_anatpaca.elements.txt_nroPedido.enabled = false;
		forms.Anatpa_frm_anatpaca.elements.txt_obserGeneral.requestFocus();
		//forms.Anatpa_frm_anatpaca.$isDirty = true;
		cerrarForm();
}

/**
 * @properties={typeid:24,uuid:"10E118A8-286D-41E2-A739-1F0CF774A2AE"}
 */
function cerrarForm () {
	
	//var $name = application.getActiveWindow().getName();
	var $name = 'buscar_imapedi';
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
 * @properties={typeid:24,uuid:"80FAF3D9-B96A-4A24-AB39-A93589DA8FD6"}
 */
function onShow_inicializar(firstShow, event) {
	
	if(forms.Anatpa_tbl_imapedi.foundset.getSize() == 0){
		
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
 * @properties={typeid:24,uuid:"4CED76AA-EE3B-419F-84EF-29AD5E68E9AF"}
 */
function onAction_elementField(event) {
	// TODO Auto-generated method stub
	elements.btn_seleccionar.requestFocus();
}
