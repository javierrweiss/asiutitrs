/**
 * @properties={typeid:35,uuid:"984D28A7-AB87-49F0-819D-89330EF65708",variableType:-4}
 */
var frm_aux = new Array();

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"58DE4EB9-372C-479C-B0DF-CFCF77C220DC"}
 */
var protocolo = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"214C12B7-0DF7-48C4-A688-5EDBB1409F28"}
 */
var fechaCarga = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"143CCBC9-06AF-4B6C-99F1-2965A374173D"}
 */
var paciente = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"B3C2F4D5-6DBB-4566-A751-B84014951943"}
 */
var historiaClinica = '';

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"0762ED24-C083-418B-8154-65C3199D8725",variableType:93}
 */
var f_fechaHasta = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"C9AB46F0-6416-472E-9268-EE911C4E1B21",variableType:93}
 */
var f_fechaDesde = null;

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"8A6952C6-1917-4167-A909-D65608AF805D"}
 * @AllowToRunInFind
 */
function onAction_procesar(event) {
	
	if(validDataForm()){
			
	var fechaDesde = globals.FormatearFecha(f_fechaDesde,"AAAAMMDD");
	var fechaHasta = globals.FormatearFecha(f_fechaHasta,"AAAAMMDD");
	
	var $sql = 'SELECT cirihistcl, ciriprotocolo, cirifechacarga, cirifechainicio, cirihorainicio, cirifechafinal, cirihorafinal, ADMISION.Adm_ApelNom as nombre';
		$sql += ' ,obras.Obr_RazonSoc as cobertura, ADMISION.Adm_PlanObr as plan';
		$sql += ' ,ciriresponde,cirifechabanio,cirihorabanio,cirifecharasura,cirihorarasura';
		$sql += ' ,ciriieconsenti,plog.per_apelnom,mep.medperapeynom,inter.itv_descripcion';
		$sql += ',cirinroquirofa,cirianestesia,aneste.Anes_Tipoblo,aneste.Anes_Cateter,aneste.Anes_InhEnd,aneste.Anes_Intub,aneste.Anes_Manguito,aneste.Anes_MecMan,aneste.Anes_EspAsi,ciriestado';
	 	$sql += ' FROM tbc_cirugint';
	 	$sql += ' left join tbc_admision_scroll ADMISION on ADMISION.Adm_HistClin=tbc_cirugint.CiriHistCl';
	 	$sql += ' left join maestros.tbc_obras obras on obras.Obr_Codigo= ADMISION.Adm_ObrSoc';
	 	$sql += ' left join validalegajo.tbc_personal_login  plog on plog.per_legajo = cirilegconsenti';
	 	$sql += ' left join maestros.tbc_medicos_personal mep on mep.MedPerCod = cirilegconsenti';
	 	$sql += ' left join maestros.tbc_interven inter on inter.Itv_Codi = ciriinterven';
	 	$sql += ' left join tbc_anestesia aneste on aneste.Anes_HistClin = cirihistcl and aneste.Anes_Protocolo = ciriprotocolo';
	    $sql += ' WHERE CiriFechaCarga >= ' + fechaDesde;
	    $sql += ' and CiriFechaCarga <= ' + fechaHasta;
	    $sql += ' and CiriCodNome=0 and CiriTipoNome=0'
	    //$sql += ' order by ciriprotocolo'
	
	var $ds = databaseManager.getDataSetByQuery('asistencial',$sql,null,-1);
	
	var $frm = solutionModel.getForm('lst_protocolos_quirurgicos');
	var $tipos = [JSColumn.TEXT, JSColumn.INTEGER, JSColumn.TEXT,JSColumn.TEXT, JSColumn.TEXT, JSColumn.TEXT,JSColumn.TEXT,JSColumn.TEXT,JSColumn.TEXT,JSColumn.TEXT, JSColumn.TEXT,JSColumn.TEXT,JSColumn.TEXT,JSColumn.TEXT,JSColumn.TEXT,JSColumn.INTEGER,JSColumn.TEXT,JSColumn.TEXT,JSColumn.TEXT
	,JSColumn.INTEGER,JSColumn.INTEGER,JSColumn.INTEGER,JSColumn.INTEGER,JSColumn.INTEGER,JSColumn.INTEGER,JSColumn.INTEGER,JSColumn.INTEGER,JSColumn.INTEGER,JSColumn.INTEGER];
	$frm.dataSource = $ds.createDataSource('lst_protocolos_quirurgicos', $tipos);

	forms.lst_protocolos_quirurgicos.controller.recreateUI();	
	elements.tabless.tabIndex=2;
	
	forms.lst_protocolos_quirurgicos.elements.btn_detalle.requestFocus();	
	//forms.lst_protocolos_quirurgicos.controller.show()
	
	elements.cld_fechaDesde.readOnly = true;
	elements.cld_fechaHasta.readOnly = true;
	}
}

