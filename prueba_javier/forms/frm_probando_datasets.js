
/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"567049B8-D367-480B-B412-4F2AE69D0A17"}
 */
function onShow(firstShow, event) {
var $cols = ['a', 'b']
	
	var $ds = databaseManager.createEmptyDataSet(0,$cols)
	$ds.addColumn('c')
	$ds.addColumn('d',3,JSColumn.INTEGER)
	
	$ds.addRow( [1,2,3,4] )
	$ds.addRow( [1,2,3,4] )
	$ds.addRow( [1,2,3,4] )
	$ds.addRow( [1,2,3,4] )
	$ds.addRow( [1,2,3,4] )
	$ds.addRow( [1,2,3,4] )
	$ds.addRow( [1,2,3,4] )
	
	var $frm = solutionModel.getForm('frm_probando_datasets')
	
	var $tipos = [JSColumn.INTEGER, JSColumn.INTEGER, JSColumn.INTEGER, JSColumn.INTEGER]
	$frm.dataSource = $ds.createDataSource('DS_PRUEBA', $tipos)
	
	forms.frm_probando_datasets.controller.recreateUI()
	forms.frm_probando_datasets.controller.show()
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"86217A68-8FEF-48BF-A640-6BAF5D7E5864"}
 */
function onShow_dataset_query(firstShow, event) {
	var $sql = 'SELECT med_codigo as a, med_apenom as b, med_feccontra as c, med_domiciprof as d FROM tbc_medicos '
		//+
	//'WHERE med_codigo = ?'
	var $args = [445450]
	var $ds = databaseManager.getDataSetByQuery('maestros',$sql,null,-1)
	
	var $frm = solutionModel.getForm('frm_probando_datasets')
	
	var $tipos = [JSColumn.INTEGER, JSColumn.TEXT, JSColumn.INTEGER, JSColumn.TEXT]
	$frm.dataSource = $ds.createDataSource('DS_PRUEBA_2', $tipos)
	
	forms.frm_probando_datasets.controller.recreateUI()
	forms.frm_probando_datasets.controller.show()
}
