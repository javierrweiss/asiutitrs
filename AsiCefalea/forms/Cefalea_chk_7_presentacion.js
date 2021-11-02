/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"5869D03E-D90A-4EEB-BF85-8F1A9B14F7B0"}
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
 * @properties={typeid:24,uuid:"85E423F0-E75D-4D7B-B211-ECFD8606093F"}
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
		elements.sc7_otro.requestFocus()
	}
	return true
}
