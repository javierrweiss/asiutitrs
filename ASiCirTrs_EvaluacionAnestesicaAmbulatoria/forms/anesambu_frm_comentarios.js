
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"AFC82B74-0A63-44A1-A9D4-5DC653846DBD"}
 */
function onAction_campos_gral(event) {
	switch (event.getElementName()){
		case 'fld_medctos_1':elements.fld_medctos_2.requestFocus();break;
		case 'fld_medctos_2':elements.fld_medctos_3.requestFocus();break;
		case 'fld_medctos_3':elements.fld_medctos_4.requestFocus();break;
		case 'fld_medctos_4':elements.fld_medctos_5.requestFocus();break;
		case 'fld_medctos_5':elements.fld_medctos_6.requestFocus();break;
		case 'fld_medctos_6':elements.fld_medctos_7.requestFocus();break;
		case 'fld_medctos_7':elements.fld_medctos_8.requestFocus();break;
		case 'fld_medctos_8':elements.fld_medctos_9.requestFocus();break;
		case 'fld_medctos_9':elements.fld_medctos_10.requestFocus();break;
		case 'fld_medctos_10':elements.fld_coment_1.requestFocus();break;
		case 'fld_coment_1':elements.fld_coment_2.requestFocus();break;
		case 'fld_coment_2':elements.fld_coment_3.requestFocus();break;
		case 'fld_coment_3':elements.fld_coment_4.requestFocus();break;
		case 'fld_coment_4':elements.fld_coment_5.requestFocus();break;
		case 'fld_coment_5':elements.fld_coment_6.requestFocus();break;
		case 'fld_coment_6':elements.fld_coment_7.requestFocus();break;
		case 'fld_coment_7':elements.fld_coment_8.requestFocus();break;
		case 'fld_coment_8':elements.fld_coment_9.requestFocus();break;
		case 'fld_coment_9':elements.fld_coment_10.requestFocus();break;
	}
}

/**
 * Handle changed data.
 *
 * @param {String} oldValue old value
 * @param {String} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"252792BE-9D0C-43D6-95D3-1EAD587AD7D9"}
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
	if(globals.anesambu_completo1&&globals.anesambu_completo2&&globals.anesambu_completo3&&globals.anesambu_completo4&&globals.anesambu_completo5&&globals.anesambu_completo6&&globals.anesambu_completo9){
		forms.anesambu_frm_anestesia_preoperatoria_tab.elements.btn_grabar.visible=true
	}else{
		forms.anesambu_frm_anestesia_preoperatoria_tab.elements.btn_grabar.visible=false
	}
	return true
}
