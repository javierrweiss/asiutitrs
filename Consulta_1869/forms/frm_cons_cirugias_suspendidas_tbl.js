/**
 * @properties={typeid:35,uuid:"13D2BF9E-6217-47DE-843C-01DD3200F9A8",variableType:-4}
 */
var fRecordIndex = null
/**
 * @properties={typeid:35,uuid:"E1F2F4DB-32D4-4699-B34E-7A87A591FA55",variableType:-4}
 */
var fDoubleClickTime = null
/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"7793801D-0650-4C6E-AE6D-8C9C0402AA6D"}
 */
function onShow_limpia(firstShow, event) {
	foundset.clear()
	controller.focusFirstField()
	
	}

/**
 * @properties={typeid:24,uuid:"25EA28FB-9431-45FA-B318-D286C7801D80"}
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
	var SQL = "select QuirofaNro, QuirofaFec, QuirofaDhs, QuirofaHhs, QuirofaEst, MOT.MotDes, QuirofaAdmi, QuirofaApyno, QuirofaTelpac, " 
	   +"QuirofaObra, OBR.Obr_razonsoc, " 
       +"if (QuirofaTipmed = 'I' , Medb.Per_ApelNom, Med.MedPerApeynom) Med_Nombre, INTER.Itv_Descripcion, QuirofaObs, QuirofaAnes, QuirofaInst, "  
       +"if (QuirofaTipAnest = 'I' , ANESB.Per_ApelNom, ANES.MedPerApeynom) Aneste_Nombre, QuirofaFeccar, "
       +"if (QuirofaTipOper = 0 , OPERB.Per_ApelNom, OPER.MedPerApeynom) Operador_Nombre, "
       +"if (QuirofaTipOperM = 0 , OPERMB.Per_ApelNom, OPERM.MedPerApeynom) Operador_Mod_Nombre, QuirofaHorcar, QuirofaCirudes, QuirofaHiscli, "
       +"if (QuirofaTipmed = 'I' , Medb.Per_EspeMed, Med.MedPerEsp) Profesional_Esp, "
       +"if (QuirofaTipmed = 'I' , ESPEB.Esp_Descrip, ESPE.Esp_Descrip) Profesional_Esp_Nombre, QuirofaObsmot, QuirofaHhs1 "
       +"from tbc_quirofano " 
       +"left join maestros.tbc_motivos MOT on (tbc_quirofano.QuirofaMot = MOT.MotNro) "
       +"left join maestros.tbc_obras OBR on (tbc_quirofano.QuirofaObra = OBR.Obr_Codigo) "
       +"left join maestros.tbc_medicos_personal Med on  tbc_quirofano.QuirofaMed = Med.MedPerCod "
       +"left join maestros.tbc_personal Medb on  tbc_quirofano.QuirofaMed = Medb.Per_Legajo "
       +"left join maestros.tbc_INTERVEN INTER on  tbc_quirofano.QuirofaCiru = INTER.Itv_Codi "
       +"left join maestros.tbc_medicos_personal ANES on  tbc_quirofano.QuirofaLegAnest = ANES.MedPerCod "
       +"left join maestros.tbc_personal ANESB on  tbc_quirofano.QuirofaLegAnest = ANESB.Per_Legajo "
       +"left join maestros.tbc_medicos_personal OPER on  tbc_quirofano.QuirofaLegOper = OPER.MedPerCod "
       +"left join maestros.tbc_personal OPERB on  tbc_quirofano.QuirofaLegOper = OPERB.Per_Legajo "
       +"left join maestros.tbc_medicos_personal OPERM on  tbc_quirofano.QuirofaLegOperM = OPERM.MedPerCod "
       +"left join maestros.tbc_personal OPERMB on  tbc_quirofano.QuirofaLegOperM  = OPERMB.Per_Legajo "
       +"left join maestros.tbc_ESPECIAL ESPE on Med.MedPerEsp = ESPE.Esp_Codi "
       +"left join maestros.tbc_ESPECIAL ESPEB on Medb.Per_EspeMed = ESPEB.Esp_Codi "
      
	if(globals.gbl_con_fecha_desde != null){
		SQL+="where tbc_quirofano.QuirofaFec1 >= "
	    globals.gbl_fecha_desde_cbl=globals.FormateaFecha(globals.gbl_con_fecha_desde,'AAAAMMDD')
	    SQL+= globals.gbl_fecha_desde_cbl + " "
	}
	if(globals.gbl_con_fecha_hasta != null){
	    SQL+="and tbc_quirofano.QuirofaFec1 <= "
	    globals.gbl_fecha_hasta_cbl=globals.FormateaFecha(globals.gbl_con_fecha_hasta,'AAAAMMDD')
	    SQL+= globals.gbl_fecha_hasta_cbl + " "
  	}
	if(globals.gbl_cobertura != 0){
	   SQL+="and QuirofaObra=? "
	   aArgs.push(globals.gbl_cobertura)
	}
	if(globals.gbl_profesional != 0){
	   SQL+= "and (tbc_quirofano.QuirofaMed = ?) " 
	   aArgs.push(globals.gbl_profesional)
	}
	if(globals.gbl_con_motivo_sus != 0){
	   SQL+= "and tbc_quirofano.QuirofaMot = "
	   SQL+= globals.gbl_con_motivo_sus + " "
	}
	
	if(globals.gbl_con_tipo_histcli != 3){
	   SQL+="and QuirofaAdmi=? "
	   aArgs.push(globals.gbl_con_tipo_histcli)
	}
	// Filtra solo los que tenga estado suspendido y dado de baja
	SQL+= "and (tbc_quirofano.QuirofaEst = 1 or tbc_quirofano.QuirofaEst = 9) "
	// Ordena por Motivo, Obra Social, Médico y Especialidad	
	SQL+= " order by MOT.MotDes desc, OBR.Obr_razonsoc desc, Med.MedPerApeynom desc, Medb.Per_Apelnom desc, " 
	SQL+= "ESPE.Esp_Descrip desc, ESPEB.Esp_Descrip desc, tbc_quirofano.QuirofaFec desc, tbc_quirofano.QuirofaNro desc, tbc_quirofano.QuirofaDhs desc"		  	   
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
              foundset.newRecord()
              aux_fecha         = globals.IntegerToDate(_ds.getValue(i,2))
              aux_quirofano_nro = _ds.getValue(i,1) 
		      aux_hora_desde    = _ds.getValue(i,3) 
		      var hora          = aux_hora_desde.toString();
		      switch (hora.length){
		  	      case 1: hora = '00:0' + hora.substr(0,1); break;
		          case 2: hora = '00:' + hora.substr(0,1) + hora.substr(1,1) ; break;
		          case 3: hora = '0' + hora.substr(0,1) + ':' + hora.substr(1,1) + hora.substr(2,1) ; break;
		          case 4: hora = hora.substr(0,1) + hora.substr(1,1) + ':' + hora.substr(2,1)+hora.substr(3,1) ; break;
		      }
		      aux_hora_desde = hora
			   
		      //aux_hora_hasta = _ds.getValue(i,4)
			  aux_hora_hasta = _ds.getValue(i,27)
		      if (aux_hora_hasta == 9999){
		          aux_hora_hasta = 'URG.'
	   	      }else{
			      hora = aux_hora_hasta.toString();
		          switch (hora.length){
		              case 1: hora = '00:0' + hora.substr(0,1); break;
		              case 2: hora = '00:' + hora.substr(0,1) + hora.substr(1,1) ; break;
		              case 3: hora = '0' + hora.substr(0,1) + ':' + hora.substr(1,1) + hora.substr(2,1) ; break;
		              case 4: hora = hora.substr(0,1) + hora.substr(1,1) + ':' + hora.substr(2,1)+hora.substr(3,1) ; break;
		          }
		          aux_hora_hasta = hora
		      }
		      switch (_ds.getValue(i,5)){
		          case 0: aux_quirofano_estado = 'Activo'; break;
		          case 1: aux_quirofano_estado = 'Suspendido'; break;
	     	      case 2: aux_quirofano_estado = 'Activo ya Internado'; break;
		          case 8: aux_quirofano_estado = 'Reg.Ant. al 13/07/06'; break;
		          case 9: aux_quirofano_estado = 'Anulado'; break;
		      }
		      aux_quirofano_motivo_susp = _ds.getValue(i,6)
		      switch (_ds.getValue(i,7)){
		          case 0: aux_histcli_tipo = 'Internado'; break;
		          case 1: aux_histcli_tipo = 'A Internarse'; break;
	   	          case 2: aux_histcli_tipo = 'Ambulatorio'; break;
		          case 3: aux_histcli_tipo = 'Internado'; break;
		      }
		      aux_histcli_nombre     = _ds.getValue(i,8) 
              aux_histcli_telefono   = _ds.getValue(i,9)
     	      aux_histcli_estado     = _ds.getValue(i,3)
     	      aux_obras_nombre       = _ds.getValue(i,11)
		      aux_profesional_nombre = _ds.getValue(i,12)
		      aux_intervencion    = _ds.getValue(i,13)
		      aux_observaciones      = _ds.getValue(i,14)
		      aux_anestesista_nombre = _ds.getValue(i,17)
		      aux_fecha_carga = globals.IntegerToDate(_ds.getValue(i,18))
		      aux_hora_carga  = _ds.getValue(i,21) 
		      hora = aux_hora_carga.toString();
		      switch (hora.length){
		         case 1: hora = '00:0' + hora.substr(0,1); break;
		         case 2: hora = '00:' + hora.substr(0,1) + hora.substr(1,1) ; break;
		         case 3: hora = '0' + hora.substr(0,1) + ':' + hora.substr(1,1) + hora.substr(2,1) ; break;
		         case 4: hora = hora.substr(0,1) + hora.substr(1,1) + ':' + hora.substr(2,1)+hora.substr(3,1) ; break;
		      }
		      aux_hora_carga = hora
			
		      aux_ip                 = application.getIPAddress()
		      aux_operador           = globals.vLega 
		      aux_operador_alta_nombre = _ds.getValue(i,19)
		      aux_operador_modifica_nombre  = _ds.getValue(i,20)  
		      aux_instrumentador = _ds.getValue(i,16)
		      switch (aux_instrumentador){
			     case 'N': aux_instrumentador = 'NO'; break;
			     case 'S': aux_instrumentador = 'SI' ; break;
		      }
		      aux_anes = _ds.getValue(i,15)
		      switch (aux_anes){ 
			     case 'N': aux_anes = 'NO'; break;
			     case 'S': aux_anes = 'SI' ; break;
	  	      } 
		      aux_practica_nombre = _ds.getValue(i,22) 
			  
			  
			  var a_histcli =_ds.getValue(i,23) 
			  var hiscli = a_histcli.toString()
			
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
    		  aux_profesional_espe = _ds.getValue(i,25)
			  aux_observa_suspencion = _ds.getValue(i,26) 
    	}
        databaseManager.saveData()
	}
}

/**
 * 
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"1480E745-DE82-4E81-8517-D660F8A13BE4"}
 * @AllowToRunInFind
 */
function onAction_muestra_dt1(event) {
	var win = application.createWindow("Muestra_dt",JSWindow.MODAL_DIALOG)	
	win.title= 'Turnos a Quirófanos'
	win.resizable = false
	win.show(forms.frm_cons_cirugias_suspendidas_dtl)
}

/**
 * @properties={typeid:24,uuid:"B7CD252B-E0FA-4592-86F1-B638A716A9B9"}
 */
function borrar_aux() {
	var done = plugins.rawSQL.executeSQL("bases_auxiliares", "aux_1869", "delete from aux_1869 where aux_operador = ? and aux_ip = ? ", [globals.vLega,application.getIPAddress()])
	if (done) {
		plugins.rawSQL.flushAllClientsCache("bases_auxiliares", "aux_1869")
	} else {
		globals.showWarningDialog('No hay datos para borrar', null, 'Ok',null, null, null);
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"FF2A63B5-9F5E-4F25-957D-9C221C5569E9"}
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
