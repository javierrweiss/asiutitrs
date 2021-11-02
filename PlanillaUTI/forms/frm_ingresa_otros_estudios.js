
/**
 * Handle changed data.
 *
 * @param oldValue old value
 * @param newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"147B8575-E322-4FC7-8C63-9416C65F4F4F"}
 */
function onDataChange_hora(oldValue, newValue, event) {
	globals.vHoraCorrecta=false
	var resultado=0;
	var nuevaHora = '';
	  var largo = newValue.length;
	  var esnumero = true;
	  for (var i= 0;i<largo && esnumero == true; i++){
			if (newValue.charCodeAt(i)< 48 || newValue.charCodeAt(i) > 57){
				esnumero = false
			}
	  }
	  if (esnumero){
	    if(newValue>59&&newValue<100){
		  plugins.dialogs.showInfoDialog("Error en Hora","Valor en minutos erróneo")
		  newValue=oldValue
		  forms.frm_ingresa_otros_estudios.valor=newValue
		  return false
	    }else{
		  if(newValue>2359){
			  plugins.dialogs.showInfoDialog("Error en Hora","Valor en Horas erróneo")
			  newValue=oldValue
			  forms.frm_ingresa_otros_estudios.valor=newValue
			  return false
		  }else{
			  resultado=Math.floor(newValue/100);
			   resultado=resultado*100;
			  resultado=newValue-resultado;
			  if(resultado>59&&resultado<100){
				  plugins.dialogs.showInfoDialog("Error en Hora","Valor en minutos erróneo")
				  newValue=oldValue
				  forms.frm_ingresa_otros_estudios.valor=newValue
				  return false
			  }else{
				  nuevaHora = '';
				  nuevaHora=newValue
				  newValue=globals.FormatearHora(nuevaHora.toString())
				  forms.frm_ingresa_otros_estudios.valor=newValue
				  globals.vHoraCorrecta=true
				  forms.tab_ingresa_otros_estudios.elements.btn_graba_item.requestFocus()
				  return true
			  }
		  }
	    }
	  	  
	  }else{
		   newValue=newValue.substr(0,2)+newValue.substr(3,2)
		   if(newValue>59&&newValue<100){
				  plugins.dialogs.showInfoDialog("Error en Hora","Valor en minutos erróneo")
				  newValue=oldValue
				  forms.frm_ingresa_otros_estudios.valor=newValue
				  return false
			    }else{
				  if(newValue>2359){
					  plugins.dialogs.showInfoDialog("Error en Hora","Valor en Horas erróneo")
					  newValue=oldValue
					  forms.frm_ingresa_otros_estudios.valor=newValue
					  return false
				  }else{
					  resultado=Math.floor(newValue/100);
					   resultado=resultado*100;
					  resultado=newValue-resultado;
					  if(resultado>59&&resultado<100){
						  plugins.dialogs.showInfoDialog("Error en Hora","Valor en minutos erróneo")
						  newValue=oldValue
						  forms.frm_ingresa_otros_estudios.valor=newValue
						  return false
					  }else{
						  nuevaHora = '';
						  nuevaHora=newValue
						  newValue=globals.FormatearHora(nuevaHora.toString())
						  forms.frm_ingresa_otros_estudios.valor=newValue
						  globals.vHoraCorrecta=true
						  forms.tab_ingresa_otros_estudios.elements.btn_graba_item.requestFocus()
						  return true
					  }
				  }
			    }
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
 * @properties={typeid:24,uuid:"611A126E-3BDE-4B93-9776-0CC8882337EF"}
 */
function onDataChange_concepto(oldValue, newValue, event) {
	elements.valor.requestFocus()
	return true
}
