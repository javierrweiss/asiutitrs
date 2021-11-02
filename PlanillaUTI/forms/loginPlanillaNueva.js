
/**
 * Handle changed data.
 *
 * @param oldValue old value
 * @param newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"23C2E8C6-AF5C-4EE2-998D-9192479F1B15"}
 */
function onDataChange_legajo(oldValue, newValue, event) {
	if(globals.vLegajo!=0&&globals.vLegajo!=null&&globals.vLegajo!=''){
	globals.vLega=globals.vLegajo
	globals.vlargo= globals.vLega.toString().length - 1;
	if(globals.vlargo!=0){
    globals.vLega=globals.vLega.toString().substr(0,globals.vlargo)
	globals.digito_verificador = utils.stringToNumber(globals.vLegajo.toString().substr(globals.vlargo, 1))
	if (globals.digito_verificador == 0){
		if (vlegajo_to_tbc_medicos.getSize()>0){
			globals.vOperador=vlegajo_to_tbc_medicos.med_apenom;
			forms.loginPlanillaNueva.elements.clave.requestFocus()
			return true
		}else{
	    	if(vlegajo_to_tbc_personal_login.getSize()>0){
	    	   globals.vDigVerif=true
	    	   globals.calculaDigitoVerificador()	
		       if(!globals.vDigVerif){
		    	   globals.vOperador="Dígito verificador erróneo";
		    	   return false
		       }else{
			      globals.vOperador=vlegajo_to_tbc_personal_login.per_apelnom;
			      forms.loginPlanillaNueva.elements.clave.requestFocus()
				  return true
		       }
	    	}else{
	    		if(vlegajo_to_tbc_perext.getSize()>0){
	    			globals.vOperador=vlegajo_to_tbc_perext.perext_nom;
	    			forms.loginPlanillaNueva.elements.clave.requestFocus()
					return true
	    		}else{
	    			globals.vOperador="Operador no válido";
	    			return false
	    		}
	    	}
		}
	}else{
		
		if(vlegajo_to_tbc_personal_login.getSize()>0){
			   globals.vDigVerif=true
		       globals.calculaDigitoVerificador()
		       if(!globals.vDigVerif){
		    	   globals.vOperador="Dígito verificador erróneo";
		    	   return false
		       }else{
			      globals.vOperador=vlegajo_to_tbc_personal_login.per_apelnom;
			      forms.loginPlanillaNueva.elements.clave.requestFocus()
				  return true
		       }
	    	}else{
	    		if(vlegajo_to_tbc_perext.getSize()>0){
	    			globals.vOperador=vlegajo_to_tbc_perext.perext_nom;
	    			forms.loginPlanillaNueva.elements.clave.requestFocus()
					return true
	    		}else{
	    			globals.vOperador="Operador no válido";
	    			return false
	    		}
	    	}
	}
	}else{
		return false
	}
	}else{
		return false
	}
}

/**
 * Handle changed data.
 *
 * @param oldValue old value
 * @param newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"471394DA-4434-4CFD-B94E-E2BB48D2A3C3"}
 */
function onDataChange_clave(oldValue, newValue, event) {
	globals.vPassOperador=''
	forms.loginPlanillaNueva.elements.confirma.requestFocus()
	return true
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"0827259E-7D23-4580-A03D-51C612717FBD"}
 */
function onShow_login(firstShow, event) {
	forms.loginPlanillaNueva.elements.legajo.requestFocus()
	globals.vClave_str='';
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"4CAC8F7F-7715-460D-8C32-3784774202FB"}
 */
