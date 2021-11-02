/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"4A2E12CB-995B-4BDB-876D-C874EFD51122",variableType:4}
 */
var vTotal_Escala_Alderete = 0;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"E8C765FB-B38D-4C11-8703-1C4B7F5869F4",variableType:93}
 */
var var_anes_horrecup = new Date();

/**
 * // TODO generated, please specify type and doc for the params
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"67439AF9-4E75-40C7-AE93-BC1BD0FE8F5F"}
 */
function onHoraChange(event) 
{
	anes_horrecup = globals.TimeToInteger(var_anes_horrecup,'hhmm')
}

/**
 * // TODO generated, please specify type and doc for the params
 * @param {Object} firstShow
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"520988BB-8F65-4614-A1DD-36991751575A"}
 */
function onShow(firstShow, event) {
	elements.btn_graba_EvaluacionPostAnestesica.visible=true
	if(anes_horrecup != null)
		var_anes_horrecup = new Date(anes_horrecup, 'HH:mm')
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
 * @properties={typeid:24,uuid:"8F4A5742-4532-400D-BF13-72AA900B5D34"}
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
			foundset.anes_mecman=0
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
 * @properties={typeid:24,uuid:"A86D189D-3C16-4BE6-9A8C-52C9F7DBA7A6"}
 */
function onShow1_evaluacion_postanestesica(firstShow, event) {
	vTotal_Escala_Alderete=0
	for(var m=1;m<=5;m++){
		var name3= 'anes_esca_'+m
		if(vhiscli_to_tbc_anestesia[name3]>0){
			vTotal_Escala_Alderete=+vhiscli_to_tbc_anestesia[name3]-1
		}
	}
	if(foundset.anes_espasi==2){
		elements.anes_mecman_label.visible=true
		elements.anes_mecman.visible=true
	}else{
		elements.anes_mecman_label.visible=false
		elements.anes_mecman.visible=false
		foundset.anes_mecman=0
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
 * @properties={typeid:24,uuid:"53AF68C4-98AE-4724-AA54-A304BBF6555E"}
 */
function onDataChange_escala_alderete(oldValue, newValue, event) {
	vTotal_Escala_Alderete=0
	for(var m=1;m<=5;m++){
		var name3= 'anes_esca_'+m
		if(vhiscli_to_tbc_anestesia[name3]>0){
			vTotal_Escala_Alderete+=vhiscli_to_tbc_anestesia[name3]-1
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
 * @properties={typeid:24,uuid:"EC2FC120-A66A-44E1-AC0F-F735EABFA193"}
 */
function onAction_graba_EvaluacionPostAnestesica(event) {
	if(vhiscli_to_tbc_anestesia.getSize()>0){
		vhiscli_to_tbc_anestesia.anes_estado=1
		vhiscli_to_tbc_anestesia.anes_protocolo=globals.vNroProtocolo
		var hora4 = forms.EvaluacionPostAnestesia_dtl.var_anes_horrecup.getHours()
		var minutos4 = forms.EvaluacionPostAnestesia_dtl.var_anes_horrecup.getMinutes()
		var hora_ed4
		var minutos_ed4
		if (hora4>9){
			hora_ed4=hora4
		}else{
			hora_ed4='0'+hora4
		}
		if(minutos4>9){
			minutos_ed4=minutos4
		}else{
			minutos_ed4='0'+minutos4
		}
		vhiscli_to_tbc_anestesia.anes_horrecup=hora_ed4+''+minutos_ed4
		try{
			databaseManager.saveData(vhiscli_to_tbc_anestesia.getRecord(1))
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
 * @properties={typeid:24,uuid:"4273322B-2270-4A90-B408-A8B384C53C4A"}
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
 * @properties={typeid:24,uuid:"15C8DCD2-3FAA-43FF-BBFF-69B11356A767"}
 */
function onDataChange_habilita_btn_graba(oldValue, newValue, event) {
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
 * @properties={typeid:24,uuid:"ED9883F8-5985-4148-9EC5-1DC5FAAEA424"}
 */
function onAction_ayuda_EvaluacionPostAnestesica(event) {
	globals.textoAyuda='AYUDA-28'
	var win = application.createWindow("p",JSWindow.MODAL_DIALOG)
	win.title = "Ayuda en Evaluación Anestésica Post-Operatoria";
	win.setLocation(810,050)
	win.setSize(500,350)
	win.show(forms.frm_ayuda_gral_Z)
}
