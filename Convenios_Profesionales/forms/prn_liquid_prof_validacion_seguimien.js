/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"7803DEA4-2F4D-4909-8B0E-E4D454F70658",variableType:93}
 */
var res_fecha_hasta = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"CC5A3529-7D4D-4470-B2E1-83A852EAA7DB",variableType:93}
 */
var res_fecha_desde = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"43CFF52B-1F2C-4C0C-B942-17ADD6D8FB6D",variableType:93}
 */
var fecha_impre = new Date();

/**
 * @properties={typeid:35,uuid:"03A901FF-0EBB-440B-8ADC-8F761A94B007",variableType:-4}
 */
var res_des_med = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"6E90F2A6-F633-41B2-ADE6-820E8B1C4FE5",variableType:4}
 */
var res_total_cant_1 = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"89FBFD52-7055-480B-8BC1-C2314830CF68",variableType:4}
 */
var res_total_cant_2 = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"E762B366-B058-498E-9C80-AB4DABB85ABD",variableType:4}
 */
var res_total_cant_3 = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"81A71ED9-1D0B-4D0F-A31C-B6868CA1C282",variableType:4}
 */
var res_total_cant_4 = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"06299C1B-B5F0-45DB-8203-9F3CAE9D1EDD",variableType:4}
 */
var res_total_valor_1 = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"AFF14616-1050-4250-9339-26F735D0CDAB",variableType:4}
 */
var res_total_valor_2 = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"A19D4B52-2082-4B6F-A04D-A7708BD29318",variableType:4}
 */
var res_total_valor_3 = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"336CB637-006D-4E3C-9599-F4A26AA28290",variableType:4}
 */
var res_total_valor_4 = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"810ED176-879B-461F-B427-7AF353FC1CAB",variableType:4}
 */
var res_total_iva_1 = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"20E0F358-4481-4140-B0DF-BAB4D260ECD0",variableType:4}
 */
var res_total_iva_2 = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"2F5E5027-25F4-4385-8085-F5FCD2D46ACB",variableType:4}
 */
var res_total_iva_3 = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"81641327-6955-49FE-9B88-02E092583174",variableType:4}
 */
var res_total_iva_4 = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"26CD8C6D-F890-4376-985D-40A11F71B193",variableType:4}
 */
var res_total_imp_1 = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"27E9EA62-BD0B-4B1A-A1D6-96FCAE81E184",variableType:4}
 */
var res_total_imp_2 = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"07D5F38F-42F5-4591-97D3-EC4071920259",variableType:4}
 */
var res_total_imp_3 = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"FA81CD8E-1BE8-49C8-A50F-35AAB2851743",variableType:4}
 */
var res_total_imp_4 = 0;

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"A54D8DCB-422F-4F5C-8501-AD8740C99371"}
 */
function onShow_cargar_datos(firstShow, event) {
	res_fecha_desde   = forms.frm_liquid_prof_validacion.frm_fecha_desde
	res_fecha_hasta   = forms.frm_liquid_prof_validacion.frm_fecha_hasta
	res_des_med       = forms.frm_liquid_prof_validacion.frm_prof_descripcion
	res_total_cant_1  = forms.frm_liquid_prof_validacion.frm_total_cant_1
	res_total_cant_2  = forms.frm_liquid_prof_validacion.frm_total_cant_2
	res_total_cant_3  = forms.frm_liquid_prof_validacion.frm_total_cant_3
	res_total_cant_4  = forms.frm_liquid_prof_validacion.frm_total_cant_4
	res_total_valor_1 = forms.frm_liquid_prof_validacion.frm_total_valor_1
	res_total_valor_2 = forms.frm_liquid_prof_validacion.frm_total_valor_2
	res_total_valor_3 = forms.frm_liquid_prof_validacion.frm_total_valor_3
	res_total_valor_4 = forms.frm_liquid_prof_validacion.frm_total_valor_4
	res_total_iva_1   = forms.frm_liquid_prof_validacion.frm_total_iva_1
	res_total_iva_2   = forms.frm_liquid_prof_validacion.frm_total_iva_2
	res_total_iva_3   = forms.frm_liquid_prof_validacion.frm_total_iva_3
	res_total_iva_4   = forms.frm_liquid_prof_validacion.frm_total_iva_4
	res_total_imp_1   = forms.frm_liquid_prof_validacion.frm_total_imp_1
	res_total_imp_2   = forms.frm_liquid_prof_validacion.frm_total_imp_2
	res_total_imp_3   = forms.frm_liquid_prof_validacion.frm_total_imp_3
	res_total_imp_4   = forms.frm_liquid_prof_validacion.frm_total_imp_4
}
