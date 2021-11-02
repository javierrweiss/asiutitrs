
/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"3EFC68BF-EAAB-4FDD-ACE4-A742E0B83CA1"}
 */
function onShow_frm_cultivos(firstShow, event) {
	if  (vs_to_hojauti_cultivos.getSize()< 1){
		elements.tabless_282.visible=false
		vs_to_hojauti_cultivos.newRecord()
		globals.vCultivos=true
	}else{
		if(vs_to_hojauti_cultivos.otros_estudios!=1){
			elements.tabless_282.visible=false
		}else{
			elements.tabless_282.visible=true
		}
		globals.vCultivos=false
	}
	if(globals.vNuevaHoja){
		elements.tabless_282.enabled=true
	}else{
		elements.tabless_282.enabled=false
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
 * @properties={typeid:24,uuid:"42E4F12D-709D-496B-AD45-D9F1028D1F1F"}
 */
function onDataChange(oldValue, newValue, event) {
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
		  forms.frm_cultivos.hemo=newValue
		  return false
	    }else{
		  if(newValue>2359){
			  plugins.dialogs.showInfoDialog("Error en Hora","Valor en Horas erróneo")
			  newValue=oldValue
			  forms.frm_cultivos.hemo=newValue
			  return false
		  }else{
			  resultado=Math.floor(newValue/100);
			   resultado=resultado*100;
			  resultado=newValue-resultado;
			  if(resultado>59&&resultado<100){
				  plugins.dialogs.showInfoDialog("Error en Hora","Valor en minutos erróneo")
				  newValue=oldValue
				  forms.frm_cultivos.hemo=newValue
				  return false
			  }else{
				  nuevaHora = '';
				  nuevaHora=newValue
				  newValue=globals.FormatearHora(nuevaHora.toString())
				  forms.frm_cultivos.hemo=newValue
				  elements.uro.requestFocus()
				  return true
			  }
		  }
	    }
	  	  
	  }else{
		  newValue=newValue.substr(0,2)+newValue.substr(3,2)
		  if(newValue>59&&newValue<100){
			  plugins.dialogs.showInfoDialog("Error en Hora","Valor en minutos erróneo")
			  newValue=oldValue
			  forms.frm_cultivos.hemo=newValue
			  return false
		    }else{
			  if(newValue>2359){
				  plugins.dialogs.showInfoDialog("Error en Hora","Valor en Horas erróneo")
				  newValue=oldValue
				  forms.frm_cultivos.hemo=newValue
				  return false
			  }else{
				  resultado=Math.floor(newValue/100);
				   resultado=resultado*100;
				  resultado=newValue-resultado;
				  if(resultado>59&&resultado<100){
					  plugins.dialogs.showInfoDialog("Error en Hora","Valor en minutos erróneo")
					  newValue=oldValue
					  forms.frm_cultivos.hemo=newValue
					  return false
				  }else{
					  nuevaHora = '';
					  nuevaHora=newValue
					  newValue=globals.FormatearHora(nuevaHora.toString())
					  forms.frm_cultivos.hemo=newValue
					  elements.uro.requestFocus()
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
 * @properties={typeid:24,uuid:"DB754012-3087-4E2D-AD45-B3B591EB242C"}
 */
function onDataChange_uro(oldValue, newValue, event) {
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
		  forms.frm_cultivos.uro=newValue
		  return false
	    }else{
		  if(newValue>2359){
			  plugins.dialogs.showInfoDialog("Error en Hora","Valor en Horas erróneo")
			  newValue=oldValue
			  forms.frm_cultivos.uro=newValue
			  return false
		  }else{
			  resultado=Math.floor(newValue/100);
			   resultado=resultado*100;
			  resultado=newValue-resultado;
			  if(resultado>59&&resultado<100){
				  plugins.dialogs.showInfoDialog("Error en Hora","Valor en minutos erróneo")
				  newValue=oldValue
				  forms.frm_cultivos.uro=newValue
				  return false
			  }else{
				  nuevaHora = '';
				  nuevaHora=newValue
				  newValue=globals.FormatearHora(nuevaHora.toString())
				  forms.frm_cultivos.uro=newValue
				  elements.secreciones.requestFocus()  
				  return true
			  }
		  }
	    }
	  
	  }else{
		  newValue=newValue.substr(0,2)+newValue.substr(3,2)
		  if(newValue>59&&newValue<100){
			  plugins.dialogs.showInfoDialog("Error en Hora","Valor en minutos erróneo")
			  newValue=oldValue
			  forms.frm_cultivos.uro=newValue
			  return false
		    }else{
			  if(newValue>2359){
				  plugins.dialogs.showInfoDialog("Error en Hora","Valor en Horas erróneo")
				  newValue=oldValue
				  forms.frm_cultivos.uro=newValue
				  return false
			  }else{
				  resultado=Math.floor(newValue/100);
				   resultado=resultado*100;
				  resultado=newValue-resultado;
				  if(resultado>59&&resultado<100){
					  plugins.dialogs.showInfoDialog("Error en Hora","Valor en minutos erróneo")
					  newValue=oldValue
					  forms.frm_cultivos.uro=newValue
					  return false
				  }else{
					  nuevaHora = '';
					  nuevaHora=newValue
					  newValue=globals.FormatearHora(nuevaHora.toString())
					  forms.frm_cultivos.uro=newValue
					  elements.secreciones.requestFocus()  
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
 * @properties={typeid:24,uuid:"FF717A90-2BA3-442E-8D52-3E70CEF9B602"}
 */
function onDataChange_secreciones(oldValue, newValue, event) {
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
		  forms.frm_cultivos.secreciones=newValue
		  return false
	    }else{
		  if(newValue>2359){
			  plugins.dialogs.showInfoDialog("Error en Hora","Valor en Horas erróneo")
			  newValue=oldValue
			  forms.frm_cultivos.secreciones=newValue
			  return false
		  }else{
			  resultado=Math.floor(newValue/100);
			   resultado=resultado*100;
			  resultado=newValue-resultado;
			  if(resultado>59&&resultado<100){
				  plugins.dialogs.showInfoDialog("Error en Hora","Valor en minutos erróneo")
				  newValue=oldValue
				  forms.frm_cultivos.secreciones=newValue
				  return false
			  }else{
				  nuevaHora = '';
				  nuevaHora=newValue
				  newValue=globals.FormatearHora(nuevaHora.toString())
				  forms.frm_cultivos.secreciones=newValue
				  elements.punta_cateter.requestFocus() 
				  return true 
			  }
		  }
	    }
	  
	  }else{
		  newValue=newValue.substr(0,2)+newValue.substr(3,2)
		  if(newValue>59&&newValue<100){
			  plugins.dialogs.showInfoDialog("Error en Hora","Valor en minutos erróneo")
			  newValue=oldValue
			  forms.frm_cultivos.secreciones=newValue
			  return false
		    }else{
			  if(newValue>2359){
				  plugins.dialogs.showInfoDialog("Error en Hora","Valor en Horas erróneo")
				  newValue=oldValue
				  forms.frm_cultivos.secreciones=newValue
				  return false
			  }else{
				  resultado=Math.floor(newValue/100);
				   resultado=resultado*100;
				  resultado=newValue-resultado;
				  if(resultado>59&&resultado<100){
					  plugins.dialogs.showInfoDialog("Error en Hora","Valor en minutos erróneo")
					  newValue=oldValue
					  forms.frm_cultivos.secreciones=newValue
					  return false
				  }else{
					  nuevaHora = '';
					  nuevaHora=newValue
					  newValue=globals.FormatearHora(nuevaHora.toString())
					  forms.frm_cultivos.secreciones=newValue
					  elements.punta_cateter.requestFocus() 
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
 * @properties={typeid:24,uuid:"C115A9B5-8A76-4C84-9DD9-B274D2F2B63A"}
 */
function onDataChange_punta_cateter(oldValue, newValue, event) {
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
		  newValue=globals.FormatearHora(nuevaHora.toString())
		  return false
	    }else{
		  if(newValue>2359){
			  plugins.dialogs.showInfoDialog("Error en Hora","Valor en Horas erróneo")
			  newValue=oldValue
			  newValue=globals.FormatearHora(nuevaHora.toString())
			  return false
		  }else{
			  resultado=Math.floor(newValue/100);
			   resultado=resultado*100;
			  resultado=newValue-resultado;
			  if(resultado>59&&resultado<100){
				  plugins.dialogs.showInfoDialog("Error en Hora","Valor en minutos erróneo")
				  newValue=oldValue
				  newValue=globals.FormatearHora(nuevaHora.toString())
				  return false
			  }else{
				  nuevaHora=newValue
				  newValue=globals.FormatearHora(nuevaHora.toString())
				  forms.frm_cultivos.punta_cateter=newValue
				  elements.partes_blandas.requestFocus()
				  return true
			  }
		  }
	    }
	  
	  }else{
		  newValue=newValue.substr(0,2)+newValue.substr(3,2)
		  if(newValue>59&&newValue<100){
			  plugins.dialogs.showInfoDialog("Error en Hora","Valor en minutos erróneo")
			  newValue=oldValue
			  newValue=globals.FormatearHora(nuevaHora.toString())
			  return false
		    }else{
			  if(newValue>2359){
				  plugins.dialogs.showInfoDialog("Error en Hora","Valor en Horas erróneo")
				  newValue=oldValue
				  newValue=globals.FormatearHora(nuevaHora.toString())
				  return false
			  }else{
				  resultado=Math.floor(newValue/100);
				   resultado=resultado*100;
				  resultado=newValue-resultado;
				  if(resultado>59&&resultado<100){
					  plugins.dialogs.showInfoDialog("Error en Hora","Valor en minutos erróneo")
					  newValue=oldValue
					  newValue=globals.FormatearHora(nuevaHora.toString())
					  return false
				  }else{
					  nuevaHora=newValue
					  newValue=globals.FormatearHora(nuevaHora.toString())
					  forms.frm_cultivos.punta_cateter=newValue
					  elements.partes_blandas.requestFocus()
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
 * @properties={typeid:24,uuid:"5D0B2BAC-0497-4C03-B1F7-2D10220C7CE4"}
 */
function onDataChange_partes_blandas(oldValue, newValue, event) {
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
		  forms.frm_cultivos.partes_blandas=newValue
		  return false
	    }else{
		  if(newValue>2359){
			  plugins.dialogs.showInfoDialog("Error en Hora","Valor en Horas erróneo")
			  newValue=oldValue
			  forms.frm_cultivos.partes_blandas=newValue
			  return false
		  }else{
			  resultado=Math.floor(newValue/100);
			   resultado=resultado*100;
			  resultado=newValue-resultado;
			  if(resultado>59&&resultado<100){
				  plugins.dialogs.showInfoDialog("Error en Hora","Valor en minutos erróneo")
				  newValue=oldValue
				  forms.frm_cultivos.partes_blandas=newValue
				  return false
			  }else{
				  nuevaHora = '';
				  nuevaHora=newValue
				  newValue=globals.FormatearHora(nuevaHora.toString())
				  forms.frm_cultivos.partes_blandas=newValue
				  elements.otros_estudios.requestFocus() 
				  return true
			  }
		  }
	    }
	   }else{
		   newValue=newValue.substr(0,2)+newValue.substr(3,2)
		   if(newValue>59&&newValue<100){
				  plugins.dialogs.showInfoDialog("Error en Hora","Valor en minutos erróneo")
				  newValue=oldValue
				  forms.frm_cultivos.partes_blandas=newValue
				  return false
			    }else{
				  if(newValue>2359){
					  plugins.dialogs.showInfoDialog("Error en Hora","Valor en Horas erróneo")
					  newValue=oldValue
					  forms.frm_cultivos.partes_blandas=newValue
					  return false
				  }else{
					  resultado=Math.floor(newValue/100);
					   resultado=resultado*100;
					  resultado=newValue-resultado;
					  if(resultado>59&&resultado<100){
						  plugins.dialogs.showInfoDialog("Error en Hora","Valor en minutos erróneo")
						  newValue=oldValue
						  forms.frm_cultivos.partes_blandas=newValue
						  return false
					  }else{
						  nuevaHora = '';
						  nuevaHora=newValue
						  newValue=globals.FormatearHora(nuevaHora.toString())
						  forms.frm_cultivos.partes_blandas=newValue
						  elements.otros_estudios.requestFocus() 
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
 * @properties={typeid:24,uuid:"AEA8A799-CCE4-4590-B342-716CAF351A63"}
 */
function onDataChange_otros_estudios(oldValue, newValue, event) {
	if(newValue==0){
		elements.tabless_282.visible=false
		if(otros_estudios_to_hojauti_otros_estudios.getSize()>0){
		    var borrado_otros_estudios=otros_estudios_to_hojauti_otros_estudios.deleteAllRecords()
	        if (!borrado_otros_estudios){
			    plugins.dialogs.showInfoDialog("Error","No borro Otros Estudios","ok")
		    }
		}    
		elements.labo.requestFocus()
		}else{
			elements.tabless_282.visible=true
			elements.tabless_282.tabIndex=1
	}
	return true
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
 * @properties={typeid:24,uuid:"D78113E7-1B97-4162-8B16-3B4273A8520E"}
 */
function onDataChange_labo(oldValue, newValue, event) {
	if(newValue==null){
		elements.labo.requestFocus()
		return false
	}else{
	    if (newValue==0){
		var thePressedButton = plugins.dialogs.showQuestionDialog('Valor No', '¿Está seguro de ingresar No?', 'Si', 'No');
		    if(thePressedButton=='Si'){
			   thePressedButton = ''
		     	oldValue=newValue
		    	elements.rx.requestFocus()
		    	return true
		    }else{
			    thePressedButton = ''
			    oldValue=0
				newValue=1
				foundset.labo=1
				elements.labo.requestFocus()
			    return false
		    }
	    }else{
	    	elements.rx.requestFocus()
			return true
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
 * @properties={typeid:24,uuid:"62045319-4AE9-4BCB-A162-1BAA02B77486"}
 */
function onDataChange_rx(oldValue, newValue, event) {
	if(newValue==null){
		elements.rx.requestFocus()
		return false
	}else{
	    if (newValue==0){
		var thePressedButton = plugins.dialogs.showQuestionDialog('Valor No', '¿Está seguro de ingresar No?', 'Si', 'No');
		    if(thePressedButton=='Si'){
			   thePressedButton = ''
		     	oldValue=newValue
		    	elements.tac.requestFocus()
		    	return true
		    }else{
			    thePressedButton = ''
			    oldValue=0
				newValue=1
				foundset.rx=1
				elements.rx.requestFocus()
			    return false
		    }
	    }else{
	    	elements.tac.requestFocus()
			return true
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
 * @properties={typeid:24,uuid:"AC6FBB0B-56CC-4E2B-BD30-FCACBB986A8D"}
 */
function onDataChange_tac(oldValue, newValue, event) {
	if(newValue==null){
		elements.tac.requestFocus()
		return false
	}else{
	    if (newValue==0){
		var thePressedButton = plugins.dialogs.showQuestionDialog('Valor No', '¿Está seguro de ingresar No?', 'Si', 'No');
		    if(thePressedButton=='Si'){
			   thePressedButton = ''
		     	oldValue=newValue
		    	elements.rmn.requestFocus()
		    	return true
		    }else{
			    thePressedButton = ''
			    oldValue=0
				newValue=1
				foundset.tac=1
				elements.tac.requestFocus()
			    return false
		    }
	    }else{
	    	elements.rmn.requestFocus()
			return true
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
 * @properties={typeid:24,uuid:"C94C7CCC-2E1F-4F5C-92E1-56A68AA62FFC"}
 */
function onDataChange_rmn(oldValue, newValue, event) {
	if(newValue==null){
		elements.rmn.requestFocus()
		return false
	}else{
	    if (newValue==0){
		var thePressedButton = plugins.dialogs.showQuestionDialog('Valor No', '¿Está seguro de ingresar No?', 'Si', 'No');
		    if(thePressedButton=='Si'){
			   thePressedButton = ''
		     	oldValue=newValue
		    	elements.eco.requestFocus()
		    	return true
		    }else{
			    thePressedButton = ''
			    oldValue=0
				newValue=1
				foundset.rmn=1
				elements.rmn.requestFocus()
			    return false
		    }
	    }else{
	    	elements.eco.requestFocus()
			return true
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
 * @properties={typeid:24,uuid:"5FBA7B54-A1E6-4EDC-9197-525BF417B1D1"}
 */
function onDataChange_eco(oldValue, newValue, event) {
	if(newValue==null){
		elements.eco.requestFocus()
		return false
	}else{
	    if (newValue==0){
		var thePressedButton = plugins.dialogs.showQuestionDialog('Valor No', '¿Está seguro de ingresar No?', 'Si', 'No');
		    if(thePressedButton=='Si'){
			   thePressedButton = ''
		     	oldValue=newValue
		    	elements.anat_patol.requestFocus()
		    	return true
		    }else{
			    thePressedButton = ''
			    oldValue=0
				newValue=1
				foundset.eco=1
				elements.eco.requestFocus()
			    return false
		    }
	    }else{
	    	elements.anat_patol.requestFocus()
			return true
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
 * @properties={typeid:24,uuid:"46188A97-6C13-4689-AB67-F48A7E4FC63F"}
 */
function onDataChange_anat_patol(oldValue, newValue, event) {
	if(newValue==null){
		elements.anat_patol.requestFocus()
		return false
	}else{
	    if (newValue==0){
		var thePressedButton = plugins.dialogs.showQuestionDialog('Valor No', '¿Está seguro de ingresar No?', 'Si', 'No');
		    if(thePressedButton=='Si'){
			   thePressedButton = ''
		     	oldValue=newValue
		    	elements.anat_patol.requestFocus()
		    	return true
		    }else{
			    thePressedButton = ''
			    oldValue=0
				newValue=1
				foundset.anat_patol=1
				elements.anat_patol.requestFocus()
			    return false
		    }
	    }else{
	    	elements.anat_patol.requestFocus()
			return true
	    }
	}
}
