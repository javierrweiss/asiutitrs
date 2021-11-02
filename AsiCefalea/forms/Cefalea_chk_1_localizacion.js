/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"54AE8F53-875E-4628-821A-DF0B98D7CCEA"}
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
 * @properties={typeid:24,uuid:"53C1D1AF-D9F9-4358-8537-7E41A2A3D6A3"}
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
		elements.sc1_otro.requestFocus()
	}
	return true
}
