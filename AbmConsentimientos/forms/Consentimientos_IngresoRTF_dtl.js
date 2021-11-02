/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"67F9448E-DA89-4648-A566-0814D1B6C0FB",variableType:93}
 */
var fechaimpresion = new Date();

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"F24F596F-1F43-4EE0-BB33-AEF47D953BBF"}
 */
function onAction(event) {
	    foundset.tipo=globals.vTipoTexto
		databaseManager.saveData(foundset)
		
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"8A839B59-A1C2-4C3C-AFD4-7CD5A32BEE18"}
 */
function onAction3(event) {
	foundset.newRecord()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"AA5CD440-63A8-42BC-BDB9-E47105D869EE"}
 * @AllowToRunInFind
 */
function onAction_edita(event) {
	foundset.find()
	foundset.tipo=globals.vTipoTexto
	foundset.search()
}
