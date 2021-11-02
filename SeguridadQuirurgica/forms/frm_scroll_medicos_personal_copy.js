/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"CDBD1389-A211-47A4-82E5-CE0D1A545D0F"}
 */
function onAction_Scroll_Interven(event) {
	if(globals.vopcionfrm==3){
		if(forms.frm_scroll_medicos_personal_copy.foundset.medperesp==24){
			globals.vCodigoMedicoSegu=forms.frm_scroll_medicos_personal_copy.foundset.medpercod
			globals.vApeynomMedicoSegu=forms.frm_scroll_medicos_personal_copy.foundset.medperapeynom
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
		globals.vCodigoMedicoSegu=forms.frm_scroll_medicos_personal_copy.foundset.medpercod
		globals.vApeynomMedicoSegu=forms.frm_scroll_medicos_personal_copy.foundset.medperapeynom
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
