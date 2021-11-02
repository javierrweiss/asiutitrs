/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"E15C940F-03D4-4981-9DC0-20D9A75C587A",variableType:4}
 */
var fPass = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"167FEE5C-64FB-4AC8-8946-7506A9F970E8",variableType:4}
 */
var fUsuario = 0;

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"09D84631-8648-43CB-BA91-4A189405D8BC"}
 */
function onAction_entrar(event) {
	var $ok = security.authenticate('Login_auth','login',[fUsuario, fPass, 'users','customers'])
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
