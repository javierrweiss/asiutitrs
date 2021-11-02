/**
 * Handle record selected.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"B69D9ECD-AFD2-4985-BFE6-36460B68A565"}
 */
function onRecordSelection(event) {
	scopes.globals.AtCons_dieta_cod = dietacodigo
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"3CD48DBE-64B9-4302-AA0D-6027B34282A0"}
 * @AllowToRunInFind
 */
function onShow(firstShow, event) {
//if (firstShow)
//{
/*	atcons_dieta_to_tbc_dieta_cero.find()
   if (scopes.globals.AtCons_dieta_cod != null)   
   {atcons_dieta_to_tbc_dieta_cero.dietacodigo = scopes.globals.AtCons_dieta_cod }
   atcons_dieta_to_tbc_dieta_cero.search()
   controller.loadRecords(atcons_dieta_to_tbc_dieta_cero)
   */
//}
elements.dietadescri1.requestFocus()
}

/**
 * Handle changed data.
 *
 * @param {Number} oldValue old value
 * @param {Number} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"81C51265-696E-4E51-A4CB-CA1592A2C7C2"}
 */
function onDataChange_dieta_busqueda(oldValue, newValue, event) {
for (var i=1 ; i <= atcons_dieta_to_tbc_dieta_cero.getSize(); i++)
{
	atcons_dieta_to_tbc_dieta_cero.setSelectedIndex(i)
	if (atcons_dieta_to_tbc_dieta_cero.dietacodigo == scopes.globals.AtCons_dieta_cod  )
	{
		atcons_dieta_to_tbc_dieta_cero.setSelectedIndex(atcons_dieta_to_tbc_dieta_cero.getSelectedIndex())
		break
	}
}
forms.AtCons_carga.atcons_tbc_reservas_to_tbc_histpac.dietacod = scopes.globals.AtCons_dieta_cod
forms.AtCons_carga.atcons_reservas_to_atcons_histpac_ing.dietacod = scopes.globals.AtCons_dieta_cod
return true
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"0BB927F6-00CC-41B1-AC97-6AFC335102D2"}
 */
function onAction_imprimir(event) {

	forms.AtCons_imp_dieta_table.f_fecha_impresion = application.getServerTimeStamp();
	forms.AtCons_imp_dieta_table.controller.setPageFormat(210,297,10,10,10,10,1,0);
	forms.AtCons_imp_dieta_table.controller.loadRecords(atcons_dieta_vs_to_tbc_dieta_uno)  
	forms.AtCons_imp_dieta_table.controller.print(false,false); 
	// o 
	//forms.AtCons_imp_dieta_table.controller.showPrintPreview(true)  // TODO no hace nada
	// TODO sacar los sig	es solo para probar sin imprimir
/* 
	var fecha_auxi = application.getServerTimeStamp()
	var cual = scopes.globals.TimeToInteger(fecha_auxi, 'hhmmss')
	var $path = 'c:/Infocom/pruebas/'  + 'dieta-tabla-' + scopes.globals.AtCons_dieta_cod + '-' + cual + '.pdf'
	forms.AtCons_imp_dieta_table.controller.print(false,false,plugins.pdf_output.getPDFPrinter($path));   // TODO genera pdf
*/ 
}
