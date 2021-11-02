
/**
 * @properties={typeid:35,uuid:"AD81DBFF-D79F-4A97-B443-C064E6F4CAE5",variableType:-4}
 */
var frm_aux = new Array();
/**
 * @properties={typeid:35,uuid:"35F6F6CD-ED9D-42B6-816C-325D1E5CAD18",variableType:-4}
 */
var frm_ds_aux = new Array();

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"30EF516F-917E-45BE-B442-B3ED647F1E52"}
 */
var fechaCarga = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"C245E66A-BB2B-44FE-865E-67C30590BD8B"}
 */
var paciente = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"99B82E72-7E47-41FA-A269-4B314A587B70"}
 */
var historiaClinica = '';

/**
 * @properties={typeid:35,uuid:"ED6A1945-92B5-4225-897D-289B562825D8",variableType:-4}
 */
var f_fechaHasta = null;

/**
 * @properties={typeid:35,uuid:"5EFE9948-A580-4D24-ACDA-AA0BC7F8D310",variableType:-4}
 */
var f_fechaDesde = null;

/**
 * 
 * @param event
 *
 * @properties={typeid:24,uuid:"07121A38-6CD4-426F-8E3F-96B38C2C1FB8"}
 */
function onAction_procesar(event) {
	
	if(validDataForm()){
			
	var fechaDesde = globals.FormatearFecha(f_fechaDesde,"AAAAMMDD");
	var fechaHasta = globals.FormatearFecha(f_fechaHasta,"AAAAMMDD");
	
	var $sql = 'SELECT adm_fecing, adm_horing, adm_fecaltaefec, adm_horaaltaefec, adm_histclin, Adm_ApelNom as nombre';
		$sql += ' , adm_fecnac, adm_tipdocu, adm_nrodocu, obras.Obr_RazonSoc as cobertura';
		$sql += ' , if(adm_tipmedinterna = 1, mep.MedPerapeynom, per.Per_ApelNom) as Nombre_Medico'; 
		$sql += ' , mep.medpermatricula , pato.pat_descrip, per.Per_CodMatri, adm_tipmedinterna';		
	 	$sql += ' FROM tbc_admision';	 	
	 	$sql += ' left join maestros.tbc_obras            obras on obras.Obr_Codigo= Adm_ObrSoc';
	 	$sql += ' left join maestros.tbc_personal         per   on per.per_legajo  = adm_medinterna';
	 	$sql += ' left join maestros.tbc_medicos_personal mep   on mep.MedPerCod   = adm_medinterna';
	 	$sql += ' left join maestros.tbc_patologia        pato  on pato.pat_codi   = adm_patoling';
	 	
	    $sql += ' WHERE adm_fecing <= ' + fechaHasta;
	    $sql += ' and adm_fecaltaefec=0 ';	    
	
	var $ds = databaseManager.getDataSetByQuery('asistencial',$sql,null,-1);
	
   	    $sql = 'SELECT adm_fecing, adm_horing, adm_fecaltaefec, adm_horaaltaefec, adm_histclin, Adm_ApelNom as nombre';
	    $sql += ' , adm_fecnac, adm_tipdocu, adm_nrodocu, obras.Obr_RazonSoc as cobertura';
	    $sql += ' , if(adm_tipmedinterna = 1, mep.MedPerapeynom, per.Per_ApelNom) as Nombre_Medico'; 
		$sql += ' , mep.medpermatricula , pato.pat_descrip, per.Per_CodMatri, adm_tipmedinterna';		
	 	$sql += ' FROM tbc_admision';	 	
	 	$sql += ' left join maestros.tbc_obras            obras on obras.Obr_Codigo= Adm_ObrSoc';
	 	$sql += ' left join maestros.tbc_personal         per   on per.per_legajo  = adm_medinterna';
	 	$sql += ' left join maestros.tbc_medicos_personal mep   on mep.MedPerCod   = adm_medinterna';
	 	$sql += ' left join maestros.tbc_patologia        pato  on pato.pat_codi   = adm_patoling';
 	
        $sql += ' WHERE adm_fecaltaefec >= ' + fechaDesde; 
    
    var $ds2 = databaseManager.getDataSetByQuery('asistencial',$sql,null,-1);
	
   	if($ds.getMaxRowIndex() > 0 || $ds2.getMaxRowIndex() > 0){
   	    //Procesar y crear nuevo Dataset
	    frm_ds_aux = databaseManager.createEmptyDataSet()
		frm_ds_aux.addColumn('adm_fecing',1,JSColumn.TEXT)   
		frm_ds_aux.addColumn('adm_horing',2,JSColumn.TEXT)
		frm_ds_aux.addColumn('adm_fecaltaefec',3,JSColumn.TEXT)
		frm_ds_aux.addColumn('adm_horaaltaefec',4,JSColumn.TEXT)
		frm_ds_aux.addColumn('adm_histclin',5,JSColumn.TEXT)
		frm_ds_aux.addColumn('nombre',6,JSColumn.TEXT)
		frm_ds_aux.addColumn('adm_fecnac',7,JSColumn.DATETIME)
		frm_ds_aux.addColumn('adm_tipdocu',8,JSColumn.TEXT)
		frm_ds_aux.addColumn('adm_nrodocu',9,JSColumn.TEXT)
		frm_ds_aux.addColumn('cobertura',10,JSColumn.TEXT)
        frm_ds_aux.addColumn('Nombre_Medico',11,JSColumn.TEXT)
		frm_ds_aux.addColumn('Matricula',12,JSColumn.TEXT)
		frm_ds_aux.addColumn('pat_descripcion',13,JSColumn.TEXT)		
		frm_ds_aux.addColumn('adm_fecing_num',14,JSColumn.INTEGER)
		frm_ds_aux.addColumn('adm_horing_num',15,JSColumn.INTEGER)
		
	    for (var j = 1; j <= $ds.getMaxRowIndex(); j++){
	    	var aux_matricula
			if($ds.getValue(j,15) == 0){
				aux_matricula = $ds.getValue(j,14)
			}else{
				aux_matricula = $ds.getValue(j,12)
			}
	    	frm_ds_aux.addRow([$ds.getValue(j,1),  $ds.getValue(j,2),  $ds.getValue(j,3),  $ds.getValue(j,4),  $ds.getValue(j,5),  $ds.getValue(j,6),
	    	                globals.consulta_2011_calcularEdad(utils.stringToNumber($ds.getValue(j,7)),fechaHasta),
	    	                $ds.getValue(j,8),  $ds.getValue(j,9),  $ds.getValue(j,10), $ds.getValue(j,11), aux_matricula,
							$ds.getValue(j,13), $ds.getValue(j,1), $ds.getValue(j,2)])
	    }
	    for (j = 1; j <= $ds2.getMaxRowIndex(); j++){
	    	if($ds2.getValue(j,1) <= fechaHasta){
	    		if($ds2.getValue(j,15) == 0){
					aux_matricula = $ds2.getValue(j,14)
				}else{
					aux_matricula = $ds2.getValue(j,12)
				}
	    		frm_ds_aux.addRow([$ds2.getValue(j,1),  $ds2.getValue(j,2),  $ds2.getValue(j,3),  $ds2.getValue(j,4),  $ds2.getValue(j,5),  $ds2.getValue(j,6),
                                globals.consulta_2011_calcularEdad(utils.stringToNumber($ds2.getValue(j,7)),fechaHasta),
	    	                    $ds2.getValue(j,8),  $ds2.getValue(j,9),  $ds2.getValue(j,10), $ds2.getValue(j,11), aux_matricula,
								$ds2.getValue(j,13), $ds2.getValue(j,1), $ds2.getValue(j,2)])
	    	}
	    }
	    frm_ds_aux.sort(14,true)
		frm_ds_aux.sort(15,true)
	    var $frm = solutionModel.getForm('lst_registro_pacientes_internados');
 	    var $tipos = [JSColumn.TEXT, JSColumn.TEXT, JSColumn.TEXT,JSColumn.TEXT, JSColumn.TEXT, JSColumn.TEXT,JSColumn.TEXT,JSColumn.TEXT,JSColumn.TEXT
	                 ,JSColumn.TEXT,JSColumn.TEXT,JSColumn.TEXT,JSColumn.TEXT,JSColumn.INTEGER,JSColumn.INTEGER];
	    $frm.dataSource = frm_ds_aux.createDataSource('lst_registro_pacientes_internados', $tipos);
   	}
	forms.lst_registro_pacientes_internados.controller.recreateUI();	
	elements.tabless.tabIndex=2;
	
	elements.cld_fechaDesde.readOnly = true;
	elements.cld_fechaHasta.readOnly = true;
	}
}

