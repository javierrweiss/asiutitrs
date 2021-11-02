
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"C60A9FAF-ECE3-4E7D-8195-4728CB7C4C2D"}
 */
function onAction_busca_Imacodi(event) {
	var win = application.createWindow("c",JSWindow.MODAL_DIALOG)
	win.title = "Búsqueda de Código de Estudio";
	win.setSize(850,550)
	//win.show(forms.frm_busqueda_medicos_personal_copy)
	win.show(forms.frm_busqueda_nomenclador_imacodi)
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"DEA766B3-5FD6-41DA-BA58-DD41099A7F3F"}
 */
function onAction_graba_Estudios_dtl(event) {
	if(globals.vCodigoImacodi!=0&&globals.vCodigoImacodi!=''&&globals.vCodigoImacodi!=null){
		if(vs_to_aux_estudios.getSize()>0){
			vs_to_aux_estudios.setSelectedIndex(1)
			globals.vLineas=vs_to_aux_estudios.aux_est_linea
			for(var z=2;z<=vs_to_aux_estudios.getSize();z++){
				vs_to_aux_estudios.setSelectedIndex(z)
				if(vs_to_aux_estudios.aux_est_linea>globals.vLineas){
					globals.vLineas=vs_to_aux_estudios.aux_est_linea
				}
			}
		}else{
			globals.vLineas=0
		}
		vs_to_aux_estudios.newRecord()
		globals.vLineas++
		vs_to_aux_estudios.aux_est_solucion=globals.vSolucion
		vs_to_aux_estudios.aux_est_frm=globals.vFormulario
		vs_to_aux_estudios.aux_est_hiscli=globals.vHiscli
		vs_to_aux_estudios.aux_est_operador=globals.vLega
		vs_to_aux_estudios.aux_est_fecha=globals.vFechaCarga
		vs_to_aux_estudios.aux_est_hora=globals.vHoraCarga
		vs_to_aux_estudios.aux_est_servicio=globals.vServicio
		vs_to_aux_estudios.aux_est_linea=globals.vLineas
		vs_to_aux_estudios.aux_est_codigo=globals.vCodigoImacodi
		databaseManager.saveData(vs_to_aux_estudios.getRecord(1))
		databaseManager.refreshRecordFromDatabase(vs_to_aux_estudios, -1)
		forms.Estudios_ingreso.elements.btn_grabapedido.visible=true
		forms.Estudios_ingreso.elements.btn_cancelapedido.visible=true
		forms.Estudios_tab.elements.tabless_estudios.tabIndex=2
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"2DEDFD1F-D82E-4412-BFB5-E64B00F270CA"}
 */
function onAction_cancela_Estudios_dtl(event) {
	//application.executeProgram("/export/home0/acct/pruebaProRM/ferrun-sh");
	
}
