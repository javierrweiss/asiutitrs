/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"235033D4-2F88-4A4E-8CF5-BCD0A98B66CA"}
 */
function onAction_campo_gral(event) {
	globals.dosis_1=true
	globals.dosis_2=true
	globals.dosis_3=true
	if(globals.vacfecha_1_fec==null||vacestado_1==null||vacaplica_1==0||vaccert_1==null||vacquien_1==''){
		globals.dosis_1=false
	}
	if(globals.vacfecha_2_fec==null||vacestado_2==null||vacaplica_2==0||vaccert_2==null||vacquien_2==''){
		globals.dosis_2=false
	}
	if(globals.vacfecha_3_fec==null||vacestado_3==null||vacaplica_3==0||vaccert_3==null||vacquien_3==''){
		globals.dosis_3=false
	}
	
	switch (event.getElementName()){
	case 'vacfecha_1':if(globals.vacfecha_1_fec!=null){elements.vacestado_1.requestFocus()}else{elements.vacfecha_1.requestFocus()};break;
	case 'vacestado_1':elements.vacaplica_1.requestFocus();break;
	case 'vacaplica_1':if(vacaplica_1!=null){elements.vaccert_1.requestFocus()}else{elements.vacaplica_1.requestFocus()};break;
	case 'vaccert_1':if(vaccert_1!=null){elements.vacquien_1.requestFocus()}else{elements.vaccert_1.requestFocus()};break;
	case 'vacquien_1':if(vacquien_1!=null){elements.vacdeta_1.requestFocus()}else{elements.vacquien_1.requestFocus()};break;
	case 'vacdeta_1':elements.vacfecha_2.requestFocus();break;
	case 'vacfecha_2':if(globals.vacfecha_2_fec!=null){elements.vacestado_2.requestFocus()}else{elements.vacfecha_2.requestFocus()};break;
	case 'vacestado_2':if(vacestado_2!=null)elements.vacaplica_2.requestFocus();break;
	case 'vacaplica_2':if(vacaplica_2!=null)elements.vaccert_2.requestFocus();break;
	case 'vaccert_2':if(vaccert_2!=null)elements.vacquien_2.requestFocus();break;
	case 'vacquien_2':if(vacquien_2!=null)elements.vacdeta_2.requestFocus();break;
	case 'vacdeta_2':elements.vacfecha_3.requestFocus();break;
	case 'vacfecha_3':if(globals.vacfecha_3_fec!=null){elements.vacestado_3.requestFocus()}else{elements.vacfecha_3.requestFocus()};break;
	case 'vacestado_3':if(vacestado_3!=null)elements.vacaplica_3.requestFocus();break;
	case 'vacaplica_3':if(vacaplica_3!=null)elements.vaccert_3.requestFocus();break;
	case 'vaccert_3':if(vaccert_3!=null)elements.vacquien_3.requestFocus();break;
	case 'vacquien_3':if(vacquien_3!=null)elements.vacdeta_3.requestFocus();break;
	case 'vacdeta_3':elements.vacfecha_4.requestFocus();break;
	case 'vacfecha_4':if(globals.vacfecha_4_fec!=null){elements.vacestado_4.requestFocus()}else{}elements.vacfecha_4.requestFocus();break;
	case 'vacestado_4':if(vacestado_4!=null)elements.vacaplica_4.requestFocus();break;
	case 'vacaplica_4':if(vacaplica_4!=null)elements.vaccert_4.requestFocus();break;
	case 'vaccert_4':if(vaccert_4!=null)elements.vacquien_4.requestFocus();break;
	case 'vacquien_4':if(vacquien_4!=null)elements.vacdeta_4.requestFocus();break;
	}
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"E80CDBBC-30B6-41A6-B6CD-E33A3286F079"}
 */
function onShow_frm_vacunas_per_dtl(firstShow, event) {
	elements.vacfecha_1.requestFocus()
}

/**
 * Handle changed data.
 *
 * @param {Date} oldValue old value
 * @param {Date} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"DA3F3621-3BB1-4210-9F11-4E9D946E7DD5"}
 */
function onDataChange_nulo(oldValue, newValue, event) {
	if(newValue == null || newValue == ''){
		return false
	}else{
		return true
	}
}
