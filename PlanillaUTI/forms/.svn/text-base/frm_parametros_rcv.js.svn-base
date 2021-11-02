/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"BCA09753-9D58-4EF6-9330-7CE65F2CAD58"}
 */
function onAction_gasglow(event) {
	globals.uti_param_glasgow=globals.uti_param_glasgow_motora+globals.uti_param_glasgow_ojos+globals.uti_param_glasgow_verbal
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
 * @properties={typeid:24,uuid:"5286125A-9943-4D68-A0E1-80AA95289E6A"}
 */
function onDataChange_gasglow(oldValue, newValue, event) {
	globals.uti_param_glasgow=globals.uti_param_glasgow_motora+globals.uti_param_glasgow_ojos+globals.uti_param_glasgow_verbal
	elements.param_glasgow_verbal.requestFocus()
	return true
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"C1CA2D0A-B194-4AC0-8ADA-F6AD65787BE4"}
 */
function onShow_parametros(firstShow, event) {
	if(globals.vNuevaHoja){
		elements.param_modo_arm_vni.visible=false
		elements.param_fio2.visible=false
		elements.param_peep.visible=false
		elements.param_fr_arm_vni.visible=false
		elements.param_vt.visible=false
		elements.factor_correc_hgt.visible=false
		elements.factor_hgt_cant.visible=false
		elements.lbl_factor_hgt.visible=false
		elements.lbl_cant_hgt.visible=false
	}else{
		elements.param_modo_arm_vni.visible=true
		elements.param_fio2.visible=true
		elements.param_peep.visible=true
		elements.param_fr_arm_vni.visible=true
		elements.param_vt.visible=true
		elements.arm.visible=true
		elements.vni.visible=true
		elements.param_vni_otros.visible=true
		if(vs_to_hojauti.param_arm==1||vs_to_hojauti.param_arm==2){
			globals.vArm="A.R.M."
		}else{
			if(vs_to_hojauti.param_vni==null||vs_to_hojauti.param_vni==0){
				globals.vArm="Ninguno"
			}else{
				globals.vArm="V.N.I."
			}
		}
		if(vs_to_hojauti.param_factor_hgt!=''&&vs_to_hojauti.param_factor_hgt!=null&&vs_to_hojauti.param_cant_hgt!=0&&vs_to_hojauti.param_cant_hgt!=null){
			elements.factor_correc_hgt.visible=true
			elements.factor_hgt_cant.visible=true
			elements.lbl_factor_hgt.visible=true
			elements.lbl_cant_hgt.visible=true
		}else{
			elements.factor_correc_hgt.visible=false
			elements.factor_hgt_cant.visible=false
			elements.lbl_factor_hgt.visible=false
			elements.lbl_cant_hgt.visible=false
		}
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"DFD5C4C6-D95F-4F37-9C18-EB1B905E3D31"}
 */
function onAction_ppc(event) {
	globals.uti_param_ppc=globals.uti_param_tam-globals.uti_param_pic
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"6611F408-ECEE-44FF-9720-7EAE5A57DECC"}
 */
function onAction_ta_max(event) {
	globals.valida_campos_obligatorios_completos(globals.name_tabless)
	globals.valida_rango_campo(0,300,globals.uti_param_ta_max,0,event,"0")
	if(!globals.errorDato){
		!event
		forms.frm_parametros.elements.param_ta_max.requestFocus()
		globals.errorDato=true
	}
	if(globals.uti_param_ta_max<globals.uti_param_ta_min){
		plugins.dialogs.showInfoDialog("Error en Tensión Arterial","La tensión arterial mínima no puede ser mayor a la máxima","Ok")
		forms.frm_parametros.elements.param_ta_max.requestFocus()
		globals.errorDato=true
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
 * @properties={typeid:24,uuid:"0DAFA591-FA81-4928-89A8-BFDA44F2A15B"}
 */
function onDataChange_ta_max(oldValue, newValue, event) {
	globals.valida_campos_obligatorios_completos(globals.name_tabless)
	globals.valida_rango_campo(0,300,newValue, oldValue, event,"0")
	if(!globals.errorDato){
		!event
		return false
	}else{
		if(globals.uti_param_ta_max<globals.uti_param_ta_min){
			plugins.dialogs.showInfoDialog("Error en Tensión Arterial","La tensión arterial mínima no puede ser mayor a la máxima","Ok")
			return false
		}else{
			globals.uti_param_tam=((globals.uti_param_ta_max-globals.uti_param_ta_min)/3)+globals.uti_param_ta_min
			elements.param_ta_min.requestFocus()
			return true
		}
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"4C1D2478-2709-4ACD-A567-32CB9991A11D"}
 */
function onAction_ta_min(event) {
	globals.valida_rango_campo(0,300,globals.uti_param_ta_min,0,event,"0")
	if(!globals.errorDato){
		!event
		globals.errorDato=true
		forms.frm_parametros.elements.param_ta_min.requestFocus()
	}
	if(globals.uti_param_ta_max<globals.uti_param_ta_min){
		plugins.dialogs.showInfoDialog("Error en Tensión Arterial","La tensión arterial mínima no puede ser mayor a la máxima","Ok")
		forms.frm_parametros.elements.param_ta_min.requestFocus()
		globals.errorDato=true
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
 * @properties={typeid:24,uuid:"64792A51-F1DB-418D-9950-2A98E801A88B"}
 */
function onDataChange_ta_min(oldValue, newValue, event) {
	globals.valida_campos_obligatorios_completos(globals.name_tabless)
	globals.valida_rango_campo(0,300,newValue, oldValue,event,"0")
	if(!globals.errorDato){
		return false
	}else{
		if(globals.uti_param_ta_max<globals.uti_param_ta_min){
			plugins.dialogs.showInfoDialog("Error en Tensión Arterial","La tensión arterial mínima no puede ser mayor a la máxima","Ok")
			return false
		}else{
			globals.uti_param_tam=((globals.uti_param_ta_max-globals.uti_param_ta_min)/3)+globals.uti_param_ta_min
			
			elements.param_fc.requestFocus()
			return true
		}
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"16CCD4BE-B62E-485C-8600-7E97F7143BA7"}
 */
function onAction_fc(event) {
	globals.valida_rango_campo(0,300,globals.uti_param_fc,0,event,"0")
	if(!globals.errorDato){
		!event
		globals.errorDato=true
		forms.frm_parametros.elements.param_fc.requestFocus()
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
 * @properties={typeid:24,uuid:"661E22E0-45F8-461B-9328-4A2442E8CA63"}
 */
function onDataChange_fc(oldValue, newValue, event) {
	globals.valida_campos_obligatorios_completos(globals.name_tabless)
	globals.valida_rango_campo(0,300,newValue, oldValue,event,"0")
	if(!globals.errorDato){
		return false
	}else{
		elements.param_fr.requestFocus()
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
 * @properties={typeid:24,uuid:"FF155F14-B1CA-47B3-A4ED-A9ABB9751E99"}
 */
function onDataChange_fr(oldValue, newValue, event) {
	globals.valida_campos_obligatorios_completos(globals.name_tabless)
	globals.valida_rango_campo(0,50,newValue, oldValue,event,"0")
	if(!globals.errorDato){
		return false
	}else{
		elements.param_temper.requestFocus()
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
 * @properties={typeid:24,uuid:"9E3EE180-2240-46FD-A54A-C1F337323B76"}
 */
function onDataChange_temper(oldValue, newValue, event) {
	globals.valida_campos_obligatorios_completos(globals.name_tabless)
	globals.valida_rango_campo(0,45,newValue, oldValue,event,"0")
	if(!globals.errorDato){
		return false
	}else{
		elements.param_glasgow_ojos.requestFocus()
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
 * @properties={typeid:24,uuid:"98FDEAAF-81B8-4B98-A022-A5F3D34100D6"}
 */
function onDataChange_hgt(oldValue, newValue, event) {
	globals.valida_campos_obligatorios_completos(globals.name_tabless)
	globals.valida_rango_campo(70,150,newValue, oldValue,event,"0")
	if(!globals.errorDato){
		elements.lbl_factor_hgt.visible=true
		elements.lbl_cant_hgt.visible=true
		elements.factor_correc_hgt.visible=true
		elements.factor_hgt_cant.visible=true
		elements.factor_correc_hgt.requestFocus()
		return true
	}else{
		elements.lbl_factor_hgt.visible=false
		elements.lbl_cant_hgt.visible=false
		elements.factor_correc_hgt.visible=false
		elements.factor_hgt_cant.visible=false
		globals.uti_param_factor_hgt=null
		globals.uti_param_cant_hgt=null
		elements.val_oxigeno.requestFocus()
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
 * @properties={typeid:24,uuid:"9EC54635-101D-4F9A-B00F-EAD247D72E64"}
 */
function onDataChange_sat(oldValue, newValue, event) {
	globals.valida_campos_obligatorios_completos(globals.name_tabless)
	globals.valida_rango_campo(0,100,newValue, oldValue,event,"0")
	if(!globals.errorDato){
		return false
	}else{
		elements.param_tam.requestFocus()
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
 * @properties={typeid:24,uuid:"6676B8B7-D732-42DC-A2B0-45F6C01C4E15"}
 */
function onDataChange_tam(oldValue, newValue, event) {
	globals.valida_rango_campo(0,150,newValue, oldValue,event,"0")
	if(!globals.errorDato){
		return false
	}else{
		globals.uti_param_ppc=globals.uti_param_tam-globals.uti_param_pic
		elements.param_pic.requestFocus()
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
 * @properties={typeid:24,uuid:"C940195F-E886-4A35-ABE1-B99733AC894D"}
 */
function onDataChange_pic(oldValue, newValue, event) {
	globals.valida_campos_obligatorios_completos(globals.name_tabless)
	globals.valida_rango_campo(0,50,newValue, oldValue,event,"0")
	if(!globals.errorDato){
		return false
	}else{
		globals.uti_param_ppc=globals.uti_param_tam-globals.uti_param_pic
		elements.param_pvc.requestFocus()
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
 * @properties={typeid:24,uuid:"7A0AF1DD-16A3-4030-AB19-83EA401B8197"}
 */
function onDataChange_pvc(oldValue, newValue, event) {
	globals.valida_campos_obligatorios_completos(globals.name_tabless)
	globals.valida_rango_campo(0,50,newValue, oldValue,event,"0")
	if(!globals.errorDato){
		return false
	}else{
		elements.param_co2.requestFocus()
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
 * @properties={typeid:24,uuid:"09AB6B6F-D67B-4F0A-BD98-64FC1F9973B2"}
 */
function onDataChange_co2(oldValue, newValue, event) {
	globals.valida_campos_obligatorios_completos(globals.name_tabless)
	globals.valida_rango_campo(0,100,newValue, oldValue,event,"0")
	if(!globals.errorDato){
		return false
	}else{
		forms[globals.name_tabless].elements['tabs_154'].tabIndex=2
		forms.frm_valoracion.elements.val_dolor.requestFocus()
		return true	
	}	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"C89F0D9E-58D1-4A01-A5BE-21095E56B5EB"}
 */
function onAction_vni(event) {
	if (globals.uti_param_vni==3){
		elements.param_vni_otros.visible=true
		elements.param_vni_otros.enabled=true
		elements.param_vni_otros.requestFocus()
	}else{
		elements.param_vni_otros.visible=false
		elements.param_vni_otros.enabled=false
		globals.uti_param_vni_otros=''
		elements.param_modo_arm_vni.requestFocus()
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
 * @properties={typeid:24,uuid:"002D47D1-F39E-484D-96F0-B0D9477EA2CE"}
 */
function onDataChange_vni(oldValue, newValue, event) {
	if (globals.uti_param_vni==3){
		elements.param_vni_otros.visible=true
		elements.param_vni_otros.enabled=true
		elements.param_vni_otros.requestFocus()
	}else{
		elements.param_vni_otros.visible=false
		elements.param_vni_otros.enabled=false
		globals.uti_param_vni_otros=''
		elements.param_modo_arm_vni.requestFocus()
	}
	return true
}

/**
 * Perform the element right-click action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"D986C09B-5A02-47B4-8A6E-9F55980C777F"}
 */
function onRightClick_ta_max(event) {
	globals.vMostrarCampo='param_ta_max'
	var win = application.createWindow("b",JSWindow.MODAL_DIALOG)
	win.title = "Cronología de Tensión Arterial";
	win.setSize(700,400)
	win.show(forms.tab_cronologia_items)

}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"81D6339D-E8C3-4D09-95D0-7436FAD6C05A"}
 */
function onAction_f1_ta_max(event) {
	globals.vMostrarCampo='param_ta_max'
	var win = application.createWindow("b",JSWindow.MODAL_DIALOG)
	win.title = "Cronología de Tensión Arterial";
	win.setSize(700,380)
	win.show(forms.tab_cronologia_items)
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"AD619F6B-28A4-43F1-ACC8-88E502750EC8"}
 */
function onAction_f1_fc(event) {
	globals.vMostrarCampo='param_fc'
	var win = application.createWindow("b",JSWindow.MODAL_DIALOG)
	win.title = "Cronología de Frecuencia Cardíaca";
	win.setSize(700,380)
	win.show(forms.tab_cronologia_items)
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"B334DA82-C0A0-4720-8552-ADCD8BA3661D"}
 */
function onAction_f1_fr(event) {
	globals.vMostrarCampo='param_fr'
	var win = application.createWindow("b",JSWindow.MODAL_DIALOG)
	win.title = "Cronología de Frecuencia Respiratoria";
	win.setSize(700,380)
	win.show(forms.tab_cronologia_items)
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"8C5CD781-39B6-4800-9A90-AD3E1737ABEA"}
 */
function onAction_f1_temper(event) {
	globals.vMostrarCampo='param_temper'
	var win = application.createWindow("b",JSWindow.MODAL_DIALOG)
	win.title = "Cronología de la Temperatura";
	win.setSize(700,380)
	win.show(forms.tab_cronologia_items)
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"ECE94DE7-D145-441B-B968-89AA1B2D1B6D"}
 */
function onAction_f1_hgt(event) {
	globals.vMostrarCampo='param_hgt'
	var win = application.createWindow("b",JSWindow.MODAL_DIALOG)
	win.title = "Cronología del Hemoglucotest";
	win.setSize(700,380)
	win.show(forms.tab_cronologia_items)
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"0C436F9D-FA0D-4D21-843C-A2A00161151F"}
 */
function onAction_f1_glasgow(event) {
	globals.vMostrarCampo='param_glasgow'
	var win = application.createWindow("b",JSWindow.MODAL_DIALOG)
	win.title = "Cronología del Glasgow";
	win.setSize(700,380)
	win.show(forms.tab_cronologia_items)
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"FD00C505-07E6-4407-9278-F7713F82ED60"}
 */
function onAction_f1_sat(event) {
	globals.vMostrarCampo='param_sat'
	var win = application.createWindow("b",JSWindow.MODAL_DIALOG)
	win.title = "Cronología del SAT";
	win.setSize(700,380)
	win.show(forms.tab_cronologia_items)
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"E242632F-BEF6-4139-AD03-2ED2CE4BD61D"}
 */
function onAction_f1_ppc(event) {
	globals.vMostrarCampo='param_ppc'
	var win = application.createWindow("b",JSWindow.MODAL_DIALOG)
	win.title = "Cronología del PPC, TAM y PIC";
	win.setSize(700,380)
	win.show(forms.tab_cronologia_items)
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"64A3B7AA-0E3D-42CB-9640-1FEADAAAC23C"}
 */
function onAction_arm_vni(event) {
	if (globals.vArm=="A.R.M."){
		elements.vni.visible=false
		elements.param_vni_otros.visible=false
		elements.arm.visible=true
		globals.uti_param_vni=0
		globals.uti_param_vni_otros=''
		elements.param_modo_arm_vni.visible=true
		elements.param_fio2.visible=true
		elements.param_peep.visible=true
		elements.param_fr_arm_vni.visible=true
		elements.param_vt.visible=true	
		elements.arm.requestFocus()
	}else{
		if(globals.vArm=="V.N.I."){
			elements.arm.visible=false
			elements.vni.visible=true
			elements.param_vni_otros.visible=true
			elements.param_modo_arm_vni.visible=true
			elements.param_fio2.visible=true
			elements.param_peep.visible=true
			elements.param_fr_arm_vni.visible=true
			elements.param_vt.visible=true
			globals.uti_param_arm=0
			elements.vni.requestFocus()
		}else{
			if(globals.vArm=="Ninguno"){
				elements.arm.visible=false
				elements.vni.visible=false
				elements.param_vni_otros.visible=false
				elements.param_modo_arm_vni.visible=false
				elements.param_fio2.visible=false
				elements.param_peep.visible=false
				elements.param_fr_arm_vni.visible=false
				elements.param_vt.visible=false
				globals.uti_param_arm=null	
				globals.uti_param_vni=null
				globals.uti_param_vni_otros=null
				elements.param_sat.requestFocus()
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
 * @properties={typeid:24,uuid:"D7523EE0-D077-4B0C-85A7-F8C02193C7BC"}
 */
function onDataChange_arm_vni(oldValue, newValue, event) {
	if (globals.vArm=="A.R.M."){
		elements.vni.visible=false
		elements.param_vni_otros.visible=false
		elements.arm.visible=true
		globals.uti_param_vni=0
		globals.uti_param_vni_otros=''
		elements.arm.requestFocus()
	}else{
		if(globals.vArm=="V.N.I."){
			elements.arm.visible=false
			elements.vni.visible=true
			elements.param_vni_otros.visible=true
			globals.uti_param_arm=0
			elements.vni.requestFocus()
		}
	}
	elements.param_modo_arm_vni.visible=true
	elements.param_fio2.visible=true
	elements.param_peep.visible=true
	elements.param_fr_arm_vni.visible=true
	elements.param_vt.visible=true
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
 * @properties={typeid:24,uuid:"F8BAAE38-C3EA-402E-8F8D-92604F2E0867"}
 */
function onDataChange_fio2(oldValue, newValue, event) {
	globals.valida_campos_obligatorios_completos(globals.name_tabless)
	globals.valida_rango_campo(0,100,newValue, oldValue,event,"0")
	if(!globals.errorDato){
		return false
	}else{
		elements.param_peep.requestFocus()
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
 * @properties={typeid:24,uuid:"73C684C2-7258-4C97-AE6A-23FC3DE79AB6"}
 */
function onDataChange_peep(oldValue, newValue, event) {
	globals.valida_campos_obligatorios_completos(globals.name_tabless)
	globals.valida_rango_campo(0,30,newValue, oldValue,event,"0")
	if(!globals.errorDato){
		return false
	}else{
		elements.param_fr_arm_vni.requestFocus()
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
 * @properties={typeid:24,uuid:"38B39613-1018-4353-ABFF-6E1DA2A93D35"}
 */
function onDataChange_fr_arm_vni(oldValue, newValue, event) {
	globals.valida_campos_obligatorios_completos(globals.name_tabless)
	globals.valida_rango_campo(0,40,newValue, oldValue,event,"0")
	if(!globals.errorDato){
		return false
	}else{
		elements.param_vt.requestFocus()
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
 * @properties={typeid:24,uuid:"85BD65D0-2C10-4D04-8816-F9A103DBAD2E"}
 */
function onDataChange_vt(oldValue, newValue, event) {
	globals.valida_campos_obligatorios_completos(globals.name_tabless)
	globals.valida_rango_campo(0,800,newValue, oldValue,event,"0")
	if(!globals.errorDato){
		return false
	}else{
		elements.param_tubo_t.requestFocus()
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
 * @properties={typeid:24,uuid:"485943C5-FFDC-4776-A61D-DDEFF65583E1"}
 */
function onDataChange_glasgow_verbal(oldValue, newValue, event) {
	globals.uti_param_glasgow=globals.uti_param_glasgow_motora+globals.uti_param_glasgow_ojos+globals.uti_param_glasgow_verbal
	elements.param_glasgow_motora.requestFocus()
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
 * @properties={typeid:24,uuid:"C976FF61-9B1E-4E37-B823-65C9FD4A6816"}
 */
function onDataChange_glasgow_motora(oldValue, newValue, event) {
	globals.valida_campos_obligatorios_completos(globals.name_tabless)
	globals.uti_param_glasgow=globals.uti_param_glasgow_motora+globals.uti_param_glasgow_ojos+globals.uti_param_glasgow_verbal
	elements.param_hgt.requestFocus()
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
 * @properties={typeid:24,uuid:"84F354E2-1164-46E6-8ECF-630311A44BE5"}
 */
function onDataChange_modo_arm_vni(oldValue, newValue, event) {
	globals.valida_campos_obligatorios_completos(globals.name_tabless)
	elements.param_fio2.requestFocus()
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
 * @properties={typeid:24,uuid:"06D436FB-EA9D-44E3-9A6B-7EBD9BD946B8"}
 */
function onDataChange_tubo_t(oldValue, newValue, event) {
	globals.valida_campos_obligatorios_completos(globals.name_tabless)
	elements.param_sat.requestFocus()
	return true
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"43CE2C09-4EB0-4DEF-9B58-2C60AEB88246"}
 */
function onAction_arm(event) {
	elements.param_modo_arm_vni.requestFocus()
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
 * @properties={typeid:24,uuid:"B96C8625-D219-47C9-9819-AA39350F44CA"}
 */
function onDataChange_arm(oldValue, newValue, event) {
	elements.param_modo_arm_vni.requestFocus()
	return true
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"92925FB4-0C0E-4E25-B48A-91B9EA17C958"}
 */
function onAction_modalidad(event) {
	elements.param_fio2.requestFocus()
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
 * @properties={typeid:24,uuid:"74389C33-4E0B-4B99-914C-78165B8755D6"}
 */
function onDataChange_param_vni_otros(oldValue, newValue, event) {
	elements.param_modo_arm_vni.requestFocus()
	return true
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"089EA6F2-459E-4E9D-BEF4-9F5AF3B57F68"}
 */
function onAction_lbl_fr(event) {
	
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
 * @properties={typeid:24,uuid:"CFDDA2B4-3CC4-46CA-AA07-33636C720F0D"}
 */
function onDataChange_val_oxigeno(oldValue, newValue, event) {
	globals.valida_campos_obligatorios_completos(globals.name_tabless)
	if(newValue==null){
		elements.val_oxigeno.requestFocus()
		return false
	}else{
	    if (newValue==0){
		var thePressedButton = plugins.dialogs.showQuestionDialog('Valor No', '¿Está seguro de ingresar No?', 'Si', 'No');
		    if(thePressedButton=='Si'){
			   thePressedButton = ''
		     	oldValue=newValue
		     	elements.lbl_11.visible=false
				elements.val_oxigeno_cant.visible=false
				globals.uti_val_oxigeno_cant=0
				elements.arm_vni.requestFocus()
		    	return true
		    }else{
			    thePressedButton = ''
			    oldValue=0
				newValue=1
				globals.uti_val_oxigeno=1
				elements.lbl_11.visible=true
				elements.val_oxigeno_cant.visible=true
				elements.val_oxigeno.requestFocus()
			    return false
		    }
	    }else{
	    	elements.lbl_11.visible=true
			elements.val_oxigeno_cant.visible=true
			elements.val_oxigeno_cant.requestFocus()
			return true
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
 * @properties={typeid:24,uuid:"04E912B9-DBC7-4CD9-9EC0-14E4EFF2557F"}
 */
function onDataChange_val_oxigeno_cant(oldValue, newValue, event) {
	globals.valida_campos_obligatorios_completos(globals.name_tabless)
	elements.arm_vni.requestFocus()
	return true
}

/**
 * Handle changed data.
 *
 * @param {String} oldValue old value
 * @param {String} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"6795DDF7-CBBF-4883-8002-6DC42DB5CF2F"}
 */
function onDataChange_factor_hgt(oldValue, newValue, event) {
	if(newValue==''){
		return false
	}else{
		elements.factor_hgt_cant.requestFocus()
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
 * @properties={typeid:24,uuid:"8D8FE93F-58AA-4829-84D5-7CA362D5D9B4"}
 */
function onDataChange_factor_hgt_cant(oldValue, newValue, event) {
	globals.valida_campos_obligatorios_completos(globals.name_tabless)
	if(newValue==0){
		return false
	}else{
		elements.val_oxigeno.requestFocus()
		return true
	}	
}

/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"EBE83C9B-EEE5-4D6E-B48C-10F9C5ADC8DB"}
 */
function onLoad_frm_parametros(event) {
	elements.lbl_factor_hgt.visible=false
	elements.lbl_cant_hgt.visible=false
	elements.factor_correc_hgt.visible=false
	elements.factor_hgt_cant.visible=false
}

/**
 * Handle focus gained event of an element on the form. Return false when the focus gained event of the element itself shouldn't be triggered.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"C8C95D92-600D-4102-A7F7-27A935116923"}
 */
function onElementFocusGained_frm_parametros(event) {
	plugins.dialogs.showInfoDialog("gained","Gained")
	return true
}
