/**
 * @properties={typeid:35,uuid:"D2C28FD6-8CE9-4155-BCD4-4E33B8D4A80B",variableType:-4}
 */
var f_cerrarForm = false;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"E2B8D8C9-C926-4E30-A1D6-898899E7697E",variableType:93}
 */
var f_fechaHasta = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"5AF63947-7B38-443B-821F-03AF81987C00",variableType:93}
 */
var f_fechaDesde = null;

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"59BC42D0-13CE-4CC7-B0D8-F3DE28C83F9E"}
 * @AllowToRunInFind
 */
function onAction_procesar(event) {
	
	if(validDataForm()){
		
	var fechaDesde = globals.FormatearFecha(f_fechaDesde,"AAAAMMDD");
	var fechaHasta = globals.FormatearFecha(f_fechaHasta,"AAAAMMDD");
	
	// Busqueda de inernados
	var sqlInter = 'SELECT bac.PbacHistClinica,adm.Adm_ApelNom\
		FROM tbc_probacab bac\
		left join tbc_admision_scroll adm on adm.Adm_HistClin = bac.PbacHistClinica\
		WHERE bac.PbacTipoPac = 0 and bac.PbacEstado < 9'
		+ ' and bac.PbacFechaPedido >= ' + fechaDesde
		+ ' and bac.PbacFechaPedido <= ' + fechaHasta;
		
    var dsInter = databaseManager.getDataSetByQuery('asistencial',sqlInter,null,-1);
    var maxInter = dsInter.getMaxRowIndex();
    
    // Busqueda de ambulatorios
    var sqlAmbu = 'SELECT bac.PbacHistClinica,cab.HistCabApellNom\
		FROM tbc_probacab bac\
		left join tbc_hist_cab_new cab on cab.HistCabNroUnico = bac.PbacHistClinica\
		WHERE bac.PbacTipoPac > 0 and bac.PbacEstado < 9'
		+ ' and bac.PbacFechaPedido >= ' + fechaDesde
		+ ' and bac.PbacFechaPedido <= ' + fechaHasta;
		
	var dsAmbu = databaseManager.getDataSetByQuery('asistencial',sqlAmbu,null,-1);
	var maxAmbu = dsInter.getMaxRowIndex();
		
	// vista
	var $sql = 'SELECT bac.PbacTipoPac,bac.PbacHistClinica,bac.PbacNroProt,bac.PbacFechaPedido,bac.PbacFechaResul\
				,mat.MateDescrip,bac.PbacCantMuestras,bac.PbacEstado,bac.PbacLocaliza,obras.Obr_RazonSoc\
				FROM tbc_probacab bac\
				left join maestros.tbc_obras obras on obras.Obr_Codigo = bac.PbacObra\
				left join tbc_material mat on mat.MateNumero = bac.PbacMaterial\
				WHERE bac.PbacEstado < 9' 
				+ ' and bac.PbacFechaPedido >= ' + fechaDesde
				+ ' and bac.PbacFechaPedido <= ' + fechaHasta;
	
	var $ds = databaseManager.getDataSetByQuery('asistencial',$sql,null,-1);
	$ds.addColumn('nombre');
	$ds.addColumn('TipoPaciente');
	
	var maxRows = $ds.getMaxRowIndex();
	elements.lblResultado.text = 'Resultado: ' + maxRows + ' items';

	var i;
	var j;
	var nombre = '';
	var historia = '';
	var tipopac = '';
	
	for(i = 1; i <= maxRows; i++){
		
		nombre = '';
		
		if($ds.getValue(i,1) == 0){
			// buscando internado
			for(j = 1; j <= maxInter; j++){
				if($ds.getValue(i,2) == dsInter.getValue(j,1)){
					nombre = utils.stringTrim(dsInter.getValue(j,2));
					historia = convertNumberToLegajo($ds.getValue(i,2));
					tipopac = 'Int.';
					break;
				}
			}
		}
		else{
			
			// buscando ambulatorios
			for(j = 1; j <= maxAmbu; j++){
				if($ds.getValue(i,2) == dsAmbu.getValue(j,1)){
					nombre = utils.stringTrim(dsAmbu.getValue(j,2));
					historia = String($ds.getValue(i,2));
					tipopac = 'Amb.'
					break;
				}
			}
		}
		$ds.setValue(i,2,historia);
		$ds.setValue(i,11,nombre);
		$ds.setValue(i,12,tipopac);
	}
	
	var $frm = solutionModel.getForm('consulta_526_lst_estudios_bacteriologicos');
	var $tipos = [JSColumn.TEXT,JSColumn.TEXT,JSColumn.TEXT,JSColumn.TEXT,JSColumn.TEXT,JSColumn.TEXT,JSColumn.TEXT, JSColumn.INTEGER,JSColumn.TEXT,JSColumn.TEXT,JSColumn.TEXT,JSColumn.TEXT];
	$frm.dataSource = $ds.createDataSource('consulta_526_lst_estudios_bacteriologicos', $tipos);
	
	forms.consulta_526_lst_estudios_bacteriologicos.controller.recreateUI();	
	elements.tabless.tabIndex=2;
	elements.cld_fechaDesde.readOnly = true;
	elements.cld_fechaHasta.readOnly = true;
	}
}

