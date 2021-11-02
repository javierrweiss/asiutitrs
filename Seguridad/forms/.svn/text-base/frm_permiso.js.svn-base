/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"D51DFBE4-4F28-4441-86AB-534F2585A263",variableType:4}
 */
var frm_es_nuevo = 0;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"44C2C57C-6964-4D53-8C64-3FC8834EABD1",variableType:4}
 */
var frm_ip_1 = null;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"51A69166-FBCE-4A16-A312-549322F41290",variableType:4}
 */
var frm_ip_2 = null;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"CC8B51EF-BCCB-4AB4-ADE0-41821E288524",variableType:4}
 */
var frm_ip_3 = null;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"80621C64-3F17-468C-B95B-E62D874F29D7",variableType:4}
 */
var frm_ip_4 = null;

/**
 * @properties={typeid:35,uuid:"94FB7B0E-7F64-4F04-9882-24AAC91AEA2C",variableType:-4}
 */
var frm_ds2 = new Array();

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"08603A03-B16C-4386-A019-8301B51C677F"}
 */
var frm_descripcion = ''
/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"C31265B4-B321-4C34-9AAA-CB62AB4896EA"}
 */
function onShow_inicio(firstShow, event) {
	elements.lbl_titulo.text = 'Tratamiento de Permisos'
	elements.items_permiso.setTabEnabledAt(1,false)
}
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"B7F592CC-7BF5-4F37-9934-38C45C472E5E"}
 * @AllowToRunInFind
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
	        	globals.DIALOGS.showErrorDialog('Error','Código inexistente', 'Ok')
				habilita_btn()
				inicializa_campos()	
				deshabilita_campos()
				inicializa_tabla()
				elements.codigo_usuario.requestFocus()				 
		   	}else{
		   		globals.gbl_num_usuario = utils.stringToNumber(globals.gbl_con_usuario.toString())	   		
		   		if (gbl_usu_to_usuarios.getSize() < 1){
		   			globals.DIALOGS.showErrorDialog('Error','Código inexistente', 'Ok')
				    habilita_btn()
					inicializa_campos()	
					deshabilita_campos()
					inicializa_tabla()
			        elements.codigo_usuario.requestFocus()
				}else {
				   	globals.gbl_descripcion = gbl_usu_to_usuarios.per_apelnom
					elements.ip.enabled = true
					elements.ip_1.requestFocus()
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
			    globals.gbl_descripcion = forms.frm_scr_usuarios.foundset.per_2_2
			    elements.ip.enabled = true
				elements.ip_1.requestFocus()				  
			}		   	
		}
	}
}
/** 
 * @param event
 *
 * @properties={typeid:24,uuid:"BFFA7875-513A-4E5E-A972-40EAB77CEBE7"}
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
	    globals.gbl_descripcion = forms.frm_scr_usuarios.foundset.per_2_2	           
		elements.ip_1.requestFocus()     
	}
}
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"E0A6F2F3-27A8-40E5-B768-5F3210CE295A"}
 */
function onAction_buscar_permiso(event) {
	if (globals.gbl_con_usuario == '' && frm_ip_1 == null){
		globals.DIALOGS.showWarningDialog('Atención','No se puede continuar, faltan datos', 'Ok')	
        habilita_btn()
	    inicializa_campos()	
	    deshabilita_campos()
	    inicializa_tabla()
	}else{
	    deshabilita_btn()
	    habilita_campos()
	    cargar_itm_perfil()
	    elements.items_permiso.setTabEnabledAt(1,true)
		forms.frm_permiso_itm.elements.marca.requestFocus()
	}
}
/**
 * @properties={typeid:24,uuid:"116A0D0D-BDB2-455A-B5A1-DFA2BA9A4C81"}
 */
