/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"3832D440-69FD-4B36-9EB4-8BC527D62D6A",variableType:4}
 */
var vSectorReport = 0;

/**
 * @param {Number} usuario
 * @param {Number} pass
 * @param {String} grupo
 * 
 * @properties={typeid:24,uuid:"00802193-B793-40A5-90E3-607856C33ACB"}
 * @AllowToRunInFind
 */
function login(usuario, pass, grupo) {
	var user = false;
	if(usuario!=0&&usuario!=null){
	globals.vPassOperador=''
	globals.vLegajo=usuario
	globals.vClave=pass
	globals.vLega=globals.vLegajo
	globals.vlargo= globals.vLega.toString().length - 1;
    globals.vLega=utils.stringToNumber(globals.vLega.toString().substr(0,globals.vlargo))
	globals.digito_verificador = utils.stringToNumber(globals.vLegajo.toString().substr(globals.vlargo, 1))
	if (globals.digito_verificador == 0){
		if (vlegajo_to_tbc_medicos.getSize()>0){
			globals.vOperador=vlegajo_to_tbc_medicos.med_apenom;
			if(vlegajo_to_tbc_medicos.med_clave!=0){
				if(globals.vClave!=vlegajo_to_tbc_medicos.med_clave){
					globals.vPassOperador="Clave Incorrecta";
					return 0
				}else{
					globals.vTipoOperador=1
				}
			}else{
		    	if(globals.vClave!=vlegajo1_to_tbc_clave_legajo.hor_perclave){
		    		globals.vPassOperador="Clave Incorrecta";
		    		return 0
				}else{
				   globals.vTipoOperador=1
				   user=true
				}
			}
		}else{
	    	if(vlegajo_to_tbc_personal_login.getSize()>0){
	    		globals.vDigVerif=true
		       globals.calculaDigitoVerificador()
		       if(!globals.vDigVerif){
		    	   globals.vOperador="Digito verificador erroneo";
		    	   return 0
		       }else{
		    	   if(globals.vClave!=vlegajo_to_tbc_clave_legajo.hor_perclave){
						globals.vPassOperador="Clave Incorrecta";
						return 0
					}else{
					   globals.vTipoOperador=0
					   user=true
					}
			   }
	    	}else{
	    		if(vlegajo_to_tbc_perext.getSize()>0){
	    			globals.vOperador=vlegajo_to_tbc_perext.perext_nom;
	    			if(globals.vClave!=vlegajo_to_tbc_perext.perext_clave){
						globals.vPassOperador="Clave Incorrecta";
						return 0
					}else{
						globals.vTipoOperador=2
					   user=true
					}
	    		}else{
	    			globals.vOperador="Operador No Valido";
	    			return 0
	    		}
	    	}
		}
	}else{
		if(vlegajo_to_tbc_personal_login.getSize()>0){
				globals.vDigVerif=true
		       globals.calculaDigitoVerificador()
		       if(!globals.vDigVerif){
		    	   globals.vOperador="Digito verificador erroneo";
		    	   return 0
		       }else{
			      globals.vOperador=vlegajo_to_tbc_personal_login.per_apelnom;
			      if(globals.vClave!=vlegajo_to_tbc_clave_legajo.hor_perclave){
						globals.vPassOperador="Clave Incorrecta";
						return 0
					}else{
						globals.vTipoOperador=0
						user=true
					}
		       }
	    	}else{
	    		if(vlegajo_to_tbc_perext.getSize()>0){
	    			globals.vOperador=vlegajo_to_tbc_perext.perext_nom;
	    			if(globals.vClave!=vlegajo_to_tbc_perext.perext_clave){
						globals.vPassOperador="Clave Incorrecta";
						return 0
					}else{
						globals.vTipoOperador=2
					   user=true
					}
	    		}else{
	    			globals.vOperador="Operador No Valido";
	    			return 0
	    		}
	    	}
	}
	}	
	
	var $grupos = [grupo]
	var usuario_login = application.getSolutionName()
	if (security.login(usuario_login,1,$grupos) == false){
	//if (security.login('usuario',1,$grupos) == false){
		return 0
	}

	return 1
}

/**
 *  @param {Number} usuario
 * @properties={typeid:24,uuid:"97CC8EB3-F4DE-4596-B347-93FEE09A9D0D"}
 */
