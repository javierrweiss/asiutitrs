
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"E147C511-4130-4D14-8A69-1D3CF427CE1D"}
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
 * @properties={typeid:24,uuid:"6DA6D9E0-085E-40B2-B63E-B53E53941630"}
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
 * @properties={typeid:24,uuid:"EC748E37-5DED-47DD-8647-55866D44D745"}
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
 * @properties={typeid:24,uuid:"52B1BDF4-F766-4D71-8CBF-F9A2CC1FB95B"}
 */
function onAction_ppc(event) {
	globals.uti_param_ppc=globals.uti_param_tam-globals.uti_param_pic
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"F767C194-AD0B-4E61-BDD2-FDFB6BA3676A"}
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
 * @properties={typeid:24,uuid:"63A17581-69C4-4C97-B0CE-4D1EDA81AA9A"}
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
 * @properties={typeid:24,uuid:"91599E2B-1CE9-458E-8052-3E152F64BCB2"}
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
 * @properties={typeid:24,uuid:"E29560D6-3910-48B5-A6DB-E23DDC32E201"}
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
 * @properties={typeid:24,uuid:"659691FA-24AB-445B-A9C3-BA1FB3D33463"}
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
 * @properties={typeid:24,uuid:"8447E578-A2F5-47C2-BC1A-4BEBCEF3304A"}
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
 * @properties={typeid:24,uuid:"C0E31611-BCF3-4513-8EDE-F2CA7CF7ED07"}
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
 * @properties={typeid:24,uuid:"FEFF1FDC-E3CB-49E7-BE96-47775A8EEE35"}
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
 * @properties={typeid:24,uuid:"B6E09413-E6B0-4CCE-A322-E335D4363461"}
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
 * @properties={typeid:24,uuid:"2573CB96-A972-4648-8CDF-F55A67162F46"}
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
 * @properties={typeid:24,uuid:"0D3542B3-4C37-462F-A809-BD3B2C3F4228"}
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
 * @properties={typeid:24,uuid:"5B2DC84B-D482-49E3-AEB3-7FEFE0C66CE6"}
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
 * @properties={typeid:24,uuid:"13CC0655-745D-4149-A485-4C2D06D793DC"}
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
 * @properties={typeid:24,uuid:"9F977776-F19C-4270-A7FF-701EB11FC84A"}
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
 * @properties={typeid:24,uuid:"F65285C8-D990-4257-9354-FA6DE4872BE4"}
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
 * @properties={typeid:24,uuid:"01FE5B4A-4EA0-4B39-A6EB-0C15B3B632CA"}
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
 * @properties={typeid:24,uuid:"6F419F04-57D4-4693-9518-11D68C4D3C40"}
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
 * @properties={typeid:24,uuid:"95126293-30B0-47A9-A861-E8107820C544"}
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
 * @properties={typeid:24,uuid:"1B89426D-6CF9-4B05-8C7B-441D40E0253F"}
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
 * @properties={typeid:24,uuid:"31878630-0F11-4ECC-ADF9-E73FC582C191"}
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
 * @properties={typeid:24,uuid:"46EFAE47-B898-4916-85B9-72A5A1A875F5"}
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
 * @properties={typeid:24,uuid:"20BA5DF9-EF63-461D-934F-52DF7BA31D96"}
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
 * @properties={typeid:24,uuid:"DA47D778-26D0-4C90-B04B-1FD30B89AF4D"}
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
 * @properties={typeid:24,uuid:"798572F4-A4E3-412C-BA3D-8BCE8C5DE87F"}
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
 * @properties={typeid:24,uuid:"2FD187F2-B3A6-41DD-B9FD-14446C82E86F"}
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
 * @properties={typeid:24,uuid:"84B508D0-74F4-4C26-A3E2-CAFCBCB23A83"}
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
 * @properties={typeid:24,uuid:"0E537F59-223C-4A77-B38C-FC37F8865515"}
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
 * @properties={typeid:24,uuid:"06CF8ADF-146C-4644-B3D7-E1A03845DDAA"}
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
 * @properties={typeid:24,uuid:"27A86D63-D6F5-40F9-8944-616BE9A3F546"}
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
 * @properties={typeid:24,uuid:"B9FDE1A4-784F-4ACD-84B5-4055B0C99A74"}
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
 * @properties={typeid:24,uuid:"6A89BA5E-C540-4EBD-A625-0A607F0D7471"}
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
 * @properties={typeid:24,uuid:"326E7057-7B9A-417F-8918-CF209CB4E99C"}
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
 * @properties={typeid:24,uuid:"8EC1FA79-E130-4400-868E-3FFB6223D5F9"}
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
 * @properties={typeid:24,uuid:"F8752CCD-BCAA-440B-8C6B-C7ABB778728F"}
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
 * @properties={typeid:24,uuid:"2D32309E-FE97-4C87-B4C9-048664ED6E26"}
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
 * @properties={typeid:24,uuid:"D92C6B6A-6238-4558-BC19-6A81B0785EA5"}
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
 * @properties={typeid:24,uuid:"B6A6AF13-5712-455C-954F-FABA7FE97D30"}
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
 * @properties={typeid:24,uuid:"200A2649-1ED9-44E4-8ACF-C92C1F692AC6"}
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
 * @properties={typeid:24,uuid:"5795130F-5902-4419-8787-FF39018FF08D"}
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
 * @properties={typeid:24,uuid:"92597F95-9921-4765-8ABD-5DA83A6656C9"}
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
 * @properties={typeid:24,uuid:"C5AC8288-1E65-4F72-8F36-08E5344ED260"}
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
 * @properties={typeid:24,uuid:"F44A19FC-234E-45A8-9172-045D979338D6"}
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
 * @properties={typeid:24,uuid:"354F348A-79DB-4884-B8C2-82C7B37B9D7F"}
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
 * @properties={typeid:24,uuid:"39DCB8A3-ADC5-417A-8EAA-A0ABEE6781DE"}
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
 * @properties={typeid:24,uuid:"2E57C544-CB36-4D3C-8380-464BB57C84D6"}
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
 * @properties={typeid:24,uuid:"53A623A4-EE2B-46C4-9C62-7087DEB8EB28"}
 */
function onElementFocusGained_frm_parametros(event) {
	plugins.dialogs.showInfoDialog("gained","Gained")
	return true
}
