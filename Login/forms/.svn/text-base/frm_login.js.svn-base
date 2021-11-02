/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"FF8CA2D0-22CE-4B0C-AF5F-82CB6DA3E2C0",variableType:4}
 */
var fLega = 0;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"6C0B6F03-2E6C-41C2-B939-2814D8BEEAA5"}
 */
var fPassOperador = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"E542E105-3858-4E07-8D1D-3E8DE0114916"}
 */
var fOperador = '';

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"2AC50096-D044-4EC5-AA5F-19EC609E6EB2",variableType:4}
 */
var fClave = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"FBF31B3C-2E33-4A7B-A479-F51011B76CA4",variableType:4}
 */
var fLegajo = 0;

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"E178B785-CC65-4E00-AC64-80829A670EE3"}
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
 * @properties={typeid:24,uuid:"806A9152-297B-4803-A4C0-2F7D311790A3"}
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
 * @properties={typeid:24,uuid:"86F32A4F-E323-44D9-B571-106AA9B67682"}
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
 * @properties={typeid:24,uuid:"6F24DE09-F6FB-4970-8AD3-B6547B1D528F"}
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
 * @properties={typeid:24,uuid:"A53E8948-BC56-4DC6-8D04-44BD4444FD7D"}
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
 * @properties={typeid:24,uuid:"A7124B9B-37B3-4584-A7A7-2A863CAE45CE"}
 */
function onAction_clave(event) {
	globals.vPassOperador=''
	elements.btn_entrar.requestFocus()
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"9DCD2710-6CF8-47E0-B770-8EB2192F34FF"}
 */
function onShow_frm_login(firstShow, event) {
	globals.vLegajo=null
	globals.vClave=null
}
