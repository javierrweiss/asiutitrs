/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"55AE93D0-C0D5-4CA5-8283-BE47A4CA3911"}
 */
function onShow(firstShow, event) {
	if(balon_to_hojauti_cateteres.getSize()>0){
		forms.frm_cateter_balon.elements.agrega.visible=false
		forms.frm_cateter_balon.elements.btn_cancela.visible=false	
	}else{
		forms.frm_cateter_balon.elements.agrega.visible=true
		//forms.frm_cateter_balon.elements.agrega.text='Agrega'
		forms.frm_cateter_balon.elements.btn_cancela.visible=false
		forms.frm_cateter_balon.elements.valores.visible=false
		forms.frm_cateter_balon.elements.cateter_sino.visible=false
		forms.frm_cateter_balon.elements.cateter_texto.visible=false
		forms.frm_cateter_balon.elements.lbl_tiene.visible=false
		forms.frm_cateter_balon.elements.lbl_ubica.visible=false
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"4FFE0176-B0C4-4219-A1C5-335595958C6D"}
 */
function onAction_agrega(event) {
	if(globals.vCateteres){
	globals.vCateteres=false	
	var clienttime = application.getServerTimeStamp();
	var horacarga = clienttime.getHours()*100+clienttime.getMinutes()
	forms.frm_cateter_balon.elements.agrega.visible=false
	forms.frm_cateter_balon.elements.btn_cancela.visible=true
	forms.frm_cateter_balon.elements.valores.visible=true
	
	balon_to_hojauti_cateteres.newRecord()
	balon_to_hojauti_cateteres.tipo_opera = globals.vTipoOperador
	balon_to_hojauti_cateteres.nro_operador = globals.vLegajo
	balon_to_hojauti_cateteres.fecha_carga = utils.timestampToDate(new Date)
	balon_to_hojauti_cateteres.hora_carga = horacarga	
	forms.frm_cateter_balon.elements.valores.requestFocus()
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"E3D5ABB3-FD8F-44DA-8D0B-639B4C49D37E"}
 */
function onAction_cancela(event) {
	balon_to_hojauti_cateteres.deleteRecord()
	forms.frm_cateter_balon.elements.btn_cancela.visible=false
	forms.frm_cateter_balon.elements.valores.visible=false
	forms.frm_cateter_balon.elements.agrega.visible=true
	forms.frm_cateter_balon.elements.cateter_sino.visible=false
	forms.frm_cateter_balon.elements.cateter_texto.visible=false
	forms.frm_cateter_balon.elements.lbl_tiene.visible=false
	forms.frm_cateter_balon.elements.lbl_ubica.visible=false
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
 * @properties={typeid:24,uuid:"5072BB03-9C2D-4608-80A8-8E98F412DABF"}
 */
function onDataChange_balon(oldValue, newValue, event) {
	if(newValue==null||newValue==''){
		globals.vCateteres=false
		return false
	}else{
		globals.vCateteres=true
		forms.frm_cateter_balon.elements.cateter_sino.visible=true
		forms.frm_cateter_balon.elements.lbl_tiene.visible=true
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
 * @properties={typeid:24,uuid:"823CBE89-B016-45FE-A136-406A08D90231"}
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
 * @properties={typeid:24,uuid:"FAF5459C-6459-4285-A0ED-E7175F4FA34F"}
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