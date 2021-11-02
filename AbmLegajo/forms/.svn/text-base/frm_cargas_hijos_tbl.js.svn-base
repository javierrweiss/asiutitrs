/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"B740FA8C-92CB-479C-ABCA-CB413FB6C6EF"}
 */
function onShow_cargas_hijo(firstShow, event) {
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"55FD9D16-3CFE-4A14-98E3-A37FBAD656AF"}
 */
function onAction_agrega_hijos_cargas(event) {
	if(globals.tit_estado_tratamiento=="Alta"&&globals.per_1!=0&&globals.per_1!=null){
		globals.car2=vs_to_tbc_cargas.getSize()+1
		globals.gAlta=true
		globals.car9=0
		globals.cargas_tipo='hijos'
		forms.frm_tab_cargas.elements.tabless.tabIndex=2
	}else{
		if(globals.tit_estado_tratamiento=="Modifica"&&globals.per_1!=0&&globals.per_1!=null){
			var ultimo = vs_to_tbc_cargas.getSize()
			if (ultimo<1){
				globals.car2=1
			}else{
				vs_to_tbc_cargas.setSelectedIndex(ultimo)
				globals.car2=vs_to_tbc_cargas.car2+1
			}
			globals.gAlta=true
			globals.car9=0
			globals.cargas_tipo='hijos'
			forms.frm_tab_cargas.elements.tabless.tabIndex=2
		}else{
			globals.callback=null
			globals.showWarningDialog('Debe grabar el Legajo antes de ingresar las Cargas Familiares', null, 'OK', null, null, null)
		}
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"FE375A0D-D47A-4E9E-813C-57A0F76F48BD"}
 */
function onAction_btn_edita(event) {
	globals.car2=foundset.car2
	globals.car3=foundset.car3
	globals.car4=foundset.car4
	globals.car5=foundset.car5
	globals.car6=foundset.car6
	globals.gAlta=false
	globals.cargas_tipo='hijos'
	forms.frm_tab_cargas.elements.tabless.tabIndex=2
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"6D12DE66-8806-40EC-B2DC-4613C440DBAF"}
 */
function onAction_btn_historico_hijos(event) {
	globals.dat_per_tipo='hijos'+foundset.car2.toString()
	var win = application.createWindow("c",JSWindow.MODAL_DIALOG);
	win.title = "Historial Hijos";
	win.show(forms.frm_tab_rrhh_hist_datos_pers);
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"2ABBD169-4B8E-4A35-B6EF-FC760CB81A76"}
 */
function onAction_btn_borra(event) {
	var thePressedButton = plugins.dialogs.showQuestionDialog('¡Atención!', '¿Está seguro de dar de BAJA este familiar?', 'Si', 'No');
	if(thePressedButton == 'Si'){
		var $borrado=foundset.deleteRecord()
		if ($borrado){
			plugins.dialogs.showInfoDialog("Operación exitosa","Se ha borrado con exito el familiar seleccionado")
			forms.frm_tab_cargas.elements.tabless.tabIndex=1
		}else{
			plugins.dialogs.showErrorDialog("Error en operación","No se ha podido efectuar la acción de borrado. Avise a Sistemas, por favor!")
		}
	}
}