/**
 * @properties={typeid:24,uuid:"D402A065-6CB4-468C-A26E-45B849EE72DD"}
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
		//globals.showWarningDialog(messageError, null, 'Ok',null, null, null);
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
 * @properties={typeid:24,uuid:"19CB6371-F16F-4694-B202-A38D936E8946"}
 */
function onAction_limpiarForm(event) {

	f_fechaDesde = null;
	f_fechaHasta = null;
		
	if(forms.lst_protocolos_quirurgicos.foundset.getSize() > 0){
		forms.lst_protocolos_quirurgicos.foundset.clear();		
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
 * @properties={typeid:24,uuid:"2B939CF9-999E-452E-8CE0-205FB846F1A8"}
 */
function onShow_inicializarForm(firstShow, event) {
	//elements.tabless.tabIndex=1;
	elements.cld_fechaDesde.requestFocus();
	globals.getParUltNumero_1();
	
	// control del elemento por perfil	    		
	var $form = controller.getName();
	globals.consulta_277_controlarElementos($form);	
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"66C728FC-027C-49ED-BAF5-6437B8B24218"}
 */
function onAction_fechaDesde(event) {
	elements.cld_fechaHasta.requestFocus();
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"8C628D69-A49A-43E7-8136-535B2DD12F06"}
 */
function onAction_fechaHasta(event) {
	elements.btn_procesar.requestFocus();
}


/**
 * @properties={typeid:24,uuid:"C16ABF75-BF10-4B39-98FA-886A8DDE903B"}
 * @AllowToRunInFind
 */
function onAction_generarReporteExcel(){
	
	
	try{
		if(forms.lst_protocolos_quirurgicos.foundset.getSize() > 0){
			
			var message = "¿Esta seguro que desea generar el libro de cirugias por internación?";
			if(globals.DIALOGS.showQuestionDialog("Atención!",message,"Si", "No") == "Si"){
					
				var fechaDesde = globals.FormatearFecha(forms.frm_protocolos_quirurgicos.f_fechaDesde,"AAAAMMDD");
				var fechaHasta = globals.FormatearFecha(forms.frm_protocolos_quirurgicos.f_fechaHasta,"AAAAMMDD");
				var firstPage = 0;
				var lastPage = 0;
				var firstDate = 0;
				
				var fs = databaseManager.getFoundSet("parametros","param")
				fs.find()
				fs['key_param']=1
				fs.search()
				if(fs.getSize()>0){
					firstPage = fs['prm_43'];
					firstDate = fs['prm_45'];
				}
				
				// Validar que la fecha desde, debe ser 1 dia mas que la ultima fecha de la tabla param
				var firstDateAux = globals.IntegerToDate(firstDate);
				//firstDateAux.setFullYear(firstDate.toString().substr(0,4))
				//firstDateAux.setMonth(firstDate.toString().substr(4,2)-1)
				//firstDateAux.setDate(firstDate.toString().substr(6,2))
				var dias = globals.Contar_dias(firstDateAux, f_fechaDesde)
				
				if(firstDate > 0 && dias == 1 ){
					
					var sql = 'SELECT ciriprotocolo FROM tbc_cirugint\
						WHERE CiriCodNome = 0 and CiriTipoNome=0\
						and (CiriEstado = 0 or CiriFechaFinal = 0)' 
						+ ' and CiriFechaCarga >= ' + fechaDesde
						+ ' and CiriFechaCarga <= ' + fechaHasta
					var dsProtSinAlta = databaseManager.getDataSetByQuery('asistencial',sql,null,-1);
						//valido que no haya protocolos sin alta
					if(dsProtSinAlta.getMaxRowIndex() == 0){
						
						var $sql = 'SELECT cirihistcl, ciriprotocolo, cirifechacarga, cirifechainicio, cirihorainicio, cirifechafinal, cirihorafinal';
						$sql += ' ,ADMISION.Adm_ApelNom as nombre,obras.Obr_RazonSoc as cobertura, ADMISION.Adm_PlanObr as plan';
						$sql += ' ,plog.per_apelnom,mep.medperapeynom,prof.medperapeynom as especialista,ADMISION.Adm_FecNac, cirianestesia';
					 	$sql += ' FROM tbc_cirugint';
					 	$sql += ' left join tbc_admision_scroll ADMISION on ADMISION.Adm_HistClin=tbc_cirugint.CiriHistCl';
					 	$sql += ' left join maestros.tbc_obras obras on obras.Obr_Codigo= ADMISION.Adm_ObrSoc';
					 	$sql += ' left join validalegajo.tbc_personal_login  plog on plog.per_legajo = cirilegconsenti';
					 	$sql += ' left join maestros.tbc_medicos_personal mep on mep.MedPerCod = cirilegconsenti';
					 	$sql += ' left join maestros.tbc_medicos_personal prof on prof.MedPerCod = cirilegciru';
					    $sql += ' WHERE CiriFechaCarga >= ' + fechaDesde;
					    $sql += ' and CiriFechaCarga <= ' + fechaHasta;
					    $sql += ' and CiriCodNome=0 and CiriTipoNome=0'
					    //$sql += ' order by ciriprotocolo'
		
					    var $dsProto = databaseManager.getDataSetByQuery('asistencial',$sql,null,-1);	
						var maxProto = $dsProto.getMaxRowIndex();
						
						var $sqlInter = 'SELECT dtl.cirihistcl as cirihistcl,dtl.ciriprotocolo as ciriprotocolo'
						+ ' ,nom.Nome_Tipo as nome_tipo,nom.nome_codigo as nome_codigo,nom.nome_descr as nome_descr'
						+ ' ,dtl.CiriCodMed_1 as ciricodmed_1,prof.medperapeynom as especialista'
						+ ' ,dtl.CiriCodMed_2 as ciricodmed_2,ayu_2.MedPerApeynom as ayu2'
						+ ' ,dtl.CiriCodMed_3 as ciricodmed_3,ayu_3.MedPerApeynom as ayu3'
						+ ' ,dtl.CiriCodMed_4 as ciricodmed_4,ayu_4.MedPerApeynom as ayu4'
						+ ' ,dtl.CiriCodMed_5 as ciricodmed_5,ayu_5.MedPerApeynom as ayu5'
						+ ' ,dtl.CiriCodMed_7 as ciricodmed_7,ayu_7.per_apelnom as ayu7, nom.Nome_DescrClave as codigoPractica'
						+ ' FROM tbc_cirugint_dtl dtl'//ciricodmed_5  ciritipmed_5 ciriporcen_5
						+ ' left join maestros.tbc_nomencla nom on nom.Nome_Codigo = dtl.CiriCodNome and nom.Nome_Tipo = dtl.CiriTipoNome'
						+ ' left join maestros.tbc_medicos_personal prof on prof.medpercod = dtl.CiriCodMed_1'
						+ ' left join maestros.tbc_medicos_personal ayu_2 on ayu_2.MedPerCod = dtl.CiriCodMed_2'
						+ ' left join maestros.tbc_medicos_personal ayu_3 on ayu_3.MedPerCod = dtl.CiriCodMed_3'
						+ ' left join maestros.tbc_medicos_personal ayu_4 on ayu_4.MedPerCod = dtl.CiriCodMed_4'
						+ ' left join maestros.tbc_medicos_personal ayu_5 on ayu_5.MedPerCod = dtl.CiriCodMed_5'
						+ ' left join validalegajo.tbc_personal_login ayu_7 on ayu_7.per_legajo = dtl.CiriCodMed_7'
						+ ' inner join tbc_cirugint cir on cir.cirihistcl = dtl.cirihistcl and cir.ciriprotocolo = dtl.ciriprotocolo'
						+ ' and cir.CiriFechaCarga >= ' + fechaDesde + ' and cir.CiriFechaCarga <= '+ fechaHasta + ' and cir.CiriCodNome=0 and cir.CiriTipoNome=0'
						+ ' WHERE dtl.CiriCodNome <> 0 and dtl.CiriTipoNome <> 0'
						+ ' AND dtl.CiriFechaCarga >= '+  fechaDesde
						+ ' AND dtl.CiriFechaCarga <= ' + fechaHasta
						+ ' order by dtl.ciriprotocolo'
						
						var $dsInter = databaseManager.getDataSetByQuery('asistencial',$sqlInter,null,-1);
						var maxInter = $dsInter.getMaxRowIndex();
//						var $sql = 'SELECT cirihistcl, ciriprotocolo, cirifechacarga, cirifechainicio, cirihorainicio, cirifechafinal, cirihorafinal';
//						$sql += ' ,ADMISION.Adm_ApelNom as nombre,obras.Obr_RazonSoc as cobertura, ADMISION.Adm_PlanObr as plan';
//						$sql += ' ,plog.per_apelnom,mep.medperapeynom,prof.medperapeynom as especialista,ADMISION.Adm_FecNac';
						 var $ds2 = databaseManager.createEmptyDataSet()
						 /*
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
							*/
							$ds2.addColumn('aux_cober',1,JSColumn.TEXT)   
							$ds2.addColumn('aux_col1',2,JSColumn.INTEGER)   
							$ds2.addColumn('aux_col2',3,JSColumn.INTEGER)
							$ds2.addColumn('aux_col3',4,JSColumn.TEXT)
							$ds2.addColumn('aux_col4',5,JSColumn.TEXT)
							$ds2.addColumn('aux_col5',6,JSColumn.TEXT)
							$ds2.addColumn('aux_col6',7,JSColumn.TEXT)
							$ds2.addColumn('aux_col7',8,JSColumn.TEXT)
							$ds2.addColumn('aux_col8',9,JSColumn.TEXT)
							$ds2.addColumn('aux_col9',10,JSColumn.TEXT)
							$ds2.addColumn('aux_col10',11,JSColumn.TEXT)
							
							var ayudante2=''
							var ayudante3=''
							var ayudante4=''
							var ayudantes = ''
						 for (var ciruIndice = 1; ciruIndice <= maxInter; ciruIndice++) {
							var array = new Array;
							
//						 	var row = $dsInter.getRowAsArray(ciruIndice);
							array.push($dsProto.getValue(ciruIndice,8)) //
							array.push($dsProto.getValue(ciruIndice,1))
							array.push($dsProto.getValue(ciruIndice,2)) // protocolo
							array.push("COL4")
							array.push("COL5")
							array.push("COL6")
							array.push("COL7")
							array.push("COL8")
							array.push("COL9")
							array.push("COL10")
							array.push("COL11")
							/*
							var queryPracticas = 'select nom.Nome_DescrClave from tbc_cirugint_dtl dtl' 
							+' left join maestros.tbc_nomencla nom on nom.Nome_Codigo = dtl.CiriCodNome and nom.Nome_Tipo = dtl.CiriTipoNome'
							+' where ciriprotocolo='+$dsProto.getValue(ciruIndice,2)
							var $dsPracticas = databaseManager.getDataSetByQuery('asistencial',queryPracticas,null,-1);
							var maxPracticas = $dsPracticas.getMaxRowIndex();
						
							var practicasProtocolo = $dsPracticas.getColumnAsArray(1).filter(function(x){
								return x!==null;
							})
							
							
							
							//horaInicio.setHours(hours,minutes)
							if(!globals.IsBlank($dsProto.getValue(ciruIndice,3))){
								var fecha = new Date()
								
								fecha.setFullYear($dsProto.getValue(ciruIndice,3).toString().slice(0,4),(utils.stringToNumber(($dsProto.getValue(ciruIndice,3)).toString().slice(4,6))-1),$dsProto.getValue(ciruIndice,3).toString().slice(6,8))
					
								array.push(utils.dateFormat(fecha,'dd/MM/yyyy'))
							}else{
								array.push('') //fecha -- fechacarga vacia
							}
						
							if(!globals.IsBlank($dsProto.getValue(ciruIndice,5)) && !globals.IsBlank($dsProto.getValue(ciruIndice,7))  ){
								array.push(convertNumberToHour_HHMM($dsProto.getValue(ciruIndice,5))) // hora inicio
								array.push(convertNumberToHour_HHMM($dsProto.getValue(ciruIndice,7))) // hora final
							}
						
					
							array.push($dsProto.getValue(ciruIndice,13)) // cirujano
							array.push($dsInter.getValue(ciruIndice,15)) // anestesista
							array.push($dsProto.getValue(ciruIndice,15)==1?'SI':'NO') // anestesia
							ayudante2=(globals.IsBlank($dsProto.getValue(ciruIndice,9)))?'':$dsProto.getValue(ciruIndice,9)
							ayudante3=(globals.IsBlank($dsProto.getValue(ciruIndice,11)))?'':$dsProto.getValue(ciruIndice,11)
							ayudante4=(globals.IsBlank($dsProto.getValue(ciruIndice,14)))?'':$dsProto.getValue(ciruIndice,14)
							ayudantes = (ayudante2!='')?ayudante2:''+(ayudante3!='')?(', '+ayudante3):''+(ayudante4!='')?', '+ayudante4:''
							array.push(ayudantes) // ayudante
//							array.push($dsInter.getValue(ciruIndice,18)) // practica
							array.push(practicasProtocolo.join(",")) // practica
							*/
							$ds2.addRow(array)
							
						 	
						 }
						
							
							
//							$ds2.addRow(array) o otra opcion es..
//							$ds2.addRow([nombre,prestacionValor,utils.dateFormat(ds_segui.getValue(index,2),'dd/MM/yyyy hh:mm:ss'),ds_segui.getValue(index,3)])

							var csv = $ds2.getAsText(',','\n','"',true);
							var js = plugins.file.showFileSaveDialog('PROTOCOLOS_QUIRURGICOS_INTERNADOS.xls', 'Select location to save export file');
							if (!js) return;

							//var success = plugins.file.writeTXTFile(js, csv, 'UTF8', 'application/vnd.ms-excel');		
							plugins.jasperPluginRMI.runReport($ds2,'rp_consulta_277_excel.jasper', js,plugins.jasperPluginRMI.OUTPUT_FORMAT.EXCEL,null)
							
					/*		
						$dsInter.addColumn('cirifechacarga');
						$dsInter.addColumn('cirifechainicio');
						$dsInter.addColumn('cirihorainicio');
						$dsInter.addColumn('cirifechafinal');
						$dsInter.addColumn('cirihorafinal');
						$dsInter.addColumn('nombre');
						$dsInter.addColumn('cobertura');
						$dsInter.addColumn('plan');
						$dsInter.addColumn('per_apelnom');
						$dsInter.addColumn('medperapeynom');
						$dsInter.addColumn('nrohistoria');
						$dsInter.addColumn('nrointervencion');
						$dsInter.addColumn('edad');
						
						var i;
						var j;
						for(i = 1; i <= maxInter; i++){
							
							for(j= 1; j <=maxProto;j++){
								if($dsInter.getValue(i,1) == $dsProto.getValue(j,1) && $dsInter.getValue(i,2) == $dsProto.getValue(j,2)){
									$dsInter.setValue(i,7, $dsProto.getValue(j,13));
									$dsInter.setValue(i,18, getNumberToDate($dsProto.getValue(j,3)));
									$dsInter.setValue(i,19,getFechaHora($dsProto.getValue(j,4),$dsProto.getValue(j,5)));
									$dsInter.setValue(i,20,"horainicio");
									$dsInter.setValue(i,21,getFechaHora($dsProto.getValue(j,6),$dsProto.getValue(j,7)));
									$dsInter.setValue(i,22,"horafin");
									$dsInter.setValue(i,23,$dsProto.getValue(j,8));
									$dsInter.setValue(i,24,$dsProto.getValue(j,9));
									$dsInter.setValue(i,25,$dsProto.getValue(j,10));
									$dsInter.setValue(i,26,$dsProto.getValue(j,11)== null?"":$dsProto.getValue(j,17));
									$dsInter.setValue(i,27,$dsProto.getValue(j,12)== null?"":$dsProto.getValue(j,18));
									$dsInter.setValue(i,28,convertNumberToLegajo($dsProto.getValue(j,1)));
									$dsInter.setValue(i,29,formatCodigoIntervencion($dsInter.getValue(i,3),$dsInter.getValue(i,4)));
									$dsInter.setValue(i,30,globals.consulta_277_calcularEdad($dsProto.getValue(j,14),$dsProto.getValue(j,3)));
								}
							}
							
						}*/
						
//						var $params = {
//							fechadesde: fechaDesde.substr(6,2) + '/' + fechaDesde.substr(4,2) + '/' + fechaDesde.substr(0,4),
//							fechahasta: fechaHasta.substr(6,2) + '/' + fechaHasta.substr(4,2) + '/' + fechaHasta.substr(0,4),
//							firstPage: firstPage
//						}
//						
//						var fileName = "c:/temp/LB-CIRUINTER-" + fechaDesde + "-" + fechaHasta;
//				
//						// Generando PDF
//						//plugins.jasperPluginRMI.compileReport("intervencion_quirurgica_lst.jrxml");			
//					    plugins.jasperPluginRMI.runReport($dsInter,'intervencion_quirurgica_lst.jasper', fileName + '.pdf',plugins.jasperPluginRMI.OUTPUT_FORMAT.PDF,$params)
//						
//						// Obtener total de paginas
//						plugins.jasperPluginRMI.runReport($dsInter,'intervencion_quirurgica_lst.jasper',fileName + '.txt',plugins.jasperPluginRMI.OUTPUT_FORMAT.TXT,$params)
//						var fr = new Packages.java.io.FileReader(fileName + '.txt'); 
//						var br = new Packages.java.io.BufferedReader(fr);
//						var read = true;
//						var line = null;
//						// Incrementa el page para que coincida con la primera pagina del pdf
//						firstPage++
//						while ((line = br.readLine()) != null && read == true)
//						{	
//							var list = utils.stringTrim(line).split(' ');
//							if(list[0].toString() == 'Hoja' && list[1].toString() == firstPage && list[2].toString() == 'de'){
//								lastPage = utils.stringToNumber(list[3].toString());
//								//application.output("last page: " + lastPage)
//								read = false;
//							}		
//						}
//						br.close();
//						plugins.file.deleteFile(fileName + '.txt')
//						
//						var url=''
//						var largo_url=application.getServerURL().length
//						if (largo_url<24){
//							// Ambiente local
//						}else{
//							url = application.getServerURL().substr(0,23)
//							var puerto = url.split(':');
//							var vDirServer = '';
//							if(puerto[2]!='8080'){
//								// Ambiente Desarrollo
//								vDirServer='/app/servoyd/application_server/server/webapps/ROOT/uploads/librocirugia'
//							}
//							else{
//								// Ambiente Produccion
//								vDirServer='/app/servoy/application_server/server/webapps/ROOT/uploads/librocirugia'
//							}
//							
//							plugins.UserManager.register( "Hypertelia", "q9SA5eCyb085cvATVO8s9onGe3iBzJyCTel8Y7J72BuG599wodOiU5OL26/pkKyv" );
//							plugins.UserManager.copyFileToServer(fileName + '.pdf',vDirServer,true);
//							plugins.file.deleteFile(fileName + '.pdf')
//						}
//
//						fs['prm_43']=lastPage;
//						fs['prm_45']=utils.stringToNumber(fechaHasta);
//						databaseManager.startTransaction()
//						if(databaseManager.saveData(fs)){
//							databaseManager.commitTransaction()
//						}else{
//							var error1 = ''
//							var error2 = ''
//							var array = databaseManager.getFailedRecords(fs)
//							for (var k = 0; k < array.length; k++) {
//								var record = array[k];
//								var jstable = databaseManager.getTable(record);
//								var tableSQLName = jstable.getSQLName();
//								error1='Error de Grabación en Tabla:' + tableSQLName + ' en server:' + jstable.getServerName() + ' falló la grabación. Avise urgente a Sistemas, por favor!'
//								error2='Error en grabación '+record.exception;
//								if (record.exception.getErrorCode() == ServoyException.RECORD_VALIDATION_FAILED) {
//							// exception thrown in pre-insert/update/delete event method
//									var thrown = record.exception.getValue()
//									//plugins.dialogs.showErrorDialog("Error de grabación","Record validation failed: " + thrown)
//								}
//							}
//							databaseManager.rollbackTransaction()
//							if(error1!=''){
//								globals.DIALOGS.showErrorDialog("Error de grabación","Record validation failed: " + thrown)
//								globals.DIALOGS.showErrorDialog("Error en grabacion de Histórico",error1,"Ok")
//								globals.DIALOGS.showErrorDialog("Error en grabacion de Histórico",error2,"Ok")
//							}
//							globals.DIALOGS.showErrorDialog("Error en grabación","Se ha producido un error de grabación. "+'\n'+"Avise a Sistemas, por favor.", "Ok")
//						}
//						globals.DIALOGS.showInfoDialog("Resultado","El libro de cirugias por internación se generó correctamente.","Aceptar")	
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
							
						globals.DIALOGS.showWarningDialog("Atención","No ha sido posible generar el libro. Corrija los siguientes errores y vuelva a intentar." + messageProt + '.',"Aceptar")
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
		globals.DIALOGS.showWarningDialog("Atención!","No hay datos para generar el libro.","Aceptar")
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
 * @properties={typeid:24,uuid:"CEF5AAF8-A034-448D-9B8A-BC2A32B89B7A"}
 * @AllowToRunInFind
 */
function onAction_generarReporte(event) {
	
	try{
		if(forms.lst_protocolos_quirurgicos.foundset.getSize() > 0){
			
			var message = "¿Esta seguro que desea generar el libro de cirugias por internación?";
			if(globals.DIALOGS.showQuestionDialog("Atención!",message,"Si", "No") == "Si"){
					
				var fechaDesde = globals.FormatearFecha(forms.frm_protocolos_quirurgicos.f_fechaDesde,"AAAAMMDD");
				var fechaHasta = globals.FormatearFecha(forms.frm_protocolos_quirurgicos.f_fechaHasta,"AAAAMMDD");
				var firstPage = 0;
				var lastPage = 0;
				var firstDate = 0;
				
				var fs = databaseManager.getFoundSet("parametros","param")
				fs.find()
				fs['key_param']=1
				fs.search()
				if(fs.getSize()>0){
					firstPage = fs['prm_43'];
					firstDate = fs['prm_45'];
				}
				
				// Validar que la fecha desde, debe ser 1 dia mas que la ultima fecha de la tabla param
				var firstDateAux = globals.IntegerToDate(firstDate);
				//firstDateAux.setFullYear(firstDate.toString().substr(0,4))
				//firstDateAux.setMonth(firstDate.toString().substr(4,2)-1)
				//firstDateAux.setDate(firstDate.toString().substr(6,2))
				var dias = globals.Contar_dias(firstDateAux, f_fechaDesde)
				
				if(firstDate > 0 && dias == 1 ){
					
					var sql = 'SELECT ciriprotocolo FROM tbc_cirugint\
						WHERE CiriCodNome = 0 and CiriTipoNome=0\
						and (CiriEstado = 0 or CiriFechaFinal = 0)' 
						+ ' and CiriFechaCarga >= ' + fechaDesde
						+ ' and CiriFechaCarga <= ' + fechaHasta
					var dsProtSinAlta = databaseManager.getDataSetByQuery('asistencial',sql,null,-1);
		
					if(dsProtSinAlta.getMaxRowIndex() == 0){
											
						var $sql = 'SELECT cirihistcl, ciriprotocolo, cirifechacarga, cirifechainicio, cirihorainicio, cirifechafinal, cirihorafinal';
						$sql += ' ,ADMISION.Adm_ApelNom as nombre,obras.Obr_RazonSoc as cobertura, ADMISION.Adm_PlanObr as plan';
						$sql += ' ,plog.per_apelnom,mep.medperapeynom,prof.medperapeynom as especialista,ADMISION.Adm_FecNac';
					 	$sql += ' FROM tbc_cirugint';
					 	$sql += ' left join tbc_admision_scroll ADMISION on ADMISION.Adm_HistClin=tbc_cirugint.CiriHistCl';
					 	$sql += ' left join maestros.tbc_obras obras on obras.Obr_Codigo= ADMISION.Adm_ObrSoc';
					 	$sql += ' left join validalegajo.tbc_personal_login  plog on plog.per_legajo = cirilegconsenti';
					 	$sql += ' left join maestros.tbc_medicos_personal mep on mep.MedPerCod = cirilegconsenti';
					 	$sql += ' left join maestros.tbc_medicos_personal prof on prof.MedPerCod = cirilegciru';
					    $sql += ' WHERE CiriFechaCarga >= ' + fechaDesde;
					    $sql += ' and CiriFechaCarga <= ' + fechaHasta;
					    $sql += ' and CiriCodNome=0 and CiriTipoNome=0'
					    //$sql += ' order by ciriprotocolo'
		
					    var $dsProto = databaseManager.getDataSetByQuery('asistencial',$sql,null,-1);	
						var maxProto = $dsProto.getMaxRowIndex();
						
						var $sqlInter = 'SELECT dtl.cirihistcl as cirihistcl,dtl.ciriprotocolo as ciriprotocolo'
						+ ' ,nom.Nome_Tipo as nome_tipo,nom.nome_codigo as nome_codigo,nom.nome_descr as nome_descr'
						+ ' ,dtl.CiriCodMed_1 as ciricodmed_1,prof.medperapeynom as especialista'
						+ ' ,dtl.CiriCodMed_2 as ciricodmed_2,ayu_2.MedPerApeynom as ayu2'
						+ ' ,dtl.CiriCodMed_3 as ciricodmed_3,ayu_3.MedPerApeynom as ayu3'
						+ ' ,dtl.CiriCodMed_4 as ciricodmed_4,ayu_4.MedPerApeynom as ayu4'
						+ ' ,dtl.CiriCodMed_5 as ciricodmed_5,ayu_5.MedPerApeynom as ayu5'
						+ ' ,dtl.CiriCodMed_7 as ciricodmed_7,ayu_7.per_apelnom as ayu7'
						+ ' FROM tbc_cirugint_dtl dtl'
						+ ' left join maestros.tbc_nomencla nom on nom.Nome_Codigo = dtl.CiriCodNome and nom.Nome_Tipo = dtl.CiriTipoNome'
						+ ' left join maestros.tbc_medicos_personal prof on prof.medpercod = dtl.CiriCodMed_1'
						+ ' left join maestros.tbc_medicos_personal ayu_2 on ayu_2.MedPerCod = dtl.CiriCodMed_2'
						+ ' left join maestros.tbc_medicos_personal ayu_3 on ayu_3.MedPerCod = dtl.CiriCodMed_3'
						+ ' left join maestros.tbc_medicos_personal ayu_4 on ayu_4.MedPerCod = dtl.CiriCodMed_4'
						+ ' left join maestros.tbc_medicos_personal ayu_5 on ayu_5.MedPerCod = dtl.CiriCodMed_5'
						+ ' left join validalegajo.tbc_personal_login ayu_7 on ayu_7.per_legajo = dtl.CiriCodMed_7'
						+ ' inner join tbc_cirugint cir on cir.cirihistcl = dtl.cirihistcl and cir.ciriprotocolo = dtl.ciriprotocolo'
						+ ' and cir.CiriFechaCarga >= ' + fechaDesde + ' and cir.CiriFechaCarga <= '+ fechaHasta + ' and cir.CiriCodNome=0 and cir.CiriTipoNome=0'
						+ ' WHERE dtl.CiriCodNome <> 0 and dtl.CiriTipoNome <> 0'
						+ ' AND dtl.CiriFechaCarga >= '+  fechaDesde
						+ ' AND dtl.CiriFechaCarga <= ' + fechaHasta
						+ ' order by dtl.ciriprotocolo'
						
						var $dsInter = databaseManager.getDataSetByQuery('asistencial',$sqlInter,null,-1);
						var maxInter = $dsInter.getMaxRowIndex();
						
						$dsInter.addColumn('cirifechacarga');
						$dsInter.addColumn('cirifechainicio');
						$dsInter.addColumn('cirihorainicio');
						$dsInter.addColumn('cirifechafinal');
						$dsInter.addColumn('cirihorafinal');
						$dsInter.addColumn('nombre');
						$dsInter.addColumn('cobertura');
						$dsInter.addColumn('plan');
						$dsInter.addColumn('per_apelnom');
						$dsInter.addColumn('medperapeynom');
						$dsInter.addColumn('nrohistoria');
						$dsInter.addColumn('nrointervencion');
						$dsInter.addColumn('edad');
						
						var i;
						var j;
						for(i = 1; i <= maxInter; i++){
							
							for(j= 1; j <=maxProto;j++){
								if($dsInter.getValue(i,1) == $dsProto.getValue(j,1) && $dsInter.getValue(i,2) == $dsProto.getValue(j,2)){
									$dsInter.setValue(i,7, $dsProto.getValue(j,13));
									$dsInter.setValue(i,18, getNumberToDate($dsProto.getValue(j,3)));
									$dsInter.setValue(i,19,getFechaHora($dsProto.getValue(j,4),$dsProto.getValue(j,5)));
									$dsInter.setValue(i,20,"horainicio");
									$dsInter.setValue(i,21,getFechaHora($dsProto.getValue(j,6),$dsProto.getValue(j,7)));
									$dsInter.setValue(i,22,"horafin");
									$dsInter.setValue(i,23,$dsProto.getValue(j,8));
									$dsInter.setValue(i,24,$dsProto.getValue(j,9));
									$dsInter.setValue(i,25,$dsProto.getValue(j,10));
									$dsInter.setValue(i,26,$dsProto.getValue(j,11)== null?"":$dsProto.getValue(j,17));
									$dsInter.setValue(i,27,$dsProto.getValue(j,12)== null?"":$dsProto.getValue(j,18));
									$dsInter.setValue(i,28,convertNumberToLegajo($dsProto.getValue(j,1)));
									$dsInter.setValue(i,29,formatCodigoIntervencion($dsInter.getValue(i,3),$dsInter.getValue(i,4)));
									$dsInter.setValue(i,30,globals.consulta_277_calcularEdad($dsProto.getValue(j,14),$dsProto.getValue(j,3)));
								}
							}
							
						}
						
						var $params = {
							fechadesde: fechaDesde.substr(6,2) + '/' + fechaDesde.substr(4,2) + '/' + fechaDesde.substr(0,4),
							fechahasta: fechaHasta.substr(6,2) + '/' + fechaHasta.substr(4,2) + '/' + fechaHasta.substr(0,4),
							firstPage: firstPage
						}
						
						var fileName = "c:/temp/LB-CIRUINTER-" + fechaDesde + "-" + fechaHasta;
				
						// Generando PDF
						//plugins.jasperPluginRMI.compileReport("intervencion_quirurgica_lst.jrxml");			
					    plugins.jasperPluginRMI.runReport($dsInter,'intervencion_quirurgica_lst.jasper', fileName + '.pdf',plugins.jasperPluginRMI.OUTPUT_FORMAT.PDF,$params)
						
						// Obtener total de paginas
						plugins.jasperPluginRMI.runReport($dsInter,'intervencion_quirurgica_lst.jasper',fileName + '.txt',plugins.jasperPluginRMI.OUTPUT_FORMAT.TXT,$params)
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
							url = application.getServerURL().substr(0,23)
							var puerto = url.split(':');
							var vDirServer = '';
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

						fs['prm_43']=lastPage;
						fs['prm_45']=utils.stringToNumber(fechaHasta);
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
						globals.DIALOGS.showInfoDialog("Resultado","El libro de cirugias por internación se generó correctamente.","Aceptar")	
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
							
						globals.DIALOGS.showWarningDialog("Atención","No ha sido posible generar el libro. Corrija los siguientes errores y vuelva a intentar." + messageProt + '.',"Aceptar")
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
			globals.DIALOGS.showWarningDialog("Atención!","No hay datos para generar el libro.","Aceptar")
		}
		
	}
	catch(error){
		globals.DIALOGS.showErrorDialog("Error","No ha sido posible generar el libro. Vuelva a intentar. Si el problema persiste, contacte al administrador del sistema.\n" + error.message,"Aceptar")
	}
	
}

/**
 * TODO generated, please specify type and doc for the params
 * @param fecha
 * @param hora
 *
 * @properties={typeid:24,uuid:"7BDAD958-4C01-41F8-A187-DF2871AFA106"}
 */
function getFechaHora(fecha, hora){
	var fechaHora = "No";
	if(fecha > 0)
		fechaHora =  getNumberToDate(fecha)+ ' ' + convertNumberToHour_HHMM(hora);
	return fechaHora;
}

/**
 * TODO generated, please specify type and doc for the params
 * @param date
 *
 * @properties={typeid:24,uuid:"DD63D714-D5CD-46A6-A63E-430A70414708"}
 */
function getNumberToDate(date){
	
	return String(date).substr(6,2) + '/' + String(date).substr(4,2) + '/' + String(date).substr(2,2);
}

/**
 * TODO generated, please specify type and doc for the params
 * @param hour
 *
 * @properties={typeid:24,uuid:"B6C7D25B-5412-4F10-B8B8-4A5426426EE3"}
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
 * @properties={typeid:24,uuid:"AD85FF1C-AF77-45F9-822D-ED5E523B0218"}
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
 * @properties={typeid:24,uuid:"E00AEAA1-8C19-4F1B-8726-33CF1352E52E"}
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
 * @properties={typeid:24,uuid:"FB1624E4-82D8-4BD3-A393-ABEDF357CF81"}
 */
function onHide_consultaProtocolo(event) {
	if(globals.gbl_cerrarConsultaProtocolo){
		var $win = application.getWindow(application.getActiveWindow().getName());
		if($win != null){
			$win.hide();
			$win.destroy();
		}
	}
	return globals.gbl_cerrarConsultaProtocolo;
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"229C5F0E-18B0-4E17-915A-EFC9B5AAF05A"}
 */
function onAction_cerrar(event) {
	globals.gbl_cerrarConsultaProtocolo = true;
	onHide_consultaProtocolo(event);
}
