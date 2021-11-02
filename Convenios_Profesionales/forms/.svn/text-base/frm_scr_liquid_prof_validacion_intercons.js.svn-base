/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"819F09A0-6D59-4CA8-A723-D3556AAE5041"}
 */
var res_urgente = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"C63EADD3-AD71-42F7-9585-062D68027568",variableType:8}
 */
var res_cod_obra = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"A53BCDDB-4305-48A5-980F-ED1A1C49063F",variableType:8}
 */
var res_validado = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"88E15E40-33D9-4309-A1DD-A8F374D310E6",variableType:8}
 */
var res_imp_valor = 0;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"98CE3BE3-DEEE-4481-9EDC-99EDD8C6646F"}
 */
var res_txt_nomencla = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"4D93DDF9-A30E-40D3-BFD2-B6711899CF1B"}
 */
var $txt_nomencla = '';

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"15C00ED4-F806-48BF-94CC-491E82898E78",variableType:8}
 */
var res_cantidad = 0;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"A0362BE4-0F5B-4331-84FD-630FA92F7535"}
 */
var res_des_nomencla = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"6D1CC01E-B1DC-44C7-A725-57371F7E498B"}
 */
var res_afiliado = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"C7B6BFFB-F02D-4F30-83DA-4ACB3410F2CA",variableType:8}
 */
var res_hist_cli = 0;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"736BF796-D17C-4CA2-A18A-89CF3E581136"}
 */
var res_iva = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"F3EACC06-25B1-4E90-8843-0C3F95669575"}
 */
var res_plan_obra = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"A80B32CE-F669-4DD9-86C0-C57706D0FE71"}
 */
var res_des_obra = null;
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"A25AD0B0-95FD-44D6-8AD9-4DF7C48EA89B"}
 */
var res_des_hist_cli = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"E6369BB7-2A01-4EE5-844A-2B44FA08E809"}
 */
var res_hora = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"6EB095F6-5C4E-42F6-AF42-546158717EFA",variableType:93}
 */
var res_fecha = null;
/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"3C186C73-75D4-4CCD-9722-9E087F59158E",variableType:93}
 */
var res_fecha_realizado = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"DC2FCE46-4542-4984-9371-6AD906F06DF8"}
 */
var res_des_esp = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"C272F86A-6137-4CFA-9168-589BE53626C7"}
 */
var res_des_med = null;

/**
 * @param event
 *
 * @properties={typeid:24,uuid:"9606FD4C-CFBB-4E37-88F0-0D9FDB7441C8"}
 */
