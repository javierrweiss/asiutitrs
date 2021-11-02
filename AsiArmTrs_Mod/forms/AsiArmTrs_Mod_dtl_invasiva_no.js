/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"5566F9E7-4A18-4FAF-85F7-F2704938CA17",variableType:4}
 */
var f_armTipoFlujo = 0;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"6812D3B3-6739-41A1-9BC2-8DE0348C05A9"}
 */
var f_armFlujoUnidad = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"09C4C712-3ADD-4C67-AECC-CC019C43030F",variableType:8}
 */
var f_armFlujo = 0;

/**
 * Handle changed data.
 *
 * @param oldValue old value
 * @param newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"BF544C92-DEFE-4855-AB16-3736065C2AB7"}
 */
function onDataChange_cboArmFlujo(oldValue, newValue, event) {
	
	if(f_armTipoFlujo == 1){
		
		f_armFlujoUnidad = '( lt/min )';
		elements.txt_armFlujo.requestFocus();
	}
	
	if(f_armTipoFlujo == 2){
		
		f_armFlujoUnidad = '( % )';
		elements.txt_armFlujo.requestFocus();
	}
	
	forms.AsiArmTrs_Mod_frm_arm_dia.$isDirty = true;
	return true
}

/**
 * Handle changed data.
 *
 * @param {Number} oldValue old value
 * @param {Number} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"5A6C0325-779F-44BD-AF2E-DD3BE32D49A9"}
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
 * @properties={typeid:24,uuid:"28B861B0-28B0-41F9-97EC-30BAD99B4F27"}
 */
function onAction_nextCampo(event) {
	switch (event.getElementName()){
	case 'txt_armIpap':elements.txt_armEpap.requestFocus();break;
	case 'txt_armEpap':elements.cbo_armFlujo.requestFocus();break;
	case 'cbo_armFlujo':elements.txt_armFlujo.requestFocus();break;
	case 'txt_armFlujo':elements.txt_armVtAprox.requestFocus();break;
	case 'txt_armVtAprox':elements.txt_armFr.requestFocus();break;
	case 'txt_armFr':elements.armrampa.requestFocus();break;
	case 'armrampa':elements.txt_armSato.requestFocus();break;
	}
}
