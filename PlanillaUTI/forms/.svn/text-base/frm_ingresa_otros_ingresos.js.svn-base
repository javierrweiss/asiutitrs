
/**
 * Handle changed data.
 *
 * @param oldValue old value
 * @param newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"535B38D6-8648-444B-A20D-25945B3367B0"}
 */
function onDataChange_otros_ingresos(oldValue, newValue, event) {
	var resultado=0;
	  var largo = newValue.length;
	  var esnumero = true;
	  for (var i= 0;i<largo && esnumero == true; i++){
			if (newValue.charCodeAt(i)< 48 || newValue.charCodeAt(i) > 57){
				esnumero = false
			}
	  }
	  if (esnumero){
	   		  forms.frm_ingresa_otros_ingresos.cantidad=newValue
			  forms.tab_ingresa_otros_ingresos.elements.btn_graba_item.requestFocus()
			  return true
		  	  
	  }else{
		  newValue=''
		  oldValue=''
		  forms.frm_ingresa_otros_ingresos.cantidad=newValue		  
		  return false
	  }

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
 * @properties={typeid:24,uuid:"937EB3A9-1B18-450C-A13D-EC53B1DB31E4"}
 */
function onDataChange_concepto(oldValue, newValue, event) {
	elements.cantidad.requestFocus()
	return true
}
