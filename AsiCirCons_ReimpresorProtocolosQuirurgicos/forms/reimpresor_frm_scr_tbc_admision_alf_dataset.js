/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"118F25B0-6BC0-4BD8-888C-C820723D3FA4"}
 */
var fegreso = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"AA43A637-96FC-43E8-87BA-FEA026762518"}
 */
var fingreso = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"DCA3480D-3006-4852-B23A-D3C45EBB0D09"}
 */
var fcama = '';

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"D0C84065-EA5D-40AF-BB2C-7E875C28714B",variableType:4}
 */
var fhabi = 0;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"6E46A0BA-222E-4637-8CC6-704886317E84"}
 */
var fapeynom = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"2CD85377-71E5-4CF3-A802-6EE1F1967CF4"}
 */
var fhiscli_edit = '';

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"F33A60EE-1E55-4A4F-B882-3E8D7F8BD8FD"}
 */
function onShow_reimpresor_frm_scr_admision_alf_dataset(firstShow, event) {
	creoDatasetInternadosAlfabetico()
}

/**
 * @properties={typeid:24,uuid:"D0BE1B8E-A9D8-47C2-A809-CEA9D206A616"}
 */
function creoDatasetInternadosAlfabetico() {
	var $SQL="select adm_histclin, adm_apelnom, adm_habita, adm_cama, adm_fecing, adm_fecaltaefec from tbc_admision_scroll where Adm_ApelNom >='"+globals.vAlfa+" ' and Adm_ApelNom <='"+globals.vAlfa+"Z' order by Adm_ApelNom asc"
    var frm_ds = databaseManager.getDataSetByQuery("admisionscroll", $SQL, null, 500);
    
   	var $ds = databaseManager.createEmptyDataSet()
	$ds.addColumn('fhiscli_edit',1,JSColumn.TEXT)   
	$ds.addColumn('fapeynom',2,JSColumn.TEXT)
	$ds.addColumn('fhabi',3,JSColumn.NUMBER)
	$ds.addColumn('fcama',4,JSColumn.TEXT)
	$ds.addColumn('fingreso',5,JSColumn.TEXT)
	$ds.addColumn('fegreso',6,JSColumn.TEXT)
			
	var $max= frm_ds.getMaxRowIndex()
	var $hiscli_edit=' ';
   	var $largo_edit=0;
   	var $fingreso=' ';
   	var $fegreso=' ';
	if ($max > 0){
		for(var i=1;i<=$max;i++){
			$hiscli_edit=frm_ds.getValue(i,1)
			if($hiscli_edit!=null&&$hiscli_edit!=''){
				$largo_edit=$hiscli_edit.length
				$hiscli_edit=$hiscli_edit.toString().substr(0,$largo_edit-1)+"/"+$hiscli_edit.toString().substr($largo_edit,1)
			}
			$fingreso=frm_ds.getValue(i,5)
			$fegreso=frm_ds.getValue(i,6)
			$ds.addRow([$hiscli_edit,frm_ds.getValue(i,2),frm_ds.getValue(i,3),frm_ds.getValue(i,4),$fingreso,$fegreso])
		}
    }

	var $tipos = [JSColumn.TEXT,JSColumn.TEXT,JSColumn.NUMBER, JSColumn.TEXT,JSColumn.TEXT,JSColumn.TEXT]


	var $frm = solutionModel.getForm('reimpresor_frm_scr_tbc_admision_alf_dataset')
	$frm.dataSource = $ds.createDataSource('Ds_Admision', $tipos)
	forms.reimpresor_frm_scr_tbc_admision_alf_dataset.controller.recreateUI()
}

/**
 * Handle record selected.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"7B76A8CA-8EBA-4953-B818-9233F604FCD9"}
 */
function onRecordSelection_reimpresor_frm_scr_tbc_admision_alf_datase(event) {
	globals.vHiscli=foundset['fhiscli']
	globals.vHisclin=foundset['fhiscli']
	globals.vHisclin_edit=globals.vHisclin.toString()
	var largo = globals.vHisclin_edit.length
	globals.vHisclin_edit=globals.vHisclin_edit.substr(0,largo-1)+'/'+globals.vHisclin_edit.substr(largo-1,1)
	globals.vNameSolucion=application.getSolutionName()
	globals.vFormulario="reimpresor_tab_scr_pacientes"
	if(reimpresor_vs_to_tbc_cirugint.getSize()>0){
		forms.frm_consulta_protocolo.controller.show()
	}else{
		globals.DIALOGS.showInfoDialog("Sin Cirugías","El paciente seleccionado no tiene Cirugías cargadas","Ok")
	}
}
