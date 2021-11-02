/**
 * Handle record selected.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"91257261-6CF4-4467-8CE4-BE2245C6145A"}
 */
function onRecordSelection_fecha_salida(event) {
	globals.gbl_fecha_sal = foundset.mov_fecha_egr
	globals.gbl_fecha_ent = foundset.mov_fecha_ing
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"658789BE-65B4-4AF9-A11F-9662D7822874"}
 */
function onAction_zoom_movimientos(event) {
	var win = application.createWindow("Zoom",JSWindow.MODAL_DIALOG)	
	win.title= 'Detalle del Movimiento seleccionado'
	win.resizable = false
    win.show(forms.frm_movimientos_dtl_zoom)
}
