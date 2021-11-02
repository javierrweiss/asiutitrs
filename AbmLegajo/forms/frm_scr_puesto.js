/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"04BC4473-1A0F-4F7B-86C9-152D4FDA2D6A"}
 * @AllowToRunInFind
 */
function onAction_selection(event) {
	globals.per_84 = foundset.pto1
	databaseManager.refreshRecordFromDatabase(vsector_to_tbc_sector,-1)
	var fs = databaseManager.getFoundSet("rrhh","tbc_s_estruct")
	fs.find()
	fs['sestr1']=globals.per_18
	fs['sestr2']=3
	fs['sestr3']=globals.per_84
	fs['sestr4']=0
	fs.search()
	if(fs.getSize()>0){
		if(per_84_to_tbc_puesto.pto3==0){
			globals.per_10=per_84_to_tbc_puesto.pto2
			globals.per_11=per_84_to_tbc_puesto.pto4
			globals.per_19=vsector_to_tbc_sector.sector18
			if(globals.per_19!=4&&globals.per_19!=10){
				if(vsector_to_tbc_sector.sector32==0){
					plugins.dialogs.showErrorDialog("Error en Ingreso de Puesto","Falta el centro de Costo para el Sector asignado al Puesto."+'\n'+'Asigne primero el Centro de Costo para poder continuar.')
					globals.per_84=0
					forms.frm_datos_liquidacion.elements.per_84.requestFocus()
				}else{
					//forms.frm_datos_liquidacion.elements.per_15.requestFocus()
					forms.frm_datos_liquidacion.elements.per_tipo_personal.requestFocus()
				}
			}else{
				//forms.frm_datos_liquidacion.elements.per_15.requestFocus()
				forms.frm_datos_liquidacion.elements.per_tipo_personal.requestFocus()
			}
		}else{
			if(per_84_to_tbc_puesto.pto3==globals.per_1){
				globals.per_10=per_84_to_tbc_puesto.pto2
				globals.per_11=per_84_to_tbc_puesto.pto4
				globals.per_19=vsector_to_tbc_sector.sector18
				if(globals.per_19!=4&&globals.per_19!=10){
					if(vsector_to_tbc_sector.sector32==0){
						plugins.dialogs.showErrorDialog("Error en Ingreso de Puesto","Falta el centro de Costo para el Sector asignado al Puesto."+'\n'+'Asigne primero el Centro de Costo para poder continuar.')
						globals.per_84=0
						forms.frm_datos_liquidacion.elements.per_84.requestFocus()
					}else{
						//forms.frm_datos_liquidacion.elements.per_15.requestFocus()
						forms.frm_datos_liquidacion.elements.per_tipo_personal.requestFocus()
					}
				}else{
					//forms.frm_datos_liquidacion.elements.per_15.requestFocus()
					forms.frm_datos_liquidacion.elements.per_tipo_personal.requestFocus()
				}
			}else{
				plugins.dialogs.showErrorDialog("Error en Ingreso de Puesto","El Puesto está ocupado con otro Legajo")
				globals.per_84=0
				forms.frm_datos_liquidacion.elements.per_84.requestFocus()
			}
		}
	}else{
		plugins.dialogs.showErrorDialog("Error en Ingreso de Puesto","No hay Estructura para este Puesto")
		globals.per_84=0
		forms.frm_datos_liquidacion.elements.per_84.requestFocus()
	}
	
	var name=application.getActiveWindow()
	name.getName()
	var $win=application.getWindow(name.getName())
	if($win!=null){
		$win.hide()
		$win.destroy()
	}
}
