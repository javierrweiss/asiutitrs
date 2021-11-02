/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"C6B4171A-131A-4CD5-B86C-0C037456D603"}
 */
function onShow(firstShow, event) {
	if(traqueo_to_hojauti_cateteres.getSize()>0){
		forms.frm_cateter_traqueo.elements.agrega.visible=false
		forms.frm_cateter_traqueo.elements.btn_cancela.visible=false	
	}else{
		forms.frm_cateter_traqueo.elements.agrega.visible=true
		//forms.frm_cateter_traqueo.elements.agrega.text='Agrega'
		forms.frm_cateter_traqueo.elements.btn_cancela.visible=false
		forms.frm_cateter_traqueo.elements.valores.visible=false
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
 * @properties={typeid:24,uuid:"DBDF4843-3A80-46AF-B4EB-6F57C4A6B883"}
 */
function onAction_agrega(event) {
	if(globals.vCateteres){
		globals.vCateteres=false
	var clienttime = application.getServerTimeStamp();
	var horacarga = clienttime.getHours()*100+clienttime.getMinutes()
	forms.frm_cateter_traqueo.elements.agrega.visible=false
	forms.frm_cateter_traqueo.elements.btn_cancela.visible=true
	forms.frm_cateter_traqueo.elements.valores.visible=true
	traqueo_to_hojauti_cateteres.newRecord()
	traqueo_to_hojauti_cateteres.tipo_opera = globals.vTipoOperador
	traqueo_to_hojauti_cateteres.nro_operador = globals.vLegajo
	traqueo_to_hojauti_cateteres.fecha_carga = utils.timestampToDate(new Date)
	traqueo_to_hojauti_cateteres.hora_carga = horacarga	
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"F25622A0-49D1-4C77-AC3D-3B463995EFA6"}
 */
function onAction_cancela(event) {
	traqueo_to_hojauti_cateteres.deleteRecord()
	forms.frm_cateter_traqueo.elements.btn_cancela.visible=false
	forms.frm_cateter_traqueo.elements.valores.visible=false
	forms.frm_cateter_traqueo.elements.agrega.visible=true
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
 * @properties={typeid:24,uuid:"BF88E56C-E802-4701-A9B2-CFE5E9E32ADE"}
 */
function onDataChange_traqueo(oldValue, newValue, event) {
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
 * @properties={typeid:24,uuid:"DF797A1A-4230-47A0-B059-E511207647B0"}
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
 * @properties={typeid:24,uuid:"9466EE7B-E6F3-43B0-AA3E-0CE71F9DADE5"}
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