/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"995F381B-23BF-4975-8A4C-93C27F97F2A7"}
 */
function onShow(firstShow, event) {
	// TODO Auto-generated method stub
	var $sql='SELECT A.Adm_HistClin as f_histclin, A.Adm_ApelNom as admin_patologia_nombre, A.Adm_Cama as admin_patologia_cama, A.Adm_Habita as admin_patologia_habitacion,'  
	          +'M.Pat_Descrip as admin_patologia_patoling, p.Pat_Descrip as admin_patologia_patolact,' 
			  +'n.Pat_Descrip as admin_patologia_patolegre '
                 +'FROM asistencial.tbc_ADMISION A '
                 +'LEFT JOIN maestros.tbc_PATOLOGIA M ON A.Adm_PatolIng = M.Pat_Codi '
                 +'LEFT JOIN maestros.tbc_PATOLOGIA p ON A.Adm_PatolAct = p.Pat_Codi '
                 +'LEFT JOIN maestros.tbc_PATOLOGIA n ON A.Adm_PatolEgre = n.Pat_Codi '
                 +'WHERE A.Adm_fecing>20210101';
	application.output($sql)
    var $ds = databaseManager.getDataSetByQuery('asistencial',$sql,null, -1)
	var $frm = solutionModel.getForm('form_admision_por_patologias');
	var $tipos=[JSColumn.INTEGER, JSColumn.TEXT, JSColumn.TEXT, JSColumn.TEXT, JSColumn.TEXT, JSColumn.TEXT, JSColumn.TEXT];
	$frm.dataSource = $ds.createDataSource('form_admision_por_patologias', $tipos)
	forms.form_admision_por_patologias.controller.recreateUI()
	forms.form_admision_por_patologias.controller.show()
}
