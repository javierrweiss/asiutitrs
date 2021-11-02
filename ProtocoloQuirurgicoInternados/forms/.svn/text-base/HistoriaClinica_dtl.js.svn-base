/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"D9ED8221-2EC8-47D5-96A3-E7EEA2B84495"}
 */
function onShow_HistoriaClinica(firstShow, event) {
	elements.btn_graba_hcicir.visible=true
	gbl_protocolo_to_tbc_hcicir_new.loadAllRecords()
	//if(vhiscli_unico_to_tbc_admision_scroll.tbc_admision_scroll_to_tbc_hcicir_new.getSize()<1){
		//vhiscli_unico_to_tbc_admision_scroll.tbc_admision_scroll_to_tbc_hcicir_new.newRecord()
		//globals.InicializarDatosDeRelacion(vhiscli_unico_to_tbc_admision_scroll.tbc_admision_scroll_to_tbc_hcicir_new,"asistencial","tbc_hcicir_new")
	if(gbl_protocolo_to_tbc_hcicir_new.getSize()<1){
		//gbl_protocolo_to_tbc_hcicir_new.newRecord()
		if(gbl_hiscli_to_tbc_hcicir_new.getSize()>0){
			var win2 = application.createWindow("hcicir",JSWindow.MODAL_DIALOG)
			win2.title = "Historias Clinicas de Ingreso a Cirugía Sin Protocolo Asignado";
			win2.setSize(460,330)
			win2.resizable=false
			win2.show(forms.frm_tab_hcicir)
			if (globals.vFechaHcir!=0 && globals.vHoraHcir!=0){
				globals.InitializarCheks("HistoriaClinica_dtl")
				if(forms.HistoriaClinica_dtl.foundset.hciralerta!=1){
					globals.hcicirtxt1=''
					elements.tab_hcir.setTabEnabledAt(1,false)
				}else{
					elements.tab_hcir.setTabEnabledAt(1,true)
					globals.hcicirtxt1=globals.MostrarTextoCargadoHCIR(globals.vHiscli,globals.vFechaHcir,globals.vHoraHcir,1)
				}
				if(forms.HistoriaClinica_dtl.foundset.hcirotros!=1){
					globals.hcicirtxt2=''
					elements.tab_hcir.setTabEnabledAt(2,false)
				}else{
					elements.tab_hcir.setTabEnabledAt(2,true)
					globals.hcicirtxt2=globals.MostrarTextoCargadoHCIR(globals.vHiscli,globals.vFechaHcir,globals.vHoraHcir,2)
				}
				if(forms.HistoriaClinica_dtl.foundset.hcirriesgo!=1){
					globals.hcicirtxt3=''
					elements.tab_hcir.setTabEnabledAt(3,false)
				}else{
					elements.tab_hcir.setTabEnabledAt(3,true)
					globals.hcicirtxt3=globals.MostrarTextoCargadoHCIR(globals.vHiscli,globals.vFechaHcir,globals.vHoraHcir,3)
				}
				if(forms.HistoriaClinica_dtl.foundset.hcirrx!=1){
					globals.hcicirtxt4=''
					elements.tab_hcir.setTabEnabledAt(4,false)
				}else{
					elements.tab_hcir.setTabEnabledAt(4,true)
					globals.hcicirtxt4=globals.MostrarTextoCargadoHCIR(globals.vHiscli,globals.vFechaHcir,globals.vHoraHcir,4)
				}
				if(forms.HistoriaClinica_dtl.foundset.hcireco!=1){
					globals.hcicirtxt5=''
					elements.tab_hcir.setTabEnabledAt(5,false)
				}else{
					elements.tab_hcir.setTabEnabledAt(5,true)
					globals.hcicirtxt5=globals.MostrarTextoCargadoHCIR(globals.vHiscli,globals.vFechaHcir,globals.vHoraHcir,5)
				}
				if(forms.HistoriaClinica_dtl.foundset.hcirtacrmn!=1){
					globals.hcicirtxt6=''
					elements.tab_hcir.setTabEnabledAt(6,false)
				}else{
					elements.tab_hcir.setTabEnabledAt(6,true)
					globals.hcicirtxt6=globals.MostrarTextoCargadoHCIR(globals.vHiscli,globals.vFechaHcir,globals.vHoraHcir,6)
				}
				if(forms.HistoriaClinica_dtl.foundset.hcircondqui!=1){
					globals.hcicirtxt7=''
					elements.tab_hcir.setTabEnabledAt(7,false)
				}else{
					elements.tab_hcir.setTabEnabledAt(7,true)
					globals.hcicirtxt7=globals.MostrarTextoCargadoHCIR(globals.vHiscli,globals.vFechaHcir,globals.vHoraHcir,7)
				}
				if(forms.HistoriaClinica_dtl.foundset.hcircomenta!=1){
					globals.hcicirtxt8=''
					elements.tab_hcir.setTabEnabledAt(8,false)
				}else{
					elements.tab_hcir.setTabEnabledAt(8,true)
					globals.hcicirtxt8=globals.MostrarTextoCargadoHCIR(globals.vHiscli,globals.vFechaHcir,globals.vHoraHcir,8)
				}
				
			}else{
				if(globals.vFechaHcir==0){
					globals.vFechaHcir=utils.stringToNumber(globals.CapturaFechaSistema())
					globals.vHoraHcir=utils.stringToNumber(globals.CapturaHoraSistema("HHMM"))
					forms.HistoriaClinica_dtl.foundset.newRecord()
					globals.InicializarDatos("HistoriaClinica_dtl","asistencial","tbc_hcicir_new")	
					forms.HistoriaClinica_dtl.foundset.hciritvcod1=globals.vInterven0
				}
			}
		}else{
			if(globals.vFechaHcir==0){
				globals.vFechaHcir=utils.stringToNumber(globals.CapturaFechaSistema())
				globals.vHoraHcir=utils.stringToNumber(globals.CapturaHoraSistema("HHMM"))
				forms.HistoriaClinica_dtl.foundset.newRecord()
				globals.InicializarDatos("HistoriaClinica_dtl","asistencial","tbc_hcicir_new")	
				forms.HistoriaClinica_dtl.foundset.hciritvcod1=globals.vInterven0
			}
		}
	}else{
		globals.InitializarCheks("HistoriaClinica_dtl")
		if(forms.HistoriaClinica_dtl.foundset.hciralerta!=1){
			globals.hcicirtxt1=''
			elements.tab_hcir.setTabEnabledAt(1,false)
		}else{
			elements.tab_hcir.setTabEnabledAt(1,true)
		}
		if(forms.HistoriaClinica_dtl.foundset.hcirotros!=1){
			globals.hcicirtxt2=''
			elements.tab_hcir.setTabEnabledAt(2,false)
		}else{
			elements.tab_hcir.setTabEnabledAt(2,true)
		}
		if(forms.HistoriaClinica_dtl.foundset.hcirriesgo!=1){
			globals.hcicirtxt3=''
			elements.tab_hcir.setTabEnabledAt(3,false)
		}else{
			elements.tab_hcir.setTabEnabledAt(3,true)
		}
		if(forms.HistoriaClinica_dtl.foundset.hcirrx!=1){
			globals.hcicirtxt4=''
			elements.tab_hcir.setTabEnabledAt(4,false)
		}else{
			elements.tab_hcir.setTabEnabledAt(4,true)
		}
		if(forms.HistoriaClinica_dtl.foundset.hcireco!=1){
			globals.hcicirtxt5=''
			elements.tab_hcir.setTabEnabledAt(5,false)
		}else{
			elements.tab_hcir.setTabEnabledAt(5,true)
		}
		if(forms.HistoriaClinica_dtl.foundset.hcirtacrmn!=1){
			globals.hcicirtxt6=''
			elements.tab_hcir.setTabEnabledAt(6,false)
		}else{
			elements.tab_hcir.setTabEnabledAt(6,true)
		}
		if(forms.HistoriaClinica_dtl.foundset.hcircondqui!=1){
			globals.hcicirtxt7=''
			elements.tab_hcir.setTabEnabledAt(7,false)
		}else{
			elements.tab_hcir.setTabEnabledAt(7,true)
		}
		if(forms.HistoriaClinica_dtl.foundset.hcircomenta!=1){
			globals.hcicirtxt8=''
			elements.tab_hcir.setTabEnabledAt(8,false)
		}else{
			elements.tab_hcir.setTabEnabledAt(8,true)
		}
	}
}

