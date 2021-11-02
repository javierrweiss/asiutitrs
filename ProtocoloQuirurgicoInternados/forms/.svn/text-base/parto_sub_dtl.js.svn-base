
/**
 * Callback method when the user changes tab in a tab panel or divider position in split pane.
 *
 * @param {Number} previousIndex index of tab shown before the change
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"D5BC5083-3B5F-4C92-99EF-44D1BB96DC7A"}
 */
function onTabChange_Tab_obstetritxt(previousIndex, event) {
	var current_tab=elements.tabs_obstetritxt.tabIndex
	switch (current_tab){
		case 1:elements.obstetri_desgarro_label.font='Tahoma,1,11';break;
		case 2:elements.obstetri_episiotomia_label.font='Tahoma,1,11';break;
		case 3:elements.obstetri_ligadura_cordon_label.font='Tahoma,1,11';break;
		case 4:elements.obstetri_placenta_compl_label.font='Tahoma,1,11';break;
		case 5:elements.obstetri_rup_prema_label.font='Tahoma,1,11';break;
		case 6:elements.obstetri_liq_amni_label.font='Tahoma,1,11';break;
	}
	switch (previousIndex){
	case 1:elements.obstetri_desgarro_label.font='Trebuchet,0,13';break;
	case 2:elements.obstetri_episiotomia_label.font='Trebuchet,0,13';break;
	case 3:elements.obstetri_ligadura_cordon_label.font='Trebuchet,0,13';break;
	case 4:elements.obstetri_placenta_compl_label.font='Trebuchet,0,13';break;
	case 5:elements.obstetri_rup_prema_label.font='Trebuchet,0,13';break;
	case 6:elements.obstetri_liq_amni_label.font='Trebuchet,0,13';break;
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
 * @properties={typeid:24,uuid:"2CF40C12-B8CA-48D5-818E-B244D3DE47B3"}
 */
function onDataChange_desgarro(oldValue, newValue, event) {
	if(newValue==1){
		elements.tabs_obstetritxt.setTabEnabledAt(1,true)
		elements.tabs_obstetritxt.tabIndex=1
		forms.ObstetriTxt1.controller.focusFirstField()
	}else{
		elements.tabs_obstetritxt.setTabEnabledAt(1,false)
		globals.obstetritxt1=''
	}
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
 * @properties={typeid:24,uuid:"C47E51D0-023B-4188-9AD5-F5B87F850CB8"}
 */
function onDataChange_episiotomia(oldValue, newValue, event) {
	if(newValue==1){
		elements.tabs_obstetritxt.setTabEnabledAt(2,true)
		elements.tabs_obstetritxt.tabIndex=2
		forms.ObstetriTxt2.controller.focusFirstField()
	}else{
		elements.tabs_obstetritxt.setTabEnabledAt(2,false)
		globals.obstetritxt2=''
	}
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
 * @properties={typeid:24,uuid:"D0079865-3939-4220-A04C-997BD2D18002"}
 */
function onDataChange_ligadura_cordon(oldValue, newValue, event) {
	if(newValue==3){
		elements.tabs_obstetritxt.setTabEnabledAt(3,true)
		elements.tabs_obstetritxt.tabIndex=3
		forms.ObstetriTxt3.controller.focusFirstField()
	}else{
		elements.tabs_obstetritxt.setTabEnabledAt(3,false)
		globals.obstetritxt3=''
	}
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
 * @properties={typeid:24,uuid:"84FFC3B0-E092-4D92-8ADE-CC8A4B48248F"}
 */
function onDataChange_placenta_compl(oldValue, newValue, event) {
	if(newValue==1){
		elements.tabs_obstetritxt.setTabEnabledAt(4,true)
		elements.tabs_obstetritxt.tabIndex=4
		forms.ObstetriTxt4.controller.focusFirstField()
	}else{
		elements.tabs_obstetritxt.setTabEnabledAt(4,false)
		globals.obstetritxt4=''
	}
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
 * @properties={typeid:24,uuid:"965587E0-3843-4F89-A10D-4D16DACDD3F5"}
 */
function onDataChange_rup_membrana(oldValue, newValue, event) {
	if(newValue==1){
		elements.tabs_obstetritxt.setTabEnabledAt(5,true)
		elements.tabs_obstetritxt.tabIndex=5
		forms.ObstetriTxt5.controller.focusFirstField()
	}else{
		elements.tabs_obstetritxt.setTabEnabledAt(5,false)
		globals.obstetritxt5=''
	}
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
 * @properties={typeid:24,uuid:"9C4E6FB0-3D5D-406E-83A9-CBC408882D0D"}
 */
function onDataChange_liq_amni(oldValue, newValue, event) {
	if(newValue==4){
		elements.tabs_obstetritxt.setTabEnabledAt(6,true)
		elements.tabs_obstetritxt.tabIndex=6
		forms.ObstetriTxt6.controller.focusFirstField()
	}else{
		elements.tabs_obstetritxt.setTabEnabledAt(6,false)
		globals.obstetritxt6=''
	}
	return true
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"C840151C-8B56-4090-A41E-813A0FF3EB7F"}
 */
function onShow_parto_sub_dtl(firstShow, event) {
	//globals.InitializarCheks("parto_sub_dtl")
	if(forms.parto_sub_dtl.foundset.obstetri_desgarro!=1){
		globals.obstetritxt1=''
		elements.tabs_obstetritxt.setTabEnabledAt(1,false)
	}else{
		elements.tabs_obstetritxt.setTabEnabledAt(1,true)
	}
	if(forms.parto_sub_dtl.foundset.obstetri_episiotomia!=1){
		globals.obstetritxt2=''
		elements.tabs_obstetritxt.setTabEnabledAt(2,false)
	}else{
		elements.tabs_obstetritxt.setTabEnabledAt(2,true)
	}
	if(forms.parto_sub_dtl.foundset.obstetri_ligadura_cordon!=3){
		globals.obstetritxt3=''
		elements.tabs_obstetritxt.setTabEnabledAt(3,false)
	}else{
		elements.tabs_obstetritxt.setTabEnabledAt(3,true)
	}
	if(forms.parto_sub_dtl.foundset.obstetri_placenta_compl!=1){
		globals.obstetritxt4=''
		elements.tabs_obstetritxt.setTabEnabledAt(4,false)
	}else{
		elements.tabs_obstetritxt.setTabEnabledAt(4,true)
	}
	if(forms.parto_sub_dtl.foundset.obstetri_rup_prema!=1){
		globals.obstetritxt5=''
		elements.tabs_obstetritxt.setTabEnabledAt(5,false)
	}else{
		elements.tabs_obstetritxt.setTabEnabledAt(5,true)
	}
	if(forms.parto_sub_dtl.foundset.obstetri_liq_amni!=4){
		globals.obstetritxt6=''
		elements.tabs_obstetritxt.setTabEnabledAt(6,false)
	}else{
		elements.tabs_obstetritxt.setTabEnabledAt(6,true)
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"98FEF49C-F59C-4243-9D93-67D4B1E02BBA"}
 */
function onAction_graba_Partos(event) {
	if(vhiscli_to_tbc_cirugint.tbc_cirugint_to_tbc_obstetri_gesta.getSize()>0){
		try{
			databaseManager.saveData(vhiscli_to_tbc_cirugint.tbc_cirugint_to_tbc_obstetri_gesta.getRecord(1))
			vhiscli_to_tbc_cirugint.ciriobstgesta=globals.current_obstetri_gest
			vhiscli_to_tbc_cirugint.ciriobsttipo=0
			vhiscli_to_tbc_cirugint.ciriparto=1
		}catch (msg){
			(plugins.dialogs.showInfoDialog("Prueba de error",msg.toString(),"ok"))
		}	
	}
	if (globals.obstetritxt1!=null&&globals.obstetritxt1!=''){
		globals.GrabarTextoOBSTXT(globals.vHiscli,globals.current_obstetri_gest,1,globals.obstetritxt1)
	}
	if (globals.obstetritxt2!=null&&globals.obstetritxt2!=''){
		globals.GrabarTextoOBSTXT(globals.vHiscli,globals.current_obstetri_gest,2,globals.obstetritxt2)
	}
	if (globals.obstetritxt3!=null&&globals.obstetritxt3!=''){
		globals.GrabarTextoOBSTXT(globals.vHiscli,globals.current_obstetri_gest,3,globals.obstetritxt3)
	}
	if (globals.obstetritxt4!=null&&globals.obstetritxt4!=''){
		globals.GrabarTextoOBSTXT(globals.vHiscli,globals.current_obstetri_gest,4,globals.obstetritxt4)
	}
	if (globals.obstetritxt5!=null&&globals.obstetritxt5!=''){
		globals.GrabarTextoOBSTXT(globals.vHiscli,globals.current_obstetri_gest,5,globals.obstetritxt5)
	}
	if (globals.obstetritxt6!=null&&globals.obstetritxt6!=''){
		globals.GrabarTextoOBSTXT(globals.vHiscli,globals.current_obstetri_gest,6,globals.obstetritxt6)
	}
}
