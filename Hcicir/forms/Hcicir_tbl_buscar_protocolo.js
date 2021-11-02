/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"1F875B41-CD22-4522-B5EF-05854AE85A39"}
 */
var interven = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"B155017D-1827-4C56-9BDF-5ECAC2646BA8"}
 */
var hora_carga = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"3A531BB4-5D8B-463F-8C65-42C00B025858"}
 */
var fecha_carga = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"54CF8642-6A98-4CD6-BADA-0CEB96C22CCC"}
 */
var protocolo = null;

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"0472E99D-EB52-448D-B6F8-1948E3954986"}
 */
function onAction_registro(event){
	
		forms.Hcicir_frm_hist_clin_ingreso_cirugia.f_protocolo = foundset['protocolo'];
		//forms.Hcicir_frm_hist_clin_ingreso_cirugia = foundset['fecha_inicio'];
		//forms.Hcicir_frm_hist_clin_ingreso_cirugia.f_protocolo = foundset['hora_inicio'];
		forms.Hcicir_frm_hist_clin_ingreso_cirugia.$tipo_medico = foundset['tipo_medico'];
		forms.Hcicir_frm_hist_clin_ingreso_cirugia.$legajo_medico = foundset['legajo_medico'];
		// TODO como se comporta para internados forms.Hcicir_frm_hist_clin_ingreso_cirugia.$fechaIngreso = foundset['fecha_carga'];
		//TODO como se comporta para internados forms.Hcicir_frm_hist_clin_ingreso_cirugia.$horaIngreso = foundset['fecha_carga'];
		forms.HistoriaClinica_dtl.hciritvcod1 = foundset['codigo_interven'];
		if(foundset['codigo_interven'] > 0)
			forms.Hcicir_frm_hist_clin_ingreso_cirugia.editableInterven(false);
		else
			forms.Hcicir_frm_hist_clin_ingreso_cirugia.editableInterven(true);
		
		forms.Hcicir_frm_hist_clin_ingreso_cirugia.elements.btn_buscarProtocolo.enabled = false;
		forms.Hcicir_dlg_buscar_protocolo.f_cerrarForm = true;
		
		/*
		forms.Anatpa_frm_anatpaca.f_ciriInterven = 0;
		forms.Anatpa_frm_anatpaca.f_ciriLegCiru = foundset['ipedmedsolic'];
		forms.Anatpa_frm_anatpaca.f_ciriIeCiru = foundset['ipediesolic'];
		
		forms.Anatpa_frm_anatpaca.cargarFechaPrestacion();
		
		forms.Anatpa_frm_anatpaca.elements.txt_nroPedido.enabled = false;
		forms.Anatpa_frm_anatpaca.elements.txt_obserGeneral.requestFocus();
		//forms.Anatpa_frm_anatpaca.$isDirty = true;
		 * 
		 */
		cerrarForm();
		//forms.Hcicir_frm_hist_clin_ingreso_cirugia.elements.tab_hcicir.visible = true;
		//forms.HistoriaClinica_dtl.elements.btn_graba_hcicir.visible = false;
		
		forms.Hcicir_frm_hist_clin_ingreso_cirugia.inicializarHcicir();
}

/**
 * @properties={typeid:24,uuid:"906A11EF-610B-405A-80A3-FD60CEE6A3EA"}
 */
function cerrarForm () {
	
	//var $name = application.getActiveWindow().getName();
	var $name = 'seleccion_protocolo';
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
 * @properties={typeid:24,uuid:"A4F2587C-747A-4E1A-9EFC-1AF517750820"}
 */
function onShow_inicializar(firstShow, event) {
	
	if(forms.Hcicir_tbl_buscar_protocolo.foundset.getSize() == 0){
		
		foundset.clear();
		//globals.DIALOGS.showWarningDialog("¡Atención!",'No hay protocolos para esta H.Clinica.',"Aceptar");
		forms.Hcicir_frm_hist_clin_ingreso_cirugia.f_protocolo = null;
		//forms.Hcicir_frm_hist_clin_ingreso_cirugia.elements.btn_buscarPaciente.requestFocus();
		forms.Hcicir_frm_hist_clin_ingreso_cirugia.elements.btn_buscarProtocolo.enabled = false;
		
		forms.Hcicir_frm_hist_clin_ingreso_cirugia.inicializarHcicir();
		forms.Hcicir_frm_hist_clin_ingreso_cirugia.elements.btn_buscarProtocolo.enabled = false;
		
		forms.Hcicir_frm_hist_clin_ingreso_cirugia.$legajo_medico = globals.Hcicir_vLega;
		forms.Hcicir_frm_hist_clin_ingreso_cirugia.$tipo_medico = globals.Hcicir_vTipoOperador;
		forms.Hcicir_frm_hist_clin_ingreso_cirugia.f_medico = globals.Hcicir_vOperador;
		
		forms.Hcicir_frm_hist_clin_ingreso_cirugia.elements.lbl_medico.visible = true;
		forms.Hcicir_frm_hist_clin_ingreso_cirugia.elements.txt_medico.visible = true;
		
		forms.Hcicir_dlg_buscar_protocolo.f_cerrarForm = true;
		cerrarForm();
		
	}
	else{
		
		forms.Hcicir_frm_hist_clin_ingreso_cirugia.elements.btn_buscarPaciente.enabled = false;
		forms.Hcicir_frm_hist_clin_ingreso_cirugia.elements.btn_buscarProtocolo.enabled = true;
		if(globals.Hcicir_eventSourceButton == 0){
			onAction_registro(event);
		}
		
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"7C5989A9-0569-4AC9-AAAB-181E2265E84B"}
 */
function onAction_elementField(event) {
	// TODO Auto-generated method stub
	elements.btn_seleccionar.requestFocus();
}
