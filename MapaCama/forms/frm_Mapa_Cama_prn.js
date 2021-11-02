/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"964F4592-D3A1-4A31-8AC2-85FB290DF061",variableType:8}
 */
var frm_error = 0;
 
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"D522C016-328C-4AC3-A733-7F5D93F66172"}
 */
var frm_obra_nombre = '';

/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"70C9E4C6-7FDF-43B6-9093-8430BCE13A1F"}
 */
function onLoad_inicio(event) { 
	
	globals.gbl_habitacion = null
	globals.gbl_cama = ''
	globals.gbl_habitacion_td = 1 
	globals.gbl_cama_td = 1
	globals.gbl_con_cobertura = ''
	poner_cero()
	elements._gbl_pac_alta.enabled = true
	elements._gbl_pac_pedi.enabled = true
	elements._gbl_pac_pase.enabled = true
	elements._gbl_pac_oxi.enabled = true
	elements._gbl_pac_aislado.enabled = true
	elements._gbl_pac_der.enabled = true
	elements._gbl_pac_noc.enabled = true
	elements._gbl_pac_resp.enabled = true
	elements._gbl_pac_reserva.enabled = true
	elements._gbl_pac_obra.enabled = true
	//elements._gbl_pac_supn.enabled = true
	elements._gbl_pac_pan.enabled = true
	elements._gbl_pac_b_epi.enabled = true
	//elements._gbl_pac_esp_cam.enabled = true
	elements._gbl_pac_egr_epi.enabled = true
	elements.lbl_titulo.text = ''
	
	// control del elemento por perfil	    		
	var $form = controller.getName()
	globals.controlar_elementos($form)	
	// fin control del elemento por perfil
	
    elements.btn_imprimir.enabled = false 
    elements.btn_exportar_excel.enabled = false
    elements.btn_exportar_pdf.enabled = false
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"2D6D68F9-6A47-40D0-AF76-81DCAEBE8587"}
 */
function onAction_procesar(event) {
	frm_error = 0
	onAction_buscar_obra(event)
	
	if (frm_error == 0){
		elements.lbl_procesando2.visible = true
	    application.updateUI()
	    if (globals.gbl_pac_esp_cam == 1){
		    globals.gbl_habitacion = 701
	    }else{
		    if (globals.gbl_pac_egr_epi == 1){
			    globals.gbl_habitacion = 800
		    }
	    }
	    globals.gbl_pac_obra = utils.stringToNumber(globals.gbl_con_cobertura)
	    globals.gbl_encontro = 0  
	    forms.Mapa_Cama_todos.Carga_aux(1,globals.gbl_habitacion,globals.gbl_habitacion_td,globals.gbl_cama,globals.gbl_cama_td,globals.gbl_hab_dis, globals.gbl_hab_dial, 
		                                globals.gbl_pac_alta, globals.gbl_pac_amb, globals.gbl_pac_pedi, globals.gbl_pac_pase, globals.gbl_pac_oxi, globals.gbl_pac_der, 
			    						globals.gbl_pac_noc , globals.gbl_pac_resp, globals.gbl_pac_supn, globals.gbl_pac_pan, globals.gbl_pac_b_epi, globals.gbl_pac_esp_cam,
				    					globals.gbl_pac_egr_epi, globals.gbl_pac_aislado, globals.gbl_pac_reserva, globals.gbl_pac_obra,'',0 )
	    elements.lbl_procesando2.visible = false
	    globals.gbl_habitacion = null
	    if (globals.gbl_encontro > 0){
		    /*elements.btn_imprimir.enabled = true
		      elements.btn_exportar_excel.enabled = true
		      elements.btn_exportar_pdf.enabled = true
		    */
	    	
		    // control del elemento por perfil	    		
	    	var $form = controller.getName()
	    	globals.controlar_elementos($form)	
	    	// fin control del elemento por perfil
        }else{
	        elements.btn_imprimir.enabled = false 
	        elements.btn_exportar_excel.enabled = false
		    elements.btn_exportar_pdf.enabled = false
        }
    }
}


