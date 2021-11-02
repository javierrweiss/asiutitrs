/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"5C405341-73BE-4BF5-BC5D-271B6FF5B582"}
 */
function onAction_campos_gral(event) {
	if(globals.tit_estado_tratamiento=='Alta'){
		globals.valida_Campos_Obligatorios_Completos('frm_abm_legajo')
	}
	switch (event.getElementName()){
	//case 'per_vacuna_modif':if(globals.vacuna_modif==1){elements.modifica_vacuna_label.visible=true;elements.modifica_vacuna.visible=true;elements.modifica_vacuna.requestFocus()}else{elements.modifica_vacuna_label.visible=false;elements.modifica_vacuna.visible=false;elements.per_17_8.requestFocus()};break;
	case 'modifica_vacuna':elements.per_17_8.requestFocus();break;
	case 'per_17_8':elements.per_nro_libreta_sanitaria.requestFocus();break;
	case 'per_nro_libreta_sanitaria':elements.per_ficha_en.requestFocus();break;
	case 'per_ficha_en':elements.per_turno.requestFocus();break;
	case 'per_turno':elements.per_locker.requestFocus();break;
	}
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"5621D2BD-415A-4A05-975E-E20535EE7039"}
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
 * @properties={typeid:24,uuid:"68BA361B-5042-4B09-A95E-15F0E6003D59"}
 */
function onDataChange_per_locker(oldValue, newValue, event) {
	//validoNroLegajo()
	    /*
		if(globals.tit_estado_tratamiento=='Alta'){
			globals.valida_Campos_Obligatorios_Completos('frm_abm_legajo')
			if(globals.vCamposCompletos){
				globals.callback=null
				globals.showWarningDialog('Debe grabar el Legajo antes de ingresar las Cargas Familiares', null, 'OK', null, null, null)
			}else{
				globals.callback=null
				globals.showWarningDialog('¡Atención! Faltan ingresar datos obligatorios para Grabar'+'\n'+'Debe grabar el Legajo antes de ingresar las Cargas Familiares', null, 'OK', null, null, null)
			}
		}
		*/
		//forms.frm_abm_legajo.elements.tabs.setTabFGColorAt(4,"#040404")
		//forms.frm_abm_legajo.elements.tabs.setTabEnabledAt(5,true)
		//var frm=forms.frm_abm_legajo.elements.tabs.getTabFormNameAt(5)
		//globals.HabilitaDeshabilitaCampos(frm,null)
		if(globals.tit_estado_tratamiento=='Alta'){
			globals.valida_Campos_Obligatorios_Completos('frm_abm_legajo')
		}
		if(globals.tit_estado_tratamiento=='Alta'){
			/*
			forms.frm_cargas_conyugue.elements.btn_agrega.visible=true
			forms.frm_cargas_conyugue.elements.lbl_agrega.visible=true
			forms.frm_cargas_conyugue.elements.lbl_titulo.visible=false
			forms.frm_cargas_concubino.elements.btn_agrega.visible=true
			forms.frm_cargas_concubino.elements.lbl_agrega.visible=true
			forms.frm_cargas_concubino.elements.lbl_titulo.visible=false
			forms.frm_cargas_hijos_tbl.elements.btn_agrega.visible=true
			forms.frm_cargas_hijos_tbl.elements.lbl_agrega.visible=true
			forms.frm_cargas_hijos_tbl.elements.lbl_titulo.visible=false
			*/
			if(globals.per_26==5){
				forms.frm_tab_cargas_2.elements.tabless.visible=false
				forms.frm_tab_cargas_2.elements.tabless_2.visible=true
			}else{
				if(globals.per_26==1){
						forms.frm_tab_cargas_2.elements.tabless.visible=false
						forms.frm_tab_cargas_2.elements.tabless_2.visible=false
				}else{
						forms.frm_tab_cargas_2.elements.tabless.visible=true
						forms.frm_tab_cargas_2.elements.tabless_2.visible=false
				}
		}
		}else{
			if(globals.tit_estado_tratamiento=='Consulta'){
				forms.frm_cargas_conyugue.elements.btn_agrega.visible=false
				forms.frm_cargas_conyugue.elements.lbl_agrega.visible=false
				forms.frm_cargas_conyugue.elements.lbl_titulo.visible=true
				forms.frm_cargas_concubino.elements.btn_agrega.visible=false
				forms.frm_cargas_concubino.elements.lbl_agrega.visible=false
				forms.frm_cargas_concubino.elements.lbl_titulo.visible=true
				forms.frm_cargas_hijos_tbl.elements.btn_agrega.visible=false
				forms.frm_cargas_hijos_tbl.elements.lbl_agrega.visible=false
				forms.frm_cargas_hijos_tbl.elements.lbl_titulo.visible=true
			}else{
				forms.frm_cargas_conyugue.elements.btn_agrega.visible=true
				forms.frm_cargas_conyugue.elements.lbl_agrega.visible=true
				forms.frm_cargas_conyugue.elements.lbl_titulo.visible=false
				forms.frm_cargas_concubino.elements.btn_agrega.visible=true
				forms.frm_cargas_concubino.elements.lbl_agrega.visible=true
				forms.frm_cargas_concubino.elements.lbl_titulo.visible=false
				forms.frm_cargas_hijos_tbl.elements.btn_agrega.visible=true
				forms.frm_cargas_hijos_tbl.elements.lbl_agrega.visible=true
				forms.frm_cargas_hijos_tbl.elements.lbl_titulo.visible=false
			}
		}
		forms.frm_abm_legajo.elements.tabs.tabIndex=5
		return true
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"7988919F-663A-4601-9DCA-B838DB335901"}
 */
