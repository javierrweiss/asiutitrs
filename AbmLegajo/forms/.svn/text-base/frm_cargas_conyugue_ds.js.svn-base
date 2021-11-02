/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"BC611F8F-A1EF-4E7F-A2A3-35710F24E826"}
 */
function onAction_agrega_conyugue(event) {
	forms.frm_cargas_dtl_ds.f_titulo="Cónyuge"
	if(globals.tit_estado_tratamiento=="Alta"&&globals.per_1!=0&&globals.per_1!=null){
		
			
		
	}else{
		if(globals.tit_estado_tratamiento=="Modifica"&&globals.per_1!=0&&globals.per_1!=null){
			globals.car2=0
			if(per_1_to_tbc_cargas.getSize()>0){
				globals.callback=null
				globals.showWarningDialog('Cónyuge ya ingresado.', null, 'OK', null, null, null)
			}else{
				globals.gAlta=true
				globals.car9=0
				globals.cargas_tipo='conyugue'
				forms.frm_tab_cargas.elements.tabless.tabIndex=4
			}
		}else{
			globals.car2=0
			globals.gAlta=true
			globals.car9=0
			globals.cargas_tipo='conyugue'
			forms.frm_tab_cargas.elements.tabless.tabIndex=4
		}
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"7E74722D-599A-4636-B038-614C34286B0A"}
 */
function onAction_btn_edita(event) {
	globals.car2=0
	globals.gAlta=false
	forms.frm_cargas_dtl.fecha= "Fecha Casam."
	globals.car2=foundset.car2
	globals.car3=foundset.car3
	globals.car4=foundset.car4
	//var fecha_n=foundset.car4.toString()
	//globals.car4=globals.car4.setFullYear(utils.stringToNumber(fecha_n.substr(0,4)))
	//globals.car4=globals.car4.setMonth(utils.stringToNumber(foundset.car4.toString().substr(4,2)-1))
	//globals.car4=globals.car4.setDate(utils.stringToNumber(foundset.car4.toString().substr(6,2)))
	globals.car5=foundset.vl_car5
	globals.car6=foundset.car6
	globals.car7=foundset.car7
	//var fecha_c=foundset.car7.toString()
	//globals.car7=globals.car7.setFullYear(utils.stringToNumber(fecha_c.substr(0,4)))
	//globals.car7=globals.car7.setMonth(utils.stringToNumber(foundset.car7.toString().substr(4,2)-1))
	//globals.car7=globals.car7.setDate(utils.stringToNumber(foundset.car7.toString().substr(6,2)))
	globals.cargas_tipo='conyugue'
	forms.frm_tab_cargas.elements.tabless.tabIndex=4
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"E5E3C09C-29F9-426B-9BD7-E0C5D93D8F99"}
 */
function onShow_conyugue(firstShow, event) {
	if(foundset.getSize()>0){
		elements.btn_agrega.visible=false
		elements.lbl_agrega.visible=false
		elements.lbl_titulo.visible=true
	}else{
		elements.btn_agrega.visible=true
		elements.lbl_agrega.visible=true
		elements.lbl_titulo.visible=true
	}
	/*
	if(globals.tit_estado_tratamiento=='Alta'){
		globals.valida_Campos_Obligatorios_Completos('frm_abm_legajo')
	}
	*/
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"5331DB7F-28FC-4C96-A330-017F0AFEECF0"}
 */
function onAction_btn_historico_conyugue(event) {
	globals.dat_per_tipo='conyugue'
	var win = application.createWindow("c",JSWindow.MODAL_DIALOG);
	win.title = "Historial Conyugue";
	win.show(forms.frm_tab_rrhh_hist_datos_pers);
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"BB8FE1B5-E049-48C3-9D7D-FE47BFC1A8B7"}
 */
function onAction_btn_borra(event) {
	var thePressedButton = plugins.dialogs.showQuestionDialog('¡Atención!', '¿Está seguro de dar de BAJA este familiar?', 'Si', 'No');
	if(thePressedButton == 'Si'){
		var $borrado=foundset.deleteRecord()
		if ($borrado){
			plugins.dialogs.showInfoDialog("Operación exitosa","Se ha borrado con exito el familiar seleccionado")
			forms.frm_tab_cargas.elements.tabless.tabIndex=3
		}else{
			plugins.dialogs.showErrorDialog("Error en operación","No se ha podido efectuar la acción de borrado. Avise a Sistemas, por favor!")
		}
	}
}
