/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"98673B92-0A51-4944-A551-DF884D22E672"}
 */
function onShow_inicializa_var(firstShow, event) {
forms.frm_movimientos_dtl.mov_fecha_ing = application.getServerTimeStamp()
forms.frm_movimientos_dtl.mov_hora_ing = application.getServerTimeStamp()
foundset.mov_nro_doc_ope = forms.psw_login.psw_usuario
globals.ok_grabo_mov = 0
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"8BC2CE83-BCAB-40DA-B597-1264BFD10A3D"}
 */
function onAction_grabar_mov(event) {
	globals.ok_grabo_mov = 0
	var msg_error = '' 
	if (foundset.mov_fecha_ing == null){
		msg_error += 'Falta ingresar Fecha de Ingreso' + '\n'
	}
	if (foundset.mov_hora_ing == null){
		msg_error += 'Falta ingresar Hora de Ingreso' + '\n'
	}
	if(foundset.mov_sector == null ){
		msg_error += 'Falta ingresar el Sector' + '\n'
	}
	if(foundset.mov_a_quien == null ){
		msg_error += 'Falta ingresar a Quien viene a Visitar'
	}
	if (foundset.mov_fecha_ing != null){
		if (foundset.mov_hora_ing != null){
		   if(foundset.mov_sector != null){
			   if(foundset.mov_a_quien != null){
	     		  databaseManager.saveData()
				  globals.ok_grabo_mov = 1
				  globals.gbl_fecha_ent = foundset.mov_fecha_ing
				  application.getWindow('Nuevo').hide()
	  	       }else{
				   	//metodo que ejecuta despues de cerrar mensaje
					
					globals.showWarningDialog(msg_error, null, 'Ok', null, null, null);
					elements.mov_a_quien.requestFocus()			   
			   }
  	       }else{
			   	//metodo que ejecuta despues de cerrar mensaje
				
				globals.showWarningDialog(msg_error, null, 'Ok', null, null, null);
				elements.mov_sector.requestFocus()			   
		   }
		}else{
			//metodo que ejecuta despues de cerrar mensaje
			
			globals.showWarningDialog(msg_error, null, 'Ok', null, null, null);
			elements.mov_hora_ing.requestFocus()
		}
	 
    }else{
    	//metodo que ejecuta despues de cerrar mensaje
		
		globals.showWarningDialog(msg_error, null, 'Ok', null, null, null);
		elements.mov_fecha_ing.requestFocus()
    }
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"C541B1AF-EF51-4272-9B33-A0D45C3CBBED"}
 */
function onAction_cancela_mov(event) {
	cancela_mov()
}

/**
 * @properties={typeid:24,uuid:"C4D2D962-BFDE-490E-A830-0536457FD172"}
 */
function sub_cancela_mov() {
	
	if (globals.core_dlg_buttonPressed == 'Si'){	
		globals.ok_grabo_mov = 1
		application.getWindow('Nuevo').hide()
		forms.frm_buscar.deshabilita_botones()
		foundset.deleteRecord()
		forms.frm_buscar.elements.fld_buscar.requestFocus()
	}else{
		globals.ok_grabo_mov = 0
	}
}

/**
 * @properties={typeid:24,uuid:"A7531168-5A21-469B-BC68-58EDD2D1E97D"}
 */
function cancela_mov() {
	var methd = 'forms.' + 'frm_movimientos_dtl' + '.sub_cancela_mov()'
	//muestra mensaje de "dialogo"
	globals.showWarningDialog('Esta seguro que desea continuar ?, se perderan los datos ingresados.', methd, 'No', 'Si', null, null);
}

/**
 * Handle changed data.
 *
 * @param {String} oldValue old value
 * @param {String} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"E99EA595-07DE-4CC1-9C5F-50D3555D1DFF"}
 * @AllowToRunInFind
 */
function onDataChange_mover_sector(oldValue, newValue, event) {
    var fs = databaseManager.getFoundSet("bases_auxiliares","tbl_acceso_sector")
	fs.find()
	fs['tbl_sector_desc'] = foundset.mov_sector
	fs.search()
	if (fs.getSize() > 0){
		fs.setSelectedIndex(1)
		globals.gbl_sector = fs['tbl_id_sector']
	}
	return true
}
