/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"0E49A9B4-C03B-4DCB-9D7E-5016BD130180"}
 */
var fr_usuario = null;


/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"F210F25A-E349-4B19-9A6B-DB652105CADE"}
 */
function onShow_carga_nombre(firstShow, event) {
	elements.etk_nombre.text = utils.stringTrim(tbl_movimientos_accesos_to_tbl_visitantes.vis_nombre) + ' ' + utils.stringTrim(tbl_movimientos_accesos_to_tbl_visitantes.vis_apellido)
	fr_usuario =  utils.stringTrim(foundset.usuario_nombre) + ' ' + utils.stringTrim(foundset.usuario_apellido)
}
