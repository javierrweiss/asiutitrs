
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"AC078111-03A8-48B4-AB85-68B9A8C2F6C3",variableType:4}
 */
var f_chk_via_end_ctral = 0

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"C0B8AB10-3DCE-4CC9-BCE6-7D4F24F9D2EA",variableType:4}
 */
var f_chk_cateter_cook = 0

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"6CDE2C8B-2E67-49C4-9458-D050F16AE8ED",variableType:4}
 */
var f_chk_sonda_vesical = 0

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"2C77765A-684A-4002-9FE2-4AA880034B5F",variableType:4}
 */
var f_chk_sonda_ng = 0

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"61A3CE5F-E368-4E5B-AA2F-AA4DBFA411F5",variableType:4}
 */
var f_chk_sonda_sog = 0

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"7903A6F7-12A6-4F1D-884E-87D23893F926",variableType:4}
 */
var f_chk_sonda_otras = 0

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"36D4B828-413D-4AC9-948A-DC28F955E47D",variableType:4}
 */
var f_chk_escaras = 0

/**
 * Handle changed data.
 *
 * @param {Number} oldValue old value
 * @param {Number} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"17091C55-97F6-4E5D-99A5-D415A920BE1A"}
 */
function onDataChangeViaEndCentral(oldValue, newValue, event) {
	forms.HciutiTrs_frm_evo_medica_utiTrs_hoja_TI.$isDirty = true;
	if (newValue == 1) {
		forms.HciutiTrs_frm_evo_medica_utiTrs_hoja_TI.$isDirty = true;
		elements.txt_Via_End_Ctral.editable = true;
		elements.txt_Via_End_Ctral.readOnly = false;
		
		return true
	}else{
		elements.txt_Via_End_Ctral.editable = false
		globals.AsiUtiTrs_Hoja_ViaEndCetral_Lugar=' ';
	}
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
 * @properties={typeid:24,uuid:"79711EF4-1889-4ADF-8107-C37A75A61E85"}
 */
function onDataChangeCateterCook(oldValue, newValue, event) {
	forms.HciutiTrs_frm_evo_medica_utiTrs_hoja_TI.$isDirty = true;
	if (newValue == 1) {
		forms.HciutiTrs_frm_evo_medica_utiTrs_hoja_TI.$isDirty = true;
		elements.txt_Cateter_Cook.editable = true;
		return true
	}else{
		elements.txt_Cateter_Cook.editable = false
		globals.AsiUtiTrs_Hoja_Cateter_Cook_Lugar = ' ';
	}
	return true
}

/**
 * TODO generated, please specify type and doc for the params
 * @param oldValue
 * @param newValue
 * @param event
 *
 * @properties={typeid:24,uuid:"3D999530-9691-41F0-A5CB-F5AE5C50AE08"}
 */
function onDataChangeSondaVescial(oldValue, newValue, event) {
	forms.HciutiTrs_frm_evo_medica_utiTrs_hoja_TI.$isDirty = true;
	if (newValue == 1) {
		forms.HciutiTrs_frm_evo_medica_utiTrs_hoja_TI.$isDirty = true;
		elements.txt_Sonda_Vesical.editable = true;
		return true
	}else{
		elements.txt_Sonda_Vesical.editable = false
		globals.AsiUtiTrs_Hoja_SondaVesical_Obs = ' '
	}
	return true
}

/**
 * TODO generated, please specify type and doc for the params
 * @param oldValue
 * @param newValue
 * @param event
 *
 * @properties={typeid:24,uuid:"2FE6BC50-789B-4137-B4C6-9F8709B99434"}
 */
function onDataChangeSondaNG(oldValue, newValue, event) {
	if (newValue == 1) {
		forms.HciutiTrs_frm_evo_medica_utiTrs_hoja_TI.$isDirty = true;
		elements.txt_Sonda_NG.editable = true;
		return true
	}else{
		elements.txt_Sonda_NG.editable = false
		globals.AsiUtiTrs_Hoja_SondaNG_Obs = ' '
	}
	return true
}

/**
 * TODO generated, please specify type and doc for the params
 * @param oldValue
 * @param newValue
 * @param event
 *
 * @properties={typeid:24,uuid:"C5F07AB9-2266-4D34-AEB8-B02135BFA887"}
 */
function onDataChangeSondaSOG(oldValue, newValue, event) {
	forms.HciutiTrs_frm_evo_medica_utiTrs_hoja_TI.$isDirty = true;
	if (newValue == 1) {
		forms.HciutiTrs_frm_evo_medica_utiTrs_hoja_TI.$isDirty = true;
		elements.txt_Sonda_Sog.editable = true;
		return true
	}else{
		elements.txt_Sonda_Sog.editable = false
		globals.AsiUtiTrs_Hoja_SondaSog_Obs = ' '
	}
	return true
}

/**
 * TODO generated, please specify type and doc for the params
 * @param oldValue
 * @param newValue
 * @param event
 *
 * @properties={typeid:24,uuid:"B171E560-E45E-4E02-AB17-702C640BF1E6"}
 */
function onDataChangeSondaOtras(oldValue, newValue, event) {
	forms.HciutiTrs_frm_evo_medica_utiTrs_hoja_TI.$isDirty = true;
	if (newValue == 1) {
		forms.HciutiTrs_frm_evo_medica_utiTrs_hoja_TI.$isDirty = true;
		elements.txt_Otras.editable = true;
		return true
	}else{
		elements.txt_Otras.editable = false
		globals.AsiUtiTrs_Hoja_SondaOtras_Obs = ' '
	}
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
 * @properties={typeid:24,uuid:"AB92D5DC-0C0A-4BA4-A6B9-2F14CA49F0E4"}
 */
function onDataChangeEscaras(oldValue, newValue, event) {
	forms.HciutiTrs_frm_evo_medica_utiTrs_hoja_TI.$isDirty = true;
	if (newValue == 1) {
		elements.txt_Escaras.editable = true;
		return true
	}else{
		elements.txt_Escaras.editable = false
		globals.AsiUtiTrs_Hoja_Escaras_Obs = ' '
	}
	return true
}


/**
 * Handle changed data.
 *
 * @param {String} oldValue old value
 * @param {String} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"13CF08C2-2E10-460E-AF26-62E409FF1AC1"}
 */
function onDataChangeTextViaEndCtral(oldValue, newValue, event) {
	// TODO Auto-generated method stub
	forms.HciutiTrs_frm_evo_medica_utiTrs_hoja_TI.$isDirty = true;
	if(utils.stringTrim(newValue)==""){
		globals.AsiUtiTrs_Hoja_ViaEndCetral_Lugar=' ';
	}else{
		asiutitrs_rel_tbc_hojati_to_tbc_hojati.htiviavl= newValue
		
	}
	return true
}

/**
 * Handle changed data.
 *
 * @param {String} oldValue old value
 * @param {String} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"037C5807-4F8C-4AB6-A1DF-10E8120DEE64"}
 */
function onDataChangeTextCateterCook(oldValue, newValue, event) {
	// TODO Auto-generated method stub
	forms.HciutiTrs_frm_evo_medica_utiTrs_hoja_TI.$isDirty = true;
	if(utils.stringTrim(newValue)==""){
		globals.AsiUtiTrs_Hoja_Cateter_Cook_Lugar=' ';
		
	}else{
		asiutitrs_rel_tbc_hojati_to_tbc_hojati.hticatcl= newValue
	}

	return true
}

/**
 * Handle changed data.
 *
 * @param {String} oldValue old value
 * @param {String} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"CD5B3503-6A28-4091-A22C-5BF4876EE694"}
 */
function onDataChangeTextSondaVesical(oldValue, newValue, event) {
	// TODO Auto-generated method stub
	forms.HciutiTrs_frm_evo_medica_utiTrs_hoja_TI.$isDirty = true;
	if(utils.stringTrim(newValue)==""){
		globals.AsiUtiTrs_Hoja_SondaVesical_Obs= ' ';
	}else{
		asiutitrs_rel_tbc_hojati_to_tbc_hojati.htivesicalobs= newValue
	}
	
	return true
}

/**
 * Handle changed data.
 *
 * @param {String} oldValue old value
 * @param {String} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"162220F2-1BC5-4722-BDD5-2941B899330A"}
 */
function onDataChangeTextSondaSog(oldValue, newValue, event) {
	// TODO Auto-generated method stub
	forms.HciutiTrs_frm_evo_medica_utiTrs_hoja_TI.$isDirty = true;
	if(utils.stringTrim(newValue)==""){
		globals.AsiUtiTrs_Hoja_SondaSog_Obs= ' ';
	}else{
		asiutitrs_rel_tbc_hojati_to_tbc_hojati.htisogobs= newValue
	}
	return true
}

/**
 * Handle changed data.
 *
 * @param {String} oldValue old value
 * @param {String} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"AC1FF277-99C5-41AB-9D5E-9829D48A4203"}
 */
function onDataChangeSondaNg(oldValue, newValue, event) {
	// TODO Auto-generated method stub
	forms.HciutiTrs_frm_evo_medica_utiTrs_hoja_TI.$isDirty = true;
	if(utils.stringTrim(newValue)==""){
		globals.AsiUtiTrs_Hoja_SondaNG_Obs= ' ';
	}else{
		asiutitrs_rel_tbc_hojati_to_tbc_hojati.htingobs= newValue
	}
	return true
}

/**
 * Handle changed data.
 *
 * @param {String} oldValue old value
 * @param {String} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"5BEBCF93-9B7B-4CC6-AD71-F05112C88C47"}
 */
function onDataChangeTextEscaras(oldValue, newValue, event) {
	// TODO Auto-generated method stub
	forms.HciutiTrs_frm_evo_medica_utiTrs_hoja_TI.$isDirty = true;
	if(utils.stringTrim(newValue)==""){
		globals.AsiUtiTrs_Hoja_Escaras_Obs= ' ';
	}else{
		asiutitrs_rel_tbc_hojati_to_tbc_hojati.htiescaraobs=newValue
	}
	return true
}

/**
 * Handle changed data.
 *
 * @param {String} oldValue old value
 * @param {String} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"358C8E33-B035-4DDF-999A-0D4A4DA7A4B7"}
 */
function onDataChangeTextOtras(oldValue, newValue, event) {
	// TODO Auto-generated method stub
	forms.HciutiTrs_frm_evo_medica_utiTrs_hoja_TI.$isDirty = true;
	if(utils.stringTrim(newValue)==""){
		globals.AsiUtiTrs_Hoja_SondaOtras_Obs= ' ';
	}else{
		asiutitrs_rel_tbc_hojati_to_tbc_hojati.htiotrasobs =newValue
	}
	return true
}
