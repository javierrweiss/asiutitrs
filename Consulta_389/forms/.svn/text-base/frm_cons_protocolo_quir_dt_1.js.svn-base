/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"24A48C9C-E37E-41B3-BA7D-750B9C964C7F"}
 */
function onShow_carga_detalle(firstShow, event) {
	var  max = foundset.getSize()
	if (max > 1){
		elements.btn_prev.visible = false
		elements.btn_nex.visible = true
	}else{
		elements.btn_prev.visible = false
		elements.btn_nex.visible = false
	}
    forms.frm_cons_protocolo_quir_dt_1_1.elements.lbl_por1.visible = false
    forms.frm_cons_protocolo_quir_dt_1_1.elements.lbl_por2.visible = false
    forms.frm_cons_protocolo_quir_dt_1_1.elements.lbl_por3.visible = false
    forms.frm_cons_protocolo_quir_dt_1_1.elements.lbl_por4.visible = false
    forms.frm_cons_protocolo_quir_dt_1_1.elements.lbl_por5.visible = false
    forms.frm_cons_protocolo_quir_dt_1_1.elements.lbl_por6.visible = false
    forms.frm_cons_protocolo_quir_dt_1_1.elements.lbl_por7.visible = false
    forms.frm_cons_protocolo_quir_dt_1_1.elements.lbl_por8.visible = false	
	globals.gbl_txt_evaluacion = null
	globals.gbl_txt_protocolo = null
	globals.gbl_txt_hemo = null
	globals.gbl_txt_monito = null
	globals.gbl_txt_perfus = null
	globals.gbl_txt_medica = null
	forms.frm_cons_protocolo_quir_dt_1.elements.tabs.tabIndex = 1
	
 	globals.gbl_nome_codigo = 0
	globals.gbl_nome_tipo = 0
	globals.gbl_nome_descripcion = null
	application.updateUI()
	cargar_detalle()
}

/**
 * @properties={typeid:24,uuid:"FCC178C4-AB13-43B5-A382-1AA4DF55D4F3"}
 */
