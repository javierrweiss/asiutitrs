/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"B66EE747-2CBE-4AAC-844F-C62EA17CA811",variableType:93}
 */
var res_fecha_hasta = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"1F93B1A8-DA05-446B-8253-0AFEEA3C5F9F",variableType:93}
 */
var res_fecha_desde = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"C9777FE5-FD94-4510-B98A-C032B68D4E65",variableType:93}
 */
var fecha_impre = new Date();

/**
 * @properties={typeid:35,uuid:"F3927109-80A2-4AF8-9538-B107E716B609",variableType:-4}
 */
var res_des_med = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"8F84FDF0-6645-4803-BA72-10C85B5D3BBA",variableType:4}
 */
var res_total_cant_1 = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"B80A87E2-A67A-43FA-8657-BB3DD756C5C9",variableType:4}
 */
var res_total_cant_2 = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"F60F0A1F-974D-4427-8940-D30ADA2D855E",variableType:4}
 */
var res_total_cant_3 = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"D6F3FA0E-772A-4D43-8479-1219B15656EC",variableType:4}
 */
var res_total_cant_4 = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"C742DB9C-6F34-4082-B241-9C3CBAAF016B",variableType:4}
 */
var res_total_valor_1 = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"C2CA6248-D95C-447C-BCBD-88EE007925A6",variableType:4}
 */
var res_total_valor_2 = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"EDC242B3-7555-4042-AD88-4D369FAC1AF4",variableType:4}
 */
var res_total_valor_3 = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"8E62984D-CCB0-43B0-BCCB-71484B569418",variableType:4}
 */
var res_total_valor_4 = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"4EB88A79-3D96-4EDD-AEEC-90DEF666939A",variableType:4}
 */
var res_total_iva_1 = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"F1B8BA70-2CAC-4C13-A887-917A3398F150",variableType:4}
 */
var res_total_iva_2 = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"010108C4-67B6-4FB9-B620-8693115250AF",variableType:4}
 */
var res_total_iva_3 = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"D6D0C4F1-A220-4807-87D4-93CDEB2867CB",variableType:4}
 */
var res_total_iva_4 = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"E2A7F8F8-6252-4D14-BCAE-3A6CDBC46290",variableType:4}
 */
var res_total_imp_1 = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"ADCA767D-9CA3-476C-9D3A-873915C23C61",variableType:4}
 */
var res_total_imp_2 = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"977AA422-6092-443F-9EB8-4392B841A998",variableType:4}
 */
var res_total_imp_3 = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"A042E829-D31C-454B-8E2F-913B0C2D05E2",variableType:4}
 */
var res_total_imp_4 = 0;
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"3009F56B-432A-4536-B77D-4E28A486F512"}
 */
var res_iva = '';

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"F433C650-85E2-4598-B5CD-CDCF304A28E6"}
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