function onAction_confirma(event) {
	var user = false;
	if(globals.vLegajo!=0&&globals.vLegajo!=null){
		globals.vPassOperador=''
		globals.vLega=globals.vLegajo
		globals.vlargo= globals.vLega.toString().length - 1;
		globals.vLega=globals.vLega.toString().substr(0,globals.vlargo)
		globals.digito_verificador = utils.stringToNumber(globals.vLegajo.toString().substr(globals.vlargo, 1))
		if (globals.digito_verificador == 0){
			if (vlegajo_to_tbc_medicos.getSize()>0){
				globals.vOperador=vlegajo_to_tbc_medicos.med_apenom;
				globals.vTipoOperador=1;
				if(planuti_vlega_clavelega_to_tbl_clavelega.getSize()>0){
					if(globals.vClave_str!= globals.rtrim(planuti_vlega_clavelega_to_tbl_clavelega.clave,' ')){
						globals.vPassOperador="Clave incorrecta";
					}else{		   
						user=true
					}
				}else{
					globals.vPassOperador="Clave inexistente";
				}
			}else{
				if(vlegajo_to_tbc_personal_login.getSize()>0){
					globals.vDigVerif=true
					globals.calculaDigitoVerificador()
					if(!globals.vDigVerif){
						globals.vOperador="Dígito verificador erróneo";
					}else{
						globals.vTipoOperador=0
						if(planuti_vlega_clavelega_to_tbl_clavelega.getSize()>0){
							if(globals.vClave_str!= globals.rtrim(planuti_vlega_clavelega_to_tbl_clavelega.clave,' ')){
								globals.vPassOperador="Clave incorrecta";
							}else{	   
								user=true
							}
						}else{
							globals.vPassOperador="Clave inexistente";
						}

					}
				}else{
					if(vlegajo_to_tbc_perext.getSize()>0){
						globals.vOperador=vlegajo_to_tbc_perext.perext_nom;
						globals.vTipoOperador=2
						if(planuti_vlega_clavelega_to_tbl_clavelega.getSize()>0){
							if(globals.vClave_str!=globals.rtrim(planuti_vlega_clavelega_to_tbl_clavelega.clave,' ')){
								globals.vPassOperador="Clave incorrecta";
							}else{
								user=true
							}
						}else{
							globals.vPassOperador="Clave inexistente";
						}

					}else{
						globals.vOperador="Operador no válido";
					}
				}
			}
		}else{
			if(vlegajo_to_tbc_personal_login.getSize()>0){
				globals.vDigVerif=true
				globals.calculaDigitoVerificador()
				if(!globals.vDigVerif){
					globals.vOperador="Dígito verificador erróneo";
				}else{
					globals.vOperador=vlegajo_to_tbc_personal_login.per_apelnom;
					globals.vTipoOperador=0
					if(planuti_vlega_clavelega_to_tbl_clavelega.getSize()>0){
						if(globals.vClave_str!=globals.rtrim(planuti_vlega_clavelega_to_tbl_clavelega.clave,' ')){
							globals.vPassOperador="Clave incorrecta";
						}else{

							user=true
						}
					}else{
						globals.vPassOperador="Clave inexistente";  
					}
				}
			}else{
				if(vlegajo_to_tbc_perext.getSize()>0){
					globals.vOperador=vlegajo_to_tbc_perext.perext_nom;
					globals.vTipoOperador=2
					if(planuti_vlega_clavelega_to_tbl_clavelega.getSize()>0){
						if(globals.vClave_str!=globals.rtrim(planuti_vlega_clavelega_to_tbl_clavelega.clave,' ')){
							globals.vPassOperador="Clave incorrecta";
						}else{		
							user=true
						}
					}else{
						globals.vPassOperador="Clave inexistente";  
					}

				}else{
					globals.vOperador="Operador no válido";
				}
			}
		}
	}	

	if(user){
		//application.closeAllWindows()

		//forms.cargandoScroll.controller.show()
		//var win2 = application.createWindow("b",JSWindow.MODAL_DIALOG)
		//win2.title = "Loading";
		//win2.show(forms.cargandoScroll);
		//var win = application.createWindow("b",JSWindow.MODAL_DIALOG)
		//win.title = "Búsqueda de Paciente Internado";
		//win.show(forms.tab_scr_tbc_admsion);
		databaseManager.refreshRecordFromDatabase(vs_to_permisos_grales,-1)
		vs_to_permisos_grales.loadAllRecords()
		if(vs_to_permisos_grales.getSize()>0){
			if(vs_to_permisos_grales.permi_estado){
				if(vs_to_permisos_grales.permiso_modificacion||vs_to_permisos_grales.permiso_supervisor){
					globals.vSupervisor=true
				}else{
					globals.vSupervisor=false
				}
			}else{
				globals.vSupervisor=false 
			}
		}else{
			globals.vSupervisor=false
		}

		forms.tab_scr_tbc_admsion.controller.show()
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"0FBF9B65-7715-4984-B301-53EE91778E75"}
 */
function onAction_cancela(event) {
	
	//globals.vClose=true
	globals.vClose=true
	//var args = globals.vLegajo+';'+globals.vLega+';'+globals.vOperador+';'+globals.vTipoOperador+';'+"true";
	//application.closeSolution('Menu','retorno_MenuCirugia',args)
		application.exit()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"2EF43462-683D-4725-8DE0-6089DE8D73D5"}
 */
function onAction_legajo(event) {
	//application.output("por aca pasa")
}

/**
 * Handle focus lost event of the element.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"22C3C3DB-9644-4747-8F29-8CE5496F140E"}
 */
function onFocusLost_legajo(event) {
	if(globals.vLegajo!=0&&globals.vLegajo!=null&&globals.vLegajo!=''){
		globals.vLega=globals.vLegajo
		globals.vlargo= globals.vLega.toString().length - 1;
		if(globals.vlargo!=0){
	    globals.vLega=globals.vLega.toString().substr(0,globals.vlargo)
		globals.digito_verificador = utils.stringToNumber(globals.vLegajo.toString().substr(globals.vlargo, 1))
		if (globals.digito_verificador == 0){
			if (vlegajo_to_tbc_medicos.getSize()>0){
				globals.vOperador=vlegajo_to_tbc_medicos.med_apenom;
				forms.loginPlanillaNueva.elements.clave.requestFocus()
				
			}else{
		    	if(vlegajo_to_tbc_personal_login.getSize()>0){
		    		globals.vDigVerif=true
		    	   globals.calculaDigitoVerificador()
		    		
			       if(!globals.vDigVerif){
			    	   globals.vOperador="Dígito verificador erróneo";
			    	   
			    	   forms.loginPlanillaNueva.elements.legajo.requestFocus()
			       }else{
				      globals.vOperador=vlegajo_to_tbc_personal_login.per_apelnom;
				      forms.loginPlanillaNueva.elements.clave.requestFocus()
					  
			       }
		    	}else{
		    		if(vlegajo_to_tbc_perext.getSize()>0){
		    			globals.vOperador=vlegajo_to_tbc_perext.perext_nom;
		    			forms.loginPlanillaNueva.elements.clave.requestFocus()
						
		    		}else{
		    			globals.vOperador="Operador no válido";
		    			forms.loginPlanillaNueva.elements.legajo.requestFocus()
		    		}
		    	}
			}
		}else{
			
			if(vlegajo_to_tbc_personal_login.getSize()>0){
				   globals.vDigVerif=true
			       globals.calculaDigitoVerificador()
			       if(!globals.vDigVerif){
			    	   globals.vOperador="Digito verificador erroneo";
			    	   
			    	   forms.loginPlanillaNueva.elements.legajo.requestFocus()
			       }else{
				      globals.vOperador=vlegajo_to_tbc_personal_login.per_apelnom;
				      forms.loginPlanillaNueva.elements.clave.requestFocus()
					  
			       }
		    	}else{
		    		if(vlegajo_to_tbc_perext.getSize()>0){
		    			globals.vOperador=vlegajo_to_tbc_perext.perext_nom;
		    			forms.loginPlanillaNueva.elements.clave.requestFocus()
						
		    		}else{
		    			globals.vOperador="Operador No Valido";
		    			forms.loginPlanillaNueva.elements.legajo.requestFocus()
		    		}
		    	}
		}
		}else{
			forms.loginPlanillaNueva.elements.legajo.requestFocus()
		}
	}else{
			forms.loginPlanillaNueva.elements.legajo.requestFocus()
	}
	
}
