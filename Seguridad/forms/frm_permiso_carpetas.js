/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"00965735-7C83-4C1B-82F4-7370AED581BF",variableType:4}
 */
var frm_es_nuevo = 0;

/**
 * @properties={typeid:35,uuid:"03C8E16E-E110-4C6B-96C9-FC524BB2AB75",variableType:-4}
 */
var frm_ds2 = new Array();

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"971DFC06-89E8-49F4-91C3-1C1CAE69CEC4"}
 */
var frm_descripcion = '';

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"040E481E-3A96-403D-9BD9-F04706ADEE59"}
 */
function onShow_inicio(firstShow, event) {
	elements.lbl_titulo.text = 'Tratamiento de Permisos de Carpetas'
	elements.items_permiso_carpetas.setTabEnabledAt(1,false)
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"67968C1D-14E9-4A72-AB76-E89E7D2FA724"}
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
				   	deshabilita_btn()
				    habilita_campos()
					cargar_itm_permiso()
				   	elements.items_permiso_carpetas.setTabEnabledAt(1,true)
					forms.frm_permiso_carpetas_itm.elements.marca.requestFocus()
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
			    deshabilita_btn()
			    habilita_campos()
			    cargar_itm_permiso()
			    elements.items_permiso_carpetas.setTabEnabledAt(1,true)
			}		   	
		}
	}
}

/** 
 * @param event
 *
 * @properties={typeid:24,uuid:"F15471CA-F5D0-4F08-AEB4-14EDB8C56B2C"}
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
		cargar_itm_permiso()     
	    elements.items_permiso_carpetas.setTabEnabledAt(1,true)
		forms.frm_permiso_carpetas_itm.elements.marca.requestFocus()
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"1612C185-2FC0-4EA2-84C0-034C489101E5"}
 */
function onAction_buscar_permiso(event) {
	if (globals.gbl_con_usuario == '' ){        
        globals.DIALOGS.showWarningDialog('Atención','Debe ingresar algún dato', 'Ok')	
        habilita_btn()
	    inicializa_campos()	
	    deshabilita_campos()
	    inicializa_tabla()
	}else{
	    deshabilita_btn()
	    habilita_campos()
	    cargar_itm_permiso()
	    elements.items_permiso_carpetas.setTabEnabledAt(1,true)		
	}
}

/**
 * @properties={typeid:24,uuid:"9768F730-0837-45DE-B4B8-ABE28A127F85"}
 */
