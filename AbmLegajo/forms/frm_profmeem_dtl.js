/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"D3CBBA6E-416F-4D00-9B67-BC44C2AFA66B"}
 */
var fDescripcionEmpresa = '';

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"F8777C57-66E6-435D-83F2-1E23A51E9E24"}
 */
function onAction_empresa(event) {
	if (proem_empres_to_tbc_empresas.getSize()>0){
		fDescripcionEmpresa=proem_empres_to_tbc_empresas.emp1
	}else{
		fDescripcionEmpresa='Código de Empresa Inexistente'
	}
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"D1A129A9-30B6-41C1-ADCF-004B95BCB3CF"}
 */
function onAction_cancela_sector(event) {
	globals.vAltaEmpresa=false
	forms.frm_tab_empresas_que_factura.elements.tabless.tabIndex=1
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"1E8B33D7-2537-4C9D-BC4B-8DC8C790B0E8"}
 */
function onAction_graba(event) {
	if(globals.vAltaEmpresa){
		if(vs_to_tbc_profmeem.getSize()<1){
			vs_to_tbc_profmeem.newRecord()
		}
	}
	vs_to_tbc_profmeem.proem_codmed=globals.per_1
	vs_to_tbc_profmeem.proem_tipmed=0
	vs_to_tbc_profmeem.proem_empres=globals.proem_empres
	vs_to_tbc_profmeem.proem_modo_inde=globals.proem_modo_inde
	vs_to_tbc_profmeem.proem_otro_modo=globals.proem_otro_modo
	vs_to_tbc_profmeem.proem_fec_modif=globals.fechaActual()
	vs_to_tbc_profmeem.proem_hor_modif=globals.horaActual()
	vs_to_tbc_profmeem.proem_codoper=globals.vLega
	vs_to_tbc_profmeem.proem_tipoper=0
	databaseManager.saveData(vs_to_tbc_profmeem.getRecord(1))
	forms.frm_tab_empresas_que_factura.elements.tabless.tabIndex=1
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
 * @properties={typeid:24,uuid:"C364DCD6-1E8F-4C9F-A4EB-92A0C044F222"}
 */
function onDataChange_modalidad(oldValue, newValue, event) {
	if(newValue==4){
		elements.otro_modo.visible=true
		elements.lbl_otro_modo.visible=true
		elements.otro_modo.requestFocus()
	}else{
		elements.otro_modo.visible=false
		elements.lbl_otro_modo.visible=false
		elements.btn_graba.requestFocus()
	}
	return true
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"F2D7A445-F3EB-4DA6-8CB3-3465709A5779"}
 */
function onAction_otro_modo(event) {
	elements.btn_graba.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"0629DD90-4A53-41E5-9EBA-310C73A3420D"}
 */
function onAction_busca_empresa(event) {
	var win = application.createWindow("f",JSWindow.MODAL_DIALOG)
	    win.title = "Búsqueda de Código de Empresa";
	    win.setSize(600,500)
	    win.show(forms.frm_tab_empresa)
	
}
