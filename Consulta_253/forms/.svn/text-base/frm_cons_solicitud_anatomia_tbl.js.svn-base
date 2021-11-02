/**
 * @properties={typeid:35,uuid:"D353E14C-44F6-431E-B54F-2D004A3F52CD",variableType:-4}
 */
var fRecordIndex = null
/**
 * @properties={typeid:35,uuid:"A1D74DF2-7EEB-4651-BFA6-027E56B134F0",variableType:-4}
 */
var fDoubleClickTime = null
/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"F6BB9176-B1A7-4BF0-82F1-B412DB50B0B2"}
 */
function onShow_limpia(firstShow, event) {
	foundset.clear() 
	controller.focusFirstField()
	//ojo
	//globals.vLega = 92838 
}
/**
 * @properties={typeid:24,uuid:"76EAD05C-F5C4-40BD-B27D-EFCAEDE1E6BC"}
 * @AllowToRunInFind
 */
function filtra() {
	foundset.clear()
	borrar_aux()
	application.updateUI()
	globals.gbl_fecha_desde_cbl = null 
	globals.gbl_fecha_hasta_cbl = null
	var encontro = 0
	var aArgs = new Array();
	var SQL = "select Apca_HistClin, Apca_HistNom, Apca_NroSolic, Apca_FecSolic_3, Apca_FecReci, Apca_FecEntre, Apca_FecCargaRes, " 
	   +"Anat.Apde_TipNom, Anat.Apde_CodNom, Nom.Nome_Descr, Anat.Apde_Cantidad, Anat.Apde_Observa, Anat.Apde_Lineas, " 
	   +"Apca_ProfInfor, Apca_MatProfInfor, Apca_TipAdmi "
	   +"from tbc_anatpaca " 
       +"inner join asistencial.tbc_ANATPADE Anat on  Apca_NroSolic = Anat.Apde_NroSolic "
       +"left join maestros.tbc_nomencla Nom on  (Anat.Apde_TipNom = Nom.Nome_Tipo and Anat.Apde_CodNom = Nom.Nome_Codigo) "
    
    if(globals.gbl_con_hiscli !=''){
	    SQL+="where (Apca_HistClin = "
	    SQL+= globals.gbl_con_hiscli + " and Apca_TipAdmi = 1) "
    }else{
    	if(globals.gbl_con_fecha_desde != null){ 
		    SQL+="where Apca_FecSolic_3 >= "
	        globals.gbl_fecha_desde_cbl=globals.FormateaFecha(globals.gbl_con_fecha_desde,'AAAAMMDD')
	        SQL+= globals.gbl_fecha_desde_cbl + " "
	    }
	    if(globals.gbl_con_fecha_hasta != null){
	        SQL+="and Apca_FecSolic_3 <= "
	        globals.gbl_fecha_hasta_cbl=globals.FormateaFecha(globals.gbl_con_fecha_hasta,'AAAAMMDD')
	        SQL+= globals.gbl_fecha_hasta_cbl + " "
	    }
  	}
	// Se filtran las Solicitudes que estan anuladas
  	 SQL+="and Apca_Estado <> 9 "
	
  	// Ordena por Fecha de Solicitud y Nro de Solicitud	
	SQL+= "order by Apca_FecSolic_3 desc, Apca_NroSolic desc " 
			  	   
	var _ds = databaseManager.getDataSetByQuery("asistencial", SQL, aArgs, -1);
	
	if (_ds.getMaxRowIndex() != 0){
		//Barra de proceso
		forms.msg_bar_progress.elements.bean_progress.minimum = 1
		forms.msg_bar_progress.elements.bean_progress.maximum = _ds.getMaxRowIndex() 
		
		for (var i= 1; i <= _ds.getMaxRowIndex(); i++){
			encontro = 1
		    forms.msg_bar_progress.elements.bean_progress.value = i
		  
		    application.updateUI()
            foundset.newRecord()
            aux_fecsolic_3    = globals.IntegerToDate(_ds.getValue(i,4))
            aux_histclin      = _ds.getValue(i,1) 
		    aux_histnom       = _ds.getValue(i,2) 
		    aux_nrosolic      = _ds.getValue(i,3) 
		    aux_fecreci       = globals.IntegerToDate(_ds.getValue(i,5))
		    aux_fecentre      = globals.IntegerToDate(_ds.getValue(i,6))
            aux_feccargares   = globals.IntegerToDate(_ds.getValue(i,7))
     	    aux_tipnom        = _ds.getValue(i,8)
     	    aux_codnom        = _ds.getValue(i,9)
		    aux_nome_descr    = _ds.getValue(i,10)
			aux_cantidad      = _ds.getValue(i,11)
		    aux_observa       = _ds.getValue(i,12) 
		    aux_lineas        = _ds.getValue(i,13)
			aux_profinfor     = _ds.getValue(i,14)
			aux_matprofinfor  = _ds.getValue(i,15)
		    aux_ip            = application.getIPAddress()
			switch (_ds.getValue(i,16)){
				case 0: aux_tiphistclin = 'Int'; break;
				default: aux_tiphistclin = 'Amb'; break;
			}
		    aux_operador      = globals.vLega 
		      			  
			var a_histcli =_ds.getValue(i,1) 
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
    		aux_histclin_alf =  hiscli
    	}
        databaseManager.saveData()
	}	
    if(globals.gbl_con_hiscli !=''){
    	for (var j= 0; j <= globals.gbl_hist_clin[j] != 0; j++){
 	        SQL = ''
    	 	SQL = "select Apca_HistClin, Apca_HistNom, Apca_NroSolic, Apca_FecSolic_3, Apca_FecReci, Apca_FecEntre, Apca_FecCargaRes, " 
    	         +"Anat.Apde_TipNom, Anat.Apde_CodNom, Nom.Nome_Descr, Anat.Apde_Cantidad, Anat.Apde_Observa, Anat.Apde_Lineas, " 
    	         +"Apca_ProfInfor, Apca_MatProfInfor, Apca_TipAdmi "
    	         +"from tbc_anatpaca " 
                 +"inner join asistencial.tbc_ANATPADE Anat on  Apca_NroSolic = Anat.Apde_NroSolic "
                 +"left join maestros.tbc_nomencla Nom on  (Anat.Apde_TipNom = Nom.Nome_Tipo and Anat.Apde_CodNom = Nom.Nome_Codigo) "
         	SQL+="where (Apca_HistClin = "
	        SQL+= globals.gbl_hist_clin[j] + " and Apca_TipAdmi = 0) "
	        SQL+="and Apca_Estado <> 9 "
		  	// Ordena por Fecha de Solicitud y Nro de Solicitud	
		    SQL+= "order by Apca_FecSolic_3 desc, Apca_NroSolic desc " 
    
		    _ds = databaseManager.getDataSetByQuery("asistencial", SQL, aArgs, -1);
        	
		    if (_ds.getMaxRowIndex() != 0){
		    	encontro = 1
		    	for (i= 1; i <= _ds.getMaxRowIndex(); i++){
		    		foundset.newRecord()
                    aux_fecsolic_3    = globals.IntegerToDate(_ds.getValue(i,4))
                    aux_histclin      = _ds.getValue(i,1) 
		            aux_histnom       = _ds.getValue(i,2) 
		            aux_nrosolic      = _ds.getValue(i,3) 
		            aux_fecreci       = globals.IntegerToDate(_ds.getValue(i,5))
		            aux_fecentre      = globals.IntegerToDate(_ds.getValue(i,6))
                    aux_feccargares   = globals.IntegerToDate(_ds.getValue(i,7))
     	            aux_tipnom        = _ds.getValue(i,8)
     	            aux_codnom        = _ds.getValue(i,9)
		            aux_nome_descr    = _ds.getValue(i,10)
			        aux_cantidad      = _ds.getValue(i,11)
		            aux_observa       = _ds.getValue(i,12) 
		            aux_lineas        = _ds.getValue(i,13)
			        aux_profinfor     = _ds.getValue(i,14)
			        aux_matprofinfor  = _ds.getValue(i,15)
		            aux_ip            = application.getIPAddress()
		  	        switch (_ds.getValue(i,16)){
   		     	    	case 0: aux_tiphistclin = 'Int'; break;
				        default: aux_tiphistclin = 'Amb'; break;
			        }
		            aux_operador      = globals.vLega 
		      			  
			        a_histcli =_ds.getValue(i,1) 
			        hiscli = a_histcli.toString()
			
    		        switch (hiscli.length){
         		    	case 2: hiscli = hiscli.substr(0,1) + '/' + hiscli.substr(1,1);break;
        			    case 3: hiscli = hiscli.substr(0,2) + '/' + hiscli.substr(2,1);break;
    	    		    case 4: hiscli = hiscli.substr(0,3) + '/' + hiscli.substr(3,1);break;
    		    	    case 5: hiscli = hiscli.substr(0,4) + '/' + hiscli.substr(4,1);break;
    			        case 6: hiscli = hiscli.substr(0,5) + '/' + hiscli.substr(5,1);break;
    			        case 7: hiscli = hiscli.substr(0,6) + '/' + hiscli.substr(6,1);break;
    			        case 8: hiscli = hiscli.substr(0,7) + '/' + hiscli.substr(7,1);break;
    		        }
    		        aux_histclin_alf =  hiscli
		    	}
		        databaseManager.saveData()
		    }
    	}
    }
	if (encontro == 0){
	    globals.showWarningDialog('No hay datos que mostrar', null, 'Ok',null, null, null)
	}
}

/**
 * 
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"49DDD506-FFDE-4C4A-A138-14A96D625E50"}
 * @AllowToRunInFind
 */
function onAction_muestra_dt1(event) {
	var win = application.createWindow("Muestra_dt",JSWindow.MODAL_DIALOG)	
	win.title= 'Solicitud de Anatomía Patológica'
	win.resizable = false
	win.show(forms.frm_cons_solicitud_anatomia_dtl)
}

/**
 * @properties={typeid:24,uuid:"8256B945-17D3-44BF-9C17-FA80D454B2F0"}
 */
function borrar_aux() {
	var done = plugins.rawSQL.executeSQL("bases_auxiliares", "aux_253", "delete from aux_253 where aux_operador = ? and aux_ip = ? ", [globals.vLega,application.getIPAddress()])
	if (done) {
		plugins.rawSQL.flushAllClientsCache("bases_auxiliares", "aux_253")
	} else {
		globals.showWarningDialog('No hay datos para borrar', null, 'Ok',null, null, null);
	}
}
/** 
 * @param event
 *
 * @properties={typeid:24,uuid:"6CDE73F0-5BA9-4519-AFB2-5D22FCD1C599"}
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