/**
 * Handle changed data.
 *
 * @param oldValue old value
 * @param newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"5C6D7E97-FC9C-4A76-98CA-7133C7EB1313"}
 */
function onDataChange_ChkAlerta(oldValue, newValue, event) {
	if(newValue==1){
		elements.tab_hcir.setTabEnabledAt(1,true)
		elements.tab_hcir.tabIndex="hcirtxt1"
		forms.HistoriaClinicaTxt_1.controller.focusFirstField()
	}else{
		elements.tab_hcir.setTabEnabledAt(1,false)
		globals.hcicirtxt1=''
	}
	Habilita_btn_graba()
	return true
}

/**
 * Handle changed data.
 *
 * @param oldValue old value
 * @param newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"3DF75168-1253-4416-A437-19A2C9F47FB6"}
 */
function onDataChange_ChkOtros(oldValue, newValue, event) {
	if(newValue==1){
		elements.tab_hcir.setTabEnabledAt(2,true)
		elements.tab_hcir.tabIndex="hcirtxt2"
		forms.HistoriaClinicaTxt_2.controller.focusFirstField()
	}else{
		elements.tab_hcir.setTabEnabledAt(2,false)
		globals.hcicirtxt2=''
	}
	Habilita_btn_graba()
	return true
}

/**
 * Handle changed data.
 *
 * @param oldValue old value
 * @param newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"429F2756-0AD0-4DC0-B28D-A902683597D8"}
 */
