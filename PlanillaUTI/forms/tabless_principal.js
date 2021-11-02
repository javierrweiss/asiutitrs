/**
 * @type {Boolean}
 *
 * @properties={typeid:35,uuid:"30F3E7AC-F9CD-4B9D-9E44-3EE55933A180",variableType:-4}
 */
var vClose = false;

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"4E166B72-E1E3-4C1A-8947-69A77534272D"}
 */
function onAction_graba(event) {
	var clienttime = application.getServerTimeStamp();
	var horacarga = clienttime.getHours()*100+clienttime.getMinutes()
	////////////
	if(!globals.vModifica){
		vs_to_hojauti.newRecord()
	}
	//vs_to_hojauti.param_ppc = vs_to_hojauti.param_tam - vs_to_hojauti.param_pic
	//vs_to_hojauti.param_tam = ((vs_to_hojauti.param_ta_max-vs_to_hojauti.param_ta_min)/3)+vs_to_hojauti.param_ta_min
	vs_to_hojauti.tipo_opera = globals.vTipoOperador
	vs_to_hojauti.nro_operador = globals.vLegajo
	vs_to_hojauti.fecha_carga = application.getServerTimeStamp();
	vs_to_hojauti.hora_carga = horacarga
	vs_to_hojauti.tipo_evolucion=1
	////////////
	vs_to_hojauti.param_ta_max=globals.uti_param_ta_max
	vs_to_hojauti.param_ta_min=globals.uti_param_ta_min
	vs_to_hojauti.param_fc=globals.uti_param_fc
	vs_to_hojauti.param_fr=globals.uti_param_fr
	vs_to_hojauti.param_temper=globals.uti_param_temper
	vs_to_hojauti.param_glasgow_ojos=globals.uti_param_glasgow_ojos
	vs_to_hojauti.param_glasgow_verbal=globals.uti_param_glasgow_verbal
	vs_to_hojauti.param_glasgow_motora=globals.uti_param_glasgow_motora
	vs_to_hojauti.param_glasgow=globals.uti_param_glasgow
	vs_to_hojauti.param_hgt=globals.uti_param_hgt
	vs_to_hojauti.param_arm=globals.uti_param_arm
	vs_to_hojauti.param_vni=globals.uti_param_vni
	vs_to_hojauti.param_vni_otros=globals.uti_param_vni_otros
	vs_to_hojauti.param_modo_arm_vni=globals.uti_param_modo_arm_vni
	vs_to_hojauti.param_fio2=globals.uti_param_fio2
	vs_to_hojauti.param_peep=globals.uti_param_peep
	vs_to_hojauti.param_fr_arm_vni=globals.uti_param_fr_arm_vni
	vs_to_hojauti.param_vt=globals.uti_param_vt
	vs_to_hojauti.param_tubo_t=globals.uti_param_tubo_t
	vs_to_hojauti.param_sat=globals.uti_param_sat
	vs_to_hojauti.param_tam=globals.uti_param_tam
	vs_to_hojauti.param_pic=globals.uti_param_pic
	vs_to_hojauti.param_ppc=globals.uti_param_ppc
	vs_to_hojauti.param_pvc=globals.uti_param_pvc
	vs_to_hojauti.param_co2=globals.uti_param_co2
	vs_to_hojauti.val_dolor=globals.uti_val_dolor
	vs_to_hojauti.val_tip_dolor=globals.uti_val_tip_dolor
	vs_to_hojauti.val_disnea=globals.uti_val_disnea
	vs_to_hojauti.val_secreciones=globals.uti_val_secreciones
	vs_to_hojauti.val_hemorragia=globals.uti_val_hemorragia
	vs_to_hojauti.val_hemo_vias_resp=globals.uti_val_hemo_vias_resp
	vs_to_hojauti.val_hemo_digestiva=globals.uti_val_hemo_digestiva
	vs_to_hojauti.val_hemo_mucosas=globals.uti_val_hemo_mucosas
	vs_to_hojauti.val_hemo_hematuria=globals.uti_val_hemo_hematuria
	vs_to_hojauti.val_hemo_otros=globals.uti_val_hemo_otros
	vs_to_hojauti.val_convulsiones=globals.uti_val_convulsiones
	vs_to_hojauti.val_cianosis=globals.uti_val_cianosis
	vs_to_hojauti.val_bronco_espasmo=globals.uti_val_bronco_espasmo
	vs_to_hojauti.val_arritmia=globals.uti_val_arritmia
	vs_to_hojauti.val_arritmia_otros=globals.uti_val_arritmia_otros
	vs_to_hojauti.val_depresion_respir=globals.uti_val_depresion_respir
	vs_to_hojauti.val_conciencia=globals.uti_val_conciencia
	vs_to_hojauti.val_mcpt=globals.uti_val_mcpt
	vs_to_hojauti.val_mcpd=globals.uti_val_mcpd
	vs_to_hojauti.val_diuresis=globals.uti_val_diuresis
	vs_to_hojauti.val_nauseas=globals.uti_val_nauseas
	vs_to_hojauti.val_emesis=globals.uti_val_emesis
	vs_to_hojauti.val_catarsis_tip=globals.uti_val_catarsis_tip
	vs_to_hojauti.val_catarsis_cant=globals.uti_val_catarsis_cant
	vs_to_hojauti.val_colostomia_tip=globals.uti_val_colostomia_tip
	vs_to_hojauti.val_colostomia_cant=globals.uti_val_colostomia_cant
	vs_to_hojauti.val_piel=globals.uti_val_piel
	vs_to_hojauti.val_edema=globals.uti_val_edema
	vs_to_hojauti.val_edema_mmss_d=globals.uti_val_edema_mmss_d
	vs_to_hojauti.val_edema_mmss_i=globals.uti_val_edema_mmss_i
	vs_to_hojauti.val_edema_mmii_d=globals.uti_val_edema_mmii_d
	vs_to_hojauti.val_edema_mmii_i=globals.uti_val_edema_mmii_i
	vs_to_hojauti.val_edema_sacro=globals.uti_val_edema_sacro
	vs_to_hojauti.val_edema_anasarca=globals.uti_val_edema_anasarca
	vs_to_hojauti.val_esc_supino_occipucio=globals.uti_val_esc_supino_occipucio
	vs_to_hojauti.val_esc_supino_omoplatos=globals.uti_val_esc_supino_omoplatos
	vs_to_hojauti.val_esc_supino_codos=globals.uti_val_esc_supino_codos
	vs_to_hojauti.val_esc_supino_sacro=globals.uti_val_esc_supino_sacro
	vs_to_hojauti.val_esc_supino_talon=globals.uti_val_esc_supino_talon
	vs_to_hojauti.val_esc_prono_mejilla_oreja=globals.uti_val_esc_prono_mejilla_oreja
	vs_to_hojauti.val_esc_prono_hombro=globals.uti_val_esc_prono_hombro
	vs_to_hojauti.val_esc_prono_genitales=globals.uti_val_esc_prono_genitales
	vs_to_hojauti.val_esc_prono_rodilla=globals.uti_val_esc_prono_rodilla
	vs_to_hojauti.val_esc_prono_dedos_del_pie=globals.uti_val_esc_prono_dedos_del_pie
	vs_to_hojauti.val_esc_lateral_oreja=globals.uti_val_esc_lateral_oreja
	vs_to_hojauti.val_esc_lateral_codo=globals.uti_val_esc_lateral_codo
	vs_to_hojauti.val_esc_lateral_hombro=globals.uti_val_esc_lateral_hombro
	vs_to_hojauti.val_esc_lateral_costillas=globals.uti_val_esc_lateral_costillas
	vs_to_hojauti.val_esc_lateral_cadera=globals.uti_val_esc_lateral_cadera
	vs_to_hojauti.val_esc_lateral_rodillas=globals.uti_val_esc_lateral_rodillas
	vs_to_hojauti.val_esc_lateral_tobillo=globals.uti_val_esc_lateral_tobillo
	vs_to_hojauti.val_heridas=globals.uti_val_heridas
	vs_to_hojauti.val_otras_valoraciones=globals.uti_val_otras_valoraciones
	vs_to_hojauti.bal_ing_hidrata_tipo=globals.uti_bal_ing_hidrata_tipo
	vs_to_hojauti.bal_ing_hidrata_cant=globals.uti_bal_ing_hidrata_cant
	vs_to_hojauti.bal_ing_dilucion=globals.uti_bal_ing_dilucion
	vs_to_hojauti.bal_ing_expansion_tipo=globals.uti_bal_ing_expansion_tipo
	vs_to_hojauti.bal_ing_expansion_cant=globals.uti_bal_ing_expansion_cant
	vs_to_hojauti.bal_ing_sangre_tipo=globals.uti_bal_ing_sangre_tipo
	vs_to_hojauti.bal_ing_sangre_cant=globals.uti_bal_ing_sangre_cant
	vs_to_hojauti.bal_ing_alimen_tipo=globals.uti_bal_ing_alimen_tipo
	vs_to_hojauti.bal_ing_alimen_cant=globals.uti_bal_ing_alimen_cant
	vs_to_hojauti.bal_ing_otros=globals.uti_bal_ing_otros
	vs_to_hojauti.bal_egr_diuresis_tipo=globals.uti_bal_egr_diuresis_tipo
	vs_to_hojauti.bal_egr_diuresis_cant=globals.uti_bal_egr_diuresis_cant
	vs_to_hojauti.bal_egr_drenaje1_tipo=globals.uti_bal_egr_drenaje1_tipo
	vs_to_hojauti.bal_egr_drenaje1_cant=globals.uti_bal_egr_drenaje1_cant
	vs_to_hojauti.bal_egr_drenaje2_tipo=globals.uti_bal_egr_drenaje2_tipo
	vs_to_hojauti.bal_egr_drenaje2_cant=globals.uti_bal_egr_drenaje2_cant
	vs_to_hojauti.bal_egr_drenaje3_tipo=globals.uti_bal_egr_drenaje3_tipo
	vs_to_hojauti.bal_egr_drenaje3_cant=globals.uti_bal_egr_drenaje3_cant
	vs_to_hojauti.bal_egr_drenaje4_tipo=globals.uti_bal_egr_drenaje4_tipo
	vs_to_hojauti.bal_egr_drenaje4_cant=globals.uti_bal_egr_drenaje4_cant
	vs_to_hojauti.bal_egr_sonda_tipo=globals.uti_bal_egr_sonda_tipo
	vs_to_hojauti.bal_egr_sonda_cant=globals.uti_bal_egr_sonda_cant
	vs_to_hojauti.bal_egr_otros=globals.uti_bal_egr_otros
	vs_to_hojauti.bal_egr_otros_cant=globals.uti_bal_egr_otros_cant
	vs_to_hojauti.bal_egr_otros_tipo=globals.uti_bal_egr_otros_tipo
	vs_to_hojauti.plan_banio_cama=globals.uti_plan_banio_cama
	vs_to_hojauti.plan_higiene_parcial=globals.uti_plan_higiene_parcial
	vs_to_hojauti.plan_higiene_ocular=globals.uti_plan_higiene_ocular
	vs_to_hojauti.plan_lavado_bucal=globals.uti_plan_lavado_bucal
	vs_to_hojauti.plan_rota_decubito=globals.uti_plan_rota_decubito
	vs_to_hojauti.plan_alimentacion=globals.uti_plan_alimentacion
	vs_to_hojauti.plan_oxigeno=globals.uti_plan_oxigeno
	vs_to_hojauti.plan_curacion_herida=globals.uti_plan_curacion_herida
	vs_to_hojauti.plan_curacion_escaras=globals.uti_plan_curacion_escaras
	vs_to_hojauti.plan_banio_prequir=globals.uti_plan_banio_prequir
	vs_to_hojauti.plan_admin_medica=globals.uti_plan_admin_medica
	vs_to_hojauti.plan_uso_barandas=globals.uti_plan_uso_barandas
	vs_to_hojauti.plan_medidas_prev_upd=globals.uti_plan_medidas_prev_upd
	vs_to_hojauti.plan_visita_fliar=globals.uti_plan_visita_fliar
	vs_to_hojauti.plan_movilizacion=globals.uti_plan_movilizacion
	vs_to_hojauti.plan_otros=globals.uti_plan_otros
	vs_to_hojauti.bal_egr_tipo_emesis=globals.uti_bal_egr_tipo_emesis
	vs_to_hojauti.bal_egr_cant_emesis=globals.uti_bal_egr_cant_emesis
	vs_to_hojauti.bal_egr_cant_dialisis=globals.uti_bal_egr_cant_dialisis
	vs_to_hojauti.val_oxigeno=globals.uti_val_oxigeno
	//vs_to_hojauti.val_oxigeno=999
	vs_to_hojauti.val_oxigeno_cant=globals.uti_val_oxigeno_cant
	vs_to_hojauti.param_factor_hgt=globals.uti_param_factor_hgt
	vs_to_hojauti.param_cant_hgt=globals.uti_param_cant_hgt
	vs_to_hojauti.plan_crema=globals.uti_plan_crema
	vs_to_hojauti.plan_parches=globals.uti_plan_parches
	vs_to_hojauti.plan_aro=globals.uti_plan_aro
	vs_to_hojauti.plan_talonera=globals.uti_plan_talonera
	vs_to_hojauti.plan_colchon=globals.uti_plan_colchon
	vs_to_hojauti.bal_ing_bic_1_tipo=globals.uti_bal_ing_bic_1_tipo
	vs_to_hojauti.bal_ing_bic_1_cant=globals.uti_bal_ing_bic_1_cant
	vs_to_hojauti.bal_ing_bic_2_tipo=globals.uti_bal_ing_bic_2_tipo
	vs_to_hojauti.bal_ing_bic_2_cant=globals.uti_bal_ing_bic_2_cant
	vs_to_hojauti.bal_ing_bic_3_tipo=globals.uti_bal_ing_bic_3_tipo
	vs_to_hojauti.bal_ing_bic_3_cant=globals.uti_bal_ing_bic_3_cant
	vs_to_hojauti.bal_ing_bic_4_tipo=globals.uti_bal_ing_bic_4_tipo
	vs_to_hojauti.bal_ing_bic_4_cant=globals.uti_bal_ing_bic_4_cant
	vs_to_hojauti.bal_ing_bic_5_tipo=globals.uti_bal_ing_bic_5_tipo
	vs_to_hojauti.bal_ing_bic_5_cant=globals.uti_bal_ing_bic_5_cant
//////////////
     try{
    	 databaseManager.saveData(vs_to_hojauti.getRecord(1))
		 databaseManager.refreshRecordFromDatabase(vs_to_hojauti, -1);
     }catch (msg){
			(plugins.dialogs.showInfoDialog("Error",msg.message,"ok"))
 	}
 	var error1=''
	var error2=''
	var array = databaseManager.getFailedRecords(vs_to_hojauti)
	for (var p = 0; p < array.length; p++) {
		var record = array[p];
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
		if(!globals.vModifica){
			vs_to_hojauti_errores.newRecord()
		}
		vs_to_hojauti_errores.tipo_opera = globals.vTipoOperador
		vs_to_hojauti_errores.nro_operador = globals.vLegajo
		vs_to_hojauti_errores.fecha_carga = application.getServerTimeStamp();
		vs_to_hojauti_errores.hora_carga = horacarga
		vs_to_hojauti_errores.hora_aux=globals.vHora_aux
		vs_to_hojauti_errores.ip_uti=application.getIPAddress()
		vs_to_hojauti_errores.msg_error=error1+" "+error2
		try{
			databaseManager.saveData(vs_to_hojauti_errores.getRecord(1))
			databaseManager.refreshRecordFromDatabase(vs_to_hojauti_errores, -1);
		}catch (msg){
	    	(plugins.dialogs.showInfoDialog("Error",msg.message,"ok"))
	    }
		plugins.dialogs.showErrorDialog("Error en grabacion de Hojauti",error1,"Ok")
		plugins.dialogs.showErrorDialog("Error en grabacion de Hojauti",error2,"Ok")
		//var campos_err = vs_to_hojauti.alldataproviders
		//for( var xx = 0;xx<vs_to_hojauti.alldataproviders.length;xx++){
			//plugins.dialogs.showInfoDialog(campos_err[xx],vs_to_hojauti[campos_err[xx]]+"-"+vs_to_hojauti[campos_err[xx]])
		//}
	}
	
	
	vs_to_hojauti_items.tipo_opera = globals.vTipoOperador
	vs_to_hojauti_items.nro_operador = globals.vLegajo
	vs_to_hojauti_items.fecha_carga = application.getServerTimeStamp();
	vs_to_hojauti_items.hora_carga = horacarga
	arritmias_to_hojauti_items.tipo_opera = globals.vTipoOperador
	arritmias_to_hojauti_items.nro_operador = globals.vLegajo
	arritmias_to_hojauti_items.fecha_carga = application.getServerTimeStamp();
	arritmias_to_hojauti_items.hora_carga = horacarga
	otros_ingresos_to_hojauti_items.tipo_opera = globals.vTipoOperador
	otros_ingresos_to_hojauti_items.nro_operador = globals.vLegajo
	otros_ingresos_to_hojauti_items.fecha_carga = application.getServerTimeStamp();
	otros_ingresos_to_hojauti_items.hora_carga = horacarga
	otros_egresos_to_hojauti_items.tipo_opera = globals.vTipoOperador
	otros_egresos_to_hojauti_items.nro_operador = globals.vLegajo
	otros_egresos_to_hojauti_items.fecha_carga = application.getServerTimeStamp();
	otros_egresos_to_hojauti_items.hora_carga = horacarga
	vs_to_hojauti_cultivos.tipo_opera = globals.vTipoOperador
	vs_to_hojauti_cultivos.nro_operador = globals.vLegajo
	vs_to_hojauti_cultivos.fecha_carga = application.getServerTimeStamp();
	vs_to_hojauti_cultivos.hora_carga = horacarga
	
	try{
		if(vs_to_hojauti_block.getSize()>0){	
			
			vs_to_hojauti_block.tipo_evolucion=1
			databaseManager.saveData(vs_to_hojauti_block.getRecord(1))
			
			databaseManager.refreshRecordFromDatabase(vs_to_hojauti_block, -1);
		}else{
			plugins.dialogs.showInfoDialog("Error en grabación","No graba planilla avise a Sistemas, por favor")
			if(!globals.vModifica){
				vs_to_hojauti_errores.newRecord()
			}
			vs_to_hojauti_errores.tipo_opera = globals.vTipoOperador
			vs_to_hojauti_errores.nro_operador = globals.vLegajo
			vs_to_hojauti_errores.fecha_carga = application.getServerTimeStamp();
			vs_to_hojauti_errores.hora_carga = horacarga
			vs_to_hojauti_errores.hora_aux=globals.vHora_aux
			vs_to_hojauti_errores.ip_uti=application.getIPAddress()
			try{
				databaseManager.saveData(vs_to_hojauti_errores.getRecord(1))
				databaseManager.refreshRecordFromDatabase(vs_to_hojauti_errores, -1);
			}catch (msg){
		    	(plugins.dialogs.showInfoDialog("Error",msg.message,"ok"))
		    }
			
		}
	 }catch (msg){
			(plugins.dialogs.showInfoDialog("Error",msg.message,"ok"))
	}
	try{ 
		if(vs_to_hojauti_items.getSize()>0){
			for(var i=1;i<=vs_to_hojauti_items.getSize();i++){
				vs_to_hojauti_items.setSelectedIndex(i)
				databaseManager.saveData(vs_to_hojauti_items.getRecord(1))
			}
		}	
	}catch (msg){
			(plugins.dialogs.showInfoDialog("Error",msg.message,"ok"))
	}
	try{
		if(arritmias_to_hojauti_items.getSize()>0){
			databaseManager.saveData(arritmias_to_hojauti_items)
		}	
	}catch (msg){
			(plugins.dialogs.showInfoDialog("Error",msg.message,"ok"))
	}
	try{
		if(otros_ingresos_to_hojauti_items.getSize()>0){
			databaseManager.saveData(otros_ingresos_to_hojauti_items)
		}	
	}catch (msg){
			(plugins.dialogs.showInfoDialog("Error",msg.message,"ok"))
	}
	try{
		if(otros_egresos_to_hojauti_items.getSize()>0){
			databaseManager.saveData(otros_egresos_to_hojauti_items)
		}	
	}catch (msg){
			(plugins.dialogs.showInfoDialog("Error",msg.message,"ok"))
	}
	try{
		if(heridas_to_hojauti_items.getSize()>0){
			databaseManager.saveData(heridas_to_hojauti_items)
		}	
	}catch (msg){
			(plugins.dialogs.showInfoDialog("Error",msg.message,"ok"))
	}
	try{
		if(otras_valoriz_to_hojauti_items.getSize()>0){
			databaseManager.saveData(otras_valoriz_to_hojauti_items)
		}	
    }catch (msg){
	    	(plugins.dialogs.showInfoDialog("Error",msg.message,"ok"))
    }
    try{
    	if(otros_plan_to_hojauti_items.getSize()>0){
    		databaseManager.saveData(otros_plan_to_hojauti_items)
    	}	
    }catch (msg){
    	(plugins.dialogs.showInfoDialog("Error",msg.message,"ok"))
    }
    try{
    	if(vs_to_hojauti_cultivos.getSize()>0){
    		if(vs_to_hojauti_cultivos.anat_patol!=null||vs_to_hojauti_cultivos.eco!=null||vs_to_hojauti_cultivos.hemo!=null||vs_to_hojauti_cultivos.labo!=null||vs_to_hojauti_cultivos.otros_estudios!=null||vs_to_hojauti_cultivos.partes_blandas!=null||vs_to_hojauti_cultivos.punta_cateter!=null||vs_to_hojauti_cultivos.rmn!=null||vs_to_hojauti_cultivos.rx!=null||vs_to_hojauti_cultivos.secreciones!=null||vs_to_hojauti_cultivos.tac!=null||vs_to_hojauti_cultivos.uro!=null){
    			databaseManager.saveData(vs_to_hojauti_cultivos.getRecord(1))
    		}	
    	}
    }catch (msg){
    	(plugins.dialogs.showInfoDialog("Error",msg.message,"ok"))
    }
    try{
    	if(otros_estudios_to_hojauti_otros_estudios.getSize()>0){
    		databaseManager.saveData(otros_estudios_to_hojauti_otros_estudios)
    	}	
    }catch (msg){
    	(plugins.dialogs.showInfoDialog("Error",msg.message,"ok"))
    }
    try{
    	if(viacen_to_hojauti_cateteres.getSize()>0){
    		databaseManager.saveData(viacen_to_hojauti_cateteres.getRecord(1))
    	}	
    }catch (msg){
    	(plugins.dialogs.showInfoDialog("Error",msg.message,"ok"))
    }
    try{
    	if(viaper_to_hojauti_cateteres.getSize()>0){
    		databaseManager.saveData(viaper_to_hojauti_cateteres.getRecord(1))
    	}	
    }catch (msg){
    	(plugins.dialogs.showInfoDialog("Error",msg.message,"ok"))
    }
    try{
    	if(sonves_to_hojauti_cateteres.getSize()>0){
    		databaseManager.saveData(sonves_to_hojauti_cateteres.getRecord(1))
    	}	
    }catch (msg){
    	(plugins.dialogs.showInfoDialog("Error",msg.message,"ok"))
    }
    try{
    	if(pic_to_hojauti_cateteres.getSize()>0){
    		databaseManager.saveData(pic_to_hojauti_cateteres.getRecord(1))
    	}	
    }catch (msg){
    	(plugins.dialogs.showInfoDialog("Error",msg.message,"ok"))
    }
    try{
    	if(tam_to_hojauti_cateteres.getSize()>0){
    		databaseManager.saveData(tam_to_hojauti_cateteres.getRecord(1))
    	}
    }catch (msg){
    	(plugins.dialogs.showInfoDialog("Error",msg.message,"ok"))
    }
    try{
    	if(traqueo_to_hojauti_cateteres.getSize()>0){
    		databaseManager.saveData(traqueo_to_hojauti_cateteres.getRecord(1))
    	}	
    }catch (msg){
    	(plugins.dialogs.showInfoDialog("Error",msg.message,"ok"))
    }
    try{
    	if(k108_to_hojauti_cateteres.getSize()>0){
    		databaseManager.saveData(k108_to_hojauti_cateteres.getRecord(1))
    	}	
    }catch (msg){
    	(plugins.dialogs.showInfoDialog("Error",msg.message,"ok"))
    }
    try{
    	if(sng_to_hojauti_cateteres.getSize()>0){
    		databaseManager.saveData(sng_to_hojauti_cateteres.getRecord(1))
    	}
    }catch (msg){
    	(plugins.dialogs.showInfoDialog("Error",msg.message,"ok"))
    }
    try{
    	if(drenajep_to_hojauti_cateteres.getSize()>0){
    		databaseManager.saveData(drenajep_to_hojauti_cateteres.getRecord(1))
    	}	
    }catch (msg){
    	(plugins.dialogs.showInfoDialog("Error",msg.message,"ok"))
    }
    try{
    	if(balon_to_hojauti_cateteres.getSize()>0){
    		databaseManager.saveData(balon_to_hojauti_cateteres.getRecord(1))
    	}	
    }catch (msg){
    	(plugins.dialogs.showInfoDialog("Error",msg.message,"ok"))
    }
    try{
    	if(swan_to_hojauti_cateteres.getSize()>0){
    		databaseManager.saveData(swan_to_hojauti_cateteres.getRecord(1))
    	}	
    }catch (msg){
	(plugins.dialogs.showInfoDialog("Error",msg.message,"ok"))
    }
    try{
    	if(globals.textoObser!=''&&globals.textoObser!=null){
    		if(!globals.vModifica){
    			vs_to_hojauti_observaciones.newRecord()
    		}
			vs_to_hojauti_observaciones.observacion=globals.textoObser
			vs_to_hojauti_observaciones.tipo_opera = globals.vTipoOperador
			vs_to_hojauti_observaciones.nro_operador = globals.vLegajo
			vs_to_hojauti_observaciones.fecha_carga = application.getServerTimeStamp();
			vs_to_hojauti_observaciones.hora_carga = horacarga
    		databaseManager.saveData(vs_to_hojauti_observaciones.getRecord(1))
    	}	
    }catch (msg){
	(plugins.dialogs.showInfoDialog("Error",msg.message,"ok"))
    }
    error1=''
	error2=''
	array = databaseManager.getFailedRecords(vs_to_hojauti_observaciones)
	for (var pp = 0; pp < array.length; pp++) {
		var record1 = array[pp];
		var jstable1 = databaseManager.getTable(record1);
		var tableSQLName1 = jstable1.getSQLName();
		error1='Error de Grabación en Tabla:' + tableSQLName1 + ' en server:' + jstable1.getServerName() + ' falló la grabación. Avise urgente a Sistemas, por favor!'
		error2='Error en grabación '+record1.exception;
		if (record1.exception.getErrorCode() == ServoyException.RECORD_VALIDATION_FAILED) {
	// exception thrown in pre-insert/update/delete event method
			var thrown = record1.exception.getValue()
			plugins.dialogs.showErrorDialog("Error de grabación","Record validation failed: " + thrown)
		}
	}
	if(error1!=''){
		plugins.dialogs.showErrorDialog("Error en grabacion de Observaciones",error1,"Ok")
		plugins.dialogs.showErrorDialog("Error en grabacion de Observaciones",error2,"Ok")
		
	}
    try{
    	if(!globals.vModifica){
    		vs_to_hojauti_observaciones_log.newRecord()
    	}
		vs_to_hojauti_observaciones_log.observacion=globals.textoObser
		vs_to_hojauti_observaciones_log.tipo_opera = globals.vTipoOperador
		vs_to_hojauti_observaciones_log.nro_operador = globals.vLegajo
		vs_to_hojauti_observaciones_log.fecha_carga = application.getServerTimeStamp();
		vs_to_hojauti_observaciones_log.hora_carga = horacarga
    	databaseManager.saveData(vs_to_hojauti_observaciones_log.getRecord(1))
    }catch (msg){
	(plugins.dialogs.showInfoDialog("Error",msg.message,"ok"))
    }
    error1=''
	error2=''
	array = databaseManager.getFailedRecords(vs_to_hojauti_observaciones_log)
	for (var p1 = 0; p1 < array.length; p1++) {
		var record2 = array[p1];
		var jstable2 = databaseManager.getTable(record2);
		var tableSQLName2 = jstable2.getSQLName();
		error1='Error de Grabación en Tabla:' + tableSQLName2 + ' en server:' + jstable2.getServerName() + ' falló la grabación. Avise urgente a Sistemas, por favor!'
		error2='Error en grabación '+record2.exception;
		if (record2.exception.getErrorCode() == ServoyException.RECORD_VALIDATION_FAILED) {
	// exception thrown in pre-insert/update/delete event method
			var thrown = record2.exception.getValue()
			plugins.dialogs.showErrorDialog("Error de grabación","Record validation failed: " + thrown)
		}
	}
	if(error1!=''){
		plugins.dialogs.showErrorDialog("Error en grabacion de Observaciones_log",error1,"Ok")
		plugins.dialogs.showErrorDialog("Error en grabacion de Observaciones_log",error2,"Ok")
		
	}
    //databaseManager.commitTransaction()
	 globals.vGrabado=true
	 globals.textoObser=''
	 
	onAction_btn_limpia(event)
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
 * @properties={typeid:24,uuid:"F875D3E4-4D69-4955-9E77-2D8A9C05D316"}
 */
function onDataChange_nuevoRegistro(oldValue, newValue, event) {
	globals.vHora=globals.vHora_aux
	vs_to_hojauti.loadAllRecords()
	if (vs_to_hojauti.getSize()>0){
		globals.vGrabado=true
		globals.vNuevaHoja=false
	}
	return true
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"BB3F7790-AACD-4A13-9437-0BC4EB838A48"}
 */
function onShow_tabless_principal(firstShow, event) {
	//plugins.dialogs.showInfoDialog("vHiscli",globals.vHiscli)
	globals.vEstadoAccion=''
	globals.renglon=0
	globals.renglon2=0
	globals.renglon3=0
	globals.renglon4=0
	globals.renglon5=0
	globals.renglon6=0
	globals.renglon7=0
	globals.renglon8=0
	globals.renglon9=0
	globals.renglon10=0
	globals.vFecha=application.getServerTimeStamp()
	elements.btn_nueva.visible=true
	elements.btn_modifica.visible=false
	elements.box_fecha_hora.visible=false
	elements.box_hora.visible=false
	elements.btn_graba.visible=true
	elements.btn_graba.enabled=false
	elements.fld_fecha.visible=false
	elements.lbl_1.visible=false
	elements.lbl_2.visible=false
	elements.lbl_3.visible=false
	elements.lbl_4.visible=false
	elements.btn_consulta.visible=false
	elements.btn_nuevo_registro.visible=false
	elements.tabs_154.visible=false
	elements.box_hora.editable=true
	elements.fld_fecha.editable=true
	elements.box_hora.enabled=true
	elements.fld_fecha.enabled=true
	globals.vTipoArritmias='arritmia'
	globals.vTipo='hemorragia'	
	globals.vTipoOtrosIngresos='otrosing'
	globals.vTipoOtrosEgresos='otrosegr'
	globals.vTipoOtrosEstudios='otrosestud'	
	globals.vTipoHeridas='heridas'	
	globals.vTipoOtrasValoriz='otrosvalor'
	globals.vTipoOtrosPlan='otrosplan'
	globals.vGrabado=false
	globals.vNuevaHoja=false
	globals.nuevo_registro=false
	globals.vExisteEvolucion=false
	globals.textoObser=''
	globals.vModifica=false	
	globals.name_tabless='tabless_principal'	
	if(vhiscli_to_hojauti.getSize()>0){
		if(globals.vSupervisor){
			elements.btn_modifica.visible=true
		}else{
			elements.btn_modifica.visible=false
		}
		elements.btn_consulta.visible=true
		elements.btn_consulta.requestFocus()
	}else{
		elements.btn_nueva.requestFocus()
	}
	plugins.scheduler.addCronJob('Actualiza Fecha','0 57 12 * * ?',mtActualizaFecha)
}

/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"3B643EA1-0755-4602-B918-1A88F984714D"}
 */
