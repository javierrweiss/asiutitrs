/**
 * @properties={typeid:35,uuid:"BC0A0E3B-EF6B-426B-8BB1-16137A89F8DE",variableType:-4}
 */
var frm_catalogo = null;
/**
 * @properties={typeid:35,uuid:"A31F6731-3A4F-4963-BD87-3B146A465A6F",variableType:-4}
 */
var frm_prof_descripcion = null; 

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"5C6BA32D-DF8C-4D5D-AAF4-BFA9983D733B"}
 */
var frm_con_val_mon = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"E5DFEB75-3628-403C-93AC-CC901858E602"}
 */
var frm_nome_descripcion = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"98C1C0A9-7CB5-4361-A004-3B0D3278FF33"}
 */
var frm_espe_descripcion = null;

/**
 * @properties={typeid:35,uuid:"6DDD3726-0E6C-4AEF-A21D-47045C0A94F7",variableType:-4}
 */
var frm_obra_descripcion = null;

/**
 * @properties={typeid:35,uuid:"F8AE45F1-191F-46BE-8D30-1764FCBED817",variableType:-4}
 */
var frm_grup_nom_descripcion = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"F8B34EDA-3B58-445B-9475-815BAF2DFF21",variableType:4}
 */
var frm_es_nuevo = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"186CC1FE-F9D0-4631-9EC4-DF6844CAB401",variableType:4}
 */
var frm_error = 0;

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"AC3816A1-6784-49D2-81F3-3B546316D936"}
 */
function onShow_inicio(firstShow, event) {
	elements.lbl_titulo.text = 'Consultas de Convenios Profesionales'	
	application.updateUI()
	inicializa_campos()
}

/**
 * @AllowToRunInFind
 * @param event
 *
 * @properties={typeid:24,uuid:"926BC8B4-7078-4377-B2A0-129FE1689E24"}
 */
function controlar_profesional(event){
	frm_error = 0
	if(globals.gbl_con_profesional != '' && globals.gbl_con_profesional != 'TODOS'){
		// identifica si el campo es numérico o alfanumerico
		   var largo = globals.gbl_con_profesional.length;
		   var esnumero = true;
		   for (var i= 0;i<largo && esnumero == true; i++){
	     		if (globals.gbl_con_profesional.charCodeAt(i)< 48 || globals.gbl_con_profesional.charCodeAt(i) > 57){
			    	esnumero = false
		    	}
		   }
		   if (esnumero){
	    	   if(largo>6){
	    		   //muestra mensaje de "dialogo"				   
				   globals.DIALOGS.showErrorDialog('Error','Código inexistente', 'Ok')
				   elements.con_profesional.requestFocus()
				   frm_error = 1
		   	   }else{
		   		   globals.gbl_profesional = utils.stringToNumber(globals.gbl_con_profesional.toString())	   		
				   var $size = gbl_prof_to_prof.getSize()
				   if (globals.gbl_catalogo == 'cirendsa'){
					   $size = gbl_prof_to_prof_cirendsa.getSize()
				   }					   
		   		   if ($size < 1){		   	   
				      frm_error = 1				       
					   globals.DIALOGS.showErrorDialog('Error','Código inexistente', 'Ok')
				       globals.gbl_con_profesional = ''
				       globals.gbl_profesional     = 0
					   frm_prof_descripcion        = ''
				   	   elements.con_profesional.requestFocus()
				   }else {
				   	   frm_prof_descripcion = gbl_prof_to_prof.prof2_2
				   	   if (globals.gbl_catalogo == 'cirendsa'){
				   	       frm_prof_descripcion = gbl_prof_to_prof_cirendsa.prof2_2
				   	   }				   	   
				   	   elements.con_especialidad.requestFocus()					    
				   }		
		   	   }
	       }else{
	    	   globals.gbl_con_indice = 1	       	   
			   if(globals.gbl_con_profesional == 'TODOS'){
						globals.gbl_con_profesional = ' '
			   }
			   globals.gbl_con_busca = globals.gbl_con_profesional
			   var win = application.createWindow("Busca_profe",JSWindow.MODAL_DIALOG)	
			   win.title= 'Buscar Profesional'
			   win.resizable = false
			   win.show(forms.frm_tab_profesionales)
                     
			   if(forms.frm_scr_profesionales.foundset.codigo != 0){
					globals.gbl_con_profesional = forms.frm_scr_profesionales.foundset.codigo.toString()
					globals.gbl_profesional     = forms.frm_scr_profesionales.foundset.codigo
					frm_prof_descripcion        = forms.frm_scr_profesionales.foundset.descripcion
					elements.con_especialidad.requestFocus()					 
			   }else{
				    globals.gbl_con_profesional = 'TODOS'
				    globals.gbl_profesional     = 9999	
			   }
		   }	    
	}else{
		globals.gbl_con_profesional = 'TODOS'
	    globals.gbl_profesional     = 9999
		frm_prof_descripcion        = ''
	    elements.con_especialidad.requestFocus()					 
	}
}

/**
 * @properties={typeid:24,uuid:"F19ED16B-6837-4479-B10B-E4D21504CD59"}
 * @AllowToRunInFind
 */
