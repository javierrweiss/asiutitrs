/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"77FF7706-A158-40FA-855B-B7D91C2700B0"}
 */
var vString = 'null';

/**
 * Handle changed data.
 *
 * @param oldValue old value
 * @param newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"873FA16D-1CD0-41C7-A324-6398179967E8"}
 */
function onDataChange_AnestesiaChek(oldValue, newValue, event) {
	forms.form116_dtl.BuscoAnestesia()
	if(newValue==1){
		if(!globals.vAnestesiaOk){
			plugins.dialogs.showInfoDialog("Evaluación PreAnestésica","FALTA EVALUACION PREOPERATORIA DEL ANESTESIÓLOGO")
			newValue=0
			oldValue=0
			globals.vAnesChek=0
			elements.tab_extension.setTabEnabledAt(6,false)
			return false
			//forms.form116_dtl.DeslocHcir()
			//forms.tab_scr_tbc_admsion.controller.show()
		}else{
			if(vhiscli_to_tbc_cirugint.getSize()>0){
				RegrabaCirugint()
			}
			elements.tab_extension.setTabEnabledAt(6,true)
			return true
		}	
	}else{
		if(!globals.vAnestesiaOk){
			elements.tab_extension.setTabEnabledAt(6,false)
		}else{
			elements.tab_extension.setTabEnabledAt(6,true)
			newValue=1
			oldValue=1
			globals.vAnesChek=1
		}
		return true
	}

}

/**
 * @properties={typeid:24,uuid:"B4798E45-3C0E-442D-9B4E-06AC97EC655D"}
 * @AllowToRunInFind
 */
