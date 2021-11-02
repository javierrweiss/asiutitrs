/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"C8541DFB-7CB2-4E3A-97DC-AADF1C010CA1",variableType:93}
 */
var res_fecha_hasta = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"2F3FED2A-5F2E-42DE-976A-F7ADAF88934F",variableType:93}
 */
var res_fecha_desde = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"28C1A265-94E8-4299-AC1C-D8047B20E41F",variableType:93}
 */
var fecha_impre = new Date();

/**
 * @properties={typeid:35,uuid:"BAD597C4-D775-4871-970E-BA8BD0DB4087",variableType:-4}
 */
var res_des_med = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"058B574D-7F4E-41FE-810F-9BD7EDC5D92D",variableType:4}
 */
var res_total_cant_1 = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"F937229A-4966-4C95-99A4-821D7FC4B331",variableType:4}
 */
var res_total_cant_2 = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"8FDEA9FE-EC72-4613-A45F-FD2C2B776D00",variableType:4}
 */
var res_total_cant_3 = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"FA5C8DD5-0AEB-47E2-AF7F-CCC377E89820",variableType:4}
 */
var res_total_cant_4 = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"797E15A6-DEC4-4A3E-A73B-6A9976EEFC69",variableType:4}
 */
var res_total_valor_1 = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"394AC6CF-5245-40A6-AA8B-268A99C1AF26",variableType:4}
 */
var res_total_valor_2 = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"1E108F0A-9C9C-4311-9F4E-25B5310EADF7",variableType:4}
 */
var res_total_valor_3 = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"48881F78-780E-4CC4-8417-85857D22BC1B",variableType:4}
 */
var res_total_valor_4 = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"4F4D54B5-29B9-43DB-87F2-EB08D129362B",variableType:4}
 */
var res_total_iva_1 = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"D8CD0B23-3607-4A78-81C4-DCC91FC3C08E",variableType:4}
 */
var res_total_iva_2 = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"3615A34C-1F49-493C-854C-ACAB9B811BB9",variableType:4}
 */
var res_total_iva_3 = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"1C06973E-786E-4C6D-A435-882400F1D812",variableType:4}
 */
var res_total_iva_4 = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"B96B46E2-F1EB-4428-91EB-28A7E164B93E",variableType:4}
 */
var res_total_imp_1 = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"E8886D4C-37FF-4D7B-894E-C617896C8ACE",variableType:4}
 */
var res_total_imp_2 = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"BC9CFB06-6943-4C93-AE40-9D243DB1B50F",variableType:4}
 */
var res_total_imp_3 = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"B39E6535-6FA7-44DC-9025-A8231B054F6D",variableType:4}
 */
var res_total_imp_4 = 0;

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"0306D881-29D6-4F21-BA73-8597AEC17915"}
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
