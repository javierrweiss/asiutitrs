/**
 * @properties={typeid:35,uuid:"DB4D0B6B-A5B7-4F12-A7C6-C24A3905B18C",variableType:-4}
 */
var borrado_ok2 = false;

/**
 * @properties={typeid:35,uuid:"0BD569D3-8522-42BD-B9A2-192AFC0C7AA4",variableType:-4}
 */
var borrado_ok1 = false;


/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"0E74E19B-46EA-4D48-BE67-B9E9178F7F22"}
 * @AllowToRunInFind
 */
function onShow_protocolo_6_dtl(firstShow, event) {
	elements.btn_graba_protesis_implantada.visible=true
	/*
	if(vhiscli_to_tbc_protesis.getSize()>0){
		var win = application.createWindow("f",JSWindow.MODAL_DIALOG)
		win.title = "Búsqueda de Código del Imacodi";
		win.show(forms.frm_busqueda_protesis)
	}
	*/
	controller.focusFirstField()
	/*
	}else{
		var thePressedButton = plugins.dialogs.showQuestionDialog('Solicitud de Prótesis Inexistente', '¿Ingresa la descripción de la Prótesis Implantada sin pedido asociado?', 'Si', 'No');
		if (thePressedButton=='Si'){
			var codigo = 'prote_codiprotesis_'
			var estado = 'prote_estado_'
			var fecestado = 'prote_fecestado_'
			var observ = 'prote_observ_'
		
			var done0 = plugins.rawSQL.executeSQL("parametros", "numprot", "begin; lock table numprot in row exclusive mode;")
			if (!done0) {
				var msg0 = plugins.rawSQL.getException().getMessage(); //see exception node for more info about the exception obj
				plugins.dialogs.showErrorDialog('Error', 'SQL exception: ' + msg0, 'Ok')
			}
			var done = plugins.rawSQL.executeSQL("parametros", "numprot", "select * from numprot where nprot_1 = 1 for update;")
			if (!done) {
				var msg = plugins.rawSQL.getException().getMessage(); //see exception node for more info about the exception obj
				plugins.dialogs.showErrorDialog('Error', 'SQL exception: ' + msg, 'Ok')
			}

			var vQuery = " SELECT nprot_2 FROM numprot WHERE nprot_1 = 1";
			var vDataset = databaseManager.getDataSetByQuery("parametros", vQuery, null, 1);
            var numeroprot = vDataset.getValue(1,1)+1;						
		
			var done1 = plugins.rawSQL.executeSQL("parametros", "numprot", "update numprot set nprot_2 = nprot_2 + 1 where nprot_1 = 1; commit;")
			if (!done1) {
				var msg1 = plugins.rawSQL.getException().getMessage(); //see exception node for more info about the exception obj
				plugins.dialogs.showErrorDialog('Error', 'SQL exception: ' + msg1, 'Ok')
			}			
			var fs1 = databaseManager.getFoundSet("asistencial", "tbc_protesis")
			fs1.newRecord()
			var fechaactual =new Date()
			var anio2 = fechaactual.getFullYear()
			var mes2 = fechaactual.getMonth()+1
			var dia2 = fechaactual.getDate()
			var hora2 = fechaactual.getHours()
			var minutos2 = fechaactual.getMinutes()
			var mes_ed2
			var dia_ed2
			var hora_ed2
			var minutos_ed2
			if(mes2>9){
				mes_ed2 = mes2
			}else{
				mes_ed2='0'+mes2
			}
			if(dia2>9){
				dia_ed2=dia2
			}else{
				dia_ed2='0'+dia2
			}
			if (hora2>9){
				hora_ed2=hora2
			}else{
				hora_ed2='0'+hora2
			}
			if(minutos2>9){
				minutos_ed2=minutos2
			}else{
				minutos_ed2='0'+minutos2
			}
			fs1['prote_nroprote']=numeroprot
			fs1['prote_nroprote_1']=numeroprot
			fs1['prote_histclin']=globals.vHiscli
			fs1['prote_fecsolic']=anio2+''+mes_ed2+''+dia_ed2
			fs1['prote_fecpedido']=anio2+''+mes_ed2+''+dia_ed2
			fs1['prote_fecmaxrecep']=anio2+''+mes_ed2+''+dia_ed2
			fs1['prote_fecrecepefec']=anio2+''+mes_ed2+''+dia_ed2
			fs1['prote_fecimplante']=vhiscli_to_tbc_cirugint.cirifechainicio
			fs1['prote_fecmodiest']=anio2+''+mes_ed2+''+dia_ed2
			fs1['prote_horasolic']=hora_ed2+''+minutos_ed2
			fs1['prote_horaimplante']=vhiscli_to_tbc_cirugint.cirihorainicio
			fs1['prote_urgprog']=1
			fs1['prote_habita']=vhiscli_unico_to_tbc_admision_scroll.adm_habita
			fs1['prote_cama']=vhiscli_unico_to_tbc_admision_scroll.adm_cama
			fs1['prote_nroempr']=1
			fs1['prote_utilcama']=vhiscli_unico_to_tbc_admision_scroll.adm_utiliza
			fs1['prote_legmod']=globals.vLega
			fs1['prote_tiplegmod']=globals.vTipoOperador
			fs1['prote_cantcajas']=0
			fs1['prote_estprote']=4
			fs1['prote_lugarentreg']=0
			fs1['prote_nrotxtobs']=0
			fs1['prote_nrotxtdiag']=0
			fs1['prote_nrotxtresum']=0
			fs1['prote_tiphistclin']=0
			fs1['prote_nroremito']=0
			fs1['prote_protocolo']=globals.vNroProtocolo
			fs1['prote_estdevol']=0
			fs1['prote_fecestdevol']=0
			fs1['prote_fecestprovista']=0
			fs1['prote_provistapor']=0
			fs1['prote_motdevol']=' '
			fs1['prote_motanul']=' '
			fs1['prote_deslugarentreg']=' '
			fs1['prote_provistaotro']=' '
			fs1['prote_legmedprovee']=0
			fs1['prote_tiplegmedprovee']=0
			fs1['prote_filler']=' '
			fs1['prote_legmed']=globals.vciri_legciru
			fs1['prote_tiplegmed']=globals.vtipo_ciru_ie
			for(var j=1;j<=20;j++){
				fs1[codigo+j]=0
				fs1[estado+j]=0
				fs1[fecestado+j]=0
				fs1[observ+j]=' '
			}
			databaseManager.saveData(fs1.getRecord(1))
		}
		*/

}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"2D6B4EBB-BE21-4554-86DA-D6FB3180010D"}
 */
