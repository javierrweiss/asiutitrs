/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"7A2991ED-5D52-4199-B690-8E60CD54E192"}
 */
function onAction_buscar(event) {
	// identifica si el campo es numérico o alfanumerico
	var largo = globals.gbl_buscar.length;
	var esnumero = true;
	for (var i= 0;i<largo && esnumero == true; i++){
		if (globals.gbl_buscar.charCodeAt(i)< 48 || globals.gbl_buscar.charCodeAt(i) > 57){
			esnumero = false
		}
	}
	
    if (esnumero){
    	if(largo>8){
    		//muestra mensaje de "dialogo"
			globals.showErrorDialog('Error en Nro. de Documento, Ingrese un número correcto', null, 'Ok',null, null, null);
			deshabilita_botones()
	   	}else{
    	    globals.gbl_dni = utils.stringToNumber(globals.gbl_buscar.valueOf());
    	    if (globals.gbl_dni < 1 ){
    	    	//muestra mensaje de "dialogo"
    			globals.showErrorDialog('Error en Nro. de Documento, Ingrese un número correcto', null, 'Ok',null, null, null);
    			deshabilita_botones()
    	   	}else{
    	      	if (gbl_dni_to_visitas.getSize() < 1){
			   	   //metodo que ejecuta despues de cerrar mensaje
				   var methd = 'forms.' + 'frm_buscar' + '.sub_cargar_nuevo()'
				   //muestra mensaje de "dialogo"
				   globals.showWarningDialog('Registro Inexistente, Ingresa un Visistante Nuevo ? ', methd, 'No', 'Si', null, null);
			    }else {
				   deshabilita_botones()
				   elements.btn_imprimir.enabled = true
				   elements.btn_agregar.enabled = true
				   elements.btn_editar.enabled = true
				   elements.tab_movimientos.enabled = true			    }
			}
		
	   	}
    }
    else{
    	globals.gbl_indice = 1
       	var win = application.createWindow("Busca",JSWindow.MODAL_DIALOG)	
		win.title= 'Buscar Visitante'
		win.resizable = false
	    win.show(forms.frm_tab_visitantes)
		if (forms.frm_visitantes.foundset.vis_nro_doc > 0){
		   elements.btn_imprimir.enabled = true
		   elements.btn_agregar.enabled = true
		   elements.btn_editar.enabled = true
		   elements.tab_movimientos.enabled = true
		   globals.gbl_buscar = forms.frm_visitantes.foundset.vis_nro_doc.toString()
		}else{
			deshabilita_botones()
		}
    }		
}

/**
 * @properties={typeid:24,uuid:"B3919C44-717F-44F1-B22A-C80193AB3CCC"}
 */
function sub_cargar_nuevo() {
	if(globals.core_dlg_buttonPressed == 'Si'){
		forms.frm_visitantes.foundset.newRecord()
		forms.frm_visitantes.foundset.vis_nro_doc = globals.gbl_dni
		elements.tab_visitas.readOnly = false
		elements.tab_visitas.tabIndex = 1
		elements.btn_buscar.enabled = false
		elements.fld_buscar.enabled = false
		elements.btn_imprimir.enabled = false
		forms.frm_visitantes.elements.vis_tip_doc.requestFocus()
		forms.frm_visitantes.elements.btn_captura.enabled = true
		forms.frm_visitantes.elements.btn_refresco.enabled = true
		forms.frm_visitantes.elements.btn_grabar.enabled = true
		forms.frm_visitantes.elements.btn_cancelar.enabled = true
		var osname = application.getOSName()
		if (osname.charAt(0) == 'W') {
		   forms.frm_visitantes.foundset.vis_imagen = plugins.images.getImage("c:\\temp\\fr_sin_foto_H.png")
		}else{
			forms.frm_visitantes.foundset.vis_imagen = plugins.images.getImage("//home//administrador//Documentos//temp//fr_sin_foto_H.png")
	    }
		forms.frm_visitantes.foundset.vis_tip_doc = 1
		forms.frm_visitantes.foundset.vis_fec_alta = application.getServerTimeStamp()
		}
	//
	elements.btn_agregar.enabled = false
	elements.btn_editar.enabled = false
	
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"B0B7BDF0-285E-42B0-937E-259C292A01CC"}
 */
