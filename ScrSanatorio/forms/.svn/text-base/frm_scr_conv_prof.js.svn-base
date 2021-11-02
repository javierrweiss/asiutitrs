/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"99A55DC5-FC64-4E39-BE0C-72BEEC43086A"}
 */
function onShow_foco(firstShow, event) {
	controller.focusFirstField()
	elements.codigo.requestFocus()  
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"90CF14C8-3364-4A27-81D4-F7B1E1D23006"}
 */
function onAction_captura(event) {
	globals.gbl_selec    = foundset.getSelectedIndex()
	globals.gbl_profesional     = foundset.conv_profesional	
	globals.gbl_especialidad    = foundset.conv_especialidad
	globals.gbl_cobertura       = foundset.conv_obra_social
	globals.gbl_grupo_nom       = foundset.conv_grupo_nom
	globals.gbl_nomencla        = foundset.conv_cod_nom
	globals.gbl_con_profesional = foundset.conv_profesional	
	globals.gbl_con_especial    = foundset.conv_especialidad
	globals.gbl_con_cobertura   = foundset.conv_obra_social
	globals.gbl_con_grupo_nom   = foundset.conv_grupo_nom
	globals.gbl_con_nomencla    = foundset.conv_cod_nom
	globals.gbl_fecha_desde   = foundset.conv_fecha_desde
	application.getWindow('Busca_conv_prof').hide();
}
