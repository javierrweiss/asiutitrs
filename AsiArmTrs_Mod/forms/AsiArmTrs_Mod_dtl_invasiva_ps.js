/**
 * Handle changed data.
 *
 * @param {Number} oldValue old value
 * @param {Number} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"2BB45108-AEBF-41C8-93AC-59CA7D153AE5"}
 */
function onDataChange_tab(oldValue, newValue, event) {
	
	forms.AsiArmTrs_Mod_frm_arm_dia.$isDirty = true;
	return true
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"176B4F1B-8401-4959-B8CC-9F37C47BED5A"}
 */
function onAction_nextCampos(event) {
	switch (event.getElementName()){
	case 'arm3cpap':elements.arm3ps.requestFocus();break;
	case 'arm3ps':elements.arm3fio2.requestFocus();break;
	case 'arm3fio2':elements.arm3fraprox.requestFocus();break;
	case 'armfraprox':elements.arm3vtaprox.requestFocus();break;
	case 'arm3vtaprox':elements.arm3pafio2.requestFocus();break;
	}
}
