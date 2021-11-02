/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"A8E45F7C-16B3-406C-8CA5-68F9636E38F1"}
 */
function onAction_btn_consulta(event) {
	var frm = currentcontroller.getName()
	switch (frm){
		case 'frm_abm_legajo':elements.btn_nuevo.enabled=false;
		                    elements.lbl_nuevo.enabled=false;
		                    elements.btn_modifica.enabled=false;
		                    elements.lbl_modifica.enabled=false;
		                    elements.btn_graba.enabled=false;
		                    elements.lbl_graba.enabled=false;
		                    application.updateUI()
							
							forms.frm_abm_legajo.fLega=globals.vLega
							  forms.frm_abm_legajo.fLegajo=globals.vLegajo
							  forms.frm_abm_legajo.fOperador=globals.vOperador
							  forms.frm_abm_legajo.fOperadorActual=globals.vOperador
							  forms.frm_abm_legajo.fTipoOperador=globals.vTipoOperador
							  globals.limpiaVariablesGlobales();
							  globals.vLega=forms.frm_abm_legajo.fLega
								globals.vLegajo=forms.frm_abm_legajo.fLegajo
								globals.vOperador=forms.frm_abm_legajo.fOperador
								globals.vOperadorActual=forms.frm_abm_legajo.fOperadorActual
								globals.vTipoOperador=forms.frm_abm_legajo.fTipoOperador
							
		                    globals.per_foto=plugins.images.getImage('c:\\temp\\fr_sin_foto_H.png')
							//globals.per_firma=plugins.images.getImage('c:\\temp\\FIRMA_DRA_CAMARA_2.gif').resize(120,120)
							globals.tit_solucion="Tratamiento de Legajo de Personal"
							globals.tit_estado_tratamiento="Consulta"
			                var win = application.createWindow("c",JSWindow.MODAL_DIALOG);
							win.title = "Búsqueda de Legajo";
							win.show(forms.frm_tab_personal_rrhh);
							if(globals.per_1!=0&&globals.per_1!=null){
								globals.tit_estado_tratamiento="Consulta"
								forms.frm_abm_legajo.elements.tabs.enabled=true;
								forms.frm_abm_legajo.habilitaDeshabilita();
								forms.frm_abm_legajo.muestraLegajo();
								forms.frm_abm_legajo.elements.fld_per1.enabled=false;
								forms.frm_nav_top_1.elements.btn_modifica.enabled=true;
								forms.frm_nav_top_1.elements.lbl_modifica.enabled=true;
							}else{
								elements.btn_nuevo.enabled=true;
			                    elements.lbl_nuevo.enabled=true;
			                    elements.btn_modifica.enabled=true;
			                    elements.lbl_modifica.enabled=true;
			                    forms.frm_abm_legajo.elements.fld_per1.enabled=true;
			                    globals.tit_estado_tratamiento=""
			                    application.updateUI()
							};
							break;
		default:break;
							
	}
	
	
	

}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"AE777BC8-A397-4357-9E96-C19B099E70D6"}
 */
