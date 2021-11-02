/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"4DB0E1CA-FC24-4456-B85A-9CBB4ED51C79"}
 */
function onShow(firstShow, event) {
	if(viacen_to_hojauti_cateteres.getSize()>0){
		forms.frm_cateter_via_central.elements.agrega.visible=false
		forms.frm_cateter_via_central.elements.btn_cancela.visible=false	
	}else{
		forms.frm_cateter_via_central.elements.agrega.visible=true
		//forms.frm_cateter_via_central.elements.agrega.text='Agrega'
		forms.frm_cateter_via_central.elements.btn_cancela.visible=false
		forms.frm_cateter_via_central.elements.valores.visible=false
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
 * @properties={typeid:24,uuid:"ECE36105-1EC2-4CAA-BC19-9B8C3DF70C31"}
 */
function onAction_agrega(event) {
	if (globals.vCateteres){
	var clienttime = application.getServerTimeStamp();
	var horacarga = clienttime.getHours()*100+clienttime.getMinutes()
	forms.frm_cateter_via_central.elements.agrega.visible=false
	forms.frm_cateter_via_central.elements.btn_cancela.visible=true
	forms.frm_cateter_via_central.elements.valores.visible=true
	viacen_to_hojauti_cateteres.newRecord()
	viacen_to_hojauti_cateteres.tipo_opera = globals.vTipoOperador
	viacen_to_hojauti_cateteres.nro_operador = globals.vLegajo
	viacen_to_hojauti_cateteres.fecha_carga = utils.timestampToDate(new Date)
	viacen_to_hojauti_cateteres.hora_carga = horacarga	
	globals.vCateteres=false
	elements.valores.requestFocus()
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"F271EB7A-763B-4B34-949C-8624DFC13909"}
 */
function onAction_cancela(event) {
	viacen_to_hojauti_cateteres.deleteRecord()
	forms.frm_cateter_via_central.elements.btn_cancela.visible=false
	forms.frm_cateter_via_central.elements.valores.visible=false
	forms.frm_cateter_via_central.elements.agrega.visible=true
	elements.cateter_sino.visible=false
	elements.cateter_texto.visible=false
	elements.lbl_tiene.visible=false
	elements.lbl_ubica.visible=false
	foundset.cateter_sino=0
	foundset.cateter_texto=''
	globals.vCateteres=true
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"509DDBCD-F3CE-4BD1-A57D-B20B2BAC3CC3"}
 */
function onAction_f1_viacen(event) {
	globals.vTipoCateteres='01viacen'
	var win = application.createWindow("c",JSWindow.MODAL_DIALOG)
	win.title = "Cronología de Vía Central";
	win.setSize(700,380)
	win.show(forms.tab_cronologia_cateteres)
}

/**
 * Handle focus gained event of the element.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"5A6FD109-D326-4979-8B41-9BC074E1F45A"}
 */
function onFocusGained(event) {
	if(foundset.valores==null){
		elements.valores.requestFocus()
	}
}

/**
 * Handle focus lost event of the element.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"1D58F87A-72D9-4844-A76A-8B0B143EC6B8"}
 */
function onFocusLost(event) {
	if(foundset.valores==null){
		elements.valores.requestFocus()
	}
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
 * @properties={typeid:24,uuid:"58B68C43-D23E-4DC6-B771-27BC1B70CA9F"}
 */
function onDataChange_via_cent(oldValue, newValue, event) {
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
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"19A42E84-81E2-4ACF-BE5C-E71EDBCE221F"}
 */
function onAction_via_cent(event) {
	if(foundset.valores==null||foundset.valores==''){
		globals.vCateteres=false
	}else{
		globals.vCateteres=true
	}	
}

/**
 * TODO generated, please specify type and doc for the params
 * @param oldValue
 * @param newValue
 * @param event
 *
 * @properties={typeid:24,uuid:"C4CF2097-AAF6-44F9-A5EE-918CCF81ADE5"}
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
 * @properties={typeid:24,uuid:"0BC0E61E-6BE5-42E9-BC58-21FF2359897B"}
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
