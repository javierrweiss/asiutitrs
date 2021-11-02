/**
 * Handle changed data.
 *
 * @param oldValue old value
 * @param newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"A4DD1AB5-9782-4768-A693-EDDB1EE166EB"}
 */
function onDataChange_otros_egreso(oldValue, newValue, event) {
	if(newValue==0){
		elements.tabless_299.visible=false
		if(otros_egresos_to_hojauti_items.getSize()>0){
		    var borrado_otros_egresos=otros_egresos_to_hojauti_items.deleteAllRecords()
	        if (!borrado_otros_egresos){
			    plugins.dialogs.showInfoDialog("Error","No borro Otros Egresos","ok")
		    }
		}    
		}else{
			elements.tabless_299.visible=true
			elements.tabless_299.tabIndex=1
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
 * @properties={typeid:24,uuid:"93FBB517-0538-4612-8CC6-5B485391B2E5"}
 */
function onShow_balance_egresos(firstShow, event) {
	if(globals.uti_bal_egr_otros!=1){
		elements.tabless_299.visible=false
	}
	
	elements.bal_egr_drenaje2_tipo.enabled=false
	elements.bal_egr_drenaje2_cant.enabled=false
	elements.bal_egr_drenaje3_tipo.enabled=false
	elements.bal_egr_drenaje3_cant.enabled=false
	elements.bal_egr_drenaje4_tipo.enabled=false
	elements.bal_egr_drenaje4_cant.enabled=false
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
 * @properties={typeid:24,uuid:"26ABAB73-E221-45EB-829D-F7DA26CD6AC2"}
 */
function onDataChange_diuresis_tipo(oldValue, newValue, event) {
	globals.valida_campos_obligatorios_completos(globals.name_tabless)
	if(newValue==null){
		elements.bal_egr_diuresis_tipo.requestFocus()
		return false
	}else{
	    if (newValue==0){
		var thePressedButton = plugins.dialogs.showQuestionDialog('Valor No', '¿Está seguro de ingresar No?', 'Si', 'No');
		    if(thePressedButton=='Si'){
			   thePressedButton = ''
		     	oldValue=newValue
		     	elements.bal_egr_diuresis_cant.visible=false
				elements.lbl_1.visible=false
				globals.uti_bal_egr_diuresis_tipo=0
				globals.uti_bal_egr_diuresis_cant=0
				elements.bal_egr_drenaje1_tipo.requestFocus()
		    	return true
		    }else{
			    thePressedButton = ''
			    oldValue=0
				newValue=1
				globals.uti_bal_egr_diuresis_tipo=1
				elements.bal_egr_diuresis_cant.visible=false
				elements.lbl_1.visible=false
				elements.bal_egr_diuresis_tipo.requestFocus()
			    return false
		    }
	    }else{
	    	elements.bal_egr_diuresis_cant.visible=true
			elements.lbl_1.visible=true
			elements.bal_egr_diuresis_cant.requestFocus()
			return true
	    }
	}
}

/**
 * Handle focus lost event of the element.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"5BA44D16-2851-46FD-B76B-37D4E04DEA19"}
 */
function onFocusLost_diuresis_tipo(event) {
	if(globals.errorDato==false){
		forms.frm_balance_egresos.elements.bal_egr_diuresis_tipo.requestFocus()
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
 * @properties={typeid:24,uuid:"19EA70F2-4875-44EA-9BFD-B808AEF08C9B"}
 */
function onDataChange_drenaje1_tipo(oldValue, newValue, event) {
	globals.valida_campos_obligatorios_completos(globals.name_tabless)
	if(newValue==null){
		elements.bal_egr_drenaje1_tipo.requestFocus()
		return false
	}else{
	    if (newValue==0){
		var thePressedButton = plugins.dialogs.showQuestionDialog('Valor No', '¿Está seguro de ingresar No?', 'Si', 'No');
		    if(thePressedButton=='Si'){
			   thePressedButton = ''
		     	oldValue=newValue
		     	elements.bal_egr_drenaje1_cant.visible=false
				elements.lbl_2.visible=false
				globals.uti_bal_egr_drenaje1_tipo=0
				globals.uti_bal_egr_drenaje1_cant=0
				elements.bal_egr_drenaje2_tipo.enabled=true
				elements.bal_egr_drenaje2_tipo.requestFocus()
		    	return true
		    }else{
			    thePressedButton = ''
			    oldValue=0
				newValue=1
				globals.uti_bal_egr_drenaje1_tipo=1
				elements.bal_egr_drenaje1_cant.visible=false
				elements.lbl_2.visible=false
				elements.bal_egr_drenaje1_tipo.requestFocus()
			    return false
		    }
	    }else{
	    	elements.bal_egr_drenaje1_cant.visible=true
			elements.lbl_2.visible=true
			elements.bal_egr_drenaje1_cant.requestFocus()
			return true
	    }
	}
}

/**
 * Handle focus lost event of the element.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"A83DC6B5-3F85-41AA-8B61-7088752E2C8B"}
 */
function onFocusLost_drenaje1_tipo(event) {
	if(globals.errorDato==false){
		forms.frm_balance_egresos.elements.bal_egr_drenaje1_tipo.requestFocus()
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
 * @properties={typeid:24,uuid:"C5E094A0-331A-4210-95F1-C688833C9E6F"}
 */
function onDataChange_drenaje2_tipo(oldValue, newValue, event) {
	globals.valida_campos_obligatorios_completos(globals.name_tabless)
	if(newValue==null){
		elements.bal_egr_drenaje2_tipo.requestFocus()
		return false
	}else{
	    if (newValue==0){
		var thePressedButton = plugins.dialogs.showQuestionDialog('Valor No', '¿Está seguro de ingresar No?', 'Si', 'No');
		    if(thePressedButton=='Si'){
			   thePressedButton = ''
		     	oldValue=newValue
		     	elements.bal_egr_drenaje2_cant.visible=false
				elements.lbl_3.visible=false
				globals.uti_bal_egr_drenaje2_tipo=0
				globals.uti_bal_egr_drenaje2_cant=0
				elements.bal_egr_drenaje3_tipo.enabled=true
				elements.bal_egr_drenaje3_tipo.requestFocus()
		    	return true
		    }else{
			    thePressedButton = ''
			    oldValue=0
				newValue=1
				globals.uti_bal_egr_drenaje2_tipo=1
				elements.bal_egr_drenaje2_cant.visible=false
				elements.lbl_3.visible=false
				elements.bal_egr_drenaje2_tipo.requestFocus()
			    return false
		    }
	    }else{
	    	elements.bal_egr_drenaje2_cant.visible=true
			elements.lbl_3.visible=true
			elements.bal_egr_drenaje2_cant.requestFocus()
			return true
	    }
	}
}

/**
 * Handle focus lost event of the element.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"6E295000-C152-40C9-8E2D-977CBAC094A2"}
 */
function onFocusLost_drenaje2_tipo(event) {
	if(globals.errorDato==false){
		forms.frm_balance_egresos.elements.bal_egr_drenaje2_tipo.requestFocus()
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
 * @properties={typeid:24,uuid:"61A5DEE5-ECCA-44C5-BC04-F477BC1D0754"}
 */
function onDataChange_drenaje3_tipo(oldValue, newValue, event) {
	globals.valida_campos_obligatorios_completos(globals.name_tabless)
	if(newValue==null){
		elements.bal_egr_drenaje3_tipo.requestFocus()
		return false
	}else{
	    if (newValue==0){
		var thePressedButton = plugins.dialogs.showQuestionDialog('Valor No', '¿Está seguro de ingresar No?', 'Si', 'No');
		    if(thePressedButton=='Si'){
			   thePressedButton = ''
		     	oldValue=newValue
		     	elements.bal_egr_drenaje3_cant.visible=false
				elements.lbl_4.visible=false
				globals.uti_bal_egr_drenaje3_tipo=0
				globals.uti_bal_egr_drenaje3_cant=0
				elements.bal_egr_drenaje4_tipo.enabled=true
				elements.bal_egr_drenaje4_tipo.requestFocus()
		    	return true
		    }else{
			    thePressedButton = ''
			    oldValue=0
				newValue=1
				globals.uti_bal_egr_drenaje3_tipo=1
				elements.bal_egr_drenaje3_cant.visible=false
				elements.lbl_4.visible=false
				elements.bal_egr_drenaje3_tipo.requestFocus()
			    return false
		    }
	    }else{
	    	elements.bal_egr_drenaje3_cant.visible=true
			elements.lbl_4.visible=true
			elements.bal_egr_drenaje3_cant.requestFocus()
			return true
	    }
	}
}

/**
 * Handle focus lost event of the element.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"B2C3EDBB-A544-4510-945A-D4B729AE90A4"}
 */
function onFocusLost_drenaje3_tipo(event) {
	if(globals.errorDato==false){
		forms.frm_balance_egresos.elements.bal_egr_drenaje3_tipo.requestFocus()
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
 * @properties={typeid:24,uuid:"A2E996F9-35DF-4672-9C56-E5642D7E7D2F"}
 */
function onDataChange_drenaje4_tipo(oldValue, newValue, event) {
	globals.valida_campos_obligatorios_completos(globals.name_tabless)
	if(newValue==null){
		elements.bal_egr_drenaje4_tipo.requestFocus()
		return false
	}else{
	    if (newValue==0){
		var thePressedButton = plugins.dialogs.showQuestionDialog('Valor No', '¿Está seguro de ingresar No?', 'Si', 'No');
		    if(thePressedButton=='Si'){
			   thePressedButton = ''
		     	oldValue=newValue
		     	elements.bal_egr_drenaje4_cant.visible=false
				elements.lbl_5.visible=false
				globals.uti_bal_egr_drenaje4_tipo=0
				globals.uti_bal_egr_drenaje4_cant=0
				elements.bal_egr_sonda_tipo.requestFocus()
		    	return true
		    }else{
			    thePressedButton = ''
			    oldValue=0
				newValue=1
				globals.uti_bal_egr_drenaje4_tipo=1
				elements.bal_egr_drenaje4_cant.visible=false
				elements.lbl_5.visible=false
				elements.bal_egr_drenaje4_tipo.requestFocus()
			    return false
		    }
	    }else{
	    	elements.bal_egr_drenaje4_cant.visible=true
			elements.lbl_5.visible=true
			elements.bal_egr_drenaje4_cant.requestFocus()
			return true
	    }
	}
}

/**
 * Handle focus lost event of the element.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"7DF25A56-AC33-4B8A-8D51-97C0BDE49BD0"}
 */
function onFocusLost_drenaje4_tipo(event) {
	if(globals.errorDato==false){
		forms.frm_balance_egresos.elements.bal_egr_drenaje4_tipo.requestFocus()
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
 * @properties={typeid:24,uuid:"A33DABE9-2E50-42AC-A815-C6CAC7B73770"}
 */
function onDataChange_sonda_tipo(oldValue, newValue, event) {
	globals.valida_campos_obligatorios_completos(globals.name_tabless)
	if(newValue==null){
		elements.bal_egr_sonda_tipo.requestFocus()
		return false
	}else{
	    if (newValue==0){
		var thePressedButton = plugins.dialogs.showQuestionDialog('Valor No', '¿Está seguro de ingresar No?', 'Si', 'No');
		    if(thePressedButton=='Si'){
			   thePressedButton = ''
		     	oldValue=newValue
		     	elements.bal_egr_sonda_cant.visible=false
				elements.lbl_6.visible=false
				globals.uti_bal_egr_sonda_tipo=0
				globals.uti_bal_egr_sonda_cant=0
				elements.bal_egr_otros.requestFocus()
		    	return true
		    }else{
			    thePressedButton = ''
			    oldValue=0
				newValue=1
				globals.uti_bal_egr_sonda_tipo=1
				elements.bal_egr_sonda_cant.visible=false
				elements.lbl_6.visible=false
				elements.bal_egr_sonda_tipo.requestFocus()
			    return false
		    }
	    }else{
	    	elements.bal_egr_sonda_cant.visible=true
			elements.lbl_6.visible=true
			elements.bal_egr_sonda_cant.requestFocus()
			return true
	    }
	}
}

/**
 * Handle focus lost event of the element.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"92318C8B-9F1E-4322-9E4A-C239170E5AFA"}
 */
function onFocusLost_sonda_tipo(event) {
	if(globals.errorDato==false){
		forms.frm_balance_egresos.elements.bal_egr_sonda_tipo.requestFocus()
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
 * @properties={typeid:24,uuid:"2C5C6DA5-78A4-40F6-AA86-E1061905EDD0"}
 */
function onDataChange_diuresis_cant(oldValue, newValue, event) {
	globals.valida_campos_obligatorios_completos(globals.name_tabless)
	globals.valida_rango_campo(0,5000,newValue, oldValue,event,"0")
	if(globals.errorDato){
		elements.bal_egr_drenaje1_tipo.requestFocus()
		return true
	}else{
		elements.bal_egr_diuresis_cant.requestFocus()
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
 * @properties={typeid:24,uuid:"17C24BF8-8ED4-4C25-99C1-C8CB7983FA97"}
 */
function onDataChange_drenaje1_cant(oldValue, newValue, event) {
	globals.valida_campos_obligatorios_completos(globals.name_tabless)
	globals.valida_rango_campo(0,5000,newValue, oldValue,event,"0")
	if(globals.errorDato){
		elements.bal_egr_drenaje2_tipo.enabled=true
		elements.bal_egr_drenaje2_cant.enabled=true
		elements.bal_egr_drenaje2_tipo.requestFocus()
		return true
	}else{
		elements.bal_egr_drenaje2_tipo.enabled=false
		elements.bal_egr_drenaje2_cant.enabled=false
		elements.bal_egr_drenaje1_cant.requestFocus()
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
 * @properties={typeid:24,uuid:"8B74AB62-1698-4FD2-AAD0-4B326DDAB32B"}
 */
function onDataChange_drenaje2_canr(oldValue, newValue, event) {
	globals.valida_campos_obligatorios_completos(globals.name_tabless)
	globals.valida_rango_campo(0,5000,newValue, oldValue,event,"0")
	if(globals.errorDato){
		elements.bal_egr_drenaje3_tipo.enabled=true
		elements.bal_egr_drenaje3_cant.enabled=true
		elements.bal_egr_drenaje3_tipo.requestFocus()
		return true
	}else{
		elements.bal_egr_drenaje3_tipo.enabled=false
		elements.bal_egr_drenaje3_cant.enabled=false
		elements.bal_egr_drenaje2_cant.requestFocus()
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
 * @properties={typeid:24,uuid:"73636B16-2CCB-4F50-96B6-5773CB2C195C"}
 */
function onDataChange_drenaje3_cant(oldValue, newValue, event) {
	globals.valida_campos_obligatorios_completos(globals.name_tabless)
	globals.valida_rango_campo(0,5000,newValue, oldValue,event,"0")
	if(globals.errorDato){
		elements.bal_egr_drenaje4_tipo.enabled=true
		elements.bal_egr_drenaje4_cant.enabled=true
		elements.bal_egr_drenaje4_tipo.requestFocus()
		return true
	}else{
		elements.bal_egr_drenaje4_tipo.enabled=false
		elements.bal_egr_drenaje4_cant.enabled=false
		elements.bal_egr_drenaje3_cant.requestFocus()
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
 * @properties={typeid:24,uuid:"A3507390-03F2-4FA4-B375-3BD48D51E8AB"}
 */
function onDataChange_drenaje4_cant(oldValue, newValue, event) {
	globals.valida_campos_obligatorios_completos(globals.name_tabless)
	globals.valida_rango_campo(0,5000,newValue, oldValue,event,"0")
	if(globals.errorDato){
		elements.bal_egr_sonda_tipo.requestFocus()
		return true
	}else{
		elements.bal_egr_drenaje4_cant.requestFocus()
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
 * @properties={typeid:24,uuid:"01BAC8F1-A5C9-4ECF-BBA5-81E19F870B49"}
 */
function onDataChange_sonda_cant(oldValue, newValue, event) {
	globals.valida_campos_obligatorios_completos(globals.name_tabless)
	globals.valida_rango_campo(0,5000,newValue, oldValue,event,"0")
	if(globals.errorDato){
		elements.bal_egr_tipo_emesis.requestFocus()
		return true
	}else{
		elements.bal_egr_sonda_cant.requestFocus()
		return false
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"6A929DB7-D166-484A-976F-2428639E608F"}
 */
function onAction_f1_diuresis(event) {
	globals.vMostrarCampo='bal_egr_diuresis_tipo'
	var win = application.createWindow("b",JSWindow.MODAL_DIALOG)
	win.title = "Cronología de Diuresis";
	win.setSize(700,380)
	win.show(forms.tab_cronologia_items)
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
 * @properties={typeid:24,uuid:"B90060AD-32EA-4C50-BEE8-B9361FE334BF"}
 */
function onDataChange_tipo_emesis(oldValue, newValue, event) {
	globals.valida_campos_obligatorios_completos(globals.name_tabless)
	if(newValue==null){
		elements.bal_egr_tipo_emesis.requestFocus()
		return false
	}else{
	    if (newValue==0){
		var thePressedButton = plugins.dialogs.showQuestionDialog('Valor No', '¿Está seguro de ingresar No?', 'Si', 'No');
		    if(thePressedButton=='Si'){
			   thePressedButton = ''
		     	oldValue=newValue
		     	elements.bal_egr_cant_emesis.visible=false
				elements.lbl_7.visible=false
				globals.uti_bal_egr_tipo_emesis=0
				globals.uti_bal_egr_cant_emesis=0
				elements.bal_egr_cant_dialisis.requestFocus()
		    	return true
		    }else{
			    thePressedButton = ''
			    oldValue=0
				newValue=1
				globals.uti_bal_egr_tipo_emesis=1
				elements.bal_egr_cant_emesis.visible=false
				elements.lbl_7.visible=false
				elements.bal_egr_tipo_emesis.requestFocus()
			    return false
		    }
	    }else{
	    	elements.bal_egr_cant_emesis.visible=true
			elements.lbl_7.visible=true
			elements.bal_egr_cant_emesis.requestFocus()
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
 * @properties={typeid:24,uuid:"67F2E178-46DB-443A-A613-8657CB46CAA6"}
 */
function onDataChange_cant_dialisis(oldValue, newValue, event) {
	globals.valida_campos_obligatorios_completos(globals.name_tabless)
	globals.valida_rango_campo(0,10000,newValue, oldValue,event,"0")
	if(globals.errorDato){
		elements.bal_egr_otros.requestFocus()
		return true
	}else{
		elements.bal_egr_cant_dialisis.requestFocus()
		return false
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
 * @properties={typeid:24,uuid:"B0021F33-1102-4180-8969-01E4A216FB4D"}
 */
function onDataChange_cant_emesis(oldValue, newValue, event) {
	globals.valida_campos_obligatorios_completos(globals.name_tabless)
	return true
}
