/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"259AA459-5FCA-4BC8-A9EE-63199F8B6E04"}
 */
var f_relacionI = null;

/**
 * Handle changed data.
 *
 * @param {Number} oldValue old value
 * @param {Number} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"BE676406-DE93-4E74-8E79-7A0B9699E9D9"}
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
 * @properties={typeid:24,uuid:"71FAB60B-8B99-4BD5-9E0A-EBAB26DD5CA8"}
 */
function onAction_nextCampos(event) {
	switch (event.getElementName()){
	case 'arm1vt':elements.arm1fr.requestFocus();break;
	case 'arm1fr':elements.arm1peep.requestFocus();break;
	case 'arm1peep':elements.arm1fio2.requestFocus();break;
	case 'arm1fio2':elements.arm1sato2.requestFocus();break;
	case 'arm1sato2':elements.arm1pafi.requestFocus();break;
	case 'arm1pafi':elements.arm1cest.requestFocus();break;
	case 'arm1cest':elements.arm1ppico.requestFocus();break;
	case 'arm1ppico':elements.arm1pplateau.requestFocus();break;
	case 'arm1pplateau':elements.arm1sensib.requestFocus();break;
	case 'arm1sensib':elements.arm1pausainsp.requestFocus();break;
	case 'arm1pausainsp':elements.arm1relie.requestFocus();break;
	}
}
