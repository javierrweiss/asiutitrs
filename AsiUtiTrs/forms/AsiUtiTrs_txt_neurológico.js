/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"E5246D50-F2A8-463F-A860-73C9EC6ADD04"}
 */
var f_ppc = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"2364971A-0B40-4D22-A67E-4AB8ED17DA51"}
 */
var f_glassgow = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"C7F2B5EC-6805-4935-9CC1-67F35D000AF4"}
 */
var f_informe = null;

/**
 * Handle changed data.
 *
 * @param {String} oldValue old value
 * @param {String} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"37026BDF-3C21-4635-BA75-4D4A57173BEE"}
 */
function onDataChange_textArea(oldValue, newValue, event) {
	
	forms.HciutiTrs_frm_hist_clin_ingreso_utiTrs.$isDirty = true;
	return true
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
 * @properties={typeid:24,uuid:"645EDFEC-3691-414A-9F08-73CB0F8839D8"}
 */
function onDataChangeResp(oldValue, newValue, event) {
	calcularGlassgow();
	
	forms.HciutiTrs_frm_hist_clin_ingreso_utiTrs.$isDirty = true;
	return true
}

/**
 * Handle focus lost event of the element.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"DBEBFEE4-959E-44A1-BF4C-4A12707F9722"}
 */
function onFocusLostTxtPic(event) {
	// TODO Auto-generated method stub
	calcularPcc();
	return true
}

/**
 * Handle focus lost event of the element.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"16935832-9BFB-475D-94AF-32B359E3B86B"}
 */
function onFocusLostTam(event) {
	// TODO Auto-generated method stub
	calcularPcc();
	return true
	
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"EFE7EFB6-CD2C-4BE6-BC60-2C8F8316CCFB"}
 */
function onShowTxtNeuro(firstShow, event) {
	// TODO Auto-generated method stub
	calcularGlassgow();
	calcularPcc();
	
	
	return true
}

/**
 * @properties={typeid:24,uuid:"29E07752-D078-4D0B-A177-9F9EF943A43A"}
 */
function calcularGlassgow(){
	if(asiutitrs_rel_tbc_hciti_to_tbc_hciti.hitresver && asiutitrs_rel_tbc_hciti_to_tbc_hciti.hitresocu && asiutitrs_rel_tbc_hciti_to_tbc_hciti.hitresmot){
		var auxGlassgow = (6 - asiutitrs_rel_tbc_hciti_to_tbc_hciti.hitresver) + (5 - asiutitrs_rel_tbc_hciti_to_tbc_hciti.hitresocu) + (7 - asiutitrs_rel_tbc_hciti_to_tbc_hciti.hitresmot)
		f_glassgow = auxGlassgow + '/15'
	}
	
}

/**
 * @properties={typeid:24,uuid:"849209C6-50D5-4C44-BD84-793C7743ABAB"}
 */
function calcularPcc(){
	var auxPcc =  Math.abs(asiutitrs_rel_tbc_hciti_to_tbc_hciti.hitval11 - asiutitrs_rel_tbc_hciti_to_tbc_hciti.hitval10);
	f_ppc = auxPcc;
}
