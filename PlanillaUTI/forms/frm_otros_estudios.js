/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"95743E84-BAA7-43DF-B3E7-BB0ECF53E2AF"}
 */
function onAction_add2(event) {
	var clienttime = application.getServerTimeStamp();
	var horacarga = clienttime.getHours()*100+clienttime.getMinutes()
	if (otros_estudios_to_hojauti_otros_estudios.getSize()>0){
		for(var i=0;i<=otros_estudios_to_hojauti_otros_estudios.getSize();i++){
			otros_estudios_to_hojauti_otros_estudios.setSelectedIndex(i)
			if (otros_estudios_to_hojauti_otros_estudios.renglon > globals.renglon9){
				globals.renglon9=otros_estudios_to_hojauti_otros_estudios.renglon	
			}
		}
	}
	otros_estudios_to_hojauti_otros_estudios.newRecord()
	otros_estudios_to_hojauti_otros_estudios.tipo_opera = globals.vTipoOperador
	otros_estudios_to_hojauti_otros_estudios.nro_operador = globals.vLegajo
	otros_estudios_to_hojauti_otros_estudios.fecha_carga = utils.timestampToDate(new Date)
	otros_estudios_to_hojauti_otros_estudios.hora_carga = horacarga
	otros_estudios_to_hojauti_otros_estudios.tipo="otrosestud"
	globals.renglon9 = globals.renglon9+ 1
	otros_estudios_to_hojauti_otros_estudios.renglon= globals.renglon9
	globals.vAccionAgrega=true
	forms.frm_cultivos.elements.tabless_282.tabIndex=2
	forms.tab_ingresa_otros_estudios.elements.btn_borra.visible=false
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"EA82204C-7702-4DB9-9856-FF72E5F56FC7"}
 */
function onAction_linea(event) {
	globals.vAccionAgrega=false
	forms.frm_cultivos.elements.tabless_282.tabIndex=2
	forms.tab_ingresa_otros_estudios.elements.btn_borra.visible=true
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"C212C64F-FFC6-46AB-9C57-A9D120FDC1E5"}
 */
function onShow_otros_estudios(firstShow, event) {
	if(globals.vEstadoAccion=="CONSULTA"){
		forms.frm_otros_estudios.controller.enabled=false
	}else{
		forms.frm_otros_estudios.controller.enabled=true
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
 * @properties={typeid:24,uuid:"7B4E7553-E248-4F75-87E4-247ABAD2393A"}
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
		  forms.frm_otros_estudios.valor=newValue
		  return false
	    }else{
		  if(newValue>2359){
			  plugins.dialogs.showInfoDialog("Error en Hora","Valor en Horas erróneo")
			  newValue=oldValue
			  forms.frm_otros_estudios.valor=newValue
			  return false
		  }else{
			  resultado=Math.floor(newValue/100);
			   resultado=resultado*100;
			  resultado=newValue-resultado;
			  if(resultado>59&&resultado<100){
				  plugins.dialogs.showInfoDialog("Error en Hora","Valor en minutos erróneo")
				  newValue=oldValue
				  forms.frm_otros_estudios.valor=newValue
				  return false
			  }else{
				  nuevaHora = '';
				  nuevaHora=newValue
				  newValue=globals.FormatearHora(nuevaHora.toString())
				  forms.frm_otros_estudios.valor=newValue
				  globals.vHoraCorrecta=true
				  return true
			  }
		  }
	    }
	  	  
	  }else{
		  newValue=newValue.substr(0,2)+newValue.substr(3,2)
		  if(newValue>59&&newValue<100){
			  plugins.dialogs.showInfoDialog("Error en Hora","Valor en minutos erróneo")
			  newValue=oldValue
			  forms.frm_otros_estudios.valor=newValue
			  return false
		    }else{
			  if(newValue>2359){
				  plugins.dialogs.showInfoDialog("Error en Hora","Valor en Horas erróneo")
				  newValue=oldValue
				  forms.frm_otros_estudios.valor=newValue
				  return false
			  }else{
				  resultado=Math.floor(newValue/100);
				   resultado=resultado*100;
				  resultado=newValue-resultado;
				  if(resultado>59&&resultado<100){
					  plugins.dialogs.showInfoDialog("Error en Hora","Valor en minutos erróneo")
					  newValue=oldValue
					  forms.frm_otros_estudios.valor=newValue
					  return false
				  }else{
					  nuevaHora = '';
					  nuevaHora=newValue
					  newValue=globals.FormatearHora(nuevaHora.toString())
					  forms.frm_otros_estudios.valor=newValue
					  globals.vHoraCorrecta=true
					  return true
				  }
			  }
		    }
	  }

}
