/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"894A9822-96CF-4DF8-A850-18E8919568C7"}
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
 * @properties={typeid:24,uuid:"AC95CD18-52F6-4C56-8BB5-A9747531DC66"}
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
		elements.sc9_otro.requestFocus()
	}
	return true
}
