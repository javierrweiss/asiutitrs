/**
 * 
 * @param firstShow
 * @param event
 *
 * @properties={typeid:24,uuid:"7E5DDDB7-66FD-451C-873D-C4E969F06C9A"}
 */
function onShow_cargar_txt(firstShow, event) {
	elements.lbl_no_hay_datos.visible = false
	var filas = tbc_anatinf_to_tbc_anatinf.getSize()
	globals.gbl_txt_observaciones = '';
	if (filas > 0){
		//tbc_anatinf_to_tbc_anatinf.sort('apobnrosolic asc, apobtiponome asc, apobcodnome asc, apobsecuencia asc')
		tbc_anatinf_to_tbc_anatinf.setSelectedIndex(1)
		var encontro
		// buscar Enter en texto
		globals.gbl_txt_observaciones = tbc_anatinf_to_tbc_anatinf.anatinfdescr
		encontro = tbc_anatinf_to_tbc_anatinf.anatinfdescr.indexOf("\n")
		if (encontro == -1){ 
			globals.gbl_txt_observaciones += "\n"
	    }
		
		for (var j=2;j<filas+1;j++){
			tbc_anatinf_to_tbc_anatinf.setSelectedIndex(j)
			globals.gbl_txt_observaciones += tbc_anatinf_to_tbc_anatinf.anatinfdescr;
			encontro = tbc_anatinf_to_tbc_anatinf.anatinfdescr.indexOf("\n")
			if (encontro == -1){ 
				globals.gbl_txt_observaciones += "\n"
		    }
		}	
	}else{
		elements.lbl_no_hay_datos.visible = true
	}
}