/**
 * @properties={typeid:24,uuid:"BC36E61B-0AF4-40DA-AD9B-E2F2D55F29AA"}
 */
function validDataForm() {
	
	var isValid = true;	
	var messageError = "No ha sido posible realizar la consulta. Corrija los siguientes errores y vuelva a intentar."
	
	if (f_fechaDesde == null){
		messageError += "\nDebe ingresar fecha desde.";        
        isValid = false;
	}
	
	if (f_fechaHasta == null){
		messageError += "\nDebe ingresar fecha hasta.";        
        isValid = false;
	}
	else{
		
		var fechaActual = utils.timestampToDate( application.getServerTimeStamp());
		if (f_fechaHasta < fechaActual ){
		}
		else{
			messageError += "\nLa fecha hasta debe ser menor a la fecha actual.";        
	        isValid = false;
		}
	}
	
	if (f_fechaHasta < f_fechaDesde){
		messageError += "\nLa fecha hasta debe ser mayor o igual a la fecha desde.";        
        isValid = false;
	}
	
	if(!isValid){
		globals.DIALOGS.showWarningDialog("Atención",messageError,"Aceptar")
		elements.cld_fechaDesde.requestFocus();
	}
	
	return isValid;
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"63D26418-EB82-47DA-A1DE-276BFC8182FB"}
 */
function onAction_limpiarForm(event) {
	f_fechaDesde = null;
	f_fechaHasta = null;
	elements.lblResultado.text = 'Resultado:';
		
	if(forms.consulta_526_lst_estudios_bacteriologicos.foundset.getSize() > 0){
		forms.consulta_526_lst_estudios_bacteriologicos.foundset.clear();		
	}
	
	//elements.tabless.tabIndex=1;
	elements.cld_fechaDesde.readOnly = false;
	elements.cld_fechaHasta.readOnly = false;
	elements.cld_fechaDesde.requestFocus();
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"CE4D847A-42EA-4688-BA73-249319D2097D"}
 */
function onShow_inicializarForm(firstShow, event) {
	elements.cld_fechaDesde.requestFocus();
	
	// control del elemento por perfil	    		
	var $form = controller.getName();
	globals.consulta_526_controlarElementos($form);
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"A4CEA6F9-A4FA-4A73-87A6-F32EB933EEFF"}
 */
function onAction_fechaDesde(event) {
	elements.cld_fechaHasta.requestFocus();
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"EDC50AF5-8B61-42E7-BB63-201799F7512E"}
 */
function onAction_fechaHasta(event) {
	elements.btn_procesar.requestFocus();
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"54FA1FC2-C879-464A-9346-C031363A0670"}
 * @AllowToRunInFind
 */
