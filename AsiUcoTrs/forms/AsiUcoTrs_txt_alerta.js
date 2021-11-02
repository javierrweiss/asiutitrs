/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"6D969920-1CFD-4DAF-87F3-E386F6765C90"}
 */
var f_alergia = null;

/**
 * Handle changed data.
 *
 * @param {Number} oldValue old value
 * @param {Number} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"DAE24993-D478-4B6F-AC21-25530F209287"}
 */
function onDataChange_check(oldValue, newValue, event) {
	
	forms.AsiUcoTrs_frm_hciuco.$isDirty = true;
		
	return true
}

/**
 * TODO generated, please specify type and doc for the params
 * @param oldValue
 * @param newValue
 * @param event
 *
 * @properties={typeid:24,uuid:"AF84FE22-C11A-4AB6-BAD5-F8F9DEB690A3"}
 */
function onDataChange_check_alergia(oldValue, newValue, event) {

	forms.AsiUcoTrs_frm_hciuco.$isDirty = true;
	if(newValue){
		elements.txt_alergia.requestFocus();
		elements.txt_alergia.readOnly = false;
	}
	else{
		
		if(utils.stringTrim(f_alergia).length > 0){
			
			var res = globals.DIALOGS.showQuestionDialog('¡Atención!','Se borrara el detalle de la alergia. ¿ Esta seguro que desea continuar ?', 'Si', 'No');
			if( res == 'Si'){
				f_alergia = '';
				elements.txt_alergia.readOnly = true;
			}
			else{
				elements.txt_alergia.readOnly = false;
				asiucotrs_rel_alerta.aler_tipaler_1 = 1;
			}
		}
		else
			elements.txt_alergia.readOnly = true;
	}
		
	return true;
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
 * @properties={typeid:24,uuid:"7A84D461-F4F5-43FB-BAE8-63A0CD78BC5B"}
 */
function onDataChange_txtAlerta(oldValue, newValue, event) {
	
	forms.AsiUcoTrs_frm_hciuco.$isDirty = true;
	return true
}
