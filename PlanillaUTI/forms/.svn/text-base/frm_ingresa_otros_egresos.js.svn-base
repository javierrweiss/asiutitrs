
/**
 * Handle changed data.
 *
 * @param oldValue old value
 * @param newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"339DF3B7-F991-4B60-8FB8-CDC34FD1BD0C"}
 */
function onDataChange_otros_egresos(oldValue, newValue, event) {
	var resultado=0;
	  var largo = newValue.length;
	  var esnumero = true;
	  for (var i= 0;i<largo && esnumero == true; i++){
			if (newValue.charCodeAt(i)< 48 || newValue.charCodeAt(i) > 57){
				esnumero = false
			}
	  }
	  if (esnumero){
	   		  forms.frm_ingresa_otros_egresos.cantidad=newValue
			  forms.tab_ingresa_otros_egresos.elements.btn_graba_item.requestFocus()
			  return true
		  	  
	  }else{
		  newValue=''
		  oldValue=''
		  forms.frm_ingresa_otros_egresos.cantidad=newValue		  
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
 * @properties={typeid:24,uuid:"12072982-9438-41F5-A0B4-88724ED48BE6"}
 */
function onDataChange_concepto(oldValue, newValue, event) {
	elements.cantidad.requestFocus()
	return true
}
