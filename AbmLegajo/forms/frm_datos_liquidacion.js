/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"953CD649-C7A7-45A5-9C1C-6EF18012D145"}
 */
function onAction_per_18(event) {
	if(globals.tit_estado_tratamiento=='Alta'){
		globals.valida_Campos_Obligatorios_Completos('frm_abm_legajo')
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"AAF07CE7-AA80-4488-950B-CD1F836E49D7"}
 */
function onAction_campo_gral(event) {
	if(globals.tit_estado_tratamiento=='Alta'){
		globals.valida_Campos_Obligatorios_Completos('frm_abm_legajo')
	}
	switch (event.getElementName()){
	case 'per_18':elements.per_84.requestFocus();break;
	case 'per_84':if(globals.per_84==0){elements.per_84.requestFocus()}else{elements.per_tipo_personal.requestFocus()};break;
	case 'per_15':if(globals.per_15_fec!=null){elements.per_tipo_contrato.requestFocus()}else{elements.per_15.requestFocus()};break;
	case 'per_13':elements.per_tipo_personal.requestFocus();break;
	//case 'per_15':if(globals.per_15_fec!=null){elements.per_23.requestFocus()}else{elements.per_15.requestFocus()};break;
	case 'per_tipo_personal':elements.per_tipo_atencion.requestFocus();break;
		
	case 'per_tipo_atencion':if(globals.vCamposFaltantesTab2){
		//globals.per_calc_4ta=0;
		globals.per_escala_4ta=0;
		forms.frm_abm_legajo.elements.tabs.setTabFGColorAt(2,"#040404");
		forms.frm_abm_legajo.elements.tabs.setTabEnabledAt(3,true);
		var frm2=forms.frm_abm_legajo.elements.tabs.getTabFormNameAt(3);
		globals.HabilitaDeshabilitaCampos(frm2,null);
		forms.frm_abm_legajo.elements.tabs.tabIndex=3;
		forms.frm_otros_datos.elements.per_nivel_formacion.requestFocus()
		
		}else{elements.per_23.requestFocus()};break;
	case 'per_23':if(globals.tit_estado_tratamiento=='Alta'){globals.per_retencion=null};if(validaObraSocial()){elements.per_retencion.requestFocus()};break;
	case 'per_retencion':elements.per_22.requestFocus();break;
	case 'per_22':elements.per_109.requestFocus();break;
	case 'per_109':elements.per_jubilado.requestFocus();break;
	case 'per_jubilado':elements.per_residente.requestFocus();break;
	case 'per_residente':if(globals.per_residente==1){elements.per_tipo_residencia.requestFocus()}else{if(globals.per_22!=1){elements.per_pesos_ex.requestFocus()}else{elements.per_feriado.requestFocus()}};break;
	case 'per_tipo_residencia':if(globals.per_22!=1){elements.per_pesos_ex.requestFocus()}else{elements.per_feriado.requestFocus()};break;
	case 'per_pesos_ex':elements.per_feriado.requestFocus();break;
	//case 'per_eventual':elements.per_feriado.requestFocus();break;
	case 'per_feriado':elements.per_marca_antig.requestFocus();break;
	case 'per_marca_antig':elements.per_dias_laborables.requestFocus();break;
	case 'per_dias_laborables':elements.per_calc_4ta.requestFocus();break;
	//if(globals.tit_estado_tratamiento=='Alta'){globals.per_calc_4ta=1};
	case 'per_calc_4ta':elements.per_24.requestFocus();break;
	case 'per_24':elements.per_108.requestFocus();break;
	case 'per_108':elements.per_14.requestFocus();break;
	case 'per_14':elements.per_52.requestFocus();break;
	case 'per_52':if(globals.per_52==0){
						if(globals.vCamposFaltantesTab2){
							//globals.per_calc_4ta=0;
							globals.per_escala_4ta=0;
							forms.frm_abm_legajo.elements.tabs.setTabFGColorAt(2,"#040404");
							forms.frm_abm_legajo.elements.tabs.setTabEnabledAt(3,true);
							var frm2=forms.frm_abm_legajo.elements.tabs.getTabFormNameAt(3);
							globals.HabilitaDeshabilitaCampos(frm2,null);
							forms.frm_abm_legajo.elements.tabs.tabIndex=3;
							forms.frm_otros_datos.elements.per_nivel_formacion.requestFocus()
						}
					}else{elements.per_nrocta.requestFocus()};break;
	case 'per_nrocta':elements.per_55_bco.requestFocus();break;
	case 'per_55_bco':elements.per_55_cta.requestFocus();break;
	case 'per_55_cta':if(globals.vCamposFaltantesTab2){
		                //globals.per_calc_4ta=0;
						globals.per_escala_4ta=0;
						forms.frm_abm_legajo.elements.tabs.setTabFGColorAt(2,"#040404");
						forms.frm_abm_legajo.elements.tabs.setTabEnabledAt(3,true);
						var frm3=forms.frm_abm_legajo.elements.tabs.getTabFormNameAt(3);
						globals.HabilitaDeshabilitaCampos(frm3,null);
						forms.frm_abm_legajo.elements.tabs.tabIndex=3;
						forms.frm_otros_datos.elements.per_nivel_formacion.requestFocus()};break;
	}
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"8CA483A4-145A-4437-903C-269BAA9A9728"}
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
 * @properties={typeid:24,uuid:"6DC28A3C-DBA4-4377-A86A-7CB25914ABB3"}
 */
function onDataChange_per_18(oldValue, newValue, event) {
	var frm2=''
	if(globals.per_18==2){
		forms.frm_abm_legajo.elements.tabs.setTabEnabledAt(6,true)
		frm2=forms.frm_abm_legajo.elements.tabs.getTabFormNameAt(6)
		globals.HabilitaDeshabilitaCampos(frm2,null)
		//forms.frm_abm_legajo.elements.tabs.tabIndex=6
	}else{
		forms.frm_abm_legajo.elements.tabs.setTabEnabledAt(6,false)
	}
	return true
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"34D0A974-3E60-4AF5-AD9E-F63CB73BBBF2"}
 */
function onAction_buscar_puesto(event) {
	var win = application.createWindow("c",JSWindow.MODAL_DIALOG);
	win.title = "Búsqueda de Puesto";
	win.show(forms.frm_tab_puesto);
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
 * @properties={typeid:24,uuid:"F5A60B18-CBC8-4B98-AD40-830A75E90F1B"}
 * @AllowToRunInFind
 */
function onDataChange_per_84(oldValue, newValue, event) {
	if(newValue==0){
		plugins.dialogs.showErrorDialog("Error en Ingreso de Puesto","Debe ingresar un número de Puesto válido")
		return false
	}else{
		databaseManager.refreshRecordFromDatabase(vsector_to_tbc_sector,-1)
		var fs = databaseManager.getFoundSet("rrhh","tbc_s_estruct")
		fs.find()
		fs['sestr1']=globals.per_18
		fs['sestr2']=3
		fs['sestr3']=globals.per_84
		fs['sestr4']=0
		fs.search()
		if(fs.getSize()>0){
			if(per_84_to_tbc_puesto.pto3==0){
				globals.per_10=per_84_to_tbc_puesto.pto2
				globals.per_11=per_84_to_tbc_puesto.pto4
				globals.per_19=vsector_to_tbc_sector.sector18
				if(globals.per_19!=4&&globals.per_19!=10){
					if(vsector_to_tbc_sector.sector32==0){
						plugins.dialogs.showErrorDialog("Error en Ingreso de Puesto","Falta el centro de Costo para el Sector asignado al Puesto."+'\n'+'Asigne primero el Centro de Costo para poder continuar.')
						globals.per_84=0
						newValue==0
						return false
					}else{
						return true
					}
				}else{
					return true
				}
			}else{
				if(per_84_to_tbc_puesto.pto3==globals.per_1){
					globals.per_10=per_84_to_tbc_puesto.pto2
					globals.per_11=per_84_to_tbc_puesto.pto4
					globals.per_19=vsector_to_tbc_sector.sector18
					if(globals.per_19!=4&&globals.per_19!=10){
						if(vsector_to_tbc_sector.sector32==0){
							plugins.dialogs.showErrorDialog("Error en Ingreso de Puesto","Falta el centro de Costo para el Sector asignado al Puesto."+'\n'+'Asigne primero el Centro de Costo para poder continuar.')
							globals.per_84=0
							newValue==0
							return false
						}else{
							return true
						}
					}else{
						return true
					}
				}else{
					plugins.dialogs.showErrorDialog("Error en Ingreso de Puesto","El Puesto está ocupado con otro Legajo")
					return false
				}
			}
		}else{
			plugins.dialogs.showErrorDialog("Error en Ingreso de Puesto","No hay Estructura para este Puesto")
			return false
		}
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"193D2EAE-1F2D-455A-B9EC-44A8216D2D88"}
 */
function onAction_btn_buscar_obra(event) {
	var win = application.createWindow("c",JSWindow.MODAL_DIALOG);
	win.title = "Búsqueda de Obra Social";
	win.show(forms.frm_tab_obras_pers);
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"0FC12BA2-FBB7-41A6-9241-DA5A85CA23EC"}
 */
function onAction_btn_histo_puesto(event) {
	globals.dat_per_tipo='per_84'
	var win = application.createWindow("c",JSWindow.MODAL_DIALOG);
	win.title = "Historial Puestos";
	win.show(forms.frm_tab_rrhh_hist_datos_pers);
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"EB422148-950E-4F55-98CA-B56B1520C774"}
 */
function onActionbtn_histo_obras(event) {
	globals.dat_per_tipo='per_23'
	var win = application.createWindow("c",JSWindow.MODAL_DIALOG);
	win.title = "Historial Obra Social Personal";
	win.show(forms.frm_tab_rrhh_hist_datos_pers);
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"D13724DA-FFEB-4B62-BBAB-38CBD2F43579"}
 */
function onAction_btn_histo_sindicato(event) {
	globals.dat_per_tipo='per_22'
	var win = application.createWindow("c",JSWindow.MODAL_DIALOG);
	win.title = "Historial Sindicato";
	win.show(forms.frm_tab_rrhh_hist_datos_pers);
}

/**
 * Handle changed data.
 *
 * @param {Date} oldValue old value
 * @param {Date} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"316A183E-B002-4738-8BD2-0628D5DE1BB3"}
 */
function onDataChange_per_13(oldValue, newValue, event) {
	if(newValue==null){
		return false
	}else{
		return true
	}
}

/**
 * Handle changed data.
 *
 * @param {Date} oldValue old value
 * @param {Date} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"FA9A5C87-8233-4B4B-B6B7-30FA8F0D9330"}
 */
function onDataChange_per_15(oldValue, newValue, event) {
	if(newValue==null){
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
 * @properties={typeid:24,uuid:"2A4283F6-0BE5-4D57-A2F4-C2B6ECB6357B"}
 */
function onDataChange_dias_laborables(oldValue, newValue, event) {
	if(newValue>31){
		plugins.dialogs.showErrorDialog("Error en Dato ingresado","Error en ingreso. No puede superar los 31 días laborables")
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
 * @properties={typeid:24,uuid:"24AE4007-D88D-466B-9186-29D48F6D8F44"}
 */
function onDataChange_per_eventual(oldValue, newValue, event) {
	var milisegundos=0
	var fin_mes = new Array(31,28,31,30,31,30,31,31,30,31,30,31)
	if(newValue==1){
		milisegundos=(90*24*60*60*1000);
		globals.per_13_fec=globals.per_15_fec.getTime()
		globals.per_13_fec=globals.per_13_fec.setTime(globals.per_13_fec+milisegundos)
		var anio_fin = globals.per_15_fec.getFullYear()
		var mes_fin = globals.per_15_fec.getMonth()
		var dia_fin = globals.per_15_fec.getDate()
		if(mes_fin >= 9){
			mes_fin = mes_fin + 3 - 12
			anio_fin++
		}else{
			mes_fin = mes_fin + 3
		}
		if(dia_fin == 1){
			mes_fin--
			dia_fin = fin_mes[mes_fin]
		}else{
			dia_fin--
		}
		globals.per_13_fec=globals.per_13_fec.setFullYear(anio_fin)
		globals.per_13_fec=globals.per_13_fec.setMonth(mes_fin)
		globals.per_13_fec=globals.per_13_fec.setDate(dia_fin)
		elements.per_13.editable=false
		elements.per_13.enabled=false
		elements.per_tipo_personal.requestFocus()
	}else{
		if(newValue==4){
			milisegundos=(365*24*60*60*1000);
			globals.per_13_fec=globals.per_15_fec.getTime()
			globals.per_13_fec=globals.per_13_fec.setTime(globals.per_13_fec+milisegundos)
			elements.per_13.editable=false
			elements.per_13.enabled=false
			elements.per_tipo_personal.requestFocus()
		}else{
			elements.per_13.editable=true
			elements.per_13.enabled=true
			elements.per_13.requestFocus()
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
 * @properties={typeid:24,uuid:"05A3BA55-2AA3-4F73-98F8-BBDCF1C830D9"}
 */
function onDataChange_sindicato(oldValue, newValue, event) {
	if(newValue==1){
		globals.per_pesos_ex=0
		elements.per_pesos_ex.enabled=false
		elements.per_pesos_ex.editable=false
	}else{
		globals.per_pesos_ex=null
		elements.per_pesos_ex.enabled=true
		elements.per_pesos_ex.editable=true
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
 * @properties={typeid:24,uuid:"472CE5AE-C6A5-4A86-9718-8BDBEFEFAB5A"}
 */
function onDataChange_residente(oldValue, newValue, event) {
	if(newValue==1){
		elements.per_tipo_residencia_label.visible=true
		elements.per_tipo_residencia.visible=true
		elements.per_tipo_residencia.requestFocus()
	}else{
		globals.per_tipo_residencia=0
		elements.per_tipo_residencia_label.visible=false
		elements.per_tipo_residencia.visible=false
		elements.per_tipo_residencia.requestFocus()
	}
	return true
}

/**
 * Handle focus gained event of the element.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"F65351E3-DDCD-4E24-8FC7-28EE77DFF65B"}
 */
function onFocusGained_cuota_solidaria(event) {
	if(globals.per_22==1){
		globals.per_pesos_ex=0
		elements.per_feriado.requestFocus()
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
 * @properties={typeid:24,uuid:"9C5E442E-BC3A-49EF-B5C5-358B177AFB6D"}
 */
function onDataChange_per_52(oldValue, newValue, event) {
	if (newValue==0){
		globals.per_nrocta=0
		globals.per_55_bco=0
		globals.per_55_cta=0
		
		elements.per_nrocta.enabled=false
		elements.per_55_bco.enabled=false
		elements.per_55_cta.enabled=false
		//elements.per_20.requestFocus()
	}else{
		if(newValue==9&&globals.tit_estado_tratamiento=='Alta'){//Banco Ciudad x Cirendsa
			globals.per_nrocta=0
			globals.per_55_bco=0
			globals.per_55_cta=0
			
			elements.per_nrocta.enabled=false
			elements.per_55_bco.enabled=false
			elements.per_55_cta.enabled=false
		}
	}
	return true
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"7FDB08D8-6EAE-4673-AEC3-3E8F44225BE3"}
 */
function onAction_per_52(event) {
	if (globals.per_52==0){
		globals.per_nrocta=0
		globals.per_55_bco=0
		globals.per_55_cta=0
		
		elements.per_nrocta.enabled=false
		elements.per_55_bco.enabled=false
		elements.per_55_cta.enabled=false
		//elements.per_20.requestFocus()
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
 * @properties={typeid:24,uuid:"A1FB8068-C3B2-4A92-8FD3-F6B3F9A0713A"}
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
 * @properties={typeid:24,uuid:"9EF13036-5AC5-49F2-8404-61BB2DDD7BC8"}
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
 * Handle changed data.
 *
 * @param {Number} oldValue old value
 * @param {Number} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"0901E6A6-6BC2-4BF6-891B-DD1024E7B55C"}
 */
function onDataChange_per_tipo_personal(oldValue, newValue, event) {
	elements.per_tipo_atencion.requestFocus()
	return true
}

/**
 * @param {Number} oldValue old value
 * @param {Number} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 * @properties={typeid:24,uuid:"DB86AB47-944C-4B4E-A4A9-E1FDC50EF858"}
 */
function onDataChange_per_tipo_atencion(oldValue, newValue, event) {
	elements.per_23.requestFocus()
	return true
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"1E97B580-0E6B-4A0A-A40D-0FABE16A97EC"}
 */
function onAction_btn_histo_bancocobro(event) {
	globals.dat_per_tipo='per_52'
	var win = application.createWindow("c",JSWindow.MODAL_DIALOG);
	win.title = "Historial Banco de Cobro";
	win.show(forms.frm_tab_rrhh_hist_datos_pers);
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"4D5437BD-CE03-4923-95CE-7C53FCA5CF70"}
 */
function onActionbtn_histo_nrocta(event) {
	globals.dat_per_tipo='per_nrocta'
	var win = application.createWindow("c",JSWindow.MODAL_DIALOG);
	win.title = "Historial Número de Cuenta";
	win.show(forms.frm_tab_rrhh_hist_datos_pers);
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"C9FA59A4-4FF1-4D1E-B7A4-9363F266E3A1"}
 */
function onActionbtn_histo_cbu(event) {
	globals.dat_per_tipo='per_55_str'
	var win = application.createWindow("c",JSWindow.MODAL_DIALOG);
	win.title = "Historial Número de C.B.U.";
	win.show(forms.frm_tab_rrhh_hist_datos_pers);
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
 * @properties={typeid:24,uuid:"ED1CDD91-8FBB-4921-BABA-A8CEBAFF9149"}
 * @AllowToRunInFind
 */
function onDataChange_per_23(oldValue, newValue, event) {
	if(newValue==0){
		plugins.dialogs.showErrorDialog("Error en Ingreso de Obra Social","Debe ingresar un código de Obra Social válido")
		return false
	}else{
		var fs = databaseManager.getFoundSet("rrhh","tbc_obras_pers")
		fs.find()
		fs['obpobra']=globals.per_23
		fs.search()
		if(fs.getSize()>0){
				fs.setSelectedIndex(1)
			    globals.per_27=fs['obpplan']
				return true
			
		}else{
			plugins.dialogs.showErrorDialog("Error en Ingreso de Obra Social","Obra Social inexistente - Debe ingresar un código de Obra Social válido")
			return false
		}
	}
}

/**
 * @properties={typeid:24,uuid:"471C2768-59AD-444A-A4FA-51F6E51329BF"}
 * @AllowToRunInFind
 */
function validaObraSocial() {
	var fs = databaseManager.getFoundSet("rrhh","tbc_obras_pers")
	fs.find()
	fs['obpobra']=globals.per_23
	fs.search()
	if(fs.getSize()>0){
			fs.setSelectedIndex(1)
		    globals.per_27=fs['obpplan']
			return true
		
	}else{
		plugins.dialogs.showErrorDialog("Error en Ingreso de Obra Social","Obra Social inexistente - Debe ingresar un código de Obra Social válido")
		return false
	}
}
