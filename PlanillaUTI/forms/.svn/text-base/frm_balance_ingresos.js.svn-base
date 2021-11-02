
/**
 * Handle changed data.
 *
 * @param oldValue old value
 * @param newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"FF4D7F73-ED46-4EE4-9D68-76075B767235"}
 */
function onDataChange_otros_ingresos(oldValue, newValue, event) {
	if(newValue==0){
		elements.tabless_72.visible=false
		if(otros_ingresos_to_hojauti_items.getSize()>0){
		    var borrado_otros_ingresos=otros_ingresos_to_hojauti_items.deleteAllRecords()
	        if (!borrado_otros_ingresos){
			    plugins.dialogs.showInfoDialog("Error","No borro Otros Ingresos","ok")
		    }
		}    
		}else{
			elements.tabless_72.visible=true
			elements.tabless_72.tabIndex=1
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
 * @properties={typeid:24,uuid:"469CFD34-A12C-4414-A987-4B8A3EA731CD"}
 */
function onShow_balance_ingreso(firstShow, event) {
	if(globals.uti_bal_ing_otros!=1){
		elements.tabless_72.visible=false
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
 * @properties={typeid:24,uuid:"5EE676D8-4FB4-4F98-B168-24E4516DAA8C"}
 */
function onDataChange_tipo_hidrata(oldValue, newValue, event) {
	globals.valida_campos_obligatorios_completos(globals.name_tabless)
	if(newValue==null){
		elements.bal_ing_hidrata_tipo.requestFocus()
		return false
	}else{
	    if (newValue==0){
		var thePressedButton = plugins.dialogs.showQuestionDialog('Valor No', '¿Está seguro de ingresar No?', 'Si', 'No');
		    if(thePressedButton=='Si'){
			   thePressedButton = ''
		     	oldValue=newValue
		     	elements.bal_ing_hidrata_cant.visible=false
				elements.lbl_1.visible=false
				elements.lbl_5.visible=false
				elements.bal_ing_dilucion.visible=false
		    	elements.bal_ing_expansion_tipo.requestFocus()
		    	return true
		    }else{
			    thePressedButton = ''
			    oldValue=0
				newValue=1
				globals.uti_bal_ing_hidrata_tipo=1
				elements.bal_ing_hidrata_cant.visible=true
				elements.lbl_1.visible=true
				elements.lbl_5.visible=true
				elements.bal_ing_dilucion.visible=true
				elements.bal_ing_hidrata_tipo.requestFocus()
			    return false
		    }
	    }else{
	    	elements.bal_ing_hidrata_cant.visible=true
			elements.lbl_1.visible=true
			elements.lbl_5.visible=true
			elements.bal_ing_dilucion.visible=true
			elements.bal_ing_hidrata_cant.requestFocus()
			return true
	    }
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"8CE341E2-2090-4A45-B4F2-1A0612387E8C"}
 */
function onAction_hidrata_tipo(event) {
	
}

/**
 * Handle focus gained event of the element.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"A32EFE59-C70A-4F86-879B-CE7A6E5FB0B8"}
 */
function onFocusGained_hidrata_tipo(event) {
	
}

/**
 * Handle focus lost event of the element.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"86758DD2-17D7-4FDD-A001-933D02D9212D"}
 */
function onFocusLost_hidrata_tipo(event) {
	if(globals.errorDato==false){
		forms.frm_balance_ingresos.elements.bal_ing_hidrata_tipo.requestFocus()
	}
}

/**
 * Called before the form component is rendered.
 *
 * @param {JSRenderEvent} event the render event
 *
 * @properties={typeid:24,uuid:"C0BFB31F-1912-456C-BB98-15CE0BD89832"}
 */
function onRender_hidrata_tipo(event) {
	
}

/**
 * Handle focus lost event of the element.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"7D06C55A-9705-42AF-A523-E84AF293724F"}
 */
function onFocusLost_expansion_tipo(event) {
	if(globals.errorDato==false){
		forms.frm_balance_ingresos.elements.bal_ing_expansion_tipo.requestFocus()
	}
}

/**
 * Handle focus lost event of the element.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"395C048B-BB7B-4755-8C5E-FB7C25E5CA5A"}
 */
function onFocusLost_sangre_tipo(event) {
	if(globals.errorDato==false){
		forms.frm_balance_ingresos.elements.bal_ing_sangre_tipo.requestFocus()
	}
}

/**
 * Handle focus lost event of the element.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"27773BC0-08EA-4936-A163-B501A37608D5"}
 */
function onFocusLost_aliment_tipo(event) {
	if(globals.errorDato==false){
		forms.frm_balance_ingresos.elements.bal_ing_alimen_tipo.requestFocus()
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
 * @properties={typeid:24,uuid:"3F147ACB-EE08-4F17-B0B1-FFE0FC384520"}
 */
function onDataChange_hidrata_cant(oldValue, newValue, event) {
	globals.valida_campos_obligatorios_completos(globals.name_tabless)
	globals.valida_rango_campo(0,10000,newValue, oldValue,event,"0")
	if(globals.errorDato){
		elements.bal_ing_dilucion.requestFocus()
		return true
	}else{
		elements.bal_ing_hidrata_cant.requestFocus()
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
 * @properties={typeid:24,uuid:"2AB28E60-7C65-41E4-800E-AA58CB866954"}
 */
function onDataChange_expansion_cant(oldValue, newValue, event) {
	globals.valida_campos_obligatorios_completos(globals.name_tabless)
	globals.valida_rango_campo(100,10000,newValue, oldValue,event,"0")
	if(globals.errorDato){
		elements.bal_ing_sangre_tipo.requestFocus()
		return true
	}else{
		elements.bal_ing_expansion_cant.requestFocus()
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
 * @properties={typeid:24,uuid:"43B5C373-FE98-4B72-9A72-3CA56289071E"}
 */
function onDataChange_sangre_cant(oldValue, newValue, event) {
	globals.valida_campos_obligatorios_completos(globals.name_tabless)
	globals.valida_rango_campo(50,3000,newValue, oldValue,event,"0")
	if(globals.errorDato){
		elements.bal_ing_alimen_tipo.requestFocus()
		return true
	}else{
		elements.bal_ing_sangre_cant.requestFocus()
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
 * @properties={typeid:24,uuid:"C0D8DE45-8C1A-42AC-8F88-A90F6049F815"}
 */
function onDataChange_alimen_cant(oldValue, newValue, event) {
	globals.valida_campos_obligatorios_completos(globals.name_tabless)
	globals.valida_rango_campo(0,2000,newValue, oldValue,event,"0")
	if(globals.errorDato){
		elements.bal_ing_otros.requestFocus()
		return true
	}else{
		elements.bal_ing_alimen_cant.requestFocus()
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
 * @properties={typeid:24,uuid:"64195186-DA96-41FD-812A-8F27EE26F443"}
 */
function onDataChange_dilucion(oldValue, newValue, event) {
	globals.valida_campos_obligatorios_completos(globals.name_tabless)
	globals.valida_rango_campo(50,300,newValue, oldValue,event,"0")
	if(globals.errorDato){
		elements.bal_ing_expansion_tipo.requestFocus()
		return true
	}else{
		elements.bal_ing_dilucion.requestFocus()
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
 * @properties={typeid:24,uuid:"E654AB73-6C4B-45F0-BCAF-F8B21FB90E05"}
 */
function onDataChange_expansion_tipo(oldValue, newValue, event) {
	globals.valida_campos_obligatorios_completos(globals.name_tabless)
	if(newValue==null){
		elements.bal_ing_expansion_tipo.requestFocus()
		return false
	}else{
	    if (newValue==0){
		var thePressedButton = plugins.dialogs.showQuestionDialog('Valor No', '¿Está seguro de ingresar No?', 'Si', 'No');
		    if(thePressedButton=='Si'){
			   thePressedButton = ''
		     	oldValue=newValue
		     	elements.bal_ing_expansion_cant.visible=false
				elements.lbl_2.visible=false
				elements.bal_ing_sangre_tipo.requestFocus()
		    	return true
		    }else{
			    thePressedButton = ''
			    oldValue=0
				newValue=1
				globals.uti_bal_ing_expansion_tipo=1
				elements.bal_ing_expansion_cant.visible=true
				elements.lbl_2.visible=true
				elements.bal_ing_expansion_tipo.requestFocus()
			    return false
		    }
	    }else{
	    	elements.bal_ing_expansion_cant.visible=true
			elements.lbl_2.visible=true
			elements.bal_ing_expansion_cant.requestFocus()
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
 * @properties={typeid:24,uuid:"8E2EC588-2935-44F3-BAC6-F9DAAA0C07A3"}
 */
function onDataChange_sangre_tipo(oldValue, newValue, event) {
	globals.valida_campos_obligatorios_completos(globals.name_tabless)
	if(newValue==null){
		elements.bal_ing_sangre_tipo.requestFocus()
		return false
	}else{
	    if (newValue==0){
		var thePressedButton = plugins.dialogs.showQuestionDialog('Valor No', '¿Está seguro de ingresar No?', 'Si', 'No');
		    if(thePressedButton=='Si'){
			   thePressedButton = ''
		     	oldValue=newValue
		     	elements.bal_ing_sangre_cant.visible=false
				elements.lbl_3.visible=false
				elements.bal_ing_alimen_tipo.requestFocus()
		    	return true
		    }else{
			    thePressedButton = ''
			    oldValue=0
				newValue=1
				globals.uti_bal_ing_sangre_tipo=1
				elements.bal_ing_sangre_cant.visible=true
				elements.lbl_3.visible=true
				elements.bal_ing_sangre_tipo.requestFocus()
			    return false
		    }
	    }else{
	    	elements.bal_ing_sangre_cant.visible=true
			elements.lbl_3.visible=true
			elements.bal_ing_sangre_cant.requestFocus()
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
 * @properties={typeid:24,uuid:"26882B31-F9AD-40C9-8AF7-D54D882AD5BB"}
 */
function onDataChange_alimen_tipo(oldValue, newValue, event) {
	globals.valida_campos_obligatorios_completos(globals.name_tabless)
	if(newValue==null){
		elements.bal_ing_alimen_tipo.requestFocus()
		return false
	}else{
	    if (newValue==0){
		var thePressedButton = plugins.dialogs.showQuestionDialog('Valor No', '¿Está seguro de ingresar No?', 'Si', 'No');
		    if(thePressedButton=='Si'){
			   thePressedButton = ''
		     	oldValue=newValue
		     	elements.bal_ing_alimen_cant.visible=false
				elements.lbl_4.visible=false
				elements.bal_ing_otros.requestFocus()
		    	return true
		    }else{
			    thePressedButton = ''
			    oldValue=0
				newValue=1
				globals.uti_bal_ing_alimen_tipo=1
				elements.bal_ing_alimen_cant.visible=true
				elements.lbl_4.visible=true
				elements.bal_ing_alimen_tipo.requestFocus()
			    return false
		    }
	    }else{
	    	elements.bal_ing_alimen_cant.visible=true
			elements.lbl_4.visible=true
			elements.bal_ing_alimen_cant.requestFocus()
			return true
	    }
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"6D78AC5F-44A0-4B1F-8AE4-B54C16263864"}
 */
function onAction_f1_hidrata(event) {
	globals.vMostrarCampo='bal_ing_hidrata_tipo'
	var win = application.createWindow("b",JSWindow.MODAL_DIALOG)
	win.title = "Cronología de Hidratación";
	win.setSize(700,380)
	win.show(forms.tab_cronologia_items)
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"935FAB80-64A2-457A-87A7-DF3E9A0B4242"}
 */
function onAction_f1_expansion(event) {
	globals.vMostrarCampo='bal_ing_expansion_tipo'
	var win = application.createWindow("b",JSWindow.MODAL_DIALOG)
	win.title = "Cronología de Expansión";
	win.setSize(700,380)
	win.show(forms.tab_cronologia_items)
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"5828D1E9-8A85-4669-9BB1-3035F69FF849"}
 */
function onAction_f1_sangre(event) {
	globals.vMostrarCampo='bal_ing_sangre_tipo'
	var win = application.createWindow("b",JSWindow.MODAL_DIALOG)
	win.title = "Cronología de Sangre y Derivados";
	win.setSize(700,380)
	win.show(forms.tab_cronologia_items)
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"57A50B72-EC07-4EB0-84C1-8ACF0C0DF1E3"}
 */
function onAction_f1_alimen(event) {
	globals.vMostrarCampo='bal_ing_alimen_tipo'
	var win = application.createWindow("b",JSWindow.MODAL_DIALOG)
	win.title = "Cronología de Alimentación";
	win.setSize(700,380)
	win.show(forms.tab_cronologia_items)
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
 * @properties={typeid:24,uuid:"775BA7E3-49FF-467C-84B6-F7AFF3D18E64"}
 */
function onDataChange_bic_1(oldValue, newValue, event) {
	globals.valida_campos_obligatorios_completos(globals.name_tabless)
	if(newValue==null){
		elements.bal_ing_bic_1_tipo.requestFocus()
		return false
	}else{
	    elements.bal_ing_bic_1_cant.requestFocus()
	    return true
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
 * @properties={typeid:24,uuid:"A38489A5-48F0-4895-BC74-8F8BE7AF540D"}
 */
function onDataChange_bic_1_cant(oldValue, newValue, event) {
	globals.valida_campos_obligatorios_completos(globals.name_tabless)
	elements.bal_ing_bic_2_tipo.requestFocus()
	return true
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
 * @properties={typeid:24,uuid:"75319358-A321-4BA4-AAD2-7B97F0977E8D"}
 */
function onDataChange_bic_2(oldValue, newValue, event) {
	if(newValue==null){
		elements.bal_ing_bic_2_tipo.requestFocus()
		return false
	}else{
	    elements.bal_ing_bic_2_cant.requestFocus()
	    return true
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
 * @properties={typeid:24,uuid:"F6F49473-B244-4F5B-9A85-50FA004491F7"}
 */
function onDataChange_bic_2_cant(oldValue, newValue, event) {
	globals.valida_campos_obligatorios_completos(globals.name_tabless)
	elements.bal_ing_bic_3_tipo.requestFocus()
	return true
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
 * @properties={typeid:24,uuid:"16F4F728-97A4-42F9-9E61-600EFB57C73F"}
 */
function onDataChange_bic_3(oldValue, newValue, event) {
	if(newValue==null){
		elements.bal_ing_bic_3_tipo.requestFocus()
		return false
	}else{
	    elements.bal_ing_bic_3_cant.requestFocus()
	    return true
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
 * @properties={typeid:24,uuid:"357EBA95-2B56-4515-810C-B21EBE8F0DDA"}
 */
function onDataChange_bic_3_cant(oldValue, newValue, event) {
	globals.valida_campos_obligatorios_completos(globals.name_tabless)
	elements.bal_ing_bic_4_tipo.requestFocus()
	return true
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
 * @properties={typeid:24,uuid:"CE38391F-10EB-4277-9C94-19AB942D6ED1"}
 */
function onDataChange_bic_4(oldValue, newValue, event) {
	if(newValue==null){
		elements.bal_ing_bic_4_tipo.requestFocus()
		return false
	}else{
	    elements.bal_ing_bic_4_cant.requestFocus()
	    return true
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
 * @properties={typeid:24,uuid:"4CA42E24-F3CA-424A-9452-DF7A05EE8E8C"}
 */
function onDataChange_bic_4_cant(oldValue, newValue, event) {
	globals.valida_campos_obligatorios_completos(globals.name_tabless)
	elements.bal_ing_bic_5_tipo.requestFocus()
	return true
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
 * @properties={typeid:24,uuid:"340151BD-1344-42F0-8629-6D840E1C30F9"}
 */
function onDataChange_bic_5(oldValue, newValue, event) {
	if(newValue==null){
		elements.bal_ing_bic_5_tipo.requestFocus()
		return false
	}else{
	    elements.bal_ing_bic_5_cant.requestFocus()
	    return true
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
 * @properties={typeid:24,uuid:"0E953F26-5148-42F4-80B4-2ADE3DD979BA"}
 */
function onDataChange_bic_5_cant(oldValue, newValue, event) {
	globals.valida_campos_obligatorios_completos(globals.name_tabless)
	return true
}
