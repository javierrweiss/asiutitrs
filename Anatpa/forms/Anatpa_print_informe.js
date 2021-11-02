/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"5F36A757-79A2-4C3A-9C1B-BFF390AFEE0F"}
 */
var $nroInternado = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"7665208F-A7A5-4CAE-B56B-AFE4DF5D82BB",variableType:4}
 */
var $tipoDocumento = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"D87E92F4-1F0A-498D-BB48-0083315D070D"}
 */
var f_servicio = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"F3373A28-3A8F-4F40-9D89-870978438D8E"}
 */
var f_matriculaMedico = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"097A80C9-F624-4538-BD17-608369C75CF3"}
 */
var f_nombreMedico = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"CE249C5E-69D9-462B-8EAF-602E0C74B2B4"}
 */
var f_intervencion = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"7A9AA08F-9603-444D-8694-3FEEB421C2F3"}
 */
var f_nroDocumento = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"2356FB32-4B67-49BE-9E13-983E8D984FE4"}
 */
var f_nroAfiliado = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"A035B1D0-27AA-4CC5-937A-59E54B7155FB"}
 */
var f_nroSolicitud = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"E74A2CCB-379C-466A-B888-E662543D4C92",variableType:93}
 */
var f_fechaImpresion = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"679158AF-20BF-4498-BFE7-2864CE396EF1"}
 */
var f_protocolo = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"FA7CAFEB-987B-45C1-AC85-D52BEF1CCE45"}
 */
var f_plan = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"40B32AF4-6970-44B1-8E27-13DB4584B567"}
 */
var f_cobertura = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"AF540993-8F9B-4C84-970F-280BFFB495CB"}
 */
var f_edad = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"ACF3272F-DB9E-441D-B35F-42FD4A65CAFD"}
 */
var f_histclin = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"DED7D9EF-5182-4BBB-8AA9-DAF711FBE4BA"}
 */
var f_apelnom = null;

/**
 * @properties={typeid:24,uuid:"DD1DAF39-188A-4F51-9733-9CC1C4B26206"}
 */
function limpiarForm (){
	
	f_apelnom = null;
	f_cobertura = null;
	f_edad = null;
	f_fechaImpresion = null;
	f_histclin = null;
	f_intervencion = null;
	f_matriculaMedico = null;
	f_nombreMedico = null;
	f_nroAfiliado = null;
	f_nroDocumento = null;
	f_nroSolicitud = null;
	f_plan = null;
	f_protocolo = null;
	f_servicio = null;
	
	$nroInternado = null;
	$tipoDocumento = null;
}

/**
 * TODO generated, please specify type and doc for the params
 * @param {boolean} value
 *
 * @properties={typeid:24,uuid:"3AAFAA1A-0083-4AFF-A109-09EA97CEA086"}
 */
function visibleFirmaMedico (value) {
	
	elements.txt_matriculaMedico.visible = value;
	elements.txt_nombreMedico.visible = value;

}
