/**
 * @properties={typeid:35,uuid:"2A79062F-C575-4707-8A55-2229AEEC6686",variableType:-4}
 */
var f_cerrarForm = false;

/**
 * @properties={typeid:35,uuid:"A1461158-258C-4DFE-98B6-1286ACF0FDBC",variableType:-4}
 */
var f_Anestesista = false;

/**
 * // TODO generated, please specify type and doc for the params
 * @param {Object} oldValue
 * @param {Object} newValue
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"1BB9796F-7FF5-49EC-B426-6667487DC0A4"}
 */
function onDataChange_legajo(oldValue, newValue, event) {
	if(globals.AsiUtiTrs_vLegajo!=0&&globals.AsiUtiTrs_vLegajo!=null&&globals.AsiUtiTrs_vLegajo!=''){
		globals.AsiUtiTrs_vLega=globals.AsiUtiTrs_vLegajo
		globals.AsiUtiTrs_vlargo= globals.AsiUtiTrs_vLega.toString().length - 1;
		if(globals.AsiUtiTrs_vlargo!=0){
			globals.AsiUtiTrs_vLega=globals.AsiUtiTrs_vLega.toString().substr(0,globals.AsiUtiTrs_vlargo)
			globals.AsiUtiTrs_digito_verificador = utils.stringToNumber(globals.AsiUtiTrs_vLegajo.toString().substr(globals.AsiUtiTrs_vlargo, 1))
			if (globals.AsiUtiTrs_digito_verificador == 0){
				if (asiutitrs_vlegajo_to_tbc_medicos.getSize()>0){
					/*if(AsiUtiTrs_vlegajo_to_tbc_medicos.med_espemed!=24){
						globals.AsiUtiTrs_vOperador="El legajo no pertenece a un Anestesi�logo";
						forms.AsiUtiTrs_dlg_pideLegajoMedico.elements.legajo.requestFocus()
						return true
						//return false
					}else{*/
						globals.AsiUtiTrs_vOperador=asiutitrs_vlegajo_to_tbc_medicos.med_apenom;
						forms.AsiUtiTrs_dlg_pideLegajoMedico.elements.clave.requestFocus()
						return true
					//}
				}else{
					if(asiutitrs_vlegajo_to_tbc_personal_login_cirugia.getSize()>0){
						globals.AsiUtiTrs_vDigVerif=true
						globals.AsiUtiTrs_calculaDigitoVerificador()
	    		
						if(!globals.AsiUtiTrs_vDigVerif){
							globals.AsiUtiTrs_vOperador="Digito verificador erroneo";
							forms.AsiUtiTrs_dlg_pideLegajoMedico.elements.legajo.requestFocus()
							return true
							//return false
						}else{
							if(globals.AsiUtiTrs_vSolomedicos){
								if(asiutitrs_vlegajo_to_tbc_personal_login_cirugia.per_fecbaja!=0||asiutitrs_vlegajo_to_tbc_personal_login_cirugia.per_tipliquid!=2){
									globals.AsiUtiTrs_vOperador="El legajo no pertenece a un profesional";
									forms.AsiUtiTrs_dlg_pideLegajoMedico.elements.legajo.requestFocus()
									return true
									//return false
								}else{
									globals.AsiUtiTrs_vOperador=asiutitrs_vlegajo_to_tbc_personal_login.per_apelnom;
									forms.AsiUtiTrs_dlg_pideLegajoMedico.elements.clave.requestFocus()
									return true
								}
							}else{
								globals.AsiUtiTrs_vOperador=asiutitrs_vlegajo_to_tbc_personal_login.per_apelnom;
								forms.AsiUtiTrs_dlg_pideLegajoMedico.elements.clave.requestFocus()
								return true
							}
						}
					}else{
						
						globals.AsiUtiTrs_vOperador="Operador no válido";
						forms.AsiUtiTrs_dlg_pideLegajoMedico.elements.legajo.requestFocus()
						return true
						//return false
						
					}
				}
			}else{
				if(asiutitrs_vlegajo_to_tbc_personal_login_cirugia.getSize()>0){
					globals.AsiUtiTrs_vDigVerif=true
					globals.AsiUtiTrs_calculaDigitoVerificador()
					if(!globals.AsiUtiTrs_vDigVerif){
						globals.AsiUtiTrs_vOperador="Dígito verificador erróneo";
						forms.AsiUtiTrs_dlg_pideLegajoMedico.elements.legajo.requestFocus()
						return true
						//return false
					}else{
						if(globals.AsiUtiTrs_vSolomedicos){
							if(asiutitrs_vlegajo_to_tbc_personal_login_cirugia.per_fecbaja!=0||asiutitrs_vlegajo_to_tbc_personal_login_cirugia.per_tipliquid!=2){
								globals.AsiUtiTrs_vOperador="El legajo no pertenece a un profesional";
								forms.AsiUtiTrs_dlg_pideLegajoMedico.elements.legajo.requestFocus()
								return true
								//return false
							}else{
								globals.AsiUtiTrs_vOperador=asiutitrs_vlegajo_to_tbc_personal_login.per_apelnom;
						/**
						if(vs_to_permisos_grales.getSize()<1){
							plugins.dialogs.showInfoDialog("",globals.AsiUtiTrs_vTipoOperador)
							plugins.dialogs.showInfoDialog("",globals.AsiUtiTrs_vLegajo)
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
									forms.AsiUtiTrs_dlg_pideLegajoMedico.elements.clave.requestFocus()
									return true
								}
							}
							*/
						//}else{
								globals.AsiUtiTrs_esAnestesista=true
								forms.AsiUtiTrs_dlg_pideLegajoMedico.elements.clave.requestFocus()
								return true
							}
						}else{
							globals.AsiUtiTrs_vOperador=asiutitrs_vlegajo_to_tbc_personal_login.per_apelnom;
							globals.AsiUtiTrs_esAnestesista=true
							forms.AsiUtiTrs_dlg_pideLegajoMedico.elements.clave.requestFocus()
							return true
						}	
					}
				}else{
					
					globals.AsiUtiTrs_vOperador="Operador no válido";
					forms.AsiUtiTrs_dlg_pideLegajoMedico.elements.legajo.requestFocus()
					return true
					//return false
					
				}
			}
		}else{
			forms.AsiUtiTrs_dlg_pideLegajoMedico.elements.legajo.requestFocus()
			return true
			//return false
		}
	}else{
		forms.AsiUtiTrs_dlg_pideLegajoMedico.elements.legajo.requestFocus()
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
 * @properties={typeid:24,uuid:"113E6232-F927-4265-AB91-75D213C4E05F"}
 */
function onDataChange_clave(oldValue, newValue, event) {
	globals.AsiUtiTrs_vPassOperador=''
	forms.AsiUtiTrs_dlg_pideLegajoMedico.elements.confirma.requestFocus()
	return true
}

/**
 * // TODO generated, please specify type and doc for the params
 * @param {Object} firstShow
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"52E42D71-7B3C-4F79-AB1F-F15B79E9D2B7"}
 */
function onShow_login(firstShow, event) {
	f_Anestesista=false;
	f_cerrarForm = false;
	globals.AsiUtiTrs_vClave=''
	forms.AsiUtiTrs_dlg_pideLegajoMedico.elements.legajo.requestFocus()
}

/**
 * TODO generated, please specify type and doc for the params
 * @param msj
 * @param focus
 *
 * @properties={typeid:24,uuid:"4C45F6F0-044E-40BE-B7F8-587644119FE6"}
 */
function mensajeError(msj, focus){
	if(focus==true){
		 globals.showErrorDialog(msj, null, 'Ok', null, null, null);
         globals.AsiUtiTrs_vClave = null;
         elements.clave.requestFocus(); 
	}else{
		 globals.showErrorDialog(msj, null, 'Ok', null, null, null);
         globals.AsiUtiTrs_vClave = null;
	}
}

/**
 * TODO generated, please specify type and doc for the params
 * @param usuario
 *
 * @properties={typeid:24,uuid:"FC7CE59F-7EE8-4C31-BDA1-6986C9CA247C"}
 */
function esUsuario(usuario){
	if (usuario){
		var winIngreso = application.createWindow("Menu_item",JSWindow.MODAL_DIALOG)	
	    winIngreso.title= globals.gbl_title
	    winIngreso.resizable = false	
	    winIngreso.show(forms.HciutiTrs_frm_hist_clin_ingreso_utiTrs)
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
 * TODO generated, please specify type and doc for the params
 * @param msj String
 * @param focus boolean
 *
 *
 * @properties={typeid:24,uuid:"F55C44D9-75EC-4B9F-97C3-4B779372CB6B"}
 */
function validarIngreso(msj, focus){
	var cldb = String(asiuti_vlega_to_tbl_clavelega.clave);
	var clIngUsr = globals.AsiUtiTrs_vClave;
	if(clIngUsr==globals.rtrim(cldb,' ')){
		//application.output("coincide");
		esUsuario(true);
		var name=application.getActiveWindow()
		name.getName()
		var $win=application.getWindow(name.getName())
		if($win!=null){
			$win.hide()
			$win.destroy()
		}	
	} else{
		//application.output("no coincide");
		esUsuario(false);
		mensajeError(msj,focus);
	}
}

/**
 * @properties={typeid:24,uuid:"6A9700D4-374A-482A-B362-1A2F9F16C0A3"}
 */
function claveNoNula(){
	if(asiuti_vlega_to_tbl_clavelega.clave!=''&&asiuti_vlega_to_tbl_clavelega.clave!=null){
		true
	} else{
		false;
	}
}

/**
 * @properties={typeid:24,uuid:"337230CB-8369-404A-A30B-316513492D69"}
 */
function esLegajoValido(){
	if(globals.AsiUtiTrs_vLegajo!=0&&globals.AsiUtiTrs_vLegajo!=null){

		globals.AsiUtiTrs_vPassOperador=''
		globals.AsiUtiTrs_vLega=globals.AsiUtiTrs_vLegajo
		globals.AsiUtiTrs_vlargo= globals.AsiUtiTrs_vLega.toString().length - 1;
		globals.AsiUtiTrs_vLega=globals.AsiUtiTrs_vLega.toString().substr(0,globals.AsiUtiTrs_vlargo)
		globals.AsiUtiTrs_digito_verificador = utils.stringToNumber(globals.AsiUtiTrs_vLegajo.toString().substr(globals.AsiUtiTrs_vlargo, 1))
	} else{
		mensajeError('El número de legajo introducido no existe',false);
	}
}

/**
 * // TODO generated, please specify type and doc for the params
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"AF220FD6-5046-4D9B-BC6C-6C22A9279CD0"}
 */
function onAction_confirma(event) {
	esLegajoValido();
		if (globals.AsiUtiTrs_digito_verificador == 0){
		if (asiutitrs_vlegajo_to_tbc_medicos.getSize()>0){
			globals.AsiUtiTrs_vOperador=asiutitrs_vlegajo_to_tbc_medicos.med_apenom;
			globals.AsiUtiTrs_vTipoOperador=1;
			if(asiuti_vlega_to_tbl_clavelega.getSize()>0){
				validarIngreso('Clave incorrecta',true)
			}
			else{
				mensajeError('Clave guardada incorrecta',true);
			}
		}else{
		    if(asiutitrs_vlegajo_to_tbc_personal_login_cirugia.getSize()>0){
	    		globals.AsiUtiTrs_vDigVerif=true
		        globals.AsiUtiTrs_calculaDigitoVerificador()
		       if(!globals.AsiUtiTrs_vDigVerif){
		    	   globals.AsiUtiTrs_vOperador="Dígito verificador erróneo";
		    	   esUsuario(false);
		       }else{
		    	   globals.AsiUtiTrs_vTipoOperador=0;
		    	   if(asiuti_vlega_to_tbl_clavelega.getSize()>0 && claveNoNula()){
		    		   validarIngreso('Clave incorrecta',true)
					}else{
						mensajeError('Clave guardada incorrecta',true);
					}
						if(globals.AsiUtiTrs_vSolomedicos){
							if(asiutitrs_vlegajo_to_tbc_personal_login_cirugia.per_fecbaja!=0||asiutitrs_vlegajo_to_tbc_personal_login_cirugia.per_tipliquid!=2){
								globals.AsiUtiTrs_vOperador="El legajo no pertenece a un médico";
								esUsuario(false);
							}else{// login correcto del cirujano
								globals.AsiUtiTrs_vTipoTecnico=1
								globals.AsiUtiTrs_vTipoOperador=0
								esUsuario(true);
							}
						}else{
							if(asiutitrs_vlegajo_menu_cirugia_to_tbc_personal.per_espemed!=24){
								esUsuario(false);
							}else{
								if(asiutitrs_vlegajo_to_tbc_personal_login_cirugia.per_tipliquid!=2){
									globals.AsiUtiTrs_vTipoTecnico=0
								}else{
									globals.AsiUtiTrs_vTipoTecnico=1
								}
								globals.AsiUtiTrs_vTipoOperador=0
								esUsuario(true);
							}
						}
					}
	    	}else{
	    		if(asiutitrs_vlegajo_to_tbc_perext.getSize()>0){
	    			globals.AsiUtiTrs_vOperador=asiutitrs_vlegajo_to_tbc_perext.perext_nom;
	    			globals.AsiUtiTrs_vTipoOperador=2;
	    			if(asiuti_vlega_to_tbl_clavelega.getSize()>0 && claveNoNula()){
	    				validarIngreso('Clave incorrecta',true)
	    			}else{
	    				mensajeError('Clave guardada incorrecta',true);
	    			}
	    		}else{
	    			globals.AsiUtiTrs_vOperador="Operador no válido";
	    			esUsuario(false);
	    		}
	    	}
		}
	}else{
		if(asiutitrs_vlegajo_to_tbc_personal_login_cirugia.getSize()>0){
			globals.AsiUtiTrs_vDigVerif=true
		       globals.AsiUtiTrs_calculaDigitoVerificador()
		       if(!globals.AsiUtiTrs_vDigVerif){
		    	   globals.AsiUtiTrs_vOperador="Digito verificador erróneo";
		    	   esUsuario(false);
		       }else{
			      globals.AsiUtiTrs_vOperador=asiutitrs_vlegajo_to_tbc_personal_login_cirugia.per_apelnom;
			      globals.AsiUtiTrs_vTipoOperador=0;
			    		if(asiuti_vlega_to_tbl_clavelega.getSize()>0 && claveNoNula()){
			    			validarIngreso('Clave incorrecta',true)
						}else{
				  		if(globals.AsiUtiTrs_vSolomedicos){
					  		if(asiutitrs_vlegajo_to_tbc_personal_login_cirugia.per_fecbaja!=0||asiutitrs_vlegajo_to_tbc_personal_login_cirugia.per_tipliquid!=2){
					  			globals.AsiUtiTrs_vOperador="El legajo no pertenece a un médico";
					  			esUsuario(false);
					  		
					  		}else{
					  			globals.AsiUtiTrs_vTipoTecnico=1
					  			esUsuario(true);
					  	
					  		}
				  		}else{
				  			if(asiutitrs_vlegajo_menu_cirugia_to_tbc_personal.per_espemed!=24){
				  				esUsuario(false);
				  			
				  			}else{
				  				if(asiutitrs_vlegajo_to_tbc_personal_login_cirugia.per_tipliquid!=2){
				  					globals.AsiUtiTrs_vTipoTecnico=0
				  				}else{
				  					globals.AsiUtiTrs_vTipoTecnico=1
				  				}
				  				globals.AsiUtiTrs_vTipoOperador=0
								esUsuario(true);
				  			}
				  		}
				  }
		       }
	    }else{
	    		
	    			globals.AsiUtiTrs_vOperador="Operador no válido";
	    			esUsuario(false);
	    		
	    }
	}
}

/**
 * @properties={typeid:24,uuid:"6BFA5435-243E-4FC0-B1D0-6200A41EBA5E"}
 */
function pruebaMenu(){
	
}

/**
 * // TODO generated, please specify type and doc for the params
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"3A136501-44FE-4BD4-AE4F-4DEC4A3FA792"}
 */
function onAction_cancela(event) {
	//globals.vClose=true
    //application.showForm("frm_menu_principal")
    globals.AsiUtiTrs_vSolomedicos=false
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
 * @properties={typeid:24,uuid:"CAB8A65C-173A-4FD8-8F24-AE7D39617ABD"}
 */
function onFocusLost_legajo(event) {
		globals.AsiUtiTrs_vLega=globals.AsiUtiTrs_vLegajo
	if(globals.AsiUtiTrs_vLegajo!=0&&globals.AsiUtiTrs_vLegajo!=null&&globals.AsiUtiTrs_vLegajo!=''){
		globals.AsiUtiTrs_vlargo= globals.AsiUtiTrs_vLega.toString().length - 1;
		if(globals.AsiUtiTrs_vlargo!=0){
	    globals.AsiUtiTrs_vLega=globals.AsiUtiTrs_vLega.toString().substr(0,globals.AsiUtiTrs_vlargo)
		globals.AsiUtiTrs_digito_verificador = utils.stringToNumber(globals.AsiUtiTrs_vLegajo.toString().substr(globals.AsiUtiTrs_vlargo, 1))
		if (globals.AsiUtiTrs_digito_verificador == 0){
			if (asiutitrs_vlegajo_to_tbc_medicos.getSize()>0){
				globals.AsiUtiTrs_vOperador=asiutitrs_vlegajo_to_tbc_medicos.med_apenom;
				forms.AsiUtiTrs_dlg_pideLegajoMedico.elements.clave.requestFocus()
				
			}else{
		    	if(asiutitrs_vlegajo_to_tbc_personal_login.getSize()>0){
		    		globals.AsiUtiTrs_vDigVerif=true
		    		globals.AsiUtiTrs_calculaDigitoVerificador()
		    		
			       if(!globals.AsiUtiTrs_vDigVerif){
			    	   globals.AsiUtiTrs_vOperador="Digito verificador erróneo";
			    	   forms.AsiUtiTrs_dlg_pideLegajoMedico.elements.legajo.requestFocus()
			       }else{
				      globals.AsiUtiTrs_vOperador=asiutitrs_vlegajo_to_tbc_personal_login.per_apelnom;
				      forms.AsiUtiTrs_dlg_pideLegajoMedico.elements.clave.requestFocus()
					  
			       }
		    	}else{
		    		if(asiutitrs_vlegajo_to_tbc_perext.getSize()>0){
		    			globals.AsiUtiTrs_vOperador=asiutitrs_vlegajo_to_tbc_perext.perext_nom;
		    			forms.AsiUtiTrs_dlg_pideLegajoMedico.elements.clave.requestFocus()
						
		    		}else{
		    			globals.AsiUtiTrs_vOperador="Operador no válido";
		    			forms.AsiUtiTrs_dlg_pideLegajoMedico.elements.legajo.requestFocus()
		    		}
		    	}
			}
		}else{
			
			if(asiutitrs_vlegajo_to_tbc_personal_login.getSize()>0){
				   globals.AsiUtiTrs_vDigVerif=true
			       globals.AsiUtiTrs_calculaDigitoVerificador()
			       if(!globals.AsiUtiTrs_vDigVerif){
			    	   globals.AsiUtiTrs_vOperador="Digito verificador erróneo";
			    	   forms.AsiUtiTrs_dlg_pideLegajoMedico.elements.legajo.requestFocus()
			       }else{
				      globals.AsiUtiTrs_vOperador=asiutitrs_vlegajo_to_tbc_personal_login.per_apelnom;
				      forms.AsiUtiTrs_dlg_pideLegajoMedico.elements.clave.requestFocus()
					  
			       }
		    	}else{
		    		if(asiutitrs_vlegajo_to_tbc_perext.getSize()>0){
		    			globals.AsiUtiTrs_vOperador=asiutitrs_vlegajo_to_tbc_perext.perext_nom;
		    			forms.AsiUtiTrs_dlg_pideLegajoMedico.elements.clave.requestFocus()
						
		    		}else{
		    			globals.AsiUtiTrs_vOperador="Operador no válido";
		    			forms.AsiUtiTrs_dlg_pideLegajoMedico.elements.legajo.requestFocus()
		    		}
		    	}
		}
		}else{
			return
		}
	}else{
		globals.showErrorDialog('El número de legajo introducido no existe', null, 'Ok', null, null, null);
		forms.AsiUtiTrs_dlg_pideLegajoMedico.elements.legajo.requestFocus()
	}
	
}

/**
 * Handle hide window.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"A85CB6FE-52DA-4E1D-BA9A-4CC7062E261E"}
 */
function onHide_pidelegajo(event) {
	/*
	globals.AsiUtiTrs_esAnestesista=f_Anestesista;
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
 * @properties={typeid:24,uuid:"03983E47-14E1-4DB4-8E94-514F8AF24409"}
 */
function onElementFocusLost_pidelegajo(event) {
	globals.AsiUtiTrs_esAnestesista=f_Anestesista;
	return true
}

/**
 * Callback method when form is destroyed.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"850DEDBE-6C82-48D4-9002-9D0ADD6A9405"}
 */
function onUnload(event) {
	globals.AsiUtiTrs_esAnestesista=f_Anestesista;
}

/**
 * Handle a drop.
 * Return true if drop has been performed successfully, otherwise false.
 *
 * @param {JSDNDEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"5A92FCAC-13E0-4C11-A70D-1A7DDCD3B07C"}
 */
function onDrop(event) {
	globals.AsiUtiTrs_esAnestesista=f_Anestesista;
	return false
}
