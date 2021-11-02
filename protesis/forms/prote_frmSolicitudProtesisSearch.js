/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"12F8A942-2173-44D8-8E84-69300325EA7D",variableType:4}
 */
var $countFilter = 0;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"2F8D2A65-C250-4068-A4BB-E990024B63C9"}
 */
var f_paciente = null;

/**
 * @properties={typeid:35,uuid:"D52426B4-B2B9-4FEB-A6F0-D4E29F9C0C46",variableType:-4}
 */
var f_cerrarForm = false;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"6076BB7C-B706-4A14-A3E9-CDF21371DF18",variableType:93}
 */
var f_fechaHasta = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"E9A04197-75E3-43AD-AEAB-BB1D00552D7B",variableType:93}
 */
var f_fechaDesde = null;

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"4FB1BA7A-8D6F-4D0A-A648-F6335B2DF6E3"}
 * @AllowToRunInFind
 */
function onAction_procesar(event) {
	
	if(validDataForm()){
		
		$countFilter = 0;
		var fechaDesde;
		var fechaHasta;
		if(f_fechaDesde != null && f_fechaHasta != null){
			fechaDesde = globals.FormatearFecha(f_fechaDesde,"AAAAMMDD");
			fechaHasta = globals.FormatearFecha(f_fechaHasta,"AAAAMMDD");
		}
		
		var $sql = "SELECT sp.id,sp.hist_clin_unica,sp.fecha_solicitud,sp.paciente,sp.medico,sp.tipo_prioridad prioridad,sp.tipo_paciente,sp.nro_solicitud,sp.intervencion\
				,sp.hist_clin,sp.med_per_cod,sp.cod_intervencion,sp.medpertipoie\
				FROM prote_solicitud_protesis sp\
				WHERE 1=1";
				if(f_fechaDesde != null && f_fechaHasta != null){
					$sql += " and sp.fecha_solicitud >= '" + fechaDesde + "'";
					$sql += " and sp.fecha_solicitud <= '" + fechaHasta + "'";
					$countFilter +=1;
				}
						 
				var paciente = utils.stringTrim(f_paciente)
				if(f_paciente != null && paciente != ''){
					$sql += " and paciente ilike '%" + paciente + "%'";
					$countFilter += 1;
				}
				//+ ' order by cg.CirgProtocolo';
				
		if($countFilter >0){
			var $ds = databaseManager.getDataSetByQuery('desal',$sql,null,-1);
			//$ds.sort(2,true);
			var maxRows = $ds.getMaxRowIndex();
			elements.lblResultado.text = 'Resultado: ' + maxRows + ' items';
			
			var $frm = solutionModel.getForm('prote_tblSolicitudProtesis');
			var $tipos = [JSColumn.TEXT,JSColumn.TEXT,JSColumn.DATETIME,JSColumn.TEXT,JSColumn.TEXT,JSColumn.TEXT,JSColumn.TEXT,JSColumn.TEXT,JSColumn.TEXT,JSColumn.TEXT,JSColumn.TEXT,JSColumn.TEXT,JSColumn.INTEGER];
			$frm.dataSource = $ds.createDataSource('prote_tblSolicitudProtesis', $tipos);
	
			forms.prote_tblSolicitudProtesis.controller.recreateUI();	
			elements.tabless.tabIndex=2;
			$countFilter = 0;
			forms.prote_tblSolicitudProtesis.elements.btn_detalle.requestFocus();
			
		}
		else{
			globals.DIALOGS.showWarningDialog("Atención","Debe ingresar al menos un criterio de filtro.","Aceptar")
			elements.txt_paciente.requestFocus();
		}
		
	}
}

/**
 * @properties={typeid:24,uuid:"F32CDB81-44BE-4DA1-A7D5-9652740E60CF"}
 */
function validDataForm() {
	
	var isValid = true;	
	var messageError = "No ha sido posible realizar la consulta. Corrija los siguientes errores y vuelva a intentar."
	
		
	if (f_paciente != null && f_paciente != "" && utils.stringTrim(f_paciente).length < 3){
		messageError += "\nDebe ingresar al menos 3 caracteres en nombre de paciente.";        
        isValid = false;
	}
	
	if (f_fechaDesde != null && f_fechaHasta == null){
		messageError += "\nDebe ingresar fecha hasta.";        
	    isValid = false;
	}
	
	if (f_fechaHasta != null && f_fechaDesde == null){
		messageError += "\nDebe ingresar fecha desde.";        
        isValid = false;
	}
	
	if(f_fechaDesde != null && f_fechaHasta != null){
		if (f_fechaHasta < f_fechaDesde){
			messageError += "\nLa fecha hasta debe ser mayor o igual a la fecha desde.";        
	        isValid = false;
		}
	}
		
	if(!isValid){
		globals.DIALOGS.showWarningDialog("Atención",messageError,"Aceptar")
		elements.txt_paciente.requestFocus();
	}
	
	return isValid;
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"83BB2ECC-20FA-48D8-A361-2F7252182127"}
 */
function onAction_limpiarForm(event) {
	f_fechaDesde = null;
	f_fechaHasta = null;
	f_paciente = null;
	$countFilter = 0;
	elements.lblResultado.text = 'Resultado:';
		
	if(forms.prote_tblSolicitudProtesis.foundset.getSize() > 0){
		forms.prote_tblSolicitudProtesis.foundset.clear();		
	}
	
	elements.txt_paciente.requestFocus();
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"0514D5AD-A3E6-497E-AB2C-CF0C403CCE44"}
 */
function onShow_inicializarForm(firstShow, event) {
	f_cerrarForm = false;
	
	//onAction_limpiarForm(event);
	if(forms.prote_tblSolicitudProtesis.foundset.getSize() > 0)
		forms.prote_tblSolicitudProtesis.elements.btn_detalle.requestFocus();
	else
		elements.txt_paciente.requestFocus();
	
	// control del elemento por perfil	    		
	var $form = controller.getName();
	//globals.consulta_288_controlarElementos($form);
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"F6D1B57D-CC69-420B-BDBE-7678A2A4B927"}
 */
function onAction_fechaDesde(event) {
	elements.cld_fechaHasta.requestFocus();
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"954F8DDA-F632-4914-8E9E-00DAC1553823"}
 */
function onAction_fechaHasta(event) {
	elements.btn_procesar.requestFocus();
}

/**
 * Handle hide window.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"DF8B2F10-E84A-48B5-98FC-FAC9B1F47C39"}
 */
function onHide_consultaProtocolo(event) {
	if(f_cerrarForm){
		var $win = application.getWindow(application.getActiveWindow().getName());
		if($win != null){
			$win.hide();
			$win.destroy();
		}
	}
	return f_cerrarForm;
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"BD50ACDF-E7ED-4826-B17B-EEC5EDABC1D1"}
 */
function onAction_cerrar(event) {
	f_cerrarForm = true;
	onHide_consultaProtocolo(event);
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"7CA183B3-6D1A-4F5D-9C77-5E5769045B4D"}
 */
function onAction_txtPaciente(event) {
	elements.btn_procesar.requestFocus();
}