function cargar_itm_perfil(){
	var $ip = ' '
	var $Args
	var $SQL
	if (globals.gbl_con_usuario == ''){
		$ip = concatena_ip() 
	    $SQL = "select PERM.codigo_perfil, descripcion, codigo from tbl_perfil "
	         +"left join tbl_permiso PERM on codigo = PERM.codigo_perfil and '"		     
		     + $ip
		     +"' = PERM.ip and codigo = PERM.codigo_perfil "
		     +"order by PERM.codigo_legajo asc, PERM.ip asc, PERM.codigo_perfil asc, codigo asc "
	}else{
		if (frm_ip_1 != null){
	   	    $ip = concatena_ip()
	        $SQL = "select PERM.codigo_perfil, descripcion, codigo from tbl_perfil "
	             +"left join tbl_permiso PERM on codigo = PERM.codigo_perfil and "
		         + globals.gbl_con_usuario 
		         +" = PERM.codigo_legajo and '"
		         + $ip
		         +"' = PERM.ip and codigo = PERM.codigo_perfil "
		         +"order by PERM.codigo_legajo asc, PERM.ip asc, PERM.codigo_perfil asc, codigo asc "
	    }else{	 
     	    $SQL = "select PERM.codigo_perfil , descripcion, codigo from tbl_perfil "
	             +"left join tbl_permiso PERM on codigo = PERM.codigo_perfil and "
		         + globals.gbl_con_usuario 
		         +" = PERM.codigo_legajo " 
		         +"order by PERM.codigo_legajo asc, PERM.ip asc, PERM.codigo_perfil asc, codigo asc "
	    }
	}
    var $ds = databaseManager.getDataSetByQuery("desal", $SQL, $Args, -1);
    var $max = $ds.getMaxRowIndex()
	if ($max != 0){
		    //elements.codigo_usuario.enabled = false 
			elements.ip.enabled             = false
			//elements.bt_buscarc.enabled     = false
		    frm_ds2 = databaseManager.createEmptyDataSet()		
		    frm_ds2.addColumn('marca',1,JSColumn.NUMBER)   
		    frm_ds2.addColumn('perfil_descripcion',2,JSColumn.TEXT)
			frm_ds2.addColumn('perfil_codigo',3,JSColumn.TEXT)   		    
			var $marca      = 0
			var $perfil     = ''
		    var $perfil_cod = ''			
			for (var i= 1; i <= $max; i++){ 
				if ($ds.getValue(i,1) == null){ 
				    $marca  = 0
				}else{
					$marca  = 1
				}
				$perfil     = $ds.getValue(i,2)
				$perfil_cod = $ds.getValue(i,3)
								
			    frm_ds2.addRow([$marca, $perfil, $perfil_cod])
			}
			
			var $tipos = [JSColumn.NUMBER, JSColumn.TEXT, JSColumn.TEXT]
            var $frm = solutionModel.getForm('frm_permiso_itm')
            $frm.dataSource = frm_ds2.createDataSource('Ds_Aux_permiso', $tipos)
            forms.frm_permiso_itm.controller.recreateUI()			
            forms.frm_permiso_itm.onLoad_inicio()			
	}
    elements.items_permiso.setTabEnabledAt(1,false)
}
/**
 *
 * @properties={typeid:24,uuid:"589436BC-AA9E-40B2-8888-1D642759AD52"}
 */
function concatena_ip(){
	var $con_ip
	/*
	var $tam = frm_ip_1.toString().length
	var $aux_ip_1 = ''
	var $aux_ip_2 = ''
	var $aux_ip_3 = ''
	var $aux_ip_4 = ''
	switch ($tam){
	    case 0: $aux_ip_1 = '000'; break
	    case 1: $aux_ip_1 = '00' + frm_ip_1.toString(); break
	    case 2: $aux_ip_1 = '0' + frm_ip_1.toString(); break
		case 3: $aux_ip_1 = frm_ip_1.toString(); break
	}
	if (frm_ip_2 == null){
		$aux_ip_2 = '000'
		frm_ip_2 = '000'
	}else{
	    $tam = frm_ip_2.toString().length	
	    switch ($tam){
	        case 0: $aux_ip_2 = '000'; break
	        case 1: $aux_ip_2 = '00' + frm_ip_2.toString(); break
	        case 2: $aux_ip_2 = '0' + frm_ip_2.toString(); break
		    case 3: $aux_ip_2 = frm_ip_2.toString(); break
	    }
	}
		
	if (frm_ip_3 == null){
		$aux_ip_3 = '000'
		frm_ip_3 = '000'
	}else{
		$tam = frm_ip_3.toString().length
	    switch ($tam){
	        case 0: $aux_ip_3 = '000'; break
	        case 1: $aux_ip_3 = '00' + frm_ip_3.toString(); break
	        case 2: $aux_ip_3 = '0' + frm_ip_3.toString(); break
		    case 3: $aux_ip_3 = frm_ip_3.toString(); break
	    }
	}
	
	if (frm_ip_4 == null){
		$aux_ip_4 = '000'
		frm_ip_4 = '000'
	}else{
		$tam = frm_ip_4.toString().length
	    switch ($tam){
	        case 0: $aux_ip_4 = '000'; break
	        case 1: $aux_ip_4 = '00' + frm_ip_4.toString(); break
	        case 2: $aux_ip_4 = '0' + frm_ip_4.toString(); break
		    case 3: $aux_ip_4 = frm_ip_4.toString(); break
	    }
	}
	$con_ip = $aux_ip_1 + '.' + $aux_ip_2 + '.' + $aux_ip_3 + '.' + $aux_ip_4
	*/
	$con_ip = frm_ip_1 + '.' + frm_ip_2 + '.' + frm_ip_3 + '.' + frm_ip_4
	return $con_ip
}
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"809002B3-8546-4C73-9157-607A20DC2EDB"}
 */
