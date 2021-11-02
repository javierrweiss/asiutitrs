/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"DFACEAE0-09F1-48AB-AC30-C1F7F6B15EED"}
 */
function onShow_cargar_txt(firstShow, event) {
	elements.lbl_no_hay_datos.visible = false
	var filas = vis_tbc_cirugint_to_tbc_protoc8_txt.getSize()
	globals.gbl_txt_perfus = '';
	if (filas > 0){
		vis_tbc_cirugint_to_tbc_protoc8_txt.sort('protxt_protocolo asc, protxt_grupo asc, protxt_nro1 asc, protxt_secuen asc')
		vis_tbc_cirugint_to_tbc_protoc8_txt.setSelectedIndex(1)
		var encontro
		// buscar Enter en texto
		globals.gbl_txt_perfus = vis_tbc_cirugint_to_tbc_protoc8_txt.protxt_linea
		encontro = vis_tbc_cirugint_to_tbc_protoc8_txt.protxt_linea.indexOf("\n")
		if (encontro == -1){ 
			globals.gbl_txt_perfus += "\n"
	    }
		
		for (var j=2;j<filas+1;j++){
			vis_tbc_cirugint_to_tbc_protoc8_txt.setSelectedIndex(j)
			globals.gbl_txt_perfus += vis_tbc_cirugint_to_tbc_protoc8_txt.protxt_linea;
			encontro = vis_tbc_cirugint_to_tbc_protoc8_txt.protxt_linea.indexOf("\n")
			if (encontro == -1){ 
				globals.gbl_txt_perfus += "\n"
		    }
		}
	}else{
		elements.lbl_no_hay_datos.visible = true
	}
}