function onAction_generarReporte(event) {
	
	//try{
		if(forms.consulta_526_lst_estudios_bacteriologicos.foundset.getSize() > 0){
			
			var message = "¿Esta seguro que desea generar el libro de estudios bacteriológicos?";
			if(globals.DIALOGS.showQuestionDialog("Atención!",message,"Si", "No") == "Si"){
				
				var fechaDesde = globals.FormatearFecha(f_fechaDesde,"AAAAMMDD");
				var fechaHasta = globals.FormatearFecha(f_fechaHasta,"AAAAMMDD");
				var firstDate = 0;
				
				var fs = databaseManager.getFoundSet("desal","tbl_parametros");
				fs.find();
				fs['paramid']= '18';
				fs.search();
				if(fs.getSize()>0){
					firstDate = fs['fechacbl'];
				}
				
				// Validar que la fecha desde, debe ser 1 dia mas que la ultima fecha de la tabla param
				var firstDateAux = globals.IntegerToDate(firstDate);
				var dias = globals.Contar_dias(firstDateAux, f_fechaDesde);
				
				if(firstDate > 0 && dias == 1 ){
				
					// Verificando estudios incompletos
					var sqlIncompleto = "select pbacnroprot from tbc_probacab\
						where pbacestado < 2\
						and pbacfechapedido >= " + fechaDesde
						+ " and pbacfechapedido <= " + fechaHasta;
					var dsIncompleto = databaseManager.getDataSetByQuery('asistencial',sqlIncompleto,null,-1);
					
					if(dsIncompleto.getMaxRowIndex() == 0){
						
						// Obteniendo especialista y matricula
						var sqlEsp = "select HjlDirectorT,HjlMatricula from tbc_hisjefelab\
						where HjlArea = 2\
						and HjlFechad <= " + fechaDesde
						+ " and (HjlFechah >= " + fechaHasta + " or HjlFechah = 0)";
						var dsEsp = databaseManager.getDataSetByQuery('asistencial',sqlEsp,null,-1);
						var especialista = '';
						if(dsEsp.getMaxRowIndex() > 0){
							especialista = utils.stringTrim( dsEsp.getValue(1,1)) + ' ' + utils.stringTrim( dsEsp.getValue(1,2))  
						}
						
						var $params = {
							fechadesde: fechaDesde.substr(6,2) + '/' + fechaDesde.substr(4,2) + '/' + fechaDesde.substr(0,4),
							fechahasta: fechaHasta.substr(6,2) + '/' + fechaHasta.substr(4,2) + '/' + fechaHasta.substr(0,4),
							titulo: 'LIBRO OFICIAL DE ESTUDIOS BACTERIOLOGICOS',
							especialista: especialista,
							especialidad: 'Bioquímico'
						}
						
						//var fileNameJasper = 'LB-CIRUAMBU.jasper';
						// compilando para a japer ambiente de pruebas
						//plugins.jasperPluginRMI.compileReport("LB-ESTBAC.jrxml");
						// Generando PDF
						var fileName = "LB-ESTBAC-" + fechaDesde + "-" + fechaHasta;
					    plugins.jasperPluginRMI.runReport(forms.consulta_526_lst_estudios_bacteriologicos.foundset,'LB-ESTBAC.jasper', fileName + '.pdf',plugins.jasperPluginRMI.OUTPUT_FORMAT.PDF,$params)
												
						var url=''
						var largo_url=application.getServerURL().length
						if (largo_url<24){
							// Ambiente local
						}else{
							url = application.getServerURL().substr(0,23)
							var puerto = url.split(':');
							var vDirServer = '';
							if(puerto[2]!='8080'){
								// Ambiente Desarrollo
								vDirServer = '/app/servoyd/application_server/server/webapps/ROOT/uploads/librobacteriologia';
							}
							else{
								// Ambiente Produccion
								vDirServer = '/app/servoy/application_server/server/webapps/ROOT/uploads/librobacteriologia';
							}
							
							plugins.UserManager.register( "Hypertelia", "q9SA5eCyb085cvATVO8s9onGe3iBzJyCTel8Y7J72BuG599wodOiU5OL26/pkKyv" );
							plugins.UserManager.copyFileToServer(fileName + '.pdf',vDirServer,true);
							plugins.file.deleteFile(fileName + '.pdf')
						}
						
						// Actualizando tabla param12
						fs['fechadb'] = f_fechaHasta;
						fs['fechacbl'] = utils.stringToNumber(fechaHasta);
						databaseManager.startTransaction();
						var resul = databaseManager.saveData(fs);
						if(resul){
							databaseManager.commitTransaction();
						}else{
							var error1 = ''
							var error2 = ''
							var array = databaseManager.getFailedRecords(fs)
							for (var k = 0; k < array.length; k++) {
								var record = array[k];
								var jstable = databaseManager.getTable(record);
								var tableSQLName = jstable.getSQLName();
								error1='Error de Grabación en Tabla:' + tableSQLName + ' en server:' + jstable.getServerName() + ' falló la grabación. Avise urgente a Sistemas, por favor!'
								error2='Error en grabación '+record.exception;
								if (record.exception.getErrorCode() == ServoyException.RECORD_VALIDATION_FAILED) {
									// exception thrown in pre-insert/update/delete event method
									var thrown = record.exception.getValue()
									//plugins.dialogs.showErrorDialog("Error de grabación","Record validation failed: " + thrown)
								}
							}
							databaseManager.rollbackTransaction()
							if(error1!=''){
								globals.DIALOGS.showErrorDialog("Error de grabación","Record validation failed: " + thrown)
								globals.DIALOGS.showErrorDialog("Error en grabacion de Histórico",error1,"Ok")
								globals.DIALOGS.showErrorDialog("Error en grabacion de Histórico",error2,"Ok")
							}
							globals.DIALOGS.showErrorDialog("Error en grabación","Se ha producido un error de grabación. "+'\n'+"Avise a Sistemas, por favor.", "Ok")
						}
						globals.DIALOGS.showInfoDialog("Resultado","El libro oficial de estudios bacteriológicos se generó correctamente.","Aceptar")	
					}
					else{
						
						forms.consulta_526_lst_estudios_bacteriologicos.foundset.find();
						forms.consulta_526_lst_estudios_bacteriologicos.foundset['pbacestado']= '< 2';
						forms.consulta_526_lst_estudios_bacteriologicos.foundset.search();
						elements.lblResultado.text = 'Resultado: ' + forms.consulta_526_lst_estudios_bacteriologicos.foundset.getSize() + ' items';
						globals.DIALOGS.showWarningDialog("Atención","No ha sido posible generar el libro. Corrija los siguientes errores y vuelva a intentar.\nHay protocolos incompletos en el periodo.","Aceptar");
					}
						
					}
					else{
						
						var fechaError = firstDate.toString().substr(6,2)+"/"+firstDate.toString().substr(4,2)+"/"+firstDate.toString().substr(0,4);
						firstDateAux.setTime(firstDateAux.getTime()+(1000*60*60*24));
						fechaError = firstDateAux.getDate()+"/"+ (firstDateAux.getMonth()+1) + "/" + firstDateAux.getFullYear()
						var messageDate = '\nLa fecha desde debe ser igual a ' + fechaError;
						globals.DIALOGS.showWarningDialog("Atención","No ha sido posible generar el libro. Corrija los siguientes errores y vuelva a intentar." + messageDate + '.',"Aceptar")
					}
			}
		}
		else{
			globals.DIALOGS.showWarningDialog("Atención","No hay datos para generar el libro.","Aceptar")
		}
		
	//}
	//catch(error){
		//globals.DIALOGS.showErrorDialog("Error","No ha sido posible generar el libro. Vuelva a intentar. Si el problema persiste, contacte al administrador del sistema.","Aceptar")
	//}
}

