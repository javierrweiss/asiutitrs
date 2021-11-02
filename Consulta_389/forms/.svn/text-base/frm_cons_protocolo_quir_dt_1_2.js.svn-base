/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"97CF731F-D94D-4A18-AFBF-D558F565E0EE"}
 */
function onShow_cargar_txt(firstShow, event) {
	elements.lbl_no_hay_datos.visible = false
	var filas = vis_tbc_cirugint_to_tbc_aneste_txt.getSize()
	globals.gbl_txt_evaluacion = '';
	if (filas > 0){
		vis_tbc_cirugint_to_tbc_aneste_txt.sort('anestxt_protocolo asc, anestxt_grupo asc, anestxt_nro1 asc, anestxt_secuen asc')
		vis_tbc_cirugint_to_tbc_aneste_txt.setSelectedIndex(1)
		var encontro
		// buscar Enter en texto
		globals.gbl_txt_evaluacion = vis_tbc_cirugint_to_tbc_aneste_txt.anestxt_linea
		encontro = vis_tbc_cirugint_to_tbc_aneste_txt.anestxt_linea.indexOf("\n")
		if (encontro == -1){ 
			globals.gbl_txt_evaluacion += "\n"
	    }
		
		for (var j=2;j<filas+1;j++){
			vis_tbc_cirugint_to_tbc_aneste_txt.setSelectedIndex(j)
			globals.gbl_txt_evaluacion += vis_tbc_cirugint_to_tbc_aneste_txt.anestxt_linea;
			encontro = vis_tbc_cirugint_to_tbc_aneste_txt.anestxt_linea.indexOf("\n")
			if (encontro == -1){ 
				globals.gbl_txt_evaluacion += "\n"
		    }
		}	
	}else{
		elements.lbl_no_hay_datos.visible = true
	}
}