function cargar_detalle() {
	globals.gbl_especialista_nombre = null
	globals.gbl_ayudante_1_nombre = null
	globals.gbl_ayudante_2_nombre = null
	globals.gbl_ayudante_3_nombre = null
	globals.gbl_anestesista_nombre = null
	globals.gbl_perfusionista_nombre = null
	globals.gbl_instrumentista_nombre = null
	globals.gbl_partero_nombre = null
	globals.gbl_neonatologo_nombre = null	
	
	globals.gbl_especialista_ie = null
	globals.gbl_ayudante_1_ie = null
	globals.gbl_ayudante_2_ie = null
	globals.gbl_ayudante_3_ie = null
	globals.gbl_anestesista_ie = null
	globals.gbl_perfusionista_ie = null
	globals.gbl_instrumentista_ie = null
	globals.gbl_partero_ie = null
	globals.gbl_neonatologo_ie = null
	
	globals.gbl_especialista_por = null
	globals.gbl_ayudante_1_por = null
	globals.gbl_ayudante_2_por = null
	globals.gbl_ayudante_3_por = null
	globals.gbl_anestesista_por = null
	globals.gbl_perfusionista_por = null
	globals.gbl_instrumentista_por = null
	globals.gbl_gastos_por = null

    globals.gbl_especialista_nombre = foundset.aux_med_1_nombre
	globals.gbl_especialista_ie = foundset.aux_med_1_ie
	globals.gbl_especialista_por = aux_por_med_1
	if (globals.gbl_especialista_por == 0){
	    globals.gbl_especialista_por = null
		forms.frm_cons_protocolo_quir_dt_1_1.elements.lbl_por1.visible = false
	}else{
	    forms.frm_cons_protocolo_quir_dt_1_1.elements.lbl_por1.visible = true
	}
    
	globals.gbl_ayudante_1_nombre = foundset.aux_med_2_nombre
	globals.gbl_ayudante_1_ie = foundset.aux_med_2_ie
	globals.gbl_ayudante_1_por = aux_por_med_2
	if (globals.gbl_ayudante_1_por == 0){
		globals.gbl_ayudante_1_por = null
		forms.frm_cons_protocolo_quir_dt_1_1.elements.lbl_por2.visible = false
	}else{
		forms.frm_cons_protocolo_quir_dt_1_1.elements.lbl_por2.visible = true
	}
	
	globals.gbl_ayudante_2_nombre = foundset.aux_med_3_nombre 
	globals.gbl_ayudante_2_ie = foundset.aux_med_3_ie
	globals.gbl_ayudante_2_por = aux_por_med_3
	if (globals.gbl_ayudante_2_por == 0){
		globals.gbl_ayudante_2_por = null
		forms.frm_cons_protocolo_quir_dt_1_1.elements.lbl_por3.visible = false
	}else{
		forms.frm_cons_protocolo_quir_dt_1_1.elements.lbl_por3.visible = true
		
	}
		
	globals.gbl_ayudante_3_nombre = foundset.aux_med_4_nombre
	globals.gbl_ayudante_3_ie = foundset.aux_med_4_ie
	globals.gbl_ayudante_3_por = aux_por_med_4
	if (globals.gbl_ayudante_3_por == 0){
	    globals.gbl_ayudante_3_por = null
		forms.frm_cons_protocolo_quir_dt_1_1.elements.lbl_por4.visible = false
	}else{
	    forms.frm_cons_protocolo_quir_dt_1_1.elements.lbl_por4.visible = true
	}
	
	globals.gbl_anestesista_nombre = foundset.aux_med_5_nombre
	globals.gbl_anestesista_ie = foundset.aux_med_5_ie
	globals.gbl_anestesista_por = aux_por_med_5
	if (globals.gbl_anestesista_por == 0){
	    globals.gbl_anestesista_por = null
		forms.frm_cons_protocolo_quir_dt_1_1.elements.lbl_por5.visible = false
	}else{
	    forms.frm_cons_protocolo_quir_dt_1_1.elements.lbl_por5.visible = true
	}
	
	globals.gbl_perfusionista_nombre = foundset.aux_med_6_nombre
	globals.gbl_perfusionista_ie = foundset.aux_med_6_ie		
	globals.gbl_perfusionista_por = aux_por_med_6
	if (globals.gbl_perfusionista_por == 0){
		globals.gbl_perfusionista_por = null
		forms.frm_cons_protocolo_quir_dt_1_1.elements.lbl_por6.visible = false
	}else{
	    forms.frm_cons_protocolo_quir_dt_1_1.elements.lbl_por6.visible = true
	}
	
	globals.gbl_instrumentista_nombre = foundset.aux_med_7_nombre
    globals.gbl_instrumentista_ie = foundset.aux_med_7_ie		
	globals.gbl_instrumentista_por = aux_por_med_7
	if (globals.gbl_instrumentista_por == 0){
	    globals.gbl_instrumentista_por = null
		forms.frm_cons_protocolo_quir_dt_1_1.elements.lbl_por7.visible = false
	}else{
	    forms.frm_cons_protocolo_quir_dt_1_1.elements.lbl_por7.visible = true
	}

	globals.gbl_gastos_por = aux_por_med_8
	if (globals.gbl_gastos_por == 0){
	    globals.gbl_gastos_por = null
		forms.frm_cons_protocolo_quir_dt_1_1.elements.lbl_por8.visible = false
	}else{
	    forms.frm_cons_protocolo_quir_dt_1_1.elements.lbl_por8.visible = true
	}
	globals.gbl_partero_nombre = aux_med_partero_nombre
    globals.gbl_neonatologo_nombre = aux_med_neonato_nombre
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"964B8420-F602-4854-8BE9-AE7D4F418C9D"}
 */
function onAction_siguiente(event) {
	var  max = foundset.getSize()
	var i = foundset.getSelectedIndex()
	if (i <= max) {
	   controller.setSelectedIndex(controller.getSelectedIndex() + 1)
	   cargar_detalle()
	   elements.btn_prev.visible = true
	}
	if ((i+1) == max){
	   elements.btn_nex.visible = false
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"F2CB6C92-8C29-48FD-B7DF-5D2E669B3D12"}
 */
function onAction_anterior(event) {
	var i = foundset.getSelectedIndex()
	if (i > 1){
	   controller.setSelectedIndex(controller.getSelectedIndex() - 1)
	   cargar_detalle()
	   elements.btn_nex.visible = true
	}
	if ((i-1) == 1){
	   elements.btn_prev.visible = false
	}
}
