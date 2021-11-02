/**
 * @properties={typeid:35,uuid:"2FCE15BF-ED27-4DAA-9C8A-EAC62073251B",variableType:-4}
 */
var f_cerrarForm = false;

/**
 * @properties={typeid:35,uuid:"FB8DFF4A-359D-4825-94FD-5EB56BEEE5BE",variableType:-4}
 */
var f_Anestesista = false;

/**
 * // TODO generated, please specify type and doc for the params
 * @param {Object} oldValue
 * @param {Object} newValue
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"0F8D73B6-FC0E-4296-AF3B-9DA59AC86696"}
 */
function onDataChange_legajo(oldValue, newValue, event) {
	if(globals.Srv_Login_Sanatorio_vLegajo!=0&&globals.Srv_Login_Sanatorio_vLegajo!=null&&globals.Srv_Login_Sanatorio_vLegajo!=''){
		globals.Srv_Login_Sanatorio_vLega=globals.Srv_Login_Sanatorio_vLegajo
		globals.Srv_Login_Sanatorio_vlargo= globals.Srv_Login_Sanatorio_vLega.toString().length - 1;
		if(globals.Srv_Login_Sanatorio_vlargo!=0){
			globals.Srv_Login_Sanatorio_vLega=globals.Srv_Login_Sanatorio_vLega.toString().substr(0,globals.Srv_Login_Sanatorio_vlargo)
			globals.Srv_Login_Sanatorio_digito_verificador = utils.stringToNumber(globals.Srv_Login_Sanatorio_vLegajo.toString().substr(globals.Srv_Login_Sanatorio_vlargo, 1))
			if (globals.Srv_Login_Sanatorio_digito_verificador == 0){
				if (srv_login_sanatorio_vlegajo_to_tbc_medicos.getSize()>0){
					/*if(srv_login_sanatorio_vlegajo_to_tbc_medicos.med_espemed!=24){
						globals.Srv_Login_Sanatorio_vOperador="El legajo no pertenece a un Anestesiólogo";
						forms.Srv_Login_Sanatorio_dlg_pideLegajoMedico.elements.legajo.requestFocus()
						return true
						//return false
					}else{*/
					if (srv_login_sanatorio_vlegajo_to_tbc_medicos.med_bloqueo==1){
						globals.Srv_Login_Sanatorio_vOperador="Profesional con marca de bloqueado";
						forms.Srv_Login_Sanatorio_dlg_pideLegajoMedico.elements.legajo.requestFocus()
						return true
					}else{
						globals.Srv_Login_Sanatorio_vOperador=srv_login_sanatorio_vlegajo_to_tbc_medicos.med_apenom;
						forms.Srv_Login_Sanatorio_dlg_pideLegajoMedico.elements.clave.requestFocus()
						return true
					}
				}else{
					if(srv_login_sanatorio_vlegajo_to_tbc_personal_login_menu.getSize()>0){
						globals.Srv_Login_Sanatorio_vDigVerif=true
						globals.Srv_Login_Sanatorio_calculaDigitoVerificador()
	    		
						if(!globals.Srv_Login_Sanatorio_vDigVerif){
							globals.Srv_Login_Sanatorio_vOperador="Digito verificador erroneo";
							forms.Srv_Login_Sanatorio_dlg_pideLegajoMedico.elements.legajo.requestFocus()
							return true
							//return false
						}else{
							if(globals.Srv_Login_Sanatorio_vSolomedicos){
								if(srv_login_sanatorio_vlegajo_to_tbc_personal_login_menu.per_fecbaja!=0||srv_login_sanatorio_vlegajo_to_tbc_personal_login_menu.per_tipliquid!=2){
									globals.Srv_Login_Sanatorio_vOperador="El legajo no pertenece a un profesional";
									forms.Srv_Login_Sanatorio_dlg_pideLegajoMedico.elements.legajo.requestFocus()
									return true
									//return false
								}else{
									globals.Srv_Login_Sanatorio_vOperador=srv_login_sanatorio_vlegajo_to_tbc_personal_login.per_apelnom;
									forms.Srv_Login_Sanatorio_dlg_pideLegajoMedico.elements.clave.requestFocus()
									return true
								}
							}else{
								globals.Srv_Login_Sanatorio_vOperador=srv_login_sanatorio_vlegajo_to_tbc_personal_login.per_apelnom;
								forms.Srv_Login_Sanatorio_dlg_pideLegajoMedico.elements.clave.requestFocus()
								return true
							}
						}
					}else{
						
						globals.Srv_Login_Sanatorio_vOperador="Operador No Valido";
						forms.Srv_Login_Sanatorio_dlg_pideLegajoMedico.elements.legajo.requestFocus()
						return true
						//return false
						
					}
				}
			}else{
				if(srv_login_sanatorio_vlegajo_to_tbc_personal_login_menu.getSize()>0){
					globals.Srv_Login_Sanatorio_vDigVerif=true
					globals.Srv_Login_Sanatorio_calculaDigitoVerificador()
					if(!globals.Srv_Login_Sanatorio_vDigVerif){
						globals.Srv_Login_Sanatorio_vOperador="Digito verificador erroneo";
						forms.Srv_Login_Sanatorio_dlg_pideLegajoMedico.elements.legajo.requestFocus()
						return true
						//return false
					}else{
						if(globals.Srv_Login_Sanatorio_vSolomedicos){
							if(srv_login_sanatorio_vlegajo_to_tbc_personal_login_menu.per_fecbaja!=0||srv_login_sanatorio_vlegajo_to_tbc_personal_login_menu.per_tipliquid!=2){
								globals.Srv_Login_Sanatorio_vOperador="El legajo no pertenece a un profesional";
								forms.Srv_Login_Sanatorio_dlg_pideLegajoMedico.elements.legajo.requestFocus()
								return true
								//return false
							}else{
								globals.Srv_Login_Sanatorio_vOperador=srv_login_sanatorio_vlegajo_to_tbc_personal_login.per_apelnom;
						/**
						if(vs_to_permisos_grales.getSize()<1){
							plugins.dialogs.showInfoDialog("",globals.Srv_Login_Sanatorio_vTipoOperador)
							plugins.dialogs.showInfoDialog("",globals.Srv_Login_Sanatorio_vLegajo)
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
									forms.Srv_Login_Sanatorio_dlg_pideLegajoMedico.elements.clave.requestFocus()
									return true
								}
							}
							*/
						//}else{
								globals.Srv_Login_Sanatorio_esAnestesista=true
								forms.Srv_Login_Sanatorio_dlg_pideLegajoMedico.elements.clave.requestFocus()
								return true
							}
						}else{
							globals.Srv_Login_Sanatorio_vOperador=srv_login_sanatorio_vlegajo_to_tbc_personal_login.per_apelnom;
							globals.Srv_Login_Sanatorio_esAnestesista=true
							forms.Srv_Login_Sanatorio_dlg_pideLegajoMedico.elements.clave.requestFocus()
							return true
						}	
					}
				}else{
					
					globals.Srv_Login_Sanatorio_vOperador="Operador No Valido";
					forms.Srv_Login_Sanatorio_dlg_pideLegajoMedico.elements.legajo.requestFocus()
					return true
					//return false
					
				}
			}
		}else{
			forms.Srv_Login_Sanatorio_dlg_pideLegajoMedico.elements.legajo.requestFocus()
			return true
			//return false
		}
	}else{
		forms.Srv_Login_Sanatorio_dlg_pideLegajoMedico.elements.legajo.requestFocus()
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
 * @properties={typeid:24,uuid:"ED806147-5F7F-4B59-A442-E31D379AD823"}
 */
function onDataChange_clave(oldValue, newValue, event) {
	globals.Srv_Login_Sanatorio_vPassOperador=''
	forms.Srv_Login_Sanatorio_dlg_pideLegajoMedico.elements.confirma.requestFocus()
	return true
}

/**
 * // TODO generated, please specify type and doc for the params
 * @param {Object} firstShow
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"6CCDFB29-41DA-4A50-9266-62DCB0BC4843"}
 */
function onShow_login(firstShow, event) {
	f_Anestesista=false;
	f_cerrarForm = false;
	forms.Srv_Login_Sanatorio_dlg_pideLegajoMedico.elements.legajo.requestFocus()
}

/**
 * // TODO generated, please specify type and doc for the params
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"B28DFC8B-43C9-4D2A-9084-DCD7C565F145"}
 */
function onAction_confirma(event) {
	var user = false;
	if(globals.Srv_Login_Sanatorio_vLegajo!=0&&globals.Srv_Login_Sanatorio_vLegajo!=null){
		
		globals.Srv_Login_Sanatorio_vPassOperador=''
		globals.Srv_Login_Sanatorio_vLega=globals.Srv_Login_Sanatorio_vLegajo
		globals.Srv_Login_Sanatorio_vlargo= globals.Srv_Login_Sanatorio_vLega.toString().length - 1;
		globals.Srv_Login_Sanatorio_vLega=globals.Srv_Login_Sanatorio_vLega.toString().substr(0,globals.Srv_Login_Sanatorio_vlargo)
		globals.Srv_Login_Sanatorio_digito_verificador = utils.stringToNumber(globals.Srv_Login_Sanatorio_vLegajo.toString().substr(globals.Srv_Login_Sanatorio_vlargo, 1))
		
	if (globals.Srv_Login_Sanatorio_digito_verificador == 0){
		if (srv_login_sanatorio_vlegajo_to_tbc_medicos.getSize()>0){
			if (srv_login_sanatorio_vlegajo_to_tbc_medicos.med_bloqueo==1){
				globals.Srv_Login_Sanatorio_vOperador="Profesional con marca de bloqueado";
				user=false
			}else{
			globals.Srv_Login_Sanatorio_vOperador=srv_login_sanatorio_vlegajo_to_tbc_medicos.med_apenom;
			if(srv_login_sanatorio_vlegajo_to_tbc_medicos.med_clave!=0){
				if(globals.Srv_Login_Sanatorio_vClave!=srv_login_sanatorio_vlegajo_to_tbc_medicos.med_clave){
					globals.Srv_Login_Sanatorio_vPassOperador="Clave Incorrecta";
					user=false
				}else{
					/*
					if(srv_login_sanatorio_vlegajo_to_tbc_medicos.med_espemed==24){
						globals.Srv_Login_Sanatorio_vTipoOperador=1
						globals.Srv_Login_Sanatorio_vTipoTecnico=1
						user=true
					}else{
						globals.Srv_Login_Sanatorio_vOperador="El Profesional no es Anestesiólogo"
						user=false
					}
					*/
					globals.Srv_Login_Sanatorio_vTipoOperador=1
					user=true
				}
			}else{
				if(globals.Srv_Login_Sanatorio_vClave!=srv_login_sanatorio_vlegajo1_to_tbc_clave_legajo.hor_perclave){
		    		globals.Srv_Login_Sanatorio_vPassOperador="Clave Incorrecta";
		    		user=false
				}else{
					
					if(srv_login_sanatorio_vlegajo_to_tbc_medicos.med_espemed==globals.Srv_Login_Sanatorio_Codigo_Especialidad){
						globals.Srv_Login_Sanatorio_vTipoOperador=1
						globals.Srv_Login_Sanatorio_vTipoTecnico=1
						user=true
					}else{
						globals.Srv_Login_Sanatorio_vOperador="El Profesional no es Anestesiólogo"
						user=false
					}
					
//					globals.Srv_Login_Sanatorio_vTipoOperador=1
//					user=true
				}
			}
			}
		}else{
	    	if(srv_login_sanatorio_vlegajo_to_tbc_personal_login_menu.getSize()>0){
	    		globals.Srv_Login_Sanatorio_vDigVerif=true
		       globals.Srv_Login_Sanatorio_calculaDigitoVerificador()
		       if(!globals.Srv_Login_Sanatorio_vDigVerif){
		    	   globals.Srv_Login_Sanatorio_vOperador="Digito verificador erroneo";
		    	   user=false
		       }else{
		    	   if(globals.Srv_Login_Sanatorio_vClave!=srv_login_sanatorio_vlegajo_to_tbc_clave_legajo.hor_perclave){
						globals.Srv_Login_Sanatorio_vPassOperador="Clave Incorrecta";
						user=false
					}else{
						if(globals.Srv_Login_Sanatorio_vSolomedicos){
							if(srv_login_sanatorio_vlegajo_to_tbc_personal_login_menu.per_fecbaja!=0||srv_login_sanatorio_vlegajo_to_tbc_personal_login_menu.per_tipliquid!=2){
								globals.Srv_Login_Sanatorio_vOperador="El legajo no pertenece a un profesional";
								user=false
							}else{
								globals.Srv_Login_Sanatorio_vTipoTecnico=1
								globals.Srv_Login_Sanatorio_vTipoOperador=0
								user=true
							}
						}else{
							if(globals.Srv_Login_Sanatorio_Codigo_Especialidad!=0){
								
								if(srv_login_sanatorio_vlegajo_menu_to_tbc_personal.per_espemed!=globals.Srv_Login_Sanatorio_Codigo_Especialidad){
									user=false
								}else{
									if(srv_login_sanatorio_vlegajo_to_tbc_personal_login_menu.per_tipliquid!=2){
										globals.Srv_Login_Sanatorio_vTipoTecnico=0
									}else{
										globals.Srv_Login_Sanatorio_vTipoTecnico=1
									}
									globals.Srv_Login_Sanatorio_vTipoOperador=0
									user=true
								}
								
							}else{
								if(srv_login_sanatorio_vlegajo_menu_to_tbc_personal.per_espemed!=24){
									user=false
								}else{
									if(srv_login_sanatorio_vlegajo_to_tbc_personal_login_menu.per_tipliquid!=2){
										globals.Srv_Login_Sanatorio_vTipoTecnico=0
									}else{
										globals.Srv_Login_Sanatorio_vTipoTecnico=1
									}
									globals.Srv_Login_Sanatorio_vTipoOperador=0
									user=true
								}
							}
							
						}
					}
			   }
	    	}else{
	    		if(srv_login_sanatorio_vlegajo_to_tbc_perext.getSize()>0){
	    			globals.Srv_Login_Sanatorio_vOperador=srv_login_sanatorio_vlegajo_to_tbc_perext.perext_nom;
	    			if(globals.Srv_Login_Sanatorio_vClave!=srv_login_sanatorio_vlegajo_to_tbc_perext.perext_clave){
						globals.Srv_Login_Sanatorio_vPassOperador="Clave Incorrecta";
						user=false
					}else{
						globals.Srv_Login_Sanatorio_vTipoOperador=2
					   user=true
					}
	    		}else{
	    			globals.Srv_Login_Sanatorio_vOperador="Operador No Valido";
	    			user=false
	    		}
	    	}
		}
	}else{
		if(srv_login_sanatorio_vlegajo_to_tbc_personal_login_menu.getSize()>0){
				globals.Srv_Login_Sanatorio_vDigVerif=true
		       globals.Srv_Login_Sanatorio_calculaDigitoVerificador()
		       if(!globals.Srv_Login_Sanatorio_vDigVerif){
		    	   globals.Srv_Login_Sanatorio_vOperador="Digito verificador erroneo";
		    	   user=false
		       }else{
			      globals.Srv_Login_Sanatorio_vOperador=srv_login_sanatorio_vlegajo_to_tbc_personal_login_menu.per_apelnom;
			      if(globals.Srv_Login_Sanatorio_vClave!=srv_login_sanatorio_vlegajo_to_tbc_clave_legajo.hor_perclave){
						globals.Srv_Login_Sanatorio_vPassOperador="Clave Incorrecta";
						user=false
				  }else{
				  		if(globals.Srv_Login_Sanatorio_vSolomedicos){
					  		if(srv_login_sanatorio_vlegajo_to_tbc_personal_login_menu.per_fecbaja!=0||srv_login_sanatorio_vlegajo_to_tbc_personal_login_menu.per_tipliquid!=2){
					  			globals.Srv_Login_Sanatorio_vOperador="El legajo no pertenece a un profesional";
					  			user=false
					  		}else{
					  			globals.Srv_Login_Sanatorio_vTipoTecnico=1
					  			globals.Srv_Login_Sanatorio_vTipoOperador=0
					  			user=true
					  		}
				  		}else{
				  			
				  			if(globals.Srv_Login_Sanatorio_Codigo_Especialidad!=0){
				  				
				  				if(srv_login_sanatorio_vlegajo_menu_to_tbc_personal.per_espemed!=globals.Srv_Login_Sanatorio_Codigo_Especialidad){
					  				user=false
					  			}else{
					  				if(srv_login_sanatorio_vlegajo_to_tbc_personal_login_menu.per_tipliquid!=2){
					  					globals.Srv_Login_Sanatorio_vTipoTecnico=0
					  				}else{
					  					globals.Srv_Login_Sanatorio_vTipoTecnico=1
					  				}
					  				globals.Srv_Login_Sanatorio_vTipoOperador=0
					  				user=true
					  			}
				  				
				  				
				  			}else{
				  				if(srv_login_sanatorio_vlegajo_menu_to_tbc_personal.per_espemed!=globals.Srv_Login_Sanatorio_Codigo_Especialidad){
					  				user=false
					  			}else{
					  				if(srv_login_sanatorio_vlegajo_to_tbc_personal_login_menu.per_tipliquid!=2){
					  					globals.Srv_Login_Sanatorio_vTipoTecnico=0
					  				}else{
					  					globals.Srv_Login_Sanatorio_vTipoTecnico=1
					  				}
					  				globals.Srv_Login_Sanatorio_vTipoOperador=0
					  				user=true
					  			}
				  			}
				  				
				  				
				  		
				  		}
				  }
		       }
	    }else{
	    		
	    			globals.Srv_Login_Sanatorio_vOperador="Operador No Valido";
	    			user=false
	    		
	    }
	}
	}	
	
    if(user){
	      //forms.tab_scr_tbc_admision.controller.show()
	    f_Anestesista=user;
	    globals.Srv_Login_Sanatorio_esDelaEspecialidadMedica = user;
	    globals.Srv_Login_Sanatorio_esAnestesista=user;
	    globals.Srv_Login_Sanatorio_vSolomedicos=user;
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
 * @properties={typeid:24,uuid:"C304DD3F-E6B1-4E8B-AA58-EE19F3A8B5C2"}
 */
function onAction_cancela(event) {
	//globals.vClose=true
    //application.showForm("frm_menu_principal")
    globals.Srv_Login_Sanatorio_vSolomedicos=false
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
 * @properties={typeid:24,uuid:"D90772BA-779C-439E-BE81-333F616FFC3B"}
 */
function onAction_legajo(event) {
	//application.output("por aca pasa")
}

/**
 * // TODO generated, please specify type and doc for the params
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"BFE44D3B-2B4F-471F-8E50-7C9977A2D098"}
 */
function onFocusLost_legajo(event) {
	if(globals.Srv_Login_Sanatorio_vLegajo!=0 && globals.Srv_Login_Sanatorio_vLegajo!=null && globals.Srv_Login_Sanatorio_vLegajo!=''){
		globals.Srv_Login_Sanatorio_vLega=globals.Srv_Login_Sanatorio_vLegajo
		globals.Srv_Login_Sanatorio_vlargo= globals.Srv_Login_Sanatorio_vLega.toString().length - 1;
		if(globals.Srv_Login_Sanatorio_vlargo!=0){
	    globals.Srv_Login_Sanatorio_vLega=globals.Srv_Login_Sanatorio_vLega.toString().substr(0,globals.Srv_Login_Sanatorio_vlargo)
		globals.Srv_Login_Sanatorio_digito_verificador = utils.stringToNumber(globals.Srv_Login_Sanatorio_vLegajo.toString().substr(globals.Srv_Login_Sanatorio_vlargo, 1))
		if (globals.Srv_Login_Sanatorio_digito_verificador == 0){
			if (srv_login_sanatorio_vlegajo_to_tbc_medicos.getSize()>0){
				if (srv_login_sanatorio_vlegajo_to_tbc_medicos.med_bloqueo==1){
					globals.Srv_Login_Sanatorio_vOperador="Profesional con marca de bloqueado";
					forms.Srv_Login_Sanatorio_dlg_pideLegajoMedico.elements.legajo.requestFocus()
					
				}else{
				globals.Srv_Login_Sanatorio_vOperador=srv_login_sanatorio_vlegajo_to_tbc_medicos.med_apenom;
				forms.Srv_Login_Sanatorio_dlg_pideLegajoMedico.elements.clave.requestFocus()
				}
			}else{
		    	if(srv_login_sanatorio_vlegajo_to_tbc_personal_login.getSize()>0){
		    		globals.Srv_Login_Sanatorio_vDigVerif=true
		    		globals.Srv_Login_Sanatorio_calculaDigitoVerificador()
		    		
			       if(!globals.Srv_Login_Sanatorio_vDigVerif){
			    	   globals.Srv_Login_Sanatorio_vOperador="Digito verificador erroneo";
			    	   forms.Srv_Login_Sanatorio_dlg_pideLegajoMedico.elements.legajo.requestFocus()
			       }else{
				      globals.Srv_Login_Sanatorio_vOperador=srv_login_sanatorio_vlegajo_to_tbc_personal_login.per_apelnom;
				      forms.Srv_Login_Sanatorio_dlg_pideLegajoMedico.elements.clave.requestFocus()
					  
			       }
		    	}else{
		    		if(srv_login_sanatorio_vlegajo_to_tbc_perext.getSize()>0){
		    			globals.Srv_Login_Sanatorio_vOperador=srv_login_sanatorio_vlegajo_to_tbc_perext.perext_nom;
		    			forms.Srv_Login_Sanatorio_dlg_pideLegajoMedico.elements.clave.requestFocus()
						
		    		}else{
		    			globals.Srv_Login_Sanatorio_vOperador="Operador No Valido";
		    			forms.Srv_Login_Sanatorio_dlg_pideLegajoMedico.elements.legajo.requestFocus()
		    		}
		    	}
			}
		}else{
			
			if(srv_login_sanatorio_vlegajo_to_tbc_personal_login.getSize()>0){
				   globals.Srv_Login_Sanatorio_vDigVerif=true
			       globals.Srv_Login_Sanatorio_calculaDigitoVerificador()
			       if(!globals.Srv_Login_Sanatorio_vDigVerif){
			    	   globals.Srv_Login_Sanatorio_vOperador="Digito verificador erroneo";
			    	   forms.Srv_Login_Sanatorio_dlg_pideLegajoMedico.elements.legajo.requestFocus()
			       }else{
				      globals.Srv_Login_Sanatorio_vOperador=srv_login_sanatorio_vlegajo_to_tbc_personal_login.per_apelnom;
				      forms.Srv_Login_Sanatorio_dlg_pideLegajoMedico.elements.clave.requestFocus()
					  
			       }
		    	}else{
		    		if(srv_login_sanatorio_vlegajo_to_tbc_perext.getSize()>0){
		    			globals.Srv_Login_Sanatorio_vOperador=srv_login_sanatorio_vlegajo_to_tbc_perext.perext_nom;
		    			forms.Srv_Login_Sanatorio_dlg_pideLegajoMedico.elements.clave.requestFocus()
						
		    		}else{
		    			globals.Srv_Login_Sanatorio_vOperador="Operador No Valido";
		    			forms.Srv_Login_Sanatorio_dlg_pideLegajoMedico.elements.legajo.requestFocus()
		    		}
		    	}
		}
		}else{
			return
		}
	}else{
		forms.Srv_Login_Sanatorio_dlg_pideLegajoMedico.elements.legajo.requestFocus()
	}
	
}

/**
 * Handle hide window.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"E7DFC5CF-ECD0-4041-82AE-2C5AE22CD944"}
 */
function onHide_pidelegajo(event) {
	/*
	globals.Srv_Login_Sanatorio_esAnestesista=f_Anestesista;
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
 * @properties={typeid:24,uuid:"283A52CC-0ABE-4B81-B492-565B7C6AD4F2"}
 */
function onElementFocusLost_pidelegajo(event) {
	globals.Srv_Login_Sanatorio_esAnestesista=f_Anestesista;
	return true
}

/**
 * Callback method when form is destroyed.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"E797D72C-EB27-41C1-A716-5ADDD14F4627"}
 */
function onUnload(event) {
	globals.Srv_Login_Sanatorio_esAnestesista=f_Anestesista;
}

/**
 * Handle a drop.
 * Return true if drop has been performed successfully, otherwise false.
 *
 * @param {JSDNDEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"5D5218A9-A7C2-4FFD-ACCE-C885734C887D"}
 */
function onDrop(event) {
	globals.Srv_Login_Sanatorio_esAnestesista=f_Anestesista;
	return false
}
