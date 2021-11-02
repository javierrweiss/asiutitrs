/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"D1866F95-750B-4F9A-8D51-099739132B92"}
 */
function onShow(firstShow, event) {
	if(sng_to_hojauti_cateteres.getSize()>0){
		forms.frm_cateter_sng.elements.agrega.visible=false
		forms.frm_cateter_sng.elements.btn_cancela.visible=false	
	}else{
		forms.frm_cateter_sng.elements.agrega.visible=true
		//forms.frm_cateter_sng.elements.agrega.text='Agrega'
		forms.frm_cateter_sng.elements.btn_cancela.visible=false
		forms.frm_cateter_sng.elements.valores.visible=false
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
 * @properties={typeid:24,uuid:"5CF978C9-7CA0-48A9-9034-52257B4C7130"}
 */
function onAction_agrega(event) {
	if(globals.vCateteres){
		globals.vCateteres=false	
	var clienttime = application.getServerTimeStamp();
	var horacarga = clienttime.getHours()*100+clienttime.getMinutes()
	forms.frm_cateter_sng.elements.agrega.visible=false
	forms.frm_cateter_sng.elements.btn_cancela.visible=true
	forms.frm_cateter_sng.elements.valores.visible=true
	sng_to_hojauti_cateteres.newRecord()
	sng_to_hojauti_cateteres.tipo_opera = globals.vTipoOperador
	sng_to_hojauti_cateteres.nro_operador = globals.vLegajo
	sng_to_hojauti_cateteres.fecha_carga = utils.timestampToDate(new Date)
	sng_to_hojauti_cateteres.hora_carga = horacarga	
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"8E618A1A-8F0C-491E-98BB-CCDCA14A3D15"}
 */
function onAction_cancela(event) {
	sng_to_hojauti_cateteres.deleteRecord()
	forms.frm_cateter_sng.elements.btn_cancela.visible=false
	forms.frm_cateter_sng.elements.valores.visible=false
	forms.frm_cateter_sng.elements.agrega.visible=true
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
 * @properties={typeid:24,uuid:"9700876B-2391-4A06-B353-1C9A1215D106"}
 */
function onDataChange_sng(oldValue, newValue, event) {
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
 * TODO generated, please specify type and doc for the params
 * @param oldValue
 * @param newValue
 * @param event
 *
 * @properties={typeid:24,uuid:"53AC3E39-0EFA-4F90-873F-0CDE01EC5462"}
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
 * Handle changed data.
 *
 * @param {String} oldValue old value
 * @param {String} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"7B8A3BE7-9328-427E-AB80-62408CE0C4B0"}
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
