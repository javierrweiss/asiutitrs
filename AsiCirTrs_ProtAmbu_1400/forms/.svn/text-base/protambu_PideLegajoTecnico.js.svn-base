/**
 * // TODO generated, please specify type and doc for the params
 * @param {Object} oldValue
 * @param {Object} newValue
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"3092E6D1-FAA1-4758-BB01-5627BB50F704"}
 */
function onDataChange_legajo(oldValue, newValue, event) {
	if(globals.protambu1400_vLegajoTecnico!=0&&globals.protambu1400_vLegajoTecnico!=null&&globals.protambu1400_vLegajoTecnico!=''){
		globals.protambu1400_vLegaTecnico=globals.protambu1400_vLegajoTecnico
		globals.protambu1400_vlargoTecnico= globals.protambu1400_vLegaTecnico.toString().length - 1;
		if(globals.protambu1400_vlargoTecnico!=0){
			globals.protambu1400_vLegaTecnico=globals.protambu1400_vLegaTecnico.toString().substr(0,globals.protambu1400_vlargoTecnico)
			globals.protambu1400_digito_verificadorTecnico = utils.stringToNumber(globals.protambu1400_vLegajoTecnico.toString().substr(globals.protambu1400_vlargoTecnico, 1))
			if (globals.protambu1400_digito_verificadorTecnico == 0){
				if (protambu1400_vlegajotecnico_to_tbc_medicos.getSize()>0){
					globals.protambu1400_vOperadorTecnico=protambu1400_vlegajotecnico_to_tbc_medicos.med_apenom;
					forms.protambu_PideLegajoTecnico.elements.clave.requestFocus()
					return true
				}else{
					if(protambu1400_vlegajotecnico_to_tbc_personal_login.getSize()>0){
						globals.protambu1400_vDigVerifTecnico=true
						calculaDigitoVerificadorTecnico()
	    		
						if(!globals.protambu1400_vDigVerifTecnico){
							globals.protambu1400_vOperadorTecnico="Digito verificador erroneo";
							return false
						}else{

							globals.protambu1400_vOperadorTecnico=protambu1400_vlegajotecnico_to_tbc_personal_login.per_apelnom;
							forms.protambu_PideLegajoTecnico.elements.clave.requestFocus()
							return true

						}
					}else{
						
						globals.protambu1400_vOperadorTecnico="Operador No Valido";
						return false
						
					}
				}
			}else{
				if(protambu1400_vlegajotecnico_to_tbc_personal_login.getSize()>0){
					globals.protambu1400_vDigVerifTecnico=true
					calculaDigitoVerificadorTecnico()
					if(!globals.protambu1400_vDigVerifTecnico){
						globals.protambu1400_vOperadorTecnico="Digito verificador erroneo";
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
						
							globals.protambu1400_vOperadorTecnico=protambu1400_vlegajotecnico_to_tbc_personal_login.per_apelnom;
							forms.protambu_PideLegajoTecnico.elements.clave.requestFocus()
							return true
							
					}
				}else{
					
					globals.protambu1400_vOperadorTecnico="Operador No Valido";
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
 * @properties={typeid:24,uuid:"E0BAACBC-6EB6-414F-B6AF-C7DB53653267"}
 */
function onDataChange_clave(oldValue, newValue, event) {
	globals.protambu1400_vPassOperadorTecnico=''
	forms.protambu_PideLegajoTecnico.elements.confirma.requestFocus()
	return true
}

/**
 * // TODO generated, please specify type and doc for the params
 * @param {Object} firstShow
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"BE4B37D2-B5B4-492C-A4C3-2E75BD49BBFB"}
 */
function onShow_login(firstShow, event) {
	forms.protambu_PideLegajoTecnico.elements.legajo.requestFocus()
}

/**
 * // TODO generated, please specify type and doc for the params
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"FC1D3889-E9A4-4675-9793-220178A26284"}
 */
function onAction_confirma(event) {
	var user = false;
	globals.protambu1400_vIngresoTecnico=false;
	if(globals.protambu1400_vLegajoTecnico!=0&&globals.protambu1400_vLegajoTecnico!=null){
		globals.protambu1400_vPassOperadorTecnico=''
		globals.protambu1400_vLegaTecnico=globals.protambu1400_vLegajoTecnico
		globals.protambu1400_vlargoTecnico= globals.protambu1400_vLegaTecnico.toString().length - 1;
		globals.protambu1400_vLegaTecnico=globals.protambu1400_vLegaTecnico.toString().substr(0,globals.protambu1400_vlargoTecnico)
		globals.protambu1400_digito_verificadorTecnico = utils.stringToNumber(globals.protambu1400_vLegajoTecnico.toString().substr(globals.protambu1400_vlargoTecnico, 1))
		if (globals.protambu1400_digito_verificadorTecnico == 0){
			if (protambu1400_vlegajotecnico_to_tbc_medicos.getSize()>0){
				globals.protambu1400_vOperadorTecnico=protambu1400_vlegajotecnico_to_tbc_medicos.med_apenom;
				if(globals.protambu1400_vClaveTecnico!=protambu1400_vlegajotecnico_to_tbc_medicos.med_clave){
					globals.protambu1400_vPassOperadorTecnico="Clave Incorrecta";
				}else{
					globals.protambu1400_vTipoOperadorTecnico=1
					globals.protambu1400_vTipoTecnico=1
					globals.protambu1400_vIngresoTecnico=true;
					user=true
				}
			}else{
				if(protambu1400_vlegajotecnico_to_tbc_personal_login.getSize()>0){
					globals.protambu1400_vDigVerifTecnico=true
					calculaDigitoVerificadorTecnico()
					if(!globals.protambu1400_vDigVerifTecnico){
						globals.protambu1400_vOperadorTecnico="Digito verificador erroneo";
					}else{
						if(globals.protambu1400_vClaveTecnico!=protambu1400_vlegajotecnico_to_tbc_clave_legajo.hor_perclave){
							globals.protambu1400_vPassOperadorTecnico="Clave Incorrecta";
						}else{
							if(protambu1400_vlegajotecnico_to_tbc_personal_login.per_tipliquid!=2){
								globals.protambu1400_vTipoTecnico=0
							}else{
								globals.protambu1400_vTipoTecnico=1
							}
							globals.protambu1400_vTipoOperadorTecnico=0
							globals.protambu1400_vIngresoTecnico=true;
							user=true
						
						}
					}
				}else{
					if(protambu1400_vlegajotecnico_to_tbc_perext.getSize()>0){
						globals.vOperador=protambu1400_vlegajotecnico_to_tbc_perext.perext_nom;
						if(globals.vClave!=protambu1400_vlegajotecnico_to_tbc_perext.perext_clave){
							globals.vPassOperador="Clave Incorrecta";
						}else{
							globals.protambu1400_vTipoOperadorTecnico=2
							globals.protambu1400_vIngresoTecnico=true;
							user=true
						}
					}else{
						globals.protambu1400_vOperadorTecnico="Operador No Valido";
					}
				}
			}
		}else{
			if(protambu1400_vlegajotecnico_to_tbc_personal_login.getSize()>0){
				globals.protambu1400_vDigVerifTecnico=true
				calculaDigitoVerificadorTecnico()
				if(!globals.protambu1400_vDigVerifTecnico){
					globals.protambu1400_vOperadorTecnico="Digito verificador erroneo";
				}else{
					globals.protambu1400_vOperadorTecnico=protambu1400_vlegajotecnico_to_tbc_personal_login.per_apelnom;
					if(globals.protambu1400_vClaveTecnico!=protambu1400_vlegajotecnico_to_tbc_clave_legajo.hor_perclave){
						globals.protambu1400_vPassOperadorTecnico="Clave Incorrecta";
					}else{
						if(protambu1400_vlegajotecnico_to_tbc_personal_login.per_tipliquid!=2){
								globals.protambu1400_vTipoTecnico=0
						}else{
								globals.protambu1400_vTipoTecnico=1
						}
				  		globals.protambu1400_vTipoOperadorTecnico=0
				  		globals.protambu1400_vIngresoTecnico=true;
				  		user=true
				  	}
				}
			}else{
	    		globals.protambu1400_vOperadorTecnico="Operador No Valido";
	    		
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
 * @properties={typeid:24,uuid:"CF838D97-B0D8-4CAB-9152-8450D8634CEE"}
 */
function onAction_cancela(event) {
	//globals.vClose=true
	//application.exit()
	globals.protambu1400_vIngresoTecnico=false;
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
 * @properties={typeid:24,uuid:"0C544A9F-6579-4FBD-8869-A472178ED0BA"}
 */
function onAction_legajo(event) {
	//application.output("por aca pasa")
}

/**
 * // TODO generated, please specify type and doc for the params
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"B375F0D6-F2AC-4872-86D1-78D1092AFEC5"}
 */
function onFocusLost_legajo(event) {
	if(globals.protambu1400_vLegajoTecnico!=0&&globals.protambu1400_vLegajoTecnico!=null&&globals.protambu1400_vLegajoTecnico!=''){
		globals.protambu1400_vLegaTecnico=globals.protambu1400_vLegajoTecnico
		globals.protambu1400_vlargoTecnico= globals.protambu1400_vLegaTecnico.toString().length - 1;
		if(globals.protambu1400_vlargoTecnico!=0){
			globals.protambu1400_vLegaTecnico=globals.protambu1400_vLegaTecnico.toString().substr(0,globals.protambu1400_vlargoTecnico)
			globals.protambu1400_digito_verificadorTecnico = utils.stringToNumber(globals.protambu1400_vLegajoTecnico.toString().substr(globals.protambu1400_vlargoTecnico, 1))
			if (globals.protambu1400_digito_verificadorTecnico == 0){
				if (protambu1400_vlegajotecnico_to_tbc_medicos.getSize()>0){
					globals.protambu1400_vOperadorTecnico=protambu1400_vlegajotecnico_to_tbc_medicos.med_apenom;
					forms.protambu_PideLegajoTecnico.elements.clave.requestFocus()
				}else{
					if(protambu1400_vlegajotecnico_to_tbc_personal_login.getSize()>0){
						globals.protambu1400_vDigVerifTecnico=true
						calculaDigitoVerificadorTecnico()
		    		
						if(!globals.protambu1400_vDigVerifTecnico){
							globals.protambu1400_vOperadorTecnico="Digito verificador erroneo";
							forms.protambu_PideLegajoTecnico.elements.legajo.requestFocus()
						}else{
							globals.protambu1400_vOperadorTecnico=protambu1400_vlegajotecnico_to_tbc_personal_login.per_apelnom;
							forms.protambu_PideLegajoTecnico.elements.clave.requestFocus()
					    }
					 }else{
					 	if(protambu1400_vlegajotecnico_to_tbc_perext.getSize()>0){
					 		globals.protambu1400_vOperadorTecnico=protambu1400_vlegajotecnico_to_tbc_perext.perext_nom;
					 		forms.protambu_PideLegajoTecnico.elements.clave.requestFocus()
						
					 	}else{
					 		globals.protambu1400_vOperadorTecnico="Operador No Valido";
					 		forms.protambu_PideLegajoTecnico.elements.legajo.requestFocus()
					 	}
					 }
				}
			}else{
				if(protambu1400_vlegajotecnico_to_tbc_personal_login.getSize()>0){
				   globals.protambu1400_vDigVerifTecnico=true
			       calculaDigitoVerificadorTecnico()
			       if(!globals.protambu1400_vDigVerifTecnico){
			    	   globals.protambu1400_vOperadorTecnico="Digito verificador erroneo";
			    	   forms.protambu_PideLegajoTecnico.elements.legajo.requestFocus()
			       }else{
				      globals.protambu1400_vOperadorTecnico=protambu1400_vlegajotecnico_to_tbc_personal_login.per_apelnom;
				      forms.protambu_PideLegajoTecnico.elements.clave.requestFocus()
					  
			       }
			    }else{
		    		if(protambu1400_vlegajotecnico_to_tbc_perext.getSize()>0){
		    			globals.protambu1400_vOperadorTecnico=protambu1400_vlegajotecnico_to_tbc_perext.perext_nom;
		    			forms.protambu_PideLegajoTecnico.elements.clave.requestFocus()
						
		    		}else{
		    			globals.protambu1400_vOperadorTecnico="Operador No Valido";
		    			forms.protambu_PideLegajoTecnico.elements.legajo.requestFocus()
		    		}
		    	}
		    }
		}else{
			
			forms.protambu_PideLegajoTecnico.elements.legajo.requestFocus()
		}
	}else{
		
		forms.protambu_PideLegajoTecnico.elements.legajo.requestFocus()
	}
	
}

/**
 * @properties={typeid:24,uuid:"21F1717A-6DDF-4D2B-9DF6-ED49227146A6"}
 */
function calculaDigitoVerificadorTecnico() {
	var aux_dig = new Array(5);
	if(globals.protambu1400_vlargoTecnico==2){
		aux_dig[0] = 0
		aux_dig[1] = 0
		aux_dig[2] = 0
		aux_dig[3] = globals.protambu1400_vLegaTecnico.toString().substr(0,1);
		aux_dig[4] = globals.protambu1400_vLegaTecnico.toString().substr(1,1);
	}else{
		if (globals.protambu1400_vlargoTecnico==3){
			aux_dig[0] = 0
			aux_dig[1] = 0
			aux_dig[2] = globals.protambu1400_vLegaTecnico.toString().substr(0,1);
			aux_dig[3] = globals.protambu1400_vLegaTecnico.toString().substr(1,1);
			aux_dig[4] = globals.protambu1400_vLegaTecnico.toString().substr(2,1);
		}else{
			if(globals.protambu1400_vlargoTecnico==4){
				aux_dig[0] = 0
				aux_dig[1] = globals.protambu1400_vLegaTecnico.toString().substr(0,1);
				aux_dig[2] = globals.protambu1400_vLegaTecnico.toString().substr(1,1);
				aux_dig[3] = globals.protambu1400_vLegaTecnico.toString().substr(2,1);
				aux_dig[4] = globals.protambu1400_vLegaTecnico.toString().substr(3,1);
			}else{
				if(globals.protambu1400_vlargoTecnico==5){
					aux_dig[0] = globals.protambu1400_vLegaTecnico.toString().substr(0,1);
					aux_dig[1] = globals.protambu1400_vLegaTecnico.toString().substr(1,1);
					aux_dig[2] = globals.protambu1400_vLegaTecnico.toString().substr(2,1);
					aux_dig[3] = globals.protambu1400_vLegaTecnico.toString().substr(3,1);
					aux_dig[4] = globals.protambu1400_vLegaTecnico.toString().substr(4,1);
				}
			}
		}
	}
	var verificador = 0;
	verificador = utils.stringToNumber(aux_dig[1]) + utils.stringToNumber(aux_dig[2]) * 3 + utils.stringToNumber(aux_dig[3]) * 9 + utils.stringToNumber(aux_dig[4]) * 7;
	var larg = verificador.toString().length - 1;
	if(globals.protambu1400_digito_verificadorTecnico!=verificador.toString().substr(larg,1)){
		globals.protambu1400_vDigVerifTecnico=false
	}

}

/**
 * Handle hide window.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"F0CC583B-9944-41D0-BB43-97C55D7D8BDF"}
 */
function onHide_pidelegajotecnico(event) {
	var name=application.getActiveWindow()
	name.getName()
	var $win=application.getWindow(name.getName())
	if($win!=null){
		$win.hide()
		$win.destroy()
	}
	return true
}