function buscar_profesional(){
	var largo = globals.gbl_con_profesional.length;
    var esnumero = true;
    globals.gbl_con_indice = 1;
    if(globals.gbl_con_profesional == 'TODOS'){
    	globals.gbl_con_profesional = ' '
    }
    for (var i= 0;i<largo && esnumero == true; i++){
	   if (globals.gbl_con_profesional.charCodeAt(i)< 48 || globals.gbl_con_profesional.charCodeAt(i) > 57){
		   esnumero = false
	   }
    }
    if (esnumero){
	   globals.gbl_profesional = utils.stringToNumber(globals.gbl_con_profesional.valueOf())
	   globals.gbl_con_indice = 2
    }else{
	   globals.gbl_con_indice = 1
    }    
	
	globals.gbl_con_busca = globals.gbl_con_profesional
	var win = application.createWindow("Busca_profe",JSWindow.MODAL_DIALOG)	
	win.title= 'Buscar Profesional'
	win.resizable = false
	win.show(forms.frm_tab_profesionales)
        
	if(forms.frm_scr_profesionales.foundset.codigo != 0){
		globals.gbl_con_profesional = forms.frm_scr_profesionales.foundset.codigo.toString()
		globals.gbl_profesional     = forms.frm_scr_profesionales.foundset.codigo
		frm_prof_descripcion        = forms.frm_scr_profesionales.foundset.descripcion
		elements.con_especialidad.requestFocus()					 
	}else{
		globals.gbl_con_profesional = 'TODOS'
		globals.gbl_profesional     = 9999
		frm_prof_descripcion        = ''			
	}	
}

/**
 * @AllowToRunInFind
 * @param event
 *
 * @properties={typeid:24,uuid:"70940DC4-8B3B-4E00-85BA-412FF64A1B85"}
 */
function onAction_controla_especialidad(event) {
	if(globals.gbl_con_especial != '' && globals.gbl_con_especial != 'TODAS'){
		// identifica si el campo es numérico o alfanumerico
		var largo = globals.gbl_con_especial.length;
		var esnumero = true;
		for (var i= 0;i<largo && esnumero == true; i++){
	    	if (globals.gbl_con_especial.charCodeAt(i)< 48 || globals.gbl_con_especial.charCodeAt(i) > 57){
		   	    esnumero = false
		   	}
		}
		if (esnumero){
	        if(largo>6){
	    	   //muestra mensaje de "dialogo"				   
			    globals.DIALOGS.showErrorDialog('Error','Código inexistente', 'Ok')
			    elements.con_especialidad.requestFocus()
				frm_error = 1
		   	}else{
		   		globals.gbl_especialidad = utils.stringToNumber(globals.gbl_con_especial.toString())	   		
		   		if (gbl_espe_to_especialidad.getSize() < 1){
				    frm_error = 1				       
				    globals.DIALOGS.showErrorDialog('Error','Código inexistente', 'Ok')
				    globals.gbl_con_especial = ''
				    globals.gbl_especialidad = 0
					frm_espe_descripcion     = ''
				   	elements.con_especialidad.requestFocus()
				}else {
				   	frm_espe_descripcion = gbl_espe_to_especialidad.esp_descrip
				   	elements.con_cobertura.requestFocus()					 
				}		
		   	}
	    }else{
	        if(globals.gbl_con_especial == 'TODAS'){
			    globals.gbl_con_especial = ' '
			}
				globals.gbl_con_busca = globals.gbl_con_especial
				var win = application.createWindow("Busca_espe",JSWindow.MODAL_DIALOG)	
				win.title= 'Buscar Especialidad'
				win.resizable = false
				win.show(forms.frm_tab_especialidad)
                  
				if(forms.frm_scr_especialidad.foundset.esp_codi != 0){					
					globals.gbl_con_especial = forms.frm_scr_especialidad.foundset.esp_codi.toString()
					globals.gbl_especialidad = forms.frm_scr_especialidad.foundset.esp_codi
					frm_espe_descripcion     = forms.frm_scr_especialidad.foundset.esp_descrip
					elements.con_cobertura.requestFocus()
			    }else{
			    	globals.gbl_con_especial = 'TODAS'
					globals.gbl_especialidad = 9999
					frm_espe_descripcion     = ''
			    }
		    }	    
	    }else{
			globals.gbl_con_especial = 'TODAS'
		    globals.gbl_especialidad = 9999
			frm_espe_descripcion     = ''
		    elements.con_cobertura.requestFocus()					 
		}
    }
/**
 * @AllowToRunInFind
 * @param event
 *
 * @properties={typeid:24,uuid:"29EB214D-0FD4-434F-B606-B15DE66DDDF3"}
 */