function onAction_alta(event) {
	inicializa_campos()
	frm_es_nuevo = 1
	habilita_campos()
	deshabilita_btn()
	inicializa_tabla()
	elements.codigo_usuario.requestFocus()	
}

/**
 * @properties={typeid:24,uuid:"BAF5EA43-2658-47A8-A4EC-3E625913190A"}
 */
function inicializa_tabla(){
	forms.frm_permiso_itm.foundset.deleteAllRecords()	
    forms.frm_permiso_itm.controller.recreateUI()			
    forms.frm_permiso_itm.onLoad_inicio()
	elements.items_permiso.setTabEnabledAt(1,false)
}

/**
 * @properties={typeid:24,uuid:"B6F57117-61BB-477F-B989-85E63C3F6458"}
 */
function inicializa_campos(){
	globals.gbl_con_usuario = ''
	globals.gbl_descripcion = ''
	frm_ip_1 = null
	frm_ip_2 = null
	frm_ip_3 = null
	frm_ip_4 = null
	frm_es_nuevo = 0
	controller.loadRecords()
	foundset.sort('codigo_legajo asc, ip asc, codigo_perfil asc')
}

/**
 * @properties={typeid:24,uuid:"DE3B80A1-3A3A-44AD-907C-D373FF0C838E"}
 */
function habilita_campos(){
	elements.codigo_usuario.enabled = true
	
}

/**
 * @properties={typeid:24,uuid:"AB78C0EC-EC6F-4476-B562-21C44560D628"}
 */
function deshabilita_campos(){	
	elements.codigo_usuario.enabled = true 
	elements.ip.enabled             = true
	elements.bt_buscarc.enabled     = true
}

/**
 * @properties={typeid:24,uuid:"CE4C2AEA-15B9-423F-AF21-CD345BCF9638"}
 */
function deshabilita_btn(){
    elements.bt_anterior.enabled =false
    elements.bt_siguiente.enabled=false
    elements.bt_borrar.enabled   =true
    elements.bt_nuevo.enabled    =false
    elements.bt_buscar.enabled   =false
    elements.bt_imprimir.enabled =false
    elements.bt_grabar.enabled   =true    
}

/**
 * @properties={typeid:24,uuid:"B866B791-5F77-4198-91AB-E5EF41C50B77"}
 */
function habilita_btn(){	
	elements.bt_anterior.enabled =true
    elements.bt_siguiente.enabled=true
	elements.bt_borrar.enabled   =false
    //elements.bt_nuevo.enabled    =true
	elements.bt_buscar.enabled   =true
    elements.bt_imprimir.enabled =true
    elements.bt_grabar.enabled   =false    
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"9CC52714-2D55-4DE6-A6BF-AA92DB9D8FEA"}
 */
function onAction_cancelar(event) {
	inicializa_campos()
	deshabilita_campos()
	habilita_btn()
	inicializa_tabla()		
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"298F93D5-F946-4D49-8036-26ACF13E4EE5"}
 * @AllowToRunInFind
 */
