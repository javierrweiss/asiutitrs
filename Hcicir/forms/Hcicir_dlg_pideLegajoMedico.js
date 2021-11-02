/**
 * @properties={typeid:35,uuid:"0F9F6B72-A783-46B1-B760-5D7B73B4604A",variableType:-4}
 */
var f_cerrarForm = false;

/**
 * @properties={typeid:35,uuid:"0D920B3B-46D1-4755-BA08-9A36536EE414",variableType:-4}
 */
var f_Anestesista = false;

/**
 * // TODO generated, please specify type and doc for the params
 * @param {Object} oldValue
 * @param {Object} newValue
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"6727C914-B8B1-4516-865F-6EA2153ED06D"}
 */
function onDataChange_legajo(oldValue, newValue, event) {
	if(globals.Hcicir_vLegajo!=0&&globals.Hcicir_vLegajo!=null&&globals.Hcicir_vLegajo!=''){
		globals.Hcicir_vLega=globals.Hcicir_vLegajo
		globals.Hcicir_vlargo= globals.Hcicir_vLega.toString().length - 1;
		if(globals.Hcicir_vlargo!=0){
			globals.Hcicir_vLega=globals.Hcicir_vLega.toString().substr(0,globals.Hcicir_vlargo)
			globals.Hcicir_digito_verificador = utils.stringToNumber(globals.Hcicir_vLegajo.toString().substr(globals.Hcicir_vlargo, 1))
			if (globals.Hcicir_digito_verificador == 0){
				if (hcicir_vlegajo_to_tbc_medicos.getSize()>0){
					/*if(hcicir_vlegajo_to_tbc_medicos.med_espemed!=24){
						globals.Hcicir_vOperador="El legajo no pertenece a un Anestesiólogo";
						forms.Hcicir_dlg_pideLegajoMedico.elements.legajo.requestFocus()
						return true
						//return false
					}else{*/
						globals.Hcicir_vOperador=hcicir_vlegajo_to_tbc_medicos.med_apenom;
						forms.Hcicir_dlg_pideLegajoMedico.elements.clave.requestFocus()
						return true
					//}
				}else{
					if(hcicir_vlegajo_to_tbc_personal_login_cirugia.getSize()>0){
						globals.Hcicir_vDigVerif=true
						globals.hcicir_calculaDigitoVerificador()
	    		
						if(!globals.Hcicir_vDigVerif){
							globals.Hcicir_vOperador="Digito verificador erroneo";
							forms.Hcicir_dlg_pideLegajoMedico.elements.legajo.requestFocus()
							return true
							//return false
						}else{
							if(globals.Hcicir_vSolomedicos){
								if(hcicir_vlegajo_to_tbc_personal_login_cirugia.per_fecbaja!=0||hcicir_vlegajo_to_tbc_personal_login_cirugia.per_tipliquid!=2){
									globals.Hcicir_vOperador="El legajo no pertenece a un profesional";
									forms.Hcicir_dlg_pideLegajoMedico.elements.legajo.requestFocus()
									return true
									//return false
								}else{
									globals.Hcicir_vOperador=hcicir_vlegajo_to_tbc_personal_login.per_apelnom;
									forms.Hcicir_dlg_pideLegajoMedico.elements.clave.requestFocus()
									return true
								}
							}else{
								globals.Hcicir_vOperador=hcicir_vlegajo_to_tbc_personal_login.per_apelnom;
								forms.Hcicir_dlg_pideLegajoMedico.elements.clave.requestFocus()
								return true
							}
						}
					}else{
						
						globals.Hcicir_vOperador="Operador No Valido";
						forms.Hcicir_dlg_pideLegajoMedico.elements.legajo.requestFocus()
						return true
						//return false
						
					}
				}
			}else{
				if(hcicir_vlegajo_to_tbc_personal_login_cirugia.getSize()>0){
					globals.Hcicir_vDigVerif=true
					globals.hcicir_calculaDigitoVerificador()
					if(!globals.Hcicir_vDigVerif){
						globals.Hcicir_vOperador="Digito verificador erroneo";
						forms.Hcicir_dlg_pideLegajoMedico.elements.legajo.requestFocus()
						return true
						//return false
					}else{
						if(globals.Hcicir_vSolomedicos){
							if(hcicir_vlegajo_to_tbc_personal_login_cirugia.per_fecbaja!=0||hcicir_vlegajo_to_tbc_personal_login_cirugia.per_tipliquid!=2){
								globals.Hcicir_vOperador="El legajo no pertenece a un profesional";
								forms.Hcicir_dlg_pideLegajoMedico.elements.legajo.requestFocus()
								return true
								//return false
							}else{
								globals.Hcicir_vOperador=hcicir_vlegajo_to_tbc_personal_login.per_apelnom;
						/**
						if(vs_to_permisos_grales.getSize()<1){
							plugins.dialogs.showInfoDialog("",globals.Hcicir_vTipoOperador)
							plugins.dialogs.showInfoDialog("",globals.Hcicir_vLegajo)
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
									forms.Hcicir_dlg_pideLegajoMedico.elements.clave.requestFocus()
									return true
								}
							}
							*/
						//}else{
								globals.Hcicir_esAnestesista=true
								forms.Hcicir_dlg_pideLegajoMedico.elements.clave.requestFocus()
								return true
							}
						}else{
							globals.Hcicir_vOperador=hcicir_vlegajo_to_tbc_personal_login.per_apelnom;
							globals.Hcicir_esAnestesista=true
							forms.Hcicir_dlg_pideLegajoMedico.elements.clave.requestFocus()
							return true
						}	
					}
				}else{
					
					globals.Hcicir_vOperador="Operador No Valido";
					forms.Hcicir_dlg_pideLegajoMedico.elements.legajo.requestFocus()
					return true
					//return false
					
				}
			}
		}else{
			forms.Hcicir_dlg_pideLegajoMedico.elements.legajo.requestFocus()
			return true
			//return false
		}
	}else{
		forms.Hcicir_dlg_pideLegajoMedico.elements.legajo.requestFocus()
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
 * @properties={typeid:24,uuid:"A16BB061-0A62-4FCB-AEBC-6F3ECFC552A3"}
 */
function onDataChange_clave(oldValue, newValue, event) {
	globals.Hcicir_vPassOperador=''
	forms.Hcicir_dlg_pideLegajoMedico.elements.confirma.requestFocus()
	return true
}

/**
 * // TODO generated, please specify type and doc for the params
 * @param {Object} firstShow
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"5790A9C1-2645-45DB-88E9-0D8419C07F4F"}
 */
function onShow_login(firstShow, event) {
	f_Anestesista=false;
	f_cerrarForm = false;
	forms.Hcicir_dlg_pideLegajoMedico.elements.legajo.requestFocus()
}

/**
 * // TODO generated, please specify type and doc for the params
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"3E51045C-4FAF-4EF1-9E30-625C7EA90CF0"}
 */
function onAction_confirma(event) {
	var user = false;
	if(globals.Hcicir_vLegajo!=0&&globals.Hcicir_vLegajo!=null){
	globals.Hcicir_vPassOperador=''
	globals.Hcicir_vLega=globals.Hcicir_vLegajo
	globals.Hcicir_vlargo= globals.Hcicir_vLega.toString().length - 1;
    globals.Hcicir_vLega=globals.Hcicir_vLega.toString().substr(0,globals.Hcicir_vlargo)
	globals.Hcicir_digito_verificador = utils.stringToNumber(globals.Hcicir_vLegajo.toString().substr(globals.Hcicir_vlargo, 1))
	if (globals.Hcicir_digito_verificador == 0){
		if (hcicir_vlegajo_to_tbc_medicos.getSize()>0){
			globals.Hcicir_vOperador=hcicir_vlegajo_to_tbc_medicos.med_apenom;
			globals.Hcicir_vTipoOperador=1
			if(hcicir_vlega_to_tbl_clavelega.getSize()>0){
				if(globals.Hcicir_vClave_str!=globals.rtrim(hcicir_vlega_to_tbl_clavelega.clave,' ')){
					globals.Hcicir_vPassOperador="Clave Incorrecta";
					user=false
				}else{
						globals.Hcicir_vTipoTecnico=1
						user=true								
				}		
			}else{
				globals.Hcicir_vPassOperador='Clave inexistente';
				user=false;			
			}
		}else{		
	    	if(hcicir_vlegajo_to_tbc_personal_login_cirugia.getSize()>0){
	    		globals.Hcicir_vDigVerif=true
		       globals.hcicir_calculaDigitoVerificador()
		       if(!globals.Hcicir_vDigVerif){
		    	   globals.Hcicir_vOperador="Digito verificador erroneo";
		    	   user=false
		       }else{
		    	   globals.Hcicir_vTipoOperador=0
		    	   if(hcicir_vlega_to_tbl_clavelega.getSize()>0){
		    		   if(globals.Hcicir_vClave_str!=globals.rtrim(hcicir_vlega_to_tbl_clavelega.clave,' ')){
							globals.Hcicir_vPassOperador="Clave Incorrecta";
							user=false
						}else{
							if(globals.Hcicir_vSolomedicos){
								if(hcicir_vlegajo_to_tbc_personal_login_cirugia.per_fecbaja!=0||hcicir_vlegajo_to_tbc_personal_login_cirugia.per_tipliquid!=2){
									globals.Hcicir_vOperador="El legajo no pertenece a un profesional";
									user=false
								}else{
									globals.Hcicir_vTipoTecnico=1
									user=true
								}
							}else{
								if(hcicir_vlegajo_menu_cirugia_to_tbc_personal.per_espemed!=24){
									user=false
								}else{
									if(hcicir_vlegajo_to_tbc_personal_login_cirugia.per_tipliquid!=2){
										globals.Hcicir_vTipoTecnico=0
									}else{
										globals.Hcicir_vTipoTecnico=1
									}
									globals.Hcicir_vTipoOperador=0
									user=true
								}
							}
						}
		    	   } else{
		    		    globals.Hcicir_vPassOperador='Clave inexistente';
						user=false;		
		    	   }	  
			   }
	    	}else{
	    		if(hcicir_vlegajo_to_tbc_perext.getSize()>0){
	    			globals.Hcicir_vOperador=hcicir_vlegajo_to_tbc_perext.perext_nom;
	    			globals.Hcicir_vTipoOperador=2;
	    			if(hcicir_vlega_to_tbl_clavelega.getSize()>0){
	    				if(globals.Hcicir_vClave_str!= globals.rtrim(hcicir_vlega_to_tbl_clavelega.clave,' ')){
						globals.Hcicir_vPassOperador="Clave Incorrecta";
						user=false
					}else{
					   user=true
					}
	    			}else{
	    				 globals.Hcicir_vPassOperador='Clave inexistente';
							user=false;	
	    			}
	    			
	    		}else{
	    			globals.Hcicir_vOperador="Operador no válido";
	    			user=false
	    		}
	    	}
		}
	}else{
		if(hcicir_vlegajo_to_tbc_personal_login_cirugia.getSize()>0){
				globals.Hcicir_vDigVerif=true
		       globals.hcicir_calculaDigitoVerificador()
		       if(!globals.Hcicir_vDigVerif){
		    	   globals.Hcicir_vOperador="Dígito verificador erróneo";
		    	   user=false
		       }else{
			      globals.Hcicir_vOperador=hcicir_vlegajo_to_tbc_personal_login_cirugia.per_apelnom;
			      globals.Hcicir_vTipoOperador=0;
			      if(hcicir_vlega_to_tbl_clavelega.getSize()>0){
			    	   if(globals.Hcicir_vClave_str!=globals.rtrim(hcicir_vlega_to_tbl_clavelega.clave,' ')){
						globals.Hcicir_vPassOperador="Clave Incorrecta";
						user=false
				  }else{
				  		if(globals.Hcicir_vSolomedicos){
					  		if(hcicir_vlegajo_to_tbc_personal_login_cirugia.per_fecbaja!=0||hcicir_vlegajo_to_tbc_personal_login_cirugia.per_tipliquid!=2){
					  			globals.Hcicir_vOperador="El legajo no pertenece a un profesional";
					  			user=false
					  		}else{
					  			globals.Hcicir_vTipoTecnico=1
					  			user=true
					  		}
				  		}else{
				  			if(hcicir_vlegajo_menu_cirugia_to_tbc_personal.per_espemed!=24){
				  				user=false
				  			}else{
				  				if(hcicir_vlegajo_to_tbc_personal_login_cirugia.per_tipliquid!=2){
				  					globals.Hcicir_vTipoTecnico=0
				  				}else{
				  					globals.Hcicir_vTipoTecnico=1
				  				}
				  				globals.Hcicir_vTipoOperador=0
				  				user=true
				  			}
				  		}
				  }
			      }else{
			    	  globals.Hcicir_vPassOperador='Clave inexistente';
					  user=false;	
			      }		     
		       }
	    }else{	
	    			globals.Hcicir_vOperador="Operador no válido";
	    			user=false
	    		
	    }
	}
	}	
	
    if(user){
	      //forms.tab_scr_tbc_admision.controller.show()
	    f_Anestesista=user;
	    globals.Hcicir_esAnestesista=user;
	    globals.Hcicir_vSolomedicos=user;
	    f_cerrarForm = true;
    	var name=application.getActiveWindow()
		name.getName()
		var $win=application.getWindow(name.getName())
		if($win!=null){
			$win.hide()
			$win.destroy()
		}
	}else{
		elements.clave.requestFocus()
	}
}

/**
 * // TODO generated, please specify type and doc for the params
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"AD1B9F1D-0B73-4798-9325-59DCA2FE6A93"}
 */
function onAction_cancela(event) {
	//globals.vClose=true
    //application.showForm("frm_menu_principal")
    globals.Hcicir_vSolomedicos=false
	//application.closeAllWindows()
	f_cerrarForm = true;
	var name=application.getActiveWindow()
	name.getName()
	var $win=application.getWindow(name.getName())
	if($win!=null){
		$win.hide()
		$win.destroy()
	}
}

/**
 * // TODO generated, please specify type and doc for the params
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"58584239-B0AB-42C5-9F4A-B80CA645010A"}
 */
function onAction_legajo(event) {
	//application.output("por aca pasa")
}

/**
 * // TODO generated, please specify type and doc for the params
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"26CF8D4C-950F-4D27-B9E0-8488F48895E3"}
 */
function onFocusLost_legajo(event) {
	if(globals.Hcicir_vLegajo!=0&&globals.Hcicir_vLegajo!=null&&globals.Hcicir_vLegajo!=''){
		globals.Hcicir_vLega=globals.Hcicir_vLegajo
		globals.Hcicir_vlargo= globals.Hcicir_vLega.toString().length - 1;
		if(globals.Hcicir_vlargo!=0){
	    globals.Hcicir_vLega=globals.Hcicir_vLega.toString().substr(0,globals.Hcicir_vlargo)
		globals.Hcicir_digito_verificador = utils.stringToNumber(globals.Hcicir_vLegajo.toString().substr(globals.Hcicir_vlargo, 1))
		if (globals.Hcicir_digito_verificador == 0){
			if (hcicir_vlegajo_to_tbc_medicos.getSize()>0){
				globals.Hcicir_vOperador=hcicir_vlegajo_to_tbc_medicos.med_apenom;
				forms.Hcicir_dlg_pideLegajoMedico.elements.clave.requestFocus()
				
			}else{
		    	if(hcicir_vlegajo_to_tbc_personal_login.getSize()>0){
		    		globals.Hcicir_vDigVerif=true
		    	   globals.hcicir_calculaDigitoVerificador()
		    		
			       if(!globals.Hcicir_vDigVerif){
			    	   globals.Hcicir_vOperador="Digito verificador erroneo";
			    	   forms.Hcicir_dlg_pideLegajoMedico.elements.legajo.requestFocus()
			       }else{
				      globals.Hcicir_vOperador=hcicir_vlegajo_to_tbc_personal_login.per_apelnom;
				      forms.Hcicir_dlg_pideLegajoMedico.elements.clave.requestFocus()
					  
			       }
		    	}else{
		    		if(hcicir_vlegajo_to_tbc_perext.getSize()>0){
		    			globals.Hcicir_vOperador=hcicir_vlegajo_to_tbc_perext.perext_nom;
		    			forms.Hcicir_dlg_pideLegajoMedico.elements.clave.requestFocus()
						
		    		}else{
		    			globals.Hcicir_vOperador="Operador No Valido";
		    			forms.Hcicir_dlg_pideLegajoMedico.elements.legajo.requestFocus()
		    		}
		    	}
			}
		}else{
			
			if(hcicir_vlegajo_to_tbc_personal_login.getSize()>0){
				   globals.Hcicir_vDigVerif=true
			       globals.hcicir_calculaDigitoVerificador()
			       if(!globals.Hcicir_vDigVerif){
			    	   globals.Hcicir_vOperador="Digito verificador erroneo";
			    	   forms.Hcicir_dlg_pideLegajoMedico.elements.legajo.requestFocus()
			       }else{
				      globals.Hcicir_vOperador=hcicir_vlegajo_to_tbc_personal_login.per_apelnom;
				      forms.Hcicir_dlg_pideLegajoMedico.elements.clave.requestFocus()
					  
			       }
		    	}else{
		    		if(hcicir_vlegajo_to_tbc_perext.getSize()>0){
		    			globals.Hcicir_vOperador=hcicir_vlegajo_to_tbc_perext.perext_nom;
		    			forms.Hcicir_dlg_pideLegajoMedico.elements.clave.requestFocus()
						
		    		}else{
		    			globals.Hcicir_vOperador="Operador No Valido";
		    			forms.Hcicir_dlg_pideLegajoMedico.elements.legajo.requestFocus()
		    		}
		    	}
		}
		}else{
			return
		}
	}else{
		forms.Hcicir_dlg_pideLegajoMedico.elements.legajo.requestFocus()
	}
	
}

/**
 * Handle hide window.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"BAC9B30A-0D39-47AF-8A66-506AD62443B5"}
 */
function onHide_pidelegajo(event) {
	/*
	globals.Hcicir_esAnestesista=f_Anestesista;
	var name=application.getActiveWindow()
	name.getName()
	var $win=application.getWindow(name.getName())
	if($win!=null){
		$win.hide()
		$win.destroy()
	}
	*/
	return f_cerrarForm;
}

/**
 * Handle focus lost event of an element on the form. Return false when the focus lost event of the element itself shouldn't be triggered.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"8B40E263-9237-4F94-B506-4185CC34261A"}
 */
function onElementFocusLost_pidelegajo(event) {
	globals.Hcicir_esAnestesista=f_Anestesista;
	return true
}

/**
 * Callback method when form is destroyed.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"81B845EA-582B-47BA-9775-601F06CE24D5"}
 */
function onUnload(event) {
	globals.Hcicir_esAnestesista=f_Anestesista;
}

/**
 * Handle a drop.
 * Return true if drop has been performed successfully, otherwise false.
 *
 * @param {JSDNDEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"8EF15AD8-BA80-4B02-9013-EB7BB8E98F59"}
 */
function onDrop(event) {
	globals.Hcicir_esAnestesista=f_Anestesista;
	return false
}
