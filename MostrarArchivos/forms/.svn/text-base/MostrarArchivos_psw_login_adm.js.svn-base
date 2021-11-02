/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"927248B0-69F6-489B-A2FD-0B7AA1A76687",variableType:-4}
 */
var user = false;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"02FCA5C9-E6ED-49B1-9F8D-AA5F1AF70207"}
 */
var frm_ip = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"B4481290-1A4C-488D-AA4A-8829FCDCF3AF"}
 */
var aux_contrasena = '';

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"F12D0D34-CC78-4CBF-BB99-32D8EEBA2FEE",variableType:8}
 */
var psw_usuario = null;

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"02A50CA3-6483-43EE-87F4-23E66F88488E"}
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
 * @properties={typeid:24,uuid:"5D4F4682-E1B6-40FA-884F-D30A645AE8BE"}
 * @AllowToRunInFind
 */
function onDataChange_control_operador(oldValue, newValue, event) {
	if(globals.MostrarArchivos_vLegajo!=0&&globals.MostrarArchivos_vLegajo!=null&&globals.MostrarArchivos_vLegajo!=''){
		globals.MostrarArchivos_vLega=globals.MostrarArchivos_vLegajo
		globals.MostrarArchivos_vlargo= globals.MostrarArchivos_vLega.toString().length - 1;
		if(globals.MostrarArchivos_vlargo!=0){
			globals.MostrarArchivos_vLega=globals.MostrarArchivos_vLega.toString().substr(0,globals.MostrarArchivos_vlargo)
			globals.MostrarArchivos_digito_verificador = utils.stringToNumber(globals.MostrarArchivos_vLegajo.toString().substr(globals.MostrarArchivos_vlargo, 1))
			if (globals.MostrarArchivos_digito_verificador == 0){
				if (mostrararchivos_vlegajo_to_tbc_medicos.getSize()>0){
					globals.MostrarArchivos_vOperador=mostrararchivos_vlegajo_to_tbc_medicos.med_apenom;
					globals.MostrarArchivos_vEmpresa =0
					forms.MostrarArchivos_psw_login_adm.elements.ope_password.requestFocus()
					return true
				}else{
					if(mostrararchivos_vlegajo_to_tbc_personal_login.getSize()>0){
						globals.MostrarArchivos_vDigVerif=true
						globals.MostrarArchivos_calculaDigitoVerificador()
	    		
						if(!globals.MostrarArchivos_vDigVerif){
							globals.DIALOGS.showErrorDialog("Error en ingreso de Legajo",'Digito Verificador erroneo','Ok');
						    globals.MostrarArchivos_vLegajo   = null
							globals.MostrarArchivos_vOperador = ''
							globals.MostrarArchivos_vEmpresa  = 0
							globals.MostrarArchivos_vClave    = null
							return false
						}else{
							globals.MostrarArchivos_vOperador=mostrararchivos_vlegajo_to_tbc_personal_login.per_apelnom
							globals.MostrarArchivos_vEmpresa =mostrararchivos_vlegajo_to_tbc_personal_login.per_empresa
							forms.MostrarArchivos_psw_login_adm.elements.ope_password.requestFocus()
							return true
						}
					}else{
						if(mostrararchivos_vlegajo_to_tbc_perext.getSize()>0){
							globals.MostrarArchivos_vOperador=mostrararchivos_vlegajo_to_tbc_perext.perext_nom;
							globals.MostrarArchivos_vEmpresa =0
							forms.MostrarArchivos_psw_login_adm.elements.ope_password.requestFocus()
							return true
						}else{
							globals.DIALOGS.showErrorDialog("Error en ingreso de Legajo",'Operador No Valido','Ok');
							globals.MostrarArchivos_vLegajo   = null
							globals.MostrarArchivos_vOperador = ''
							globals.MostrarArchivos_vEmpresa  = 0
						    globals.MostrarArchivos_vClave    = null	
							return false
						}
					}
				}
			}else{
				if(mostrararchivos_vlegajo_to_tbc_personal_login.getSize()>0){
					globals.MostrarArchivos_vDigVerif=true
					globals.MostrarArchivos_calculaDigitoVerificador()
					if(!globals.MostrarArchivos_vDigVerif){
						globals.DIALOGS.showErrorDialog("Error en ingreso de Legajo",'Digito Verificador erroneo','Ok');
						globals.MostrarArchivos_vLegajo   = null
						globals.MostrarArchivos_vOperador = ''
						globals.MostrarArchivos_vEmpresa  = 0
					    globals.MostrarArchivos_vClave    = null	
					   	return false
					}else{
						globals.MostrarArchivos_vOperador=mostrararchivos_vlegajo_to_tbc_personal_login.per_apelnom;
						globals.MostrarArchivos_vEmpresa =mostrararchivos_vlegajo_to_tbc_personal_login.per_empresa;
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
									forms.LoginCirugia.elements.clave.requestFocus()
									return true
								}
							}
							*/
						    forms.MostrarArchivos_psw_login_adm.elements.ope_password.requestFocus()
							return true
											}
				}else{
					if(mostrararchivos_vlegajo_to_tbc_perext.getSize()>0){
						globals.MostrarArchivos_vOperador=mostrararchivos_vlegajo_to_tbc_perext.perext_nom;
						globals.MostrarArchivos_vEmpresa =0
						forms.MostrarArchivos_psw_login_adm.elements.ope_password.requestFocus()
						return true
					}else{
						globals.DIALOGS.showErrorDialog("Error en ingreso de Legajo",'Operador No Valido','Ok');
						globals.MostrarArchivos_vLegajo   = null
						globals.MostrarArchivos_vOperador = ''
						globals.MostrarArchivos_vEmpresa  = 0
					    globals.MostrarArchivos_vClave    = null	
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
 * @properties={typeid:24,uuid:"12259FBA-C706-41F2-8A6C-F360888A3792"}
 */
function onAction_ingresar(event) {
	var win = null;	
	var name = '';
	var $win = null;
	user = false;    
	if(globals.MostrarArchivos_vLegajo!=0&&globals.MostrarArchivos_vLegajo!=null){
	 	globals.MostrarArchivos_vLega=globals.MostrarArchivos_vLegajo
	   	globals.MostrarArchivos_vlargo= globals.MostrarArchivos_vLega.toString().length - 1; 
	    globals.MostrarArchivos_vLega=globals.MostrarArchivos_vLega.toString().substr(0,globals.MostrarArchivos_vlargo)
	   	globals.MostrarArchivos_digito_verificador = utils.stringToNumber(globals.MostrarArchivos_vLegajo.toString().substr(globals.MostrarArchivos_vlargo, 1))
	   	if (globals.MostrarArchivos_digito_verificador == 0){
	   		if (mostrararchivos_vlegajo_to_tbc_medicos.getSize()>0){
	   			globals.MostrarArchivos_vOperador=mostrararchivos_vlegajo_to_tbc_medicos.med_apenom;
	   			if(mostrararchivos_vlegajo_to_tbc_medicos.med_clave!=0){
	   				if(globals.MostrarArchivos_vClave!=mostrararchivos_vlegajo_to_tbc_medicos.med_clave){
	   					globals.DIALOGS.showErrorDialog("Error en ingreso de Clave",'Clave Incorrecta','Ok');
	   					globals.MostrarArchivos_vClave = null
	   			        elements.ope_password.requestFocus()
	   				}else{
	   					globals.MostrarArchivos_vTipoOperador=1
	   					user=true
						name=application.getActiveWindow()
						$win=application.getWindow(name.getName())
						if($win!=null){
						    $win.hide()
						    $win.destroy()
						} 
						win = application.createWindow("MuestraArchivos",JSWindow.MODAL_DIALOG)	
						win.resizable = false
						win.title = 'Visor de Archivos'
						win.show(forms.MostrarArchivos_frm_link_tab)
						//forms.MostrarArchivos_frm_link_tab.controller.show()
	   				}
	   			}else{
	   		    	if(globals.MostrarArchivos_vClave!=mostrararchivos_vlegajo1_to_tbc_clave_legajo.hor_perclave){
	   		    		globals.DIALOGS.showErrorDialog("Error en ingreso de Clave",'Clave Incorrecta','Ok');
	   			        globals.MostrarArchivos_vClave = null
	   			        elements.ope_password.requestFocus()
	   				}else{
	   				   globals.MostrarArchivos_vTipoOperador=1
	   				   user=true
					   name=application.getActiveWindow()
						$win=application.getWindow(name.getName())
						if($win!=null){
						    $win.hide()
						    $win.destroy()
						} 
					    win = application.createWindow("MuestraArchivos",JSWindow.MODAL_DIALOG)	
						win.resizable = false
						win.title = 'Visor de Archivos'
						win.show(forms.MostrarArchivos_frm_link_tab)
						//forms.MostrarArchivos_frm_link_tab.controller.show()
	   				}
	   			}
	   		}else{
	   	    	if(mostrararchivos_vlegajo_to_tbc_personal_login.getSize()>0){
	        	   globals.MostrarArchivos_vDigVerif=true
	   		       globals.MostrarArchivos_calculaDigitoVerificador()
	   		       if(!globals.MostrarArchivos_vDigVerif){
	   		    	  globals.DIALOGS.showErrorDialog("Error en ingreso de Legajo",'Digito Verificador erroneo','Ok');
	    		   	  globals.MostrarArchivos_vClave = null
	    		   }else{
	    		      if(globals.MostrarArchivos_vClave!=mostrararchivos_vlegajo_to_tbc_clave_legajo.hor_perclave){
	    		    	globals.DIALOGS.showErrorDialog("Error en ingreso de Clave",'Clave Incorrecta','Ok');
	    				globals.MostrarArchivos_vClave = null
	   			        elements.ope_password.requestFocus()
	    			  }else{
	    				globals.MostrarArchivos_vTipoOperador=0
	    			    user=true
						name=application.getActiveWindow()
						$win=application.getWindow(name.getName())
						if($win!=null){
						    $win.hide()
						    $win.destroy()
						} 
						win = application.createWindow("MuestraArchivos",JSWindow.MODAL_DIALOG)	
						win.resizable = false
						win.title = 'Visor de Archivos'
						win.show(forms.MostrarArchivos_frm_link_tab)
						//forms.MostrarArchivos_frm_link_tab.controller.show()
	    			  }
	    			}
	    	  	}else{
	    	   		if(mostrararchivos_vlegajo_to_tbc_perext.getSize()>0){
	    	   			globals.MostrarArchivos_vOperador=mostrararchivos_vlegajo_to_tbc_perext.perext_nom;
	    	   			globals.MostrarArchivos_vEmpresa =0
	    	   			if(globals.MostrarArchivos_vClave!=mostrararchivos_vlegajo_to_tbc_perext.perext_clave){
	    	   				globals.DIALOGS.showErrorDialog("Error en ingreso de Clave",'Clave Incorrecta','Ok');
		   			        globals.MostrarArchivos_vClave = null
		   			        elements.ope_password.requestFocus()
	    				}else{
	    	    		    globals.MostrarArchivos_vTipoOperador=2
	    				    user=true
							name=application.getActiveWindow()
							$win=application.getWindow(name.getName())
							if($win!=null){
							    $win.hide()
							    $win.destroy()
							} 
							win = application.createWindow("MuestraArchivos",JSWindow.MODAL_DIALOG)	
							win.resizable = false
							win.title = 'Visor de Archivos'
							win.show(forms.MostrarArchivos_frm_link_tab)
							//forms.MostrarArchivos_frm_link_tab.controller.show()
	    				}
	    	    	}else{
	    	    		globals.DIALOGS.showErrorDialog("Error en ingreso de Legajo",'Digito Verificador erroneo','Ok');
	    	    		globals.MostrarArchivos_vLegajo   = null
						globals.MostrarArchivos_vOperador = ''
						globals.MostrarArchivos_vEmpresa  = 0
	    	    		globals.MostrarArchivos_vClave    = null
	    	    	}
	    	    }
    		}
    	}else{
    		if(mostrararchivos_vlegajo_to_tbc_personal_login.getSize()>0){
   				globals.MostrarArchivos_vDigVerif=true
   		       globals.MostrarArchivos_calculaDigitoVerificador()
   		       if(!globals.MostrarArchivos_vDigVerif){
   		    	  globals.DIALOGS.showErrorDialog("Error en ingreso de Legajo",'Digito Verificador erroneo','Ok');
   		    	  globals.MostrarArchivos_vClave = null
   		       }else{
   			      globals.MostrarArchivos_vOperador=mostrararchivos_vlegajo_to_tbc_personal_login.per_apelnom;
   			      globals.MostrarArchivos_vEmpresa =mostrararchivos_vlegajo_to_tbc_personal_login.per_empresa;
   			      if(globals.MostrarArchivos_vClave!=mostrararchivos_vlegajo_to_tbc_clave_legajo.hor_perclave){
   			    	    globals.DIALOGS.showErrorDialog("Error en ingreso de Clave",'Clave Incorrecta','Ok');  			    	  
   						globals.MostrarArchivos_vClave = null
	   			        elements.ope_password.requestFocus()
   					}else{
   						globals.MostrarArchivos_vTipoOperador=0
   						user=true
						name=application.getActiveWindow()
						$win=application.getWindow(name.getName())
						if($win!=null){
						    $win.hide()
						    $win.destroy()
						} 
						win = application.createWindow("MuestraArchivos",JSWindow.MODAL_DIALOG)	
						win.resizable = false
						win.title = 'Visor de Archivos'
						win.show(forms.MostrarArchivos_frm_link_tab)
						//forms.MostrarArchivos_frm_link_tab.controller.show()
   					}
   		       }
   	    	}else{
   	    		if(mostrararchivos_vlegajo_to_tbc_perext.getSize()>0){
   	    			globals.MostrarArchivos_vOperador=mostrararchivos_vlegajo_to_tbc_perext.perext_nom;
   	    			globals.MostrarArchivos_vEmpresa =0
   	    			if(globals.MostrarArchivos_vClave!=mostrararchivos_vlegajo_to_tbc_perext.perext_clave){
   	    				globals.DIALOGS.showErrorDialog("Error en ingreso de Clave",'Clave Incorrecta','Ok');
   						globals.MostrarArchivos_vClave = null
	   			        elements.ope_password.requestFocus()
   					}else{
   						globals.MostrarArchivos_vTipoOperador=2
   					    user=true
						name=application.getActiveWindow()
						$win=application.getWindow(name.getName())
						if($win!=null){
						    $win.hide()
						    $win.destroy()
						} 
						win = application.createWindow("MuestraArchivos",JSWindow.MODAL_DIALOG)	
						win.resizable = false
						win.title = 'Visor de Archivos'
						win.show(forms.MostrarArchivos_frm_link_tab)
						//forms.MostrarArchivos_frm_link_tab.controller.show()
   					}
   	    		}else{
   	    			globals.DIALOGS.showErrorDialog("Error en ingreso de Legajo",'Operador No Valido','Ok');
   	    			globals.MostrarArchivos_vLegajo = null
					globals.MostrarArchivos_vOperador = ''
   	    			globals.MostrarArchivos_vClave = null
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
 * @properties={typeid:24,uuid:"A9B0578F-275E-4ACE-A9BC-30079B67360A"}
 */
function onDataChange_control_contrasena(oldValue, newValue, event) {
	forms.MostrarArchivos_psw_login_adm.elements.btn_ingresar.requestFocus()
	return true
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"4B46F559-3744-44B1-86AA-923D7FF11602"}
 */
function onShow_iniciar(firstShow, event) {
	controller.focusFirstField()
	globals.MostrarArchivos_vClave  = null
	globals.MostrarArchivos_vLegajo = null
	//frm_ip = application.getIPAddress()
}
