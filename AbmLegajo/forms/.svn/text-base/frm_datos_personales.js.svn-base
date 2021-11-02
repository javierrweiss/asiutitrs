/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"82C9CD4C-8C45-4267-A4BF-DE2BF721816A"}
 */
function onAction_campo_gral(event) {
	if(globals.tit_estado_tratamiento=='Alta'){
		globals.valida_Campos_Obligatorios_Completos('frm_abm_legajo')
	}
	switch (event.getElementName()){
		case 'per_9':elements.per_6.requestFocus();break;
		case 'per_6':elements.per_7.requestFocus();break;
		case 'per_7':elements.per_8.requestFocus();break;
		case 'per_8':elements.per_37.requestFocus();break;
		case 'per_37':elements.per_26.requestFocus();break;
		case 'per_26':elements.per_106_grupo.requestFocus();break;
		case 'per_106_grupo':elements.per_106_dig_verif.requestFocus();break;
		//case 'per_106_dig_verif':if(globals.per_106_dig_verif!=null){elements.per_3.requestFocus()}else{elements.per_106_dig_verif.requestFocus()};break;
		case 'per_106_dig_verif':if(globals.per_106_dig_verif!=null){elements.per_106_dig_verif.requestFocus()}else{elements.per_106_dig_verif.requestFocus()};break;
		case 'per_3':elements.per_76.requestFocus();break;
		case 'per_76':elements.per_74.requestFocus();break;
		case 'per_74':elements.per_75.requestFocus();break;
		case 'per_75':elements.per_4.requestFocus();break;
		case 'per_4':elements.per_77.requestFocus();break;
		case 'per_77':elements.per_5.requestFocus();break;
		case 'per_5':elements.per_94.requestFocus();break;
		case 'per_94':elements.per_domic_alter.requestFocus();break;
		case 'per_domic_alter':elements.per_asfalto_alter.requestFocus();break;
		case 'per_asfalto_alter':elements.per_calle1_alter.requestFocus();break;
		case 'per_calle1_alter':elements.per_calle2_alter.requestFocus();break;
		case 'per_calle2_alter':elements.per_cpostal_alter.requestFocus();break;
		case 'per_cpostal_alter':elements.per_barrio_alter.requestFocus();break;
		case 'per_barrio_alter':elements.per_locali_alter.requestFocus();break;
		case 'per_locali_alter':elements.per_provin_alter.requestFocus();break;
		case 'per_provin_alter':elements.per_mail.requestFocus();break;
		case 'per_mail':elements.per_41.requestFocus();break;
		case 'per_41':elements.per_celular_area.requestFocus();break;
		case 'per_celular_area':elements.per_celular_nro.requestFocus();break;
		case 'per_celular_nro':elements.per_zona.requestFocus();break;
	}
	
	
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"EF0FD6BE-8143-4535-A838-6C9D0BDD54FE"}
 */
function onShow(firstShow, event) {
	globals.per_106_vector=new Array()
	controller.focusFirstField()
}

/**
 * Handle changed data.
 *
 * @param {String} oldValue old value
 * @param {String} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"129407E1-C6C8-4201-B624-AED9B8BB067F"}
 */
function onDataChange_cuil(oldValue, newValue, event) {
	globals.per_106=utils.stringToNumber(globals.per_106_grupo+''+globals.per_106_edit_str+''+globals.per_106_dig_verif)
	globals.per_106_vector[globals.per_106_dig_verif]=1
	if (globals.CalcularCuil(globals.per_106)){
		elements.per_3.requestFocus()
		return true
	}else{
			//globals.callback=null
			//globals.DIALOGS.showWarningDialog('Error en Dgito Verificador','El digito verificador no corresponde con el CUIL ingresado', 'OK')
			//globals.showErrorDialog('El digito verificador no corresponde con el CUIL ingresado', null, 'OK', null, null, null)
			var $10veces=true
			for(var i=0;i<=9&&$10veces;i++){
				if(globals.per_106_vector[i]!=1){
					$10veces=false
				}
			}
			if($10veces){
				for(var j=0;j<=9;j++){
					globals.per_106_vector[j]=0
				}
				globals.per_106_grupo=23
				elements.per_106_grupo.requestFocus()
				return true
				/*
				globals.per_106_grupo=23
				if (globals.CalcularCuil(globals.per_106)){
					elements.per_3.requestFocus()
					return true
				}else{
					plugins.dialogs.showErrorDialog("Error en Digito Verificador de CUIL",'El digito verificador no corresponde con el CUIL ingresado','OK')
					return false
				}
				*/
			}else{
				plugins.dialogs.showErrorDialog("Error en Digito Verificador de CUIL",'El digito verificador no corresponde con el CUIL ingresado','OK')
				return false
			}
	}
}