function onDataChange_ChkRiesgo(oldValue, newValue, event) {
	if(newValue==1){
		elements.tab_hcir.setTabEnabledAt(3,true)
		elements.tab_hcir.tabIndex="hcirtxt3"
		forms.HistoriaClinicaTxt_3.controller.focusFirstField()
	}else{
		elements.tab_hcir.setTabEnabledAt(3,false)
		globals.hcicirtxt3=''
	}
	Habilita_btn_graba()
	return true
}

/**
 * Handle changed data.
 *
 * @param oldValue old value
 * @param newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"35C188FF-BF04-473B-8797-4C1AA24A5506"}
 */
function onDataChange_ChkRx(oldValue, newValue, event) {
	if(newValue==1){
		elements.tab_hcir.setTabEnabledAt(4,true)
		elements.tab_hcir.tabIndex="hcirtxt4"
		forms.HistoriaClinicaTxt_4.controller.focusFirstField()
	}else{
		elements.tab_hcir.setTabEnabledAt(4,false)
		globals.hcicirtxt4=''
	}
	Habilita_btn_graba()
	return true
}

/**
 * Handle changed data.
 *
 * @param oldValue old value
 * @param newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"3D2FD3E3-B309-4AD7-AB0A-37471181BC26"}
 */
function onDataChange_ChkEco(oldValue, newValue, event) {
	if(newValue==1){
		elements.tab_hcir.setTabEnabledAt(5,true)
		elements.tab_hcir.tabIndex="hcirtxt5"
		forms.HistoriaClinicaTxt_5.controller.focusFirstField()
	}else{
		elements.tab_hcir.setTabEnabledAt(5,false)
		globals.hcicirtxt5=''
	}
	Habilita_btn_graba()
	return true
}

/**
 * Handle changed data.
 *
 * @param oldValue old value
 * @param newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"15EFAC8D-8D65-4A14-B4D6-CCF16CEF3921"}
 */
function onDataChange_ChkTAC(oldValue, newValue, event) {
	if(newValue==1){
		elements.tab_hcir.setTabEnabledAt(6,true)
		elements.tab_hcir.tabIndex="hcirtxt6"
		forms.HistoriaClinicaTxt_6.controller.focusFirstField()
	}else{
		elements.tab_hcir.setTabEnabledAt(6,false)
		globals.hcicirtxt6=''
	}
	Habilita_btn_graba()
	return true
}

/**
 * Handle changed data.
 *
 * @param oldValue old value
 * @param newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"975F1576-2A28-4F17-99F8-6826DDECEEB2"}
 */
