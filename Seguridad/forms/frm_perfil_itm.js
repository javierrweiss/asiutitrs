/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"8369919F-457F-4166-9367-425C3711728E",variableType:4}
 */
var frm_todos_v = 0;
 
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"04BE8B1A-0FF2-4A68-81FF-42AD1756CEBF",variableType:4}
 */
var frm_todos_a = 0;

/**
 * Callback method when form is (re)loaded.
 *
 * @properties={typeid:24,uuid:"D3E9E3D1-41FA-4F20-8437-9693E97579FD"}
 */
function onLoad_inicio() {
	frm_todos_a = 0
	frm_todos_v = 0
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"8452D730-F7E0-481C-AFCD-F9E80B648CF7"}
 */
function onAction_todos_v(event) {
	var $max = foundset.getSize()
	if ($max != 0){
		for (var i = 1; i <= $max; i ++){
			foundset.setSelectedIndex(i)
			if (frm_todos_v == 0){
				foundset.visible = 0
			}else{
				foundset.visible = 1
			}
		}
		databaseManager.saveData()
		foundset.setSelectedIndex(1)
		application.updateUI()
	}
}

/**
 * @param event
 *
 * @properties={typeid:24,uuid:"2F75A12F-FF98-4B3B-B290-29C7DB4BCF14"}
 */
function onAction_todos_a(event) {
	var $max = foundset.getSize()
	if ($max != 0){
		for (var i = 1; i <= $max; i ++){
			foundset.setSelectedIndex(i)
			if (frm_todos_a == 0){
				foundset.accesible = 0
			}else{
				foundset.accesible = 1
			}
		}
		databaseManager.saveData()
		foundset.setSelectedIndex(1)
		application.updateUI()
	}
}
