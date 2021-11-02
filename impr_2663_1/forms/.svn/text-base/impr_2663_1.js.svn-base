/**
 * @properties={typeid:35,uuid:"82D09C2B-E0E0-44E8-ACBF-BBEE27D75185",variableType:-4}
 */
var frm_aux = new Array();

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"CE202ADF-2443-41AA-8E8D-7B65650E90B9"}
 */
var frm_foundset = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"A1B24709-69F0-4190-A450-9F8128E70C46"}
 */
var frm_impresion = '';

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"2D4E5EDA-F60E-430E-B145-23CACC7349E5"}
 */
function onAction_imprimir(event) {
	var aArgs = new Array();
    var SQL = "select rtf_html " 
        +"from consentimientos "
		+"where tipo = 'IMPR-0412-1' "	
    frm_aux = databaseManager.getDataSetByQuery("bases_auxiliares", SQL, aArgs, -1);
    var max = frm_aux.getMaxRowIndex()
	if (max != 0){
		var aux_txt 
		aux_txt = frm_aux.getValue(1,1)
		//Procesar y crear nuevo Dataset
	    var $ds2 = databaseManager.createEmptyDataSet()
		$ds2.addColumn('aux_txt',1,JSColumn.TEXT) 
		$ds2.addRow([aux_txt])
		
		//Crear DataSource desde Dataset $ds2
		var $tipos = [JSColumn.TEXT]

		var $frm = solutionModel.getForm('impr_2663_2')
		$frm.dataSource = $ds2.createDataSource('Ds_Aux1', $tipos)
		//forms.impr_2663_2.controller.recreateUI()
		
		var $params = {
			pr_titulo: 'Titulo'
		}
		plugins.jasperPluginRMI.runReport(forms.impr_2663_2.foundset,'2663-1.jasper',null,plugins.jasperPluginRMI.OUTPUT_FORMAT.VIEW,$params)
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"D87C80D4-6F2A-4B7A-BB0F-BCACA7F029B2"}
 */
function onAction_imprimir2(event) {
	frm_foundset = 'IMPR-0412-1';
	frm_impresion = 'impr_rtf_21';
	printRoutine(true);
}

/**
 * @param event
 *
 * @properties={typeid:24,uuid:"A735DB2C-F222-407B-B18F-AF2C7447CA81"}
 */
function onAction_imprimir3(event) {
	frm_foundset = 'IMPR-0412-2';
	frm_impresion = 'impr_rtf_22';
	printRoutine(true);
}

/**
 * 
 * @param event
 *
 * @properties={typeid:24,uuid:"4905A816-627C-42CA-A061-9FFDFECBD435"}
 */
function onAction_imprimir4(event) {
	frm_foundset = 'IMPR-0412-3';
	frm_impresion = 'impr_rtf_22';
	printRoutine(true);
}

/**
 * 
 * @param event
 *
 * @properties={typeid:24,uuid:"400A852E-A63C-4843-B1C9-97B4D5390586"}
 */
function onAction_imprimir5(event) {
	frm_foundset = 'IMPR-2601';
	frm_impresion = 'impr_rtf_23';
	printRoutine(true);
}

/**
 * 
 * @param event
 *
 * @properties={typeid:24,uuid:"5E7A8AD7-D1C8-4244-9182-3B3D45FC511A"}
 */
function onAction_imprimir6(event) {
	frm_foundset = 'IMPR-2679';
	frm_impresion = 'impr_rtf_24';
    forms.impr_rtf_24.frm_titulo = 'EVALUACIÓN DEL PERSONAL'
	printRoutine(true);
}

/**
 * 
 * @param event
 *
 * @properties={typeid:24,uuid:"A08A925D-AF2C-4DC2-9FA3-350EA71C2E0B"}
 */
function onAction_imprimir7(event) {
	frm_foundset = 'IMPR-2681';
	frm_impresion = 'impr_rtf_24';
	forms.impr_rtf_24.frm_titulo = 'SERVICIO DE MEDICINA DEL TRABAJO'
	printRoutine(true);
}

/**
 * 
 * @param event
 *
 * @properties={typeid:24,uuid:"E68BD0CE-96EB-4EFC-9B61-DF40F041521B"}
 */
function onAction_imprimir8(event) {
	frm_foundset = 'IMPR-393';
	frm_impresion = 'impr_rtf_25';
	printRoutine(true);
}

/**
 * 
 * @param event
 *
 * @properties={typeid:24,uuid:"3770DF5C-15A4-4AE3-9BFF-1BD3B45A9F54"}
 */
function onAction_imprimir9(event) {
	frm_foundset = 'IMPR-2682';
	frm_impresion = 'impr_rtf_26';
	forms.impr_rtf_26.frm_titulo = 'PEDIDO DE INFORME'
	printRoutine(true);
}

/**
 * 
 * @param event
 *
 * @properties={typeid:24,uuid:"474C3AFA-99C7-42D6-93B9-81BF946C5971"}
 */
function onAction_imprimir10(event) {
	frm_foundset = 'IMPR-2650';
	frm_impresion = 'impr_rtf_27';
	printRoutine(true);
}

/**
 * 
 * @param event
 *
 * @properties={typeid:24,uuid:"6DD3BA2D-F54F-45B3-8652-268C1E2BFBE0"}
 */
function onAction_imprimir11(event) {
	frm_foundset = 'IMPR-2660';
	frm_impresion = 'impr_rtf_28';
	printRoutine(true);
}

/**
 * @AllowToRunInFind 
 * 
 * @param rec
 *
 * @properties={typeid:24,uuid:"576FF6AA-C8B3-4699-B5B1-D85623735B8A"}
 */
function printRoutine(rec) {
	
	var oneRecord = rec;
	if(!oneRecord) 
	{
	    oneRecord = false
	}	

	forms[frm_impresion].foundset.find()
	forms[frm_impresion].foundset['tipo'] = frm_foundset
	forms[frm_impresion].foundset.search()
	forms[frm_impresion].frm_campoRTF = forms[frm_impresion].foundset.rtf_html
	forms[frm_impresion].sub_buildReport()
	//forms[frm_impresion].controller.showPrintPreview(oneRecord)
	forms[frm_impresion].controller.print(oneRecord,false)
}
