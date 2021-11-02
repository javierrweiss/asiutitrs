/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"AEDBCE1C-01DB-4F3B-946C-AEB9F532A8D9"}
 */
function onShow_cargar_txt(firstShow, event) {
	elements.lbl_no_hay_datos.visible = false
	var filas = vis_tbc_cirugint_to_tbc_protoc3_txt.getSize()
	globals.gbl_txt_protocolo = '';
	if (filas > 0){
		vis_tbc_cirugint_to_tbc_protoc3_txt.sort('protxt_protocolo asc, protxt_grupo asc, protxt_nro1 asc, protxt_secuen asc')
		vis_tbc_cirugint_to_tbc_protoc3_txt.setSelectedIndex(1)
		var encontro
		// buscar Enter en texto
		globals.gbl_txt_protocolo = vis_tbc_cirugint_to_tbc_protoc3_txt.protxt_linea
		encontro = vis_tbc_cirugint_to_tbc_protoc3_txt.protxt_linea.indexOf("\n")
		if (encontro == -1){ 
			globals.gbl_txt_protocolo += "\n"
	    }
		
		for (var j=2;j<filas+1;j++){
			vis_tbc_cirugint_to_tbc_protoc3_txt.setSelectedIndex(j)
			globals.gbl_txt_protocolo += vis_tbc_cirugint_to_tbc_protoc3_txt.protxt_linea;
			encontro = vis_tbc_cirugint_to_tbc_protoc3_txt.protxt_linea.indexOf("\n")
			if (encontro == -1){ 
				globals.gbl_txt_protocolo += "\n"
		    }
		}
	}else{
		elements.lbl_no_hay_datos.visible = true
	}
}
