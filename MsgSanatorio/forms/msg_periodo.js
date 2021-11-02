/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"60483A06-1C67-4EC9-95EA-BD6CD3A076CD"}
 */
function onShow_cargar_fecha_hoy(firstShow, event) {
	globals.gbl_periodo_gral = application.getServerTimeStamp()
	globals.gbl_periodo_ok = 0
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"EA75E80F-4504-413F-A802-0A454D94A77A"}
 */
function onAction_sumar_mes(event) {
	var mes 
	mes = globals.gbl_periodo_gral.getMonth()+1
	globals.gbl_periodo_gral = globals.gbl_periodo_gral.setMonth(mes)	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"AF8CB6DC-2127-4C15-902A-C1A9564ED4DA"}
 */
function onAction_sumar_anios(event) {
	var anio 
	anio = globals.gbl_periodo_gral.getFullYear()+1
	globals.gbl_periodo_gral = globals.gbl_periodo_gral.setFullYear(anio)	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"04D65827-204A-4D9D-89BB-ED8A4D297475"}
 */
function onAction_restar_mes(event) {
	var mes 
	mes = globals.gbl_periodo_gral.getMonth()-1
	globals.gbl_periodo_gral = globals.gbl_periodo_gral.setMonth(mes)	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"615E1EE4-DC8B-4D53-AC52-5BB3BC2454B3"}
 */
function onAction_restar_anios(event) {
	var anio 
	anio = globals.gbl_periodo_gral.getFullYear()-1
	globals.gbl_periodo_gral = globals.gbl_periodo_gral.setFullYear(anio)
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"5FCDD0A8-B765-4FA5-AE44-BE294A7C2A66"}
 */
function onAction_ok(event) {
	globals.gbl_periodo_ok = 1
	//application.getWindow('pide_periodo').hide()
	var name=application.getActiveWindow()
	name.getName()
	var $win=application.getWindow(name.getName())
	if($win!=null){
		$win.hide()
		$win.destroy()
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"3872A83C-1F96-43EF-8F5A-C4D7374DBC42"}
 */
function onAction_cancelar(event) {
	globals.gbl_periodo_ok = 0
	//application.getWindow('pide_periodo').hide()
	var name=application.getActiveWindow()
	name.getName()
	var $win=application.getWindow(name.getName())
	if($win!=null){
		$win.hide()
		$win.destroy()
	}
}
