
/**
 * Handle changed data.
 *
 * @param oldValue old value
 * @param newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"D83839EE-7FD4-4CB6-8628-B7D495D67BC6"}
 */
function onDataChange_plan_otros(oldValue, newValue, event) {
	if(newValue==0){
		elements.tabless_249.visible=false
		if(otros_plan_to_hojauti_items.getSize()>0){
		    var borrado_otros_plan=otros_plan_to_hojauti_items.deleteAllRecords()
	        if (!borrado_otros_plan){
			    plugins.dialogs.showInfoDialog("Error","No borro Otros Planes","ok")
		    }
		}    
		}else{
			elements.tabless_249.visible=true
	}
	globals.valida_campos_obligatorios_completos(globals.name_tabless)
	return true
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"A970B8AF-286A-41F6-BFD3-2D1F7666B220"}
 */
function onShow_plan_cuidados(firstShow, event) {
	if(globals.uti_plan_otros!=1){		
		elements.tabless_249.visible=false
	}
	if(vs_to_hojauti.plan_medidas_prev_upd==6){
		elements.upd_panel.visible=true
	}else{
		elements.upd_panel.visible=false
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
 * @properties={typeid:24,uuid:"F7DB3E97-BD17-4D1B-BFDA-8481BDC7CC4F"}
 */
function onDataChange_banio_cama(oldValue, newValue, event) {
	globals.valida_campos_obligatorios_completos(globals.name_tabless)
	if(newValue==null){
		elements.plan_banio_cama.requestFocus()
		return false
	}else{
	    if (newValue==0){
		var thePressedButton = plugins.dialogs.showQuestionDialog('Valor No', '¿Está seguro de ingresar No?', 'Si', 'No');
		    if(thePressedButton=='Si'){
			   thePressedButton = ''
		     	oldValue=newValue
		    	elements.plan_higiene_parcial.requestFocus()
		    	return true
		    }else{
			    thePressedButton = ''
			    oldValue=0
				newValue=1
				globals.uti_plan_banio_cama=1
				elements.plan_banio_cama.requestFocus()
			    return false
		    }
	    }else{
	    	elements.plan_higiene_parcial.requestFocus()
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
 * @properties={typeid:24,uuid:"0E219556-4EB0-4FCE-8C3A-C085AF002E48"}
 */
function onDataChange_higiene_parcial(oldValue, newValue, event) {
	globals.valida_campos_obligatorios_completos(globals.name_tabless)
	if(newValue==null){
		elements.plan_higiene_parcial.requestFocus()
		return false
	}else{
	    if (newValue==0){
		var thePressedButton = plugins.dialogs.showQuestionDialog('Valor No', '¿Está seguro de ingresar No?', 'Si', 'No');
		    if(thePressedButton=='Si'){
			   thePressedButton = ''
		     	oldValue=newValue
		    	elements.plan_higiene_ocular.requestFocus()
		    	return true
		    }else{
			    thePressedButton = ''
			    oldValue=0
				newValue=1
				globals.uti_plan_higiene_parcial=1
				elements.plan_higiene_parcial.requestFocus()
			    return false
		    }
	    }else{
	    	elements.plan_higiene_ocular.requestFocus()
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
 * @properties={typeid:24,uuid:"F67AEDA2-00D0-40FE-8F75-AE0DFBE0D89B"}
 */
function onDataChange_higiene_ocular(oldValue, newValue, event) {
	globals.valida_campos_obligatorios_completos(globals.name_tabless)
	if(newValue==null){
		elements.plan_higiene_ocular.requestFocus()
		return false
	}else{
	    if (newValue==0){
		var thePressedButton = plugins.dialogs.showQuestionDialog('Valor No', '¿Está seguro de ingresar No?', 'Si', 'No');
		    if(thePressedButton=='Si'){
			   thePressedButton = ''
		     	oldValue=newValue
		    	elements.plan_lavado_bucal.requestFocus()
		    	return true
		    }else{
			    thePressedButton = ''
			    oldValue=0
				newValue=1
				globals.uti_plan_higiene_ocular=1
				elements.plan_higiene_ocular.requestFocus()
			    return false
		    }
	    }else{
	    	elements.plan_lavado_bucal.requestFocus()
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
 * @properties={typeid:24,uuid:"67B217E1-108C-44B0-93F3-FE0CB3619189"}
 */
function onDataChange_lavado_bucal(oldValue, newValue, event) {
	globals.valida_campos_obligatorios_completos(globals.name_tabless)
	if(newValue==null){
		elements.plan_lavado_bucal.requestFocus()
		return false
	}else{
	    if (newValue==0){
		var thePressedButton = plugins.dialogs.showQuestionDialog('Valor No', '¿Está seguro de ingresar No?', 'Si', 'No');
		    if(thePressedButton=='Si'){
			   thePressedButton = ''
		     	oldValue=newValue
		    	elements.plan_rota_decubito.requestFocus()
		    	return true
		    }else{
			    thePressedButton = ''
			    oldValue=0
				newValue=1
				globals.uti_plan_lavado_bucal=1
				elements.plan_lavado_bucal.requestFocus()
			    return false
		    }
	    }else{
	    	elements.plan_rota_decubito.requestFocus()
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
 * @properties={typeid:24,uuid:"C9FCD3C7-1C5C-4255-A420-754EFF2C3887"}
 */
function onDataChange_rota_decubito(oldValue, newValue, event) {
	globals.valida_campos_obligatorios_completos(globals.name_tabless)
	if(newValue==null){
		elements.plan_rota_decubito.requestFocus()
		return false
	}else{
	    if (newValue==0){
		var thePressedButton = plugins.dialogs.showQuestionDialog('Valor 0', '¿Está seguro de ingresar 0?', 'Si', 'No');
		    if(thePressedButton=='Si'){
			   thePressedButton = ''
		     	oldValue=newValue
		    	elements.plan_alimentacion.requestFocus()
		    	return true
		    }else{
			    thePressedButton = ''
			    oldValue=0
				newValue=1
				globals.uti_plan_rota_decubito=1
				elements.plan_rota_decubito.requestFocus()
			    return false
		    }
	    }else{
	    	elements.plan_alimentacion.requestFocus()
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
 * @properties={typeid:24,uuid:"9D42F831-21AD-4EA0-ACA6-AD003AFE69EF"}
 */
function onDataChange_alimentacion(oldValue, newValue, event) {
	globals.valida_campos_obligatorios_completos(globals.name_tabless)
	if(newValue==null){
		elements.plan_alimentacion.requestFocus()
		return false
	}else{
	    if (newValue==0){
		var thePressedButton = plugins.dialogs.showQuestionDialog('Valor No', '¿Está seguro de ingresar No?', 'Si', 'No');
		    if(thePressedButton=='Si'){
			   thePressedButton = ''
		     	oldValue=newValue
		    	elements.plan_oxigeno.requestFocus()
		    	return true
		    }else{
			    thePressedButton = ''
			    oldValue=0
				newValue=1
				globals.uti_plan_alimentacion=1
				elements.plan_alimentacion.requestFocus()
			    return false
		    }
	    }else{
	    	elements.plan_oxigeno.requestFocus()
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
 * @properties={typeid:24,uuid:"1A43A085-87CF-45DE-B74E-2F2ABF0D7575"}
 */
function onDataChange_oxigeno(oldValue, newValue, event) {
	globals.valida_campos_obligatorios_completos(globals.name_tabless)
	if(newValue==null){
		elements.plan_oxigeno.requestFocus()
		return false
	}else{
	    if (newValue==0){
		var thePressedButton = plugins.dialogs.showQuestionDialog('Valor No', '¿Está seguro de ingresar No?', 'Si', 'No');
		    if(thePressedButton=='Si'){
			   thePressedButton = ''
		     	oldValue=newValue
		    	elements.plan_curacion_herida.requestFocus()
		    	return true
		    }else{
			    thePressedButton = ''
			    oldValue=0
				newValue=1
				globals.uti_plan_oxigeno=1
				elements.plan_oxigeno.requestFocus()
			    return false
		    }
	    }else{
	    	elements.plan_curacion_herida.requestFocus()
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
 * @properties={typeid:24,uuid:"BED4B03F-A4E9-46E2-B2AE-0F37312AE4BA"}
 */
function onDataChange_curacion_herida(oldValue, newValue, event) {
	globals.valida_campos_obligatorios_completos(globals.name_tabless)
	if(newValue==null){
		elements.plan_curacion_herida.requestFocus()
		return false
	}else{
	    if (newValue==0){
		var thePressedButton = plugins.dialogs.showQuestionDialog('Valor 0', '¿Está seguro de ingresar 0?', 'Si', 'No');
		    if(thePressedButton=='Si'){
			   thePressedButton = ''
		     	oldValue=newValue
		    	elements.plan_curacion_escaras.requestFocus()
		    	return true
		    }else{
			    thePressedButton = ''
			    oldValue=0
				newValue=1
				globals.uti_plan_curacion_herida=1
				elements.plan_curacion_herida.requestFocus()
			    return false
		    }
	    }else{
	    	elements.plan_curacion_escaras.requestFocus()
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
 * @properties={typeid:24,uuid:"DFADFA39-187B-4EBD-81AC-95BBFE0B670B"}
 */
function onDataChange_curacion_escaras(oldValue, newValue, event) {
	globals.valida_campos_obligatorios_completos(globals.name_tabless)
	if(newValue==null){
		elements.plan_curacion_escaras.requestFocus()
		return false
	}else{
	    if (newValue==0){
		var thePressedButton = plugins.dialogs.showQuestionDialog('Valor 0', '¿Está seguro de ingresar 0?', 'Si', 'No');
		    if(thePressedButton=='Si'){
			   thePressedButton = ''
		     	oldValue=newValue
		    	elements.plan_banio_prequir.requestFocus()
		    	return true
		    }else{
			    thePressedButton = ''
			    oldValue=0
				newValue=1
				globals.uti_plan_curacion_escaras=1
				elements.plan_curacion_escaras.requestFocus()
			    return false
		    }
	    }else{
	    	elements.plan_banio_prequir.requestFocus()
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
 * @properties={typeid:24,uuid:"07BE35B0-FBE5-42FF-B993-B2029AD0835F"}
 */
function onDataChange_banio_prequir(oldValue, newValue, event) {
	globals.valida_campos_obligatorios_completos(globals.name_tabless)
	if(newValue==null){
		elements.plan_banio_prequir.requestFocus()
		return false
	}else{
	    if (newValue==0){
		var thePressedButton = plugins.dialogs.showQuestionDialog('Valor No', '¿Está seguro de ingresar No?', 'Si', 'No');
		    if(thePressedButton=='Si'){
			   thePressedButton = ''
		     	oldValue=newValue
		    	elements.plan_admin_medica.requestFocus()
		    	return true
		    }else{
			    thePressedButton = ''
			    oldValue=0
				newValue=1
				globals.uti_plan_banio_prequir=1
				elements.plan_banio_prequir.requestFocus()
			    return false
		    }
	    }else{
	    	elements.plan_admin_medica.requestFocus()
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
 * @properties={typeid:24,uuid:"537EB75A-6A2F-4CF8-A110-F208DDDEF509"}
 */
function onDataChange_admin_medica(oldValue, newValue, event) {
	globals.valida_campos_obligatorios_completos(globals.name_tabless)
	if(newValue==null){
		elements.plan_admin_medica.requestFocus()
		return false
	}else{
	    if (newValue==0){
		var thePressedButton = plugins.dialogs.showQuestionDialog('Valor No', '¿Está seguro de ingresar No?', 'Si', 'No');
		    if(thePressedButton=='Si'){
			   thePressedButton = ''
		     	oldValue=newValue
		    	elements.plan_uso_barandas.requestFocus()
		    	return true
		    }else{
			    thePressedButton = ''
			    oldValue=0
				newValue=1
				globals.uti_plan_admin_medica=1
				elements.plan_admin_medica.requestFocus()
			    return false
		    }
	    }else{
	    	elements.plan_uso_barandas.requestFocus()
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
 * @properties={typeid:24,uuid:"8A493080-9516-4014-9A09-EE20345F3D6F"}
 */
function onDataChange_uso_barandas(oldValue, newValue, event) {
	globals.valida_campos_obligatorios_completos(globals.name_tabless)
	if(newValue==null){
		elements.plan_uso_barandas.requestFocus()
		return false
	}else{
	    if (newValue==0){
		var thePressedButton = plugins.dialogs.showQuestionDialog('Valor No', '¿Está seguro de ingresar No?', 'Si', 'No');
		    if(thePressedButton=='Si'){
			   thePressedButton = ''
		     	oldValue=newValue
		    	elements.plan_medidas_prev_upd.requestFocus()
		    	return true
		    }else{
			    thePressedButton = ''
			    oldValue=0
				newValue=1
				globals.uti_plan_uso_barandas=1
				elements.plan_uso_barandas.requestFocus()
			    return false
		    }
	    }else{
	    	elements.plan_medidas_prev_upd.requestFocus()
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
 * @properties={typeid:24,uuid:"70DCC32B-496C-4C9E-938C-4E1E0A054E9D"}
 */
function onDataChange_upd(oldValue, newValue, event) {
	globals.valida_campos_obligatorios_completos(globals.name_tabless)
	if(newValue==null){
		elements.plan_medidas_prev_upd.requestFocus()
		return false
	}else{
	    if (newValue==0){
		var thePressedButton = plugins.dialogs.showQuestionDialog('Valor No', '¿Está seguro de ingresar No?', 'Si', 'No');
		    if(thePressedButton=='Si'){
			   thePressedButton = ''
		     	oldValue=newValue
				elements.upd_panel.visible=false
				globals.uti_plan_aro=0
				globals.uti_plan_colchon=0
				globals.uti_plan_crema=0
				globals.uti_plan_parches=0
				globals.uti_plan_talonera=0
				elements.plan_visita_fliar.enabled=true
		    	elements.plan_visita_fliar.requestFocus()
		    	return true
		    }else{
			    thePressedButton = ''
			    oldValue=0
				newValue=1
				globals.uti_plan_medidas_prev_upd=1
				elements.plan_medidas_prev_upd.requestFocus()
			    return false
		    }
	    }else{
	    	if (newValue==6){
	    		elements.upd_panel.visible=true
				elements.plan_visita_fliar.enabled=false
				elements.plan_crema.requestFocus()
	    	}else{
	    		elements.upd_panel.visible=false
	    		globals.uti_plan_aro=0
	    		globals.uti_plan_colchon=0
	    		globals.uti_plan_crema=0
	    		globals.uti_plan_parches=0
	    		globals.uti_plan_talonera=0
	    		elements.plan_visita_fliar.enabled=true
	    		elements.plan_visita_fliar.requestFocus()
	    	}
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
 * @properties={typeid:24,uuid:"1D28D68A-F9FB-45A7-A9F2-82FA76233EA5"}
 */
function onDataChange_visita_fliar(oldValue, newValue, event) {
	globals.valida_campos_obligatorios_completos(globals.name_tabless)
	
	if(newValue==null){
		elements.plan_visita_fliar.requestFocus()
		return false
	}else{
	    if (newValue==0){
		var thePressedButton = plugins.dialogs.showQuestionDialog('Valor No', '¿Está seguro de ingresar No?', 'Si', 'No');
		    if(thePressedButton=='Si'){
			   thePressedButton = ''
		     	oldValue=newValue
		    	elements.plan_movilizacion.requestFocus()
		    	return true
		    }else{
			    thePressedButton = ''
			    oldValue=0
				newValue=1
				globals.uti_plan_visita_fliar=1
				elements.plan_visita_fliar.requestFocus()
			    return false
		    }
	    }else{
	    	elements.plan_movilizacion.requestFocus()
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
 * @properties={typeid:24,uuid:"458DC191-7444-47D4-ABF7-96D50EEB5CA5"}
 */
function onDataChange_movilizacion(oldValue, newValue, event) {
	globals.valida_campos_obligatorios_completos(globals.name_tabless)
	if(newValue==null){
		elements.plan_movilizacion.requestFocus()
		return false
	}else{
	    if (newValue==0){
		var thePressedButton = plugins.dialogs.showQuestionDialog('Valor No', '¿Está seguro de ingresar No?', 'Si', 'No');
		    if(thePressedButton=='Si'){
			   thePressedButton = ''
		     	oldValue=newValue
		    	elements.plan_otros.requestFocus()
		    	return true
		    }else{
			    thePressedButton = ''
			    oldValue=0
				newValue=1
				globals.uti_plan_movilizacion=1
				elements.plan_movilizacion.requestFocus()
			    return false
		    }
	    }else{
	    	elements.plan_otros.requestFocus()
			return true
	    }
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"E61BA517-FE4D-43CA-AB86-1AC4CDB66132"}
 */
function onAction_movilizacion(event) {
	if(globals.uti_plan_movilizacion==null){
		elements.plan_movilizacion.requestFocus()
	}else{
		if(globals.uti_plan_movilizacion==0){
			
			    elements.plan_movilizacion.requestFocus()
		   
		}
	}
}

/**
 * Handle focus lost event of the element.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"84D4A41E-3767-4916-B85A-1EC6CF567340"}
 */
function onFocusLost_movilizacion(event) {
	if(globals.uti_plan_movilizacion==null){
		elements.plan_movilizacion.requestFocus()
	}else{
		if(globals.uti_plan_movilizacion==0){
			var thePressedButton = plugins.dialogs.showQuestionDialog('Valor No', '¿Está seguro de ingresar No?', 'Si', 'No');
		    if(thePressedButton=='Si'){
			   thePressedButton = ''
		       	elements.plan_otros.requestFocus()
		    }else{
			    thePressedButton = ''
			    elements.plan_movilizacion.requestFocus()
		    }
		}
	}
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
 * @properties={typeid:24,uuid:"A5606FBB-9A76-4439-BA2B-5C31D791CAA8"}
 */
function onDataChange_medidas_upd(oldValue, newValue, event) {
	if (newValue==1){
		elements.plan_visita_fliar.enabled=true
	}
	return true
}
