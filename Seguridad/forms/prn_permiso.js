/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"6FCB1E82-EF08-4C59-A5AB-E293EDB8061B",variableType:93}
 */
var fecha_impre = new Date();

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"F8063D64-0F4A-43EE-AAAC-BA28A6EDBFBC"}
 * @AllowToRunInFind
 */
function onShow_filtra(firstShow, event) {
	foundset.clear()
	foundset.addFoundSetFilterParam('codigo_perfil', '!=', ' ')
    foundset.loadAllRecords()
}
