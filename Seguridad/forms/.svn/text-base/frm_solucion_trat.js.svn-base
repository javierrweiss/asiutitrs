
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"2944B468-0CFA-4E9B-BCAE-E0D6D5FD042C"}
 */
var frm_descripcion_solucion = '';
/**
 * @properties={typeid:35,uuid:"EA66B938-6B77-4956-B985-8BC0D182D56D",variableType:-4}
 */
var frm_ds2 = new Array();
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"14F1AAF3-4B07-4C3C-81B3-004943666BCD",variableType:4}
 */
var frm_encontro = 0;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"BF445302-4988-431D-B5A8-3C3F717569EB"}
 */
var frm_descripcion_formulario = '';


/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"75CC3219-1B6C-499A-9BE5-A42028A663A5"}
 */
var frm_descripcion_elemento = '';

/** 
 * @param firstShow
 * @param event
 *
 * @properties={typeid:24,uuid:"DCE81486-B0BA-4892-BF56-5AD2E723A225"}
 */
function onShow_inicio(firstShow, event) {
	globals.gbl_codigo_formulario = ''
	frm_descripcion_formulario    = 'NADA'
	globals.gbl_codigo_elemento   = ''
	frm_descripcion_elemento      = 'NADA'
	foundset.clear()
}

/**
 * 
 * @param event
 *
 * @properties={typeid:24,uuid:"1FA0D8C6-2170-4B1B-95EB-A4AF3FAE2074"}
 */
function onAction_controla_codigo_solucion(event) {
	if(globals.gbl_codigo_solucion != ''){
		var encontro = tbl_solucion_to_tbl_solucion.getSize()
		if (encontro == 0){   		
			globals.DIALOGS.showErrorDialog('Error','Código inexistente', 'Ok')		    	
		    elements.codigo_solucion.requestFocus()
			globals.gbl_codigo_solucion = ''			
		}else{
			frm_descripcion_solucion = tbl_solucion_to_tbl_solucion.descripcion 
			globals.gbl_codigo_formulario = ''
			frm_descripcion_formulario    = 'NADA'
			globals.gbl_codigo_elemento   = ''
			frm_descripcion_elemento      = 'NADA'
			elements.codigo_formulario.requestFocus()
		}
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"62F5B033-D77E-44B7-96A4-AC1D2B7FBA6D"}
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
	    elements.codigo_formulario.requestFocus()	
    }else{
        elements.codigo_solucion.requestFocus()	   	   
    }
	globals.gbl_codigo_formulario = ''
	frm_descripcion_formulario    = 'NADA'
	globals.gbl_codigo_elemento   = ''
	frm_descripcion_elemento      = 'NADA'
}

/**
 * 
 * @param event
 *
 * @properties={typeid:24,uuid:"92A6F377-8BA1-4923-8358-75C377E9FEF8"}
 */
function onAction_controla_codigo_formulario(event) {
	if(globals.gbl_codigo_formulario != ''){
		var encontro = tbl_formulario_to_tbl_formulario.getSize()
		if (encontro == 0){   		
			globals.DIALOGS.showErrorDialog('Error','Código inexistente', 'Ok')
		    globals.gbl_codigo_formulario = ''
		    elements.codigo_formulario.requestFocus()
		}else{
			frm_descripcion_formulario  = tbl_formulario_to_tbl_formulario.descripcion			
			frm_descripcion_elemento    = 'NADA'
			globals.gbl_codigo_elemento = ''
			elements.codigo_elemento.requestFocus()		    
		}
	}else{
		frm_descripcion_formulario = 'NADA'
	}
}

/**
 * 
 * @param event
 *
 * @properties={typeid:24,uuid:"AAF413F0-C2F1-42C1-94C0-2441260300EB"}
 */
