
/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"8C00740D-11DB-40AA-A566-D29BCB6BF872"}
 */
function onShow_inicializarForm(firstShow, event) {
	
	controller.setSelectedIndex(1);
	elements.btn_seleccionar.requestFocus();
}
