/**
 * // TODO generated, please specify type and doc for the params
 * @param {Object} firstShow
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"F963880D-C0DC-4FCA-A501-A15A784C5657"}
 * @AllowToRunInFind
 */
function onShow(firstShow, event) {

	var sql = getQueryImapedi(null);

	var dsImapedi = databaseManager.getDataSetByQuery('asistencial',sql,null,-1);
	var $frm = solutionModel.getForm('Anatpa_tbl_imapedi');
	var $tipos = [JSColumn.TEXT,JSColumn.TEXT,JSColumn.TEXT,JSColumn.TEXT,JSColumn.TEXT,JSColumn.TEXT,JSColumn.TEXT,JSColumn.TEXT,JSColumn.TEXT,JSColumn.TEXT,JSColumn.TEXT,JSColumn.INTEGER,JSColumn.INTEGER];
	$frm.dataSource = dsImapedi.createDataSource('Anatpa_tbl_imapedi', $tipos);
	forms.Anatpa_tbl_imapedi.controller.recreateUI();
	
	if(globals.Anatpa_eventSourceButton == 0){
		
		forms.Anatpa_tbl_imapedi.foundset.find();
		forms.Anatpa_tbl_imapedi.foundset['ipedpedido'] = forms.Anatpa_frm_anatpaca.f_nroPedido;
		forms.Anatpa_tbl_imapedi.foundset.search();
		
		if(forms.Anatpa_tbl_imapedi.foundset.getSize() == 0)
			forms.Anatpa_tbl_imapedi.foundset.clear();
	}
	
	globals.Anatpa_activoFormBuscarPaciente = 0;
 	//forms.Anatpa_tbl_imapedi.controller.focusFirstField();
 	forms.Anatpa_tbl_imapedi.elements.btn_seleccionar.requestFocus();
}

/**
 * @properties={typeid:24,uuid:"5D9BE049-16C0-43D7-94F2-0518D8E24160"}
 */
function getQueryImapedi (nroPedido) {
	
	var admision = forms.Anatpa_frm_anatpaca.f_tipoPaciente == 0 ? 0 : 1;
	var histClin = admision == 0 ? forms.Anatpa_frm_anatpaca.f_nroInternado : forms.Anatpa_frm_anatpaca.f_histClinUnica;
			
	var sql = "SELECT cab.ipedservicio,cab.ipedpedido,cab.ipedadmis,cab.IpedHistClinica,cab.ipedestado,cab.IpedFechaPedido\
			,det.IdetTipoNom,det.IdetCodiNom,det.IdetEstado,det.IdetFechaInfor,nom.Nome_Descr nome_descrip\
			,cab.IpedMedSolic,cab.IpedIeSolic\
			FROM tbc_imapedi_new cab\
			left join tbc_imapedet_new det on cab.IpedServicio1 = det.idetservicio and cab.ipedpedido = det.idetpedido\
			left join maestros.tbc_nomencla nom on nom.Nome_Tipo = det.IdetTipoNom and nom.Nome_Codigo = det.IdetCodiNom\
			where cab.IpedServicio1 = " + forms.Anatpa_frm_anatpaca.$servicio
			+ " and cab.ipedadmis = " + admision 
			+ " and cab.IpedHistClinica = " + histClin
			+ " and cab.IpedEstado < 9"
			+ " and det.IdetEstado < 9"
			+ " and (det.IdetFechaInfor = 0 or (det.IdetFechaInfor between " + forms.Anatpa_frm_anatpaca.f_fechaDesde + " and " + forms.Anatpa_frm_anatpaca.f_fechaHasta + "))";
			if(nroPedido != null){
				sql += " and cab.IpedPedido = " + nroPedido;
			}
			
	return sql;
}
