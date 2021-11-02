
/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"22FAAA11-73BF-4338-A1E5-B5B4B18DCE52"}
 */
function onShow_valoracion3(firstShow, event) {
	if(globals.uti_val_heridas!=1){
		elements.tabless_66.visible=false
	}
	if(globals.uti_val_otras_valoraciones!=1){
		elements.tabless_88.visible=false
	}
	if(globals.vNuevaHoja){
		elements.tabless_66.enabled=true
		elements.tabless_88.enabled=true
	}else{
		elements.tabless_66.enabled=false
		elements.tabless_88.enabled=false
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
 * @properties={typeid:24,uuid:"4CA7DC23-D614-4EBF-A347-0F1F0E291E18"}
 */
function onDataChange_heridas(oldValue, newValue, event) {
	globals.valida_campos_obligatorios_completos(globals.name_tabless)
	if(newValue==0){
		var thePressedButton = plugins.dialogs.showQuestionDialog('Valor No', '¿Está seguro de ingresar No?', 'Si', 'No');
	    if(thePressedButton=='Si'){
		   thePressedButton = ''
	     	oldValue=newValue
		    elements.tabless_66.visible=false
			if(heridas_to_hojauti_items.getSize()>0){
			    var borrado_heridas=heridas_to_hojauti_items.deleteAllRecords()
		        if (!borrado_heridas){
				    plugins.dialogs.showInfoDialog("Error","No borro Ingreso Heridas","ok")
			    }
			}    
			elements.val_otras_valoraciones.requestFocus()
		    return true
	    }else{
	    	thePressedButton = ''
		    oldValue=0
			newValue=1
			globals.uti_val_heridas=1
			elements.val_heridas.requestFocus()
		    return false
	    }
	}else{
			elements.tabless_66.visible=true
			elements.tabless_66.tabIndex=1
			return true
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
 * @properties={typeid:24,uuid:"4B9E1790-3924-43A9-947C-19087928CC89"}
 */
function onDataChange_otras_valoriz(oldValue, newValue, event) {
	if(newValue==0){
		elements.tabless_88.visible=false
		if(otras_valoriz_to_hojauti_items.getSize()>0){
		    var borrado_otras_valoriz=otras_valoriz_to_hojauti_items.deleteAllRecords()
	        if (!borrado_otras_valoriz){
			    plugins.dialogs.showInfoDialog("Error","No borro Otras Valorizaciones","ok")
		    }
		}    
	}else{
			elements.tabless_88.visible=true
	}
	globals.valida_campos_obligatorios_completos(globals.name_tabless)
	return true
}
