/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"3DD69CD7-269F-4284-BCEB-62947692A7B7"}
 */
function onShow(firstShow, event) {
	if(swan_to_hojauti_cateteres.getSize()>0){
		forms.frm_cateter_swan_ganz.elements.agrega.visible=false
		forms.frm_cateter_swan_ganz.elements.btn_cancela.visible=false	
	}else{
		forms.frm_cateter_swan_ganz.elements.agrega.visible=true
		//forms.frm_cateter_swan_ganz.elements.agrega.text='Agrega'
		forms.frm_cateter_swan_ganz.elements.btn_cancela.visible=false
		forms.frm_cateter_swan_ganz.elements.valores.visible=false
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
 * @properties={typeid:24,uuid:"D0B75258-5848-451F-B258-256FF06A16A0"}
 */
function onAction_agrega(event) {
	if(globals.vCateteres){
		globals.vCateteres=false
	var clienttime = application.getServerTimeStamp();
	var horacarga = clienttime.getHours()*100+clienttime.getMinutes()
	forms.frm_cateter_swan_ganz.elements.agrega.visible=false
	forms.frm_cateter_swan_ganz.elements.btn_cancela.visible=true
	forms.frm_cateter_swan_ganz.elements.valores.visible=true
	swan_to_hojauti_cateteres.newRecord()
	swan_to_hojauti_cateteres.tipo_opera = globals.vTipoOperador
	swan_to_hojauti_cateteres.nro_operador = globals.vLegajo
	swan_to_hojauti_cateteres.fecha_carga = utils.timestampToDate(new Date)
	swan_to_hojauti_cateteres.hora_carga = horacarga
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"3D289EC2-D9A8-4A63-809A-39005F9A8A2B"}
 */
function onAction_cancela(event) {
	swan_to_hojauti_cateteres.deleteRecord()
	forms.frm_cateter_swan_ganz.elements.btn_cancela.visible=false
	forms.frm_cateter_swan_ganz.elements.valores.visible=false
	forms.frm_cateter_swan_ganz.elements.agrega.visible=true
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
 * @properties={typeid:24,uuid:"1C7BF1D2-2C4D-46E3-833B-1F724E403AC7"}
 */
function onDataChange_swan(oldValue, newValue, event) {
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
 * @properties={typeid:24,uuid:"771D98D7-E3EC-4B22-8E89-00B2FDC71F1D"}
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
 * @properties={typeid:24,uuid:"B9880718-64F9-4572-A0A3-8CB0A972FBD1"}
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