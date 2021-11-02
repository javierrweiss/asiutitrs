/**
 * @properties={typeid:35,uuid:"2D1439AE-D0D5-40C3-8C5A-00AB5062B03E",variableType:-4}
 */
var f_isValid = false;

/**
 * @properties={typeid:35,uuid:"707D6AE3-4B30-4D8E-8EB0-D1586473928E",variableType:-4}
 */
var f_cerrarForm = false;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"826D807D-909B-4504-8FC6-5C44E48B2C70",variableType:93}
 */
var f_fechaHasta = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"57C9C7F9-1FB8-49CA-9240-F54A28C070B9",variableType:93}
 */
var f_fechaDesde = null;

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"C4FB088D-BEA3-428D-8661-B2BE8BBD87D5"}
 * @AllowToRunInFind
 */
function onAction_procesar(event) {
	
	if(validDataForm()){
		
		elements.lbl_procesando.visible = true;
		application.updateUI();
		
		var fechaDesde = globals.FormatearFecha(f_fechaDesde,"AAAAMMDD");
		var fechaHasta = globals.FormatearFecha(f_fechaHasta,"AAAAMMDD");
		
		var $sql = 'SELECT cab.Prac2 histclinica,det.Prad1 protocolo,cab.Prac3 nombre,det.Prad3 fecha,cab.Prac4 cobertura\
					,cab.Prac10 estado,det.Prad14 resultado,det.Prad7 analisis,det.Prad11 incompleto,det.Prad12,det.Prad19,cab.Prac16,det.prad10\
					FROM tbc_protamb_det det\
					left join tbc_protamb_cab cab on cab.Prac1 = det.Prad1\
					WHERE'
					+ ' det.Prad3 >= ' + fechaDesde
					+ ' and det.Prad3 <= ' + fechaHasta
					+ ' order by det.Prad1 asc,det.Prad3 asc';

		var $ds = databaseManager.getDataSetByQuery('asistencial',$sql,null,-1);
		var maxRows = $ds.getMaxRowIndex();
		
		if(maxRows > 0){
				
			var dsAux = databaseManager.createEmptyDataSet();
			dsAux.addColumn('histclinica');
			dsAux.addColumn('protocolo');
			dsAux.addColumn('nombre');
			dsAux.addColumn('fecha');
			dsAux.addColumn('cobertura');
			dsAux.addColumn('estado');
			dsAux.addColumn('resultado');
			dsAux.addColumn('analisis');
			dsAux.addColumn('incompleto');
			dsAux.addColumn('prad12');
			dsAux.addColumn('prad19');
			dsAux.addColumn('prac16');
			dsAux.addColumn('prad10');
			
			var ultimo = 0;
			var i;
			var histClinica = 0;
			var protocolo = 0;
			f_isValid = true;
			var estado = 0;
			var prad12 = 0;
			
			// Eliminando protocolos duplicados
			for(i=1;i<=maxRows;i++){
				
				estado = $ds.getValue(i,6);
				prad12 = $ds.getValue(i,10);
				// Evaluando anulado 
				if( estado == 9 || prad12 == 0){
					
				}
				else{
					// protocolos incompletos:
					if (utils.stringTrim($ds.getValue(i,9)).length == 0){
						f_isValid = false;
						break;
					}
					
					// protocolos sin validar: prac-16 y prad-19
					if ($ds.getValue(i,12) == 0 || ( $ds.getValue(i,11) == 0 && $ds.getValue(i,13) <= 2 )){
						f_isValid = false;
						break;
					}
				}
				
				if(i==1){
					
					globals.consulta_1046_obra = $ds.getValue(i,5);
					
					dsAux.addRow([$ds.getValue(i,1)// nrohistoria
					,$ds.getValue(i,2)// protocolo
					,utils.stringTrim($ds.getValue(i,3))// nombre
					,$ds.getValue(i,4)// fecha
					,utils.stringTrim(consulta_1046_obra_to_tbc_obras.obr_razonsoc)// cobertura
					,$ds.getValue(i,6)// estado
					,$ds.getValue(i,7)// resultado
					,""// analisis
					,$ds.getValue(i,9)// incompleto
					,$ds.getValue(i,10)// prad12
					,$ds.getValue(i,11)// prad19
					,$ds.getValue(i,12)// prac16
					,$ds.getValue(i,13)// prad10
					]);
					
					ultimo = $ds.getValue(i,2);
				}
				else{
					
					histClinica = $ds.getValue(i,1);
					protocolo = $ds.getValue(i,2);
					
					if(protocolo != ultimo){
		
						globals.consulta_1046_obra = $ds.getValue(i,5);
						
						dsAux.addRow([histClinica// nrohistoria
						,protocolo// protocolo
						,utils.stringTrim($ds.getValue(i,3))// nombre
						,$ds.getValue(i,4)// fecha
						,utils.stringTrim(consulta_1046_obra_to_tbc_obras.obr_razonsoc)// cobertura
						,$ds.getValue(i,6)// estado
						,$ds.getValue(i,7)// resultado
						,""// analisis
						,$ds.getValue(i,9)// incompleto
						,$ds.getValue(i,10)// prad12
						,$ds.getValue(i,11)// prad19
						,$ds.getValue(i,12)// prac16
						,$ds.getValue(i,13)// prad10
						]);
						
						ultimo = protocolo;
					}
				}
			}
			
			var $frm = solutionModel.getForm('consulta_1046_lst_analisis_clinicos');
			var $tipos = [JSColumn.TEXT,JSColumn.TEXT,JSColumn.TEXT,JSColumn.TEXT,JSColumn.TEXT,JSColumn.INTEGER,JSColumn.TEXT,JSColumn.TEXT,JSColumn.TEXT,JSColumn.INTEGER,JSColumn.INTEGER,JSColumn.INTEGER,JSColumn.INTEGER];
			
			// verifica si hay protocolos incompletos
			if(f_isValid){
				$frm.dataSource = dsAux.createDataSource('consulta_1046_lst_analisis_clinicos', $tipos);
				elements.lblResultado.text = 'Resultado: ' + dsAux.getMaxRowIndex() + ' items';
				
				forms.consulta_1046_lst_analisis_clinicos.controller.recreateUI();
				forms.consulta_1046_lst_analisis_clinicos.foundset.setSelectedIndex(1);
			}
			else{
				elements.btn_imprimir.enabled = true;
				// Cargando foundset
				$frm.dataSource = $ds.createDataSource('consulta_1046_lst_analisis_clinicos', $tipos);
				
				forms.consulta_1046_lst_analisis_clinicos.controller.recreateUI();
				
				// Filtrando protocolos con errores 
				if(forms.consulta_1046_lst_analisis_clinicos.foundset.getSize() > 0){
					
					if(forms.consulta_1046_lst_analisis_clinicos.foundset.find()){
						
						forms.consulta_1046_lst_analisis_clinicos.foundset['estado'] = '!9';
						forms.consulta_1046_lst_analisis_clinicos.foundset['prad12'] = '!0';
						forms.consulta_1046_lst_analisis_clinicos.foundset['incompleto'] = '^=';// Is Null/Empty/Zero
						forms.consulta_1046_lst_analisis_clinicos.foundset.newRecord();// OR
						forms.consulta_1046_lst_analisis_clinicos.foundset['estado'] = '!9';
						forms.consulta_1046_lst_analisis_clinicos.foundset['prad12'] = '!0';
						forms.consulta_1046_lst_analisis_clinicos.foundset['prac16'] = '0';
						forms.consulta_1046_lst_analisis_clinicos.foundset.newRecord();// OR
						forms.consulta_1046_lst_analisis_clinicos.foundset['estado'] = '!9';
						forms.consulta_1046_lst_analisis_clinicos.foundset['prad12'] = '!0';
						forms.consulta_1046_lst_analisis_clinicos.foundset['prad19'] = '0';
						forms.consulta_1046_lst_analisis_clinicos.foundset['prad10'] = '<=2';
						forms.consulta_1046_lst_analisis_clinicos.foundset.search();
					}
					
					var j;
					/*
					// Completando datos del paciente
					for(j=1;j<=forms.consulta_1046_lst_analisis_clinicos.foundset.getSize();j++){
						
						forms.consulta_1046_lst_analisis_clinicos.foundset.setSelectedIndex(j);
						globals.consulta_1046_obra = utils.stringToNumber(forms.consulta_1046_lst_analisis_clinicos.foundset['cobertura']);
						forms.consulta_1046_lst_analisis_clinicos.foundset['cobertura'] = utils.stringTrim(consulta_1046_obra_to_tbc_obras.obr_razonsoc);  
					 }
					*/
					 
					// Eliminando duplicados
						
						var fs_aux =  forms.consulta_1046_lst_analisis_clinicos.foundset.duplicateFoundSet();
						fs_aux.sort('protocolo desc');
						forms.consulta_1046_lst_analisis_clinicos.foundset.clear();
						var j;
						var count = 0;
						
						for(j=1;j<=fs_aux.getSize();j++){
							
							fs_aux.setSelectedIndex(j);
							if(j == 1){
								
								// Completando datos de cobertura
								
								globals.consulta_1046_obra = utils.stringToNumber(fs_aux['cobertura']);
								
								forms.consulta_1046_lst_analisis_clinicos.foundset.newRecord();
								
								forms.consulta_1046_lst_analisis_clinicos.foundset['histclinica'] = fs_aux['histclinica']// nrohistoria
								forms.consulta_1046_lst_analisis_clinicos.foundset['protocolo'] = fs_aux['protocolo']// protocolo
								forms.consulta_1046_lst_analisis_clinicos.foundset['nombre'] = fs_aux['nombre']// nombre
								forms.consulta_1046_lst_analisis_clinicos.foundset['fecha'] = fs_aux['fecha']// fecha
								forms.consulta_1046_lst_analisis_clinicos.foundset['cobertura'] = utils.stringTrim(consulta_1046_obra_to_tbc_obras.obr_razonsoc)// cobertura
								forms.consulta_1046_lst_analisis_clinicos.foundset['estado'] = fs_aux['estado']// estado
								forms.consulta_1046_lst_analisis_clinicos.foundset['resultado'] = fs_aux['resultado']// resultado
								forms.consulta_1046_lst_analisis_clinicos.foundset['analisis'] = fs_aux['analisis']// analisis
								forms.consulta_1046_lst_analisis_clinicos.foundset['incompleto'] = fs_aux['incompleto']// incompleto
								forms.consulta_1046_lst_analisis_clinicos.foundset['prad12'] = fs_aux['prad12']// prad12
								forms.consulta_1046_lst_analisis_clinicos.foundset['prad19'] = fs_aux['prad19']// prad19
								forms.consulta_1046_lst_analisis_clinicos.foundset['prac16'] = fs_aux['prac16']// prac16
								forms.consulta_1046_lst_analisis_clinicos.foundset['prad10'] = fs_aux['prad10']// prad10
								
								databaseManager.saveData(forms.consulta_1046_lst_analisis_clinicos.foundset);
								count++;
								ultimo = fs_aux['protocolo'];
							}
							else{
								
								protocolo = fs_aux['protocolo'];
								
								if(protocolo != ultimo){
									
									// Completando datos de cobertura
									globals.consulta_1046_obra = utils.stringToNumber(fs_aux['cobertura']);
									
									forms.consulta_1046_lst_analisis_clinicos.foundset.newRecord();
									
									forms.consulta_1046_lst_analisis_clinicos.foundset['histclinica'] = fs_aux['histclinica']// nrohistoria
									forms.consulta_1046_lst_analisis_clinicos.foundset['protocolo'] = fs_aux['protocolo']// protocolo
									forms.consulta_1046_lst_analisis_clinicos.foundset['nombre'] = fs_aux['nombre']// nombre
									forms.consulta_1046_lst_analisis_clinicos.foundset['fecha'] = fs_aux['fecha']// fecha
									forms.consulta_1046_lst_analisis_clinicos.foundset['cobertura'] = utils.stringTrim(consulta_1046_obra_to_tbc_obras.obr_razonsoc)// cobertura
									forms.consulta_1046_lst_analisis_clinicos.foundset['estado'] = fs_aux['estado']// estado
									forms.consulta_1046_lst_analisis_clinicos.foundset['resultado'] = fs_aux['resultado']// resultado
									forms.consulta_1046_lst_analisis_clinicos.foundset['analisis'] = fs_aux['analisis']// analisis
									forms.consulta_1046_lst_analisis_clinicos.foundset['incompleto'] = fs_aux['incompleto']// incompleto
									forms.consulta_1046_lst_analisis_clinicos.foundset['prad12'] = fs_aux['prad12']// prad12
									forms.consulta_1046_lst_analisis_clinicos.foundset['prad19'] = fs_aux['prad19']// prad19
									forms.consulta_1046_lst_analisis_clinicos.foundset['prac16'] = fs_aux['prac16']// prac16
									forms.consulta_1046_lst_analisis_clinicos.foundset['prad10'] = fs_aux['prad10']// prad10
									
									databaseManager.saveData(forms.consulta_1046_lst_analisis_clinicos.foundset);
									count++;
									ultimo = protocolo;
								}
								
							}
							 
						 }
					
					 forms.consulta_1046_lst_analisis_clinicos.foundset.setSelectedIndex(1);	
					 elements.lblResultado.text = 'Resultado: ' + count + ' items';
					 
					 elements.lbl_procesando.visible = false;
					 application.updateUI();
					 globals.DIALOGS.showWarningDialog("!Atención¡","Existen protocolos incompletos o sin validar en el periodo.","Aceptar");
				}
			}
			
			elements.cld_fechaDesde.readOnly = true;
			elements.cld_fechaHasta.readOnly = true;
		}
		else{
			globals.DIALOGS.showInfoDialog("Resultado","No se encontrarón datos para el periodo ingresado.","Aceptar")
		}
	}
	elements.lbl_procesando.visible = false;
	application.updateUI();
}

