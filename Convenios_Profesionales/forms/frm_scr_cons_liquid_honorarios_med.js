/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"06348C11-3FE5-4FD3-8B58-A71572CB6E82"}
 */
var res_des_hist_cli = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"879D3144-6AE6-45C4-8C6D-A6B3C19796B6",variableType:8}
 */
var res_cod_obra = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"CE3A86CF-4F4D-4243-86CD-0BCDC5428F82",variableType:8}
 */
var res_validado = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"78380CF1-98A9-4EF9-8CDE-A2D7EC5A996D",variableType:8}
 */
var res_imp_valor = 0;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"10ED6629-66EC-4703-B405-D9CD3C8398EC"}
 */
var res_txt_nomencla = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"54906629-0793-45F4-9BCC-218001806471"}
 */
var $txt_nomencla = '';

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"ACCD08C4-B6D9-47D5-A7DD-8A9B4F932936",variableType:8}
 */
var res_cantidad = 0;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"2C28429D-9380-440A-B257-B0518866E6D9"}
 */
var res_des_nomencla = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"2E0BEEEE-5C2D-44AE-AE7E-ED254E78623A"}
 */
var res_afiliado = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"2E8D072E-15C7-4A8B-855F-B8AB276FF454",variableType:8}
 */
var res_hist_cli = 0;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"4D49CACD-D9D1-457A-B6AC-B8BA13EEAE88"}
 */
var res_iva = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"07C1A95F-4C5B-46BF-807C-C7A3E9F6BD40"}
 */
var res_plan_obra = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"6B245843-C2DA-4998-885F-5C62824258FA"}
 */
var res_des_obra = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"87AAE9DD-93A0-4DD9-8C24-0814D7D29477"}
 */
var res_hora = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"FECF61E9-B2BC-44B1-8F19-611E252DD43F",variableType:93}
 */
var res_fecha = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"09321B0B-1038-49BC-A77F-A6C83DC7778F"}
 */
var res_des_esp = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"A3482C79-7173-4EA5-8B6A-EDED2E2A14EF"}
 */
var res_des_med = null;

/**
 * @properties={typeid:24,uuid:"E7519AB2-1A9E-4094-AD97-525CA32A89B1"}
 */
