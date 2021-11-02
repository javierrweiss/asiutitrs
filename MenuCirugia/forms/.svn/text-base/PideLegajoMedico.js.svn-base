/**
 * @properties={typeid:35,uuid:"F0F68806-403C-4718-BCE2-E1383B56FFA8",variableType:-4}
 */
var f_Anestesista = false;

/**
 * // TODO generated, please specify type and doc for the params
 * @param {Object} oldValue
 * @param {Object} newValue
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"5EF1C506-FE46-47AB-B24A-5B40F0333E12"}
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
					if(vlegajo_to_tbc_medicos.med_espemed!=24){
						globals.vOperador="El legajo no pertenece a un Anestesiólogo";
						forms.PideLegajoMedico.elements.legajo.requestFocus()
						return true
						//return false
					}else{
						globals.vOperador=vlegajo_to_tbc_medicos.med_apenom;
						forms.PideLegajoMedico.elements.clave.requestFocus()
						return true
					}
				}else{
					if(vlegajo_to_tbc_personal_login_cirugia.getSize()>0){
						globals.vDigVerif=true
						globals.calculaDigitoVerificador()
	    		
						if(!globals.vDigVerif){
							globals.vOperador="Digito verificador erroneo";
							forms.PideLegajoMedico.elements.legajo.requestFocus()
							return true
							//return false
						}else{
							if(globals.vSolomedicos){
								if(vlegajo_to_tbc_personal_login_cirugia.per_fecbaja!=0||vlegajo_to_tbc_personal_login_cirugia.per_tipliquid!=2||vlegajo_menu_cirugia_to_tbc_personal.per_espemed!=24){
									globals.vOperador="El legajo no pertenece a un Anestesiólogo";
									forms.PideLegajoMedico.elements.legajo.requestFocus()
									return true
									//return false
								}else{
									globals.vOperador=vlegajo_to_tbc_personal_login.per_apelnom;
									forms.PideLegajoMedico.elements.clave.requestFocus()
									return true
								}
							}else{
								globals.vOperador=vlegajo_to_tbc_personal_login.per_apelnom;
								forms.PideLegajoMedico.elements.clave.requestFocus()
								return true
							}
						}
					}else{
						
						globals.vOperador="Operador No Valido";
						forms.PideLegajoMedico.elements.legajo.requestFocus()
						return true
						//return false
						
					}
				}
			}else{
				if(vlegajo_to_tbc_personal_login_cirugia.getSize()>0){
					globals.vDigVerif=true
					globals.calculaDigitoVerificador()
					if(!globals.vDigVerif){
						globals.vOperador="Digito verificador erroneo";
						forms.PideLegajoMedico.elements.legajo.requestFocus()
						return true
						//return false
					}else{
						if(globals.vSolomedicos){
							if(vlegajo_to_tbc_personal_login_cirugia.per_fecbaja!=0||vlegajo_to_tbc_personal_login_cirugia.per_tipliquid!=2||vlegajo_menu_cirugia_to_tbc_personal.per_espemed!=24){
								globals.vOperador="El legajo no pertenece a un Anestesiólogo";
								forms.PideLegajoMedico.elements.legajo.requestFocus()
								return true
								//return false
							}else{
								globals.vOperador=vlegajo_to_tbc_personal_login.per_apelnom;
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
								globals.EsAnestesista=true
								forms.PideLegajoMedico.elements.clave.requestFocus()
								return true
							}
						}else{
							globals.vOperador=vlegajo_to_tbc_personal_login.per_apelnom;
							globals.EsAnestesista=true
							forms.PideLegajoMedico.elements.clave.requestFocus()
							return true
						}	
					}
				}else{
					
					globals.vOperador="Operador No Valido";
					forms.PideLegajoMedico.elements.legajo.requestFocus()
					return true
					//return false
					
				}
			}
		}else{
			forms.PideLegajoMedico.elements.legajo.requestFocus()
			return true
			//return false
		}
	}else{
		forms.PideLegajoMedico.elements.legajo.requestFocus()
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
 * @properties={typeid:24,uuid:"C237419B-4961-4EB2-A098-1CD8C28686AB"}
 */
function onDataChange_clave(oldValue, newValue, event) {
	globals.vPassOperador=''
	forms.PideLegajoMedico.elements.confirma.requestFocus()
	return true
}

/**
 * // TODO generated, please specify type and doc for the params
 * @param {Object} firstShow
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"4A7EFEC3-EFB0-40B3-AE1B-F9389A1492C6"}
 */
