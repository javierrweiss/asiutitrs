/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"094D230B-8B43-47A0-8DFA-C8BFA2AFBCDE",variableType:4}
 */
var frm_todos = 0;

/**
 * Callback method when form is (re)loaded.
 *
 * @properties={typeid:24,uuid:"D4123EB2-69F9-4E2B-96AF-18C557E86389"}
 */
function onLoad_inicio() {
	frm_todos = 0
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"8DC694CD-2698-4568-A364-65D856BA0DCD"}
 */
function onAction_todos(event) {
	var $max = foundset.getSize()
	if ($max != 0){
		for (var i = 1; i <= $max; i ++){
			foundset.setSelectedIndex(i)
			if (frm_todos == 0){
				foundset.marca = 0
			}else{
				foundset.marca = 1
			}
		}
		databaseManager.saveData()
		foundset.setSelectedIndex(1)
		application.updateUI()
	}
}
