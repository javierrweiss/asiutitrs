/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"63523EA8-5C66-470C-8E90-3100EF99D120"}
 */
var frm_valor_actual = ''
/**
 * @properties={typeid:35,uuid:"7411B229-B27F-4F2D-82B6-99C79702640D",variableType:-4}
 */
var frm_prof_descripcion = null;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"0A319538-BA64-4003-A1A5-C86421BABBA2",variableType:4}
 */
var frm_total_reg = 0;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"2FD29B6A-7C97-4632-A75D-0DDF60CEA6E1",variableType:4}
 */
var frm_total_sel = 0;
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"371A0105-8CA4-4193-AA2C-569EFAE062CC"}
 */
var frm_con_val_mon = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"1E873AE4-0CE2-4761-8009-1B6BFE477311"}
 */
var frm_nome_descripcion = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"82BE38C0-9B51-4BED-8F3B-2FB8D6AC19A4"}
 */
var frm_espe_descripcion = null;

/**
 * @properties={typeid:35,uuid:"B124ADDF-9C80-4FB5-AA96-DF4EBD5F19ED",variableType:-4}
 */
var frm_obra_descripcion = null;

/**
 * @properties={typeid:35,uuid:"A8F07B7F-7B8D-4108-956B-B47C7EA6AE57",variableType:-4}
 */
var frm_grup_nom_descripcion = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"78F9FE38-E211-480B-9E62-43E4A6836D5C",variableType:4}
 */
var frm_es_nuevo = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"A2F716A3-7935-4881-AFCA-29ADDE5AC58B",variableType:4}
 */
var frm_error = 0;

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"0483B90F-F976-4367-8FD3-566D08882523"}
 */
function onShow_inicio(firstShow, event) {
	elements.lbl_titulo.text = 'Actualización automática de Convenios a Profesionales'	
	application.updateUI()
	inicializa_campos()
}

/**
 * @AllowToRunInFind
 * @param event
 *
 * @properties={typeid:24,uuid:"906F0105-C657-44FA-955E-A9787499CC6A"}
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
 * @properties={typeid:24,uuid:"A43F6C9A-893A-4157-BDCA-CD27D74B309C"}
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
 * @properties={typeid:24,uuid:"C2688319-7AB7-4714-8E64-4E82F83A782E"}
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
 * @properties={typeid:24,uuid:"43CA39D2-259D-42C7-A8B2-7167EB431BAF"}
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
 * @properties={typeid:24,uuid:"49FF5D89-A679-48A0-8B2F-77694426B85B"}
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
 * @properties={typeid:24,uuid:"988B050D-514D-4750-821E-4D7BCF8A624E"}
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
 * @properties={typeid:24,uuid:"D79B106F-D211-46F8-B7F1-BE746F226C69"}
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
 * @properties={typeid:24,uuid:"40B4D28E-D58F-4178-AE40-2271922E6AE5"}
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
 * @properties={typeid:24,uuid:"70D83503-7B08-4BC4-8B5B-67DCC0021360"}
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
					   	   elements.con_valor_actual.requestFocus()						   
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
					   elements.con_valor_actual.requestFocus()
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
			 elements.con_valor_actual.requestFocus()					 
	   	  }		  
	}

/**
 * @AllowToRunInFind
 *
 * @param event
 *
 * @properties={typeid:24,uuid:"CFCA06A2-88AC-4DF7-AFD5-5284D17118A0"}
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
		    elements.con_valor_actual.requestFocus()
		}else{
		    globals.gbl_con_nomencla = 'TODOS'
		    globals.gbl_nomencla     = 9999	
		    frm_nome_descripcion     = ''
		}
	}

/**
 * @properties={typeid:24,uuid:"BDC59BC0-FBD9-4C46-AA04-3AD5B5D4A2F9"}
 */