function onLoad(event) {
	globals.vFechayHora+='Nuevo'
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"5CB4466E-56BB-468E-B8D3-96AC5B4E8A6F"}
 * @AllowToRunInFind
 */
function onAction_FechayHora(event) {
	var fecyhor = new Array()
		fecyhor=globals.vFechayHora.split('|')
	var fec = new Array()
	    fec = fecyhor[0].split('/')
	var hor = new Array()
	    hor = fecyhor[1].split(':')
	var fec_aux = new Date(fec[2], fec[1]-1, fec[0]);
	vs_to_hojauti.find()
	globals.vFecha=fec_aux
	globals.vHora=utils.stringToNumber(hor[0]+hor[1])
	vs_to_hojauti.search()
	if (vs_to_hojauti.getSize()>0){
		globals.InicializoRegistroGlobal()
		//globals.vArm=vs_to_hojauti.param_arm
		//globals.vVni=vs_to_hojauti.param_vni
		if(globals.vModifica&&globals.vSupervisor){
			globals.HabilitaDeshabilitaCampos('frm_parametros','nuevo')
			globals.HabilitaDeshabilitaCampos('frm_valoracion','nuevo')
			globals.HabilitaDeshabilitaCampos('frm_valoracion_2','nuevo')
			globals.HabilitaDeshabilitaCampos('frm_valoracion_3','nuevo')
			globals.HabilitaDeshabilitaCampos('frm_balance_ingresos','nuevo')
			globals.HabilitaDeshabilitaCampos('frm_balance_egresos','nuevo')
			globals.HabilitaDeshabilitaCampos('frm_plan_cuidados','nuevo')
			globals.HabilitaDeshabilitaCampos('frm_cultivos','nuevo')
			globals.HabilitaDeshabilitaCampos('frm_cateteres','nuevo')
			globals.HabilitaDeshabilitaCampos('frm_observaciones','nuevo')
			elements.btn_graba.enabled=true
		}else{
			globals.HabilitaDeshabilitaCampos('frm_parametros','consulta')
			globals.HabilitaDeshabilitaCampos('frm_valoracion','consulta')
			globals.HabilitaDeshabilitaCampos('frm_valoracion_2','consulta')
			globals.HabilitaDeshabilitaCampos('frm_valoracion_3','consulta')
			globals.HabilitaDeshabilitaCampos('frm_balance_ingresos','consulta')
			globals.HabilitaDeshabilitaCampos('frm_balance_egresos','consulta')
			globals.HabilitaDeshabilitaCampos('frm_plan_cuidados','consulta')
			globals.HabilitaDeshabilitaCampos('frm_cultivos','consulta')
			globals.HabilitaDeshabilitaCampos('frm_cateteres','consulta')
			globals.HabilitaDeshabilitaCampos('frm_observaciones','consulta')
		}
		globals.uti_param_ta_max=vs_to_hojauti.param_ta_max
		globals.uti_param_ta_min=vs_to_hojauti.param_ta_min
		globals.uti_param_fc=vs_to_hojauti.param_fc
		globals.uti_param_fr=vs_to_hojauti.param_fr
		globals.uti_param_temper=vs_to_hojauti.param_temper
		globals.uti_param_glasgow_ojos=vs_to_hojauti.param_glasgow_ojos
		globals.uti_param_glasgow_verbal=vs_to_hojauti.param_glasgow_verbal
		globals.uti_param_glasgow_motora=vs_to_hojauti.param_glasgow_motora
		globals.uti_param_glasgow=vs_to_hojauti.param_glasgow
		globals.uti_param_hgt=vs_to_hojauti.param_hgt
		globals.uti_param_arm=vs_to_hojauti.param_arm
		globals.uti_param_vni=vs_to_hojauti.param_vni
		globals.uti_param_vni_otros=vs_to_hojauti.param_vni_otros
		globals.uti_param_modo_arm_vni=vs_to_hojauti.param_modo_arm_vni
		globals.uti_param_fio2=vs_to_hojauti.param_fio2
		globals.uti_param_peep=vs_to_hojauti.param_peep
		globals.uti_param_fr_arm_vni=vs_to_hojauti.param_fr_arm_vni
		globals.uti_param_vt=vs_to_hojauti.param_vt
		globals.uti_param_tubo_t=vs_to_hojauti.param_tubo_t
		globals.uti_param_sat=vs_to_hojauti.param_sat
		globals.uti_param_tam=vs_to_hojauti.param_tam
		globals.uti_param_pic=vs_to_hojauti.param_pic
		globals.uti_param_ppc=vs_to_hojauti.param_ppc
		globals.uti_param_pvc=vs_to_hojauti.param_pvc
		globals.uti_param_co2=vs_to_hojauti.param_co2
		globals.uti_val_dolor=vs_to_hojauti.val_dolor
		globals.uti_val_tip_dolor=vs_to_hojauti.val_tip_dolor
		globals.uti_val_disnea=vs_to_hojauti.val_disnea
		globals.uti_val_secreciones=vs_to_hojauti.val_secreciones
		globals.uti_val_hemorragia=vs_to_hojauti.val_hemorragia
		globals.uti_val_hemo_vias_resp=vs_to_hojauti.val_hemo_vias_resp
		globals.uti_val_hemo_digestiva=vs_to_hojauti.val_hemo_digestiva
		globals.uti_val_hemo_mucosas=vs_to_hojauti.val_hemo_mucosas
		globals.uti_val_hemo_hematuria=vs_to_hojauti.val_hemo_hematuria
		globals.uti_val_hemo_otros=vs_to_hojauti.val_hemo_otros
		globals.uti_val_convulsiones=vs_to_hojauti.val_convulsiones
		globals.uti_val_cianosis=vs_to_hojauti.val_cianosis
		globals.uti_val_bronco_espasmo=vs_to_hojauti.val_bronco_espasmo
		globals.uti_val_arritmia=vs_to_hojauti.val_arritmia
		globals.uti_val_arritmia_otros=vs_to_hojauti.val_arritmia_otros
		globals.uti_val_depresion_respir=vs_to_hojauti.val_depresion_respir
		globals.uti_val_conciencia=vs_to_hojauti.val_conciencia
		globals.uti_val_mcpt=vs_to_hojauti.val_mcpt
		globals.uti_val_mcpd=vs_to_hojauti.val_mcpd
		globals.uti_val_diuresis=vs_to_hojauti.val_diuresis
		globals.uti_val_nauseas=vs_to_hojauti.val_nauseas
		globals.uti_val_emesis=vs_to_hojauti.val_emesis
		globals.uti_val_catarsis_tip=vs_to_hojauti.val_catarsis_tip
		globals.uti_val_catarsis_cant=vs_to_hojauti.val_catarsis_cant
		globals.uti_val_colostomia_tip=vs_to_hojauti.val_colostomia_tip
		globals.uti_val_colostomia_cant=vs_to_hojauti.val_colostomia_cant
		globals.uti_val_piel=vs_to_hojauti.val_piel
		globals.uti_val_edema=vs_to_hojauti.val_edema
		globals.uti_val_edema_mmss_d=vs_to_hojauti.val_edema_mmss_d
		globals.uti_val_edema_mmss_i=vs_to_hojauti.val_edema_mmss_i
		globals.uti_val_edema_mmii_d=vs_to_hojauti.val_edema_mmii_d
		globals.uti_val_edema_mmii_i=vs_to_hojauti.val_edema_mmii_i
		globals.uti_val_edema_sacro=vs_to_hojauti.val_edema_sacro
		globals.uti_val_edema_anasarca=vs_to_hojauti.val_edema_anasarca
		globals.uti_val_esc_supino_occipucio=vs_to_hojauti.val_esc_supino_occipucio
		globals.uti_val_esc_supino_omoplatos=vs_to_hojauti.val_esc_supino_omoplatos
		globals.uti_val_esc_supino_codos=vs_to_hojauti.val_esc_supino_codos
		globals.uti_val_esc_supino_sacro=vs_to_hojauti.val_esc_supino_sacro
		globals.uti_val_esc_supino_talon=vs_to_hojauti.val_esc_supino_talon
		globals.uti_val_esc_prono_mejilla_oreja=vs_to_hojauti.val_esc_prono_mejilla_oreja
		globals.uti_val_esc_prono_hombro=vs_to_hojauti.val_esc_prono_hombro
		globals.uti_val_esc_prono_genitales=vs_to_hojauti.val_esc_prono_genitales
		globals.uti_val_esc_prono_rodilla=vs_to_hojauti.val_esc_prono_rodilla
		globals.uti_val_esc_prono_dedos_del_pie=vs_to_hojauti.val_esc_prono_dedos_del_pie
		globals.uti_val_esc_lateral_oreja=vs_to_hojauti.val_esc_lateral_oreja
		globals.uti_val_esc_lateral_codo=vs_to_hojauti.val_esc_lateral_codo
		globals.uti_val_esc_lateral_hombro=vs_to_hojauti.val_esc_lateral_hombro
		globals.uti_val_esc_lateral_costillas=vs_to_hojauti.val_esc_lateral_costillas
		globals.uti_val_esc_lateral_cadera=vs_to_hojauti.val_esc_lateral_cadera
		globals.uti_val_esc_lateral_rodillas=vs_to_hojauti.val_esc_lateral_rodillas
		globals.uti_val_esc_lateral_tobillo=vs_to_hojauti.val_esc_lateral_tobillo
		globals.uti_val_heridas=vs_to_hojauti.val_heridas
		globals.uti_val_otras_valoraciones=vs_to_hojauti.val_otras_valoraciones
		globals.uti_bal_ing_hidrata_tipo=vs_to_hojauti.bal_ing_hidrata_tipo
		globals.uti_bal_ing_hidrata_cant=vs_to_hojauti.bal_ing_hidrata_cant
		globals.uti_bal_ing_dilucion=vs_to_hojauti.bal_ing_dilucion
		globals.uti_bal_ing_expansion_tipo=vs_to_hojauti.bal_ing_expansion_tipo
		globals.uti_bal_ing_expansion_cant=vs_to_hojauti.bal_ing_expansion_cant
		globals.uti_bal_ing_sangre_tipo=vs_to_hojauti.bal_ing_sangre_tipo
		globals.uti_bal_ing_sangre_cant=vs_to_hojauti.bal_ing_sangre_cant
		globals.uti_bal_ing_alimen_tipo=vs_to_hojauti.bal_ing_alimen_tipo
		globals.uti_bal_ing_alimen_cant=vs_to_hojauti.bal_ing_alimen_cant
		globals.uti_bal_ing_otros=vs_to_hojauti.bal_ing_otros
		globals.uti_bal_egr_diuresis_tipo=vs_to_hojauti.bal_egr_diuresis_tipo
		globals.uti_bal_egr_diuresis_cant=vs_to_hojauti.bal_egr_diuresis_cant
		globals.uti_bal_egr_drenaje1_tipo=vs_to_hojauti.bal_egr_drenaje1_tipo
		globals.uti_bal_egr_drenaje1_cant=vs_to_hojauti.bal_egr_drenaje1_cant
		globals.uti_bal_egr_drenaje2_tipo=vs_to_hojauti.bal_egr_drenaje2_tipo
		globals.uti_bal_egr_drenaje2_cant=vs_to_hojauti.bal_egr_drenaje2_cant
		globals.uti_bal_egr_drenaje3_tipo=vs_to_hojauti.bal_egr_drenaje3_tipo
		globals.uti_bal_egr_drenaje3_cant=vs_to_hojauti.bal_egr_drenaje3_cant
		globals.uti_bal_egr_drenaje4_tipo=vs_to_hojauti.bal_egr_drenaje4_tipo
		globals.uti_bal_egr_drenaje4_cant=vs_to_hojauti.bal_egr_drenaje4_cant
		globals.uti_bal_egr_sonda_tipo=vs_to_hojauti.bal_egr_sonda_tipo
		globals.uti_bal_egr_sonda_cant=vs_to_hojauti.bal_egr_sonda_cant
		globals.uti_bal_egr_otros=vs_to_hojauti.bal_egr_otros
		globals.uti_bal_egr_otros_cant=vs_to_hojauti.bal_egr_otros_cant
		globals.uti_bal_egr_otros_tipo=vs_to_hojauti.bal_egr_otros_tipo
		globals.uti_plan_banio_cama=vs_to_hojauti.plan_banio_cama
		globals.uti_plan_higiene_parcial=vs_to_hojauti.plan_higiene_parcial
		globals.uti_plan_higiene_ocular=vs_to_hojauti.plan_higiene_ocular
		globals.uti_plan_lavado_bucal=vs_to_hojauti.plan_lavado_bucal
		globals.uti_plan_rota_decubito=vs_to_hojauti.plan_rota_decubito
		globals.uti_plan_alimentacion=vs_to_hojauti.plan_alimentacion
		globals.uti_plan_oxigeno=vs_to_hojauti.plan_oxigeno
		globals.uti_plan_curacion_herida=vs_to_hojauti.plan_curacion_herida
		globals.uti_plan_curacion_escaras=vs_to_hojauti.plan_curacion_escaras
		globals.uti_plan_banio_prequir=vs_to_hojauti.plan_banio_prequir
		globals.uti_plan_admin_medica=vs_to_hojauti.plan_admin_medica
		globals.uti_plan_uso_barandas=vs_to_hojauti.plan_uso_barandas
		globals.uti_plan_medidas_prev_upd=vs_to_hojauti.plan_medidas_prev_upd
		globals.uti_plan_visita_fliar=vs_to_hojauti.plan_visita_fliar
		globals.uti_plan_movilizacion=vs_to_hojauti.plan_movilizacion
		globals.uti_plan_otros=vs_to_hojauti.plan_otros
		globals.uti_bal_egr_tipo_emesis=vs_to_hojauti.bal_egr_tipo_emesis
		globals.uti_bal_egr_cant_emesis=vs_to_hojauti.bal_egr_cant_emesis
		globals.uti_bal_egr_cant_dialisis=vs_to_hojauti.bal_egr_cant_dialisis
		globals.uti_val_oxigeno=vs_to_hojauti.val_oxigeno
		globals.uti_val_oxigeno_cant=vs_to_hojauti.val_oxigeno_cant
		globals.uti_param_factor_hgt=vs_to_hojauti.param_factor_hgt
		globals.uti_param_cant_hgt=vs_to_hojauti.param_cant_hgt
		globals.uti_plan_crema=vs_to_hojauti.plan_crema
		globals.uti_plan_parches=vs_to_hojauti.plan_parches
		globals.uti_plan_aro=vs_to_hojauti.plan_aro
		globals.uti_plan_talonera=vs_to_hojauti.plan_talonera
		globals.uti_plan_colchon=vs_to_hojauti.plan_colchon
		globals.uti_bal_ing_bic_1_tipo=vs_to_hojauti.bal_ing_bic_1_tipo
		globals.uti_bal_ing_bic_1_cant=vs_to_hojauti.bal_ing_bic_1_cant
		globals.uti_bal_ing_bic_2_tipo=vs_to_hojauti.bal_ing_bic_2_tipo
		globals.uti_bal_ing_bic_2_cant=vs_to_hojauti.bal_ing_bic_2_cant
		globals.uti_bal_ing_bic_3_tipo=vs_to_hojauti.bal_ing_bic_3_tipo
		globals.uti_bal_ing_bic_3_cant=vs_to_hojauti.bal_ing_bic_3_cant
		globals.uti_bal_ing_bic_4_tipo=vs_to_hojauti.bal_ing_bic_4_tipo
		globals.uti_bal_ing_bic_4_cant=vs_to_hojauti.bal_ing_bic_4_cant
		globals.uti_bal_ing_bic_5_tipo=vs_to_hojauti.bal_ing_bic_5_tipo
		globals.uti_bal_ing_bic_5_cant=vs_to_hojauti.bal_ing_bic_5_cant

	}
	if(vs_to_hojauti_observaciones.getSize()>0){
		globals.textoObser=vs_to_hojauti_observaciones.observacion
	}else{
		globals.textoObser=''
	}
	elements.btn_consulta.visible=false
	elements.tabs_154.visible=true
	elements.tabs_154.tabIndex=1
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"85231DFE-EDB9-4BDC-A7DA-AAFEB2E2AC20"}
 */
