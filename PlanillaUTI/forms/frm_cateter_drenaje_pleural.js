/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"158CEB69-E677-44AD-8664-7C22C66A182B"}
 */
function onShow(firstShow, event) {
	if(drenajep_to_hojauti_cateteres.getSize()>0){
		forms.frm_cateter_drenaje_pleural.elements.agrega.visible=false
		forms.frm_cateter_drenaje_pleural.elements.btn_cancela.visible=false	
	}else{
		forms.frm_cateter_drenaje_pleural.elements.agrega.visible=true
		//forms.frm_cateter_drenaje_pleural.elements.agrega.text='Agrega'
		forms.frm_cateter_drenaje_pleural.elements.btn_cancela.visible=false
		forms.frm_cateter_drenaje_pleural.elements.valores.visible=false
		elements.cateter_sino.visible=false
		elements.cateter_texto.visible=false
		elements.lbl_tiene.visible=false
		elements.lbl_ubica.visible=false
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"6B55E0A7-71A9-4C09-BC8C-2C072E2FEAC1"}
 */
function onAction_agrega(event) {
	if(globals.vCateteres){
		globals.vCateteres=false	
	var clienttime = application.getServerTimeStamp();
	var horacarga = clienttime.getHours()*100+clienttime.getMinutes()
	forms.frm_cateter_drenaje_pleural.elements.agrega.visible=false
	forms.frm_cateter_drenaje_pleural.elements.btn_cancela.visible=true
	forms.frm_cateter_drenaje_pleural.elements.valores.visible=true
	drenajep_to_hojauti_cateteres.newRecord()
	drenajep_to_hojauti_cateteres.tipo_opera = globals.vTipoOperador
	drenajep_to_hojauti_cateteres.nro_operador = globals.vLegajo
	drenajep_to_hojauti_cateteres.fecha_carga = utils.timestampToDate(new Date)
	drenajep_to_hojauti_cateteres.hora_carga = horacarga
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"98CA8DB0-0E05-455A-8937-113A70CB0D29"}
 */
function onAction_cancela(event) {
	drenajep_to_hojauti_cateteres.deleteRecord()
	forms.frm_cateter_drenaje_pleural.elements.btn_cancela.visible=false
	forms.frm_cateter_drenaje_pleural.elements.valores.visible=false
	forms.frm_cateter_drenaje_pleural.elements.agrega.visible=true
	elements.cateter_sino.visible=false
	elements.cateter_texto.visible=false
	elements.lbl_tiene.visible=false
	elements.lbl_ubica.visible=false
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
 * @properties={typeid:24,uuid:"F7FA2EF7-30D5-4342-BF37-FC925C04FD32"}
 */
function onDataChange_drenajep(oldValue, newValue, event) {
	if(newValue==null||newValue==''){
		globals.vCateteres=false
		return false
	}else{
		globals.vCateteres=true
		elements.cateter_sino.visible=true
		elements.lbl_tiene.visible=true
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
 * @properties={typeid:24,uuid:"F574DBD4-9062-42EA-BC2B-0833FA605F08"}
 */
function onDataChange_cateter_sino(oldValue, newValue, event) {
	if(newValue==1){
		elements.lbl_ubica.visible=true
		elements.cateter_texto.visible=true
		foundset.cateter_texto=''
		globals.vCateteres=false	
		elements.cateter_texto.requestFocus()
	}else{
		elements.lbl_ubica.visible=false
		elements.cateter_texto.visible=false
		foundset.cateter_sino=0
		foundset.cateter_texto=''
		globals.vCateteres=true
	}
	return true
}

/**
 * TODO generated, please specify type and doc for the params
 * @param oldValue
 * @param newValue
 * @param event
 *
 * @properties={typeid:24,uuid:"B340ACF7-269D-4A54-A240-8782BE0BC33D"}
 */
function onDataChange_cateter_texto(oldValue, newValue, event) {
	if(newValue!=null&&newValue!=''){
		globals.vCateteres=true
		return true
	}else{
		globals.vCateteres=false
		return false
	}
}