function onAction_buscar_espacialidad(event) {
	var largo = globals.gbl_con_especial.length;
    var esnumero = true;
    globals.gbl_con_indice = 1;
    if(globals.gbl_con_especial == 'TODAS'){
    	globals.gbl_con_especial = ' '
    }
    for (var i= 0;i<largo && esnumero == true; i++){
	    if (globals.gbl_con_especial.charCodeAt(i)< 48 || globals.gbl_con_especial.charCodeAt(i) > 57){
		    esnumero = false
	    }
    }
    if (esnumero){
	    globals.gbl_especialidad = utils.stringToNumber(globals.gbl_con_especial.valueOf())
	    globals.gbl_con_indice = 2
    }else{
	    globals.gbl_con_indice = 1
    }
    globals.gbl_con_busca = globals.gbl_con_especial
	var win = application.createWindow("Busca_espe",JSWindow.MODAL_DIALOG)	
	win.title= 'Buscar Especialidad'
	win.resizable = false
	win.show(forms.frm_tab_especialidad)
        
	if(forms.frm_scr_especialidad.foundset.esp_codi != 0){
		globals.gbl_con_especial = forms.frm_scr_especialidad.foundset.esp_codi.toString()
		globals.gbl_especialidad = forms.frm_scr_especialidad.foundset.esp_codi
		frm_espe_descripcion     = forms.frm_scr_especialidad.foundset.esp_descrip
		elements.con_cobertura.requestFocus()
	}else{
		globals.gbl_con_especial = 'TODAS'
		globals.gbl_especialidad = 9999	
		frm_espe_descripcion     = ''
	}    
}
/**
 * @AllowToRunInFind
 * @param event
 *
 * @properties={typeid:24,uuid:"EC2EFF42-7640-4BE1-A74F-C81604EA9BBC"}
 */
function onAction_controlar_obra(event) {
	if (globals.gbl_con_cobertura != '' && globals.gbl_con_cobertura != 'TODAS'){
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
	    		globals.DIALOGS.showErrorDialog('Error','Código inexistente', 'Ok')
				elements.con_cobertura.requestFocus()
				frm_error = 1
		    }else{
		   	    globals.gbl_cobertura = utils.stringToNumber(globals.gbl_con_cobertura.valueOf())	   		
				var $size = gbl_cob_to_coberturas.getSize()
				if (globals.gbl_catalogo == 'cirendsa'){
				    $size = gbl_cob_to_coberturas_cirendsa.getSize()
				}					   
		   		if ($size < 1){			    
				    frm_error = 1
					globals.DIALOGS.showErrorDialog('Error','Código inexistente', 'Ok')
				   	globals.gbl_con_cobertura = ''
				   	globals.gbl_cobertura     = 0
					frm_obra_descripcion      = ''
				   	elements.con_cobertura.requestFocus()
				}else{
				    frm_obra_descripcion = gbl_cob_to_coberturas.obr_razonsoc
					if (globals.gbl_catalogo == 'cirendsa'){
					   frm_obra_descripcion = gbl_cob_to_coberturas_cirendsa.obr_razonsoc
					}					
				    elements.con_grupo.requestFocus()
				}
		    }
		}else{	    	   
	        globals.gbl_con_indice = 1
	    	if (globals.gbl_con_cobertura == 'TODAS'){
			    globals.gbl_con_cobertura = ' '
			}
			globals.gbl_con_busca = globals.gbl_con_cobertura
	       	var win = application.createWindow("Busca_cober",JSWindow.MODAL_DIALOG)	
			win.title= 'Buscar Obra Social'
			win.resizable = false
		    win.show(forms.frm_tab_coberturas_emp)
			if(forms.frm_scr_coberturas_emp.foundset.codigo != 0){
				globals.gbl_con_cobertura = forms.frm_scr_coberturas_emp.foundset.codigo.toString()
                globals.gbl_cobertura     = forms.frm_scr_coberturas_emp.foundset.codigo
				frm_obra_descripcion      = forms.frm_scr_coberturas_emp.foundset.descripcion
				elements.con_grupo.requestFocus()
			}else{
				globals.gbl_con_cobertura = 'TODAS'
			   	globals.gbl_cobertura     = 9999
				frm_obra_descripcion      = ''
			}
		}
	}else{
		globals.gbl_con_cobertura = 'TODAS'
	    globals.gbl_cobertura     = 9999
		frm_obra_descripcion      = ''
	    elements.con_grupo.requestFocus()					 
	}
}

/**
 * @AllowToRunInFind
 * @param event
 *
 * @properties={typeid:24,uuid:"E40E0C06-AF7E-47EF-9E42-F9FC8FA62A0F"}
 */
function onAction_buscar_obra(event) {
	var largo = globals.gbl_con_cobertura.length;
	var esnumero = true;
    if(globals.gbl_con_cobertura == 'TODAS'){
    	globals.gbl_con_cobertura = ' '
    }
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
    if (globals.gbl_con_cobertura == 'TODAS'){
		globals.gbl_con_cobertura = ' '
	}
	globals.gbl_con_busca = globals.gbl_con_cobertura
	var win = application.createWindow("Busca_cober",JSWindow.MODAL_DIALOG)	
    win.title= 'Buscar Obra Social'
    win.resizable = false
    win.show(forms.frm_tab_coberturas_emp)
	if(forms.frm_scr_coberturas_emp.foundset.codigo != 0){
		globals.gbl_con_cobertura = forms.frm_scr_coberturas_emp.foundset.codigo.toString()
		globals.gbl_cobertura     = forms.frm_scr_coberturas_emp.foundset.codigo
		frm_obra_descripcion      = forms.frm_scr_coberturas_emp.foundset.descripcion
		elements.con_grupo.requestFocus()
	}else{
		globals.gbl_con_cobertura = 'TODAS'
		globals.gbl_cobertura     = 9999
		frm_obra_descripcion      = ''
	}	
}

