/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"26621ACB-DE53-485C-A2AB-692E1BFA4FD6",variableType:4}
 */
var f_total_test = 0;

/**
 * Handle changed data.
 *
 * @param {Number} oldValue old value
 * @param {Number} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"142BD588-4AD6-4068-980F-D714B793EA4C"}
 */
function onDataChange_tests(oldValue, newValue, event) {
	f_total_test = 0
	testresult_wells_aux = ''
	if (test_si_no == 0)
	{
		testcancer = 0
		testdiagverosimil = 0
		testedema = 0
		testedemafovea = 0
		testhichazon = 0
		testhipersensi = 0
		testparalisis = 0
		testpostracion= 0
		testvenasnovari = 0
		testdimerod = 0
		elements.cancer.enabled     = false
		elements.edema.enabled      = false 
		elements.edemafovea.enabled = false
		elements.hichazon.enabled   = false
		elements.hipersensi.enabled = false
		elements.paralisis.enabled  = false
		elements.postracion.enabled = false
		elements.venas_no_vari.enabled = false
		elements.verosimil.enabled  = false
		elements.dimero.enabled     = false
	}
	else
	{
		elements.cancer.enabled     = true
		elements.edema.enabled      = true 
		elements.edemafovea.enabled = true
		elements.hichazon.enabled   = true
		elements.hipersensi.enabled = true
		elements.paralisis.enabled  = true
		elements.postracion.enabled = true
		elements.venas_no_vari.enabled = true
		elements.verosimil.enabled  = true
		elements.dimero.enabled     = true
}
	return true
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"F8F8F2EE-52C2-4BBA-B481-5DBC3A5120AD"}
 */
