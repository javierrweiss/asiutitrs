

/**
 * Perform the element right-click action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"6DA767B7-8EC4-4435-954C-C6019A66EFA9"}
 */
function onActionNewRegister(event) {
	// TODO Auto-generated method stub
	// foreign key data is only filled in for equals (=) relation items
	var win = application.createWindow("x",JSWindow.MODAL_DIALOG);
	win.title = "Nueva admisión";
	win.setSize(850,600)
	win.show(forms.frm_admision_dtl_newrecord)	
}
