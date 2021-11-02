/**
 * @properties={typeid:35,uuid:"334C5114-5D6C-45D2-9F0D-F346B0B4B485",variableType:-4}
 */
var fRecordIndex = null
/**
 * @properties={typeid:35,uuid:"F751EFC0-4821-487C-98B4-266FB4AB7152",variableType:-4}
 */
var fDoubleClickTime = null
/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"127D22D9-4208-4797-81CE-D8B0FCD601F9"}
 * @AllowToRunInFind
 */
function onShow_limpia(firstShow, event) { 
	if (globals.gbl_habitacion == 999){
		elements.lbl_fecha_ing.text = "Fecha de Egr."
		elements.lbl_hora_ing.text = "H. Egr."
	}else{
		elements.lbl_fecha_ing.text = "Fecha de Ing."
		elements.lbl_hora_ing.text = "H. Ing."
	}	
}
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"30E26812-079B-4C03-B9D4-72E5C597E9E6"}
 */
function onAction_buscar_dp(event) {
	//var aux_hist_clin_nro =  2061090 
		//2230180 
		//2015740
	forms.frm_Mapa_Cama_Habita.elements.lbl_procesando.visible = true
	application.updateUI()
	var aArgs = new Array();
    var SQL = "select adm_histclin, adm_apellido, adm_nombre, adm_apelcas, adm_tipdocu, adm_nrodocu, " 
            +"adm_fecnac, adm_estadocivil, adm_histclinuni, histcabespersonal, adm_partepolicial, "
			+"intpolavisofecha, intpolavisofecvisi, adm_domicilio, adm_localidad, adm_telefefono, "
			+"adm_codpostal, adm_emailpac, adm_planobr, adm_nrobenef, "
			+"adm_fecing, adm_horing, OPER_I.ope_descrip, if (adm_tipmedinterna = 0 , PMED_I.per_apelnom, MED_I.med_apenom) med_ingreso, "
	        +"adm_fecepic, adm_horepic, if (adm_tipmedaltaclinica = 0 , PMED_AM.per_apelnom, MED_AM.med_apenom) med_alta_m, "
			+"adm_fecaltaefec, adm_horaaltaefec, OPER_A.ope_descrip, "
			+"adm_nomrespon, adm_domirespon, adm_localrespon, adm_telefrespon, adm_emailrespon, adm_parentrespon, adm_tipdocrespon, adm_nrodocrespon "
			+"from tbc_admision "
		    +"left join tbc_hist_cab_new HISCAB on HISCAB.histcabnrounico = adm_histclinuni "
		    +"left join maestros.tbc_intpol_aviso INTER on INTER.intpolavisohc = adm_histclin "
		    +"left join maestros.tbc_operador OPER_I on OPER_I.ope_codileg = adm_nroopering  and OPER_I.ope_tipleg = adm_tipopering "
		    +"left join maestros.tbc_medicos MED_I  on MED_I.med_codigo  = adm_medinterna "
		    +"left join maestros.tbc_personal PMED_I on PMED_I.per_legajo = adm_medinterna "
		    +"left join maestros.tbc_medicos MED_AM  on MED_AM.med_codigo  = adm_medaltaclinica "
		    +"left join maestros.tbc_personal PMED_AM on PMED_AM.per_legajo = adm_medaltaclinica "
		    +"left join maestros.tbc_operador OPER_A on OPER_A.ope_codileg = adm_nrooperaltaefec  and OPER_A.ope_tipleg = adm_tipoperaltaefec "
		    +"where adm_histclin = "
		    + aux_hist_clin_nro            
    var _ds = databaseManager.getDataSetByQuery("asistencial", SQL, aArgs, 1);
		    
    aArgs = new Array();
	SQL = "select det2, det3, det4, det7, det8, det9, det10 " 
	        +"from tbc_detalle "	        
			+"where det1 = "
			+ aux_hist_clin_nro            
	var _ds2 = databaseManager.getDataSetByQuery("asistencial", SQL, aArgs, -1);
			
    if (_ds.getMaxRowIndex() > 0){ 
    	forms.frm_Mapa_Cama_Habita_dtl_dtl1.frm_hist_clin = aux_hist_clin
    	forms.frm_Mapa_Cama_Habita_dtl_dtl1.frm_apellido  = _ds.getValue(1,2)
		forms.frm_Mapa_Cama_Habita_dtl_dtl1.frm_nombre    = _ds.getValue(1,3)
		forms.frm_Mapa_Cama_Habita_dtl_dtl1.frm_apelcas   = _ds.getValue(1,4)
        forms.frm_Mapa_Cama_Habita_dtl_dtl1.frm_tipo_doc  = application.getValueListDisplayValue('vl_documento',_ds.getValue(1,5))
		forms.frm_Mapa_Cama_Habita_dtl_dtl1.frm_nro_doc   = _ds.getValue(1,6)
		forms.frm_Mapa_Cama_Habita_dtl_dtl1.frm_fec_nac   =  globals.IntegerToDate(_ds.getValue(1,7))
		forms.frm_Mapa_Cama_Habita_dtl_dtl1.frm_histclinuni = _ds.getValue(1,9)
		var $histcabespersonal = _ds.getValue(1,10) 
		if ($histcabespersonal == 0 || $histcabespersonal == null){
			//Datos Personales
			forms.frm_Mapa_Cama_Habita_dtl_dtl1.frm_estadocivil  = application.getValueListDisplayValue('vl_estado_civil',_ds.getValue(1,8))
	        	       
		    switch (_ds.getValue(1,11)){
	           case 1: forms.frm_Mapa_Cama_Habita_dtl_dtl1.frm_int_pol = 'SI'
	        	       if (_ds.getValue(1,12) > 0){
	        	    	   if (_ds.getValue(1,13) == 0){
	        	    		   forms.frm_Mapa_Cama_Habita_dtl_dtl1.frm_int_pol = 'Avisado'
	        	    	   }else{
	        	    		   forms.frm_Mapa_Cama_Habita_dtl_dtl1.frm_int_pol = 'No Corresponde'
	        	    	   }
	        	       }else{
	        	    	   forms.frm_Mapa_Cama_Habita_dtl_dtl1.frm_int_pol = 'No Avisado'	        	    	   
	        	       }
	        	       ; break;
	           case 0: forms.frm_Mapa_Cama_Habita_dtl_dtl1.frm_int_pol = 'NO'; break;
		    }
		   
		    forms.frm_Mapa_Cama_Habita_dtl_dtl2.frm_domicilio = _ds.getValue(1,14)
	        forms.frm_Mapa_Cama_Habita_dtl_dtl2.frm_localidad = _ds.getValue(1,15)
	        forms.frm_Mapa_Cama_Habita_dtl_dtl2.frm_emailpac  = _ds.getValue(1,18)
	        forms.frm_Mapa_Cama_Habita_dtl_dtl2.frm_telefono  = _ds.getValue(1,16)
	    	forms.frm_Mapa_Cama_Habita_dtl_dtl2.frm_codpostal = _ds.getValue(1,17)
			
			//Datos Cobertura
			forms.frm_Mapa_Cama_Habita_dtl_dtl3.frm_obra     = aux_obra
			forms.frm_Mapa_Cama_Habita_dtl_dtl3.frm_planobr  = _ds.getValue(1,19)
			forms.frm_Mapa_Cama_Habita_dtl_dtl3.frm_nrobenef = _ds.getValue(1,20)
			forms.frm_Mapa_Cama_Habita_dtl_dtl3.frm_patoling = aux_patologia
			
			//Datos Ingreso/Egreso	
			var $Fecha_String = _ds.getValue(1,21).toString()
		 	var $fecha_aux = $Fecha_String.substr(6, 2) + '/' + $Fecha_String.substr(4, 2) + '/' + $Fecha_String.substr(0, 4)
			
			var $hora_aux 
			if (_ds.getValue(1,22) == 999){
				$hora_aux = _ds.getValue(1,22).toString()				
			}else{
		        $hora_aux = _ds.getValue(1,22).toString()
			}
			switch ($hora_aux.length){
                case 1: $hora_aux = '00:0' + $hora_aux.substr(0,1); break;
                case 2: $hora_aux = '00:' + $hora_aux.substr(0,1) + $hora_aux.substr(1,1) ; break;
                case 3: $hora_aux = '0' + $hora_aux.substr(0,1) + ':' + $hora_aux.substr(1,1) + $hora_aux.substr(2,1) ; break;
                case 4: $hora_aux = $hora_aux.substr(0,1) + $hora_aux.substr(1,1) + ':' + $hora_aux.substr(2,1) + $hora_aux.substr(3,1) ; break;
            }             
            forms.frm_Mapa_Cama_Habita_dtl_dtl4.frm_fecing = $fecha_aux + '     ' + $hora_aux
            	
			forms.frm_Mapa_Cama_Habita_dtl_dtl4.frm_opera_ing = _ds.getValue(1,23)
			forms.frm_Mapa_Cama_Habita_dtl_dtl4.frm_med_ing   = _ds.getValue(1,24)
			if (_ds.getValue(1,25)== 0){
				forms.frm_Mapa_Cama_Habita_dtl_dtl4.frm_fecalta = 'Internado Actualmente'
			}else{
				$Fecha_String = _ds.getValue(1,25).toString()
		 		$fecha_aux = $Fecha_String.substr(6, 2) + '/' + $Fecha_String.substr(4, 2) + '/' + $Fecha_String.substr(0, 4)
				
				if (_ds.getValue(1,26) == 999){
					$hora_aux = _ds.getValue(1,26).toString()				
				}else{
			        $hora_aux = _ds.getValue(1,26).toString()
				}
				switch ($hora_aux.length){
	                case 1: $hora_aux = '00:0' + $hora_aux.substr(0,1); break;
	                case 2: $hora_aux = '00:' + $hora_aux.substr(0,1) + $hora_aux.substr(1,1) ; break;
	                case 3: $hora_aux = '0' + $hora_aux.substr(0,1) + ':' + $hora_aux.substr(1,1) + $hora_aux.substr(2,1) ; break;
	                case 4: $hora_aux = $hora_aux.substr(0,1) + $hora_aux.substr(1,1) + ':' + $hora_aux.substr(2,1) + $hora_aux.substr(3,1) ; break;
	            }
				forms.frm_Mapa_Cama_Habita_dtl_dtl4.frm_fecalta = $fecha_aux + '     ' + $hora_aux
			}
			forms.frm_Mapa_Cama_Habita_dtl_dtl4.frm_med_alta = _ds.getValue(1,27)
			
			if (_ds.getValue(1,28)== 0){
				forms.frm_Mapa_Cama_Habita_dtl_dtl4.frm_fecaltaefe = 'No Egreso del Sanatorio'
			}else{
				$Fecha_String = _ds.getValue(1,28).toString()
		 		$fecha_aux = $Fecha_String.substr(6, 2) + '/' + $Fecha_String.substr(4, 2) + '/' + $Fecha_String.substr(0, 4)
				
				if (_ds.getValue(1,29) == 999){
					$hora_aux = _ds.getValue(1,29).toString()				
				}else{
			        $hora_aux = _ds.getValue(1,29).toString()
				}
				switch ($hora_aux.length){
	                case 1: $hora_aux = '00:0' + $hora_aux.substr(0,1); break;
	                case 2: $hora_aux = '00:' + $hora_aux.substr(0,1) + $hora_aux.substr(1,1) ; break;
	                case 3: $hora_aux = '0' + $hora_aux.substr(0,1) + ':' + $hora_aux.substr(1,1) + $hora_aux.substr(2,1) ; break;
	                case 4: $hora_aux = $hora_aux.substr(0,1) + $hora_aux.substr(1,1) + ':' + $hora_aux.substr(2,1) + $hora_aux.substr(3,1) ; break;
	            }
				forms.frm_Mapa_Cama_Habita_dtl_dtl4.frm_fecaltaefe = $fecha_aux + '     ' + $hora_aux
			}
			forms.frm_Mapa_Cama_Habita_dtl_dtl4.frm_opera_altaefe = _ds.getValue(1,30)
			
			// Datos responsable Solidario
			forms.frm_Mapa_Cama_Habita_dtl_dtl5.frm_apellido_nombre = _ds.getValue(1,31)
			forms.frm_Mapa_Cama_Habita_dtl_dtl5.frm_domicilio       = _ds.getValue(1,32)
	    	forms.frm_Mapa_Cama_Habita_dtl_dtl5.frm_localidad       = _ds.getValue(1,33)
	    	forms.frm_Mapa_Cama_Habita_dtl_dtl5.frm_emailres        = _ds.getValue(1,35)
	    	forms.frm_Mapa_Cama_Habita_dtl_dtl5.frm_telefono        = _ds.getValue(1,34)
			forms.frm_Mapa_Cama_Habita_dtl_dtl5.frm_parentesco      = application.getValueListDisplayValue('vl_parentesco',_ds.getValue(1,36))
			forms.frm_Mapa_Cama_Habita_dtl_dtl5.frm_tipo_doc        = application.getValueListDisplayValue('vl_documento',_ds.getValue(1,37))
			forms.frm_Mapa_Cama_Habita_dtl_dtl5.frm_nro_doc         = _ds.getValue(1,38)
	    }else{
	    	forms.frm_Mapa_Cama_Habita_dtl_dtl1.frm_estadocivil = ''
	    	forms.frm_Mapa_Cama_Habita_dtl_dtl1.frm_int_pol     = ''
	    	
	    	forms.frm_Mapa_Cama_Habita_dtl_dtl2.frm_domicilio = ''
	    	forms.frm_Mapa_Cama_Habita_dtl_dtl2.frm_localidad = ''
	    	forms.frm_Mapa_Cama_Habita_dtl_dtl2.frm_emailpac  = ''
	    	forms.frm_Mapa_Cama_Habita_dtl_dtl2.frm_telefono  = ''
	    	forms.frm_Mapa_Cama_Habita_dtl_dtl2.frm_codpostal = null
			
	    	forms.frm_Mapa_Cama_Habita_dtl_dtl5.frm_apellido_nombre = ''
			forms.frm_Mapa_Cama_Habita_dtl_dtl5.frm_domicilio  = ''
	    	forms.frm_Mapa_Cama_Habita_dtl_dtl5.frm_localidad  = ''
	    	forms.frm_Mapa_Cama_Habita_dtl_dtl5.frm_emailres   = ''
	    	forms.frm_Mapa_Cama_Habita_dtl_dtl5.frm_telefono   = ''
	    	forms.frm_Mapa_Cama_Habita_dtl_dtl5.frm_parentesco = ''
	    	forms.frm_Mapa_Cama_Habita_dtl_dtl5.frm_tipo_doc   = ''
	    	forms.frm_Mapa_Cama_Habita_dtl_dtl5.frm_nro_doc    = null
			
			forms.frm_Mapa_Cama_Habita_dtl_dtl3.frm_obra       = ''
			forms.frm_Mapa_Cama_Habita_dtl_dtl3.frm_planobr    = ''
			forms.frm_Mapa_Cama_Habita_dtl_dtl3.frm_nrobenef   = ''
			forms.frm_Mapa_Cama_Habita_dtl_dtl3.frm_patoling   = ''
				
			forms.frm_Mapa_Cama_Habita_dtl_dtl4.frm_fecing        = null        	
			forms.frm_Mapa_Cama_Habita_dtl_dtl4.frm_opera_ing     = null
			forms.frm_Mapa_Cama_Habita_dtl_dtl4.frm_med_ing       = null
			forms.frm_Mapa_Cama_Habita_dtl_dtl4.frm_fecalta       = ''
			forms.frm_Mapa_Cama_Habita_dtl_dtl4.frm_med_alta      = null
			forms.frm_Mapa_Cama_Habita_dtl_dtl4.frm_fecaltaefe    = ''
			forms.frm_Mapa_Cama_Habita_dtl_dtl4.frm_opera_altaefe = null

			
	    }
    	// Historico de camas
    	if (_ds2.getMaxRowIndex() > 0){
    		
    	    //Procesar y crear nuevo Dataset
	        var $ds2 = databaseManager.createEmptyDataSet()
		    $ds2.addColumn('aux_fec_ingreso',1,JSColumn.TEXT)   
		    $ds2.addColumn('aux_sector',2,JSColumn.TEXT)
		    $ds2.addColumn('aux_hab',3,JSColumn.TEXT)
		    $ds2.addColumn('aux_cam',4,JSColumn.TEXT)
		    $ds2.addColumn('aux_fec_egreso',5,JSColumn.TEXT)
		    $ds2.addColumn('aux_dias',6,JSColumn.TEXT)		    
		    
			for (var j = 1; j <= _ds2.getMaxRowIndex(); j++){
		    	$Fecha_String = _ds2.getValue(j,1).toString()
		 		$fecha_aux = $Fecha_String.substr(6, 2) + '/' + $Fecha_String.substr(4, 2) + '/' + $Fecha_String.substr(0, 4)
				
				if (_ds2.getValue(j,2) == 999){
					$hora_aux = _ds2.getValue(j,2).toString()				
				}else{
			        $hora_aux = _ds2.getValue(j,2).toString()
				}
				switch ($hora_aux.length){
	                case 1: $hora_aux = '00:0' + $hora_aux.substr(0,1); break;
	                case 2: $hora_aux = '00:' + $hora_aux.substr(0,1) + $hora_aux.substr(1,1) ; break;
	                case 3: $hora_aux = '0' + $hora_aux.substr(0,1) + ':' + $hora_aux.substr(1,1) + $hora_aux.substr(2,1) ; break;
	                case 4: $hora_aux = $hora_aux.substr(0,1) + $hora_aux.substr(1,1) + ':' + $hora_aux.substr(2,1) + $hora_aux.substr(3,1) ; break;
	            }
				var _ds2_fec_ingreso = $fecha_aux + '     ' + $hora_aux
		    	
			    var _ds2_sector      = _ds2.getValue(j,5)
			    var _ds2_hab         = _ds2.getValue(j,3)
			    var _ds2_cam         = _ds2.getValue(j,4)
				var _ds2_fec_egreso  = ''
				if (_ds2.getValue(j,6) > 0){
					$Fecha_String = _ds2.getValue(j,6).toString()
			 		$fecha_aux = $Fecha_String.substr(6, 2) + '/' + $Fecha_String.substr(4, 2) + '/' + $Fecha_String.substr(0, 4)
					
					if (_ds2.getValue(j,7) == 999){
						$hora_aux = _ds2.getValue(j,7).toString()				
					}else{
				        $hora_aux = _ds2.getValue(j,7).toString()
					}
					switch ($hora_aux.length){
		                case 1: $hora_aux = '00:0' + $hora_aux.substr(0,1); break;
		                case 2: $hora_aux = '00:' + $hora_aux.substr(0,1) + $hora_aux.substr(1,1) ; break;
		                case 3: $hora_aux = '0' + $hora_aux.substr(0,1) + ':' + $hora_aux.substr(1,1) + $hora_aux.substr(2,1) ; break;
		                case 4: $hora_aux = $hora_aux.substr(0,1) + $hora_aux.substr(1,1) + ':' + $hora_aux.substr(2,1) + $hora_aux.substr(3,1) ; break;
		            }					
					_ds2_fec_egreso  = $fecha_aux + '     ' + $hora_aux
				}			    
			    var _ds2_dias = 0
			    var $fecha_desde = new Date()
			    
			    $fecha_desde = globals.IntegerToDate(_ds2.getValue(j,1))                   
			    var $fecha_hasta = new Date()
			    $fecha_hasta = globals.gbl_fecha_hoy
				if (_ds2.getValue(j,6) > 0){
				    $fecha_hasta = globals.IntegerToDate(_ds2.getValue(j,6))
				}
				_ds2_dias = globals.Contar_dias($fecha_desde,$fecha_hasta)
	            _ds2_dias = _ds2_dias.toString()
							    
			    $ds2.addRow([_ds2_fec_ingreso, _ds2_sector, _ds2_hab, _ds2_cam, _ds2_fec_egreso, _ds2_dias])		
		    }
		
		    //Crear DataSource desde Dataset $ds2
		    var $tipos = [JSColumn.TEXT,JSColumn.TEXT,JSColumn.TEXT,JSColumn.TEXT,JSColumn.TEXT,JSColumn.TEXT,JSColumn.TEXT]

   		    var $frm = solutionModel.getForm('frm_Mapa_Cama_Habita_dtl_dtl6')
		    $frm.dataSource = $ds2.createDataSource('Ds_AuxMapa_h', $tipos)
		    forms.frm_Mapa_Cama_Habita_dtl_dtl6.controller.recreateUI()      
        }
		forms.frm_Mapa_Cama_Habita.elements.lbl_procesando.visible = false
	    var win = application.createWindow("Det_dp",JSWindow.MODAL_DIALOG)	
	    win.title= 'Datos Personales'
	    win.resizable = false
	    solutionModel.removeForm
	    win.show(forms.frm_Mapa_Cama_Habita_dtl_dtl1)
	    win.hide()	    
	    win.destroy()
    }else{
    	forms.frm_Mapa_Cama_Habita.elements.lbl_procesando.visible = false
    }
    
}

/**
 * Called before the form component is rendered.
 *
 * @param {JSRenderEvent} event the render event
 *
 * @properties={typeid:24,uuid:"BE311BF9-BE88-4FA8-9854-11270A06D190"}
 */
function onRender_mas_detalles(event) {
	var $rcd = event.getRecord()
	var $elemento = event.getRenderable().getName()
	var $prop = event.getRenderable()
	if ($rcd.aux_hist_clin != 0 && $rcd.aux_tiphist_cli == 0){
	    if ($elemento == 'bt_buscar_dp'){
        	$prop.visible = true        
	    }	
	}else{
		if ($elemento == 'bt_buscar_dp'){
        	$prop.visible = false        
	    }
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"FFC5AF22-9700-404E-83F2-6B4C60BD3B9F"}
 */
function onAction_doble_click(event) {
	if(foundset.getSelectedIndex() == fRecordIndex && (event.getTimestamp() - fDoubleClickTime ) < 500)
	   {
	      onAction_buscar_dp(event)
	   }
	   else
	   {
	      fRecordIndex = foundset.getSelectedIndex();
	      fDoubleClickTime = event.getTimestamp();
	   }
}
