/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"16E69DA0-AD65-4A36-9E4A-ECF0BFD9D9FD"}
 */
function onShow(firstShow, event) {
	foundset.clear()
	var query ='select HIST_CAB.HistCabNroUnico, HIST_CAB.HistCabApellNom, HIST_CAB.HistCabFechaNac, HIST_CAB.HistCabTipoDoc, HIST_CAB.HistCabNroDoc from tbc_obras_rrhh '
        query +='left join tbc_hist_cab HIST_CAB on HIST_CAB.HistCabObra=tbc_obras_rrhh.Obr1 '
        query +='where ObrPreocup=1 and HIST_CAB.HistCabEsPersonal=1 '
        query +='order by HIST_CAB.HistCabApellNom'
    var dataset = databaseManager.getDataSetByQuery('rrhh',query,null,-1)
	if(dataset.getMaxRowIndex()>0){
		for(var i=1;i<dataset.getMaxRowIndex();i++){
			foundset.newRecord()
			foundset.nrounico=dataset.getValue(i,1)
			foundset.apeynom=dataset.getValue(i,2)
			foundset.fechanac=dataset.getValue(i,3)
			foundset.tipodoc=dataset.getValue(i,4)
			foundset.nrodoc=dataset.getValue(i,5)
		}
		databaseManager.saveData()
	}
    foundset.loadAllRecords()
}