function onAction_buscar_formulario(event) {
	globals.gbl_selec = 0
    globals.gbl_con_indice = 1
	globals.gbl_solucion = globals.gbl_codigo_solucion
	globals.gbl_formulario = ''
    var win = application.createWindow("Busca_formulario",JSWindow.MODAL_DIALOG)	
    win.title= 'Buscar Formulario'
    win.resizable = false
    win.show(forms.frm_tab_formularios)
	win.destroy()
	if (globals.gbl_selec != 0){
		globals.gbl_codigo_solucion   = forms.frm_scr_formulario.foundset.codigo_solucion
		globals.gbl_codigo_formulario = forms.frm_scr_formulario.foundset.codigo	    
	    frm_descripcion_solucion      = tbl_solucion_to_tbl_solucion.descripcion
	    frm_descripcion_formulario    = tbl_formulario_to_tbl_formulario.descripcion
	    elements.codigo_elemento.requestFocus()
		frm_descripcion_elemento      = 'NADA'
		globals.gbl_codigo_elemento   = ''
    }else{
        elements.codigo_formulario.requestFocus()
		frm_descripcion_formulario    = 'NADA'
    	globals.gbl_codigo_formulario = ''
    }    	
}

/**
 * 
 * @param event
 *
 * @properties={typeid:24,uuid:"B652BC04-2957-4267-9983-54B73964FAD1"}
 */
function onAction_controlar_codigo_elemento(event) {
	if(globals.gbl_codigo_elemento != ''&& globals.gbl_codigo_elemento != null){
		var encontro = tbl_elemento_to_tbl_elemento.getSize()		
		if (encontro == 0){   		
			globals.DIALOGS.showErrorDialog('Error','Código inexistente', 'Ok')
		    globals.gbl_codigo_elemento = ''
		    frm_descripcion_elemento    = 'NADA'				
		    elements.codigo_elemento.requestFocus()
		}else{  	
		 	globals.gbl_codigo_solucion   = tbl_elemento_to_tbl_elemento.codigo_solucion
			globals.gbl_codigo_formulario = tbl_elemento_to_tbl_elemento.codigo_formulario				
			globals.gbl_codigo_elemento   = forms.frm_scr_elemento.foundset.codigo
			frm_descripcion_solucion      = tbl_solucion_to_tbl_solucion.descripcion
			frm_descripcion_formulario    = tbl_formulario_to_tbl_formulario.descripcion
			frm_descripcion_elemento      = tbl_elemento_to_tbl_elemento.descripcion
			elements.bt_procesar.requestFocus()
		}		
	}
}

/**
 * @properties={typeid:24,uuid:"66A3B84C-103D-4B63-9623-E4FF1BD95E4D"}
 */
function onAction_buscar_elemento(){
	globals.gbl_selec      = 0
    globals.gbl_con_indice = 1
	globals.gbl_solucion   = ''
	globals.gbl_formulario = ''
	globals.gbl_elemento = ''
	var win = application.createWindow("Busca_elemento",JSWindow.MODAL_DIALOG)	
    win.title= 'Buscar Elemento'
    win.resizable = false
    win.show(forms.frm_tab_elementos)
	win.destroy()
	if (globals.gbl_selec != 0){		
		globals.gbl_codigo_solucion   = forms.frm_scr_elemento.foundset.codigo_solucion
		globals.gbl_codigo_formulario = forms.frm_scr_elemento.foundset.codigo_formulario
		globals.gbl_codigo_elemento   = forms.frm_scr_elemento.foundset.codigo				
		frm_descripcion_solucion      = tbl_solucion_to_tbl_solucion.descripcion
		frm_descripcion_formulario    = tbl_formulario_to_tbl_formulario.descripcion
		frm_descripcion_elemento      = tbl_elemento_to_tbl_elemento.descripcion
		elements.codigo_elemento.requestFocus()
	}
}

/**
 * @properties={typeid:24,uuid:"DC072206-6745-42B2-993E-BBCAA101BDF8"}
 */
function inicializa_campos(){
	globals.gbl_codigo_solucion   = ''	
	frm_descripcion_solucion      = ''
	frm_descripcion_formulario    = 'NADA'
	frm_descripcion_elemento      = 'NADA'
	globals.gbl_codigo_formulario = ''
	globals.gbl_codigo_elemento   = ''	
	frm_encontro                  = 0
	elements.bt_grabar.enabled    = false
}

/**
 * 
 * @param event
 *
 * @properties={typeid:24,uuid:"081A97E3-62CA-41AD-A0DC-55768259CDD1"}
 */
function onAction_cancelar(event) {
	if (frm_encontro == 1){
		var $ok = globals.DIALOGS.showQuestionDialog('Confirmación','Perderá los cambios, Confirma ?','Si', 'No')
		if ($ok=='Si'){
			inicializa_campos()	
			forms.frm_solucion_trat_itm.foundset.clear()
		}
	}else{
		inicializa_campos()		
	}		
}

