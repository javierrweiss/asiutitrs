/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"760AFB98-5D5A-47CF-ACCF-2A131A8DD126",variableType:8}
 */
var ok = 0;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"7D4D7353-D63E-4EEC-8CC9-B21C35648AE4"}
 */
var aux_contrasena = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"E9F69A9B-B48B-495B-A192-53A8E9073E65"}
 */
var psw_nombre = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"3E455595-77F1-4BF0-A28D-D4B514BA5A3E"}
 */
var psw_apellido = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"5B7495DA-E74A-46CE-90D3-57DC3C05D4E1"}
 */
var psw_contrasena = '';

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"44C4A3B8-A1B0-4694-AC54-3F4E046B9EAD",variableType:8}
 */
var psw_usuario = null;

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"4B8C39D1-B4FF-46D7-B635-1F2FA08FC7D1"}
 */
function onAction_salir(event) {
	if (ok !== 1 ){
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
 * @properties={typeid:24,uuid:"CB8B0225-2736-4749-931E-115AE39CB188"}
 * @AllowToRunInFind
 */
function onDataChange_control_operador(oldValue, newValue, event) {
	if (psw_usuario != 0){
	   var fs = databaseManager.getFoundSet("bases_auxiliares","tbl_acceso_operador")
	   fs.find()
	   fs['ope_nro_doc'] = psw_usuario
	   fs.search()
	   fs.setSelectedIndex(1)
	   if (fs['ope_nro_doc'] != psw_usuario){
		      globals.showErrorDialog('Operador Inexistente.', null, 'Ok', null, null, null);
		      psw_usuario = null
		      psw_apellido = ''
		      psw_nombre = ''
			  psw_contrasena = ''
			  aux_contrasena = ''
		      elements.ope_nro_doc.requestFocus()
	   }else{
		  elements.ope_password.requestFocus()
		  psw_apellido = fs['ope_apellido']
		  psw_nombre = fs['ope_nombre']
		  aux_contrasena = fs['ope_password']
	   }
	}
	return true
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"85B1F161-9F1E-493F-AFD4-2777387C0B39"}
 */
function onAction_ingresar(event) {
	ok = 0
	if (psw_usuario != null){  
	   if (psw_contrasena == aux_contrasena){
		     ok = 1
	         application.getWindow('Psw').hide()
	   }else{
			 globals.showErrorDialog('Acceso Incorrecto.', null, 'Ok', null, null, null);
		     psw_usuario = null
		     psw_apellido = ''
		     psw_nombre = ''
		     psw_contrasena = ''
		     aux_contrasena = ''
		     elements.ope_nro_doc.requestFocus()
	         }
    }else{
    	globals.showErrorDialog('Acceso Incorrecto.', null, 'Ok', null, null, null);
        psw_usuario = null
	    psw_apellido = ''
	    psw_nombre = ''
	    psw_contrasena = ''
	    aux_contrasena = ''
	    elements.ope_nro_doc.requestFocus()
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
 * @properties={typeid:24,uuid:"7DC1A427-137C-4DC7-9BD5-6F6171DB4D26"}
 */
function onDataChange_control_contrasena(oldValue, newValue, event) {
	if (psw_usuario !== null){
		if (psw_contrasena !== aux_contrasena){
	   		   globals.showErrorDialog('Clave Incorrecta.', null, 'Ok', null, null, null);
	           psw_usuario = null
 		       psw_apellido = ''
		       psw_nombre = ''
		       psw_contrasena = ''
		       aux_contrasena = ''
    	   }else{
    		   elements.btn_ingresar.requestFocus()
    	   }
    		   
	}else{
		 psw_contrasena = ''
	}
	return true
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"65C2B6B7-5030-4E54-B7FE-601ADCF337D8"}
 */
function onShow_iniciar(firstShow, event) {
	controller.focusFirstField()
}
