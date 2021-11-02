/**
 * @properties={typeid:35,uuid:"A777A3B9-E349-4537-A2BD-71D17C9D3054",variableType:-4}
 */
var fGraboBien = false;

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"EBCD7074-5623-43F3-90A4-A9A76BF2567A"}
 */
function onShow_frm_tab_vacunas_per(firstShow, event) {
	fGraboBien=false
	if(per_hist_cli_to_tbc_vacunas_per.getSize()<1){
		globals.vacfecha_1_fec=null
		globals.vacfecha_2_fec=null
		globals.vacfecha_3_fec=null
		globals.vacfecha_4_fec=null
		per_hist_cli_to_tbc_vacunas_per.newRecord()
		globals.InicializarDatosDeRelacion(per_hist_cli_to_tbc_vacunas_per, "rrhh", "tbc_vacunas_per")
	}else{
		//var anio=' '
		//anio=per_hist_cli_to_tbc_vacunas_per.vacfecha_1
		//anio=anio.toString().substr(6,2)
		var anio=0
		var mes=0
		var dia=0
		if(per_hist_cli_to_tbc_vacunas_per.vacfecha_1>0){
			anio=utils.stringToNumber(per_hist_cli_to_tbc_vacunas_per.vacfecha_1.substr(0,4))
			mes=utils.stringToNumber(per_hist_cli_to_tbc_vacunas_per.vacfecha_1.substr(4,2))-1
			dia=utils.stringToNumber(per_hist_cli_to_tbc_vacunas_per.vacfecha_1.substr(6,2))
			globals.vacfecha_1_fec=globals.vacfecha_1_fec.setFullYear(anio)
			globals.vacfecha_1_fec=globals.vacfecha_1_fec.setMonth(mes)
			globals.vacfecha_1_fec=globals.vacfecha_1_fec.setDate(dia)
		}else{
			globals.vacfecha_1_fec=null
		}
		if(per_hist_cli_to_tbc_vacunas_per.vacfecha_2>0){
			anio=utils.stringToNumber(per_hist_cli_to_tbc_vacunas_per.vacfecha_2.substr(0,4))
			mes=utils.stringToNumber(per_hist_cli_to_tbc_vacunas_per.vacfecha_2.substr(4,2))-1
			dia=utils.stringToNumber(per_hist_cli_to_tbc_vacunas_per.vacfecha_2.substr(6,2))
			globals.vacfecha_2_fec=globals.vacfecha_2_fec.setFullYear(anio)
			globals.vacfecha_2_fec=globals.vacfecha_2_fec.setMonth(mes)
			globals.vacfecha_2_fec=globals.vacfecha_2_fec.setDate(dia)
		}else{
			globals.vacfecha_2_fec=null
		}
		if(per_hist_cli_to_tbc_vacunas_per.vacfecha_3>0){
			anio=utils.stringToNumber(per_hist_cli_to_tbc_vacunas_per.vacfecha_3.substr(0,4))
			mes=utils.stringToNumber(per_hist_cli_to_tbc_vacunas_per.vacfecha_3.substr(4,2))-1
			dia=utils.stringToNumber(per_hist_cli_to_tbc_vacunas_per.vacfecha_3.substr(6,2))
			globals.vacfecha_3_fec=globals.vacfecha_3_fec.setFullYear(anio)
			globals.vacfecha_3_fec=globals.vacfecha_3_fec.setMonth(mes)
			globals.vacfecha_3_fec=globals.vacfecha_3_fec.setDate(dia)
		}else{
			globals.vacfecha_3_fec=null
		}
		if(per_hist_cli_to_tbc_vacunas_per.vacfecha_3>0){
			anio=utils.stringToNumber('20'+per_hist_cli_to_tbc_vacunas_per.vacfecha_4.substr(0,4))
			mes=utils.stringToNumber(per_hist_cli_to_tbc_vacunas_per.vacfecha_4.substr(4,2))-1
			dia=utils.stringToNumber(per_hist_cli_to_tbc_vacunas_per.vacfecha_4.substr(6,2))
			globals.vacfecha_4_fec=globals.vacfecha_4_fec.setFullYear(anio)
			globals.vacfecha_4_fec=globals.vacfecha_4_fec.setMonth(mes)
			globals.vacfecha_4_fec=globals.vacfecha_4_fec.setDate(dia)
		}else{
			globals.vacfecha_4_fec=null
		}
	}
	elements.tabless_1.tabIndex=1
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"9CAB3BC7-84AC-44CF-A0BD-0B0B715D3A10"}
 */
