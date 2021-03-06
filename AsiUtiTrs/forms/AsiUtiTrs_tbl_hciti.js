/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"D9ECA968-41FB-4480-B303-85549B8CC4DA"}
 */
var texto = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"96E03A59-E5C0-4210-95ED-6349C1AD070C",variableType:4}
 */
var ult_clin_flag = 0;
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"2D25CB81-8355-44AD-89B5-69229CE5DAE4"}
 */
function onAction_registro(event){
	cerrarForm();
	globals.AsiUtiTrs_fechaHciint = foundset.hitfecha;
	globals.AsiUtiTrs_horaHciint = foundset.hithora;
	globals.AsiUtiTrs_hiiHisCli = foundset.hithiscli;
	if(globals.isLocked(globals.AsiUtiTrs_hisclin)== true){
		globals.DIALOGS.showWarningDialog("Recurso en uso","La historia clínica que quiere acceder está siendo usada actualmente por otro profesional en la dirección IP: "+globals.AsiUtiTrs_IpUsuario)
		globals.AsiUtiTrs_recursoObtenido= false;
	} else if(asiutitrs_rel_tbc_hciti_to_tbc_hciti.getSize()==0){
				globals.bloquearHistClin(globals.AsiUtiTrs_hisclin.toString(),true);
				forms.HciutiTrs_frm_hist_clin_ingreso_utiTrs.pacienteSeleccionadoInter();
	}else{
		globals.DIALOGS.showInfoDialog('Acceso a Historia Clínica','Usted está accediendo a una historia clínica ya confeccionada.\n No podrá editar dato alguno.')
		forms.HciutiTrs_frm_hist_clin_ingreso_utiTrs.controller.readOnly=true;
		forms.HciutiTrs_frm_hist_clin_ingreso_utiTrs.elements.grp_diagnostico.readOnly=true;
		forms.HciutiTrs_frm_hist_clin_ingreso_utiTrs.elements.grp_diagnostico.enabled=false;
		forms.HciutiTrs_frm_hist_clin_ingreso_utiTrs.loadHciint();
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"1474ECB5-A440-4DF9-AC5D-43A4B2135C51"}
 */
function onAction_elementField(event) {
	
	elements.btn_seleccionar.requestFocus();
}

/**
 * @properties={typeid:24,uuid:"EA0E4B3A-9AD6-44B8-AC5B-1E108AD45F6D"}
 */
function cerrarForm () {
	
	if(globals.cerrarBloqueo=="SI"){
	//globals.AsistFunciones_unLockRegisterTable(application.getSolutionName(),controller.getName(),asiutitrs_numero_to_tbc_admision.adm_histclin.toString(),globals.AsiUtiTrs_vLega.toString(),"Historia Clinica");
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
 * @properties={typeid:24,uuid:"D520C90D-45D2-4692-B443-A82CD170226F"}
 */
function onShow_inicializarform(firstShow, event) {
	globals.cerrarBloqueo="SI";
	elements.btn_seleccionar.requestFocus();
}