/**
 * @AllowToRunInFind
 * @param event
 *
 * @properties={typeid:24,uuid:"5011D0E9-2D3A-4DF5-B774-F1106791CA8F"}
 */
function onAction_controla_grupo(event) {
	frm_error = 0
	if(globals.gbl_con_grupo_nom != '' && globals.gbl_con_grupo_nom != 'TODOS'){
		// identifica si el campo es numérico o alfanumerico
		   var largo = globals.gbl_con_grupo_nom.length;
		   var esnumero = true;
		   for (var i= 0;i<largo && esnumero == true; i++){
	     		if (globals.gbl_con_grupo_nom.charCodeAt(i)< 48 || globals.gbl_con_grupo_nom.charCodeAt(i) > 57){
			    	esnumero = false
		    	}
		   }
		   if (esnumero){
	    	   if(largo>6){
	    		   //muestra mensaje de "dialogo"				   
				   globals.DIALOGS.showErrorDialog('Error','Código inexistente', 'Ok')
				   elements.con_grupo.requestFocus()
				   frm_error = 1
		   	   }else{
		   		   globals.gbl_grupo_nom = utils.stringToNumber(globals.gbl_con_grupo_nom.toString())
				   globals.gbl_con_busca = globals.gbl_con_grupo_nom
				   if (gbl_grup_to_grupo.getSize() < 1){
					   frm_error = 1				       
					   globals.DIALOGS.showErrorDialog('Error','Código inexistente', 'Ok')
				       globals.gbl_con_grupo_nom = ''
				       globals.gbl_grupo_nom     = 0 
					   frm_grup_nom_descripcion  = ''
				   	   elements.con_grupo.requestFocus()
				   }else {
				   	   frm_grup_nom_descripcion = gbl_grup_to_grupo.gru33
				   	   elements.con_nomencla.requestFocus()					   
				   }		
		   	   }
	       }else{
	    	   globals.gbl_con_indice = 1
			   if(globals.gbl_con_grupo_nom == 'TODOS'){
				    	globals.gbl_con_grupo_nom = ' '
			   }
			   globals.gbl_con_busca = globals.gbl_con_grupo_nom
			   var win = application.createWindow("Busca_grupo",JSWindow.MODAL_DIALOG)	
			   win.title= 'Buscar Grupo Nomenclador'
			   win.resizable = false
			   win.show(forms.frm_tab_grupo)
                    
			   if(forms.frm_scr_grupo.foundset.gru2 !=  0){
				   globals.gbl_con_grupo_nom = forms.frm_scr_grupo.foundset.gru2.toString()
				   globals.gbl_grupo_nom     = forms.frm_scr_grupo.foundset.gru2
				   frm_grup_nom_descripcion  = forms.frm_scr_grupo.foundset.gru33
				   elements.con_nomencla.requestFocus()
			   }else{
				   globals.gbl_con_grupo_nom = 'TODOS'
				   globals.gbl_grupo_nom     = 9999
				   frm_grup_nom_descripcion  = ''							
			   }
	      }	    
	  }else{
		  globals.gbl_con_grupo_nom = 'TODOS'
		  globals.gbl_grupo_nom     = 9999
		  frm_grup_nom_descripcion  = ''
		  elements.con_nomencla.requestFocus()					 
	  }	  
  }

  /**
 * @AllowToRunInFind
 * @param event
 *
 * @properties={typeid:24,uuid:"CF063CCC-4ADC-417D-92A7-8078C2B46403"}
 */
function onAction_buscar_grupo(event) {
		var largo = globals.gbl_con_grupo_nom.length;
		var esnumero = true;    
		globals.gbl_con_indice = 1;
		if(globals.gbl_con_grupo_nom == 'TODOS'){
			globals.gbl_con_grupo_nom = ' '
		}
	    for (var i= 0;i<largo && esnumero == true; i++){
		    if(globals.gbl_con_grupo_nom.charCodeAt(i)< 48 || globals.gbl_con_grupo_nom.charCodeAt(i) > 57){
			    esnumero = false
		    }
	    }
	    if(esnumero){
		    globals.gbl_grupo_nom = utils.stringToNumber(globals.gbl_con_grupo_nom.valueOf())
		    globals.gbl_con_indice = 2
	    }else{
		    globals.gbl_con_indice = 1
	    }
	    globals.gbl_con_busca = globals.gbl_con_grupo_nom
		var win = application.createWindow("Busca_grupo",JSWindow.MODAL_DIALOG)	
		win.title= 'Buscar Grupo Nomenclador'
		win.resizable = false
		win.show(forms.frm_tab_grupo)		
		if(forms.frm_scr_grupo.foundset.gru2 !=  0){
		    globals.gbl_con_grupo_nom = forms.frm_scr_grupo.foundset.gru2.toString()
		    globals.gbl_grupo_nom     = forms.frm_scr_grupo.foundset.gru2
			frm_grup_nom_descripcion  = forms.frm_scr_grupo.foundset.gru33
			elements.con_nomencla.requestFocus()
		}else{
		    globals.gbl_con_grupo_nom = 'TODOS'
		    globals.gbl_grupo_nom     = 9999
		    frm_grup_nom_descripcion  = ''							
		}			 
	}

	/**
 * @AllowToRunInFind
 *
 * @param event
 *
 * @properties={typeid:24,uuid:"2F0D5A0A-1D72-4808-B5C7-AAC807DD47E0"}
 */