function onShow_frm_datos_varios(firstShow, event) {
	if(globals.per_marca_hepb==1||per_84_to_tbc_puesto.pto14==1){
		globals.vacuna_modif=null
		elements.tabless.visible=true
		elements.per_vacuna_modif.visible=true
		globals.vacuna_lbl="Este puesto requiere Vacunacion Hep B"
		elements.modifica_vacuna.visible=false
		elements.modifica_vacuna_label.visible=false
	}else{
		elements.tabless.visible=false
		elements.per_vacuna_modif.visible=false
		elements.modifica_vacuna.visible=false
		elements.modifica_vacuna_label.visible=false
		globals.vacuna_lbl="Este puesto No requiere Vacunacion Hep B"
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
 * @properties={typeid:24,uuid:"64E58F00-8B38-4846-9031-8690B29042EB"}
 */
function onDataChange_vacuna_modif(oldValue, newValue, event) {
	if(newValue==1){
		var win = application.createWindow("c",JSWindow.MODAL_DIALOG);
		win.title = "Ingreso/Modificación Dosis Hep B";
		win.show(forms.frm_tab_vacunas_per);
		if(per_hist_cli_to_tbc_vacunas_per.getSize()>0){
			elements.tabless.visible=true
		}
	}else{
		elements.tabless.visible=false
	}
	elements.per_17_8.requestFocus()
	return true
}

/**
 * Handle focus gained event of the element.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"ACF7137D-6EA4-4289-8112-14FC029BA047"}
 */
function onFocusGained_vacuna_modif(event) {
	if(per_84_to_tbc_puesto.pto14==1||globals.per_marca_hepb==1){
		globals.vacuna_lbl='Este puesto requiere vacunación Hep B'
		if(per_hist_cli_to_tbc_vacunas_per.getSize()>0){
			elements.tabless.visible=true
		}
	}else{
		globals.vacuna_lbl='Este puesto NO requiere vacunación Hep B'
		elements.tabless.visible=false
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
 * @properties={typeid:24,uuid:"3E770080-BE1F-481E-B2F6-7475D1459FB0"}
 */
function onDataChange_vacuna(oldValue, newValue, event) {
	if(newValue==1){
		globals.modifica_vacuna=null
		elements.modifica_vacuna_label.visible=true
		elements.modifica_vacuna.visible=true
		elements.modifica_vacuna.requestFocus()
	}else{
		elements.modifica_vacuna_label.visible=false
		elements.modifica_vacuna.visible=false
		elements.per_17_8.requestFocus()
	}
	return true
}
