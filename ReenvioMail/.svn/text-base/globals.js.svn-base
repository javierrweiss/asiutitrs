/**
 * @properties={typeid:24,uuid:"E9B613A3-0FDE-4922-896E-4F5BA67A769B"}
 * @AllowToRunInFind
 */
function reenvioMail() {
	var fs_reenvio_mail = databaseManager.getFoundSet("bases_auxiliares","mail_autoriz_cirugia")
	fs_reenvio_mail.find()
	fs_reenvio_mail['estado']=false;
	fs_reenvio_mail.search()
	var max_reenvio_mail = fs_reenvio_mail.getSize()
	if(max_reenvio_mail>0 ){
		for(var i=max_reenvio_mail;i>=1;i--){
		 	fs_reenvio_mail.setSelectedIndex(i)
			if(fs_reenvio_mail['mail_para']!=''&&fs_reenvio_mail['mail_para']!=null){
				var fs_mail = databaseManager.getFoundSet("parametros","param_mail_autoriz")
				fs_mail.find()
				fs_mail['cuenta']='autorizaciones'
				fs_mail.search()
				if(fs_mail.getSize()<1){
					return
				}else{
					fs_mail.setSelectedIndex(1)
				}
		 		var userName = fs_mail['username'];
	
		 		var passWord = fs_mail['clave'];
	
		 		var properties = new Array();
	
		 		//properties[0] = 'mail.smtp.host=smtp.sanatoriocolegiales.com.ar';
		 		properties[0] = 'mail.smtp.host='+fs_mail['mail_smtp_host'];
	
		 		properties[1] = 'mail.smtp.auth=true';
	
		 		properties[2] = 'mail.smtp.username=' + userName;
	
		 		properties[3] = 'mail.smtp.password=' + passWord;
	
		 		properties[4] = 'mail.smtp.port=25';
			 	var attachment1 = plugins.mail.createBinaryAttachment("Protocolo-"+fs_reenvio_mail['protocolo']+"-INT-"+fs_reenvio_mail['hiscli']+".pdf",fs_reenvio_mail['protocolo_pdf']);
			 	var attachment2 = plugins.mail.createBinaryAttachment("Solicitud-"+fs_reenvio_mail['protocolo']+"-INT-"+fs_reenvio_mail['hiscli']+".pdf",fs_reenvio_mail['recetario_pdf']);
			 	var asunto = "Solicitud Autoriz.Prácticas Quirúrgicas - Paciente "+fs_reenvio_mail['apeynom']  
				var bodymsg= "Se adjunta solicitud de autorización de prácticas quirúrgicas y protocolo quirúrgico en formato PDF correspondiente al paciente "+fs_reenvio_mail['apeynom']+" Afiliado: "+fs_reenvio_mail['afiliado']
				try{
					var success = plugins.mail.sendMail(fs_reenvio_mail['mail_para'], fs_mail['mail_origen'], asunto, bodymsg,fs_reenvio_mail['mail_cc'],fs_reenvio_mail['mail_cco'],[attachment2,attachment1], properties);
				}catch(msg){
					 grabaLogError(msg.message)
				}
			
			 	if (success)
			 	{
			 		fs_reenvio_mail.deleteRecord(i)
			 	}
			}
		}
	}
}

/**
 * Callback method for when solution is opened.
 *
 * @properties={typeid:24,uuid:"8CD85500-6DEC-43BA-8089-C5DCFDCEB58C"}
 */
function onSolutionOpen_reenvioMail() {
	plugins.scheduler.addCronJob('30mins', '0 0/30 * * * ?', reenvioMail)
	plugins.scheduler.addCronJob('autorizaciones', '0 0/30 * * * ?', ReenvioMail_reenviarMail)
}

/**
 * @param {String} texto
 *
 * @properties={typeid:24,uuid:"B07461E6-A639-481D-A4B8-511C1430CC0C"}
 */
function grabaLogError(texto) {
	var $id=null
    if($id == null || $id == 'null'){
		
		$id = application.getUUID();
		//Verificando si existe clave primaria
		var sql = "SELECT EXISTS( SELECT id_log FROM tbl_errores_log WHERE id_log='" + $id + "')"
		var dsExists = databaseManager.getDataSetByQuery('bases_auxiliares',sql,null,-1);
		while(dsExists.getValue(1,1) == 1){
			$id = application.getUUID();
			sql = "SELECT EXISTS( SELECT id_log FROM tbl_errores_log WHERE id_log='" + $id + "')"
			dsExists = databaseManager.getDataSetByQuery('bases_auxiliares',sql,null,-1);
		}
		
		var fs = databaseManager.getFoundSet("bases_auxiliares","tbl_errores_log")
		
		fs.newRecord()
		fs['id_log'] = $id;
		fs['ip_log']=application.getIPAddress();
		fs['solucion_name']=application.getSolutionName();
		fs['texto_log_errores']=texto;
		fs['fecha_log']=application.getServerTimeStamp();
		fs['hora_log']=application.getServerTimeStamp();
		
		databaseManager.startTransaction()
		var result = databaseManager.saveData(fs);
		if(result){
			databaseManager.commitTransaction();
			//globals.DIALOGS.showInfoDialog("Resultado","Los datos de envío se guardaron correctamente.","Aceptar");
							
		}
		else{
			var error1 = ''
			var error2 = ''
			var array = databaseManager.getFailedRecords()
			for (var i = 0; i < array.length; i++) {
				var record = array[i];
				var jstable = databaseManager.getTable(record);
				var tableSQLName = jstable.getSQLName();
				error1='Error de Grabación en Tabla:' + tableSQLName + ' en server:' + jstable.getServerName() + ' falló la grabación. Avise urgente a Sistemas, por favor!'
				error2='Error en grabación '+record.exception;
				if (record.exception.getErrorCode() == ServoyException.RECORD_VALIDATION_FAILED) {
			
					var thrown = record.exception.getValue()
				
				}
			}
			databaseManager.rollbackTransaction()
		}
		
    }
}

