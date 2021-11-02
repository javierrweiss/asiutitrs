/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"41B22138-A091-4A46-9222-0A708C7AD77B",variableType:8}
 */
var res_cod_obra = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"EB739B25-F6DC-4426-8161-C861215C438F",variableType:8}
 */
var res_validado = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"EA6D7635-314A-4DB4-9402-2F24CB0F7E0F",variableType:8}
 */
var res_imp_valor = 0;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"260ADEB3-5F38-4829-98D7-C33C1ECD9712"}
 */
var res_txt_nomencla = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"E57CED49-579C-44C6-8C92-B0CF99EDA305"}
 */
var $txt_nomencla = '';

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"5EA66CEA-749D-4370-B8FF-C69209994ED6",variableType:8}
 */
var res_cantidad = 0;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"DE6085A5-851B-4CC2-B79A-B07C2033284D"}
 */
var res_des_nomencla = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"95534A13-3F4E-4A96-8A29-72C7E9A029CA"}
 */
var res_afiliado = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"3597A1B4-212E-429D-B10D-28A71EE08A42",variableType:8}
 */
var res_hist_cli = 0;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"33424E0D-273C-4566-A199-CDF3DD29FA78"}
 */
var res_iva = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"65DC93C8-4C96-47A7-A9E2-A559A2B3B8B9"}
 */
var res_plan_obra = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"4EB3F35E-B4E0-457A-AC0A-D8A0F2E76DD2"}
 */
var res_des_obra = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"F709494D-9FD2-4AF9-8209-64D28AED0B60"}
 */
var res_des_hist_cli = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"39DB09ED-E83D-474A-AE70-2D12D2AA217C"}
 */
var res_hora = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"5340495B-0D03-4AF8-A356-9F102237B70A",variableType:93}
 */
var res_fecha = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"559DFADA-DC16-4C48-89C5-4DAB5E9FF555",variableType:93}
 */
var res_fecha_realizado = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"9E054477-762C-4687-9793-AF991FADFA87"}
 */
var res_des_esp = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"095050A6-847E-4B9E-9192-DEF14C65D82E"}
 */
var res_des_med = null;

/**
 * @param event
 *
 * @properties={typeid:24,uuid:"670DF9B5-F7AC-48CD-8BFB-9E7D3826714F"}
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
 * @properties={typeid:24,uuid:"19005FB7-2069-4AB5-AD6A-30EAACDFBDE0"}
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
 * @properties={typeid:24,uuid:"51D98FDC-6B06-4DEB-917A-7E3563BAE1A1"}
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
 * @properties={typeid:24,uuid:"C1C146A2-C12C-4002-9ABC-6585AF21ED32"}
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
 * @properties={typeid:24,uuid:"C4BCF508-F242-4800-AC6D-56575F08FE4C"}
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
 * @properties={typeid:24,uuid:"A01AAC56-4C1E-4996-A694-C8863FAF85F5"}
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
