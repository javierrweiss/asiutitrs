/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"20721918-11F4-4222-9070-C1D8F863E3E9"}
 */
function onAction_agrega_conyugue(event) {
	forms.frm_cargas_dtl_ds.f_titulo="Concubino"
	if(globals.tit_estado_tratamiento=="Alta"){
		if(forms.frm_cargas_conyugue_ds.foundset.getSize()>0){
			globals.callback=null
			globals.showPreguntaDialog('Cónyuge ya ingresado. ¿Desea reemplazarlo por el/la concubino/a?', null, 'NO', "SI", null, null)
			if(globals.core_dlg_buttonPressed=='SI'){
				forms.frm_cargas_conyugue_ds.foundset.deleteRecord(1)
				globals.car2=0
				globals.gAlta=false
				globals.car9=1
				globals.cargas_tipo='concubino'
				forms.frm_tab_cargas.elements.tabless.tabIndex=4
			}
		}else{
				globals.car2=0
				globals.gAlta=true
				globals.car9=1
				globals.cargas_tipo='concubino'
				forms.frm_tab_cargas.elements.tabless.tabIndex=4
		}
		
	}else{
		globals.car2=0
		if(per_1_to_tbc_cargas.getSize()>0){
			globals.callback=null
			globals.showPreguntaDialog('Cónyuge ya ingresado. ¿Desea reemplazarlo por el/la concubino/a?', null, 'NO', "SI", null, null)
			if(globals.core_dlg_buttonPressed=='SI'){
				grabaHistoricoCargas()
				globals.gAlta=false
				globals.car9=1
				globals.cargas_tipo='concubino'
				forms.frm_tab_cargas.elements.tabless.tabIndex=4
			}
		}else{
			globals.gAlta=true
			globals.car9=1
			globals.cargas_tipo='concubino'
			forms.frm_tab_cargas.elements.tabless.tabIndex=4
		}
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"E37629EF-D32F-465D-9667-E69192B2DD43"}
 */
function onAction_btn_edita(event) {
	globals.car2=0
	globals.gAlta=false
	forms.frm_cargas_dtl.fecha= "Fecha Inicio"
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
	globals.cargas_tipo='concubino'
	forms.frm_tab_cargas.elements.tabless.tabIndex=4
}

/**
 * @properties={typeid:24,uuid:"F16E9344-BCBF-4C5C-9B09-BD90285C9C42"}
 */
function grabaHistoricoCargas() {
	// TODO Auto-generated method stub
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"404F53D2-CD18-4285-ACEC-5B0DCAD1A5B8"}
 */
function onShow_concubino(firstShow, event) {
	if(foundset.getSize()>0){
		forms.frm_tab_cargas_2.elements.tabless_2.visible=true
		elements.btn_agrega.visible=false
		elements.lbl_agrega.visible=false
		elements.lbl_titulo.visible=true
	}else{
		if(forms.frm_cargas_conyugue_ds.foundset.getSize()>0){
			forms.frm_tab_cargas_2.elements.tabless_2.visible=false
		}else{
			if(globals.tit_estado_tratamiento=='Alta'){
				
			}else{
				forms.frm_tab_cargas_2.elements.tabless_2.visible=true
				elements.btn_agrega.visible=true
				elements.lbl_agrega.visible=true
				elements.lbl_titulo.visible=false
			}
		}
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
 * @properties={typeid:24,uuid:"1246489D-67A6-4262-80D4-BEFBDC45B033"}
 */
function onAction_btn_historico_concubino(event) {
	globals.dat_per_tipo='concubino'
	var win = application.createWindow("c",JSWindow.MODAL_DIALOG);
	win.title = "Historial Concubino";
	win.show(forms.frm_tab_rrhh_hist_datos_pers);
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"BD46F58F-D010-4CE4-86A2-68F571F65C0E"}
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