function onShow_login(firstShow, event) {
	f_Anestesista=false;
	forms.PideLegajoMedico.elements.legajo.requestFocus()
}

/**
 * // TODO generated, please specify type and doc for the params
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"093AD8DE-611A-4D46-B726-54DF7519A41B"}
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
			if(vlegajo_to_tbc_medicos.med_clave!=0){
				if(globals.vClave!=vlegajo_to_tbc_medicos.med_clave){
					globals.vPassOperador="Clave Incorrecta";
					user=false
				}else{
					if(vlegajo_to_tbc_medicos.med_espemed==24){
						globals.vTipoOperador=1
						globals.vTipoTecnico=1
						user=true
					}else{
						globals.vOperador="El Profesional no es Anestesiólogo"
						user=false
					}
				}
			}else{
				if(globals.vClave!=vlegajo1_to_tbc_clave_legajo.hor_perclave){
		    		globals.vPassOperador="Clave Incorrecta";
		    		user=false
				}else{
					if(vlegajo_to_tbc_medicos.med_espemed==24){
						globals.vTipoOperador=1
						globals.vTipoTecnico=1
						user=true
					}else{
						globals.vOperador="El Profesional no es Anestesiólogo"
						user=false
					}
				}
			}
		}else{
	    	if(vlegajo_to_tbc_personal_login_cirugia.getSize()>0){
	    		globals.vDigVerif=true
		       globals.calculaDigitoVerificador()
		       if(!globals.vDigVerif){
		    	   globals.vOperador="Digito verificador erroneo";
		    	   user=false
		       }else{
		    	   if(globals.vClave!=vlegajo_to_tbc_clave_legajo.hor_perclave){
						globals.vPassOperador="Clave Incorrecta";
						user=false
					}else{
						if(globals.vSolomedicos){
							if(vlegajo_to_tbc_personal_login_cirugia.per_fecbaja!=0||vlegajo_to_tbc_personal_login_cirugia.per_tipliquid!=2||vlegajo_menu_cirugia_to_tbc_personal.per_espemed!=24){
								globals.vOperador="El legajo no pertenece a un Anestesiólogo";
								user=false
							}else{
								globals.vTipoTecnico=1
								globals.vTipoOperador=0
								user=true
							}
						}else{
							if(vlegajo_menu_cirugia_to_tbc_personal.per_espemed!=24){
								user=false
							}else{
								if(vlegajo_to_tbc_personal_login_cirugia.per_tipliquid!=2){
									globals.vTipoTecnico=0
								}else{
									globals.vTipoTecnico=1
								}
								globals.vTipoOperador=0
								user=true
							}
						}
					}
			   }
	    	}else{
	    		if(vlegajo_to_tbc_perext.getSize()>0){
	    			globals.vOperador=vlegajo_to_tbc_perext.perext_nom;
	    			if(globals.vClave!=vlegajo_to_tbc_perext.perext_clave){
						globals.vPassOperador="Clave Incorrecta";
						user=false
					}else{
						globals.vTipoOperador=2
					   user=true
					}
	    		}else{
	    			globals.vOperador="Operador No Valido";
	    			user=false
	    		}
	    	}
		}
	}else{
		if(vlegajo_to_tbc_personal_login_cirugia.getSize()>0){
				globals.vDigVerif=true
		       globals.calculaDigitoVerificador()
		       if(!globals.vDigVerif){
		    	   globals.vOperador="Digito verificador erroneo";
		    	   user=false
		       }else{
			      globals.vOperador=vlegajo_to_tbc_personal_login_cirugia.per_apelnom;
			      if(globals.vClave!=vlegajo_to_tbc_clave_legajo.hor_perclave){
						globals.vPassOperador="Clave Incorrecta";
						user=false
				  }else{
				  		if(globals.vSolomedicos){
					  		if(vlegajo_to_tbc_personal_login_cirugia.per_fecbaja!=0||vlegajo_to_tbc_personal_login_cirugia.per_tipliquid!=2||vlegajo_menu_cirugia_to_tbc_personal.per_espemed!=24){
					  			globals.vOperador="El legajo no pertenece a un Anestesiólogo";
					  			user=false
					  		}else{
					  			globals.vTipoTecnico=1
					  			globals.vTipoOperador=0
					  			user=true
					  		}
				  		}else{
				  			if(vlegajo_menu_cirugia_to_tbc_personal.per_espemed!=24){
				  				user=false
				  			}else{
				  				if(vlegajo_to_tbc_personal_login_cirugia.per_tipliquid!=2){
				  					globals.vTipoTecnico=0
				  				}else{
				  					globals.vTipoTecnico=1
				  				}
				  				globals.vTipoOperador=0
				  				user=true
				  			}
				  		}
				  }
		       }
	    }else{
	    		
	    			globals.vOperador="Operador No Valido";
	    			user=false
	    		
	    }
	}
	}	
	
    if(user){
	      //forms.tab_scr_tbc_admision.controller.show()
	    f_Anestesista=user;
	    globals.EsAnestesista=user;
	    globals.vSolomedicos=user;
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
 * @properties={typeid:24,uuid:"FD8BF07F-3D93-4854-B1F7-33A3629ED2B3"}
 */
