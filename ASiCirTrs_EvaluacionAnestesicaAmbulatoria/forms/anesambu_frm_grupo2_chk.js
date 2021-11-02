/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"6554D5A6-E5A6-4CB8-8EA9-B22D45F8ECB0",variableType:4}
 */
var fdifane_1 = 0;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"D0F0B005-9E6B-42EC-B079-BBB45DE15906",variableType:4}
 */
var fdifane_2 = 0;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"315B8F99-7C75-455F-B698-D979B5431F33",variableType:4}
 */
var fdifane_3 = 0;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"B5B7DAEC-22EF-4E09-8071-9077F11EB74E",variableType:4}
 */
var fdifane_4 = 0;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"36CF6D26-C1FE-4878-8E46-5957CD05EBA1",variableType:4}
 */
var fhepa_1 = 0;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"F7D9EA89-D066-403B-AE82-F17094C58B22",variableType:4}
 */
var fhepa_2 = 0;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"FBF93A88-06BE-440A-A946-C5C9214A1917",variableType:4}
 */
var fhepa_3 = 0;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"9831FB95-101E-4F29-9C38-6D980A253A1E",variableType:4}
 */
var fpulmon_1 = 0;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"0BB8D732-6139-4D27-9837-E4074C665871",variableType:4}
 */
var fpulmon_2 = 0;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"DF6B6DCC-79A3-4CB4-A91F-4064F675DBCC",variableType:4}
 */
var fpulmon_3 = 0;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"0DABBD05-02E0-4D01-B43C-6CF6F7CEC27A",variableType:4}
 */
var fpulmon_4 = 0;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"DB658B6A-3FB2-42E9-9D66-D146F84F53E4",variableType:4}
 */
var fpulmon_5 = 0;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"C4B910AD-D40E-42E2-B443-13E91D72F940",variableType:4}
 */
var fpulmon_6 = 0;


/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"F99E4A6B-85F9-4055-900D-5B34FCB791A3",variableType:4}
 */
var fgastro_5 = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"845BD9D7-A96C-419A-9F78-21B0A4542121",variableType:4}
 */
var fgastro_4 = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"0E1387BE-B3D2-46CE-B7C5-FC5FF09C220D",variableType:4}
 */
var fgastro_3 = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"849F304C-843E-4C46-87B4-B939C90F9572",variableType:4}
 */
var fgastro_2 = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"0CE80AFA-8262-43A1-8D45-35AD73039476",variableType:4}
 */
var fgastro_1 = 0;


/**
 * Handle changed data.
 *
 * @param {Number} oldValue old value
 * @param {Number} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"57526677-CEC8-4100-A640-EA305506E1A1"}
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
	if(!globals.anesambu_completo2){
		forms.anesambu_frm_anestesia_preoperatoria_tab.elements.tabs.setTabFGColorAt(2,"#fb0000")
	}else{
		forms.anesambu_frm_anestesia_preoperatoria_tab.elements.tabs.setTabFGColorAt(2,"#040404")
	}
	if(globals.anesambu_completo1&&globals.anesambu_completo2&&globals.anesambu_completo3&&globals.anesambu_completo4&&globals.anesambu_completo5&&globals.anesambu_completo6&&globals.anesambu_completo9){
		forms.anesambu_frm_anestesia_preoperatoria_tab.elements.btn_grabar.visible=true
	}else{
		forms.anesambu_frm_anestesia_preoperatoria_tab.elements.btn_grabar.visible=false
	}
	switch (event.getElementName()){
		case 'gastro_1':elements.gastro_2.requestFocus();break;
		case 'gastro_2':elements.gastro_3.requestFocus();break;
		case 'gastro_3':elements.gastro_4.requestFocus();break;
		case 'gastro_4':elements.gastro_5.requestFocus();break;
		case 'gastro_5':elements.difane_1.requestFocus();break;
		case 'difane_1':elements.difane_2.requestFocus();break;
		case 'difane_2':elements.difane_3.requestFocus();break;
		case 'difane_3':elements.difane_4.requestFocus();break;
		case 'difane_4':elements.hepa_1.requestFocus();break;
		case 'hepa_1':elements.hepa_2.requestFocus();break;
		case 'hepa_2':elements.hepa_3.requestFocus();break;
		case 'hepa_3':elements.pulmon_1.requestFocus();break;
		case 'pulmon_1':elements.pulmon_2.requestFocus();break;
		case 'pulmon_2':elements.pulmon_3.requestFocus();break;
		case 'pulmon_3':elements.pulmon_4.requestFocus();break;
		case 'pulmon_4':elements.pulmon_5.requestFocus();break;
		case 'pulmon_5':elements.pulmon_6.requestFocus();break;
		case 'pulmon_6':if(globals.anesambu_completo2){forms.anesambu_frm_anestesia_preoperatoria_tab.elements.tabs.tabIndex=3;forms.anesambu_frm_grupo3_chk.elements.neuro_1.requestFocus()};break;
	}
	return true
}
