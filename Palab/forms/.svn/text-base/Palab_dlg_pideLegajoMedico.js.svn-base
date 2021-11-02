/**
 * @properties={typeid:35,uuid:"097F3436-56B3-4B5A-8B76-ED052F4E48E4",variableType:-4}
 */
var f_cerrarForm = false;

/**
 * @properties={typeid:35,uuid:"037AE82E-388F-4025-BD38-556C7E35AD71",variableType:-4}
 */
var f_Anestesista = false;

/**
 * // TODO generated, please specify type and doc for the params
 * @param {Object} oldValue
 * @param {Object} newValue
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"3E1ABC1D-817D-4881-9078-161811C68E3C"}
 */
function onDataChange_legajo(oldValue, newValue, event) {
	if(globals.Palab_vLegajo!=0&&globals.Palab_vLegajo!=null&&globals.Palab_vLegajo!=''){
		globals.Palab_vLega=globals.Palab_vLegajo
		globals.Palab_vlargo= globals.Palab_vLega.toString().length - 1;
		if(globals.Palab_vlargo!=0){
			globals.Palab_vLega=globals.Palab_vLega.toString().substr(0,globals.Palab_vlargo)
			globals.Palab_digito_verificador = utils.stringToNumber(globals.Palab_vLegajo.toString().substr(globals.Palab_vlargo, 1))
			if (globals.Palab_digito_verificador == 0){
				if (palab_vlegajo_to_tbc_medicos.getSize()>0){
					/*if(palab_vlegajo_to_tbc_medicos.med_espemed!=24){
						globals.Palab_vOperador="El legajo no pertenece a un Anestesiólogo";
						forms.Palab_dlg_pideLegajoMedico.elements.legajo.requestFocus()
						return true
						//return false
					}else{*/
						globals.Palab_vOperador=palab_vlegajo_to_tbc_medicos.med_apenom;
						forms.Palab_dlg_pideLegajoMedico.elements.clave.requestFocus()
						return true
					//}
				}else{
					if(palab_vlegajo_to_tbc_personal_login_cirugia.getSize()>0){
						globals.Palab_vDigVerif=true
						globals.palab_calculaDigitoVerificador()
	    		
						if(!globals.Palab_vDigVerif){
							globals.Palab_vOperador="Digito verificador erroneo";
							forms.Palab_dlg_pideLegajoMedico.elements.legajo.requestFocus()
							return true
							//return false
						}else{
							if(globals.Palab_vSolomedicos){
								if(palab_vlegajo_to_tbc_personal_login_cirugia.per_fecbaja!=0||palab_vlegajo_to_tbc_personal_login_cirugia.per_tipliquid!=2){
									globals.Palab_vOperador="El legajo no pertenece a un profesional";
									forms.Palab_dlg_pideLegajoMedico.elements.legajo.requestFocus()
									return true
									//return false
								}else{
									globals.Palab_vOperador=palab_vlegajo_to_tbc_personal_login.per_apelnom;
									forms.Palab_dlg_pideLegajoMedico.elements.clave.requestFocus()
									return true
								}
							}else{
								globals.Palab_vOperador=palab_vlegajo_to_tbc_personal_login.per_apelnom;
								forms.Palab_dlg_pideLegajoMedico.elements.clave.requestFocus()
								return true
							}
						}
					}else{
						
						globals.Palab_vOperador="Operador No Valido";
						forms.Palab_dlg_pideLegajoMedico.elements.legajo.requestFocus()
						return true
						//return false
						
					}
				}
			}else{
				if(palab_vlegajo_to_tbc_personal_login_cirugia.getSize()>0){
					globals.Palab_vDigVerif=true
					globals.palab_calculaDigitoVerificador()
					if(!globals.Palab_vDigVerif){
						globals.Palab_vOperador="Digito verificador erroneo";
						forms.Palab_dlg_pideLegajoMedico.elements.legajo.requestFocus()
						return true
						//return false
					}else{
						if(globals.Palab_vSolomedicos){
							if(palab_vlegajo_to_tbc_personal_login_cirugia.per_fecbaja!=0||palab_vlegajo_to_tbc_personal_login_cirugia.per_tipliquid!=2){
								globals.Palab_vOperador="El legajo no pertenece a un profesional";
								forms.Palab_dlg_pideLegajoMedico.elements.legajo.requestFocus()
								return true
								//return false
							}else{
								globals.Palab_vOperador=palab_vlegajo_to_tbc_personal_login.per_apelnom;
						/**
						if(vs_to_permisos_grales.getSize()<1){
							plugins.dialogs.showInfoDialog("",globals.Palab_vTipoOperador)
							plugins.dialogs.showInfoDialog("",globals.Palab_vLegajo)
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
									forms.Palab_dlg_pideLegajoMedico.elements.clave.requestFocus()
									return true
								}
							}
							*/
						//}else{
								globals.Palab_esAnestesista=true
								forms.Palab_dlg_pideLegajoMedico.elements.clave.requestFocus()
								return true
							}
						}else{
							globals.Palab_vOperador=palab_vlegajo_to_tbc_personal_login.per_apelnom;
							globals.Palab_esAnestesista=true
							forms.Palab_dlg_pideLegajoMedico.elements.clave.requestFocus()
							return true
						}	
					}
				}else{
					
					globals.Palab_vOperador="Operador No Valido";
					forms.Palab_dlg_pideLegajoMedico.elements.legajo.requestFocus()
					return true
					//return false
					
				}
			}
		}else{
			forms.Palab_dlg_pideLegajoMedico.elements.legajo.requestFocus()
			return true
			//return false
		}
	}else{
		forms.Palab_dlg_pideLegajoMedico.elements.legajo.requestFocus()
		return true
		//return false
	}}