/**
 * @properties={typeid:24,uuid:"245A490A-D2BE-4355-8B6A-08611278C39A"}
 */
function poner_cero(){
	globals.gbl_hab_dis = 0
	globals.gbl_hab_dial = 0
	globals.gbl_pac_alta = '1'
	globals.gbl_pac_amb = 0
	globals.gbl_pac_pedi = 0
	globals.gbl_pac_pase = 0
	globals.gbl_pac_oxi = 0
	globals.gbl_pac_aislado = 0
	globals.gbl_pac_der = 0
	globals.gbl_pac_noc = 0
	globals.gbl_pac_resp = 0
	globals.gbl_pac_reserva = 0
	globals.gbl_pac_obra = 0
	globals.gbl_pac_supn = 0
	globals.gbl_pac_pan = 0
	globals.gbl_pac_b_epi = 0
	globals.gbl_pac_esp_cam = 0
	globals.gbl_pac_egr_epi = 0
	
	frm_obra_nombre = 'Todas'
	elements._gbl_pac_amb.enabled = false
    elements.btn_imprimir.enabled = false 
    elements.btn_exportar_excel.enabled = false
	elements.btn_exportar_pdf.enabled = false
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"166D9CAA-1952-4BA7-AD81-007DD0637827"}
 */
function onAction_alta(event) {
	if (globals.gbl_pac_alta == 1){
	    elements._gbl_pac_amb.enabled = false
		elements.lbl_titulo.text = ''
    }else{
    	var aux = globals.gbl_pac_alta
    	poner_cero()
    	globals.gbl_pac_alta = aux
    	elements._gbl_pac_amb.enabled = true
    	globals.gbl_con_cobertura = ''
		elements.lbl_titulo.text = 'Pacientes con Alta Médica ' + 
		         application.getValueListItems('vl_alta_medica').getValue(utils.stringToNumber(globals.gbl_pac_alta),1)   	
    }
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"EB79FFA6-27D8-443B-9C56-4E63ABF5BC20"}
 */
function onAction_pedi(event) {
	if (globals.gbl_pac_pedi == 1){
		poner_cero()
	    globals.gbl_pac_pedi = 1
	    globals.gbl_con_cobertura = ''
		elements.lbl_titulo.text = 'Pacientes Pediátricos'
    }else{
    	elements.lbl_titulo.text = ''
    }
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"346A9543-4C5B-48AF-9696-914BFA9E6BF9"}
 */
function onAction_pase(event) {
	if (globals.gbl_pac_pase == 1){
		poner_cero()
	    globals.gbl_pac_pase = 1
	    globals.gbl_con_cobertura = ''
		elements.lbl_titulo.text = 'Pacientes con pedido de Pase'
    }else{
    	elements.lbl_titulo.text = ''
    }
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"0C46548A-43BC-4807-83C1-E43CDD76C14E"}
 */
function onAction_oxi(event) {
	if (globals.gbl_pac_oxi == 1){
		poner_cero()
	    globals.gbl_pac_oxi = 1
	    globals.gbl_con_cobertura = ''
		elements.lbl_titulo.text = 'Pacientes con Oxígeno'
    }else{
    	elements.lbl_titulo.text = ''
    }
}
/**
 * @param event
 *
 * @properties={typeid:24,uuid:"9DB8DE69-911F-4AB6-8216-BFB3CCD7B8A9"}
 */
function onAction_aislado(event) {
	if (globals.gbl_pac_aislado == 1){
		poner_cero()
	    globals.gbl_pac_aislado = 1
	    globals.gbl_con_cobertura = ''
		elements.lbl_titulo.text = 'Pacientes Aislados'
    }else{
    	elements.lbl_titulo.text = ''
    }
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"92754A50-BD4B-46BF-AF18-0CB98A9E2D84"}
 */
function onAction_der(event) {
	if (globals.gbl_pac_der == 1){
		poner_cero()
	    globals.gbl_pac_der = 1
	    globals.gbl_con_cobertura = ''
		elements.lbl_titulo.text = 'Pacientes Derivados'
    }else{
    	elements.lbl_titulo.text = ''
    }
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"4036160E-B440-4C6B-9E33-43CE2307C3FD"}
 */