function onAction_btn_nuevo(event) {
	var frm = currentcontroller.getName()
	switch (frm){
		case 'frm_abm_legajo':elements.btn_nuevo.enabled=false;
		                    elements.lbl_nuevo.enabled=false;
		                    elements.btn_modifica.enabled=false;
		                    elements.lbl_modifica.enabled=false;
		                    elements.btn_graba.enabled=false;
		                    elements.lbl_graba.enabled=false;
		                    elements.btn_consulta.enabled=false;
		                    elements.lbl_consulta.enabled=false;
		                    application.updateUI()
							
							forms.frm_abm_legajo.fLega=globals.vLega
							  forms.frm_abm_legajo.fLegajo=globals.vLegajo
							  forms.frm_abm_legajo.fOperador=globals.vOperador
							  forms.frm_abm_legajo.fOperadorActual=globals.vOperador
							  forms.frm_abm_legajo.fTipoOperador=globals.vTipoOperador
							  globals.limpiaVariablesGlobales();
							  globals.vLega=forms.frm_abm_legajo.fLega
								globals.vLegajo=forms.frm_abm_legajo.fLegajo
								globals.vOperador=forms.frm_abm_legajo.fOperador
								globals.vOperadorActual=forms.frm_abm_legajo.fOperadorActual
								globals.vTipoOperador=forms.frm_abm_legajo.fTipoOperador
		                    
		                    globals.per_foto=plugins.images.getImage('c:\\temp\\fr_sin_foto_H.png')
							//globals.per_firma=plugins.images.getImage('c:\\temp\\FIRMA_DRA_CAMARA_2.gif').resize(120,120)
							globals.tit_solucion="Tratamiento de Legajo de Personal"
							globals.tit_estado_tratamiento="Alta"
			               
							globals.gHistCabNroUnico=0
							var win = application.createWindow("c",JSWindow.MODAL_DIALOG);
							win.title = "Búsqueda de Historia Clinica en Preocupacional";
							win.show(forms.frm_scr_hist_cab);
							forms.frm_abm_legajo.habilitaDeshabilita();
							forms.frm_abm_legajo.elements.tabs.enabled=true;
							forms.frm_abm_legajo.elements.fld_per1.enabled=false;
							forms.frm_abm_legajo.cargoDatosHistCab()
							forms.frm_datos_personales.elements.per_106_grupo.requestFocus()
							break;
		default:break;
							
	}
	
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"C5D54A75-5EE3-41C5-8C5B-9F19E26983CC"}
 */
function onAction_btn_cancela(event) {
	var frm = currentcontroller.getName()
	switch (frm){
		case 'frm_abm_legajo':elements.btn_nuevo.enabled=true;
			                  elements.lbl_nuevo.enabled=true;
			                  elements.btn_modifica.enabled=false;
			                  elements.lbl_modifica.enabled=false;
							  forms.frm_abm_legajo.inicializoFrmLegajo();
							  forms.frm_abm_legajo.fLega=globals.vLega
							  forms.frm_abm_legajo.fLegajo=globals.vLegajo
							  forms.frm_abm_legajo.fOperador=globals.vOperador
							  forms.frm_abm_legajo.fOperadorActual=globals.vOperador
							  forms.frm_abm_legajo.fTipoOperador=globals.vTipoOperador
							  globals.limpiaVariablesGlobales();
							  globals.vLega=forms.frm_abm_legajo.fLega
								globals.vLegajo=forms.frm_abm_legajo.fLegajo
								globals.vOperador=forms.frm_abm_legajo.fOperador
								globals.vOperadorActual=forms.frm_abm_legajo.fOperadorActual
								globals.vTipoOperador=forms.frm_abm_legajo.fTipoOperador
							  globals.per_foto=plugins.images.getImage('c:\\temp\\fr_sin_foto_H.png')
							  //globals.per_firma=plugins.images.getImage('c:\\temp\\FIRMA_DRA_CAMARA_2.gif').resize(120,120)
							  globals.tit_solucion="Tratamiento de Legajo de Personal"
							  globals.tit_estado_tratamiento=""  
							  forms.frm_abm_legajo.elements.fld_per1.enabled=true;
							  application.updateUI();
							  
			                  break;
		default:break;
							
	}
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"144EDBB7-018C-4A25-87CF-EED03FDF7847"}
 */
