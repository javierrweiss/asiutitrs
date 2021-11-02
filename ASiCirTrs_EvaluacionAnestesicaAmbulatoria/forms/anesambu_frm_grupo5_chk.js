/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"91320834-54A8-47FA-9C1A-F6BBA21A78FE",variableType:4}
 */
var frenal_1 = 0;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"88E5BE41-9EFA-4880-95F0-CE0652D75514",variableType:4}
 */
var frenal_2 = 0;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"023F837F-5BA1-46EF-BB3D-6F6733904D29",variableType:4}
 */
var frenal_3 = 0;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"4441290D-24B7-44E0-9A20-4DE7766BBF6D",variableType:4}
 */
var frenal_4 = 0;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"ADA612C4-9947-484C-BC27-838BF58B3DD0",variableType:4}
 */
var finfec_1 = 0;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"10A64195-8E80-40A1-8F9E-A24A13C4AC0B",variableType:4}
 */
var finfec_2 = 0;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"F47556D5-C7C1-4873-90E2-C0FE89772C75",variableType:4}
 */
var finfec_3 = 0;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"81DD253B-6C8F-42B9-999C-16EE0C6D698C",variableType:4}
 */
var finfec_4 = 0;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"3FD24F07-BEFC-4C95-85C6-0C15AA9B2299",variableType:4}
 */
var finfec_5 = 0;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"EE929EDC-A1B1-42B3-A8F3-815CB451E5D1",variableType:4}
 */
var fhemat_1 = 0;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"E64D0202-5071-48AB-A472-36EB1AC80614",variableType:4}
 */
var fhemat_2 = 0;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"CC298D3A-9B58-4760-881B-F713D254E061",variableType:4}
 */
var fhemat_3 = 0;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"93EE9215-91CC-4A66-96C2-E4C36DEA5954",variableType:4}
 */
var fhemat_4 = 0;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"D586FA6D-DE41-485B-A98C-416F80B6E8D9",variableType:4}
 */
var fhemat_5 = 0;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"BA529256-097C-48BC-8013-4EBFB04E82B9",variableType:4}
 */
var fhemat_6 = 0;


/**
 * Handle changed data.
 *
 * @param {Number} oldValue old value
 * @param {Number} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"346A3E45-7DC7-436E-837D-5EE6648E69D9"}
 */
function onDataChange_campos_gral(oldValue, newValue, event) {
	globals.anesambu_completo1=globals.anesambu_valida_datos_obligatorios("anesambu_frm_grupo1_chk")
	globals.anesambu_completo2=globals.anesambu_valida_datos_obligatorios("anesambu_frm_grupo2_chk")
	globals.anesambu_completo3=globals.anesambu_valida_datos_obligatorios("anesambu_frm_grupo3_chk")
	globals.anesambu_completo4=globals.anesambu_valida_datos_obligatorios("anesambu_frm_grupo4_chk")
	globals.anesambu_completo5=globals.anesambu_valida_datos_obligatorios("anesambu_frm_grupo5_chk")
	globals.anesambu_completo6=globals.anesambu_valida_datos_obligatorios("anesambu_frm_grupo6_chk")
	if(globals.anesambu_valida_datos_cabecera("anesambu_frm_anestesia_preoperatoria_tab",'fpresionmax')&&globals.anesambu_valida_datos_cabecera("anesambu_frm_anestesia_preoperatoria_tab",'fpresionmin')&&globals.anesambu_horainicio!=''&&globals.anesambu_horainicio!=null){
		globals.anesambu_completo9=true
	}else{
		globals.anesambu_completo9=false
	}
	if(!globals.anesambu_completo5){
		forms.anesambu_frm_anestesia_preoperatoria_tab.elements.tabs.setTabFGColorAt(5,"#fb0000")
	}else{
		forms.anesambu_frm_anestesia_preoperatoria_tab.elements.tabs.setTabFGColorAt(5,"#040404")
	}
	if(globals.anesambu_completo1&&globals.anesambu_completo2&&globals.anesambu_completo3&&globals.anesambu_completo4&&globals.anesambu_completo5&&globals.anesambu_completo6&&globals.anesambu_completo9){
		forms.anesambu_frm_anestesia_preoperatoria_tab.elements.btn_grabar.visible=true
	}else{
		forms.anesambu_frm_anestesia_preoperatoria_tab.elements.btn_grabar.visible=false
	}
	switch (event.getElementName()){
		case 'renal_1':elements.renal_2.requestFocus();break;
		case 'renal_2':elements.renal_3.requestFocus();break;
		case 'renal_3':elements.renal_4.requestFocus();break;
		case 'renal_4':elements.infec_1.requestFocus();break;
		case 'infec_1':elements.infec_2.requestFocus();break;
		case 'infec_2':elements.infec_3.requestFocus();break;
		case 'infec_3':elements.infec_4.requestFocus();break;
		case 'infec_4':elements.infec_5.requestFocus();break;
		case 'infec_5':elements.hemat_1.requestFocus();break;
		case 'hemat_1':elements.hemat_2.requestFocus();break;
		case 'hemat_2':elements.hemat_3.requestFocus();break;
		case 'hemat_3':elements.hemat_4.requestFocus();break;
		case 'hemat_4':elements.hemat_5.requestFocus();break;
		case 'hemat_5':elements.hemat_6.requestFocus();break;
		case 'hemat_6':if(globals.anesambu_completo5){forms.anesambu_frm_anestesia_preoperatoria_tab.elements.tabs.tabIndex=6;forms.anesambu_frm_grupo6_chk.elements.otros_1.requestFocus()};break;
	}
	return true
}
