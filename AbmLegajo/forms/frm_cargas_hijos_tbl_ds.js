/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"2D1102B5-37FB-4D26-B19F-AE4E4029D498"}
 */
function onShow_cargas_hijo(firstShow, event) {
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"E06DE75C-B38F-4C59-B6F4-B6445FD2779A"}
 */
function onAction_agrega_hijos_cargas(event) {
	forms.frm_cargas_dtl_ds.f_titulo="Hijos"
	if(globals.tit_estado_tratamiento=="Alta"){
		globals.car2=foundset.getSize()+1
		globals.gAlta=true
		globals.car9=0
		globals.cargas_tipo='hijos'
		forms.frm_tab_cargas.elements.tabless.tabIndex=4
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
			forms.frm_tab_cargas.elements.tabless.tabIndex=4
		}
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"33E9D203-B067-4701-839A-BFE0D4840318"}
 */
function onAction_btn_edita(event) {
	globals.car2=foundset.car2
	globals.car3=foundset.car3
	globals.car4=foundset.car4
	globals.car5=foundset.vl_car5
	globals.car6=foundset.car6
	globals.gAlta=false
	globals.cargas_tipo='hijos'
	forms.frm_tab_cargas.elements.tabless.tabIndex=4
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"5D687D7D-86F5-48CF-8292-E8B875B7AA1B"}
 */
function onAction_btn_historico_hijos(event) {
	globals.dat_per_tipo='hijos'
	var win = application.createWindow("c",JSWindow.MODAL_DIALOG);
	win.title = "Historial Hijos";
	win.show(forms.frm_tab_rrhh_hist_datos_pers);
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"532BB4D9-D749-4573-AB93-CB419C4D6A40"}
 */
function onAction_btn_borra(event) {
	var thePressedButton = plugins.dialogs.showQuestionDialog('¡Atención!', '¿Está seguro de dar de BAJA este familiar?', 'Si', 'No');
	if(thePressedButton == 'Si'){
		var $borrado=foundset.deleteRecord()
		if ($borrado){
			renumeradoHijos()
			plugins.dialogs.showInfoDialog("Operación exitosa","Se ha borrado con exito el familiar seleccionado")
			forms.frm_tab_cargas.elements.tabless.tabIndex=3
		}else{
			plugins.dialogs.showErrorDialog("Error en operación","No se ha podido efectuar la acción de borrado. Avise a Sistemas, por favor!")
		}
	}
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"233307CF-BC4B-430F-84CB-6B9301074D21"}
 */
function onShow_frm_cargas_hijos_tbl_ds(firstShow, event) {
	foundset.sort('car1 asc, car2 asc')
	/*
	if(globals.tit_estado_tratamiento=='Alta'){
		globals.valida_Campos_Obligatorios_Completos('frm_abm_legajo')
	}
	*/
}

/**
 * @properties={typeid:24,uuid:"99E2CE84-B77A-4316-80A9-C4BA093B2230"}
 */
function renumeradoHijos() {
	var cantidad_hijos=foundset.getSize()
	foundset.sort('car1 asc, car2 asc')
	var vl_car5_aux=''
	if(cantidad_hijos > 0){
		for(var i=1;i<=cantidad_hijos;i++){
			foundset.setSelectedIndex(i)
			globals.car1=foundset.car1
			globals.car3=foundset.car3
			globals.car4=foundset.car4
			globals.car5=foundset.vl_car5
			globals.car6=foundset.car6
			globals.car7=foundset.car7
			globals.car9=foundset.car9
			vl_car5_aux=foundset.car5
			foundset.deleteRecord(i)
			foundset.newRecord()
			foundset.car1=globals.car1
			foundset.car2=i
			foundset.car3=globals.car3
			foundset.car4=globals.car4
			foundset.car5=vl_car5_aux
			foundset.car6=globals.car6
			foundset.car7=globals.car7
			foundset.car9=globals.car9
			foundset.vl_car5=globals.car5
			databaseManager.saveData(foundset)
		}
		foundset.sort('car1 asc, car2 asc')
		globals.car1=0
		globals.car3=''
		globals.car4=null
		globals.car5=0
		globals.car6=''
		globals.car7=null
		globals.car8_1=0
		globals.car8_2=0
		globals.car8_3=0
		globals.car8_4=0
		globals.car8_5=0
		globals.car8_6=0
		globals.car8_7=0
		globals.car8_8=0
		globals.car8_9=0
		globals.car8_10=0
		globals.car9=0
	}
}
