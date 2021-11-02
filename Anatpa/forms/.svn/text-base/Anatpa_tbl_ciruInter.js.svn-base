/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"D0D83D9B-7CF5-4B7B-A4EA-48A54B4E1716",variableType:4}
 */
var $ciriLegCiru = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"B3097CA5-7583-4F0A-8628-AC4016A4672F",variableType:4}
 */
var $ciriIeCiru = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"B45D74E0-34ED-43DC-9E50-2D047C279A1A",variableType:4}
 */
var $ciriInterven = null;

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"7CF50537-BC62-4C42-A78D-27B360DB7435"}
 */
function onAction_registro(event){
	
		forms.Anatpa_frm_anatpaca.f_nroPedido = foundset['ciriprotocolo'];
		forms.Anatpa_frm_anatpaca.$fechaPedido = foundset['cirifechacarga'];
		
		forms.Anatpa_frm_anatpaca.elements.txt_nroPedido.enabled = false;
		forms.Anatpa_frm_anatpaca.elements.txt_obserGeneral.requestFocus();
		
		forms.Anatpa_frm_anatpaca.f_ciriInterven = $ciriInterven;
		forms.Anatpa_frm_anatpaca.f_ciriLegCiru = $ciriLegCiru;
		forms.Anatpa_frm_anatpaca.f_ciriIeCiru = $ciriIeCiru;
		//forms.Anatpa_frm_anatpaca.$isDirty = true;
		
		cerrarForm();
}

/**
 * @properties={typeid:24,uuid:"3189841F-5D4F-4670-A957-5DBE407C80B5"}
 */
function cerrarForm () {
	
	//var $name = application.getActiveWindow().getName();
	var $name = 'buscar_ciru_inter';
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
 * @properties={typeid:24,uuid:"321E4914-6B69-4258-A89B-25C847FD945F"}
 */
function onShow_inicializar(firstShow, event) {
	
	if(forms.Anatpa_tbl_ciruInter.foundset.getSize() == 0){
		
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
 * @properties={typeid:24,uuid:"C15D0566-0339-411A-8DB7-4906CACC4CCD"}
 */
function onAction_elementField(event) {
	// TODO Auto-generated method stub
	elements.btn_seleccionar.requestFocus();
}
