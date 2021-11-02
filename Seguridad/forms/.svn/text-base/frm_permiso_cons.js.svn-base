/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"AE0D1D54-9351-4B36-BC2C-C6475BB886D0"}
 */
var frm_descripcion_legajo = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"38A9E251-5D99-4C96-8110-72BE166FEE67"}
 */
var frm_descripcion_perfil = '';

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"0430744D-CB20-4916-9C55-E098187F4EE8"}
 */
function onShow_inicio(firstShow, event) {
	frm_descripcion_legajo = 'TODOS'	
	frm_descripcion_perfil = 'TODOS'
	elements.items_permiso.setTabEnabledAt(1,false)
}
/** 
 * @param event
 *
 * @properties={typeid:24,uuid:"A5C28BAB-788A-4BA1-B2CE-FFFF273D82CD"}
 */
function onAction_controlar_usuario(event) {		
	if(globals.gbl_con_usuario != ''){
		// identifica si el campo es numérico o alfanumerico
		var largo = globals.gbl_con_usuario.length;
		var esnumero = true;
	    for (var i= 0;i<largo && esnumero == true; i++){
	         if (globals.gbl_con_usuario.charCodeAt(i)< 48 || globals.gbl_con_usuario.charCodeAt(i) > 57){
			   	 esnumero = false
		     }
		}
		if (esnumero){
	        if(largo>6){
	    	    //muestra mensaje de "dialogo"
	        	globals.DIALOGS.showErrorDialog('Error','Código existente', 'Ok')	
				globals.gbl_con_usuario = ''
				frm_descripcion_legajo  = 'TODOS'
				elements.codigo_usuario.requestFocus()				 
		   	}else{
		   		globals.gbl_num_usuario = utils.stringToNumber(globals.gbl_con_usuario.toString())	   		
		   		if (gbl_usu_to_usuarios.getSize() < 1){
		   			globals.DIALOGS.showErrorDialog('Error','Código existente', 'Ok')				    
			        elements.codigo_usuario.requestFocus()
					globals.gbl_con_usuario = ''
					frm_descripcion_legajo  = 'TODOS'
				}else {
				   	frm_descripcion_legajo = gbl_usu_to_usuarios.per_apelnom
					elements.codigo_perfil.requestFocus()
				}		
		   	}
	    }else{
	        globals.gbl_con_indice = 1
	       	var win = application.createWindow("Busca_usuario",JSWindow.MODAL_DIALOG)	
			win.title= 'Buscar Usuarios'
			win.resizable = false
		    win.show(forms.frm_tab_usuarios)
			win.destroy()
			if (forms.frm_scr_usuarios.foundset.per_1 > 0){
			    globals.gbl_con_usuario = forms.frm_scr_usuarios.foundset.per_1.toString()
			    frm_descripcion_legajo  = forms.frm_scr_usuarios.foundset.per_2_2			    
				elements.codigo_perfil.requestFocus()				  
			}		   	
		}
	}else{
		globals.gbl_con_usuario = ''
		frm_descripcion_legajo  = 'TODOS'
	}
}
/** 
 * @param event
 *
 * @properties={typeid:24,uuid:"BE9CCC84-E8CE-48F7-84E4-86DD1AF5FF42"}
 */
function onAction_buscar_usuario(event) {	
    globals.gbl_con_indice = 1	
	var win = application.createWindow("Busca_usuario",JSWindow.MODAL_DIALOG)	
    win.title= 'Buscar Usuarios'
    win.resizable = false
    win.show(forms.frm_tab_usuarios)
	win.destroy()
	if (forms.frm_scr_usuarios.foundset.per_1 > 0){
	    globals.gbl_con_usuario = forms.frm_scr_usuarios.foundset.per_1.toString()
	    frm_descripcion_legajo  = forms.frm_scr_usuarios.foundset.per_2_2	           
		elements.codigo_perfil.requestFocus()     
	}else{
		globals.gbl_con_usuario = ''
		frm_descripcion_legajo  = 'TODOS'
	}
}
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"C72530AE-F236-4939-AD1D-2CE109B43AD1"}
 */
