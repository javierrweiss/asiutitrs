/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"DF001BF0-D078-4558-80A6-9BD9402D716E",variableType:4}
 */
var fneuro_1 = 0;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"CD2B9988-20FB-450B-99CD-5739ED7B40ED",variableType:4}
 */
var fneuro_2 = 0;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"E7E65F35-3717-4F6C-9E80-F5B7D3C439B6",variableType:4}
 */
var fneuro_3 = 0;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"03BCEC7C-3602-4339-85B4-9F51F07B8DCB",variableType:4}
 */
var fneuro_4 = 0;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"2E12BB80-92C5-4A24-B027-5E1BE716EC48",variableType:4}
 */
var fneuro_5 = 0;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"53F02399-88A6-41B5-A839-86749B4AE4BF",variableType:4}
 */
var fneuro_6 = 0;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"38AD2E5F-0F62-4CE9-B583-512ED4470631",variableType:4}
 */
var fneuro_7 = 0;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"577087B9-024B-485F-862A-A0E7D1149971",variableType:4}
 */
var fneuro_8 = 0;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"F8B93DEF-182C-4640-91C5-57981FD8EC96",variableType:4}
 */
var fneuro_9 = 0;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"04F2BEB3-2AEA-4919-81CC-AAC847946641",variableType:4}
 */
var fendo_1 = 0;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"5258D982-A7B1-4C89-A90B-90C2F57B4D98",variableType:4}
 */
var fendo_2 = 0;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"1F005427-29AF-4DDB-9334-53394892E7D0",variableType:4}
 */
var fendo_3 = 0;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"44301DD0-DFBB-49FA-ABA8-21856733FA16",variableType:4}
 */
var fendo_4 = 0;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"AACDCF8D-841A-414E-88E7-5A7F9AF53A62",variableType:4}
 */
var fendo_5 = 0;


/**
 * Handle changed data.
 *
 * @param {Number} oldValue old value
 * @param {Number} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"FA737D06-4B20-4A62-871E-BE95252F117C"}
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
	if(!globals.anesambu_completo3){
		forms.anesambu_frm_anestesia_preoperatoria_tab.elements.tabs.setTabFGColorAt(3,"#fb0000")
	}else{
		forms.anesambu_frm_anestesia_preoperatoria_tab.elements.tabs.setTabFGColorAt(3,"#040404")
	}
	if(globals.anesambu_completo1&&globals.anesambu_completo2&&globals.anesambu_completo3&&globals.anesambu_completo4&&globals.anesambu_completo5&&globals.anesambu_completo6&&globals.anesambu_completo9){
		forms.anesambu_frm_anestesia_preoperatoria_tab.elements.btn_grabar.visible=true
	}else{
		forms.anesambu_frm_anestesia_preoperatoria_tab.elements.btn_grabar.visible=false
	}
	switch (event.getElementName()){
		case 'neuro_1':elements.neuro_2.requestFocus();break;
		case 'neuro_2':elements.neuro_3.requestFocus();break;
		case 'neuro_3':elements.neuro_4.requestFocus();break;
		case 'neuro_4':elements.neuro_5.requestFocus();break;
		case 'neuro_5':elements.neuro_6.requestFocus();break;
		case 'neuro_6':elements.neuro_7.requestFocus();break;
		case 'neuro_7':elements.neuro_8.requestFocus();break;
		case 'neuro_8':elements.neuro_9.requestFocus();break;
		case 'neuro_9':elements.endo_1.requestFocus();break;
		case 'endo_1':elements.endo_2.requestFocus();break;
		case 'endo_2':elements.endo_3.requestFocus();break;
		case 'endo_3':elements.endo_4.requestFocus();break;
		case 'endo_4':elements.endo_5.requestFocus();break;
		case 'endo_5':if(globals.anesambu_completo3){forms.anesambu_frm_anestesia_preoperatoria_tab.elements.tabs.tabIndex=4;forms.anesambu_frm_grupo4_chk.elements.actidia_1.requestFocus()};break;
	}
	return true
}
