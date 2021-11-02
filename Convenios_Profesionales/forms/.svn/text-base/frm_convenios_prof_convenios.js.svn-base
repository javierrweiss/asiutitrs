/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"082DBF3D-BDAB-4B87-84E8-EDEE727B886D"}
 */
var frm_prof_descripcion = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"5183EDCF-B8DC-4472-BC72-6B8A05073503"}
 */
var frm_con_val_mon = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"6839A7E3-02D8-481F-BC5B-9B0745AA042D"}
 */
var frm_nome_descripcion = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"0C88FB3B-144C-4102-B359-7E3C5161043B"}
 */
var frm_espe_descripcion = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"F9D4385B-5E2C-4AE6-9EC1-E4741A5A1341"}
 */
var frm_obra_descripcion = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"5DA8DB22-35FE-4809-A470-5B98ABE53FE7"}
 */
var frm_grup_nom_descripcion = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"00F6D323-21F8-4824-A3FD-4D5C69CFFD4F",variableType:4}
 */
var frm_es_nuevo = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"0B630486-E6AB-43D0-8EA7-D1D0170E7A7B",variableType:4}
 */
var frm_error = 0;

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"FE77A93D-3C8F-4AA0-9ADD-9A4C4450C024"}
 */
function onShow_inicio(firstShow, event) {
	elements.lbl_titulo.text = 'Tratamiento de Convenios Profesionales'	
	inicializa_campos()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"01AC6B3C-BDE7-404E-8C52-40C537DE2F94"}
 * @AllowToRunInFind
 */
function onAction_controlar_profesional(event) {
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
					   					   
					   //selecciona solo un registro tabla profesionales
					   forms.frm_tab_profesionales_mult.onAction_desel_uno(event) 
				   }		
		   	   }
	       }else{
	    	   globals.gbl_con_indice = 1	       	   
			   if(frm_es_nuevo == 0){
				   globals.gbl_con_busca = globals.gbl_con_profesional
					var win = application.createWindow("Busca_profe",JSWindow.MODAL_DIALOG)	
					win.title= 'Buscar Profesional'
					win.resizable = false
				    win.show(forms.frm_tab_profesionales)

				    if (forms.frm_scr_profesionales.foundset.codigo > 0){
					   globals.gbl_con_profesional = forms.frm_scr_profesionales.foundset.codigo.toString()
					   frm_prof_descripcion        = forms.frm_scr_profesionales.foundset.descripcion
				    }
				}else{
					if(globals.gbl_con_profesional == 'VARIOS'){
						globals.gbl_con_profesional = ' '
					}
					globals.gbl_con_busca = globals.gbl_con_profesional
					win = application.createWindow("Busca_profe_mult",JSWindow.MODAL_DIALOG)	
					win.title= 'Buscar Profesional'
					win.resizable = false
					win.show(forms.frm_tab_profesionales_mult)
                    
					if(forms.frm_tab_profesionales_mult.frm_total_reg == forms.frm_tab_profesionales_mult.frm_total_sel){
						globals.gbl_con_profesional = 'TODOS'
						globals.gbl_profesional     = 9999	
						frm_prof_descripcion        = forms.frm_tab_profesionales_mult.frm_total_sel + ' registros Seleccionados'
					}else{
						if(forms.frm_tab_profesionales_mult.frm_total_sel == 1){
							forms.frm_scr_profesionales_mult.foundset.find()				
				            forms.frm_scr_profesionales_mult.foundset.enabled = 1
				            forms.frm_scr_profesionales_mult.foundset.search()
							globals.gbl_con_profesional = forms.frm_scr_profesionales_mult.foundset.codigo.toString()
							frm_prof_descripcion        = forms.frm_scr_profesionales_mult.foundset.descripcion
						}else{
							if(forms.frm_tab_profesionales_mult.frm_total_sel == 0){
								globals.gbl_con_profesional = ''
								globals.gbl_profesional     = 0
							    frm_prof_descripcion        = ''
							}else{
							    globals.gbl_con_profesional = 'VARIOS'
							    globals.gbl_profesional     = 8888
							    frm_prof_descripcion        = forms.frm_tab_profesionales_mult.frm_total_sel + ' registros Seleccionados'
							}
						}
					}				    
				}
		   }	    
	  }else{	  
	       if(frm_es_nuevo == 1 ){
		       if(globals.gbl_con_profesional == 'TODOS' || globals.gbl_con_profesional == ''){
		           globals.gbl_con_profesional = 'TODOS'
		    	   globals.gbl_profesional     = 9999
		    	   forms.frm_tab_profesionales_mult.frm_campo_N1 = 0
		    	   forms.frm_tab_profesionales_mult.frm_campo_N2 = 0
		    	   //selecciona todas los registros tabla profesionales
		    	   elements.lbl_procesando.visible = true
				   application.updateUI()
		    	   forms.frm_scr_profesionales_mult.foundset.find()
	               forms.frm_scr_profesionales_mult.foundset.codigo = '> 0'
	               forms.frm_scr_profesionales_mult.foundset.search()
				   forms.frm_tab_profesionales_mult.onAction_selec(event)
				   frm_prof_descripcion        = forms.frm_tab_profesionales_mult.frm_total_sel + ' registros Seleccionados'
	               elements.lbl_procesando.visible = false
	               elements.con_especialidad.requestFocus()
		       }		    	
		    }
		}
		if(frm_es_nuevo == 1 && frm_error == 0){
			elements.lbl_procesando.visible = true
			application.updateUI()
	//ojo   forms.frm_tab_especialidad_mult.cargar_tabla_desde_profesionales()
			elements.lbl_procesando.visible = false
			if(forms.frm_tab_profesionales_mult.frm_total_sel == 0){
				globals.gbl_con_especial = ''
				globals.gbl_especialidad = 0
			    frm_espe_descripcion     = ''                       
			}else{            
		        globals.gbl_con_especial = 'TODAS'
	    	    globals.gbl_especialidad = 9999
				frm_espe_descripcion = forms.frm_tab_especialidad_mult.frm_total_sel + ' registros Seleccionados'
			}
		}
  }

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"28F9BA72-1384-481C-95BE-B4CA8CBEDEC4"}
 * @AllowToRunInFind
 */
