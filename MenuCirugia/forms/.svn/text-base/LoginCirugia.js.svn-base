/**
 * // TODO generated, please specify type and doc for the params
 * @param {Object} oldValue
 * @param {Object} newValue
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"02FFFAFD-73C3-4E28-8533-7EC92B55D209"}
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
					globals.vOperador=vlegajo_to_tbc_medicos.med_apenom;
					forms.LoginCirugia.elements.clave.requestFocus()
					return true
				}else{
					if(vlegajo_to_tbc_personal_login.getSize()>0){
						globals.vDigVerif=true
						globals.calculaDigitoVerificador()
	    		
						if(!globals.vDigVerif){
							globals.vOperador="Digito verificador erroneo";
							return false
						}else{
							globals.vOperador=vlegajo_to_tbc_personal_login.per_apelnom;
							forms.LoginCirugia.elements.clave.requestFocus()
							return true
						}
					}else{
						if(vlegajo_to_tbc_perext.getSize()>0){
							globals.vOperador=vlegajo_to_tbc_perext.perext_nom;
							forms.LoginCirugia.elements.clave.requestFocus()
							return true
						}else{
							globals.vOperador="Operador No Valido";
							return false
						}
					}
				}
			}else{
				if(vlegajo_to_tbc_personal_login.getSize()>0){
					globals.vDigVerif=true
					globals.calculaDigitoVerificador()
					if(!globals.vDigVerif){
						globals.vOperador="Digito verificador erroneo";
						return false
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
									forms.LoginCirugia.elements.clave.requestFocus()
									return true
								}
							}
							*/
						//}else{
						
							forms.LoginCirugia.elements.clave.requestFocus()
							return true
						//}	
					}
				}else{
					if(vlegajo_to_tbc_perext.getSize()>0){
						globals.vOperador=vlegajo_to_tbc_perext.perext_nom;
						forms.LoginCirugia.elements.clave.requestFocus()
						return true
					}else{
						globals.vOperador="Operador No Valido";
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
 * // TODO generated, please specify type and doc for the params
 * @param {Object} oldValue
 * @param {Object} newValue
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"2071C76E-2208-4725-BF1E-77A83892A6AA"}
 */
function onDataChange_clave(oldValue, newValue, event) {
	globals.vPassOperador=''
	forms.LoginCirugia.elements.confirma.requestFocus()
	return true
}

/**
 * // TODO generated, please specify type and doc for the params
 * @param {Object} firstShow
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"D3DF771C-0EF2-4B78-BF0B-3E9A203B6E31"}
 */
function onShow_login(firstShow, event) {
	//forms.LoginCirugia.elements.legajo.requestFocus()
	var globalVariables = solutionModel.getGlobalVariables('globals');
	for (var i in globalVariables){
		globalVariables[i]=globalVariables[i].defaultValue
		
	}
}

/**
 * // TODO generated, please specify type and doc for the params
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"4FEDD149-D807-4DC3-B688-987108A910A7"}
 * @AllowToRunInFind
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
				}else{
					globals.vTipoOperador=1
					user=true
				}
			}else{
		    	if(globals.vClave!=vlegajo1_to_tbc_clave_legajo.hor_perclave){
		    		globals.vPassOperador="Clave Incorrecta";
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
		       }else{
		    	   if(globals.vClave!=vlegajo_to_tbc_clave_legajo.hor_perclave){
						globals.vPassOperador="Clave Incorrecta";
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
					}else{
						globals.vTipoOperador=2
					   user=true
					}
	    		}else{
	    			globals.vOperador="Operador No Valido";
	    		}
	    	}
		}
	}else{
		if(vlegajo_to_tbc_personal_login.getSize()>0){
				globals.vDigVerif=true
		       globals.calculaDigitoVerificador()
		       if(!globals.vDigVerif){
		    	   globals.vOperador="Digito verificador erroneo";
		       }else{
			      globals.vOperador=vlegajo_to_tbc_personal_login.per_apelnom;
			      if(globals.vClave!=vlegajo_to_tbc_clave_legajo.hor_perclave){
						globals.vPassOperador="Clave Incorrecta";
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
					}else{
						globals.vTipoOperador=2
					   user=true
					}
	    		}else{
	    			globals.vOperador="Operador No Valido";
	    		}
	    	}
	}
	}	
	
    if(user){
    	var args_reporte = new Array()
    	var query_reporte = "select reportlegasec from tbc_report_lega where reportlegalega = ? and reportlegatipo = ?"
    	var args_horper = new Array()
    	var query_horper = "select hor_persector_1, hor_persector_2, hor_persector_3, hor_persector_4, hor_persector_5, hor_persector_6 from tbc_horper_report where hor_pertipo = ? and hor_perlega = ? and hor_peredias = 0 and hor_peresemana = 0"
    	var args = new Array()
    	var query = "select mensattylega, mensattytipop from tbc_mensa_tty where mensattysector = ?"
    	
    	var encontre_report=false
		args_reporte[0]=globals.vLega
		args_reporte[1]=globals.vTipoOperador
		var dataset_reporte = databaseManager.getDataSetByQuery("validalegajo",query_reporte,args_reporte,10)
		
		
		if(dataset_reporte.getMaxRowIndex()>0){
			for(var i=1;i<=dataset_reporte.getMaxRowIndex();i++){
				args[0]=dataset_reporte.getValue(i,1)
				var dataset1 = databaseManager.getDataSetByQuery("validalegajo",query,args,2000)
				if(dataset1.getMaxRowIndex()>0){
					for(var j=1;j<=dataset1.getMaxRowIndex()&&!encontre_report;j++){
						if(globals.vLega==dataset1.getValue(j,1)&&globals.vTipoOperador==dataset1.getValue(j,2)){
							encontre_report=true
						}
					}
				}
			}
		}
    	if(!encontre_report){
    		args_horper[1]=globals.vLega
			args_horper[0]=globals.vTipoOperador
			var dataset_horper = databaseManager.getDataSetByQuery("validalegajo",query_horper,args_horper,10)
			
			if(dataset_horper.getMaxRowIndex()>0){
				for(var k=1;k<=6;k++){
					globals.vSectorReport=dataset_horper.getValue(1,k)
					args[0]=globals.vSectorReport
					var dataset2 = databaseManager.getDataSetByQuery("validalegajo",query,args,2000)
										
					if(dataset2.getMaxRowIndex()>0){
						for(var m=1;m<=dataset2.getMaxRowIndex()&&!encontre_report;m++){
							if(globals.vLega==dataset2.getValue(m,1)&&globals.vTipoOperador==dataset2.getValue(m,1)){
								encontre_report=true
							}
						}
					}
				}
			}
		}
    	//if(encontre_report){
    		//plugins.dialogs.showInfoDialog("Aviso de Reportes No Leidos","Usted tiene mensajes pendientes de Dirección General"+'\n'+"Para continuar la operación debe proceder a su lectura previa,"+'\n'+"en la opción varios del Menú."+'\n'+"Muchas Gracias.")
    	//}else{
    		globals.vOperadorActual=globals.vOperador
    		globals.vLegajoActual=globals.vLega
    		forms.tab_scr_tbc_admision.controller.show()
    	//}
	}else{
		elements.clave.requestFocus()
	}
}

/**
 * // TODO generated, please specify type and doc for the params
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"46AE1A8C-3A15-45D2-B33A-2476316E6CF3"}
 */
function onAction_cancela(event) {
	globals.vClose=true
	var args = globals.vOperador+';'+"true"
	application.closeSolution('Menu','retorno_MenuCirugia',args)
	
	//globals.vClose=true
	//application.exit()
}

/**
 * // TODO generated, please specify type and doc for the params
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"99EFDF2D-9A2D-47C1-B3F7-E394569352F7"}
 */
function onAction_legajo(event) {
	//application.output("por aca pasa")
}

/**
 * // TODO generated, please specify type and doc for the params
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"95401A38-3897-4E6B-9D3C-87C72D78B0C1"}
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
				forms.LoginCirugia.elements.clave.requestFocus()
				
			}else{
		    	if(vlegajo_to_tbc_personal_login.getSize()>0){
		    		globals.vDigVerif=true
		    	   globals.calculaDigitoVerificador()
		    		
			       if(!globals.vDigVerif){
			    	   globals.vOperador="Digito verificador erroneo";
			    	   forms.LoginCirugia.elements.legajo.requestFocus()
			       }else{
				      globals.vOperador=vlegajo_to_tbc_personal_login.per_apelnom;
				      forms.LoginCirugia.elements.clave.requestFocus()
					  
			       }
		    	}else{
		    		if(vlegajo_to_tbc_perext.getSize()>0){
		    			globals.vOperador=vlegajo_to_tbc_perext.perext_nom;
		    			forms.LoginCirugia.elements.clave.requestFocus()
						
		    		}else{
		    			globals.vOperador="Operador No Valido";
		    			forms.LoginCirugia.elements.legajo.requestFocus()
		    		}
		    	}
			}
		}else{
			
			if(vlegajo_to_tbc_personal_login.getSize()>0){
				   globals.vDigVerif=true
			       globals.calculaDigitoVerificador()
			       if(!globals.vDigVerif){
			    	   globals.vOperador="Digito verificador erroneo";
			    	   forms.LoginCirugia.elements.legajo.requestFocus()
			       }else{
				      globals.vOperador=vlegajo_to_tbc_personal_login.per_apelnom;
				      forms.LoginCirugia.elements.clave.requestFocus()
					  
			       }
		    	}else{
		    		if(vlegajo_to_tbc_perext.getSize()>0){
		    			globals.vOperador=vlegajo_to_tbc_perext.perext_nom;
		    			forms.LoginCirugia.elements.clave.requestFocus()
						
		    		}else{
		    			globals.vOperador="Operador No Valido";
		    			forms.LoginCirugia.elements.legajo.requestFocus()
		    		}
		    	}
		}
		}else{
			forms.LoginCirugia.elements.legajo.requestFocus()
		}
	}else{
			forms.LoginCirugia.elements.legajo.requestFocus()
	}
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"0358A902-6AC5-4FAD-9574-F573A42790FF"}
 */
function onAction_btn_ayuda_1(event) {
	globals.textoAyuda='AYUDA-1'
	var win = application.createWindow("p",JSWindow.MODAL_DIALOG)
	win.title = "Ayuda para Ingresar";
	win.setLocation(810,300)
	win.setSize(500,350)
	win.show(forms.frm_ayuda_1)
}
