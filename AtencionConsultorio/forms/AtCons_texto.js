/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"77FD5235-F222-4C6F-98A3-68B1A757FF9D",variableType:-4}
 */
var f_codinom = new Array();

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"71C8E373-4939-4531-9E92-3D74AD45BC7A",variableType:-4}
 */
var f_tiponom = new Array();

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"0D0A81F0-C621-414A-8BFC-E48460C09BD0",variableType:-4}
 */
var f_pedido = new Array();

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"B5EC93CC-3DB7-4E41-BB5D-C6D412E5B6D3",variableType:-4}
 */
var f_servicio = new Array();

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"45C1C2F4-5407-44D3-BF71-A07676AE57BB",variableType:4}
 */
var f_nroinforme = 0;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"99E611A0-134B-4BED-B576-8B24037F812E"}
 */
var f_informe = ' ';


/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"190F088F-F131-47FE-920C-0844AAD4E895"}
 */
function onAction_grabaInforme(event) {
	var current = forms.AtCons_imapedet.foundset.getSelectedIndexes();
	if(current.length>0){
		forms.AtCons_texto.f_nroinforme=0
		for(var ii=0;ii<current.length;ii++){
			forms.AtCons_imapedet.foundset.setSelectedIndex(current[ii])
			if(forms.AtCons_texto.f_informe.length>0){
				forms.AtCons_imapedet.foundset.imapedetestado=true
				if(ii==0){
					if(forms.AtCons_imapedet.foundset.imapedetnroinforme==0){
						forms.AtCons_texto.f_nroinforme=busco_NroInforme()+1
					}else{
						forms.AtCons_texto.f_nroinforme=forms.AtCons_imapedet.foundset.imapedetnroinforme
					}
				}
			}else{
				forms.AtCons_imapedet.foundset.imapedetestado=false
			}
			forms.AtCons_imapedet.foundset.imapedetnroinforme=forms.AtCons_texto.f_nroinforme
			forms.AtCons_imapedet.foundset.imapedettextoinforme=forms.AtCons_texto.f_informe
			forms.AtCons_imapedet.foundset.imapedipatologico=globals.AtCons_patologico
				
			try {databaseManager.saveData(forms.AtCons_imapedet.foundset.getRecord(current[ii]))}
			catch (msg){
				(plugins.dialogs.showInfoDialog("Error en 'Atender Paciente' al grabar en forms.AtCons_texto",msg.toString(),"ok"))
				//	application.output(msg.rhinoException.getMessage())
			}
			var error1=''
			var error2=''
			var i = 0
			var array = databaseManager.getFailedRecords(forms.AtCons_imapedet.foundset)
			for (i = 0; i < array.length; i++) {
				var record = array[i];
				var jstable = databaseManager.getTable(record);
				var tableSQLName = jstable.getSQLName();
				error1='Error de Grabación en Tabla: ' + tableSQLName + ' en server: ' + jstable.getServerName() + ' falló la grabación. Avise a Sistemas, por favor!'
				error2='Error en grabación '+record.exception;
				if (record.exception.getErrorCode() == ServoyException.RECORD_VALIDATION_FAILED) {
					var thrown = record.exception.getValue()
					plugins.dialogs.showErrorDialog("Error de grabación","Record validation failed: " + thrown)
				}
			}
			if(error1!=''){
				plugins.dialogs.showErrorDialog("Error en grabacion ",error1,"Ok")
				plugins.dialogs.showErrorDialog("Error en grabacion ",error2,"Ok")
				plugins.dialogs.showInfoDialog("Reintentar","Reintente grabar!!")
			}
		}
	}
	elements.btn_graba.enabled=false
	elements.txt_texto.editable=false
	//forms.AtCons_carga_informe.elements.tabless_1.enabled=false
}

/**
 * @properties={typeid:24,uuid:"ECD4D151-B97F-404C-BA18-4FF7EEB5DABC"}
 */
function busco_NroInforme(){
	var query = "select imapedetnroinforme from atcons_imapedet_inf where imapedetservicio = ? and imapedetpedido = ? ";
    var args = new Array();
    args[0]=globals.AtCons_servicio;
    args[1]=globals.AtCons_nroPedido;
    var dataset = new Array();
    dataset = databaseManager.getDataSetByQuery("bases_auxiliares", query, args, 20);
	var retorno_nro=0
	if(dataset.getMaxRowIndex()>0){
		for(var i=1;i<=dataset.getMaxRowIndex();i++){
			if(dataset.getValue(i,1)>retorno_nro){
				retorno_nro=dataset.getValue(i,1)
			}
		}
	}
	return retorno_nro
}
/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"E271EC1C-E05D-4DF2-B42F-2D72CB7FA525"}
 */
function onShow_Atconstexto(firstShow, event) {
	f_informe=null;
}