function onAction_noc(event) {
	if (globals.gbl_pac_noc == 1){
		poner_cero()
	    globals.gbl_pac_noc = 1
	    globals.gbl_con_cobertura = ''
		elements.lbl_titulo.text = 'Pacientes con Acompañantes Nocturnos(No Pago)'
    }else{
    	elements.lbl_titulo.text = ''
    }
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"3D4BFE7D-B725-4502-895A-B83F1EC070F3"}
 */
function onAction_resp(event) {
	if (globals.gbl_pac_resp == 1){
		poner_cero()
	    globals.gbl_pac_resp = 1
	    globals.gbl_con_cobertura = ''
		elements.lbl_titulo.text = 'Pacientes con Respirador'
    }else{
    	elements.lbl_titulo.text = ''
    }
}
/**
 * @param event
 *
 * @properties={typeid:24,uuid:"29D78682-4636-4B13-B2AA-628DF46A7409"}
 */
function onAction_reservado(event) {
	if (globals.gbl_pac_reserva == 1){
		poner_cero()
	    globals.gbl_pac_reserva = 1
	    globals.gbl_con_cobertura = ''
		elements.lbl_titulo.text = 'Pacientes con Reserva'
    }else{
    	elements.lbl_titulo.text = ''
    }
}
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"56ECA5DE-D9C7-42C4-9B34-95DDF9A1DE31"}
 */
function onAction_supn(event) {
	if (globals.gbl_pac_supn == 1){
		poner_cero()
	    globals.gbl_pac_supn = 1
	    globals.gbl_con_cobertura = ''
		elements.lbl_titulo.text = 'Pacientes en Super Numeraria'
    }else{
    	elements.lbl_titulo.text = ''
    }
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"C5CEB238-8603-41D6-BCD4-C3BADDB0586B"}
 */
function onAction_pan(event) {
	if (globals.gbl_pac_pan == 1){
		poner_cero()
	    globals.gbl_pac_pan = 1
	    globals.gbl_con_cobertura = ''
		elements.lbl_titulo.text = 'Pacientes con Pañales'
    }else{
    	elements.lbl_titulo.text = ''
    }
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"5C6A5E92-068A-43D7-B917-5FD868F4056C"}
 */
function onAction_b_epi(event) {
	if (globals.gbl_pac_b_epi == 1){
		poner_cero()
	    globals.gbl_pac_b_epi = 1
	    globals.gbl_con_cobertura = ''
		elements.lbl_titulo.text = 'Pacientes con Alerta por baja Epicrisis'
    }else{
    	elements.lbl_titulo.text = ''
    }
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"3C604661-2CC5-4DE9-A69A-3DBFABA57F36"}
 */
function onAction_esp_cam(event) {
	if (globals.gbl_pac_esp_cam == 1){
		poner_cero()
	    globals.gbl_pac_esp_cam = 1
	    globals.gbl_con_cobertura = ''
		elements.lbl_titulo.text = 'Pacientes en Espera de Cama'
    }else{
    	elements.lbl_titulo.text = ''
    }
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"18A57F8B-7ECA-445D-A90F-659887519849"}
 */
function onAction_egr_epi(event) {
	if (globals.gbl_pac_egr_epi == 1){
		poner_cero()
	    globals.gbl_pac_egr_epi = 1
	    globals.gbl_con_cobertura = ''
		elements.lbl_titulo.text = 'Pacientes con Egreso sin Epicrisis'
    }else{
    	elements.lbl_titulo.text = ''
    }
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"935A9097-AF91-4A54-AF13-EA97BF6CF55A"}
 */
function onAction_habitacion(event) {
	if (globals.gbl_habitacion != null){
		elements.lbl_titulo.text = 'Habitación Nº ' + globals.gbl_habitacion + ' Camas Todas'  
		poner_cero()
        globals.gbl_cama = ''
	    globals.gbl_cama_td = 1        
		globals.gbl_con_cobertura = ''
    }else{
    	elements.lbl_titulo.text = ''
    }
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"1F2F7D1B-2C41-44FA-ADDC-97776D2F41B3"}
 */