function BuscoAnestesia() {
	var fs = databaseManager.getFoundSet("asistencial","tbc_anestesia")
	var fecha_hoy = new Date()
	var fecha = 0
	var fecha_aux = 0
	fecha_aux = application.getServerTimeStamp().getTime() - (1000 * 60 * 60 * 24)
	var fecha_ant = new Date(fecha_hoy.setTime(fecha_aux))
	fecha = globals.DateToEntero(fecha_ant)
	globals.vAnestesiaOk=false
	if(vs2_to_tbc_anestesia.getSize()>0){
		globals.vFeccarga=vs2_to_tbc_anestesia.anes_feccarga
		globals.vHorcarga=vs2_to_tbc_anestesia.anes_horcarga
		globals.vInterven0=vs2_to_tbc_anestesia.anes_interven
		globals.vAnestesiaOk=true
	}else{
		fs.clear()
		fs.find()
		fs['anes_estado']= '<2'
		fs['anes_histclin']= globals.vHiscli
		fs['anes_feccarga']= '>='+fecha
		fs.search(true)
		if(fs.getSize()>0){
			fs.setSelectedIndex(1)
			globals.vFeccarga=fs['anes_feccarga']
			globals.vHorcarga=fs['anes_horcarga']
			globals.vInterven0=fs['anes_interven']
			globals.vAnestesiaOk=true
		}
		
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"8EEE980E-1941-4823-8A12-600C1F8E5057"}
 */
function onAction_graba_modificaciones(event) {
	vhiscli_to_tbc_cirugint.ciriinterven=globals.vInterven0
	vhiscli_to_tbc_cirugint.cirianestesia=globals.vAnesChek
	vhiscli_to_tbc_cirugint.ciriieciru=globals.vtipo_cirujano_ie
	vhiscli_to_tbc_cirugint.cirilegciru=globals.vciri_legciru
	vhiscli_to_tbc_cirugint.cirilegpartero=globals.vciri_legpartero
	vhiscli_to_tbc_cirugint.cirilegneonato=globals.vciri_legneonato
	vhiscli_to_tbc_cirugint.cirinroquirofa=globals.vQuirofano
	vhiscli_to_tbc_cirugint.cirifechainicio=globals.vFechaInicio.getFullYear()+''+globals.vFechaInicio.getMonth()+''+globals.vFechaInicio.getDate()
	vhiscli_to_tbc_cirugint.cirifechafinal=0
	vhiscli_to_tbc_cirugint.ciripinzasinicio=globals.vPinzasInicio
	if(globals.vEsHemodinamia=="Si"){
		vhiscli_to_tbc_cirugint.ciritipointerven=2
	}else{
			vhiscli_to_tbc_cirugint.ciritipointerven=0
	}
	if(globals.vFuebaniado=="Si"){
		var anio = globals.var_ciri_fecbanio.getFullYear()
		var mes = globals.var_ciri_fecbanio.getMonth()+1
		var dia = globals.var_ciri_fecbanio.getDate()
		var hora = globals.var_ciri_fecbanio.getHours()
		var minutos = globals.var_ciri_fecbanio.getMinutes()
		var mes_ed
		var dia_ed
		var hora_ed
		var minutos_ed
		if(mes>9){
			mes_ed = mes
		}else{
			mes_ed='0'+mes
		}
		if(dia>9){
			dia_ed=dia
		}else{
			dia_ed='0'+dia
		}
		if (hora>9){
			hora_ed=hora
		}else{
			hora_ed='0'+hora
		}
		if(minutos>9){
			minutos_ed=minutos
		}else{
			minutos_ed='0'+minutos
		}
		vhiscli_to_tbc_cirugint.cirifechabanio=anio+''+mes_ed+''+dia_ed
		vhiscli_to_tbc_cirugint.cirihorabanio=hora_ed+''+minutos_ed
	}
	if(globals.vFuerasurado=="Si"){
		var anio1= globals.var_ciri_fecrasura.getFullYear()
		var mes1= globals.var_ciri_fecrasura.getMonth()+1
		var dia1= globals.var_ciri_fecrasura.getDate()
		var hora1= globals.var_ciri_fecrasura.getHours()
		var minutos1= globals.var_ciri_fecrasura.getMinutes()
		var mes_ed1
		var dia_ed1
		var hora_ed1
		var minutos_ed1
		if(mes1>9){
			mes_ed1 = mes1
		}else{
			mes_ed1='0'+mes1
		}
		if(dia1>9){
			dia_ed1=dia1
		}else{
			dia_ed1='0'+dia1
		}
		if (hora1>9){
			hora_ed1=hora1
		}else{
			hora_ed1='0'+hora1
		}
		if(minutos1>9){
			minutos_ed1=minutos1
		}else{
			minutos_ed1='0'+minutos1
		}
		vhiscli_to_tbc_cirugint.cirifecharasura=anio1+''+mes_ed1+''+dia_ed1
		vhiscli_to_tbc_cirugint.cirihorarasura=hora_ed1+''+minutos_ed1
	}
	
	var anio2 = globals.vFechaInicio.getFullYear()
	var mes2 = globals.vFechaInicio.getMonth()+1
	var dia2 = globals.vFechaInicio.getDate()
	var hora2 = globals.vFechaInicio.getHours()
	var minutos2 = globals.vFechaInicio.getMinutes()
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
	vhiscli_to_tbc_cirugint.cirifechainicio=anio2+''+mes_ed2+''+dia_ed2
	
	vhiscli_to_tbc_cirugint.cirihorainicio=hora_ed2+''+minutos_ed2
	
	if(globals.vFechaFinal!=null){
		var anio3 = globals.vFechaFinal.getFullYear()
		var mes3 = globals.vFechaFinal.getMonth()+1
		var dia3 = globals.vFechaFinal.getDate()
		var hora3 = globals.vFechaFinal.getHours()
		var minutos3 = globals.vFechaFinal.getMinutes()
		var mes_ed3
		var dia_ed3
		var hora_ed3
		var minutos_ed3
		if(mes3>9){
			mes_ed3 = mes3
		}else{
			mes_ed3='0'+mes3
		}
		if(dia3>9){
			dia_ed3=dia3
		}else{
			dia_ed3='0'+dia3
		}
		if (hora3>9){
			hora_ed3=hora3
		}else{
			hora_ed3='0'+hora3
		}
		if(minutos3>9){
			minutos_ed3=minutos3
		}else{
			minutos_ed3='0'+minutos3
		}
		vhiscli_to_tbc_cirugint.cirifechafinal=anio3+''+mes_ed3+''+dia_ed3
	
		vhiscli_to_tbc_cirugint.cirihorafinal=hora_ed3+''+minutos_ed3
	}	
	
	vhiscli_to_tbc_cirugint.cirianestesia=globals.vAnesChek
	
	if(vhiscli_to_tbc_cirugint.tbc_cirugint_to_tbc_obstetri_gesta.getSize()>0){
		try{
			databaseManager.saveData(vhiscli_to_tbc_cirugint.tbc_cirugint_to_tbc_obstetri_gesta.getRecord(1))
			vhiscli_to_tbc_cirugint.ciriobstgesta=globals.current_obstetri_gest
			vhiscli_to_tbc_cirugint.ciriobsttipo=0
			vhiscli_to_tbc_cirugint.ciriparto=1
		}catch (msg){
			(plugins.dialogs.showInfoDialog("Prueba de error",msg.toString(),"ok"))
		}	
	}
	try{
		databaseManager.saveData(vhiscli_to_tbc_cirugint.getRecord(1))
		
	}catch (msg){
		(plugins.dialogs.showInfoDialog("Prueba de error",msg.toString(),"ok"))
	}
	
	if(vhiscli_to_tbc_anestesia.getSize()>0){
		vhiscli_to_tbc_anestesia.anes_estado=1
		vhiscli_to_tbc_anestesia.anes_protocolo=globals.vNroProtocolo
		var hora4 = forms.EvaluacionPostAnestesia_dtl.var_anes_horrecup.getHours()
		var minutos4 = forms.EvaluacionPostAnestesia_dtl.var_anes_horrecup.getMinutes()
		var hora_ed4
		var minutos_ed4
		if (hora4>9){
			hora_ed4=hora4
		}else{
			hora_ed4='0'+hora4
		}
		if(minutos4>9){
			minutos_ed4=minutos4
		}else{
			minutos_ed4='0'+minutos4
		}
		vhiscli_to_tbc_anestesia.anes_horrecup=hora_ed4+''+minutos_ed4
		try{
			databaseManager.saveData(vhiscli_to_tbc_anestesia.getRecord(1))
		}catch (msg){
			(plugins.dialogs.showInfoDialog("Prueba de error",msg.toString(),"ok"))
		}	
	}
	if(vhiscli_unico_to_tbc_admision_scroll.adm_tipoing==2){
		vhiscli_unico_to_tbc_admision_scroll.tbc_admision_scroll_to_tbc_hcicir_new.hcirhiscli=globals.vHiscli
		vhiscli_unico_to_tbc_admision_scroll.tbc_admision_scroll_to_tbc_hcicir_new.hcirfecha=vhiscli_unico_to_tbc_admision_scroll.adm_fecing
		vhiscli_unico_to_tbc_admision_scroll.tbc_admision_scroll_to_tbc_hcicir_new.hcirfecha2=vhiscli_unico_to_tbc_admision_scroll.adm_fecing
		vhiscli_unico_to_tbc_admision_scroll.tbc_admision_scroll_to_tbc_hcicir_new.hcirhora=vhiscli_unico_to_tbc_admision_scroll.adm_horing
		vhiscli_unico_to_tbc_admision_scroll.tbc_admision_scroll_to_tbc_hcicir_new.hcirhora2=vhiscli_unico_to_tbc_admision_scroll.adm_horing
		vhiscli_unico_to_tbc_admision_scroll.tbc_admision_scroll_to_tbc_hcicir_new.hcircama=vhiscli_unico_to_tbc_admision_scroll.adm_cama
		vhiscli_unico_to_tbc_admision_scroll.tbc_admision_scroll_to_tbc_hcicir_new.hcirhabi=vhiscli_unico_to_tbc_admision_scroll.adm_habita
		vhiscli_unico_to_tbc_admision_scroll.tbc_admision_scroll_to_tbc_hcicir_new.hcirfechacarga=globals.vFeccarga
		vhiscli_unico_to_tbc_admision_scroll.tbc_admision_scroll_to_tbc_hcicir_new.hcirtipomed=globals.vTipoOperador
		vhiscli_unico_to_tbc_admision_scroll.tbc_admision_scroll_to_tbc_hcicir_new.hcirlegajomed=globals.vLega
		ConvierteCheksaGrabarSN("HistoriaClinica_dtl")
		try {
			databaseManager.saveData(vhiscli_unico_to_tbc_admision_scroll.tbc_admision_scroll_to_tbc_hcicir_new.getRecord(1))
		}catch (msg){
			(plugins.dialogs.showInfoDialog("Prueba de error",msg.toString(),"ok"))
		}
		globals.InitializarCheks("HistoriaClinica_dtl")
	}
	
	
	if (globals.proto1!=null&&globals.proto1!=''){
		globals.GrabarTexto(globals.vNroProtocolo,1,globals.proto1)
	}
	if (globals.proto2!=null&&globals.proto2!=''){
		globals.GrabarTexto(globals.vNroProtocolo,2,globals.proto2)
	}
	if (globals.proto3!=null&&globals.proto3!=''){
		globals.GrabarTexto(globals.vNroProtocolo,3,globals.proto3)
	}
	if (globals.proto4!=null&&globals.proto4!=''){
		globals.GrabarTexto(globals.vNroProtocolo,4,globals.proto4)
	}
	if (globals.proto5!=null&&globals.proto5!=''){
		globals.GrabarTexto(globals.vNroProtocolo,5,globals.proto5)
	}
	if (globals.proto6!=null&&globals.proto6!=''){
		globals.GrabarTexto(globals.vNroProtocolo,6,globals.proto6)
	}
	if (globals.proto7!=null&&globals.proto7!=''){
		globals.GrabarTexto(globals.vNroProtocolo,7,globals.proto7)
	}
	if (globals.proto8!=null&&globals.proto8!=''){
		globals.GrabarTexto(globals.vNroProtocolo,8,globals.proto8)
	}
	if (globals.proto9!=null&&globals.proto9!=''){
		globals.GrabarTexto(globals.vNroProtocolo,9,globals.proto9)
	}
	if (globals.hcicirtxt1!=null&&globals.hcicirtxt1!=''){
		globals.GrabarTextoHCIR(globals.vHiscli,vhiscli_unico_to_tbc_admision_scroll.adm_fecing,vhiscli_unico_to_tbc_admision_scroll.adm_horing,globals.hcicirtxt1,1)
	}
	if (globals.hcicirtxt2!=null&&globals.hcicirtxt2!=''){
		globals.GrabarTextoHCIR(globals.vHiscli,vhiscli_unico_to_tbc_admision_scroll.adm_fecing,vhiscli_unico_to_tbc_admision_scroll.adm_horing,globals.hcicirtxt2,2)
	}
	if (globals.hcicirtxt3!=null&&globals.hcicirtxt3!=''){
		globals.GrabarTextoHCIR(globals.vHiscli,vhiscli_unico_to_tbc_admision_scroll.adm_fecing,vhiscli_unico_to_tbc_admision_scroll.adm_horing,globals.hcicirtxt3,3)
	}
	if (globals.hcicirtxt4!=null&&globals.hcicirtxt4!=''){
		globals.GrabarTextoHCIR(globals.vHiscli,vhiscli_unico_to_tbc_admision_scroll.adm_fecing,vhiscli_unico_to_tbc_admision_scroll.adm_horing,globals.hcicirtxt4,4)
	}
	if (globals.hcicirtxt5!=null&&globals.hcicirtxt5!=''){
		globals.GrabarTextoHCIR(globals.vHiscli,vhiscli_unico_to_tbc_admision_scroll.adm_fecing,vhiscli_unico_to_tbc_admision_scroll.adm_horing,globals.hcicirtxt5,5)
	}
	if (globals.hcicirtxt6!=null&&globals.hcicirtxt6!=''){
		globals.GrabarTextoHCIR(globals.vHiscli,vhiscli_unico_to_tbc_admision_scroll.adm_fecing,vhiscli_unico_to_tbc_admision_scroll.adm_horing,globals.hcicirtxt6,6)
	}
	if (globals.hcicirtxt7!=null&&globals.hcicirtxt7!=''){
		globals.GrabarTextoHCIR(globals.vHiscli,vhiscli_unico_to_tbc_admision_scroll.adm_fecing,vhiscli_unico_to_tbc_admision_scroll.adm_horing,globals.hcicirtxt7,7)
	}
	if (globals.hcicirtxt8!=null&&globals.hcicirtxt8!=''){
		globals.GrabarTextoHCIR(globals.vHiscli,vhiscli_unico_to_tbc_admision_scroll.adm_fecing,vhiscli_unico_to_tbc_admision_scroll.adm_horing,globals.hcicirtxt8,8)
	}
	
	if (globals.obstetritxt1!=null&&globals.obstetritxt1!=''){
		globals.GrabarTextoOBSTXT(globals.vHiscli,globals.current_obstetri_gest,1,globals.obstetritxt1)
	}
	if (globals.obstetritxt2!=null&&globals.obstetritxt2!=''){
		globals.GrabarTextoOBSTXT(globals.vHiscli,globals.current_obstetri_gest,2,globals.obstetritxt2)
	}
	if (globals.obstetritxt3!=null&&globals.obstetritxt3!=''){
		globals.GrabarTextoOBSTXT(globals.vHiscli,globals.current_obstetri_gest,3,globals.obstetritxt3)
	}
	if (globals.obstetritxt4!=null&&globals.obstetritxt4!=''){
		globals.GrabarTextoOBSTXT(globals.vHiscli,globals.current_obstetri_gest,4,globals.obstetritxt4)
	}
	if (globals.obstetritxt5!=null&&globals.obstetritxt5!=''){
		globals.GrabarTextoOBSTXT(globals.vHiscli,globals.current_obstetri_gest,5,globals.obstetritxt5)
	}
	if (globals.obstetritxt6!=null&&globals.obstetritxt6!=''){
		globals.GrabarTextoOBSTXT(globals.vHiscli,globals.current_obstetri_gest,6,globals.obstetritxt6)
	}
	globals.DeslocHcir()
	//history.back()
	application.showForm("frm_menu_principal")
	//forms.frm_menu_principal.controller.show()
}

/**
 * @properties={typeid:24,uuid:"C6E56BFF-6BA1-40EB-81CC-019DD144D1DA"}
 */
function valida_campos_obligatorios() {
	var retorno=true
	if(globals.vInterven0==0||globals.vInterven0==null){
		retorno=false
	}
	if(globals.vEsHemodinamia==null){
		retorno=false
	}
	if(globals.vciri_legciru==0&&globals.vciri_legneonato==0&&globals.vciri_legpartero==0){
		retorno=false
	}
	if(globals.vQuirofano==0){
		retorno=false
	}
	if(globals.vFechaInicio==0||globals.vFechaInicio==null){
		retorno=false
	}
	if(vciri_legciru_to_tbc_medicos_personal.getSize()<1){
		retorno=false
	}
	if(vinterven0_to_tbc_interven.getSize()<1){
		retorno=false
	}
	return retorno
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"CD957695-7719-400F-B49F-EA6625CF1211"}
 * @AllowToRunInFind
 */
function onAction_Alta_Nuevo_protocolo(event) {
	if(valida_campos_obligatorios()){
		if(!buscaProtocoloAbierto(globals.vciri_legciru)){
			return
		}
		var win = application.createWindow("pinzaini",JSWindow.MODAL_DIALOG)
		win.title = "Pinzas al Inicio";
		win.setSize(400,300)
		win.show(forms.PinzasInicio)
		//application.output(forms.PinzasInicio.f_pinzasinicio)
		if(!forms.PinzasInicio.f_pinzasinicio){
			return
		}
		
		//vhiscli_to_tbc_cirugint.newRecord()
		
		//globals.InicializarDatosDeRelacion(vhiscli_to_tbc_cirugint,"asistencial","tbc_cirugint")
		
		var done0 = plugins.rawSQL.executeSQL("parametros", "param", "begin; lock table param in row exclusive mode;")
		if (!done0) {
			var msg0 = plugins.rawSQL.getException().getMessage(); //see exception node for more info about the exception obj
			plugins.dialogs.showErrorDialog('Error', 'SQL exception: ' + msg0, 'Ok')
		}
		var done = plugins.rawSQL.executeSQL("parametros", "param", "select * from param where key_param = 1 for update;")
		if (!done) {
			var msg = plugins.rawSQL.getException().getMessage(); //see exception node for more info about the exception obj
			plugins.dialogs.showErrorDialog('Error', 'SQL exception: ' + msg, 'Ok')
		}

		var vQuery = " SELECT prm_54 FROM param WHERE key_param = 1";
		var vDataset = databaseManager.getDataSetByQuery("parametros", vQuery, null, 1);
		
		//plugins.dialogs.showInfoDialog("contador",vDataset.getValue(1,1));
		
		globals.vNroProtocolo=vDataset.getValue(1,1)+1;
		
		var done1 = plugins.rawSQL.executeSQL("parametros", "param", "update param set prm_54 = prm_54 + 1 where key_param = 1; commit;")
		if (!done1) {
			var msg1 = plugins.rawSQL.getException().getMessage(); //see exception node for more info about the exception obj
			plugins.dialogs.showErrorDialog('Error', 'SQL exception: ' + msg1, 'Ok')
		}

				
		//var date = utils.timestampToDate(application.getTimeStamp());
		//var fec = new Date()
		var fecha_actual = application.getServerTimeStamp()
		globals.vFechaInicio= fecha_actual
		var anio=fecha_actual.getFullYear()
		var mes=fecha_actual.getMonth()+1
		var mes_ed
		if((fecha_actual.getMonth()+1)> 9){
			mes_ed=mes
		}else{
			mes_ed="0"+mes
		}
		var dia=fecha_actual.getDate()
		var dia_ed
		if(fecha_actual.getDate()<10){
			dia_ed="0"+dia
		}else{
			dia_ed=dia
		}
		var fecha_hoy=anio.toString()+''+mes_ed.toString()+''+dia_ed.toString()
		var hora=utils.stringToNumber(fecha_actual.getHours().toString())
		var min =utils.stringToNumber(fecha_actual.getMinutes().toString())
		var min_ed=''
	    var hora_ed=''
	    if(hora < 10){
	    	hora_ed='0'+hora
		}else{
			hora_ed=hora
		}	    
		if (min < 10){
			min_ed='0'+min
		}else{
			min_ed=min
		}
		var seg =utils.stringToNumber(fecha_actual.getSeconds().toString())
		var seg_ed=''
		if (seg < 10){
			seg_ed='0'+seg
		}else{
			seg_ed=seg
		}
		var hora_hoy=hora_ed+''+min_ed+''+seg_ed
		globals.vFechaCarga=fecha_hoy
		globals.vHoraCarga=hora_hoy
		globals.vHoraCargaStr=hora_hoy
		//////
		///*
		vhiscli_to_tbc_cirugint.newRecord()
		globals.InicializarDatosDeRelacion(vhiscli_to_tbc_cirugint,"asistencial","tbc_cirugint")
		vhiscli_to_tbc_cirugint.cirifechacarga = globals.vFechaCarga
		vhiscli_to_tbc_cirugint.cirihoracarga = globals.vHoraCarga
		vhiscli_to_tbc_cirugint.cirifechacarga1 = globals.vFechaCarga
		vhiscli_to_tbc_cirugint.cirihoracarga1 = globals.vHoraCarga
		vhiscli_to_tbc_cirugint.cirihistcl=globals.vHiscli
		vhiscli_to_tbc_cirugint.ciriprotocolo=globals.vNroProtocolo
		vhiscli_to_tbc_cirugint.ciricodnome=0
		vhiscli_to_tbc_cirugint.ciritiponome=0
		vhiscli_to_tbc_cirugint.ciriinterven=globals.vInterven0
		vhiscli_to_tbc_cirugint.cirianestesia=globals.vAnesChek
		vhiscli_to_tbc_cirugint.ciriieciru=globals.vtipo_cirujano_ie
		vhiscli_to_tbc_cirugint.cirilegciru=globals.vciri_legciru
		vhiscli_to_tbc_cirugint.cirilegpartero=globals.vciri_legpartero
		vhiscli_to_tbc_cirugint.cirilegneonato=globals.vciri_legneonato
		vhiscli_to_tbc_cirugint.cirinroquirofa=globals.vQuirofano
		//vhiscli_to_tbc_cirugint.cirifechainicio=globals.vFechaInicio.getFullYear()+''+globals.vFechaInicio.getMonth()+''+globals.vFechaInicio.getDate()
		vhiscli_to_tbc_cirugint.cirifechafinal=0
		vhiscli_to_tbc_cirugint.ciripinzasinicio=globals.vPinzasInicio
		if(globals.vEsHemodinamia=="Si"){
			vhiscli_to_tbc_cirugint.ciritipointerven=2
		}else{
				vhiscli_to_tbc_cirugint.ciritipointerven=0
		}
		var anio2 = globals.vFechaInicio.getFullYear()
		var mes2 = globals.vFechaInicio.getMonth()+1
		var dia2 = globals.vFechaInicio.getDate()
		var hora2 = globals.vFechaInicio.getHours()
		var minutos2 = globals.vFechaInicio.getMinutes()
		var mes_ed2
		var dia_ed2
		var hora_ed2
		var minutos_ed2
		if(mes2 < 10){
			mes_ed2='0'+mes2
		}else{
			mes_ed2 = mes2
		}
		if(dia2 < 10){
			dia_ed2='0'+dia2
		}else{
			dia_ed2=dia2
		}
		if (hora2 < 10){
			hora_ed2='0'+hora2
		}else{
			hora_ed2=hora2
		}
		if(minutos2 < 10){
			minutos_ed2='0'+minutos2
		}else{
			minutos_ed2=minutos2
		}
		//vhiscli_to_tbc_cirugint.cirifechainicio=anio2+''+mes_ed2+''+dia_ed2
		vhiscli_to_tbc_cirugint.cirifechainicio=fecha_hoy
		//vhiscli_to_tbc_cirugint.cirihorainicio=hora_ed2+''+minutos_ed2
		vhiscli_to_tbc_cirugint.cirihorainicio=hora_ed+''+min_ed
		
		vhiscli_to_tbc_cirugint.cirifiller=' '
		/*
		application.output(vhiscli_to_tbc_cirugint.cirihistcl)
		application.output(vhiscli_to_tbc_cirugint.cirifechacarga)
		application.output(vhiscli_to_tbc_cirugint.cirihoracarga)
		application.output(vhiscli_to_tbc_cirugint.cirifechacarga1)
		application.output(vhiscli_to_tbc_cirugint.cirihoracarga1)
		application.output(vhiscli_to_tbc_cirugint.cirianestesia)
		application.output(vhiscli_to_tbc_cirugint.ciricantint)
		application.output(vhiscli_to_tbc_cirugint.ciricodnome)
		application.output(vhiscli_to_tbc_cirugint.ciriconquerasura)
		application.output(vhiscli_to_tbc_cirugint.ciriconsenti)
		application.output(vhiscli_to_tbc_cirugint.ciriestado)
		application.output(vhiscli_to_tbc_cirugint.cirifechabanio)
		application.output(vhiscli_to_tbc_cirugint.cirifechafinal)
		application.output(vhiscli_to_tbc_cirugint.cirifechainicio)
		application.output(vhiscli_to_tbc_cirugint.cirifecharasura)
		application.output(vhiscli_to_tbc_cirugint.cirifiller)
		application.output(vhiscli_to_tbc_cirugint.cirigasasfinal)
		application.output(vhiscli_to_tbc_cirugint.cirihorabanio)
		application.output(vhiscli_to_tbc_cirugint.cirihorafinal)
		application.output(vhiscli_to_tbc_cirugint.cirihorainicio)
		application.output(vhiscli_to_tbc_cirugint.cirihorarasura)
		application.output(vhiscli_to_tbc_cirugint.cirihorasint)
		application.output(vhiscli_to_tbc_cirugint.ciriieciru)
		application.output(vhiscli_to_tbc_cirugint.ciriieconsenti)
		application.output(vhiscli_to_tbc_cirugint.ciriieneonato)
		application.output(vhiscli_to_tbc_cirugint.ciriiepartero)
		application.output(vhiscli_to_tbc_cirugint.ciriintensi)
		application.output(vhiscli_to_tbc_cirugint.ciriinterven)
		application.output(vhiscli_to_tbc_cirugint.cirilegatecnico)
		application.output(vhiscli_to_tbc_cirugint.cirilegciru)
		application.output(vhiscli_to_tbc_cirugint.cirilegconsenti)
		application.output(vhiscli_to_tbc_cirugint.cirileghemote)
		application.output(vhiscli_to_tbc_cirugint.cirilegmonito)
		application.output(vhiscli_to_tbc_cirugint.cirilegneonato)
		application.output(vhiscli_to_tbc_cirugint.cirilegpartero)
		application.output(vhiscli_to_tbc_cirugint.cirilegperfus)
		application.output(vhiscli_to_tbc_cirugint.cirimarcaprot)
		application.output(vhiscli_to_tbc_cirugint.cirinroquirofa)
		application.output(vhiscli_to_tbc_cirugint.cirinrosolpatol)
		application.output(vhiscli_to_tbc_cirugint.ciriobsttipo)
		application.output(vhiscli_to_tbc_cirugint.ciriobstgesta)
		application.output(vhiscli_to_tbc_cirugint.ciriparto)
		application.output(vhiscli_to_tbc_cirugint.ciripatologia)
		application.output(vhiscli_to_tbc_cirugint.ciripinzasfinal)
		application.output(vhiscli_to_tbc_cirugint.ciripinzasinicio)
		application.output(vhiscli_to_tbc_cirugint.ciriprotocolo)
		application.output(vhiscli_to_tbc_cirugint.ciriresponde)
		application.output(vhiscli_to_tbc_cirugint.ciriserieprot)
		application.output(vhiscli_to_tbc_cirugint.ciritipointerven)
		application.output(vhiscli_to_tbc_cirugint.ciritiponome)
		application.output(vhiscli_to_tbc_cirugint.ciritipotecnico)
		application.output(vhiscli_to_tbc_cirugint.ciriusoo2)
		*/
		try {
		
			databaseManager.saveData(vhiscli_to_tbc_cirugint.getRecord(1))
			
		}catch (msg){
			(plugins.dialogs.showInfoDialog("Error al grabar Cirugint",msg.toString(),"ok"))
			//	application.output(msg.rhinoException.getMessage())
		}
		var error1=''
		var error2=''
		var array = databaseManager.getFailedRecords(vhiscli_to_tbc_cirugint)
		for (var i = 0; i < array.length; i++) {
			var record = array[i];
			var jstable = databaseManager.getTable(record);
			var tableSQLName = jstable.getSQLName();
			error1='Error de Grabación en Tabla:' + tableSQLName + ' en server:' + jstable.getServerName() + ' falló la grabación. Avise urgente a Sistemas, por favor!'
			error2='Error en grabación '+record.exception;
			if (record.exception.getErrorCode() == ServoyException.RECORD_VALIDATION_FAILED) {
		// exception thrown in pre-insert/update/delete event method
				var thrown = record.exception.getValue()
				plugins.dialogs.showErrorDialog("Error de grabación","Record validation failed: " + thrown)
			}
		}
		if(error1!=''){
			plugins.dialogs.showErrorDialog("Error en grabacion de Texto",error1,"Ok")
			plugins.dialogs.showErrorDialog("Error en grabacion de Texto",error2,"Ok")
			plugins.dialogs.showInfoDialog("Reintentar","Reintente grabar!!")
		}
		
		//*/
		
		//GrabaConRuncobol()
		
		//application.sleep(200)
		//databaseManager.refreshRecordFromDatabase(vhiscli_to_tbc_cirugint,-1)
		//scopes.globals.vHiscli=vhiscli_to_tbc_cirugint.cirihistcl
		vhiscli_to_tbc_cirugint.loadAllRecords()
		var query = "select cirianestesia from tbc_cirugint where cirihistcl = ? and cirifechacarga = ? and cirihoracarga = ? and ciritiponome = 0 and ciricodnome = 0"
		var args = new Array()
		args[0]=globals.vHiscli
		args[1]=globals.vFechaCarga
		args[2]=globals.vHoraCarga
		var dataset = databaseManager.getDataSetByQuery("asistencial",query,args,-1)
		//plugins.dialogs.showInfoDialog("dataset.getMaxRowIndex()",dataset.getMaxRowIndex())
		if(dataset.getMaxRowIndex()>0){
				//plugins.dialogs.showInfoDialog("cirianestesia",dataset.getValue(1,1))
				if(dataset.getValue(1,1)==0){
					forms.form116_dtl.elements.tab_extension.setTabEnabledAt(6,false)
				}else{
					forms.form116_dtl.elements.tab_extension.setTabEnabledAt(6,true)
				}
		}else{
			plugins.dialogs.showInfoDialog("No dataset","No se puso encontrar el dataset")
		}
		//globals.vFechaCarga = vhiscli_to_tbc_cirugint.cirifechacarga
		//globals.vHoraCarga = vhiscli_to_tbc_cirugint.cirihoracarga
		forms.form116_dtl.elements.alta_protocolo.visible=false
		try{
			//vs2_to_tbc_seguqui_new.find()
			//vs2_to_tbc_seguqui_new.search()
			vs2_to_tbc_seguqui_new.loadAllRecords()
			vs2_to_tbc_seguqui_new.segprotocolo=globals.vNroProtocolo
			databaseManager.saveData(vs2_to_tbc_seguqui_new.getRecord(1))
		}catch (msg){
			plugins.dialogs.showInfoDialog("Prueba de error3",msg.toString(),"ok")
		}
		//databaseManager.refreshRecordFromDatabase(vs2_to_tbc_seguqui_new,-1)
		
		if(vhiscli_unico_to_tbc_admision_scroll.adm_tipoing==2){	
			if(gbl_hiscli_to_tbc_hcicir_new.getSize()>0){
				var win2 = application.createWindow("hcicir",JSWindow.MODAL_DIALOG)
				win2.title = "Historias Clinicas de Ingreso a Cirugía Sin Protocolo Asignado";
				win2.setSize(520,300)
				win2.resizable=false
				win2.show(forms.frm_tab_hcicir)
			}
		}
		
		forms.form116_dtl.elements.tab_extension.enabled=true
		//forms.form116_dtl.elements.graba_protocolo.visible=true
		//foundset.loadAllRecords()
	}else{
		var $datos_faltantes=''
		if(globals.vInterven0==0||globals.vInterven0==null){
			$datos_faltantes+="Falta Código de Intervención"+'\n'
		}
		if(globals.vEsHemodinamia==null){
			$datos_faltantes+="Falta Indicar si pertenece o pertenece a Hemodinamia"+'\n'
		}
		if(globals.vciri_legciru==0&&globals.vciri_legneonato==0&&globals.vciri_legpartero==0){
			$datos_faltantes+="Falta Ingresar Código del Cirujano"+'\n'
		}
		if(globals.vQuirofano==0){
			$datos_faltantes+="Falta Indicar el Quirófano"+'\n'
		}
		
		if(vciri_legciru_to_tbc_medicos_personal.getSize()<1){
			$datos_faltantes+="Código de Cirujano Inexistente"+'\n'
		}
		if(vinterven0_to_tbc_interven.getSize()<1){
			$datos_faltantes+="Código de Intervención Inexistente"+'\n'
		}
		
		plugins.dialogs.showInfoDialog("Atención","Hay datos incompletos, ingreselos por favor!"+'\n'+$datos_faltantes)
	}

}

/**
 * // TODO generated, please specify type and doc for the params
 * @param {String} form
 *
 * @properties={typeid:24,uuid:"3653C2D6-FC6E-4F9A-9A12-CD8CF754E11D"}
 */
function ConvierteCheksaGrabarSN(form) {
	for (var i = 0; i < forms[form].elements.allnames.length; i++) {
		var name = forms[form].elements.allnames[i]; // nombre de el elemento
		var elem = forms[form].elements[name]; // propiedades del elemento
		
		if (elem.getElementType() == 'CHECK') {
			switch (forms[form].foundset[name]) {
			case "1":forms[form].foundset[name] = 'S';break;
			case "0":forms[form].foundset[name] = 'N';break;
			default:forms[form].foundset[name] = ' ';break;
			/**
			switch (vhiscli_unico_to_tbc_admision_scroll.tbc_admision_scroll_to_tbc_hcicir_new[name]) {
			case "1":vhiscli_unico_to_tbc_admision_scroll.tbc_admision_scroll_to_tbc_hcicir_new[name] = 'S';break;
			case "0":vhiscli_unico_to_tbc_admision_scroll.tbc_admision_scroll_to_tbc_hcicir_new[name] = 'N';break;
			default:vhiscli_unico_to_tbc_admision_scroll.tbc_admision_scroll_to_tbc_hcicir_new[name] = ' ';break;
			*/
			}
		}
		
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"0D547452-15B1-45B5-A36D-35473F947133"}
 */
function onAction_Interven0(event) {
	var win = application.createWindow("c",JSWindow.MODAL_DIALOG)
	win.title = "Búsqueda de Código de Intervención";
	win.setSize(600,600)
	win.show(forms.frm_busqueda_interven_copy)
	globals.vInterven0=globals.vInterven
	if (globals.vInterven0!=161&&globals.vInterven0!=162&&globals.vInterven0!=878){
		forms.form116_dtl.elements.tab_extension.setTabEnabledAt(7,false)
	}else{
		forms.form116_dtl.elements.tab_extension.setTabEnabledAt(7,true)
	}
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"BAE29B56-FADE-4972-A207-2E2DF4DDE863"}
 */
function onShow_form116(firstShow, event) {
		//Deshabilito solapa Estudios
		forms.form116_dtl.elements.tab_extension.setTabEnabledAt(4,false)
		//Deshabilito ó Habilito solapa de Partos
		if (globals.vInterven0!=161&&globals.vInterven0!=162&&globals.vInterven0!=878){
			forms.form116_dtl.elements.tab_extension.setTabEnabledAt(7,false)
		}else{
			forms.form116_dtl.elements.tab_extension.setTabEnabledAt(7,true)
		}
		if(vhiscli_unico_to_tbc_admision_scroll.adm_tipoing==2){
			forms.form116_dtl.elements.tab_extension.setTabEnabledAt(9,true)
		}else{
			forms.form116_dtl.elements.tab_extension.setTabEnabledAt(9,false)
		}
		
		if(vhiscli_to_tbc_cirugint.cirianestesia==0){
			forms.form116_dtl.elements.tab_extension.setTabEnabledAt(6,false)
		}else{
			forms.form116_dtl.elements.tab_extension.setTabEnabledAt(6,true)
		}
		
		forms.form116_dtl.elements.tab_extension.tabIndex=1
		//forms.form116_dtl.elements.EsHemo.requestFocus()
		forms.form116_dtl.controller.focusFirstField()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"F9D1F530-0792-4E33-A419-719BE44BB3F8"}
 */
function onAction_vInterven0(event) {
	globals.vInterven=globals.vInterven0
	if(vinterven0_to_tbc_interven.getSize()>0){
		if (globals.vInterven0!=161&&globals.vInterven0!=162&&globals.vInterven0!=878){
			forms.form116_dtl.elements.tab_extension.setTabEnabledAt(7,false)
		}else{
			forms.form116_dtl.elements.tab_extension.setTabEnabledAt(7,true)
		}	
		elements.ciri_legciru_code.requestFocus()
	}else{
		elements.ciri_interven_code.requestFocus()
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"F0498894-C86D-4F94-99E0-4C927ACB5041"}
 */
function onAction_busco_Cirujano(event) {
	var win = application.createWindow("c",JSWindow.MODAL_DIALOG)
	win.title = "Búsqueda de Código de Cirujano";
	win.setSize(850,550)
	//win.show(forms.frm_busqueda_medicos_personal_copy)
	globals.vTipoMedico=1
	win.show(forms.frm_busqueda_medicos_personal)
	globals.vciri_legciru=globals.vCodigoMedico
	if(vciri_legciru_to_tbc_medicos_personal.getSize()>0){
			buscaProtocoloAbierto(globals.vciri_legciru)
			globals.vtipo_cirujano_ie=vciri_legciru_to_tbc_medicos_personal.medpertipoie
			globals.vtipo_ciru_ie=globals.vtipo_cirujano_ie
	}
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"3194A052-0EF5-4208-8B21-49BB75822FAB"}
 */
function onAction_volver_forms116_dtl(event) {
	try{
	if(!Controlo_Ctrol_Protocolo()){
		return
	}
	globals.DeslocHcir()
	//history.back()
	application.showForm("frm_menu_principal")
	}catch (msg){
		plugins.dialogs.showErrorDialog("Error al Salir",msg.message)
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"3C142EDD-49D1-4207-AD3E-AA92395F1935"}
 */
function onAction_busco_Partero(event) {
	var win = application.createWindow("c",JSWindow.MODAL_DIALOG)
	win.title = "Búsqueda de Código de Partero";
	win.setSize(850,550)
	//win.show(forms.frm_busqueda_medicos_personal_copy)
	win.show(forms.frm_busqueda_medicos_personal)
	globals.vciri_legpartero=globals.vCodigoMedico
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"D34DA9FF-2B1E-4B07-AEDE-00C8BD9AC087"}
 */
function onAction_busco_Neonatologo(event) {
	var win = application.createWindow("c",JSWindow.MODAL_DIALOG)
	win.title = "Búsqueda de Código de Neonatólogo";
	win.setSize(850,550)
	//win.show(forms.frm_busqueda_medicos_personal_copy)
	win.show(forms.frm_busqueda_medicos_personal)
	globals.vciri_legneonato=globals.vCodigoMedico
}

/**
 * Handle changed data.
 *
 * @param oldValue old value
 * @param newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"E3998E32-9A56-48CF-87DA-DF7E939B6F20"}
 */
function onDataChange_vciri_legciru(oldValue, newValue, event) {
	if(globals.vciri_legciru!=null&&globals.vciri_legciru!=''&&globals.vciri_legciru!=0){
		var largo_legajo = globals.vciri_legciru.toString().length - 1
		var digito_verif = globals.vciri_legciru.toString().substr(largo_legajo,1)
		if(largo_legajo>0){
			globals.vciri_legciru = globals.vciri_legciru.toString().substr(0,largo_legajo)
			globals.vtipo_cirujano_ie=vciri_legciru_to_tbc_medicos_personal.medpertipoie
			globals.vtipo_ciru_ie=globals.vtipo_cirujano_ie
		}
		if(vciri_legciru_to_tbc_medicos_personal.getSize()>0){
			if(validoDigitoVerificador(globals.vciri_legciru,digito_verif)){
				if(buscaProtocoloAbierto(globals.vciri_legciru)){
					globals.vtipo_cirujano_ie=vciri_legciru_to_tbc_medicos_personal.medpertipoie
					globals.vtipo_ciru_ie=globals.vtipo_cirujano_ie
					elements.ciri_legpartero_code.requestFocus()
					return true
				}else{
					return false
				}
			}else{
				if(digito_verif==0){
					if(buscaProtocoloAbierto(globals.vciri_legciru)){
						globals.vtipo_cirujano_ie=vciri_legciru_to_tbc_medicos_personal.medpertipoie
						globals.vtipo_ciru_ie=globals.vtipo_cirujano_ie
						elements.ciri_legpartero_code.requestFocus()
						return true
					}else{
						return false
					}
				}else{
					plugins.dialogs.showInfoDialog("Error","El Digito Verificador ingresado no corresponde con el legajo")
					return false
				}
			}
		}else{
			return false
		}
	}else{
		return true
	}
}

/**
 * Handle changed data.
 *
 * @param oldValue old value
 * @param newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"25527BAD-B5EC-47E2-BDA1-199C3B43740F"}
 */
function onDataChange_vciri_legpartero(oldValue, newValue, event) {
	var largo_legajo = globals.vciri_legpartero.toString().length - 1
	var digito_verif = globals.vciri_legpartero.toString().substr(largo_legajo,1)
	globals.vciri_legpartero = globals.vciri_legpartero.toString().substr(0,largo_legajo)
	if(vciri_legpartero_to_tbc_medicos_personal.getSize()>0){
		if(validoDigitoVerificador(globals.vciri_legpartero,digito_verif)){
			elements.ciri_legneonato_code.requestFocus()
			return true
		}else{
			plugins.dialogs.showInfoDialog("Error","El Digito Verificador ingresado no corresponde con el legajo")
			return false
		}
	}else{
		return false
	}
}

/**
 * @param {number} legajo  
 * @param {string} digito
 * 
 * @properties={typeid:24,uuid:"1BF64CBD-2C77-489F-AAF4-311CADEEA794"}
 */
function validoDigitoVerificador(legajo, digito) {
	var aux_dig = new Array(5);
	var lega = 0;
	lega = legajo;
	if(lega<100){
		aux_dig[0] = 0
		aux_dig[1] = 0
		aux_dig[2] = 0
		aux_dig[3] = lega.toString().substr(0,1);
		aux_dig[4] = lega.toString().substr(1,1);
	}else{
		if (lega<1000){
			aux_dig[0] = 0
			aux_dig[1] = 0
			aux_dig[2] = lega.toString().substr(0,1);
			aux_dig[3] = lega.toString().substr(1,1);
			aux_dig[4] = lega.toString().substr(2,1);
		}else{
			if(lega<10000){
				aux_dig[0] = 0
				aux_dig[1] = lega.toString().substr(0,1);
				aux_dig[2] = lega.toString().substr(1,1);
				aux_dig[3] = lega.toString().substr(2,1);
				aux_dig[4] = lega.toString().substr(3,1);
			}else{
				if(lega<100000){
					aux_dig[0] = lega.toString().substr(0,1);
					aux_dig[1] = lega.toString().substr(1,1);
					aux_dig[2] = lega.toString().substr(2,1);
					aux_dig[3] = lega.toString().substr(3,1);
					aux_dig[4] = lega.toString().substr(4,1);
				}
			}
		}
	}
	var verificador = 0;
	verificador = utils.stringToNumber(aux_dig[1]) + utils.stringToNumber(aux_dig[2]) * 3 + utils.stringToNumber(aux_dig[3]) * 9 + utils.stringToNumber(aux_dig[4]) * 7;
	var larg = verificador.toString().length - 1;
	if(digito!=verificador.toString().substr(larg,1)){
		return false
	}else{
		return true
	}
}

/**
 * Handle changed data.
 *
 * @param oldValue old value
 * @param newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"8CDF1CFD-4C65-4EE8-87B4-9CABFA6ABC5D"}
 */
function onDataChange_vciri_legneonato(oldValue, newValue, event) {
	var largo_legajo = globals.vciri_legneonato.toString().length - 1
	var digito_verif = globals.vciri_legneonato.toString().substr(largo_legajo,1)
	globals.vciri_legneonato = globals.vciri_legneonato.toString().substr(0,largo_legajo)
	if(vciri_legneonato_to_tbc_medicos_personal.getSize()>0){
		if(validoDigitoVerificador(globals.vciri_legneonato,digito_verif)){
			elements.ciri_nroquirofa.requestFocus()
			return true
		}else{
			plugins.dialogs.showInfoDialog("Error","El Digito Verificador ingresado no corresponde con el legajo")
			return false
		}
	}else{
		return false
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"579119C8-C2E1-49D7-8CAA-75FA54A7D79E"}
 */
function onAction_ayuda_frm_116(event) {
	globals.textoAyuda='AYUDA-5'
	var win = application.createWindow("p",JSWindow.MODAL_DIALOG)
	win.title = "Ayuda en Protocolo Quirúrgico";
	win.setLocation(810,300)
	win.setSize(500,350)
	win.show(forms.frm_ayuda_gral_Z)
}

/**
 * Handle changed data.
 *
 * @param {Number} oldValue old value
 * @param {Number} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"66448AEE-EEA6-4109-92FC-D5139B826AF0"}
 */
function onDataChange_quirofano(oldValue, newValue, event) {
	globals.vFechaInicio=application.getServerTimeStamp()
	//elements.ciri_fecinicio.requestFocus()
	elements.alta_protocolo.requestFocus()
	return true
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"FC1495C4-0AB0-4FC5-ADCD-966BE499FAC0"}
 */
function onAction_fechaInicio(event) {
	if(globals.vFechaInicio==null){
		globals.vFechaInicio=application.getServerTimeStamp()
		elements.alta_protocolo.requestFocus()
	}else{
		globals.vFechaAhora9=application.getServerTimeStamp()
		if(globals.vFechaInicio>globals.vFechaAhora9){
			globals.vFechaInicio=null
			plugins.dialogs.showErrorDialog("Error en Fecha y Hora Inicio","La fecha y/o la hora de Inicio son mayores a la fecha y hora actual","Ok")
			elements.ciri_fecinicio.requestFocus()
		}else{
			elements.alta_protocolo.requestFocus()
		}
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"2859739F-2132-4953-844F-2C78AA798D04"}
 */
function onAction_ciri_legciru(event) {
	if(vciri_legciru_to_tbc_medicos_personal.getSize()>0){
		buscaProtocoloAbierto(globals.vciri_legciru)
		globals.vtipo_cirujano_ie=vciri_legciru_to_tbc_medicos_personal.medpertipoie
		globals.vtipo_ciru_ie=globals.vtipo_cirujano_ie
	}else{
		plugins.dialogs.showErrorDialog("Error","Código de Cirujano Inexistente")
	}
}

/**
 * Handle changed data.
 *
 * @param {Date} oldValue old value
 * @param {Date} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"12408CF2-35EE-4F31-A4BE-4614408F0F62"}
 */
function onDataChange_vfechaInicio(oldValue, newValue, event) {
	if(globals.vFechaInicio==null){
		globals.vFechaInicio=application.getServerTimeStamp()
		elements.alta_protocolo.requestFocus()
		return true
	}else{
		globals.vFechaAhora9=application.getServerTimeStamp()
		if(globals.vFechaInicio>globals.vFechaAhora9){
			globals.vFechaInicio=null
			plugins.dialogs.showErrorDialog("Error en Fecha y Hora Inicio","La fecha y/o la hora de Inicio son mayores a la fecha y hora actual","Ok")
			return false
		}else{
			elements.alta_protocolo.requestFocus()
			return true
		}
	}
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"3E350E00-CDC7-40DD-B2B0-FD1ABF76EB0E"}
 */
function onAction_next_1(event) {
	elements.ciri_legneonato_code.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"089BA1DD-8560-4747-A42B-6C27E44BA8E8"}
 */
function onAction_next_ciri_nroquirofa(event) {
	elements.ciri_nroquirofa.requestFocus()
}

/**
 * @properties={typeid:24,uuid:"A7A1AE73-E156-4493-BE78-98E77343EE2A"}
 */
function GrabaConRuncobol() {
	var pipo = globals.vHiscli
	var cerox=''
	switch (pipo.toString().length){
	case 7:cerox="000";break;
	case 8:cerox="00";break;
	case 9:cerox="0";break;
	case 10:cerox='';break;
	}
	var vClaveCiru= ""
	vClaveCiru+=cerox	
	vClaveCiru+=globals.vHiscli
	vClaveCiru+=globals.vFechaCarga
	vClaveCiru+=globals.vHoraCargaStr
	vClaveCiru+="00000000"
	var vClaveCiru1=""
	vClaveCiru1+=globals.vNroProtocolo
	vClaveCiru1+=globals.vFechaCarga
	vClaveCiru1+=globals.vHoraCargaStr
		
	var tipo_interven=0
	if(globals.vEsHemodinamia=="Si"){
		tipo_interven=2
	}else{
		tipo_interven=0
	}
	var anio2 = globals.vFechaInicio.getFullYear()
	var mes2 = globals.vFechaInicio.getMonth()+1
	var dia2 = globals.vFechaInicio.getDate()
	var hora2 = globals.vFechaInicio.getHours()
	var minutos2 = globals.vFechaInicio.getMinutes()
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
	var fecha_inicio=''
	var hora_inicio=''
	fecha_inicio=anio2+''+mes_ed2+''+dia_ed2
	hora_inicio=hora_ed2+''+minutos_ed2
	 var url=application.getServerURL()
	 var largo = url.length
	 var puerto=url.substr(largo-5,4)
	 var servidor=0
	 switch (puerto){
			case '8080':servidor=3;break;
			case '9080':servidor=9;break;
	}
	plugins.UserManager.register( "Hypertelia", "q9SA5eCyb085cvATVO8s9onGe3iBzJyCTel8Y7J72BuG599wodOiU5OL26/pkKyv" );
	var vServer = plugins.UserManager.Server();
	vString = vServer.executeCommand("/app/servoy/scripts/shcob4001 "+servidor+" "+"1"+" "+vClaveCiru+","+vClaveCiru1+","+fecha_inicio+","+hora_inicio+","+globals.vciri_legciru+","+globals.vtipo_cirujano_ie+","+globals.vInterven0+","+globals.vAnesChek+","+globals.vciri_legpartero+","+globals.vciri_legneonato+","+globals.vQuirofano+","+globals.vPinzasInicio+","+tipo_interven);
	//vString = vServer.executeCommand("/app/servoy/scripts/sh-pruebacobol1 "+vClaveCiru+" "+vClaveCiru1+" "+fecha_inicio+"|"+hora_inicio+" "+globals.vciri_legciru+"|"+globals.vtipo_ciru_ie+"|"+globals.vInterven0+"|"+globals.vAnesChek+" "+globals.vciri_legpartero+"|"+globals.vciri_legneonato+" "+globals.vQuirofano+" "+globals.vPinzasInicio+" "+tipo_interven);
	//plugins.dialogs.showInfoDialog("vString",vString)
}


/**
 * TODO generated, please specify type and doc for the params
 * @param codigo
 *
 * @properties={typeid:24,uuid:"C70BD359-EEE9-4CE7-935A-026A5C156362"}
 */
function buscaProtocoloAbierto(codigo) {
	var fecha_actual=application.getServerTimeStamp();
	var anio = fecha_actual.getFullYear();
	var mes = fecha_actual.getMonth();
	//var dia = fecha_actual.getDate();
	var mes_ed='';
	//var dia_ed='';
	if(mes<10){
		mes_ed='0'+mes
	}else{
		mes_ed=mes
	}
	var protocolo_abierto='';

	var protocolos_abiertos=new Array();
	var encontro_proto=false;
	var kant_protocolos_abiertos=0;
	var fecha_selec=anio+''+mes_ed+''+'01'
	var sql = "select ciriprotocolo, cirilegciru from tbc_cirugint where CiriFechaCarga>="+fecha_selec+" and CiriEstado=0 and CiriTipoNome=0"
	var dataset = databaseManager.getDataSetByQuery("asistencial",sql,null,-1)
	var kanti = dataset.getMaxRowIndex()
	if(kanti>0){
		protocolos_abiertos[0]=dataset.getValue(1,1)
		for(var i=1;i<=kanti;i++){
			if(dataset.getValue(i,1)!=globals.vNroProtocolo){
				var sql2 = "select ciricodmed_1, ciricodmed_2, ciricodmed_3, ciricodmed_4, ciricodmed_5, ciricodmed_6, ciricodmed_7, ciricodmed_8, ciricodmed_9, ciricodmed_10 from tbc_cirugint_dtl where CiriProtocolo="+dataset.getValue(i,1)+" and CiriTipoNome<>0"
				var dataset2 = databaseManager.getDataSetByQuery("asistencial",sql2,null,-1)
				var kanti2 = dataset2.getMaxRowIndex()
				if(kanti2>0){
					for(var j=1;j<=kanti2;j++){
						for(var k=1;k<=10;k++){
							if(codigo==dataset2.getValue(j,k)){
								kant_protocolos_abiertos++
								for(var s=0;s<protocolos_abiertos.length&&!encontro_proto;s++){
									if(protocolos_abiertos[s]==dataset.getValue(i,1)){
										encontro_proto=true
									}else{
										protocolos_abiertos[s]=dataset.getValue(i,1)
									}
								}
								if(!encontro_proto){
									protocolo_abierto+=dataset.getValue(i,1)+' '
								}else{
									encontro_proto=true
								}
							}
						}
					}
				}
			}	
		}
		if(kant_protocolos_abiertos>0){
			plugins.dialogs.showWarningDialog("Protocolo sin Cerrar","El Profesional con código "+codigo+" tiene el protocolo "+protocolos_abiertos+" sin cerrar","Ok")
			return false
		}else{
			return true
		}
	}else{
		return true
	}
}


/**
 * Handle focus lost event of the element.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"D978F30D-4A07-43DB-85E0-8F46CC30D04D"}
 */
function onFocusLost_legciru(event) {
	if(!buscaProtocoloAbierto(globals.vciri_legciru)){
		elements.ciri_legciru_code.requestFocus()
	}
}



/**
 * @AllowToRunInFind
 *
 * @properties={typeid:24,uuid:"A1E3470D-DB5D-4B2A-A5D7-5F8222430B6B"}
 */
function Controlo_Ctrol_Protocolo() {
	var $retorno=true
	for(var i=1;i<=3;i++){
		globals.vItemTexto=i
		if (vs_to_tbl_protoc_txt.getSize() > 0) {
			if(globals['proto'+i]!=vs_to_tbl_protoc_txt.texto){
				switch (i){
				case 1:plugins.dialogs.showErrorDialog("Diagnóstico Pre-Operatorio","Falta Grabar última modificación en Diagnóstico Pre-operatorio");break;
				case 2:plugins.dialogs.showErrorDialog("Diagnóstico Post-Operatorio","Falta Grabar última modificación en Diagnóstico Post-operatorio");break;
				case 3:plugins.dialogs.showErrorDialog("Operación Efectuada","Falta Grabar última modificación en Operación Efectuada y Descripción");break;
				}
				$retorno=false
				
			}
		}else{
			if(globals['proto'+i]!=null&&globals['proto'+i]!=""){
				switch (i){
				case 1:plugins.dialogs.showErrorDialog("Diagnóstico Pre-Operatorio","Falta Grabar última modificación en Diagnóstico Pre-operatorio");break;
				case 2:plugins.dialogs.showErrorDialog("Diagnóstico Post-Operatorio","Falta Grabar última modificación en Diagnóstico Post-operatorio");break;
				case 3:plugins.dialogs.showErrorDialog("Operación Efectuada","Falta Grabar última modificación en Operación Efectuada y Descripción");break;
				}
				$retorno=false
				
			}
		}
	}
	return $retorno
}

/**
 * @properties={typeid:24,uuid:"763AD671-247F-4748-9610-236CDBE30A0E"}
 */
function RegrabaCirugint(){
	try{
		vhiscli_to_tbc_cirugint.cirianestesia=1
		databaseManager.saveData(vhiscli_to_tbc_cirugint.getRecord(1))
		var error3 = ''
		var error4 = ''
		var array1 = databaseManager.getFailedRecords(vhiscli_to_tbc_cirugint)
		for (var j = 0; j < array1.length; j++) {
			var record1 = array1[j];
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
			plugins.dialogs.showErrorDialog("Error en grabacion",error3,"Ok")
			plugins.dialogs.showErrorDialog("Error en grabacion",error4,"Ok")
		}
		
	}catch (msg){
		(plugins.dialogs.showInfoDialog("Prueba de error",msg.toString(),"ok"))
	}
}