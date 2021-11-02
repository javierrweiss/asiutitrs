/**
 * @properties={typeid:35,uuid:"FF598C56-2BD1-49D1-A921-015484A4A323",variableType:-4}
 */
var f_isValid = false;

/**
 * @properties={typeid:35,uuid:"2A0A849D-82C2-4056-81E5-6771BC14A6CF",variableType:-4}
 */
var f_cerrarForm = false;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"C51C5BD2-C3F5-40CD-8188-04106E11349E",variableType:93}
 */
var f_fechaHasta = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"BF873C75-2DA5-4379-ADC0-7158A16B54B9",variableType:93}
 */
var f_fechaDesde = null;

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"58649312-0209-4ADD-82EF-5300F7774701"}
 * @AllowToRunInFind
 */
function onAction_procesar(event) {
	
	if(validDataForm()){
		
		elements.lbl_procesando.visible = true;
		application.updateUI();
		
		var fechaDesde = globals.FormatearFecha(f_fechaDesde,"AAAAMMDD");
		var fechaHasta = globals.FormatearFecha(f_fechaHasta,"AAAAMMDD");
		
		var $sql = 'SELECT g.Guar_FechaIngreso,g.Guar_HoraIngreso,g.Guar_HistClinica,g.Guar_ApeNom,p.Pat_Descrip\
					,g.Guar_Especialidad,g.Guar_Estado,g.Guar_TipoMed,per.Per_ApelNom,med.Med_ApeNom,g.Guar_Diagnostico\
					FROM tbc_guardia g\
					left join maestros.tbc_patologia p on p.Pat_Codi = g.Guar_Diagnostico\
					left join maestros.tbc_personal per on per.Per_Legajo = g.Guar_Medico\
					left join maestros.tbc_medicos med on med.Med_Codigo = g.Guar_Medico\
					WHERE g.Guar_Estado3 < 9'
					+ ' and g.Guar_FechaIngreso3 >= ' + fechaDesde
					+ ' and g.Guar_FechaIngreso3 <= ' + fechaHasta
					+ ' order by g.Guar_FechaIngreso3,g.Guar_HoraIngreso3';

		var $ds = databaseManager.getDataSetByQuery('asistencial',$sql,null,-1);
		var maxRows = $ds.getMaxRowIndex();
		
		if(maxRows > 0){
				
			var dsAux = databaseManager.createEmptyDataSet();
			dsAux.addColumn('guar_fechaingreso');
			dsAux.addColumn('guar_horaingreso');
			dsAux.addColumn('guar_histclinica');
			dsAux.addColumn('guar_apenom');
			dsAux.addColumn('guar_diagnostico');
			dsAux.addColumn('guar_estado');
			dsAux.addColumn('guar_medico');
			dsAux.addColumn('guar_tipomed');
			dsAux.addColumn('per_apelnom');
			dsAux.addColumn('med_apenom');
			dsAux.addColumn('guar_especialidad');
			dsAux.addColumn('pat_descrip');
			
			var i;
			f_isValid = true;
			var estado = 0;
			var espe = 0;// Especialidad
			
			// completando datos
			for(i=1;i<=maxRows;i++){
				
				espe = $ds.getValue(i,6);
				estado = $ds.getValue(i,7);
				
				// Validando pacientes sin alta
				if(estado < 4 && espe < 5 ){
					f_isValid = false;
					break;
				}
				
				// verificando pacientes con alta administravia y alta medica
				if( (estado == 4 || estado == 5) && espe < 5 ){
					
					dsAux.addRow([$ds.getValue(i,1)// fecha ingreso
					,convertNumberToHour_HHMM($ds.getValue(i,2))// hora ingreso
					,$ds.getValue(i,3)// his clinica
					,utils.stringTrim($ds.getValue(i,4))// nombre
					,$ds.getValue(i,11) == 0 ? '----------':utils.stringTrim(utils.stringTrim($ds.getValue(i,5)))// diagnostico
					,$ds.getValue(i,7)// estado
					,$ds.getValue(i,8) == 0 ? utils.stringTrim(utils.stringTrim($ds.getValue(i,9))):utils.stringTrim(utils.stringTrim($ds.getValue(i,10)))// especialista
					,$ds.getValue(i,8)// tipo medico
					,$ds.getValue(i,9)// personal
					,$ds.getValue(i,10)// medico
					,$ds.getValue(i,6)// especialidad
					,$ds.getValue(i,12)// patdescrip
					]);
				}
			}
			
			var $frm = solutionModel.getForm('libro_guardia_lst_consulta');
			var $tipos = [JSColumn.TEXT,JSColumn.TEXT,JSColumn.TEXT,JSColumn.TEXT,JSColumn.TEXT,JSColumn.INTEGER,JSColumn.TEXT,JSColumn.INTEGER,JSColumn.TEXT,JSColumn.TEXT,JSColumn.INTEGER,JSColumn.TEXT];
			
			// verifica acientes con alta
			if(f_isValid){
				
				$frm.dataSource = dsAux.createDataSource('libro_guardia_lst_consulta', $tipos);
				elements.lblResultado.text = 'Resultado: ' + dsAux.getMaxRowIndex() + ' items';
				
				forms.libro_guardia_lst_consulta.controller.recreateUI();
				forms.libro_guardia_lst_consulta.foundset.setSelectedIndex(1);
			}
			else{
				// Cargando foundset
				$frm.dataSource = $ds.createDataSource('libro_guardia_lst_consulta', $tipos);
				
				forms.libro_guardia_lst_consulta.controller.recreateUI();
				
				// Filtrando ingresos con errores 
				if(forms.libro_guardia_lst_consulta.foundset.getSize() > 0){
					
					if(forms.libro_guardia_lst_consulta.foundset.find()){
						
						forms.libro_guardia_lst_consulta.foundset['guar_estado'] = '< 4';
						forms.libro_guardia_lst_consulta.foundset['guar_especialidad'] = '< 5';
						forms.libro_guardia_lst_consulta.foundset.search();
					}
					
					var j;
					// Completando datos
					for(j=1;j<=forms.libro_guardia_lst_consulta.foundset.getSize();j++){
						
						forms.libro_guardia_lst_consulta.foundset.setSelectedIndex(j);
						forms.libro_guardia_lst_consulta.foundset['guar_medico'] = forms.libro_guardia_lst_consulta.foundset['guar_tipomed'] == 0 ? utils.stringTrim(forms.libro_guardia_lst_consulta.foundset['per_apelnom']):utils.stringTrim(forms.libro_guardia_lst_consulta.foundset['med_apenom'])// especialista
						forms.libro_guardia_lst_consulta.foundset['guar_diagnostico'] =	forms.libro_guardia_lst_consulta.foundset['guar_diagnostico'] == '0' ? ' ':forms.libro_guardia_lst_consulta.foundset['pat_descrip'];// diagnostico  
					 }
					
					 forms.libro_guardia_lst_consulta.foundset.setSelectedIndex(1);	
					 elements.lblResultado.text = 'Resultado: ' + (j-1) + ' items';
					 
					 elements.lbl_procesando.visible = false;
					 application.updateUI();
					 globals.DIALOGS.showWarningDialog("!Atención¡","Existen pacientes sin alta en el periodo.","Aceptar");
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
 * @properties={typeid:24,uuid:"BC79AD6C-60EF-4E53-90AC-C939385E5C94"}
 */
function inicializar_lst_dataForm (){
	
	var ds = databaseManager.createEmptyDataSet();
	ds.addColumn('guar_fechaingreso');
	ds.addColumn('guar_horaingreso');
	ds.addColumn('guar_histclinica');
	ds.addColumn('guar_apenom');
	ds.addColumn('guar_diagnostico');
	ds.addColumn('guar_estado');
	ds.addColumn('guar_medico');
	ds.addColumn('guar_tipomed');
	ds.addColumn('per_apelnom');
	ds.addColumn('med_apenom');
	ds.addColumn('guar_especialidad');
	ds.addColumn('pat_descrip');
	
	var $frm = solutionModel.getForm('libro_guardia_lst_consulta');
	var $tipos = [JSColumn.TEXT,JSColumn.TEXT,JSColumn.TEXT,JSColumn.TEXT,JSColumn.TEXT,JSColumn.INTEGER,JSColumn.TEXT,JSColumn.INTEGER,JSColumn.TEXT,JSColumn.TEXT,JSColumn.INTEGER,JSColumn.TEXT];
	$frm.dataSource = ds.createDataSource('libro_guardia_lst_consulta', $tipos);
	forms.libro_guardia_lst_consulta.controller.recreateUI();	
}

/**
 * @properties={typeid:24,uuid:"D537EF1D-DC01-4533-B0C1-C4EF129989C9"}
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
 * @properties={typeid:24,uuid:"F3148A1B-2E10-4FCA-8C67-860292D8C73D"}
 */
function onAction_limpiarForm(event) {
	
	elements.lbl_procesando.visible = false;
	application.updateUI();
	f_fechaDesde = null;
	f_fechaHasta = null;
	f_isValid = false;
	elements.lblResultado.text = 'Resultado:';
		
	if(forms.libro_guardia_lst_consulta.foundset.getSize() > 0){
		forms.libro_guardia_lst_consulta.foundset.clear();		
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
 * @properties={typeid:24,uuid:"03BD7BF9-EF7E-48E8-BA45-B0519E8EFD92"}
 */
function onShow_inicializarForm(firstShow, event) {
	
	f_isValid = false;
	inicializar_lst_dataForm();
	elements.cld_fechaDesde.requestFocus();
	
	// control del elemento por perfil	    		
	var $form = controller.getName();
	globals.libro_guardia_controlarElementos($form);
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"C8DE92A4-4119-4567-95A2-1A26ACA39CB1"}
 */
function onAction_fechaDesde(event) {
	elements.cld_fechaHasta.requestFocus();
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"5DA7653F-74B7-4D53-9F07-8CDE1F69B85D"}
 */
function onAction_fechaHasta(event) {
	elements.btn_procesar.requestFocus();
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"102DCE97-032B-4416-AFA7-477AB46A8CC8"}
 * @AllowToRunInFind
 */
function onAction_generarReporte(event) {
	
	try{
		if(forms.libro_guardia_lst_consulta.foundset.getSize() > 0){
			
			var fechaDesde = globals.FormatearFecha(f_fechaDesde,"AAAAMMDD");
			var fechaHasta = globals.FormatearFecha(f_fechaHasta,"AAAAMMDD");
			
			var mFechaDesde = String(fechaDesde).substr(6,2) + '/' + String(fechaDesde ).substr(4,2) + '/' + String(fechaDesde).substr(0,4);
			var mFechaHasta = String(fechaHasta).substr(6,2) + '/' + String(fechaHasta ).substr(4,2) + '/' + String(fechaHasta).substr(0,4);
			
			var message = "¿Esta seguro que desea generar el libro de guardia?\nPeriodo " + mFechaDesde + " - " + mFechaHasta;
			if(globals.DIALOGS.showQuestionDialog("Atención!",message,"Si", "No") == "Si"){
				
				if(f_isValid){
					
				var firstDate = 0;
				
				var fs = databaseManager.getFoundSet("desal","tbl_parametros");
				fs.find();
				fs['paramid']= '15';
				fs.search();
				if(fs.getSize()>0){
					firstDate = fs['fechacbl'];
				}
				
				// Validar que la fecha desde, debe ser 1 dia mas que la ultima fecha de la tabla param
				var firstDateAux = globals.IntegerToDate(firstDate);
				var dias = globals.Contar_dias(firstDateAux, f_fechaDesde);
				
				if(firstDate > 0 && dias == 1 ){
						/*
						// Obteniendo especialista y matricula
						var sqlEsp = "select HjlDirectorT,HjlMatricula,HjlInsMin from tbc_hisjefelab\
						where HjlArea = 1\
						and HjlFechad <= " + fechaDesde
						+ " and (HjlFechah >= " + fechaHasta + " or HjlFechah = 0)";
						var dsEsp = databaseManager.getDataSetByQuery('asistencial',sqlEsp,null,-1);
						var especialista = '';
						var resolucion = '';
						
						if(dsEsp.getMaxRowIndex() > 0){*/
						if(true){
							
							elements.lbl_procesando.visible = true;
							application.updateUI();
							
							//especialista = utils.stringTrim( dsEsp.getValue(1,1)) + ' ' + utils.stringTrim( dsEsp.getValue(1,2))
							//resolucion = utils.stringTrim( dsEsp.getValue(1,3))
							
							var $params = {
								fechadesde: fechaDesde.substr(6,2) + '/' + fechaDesde.substr(4,2) + '/' + fechaDesde.substr(0,4),
								fechahasta: fechaHasta.substr(6,2) + '/' + fechaHasta.substr(4,2) + '/' + fechaHasta.substr(0,4),
								titulo: 'LIBRO DE GUARDIA',
								especialista: '',
								especialidad: '',
								resolucion: ''
							}
							
							//var fileNameJasper = 'LB-CIRUAMBU.jasper';
							// compilando para jasper ambiente de pruebas
							//plugins.jasperPluginRMI.compileReport("LB-GUARDIA.jrxml");
							// Generando PDF
							var fileName = "c:/temp/LB-GUARDIA-" + fechaDesde + "-" + fechaHasta;
						    plugins.jasperPluginRMI.runReport(forms.libro_guardia_lst_consulta.foundset,'LB-GUARDIA.jasper', fileName + '.pdf',plugins.jasperPluginRMI.OUTPUT_FORMAT.PDF,$params)
													
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
									vDirServer = '/app/servoyd/application_server/server/webapps/ROOT/uploads/libroguardia';
								}
								else{
									// Ambiente Produccion
									vDirServer = '/app/servoy/application_server/server/webapps/ROOT/uploads/libroguardia';
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
							globals.DIALOGS.showInfoDialog("Resultado","El libro de guardia se generó correctamente.","Aceptar")
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
					globals.DIALOGS.showWarningDialog("Atención","No ha sido posible generar el libro. Corrija los siguientes errores y vuelva a intentar.\nExisten pacientes sin alta en el periodo.","Aceptar");
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
 * @properties={typeid:24,uuid:"4DD443F0-2FF9-4FD0-A23A-C559279EDA1A"}
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
 * @properties={typeid:24,uuid:"B7E5E5E7-FA19-49B2-9943-25906C04D658"}
 */
function onAction_cerrar(event) {
	f_cerrarForm = true;
	onHide_consultaProtocolo(event);
}

/**
 * @properties={typeid:24,uuid:"0F63A6C2-C67F-45D8-AB78-131A34959837"}
 */
function convertNumberToHour_HHMM(hour) {
	var hora = '';
		
		switch(String(hour).length){
			
			case 1: 
				hora = '00:0'+ String(hour);
				break;
			case 2:
				hora = '00:'+ String(hour);
				break;
			case 3:
				hora = '0'+ String(hour).substr(0,1) + ':' + String(hour).substr(1,2);
				break;
			case 4:
				hora = String(hour).substr(0,2) + ':' + String(hour).substr(2,2);
				break;
			default:
				hora = '';
				break;
		}

		return hora;
}