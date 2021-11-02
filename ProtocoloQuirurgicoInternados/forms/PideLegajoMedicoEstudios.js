/**
 * // TODO generated, please specify type and doc for the params
 * @param {Object} oldValue
 * @param {Object} newValue
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"6E554120-677D-4667-BB9A-21F01CA4F816"}
 */
function onDataChange_legajo(oldValue, newValue, event) {
	if(globals.vLegajo!=0&&globals.vLegajo!=null&&globals.vLegajo!=''){
		globals.vLega=globals.vLegajo
		globals.vlargo= globals.vLega.toString().length - 1;
		if(globals.vlargo!=0){
			globals.vLega=globals.vLega.toString().substr(0,globals.vlargo)
			globals.digito_verificador = utils.stringToNumber(globals.vLegajo.toString().substr(globals.vlargo, 1))
			if (globals.digito_verificador == 0){
				if (vlegajo_to_tbc_medicos_copy.getSize()>0){
					globals.vOperador=vlegajo_to_tbc_medicos_copy.med_apenom;
					forms.PideLegajoMedicoEstudios.elements.clave.requestFocus()
					return true
				}else{
					if(vlegajo_to_tbc_personal_login_cirugia_copy.getSize()>0){
						globals.vDigVerif=true
						globals.calculaDigitoVerificador()
	    		
						if(!globals.vDigVerif){
							globals.vOperador="Digito verificador erroneo";
							return false
						}else{
							if(globals.vSolomedicos){
								if(vlegajo_to_tbc_personal_login_cirugia_copy.per_fecbaja!=0||vlegajo_to_tbc_personal_login_cirugia_copy.per_tipliquid!=2){
									globals.vOperador="El legajo no pertenece a un profesional";
									return false
								}else{
									globals.vOperador=vlegajo_to_tbc_personal_login_copy.per_apelnom;
									forms.PideLegajoMedicoEstudios.elements.clave.requestFocus()
									return true
								}
							}else{
								globals.vOperador=vlegajo_to_tbc_personal_login_copy.per_apelnom;
								forms.PideLegajoMedicoEstudios.elements.clave.requestFocus()
								return true
							}
						}
					}else{
						
						globals.vOperador="Operador No Valido";
						return false
						
					}
				}
			}else{
				if(vlegajo_to_tbc_personal_login_cirugia_copy.getSize()>0){
					globals.vDigVerif=true
					globals.calculaDigitoVerificador()
					if(!globals.vDigVerif){
						globals.vOperador="Digito verificador erroneo";
						return false
					}else{
						if(globals.vSolomedicos)
							if(vlegajo_to_tbc_personal_login_cirugia_copy.per_fecbaja!=0||vlegajo_to_tbc_personal_login_cirugia_copy.per_tipliquid!=2){
								globals.vOperador="El legajo no pertenece a un profesional";
								return false
							}else{
								globals.vOperador=vlegajo_to_tbc_personal_login_copy.per_apelnom;
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
						
								forms.PideLegajoMedicoEstudios.elements.clave.requestFocus()
								return true
						}else{
							globals.vOperador=vlegajo_to_tbc_personal_login_copy.per_apelnom;
							forms.PideLegajoMedicoEstudios.elements.clave.requestFocus()
							return true
						}	
					}
				}else{
					
					globals.vOperador="Operador No Valido";
					return false
					
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
 * // TODO generated, please specify type and doc for the params
 * @param {Object} oldValue
 * @param {Object} newValue
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"55C8EE4B-5D36-496B-84ED-9FB2444DC37B"}
 */
function onDataChange_clave(oldValue, newValue, event) {
	globals.vPassOperador=''
	forms.PideLegajoMedicoEstudios.elements.confirma.requestFocus()
	return true
}

/**
 * // TODO generated, please specify type and doc for the params
 * @param {Object} firstShow
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"5803DFC0-A38A-4A6B-9B59-882E22944759"}
 */
function onShow_login(firstShow, event) {
	forms.PideLegajoMedicoEstudios.elements.legajo.requestFocus()
}

/**
 * // TODO generated, please specify type and doc for the params
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"E49CC61A-A915-4785-A6AB-BB804F64A562"}
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
		if (vlegajo_to_tbc_medicos_copy.getSize()>0){
			globals.vOperador=vlegajo_to_tbc_medicos_copy.med_apenom;
			if(globals.vClave!=vlegajo_to_tbc_medicos_copy.med_clave){
				globals.vPassOperador="Clave Incorrecta";
			}else{
			   globals.vTipoOperador=1
			   globals.vTipoTecnico=1
			   user=true
			}
		}else{
	    	if(vlegajo_to_tbc_personal_login_cirugia_copy.getSize()>0){
	    		globals.vDigVerif=true
		       globals.calculaDigitoVerificador()
		       if(!globals.vDigVerif){
		    	   globals.vOperador="Digito verificador erroneo";
		       }else{
		    	   if(globals.vClave!=vlegajo_to_tbc_clave_legajo_copy.hor_perclave){
						globals.vPassOperador="Clave Incorrecta";
					}else{
						if(globals.vSolomedicos){
							if(vlegajo_to_tbc_personal_login_cirugia_copy.per_fecbaja!=0||vlegajo_to_tbc_personal_login_cirugia_copy.per_tipliquid!=2){
								globals.vOperador="El legajo no pertenece a un profesional";
							
							}else{
								globals.vTipoTecnico=1
								globals.vTipoOperador=0
								user=true
							}
						}else{
							if(vlegajo_to_tbc_personal_login_cirugia_copy.per_tipliquid!=2){
								globals.vTipoTecnico=0
							}else{
								globals.vTipoTecnico=1
							}
							globals.vTipoOperador=0
							user=true
						}
					}
			   }
	    	}else{
	    		if(vlegajo_to_tbc_perext_copy.getSize()>0){
	    			globals.vOperador=vlegajo_to_tbc_perext_copy.perext_nom;
	    			if(globals.vClave!=vlegajo_to_tbc_perext_copy.perext_clave){
						globals.vPassOperador="Clave Incorrecta";
					}else{
						globals.vTipoOperador=2
					   user=true
					}
	    		}else{
	    			globals.vOperador="Operador No Valido";
	    		}
	    	}
		}
	}else{
		if(vlegajo_to_tbc_personal_login_cirugia_copy.getSize()>0){
				globals.vDigVerif=true
		       globals.calculaDigitoVerificador()
		       if(!globals.vDigVerif){
		    	   globals.vOperador="Digito verificador erroneo";
		       }else{
			      globals.vOperador=vlegajo_to_tbc_personal_login_cirugia_copy.per_apelnom;
			      if(globals.vClave!=vlegajo_to_tbc_clave_legajo_copy.hor_perclave){
						globals.vPassOperador="Clave Incorrecta";
				  }else{
				  		if(globals.vSolomedicos){
					  		if(vlegajo_to_tbc_personal_login_cirugia_copy.per_fecbaja!=0||vlegajo_to_tbc_personal_login_cirugia_copy.per_tipliquid!=2){
					  			globals.vOperador="El legajo no pertenece a un profesional";
							
					  		}else{
					  			globals.vTipoTecnico=1
					  			globals.vTipoOperador=0
					  			user=true
					  		}
				  		}else{
				  			if(vlegajo_to_tbc_personal_login_cirugia_copy.per_tipliquid!=2){
								globals.vTipoTecnico=0
							}else{
								globals.vTipoTecnico=1
							}
				  			globals.vTipoOperador=0
				  			user=true
				  		}
				  }
		       }
	    }else{
	    		
	    			globals.vOperador="Operador No Valido";
	    		
	    }
	}
	}	
	
    if(user){
	      //forms.tab_scr_tbc_admision.controller.show()
	      //application.closeAllWindows()
		  var name=application.getActiveWindow()
			name.getName()
			var $win=application.getWindow(name.getName())
			if($win!=null){
				$win.hide()
				$win.destroy()
			}
	}
}

/**
 * // TODO generated, please specify type and doc for the params
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"07885358-18A9-45D5-B0A2-6928E9143EEE"}
 */
function onAction_cancela(event) {
	//globals.vClose=true
	//application.closeAllWindows()
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
 * @properties={typeid:24,uuid:"A847B6BE-86B9-490C-A754-D60ADCCE0CF7"}
 */
function onAction_legajo(event) {
	//application.output("por aca pasa")
}

/**
 * // TODO generated, please specify type and doc for the params
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"0A7AE735-557D-49C2-811F-9D65472B4BDC"}
 */
function onFocusLost_legajo(event) {
	if(globals.vLegajo!=0&&globals.vLegajo!=null&&globals.vLegajo!=''){
		globals.vLega=globals.vLegajo
		globals.vlargo= globals.vLega.toString().length - 1;
		if(globals.vlargo!=0){
	    globals.vLega=globals.vLega.toString().substr(0,globals.vlargo)
		globals.digito_verificador = utils.stringToNumber(globals.vLegajo.toString().substr(globals.vlargo, 1))
		if (globals.digito_verificador == 0){
			if (vlegajo_to_tbc_medicos_copy.getSize()>0){
				globals.vOperador=vlegajo_to_tbc_medicos_copy.med_apenom;
				forms.PideLegajoMedicoEstudios.elements.clave.requestFocus()
				
			}else{
		    	if(vlegajo_to_tbc_personal_login_copy.getSize()>0){
		    		globals.vDigVerif=true
		    	   globals.calculaDigitoVerificador()
		    		
			       if(!globals.vDigVerif){
			    	   globals.vOperador="Digito verificador erroneo";
			    	   forms.PideLegajoMedicoEstudios.elements.legajo.requestFocus()
			       }else{
				      globals.vOperador=vlegajo_to_tbc_personal_login_copy.per_apelnom;
				      forms.PideLegajoMedicoEstudios.elements.clave.requestFocus()
					  
			       }
		    	}else{
		    		if(vlegajo_to_tbc_perext_copy.getSize()>0){
		    			globals.vOperador=vlegajo_to_tbc_perext_copy.perext_nom;
		    			forms.PideLegajoMedicoEstudios.elements.clave.requestFocus()
						
		    		}else{
		    			globals.vOperador="Operador No Valido";
		    			forms.PideLegajoMedicoEstudios.elements.legajo.requestFocus()
		    		}
		    	}
			}
		}else{
			
			if(vlegajo_to_tbc_personal_login_copy.getSize()>0){
				   globals.vDigVerif=true
			       globals.calculaDigitoVerificador()
			       if(!globals.vDigVerif){
			    	   globals.vOperador="Digito verificador erroneo";
			    	   forms.PideLegajoMedicoEstudios.elements.legajo.requestFocus()
			       }else{
				      globals.vOperador=vlegajo_to_tbc_personal_login_copy.per_apelnom;
				      forms.PideLegajoMedicoEstudios.elements.clave.requestFocus()
					  
			       }
		    	}else{
		    		if(vlegajo_to_tbc_perext_copy.getSize()>0){
		    			globals.vOperador=vlegajo_to_tbc_perext_copy.perext_nom;
		    			forms.PideLegajoMedicoEstudios.elements.clave.requestFocus()
						
		    		}else{
		    			globals.vOperador="Operador No Valido";
		    			forms.PideLegajoMedicoEstudios.elements.legajo.requestFocus()
		    		}
		    	}
		}
		}else{
			forms.PideLegajoMedicoEstudios.elements.legajo.requestFocus()
		}
	}else{
			forms.PideLegajoMedicoEstudios.elements.legajo.requestFocus()
	}
	
}
