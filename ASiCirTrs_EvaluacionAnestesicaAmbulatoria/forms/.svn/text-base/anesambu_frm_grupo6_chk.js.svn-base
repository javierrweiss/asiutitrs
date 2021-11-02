/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"B0DB6C15-69E2-4C19-8E97-941448B8E69C",variableType:4}
 */
var fotros_1 = 0;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"C22B37C8-CAE6-4C58-BB73-DE9827601A79",variableType:4}
 */
var fotros_2 = 0;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"8EE5FEFD-9934-4F15-9DEB-1DB28F7101BD",variableType:4}
 */
var fotros_3 = 0;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"528450E5-DE4F-46B4-9B64-7C5DA0F4DB8E",variableType:4}
 */
var fotros_4 = 0;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"4544AC03-557D-44D8-9568-C32643CD453C",variableType:4}
 */
var fotros_5 = 0;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"E04105BC-0107-46B5-802E-952483D60A05",variableType:4}
 */
var fotros_6 = 0;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"7A2B2569-B1C0-4DF6-9D67-DAB80F5C12EC",variableType:4}
 */
var freghab_1 = 0;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"6722B26C-C4EA-4071-AFD2-218FBFB6805D",variableType:4}
 */
var freghab_2 = 0;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"B92F8FB1-D9E6-4E2E-93A5-CE62DE847B54",variableType:4}
 */
var freghab_3 = 0;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"6E692441-F419-4530-A3E9-61C445BE80B8",variableType:4}
 */
var freghab_4 = 0;


/**
 * Handle changed data.
 *
 * @param {Number} oldValue old value
 * @param {Number} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"09B06F8E-7AB5-4194-BDB1-D2FE43E1DDB8"}
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
	if(!globals.anesambu_completo6){
		forms.anesambu_frm_anestesia_preoperatoria_tab.elements.tabs.setTabFGColorAt(6,"#fb0000")
	}else{
		forms.anesambu_frm_anestesia_preoperatoria_tab.elements.tabs.setTabFGColorAt(6,"#040404")
	}
	if(globals.anesambu_completo1&&globals.anesambu_completo2&&globals.anesambu_completo3&&globals.anesambu_completo4&&globals.anesambu_completo5&&globals.anesambu_completo6&&globals.anesambu_completo9){
		forms.anesambu_frm_anestesia_preoperatoria_tab.elements.btn_grabar.visible=true
	}else{
		forms.anesambu_frm_anestesia_preoperatoria_tab.elements.btn_grabar.visible=false
	}
	switch (event.getElementName()){
		case 'otros_1':elements.otros_2.requestFocus();break;
		case 'otros_2':elements.otros_3.requestFocus();break;
		case 'otros_3':elements.otros_4.requestFocus();break;
		case 'otros_4':elements.otros_5.requestFocus();break;
		case 'otros_5':elements.otros_6.requestFocus();break;
		case 'otros_6':elements.reghab_1.requestFocus();break;
		case 'reghab_1':elements.reghab_2.requestFocus();break;
		case 'reghab_2':elements.reghab_3.requestFocus();break;
		case 'reghab_3':elements.reghab_4.requestFocus();break;
		case 'reghab_4':if(globals.anesambu_completo6){forms.anesambu_frm_anestesia_preoperatoria_tab.elements.tabs.tabIndex=7;forms.anesambu_frm_laboratorio.elements.fld_anesgr.requestFocus()};break;
	}
	return true
}
