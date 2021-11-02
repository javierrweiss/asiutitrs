/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"F2FF0407-54D7-4335-B7B4-5E42E50D2BB7",variableType:4}
 */
var fLega = 0;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"329527D7-E197-411F-9008-37C968335670"}
 */
var fPassOperador = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"0A100553-C8D8-4FAD-B231-9BF199F82238"}
 */
var fOperador = '';

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"A5BAF736-5B4D-4E26-892D-BD47FAF61BBE",variableType:4}
 */
var fClave = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"A2EDED38-22C9-490A-B845-E35C1DBAC505",variableType:4}
 */
var fLegajo = 0;

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"344E9E19-07CE-4699-9ACB-1BB75667BF32"}
 */
function onAction_entrar(event) {
	if (globals.vLegajo==0||globals.vLegajo==null||globals.vClave==0||globals.vClave==null){
		globals.DIALOGS.showWarningDialog('Aviso','Usuario o contraseña incorrectos','OK')
		return false
	}else{
		var $ok = security.authenticate('Login_auth','login',[globals.vLegajo, globals.vClave, 'users'])
		if ($ok == 1){
			var $win = application.getWindow('LOGIN')
			$win.hide()
			$win.destroy()
			return true
		}
		else{
			globals.DIALOGS.showWarningDialog('Aviso','Usuario o contraseña incorrectos','OK')
			return false
		}
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"0AA7462B-C944-45AA-B9CC-54E185F7BFBD"}
 */
function onAction_salir(event) {
	application.exit()
}

/**
 * Handle changed data.
 *
 * @param {Number} oldValue old value
 * @param {Number} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"CA7B6464-40A6-451C-8516-D2C269DE5F03"}
 */
function onDataChange_legajo(oldValue, newValue, event) {
	if(newValue!=0&&newValue!=null&&newValue!=''){
		globals.vLegajo=newValue
		globals.vLega=globals.vLegajo
		globals.vlargo= globals.vLega.toString().length - 1;
		if(globals.vlargo!=0){
			globals.vLega=globals.vLega.toString().substr(0,globals.vlargo)
			globals.digito_verificador = utils.stringToNumber(globals.vLegajo.toString().substr(globals.vlargo, 1))
			if (globals.digito_verificador == 0){
				if (vlegajo_to_tbc_medicos.getSize()>0){
					globals.vOperador=vlegajo_to_tbc_medicos.med_apenom;
					elements.vClave.requestFocus()
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
							elements.vClave.requestFocus()
							return true
						}
					}else{
						if(vlegajo_to_tbc_perext.getSize()>0){
							globals.vOperador=vlegajo_to_tbc_perext.perext_nom;
							elements.vClave.requestFocus()
							return true
						}else{
							globals.vOperador="Operador No Valido";
							return false
						}
					}
				}
			}else{
				if(vlegajo_to_tbc_personal_login.per_legajo>0){
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
						
						elements.vClave.requestFocus()
							return true
						//}	
					}
				}else{
					if(vlegajo_to_tbc_perext.getSize()>0){
						globals.vOperador=vlegajo_to_tbc_perext.perext_nom;
						elements.vClave.requestFocus()
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
 * Handle changed data.
 *
 * @param {Number} oldValue old value
 * @param {Number} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"47070F33-ABC1-4359-B8B7-F9C93AA02715"}
 */
function onDataChange_clave(oldValue, newValue, event) {
	var $ok = security.authenticate('Login_auth','loginPass',[globals.vLegajo, globals.vClave])
	if ($ok==0){
		globals.DIALOGS.showWarningDialog('Aviso','Clave incorrecta','OK')
		return false
	}else{
		globals.vPassOperador=''
		elements.btn_entrar.requestFocus()
		return true
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"D70C0354-5455-4FFA-AA00-AD464DE045D4"}
 */
function onAction_legajo(event) {
	var $ok = security.authenticate('Login_auth','loginUser',[globals.vLegajo])
	if (!$ok){
		globals.DIALOGS.showWarningDialog('Aviso','Usuario incorrecto','OK')
		return false
	}else{
		globals.vOperador=$ok
		elements.vClave.requestFocus()
		return true
	}
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"DD9859EC-5210-4036-AC32-F829F53781C4"}
 */
function onAction_clave(event) {
	globals.vPassOperador=''
	elements.btn_entrar.requestFocus()
}
