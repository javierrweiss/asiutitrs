/**
 * @properties={typeid:35,uuid:"C7DDC3A3-73B9-446C-8227-91F04F90EFB0",variableType:-4}
 */
var f_Anestesista = false;

/**
 * // TODO generated, please specify type and doc for the params
 * @param {Object} oldValue
 * @param {Object} newValue
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"AA6814A4-9AA1-47FC-B512-0D0FB02C2A84"}
 */
function onDataChange_legajo(oldValue, newValue, event) {
	if(globals.vLegajo!=0&&globals.vLegajo!=null&&globals.vLegajo!=''){
		globals.vLega=globals.vLegajo
		globals.vlargo= globals.vLega.toString().length - 1;
		if(globals.vlargo!=0){
			globals.vLega=globals.vLega.toString().substr(0,globals.vlargo)
			globals.aux_Lega=globals.vLega
			globals.digito_verificador = utils.stringToNumber(globals.vLegajo.toString().substr(globals.vlargo, 1))
			if (globals.digito_verificador == 0){
				if (vlegajo_to_tbc_medicos.getSize()>0){
					if(vlegajo_to_tbc_medicos.med_espemed!=24){
						globals.vOperador="El legajo no pertenece a un Anestesiólogo";
						elements.legajo.requestFocus()
						return true
						//return false
					}else{
						globals.vOperador=vlegajo_to_tbc_medicos.med_apenom;
						elements.clave.requestFocus()
						return true
					}
				}else{
					if(protambu_vlegajo_to_tbc_personal_login_cirugia.getSize()>0){
						globals.vDigVerif=true
						globals.calculaDigitoVerificador()
	    		
						if(!globals.vDigVerif){
							globals.vOperador="Digito verificador erroneo";
							elements.legajo.requestFocus()
							return true
							//return false
						}else{
							if(globals.vSolomedicos){
								if(protambu_vlegajo_to_tbc_personal_login_cirugia.per_fecbaja!=0||protambu_vlegajo_to_tbc_personal_login_cirugia.per_tipliquid!=2||protambu_vlegajo_menu_cirugia_to_tbc_personal.per_espemed!=24){
									globals.vOperador="El legajo no pertenece a un Anestesiólogo";
									elements.legajo.requestFocus()
									return true
									//return false
								}else{
									globals.vOperador=vlegajo_to_tbc_personal_login.per_apelnom;
									elements.clave.requestFocus()
									return true
								}
							}else{
								globals.vOperador=vlegajo_to_tbc_personal_login.per_apelnom;
								elements.clave.requestFocus()
								return true
							}
						}
					}else{
						
						globals.vOperador="Operador No Valido";
						elements.legajo.requestFocus()
						return true
						//return false
						
					}
				}
			}else{
				if(protambu_vlegajo_to_tbc_personal_login_cirugia.getSize()>0){
					globals.vDigVerif=true
					globals.calculaDigitoVerificador()
					if(!globals.vDigVerif){
						globals.vOperador="Digito verificador erroneo";
						elements.legajo.requestFocus()
						return true
						//return false
					}else{
						if(globals.vSolomedicos){
							if(protambu_vlegajo_to_tbc_personal_login_cirugia.per_fecbaja!=0||protambu_vlegajo_to_tbc_personal_login_cirugia.per_tipliquid!=2||protambu_vlegajo_menu_cirugia_to_tbc_personal.per_espemed!=24){
								globals.vOperador="El legajo no pertenece a un Anestesiólogo";
								elements.legajo.requestFocus()
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
								globals.protambu_EsAnestesista=true
								elements.clave.requestFocus()
								return true
							}
						}else{
							globals.vOperador=vlegajo_to_tbc_personal_login.per_apelnom;
							globals.protambu_EsAnestesista=true
							elements.clave.requestFocus()
							return true
						}	
					}
				}else{
					
					globals.vOperador="Operador No Valido";
					elements.legajo.requestFocus()
					return true
					//return false
					
				}
			}
		}else{
			elements.legajo.requestFocus()
			return true
			//return false
		}
	}else{
		elements.legajo.requestFocus()
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
 * @properties={typeid:24,uuid:"3EB177D4-2B68-4D79-B647-BF3DBE5A99B4"}
 */
function onDataChange_clave(oldValue, newValue, event) {
	globals.vPassOperador=''
	elements.confirma.requestFocus()
	return true
}

/**
 * // TODO generated, please specify type and doc for the params
 * @param {Object} firstShow
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"29278D74-BF63-4559-91E7-F17059F967FE"}
 */
function onShow_login(firstShow, event) {
	f_Anestesista=false;
	elements.legajo.requestFocus()
}

/**
 * // TODO generated, please specify type and doc for the params
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"1B9E1C1D-56FE-4C24-894A-5D62BBD8E73B"}
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
	    	if(protambu_vlegajo_to_tbc_personal_login_cirugia.getSize()>0){
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
							if(protambu_vlegajo_to_tbc_personal_login_cirugia.per_fecbaja!=0||protambu_vlegajo_to_tbc_personal_login_cirugia.per_tipliquid!=2||protambu_vlegajo_menu_cirugia_to_tbc_personal.per_espemed!=24){
								globals.vOperador="El legajo no pertenece a un Anestesiólogo";
								user=false
							}else{
								globals.vTipoTecnico=1
								globals.vTipoOperador=0
								user=true
							}
						}else{
							if(protambu_vlegajo_menu_cirugia_to_tbc_personal.per_espemed!=24){
								user=false
							}else{
								if(protambu_vlegajo_to_tbc_personal_login_cirugia.per_tipliquid!=2){
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
		if(protambu_vlegajo_to_tbc_personal_login_cirugia.getSize()>0){
				globals.vDigVerif=true
		       globals.calculaDigitoVerificador()
		       if(!globals.vDigVerif){
		    	   globals.vOperador="Digito verificador erroneo";
		    	   user=false
		       }else{
			      globals.vOperador=protambu_vlegajo_to_tbc_personal_login_cirugia.per_apelnom;
			      if(globals.vClave!=vlegajo_to_tbc_clave_legajo.hor_perclave){
						globals.vPassOperador="Clave Incorrecta";
						user=false
				  }else{
				  		if(globals.vSolomedicos){
					  		if(protambu_vlegajo_to_tbc_personal_login_cirugia.per_fecbaja!=0||protambu_vlegajo_to_tbc_personal_login_cirugia.per_tipliquid!=2||protambu_vlegajo_menu_cirugia_to_tbc_personal.per_espemed!=24){
					  			globals.vOperador="El legajo no pertenece a un Anestesiólogo";
					  			user=false
					  		}else{
					  			globals.vTipoTecnico=1
					  			globals.vTipoOperador=0
					  			user=true
					  		}
				  		}else{
				  			if(protambu_vlegajo_menu_cirugia_to_tbc_personal.per_espemed!=24){
				  				user=false
				  			}else{
				  				if(protambu_vlegajo_to_tbc_personal_login_cirugia.per_tipliquid!=2){
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
	    globals.protambu_EsAnestesista=user;
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
 * @properties={typeid:24,uuid:"BA81C808-2FC7-44D2-AD8F-DBB4A8EFEBA2"}
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
 * @properties={typeid:24,uuid:"AF6AD121-90E7-47A0-9CDA-B01392BBFB57"}
 */
function onAction_legajo(event) {
	//application.output("por aca pasa")
}

/**
 * // TODO generated, please specify type and doc for the params
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"C4101F80-D41A-4C5B-B476-914EB2CA7F45"}
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
				elements.clave.requestFocus()
				
			}else{
		    	if(vlegajo_to_tbc_personal_login.getSize()>0){
		    		globals.vDigVerif=true
		    	   globals.calculaDigitoVerificador()
		    		
			       if(!globals.vDigVerif){
			    	   globals.vOperador="Digito verificador erroneo";
			    	   elements.legajo.requestFocus()
			       }else{
				      globals.vOperador=vlegajo_to_tbc_personal_login.per_apelnom;
				      elements.clave.requestFocus()
					  
			       }
		    	}else{
		    		if(vlegajo_to_tbc_perext.getSize()>0){
		    			globals.vOperador=vlegajo_to_tbc_perext.perext_nom;
		    			elements.clave.requestFocus()
						
		    		}else{
		    			globals.vOperador="Operador No Valido";
		    			elements.legajo.requestFocus()
		    		}
		    	}
			}
		}else{
			
			if(vlegajo_to_tbc_personal_login.getSize()>0){
				   globals.vDigVerif=true
			       globals.calculaDigitoVerificador()
			       if(!globals.vDigVerif){
			    	   globals.vOperador="Digito verificador erroneo";
			    	   elements.legajo.requestFocus()
			       }else{
				      globals.vOperador=vlegajo_to_tbc_personal_login.per_apelnom;
				      elements.clave.requestFocus()
					  
			       }
		    	}else{
		    		if(vlegajo_to_tbc_perext.getSize()>0){
		    			globals.vOperador=vlegajo_to_tbc_perext.perext_nom;
		    			elements.clave.requestFocus()
						
		    		}else{
		    			globals.vOperador="Operador No Valido";
		    			elements.legajo.requestFocus()
		    		}
		    	}
		}
		}else{
			return
		}
	}else{
		elements.legajo.requestFocus()
	}
	
}

/**
 * Handle hide window.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"C2FAF0FF-5F7F-4CC0-AD60-D88804BAFF99"}
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
	return globals.protambu_EsAnestesista
}

/**
 * Handle focus lost event of an element on the form. Return false when the focus lost event of the element itself shouldn't be triggered.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"8FA2537A-DA8E-4F6D-A751-5B45BA2CD23F"}
 */
function onElementFocusLost_pidelegajo(event) {
	globals.protambu_EsAnestesista=f_Anestesista;
	return true
}

/**
 * Callback method when form is destroyed.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"F5E8A4F0-387D-4C39-B243-D63C7544FFDD"}
 */
function onUnload(event) {
	globals.protambu_EsAnestesista=f_Anestesista;
}

/**
 * Handle a drop.
 * Return true if drop has been performed successfully, otherwise false.
 *
 * @param {JSDNDEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"531A96B6-F79B-4C43-A7D9-797B0D90AD02"}
 */
function onDrop(event) {
	globals.protambu_EsAnestesista=f_Anestesista;
	return false
}
