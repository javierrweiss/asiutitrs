/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"31850823-6D40-41DA-9345-6B08FEE72A63",variableType:8}
 */
var res_cod_obra = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"F6898AAE-CC66-484A-9085-0F30459C0162",variableType:8}
 */
var res_validado = null;
 
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"C7055605-0FB3-45EA-A8FF-37136D2E64B7",variableType:8}
 */
var res_imp_valor = 0;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"B28AFA6C-5B65-4819-86C9-A13C22419EA6"}
 */
var res_txt_nomencla = ''
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"F27A271F-9CB5-4B75-BC61-2288E2395734"}
 */
var $txt_nomencla = ''

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"B3BCA86E-52D6-4C48-ADE9-E668BEAFA81A",variableType:8}
 */
var res_cantidad = 0;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"1BBA9E76-7387-4381-98D1-374112645486"}
 */
var res_des_nomencla = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"3B25D1D1-7741-402E-BD7D-64524A7184F9"}
 */
var res_afiliado = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"91FBCA26-1205-4212-925C-41F5C4AFEFFE",variableType:8}
 */
var res_hist_cli = 0;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"E3812910-E943-4931-A5CB-C24DEF7566AB"}
 */
var res_iva = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"8BE50F7E-BA74-4C23-8F29-333AA7C95678"}
 */
var res_plan_obra = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"7A4FBB67-F197-4E9E-A6E3-D2A913B5005E"}
 */
var res_des_obra = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"C3F5D5A0-AEC7-477C-B01B-569FCDAD30A3"}
 */
var res_hora = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"28154CA4-E674-46F7-B1CB-8E91A1484532",variableType:93}
 */
var res_fecha = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"18FEF34E-897A-4547-895E-FCA5AEE70285"}
 */
var res_des_esp = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"A0CB3956-7832-4E9E-8E00-203AD1AAF686"}
 */
var res_des_med = null;

/**
 * @param event
 *
 * @properties={typeid:24,uuid:"FC08B8B1-D85F-4E8F-AB08-0A8B7FAA8D47"}
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
 * @properties={typeid:24,uuid:"BC1E6036-7680-474A-813E-E09422DDFF59"}
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
 * @properties={typeid:24,uuid:"2E299E6F-3B2D-4446-A9A2-AAEB206DAC1B"}
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
 * @properties={typeid:24,uuid:"1DF3B989-4A77-4CD1-8C7D-5D7DE7594F39"}
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
 * @properties={typeid:24,uuid:"38FCA176-8907-4C3C-814D-8C683F754FCD"}
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
 * @properties={typeid:24,uuid:"997F6714-792A-4E74-A3E3-A8BE8EBEBBC9"}
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
 * @properties={typeid:24,uuid:"5CC983AE-F79E-48BD-AAB3-01DFAB75F686"}
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
 * @properties={typeid:24,uuid:"112E33E8-E705-4BD8-B46A-4F65EEB5F1D1"}
 */
function onRender_marcar_validados(event) {
	var $rcd = event.getRecord()
	var $elemento = event.getRenderable().getName()
	var $prop = event.getRenderable()
	switch ($rcd.res_validado){	
		case 1   : if ($elemento == 'enabled' || $elemento == 'codigo' || $elemento == 'especialidad' || $elemento == 'fecha' || $elemento == 'hora' ||
				       $elemento == 'obra_social' || $elemento == 'obra_plan' || $elemento == 'iva' || $elemento == 'hist_clin' || $elemento == 'cod_nome' ||
				       $elemento == 'nomenclador' || $elemento == 'cantidad' ||$elemento == 'imp_valor' ||$elemento == 'cod_obra'){
                	   $prop.enabled  = false
					   $prop.fgcolor = '#ffffff' 
                   } ; break
         default : if ($elemento == 'enabled' || $elemento == 'codigo' || $elemento == 'especialidad' || $elemento == 'fecha' || $elemento == 'hora' ||
		               $elemento == 'obra_social' || $elemento == 'obra_plan' || $elemento == 'iva' || $elemento == 'hist_clin' || $elemento == 'cod_nome' ||
		               $elemento == 'nomenclador' || $elemento == 'cantidad' ||$elemento == 'imp_valor' ||$elemento == 'cod_obra'){
        	           $prop.enabled  = true
					   $prop.fgcolor = '#000000'
                   } ; break
    }	
}