function onAction_controla_nome(event) {
		if(globals.gbl_con_nomencla != '' && globals.gbl_con_nomencla != 'TODOS'){
			// identifica si el campo es numérico o alfanumerico
			   var largo = globals.gbl_con_nomencla.length;
			   var esnumero = true;
			   for (var i= 0;i<largo && esnumero == true; i++){
		     		if (globals.gbl_con_nomencla.charCodeAt(i)< 48 || globals.gbl_con_nomencla.charCodeAt(i) > 57){
				    	esnumero = false
			    	}
			   }
			   if (esnumero){
		    	   if(largo>6){
		    		   //muestra mensaje de "dialogo"				   
					   globals.DIALOGS.showErrorDialog('Error','Código inexistente', 'Ok')
					   elements.con_nomencla.requestFocus()
					   frm_error = 1
			   	   }else{
			   		   globals.gbl_nomencla = utils.stringToNumber(globals.gbl_con_nomencla.toString())	   		
			   		   if (gbl_nom_to_nomencla.getSize() < 1){
						   frm_error = 1				       
						   globals.DIALOGS.showErrorDialog('Error','Código inexistente', 'Ok')
					       globals.gbl_con_nomencla = ''
					       globals.gbl_nomencla     = 0
						   frm_nome_descripcion     = ''
					   	   elements.con_nomencla.requestFocus()
					   }else {
					   	   frm_nome_descripcion = gbl_nom_to_nomencla.nome_descr
					   	   elements.con_fecha_desde.requestFocus()						   
					   }		
			   	   }
		       }else{
		    	   globals.gbl_con_indice = 1
				   if(globals.gbl_con_nomencla == 'TODOS'){
					   globals.gbl_con_nomencla = ' '
				   }
				   globals.gbl_con_busca = globals.gbl_con_nomencla
				   var win = application.createWindow("Busca_nome",JSWindow.MODAL_DIALOG)	
				   win.title= 'Buscar Nomenclador'
				   win.resizable = false
			       win.show(forms.frm_tab_nomencla)
				   if(forms.frm_scr_nomencla.foundset.nome_codigo != 0){
					   globals.gbl_con_nomencla = forms.frm_scr_nomencla.foundset.nome_codigo.toString()
					   globals.gbl_nomencla     = forms.frm_scr_nomencla.foundset.nome_codigo
					   frm_nome_descripcion     = forms.frm_scr_nomencla.foundset.nome_descr
					   elements.con_fecha_desde.requestFocus()
				   }else{
					   globals.gbl_con_nomencla = 'TODOS'
					   globals.gbl_nomencla     = 9999	
					   frm_nome_descripcion     = ''
				   }						
			   }	    
		  }else{
			 globals.gbl_con_nomencla = 'TODOS'
			 globals.gbl_nomencla     = 9999
			 frm_nome_descripcion     = ''
			 elements.con_fecha_desde.requestFocus()					 
	   	  }		  
	}
	/**
 * @AllowToRunInFind
 *
 * @param event
 *
 * @properties={typeid:24,uuid:"7298C033-F86C-4FD7-9EF0-AE1D8705EE11"}
 */
function onAction_fecha_desde(event) {
	 elements.btn_procesar.requestFocus()
	}
	/**
 * @AllowToRunInFind
 *
 * @param event
 *
 * @properties={typeid:24,uuid:"436EF2FA-163D-47A0-9ACB-7B4CF7536EB8"}
 */
function onAction_buscar_nome(event) {
		var largo = globals.gbl_con_nomencla.length;
		var esnumero = true;   
		if(globals.gbl_con_nomencla == 'TODOS'){
	    	globals.gbl_con_nomencla = ' '
	    }
		globals.gbl_con_indice = 1;
	    for (var i= 0;i<largo && esnumero == true; i++){
		   if (globals.gbl_con_nomencla.charCodeAt(i)< 48 || globals.gbl_con_nomencla.charCodeAt(i) > 57){
			   esnumero = false
		   }
	    }
	    if (esnumero){
		   globals.gbl_nomencla = utils.stringToNumber(globals.gbl_con_nomencla.valueOf())
		   globals.gbl_con_indice = 2
	    }else{
		   globals.gbl_con_indice = 1
	    }
	    globals.gbl_con_busca = globals.gbl_con_nomencla
		var	win =  application.createWindow("Busca_nome",JSWindow.MODAL_DIALOG)	
		win.title= 'Buscar Nomenclador'
		win.resizable = false
	    win.show(forms.frm_tab_nomencla) 
		if(forms.frm_scr_nomencla.foundset.nome_codigo != 0){
		    globals.gbl_con_nomencla = forms.frm_scr_nomencla.foundset.nome_codigo.toString()
		    globals.gbl_nomencla     = forms.frm_scr_nomencla.foundset.nome_codigo
			frm_nome_descripcion     = forms.frm_scr_nomencla.foundset.nome_descr
		    elements.con_fecha_desde.requestFocus()
		}else{
		    globals.gbl_con_nomencla = 'TODOS'
		    globals.gbl_nomencla     = 9999	
		    frm_nome_descripcion     = ''
		}
	}

