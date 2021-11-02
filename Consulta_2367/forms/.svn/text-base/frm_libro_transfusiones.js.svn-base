/**
 * @properties={typeid:35,uuid:"975688A1-2A9B-4D34-A084-6B1064A92C78",variableType:-4}
 */
var frm_aux = new Array();

/**
 * @properties={typeid:35,uuid:"908CE5DD-17F0-40FC-ABEA-536B046BD200",variableType:-4}
 */
var frm_ds_aux = new Array();

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"5403C963-4BEF-42B5-8BA7-44D05F08A8DE"}
 */
var fechaCarga = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"A6EB5AF4-32AC-4B5F-883F-66210A57E66F"}
 */
var paciente = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"31390B26-9C8A-4808-905B-EC5B3F72AF5A"}
 */
var historiaClinica = '';

/**
 * @properties={typeid:35,uuid:"A84F8921-2419-4CFC-8DD9-F59F208F5274",variableType:-4}
 */
var f_fechaHasta = null;

/**
 * @properties={typeid:35,uuid:"021538A7-AD27-482E-A5FF-4CE01B77E1D0",variableType:-4}
 */
var f_fechaDesde = null;

/**
 * 
 * @param event
 *
 * @properties={typeid:24,uuid:"62BBFD41-B3CA-41A3-B660-4C85A71AC770"}
 */
