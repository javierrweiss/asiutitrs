/**
 * @properties={typeid:35,uuid:"CE36AF3B-761C-4779-A80E-89CA90E05576",variableType:-4}
 */
var f_Anestesista = false;

/**
 * // TODO generated, please specify type and doc for the params
 * @param {Object} oldValue
 * @param {Object} newValue
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"CD2D8B62-EB83-49C2-B849-CDE8D2987816"}
 */
function onDataChange_legajo(oldValue, newValue, event) {
	scopes.globals.vTipoMedico = null
	/*
	 * function obtenerDigitoVerificador(){
	 * if(globals.vLegajo && globals.vLegajo != 0){
	 * return String(globals.vLegajo).slice(-1);
	 * }else{ 
	 * forms.fichaaneste_PideLegajo.elements.legajo.requestFocus();
	 * return -1;}
	 * }
	 * 
	 * globals.digito_verificador = obtenerDigitoVerificador();
	 * if (globals.digito_verificador == 0){
	 * }
	 */
	
	if(globals.vLegajo != 0 && globals.vLegajo != null && globals.vLegajo != ''){
		globals.vLega  = globals.vLegajo
		globals.vlargo = globals.vLega.toString().length - 1;
		if(globals.vlargo != 0){
			globals.vLega = globals.vLega.toString().substr(0,globals.vlargo)
			globals.digito_verificador = utils.stringToNumber(globals.vLegajo.toString().substr(globals.vlargo, 1))
			if (globals.digito_verificador == 0) {
				if (fichaaneste_vlega_to_tbc_medicos.getSize() > 0){
				//if (vlegajo_to_tbc_medicos.getSize() > 0){  // 2019-03-20
					if(fichaaneste_vlega_to_tbc_medicos.med_espemed != 24){
						globals.vOperador = "El legajo no pertenece a un Anestesiólogo";
						forms.fichaaneste_PideLegajo.elements.legajo.requestFocus()
						return true}
					else{
						globals.vOperador = fichaaneste_vlega_to_tbc_medicos.med_apenom;
						forms.fichaaneste_PideLegajo.elements.clave.requestFocus()
						return true}
				}else{  // globals.digito_verificador  no es 0
					if(fichaaneste_vlega_to_tbc_personal.getSize() > 0)
					//if(vlegajo_to_tbc_personal.getSize() > 0)  // 2019-03-20
					{
						globals.vDigVerif = true
						globals.calculaDigitoVerificador()
	    		
						if(!globals.vDigVerif)
						{
							globals.vOperador = "Digito verificador erroneo";
							forms.fichaaneste_PideLegajo.elements.legajo.requestFocus()
							return true
							//return false
						}
						else
						{
							if(globals.vSolomedicos){
								scopes.globals.vTipoMedico = 1
								if(fichaaneste_vlega_to_tbc_personal.per_fecbaja != 0 || fichaaneste_vlega_to_tbc_personal.per_tipliquid != 2 || 
									fichaaneste_vlega_to_tbc_personal.per_espemed!=24){
									globals.vOperador="El legajo no pertenece a un Anestesiólogo";
									forms.fichaaneste_PideLegajo.elements.legajo.requestFocus()
									return true
									//return false
								}else{
									globals.vOperador=fichaaneste_vlega_to_tbc_personal_login.per_apelnom;
									forms.fichaaneste_PideLegajo.elements.clave.requestFocus()
									return true}
							}else{
								globals.vOperador=fichaaneste_vlega_to_tbc_personal_login.per_apelnom;
								forms.fichaaneste_PideLegajo.elements.clave.requestFocus()
								return true}
						}
					}
					else
					{ // no esta el legajo en tbc_Personal
						globals.vOperador="Operador No Valido";
						forms.fichaaneste_PideLegajo.elements.legajo.requestFocus()
						return true
						//return false
					}
				}
			}
			else
			{
				if(fichaaneste_vlega_to_tbc_personal.getSize() > 0){
					globals.vDigVerif=true
					globals.calculaDigitoVerificador()
					if(!globals.vDigVerif){
						globals.vOperador="Digito verificador erroneo";
						forms.fichaaneste_PideLegajo.elements.legajo.requestFocus()
						return true
						//return false
					}else{
						if(globals.vSolomedicos){
							if(fichaaneste_vlega_to_tbc_personal.per_fecbaja != 0 || fichaaneste_vlega_to_tbc_personal.per_tipliquid != 2 || 
								fichaaneste_vlega_to_tbc_personal.per_espemed != 24){
								globals.vOperador = "El legajo no pertenece a un Anestesiólogo";
								//forms.fichaaneste_PideLegajo.elements.legajo.requestFocus()
								//globals.vLegajo = 0
								application.updateUI()
								forms.fichaaneste_PideLegajo.elements.legajo.requestFocus()
								return true
								// return false
							}else{
								globals.vOperador = fichaaneste_vlega_to_tbc_personal_login.per_apelnom;
								scopes.globals.vTipoMedico = 0
						/**
						if(vs_to_permisos_grales.getSize()<1){
							plugins.dialogs.showInfoDialog("",globals.vTipoOperador)
							plugins.dialogs.showInfoDialog("",globals.vLegajo)
							if(usuarios_to_usuarios_grupos.getSize()<1){
								globals.vAvisoError="No tiene permisos de acceso"
								globals.muestraAvisoError()	
								return false
							}else{
								if(usuarios_to_usuarios_grupos.usuarios_grupos_to_permisos_grupos.getSize()<1){
									globals.vAvisoError="No tiene permisos de acceso"
									globals.muestraAvisoError()	
									return false
								}else{
									forms.PideLegajoMedico.elements.clave.requestFocus()
									return true
								}
							}
							*/
						//}else{
								scopes.globals.EsAnestesista = true
								forms.fichaaneste_PideLegajo.elements.clave.requestFocus()
								return true
							}
						}else{
							globals.vOperador = fichaaneste_vlega_to_tbc_personal_login.per_apelnom;
							scopes.globals.EsAnestesista = true
							forms.fichaaneste_PideLegajo.elements.clave.requestFocus()
							return true
						}	
					}
				}
				else
				{	// no esta en tbc_personal
					globals.vOperador="Operador No Valido";
					forms.fichaaneste_PideLegajo.elements.legajo.requestFocus()
					return true
					//return false
				}
			}
		}
		else
		{
			forms.fichaaneste_PideLegajo.elements.legajo.requestFocus()
			return true
			//return false
		}
	}
	else
	{
		forms.fichaaneste_PideLegajo.elements.legajo.requestFocus()
		return true
		//return false
	}
}