function onAction_enabled(event) {
	var $imp_iva_10 = 0
	var $imp_iva_21 = 0
	$imp_iva_10 = (foundset.res_imp_valor * 10.5) /100
	$imp_iva_21 = (foundset.res_imp_valor * 21) /100
	if(foundset.enabled == 0 || null){
		if (foundset.res_iva == 'No gravado       ' || globals.gbl_sit_iva > 1){
		    forms.frm_liquid_prof_validacion.frm_total_cant_1  = forms.frm_liquid_prof_validacion.frm_total_cant_1  - foundset.res_cantidad
			forms.frm_liquid_prof_validacion.frm_total_valor_1 = forms.frm_liquid_prof_validacion.frm_total_valor_1 - foundset.res_imp_valor
			
			forms.frm_liquid_prof_validacion.frm_total_imp_1   = forms.frm_liquid_prof_validacion.frm_total_imp_1   - 
			                                                         (foundset.res_cantidad * (foundset.res_imp_valor))
			
			forms.frm_liquid_prof_validacion.frm_total_imp_4   = forms.frm_liquid_prof_validacion.frm_total_imp_4   -
                                                                         (foundset.res_cantidad * (foundset.res_imp_valor))	
			if(foundset.res_imp_valor > 0){
			  	forms.frm_liquid_prof_validacion.frm_total_cant_pdf1  = forms.frm_liquid_prof_validacion.frm_total_cant_pdf1  - foundset.res_cantidad            
			}
		}else{
			if (foundset.res_iva == 'Alícuota Reducida'){
				forms.frm_liquid_prof_validacion.frm_total_cant_2  = forms.frm_liquid_prof_validacion.frm_total_cant_2  - foundset.res_cantidad
				forms.frm_liquid_prof_validacion.frm_total_valor_2 = forms.frm_liquid_prof_validacion.frm_total_valor_2 - foundset.res_imp_valor				
				forms.frm_liquid_prof_validacion.frm_total_iva_2   = forms.frm_liquid_prof_validacion.frm_total_iva_2   - $imp_iva_10
				forms.frm_liquid_prof_validacion.frm_total_imp_2   = forms.frm_liquid_prof_validacion.frm_total_imp_2   - 
				                                                         (foundset.res_cantidad * (foundset.res_imp_valor + $imp_iva_10))
				
				forms.frm_liquid_prof_validacion.frm_total_iva_4   = forms.frm_liquid_prof_validacion.frm_total_iva_4   - $imp_iva_10
				forms.frm_liquid_prof_validacion.frm_total_imp_4   = forms.frm_liquid_prof_validacion.frm_total_imp_4   -
                                                                         (foundset.res_cantidad * (foundset.res_imp_valor + $imp_iva_10))
				if(foundset.res_imp_valor > 0){
				  	forms.frm_liquid_prof_validacion.frm_total_cant_pdf2  = forms.frm_liquid_prof_validacion.frm_total_cant_pdf2  - foundset.res_cantidad            
				}
			}else{
				if (foundset.res_iva == 'Alícuota General '){
					forms.frm_liquid_prof_validacion.frm_total_cant_3  = forms.frm_liquid_prof_validacion.frm_total_cant_3  - foundset.res_cantidad
					forms.frm_liquid_prof_validacion.frm_total_valor_3 = forms.frm_liquid_prof_validacion.frm_total_valor_3 - foundset.res_imp_valor
					forms.frm_liquid_prof_validacion.frm_total_iva_3   = forms.frm_liquid_prof_validacion.frm_total_iva_3   - $imp_iva_21
					forms.frm_liquid_prof_validacion.frm_total_imp_3   = forms.frm_liquid_prof_validacion.frm_total_imp_3   - 
					                                                         (foundset.res_cantidad * (foundset.res_imp_valor - $imp_iva_21))
																			 
					forms.frm_liquid_prof_validacion.frm_total_iva_4   = forms.frm_liquid_prof_validacion.frm_total_iva_4   - $imp_iva_21
					forms.frm_liquid_prof_validacion.frm_total_imp_4   = forms.frm_liquid_prof_validacion.frm_total_imp_4   -
                                                                             (foundset.res_cantidad * (foundset.res_imp_valor + $imp_iva_21))
					if(foundset.res_imp_valor > 0){
					 	forms.frm_liquid_prof_validacion.frm_total_cant_pdf3  = forms.frm_liquid_prof_validacion.frm_total_cant_pdf3  - foundset.res_cantidad            
					}
				}
		    }
		}
		forms.frm_liquid_prof_validacion.frm_total_cant_4  = forms.frm_liquid_prof_validacion.frm_total_cant_4  - foundset.res_cantidad
		forms.frm_liquid_prof_validacion.frm_total_valor_4 = forms.frm_liquid_prof_validacion.frm_total_valor_4 - foundset.res_imp_valor
		if(foundset.res_imp_valor > 0){
		   	forms.frm_liquid_prof_validacion.frm_total_cant_pdf4  = forms.frm_liquid_prof_validacion.frm_total_cant_pdf4  - foundset.res_cantidad            
		}
				    				
	}else{
		if (foundset.res_iva == 'No gravado       ' || globals.gbl_sit_iva > 1){
		    forms.frm_liquid_prof_validacion.frm_total_cant_1  = forms.frm_liquid_prof_validacion.frm_total_cant_1  + foundset.res_cantidad
			forms.frm_liquid_prof_validacion.frm_total_valor_1 = forms.frm_liquid_prof_validacion.frm_total_valor_1 + foundset.res_imp_valor
			
			forms.frm_liquid_prof_validacion.frm_total_imp_1   = forms.frm_liquid_prof_validacion.frm_total_imp_1   + 
			                                                         (foundset.res_cantidad * (foundset.res_imp_valor))
									
			forms.frm_liquid_prof_validacion.frm_total_imp_4   = forms.frm_liquid_prof_validacion.frm_total_imp_4   +
                                                                         (foundset.res_cantidad * (foundset.res_imp_valor))
			if(foundset.res_imp_valor > 0){
			 	forms.frm_liquid_prof_validacion.frm_total_cant_pdf1  = forms.frm_liquid_prof_validacion.frm_total_cant_pdf1  + foundset.res_cantidad            
			}
		}else{
			if (foundset.res_iva == 'Alícuota Reducida'){
				forms.frm_liquid_prof_validacion.frm_total_cant_2  = forms.frm_liquid_prof_validacion.frm_total_cant_2  + foundset.res_cantidad
				forms.frm_liquid_prof_validacion.frm_total_valor_2 = forms.frm_liquid_prof_validacion.frm_total_valor_2 + foundset.res_imp_valor
				forms.frm_liquid_prof_validacion.frm_total_iva_2   = forms.frm_liquid_prof_validacion.frm_total_iva_2   + $imp_iva_10
				forms.frm_liquid_prof_validacion.frm_total_imp_2   = forms.frm_liquid_prof_validacion.frm_total_imp_2   + 
				                                                         (foundset.res_cantidad * (foundset.res_imp_valor + $imp_iva_10))				                                                      																
				
				forms.frm_liquid_prof_validacion.frm_total_iva_4   = forms.frm_liquid_prof_validacion.frm_total_iva_4   + $imp_iva_10
				forms.frm_liquid_prof_validacion.frm_total_imp_4   = forms.frm_liquid_prof_validacion.frm_total_imp_4   +
				                                                         (foundset.res_cantidad * (foundset.res_imp_valor + $imp_iva_10))
				if(foundset.res_imp_valor > 0){
				 	forms.frm_liquid_prof_validacion.frm_total_cant_pdf2  = forms.frm_liquid_prof_validacion.frm_total_cant_pdf2  + foundset.res_cantidad            
				}
			}else{
				if (foundset.res_iva == 'Alícuota General '){
					forms.frm_liquid_prof_validacion.frm_total_cant_3  = forms.frm_liquid_prof_validacion.frm_total_cant_3  + foundset.res_cantidad
					forms.frm_liquid_prof_validacion.frm_total_valor_3 = forms.frm_liquid_prof_validacion.frm_total_valor_3 + foundset.res_imp_valor
					forms.frm_liquid_prof_validacion.frm_total_iva_3   = forms.frm_liquid_prof_validacion.frm_total_iva_3   + $imp_iva_21
					forms.frm_liquid_prof_validacion.frm_total_imp_3   = forms.frm_liquid_prof_validacion.frm_total_imp_3   + 
					                                                         (foundset.res_cantidad * (foundset.res_imp_valor + $imp_iva_21))
					
					forms.frm_liquid_prof_validacion.frm_total_iva_4   = forms.frm_liquid_prof_validacion.frm_total_iva_4   + $imp_iva_21
					forms.frm_liquid_prof_validacion.frm_total_imp_4   = forms.frm_liquid_prof_validacion.frm_total_imp_4   + 
					                                                        (foundset.res_cantidad * (foundset.res_imp_valor + $imp_iva_21))
					if(foundset.res_imp_valor > 0){
					  	forms.frm_liquid_prof_validacion.frm_total_cant_pdf3  = forms.frm_liquid_prof_validacion.frm_total_cant_pdf3  + foundset.res_cantidad            
					}
				}
		    }
		}
		forms.frm_liquid_prof_validacion.frm_total_cant_4  = forms.frm_liquid_prof_validacion.frm_total_cant_4  + foundset.res_cantidad
		forms.frm_liquid_prof_validacion.frm_total_valor_4 = forms.frm_liquid_prof_validacion.frm_total_valor_4 + foundset.res_imp_valor
		if(foundset.res_imp_valor > 0){
		   	forms.frm_liquid_prof_validacion.frm_total_cant_pdf4  = forms.frm_liquid_prof_validacion.frm_total_cant_pdf4  + foundset.res_cantidad            
		}
	}
}

