/**
 * Handle changed data.
 *
 * @param {String} oldValue old value
 * @param {String} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"F5A3F888-A815-4846-BDE2-D43070937C20"}
 */
function onDataChange_tratam(oldValue, newValue, event) {
	if  (histpactratam == '' ||
	histpactratam == null ||
	histpactratam == ' ')		
	{forms.AtCons_carga.elements.tabs.setTabFGColorAt(4, '#E60026')}
else{forms.AtCons_carga.elements.tabs.setTabFGColorAt(4,  '#000000')}
	return true
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"FBED5E13-38B9-4759-9F10-00823121BE93"}
 */
function onShow(firstShow, event) {
	if  (histpactratam == '' ||
	histpactratam == null ||
	histpactratam == ' ')		
{forms.AtCons_carga.elements.tabs.setTabFGColorAt(4, '#E60026')}
else{forms.AtCons_carga.elements.tabs.setTabFGColorAt(4,  '#000000')}
	elements.histpactratam.requestFocus()
}
