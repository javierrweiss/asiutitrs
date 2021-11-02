/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"BB29D60A-BF79-4D0E-A803-4683CBE29A1C",variableType:8}
 */
var res_cod_obra = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"B9B54CA9-4C91-4BC6-921A-04CF1D7F5E29",variableType:8}
 */
var res_validado = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"A47C1064-B121-4BF2-AC8D-115B9640DF94",variableType:8}
 */
var res_imp_valor = 0;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"287DD9E0-3D7D-43E1-A0A0-05213978F88D"}
 */
var res_urgente = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"EA04FD56-CF0C-4A28-BCCC-7166D0F85B30"}
 */
var res_txt_nomencla = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"67ACD046-4FB4-4C96-ACB4-081093AF3186"}
 */
var $txt_nomencla = '';

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"DADF6584-C4E6-420F-B3FD-DDF05CB0F669",variableType:8}
 */
var res_cantidad = 0;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"46C8D8A6-5195-4C1A-97EE-F09CBA875E2E"}
 */
var res_des_nomencla = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"B160AF1C-29AE-4A72-8323-07421131DE70"}
 */
var res_afiliado = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"C1567BA4-2422-4879-BDD3-5F813D453ADC",variableType:8}
 */
var res_hist_cli = 0;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"EDED2C90-A9E0-4C44-BBA1-0ED7B164BA78"}
 */
var res_iva = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"189BA880-774F-4294-980C-9AC523F4DE59"}
 */
var res_plan_obra = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"85B15562-7915-43D6-B6AA-948FDE9FCAC3"}
 */
var res_des_obra = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"1199158D-4AC4-4154-9EB4-19B598324783"}
 */
var res_hora = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"5DD1D87B-2428-4728-B008-CBB73CDCDEF3",variableType:93}
 */
var res_fecha = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"BF8B4E64-F466-45E3-841E-928201AF6955",variableType:93}
 */
var res_fecha_pedido = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"D18D4FBD-91C6-44BA-A7DA-B1B3C7C9C32B",variableType:93}
 */
var res_fecha_realizado = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"65A81E78-458E-4399-99C2-9CEC6EBA5FCB"}
 */
var res_des_esp = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"B92A2621-D14E-4220-8C0F-FBA6B65CA126"}
 */
var res_des_med = null;

/**
 * @properties={typeid:24,uuid:"52C3F854-8CA2-49DA-B2B6-1B27A8646773"}
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
			    }
		    }
		}
		forms.frm_cons_liquid_honorarios_med.frm_total_cant_4  = forms.frm_cons_liquid_honorarios_med.frm_total_cant_4  + foundset.res_cantidad
		forms.frm_cons_liquid_honorarios_med.frm_total_valor_4 = forms.frm_cons_liquid_honorarios_med.frm_total_valor_4 + foundset.res_imp_valor	    
	}
	application.updateUI()
	controller.setSelectedIndex(1)	
}
