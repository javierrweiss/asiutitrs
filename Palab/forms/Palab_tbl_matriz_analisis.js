/**
 * TODO generated, please specify type and doc for the params
 * @param {Number} codMatriz
 *
 * @properties={typeid:24,uuid:"542809EB-1A89-4B12-836E-AE8ACD2EFAAF"}
 */
function actualizarAnalisis (codMatriz) {
	
	var sql = "select mat.matrizlabdana as codigo,an.ana22alfa as analisis,an.ana19,an.ana24,an.ana21,an.ana3,an.anaestado,an.ana25,an.ana30,an.anasinourg,an.ana40 from tbc_matrizlab_d mat"
	+ " left join tbc_analisis_new an on an.ana1 = mat.MatrizlabDAna"
	+ " where mat.MatrizlabDCod = " + codMatriz;
	var ds_analisis = databaseManager.getDataSetByQuery("maestros", sql, null, -1);	
	var $tipos = [JSColumn.TEXT,JSColumn.TEXT,JSColumn.TEXT,JSColumn.TEXT,JSColumn.TEXT,JSColumn.TEXT,JSColumn.TEXT,JSColumn.TEXT,JSColumn.TEXT,JSColumn.TEXT,JSColumn.TEXT];

	var $frm = solutionModel.getForm('Palab_tbl_matriz_analisis');
	$frm.dataSource = ds_analisis.createDataSource('ds_analisis', $tipos);
	controller.recreateUI();
	
}