/**
 * @AllowToRunInFind
 *
 * @properties={typeid:24,uuid:"CBD5A238-72B8-4A9C-BDDE-07BCDB026D4A"}
 */
function ReenvioMail_reenviarMail() {
	
	var fs_reenvio_mail = databaseManager.getFoundSet("desal","reenvia_mail");
	fs_reenvio_mail.find();
	fs_reenvio_mail['estado'] = false;
	fs_reenvio_mail.search();
	var max_reenvio_mail = fs_reenvio_mail.getSize()
	if(max_reenvio_mail > 0 ){
		
		var attachmentList;
		for(var i=max_reenvio_mail;i>=1;i--){
			
		 	fs_reenvio_mail.setSelectedIndex(i);
		 	attachmentList = new Array();
		 	
			if(utils.stringTrim(fs_reenvio_mail['mail_para']).length > 0){
				
				var fs_cuenta = databaseManager.getFoundSet("parametros","param_mail_autoriz");
				fs_cuenta.find();
				fs_cuenta['id'] = fs_reenvio_mail['id_cuenta_origen'];
				fs_cuenta.search();
				
				if(fs_cuenta.getSize() < 1){
					
					var msgLog = "Envio de email, no se encuentra cuenta [" + fs_reenvio_mail['id_cuenta_origen'] + " Historia clinica " + fs_reenvio_mail['hiscli'] + " | " + fs_reenvio_mail['fecha']; 
					grabaLogError(msgLog)
					break;
				}else{
					fs_cuenta.setSelectedIndex(1);
				}
				
		 		var userName = fs_cuenta['username'];
		 		var passWord = fs_cuenta['clave'];
		 		
		 		var properties = new Array();
		 		//properties[0] = 'mail.smtp.host=smtp.sanatoriocolegiales.com.ar';
		 		properties[0] = 'mail.smtp.host='+fs_cuenta['mail_smtp_host'];
		 		properties[1] = 'mail.smtp.auth=true';
		 		properties[2] = 'mail.smtp.username=' + userName;
		 		properties[3] = 'mail.smtp.password=' + passWord;
		 		properties[4] = 'mail.smtp.port=25';
		 		
		 		var fs_reenvio_mail_adjunto = databaseManager.getFoundSet("desal","reenvia_mail_adjunto");
		 		fs_reenvio_mail_adjunto.find();
		 		fs_reenvio_mail_adjunto['id_reenvia_mail'] = fs_reenvio_mail['id'];
		 		fs_reenvio_mail_adjunto.search();
		 		
		 		for(var j=1; j<=fs_reenvio_mail_adjunto.getSize(); j++){
		 		
		 			fs_reenvio_mail_adjunto.setSelectedIndex(j);
		 			attachmentList.push(plugins.mail.createBinaryAttachment(fs_reenvio_mail_adjunto['nombre_archivo'],fs_reenvio_mail_adjunto['archivo']));
		 		}
		 		
		 		var success = false;
				try{
					
					success = plugins.mail.sendMail(fs_reenvio_mail['mail_para'], fs_cuenta['mail_origen'], fs_reenvio_mail['asunto'], fs_reenvio_mail['mensaje'],fs_reenvio_mail['mail_cc'],fs_reenvio_mail['mail_cco'],attachmentList, properties);
				}catch(msg){
					
					msg += "\nEnvio de email, " + fs_reenvio_mail['hiscli'] + " | " + fs_reenvio_mail['fecha']; 
					grabaLogError(msg.message);
				}
			
			 	if (success)
			 	{
			 		fs_reenvio_mail.deleteRecord(i);
			 		var cant = fs_reenvio_mail_adjunto.getSize();
			 		for(var k=cant; k>=1; k--){
			 			
			 			fs_reenvio_mail_adjunto.setSelectedIndex(k);
			 			fs_reenvio_mail_adjunto.deleteRecord(k);
			 		}
			 	}
			}
		}
	}
}