function onAction_cancela(event) {
	//globals.vClose=true
    //application.showForm("frm_menu_principal")
    globals.vSolomedicos=false
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
 * @properties={typeid:24,uuid:"C453548B-5C22-4B0C-AE57-B85D1F48B4AF"}
 */
function onAction_legajo(event) {
	//application.output("por aca pasa")
}

/**
 * // TODO generated, please specify type and doc for the params
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"F7892F60-E980-4CFD-B5F0-DF26141F1E96"}
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
				forms.PideLegajoMedico.elements.clave.requestFocus()
				
			}else{
		    	if(vlegajo_to_tbc_personal_login.getSize()>0){
		    		globals.vDigVerif=true
		    	   globals.calculaDigitoVerificador()
		    		
			       if(!globals.vDigVerif){
			    	   globals.vOperador="Digito verificador erroneo";
			    	   forms.PideLegajoMedico.elements.legajo.requestFocus()
			       }else{
				      globals.vOperador=vlegajo_to_tbc_personal_login.per_apelnom;
				      forms.PideLegajoMedico.elements.clave.requestFocus()
					  
			       }
		    	}else{
		    		if(vlegajo_to_tbc_perext.getSize()>0){
		    			globals.vOperador=vlegajo_to_tbc_perext.perext_nom;
		    			forms.PideLegajoMedico.elements.clave.requestFocus()
						
		    		}else{
		    			globals.vOperador="Operador No Valido";
		    			forms.PideLegajoMedico.elements.legajo.requestFocus()
		    		}
		    	}
			}
		}else{
			
			if(vlegajo_to_tbc_personal_login.getSize()>0){
				   globals.vDigVerif=true
			       globals.calculaDigitoVerificador()
			       if(!globals.vDigVerif){
			    	   globals.vOperador="Digito verificador erroneo";
			    	   forms.PideLegajoMedico.elements.legajo.requestFocus()
			       }else{
				      globals.vOperador=vlegajo_to_tbc_personal_login.per_apelnom;
				      forms.PideLegajoMedico.elements.clave.requestFocus()
					  
			       }
		    	}else{
		    		if(vlegajo_to_tbc_perext.getSize()>0){
		    			globals.vOperador=vlegajo_to_tbc_perext.perext_nom;
		    			forms.PideLegajoMedico.elements.clave.requestFocus()
						
		    		}else{
		    			globals.vOperador="Operador No Valido";
		    			forms.PideLegajoMedico.elements.legajo.requestFocus()
		    		}
		    	}
		}
		}else{
			return
		}
	}else{
		forms.PideLegajoMedico.elements.legajo.requestFocus()
	}
	
}

/**
 * Handle hide window.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"6CBAC2A9-0047-407D-BB8D-C781AEBCFEC2"}
 */
function onHide_pidelegajo(event) {
	/*
	globals.EsAnestesista=f_Anestesista;
	var name=application.getActiveWindow()
	name.getName()
	var $win=application.getWindow(name.getName())
	if($win!=null){
		$win.hide()
		$win.destroy()
	}
	*/
	return globals.EsAnestesista
}

/**
 * Handle focus lost event of an element on the form. Return false when the focus lost event of the element itself shouldn't be triggered.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"A1DEC127-CFBB-4E4D-AEEB-4EC2C1DAC46F"}
 */
function onElementFocusLost_pidelegajo(event) {
	globals.EsAnestesista=f_Anestesista;
	return true
}

/**
 * Callback method when form is destroyed.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"4481963D-22DF-49F9-A271-CB2B84D122E0"}
 */
function onUnload(event) {
	globals.EsAnestesista=f_Anestesista;
}

/**
 * Handle a drop.
 * Return true if drop has been performed successfully, otherwise false.
 *
 * @param {JSDNDEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"E13E1865-7BCB-4BF9-B419-C3D8C8C11A66"}
 */
function onDrop(event) {
	globals.EsAnestesista=f_Anestesista;
	return false
}