function onAction_amb(event) {
	if (globals.gbl_pac_amb ==1){
		elements.lbl_titulo.text = 'Pacientes con Alta Médica ' + 
        application.getValueListItems('vl_alta_medica').getValue(utils.stringToNumber(globals.gbl_pac_alta),1) +
		' + Ambulancia'
	}else{
		elements.lbl_titulo.text = 'Pacientes con Alta Médica ' + 
        application.getValueListItems('vl_alta_medica').getValue(utils.stringToNumber(globals.gbl_pac_alta),1)
	}
	globals.gbl_con_cobertura = ''
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"EE5AD20C-C33A-47FC-8571-93C2328FB671"}
 */
function onAction_imprimir(event) {
	elements.lbl_procesando2.visible = true 
    application.updateUI()
	var $params = {
		pr_titulo: elements.lbl_titulo.text,
		pr_img1:"media:///logo1.png",
		pr_img2:"media:///logo2.png"
	}
	plugins.jasperPluginRMI.runReport(forms.frm_Mapa_Cama_Habita_dtl.foundset,'rp_80_1.jasper',null,plugins.jasperPluginRMI.OUTPUT_FORMAT.PRINT,$params)
	elements.lbl_procesando2.visible = false
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"47B4FDAE-6480-457B-8483-7368C02155C7"}
 */
function onAction_exportar_excel(event) {
	elements.lbl_procesando2.visible = true
	application.updateUI() 
	var $arch = plugins.file.showFileSaveDialog('SQ-80-' + application.getIPAddress() + '.xls')
	if ($arch){
		plugins.jasperPluginRMI.runReport(forms.frm_Mapa_Cama_Habita_dtl.foundset,'rp_80_2.jasper',$arch.getAbsolutePath(),plugins.jasperPluginRMI.OUTPUT_FORMAT.EXCEL,null)
		
		var $OS = application.getOSName();
		if (/Windows/.test($OS)) {
		    application.executeProgram("rundll32.exe", ["url.dll,FileProtocolHandler", $arch.getAbsolutePath()]);	      
	    } else if (/Linux|Freebsd/.test($OS)) {
	       application.executeProgram('xdg-open', $arch);
	    } else if (/Mac/.test($OS)) {
	       application.executeProgram('open', $arch);
	    }
	}
	elements.lbl_procesando2.visible = false
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"FE50EE2E-B6BD-41A1-A0FA-DBCB627BA2CE"}
 */
function onAction_exportal_pdf(event) {
	elements.lbl_procesando2.visible = true
    application.updateUI() 
	var $params = {
		pr_titulo: elements.lbl_titulo.text,
		pr_img1:"media:///logo1.png",
		pr_img2:"media:///logo2.png"
	}
	var $arch = plugins.file.showFileSaveDialog('SQ-80-' + application.getIPAddress() + '.pdf')
	if ($arch){		
		plugins.jasperPluginRMI.runReport(forms.frm_Mapa_Cama_Habita_dtl.foundset,'rp_80_1.jasper' ,$arch.getAbsolutePath(),plugins.jasperPluginRMI.OUTPUT_FORMAT.PDF,$params)
		
		var $OS = application.getOSName();
		if (/Windows/.test($OS)) {
		    application.executeProgram("rundll32.exe", ["url.dll,FileProtocolHandler", $arch.getAbsolutePath()]);	      
	    } else if (/Linux|Freebsd/.test($OS)) {
	       application.executeProgram('xdg-open', $arch);
	    } else if (/Mac/.test($OS)) {
	       application.executeProgram('open', $arch);
	    }
	}
	elements.lbl_procesando2.visible = false
}

/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"8F0EC8F0-7ACD-49CB-8883-993A97E5CD5E"}
 */
function onLoad_limpia_foundset(event) {
	forms.Mapa_Cama_todos.Carga_aux(1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'',0)
	onLoad_inicio(event)
}
/**
 * @param event
 *
 * @properties={typeid:24,uuid:"0EC70AB6-E7EE-4DF9-9244-0C142D6A37B3"}
 */
