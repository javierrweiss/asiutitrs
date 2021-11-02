/**
 * @properties={typeid:35,uuid:"10949CF6-A121-46E6-8BFC-F2E69C8268EC",variableType:-4}
 */
var fRecordIndex = null
/**
 * @properties={typeid:35,uuid:"C67FF59A-3B93-4912-BFC3-D52CE427DCE0",variableType:-4}
 */
var fDoubleClickTime = null
/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"9C319BAE-AF6F-4079-A07D-9BC4BDDE265E"}
 */
function onShow_limpia(firstShow, event) {
	foundset.clear()
	controller.focusFirstField() 
}

/**
 * @properties={typeid:24,uuid:"CD5B841D-493F-4B48-A6A3-1CD2A3FA90FC"}
 * @AllowToRunInFind
 */
function filtra() {
	foundset.clear()

	//globals.vLega = 9283
	borrar_aux()
//ojo
	application.updateUI()
	globals.gbl_fecha_desde_cbl = null
	globals.gbl_fecha_hasta_cbl = null
	
	var aArgs = new Array();
	var SQL = "Select tbc_cirugint.CiriFechaCarga, tbc_cirugint.CiriHoraCarga, tbc_cirugint.CiriHistCl, tbc_admision_scroll.Adm_ApelNom, tbc_cirugint.CiriFechaInicio, " 
	SQL+= "tbc_cirugint.CiriHoraInicio, tbc_cirugint.CiriFechaFinal, tbc_cirugint.CiriHoraFinal, tbc_cirugint.CiriProtocolo, "
	SQL+= "tbc_cirugint.CiriLegCiru, tbc_medicos_personal.MedPerApeynom, tbc_admision_scroll.Adm_ObrSoc_7, tbc_OBRAS.Obr_razonSoc, tbc_admision_scroll.Adm_PlanObr, "
	SQL+= "tbc_cirugint_dtl.CiriStatus, tbc_cirugint_dtl.CiriTipoNome, tbc_cirugint_dtl.CiriCodNome, tbc_nomencla.Nome_Descr, "
	SQL+= "CiriTipMed_1, CiriCodMed_1, CiriPorcen_1, CiriTipMed_2, CiriCodMed_2, CiriPorcen_2, "
	SQL+= "CiriTipMed_3, CiriCodMed_3, CiriPorcen_3, CiriTipMed_4, CiriCodMed_4, CiriPorcen_4, "
	SQL+= "CiriTipMed_5, CiriCodMed_5, CiriPorcen_5, CiriTipMed_6, CiriCodMed_6, CiriPorcen_6, "
	SQL+= "CiriTipMed_7, CiriCodMed_7, CiriPorcen_7, CiriTipMed_8, CiriCodMed_8, CiriPorcen_8, "
	SQL+= "CiriTipMed_9, CiriCodMed_9, CiriPorcen_9, CiriTipMed_10, CiriCodMed_10, CiriPorcen_10, CirilegPArtero, CirilegNeonato, "
	SQL+= "if (CiriTipMed_1 = 0 , Med_1b.Per_ApelNom, Med_1.MedPerApeynom) Med_1_Nombre, "
	SQL+= "if (CiriTipMed_2 = 0 , Med_2b.Per_ApelNom, Med_2.MedPerApeynom) Med_2_Nombre, "
	SQL+= "if (CiriTipMed_3 = 0 , Med_3b.Per_ApelNom, Med_3.MedPerApeynom) Med_3_Nombre, "
	SQL+= "if (CiriTipMed_4 = 0 , Med_4b.Per_ApelNom, Med_4.MedPerApeynom) Med_4_Nombre, "
	SQL+= "if (CiriTipMed_5 = 0 , Med_5b.Per_ApelNom, Med_5.MedPerApeynom) Med_5_Nombre, "
	SQL+= "if (CiriTipMed_6 = 0 , Med_6b.Per_ApelNom, Med_6.MedPerApeynom) Med_6_Nombre, "
	SQL+= "if (CiriTipMed_7 = 0 , Med_7b.Per_ApelNom, Med_7.MedPerApeynom) Med_7_Nombre, "
	SQL+= "if (CiriTipMed_8 = 0 , Med_8b.Per_ApelNom, Med_8.MedPerApeynom) Med_8_Nombre, "
	SQL+= "if (CiriTipMed_9 = 0 , Med_9b.Per_ApelNom, Med_9.MedPerApeynom) Med_9_Nombre, "
	SQL+= "if (CiriTipMed_10 = 0 , Med_10b.Per_ApelNom, Med_10.MedPerApeynom) Med_10_Nombre, "
	SQL+= "Med_Partero.MedPerApeynom as Med_Partero_Nombre, Med_Neonato.MedPerApeynom as Med_Neonato_Nombre "
		
	SQL+= "from Asistencial.tbc_cirugint "	
	SQL+= "left join maestros.tbc_medicos_personal on tbc_cirugint.cirilegciru = tbc_medicos_personal.MedPerCod " 
    SQL+= "inner join Asistencial.tbc_admision_scroll on tbc_cirugint.cirihistcl = tbc_admision_scroll.adm_histclin " 
	SQL+= "inner join maestros.tbc_OBRAS on tbc_admision_scroll.Adm_ObrSoc_7 = tbc_OBRAS.Obr_Codigo "
	SQL+= "inner join Asistencial.tbc_CIRUGINT_DTL on (tbc_cirugint.ciriHistCl = tbc_CIRUGINT_DTL.CiriHistCl "
	SQL+= "and tbc_cirugint.ciriTipoNome = tbc_CIRUGINT_DTL.CiriTipoNome "
	SQL+= "and tbc_cirugint.ciriCodNome = tbc_CIRUGINT_DTL.CiriCodNome "
	SQL+= "and tbc_cirugint.CiriFechaCarga  = tbc_CIRUGINT_DTL.CiriFechaCarga "
	SQL+= "and tbc_cirugint.CiriHoraCarga   = tbc_CIRUGINT_DTL.CiriHoraCarga) " 
	SQL+= "left join maestros.tbc_medicos_personal Med_1 on  tbc_CIRUGINT_DTL.CiriCodMed_1 = Med_1.MedPerCod "
	SQL+= "left join maestros.tbc_personal Med_1b on  tbc_CIRUGINT_DTL.CiriCodMed_1 = Med_1b.Per_Legajo "
    SQL+= "left join maestros.tbc_medicos_personal Med_2 on  tbc_CIRUGINT_DTL.CiriCodMed_2 = Med_2.MedPerCod " 
    SQL+= "left join maestros.tbc_personal Med_2b on  tbc_CIRUGINT_DTL.CiriCodMed_2 = Med_2b.Per_Legajo "
    SQL+= "left join maestros.tbc_medicos_personal Med_3 on  tbc_CIRUGINT_DTL.CiriCodMed_3 = Med_3.MedPerCod "
    SQL+= "left join maestros.tbc_personal Med_3b on  tbc_CIRUGINT_DTL.CiriCodMed_3 = Med_3b.Per_Legajo "
    SQL+= "left join maestros.tbc_medicos_personal Med_4 on  tbc_CIRUGINT_DTL.CiriCodMed_4 = Med_4.MedPerCod "
    SQL+= "left join maestros.tbc_personal Med_4b on  tbc_CIRUGINT_DTL.CiriCodMed_4 = Med_4b.Per_Legajo "
    SQL+= "left join maestros.tbc_medicos_personal Med_5 on  tbc_CIRUGINT_DTL.CiriCodMed_5 = Med_5.MedPerCod "
    SQL+= "left join maestros.tbc_personal Med_5b on  tbc_CIRUGINT_DTL.CiriCodMed_5 = Med_5b.Per_Legajo "    	
    SQL+= "left join maestros.tbc_medicos_personal Med_6 on  tbc_CIRUGINT_DTL.CiriCodMed_6 = Med_6.MedPerCod "
    SQL+= "left join maestros.tbc_personal Med_6b on  tbc_CIRUGINT_DTL.CiriCodMed_6 = Med_6b.Per_Legajo "    	
    SQL+= "left join maestros.tbc_medicos_personal Med_7 on  tbc_CIRUGINT_DTL.CiriCodMed_7 = Med_7.MedPerCod "
    SQL+= "left join maestros.tbc_personal Med_7b on  tbc_CIRUGINT_DTL.CiriCodMed_7 = Med_7b.Per_Legajo "
    SQL+= "left join maestros.tbc_medicos_personal Med_8 on  tbc_CIRUGINT_DTL.CiriCodMed_8 = Med_8.MedPerCod "
    SQL+= "left join maestros.tbc_personal Med_8b on  tbc_CIRUGINT_DTL.CiriCodMed_8 = Med_8b.Per_Legajo "
    SQL+= "left join maestros.tbc_medicos_personal Med_9 on  tbc_CIRUGINT_DTL.CiriCodMed_9 = Med_9.MedPerCod "
    SQL+= "left join maestros.tbc_personal Med_9b on  tbc_CIRUGINT_DTL.CiriCodMed_9 = Med_9b.Per_Legajo "
    SQL+= "left join maestros.tbc_medicos_personal Med_10 on  tbc_CIRUGINT_DTL.CiriCodMed_10 = Med_10.MedPerCod "
    SQL+= "left join maestros.tbc_personal Med_10b on  tbc_CIRUGINT_DTL.CiriCodMed_10 = Med_10b.Per_Legajo "    	
    SQL+= "left join maestros.tbc_medicos_personal Med_Partero on  tbc_cirugint.CiriLegPartero = Med_Partero.MedPerCod " 
    SQL+= "left join maestros.tbc_medicos_personal Med_Neonato on  tbc_cirugint.CiriLegNeonato = Med_Neonato.MedPerCod "
	 
	SQL+= "left join maestros.tbc_nomencla on (tbc_cirugint_dtl.ciriTipoNome = tbc_nomencla.Nome_tipo "
	SQL+= "and tbc_cirugint_dtl.ciriCodNome = tbc_nomencla.Nome_Codigo) "
	
	if(globals.gbl_con_fecha_desde !== null){
	   SQL+="where tbc_cirugint.cirifechacarga >= ? "
	   globals.gbl_fecha_desde_cbl=globals.FormateaFecha(globals.gbl_con_fecha_desde,'AAAAMMDD')
	   aArgs.push(globals.gbl_fecha_desde_cbl)
	}
	if(globals.gbl_con_fecha_hasta !== null){
	   SQL+="and tbc_cirugint.cirifechacarga <= ? "
	   globals.gbl_fecha_hasta_cbl=globals.FormateaFecha(globals.gbl_con_fecha_hasta,'AAAAMMDD')
	   aArgs.push(globals.gbl_fecha_hasta_cbl)
	}
	   
	if(globals.gbl_cobertura !== 0){
	   SQL+="and adm_obrsoc_7=? "
	   aArgs.push(globals.gbl_cobertura)
	}
	if(globals.gbl_profesional !== 0){
	   SQL+= "and (tbc_cirugint.CiriTipoNome = 0 and tbc_cirugint.CiriLegCiru = ? or tbc_cirugint.CiriTipoNome <> 0 and tbc_CIRUGINT_DTL.CiriCodMed_1 = ?) " 
	   aArgs.push(globals.gbl_profesional)
	   aArgs.push(globals.gbl_profesional)
	}
	SQL+= "and (tbc_CIRUGINT_DTL.Ciristatus < 9 or tbc_CIRUGINT_DTL.Ciristatus is null)"
	SQL+= " order by tbc_cirugint.CiriFechaCarga desc, tbc_cirugint.CiriProtocolo desc"		  	   
	var _ds = databaseManager.getDataSetByQuery("asistencial", SQL, aArgs, -1);
	
	if (_ds.getMaxRowIndex() == 0){
		 globals.showWarningDialog('No hay datos que mostrar', null, 'Ok',null, null, null);
	}else{
//Barra de proceso
		forms.msg_bar_progress.elements.bean_progress.minimum = 1
		forms.msg_bar_progress.elements.bean_progress.maximum = _ds.getMaxRowIndex()	
		for (var i= 1; i <= _ds.getMaxRowIndex(); i++){
			
			forms.msg_bar_progress.elements.bean_progress.value = i
			application.updateUI()

            if (_ds.getValue(i,16) == 0 & _ds.getValue(i,17) == 0){
			   foundset.newRecord()
			   aux_tipo_nome   = _ds.getValue(i,16)
			   aux_cod_nome    = _ds.getValue(i,17)
			   aux_nome_nombre = _ds.getValue(i,18)
			   aux_histcl      = _ds.getValue(i,3)
			   var hiscli = aux_histcl.toString();

     		   switch (hiscli.length){
     			  case 2: hiscli = hiscli.substr(0,1) + '/' + hiscli.substr(1,1);break;
     			  case 3: hiscli = hiscli.substr(0,2) + '/' + hiscli.substr(2,1);break;
     			  case 4: hiscli = hiscli.substr(0,3) + '/' + hiscli.substr(3,1);break;
     			  case 5: hiscli = hiscli.substr(0,4) + '/' + hiscli.substr(4,1);break;
     			  case 6: hiscli = hiscli.substr(0,5) + '/' + hiscli.substr(5,1);break;
     			  case 7: hiscli = hiscli.substr(0,6) + '/' + hiscli.substr(6,1);break;
     			  case 8: hiscli = hiscli.substr(0,7) + '/' + hiscli.substr(7,1);break;
     		   }
     		   aux_histcl_alf =  hiscli
     		   aux_fecha_carga = globals.IntegerToDate(_ds.getValue(i,1))
			   aux_fechainicio = globals.IntegerToDate(_ds.getValue(i,5))
			   aux_fechafinal  = globals.IntegerToDate(_ds.getValue(i,7))
			   aux_hora_carga  = _ds.getValue(i,2) 
			   var hora = aux_hora_carga.toString();
			   switch (hora.length){
				  case 3: hora = '00:0' + hora.substr(0,1); break;
				  case 4: hora = '00:' + hora.substr(0,1) + hora.substr(1,1) ; break;
				  case 5: hora = '0' + hora.substr(0,1) + ':' + hora.substr(1,1) + hora.substr(2,1) ; break;
				  case 6: hora = hora.substr(0,1) + hora.substr(1,1) + ':' + hora.substr(2,1)+hora.substr(3,1) ; break;
			   }
			   aux_hora_carga = hora
			
			   aux_horainicio  = _ds.getValue(i,6)
			   hora = aux_horainicio.toString();
			   switch (hora.length){
				  case 1: hora = '00:0' + hora.substr(0,1) ; break;
				  case 2: hora = '00:0' + hora.substr(0,1) + hora.substr(1,1) ; break;
				  case 3: hora = '0' + hora.substr(0,1) + ':' + hora.substr(1,1)+hora.substr(2,1) ; break;
				  case 4: hora = hora.substr(0,1) + hora.substr(1,1) + ':' + hora.substr(2,1)+hora.substr(3,1) ; break;
			   }
			   aux_horainicio = hora
			
			   aux_horafinal   = _ds.getValue(i,8)
			   hora = aux_horafinal.toString();
			   switch (hora.length){
				  case 1: hora = '00:0' + hora.substr(0,1) ; break;
				  case 2: hora = '00:0' + hora.substr(0,1) + hora.substr(1,1) ; break;
				  case 3: hora = '0' + hora.substr(0,1) + ':' + hora.substr(1,1)+hora.substr(2,1) ; break;
				  case 4: hora = hora.substr(0,1) + hora.substr(1,1) + ':' + hora.substr(2,1)+hora.substr(3,1) ; break;
			   }
			   aux_horafinal = hora
			
			   aux_ip                 = application.getIPAddress()
			   aux_operador           = globals.vLega 
			   aux_protocolo          = _ds.getValue(i,9)
			   aux_profesional        = _ds.getValue(i,10)
			   aux_profesional_nombre = _ds.getValue(i,11)
			   aux_histcli_nombre     = _ds.getValue(i,4)
			   aux_obras              = _ds.getValue(i,12)
			   aux_obras_nombre       = _ds.getValue(i,13)
			   aux_legpartero         = _ds.getValue(i,49)
			   aux_legneonato         = _ds.getValue(i,50)
			   aux_obras_plan         = _ds.getValue(i,14)
			   forms.frm_cons_protocolo_quir_dt_1.aux_legpartero_a = aux_legpartero
			   forms.frm_cons_protocolo_quir_dt_1.aux_legneonato_a = aux_legneonato
			      
		   }else{
			   forms.frm_cons_protocolo_quir_dt_1.foundset.newRecord()
			   forms.frm_cons_protocolo_quir_dt_1.aux_tipo_nome_a   = _ds.getValue(i,16)
			   forms.frm_cons_protocolo_quir_dt_1.aux_cod_nome_a    = _ds.getValue(i,17)
			   forms.frm_cons_protocolo_quir_dt_1.aux_nome_nombre_a = _ds.getValue(i,18)
			   forms.frm_cons_protocolo_quir_dt_1.aux_histcl_a      = _ds.getValue(i,3)
			   hiscli = forms.frm_cons_protocolo_quir_dt_1.aux_histcl_a.toString();

     		   switch (hiscli.length){
     			  case 2: hiscli = hiscli.substr(0,1) + '/' + hiscli.substr(1,1);break;
     			  case 3: hiscli = hiscli.substr(0,2) + '/' + hiscli.substr(2,1);break;
     			  case 4: hiscli = hiscli.substr(0,3) + '/' + hiscli.substr(3,1);break;
     			  case 5: hiscli = hiscli.substr(0,4) + '/' + hiscli.substr(4,1);break;
     			  case 6: hiscli = hiscli.substr(0,5) + '/' + hiscli.substr(5,1);break;
     			  case 7: hiscli = hiscli.substr(0,6) + '/' + hiscli.substr(6,1);break;
     			  case 8: hiscli = hiscli.substr(0,7) + '/' + hiscli.substr(7,1);break;
     		   }
     		   forms.frm_cons_protocolo_quir_dt_1.aux_histcl_alf_a =  hiscli
     		   forms.frm_cons_protocolo_quir_dt_1.aux_fecha_carga_a = globals.IntegerToDate(_ds.getValue(i,1))
			   forms.frm_cons_protocolo_quir_dt_1.aux_fechainicio_a = globals.IntegerToDate(_ds.getValue(i,5))
			   forms.frm_cons_protocolo_quir_dt_1.aux_fechafinal_a  = globals.IntegerToDate(_ds.getValue(i,7))
			   forms.frm_cons_protocolo_quir_dt_1.aux_hora_carga_a  = _ds.getValue(i,2) 
			   hora = forms.frm_cons_protocolo_quir_dt_1.aux_hora_carga_a.toString();
			   switch (hora.length){
				  case 1: hora = '00:0' + hora.substr(0,1) ; break;
				  case 2: hora = '00:0' + hora.substr(0,1) + hora.substr(1,1) ; break;
				  case 3: hora = '0' + hora.substr(0,1) + ':' + hora.substr(1,1)+hora.substr(2,1) ; break;
				  case 4: hora = hora.substr(0,1) + hora.substr(1,1) + ':' + hora.substr(2,1)+hora.substr(3,1) ; break;
			   }
			   forms.frm_cons_protocolo_quir_dt_1.aux_hora_carga_a = hora
			
			   forms.frm_cons_protocolo_quir_dt_1.aux_horainicio_a  = _ds.getValue(i,6)
			   hora = forms.frm_cons_protocolo_quir_dt_1.aux_horainicio_a.toString();
			   switch (hora.length){
				  case 1: hora = '00:0' + hora.substr(0,1) ; break;
				  case 2: hora = '00:0' + hora.substr(0,1) + hora.substr(1,1) ; break;
				  case 3: hora = '0' + hora.substr(0,1) + ':' + hora.substr(1,1)+hora.substr(2,1) ; break;
				  case 4: hora = hora.substr(0,1) + hora.substr(1,1) + ':' + hora.substr(2,1)+hora.substr(3,1) ; break;
			   }
			   forms.frm_cons_protocolo_quir_dt_1.aux_horainicio_a = hora
			
			   forms.frm_cons_protocolo_quir_dt_1.aux_horafinal_a   = _ds.getValue(i,8)
			   hora = forms.frm_cons_protocolo_quir_dt_1.aux_horafinal_a.toString();
			   switch (hora.length){
				  case 1: hora = '00:0' + hora.substr(0,1) ; break;
				  case 2: hora = '00:0' + hora.substr(0,1) + hora.substr(1,1) ; break;
				  case 3: hora = '0' + hora.substr(0,1) + ':' + hora.substr(1,1)+hora.substr(2,1) ; break;
				  case 4: hora = hora.substr(0,1) + hora.substr(1,1) + ':' + hora.substr(2,1)+hora.substr(3,1) ; break;
			   }
			   forms.frm_cons_protocolo_quir_dt_1.aux_horafinal_a = hora
			
			   forms.frm_cons_protocolo_quir_dt_1.aux_ip_a              = application.getIPAddress()
			   forms.frm_cons_protocolo_quir_dt_1.aux_operador_a        = globals.vLega 
			   forms.frm_cons_protocolo_quir_dt_1.aux_protocolo_a       = _ds.getValue(i,9)
			   forms.frm_cons_protocolo_quir_dt_1.aux_histcli_nombre_a  = _ds.getValue(i,4)
			   forms.frm_cons_protocolo_quir_dt_1.aux_obras_a           = _ds.getValue(i,12)
			   forms.frm_cons_protocolo_quir_dt_1.aux_obras_nombre_a    = _ds.getValue(i,13)
			   forms.frm_cons_protocolo_quir_dt_1.aux_obras_plan_a      = _ds.getValue(i,14)
			   
			   forms.frm_cons_protocolo_quir_dt_1.aux_tip_med_1         = _ds.getValue(i,19)
			   forms.frm_cons_protocolo_quir_dt_1.aux_cod_med_1         = _ds.getValue(i,20)
			   forms.frm_cons_protocolo_quir_dt_1.aux_por_med_1         = _ds.getValue(i,21)
			   forms.frm_cons_protocolo_quir_dt_1.aux_tip_med_2         = _ds.getValue(i,22)
			   forms.frm_cons_protocolo_quir_dt_1.aux_cod_med_2         = _ds.getValue(i,23)
			   forms.frm_cons_protocolo_quir_dt_1.aux_por_med_2         = _ds.getValue(i,24)
			   forms.frm_cons_protocolo_quir_dt_1.aux_tip_med_3         = _ds.getValue(i,25)
			   forms.frm_cons_protocolo_quir_dt_1.aux_cod_med_3         = _ds.getValue(i,26)
			   forms.frm_cons_protocolo_quir_dt_1.aux_por_med_3         = _ds.getValue(i,27)
			   forms.frm_cons_protocolo_quir_dt_1.aux_tip_med_4         = _ds.getValue(i,28)
			   forms.frm_cons_protocolo_quir_dt_1.aux_cod_med_4         = _ds.getValue(i,29)
			   forms.frm_cons_protocolo_quir_dt_1.aux_por_med_4         = _ds.getValue(i,30)
			   forms.frm_cons_protocolo_quir_dt_1.aux_tip_med_5         = _ds.getValue(i,31)
			   forms.frm_cons_protocolo_quir_dt_1.aux_cod_med_5         = _ds.getValue(i,32)
			   forms.frm_cons_protocolo_quir_dt_1.aux_por_med_5         = _ds.getValue(i,33)
			   forms.frm_cons_protocolo_quir_dt_1.aux_tip_med_6         = _ds.getValue(i,34)
			   forms.frm_cons_protocolo_quir_dt_1.aux_cod_med_6         = _ds.getValue(i,35)
			   forms.frm_cons_protocolo_quir_dt_1.aux_por_med_6         = _ds.getValue(i,36)
			   forms.frm_cons_protocolo_quir_dt_1.aux_tip_med_7         = _ds.getValue(i,37)
			   forms.frm_cons_protocolo_quir_dt_1.aux_cod_med_7         = _ds.getValue(i,38)
			   forms.frm_cons_protocolo_quir_dt_1.aux_por_med_7         = _ds.getValue(i,39)
			   forms.frm_cons_protocolo_quir_dt_1.aux_tip_med_8         = _ds.getValue(i,40)
			   forms.frm_cons_protocolo_quir_dt_1.aux_cod_med_8         = _ds.getValue(i,41)
			   forms.frm_cons_protocolo_quir_dt_1.aux_por_med_8         = _ds.getValue(i,42)
			   forms.frm_cons_protocolo_quir_dt_1.aux_tip_med_9         = _ds.getValue(i,43)
			   forms.frm_cons_protocolo_quir_dt_1.aux_cod_med_9         = _ds.getValue(i,44)
			   forms.frm_cons_protocolo_quir_dt_1.aux_por_med_9         = _ds.getValue(i,45)
			   forms.frm_cons_protocolo_quir_dt_1.aux_tip_med_10        = _ds.getValue(i,46)
			   forms.frm_cons_protocolo_quir_dt_1.aux_cod_med_10        = _ds.getValue(i,47)
			   forms.frm_cons_protocolo_quir_dt_1.aux_por_med_10        = _ds.getValue(i,48)
			   
			  
				forms.frm_cons_protocolo_quir_dt_1.aux_med_1_nombre = _ds.getValue(i,51)
				if (forms.frm_cons_protocolo_quir_dt_1.aux_tip_med_1 != 0){
					forms.frm_cons_protocolo_quir_dt_1.aux_med_1_ie = '(Externo)'
				}else{
					forms.frm_cons_protocolo_quir_dt_1.aux_med_1_ie = null			
				} 
			   
				forms.frm_cons_protocolo_quir_dt_1.aux_med_2_nombre = _ds.getValue(i,52)
				if (forms.frm_cons_protocolo_quir_dt_1.aux_tip_med_2 != 0){
					forms.frm_cons_protocolo_quir_dt_1.aux_med_2_ie = '(Externo)'
				}else{
					forms.frm_cons_protocolo_quir_dt_1.aux_med_2_ie = null			
				} 
				
				forms.frm_cons_protocolo_quir_dt_1.aux_med_3_nombre = _ds.getValue(i,53)
				if (forms.frm_cons_protocolo_quir_dt_1.aux_tip_med_3 != 0){
					forms.frm_cons_protocolo_quir_dt_1.aux_med_3_ie = '(Externo)'
				}else{
					forms.frm_cons_protocolo_quir_dt_1.aux_med_3_ie = null			
				} 
				
				forms.frm_cons_protocolo_quir_dt_1.aux_med_4_nombre = _ds.getValue(i,54)
				if (forms.frm_cons_protocolo_quir_dt_1.aux_tip_med_4 != 0){
					forms.frm_cons_protocolo_quir_dt_1.aux_med_4_ie = '(Externo)'
				}else{
					forms.frm_cons_protocolo_quir_dt_1.aux_med_4_ie = null			
				} 
				
				forms.frm_cons_protocolo_quir_dt_1.aux_med_5_nombre = _ds.getValue(i,55)
				if (forms.frm_cons_protocolo_quir_dt_1.aux_tip_med_5 != 0){
					forms.frm_cons_protocolo_quir_dt_1.aux_med_5_ie = '(Externo)'
				}else{
					forms.frm_cons_protocolo_quir_dt_1.aux_med_5_ie = null			
				} 
				
				forms.frm_cons_protocolo_quir_dt_1.aux_med_6_nombre = _ds.getValue(i,56)
				if (forms.frm_cons_protocolo_quir_dt_1.aux_tip_med_6 != 0){
					forms.frm_cons_protocolo_quir_dt_1.aux_med_6_ie = '(Externo)'
				}else{
					forms.frm_cons_protocolo_quir_dt_1.aux_med_6_ie = null			
				} 
				
				forms.frm_cons_protocolo_quir_dt_1.aux_med_7_nombre = _ds.getValue(i,57)
				if (forms.frm_cons_protocolo_quir_dt_1.aux_tip_med_7 != 0){
					forms.frm_cons_protocolo_quir_dt_1.aux_med_7_ie = '(Externo)'
				}else{
					forms.frm_cons_protocolo_quir_dt_1.aux_med_7_ie = null			
				} 
				
				forms.frm_cons_protocolo_quir_dt_1.aux_med_8_nombre = _ds.getValue(i,58)
				if (forms.frm_cons_protocolo_quir_dt_1.aux_tip_med_8 != 0){
					forms.frm_cons_protocolo_quir_dt_1.aux_med_8_ie = '(Externo)'
				}else{
					forms.frm_cons_protocolo_quir_dt_1.aux_med_8_ie = null			
				} 
				
				forms.frm_cons_protocolo_quir_dt_1.aux_med_9_nombre = _ds.getValue(i,59)
				if (forms.frm_cons_protocolo_quir_dt_1.aux_tip_med_9 != 0){
					forms.frm_cons_protocolo_quir_dt_1.aux_med_9_ie = '(Externo)'
				}else{
					forms.frm_cons_protocolo_quir_dt_1.aux_med_9_ie = null			
				} 
				
				forms.frm_cons_protocolo_quir_dt_1.aux_med_10_nombre = _ds.getValue(i,60)
				if (forms.frm_cons_protocolo_quir_dt_1.aux_tip_med_10 != 0){
					forms.frm_cons_protocolo_quir_dt_1.aux_med_10_ie = '(Externo)'
				}else{
					forms.frm_cons_protocolo_quir_dt_1.aux_med_10_ie = null			
				}
				
				forms.frm_cons_protocolo_quir_dt_1.aux_med_partero_nombre = _ds.getValue(i,61)
				forms.frm_cons_protocolo_quir_dt_1.aux_med_neonato_nombre = _ds.getValue(i,62)
		   }
		}
		databaseManager.saveData()
        ///databaseManager.saveData(foundset.getRecord())
		///databaseManager.saveData(forms.frm_cons_protocolo_quir_dt_1.foundset.getRecord())
	}
}