/**
 * @properties={typeid:24,uuid:"A993B5A7-0685-4AA5-A637-F2D7A713725B"}
 */
function inicializa_campos(){
	globals.gbl_con_empresa     = 1
	frm_prof_descripcion        = ''
	frm_espe_descripcion        = ''
	frm_obra_descripcion        = ''
	globals.gbl_con_tipo_nom    = '01'
	globals.gbl_tipo_nom        = 01
	globals.gbl_fecha_desde     = null
	frm_grup_nom_descripcion    = ''		
	frm_nome_descripcion        = ''		
	
    globals.gbl_con_profesional = 'TODOS'
	globals.gbl_profesional     = 9999
	
	globals.gbl_con_especial    = 'TODAS'
	globals.gbl_especialidad    = 9999
	
	globals.gbl_con_cobertura   = 'TODAS'
	globals.gbl_cobertura       = 9999
	
	globals.gbl_con_tipo_nom    = '01'
	globals.gbl_tipo_nom        = 01
	
	globals.gbl_con_grupo_nom   = 'TODOS'
	globals.gbl_grupo_nom       = 9999
	
	globals.gbl_con_nomencla    = 'TODOS'
	globals.gbl_nomencla        = 9999	
    elements.con_profesional.requestFocus()
    
    elements.lbl_procesando.visible = false
	elements.btn_imprimir.enabled   = false
	elements.btn_pdf.enabled        = false
	forms.frm_scr_cons_convenios_prof_convenios.foundset.deleteAllRecords()
	
	globals.gbl_catalogo        = 'maestros'
	//Carga tabla de Profesionales
    forms.frm_tab_profesionales.cargar_tabla()
	//Carga tabla de Obras Sociales
    forms.frm_tab_coberturas_emp.cargar_tabla()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"697F3C07-E411-4102-B6A2-23A93E5FB657"}
 * @AllowToRunInFind
 */
