/**
 * @properties={typeid:35,uuid:"959FF9E9-7A90-4A06-9FC3-A5EFFE5DB992",variableType:-4}
 */
var f_cerrarForm = false;

/**
 * @properties={typeid:35,uuid:"E6180D6E-5A95-44E5-A801-66BCE5D5C392",variableType:-4}
 */
var f_Anestesista = false;

/**
 * // TODO generated, please specify type and doc for the params
 * @param {Object} oldValue
 * @param {Object} newValue
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"440A5B4F-72C7-4329-A00D-E441F78AE119"}
 */
function onDataChange_legajo(oldValue, newValue, event) {
	if(globals.Hcipiso_vLegajo!=0&&globals.Hcipiso_vLegajo!=null&&globals.Hcipiso_vLegajo!=''){
		globals.Hcipiso_vLega=globals.Hcipiso_vLegajo
		globals.Hcipiso_vlargo= globals.Hcipiso_vLega.toString().length - 1;
		if(globals.Hcipiso_vlargo!=0){
			globals.Hcipiso_vLega=globals.Hcipiso_vLega.toString().substr(0,globals.Hcipiso_vlargo)
			globals.Hcipiso_digito_verificador = utils.stringToNumber(globals.Hcipiso_vLegajo.toString().substr(globals.Hcipiso_vlargo, 1))
			if (globals.Hcipiso_digito_verificador == 0){
				if (hcipiso_vlegajo_to_tbc_medicos.getSize()>0){
					/*if(hcipiso_vlegajo_to_tbc_medicos.med_espemed!=24){
						globals.Hcipiso_vOperador="El legajo no pertenece a un Anestesiólogo";
						forms.Hcipiso_dlg_pideLegajoMedico.elements.legajo.requestFocus()
						return true
						//return false
					}else{*/
						globals.Hcipiso_vOperador=hcipiso_vlegajo_to_tbc_medicos.med_apenom;
						forms.Hcipiso_dlg_pideLegajoMedico.elements.clave.requestFocus()
						return true
					//}
				}else{
					if(hcipiso_vlegajo_to_tbc_personal_login_cirugia.getSize()>0){
						globals.Hcipiso_vDigVerif=true
						globals.hcipiso_calculaDigitoVerificador()
	    		
						if(!globals.Hcipiso_vDigVerif){
							globals.Hcipiso_vOperador="Digito verificador erroneo";
							forms.Hcipiso_dlg_pideLegajoMedico.elements.legajo.requestFocus()
							return true
							//return false
						}else{
							if(globals.Hcipiso_vSolomedicos){
								if(hcipiso_vlegajo_to_tbc_personal_login_cirugia.per_fecbaja!=0||hcipiso_vlegajo_to_tbc_personal_login_cirugia.per_tipliquid!=2){
									globals.Hcipiso_vOperador="El legajo no pertenece a un profesional";
									forms.Hcipiso_dlg_pideLegajoMedico.elements.legajo.requestFocus()
									return true
									//return false
								}else{
									globals.Hcipiso_vOperador=hcipiso_vlegajo_to_tbc_personal_login.per_apelnom;
									forms.Hcipiso_dlg_pideLegajoMedico.elements.clave.requestFocus()
									return true
								}
							}else{
								globals.Hcipiso_vOperador=hcipiso_vlegajo_to_tbc_personal_login.per_apelnom;
								forms.Hcipiso_dlg_pideLegajoMedico.elements.clave.requestFocus()
								return true
							}
						}
					}else{
						
						globals.Hcipiso_vOperador="Operador No Valido";
						forms.Hcipiso_dlg_pideLegajoMedico.elements.legajo.requestFocus()
						return true
						//return false
						
					}
				}
			}else{
				if(hcipiso_vlegajo_to_tbc_personal_login_cirugia.getSize()>0){
					globals.Hcipiso_vDigVerif=true
					globals.hcipiso_calculaDigitoVerificador()
					if(!globals.Hcipiso_vDigVerif){
						globals.Hcipiso_vOperador="Digito verificador erroneo";
						forms.Hcipiso_dlg_pideLegajoMedico.elements.legajo.requestFocus()
						return true
						//return false
					}else{
						if(globals.Hcipiso_vSolomedicos){
							if(hcipiso_vlegajo_to_tbc_personal_login_cirugia.per_fecbaja!=0||hcipiso_vlegajo_to_tbc_personal_login_cirugia.per_tipliquid!=2){
								globals.Hcipiso_vOperador="El legajo no pertenece a un profesional";
								forms.Hcipiso_dlg_pideLegajoMedico.elements.legajo.requestFocus()
								return true
								//return false
							}else{
								globals.Hcipiso_vOperador=hcipiso_vlegajo_to_tbc_personal_login.per_apelnom;
						/**
						if(vs_to_permisos_grales.getSize()<1){
							plugins.dialogs.showInfoDialog("",globals.Hcipiso_vTipoOperador)
							plugins.dialogs.showInfoDialog("",globals.Hcipiso_vLegajo)
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
									forms.Hcipiso_dlg_pideLegajoMedico.elements.clave.requestFocus()
									return true
								}
							}
							*/
						//}else{
								globals.Hcipiso_esAnestesista=true
								forms.Hcipiso_dlg_pideLegajoMedico.elements.clave.requestFocus()
								return true
							}
						}else{
							globals.Hcipiso_vOperador=hcipiso_vlegajo_to_tbc_personal_login.per_apelnom;
							globals.Hcipiso_esAnestesista=true
							forms.Hcipiso_dlg_pideLegajoMedico.elements.clave.requestFocus()
							return true
						}	
					}
				}else{
					
					globals.Hcipiso_vOperador="Operador No Valido";
					forms.Hcipiso_dlg_pideLegajoMedico.elements.legajo.requestFocus()
					return true
					//return false
					
				}
			}
		}else{
			forms.Hcipiso_dlg_pideLegajoMedico.elements.legajo.requestFocus()
			return true
			//return false
		}
	}else{
		forms.Hcipiso_dlg_pideLegajoMedico.elements.legajo.requestFocus()
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
 * @properties={typeid:24,uuid:"39D23C80-BA76-4FFB-986B-62CE2F115AB4"}
 */
function onDataChange_clave(oldValue, newValue, event) {
	globals.Hcipiso_vPassOperador=''
	forms.Hcipiso_dlg_pideLegajoMedico.elements.confirma.requestFocus()
	return true
}

/**
 * // TODO generated, please specify type and doc for the params
 * @param {Object} firstShow
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"2BB8936B-4900-41E9-AEFD-5C63C3F504DE"}
 */
function onShow_login(firstShow, event) {
	f_Anestesista=false;
	f_cerrarForm = false;
	forms.Hcipiso_dlg_pideLegajoMedico.elements.legajo.requestFocus()
}

/**
 * // TODO generated, please specify type and doc for the params
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"C6055A61-E21A-4575-BE3A-F163DE8A3394"}
 */
function onAction_confirma(event) {
	var user = false;
	if(globals.Hcipiso_vLegajo!=0&&globals.Hcipiso_vLegajo!=null){
		
		globals.Hcipiso_vPassOperador=''
		globals.Hcipiso_vLega=globals.Hcipiso_vLegajo
		globals.Hcipiso_vlargo= globals.Hcipiso_vLega.toString().length - 1;
		globals.Hcipiso_vLega=globals.Hcipiso_vLega.toString().substr(0,globals.Hcipiso_vlargo)
		globals.Hcipiso_digito_verificador = utils.stringToNumber(globals.Hcipiso_vLegajo.toString().substr(globals.Hcipiso_vlargo, 1))
		
	if (globals.Hcipiso_digito_verificador == 0){
		if (hcipiso_vlegajo_to_tbc_medicos.getSize()>0){
			globals.Hcipiso_vOperador=hcipiso_vlegajo_to_tbc_medicos.med_apenom;
			if(hcipiso_vlegajo_to_tbc_medicos.med_clave!=0){
				if(globals.Hcipiso_vClave!=hcipiso_vlegajo_to_tbc_medicos.med_clave){
					globals.Hcipiso_vPassOperador="Clave Incorrecta";
					user=false
				}else{
					/*
					if(hcipiso_vlegajo_to_tbc_medicos.med_espemed==24){
						globals.Hcipiso_vTipoOperador=1
						globals.Hcipiso_vTipoTecnico=1
						user=true
					}else{
						globals.Hcipiso_vOperador="El Profesional no es Anestesiólogo"
						user=false
					}
					*/
					globals.Hcipiso_vTipoOperador=1
					user=true
				}
			}else{
				if(globals.Hcipiso_vClave!=hcipiso_vlegajo1_to_tbc_clave_legajo.hor_perclave){
		    		globals.Hcipiso_vPassOperador="Clave Incorrecta";
		    		user=false
				}else{
					/*
					if(hcipiso_vlegajo_to_tbc_medicos.med_espemed==24){
						globals.Hcipiso_vTipoOperador=1
						globals.Hcipiso_vTipoTecnico=1
						user=true
					}else{
						globals.Hcipiso_vOperador="El Profesional no es Anestesiólogo"
						user=false
					}
					*/
					globals.Hcipiso_vTipoOperador=1
					user=true
				}
			}
		}else{
	    	if(hcipiso_vlegajo_to_tbc_personal_login_cirugia.getSize()>0){
	    		globals.Hcipiso_vDigVerif=true
		       globals.hcipiso_calculaDigitoVerificador()
		       if(!globals.Hcipiso_vDigVerif){
		    	   globals.Hcipiso_vOperador="Digito verificador erroneo";
		    	   user=false
		       }else{
		    	   if(globals.Hcipiso_vClave!=hcipiso_vlegajo_to_tbc_clave_legajo.hor_perclave){
						globals.Hcipiso_vPassOperador="Clave Incorrecta";
						user=false
					}else{
						if(globals.Hcipiso_vSolomedicos){
							if(hcipiso_vlegajo_to_tbc_personal_login_cirugia.per_fecbaja!=0||hcipiso_vlegajo_to_tbc_personal_login_cirugia.per_tipliquid!=2){
								globals.Hcipiso_vOperador="El legajo no pertenece a un profesional";
								user=false
							}else{
								globals.Hcipiso_vTipoTecnico=1
								globals.Hcipiso_vTipoOperador=0
								user=true
							}
						}else{
							if(hcipiso_vlegajo_menu_cirugia_to_tbc_personal.per_espemed!=24){
								user=false
							}else{
								if(hcipiso_vlegajo_to_tbc_personal_login_cirugia.per_tipliquid!=2){
									globals.Hcipiso_vTipoTecnico=0
								}else{
									globals.Hcipiso_vTipoTecnico=1
								}
								globals.Hcipiso_vTipoOperador=0
								user=true
							}
						}
					}
			   }
	    	}else{
	    		if(hcipiso_vlegajo_to_tbc_perext.getSize()>0){
	    			globals.Hcipiso_vOperador=hcipiso_vlegajo_to_tbc_perext.perext_nom;
	    			if(globals.Hcipiso_vClave!=hcipiso_vlegajo_to_tbc_perext.perext_clave){
						globals.Hcipiso_vPassOperador="Clave Incorrecta";
						user=false
					}else{
						globals.Hcipiso_vTipoOperador=2
					   user=true
					}
	    		}else{
	    			globals.Hcipiso_vOperador="Operador No Valido";
	    			user=false
	    		}
	    	}
		}
	}else{
		if(hcipiso_vlegajo_to_tbc_personal_login_cirugia.getSize()>0){
				globals.Hcipiso_vDigVerif=true
		       globals.hcipiso_calculaDigitoVerificador()
		       if(!globals.Hcipiso_vDigVerif){
		    	   globals.Hcipiso_vOperador="Digito verificador erroneo";
		    	   user=false
		       }else{
			      globals.Hcipiso_vOperador=hcipiso_vlegajo_to_tbc_personal_login_cirugia.per_apelnom;
			      if(globals.Hcipiso_vClave!=hcipiso_vlegajo_to_tbc_clave_legajo.hor_perclave){
						globals.Hcipiso_vPassOperador="Clave Incorrecta";
						user=false
				  }else{
				  		if(globals.Hcipiso_vSolomedicos){
					  		if(hcipiso_vlegajo_to_tbc_personal_login_cirugia.per_fecbaja!=0||hcipiso_vlegajo_to_tbc_personal_login_cirugia.per_tipliquid!=2){
					  			globals.Hcipiso_vOperador="El legajo no pertenece a un profesional";
					  			user=false
					  		}else{
					  			globals.Hcipiso_vTipoTecnico=1
					  			globals.Hcipiso_vTipoOperador=0
					  			user=true
					  		}
				  		}else{
				  			if(hcipiso_vlegajo_menu_cirugia_to_tbc_personal.per_espemed!=24){
				  				user=false
				  			}else{
				  				if(hcipiso_vlegajo_to_tbc_personal_login_cirugia.per_tipliquid!=2){
				  					globals.Hcipiso_vTipoTecnico=0
				  				}else{
				  					globals.Hcipiso_vTipoTecnico=1
				  				}
				  				globals.Hcipiso_vTipoOperador=0
				  				user=true
				  			}
				  		}
				  }
		       }
	    }else{
	    		
	    			globals.Hcipiso_vOperador="Operador No Valido";
	    			user=false
	    		
	    }
	}
	}	
	
    if(user){
	      //forms.tab_scr_tbc_admision.controller.show()
	    f_Anestesista=user;
	    globals.Hcipiso_esAnestesista=user;
	    globals.Hcipiso_vSolomedicos=user;
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
 * @properties={typeid:24,uuid:"90E81A64-0D95-44F6-B4DE-1E56763DCAA8"}
 */
function onAction_cancela(event) {
	//globals.vClose=true
    //application.showForm("frm_menu_principal")
    globals.Hcipiso_vSolomedicos=false
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
 * @properties={typeid:24,uuid:"142DAA76-6E33-4E69-A884-2FD12B9E2AC9"}
 */
function onAction_legajo(event) {
	//application.output("por aca pasa")
}

/**
 * // TODO generated, please specify type and doc for the params
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"E1704D21-8B6C-4112-91CD-43448893D854"}
 */
function onFocusLost_legajo(event) {
	if(globals.Hcipiso_vLegajo!=0&&globals.Hcipiso_vLegajo!=null&&globals.Hcipiso_vLegajo!=''){
		globals.Hcipiso_vLega=globals.Hcipiso_vLegajo
		globals.Hcipiso_vlargo= globals.Hcipiso_vLega.toString().length - 1;
		if(globals.Hcipiso_vlargo!=0){
	    globals.Hcipiso_vLega=globals.Hcipiso_vLega.toString().substr(0,globals.Hcipiso_vlargo)
		globals.Hcipiso_digito_verificador = utils.stringToNumber(globals.Hcipiso_vLegajo.toString().substr(globals.Hcipiso_vlargo, 1))
		if (globals.Hcipiso_digito_verificador == 0){
			if (hcipiso_vlegajo_to_tbc_medicos.getSize()>0){
				globals.Hcipiso_vOperador=hcipiso_vlegajo_to_tbc_medicos.med_apenom;
				forms.Hcipiso_dlg_pideLegajoMedico.elements.clave.requestFocus()
				
			}else{
		    	if(hcipiso_vlegajo_to_tbc_personal_login.getSize()>0){
		    		globals.Hcipiso_vDigVerif=true
		    		globals.hcipiso_calculaDigitoVerificador()
		    		
			       if(!globals.Hcipiso_vDigVerif){
			    	   globals.Hcipiso_vOperador="Digito verificador erroneo";
			    	   forms.Hcipiso_dlg_pideLegajoMedico.elements.legajo.requestFocus()
			       }else{
				      globals.Hcipiso_vOperador=hcipiso_vlegajo_to_tbc_personal_login.per_apelnom;
				      forms.Hcipiso_dlg_pideLegajoMedico.elements.clave.requestFocus()
					  
			       }
		    	}else{
		    		if(hcipiso_vlegajo_to_tbc_perext.getSize()>0){
		    			globals.Hcipiso_vOperador=hcipiso_vlegajo_to_tbc_perext.perext_nom;
		    			forms.Hcipiso_dlg_pideLegajoMedico.elements.clave.requestFocus()
						
		    		}else{
		    			globals.Hcipiso_vOperador="Operador No Valido";
		    			forms.Hcipiso_dlg_pideLegajoMedico.elements.legajo.requestFocus()
		    		}
		    	}
			}
		}else{
			
			if(hcipiso_vlegajo_to_tbc_personal_login.getSize()>0){
				   globals.Hcipiso_vDigVerif=true
			       globals.hcipiso_calculaDigitoVerificador()
			       if(!globals.Hcipiso_vDigVerif){
			    	   globals.Hcipiso_vOperador="Digito verificador erroneo";
			    	   forms.Hcipiso_dlg_pideLegajoMedico.elements.legajo.requestFocus()
			       }else{
				      globals.Hcipiso_vOperador=hcipiso_vlegajo_to_tbc_personal_login.per_apelnom;
				      forms.Hcipiso_dlg_pideLegajoMedico.elements.clave.requestFocus()
					  
			       }
		    	}else{
		    		if(hcipiso_vlegajo_to_tbc_perext.getSize()>0){
		    			globals.Hcipiso_vOperador=hcipiso_vlegajo_to_tbc_perext.perext_nom;
		    			forms.Hcipiso_dlg_pideLegajoMedico.elements.clave.requestFocus()
						
		    		}else{
		    			globals.Hcipiso_vOperador="Operador No Valido";
		    			forms.Hcipiso_dlg_pideLegajoMedico.elements.legajo.requestFocus()
		    		}
		    	}
		}
		}else{
			return
		}
	}else{
		forms.Hcipiso_dlg_pideLegajoMedico.elements.legajo.requestFocus()
	}
	
}

/**
 * Handle hide window.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"921F114D-899E-4D6C-9B23-D4BA3B309758"}
 */
function onHide_pidelegajo(event) {
	/*
	globals.Hcipiso_esAnestesista=f_Anestesista;
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
 * @properties={typeid:24,uuid:"BE896C34-EB94-4F23-96F8-C27D60177CA5"}
 */
function onElementFocusLost_pidelegajo(event) {
	globals.Hcipiso_esAnestesista=f_Anestesista;
	return true
}

/**
 * Callback method when form is destroyed.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"539B0F8A-4481-4D9E-9662-3BA4EC4480FE"}
 */
function onUnload(event) {
	globals.Hcipiso_esAnestesista=f_Anestesista;
}

/**
 * Handle a drop.
 * Return true if drop has been performed successfully, otherwise false.
 *
 * @param {JSDNDEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"5E4F8591-5688-4AA0-B8F4-5F9E89244CD4"}
 */
function onDrop(event) {
	globals.Hcipiso_esAnestesista=f_Anestesista;
	return false
}
