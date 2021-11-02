
/**
 * Handle changed data.
 *
 * @param {String} oldValue old value
 * @param {String} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"438B3FFF-D3AC-4F75-A192-9735B0CC2A9C"}
 */
function onDataChangeUpdateField(oldValue, newValue, event) {
	// TODO Auto-generated method stub
	var column_name = event.getElementName();
	var fsUpdater = databaseManager.getFoundSetUpdater(foundset);
	fsUpdater.setColumn(column_name, newValue)
	fsUpdater.performUpdate()
	return true
}
