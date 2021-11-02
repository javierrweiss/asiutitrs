/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"69BA8AA6-8442-4A9C-9772-F3EE86E3B5DA"}
 */
function onAction_Scroll_Interven(event) {
	if(globals.segambu_vopcionfrm==3){
		if(forms.seguquiambu_frm_scroll_medicos_personal.foundset.medperesp==24){
			globals.segambu_vCodigoMedicoSegu=forms.seguquiambu_frm_scroll_medicos_personal.foundset.medpercod
			globals.segambu_vApeynomMedicoSegu=forms.seguquiambu_frm_scroll_medicos_personal.foundset.medperapeynom
	//var win = application.getWindow()
	//win.hide()
	//application.closeAllWindows();
			var name=application.getActiveWindow()
			name.getName()
			var $win=application.getWindow(name.getName())
			if($win!=null){
				$win.hide()
				$win.destroy()
			}
		}
	}else{
		globals.segambu_vCodigoMedicoSegu=forms.seguquiambu_frm_scroll_medicos_personal.foundset.medpercod
		globals.segambu_vApeynomMedicoSegu=forms.seguquiambu_frm_scroll_medicos_personal.foundset.medperapeynom
//var win = application.getWindow()
//win.hide()
//application.closeAllWindows();
		var name1=application.getActiveWindow()
		name1.getName()
		var $win1=application.getWindow(name1.getName())
		if($win1!=null){
			$win1.hide()
			$win1.destroy()
		}
	}
    //controller.show(null);
}
