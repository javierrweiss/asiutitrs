/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"AA13259C-A3CD-495E-A7C9-29DF15548EBF"}
 */
function onShow_inicializarForm(firstShow, event) {
	
	
	forms.Palab_frm_palab_inter.limpiarForm();
	
	forms.Palab_frm_palab_inter.elements.btn_nuevo.enabled = false;
	forms.Palab_frm_palab_inter.elements.btn_grabar.enabled = false;
	forms.Palab_frm_palab_inter.elements.btn_cerrar.enabled = false;
	forms.Palab_frm_palab_inter.elements.txt_paciente.editable = false;
	forms.Palab_frm_palab_inter.elements.btn_buscarPaciente.enabled = false;
	
	elements.btnEditar.visible = true;
	elements.btnEditar.requestFocus();
}

/**
 * Handle hide window.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"1926F268-6696-4CDC-9556-69109B346287"}
 */
function onHide_interfaceInter(event) {
	
	return forms.Palab_frm_palab_inter.f_cerrarForm;
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"B84CFC84-A73B-4387-895E-B3CB67BACF66"}
 */
function onAction_btnEditar(event) {
	
	inicializarForm();
}

/**
 * @properties={typeid:24,uuid:"C70498C0-CA00-4943-A3F9-529D8E7378BB"}
 */
function inicializarForm() {
	
	elements.btnEditar.visible = false;
	forms.Palab_frm_palab_inter.elements.btn_grabar.enabled = true;
	forms.Palab_frm_palab_inter.elements.btn_cerrar.enabled = true;
	
	/*
	//Test
	globals.Palab_hisclin = 2477680;
	globals.Palab_medCodigo = 11317;
	
	globals.Palab_listAnalisis.push(1001);
	globals.Palab_listAnalisis.push(1292);
	globals.Palab_listAnalisis.push(1003);
	globals.Palab_listAnalisis.push(1005);
	globals.Palab_listAnalisis.push(1006);
	globals.Palab_listAnalisis.push(1300);
	globals.Palab_listAnalisis.push(1007);
	globals.Palab_listAnalisis.push(1008);
	*/
	
	if(palab_rel_buscar_medicos.getSize() > 0){
		
		forms.Palab_frm_palab_inter.f_medico = palab_rel_buscar_medicos.med_codigo + " " + palab_rel_buscar_medicos.med_apenom;
		forms.Palab_frm_palab_inter.$_flagJS = palab_rel_buscar_medicos.med_jefe;
	}
	
	if(palab_rel_buscar_personal.getSize() > 0){
		
		forms.Palab_frm_palab_inter.f_medico = palab_rel_buscar_personal.per_legajo + " " + palab_rel_buscar_personal.per_apelnom;
		forms.Palab_frm_palab_inter.$_flagJS = palab_rel_buscar_personal.per_jefe;
	}
	
	
	forms.Palab_frm_palab_inter.pacienteSeleccionadoInter();
	//globals.ControlAlerta(0,globals.Palab_hisclin,1,0);
	
	forms.Palab_frm_palab_inter.f_egreso = 0;
	forms.Palab_frm_palab_inter.f_estado = 1;
	forms.Palab_frm_palab_inter.f_diferido = 0;
	
	forms.Palab_frm_palab_inter.elements.cbo_egreso.readOnly = true;
	forms.Palab_frm_palab_inter.elements.cbo_estado.readOnly = true;
	forms.Palab_frm_palab_inter.elements.lbl_estado.visible = true;
	forms.Palab_frm_palab_inter.elements.cbo_estado.visible = true;
	
	if(forms.Palab_frm_palab_inter.isValidFechaSolicitud()){
		
		forms.Palab_frm_palab_inter.setVisibleAnalisis(true);
		forms.Palab_frm_palab_inter.loadAnalisisInterface();
		forms.Palab_frm_palab_inter.elements.txt_analisis.requestFocus();
		
		forms.Palab_frm_palab_inter.$isDirty = true;
	}
	else{
		
		forms.Palab_frm_palab_inter.cerrarForm();
	}
}
