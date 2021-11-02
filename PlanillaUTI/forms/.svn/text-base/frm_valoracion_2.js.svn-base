/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"F1B4A64D-E9B1-4110-A820-473B38B8B430"}
 */
function onAction_edemas(event) {
	globals.valida_campos_obligatorios_completos(globals.name_tabless)
	if (globals.uti_val_edema==0){
		forms.frm_valoracion_2.elements.edemas_panel.visible = false
		forms.frm_valoracion_2.elements.edemas_panel.enabled = false
	}else{
		forms.frm_valoracion_2.elements.edemas_panel.visible = true
		forms.frm_valoracion_2.elements.edemas_panel.enabled = true
	}
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"F01C29CC-9838-4F60-9647-EE42B2A3BE6E"}
 */
function onShow_frm_valoracion2(firstShow, event) {
	
	if (globals.vSexo==1){
		//forms.frm_valoracion_2.elements.val_esc_prono_genitales.visible=false
		//forms.frm_valoracion_2.elements.val_esc_prono_genitales.titleText="Senos"
		globals.vGenitales="Senos"	
	}else{
		//forms.frm_valoracion_2.elements.val_esc_prono_senos.visible=false
		//forms.frm_valoracion_2.elements.val_esc_prono_genitales.titleText="Genitales"
		globals.vGenitales="Genitales"
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
 * @properties={typeid:24,uuid:"45923FA0-F222-4F37-BFC9-F3F416EF721B"}
 */
function onDataChange_catarsis(oldValue, newValue, event) {
	globals.valida_campos_obligatorios_completos(globals.name_tabless)
	if(newValue==null){
		elements.val_catarsis_tip.requestFocus()
		return false
	}else{
	    if (newValue==0){
		var thePressedButton = plugins.dialogs.showQuestionDialog('Valor No', '¿Está seguro de ingresar No?', 'Si', 'No');
		    if(thePressedButton=='Si'){
			   thePressedButton = ''
		     	oldValue=newValue
		     	elements.lbl_8.visible=false
				elements.val_catarsis_cant.visible=false
				globals.uti_val_catarsis_cant=0
				elements.val_colostomia_tip.requestFocus()
		    	return true
		    }else{
			    thePressedButton = ''
			    oldValue=0
				newValue=1
				globals.uti_val_catarsis_tip=1
				elements.lbl_8.visible=true
				elements.val_catarsis_cant.visible=true
				elements.val_catarsis_tip.requestFocus()
			    return false
		    }
	    }else{
	    	elements.lbl_8.visible=true
			elements.val_catarsis_cant.visible=true
			elements.val_catarsis_cant.requestFocus()
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
 * @properties={typeid:24,uuid:"C8803672-09D2-4E6A-8CB0-0B0058CE2083"}
 */
function onDataChange_colostomia(oldValue, newValue, event) {
	globals.valida_campos_obligatorios_completos(globals.name_tabless)
	if(newValue==null){
		elements.val_colostomia_tip.requestFocus()
		return false
	}else{
	    if (newValue==0){
		var thePressedButton = plugins.dialogs.showQuestionDialog('Valor No', '¿Está seguro de ingresar No?', 'Si', 'No');
		    if(thePressedButton=='Si'){
			   thePressedButton = ''
		     	oldValue=newValue
		     	elements.lbl_10.visible=false
				elements.val_colostomia_cant.visible=false
				globals.uti_val_colostomia_cant=0
				elements.val_piel.requestFocus()
		    	return true
		    }else{
			    thePressedButton = ''
			    oldValue=0
				newValue=1
				globals.uti_val_colostomia_tip=1
				elements.lbl_10.visible=true
				elements.val_colostomia_cant.visible=true
				elements.val_colostomia_tip.requestFocus()
			    return false
		    }
	    }else{
	    	elements.lbl_10.visible=true
			elements.val_colostomia_cant.visible=true
			elements.val_colostomia_cant.requestFocus()
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
 * @properties={typeid:24,uuid:"356E6CB8-C7FB-4D9A-98CC-B37903905CC7"}
 */
function onDataChange_depresion_respir(oldValue, newValue, event) {
	globals.valida_campos_obligatorios_completos(globals.name_tabless)
	if(newValue==null){
		elements.val_depresion_respir.requestFocus()
		return false
	}else{
	    if (newValue==0){
		var thePressedButton = plugins.dialogs.showQuestionDialog('Valor No', '¿Está seguro de ingresar No?', 'Si', 'No');
		    if(thePressedButton=='Si'){
			   thePressedButton = ''
		     	oldValue=newValue
		     	elements.val_conciencia.requestFocus()
		    	return true
		    }else{
			    thePressedButton = ''
			    oldValue=0
				newValue=1
				globals.uti_val_depresion_respir=1
				elements.val_depresion_respir.requestFocus()
			    return false
		    }
	    }else{
	    	elements.val_conciencia.requestFocus()
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
 * @properties={typeid:24,uuid:"D6258A75-37B3-4783-A730-CB85286010EA"}
 */
function onDataChange_conciencia(oldValue, newValue, event) {
	globals.valida_campos_obligatorios_completos(globals.name_tabless)
	elements.val_mcpd.requestFocus()
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
 * @properties={typeid:24,uuid:"6D6BAFFE-A0EC-49F9-82E7-B9654982B32F"}
 */
function onDataChange_mcpd(oldValue, newValue, event) {
	globals.valida_campos_obligatorios_completos(globals.name_tabless)
	if(newValue==null){
		elements.val_mcpd.requestFocus()
		return false
	}else{
	    if (newValue==0){
		var thePressedButton = plugins.dialogs.showQuestionDialog('Valor No', '¿Está seguro de ingresar No?', 'Si', 'No');
		    if(thePressedButton=='Si'){
			   thePressedButton = ''
		     	oldValue=newValue
		     	elements.val_diuresis.requestFocus()
		    	return true
		    }else{
			    thePressedButton = ''
			    oldValue=0
				newValue=1
				globals.uti_val_mcpd=1
				elements.val_mcpd.requestFocus()
			    return false
		    }
	    }else{
	    	elements.val_diuresis.requestFocus()
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
 * @properties={typeid:24,uuid:"0EDF3E3D-C692-45E7-8444-60F44D02FEC9"}
 */
function onDataChange_diuresis(oldValue, newValue, event) {
	globals.valida_campos_obligatorios_completos(globals.name_tabless)
	if(newValue==null){
		elements.val_diuresis.requestFocus()
		return false
	}else{
	    if (newValue==0){
		var thePressedButton = plugins.dialogs.showQuestionDialog('Valor No', '¿Está seguro de ingresar No?', 'Si', 'No');
		    if(thePressedButton=='Si'){
			   thePressedButton = ''
		     	oldValue=newValue
		     	elements.val_nauseas.requestFocus()
		    	return true
		    }else{
			    thePressedButton = ''
			    oldValue=0
				newValue=1
				globals.uti_val_diuresis=1
				elements.val_diuresis.requestFocus()
			    return false
		    }
	    }else{
	    	elements.val_nauseas.requestFocus()
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
 * @properties={typeid:24,uuid:"6EA9E690-FD7F-4062-BD2C-3FE720E41093"}
 */
function onDataChange_nauseas(oldValue, newValue, event) {
	globals.valida_campos_obligatorios_completos(globals.name_tabless)
	if(newValue==null){
		elements.val_nauseas.requestFocus()
		return false
	}else{
	    if (newValue==0){
		var thePressedButton = plugins.dialogs.showQuestionDialog('Valor No', '¿Está seguro de ingresar No?', 'Si', 'No');
		    if(thePressedButton=='Si'){
			   thePressedButton = ''
		     	oldValue=newValue
		     	elements.val_emesis.requestFocus()
		    	return true
		    }else{
			    thePressedButton = ''
			    oldValue=0
				newValue=1
				globals.uti_val_nauseas=1
				elements.val_nauseas.requestFocus()
			    return false
		    }
	    }else{
	    	elements.val_emesis.requestFocus()
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
 * @properties={typeid:24,uuid:"24D13C3F-7387-4009-B117-7B62F145FEE1"}
 */
function onDataChange_emesis(oldValue, newValue, event) {
	globals.valida_campos_obligatorios_completos(globals.name_tabless)
	if(newValue==null){
		elements.val_emesis.requestFocus()
		return false
	}else{
	    if (newValue==0){
		var thePressedButton = plugins.dialogs.showQuestionDialog('Valor No', '¿Está seguro de ingresar No?', 'Si', 'No');
		    if(thePressedButton=='Si'){
			   thePressedButton = ''
		     	oldValue=newValue
		     	elements.val_catarsis_tip.requestFocus()
		    	return true
		    }else{
			    thePressedButton = ''
			    oldValue=0
				newValue=1
				globals.uti_val_emesis=1
				elements.val_emesis.requestFocus()
			    return false
		    }
	    }else{
	    	elements.val_catarsis_tip.requestFocus()
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
 * @properties={typeid:24,uuid:"68ED028B-B3BB-4970-B0D4-AA407468643B"}
 */
function onDataChange_catarsis_cant(oldValue, newValue, event) {
	globals.valida_campos_obligatorios_completos(globals.name_tabless)
	elements.val_colostomia_tip.requestFocus()
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
 * @properties={typeid:24,uuid:"94C1C4FB-95D5-4724-9FA1-CAF1A64BFE8E"}
 */
function onDataChange_colostomia_cant(oldValue, newValue, event) {
	globals.valida_campos_obligatorios_completos(globals.name_tabless)
	elements.val_piel.requestFocus()
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
 * @properties={typeid:24,uuid:"C8D229A2-CB0B-42BA-89A0-708D6B29C970"}
 */
function onDataChange_piel(oldValue, newValue, event) {
	globals.valida_campos_obligatorios_completos(globals.name_tabless)
	elements.val_edema.requestFocus()
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
 * @properties={typeid:24,uuid:"33A04BD5-90BB-4813-A3D2-547EAF446530"}
 */
function onDataChange_edema(oldValue, newValue, event) {
	globals.valida_campos_obligatorios_completos(globals.name_tabless)
	if (newValue==0){
		forms.frm_valoracion_2.elements.edemas_panel.visible = false
		forms.frm_valoracion_2.elements.edemas_panel.enabled = false
		elements.val_esc_supino_codos.requestFocus()
	}else{
		forms.frm_valoracion_2.elements.edemas_panel.visible = true
		forms.frm_valoracion_2.elements.edemas_panel.enabled = true
		elements.val_edema_mmss_d.requestFocus()
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
 * @properties={typeid:24,uuid:"FDCF1490-0849-4B65-A31B-3B166F4E9206"}
 */
function onDataChange_escaras_supino_codos(oldValue, newValue, event) {
	globals.valida_campos_obligatorios_completos(globals.name_tabless)
	if(newValue==null){
		elements.val_esc_supino_codos.requestFocus()
		return false
	}else{
	    if (newValue==0){
		var thePressedButton = plugins.dialogs.showQuestionDialog('Valor No', '¿Está seguro de ingresar No?', 'Si', 'No');
		    if(thePressedButton=='Si'){
			   thePressedButton = ''
		     	oldValue=newValue
		     	elements.val_esc_supino_occipucio.requestFocus()
		    	return true
		    }else{
			    thePressedButton = ''
			    oldValue=0
				newValue=1
				globals.uti_val_esc_supino_codos=1
				elements.val_esc_supino_codos.requestFocus()
			    return false
		    }
	    }else{
	    	elements.val_esc_supino_occipucio.requestFocus()
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
 * @properties={typeid:24,uuid:"0CA57AAA-AA4E-46E1-88BC-F1C98CBCBCDE"}
 */
function onDataChange_esc_supino_occipucio(oldValue, newValue, event) {
	globals.valida_campos_obligatorios_completos(globals.name_tabless)
	if(newValue==null){
		elements.val_esc_supino_occipucio.requestFocus()
		return false
	}else{
	    if (newValue==0){
		var thePressedButton = plugins.dialogs.showQuestionDialog('Valor No', '¿Está seguro de ingresar No?', 'Si', 'No');
		    if(thePressedButton=='Si'){
			   thePressedButton = ''
		     	oldValue=newValue
		     	elements.val_esc_supino_omoplatos.requestFocus()
		    	return true
		    }else{
			    thePressedButton = ''
			    oldValue=0
				newValue=1
				globals.uti_val_esc_supino_occipucio=1
				elements.val_esc_supino_occipucio.requestFocus()
			    return false
		    }
	    }else{
	    	elements.val_esc_supino_omoplatos.requestFocus()
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
 * @properties={typeid:24,uuid:"CB27DD30-7EF4-499B-BE7B-F1795C5F1BDD"}
 */
function onDataChange_esc_supino_omoplatos(oldValue, newValue, event) {
	globals.valida_campos_obligatorios_completos(globals.name_tabless)
	if(newValue==null){
		elements.val_esc_supino_omoplatos.requestFocus()
		return false
	}else{
	    if (newValue==0){
		var thePressedButton = plugins.dialogs.showQuestionDialog('Valor No', '¿Está seguro de ingresar No?', 'Si', 'No');
		    if(thePressedButton=='Si'){
			   thePressedButton = ''
		     	oldValue=newValue
		     	elements.val_esc_supino_sacro.requestFocus()
		    	return true
		    }else{
			    thePressedButton = ''
			    oldValue=0
				newValue=1
				globals.uti_val_esc_supino_omoplatos=1
				elements.val_esc_supino_omoplatos.requestFocus()
			    return false
		    }
	    }else{
	    	elements.val_esc_supino_sacro.requestFocus()
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
 * @properties={typeid:24,uuid:"0EB1D255-6954-420A-8B36-CE058700C35C"}
 */
function onDataChange_esc_supino_sacro(oldValue, newValue, event) {
	globals.valida_campos_obligatorios_completos(globals.name_tabless)
	if(newValue==null){
		elements.val_esc_supino_sacro.requestFocus()
		return false
	}else{
	    if (newValue==0){
		var thePressedButton = plugins.dialogs.showQuestionDialog('Valor No', '¿Está seguro de ingresar No?', 'Si', 'No');
		    if(thePressedButton=='Si'){
			   thePressedButton = ''
		     	oldValue=newValue
		     	elements.val_esc_supino_talon.requestFocus()
		    	return true
		    }else{
			    thePressedButton = ''
			    oldValue=0
				newValue=1
				globals.uti_val_esc_supino_sacro=1
				elements.val_esc_supino_sacro.requestFocus()
			    return false
		    }
	    }else{
	    	elements.val_esc_supino_talon.requestFocus()
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
 * @properties={typeid:24,uuid:"AF90AFF1-793A-427C-95BF-79D1DE198071"}
 */
function onDataChange_esc_supino_talon(oldValue, newValue, event) {
	globals.valida_campos_obligatorios_completos(globals.name_tabless)
	if(newValue==null){
		elements.val_esc_supino_talon.requestFocus()
		return false
	}else{
	    if (newValue==0){
		var thePressedButton = plugins.dialogs.showQuestionDialog('Valor No', '¿Está seguro de ingresar No?', 'Si', 'No');
		    if(thePressedButton=='Si'){
			   thePressedButton = ''
		     	oldValue=newValue
		     	elements.val_esc_prono_dedos_del_pie.requestFocus()
		    	return true
		    }else{
			    thePressedButton = ''
			    oldValue=0
				newValue=1
				globals.uti_val_esc_supino_talon=1
				elements.val_esc_supino_talon.requestFocus()
			    return false
		    }
	    }else{
	    	elements.val_esc_prono_dedos_del_pie.requestFocus()
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
 * @properties={typeid:24,uuid:"6810FA8C-AA8E-4339-A833-0A62874FC408"}
 */
function onDataChange_dedos_del_pie(oldValue, newValue, event) {
	globals.valida_campos_obligatorios_completos(globals.name_tabless)
	if(newValue==null){
		elements.val_esc_prono_dedos_del_pie.requestFocus()
		return false
	}else{
	    if (newValue==0){
		var thePressedButton = plugins.dialogs.showQuestionDialog('Valor No', '¿Está seguro de ingresar No?', 'Si', 'No');
		    if(thePressedButton=='Si'){
			   thePressedButton = ''
		     	oldValue=newValue
		     	elements.val_esc_prono_hombro.requestFocus()
		    	return true
		    }else{
			    thePressedButton = ''
			    oldValue=0
				newValue=1
				globals.uti_val_esc_prono_dedos_del_pie=1
				elements.val_esc_prono_dedos_del_pie.requestFocus()
			    return false
		    }
	    }else{
	    	elements.val_esc_prono_hombro.requestFocus()
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
 * @properties={typeid:24,uuid:"A279A823-2C7D-40B5-96C9-F09F977C68A4"}
 */
function onDataChange_hombro(oldValue, newValue, event) {
	globals.valida_campos_obligatorios_completos(globals.name_tabless)
	if(newValue==null){
		elements.val_esc_prono_hombro.requestFocus()
		return false
	}else{
	    if (newValue==0){
		var thePressedButton = plugins.dialogs.showQuestionDialog('Valor No', '¿Está seguro de ingresar No?', 'Si', 'No');
		    if(thePressedButton=='Si'){
			   thePressedButton = ''
		     	oldValue=newValue
		     	elements.val_esc_prono_mejilla_oreja.requestFocus()
		    	return true
		    }else{
			    thePressedButton = ''
			    oldValue=0
				newValue=1
				globals.uti_val_esc_prono_hombro=1
				elements.val_esc_prono_hombro.requestFocus()
			    return false
		    }
	    }else{
	    	elements.val_esc_prono_mejilla_oreja.requestFocus()
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
 * @properties={typeid:24,uuid:"B9BE8349-50E2-4A39-A55D-ED02532AE607"}
 */
function onDataChange_mejilla_oreja(oldValue, newValue, event) {
	globals.valida_campos_obligatorios_completos(globals.name_tabless)
	if(newValue==null){
		elements.val_esc_prono_mejilla_oreja.requestFocus()
		return false
	}else{
	    if (newValue==0){
		var thePressedButton = plugins.dialogs.showQuestionDialog('Valor No', '¿Está seguro de ingresar No?', 'Si', 'No');
		    if(thePressedButton=='Si'){
			   thePressedButton = ''
		     	oldValue=newValue
		     	elements.val_esc_prono_rodilla.requestFocus()
		    	return true
		    }else{
			    thePressedButton = ''
			    oldValue=0
				newValue=1
				globals.uti_val_esc_prono_mejilla_oreja=1
				elements.val_esc_prono_mejilla_oreja.requestFocus()
			    return false
		    }
	    }else{
	    	elements.val_esc_prono_rodilla.requestFocus()
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
 * @properties={typeid:24,uuid:"19C1C21A-38CC-4BE6-AB4F-1025BF62476A"}
 */
function onDataChange_rodilla(oldValue, newValue, event) {
	globals.valida_campos_obligatorios_completos(globals.name_tabless)
	if(newValue==null){
		elements.val_esc_prono_rodilla.requestFocus()
		return false
	}else{
	    if (newValue==0){
		var thePressedButton = plugins.dialogs.showQuestionDialog('Valor No', '¿Está seguro de ingresar No?', 'Si', 'No');
		    if(thePressedButton=='Si'){
			   thePressedButton = ''
		     	oldValue=newValue
		     	elements.val_esc_prono_genitales.requestFocus()
		    	return true
		    }else{
			    thePressedButton = ''
			    oldValue=0
				newValue=1
				globals.uti_val_esc_prono_rodilla=1
				elements.val_esc_prono_rodilla.requestFocus()
			    return false
		    }
	    }else{
	    	elements.val_esc_prono_genitales.requestFocus()
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
 * @properties={typeid:24,uuid:"8B66940D-DBA4-4B68-85C7-E902FE015687"}
 */
function onDataChange_genitales(oldValue, newValue, event) {
	globals.valida_campos_obligatorios_completos(globals.name_tabless)
	if(newValue==null){
		elements.val_esc_prono_genitales.requestFocus()
		return false
	}else{
	    if (newValue==0){
		var thePressedButton = plugins.dialogs.showQuestionDialog('Valor No', '¿Está seguro de ingresar No?', 'Si', 'No');
		    if(thePressedButton=='Si'){
			   thePressedButton = ''
		     	oldValue=newValue
		     	elements.val_esc_lateral_cadera.requestFocus()
		    	return true
		    }else{
			    thePressedButton = ''
			    oldValue=0
				newValue=1
				globals.uti_val_esc_prono_genitales=1
				elements.val_esc_prono_genitales.requestFocus()
			    return false
		    }
	    }else{
	    	elements.val_esc_lateral_cadera.requestFocus()
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
 * @properties={typeid:24,uuid:"AB3C56A3-903F-460D-A731-DE3BE41B5F85"}
 */
function onDataChange_lateral_cadera(oldValue, newValue, event) {
	globals.valida_campos_obligatorios_completos(globals.name_tabless)
	if(newValue==null){
		elements.val_esc_lateral_cadera.requestFocus()
		return false
	}else{
	    if (newValue==0){
		var thePressedButton = plugins.dialogs.showQuestionDialog('Valor No', '¿Está seguro de ingresar No?', 'Si', 'No');
		    if(thePressedButton=='Si'){
			   thePressedButton = ''
		     	oldValue=newValue
		     	elements.val_esc_lateral_codo.requestFocus()
		    	return true
		    }else{
			    thePressedButton = ''
			    oldValue=0
				newValue=1
				globals.uti_val_esc_lateral_cadera=1
				elements.val_esc_lateral_cadera.requestFocus()
			    return false
		    }
	    }else{
	    	elements.val_esc_lateral_codo.requestFocus()
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
 * @properties={typeid:24,uuid:"312D3EAC-4CB3-4176-B4F2-A10D3837CD80"}
 */
function onDataChange_lateral_codo(oldValue, newValue, event) {
	globals.valida_campos_obligatorios_completos(globals.name_tabless)
	if(newValue==null){
		elements.val_esc_lateral_codo.requestFocus()
		return false
	}else{
	    if (newValue==0){
		var thePressedButton = plugins.dialogs.showQuestionDialog('Valor No', '¿Está seguro de ingresar No?', 'Si', 'No');
		    if(thePressedButton=='Si'){
			   thePressedButton = ''
		     	oldValue=newValue
		     	elements.val_esc_lateral_costillas.requestFocus()
		    	return true
		    }else{
			    thePressedButton = ''
			    oldValue=0
				newValue=1
				globals.uti_val_esc_lateral_codo=1
				elements.val_esc_lateral_codo.requestFocus()
			    return false
		    }
	    }else{
	    	elements.val_esc_lateral_costillas.requestFocus()
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
 * @properties={typeid:24,uuid:"B06083F7-25CA-4236-AE19-4FAE2B591CBA"}
 */
function onDataChange_laterla_costillas(oldValue, newValue, event) {
	globals.valida_campos_obligatorios_completos(globals.name_tabless)
	if(newValue==null){
		elements.val_esc_lateral_costillas.requestFocus()
		return false
	}else{
	    if (newValue==0){
		var thePressedButton = plugins.dialogs.showQuestionDialog('Valor No', '¿Está seguro de ingresar No?', 'Si', 'No');
		    if(thePressedButton=='Si'){
			   thePressedButton = ''
		     	oldValue=newValue
		     	elements.val_esc_lateral_hombro.requestFocus()
		    	return true
		    }else{
			    thePressedButton = ''
			    oldValue=0
				newValue=1
				globals.uti_val_esc_lateral_costillas=1
				elements.val_esc_lateral_costillas.requestFocus()
			    return false
		    }
	    }else{
	    	elements.val_esc_lateral_hombro.requestFocus()
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
 * @properties={typeid:24,uuid:"C6819A1C-611E-4D49-92F7-A52609D77B58"}
 */
function onDataChange_lateral_hombro(oldValue, newValue, event) {
	globals.valida_campos_obligatorios_completos(globals.name_tabless)
	if(newValue==null){
		elements.val_esc_lateral_hombro.requestFocus()
		return false
	}else{
	    if (newValue==0){
		var thePressedButton = plugins.dialogs.showQuestionDialog('Valor No', '¿Está seguro de ingresar No?', 'Si', 'No');
		    if(thePressedButton=='Si'){
			   thePressedButton = ''
		     	oldValue=newValue
		     	elements.val_esc_lateral_oreja.requestFocus()
		    	return true
		    }else{
			    thePressedButton = ''
			    oldValue=0
				newValue=1
				globals.uti_val_esc_lateral_hombro=1
				elements.val_esc_lateral_hombro.requestFocus()
			    return false
		    }
	    }else{
	    	elements.val_esc_lateral_oreja.requestFocus()
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
 * @properties={typeid:24,uuid:"AC3D694A-8E3E-4FB3-A3CC-8CBE531CD9BD"}
 */
function onDataChange_lateral_oreja(oldValue, newValue, event) {
	globals.valida_campos_obligatorios_completos(globals.name_tabless)
	if(newValue==null){
		elements.val_esc_lateral_oreja.requestFocus()
		return false
	}else{
	    if (newValue==0){
		var thePressedButton = plugins.dialogs.showQuestionDialog('Valor No', '¿Está seguro de ingresar No?', 'Si', 'No');
		    if(thePressedButton=='Si'){
			   thePressedButton = ''
		     	oldValue=newValue
		     	elements.val_esc_lateral_rodillas.requestFocus()
		    	return true
		    }else{
			    thePressedButton = ''
			    oldValue=0
				newValue=1
				globals.uti_val_esc_lateral_oreja=1
				elements.val_esc_lateral_oreja.requestFocus()
			    return false
		    }
	    }else{
	    	elements.val_esc_lateral_rodillas.requestFocus()
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
 * @properties={typeid:24,uuid:"2077EF49-A097-453F-86A1-B5717CD84386"}
 */
function onDataChange_lateral_rodillas(oldValue, newValue, event) {
	globals.valida_campos_obligatorios_completos(globals.name_tabless)
	if(newValue==null){
		elements.val_esc_lateral_rodillas.requestFocus()
		return false
	}else{
	    if (newValue==0){
		var thePressedButton = plugins.dialogs.showQuestionDialog('Valor No', '¿Está seguro de ingresar No?', 'Si', 'No');
		    if(thePressedButton=='Si'){
			   thePressedButton = ''
		     	oldValue=newValue
		     	elements.val_esc_lateral_tobillo.requestFocus()
		    	return true
		    }else{
			    thePressedButton = ''
			    oldValue=0
				newValue=1
				globals.uti_val_esc_lateral_rodillas=1
				elements.val_esc_lateral_rodillas.requestFocus()
			    return false
		    }
	    }else{
	    	elements.val_esc_lateral_tobillo.requestFocus()
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
 * @properties={typeid:24,uuid:"B7614CC7-B571-496B-B17B-83A15D4B6AC9"}
 */
function onDataChange_lateral_tobillo(oldValue, newValue, event) {
	globals.valida_campos_obligatorios_completos(globals.name_tabless)
	if(newValue==null){
		elements.val_esc_lateral_tobillo.requestFocus()
		return false
	}else{
	    if (newValue==0){
		var thePressedButton = plugins.dialogs.showQuestionDialog('Valor No', '¿Está seguro de ingresar No?', 'Si', 'No');
		    if(thePressedButton=='Si'){
			   thePressedButton = ''
		     	oldValue=newValue
		     	forms[globals.name_tabless].elements['tabs_154'].tabIndex=4
		     	forms.frm_valoracion_3.elements.val_heridas.requestFocus()
		     	return true
		    }else{
			    thePressedButton = ''
			    oldValue=0
				newValue=1
				globals.uti_val_esc_lateral_tobillo=1
				elements.val_esc_lateral_tobillo.requestFocus()
			    return false
		    }
	    }else{
	    	forms[globals.name_tabless].elements['tabs_154'].tabIndex=4
			forms.frm_valoracion_3.elements.val_heridas.requestFocus()
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
 * @properties={typeid:24,uuid:"1906BA4B-B32B-4CE0-AE7F-A57EB6ECB484"}
 */
function onDataChange_val_oxigeno_cant(oldValue, newValue, event) {
	globals.valida_campos_obligatorios_completos(globals.name_tabless)
	elements.val_edema.requestFocus()
	return true
}