function loginUser(usuario) {
	globals.vPassOperador=''
	globals.vLegajo=usuario
	globals.vLega=globals.vLegajo
	globals.vlargo= globals.vLega.toString().length - 1;
    globals.vLega=utils.stringToNumber(globals.vLega.toString().substr(0,globals.vlargo))
	globals.digito_verificador = utils.stringToNumber(globals.vLegajo.toString().substr(globals.vlargo, 1))
	if (globals.digito_verificador == 0){
		if (vlegajo_to_tbc_medicos.getSize()>0){
			globals.vOperador=vlegajo_to_tbc_medicos.med_apenom;
			
		}else{
	    	if(vlegajo_to_tbc_personal_login.getSize()>0){
	    		globals.vDigVerif=true
		       globals.calculaDigitoVerificador()
		       if(!globals.vDigVerif){
		    	   globals.vOperador="Digito verificador erroneo";
		    	   return 0
		       }
	    	}else{
	    		if(vlegajo_to_tbc_perext.getSize()>0){
	    			globals.vOperador=vlegajo_to_tbc_perext.perext_nom;
	    		}else{
	    			globals.vOperador="Operador No Valido";
	    			return 0
	    		}
	    	}
		}
	}else{
		if(vlegajo_to_tbc_personal_login.getSize()>0){
				globals.vDigVerif=true
		       globals.calculaDigitoVerificador()
		       if(!globals.vDigVerif){
		    	   globals.vOperador="Digito verificador erroneo";
		    	   return 0
		       }else{
			      globals.vOperador=vlegajo_to_tbc_personal_login.per_apelnom;
		       }
	    	}else{
	    		if(vlegajo_to_tbc_perext.getSize()>0){
	    			globals.vOperador=vlegajo_to_tbc_perext.perext_nom;
	    		}else{
	    			globals.vOperador="Operador No Valido";
	    			return 0
	    		}
	    	}
	}
    var myArray = new Array()
    myArray[0]=globals.vOperador
	
    return myArray[0]
}

/**
 *   @param {Number} usuario
* @param {Number} pass
* 
 * @properties={typeid:24,uuid:"F780BCB2-4377-4865-806C-2BEE8291E6F2"}
 */
function loginPass(usuario, pass) {
	if(pass!=0&&pass!=null&&usuario!=0&&usuario!=null){
		globals.vPassOperador=''
		globals.vLegajo=usuario
		globals.vClave=pass
		globals.vLega=globals.vLegajo
		globals.vlargo= globals.vLega.toString().length - 1;
	    globals.vLega=utils.stringToNumber(globals.vLega.toString().substr(0,globals.vlargo))
		globals.digito_verificador = utils.stringToNumber(globals.vLegajo.toString().substr(globals.vlargo, 1))
		if (globals.digito_verificador == 0){
			if (vlegajo_to_tbc_medicos.getSize()>0){
				globals.vOperador=vlegajo_to_tbc_medicos.med_apenom;
				if(vlegajo_to_tbc_medicos.med_clave!=0){
					if(globals.vClave!=vlegajo_to_tbc_medicos.med_clave){
						//"Clave Incorrecta";
						return 0
					}
				}else{
			    	if(globals.vClave!=vlegajo1_to_tbc_clave_legajo.hor_perclave){
			    		//"Clave Incorrecta";
			    		return 0
					}
				}
			}else{
		    	if(vlegajo_to_tbc_personal_login.getSize()>0){
		    		globals.vDigVerif=true
			       globals.calculaDigitoVerificador()
			       if(!globals.vDigVerif){
			    	   //globals.vOperador="Digito verificador erroneo";
			    	   return 0
			       }else{
			    	   if(globals.vClave!=vlegajo_to_tbc_clave_legajo.hor_perclave){
							//"Clave Incorrecta";
							return 0
						}
				   }
		    	}else{
		    		if(vlegajo_to_tbc_perext.getSize()>0){
		    			globals.vOperador=vlegajo_to_tbc_perext.perext_nom;
		    			if(globals.vClave!=vlegajo_to_tbc_perext.perext_clave){
							//"Clave Incorrecta";
							return 0
						}
		    		}else{
		    			//globals.vOperador="Operador No Valido";
		    			return 0
		    		}
		    	}
			}
		}else{
			if(vlegajo_to_tbc_personal_login.getSize()>0){
					globals.vDigVerif=true
			       globals.calculaDigitoVerificador()
			       if(!globals.vDigVerif){
			    	   //globals.vOperador="Digito verificador erroneo";
			    	   return 0
			       }else{
				      globals.vOperador=vlegajo_to_tbc_personal_login.per_apelnom;
				      if(globals.vClave!=vlegajo_to_tbc_clave_legajo.hor_perclave){
							//globals.vPassOperador="Clave Incorrecta";
							return 0
					   }
			       }
		    	}else{
		    		if(vlegajo_to_tbc_perext.getSize()>0){
		    			globals.vOperador=vlegajo_to_tbc_perext.perext_nom;
		    			if(globals.vClave!=vlegajo_to_tbc_perext.perext_clave){
							//globals.vPassOperador="Clave Incorrecta";
							return 0
						}
		    		}else{
		    			//globals.vOperador="Operador No Valido";
		    			return 0
		    		}
		    	}
		}
	    return 1
	}else{
		return 0
	}
}