function onAction_procesar(event) {
	if (globals.gbl_con_profesional == ''|| globals.gbl_con_especial == ''|| globals.gbl_con_cobertura == '' 
	    || globals.gbl_con_grupo_nom == '' || globals.gbl_con_nomencla == ''){
		globals.DIALOGS.showWarningDialog('Atención','No se puede procesar, faltan datos', 'Ok')
	    elements.con_profesional.requestFocus()
	}else{
		elements.lbl_procesando.text = 'Procesando.....'
		elements.lbl_procesando.visible = true
		application.updateUI()		
		//Cargar tabla de de convenios1
		if (globals.gbl_fecha_desde != null){
		    var $aux_fecha_desde = globals.FormateaFecha(globals.gbl_fecha_desde,'AAAAMMDD')
		}
		var $Args
		var $SQL = "select * from tbl_conv_prof "  
			if (globals.gbl_profesional != 9999 || globals.gbl_especialidad != 9999 || globals.gbl_cobertura != 9999 ||
			    globals.gbl_grupo_nom != 9999 || globals.gbl_nomencla != 9999){
				$SQL+= " where "
				if (globals.gbl_profesional != 9999){
					$SQL+= " conv_profesional = "
					$SQL+= globals.gbl_profesional
				}
				if (globals.gbl_especialidad != 9999){
					if (globals.gbl_profesional != 9999){
						$SQL+= " and "						
					}
					$SQL+= " conv_especialidad = "
					$SQL+= globals.gbl_especialidad
				}
				if (globals.gbl_cobertura != 9999){
					if (globals.gbl_profesional != 9999 || globals.gbl_especialidad != 9999){
						$SQL+= " and "						
					}
					$SQL+= " conv_obra_social = "
					$SQL+= globals.gbl_cobertura
				}
				if (globals.gbl_grupo_nom != 9999){
					if (globals.gbl_profesional != 9999 || globals.gbl_especialidad != 9999 || 
						globals.gbl_cobertura != 9999){
						$SQL+= " and "						
					}
					$SQL+= " conv_grupo_nom = "
					$SQL+= globals.gbl_grupo_nom
				}
				if (globals.gbl_nomencla != 9999){
					if (globals.gbl_profesional != 9999 || globals.gbl_especialidad != 9999 || 
						globals.gbl_cobertura != 9999 || globals.gbl_grupo_nom != 9999){
						$SQL+= " and "						
					}
					$SQL+= " conv_cod_nom = "
					$SQL+= globals.gbl_nomencla
				}
				if (globals.gbl_fecha_desde != null){
					if (globals.gbl_profesional != 9999 || globals.gbl_especialidad != 9999 || 
						globals.gbl_cobertura != 9999 || globals.gbl_grupo_nom != 9999 || globals.gbl_nomencla != 9999){
						$SQL+= " and "						
					}
					$SQL+= " conv_fecha_desde >= '"
					$SQL+= $aux_fecha_desde
					$SQL+= "'"
				}
			}
            $SQL+= " order by conv_profesional asc, conv_especialidad asc, conv_obra_social asc, conv_tipo_nom asc, "
            $SQL+= " conv_grupo_nom asc, conv_cod_nom asc, conv_fecha_desde asc"
			
		var $ds = databaseManager.getDataSetByQuery("desal", $SQL, $Args, -1);
		var $max = $ds.getMaxRowIndex()
		if ($max != 0){		
		    var frm_ds2 = databaseManager.createEmptyDataSet()
		    frm_ds2.addColumn('res_cod_med',        1,JSColumn.NUMBER)			
		    frm_ds2.addColumn('res_cod_esp',        2,JSColumn.NUMBER)						
			frm_ds2.addColumn('res_cod_obra',       3,JSColumn.NUMBER)
		    frm_ds2.addColumn('res_tipo_nome',      4,JSColumn.NUMBER)
			frm_ds2.addColumn('res_grupo_nome',     5,JSColumn.NUMBER)
			frm_ds2.addColumn('res_cod_nomencla',   6,JSColumn.NUMBER)
			frm_ds2.addColumn('res_fecha',          7,JSColumn.DATETIME)
			
			frm_ds2.addColumn('res_tipo_valor',     8,JSColumn.NUMBER)
			frm_ds2.addColumn('res_imp_valor',      9,JSColumn.NUMBER)			
			frm_ds2.addColumn('res_recargo_diaf',  10,JSColumn.NUMBER)
			frm_ds2.addColumn('res_recargo_noct',  11,JSColumn.NUMBER)						
			frm_ds2.addColumn('res_recargo_urg',   12,JSColumn.NUMBER)
			frm_ds2.addColumn('res_tipo_rec_diaf', 13,JSColumn.NUMBER)			
			frm_ds2.addColumn('res_tipo_rec_noct', 14,JSColumn.NUMBER)				
			frm_ds2.addColumn('res_tipo_rec_urg',  15,JSColumn.NUMBER)			
		 	
			frm_ds2.addColumn('res_des_med',       16,JSColumn.TEXT)
			frm_ds2.addColumn('res_des_esp',       17,JSColumn.TEXT)
			frm_ds2.addColumn('res_des_obra',      18,JSColumn.TEXT)
			frm_ds2.addColumn('res_des_grupo',     19,JSColumn.TEXT)
			frm_ds2.addColumn('res_des_nomencla',  20,JSColumn.TEXT)
			frm_ds2.addColumn('res_observacion',   21,JSColumn.TEXT)
			frm_ds2.addColumn('res_txt_nomencla',  22,JSColumn.TEXT)
			frm_ds2.addColumn('res_txt_tipo_valor',23,JSColumn.TEXT)
			frm_ds2.addColumn('res_imp_valor2',    24,JSColumn.TEXT)
			
			for (var i= 1; i <= $max; i++){		
				var $txt_nomencla =  $ds.getValue(i,7).toString()					
				switch ($txt_nomencla.length){
				    case 1: $txt_nomencla = '00.00.00' + $txt_nomencla.substr(0,1); break;
				    case 2: $txt_nomencla = '00.00.' + $txt_nomencla.substr(0,1) + $txt_nomencla.substr(1,1) ; break;
				    case 3: $txt_nomencla = '00.0' + $txt_nomencla.substr(0,1) + '.' + $txt_nomencla.substr(1,1) + $txt_nomencla.substr(2,1) ; break;
				    case 4: $txt_nomencla = '00.' + $txt_nomencla.substr(0,1) + $txt_nomencla.substr(1,1) + '.' + $txt_nomencla.substr(2,1) + $txt_nomencla.substr(3,1) ; break;
				    case 5: $txt_nomencla = '0' + $txt_nomencla.substr(0,1) + '.' + $txt_nomencla.substr(1,1) + $txt_nomencla.substr(2,1) + '.' + $txt_nomencla.substr(3,1) 
						                        + $txt_nomencla.substr(4,1); break;				        
				    case 6: $txt_nomencla = $txt_nomencla.substr(0,1) + $txt_nomencla.substr(1,1) + '.' + $txt_nomencla.substr(2,1) + $txt_nomencla.substr(3,1) + '.' 
						                        + $txt_nomencla.substr(4,1) + $txt_nomencla.substr(5,1); break;
				    default:$txt_nomencla = $txt_nomencla.substr(0,1) + $txt_nomencla.substr(1,1) + '.' + $txt_nomencla.substr(2,1) + $txt_nomencla.substr(3,1) + '.' 
                                               + $txt_nomencla.substr(4,1) + $txt_nomencla.substr(5,1); break;
				}					
					
				var $fecha_desde = $ds.getValue(i,8).toString()
				    $fecha_desde = $fecha_desde.substr(0,4) + '-' + $fecha_desde.substr(4,2) + '-' + $fecha_desde.substr(6,2)
						    
				frm_ds2.addRow([$ds.getValue(i,2), $ds.getValue(i,3),  $ds.getValue(i,4), $ds.getValue(i,5), $ds.getValue(i,6),
			                   $ds.getValue(i,7),  $ds.getValue(i,8), $ds.getValue(i,9), $ds.getValue(i,10),
							   $ds.getValue(i,11), $ds.getValue(i,12), $ds.getValue(i,13), $ds.getValue(i,14),
							   $ds.getValue(i,15), $ds.getValue(i,16), $ds.getValue(i,17), $ds.getValue(i,18),
							   $ds.getValue(i,19), $ds.getValue(i,20), $ds.getValue(i,21), $ds.getValue(i,26),
							   $txt_nomencla, application.getValueListDisplayValue('vl_tipo_valor', $ds.getValue(i,9)), $ds.getValue(i,29)])				
			}
				
			var $tipos = [JSColumn.NUMBER, JSColumn.NUMBER, JSColumn.NUMBER, JSColumn.NUMBER, JSColumn.NUMBER, 
			              JSColumn.NUMBER, JSColumn.DATETIME, JSColumn.NUMBER, JSColumn.NUMBER, JSColumn.NUMBER, JSColumn.NUMBER, 
						  JSColumn.NUMBER, JSColumn.NUMBER, JSColumn.NUMBER, JSColumn.NUMBER, JSColumn.TEXT, JSColumn.TEXT,
						  JSColumn.TEXT, JSColumn.TEXT, JSColumn.TEXT, JSColumn.TEXT, JSColumn.TEXT, JSColumn.TEXT, JSColumn.NUMBER]
		    var $frm = solutionModel.getForm('frm_scr_cons_convenios_prof_convenios')
		    $frm.dataSource = frm_ds2.createDataSource('Auxd_scr_cons_convenios_prof', $tipos)			
		    forms.frm_scr_cons_convenios_prof_convenios.controller.recreateUI()
			elements.tabless.tabIndex = 2			
			elements.btn_imprimir.enabled = true
			elements.btn_pdf.enabled = true
		}else{
			globals.DIALOGS.showWarningDialog('Atención','No hay datos para mostrar')
			 inicializa_campos()	
		}
	} 
		
	elements.lbl_procesando.visible = false	
}

