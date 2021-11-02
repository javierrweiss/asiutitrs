/**
 * @properties={typeid:35,uuid:"85397877-3E9C-4E6C-86C5-082366A9C943",variableType:-4}
 */
var fRecordIndex = null
/**
 * @properties={typeid:35,uuid:"6162421E-83A7-4EA2-B819-347BD2A2635B",variableType:-4}
 */
var fDoubleClickTime = null
/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"F867205A-568C-403C-A01F-BA099AE2FDC6"}
 */
function onShow_limpia(firstShow, event) {
	foundset.clear()
	controller.focusFirstField()
	
	}

/**
 * @properties={typeid:24,uuid:"1560A01E-DF34-4126-B303-D15C26D2B66A"}
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
       +"if (QuirofaTipOperM = 0 , OPERMB.Per_ApelNom, OPERM.MedPerApeynom) Operador_Mod_Nombre, QuirofaHorcar, QuirofaCirudes "
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
      
	if(globals.gbl_con_fecha_desde != null){
		SQL+="where tbc_quirofano.QuirofaFec >= "
	    globals.gbl_fecha_desde_cbl=globals.FormateaFecha(globals.gbl_con_fecha_desde,'AAAAMMDD')
	    SQL+= globals.gbl_fecha_desde_cbl + " "
	}
	if(globals.gbl_con_fecha_hasta != null){
	    SQL+="and tbc_quirofano.QuirofaFec <= "
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
	if(globals.gbl_con_quirofano_hasta != 99){
	   SQL+= "and tbc_quirofano.QuirofaNro >= "
	   SQL+= globals.gbl_con_quirofano_desde + " "
	   SQL+= " and tbc_quirofano.QuirofaNro <= "
	   SQL+= globals.gbl_con_quirofano_hasta + " "
	}
	
	SQL+= " order by  tbc_quirofano.QuirofaFec desc, tbc_quirofano.QuirofaNro desc, tbc_quirofano.QuirofaDhs desc"		  	   
	var _ds = databaseManager.getDataSetByQuery("asistencial", SQL, aArgs, -1);
	
	if (_ds.getMaxRowIndex() == 0){
		 globals.showWarningDialog('No hay datos que mostrar', null, 'Ok',null, null, null);
	}else{
//Barra de proceso
		forms.msg_bar_progress.elements.bean_progress.minimum = 1
		forms.msg_bar_progress.elements.bean_progress.maximum = _ds.getMaxRowIndex()
		var estado_aux
		var encontro = 'OK'
		var t_tot = 0
		var max = 0
		
		for (var i= 1; i <= _ds.getMaxRowIndex(); i++){
			if(globals.gbl_con_turnos != 0){
				estado_aux = _ds.getValue(i,5)
				encontro = 'NO'
				switch(globals.gbl_con_turnos){
				    case 1: if (estado_aux == 0 ||estado_aux == 2 ||estado_aux == 8){
				    	        encontro = 'OK'}; break
				    case 2: if (estado_aux == 1){
				    	        encontro = 'OK'}; break
				    case 3: if (estado_aux == 9){
				                encontro = 'OK'}; break
			    }
			}
		
		    forms.msg_bar_progress.elements.bean_progress.value = i
		    application.updateUI()
            if (encontro == 'OK'){
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
			   
			    aux_hora_hasta = _ds.getValue(i,4) 
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
				    case 1: aux_histcli_tipo = 'Internado'; break;
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
		// Sumar totales
		        var posi = 0 
	            for (var j= 0; j <= max; j++){
	            	if (globals.gbl_tot_fecha[j] == aux_fecha){
	            		posi = j
				 	    j = 9999
	            	}else{
	            		posi = j
	                }
				}
		        if (j != 10000){
		        	max++
		        	globals.gbl_tot_fecha[posi]= aux_fecha
		        }
				
				t_tot =	utils.stringToNumber(globals.gbl_tot_totales[posi]) + 1 
				globals.gbl_tot_totales[posi]= t_tot
				if (aux_histcli_tipo == 'Ambul'){
					t_tot =	utils.stringToNumber(globals.gbl_tot_ambulatorio[posi]) + 1
					globals.gbl_tot_ambulatorio[posi] = t_tot
				}else{
					t_tot =	utils.stringToNumber(globals.gbl_tot_internado[posi]) + 1
					globals.gbl_tot_internado[posi] = t_tot
				}
				if (aux_hora_hasta == 'URG.'){
					t_tot =	utils.stringToNumber(globals.gbl_tot_urgente[posi]) + 1
					globals.gbl_tot_urgente[posi] = t_tot
				}
            }
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
 * @properties={typeid:24,uuid:"278017FD-A037-4AD0-A747-6FB7DE91F841"}
 * @AllowToRunInFind
 */
function onAction_muestra_dt1(event) {
	var win = application.createWindow("Muestra_dt",JSWindow.MODAL_DIALOG)	
	win.title= 'Turnos a Quirófanos'
	win.resizable = false
	win.show(forms.frm_cons_turnos_quirofano_dtl)
}

/**
 * @properties={typeid:24,uuid:"297F2D85-2AA4-4B14-B1A4-097BA223BC68"}
 */
function borrar_aux() {
	var done = plugins.rawSQL.executeSQL("bases_auxiliares", "aux_515", "delete from aux_515 where aux_operador = ? and aux_ip = ? ", [globals.vLega,application.getIPAddress()])
	if (done) {
		plugins.rawSQL.flushAllClientsCache("bases_auxiliares", "aux_515")
	} else {
		globals.showWarningDialog('No hay datos para borrar', null, 'Ok',null, null, null);
	}
	//Inicializa totales 
    for (var j= 0; globals.gbl_tot_fecha[j] > 0; j++){
    	globals.gbl_tot_ambulatorio[j] = 0
	    globals.gbl_tot_internado[j] = 0
		globals.gbl_tot_urgente[j] = 0
		globals.gbl_tot_totales[j] = 0
		globals.gbl_tot_fecha[j] = 0
    }
	forms.frm_cons_turnos_quirofano_515.aux_tot_ambulatorio = null 
	forms.frm_cons_turnos_quirofano_515.aux_tot_internado = null
	forms.frm_cons_turnos_quirofano_515.aux_tot_urgente = null
	forms.frm_cons_turnos_quirofano_515.aux_totales = null
	forms.frm_cons_turnos_quirofano_515.aux_total_fecha = null
}
/**
 * @param event
 *
 * @properties={typeid:24,uuid:"4D5BDDC4-961F-446F-80D6-6A8A14F90882"}
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
