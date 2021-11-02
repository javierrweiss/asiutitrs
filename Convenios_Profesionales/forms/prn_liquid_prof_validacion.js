/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"85A27E0B-2682-4FFA-A0FD-76EB7C6C48E1",variableType:93}
 */
var res_fecha_hasta = null;
 
/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"A187773E-F5FA-433A-89D5-C5652E8938EB",variableType:93}
 */
var res_fecha_desde = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"A8DF875E-8BA7-46D2-A8A4-CA1B0EE6BE41",variableType:93}
 */
var fecha_impre = new Date();

/**
 * @properties={typeid:35,uuid:"B143CFC9-0FBC-4E3D-BFB2-4D4D1FA5A2C7",variableType:-4}
 */
var res_des_med = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"32563A88-2A85-4137-AFAF-0F8979FC88C6",variableType:4}
 */
var res_total_cant_1 = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"FFD4B52C-3C7E-4620-A41E-D7BF109CD740",variableType:4}
 */
var res_total_cant_2 = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"45FBF887-9BE7-4ABE-AEF9-96BC61543B5A",variableType:4}
 */
var res_total_cant_3 = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"791E108F-F772-45A4-B586-457C7DEF9200",variableType:4}
 */
var res_total_cant_4 = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"B4DDAB52-DB72-4D67-BA56-CB023FE6CC7E",variableType:4}
 */
var res_total_valor_1 = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"E13B8074-47BA-4AC1-BF38-282BF05B68A3",variableType:4}
 */
var res_total_valor_2 = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"FC685AD5-E94E-43F7-8D1A-971F2E596248",variableType:4}
 */
var res_total_valor_3 = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"1B021746-CD20-4B26-A062-630E6A73F733",variableType:4}
 */
var res_total_valor_4 = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"27824408-12B8-4BC8-BEFF-433FF22995BA",variableType:4}
 */
var res_total_iva_1 = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"CDC82B8C-D78C-4D9A-9F33-BF49B7A4750D",variableType:4}
 */
var res_total_iva_2 = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"79AACC9F-7FCF-499D-A27A-2C7E225C8C64",variableType:4}
 */
var res_total_iva_3 = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"0F4F353E-05B3-4375-91B2-64DEE2AA668D",variableType:4}
 */
var res_total_iva_4 = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"6CCD2537-B848-42CB-A0AD-73F8D1047C84",variableType:4}
 */
var res_total_imp_1 = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"BBF06995-A778-44DF-B1BE-4E570F70E148",variableType:4}
 */
var res_total_imp_2 = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"96743E02-B78E-420D-8B46-92C2667CDA8F",variableType:4}
 */
var res_total_imp_3 = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"38434B08-57E9-4EFF-8C55-D9CDDCD42AC0",variableType:4}
 */
var res_total_imp_4 = 0;

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"368CA805-CCAB-4548-8A5F-90560DEB94C5"}
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