/**
 * TODO generated, please specify type and doc for the params
 * @param fecha
 * @param hora
 *
 * @properties={typeid:24,uuid:"68548A00-234B-49AD-8284-D84003CA9FDA"}
 */
function getFechaHora(fecha, hora){
	var fechaHora = "";
	if(fecha > 0)
		fechaHora =  getNumberToDate(fecha)+ ' ' + convertNumberToHour_HHMM(hora);
	return fechaHora;
}

/**
 * TODO generated, please specify type and doc for the params
 * @param date
 *
 * @properties={typeid:24,uuid:"95A3B710-044A-457F-BFFD-F6F37AC7981D"}
 */
function getNumberToDate(date){
	
	return String(date).substr(6,2) + '/' + String(date).substr(4,2) + '/' + String(date).substr(2,2);
}

/**
 * TODO generated, please specify type and doc for the params
 * @param hour
 *
 * @properties={typeid:24,uuid:"E8F597AF-BB57-441D-BDEB-B5A27DA42A95"}
 */
function convertNumberToHour_HHMM(hour) {
	
	var hora = '';
	
	switch(hour.toString().length){
		
		case 1: 
			hora = '00:0'+ arguments[0].toString();
			break;
		case 2:
			hora = '00:'+ arguments[0].toString();
			break;
		case 3:
			hora = '0'+ arguments[0].toString().substr(0,1) + ':' + arguments[0].toString().substr(1,2);
			break;
		case 4:
			hora = arguments[0].toString().substr(0,2) + ':' + arguments[0].toString().substr(2,2);
			break;
		default:
			hora = '';
			break;
	}

	return hora;
}

/**
 * TODO generated, please specify type and doc for the params
 * @param legajo
 *
 * @properties={typeid:24,uuid:"9C5B70D4-17C0-4303-BF96-7DB5A24268D5"}
 */
function convertNumberToLegajo(legajo) {
	var leg = '';
	if(legajo != '0')
		leg = legajo.toString().substr(0,(legajo.toString().length - 1))+"/"+legajo.toString().substr((legajo.toString().length - 1),1);
	
	return leg;
}

/**
 * Handle hide window.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"FEAF78F4-A865-4192-AC85-D535D02EEDF2"}
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
 * @properties={typeid:24,uuid:"1ADFC5DC-0277-4362-8C66-B11251EB33E6"}
 */
function onAction_cerrar(event) {
	f_cerrarForm = true;
	onHide_consultaProtocolo(event);
}
