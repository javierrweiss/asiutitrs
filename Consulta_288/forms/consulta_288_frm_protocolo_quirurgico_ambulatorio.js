/**
 * @properties={typeid:35,uuid:"8B7424FD-624E-41A9-BC41-6BFF0387ADAF",variableType:-4}
 */
var f_cerrarForm = false;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"6037D3FB-DF2C-40FE-92B3-B852DFEBD509",variableType:93}
 */
var f_fechaHasta = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"19184A17-68A3-43CD-88D8-5466A941BDFD",variableType:93}
 */
var f_fechaDesde = null;

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"6D908753-75ED-49C4-8498-5964DC28311E"}
 * @AllowToRunInFind
 */
function onAction_procesar(event) {
	
	if(validDataForm()){
			
	//var fechaDesde = globals.FormatearFecha(f_fechaDesde,"AAAAMMDD");
	//var fechaHasta = globals.FormatearFecha(f_fechaHasta,"AAAAMMDD");
	var fechaDesde = globals.FormatearFecha(f_fechaDesde,"AAAAMMDD");
	var fechaHasta = globals.FormatearFecha(f_fechaHasta,"AAAAMMDD");
	
	var $sql = 'SELECT cg.CirgHistClinica,cg.CirgProtocolo,cg.CirgFechaIngreso,cg.CirgHoraIngreso,cg.CirgFechaInicio,cg.CirgHoraInicio\
			,cg.CirgFechaFinal,cg.CirgHoraFinal,cab.HistCabApellNom,cab.histcabplanx,ob.Obr_RazonSoc\
			,cg.CirgNroQuirofa,inter.itv_descripcion,cab.histcabfechanac,cab.histcabnrobenef,g.Guar_Estado\
			FROM tbc_ciruguar cg\
			inner join tbc_guardia g on g.Guar_HistClinica = cg.CirgHistClinica and g.Guar_FechaIngreso = cg.CirgFechaIngreso and g.Guar_HoraIngreso = cg.CirgHoraIngreso\
			left join tbc_hist_cab_new cab on cab.HistCabNroUnico = cg.CirgHistClinica\
			left join maestros.tbc_obras ob on ob.Obr_Codigo= cab.HistCabObra\
			left join maestros.tbc_interven inter on inter.Itv_Codi = cg.CirgInterven\
			WHERE g.Guar_Estado < 9 and cg.CirgProtocolo > 0' 
			+ ' and cg.CirgFechaIngreso >= ' + fechaDesde
			+ ' and cg.CirgFechaIngreso <= ' + fechaHasta
			+ ' order by cg.CirgProtocolo';
	
	var $ds = databaseManager.getDataSetByQuery('asistencial',$sql,null,-1);
	//$ds.sort(2,true);
	var maxRows = $ds.getMaxRowIndex();
	elements.lblResultado.text = 'Resultado: ' + maxRows + ' items';
	
	var $frm = solutionModel.getForm('consulta_288_lst_protocolo_quirurgico_ambulatorio');
	var $tipos = [JSColumn.TEXT,JSColumn.TEXT,JSColumn.TEXT,JSColumn.TEXT, JSColumn.TEXT, JSColumn.TEXT,JSColumn.TEXT,JSColumn.TEXT,JSColumn.TEXT,JSColumn.TEXT,JSColumn.TEXT,JSColumn.TEXT,JSColumn.TEXT,JSColumn.INTEGER,JSColumn.TEXT,JSColumn.INTEGER];
	$frm.dataSource = $ds.createDataSource('consulta_288_lst_protocolo_quirurgico_ambulatorio', $tipos);

	forms.consulta_288_lst_protocolo_quirurgico_ambulatorio.controller.recreateUI();	
	elements.tabless.tabIndex=2;
	
	forms.consulta_288_lst_protocolo_quirurgico_ambulatorio.elements.btn_detalle.requestFocus();
	
	elements.cld_fechaDesde.readOnly = true;
	elements.cld_fechaHasta.readOnly = true;
	}
}

