/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"4A3C62EE-9747-4332-9BD0-CD2CBE4C998F"}
 */
function onAction_agrega(event) {
	globals.vAltaEmpresa=true
	globals.proem_empres=0
	forms.frm_profmeem_dtl.fDescripcionEmpresa=''
	forms.frm_tab_empresas_que_factura.elements.tabless.tabIndex=2
}