function cargar_itm_permiso(){	
	var $Args
	var $SQL
	    $SQL = "select tbl_carpetas.id, tbl_carpetas.carpeta, PER.legajo, tbl_carpetas.descripcion "
	    	 + "from tbl_carpetas left join permi_legajo_carpetas PER on "
	         + globals.gbl_con_usuario 
	         +" = PER.legajo and tbl_carpetas.carpeta = PER.carpeta " 
	         +"order by tbl_carpetas.carpeta asc "	
    var $ds = databaseManager.getDataSetByQuery("desal", $SQL, $Args, -1);
    var $max = $ds.getMaxRowIndex()
	if ($max != 0){
		    frm_ds2 = databaseManager.createEmptyDataSet()		
		    frm_ds2.addColumn('marca',1,JSColumn.NUMBER)   
		    frm_ds2.addColumn('permi_carpeta',2,JSColumn.TEXT)
			frm_ds2.addColumn('permi_id',3,JSColumn.TEXT)  
			frm_ds2.addColumn('permi_carpeta_descripcion',4,JSColumn.TEXT)  
			var $marca              = 0
			var $permi_carpeta      = ''
		    var $permi_id           = ''
		    var $permi_carpeta_desc = ''
			for (var i= 1; i <= $max; i++){ 
				if ($ds.getValue(i,3) == null){ 
				    $marca  = 0
				}else{
					$marca  = 1
				}
				$permi_carpeta      = $ds.getValue(i,2)
				$permi_id           = $ds.getValue(i,1)
                $permi_carpeta_desc = $ds.getValue(i,4)
				
			    frm_ds2.addRow([$marca, $permi_carpeta, $permi_id, $permi_carpeta_desc])
			}
			
			var $tipos = [JSColumn.NUMBER, JSColumn.TEXT, JSColumn.TEXT, JSColumn.TEXT]
            var $frm = solutionModel.getForm('frm_permiso_carpetas_itm')
            $frm.dataSource = frm_ds2.createDataSource('Ds_Aux_permiso_carpeta', $tipos)
            forms.frm_permiso_carpetas_itm.controller.recreateUI()
			elements.items_permiso_carpetas.setTabEnabledAt(1,true)
	}else{
        elements.items_permiso_carpetas.setTabEnabledAt(1,false)
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"0C109631-EC94-47E7-9F83-89BD3347E2AD"}
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
 * @properties={typeid:24,uuid:"C3E25AB4-7D46-4E68-872B-2052BEB047DC"}
 */
function inicializa_tabla(){
	forms.frm_permiso_carpetas_itm.foundset.deleteAllRecords()	
    forms.frm_permiso_carpetas_itm.controller.recreateUI()			
   	elements.items_permiso_carpetas.setTabEnabledAt(1,false)
}

/**
 * @properties={typeid:24,uuid:"B03AC893-A24A-41AA-989E-47045F105A2D"}
 */
function inicializa_campos(){
	globals.gbl_con_usuario = ''
	globals.gbl_descripcion = ''
	controller.loadRecords()
	foundset.sort('legajo asc, carpeta asc')
}

/**
 * @properties={typeid:24,uuid:"4F66A055-C34C-4179-BC38-7949C05E244A"}
 */
function habilita_campos(){
	elements.codigo_usuario.enabled = true	
}

/**
 * @properties={typeid:24,uuid:"1DA284AD-B073-4E7D-9763-DE4ADBDA0416"}
 */
function deshabilita_campos(){	
	elements.codigo_usuario.enabled = true	
	elements.bt_buscarc.enabled     = true
}

/**
 * @properties={typeid:24,uuid:"7CC8BAE8-FD35-4BD2-9B1F-510E0735DF29"}
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
 * @properties={typeid:24,uuid:"C0216763-3867-4BA5-AE2F-555722E11C64"}
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
 * @properties={typeid:24,uuid:"5A865C31-8E8C-4BC3-A1E3-BF6172827311"}
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
 * @properties={typeid:24,uuid:"65F817A8-446F-4D2C-AAE5-87DF8C47633B"}
 * @AllowToRunInFind
 */
function onAction_grabar(event) {
	if (globals.gbl_con_usuario == ''){		
		globals.DIALOGS.showWarningDialog('Atención','No se puede Grabar, faltan datos', 'Ok')	
	    elements.codigo_usuario.requestFocus()
	}else{
		// Graba items		
		var $max = frm_ds2.getMaxRowIndex()		
		if ($max != 0){
			for (var i = 1; i <= $max; i ++){
				if(frm_ds2.getValue(i,2) != null){
				    if (frm_ds2.getValue(i,1) == 0){
					    foundset.find()
					    foundset.legajo  = globals.gbl_con_usuario					    
					    foundset.carpeta = frm_ds2.getValue(i,2)					
					    foundset.search()
					
					    if (foundset.getSize() > 0){
						    foundset.deleteAllRecords()						
					    }  
				    }else{
					    foundset.find()
					    foundset.legajo  = globals.gbl_con_usuario					    
				        foundset.carpeta = frm_ds2.getValue(i,2)				    
				        foundset.search()
				
				        if (foundset.getSize() < 1){
						    foundset.newRecord()						
						    foundset.legajo        = globals.gbl_con_usuario
						    foundset.legajo_nombre = globals.gbl_descripcion
						    foundset.carpeta       = frm_ds2.getValue(i,2)
							
							var $id = application.getUUID();
							//Verificando si existe clave primaria
							var sql = "SELECT EXISTS( SELECT id FROM smsciru_envios WHERE id='" + $id + "')"
							var dsExists = databaseManager.getDataSetByQuery('desal',sql,null,-1);
							while(dsExists.getValue(1,1) == 1){
								$id = application.getUUID();
								sql = "SELECT EXISTS( SELECT id FROM smsciru_envios WHERE id='" + $id + "')"
								dsExists = databaseManager.getDataSetByQuery('desal',sql,null,-1);
							}
							foundset.id = $id
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
 * @properties={typeid:24,uuid:"A392629A-DF1E-4FCF-9B9E-480FEB1FF059"}
 * @AllowToRunInFind
 */
function onAction_borrar(event) {
	if (globals.gbl_con_usuario != ''){
		var $ok = globals.DIALOGS.showQuestionDialog('Confirmación','Se borrará el registro, Confirma ?','Si', 'No')
		if ($ok=='Si'){	
			//Borra Items
			foundset.find()
			foundset.legajo = globals.gbl_con_usuario			
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
 * @properties={typeid:24,uuid:"5074C584-A77F-4A7C-9400-33B44A07868F"}
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
	globals.gbl_con_usuario = legajo
	globals.gbl_num_usuario = utils.stringToNumber(globals.gbl_con_usuario.toString())	
	if($actual != 0){
	    globals.gbl_descripcion = gbl_usu_to_usuarios.per_apelnom
	    habilita_campos()
	    habilita_btn()
	    cargar_itm_permiso()
	    elements.codigo_usuario.requestFocus()
		application.updateUI()
	}else{		
		globals.gbl_descripcion = ''		
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"2DD1F1F4-EC0B-4BE6-9115-243B9DDFA01B"}
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
	globals.gbl_con_usuario = legajo
	globals.gbl_num_usuario = utils.stringToNumber(globals.gbl_con_usuario.toString())	
	if($actual != 0){
	    globals.gbl_descripcion = gbl_usu_to_usuarios.per_apelnom	
		habilita_campos()
		habilita_btn()
		cargar_itm_permiso()
		elements.codigo_usuario.requestFocus()
		application.updateUI()
	}else{	    
		globals.gbl_descripcion = ''
	}	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"9E730353-B1D9-4C8A-8E81-6C0EE053E317"}
 * @AllowToRunInFind
 */
function onAction_buscar(event) {
	globals.gbl_selec      = 0 
    globals.gbl_con_indice = 1	
    var win = application.createWindow("Busca_permiso_carpetas",JSWindow.MODAL_DIALOG)	
    win.title= 'Buscar Permiso de Carpetas'
    win.resizable = false
    win.show(forms.frm_tab_permisos_carpetas)
	win.destroy()
	if (globals.gbl_selec != 0){		
		globals.gbl_num_usuario = utils.stringToNumber(globals.gbl_con_usuario.toString())	
	    globals.gbl_descripcion = gbl_usu_to_usuarios.per_apelnom		
		deshabilita_btn()
	    habilita_campos()
		cargar_itm_permiso()
		elements.codigo_usuario.requestFocus()
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"C3862B6F-7D8D-47C7-9C87-82F99DB8D99E"}
 */
function onAction_imprimir(event) {
	foundset.clear()
	foundset.loadAllRecords()
	globals.printRoutine('prn_permiso_carpetas', true, 1)
}