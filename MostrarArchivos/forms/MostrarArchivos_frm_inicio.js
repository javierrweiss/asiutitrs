
/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"4C3A1111-42BD-41A1-B344-D6CC4A5E3A0D"}
 */
function onShow_frm_inicio(firstShow, event) {
	var win = application.createWindow("Psw",JSWindow.MODAL_DIALOG)	
    win.resizable = false
    win.show(forms.MostrarArchivos_psw_login_adm)
}