/**
 * @properties={typeid:24,uuid:"777BB97D-61A9-45E8-AC0F-7AFEF958541F"}
 */
function inicializar_lst_dataForm (){
	
	var ds = databaseManager.createEmptyDataSet();
	ds.addColumn('histclinica');
	ds.addColumn('protocolo');
	ds.addColumn('nombre');
	ds.addColumn('fecha');
	ds.addColumn('cobertura');
	ds.addColumn('estado');
	ds.addColumn('resultado');
	ds.addColumn('analisis');
	ds.addColumn('incompleto');
	ds.addColumn('prad12');
	ds.addColumn('prad19');
	ds.addColumn('prac16');
	ds.addColumn('prad10');
	
	var $frm = solutionModel.getForm('consulta_1046_lst_analisis_clinicos');
	var $tipos = [JSColumn.TEXT,JSColumn.TEXT,JSColumn.TEXT,JSColumn.TEXT,JSColumn.TEXT,JSColumn.INTEGER,JSColumn.TEXT,JSColumn.TEXT,JSColumn.TEXT,JSColumn.INTEGER,JSColumn.INTEGER,JSColumn.INTEGER,JSColumn.INTEGER];
	$frm.dataSource = ds.createDataSource('consulta_1046_lst_analisis_clinicos', $tipos);
	forms.consulta_1046_lst_analisis_clinicos.controller.recreateUI();	
}

