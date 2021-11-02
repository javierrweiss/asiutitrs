/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"DF0F7FCB-35F4-4AB9-8B5C-9D1B1F78364D"}
 */
var f_texto = ' ';

/**
 * Handle changed data.
 *
 * @param {String} oldValue old value
 * @param {String} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"6D7EFF48-9ABA-4E52-A17C-E14EE61E0E02"}
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
		elements.sc12_otro.requestFocus()
	}
	return true
}
