/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"9E663B7C-8B32-4798-8E2E-447246713697",variableType:4}
 */
var frm_es_nuevo = 0;
/**
 * @properties={typeid:35,uuid:"994BB74F-8551-4557-BCD3-AEE5C28F352A",variableType:-4}
 */
var frm_ds2 = new Array()
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"BF31BD4C-AC4B-4388-9230-86642448A1DC"}
 */
var frm_descripcion_solucion = 'Todas'

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"0E83FD62-C8E1-4F57-8261-195B59082983"}
 */
function onShow_inicio(firstShow, event) {
	elements.lbl_titulo.text = 'Tratamiento de Perfiles'
		elements.items_perfil.setTabEnabledAt(1,false)
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"A8E3B020-F6B5-4065-B946-5303C9E88C5E"}
 * @AllowToRunInFind
 */
function onAction_controlar_codigo(event) {		
	if(globals.gbl_codigo_perfil != ''){
		var encontro = tbl_perfil_to_tbl_perfil.getSize()
		if (frm_es_nuevo == 0){			
		    if (encontro == 0){   		
		    	globals.DIALOGS.showErrorDialog('Error','Código inexistente', 'Ok')
		        habilita_btn()
				inicializa_campos()	
				deshabilita_campos()
				inicializa_tabla()
				elements.items_perfil.setTabEnabledAt(1,true)
		        elements.codigo_perfil.requestFocus()
		    }else{
		    	foundset.loadRecords(tbl_perfil_to_tbl_perfil)
		    	globals.gbl_codigo_perfil = codigo
			    globals.gbl_descripcion   = descripcion			        				
				deshabilita_btn()
			    habilita_campos()
				cargar_itm_perfil()		        
				elements.items_perfil.setTabEnabledAt(1,true)
				elements.codigo_solucion.requestFocus()
		    }
		}else{
			if (encontro != 0){   		
				globals.DIALOGS.showErrorDialog('Error','Código inexistente', 'Ok')
				inicializa_campos()
				deshabilita_campos()
				inicializa_tabla()
			    elements.codigo_perfil.requestFocus()
			}else{
				deshabilita_btn()
				habilita_campos()
				cargar_itm_perfil() 
				elements.items_perfil.setTabEnabledAt(1,true)
				elements.descripcion.requestFocus()
			}
		}
	}
}
/** 
 * @param event
 *
 * @properties={typeid:24,uuid:"B2C08081-BC28-41EB-BFBC-5CD6C3C527DF"}
 */
function onAction_controla_codigo_solucion(event) {
	if(globals.gbl_codigo_solucion != '' && globals.gbl_codigo_solucion != null){
		var encontro = tbl_solucion_to_tbl_solucion.getSize()
		if (encontro == 0){   		
			globals.DIALOGS.showErrorDialog('Error','Código inexistente', 'Ok')
		    globals.gbl_codigo_solucion = ''
			frm_descripcion_solucion = ''
		    elements.codigo_solucion.requestFocus()
		}else{
			frm_descripcion_solucion = tbl_solucion_to_tbl_solucion.descripcion			
			if (frm_es_nuevo == 1){
			    elements.bt_buscarc.enabled      =false
			    elements.codigo_solucion.enabled =false
			}			
			elements.codigo_solucion.requestFocus()
		}
	}else{
		globals.gbl_codigo_solucion = ''
		frm_descripcion_solucion = 'Todas'
	}
	deshabilita_btn()
	cargar_itm_perfil()
	elements.items_perfil.setTabEnabledAt(1,true)
}

/** 
 * @param event
 *
 * @properties={typeid:24,uuid:"D84118E7-7336-45F6-AF70-738813674779"}
 */