/**
 * // TODO generated, please specify type and doc for the params
 * @param {Object} oldValue
 * @param {Object} newValue
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"7B14F912-3C72-4B2B-92A2-1A7931D72ED0"}
 */
function onDataChange_clave(oldValue, newValue, event) {
	globals.vPassOperador=''
	forms.fichaaneste_PideLegajo.elements.confirma.requestFocus()
	return true
}

/**
 * // TODO generated, please specify type and doc for the params
 * @param {Object} firstShow
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"95D0ACAA-6DEA-4258-AC63-E6C888392157"}
 */
function onShow_login(firstShow, event) {
	//application.setNumpadEnterAsFocusNextEnabled(true) //  TODO ya esta seteado sacar una vez que se lame desde el menu
	f_Anestesista = false;
	globals.vSolomedicos = true
	globals.vLegajo = 0
	globals.vClave  = 0
	globals.vOperador = ''
	globals.vPassOperador = '' 
	globals.vTipoMedico = null
	forms.fichaaneste_PideLegajo.elements.legajo.requestFocus()
}

/**
 * // TODO generated, please specify type and doc for the params
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"1393F37A-7B5C-4F20-94EC-57FD8947F182"}
 */
function onAction_confirma(event) {
var user = false;
if(globals.vLegajo != 0&&globals.vLegajo!=null){
	globals.vPassOperador = ''
	globals.vLega  = globals.vLegajo
	globals.vlargo = globals.vLega.toString().length - 1;
    globals.vLega  = globals.vLega.toString().substr(0,globals.vlargo)
	globals.digito_verificador = utils.stringToNumber(globals.vLegajo.toString().substr(globals.vlargo, 1))
	if (globals.digito_verificador == 0){
		if (fichaaneste_vlega_to_tbc_medicos.getSize()>0){
			globals.vOperador = fichaaneste_vlega_to_tbc_medicos.med_apenom;
			globals.vTipoOperador = 1;
			if(fichaanest_vlega_to_tbl_clavelega.getSize()>0){
				if(globals.vClave_str != globals.rtrim(fichaanest_vlega_to_tbl_clavelega.clave,' ')){
					globals.vPassOperador = "Clave Incorrecta";
					user=false
				}else{
					if(fichaaneste_vlega_to_tbc_medicos.med_espemed == 24){
						globals.vTipoTecnico  = 1
						user = true
					}else{
						globals.vOperador="El Profesional no es Anestesiólogo"
						user = false
					}
				}
			}else{
				globals.vPassOperador = "Clave inexistente";
	    		user = false
				
//				if(globals.vClave != vlegajo1_to_tbc_clave_legajo.hor_perclave){
//				}else{
//					if(fichaaneste_vlega_to_tbc_medicos.med_espemed==24){
//						globals.vTipoOperador = 1
//						globals.vTipoTecnico  = 1
//						user = true
//					}else{
//						globals.vOperador = "El Profesional no es Anestesiólogo"
//						user = false
//					}
//				}
			}
		}else{
	    	if(fichaaneste_vlega_to_tbc_personal.getSize()>0){
	    		globals.vDigVerif=true
		       globals.calculaDigitoVerificador()
		       if(!globals.vDigVerif){
		    	   globals.vOperador="Dígito verificador erróneo";
		    	   user=false
		       }else{
		    	   globals.vTipoOperador=0;
		    	   if(fichaanest_vlega_to_tbl_clavelega.getSize()>0){
		    		   if(globals.vClave_str!=globals.rtrim(fichaanest_vlega_to_tbl_clavelega.clave,' ')){
							globals.vPassOperador="Clave incorrecta";
							user=false
						}else{
							if(globals.vSolomedicos){ 
								if(fichaaneste_vlega_to_tbc_personal.per_fecbaja != 0 ||fichaaneste_vlega_to_tbc_personal.per_tipliquid != 2 ||fichaaneste_vlega_to_tbc_personal.per_espemed!=24){
									globals.vOperador="El legajo no pertenece a un Anestesiólogo";
									user=false
								}else{
									globals.vTipoTecnico=1
									user=true
								}
							}else{
								if(fichaaneste_vlega_to_tbc_personal.per_espemed!=24){
									user=false
								}else{
									if(fichaaneste_vlega_to_tbc_personal.per_tipliquid!=2){
										globals.vTipoTecnico=0
										user=true
									}else{
										globals.vTipoTecnico=1
										user=true
									}
									//globals.vTipoOperador=0
									//user=true
								}
							}
						}
		    	   }else{
						globals.vPassOperador = "Clave inexistente";
			    		user = false
						}	  
			   }
	    	}else{
	    		if(vlegajo_to_tbc_perext.getSize()>0){
	    			globals.vOperador = vlegajo_to_tbc_perext.perext_nom;
	    			globals.vTipoOperador=2;
	    			if(fichaanest_vlega_to_tbl_clavelega.getSize()>0){
	    				if(globals.vClave_str!=globals.rtrim(fichaanest_vlega_to_tbl_clavelega.clave,' ')){
						globals.vPassOperador="Clave incorrecta";
						user=false
					}else{
					   user=true
					}
	    			}else{
						globals.vPassOperador = "Clave inexistente";
			    		user = false
						}	
	    		}else{
	    			globals.vOperador = "Operador no válido";
	    			user=false
	    		}
	    	}
		}
	}else{
		if(fichaaneste_vlega_to_tbc_personal.getSize() > 0){
				globals.vDigVerif = true
		       globals.calculaDigitoVerificador()
		       if(!globals.vDigVerif){
		    	   globals.vOperador = "Dígito verificador erróneo";
		    	   user=false
		       }else
		       {
			      globals.vOperador  = fichaaneste_vlega_to_tbc_personal.per_apelnom;
			      globals.vTipoOperador = 0;
			      if(fichaanest_vlega_to_tbl_clavelega.getSize()>0){
			    	  if(globals.vClave_str!=globals.rtrim(fichaanest_vlega_to_tbl_clavelega.clave,' ')){
							globals.vPassOperador = "Clave incorrecta";
							user=false
					  }else{
					  		if(globals.vSolomedicos){
						  		if(fichaaneste_vlega_to_tbc_personal.per_fecbaja != 0 || fichaaneste_vlega_to_tbc_personal.per_tipliquid != 2 || fichaaneste_vlega_to_tbc_personal.per_espemed != 24){
						  			globals.vOperador = "El legajo no pertenece a un Anestesiólogo";
						  			user = false}
						  		else{
						  			globals.vTipoTecnico  = 1
						  			user=true
						  		}
					  		}else{
					  			if(fichaaneste_vlega_to_tbc_personal.per_espemed != 24){
					  				user=false}
					  			else{
					  				if(fichaaneste_vlega_to_tbc_personal.per_tipliquid != 2){
					  					globals.vTipoTecnico = 0}
					  				else{
					  					globals.vTipoTecnico = 1}
					  				globals.vTipoOperador = 0
					  				user = true
					  				}
					  			}
					  		}
			      }else{
						globals.vPassOperador = "Clave inexistente";
			    		user = false
						}	
			     
				  }
	    }else{
			globals.vOperador = "Operador no válido";
			user = false
	    }
	}
	
	
    if(user)
    {//forms.tab_scr_tbc_admision.controller.show()
	    f_Anestesista = user;
	    scopes.globals.EsAnestesista = user;
	    globals.vSolomedicos  = user;

    	var name = application.getActiveWindow()
		name.getName()
		var $win2 = application.getWindow(name.getName())
		if($win2 != null){
			$win2.hide()
			$win2.destroy()
		}

	    /*
		var $win1 = application.getWindow("Menu_itm");
     	if ($win1 != null){
     		$win1.hide()
     		$win1.destroy()}
		*/
	 	scopes.globals.fichaaneste_anestesiologo_legajo = globals.vLegajo
	 	scopes.globals.fichaaneste_anestesiologo_tipo   = globals.vTipoOperador  // TODO verificar esto
	 	scopes.globals.fichaaneste_anestesiologo_nombre = globals.vOperador
		/* 
	 	switch (globals.gbl_transacciones_1){		
	 		case  1: var $form = 'fichaaneste_cons'
				// llama form para elegir paciente para consulta
				var $win = application.createWindow("cons_pacientes",JSWindow.MODAL_DIALOG)
			    $win.title = " Consulta - Ficha Anestésica "
			    $win.setSize(1250,720)   
				$win.show(forms.fichaaneste_cons)    
				$win.destroy()	
				$win.hide() 
		        break;
		    case  2: 
				// llama form para elegir paciente para carga
				var $win = application.createWindow("tab_pacientes",JSWindow.MODAL_DIALOG)
			    $win.title = " Ficha Anestésica "
			    $win.setSize(1220,720)   
				$win.show(forms.fichaaneste_tab_pacientes)    
				$win.destroy()	
				$win.hide() 
                break;		    
	     }  */
	 	
	 	
		// llama form para elegir paciente
		var $win = application.createWindow("tab_pacientes",JSWindow.MODAL_DIALOG)
	    $win.title = " Ficha Anestésica "
	    $win.setSize(1220,720)   
		$win.show(forms.fichaaneste_tab_pacientes)    
		$win.destroy()	
		$win.hide()
		

		globals.vClave  = 0
		globals.vPassOperador = ''
		
		//**//**//**//  RESTAURAR estas tres variables porque al volver no dibuja el menu del usuario con
		//  el que se ingreso al menu
		globals.vLegajo   = scopes.globals.fichaaneste_vLegajo  
		globals.vLega     = scopes.globals.fichaaneste_vLega        
		globals.vOperador = scopes.globals.fichaaneste_vOperador
		//**//**//**// 
		
	}
}
else{
		elements.clave.requestFocus()}	
}

