
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"BA56326B-3C45-4A43-A94C-208516F0384F"}
 */
function onAction_otraHemo(event) {
	if (globals.uti_val_hemo_otros==1){
		globals.vTipoTexto='Otras Hemorragias'
		globals.vTipo='hemorragia'
		if (vs_to_hojauti_items.getSize()>0){
			for(var i=0;i<=vs_to_hojauti_items.getSize();i++){
				vs_to_hojauti_items.setSelectedIndex(i)
				if (vs_to_hojauti_items.renglon > globals.renglon){
					globals.renglon=vs_to_hojauti_items.renglon	
				}
			}
		}
		forms.frm_valoracion.elements.tabless_119.visible=true
		forms.frm_valoracion.elements.tabless_119.tabIndex=1
	}else{
		forms.frm_valoracion.elements.tabless_119.visible=false
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"CC08B002-CFDA-470B-B650-871CA9DB61ED"}
 */
function onAction_hemo(event) {
	if(globals.uti_val_hemorragia==1){
		forms.frm_valoracion.elements.hemo_panel.visible=true
	}else{
		forms.frm_valoracion.elements.hemo_panel.visible=false
		globals.uti_val_hemo_digestiva=0
		globals.uti_val_hemo_hematuria=0
		globals.uti_val_hemo_mucosas=0
		globals.uti_val_hemo_vias_resp=0
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
 * @properties={typeid:24,uuid:"D10A7C24-D9E2-4527-9F6C-C782C733E17F"}
 */
function onDataChange_hemo(oldValue, newValue, event) {
	if(newValue==1){
		forms.frm_valoracion.elements.hemo_panel.visible=true
		elements.val_hemo_digestiva.requestFocus()
	}else{
		forms.frm_valoracion.elements.hemo_panel.visible=false
		globals.uti_val_hemo_digestiva=0
		globals.uti_val_hemo_hematuria=0
		globals.uti_val_hemo_mucosas=0
		globals.uti_val_hemo_vias_resp=0
		elements.val_hemo_otros.requestFocus()
	}
	globals.valida_campos_obligatorios_completos(globals.name_tabless)
	return true
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"74CDEF9A-1054-481F-BD58-55AE29632448"}
 */
function onAction_arritmias_otras(event) {
	globals.valida_campos_obligatorios_completos(globals.name_tabless)
	if (forms.frm_valoracion.foundset.val_arritmia_otros==1){
		globals.vTipoArritmias='arritmia'
		if (arritmias_to_hojauti_items.getSize()>0){
			for(var i=0;i<=arritmias_to_hojauti_items.getSize();i++){
				arritmias_to_hojauti_items.setSelectedIndex(i)
				if (arritmias_to_hojauti_items.renglon > globals.renglon2){
					globals.renglon2=arritmias_to_hojauti_items.renglon	
				}
			}
		}
		forms.frm_valoracion.elements.tabless_188.visible=true
		forms.frm_valoracion.elements.tabless_188.tabIndex=1
	}else{
		forms.frm_valoracion.elements.tabless_188.visible=false
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
 * @properties={typeid:24,uuid:"99AE413F-E8DB-4B78-8B0D-E6D6907EDFA4"}
 */
function onDataChange_dolor(oldValue, newValue, event) {
	globals.valida_campos_obligatorios_completos(globals.name_tabless)
	if(newValue==null){
		elements.val_dolor.requestFocus()
		return false
	}else{
	    if (newValue==0){
		var thePressedButton = plugins.dialogs.showQuestionDialog('Valor 0', '¿Está seguro de ingresar 0?', 'Si', 'No');
		    if(thePressedButton=='Si'){
			   thePressedButton = ''
		     	oldValue=newValue
		     	elements.lbl_2.visible=false
				elements.val_tip_dolor.visible=false
				elements.val_disnea.requestFocus()
		    	return true
		    }else{
			    thePressedButton = ''
			    oldValue=0
				newValue=1
				globals.uti_val_dolor=1
				elements.lbl_2.visible=true
				elements.val_tip_dolor.visible=true
				elements.val_dolor.requestFocus()
			    return false
		    }
	    }else{
	    	elements.lbl_2.visible=true
			elements.val_tip_dolor.visible=true
			elements.val_tip_dolor.requestFocus()
			return true
	    }
	}
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"C38DB3EF-DD55-422A-AB00-755D7594D0DB"}
 */
function onShow_valoracion_I(firstShow, event) {
	elements.hemo_panel.visible=false
	elements.tabless_119.visible=false
	elements.tabless_188.visible=false
	if(vs_to_hojauti_block.getSize()>0){
		if(globals.uti_val_hemorragia==1){
			elements.hemo_panel.visible=true
		}
		if(globals.uti_val_hemo_otros==1){
			elements.tabless_119.visible=true
		}
		if(globals.uti_val_arritmia_otros==1){
			elements.tabless_188.visible=true
		}
	}
	if(globals.vNuevaHoja){
		elements.tabless_119.enabled=true
		elements.tabless_188.enabled=true
	}else{
		elements.tabless_119.enabled=false
		elements.tabless_188.enabled=false
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
 * @properties={typeid:24,uuid:"F35D15CB-565D-4B0D-A8EC-10049EDCC434"}
 */
function onDataChange_disnea(oldValue, newValue, event) {
	globals.valida_campos_obligatorios_completos(globals.name_tabless)
	if(newValue==null){
		elements.val_disnea.requestFocus()
		return false
	}else{
	    if (newValue==0){
		var thePressedButton = plugins.dialogs.showQuestionDialog('Valor No', '¿Está seguro de ingresar No?', 'Si', 'No');
		    if(thePressedButton=='Si'){
			   thePressedButton = ''
		     	oldValue=newValue
		     	elements.val_secreciones.requestFocus()
		    	return true
		    }else{
			    thePressedButton = ''
			    oldValue=0
				newValue=1
				globals.uti_val_disnea=1
				elements.val_disnea.requestFocus()
			    return false
		    }
	    }else{
	    	elements.val_secreciones.requestFocus()
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
 * @properties={typeid:24,uuid:"38993576-A6E3-4B98-8B49-DAD544DB5619"}
 */
function onDataChange_secreciones(oldValue, newValue, event) {
	globals.valida_campos_obligatorios_completos(globals.name_tabless)
	if(newValue==null){
		elements.val_secreciones.requestFocus()
		return false
	}else{
	    if (newValue==0){
		var thePressedButton = plugins.dialogs.showQuestionDialog('Valor No', '¿Está seguro de ingresar No?', 'Si', 'No');
		    if(thePressedButton=='Si'){
			   thePressedButton = ''
		     	oldValue=newValue
		     	elements.val_convulsiones.requestFocus()
		    	return true
		    }else{
			    thePressedButton = ''
			    oldValue=0
				newValue=1
				foundset.val_secreciones=1
				elements.val_secreciones.requestFocus()
			    return false
		    }
	    }else{
	    	elements.val_convulsiones.requestFocus()
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
 * @properties={typeid:24,uuid:"F158AABE-B65B-45AF-82AA-459BE5AEBCE4"}
 */
function onDataChange_convulsiones(oldValue, newValue, event) {
	globals.valida_campos_obligatorios_completos(globals.name_tabless)
	if(newValue==null){
		elements.val_convulsiones.requestFocus()
		return false
	}else{
	    if (newValue==0){
		var thePressedButton = plugins.dialogs.showQuestionDialog('Valor No', '¿Está seguro de ingresar No?', 'Si', 'No');
		    if(thePressedButton=='Si'){
			   thePressedButton = ''
		     	oldValue=newValue
		     	elements.val_cianosis.requestFocus()
		    	return true
		    }else{
			    thePressedButton = ''
			    oldValue=0
				newValue=1
				globals.uti_val_convulsiones=1
				elements.val_convulsiones.requestFocus()
			    return false
		    }
	    }else{
	    	elements.val_cianosis.requestFocus()
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
 * @properties={typeid:24,uuid:"87F5B6CE-4A5E-421A-A48C-794EE456AF81"}
 */
function onDataChange_cianosis(oldValue, newValue, event) {
	globals.valida_campos_obligatorios_completos(globals.name_tabless)
	if(newValue==null){
		elements.val_cianosis.requestFocus()
		return false
	}else{
	    if (newValue==0){
		var thePressedButton = plugins.dialogs.showQuestionDialog('Valor No', '¿Está seguro de ingresar No?', 'Si', 'No');
		    if(thePressedButton=='Si'){
			   thePressedButton = ''
		     	oldValue=newValue
		     	elements.val_hemorragia.requestFocus()
		    	return true
		    }else{
			    thePressedButton = ''
			    oldValue=0
				newValue=1
				globals.uti_val_cianosis=1
				elements.val_cianosis.requestFocus()
			    return false
		    }
	    }else{
	    	elements.val_hemorragia.requestFocus()
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
 * @properties={typeid:24,uuid:"28258BBA-A028-4BFE-B5B3-11FE54A69CBB"}
 */
function onDataChange_hemo_otros(oldValue, newValue, event) {
	if(newValue==1){
		forms.frm_valoracion.elements.tabless_119.visible=true
		forms.frm_valoracion.elements.tabless_119.tabIndex=1
	}else{
		forms.frm_valoracion.elements.tabless_119.visible=false
		if(vs_to_hojauti_items.getSize()>0){
		    var borrado_hemo=vs_to_hojauti_items.deleteAllRecords()
	        if (!borrado_hemo){
			    plugins.dialogs.showInfoDialog("Error","No borro Otras Hemorragias","ok")
		    }
		}    
		elements.val_arritmia.requestFocus()
	}
	globals.valida_campos_obligatorios_completos(globals.name_tabless)
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
 * @properties={typeid:24,uuid:"95E1DEC1-4F61-4776-8854-0C156AD172BB"}
 */
function onDataChange_arritmia(oldValue, newValue, event) {
	globals.valida_campos_obligatorios_completos(globals.name_tabless)
	if(newValue==null){
		elements.val_arritmia.requestFocus()
		return false
	}else{
	    if (newValue==0){
		var thePressedButton = plugins.dialogs.showQuestionDialog('Valor No', '¿Está seguro de ingresar No?', 'Si', 'No');
		    if(thePressedButton=='Si'){
			   thePressedButton = ''
		     	oldValue=newValue
		     	elements.val_arritmia_otros.requestFocus()
		    	return true
		    }else{
			    thePressedButton = ''
			    oldValue=0
				newValue=1
				globals.uti_val_arritmia=1
				elements.val_arritmia.requestFocus()
			    return false
		    }
	    }else{
	    	elements.val_arritmia_otros.requestFocus()
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
 * @properties={typeid:24,uuid:"7719020F-8AB1-4193-B499-93688121CAF9"}
 */
function onDataChange_arritmia_otros(oldValue, newValue, event) {
	if(newValue==1){
		forms.frm_valoracion.elements.tabless_188.visible=true
		forms.frm_valoracion.elements.tabless_188.tabIndex=1
	}else{
		forms.frm_valoracion.elements.tabless_188.visible=false
		if(arritmias_to_hojauti_items.getSize()>0){
		    var borrado_arritmias=arritmias_to_hojauti_items.deleteAllRecords()
	        if (!borrado_arritmias){
			    plugins.dialogs.showInfoDialog("Error","No borro Otras Arritmias","ok")
		    }
		}    
		elements.val_bronco_espasmo.requestFocus()
	}
	globals.valida_campos_obligatorios_completos(globals.name_tabless)
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
 * @properties={typeid:24,uuid:"57504BFA-E1E9-47EF-8504-2BD9E9070C40"}
 */
function onDataChange_bronco_espasmo(oldValue, newValue, event) {
	globals.valida_campos_obligatorios_completos(globals.name_tabless)
	if(newValue==null){
		elements.val_bronco_espasmo.requestFocus()
		return false
	}else{
	    if (newValue==0){
		var thePressedButton = plugins.dialogs.showQuestionDialog('Valor No', '¿Está seguro de ingresar No?', 'Si', 'No');
		    if(thePressedButton=='Si'){
			   thePressedButton = ''
		     	oldValue=newValue
				forms[globals.name_tabless].elements['tabs_154'].tabIndex=3
				forms.frm_valoracion_2.elements.val_depresion_respir.requestFocus()
				return true
		    }else{
			    thePressedButton = ''
			    oldValue=0
				newValue=1
				globals.uti_val_bronco_espasmo=1
				elements.val_bronco_espasmo.requestFocus()
			    return false
		    }
	    }else{
	    	forms[globals.name_tabless].elements['tabs_154'].tabIndex=3
	    	forms.frm_valoracion_2.elements.val_depresion_respir.requestFocus()
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
 * @properties={typeid:24,uuid:"DBA68F11-BCD4-4380-A6EE-A10B7B0EDA3B"}
 */
function onDataChange_tip_dolor(oldValue, newValue, event) {
	elements.val_disnea.requestFocus()
	return true
}