/**
 * // TODO generated, please specify type and doc for the params
 * @param {Object} oldValue
 * @param {Object} newValue
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"BEE292F6-76C5-4402-A1EC-094C35CFB9ED"}
 */
function onDataChange_clave(oldValue, newValue, event) {
	globals.Palab_vPassOperador=''
	forms.Palab_dlg_pideLegajoMedico.elements.confirma.requestFocus()
	return true
}

/**
 * // TODO generated, please specify type and doc for the params
 * @param {Object} firstShow
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"0480AFDC-25B1-45A0-90BF-2E27DC310AF0"}
 */
function onShow_login(firstShow, event) {
	f_Anestesista=false;
	f_cerrarForm = false;
	forms.Palab_dlg_pideLegajoMedico.elements.legajo.requestFocus()
}

/**
 * // TODO generated, please specify type and doc for the params
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"EF090EE4-50DF-4D12-997F-EA55C56DD33E"}
 */
function onAction_confirma(event) {
	var user = false;
	if(globals.Palab_vLegajo!=0&&globals.Palab_vLegajo!=null){
		
		globals.Palab_vPassOperador=''
		globals.Palab_vLega=globals.Palab_vLegajo
		globals.Palab_vlargo= globals.Palab_vLega.toString().length - 1;
		globals.Palab_vLega=globals.Palab_vLega.toString().substr(0,globals.Palab_vlargo)
		globals.Palab_digito_verificador = utils.stringToNumber(globals.Palab_vLegajo.toString().substr(globals.Palab_vlargo, 1))
		
	if (globals.Palab_digito_verificador == 0){
		if (palab_vlegajo_to_tbc_medicos.getSize()>0){
			globals.Palab_vOperador=palab_vlegajo_to_tbc_medicos.med_apenom;
			if(palab_vlegajo_to_tbc_medicos.med_clave!=0){
				if(globals.Palab_vClave!=palab_vlegajo_to_tbc_medicos.med_clave){
					globals.Palab_vPassOperador="Clave Incorrecta";
					user=false
				}else{
					/*
					if(Palab_vlegajo_to_tbc_medicos.med_espemed==24){
						globals.Palab_vTipoOperador=1
						globals.Palab_vTipoTecnico=1
						user=true
					}else{
						globals.Palab_vOperador="El Profesional no es Anestesiólogo"
						user=false
					}
					*/
					globals.Palab_vTipoOperador=1
					user=true
				}
			}else{
				if(globals.Palab_vClave!=palab_vlegajo1_to_tbc_clave_legajo.hor_perclave){
		    		globals.Palab_vPassOperador="Clave Incorrecta";
		    		user=false
				}else{
					/*
					if(Palab_vlegajo_to_tbc_medicos.med_espemed==24){
						globals.Palab_vTipoOperador=1
						globals.Palab_vTipoTecnico=1
						user=true
					}else{
						globals.Palab_vOperador="El Profesional no es Anestesiólogo"
						user=false
					}
					*/
					globals.Palab_vTipoOperador=1
					user=true
				}
			}
		}else{
	    	if(palab_vlegajo_to_tbc_personal_login_cirugia.getSize()>0){
	    		globals.Palab_vDigVerif=true
		       globals.palab_calculaDigitoVerificador()
		       if(!globals.Palab_vDigVerif){
		    	   globals.Palab_vOperador="Digito verificador erroneo";
		    	   user=false
		       }else{
		    	   if(globals.Palab_vClave!=palab_vlegajo_to_tbc_clave_legajo.hor_perclave){
						globals.Palab_vPassOperador="Clave Incorrecta";
						user=false
					}else{
						if(globals.Palab_vSolomedicos){
							if(palab_vlegajo_to_tbc_personal_login_cirugia.per_fecbaja!=0||palab_vlegajo_to_tbc_personal_login_cirugia.per_tipliquid!=2){
								globals.Palab_vOperador="El legajo no pertenece a un profesional";
								user=false
							}else{
								globals.Palab_vTipoTecnico=1
								globals.Palab_vTipoOperador=0
								user=true
							}
						}else{
							if(palab_vlegajo_menu_cirugia_to_tbc_personal.per_espemed!=24){
								user=false
							}else{
								if(palab_vlegajo_to_tbc_personal_login_cirugia.per_tipliquid!=2){
									globals.Palab_vTipoTecnico=0
								}else{
									globals.Palab_vTipoTecnico=1
								}
								globals.Palab_vTipoOperador=0
								user=true
							}
						}
					}
			   }
	    	}else{
	    		if(palab_vlegajo_to_tbc_perext.getSize()>0){
	    			globals.Palab_vOperador=palab_vlegajo_to_tbc_perext.perext_nom;
	    			if(globals.Palab_vClave!=palab_vlegajo_to_tbc_perext.perext_clave){
						globals.Palab_vPassOperador="Clave Incorrecta";
						user=false
					}else{
						globals.Palab_vTipoOperador=2
					   user=true
					}
	    		}else{
	    			globals.Palab_vOperador="Operador No Valido";
	    			user=false
	    		}
	    	}
		}
	}else{
		if(palab_vlegajo_to_tbc_personal_login_cirugia.getSize()>0){
				globals.Palab_vDigVerif=true
		       globals.palab_calculaDigitoVerificador()
		       if(!globals.Palab_vDigVerif){
		    	   globals.Palab_vOperador="Digito verificador erroneo";
		    	   user=false
		       }else{
			      globals.Palab_vOperador=palab_vlegajo_to_tbc_personal_login_cirugia.per_apelnom;
			      if(globals.Palab_vClave!=palab_vlegajo_to_tbc_clave_legajo.hor_perclave){
						globals.Palab_vPassOperador="Clave Incorrecta";
						user=false
				  }else{
				  		if(globals.Palab_vSolomedicos){
					  		if(palab_vlegajo_to_tbc_personal_login_cirugia.per_fecbaja!=0||palab_vlegajo_to_tbc_personal_login_cirugia.per_tipliquid!=2){
					  			globals.Palab_vOperador="El legajo no pertenece a un profesional";
					  			user=false
					  		}else{
					  			globals.Palab_vTipoTecnico=1
					  			globals.Palab_vTipoOperador=0
					  			user=true
					  		}
				  		}else{
				  			if(palab_vlegajo_menu_cirugia_to_tbc_personal.per_espemed!=24){
				  				user=false
				  			}else{
				  				if(palab_vlegajo_to_tbc_personal_login_cirugia.per_tipliquid!=2){
				  					globals.Palab_vTipoTecnico=0
				  				}else{
				  					globals.Palab_vTipoTecnico=1
				  				}
				  				globals.Palab_vTipoOperador=0
				  				user=true
				  			}
				  		}
				  }
		       }
	    }else{
	    		
	    			globals.Palab_vOperador="Operador No Valido";
	    			user=false
	    		
	    }
	}
	}	
	
    if(user){
	      //forms.tab_scr_tbc_admision.controller.show()
	    f_Anestesista=user;
	    globals.Palab_esAnestesista=user;
	    globals.Palab_vSolomedicos=user;
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
	}}

