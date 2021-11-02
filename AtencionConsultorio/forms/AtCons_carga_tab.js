
/**
 * Handle hide window.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"5EF39025-600C-49FE-8554-05D908019654"}
 */
function onHide(event) {
	return false
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"CDC8A92E-BE54-4AB7-916B-9F5814BC07AD"}
 */
function onShow_atcons_carga_tab(firstShow, event) {
	var ing = atcons_vs_to_atcons_histpac_ing
	forms.AtCons_carga.elements.tabs.setTabEnabledAt(7,false)
	if(atcons_vs_to_tbc_reservas_nrohist.reservasipedido!=0){
		forms.AtCons_carga.elements.tabs.setTabEnabledAt(7,true)
		globals.AtCons_tiene_consulta=false
		globals.AtCons_nroPedido=atcons_vs_to_tbc_reservas_nrohist.reservasipedido
		globals.AtCons_servicio=atcons_vs_to_tbc_reservas_nrohist.reservasservicio
		
		if(atcons_reservas_to_tbc_resecod.getSize()>1){
			for(var ii=1;ii<=atcons_reservas_to_tbc_resecod.getSize()&&!globals.AtCons_tiene_consulta;ii++){
				atcons_reservas_to_tbc_resecod.setSelectedIndex(ii)
				if(atcons_reservas_to_tbc_resecod.resecodnumcod==420101){
					globals.AtCons_tiene_consulta=true
				}
			}
		}else{
			globals.AtCons_tiene_consulta=false
		}
	}else{
		globals.AtCons_nroPedido=0
		globals.AtCons_servicio=0
		globals.AtCons_tiene_consulta=true
	}

	if(globals.AtCons_tiene_consulta){
		//forms.AtCons_carga_motivo.elements.histpacmotivo.requestFocus()
		if  (ing.histpacmotivo == null || ing.histpacmotivo == '' || ing.histpacmotivo == ' '){		
				forms.AtCons_carga.elements.tabs.setTabFGColorAt(1, '#E60026')
		}else{
				forms.AtCons_carga.elements.tabs.setTabFGColorAt(1, '#000000')
		}
		if  (ing.histpacdiagno == null || ing.histpacdiagno == '' ||	ing.histpacdiagno == ' '){		
				forms.AtCons_carga.elements.tabs.setTabFGColorAt(3, '#E60026')
		}else{
				forms.AtCons_carga.elements.tabs.setTabFGColorAt(3,  '#000000')
		}

	 	if  (ing.histpactratam == null || ing.histpactratam == '' ||	ing.histpactratam == ' '){
	 	 		forms.AtCons_carga.elements.tabs.setTabFGColorAt(4, '#E60026')
 	 	}else{
	 	 		forms.AtCons_carga.elements.tabs.setTabFGColorAt(4, '#000000')
	 	}
	 	
		forms.AtCons_carga.elements.tabs.tabIndex=1
		forms.AtCons_carga.controller.focusFirstField()
		
	}else{
		forms.AtCons_carga.elements.tabs.setTabEnabledAt(7,true)
		forms.AtCons_carga.elements.tabs.tabIndex=7
		forms.AtCons_carga.controller.focusFirstField()
	}

	if  (ing.histpacmotivo == '' ||   
		ing.histpacmotivo == null ||
		ing.histpacmotivo == ' ')		
		{forms.AtCons_carga.elements.tabs.setTabFGColorAt(1, '#E60026')}
	else{forms.AtCons_carga.elements.tabs.setTabFGColorAt(1, '#000000')}

	if  (ing.histpacdiagno == '' ||
	 	ing.histpacdiagno == null ||
	 	ing.histpacdiagno == ' ')		
	 {forms.AtCons_carga.elements.tabs.setTabFGColorAt(3, '#E60026')}
	else{forms.AtCons_carga.elements.tabs.setTabFGColorAt(3,  '#000000')}

	if  (ing.histpactratam == '' ||
		ing.histpactratam == null ||
		ing.histpactratam == ' ')		
	{forms.AtCons_carga.elements.tabs.setTabFGColorAt(4, '#E60026')}
	else{forms.AtCons_carga.elements.tabs.setTabFGColorAt(4, '#000000')}
	//f_cerrarForm = false


	forms.AtCons_carga.elements.btn_cefalea.visible=false
	forms.AtCons_carga.elements.btn_cefalea.enabled=false		
	if(atcons_vs_to_tbc_reservas_nrohist.reservasesp==365){
		forms.AtCons_carga.elements.btn_cefalea.visible=true
		forms.AtCons_carga.elements.btn_cefalea.enabled=true
	}




	var j=0
	if(globals.AtCons_tiene_consulta){
		for(j=1;j<=6;j++){
			forms.AtCons_carga.elements.tabs.setTabEnabledAt(j,true)
		}
	}else{
		for(j=1;j<=6;j++){
			forms.AtCons_carga.elements.tabs.setTabEnabledAt(j,false)
		}
	}

	//elements.tabless_1.enabled=false
	if(globals.AtCons_servicio!=null&&globals.AtCons_servicio!=0){
		if(atcons_to_tbc_servicios.servpatologico!=1){
			if(atcons_vs_to_atcons_imapedet_inf.getSize()>0){
				atcons_vs_to_atcons_imapedet_inf.setSelectedIndex(1)
				globals.AtCons_patologico=atcons_vs_to_atcons_imapedet_inf.imapedipatologico
			}else{
				globals.AtCons_patologico=0
			}
			forms.AtCons_carga_informe.elements.patologico_lbl.visible=true
			forms.AtCons_carga_informe.elements.patologico_cbo.visible=true
		}else{
			forms.AtCons_carga_informe.elements.patologico_lbl.visible=false
			forms.AtCons_carga_informe.elements.patologico_cbo.visible=false
			globals.AtCons_patologico=1
		}
	}else{
		forms.AtCons_carga_informe.elements.patologico_lbl.visible=false
		forms.AtCons_carga_informe.elements.patologico_cbo.visible=false
		globals.AtCons_patologico=0
	}
	forms.AtCons_carga_tab.elements.tabless.tabIndex=2
	application.updateUI()
}

/**
 * Callback method for when form is shown.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"95B0A8D7-F32F-4BAC-80D8-05390B5BEB78"}
 */
function onShow_carga_tabNew(event) {
	elements.tabless.tabIndex=2
}