function onAction_buscar_obra_social_consulta(event) {
	var largo = globals.gbl_con_cobertura.length;
	var esnumero = true;
	globals.gbl_con_indice = 1;
    for (var i= 0;i<largo && esnumero == true; i++){
	   if (globals.gbl_con_cobertura.charCodeAt(i)< 48 || globals.gbl_con_cobertura.charCodeAt(i) > 57){
		   esnumero = false
	   }
    }
    if (esnumero){
	   globals.gbl_cobertura = utils.stringToNumber(globals.gbl_con_cobertura.valueOf())
	   globals.gbl_con_indice = 2
    }else{
	   globals.gbl_con_indice = 1
    }
    var win = application.createWindow("Busca_cober",JSWindow.MODAL_DIALOG)	
    win.title= 'Buscar Cobertura'
    win.resizable = false
    win.show(forms.frm_tab_coberturas)
	win.hide()
    win.destroy()
	
    if (forms.frm_scr_coberturas.foundset.obr_codigo > 0){       
	   globals.gbl_con_cobertura = forms.frm_scr_coberturas.foundset.obr_codigo.toString()	   	    
   }else{
	   globals.gbl_con_cobertura = ''
	   frm_obra_nombre = ''
   }    
   if (globals.gbl_con_cobertura != ''){
	   poner_cero()	
	   frm_obra_nombre = forms.frm_scr_coberturas.foundset.obr_razonsoc	   	   
	   elements.lbl_titulo.text = 'Pacientes por Obra Social'
   }else{
       elements.lbl_titulo.text = ''
       globals.gbl_con_cobertura = '' 
       frm_obra_nombre = 'Todas'
   }
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"F733F165-A956-4717-A3ED-E0C9F4216C72"}
 */
function onAction_buscar_obra(event) {
	if (globals.gbl_con_cobertura != ''){
		// identifica si el campo es numérico o alfanumerico
		var largo = globals.gbl_con_cobertura.length;
		var esnumero = true;
		for (var i= 0;i<largo && esnumero == true; i++){
			if (globals.gbl_con_cobertura.charCodeAt(i)< 48 || globals.gbl_con_cobertura.charCodeAt(i) > 57){
			   	esnumero = false
			}
		}
		if (esnumero){
		    if(largo>4){
		    	//muestra mensaje de "dialogo"
				globals.showErrorDialog('Error en código de Obra Social, Ingrese un código correcto', null, 'Ok',null, null, null);
				elements._gbl_pac_obra.requestFocus()
				frm_error = 1
		    }else{		    	
			    globals.gbl_cobertura = utils.stringToNumber(globals.gbl_con_cobertura.valueOf())	   		
				if (globals.gbl_cob_to_coberturas.getSize() < 1){
					frm_error = 1
					globals.showWarningDialog('Registro Inexistente.', null, 'Ok', null, null, null);
					globals.gbl_con_cobertura = ''
					globals.gbl_cobertura = 0					
					elements._gbl_pac_obra.requestFocus()								   
			    }		
		    }
	    }else{
	        globals.gbl_con_indice = 1
		    var win = application.createWindow("Busca_cober",JSWindow.MODAL_DIALOG)	
		    win.title= 'Buscar Cobertura'
		    win.resizable = false		
	        win.show(forms.frm_tab_coberturas)
		    win.hide()
		    win.destroy()
	        if (forms.frm_scr_coberturas.foundset.obr_codigo > 0){
	    	    globals.gbl_con_cobertura = forms.frm_scr_coberturas.foundset.obr_codigo.toString()			    
		    }
	    }
	}else{
		 frm_obra_nombre = 'Todas'
		 globals.gbl_con_cobertura = ''
	}	 
	if (globals.gbl_con_cobertura != ''){
	    poner_cero()		
		frm_obra_nombre = forms.frm_scr_coberturas.foundset.obr_razonsoc	   	   
		elements.lbl_titulo.text = 'Pacientes por Obra Social'
	}else{
	    //elements.lbl_titulo.text = ''
	    globals.gbl_con_cobertura = ''
	    frm_obra_nombre = 'Todas'
	}
}