function calcular_totales(){
	var $max = databaseManager.getFoundSetCount(foundset)
	forms.frm_cons_liquid_honorarios_med.inicializa_tot()
	for (var i= 1; i <= $max; i++){
		foundset.setSelectedIndex(i)
		var $imp_iva_10 = 0
		var $imp_iva_21 = 0
	    $imp_iva_10 = (foundset.res_imp_valor * 10.5) /100
	    $imp_iva_21 = (foundset.res_imp_valor * 21) /100
		if (foundset.res_iva == 'No gravado       ' || globals.gbl_sit_iva > 1){
		    forms.frm_cons_liquid_honorarios_med.frm_total_cant_1  = forms.frm_cons_liquid_honorarios_med.frm_total_cant_1  + foundset.res_cantidad
		    forms.frm_cons_liquid_honorarios_med.frm_total_valor_1 = forms.frm_cons_liquid_honorarios_med.frm_total_valor_1 + foundset.res_imp_valor
			
		    forms.frm_cons_liquid_honorarios_med.frm_total_imp_1   = forms.frm_cons_liquid_honorarios_med.frm_total_imp_1   + 
			                                                         (foundset.res_cantidad * (foundset.res_imp_valor))
				
		    forms.frm_cons_liquid_honorarios_med.frm_total_imp_4   = forms.frm_cons_liquid_honorarios_med.frm_total_imp_4   + 
 			                                                         (foundset.res_cantidad * (foundset.res_imp_valor))
			if(foundset.res_imp_valor > 0){
			  	forms.frm_cons_liquid_honorarios_med.frm_total_cant_pdf1  = forms.frm_cons_liquid_honorarios_med.frm_total_cant_pdf1  + foundset.res_cantidad            
			}
		}else{
			if (foundset.res_iva == 'Alícuota Reducida'){
				forms.frm_cons_liquid_honorarios_med.frm_total_cant_2  = forms.frm_cons_liquid_honorarios_med.frm_total_cant_2  + foundset.res_cantidad
				forms.frm_cons_liquid_honorarios_med.frm_total_valor_2 = forms.frm_cons_liquid_honorarios_med.frm_total_valor_2 + foundset.res_imp_valor
				forms.frm_cons_liquid_honorarios_med.frm_total_iva_2   = forms.frm_cons_liquid_honorarios_med.frm_total_iva_2   + $imp_iva_10
				forms.frm_cons_liquid_honorarios_med.frm_total_imp_2   = forms.frm_cons_liquid_honorarios_med.frm_total_imp_2   + 
				                                                         (foundset.res_cantidad * (foundset.res_imp_valor + $imp_iva_10))
																	 
			    forms.frm_cons_liquid_honorarios_med.frm_total_iva_4   = forms.frm_cons_liquid_honorarios_med.frm_total_iva_4   + $imp_iva_10
			    forms.frm_cons_liquid_honorarios_med.frm_total_imp_4   = forms.frm_cons_liquid_honorarios_med.frm_total_imp_4   + 
 			                                                         (foundset.res_cantidad * (foundset.res_imp_valor + $imp_iva_10))
				if(foundset.res_imp_valor > 0){
				 	forms.frm_cons_liquid_honorarios_med.frm_total_cant_pdf2  = forms.frm_cons_liquid_honorarios_med.frm_total_cant_pdf2  + foundset.res_cantidad            
				}
			}else{
			    if (foundset.res_iva == 'Alícuota General '){
			    	forms.frm_cons_liquid_honorarios_med.frm_total_cant_3  = forms.frm_cons_liquid_honorarios_med.frm_total_cant_3  + foundset.res_cantidad
				    forms.frm_cons_liquid_honorarios_med.frm_total_valor_3 = forms.frm_cons_liquid_honorarios_med.frm_total_valor_3 + foundset.res_imp_valor
				    forms.frm_cons_liquid_honorarios_med.frm_total_iva_3   = forms.frm_cons_liquid_honorarios_med.frm_total_iva_3   + $imp_iva_21
				    forms.frm_cons_liquid_honorarios_med.frm_total_imp_3   = forms.frm_cons_liquid_honorarios_med.frm_total_imp_3   + 
					                                                         (foundset.res_cantidad * (foundset.res_imp_valor + $imp_iva_21))
				    
			        forms.frm_cons_liquid_honorarios_med.frm_total_iva_4   = forms.frm_cons_liquid_honorarios_med.frm_total_iva_4   + $imp_iva_21
			        forms.frm_cons_liquid_honorarios_med.frm_total_imp_4   = forms.frm_cons_liquid_honorarios_med.frm_total_imp_4   + 
			                                                         (foundset.res_cantidad * (foundset.res_imp_valor + $imp_iva_21))
					if(foundset.res_imp_valor > 0){
					  	forms.frm_cons_liquid_honorarios_med.frm_total_cant_pdf3  = forms.frm_cons_liquid_honorarios_med.frm_total_cant_pdf3  + foundset.res_cantidad            
					}
			    }
		    }
		}
		forms.frm_cons_liquid_honorarios_med.frm_total_cant_4  = forms.frm_cons_liquid_honorarios_med.frm_total_cant_4  + foundset.res_cantidad
		forms.frm_cons_liquid_honorarios_med.frm_total_valor_4 = forms.frm_cons_liquid_honorarios_med.frm_total_valor_4 + foundset.res_imp_valor
		if(foundset.res_imp_valor > 0){
		  	forms.frm_cons_liquid_honorarios_med.frm_total_cant_pdf4  = forms.frm_cons_liquid_honorarios_med.frm_total_cant_pdf4  + foundset.res_cantidad            
		}
	}
	application.updateUI()
	controller.setSelectedIndex(1)	
}