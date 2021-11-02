/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"8FAE7E21-8585-4F28-AA48-910C1883BBA0"}
 */
function onAction_agrega_conyugue(event) {
	if(globals.tit_estado_tratamiento=="Alta"&&globals.per_1!=0&&globals.per_1!=null){
		globals.car2=0
		if(per_1_to_tbc_cargas.getSize()>0){
			globals.callback=null
			globals.showWarningDialog('Conyugue ya ingresado.', null, 'OK', null, null, null)
		}else{
			globals.gAlta=true
			globals.car9=0
			globals.cargas_tipo='conyugue'
			forms.frm_tab_cargas.elements.tabless.tabIndex=2
		}
	}else{
		if(globals.tit_estado_tratamiento=="Modifica"&&globals.per_1!=0&&globals.per_1!=null){
			globals.car2=0
			if(per_1_to_tbc_cargas.getSize()>0){
				globals.callback=null
				globals.showWarningDialog('Conyugue ya ingresado.', null, 'OK', null, null, null)
			}else{
				globals.gAlta=true
				globals.car9=0
				globals.cargas_tipo='conyugue'
				forms.frm_tab_cargas.elements.tabless.tabIndex=2
			}
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
 * @properties={typeid:24,uuid:"F19B9281-4C9A-41AA-9BAA-5F0EC479FB54"}
 */
function onAction_btn_edita(event) {
	globals.car2=0
	globals.gAlta=false
	forms.frm_cargas_dtl.fecha= "Fecha Casam."
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
	globals.cargas_tipo='conyugue'
	forms.frm_tab_cargas.elements.tabless.tabIndex=2
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"C9DBB866-855E-404F-B3B8-1B9654631A54"}
 */
function onShow_conyugue(firstShow, event) {
	if(conyugue_to_tbc_cargas.getSize()>0){
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
 * @properties={typeid:24,uuid:"9F7B39FE-AA18-4D9C-A3B9-2E6839ABA23D"}
 */
function onAction_btn_historico_conyugue(event) {
	globals.dat_per_tipo='conyugue'
	var win = application.createWindow("c",JSWindow.MODAL_DIALOG);
	win.title = "Historial Conyugue";
	win.setSize(800,200)
	win.show(forms.frm_tab_rrhh_hist_datos_pers);
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"ADAEC7B0-B023-4231-9FF0-A78D79730734"}
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
