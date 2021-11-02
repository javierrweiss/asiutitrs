/**
 * @properties={typeid:35,uuid:"33CAFE17-1B12-46DC-A0CA-2B24902229C1",variableType:-4}
 */
var f_egresado_vivo_UCI = null;

/**
 * @properties={typeid:35,uuid:"0D944DAC-0768-4C93-84AF-E899450FE2F2",variableType:-4}
 */
var isValid = true;
/**
 * @properties={typeid:35,uuid:"7BF8E7A1-2C8C-4AE9-B146-78ED84532A21",variableType:-4}
 */
var $isDirty = false;


/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"55D0E4C1-DBEB-4E06-992C-FFE146FD809D",variableType:4}
 */
var f_egreso_vivo_uci = 0

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"973EB6A6-1B70-4055-8471-A4219403A4BE",variableType:93}
 */
var f_fecha_egreso_uci =  null

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"8A6598F6-F912-4D10-9D55-1DFA9155CDAD",variableType:93}
 */
var f_fecha_egreso_sanatorio = null

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"8BE7AAB3-FEDB-44B7-9D08-3BDEBBC41343"}
 */
var f_derivacion = ''

/**
 * @properties={typeid:24,uuid:"2C33020B-D1B1-4724-8D20-128E80C6101E"}
 */
function guardarDatos(){
	//FICHA FINAL
//	asivm_fichakine_cierre.fecha_fin = application.getServerTimeStamp()
//	asivm_fichakine_cierre.fecha_fin_ventilacion=null //no hay ventilacion, ficha de observacion sin soporte
	asivm_fichakine_cierre.egreso_vivo_uci = f_egreso_vivo_uci
	asivm_fichakine_cierre.fecha_egreso_uci = f_fecha_egreso_uci
	asivm_fichakine_cierre.fecha_egreso_sanatorio = f_fecha_egreso_sanatorio
	asivm_fichakine_cierre.derivacion =utils.stringReplace(f_derivacion,'\n',',') 
	
	//estado
	asivm_fichakine_cierre.estado = 0 // Sin uso
}
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"DC2848E3-1930-443C-950F-9AC46020E095"}
 */
function onActionCierreDefinitivo(event) {
	
	var res = globals.DIALOGS.showQuestionDialog('¡Atención!', '¿ Esta seguro que desea cerrar la ficha?', 'Si', 'No');
	if (res == 'Si') {

		if ($isDirty) {

			if (isValidDataForm()) {
				if(asivm_fichakine_cierre.fecha_fin==null){
					asivm_fichakine_cierre.newRecord();
					scopes.globals.InicializarDatosDeRelacion(asivm_fichakine_cierre, "desal", "tbl_ficha_cierre_kine")
					var $_fechaHoraRegistro= application.getServerTimeStamp()
					asivm_fichakine_cierre.histcli = asivm_rel_buscar_admision.adm_histclin;
					asivm_fichakine_cierre.histcli_unico = asivm_rel_buscar_admision.adm_histclinuni
					asivm_fichakine_cierre.fecha_fin=$_fechaHoraRegistro
					asivm_fichakine_cierre.fecha_fin_ventilacion=null
					asivm_fichakine_cierre.vm_extub_fecha=null
					asivm_fichakine_cierre.vm_extub_no_programada=null
					try {
						guardarDatos();
						databaseManager.startTransaction();
						var resultSave = databaseManager.saveData(asivm_fichakine_cierre.getRecord(1));
					} catch (e) {
						plugins.dialogs.showInfoDialog("Error al procesar los datos cargados. Avise a Sistemas, por favor!",e.toString(),"ok")
						// TODO: handle exception
						//plugins.Log.error("ERROR PERSISTENCIA - ", e.message);
					}
					
					if (resultSave == true) {
						databaseManager.commitTransaction();
						globals.DIALOGS.showInfoDialog("Resultado", "La Ficha de Cierre se guardo correctamente.", "Aceptar");
//						editablePaciente(false);	
//						imprimir(asiucotrs_rel_tbc_hojauco_to_tbc_hojauco.huchiscli, asiucotrs_rel_tbc_hojauco_to_tbc_hojauco.hucfecha, asiucotrs_rel_tbc_hojauco_to_tbc_hojauco.huchora);
						
						$isDirty = false;
						var $win = application.getWindow(application.getActiveWindow().getName());
						if ($win != null) {
							$win.hide();
							$win.destroy();
						}
						
					} else {
						var error1 = ''
						var error2 = ''
						var array = databaseManager.getFailedRecords()
						for (var i = 0; i < array.length; i++) {
							var record = array[i];
							var jstable = databaseManager.getTable(record);
							var tableSQLName = jstable.getSQLName();
							error1 = 'Error de Grabación en Tabla:' + tableSQLName + ' en server:' + jstable.getServerName() + ' falló la grabación. Avise urgente a Sistemas, por favor!'
							error2 = 'Error en grabación ' + record.exception;
							if (record.exception.getErrorCode() == ServoyException.RECORD_VALIDATION_FAILED) {
								// exception thrown in pre-insert/update/delete event method
								var thrown = record.exception.getMessage()
								//plugins.dialogs.showErrorDialog("Error de grabación","Record validation failed: " + thrown)
							}
						}

						databaseManager.rollbackTransaction()

						if (error1 != '') {
							globals.DIALOGS.showErrorDialog("Error de grabación", "Record validation failed: " + thrown)
							globals.DIALOGS.showErrorDialog("Error en grabacion de Histórico", error1, "Aceptar")
							globals.DIALOGS.showErrorDialog("Error en grabacion de Histórico", error2, "Aceptar")
						}
						globals.DIALOGS.showErrorDialog("Error en grabación", "Se ha producido un error de grabación. " + '\n' + "Avise a Sistemas, por favor.", "Aceptar")
					}
			}
		}
		} else {
			globals.DIALOGS.showWarningDialog("Atención!", "No hay datos para guardar.", "Aceptar")
		}
	} 
	// TODO Auto-generated method stub
}

