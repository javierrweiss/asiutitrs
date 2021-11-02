/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"967BB252-292C-4632-9CCA-FB613BFAED90",variableType:4}
 */
var frm_estado_habita = 0; 

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"2958C247-D7EE-4952-882C-3BDA6B4D6369",variableType:4}
 */
var frm_individual = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"1FD1CEE8-9C70-4D59-A576-E041D7964D1F",variableType:4}
 */
var frm_acompa = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"F7EA5C87-551D-4CFD-B7D8-3BB79DC7CBF3",variableType:4}
 */
var frm_cant_camas = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"2F49F2AA-9574-4CD0-9AEA-204FBEC66796",variableType:4}
 */
var frm_total_pacientes = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"9269EC85-2ACB-4731-A676-401F24856FD5",variableType:4}
 */
var frm_total_cant_camas = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"3FB91E96-2426-416C-B11E-4506C042C7CD",variableType:4}
 */
var frm_hayoxi = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"B72567A6-7D19-46F0-B43B-7B75AA2F97C9",variableType:4}
 */
var frm_tiene_telefono = 0;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"AE792EA7-4060-437A-97FB-451C077CA847",variableType:4}
 */
var frm_tiene_control_aire = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"EB394615-0972-4EC9-90F0-52C5161E7AA4",variableType:4}
 */
var frm_solo = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"81A4B6AF-CD51-47AE-BE4C-D7172C7CE17D",variableType:4}
 */
var frm_alta = 0;

/**
 * @properties={typeid:35,uuid:"E0FDBFA2-3DA7-4B4E-A411-3AF8BD58E936",variableType:-4}
 */
var frm_aux_estado_habita = new Array();

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"394E8903-BDA5-43FF-9903-C690D483F735",variableType:-4}
 */
var frm_pos = new Array;
/**
 * @properties={typeid:35,uuid:"4C89F6A3-23F5-4D1E-A3B3-DA756118BCBD",variableType:-4}
 */
var frm_ds2 = new Array;
/**
 * @properties={typeid:35,uuid:"9D90A711-7880-4F2A-A75F-0C9A972A0292",variableType:-4}
 */
var frm_ds_aut_acomp = new Array;
/**
 * @properties={typeid:35,uuid:"AC83690A-BE95-424C-BE5F-F75F7CE37343",variableType:-4}
 */
var frm_ds_visitas = new Array;
/**
 * @properties={typeid:35,uuid:"1F3E6F6F-3AF3-4DC3-966E-E1BB2865BA96",variableType:-4}
 */
var frm_ds_respirador = new Array;
/**
 * @properties={typeid:35,uuid:"6D123E71-1A2F-4EB6-AF0C-05DC9F2072EA",variableType:-4}
 */
var frm_ds_telefono = new Array;
/**
 * @properties={typeid:35,uuid:"28F53117-5ADB-4EAA-A357-8DBF4B135284",variableType:-4}
 */
var frm_ds_ctrl_aire = new Array;
/**
 * @properties={typeid:35,uuid:"84CE429A-DF92-43E4-BB07-4771D0C79738",variableType:-4}
 */
var frm_ds_oxigeno = new Array;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"9BBDC8F0-2393-4674-93D0-2B18A96230D0",variableType:4}
 */
var frm_es_osecac = 0;

/**
 * @properties={typeid:24,uuid:"C22E66B8-EDCD-4028-BC3B-3054841AD52A"}
 */
