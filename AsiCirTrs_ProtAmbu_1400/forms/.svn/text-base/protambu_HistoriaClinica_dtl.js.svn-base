/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"9E93534C-E30B-4A7D-B365-1877DC88049E"}
 */
function onShow_HistoriaClinica(firstShow, event) {
	elements.btn_graba_hcicir.visible=true
	protambu1400_vhiscli_to_tbc_hcicir_new.loadAllRecords()
	//if(vhiscli_unico_to_tbc_admision_scroll.tbc_admision_scroll_to_tbc_hcicir_new.getSize()<1){
		//vhiscli_unico_to_tbc_admision_scroll.tbc_admision_scroll_to_tbc_hcicir_new.newRecord()
		//globals.InicializarDatosDeRelacion(vhiscli_unico_to_tbc_admision_scroll.tbc_admision_scroll_to_tbc_hcicir_new,"asistencial","tbc_hcicir_new")
	if(protambu1400_vhiscli_to_tbc_hcicir_new.getSize()>0){
				globals.InitializarCheks("protambu_HistoriaClinica_dtl")
				if(protambu1400_vhiscli_to_tbc_hcicir_new.hciralerta!=1){
					globals.hcicirtxt1=''
					elements.tab_hcir.setTabEnabledAt(1,false)
				}else{
					elements.tab_hcir.setTabEnabledAt(1,true)
					globals.hcicirtxt1=globals.protambu_MostrarTextoHCIR(1,globals.vHiscli,globals.protambu1400_fechaingreso,globals.protambu1400_hora_ingreso,1)
				}
				if(protambu1400_vhiscli_to_tbc_hcicir_new.hcirotros!=1){
					globals.hcicirtxt2=''
					elements.tab_hcir.setTabEnabledAt(2,false)
				}else{
					elements.tab_hcir.setTabEnabledAt(2,true)
					globals.hcicirtxt2=globals.protambu_MostrarTextoHCIR(1,globals.vHiscli,globals.protambu1400_fechaingreso,globals.protambu1400_hora_ingreso,2)
				}
				if(protambu1400_vhiscli_to_tbc_hcicir_new.hcirriesgo!=1){
					globals.hcicirtxt3=''
					elements.tab_hcir.setTabEnabledAt(3,false)
				}else{
					elements.tab_hcir.setTabEnabledAt(3,true)
					globals.hcicirtxt3=globals.protambu_MostrarTextoHCIR(1,globals.vHiscli,globals.protambu1400_fechaingreso,globals.protambu1400_hora_ingreso,3)
				}
				if(protambu1400_vhiscli_to_tbc_hcicir_new.hcirrx!=1){
					globals.hcicirtxt4=''
					elements.tab_hcir.setTabEnabledAt(4,false)
				}else{
					elements.tab_hcir.setTabEnabledAt(4,true)
					globals.hcicirtxt4=globals.protambu_MostrarTextoHCIR(1,globals.vHiscli,globals.protambu1400_fechaingreso,globals.protambu1400_hora_ingreso,4)
				}
				if(protambu1400_vhiscli_to_tbc_hcicir_new.hcireco!=1){
					globals.hcicirtxt5=''
					elements.tab_hcir.setTabEnabledAt(5,false)
				}else{
					elements.tab_hcir.setTabEnabledAt(5,true)
					globals.hcicirtxt5=globals.protambu_MostrarTextoHCIR(1,globals.vHiscli,globals.protambu1400_fechaingreso,globals.protambu1400_hora_ingreso,5)
				}
				if(protambu1400_vhiscli_to_tbc_hcicir_new.hcirtacrmn!=1){
					globals.hcicirtxt6=''
					elements.tab_hcir.setTabEnabledAt(6,false)
				}else{
					elements.tab_hcir.setTabEnabledAt(6,true)
					globals.hcicirtxt6=globals.protambu_MostrarTextoHCIR(1,globals.vHiscli,globals.protambu1400_fechaingreso,globals.protambu1400_hora_ingreso,6)
				}
				if(protambu1400_vhiscli_to_tbc_hcicir_new.hcircondqui!=1){
					globals.hcicirtxt7=''
					elements.tab_hcir.setTabEnabledAt(7,false)
				}else{
					elements.tab_hcir.setTabEnabledAt(7,true)
					globals.hcicirtxt7=globals.protambu_MostrarTextoHCIR(1,globals.vHiscli,globals.protambu1400_fechaingreso,globals.protambu1400_hora_ingreso,7)
				}
				if(protambu1400_vhiscli_to_tbc_hcicir_new.hcircomenta!=1){
					globals.hcicirtxt8=''
					elements.tab_hcir.setTabEnabledAt(8,false)
				}else{
					elements.tab_hcir.setTabEnabledAt(8,true)
					globals.hcicirtxt8=globals.protambu_MostrarTextoHCIR(1,globals.vHiscli,globals.protambu1400_fechaingreso,globals.protambu1400_hora_ingreso,8)
				}
				foundset.hciritvcod1=globals.protambu1400_interven
				foundset.hcirtipohc3=1
				foundset.hcirprotocolo=globals.vNroProtocolo
		}else{
			
			foundset.newRecord()
			globals.InicializarDatos("protambu_HistoriaClinica_dtl","asistencial","tbc_hcicir_new")	
			foundset.hciritvcod1=globals.protambu1400_interven
			foundset.hcirtipohc3=1
			foundset.hcirprotocolo=globals.vNroProtocolo
			
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
 * @properties={typeid:24,uuid:"A5116119-F9E5-4EB0-AFA0-8D4708D9AE3C"}
 */
function onDataChange_ChkAlerta(oldValue, newValue, event) {
	if(newValue==1){
		elements.tab_hcir.setTabEnabledAt(1,true)
		elements.tab_hcir.tabIndex="hcirtxt1"
		forms.protambu_HistoriaClinicaTxt_1.controller.focusFirstField()
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
 * @properties={typeid:24,uuid:"8C2FEE89-55E6-4843-9DE8-DD0389710480"}
 */
function onDataChange_ChkOtros(oldValue, newValue, event) {
	if(newValue==1){
		elements.tab_hcir.setTabEnabledAt(2,true)
		elements.tab_hcir.tabIndex="hcirtxt2"
		forms.protambu_HistoriaClinicaTxt_2.controller.focusFirstField()
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
 * @properties={typeid:24,uuid:"4876E70F-AFFD-4F6F-9325-25CEB1AA4191"}
 */
function onDataChange_ChkRiesgo(oldValue, newValue, event) {
	if(newValue==1){
		elements.tab_hcir.setTabEnabledAt(3,true)
		elements.tab_hcir.tabIndex="hcirtxt3"
		forms.protambu_HistoriaClinicaTxt_3.controller.focusFirstField()
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
 * @properties={typeid:24,uuid:"3D14341B-AB9D-493F-AE1B-B6D57F066267"}
 */
function onDataChange_ChkRx(oldValue, newValue, event) {
	if(newValue==1){
		elements.tab_hcir.setTabEnabledAt(4,true)
		elements.tab_hcir.tabIndex="hcirtxt4"
		forms.protambu_HistoriaClinicaTxt_4.controller.focusFirstField()
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
 * @properties={typeid:24,uuid:"DA10442A-D228-4E19-95C3-22B9C3BC0375"}
 */
function onDataChange_ChkEco(oldValue, newValue, event) {
	if(newValue==1){
		elements.tab_hcir.setTabEnabledAt(5,true)
		elements.tab_hcir.tabIndex="hcirtxt5"
		forms.protambu_HistoriaClinicaTxt_5.controller.focusFirstField()
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
 * @properties={typeid:24,uuid:"F4232069-60F2-491E-B746-9B2BF6C819D9"}
 */
function onDataChange_ChkTAC(oldValue, newValue, event) {
	if(newValue==1){
		elements.tab_hcir.setTabEnabledAt(6,true)
		elements.tab_hcir.tabIndex="hcirtxt6"
		forms.protambu_HistoriaClinicaTxt_6.controller.focusFirstField()
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
 * @properties={typeid:24,uuid:"1D07B33F-6989-4FC0-A41C-2C5AAFBBA0F3"}
 */
function onDataChange_ChkCondic(oldValue, newValue, event) {
	if(newValue==1){
		elements.tab_hcir.setTabEnabledAt(7,true)
		elements.tab_hcir.tabIndex="hcirtxt7"
		forms.protambu_HistoriaClinicaTxt_7.controller.focusFirstField()
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
 * @properties={typeid:24,uuid:"FB923862-1C98-445C-B727-C28561C841F2"}
 */
function onDataChange_ChkComen(oldValue, newValue, event) {
	if(newValue==1){
		elements.tab_hcir.setTabEnabledAt(8,true)
		elements.tab_hcir.tabIndex="hcirtxt8"
		forms.protambu_HistoriaClinicaTxt_8.controller.focusFirstField()
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
 * @properties={typeid:24,uuid:"A7C2B700-7BB7-49D8-B15E-34CAFD72C251"}
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
 * @properties={typeid:24,uuid:"520ADEA0-9878-42FC-8586-A4CFD3624399"}
 */
function onAction_Interven1(event) {
	var win = application.createWindow("c",JSWindow.MODAL_DIALOG)
	win.title = "Búsqueda de Código de Intervención";
	win.setSize(600,600)
	win.show(forms.protambu_frm_busqueda_interven)
	forms.protambu_HistoriaClinica_dtl.foundset.hciritvcod1=globals.protambu1400_interven
	Habilita_btn_graba()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"A1A63F5F-3D44-4191-B11A-7F744BCD929D"}
 */
function onAction_Interven2(event) {
	var win = application.createWindow("c",JSWindow.MODAL_DIALOG)
	win.title = "Búsqueda de Código de Intervención";
	win.setSize(600,600)
	win.show(forms.protambu_frm_busqueda_interven)
	forms.protambu_HistoriaClinica_dtl.foundset.hciritvcod2=globals.vInterven
	Habilita_btn_graba()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"75179542-5B62-4B7C-A34F-0ECF516A5734"}
 */
function onAction_patologia1(event) {
	var win = application.createWindow("d",JSWindow.MODAL_DIALOG)
	win.title = "Búsqueda de Código de Patología";
	win.show(forms.protambu_frm_busqueda_patologias)
	foundset.hcirpatcod1=globals.vPatologia
	Habilita_btn_graba()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"F0821B59-E837-43F4-AC53-381D42B05E3D"}
 */
function onAction_patologia2(event) {
	var win = application.createWindow("d",JSWindow.MODAL_DIALOG)
	win.title = "Búsqueda de Código de Patología";
	win.show(forms.protambu_frm_busqueda_patologias)
	foundset.hcirpatcod2=globals.vPatologia
	Habilita_btn_graba()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"5501B751-12DD-4176-BEAA-5F60A4AB7199"}
 */
function onAction_graba_HistoriaClinicaIngreso(event) {
	
		foundset.hcirfecha2=utils.stringToNumber(globals.protambu1400_fechaingreso.toString())
		foundset.hcirhora2=utils.stringToNumber(globals.protambu1400_hora_ingreso.toString())
		foundset.hcircama=' '
		foundset.hcirhabi=0
		foundset.hcirfechacarga=globals.vFeccarga
		foundset.hcirtipomed=protambul1400_vhiscli_to_tbc_guardia.guar_tipomed
		foundset.hcirlegajomed=protambul1400_vhiscli_to_tbc_guardia.guar_medico
		foundset.hcirprotocolo=globals.vNroProtocolo
		forms.protambu_frm_1400.ConvierteCheksaGrabarSN("protambu_HistoriaClinica_dtl")
		try {
			databaseManager.saveData(foundset.getRecord(1))
		}catch (msg){
			(plugins.dialogs.showInfoDialog("Prueba de error",msg.toString(),"ok"))
		}
		globals.InitializarCheks("protambu_HistoriaClinica_dtl")
	
	if (globals.hcicirtxt1!=null&&globals.hcicirtxt1!=''){
		globals.protambu_GrabarTextoHCIR(1,globals.vHiscli,globals.protambu1400_fechaingreso,globals.protambu1400_hora_ingreso,globals.hcicirtxt1,1)
	}
	if (globals.hcicirtxt2!=null&&globals.hcicirtxt2!=''){
		globals.protambu_GrabarTextoHCIR(1,globals.vHiscli,globals.protambu1400_fechaingreso,globals.protambu1400_hora_ingreso,globals.hcicirtxt2,2)
	}
	if (globals.hcicirtxt3!=null&&globals.hcicirtxt3!=''){
		globals.protambu_GrabarTextoHCIR(1,globals.vHiscli,globals.protambu1400_fechaingreso,globals.protambu1400_hora_ingreso,globals.hcicirtxt3,3)
	}
	if (globals.hcicirtxt4!=null&&globals.hcicirtxt4!=''){
		globals.protambu_GrabarTextoHCIR(1,globals.vHiscli,globals.protambu1400_fechaingreso,globals.protambu1400_hora_ingreso,globals.hcicirtxt4,4)
	}
	if (globals.hcicirtxt5!=null&&globals.hcicirtxt5!=''){
		globals.protambu_GrabarTextoHCIR(1,globals.vHiscli,globals.protambu1400_fechaingreso,globals.protambu1400_hora_ingreso,globals.hcicirtxt5,5)
	}
	if (globals.hcicirtxt6!=null&&globals.hcicirtxt6!=''){
		globals.protambu_GrabarTextoHCIR(1,globals.vHiscli,globals.protambu1400_fechaingreso,globals.protambu1400_hora_ingreso,globals.hcicirtxt6,6)
	}
	if (globals.hcicirtxt7!=null&&globals.hcicirtxt7!=''){
		globals.protambu_GrabarTextoHCIR(1,globals.vHiscli,globals.protambu1400_fechaingreso,globals.protambu1400_hora_ingreso,globals.hcicirtxt7,7)
	}
	if (globals.hcicirtxt8!=null&&globals.hcicirtxt8!=''){
		globals.protambu_GrabarTextoHCIR(1,globals.vHiscli,globals.protambu1400_fechaingreso,globals.protambu1400_hora_ingreso,globals.hcicirtxt8,8)
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
 * @properties={typeid:24,uuid:"47286143-BE56-4733-834B-811EF8C972EE"}
 */
function onDataChange_habilita_btn_graba(oldValue, newValue, event) {
	Habilita_btn_graba()
	return true
}

/**
 * @properties={typeid:24,uuid:"3547EF03-FFD3-49EB-A517-CD0E7530CA15"}
 */
function Habilita_btn_graba() {
	if(!elements.btn_graba_hcicir.visible){
		elements.btn_graba_hcicir.visible=true
	}
}
