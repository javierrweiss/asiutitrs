/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"214E8E18-CE25-4A59-B81F-9B5F0B1C63FB"}
 */
function onAction_agrega_conyugue(event) {
	if(globals.tit_estado_tratamiento=="Alta"){
		if(globals.per_1!=0&&globals.per_1!=null){
			globals.car2=0
			if(per_1_to_tbc_cargas.getSize()>0){
				globals.callback=null
				globals.showWarningDialog('Conyugue ya ingresado.', null, 'OK', null, null, null)
			}else{
				globals.gAlta=true
				globals.car9=1
				globals.cargas_tipo='concubino'
				forms.frm_tab_cargas.elements.tabless.tabIndex=2
			}
		}else{
			globals.callback=null
			globals.showWarningDialog('Debe grabar el Legajo antes de ingresar las Cargas Familiares', null, 'OK', null, null, null)
		}
	}else{
		globals.car2=0
		if(per_1_to_tbc_cargas.getSize()>0){
			globals.callback=null
			globals.showPreguntaDialog('Conyugue ya ingresado. ¿Desea reemplazarlo por el/la concubino/a?', null, 'NO', "SI", null, null)
			if(globals.core_dlg_buttonPressed=='SI'){
				grabaHistoricoCargas()
				globals.gAlta=false
				globals.car9=1
				globals.cargas_tipo='concubino'
				forms.frm_tab_cargas.elements.tabless.tabIndex=2
			}
		}else{
			globals.gAlta=true
			globals.car9=1
			globals.cargas_tipo='concubino'
			forms.frm_tab_cargas.elements.tabless.tabIndex=2
		}
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"AB418D98-D618-43FC-B535-A9D5F47FB38E"}
 */
function onAction_btn_edita(event) {
	globals.car2=0
	globals.gAlta=false
	forms.frm_cargas_dtl.fecha= "Fecha Inicio"
	globals.car2=foundset.car2
	globals.car3=foundset.car3
	globals.car4=new Date()
	var fecha_n=foundset.car4.toString()
	globals.car4=globals.car4.setFullYear(utils.stringToNumber(fecha_n.substr(0,4)))
	globals.car4=globals.car4.setMonth(utils.stringToNumber(foundset.car4.toString().substr(4,2)-1))
	globals.car4=globals.car4.setDate(utils.stringToNumber(foundset.car4.toString().substr(6,2)))
	globals.car5=foundset.car5
	globals.car6=foundset.car6
	globals.car7=new Date()
	var fecha_c=foundset.car7.toString()
	globals.car7=globals.car7.setFullYear(utils.stringToNumber(fecha_c.substr(0,4)))
	globals.car7=globals.car7.setMonth(utils.stringToNumber(foundset.car7.toString().substr(4,2)-1))
	globals.car7=globals.car7.setDate(utils.stringToNumber(foundset.car7.toString().substr(6,2)))
	globals.cargas_tipo='concubino'
	forms.frm_tab_cargas.elements.tabless.tabIndex=2
}

/**
 * @properties={typeid:24,uuid:"BE76C396-D26E-4BFB-A9F3-FB0A6F84DAAA"}
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
 * @properties={typeid:24,uuid:"0C1024EE-F331-476C-BABD-401438F00A28"}
 */
function onShow_concubino(firstShow, event) {
	if(concubino_to_tbc_cargas.getSize()>0){
		elements.btn_agrega.visible=false
		elements.lbl_agrega.visible=false
		elements.lbl_titulo.visible=true
	}else{
		elements.btn_agrega.visible=true
		elements.lbl_agrega.visible=true
		elements.lbl_titulo.visible=false
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"132C3397-0E12-4D51-A41F-86A43C81A983"}
 */
function onAction_btn_historico_concubino(event) {
	globals.dat_per_tipo='concubino'
	var win = application.createWindow("c",JSWindow.MODAL_DIALOG);
	win.title = "Historial Concubino";
	win.setSize(800,200)
	win.show(forms.frm_tab_rrhh_hist_datos_pers);
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"276052C1-2DEB-4500-BCA0-CAF69229F1D1"}
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
