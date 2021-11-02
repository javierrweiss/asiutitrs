/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"AEC1EF69-1B93-4EDA-B497-DEF0448B9499"}
 */
var f_texto = ' ';

/**
 * Handle changed data.
 *
 * @param {Number} oldValue old value
 * @param {Number} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"454CC55F-8587-4B15-84D6-66292F7F9ADE"}
 */
function onDataChange_otro(oldValue, newValue, event) {
	if(newValue==1){
		elements.txt_otro.enabled=true
		elements.txt_otro.editable=true
		elements.txt_otro.requestFocus()
	}else{
		elements.txt_otro.enabled=false
		elements.txt_otro.editable=false
		f_texto=null
		elements.sc5_otro.requestFocus()
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
 * @properties={typeid:24,uuid:"8DA24FFD-1670-4C40-8EAE-E5D878E839BD"}
 */
function onDataChange_combo_aura(oldValue, newValue, event) {
	if(newValue==1){
		elements.grp_aura.enabled=true
		elements.grp_aura.readOnly=false
	}else{
		elements.grp_aura.enabled=false
		elements.grp_aura.readOnly=true
		f_texto=null
	}
	
	return true
}