function onDataChange_ChkCondic(oldValue, newValue, event) {
	if(newValue==1){
		elements.tab_hcir.setTabEnabledAt(7,true)
		elements.tab_hcir.tabIndex="hcirtxt7"
		forms.HistoriaClinicaTxt_7.controller.focusFirstField()
	}else{
		elements.tab_hcir.setTabEnabledAt(7,false)
		globals.hcicirtxt7=''
	}
	Habilita_btn_graba()
	return true
}

/**
 * Handle changed data.
 *
 * @param oldValue old value
 * @param newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"D6B5EB0B-B6F5-40B3-85D0-A20FBE7068FE"}
 */
function onDataChange_ChkComen(oldValue, newValue, event) {
	if(newValue==1){
		elements.tab_hcir.setTabEnabledAt(8,true)
		elements.tab_hcir.tabIndex="hcirtxt8"
		forms.HistoriaClinicaTxt_8.controller.focusFirstField()
	}else{
		elements.tab_hcir.setTabEnabledAt(8,false)
		globals.hcicirtxt8=''
	}
	Habilita_btn_graba()
	return true
}

/**
 * Callback method when the user changes tab in a tab panel or divider position in split pane.
 *
 * @param {Number} previousIndex index of tab shown before the change
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"9DF1F5B8-1C3C-4C2E-973A-7D612A90446E"}
 */