/**
 * @properties={typeid:24,uuid:"EDB1F5F0-6142-4AF8-81B6-DB7919831338"}
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
 * @properties={typeid:24,uuid:"B66C0975-2BC5-4809-883B-F661301DE6CA"}
 */
function onAction_limpiarForm(event) {

	f_fechaDesde = null;
	f_fechaHasta = null;
		
	if(forms.lst_registro_pacientes_internados.foundset.getSize() > 0){
		forms.lst_registro_pacientes_internados.foundset.clear();		
	}
	
	frm_ds_aux = new Array()
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
 * @properties={typeid:24,uuid:"D5A8B9E0-F3D7-4A31-A4A0-B68CB0786486"}
 */
function onShow_inicializarForm(firstShow, event) {
	frm_ds_aux = new Array()
	elements.cld_fechaDesde.requestFocus();	
	
	// control del elemento por perfil	    		
	var $form = controller.getName();
	globals.consulta_2011_controlarElementos($form);	
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"4A95D13A-AF13-4A9E-B824-161D45EE1ADC"}
 */
function onAction_fechaDesde(event) {
	elements.cld_fechaHasta.requestFocus();
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"39478BDC-A334-4E91-BB48-70983A9692B6"}
 */
function onAction_fechaHasta(event) {
	elements.btn_procesar.requestFocus();
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"24861C1B-D2C5-4EE9-8918-07470ED6FA70"}
 * @AllowToRunInFind
 */
function onAction_generarReporte(event) {
	
	try{
		var maxInter = frm_ds_aux.getMaxRowIndex() 
		if(maxInter > 0){			
			var message = "¿Esta seguro que desea generar el libro de pacientes internados?";
			if(globals.DIALOGS.showQuestionDialog("Atención!",message,"Si", "No") == "Si"){
					
				var fechaDesde = globals.FormatearFecha(forms.frm_registro_pacientes_internados.f_fechaDesde,"AAAAMMDD");
				var fechaHasta = globals.FormatearFecha(forms.frm_registro_pacientes_internados.f_fechaHasta,"AAAAMMDD");
				var firstDate  = 0;
				var firstPage  = 0;
				
				var fs = databaseManager.getFoundSet("desal","tbl_parametros")
				fs.find()
				fs['paramid']=3
				fs.search()
				if(fs.getSize()>0){					
					firstDate = fs['fechadb'];
					firstPage = fs['contador_entero'];					
				}
							
				// Validar que la fecha desde, debe ser 1 dia mas que la ultima fecha de la tabla param
				var firstDateAux = firstDate //globals.IntegerToDate(firstDate);
				//firstDateAux.setFullYear(firstDate.toString().substr(0,4))
				//firstDateAux.setMonth(firstDate.toString().substr(4,2)-1)
				//firstDateAux.setDate(firstDate.toString().substr(6,2))
				var dias = globals.Contar_dias(firstDateAux, f_fechaDesde)
				
				if(firstDate > 0 && dias == 1 ){					
					var $params = {
					    fechadesde: fechaDesde.substr(6,2) + '/' + fechaDesde.substr(4,2) + '/' + fechaDesde.substr(0,4),
						fechahasta: fechaHasta.substr(6,2) + '/' + fechaHasta.substr(4,2) + '/' + fechaHasta.substr(0,4),
						firstPage : firstPage  
					}	
						
					
					var fileName = "c:/temp/LB-PACIEINTER-" + fechaDesde + "-" + fechaHasta;				
					plugins.jasperPluginRMI.runReport(frm_ds_aux,'libro_pacientes_internados_lst.jasper', fileName + '.pdf',plugins.jasperPluginRMI.OUTPUT_FORMAT.PDF,$params)
					
					var url=''
					var largo_url=application.getServerURL().length
					if (largo_url<24){
						// Ambiente local
					}else{
						url = application.getServerURL().substr(0,23)
						var puerto = url.split(':');
						if(puerto[2]!='8080'){
							// Ambiente Desarrollo
							var vDirServer='/app/servoyd/application_server/server/webapps/ROOT/uploads/librointernacion'
						}
						else{
							// Ambiente Produccion
							vDirServer='/app/servoy/application_server/server/webapps/ROOT/uploads/librointernacion'
						}
						
						plugins.UserManager.register( "Hypertelia", "q9SA5eCyb085cvATVO8s9onGe3iBzJyCTel8Y7J72BuG599wodOiU5OL26/pkKyv" );
						plugins.UserManager.copyFileToServer(fileName + '.pdf',vDirServer,true);
						plugins.file.deleteFile(fileName + '.pdf')
					}					
				    
					var i = 0
					firstPage++					
					for (var j = 1; j <= frm_ds_aux.getMaxRowIndex(); j++){
						i++
						if (i == 26){							
							i = 1
							firstPage++
						}						
					}
					fs['fechadb']=  globals.IntegerToDate(utils.stringToNumber(fechaHasta))
					fs['fechacbl']= fechaHasta
					fs['contador_entero']=firstPage;
					databaseManager.startTransaction()
					if(databaseManager.saveData(fs)){
						databaseManager.commitTransaction()
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
					  	       var thrown = record.exception.getValue()							
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
					
				    globals.DIALOGS.showInfoDialog("Resultado","El libro de Pacientes internados se generó correctamente.","Aceptar")	
						
			        }else{
				        var fechaError = firstDate.toString().substr(6,2)+"/"+firstDate.toString().substr(4,2)+"/"+firstDate.toString().substr(0,4);
				        firstDateAux.setTime(firstDateAux.getTime()+(1000*60*60*24));
				        fechaError = firstDateAux.getDate()+"/"+ (firstDateAux.getMonth()+1) + "/" + firstDateAux.getFullYear()
				        var messageDate = '\nLa fecha desde debe ser igual a ' + fechaError;
				        globals.DIALOGS.showWarningDialog("Atención","No ha sido posible generar el libro. Corrija los siguientes errores y vuelva a intentar." + messageDate + '.',"Aceptar")
			        }
		        }
	    }else{
		globals.DIALOGS.showWarningDialog("Atención!","No hay datos para generar el libro.","Aceptar")
	    }		
    }	catch(error){
		globals.DIALOGS.showErrorDialog("Error","No ha sido posible generar el libro. Vuelva a intentar. Si el problema persiste, contacte al administrador del sistema.","Aceptar")
	}	
}

/**
 * 
 * @param date
 *
 * @properties={typeid:24,uuid:"5842ED24-55DB-4613-9F99-A7FED73C9780"}
 */
function getNumberToDate(date){
	
	return String(date).substr(6,2) + '/' + String(date).substr(4,2) + '/' + String(date).substr(2,2);
}

/**
 * 
 * @param hour
 *
 * @properties={typeid:24,uuid:"8D777F6A-7DD3-492F-8062-2B5FFF8B4DC2"}
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
 * 
 * @param legajo
 *
 * @properties={typeid:24,uuid:"F50C4B64-1B8E-4347-AD02-42409429FE65"}
 */
function convertNumberToLegajo(legajo) {
	var leg = '';
	if(legajo != '0')
		leg = legajo.toString().substr(0,(legajo.toString().length - 1))+"/"+legajo.toString().substr((legajo.toString().length - 1),1);
	
	return leg;
}
/**
 * 
 * @param tipodoc
 *
 * @properties={typeid:24,uuid:"DA167F97-45C1-43D4-85E6-B8A528F00FB2"}
 */
function getTipoDoc(tipodoc) {
	
	var TipoDoc = '';
	
	switch(tipodoc){
		
		case '1': 
			TipoDoc = 'C.I.  ';
			break;
		case '2':
			TipoDoc = 'L.E.  ';
			break;
		case '3':
			TipoDoc = 'L.C.  ';
			break;
		case '4':
			TipoDoc = 'D.N.I.';
			break;
		case '5':
		    TipoDoc = 'PASAP ';
		    break;
		default:
			TipoDoc = '      ';
			break;
	}

	return TipoDoc;
}

/**
 * Handle hide window.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"1640C244-BCB4-49F3-B119-B38EE55AE61F"}
 */
function onHide_consultaRegistro(event) {
	if(globals.gbl_cerrarConsultaRegistro){
		var $win = application.getWindow(application.getActiveWindow().getName());
		if($win != null){
			$win.hide();
			$win.destroy();
		}
	}
	return globals.gbl_cerrarConsultaRegistro;
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"96EF9341-541D-4099-9FA3-E4DECA4C9ADD"}
 */
function onAction_cerrar(event) {
	globals.gbl_cerrarConsultaRegistro = true;
	onHide_consultaRegistro(event);
}