function onAction_procesar(event) {
	
	if(validDataForm()){
	elements.lbl_procesando.visible = true
	application.updateUI()
	var fechaDesde = globals.FormatearFecha(f_fechaDesde,"AAAAMMDD");
	var fechaHasta = globals.FormatearFecha(f_fechaHasta,"AAAAMMDD");
	
	var $sql = 'SELECT pres.prehFechatrans, pres.prehHoratrans, compNumero, pedh.pedhAdmis, pedh.pedhHistclinica, pres.prehNumero ';
		$sql += ' , pedh.pedhHabi, pedh.pedhCama, pres.prehGruporec, pres.prehRhrec, pres.prehAnticuer, compCompatible';
		$sql += ' , pedh.pedhIemed, pedh.pedhMedico, compComponen, compCantidad, don.donaGrupo, don.donaFactor, compIrradiada'; 
		$sql += ' , compFiltrada, pres.prehLegtecnico, pedh.pedhObra';		 	
		$sql += ' FROM tbc_componen';	 	
	 	$sql += ' left join tbc_donantes                      don on don.donanumero = compNumero';
	 	$sql += ' left join tbc_preshemo                     pres on pres.prehnumero = compprotocolo and';
	 	$sql += ' pres.prehcodigo = compcodigo and pres.prehsecuen = compitprot';
	 	$sql += ' left join tbc_pedhemo                      pedh on pedh.pedhnumero = compprotocolo';	 		
	 	$sql += ' WHERE compfechadestino <= ' + fechaHasta;
	    $sql += ' and compfechadestino >=  ' + fechaDesde;
	    $sql += ' and compdestino = 1 and pres.prehtipocod = 1';
	
	var $ds = databaseManager.getDataSetByQuery('asistencial',$sql,null,-1);	

	
   	if($ds.getMaxRowIndex() > 0){
   	    //Procesar y crear nuevo Dataset
	    frm_ds_aux = databaseManager.createEmptyDataSet()
		frm_ds_aux.addColumn('tra_fecha',1,JSColumn.TEXT)   
		frm_ds_aux.addColumn('tra_hora',2,JSColumn.TEXT)
		frm_ds_aux.addColumn('tra_numregistro',3,JSColumn.TEXT)
		frm_ds_aux.addColumn('tra_apeynom',4,JSColumn.TEXT)
		frm_ds_aux.addColumn('tra_protocolo',5,JSColumn.TEXT)
		frm_ds_aux.addColumn('tra_habita',6,JSColumn.TEXT)
		frm_ds_aux.addColumn('tra_grsang',7,JSColumn.TEXT)
		frm_ds_aux.addColumn('tra_rh',8,JSColumn.TEXT)
		frm_ds_aux.addColumn('tra_ac',9,JSColumn.TEXT)
		frm_ds_aux.addColumn('tra_compat',10,JSColumn.TEXT)
        frm_ds_aux.addColumn('tra_medsol',11,JSColumn.TEXT)
		frm_ds_aux.addColumn('tra_tratipo',12,JSColumn.TEXT)
		frm_ds_aux.addColumn('tra_tracant',13,JSColumn.TEXT)		
		frm_ds_aux.addColumn('tra_tragrsan',14,JSColumn.TEXT)
		frm_ds_aux.addColumn('tra_trarh',15,JSColumn.TEXT)
		frm_ds_aux.addColumn('tra_trairradia',16,JSColumn.TEXT)
		frm_ds_aux.addColumn('tra_trafiltra',17,JSColumn.TEXT)
		frm_ds_aux.addColumn('tra_realizadapor',18,JSColumn.TEXT)
		frm_ds_aux.addColumn('tra_histcli',19,JSColumn.TEXT)
		frm_ds_aux.addColumn('tra_cobertura',20,JSColumn.TEXT)
		
	    for (var j = 1; j <= $ds.getMaxRowIndex(); j++){
	    	var $aux_hora     = $ds.getValue(j,2)
			var $aux_registro = $ds.getValue(j,3)
	    	var $aux_apeynom  = ''
			var $aux_habita   = ''
			var $aux_rh       = ''
			var $aux_comp     = ''
			var $aux_med_sol  = ''
			var $aux_factor   = ''
			var $aux_irradia  = ''
			var $aux_filtrada = ''
			var $aux_tecnico  = ''
			var $aux_obra     = ''	
			globals.gbl_hiscli = $ds.getValue(j,5)
			if($ds.getValue(j,4) == 0){
				$aux_apeynom = tbc_admision_scroll_to_tbc_admision_scroll.adm_apelnom
				if($ds.getValue(j,7) != null){
					if($ds.getValue(j,7) != 0){ 
				        $aux_habita = $ds.getValue(j,7) + '-' + $ds.getValue(j,8)
					}
				}
			}else{
				$aux_apeynom = tbc_hist_cab_new_to_tbc_hist_cab_new.histcabapellnom
				if($ds.getValue(j,4) == 1){
					$aux_habita = 'GUA'					
				}else{
				    if($ds.getValue(j,4) == 2){
					    $aux_habita = 'CEX'
				    }
				}
			}
			if($ds.getValue(j,10) == 1){
				$aux_rh = ' + '
			}else{
				$aux_rh = 'neg'
			}
			if($ds.getValue(j,12) == '+'){
				$aux_comp = ' + '
			}else{
				if($ds.getValue(j,12) == '-'){
				    $aux_comp = 'NEG'
				}
			}
			globals.gbl_con = $ds.getValue(j,14)
			if($ds.getValue(j,13) == 0){
			    $aux_med_sol = tbc_personal_to_tbc_personal.per_codmatri
			}else{
				$aux_med_sol = tbc_medicos_to_tbc_medicos.med_matricula
			}
			if($ds.getValue(j,18) == '+'){
				$aux_factor= ' + '
			}else{
				if($ds.getValue(j,18) == '-'){
				    $aux_factor = 'NEG'
				}
			}
			if($ds.getValue(j,19) == 1){
				$aux_irradia = 'Si'
			}else{
				$aux_irradia = 'No'				
			}
			if($ds.getValue(j,20) == 1){
				$aux_filtrada = 'Si'
			}else{
				$aux_filtrada = 'No'				
			}
			globals.gbl_con = $ds.getValue(j,21)
			$aux_tecnico = tbc_personal_to_tbc_personal.per_codmatri
			
			globals.gbl_cobertura = $ds.getValue(j,22)
			$aux_obra = tbc_obras_to_tbc_obras.obr_razonsoc
			
	    	frm_ds_aux.addRow([$ds.getValue(j,1), $aux_hora, $aux_registro, $aux_apeynom, $ds.getValue(j,6), $aux_habita, $ds.getValue(j,9),	    	               
	    	                $aux_rh, $ds.getValue(j,11).substr(0,3), $aux_comp, utils.stringTrim($aux_med_sol), getComponen($ds.getValue(j,15)), $ds.getValue(j,16),							
							$ds.getValue(j,17), $aux_factor, $aux_irradia, $aux_filtrada, $aux_tecnico, $ds.getValue(j,5), $aux_obra ])
	    }
	    
	    var $frm = solutionModel.getForm('lst_libro_transfusiones');
 	    var $tipos = [JSColumn.TEXT, JSColumn.TEXT, JSColumn.TEXT, JSColumn.TEXT, JSColumn.TEXT, JSColumn.TEXT,JSColumn.TEXT,JSColumn.TEXT,JSColumn.TEXT
	                 ,JSColumn.TEXT, JSColumn.TEXT, JSColumn.TEXT, JSColumn.TEXT, JSColumn.TEXT, JSColumn.TEXT,JSColumn.TEXT,JSColumn.TEXT,JSColumn.TEXT
					 ,JSColumn.TEXT, JSColumn.TEXT];
	    $frm.dataSource = frm_ds_aux.createDataSource('lst_libro_transfusiones', $tipos);
   	}
	forms.lst_libro_transfusiones.controller.recreateUI();	
	elements.tabless.tabIndex=2;
	
	elements.cld_fechaDesde.readOnly = true;
	elements.cld_fechaHasta.readOnly = true;
	elements.lbl_procesando.visible  = false;	
	}
}