/**
 * @properties={typeid:24,uuid:"63475869-AE7A-4385-A4F6-56F89EDCF0A8"}
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
		elements.lbl_procesando.visible = false;
		application.updateUI();
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
 * @properties={typeid:24,uuid:"50E65F67-82DD-47BE-B587-45D3C84DBEC2"}
 * @AllowToRunInFind
 */
function onAction_limpiarForm(event) {
	
	elements.lbl_procesando.visible = false;
	application.updateUI();
	f_fechaDesde = null;
	f_fechaHasta = null;
	f_isValid = false;
	elements.lblResultado.text = 'Resultado:';
		
	if(forms.consulta_1046_lst_analisis_clinicos.foundset.getSize() > 0){
		forms.consulta_1046_lst_analisis_clinicos.foundset.clear();		
	}
	
	//elements.tabless.tabIndex=1;
	elements.cld_fechaDesde.readOnly = false;
	elements.cld_fechaHasta.readOnly = false;
	elements.btn_imprimir.enabled = false;
	
	inicializarFechaDesde();
	elements.cld_fechaHasta.requestFocus();
	
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"40233313-89D2-4FD4-9D62-CFFA632C8828"}
 * @AllowToRunInFind
 */
function onShow_inicializarForm(firstShow, event) {
	
	f_isValid = false;
	inicializar_lst_dataForm();
	
	inicializarFechaDesde();
	elements.cld_fechaHasta.requestFocus();
	elements.btn_imprimir.enabled = false;
	
	// control del elemento por perfil	    		
	var $form = controller.getName();
	globals.consulta_1046_controlarElementos($form);
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"3812D082-CB00-45BA-9C42-87918B076288"}
 */
