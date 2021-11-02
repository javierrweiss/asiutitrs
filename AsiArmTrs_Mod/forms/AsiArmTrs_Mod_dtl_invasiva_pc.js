/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"DB260018-0C44-4DBC-84D3-CEFEF1C2A02D"}
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
 * @properties={typeid:24,uuid:"0AAE1696-994F-48C0-8D1A-4A486D11BDF8"}
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
 * @properties={typeid:24,uuid:"7EF39FDC-A65C-44C0-BB45-E294F659D4A7"}
 */
function onAction_nextCampo(event) {
	switch (event.getElementName()){
	case 'arm2pins':elements.arm2tins.requestFocus();break;
	case 'arm2tins':elements.arm2fr.requestFocus();break;
	case 'arm2fr':elements.arm2vtaprox.requestFocus();break;
	case 'arm2vtaprox':elements.arm2fio2.requestFocus();break;
	case 'arm2fio2':elements.arm2sato2.requestFocus();break;
	case 'arm2sato2':elements.arm2pafi.requestFocus();break;
	case 'arm2pafi':elements.arm2cest.requestFocus();break;
	case 'arm2cest':elements.arm2relie.requestFocus();break;
	}
}