function onAction_graba_frm_tab_vacunas_per(event) {
	per_hist_cli_to_tbc_vacunas_per.vachisclinica=globals.per_hist_cli
	var mes=0
	var mes_ed=''
	var dia=0
	var dia_ed=''
	if(globals.vacfecha_1_fec!=null){
		mes=globals.vacfecha_1_fec.getMonth()+1
		dia=globals.vacfecha_1_fec.getDate()
		if(mes<10){
			mes_ed='0'+mes
		}else{
			mes_ed=mes
		}
		if(dia<10){
			dia_ed='0'+dia
		}else{
			dia_ed=dia
		}
		per_hist_cli_to_tbc_vacunas_per.vacfecha_1=globals.vacfecha_1_fec.getFullYear()+''+mes_ed+''+dia_ed
	}
	if(globals.vacfecha_2_fec!=null){
	      mes=globals.vacfecha_2_fec.getMonth()+1                                                                
	      dia=globals.vacfecha_2_fec.getDate()                                                                   
	      if(mes<10){                                                                                            
	      	mes_ed='0'+mes                                                                                     
	      }else{                                                                                                 
	      	mes_ed=mes                                                                                         
	      }                                                                                                      
	      if(dia<10){                                                                                            
	      	dia_ed='0'+dia                                                                                     
	      }else{                                                                                                 
	      	dia_ed=dia                                                                                         
	      }                                                                                                      
	      per_hist_cli_to_tbc_vacunas_per.vacfecha_2=globals.vacfecha_2_fec.getFullYear()+''+mes_ed+''+dia_ed    
	}
	if(globals.vacfecha_3_fec!=null){
	      mes=globals.vacfecha_3_fec.getMonth()+1                                                               
	      dia=globals.vacfecha_3_fec.getDate()                                                                  
	      if(mes<10){                                                                                           
	      	mes_ed='0'+mes                                                                                    
	      }else{                                                                                                
	      	mes_ed=mes                                                                                        
	      }                                                                                                     
	      if(dia<10){                                                                                           
	      	dia_ed='0'+dia                                                                                    
	      }else{                                                                                                
	      	dia_ed=dia                                                                                        
	      }                                                                                                     
	      per_hist_cli_to_tbc_vacunas_per.vacfecha_3=globals.vacfecha_3_fec.getFullYear()+''+mes_ed+''+dia_ed   
	}
	if(globals.vacfecha_4_fec!=null){
	      mes=globals.vacfecha_4_fec.getMonth()+1                                                             
	      dia=globals.vacfecha_4_fec.getDate()                                                                
	      if(mes<10){                                                                                         
	      	mes_ed='0'+mes                                                                                  
	      }else{                                                                                              
	      	mes_ed=mes                                                                                      
	      }                                                                                                   
	      if(dia<10){                                                                                         
	      	dia_ed='0'+dia                                                                                  
	      }else{                                                                                              
	      	dia_ed=dia                                                                                      
	      }                                                                                                   
	      per_hist_cli_to_tbc_vacunas_per.vacfecha_4=globals.vacfecha_4_fec.getFullYear()+''+mes_ed+''+dia_ed 
	}
	if(globals.per_1!=null){
		per_hist_cli_to_tbc_vacunas_per.vaclegajo=globals.per_1
	}else{
		per_hist_cli_to_tbc_vacunas_per.vaclegajo=0
	}
	per_hist_cli_to_tbc_vacunas_per.vacvacuna=1
	
	fGraboBien=databaseManager.saveData(per_hist_cli_to_tbc_vacunas_per.getRecord(1))
	var error1 = ''
	var error2 = ''
	var array = databaseManager.getFailedRecords(per_hist_cli_to_tbc_vacunas_per)
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
	if(error1!=''){
		plugins.dialogs.showErrorDialog("Error de grabación","Record validation failed: " + thrown)
		plugins.dialogs.showErrorDialog("Error en grabacion de VACUNAS-PER Relativity",error1,"Ok")
		plugins.dialogs.showErrorDialog("Error en grabacion de VACUNAS-PER Relativity",error2,"Ok")
		plugins.dialogs.showErrorDialog("Error en grabación","Se ha producido un error de grabación. "+'\n'+"Avise a Sistemas, por favor.", "Ok")
	}
	globals.per_marca_hepb=1
	var name=application.getActiveWindow()
	name.getName()
	var $win=application.getWindow(name.getName())
	if($win!=null){
		$win.hide()
		$win.destroy()
	}
}

/**
 * Handle hide window.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"977C0C8E-BA5C-40F1-9589-0D6705102EFF"}
 */
function onHide_frm_tab_vacunas_per(event) {
	if(!fGraboBien){
		databaseManager.revertEditedRecords(per_hist_cli_to_tbc_vacunas_per)
	}
	var name=application.getActiveWindow()
	name.getName()
	var $win=application.getWindow(name.getName())
	if($win!=null){
		$win.hide()
		$win.destroy()
	}
	return true
}
