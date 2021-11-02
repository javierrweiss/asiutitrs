/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"A06D2774-BE25-4541-892B-CBBBB3334582",variableType:4}
 */
var factidia_1 = 0;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"81859C38-F4FC-4C26-8C13-0AC288F092F3",variableType:4}
 */
var factidia_2 = 0;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"0AC7874F-E220-49AC-96CC-33DBD7241EF8",variableType:4}
 */
var factidia_3 = 0;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"8CD31CAB-609C-4001-8E30-B491C27DE3CC",variableType:4}
 */
var factidia_4 = 0;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"32482800-7DC3-4B33-BBF8-719DA93C256A",variableType:4}
 */
var factidia_5 = 0;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"B3F5C8CD-E3A0-4EA4-B408-7A350C1CE6C9",variableType:4}
 */
var factidia_6 = 0;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"22BD809C-E0B3-4D1F-A94D-529BEF1F1DD9",variableType:4}
 */
var fusodroga_1 = 0;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"AE93C9BB-9910-4E72-8FFB-C0207B97EE0B",variableType:4}
 */
var fusodroga_2 = 0;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"D1AD7A95-C92B-43E4-ADAA-79D813036E27",variableType:4}
 */
var fusodroga_3 = 0;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"4EE14ED1-EC39-45C3-84C8-98161BDE99EE",variableType:4}
 */
var fasa_1 = 0;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"27A2AAEE-73E1-4A4B-BA97-7889507A102E",variableType:4}
 */
var fpedia_1 = 0;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"0BA77F25-FFA9-45F3-A69D-6E500F03D7E1",variableType:4}
 */
var fpedia_2 = 0;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"6EEB4D07-5B17-4260-8D19-004125CEBF2B",variableType:4}
 */
var fpedia_3 = 0;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"5C865F05-4FC0-4489-8040-BBE5E27AB36A",variableType:4}
 */
var fobste_1 = 0;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"01359838-6F0B-42FC-9F7E-B68957ED423D",variableType:4}
 */
var fobste_2 = 0;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"F16EB4A7-12F1-4387-B4EC-890841D54949",variableType:4}
 */
var fobste_3 = 0;

/**
 * Handle changed data.
 *
 * @param {Number} oldValue old value
 * @param {Number} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"F29DC941-F9BC-40B0-ABF9-FF2E367117C0"}
 */
function onDataChange_campos_gral(oldValue, newValue, event) {
	globals.anesambu_completo1=globals.anesambu_valida_datos_obligatorios("anesambu_frm_grupo1_chk")
	globals.anesambu_completo2=globals.anesambu_valida_datos_obligatorios("anesambu_frm_grupo2_chk")
	globals.anesambu_completo3=globals.anesambu_valida_datos_obligatorios("anesambu_frm_grupo3_chk")
	globals.anesambu_completo6=globals.anesambu_valida_datos_obligatorios("anesambu_frm_grupo6_chk")
	globals.anesambu_completo5=globals.anesambu_valida_datos_obligatorios("anesambu_frm_grupo5_chk")
	globals.anesambu_completo4=globals.anesambu_valida_datos_obligatorios("anesambu_frm_grupo4_chk")
	if(globals.anesambu_valida_datos_cabecera("anesambu_frm_anestesia_preoperatoria_tab",'fpresionmax')&&globals.anesambu_valida_datos_cabecera("anesambu_frm_anestesia_preoperatoria_tab",'fpresionmin')&&globals.anesambu_horainicio!=''&&globals.anesambu_horainicio!=null){
		globals.anesambu_completo9=true
	}else{
		globals.anesambu_completo9=false
	}
	if(globals.anesambu_completo1&&globals.anesambu_completo2&&globals.anesambu_completo3&&globals.anesambu_completo4&&globals.anesambu_completo5&&globals.anesambu_completo6&&globals.anesambu_completo9){
		forms.anesambu_frm_anestesia_preoperatoria_tab.elements.btn_grabar.visible=true
	}else{
		forms.anesambu_frm_anestesia_preoperatoria_tab.elements.btn_grabar.visible=false
	}
	switch (event.getElementName()){
		case 'actidia_1':elements.actidia_2.requestFocus();break;
		case 'actidia_2':elements.actidia_3.requestFocus();break;
		case 'actidia_3':elements.actidia_4.requestFocus();break;
		case 'actidia_4':elements.actidia_5.requestFocus();break;
		case 'actidia_5':elements.actidia_6.requestFocus();break;
		case 'actidia_6':elements.usodroga_1.requestFocus();break;
		case 'usodroga_1':elements.usodroga_2.requestFocus();break;
		case 'usodroga_2':elements.usodroga_3.requestFocus();break;
		case 'usodroga_3':elements.asa_1.requestFocus();break;
		case 'asa_1':elements.pedia_1.requestFocus();break;
		case 'pedia_1':elements.pedia_2.requestFocus();break;
		case 'pedia_2':elements.pedia_3.requestFocus();break;
		case 'pedia_3':elements.obste_1.requestFocus();break;
		case 'obste_1':elements.obste_2.requestFocus();break;
		case 'obste_2':if(globals.anesambu_completo4){forms.anesambu_frm_anestesia_preoperatoria_tab.elements.tabs.tabIndex=5;forms.anesambu_frm_grupo5_chk.elements.renal_1.requestFocus()};break;
	}
	return true
}