function onAction_fechaDesde(event) {
	elements.cld_fechaHasta.requestFocus();
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"ED991334-D603-423D-B7A5-0BF9A191F636"}
 */
function onAction_fechaHasta(event) {
	elements.btn_procesar.requestFocus();
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"7A01D892-C360-4E52-9B66-B8D34A71905D"}
 * @AllowToRunInFind
 */
function onAction_generarReporte(event) {
	
	try{
		if(forms.consulta_1046_lst_analisis_clinicos.foundset.getSize() > 0){
			
			var fechaDesde = globals.FormatearFecha(f_fechaDesde,"AAAAMMDD");
			var fechaHasta = globals.FormatearFecha(f_fechaHasta,"AAAAMMDD");
			
			var mFechaDesde = String(fechaDesde).substr(6,2) + '/' + String(fechaDesde ).substr(4,2) + '/' + String(fechaDesde).substr(0,4);
			var mFechaHasta = String(fechaHasta).substr(6,2) + '/' + String(fechaHasta ).substr(4,2) + '/' + String(fechaHasta).substr(0,4);
			
			var message = "¿Esta seguro que desea generar el libro de análisis clínicos?\nPeriodo " + mFechaDesde + " - " + mFechaHasta;
			if(globals.DIALOGS.showQuestionDialog("Atención!",message,"Si", "No") == "Si"){
				
				if(f_isValid){
					
				var firstDate = 0;
				
				var fs = databaseManager.getFoundSet("desal","tbl_parametros");
				fs.find();
				fs['paramid']= '14';
				fs.search();
				if(fs.getSize()>0){
					firstDate = fs['fechacbl'];
				}
				
				// Validar que la fecha desde, debe ser 1 dia mas que la ultima fecha de la tabla param
				var firstDateAux = globals.IntegerToDate(firstDate);
				var dias = globals.Contar_dias(firstDateAux, f_fechaDesde);
				
				if(firstDate > 0 && dias == 1 ){
					
						// Obteniendo especialista y matricula
						var sqlEsp = "select HjlDirectorT,HjlMatricula,HjlInsMin from tbc_hisjefelab\
						where HjlArea = 1\
						and HjlFechad <= " + fechaDesde
						+ " and (HjlFechah >= " + fechaHasta + " or HjlFechah = 0)";
						var dsEsp = databaseManager.getDataSetByQuery('asistencial',sqlEsp,null,-1);
						var especialista = '';
						var resolucion = '';
						
						if(dsEsp.getMaxRowIndex() > 0){
							
							elements.lbl_procesando.visible = true;
							application.updateUI();
							
							especialista = utils.stringTrim( dsEsp.getValue(1,1)) + ' ' + utils.stringTrim( dsEsp.getValue(1,2))
							//resolucion = utils.stringTrim( dsEsp.getValue(1,3))
							
							var $params = {
								fechadesde: fechaDesde.substr(6,2) + '/' + fechaDesde.substr(4,2) + '/' + fechaDesde.substr(0,4),
								fechahasta: fechaHasta.substr(6,2) + '/' + fechaHasta.substr(4,2) + '/' + fechaHasta.substr(0,4),
								titulo: 'LIBRO OFICIAL DE ANALISIS CLINICOS - AMBULATORIOS',
								especialista: especialista,
								especialidad: 'Director Técnico de Laboratorio',
								resolucion: resolucion
							}
							
							//var fileNameJasper = 'LB-CIRUAMBU.jasper';
							// compilando para jasper ambiente de pruebas
							//plugins.jasperPluginRMI.compileReport("LB-ANACLIAMBU.jrxml");
							// Generando PDF
							var fileName = "LB-ANACLIAMBU-" + fechaDesde + "-" + fechaHasta;
						    plugins.jasperPluginRMI.runReport(forms.consulta_1046_lst_analisis_clinicos.foundset,'LB-ANACLIAMBU.jasper', fileName + '.pdf',plugins.jasperPluginRMI.OUTPUT_FORMAT.PDF,$params)
													
							var url='';
							var largo_url=application.getServerURL().length;
							if (largo_url<24){
								// Ambiente local
							}else{
								url = application.getServerURL().substr(0,23);
								var puerto = url.split(':');
								var vDirServer = '';
								if(puerto[2]!='8080'){
									// Ambiente Desarrollo
									vDirServer = '/app/servoyd/application_server/server/webapps/ROOT/uploads/librolaboratorio';
								}
								else{
									// Ambiente Produccion
									vDirServer = '/app/servoy/application_server/server/webapps/ROOT/uploads/librolaboratorio';
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
							
							elements.lbl_procesando.visible = false;
							application.updateUI();
							globals.DIALOGS.showInfoDialog("Resultado","El libro oficial de análisis clínicos se generó correctamente.","Aceptar")
						}
						else{
							elements.lbl_procesando.visible = false;
							application.updateUI();
							globals.DIALOGS.showWarningDialog("Atención","No ha sido posible generar el libro. Corrija los siguientes errores y vuelva a intentar.\nNo se encontró datos del profesional firmante.","Aceptar");
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
				else{
					globals.DIALOGS.showWarningDialog("Atención","No ha sido posible generar el libro. Corrija los siguientes errores y vuelva a intentar.\nExisten protocolos incompletos o sin validar en el periodo.","Aceptar");
				}
			}
		}
		else{
			globals.DIALOGS.showWarningDialog("Atención","No hay datos para generar el libro.","Aceptar")
		}
		
		elements.lbl_procesando.visible = false;
		application.updateUI();
	}
	catch(error){
		globals.DIALOGS.showErrorDialog("Error","No ha sido posible generar el libro. Vuelva a intentar. Si el problema persiste, contacte al administrador del sistema.\n" + error.message,"Aceptar");
		elements.lbl_procesando.visible = false;
		application.updateUI();
	}
}

/**
 * Handle hide window.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"BB31C712-B7D5-4679-8F37-131EC68C4774"}
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
 * @properties={typeid:24,uuid:"F43468F3-A4D7-4351-8A0A-78A9C4FC27EE"}
 */
function onAction_cerrar(event) {
	f_cerrarForm = true;
	onHide_consultaProtocolo(event);
}

/**
 * @properties={typeid:24,uuid:"FFE6863F-665D-42EC-BA0E-99FA9174FC38"}
 * @AllowToRunInFind
 */
function inicializarFechaDesde() {
	// inicializa fecha desde sumandole un dia mas a la ultima fecha del libro
	var fs = databaseManager.getFoundSet("desal","tbl_parametros");
	fs.find();
	fs['paramid']= '14';
	fs.search();
	if(fs.getSize()>0){
		
		var firstDate = 0;
		firstDate = fs['fechacbl'];
		var firstDateAux = globals.IntegerToDate(firstDate);
		firstDateAux.setTime(firstDateAux.getTime()+(1000*60*60*24));

		f_fechaDesde = firstDateAux;
	}
}

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"92D88C33-4D5D-4F00-A31E-781D512AB15F"}
 */
function onAction_imprimir(event) {
	
	var fechaDesde = globals.FormatearFecha(f_fechaDesde, 'AAAAMMDD');
	var fechaHasta = globals.FormatearFecha(f_fechaHasta, 'AAAAMMDD');
	
	forms.consulta_1046_lst_print.f_fechaDesde = fechaDesde.toString().substr(6,2)+"/"+fechaDesde.toString().substr(4,2)+"/"+fechaDesde.toString().substr(0,4);
	forms.consulta_1046_lst_print.f_fechaHasta = fechaHasta.toString().substr(6,2)+"/"+fechaHasta.toString().substr(4,2)+"/"+fechaHasta.toString().substr(0,4);
	
	var dsAux = databaseManager.createEmptyDataSet();
	dsAux.addColumn('histclinica');
	dsAux.addColumn('protocolo');
	dsAux.addColumn('nombre');
	dsAux.addColumn('fecha');
	dsAux.addColumn('resultado');
	dsAux.addColumn('observacion');

	var observa = "";
	var fecha = "";
	var resultado= "";
	
	var k;
	for(k = 1 ; k <= forms.consulta_1046_lst_analisis_clinicos.foundset.getSize() ; k++){
		forms.consulta_1046_lst_analisis_clinicos.foundset.setSelectedIndex(k);
		
		// Protocolos incompletos
		if (utils.stringTrim(forms.consulta_1046_lst_analisis_clinicos.foundset['incompleto']).length  == 0)
			observa = 'Incompleto';
		else
			observa = 'Sin validar';
		
		fecha = forms.consulta_1046_lst_analisis_clinicos.foundset['fecha'];
		
		resultado = forms.consulta_1046_lst_analisis_clinicos.foundset['resultado'];
		
		dsAux.addRow([forms.consulta_1046_lst_analisis_clinicos.foundset['histclinica']
						,forms.consulta_1046_lst_analisis_clinicos.foundset['protocolo']
						,forms.consulta_1046_lst_analisis_clinicos.foundset['nombre']
						,fecha.toString().substr(6,2)+"/"+fecha.toString().substr(4,2)+"/"+fecha.toString().substr(0,4)
						,resultado == "0" ? "" : resultado.substr(6,2)+"/"+resultado.substr(4,2)+"/"+resultado.substr(0,4)
						,observa
		]);	
	}
 	
	var $frm = solutionModel.getForm('consulta_1046_lst_print');
	var $tipos = [JSColumn.TEXT,JSColumn.TEXT,JSColumn.TEXT,JSColumn.TEXT,JSColumn.TEXT,JSColumn.TEXT];
	$frm.dataSource = dsAux.createDataSource('consulta_1046_lst_print', $tipos);
	forms.consulta_1046_lst_print.controller.recreateUI();

	//var win = application.createWindow("analisis_clinicos_inter",JSWindow.MODAL_DIALOG);	
    //win.title= 'Impresion';
    //win.resizable = false;
    //win.show(forms.consulta_1046_lst_print);
    
	forms.consulta_1046_lst_print.controller.setPageFormat(210,297,10,10,10,10,1,0);
	forms.consulta_1046_lst_print.controller.print(false,false);
}
