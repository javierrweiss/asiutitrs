/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"4E4618DB-4A63-4A54-AD1E-E27FFDE09C4C"}
 */
var fBusqueda = '';

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"7B409BE7-AAF3-41D9-A9FA-3DE33996FF4F"}
 * @AllowToRunInFind
 */
function onShow_muestro_preocupacionales(firstShow, event) {
	//foundset.clear()
	/*
	var query ="select HIST_CAB.HistCabNroUnico from tbc_obras_rrhh "
        query +="left join tbc_hist_cab HIST_CAB on HIST_CAB.HistCabObra=tbc_obras_rrhh.Obr1 "
        query +="where ObrPreocup=1 and HIST_CAB.HistCabEsPersonal=1 "
        query +="and HIST_CAB.HistCabApellNom>='BRITES ' and HIST_CAB.HistCabApellNom<='BRITESZ'"
        query +="order by HIST_CAB.HistCabApellNom"
       // query +='order by HIST_CAB.HistCabApellNom'
   // plugins.dialogs.showInfoDialog("genero dataset","dataset")
    var dataset = databaseManager.getDataSetByQuery('rrhh',query,null,-1)
	//plugins.dialogs.showInfoDialog("cargo dataset","loadrecords dataset")
	foundset.loadRecords(dataset)
	*/
	databaseManager.refreshRecordFromDatabase(foundset,-1)
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"A7D19BC5-E29A-4AE6-921A-70F61F463C2D"}
 * @AllowToRunInFind
 */
function onAction_buscar(event) {
	
	if(fBusqueda!=''&&fBusqueda!=null){
		if(foundset.find()){
			foundset.nro_unico=utils.stringToNumber(fBusqueda)
			foundset.newRecord()
			foundset.apellnom= '#%' + fBusqueda + '%'
			foundset.newRecord()
			foundset.nro_doc=utils.stringToNumber(fBusqueda)
			foundset.search()
			elements.histcabapellnom.requestFocus()
		}
	}
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"F270496E-7CD1-44F5-9230-39223E337B50"}
 */
function onAction_histcab_rrhh(event) {
	globals.gHistCabNroUnico=foundset.nro_unico
	var name=application.getActiveWindow()
	name.getName()
	var $win=application.getWindow(name.getName())
	if($win!=null){
		$win.hide()
		$win.destroy()
	}
	//application.closeAllWindows()
}

/**
 * Handle hide window.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"B45DA887-0DFF-406A-881D-AE838B769C98"}
 */
function onHide_histcab_rrhh(event) {
	//if(globals.gHistCabNroUnico==0){
		//return false
	//}else{
		var name=application.getActiveWindow()
		name.getName()
		var $win=application.getWindow(name.getName())
		if($win!=null){
			$win.hide()
			$win.destroy()
		}
		return true
	//}
}