function onTabChange_hcicir(previousIndex, event) {
	var current_tab=elements.tab_hcir.tabIndex
	switch (current_tab){
		case 1:elements.hcir_alerta_label.font='Tahoma,1,11';break;
		case 2:elements.hcir_otros_label.font='Tahoma,1,11';break;
		case 3:elements.hcir_riesgo_label.font='Tahoma,1,11';break;
		case 4:elements.hcir_rx_label.font='Tahoma,1,11';break;
		case 5:elements.hcir_eco_label.font='Tahoma,1,11';break;
		case 6:elements.hcir_tacrmn_label.font='Tahoma,1,11';break;
		case 7:elements.hcir_condqui_label.font='Tahoma,1,11';break;
		case 8:elements.hcir_comenta_label.font='Tahoma,1,11';break;
	}
	switch (previousIndex){
	case 1:elements.hcir_alerta_label.font='Trebuchet,0,13';break;
	case 2:elements.hcir_otros_label.font='Trebuchet,0,13';break;
	case 3:elements.hcir_riesgo_label.font='Trebuchet,0,13';break;
	case 4:elements.hcir_rx_label.font='Trebuchet,0,13';break;
	case 5:elements.hcir_eco_label.font='Trebuchet,0,13';break;
	case 6:elements.hcir_tacrmn_label.font='Trebuchet,0,13';break;
	case 7:elements.hcir_condqui_label.font='Trebuchet,0,13';break;
	case 8:elements.hcir_comenta_label.font='Trebuchet,0,13';break;
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"017B8FB8-4FDF-47A2-BDA2-88754CD9860A"}
 */
function onAction_Interven1(event) {
	var win = application.createWindow("c",JSWindow.MODAL_DIALOG)
	win.title = "Búsqueda de Código de Intervención";
	win.setSize(600,600)
	win.show(forms.frm_busqueda_interven_copy)
	forms.HistoriaClinica_dtl.foundset.hciritvcod1=globals.vInterven
	Habilita_btn_graba()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"2A1EE188-1FD8-4EF9-8673-5B2370E8100A"}
 */
function onAction_Interven2(event) {
	var win = application.createWindow("c",JSWindow.MODAL_DIALOG)
	win.title = "Búsqueda de Código de Intervención";
	win.setSize(600,600)
	win.show(forms.frm_busqueda_interven_copy)
	forms.HistoriaClinica_dtl.foundset.hciritvcod2=globals.vInterven
	Habilita_btn_graba()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"5EBCE90C-4FDA-4E29-B3D9-0B7CF62FB674"}
 */
function onAction_patologia1(event) {
	var win = application.createWindow("d",JSWindow.MODAL_DIALOG)
	win.title = "Búsqueda de Código de Patología";
	win.show(forms.frm_busqueda_patologias)
	forms.HistoriaClinica_dtl.foundset.hcirpatcod1=globals.vPatologia
	Habilita_btn_graba()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"4E1AE562-7E05-465B-B4E8-C246972CDDDA"}
 */
function onAction_patologia2(event) {
	var win = application.createWindow("d",JSWindow.MODAL_DIALOG)
	win.title = "Búsqueda de Código de Patología";
	win.show(forms.frm_busqueda_patologias)
	forms.HistoriaClinica_dtl.foundset.hcirpatcod2=globals.vPatologia
	Habilita_btn_graba()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"D2969CA9-35C3-4D7E-8603-8217A2CBFB8C"}
 */
function onAction_graba_HistoriaClinicaIngreso(event) {
	if(vhiscli_unico_to_tbc_admision_scroll.adm_tipoing==2){
		foundset.hcirfecha2=utils.stringToNumber(globals.vFechaHcir.toString())
		foundset.hcirhora2=utils.stringToNumber(globals.vHoraHcir.toString())
		foundset.hcircama=vhiscli_unico_to_tbc_admision_scroll.adm_cama
		foundset.hcirhabi=vhiscli_unico_to_tbc_admision_scroll.adm_habita
		foundset.hcirfechacarga=globals.vFeccarga
		foundset.hcirtipomed=vhiscli_to_tbc_cirugint.ciriieciru
		foundset.hcirlegajomed=vhiscli_to_tbc_cirugint.cirilegciru
		foundset.hcirprotocolo=globals.vNroProtocolo
		forms.form116_dtl.ConvierteCheksaGrabarSN("HistoriaClinica_dtl")
		try {
			databaseManager.saveData(foundset.getRecord(1))
		}catch (msg){
			(plugins.dialogs.showInfoDialog("Prueba de error",msg.toString(),"ok"))
		}
		globals.InitializarCheks("HistoriaClinica_dtl")
	}
	if (globals.hcicirtxt1!=null&&globals.hcicirtxt1!=''){
		globals.GrabarTextoHCIR(globals.vHiscli,globals.vFechaHcir,globals.vHoraHcir,globals.hcicirtxt1,1)
	}
	if (globals.hcicirtxt2!=null&&globals.hcicirtxt2!=''){
		globals.GrabarTextoHCIR(globals.vHiscli,globals.vFechaHcir,globals.vHoraHcir,globals.hcicirtxt2,2)
	}
	if (globals.hcicirtxt3!=null&&globals.hcicirtxt3!=''){
		globals.GrabarTextoHCIR(globals.vHiscli,globals.vFechaHcir,globals.vHoraHcir,globals.hcicirtxt3,3)
	}
	if (globals.hcicirtxt4!=null&&globals.hcicirtxt4!=''){
		globals.GrabarTextoHCIR(globals.vHiscli,globals.vFechaHcir,globals.vHoraHcir,globals.hcicirtxt4,4)
	}
	if (globals.hcicirtxt5!=null&&globals.hcicirtxt5!=''){
		globals.GrabarTextoHCIR(globals.vHiscli,globals.vFechaHcir,globals.vHoraHcir,globals.hcicirtxt5,5)
	}
	if (globals.hcicirtxt6!=null&&globals.hcicirtxt6!=''){
		globals.GrabarTextoHCIR(globals.vHiscli,globals.vFechaHcir,globals.vHoraHcir,globals.hcicirtxt6,6)
	}
	if (globals.hcicirtxt7!=null&&globals.hcicirtxt7!=''){
		globals.GrabarTextoHCIR(globals.vHiscli,globals.vFechaHcir,globals.vHoraHcir,globals.hcicirtxt7,7)
	}
	if (globals.hcicirtxt8!=null&&globals.hcicirtxt8!=''){
		globals.GrabarTextoHCIR(globals.vHiscli,globals.vFechaHcir,globals.vHoraHcir,globals.hcicirtxt8,8)
	}
	elements.btn_graba_hcicir.visible=false
	
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
 * @properties={typeid:24,uuid:"DEE0B555-EFEF-40D1-8437-12ACCA3AD97F"}
 */
function onDataChange_habilita_btn_graba(oldValue, newValue, event) {
	Habilita_btn_graba()
	return true
}

/**
 * @properties={typeid:24,uuid:"463D603A-7C18-4992-8E7C-44F22A0F524D"}
 */
function Habilita_btn_graba() {
	if(!elements.btn_graba_hcicir.visible){
		elements.btn_graba_hcicir.visible=true
	}
}