function onAction_buscar_solucion(event) {
	globals.gbl_selec = 0
    globals.gbl_con_indice = 1
	globals.gbl_solucion = ''
    var win = application.createWindow("Busca_solucion",JSWindow.MODAL_DIALOG)	
    win.title= 'Buscar Solución'
    win.resizable = false
    win.show(forms.frm_tab_soluciones)
	win.destroy()
	if (globals.gbl_selec != 0){
	    globals.gbl_codigo_solucion = globals.gbl_solucion
	    frm_descripcion_solucion = tbl_solucion_to_tbl_solucion.descripcion
	    elements.codigo_solucion.requestFocus()	
    }else{	    
        elements.codigo_solucion.requestFocus()	   	   
    }
    cargar_itm_perfil()
	globals.gbl_codigo_solucion = globals.gbl_solucion
	elements.items_perfil.setTabEnabledAt(1,true)
}
/**
 * @properties={typeid:24,uuid:"FA8700F4-2C3E-4762-94F4-BD06E36B2E4C"}
 */
function cargar_itm_perfil(){
	//if (globals.gbl_codigo_perfil != ''){
		var $Args
		var $SQL
		if (globals.gbl_codigo_solucion != '' && globals.gbl_codigo_solucion != null){
		    $SQL = "select tbl_solucion.descripcion solucion_desc, FORM.descripcion formulario_desc, ELEM.descripcion, "
		    	 +"tbl_solucion.codigo, case when FORM.descripcion is null then ' ' else FORM.codigo end cod_formulario, case when ELEM.descripcion is null then ' ' else ELEM.codigo end cod_elemento, "
				 +"PITM.visible, PITM.accesible " 
                 +"from tbl_solucion "			     
		         +"left join tbl_formulario FORM on tbl_solucion.codigo = FORM.codigo_solucion "
		         +"left join tbl_elemento   ELEM on tbl_solucion.codigo = ELEM.codigo_solucion and FORM.codigo = ELEM.codigo_formulario "
		         +"left join tbl_perfil_itm PITM on '"
				 + globals.gbl_codigo_perfil				 	         
				 +"' = PITM.codigo_perfil and tbl_solucion.codigo = PITM.codigo_solucion and "				 
				 +"case when FORM.descripcion is null then ' ' = PITM.codigo_formulario and case when ELEM.descripcion is null then ' ' = PITM.codigo_elemento else ELEM.codigo = PITM.codigo_elemento end "
                 +"else FORM.codigo = PITM.codigo_formulario and case when ELEM.descripcion is null then ' ' = PITM.codigo_elemento else ELEM.codigo = PITM.codigo_elemento end end "				 
				 
				 +"where tbl_solucion.codigo = '"
                 + globals.gbl_codigo_solucion        
				 +"' order by tbl_solucion.codigo asc, FORM.codigo asc, ELEM.codigo asc "
	    }else{
		    $SQL = "select tbl_solucion.descripcion solucion_desc, FORM.descripcion formulario_desc, ELEM.descripcion, " 
		         +"tbl_solucion.codigo, case when FORM.descripcion is null then ' ' else FORM.codigo end cod_formulario, case when ELEM.descripcion is null then ' ' else ELEM.codigo end cod_elemento, "
				 +"PITM.visible, PITM.accesible " +"from tbl_solucion "			     
			     +"left join tbl_formulario FORM on tbl_solucion.codigo = FORM.codigo_solucion "
			     +"left join tbl_elemento   ELEM on tbl_solucion.codigo = ELEM.codigo_solucion and FORM.codigo = ELEM.codigo_formulario "
			     +"left join tbl_perfil_itm PITM on '"
				 + globals.gbl_codigo_perfil
				 +"' = PITM.codigo_perfil and tbl_solucion.codigo = PITM.codigo_solucion and "				 
				 +"case when FORM.descripcion is null then ' ' = PITM.codigo_formulario and case when ELEM.descripcion is null then ' ' = PITM.codigo_elemento else ELEM.codigo = PITM.codigo_elemento end "
                 +"else FORM.codigo = PITM.codigo_formulario and case when ELEM.descripcion is null then ' ' = PITM.codigo_elemento else ELEM.codigo = PITM.codigo_elemento end end "				 
				 
                 +"order by PITM.codigo_perfil asc, tbl_solucion.codigo asc, FORM.codigo asc, ELEM.codigo asc "
	    }		
		/*if (globals.gbl_codigo_solucion != '' && globals.gbl_codigo_solucion != null){
		    $SQL = "select * " 
                 +"from tbl_perfil_itm "
                 +"where codigo_perfil = '"
                 + globals.gbl_codigo_perfil
                 +"' and codigo_solucion = '"
                 + globals.gbl_codigo_solucion        
                 +"' order by codigo_perfil asc, codigo_solucion asc, codigo_formulario asc, codigo_elemento asc"
	    }else{
	    	$SQL = "select * " 
                 +"from tbl_perfil_itm "
                 +"where codigo_perfil = '"
                 + globals.gbl_codigo_perfil
                 +"' order by codigo_perfil asc, codigo_solucion asc, codigo_formulario asc, codigo_elemento asc"
	    }*/	    
        var $ds = databaseManager.getDataSetByQuery("desal", $SQL, $Args, -1);
        var $max = $ds.getMaxRowIndex()
		if ($max != 0){
		    frm_ds2 = databaseManager.createEmptyDataSet()		
		    frm_ds2.addColumn('visible',1,JSColumn.NUMBER)   
		    frm_ds2.addColumn('accesible',2,JSColumn.NUMBER)
		    frm_ds2.addColumn('solucion_descripcion',3,JSColumn.TEXT)
			frm_ds2.addColumn('solucion_codigo',4,JSColumn.TEXT)
   		    frm_ds2.addColumn('formulario_descripcion',5,JSColumn.TEXT)
			frm_ds2.addColumn('formulario_codigo',6,JSColumn.TEXT)
		    frm_ds2.addColumn('elemento_descripcion',7,JSColumn.TEXT)
			frm_ds2.addColumn('elemento_codigo',8,JSColumn.TEXT)
			var $visible        = 0
			var $accesible      = 0
			var $solucion       = ''
		    var $solucion_cod   = ''
			var $formulario     = ''
			var $formulario_cod = ''
			var $elemento       = ''
			var $elemento_cod   = ''
			for (var i= 1; i <= $max; i++){
				$solucion       = $ds.getValue(i,1)
				$formulario     = $ds.getValue(i,2)
				$elemento       = $ds.getValue(i,3)
				$solucion_cod   = $ds.getValue(i,4)
				$formulario_cod = $ds.getValue(i,5)
				$elemento_cod   = $ds.getValue(i,6)
				$visible        = $ds.getValue(i,7)
				$accesible      = $ds.getValue(i,8)
				
			    frm_ds2.addRow([$visible, $accesible, $solucion, $solucion_cod, $formulario, $formulario_cod, $elemento, $elemento_cod])
			}
			
			var $tipos = [JSColumn.NUMBER, JSColumn.NUMBER, JSColumn.TEXT, JSColumn.TEXT, JSColumn.TEXT, JSColumn.TEXT, JSColumn.TEXT, JSColumn.TEXT]
            var $frm = solutionModel.getForm('frm_perfil_itm')
            $frm.dataSource = frm_ds2.createDataSource('Ds_Aux_perfil', $tipos)
            forms.frm_perfil_itm.controller.recreateUI()			
            forms.frm_perfil_itm.onLoad_inicio()			
		}
        elements.items_perfil.setTabEnabledAt(1,false)
	//}
}
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"5376BC08-E1C2-4A98-B9BF-025C53C658C0"}
 */
