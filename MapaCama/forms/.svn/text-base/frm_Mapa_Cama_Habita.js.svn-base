
/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"121D57E7-37F1-4870-8A0C-C0D9276A7303"}
 */
function onShow_inicial(firstShow, event) {
	// control del elemento por perfil	
	var $form = controller.getName()
	globals.controlar_elementos($form)	
	// fin control del elemento por perfil
	
	elements.lbl_con_sin_internado.text = '' 
	switch (globals.tbc_habita_to_tbc_habita.hab_uso) {
		case 1:
		    elements.lbl_con_sin_internado.text = 'Historias Clínicas Ambulatorias'
			;break;
		case 2:
			elements.lbl_con_sin_internado.text = 'Nros. de Historias Clínicas -con /son Internados -sin / son Ambulatorios'
			;break;		
	}
	switch (globals.gbl_habitacion){
		case -1 : elements.lbl_titulo.text = 'Detalle por sector - ' + globals.gbl_sector_des + '-'; break;
		case -2 : var cobertura = ''
			      for (var i=0; i < 100; i++){
			    	  if (globals.gbl_res_ocupacion_cober[i][1] == globals.gbl_sector_des) {
			    		  cobertura = globals.gbl_res_ocupacion_cober[i][2]
			    		  i = 100
			    	  }
			      }
		          elements.lbl_titulo.text = 'Detalle por Cobertura - ' + cobertura + '-'; break;
		case -3 : elements.lbl_titulo.text = 'Detalle Utilización de Respiradores - Propios -'; break;
		case -4 : elements.lbl_titulo.text = 'Detalle Utilización de Respiradores - Alquilados -'; break;
		default : elements.lbl_titulo.text = 'Detalle de la habitación Nro. ' + globals.gbl_habitacion; break; 
	}	
}
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"1F2E139E-6573-4A72-BA78-11FA39E801EB"}
 */
function onAction_imprimir(event) {
	var $params = {
		pr_titulo: elements.lbl_titulo.text,
		pr_img1:"media:///logo1.png",
		pr_img2:"media:///logo2.png"
	}
	plugins.jasperPluginRMI.runReport(forms.frm_Mapa_Cama_Habita_dtl.foundset,'rp_80_1.jasper',null,plugins.jasperPluginRMI.OUTPUT_FORMAT.PRINT,$params)
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"9CC88A40-76B0-4160-9E72-BE1D09507D4B"}
 */
function onAction_exportar_pfd(event) {	
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
}


/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"B098875C-D715-4757-BEDC-3AA389FAB038"}
 */
function onAction_exportar_excel_con_telefono(event){
	var $arch = plugins.file.showFileSaveDialog('SQ-80-CON-TELEFONO-FAM-' + application.getIPAddress() + '.xls')
	if ($arch){
		
		plugins.jasperPluginRMI.runReport(forms.frm_Mapa_Cama_Habita_dtl.foundset,'rp_80_3_telefono.jasper',$arch.getAbsolutePath(),plugins.jasperPluginRMI.OUTPUT_FORMAT.EXCEL,null)
		
		var $OS = application.getOSName();
		if (/Windows/.test($OS)) {
		    application.executeProgram("rundll32.exe", ["url.dll,FileProtocolHandler", $arch.getAbsolutePath()]);	      
	    } else if (/Linux|Freebsd/.test($OS)) {
	       application.executeProgram('xdg-open', $arch);
	    } else if (/Mac/.test($OS)) {
	       application.executeProgram('open', $arch);
	    }
	}
}


/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"8BA2E20B-33FA-472B-B8DC-AE22F5C71A0F"}
 */
function onAction_exportar_excel(event) {
	
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
}
