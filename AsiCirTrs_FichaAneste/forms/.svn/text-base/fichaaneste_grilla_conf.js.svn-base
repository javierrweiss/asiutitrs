/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"427EB6B0-4452-48AD-8403-1653FE482D66",variableType:93}
 */
var fhora = null;

/**
 * Handle changed data.
 *
 * @param {Number} oldValue old value
 * @param {Number} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"EA7E1123-F246-4AEE-AC14-4A65D7F198A8"}
 */
function onDataChange_Escala_min(oldValue, newValue, event) {
	if (scopes.globals.fichaaneste_pasomin == null || scopes.globals.fichaaneste_pasomin == 0)
		{scopes.globals.fichaaneste_vmensaje = 'Debe ingresar Escala en minutos para armar la grilla '
		globals.DIALOGS.showInfoDialog('Aviso',scopes.globals.fichaaneste_vmensaje,"Aceptar")	
		return false}
	if (!(scopes.globals.fichaaneste_pasomin > 0 || scopes.globals.fichaaneste_pasomin <= 60))    // TODO ver estos limites
		{scopes.globals.fichaaneste_vmensaje = 'Debe ingresar Escala en minutos entre 1 y 60 '
		globals.DIALOGS.showInfoDialog('Aviso',scopes.globals.fichaaneste_vmensaje,"Aceptar")	
		return false}	

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
 * @properties={typeid:24,uuid:"6FE02854-E1A2-4C04-93C1-407A99ACDAF9"}
 */
function onDataChange_hora_inicio_grilla(oldValue, newValue, event) {
	var $fec = scopes.globals.fichaaneste_hora_inicio_grilla_date
	var $hora = $fec.getHours()
	var $min  = $fec.getMinutes()
	if ($min < 10)
		{$min = '0' + $min}	
	if ($hora < 10)
		{$hora = '0' + $hora}

	scopes.globals.fichaaneste_hora_inicio_grilla =  $hora +'' + $min 
	return true
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"C1E04888-FD97-4D25-A98B-981CAC8F022A"}
 */
function onAction_salir(event) {
	if (onDataChange_horas(null, null, event) == false)
		return
	if(onDataChange_Escala_min(null, null, event) == false)
		return
	var $win = application.getWindow(application.getActiveWindow().getName());
	if($win != null){
		$win.hide()
		$win.destroy()
		}
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
 * @properties={typeid:24,uuid:"47344076-77DD-4C7C-9DC9-75CE0F3E3378"}
 */
function onDataChange_horas(oldValue, newValue, event) {

if (scopes.globals.fichaaneste_horas == null || scopes.globals.fichaaneste_horas == 0)
	{scopes.globals.fichaaneste_vmensaje = 'Debe ingresar Horas para armar la grilla '
	globals.DIALOGS.showInfoDialog('Aviso',scopes.globals.fichaaneste_vmensaje,"Aceptar")	
	return false}
if ((scopes.globals.fichaaneste_horas < 1 || scopes.globals.fichaaneste_horas > 12))    // TODO ver estos limites
	{scopes.globals.fichaaneste_vmensaje = 'Debe ingresar Horas entre 1 y 12 '
	globals.DIALOGS.showInfoDialog('Aviso',scopes.globals.fichaaneste_vmensaje,"Aceptar")	
	return false}

return true
}
