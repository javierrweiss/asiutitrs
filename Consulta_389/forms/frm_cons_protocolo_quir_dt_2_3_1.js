/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"C827F417-D0F7-436C-B60B-5257C65ADA11"}
 */
function onShow_cargar_txt(firstShow, event) {
	elements.lbl_no_hay_datos.visible = false
	var filas = vis_tbc_cirugint_to_tbc_protoc1_txt_2.getSize()
	globals.gbl_txt_protocolo = '';
	if (filas > 0){
		//vis_tbc_cirugint_to_tbc_protoc1_txt_2.sort('protxt_protocolo asc, protxt_grupo asc')
		//vis_tbc_cirugint_to_tbc_protoc1_txt_2.setSelectedIndex(1)		
		globals.gbl_txt_protocolo = vis_tbc_cirugint_to_tbc_protoc1_txt_2.texto		
	}else{
		elements.lbl_no_hay_datos.visible = true
	}
}
