/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"2D477B83-4F41-4F9E-A438-1764E1900490",variableType:8}
 */
var res_cod_obra = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"EFC9AB9B-AE9D-4B9E-9153-DD0C3AC38889",variableType:8}
 */
var res_validado = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"440ED58C-C698-4E1E-BC14-CE810332FEE7",variableType:8}
 */
var res_imp_valor = 0;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"F8DD18A7-7452-492B-8353-2BAA81A3D593"}
 */
var res_urgente = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"5A9BE429-5404-4BA3-A4A5-4D72EB832DE9"}
 */
var res_txt_nomencla = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"BD5E88F3-9B83-4CF2-93BD-EB08A479F0EC"}
 */
var $txt_nomencla = '';

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"1A04C0A9-BD0E-429F-9B51-F84DDAAF36F5",variableType:8}
 */
var res_cantidad = 0;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"042BD480-F729-481D-AE97-E4CCEAFE251F"}
 */
var res_des_nomencla = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"114017DD-D719-41C8-B7E2-4CF79B8A96D7"}
 */
var res_afiliado = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"5CFD487E-C42B-4F7B-97D7-C39C241659C6",variableType:8}
 */
var res_hist_cli = 0;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"1CEE0C3D-143F-41B0-A7B9-C4F14E0CA8DF"}
 */
var res_iva = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"E98A891E-63E1-40E0-BC5B-7D0711185A82"}
 */
var res_plan_obra = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"A0B5622D-773D-45B9-8514-689173D3CFB1"}
 */
var res_des_obra = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"75FF2F2A-D770-451B-9A10-12E533944684"}
 */
var res_hora = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"4B0313C0-0859-401C-9D30-E433780C6DEF",variableType:93}
 */
var res_fecha = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"466F95D4-9612-4862-81BC-94BEA0E39533",variableType:93}
 */
var res_fecha_pedido = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"EEB08C4D-568E-4293-909D-589ACFD6F132",variableType:93}
 */
var res_fecha_realizado = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"C1A780A8-BE6C-4E49-8859-36632808E858"}
 */
var res_des_esp = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"44566DAC-86E5-46F1-A0AA-48503118E1CA"}
 */
var res_des_med = null;

/**
 * @properties={typeid:24,uuid:"A0D43451-5166-47AA-937B-FFB9AE605397"}
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
