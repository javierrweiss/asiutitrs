/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"626743F1-4486-4481-9C33-8467854E5416",variableType:-4}
 */
var user = false;
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"6BD29B6A-A1D0-4BE6-AC84-363DC51DE920"}
 */
var frm_ip = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"290EA3B7-29A0-425C-8C6E-1FB82C841508"}
 */
var aux_contrasena = '';

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"9D98B436-68A3-4A4C-9263-2615A574CF71",variableType:8}
 */
var psw_usuario = null;


/**
 * @properties={typeid:24,uuid:"AE32037D-5CE9-4EA2-B968-773FC9FAB10C"}
 */
function cerrarVentana(){
	var name=application.getActiveWindow()
	var $win=application.getWindow(name.getName())
	if($win!=null){
	    $win.hide()
	    $win.destroy()
	} 
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"C80937FF-9BC6-499A-BD31-F2CAF70B3520"}
 */
function onAction_salir(event) {
	var name=application.getActiveWindow()
	var $win=application.getWindow(name.getName())
	if($win!=null){
	    $win.hide()
	    $win.destroy()
	} 
	if (user == false){	
		application.exit()
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
 * @properties={typeid:24,uuid:"07EC415C-7C29-43AB-BC99-3225CD4E95A8"}
 * @AllowToRunInFind
 */
function onDataChange_control_operador(oldValue, newValue, event) {
	if(globals.vLegajo!=0&&globals.vLegajo!=null&&globals.vLegajo!=''){
		globals.vLega=globals.vLegajo
		globals.vlargo= globals.vLega.toString().length - 1;
		if(globals.vlargo!=0){
			globals.vLega=globals.vLega.toString().substr(0,globals.vlargo)
			globals.digito_verificador = utils.stringToNumber(globals.vLegajo.toString().substr(globals.vlargo, 1))
			globals.aux_Legajo = globals.vLegajo
			globals.aux_Lega   = globals.vLega
			if (globals.digito_verificador == 0){				
				if (aux_legajo_to_tbc_medicos.getSize() && aux_legajo_to_tbc_medicos.getSize()>0){
					globals.vOperador=aux_legajo_to_tbc_medicos.med_apenom;
					globals.vEmpresa =0
					elements.ope_password.requestFocus()
					return true
				}else{
					if(aux_legajo_to_tbc_personal_login.getSize()>0){
						globals.vDigVerif=true
						globals.calculaDigitoVerificador_aux()
	    		
						if(!globals.vDigVerif){
							globals.showErrorDialog('Digito Verificador erroneo', null, 'Ok', null, null, null);
						    globals.vLegajo   = null
							globals.vOperador = ''
							globals.vEmpresa  = 0
							globals.vClave    = null
							return false
						}else{
							globals.vOperador=aux_legajo_to_tbc_personal_login.per_apelnom
							globals.vEmpresa =aux_legajo_to_tbc_personal_login.per_empresa
							elements.ope_password.requestFocus()
							return true
						}
					}else{
						if(aux_legajo_to_tbc_perext.getSize()>0){
							globals.vOperador=aux_legajo_to_tbc_perext.perext_nom;
							globals.vEmpresa =0
							elements.ope_password.requestFocus()
							return true
						}else{
							globals.showErrorDialog('Operador No Valido', null, 'Ok', null, null, null);
						    globals.vLegajo   = null
							globals.vOperador = ''
							globals.vEmpresa  = 0
						    globals.vClave    = null	
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
					    globals.vLegajo   = null
						globals.vOperador = ''
						globals.vEmpresa  = 0
					    globals.vClave    = null	
					   	return false
					}else{
						globals.vOperador=aux_legajo_to_tbc_personal_login.per_apelnom;
						globals.vEmpresa =aux_legajo_to_tbc_personal_login.per_empresa;
						elements.ope_password.requestFocus()
							return true
											}
				}else{
					if(aux_legajo_to_tbc_perext.getSize()>0){
						globals.vOperador=aux_legajo_to_tbc_perext.perext_nom;
						globals.vEmpresa =0
						elements.ope_password.requestFocus()
						return true
					}else{
						globals.showErrorDialog('Operador No Valido', null, 'Ok', null, null, null);
					    globals.vLegajo   = null
						globals.vOperador = ''
						globals.vEmpresa  = 0
					    globals.vClave    = null	
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
 * @properties={typeid:24,uuid:"6C420B29-EF7F-4703-94F7-0F79A46EB54A"}
 */
function onAction_ingresar(event) {
		
	user = false    
	if(globals.vLegajo!=0&&globals.vLegajo!=null){
	 	globals.vLega=globals.vLegajo
	   	globals.vlargo= globals.vLega.toString().length - 1; 
	    globals.vLega=globals.vLega.toString().substr(0,globals.vlargo)
	   	globals.digito_verificador = utils.stringToNumber(globals.vLegajo.toString().substr(globals.vlargo, 1))
		globals.aux_Legajo = globals.vLegajo
		globals.aux_Lega   = globals.vLega
	   	if (globals.digito_verificador == 0){
	   		if (aux_legajo_to_tbc_medicos.getSize()>0){
	   			globals.vOperador=aux_legajo_to_tbc_medicos.med_apenom;
	   			globals.vTipoOperador=1
	   			if(psw_login_vlega_to_tbl_clavelega.getSize()>0){
	   				if(globals.psw_Clave_str!= globals.rtrim(psw_login_vlega_to_tbl_clavelega.clave,' ')){
	   					globals.showErrorDialog('Clave incorrecta.', null, 'Ok', null, null, null);
	   			        globals.psw_Clave_str = null
	   			        elements.ope_password.requestFocus()
	   				}else{
	   					user=true
	   				    //application.getWindow('Psw').hide()
	   				    cerrarVentana();
	   				}
	   			}else{
	   				globals.vTipoOperador=1
					if(psw_login_vlega_to_tbl_clavelega.getSize()>0){
						if(globals.psw_Clave_str!= globals.rtrim(psw_login_vlega_to_tbl_clavelega.clave,' ')){
	   		    		globals.showErrorDialog('Clave incorrecta.', null, 'Ok', null, null, null);
	   			        globals.psw_Clave_str = null
	   			        elements.ope_password.requestFocus()
	   				}else{
	   				   user=true
	   				   //application.getWindow('Psw').hide()
	   				   cerrarVentana();
	   				}
					}	
	   			}
	   		}else{
	   	    	if(aux_legajo_to_tbc_personal_login.getSize()>0){
	        	   globals.vDigVerif=true
	   		       globals.calculaDigitoVerificador_aux()
	   		       if(!globals.vDigVerif){
	    		   	  globals.showErrorDialog('Dígito verificador erróneo', null, 'Ok', null, null, null);
   			          globals.psw_Clave_str = null
	    		   }else{
	    			   if(psw_login_vlega_to_tbl_clavelega.getSize()>0){
	    				   globals.vTipoOperador=0
						    if(globals.psw_Clave_str!=globals.rtrim(psw_login_vlega_to_tbl_clavelega.clave,' ')){
	    				globals.showErrorDialog('Clave incorrecta.', null, 'Ok', null, null, null);
	   			        globals.psw_Clave_str = null
	   			        elements.ope_password.requestFocus()
	    			  }else{
	    			    user=true
	    			    //application.getWindow('Psw').hide()
	    			    cerrarVentana();
	    			  }
	    			   }  
	    			}
	    	  	}else{
	    	   		if(aux_legajo_to_tbc_perext.getSize()>0){
	    	   			globals.vOperador=aux_legajo_to_tbc_perext.perext_nom;
	    	   			globals.vEmpresa =0
						if(psw_login_vlega_to_tbl_clavelega.getSize()>0)
							globals.vTipoOperador=2
	    	   			if(globals.psw_Clave_str != globals.rtrim(psw_login_vlega_to_tbl_clavelega.clave,' ')){
	    					globals.showErrorDialog('Clave incorrecta.', null, 'Ok', null, null, null);
		   			        globals.psw_Clave_str = null
		   			        elements.ope_password.requestFocus()
	    				}else{    
	    				    user=true
	    				    //application.getWindow('Psw').hide()
	    				    cerrarVentana();
	    				}
	    	    	}else{
	    	    		globals.showErrorDialog('Operador no válido.', null, 'Ok', null, null, null);
	    	    		globals.vLegajo   = null
						globals.vOperador = ''
						globals.vEmpresa  = 0
	    	    		globals.psw_Clave_str    = null
	    	    	}
	    	    }
    		}
    	}else{
    		if(aux_legajo_to_tbc_personal_login.getSize()>0){
   				globals.vDigVerif=true
   		       globals.calculaDigitoVerificador_aux()
   		       if(!globals.vDigVerif){
   		    	   globals.showErrorDialog('Dígito verificador erróneo.', null, 'Ok', null, null, null);
			       globals.psw_Clave_str = null
   		       }else{
   			      globals.vOperador=aux_legajo_to_tbc_personal_login.per_apelnom;
   			      globals.vEmpresa =aux_legajo_to_tbc_personal_login.per_empresa;
   			      globals.vTipoOperador=0
   			      if(psw_login_vlega_to_tbl_clavelega.getSize()>0){
   			    	  if(globals.psw_Clave_str!=globals.rtrim(psw_login_vlega_to_tbl_clavelega.clave,' ')){
   						globals.showErrorDialog('Clave incorrecta.', null, 'Ok', null, null, null);
	   			        globals.psw_Clave_str = null
	   			        elements.ope_password.requestFocus()
   					}else{
   						user=true
   					   // application.getWindow('Psw').hide()
   					   cerrarVentana();
   					}
   			      }
   		       }
   	    	}else{
   	    		if(aux_legajo_to_tbc_perext.getSize()>0){
   	    			globals.vOperador=aux_legajo_to_tbc_perext.perext_nom;
					if(psw_login_vlega_to_tbl_clavelega.getSize()>0){
						globals.vEmpresa =0
						globals.vTipoOperador=2
						if(globals.psw_Clave_str!= globals.rtrim(psw_login_vlega_to_tbl_clavelega.clave,' ')){
   						globals.showErrorDialog('Clave incorrecta.', null, 'Ok', null, null, null);
	   			        globals.vClave = null
	   			        elements.ope_password.requestFocus()
   					}else{	
   					    user=true
   					   // application.getWindow('Psw').hide()
   					   cerrarVentana()
   					}
					}
   	    		}else{
   	    			globals.showErrorDialog('Operador no válido.', null, 'Ok', null, null, null);
   	    			globals.vLegajo = null
					globals.vOperador = ''
   	    			globals.psw_Clave_str = null
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
 * @properties={typeid:24,uuid:"BEB8ED7D-D1C7-44A3-8E8B-95984622E42D"}
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
 * @properties={typeid:24,uuid:"B5C7418B-1310-48AE-AA28-EC1B4C67EB33"}
 */
function onShow_iniciar(firstShow, event) {
	controller.focusFirstField()
	globals.psw_Clave_str  = null
	globals.vLegajo = null
	globals.vOperador= null
	frm_ip = application.getIPAddress() 
}
