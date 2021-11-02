/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"5EDAEC85-640D-40F9-8815-B2444B1BB18F"}
 */
function onShow_cargar_txt(firstShow, event) {
	elements.lbl_no_hay_datos.visible = false
	var filas = vis_tbc_cirugint_to_tbc_protoc5_txt_2.getSize()
	globals.gbl_txt_monito = '';
	if (filas > 0){
		//vis_tbc_cirugint_to_tbc_protoc5_txt.sort('protxt_protocolo asc, protxt_grupo asc, protxt_nro1 asc, protxt_secuen asc')
		//vis_tbc_cirugint_to_tbc_protoc5_txt.setSelectedIndex(1)		
		globals.gbl_txt_monito = vis_tbc_cirugint_to_tbc_protoc5_txt_2.texto		
	}else{
		elements.lbl_no_hay_datos.visible = true
	}
}