function _deshabilitar_botones(firstShow, event) {

	deshabilita_botones()
	
	// esto es para borrar la barra de menu
	plugins.window.getMenuBar().setVisible(false)
    plugins.window.setToolBarAreaVisible(false)
    
    var names1 = plugins.window.getToolbarNames();
    for (var i = 0 ; i < names1.length ; i++) {
         plugins.window.removeToolBar(names1[i])
    }    
    plugins.window.setFullScreen(false)
    plugins.window.getMenuBar().setVisible(false)
    plugins.window.setToolBarAreaVisible(false)
	plugins.window.setStatusBarVisible(false);
    // fin borra barra menu

    // Abre Login	
    var win = application.createWindow("Psw",JSWindow.MODAL_DIALOG)	
	win.title= 'Login'
	win.resizable = false
	solutionModel.removeForm
	win.show(forms.psw_login)
	application.getWindow('Psw').hide()
	// cierra login
	
	controller.focusFirstField()
	globals.gbl_buscar = ''
	
}

/**
 * @properties={typeid:24,uuid:"BC5D8A3D-8F2D-4BE8-8A63-CC4B6789EDDE"}
 */
function deshabilita_botones() {
	plugins.file.deleteFile('c:\\temp\\foto.jpg')
	elements.btn_imprimir.enabled = true
	elements.btn_agregar.enabled = false
	elements.btn_editar.enabled = false
	forms.frm_visitantes.elements.btn_captura.enabled = false
	forms.frm_visitantes.elements.btn_refresco.enabled = false
	forms.frm_visitantes.elements.btn_grabar.enabled = false
	forms.frm_visitantes.elements.btn_cancelar.enabled = false
	elements.tab_visitas.readOnly = true
	elements.tab_movimientos.enabled = false
	elements.btn_buscar.enabled = true
	elements.fld_buscar.enabled = true
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"EEE73946-688B-4F5E-B31A-4163CCCA3EB4"}
 */
function onAction_cargar_movimientos(event) {
	var query = "select * from tbl_movimientos_accesos where mov_nro_doc = ? and mov_fecha_egr is null"
	var args = new Array ()
	args[0] = globals.gbl_dni
	
	var vdataset = new Array () 
    vdataset = databaseManager.getDataSetByQuery("bases_auxiliares",query,args,5)
	if (vdataset.getMaxRowIndex() > 0){
		globals.showWarningDialog('Existen Movimientos sin Fecha de Egreso, primero hay que dar egreso a la visita.', null, 'Ok', null, null, null);
	}else{
		var win = application.createWindow("Nuevo",JSWindow.MODAL_DIALOG)	
		win.title= 'Nuevo Ingreso'
		win.resizable = false
	    win.show(forms.frm_tab_movimientos)
   	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"11009405-1567-4B31-A9B9-A12868408DA6"}
 */
function onAction_cargar_salidas(event) {
	
	if (globals.gbl_fecha_sal !== null){
		globals.showErrorDialog('Este Movimientos ya tiene cargada la salida.', null, 'Ok', null, null, null);
	}else{
		if (globals.gbl_fecha_ent !== null){
	    	var win = application.createWindow("Egresos",JSWindow.MODAL_DIALOG)	
		    win.title= 'Egresos'
		    win.resizable = false
	        win.show(forms.frm_tab_movimientos_sal)
		}
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"09DBD252-9C2D-4469-BE6F-F3C7B7F023CF"}
 */
function onAction_buscar_dni(event) {
	var largo = globals.gbl_buscar.length;
	var esnumero = true;
	for (var i= 0;i<largo && esnumero == true; i++){
		if (globals.gbl_buscar.charCodeAt(i)< 48 || globals.gbl_buscar.charCodeAt(i) > 57){
			esnumero = false
		}
	}
	if (esnumero){
		globals.gbl_dni = utils.stringToNumber(globals.gbl_buscar.valueOf())
		globals.gbl_indice = 2
	}else{
		globals.gbl_indice = 1
	}
	var win = application.createWindow("Busca",JSWindow.MODAL_DIALOG)	
	win.title= 'Buscar Visitante'
	win.resizable = false
    win.show(forms.frm_tab_visitantes)
	if (forms.frm_visitantes.foundset.vis_nro_doc > 0){
	    elements.btn_imprimir.enabled = true
	    elements.btn_agregar.enabled = true
	    elements.btn_editar.enabled = true
	    elements.tab_movimientos.enabled = true
		globals.gbl_buscar = forms.frm_visitantes.foundset.vis_nro_doc.toString() 
	}else{
		deshabilita_botones()
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"AD465886-E17D-491F-9075-C8BBEF500E33"}
 */
function onAction_bt_consulta(event) {
	globals.gbl_con_tipo_consulta = 0
	var win = application.createWindow("Consulta",JSWindow.MODAL_DIALOG)	
	win.title= 'Consultas'
	win.resizable = false
    win.show(forms.frm_consultas)
	globals.gbl_buscar = ''
	globals.gbl_dni = 0
	elements.btn_agregar.enabled = false
    elements.btn_editar.enabled = false
	
}
