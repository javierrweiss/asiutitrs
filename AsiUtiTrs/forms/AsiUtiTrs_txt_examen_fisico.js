/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"9F5BCD2C-5154-45EB-A368-7C1E34C79756"}
 */
var f_informe = null;


/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"F44955A2-863E-42E6-9393-D677778FDBC2"}
 */
var gradoUPP='';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"B9EB0ADC-3024-49B3-B5D7-85573DC0525C"}
 */
var tieneUPP = '0';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"F0243521-032A-4407-99B9-431C698C1BC9"}
 */
var localizacionUPP='';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"0D4EBCCD-C52E-423D-BCE0-2B2D0DB409AD"}
 */
var otraLocalizacionUPP = ' ';


/**
 * Handle changed data.
 *
 * @param {String} oldValue old value
 * @param {String} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"2CBCAE15-3B18-4A8A-BF13-46B368636321"}
 */
function onDataChange_textArea(oldValue, newValue, event) {
	
	forms.HciutiTrs_frm_hist_clin_ingreso_utiTrs.$isDirty = true;
	return true
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
 * @properties={typeid:24,uuid:"9DB3D3DD-B204-4AE4-9312-7AA804E0565C"}
 */
function onDataChangeUPP(oldValue, newValue, event) {
	// TODO Auto-generated method stub
	forms.HciutiTrs_frm_hist_clin_ingreso_utiTrs.$isDirty = true
	
	forms.AsiUtiTrs_txt_examen_fisico.tieneUPP = newValue
	if(forms.AsiUtiTrs_txt_examen_fisico.tieneUPP=='1'){
		forms.AsiUtiTrs_txt_examen_fisico.elements.grp_upp_grado_localizacion.visible=true;
		if('Otro'==localizacionUPP){
			forms.AsiUtiTrs_txt_examen_fisico.elements.txt_localizacion.visible=true
		}else{
			forms.AsiUtiTrs_txt_examen_fisico.elements.txt_localizacion.visible=false;
			
		}
	
	}else{
		
		forms.AsiUtiTrs_txt_examen_fisico.elements.grp_upp_grado_localizacion.visible=false;
	}
	

	return true
}


/**
 * TODO generated, please specify type and doc for the params
 * @param oldValue
 * @param newValue
 * @param event
 *
 * @properties={typeid:24,uuid:"B5C57BB9-4C75-4B45-B478-4D18391A513F"}
 */
function onDataChangeLocalizacion(oldValue, newValue, event) {
	// TODO Auto-generated method stub
	if('4'==localizacionUPP){
		elements.txt_localizacion.visible=true
		elements.txt_localizacion.editable=true
	}else{
		elements.txt_localizacion.visible=false
		elements.txt_localizacion.editable=false
	}
	forms.HciutiTrs_frm_hist_clin_ingreso_utiTrs.$isDirty = true;
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
 * @properties={typeid:24,uuid:"5908373C-F173-4293-8F30-DC4B141F1276"}
 */
function onDataChangeGradoUPP(oldValue, newValue, event) {
	// TODO Auto-generated method stub
	forms.HciutiTrs_frm_hist_clin_ingreso_utiTrs.$isDirty = true;
	return true
}