/**
 * @properties={typeid:24,uuid:"77588A4B-B831-4DD2-8304-E4BDFC353487"}
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
 * @properties={typeid:24,uuid:"A3D21DA6-A639-4283-861C-6A1C4EDF91B1"}
 */
function onAction_limpiarForm(event) {
	f_fechaDesde = null;
	f_fechaHasta = null;
	elements.lblResultado.text = 'Resultado:';
		
	if(forms.consulta_288_lst_protocolo_quirurgico_ambulatorio.foundset.getSize() > 0){
		forms.consulta_288_lst_protocolo_quirurgico_ambulatorio.foundset.clear();		
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
 * @properties={typeid:24,uuid:"C036015B-B6CA-455E-83F0-B277E8FE35A7"}
 */
function onShow_inicializarForm(firstShow, event) {
	elements.cld_fechaDesde.requestFocus();
	
	// control del elemento por perfil	    		
	var $form = controller.getName();
	globals.consulta_288_controlarElementos($form);
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"74C5803E-B87B-4C5E-88AD-F3F6C6329F24"}
 */
function onAction_fechaDesde(event) {
	elements.cld_fechaHasta.requestFocus();
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"274C6E9C-C6C5-400F-847E-E0011E69D648"}
 */
function onAction_fechaHasta(event) {
	elements.btn_procesar.requestFocus();
}


/**
 * @AllowToRunInFind
 *
 * @properties={typeid:24,uuid:"0043EA4D-3F0D-46AE-9389-F873C45A21AC"}
 */
function onAction_generarReporteExcel(){
	
	
	try{
			if(forms.consulta_288_lst_protocolo_quirurgico_ambulatorio.foundset.getSize() > 0){
			
			var message = "¿Esta seguro que desea generar el libro de cirugias ambulatorias?";
			if(globals.DIALOGS.showQuestionDialog("Atención!",message,"Si", "No") == "Si"){
				
				var fechaDesde = globals.FormatearFecha(forms.consulta_288_frm_protocolo_quirurgico_ambulatorio.f_fechaDesde,"AAAAMMDD");
				var fechaHasta = globals.FormatearFecha(forms.consulta_288_frm_protocolo_quirurgico_ambulatorio.f_fechaHasta,"AAAAMMDD");
				var firstPage = 0;
				var lastPage = 0;
				var firstDate = 0;
				
				var fs = databaseManager.getFoundSet("parametros","param")
				fs.find()
				fs['key_param']=1
				fs.search()
				if(fs.getSize()>0){
					firstPage = fs['prm_44'];
					firstDate = fs['prm_46'];
				}
				
				// Validar que la fecha desde, debe ser 1 dia mas que la ultima fecha de la tabla param
				var firstDateAux = globals.IntegerToDate(firstDate);
				//firstDateAux.setFullYear(firstDate.toString().substr(0,4))
				//firstDateAux.setMonth(firstDate.toString().substr(4,2)-1)
				//firstDateAux.setDate(firstDate.toString().substr(6,2))
				var dias = globals.Contar_dias(firstDateAux, f_fechaDesde)
				
				if(firstDate > 0 && dias == 1 ){	
					var sql = 'SELECT cg.CirgProtocolo FROM tbc_ciruguar cg\
						inner join tbc_guardia g on g.Guar_HistClinica = cg.CirgHistClinica and g.Guar_FechaIngreso = cg.CirgFechaIngreso and g.Guar_HoraIngreso = cg.CirgHoraIngreso\
						WHERE cg.CirgProtocolo > 0 and (g.Guar_Estado <= 3 or cg.CirgFechaFinal = 0)'
						+ ' and cg.CirgFechaIngreso >= ' + fechaDesde
						+ ' and cg.CirgFechaIngreso <= ' + fechaHasta
					var dsProtSinAlta = databaseManager.getDataSetByQuery('asistencial',sql,null,-1);
		
					if(dsProtSinAlta.getMaxRowIndex() == 0){
											
						var $sql = 'SELECT cg.CirgHistClinica nrohistoria,cg.CirgProtocolo protocolo,cg.CirgFechaIngreso,cg.CirgHoraIngreso\
							,cg.CirgFechaInicio,cg.CirgHoraInicio,cg.CirgFechaFinal,cg.CirgHoraFinal\
							,cab.HistCabApellNom nombre,cab.histcabplanx plan ,ob.Obr_RazonSoc cobertura,cab.histcabfechanac\
							,vcir.VcirTipoNome,vcir.VcirCodNome,nom.Nome_Descr nome_descr,prof.medperapeynom especialista\
							,ayu_1.MedPerApeynom ayu1,ayu_2.MedPerApeynom ayu2,aneste.MedPerApeynom anestesista,instru.per_apelnom instrumentista,vcir.VcirPorEspec\
							,cg.CirgMarcaMonito, cg.cirgusoanestesia\
							FROM tbc_ciruguar cg\
							inner join tbc_guardia g on g.Guar_HistClinica = cg.CirgHistClinica and g.Guar_FechaIngreso = cg.CirgFechaIngreso and g.Guar_HoraIngreso = cg.CirgHoraIngreso\
							left join tbc_hist_cab_new cab on cab.HistCabNroUnico = cg.CirgHistClinica\
							left join maestros.tbc_obras ob on ob.Obr_Codigo= cab.HistCabObra\
							inner join tbc_val_ciru vcir on vcir.VcirHistClinica = cg.CirgHistClinica and vcir.VcirFechaIngreso = cg.CirgFechaIngreso and vcir.VcirHoraIngreso = cg.CirgHoraIngreso\
							left join maestros.tbc_nomencla nom on nom.Nome_Codigo = vcir.VcirCodNome and nom.Nome_Tipo = vcir.VcirTipoNome\
							left join maestros.tbc_medicos_personal prof on prof.medpercod = vcir.VcirCodEspec\
							left join maestros.tbc_medicos_personal ayu_1 on ayu_1.MedPerCod = vcir.VcirCodAyud1\
							left join maestros.tbc_medicos_personal ayu_2 on ayu_2.MedPerCod = vcir.VcirCodAyud2\
							left join maestros.tbc_medicos_personal aneste on aneste.MedPerCod = vcir.VcirCodAneste\
							left join validalegajo.tbc_personal_login instru on instru.per_legajo = vcir.VcirCodInstru\
							WHERE g.Guar_Estado < 9 and cg.CirgProtocolo > 0'
							+ ' and cg.CirgFechaIngreso >= ' + fechaDesde
							+ ' and cg.CirgFechaIngreso <= ' + fechaHasta
							+ ' order by cg.CirgProtocolo';
							
					    var $dsProto = databaseManager.getDataSetByQuery('asistencial',$sql,null,-1);	
						var maxProto = $dsProto.getMaxRowIndex();
						
						 var $ds2 = databaseManager.createEmptyDataSet()
						 	$ds2.addColumn('paciente',1,JSColumn.TEXT)   
							$ds2.addColumn('historia',2,JSColumn.INTEGER)   
							$ds2.addColumn('protocolo',3,JSColumn.INTEGER)
							$ds2.addColumn('fecha',4,JSColumn.INTEGER)
							$ds2.addColumn('hora comienzo',5,JSColumn.INTEGER)
							$ds2.addColumn('hora final',6,JSColumn.INTEGER)
					
							$ds2.addColumn('cirujano',7,JSColumn.TEXT)
							$ds2.addColumn('anestesista',8,JSColumn.TEXT)
							$ds2.addColumn('anestesia',9,JSColumn.TEXT)
							$ds2.addColumn('ayudante',10,JSColumn.TEXT)
							$ds2.addColumn('practica',11,JSColumn.TEXT)
							var ayudante2=''
							var ayudante1=''
//							var ayudante4=''
							var ayudantes = ''
						 for (var ciruIndice = 1; ciruIndice <= maxProto; ciruIndice++) {
							var array = new Array;
							
//						 	var row = $dsInter.getRowAsArray(ciruIndice);
							array.push($dsProto.getValue(ciruIndice,9)) //
							array.push($dsProto.getValue(ciruIndice,1))
							array.push($dsProto.getValue(ciruIndice,2)) // protocolo
						
							var horaInicio = new Date()
							var horaFinal = new Date()
							//horaInicio.setHours(hours,minutes)
							if(!globals.IsBlank($dsProto.getValue(ciruIndice,3))){
								var fecha = new Date()
								
								fecha.setFullYear($dsProto.getValue(ciruIndice,3).toString().slice(0,4),(utils.stringToNumber(($dsProto.getValue(ciruIndice,3)).toString().slice(4,6))-1),$dsProto.getValue(ciruIndice,3).toString().slice(6,8))
					
								array.push(utils.dateFormat(fecha,'dd/MM/yyyy'))
							}else{
								array.push('') //fecha -- fechacarga vacia
							}
						
							if(!globals.IsBlank($dsProto.getValue(ciruIndice,6)) && !globals.IsBlank($dsProto.getValue(ciruIndice,8))  ){
								array.push(convertNumberToHour_HHMM($dsProto.getValue(ciruIndice,6))) // hora inicio
								array.push(convertNumberToHour_HHMM($dsProto.getValue(ciruIndice,8))) // hora final
							}
						
//							,$dsProto.getValue(indexAnterior,15)// nome_desc
//							,$dsProto.getValue(indexAnterior,16)// especialista 
//							,$dsProto.getValue(indexAnterior,17)// ayu1
//							,$dsProto.getValue(indexAnterior,18)// ayu2
//							,$dsProto.getValue(indexAnterior,19)// anestesista
//							,$dsProto.getValue(indexAnterior,20)// instrumentista
//							,$dsProto.getValue(indexAnterior,22)// monitoreo
							
							array.push($dsProto.getValue(ciruIndice,16)) // cirujano
							array.push($dsProto.getValue(ciruIndice,19)) // anestesista
							array.push($dsProto.getValue(ciruIndice,22)==1?'SI':'NO') // anestesia
							ayudante1=(globals.IsBlank($dsProto.getValue(ciruIndice,17)))?'':$dsProto.getValue(ciruIndice,17)
							ayudante2=(globals.IsBlank($dsProto.getValue(ciruIndice,18)))?'':$dsProto.getValue(ciruIndice,18)
//							ayudante4=(globals.IsBlank($dsProto.getValue(ciruIndice,14)))?'':$dsProto.getValue(ciruIndice,14)
							ayudantes = (ayudante1!='')?ayudante1:''+(ayudante2!='')?(', '+ayudante2):''
							array.push(ayudantes) // ayudante
//							array.push($dsInter.getValue(ciruIndice,18)) // practica
							array.push($dsProto.getValue(ciruIndice,15)) // practica

							$ds2.addRow(array)
							
						 	
						 }

							var csv = $ds2.getAsText(',','\n','"',true);
							var js = plugins.file.showFileSaveDialog('PROTOCOLOS_QUIRURGICOS_AMBULATORIOS.xls', 'Select location to save export file');
							if (!js) return;

							var success = plugins.file.writeTXTFile(js, csv, 'UTF8', 'application/vnd.ms-excel');		
							

					}
					else{
						var messageProt = '\nExisten protocolos sin alta:\n';
						var suma = 10;
						var enter = suma;
						for(i=1;i<=dsProtSinAlta.getMaxRowIndex();i++){
							if(i == 1)
								messageProt += dsProtSinAlta.getValue(i,1);
							else{
								
								if(i == enter){
									messageProt += '\n' + dsProtSinAlta.getValue(i,1);
									enter = enter + suma;
								}
								else{
									messageProt += ' ' + dsProtSinAlta.getValue(i,1);
								}
							}
						}
						
						globals.DIALOGS.showWarningDialog("Atención","No ha sido posible generar el libro. Corrija los siguientes errores y vuelva a intentar." + messageProt + '.',"Aceptar");
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
	
}
catch(error){
	globals.DIALOGS.showErrorDialog("Error","No ha sido posible generar el libro. Vuelva a intentar. Si el problema persiste, contacte al administrador del sistema.\n" + error.message,"Aceptar")
}

	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"61EA6B69-2E9D-4FF5-9018-EDE5FE65FED8"}
 * @AllowToRunInFind
 */
function onAction_generarReporte(event) {
	//try{
		if(forms.consulta_288_lst_protocolo_quirurgico_ambulatorio.foundset.getSize() > 0){
			
			var message = "¿Esta seguro que desea generar el libro de cirugias ambulatorias?";
			if(globals.DIALOGS.showQuestionDialog("Atención!",message,"Si", "No") == "Si"){
				
				var fechaDesde = globals.FormatearFecha(forms.consulta_288_frm_protocolo_quirurgico_ambulatorio.f_fechaDesde,"AAAAMMDD");
				var fechaHasta = globals.FormatearFecha(forms.consulta_288_frm_protocolo_quirurgico_ambulatorio.f_fechaHasta,"AAAAMMDD");
				var firstPage = 0;
				var lastPage = 0;
				var firstDate = 0;
				
				var fs = databaseManager.getFoundSet("parametros","param")
				fs.find()
				fs['key_param']=1
				fs.search()
				if(fs.getSize()>0){
					firstPage = fs['prm_44'];
					firstDate = fs['prm_46'];
				}
				
				// Validar que la fecha desde, debe ser 1 dia mas que la ultima fecha de la tabla param
				var firstDateAux = globals.IntegerToDate(firstDate);
				//firstDateAux.setFullYear(firstDate.toString().substr(0,4))
				//firstDateAux.setMonth(firstDate.toString().substr(4,2)-1)
				//firstDateAux.setDate(firstDate.toString().substr(6,2))
				var dias = globals.Contar_dias(firstDateAux, f_fechaDesde)
				
				if(firstDate > 0 && dias == 1 ){	
					var sql = 'SELECT cg.CirgProtocolo FROM tbc_ciruguar cg\
						inner join tbc_guardia g on g.Guar_HistClinica = cg.CirgHistClinica and g.Guar_FechaIngreso = cg.CirgFechaIngreso and g.Guar_HoraIngreso = cg.CirgHoraIngreso\
						WHERE cg.CirgProtocolo > 0 and (g.Guar_Estado <= 3 or cg.CirgFechaFinal = 0)'
						+ ' and cg.CirgFechaIngreso >= ' + fechaDesde
						+ ' and cg.CirgFechaIngreso <= ' + fechaHasta
					var dsProtSinAlta = databaseManager.getDataSetByQuery('asistencial',sql,null,-1);
		
					if(dsProtSinAlta.getMaxRowIndex() == 0){
											
						var $sql = 'SELECT cg.CirgHistClinica nrohistoria,cg.CirgProtocolo protocolo,cg.CirgFechaIngreso,cg.CirgHoraIngreso\
							,cg.CirgFechaInicio,cg.CirgHoraInicio,cg.CirgFechaFinal,cg.CirgHoraFinal\
							,cab.HistCabApellNom nombre,cab.histcabplanx plan ,ob.Obr_RazonSoc cobertura,cab.histcabfechanac\
							,vcir.VcirTipoNome,vcir.VcirCodNome,nom.Nome_Descr nome_descr,prof.medperapeynom especialista\
							,ayu_1.MedPerApeynom ayu1,ayu_2.MedPerApeynom ayu2,aneste.MedPerApeynom anestesista,instru.per_apelnom instrumentista,vcir.VcirPorEspec\
							,cg.CirgMarcaMonito\
							FROM tbc_ciruguar cg\
							inner join tbc_guardia g on g.Guar_HistClinica = cg.CirgHistClinica and g.Guar_FechaIngreso = cg.CirgFechaIngreso and g.Guar_HoraIngreso = cg.CirgHoraIngreso\
							left join tbc_hist_cab_new cab on cab.HistCabNroUnico = cg.CirgHistClinica\
							left join maestros.tbc_obras ob on ob.Obr_Codigo= cab.HistCabObra\
							inner join tbc_val_ciru vcir on vcir.VcirHistClinica = cg.CirgHistClinica and vcir.VcirFechaIngreso = cg.CirgFechaIngreso and vcir.VcirHoraIngreso = cg.CirgHoraIngreso\
							left join maestros.tbc_nomencla nom on nom.Nome_Codigo = vcir.VcirCodNome and nom.Nome_Tipo = vcir.VcirTipoNome\
							left join maestros.tbc_medicos_personal prof on prof.medpercod = vcir.VcirCodEspec\
							left join maestros.tbc_medicos_personal ayu_1 on ayu_1.MedPerCod = vcir.VcirCodAyud1\
							left join maestros.tbc_medicos_personal ayu_2 on ayu_2.MedPerCod = vcir.VcirCodAyud2\
							left join maestros.tbc_medicos_personal aneste on aneste.MedPerCod = vcir.VcirCodAneste\
							left join validalegajo.tbc_personal_login instru on instru.per_legajo = vcir.VcirCodInstru\
							WHERE g.Guar_Estado < 9 and cg.CirgProtocolo > 0'
							+ ' and cg.CirgFechaIngreso >= ' + fechaDesde
							+ ' and cg.CirgFechaIngreso <= ' + fechaHasta
							+ ' order by cg.CirgProtocolo';
							
					    var $dsProto = databaseManager.getDataSetByQuery('asistencial',$sql,null,-1);	
						var maxProto = $dsProto.getMaxRowIndex();
						
						var dsExport = databaseManager.createEmptyDataSet();
						dsExport.addColumn('nrohistoria');// column 1
						dsExport.addColumn('protocolo');
						dsExport.addColumn('fecha');
						dsExport.addColumn('fechainicio');
						dsExport.addColumn('fechafinal');
						dsExport.addColumn('nombre');
						dsExport.addColumn('plan');
						dsExport.addColumn('cobertura');
						dsExport.addColumn('edad');// column 9
						dsExport.addColumn('nome_descr');
						dsExport.addColumn('especialista');
						dsExport.addColumn('ayu1');
						dsExport.addColumn('ayu2');
						dsExport.addColumn('anestesista');
						dsExport.addColumn('instrumentista');
						dsExport.addColumn('monitoreo');
						dsExport.addColumn('anatpat');
						
						var indexAnterior = 1;
						var histclin = $dsProto.getValue(1,1);
						var fechaIngreso = $dsProto.getValue(1,3);
						var horaIngreso = $dsProto.getValue(1,4);
						
						var solicitudes='';
						
						var i;
						for(i = 2; i <= maxProto; i++){
							
							if(histclin == $dsProto.getValue(i,1) && fechaIngreso == $dsProto.getValue(i,3) && horaIngreso == $dsProto.getValue(i,4)){
								if($dsProto.getValue(indexAnterior,21) == 100){
									
								}
								else{
									if($dsProto.getValue(i,21) == 100){
										indexAnterior = i;
									}
								}
							}
							else{
								
								var sqlAnatPat = "select apca_nrosolic,apca_tipadmi,apca_histclin from tbc_ANATPACA where apca_servicio=11 and apca_protocolo="+$dsProto.getValue(indexAnterior,2);
								var ds = databaseManager.getDataSetByQuery('asistencial',sqlAnatPat,null,-1);
								solicitudes = '';
								for(var jj=1;jj<=ds.getMaxRowIndex();jj++){
									if(ds.getValue(jj,2)==1&&ds.getValue(jj,3)==$dsProto.getValue(indexAnterior,1)){
										solicitudes += ds.getValue(jj,1)
									}
								}
							
								dsExport.addRow([$dsProto.getValue(indexAnterior,1)// nrohistoria
								,$dsProto.getValue(indexAnterior,2)// protocolo
								,getNumberToDate($dsProto.getValue(indexAnterior,5))// fecha
								,getFechaHora($dsProto.getValue(indexAnterior,5),$dsProto.getValue(indexAnterior,6))// fechainicio
								,getFechaHora($dsProto.getValue(indexAnterior,7),$dsProto.getValue(indexAnterior,8))// fechafinal
								,$dsProto.getValue(indexAnterior,9)// nombre
								,$dsProto.getValue(indexAnterior,10)// plan
								,$dsProto.getValue(indexAnterior,11)// cobertura
								,globals.consulta_288_calcularEdad($dsProto.getValue(indexAnterior,12),$dsProto.getValue(indexAnterior,3))// edad
								,$dsProto.getValue(indexAnterior,15)// nome_desc
								,$dsProto.getValue(indexAnterior,16)// especialista 
								,$dsProto.getValue(indexAnterior,17)// ayu1
								,$dsProto.getValue(indexAnterior,18)// ayu2
								,$dsProto.getValue(indexAnterior,19)// anestesista
								,$dsProto.getValue(indexAnterior,20)// instrumentista
								,$dsProto.getValue(indexAnterior,22)// monitoreo
								,solicitudes// anatpat
								])
								
								histclin = $dsProto.getValue(i,1);
								fechaIngreso = $dsProto.getValue(i,3);
								horaIngreso = $dsProto.getValue(i,4);
								indexAnterior = i;
							}
						}
						
						dsExport.addRow([$dsProto.getValue(indexAnterior,1)// nrohistoria
						,$dsProto.getValue(indexAnterior,2)// protocolo
						,getNumberToDate($dsProto.getValue(indexAnterior,5))// fecha
						,getFechaHora($dsProto.getValue(indexAnterior,5),$dsProto.getValue(indexAnterior,6))// fechainicio
						,getFechaHora($dsProto.getValue(indexAnterior,7),$dsProto.getValue(indexAnterior,8))// fechafinal
						,$dsProto.getValue(indexAnterior,9)// nombre
						,$dsProto.getValue(indexAnterior,10)// plan
						,$dsProto.getValue(indexAnterior,11)// cobertura
						,globals.consulta_288_calcularEdad($dsProto.getValue(indexAnterior,12),$dsProto.getValue(indexAnterior,3))// edad
						,$dsProto.getValue(indexAnterior,15)// nome_desc
						,$dsProto.getValue(indexAnterior,16)// especialista 
						,$dsProto.getValue(indexAnterior,17)// ayu1
						,$dsProto.getValue(indexAnterior,18)// ayu2
						,$dsProto.getValue(indexAnterior,19)// anestesista
						,$dsProto.getValue(indexAnterior,20)// instrumentista
						,$dsProto.getValue(indexAnterior,22)// monitoreo
						,solicitudes// anatpat
						])
						
						var $params = {
							fechadesde: fechaDesde.substr(6,2) + '/' + fechaDesde.substr(4,2) + '/' + fechaDesde.substr(0,4),
							fechahasta: fechaHasta.substr(6,2) + '/' + fechaHasta.substr(4,2) + '/' + fechaHasta.substr(0,4),
							firstPage: firstPage,
							titulo: 'LIBRO DE CIRUGIAS AMBULATORIAS'
						}
						
						var fileName = "c:/temp/LB-CIRUAMBU-" + fechaDesde + "-" + fechaHasta;
						//var fileNameJasper = 'LB-CIRUAMBU.jasper';
						// Generando PDF
						//plugins.jasperPluginRMI.compileReport("intervencion_quirurgica_lst.jrxml");			
					    plugins.jasperPluginRMI.runReport(dsExport,'LB-CIRUAMBU.jasper', fileName + '.pdf',plugins.jasperPluginRMI.OUTPUT_FORMAT.PDF,$params)
						
						// Obtener total de paginas
						plugins.jasperPluginRMI.runReport(dsExport,'LB-CIRUAMBU.jasper',fileName + '.txt',plugins.jasperPluginRMI.OUTPUT_FORMAT.TXT,$params)
						var fr = new Packages.java.io.FileReader(fileName + '.txt'); 
						var br = new Packages.java.io.BufferedReader(fr);
						var read = true;
						var line = null;
						// Incrementa el page para que coincida con la primera pagina del pdf
						firstPage++
						while ((line = br.readLine()) != null && read == true)
						{	
							var list = utils.stringTrim(line).split(' ');
							if(list[0].toString() == 'Hoja' && list[1].toString() == firstPage && list[2].toString() == 'de'){
								lastPage = utils.stringToNumber(list[3].toString());
								//application.output("last page: " + lastPage)
								read = false;
							}		
						}
						br.close();
						plugins.file.deleteFile(fileName + '.txt')
												
						var url=''
						var largo_url=application.getServerURL().length
						if (largo_url<24){
							// Ambiente local
						}else{
							
							var vDirServer = '';
							url = application.getServerURL().substr(0,23)
							var puerto = url.split(':');
							if(puerto[2]!='8080'){
								// Ambiente Desarrollo
								vDirServer='/app/servoyd/application_server/server/webapps/ROOT/uploads/librocirugia'
							}
							else{
								// Ambiente Produccion
								vDirServer='/app/servoy/application_server/server/webapps/ROOT/uploads/librocirugia'
							}
							
							plugins.UserManager.register( "Hypertelia", "q9SA5eCyb085cvATVO8s9onGe3iBzJyCTel8Y7J72BuG599wodOiU5OL26/pkKyv" );
							plugins.UserManager.copyFileToServer(fileName + '.pdf',vDirServer,true);
							plugins.file.deleteFile(fileName + '.pdf')
						}
						
						fs['prm_44']=lastPage;
						fs['prm_46']=utils.stringToNumber(fechaHasta);
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
						globals.DIALOGS.showInfoDialog("Resultado","El libro de cirugias ambulatorias se generó correctamente.","Aceptar")	
					}
					else{
						var messageProt = '\nExisten protocolos sin alta:\n';
						var suma = 10;
						var enter = suma;
						for(i=1;i<=dsProtSinAlta.getMaxRowIndex();i++){
							if(i == 1)
								messageProt += dsProtSinAlta.getValue(i,1);
							else{
								
								if(i == enter){
									messageProt += '\n' + dsProtSinAlta.getValue(i,1);
									enter = enter + suma;
								}
								else{
									messageProt += ' ' + dsProtSinAlta.getValue(i,1);
								}
							}
						}
						
						globals.DIALOGS.showWarningDialog("Atención","No ha sido posible generar el libro. Corrija los siguientes errores y vuelva a intentar." + messageProt + '.',"Aceptar");
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
 * @properties={typeid:24,uuid:"45EDFBEF-661E-4CC9-BC50-B2CA9EC3F088"}
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
 * @properties={typeid:24,uuid:"C0E0EB56-5E67-456D-91C9-56EFF1469793"}
 */
function getNumberToDate(date){
	
	return String(date).substr(6,2) + '/' + String(date).substr(4,2) + '/' + String(date).substr(2,2);
}

/**
 * TODO generated, please specify type and doc for the params
 * @param hour
 *
 * @properties={typeid:24,uuid:"0C1A5C26-4BFF-4391-83EE-2524A5146547"}
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
 * @properties={typeid:24,uuid:"A62C63FB-7372-4F73-AAF3-E96CB2B313BA"}
 */
function convertNumberToLegajo(legajo) {
	var leg = '';
	if(legajo != '0')
		leg = legajo.toString().substr(0,(legajo.toString().length - 1))+"/"+legajo.toString().substr((legajo.toString().length - 1),1);
	
	return leg;
}

/**
 * TODO generated, please specify type and doc for the params
 * @param tipoCod
 * @param codigo
 *
 * @properties={typeid:24,uuid:"2D752661-1441-4269-9AFE-76A68BFE5EC9"}
 */
function formatCodigoIntervencion(tipoCod,codigo){
	var code = String(tipoCod);
	if(code < 10){
		code =  '0' + tipoCod;
	}
	
	var codeNom = String(codigo);
	if(codeNom.length == 5){
		code += ' 0' + codeNom.substr(0,1) + '.' + codeNom.substr(1,2) + '.' + codeNom.substr(3,2);
	}
	else{
		code += ' ' + codeNom.substr(0,2) + '.' + codeNom.substr(2,2) + '.' + codeNom.substr(4,2);
	}
	return code;
}

/**
 * Handle hide window.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"7F787E96-8009-4962-947C-435B2903F15E"}
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
 * @properties={typeid:24,uuid:"33971A77-2C3D-4A33-8DB6-FA1B2DB63FE2"}
 */
function onAction_cerrar(event) {
	f_cerrarForm = true;
	onHide_consultaProtocolo(event);
}
