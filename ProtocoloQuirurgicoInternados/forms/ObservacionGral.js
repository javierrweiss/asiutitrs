/**
 * @properties={typeid:24,uuid:"32A91796-CE1C-4FCA-BD34-4507A183F20E"}
 */
function onAction_confirma(event) {
	if(globals.anatobgral!=''){
		forms.Ingreso_anatomia_dtl.borrar_TextoAnatomiaObs(globals.vNroSolicitud, 0, 0)
		forms.Ingreso_anatomia_dtl.grabar_TextoAnatomiaObs(globals.vNroSolicitud, 0, globals.anatobgral,0)
		var name=application.getActiveWindow()
		name.getName()
		var $win=application.getWindow(name.getName())
		if($win!=null){
			$win.hide()
			$win.destroy()
		}
		//application.closeAllWindows()
	}else{
		forms.ObservacionGral.elements.tabless_0.tabIndex=1
	}
}

/**
 * @properties={typeid:24,uuid:"DC5E6A4B-A68E-4680-A6BD-90771C031D48"}
 */
function onAction_cancela(event) {
	globals.anatobgral=''
	vs_to_tbc_anatpaca.apca_obsgral=0
	var name=application.getActiveWindow()
	name.getName()
	var $win=application.getWindow(name.getName())
	if($win!=null){
		$win.hide()
		$win.destroy()
	}
	//application.closeAllWindows()
}