/**
 * @properties={typeid:24,uuid:"7F479B28-9408-43D5-9070-133C24F13A2F"}
 */
function isValidDataForm() {
	isValid = true;
	var messageError = "No ha sido posible guardar el Cierre Definitivo de la ficha. Corrija los siguientes errores y vuelva a intentar."		//var borderError = 'LineBorder,1,#ff0000';
	//  INICIO VALIDADOR MASIVO GENERICO 
		globals.validateRequired("Ficha_Final",true,'multi_',false,0)
		globals.validateRequired("Ficha_Final",true,'txt_',false,0)
		globals.validateRequired("Ficha_Final",true,'cbo_',false,0)

	if (!isValid) {
		globals.DIALOGS.showWarningDialog("¡Atención!", messageError, "Aceptar")
	}
	
	return isValid;
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
 * @properties={typeid:24,uuid:"7DF36B63-BC3F-4C1D-9AAA-5D58F4B86AF4"}
 */
function onDataChangeDatoCambio(oldValue, newValue, event) {
	$isDirty=true
	return true
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"A6D47C07-3841-4FD9-9416-1566A410A585"}
 */
function onActionSequence(event) {
	// TODO Auto-generated method stub
	var tabseq = forms.Ficha_Final.controller.getTabSequence();
	if (tabseq.length > 1 && isNaN(event)) {
	var secActual= tabseq.indexOf(event.getElementName());
	    forms.Ficha_Final.controller.focusField(tabseq[secActual+1], true);
	}
}
/**
 * @properties={typeid:24,uuid:"328FC53B-FDDA-46BD-B394-FC9BF47CA919"}
 */
function cargarDatos(){
	f_egreso_vivo_uci = asivm_fichakine_cierre_sin_soporte.egreso_vivo_uci
	f_fecha_egreso_uci = asivm_fichakine_cierre_sin_soporte.fecha_egreso_uci
	f_fecha_egreso_sanatorio = asivm_fichakine_cierre_sin_soporte.fecha_egreso_sanatorio
	f_derivacion=asivm_fichakine_cierre_sin_soporte.derivacion
	
//	f_egreso_vivo_uci=asivm_fichakine_cierre.egreso_vivo_uci
//	f_fecha_egreso_uci=asivm_fichakine_cierre.fecha_egreso_uci
//	f_fecha_egreso_sanatorio=asivm_fichakine_cierre.fecha_egreso_sanatorio
//	f_derivacion = asivm_fichakine_cierre.derivacion
}
/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"B526710F-B17F-4C17-93B3-FE6F783D6C51"}
 */
function onShowFichaFinal(firstShow, event) {
	// TODO Auto-generated method stub
	var funcion = globals.habilitarCampos;
	globals.modificarCampos("Ficha_Final", funcion,'txt_');
	globals.modificarCampos("Ficha_Final", funcion,'cbo_');
	globals.modificarCampos("Ficha_Final", funcion,'multi_')
	
	f_egresado_vivo_UCI = null;
	isValid = true;
	$isDirty = false;
	f_egreso_vivo_uci = 0
	f_fecha_egreso_uci =  null
	f_fecha_egreso_sanatorio = null
	f_derivacion = ''
		
	if(asivm_fichakine_cierre_sin_soporte!=null && asivm_fichakine_cierre_sin_soporte.getSize()==1){ //|| (dsHojaUco.getMaxRowIndex() == 1 && wCerrada == 1)
		cargarDatos()
		var dias = globals.contar_dias(asivm_fichakine_cierre_sin_soporte.fecha_fin,application.getServerTimeStamp())
		if(globals.Srv_Login_Sanatorio_vLegajo!='118319' && dias>=1){
//		if(dias>=1){
			var funcion2 = globals.setearEnModoLecturaCampos;
			globals.modificarCampos("Ficha_Final", funcion2,'txt_');
			globals.modificarCampos("Ficha_Final", funcion2,'cbo_');
			globals.modificarCampos("Ficha_Final", funcion2,'multi_')
			
			elements.btn_confirmar_cierre.enabled=false
		}else{
			elements.btn_confirmar_cierre.enabled=true
		}
		
//		elements.btn_confimar_cierre.enabled=false
		application.updateUI();
	}
}
