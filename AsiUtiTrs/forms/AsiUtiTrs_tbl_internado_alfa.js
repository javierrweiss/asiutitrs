/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"1D537973-0D9A-4E74-AE51-ECCAAEAE73C9"}
 */
function onAction_registro(event){

	cerrarForm();
		globals.AsiUtiTrs_hisclin = foundset.adm_histclin;
		globals.AsiUtiTrs_fechaHciint = foundset.adm_fecing;
		globals.AsiUtiTrs_horaHciint = foundset.adm_horing;
		globals.AsiUtiTrs_hiiHisCli = foundset.adm_histclin;
		if (globals.isLocked(globals.AsiUtiTrs_hisclin)== true){
			globals.DIALOGS.showWarningDialog("Recurso en uso","La historia clínica que quiere acceder está siendo usada actualmente por otro profesional desde la dirección IP: "+globals.AsiUtiTrs_IpUsuario)
			globals.AsiUtiTrs_recursoObtenido= false;
		} else if (asiutitrs_rel_tbc_hciti_to_tbc_hciti.getSize()==0){
			globals.bloquearHistClin(globals.AsiUtiTrs_hisclin.toString(),true)
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
 * @properties={typeid:24,uuid:"995B5128-263D-4468-AB7E-66CB3451B64A"}
 */
function onAction_elementField(event) {
	
	elements.btn_seleccionar.requestFocus();
}

/**
 * @properties={typeid:24,uuid:"881CE621-39E1-4067-AF6E-25D6EA044C69"}
 */
function cerrarForm () {
	

		var $name = application.getActiveWindow().getName();
		var $win = application.getWindow($name);
		if($win!=null){
			$win.hide();
			$win.destroy();
		}
	

}