function inicializa_campos(){
	globals.gbl_con_empresa     = 1
	frm_prof_descripcion        = ''
	frm_espe_descripcion        = ''
	frm_obra_descripcion        = ''	
	frm_con_val_mon             = '0'
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
	
	globals.gbl_fecha_desde     = null	
	frm_valor_actual            = 'TODOS'
	globals.gbl_imp_valor       = null
	globals.gbl_imp_valor2      = null
    elements.con_profesional.requestFocus()
    
    elements.lbl_procesando.visible = false
	elements.btn_grabar.enabled     = false	
	forms.frm_scr_convenios_prof_convenios_aumentos.foundset.deleteAllRecords()
	
	globals.gbl_catalogo        = 'maestros'
	//Carga tabla de Profesionales
    forms.frm_tab_profesionales.cargar_tabla()
	//Carga tabla de Obras Sociales
    forms.frm_tab_coberturas_emp.cargar_tabla()
	frm_total_reg               = 0
	frm_total_sel               = 0
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"35065D17-EFB5-4748-A995-4C16A6AA04D6"}
 * @AllowToRunInFind
 */
function onAction_procesar(event) {
	if (globals.gbl_con_profesional == ''|| globals.gbl_con_especial == ''|| globals.gbl_con_cobertura == '' 
	    || globals.gbl_con_grupo_nom == '' || globals.gbl_con_nomencla == '' 
	    || globals.gbl_fecha_desde == null || frm_con_val_mon == null 
		|| globals.gbl_imp_valor == null){
		globals.DIALOGS.showWarningDialog('Atención','No se puede procesar, faltan datos', 'Ok')
	    elements.con_profesional.requestFocus()
	}else{
		if(globals.gbl_imp_valor == null){
			globals.gbl_imp_valor = 0
		}
		if(globals.gbl_imp_valor2 == null){
			globals.gbl_imp_valor2 = 0
		}
		frm_total_reg = 0
		frm_total_sel = 0 
		elements.lbl_procesando.text = 'Procesando.....'
		elements.lbl_procesando.visible = true
		application.updateUI()		
		//Cargar tabla de de convenios
		var $Args
		var $SQL  = "select conv_profesional, conv_especialidad, conv_obra_social, conv_tipo_nom, conv_grupo_nom, conv_cod_nom, "
			$SQL += "max(conv_fecha_desde) fecha_desde, conv_tipo_valor, conv_imp_valor, conv_recargo_diaf, conv_recargo_noct, " 
			$SQL += "conv_recargo_urg, conv_tipo_rec_diaf, conv_tipo_rec_noct, conv_tipo_rec_urg, conv_profesional_desc, "
			$SQL += "conv_especialidad_desc, conv_obra_social_desc, conv_grupo_nom_desc, conv_cod_nom_desc, conv_observacion, conv_imp_valor2 "
			$SQL += "from tbl_conv_prof "
			
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
				if(globals.gbl_fecha_desde!=null){
					var $aux_fecha_desde = globals.FormateaFecha(globals.gbl_fecha_desde,'AAAAMMDD')
					$SQL+= " and "	
					$SQL+= " conv_fecha_desde >= '"
					$SQL+= +$aux_fecha_desde+"'"
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
			}
			$SQL += " group by conv_profesional, conv_especialidad, conv_obra_social, conv_tipo_nom, conv_grupo_nom, conv_cod_nom, "
			$SQL += "conv_fecha_desde, conv_tipo_valor, conv_imp_valor, conv_recargo_diaf, conv_recargo_noct, conv_recargo_urg, "
			$SQL += "conv_tipo_rec_diaf, conv_tipo_rec_noct, conv_tipo_rec_urg, conv_profesional_desc, conv_especialidad_desc, "
			$SQL += "conv_obra_social_desc, conv_grupo_nom_desc, conv_cod_nom_desc, conv_observacion, conv_imp_valor2  "
            $SQL+= " order by conv_profesional asc, conv_especialidad asc, conv_obra_social asc, conv_tipo_nom asc, "
            $SQL+= " conv_grupo_nom asc, conv_cod_nom asc, conv_fecha_desde asc"
			
		var $ds = databaseManager.getDataSetByQuery("desal", $SQL, $Args, -1);
		var $max = $ds.getMaxRowIndex()
		if ($max != 0){		
		    var frm_ds2 = databaseManager.createEmptyDataSet()
			frm_ds2.addColumn('enabled',            1,JSColumn.NUMBER)
		    frm_ds2.addColumn('res_cod_med',        2,JSColumn.NUMBER)			
		    frm_ds2.addColumn('res_cod_esp',        3,JSColumn.NUMBER)						
			frm_ds2.addColumn('res_cod_obra',       4,JSColumn.NUMBER)
		    frm_ds2.addColumn('res_tipo_nome',      5,JSColumn.NUMBER)
			frm_ds2.addColumn('res_grupo_nome',     6,JSColumn.NUMBER)
			frm_ds2.addColumn('res_cod_nomencla',   7,JSColumn.NUMBER)
			frm_ds2.addColumn('res_fecha',          8,JSColumn.DATETIME)
			
			frm_ds2.addColumn('res_tipo_valor',     9,JSColumn.NUMBER)
			frm_ds2.addColumn('res_imp_valor',     10,JSColumn.NUMBER)			
			frm_ds2.addColumn('res_recargo_diaf',  11,JSColumn.NUMBER)
			frm_ds2.addColumn('res_recargo_noct',  12,JSColumn.NUMBER)						
			frm_ds2.addColumn('res_recargo_urg',   13,JSColumn.NUMBER)
			frm_ds2.addColumn('res_tipo_rec_diaf', 14,JSColumn.NUMBER)			
			frm_ds2.addColumn('res_tipo_rec_noct', 15,JSColumn.NUMBER)				
			frm_ds2.addColumn('res_tipo_rec_urg',  16,JSColumn.NUMBER)			
		 	
			frm_ds2.addColumn('res_des_med',       17,JSColumn.TEXT)
			frm_ds2.addColumn('res_des_esp',       18,JSColumn.TEXT)
			frm_ds2.addColumn('res_des_obra',      19,JSColumn.TEXT)
			frm_ds2.addColumn('res_des_grupo',     20,JSColumn.TEXT)
			frm_ds2.addColumn('res_des_nomencla',  21,JSColumn.TEXT)
			frm_ds2.addColumn('res_observacion',   22,JSColumn.TEXT)
			frm_ds2.addColumn('res_txt_nomencla',  23,JSColumn.TEXT)
			frm_ds2.addColumn('res_txt_tipo_valor',24,JSColumn.TEXT)
			frm_ds2.addColumn('res_imp_valor2',    25,JSColumn.NUMBER)
			frm_ds2.addColumn('res_imp_valor_cal1',26,JSColumn.NUMBER)
			frm_ds2.addColumn('res_imp_valor_cal2',27,JSColumn.NUMBER)
			var $ant_prof = 0
			for (var i= 1; i <= $max; i++){
				if($ant_prof != $ds.getValue(i,1)){
				    var $Args2
				    var $SQL2 = "select * from tbc_profesional where prof1 = "
   				        $SQL2+= $ds.getValue(i,1)	  	  
			        var $ds2 = databaseManager.getDataSetByQuery("maestros", $SQL2, $Args2, 1);
			        var $max2 = $ds2.getMaxRowIndex()
					//si no encuentra profesional en maestro, busque en cirendsa. endovascular.
					if($max2==0 && globals.gbl_con_empresa==11){
						   var $SQL3 = "select * from tbc_profesional where prof1 = "
	   				        $SQL3+= $ds.getValue(i,1)	  	  
				        $ds2 = databaseManager.getDataSetByQuery("cirendsa", $SQL3, $Args2, 1);
				        $max2 = $ds2.getMaxRowIndex()
					}
			        
					$ant_prof = $ds.getValue(i,1)
				}
				// Filtra por importe
				var $imp_ok = 0
				var $valor_actual_int = utils.stringToNumber(frm_valor_actual)
				if (frm_valor_actual != 'TODOS'){
					if($ds.getValue(i,9) != $valor_actual_int){
						$imp_ok = 1
					}
				}
				if($max2 != 0 && $ds2.getValue(1,18) == 0 && $imp_ok == 0){
				    var $txt_nomencla =  $ds.getValue(i,6).toString()					
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
				    var $aux_valor2 = 0
				    $aux_valor2 = $ds.getValue(i,22)
				    if($ds.getValue(i,22) == null){
    					$aux_valor2 = 0
	    			}
				    var $aux_valor_cal1 = 0
				    var $aux_valor_cal2 = 0
				    if (frm_con_val_mon == '0'){
					    $aux_valor_cal1 = globals.gbl_imp_valor
					    if ($aux_valor2 > 0){
					        $aux_valor_cal2 =  globals.gbl_imp_valor2
					    }
				    }else{
					    $aux_valor_cal1 =  ($ds.getValue(i,9) * globals.gbl_imp_valor / 100) + $ds.getValue(i,9)
					    if ($aux_valor2 > 0){
					        $aux_valor_cal2 =  ($aux_valor2 * globals.gbl_imp_valor2 / 100) + $aux_valor2
					    }
				    }
				    var $fecha_desde = $ds.getValue(i,7).toString()
				        $fecha_desde = $fecha_desde.substr(0,4) + '-' + $fecha_desde.substr(4,2) + '-' + $fecha_desde.substr(6,2)
						    
				    frm_ds2.addRow([0,$ds.getValue(i,1), $ds.getValue(i,2),  $ds.getValue(i,3), $ds.getValue(i,4), $ds.getValue(i,5),
			                   $ds.getValue(i,6),  $ds.getValue(i,7), $ds.getValue(i,8), $ds.getValue(i,9),
							   $ds.getValue(i,10), $ds.getValue(i,11), $ds.getValue(i,12), $ds.getValue(i,13),
							   $ds.getValue(i,14), $ds.getValue(i,15), $ds.getValue(i,16), $ds.getValue(i,17),
							   $ds.getValue(i,18), $ds.getValue(i,19), $ds.getValue(i,20), $ds.getValue(i,21),
							   $txt_nomencla, application.getValueListDisplayValue('vl_tipo_valor', $ds.getValue(i,8)),
							   $aux_valor2, $aux_valor_cal1, $aux_valor_cal2])
				
				    frm_total_reg = frm_total_reg + 1
 			    }
			}
				
			var $tipos = [JSColumn.NUMBER, JSColumn.NUMBER, JSColumn.NUMBER, JSColumn.NUMBER, JSColumn.NUMBER, JSColumn.NUMBER, 
			              JSColumn.NUMBER, JSColumn.DATETIME, JSColumn.NUMBER, JSColumn.NUMBER, JSColumn.NUMBER, JSColumn.NUMBER, 
						  JSColumn.NUMBER, JSColumn.NUMBER, JSColumn.NUMBER, JSColumn.NUMBER, JSColumn.TEXT, JSColumn.TEXT,
						  JSColumn.TEXT, JSColumn.TEXT, JSColumn.TEXT, JSColumn.TEXT, JSColumn.TEXT, JSColumn.TEXT,
						  JSColumn.NUMBER, JSColumn.NUMBER, JSColumn.NUMBER]
		    var $frm = solutionModel.getForm('frm_scr_convenios_prof_convenios_aumentos')
		    $frm.dataSource = frm_ds2.createDataSource('Auxd_scr_cons_convenios_prof_au', $tipos)			
		    forms.frm_scr_convenios_prof_convenios_aumentos.controller.recreateUI()
			elements.tabless.tabIndex = 2			
			elements.btn_grabar.enabled = true			
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
 * @properties={typeid:24,uuid:"3270B7DF-0FF0-4FAC-B94A-663D90C5CF88"}
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
 * @properties={typeid:24,uuid:"832C881E-AE39-4C46-AD5C-062B9EE01E31"}
 */
function onAction_cerrar(event) {
	globals.gbl_cerrarConsultaRegistro = true;
	onHide_consultaRegistro(event);
}


/**
 * @properties={typeid:24,uuid:"C7BEEC8F-D883-4AD4-93DD-96C72244EA61"}
 * @AllowToRunInFind
 */
function grabar(){	
	if (frm_total_sel == 0){					
			globals.DIALOGS.showWarningDialog('Atención','No hay datos para guardar', 'Ok')
		    elements.con_profesional.requestFocus()
		}else{
			elements.btn_grabar.enabled  = false
			elements.lbl_procesando.text = 'Procesando.....'
			elements.lbl_procesando.visible = true
			application.updateUI()
			
			var $OK = 'Si'
			$OK = globals.DIALOGS.showWarningDialog('Atención','Se procedera a copiar los registros registros seleccionado, conrfirma?', 'Si', 'No')
			if ($OK == 'Si'){
				// Filtra solos los seleccionados
				forms.frm_scr_convenios_prof_convenios_aumentos.foundset.addFoundSetFilterParam('enabled', '=', '1','filtro')
				var $max_convenios = databaseManager.getFoundSetCount(forms.frm_scr_convenios_prof_convenios_aumentos.foundset)				
				//
				for (var j = 1; j <= $max_convenios; j++){
					forms.frm_scr_convenios_prof_convenios_aumentos.foundset.setSelectedIndex(j)
			        //Buscar Repetidos
					foundset.find()
				    conv_obra_social  = forms.frm_scr_convenios_prof_convenios_aumentos.foundset.res_cod_obra
					conv_profesional  = forms.frm_scr_convenios_prof_convenios_aumentos.foundset.res_cod_med
                    conv_especialidad = forms.frm_scr_convenios_prof_convenios_aumentos.foundset.res_cod_esp			    
					conv_tipo_nom     = forms.frm_scr_convenios_prof_convenios_aumentos.foundset.res_tipo_nome
					conv_grupo_nom    = forms.frm_scr_convenios_prof_convenios_aumentos.foundset.res_grupo_nome
					conv_cod_nom      = forms.frm_scr_convenios_prof_convenios_aumentos.foundset.res_cod_nomencla
					conv_fecha_desde  = globals.gbl_fecha_desde								
					foundset.search()
					if(foundset.getSize() == 0){
					    var frm_id = application.getUUID()
					    buscar_id(frm_id)				
 				        foundset.newRecord()
				        id_conv_prof           = frm_id 
				        conv_fecha_alta        = application.getServerTimeStamp()
				        conv_fecha_modif       = null
				        conv_legajo_alta       = globals.vLega
	  			        conv_legajo_modif      = null
						conv_obra_social       = forms.frm_scr_convenios_prof_convenios_aumentos.foundset.res_cod_obra
					    conv_obra_social_desc  = forms.frm_scr_convenios_prof_convenios_aumentos.foundset.res_des_obra
						conv_profesional       = forms.frm_scr_convenios_prof_convenios_aumentos.foundset.res_cod_med
						conv_profesional_desc  = forms.frm_scr_convenios_prof_convenios_aumentos.foundset.res_des_med
						conv_empresa           = globals.gbl_con_empresa        
						conv_empresa_desc      = application.getValueListDisplayValue('vl_empresa',globals.gbl_con_empresa)
				        conv_especialidad      = forms.frm_scr_convenios_prof_convenios_aumentos.foundset.res_cod_esp
				        conv_especialidad_desc = forms.frm_scr_convenios_prof_convenios_aumentos.foundset.res_des_esp						
				     	conv_grupo_nom         = forms.frm_scr_convenios_prof_convenios_aumentos.foundset.res_grupo_nome
				        conv_grupo_nom_desc    = forms.frm_scr_convenios_prof_convenios_aumentos.foundset.res_des_grupo				            
				        conv_cod_nom           = forms.frm_scr_convenios_prof_convenios_aumentos.foundset.res_cod_nomencla
				        conv_cod_nom_desc      = forms.frm_scr_convenios_prof_convenios_aumentos.foundset.res_des_nomencla
					    mover_datos()					
					}
				}
				// Remueve Filtros
				forms.frm_scr_convenios_prof_convenios_aumentos.foundset.removeFoundSetFilterParam('filtro')	
				//		
			}
			if ($OK == 'Si'){
			    inicializa_campos()	
			}
			elements.lbl_procesando.visible = false
		}
	}
	/**
 * 
 * @param frm_id
 *
 * @properties={typeid:24,uuid:"5754394B-C812-48A0-8EBD-D567C646FE54"}
 */
function buscar_id(frm_id){
		//Verificando si existe clave primaria
	    var sql = "SELECT EXISTS( SELECT id_conv_prof FROM tbl_conv_prof WHERE id_conv_prof ='" + frm_id + "')"
	    var dsExists = databaseManager.getDataSetByQuery('desal',sql,null,-1);
	    while(dsExists.getValue(1,1) == 1){
	        frm_id = application.getUUID();
	        sql = "SELECT EXISTS( SELECT id_conv_prof FROM tbl_conv_prof WHERE id_conv_prof ='" + frm_id + "')"
	        dsExists = databaseManager.getDataSetByQuery('desal',sql,null,-1);
	    } 
	//

	}

	/**
 * @properties={typeid:24,uuid:"15100062-C911-4311-84F2-3FB1ACCA1ED5"}
 */
function mover_datos(){		
		conv_tipo_nom      = forms.frm_scr_convenios_prof_convenios_aumentos.foundset.res_tipo_nome
		conv_fecha_desde   = globals.gbl_fecha_desde
	    conv_tipo_valor    = forms.frm_scr_convenios_prof_convenios_aumentos.foundset.res_tipo_valor    
	    conv_imp_valor     = forms.frm_scr_convenios_prof_convenios_aumentos.foundset.res_imp_valor_cal1
	    conv_imp_valor2    = forms.frm_scr_convenios_prof_convenios_aumentos.foundset.res_imp_valor_cal2		
	    conv_tipo_rec_diaf = forms.frm_scr_convenios_prof_convenios_aumentos.foundset.res_tipo_rec_diaf
	    conv_recargo_diaf  = forms.frm_scr_convenios_prof_convenios_aumentos.foundset.res_recargo_diaf
	    conv_tipo_rec_noct = forms.frm_scr_convenios_prof_convenios_aumentos.foundset.res_tipo_rec_noct
	    conv_recargo_noct  = forms.frm_scr_convenios_prof_convenios_aumentos.foundset.res_recargo_noct
	    conv_tipo_rec_urg  = forms.frm_scr_convenios_prof_convenios_aumentos.foundset.res_tipo_rec_urg
	    conv_recargo_urg   = forms.frm_scr_convenios_prof_convenios_aumentos.foundset.res_recargo_urg
	    conv_observacion   = forms.frm_scr_convenios_prof_convenios_aumentos.foundset.res_observacion	
		

	      
		databaseManager.startTransaction()
	    var result = databaseManager.saveData();
	    if(result){
	        databaseManager.commitTransaction();
	    }else{
	        var array = databaseManager.getFailedRecords()
	        for (var i = 0; i < array.length; i++) {
	            var record = array[i];
	            var jstable = databaseManager.getTable(record);
	            var tableSQLName = jstable.getSQLName();
	            var error1='Error de Grabación en Tabla:' + tableSQLName + ' en server:' + jstable.getServerName() + ' falló la grabación. Avise urgente a Sistemas, por favor!'
	            var error2='Error en grabación '+record.exception;
	            if (record.exception.getErrorCode() == ServoyException.RECORD_VALIDATION_FAILED) {            
	                var thrown = record.exception.getValue()
	                plugins.dialogs.showErrorDialog("Error de grabación","Record validation failed: " + thrown)
	            }
	        }
	        databaseManager.rollbackTransaction()
	        if(error1!=''){
	                globals.DIALOGS.showErrorDialog("Error de grabación","Record validation failed: " + thrown)
	                globals.DIALOGS.showErrorDialog("Error en grabacion",error1,"Aceptar")
	                globals.DIALOGS.showErrorDialog("Error en grabacion",error2,"Aceptar")
	        }
	        globals.DIALOGS.showErrorDialog("Error en grabación","Se ha producido un error de grabación. "+'\n'+"Avise a Sistemas, por favor.", "Aceptar")
	    }	
	}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"1E7F10A9-A592-4B61-9BDA-1DA806530D35"}
 */
function onAction_fecha_desde(event) {
	var $mes = globals.gbl_fecha_hoy.getMonth() + 1
	var $anio = globals.gbl_fecha_hoy.getFullYear()
	//var $aux_fecha = globals.DateToInteger(globals.gbl_fecha_hoy)
	if ($mes==1){
		$anio--
		$mes=12
	}else{
		$mes--
	}
	var $ed_mes=''
	if($mes<10){
		$ed_mes='0'+$mes
	}else{
		$ed_mes=$mes
	}
	
	var $aux_fecha2      = $anio + $ed_mes + '01'
	var $aux_fecha_hoy   = globals.IntegerToDate(utils.stringToNumber($aux_fecha2))
	//$aux_fecha           = globals.DateToInteger(globals.gbl_fecha_desde).toString()
	if(globals.gbl_fecha_desde != null){
	    if(globals.gbl_fecha_desde < $aux_fecha_hoy){
		    globals.DIALOGS.showWarningDialog('Atención','la fecha no puede ser menor al día '+$aux_fecha2.substr(6,2)+'/'+
		                                       $ed_mes+'/'+ $aux_fecha2.substr(0,4), 'Ok')
	        elements.con_fecha_desde.requestFocus()
		    globals.gbl_fecha_desde = null
	    }else{elements.con_tipo_val.requestFocus()
	    }
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"F61E6F71-1E7F-4046-BE28-C4BF3AE31969"}
 */
function onAction_imp_val(event) {
	elements.con_imp_valor2.requestFocus()
}
/**
 *
 * @param event
 *
 * @properties={typeid:24,uuid:"1DC72DC1-BC7F-47D0-976F-145791F22FE3"}
 */
function onAction_imp_val2(event) {
	elements.btn_procesar.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"ACFCD85C-80D6-4B11-B2C3-C092C9452964"}
 */
function onAction_valor_actual(event) {
	if(frm_valor_actual == null || frm_valor_actual == '0' || 
	   frm_valor_actual == ''){
		frm_valor_actual = 'TODOS'
	}
	elements.con_fecha_desde.requestFocus()
}
/**
 * @param event
 *
 * @properties={typeid:24,uuid:"7A56A9A8-D2E9-4C08-973C-A0A88BDB1DD6"}
 */
function onAction_tipo_imp(event) {
	elements.con_imp_valor.requestFocus()
}
/** 
 * @param event
 *
 * @properties={typeid:24,uuid:"89D1DC09-B48C-4325-8FE4-E377DC77EC78"}
 */
function onAction_seleccionar(event) {
	forms.frm_scr_convenios_prof_convenios_aumentos.onAction_selec(event)
}

/**
 * @param event
 *
 * @properties={typeid:24,uuid:"BA9890C2-0900-482D-AC43-C38510A45A29"}
 */
function onAction_deseleccionar(event) {
	forms.frm_scr_convenios_prof_convenios_aumentos.onAction_desel(event)
}
/**
 * 
 * @param event
 *
 * @properties={typeid:24,uuid:"0ABE76AD-3C39-452B-858A-9B47E484D521"}
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