/**
 * // TODO generated, please specify type and doc for the params
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"BB527B73-C888-4DAC-AF72-490480C733EF"}
 */
function onAction_cancela(event) {
	//globals.vClose=true
    //application.showForm("frm_menu_principal")
    globals.Palab_vSolomedicos=false
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
 * @properties={typeid:24,uuid:"03DD80D1-E0C6-4A29-9490-603ADD13DB2E"}
 */
function onAction_legajo(event) {
	//application.output("por aca pasa")
}

/**
 * // TODO generated, please specify type and doc for the params
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"E41A2FDF-3168-443F-9D9A-378AD80C966D"}
 */
function onFocusLost_legajo(event) {
	if(globals.Palab_vLegajo!=0&&globals.Palab_vLegajo!=null&&globals.Palab_vLegajo!=''){
		globals.Palab_vLega=globals.Palab_vLegajo
		globals.Palab_vlargo= globals.Palab_vLega.toString().length - 1;
		if(globals.Palab_vlargo!=0){
	    globals.Palab_vLega=globals.Palab_vLega.toString().substr(0,globals.Palab_vlargo)
		globals.Palab_digito_verificador = utils.stringToNumber(globals.Palab_vLegajo.toString().substr(globals.Palab_vlargo, 1))
		if (globals.Palab_digito_verificador == 0){
			if (palab_vlegajo_to_tbc_medicos.getSize()>0){
				globals.Palab_vOperador=palab_vlegajo_to_tbc_medicos.med_apenom;
				forms.Palab_dlg_pideLegajoMedico.elements.clave.requestFocus()
				
			}else{
		    	if(palab_vlegajo_to_tbc_personal_login.getSize()>0){
		    		globals.Palab_vDigVerif=true
		    		globals.palab_calculaDigitoVerificador()
		    		
			       if(!globals.Palab_vDigVerif){
			    	   globals.Palab_vOperador="Digito verificador erroneo";
			    	   forms.Palab_dlg_pideLegajoMedico.elements.legajo.requestFocus()
			       }else{
				      globals.Palab_vOperador=palab_vlegajo_to_tbc_personal_login.per_apelnom;
				      forms.Palab_dlg_pideLegajoMedico.elements.clave.requestFocus()
					  
			       }
		    	}else{
		    		if(palab_vlegajo_to_tbc_perext.getSize()>0){
		    			globals.Palab_vOperador=palab_vlegajo_to_tbc_perext.perext_nom;
		    			forms.Palab_dlg_pideLegajoMedico.elements.clave.requestFocus()
						
		    		}else{
		    			globals.Palab_vOperador="Operador No Valido";
		    			forms.Palab_dlg_pideLegajoMedico.elements.legajo.requestFocus()
		    		}
		    	}
			}
		}else{
			
			if(palab_vlegajo_to_tbc_personal_login.getSize()>0){
				   globals.Palab_vDigVerif=true
			       globals.palab_calculaDigitoVerificador()
			       if(!globals.Palab_vDigVerif){
			    	   globals.Palab_vOperador="Digito verificador erroneo";
			    	   forms.Palab_dlg_pideLegajoMedico.elements.legajo.requestFocus()
			       }else{
				      globals.Palab_vOperador=palab_vlegajo_to_tbc_personal_login.per_apelnom;
				      forms.Palab_dlg_pideLegajoMedico.elements.clave.requestFocus()
					  
			       }
		    	}else{
		    		if(palab_vlegajo_to_tbc_perext.getSize()>0){
		    			globals.Palab_vOperador=palab_vlegajo_to_tbc_perext.perext_nom;
		    			forms.Palab_dlg_pideLegajoMedico.elements.clave.requestFocus()
						
		    		}else{
		    			globals.Palab_vOperador="Operador No Valido";
		    			forms.Palab_dlg_pideLegajoMedico.elements.legajo.requestFocus()
		    		}
		    	}
		}
		}else{
			return
		}
	}else{
		forms.Palab_dlg_pideLegajoMedico.elements.legajo.requestFocus()
	}
	
}

/**
 * Handle hide window.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"5923D66F-D020-4242-B590-6368D01826BF"}
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
 * @properties={typeid:24,uuid:"91335BA7-EC27-4E8A-B01B-33056F959D9F"}
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
 * @properties={typeid:24,uuid:"FF7B2357-FF72-4C16-A450-83D44EA322EA"}
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
 * @properties={typeid:24,uuid:"F1223CB8-AE3D-4710-AB8E-614DA7D1BB94"}
 */
function onDrop(event) {
	globals.Hcipiso_esAnestesista=f_Anestesista;
	return false
}
