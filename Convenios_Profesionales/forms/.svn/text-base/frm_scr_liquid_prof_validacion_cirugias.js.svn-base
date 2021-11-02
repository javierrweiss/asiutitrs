/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"2972BA42-3051-4235-B5B7-5BCBB236394E",variableType:8}
 */
var res_cod_obra = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"FF424E08-3D47-4F19-99DC-058C840DA25B",variableType:8}
 */
var res_validado = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"6B488B02-ABD8-48A5-A980-24AF9D83606A",variableType:8}
 */
var res_imp_valor = 0;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"62861866-5BE0-4927-86A2-C4AE8BFB0F8F"}
 */
var res_txt_nomencla = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"C31E7215-CDCA-486F-A2B7-BD2768972CE9"}
 */
var $txt_nomencla = '';

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"FE5BB38A-4C0B-4F78-9038-EE4AA555884C",variableType:8}
 */
var res_cantidad = 0;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"4303E45B-980D-4AC6-9AD9-51012707F987"}
 */
var res_des_nomencla = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"6B73556D-10E6-4C94-A338-81DAE0EECD66"}
 */
var res_afiliado = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"E5E47436-A380-4E6F-994B-9D0D569A4A18",variableType:8}
 */
var res_hist_cli = 0;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"42F493A7-9FC2-4D91-BD06-4B440998A80B"}
 */
var res_iva = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"FC6D456E-BB59-49C0-9D6C-DADD1158ABB2"}
 */
var res_plan_obra = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"1066A49B-710A-402C-B28E-F8B9FC57283B"}
 */
var res_des_obra = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"14A36B5E-A784-4B36-A80F-43C8EFAB78EE"}
 */
var res_des_hist_cli = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"BA3896EF-9A34-4C6E-BA5A-8EC8E86F056A"}
 */
var res_hora = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"63B88E62-009B-4E57-AE8D-37DFDB167159",variableType:93}
 */
var res_fecha = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"85CFF008-715C-4FDB-943A-1CA4FE9EE1D4",variableType:93}
 */
var res_fecha_realizado = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"CFEB85EF-F22D-4AA3-A86E-D65662AF9882"}
 */
var res_des_esp = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"FB4CB5D6-A5CC-47F1-8FDB-047E9B248AB2"}
 */
var res_des_med = null;

/**
 * @param event
 *
 * @properties={typeid:24,uuid:"1B5FBA68-BB00-4050-A5CC-7A6A9AB4B96D"}
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
 * @properties={typeid:24,uuid:"B3595DCE-FBEC-42DE-8D46-8F6AE2EE1E46"}
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
 * @properties={typeid:24,uuid:"5885C878-A8DE-487C-A47B-06E8AEFCFA36"}
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
 * @properties={typeid:24,uuid:"96112309-F341-4178-A08B-E984ADB7B408"}
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
 * @properties={typeid:24,uuid:"E2EE338C-C0C0-4BA7-97D9-CEF94C824F5E"}
 */
function onAction_modifica_valores(event) {
	if(foundset.enabled == 1){
		onAction_selec(event) 
	}
}

/**
 * Called before the form component is rendered.
 *
 * @param {JSRenderEvent} event the render event
 *
 * @properties={typeid:24,uuid:"A8B3315F-DF3C-4E1C-A144-1E66D58A8705"}
 */
function onRender_marcar_validados(event) {
	var $rcd = event.getRecord()
	var $elemento = event.getRenderable().getName()
	var $prop = event.getRenderable()
	switch ($rcd.res_validado){	
		case 1   : if ($elemento == 'enabled' || $elemento == 'codigo' || $elemento == 'especialidad' || $elemento == 'fecha' || $elemento == 'hora' || $elemento == 'obra_social' ||
				       $elemento == 'cod_obra' || $elemento == 'obra_plan' || $elemento == 'iva' || $elemento == 'hist_clin' || $elemento == 'cod_nome' ||
				       $elemento == 'nomenclador' || $elemento == 'cantidad' ||$elemento == 'imp_valor' ||$elemento == 'fecha_solic' || $elemento == 'des_hist_clin'){
                	   $prop.enabled  = false
					   $prop.fgcolor = '#ffffff' 
                   } ; break
         default : if ($elemento == 'enabled' || $elemento == 'codigo' || $elemento == 'especialidad' || $elemento == 'fecha' || $elemento == 'hora' || $elemento == 'obra_social' ||
		               $elemento == 'cod_obra' || $elemento == 'obra_plan' || $elemento == 'iva' || $elemento == 'hist_clin' || $elemento == 'cod_nome' ||
		               $elemento == 'nomenclador' || $elemento == 'cantidad' ||$elemento == 'imp_valor' ||$elemento == 'fecha_solic' || $elemento == 'des_hist_clin'){
        	           $prop.enabled  = true
					   $prop.fgcolor = '#000000'
                   } ; break
    }	
}
