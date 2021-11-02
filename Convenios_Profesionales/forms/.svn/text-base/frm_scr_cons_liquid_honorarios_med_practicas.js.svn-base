/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"CEEE0050-5142-4D6C-AFDF-A4AF50AC6025"}
 */
var res_des_hist_cli = null;
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"5733E68A-02C6-442B-86C6-2672B94E1336"}
 */
var res_urgente = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"EF97813B-6C10-4FB6-98B3-FF9CEF897151",variableType:8}
 */
var res_cod_obra = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"1946C561-643E-4D2E-BB28-65DDFA0BA960",variableType:8}
 */
var res_validado = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"41A59135-37B8-4950-87B0-745FDE9AE918",variableType:8}
 */
var res_imp_valor = 0;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"6AA0BFD9-D897-49A7-BC69-C24691ED7BE9"}
 */
var res_remoto = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"F9AC90AA-36C4-4B57-93B1-9502A3FC5845"}
 */
var res_txt_nomencla = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"B1D6F6DF-09BD-4A9E-984C-8D7EAA4B74D6"}
 */
var $txt_nomencla = '';

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"B317FD93-75B8-47D1-B0BF-FE7153629C24",variableType:8}
 */
var res_cantidad = 0;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"0B5C40B3-8475-4A6B-9BA8-D3C6075D1CA3"}
 */
var res_des_nomencla = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"25E8A9F3-A141-484D-9731-3ACD5850677B"}
 */
var res_afiliado = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"3EB0D82E-3ED2-43FB-86B7-E30F36BFBA48",variableType:8}
 */
var res_hist_cli = 0;


/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"92850EFA-45B8-420A-9F82-0C32C02A9DA9"}
 */
var res_plan_obra = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"2882A0D8-EAE6-425E-8569-3202B4AED4CC"}
 */
var res_des_obra = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"555E0E0D-8034-4273-AD1A-69850C91B7E1"}
 */
var res_hora = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"E1F5F44C-33C7-4033-95ED-004502D0B856",variableType:93}
 */
var res_fecha = null;
/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"02CF8573-451B-439B-AA21-8035BC1F8388",variableType:93}
 */
var res_fecha_pedido = null;
/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"E4B82064-CDEC-4CDB-86B5-3C670713AB4D",variableType:93}
 */
var res_fecha_realizado = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"2A9244D0-BCE8-4E4A-947D-A736E93C011C"}
 */
var res_des_esp = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"3E99522D-1F39-4599-93F1-CC4F4E6EF925"}
 */
var res_des_med = null;

/**
 * @properties={typeid:24,uuid:"920B44D2-C1D9-4696-B222-9734168268B7"}
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