function onAction_btn_consulta(event) {
	elements.btn_nueva.visible=false
	elements.btn_modifica.visible=false
	elements.btn_consulta.visible=false
	elements.lbl_1.visible=true
	elements.box_fecha_hora.visible=true
	globals.vGrabado=true
	globals.vNuevaHoja=false
	globals.nuevo_registro=false
	globals.vEstadoAccion="CONSULTA"
	globals.vMuestraIngresa="Muestra "
	globals.vModifica=false
	globals.Actualizo_hojas_horarias()
	elements.box_fecha_hora.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"67C52B24-84F4-4D35-BEB6-0A89A6EA3AFE"}
 */
function onAction_btn_limpia(event) {
		if(globals.vNuevaHoja&&!globals.vGrabado&&globals.nuevo_registro){
			if (vs_to_hojauti_block.getSize()>0){
				vs_to_hojauti_block.deleteRecord()
				databaseManager.refreshRecordFromDatabase(vs_to_hojauti_block, -1);
				//vs_to_hojauti.clear()
			}
			if (vs_to_hojauti_cultivos.getSize()>0){
				if (globals.vCultivos){
					vs_to_hojauti_cultivos.deleteRecord()
				}	
			}
			if (vs_to_hojauti_items.getSize()>0){
				vs_to_hojauti_items.deleteAllRecords()
			}
			if (arritmias_to_hojauti_items.getSize()>0){
				arritmias_to_hojauti_items.deleteAllRecords()
			}
			if (heridas_to_hojauti_items.getSize()>0){
				heridas_to_hojauti_items.deleteAllRecords()
			}
			if (otras_valoriz_to_hojauti_items.getSize()>0){
				otras_valoriz_to_hojauti_items.deleteAllRecords()
			}
			if (otros_egresos_to_hojauti_items.getSize()>0){
				otros_egresos_to_hojauti_items.deleteAllRecords()
			}
			if (otros_estudios_to_hojauti_otros_estudios.getSize()>0){
				otros_estudios_to_hojauti_otros_estudios.deleteAllRecords()
			}
			if (otros_ingresos_to_hojauti_items.getSize()>0){
				otros_ingresos_to_hojauti_items.deleteAllRecords()
			}
			if (otros_plan_to_hojauti_items.getSize()>0){
				otros_plan_to_hojauti_items.deleteAllRecords()
			}
			if (balon_to_hojauti_cateteres.getSize()>0){
				balon_to_hojauti_cateteres.deleteRecord()
			}
			if (drenajep_to_hojauti_cateteres.getSize()>0){
				drenajep_to_hojauti_cateteres.deleteRecord()
			}
			if (k108_to_hojauti_cateteres.getSize()>0){
				k108_to_hojauti_cateteres.deleteRecord()
			}
			if (sng_to_hojauti_cateteres.getSize()>0){
				sng_to_hojauti_cateteres.deleteRecord()
			}
			if (sonves_to_hojauti_cateteres.getSize()>0){
				sonves_to_hojauti_cateteres.deleteRecord()
			}
			if (pic_to_hojauti_cateteres.getSize()>0){
				pic_to_hojauti_cateteres.deleteRecord()
			}
			if (swan_to_hojauti_cateteres.getSize()>0){
				swan_to_hojauti_cateteres.deleteRecord()
			}
			if (tam_to_hojauti_cateteres.getSize()>0){
				tam_to_hojauti_cateteres.deleteRecord()
			}
			if (traqueo_to_hojauti_cateteres.getSize()>0){
				traqueo_to_hojauti_cateteres.deleteRecord()
			}
			if (viacen_to_hojauti_cateteres.getSize()>0){
				viacen_to_hojauti_cateteres.deleteRecord()
			}
			if (viaper_to_hojauti_cateteres.getSize()>0){
				viaper_to_hojauti_cateteres.deleteRecord()
			}
			for(var i=1;i<=7;i++){
				forms.tabless_principal.elements.tabs_154.setTabFGColorAt(i,"#040404")
			}
		}
	globals.vEstadoAccion=''
	globals.vFecha=null
	globals.vHora=null
	globals.renglon=0
	globals.renglon2=0
	globals.renglon3=0
	globals.renglon4=0
	globals.renglon5=0
	globals.renglon6=0
	globals.renglon7=0
	globals.renglon8=0
	globals.renglon9=0
	globals.renglon10=0
	elements.btn_nueva.visible=true
	elements.box_fecha_hora.visible=false
	elements.box_hora.visible=false
	elements.btn_graba.visible=true
	elements.btn_graba.enabled=false
	elements.fld_fecha.visible=false
	elements.lbl_1.visible=false
	elements.lbl_2.visible=false
	elements.lbl_3.visible=false
	elements.lbl_4.visible=false
	elements.btn_consulta.visible=false
	elements.btn_modifica.visible=false
	elements.btn_nuevo_registro.visible=false
	elements.tabs_154.visible=false
	elements.btn_salir.visible=true
	globals.vGrabado=false
	globals.vNuevaHoja=false
	globals.nuevo_registro=false
	globals.vExisteEvolucion=false
	globals.vCultivos=false
	globals.vArm="Ninguno"
	globals.vTipoArritmias='arritmia'
	globals.vTipo='hemorragia'	
	globals.vTipoOtrosIngresos='otrosing'
	globals.vTipoOtrosEgresos='otrosegr'
	globals.vTipoOtrosEstudios='otrosestud'	
	globals.vTipoHeridas='heridas'	
	globals.vTipoOtrasValoriz='otrosvalor'
	globals.vTipoOtrosPlan='otrosplan'	
	globals.textoObser=''
	globals.vFechayHora=''	
	globals.vModifica=false
	globals.InicializoRegistroGlobal()
	application.updateUI()
	//for(var j=1;j<=7;j++){
		//forms.tabless_principal.elements.tabs_154.setTabFGColorAt(j,"#fb0000")
	//}	
	if(vhiscli_to_hojauti.getSize()>0){
		elements.btn_consulta.visible=true
		if(globals.vSupervisor){
			elements.btn_modifica.visible=true
		}else{
			elements.btn_modifica.visible=false
		}
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"495C883C-83D0-41D6-A331-0B6171EFF748"}
 */
function onAction_btn_salir(event) {
	plugins.scheduler.removeJob('Actualiza Fecha')
	var i=0;
	if(!globals.vNuevaHoja){
		for(i=1;i<=7;i++){
		    forms.tabless_principal.elements.tabs_154.setTabFGColorAt(i,"#040404")
		}
		globals.vFechayHora=''
		forms.frm_elige_menu.controller.show()
	}else{
		if(globals.vGrabado){
			for(i=1;i<=7;i++){
			    forms.tabless_principal.elements.tabs_154.setTabFGColorAt(i,"#040404")
			}
			globals.vFechayHora=''
			forms.frm_elige_menu.controller.show()
		}else{
			var boton_presionado=plugins.dialogs.showQuestionDialog("¡Atención!","¿Sale sin Grabar lo ingresado?","Si","No")
			if(boton_presionado=="Si"){
				if (vs_to_hojauti_block.getSize()>0){
					vs_to_hojauti_block.deleteRecord()
					databaseManager.refreshRecordFromDatabase(vs_to_hojauti_block, -1);
					//vs_to_hojauti.clear()
				}
				if (vs_to_hojauti_cultivos.getSize()>0){
					if (globals.vCultivos){
						vs_to_hojauti_cultivos.deleteRecord()
						databaseManager.refreshRecordFromDatabase(vs_to_hojauti_cultivos, -1);
					}	
				}
				if (vs_to_hojauti_items.getSize()>0){
					vs_to_hojauti_items.deleteAllRecords()
					databaseManager.refreshRecordFromDatabase(vs_to_hojauti_items, -1);
				}
				if (arritmias_to_hojauti_items.getSize()>0){
					arritmias_to_hojauti_items.deleteAllRecords()
					databaseManager.refreshRecordFromDatabase(arritmias_to_hojauti_items, -1);
				}
				if (heridas_to_hojauti_items.getSize()>0){
					heridas_to_hojauti_items.deleteAllRecords()
					databaseManager.refreshRecordFromDatabase(heridas_to_hojauti_items, -1);
				}
				if (otras_valoriz_to_hojauti_items.getSize()>0){
					otras_valoriz_to_hojauti_items.deleteAllRecords()
					databaseManager.refreshRecordFromDatabase(otras_valoriz_to_hojauti_items, -1);
				}
				if (otros_egresos_to_hojauti_items.getSize()>0){
					otros_egresos_to_hojauti_items.deleteAllRecords()
					databaseManager.refreshRecordFromDatabase(otros_egresos_to_hojauti_items, -1);
				}
				if (otros_estudios_to_hojauti_otros_estudios.getSize()>0){
					otros_estudios_to_hojauti_otros_estudios.deleteAllRecords()
					databaseManager.refreshRecordFromDatabase(otros_estudios_to_hojauti_otros_estudios, -1);
				}
				if (otros_ingresos_to_hojauti_items.getSize()>0){
					otros_ingresos_to_hojauti_items.deleteAllRecords()
					databaseManager.refreshRecordFromDatabase(otros_ingresos_to_hojauti_items, -1);
				}
				if (otros_plan_to_hojauti_items.getSize()>0){
					otros_plan_to_hojauti_items.deleteAllRecords()
					databaseManager.refreshRecordFromDatabase(otros_plan_to_hojauti_items, -1);
				}
				if (balon_to_hojauti_cateteres.getSize()>0){
					balon_to_hojauti_cateteres.deleteRecord()
					databaseManager.refreshRecordFromDatabase(balon_to_hojauti_cateteres, -1);
				}
				if (drenajep_to_hojauti_cateteres.getSize()>0){
					drenajep_to_hojauti_cateteres.deleteRecord()
					databaseManager.refreshRecordFromDatabase(drenajep_to_hojauti_cateteres, -1);
				}
				if (k108_to_hojauti_cateteres.getSize()>0){
					k108_to_hojauti_cateteres.deleteRecord()
					databaseManager.refreshRecordFromDatabase(k108_to_hojauti_cateteres, -1);
				}
				if (sng_to_hojauti_cateteres.getSize()>0){
					sng_to_hojauti_cateteres.deleteRecord()
					databaseManager.refreshRecordFromDatabase(sng_to_hojauti_cateteres, -1);
				}
				if (sonves_to_hojauti_cateteres.getSize()>0){
					sonves_to_hojauti_cateteres.deleteRecord()
					databaseManager.refreshRecordFromDatabase(sonves_to_hojauti_cateteres, -1);
				}
				if (pic_to_hojauti_cateteres.getSize()>0){
					pic_to_hojauti_cateteres.deleteRecord()
					databaseManager.refreshRecordFromDatabase(pic_to_hojauti_cateteres, -1);
				}
				if (swan_to_hojauti_cateteres.getSize()>0){
					swan_to_hojauti_cateteres.deleteRecord()
					databaseManager.refreshRecordFromDatabase(swan_to_hojauti_cateteres, -1);
				}
				if (tam_to_hojauti_cateteres.getSize()>0){
					tam_to_hojauti_cateteres.deleteRecord()
					databaseManager.refreshRecordFromDatabase(tam_to_hojauti_cateteres, -1);
				}
				if (traqueo_to_hojauti_cateteres.getSize()>0){
					traqueo_to_hojauti_cateteres.deleteRecord()
					databaseManager.refreshRecordFromDatabase(traqueo_to_hojauti_cateteres, -1);
				}
				if (viacen_to_hojauti_cateteres.getSize()>0){
					viacen_to_hojauti_cateteres.deleteRecord()
					databaseManager.refreshRecordFromDatabase(viacen_to_hojauti_cateteres, -1);
				}
				if (viaper_to_hojauti_cateteres.getSize()>0){
					viaper_to_hojauti_cateteres.deleteRecord()
					databaseManager.refreshRecordFromDatabase(viaper_to_hojauti_cateteres, -1);
				}
				for(i=1;i<=7;i++){
				    forms.tabless_principal.elements.tabs_154.setTabFGColorAt(i,"#040404")
				}
				globals.vFechayHora=''
				globals.vNuevaHoja=false
				globals.nuevo_registro=false
				globals.textoObser=''
				globals.vModifica=false
				//limpia_variables()	
				forms.frm_elige_menu.controller.show()
				
			}
		}	
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"0A13C2D7-939F-4F90-8BB5-87D89C4B3744"}
 */
function onAction_btn_nueva(event) {
	globals.vFecha=application.getServerTimeStamp()
	globals.vHora_aux=globals.vFecha.getHours()*100
	globals.vHora=null
	elements.btn_nueva.visible=false
	elements.btn_consulta.visible=false
	elements.btn_modifica.visible=false
	elements.lbl_1.visible=false
	elements.box_fecha_hora.visible=false
	elements.lbl_2.visible=true
	elements.lbl_3.visible=true
	elements.fld_fecha.visible=true
	elements.box_hora.visible=true
	elements.fld_fecha.enabled=true
	elements.box_hora.enabled=true
	elements.btn_salir.visible=false
	globals.vGrabado=false
	globals.vNuevaHoja=true
	globals.nuevo_registro=false
	globals.textoObser=''
	elements.btn_nuevo_registro.visible=true
	globals.vEstadoAccion="ALTA"
	globals.vMuestraIngresa="Ingresar "
	globals.vModifica=false	
	application.updateUI()
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"E0092884-6DDC-4282-A1FB-0355AF8830D7"}
 */
function onAction(event) {
	globals.vHora=globals.vHora_aux
	vs_to_hojauti_block.loadAllRecords()
	if (vs_to_hojauti_block.getSize()>0){
		globals.vGrabado=true
		globals.vNuevaHoja=false
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"A96A326E-9ED0-464F-80F1-57E61F95CFF3"}
 * @AllowToRunInFind
 */
function onAction_btn_nuevo_registro(event) {
	if(globals.vHora==null){
		globals.vHora=globals.vHora_aux
	}
	var clienttime = application.getServerTimeStamp();
	var horacarga = clienttime.getHours()*100+clienttime.getMinutes()
	globals.vHoraActual = clienttime.getHours()*100+clienttime.getMinutes()
	globals.vFechaActualEnfermeria = application.getServerTimeStamp();
	globals.vFechaActualEnfermeria=globals.vFechaActualEnfermeria.setHours(0)
	globals.vFechaActualEnfermeria=globals.vFechaActualEnfermeria.setMinutes(0)
	globals.vFechaActualEnfermeria=globals.vFechaActualEnfermeria.setSeconds(0)
	globals.vFechaActualEnfermeria=globals.vFechaActualEnfermeria.setMilliseconds(0)
	globals.vFecha=globals.vFecha.setHours(0)
	globals.vFecha=globals.vFecha.setMinutes(0)
	globals.vFecha=globals.vFecha.setSeconds(0)
	globals.vFecha=globals.vFecha.setMilliseconds(0)
	vs_to_hojauti_block.find()
	vs_to_hojauti_block.search()
	var hora_tope_inferior = 0
	var hora_tope_inferior_sql = 0
	if(globals.vFecha==globals.vFechaActualEnfermeria){
		if(globals.vHoraActual>=600&&globals.vHoraActual<=1400){
			hora_tope_inferior_sql = 600
			hora_tope_inferior = 500
		}else{
			if(globals.vHoraActual>=1400&&globals.vHoraActual<=2200){
				hora_tope_inferior_sql = 1400
				hora_tope_inferior = 1300
			}else{
				if(globals.vHoraActual>=2200&&globals.vHoraActual<=2300){
					hora_tope_inferior_sql = 2200
					hora_tope_inferior = 2100
				}else{
					hora_tope_inferior_sql = 0
					hora_tope_inferior = 0
				}
			}	
		}
	}else{
		if(globals.vFecha==globals.vFechaActualEnfermeria-1){
			hora_tope_inferior_sql = 2200
			hora_tope_inferior = 2200
		}
	}
	if (globals.vFecha<globals.vFechaIngreso){
		plugins.dialogs.showInfoDialog("Fecha Errónea","Fecha de Planilla anterior al Ingreso del paciente","Ok")
		globals.vGrabado=true
		globals.vNuevaHoja=false
		globals.nuevo_registro=false
		globals.vFecha=null
		globals.vHora=null
	}else{
		if(globals.vFecha==globals.vFechaIngreso&&globals.vHora<globals.vHoraIngreso){
			plugins.dialogs.showInfoDialog("Hora Errónea","Hora de Planilla anterior al Ingreso del Paciente","Ok")
			globals.vGrabado=true
			globals.vNuevaHoja=false
			globals.nuevo_registro=false
			globals.vHora=null
		}else{
			if(globals.vFecha>globals.vFechaActualEnfermeria){
				plugins.dialogs.showInfoDialog("Fecha Errónea","Fecha de Planilla mayor a la actual","Ok")
				globals.vGrabado=true
				globals.vNuevaHoja=false
				globals.nuevo_registro=false
				globals.vHora=null
			}else{
				if(globals.vFecha==globals.vFechaActualEnfermeria&&globals.vHora>globals.vHoraActual){
					plugins.dialogs.showInfoDialog("Hora Errónea","Hora de Planilla mayor a la actual","Ok")
					globals.vGrabado=true
					globals.vNuevaHoja=false
					globals.nuevo_registro=false
					globals.vHora=null
				}else{
					if(globals.vFecha==globals.vFechaActualEnfermeria&&globals.vHora<hora_tope_inferior){
						plugins.dialogs.showInfoDialog("Hora Errónea","Hora de Planilla menor al inicio del Turno actual","Ok")
						globals.vGrabado=true
						globals.vNuevaHoja=false
						globals.nuevo_registro=false
						globals.vHora=null
					}else{
						if(globals.vFecha==globals.vFechaActualEnfermeria-1&&globals.vHora<hora_tope_inferior){
							plugins.dialogs.showInfoDialog("Hora Errónea","Hora de Planilla menor al inicio del Turno actual","Ok")
							globals.vGrabado=true
							globals.vNuevaHoja=false
							globals.nuevo_registro=false
							globals.vHora=null
						}else{	
							if(globals.vFecha<globals.vFechaActualEnfermeria-1){
								plugins.dialogs.showInfoDialog("Fecha Errónea","Fecha de Planilla menor al inicio del Turno actual","Ok")
								globals.vGrabado=true
								globals.vNuevaHoja=false
								globals.nuevo_registro=false
								globals.vHora=null
							}else{
							if(vs_to_hojauti_block.getSize()<1){
								vs_to_hojauti_block.newRecord()
								vs_to_hojauti_block.tipo_opera = globals.vTipoOperador
								vs_to_hojauti_block.nro_operador = globals.vLegajo
								vs_to_hojauti_block.fecha_carga = application.getServerTimeStamp();
								vs_to_hojauti_block.hora_carga = horacarga
								
								vs_to_hojauti_block.ip_uti=application.getIPAddress()
								try{
									databaseManager.saveData(vs_to_hojauti_block.getRecord(1))
								}catch (msg){
							    	(plugins.dialogs.showInfoDialog("Error",msg.message,"ok"))
							    }
								
								globals.vGrabado=false
								globals.vNuevaHoja=true
								globals.nuevo_registro=true
								elements.btn_nuevo_registro.visible=false
								elements.box_hora.editable=false
								elements.fld_fecha.editable=false
								elements.box_hora.enabled=false
								elements.fld_fecha.enabled=false
								globals.vExisteEvolucion=false
								globals.vCateteres=true
								globals.vHoraInferior=hora_tope_inferior_sql
								globals.vUltimaPlanilla='No'
								globals.valida_existencia_evolucion()
								//if(globals.vExisteEvolucion){

									//globals.vUltimaPlanilla = plugins.dialogs.showQuestionDialog('Seleccione el Tipo de Planilla', '¿Es la última planilla del Turno?', 'Si', 'No');
								//}
								globals.InicializoRegistroGlobal()
								globals.valida_campos_obligatorios_completos(globals.name_tabless)
								globals.HabilitaDeshabilitaCampos('frm_parametros','nuevo')
								globals.HabilitaDeshabilitaCampos('frm_valoracion','nuevo')
								globals.HabilitaDeshabilitaCampos('frm_valoracion_2','nuevo')
								globals.HabilitaDeshabilitaCampos('frm_valoracion_3','nuevo')
								globals.HabilitaDeshabilitaCampos('frm_balance_ingresos','nuevo')
								globals.HabilitaDeshabilitaCampos('frm_balance_egresos','nuevo')
								globals.HabilitaDeshabilitaCampos('frm_plan_cuidados','nuevo')
								globals.HabilitaDeshabilitaCampos('frm_cultivos','nuevo')
								globals.HabilitaDeshabilitaCampos('frm_cateteres','nuevo')
								globals.HabilitaDeshabilitaCampos('frm_observaciones','nuevo')
								globals.textoObser=''
								forms.frm_parametros.elements.lbl_factor_hgt.visible=false
								forms.frm_parametros.elements.lbl_cant_hgt.visible=false
								forms.frm_parametros.elements.factor_correc_hgt.visible=false
								forms.frm_parametros.elements.factor_hgt_cant.visible=false
								elements.tabs_154.visible=true
								elements.tabs_154.tabIndex=1
								//for (var i = 0; i < vs_to_hojauti.alldataproviders.length-1; i++) {
								//	var name = vs_to_hojauti.alldataproviders[i]
								//	application.output(i)
								//	application.output(name)
								//}	
						
							}else{
								plugins.dialogs.showInfoDialog("Registro Existente","Horario ya ingresado","Ok")
								globals.vGrabado=true
								globals.vNuevaHoja=false
								globals.nuevo_registro=false
							}
						  }
						}	
					}
				}	
			}
		}
	}
}

/**
 * @properties={typeid:24,uuid:"BA351F1B-49D6-486C-B56D-E0D2C2E60D4E"}
 */
function mtActualizaFecha() {
	globals.vFechaActualEnfermeria =application.getServerTimeStamp() 
		//utils.timestampToDate(new Date)
}

/**
 * Callback method when form is destroyed.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"6468447E-5EBF-469E-AEB2-2FF1FA06739B"}
 */
function onUnload_tabless_principal(event) {
	plugins.scheduler.removeJob('Actualiza Fecha')
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
 * @properties={typeid:24,uuid:"B0473812-B96B-4225-877B-85AC464BCEEC"}
 */
function onDataChange(oldValue, newValue, event) {
	var fecyhor = new Array()
	fecyhor=globals.vFechayHora.split('|')
	var fec = new Array()
    fec = fecyhor[0].split('/')
    var hor = new Array()
    hor = fecyhor[1].split(':')
    var fec_aux = new Date(fec[2], fec[1]-1, fec[0]);
    globals.vFecha=fec_aux
    globals.vHora=utils.stringToNumber(hor[0]+hor[1])
    if (vs_to_hojauti.getSize()>0){
    	globals.vArm=vs_to_hojauti.param_arm
    	globals.vVni=vs_to_hojauti.param_vni
    	globals.HabilitaDeshabilitaCampos('frm_parametros','consulta')
    	globals.HabilitaDeshabilitaCampos('frm_valoracion','consulta')
    	globals.HabilitaDeshabilitaCampos('frm_valoracion_2','consulta')
    	globals.HabilitaDeshabilitaCampos('frm_valoracion_3','consulta')
    	globals.HabilitaDeshabilitaCampos('frm_balance_ingresos','consulta')
    	globals.HabilitaDeshabilitaCampos('frm_balance_egresos','consulta')
    	globals.HabilitaDeshabilitaCampos('frm_plan_cuidados','consulta')
    	globals.HabilitaDeshabilitaCampos('frm_cultivos','consulta')
    	globals.HabilitaDeshabilitaCampos('frm_cateteres','consulta')
		globals.HabilitaDeshabilitaCampos('frm_cateter_balon','consulta')
		globals.HabilitaDeshabilitaCampos('frm_cateter_drenaje_pleural','consulta')
		globals.HabilitaDeshabilitaCampos('frm_cateter_k108','consulta')
		globals.HabilitaDeshabilitaCampos('frm_cateter_pic','consulta')
		globals.HabilitaDeshabilitaCampos('frm_cateter_sng','consulta')
		globals.HabilitaDeshabilitaCampos('frm_cateter_sonda_vesical','consulta')
		globals.HabilitaDeshabilitaCampos('frm_cateter_swan_ganz','consulta')
		globals.HabilitaDeshabilitaCampos('frm_cateter_tam','consulta')
		globals.HabilitaDeshabilitaCampos('frm_cateter_traqueo','consulta')
		globals.HabilitaDeshabilitaCampos('frm_cateter_via_central','consulta')
		globals.HabilitaDeshabilitaCampos('frm_cateter_via_periferica','consulta')
		globals.HabilitaDeshabilitaCampos('frm_observaciones','consulta')
    }
    elements.btn_consulta.visible=false
    elements.tabs_154.visible=true
	elements.tabs_154.tabIndex=1
	return true
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"29E6040F-7397-429E-AE88-49E1283C552D"}
 */
function onAction1_btn_limpia(event) {
	if(globals.vNuevaHoja&&!globals.vGrabado&&globals.nuevo_registro){
		var boton_presionado=plugins.dialogs.showQuestionDialog("¡Atención!","Perderá todos los cambios. ¿Desea continuar?","Si","No")
		if(boton_presionado=="Si"){
			onAction_btn_limpia(event)
		}
	}else{
		onAction_btn_limpia(event)
	}
}

/**
 * Callback method when the user changes tab in a tab panel or divider position in split pane.
 *
 * @param {Number} previousIndex index of tab shown before the change
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"62C3CA65-3D38-42DD-8BD4-6232C3F0B70D"}
 */
function onTabChange_tab154(previousIndex, event) {
	if(elements.tabs_154.tabIndex==9){
		if(globals.vNuevaHoja){
			globals.HabilitaDeshabilitaCampos('frm_cateter_balon','nuevo')
			globals.HabilitaDeshabilitaCampos('frm_cateter_drenaje_pleural','nuevo')
			globals.HabilitaDeshabilitaCampos('frm_cateter_k108','nuevo')
			globals.HabilitaDeshabilitaCampos('frm_cateter_pic','nuevo')
			globals.HabilitaDeshabilitaCampos('frm_cateter_sng','nuevo')
			globals.HabilitaDeshabilitaCampos('frm_cateter_sonda_vesical','nuevo')
			globals.HabilitaDeshabilitaCampos('frm_cateter_swan_ganz','nuevo')
			globals.HabilitaDeshabilitaCampos('frm_cateter_tam','nuevo')
			globals.HabilitaDeshabilitaCampos('frm_cateter_traqueo','nuevo')
			globals.HabilitaDeshabilitaCampos('frm_cateter_via_central','nuevo')
			globals.HabilitaDeshabilitaCampos('frm_cateter_via_periferica','nuevo')	
			
		}else{
			globals.HabilitaDeshabilitaCampos('frm_cateter_balon','consulta')
			globals.HabilitaDeshabilitaCampos('frm_cateter_drenaje_pleural','consulta')
			globals.HabilitaDeshabilitaCampos('frm_cateter_k108','consulta')
			globals.HabilitaDeshabilitaCampos('frm_cateter_pic','consulta')
			globals.HabilitaDeshabilitaCampos('frm_cateter_sng','consulta')
			globals.HabilitaDeshabilitaCampos('frm_cateter_sonda_vesical','consulta')
			globals.HabilitaDeshabilitaCampos('frm_cateter_swan_ganz','consulta')
			globals.HabilitaDeshabilitaCampos('frm_cateter_tam','consulta')
			globals.HabilitaDeshabilitaCampos('frm_cateter_traqueo','consulta')
			globals.HabilitaDeshabilitaCampos('frm_cateter_via_central','consulta')
			globals.HabilitaDeshabilitaCampos('frm_cateter_via_periferica','consulta')
		}
	}
	if(elements.tabs_154.tabIndex==1){
		
		if(vs_to_hojauti.param_arm==1||vs_to_hojauti.param_arm==2){
			globals.vArm="A.R.M."
		}else{
			if(vs_to_hojauti.param_vni==null||vs_to_hojauti.param_vni==0){
				globals.vArm="Ninguno"
			}else{
				globals.vArm="V.N.I."
			}
		}
	}
}

/**
 * @properties={typeid:24,uuid:"C6D46C45-7747-4DDA-BB5E-1B4DEEDA07B5"}
 */
function limpia_variables() {
	globals.vEstadoAccion=''
	globals.vFecha=null
	globals.vHora=null
	globals.renglon=0
	globals.renglon2=0
	globals.renglon3=0
	globals.renglon4=0
	globals.renglon5=0
	globals.renglon6=0
	globals.renglon7=0
	globals.renglon8=0
	globals.renglon9=0
	globals.renglon10=0
	elements.btn_nueva.visible=true
	elements.box_fecha_hora.visible=false
	elements.box_hora.visible=false
	elements.btn_graba.visible=true
	elements.btn_graba.enabled=false
	elements.fld_fecha.visible=false
	elements.lbl_1.visible=false
	elements.lbl_2.visible=false
	elements.lbl_3.visible=false
	elements.lbl_4.visible=false
	elements.btn_consulta.visible=false
	elements.btn_modifica.visible=false
	elements.btn_nuevo_registro.visible=false
	elements.tabs_154.visible=false
	globals.vGrabado=false
	globals.vNuevaHoja=false
	globals.vExisteEvolucion=false
	globals.vCultivos=false
	globals.vArm="Ninguno"
	globals.vTipoArritmias='arritmia'
	globals.vTipo='hemorragia'	
	globals.vTipoOtrosIngresos='otrosing'
	globals.vTipoOtrosEgresos='otrosegr'
	globals.vTipoOtrosEstudios='otrosestud'	
	globals.vTipoHeridas='heridas'	
	globals.vTipoOtrasValoriz='otrosvalor'
	globals.vTipoOtrosPlan='otrosplan'	
	globals.textoObser=''
	globals.vFechayHora=''
	globals.vModifica=false
	//for(var j=1;j<=7;j++){
		//forms.tabless_principal.elements.tabs_154.setTabFGColorAt(j,"#fb0000")
	//}	
	if(vhiscli_to_hojauti.getSize()>0){
		elements.btn_consulta.visible=true
		if(globals.vSupervisor){
			elements.btn_modifica.visible=true
		}else{
			elements.btn_modifica.visible=false
		}
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"598CD2A8-6866-460D-B8DE-64085429AC80"}
 */
function onAction_btn_modifica(event) {
	elements.btn_nueva.visible=false
	elements.btn_modifica.visible=false
	elements.btn_consulta.visible=false
	elements.lbl_1.visible=true
	elements.box_fecha_hora.visible=true
	globals.vGrabado=true
	globals.vNuevaHoja=false
	globals.nuevo_registro=false
	globals.vEstadoAccion="MODIFICA"
	globals.vMuestraIngresa="Ingresar "
	globals.vModifica=true
	globals.Actualizo_hojas_horarias()
	elements.box_fecha_hora.requestFocus()
}