/**
 * Handle changed data.
 *
 * @param {String} oldValue old value
 * @param {String} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"64B4ED0B-D0EC-443D-A6CE-4BCD072D797A"}
 */
function onDataChange_gral(oldValue, newValue, event) {
	
	return true
}

/**
 * Handle focus gained event of the element.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"4D13752D-3DA7-48B7-AE78-845277298B70"}
 */
function onFocusGained_gral(event) {
	
}

/**
 * Handle focus lost event of the element.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"5B9A7F86-9FB4-49F6-B28D-5E3BC5B0EDBD"}
 */
function onFocusLost_gral(event) {
	
}

/**
 * Called before the form component is rendered.
 *
 * @param {JSRenderEvent} event the render event
 *
 * @properties={typeid:24,uuid:"75D29E70-6C80-4EDC-8F1F-1DC90F3AC952"}
 */
function onRender_gral(event) {
	// TODO Auto-generated method stub
	// NOTE: a property set on the renderable, will be kept on the element only during onRender
	if (event.isRecordSelected()) {
		event.getRenderable().fgcolor = '#00ff00';
	} else if (event.getRecordIndex() % 2) {
		event.getRenderable().fgcolor = '#ff0000';
	}
	
}

/**
 * Perform the element right-click action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"5711A115-B0A0-44F9-954B-FBBF629DB464"}
 */
function onRightClick_gral(event) {
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"ADCE4B90-0FB1-48E7-89A5-6951E4C48D79"}
 */