function onAction_alta(event) {
	inicializa_campos()
	frm_es_nuevo = 1
	habilita_campos()
	deshabilita_btn()
	inicializa_tabla()
	elements.codigo_perfil.requestFocus()	
}
/**
 * @properties={typeid:24,uuid:"C5AE6537-1095-4C6E-AB11-10A3535305DE"}
 */
function inicializa_tabla(){
	forms.frm_perfil_itm.foundset.deleteAllRecords()	
    forms.frm_perfil_itm.controller.recreateUI()			
    forms.frm_perfil_itm.onLoad_inicio()
	elements.items_perfil.setTabEnabledAt(1,false)
}
/**
 * @properties={typeid:24,uuid:"D35E3981-CD7B-420E-8E69-011C292EDA66"}
 */
function inicializa_campos(){
	globals.gbl_codigo_perfil = ''
	globals.gbl_descripcion   = ''
	globals.gbl_codigo_solucion = '' 
	frm_descripcion_solucion = 'Todas'	
	
	frm_es_nuevo = 0
	controller.loadRecords()
	foundset.sort('codigo asc')
}

/**
 * @properties={typeid:24,uuid:"8146B89D-5121-4B83-B8C1-8608153EE177"}
 */
function habilita_campos(){
	elements.codigo_perfil.enabled   =true
    elements.descripcion.enabled     =true
	elements.codigo_solucion.enabled =true
	elements.bt_buscarc.enabled      =true
	elements.items_perfil.setTabEnabledAt(1,true)
	frm_descripcion_solucion         ='Todas'
}

