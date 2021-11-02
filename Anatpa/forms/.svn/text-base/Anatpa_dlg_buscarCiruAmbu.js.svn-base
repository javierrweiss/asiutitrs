/**
 * // TODO generated, please specify type and doc for the params
 * @param {Object} firstShow
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"F439D5FA-9158-4CE7-9B40-F78E3CB795B1"}
 * @AllowToRunInFind
 */
function onShow(firstShow, event) {
	
	var isValid = true;

	var sql = getQueryCiruAmbu(null);
	var dsCiruAmbu = databaseManager.getDataSetByQuery('asistencial',sql,null,-1);
	var $frm = solutionModel.getForm('Anatpa_tbl_ciruAmbu');
	var $tipos = [JSColumn.TEXT,JSColumn.TEXT,JSColumn.INTEGER,JSColumn.INTEGER,JSColumn.TEXT,JSColumn.TEXT,JSColumn.TEXT,JSColumn.TEXT,JSColumn.TEXT,JSColumn.INTEGER,JSColumn.INTEGER,JSColumn.INTEGER];
	$frm.dataSource = dsCiruAmbu.createDataSource('Anatpa_tbl_ciruAmbu', $tipos);
	forms.Anatpa_tbl_ciruAmbu.controller.recreateUI();
	
	if(globals.Anatpa_eventSourceButton == 0){
		
		forms.Anatpa_tbl_ciruAmbu.foundset.find();
		forms.Anatpa_tbl_ciruAmbu.foundset['cirgprotocolo'] = forms.Anatpa_frm_anatpaca.f_nroPedido;
		forms.Anatpa_tbl_ciruAmbu.foundset.search();
		
		if(forms.Anatpa_tbl_ciruAmbu.foundset.getSize() == 0)
			forms.Anatpa_tbl_ciruAmbu.foundset.clear();
	}
	
	// verificar que los protocolos esten dados de alta
	if(forms.Anatpa_tbl_ciruAmbu.foundset.getSize() > 0){
		
		var fsAux = forms.Anatpa_tbl_ciruAmbu.foundset.duplicateFoundSet();
		
		fsAux.find();
		fsAux['cirgprotocolo'] = "0";
		fsAux.search();
		
		if(fsAux.getSize() > 0){
			
			forms.Anatpa_tbl_ciruAmbu.foundset.find();
			forms.Anatpa_tbl_ciruAmbu.foundset['cirgprotocolo'] = "0";
			forms.Anatpa_tbl_ciruAmbu.foundset.search();
			
			isValid = false;
		}
	}
	
	globals.Anatpa_activoFormBuscarPaciente = 0;
 	//forms.Anatpa_tbl_ciruAmbu.controller.focusFirstField();
 	forms.Anatpa_tbl_ciruAmbu.elements.btn_seleccionar.requestFocus();
	
	if(!isValid){
		
		globals.DIALOGS.showWarningDialog("¡Atención!",'Debe dar el Alta a la cirugia ambulatoria.',"Aceptar");
		// TODO: ver como manejar este caso. pintar las letras en rojo?Bloquear toda la pantalla? solo permitir escaoe y boton X
	}
	
}

/**
 * TODO generated, please specify type and doc for the params
 * @param nroPedido
 *
 * @properties={typeid:24,uuid:"DAE5CF1F-92DC-4A8D-A103-E5F4C588795A"}
 */
function getQueryCiruAmbu (nroPedido) {
	
	var sql = "select cg.CirgHistClinica,cg.CirgProtocolo,cg.CirgFechaIngreso,cg.CirgHoraIngreso\
		,pres.PregEstado,pres.PregTipoPrest,pres.PregTipoNome,pres.PregCodNome cirgcodnome,nom.Nome_Descr cirgnomedescr\
		,gu.Guar_Medico,gu.Guar_TipoMed,cg.CirgInterven\
		from tbc_ciruguar cg\
		left join tbc_prest_guar pres on pres.PregHistClinica = cg.CirgHistClinica and pres.PregFechaIngreso = cg.CirgFechaIngreso and pres.PregHoraIngreso = cg.CirgHoraIngreso\
		left join maestros.tbc_nomencla nom on nom.Nome_Tipo = pres.PregTipoNome and nom.Nome_Codigo = pres.PregCodNome\
		left join tbc_guardia gu on gu.Guar_HistClinica = cg.CirgHistClinica and gu.Guar_FechaIngreso = cg.CirgFechaIngreso and gu.Guar_HoraIngreso = cg.CirgHoraIngreso"
		+ " where cg.CirgHistClinica = " + forms.Anatpa_frm_anatpaca.f_histClinUnica
		+ " and (cg.CirgFechaIngreso = 0 or (cg.CirgFechaIngreso between " + forms.Anatpa_frm_anatpaca.f_fechaDesde + " and " + forms.Anatpa_frm_anatpaca.f_fechaHasta + " ))"
		+ " and pres.PregEstado < 9"
		+ " and (pres.PregTipoPrest = 1 or pres.PregTipoPrest = 3 or pres.PregTipoPrest = 7 or pres.PregTipoPrest = 8)"
		+ " and gu.Guar_Estado < 9";
	if(nroPedido != null){
		sql += " and cg.cirgprotocolo = " + nroPedido;
	}
			
	return sql;
}
