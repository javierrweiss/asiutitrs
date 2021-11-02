/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"4FD38BF3-DA55-42BB-B74A-C94E5E766AFE"}
 */
var frm_ip = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"F8CDF784-A12B-42F0-AAA2-295DF94388E4"}
 */
var aux_contrasena = '';

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"8E953C92-EC71-4D35-9F32-56B7D2D8AB9E",variableType:8}
 */
var psw_usuario = null;

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"D644EB03-0BFF-49B9-9868-D8B271E57C60"}
 */
function onAction_salir(event) {
	var name=application.getActiveWindow()
	var $win=application.getWindow(name.getName())
	if($win!=null){
	    $win.hide()
	    $win.destroy()
	}
}
/**
 * Handle changed data.
 *
 * @param {String} oldValue old value
 * @param {String} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"A534B2F4-5568-48C6-A461-68A18DAA153F"}
 * @AllowToRunInFind
 */
function onDataChange_control_operador(oldValue, newValue, event) {
	if(globals.gbl_Legajo_ac !=0&&globals.gbl_Legajo_ac !=null&&globals.gbl_Legajo_ac !=''){
		globals.gbl_Lega_ac=globals.gbl_Legajo_ac
		globals.vlargo= globals.gbl_Lega_ac.toString().length - 1;
		if(globals.vlargo!=0){
			globals.gbl_Lega_ac=globals.gbl_Lega_ac.toString().substr(0,globals.vlargo)
			globals.digito_verificador = utils.stringToNumber(globals.gbl_Legajo_ac.toString().substr(globals.vlargo, 1))
			globals.aux_Legajo = globals.gbl_Legajo_ac
			globals.aux_Lega   = globals.gbl_Lega_ac
			if (globals.digito_verificador == 0){
				if (aux_legajo_to_tbc_medicos.getSize()>0){
					globals.gbl_nombre_legajo_ac=aux_legajo_to_tbc_medicos.med_apenom;
					globals.gbl_Empresa_ac =0
					elements.ope_password.requestFocus()
					return true
				}else{
					if(aux_legajo_to_tbc_personal_login.getSize()>0){
						globals.vDigVerif=true
						globals.calculaDigitoVerificador_aux()
	    		
						if(!globals.vDigVerif){
							globals.showErrorDialog('Digito Verificador erroneo', null, 'Ok', null, null, null);
						    globals.gbl_Legajo_ac        = null
							globals.gbl_nombre_legajo_ac = ''
							globals.gbl_Empresa_ac       = 0
							globals.gbl_password_ac      = null
							return false
						}else{
							globals.gbl_nombre_legajo_ac =aux_legajo_to_tbc_personal_login.per_apelnom
							globals.gbl_Empresa_ac =aux_legajo_to_tbc_personal_login.per_empresa
							elements.ope_password.requestFocus()
							return true
						}
					}else{
						if(aux_legajo_to_tbc_perext.getSize()>0){
							globals.gbl_nombre_legajo_ac=aux_legajo_to_tbc_perext.perext_nom;
							globals.gbl_Empresa_ac =0
							elements.ope_password.requestFocus()
							return true
						}else{
							globals.showErrorDialog('Operador No Valido', null, 'Ok', null, null, null);
						    globals.gbl_Legajo_ac        = null
							globals.gbl_nombre_legajo_ac = ''
							globals.gbl_Empresa_ac       = 0
						    globals.gbl_password_ac      = null	
							return false
						}
					}
				}
			}else{
				if(aux_legajo_to_tbc_personal_login.getSize()>0){
					globals.vDigVerif=true
					globals.calculaDigitoVerificador_aux()
					if(!globals.vDigVerif){
						globals.showErrorDialog('Digito Verificador erroneo', null, 'Ok', null, null, null);
					    globals.gbl_Legajo_ac        = null
						globals.gbl_nombre_legajo_ac = ''
						globals.gbl_Empresa_ac       = 0
					    globals.gbl_password_ac      = null	
					   	return false
					}else{
						globals.gbl_nombre_legajo_ac=aux_legajo_to_tbc_personal_login.per_apelnom;
						globals.gbl_Empresa_ac =aux_legajo_to_tbc_personal_login.per_empresa;
						elements.ope_password.requestFocus()
						return true
											}
				}else{
					if(aux_legajo_to_tbc_perext.getSize()>0){
						globals.gbl_nombre_legajo_ac=aux_legajo_to_tbc_perext.perext_nom;
						globals.gbl_Empresa_ac =0
						elements.ope_password.requestFocus()
						return true
					}else{
						globals.showErrorDialog('Operador No Valido', null, 'Ok', null, null, null);
					    globals.gbl_Legajo_ac        = null
						globals.gbl_nombre_legajo_ac = ''
						globals.gbl_Empresa_ac       = 0
					    globals.gbl_password_ac      = null	
					   	return false
					}
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
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"77530920-1ADE-42D2-875E-A85A550309C0"}
 */
function onAction_ingresar(event) {
		
	globals.gbl_user = false  
	if(globals.gbl_Legajo_ac!=0 &&globals.gbl_Legajo_ac!=null){
	 	globals.gbl_Lega_ac=globals.gbl_Legajo_ac
	   	globals.vlargo=globals.gbl_Lega_ac.toString().length - 1; 
	    globals.gbl_Lega_ac=globals.gbl_Lega_ac.toString().substr(0,globals.vlargo)
	   	globals.digito_verificador = utils.stringToNumber(globals.gbl_Legajo_ac.toString().substr(globals.vlargo, 1))
		globals.aux_Legajo = globals.gbl_Legajo_ac
		globals.aux_Lega   = globals.gbl_Lega_ac
	   	if (globals.digito_verificador == 0){
	   		if (aux_legajo_to_tbc_medicos.getSize()>0){
	   			globals.gbl_nombre_legajo_ac=aux_legajo_to_tbc_medicos.med_apenom;
	   			if(aux_legajo_to_tbc_medicos.med_clave!=0){
	   				if(globals.gbl_password_ac!=aux_legajo_to_tbc_medicos.med_clave){
	   					globals.showErrorDialog('Clave Incorrecta.', null, 'Ok', null, null, null);
	   			        globals.gbl_password_ac = null
	   			        elements.ope_password.requestFocus()
	   				}else{
	   					globals.gbl_tipo_Legajo_ac=1
	   					globals.gbl_user=true
	   				    application.getWindow('Legajo').hide()
	   				}
	   			}else{
	   		    	if(globals.gbl_password_ac!=aux_legajo1_to_tbc_clave_legajo.hor_perclave){
	   		    		globals.showErrorDialog('Clave Incorrecta.', null, 'Ok', null, null, null);
	   			        globals.gbl_password_ac = null
	   			        elements.ope_password.requestFocus()
	   				}else{
	   				   globals.gbl_tipo_Legajo_ac=1
	   				   globals.gbl_user=true
	   				   application.getWindow('Legajo').hide()
	   				}
	   			}
	   		}else{
	   	    	if(aux_legajo_to_tbc_personal_login.getSize()>0){
	        	   globals.vDigVerif=true
	   		       globals.calculaDigitoVerificador_aux()
	   		       if(!globals.vDigVerif){
	    		   	  globals.showErrorDialog('Digito Verificador erroneo', null, 'Ok', null, null, null);
   			          globals.gbl_password_ac = null
	    		   }else{
	    		      if(globals.gbl_password_ac!=aux_legajo_to_tbc_clave_legajo.hor_perclave){
	    				globals.showErrorDialog('Clave Incorrecta.', null, 'Ok', null, null, null);
	   			        globals.gbl_password_ac = null
	   			        elements.ope_password.requestFocus()
	    			  }else{
	    				globals.gbl_tipo_Legajo_ac=0
	    			    globals.gbl_user=true
	    			    application.getWindow('Legajo').hide()
	    			  }
	    			}
	    	  	}else{
	    	   		if(aux_legajo_to_tbc_perext.getSize()>0){
	    	   			globals.gbl_nombre_legajo_ac=aux_legajo_to_tbc_perext.perext_nom;
	    	   			globals.gbl_Empresa_ac =0
	    	   			if(globals.gbl_Legajo_ac!=aux_legajo_to_tbc_perext.perext_clave){
	    					globals.showErrorDialog('Clave Incorrecta.', null, 'Ok', null, null, null);
		   			        globals.gbl_password_ac = null
		   			        elements.ope_password.requestFocus()
	    				}else{
	    	    		    globals.gbl_tipo_Legajo_ac=2
	    				    globals.gbl_user=true
	    				    application.getWindow('Legajo').hide()
	    				}
	    	    	}else{
	    	    		globals.showErrorDialog('Operador No Valido.', null, 'Ok', null, null, null);
	    	    		globals.gbl_Legajo_ac        = null
						globals.gbl_nombre_legajo_ac = ''
						globals.gbl_Empresa_ac       = 0
	    	    		globals.gbl_password_ac      = null
	    	    	}
	    	    }
    		}
    	}else{
    		if(aux_legajo_to_tbc_personal_login.getSize()>0){
   				globals.vDigVerif=true
   		       globals.calculaDigitoVerificador_aux()
   		       if(!globals.vDigVerif){
   		    	   globals.showErrorDialog('Digito Verificaro erroneo.', null, 'Ok', null, null, null);
			       globals.gbl_password_ac = null
   		       }else{
   			      globals.gbl_nombre_legajo_ac=aux_legajo_to_tbc_personal_login.per_apelnom;
   			      globals.gbl_Empresa_ac =aux_legajo_to_tbc_personal_login.per_empresa;
   			      if(globals.gbl_password_ac!=aux_legajo_to_tbc_clave_legajo.hor_perclave){
   						globals.showErrorDialog('Clave Incorrecta.', null, 'Ok', null, null, null);
	   			        globals.gbl_password_ac = null
	   			        elements.ope_password.requestFocus()
   					}else{
   						globals.gbl_tipo_Legajo_ac=0
   						globals.gbl_user=true
   					    application.getWindow('Legajo').hide()
   					}
   		       }
   	    	}else{
   	    		if(aux_legajo_to_tbc_perext.getSize()>0){
   	    			globals.gbl_nombre_legajo_ac=aux_legajo_to_tbc_perext.perext_nom;
   	    			globals.gbl_Empresa_ac =0
   	    			if(globals.gbl_password_ac !=aux_legajo_to_tbc_perext.perext_clave){
   						globals.showErrorDialog('Clave Incorrecta.', null, 'Ok', null, null, null);
	   			        globals.gbl_password_ac = null
	   			        elements.ope_password.requestFocus()
   					}else{
   						globals.gbl_tipo_Legajo_ac=2
   					    globals.gbl_user=true
   					    application.getWindow('Legajo').hide()
   					}
   	    		}else{
   	    			globals.showErrorDialog('Operador No Valido.', null, 'Ok', null, null, null);
   	    			globals.gbl_Legajo_ac        = null
					globals.gbl_nombre_legajo_ac = ''
   	    			globals.gbl_password_ac      = null
   	    		}
   	    	}
    	}
	}
}

/**
 * Handle changed data.
 *
 * @param {String} oldValue old value
 * @param {String} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"4F463FD4-C723-4C6B-A0D9-80DE0CEFC5E7"}
 */
function onDataChange_control_contrasena(oldValue, newValue, event) {
    elements.btn_ingresar.requestFocus()
	return true
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"69648E30-D80D-495F-8D07-D5A1F563E485"}
 */
function onShow_iniciar(firstShow, event) {
	controller.focusFirstField()
	globals.gbl_Legajo_ac   = null
	globals.gbl_password_ac = null
	frm_ip = application.getIPAddress()
}