/**
 * 
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"F84ADB95-9F40-47CD-932F-FE02AF348B82"}
 * @AllowToRunInFind
 */
function onAction_muestra_dt1(event) {
	var win = application.createWindow("Muestra_dt_1",JSWindow.MODAL_DIALOG)	
	win.title= 'Protocolos Quirúrgicos'
	win.resizable = false
	globals.gbl_protocolo = aux_protocolo
	globals.gbl_histcli = aux_histcl
	// se pregunta por el número de protocolo por que a partir del 17/08/2016 
	// el protoc_txt se guarda en Postgres
	if(aux_protocolo > 121755){
		forms.frm_cons_protocolo_quir_dt_2.foundset.find()
	    forms.frm_cons_protocolo_quir_dt_2.foundset.aux_fecha_carga_a = aux_fecha_carga
	    forms.frm_cons_protocolo_quir_dt_2.foundset.aux_protocolo_a = aux_protocolo
	    forms.frm_cons_protocolo_quir_dt_2.foundset.search()
	    win.show(forms.frm_cons_protocolo_quir_dt_2)
	}else{
	    forms.frm_cons_protocolo_quir_dt_1.foundset.find()
	    forms.frm_cons_protocolo_quir_dt_1.foundset.aux_fecha_carga_a = aux_fecha_carga
	    forms.frm_cons_protocolo_quir_dt_1.foundset.aux_protocolo_a = aux_protocolo
	    forms.frm_cons_protocolo_quir_dt_1.foundset.search()
	    win.show(forms.frm_cons_protocolo_quir_dt_1)
	}
}