function onAction_graba_protocolo_6(event) {
	if (globals.proto6!=null&&globals.proto6!=''){
		if(vhiscli_to_tbc_protesis.getSize()<1){	
			var codigo = 'prote_codiprotesis_'
			var estado = 'prote_estado_'
			var fecestado = 'prote_fecestado_'
			var observ = 'prote_observ_'
			var done0 = plugins.rawSQL.executeSQL("parametros", "numprot", "begin; lock table numprot in row exclusive mode;")
			if (!done0) {
				var msg0 = plugins.rawSQL.getException().getMessage(); //see exception node for more info about the exception obj
				plugins.dialogs.showErrorDialog('Error', 'SQL exception: ' + msg0, 'Ok')
			}
			var done = plugins.rawSQL.executeSQL("parametros", "numprot", "select * from numprot where nprot_1 = 1 for update;")
			if (!done) {
				var msg = plugins.rawSQL.getException().getMessage(); //see exception node for more info about the exception obj
				plugins.dialogs.showErrorDialog('Error', 'SQL exception: ' + msg, 'Ok')
			}

			var vQuery = " SELECT nprot_2 FROM numprot WHERE nprot_1 = 1";
			var vDataset = databaseManager.getDataSetByQuery("parametros", vQuery, null, 1);
			var numeroprot = vDataset.getValue(1,1)+1;						
	
			var done1 = plugins.rawSQL.executeSQL("parametros", "numprot", "update numprot set nprot_2 = nprot_2 + 1 where nprot_1 = 1; commit;")
			if (!done1) {
				var msg1 = plugins.rawSQL.getException().getMessage(); //see exception node for more info about the exception obj
				plugins.dialogs.showErrorDialog('Error', 'SQL exception: ' + msg1, 'Ok')
			}
			plugins.dialogs.showInfoDialog("Número de Prótesis",numeroprot)
			var fs1 = databaseManager.getFoundSet("asistencial", "tbc_protesis")
			fs1.newRecord()
			var fechaactual =application.getServerTimeStamp()
			var anio2 = fechaactual.getFullYear()
			var mes2 = fechaactual.getMonth()+1
			var dia2 = fechaactual.getDate()
			var hora2 = fechaactual.getHours()
			var minutos2 = fechaactual.getMinutes()
			var mes_ed2
			var dia_ed2
			var hora_ed2
			var minutos_ed2
			if(mes2<10){
				mes_ed2='0'+mes2
			}else{
				mes_ed2 = mes2
			}
			if(dia2<10){
				dia_ed2='0'+dia2
			}else{
				dia_ed2=dia2
			}
			if (hora2<10){
				hora_ed2='0'+hora2	
			}else{
				hora_ed2=hora2
			}
			if(minutos2<10){
				minutos_ed2='0'+minutos2
			}else{
				minutos_ed2=minutos2
			}
			fs1['prote_nroprote']=numeroprot
			fs1['prote_nroprote_1']=numeroprot
			fs1['prote_histclin']=globals.vHiscli
			fs1['prote_fecsolic']=anio2+''+mes_ed2+''+dia_ed2
			fs1['prote_fecpedido']=anio2+''+mes_ed2+''+dia_ed2
			fs1['prote_fecmaxrecep']=anio2+''+mes_ed2+''+dia_ed2
			fs1['prote_fecrecepefec']=anio2+''+mes_ed2+''+dia_ed2
			fs1['prote_fecimplante']=vhiscli_to_tbc_cirugint.cirifechainicio
			fs1['prote_fecmodiest']=anio2+''+mes_ed2+''+dia_ed2
			fs1['prote_horasolic']=hora_ed2+''+minutos_ed2
			fs1['prote_horaimplante']=vhiscli_to_tbc_cirugint.cirihorainicio
			fs1['prote_urgprog']=1
			fs1['prote_habita']=vhiscli_unico_to_tbc_admision_scroll.adm_habita
			fs1['prote_cama']=vhiscli_unico_to_tbc_admision_scroll.adm_cama
			fs1['prote_nroempr']=1
			fs1['prote_utilcama']=vhiscli_unico_to_tbc_admision_scroll.adm_utiliza
			fs1['prote_legmod']=globals.vLega
			fs1['prote_tiplegmod']=globals.vTipoOperador
			fs1['prote_cantcajas']=0
			fs1['prote_estprote']=4
			fs1['prote_lugarentreg']=0
			fs1['prote_nrotxtobs']=0
			fs1['prote_nrotxtdiag']=0
			fs1['prote_nrotxtresum']=0
			fs1['prote_tiphistclin']=0
			fs1['prote_nroremito']=0
			fs1['prote_protocolo']=globals.vNroProtocolo
			fs1['prote_estdevol']=0
			fs1['prote_fecestdevol']=0
			fs1['prote_fecestprovista']=0
			fs1['prote_provistapor']=0
			fs1['prote_motdevol']=' '
			fs1['prote_motanul']=' '
			fs1['prote_deslugarentreg']=' '
			fs1['prote_provistaotro']=' '
			fs1['prote_legmedprovee']=0
			fs1['prote_tiplegmedprovee']=0
			fs1['prote_filler']=' '
			fs1['prote_legmed']=globals.vciri_legciru
			fs1['prote_tiplegmed']=globals.vtipo_ciru_ie
			for(var k=1;k<=20;k++){
				fs1[codigo+k]=0
				fs1[estado+k]=0
				fs1[fecestado+k]=0
				fs1[observ+k]=' '
			}
			try{
				databaseManager.saveData(fs1.getRecord(1))
			}catch(msg){
				forms.frm_consulta_protocolo.grabaLog(msg.message)
				forms.frm_consulta_protocolo.grabaLog("Error tbc_protesis")
			}
			var error3 = ''
			var error4 = ''
			var array1 = databaseManager.getFailedRecords(fs1)
			for (var j = 0; j < array1.length; j++) {
				var record1 = array1[i];
				var jstable1 = databaseManager.getTable(record1);
				var tableSQLName1 = jstable1.getSQLName();
				error3='Error de Grabación en Tabla:' + tableSQLName1 + ' en server:' + jstable1.getServerName() + ' falló la grabación. Avise urgente a Sistemas, por favor!'
				error4='Error en grabación '+record1.exception;
				if (record1.exception.getErrorCode() == ServoyException.RECORD_VALIDATION_FAILED) {
			// exception thrown in pre-insert/update/delete event method
					var thrown1 = record1.exception.getValue()
					//plugins.dialogs.showErrorDialog("Error de grabación","Record validation failed: " + thrown)
				}
			}
			
			if(error3!=''){
				plugins.dialogs.showErrorDialog("Error en grabación","Se ha producido un error de grabación. "+'\n'+"Avise a Sistemas, por favor.", "Ok")
				plugins.dialogs.showErrorDialog("Error de grabación","Record validation failed: " + thrown1)
				plugins.dialogs.showErrorDialog("Error en grabacion de Texto",error3,"Ok")
				plugins.dialogs.showErrorDialog("Error en grabacion de Texto",error4,"Ok")
				forms.frm_consulta_protocolo.grabaLog(thrown1)
				forms.frm_consulta_protocolo.grabaLog(error3)
				forms.frm_consulta_protocolo.grabaLog(error4)
				forms.frm_consulta_protocolo.grabaLog("Error tbc_protesis")
			}
		}
		/*
		forms.protocolo_6_dtl.sub_borrado()
		globals.GrabarTexto(globals.vNroProtocolo,6,globals.proto6)
		*/
		globals.vItemTexto=6
		if (vs_to_tbl_protoc_txt.getSize()<1){
			vs_to_tbl_protoc_txt.newRecord()
		}
		vs_to_tbl_protoc_txt.texto=globals.proto6
		databaseManager.startTransaction()
		if(databaseManager.saveData(vs_to_tbl_protoc_txt)){
			databaseManager.commitTransaction()
		}else{
			var error1 = ''
			var error2 = ''
			var array = databaseManager.getFailedRecords(vs_to_tbl_protoc_txt)
			for (var i = 0; i < array.length; i++) {
				var record = array[i];
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
				plugins.dialogs.showErrorDialog("Error de grabación","Record validation failed: " + thrown)
				plugins.dialogs.showErrorDialog("Error en grabacion de Texto",error1,"Ok")
				plugins.dialogs.showErrorDialog("Error en grabacion de Texto",error2,"Ok")
				forms.frm_consulta_protocolo.grabaLog(thrown)
				forms.frm_consulta_protocolo.grabaLog(error1)
				forms.frm_consulta_protocolo.grabaLog(error2)
				forms.frm_consulta_protocolo.grabaLog("Error texto protesis")
			}
			plugins.dialogs.showErrorDialog("Error en grabación","Se ha producido un error de grabación. "+'\n'+"Avise a Sistemas, por favor.", "Ok")
		}
	}
	elements.btn_graba_protesis_implantada.visible=false
}