function onShow(firstShow, event) {
if  (histpacmotivo == '' ||
	histpacmotivo == null ||
	histpacmotivo == ' ')		
	{forms.AtCons_carga.elements.tabs.setTabFGColorAt(1, '#E60026')}
else{forms.AtCons_carga.elements.tabs.setTabFGColorAt(1,  '#000000')}	
	f_total_test = 0
	
	// testresult_wells_aux= ''
	if (test_si_no == 1 ) 
	{	elements.cancer.enabled     = true
		elements.edema.enabled      = true 
		elements.edemafovea.enabled = true
		elements.hichazon.enabled   = true
		elements.hipersensi.enabled = true
		elements.paralisis.enabled  = true
		elements.postracion.enabled = true
		elements.venas_no_vari.enabled = true
		elements.verosimil.enabled  = true
		elements.dimero.enabled     = true}
	/*
		if(forms.AtCons_carga.f_tiene_consulta){
			//forms.AtCons_carga_motivo.elements.histpacmotivo.requestFocus()
			if  (histpacmotivo == null){
				forms.AtCons_carga.elements.tabs.setTabFGColorAt(1, '#E60026')
			}else{
				if  (histpacmotivo == '' || histpacmotivo == ' '){		
					forms.AtCons_carga.elements.tabs.setTabFGColorAt(1, '#E60026')
				}else{
					forms.AtCons_carga.elements.tabs.setTabFGColorAt(1, '#000000')
				}
			}
			if  (histpacdiagno == null){
				forms.AtCons_carga.elements.tabs.setTabFGColorAt(3, '#E60026')
			}else{
				if  (histpacdiagno == '' ||	histpacdiagno == ' '){		
					forms.AtCons_carga.elements.tabs.setTabFGColorAt(3, '#E60026')
				}else{
					forms.AtCons_carga.elements.tabs.setTabFGColorAt(3,  '#000000')
				}
			}

		 	if  (histpactratam == null){
		 		forms.AtCons_carga.elements.tabs.setTabFGColorAt(4, '#E60026')
		 	}else{
		 	 	if  (histpactratam == '' ||	histpactratam == ' '){
		 	 		forms.AtCons_carga.elements.tabs.setTabFGColorAt(4, '#E60026')
		 	 	}else{
		 	 		forms.AtCons_carga.elements.tabs.setTabFGColorAt(4, '#000000')
		 	 	}
		 	}
			forms.AtCons_carga.elements.tabs.tabIndex=1
			forms.AtCons_carga.controller.focusFirstField()
		}else{
			//forms.AtCons_carga_informe.controller.focusFirstField()
			forms.AtCons_carga.elements.tabs.tabIndex=7
			forms.AtCons_carga.controller.focusFirstField()
		}

		if  (histpacmotivo == '' ||   
			histpacmotivo == null ||
			histpacmotivo == ' ')		
			{forms.AtCons_carga.elements.tabs.setTabFGColorAt(1, '#E60026')}
		else{forms.AtCons_carga.elements.tabs.setTabFGColorAt(1, '#000000')}

		if  (histpacdiagno == '' ||
		 	histpacdiagno == null ||
		 	histpacdiagno == ' ')		
		 {forms.AtCons_carga.elements.tabs.setTabFGColorAt(3, '#E60026')}
		else{forms.AtCons_carga.elements.tabs.setTabFGColorAt(3,  '#000000')}

		if  (histpactratam == '' ||
			histpactratam == null ||
			histpactratam == ' ')		
		{forms.AtCons_carga.elements.tabs.setTabFGColorAt(4, '#E60026')}
		else{forms.AtCons_carga.elements.tabs.setTabFGColorAt(4, '#000000')}
		forms.AtCons_carga.f_cerrarForm = false


		forms.AtCons_carga.elements.btn_cefalea.visible=false
		forms.AtCons_carga.elements.btn_cefalea.enabled=false		
		if(atcons_vs_to_tbc_reservas_nrohist.reservasesp==365){
			forms.AtCons_carga.elements.btn_cefalea.visible=true
			forms.AtCons_carga.elements.btn_cefalea.enabled=true
		}

		forms.AtCons_carga.elements.tabs.setTabEnabledAt(7,false)
		if(atcons_vs_to_tbc_reservas_nrohist.reservasipedido!=0){
			forms.AtCons_carga.elements.tabs.setTabEnabledAt(7,true)
			forms.AtCons_carga.f_tiene_consulta=false
			globals.AtCons_nroPedido=atcons_vs_to_tbc_reservas_nrohist.reservasipedido
			globals.AtCons_servicio=atcons_vs_to_tbc_reservas_nrohist.reservasservicio
			
			if(atcons_reservas_to_tbc_resecod.getSize()>1){
				for(var ii=1;ii<=atcons_reservas_to_tbc_resecod.getSize()&&!forms.AtCons_carga.f_tiene_consulta;ii++){
					atcons_reservas_to_tbc_resecod.setSelectedIndex(ii)
					if(atcons_reservas_to_tbc_resecod.resecodnumcod==420101){
						forms.AtCons_carga.f_tiene_consulta=true
					}
				}
			}else{
				forms.AtCons_carga.f_tiene_consulta=false
			}
		}else{
			globals.AtCons_nroPedido=0
			globals.AtCons_servicio=0
			forms.AtCons_carga.f_tiene_consulta=true
		}

		var j=0
		if(forms.AtCons_carga.f_tiene_consulta==true){
			for(j=1;j<=6;j++){
				forms.AtCons_carga.elements.tabs.setTabEnabledAt(j,true)
			}
		}else{
			for(j=1;j<=6;j++){
				forms.AtCons_carga.elements.tabs.setTabEnabledAt(j,false)
			}
		}
	*/
		
	elements.histpacmotivo.requestFocus()
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
 * @properties={typeid:24,uuid:"57B9AD16-2EDD-4767-9FF3-627C61C0F420"}
 */
function onDataChange_verosimil(oldValue, newValue, event) {
	if (testdiagverosimil == 1)
	{f_total_test = f_total_test - 2 }
	else 
	{f_total_test = f_total_test + 2 }
	cartel_probabilidad()
	return true
}

/**
 * @properties={typeid:24,uuid:"665576B0-81C4-4DCC-9525-1874EEA40302"}
 */
function onDataChange_checks_varios($campo) {
	if ($campo == 1)
	{f_total_test++ }
	else
	{f_total_test--}
	cartel_probabilidad()
	return true
}

/**
 * @properties={typeid:24,uuid:"0FB193C2-2B95-4FED-AA70-FAC23FD26516"}
 */
function cartel_probabilidad() {
	testresult_wells_aux =''
	if (f_total_test > 2)
	{testresult_wells_aux = 'Alta probabilidad     '  }
	else 
	{if (f_total_test < 1)
		{testresult_wells_aux = 'Baja probabilidad     '  }
		else
		{testresult_wells_aux = 'Probabilidad moderada '  }	
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
 * @properties={typeid:24,uuid:"121C70CD-FCDF-48AC-85B4-5EDCDC0900F3"}
 */
function onDataChange_cancer(oldValue, newValue, event) {
	onDataChange_checks_varios(testcancer)
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
 * @properties={typeid:24,uuid:"8D7D6810-ECB9-4CD9-BB45-1E2405389752"}
 */
function onDataChange_paralisis(oldValue, newValue, event) {
	onDataChange_checks_varios(testparalisis)
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
 * @properties={typeid:24,uuid:"09606E4B-561A-464B-8314-A1EEB2C7B4F7"}
 */
function onDataChange_postracion(oldValue, newValue, event) {
	onDataChange_checks_varios(testpostracion)
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
 * @properties={typeid:24,uuid:"FFCBA747-4FD5-4837-81C5-2F6B0015B8E2"}
 */
function onDataChange_hipersensi(oldValue, newValue, event) {
	onDataChange_checks_varios(testhipersensi)
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
 * @properties={typeid:24,uuid:"82243E9C-A9AA-4B40-839B-4ECA0884A7DA"}
 */
function onDataChange_edema(oldValue, newValue, event) {
	onDataChange_checks_varios(testedema)
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
 * @properties={typeid:24,uuid:"80D92CB0-2045-405F-AD71-2677FA65B3FF"}
 */
function onDataChange_hichazon(oldValue, newValue, event) {
	onDataChange_checks_varios(testhichazon)
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
 * @properties={typeid:24,uuid:"5DCA84EE-F8E4-4417-B227-686FE426B522"}
 */
function onDataChange_edema_fovea(oldValue, newValue, event) {
	onDataChange_checks_varios(testedemafovea)
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
 * @properties={typeid:24,uuid:"4CD9376F-FD17-40AB-B02B-899E66164835"}
 */
function onDataChange_venas(oldValue, newValue, event) {
	onDataChange_checks_varios(testvenasnovari)
	return true
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"2838DA23-06D4-4C35-BEC4-956F74F3AD41"}
 */
function onAction_motivo(event) {
if  (forms.AtCons_carga_motivo.histpacmotivo == '' ||
	 forms.AtCons_carga_motivo.histpacmotivo == null ||
	 forms.AtCons_carga_motivo.histpacmotivo == ' ')		
	{forms.AtCons_carga.elements.tabs.setTabFGColorAt(1, '#E60026')}
else{forms.AtCons_carga.elements.tabs.setTabFGColorAt(1, '#000000')}
}