/**
 * 
 * @param event
 *
 * @properties={typeid:24,uuid:"65419EF9-3DD9-49C9-B26C-57F83B3176AA"}
 * @AllowToRunInFind
 */
function onAction_grabar(event) {
	if (frm_encontro == 0){		
		globals.DIALOGS.showWarningDialog('Atención','No se puede Grabar, faltan datos', 'Ok')
	    elements.codigo_solucion.requestFocus()
	}else{
		var $max = forms.frm_solucion_trat_itm.foundset.getSize()
		var $aux_solucion_codigo   = ''
		var $aux_formulario_codigo = ''
		var $aux_elemento_codigo   = ''
		var $aux_accesible         = false
		var $aux_visible           = false		 
		for (var i= 1; i <= $max; i++){
			forms.frm_solucion_trat_itm.foundset.setSelectedIndex(i)
			if(forms.frm_solucion_trat_itm.foundset.solucion_codigo == null || forms.frm_solucion_trat_itm.foundset.solucion_codigo == ''){
				$aux_solucion_codigo = ' '
			}else{
				$aux_solucion_codigo = forms.frm_solucion_trat_itm.foundset.solucion_codigo 
			}
			
			if(forms.frm_solucion_trat_itm.foundset.formulario_codigo == null || forms.frm_solucion_trat_itm.foundset.formulario_codigo == ''){
				$aux_formulario_codigo = ' '
			}else{
				$aux_formulario_codigo = forms.frm_solucion_trat_itm.foundset.formulario_codigo 
			}
			
			if(forms.frm_solucion_trat_itm.foundset.elemento_codigo == null || forms.frm_solucion_trat_itm.foundset.elemento_codigo == ''){
				$aux_elemento_codigo = ' '
			}else{
				$aux_elemento_codigo = forms.frm_solucion_trat_itm.foundset.elemento_codigo 
			}
			
			if(forms.frm_solucion_trat_itm.foundset.accesible == null){
				$aux_accesible = false
			}else{
				$aux_accesible = forms.frm_solucion_trat_itm.foundset.accesible 
			}
			
			if(forms.frm_solucion_trat_itm.foundset.visible == null){
				$aux_visible = false
			}else{
				$aux_visible = forms.frm_solucion_trat_itm.foundset.visible 
			}
			foundset.find()
			codigo_perfil     = forms.frm_solucion_trat_itm.foundset.perfil_codigo
			codigo_solucion   = $aux_solucion_codigo
			codigo_formulario = $aux_formulario_codigo
			codigo_elemento   = $aux_elemento_codigo
			foundset.search()
			
			accesible         = $aux_accesible			
			visible           = $aux_visible
			var $encontro = foundset.getSize()  
			if($encontro == 0){
				foundset.newRecord()
				codigo_perfil     = forms.frm_solucion_trat_itm.foundset.perfil_codigo
				codigo_solucion   = $aux_solucion_codigo
				codigo_formulario = $aux_formulario_codigo
				codigo_elemento   = $aux_elemento_codigo			
				accesible         = $aux_accesible			
				visible           = $aux_visible
											   
			}
			databaseManager.saveData(foundset)
		}				
		inicializa_campos()
		forms.frm_solucion_trat_itm.foundset.clear()
	}
}

/**
 * 
 * @param event
 *
 * @properties={typeid:24,uuid:"8DBA95A1-3E94-42BE-94C7-2DCF44773CDA"}
 */
function onHide_cerrar(event) {
	if (frm_encontro == 1){		
		var $ok = globals.DIALOGS.showQuestionDialog('Confirmación','Perderá los cambios, Confirma ?','Si', 'No')
		if ($ok=='Si'){	 
		    inicializa_campos()
			return true
	    }else{
	    	return false
	    }
    }else{
	    inicializa_campos()
	    return true
    }		
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"FBDF2B47-BD39-43C9-818B-948816F7B187"}
 */
function onAction_procesar(event) {
	frm_encontro = 0
	if (globals.gbl_codigo_solucion == null || globals.gbl_codigo_solucion ==''){
		globals.DIALOGS.showWarningDialog('Atención','Debe ingresar un código de Solución', 'Ok')
		elements.bt_grabar.enabled = false
    }else{
    	armar_proceso()
		if(frm_encontro == 1){
    	    elements.bt_grabar.enabled = true
		}else{
			inicializa_campos()
		}
    }
}

