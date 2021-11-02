/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"C6C0B1B1-1EE9-423C-A12E-58E830E7C488"}
 */
var Atcons_crono_obra = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"C31100F8-CDC0-4920-9559-1E3E1E6F9F9F"}
 */
var Atcons_crono_paciente = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"41ABE946-BC25-4B73-8005-B5C07AF8A14F",variableType:4}
 */
var AtCons_crono_cero = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"2CDC3231-3087-442F-8149-DBBC2ABC62F0",variableType:4}
 */
var AtCons_tipopaciente = 1;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"DF156DC4-7C44-4B94-8498-1354C971649C"}
 */
var AtCons_crono_vmensaje = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"115F4951-376C-4F16-869D-04D128FC38A5",variableType:4}
 */
var AtCons_crono_vhisclinro = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"EC733FB5-462A-4436-A662-2729E775458F",variableType:4}
 */
var AtCons_vcod_tabla13 = 13;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"ECC5AC4D-E16A-485B-88CE-0261BD45ECDE",variableType:4}
 */
var AtCons_vcod_tabla12 = 12;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"03FF7039-6191-4C7B-BEB3-2D6C8B7A525A",variableType:4}
 */
var AtCons_vtipo_atencion = 1;

/**
 * Callback method for when solution is opened.
 *
 * @properties={typeid:24,uuid:"A10B45B7-F922-4C92-AE19-7968C931A6F6"}
 */
function onSolutionOpen_crono() {
	 
	// TODO  sacar esto cuando de use desde form "carga" de atencion consultorio
	//scopes.globals.AtCons_vlegajo = 97901
	//scopes.globals.AtCons_crono_vhisclinro = 29079
	//scopes.globals.AtCons_crono_vhisclinro = 3878
	//scopes.globals.AtCons_crono_vhisclinro = 377372
}

/**
 * Called for performing a conversion between a database value and a displayed value.
 *
 * @param databaseValue The database value.
 * @param {String} dbType The type of the database column. Can be one of "TEXT", "INTEGER", "NUMBER", "DATETIME" or "MEDIA".
 *
 * @returns {Object} the displayed value.
 *
 * @properties={typeid:24,uuid:"AA438AAD-FA82-4661-AADF-B6AB651DFC15"}
 */
function globalConverterintafechaCrono(databaseValue, dbType) {
	var $fec_string = databaseValue + ''
    var $anio_string = $fec_string.substr(0,4)
    var $mes_string = $fec_string.substr(4,2)
	var $dia_string = $fec_string.substr(6,2)

	var $valor
    $valor = $dia_string + '/' + $mes_string + '/' + $anio_string 

	return $valor;
}

/**
 * Called for performing a conversion between a database value and a displayed value.
 *
 * @param databaseValue The database value.
 * @param {String} dbType The type of the database column. Can be one of "TEXT", "INTEGER", "NUMBER", "DATETIME" or "MEDIA".
 *
 * @returns {Object} the displayed value.
 *
 * @properties={typeid:24,uuid:"AAFF4514-1467-4AC2-BAF5-54CDA7FEF317"}
 */
function globalConverterintahoraCrono(databaseValue, dbType) {
	var $hora_min_string = databaseValue + ''
	 if (databaseValue < 1000 )
			 {$hora_min_string = '0' + databaseValue + ''}
	else {
	 if (databaseValue < 10000000 && databaseValue > 10000)
	 	{$hora_min_string = '0' + databaseValue + ''}
	 	}
   var $hora_string = $hora_min_string.substr(0,2)
   var $min_string = $hora_min_string.substr(2,2)

	var $valor
   if ($hora_string == '88'){
   	$valor = 'S::' + $min_string }
   else
   	{$valor = $hora_string + ':' + $min_string}

	return $valor;
}

/**
 * @properties={typeid:24,uuid:"673B83A2-D1D9-4787-B93A-C94BDD96BB31"}
 */