function onAction_grabar(event) {
	var $ip = ' '
	if (frm_ip_1 != null){
		$ip = concatena_ip()	
	}
	if (globals.gbl_con_usuario == '' && $ip == ''){		
		globals.DIALOGS.showWarningDialog('Atención','No se puede Grabar, faltan datos', 'Ok')	
	    elements.codigo_usuario.requestFocus()
	}else{
		// Graba items		
		var $max = frm_ds2.getMaxRowIndex()
		var $paso = 0
		if ($max != 0){
			for (var i = 1; i <= $max; i ++){
				if(frm_ds2.getValue(i,3) != 0){
				if (frm_ds2.getValue(i,1) == 0){
					foundset.find()
					if (globals.gbl_con_usuario == ''){
						foundset.codigo_legajo = 0
					}else{
					    foundset.codigo_legajo = globals.gbl_con_usuario
					}
					foundset.codigo_perfil     = frm_ds2.getValue(i,3)				
					foundset.ip                = $ip
					foundset.search()
					
					if (foundset.getSize() > 0){
						foundset.deleteAllRecords()						
					}
				}else{
					foundset.find()
					if (globals.gbl_con_usuario == ''){
						foundset.codigo_legajo = 0
					}else{
				        foundset.codigo_legajo = globals.gbl_con_usuario
					}
				    foundset.codigo_perfil     = frm_ds2.getValue(i,3)				
				    foundset.ip                = $ip
				    foundset.search()
				
				    if (foundset.getSize() < 1){
				    	if ($paso == 0){ 
						    foundset.newRecord()
						    if (globals.gbl_con_usuario == ''){
 							   foundset.codigo_legajo = 0
						    }else{
					           foundset.codigo_legajo   = globals.gbl_con_usuario
				            }
				            foundset.codigo_perfil      = ' '
				            foundset.descripcion_legajo = globals.gbl_descripcion
				            foundset.ip                 = $ip				            
				            databaseManager.saveData()
							$paso = 1
				    	}
						
						foundset.newRecord()
						if (globals.gbl_con_usuario == ''){
							foundset.codigo_legajo = 0
						}else{
					        foundset.codigo_legajo  = globals.gbl_con_usuario
				        }				        				
				        foundset.ip                 = $ip
						foundset.codigo_perfil      = frm_ds2.getValue(i,3)
						foundset.descripcion_legajo = globals.gbl_descripcion
						databaseManager.saveData()
					}	
				}
				}			
			}				
		}
		// fin graba items
		inicializa_campos()
		deshabilita_campos()
		habilita_btn()
		inicializa_tabla()
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"CCD1F87E-8053-4E03-ABEF-2B31CE28128A"}
 * @AllowToRunInFind
 */
function onAction_borrar(event) {
	var $ip = ' '
	if (frm_ip_1 != null){
		$ip = concatena_ip()	
	}
	if (globals.gbl_con_usuario != '' ||frm_ip_1 != null){
		var $ok = globals.DIALOGS.showQuestionDialog('Confirmación','Se borrará el registro, Confirma ?','Si', 'No')
		if ($ok=='Si'){	
			//Borra Items
			foundset.find()
			foundset.codigo_legajo = globals.gbl_con_usuario
			foundset.ip            = $ip
			foundset.search()
			foundset.deleteAllRecords()
			//Fin borra items	
            inicializa_campos()	
			deshabilita_campos()
			habilita_btn()
			inicializa_tabla()
		}
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"737DE8A6-964C-489B-AF87-D4AC6ECDCCE5"}
 */
function onAction_atras(event) {
	frm_es_nuevo = 0
	var $ultimo = databaseManager.getFoundSetCount(foundset)
	var $actual = foundset.getSelectedIndex()
	if ($actual == 1){
		foundset.setSelectedIndex($ultimo)
	}else{
	   foundset.setSelectedIndex($actual -2)
	}
	globals.gbl_con_usuario = codigo_legajo
	if($actual != 0){
	    var $frm_ip_1           = ip.substr(0,3)
	    var $frm_ip_2           = ip.substr(3,3)
	    var $frm_ip_3           = ip.substr(6,3)
	    var $frm_ip_4           = ip.substr(9,3)
	    if ($frm_ip_1 == "   "){
		    frm_ip_1 = null
		    frm_ip_2 = null
		    frm_ip_3 = null
		    frm_ip_4 = null
	    }else{
	        frm_ip_1            = utils.stringToNumber($frm_ip_1)
	        frm_ip_2            = utils.stringToNumber($frm_ip_2)
	        frm_ip_3            = utils.stringToNumber($frm_ip_3)
	        frm_ip_4            = utils.stringToNumber($frm_ip_4)
	    }
	    globals.gbl_descripcion = descripcion_legajo
	    habilita_campos()
	    habilita_btn()
	    cargar_itm_perfil()
	    elements.codigo_usuario.requestFocus()
	}else{
		frm_ip_1 = null
	    frm_ip_2 = null
	    frm_ip_3 = null
	    frm_ip_4 = null
		globals.gbl_descripcion = ''		
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"96EC1C9A-AD82-42ED-855D-769C7F37FEEC"}
 * @AllowToRunInFind
 */
function onAction_adelante(event) {
	frm_es_nuevo = 0
	var $ultimo = databaseManager.getFoundSetCount(foundset)
	var $actual = foundset.getSelectedIndex()
	if ($actual == $ultimo){
		foundset.setSelectedIndex(1)		
	}else{
		foundset.setSelectedIndex($actual + 2)
	}
	globals.gbl_con_usuario = codigo_legajo
	if($actual != 0){
	    var $frm_ip_1           = ip.substr(0,3)
	    var $frm_ip_2           = ip.substr(3,3)
	    var $frm_ip_3           = ip.substr(6,3)
	    var $frm_ip_4           = ip.substr(9,3)
	    if ($frm_ip_1 == "   "){
		    frm_ip_1 = null
		    frm_ip_2 = null
		    frm_ip_3 = null
		    frm_ip_4 = null
	    }else{
	        frm_ip_1            = utils.stringToNumber($frm_ip_1)
	        frm_ip_2            = utils.stringToNumber($frm_ip_2)
	        frm_ip_3            = utils.stringToNumber($frm_ip_3)
	        frm_ip_4            = utils.stringToNumber($frm_ip_4)
	    }
	    globals.gbl_descripcion = descripcion_legajo	
		habilita_campos()
		habilita_btn()
		cargar_itm_perfil()
		elements.codigo_usuario.requestFocus()
	}else{
	    frm_ip_1 = null
	    frm_ip_2 = null
	    frm_ip_3 = null
	    frm_ip_4 = null
		globals.gbl_descripcion = ''
	}	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"80F4BC2C-2BD1-40C4-A844-0C64A22F564D"}
 * @AllowToRunInFind
 */
function onAction_buscar(event) {
	globals.gbl_selec      = 0 
    globals.gbl_con_indice = 1	
    var win = application.createWindow("Busca_permiso",JSWindow.MODAL_DIALOG)	
    win.title= 'Buscar Permiso'
    win.resizable = false
    win.show(forms.frm_tab_permisos)
	win.destroy()
	if (globals.gbl_selec != 0){		
		globals.gbl_con_usuario = buscar_alf_to_permiso.codigo_legajo.toString()
		var $frm_ip_1           = buscar_alf_to_permiso.ip.substr(0,3)
		var $frm_ip_2           = buscar_alf_to_permiso.ip.substr(3,3)
		var $frm_ip_3           = buscar_alf_to_permiso.ip.substr(6,3)
		var $frm_ip_4           = buscar_alf_to_permiso.ip.substr(9,3)
		if ($frm_ip_1 == "   "){
			frm_ip_1 = null
			frm_ip_2 = null
			frm_ip_3 = null
			frm_ip_4 = null
		}else{
		    frm_ip_1            = utils.stringToNumber($frm_ip_1)
		    frm_ip_2            = utils.stringToNumber($frm_ip_2)
		    frm_ip_3            = utils.stringToNumber($frm_ip_3)
		    frm_ip_4            = utils.stringToNumber($frm_ip_4)
		}
		globals.gbl_descripcion = buscar_alf_to_permiso.descripcion_legajo
		deshabilita_btn()
	    habilita_campos()
		cargar_itm_perfil()
		elements.codigo_usuario.requestFocus()
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"6A4E9AED-63FE-4301-A557-ABFEB4233AD3"}
 */
function onAction_imprimir(event) {
	globals.printRoutine('prn_permiso', true, 1)
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"C02A940E-5300-445F-A8BD-02B080E9E3F1"}
 */
function onAction_ip2(event) {
	elements.ip_2.requestFocus()
}

/**
 * @param event
 *
 * @properties={typeid:24,uuid:"5ABF02A0-0267-4896-BFEF-9A2AC6071E80"}
 */
function onAction_ip3(event) {
	elements.ip_3.requestFocus()
}

/**
 * 
 * @param event
 *
 * @properties={typeid:24,uuid:"B450557E-85C2-482D-BA20-D450C7631273"}
 */
function onAction_ip4(event) {
	elements.ip_4.requestFocus()
}

