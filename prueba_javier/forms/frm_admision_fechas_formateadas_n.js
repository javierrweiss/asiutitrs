/**
 * TODO generated, please specify type and doc for the params
 * @param date_int
 *
 * @properties={typeid:24,uuid:"1A07C3E1-4E9E-4844-A99A-DC51E5A4A1F1"}
 */
function format_date(date_int){
	var dateToStr = date_int.toString();
	return utils.dateFormat(dateToStr,'yyyy MM dd'); 
}


/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"663AD2D8-8BBA-4E45-A83C-F6E27FFD849F"}
 */
function onShow(firstShow, event) {
	// TODO Auto-generated method stub
	var $cols=['f_ad_hclbl', 'f_ad_nombrelbl', 'f_ad_habitacionlbl', 'f_ad_camalbl', 'f_ad_fecinglbl', 'f_ad_fecaltalbl']
	var $ds = databaseManager.createEmptyDataSet(0, $cols);
	var $idx = 1;
	var $record ='';
	while($record!=null){
		$record = forms.frm_src_admision.foundset.getRecord($idx);
		$ds.addRow([$record.adm_histclin, $record.adm_apelnom, $record.adm_habita, $record.adm_cama, format_date($record.adm_fecing), format_date($record.adm_fecaltaefec)]);
		$idx++;
		application.output('indice '+$idx);
		application.output('registro '+$record);
	}
	var $tipos = [JSColumn.INTEGER, JSColumn.TEXT, JSColumn.TEXT,JSColumn.TEXT,JSColumn.TEXT,JSColumn.TEXT]
	var $frm = solutionModel.getForm('frm_admision_fechas_formateadas');
	$frm.dataSource = $ds.createDataSource('admision con fechas',$tipos);
	application.output(controller.getDataSource())
	
	forms.frm_probando_datasets.controller.recreateUI()
	forms.frm_probando_datasets.controller.show()
}
