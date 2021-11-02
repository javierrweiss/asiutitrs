/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"796EEED3-94BF-48E0-9DBA-9984723129D7"}
 */
function onAction_Scroll_Interven(event) {
	//globals.vNomencla=forms.frm_scroll_nomenclador.nome_codigo
	//var win = application.getWindow()
	//win.hide()
	//application.closeAllWindows();
    //controller.show(null);
	var name=application.getActiveWindow()
	name.getName()
	var $win=application.getWindow(name.getName())
	if($win!=null){
		$win.hide()
		$win.destroy()
	}
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"361BDDC7-347F-4181-9E65-8A7AE83DB6C6"}
 */
function onShow_scroll_interven(firstShow, event) {
	/**
	if(globals.vAplicaFiltro){
		if (globals.vEsHemodinamia=="Si"){
			application.output("paso 3")
			databaseManager.addTableFilterParam("maestros","tbc_interven","itv_tipestudio","=",2)
		}else{
			databaseManager.addTableFilterParam("maestros","tbc_interven","itv_tipestudio","in",[0,1])
		}
		
	}
	*/
}

/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"095DD8E4-BC5B-4A0B-8366-9AD942417A2D"}
 */
function onLoad_frm_scroll_medicos_personal(event) {
	//var query = "select per_legajo, per_apelnom from tbc_personal_login";
	//var query = "select med_codigo, med_apenom from tbc_medicos";
	var query = "select med_codigo, med_apenom from tbc_medicos union select per_legajo, per_apelnom from tbc_personal_login";
	//var query = "insert into tbc_medicos_personal select med_codigo, med_apenom from tbc_medicos";
	//var args = new Array();
	//args[0] = globals.vHiscli;
	var dataset = databaseManager.getDataSetByQuery("validalegajo",query,null,10000)
	dataset.sort(1, true)
	//forms.frm_scroll_medicos_personal.foundset.clear()
	application.output(dataset.getMaxRowIndex())
	application.output(dataset.getValue(99,1))
	application.output(dataset.getValue(99,2))
	forms.frm_scroll_medicos_personal.foundset.loadRecords(dataset)
	for(var i=1;i<dataset.getMaxRowIndex();i++){
		foundset.newRecord()
		foundset.per_legajo=dataset.getValue(i,1)
		foundset.per_apelnom=dataset.getValue(i,2)
		//application.output(foundset.codigo)
	}
	application.output(forms.frm_scroll_medicos_personal.foundset.setSelectedIndex(1))
	databaseManager.saveData(forms.frm_scroll_medicos_personal.foundset)
}
