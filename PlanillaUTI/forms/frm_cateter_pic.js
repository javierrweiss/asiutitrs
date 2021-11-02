/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"9D278960-B338-419A-ABF3-3E37EAD0B7B6"}
 */
function onShow(firstShow, event) {
	if(pic_to_hojauti_cateteres.getSize()>0){
		forms.frm_cateter_pic.elements.agrega.visible=false
		forms.frm_cateter_pic.elements.btn_cancela.visible=false	
	}else{
		forms.frm_cateter_pic.elements.agrega.visible=true
		//forms.frm_cateter_pic.elements.agrega.text='Agrega'
		forms.frm_cateter_pic.elements.btn_cancela.visible=false
		forms.frm_cateter_pic.elements.valores.visible=false
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
 * @properties={typeid:24,uuid:"E73A37EF-00C9-483E-BD20-251F5404181C"}
 */
function onAction_agrega(event) {
	if(globals.vCateteres){
		globals.vCateteres=false	
	var clienttime = application.getServerTimeStamp();
	var horacarga = clienttime.getHours()*100+clienttime.getMinutes()
	forms.frm_cateter_pic.elements.agrega.visible=false
	forms.frm_cateter_pic.elements.btn_cancela.visible=true
	pic_to_hojauti_cateteres.newRecord()
	pic_to_hojauti_cateteres.tipo_opera = globals.vTipoOperador
	pic_to_hojauti_cateteres.nro_operador = globals.vLegajo
	pic_to_hojauti_cateteres.fecha_carga = utils.timestampToDate(new Date)
	pic_to_hojauti_cateteres.hora_carga = horacarga	
	elements.cateter_texto.visible=true
	elements.lbl_ubica.visible=true
	foundset.cateter_sino=1
	foundset.cateter_texto=''
	elements.cateter_texto.requestFocus()
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"F2020869-9842-4B97-B04F-E16A97C98FAA"}
 */
function onAction_cancela(event) {
	pic_to_hojauti_cateteres.deleteRecord()
	forms.frm_cateter_pic.elements.btn_cancela.visible=false
	forms.frm_cateter_pic.elements.valores.visible=false
	forms.frm_cateter_pic.elements.agrega.visible=true
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
 * @properties={typeid:24,uuid:"4A7953C5-682B-406B-A2BC-C4F0DAFEF54E"}
 */
function onDataChange_pic(oldValue, newValue, event) {
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
 * @properties={typeid:24,uuid:"D98B359D-814F-41D2-A763-747DF80E5527"}
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
 * @properties={typeid:24,uuid:"ABA3BBFB-61A9-46FD-8EEA-E5068A97FD03"}
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