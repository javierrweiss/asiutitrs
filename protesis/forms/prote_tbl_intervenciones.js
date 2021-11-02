/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"CB9B7AB7-596A-43A0-AE24-C636F5440510"}
 */
function onAction_Scroll_Interven(event) {
	
	var interven = forms.prote_tbl_intervenciones.foundset.itv_codi;
	interven += " - " + forms.prote_tbl_intervenciones.foundset.itv_descripcion.toString().trim();
	forms.prote_frmRecepcionProtesis.f_intervencion = interven;
	forms.prote_frmRecepcionProtesis.$intervencion = forms.prote_tbl_intervenciones.foundset.itv_descripcion.toString().trim();
	forms.prote_frmRecepcionProtesis.$cod_intervencion = forms.prote_tbl_intervenciones.foundset.itv_codi;
	forms.prote_frmRecepcionProtesis.elements.btn_agregarItem.requestFocus();
	forms.prote_frmRecepcionProtesis.$isDirty = true;
	
	var name=application.getActiveWindow()
	name.getName()
	var $win=application.getWindow(name.getName())
	if($win!=null){
		$win.hide()
		$win.destroy()
	}
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"2872C346-8D9F-4723-88E7-FD2B0B67BCF5"}
 */
function onShow_scroll_interven(firstShow, event) {
//	if(globals.vAplicaFiltro){
		if (globals.vEsHemodinamia=="Si"){
			//application.output("paso 3")
			databaseManager.addTableFilterParam("maestros","tbc_interven","itv_tipestudio","=",2)
		}else{
			databaseManager.addTableFilterParam("maestros","tbc_interven","itv_tipestudio","in",[0,1])
		}
		
	//}
}

/**
 * Handle focus gained event of the element.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"4F1837C7-ADC1-4470-91E9-50F6DC365FB7"}
 */
function onFocusGained_registro(event) {
	
	if(globals.prote_activoFormBuscarInterven == 1){
		onAction_Scroll_Interven(event)
	}
	else{
		globals.prote_activoFormBuscarInterven = 1
	}
}
