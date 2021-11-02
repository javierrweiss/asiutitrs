/**
 * // TODO generated, please specify type and doc for the params
 * @param {Object} oldValue
 * @param {Object} newValue
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"066C9012-883F-4F50-89F4-7DF3B5D6CE48"}
 */
function onDataChange_legajo(oldValue, newValue, event) {
	if(globals.vLegajoTecnico!=0&&globals.vLegajoTecnico!=null&&globals.vLegajoTecnico!=''){
		globals.vLegaTecnico=globals.vLegajoTecnico
		globals.vlargoTecnico= globals.vLegaTecnico.toString().length - 1;
		if(globals.vlargoTecnico!=0){
			globals.vLegaTecnico=globals.vLegaTecnico.toString().substr(0,globals.vlargoTecnico)
			globals.digito_verificadorTecnico = utils.stringToNumber(globals.vLegajoTecnico.toString().substr(globals.vlargoTecnico, 1))
			if (globals.digito_verificadorTecnico == 0){
				if (vlegajotecnico_to_tbc_medicos.getSize()>0){
					globals.vOperadorTecnico=vlegajotecnico_to_tbc_medicos.med_apenom;
					forms.PideLegajoTecnico.elements.clave.requestFocus()
					return true
				}else{
					if(vlegajotecnico_to_tbc_personal_login.getSize()>0){
						globals.vDigVerifTecnico=true
						calculaDigitoVerificadorTecnico()
	    		
						if(!globals.vDigVerifTecnico){
							globals.vOperadorTecnico="Digito verificador erroneo";
							return false
						}else{

							globals.vOperadorTecnico=vlegajotecnico_to_tbc_personal_login.per_apelnom;
							forms.PideLegajoTecnico.elements.clave.requestFocus()
							return true

						}
					}else{
						
						globals.vOperadorTecnico="Operador No Valido";
						return false
						
					}
				}
			}else{
				if(vlegajotecnico_to_tbc_personal_login.getSize()>0){
					globals.vDigVerifTecnico=true
					calculaDigitoVerificadorTecnico()
					if(!globals.vDigVerifTecnico){
						globals.vOperadorTecnico="Digito verificador erroneo";
						return false
					}else{
						
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
						
							globals.vOperadorTecnico=vlegajotecnico_to_tbc_personal_login.per_apelnom;
							forms.PideLegajoTecnico.elements.clave.requestFocus()
							return true
							
					}
				}else{
					
					globals.vOperadorTecnico="Operador No Valido";
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
 * @properties={typeid:24,uuid:"648B3C35-8F28-4960-94E6-E4A8BCD04A73"}
 */
function onDataChange_clave(oldValue, newValue, event) {
	globals.vPassOperadorTecnico=''
	forms.PideLegajoTecnico.elements.confirma.requestFocus()
	return true
}

/**
 * // TODO generated, please specify type and doc for the params
 * @param {Object} firstShow
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"1530E2B5-118B-4E68-B30C-008DBD1E7FAA"}
 */
function onShow_login(firstShow, event) {
	forms.PideLegajoTecnico.elements.legajo.requestFocus()
}

/**
 * // TODO generated, please specify type and doc for the params
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"70A7ECFC-CD1A-4F0B-A51A-56CAF62B7513"}
 */
function onAction_confirma(event) {
	var user = false;
	globals.vIngresoTecnico=false;
	if(globals.vLegajoTecnico!=0&&globals.vLegajoTecnico!=null){
		globals.vPassOperadorTecnico=''
		globals.vLegaTecnico=globals.vLegajoTecnico
		globals.vlargoTecnico= globals.vLegaTecnico.toString().length - 1;
		globals.vLegaTecnico=globals.vLegaTecnico.toString().substr(0,globals.vlargoTecnico)
		globals.digito_verificadorTecnico = utils.stringToNumber(globals.vLegajoTecnico.toString().substr(globals.vlargoTecnico, 1))
		if (globals.digito_verificadorTecnico == 0){
			if (vlegajotecnico_to_tbc_medicos.getSize()>0){
				globals.vOperadorTecnico=vlegajotecnico_to_tbc_medicos.med_apenom;
				if(globals.vClaveTecnico!=vlegajotecnico_to_tbc_medicos.med_clave){
					globals.vPassOperadorTecnico="Clave Incorrecta";
				}else{
					globals.vTipoOperadorTecnico=1
					globals.vTipoTecnico=1
					globals.vIngresoTecnico=true;
					user=true
				}
			}else{
				if(vlegajotecnico_to_tbc_personal_login.getSize()>0){
					globals.vDigVerifTecnico=true
					calculaDigitoVerificadorTecnico()
					if(!globals.vDigVerifTecnico){
						globals.vOperadorTecnico="Digito verificador erroneo";
					}else{
						if(globals.vClaveTecnico!=vlegajotecnico_to_tbc_clave_legajo.hor_perclave){
							globals.vPassOperadorTecnico="Clave Incorrecta";
						}else{
							if(vlegajotecnico_to_tbc_personal_login.per_tipliquid!=2){
								globals.vTipoTecnico=0
							}else{
								globals.vTipoTecnico=1
							}
							globals.vTipoOperadorTecnico=0
							globals.vIngresoTecnico=true;
							user=true
						
						}
					}
				}else{
					if(vlegajotecnico_to_tbc_perext.getSize()>0){
						globals.vOperador=vlegajotecnico_to_tbc_perext.perext_nom;
						if(globals.vClave!=vlegajotecnico_to_tbc_perext.perext_clave){
							globals.vPassOperador="Clave Incorrecta";
						}else{
							globals.vTipoOperadorTecnico=2
							globals.vIngresoTecnico=true;
							user=true
						}
					}else{
						globals.vOperadorTecnico="Operador No Valido";
					}
				}
			}
		}else{
			if(vlegajotecnico_to_tbc_personal_login.getSize()>0){
				globals.vDigVerifTecnico=true
				calculaDigitoVerificadorTecnico()
				if(!globals.vDigVerifTecnico){
					globals.vOperadorTecnico="Digito verificador erroneo";
				}else{
					globals.vOperadorTecnico=vlegajotecnico_to_tbc_personal_login.per_apelnom;
					if(globals.vClaveTecnico!=vlegajotecnico_to_tbc_clave_legajo.hor_perclave){
						globals.vPassOperadorTecnico="Clave Incorrecta";
					}else{
						if(vlegajotecnico_to_tbc_personal_login.per_tipliquid!=2){
								globals.vTipoTecnico=0
						}else{
								globals.vTipoTecnico=1
						}
				  		globals.vTipoOperadorTecnico=0
				  		globals.vIngresoTecnico=true;
				  		user=true
				  	}
				}
			}else{
	    		globals.vOperadorTecnico="Operador No Valido";
	    		
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
	}else{
		elements.clave.requestFocus()
	}
}

/**
 * // TODO generated, please specify type and doc for the params
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"961C69D9-AA07-4F23-9BBE-8FBD4F436635"}
 */
function onAction_cancela(event) {
	//globals.vClose=true
	//application.exit()
	globals.vIngresoTecnico=false;
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
 * @properties={typeid:24,uuid:"F157EC05-ADDF-4B8E-9A91-D777EAE337C1"}
 */
function onAction_legajo(event) {
	//application.output("por aca pasa")
}

/**
 * // TODO generated, please specify type and doc for the params
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"3560E87D-1C94-44BA-AD32-57E608D78023"}
 */
function onFocusLost_legajo(event) {
	if(globals.vLegajoTecnico!=0&&globals.vLegajoTecnico!=null&&globals.vLegajoTecnico!=''){
		globals.vLegaTecnico=globals.vLegajoTecnico
		globals.vlargoTecnico= globals.vLegaTecnico.toString().length - 1;
		if(globals.vlargoTecnico!=0){
			globals.vLegaTecnico=globals.vLegaTecnico.toString().substr(0,globals.vlargoTecnico)
			globals.digito_verificadorTecnico = utils.stringToNumber(globals.vLegajoTecnico.toString().substr(globals.vlargoTecnico, 1))
			if (globals.digito_verificadorTecnico == 0){
				if (vlegajotecnico_to_tbc_medicos.getSize()>0){
					globals.vOperadorTecnico=vlegajotecnico_to_tbc_medicos.med_apenom;
					forms.PideLegajoTecnico.elements.clave.requestFocus()
				}else{
					if(vlegajotecnico_to_tbc_personal_login.getSize()>0){
						globals.vDigVerifTecnico=true
						calculaDigitoVerificadorTecnico()
		    		
						if(!globals.vDigVerifTecnico){
							globals.vOperadorTecnico="Digito verificador erroneo";
							forms.PideLegajoTecnico.elements.legajo.requestFocus()
						}else{
							globals.vOperadorTecnico=vlegajotecnico_to_tbc_personal_login.per_apelnom;
							forms.PideLegajoTecnico.elements.clave.requestFocus()
					    }
					 }else{
					 	if(vlegajotecnico_to_tbc_perext.getSize()>0){
					 		globals.vOperadorTecnico=vlegajotecnico_to_tbc_perext.perext_nom;
					 		forms.PideLegajoTecnico.elements.clave.requestFocus()
						
					 	}else{
					 		globals.vOperadorTecnico="Operador No Valido";
					 		forms.PideLegajoTecnico.elements.legajo.requestFocus()
					 	}
					 }
				}
			}else{
				if(vlegajotecnico_to_tbc_personal_login.getSize()>0){
				   globals.vDigVerifTecnico=true
			       calculaDigitoVerificadorTecnico()
			       if(!globals.vDigVerifTecnico){
			    	   globals.vOperadorTecnico="Digito verificador erroneo";
			    	   forms.PideLegajoTecnico.elements.legajo.requestFocus()
			       }else{
				      globals.vOperadorTecnico=vlegajotecnico_to_tbc_personal_login.per_apelnom;
				      forms.PideLegajoTecnico.elements.clave.requestFocus()
					  
			       }
			    }else{
		    		if(vlegajotecnico_to_tbc_perext.getSize()>0){
		    			globals.vOperadorTecnico=vlegajotecnico_to_tbc_perext.perext_nom;
		    			forms.PideLegajoTecnico.elements.clave.requestFocus()
						
		    		}else{
		    			globals.vOperadorTecnico="Operador No Valido";
		    			forms.PideLegajoTecnico.elements.legajo.requestFocus()
		    		}
		    	}
		    }
		}else{
			
			forms.PideLegajoTecnico.elements.legajo.requestFocus()
		}
	}else{
		
		forms.PideLegajoTecnico.elements.legajo.requestFocus()
	}
	
}

/**
 * @properties={typeid:24,uuid:"8881981B-A24C-49B4-92BD-C3B9935C1651"}
 */
function calculaDigitoVerificadorTecnico() {
	var aux_dig = new Array(5);
	if(globals.vlargoTecnico==2){
		aux_dig[0] = 0
		aux_dig[1] = 0
		aux_dig[2] = 0
		aux_dig[3] = globals.vLegaTecnico.toString().substr(0,1);
		aux_dig[4] = globals.vLegaTecnico.toString().substr(1,1);
	}else{
		if (globals.vlargoTecnico==3){
			aux_dig[0] = 0
			aux_dig[1] = 0
			aux_dig[2] = globals.vLegaTecnico.toString().substr(0,1);
			aux_dig[3] = globals.vLegaTecnico.toString().substr(1,1);
			aux_dig[4] = globals.vLegaTecnico.toString().substr(2,1);
		}else{
			if(globals.vlargoTecnico==4){
				aux_dig[0] = 0
				aux_dig[1] = globals.vLegaTecnico.toString().substr(0,1);
				aux_dig[2] = globals.vLegaTecnico.toString().substr(1,1);
				aux_dig[3] = globals.vLegaTecnico.toString().substr(2,1);
				aux_dig[4] = globals.vLegaTecnico.toString().substr(3,1);
			}else{
				if(globals.vlargoTecnico==5){
					aux_dig[0] = globals.vLegaTecnico.toString().substr(0,1);
					aux_dig[1] = globals.vLegaTecnico.toString().substr(1,1);
					aux_dig[2] = globals.vLegaTecnico.toString().substr(2,1);
					aux_dig[3] = globals.vLegaTecnico.toString().substr(3,1);
					aux_dig[4] = globals.vLegaTecnico.toString().substr(4,1);
				}
			}
		}
	}
	var verificador = 0;
	verificador = utils.stringToNumber(aux_dig[1]) + utils.stringToNumber(aux_dig[2]) * 3 + utils.stringToNumber(aux_dig[3]) * 9 + utils.stringToNumber(aux_dig[4]) * 7;
	var larg = verificador.toString().length - 1;
	if(globals.digito_verificadorTecnico!=verificador.toString().substr(larg,1)){
		globals.vDigVerifTecnico=false
	}

}