/**
 * @param event
 *
 * @properties={typeid:24,uuid:"752C4832-442D-429C-B68F-4FD65522E4C2"}
 */
function onAction_selec(event) {
	/*var $max = databaseManager.getFoundSetCount(foundset)		
	var fsUpdater = databaseManager.getFoundSetUpdater(foundset)
	fsUpdater.setColumn('enabled',1)	
	fsUpdater.performUpdate()
	*/
	var $max = foundset.getSize()
	for (var i= 1; i <= $max; i++){
		foundset.setSelectedIndex(i)
		if(foundset.res_validado == 0){
			foundset.enabled = 1
		}
	}
	calcular_totales()
}

/**
 * @properties={typeid:24,uuid:"0213D6DA-6183-40FD-970F-8304592DAC6B"}
 */
function calcular_totales(){
	var $max = foundset.getSize()
	forms.frm_liquid_prof_validacion.inicializa_tot()
	for (var i= 1; i <= $max; i++){
		foundset.setSelectedIndex(i)
		if(foundset.res_validado == 0 && foundset.enabled == 1){
		    var $imp_iva_10 = 0
		    var $imp_iva_21 = 0
	        $imp_iva_10 = (foundset.res_imp_valor * 10.5) /100
	        $imp_iva_21 = (foundset.res_imp_valor * 21) /100
		    if (foundset.res_iva == 'No gravado       ' || globals.gbl_sit_iva > 1){
		        forms.frm_liquid_prof_validacion.frm_total_cant_1  = forms.frm_liquid_prof_validacion.frm_total_cant_1  + foundset.res_cantidad
			    forms.frm_liquid_prof_validacion.frm_total_valor_1 = forms.frm_liquid_prof_validacion.frm_total_valor_1 + foundset.res_imp_valor
			
			    forms.frm_liquid_prof_validacion.frm_total_imp_1   = forms.frm_liquid_prof_validacion.frm_total_imp_1   + 
			                                                         (foundset.res_cantidad * (foundset.res_imp_valor))
				
		        forms.frm_liquid_prof_validacion.frm_total_imp_4   = forms.frm_liquid_prof_validacion.frm_total_imp_4   + 
 			                                                         (foundset.res_cantidad * (foundset.res_imp_valor))
			    if(foundset.res_imp_valor > 0){
				    forms.frm_liquid_prof_validacion.frm_total_cant_pdf1  = forms.frm_liquid_prof_validacion.frm_total_cant_pdf1  + foundset.res_cantidad            
				}
		    }else{
			    if (foundset.res_iva == 'Alícuota Reducida'){
				    forms.frm_liquid_prof_validacion.frm_total_cant_2  = forms.frm_liquid_prof_validacion.frm_total_cant_2  + foundset.res_cantidad
				    forms.frm_liquid_prof_validacion.frm_total_valor_2 = forms.frm_liquid_prof_validacion.frm_total_valor_2 + foundset.res_imp_valor
				    forms.frm_liquid_prof_validacion.frm_total_iva_2   = forms.frm_liquid_prof_validacion.frm_total_iva_2   + $imp_iva_10
				    forms.frm_liquid_prof_validacion.frm_total_imp_2   = forms.frm_liquid_prof_validacion.frm_total_imp_2   + 
				                                                         (foundset.res_cantidad * (foundset.res_imp_valor + $imp_iva_10))
																		 
			        forms.frm_liquid_prof_validacion.frm_total_iva_4   = forms.frm_liquid_prof_validacion.frm_total_iva_4   + $imp_iva_10
  		            forms.frm_liquid_prof_validacion.frm_total_imp_4   = forms.frm_liquid_prof_validacion.frm_total_imp_4   + 
 			                                                         (foundset.res_cantidad * (foundset.res_imp_valor + $imp_iva_10))
					if(foundset.res_imp_valor > 0){
					 	forms.frm_liquid_prof_validacion.frm_total_cant_pdf2  = forms.frm_liquid_prof_validacion.frm_total_cant_pdf2  + foundset.res_cantidad            
					}
			    }else{
				    if (foundset.res_iva == 'Alícuota General '){
					    forms.frm_liquid_prof_validacion.frm_total_cant_3  = forms.frm_liquid_prof_validacion.frm_total_cant_3  + foundset.res_cantidad
					    forms.frm_liquid_prof_validacion.frm_total_valor_3 = forms.frm_liquid_prof_validacion.frm_total_valor_3 + foundset.res_imp_valor
					    forms.frm_liquid_prof_validacion.frm_total_iva_3   = forms.frm_liquid_prof_validacion.frm_total_iva_3   + $imp_iva_21
					    forms.frm_liquid_prof_validacion.frm_total_imp_3   = forms.frm_liquid_prof_validacion.frm_total_imp_3   + 
					                                                         (foundset.res_cantidad * (foundset.res_imp_valor + $imp_iva_21))
				    
				        forms.frm_liquid_prof_validacion.frm_total_iva_4   = forms.frm_liquid_prof_validacion.frm_total_iva_4   + $imp_iva_21
		                forms.frm_liquid_prof_validacion.frm_total_imp_4   = forms.frm_liquid_prof_validacion.frm_total_imp_4   + 
			                                                         (foundset.res_cantidad * (foundset.res_imp_valor + $imp_iva_21))
				        if(foundset.res_imp_valor > 0){
						 	forms.frm_liquid_prof_validacion.frm_total_cant_pdf3  = forms.frm_liquid_prof_validacion.frm_total_cant_pdf3  + foundset.res_cantidad            
						}
				    }
		        }
		    }
		    forms.frm_liquid_prof_validacion.frm_total_cant_4  = forms.frm_liquid_prof_validacion.frm_total_cant_4  + foundset.res_cantidad
		    forms.frm_liquid_prof_validacion.frm_total_valor_4 = forms.frm_liquid_prof_validacion.frm_total_valor_4 + foundset.res_imp_valor
			if(foundset.res_imp_valor > 0){
			   	forms.frm_liquid_prof_validacion.frm_total_cant_pdf4  = forms.frm_liquid_prof_validacion.frm_total_cant_pdf4  + foundset.res_cantidad            
			}
	    }
	}
	application.updateUI()
	controller.setSelectedIndex(1)	
}