function onAction_buscar_profesional(event) {
	var largo = globals.gbl_con_profesional.length;
    var esnumero = true;
    globals.gbl_con_indice = 1;
    if(globals.gbl_con_profesional == 'TODOS' || globals.gbl_con_profesional == 'VARIOS'){
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
	
	if(frm_es_nuevo == 0){
		globals.gbl_con_busca = globals.gbl_con_profesional
		var win = application.createWindow("Busca_profe",JSWindow.MODAL_DIALOG)	
		win.title= 'Buscar Profesional'
		win.resizable = false		
	    win.show(forms.frm_tab_profesionales)

	    if (forms.frm_scr_profesionales.foundset.codigo > 0){
		   globals.gbl_con_profesional = forms.frm_scr_profesionales.foundset.codigo.toString()
		   frm_prof_descripcion        = forms.frm_scr_profesionales.foundset.descripcion
	    }else{
	       globals.gbl_profesional = 0
	    }
	}else{
		globals.gbl_con_busca = globals.gbl_con_profesional
		win = application.createWindow("Busca_profe_mult",JSWindow.MODAL_DIALOG)	
		win.title= 'Buscar Profesional'
		win.resizable = false
		win.show(forms.frm_tab_profesionales_mult)
        
		if(forms.frm_tab_profesionales_mult.frm_total_reg == forms.frm_tab_profesionales_mult.frm_total_sel){
			globals.gbl_con_profesional = 'TODOS'
			globals.gbl_profesional     = 9999
			forms.frm_tab_profesionales_mult.frm_campo_N1 = 0
			forms.frm_tab_profesionales_mult.frm_campo_N2 = 0
			frm_prof_descripcion        = forms.frm_tab_profesionales_mult.frm_total_sel + ' registros Seleccionados'
		}else{
			if(forms.frm_tab_profesionales_mult.frm_total_sel == 1){
				forms.frm_scr_profesionales_mult.foundset.find()				
	            forms.frm_scr_profesionales_mult.foundset.enabled = 1
	            forms.frm_scr_profesionales_mult.foundset.search()
				globals.gbl_con_profesional = forms.frm_scr_profesionales_mult.foundset.codigo.toString()
				frm_prof_descripcion        = forms.frm_scr_profesionales_mult.foundset.descripcion
			}else{
				if(forms.frm_tab_profesionales_mult.frm_total_sel == 0){
					globals.gbl_con_profesional = ''
					globals.gbl_profesional     = 0
				    frm_prof_descripcion        = ''
				}else{
				    globals.gbl_con_profesional = 'VARIOS'
				    globals.gbl_profesional     = 8888
				    frm_prof_descripcion        = forms.frm_tab_profesionales_mult.frm_total_sel + ' registros Seleccionados'
				}
			}
		}
		if (frm_es_nuevo == 1){		    
			elements.lbl_procesando.visible = true
			application.updateUI()
		//ojo    forms.frm_tab_especialidad_mult.cargar_tabla_desde_profesionales()
			elements.lbl_procesando.visible = false
			if(forms.frm_tab_profesionales_mult.frm_total_sel == 0){
				globals.gbl_con_especial = ''
				globals.gbl_especialidad = 0
			    frm_espe_descripcion     = ''                       
			}else{            
		        globals.gbl_con_especial = 'TODAS'
	    	    globals.gbl_especialidad = 9999
				frm_espe_descripcion = forms.frm_tab_especialidad_mult.frm_total_sel + ' registros Seleccionados'
			}				
	    }		
	}	
}

/**
 * @AllowToRunInFind
 *
 * @param event
 *
 * @properties={typeid:24,uuid:"EC417F79-0974-4741-9457-4BCF69D07E9E"}
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
					   //selecciona solo un registro tabla especialidad
					   forms.frm_tab_especialidad_mult.onAction_desel_uno(event) 
				   }		
		   	   }
	       }else{
	    	   if(frm_es_nuevo == 0){
	    	       globals.gbl_con_busca = globals.gbl_con_especial
	    	       globals.gbl_con_indice = 1
	       	       var win = application.createWindow("Busca_espe",JSWindow.MODAL_DIALOG)	
			       win.title= 'Buscar Especialidad'
			       win.resizable = false
		           win.show(forms.frm_tab_especialidad)
			       if (forms.frm_scr_especialidad.foundset.esp_codi > 0){
			           globals.gbl_con_especial = forms.frm_scr_especialidad.foundset.esp_codi.toString()
			           frm_espe_descripcion     = forms.frm_scr_especialidad.foundset.esp_descrip
			       }
			   }else{
				   if(globals.gbl_con_especial == 'VARIAS'){
						globals.gbl_con_especial = ' '
					}
					globals.gbl_con_busca = globals.gbl_con_especial
					win = application.createWindow("Busca_espe_mult",JSWindow.MODAL_DIALOG)	
					win.title= 'Buscar Especialidad'
					win.resizable = false
					win.show(forms.frm_tab_especialidad_mult)
                   
					if(forms.frm_tab_especialidad_mult.frm_total_reg == forms.frm_tab_especialidad_mult.frm_total_sel){
						globals.gbl_con_especial = 'TODAS'
						globals.gbl_especialidad = 9999	
						frm_espe_descripcion     = forms.frm_tab_especialidad_mult.frm_total_sel + ' registros Seleccionados'
					}else{
						if(forms.frm_tab_especialidad_mult.frm_total_sel == 1){
							forms.frm_scr_especialidad_mult.foundset.find()				
				            forms.frm_scr_especialidad_mult.foundset.enabled = 1
				            forms.frm_scr_especialidad_mult.foundset.search()
							globals.gbl_con_especial = forms.frm_scr_especialidad_mult.foundset.codigo.toString()
							frm_espe_descripcion     = forms.frm_scr_especialidad_mult.foundset.descripcion
						}else{
							if(forms.frm_tab_especialidad_mult.frm_total_sel == 0){
								globals.gbl_con_especial = ''
								globals.gbl_especialidad = 0
							    frm_espe_descripcion     = ''
							}else{
							    globals.gbl_con_especial = 'VARIAS'
							    globals.gbl_especialidad = 8888
							    frm_espe_descripcion     = forms.frm_tab_especialidad_mult.frm_total_sel + ' registros Seleccionados'
							}
						}
					}				   
			   }
		   }	    
	  }else{
		  if(frm_es_nuevo == 1){
		      if(globals.gbl_con_especial == 'TODAS' || globals.gbl_con_especial == ''){
			      globals.gbl_con_especial = 'TODAS'
			      globals.gbl_especialidad = 9999			  
			      elements.con_cobertura.requestFocus()
			      //selecciona todos los registro tabla especialidad
			      forms.frm_scr_especialidad_mult.foundset.find()
                  forms.frm_scr_especialidad_mult.foundset.codigo = '> 0'
                  forms.frm_scr_especialidad_mult.foundset.search()
			      forms.frm_tab_especialidad_mult.onAction_selec(event)
			      frm_espe_descripcion     = forms.frm_tab_especialidad_mult.frm_total_sel + ' registros Seleccionados'
		      }
		  }
	  }
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"DACF1F9D-9793-4B44-B9F6-16CD8E9D5B6A"}
 * @AllowToRunInFind
 */
function onAction_buscar_espacialidad(event) {
	var largo = globals.gbl_con_especial.length;
    var esnumero = true;
    globals.gbl_con_indice = 1;
    if(globals.gbl_con_especial == 'TODAS' || globals.gbl_con_especial == 'VARIAS'){
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
    if(frm_es_nuevo == 0){
	    globals.gbl_con_busca = globals.gbl_con_especial
	    globals.gbl_con_indice = 1
	    var win = application.createWindow("Busca_espe",JSWindow.MODAL_DIALOG)	
	    win.title= 'Buscar Especialidad'
	    win.resizable = false
        win.show(forms.frm_tab_especialidad)
	    if (forms.frm_scr_especialidad.foundset.esp_codi > 0){
	        globals.gbl_con_especial = forms.frm_scr_especialidad.foundset.esp_codi.toString()
	        frm_espe_descripcion     = forms.frm_scr_especialidad.foundset.esp_descrip
	    }
	}else{		   
		globals.gbl_con_busca = globals.gbl_con_especial
		win = application.createWindow("Busca_espe_mult",JSWindow.MODAL_DIALOG)	
		win.title= 'Buscar Especialidad'
		win.resizable = false
		win.show(forms.frm_tab_especialidad_mult)
        
		if(forms.frm_tab_especialidad_mult.frm_total_reg == forms.frm_tab_especialidad_mult.frm_total_sel){
			globals.gbl_con_especial = 'TODAS'
			globals.gbl_especialidad = 9999	
			frm_espe_descripcion     = forms.frm_tab_especialidad_mult.frm_total_sel + ' registros Seleccionados'
		}else{
			if(forms.frm_tab_especialidad_mult.frm_total_sel == 1){
				forms.frm_scr_especialidad_mult.foundset.find()				
	            forms.frm_scr_especialidad_mult.foundset.enabled = 1
	            forms.frm_scr_especialidad_mult.foundset.search()
				globals.gbl_con_especial = forms.frm_scr_especialidad_mult.foundset.codigo.toString()
				frm_espe_descripcion     = forms.frm_scr_especialidad_mult.foundset.descripcion
			}else{
				if(forms.frm_tab_especialidad_mult.frm_total_sel == 0){
					globals.gbl_con_especial = ''
					globals.gbl_especialidad = 0
				    frm_espe_descripcion     = ''
				}else{
				    globals.gbl_con_especial = 'VARIAS'
				    globals.gbl_especialidad = 8888
				    frm_espe_descripcion        = forms.frm_tab_especialidad_mult.frm_total_sel + ' registros Seleccionados'
				}
			}
		}				   
	}    
}

/** 
 * @param event
 *
 * @properties={typeid:24,uuid:"7CC0C10B-4AA0-436F-B31C-C09C159164C7"}
 * @AllowToRunInFind
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
				   }else {
				   	   frm_obra_descripcion = gbl_cob_to_coberturas.obr_razonsoc				   	   
					   if (globals.gbl_catalogo == 'cirendsa'){
						   frm_obra_descripcion = gbl_cob_to_coberturas_cirendsa.obr_razonsoc
					   }				   
				       elements.con_grupo.requestFocus()
					   //selecciona solo un registro tabla obra social
					   forms.frm_tab_coberturas_mult.onAction_desel_uno(event) 
				   }		
		   	   }
	       }else{	    	   
	    	   globals.gbl_con_indice = 1
	    	   if(frm_es_nuevo == 0){
	    		   globals.gbl_con_busca = globals.gbl_con_cobertura
	       	       var win = application.createWindow("Busca_cober",JSWindow.MODAL_DIALOG)	
			       win.title= 'Buscar Obra Social'
			       win.resizable = false
		           win.show(forms.frm_tab_coberturas_emp)
			       if (forms.frm_scr_coberturas_emp.foundset.codigo > 0){
			           globals.gbl_con_cobertura = forms.frm_scr_coberturas_emp.foundset.codigo.toString()
			           frm_obra_descripcion      = forms.frm_scr_coberturas_emp.foundset.descripcion
			       }
			   }else{
				   if (globals.gbl_con_cobertura == 'VARIAS'){
					   globals.gbl_con_cobertura = ' '
				   }
				   globals.gbl_con_busca = globals.gbl_con_cobertura
	       	       win = application.createWindow("Busca_cober_mult",JSWindow.MODAL_DIALOG)	
			       win.title= 'Buscar Obra Social'
			       win.resizable = false
		           win.show(forms.frm_tab_coberturas_mult)
				   if(forms.frm_tab_coberturas_mult.frm_total_reg == forms.frm_tab_coberturas_mult.frm_total_sel){
						globals.gbl_con_cobertura = 'TODAS'
						globals.gbl_cobertura     = 9999	
						forms.frm_tab_coberturas_mult.frm_campo_N1 = 0
				    	forms.frm_tab_coberturas_mult.frm_campo_N2 = 0
						frm_obra_descripcion      = forms.frm_tab_coberturas_mult.frm_total_sel + ' registros Seleccionados'
					}else{
						if(forms.frm_tab_coberturas_mult.frm_total_sel == 1){
							forms.frm_scr_coberturas_mult.foundset.find()				
				            forms.frm_scr_coberturas_mult.foundset.enabled = 1
				            forms.frm_scr_coberturas_mult.foundset.search()
							globals.gbl_con_cobertura = forms.frm_scr_coberturas_mult.foundset.codigo.toString()
							frm_obra_descripcion      = forms.frm_scr_coberturas_mult.foundset.descripcion
						}else{
							if(forms.frm_tab_coberturas_mult.frm_total_sel == 0){
								globals.gbl_con_cobertura = ''
								globals.gbl_cobertura     = 0
							    frm_obra_descripcion      = ''
							}else{
							    globals.gbl_con_cobertura = 'VARIAS'
							    globals.gbl_cobertura     = 8888
							    frm_obra_descripcion      = forms.frm_tab_coberturas_mult.frm_total_sel + ' registros Seleccionados'
							}
						}
					}			   
			   }
		   }	
	}else{
		if(frm_es_nuevo == 1){	
	         if(globals.gbl_con_cobertura == 'TODAS' || globals.gbl_con_cobertura == ''){
	    	      globals.gbl_con_cobertura = 'TODAS'
	    	      globals.gbl_cobertura     = 9999
	    	      forms.frm_tab_coberturas_mult.frm_campo_N1 = 0
			      forms.frm_tab_coberturas_mult.frm_campo_N2 = 9999
	    	      elements.con_grupo.requestFocus()
				  //selecciona todos los registro tabla obra social
				  forms.frm_scr_coberturas_mult.foundset.find()
                  forms.frm_scr_coberturas_mult.foundset.codigo = '> 0'
                  forms.frm_scr_coberturas_mult.foundset.search()
			      forms.frm_tab_coberturas_mult.onAction_selec(event)
				  frm_obra_descripcion      = forms.frm_tab_coberturas_mult.frm_total_sel + ' registros Seleccionados'
	         }
	    }
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"E5BC3EFF-3822-43A3-9841-85EF921CD344"}
 * @AllowToRunInFind
 */
function onAction_buscar_obra(event) {
	var largo = globals.gbl_con_cobertura.length;
	var esnumero = true;
    if(globals.gbl_con_cobertura == 'TODAS' || globals.gbl_con_cobertura == 'VARIAS'){
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
    if(frm_es_nuevo == 0){
    	globals.gbl_con_busca = globals.gbl_con_cobertura
        var win = application.createWindow("Busca_cober",JSWindow.MODAL_DIALOG)	
        win.title= 'Buscar Cobertura'
        win.resizable = false
        win.show(forms.frm_tab_coberturas_emp)

        if (forms.frm_scr_coberturas_emp.foundset.codigo > 0){
	       globals.gbl_con_cobertura = forms.frm_scr_coberturas_emp.foundset.codigo.toString()
	       frm_obra_descripcion      = forms.frm_scr_coberturas_emp.foundset.descripcion
       }else{
	       globals.gbl_cobertura = 0
       }
   }else{
	   if (globals.gbl_con_cobertura == 'VARIAS'){
		   globals.gbl_con_cobertura = ' '
	   }
	   globals.gbl_con_busca = globals.gbl_con_cobertura
	       win = application.createWindow("Busca_cober_mult",JSWindow.MODAL_DIALOG)	
       win.title= 'Buscar Obra Social'
       win.resizable = false
       win.show(forms.frm_tab_coberturas_mult)
	   if(forms.frm_tab_coberturas_mult.frm_total_reg == forms.frm_tab_coberturas_mult.frm_total_sel){
			globals.gbl_con_cobertura = 'TODAS'
			globals.gbl_cobertura     = 9999
			forms.frm_tab_coberturas_mult.frm_campo_N1 = 0
	    	forms.frm_tab_coberturas_mult.frm_campo_N2 = 9999
			frm_obra_descripcion      = forms.frm_tab_coberturas_mult.frm_total_sel + ' registros Seleccionados'
		}else{
			if(forms.frm_tab_coberturas_mult.frm_total_sel == 1){
				forms.frm_scr_coberturas_mult.foundset.find()				
	            forms.frm_scr_coberturas_mult.foundset.enabled = 1
	            forms.frm_scr_coberturas_mult.foundset.search()
				globals.gbl_con_cobertura = forms.frm_scr_coberturas_mult.foundset.codigo.toString()
				frm_obra_descripcion      = forms.frm_scr_coberturas_mult.foundset.descripcion
			}else{
				if(forms.frm_tab_coberturas_mult.frm_total_sel == 0){
					globals.gbl_con_cobertura = ''
					globals.gbl_cobertura     = 0
				    frm_obra_descripcion      = ''
				}else{
				    globals.gbl_con_cobertura = 'VARIAS'
				    globals.gbl_cobertura     = 8888
				    frm_obra_descripcion      = forms.frm_tab_coberturas_mult.frm_total_sel + ' registros Seleccionados'
				}
			}
		}
   }
}

/**
 * @AllowToRunInFind
 *  
 * @param event
 *
 * @properties={typeid:24,uuid:"6910B911-5C8D-4A51-90F2-E2B9B1FD1326"}
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
					   // selecciona solo un registro tabla grupos
					   forms.frm_tab_grupo_mult.onAction_desel_uno(event)
				   }		
		   	   }
	       }else{
	    	   globals.gbl_con_indice = 1
			   if(frm_es_nuevo == 0){
				   globals.gbl_con_busca = globals.gbl_con_grupo_nom
					var win = application.createWindow("Busca_grupo",JSWindow.MODAL_DIALOG)	
					win.title= 'Buscar Grupo Nomenclador'
					win.resizable = false
				    win.show(forms.frm_tab_grupo)

				    if (forms.frm_scr_grupo.foundset.gru2 > 0){
					   globals.gbl_con_grupo_nom = forms.frm_scr_grupo.foundset.gru2.toString()
					   frm_grup_nom_descripcion  = forms.frm_scr_grupo.foundset.gru33
				    }
				}else{	
					if(globals.gbl_con_grupo_nom == 'VARIOS'){
				    	globals.gbl_con_grupo_nom = ' '
				    }
					globals.gbl_con_busca = globals.gbl_con_grupo_nom
					win = application.createWindow("Busca_grupo_mult",JSWindow.MODAL_DIALOG)	
					win.title= 'Buscar Grupo Nomenclador'
					win.resizable = false
					win.show(forms.frm_tab_grupo_mult)
                    
					if(forms.frm_tab_grupo_mult.frm_total_reg == forms.frm_tab_grupo_mult.frm_total_sel){
						globals.gbl_con_grupo_nom = 'TODOS'
						globals.gbl_grupo_nom     = 9999	
						frm_grup_nom_descripcion  = forms.frm_tab_grupo_mult.frm_total_sel + ' registros Seleccionados'
					}else{
						if(forms.frm_tab_grupo_mult.frm_total_sel == 1){
							forms.frm_scr_grupo_mult.foundset.find()				
				            forms.frm_scr_grupo_mult.foundset.enabled = 1
				            forms.frm_scr_grupo_mult.foundset.search()
							globals.gbl_con_grupo_nom = forms.frm_scr_grupo_mult.foundset.codigo.toString()
							frm_grup_nom_descripcion  = forms.frm_scr_grupo_mult.foundset.descripcion
						}else{
							if(forms.frm_tab_grupo_mult.frm_total_sel == 0){
								globals.gbl_con_grupo_nom = ''
								globals.gbl_grupo_nom     = 0
							    frm_grup_nom_descripcion  = ''							
							}else{
								globals.gbl_con_grupo_nom = 'VARIOS'
								globals.gbl_grupo_nom     = 8888
								frm_grup_nom_descripcion  = forms.frm_tab_grupo_mult.frm_total_sel + ' registros Seleccionados'								
							}
						}
					}				    
				}
		   }	    
	  }else{	  
	       if(frm_es_nuevo == 1 ){
		       if(globals.gbl_con_grupo_nom == 'TODOS' || globals.gbl_con_grupo_nom == ''){
		           globals.gbl_con_grupo_nom = 'TODOS'
		    	   globals.gbl_grupo_nom     = 9999
		    	   //selecciona todas los registros tabla grupos
		    	   elements.lbl_procesando.visible = true
				   application.updateUI()
		    	   forms.frm_scr_grupo_mult.foundset.find()
	               forms.frm_scr_grupo_mult.foundset.codigo = '> 0'
	               forms.frm_scr_grupo_mult.foundset.search()
				   forms.frm_tab_grupo_mult.onAction_selec(event)
				   frm_grup_nom_descripcion = forms.frm_tab_grupo_mult.frm_total_sel + ' registros Seleccionados'
	               elements.lbl_procesando.visible = false
	               elements.con_nomencla.requestFocus()
		       }		    	
		   }
	  }
	  if(frm_es_nuevo == 1 && frm_error == 0){
		  elements.lbl_procesando.visible = true
		  application.updateUI()
		  forms.frm_tab_nomencla_mult.cargar_tabla_desde_grupo()
		  elements.lbl_procesando.visible = false
		  if(forms.frm_tab_nomencla_mult.frm_total_sel == 0){
			  globals.gbl_con_nomencla = ''
			  globals.gbl_nomencla     = 0
			  frm_nome_descripcion     = ''                       
		  }else{            
		      globals.gbl_con_nomencla = 'TODOS'
	    	  globals.gbl_nomencla     = 9999
			  frm_nome_descripcion     = forms.frm_tab_nomencla_mult.frm_total_sel + ' registros Seleccionados'
		  }
	  }     
  }

/**
 * @param event
 *
 * @properties={typeid:24,uuid:"771F1E04-60D8-4349-89FB-83C826731937"}
 * @AllowToRunInFind
 */
function onAction_buscar_grupo(event) {
	var largo = globals.gbl_con_grupo_nom.length;
	var esnumero = true;    
	globals.gbl_con_indice = 1;
	if(globals.gbl_con_grupo_nom == 'TODOS' || globals.gbl_con_grupo_nom == 'VARIOS'){
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
    if(frm_es_nuevo == 0){
        globals.gbl_con_busca = globals.gbl_con_grupo_nom
        var win = application.createWindow("Busca_grupo",JSWindow.MODAL_DIALOG)	
        win.title= 'Buscar Grupo Nomenclador'
        win.resizable = false
        win.show(forms.frm_tab_grupo)

        if (forms.frm_scr_grupo.foundset.gru2 > 0){
	       globals.gbl_con_grupo_nom = forms.frm_scr_grupo.foundset.gru2.toString()
	       frm_grup_nom_descripcion  = forms.frm_scr_grupo.foundset.gru33
       }else{
	       globals.gbl_grupo_nom = 0
       }
    }else{
    	globals.gbl_con_busca = globals.gbl_con_grupo_nom
		win = application.createWindow("Busca_grupo_mult",JSWindow.MODAL_DIALOG)	
		win.title= 'Buscar Grupo Nomenclador'
		win.resizable = false
		win.show(forms.frm_tab_grupo_mult)		

		if(forms.frm_tab_grupo_mult.frm_total_reg == forms.frm_tab_grupo_mult.frm_total_sel){
			globals.gbl_con_grupo_nom = 'TODOS'
			globals.gbl_grupo_nom     = 9999			
			frm_grup_nom_descripcion  = forms.frm_tab_grupo_mult.frm_total_sel + ' registros Seleccionados'
		}else{
			if(forms.frm_tab_grupo_mult.frm_total_sel == 1){
		    	forms.frm_scr_grupo_mult.foundset.find()				
	            forms.frm_scr_grupo_mult.foundset.enabled = 1
	            forms.frm_scr_grupo_mult.foundset.search()				
				globals.gbl_con_grupo_nom = forms.frm_scr_grupo_mult.codigo.toString()
				frm_grup_nom_descripcion  = forms.frm_scr_grupo_mult.descripcion
			}else{
				if(forms.frm_tab_grupo_mult.frm_total_sel == 0){
					globals.gbl_con_grupo_nom = ''
					globals.gbl_grupo_nom     = 0
				    frm_grup_nom_descripcion  = ''
				}else{
					globals.gbl_con_grupo_nom = 'VARIOS'
					globals.gbl_grupo_nom     = 8888
				    frm_grup_nom_descripcion  = forms.frm_tab_grupo_mult.frm_total_sel + ' registros Seleccionados'
				}
			}
		}	
	}
	if(frm_es_nuevo == 1){
		elements.lbl_procesando.visible = true
		application.updateUI()
	    forms.frm_tab_nomencla_mult.cargar_tabla_desde_grupo()
		elements.lbl_procesando.visible = false
		if(forms.frm_tab_nomencla_mult.frm_total_sel == 0){
			globals.gbl_con_nomencla = ''
			globals.gbl_nomencla     = 0
		    frm_nome_descripcion     = ''                       
		}else{            
	        globals.gbl_con_nomencla = 'TODOS'
    	    globals.gbl_nomencla     = 9999
			frm_nome_descripcion     = forms.frm_tab_nomencla_mult.frm_total_sel + ' registros Seleccionados'
		}
	}    
}

/*** 
 * @param event
 *
 * @properties={typeid:24,uuid:"CADFE812-E148-4B08-8404-3960CBBFD2DF"}
 * @AllowToRunInFind
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
					   
					   //selecciona solo un registro tabla nomenclador
					   forms.frm_tab_nomencla_mult.onAction_desel_uno(event) 
				   }		
		   	   }
	       }else{
	    	   globals.gbl_con_indice = 1
			   if (frm_es_nuevo == 0){
				   globals.gbl_con_busca = globals.gbl_con_nomencla
	       	       var win = application.createWindow("Busca_nome",JSWindow.MODAL_DIALOG)	
			       win.title= 'Buscar Nomenclador'
			       win.resizable = false
		           win.show(forms.frm_tab_nomencla)
			       if (forms.frm_scr_nomencla.foundset.nome_codigo > 0){
			           globals.gbl_con_nomencla = forms.frm_scr_nomencla.foundset.nome_codigo.toString()
			           frm_nome_descripcion     = forms.frm_scr_nomencla.foundset.nome_descr
			       }
			   }else{
				   if(globals.gbl_con_nomencla == 'VARIAS'){
					   globals.gbl_con_nomencla = ' '
				   }
				   globals.gbl_con_busca = globals.gbl_con_nomencla
				   win = application.createWindow("Busca_nome_mult",JSWindow.MODAL_DIALOG)	
			       win.title= 'Buscar Nomenclador'
			       win.resizable = false
		           win.show(forms.frm_tab_nomencla_mult)
				   if(forms.frm_tab_nomencla_mult.frm_total_reg == forms.frm_tab_nomencla_mult.frm_total_sel){
						globals.gbl_con_nomencla = 'TODOS'
						globals.gbl_nomencla     = 9999	
						frm_nome_descripcion     = forms.frm_tab_nomencla_mult.frm_total_sel + ' registros Seleccionados'
					}else{
						if(forms.frm_tab_nomencla_mult.frm_total_sel == 1){
							forms.frm_scr_nomencla_mult.foundset.find()				
				            forms.frm_scr_nomencla_mult.foundset.enabled = 1
				            forms.frm_scr_nomencla_mult.foundset.search()
							globals.gbl_con_nomencla = forms.frm_scr_nomencla_mult.foundset.codigo.toString()
							frm_nome_descripcion     = forms.frm_scr_nomencla_mult.foundset.descripcion
						}else{
							if(forms.frm_tab_nomencla_mult.frm_total_sel == 0){
								globals.gbl_con_nomencla = ''
								globals.gbl_nomencla     = 0
							    frm_nome_descripcion      = ''
							}else{
							    globals.gbl_con_nomencla = 'VARIOS'
							    globals.gbl_nomencla     = 8888
							    frm_nome_descripcion      = forms.frm_tab_nomencla_mult.frm_total_sel + ' registros Seleccionados'
							}
						}
					}				   				   
			   }
		   }	    
	  }else{
		  if (frm_es_nuevo == 1){
		      if(globals.gbl_con_nomencla == 'TODOS' || globals.gbl_con_nomencla == ''){
			      globals.gbl_con_nomencla = 'TODOS'
			      globals.gbl_nomencla     = 9999			      
			      elements.con_fecha_desde.requestFocus()
				  //selecciona todos los registro tabla nomenclador
				  forms.frm_scr_nomencla_mult.foundset.find()
                  forms.frm_scr_nomencla_mult.foundset.codigo = '> 0'
                  forms.frm_scr_nomencla_mult.foundset.search()
			      forms.frm_tab_nomencla_mult.onAction_selec(event)
				  frm_nome_descripcion     = forms.frm_tab_nomencla_mult.frm_total_sel + ' registros Seleccionados'
		      }
		  }
	  }
}

/*** 
 * @param event
 *
 * @properties={typeid:24,uuid:"93CA7FBB-F9ED-4855-8B36-2A9C00CA4D94"}
 * @AllowToRunInFind
 */
function onAction_buscar_nome(event) {
	var largo = globals.gbl_con_nomencla.length;
	var esnumero = true;   
	if(globals.gbl_con_nomencla == 'TODOS' || globals.gbl_con_nomencla == 'VARIOS'){
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
    if (frm_es_nuevo == 0){
    	globals.gbl_con_busca = globals.gbl_con_nomencla
        var win = application.createWindow("Busca_nome",JSWindow.MODAL_DIALOG)	
        win.title= 'Buscar Nomenclador'
        win.resizable = false
        win.show(forms.frm_tab_nomencla)

        if (forms.frm_scr_nomencla.foundset.nome_codigo > 0){
	        globals.gbl_con_nomencla = forms.frm_scr_nomencla.foundset.nome_codigo.toString()
	        frm_nome_descripcion     = forms.frm_scr_nomencla.foundset.nome_descr
         }else{
	        globals.gbl_nomencla = 0
         }
    }else{
    	globals.gbl_con_busca = globals.gbl_con_nomencla
		win =  application.createWindow("Busca_nome_mult",JSWindow.MODAL_DIALOG)	
	    win.title= 'Buscar Nomenclador'
	    win.resizable = false
        win.show(forms.frm_tab_nomencla_mult) 
		if(forms.frm_tab_nomencla_mult.frm_total_reg == forms.frm_tab_nomencla_mult.frm_total_sel){
		    globals.gbl_con_nomencla = 'TODOS'
			globals.gbl_nomencla     = 9999	
			frm_nome_descripcion     = forms.frm_tab_nomencla_mult.frm_total_sel + ' registros Seleccionados'
		}else{
			if(forms.frm_tab_nomencla_mult.frm_total_sel == 1){
				forms.frm_scr_nomencla_mult.foundset.find()				
	            forms.frm_scr_nomencla_mult.foundset.enabled = 1
	            forms.frm_scr_nomencla_mult.foundset.search()
				globals.gbl_con_nomencla = forms.frm_scr_nomencla_mult.foundset.codigo.toString()
				frm_nome_descripcion     = forms.frm_scr_nomencla_mult.foundset.descripcion
			}else{
				if(forms.frm_tab_nomencla_mult.frm_total_sel == 0){
					globals.gbl_con_nomencla = ''
					globals.gbl_nomencla     = 0
				    frm_nome_descripcion      = ''
				}else{
				    globals.gbl_con_nomencla = 'VARIOS'
				    globals.gbl_nomencla     = 8888
				    frm_nome_descripcion      = forms.frm_tab_nomencla_mult.frm_total_sel + ' registros Seleccionados'
				}
			}
		}
    }
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"5689A71C-0AC9-4B53-AAB1-CD29268DE4E2"}
 */
function onAction_alta(event) {	
    inicializa_campos()
	globals.gbl_con_empresa     = 1
    globals.gbl_con_profesional = 'VARIOS'
	globals.gbl_profesional     = 8888
	
	globals.gbl_con_especial    = 'TODAS'
	globals.gbl_especialidad    = 9999
	
	globals.gbl_con_cobertura   = 'VARIAS'
	globals.gbl_cobertura       = 8888
	
	globals.gbl_con_tipo_nom    = '01'
	globals.gbl_tipo_nom        = 01
	
	globals.gbl_con_grupo_nom   = 'TODOS'
	globals.gbl_grupo_nom       = 9999
	
	globals.gbl_con_nomencla    = 'TODOS'
	globals.gbl_nomencla        = 9999
	
   
    frm_es_nuevo = 1
    habilita_campos()
    deshabilita_btn()
    elements.bt_anterior.enabled =false
    elements.bt_siguiente.enabled=false    
    elements.con_profesional.requestFocus()
    
    elements.lbl_procesando.text = 'Cargando Tabla Profesionales'
    elements.lbl_procesando.visible = true
    application.updateUI()
    //Carga tabla de Profesionales
    forms.frm_tab_profesionales_mult.cargar_tabla()
    //Carga tabla de Especialidad 
    elements.lbl_procesando.text = 'Cargando Tabla Especialidades'    
    application.updateUI()    
    forms.frm_tab_especialidad_mult.cargar_tabla()
    //Carga tabla de Obras Sociales
    elements.lbl_procesando.text = 'Cargando Tabla Obras Sociales'    
    application.updateUI()
    forms.frm_tab_coberturas_mult.cargar_tabla()
    //Carga tabla de Grupos de Nomenclador
    elements.lbl_procesando.text = 'Cargando Tabla Grupos'    
    application.updateUI()
    forms.frm_tab_grupo_mult.cargar_tabla()    
	//Carga tabla de Nomenclador
	elements.lbl_procesando.text = 'Cargando Tabla Nomenclador'    
    application.updateUI()
    forms.frm_tab_nomencla_mult.cargar_tabla()    
	elements.lbl_procesando.text = 'Cargando Tabla'
    
    frm_prof_descripcion     = forms.frm_tab_profesionales_mult.frm_total_sel + ' registros Seleccionados'
    frm_espe_descripcion     = forms.frm_tab_especialidad_mult.frm_total_sel  + ' registros Seleccionados'
	frm_obra_descripcion     = forms.frm_tab_coberturas_mult.frm_total_sel    + ' registros Seleccionados'
	frm_grup_nom_descripcion = forms.frm_tab_grupo_mult.frm_total_sel         + ' registros Seleccionados'
	frm_nome_descripcion     = forms.frm_tab_nomencla_mult.frm_total_sel      + ' registros Seleccionados'
    elements.lbl_procesando.visible = false
}

/**
 * @properties={typeid:24,uuid:"9BC3B02D-D20D-4AF6-ABC4-24AB9E117790"}
 */
function inicializa_campos(){
	globals.gbl_con_empresa     = 1
	globals.gbl_con_profesional = ' '
	globals.gbl_profesional     = 0
	frm_prof_descripcion        = ''
	globals.gbl_con_especial    = ' '
	globals.gbl_especialidad    = 0
	frm_espe_descripcion        = ''
	globals.gbl_con_cobertura   = ' '
	globals.gbl_cobertura       = 0
	frm_obra_descripcion        = ''
	globals.gbl_con_tipo_nom    = '01'
	globals.gbl_tipo_nom        = 01
	globals.gbl_con_grupo_nom   = ' '
	frm_grup_nom_descripcion    = ''		
	globals.gbl_con_nomencla    = ' '
	globals.gbl_nomencla        = 0
	frm_nome_descripcion        = ''
	globals.gbl_tipo_valor      = 0
	globals.gbl_imp_valor       = null
	globals.gbl_imp_valor2      = null
	globals.gbl_imp_rec_fer     = null
	globals.gbl_imp_rec_noc     = null
	globals.gbl_imp_rec_urg     = null
	globals.gbl_tipo_rec_fer    = null
	globals.gbl_tipo_rec_noc    = null
	globals.gbl_tipo_rec_urg    = null
	globals.gbl_fecha_desde     = null
	globals.gbl_con_observa     = null
	
	globals.gbl_catalogo        = 'maestros'
	//Carga tabla de Profesionales
    forms.frm_tab_profesionales.cargar_tabla()
	//Carga tabla de Obras Sociales
    forms.frm_tab_coberturas_emp.cargar_tabla()
	frm_con_val_mon             = ''	
	frm_es_nuevo                = 0
	globals.gbl_con_busca       = ''  
	controller.loadRecords()
	foundset.sort('conv_empresa asc, conv_profesional asc, conv_especialidad asc, conv_obra_social asc, conv_tipo_nom asc')
}

/**
 * @properties={typeid:24,uuid:"EB486A89-0C17-4644-BA1D-FF72E159D433"}
 */
function habilita_campos(){
	elements.con_empresa.enabled       =true
	elements.con_profesional.enabled   =true
	elements.con_especialidad.enabled  =true
    elements.con_cobertura.enabled     =true
	elements.con_grupo.enabled         =true
	elements.con_nomencla.enabled      =true
	elements.con_fecha_desde.enabled   =true
	elements.bt_buscar_prof.enabled    =true
	elements.bt_buscar_esp.enabled     =true
	elements.bt_buscar_cober.enabled   =true
	elements.bt_buscar_grup.enabled    =true	
	elements.bt_buscar_nom.enabled     =true
}

/**
 * @properties={typeid:24,uuid:"AE88F92D-A988-4FD9-B415-D6BA38468D4C"}
 */
function deshabilita_campos(){
	elements.con_empresa.enabled      =false
	elements.bt_buscar_prof.enabled   =false
	elements.con_profesional.enabled  =false
	elements.con_especialidad.enabled =false
	elements.bt_buscar_esp.enabled    =false				
	elements.con_cobertura.enabled    =false
	elements.bt_buscar_cober.enabled  =false
	elements.con_grupo.enabled        =false
	elements.bt_buscar_grup.enabled   =false				
	elements.con_nomencla.enabled     =false
	elements.bt_buscar_nom.enabled    =false
	elements.con_fecha_desde.enabled  =false
}

/**
 * @properties={typeid:24,uuid:"E2E5CD19-7B3A-4136-8832-CAF711F519F9"}
 */
function habilita_campos2(){
	elements.con_tipo_valor.enabled  =true
	elements.con_imp_valor.enabled   =true
	elements.con_imp_valor2.enabled  =true
	elements.con_imp_rec_fer.enabled =true
	elements.con_imp_rec_noc.enabled =true
	elements.con_imp_rec_urg.enabled =true
	elements.con_rec_fer.enabled     =true
	elements.con_rec_noc.enabled     =true
	elements.con_rec_urg.enabled     =true
	elements.con_observa.enabled     =true
}

/**
 * @properties={typeid:24,uuid:"5EB58B8E-D512-488B-A628-C08E5E39B79E"}
 */
function deshabilita_campos2(){	
	elements.con_tipo_valor.enabled  =false
	elements.con_imp_valor.enabled   =false
	elements.con_imp_valor2.enabled  =false
	elements.con_imp_rec_fer.enabled =false
	elements.con_imp_rec_noc.enabled =false
	elements.con_imp_rec_urg.enabled =false
	elements.con_rec_fer.enabled     =false
	elements.con_rec_noc.enabled     =false
	elements.con_rec_urg.enabled     =false
	elements.con_observa.enabled     =false
}

/**
 * @properties={typeid:24,uuid:"7D78FF54-B55C-45BD-BBB8-8A1673549018"}
 */
function deshabilita_btn(){
    elements.bt_borrar.enabled   =false
    elements.bt_nuevo.enabled    =false
    elements.bt_buscar.enabled   =false
    elements.bt_imprimir.enabled =false
    elements.bt_grabar.enabled   =false
	elements.bt_editar.enabled   =false
	elements.bt_copiar.enabled   =false
}

/**
 * @properties={typeid:24,uuid:"85BE2B39-3B9D-40B0-908D-38A56CF9B280"}
 */
function habilita_btn(){	
	elements.bt_anterior.enabled =true
    elements.bt_siguiente.enabled=true
    elements.bt_borrar.enabled   =false
    elements.bt_nuevo.enabled    =true
    elements.bt_buscar.enabled   =true
    elements.bt_imprimir.enabled =true
    elements.bt_grabar.enabled   =false
	elements.bt_editar.enabled   =false
	elements.bt_copiar.enabled   =true
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"08AE60C1-AAC0-4550-B3EA-51DFE9B45B1A"}
 */
function onAction_cancelar(event) {
	if ((globals.gbl_con_profesional != conv_profesional || globals.gbl_con_especial != conv_especialidad)
		&& globals.gbl_con_profesional != ''){
		var $ok = globals.DIALOGS.showQuestionDialog('Confirmación','Perderá los cambios, Confirma ?','Si', 'No')
		if ($ok=='Si'){
			inicializa_campos()
			habilita_campos()
			deshabilita_campos2()
			habilita_btn()			
		}
	}else{
		inicializa_campos()
		habilita_campos()
		deshabilita_campos2()
	    habilita_btn()		
	}		
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"2B950829-CE5F-4AD0-9296-5C4EACB66039"}
 * @AllowToRunInFind
 */
function onAction_grabar(event) {
	if (globals.gbl_con_profesional == ''|| globals.gbl_con_especial == ''|| globals.gbl_con_cobertura == '' 
		|| globals.gbl_con_grupo_nom == '' || globals.gbl_con_nomencla == '' || globals.gbl_fecha_desde == '' 
		|| globals.gbl_tipo_valor == null || globals.gbl_imp_valor == null){		
		globals.DIALOGS.showWarningDialog('Atención','No se puede Grabar, faltan datos', 'Ok')
	    elements.con_profesional.requestFocus()
	}else{
		elements.lbl_procesando.text = 'Grabando.....'
		elements.lbl_procesando.visible = true
		application.updateUI()
		
		if (frm_es_nuevo == 1){
			var $OK = 'Si'
			if (globals.gbl_con_profesional == 'TODOS' || globals.gbl_con_profesional == 'VARIOS'){				
				$OK = globals.DIALOGS.showWarningDialog('Atención','Se generará un registro por cada profesional seleccionado, conrfirma?', 'Si', 'No')
			}else{
				if (globals.gbl_con_especial == 'TODAS' || globals.gbl_con_especial == 'VARIAS'){				
					$OK = globals.DIALOGS.showWarningDialog('Atención','Se generará un registro por cada especialidad seleccionado, conrfirma?', 'Si', 'No')
				}else{
					if (globals.gbl_con_cobertura == 'TODAS' || globals.gbl_con_cobertura == 'VARIAS'){				
						$OK = globals.DIALOGS.showWarningDialog('Atención','Se generará un registro por cada obra social seleccionado, conrfirma?', 'Si', 'No')
					}else{
						if (globals.gbl_con_grupo_nom == 'TODOS' || globals.gbl_con_nomencla == 'VARIOS'){				
							$OK = globals.DIALOGS.showWarningDialog('Atención','Se generará un registro por cada grupo seleccionado, conrfirma?', 'Si', 'No')					
					    }else{	
					        if (globals.gbl_con_nomencla == 'TODOS' || globals.gbl_con_nomencla == 'VARIOS'){				
							    $OK = globals.DIALOGS.showWarningDialog('Atención','Se generará un registro por cada nomenclador seleccionado, conrfirma?', 'Si', 'No')					
					        }
					    }
				    }		
				}
			}	
			if ($OK == 'Si'){
				// Filtra solos los seleccionados
				forms.frm_scr_profesionales_mult.foundset.addFoundSetFilterParam('enabled', '=', '1','filtro')	
			    forms.frm_scr_especialidad_mult.foundset.addFoundSetFilterParam('enabled', '=', '1','filtro')
				forms.frm_scr_coberturas_mult.foundset.addFoundSetFilterParam('enabled', '=', '1','filtro')
				forms.frm_scr_grupo_mult.foundset.addFoundSetFilterParam('enabled', '=', '1','filtro')
				forms.frm_scr_nomencla_mult.foundset.addFoundSetFilterParam('enabled', '=', '1','filtro')
				var $max_profesionales = databaseManager.getFoundSetCount(forms.frm_scr_profesionales_mult.foundset)
				var $max_especialidad  = databaseManager.getFoundSetCount(forms.frm_scr_especialidad_mult.foundset)
				var $max_coberturas    = databaseManager.getFoundSetCount(forms.frm_scr_coberturas_mult.foundset)
				var $max_grupo         = databaseManager.getFoundSetCount(forms.frm_scr_grupo_mult.foundset)
				var $max_nomencla      = databaseManager.getFoundSetCount(forms.frm_scr_nomencla_mult.foundset)
				//
				for (var j = 1; j <= $max_profesionales; j++){
					forms.frm_scr_profesionales_mult.foundset.setSelectedIndex(j)
					for (var k = 1; k <= $max_especialidad; k++){
						forms.frm_scr_especialidad_mult.foundset.setSelectedIndex(k)
					//	if(forms.frm_scr_profesionales_mult.foundset.cod_espe == forms.frm_scr_especialidad_mult.foundset.codigo){
							for (var l = 1; l <= $max_coberturas; l++){
								forms.frm_scr_coberturas_mult.foundset.setSelectedIndex(l)
							    for (var m = 1; m <= $max_grupo; m++){
							    	forms.frm_scr_grupo_mult.foundset.setSelectedIndex(m)
							    	for (var n = 1; n <= $max_nomencla; n++){
							    		forms.frm_scr_nomencla_mult.foundset.setSelectedIndex(n)
							    		if(forms.frm_scr_nomencla_mult.foundset.grupo == forms.frm_scr_grupo_mult.foundset.codigo){
								            //Buscar Repetidos
								            foundset.find()								    
											conv_empresa      = globals.gbl_con_empresa
								            conv_profesional  = forms.frm_scr_profesionales_mult.foundset.codigo								    
								            conv_especialidad = forms.frm_scr_especialidad_mult.foundset.codigo
								            conv_obra_social  = forms.frm_scr_coberturas_mult.foundset.codigo
								            conv_tipo_nom     = globals.gbl_con_tipo_nom
								            conv_grupo_nom    = forms.frm_scr_grupo_mult.foundset.codigo
								            conv_cod_nom      = forms.frm_scr_nomencla_mult.foundset.codigo
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
												conv_empresa           = globals.gbl_con_empresa        
												conv_empresa_desc      = application.getValueListDisplayValue('vl_empresa',globals.gbl_con_empresa)
			                                    conv_profesional       = forms.frm_scr_profesionales_mult.foundset.codigo
			                                    conv_profesional_desc  = forms.frm_scr_profesionales_mult.foundset.descripcion					            
			                                    conv_especialidad      = forms.frm_scr_especialidad_mult.foundset.codigo
			                                    conv_especialidad_desc = forms.frm_scr_especialidad_mult.foundset.descripcion
			                                    conv_obra_social       = forms.frm_scr_coberturas_mult.foundset.codigo
			                                    conv_obra_social_desc  = forms.frm_scr_coberturas_mult.foundset.descripcion					            
			         			                conv_grupo_nom         = forms.frm_scr_grupo_mult.foundset.codigo
			                                    conv_grupo_nom_desc    = forms.frm_scr_grupo_mult.foundset.descripcion					            
			                                    conv_cod_nom           = forms.frm_scr_nomencla_mult.foundset.codigo
			                                    conv_cod_nom_desc      = forms.frm_scr_nomencla_mult.foundset.descripcion
								                mover_datos()
								            }
								        }
								    }
								}
							}
						//}						
				    }
				}
				// Remueve Filtros
				forms.frm_scr_profesionales_mult.foundset.removeFoundSetFilterParam('filtro')	
			    forms.frm_scr_especialidad_mult.foundset.removeFoundSetFilterParam('filtro')
				forms.frm_scr_coberturas_mult.foundset.removeFoundSetFilterParam('filtro')	
				forms.frm_scr_grupo_mult.foundset.removeFoundSetFilterParam('filtro')
				forms.frm_scr_nomencla_mult.foundset.removeFoundSetFilterParam('filtro')	
				//
			}
		}else{
			// es regrabacion
			conv_fecha_modif  = application.getServerTimeStamp()
			conv_legajo_modif = globals.vLega						
	        mover_datos()
			$OK = 'Si'
		}
		if ($OK == 'Si'){
		    inicializa_campos()
		    habilita_campos()
		    deshabilita_campos2()
		    habilita_btn()	    
		}else{
			elements.con_tipo_valor.requestFocus()
		}
		elements.lbl_procesando.visible = false
	}
}

/**
 * @param frm_id
 *
 * @properties={typeid:24,uuid:"6FB37280-D8D7-4301-A286-EBA7A55EA69E"}
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
 * @properties={typeid:24,uuid:"E20D5C24-376E-47A1-B168-1D67E0BDFB35"}
 */
function mover_datos(){		
	conv_tipo_nom      = globals.gbl_con_tipo_nom
	conv_fecha_desde   = globals.gbl_fecha_desde 
    conv_tipo_valor    = globals.gbl_tipo_valor    
    conv_imp_valor     = globals.gbl_imp_valor
    conv_imp_valor2    = globals.gbl_imp_valor2
    conv_tipo_rec_diaf = globals.gbl_tipo_rec_fer
    conv_recargo_diaf  = globals.gbl_imp_rec_fer
    conv_tipo_rec_noct = globals.gbl_tipo_rec_noc
    conv_recargo_noct  = globals.gbl_imp_rec_noc
    conv_tipo_rec_urg  = globals.gbl_tipo_rec_urg
    conv_recargo_urg   = globals.gbl_imp_rec_urg
    conv_observacion   = globals.gbl_con_observa
      
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
 * @properties={typeid:24,uuid:"35B50CD6-5352-41E0-8F09-2E991071485F"}
 */
function onAction_borrar(event) {
	globals.gbl_profesional  = utils.stringToNumber(globals.gbl_con_profesional)
	globals.gbl_especialidad = utils.stringToNumber(globals.gbl_con_especial)
	globals.gbl_cobertura    = utils.stringToNumber(globals.gbl_con_cobertura)
	globals.gbl_grupo_nom    = utils.stringToNumber(globals.gbl_con_grupo_nom)
	globals.gbl_nomencla     = utils.stringToNumber(globals.gbl_con_nomencla)
	var encontro = gbl_conv_to_convenio.getSize()
	if (encontro != 0){
		var $ok = globals.DIALOGS.showQuestionDialog('Confirmación','Se borrará el registro, Confirma ?','Si', 'No')
		if ($ok=='Si'){
			foundset.deleteRecord()
            inicializa_campos()	
			deshabilita_campos2()
			habilita_btn()
		}
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"A79129AF-29AA-45F6-8636-3188F77F0627"}
 */
function onAction_atras(event) {
	frm_es_nuevo = 0	
	var $ultimo  = databaseManager.getFoundSetCount(foundset)
	var $actual  = foundset.getSelectedIndex()
	if ($actual == 1){
		foundset.setSelectedIndex($ultimo)
	}else{
	   foundset.setSelectedIndex($actual -1)
	}
	globals.gbl_con_profesional = foundset.conv_profesional
    globals.gbl_profesional     = utils.stringToNumber(globals.gbl_con_profesional)
	frm_prof_descripcion        = gbl_prof_to_prof.prof2_2	
	
	globals.gbl_con_especial    = foundset.conv_especialidad
	globals.gbl_especialidad    = utils.stringToNumber(globals.gbl_con_especial)
	frm_espe_descripcion        = gbl_espe_to_especialidad.esp_descrip
	
	globals.gbl_con_cobertura   = foundset.conv_obra_social
	globals.gbl_cobertura       = utils.stringToNumber(globals.gbl_con_cobertura)
	frm_obra_descripcion        = gbl_cob_to_coberturas.obr_razonsoc
	
	globals.gbl_con_grupo_nom   = foundset.conv_grupo_nom
	globals.gbl_grupo_nom       = utils.stringToNumber(globals.gbl_con_grupo_nom)
	frm_grup_nom_descripcion    = gbl_grup_to_grupo.gru33
	
	globals.gbl_con_nomencla    = foundset.conv_cod_nom
	globals.gbl_nomencla        = utils.stringToNumber(globals.gbl_con_nomencla)
	frm_nome_descripcion        = gbl_nom_to_nomencla.nome_descr
		
	globals.gbl_fecha_desde     = foundset.conv_fecha_desde
	globals.gbl_tipo_valor      = foundset.conv_tipo_valor
	globals.gbl_imp_valor       = foundset.conv_imp_valor
	globals.gbl_imp_valor2      = foundset.conv_imp_valor2
	switch (globals.gbl_tipo_valor) {
        case 1: frm_con_val_mon = '$';break;
        case 2: frm_con_val_mon = ' ';break;
        case 3: frm_con_val_mon = '$';break;
    }
    globals.gbl_con_empresa  = foundset.conv_empresa
    globals.gbl_imp_rec_fer  = foundset.conv_recargo_diaf
    globals.gbl_imp_rec_noc  = foundset.conv_recargo_noct
    globals.gbl_imp_rec_urg  = foundset.conv_recargo_urg
    globals.gbl_tipo_rec_fer = foundset.conv_tipo_rec_diaf
    globals.gbl_tipo_rec_noc = foundset.conv_tipo_rec_noct
    globals.gbl_tipo_rec_urg = foundset.conv_tipo_rec_urg
    globals.gbl_con_observa  = foundset.conv_observacion
    deshabilita_btn()	
    deshabilita_campos()
	deshabilita_campos2()	

    // control del elemento por perfil	
	var $form = controller.getName()
	globals.controlar_elementos($form)
	
	elements.con_tipo_valor.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"AA2F19F1-CF64-4AF8-88ED-F613F4BBAD6B"}
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
	globals.gbl_con_profesional = foundset.conv_profesional
    globals.gbl_profesional     = utils.stringToNumber(globals.gbl_con_profesional)
	frm_prof_descripcion        = gbl_prof_to_prof.prof2_2
    
	globals.gbl_con_especial    = foundset.conv_especialidad
	globals.gbl_especialidad    = utils.stringToNumber(globals.gbl_con_especial)
	frm_espe_descripcion        = gbl_espe_to_especialidad.esp_descrip
	
	globals.gbl_con_cobertura   = foundset.conv_obra_social
	globals.gbl_cobertura       = utils.stringToNumber(globals.gbl_con_cobertura)
	frm_obra_descripcion        = gbl_cob_to_coberturas.obr_razonsoc
	
	globals.gbl_con_grupo_nom   = foundset.conv_grupo_nom
	globals.gbl_grupo_nom       = utils.stringToNumber(globals.gbl_con_grupo_nom)
	frm_grup_nom_descripcion    = gbl_grup_to_grupo.gru33
	
	globals.gbl_con_nomencla    = foundset.conv_cod_nom
	globals.gbl_nomencla        = utils.stringToNumber(globals.gbl_con_nomencla)
	frm_nome_descripcion        = gbl_nom_to_nomencla.nome_descr
	
	globals.gbl_fecha_desde     = foundset.conv_fecha_desde
	globals.gbl_imp_valor       = foundset.conv_imp_valor
	globals.gbl_imp_valor2      = foundset.conv_imp_valor2
	globals.gbl_tipo_valor      = foundset.conv_tipo_valor
	switch (globals.gbl_tipo_valor) {
        case 1: frm_con_val_mon = '$';break;
        case 2: frm_con_val_mon = ' ';break;
        case 3: frm_con_val_mon = '$';break;
    }
    globals.gbl_con_empresa  = foundset.conv_empresa
    globals.gbl_imp_rec_fer  = foundset.conv_recargo_diaf
    globals.gbl_imp_rec_noc  = foundset.conv_recargo_noct
    globals.gbl_imp_rec_urg  = foundset.conv_recargo_urg
    globals.gbl_tipo_rec_fer = foundset.conv_tipo_rec_diaf
    globals.gbl_tipo_rec_noc = foundset.conv_tipo_rec_noct
    globals.gbl_tipo_rec_urg = foundset.conv_tipo_rec_urg
    globals.gbl_con_observa  = foundset.conv_observacion
    deshabilita_btn()	
    deshabilita_campos()
	deshabilita_campos2()

	// control del elemento por perfil	
	var $form = controller.getName()
	globals.controlar_elementos($form)	
	elements.con_tipo_valor.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"03AA009A-0838-4064-8BD1-194EF855503A"}
 * @AllowToRunInFind
 */
function onAction_buscar(event) {	
	globals.gbl_profesional = 0
	globals.gbl_con_profesional = ''
	globals.gbl_con_indice = 1			
	var win = application.createWindow("Busca_conv_prof",JSWindow.MODAL_DIALOG)	
    win.title= 'Buscar Convenios Profesionales'
    win.resizable = false
    win.show(forms.frm_tab_conv_prof)
	win.destroy()
	if (globals.gbl_con_profesional != ''){	
		foundset.loadRecords(gbl_conv_to_convenio)
		globals.gbl_profesional  = utils.stringToNumber(globals.gbl_con_profesional)
		frm_prof_descripcion     = gbl_prof_to_prof.prof2_2		
		globals.gbl_especialidad = utils.stringToNumber(globals.gbl_con_especial)
		frm_espe_descripcion     = gbl_espe_to_especialidad.esp_descrip				
		globals.gbl_cobertura    = utils.stringToNumber(globals.gbl_con_cobertura)
		frm_obra_descripcion     = gbl_cob_to_coberturas.obr_razonsoc		
		globals.gbl_grupo_nom    = utils.stringToNumber(globals.gbl_con_grupo_nom)
		frm_grup_nom_descripcion = gbl_grup_to_grupo.gru33		
		globals.gbl_nomencla     = utils.stringToNumber(globals.gbl_con_nomencla)
		frm_nome_descripcion     = gbl_nom_to_nomencla.nome_descr
		
		globals.gbl_con_empresa  = foundset.conv_empresa
		globals.gbl_imp_valor    = foundset.conv_imp_valor
		globals.gbl_imp_valor2   = foundset.conv_imp_valor2
		globals.gbl_tipo_valor   = foundset.conv_tipo_valor
		switch (globals.gbl_tipo_valor) {
	        case 1: frm_con_val_mon = '$';break;
	        case 2: frm_con_val_mon = ' ';break;
	        case 3: frm_con_val_mon = '$';break;
	    }
	    globals.gbl_imp_rec_fer  = foundset.conv_recargo_diaf
	    globals.gbl_imp_rec_noc  = foundset.conv_recargo_noct
	    globals.gbl_imp_rec_urg  = foundset.conv_recargo_urg
	    globals.gbl_tipo_rec_fer = foundset.conv_tipo_rec_diaf
	    globals.gbl_tipo_rec_noc = foundset.conv_tipo_rec_noct
	    globals.gbl_tipo_rec_urg = foundset.conv_tipo_rec_urg
	    globals.gbl_con_observa  = foundset.conv_observacion
	    deshabilita_btn()	
	    deshabilita_campos()				

		// control del elemento por perfil	
		var $form = controller.getName()
		globals.controlar_elementos($form)		
		elements.con_tipo_valor.requestFocus()		
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"04BC52F4-FC82-4CFF-9695-0D141F58E1FF"}
 */
function onAction_imprimir(event) {
	globals.printRoutine('prn_convenios_prof_convenios', true, 0)
}

/**
 * Handle hide window.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"43BDC89D-6D82-43C8-B53C-17113B2CD363"}
 */
function onHide_cerrar(event) {
	if ((globals.gbl_con_profesional != conv_profesional || globals.gbl_con_especial != conv_especialidad)
		&& globals.gbl_con_profesional != '' && frm_es_nuevo == 1){
		var $ok = globals.DIALOGS.showQuestionDialog('Confirmación','Perderá los cambios, Confirma ?','Si', 'No')
		if ($ok=='Si'){
		    inicializa_campos()
		    deshabilita_campos2()
		    habilita_btn()
			return true
	    }else{
	        return false
	    }	    
    }else{
	    inicializa_campos()
	    deshabilita_campos2()
        habilita_btn()
		return true
    }		
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"5B6631B2-685D-4E79-9B14-F779AD164FD0"}
 */
function onAction_controlar_codigo_convenio(event) {
	if (globals.gbl_con_profesional == ''|| globals.gbl_con_especial == ''|| globals.gbl_con_cobertura == '' 
	    || globals.gbl_con_grupo_nom == '' || globals.gbl_con_nomencla == '' || globals.gbl_fecha_desde == ''){		
	    globals.DIALOGS.showWarningDialog('Atención','Faltan datos', 'Ok')
        elements.con_profesional.requestFocus()
    }else{	
		globals.gbl_profesional  = utils.stringToNumber(globals.gbl_con_profesional)
		globals.gbl_especialidad = utils.stringToNumber(globals.gbl_con_especial)
		globals.gbl_cobertura    = utils.stringToNumber(globals.gbl_con_cobertura)
		globals.gbl_grupo_nom    = utils.stringToNumber(globals.gbl_con_grupo_nom)
		globals.gbl_nomencla     = utils.stringToNumber(globals.gbl_con_nomencla)		
		
		var encontro = gbl_conv_to_convenio.getSize()
		if (frm_es_nuevo == 0){
		    if (encontro == 0){   		
		    	globals.DIALOGS.showErrorDialog('Error','Código inexistente', 'Ok')
				inicializa_campos()
				deshabilita_campos2()
				elements.con_profesional.requestFocus()
		    }else{	    	
			   
		    	foundset.loadRecords(gbl_conv_to_convenio)
		    	globals.gbl_tipo_valor   = foundset.conv_tipo_valor
		    	switch (globals.gbl_tipo_valor) {
				    case 1: frm_con_val_mon = '$';break;
				    case 2: frm_con_val_mon = ' ';break;
				    case 3: frm_con_val_mon = '$';break;
				}
				globals.gbl_con_empresa  = foundset.conv_empresa
			    globals.gbl_imp_valor    = foundset.conv_imp_valor
			    globals.gbl_imp_valor2   = foundset.conv_imp_valor2
			    globals.gbl_imp_rec_fer  = foundset.conv_recargo_diaf
			    globals.gbl_imp_rec_noc  = foundset.conv_recargo_noct
			    globals.gbl_imp_rec_urg  = foundset.conv_recargo_urg
			    globals.gbl_tipo_rec_fer = foundset.conv_tipo_rec_diaf
			    globals.gbl_tipo_rec_noc = foundset.conv_tipo_rec_noct
			    globals.gbl_tipo_rec_urg = foundset.conv_tipo_rec_urg
			    globals.gbl_con_observa  = foundset.conv_observacion
				deshabilita_btn()	
			    deshabilita_campos()				

				// control del elemento por perfil	
				var $form = controller.getName()
				globals.controlar_elementos($form)
				
				elements.con_tipo_valor.requestFocus()
		    }
		}else{
			if (encontro != 0){   		
				globals.DIALOGS.showErrorDialog('Error','Código existente', 'Ok')		
				inicializa_campos()
				deshabilita_campos2()
				elements.con_profesional.requestFocus()
			}else{			   	
				deshabilita_btn()
				habilita_campos2()				
				deshabilita_campos()
				
				// control del elemento por perfil
				$form = controller.getName()
	            globals.controlar_elementos($form)
				
				elements.bt_grabar.enabled        =true
				elements.con_tipo_valor.requestFocus()
			}
		}
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"D11FF9DB-7046-496A-BD97-A056DE158A87"}
 */
function onAction_tipo_valor(event) {
	if(globals.gbl_tipo_valor == 1 || 2 || 3 ){	    
	    elements.con_imp_valor.requestFocus()
		switch (globals.gbl_tipo_valor) {
		case 1: frm_con_val_mon = '$';break;
		case 2: frm_con_val_mon = ' ';break;
		case 3: frm_con_val_mon = '$';break;
		}  
	}else{		
		globals.gbl_imp_valor = 0
		frm_con_val_mon = ''		
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"41B152BE-92E7-47F6-B45B-85B2498B2D2A"}
 */
function onAction_editar(event) {
	habilita_campos2()
	elements.con_tipo_valor.requestFocus()
	elements.bt_grabar.enabled =true
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"329DCFAF-E9DB-42D2-9CEF-BE77C4C7B1CE"}
 */
function onAction_coopiar(event) {
	var win =  application.createWindow("copia_convenio",JSWindow.MODAL_DIALOG)	
    win.title= 'Copiar Convenios Profesionales'
    win.resizable = false
    win.show(forms.frm_convenios_prof_copia) 
	elements.con_profesional.requestFocus()	
	elements.bt_borrar.enabled =false
	elements.bt_editar.enabled =false
	habilita_campos()
	habilita_campos2()	
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"4242C597-800B-4208-8DE3-E58C03CC3987"}
 */
function onAction_controlar_empresa(event) {
	switch (globals.gbl_con_empresa){
	    case 1: globals.gbl_catalogo = 'maestros';break;
	    case 11: globals.gbl_catalogo = 'cirendsa';break;
	    default: globals.gbl_catalogo = 'maestros';break;
    }
	
	if (frm_es_nuevo == 1){
		globals.gbl_con_profesional = 'VARIOS'
		globals.gbl_profesional     = 8888
		globals.gbl_con_cobertura   = 'VARIAS'
		globals.gbl_cobertura       = 8888
		
        elements.lbl_procesando.text = 'Cargando Tabla Profesionales'
        elements.lbl_procesando.visible = true
        application.updateUI()
        //Carga tabla de profesionales multiple seleccion
        forms.frm_tab_profesionales_mult.cargar_tabla()    
        //Carga tabla de obras multiple seleccion
        elements.lbl_procesando.text = 'Cargando Tabla Obras'    
        application.updateUI()
        forms.frm_tab_coberturas_mult.cargar_tabla()
	    elements.lbl_procesando.visible = false
		
	    frm_prof_descripcion = forms.frm_tab_profesionales_mult.frm_total_sel + ' registros Seleccionados'        
    	frm_obra_descripcion = forms.frm_tab_coberturas_mult.frm_total_sel    + ' registros Seleccionados'

	}else{
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
	elements.con_profesional.requestFocus()	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"03F79387-A92C-45C8-8A5C-0141C617C5E6"}
 */
function onAction_imp_valor(event) {
	elements.con_imp_valor2.requestFocus()	
}
/*** 
 * @param event
 *
 * @properties={typeid:24,uuid:"3D410CDD-D91D-41C0-8E26-2C04C8D69BFA"}
 */
function onAction_imp_valor2(event) {
	elements.con_rec_fer.requestFocus()	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"E713011B-5E9D-4391-B9F1-348C7281E6BB"}
 */
function onAction_por_dia_feriado(event) {
	elements.con_imp_rec_fer.requestFocus()	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"BD2B945A-5B9B-4FBE-A3A3-7A1C2E5E667E"}
 */
function onAction_imp_dia_feriado(event) {
	elements.con_rec_noc.requestFocus()	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"4C597465-9D16-4B2E-AC12-EE26DE73F4BA"}
 */
function onAction_por_nocturno(event) {
	elements.con_imp_rec_noc.requestFocus()	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"1870C75A-50C5-4DCB-B9C9-9DD575DAADCF"}
 */
function onAction_imp_rec_nocturno(event) {
	elements.con_rec_urg.requestFocus()	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"7EBD0826-2520-418D-8D4C-5B1846864058"}
 */
function onAction_por_urgencia(event) {
	elements.con_imp_rec_urg.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"96D478D1-89BB-4752-8671-BD41D2E84092"}
 */
function onAction_imp_rec_urgencia(event) {
	elements.con_observa.requestFocus()
}
