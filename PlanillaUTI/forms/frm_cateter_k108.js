/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"3587E0EF-9EC6-4236-AC37-09A882CFCEAD"}
 */
function onShow(firstShow, event) {
	if(k108_to_hojauti_cateteres.getSize()>0){
		forms.frm_cateter_k108.elements.agrega.visible=false
		forms.frm_cateter_k108.elements.btn_cancela.visible=false	
	}else{
		forms.frm_cateter_k108.elements.agrega.visible=true
		//forms.frm_cateter_k108.elements.agrega.text='Agrega'
		forms.frm_cateter_k108.elements.btn_cancela.visible=false
		forms.frm_cateter_k108.elements.valores.visible=false
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
 * @properties={typeid:24,uuid:"D3E5744B-F741-44D7-9E13-E7AE51444780"}
 */
function onAction_agrega(event) {
	if(globals.vCateteres){
		globals.vCateteres=false	
	var clienttime = application.getServerTimeStamp();
	var horacarga = clienttime.getHours()*100+clienttime.getMinutes()
	forms.frm_cateter_k108.elements.agrega.visible=false
	forms.frm_cateter_k108.elements.btn_cancela.visible=true
	forms.frm_cateter_k108.elements.valores.visible=true
	k108_to_hojauti_cateteres.newRecord()
	k108_to_hojauti_cateteres.tipo_opera = globals.vTipoOperador
	k108_to_hojauti_cateteres.nro_operador = globals.vLegajo
	k108_to_hojauti_cateteres.fecha_carga = utils.timestampToDate(new Date)
	k108_to_hojauti_cateteres.hora_carga = horacarga
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"CD87F5C1-3F4F-4D1E-BD96-BD4899788C58"}
 */
function onAction_cancela(event) {
	k108_to_hojauti_cateteres.deleteRecord()
	forms.frm_cateter_k108.elements.btn_cancela.visible=false
	forms.frm_cateter_k108.elements.valores.visible=false
	forms.frm_cateter_k108.elements.agrega.visible=true
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
 * @properties={typeid:24,uuid:"2561862B-BD3E-46F0-892B-7504BDFB6289"}
 */
function onDataChange_k108(oldValue, newValue, event) {
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
 * @properties={typeid:24,uuid:"987F6DB3-947B-41E1-9B6E-4C1016A522C1"}
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
 * @properties={typeid:24,uuid:"E6FEE7F4-2777-4541-9916-7B8B39BB425E"}
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