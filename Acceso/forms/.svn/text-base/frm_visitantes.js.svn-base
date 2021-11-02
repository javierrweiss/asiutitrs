/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"25ABE721-E4E1-47FA-AC82-5D4ECDB93804",variableType:4}
 */
var frm_secuencia = 0;

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"C0343344-E561-4AB8-9A45-EB80BF160E13"}
 */
function onAction_captura(event) {
	if(vis_nro_doc > 0){
		
		
		// desactiva el formulario
		currentcontroller.enabled = false
		var osname = application.getOSName()
		if (osname.charAt(0) == 'W') {
			plugins.file.deleteFile('c:\\temp\\foto.jpg')
		   application.executeProgram("rundll32.exe", ["url.dll,FileProtocolHandler", "c:\\temp\\FotoWebCam.jar"]);
		}else{
			plugins.file.deleteFile('//home//administrador//Documentos//temp//foto.jpg')
			application.executeProgram("xdg-open", ["//home//administrador//Documentos//temp//FotoWebCam.jar"]);	
		}
		//espera 10 segundos	
		application.sleep(10000)
		
		//activa el formulario
		currentcontroller.enabled = true
		if (osname.charAt(0) == 'W') {
  		    foundset.vis_imagen = plugins.images.getImage('c:\\temp\\foto.jpg')
		}else{
			foundset.vis_imagen = plugins.images.getImage('//home//administrador//Documentos//temp//foto.jpg')
		}
		elements.vis_imagen.visible = true
		elements.btn_grabar.requestFocus()
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"5B71A9B6-DCEB-4F76-93AD-3CF7869A514D"}
 */
function onAction_refresco(event) {
	var osname = application.getOSName()
	if (osname.charAt(0) == 'W') {
		    foundset.vis_imagen = plugins.images.getImage('c:\\temp\\foto.jpg')
	}else{
		foundset.vis_imagen = plugins.images.getImage('//home//administrador//Documentos//temp//foto.jpg')
	}
	elements.vis_imagen.visible = true
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"4CE66C5B-248F-4C48-85FC-4294D549E7E8"}
 */
function onAction_grabar(event) {
	var msg_error = '' 
	if (foundset.vis_apellido == null){
		msg_error += 'Falta ingresar el Apellido del Visitante' + '\n'
	}
	if (foundset.vis_nombre == null){
		msg_error += 'Falta ingresar el Nombre del Visitante' + '\n'
	}
	var osname = application.getOSName()
	if (osname.charAt(0) == 'W') {
		if(plugins.file.getFileSize('c:\\temp\\foto.jpg') < 1 ){
			msg_error += 'Falta ingresar la imagen del Visitante'
		}
	}else{
		if(plugins.file.getFileSize('//home//administrador//Documentos//temp//foto.jpg') > 1 ){
			msg_error += 'Falta ingresar la imagen del Visitante'
		}
	}
	
	if (foundset.vis_apellido != null){
		if (foundset.vis_nombre != null){
			if (osname.charAt(0) == 'W') {
		        if (plugins.file.getFileSize('c:\\temp\\foto.jpg') > 0 ){
			        foundset.vis_imagen = plugins.images.getImage('c:\\temp\\foto.jpg')
			  
		            databaseManager.saveData()
			        forms.frm_buscar.elements.tab_visitas.readOnly = true 
			        var win = application.createWindow("Nuevo",JSWindow.MODAL_DIALOG)	
			        win.title= 'Nuevo Ingreso'
		            win.show(forms.frm_tab_movimientos) 
			        forms.frm_buscar.deshabilita_botones()
	                forms.frm_buscar.elements.fld_buscar.requestFocus()
			  
		        }else{
				    //metodo que ejecuta despues de cerrar mensaje
				
				    globals.showWarningDialog(msg_error, null, 'Ok', null, null, null);
				    elements.btn_captura.requestFocus()
		        }
		    }else{
		    	if (plugins.file.getFileSize('//home//administrador//Documentos//temp//foto.jpg') > 0 ){
			        foundset.vis_imagen = plugins.images.getImage('//home//administrador//Documentos//temp//foto.jpg')
			  
		            databaseManager.saveData()
			        forms.frm_buscar.elements.tab_visitas.readOnly = true 
			        var win2 = application.createWindow("Nuevo",JSWindow.MODAL_DIALOG)	
			        win2.title= 'Nuevo Ingreso'
		            win2.show(forms.frm_tab_movimientos) 
			        forms.frm_buscar.deshabilita_botones()
	                forms.frm_buscar.elements.fld_buscar.requestFocus()
		    	
		        }else{
				    //metodo que ejecuta despues de cerrar mensaje
				
				    globals.showWarningDialog(msg_error, null, 'Ok', null, null, null);
				    elements.btn_captura.requestFocus()
		        }
		    }
	    }else{
			//metodo que ejecuta despues de cerrar mensaje
			
			globals.showWarningDialog(msg_error, null, 'Ok', null, null, null);
			elements.vis_nombre.requestFocus()
		}
	 
    }else{
    	//metodo que ejecuta despues de cerrar mensaje
		
		globals.showWarningDialog(msg_error, null, 'Ok', null, null, null);
		elements.vis_apellido.requestFocus()
    }
	 
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"42820D88-89C2-4B7F-9FBC-FDBBFA2A0656"}
 */
function onAction_cancela(event) {
	var methd = 'forms.' + 'frm_visitantes' + '.sub_cancela()'
	//muestra mensaje de "dialogo"
	globals.showWarningDialog('Esta seguro que desea continuar ?, se perderan los datos ingresados.', methd, 'No', 'Si', null, null);
}

/**
 * @properties={typeid:24,uuid:"5C9F3361-E4FD-4AD6-AE5D-0BC34E1B3AC4"}
 */
function sub_cancela() {
   if (globals.core_dlg_buttonPressed == 'Si'){	
	forms.frm_buscar.deshabilita_botones()
	foundset.deleteRecord()
	forms.frm_buscar.elements.fld_buscar.requestFocus()
   }
}

/**
 * @properties={typeid:24,uuid:"6DE5F0E2-1B99-408E-8122-5E3C90337A8F"}
 */
function secuencia_foco() {
	//para simular el Enter proximo campo
     var tab_sec = controller.getTabSequence()
	
	if (tab_sec.length > 1){
		frm_secuencia++ 
		controller.focusField(tab_sec[frm_secuencia],false)
	} 
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"1B6623B1-9E1E-42D8-B25F-FD32FA62C065"}
 */
function onAction_apellido_enter(event) {
	//para simular el Enter proximo campo
   frm_secuencia = 1
   secuencia_foco()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"782524EC-0C04-4215-9171-95EA83D6CEA6"}
 */
function onAction_nombre_enter(event) {
	//para simular el Enter proximo campo
	frm_secuencia = 2
	secuencia_foco()
}