function Borrar_Cronologia() {
	// Borra tablas postgres cronoamcab y cronoambren
	
	if (atcons_vs_to_tbl_cronoambcab.getSize() > 0)
	{if (atcons_vs_to_tbl_cronoambcab.tbl_cronoambcab_to_tbl_cronoambren_histcli.getSize() > 0 )
		{ 
		///BORRAR RENGLON	
		try {atcons_vs_to_tbl_cronoambcab.tbl_cronoambcab_to_tbl_cronoambren_histcli.deleteAllRecords()}
		catch (msg){
			(plugins.dialogs.showInfoDialog("Error al borrar Cronoambren",msg.toString(),"ok"))
			//	application.output(msg.rhinoException.getMessage())
		}
		var error1=''
		var error2=''
		var i = 0
		var array = databaseManager.getFailedRecords(atcons_vs_to_tbl_cronoambcab.tbl_cronoambcab_to_tbl_cronoambren_histcli)
		for (i = 0; i < array.length; i++) {
			var record = array[i];
			var jstable = databaseManager.getTable(record);
			var tableSQLName = jstable.getSQLName();
			error1='Error de Grabación en Tabla: ' + tableSQLName + ' en server: ' + jstable.getServerName() + ' falló al borrar. Avise a Sistemas, por favor!'
			error2='Error en grabación '+record.exception;
			if (record.exception.getErrorCode() == ServoyException.RECORD_VALIDATION_FAILED) {
				var thrown = record.exception.getValue()
				plugins.dialogs.showErrorDialog("Error al borrar","Record validation failed: " + thrown)
			}
		}
		if(error1!=''){
			plugins.dialogs.showErrorDialog("Error en grabacion de tbl_cronoambren",error1,"Ok")
			plugins.dialogs.showErrorDialog("Error en grabacion de tbl_cronoambren",error2,"Ok")
			plugins.dialogs.showInfoDialog("Reintentar","Reintente !")
			return false
			}	
  
	///BORRAR Cabecera	
		try {atcons_vs_to_tbl_cronoambcab.deleteAllRecords()}
		catch (msg){
			(plugins.dialogs.showInfoDialog("Error al borrar Cronoambcab",msg.toString(),"ok"))
			//	application.output(msg.rhinoException.getMessage())
		}
		error1=''
		error2=''
		i = 0
		array = databaseManager.getFailedRecords(atcons_vs_to_tbl_cronoambcab)
		for (i = 0; i < array.length; i++) {
			record = array[i];
			jstable = databaseManager.getTable(record);
			tableSQLName = jstable.getSQLName();
			error1='Error de Grabación en Tabla: ' + tableSQLName + ' en server: ' + jstable.getServerName() + ' falló al borrar. Avise a Sistemas, por favor!'
			error2='Error en grabación '+record.exception;
			if (record.exception.getErrorCode() == ServoyException.RECORD_VALIDATION_FAILED) {
				thrown = record.exception.getValue()
				plugins.dialogs.showErrorDialog("Error al borrar","Record validation failed: " + thrown)
			}
		}
		if(error1!=''){
			plugins.dialogs.showErrorDialog("Error en grabacion de tbl_cronoambcab",error1,"Ok")
			plugins.dialogs.showErrorDialog("Error en grabacion de tbl_cronoambcab",error2,"Ok")
			plugins.dialogs.showInfoDialog("Reintentar","Reintente !")
			return false
			}	
		}
	}
	return true
}

/**
 * 
 * @param {Number} hisclinro
 * @param {Number} tipo
 * @param {Number} legajo
 * @properties={typeid:24,uuid:"6239CE3C-E888-4BEA-AA24-64E4F5DC5F40"}
 */
function Llama_Script_Cobol(hisclinro,tipo,legajo) {

	var url=application.getServerURL()
	 var largo = url.length
	 var puerto=url.substr(largo-5,4)
	 var servidor=0
	 switch (puerto){
			case '8080':servidor=3;break;
			case '9080':servidor=9;break;
	}
	/*  
	globals.DIALOGS.showWarningDialog("servidor",servidor)
	globals.DIALOGS.showWarningDialog("histcli",hisclinro)
	globals.DIALOGS.showWarningDialog("tipo",tipo)
	globals.DIALOGS.showWarningDialog("legajo",legajo)
	*/
	
	   // parametros a pasar =servidor, nro empresa , nrohistclinica+tipoOperador+CodOperador
		plugins.UserManager.register( "Hypertelia", "q9SA5eCyb085cvATVO8s9onGe3iBzJyCTel8Y7J72BuG599wodOiU5OL26/pkKyv" );
		var vServer = plugins.UserManager.Server();
		var vString = vServer.executeCommand("/app/servoy/scripts/shcob4004 "+servidor+" "+"1"+" "+hisclinro+","+tipo+","+legajo);
		//application.output('vString',vString)
		//globals.DIALOGS.showWarningDialog("vString",vString)
		return vString
}

/**
 * @param {Number} tipoadmis
 * @param {Number} hiscli
 * @param {String} formulario
 * @properties={typeid:24,uuid:"F60FD299-671E-4EC6-917D-862BCDC84B24"}
 * @AllowToRunInFind
 */
