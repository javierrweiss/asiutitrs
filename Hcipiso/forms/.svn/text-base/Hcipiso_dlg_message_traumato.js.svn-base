/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"4E80D2AA-E497-4B80-898B-62D89715A3C6"}
 */
var f_message = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"9810F299-C6A2-4AA6-BD92-B7D88F3EFF6E"}
 */
var f_medico = '';

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"BB076BD4-4C94-426E-BF12-3225713ACB86",variableType:4}
 */
var f_opcion = 1;

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"FC94B819-0B60-49E1-8D5A-5C66D51253C7"}
 */
function onAction_seleccionar(event) {
	
	if(f_opcion == 1 || f_opcion == 2){
		
		globals.Hcipiso_wEquipo = f_opcion;
		cerrarForm();
	}
	else
		globals.DIALOGS.showWarningDialog('Atención','Debe seleccionar una opción.')
}

/**
 * @properties={typeid:24,uuid:"F626CD4B-8709-44AF-AF76-25E89D827F6D"}
 */
function cerrarForm () {
	
	var $name = application.getActiveWindow().getName();
	var $win = application.getWindow($name);
	if($win!=null){
		$win.hide();
		$win.destroy();
	}
}

/**
 * Handle hide window.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"81356E02-F6E2-4A58-92F1-817818CC7F12"}
 */
function onHide_cerrarForm(event) {
	// TODO Auto-generated method stub
	return false
}