/**
 * @properties={typeid:24,uuid:"EB0F3368-FDA4-412E-B4C4-865F372C4340"}
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
 * @properties={typeid:24,uuid:"E532ED43-DE96-4153-8764-E14D576130D0"}
 */
function onAction_limpiarForm(event) {

	f_fechaDesde = null;
	f_fechaHasta = null;
		
	if(forms.lst_libro_transfusiones.foundset.getSize() > 0){
		forms.lst_libro_transfusiones.foundset.clear();		
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
 * @properties={typeid:24,uuid:"404AD39E-0357-4F65-93AE-172C050709BD"}
 */
function onShow_inicializarForm(firstShow, event) {
	frm_ds_aux = new Array()
	elements.cld_fechaDesde.requestFocus();	
	
	// control del elemento por perfil	    		
	var $form = controller.getName();
	globals.consulta_2367_controlarElementos($form);	
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"208BF2F2-6F8B-4C09-9D16-CF207148FC25"}
 */
function onAction_fechaDesde(event) {
	if(f_fechaDesde > globals.gbl_fecha_hoy){
	    globals.DIALOGS.showErrorDialog('Error','Fechas incorreta', 'Ok')
	    elements.cld_fechaDesde.requestFocus()
	}else{
        elements.cld_fechaHasta.requestFocus()
	}
}

/** 
 * @param event
 *
 * @properties={typeid:24,uuid:"A66C4D3B-870E-4417-BF6B-208F5D122E3E"}
 */
function onAction_fechaHasta(event) {
	if(f_fechaDesde > f_fechaHasta){
	   globals.DIALOGS.showErrorDialog('Error','Fechas hasta no puede ser menor que fecha desde', 'Ok')
	   elements.cld_fechaHasta.requestFocus()
	}else{
		if(f_fechaHasta > globals.gbl_fecha_hoy){
			globals.DIALOGS.showErrorDialog('Error','Fechas incorreta', 'Ok')
			elements.cld_fechaHasta.requestFocus()
		}else{
	        elements.btn_procesar.requestFocus();
		}
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"380CCF88-6355-403F-A36A-FE629C591236"}
 * @AllowToRunInFind
 */
function onAction_generarReporte(event) {
	
	try{
		var maxInter = frm_ds_aux.getMaxRowIndex() 
		if(maxInter > 0){			
			var message = "¿Esta seguro que desea generar el libro de transfusiones?";
			if(globals.DIALOGS.showQuestionDialog("Atención!",message,"Si", "No") == "Si"){
					
				var fechaDesde = globals.FormatearFecha(forms.frm_libro_transfusiones.f_fechaDesde,"AAAAMMDD");
				var fechaHasta = globals.FormatearFecha(forms.frm_libro_transfusiones.f_fechaHasta,"AAAAMMDD");
				var firstDate  = 0;
				var firstPage  = 0;
				var firstLib   = 0;
				
				var fs = databaseManager.getFoundSet("desal","tbl_parametros")
				fs.find()
				fs['paramid']=4
				fs.search()
				if(fs.getSize()>0){					
					firstDate = fs['fechadb'];
					firstPage = fs['contador_entero'];
					firstLib  = fs['contador_decimal'];					
				}
				// Validar que la fecha desde, debe ser 1 dia mas que la ultima fecha de la tabla param
				var firstDateAux = firstDate
				var dias = globals.Contar_dias(firstDateAux, f_fechaDesde)
				
				if(firstDate > 0 && dias == 1 ){					
					var $params = {					   
						firstPage : firstPage,
						firstLib  : firstLib
					}
						
					var fileName = "LB-TRANSFUSION-" + fechaDesde + "-" + fechaHasta;				
					plugins.jasperPluginRMI.runReport(frm_ds_aux,'libro_transfusiones_lst.jasper', fileName + '.pdf',plugins.jasperPluginRMI.OUTPUT_FORMAT.PDF,$params)
					
					var url=''
					var largo_url=application.getServerURL().length
					if (largo_url<24){
						// Ambiente local
					}else{
						url = application.getServerURL().substr(0,23)
						var puerto = url.split(':');
						if(puerto[2]!='8080'){
							// Ambiente Desarrollo
							var vDirServer='/app/servoyd/application_server/server/webapps/ROOT/uploads/librohemoterapia'
						}
						else{
							// Ambiente Produccion
							vDirServer='/app/servoy/application_server/server/webapps/ROOT/uploads/librohemoterapia'
						}
						
						plugins.UserManager.register( "Hypertelia", "q9SA5eCyb085cvATVO8s9onGe3iBzJyCTel8Y7J72BuG599wodOiU5OL26/pkKyv" );
						plugins.UserManager.copyFileToServer(fileName + '.pdf',vDirServer,true);
						plugins.file.deleteFile(fileName + '.pdf')
					}					
				    
					var i = 0
					firstPage++			
					if(firstPage > 200){
						firstPage = 1
						firstLib++
					}					
					for (var j = 1; j <= frm_ds_aux.getMaxRowIndex(); j++){
						i++
						if (i == 40){							
							i = 1
							firstPage++
							
							if(firstPage > 200){
								firstPage = 1
								firstLib ++
							}
						}						
					}
											
					fs['fechadb']=  globals.IntegerToDate(utils.stringToNumber(fechaHasta)) //utils.stringToNumber(fechaHasta);
					fs['fechacbl']=  fechaHasta
					fs['contador_entero']=firstPage;
					fs['contador_decimal']=firstLib;
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
					
				    globals.DIALOGS.showInfoDialog("Resultado","El libro de Transfusiones se generó correctamente.","Aceptar")	
						
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
 * @properties={typeid:24,uuid:"80DB2D7A-EBE2-43BE-9C79-FA34EF680AE1"}
 */
function getNumberToDate(date){
	
	return String(date).substr(6,2) + '/' + String(date).substr(4,2) + '/' + String(date).substr(2,2);
}

/**
 * 
 * @param hour
 *
 * @properties={typeid:24,uuid:"E9861928-51C9-4A1B-9766-0C7435BCE993"}
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
 * @properties={typeid:24,uuid:"F2CC57C8-387A-4C78-932D-62AA2241CBA8"}
 */
function convertNumberToLegajo(legajo) {
	var leg = '';
	if(legajo != '0')
		leg = legajo.toString().substr(0,(legajo.toString().length - 1))+"/"+legajo.toString().substr((legajo.toString().length - 1),1);
	
	return leg;
}

/**
 *
 * @param componen
 *
 * @properties={typeid:24,uuid:"769D833D-A51A-40A5-8F4B-EA1B5990413D"}
 */
function getComponen(componen) {
	
	var Componen = '';
	
	switch(componen){
	    case 0: 
	        Componen = ' ST ';
	        break;
		case 1: 
			Componen = ' GRC';
			break;
		case 2:
			Componen = ' PRF';
			break;
		case 3:
			Componen = ' PM ';
			break;
		case 4:
			Componen = 'CRYO';
			break;
		case 5:
		    Componen = ' CP ';
		    break;
		case 6:
	        Componen = ' CPA';
	        break;
		default:
			Componen = '      ';
			break;
	}

	return Componen;
}

/**
 * Handle hide window.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"40D88299-51A1-47CC-9567-4559EAE22EF3"}
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
 * @properties={typeid:24,uuid:"8D027B46-A70E-4F98-ADF5-976D4181E771"}
 */
function onAction_cerrar(event) {
	globals.gbl_cerrarConsultaRegistro = true;
	onHide_consultaRegistro(event);
}