/**
 * Handle focus lost event of the element.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"CD226B31-F559-4B9C-9D91-A31E59560EBB"}
 */
function onFocusLost_proto6(event) {
	elements.btn_graba_protesis_implantada.requestFocus()
}

/**
 * @properties={typeid:24,uuid:"C12AEF4D-3F72-4910-8BB6-CA4576D2D176"}
 * @AllowToRunInFind
 */
function sub_borrado() {
	borrado_ok1=false
	borrado_ok2=false
	
	var fs1 = databaseManager.getFoundSet("asistencial", "tbc_protoc_txt")
	
	var name = new Array()
	name[0] = "protxt_protocolo"
	name[1] = "protxt_grupo"
	name[2] = "protxt_nro1"
	name[3] = "protxt_secuen"
	name[4] = "protxt_linea"
	name[5] = "protxt_tope"
 
	fs1.find()
	fs1[name[0]] = globals.vNroProtocolo
	fs1[name[1]] = 6
	fs1[name[2]] = 1
	fs1.search()	
	  
	var tamanio = 0;
	tamanio = fs1.getSize();

	if (tamanio > 0) {
		borrado_ok1 = fs1.deleteAllRecords()
		if(!borrado_ok1){
			plugins.dialogs.showErrorDialog("Error en borrado de Texto anterior","Avise inmediatamente a Sistemas por favor!! "+ServoyException.DELETE_NOT_GRANTED.toString(),"Ok")
		//}else{
			//databaseManager.refreshRecordFromDatabase(fs1,-1)
		}
	}
	fs1.find()
	fs1[name[0]] = globals.vNroProtocolo
	fs1[name[1]] = 6
	fs1[name[2]] = 0
	fs1.search()
	var filascab = fs1.getSize()
	if (filascab > 0) {
		borrado_ok2 = fs1.deleteAllRecords()
		if(!borrado_ok2){
			plugins.dialogs.showErrorDialog("Error en borrado de Texto Cabecera","Avise inmediatamente a Sistemas por favor!! "+ServoyException.DELETE_NOT_GRANTED.toString(),"Ok")
		//}else{
			//databaseManager.refreshRecordFromDatabase(fs1,1)
		}
	}
}