/**
 * @properties={typeid:24,uuid:"FEF9CA4D-1563-43D2-A7B0-4032BD65CE64"}
 */
function armar_proceso(){
	var $Args
	var $SQL			 
	  $SQL = "select tbl_perfil.codigo , tbl_perfil.descripcion, PERI.visible, PERI.accesible, PERI.codigo_solucion, PERI.codigo_formulario, PERI.codigo_elemento " 
	  	 +"from tbl_perfil "
	     +"left join tbl_perfil_itm PERI on PERI.codigo_perfil = tbl_perfil.codigo and PERI.codigo_solucion = '"
		 + globals.gbl_codigo_solucion
		 +"' and PERI.codigo_formulario = '"		
		 if(globals.gbl_codigo_formulario != null && globals.gbl_codigo_formulario != ''){
  		 	 $SQL= $SQL+globals.gbl_codigo_formulario
		 }else{
			 $SQL= $SQL+" "
		 }		 
		 $SQL= $SQL+"' and PERI.codigo_elemento = '"
		 
		 if(globals.gbl_codigo_elemento != null && globals.gbl_codigo_elemento != ''){
  		 	 $SQL= $SQL+globals.gbl_codigo_elemento
		 }else{
			 $SQL= $SQL+" "
		 }		 
         $SQL=$SQL+"' order by codigo asc"
    	 
    var $ds = databaseManager.getDataSetByQuery("desal", $SQL, $Args, -1);
    var $max = $ds.getMaxRowIndex()
	if ($max != 0){
		frm_encontro = 1
	    frm_ds2 = databaseManager.createEmptyDataSet()		
	    frm_ds2.addColumn('visible',1,JSColumn.NUMBER)   
	    frm_ds2.addColumn('accesible',2,JSColumn.NUMBER)
	    frm_ds2.addColumn('perfil_descripcion',3,JSColumn.TEXT)
		frm_ds2.addColumn('perfil_codigo',4,JSColumn.TEXT)	
		frm_ds2.addColumn('Solucion_codigo',5,JSColumn.TEXT)
		frm_ds2.addColumn('formulario_codigo',6,JSColumn.TEXT)
	    frm_ds2.addColumn('elemento_codigo',7,JSColumn.TEXT)		
		var $visible        = 0
		var $accesible      = 0		
	    var $solucion_cod   = ''		
		var $formulario_cod = ''		
		var $elemento_cod   = ''
		var $perfil         = ''
		var $perfil_cod     = ''
		for (var i= 1; i <= $max; i++){
			$perfil_cod     = $ds.getValue(i,2)
			$perfil         = $ds.getValue(i,1)
			$accesible      = $ds.getValue(i,3)
			$visible        = $ds.getValue(i,4)
			$solucion_cod   = $ds.getValue(i,5)
			if($solucion_cod == null){
				$solucion_cod = globals.gbl_codigo_solucion			
			}
			$formulario_cod = $ds.getValue(i,6)
			if($formulario_cod == null){
				$formulario_cod = globals.gbl_codigo_formulario			
			}
			$elemento_cod   = $ds.getValue(i,7)			
			if($elemento_cod == null){
				$elemento_cod = globals.gbl_codigo_elemento		
			}
		    frm_ds2.addRow([$visible, $accesible, $perfil_cod, $perfil, $solucion_cod, $formulario_cod, $elemento_cod])
		}
		
		var $tipos = [JSColumn.NUMBER, JSColumn.NUMBER, JSColumn.TEXT, JSColumn.TEXT, JSColumn.TEXT, JSColumn.TEXT, JSColumn.TEXT]
        var $frm = solutionModel.getForm('frm_solucion_trat_itm')
        $frm.dataSource = frm_ds2.createDataSource('Ds_Aux_solucion_trat', $tipos)
        forms.frm_solucion_trat_itm.controller.recreateUI()			
        forms.frm_solucion_trat_itm.onLoad_inicio()			
	}else{
		globals.DIALOGS.showWarningDialog('Atención','No hay datos para procesar', 'Ok')
		 frm_encontro = 0
	}   	
}
