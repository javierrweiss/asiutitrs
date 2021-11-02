/**
 * @properties={typeid:35,uuid:"DB8032A7-37CD-4C6B-B540-5FEE7CE2E6BE",variableType:-4}
 */
var f_cerrarForm = false;

/**
 * // TODO generated, please specify type and doc for the params
 * @param {Object} firstShow
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"3D9EA3F5-39D9-4409-8D92-5A0E692E32EC"}
 * @AllowToRunInFind
 */
function onShow(firstShow, event) {
	
	var $frm = solutionModel.getForm('Hcicir_tbl_buscar_protocolo');
	var $tipos = [JSColumn.TEXT,JSColumn.TEXT,JSColumn.TEXT,JSColumn.TEXT,JSColumn.TEXT,JSColumn.TEXT,JSColumn.TEXT,JSColumn.TEXT,JSColumn.TEXT];
	var ds_prot = databaseManager.createEmptyDataSet();
	ds_prot.addColumn("protocolo");
	ds_prot.addColumn("fecha_carga");
	ds_prot.addColumn("hora_carga");
	ds_prot.addColumn("fecha_inicio");
	ds_prot.addColumn("hora_inicio");
	ds_prot.addColumn("tipo_medico");
	ds_prot.addColumn("legajo_medico");
	ds_prot.addColumn("interven");
	ds_prot.addColumn("codigo_interven");
	
	var admision = forms.Hcicir_frm_hist_clin_ingreso_cirugia.f_tipoPaciente;
	var histClin = admision == 0 ? forms.Hcicir_frm_hist_clin_ingreso_cirugia.f_nroInternado : forms.Hcicir_frm_hist_clin_ingreso_cirugia.f_histClinUnica;
	
	var sql = "";
	var ds_histclin;
	if(admision == 0){
		
		sql = getQuery(histClin);
		// lista de protocolos en cirugin para un paciente
		ds_histclin = databaseManager.getDataSetByQuery("asistencial",sql,null,-1);
		
		var sqlAux = "select hc.HcirProtocolo from tbc_hcicir_new hc where hc.HcirTipohc = " + admision + " and hc.HcirHiscli = " + histClin;
		// Lista de protocolos en hcicir para un paciente
		var ds_hcicir = databaseManager.getDataSetByQuery("asistencial",sqlAux,null,-1);
		
		var i;
		var k;
		var tieneHcicir = false;
		if(ds_hcicir.getMaxRowIndex() > 0) {
				
			for(i=1 ; i <= ds_histclin.getMaxRowIndex() ; i++){
				
				for(k=1 ; k <= ds_hcicir.getMaxRowIndex() ; k++){
					if(ds_hcicir.getValue(k,1) == ds_histclin.getValue(i,1)){
						tieneHcicir = true;
						break;
					}
				}
					
				if(!tieneHcicir){
					ds_prot.addRow(ds_histclin.getRowAsArray(i));
				}
			}
			
			$frm.dataSource = ds_prot.createDataSource('Hcicir_tbl_buscar_protocolo', $tipos);
		}
		else{
			
			$frm.dataSource = ds_histclin.createDataSource('Hcicir_tbl_buscar_protocolo', $tipos);
		}
	}
	else{
		
		sql = getQueryAmbu(histClin,forms.Hcicir_frm_hist_clin_ingreso_cirugia.$fechaIngreso,forms.Hcicir_frm_hist_clin_ingreso_cirugia.$horaIngreso);
		// lista de protocolos en ciruguar para un paciente paciente
		ds_histclin = databaseManager.getDataSetByQuery("asistencial",sql,null,-1);
		$frm.dataSource = ds_histclin.createDataSource('Hcicir_tbl_buscar_protocolo', $tipos);
	}
		
	forms.Hcicir_tbl_buscar_protocolo.controller.recreateUI();
 	forms.Hcicir_tbl_buscar_protocolo.elements.btn_seleccionar.requestFocus();
}

/**
 * @properties={typeid:24,uuid:"BBF845D8-CA71-49F0-A925-05EB473D9778"}
 */
function getQuery (histClin) {
	
	var sql = "select c.CiriProtocolo protocolo,c.CiriFechaCarga fecha_carga,c.CiriHoraCarga hora_carga\
		,c.CiriFechaInicio fecha_inicio,c.CiriHoraInicio hora_inicio,c.ciriieciru tipo_medico,c.CiriLegCiru legajo_medico,it.Itv_Descripcion interven,it.Itv_Codi codigo_interven\
		from tbc_cirugint c\
		left join maestros.tbc_interven it on it.Itv_Codi = c.CiriInterven"
		+ " where c.CiriCodNome = 0 and c.CiriProtocolo > 0"
		+ " and c.CiriHistCl = " + histClin;
			
	return sql;
}

/**
 * @properties={typeid:24,uuid:"F8BBABED-538F-4005-B0C0-8842B7DB77A0"}
 */
function getQueryAmbu (histClin,fechaIngreso,horaIngreso) {
	
	var sql = "select cg.CirgProtocolo protocolo,g.Guar_FechaIngreso fecha_carga,(g.Guar_HoraIngreso * 100) hora_carga,0 fecha_inicio,0 hora_inicio\
		,g.Guar_TipoMed tipo_medico,g.Guar_Medico legajo_medico,it.Itv_Descripcion interven,it.Itv_Codi codigo_interven\
		from tbc_ciruguar cg\
		left join tbc_guardia g on g.Guar_HistClinica = cg.CirgHistClinica and g.Guar_FechaIngreso = cg.CirgFechaIngreso and g.Guar_HoraIngreso = cg.CirgHoraIngreso\
		left join maestros.tbc_interven it on it.Itv_Codi = cg.CirgInterven"
		+ " where g.Guar_Especialidad = 5 and g.Guar_Estado < 3 and g.Guar_FechaAlta = 0 and cg.CirgProtocolo > 0"
		+ " and cg.CirgHistClinica = " + histClin
		+ " and cg.CirgFechaIngreso = " + fechaIngreso
		+ " and cg.CirgHoraIngreso = " + horaIngreso;
	
	return sql;
}

/**
 * Handle hide window.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"B554EAFB-D714-4E46-B62E-D5D2B3390579"}
 */
function onHide_cerrarForm(event) {
	// TODO Auto-generated method stub
	if(!f_cerrarForm){
		
		var res = globals.DIALOGS.showQuestionDialog('¡Atención!','No se selecciono ningun protocolo. \n¿ Desea cargar Ingreso de Historia Clinica de Cirugia sin Protocolo ?', 'Si', 'No');
		if( res == 'Si'){
			forms.Hcicir_frm_hist_clin_ingreso_cirugia.inicializarHcicir();
			forms.Hcicir_frm_hist_clin_ingreso_cirugia.elements.btn_buscarProtocolo.enabled = false;
			forms.Hcicir_frm_hist_clin_ingreso_cirugia.$legajo_medico = globals.Hcicir_vLega;
			forms.Hcicir_frm_hist_clin_ingreso_cirugia.$tipo_medico = globals.Hcicir_vTipoOperador;
			forms.Hcicir_frm_hist_clin_ingreso_cirugia.f_medico = globals.Hcicir_vOperador;
			
			forms.Hcicir_frm_hist_clin_ingreso_cirugia.elements.lbl_medico.visible = true;
			forms.Hcicir_frm_hist_clin_ingreso_cirugia.elements.txt_medico.visible = true;
		}
		else{
			forms.Hcicir_frm_hist_clin_ingreso_cirugia.limpiarForm();
		}
		
		f_cerrarForm = true;
	}
	
	return f_cerrarForm;
}
