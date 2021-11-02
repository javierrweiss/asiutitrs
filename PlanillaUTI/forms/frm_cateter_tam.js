/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"09D90F50-D0A7-4FC5-B24E-D655CD78D8C1"}
 */
function onShow(firstShow, event) {
	if(tam_to_hojauti_cateteres.getSize()>0){
		forms.frm_cateter_tam.elements.agrega.visible=false
		forms.frm_cateter_tam.elements.btn_cancela.visible=false	
	}else{
		forms.frm_cateter_tam.elements.agrega.visible=true
		//forms.frm_cateter_tam.elements.agrega.text='Agrega'
		forms.frm_cateter_tam.elements.btn_cancela.visible=false
		forms.frm_cateter_tam.elements.valores.visible=false
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
 * @properties={typeid:24,uuid:"A51E2078-DA0E-454F-A553-5BEFE47091D2"}
 */
function onAction_agrega(event) {
	if(globals.vCateteres){
		globals.vCateteres=false
	var clienttime = application.getServerTimeStamp();
	var horacarga = clienttime.getHours()*100+clienttime.getMinutes()
	forms.frm_cateter_tam.elements.agrega.visible=false
	forms.frm_cateter_tam.elements.btn_cancela.visible=true
	forms.frm_cateter_tam.elements.valores.visible=true
	tam_to_hojauti_cateteres.newRecord()
	tam_to_hojauti_cateteres.tipo_opera = globals.vTipoOperador
	tam_to_hojauti_cateteres.nro_operador = globals.vLegajo
	tam_to_hojauti_cateteres.fecha_carga = utils.timestampToDate(new Date)
	tam_to_hojauti_cateteres.hora_carga = horacarga	
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"27EB9BE1-F376-4875-ACEB-B6BE8EB4E01A"}
 */
function onAction_cancela(event) {
	tam_to_hojauti_cateteres.deleteRecord()
	forms.frm_cateter_tam.elements.btn_cancela.visible=false
	forms.frm_cateter_tam.elements.valores.visible=false
	forms.frm_cateter_tam.elements.agrega.visible=true
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
 * @properties={typeid:24,uuid:"469B6A89-5912-46F9-9073-A6366F36FCD8"}
 */
function onDataChange_tam(oldValue, newValue, event) {
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
 * @properties={typeid:24,uuid:"DF9D291C-3501-481D-84B2-9C9476F51F1A"}
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
 * @properties={typeid:24,uuid:"D29E42E0-19A4-4829-8ABD-D6E5648441FE"}
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