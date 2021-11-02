/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"CA45C1BD-F1BF-4BDA-AA18-55CB448440BC"}
 */
function onShow_inicializa_var(firstShow, event) {
forms.frm_movimientos_dtl_sal.mov_fecha_egr = application.getServerTimeStamp()
forms.frm_movimientos_dtl_sal.mov_hora_egr = application.getServerTimeStamp()
globals.ok_grabo_mov = 0	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"87F55FDF-B873-4408-848B-D72127E7414B"}
 */
function onAction_grabar_mov(event) {
	globals.ok_grabo_mov = 0
	var msg_error = '' 
	if (foundset.mov_fecha_egr == null){
		msg_error += 'Falta ingresar Fecha de Egreso' + '\n'
	}
	if (foundset.mov_hora_egr == null){
		msg_error += 'Falta ingresar Hora de Egreso' + '\n'
	}
	if (foundset.mov_fecha_egr != null){
		if (foundset.mov_hora_egr != null){
		    databaseManager.saveData()
			globals.ok_grabo_mov = 1
			globals.gbl_fecha_sal = foundset.mov_fecha_egr
			application.getWindow('Egresos').hide()
	  	}else{
		  	//metodo que ejecuta despues de cerrar mensaje
			
		    globals.showWarningDialog(msg_error, null, 'Ok', null, null, null);
			elements.mov_hora_egr.requestFocus()
		}
	 
    }else{
    	//metodo que ejecuta despues de cerrar mensaje
		
		globals.showWarningDialog(msg_error, null, 'Ok', null, null, null);
		elements.mov_fecha_egr.requestFocus()
    }
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"7F9429E0-1E79-40C5-8F47-975F864A14C0"}
 */
function onAction_cancela_mov(event) {
	cancela_mov()
}

/**
 * @properties={typeid:24,uuid:"CEBC2991-8CC3-4044-9646-57622031C270"}
 */
function sub_cancela_mov() {
	
	if (globals.core_dlg_buttonPressed == 'Si'){	
		globals.ok_grabo_mov = 1
		application.getWindow('Egresos').hide()
		forms.frm_buscar.deshabilita_botones()
		foundset.mov_fecha_egr = null
		foundset.mov_hora_egr = null
		forms.frm_buscar.elements.fld_buscar.requestFocus()
	}else{
		globals.ok_grabo_mov = 0
	}
}

/**
 * @properties={typeid:24,uuid:"DA322181-D36B-4712-B119-3F934A936A41"}
 */
function cancela_mov() {
	var methd = 'forms.' + 'frm_movimientos_dtl_sal' + '.sub_cancela_mov()'
	//muestra mensaje de "dialogo"
	globals.showWarningDialog('Esta seguro que desea continuar ?, se perderan los datos ingresados.', methd, 'No', 'Si', null, null);
}
