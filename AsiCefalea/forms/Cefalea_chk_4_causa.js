/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"0F7EC0D0-2F6C-460B-A07F-B8CA0850FA21"}
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
 * @properties={typeid:24,uuid:"8C725AC1-3221-43FF-9AA0-EB8EE25A9BFC"}
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
		elements.sc4_otro.requestFocus()
	}
	return true
}
