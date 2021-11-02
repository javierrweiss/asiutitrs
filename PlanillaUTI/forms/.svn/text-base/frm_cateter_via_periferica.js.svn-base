/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"10748B3D-E783-4FD7-A2EB-9F6C7A1D415D"}
 */
function onShow(firstShow, event) {
	if(viaper_to_hojauti_cateteres.getSize()>0){
		forms.frm_cateter_via_periferica.elements.agrega.visible=false
		forms.frm_cateter_via_periferica.elements.btn_cancela.visible=false	
	}else{
		forms.frm_cateter_via_periferica.elements.agrega.visible=true
		//forms.frm_cateter_via_periferica.elements.agrega.text='Agrega'
		forms.frm_cateter_via_periferica.elements.btn_cancela.visible=false
		forms.frm_cateter_via_periferica.elements.valores.visible=false
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
 * @properties={typeid:24,uuid:"633A0CA4-F6F5-4E48-8C53-81EC943DAB7B"}
 */
function onAction_agrega(event) {
	if(globals.vCateteres){
	globals.vCateteres=false	
	var clienttime = application.getServerTimeStamp();
	var horacarga = clienttime.getHours()*100+clienttime.getMinutes()
	forms.frm_cateter_via_periferica.elements.agrega.visible=false
	forms.frm_cateter_via_periferica.elements.btn_cancela.visible=true
	forms.frm_cateter_via_periferica.elements.valores.visible=true
	viaper_to_hojauti_cateteres.newRecord()
	viaper_to_hojauti_cateteres.tipo_opera = globals.vTipoOperador
	viaper_to_hojauti_cateteres.nro_operador = globals.vLegajo
	viaper_to_hojauti_cateteres.fecha_carga = utils.timestampToDate(new Date)
	viaper_to_hojauti_cateteres.hora_carga = horacarga
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"A50BFEE6-3BFD-43EE-9146-FECDC2DFDAC9"}
 */
function onAction_cancela(event) {
	viaper_to_hojauti_cateteres.deleteRecord()
	forms.frm_cateter_via_periferica.elements.btn_cancela.visible=false
	forms.frm_cateter_via_periferica.elements.valores.visible=false
	forms.frm_cateter_via_periferica.elements.agrega.visible=true
	elements.cateter_sino.visible=false
	elements.cateter_texto.visible=false
	elements.lbl_tiene.visible=false
	elements.lbl_ubica.visible=false
	foundset.cateter_sino=0
	foundset.cateter_texto=''
	globals.vCateteres=true
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
 * @properties={typeid:24,uuid:"017E15F9-C4A8-4F53-BDBD-3329424EA826"}
 */
function onDataChange_via_peri(oldValue, newValue, event) {
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
 * @properties={typeid:24,uuid:"5ED86AE2-AF98-4573-82BA-9E0CE16AA3CE"}
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
 * @properties={typeid:24,uuid:"E9D02AA4-2C48-4AF6-B804-E598A5258742"}
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