function onShow_inicializa() {
	globals.gbl_pres_guardia = 0
	// frm_pos contiene la última posición para la columna que corresponda
	frm_pos = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
	
	// Totales para Estado de Guardia hab. 30 y 321
	globals.gbl_hab_30_est_guardia  = [0,30,0,0,0,0,0,0]
    globals.gbl_hab_321_est_guardia = [0,321,0,0,0,0,0,0]
    var j    
	// Totales para Resumen de estado de ocupación por sector
	globals.gbl_res_ocupacion = [['',0,0,0,0,0,0,0],['',0,0,0,0,0,0,0],['',0,0,0,0,0,0,0],['',0,0,0,0,0,0,0],
	                             ['',0,0,0,0,0,0,0],['',0,0,0,0,0,0,0],['',0,0,0,0,0,0,0],['',0,0,0,0,0,0,0],
	                             ['',0,0,0,0,0,0,0],['',0,0,0,0,0,0,0],['',0,0,0,0,0,0,0],['',0,0,0,0,0,0,0],
								 ['',0,0,0,0,0,0,0],['',0,0,0,0,0,0,0],['',0,0,0,0,0,0,0],['',0,0,0,0,0,0,0],
								 ['',0,0,0,0,0,0,0],['',0,0,0,0,0,0,0],['',0,0,0,0,0,0,0],['',0,0,0,0,0,0,0]]
 // Totales para Resumen de estado de ocupación por cobertura 
    for (j = 0; j < 100; j++){
    	globals.gbl_res_ocupacion_cober[j] = ['zzz0',0,'',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    	globals.gbl_res_reserva_cober[j] = ['zzz0',0,'',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    }    
    //elements.lbl_procesando.visible = true
	//application.updateUI()
	
    var aArgs = new Array();
	var SQL = "select Hab_NroHabi, Hab_Uso, Hab_Piso, Hab_Pabellon, Hab_contelef, Hab_MaxCamasReales, Hab_conctrlAire " 
	        + "from tbc_HABITA "
	var _ds = databaseManager.getDataSetByQuery("maestros", SQL, aArgs, -1);
	
	if (_ds.getMaxRowIndex() == 0){
		 globals.showWarningDialog('No hay datos que mostrar', null, 'Ok',null, null, null);
	}else{

        frm_total_pacientes = 0
		frm_total_cant_camas = 0
		var aux_h = 1
		var $pos
		var $max
		aArgs = new Array();
        
        SQL = "select Cam_utilstand, Cam_est, Cam_tipcama, Cam_oxi_sn, Cam_oxi_hab, ADM.adm_aislado, Cam_histclin, Cam_habi, Cam_cama, Cam_tiphistclin, " 
            +"if (cam_tiphistclin = 1 , HCAB.histcabApellnom, ADM.Adm_ApelNom) Nombre, "
		    +"if (cam_tiphistclin = 1 , HCAB.histcabfechanac, ADM.adm_fecnac) Edad, "
		    +"if (cam_tiphistclin = 1 , HCAB.histcabsexo, ADM.adm_sexo) Sexo, "
		    +"Cam_utilactual_1, Cam_utilactual_2, Cam_utilactual_3, Cam_utilactual_4, Cam_utilactual_5, "        
		    +"if (cam_tiphistclin = 1 , '', PAT.Pat_Descrip) Patologia, "
		    +"if (cam_tiphistclin = 1 , OBRA.Obr_razonsoc, OBR.Obr_razonsoc) Obras, "
		    +"if (cam_tiphistclin = 1 , HCAB.histcabintobsamd, ADM.adm_fecing) Fecha_ing, "
		    +"if (cam_tiphistclin = 1 , HCAB.histcabintobsamd, ADM.adm_fecaltaadmin) Fecha_alta_adm, "
		    +"if (cam_tiphistclin = 1 , HCAB.histcabintobshor, ADM.adm_horing) Hora_ing, "
		    +"if (cam_tiphistclin = 1 , HCAB.histcabintobshor, ADM.adm_horaltaadmin) Hora_alta_adm, "
		    +"if (cam_tiphistclin = 1 , 0, ADM.adm_fecanulepic) Fec_anul_epic, "
		    +"if (cam_tiphistclin = 1 , 0, ADM.adm_ambulancia) Ambulancia, "
		    +"if (cam_tiphistclin = 1 , 0, ADM.adm_fecepic) Fecha_epic, "
		    +"if (cam_tiphistclin = 1 , 0, ADM.adm_pasepiso) Pase_piso, "
		    +"if (cam_tiphistclin = 1 , 0, ADM.adm_fecegresanat) Fecha_egreso, "
		    +"if (cam_tiphistclin = 1 , '', UTILC.Utic_UsoAbrev) Utilcama, "
		    
            +"if (cam_tiphistclin = 1 , 0, " 
            +"        if (ADM.Adm_FecAltaAdmin > 0, " 
            +"            if (ADM.Adm_Ambulancia = 1 or ADM.Adm_Ambulancia = 2, 6, 7) "
            +"        ,  "
            +"            if (ADM.Adm_FecAnulEpic > 0, "
            +"               if (ADM.Adm_Ambulancia = 1 or ADM.Adm_Ambulancia = 2, 8, 9) "
            +"            , "
            +"               if (ADM.Adm_FecEpic > 0, "
            +"                   if (ADM.Adm_PasePiso = 0, "
            +"                      if (ADM.Adm_Ambulancia = 1 or ADM.Adm_Ambulancia = 2, " 
            +"                          if (ADM.Adm_FecEgreSanat > " + globals.gbl_fecha_hoy_int + ", 11, 12) "                             
            +"                      , "
            +"                          if (ADM.Adm_FecEgreSanat > " + globals.gbl_fecha_hoy_int + ", 21, 22) "
            +"                      ) "                                 
            +"                   , "
            +"                      if (ADM.Adm_PasePiso = 1, "
            +"                         if (ADM.Adm_Ambulancia = 1 or ADM.Adm_Ambulancia = 2, "                              
            +"                            if (ADM.Adm_FecEgreSanat > " + globals.gbl_fecha_hoy_int + ", 41, 42) "                             
            +"                         , "
            +"                            if (ADM.Adm_FecEgreSanat > " + globals.gbl_fecha_hoy_int + ", 31, 32) "                                  
            +"                         ) "
            +"                      ,0 "                                 
            +"                      ) "
            +"                   ) "                     
            +"               ,0 "
            +"               ) "
            +"            ) "
            +"        ) "    
            +"    ) Alta, HABITA.hab_baniodiscapa, HABITA.hab_dialisis, ADM.Adm_PasePiso, "
            +" HABITA.hab_consnumespera, if (PAN.panahiscli > 0 ,PAN.panaestado, 9) Pan, "
            +"if (cam_tiphistclin = 1 , OBRA.Obr_Codigo, OBR.Obr_Codigo) CodObras, '','', " 
            +"if (cam_tiphistclin = 1 , OBRA.Obr_EsPami, OBR.Obr_EsPami) Es_Pami ,"
            +"if (cam_tiphistclin = 1 , OBRA.Obr_Ctamadre, OBR.Obr_Ctamadre) Ctamadre ,"
            +"if (cam_tiphistclin = 1 , Cam_utilstand, ADM.adm_utiliza) Utilactual, ADM.adm_telefRespon, ADM.adm_telefefono "
            +"from tbc_CAMAS "
            +"left join asistencial.tbc_admision ADM on ADM.adm_histclin = Cam_histclin " 
            +"left join asistencial.tbc_hist_cab_new HCAB  on HCAB.histcabnrounico = Cam_histclin "
            +"left join tbc_patologia PAT on PAT.Pat_Codi = ADM.Adm_PatolIng "
            +"left join tbc_obras OBR on OBR.Obr_Codigo = ADM.Adm_ObrSoc "
            +"left join tbc_obras OBRA  on OBRA.Obr_Codigo = HCAB.HistCabObra "
            +"left join tbc_utilcama UTILC  on UTILC.Utic_Utiliza = ADM.Adm_pasesec "
            +"left join tbc_habita HABITA on HABITA.Hab_nrohabi = Cam_habi "
            +"left join tbc_panalpac PAN on PAN.panahiscli = Cam_histclin "
            
            +"order by Cam_habi asc, Cam_cama asc "	
        frm_ds2 = databaseManager.getDataSetByQuery("maestros", SQL, aArgs, -1);												
        
        //carga aut_acomp
        aArgs = new Array();
        SQL = "select Cam_habi, Cam_Cama, Cam_Est, Cam_HistClin, auac_fechadesde, auac_fechahasta " 
            +"from tbc_CAMAS "
			+"inner join asistencial.tbc_aut_acomp on tbc_aut_acomp.auac_hclinica = Cam_histclin "
            +"order by Cam_HistClin asc "	
        frm_ds_aut_acomp = databaseManager.getDataSetByQuery("maestros", SQL, aArgs, -1);
        
      //carga visitas
        aArgs = new Array();
        SQL = "select Cam_habi, Cam_Cama, Cam_Est, Cam_HistClin, visi_fechegre, visi_hemodador " 
            +"from tbc_CAMAS "
			+"inner join asistencial.tbc_visitas on tbc_visitas.visi_histclin = Cam_histclin "
			+"and tbc_visitas.visi_tipoadmi = Cam_tiphistclin "
            +"order by Cam_HistClin asc "	
        frm_ds_visitas = databaseManager.getDataSetByQuery("maestros", SQL, aArgs, -1);
        
        //carga respirador
        aArgs = new Array();
        SQL = "select Cam_habi, Cam_Cama, Cam_Est, Cam_HistClin, " 
            +"if (RSP.rsp_codint  = '**ALQUILER**', 'Alquilado', 'Propio') Tipo "
		    +"from tbc_CAMAS "
			+"inner join asistencial.tbc_respirador RSP on RSP.rsp_histcli = Cam_histclin "
			+"where Cam_histclin > 0 and cam_tiphistclin = 0 "
            +"order by Cam_HistClin asc "	
        frm_ds_respirador = databaseManager.getDataSetByQuery("maestros", SQL, aArgs, -1);
   	
        //carga teléfono
        aArgs = new Array();
        SQL = "select Cam_habi, Cam_Cama, Cam_Est, Cam_HistClin, " 
            +"tel_fechainicio, tel_fechafinal "
		    +"from tbc_CAMAS "
			+"inner join asistencial.tbc_telef TEL on TEL.tel_histcli = Cam_histclin "
			+"where Cam_histclin > 0 and cam_tiphistclin = 0 "
            +"order by Cam_HistClin asc "	
        frm_ds_telefono = databaseManager.getDataSetByQuery("maestros", SQL, aArgs, -1);
        
        //carga control aire
        aArgs = new Array();
        SQL = "select Cam_habi, Cam_Cama, Cam_Est, Cam_HistClin, " 
            +"ctrlaire2, ctrlaire6 "
		    +"from tbc_CAMAS "
			+"inner join asistencial.tbc_ctrl_aire AIRE on AIRE.ctrlaire1 = Cam_histclin "
			+"where Cam_histclin > 0 and cam_tiphistclin = 0 "
            +"order by Cam_HistClin asc "	
        frm_ds_ctrl_aire = databaseManager.getDataSetByQuery("maestros", SQL, aArgs, -1);
        
        //carga oxígeno
        aArgs = new Array();
        SQL = "select Cam_habi, Cam_Cama, Cam_Est, Cam_HistClin, " 
            +"ped_oxigfec, ped_oxigintervalo, ped_oxigdurante "
		    +"from tbc_CAMAS "
			+"inner join asistencial.tbc_ped_oxig OXI on OXI.ped_oxighc = Cam_histclin "
			+"where Cam_histclin > 0 and cam_tiphistclin = 0 "
            +"order by Cam_HistClin asc "	
        frm_ds_oxigeno = databaseManager.getDataSetByQuery("maestros", SQL, aArgs, -1);
              
		for (var i= 1; i <= _ds.getMaxRowIndex(); i++){			
			frm_hayoxi = 0
			frm_estado_habita = 0
			frm_tiene_telefono = 0
			frm_tiene_control_aire = 0
			frm_cant_camas = 0
			frm_individual = 0
 			frm_solo = 0
			frm_acompa = 0
			frm_alta = 0
			frm_es_osecac = 0
			var aux_utilstand = 0			
			frm_aux_estado_habita = [0,0,0,0,0,0,0,0,0,0]
			
			for (var h= aux_h; h <= frm_ds2.getMaxRowIndex(); h++){				
				
				if (frm_ds2.getValue(h,8) > _ds.getValue(i,1)){
					h = 999999
				}else{
					if (frm_ds2.getValue(h,8) == _ds.getValue(i,1)){
						aux_h++
					    if (aux_utilstand == 0){  
					        aux_utilstand =  frm_ds2.getValue(h,1)
					    }
			  	        if (frm_ds2.getValue(h,3) > 0 && frm_ds2.getValue(h,2) == 0) {
				        }else{
					        // Suma total pacientes y camas 
					        if (frm_ds2.getValue(h,7) != 0){
						        frm_total_pacientes++
					        }
					        frm_cant_camas++
					        frm_total_cant_camas++
					
				    	    // Marca si tiene Oxigeno en la Habitacion
					        if (frm_ds2.getValue(h,4) == 1 || frm_ds2.getValue(h,5) == 1 ){
						        frm_hayoxi = 1
					        }
					        switch (frm_ds2.getValue(h,2)){
					            case 0: frm_aux_estado_habita[1]++;break; 
					            case 1: frm_aux_estado_habita[2]++;break;
					            case 2: frm_aux_estado_habita[3]++;break;
					            case 3: frm_aux_estado_habita[4]++;break;
					            case 4: frm_aux_estado_habita[5]++;break;
					            case 5: frm_aux_estado_habita[6]++;break;
					            case 6: frm_aux_estado_habita[7]++;break;
					            case 7: frm_aux_estado_habita[8]++;break;
					        }
					       // Marca si esta Aislado
					        if (frm_ds2.getValue(h,6) == 1){
						        frm_solo = 1
					        }
					       // Marca si tiene Altas
					        if (frm_ds2.getValue(h,31) > 10 || frm_ds2.getValue(h,31) == 7 || frm_ds2.getValue(h,31) == 8){
						        frm_alta = 1
					        }
					       // Buscar Acompañante
					  
					        if(frm_ds2.getValue(h,7) > 0){
								$pos = frm_ds_aut_acomp.getColumnAsArray(4).indexOf(frm_ds2.getValue(h,7)) + 1
								$max = frm_ds_aut_acomp.getMaxRowIndex()
							    if ($pos > 0){
								    for(j =$pos ; j <= $max; j++){								    							
								        if (frm_ds2.getValue(h,7) == frm_ds_aut_acomp.getValue(j,4)){
								        	if ((globals.gbl_fecha_hoy_int >= frm_ds_aut_acomp.getValue(j,5)) &&
									            (globals.gbl_fecha_hoy_int <= frm_ds_aut_acomp.getValue(j,6))){
										        if(globals.gbl_fecha_hoy_int == frm_ds_aut_acomp.getValue(j,6)){
										            if(globals.gbl_hora_hoy_int <= 10){
										        	    frm_acompa = 1					        
										                j = $max+1
										            }
										        }else{
												    frm_acompa = 1
												    j = $max+1
												}
										    }
								        }else{
								    	    if (frm_ds_aut_acomp.getValue(j,4) > frm_ds2.getValue(h,7)){
								    		    j = $max+1
								    	    }
								    	}
								    }
							    }
								/*
								var _ds3_cant = frm_ds_aut_acomp.getMaxRowIndex()
								var _ds3_auac_hclinica
					        	var _ds3_auac_fechadesde
							    var _ds3_auac_fechahasta
					           	for (j = 1; j <= _ds3_cant; j++){
					           		_ds3_auac_hclinica = frm_ds_aut_acomp.getValue(j,4)
					        	  	_ds3_auac_fechadesde = frm_ds_aut_acomp.getValue(j,5)
									_ds3_auac_fechahasta = frm_ds_aut_acomp.getValue(j,6)
									if (_ds3_auac_hclinica == frm_ds2.getValue(h,7)){
										if ((globals.gbl_fecha_hoy_int >= _ds3_auac_fechadesde) &&
							                (globals.gbl_fecha_hoy_int <= _ds3_auac_fechahasta)){
							                if(globals.gbl_fecha_hoy_int == _ds3_auac_fechahasta){
   							                    if(globals.gbl_hora_hoy_int <= 10){
   							                    	frm_acompa = 1
								                    j = 999
								                }		
								            }else{
									            frm_acompa = 1
									            j = 999
								            }
								        }												
							        }					     
	                            }
	                            */
					        }
					        //Cargar Tabla resumen para Habitaciones de Guardia 30 y 321
							if (frm_ds2.getValue(h,8) == 30){
								if (frm_ds2.getValue(h,3) == 0){
								    globals.gbl_hab_30_est_guardia[2]++
								}
								if (frm_ds2.getValue(h,7) > 0){
									if (frm_ds2.getValue(h,3) > 0 && frm_ds2.getValue(h,3) != 3){ 
								        globals.gbl_hab_30_est_guardia[7]++	
								    }else{
									    globals.gbl_hab_30_est_guardia[3]++	
								    }
								    if (frm_ds2.getValue(h,10) == 0){
									    globals.gbl_hab_30_est_guardia[5]++	
								    }else{
									    globals.gbl_hab_30_est_guardia[6]++
								    }								    
								}
							}
							if (frm_ds2.getValue(h,8) == 321){
								if (frm_ds2.getValue(h,3) == 0){
								    globals.gbl_hab_321_est_guardia[2]++
								}
								if (frm_ds2.getValue(h,7) > 0){
									if (frm_ds2.getValue(h,3) > 0 && frm_ds2.getValue(h,3) != 3){
										globals.gbl_hab_321_est_guardia[7]++	
								    }else{
									    globals.gbl_hab_321_est_guardia[3]++									
								    }
								    if (frm_ds2.getValue(h,10) == 0){
								   	    globals.gbl_hab_321_est_guardia[5]++	
								    }else{
									    globals.gbl_hab_321_est_guardia[6]++
								    }								    
								}
							}
							
				        }
				      //Cargar tabla para Estado de Ocupación (Sector-Cobertura)
				        
				        if (frm_ds2.getValue(h,3) > 0 && frm_ds2.getValue(h,2)!= 1) {
				        }else{				        	
							var utilidad = ''
					        var aux_util = frm_ds2.getValue(h,1)
						    if (frm_ds2.getValue(h,8) == 40 || frm_ds2.getValue(h,8) == 250 || frm_ds2.getValue(h,8) == 321){
							    switch (frm_ds2.getValue(h,8)){
							    	//case   40: aux_util =  8; break;
							    	case   40: aux_util =  2; break;
					                case  250: aux_util = 10; break;
					                //case  321: aux_util = 16; break;
					                case  321: aux_util = 2; break;
							    }						    
						    }else{
						    	if (frm_ds2.getValue(h,1) != 8){
						    		aux_util =  frm_ds2.getValue(h,1)
						    	}else{
						    		aux_util = 6
						    	}						    	
						    }	
						    var aux_util_actual = aux_util	
						    if (frm_ds2.getValue(h,18) > 0 ){
						        aux_util_actual = frm_ds2.getValue(h,18)
					        }else{
						        if (frm_ds2.getValue(h,17) > 0 ){
							        aux_util_actual = frm_ds2.getValue(h,17)
						        }else{
							        if (frm_ds2.getValue(h,16) > 0 ){
	  							        aux_util_actual = frm_ds2.getValue(h,16)
							        }else{
								        if (frm_ds2.getValue(h,15) > 0){
									        aux_util_actual = frm_ds2.getValue(h,15)			
								        }else{
									        if (frm_ds2.getValue(h,14) > 0){
										        aux_util_actual = frm_ds2.getValue(h,14)
									        }else{
										        aux_util_actual = frm_ds2.getValue(h,1)
									        }
									    }
								    }
							    }			
						    }
                            if (aux_util != aux_util_actual){                            	
                            	if (frm_ds2.getValue(h,8) == 250){
                            		aux_util = 10
                            	}else{
                            		if (frm_ds2.getValue(h,8) == 321){
                            			aux_util = 2
                                		//aux_util = 16
                                	}else{
                                		if (frm_ds2.getValue(h,8) == 40){
                                    		//aux_util = 8
											aux_util = 2
                                    	}else{
                                    		if (aux_util_actual == 8){
                                    			aux_util = 6
                                    		}else{
                                    			aux_util = aux_util_actual
                                    		}
                                    	}
                                	}
                            	}
                            }
                            //if (frm_ds2.getValue(h,10) == 0 ){
                            	//aux_util = frm_ds2.getValue(h,40)
                            //}
						
					        switch (aux_util){
					    	    case  1: utilidad = 'Internación';break;
					            case  2: utilidad = 'T.I.       ';break;
					            case  3: utilidad = 'U.D.R.     ';break;
					            case  4: utilidad = 'U.C.       ';break;
					            case  5: utilidad = 'R.C.V.     ';break;
					            case  6: utilidad = 'TIN./TIP.  ';break;
					            //case  7: utilidad = 'Morge          ';break;
					            case  8: utilidad = 'U.I.P.     ';break;
					            case  9: utilidad = 'Nursery    ';break;
					            case 10: utilidad = 'Guar. Oste ';break;
					            case 11: utilidad = 'Int. Coro. ';break;
					            case 12: utilidad = 'T. Inter.  ';break;
   			                    case 13: utilidad = 'R. Anesté. ';break;
					            case 14: utilidad = 'Int. Hemo. ';break;
					            case 15: utilidad = 'Cir.Ambula.';break;
					         //   case 16: utilidad = 'Int. Obs. Quir.';break;
					            case 16: utilidad = 'U.A.P.     ';break;
					        }
					        
							frm_ds2.setValue(h,38, utilidad)
							
							// por Sector
                            if (utilidad != ''){ 
                            	globals.gbl_res_ocupacion[19][0] = 'Total      '
                            	globals.gbl_res_ocupacion[0][0]  = 'Internación'                            	
                            	globals.gbl_res_ocupacion[1][0]  = 'U.D.R.     '
                            	globals.gbl_res_ocupacion[2][0]  = 'U.A.P.     ' 
                            	globals.gbl_res_ocupacion[3][0]  = 'U.I.P.     '
                            	globals.gbl_res_ocupacion[4][0]  = 'Cir.Ambula.' 
                            	globals.gbl_res_ocupacion[5][0]  = 'U.C.       '
                            	globals.gbl_res_ocupacion[6][0]  = 'T.I.       '
                            	globals.gbl_res_ocupacion[7][0]  = 'R.C.V.     '	
                            	globals.gbl_res_ocupacion[8][0]  = 'R. Anesté. '
                            	//globals.gbl_res_ocupacion[9][0]  = 'TIN./TIP.  '
                            	//globals.gbl_res_ocupacion[10][0]  = 'Nursery    '                            	
                            	//globals.gbl_res_ocupacion[11][0] = 'Guar. Oste '                            	
                            	//globals.gbl_res_ocupacion[12][0] = 'T. Inter.  '
                            	//globals.gbl_res_ocupacion[13][0] = 'Int. Coro. '                            	
                            	//globals.gbl_res_ocupacion[14][0] = 'Int. Hemo. '
                            					         
                            	
                            	
						        for (j= 0; j < 20; j++){
							
							        if (globals.gbl_res_ocupacion[j][0] == ''){
								        globals.gbl_res_ocupacion[j][0] = utilidad										
								        if (frm_ds2.getValue(h,2) == 1){
									        globals.gbl_res_ocupacion[j][1]++
									        globals.gbl_res_ocupacion[19][1]++
									        if(frm_ds2.getValue(h,10) == 0){
											        globals.gbl_res_ocupacion[j][2]++
											        globals.gbl_res_ocupacion[19][2]++
									        }else{
										        globals.gbl_res_ocupacion[j][3]++
										        globals.gbl_res_ocupacion[19][3]++
									        }									        
								        }
								        globals.gbl_res_ocupacion[j][5]++
									    globals.gbl_res_ocupacion[19][5]++
								        j = 99
							        }else{
								        if (globals.gbl_res_ocupacion[j][0] == utilidad){										
									        if (frm_ds2.getValue(h,2) == 1){
										        globals.gbl_res_ocupacion[j][1]++
										        globals.gbl_res_ocupacion[19][1]++
										        if(frm_ds2.getValue(h,10) == 0){
										  	        globals.gbl_res_ocupacion[j][2]++
										  	        globals.gbl_res_ocupacion[19][2]++
										        }else{
											        globals.gbl_res_ocupacion[j][3]++
											        globals.gbl_res_ocupacion[19][3]++
										        }
									        }
									        globals.gbl_res_ocupacion[j][5]++
									        globals.gbl_res_ocupacion[19][5]++
									        j = 99
								        }
								    }
								}
							}
							// por Cobertura y Reserva
							//var $aux_obra        = frm_ds2.getValue(h,37)
							var $aux_obra        = frm_ds2.getValue(h,41)
							var $aux_obra_nombre = frm_ds2.getValue(h,20)
							// solo para reservas
					    	if (frm_ds2.getValue(h,2) == 3){
					    		globals.gbl_habita   = frm_ds2.getValue(h,8)
								globals.gbl_cama     = frm_ds2.getValue(h,9)
									
					    		if (tbc_camas_to_tbc_res_camas.getSize() > 0){					    			
					    			$aux_obra = tbc_camas_to_tbc_res_camas.tbc_res_camas_to_tbc_obras.obr_codigo
									$aux_obra_nombre = tbc_camas_to_tbc_res_camas.tbc_res_camas_to_tbc_obras.obr_razonsoc											    			
					    		}
					    	}
							// Es OSECAC
							if (frm_ds2.getValue(h,40) == 2){
								frm_es_osecac = 2
							}
					    	//
							var jj
							if (utilidad != ''){ 
                               if ($aux_obra_nombre == null){
                            	   
                            	   for (jj= 0; jj < 18; jj++){
						        	   if (globals.gbl_res_ocupacion[jj][0] == utilidad){                                   	   
                                    	   globals.gbl_res_ocupacion_cober[99][jj+3]++
                                    	   if (frm_ds2.getValue(h,2) == 3){
                                    	       globals.gbl_res_reserva_cober[99][jj+3]++
                                    	   }
										   jj = 20
                                       }                                       	       
					               }
                            	   globals.gbl_res_ocupacion_cober[99][18]++
                               }else{
                            	   //por sector
                            	   globals.gbl_res_ocupacion_cober[98][0] = 'zzz1'
                            	   globals.gbl_res_ocupacion_cober[98][1] = 0
								   globals.gbl_res_ocupacion_cober[98][2] = 'Total Camas Ocupadas '
									   
                            	   globals.gbl_res_ocupacion_cober[99][0] = 'zzz2'
                            	   globals.gbl_res_ocupacion_cober[99][1] = 0
								   globals.gbl_res_ocupacion_cober[99][2] = 'Total Camas Libres   '
									   
						           for (j= 0; j < 100; j++){							
							           if (globals.gbl_res_ocupacion_cober[j][1] == 0){
							        	   globals.gbl_res_ocupacion_cober[j][0] = $aux_obra_nombre
										   globals.gbl_res_ocupacion_cober[j][1] = $aux_obra
										   globals.gbl_res_ocupacion_cober[j][2] = $aux_obra_nombre
                                           for (jj= 0; jj < 18; jj++){
                                        	   if (globals.gbl_res_ocupacion[jj][0] == utilidad){
                                        		  
                                        		   if (frm_ds2.getValue(h,2) != 3){
                                        		       globals.gbl_res_ocupacion_cober[j][jj+3]++
                                        		       globals.gbl_res_ocupacion_cober[98][jj+3]++
                                        		   }else{
                                        			   globals.gbl_res_ocupacion_cober[99][jj+3]++
                                        		   }
												   jj = 20                                        		   
                                        	   }                                        	   
							               }
							        	   //ojo
							               if (frm_ds2.getValue(h,2) != 3){
								               globals.gbl_res_ocupacion_cober[j][18]++
										       globals.gbl_res_ocupacion_cober[98][18]++
							               }else{
							            	   globals.gbl_res_ocupacion_cober[99][18]++
							               }
								           j = 999
							           }else{
								           if (globals.gbl_res_ocupacion_cober[j][1] == $aux_obra){										
								        	   globals.gbl_res_ocupacion_cober[j][0] = $aux_obra_nombre
								        	   globals.gbl_res_ocupacion_cober[j][1] = $aux_obra
											   globals.gbl_res_ocupacion_cober[j][2] = $aux_obra_nombre
											
									           for (jj= 0; jj < 18; jj++){
									        	   if (globals.gbl_res_ocupacion[jj][0] == utilidad){
									        		   //ojo
									        		   if (frm_ds2.getValue(h,2) != 3){
		                                        	       globals.gbl_res_ocupacion_cober[j][jj+3]++
		                                        	       globals.gbl_res_ocupacion_cober[98][jj+3]++
									        		   }else{
									        			   globals.gbl_res_ocupacion_cober[99][jj+3]++
									        		   }
													   jj = 20									        		   
		                                           }                                       	       
								               }
								               if (frm_ds2.getValue(h,2) != 3){
								                   globals.gbl_res_ocupacion_cober[j][18]++
											       globals.gbl_res_ocupacion_cober[98][18]++
								               }else{								            	   
											       globals.gbl_res_ocupacion_cober[99][18]++
								               }
									           j = 999
								           }
								       }
						           }
						           globals.gbl_res_ocupacion_cober[98][19] = 100
						           //por reserva
                            	   									   
                            	   globals.gbl_res_reserva_cober[99][0] = 'zzz1'
                            	   globals.gbl_res_reserva_cober[99][1] = 0
								   globals.gbl_res_reserva_cober[99][2] = 'Total Camas '
								   if (frm_ds2.getValue(h,2) == 3){	
									   frm_ds2.setValue(h,39, $aux_obra)
                            	       for (j= 0; j < 100; j++){							
							               if (globals.gbl_res_reserva_cober[j][1] == 0){
							        	       globals.gbl_res_reserva_cober[j][0] = $aux_obra_nombre
								               globals.gbl_res_reserva_cober[j][1] = $aux_obra
										       globals.gbl_res_reserva_cober[j][2] = $aux_obra_nombre
                                               for (jj= 0; jj < 18; jj++){
                                        	       if (globals.gbl_res_ocupacion[jj][0] == utilidad){
                                        		       globals.gbl_res_reserva_cober[j][jj+3]++
                                        		       globals.gbl_res_reserva_cober[99][jj+3]++
												       jj = 20                                   	   
                                        	       }                                        	   
							                   }
								               globals.gbl_res_reserva_cober[j][18]++
										       globals.gbl_res_reserva_cober[99][18]++
								               j = 999
							               }else{
								               if (globals.gbl_res_reserva_cober[j][1] == $aux_obra){										
								        	       globals.gbl_res_reserva_cober[j][0] = $aux_obra_nombre
								        	       globals.gbl_res_reserva_cober[j][1] = $aux_obra
											       globals.gbl_res_reserva_cober[j][2] = $aux_obra_nombre
											
									               for (jj= 0; jj < 18; jj++){
									        	       if (globals.gbl_res_ocupacion[jj][0] == utilidad){		                                        	
		                                        	       globals.gbl_res_reserva_cober[j][jj+3]++
		                                        	       globals.gbl_res_reserva_cober[99][jj+3]++
													       jj = 20
		                                               }                                       	       
								                   }
								                   globals.gbl_res_reserva_cober[j][18]++
											       globals.gbl_res_reserva_cober[99][18]++											   
									               j = 999
								               }
								           }
								       }
						           }
								}
							}
						}			        
					}
				}			    
			}
			// Marca si tiene teléfono			
			if (_ds.getValue(i,5) == 1){
				frm_tiene_telefono = 1
			}
			// Marca si tiene control Aire Acond			
			if (_ds.getValue(i,7) == 1){
				frm_tiene_control_aire = 1
			}
			//Maximo de camas. Marca Habitacion individual
			if (_ds.getValue(i,6) == 1){
				frm_individual = 1
			}		
			
	        if ((_ds.getValue(i,2)== 1 || _ds.getValue(i,2)== 2) && _ds.getValue(i,1)!= 40){
        	    frm_pos[1]++
	        	carga_guardia(frm_pos[1], _ds.getValue(i,1))
            }else{
				if((aux_utilstand == 1 || aux_utilstand== 11 || aux_utilstand== 15) && _ds.getValue(i,1)!= 701 && _ds.getValue(i,1)!= 800){
        		    if((_ds.getValue(i,3) > -1 && _ds.getValue(i,3) <= 5 && _ds.getValue(i,4) != '') || _ds.getValue(i,3) == 5 || _ds.getValue(i,1) == 40){
        		    	var aux_pos
						if (_ds.getValue(i,3) == 0 && _ds.getValue(i,4) == 'A' && _ds.getValue(i,1) < 50){
        		    		frm_pos[3]++
							aux_pos = frm_pos[3]
        		    	}else{
        		    		if (_ds.getValue(i,3) == 0 && _ds.getValue(i,4) == 'B' && _ds.getValue(i,1) < 50){
            		    		frm_pos[4]++
    							aux_pos = frm_pos[4]
        		    		}else{
        		    			if (_ds.getValue(i,3) == 0 && _ds.getValue(i,1) > 49){
                		    		frm_pos[5]++
        							aux_pos = frm_pos[5]
        		    			}else{
        		    				if (_ds.getValue(i,3) == 1 && _ds.getValue(i,4) == 'A'){
                    		    		frm_pos[6]++
            							aux_pos = frm_pos[6]
        		    				}else{
        		    					if (_ds.getValue(i,3) == 1 && _ds.getValue(i,4) == 'B'){
                        		    		frm_pos[7]++
                							aux_pos = frm_pos[7]
            		    				}else{
            		    					if (_ds.getValue(i,3) == 1 && _ds.getValue(i,4) == 'C'){
                            		    		frm_pos[8]++
                    							aux_pos = frm_pos[8]
                		    				}else{
                		    					if (_ds.getValue(i,3) == 2 && _ds.getValue(i,4) == 'A'){
                                		    		frm_pos[9]++
                        							aux_pos = frm_pos[9]
                    		    				}else{
                    		    					if (_ds.getValue(i,3) == 2 && _ds.getValue(i,4) == 'B'){
                                    		    		frm_pos[10]++
                            							aux_pos = frm_pos[10]
                        		    				}else{
                        		    					if (_ds.getValue(i,3) == 3){
                                        		    		frm_pos[11]++
                                							aux_pos = frm_pos[11]
                            		    				}else{
                            		    					if (_ds.getValue(i,3) == 4){
                                            		    		frm_pos[12]++
                                    							aux_pos = frm_pos[12]
                                		    				}else{
                                		    					if (_ds.getValue(i,3) == 5){
                                                		    		frm_pos[13]++
                                        							aux_pos = frm_pos[13]
                                    		    				}else{
                                    		    					if (_ds.getValue(i,3) == -1){
                                                    		    		frm_pos[14]++
                                            							aux_pos = frm_pos[14]
                                        		    				}
                                    		    				}
                                		    				}
                        		    				    }
                        		    				}
                    		    				}
                		    				}
            		    				}
        		    				}
        		    			}
        		    		}
        		    	}
                    	carga_int(aux_pos, _ds.getValue(i,1), _ds.getValue(i,3), _ds.getValue(i,4))
				   }
				}else{
					if (_ds.getValue(i,1) != 701 && _ds.getValue(i,1) != 800){
						frm_pos[2]++
        	    	    carga_no_int(frm_pos[2], _ds.getValue(i,1))
					}
        	    }  
            }
                  
	    }
   		// calcula total y porcentaje para resumen x sector
	    for (j= 0; j < 20; j++){
	    	if (globals.gbl_res_ocupacion[j][0] != '' || j == 19){
	    	   globals.gbl_res_ocupacion[j][4] = globals.gbl_res_ocupacion[j][5] - globals.gbl_res_ocupacion[j][1]
	    	   if (globals.gbl_res_ocupacion[j][5]> 0){
	    	       globals.gbl_res_ocupacion[j][6] = (globals.gbl_res_ocupacion[j][1] / globals.gbl_res_ocupacion[j][5]) * 100
	    	   }
	    	}
	    }
	 // calcula porcentaje para resumen x cobertura
	    for (j= 0; j < 100; j++){
	    	if (globals.gbl_res_ocupacion_cober[j][1] != 0){
		        globals.gbl_res_ocupacion_cober[j][19]= globals.gbl_res_ocupacion_cober[j][18] * 100 / 
                                                        globals.gbl_res_ocupacion_cober[98][18]
	    	}
	    	if (globals.gbl_res_reserva_cober[j][1] != 0){
		        globals.gbl_res_reserva_cober[j][19]= globals.gbl_res_reserva_cober[j][18] * 100 / 
                                                        globals.gbl_res_reserva_cober[99][18]
	    	}
	    }
	    
		globals.gbl_res_ocupacion_cober.sort()
		globals.gbl_res_reserva_cober.sort()
	    elements.lbl_procesando.visible = false		
    }
}
/**
 * @param ultimo
 * @param nro_habita
 * @properties={typeid:24,uuid:"3EA8090B-9BC1-4BC8-9DD1-B1E654FA0610"}
 */
function carga_guardia(ultimo, nro_habita){
	var boton
	var dpto

	boton = 'img_btn_guardia_' + ultimo
	elements[boton].visible = true
	dpto = 'img_dpto_guardia_' + ultimo
	elements[dpto].text = nro_habita
	elements[dpto].visible = true
	
	carga_estado(ultimo, 'guardia_')
	elements['lbl_guardia_'+ultimo].visible = true	
	if (nro_habita == 30){
		elements['lbl_guardia_'+ultimo].text= 'U.D.R.'
	}else{
		if(nro_habita == 321){
		   elements['lbl_guardia_'+ultimo].text= 'U.A.P.'
		}
	}
}

/**
 * 
 * @param ultimo
 * @param leyenda
 * @properties={typeid:24,uuid:"9FEC517E-F79A-48D8-B74B-685EC90ABB9A"}
 */
function carga_estado(ultimo,leyenda){
	var bloqueo
	var acompanante
	var mantenimiento
	var individual
	var res_ais
	var telefono
	var dpto
	var boton
	var aire
	var alta
	
	bloqueo = 'img_bloqueo_' + leyenda + ultimo
	res_ais = 'img_res_ais_' + leyenda + ultimo
	mantenimiento = 'img_mantenimiento_' + leyenda + ultimo
	acompanante = 'img_acompanante_' + leyenda + ultimo
	individual = 'img_individual_' + leyenda + ultimo
	dpto = 'img_dpto_' + leyenda + ultimo
	telefono = 'img_telefono_' + leyenda + ultimo
	boton = 'img_btn_' + leyenda + ultimo
	aire = 'img_aire_' + leyenda + ultimo
	alta = 'img_alta_' + leyenda + ultimo
	
	elements[bloqueo].visible = false
	elements[res_ais].visible = false
	elements[mantenimiento].visible = false
	elements[acompanante].visible = false
	elements[individual].visible = false
	elements[res_ais].visible = false
	elements[telefono].visible = false
	elements[aire].visible = false
	elements[alta].visible = false
	
	if (frm_aux_estado_habita[3] > 0){
		elements[bloqueo].imageURL = "media:///mp_bloqueo_patologico_ng.png";		
		elements[bloqueo].toolTipText= 'Bloqueado por Patología'
		elements[bloqueo].visible = true
	}
	if (frm_aux_estado_habita[4] > 0){
	    elements[res_ais].text= 'R'
	    elements[res_ais].toolTipText= 'Reservada'
	    elements[res_ais].fgcolor = "#000"
        elements[res_ais].visible = true
    }    
    if (frm_aux_estado_habita[5] > 0){
	    elements[mantenimiento].visible = true
    }    
    if (frm_acompa == 1){
	    elements[acompanante].visible = true
    }
    if (frm_aux_estado_habita[7] > 0){
    	elements[bloqueo].imageURL = "media:///mp_candado_ng.png";
    	elements[bloqueo].toolTipText= 'Bloqueado'
    	elements[bloqueo].visible = true
	}
	if (frm_aux_estado_habita[8] > 0){
		elements[res_ais].text= 'P'
		elements[res_ais].toolTipText= 'Preparación'
		elements[res_ais].fgcolor = "#000"
	    elements[res_ais].visible = true
    }
    if (frm_individual == 1){
	    elements[individual].visible = true
    }
	if (frm_solo == 1){
		elements[res_ais].text= 'A'
		elements[res_ais].toolTipText= 'Aislado'
		elements[res_ais].fgcolor = "#000"	
	    elements[res_ais].visible = true
	}
	if (frm_tiene_telefono == 1){
	    elements[telefono].visible = true
	}

	if (frm_alta != 0 ){
	    elements[alta].visible = true
	}
	
	if (frm_tiene_control_aire == 1 ){
	    elements[aire].visible = true
	}	
	if (frm_aux_estado_habita[2] == frm_cant_camas){
	   elements[dpto].fgcolor = "#000"
	}else{
	   elements[dpto].fgcolor = "#008000"	  
    }
    if (frm_aux_estado_habita[1] > 0){
    	if (frm_solo == 1 ){
      	    if(leyenda == 'pb_a_' || leyenda == 'pb_b_' || leyenda == 'p1_a_' || leyenda == 'p1_b_' || leyenda == 'p1_c_'
    	       || leyenda == 'p2_a_' || leyenda == 'p2_b_' || leyenda == 'p3_b_' || leyenda == 'p4_' || leyenda == 'p5_'){
    		   elements[boton].imageURL = "media:///btn_gris.gif"     			     
    	    }else{
    		   elements[boton].imageURL = "media:///btn_verde.gif"
    	    }	   
    	}else{
 	        elements[boton].imageURL = "media:///btn_verde.gif"
    	}    	
 	}else{
 	    elements[boton].imageURL = "media:///btn_gris.gif"
 	}
    //Solo para OSECAC
    if (globals.gbl_solo_OSECAC == 1){
    	if(frm_es_osecac == 2){
    		elements[boton].border = 'LineBorder,2,#008000';
    	}else{
    		elements[boton].border = 'Empty';
    	}
    }    
}

/**
 * @param ultimo
 * @param nro_habita
 * @param piso
 * @param pabellon
 *  
 * @properties={typeid:24,uuid:"A40F4435-CFAF-4866-9F41-C4FD9FE429B2"}
 */
function carga_int(ultimo, nro_habita, piso, pabellon){
	var boton
	var dpto
	var leyenda

	if (piso == 0){	
		boton = 'img_btn_pb_'
		dpto = 'img_dpto_pb_'
		leyenda = 'pb_'
		if (nro_habita >= 50 && nro_habita <= 54 ){
			boton = 'img_btn_cir_amb_'
			dpto = 'img_dpto_cir_amb_'
			leyenda = 'cir_amb_'
		}
	}else{
		if(piso == 1){
			boton = 'img_btn_p1_'
			dpto = 'img_dpto_p1_'
			leyenda = 'p1_'
		}else{
			if(piso == 2){
				boton = 'img_btn_p2_'
				dpto = 'img_dpto_p2_'
				leyenda = 'p2_'
			}else{
				if(piso == 3){
					boton = 'img_btn_p3_'
					dpto = 'img_dpto_p3_'
					leyenda = 'p3_'
				}else{
					if(piso == 4){
						boton = 'img_btn_p4_'
						dpto = 'img_dpto_p4_'
				        leyenda = 'p4_'
					}else{
						if(piso == 5){
							boton = 'img_btn_p5_'
							dpto = 'img_dpto_p5_'
							leyenda = 'p5_'
						}else{
							if(piso == -1){
								if(nro_habita == 40){
								   boton = 'img_btn_uip_'
								   dpto = 'img_dpto_uip_'
								   leyenda = 'uip_'
								}
							}
						}
					}
				}
			}
		}
	}
	if ((piso == 0 && nro_habita < 50) || piso == 1 || piso == 2 || piso == 3){
		boton += pabellon.toLocaleLowerCase() + '_'
 		dpto += pabellon.toLocaleLowerCase() + '_'
		leyenda += pabellon.toLocaleLowerCase() + '_'
	}

	boton += ultimo
	elements[boton].visible = true
	dpto += ultimo
	elements[dpto].text = nro_habita
	elements[dpto].visible = true
	
	carga_estado(ultimo,leyenda)
}

/**
 * @param ultimo
 * @param nro_habita
 * @properties={typeid:24,uuid:"9F200617-9840-4D66-923D-6E3874C81C8B"}
 */
function carga_no_int(ultimo, nro_habita){
	var boton
	var dpto

	boton = 'img_btn_util_alta_' + ultimo	
	elements[boton].visible = true
	dpto = 'img_dpto_util_alta_' + ultimo
	elements[dpto].text = nro_habita
	elements[dpto].visible = true
	
	carga_estado(ultimo, 'util_alta_')
	
	elements['lbl_util_'+ultimo].visible = true
	if (nro_habita == 229){
		elements['lbl_util_'+ultimo].text= 'U.C.'
	}else{
		if(nro_habita == 320){
		   elements['lbl_util_'+ultimo].text= 'T.I.'
		}else{
			if(nro_habita == 531){
				   elements['lbl_util_'+ultimo].text= 'T.I.N.'
			}else{
				if(nro_habita == 532){
					   elements['lbl_util_'+ultimo].text= 'NURSER'
				}else{
					if(nro_habita == 701){
						   elements['lbl_util_'+ultimo].text= 'HALL'
					}else{
						if(nro_habita == 800){
							   elements['lbl_util_'+ultimo].text= 'ALTA'
						}else{ 
							if(nro_habita == 999){
								   elements['lbl_util_'+ultimo].text= 'MORGUE'
							}else{
								if(nro_habita == 321){
									   elements['lbl_util_'+ultimo].text= 'T.I.'
								}else{
									if(nro_habita == 40){
										   elements['lbl_util_'+ultimo].text= 'T.I.'
									}else{
										if(nro_habita == 311){
											   elements['lbl_util_'+ultimo].text= 'T.I.'
										}else{
											if(nro_habita == 312){
												   elements['lbl_util_'+ultimo].text= 'T.I.'
											}else{
												if(nro_habita == 307){
													   elements['lbl_util_'+ultimo].text= 'T.I.'
												}
											}
										}
									}
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
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"8F5BB2E8-6668-4949-9743-6F0D095425FB"}
 */
function onAction_buscar_habitacion(event) {
	var habitacion
	if (globals.gbl_pres_guardia == 0){
	    var boton_press = event.getElementName()
   	    if (boton_press == null){
		   boton_press = 'img_dpto_guardia_1'
	    }
	    var aux_b_1 = boton_press.slice(0,8)
	    var aux_boton
	    if (aux_b_1 == 'img_dpto'){
    		aux_boton = boton_press.slice(9)
	    }else{
		    aux_boton = boton_press.slice(8)
	    }
	    boton_press = 'img_dpto_' + aux_boton
			
	    habitacion = elements[boton_press].text
	    globals.gbl_habitacion = utils.stringToNumber(habitacion)
	}else{
		habitacion = globals.gbl_pres_guardia.toString()
		globals.gbl_habitacion = globals.gbl_pres_guardia
    } 	
    
	//Leer foundset y cargar auxiliar
	elements.lbl_procesando.visible = true
    application.updateUI()
	Carga_aux(0,habitacion,0,'',1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'',0)
    
    globals.gbl_pres_guardia = 0
    elements.lbl_procesando.visible = false
    var win = application.createWindow("Det_Habita",JSWindow.MODAL_DIALOG)	
	win.title= 'Detalle de la Habitacion '
	win.resizable = false
	solutionModel.removeForm
	win.show(forms.frm_Mapa_Cama_Habita)
	application.getWindow('Det_Habita').hide()	    
	application.getWindow('Det_Habita').destroy()
}

/**
 * @param md_desde
 * @param md_habitacion
 * @param md_habita_td
 * @param md_cama
 * @param md_cama_td
 * @param md_hab_dis
 * @param md_hab_dial
 * @param md_pac_alta
 * @param md_pac_amb
 * @param md_pac_pedi
 * @param md_pac_pase
 * @param md_pac_oxigeno
 * @param md_pac_der
 * @param md_pac_noc
 * @param md_pac_resp
 * @param md_pac_supn
 * @param md_pac_pan
 * @param md_pac_b_epi
 * @param md_pac_esp_cam
 * @param md_pac_egr_epi
 * @param md_pac_aislado
 * @param md_pac_reserva
 * @param md_pac_obra
 * @param md_utilidad
 * @param md_res_obra
 * @properties={typeid:24,uuid:"8FC9A5D4-3509-4D3A-9DE4-EF9CF958AD74"}
 */
function Carga_aux(md_desde, md_habitacion,md_habita_td,md_cama,md_cama_td,md_hab_dis,md_hab_dial, md_pac_alta, md_pac_amb, md_pac_pedi,
	               md_pac_pase, md_pac_oxigeno, md_pac_der, md_pac_noc , md_pac_resp, md_pac_supn, md_pac_pan, md_pac_b_epi , 
				   md_pac_esp_cam , md_pac_egr_epi, md_pac_aislado, md_pac_reserva, md_pac_obra, md_utilidad, md_res_obra ){
	
	var _ds2_cam_habita
	var _ds2_estado
	var _ds2_cam_cam
	var _ds2_tiphist_cli
	var _ds2_histcli_nom = ''
	var _ds2_cam_baniodis
	var _ds2_cam_dialisis
	var _ds2_pac_alta
	var _ds2_pac_pedi = 0
	var _ds2_pac_pase
	var _ds2_patologia = ''
	var _ds2_pac_super
	var _ds2_cam_tipcama
	var _ds2_cam_histclin
	var _ds2_cant = frm_ds2.getMaxRowIndex()
	var _ds2_pac_pan
	var _ds2_obra = ''
	var _ds2_obra_cod 
    var _ds2_aislado
    var _ds2_utilidad
    var _ds2_res_obra
    var _ds2_es_pami
	var $pos
	var $max
	globals.gbl_encontro = 0
	var tel_fam =''
   	if(_ds2_cant > 0){
   	    //Procesar y crear nuevo Dataset
	    var $ds2 = databaseManager.createEmptyDataSet()
		$ds2.addColumn('aux_habita',1,JSColumn.NUMBER)   
		$ds2.addColumn('aux_cama',2,JSColumn.TEXT)
		$ds2.addColumn('aux_hist_clin',3,JSColumn.TEXT)
		$ds2.addColumn('aux_hist_clin_nombre',4,JSColumn.TEXT)
		$ds2.addColumn('aux_utilidad',5,JSColumn.TEXT)
		$ds2.addColumn('aux_edad',6,JSColumn.TEXT)
		$ds2.addColumn('aux_fechaing',7,JSColumn.DATETIME)
		$ds2.addColumn('aux_horaing',8,JSColumn.TEXT)
		$ds2.addColumn('aux_sexo',9,JSColumn.TEXT)
		$ds2.addColumn('aux_estado',10,JSColumn.TEXT)
        $ds2.addColumn('aux_arm',11,JSColumn.TEXT)
		$ds2.addColumn('aux_telefono',12,JSColumn.TEXT)
		$ds2.addColumn('aux_ctrl_aire',13,JSColumn.TEXT)
		$ds2.addColumn('aux_patologia',14,JSColumn.TEXT)
		$ds2.addColumn('aux_obra',15,JSColumn.TEXT)
		$ds2.addColumn('aux_oxigeno',16,JSColumn.TEXT)
		$ds2.addColumn('aux_observa',17,JSColumn.TEXT)
		$ds2.addColumn('aux_acompa',18,JSColumn.TEXT)
		$ds2.addColumn('aux_tiphist_cli',19,JSColumn.NUMBER)
		$ds2.addColumn('aux_hist_clin_nro',20,JSColumn.NUMBER)
		$ds2.addColumn('aux_tel_familiar',21,JSColumn.TEXT)
		
	    for (var j = 1; j <= _ds2_cant; j++){  
	    	_ds2_estado        = frm_ds2.getValue(j,2)
        	_ds2_cam_habita    = frm_ds2.getValue(j,8)
			_ds2_cam_cam       = frm_ds2.getValue(j,9)			
			_ds2_tiphist_cli   = frm_ds2.getValue(j,10)
			_ds2_histcli_nom   = frm_ds2.getValue(j,11)
			_ds2_cam_baniodis  = frm_ds2.getValue(j,32)
			_ds2_cam_dialisis  = frm_ds2.getValue(j,33)
			_ds2_pac_alta      = frm_ds2.getValue(j,31)
			_ds2_pac_pase      = frm_ds2.getValue(j,34)
			_ds2_patologia     = frm_ds2.getValue(j,19)
			_ds2_pac_super     = frm_ds2.getValue(j,35)
			_ds2_cam_tipcama   = frm_ds2.getValue(j,3)
			_ds2_cam_histclin  = frm_ds2.getValue(j,7)
			_ds2_pac_pan       = frm_ds2.getValue(j,36)
			//_ds2_obra_cod      = frm_ds2.getValue(j,37)
			_ds2_obra_cod      = frm_ds2.getValue(j,41)
			_ds2_obra          = frm_ds2.getValue(j,20)
			_ds2_aislado       = frm_ds2.getValue(j,6)
			_ds2_utilidad      = frm_ds2.getValue(j,38)
			_ds2_res_obra      = frm_ds2.getValue(j,39)
			_ds2_es_pami       = frm_ds2.getValue(j,40)
			// Calcula edad
			_ds2_pac_pedi = 0
			if (md_pac_pedi == 1){
			    if (frm_ds2.getValue(j,12) != null){
			        _ds2_pac_pedi = globals.CalculoEdad(frm_ds2.getValue(j,12))			    
			    }
			}
			// Buscar si el pasiente tiene Oxigeno - si_oxigeno
		    //globals.vHiscli = frm_ds2.getValue(j,7)
			var si_oxigeno = 0
			// buscar si el pasiente tiene Oxigeno						    				    
		    if (md_pac_oxigeno == 1){
		    	si_oxigeno = 0				    		  						    		
	    		$pos = frm_ds_oxigeno.getColumnAsArray(4).indexOf(frm_ds2.getValue(j,7)) + 1
				$max = frm_ds_oxigeno.getMaxRowIndex()
			    if ($pos > 0){
				    for(var i =$pos ; i <= $max; i++){								    							
				        if (frm_ds2.getValue(j,7) == frm_ds_oxigeno.getValue(i,4)){
				        	if (frm_ds_oxigeno.getValue(i,5) == globals.gbl_fecha_hoy_int || (globals.gbl_hora_hoy_int < 16 &&
		    		            (frm_ds_oxigeno.getValue(i,6) == 0 || frm_ds_oxigeno.getValue(i,6) == 99) || frm_ds_oxigeno.getValue(i,7) == 24)){
		    			        si_oxigeno = 1
								i = $max+1
				        	}
				        }else{
				    	    if (frm_ds_respirador.getValue(i,4) > frm_ds2.getValue(j,7)){
				    		    i = $max+1
				    	    }
				    	}
				    }
			    }
			}
			/*
			if (md_pac_oxigeno == 1){
				var _tbc_oxigeno = tbc_admision_to_tbc_ped_oxig 
		        _tbc_oxigeno.loadAllRecords()
			
		        if (_tbc_oxigeno.getSize() > 0){		    	  	
		    	    for ( var i= 1; i <= _tbc_oxigeno.getSize(); i++){
		    	    	_tbc_oxigeno.setSelectedIndex(i)
		    		    if (_tbc_oxigeno.ped_oxigfec == globals.gbl_fecha_hoy_int || (globals.gbl_hora_hoy_int < 16 &&
		    		        (_tbc_oxigeno.ped_oxigintervalo == 0 || _tbc_oxigeno.ped_oxigintervalo == 99) ||_tbc_oxigeno.ped_oxigdurante == 24)){
		    		        si_oxigeno = 1
						    i = 999
		    		    }
		    		}
		    	}
		    }
			*/
		    // Buscar si tiene respirador - arm
			var arm = ''
			if (md_pac_resp == 1){
	    		arm = ''				    		  						    		
	    		$pos = frm_ds_respirador.getColumnAsArray(4).indexOf(frm_ds2.getValue(j,7)) + 1
	    		$max = frm_ds_respirador.getMaxRowIndex()
			    if ($pos > 0){
				    for(i =$pos ; i <= $max; i++){								    							
				        if (frm_ds2.getValue(j,7) == frm_ds_respirador.getValue(i,4)){
					        arm = frm_ds_respirador.getValue(i,5)
						    i = $max+1
				        }else{
				    	    if (frm_ds_respirador.getValue(i,4) > frm_ds2.getValue(j,7)){
				    		    i = $max+1
				    	    }
				    	}
				    }
			    }
			}
			
			//Buscar si tiene acompañante- acompa
			var acompa = ''	
			if (md_pac_noc == 1){
				globals.vHiscli = frm_ds2.getValue(j,7)
		        var aux_util = 0
			    if (frm_ds2.getValue(j,18) > 0 ){
			        aux_util = frm_ds2.getValue(j,18)
		        }else{
			        if (frm_ds2.getValue(j,17) > 0 ){
				        aux_util = frm_ds2.getValue(j,17)
			        }else{  
				        if (frm_ds2.getValue(j,16) > 0 ){
						    aux_util = frm_ds2.getValue(j,16)
				        }else{
					        if (frm_ds2.getValue(j,15) > 0){
						        aux_util = frm_ds2.getValue(j,15)			
					        }else{
						        if (frm_ds2.getValue(j,14) > 0){
							        aux_util = frm_ds2.getValue(j,14)
						        }else{ 
							        aux_util = frm_ds2.getValue(j,1)
						        }  
						    }
					    }
				    }			
			    }
			    $pos = frm_ds_aut_acomp.getColumnAsArray(4).indexOf(frm_ds2.getValue(j,7)) + 1
				$max = frm_ds_aut_acomp.getMaxRowIndex()
			    if ($pos > 0){
				    for(i =$pos ; i <= $max; i++){								    							
				        if (frm_ds2.getValue(j,7) == frm_ds_aut_acomp.getValue(i,4)){
				        	if ((globals.gbl_fecha_hoy_int >= frm_ds_aut_acomp.getValue(i,5)) &&
					            (globals.gbl_fecha_hoy_int <= frm_ds_aut_acomp.getValue(i,6))){
						        if(globals.gbl_fecha_hoy_int == frm_ds_aut_acomp.getValue(i,6)){
						            if(globals.gbl_hora_hoy_int <= 10){
						        	    acompa = 'Si'					        
						                i = $max+1
						            }
						        }else{
								    acompa = 'Si'
								    i = $max+1
								}
						    }
				        }else{
				    	    if (frm_ds_aut_acomp.getValue(i,4) > frm_ds2.getValue(j,7)){
				    		    i = $max+1
				    	    }
				    	}
				    }
			    }
				/*
			    tbc_camas_to_tbc_aut_acomp.loadAllRecords()
			    if (tbc_camas_to_tbc_aut_acomp.getSize() > 0 && aux_util == 1){
				    for (i= 1; i <= tbc_camas_to_tbc_aut_acomp.getSize(); i++){
				    	tbc_camas_to_tbc_aut_acomp.setSelectedIndex(i)
				    	if ((globals.gbl_fecha_hoy_int >= tbc_camas_to_tbc_aut_acomp.auac_fechadesde) &&
					        (globals.gbl_fecha_hoy_int <= tbc_camas_to_tbc_aut_acomp.auac_fechahasta)){
						    if(globals.gbl_fecha_hoy_int == tbc_camas_to_tbc_aut_acomp.auac_fechahasta){
						        if(globals.gbl_hora_hoy_int <= 10){
						        	acompa = 'Si'
						    	    i = 999
						        }		
						    }else{
							    acompa = 'Si'
							    i = 999				
					        }				
					    }
				    }			
			    }
			    */
			    if(acompa == '' && aux_util == 1){			    	
			    	/*
				    tbc_camas_to_tbc_visitas.loadAllRecords()
				    if (tbc_camas_to_tbc_visitas.getSize() > 0){
					    for (i= 1; i <= tbc_camas_to_tbc_visitas.getSize(); i++){
					    	tbc_camas_to_tbc_visitas.setSelectedIndex(i)
					    	if (tbc_camas_to_tbc_visitas.visi_fechegre != 0){
					    		i = 999 
					    	}else{
						        if (tbc_camas_to_tbc_visitas.visi_hemodador == 2 && tbc_camas_to_tbc_visitas.visi_fechegre == 0){
							        acompa = 'Noct.'	
							        i = 999
						        }
						    }
					    }
				    }
				    */
				    $pos = frm_ds_visitas.getColumnAsArray(4).indexOf(frm_ds2.getValue(j,7)) + 1
				    $max = frm_ds_visitas.getMaxRowIndex()
			    	for(i =$pos ; i <= $max; i++){								    							
				        if (frm_ds2.getValue(j,7) == frm_ds_visitas.getValue(i,4)){
				        	if (frm_ds_visitas.getValue(i,5)!= 0){
				        		i = $max++
				        	}else{					            
						        if(frm_ds_visitas.getValue(i,6) == 2 && frm_ds_visitas.getValue(i,5) == 0){
						        	    acompa = 'Noct.'					        
						                i = $max+1
						        }						        
						    }
				        }else{
				    	    if (frm_ds_visitas.getValue(i,4) > frm_ds2.getValue(j,7)){
				    		    i = $max+1
				    	    }
				    	}
				    }
			    }			
			}
			
			if (_ds2_cam_habita == md_habitacion && (md_cama_td == 1 || md_cama == _ds2_cam_cam) || (md_habita_td == 1 && 
			    (md_hab_dis == 1 && _ds2_cam_baniodis == 1) || 
				(md_hab_dial == 1 && _ds2_cam_dialisis == 1) ||
				(md_pac_alta == "2" && (_ds2_pac_alta == 22 || _ds2_pac_alta == 32 ||_ds2_pac_alta == 12 || _ds2_pac_alta == 42) && md_pac_amb == 0) || 
				(md_pac_alta == "2" && (_ds2_pac_alta == 12 || _ds2_pac_alta == 42) && md_pac_amb == 1) ||
				(md_pac_alta == "3" && (_ds2_pac_alta == 21 || _ds2_pac_alta == 31 ||_ds2_pac_alta == 11 || _ds2_pac_alta == 41) && md_pac_amb == 0) || 
				(md_pac_alta == "3" && (_ds2_pac_alta == 11 || _ds2_pac_alta == 41) && md_pac_amb == 1) ||				
				(md_pac_alta == "4" && (_ds2_pac_alta == 6 || _ds2_pac_alta == 7) && md_pac_amb == 0) || 
				(md_pac_alta == "4" && (_ds2_pac_alta == 6 && md_pac_amb == 1)) ||
				(md_pac_pedi == 1 && _ds2_pac_pedi > 0 && _ds2_pac_pedi < 15) ||
				(md_pac_pase == 1 && _ds2_pac_pase > 0) ||
				(md_pac_oxigeno == 1 && si_oxigeno > 0) ||
				(md_pac_noc == 1 && acompa == 'Noct.') ||	
				(md_pac_resp == 1 && arm != '') ||
				(md_pac_supn == 1 && _ds2_pac_super > 0 && _ds2_cam_tipcama == 1 && _ds2_cam_histclin > 0) ||
				(md_pac_pan == 1 && _ds2_pac_pan == 0) ||
				(md_pac_b_epi == 1 && (_ds2_pac_alta == 8 || _ds2_pac_alta == 9)) || 
				
				(md_pac_esp_cam == 1 && _ds2_cam_habita == 701) ||
				(md_pac_egr_epi == 1 && _ds2_cam_habita == 800) ||
				(md_pac_aislado == 1 && _ds2_aislado == 1 ) ||
				(md_pac_reserva == 1 && _ds2_estado == 3 ) ||
				(md_pac_obra == _ds2_obra_cod) ||
				(md_utilidad != '' && _ds2_utilidad == md_utilidad ) ||
				(md_res_obra != 0 && md_res_obra == _ds2_res_obra )
				)){
			//Filtra Obra social solo para OSECAC cuando el elemento lbl_obra_social_OSECAC = TRUE	
			if(globals.gbl_solo_OSECAC == 0 || (globals.gbl_solo_OSECAC == 1 && _ds2_es_pami == 2) ){
			  	if (frm_ds2.getValue(j,3) > 0 && frm_ds2.getValue(j,3) != 3 && frm_ds2.getValue(j,2) != 1) {
		        }else{
		        	globals.gbl_encontro += 1
		        	globals.gbl_habita = frm_ds2.getValue(j,8)
				
					var cama_aux = frm_ds2.getValue(j,9)
					if (frm_ds2.getValue(j,3) == 1){
					    cama_aux = 's' + frm_ds2.getValue(j,9) 
				    }else{
				    	if (frm_ds2.getValue(j,3) == 2){
				    		cama_aux = 'e' + frm_ds2.getValue(j,9)
				    	}
				    }
				  
					var hiscli = ''
					if (frm_ds2.getValue(j,2) != 0 && frm_ds2.getValue(j,2) != 2 && frm_ds2.getValue(j,2) != 3 && 
						frm_ds2.getValue(j,2) != 4 && frm_ds2.getValue(j,2) != 7){
						hiscli = frm_ds2.getValue(j,7).toString()
						if(frm_ds2.getValue(j,10) == 0){
							switch (hiscli.length){
					    	    case 2: hiscli = hiscli.substr(0,1) + '/' + hiscli.substr(1,1);break;
					            case 3: hiscli = hiscli.substr(0,2) + '/' + hiscli.substr(2,1);break;
					            case 4: hiscli = hiscli.substr(0,3) + '/' + hiscli.substr(3,1);break;
					            case 5: hiscli = hiscli.substr(0,4) + '/' + hiscli.substr(4,1);break;
					            case 6: hiscli = hiscli.substr(0,5) + '/' + hiscli.substr(5,1);break;
					            case 7: hiscli = hiscli.substr(0,6) + '/' + hiscli.substr(6,1);break;
					            case 8: hiscli = hiscli.substr(0,7) + '/' + hiscli.substr(7,1);break;
					        }
					    }
						
						// Calcula edad
						if (md_pac_pedi == 0){
						    if (frm_ds2.getValue(j,12) != null){
						        _ds2_pac_pedi = globals.CalculoEdad(frm_ds2.getValue(j,12))			    
						    }
						}						
						var edad
					    edad = _ds2_pac_pedi + ' ' + globals.vTipoEdad
						
						
						var fecha_ing
						if (frm_ds2.getValue(j,8) == 999){
							fecha_ing = globals.IntegerToDate(frm_ds2.getValue(j,22))				
						}else{
						    fecha_ing = globals.IntegerToDate(frm_ds2.getValue(j,21))												
						}
						
						var hora_ing
						if (frm_ds2.getValue(j,8) == 999){
							hora_ing = frm_ds2.getValue(j,24).toString()				
						}else{
					        hora_ing = frm_ds2.getValue(j,23).toString()
						}
						switch (hora_ing.length){
				            case 1: hora_ing = '00:0' + hora_ing.substr(0,1); break;
				            case 2: hora_ing = '00:' + hora_ing.substr(0,1) + hora_ing.substr(1,1) ; break;
				            case 3: hora_ing = '0' + hora_ing.substr(0,1) + ':' + hora_ing.substr(1,1) + hora_ing.substr(2,1) ; break;
				            case 4: hora_ing = hora_ing.substr(0,1) + hora_ing.substr(1,1) + ':' + hora_ing.substr(2,1)+hora_ing.substr(3,1) ; break;
				        }						
						
						var sexo
						if(frm_ds2.getValue(j,13) == 1){
				    		sexo = 'F'					        
				    	}else{
				    		sexo = 'M'					        
				    	}	
						//telefono familiar
				    	tel_fam = (undefined==frm_ds2.getValue(j,43) || globals.IsBlank(frm_ds2.getValue(j,43)) && (undefined==frm_ds2.getValue(j,44) || globals.IsBlank(frm_ds2.getValue(j,44))) )?'Sin telefono de fam.':(frm_ds2.getValue(j,43).trim()+', '+frm_ds2.getValue(j,44).trim());
	 					
						// Buscar si tiene respirador						
				    	if (md_pac_resp == 0){
				    		arm = ''				    		  						    		
				    		$pos = frm_ds_respirador.getColumnAsArray(4).indexOf(frm_ds2.getValue(j,7)) + 1
				    		$max = frm_ds_respirador.getMaxRowIndex()
						    if ($pos > 0){
							    for(i =$pos ; i <= $max; i++){								    							
							        if (frm_ds2.getValue(j,7) == frm_ds_respirador.getValue(i,4)){
								        arm = frm_ds_respirador.getValue(i,5)
									    i = $max+1
							        }else{
							    	    if (frm_ds_respirador.getValue(i,4) > frm_ds2.getValue(j,7)){
							    		    i = $max+1
							    	    }
							    	}
							    }
						    }
						}							
						
						// Buscar si tiene teléfono
						var telef = ''
						$pos = frm_ds_telefono.getColumnAsArray(4).indexOf(frm_ds2.getValue(j,7)) + 1
						$max = frm_ds_telefono.getMaxRowIndex()
					    if ($pos > 0){
						    for(i =$pos ; i <= $max; i++){								    							
						        if (frm_ds2.getValue(j,7) == frm_ds_telefono.getValue(i,4)){
						        	if(frm_ds_telefono.getValue(i,2) == frm_ds2.getValue(j,9) && frm_ds_telefono.getValue(i,1) == frm_ds2.getValue(j,8)){
							        	if ((globals.gbl_fecha_hoy_int >= frm_ds_telefono.getValue(i,5)) &&
								            (globals.gbl_fecha_hoy_int <= frm_ds_telefono.getValue(i,6))){
								            	telef = 'Si'
								    	        i = $max+1
								        }else{
									        if((globals.gbl_fecha_hoy_int >= frm_ds_telefono.getValue(i,5)) &&
									                 frm_ds_telefono.getValue(i,6) == 0){
										        telef = 'Si'
										        i = $max+1
									        }
									    }
								    }
						        }else{
						    	    if (frm_ds_telefono.getValue(i,4) > frm_ds2.getValue(j,7)){
						    		    i = $max+1
						    	    }
						    	}
						    }
					    }	
			/*			globals.vHiscli = frm_ds2.getValue(j,7)
						tbc_camas_to_tbc_telef.loadAllRecords()
				        if (tbc_camas_to_tbc_telef.getSize() > 0){
					        for ( i= 1; i <= tbc_camas_to_tbc_telef.getSize(); i++){
					        	tbc_camas_to_tbc_telef.setSelectedIndex(i)
						        if(tbc_camas_to_tbc_telef.tel_cama == frm_ds2.getValue(j,9) && tbc_camas_to_tbc_telef.tel_habita == frm_ds2.getValue(j,8)){
						        	if ((globals.gbl_fecha_hoy_int >= tbc_camas_to_tbc_telef.tel_fechainicio) &&
							            (globals.gbl_fecha_hoy_int <= tbc_camas_to_tbc_telef.tel_fechafinal)){
							    	        telef = 'Si'
							    	        i = 999	
							        }else{
								        if((globals.gbl_fecha_hoy_int >= tbc_camas_to_tbc_telef.tel_fechainicio) &&
								            tbc_camas_to_tbc_telef.tel_fechafinal == 0){
									        telef = 'Si'
									        i = 999
								        }
								    }
							    }				
						    }
					    }					
			*/
					    
					    //Buscar si tiene control del aire
						var aire = ''						
						$pos = frm_ds_ctrl_aire.getColumnAsArray(4).indexOf(frm_ds2.getValue(j,7)) + 1
						$max = frm_ds_ctrl_aire.getMaxRowIndex()
					    if ($pos > 0){
						    for(i =$pos ; i <= $max; i++){								    							
						        if (frm_ds2.getValue(j,7) == frm_ds_telefono.getValue(i,4)){
						        	if(frm_ds_telefono.getValue(i,2) == frm_ds2.getValue(j,9) && frm_ds_telefono.getValue(i,1) == frm_ds2.getValue(j,8)){
							        	if ((globals.gbl_fecha_hoy_int >= frm_ds_telefono.getValue(i,5)) &&
								            (globals.gbl_fecha_hoy_int <= frm_ds_telefono.getValue(i,6)) ||
								            	     frm_ds_telefono.getValue(i,6)== 0){
								            	aire = 'Si'
								    	        i = $max+1
								        }else{
									        if((globals.gbl_fecha_hoy_int >= frm_ds_telefono.getValue(i,5)) &&
									                 frm_ds_telefono.getValue(i,6) == 0){
										        aire = 'Si'
										        i = $max+1
									        }
									    }
								    }
						        }else{
						    	    if (frm_ds_ctrl_aire.getValue(i,4) > frm_ds2.getValue(j,7)){
						    		    i = $max+1
						    	    }
						    	}
						    }
					    }	
						
			/*				
						globals.vHiscli = frm_ds2.getValue(j,7)
						tbc_camas_to_tbc_ctrl_aire.loadAllRecords()
				        if (tbc_camas_to_tbc_ctrl_aire.getSize() > 0){
					        for (i= 1; i <= tbc_camas_to_tbc_ctrl_aire.getSize(); i++){
					        	tbc_camas_to_tbc_ctrl_aire.setSelectedIndex(i)
						        if(tbc_camas_to_tbc_ctrl_aire.ctrlaire5 == frm_ds2.getValue(j,9) && tbc_camas_to_tbc_ctrl_aire.ctrlaire4 == frm_ds2.getValue(j,8)){
						        	if (((globals.gbl_fecha_hoy_int >= tbc_camas_to_tbc_ctrl_aire.ctrlaire2) &&
							            (globals.gbl_fecha_hoy_int > tbc_camas_to_tbc_ctrl_aire.ctrlaire6)) ||
						        	     tbc_camas_to_tbc_ctrl_aire.ctrlaire6 == 0){
							    	        aire = 'Si'
							    	        i = 999	
							        }else{
								        if((globals.gbl_fecha_hoy_int >= tbc_camas_to_tbc_ctrl_aire.ctrlaire2) &&
								            tbc_camas_to_tbc_ctrl_aire.ctrlaire6 == 0){
									        aire = 'Si'
									        i = 999
								        }
								    }
							    }				
						    }
					    }
 
			*/
						var observa = ''
						if(frm_ds2.getValue(j,10) == 0){
							var si_hay = 0
							var fecha_adm = frm_ds2.getValue(j,22)
							var ambula = frm_ds2.getValue(j,26)
							var fecha_anulepic= frm_ds2.getValue(j,25)
							var fecha_epic= frm_ds2.getValue(j,27)
							var pasepiso= frm_ds2.getValue(j,28)
							var fecha_egresanat = frm_ds2.getValue(j,29)
							if(fecha_adm != 0 ){
						        if(ambula == 1 || ambula == 2){
						            observa = "Pac. con Alta Administrativa + Ambulancia"
						           	si_hay = 6
						        }else{
						        	observa = "Pac. con Alta Administrativa"
						        	si_hay = 7	
						        }
						    }else{
						    	if(fecha_anulepic != 0 ){
						    		if(ambula == 1 || ambula == 2){
						    			observa = "Pac. con Alerta por baja Epic. + Ambulancia"
						    			si_hay = 8
						            }else{
						        	    observa = "Pac. con Alerta por baja Epic."
						        	    si_hay = 9
						            }
						        }else{
						        	if(fecha_epic != 0 && pasepiso == 0){
						    	        var fecha_aux = new Date()
								        fecha_aux = globals.IntegerToDate(fecha_egresanat)
						                if(ambula == 1 || ambula == 2){
						        	        if (fecha_aux > globals.gbl_fecha_hoy){
						        	        	observa = "Pac. con Alta Médica Diferida + Ambulancia"
						        	        	si_hay = 1
						                    }else{
						        	            observa = "Pac. con Alta Medica + Ambulancia"
						        	            si_hay = 1
						                    }
						                }else{
						        	        if (fecha_aux > globals.gbl_fecha_hoy){
						                        observa = "Pac. con Alta Medica Diferida"
						                        si_hay = 2
						                    }else{
						        	            observa = "Pac. con Alta Medica"
						        	            si_hay = 2
						                    }
						                }
						            }
						            if(fecha_epic != 0 && pasepiso == 1){
						    	        fecha_aux = new Date()
								        fecha_aux = globals.IntegerToDate(fecha_egresanat)
						                if(ambula == 1 || ambula == 2){
						        	        if (fecha_aux > globals.gbl_fecha_hoy){
						                        observa = " Pac. con Alta Med. Dif. + Amb. -Ped. pase a "
						                        	observa += frm_ds2.getValue(j,30)
						                        si_hay = 4
						                    }else{
						        	            observa = "Pas. con Alta Medica + Ambulancia -Ped. pase a "
						        	            observa += frm_ds2.getValue(j,30)
						        	            si_hay = 4
						                    }
						                }else{
						        	        if (fecha_aux > globals.gbl_fecha_hoy){
						                        observa = "Pac. con Alta Medica Diferida - Ped. pase a "
						                        observa += frm_ds2.getValue(j,30)
						                        si_hay = 3
						                    }else{
						        	            observa = "Pac. con Alta Medica - Ped. pase a "
						        	            observa += frm_ds2.getValue(j,30)
						        	            si_hay = 3
						                    }
						                }		    	        
						            }
						        }
						    }
						    if(fecha_epic == 0 && pasepiso == 1){
						    	observa = "Pac. con Pedido de pase a "
						    	observa += frm_ds2.getValue(j,30)
						    	si_hay = 5
						    }
						    
						    // buscar si el pasiente tiene Oxigeno						    				    
						    if (md_pac_oxigeno == 0){
						    	si_oxigeno = 0				    		  						    		
					    		$pos = frm_ds_oxigeno.getColumnAsArray(4).indexOf(frm_ds2.getValue(j,7)) + 1
					    		$max = frm_ds_oxigeno.getMaxRowIndex()
							    if ($pos > 0){
								    for(i =$pos ; i <= $max; i++){								    							
								        if (frm_ds2.getValue(j,7) == frm_ds_oxigeno.getValue(i,4)){
								        	if (frm_ds_oxigeno.getValue(i,5) == globals.gbl_fecha_hoy_int || (globals.gbl_hora_hoy_int < 16 &&
						    		            (frm_ds_oxigeno.getValue(i,6) == 0 || frm_ds_oxigeno.getValue(i,6) == 99) || frm_ds_oxigeno.getValue(i,7) == 24)){
						    			        si_oxigeno = 1
												i = $max+1
								        	}
								        }else{
								    	    if (frm_ds_respirador.getValue(i,4) > frm_ds2.getValue(j,7)){
								    		    i = $max+1
								    	    }
								    	}
								    }
							    }
							}
				  /*
						    globals.vHiscli = frm_ds2.getValue(j,7) ii
							if (md_pac_oxigeno == 0){
								_tbc_oxigeno = tbc_admision_to_tbc_ped_oxig 
						        _tbc_oxigeno.loadAllRecords()
								si_oxigeno = 0
						        if (_tbc_oxigeno.getSize() > 0){
						    	   	for ( i= 1; i <= _tbc_oxigeno.getSize(); i++){
						    	   		_tbc_oxigeno.setSelectedIndex(i)
						    	   	    if (_tbc_oxigeno.ped_oxigfec == globals.gbl_fecha_hoy_int || (globals.gbl_hora_hoy_int < 16 &&
						    		        (_tbc_oxigeno.ped_oxigintervalo == 0 || _tbc_oxigeno.ped_oxigintervalo == 99) ||_tbc_oxigeno.ped_oxigdurante == 24)){
						    			    si_oxigeno = 1
										    i = 999
						    	   	    }
						    		}
						    	}
							}
				*/	
						    if (si_oxigeno == 1){
						    	switch (si_hay){
						    		case 0: observa = 'Paciente con Oxígeno                      '; break;
							    	case 8: observa = 'Pac. con Al. x baja Epic. + Oxígeno       '; break;
						    		case 9: observa = 'Pac. con Al. x baja Epic. + Amb. + Oxígeno'; break;
						    		case 7: observa = 'Pac. con Alta Administrativa + Oxígeno    '; break;
						    		case 6: observa = 'Pac. con Alta Adm. + Ambulancia + Oxígeno '; break;
						    		case 5: observa = 'Pac. con Oxígeno + Pedido de pase a '
						    		        observa += frm_ds2.getValue(j,30); break;
						    		case 4: observa = 'Alta Médica + Amb. + Oxíg. + Ped. pase a '
						    		        observa += frm_ds2.getValue(j,30); break;
						    		case 3: observa = 'Pac. con Alta Médica + Oxíg. + Ped.pase a '
						    		        observa += frm_ds2.getValue(j,30); break;
						    		case 2: observa = 'Pac. con Alta Médiva + Oxígeno            '; break;
						    		case 1: observa = 'Pac. con Alta Médica + Amb. + Oxígeno     '; break;
						    	}		    		
						    }     						    
						}				
      
						//Buscar si tiene acompañante- acompa						
						if (md_pac_noc == 0){
						    globals.vHiscli = frm_ds2.getValue(j,7)
					        aux_util = 0
						
					        if (frm_ds2.getValue(j,18) > 0 ){
 						        aux_util = frm_ds2.getValue(j,18)
					        }else{
						        if (frm_ds2.getValue(j,17) > 0 ){
							        aux_util = frm_ds2.getValue(j,17)
						        }else{
							        if (frm_ds2.getValue(j,16) > 0 ){
	  							        aux_util = frm_ds2.getValue(j,16)
							        }else{
								        if (frm_ds2.getValue(j,15) > 0){
									        aux_util = frm_ds2.getValue(j,15)			
								        }else{
									        if (frm_ds2.getValue(j,14) > 0){
										        aux_util = frm_ds2.getValue(j,14)
									        }else{
										        aux_util = frm_ds2.getValue(j,1)
									        }
									    }
								    }
							    }			
						    }
							$pos = frm_ds_aut_acomp.getColumnAsArray(4).indexOf(frm_ds2.getValue(j,7)) + 1
							$max = frm_ds_aut_acomp.getMaxRowIndex()
						    if ($pos > 0){
							    for(i =$pos ; i <= $max; i++){								    							
							        if (frm_ds2.getValue(j,7) == frm_ds_aut_acomp.getValue(i,4)){
							        	if ((globals.gbl_fecha_hoy_int >= frm_ds_aut_acomp.getValue(i,5)) &&
								            (globals.gbl_fecha_hoy_int <= frm_ds_aut_acomp.getValue(i,6))){
									        if(globals.gbl_fecha_hoy_int == frm_ds_aut_acomp.getValue(i,6)){
									            if(globals.gbl_hora_hoy_int <= 10){
									        	    acompa = 'Si'					        
									                i = $max+1
									            }
									        }else{
											    acompa = 'Si'
											    i = $max+1
											}
									    }
							        }else{
							    	    if (frm_ds_aut_acomp.getValue(i,4) > frm_ds2.getValue(j,7)){
							    		    i = $max+1
							    	    }
							    	}
							    }
						    }
			  /*
						    tbc_camas_to_tbc_aut_acomp.loadAllRecords()
						    if (tbc_camas_to_tbc_aut_acomp.getSize() > 0 && aux_util == 1){
							    for (i= 1; i <= tbc_camas_to_tbc_aut_acomp.getSize(); i++){
							    	tbc_camas_to_tbc_aut_acomp.setSelectedIndex(i)
								    if ((globals.gbl_fecha_hoy_int >= tbc_camas_to_tbc_aut_acomp.auac_fechadesde) &&
								        (globals.gbl_fecha_hoy_int <= tbc_camas_to_tbc_aut_acomp.auac_fechahasta)){
									    if(globals.gbl_fecha_hoy_int == tbc_camas_to_tbc_aut_acomp.auac_fechahasta){
									        if(globals.gbl_hora_hoy_int <= 10){
  									            acompa = 'Si'
									    	    i = 999
									        }		
									    }else{
										    acompa = 'Si'
										    i = 999				
								        }				
								    }
							    }			
					 	    }
				*/	 	    
						    if(acompa == '' && aux_util == 1){ 
						        $pos = frm_ds_visitas.getColumnAsArray(4).indexOf(frm_ds2.getValue(j,7)) + 1
								$max = frm_ds_visitas.getMaxRowIndex()
						        if ($pos > 0){
							        for(i =$pos ; i <= $max; i++){								    							
							            if (frm_ds2.getValue(j,7) == frm_ds_visitas.getValue(i,4)){ 
							            	if (frm_ds_visitas.getValue(i,5) != 0){
									    		i = $max+1 
									    	}else{
										        if(frm_ds_visitas.getValue(i,6) == 2 && frm_ds_visitas.getValue(i,5) == 0){
											        acompa = 'Noct.'	
											       i = $max+1
										        }
										    }
							            }else{
							    	        if (frm_ds_visitas.getValue(i,4) > frm_ds2.getValue(j,7)){
							    		        i = $max+1
							    	        }
							    	    }
							    	}
							    }
						        
						    }
							/*
						    if(acompa == '' && aux_util == 1){ 						    	
							    tbc_camas_to_tbc_visitas.loadAllRecords() 
							    if (tbc_camas_to_tbc_visitas.getSize() > 0){
								    for (i= 1; i <= tbc_camas_to_tbc_visitas.getSize(); i++){
								    	tbc_camas_to_tbc_visitas.setSelectedIndex(i)
								    	if (tbc_camas_to_tbc_visitas.visi_fechegre != 0){
								    		i = 999 
								    	}else{
									        if(tbc_camas_to_tbc_visitas.visi_hemodador == 2 && tbc_camas_to_tbc_visitas.visi_fechegre == 0){
										        acompa = 'Noct.'	
										       i = 999
									        }
									    }
								    }
							    }
						    
						    }*/
						}
					
				    }else{
				    	//Solo para estado Reservado
				    	
				    	if (frm_ds2.getValue(j,2) == 3){
				    		globals.gbl_habita = frm_ds2.getValue(j,8)
							globals.gbl_cama = frm_ds2.getValue(j,9)
				    		if (tbc_camas_to_tbc_res_camas.getSize() > 0){    			
				    			if(tbc_camas_to_tbc_res_camas.rca_tipo == 0){	
				    			   if(tbc_camas_to_tbc_res_camas.rca_hcl > 0){
				    			      	if(tbc_camas_to_tbc_res_camas.rca_thcl == 0){
				    			      		_ds2_histcli_nom = tbc_camas_to_tbc_res_camas.tbc_res_camas_to_tbc_admision.adm_apelnom
						    				hiscli = tbc_camas_to_tbc_res_camas.rca_hcl.toString()								
											switch (hiscli.length){
									    	    case 2: hiscli = hiscli.substr(0,1) + '/' + hiscli.substr(1,1);break;
									            case 3: hiscli = hiscli.substr(0,2) + '/' + hiscli.substr(2,1);break;
									            case 4: hiscli = hiscli.substr(0,3) + '/' + hiscli.substr(3,1);break;
									            case 5: hiscli = hiscli.substr(0,4) + '/' + hiscli.substr(4,1);break;
									            case 6: hiscli = hiscli.substr(0,5) + '/' + hiscli.substr(5,1);break;
									            case 7: hiscli = hiscli.substr(0,6) + '/' + hiscli.substr(6,1);break;
									            case 8: hiscli = hiscli.substr(0,7) + '/' + hiscli.substr(7,1);break;
									        }
				    				    }else{
				    				    	_ds2_histcli_nom = tbc_camas_to_tbc_res_camas.tbc_res_camas_to_tbc_hist_cab_new.histcabapellnom
				    				    	hiscli = tbc_camas_to_tbc_res_camas.tbc_res_camas_to_tbc_hist_cab_new.histcabnrounico
				    				    }
				    			      	edad = ''
									    fecha_ing = null
										hora_ing = ''
									    sexo = ''
									    telef = ''
									    aire = ''
				    				}else{
				    					_ds2_histcli_nom = 'RESERVADA ' + tbc_camas_to_tbc_res_camas.rca_apyno
										hiscli = tbc_camas_to_tbc_res_camas.rca_hcl.toString()								
										switch (hiscli.length){
								    	    case 2: hiscli = hiscli.substr(0,1) + '/' + hiscli.substr(1,1);break;
								            case 3: hiscli = hiscli.substr(0,2) + '/' + hiscli.substr(2,1);break;
								            case 4: hiscli = hiscli.substr(0,3) + '/' + hiscli.substr(3,1);break;
								            case 5: hiscli = hiscli.substr(0,4) + '/' + hiscli.substr(4,1);break;
								            case 6: hiscli = hiscli.substr(0,5) + '/' + hiscli.substr(5,1);break;
								            case 7: hiscli = hiscli.substr(0,6) + '/' + hiscli.substr(6,1);break;
								            case 8: hiscli = hiscli.substr(0,7) + '/' + hiscli.substr(7,1);break;
								        }
								        edad = ''
								    	fecha_ing = null
										hora_ing = ''
								    	sexo = ''
								    	telef = ''
								    	aire = ''
				    				}
				    			}else{
				    				_ds2_histcli_nom = 'RESERVADA ' + tbc_camas_to_tbc_res_camas.rca_apyno  
									hiscli = tbc_camas_to_tbc_res_camas.rca_hcl.toString()								
									switch (hiscli.length){
							    	    case 2: hiscli = hiscli.substr(0,1) + '/' + hiscli.substr(1,1);break;
							            case 3: hiscli = hiscli.substr(0,2) + '/' + hiscli.substr(2,1);break;
							            case 4: hiscli = hiscli.substr(0,3) + '/' + hiscli.substr(3,1);break;
							            case 5: hiscli = hiscli.substr(0,4) + '/' + hiscli.substr(4,1);break;
							            case 6: hiscli = hiscli.substr(0,5) + '/' + hiscli.substr(5,1);break;
							            case 7: hiscli = hiscli.substr(0,6) + '/' + hiscli.substr(6,1);break;
							            case 8: hiscli = hiscli.substr(0,7) + '/' + hiscli.substr(7,1);break;
							        }
							        edad = ''
							    	fecha_ing = null
									hora_ing = ''
							    	sexo = ''
							    	telef = ''
							    	aire = ''
				    			}
				    			if (tbc_camas_to_tbc_res_camas.tbc_res_camas_to_tbc_patologia.pat_descrip != null){
				    			    _ds2_patologia = tbc_camas_to_tbc_res_camas.tbc_res_camas_to_tbc_patologia.pat_descrip
				    			}else{
				    				_ds2_patologia = ''
				    			}
								_ds2_obra      = tbc_camas_to_tbc_res_camas.tbc_res_camas_to_tbc_obras.obr_razonsoc
				    			
								observa = 'viene ' 
				    			switch (tbc_camas_to_tbc_res_camas.rca_origen){
				    			    case 1: observa += 'de U.C.O.'; break;
				    			    case 2: observa += 'de U.T.I.'; break;
				    			    case 3: observa += 'de Cirugía'; break;
				    			    case 4: observa += 'de Hemodinamia'; break;
				    			    case 5: observa += 'de Guardia'; break;
				    			    case 6: observa += 'Derivado'; break;
				    			    case 7: observa += 'del Interior'; break;    								
				    			}			    			
				    		}
				    	}
				    	
				    }
				    var utilidad 
				    aux_util = 0
				    if (frm_ds2.getValue(j,18) > 0 ){
					    aux_util = frm_ds2.getValue(j,18)
				    }else{
					    if (frm_ds2.getValue(j,17) > 0 ){
						    aux_util = frm_ds2.getValue(j,17)
					    }else{
						    if (frm_ds2.getValue(j,16) > 0 ){
  							    aux_util = frm_ds2.getValue(j,16)
						    }else{
							    if (frm_ds2.getValue(j,15) > 0){
								    aux_util = frm_ds2.getValue(j,15)			
							    }else{
								    if (frm_ds2.getValue(j,14) > 0){
									    aux_util = frm_ds2.getValue(j,14)
								    }else{
									    aux_util = frm_ds2.getValue(j,1)
								    }
								}
							}
						}			
					}
				    
				    switch (aux_util){
				    	case  1: utilidad = 'Piso  ';break;
				        case  2: utilidad = 'T.I.  ';break;
				        case  3: utilidad = 'Int.G.';break;
				        case  4: utilidad = 'U.C.O.';break;
				        case  5: utilidad = 'R.C.V.';break;
				        case  6: utilidad = 'T.I.N.';break;
				        case  7: utilidad = 'Morge ';break;
				        case  8: utilidad = 'T.I.P.';break;
				        case  9: utilidad = 'Nurs. ';break;
				        case 10: utilidad = 'T.I.2 ';break;
				        case 11: utilidad = 'I.C.  ';break;
				        case 12: utilidad = 'T.Ime.';break;
				        case 13: utilidad = 'R.Ane.';break;
				        case 14: utilidad = 'Int.H.';break;
				        case 15: utilidad = 'Int.B.';break;
				        case 16: utilidad = 'I.O.Q.';break;	 
				    } 
				   		        
				    var estado 
				    switch (frm_ds2.getValue(j,2)){
				    	case 0: estado = 'Disponible';break;
				        case 1: estado = 'Ocupada';break;
				        case 2: estado = 'Bloq. x Pat.';break;
				        case 3: estado = 'Reservada';break;
				        case 4: estado = 'Mantenimiento';break;
				        case 5: estado = 'con Acomp.';break;
				        case 6: estado = 'Bloqueda';break;
				        case 7: estado = 'en Preparación';break;
				    }
				    if (frm_ds2.getValue(j,2) != 0){
					     if(frm_ds2.getValue(j,6) == 1){
						     estado = 'Aislado'
					     }
				    } 
				   				
					var oxigeno = 'No'
				    if (frm_ds2.getValue(j,4) == 1 && frm_ds2.getValue(j,5) == 1){
					    oxigeno = 'Si'
				    } 
				    if (hiscli == ''){
				    	hiscli = ''
				    	_ds2_histcli_nom = ''
				    	edad = ''
				    	fecha_ing = null
						hora_ing = ''
				    	sexo = ''
				    	arm = ''
				    	telef = ''
				    	aire = ''
				    	_ds2_patologia = ''
				    	_ds2_obra = ''
				    	oxigeno = ''
				    	acompa = ''	
				    	observa = ''
				    }
					
					$ds2.addRow([globals.gbl_habita, cama_aux, hiscli, _ds2_histcli_nom, utilidad, edad, fecha_ing, hora_ing,sexo, estado, arm, telef, aire, _ds2_patologia, _ds2_obra, oxigeno, observa, acompa, _ds2_tiphist_cli, _ds2_cam_histclin, tel_fam])
				}    	    
			}
			}
    	    if (md_habitacion != null && _ds2_cam_habita > md_habitacion){
    	    	j = 9999
    	    }
        }
        //Crear DataSource desde Dataset $ds2
		var $tipos = [JSColumn.NUMBER,JSColumn.TEXT,JSColumn.TEXT,JSColumn.TEXT,JSColumn.TEXT,JSColumn.TEXT,JSColumn.DATETIME,
		              JSColumn.TEXT,JSColumn.TEXT, JSColumn.TEXT,JSColumn.TEXT,JSColumn.TEXT,JSColumn.TEXT,JSColumn.TEXT,JSColumn.TEXT,
					  JSColumn.TEXT,JSColumn.TEXT,JSColumn.TEXT,JSColumn.NUMBER,JSColumn.NUMBER,JSColumn.TEXT]

		var $frm = solutionModel.getForm('frm_Mapa_Cama_Habita_dtl')
		$frm.dataSource = $ds2.createDataSource('Ds_AuxMapa', $tipos)
		forms.frm_Mapa_Cama_Habita_dtl.controller.recreateUI()      
    }	
}