/**
 * @param event
 *
 * @properties={typeid:24,uuid:"EE2EB6C6-511B-41B6-A358-7CA65F11A32E"}
 */
function onAction_desel(event) {

	//var fsUpdater = databaseManager.getFoundSetUpdater(foundset)
	//fsUpdater.setColumn('enabled',0)	
	//fsUpdater.performUpdate()
	var $max = foundset.getSize()
	for (var i= 1; i <= $max; i++){
		foundset.setSelectedIndex(i)
		if(foundset.res_validado == 0){
			foundset.enabled = 0
		}
	}
	forms.frm_liquid_prof_validacion.inicializa_tot()
	controller.setSelectedIndex(1)
	application.updateUI()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"9467AB55-25D3-40B7-9FE4-761DBB4F6243"}
 */
function onAction_modifica_valores(event) {
	if(foundset.enabled == 1){
		onAction_selec(event) 
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"36631A5C-879A-40E7-BD1D-78F52B87C046"}
 * @AllowToRunInFind
 */
function onAction_modifica_nome(event) {
	foundset.res_txt_nomencla = foundset.res_txt_nomencla.replace('.','')
	foundset.res_txt_nomencla = foundset.res_txt_nomencla.replace('.','')
	var $aux_nomencla = foundset.res_txt_nomencla
	var largo = $aux_nomencla.length
	var esnumero = true;    
	globals.gbl_con_indice = 1;	
    for (var i= 0;i<largo && esnumero == true; i++){
	    if($aux_nomencla.charCodeAt(i)< 48 || $aux_nomencla.charCodeAt(i) > 57){
		    esnumero = false
	    }
    }
    if (esnumero){
 	   if(largo>6){
 		   //muestra mensaje de "dialogo"				   
			   globals.DIALOGS.showErrorDialog('Error','Código inexistente', 'Ok')
	   	   }else{
	   		   globals.gbl_nomencla = utils.stringToNumber($aux_nomencla.toString())	
			   globals.gbl_tipo_nom = 1
	   		   if (gbl_nom_to_nomencla.getSize() < 1){				   		       
				   globals.DIALOGS.showErrorDialog('Error','Código inexistente', 'Ok')
			       foundset.res_txt_nomencla = ''
			       foundset.res_des_nomencla = ''
			       foundset.res_cod_nomencla = 0	   
			   }else{
			   	   foundset.res_des_nomencla = gbl_nom_to_nomencla.nome_descr
				   foundset.res_grupo_nome   = gbl_nom_to_nomencla.nome_grupo
				   foundset.res_cod_nomencla = gbl_nom_to_nomencla.nome_codigo
				   convertir_nomencla(foundset.res_cod_nomencla)
			   	   foundset.res_txt_nomencla = $txt_nomencla
			   }		
	   	   }
    }else{
 	    globals.gbl_con_indice = 1		   
	    globals.gbl_con_busca = $aux_nomencla.toLocaleUpperCase()
        var win = application.createWindow("Busca_nome",JSWindow.MODAL_DIALOG)	
	    win.title= 'Buscar Nomenclador'
	    win.resizable = false
	    win.show(forms.frm_tab_nomencla)
	    if (forms.frm_scr_nomencla.foundset.nome_codigo > 0){
	        foundset.res_cod_nomencla = forms.frm_scr_nomencla.foundset.nome_codigo.toString()
	        foundset.res_des_nomencla = forms.frm_scr_nomencla.foundset.nome_descr
			foundset.res_grupo_nome   = forms.frm_scr_nomencla.foundset.nome_grupo
			convertir_nomencla(foundset.res_cod_nomencla)
		   	foundset.res_txt_nomencla = $txt_nomencla
	    }
    }      
    
	//modifica el valor del servicio
	var $Args
	var $fecha_desde = utils.dateFormat(foundset.res_fecha,'YYYY-MM-dd')	
	var $valor = 0
	var $SQL2 = "select * from tbl_conv_prof "
	    $SQL2+= "where conv_empresa = "
        $SQL2+= globals.gbl_con_empresa
        $SQL2+= " and conv_profesional = "
        $SQL2+= foundset.res_cod_med
        if(foundset.res_tipo_prestacion == 1){ 
            $SQL2+= " and conv_especialidad = "
            $SQL2+= foundset.res_cod_esp
        }	
		$SQL2+= " and conv_obra_social = "
		$SQL2+= foundset.res_cod_obra
		$SQL2+= " and conv_tipo_nom = "
		$SQL2+= foundset.res_tipo_nome
		$SQL2+= " and conv_grupo_nom = "
		$SQL2+= foundset.res_grupo_nome
		$SQL2+= " and conv_cod_nom = "
		$SQL2+= foundset.res_cod_nomencla
		$SQL2+= " and conv_fecha_desde <= '"
		$SQL2+= $fecha_desde
		$SQL2+= "' order by conv_fecha_desde desc"
	var $ds2  = databaseManager.getDataSetByQuery("desal", $SQL2, $Args, 1);
	var $max2 = $ds2.getMaxRowIndex()
	if ($max2 == 1){
		$valor = $ds2.getValue(1,10)
	}else{
		globals.DIALOGS.showErrorDialog('Error','Convenio no cargado', 'Ok')		
	}
	foundset.res_imp_valor = $valor	
	calcular_totales() 
}

/** 
 * @param aux_nomencla
 *
 * @properties={typeid:24,uuid:"726CBDFE-36BB-4317-817D-57DB43F7EAA5"}
 */
function convertir_nomencla(aux_nomencla){
    $txt_nomencla =  aux_nomencla.toString()					
    switch ($txt_nomencla.length){
        case 1: $txt_nomencla = '00.00.00' + $txt_nomencla.substr(0,1); break;
        case 2: $txt_nomencla = '00.00.' + $txt_nomencla.substr(0,1) + $txt_nomencla.substr(1,1) ; break;
        case 3: $txt_nomencla = '00.0' + $txt_nomencla.substr(0,1) + '.' + $txt_nomencla.substr(1,1) + $txt_nomencla.substr(2,1) ; break;
        case 4: $txt_nomencla = '00.' + $txt_nomencla.substr(0,1) + $txt_nomencla.substr(1,1) + '.' + $txt_nomencla.substr(2,1) + $txt_nomencla.substr(3,1) ; break;
        case 5: $txt_nomencla = '0' + $txt_nomencla.substr(0,1) + '.' + $txt_nomencla.substr(1,1) + $txt_nomencla.substr(2,1) + '.' + $txt_nomencla.substr(3,1) 
                        + $txt_nomencla.substr(4,1); break;				        
        case 6: $txt_nomencla = $txt_nomencla.substr(0,1) + $txt_nomencla.substr(1,1) + '.' + $txt_nomencla.substr(2,1) + $txt_nomencla.substr(3,1) + '.' 
                        + $txt_nomencla.substr(4,1) + $txt_nomencla.substr(5,1); break;
        default:$txt_nomencla = $txt_nomencla.substr(0,1) + $txt_nomencla.substr(1,1) + '.' + $txt_nomencla.substr(2,1) + $txt_nomencla.substr(3,1) + '.' 
                        + $txt_nomencla.substr(4,1) + $txt_nomencla.substr(5,1); break;
    }
}

/**
 * Called before the form component is rendered.
 *
 * @param {JSRenderEvent} event the render event
 *
 * @properties={typeid:24,uuid:"2559C01B-54DB-4B5F-A184-32DB0C2C283B"}
 */
function onRender_marcar_validados(event) {
	var $rcd = event.getRecord()
	var $elemento = event.getRenderable().getName()
	var $prop = event.getRenderable()
	switch ($rcd.res_validado){	
		case 1   : if ($elemento == 'enabled' || $elemento == 'codigo' || $elemento == 'especialidad' || $elemento == 'fecha' || $elemento == 'hora' || $elemento == 'obra_social' ||
				       $elemento == 'cod_obra' || $elemento == 'obra_plan' || $elemento == 'iva' || $elemento == 'hist_clin' || $elemento == 'cod_nome' ||
				       $elemento == 'nomenclador' || $elemento == 'cantidad' ||$elemento == 'imp_valor' || $elemento == 'urgente' || 
					   $elemento == 'fecha_solic' || $elemento == 'des_hist_clin'){
                	   $prop.enabled  = false
					   $prop.fgcolor = '#ffffff' 
                   } ; break
         default : if ($elemento == 'enabled' || $elemento == 'codigo' || $elemento == 'especialidad' || $elemento == 'fecha' || $elemento == 'hora' || $elemento == 'obra_social' ||
		               $elemento == 'cod_obra' || $elemento == 'obra_plan' || $elemento == 'iva' || $elemento == 'hist_clin' || $elemento == 'cod_nome' ||
		               $elemento == 'nomenclador' || $elemento == 'cantidad' ||$elemento == 'imp_valor' || $elemento == 'urgente'|| 
					   $elemento == 'fecha_solic' || $elemento == 'des_hist_clin'){
        	           $prop.enabled  = true
					   $prop.fgcolor = '#000000'
                   } ; break
    }	
}
