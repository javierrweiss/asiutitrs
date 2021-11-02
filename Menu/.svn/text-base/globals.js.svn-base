/**
 * @properties={typeid:24,uuid:"D063DE60-FF2E-4C62-A29E-229BFF470E19"}
 */
function onSolutionOpen_consultas() {
	// esto es para borrar la barra de menu
	plugins.window.getMenuBar().setVisible(false)
    plugins.window.setToolBarAreaVisible(false)
    
    var names1 = plugins.window.getToolbarNames();
    for (var i = 0 ; i < names1.length ; i++) {
         plugins.window.removeToolBar(names1[i])
    }    
    plugins.window.setFullScreen(false)
    plugins.window.getMenuBar().setVisible(false)
    plugins.window.setToolBarAreaVisible(false)
	plugins.window.setStatusBarVisible(false);
    
   // fin borra barra menu
	plugins.scheduler.addCronJob("actualiza_hora",'0 0/1 * * * ?',actualiza_hora)
   // Toma hora para auxiliar
   globals.gbl_fecha_aux = application.getServerTimeStamp()
} 

/**
 * @properties={typeid:24,uuid:"64943551-BEB9-4DB7-927A-1E11A0E54001"}
 */
function actualiza_hora() {
	globals.gbl_fecha_hoy = application.getServerTimeStamp()
}

/**
 * @param {String} args
 * @properties={typeid:24,uuid:"E0602DA8-3FC0-45D9-BF87-2E3B05569209"}
 */
function retorno_MenuCirugia(args) {
	args=args.toString()
	args=args.split(';')
	//globals.frm_impr=frm[0]
	//forms.consentimientos.argumento_1=frm[1]
	//forms.consentimientos.argumento_2=frm[2]
	globals.gbl_fecha_hoy = application.getServerTimeStamp()
	globals.gbl_empresa = "Desarrollo"
	globals.gbl_usuario = args[2]
	globals.gbl_retorno = args[4]
	globals.vLegajo=utils.stringToNumber(args[0])
	globals.vLega=utils.stringToNumber(args[1])
	globals.vOperador=args[2]
	globals.vTipoOperador=utils.stringToNumber(args[3])
	application.showForm(forms.frm_menu)
}
