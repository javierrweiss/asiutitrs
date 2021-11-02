
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"D736987B-4E11-45B1-B12E-D4DBF5BA1E55"}
 */
function onAction_Practicas_Especializadas(event) {
	var win = application.createWindow("c",JSWindow.MODAL_DIALOG)
	win.title = "Ingrese Legajo del Médico Solicitante";
	win.setSize(565,257)
	globals.vSolomedicos=true
	globals.vLegajo=0
	globals.vLega=0
	globals.vOperador=''
	globals.vClave=0
	win.show(forms.PideLegajoMedicoEstudios)
	globals.vLegaMedicoSolicitante=globals.vLega
	globals.vTipoMedicoSolicitante=globals.vTipoOperador
	if (globals.vLegaMedicoSolicitante!=0){
		forms.Estudios_ingreso.elements.tabless_ingreso_estudios.visible=false
		forms.Estudios_ingreso.elements.btn_new.visible=false
		forms.Estudios_ingreso.elements.btn_grabapedido.visible=false
		//forms.Estudios_ingreso.elements.btn_cancelapedido.visible=false
		forms.Estudios_tab.elements.tabless_estudios.tabIndex=2
	}
}
