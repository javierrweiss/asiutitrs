/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"B9D1B4BD-0312-4D0E-B428-A00BD62D3919"}
 * @AllowToRunInFind
 */
function onAction_delete_tbc_cirugint_tbl(event) {
	var fs = databaseManager.getFoundSet("asistencial","tbc_cirugint_dtl")
	fs.find()
	fs['cirihistcl']=foundset.cirihistcl
	fs['ciricodnome']=foundset.ciricodnome
	fs['cirifechacarga']=foundset.cirifechacarga
	fs['cirihoracarga']=foundset.cirihoracarga
	fs['ciritiponome']=foundset.ciritiponome
	fs.search(true)
	
	if(fs.getSize()>0){
		try{
			fs.deleteRecord(1)
		}catch (msg){
			(plugins.dialogs.showInfoDialog("No borra Detalle de Cirugía",msg.toString(),"ok"))
		}
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"98E09F4A-5AB8-44AD-9E0A-26DA821CBA20"}
 */
function onAction_edit_tbc_cirugint_tbl(event) {
	forms.IngresoCirugia_tab.elements.btn_new.visible=false
	forms.IngresoCirugia_tab.elements.btn_edit.visible=false
	forms.IngresoCirugia_tab.elements.btn_delete.visible=false
	forms.IngresoCirugia_tab.elements.btn_ayuda.visible=false
	forms.form116_dtl.elements.volver_form116.enabled=false
	globals.vciri_fechacarga=foundset.cirifechacarga
	globals.vciri_horacarga=foundset.cirihoracarga
	globals.vciri_codnome=foundset.ciricodnome
	globals.vciri_tiponome=foundset.ciritiponome
	forms.IngresoCirugia_tab.elements.tabless_ingreso_cirugia.tabIndex=3
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"8653A750-FAE8-4C6E-81F0-189C632D81C4"}
 */
function onShow_tbc_cirugint_tbl(firstShow, event) {
	forms.IngresoCirugia_tab.controller.focusFirstField()
}