/**
 * @properties={typeid:24,uuid:"9BC4059D-4CBC-4CC4-8FF0-18DC06BAB658"}
 */
function deshabilita_campos(){	
	elements.codigo_perfil.enabled   =true
    elements.descripcion.enabled     =false
	elements.codigo_solucion.enabled =false
	elements.bt_buscarc.enabled      =false	
}

/**
 * @properties={typeid:24,uuid:"32BDE043-3B7E-4751-81AD-F46DBAAA0D71"}
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
 * @properties={typeid:24,uuid:"248D3D0A-516E-4831-8188-957599FE26A6"}
 */
function habilita_btn(){	
	elements.bt_anterior.enabled =true
    elements.bt_siguiente.enabled=true
	elements.bt_borrar.enabled   =false
    elements.bt_nuevo.enabled    =true
    elements.bt_buscar.enabled   =true
    elements.bt_imprimir.enabled =true
    elements.bt_grabar.enabled   =false    
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"35D55818-846C-4144-82BA-C16AE6E380C3"}
 */
function onAction_cancelar(event) {
	if ((globals.gbl_codigo_perfil != codigo || globals.gbl_descripcion != descripcion 
		)
		&& globals.gbl_codigo_perfil != ''){
		var $ok = globals.DIALOGS.showQuestionDialog('Confirmación','Perderá los cambios, Confirma ?','Si', 'No')
		if ($ok=='Si'){
			inicializa_campos()
			deshabilita_campos()
			habilita_btn()
			inicializa_tabla()
		}
	}else{		
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
 * @properties={typeid:24,uuid:"033F7F38-215E-4FFD-8A20-679FD1ADBFBD"}
 * @AllowToRunInFind
 */
function onAction_grabar(event) {
	if (globals.gbl_codigo_perfil == ''|| globals.gbl_descripcion == ''){		
		globals.DIALOGS.showWarningDialog('Atención','No se puede Grabar, faltan datos', 'Ok')
	    elements.codigo_perfil.requestFocus()
	}else{
		if (frm_es_nuevo == 1){
			foundset.newRecord()
		}
		codigo         = globals.gbl_codigo_perfil
		descripcion    = globals.gbl_descripcion				
		databaseManager.saveData()
		// Graba items
		var $fs = databaseManager.getFoundSet('desal','tbl_perfil_itm')
		var $max = frm_ds2.getMaxRowIndex()
		if ($max != 0){
			for (var i = 1; i <= $max; i ++){				
				
				$fs.find()
				$fs.codigo_perfil     = globals.gbl_codigo_perfil
				$fs.codigo_solucion   = frm_ds2.getValue(i,4)
				$fs.codigo_formulario = frm_ds2.getValue(i,6)
				$fs.codigo_elemento = frm_ds2.getValue(i,8)				
				$fs.search()
				
				if ($fs.getSize() < 1){
					$fs.newRecord()				
				}
				$fs.codigo_perfil     = globals.gbl_codigo_perfil
				$fs.codigo_solucion   = frm_ds2.getValue(i,4)				
				
				$fs.codigo_formulario = frm_ds2.getValue(i,6)
			    $fs.codigo_elemento = frm_ds2.getValue(i,8)
				
				if (frm_ds2.getValue(i,2) == null){
					$fs.accesible = 0
				}else{
				    $fs.accesible         = frm_ds2.getValue(i,2)
				}
				if (frm_ds2.getValue(i,1) == null){
					$fs.visible = 0
				}else{
				    $fs.visible           = frm_ds2.getValue(i,1)
				}
				databaseManager.saveData()			
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
 * @properties={typeid:24,uuid:"9EA3ED48-74A6-423A-A51D-C8B21C08093E"}
 * @AllowToRunInFind
 */
function onAction_borrar(event) {
	var encontro = tbl_perfil_to_tbl_perfil.getSize()
	if (encontro != 0){
		var $ok = globals.DIALOGS.showQuestionDialog('Confirmación','Se borrará el registro, Confirma ?','Si', 'No')
		if ($ok=='Si'){		
			foundset.deleteRecord()
			//Borra Items
			var $fs = databaseManager.getFoundSet('desal','tbl_perfil_itm')
			$fs.find()
			$fs.codigo_perfil = globals.gbl_codigo_perfil
			$fs.search()
			$fs.deleteAllRecords()
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
 * @properties={typeid:24,uuid:"74579148-6E68-4F19-A322-345583C711C8"}
 */
function onAction_atras(event) {
	frm_es_nuevo = 0
	var $ultimo = databaseManager.getFoundSetCount(foundset)
	var $actual = foundset.getSelectedIndex()
	if ($actual == 1){
		foundset.setSelectedIndex($ultimo)
	}else{
	   foundset.setSelectedIndex($actual -1)
	}
	globals.gbl_codigo_perfil = codigo
	globals.gbl_descripcion   = descripcion	
	habilita_campos()
	habilita_btn()
	cargar_itm_perfil()
	elements.codigo_perfil.requestFocus()	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"370614C5-B36E-4F78-A9AC-0D4EAB138E86"}
 * @AllowToRunInFind
 */
function onAction_adelante(event) {
	frm_es_nuevo = 0
	var $ultimo = databaseManager.getFoundSetCount(foundset)
	var $actual = foundset.getSelectedIndex()
	if ($actual == $ultimo){
		foundset.setSelectedIndex(1)		
	}else{
		foundset.setSelectedIndex($actual + 1)
	}
	globals.gbl_codigo_perfil = codigo
	globals.gbl_descripcion   = descripcion	
	habilita_campos()
	habilita_btn()
	cargar_itm_perfil()
	elements.codigo_perfil.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"432FBD34-2599-451E-A383-DBDEC1EC81EF"}
 * @AllowToRunInFind
 */
function onAction_buscar(event) {
	globals.gbl_selec      = 0
    globals.gbl_con_indice = 1
	globals.gbl_perfil     = ''
    var win = application.createWindow("Busca_perfil",JSWindow.MODAL_DIALOG)	
    win.title= 'Buscar Perfíl'
    win.resizable = false
    win.show(forms.frm_tab_perfiles)
	win.destroy()
	if (globals.gbl_selec != 0){		
		globals.gbl_codigo_perfil = globals.gbl_perfil
		foundset.loadRecords(tbl_perfil_to_tbl_perfil)
	    globals.gbl_codigo_perfil   = codigo
	    globals.gbl_descripcion     = descripcion 
		globals.gbl_codigo_solucion = ''		
		deshabilita_btn()
	    habilita_campos()
		cargar_itm_perfil()
		elements.codigo_perfil.requestFocus()
	}
}
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"10D52307-F1E9-468D-97FA-498E8F481F05"}
 */
function onAction_imprimir(event) {
	globals.printRoutine('prn_perfil', true, 0)
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"3874F5BC-B919-4B08-B6DA-D87D98ABE905"}
 */
function onAction_descripcion(event) {
	elements.codigo_solucion.requestFocus()
}

/**
 * Handle hide window.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"AE972038-F50B-43D8-91A2-BC1C1A5BE619"}
 */
function onHide_cerrar(event) {
	if ((globals.gbl_codigo_perfil != codigo || globals.gbl_descripcion != descripcion)
	    && globals.gbl_codigo_perfil != ''){
	    var $ok = globals.DIALOGS.showQuestionDialog('Confirmación','Perderá los cambios, Confirma ?','Si', 'No')
		if ($ok=='Si'){	 
  		    inicializa_campos()
		    deshabilita_campos()
		    habilita_btn()
		    inicializa_tabla()
		    return true
	    }else{
		    return false
	    }
    }else{		
	    inicializa_campos()
	    deshabilita_campos()
        habilita_btn()
	    inicializa_tabla()
	    return true
    }	
}
