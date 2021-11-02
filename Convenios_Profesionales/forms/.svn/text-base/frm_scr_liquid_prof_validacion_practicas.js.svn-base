/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"CD19F183-CF81-47D9-BD00-9A8967BB50BB"}
 */
var res_remoto = null;
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"18AC78A9-58EF-445A-AB0B-F5709650EFDC"}
 */
var res_urgente = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"919F2B42-97AA-4A14-A605-A79FAE5ADA79",variableType:93}
 */
var res_fecha_pedido = null;
/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"D276ACED-CADF-4EC4-A79D-DDF86EF6A0C3",variableType:93}
 */
var res_fecha_realizado = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"9D427F87-E8FC-49EB-8971-3C3C2BF99EC2",variableType:8}
 */
var res_cod_obra = null;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"A851F07E-1D02-4208-80A4-2BBE9DF828BD",variableType:8}
 */
var res_pedido = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"9AF47039-3FD4-4CDB-B96F-E6FCAF5B5AEA",variableType:8}
 */
var res_validado = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"4CD0D3E6-13EE-45B5-B4ED-06F5E620E3CF",variableType:8}
 */
var res_imp_valor = 0;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"2C796151-5402-4293-A817-4EB275B0E1E3"}
 */
var res_txt_nomencla = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"CD8F0ACA-8C41-4B87-A8CB-8BBC32313F3B"}
 */
var $txt_nomencla = '';

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"A279E026-7517-4108-A9AA-CD23457BA612",variableType:8}
 */
var res_cantidad = 0;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"0511AE76-65C5-4DF0-AAA3-08D83165D44F"}
 */
var res_des_nomencla = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"719B6CD3-9464-4C70-B87F-967915976A05"}
 */
var res_afiliado = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"8393315D-5041-439A-BEC9-AAA7739C35C4",variableType:8}
 */
var res_hist_cli = 0;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"75D03108-ED00-490D-9DAE-25156FC20053"}
 */
var res_iva = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"9F1AEE48-C70C-4260-854A-03E7062AA38F"}
 */
var res_plan_obra = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"2FF9A5C8-2505-4B30-8983-8D2E5DC78A82"}
 */
var res_des_obra = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"FBE6B921-762E-44CF-AB1A-93BF5EA36AAB"}
 */
var res_hora = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"2E97F03B-1A36-4D07-B231-76C059975328",variableType:93}
 */
var res_fecha = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"9BD71550-2652-4DBA-A56D-CCA479F62EDE"}
 */
var res_des_esp = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"3AFB95FD-D214-4D8C-8C21-324A179FB862"}
 */
var res_des_med = null;

/**
 * @param event
 *
 * @properties={typeid:24,uuid:"44F38B96-DFD2-4093-8962-7750482F5FD0"}
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
					   	forms.frm_liquid_prof_validacion.frm_total_cant_pdf2  = forms.frm_liquid_prof_validacion.frm_total_cant_pdf2  - foundset.res_cantidad            
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
 * @properties={typeid:24,uuid:"DDFFA4CF-C631-406E-96F8-023AA658C555"}
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
 * @properties={typeid:24,uuid:"1092A033-B71B-42C4-988D-1C36B50ADE79"}
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
 * @properties={typeid:24,uuid:"61026B4B-4DB0-4ECA-8C66-3093ADA3C390"}
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
 * @properties={typeid:24,uuid:"58D23D4C-3B2D-4608-B6C6-D47340C2B831"}
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
 * @properties={typeid:24,uuid:"6D6F6147-20D0-4866-9468-0F31DC755951"}
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
 * @properties={typeid:24,uuid:"9B82C00B-3A9A-420A-AAE1-76F0DD9B4DEB"}
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
 * @properties={typeid:24,uuid:"D2128902-88E5-460C-B365-04EBC8171039"}
 */
function onRender_marcar_validados(event) {
	var $rcd = event.getRecord()
	var $elemento = event.getRenderable().getName()
	var $prop = event.getRenderable()
	switch ($rcd.res_validado){	
		case 1   : if ($elemento == 'enabled' || $elemento == 'codigo' || $elemento == 'especialidad' || $elemento == 'fecha' || $elemento == 'hora' || $elemento == 'obra_social' ||
				       $elemento == 'cod_obra' || $elemento == 'obra_plan' || $elemento == 'iva' || $elemento == 'hist_clin' || $elemento == 'cod_nome' ||
				       $elemento == 'nomenclador' || $elemento == 'cantidad' ||$elemento == 'imp_valor' || $elemento == 'fecha_pedido' || $elemento == 'fecha_realizado' || 
					   $elemento == 'remoto' || $elemento == 'sitio'|| $elemento == 'pedido' || $elemento == 'iva'){
                	   $prop.enabled  = false
					   $prop.fgcolor = '#ffffff' 
                   } ; break
         default : if ($elemento == 'enabled' || $elemento == 'codigo' || $elemento == 'especialidad' || $elemento == 'fecha' || $elemento == 'hora' || $elemento == 'obra_social' ||
		               $elemento == 'cod_obra' || $elemento == 'obra_plan' || $elemento == 'iva' || $elemento == 'hist_clin' || $elemento == 'cod_nome' ||
		               $elemento == 'nomenclador' || $elemento == 'cantidad' ||$elemento == 'imp_valor' || $elemento == 'fecha_pedido' || $elemento == 'fecha_realizado'|| 
					   $elemento == 'remoto' || $elemento == 'sitio'|| $elemento == 'pedido' || $elemento == 'iva'){
        	           $prop.enabled  = true
					   $prop.fgcolor = '#000000'
                   } ; break
    }	
}