/**
 * @properties={typeid:24,uuid:"35D7CBC4-6D92-4781-BAF9-26DE730CC088"}
 */
function borrar_aux() {
	var done = plugins.rawSQL.executeSQL("bases_auxiliares", "aux_389", "delete from aux_389 where aux_operador = ? and aux_ip = ? ", [globals.vLega,application.getIPAddress()])
	if (done) {
		plugins.rawSQL.flushAllClientsCache("bases_auxiliares", "aux_389")
	} else {
		globals.showWarningDialog('No hay datos para borrar', null, 'Ok',null, null, null);
	}
	
	var done2 = plugins.rawSQL.executeSQL("bases_auxiliares", "aux_389a", "delete from aux_389a where aux_operador_a = ? and aux_ip_a = ? ", [globals.vLega,application.getIPAddress()])
	if (done2) {
		plugins.rawSQL.flushAllClientsCache("bases_auxiliares", "aux_389a")
	} else {
		globals.showWarningDialog('No hay datos para borrar', null, 'Ok',null, null, null);
	}
}
/** 
 * @param event
 *
 * @properties={typeid:24,uuid:"432126CD-91A6-495D-B429-7CF36BE3D2ED"}
 */
function onAction_doble_click(event) {
	if(foundset.getSelectedIndex() == fRecordIndex && (event.getTimestamp() - fDoubleClickTime ) < 500)
	   {	      
		   onAction_muestra_dt1(event)
	   }
	   else
	   {
	      fRecordIndex = foundset.getSelectedIndex();
	      fDoubleClickTime = event.getTimestamp();
	   }
}