function generoDatasetImagenes(tipoadmis,hiscli,formulario) {

	var $ds2 = databaseManager.createEmptyDataSet()
	$ds2.addColumn('flink',1,JSColumn.TEXT)
	$ds2.addColumn('flink2',2,JSColumn.TEXT)
	$ds2.addColumn('icono',3,JSColumn.TEXT)
	var icono =''
	var $link = ''
	var $link2=''
	var fs = databaseManager.getFoundSet("maestros","tbc_servicios")
	fs.find()
	fs['servcodigo']='>=0'
	fs.search()
	var largo_fs = fs.getSize()
	if(largo_fs > 0){
		for(var i=1;i<=largo_fs;i++){
			fs.setSelectedIndex(i)
			if(fs['servmodalidadvisual']!=''){
						var sql = "select ipedservicio, ipedpedido, ipednropedunico, ipedfechapedido, ipedhorapedido, ipedestado \
			                  from tbc_imapedi_new  where ipedservicio1 = " + fs['servcodigo']+ " and ipedadmis = "+tipoadmis+ " and \
			                   ipedhistclinica = "+hiscli 
			            var ds = databaseManager.getDataSetByQuery("asistencial",sql,null,-1)
			            var largo_ds = ds.getMaxRowIndex()
			            if(largo_ds>0){
			            		for(var j=1;j<=largo_ds;j++){
			            				if(ds.getValue(j,6)!=9&&ds.getValue(j,3)!=0){
			            						$link=obtieneUrlImagen(ds.getValue(j,3))
												//$link=obtieneUrlImagen(ds.getValue(j,2))
			            						if($link!=''&&$link!=null){
			            								$link2=obtieneDatosEstudio(ds.getValue(j,1),ds.getValue(j,3))
														if($link2!=''&&$link2!=null){
															$ds2.addRow(['<html><body><A HREF="'+$link+'" target="_blank">'+'Nro.Estudio '+ $link2+' </A></body></html>', $link,icono + ' ' +espdescrip])  // TODO 6-11-2018
														}
			            						}else{
			            							$link=obtieneUrlImagenAccessionNumber(ds.getValue(j,2))
				            						if($link!=''&&$link!=null){
				            								$link2=obtieneDatosEstudio(ds.getValue(j,1),ds.getValue(j,2))
															if($link2!=''&&$link2!=null){
																$ds2.addRow(['<html><body><A HREF="'+$link+'" target="_blank">'+'Nro.Estudio '+ $link2+' </A></body></html>', $link,icono + ' ' +espdescrip]) // TODO 6-11-2018
															}
				            						}
			            						}
			            				}
			            		}
			            }
			   }	
		}
	}
	var $tipos = [JSColumn.TEXT, JSColumn.TEXT, JSColumn.TEXT]

	var $frm = solutionModel.getForm(formulario)
	$frm.dataSource = $ds2.createDataSource('Ds_Link', $tipos)
	forms[formulario].controller.recreateUI()		
}

/**
 * @param {Number} nroestudio
 * @properties={typeid:24,uuid:"12A22C4C-12EB-447A-95D5-F58AF6294C80"}
 */
function obtieneUrlImagen(nroestudio) {
	//var sURL = 'http://10.200.0.110/webservicewl/index.php/acciones/url1turno';
	var sURL = 'http://10.200.0.110/webservicewl/index.php/acciones/url1turnoestudioid';
	/*
	var oJSON = {
		      datosEstudioABuscar:{
		    	  estudioaccessionnumber:nroestudio.toString()
		      }
	};
	*/
	var oJSON = new Object();
	oJSON.datosEstudioABuscar=new Object();
	oJSON.datosEstudioABuscar.estudioid=nroestudio.toString();
	//oJSON.datosEstudioABuscar.estudioaccessionnumber=nroestudio.toString();
	//var oJSON = {	datosEstudioABuscar: {estudioaccessionnumber: '"'+nroestudio+'"' }	};
	//var oJSON = {	"datosEstudioABuscar": {"estudioaccessionnumber": "780960"}	} ;

	var sClient = plugins.http.createNewHttpClient(); // HTTP plugin object
	var sPoster = sClient.createPostRequest(sURL); // Post request object

	sPoster.addHeader('content-type','application/json ; charset=UTF-8'); // required for JSON to be parsed as JSON

	//sPoster.addParameter('Method','post');
	//sPoster.addParameter('Multipart','no');
	//sPoster.addParameter('Charset encoding','UTF8');
	sPoster.setBodyContent(JSON.stringify(oJSON));
	//sPoster.setBodyContent(JSON.stringify(datosEstudioABuscar ));
	//sPoster.setBodyContent(string_data);
	//sPoster.setBodyContent(oJSON);
	//sPoster.setCharset('UTF-8');
	//application.output('Executing HTTP POST request and waiting for response from '+sURL, LOGGINGLEVEL.INFO);

	var sResponse = null;
	var sResponseData = "";
	var nHttpStatusCode = 0;
	var sCaughtException = '';

	try {
	    nHttpStatusCode = (sResponse = sPoster.executeRequest()).getStatusCode(); // POST JSON request to API
	}
	catch (e) {

	    // This handles the case when the domain called does not exist or the server is down, etc.
	    // in this case there will be no HTTP status code returned so we must handle this differently 
	    // to prevent the Servoy application from crashing

	    sCaughtException = e['rhinoException'].getMessage();

	    if (-1 != sCaughtException.indexOf('TypeError: Cannot call method "getStatusCode"')) {
	        application.output('WARNING: Could not determine HTTP status code. The server might be down or its URL might be invalid.', LOGGINGLEVEL.WARNING);
	    }
	    else {
	        application.output('WARNING: caught unknown HTTP POST exception: '+sCaughtException, LOGGINGLEVEL.WARNING);
	    }

	}

	// SUCCESS!:

	if (200 == nHttpStatusCode) { // HTTP Ready Status

	    sResponseData = sResponse.getResponseBody(); // Get the server's response text
	   
	    //application.output(sResponseData);
	    var resultado = sResponseData.split('"');
	    if(resultado[1]=="url"){
	    	return resultado[3]
	    }else{
	    	return ''
	    }
	}
	else {

		application.output('insert your code to handle various standard HTTP error codes'+nHttpStatusCode)// (404 page not found, 403 Forbidden, etc.)
		return ''

	}

}

