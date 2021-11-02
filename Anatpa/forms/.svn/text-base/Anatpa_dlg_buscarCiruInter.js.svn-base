/**
 * // TODO generated, please specify type and doc for the params
 * @param {Object} firstShow
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"47F9A99D-E746-406D-9B1B-0CE63E54DA53"}
 * @AllowToRunInFind
 */
function onShow(firstShow, event) {

	var sql = getQueryCiruInter(null);
	
	var dsCiruInter = databaseManager.getDataSetByQuery('asistencial',sql,null,-1);
	var $frm = solutionModel.getForm('Anatpa_tbl_ciruInter');
	var $tipos = [JSColumn.TEXT,JSColumn.TEXT,JSColumn.TEXT,JSColumn.INTEGER,JSColumn.INTEGER,JSColumn.TEXT,JSColumn.INTEGER,JSColumn.INTEGER,JSColumn.INTEGER];
	$frm.dataSource = dsCiruInter.createDataSource('Anatpa_tbl_ciruInter', $tipos);
	forms.Anatpa_tbl_ciruInter.controller.recreateUI();
	
	// Obteniendo codigo de intervencion
	var fs_Aux = forms.Anatpa_tbl_ciruInter.foundset.duplicateFoundSet();
	fs_Aux.find();
	fs_Aux['ciritiponome'] = 0;
	fs_Aux['ciricodnome'] = 0;
	fs_Aux.search();
	
	// aplicando filtro general para busqueda desde boton
	forms.Anatpa_tbl_ciruInter.foundset.find();
	forms.Anatpa_tbl_ciruInter.foundset['ciricodnome'] = '> 0';
	forms.Anatpa_tbl_ciruInter.foundset.search();
	
	// Origen de la busqueda, ingreso de nro de pedido o boton busqueda
	if(globals.Anatpa_eventSourceButton == 0){
		
		forms.Anatpa_tbl_ciruInter.foundset.find();
		forms.Anatpa_tbl_ciruInter.foundset['ciriprotocolo'] = forms.Anatpa_frm_anatpaca.f_nroPedido;
		forms.Anatpa_tbl_ciruInter.foundset['ciricodnome'] = '> 0';
		forms.Anatpa_tbl_ciruInter.foundset.search();
		
		if(forms.Anatpa_tbl_ciruInter.foundset.getSize() == 0)
			forms.Anatpa_tbl_ciruInter.foundset.clear();
	}
	
	// resultado definitivo 
	if(forms.Anatpa_tbl_ciruInter.foundset.getSize() > 0){
		
		if(fs_Aux.getSize() > 0){
			forms.Anatpa_tbl_ciruInter.$ciriInterven = fs_Aux['ciriinterven'];
			forms.Anatpa_tbl_ciruInter.$ciriLegCiru = fs_Aux['cirilegciru'];
			forms.Anatpa_tbl_ciruInter.$ciriIeCiru = fs_Aux['ciriieciru'];
		}
	}
	
	globals.Anatpa_activoFormBuscarPaciente = 0;
 	//forms.Anatpa_tbl_ciruInter.controller.focusFirstField();
 	forms.Anatpa_tbl_ciruInter.elements.btn_seleccionar.requestFocus();
}

/**
 * TODO generated, please specify type and doc for the params
 * @param nroPedido
 *
 * @properties={typeid:24,uuid:"C4BFF0D2-6ED2-49A4-8D30-20461E959CB5"}
 */
function getQueryCiruInter (nroPedido) {
			
	var sql = "select cir.CiriHistCl,cir.CiriProtocolo,cir.CiriFechaCarga,cir.CiriTipoNome,cir.CiriCodNome,nom.Nome_Descr cirinomedescr\
		,cir.CiriInterven,cir.CiriLegCiru,cir.CiriIeCiru\
		from tbc_cirugint cir\
		left join maestros.tbc_nomencla nom on nom.Nome_Tipo = cir.CiriTipoNome and nom.Nome_Codigo = cir.CiriCodNome\
		where"
		+ " cir.CiriHistCl = " + forms.Anatpa_frm_anatpaca.f_nroInternado  
		+ " and (cir.CiriFechaCarga = 0 or (cir.CiriFechaCarga between " + forms.Anatpa_frm_anatpaca.f_fechaDesde + " and " + forms.Anatpa_frm_anatpaca.f_fechaHasta + " ))";
		if(nroPedido != null){
			sql += " and cir.CiriCodNome > 0 and cir.CiriProtocolo = " + nroPedido;
		}
			
	return sql;
}