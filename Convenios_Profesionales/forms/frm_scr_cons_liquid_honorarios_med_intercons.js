/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"31FD9B3F-93F9-450C-98F5-CE7197DE6F98"}
 */
var res_des_hist_cli = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"98D4356E-ECA0-4666-B4DC-E8508EDA6ECC",variableType:8}
 */
var res_cod_obra = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"0D8A99F7-CA98-4962-9AB9-7698687F34F9",variableType:8}
 */
var res_validado = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"E84F4731-7D18-4D6F-BCB0-5C2AE8E9F427",variableType:8}
 */
var res_imp_valor = 0;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"68FDE77A-A056-4CCC-95E8-22A5A4DD97D1"}
 */
var res_urgente = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"35F2B019-2ECD-4221-8617-4AB65829AD1D"}
 */
var res_txt_nomencla = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"94021E53-19DC-4C7C-B1DD-DC28602DF724"}
 */
var $txt_nomencla = '';

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"0DAA750A-8E23-4BDE-9B2A-10142BF996CD",variableType:8}
 */
var res_cantidad = 0;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"B0C2B437-F6D0-42DC-8B87-4B01C41B88F7"}
 */
var res_des_nomencla = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"0E8E6289-63DC-49AE-B5E4-ADD79EF5EFD8"}
 */
var res_afiliado = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"AFC04198-31FF-4AA8-BD3D-4A7A3D0D9122",variableType:8}
 */
var res_hist_cli = 0;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"38EA3B30-1060-4D32-9369-984B17C45A3B"}
 */
var res_iva = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"4C20FF5C-5D03-4A32-910E-9C6F1B21D25B"}
 */
var res_plan_obra = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"A3B10F51-9006-4B26-B603-67D86E1F6B29"}
 */
var res_des_obra = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"7FBA351C-A8C7-4449-B797-6663632BCB77"}
 */
var res_hora = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"BCECEB01-42AE-42C2-A81F-45D5FA672A0F",variableType:93}
 */
var res_fecha = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"1A1AAA28-0CD2-4F93-9974-7FC51EE8E040",variableType:93}
 */
var res_fecha_pedido = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"AB7ECBC3-1BC3-4D23-AAED-051ADE6F3589",variableType:93}
 */
var res_fecha_realizado = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"35E4F5A2-18D8-4681-8A7D-CCB0D04D3FE5"}
 */
var res_des_esp = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"D2B7C2B1-7C7A-42B0-9CF7-2DE3F7F6B6EB"}
 */
var res_des_med = null;

/**
 * @properties={typeid:24,uuid:"A8F54582-892E-4883-A435-BFFCE08A4F9E"}
 */
function calcular_totales(){
	var $max = foundset.getSize()
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
