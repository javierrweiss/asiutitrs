/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"4C3F97FA-FB3A-4516-806E-24CD306FE6AF",variableType:4}
 */
var vTotal_Escala_Alderete = 0;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"43EA392A-63FF-4BA2-8647-09C4BE5EAB85",variableType:93}
 */
var var_anes_horrecup = new Date();

/**
 * // TODO generated, please specify type and doc for the params
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"271438C0-AE92-4858-AD97-9F0EB216D7B3"}
 */
function onHoraChange(event) 
{
	aneshorarecup = globals.TimeToInteger(var_anes_horrecup,'hhmm')
}

/**
 * // TODO generated, please specify type and doc for the params
 * @param {Object} firstShow
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"143DC9D4-A29F-4DE5-9B42-78F82C2C915B"}
 */
function onShow(firstShow, event) {
	elements.btn_graba_EvaluacionPostAnestesica.visible=true
	if(aneshorarecup != null)
		var_anes_horrecup = new Date(aneshorarecup, 'HH:mm')
	onHoraChange(event)
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
 * @properties={typeid:24,uuid:"96C79E2E-3994-4514-9AA7-7C8D02A664F4"}
 */
function onDataChange_respiracion(oldValue, newValue, event) {
	if(newValue=="Asistida"){
		elements.anes_mecman_label.visible=true
		elements.anes_mecman.visible=true
	}else{
		if(newValue==2){
			elements.anes_mecman_label.visible=true
			elements.anes_mecman.visible=true
		}else{
			elements.anes_mecman_label.visible=false
			elements.anes_mecman.visible=false
			foundset.anesmecman=0
		}
	}
	elements.btn_graba_EvaluacionPostAnestesica.visible=true
	elements.anes_circuito.requestFocus()
	return true
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"45AB561F-B10D-4F4F-A4AD-469083228C66"}
 */
function onShow1_evaluacion_postanestesica(firstShow, event) {
	vTotal_Escala_Alderete=0
	for(var m=1;m<=5;m++){
		var name3= 'anesesca_'+m
		if(protambu1400_vs_to_tbc_anes_ambu[name3]>0){
			vTotal_Escala_Alderete=+protambu1400_vs_to_tbc_anes_ambu[name3]-1
		}
	}
	if(foundset.anesespasi==2){
		elements.anes_mecman_label.visible=true
		elements.anes_mecman.visible=true
	}else{
		elements.anes_mecman_label.visible=false
		elements.anes_mecman.visible=false
		foundset.anesmecman=0
	}
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
 * @properties={typeid:24,uuid:"DD22CFB3-E07A-465E-9E4E-14F7C6FDAB99"}
 */
function onDataChange_escala_alderete(oldValue, newValue, event) {
	vTotal_Escala_Alderete=0
	for(var m=1;m<=5;m++){
		var name3= 'anesesca_'+m
		if(protambu1400_vs_to_tbc_anes_ambu[name3]>0){
			vTotal_Escala_Alderete+=protambu1400_vs_to_tbc_anes_ambu[name3]-1
		}
	}
	elements.btn_graba_EvaluacionPostAnestesica.visible=true
	return true
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"CD36CB5C-E326-4468-A3B1-DA4DD6894DE0"}
 */
function onAction_graba_EvaluacionPostAnestesica(event) {
	if(protambu1400_vs_to_tbc_anes_ambu.getSize()>0){
		//protambu1400_vs_to_tbc_anes_ambu.anesestado=1
		protambu1400_vs_to_tbc_anes_ambu.anesprotocolo=globals.vNroProtocolo
		var hora4 = forms.protambu_EvaluacionPostAnestesia.var_anes_horrecup.getHours()
		var minutos4 = forms.protambu_EvaluacionPostAnestesia.var_anes_horrecup.getMinutes()
		var hora_ed4
		var minutos_ed4
		if (hora4<10){
			hora_ed4='0'+hora4
		}else{
			hora_ed4=hora4
		}
		if(minutos4<10){
			minutos_ed4='0'+minutos4
		}else{
			minutos_ed4=minutos4
		}
		protambu1400_vs_to_tbc_anes_ambu.aneshorarecup=hora_ed4+''+minutos_ed4
		try{
			databaseManager.saveData(protambu1400_vs_to_tbc_anes_ambu.getRecord(1))
		}catch (msg){
			(plugins.dialogs.showInfoDialog("Prueba de error",msg.toString(),"ok"))
		}	
		elements.btn_graba_EvaluacionPostAnestesica.visible=false
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
 * @properties={typeid:24,uuid:"B20711F2-F374-4F4D-8862-76CF5587399A"}
 */
function onDataChange_tipo_bloqueo(oldValue, newValue, event) {
	elements.btn_graba_EvaluacionPostAnestesica.visible=true
	elements.anes_inhend.requestFocus()
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
 * @properties={typeid:24,uuid:"1AD94FEF-5967-4D57-9F17-27CA25642D00"}
 */
function onDataChange_habilita_btn_graba(oldValue, newValue, event) {
	if(foundset.anescircuito==1){
		foundset.anescerrado=0
		elements.anes_cerrado.visible=false
		elements.anes_cerrado_label.visible=false
	}else{
		elements.anes_cerrado.visible=true
		elements.anes_cerrado_label.visible=true
	}
	if(!elements.btn_graba_EvaluacionPostAnestesica.visible){
		elements.btn_graba_EvaluacionPostAnestesica.visible=true
	}
	return true
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"03FE76D7-92EA-4112-AAE5-9AE0A916072E"}
 */
function onAction_ayuda_EvaluacionPostAnestesica(event) {
	//globals.textoAyuda='AYUDA-28'
	var win = application.createWindow("p",JSWindow.MODAL_DIALOG)
	win.title = "Ayuda en Evaluación Anestésica Post-Operatoria";
	win.setLocation(810,050)
	win.setSize(500,350)
	//win.show(forms.frm_ayuda_gral_Z)
}
