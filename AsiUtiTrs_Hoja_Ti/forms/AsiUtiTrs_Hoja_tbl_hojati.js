/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"3266CCFE-43FF-4F8D-9C9C-B4B5B5DE4365"}
 */
var texto = null;


/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"A909EC8C-EE71-405F-A2D6-90C9891DA826"}
 */
function onAction_registro(event){
	
	//cerrarForm();
	globals.cerrarBloqueo="NO";
	cerrarForm();
	globals.AsiUtiTrs_Hoja_fechaHciint = foundset['fecha'];
	globals.AsiUtiTrs_Hoja_horaHciint = foundset['hora'];
	globals.AsiUtiTrs_Hoja_hiiHisCli = foundset['id'];
	globals.AsiUtiTrs_Hoja_ultimaHisCli = foundset['ult_clin_flag'];
	if(globals.AsiUtiTrs_Hoja_fechaHciint==0){
		if(asiutitrs_hoja_rel_buscar_hojati.getSize()==0){
			globals.AsiUtiTrs_Primera_Evol_Medica_Dia = true;
		}else{
			globals.AsiUtiTrs_Primera_Evol_Medica_Dia = false;
		}
		forms.HciutiTrs_frm_evo_medica_utiTrs_hoja_TI.loadHciint();
		//forms.HciutiTrs_frm_evo_medica_utiTrs_hoja_TI.ingresoFechaTerapia();
	}else{
		forms.HciutiTrs_frm_evo_medica_utiTrs_hoja_TI.loadHciint();
	}

	
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"EA23A9A4-F061-4BE2-A9A7-4B9FC73575DC"}
 */
function onAction_elementField(event) {
	
	elements.btn_seleccionar.requestFocus();
}

/**
 * @properties={typeid:24,uuid:"034DC537-8A0A-4FB0-AB69-E21712E35F5F"}
 */
function cerrarForm () {
	
	if(globals.cerrarBloqueo=="SI"){
	//globals.AsistFunciones_unLockRegisterTable(application.getSolutionName(),controller.getName(),AsiUtiTrs_Hoja_numero_to_tbc_admision.adm_histclin.toString(),globals.Srv_Login_Sanatorio_vLega.toString(),"Historia Clinica");
	forms.HciutiTrs_frm_evo_medica_utiTrs_hoja_TI.onAction_btnNuevo()
	}
	
	
		var $name = application.getActiveWindow().getName();
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
 * @properties={typeid:24,uuid:"75F6B9CE-9D78-419B-B507-23CEF7B8BD9A"}
 */
function onShow_inicializarform(firstShow, event) {
	globals.cerrarBloqueo="SI";
	elements.btn_seleccionar.requestFocus();
}