/**
 * @param event
 *
 * @properties={typeid:24,uuid:"643FB66D-05F9-463F-A3D0-F658BE6E020A"}
 */
function onHide_consultaRegistro(event) {
	if(globals.gbl_cerrarConsultaRegistro){
		var $win = application.getWindow(application.getActiveWindow().getName());
		if($win != null){
			$win.hide();
			$win.destroy();
		}
	}
	return globals.gbl_cerrarConsultaRegistro;
}

/**
 * @param event
 *
 * @properties={typeid:24,uuid:"60B04907-DCBB-4922-822C-BB6048D71B23"}
 */
function onAction_cerrar(event) {
	globals.gbl_cerrarConsultaRegistro = true;
	onHide_consultaRegistro(event);
}

/**
 * @properties={typeid:24,uuid:"DCE52FE4-7C02-4A8E-9AF4-D508CCEBC090"}
 */
function imprimir_pdf(){
	var $params = {		
		pr_img1:"media:///logo1.png", pr_img2:"media:///logo2.png"
	}
	
	var $arch = plugins.file.showFileSaveDialog('SQ-CONV-PROF' + application.getIPAddress() + '.pdf')
	if ($arch){		
		plugins.jasperPluginRMI.runReport(forms.frm_scr_cons_convenios_prof_convenios.foundset,'rp_conv_prof.jasper' ,$arch.getAbsolutePath(),plugins.jasperPluginRMI.OUTPUT_FORMAT.PDF,$params)
		
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
 * @properties={typeid:24,uuid:"C27A60AB-E9E1-4B84-87EC-D23119F502AF"}
 */
function onAction_imprimir(event) {
	var $params = {		
		pr_img1:"media:///logo1.png", pr_img2:"media:///logo2.png"
	}
	plugins.jasperPluginRMI.runReport(forms.frm_scr_cons_convenios_prof_convenios.foundset,'rp_conv_prof.jasper' ,'',plugins.jasperPluginRMI.OUTPUT_FORMAT.PRINT,$params)
}	
/**
 * @param event
 *
 * @properties={typeid:24,uuid:"09227483-C2DE-4D98-81DB-6F6DDACAE3DB"}
 */
function onAction_controlar_empresa(event) {
	switch (globals.gbl_con_empresa){
        case 1: globals.gbl_catalogo = 'maestros';break;
        case 11: globals.gbl_catalogo = 'cirendsa';break;	
        default: globals.gbl_catalogo = 'maestros';break;	    
    }
    //Carga tabla de Profesionales
    globals.gbl_con_profesional = ' '
    globals.gbl_profesional     = 0
    frm_prof_descripcion        = ''
    elements.lbl_procesando.text = 'Cargando Tabla Profesionales'
    elements.lbl_procesando.visible = true       
    forms.frm_tab_profesionales.cargar_tabla()

    //Carga tabla de Obras Sociales
    globals.gbl_con_cobertura = ' '
    globals.gbl_cobertura     = 0
    frm_obra_descripcion      = ''
    elements.lbl_procesando.text = 'Cargando Tabla Obras Sociales'        
    application.updateUI()        
    forms.frm_tab_coberturas_emp.cargar_tabla()
    elements.lbl_procesando.visible = false   	
}
