/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"1051FC19-578B-4A5A-AEA9-571951A975C4"}
 */
function onAction_campo_gral(event) {
	/*
	if(globals.tit_estado_tratamiento=='Alta'){
		globals.valida_Campos_Obligatorios_Completos('frm_abm_legajo')
	}
	*/
	switch (event.getElementName()){
	
	case 'per_nivel_formacion':if(globals.per_nivel_formacion>1){elements.per_titulo_formacion.requestFocus()}else{elements.per_20.requestFocus()};break;
	case 'per_titulo_formacion':elements.per_20.requestFocus();break;
	
	case 'per_20':if(globals.per_20!=0){elements.per_21.requestFocus()}else{globals.per_21=0, globals.per_vto_matricula=0, globals.per_54=0};break;
	case 'per_21':elements.per_vto_matricula.requestFocus();break;
	case 'per_vto_matricula':elements.per_54.requestFocus();break;
	}
	if(globals.tit_estado_tratamiento=='Alta'){
		globals.valida_Campos_Obligatorios_Completos('frm_abm_legajo')
	}
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"2EB0898D-0DFC-4DDC-A400-71B909210FDF"}
 */
function onShow(firstShow, event) {
	controller.focusFirstField()
}

/**
 * Handle changed data.
 *
 * @param {Number} oldValue old value
 * @param {Number} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"BB516FB0-BD98-4D76-9433-B7A19117BF47"}
 */
function onDataChange_per_20(oldValue, newValue, event) {
	var frm2=''
	if(newValue==0){
		globals.per_21=0
		globals.per_54=0
		
		forms.frm_abm_legajo.elements.tabs.setTabFGColorAt(3,"#040404")
		forms.frm_abm_legajo.elements.tabs.setTabEnabledAt(4,true)
		frm2=forms.frm_abm_legajo.elements.tabs.getTabFormNameAt(4)
		globals.HabilitaDeshabilitaCampos(frm2,null)
		forms.frm_abm_legajo.elements.tabs.tabIndex=4

		if(globals.per_marca_hepb==1||per_84_to_tbc_puesto.pto14==1){
			globals.vacuna_modif=null
			forms.frm_datos_varios.elements.per_vacuna_modif.requestFocus()
		}else{
			forms.frm_datos_varios.elements.per_17_8.requestFocus()
		}
		
	}

	return true
}

/**
 * Handle changed data.
 *
 * @param {Number} oldValue old value
 * @param {Number} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"5BD932D5-1741-4447-8698-A2539D48F8B7"}
 */
function onDataChange_especialidad(oldValue, newValue, event) {
	var frm2=''
	forms.frm_abm_legajo.elements.tabs.setTabFGColorAt(3,"#040404")
	forms.frm_abm_legajo.elements.tabs.setTabEnabledAt(4,true)
	frm2=forms.frm_abm_legajo.elements.tabs.getTabFormNameAt(4)
	globals.HabilitaDeshabilitaCampos(frm2,null)
	//forms.frm_abm_legajo.elements.tabs.tabIndex=4
	if(globals.per_marca_hepb==1||per_84_to_tbc_puesto.pto14==1){
		forms.frm_datos_varios.elements.per_vacuna_modif.requestFocus()
	}else{
		forms.frm_datos_varios.elements.per_17_8.requestFocus()
	}
	return true
}

/**
 * Handle changed data.
 *
 * @param {Number} oldValue old value
 * @param {Number} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"F475BCCE-CCE1-4807-85DB-C6BFFF53ACCF"}
 */
function onDataChange_per_55(oldValue, newValue, event) {
	if(globals.validaCBU(newValue)>0){
		//application.output(globals.validaCBU(newValue))
		plugins.dialogs.showErrorDialog("Error en CBU","Error en iongreso de CBU. Verifique","Ok")
		return true
	}else{
		return true	
	}
}

/**
 * Handle changed data.
 *
 * @param {Number} oldValue old value
 * @param {Number} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"7C84F148-8968-49CF-9E5D-56DF49973539"}
 */
function onDataChange_per_55_bco(oldValue, newValue, event) {
	if(newValue>0){
		if(globals.validoCBUbanco(newValue)>0){
			//application.output(globals.validaCBU(newValue))
			plugins.dialogs.showErrorDialog("Error en CBU","Error en ingreso de CBU. Verifique","Ok")
			return false
		}else{
			return true	
		}
	}else{
		return true
	}
}

/**
 * Handle changed data.
 *
 * @param {Number} oldValue old value
 * @param {Number} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"05FC499D-EC9D-4405-A8C9-8EBDDCE60338"}
 */
function onDataChange_per_55_cta(oldValue, newValue, event) {
	if(newValue>0){
		if(globals.validoCBUcuenta(newValue)>0){
			//application.output(globals.validaCBU(newValue))
			plugins.dialogs.showErrorDialog("Error en CBU","Error en ingreso de CBU. Verifique","Ok")
			return false
		}else{
			return true	
		}
	}else{
		return true
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"D359AD0E-E85C-4770-A899-9984AB156D50"}
 */
function onAction_per_52(event) {
	if (globals.per_52==0){
		globals.per_nrocta=0
		globals.per_55_bco=0
		globals.per_55_cta=0
		
		elements.per_nrocta.enabled=false
		elements.per_55_bco.enabled=false
		elements.per_55_cta.enabled=false
		elements.per_20.requestFocus()
	}else{
		onAction_campo_gral(event)
	}
}

/**
 * Handle changed data.
 *
 * @param {Number} oldValue old value
 * @param {Number} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"9F6139D5-AC60-4F47-8C4F-4D6D644EDC28"}
 */
function onDataChange_per_52(oldValue, newValue, event) {
	if (newValue==0){
		globals.per_nrocta=0
		globals.per_55_bco=0
		globals.per_55_cta=0
		
		elements.per_nrocta.enabled=false
		elements.per_55_bco.enabled=false
		elements.per_55_cta.enabled=false
		elements.per_20.requestFocus()
	}
	return true
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"DAB64331-0668-4015-8B15-710B6E70BF84"}
 */
function onAction_btn_lupa_especialidad(event) {
	globals.vEspecial=0
    globals.vAlfaEspe = globals.vAlfaEspe.toLocaleUpperCase()
	var win = application.createWindow("f",JSWindow.MODAL_DIALOG)
	win.title = "Búsqueda de Código de Especialidad";
	win.setSize(600,500)
	win.show(forms.frm_tab_especial)
	if(globals.vEspecial>0){
	   	globals.per_54=globals.vEspecial
	   	elements.per_54.requestFocus()
	}
}

/**
 * Handle changed data.
 *
 * @param {Number} oldValue old value
 * @param {Number} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"9EE6B171-2AF3-4747-9FFA-5234BABD41EC"}
 */
function onDataChange_per_nivel_formacion(oldValue, newValue, event) {
	if(newValue==2){
		elements.per_titulo_formacion_label.text="Título Terciario:"
		elements.per_titulo_formacion_label.visible=true
		elements.per_titulo_formacion.visible=true
		elements.per_titulo_formacion.requestFocus()
	}else{
		if(newValue==3){
			elements.per_titulo_formacion_label.text="Título Universitario:"
			elements.per_titulo_formacion_label.visible=true
			elements.per_titulo_formacion.visible=true
			elements.per_titulo_formacion.requestFocus()
		}else{
			elements.per_titulo_formacion_label.text=""
			elements.per_titulo_formacion_label.visible=false
			elements.per_titulo_formacion.visible=false
			elements.per_20.requestFocus()
		}
	}
	return true
}
