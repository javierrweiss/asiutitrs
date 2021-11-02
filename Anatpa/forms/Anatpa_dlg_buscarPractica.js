/**
 * // TODO generated, please specify type and doc for the params
 * @param {Object} firstShow
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"C63CBB07-CC47-406F-A789-08C6A43BA7E5"}
 * @AllowToRunInFind
 */
function onShow(firstShow, event) {
	
	if(globals.Anatpa_eventSourceButton == 1){
		/*
		forms.Anatpa_tbl_practicas.foundset.find();
		forms.Anatpa_tbl_practicas.foundset.nome_grupo_6 = '12';
		forms.Anatpa_tbl_practicas.foundset.newRecord();
		forms.Anatpa_tbl_practicas.foundset.nome_grupo_6 = '9012';
		forms.Anatpa_tbl_practicas.foundset.search();
		forms.Anatpa_tbl_practicas.foundset.sort('nome_codigo asc');
		*/
		
		var sql = "select Nome_Codigo,Nome_Descr,Nome_Tipo from tbc_NOMENCLA"
				+ " where Nome_Tipo_6 = 1"
				+ " and (Nome_Grupo_6 = 12 or Nome_Grupo_6 = 9012)"
				+ " order by Nome_Descr";

		var dsPracticas = databaseManager.getDataSetByQuery('maestros',sql,null,-1);
		var $frm = solutionModel.getForm('Anatpa_tbl_practicas');
		var $tipos = [JSColumn.TEXT,JSColumn.TEXT,JSColumn.TEXT];
		$frm.dataSource = dsPracticas.createDataSource('Anatpa_tbl_practicas', $tipos);
		forms.Anatpa_tbl_practicas.controller.recreateUI();
		
		globals.Anatpa_f_cajaAlfa = '';
		elements.txt_cajaAlfa.requestFocus();
		globals.Anatpa_activoFormBuscarPaciente = 1;
	}
	else{
	   buscarPractica();
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"F5A5647F-6BC5-4312-AA73-C028709A5DBF"}
 * @AllowToRunInFind
 */
function onAction_buscar(event) {
	
	buscarPractica();
}

/**
 * @AllowToRunInFind
 *
 * @properties={typeid:24,uuid:"75837231-8037-4CD5-B419-46EC1FB5D1EC"}
 */
function buscarPractica (){
	
	var sql;
	var dsPracticas;
	var $frm;
	var $tipos;
	
	if(isNaN(globals.Anatpa_f_cajaAlfa)){
		/*
		forms.Anatpa_tbl_practicas.foundset.find();
		
		forms.Anatpa_tbl_practicas.foundset.nome_descr = '>=' + globals.Anatpa_f_cajaAlfa.toLocaleUpperCase();
		forms.Anatpa_tbl_practicas.foundset.nome_grupo_6 = '12';
		forms.Anatpa_tbl_practicas.foundset.newRecord();
		forms.Anatpa_tbl_practicas.foundset.nome_descr = '>=' + globals.Anatpa_f_cajaAlfa.toLocaleUpperCase();
		forms.Anatpa_tbl_practicas.foundset.nome_grupo_6 = '9012';
		
		forms.Anatpa_tbl_practicas.foundset.search();
		forms.Anatpa_tbl_practicas.foundset.sort('nome_descr asc');
		*/
		sql = "select Nome_Codigo,Nome_Descr,Nome_Tipo from tbc_NOMENCLA"
		+ " where Nome_Tipo_6 = 1"
		+ " and (Nome_Grupo_6 = 12 or Nome_Grupo_6 = 9012)"
		+ " and Nome_Descr_6 like '" + globals.Anatpa_f_cajaAlfa.toLocaleUpperCase() + "%'"
		+ " order by Nome_Descr";

		dsPracticas = databaseManager.getDataSetByQuery('maestros',sql,null,-1);
		$frm = solutionModel.getForm('Anatpa_tbl_practicas');
		$tipos = [JSColumn.TEXT,JSColumn.TEXT,JSColumn.TEXT];
		$frm.dataSource = dsPracticas.createDataSource('Anatpa_tbl_practicas', $tipos);
		forms.Anatpa_tbl_practicas.controller.recreateUI();

	}
	else{
		/*
		forms.Anatpa_tbl_practicas.foundset.find();
		
		forms.Anatpa_tbl_practicas.foundset.nome_codigo = '>=' + utils.stringToNumber(globals.Anatpa_f_cajaAlfa.valueOf());
		forms.Anatpa_tbl_practicas.foundset.nome_grupo_6 = '12';
		forms.Anatpa_tbl_practicas.foundset.newRecord();
		forms.Anatpa_tbl_practicas.foundset.nome_codigo = '>=' + utils.stringToNumber(globals.Anatpa_f_cajaAlfa.valueOf());
		forms.Anatpa_tbl_practicas.foundset.nome_grupo_6 = '9012';
		
		forms.Anatpa_tbl_practicas.foundset.search();
		forms.Anatpa_tbl_practicas.foundset.sort('nome_codigo asc');
		*/
		sql = "select Nome_Codigo,Nome_Descr,Nome_Tipo from tbc_NOMENCLA"
		+ " where Nome_Tipo_2 = 1"
		+ " and (Nome_Grupo = 12 or Nome_Grupo = 9012)"
		+ " and Nome_Codigo_2 >= " + utils.stringToNumber(globals.Anatpa_f_cajaAlfa.valueOf())
		+ " order by Nome_Codigo";

		dsPracticas = databaseManager.getDataSetByQuery('maestros',sql,null,-1);
		$frm = solutionModel.getForm('Anatpa_tbl_practicas');
		$tipos = [JSColumn.TEXT,JSColumn.TEXT,JSColumn.TEXT];
		$frm.dataSource = dsPracticas.createDataSource('Anatpa_tbl_practicas', $tipos);
		forms.Anatpa_tbl_practicas.controller.recreateUI();
	}
  
    globals.Anatpa_activoFormBuscarPaciente = 0;
 	//forms.Anatpa_dlg_buscarPractica.controller.focusFirstField();
 	forms.Anatpa_tbl_practicas.elements.btn_seleccionar.requestFocus();
}