/**
 * @param {Number} servicio
 * @param {Number} nropedido
 * @properties={typeid:24,uuid:"0DF8DEA9-DDFE-45B9-8E04-38E22B931360"}
 */
function obtieneDatosEstudio(servicio, nropedido) {

	//var fs_imapedet = databaseManager.getFoundSet("asistencial","tbc_imapedet_new");
	//fs_imapedet.find()
	//fs_imapedet['']
	//var fs_nomencla = databaseManager.getFoundSet("maestros","tbc_nomencla")
	
	return nropedido
}

/**
 * @param {Number} nroestudio
 * @properties={typeid:24,uuid:"752DE797-C84B-4D40-AD7E-6F4199F97855"}
 */
function obtieneUrlImagenAccessionNumber(nroestudio) {

	var sURL = 'http://10.200.0.110/webservicewl/index.php/acciones/url1turno';
	var oJSON = new Object();
	oJSON.datosEstudioABuscar=new Object();
	oJSON.datosEstudioABuscar.estudioaccessionnumber=nroestudio.toString();
	
	var sClient = plugins.http.createNewHttpClient(); // HTTP plugin object
	var sPoster = sClient.createPostRequest(sURL); // Post request object

	sPoster.addHeader('content-type','application/json ; charset=UTF-8'); // required for JSON to be parsed as JSON

	//sPoster.addParameter('Method','post');
	//sPoster.addParameter('Multipart','no');
	//sPoster.addParameter('Charset encoding','UTF8');
	sPoster.setBodyContent(JSON.stringify(oJSON));
	//sPoster.setBodyContent(JSON.stringify(datosEstudioABuscar ));
	//sPoster.setBodyContent(string_data);
	//sPoster.setBodyContent(oJSON);
	//sPoster.setCharset('UTF-8');
	//application.output('Executing HTTP POST request and waiting for response from '+sURL, LOGGINGLEVEL.INFO);

	var sResponse = null;
	var sResponseData = "";
	var nHttpStatusCode = 0;
	var sCaughtException = '';

	try {
	    nHttpStatusCode = (sResponse = sPoster.executeRequest()).getStatusCode(); // POST JSON request to API
	}
	catch (e) {

	    // This handles the case when the domain called does not exist or the server is down, etc.
	    // in this case there will be no HTTP status code returned so we must handle this differently 
	    // to prevent the Servoy application from crashing

	    sCaughtException = e['rhinoException'].getMessage();

	    if (-1 != sCaughtException.indexOf('TypeError: Cannot call method "getStatusCode"')) {
	        application.output('WARNING: Could not determine HTTP status code. The server might be down or its URL might be invalid.', LOGGINGLEVEL.WARNING);
	    }
	    else {
	        application.output('WARNING: caught unknown HTTP POST exception: '+sCaughtException, LOGGINGLEVEL.WARNING);
	    }

	}

	// SUCCESS!:

	if (200 == nHttpStatusCode) { // HTTP Ready Status

	    sResponseData = sResponse.getResponseBody(); // Get the server's response text
	   
	    application.output(sResponseData);
	    var resultado = sResponseData.split('"');
	    if(resultado[1]=="url"){
	    	return resultado[3]
	    }else{
	    	return ''
	    }
	}
	else {

		application.output('insert your code to handle various standard HTTP error codes'+nHttpStatusCode)// (404 page not found, 403 Forbidden, etc.)
		return ''

	}
}