/**
 * // TODO generated, please specify type and doc for the params
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"23B378D9-893A-4A84-B355-A8A5547DCCA3"}
 */
function onAction_cancela(event) {
	//globals.vClose=true
    //application.showForm("frm_menu_principal")
    globals.vSolomedicos=false
	var name=application.getActiveWindow()
	name.getName()
	var $win=application.getWindow(name.getName())
	if($win!=null){
		$win.hide()
		$win.destroy()
	}
	//**//**//**//  RESTAURAR estas tres variables 
	//porque al volver no dibuja el menu del usuario con el que se ingreso al menu
	globals.vLegajo   = scopes.globals.fichaaneste_vLegajo  
	globals.vLega     = scopes.globals.fichaaneste_vLega        
	globals.vOperador = scopes.globals.fichaaneste_vOperador
	//**//**//**//
}

/**
 * // TODO generated, please specify type and doc for the params
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"F25F3498-54BD-4F55-AA17-117EFFF20A56"}
 */
function onFocusLost_legajo(event) {
	if(globals.vLegajo!=0&&globals.vLegajo!=null&&globals.vLegajo!=''){
		globals.vLega=globals.vLegajo
		globals.vlargo= globals.vLega.toString().length - 1;
		if(globals.vlargo!=0){
	    globals.vLega=globals.vLega.toString().substr(0,globals.vlargo)
		globals.digito_verificador = utils.stringToNumber(globals.vLegajo.toString().substr(globals.vlargo, 1))
		if (globals.digito_verificador == 0){
			if (fichaaneste_vlega_to_tbc_medicos.getSize()>0){
				globals.vOperador = fichaaneste_vlega_to_tbc_medicos.med_apenom;
				forms.fichaaneste_PideLegajo.elements.clave.requestFocus()
				
			}else{
				if(fichaaneste_vlega_to_tbc_personal_login){  // 17/06/2019
		    	if(fichaaneste_vlega_to_tbc_personal_login.getSize()>0){
		    	   globals.vDigVerif = true
		    	   globals.calculaDigitoVerificador()
		    		
			       if(!globals.vDigVerif){
			    	   globals.vOperador = "Digito verificador erroneo";
			    	   forms.fichaaneste_PideLegajo.elements.legajo.requestFocus()
			       }else{
				      globals.vOperador = fichaaneste_vlega_to_tbc_personal_login.per_apelnom;
				      forms.fichaaneste_PideLegajo.elements.clave.requestFocus()
					  
			       }
		    	} // 17/06/2019
		    	}else{
		    		if(vlegajo_to_tbc_perext.getSize() > 0){
		    			globals.vOperador = vlegajo_to_tbc_perext.perext_nom;
		    			forms.fichaaneste_PideLegajo.elements.clave.requestFocus()
						
		    		}else{
		    			globals.vOperador="Operador No Valido";
		    			forms.fichaaneste_PideLegajo.elements.legajo.requestFocus()
		    		}
		    	}
			}
		}else{
			
			if(vlegajo_to_tbc_personal_login.getSize()>0){
				   globals.vDigVerif=true
			       globals.calculaDigitoVerificador()
			       if(!globals.vDigVerif){
			    	   globals.vOperador="Digito verificador erroneo";
			    	   forms.fichaaneste_PideLegajo.elements.legajo.requestFocus()
			       }else{
				      globals.vOperador=vlegajo_to_tbc_personal_login.per_apelnom;
				      forms.fichaaneste_PideLegajo.elements.clave.requestFocus()
					  
			       }
		    	}else{
		    		if(vlegajo_to_tbc_perext.getSize()>0){
		    			globals.vOperador=vlegajo_to_tbc_perext.perext_nom;
		    			forms.fichaaneste_PideLegajo.elements.clave.requestFocus()
						
		    		}else{
		    			globals.vOperador="Operador No Valido";
		    			forms.fichaaneste_PideLegajo.elements.legajo.requestFocus()
		    		}
		    	}
		}
		}else{
			return
		}
	}else{
		forms.fichaaneste_PideLegajo.elements.legajo.requestFocus()
	}
	
}

/**
 * Handle hide window.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"4641BA8E-B996-4E48-9D56-7E82DCC3B4D3"}
 */
function onHide_pidelegajo(event) {

	return globals.EsAnestesista
}

/**
 * Handle focus lost event of an element on the form. Return false when the focus lost event of the element itself shouldn't be triggered.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"6EBD8A98-A01A-4405-9FB7-CE5D5B4E9BE7"}
 */
function onElementFocusLost_pidelegajo(event) {
	scopes.globals.EsAnestesista = f_Anestesista;
	return true
}

/**
 * Callback method when form is destroyed.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"C63A7A61-D715-493C-9821-A970724019B0"}
 */
function onUnload(event) {
	scopes.globals.EsAnestesista = f_Anestesista;
}

/**
 * Handle a drop.
 * Return true if drop has been performed successfully, otherwise false.
 *
 * @param {JSDNDEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"95A10EFC-A66F-47B6-99C1-36882CCA7D71"}
 */
function onDrop(event) {
	scopes.globals.EsAnestesista = f_Anestesista;
	return false
}
