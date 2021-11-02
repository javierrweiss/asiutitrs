/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"9D596926-5650-4B65-937D-927488C8233E"}
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
 * @properties={typeid:24,uuid:"C247E6EE-506A-490F-A48A-1D9E42D6216E"}
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
		elements.sc14_otro.requestFocus()
	}
	return true
}
