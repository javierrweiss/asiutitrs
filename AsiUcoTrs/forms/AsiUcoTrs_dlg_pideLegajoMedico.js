/**
 * @properties={typeid:35,uuid:"A1DA29E4-3529-4FEA-9B59-E140BC229529",variableType:-4}
 */
var f_cerrarForm = false;

/**
 * @properties={typeid:35,uuid:"E48AF94F-B957-4D6C-B773-E509E762894E",variableType:-4}
 */
var f_Anestesista = false;

/**
 * // TODO generated, please specify type and doc for the params
 * @param {Object} oldValue
 * @param {Object} newValue
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"98D52989-8CDC-4030-938F-25B58E8C5FE0"}
 */
function onDataChange_legajo(oldValue, newValue, event) {
	if(globals.AsiUcoTrs_vLegajo!=0&&globals.AsiUcoTrs_vLegajo!=null&&globals.AsiUcoTrs_vLegajo!=''){
		globals.AsiUcoTrs_vLega=globals.AsiUcoTrs_vLegajo
		globals.AsiUcoTrs_vlargo= globals.AsiUcoTrs_vLega.toString().length - 1;
		if(globals.AsiUcoTrs_vlargo!=0){
			globals.AsiUcoTrs_vLega=globals.AsiUcoTrs_vLega.toString().substr(0,globals.AsiUcoTrs_vlargo)
			globals.AsiUcoTrs_digito_verificador = utils.stringToNumber(globals.AsiUcoTrs_vLegajo.toString().substr(globals.AsiUcoTrs_vlargo, 1))
			if (globals.AsiUcoTrs_digito_verificador == 0){
				if (asiucotrs_vlegajo_to_tbc_medicos.getSize()>0){
					/*if(asiucotrs_vlegajo_to_tbc_medicos.med_espemed!=24){
						globals.AsiUcoTrs_vOperador="El legajo no pertenece a un Anestesiólogo";
						forms.AsiUcoTrs_dlg_pideLegajoMedico.elements.legajo.requestFocus()
						return true
						//return false
					}else{*/
					if (asiucotrs_vlegajo_to_tbc_medicos.med_bloqueo==1){
						globals.AsiUcoTrs_vOperador="Profesional con marca de bloqueado";
						forms.AsiUcoTrs_dlg_pideLegajoMedico.elements.legajo.requestFocus()
						return true
					}else{
						globals.AsiUcoTrs_vOperador=asiucotrs_vlegajo_to_tbc_medicos.med_apenom;
						forms.AsiUcoTrs_dlg_pideLegajoMedico.elements.clave.requestFocus()
						return true
					}
				}else{
					if(asiucotrs_vlegajo_to_tbc_personal_login_menu.getSize()>0){
						globals.AsiUcoTrs_vDigVerif=true
						globals.AsiUcoTrs_calculaDigitoVerificador()
	    		
						if(!globals.AsiUcoTrs_vDigVerif){
							globals.AsiUcoTrs_vOperador="Digito verificador erroneo";
							forms.AsiUcoTrs_dlg_pideLegajoMedico.elements.legajo.requestFocus()
							return true
							//return false
						}else{
							if(globals.AsiUcoTrs_vSolomedicos){
								if(asiucotrs_vlegajo_to_tbc_personal_login_menu.per_fecbaja!=0||asiucotrs_vlegajo_to_tbc_personal_login_menu.per_tipliquid!=2){
									globals.AsiUcoTrs_vOperador="El legajo no pertenece a un profesional";
									forms.AsiUcoTrs_dlg_pideLegajoMedico.elements.legajo.requestFocus()
									return true
									//return false
								}else{
									globals.AsiUcoTrs_vOperador=asiucotrs_vlegajo_to_tbc_personal_login.per_apelnom;
									forms.AsiUcoTrs_dlg_pideLegajoMedico.elements.clave.requestFocus()
									return true
								}
							}else{
								globals.AsiUcoTrs_vOperador=asiucotrs_vlegajo_to_tbc_personal_login.per_apelnom;
								forms.AsiUcoTrs_dlg_pideLegajoMedico.elements.clave.requestFocus()
								return true
							}
						}
					}else{
						
						globals.AsiUcoTrs_vOperador="Operador No Valido";
						forms.AsiUcoTrs_dlg_pideLegajoMedico.elements.legajo.requestFocus()
						return true
						//return false
						
					}
				}
			}else{
				if(asiucotrs_vlegajo_to_tbc_personal_login_menu.getSize()>0){
					globals.AsiUcoTrs_vDigVerif=true
					globals.AsiUcoTrs_calculaDigitoVerificador()
					if(!globals.AsiUcoTrs_vDigVerif){
						globals.AsiUcoTrs_vOperador="Digito verificador erroneo";
						forms.AsiUcoTrs_dlg_pideLegajoMedico.elements.legajo.requestFocus()
						return true
						//return false
					}else{
						if(globals.AsiUcoTrs_vSolomedicos){
							if(asiucotrs_vlegajo_to_tbc_personal_login_menu.per_fecbaja!=0||asiucotrs_vlegajo_to_tbc_personal_login_menu.per_tipliquid!=2){
								globals.AsiUcoTrs_vOperador="El legajo no pertenece a un profesional";
								forms.AsiUcoTrs_dlg_pideLegajoMedico.elements.legajo.requestFocus()
								return true
								//return false
							}else{
								globals.AsiUcoTrs_vOperador=asiucotrs_vlegajo_to_tbc_personal_login.per_apelnom;
						/**
						if(vs_to_permisos_grales.getSize()<1){
							plugins.dialogs.showInfoDialog("",globals.AsiUcoTrs_vTipoOperador)
							plugins.dialogs.showInfoDialog("",globals.AsiUcoTrs_vLegajo)
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
									forms.AsiUcoTrs_dlg_pideLegajoMedico.elements.clave.requestFocus()
									return true
								}
							}
							*/
						//}else{
								globals.AsiUcoTrs_esAnestesista=true
								forms.AsiUcoTrs_dlg_pideLegajoMedico.elements.clave.requestFocus()
								return true
							}
						}else{
							globals.AsiUcoTrs_vOperador=asiucotrs_vlegajo_to_tbc_personal_login.per_apelnom;
							globals.AsiUcoTrs_esAnestesista=true
							forms.AsiUcoTrs_dlg_pideLegajoMedico.elements.clave.requestFocus()
							return true
						}	
					}
				}else{
					
					globals.AsiUcoTrs_vOperador="Operador No Valido";
					forms.AsiUcoTrs_dlg_pideLegajoMedico.elements.legajo.requestFocus()
					return true
					//return false
					
				}
			}
		}else{
			forms.AsiUcoTrs_dlg_pideLegajoMedico.elements.legajo.requestFocus()
			return true
			//return false
		}
	}else{
		forms.AsiUcoTrs_dlg_pideLegajoMedico.elements.legajo.requestFocus()
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
 * @properties={typeid:24,uuid:"67FBDFE7-0972-41E7-BD5E-3AB2A409AA72"}
 */
function onDataChange_clave(oldValue, newValue, event) {
	globals.AsiUcoTrs_vPassOperador=''
	forms.AsiUcoTrs_dlg_pideLegajoMedico.elements.confirma.requestFocus()
	return true
}

/**
 * // TODO generated, please specify type and doc for the params
 * @param {Object} firstShow
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"5EB7E249-D959-4C83-86D9-96A0FE795C1D"}
 */
function onShow_login(firstShow, event) {
	f_Anestesista=false;
	f_cerrarForm = false;
	forms.AsiUcoTrs_dlg_pideLegajoMedico.elements.legajo.requestFocus()
}

/**
 * // TODO generated, please specify type and doc for the params
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"DA5548D3-F10A-4811-B7CF-C00AE03E1EEF"}
 */
function onAction_confirma(event) {
	var user = false;
	if(globals.AsiUcoTrs_vLegajo!=0&&globals.AsiUcoTrs_vLegajo!=null){
		
		globals.AsiUcoTrs_vPassOperador=''
		globals.AsiUcoTrs_vLega=globals.AsiUcoTrs_vLegajo
		globals.AsiUcoTrs_vlargo= globals.AsiUcoTrs_vLega.toString().length - 1;
		globals.AsiUcoTrs_vLega=globals.AsiUcoTrs_vLega.toString().substr(0,globals.AsiUcoTrs_vlargo)
		globals.AsiUcoTrs_digito_verificador = utils.stringToNumber(globals.AsiUcoTrs_vLegajo.toString().substr(globals.AsiUcoTrs_vlargo, 1))
		
	if (globals.AsiUcoTrs_digito_verificador == 0){
		if (asiucotrs_vlegajo_to_tbc_medicos.getSize()>0){
			if (asiucotrs_vlegajo_to_tbc_medicos.med_bloqueo==1){
				globals.AsiUcoTrs_vOperador="Profesional con marca de bloqueado";
				user=false
			}else{
			globals.AsiUcoTrs_vOperador=asiucotrs_vlegajo_to_tbc_medicos.med_apenom;
			if(asiucotrs_vlegajo_to_tbc_medicos.med_clave!=0){
				if(globals.AsiUcoTrs_vClave!=asiucotrs_vlegajo_to_tbc_medicos.med_clave){
					globals.AsiUcoTrs_vPassOperador="Clave Incorrecta";
					user=false
				}else{
					/*
					if(asiucotrs_vlegajo_to_tbc_medicos.med_espemed==24){
						globals.AsiUcoTrs_vTipoOperador=1
						globals.AsiUcoTrs_vTipoTecnico=1
						user=true
					}else{
						globals.AsiUcoTrs_vOperador="El Profesional no es Anestesiólogo"
						user=false
					}
					*/
					globals.AsiUcoTrs_vTipoOperador=1
					user=true
				}
			}else{
				if(globals.AsiUcoTrs_vClave!=asiucotrs_vlegajo1_to_tbc_clave_legajo.hor_perclave){
		    		globals.AsiUcoTrs_vPassOperador="Clave Incorrecta";
		    		user=false
				}else{
					/*
					if(asiucotrs_vlegajo_to_tbc_medicos.med_espemed==24){
						globals.AsiUcoTrs_vTipoOperador=1
						globals.AsiUcoTrs_vTipoTecnico=1
						user=true
					}else{
						globals.AsiUcoTrs_vOperador="El Profesional no es Anestesiólogo"
						user=false
					}
					*/
					globals.AsiUcoTrs_vTipoOperador=1
					user=true
				}
			}
			}
		}else{
	    	if(asiucotrs_vlegajo_to_tbc_personal_login_menu.getSize()>0){
	    		globals.AsiUcoTrs_vDigVerif=true
		       globals.AsiUcoTrs_calculaDigitoVerificador()
		       if(!globals.AsiUcoTrs_vDigVerif){
		    	   globals.AsiUcoTrs_vOperador="Digito verificador erroneo";
		    	   user=false
		       }else{
		    	   if(globals.AsiUcoTrs_vClave!=asiucotrs_vlegajo_to_tbc_clave_legajo.hor_perclave){
						globals.AsiUcoTrs_vPassOperador="Clave Incorrecta";
						user=false
					}else{
						if(globals.AsiUcoTrs_vSolomedicos){
							if(asiucotrs_vlegajo_to_tbc_personal_login_menu.per_fecbaja!=0||asiucotrs_vlegajo_to_tbc_personal_login_menu.per_tipliquid!=2){
								globals.AsiUcoTrs_vOperador="El legajo no pertenece a un profesional";
								user=false
							}else{
								globals.AsiUcoTrs_vTipoTecnico=1
								globals.AsiUcoTrs_vTipoOperador=0
								user=true
							}
						}else{
							if(asiucotrs_vlegajo_menu_to_tbc_personal.per_espemed!=24){
								user=false
							}else{
								if(asiucotrs_vlegajo_to_tbc_personal_login_menu.per_tipliquid!=2){
									globals.AsiUcoTrs_vTipoTecnico=0
								}else{
									globals.AsiUcoTrs_vTipoTecnico=1
								}
								globals.AsiUcoTrs_vTipoOperador=0
								user=true
							}
						}
					}
			   }
	    	}else{
	    		if(asiucotrs_vlegajo_to_tbc_perext.getSize()>0){
	    			globals.AsiUcoTrs_vOperador=asiucotrs_vlegajo_to_tbc_perext.perext_nom;
	    			if(globals.AsiUcoTrs_vClave!=asiucotrs_vlegajo_to_tbc_perext.perext_clave){
						globals.AsiUcoTrs_vPassOperador="Clave Incorrecta";
						user=false
					}else{
						globals.AsiUcoTrs_vTipoOperador=2
					   user=true
					}
	    		}else{
	    			globals.AsiUcoTrs_vOperador="Operador No Valido";
	    			user=false
	    		}
	    	}
		}
	}else{
		if(asiucotrs_vlegajo_to_tbc_personal_login_menu.getSize()>0){
				globals.AsiUcoTrs_vDigVerif=true
		       globals.AsiUcoTrs_calculaDigitoVerificador()
		       if(!globals.AsiUcoTrs_vDigVerif){
		    	   globals.AsiUcoTrs_vOperador="Digito verificador erroneo";
		    	   user=false
		       }else{
			      globals.AsiUcoTrs_vOperador=asiucotrs_vlegajo_to_tbc_personal_login_menu.per_apelnom;
			      if(globals.AsiUcoTrs_vClave!=asiucotrs_vlegajo_to_tbc_clave_legajo.hor_perclave){
						globals.AsiUcoTrs_vPassOperador="Clave Incorrecta";
						user=false
				  }else{
				  		if(globals.AsiUcoTrs_vSolomedicos){
					  		if(asiucotrs_vlegajo_to_tbc_personal_login_menu.per_fecbaja!=0||asiucotrs_vlegajo_to_tbc_personal_login_menu.per_tipliquid!=2){
					  			globals.AsiUcoTrs_vOperador="El legajo no pertenece a un profesional";
					  			user=false
					  		}else{
					  			globals.AsiUcoTrs_vTipoTecnico=1
					  			globals.AsiUcoTrs_vTipoOperador=0
					  			user=true
					  		}
				  		}else{
				  			if(asiucotrs_vlegajo_menu_to_tbc_personal.per_espemed!=24){
				  				user=false
				  			}else{
				  				if(asiucotrs_vlegajo_to_tbc_personal_login_menu.per_tipliquid!=2){
				  					globals.AsiUcoTrs_vTipoTecnico=0
				  				}else{
				  					globals.AsiUcoTrs_vTipoTecnico=1
				  				}
				  				globals.AsiUcoTrs_vTipoOperador=0
				  				user=true
				  			}
				  		}
				  }
		       }
	    }else{
	    		
	    			globals.AsiUcoTrs_vOperador="Operador No Valido";
	    			user=false
	    		
	    }
	}
	}	
	
    if(user){
	      //forms.tab_scr_tbc_admision.controller.show()
	    f_Anestesista=user;
	    globals.AsiUcoTrs_esAnestesista=user;
	    globals.AsiUcoTrs_vSolomedicos=user;
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
 * @properties={typeid:24,uuid:"454D340E-1112-411F-A4DA-6B184DBB256F"}
 */
function onAction_cancela(event) {
	//globals.vClose=true
    //application.showForm("frm_menu_principal")
    globals.AsiUcoTrs_vSolomedicos=false
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
 * @properties={typeid:24,uuid:"0F66ECFE-9C98-4F43-A9A4-3B43C2EC8348"}
 */
function onAction_legajo(event) {
	//application.output("por aca pasa")
}

/**
 * // TODO generated, please specify type and doc for the params
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"4EEF6975-0AFC-40F5-A2F8-C87032DA1890"}
 */
function onFocusLost_legajo(event) {
	if(globals.AsiUcoTrs_vLegajo!=0&&globals.AsiUcoTrs_vLegajo!=null&&globals.AsiUcoTrs_vLegajo!=''){
		globals.AsiUcoTrs_vLega=globals.AsiUcoTrs_vLegajo
		globals.AsiUcoTrs_vlargo= globals.AsiUcoTrs_vLega.toString().length - 1;
		if(globals.AsiUcoTrs_vlargo!=0){
	    globals.AsiUcoTrs_vLega=globals.AsiUcoTrs_vLega.toString().substr(0,globals.AsiUcoTrs_vlargo)
		globals.AsiUcoTrs_digito_verificador = utils.stringToNumber(globals.AsiUcoTrs_vLegajo.toString().substr(globals.AsiUcoTrs_vlargo, 1))
		if (globals.AsiUcoTrs_digito_verificador == 0){
			if (asiucotrs_vlegajo_to_tbc_medicos.getSize()>0){
				if (asiucotrs_vlegajo_to_tbc_medicos.med_bloqueo==1){
					globals.AsiUcoTrs_vOperador="Profesional con marca de bloqueado";
					forms.AsiUcoTrs_dlg_pideLegajoMedico.elements.legajo.requestFocus()
					
				}else{
				globals.AsiUcoTrs_vOperador=asiucotrs_vlegajo_to_tbc_medicos.med_apenom;
				forms.AsiUcoTrs_dlg_pideLegajoMedico.elements.clave.requestFocus()
				}
			}else{
		    	if(asiucotrs_vlegajo_to_tbc_personal_login.getSize()>0){
		    		globals.AsiUcoTrs_vDigVerif=true
		    		globals.AsiUcoTrs_calculaDigitoVerificador()
		    		
			       if(!globals.AsiUcoTrs_vDigVerif){
			    	   globals.AsiUcoTrs_vOperador="Digito verificador erroneo";
			    	   forms.AsiUcoTrs_dlg_pideLegajoMedico.elements.legajo.requestFocus()
			       }else{
				      globals.AsiUcoTrs_vOperador=asiucotrs_vlegajo_to_tbc_personal_login.per_apelnom;
				      forms.AsiUcoTrs_dlg_pideLegajoMedico.elements.clave.requestFocus()
					  
			       }
		    	}else{
		    		if(asiucotrs_vlegajo_to_tbc_perext.getSize()>0){
		    			globals.AsiUcoTrs_vOperador=asiucotrs_vlegajo_to_tbc_perext.perext_nom;
		    			forms.AsiUcoTrs_dlg_pideLegajoMedico.elements.clave.requestFocus()
						
		    		}else{
		    			globals.AsiUcoTrs_vOperador="Operador No Valido";
		    			forms.AsiUcoTrs_dlg_pideLegajoMedico.elements.legajo.requestFocus()
		    		}
		    	}
			}
		}else{
			
			if(asiucotrs_vlegajo_to_tbc_personal_login.getSize()>0){
				   globals.AsiUcoTrs_vDigVerif=true
			       globals.AsiUcoTrs_calculaDigitoVerificador()
			       if(!globals.AsiUcoTrs_vDigVerif){
			    	   globals.AsiUcoTrs_vOperador="Digito verificador erroneo";
			    	   forms.AsiUcoTrs_dlg_pideLegajoMedico.elements.legajo.requestFocus()
			       }else{
				      globals.AsiUcoTrs_vOperador=asiucotrs_vlegajo_to_tbc_personal_login.per_apelnom;
				      forms.AsiUcoTrs_dlg_pideLegajoMedico.elements.clave.requestFocus()
					  
			       }
		    	}else{
		    		if(asiucotrs_vlegajo_to_tbc_perext.getSize()>0){
		    			globals.AsiUcoTrs_vOperador=asiucotrs_vlegajo_to_tbc_perext.perext_nom;
		    			forms.AsiUcoTrs_dlg_pideLegajoMedico.elements.clave.requestFocus()
						
		    		}else{
		    			globals.AsiUcoTrs_vOperador="Operador No Valido";
		    			forms.AsiUcoTrs_dlg_pideLegajoMedico.elements.legajo.requestFocus()
		    		}
		    	}
		}
		}else{
			return
		}
	}else{
		forms.AsiUcoTrs_dlg_pideLegajoMedico.elements.legajo.requestFocus()
	}
	
}

/**
 * Handle hide window.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"39435455-720E-40AD-9020-351648AA0A11"}
 */
function onHide_pidelegajo(event) {
	/*
	globals.AsiUcoTrs_esAnestesista=f_Anestesista;
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
 * @properties={typeid:24,uuid:"FC8F4458-8B0C-463B-9457-6C0D21346C31"}
 */
function onElementFocusLost_pidelegajo(event) {
	globals.AsiUcoTrs_esAnestesista=f_Anestesista;
	return true
}

/**
 * Callback method when form is destroyed.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"ED15785A-9806-4026-B682-9DE13599C7CC"}
 */
function onUnload(event) {
	globals.AsiUcoTrs_esAnestesista=f_Anestesista;
}

/**
 * Handle a drop.
 * Return true if drop has been performed successfully, otherwise false.
 *
 * @param {JSDNDEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"DD75134F-1CF4-4838-BBC8-F68F0D548EC0"}
 */
function onDrop(event) {
	globals.AsiUcoTrs_esAnestesista=f_Anestesista;
	return false
}
