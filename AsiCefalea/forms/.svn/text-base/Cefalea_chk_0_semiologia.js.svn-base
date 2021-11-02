/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"FFE79307-3182-4C8F-8AED-722BFFCDB4A7"}
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
 * @properties={typeid:24,uuid:"9FBEA375-79E9-4C94-BED5-15FB089378AE"}
 */
function onDataChange_frecuencia(oldValue, newValue, event) {
	if (newValue==5){
		elements.fld_texto.enabled=true
		elements.fld_texto.editable=true
		elements.fld_texto.requestFocus()
	}else{
		elements.fld_texto.enabled=false
		elements.fld_texto.editable=false
		f_texto=null
		elements.sc8_frecuencia.requestFocus()

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
 * @properties={typeid:24,uuid:"545B8226-A53F-41A3-82F7-6C9AB1FBC6C5"}
 */
function onDataChange_intensidad(oldValue, newValue, event) {
	if (newValue==5){
		elements.lbl_escala.visible=true
		elements.fld_escala.enabled=true
		elements.fld_escala.editable=true
		elements.fld_escala.visible=true
		elements.fld_escala.requestFocus()
	}else{
		elements.lbl_escala.visible=false
		elements.fld_escala.enabled=false
		elements.fld_escala.editable=false
		elements.fld_escala.visible=false
		forms.Cefalea_chk_0_semiologia.foundset.sc11_escala=null
		elements.sc11_intensidad.requestFocus()

	}
	return true
}