function onAction_per_106(event) {
	// TODO Auto-generated method stub
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
 * @properties={typeid:24,uuid:"DCC19868-6C8D-4CFE-81C7-E5D0DD74D1A8"}
 */
function onDataChange_per_106_grupo(oldValue, newValue, event) {
	if((globals.per_106_grupo.toString().substr(0,2)=='20'&&globals.per_6=='F')||(globals.per_106_grupo.toString().substr(0,2)=='27'&&globals.per_6=='M')){
		if(globals.per_106_grupo.toString().substr(0,2)!='23'&&globals.per_106_grupo.toString().substr(0,2)!='24'){
			globals.callback=null
			globals.showErrorDialog('El sexo no corresponde con el código ingresado', null, 'OK', null, null, null)
		}
	}
	return true
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"D814C64B-84FD-49A5-99C9-C9B1151E7136"}
 */
function onAction_btn_histo_1(event) {
	globals.dat_per_tipo='per_26'
	var win = application.createWindow("c",JSWindow.MODAL_DIALOG);
	win.title = "Historial Estado Civil";
	win.show(forms.frm_tab_rrhh_hist_datos_pers);
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"01CE7A67-49C9-4124-97B8-6CEB7ADD8CFE"}
 */
function onAction_btn_histo_domicilio(event) {
	globals.dat_per_tipo='per_3'
	var win = application.createWindow("c",JSWindow.MODAL_DIALOG);
	win.title = "Historial Domicilios";
	win.show(forms.frm_tab_rrhh_hist_datos_pers);
}

/**
 * Handle changed data.
 *
 * @param {String} oldValue old value
 * @param {String} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"B4DB4C10-5633-40B3-9501-58638EE1422D"}
 */
function onDataChange_nulo(oldValue, newValue, event) {
	if(newValue == null || newValue == '' || newValue == 0){
		return false
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
 * @properties={typeid:24,uuid:"C4733FD9-EFE9-4235-8D18-599602719F89"}
 */
function onDataChange_provincia(oldValue, newValue, event) {
	if(newValue!=1){
		elements.per_zona.enabled=true
		globals.per_zona=null
	}else{
		elements.per_zona.enabled=false
		globals.per_zona=1
	}
	return true
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"FBDC2D1B-0FEB-42DB-A6ED-9F6E017F8A83"}
 */
function onAction_btn_domicilio_alter(event) {
	globals.per_domic_alter=globals.per_3
	globals.per_cpostal_alter=globals.per_4
	globals.per_locali_alter=globals.per_5
	globals.per_calle1_alter=globals.per_74
	globals.per_calle2_alter=globals.per_75
	globals.per_asfalto_alter=globals.per_76
	globals.per_barrio_alter=globals.per_77
	globals.per_provin_alter=globals.per_94
	if(globals.tit_estado_tratamiento=='Alta'){
		globals.valida_Campos_Obligatorios_Completos('frm_abm_legajo')
	}
	elements.btn_domicilio_alter.visible=false
	elements.per_mail.requestFocus()
	application.updateUI()
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
 * @properties={typeid:24,uuid:"E3FECE45-8AFA-4F2B-B9B2-3CCEACA512F6"}
 */
function onDataChange_per_26(oldValue, newValue, event) {
	if(globals.tit_estado_tratamiento=='Alta'){
		if(newValue==2){
			forms.frm_tab_cargas_2.elements.tabless_2.visible=false
			forms.frm_tab_cargas_2.elements.tabless.visible=true
		}else{
			if(newValue==5){
				forms.frm_tab_cargas_2.elements.tabless.visible=false
				forms.frm_tab_cargas_2.elements.tabless_2.visible=true
			}else{
				forms.frm_tab_cargas_2.elements.tabless_2.visible=false
				forms.frm_tab_cargas_2.elements.tabless.visible=true
			}
		}
	}else{
		if(globals.tit_estado_tratamiento=='Modifica'&&globals.per_1!=0 && globals.per_1!=null){
			if(legajo_to_tbc_personal_rrhh.getSize()>0){
				if(legajo_to_tbc_personal_rrhh.per_26==5){
					forms.frm_tab_cargas_1.elements.tabless.visible=false
					forms.frm_tab_cargas_1.elements.tabless_2.visible=true
				}else{
					if(legajo_to_tbc_personal_rrhh.per_26==1){
						forms.frm_tab_cargas_1.elements.tabless.visible=false
						forms.frm_tab_cargas_1.elements.tabless_2.visible=false
					}else{
						forms.frm_tab_cargas_1.elements.tabless.visible=true
						forms.frm_tab_cargas_1.elements.tabless_2.visible=false
					}
				}
			}
		}
	}
	return true
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"D3FDA638-7D12-4BDA-AB7A-D973F946DFA9"}
 */
function onAction_per_26(event) {
	if(globals.tit_estado_tratamiento=='Alta'){
		globals.valida_Campos_Obligatorios_Completos('frm_abm_legajo')
	}
	if(globals.tit_estado_tratamiento=='Alta'){
		if(globals.per_26==2){
			forms.frm_tab_cargas_2.elements.tabless_2.visible=false
			forms.frm_tab_cargas_2.elements.tabless.visible=true
		}else{
			if(globals.per_26==5){
				forms.frm_tab_cargas_2.elements.tabless.visible=false
				forms.frm_tab_cargas_2.elements.tabless_2.visible=true
			}else{
				forms.frm_tab_cargas_2.elements.tabless_2.visible=true
				forms.frm_tab_cargas_2.elements.tabless.visible=true
			}
		}
	}else{
		forms.frm_tab_cargas_1.elements.tabless_2.visible=true
		forms.frm_tab_cargas_1.elements.tabless.visible=true
	}
	elements.per_106_grupo.requestFocus()
}
