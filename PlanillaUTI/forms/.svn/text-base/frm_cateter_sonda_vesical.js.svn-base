/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"2F41979D-8780-4F54-BE13-8318AEB42B71"}
 */
function onShow(firstShow, event) {
	if(sonves_to_hojauti_cateteres.getSize()>0){
		forms.frm_cateter_sonda_vesical.elements.agrega.visible=false
		forms.frm_cateter_sonda_vesical.elements.btn_cancela.visible=false	
	}else{
		forms.frm_cateter_sonda_vesical.elements.agrega.visible=true
		//forms.frm_cateter_sonda_vesical.elements.agrega.text='Agrega'
		forms.frm_cateter_sonda_vesical.elements.btn_cancela.visible=false
		forms.frm_cateter_sonda_vesical.elements.valores.visible=false
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"23CD2F6B-93CC-402C-8E42-C7B3B111E0E3"}
 */
function onAction_agrega(event) {
	if(globals.vCateteres){
		globals.vCateteres=false	
	var clienttime = application.getServerTimeStamp();
	var horacarga = clienttime.getHours()*100+clienttime.getMinutes()
	forms.frm_cateter_sonda_vesical.elements.agrega.visible=false
	forms.frm_cateter_sonda_vesical.elements.btn_cancela.visible=true
	forms.frm_cateter_sonda_vesical.elements.valores.visible=true
	sonves_to_hojauti_cateteres.newRecord()
	sonves_to_hojauti_cateteres.tipo_opera = globals.vTipoOperador
	sonves_to_hojauti_cateteres.nro_operador = globals.vLegajo
	sonves_to_hojauti_cateteres.fecha_carga = utils.timestampToDate(new Date)
	sonves_to_hojauti_cateteres.hora_carga = horacarga	
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"C78DA7B2-941A-4E5A-8C04-191DC6D53EB8"}
 */
function onAction_cancela(event) {
	sonves_to_hojauti_cateteres.deleteRecord()
	forms.frm_cateter_sonda_vesical.elements.btn_cancela.visible=false
	forms.frm_cateter_sonda_vesical.elements.valores.visible=false
	forms.frm_cateter_sonda_vesical.elements.agrega.visible=true
	foundset.cateter_sino=0
	foundset.cateter_texto=''
	globals.vCateteres=true
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
 * @properties={typeid:24,uuid:"CE81457F-E60C-4490-A3A4-A6168A474079"}
 */
function onDataChange_sonda_vesical(oldValue, newValue, event) {
	if(newValue==null||newValue==''){
		globals.vCateteres=false
		return false
	}else{
		globals.vCateteres=true
		return true
	}	
}
