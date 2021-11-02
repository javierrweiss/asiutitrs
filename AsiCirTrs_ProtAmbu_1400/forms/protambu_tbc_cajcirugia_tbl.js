/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"10691714-4B90-4319-B965-CF66FE63E0E4"}
 */
function onShow_tbc_cajcirugia_tbl(firstShow, event) {
	forms.protambu_Cajas_quirurgicas.controller.focusFirstField()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"A149DAB5-FD1E-494F-8A55-BA1EB975FE4B"}
 */
function onAction_delete(event) {
	try{
		foundset.deleteRecord()
	}catch (msg){
		(plugins.dialogs.showInfoDialog("No borra Caja de Cirugía",msg.toString(),"ok"))
	}	
}