function onAction_btn_salir(event) {
	var frm = currentcontroller.getName()
	switch (frm){
		case 'frm_abm_legajo':application.exit();break;
		default:break;
							
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"14C9610D-6C84-4E3C-9823-6DF33534B49C"}
 */
function onAction_btn_graba(event) {
	var frm = currentcontroller.getName()
	switch (frm){
		case 'frm_abm_legajo':elements.btn_nuevo.enabled=false;
		                    elements.lbl_nuevo.enabled=false;
		                    elements.btn_modifica.enabled=false;
		                    elements.lbl_modifica.enabled=false;
		                    elements.btn_graba.enabled=false;
		                    elements.lbl_graba.enabled=false;
		                    elements.btn_consulta.enabled=false;
		                    elements.lbl_consulta.enabled=false;
		                    globals.validoNroLegajo();
		                    globals.per_105_1=globals.per_apellido.substr(0,8)
							globals.per_10_1=globals.per_apellido.substr(0,8)
							globals.per_11_1=globals.per_apellido.substr(0,8)
							globals.per_15_1=globals.per_apellido.substr(0,8)
							globals.per_16_1=globals.per_apellido.substr(0,8)
							globals.per_18_1=globals.per_apellido.substr(0,8)
							globals.per_19_1=globals.per_apellido.substr(0,8)
							globals.per_23_1=globals.per_apellido.substr(0,8)
							globals.per_10=per_84_to_tbc_puesto.pto2
							globals.per_11=per_84_to_tbc_puesto.pto4
							globals.per_19=vsector_to_tbc_sector.sector18
							var mes=0
							var mes_ed=''
							var dia=0
							var dia_ed=''
							if(globals.per_13_fec==null){
								globals.per_13=0
							}else{
								mes=globals.per_13_fec.getMonth()+1
								dia=globals.per_13_fec.getDate()
								if(mes<10){
									mes_ed='0'+mes
								}else{
									mes_ed=mes
								}
								if(dia<10){
									dia_ed='0'+dia
								}else{
									dia_ed=dia
								}
								globals.per_13=globals.per_13_fec.getFullYear().toString()+''+mes_ed.toString()+''+dia_ed.toString()
							}
							mes=0
							dia=0
							mes_ed=''
							dia_ed=''
							if(globals.per_15_fec==null){
								globals.per_15=0
							}else{
								mes=globals.per_15_fec.getMonth()+1
								dia=globals.per_15_fec.getDate()
								if(mes<10){
									mes_ed='0'+mes
								}else{
									mes_ed=mes
								}
								if(dia<10){
									dia_ed='0'+dia
								}else{
									dia_ed=dia
								}
								globals.per_15=globals.per_15_fec.getFullYear().toString()+''+mes_ed.toString()+''+dia_ed.toString()
							}
							mes=0
							dia=0
							mes_ed=''
							dia_ed=''
							if(globals.per_17_8_fec==null){
								globals.per_17_8=0
							}else{
								mes=globals.per_17_8_fec.getMonth()+1
								dia=globals.per_17_8_fec.getDate()
								if(mes<10){
									mes_ed='0'+mes
								}else{
									mes_ed=mes
								}
								if(dia<10){
									dia_ed='0'+dia
								}else{
									dia_ed=dia
								}
								globals.per_17_8=globals.per_17_8_fec.getFullYear().toString()+''+mes_ed.toString()+''+dia_ed.toString()
							}
							if(globals.per_19==1||globals.per_19==2||globals.per_19==3||globals.per_19==5){
								globals.per_105=1
							}else{
								globals.per_105=globals.per_19
							}
							
							globals.per_16=0
							globals.per_44=0
							globals.per_57=0
							globals.per_102=0
							globals.mpass=0
							globals.per_confidencial= " "
							globals.per_tty_mod= " "
							globals.per_107=0
							globals.per_113=0
							globals.per_1er_trabajo=0
							globals.per_21=0
							globals.per_40=0
							globals.per_43=0
							globals.per_79=0
							globals.per_anmat=0
							globals.per_casa_nac=0
							globals.per_fec_mod=0
							globals.per_hor_mod=0
							globals.per_jefe=0
							globals.per_lega_mod=0
							globals.per_modalidad=0
							globals.per_mpass=0
							globals.per_tipo_mod=0
		                    if (globals.per_1>0){
		                		per_1_to_tbc_personal_rrhh.newRecord()
		                		globals.InicializarDatosDeRelacion(per_1_to_tbc_personal_rrhh,"rrhh","tbc_personal_rrhh")
		                		var name=''
		                		
		                		for(var i=0;i<per_1_to_tbc_personal_rrhh.alldataproviders.length;i++){
		                			name=per_1_to_tbc_personal_rrhh.alldataproviders[i]
		                			per_1_to_tbc_personal_rrhh[name]=globals[name]
		                			//application.output(name)
									//application.output(per_1_to_tbc_personal_rrhh[name])
		                		}
		                		
		                		
		                		databaseManager.saveData(per_1_to_tbc_personal_rrhh.getRecord(1))
		                	}
							break;
		default:break;
							
	}
}
