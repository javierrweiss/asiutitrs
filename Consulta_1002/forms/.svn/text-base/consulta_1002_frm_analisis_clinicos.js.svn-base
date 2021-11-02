/**
 * @properties={typeid:35,uuid:"5B036AFE-B826-485C-B10D-8A6E3DCB05C2",variableType:-4}
 */
var f_isValid = false;

/**
 * @properties={typeid:35,uuid:"F8090CED-FD1B-4E5C-885C-6BE4F53E38C0",variableType:-4}
 */
var f_cerrarForm = false;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"4F625610-C5C1-4D27-B8E5-C0E2DCE8A154",variableType:93}
 */
var f_fechaHasta = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"AFFFF6DC-3D2D-483F-9498-54F5EC0FE3F7",variableType:93}
 */
var f_fechaDesde = null;

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"045F1A65-DC1B-4FF5-8706-9C0244C3973A"}
 * @AllowToRunInFind
 */
function onAction_procesar(event) {
	
	if(validDataForm()){
		
		elements.lbl_procesando.visible = true;
		application.updateUI();
		
		var fechaDesde = globals.FormatearFecha(f_fechaDesde,"AAAAMMDD");
		var fechaHasta = globals.FormatearFecha(f_fechaHasta,"AAAAMMDD");
		
		var $sql = 'SELECT p.Prot1 histclinica,p.Prot4 protocolo,1 as nombre,p.Prot10 fecha,2 as cobertura,p.Prot17 estado,p.Prot19 resultado,p.Prot16 resultadovalido,p.Prot5 analisis,p.prot26 propio\
					FROM tbc_protocol p\
					WHERE'
					+ ' p.Prot10 >= ' + fechaDesde
					+ ' and p.Prot10 <= ' + fechaHasta
					+ ' order by p.Prot4,p.Prot10';
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
			dsAux.addColumn('resultadovalido');
			dsAux.addColumn('analisis');
			dsAux.addColumn('propio');
			
			var ultimo = 0;
			var i;
			var histClinica = 0;
			var protocolo = 0;
			f_isValid = true;
			var estado = 0;
			var resulPropio = 0;
			
			// Eliminando protocolos duplicados
			for(i=1;i<=maxRows;i++){
				
				estado = $ds.getValue(i,6);
				resulPropio = $ds.getValue(i,10);
				// Evaluando resultado propio o anulado 
				if(resulPropio == 0 || estado == 7){
					
				}
				else{
					// protocolos incompletos: fecha de resultado
					if ($ds.getValue(i,7) == 0){
						f_isValid = false;
						break;
					}
						
					// protocolos sin validar: resultado valido, estado
					if ($ds.getValue(i,8) == 0 && (estado != 3 && estado != 6 && estado != 7)){
						f_isValid = false;
						break;
					}
				}
				
				if(i==1){
					
					globals.consulta_1002_histClinica=utils.stringToNumber($ds.getValue(i,1));
					globals.consulta_1002_obra=vhiscli_to_tbc_admision_scroll.adm_obrsoc;
					
					dsAux.addRow([$ds.getValue(i,1)// nrohistoria
					,$ds.getValue(i,2)// protocolo
					,utils.stringTrim(vhiscli_to_tbc_admision_scroll.adm_apelnom)// nombre
					,$ds.getValue(i,4)// fecha
					,utils.stringTrim(obra_to_tbc_obras.obr_razonsoc)// cobertura
					,$ds.getValue(i,6)// estado
					,$ds.getValue(i,7)// resultado
					,$ds.getValue(i,8)// resultadovalido
					,""// analisis
					,$ds.getValue(i,10)// propio
					]);
					
					ultimo = $ds.getValue(i,2);
				}
				else{
					
					histClinica = $ds.getValue(i,1);
					protocolo = $ds.getValue(i,2);
					
					if(protocolo != ultimo){
		
						globals.consulta_1002_histClinica=utils.stringToNumber(histClinica);
						globals.consulta_1002_obra=vhiscli_to_tbc_admision_scroll.adm_obrsoc;
						
						dsAux.addRow([histClinica// nrohistoria
						,protocolo// protocolo
						,utils.stringTrim(vhiscli_to_tbc_admision_scroll.adm_apelnom)// nombre
						,$ds.getValue(i,4)// fecha
						,utils.stringTrim(obra_to_tbc_obras.obr_razonsoc)// cobertura
						,$ds.getValue(i,6)// estado
						,$ds.getValue(i,7)// resultado
						,$ds.getValue(i,8)// resultadovalido
						,""// analisis
						,$ds.getValue(i,10)// propio
						]);
						
						ultimo = protocolo;
					}
				}
			}
			
			var $frm = solutionModel.getForm('consulta_1002_lst_analisis_clinicos');
			var $tipos = [JSColumn.TEXT,JSColumn.TEXT,JSColumn.TEXT,JSColumn.TEXT,JSColumn.TEXT,JSColumn.INTEGER,JSColumn.TEXT,JSColumn.INTEGER,JSColumn.TEXT,JSColumn.INTEGER];
			
			// verifica si hay protocolos incompletos o sin validar
			if(f_isValid){
				$frm.dataSource = dsAux.createDataSource('consulta_1002_lst_analisis_clinicos', $tipos);
				elements.lblResultado.text = 'Resultado: ' + dsAux.getMaxRowIndex() + ' items';
				
				forms.consulta_1002_lst_analisis_clinicos.controller.recreateUI();
				forms.consulta_1002_lst_analisis_clinicos.foundset.setSelectedIndex(1);
			}
			else{
				elements.btn_imprimir.enabled = true;
				// Cargando foundset
				$frm.dataSource = $ds.createDataSource('consulta_1002_lst_analisis_clinicos', $tipos);
				
				forms.consulta_1002_lst_analisis_clinicos.controller.recreateUI();
				
				// Filtrando protocolos con errores 
				if(forms.consulta_1002_lst_analisis_clinicos.foundset.getSize() > 0){
					
					if(forms.consulta_1002_lst_analisis_clinicos.foundset.find()){
						forms.consulta_1002_lst_analisis_clinicos.foundset['propio'] = '!0';
						forms.consulta_1002_lst_analisis_clinicos.foundset['estado'] = '!7';
						forms.consulta_1002_lst_analisis_clinicos.foundset['resultado'] = '0';
						forms.consulta_1002_lst_analisis_clinicos.foundset.newRecord();// OR
						forms.consulta_1002_lst_analisis_clinicos.foundset['propio'] = '!0';
						forms.consulta_1002_lst_analisis_clinicos.foundset['resultadovalido'] = '0';
						//forms.consulta_1002_lst_analisis_clinicos.foundset['estado'] = '![3,6]';
						forms.consulta_1002_lst_analisis_clinicos.foundset['estado'] = ['0','1','2','4','5'];
						
						forms.consulta_1002_lst_analisis_clinicos.foundset.search();
					}
					
					// Eliminando duplicados
					
					var fs_aux =  forms.consulta_1002_lst_analisis_clinicos.foundset.duplicateFoundSet();
					fs_aux.sort('protocolo desc');
					forms.consulta_1002_lst_analisis_clinicos.foundset.clear();
					var j;
					var count = 0;
					
					for(j=1;j<=fs_aux.getSize();j++){
						
						fs_aux.setSelectedIndex(j);
						if(j == 1){
							
							// Completando datos del paciente
							globals.consulta_1002_histClinica = utils.stringToNumber(fs_aux['histclinica']);
							globals.consulta_1002_obra = vhiscli_to_tbc_admision_scroll.adm_obrsoc;
							
							forms.consulta_1002_lst_analisis_clinicos.foundset.newRecord();
							
							forms.consulta_1002_lst_analisis_clinicos.foundset['histclinica'] = fs_aux['histclinica']// nrohistoria
							forms.consulta_1002_lst_analisis_clinicos.foundset['protocolo'] = fs_aux['protocolo']// protocolo
							forms.consulta_1002_lst_analisis_clinicos.foundset['nombre'] = utils.stringTrim(vhiscli_to_tbc_admision_scroll.adm_apelnom)// nombre
							forms.consulta_1002_lst_analisis_clinicos.foundset['fecha'] = fs_aux['fecha']// fecha
							forms.consulta_1002_lst_analisis_clinicos.foundset['cobertura'] = utils.stringTrim(obra_to_tbc_obras.obr_razonsoc)// cobertura
							forms.consulta_1002_lst_analisis_clinicos.foundset['estado'] = fs_aux['estado']// estado
							forms.consulta_1002_lst_analisis_clinicos.foundset['resultado'] = fs_aux['resultado']// resultado
							forms.consulta_1002_lst_analisis_clinicos.foundset['resultadovalido'] = fs_aux['resultadovalido']// resultadovalido
							forms.consulta_1002_lst_analisis_clinicos.foundset['analisis'] = ""// analisis
							forms.consulta_1002_lst_analisis_clinicos.foundset['propio'] = fs_aux['propio']// propio
							
							databaseManager.saveData(forms.consulta_1002_lst_analisis_clinicos.foundset);
							count++;
							ultimo = fs_aux['protocolo'];
						}
						else{
							
							protocolo = fs_aux['protocolo'];
							
							if(protocolo != ultimo){
								
								// Completando datos del paciente
								globals.consulta_1002_histClinica = utils.stringToNumber(fs_aux['histclinica']);
								globals.consulta_1002_obra = vhiscli_to_tbc_admision_scroll.adm_obrsoc;
								
								forms.consulta_1002_lst_analisis_clinicos.foundset.newRecord();
								
								forms.consulta_1002_lst_analisis_clinicos.foundset['histclinica'] = fs_aux['histclinica']// nrohistoria
								forms.consulta_1002_lst_analisis_clinicos.foundset['protocolo'] = fs_aux['protocolo']// protocolo
								forms.consulta_1002_lst_analisis_clinicos.foundset['nombre'] = utils.stringTrim(vhiscli_to_tbc_admision_scroll.adm_apelnom)// nombre
								forms.consulta_1002_lst_analisis_clinicos.foundset['fecha'] = fs_aux['fecha']// fecha
								forms.consulta_1002_lst_analisis_clinicos.foundset['cobertura'] = utils.stringTrim(obra_to_tbc_obras.obr_razonsoc)// cobertura
								forms.consulta_1002_lst_analisis_clinicos.foundset['estado'] = fs_aux['estado']// estado
								forms.consulta_1002_lst_analisis_clinicos.foundset['resultado'] = fs_aux['resultado']// resultado
								forms.consulta_1002_lst_analisis_clinicos.foundset['resultadovalido'] = fs_aux['resultadovalido']// resultadovalido
								forms.consulta_1002_lst_analisis_clinicos.foundset['analisis'] = ""// analisis
								forms.consulta_1002_lst_analisis_clinicos.foundset['propio'] = fs_aux['propio']// propio
								
								databaseManager.saveData(forms.consulta_1002_lst_analisis_clinicos.foundset);
								count++;
								ultimo = protocolo;
							}
							
						}
						 
					 }
					
					 forms.consulta_1002_lst_analisis_clinicos.foundset.setSelectedIndex(1);	
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
 * @properties={typeid:24,uuid:"80D41F5C-2E0A-41C7-B54B-6C8E9F842379"}
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
	ds.addColumn('resultadovalido');
	ds.addColumn('analisis');
	ds.addColumn('propio');
	
	var $frm = solutionModel.getForm('consulta_1002_lst_analisis_clinicos');
	var $tipos = [JSColumn.TEXT,JSColumn.TEXT,JSColumn.TEXT,JSColumn.TEXT,JSColumn.TEXT,JSColumn.INTEGER,JSColumn.TEXT,JSColumn.INTEGER,JSColumn.TEXT,JSColumn.INTEGER];
	$frm.dataSource = ds.createDataSource('consulta_1002_lst_analisis_clinicos', $tipos);
	forms.consulta_1002_lst_analisis_clinicos.controller.recreateUI();	
}

/**
 * @properties={typeid:24,uuid:"93C55240-544B-4989-87C3-30D4C4C4321B"}
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
 * @properties={typeid:24,uuid:"EB57F90F-1555-45B6-9E6E-14A9235C837D"}
 * @AllowToRunInFind
 */
function onAction_limpiarForm(event) {
	
	elements.lbl_procesando.visible = false;
	application.updateUI();
	f_fechaDesde = null;
	f_fechaHasta = null;
	f_isValid = false;
	elements.lblResultado.text = 'Resultado:';
		
	if(forms.consulta_1002_lst_analisis_clinicos.foundset.getSize() > 0){
		forms.consulta_1002_lst_analisis_clinicos.foundset.clear();		
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
 * @properties={typeid:24,uuid:"AE0E6B62-91AF-41F4-A9BA-3974069DAED7"}
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
	globals.consulta_1002_controlarElementos($form);
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"F0A0D463-9480-4D6C-921D-1CF20F8A2819"}
 */
function onAction_fechaDesde(event) {
	elements.cld_fechaHasta.requestFocus();
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"89CC9216-41FE-46BF-ADE7-463D7C32D43C"}
 */
function onAction_fechaHasta(event) {
	elements.btn_procesar.requestFocus();
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"49D16FBF-4007-49C8-ACDB-8F7055D90E19"}
 * @AllowToRunInFind
 */
function onAction_generarReporte(event) {
	
	try{
		if(forms.consulta_1002_lst_analisis_clinicos.foundset.getSize() > 0){
			
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
				fs['paramid']= '13';
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
							resolucion = utils.stringTrim( dsEsp.getValue(1,3))
							
							var $params = {
								fechadesde: fechaDesde.substr(6,2) + '/' + fechaDesde.substr(4,2) + '/' + fechaDesde.substr(0,4),
								fechahasta: fechaHasta.substr(6,2) + '/' + fechaHasta.substr(4,2) + '/' + fechaHasta.substr(0,4),
								titulo: 'LIBRO OFICIAL DE ANALISIS CLINICOS - INTERNADOS',
								especialista: especialista,
								especialidad: 'Director Técnico de Laboratorio',
								resolucion: resolucion
							}
							
							//var fileNameJasper = 'LB-CIRUAMBU.jasper';
							// compilando para jasper ambiente de pruebas
							//plugins.jasperPluginRMI.compileReport("LB-ANACLIINTER.jrxml");
							// Generando PDF
							var fileName = "LB-ANACLIINTER-" + fechaDesde + "-" + fechaHasta;
						    plugins.jasperPluginRMI.runReport(forms.consulta_1002_lst_analisis_clinicos.foundset,'LB-ANACLIINTER.jasper', fileName + '.pdf',plugins.jasperPluginRMI.OUTPUT_FORMAT.PDF,$params)
													
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
 * @properties={typeid:24,uuid:"E69CB6EE-89A1-4631-8545-855FB4C2CEDC"}
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
 * @properties={typeid:24,uuid:"4A846AF7-B650-4A29-B85C-2A5E5B4BDBC7"}
 */
function onAction_cerrar(event) {
	f_cerrarForm = true;
	onHide_consultaProtocolo(event);
}

/**
 * @AllowToRunInFind
 *
 * @properties={typeid:24,uuid:"86CA7E3E-7E44-4306-BDBE-7EB39C807808"}
 */
function inicializarFechaDesde() {
	// inicializa fecha desde sumandole un dia mas a la ultima fecha del libro
	var fs = databaseManager.getFoundSet("desal","tbl_parametros");
	fs.find();
	fs['paramid']= '13';
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
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"CF3363CE-8982-44C6-A2ED-3B3FBFED22F4"}
 */
function onAction_imprimir(event) {
	
	var fechaDesde = globals.FormatearFecha(f_fechaDesde, 'AAAAMMDD');
	var fechaHasta = globals.FormatearFecha(f_fechaHasta, 'AAAAMMDD');
	
	forms.consulta_1002_lst_print.f_fechaDesde = fechaDesde.toString().substr(6,2)+"/"+fechaDesde.toString().substr(4,2)+"/"+fechaDesde.toString().substr(0,4);
	forms.consulta_1002_lst_print.f_fechaHasta = fechaHasta.toString().substr(6,2)+"/"+fechaHasta.toString().substr(4,2)+"/"+fechaHasta.toString().substr(0,4);
	
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
	var legajo = "";
	
	var k;
	for(k = 1 ; k <= forms.consulta_1002_lst_analisis_clinicos.foundset.getSize() ; k++){
		forms.consulta_1002_lst_analisis_clinicos.foundset.setSelectedIndex(k);
		
		// Protocolos incompletos
		if (forms.consulta_1002_lst_analisis_clinicos.foundset['resultado'] == '0')
			observa = 'Incompleto';
		else
			observa = 'Sin validar';
		
		fecha = forms.consulta_1002_lst_analisis_clinicos.foundset['fecha'];
		resultado = forms.consulta_1002_lst_analisis_clinicos.foundset['resultado'];
		legajo = forms.consulta_1002_lst_analisis_clinicos.foundset['histclinica'];
		
		dsAux.addRow([legajo.toString().substr(0,(legajo.toString().length - 1))+"/"+legajo.toString().substr((legajo.toString().length - 1),1)
						,forms.consulta_1002_lst_analisis_clinicos.foundset['protocolo']
						,forms.consulta_1002_lst_analisis_clinicos.foundset['nombre']
						,fecha.toString().substr(6,2)+"/"+fecha.toString().substr(4,2)+"/"+fecha.toString().substr(0,4)
						,resultado.toString().substr(6,2)+"/"+resultado.toString().substr(4,2)+"/"+resultado.toString().substr(0,4)
						,observa
		]);	
	}
 	
	var $frm = solutionModel.getForm('consulta_1002_lst_print');
	var $tipos = [JSColumn.TEXT,JSColumn.TEXT,JSColumn.TEXT,JSColumn.TEXT,JSColumn.TEXT,JSColumn.TEXT];
	$frm.dataSource = dsAux.createDataSource('consulta_1002_lst_print', $tipos);
	forms.consulta_1002_lst_print.controller.recreateUI();

	//var win = application.createWindow("analisis_clinicos_inter",JSWindow.MODAL_DIALOG);	
    //win.title= 'Impresion';
    //win.resizable = false;
    //win.show(forms.consulta_1002_lst_print);
    
	forms.consulta_1002_lst_print.controller.setPageFormat(210,297,10,10,10,10,1,0);
	forms.consulta_1002_lst_print.controller.print(false,false);
}
