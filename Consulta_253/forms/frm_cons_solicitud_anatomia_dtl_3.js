
/**
 * 
 * @param firstShow
 * @param event
 *
 * @properties={typeid:24,uuid:"1BC437FC-BE2A-4436-88BB-9DF889B0A7C1"}
 */
function onShow_cargar_txt(firstShow, event) {
	globals.gbl_tip_nom = 0	
	globals.gbl_cod_nom = 0
	elements.lbl_no_hay_datos.visible = false
	var filas = aux_253_to_tbc_anatpaob.getSize()
	globals.gbl_txt_observaciones = '';
	if (filas > 0){
		aux_253_to_tbc_anatpaob.sort('apobnrosolic asc, apobtiponome asc, apobcodnome asc, apobsecuencia asc')
		aux_253_to_tbc_anatpaob.setSelectedIndex(1)
		var encontro
		// buscar Enter en texto
		globals.gbl_txt_observaciones = aux_253_to_tbc_anatpaob.apoblinea
		encontro = aux_253_to_tbc_anatpaob.apoblinea.indexOf("\n")
		if (encontro == -1){ 
			globals.gbl_txt_observaciones += "\n"
	    }
		
		for (var j=2;j<filas+1;j++){
			aux_253_to_tbc_anatpaob.setSelectedIndex(j)
			globals.gbl_txt_observaciones += aux_253_to_tbc_anatpaob.apoblinea;
			encontro = aux_253_to_tbc_anatpaob.apoblinea.indexOf("\n")
			if (encontro == -1){ 
				globals.gbl_txt_observaciones += "\n"
		    }
		}	
	}else{
		elements.lbl_no_hay_datos.visible = true
	}
}