function onAction_buscar_perfil(event) {
	globals.gbl_selec      = 0
    globals.gbl_con_indice = 1
	globals.gbl_perfil = ''
	var win = application.createWindow("Busca_perfil",JSWindow.MODAL_DIALOG)	
    win.title= 'Buscar Perfil'
    win.resizable = false
    win.show(forms.frm_tab_perfiles)
	win.destroy()
	if (globals.gbl_selec != 0){
		globals.gbl_codigo_perfil = globals.gbl_perfil				
		frm_descripcion_perfil    = tbl_perfil_to_tbl_perfil.descripcion
		elements.codigo_perfil.requestFocus()
	}else{
		globals.gbl_codigo_perfil = ''
		frm_descripcion_perfil    = 'TODOS'
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"75DB0B64-216B-47DF-9B0C-CB9BBB92BF24"}
 */
function onAction_controla_codigo_perfil(event) {
	if(globals.gbl_codigo_perfil != '' && globals.gbl_codigo_perfil != null){
		var encontro = tbl_perfil_to_tbl_perfil.getSize()
		if (encontro == 0){   		
			globals.DIALOGS.showErrorDialog('Error','Código existente', 'Ok')	
		    globals.gbl_codigo_perfil = ''
		    frm_descripcion_perfil    = 'TODOS'
		    elements.codigo_perfil.requestFocus()
		}else{			
			globals.gbl_codigo_perfil = tbl_perfil_to_tbl_perfil.codigo
			frm_descripcion_perfil    = tbl_perfil_to_tbl_perfil.descripcion
			elements.bt_procesar.requestFocus()		    
		}
	}else{		
		globals.gbl_codigo_perfil = ''
		frm_descripcion_perfil    = 'TODOS'
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"2B4B655A-6CDC-4E56-9F05-9A0E6AE69591"}
 * @AllowToRunInFind
 */
function onAction_procesar(event) {	
	var $Args
	var $SQL = ''
	$SQL = "select codigo_legajo, descripcion_legajo, ip, codigo_perfil , PERF.descripcion as descripcion_perfil from tbl_permiso "
	     +"left join tbl_perfil PERF on codigo_perfil = PERF.codigo "
		 +"where codigo_perfil <> ' ' "
		 if (globals.gbl_con_usuario != ''){
		     $SQL=$SQL+ "and codigo_legajo = "
		     $SQL=$SQL+ globals.gbl_con_usuario
			 if(globals.gbl_codigo_perfil != ''){
			     $SQL=$SQL+" and codigo_perfil = '" 
			     $SQL=$SQL+ globals.gbl_codigo_perfil
				 $SQL=$SQL+"'"
			 }
		 }else{
			 if(globals.gbl_codigo_perfil != ''){
		         $SQL=$SQL+" and codigo_perfil = '" 
		         $SQL=$SQL+ globals.gbl_codigo_perfil
				 $SQL=$SQL+"'"
			 }
		 }
		 $SQL=$SQL+" order by codigo_legajo asc, ip asc, codigo_perfil asc "    
	
    var $ds = databaseManager.getDataSetByQuery("desal", $SQL, $Args, -1);
    var $max = $ds.getMaxRowIndex()
			
	var $tipos = [JSColumn.INTEGER, JSColumn.TEXT, JSColumn.TEXT, JSColumn.TEXT, JSColumn.TEXT]
    var $frm = solutionModel.getForm('frm_permiso_cons_itm')
    $frm.dataSource = $ds.createDataSource('frm_permiso_cons_itm', $tipos)
    forms.frm_permiso_cons_itm.controller.recreateUI()	
	forms.frm_permiso_cons_itm.onLoad(event)
	if ($max != 0){	
		elements.bt_imprimir.enabled       = true
		elements.bt_exportar_prf.enabled   = true
		elements.bt_exportar_excel.enabled = true
	}else{
		globals.DIALOGS.showWarningDialog('Atención','No hay datos para mostrar', 'Ok')
	    elements.codigo_usuario.requestFocus()
		elements.bt_imprimir.enabled       = false
		elements.bt_exportar_prf.enabled   = false
		elements.bt_exportar_excel.enabled = false		
	}
	elements.items_permiso.setTabEnabledAt(1,true)
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"4822F51E-A625-4DDA-83BF-6F670487DBD5"}
 */
function onAction_imprimir(event) {
	var $params = {
		pr_titulo: elements.lbl_titulo.text,
		pr_img1:"media:///logo1.png",
		pr_img2:"media:///logo2.png"
	}
	plugins.jasperPluginRMI.runReport(forms.frm_permiso_cons_itm.foundset,'rp_seguridad_permisos_1.jasper',null,plugins.jasperPluginRMI.OUTPUT_FORMAT.PRINT,$params)
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"701A0331-F688-4A7D-B2AE-04C895564BC1"}
 */
function onAction_exportar_pdf(event) {
	var $params = {
		pr_titulo: elements.lbl_titulo.text,
		pr_img1:"media:///logo1.png",
		pr_img2:"media:///logo2.png"
	}
	var $arch = plugins.file.showFileSaveDialog('SQ-seguridad-permisos-' + application.getIPAddress() + '.pdf')
	if ($arch){		
		plugins.jasperPluginRMI.runReport(forms.frm_permiso_cons_itm.foundset,'rp_seguridad_permisos_1.jasper' ,$arch.getAbsolutePath(),plugins.jasperPluginRMI.OUTPUT_FORMAT.PDF,$params)
		
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
 * @properties={typeid:24,uuid:"2E3DB6D2-7178-4674-9D02-A498B629750D"}
 */
function onAction_exportar_excel(event) {
	application.updateUI() 
	var $arch = plugins.file.showFileSaveDialog('SQ-seguridad-permisos-' + application.getIPAddress() + '.xls')
	if ($arch){
		plugins.jasperPluginRMI.runReport(forms.frm_permiso_cons_itm.foundset,'rp_seguridad_permisos_2.jasper',$arch.getAbsolutePath(),plugins.jasperPluginRMI.OUTPUT_FORMAT.EXCEL,null)
		
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
