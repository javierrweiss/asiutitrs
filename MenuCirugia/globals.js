/**
 * @properties={typeid:35,uuid:"A45C31DE-A201-4BE9-8CBE-0067DD90A90E",variableType:-4}
 */
var EsAnestesista = false;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"1549D29F-151D-4C6C-B205-CE4A3403F7EC",variableType:4}
 */
var vSectorReport = 0;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"5685B5D2-B52E-4D67-BEF2-D77A9A03E10C",variableType:93}
 */
var vFechaAhora0 = new Date();

/**
 * @properties={typeid:35,uuid:"B92C762C-2482-460C-A9A7-A7B357C673E2",variableType:-4}
 */
var vConfirma = false;

/**
 * @properties={typeid:24,uuid:"648B8480-B9D6-414E-8763-83F3479AED97"}
 */
function onSolutionOpen_MenuCirugia() {
	plugins.window.getMenuBar().setVisible(false)
	plugins.window.setToolBarAreaVisible(false)
	
	var names1 = plugins.window.getToolbarNames();
    for (var i = 0 ; i < names1.length ; i++) {
     	plugins.window.removeToolBar(names1[i])
    }	
    plugins.window.setFullScreen(false)
	plugins.window.maximize()
    plugins.window.getMenuBar().setVisible(false)
	plugins.window.setToolBarAreaVisible(false)
	
	databaseManager.addTableFilterParam("admisionscroll","tbc_admision_scroll","adm_fecaltaefec","=",0);
    databaseManager.addTableFilterParam("maestros","tbc_nomencla_anatopat","nome_grupo_6","in",[12,9012]);
    databaseManager.addTableFilterParam("maestros","tbc_mae_est","maeest_tip_1","=",1);
    databaseManager.addTableFilterParam("maestros","tbc_personal","per_fecbaja","=",0);
    databaseManager.addTableFilterParam("maestros","tbc_medicos_personal","medperfechabaja","=",0);
    databaseManager.addTableFilterParam("maestros","tbc_imacodi","icodestado","<",9);
    databaseManager.addTableFilterParam("maestros","tbc_combo_med","combtipo","=",2);
 // Best way to call this in a global solution startup method, but filters may be added/removed at any time.
	//var userName = security.getUserName();
	//globals.vNameSolucion=application.getSolutionName();
	databaseManager.setAutoSave(false)
	globals.vClose=false
	// see: http://www.quartz-scheduler.org/docs/tutorials/crontrigger.html for more info
	// add a job that runs every 20 minutes after the hour (0,20,40)
	plugins.scheduler.addCronJob('1mins', '0 0/1 * * * ?', actualizaFechayHora)
	
	
}

/**
 * 
 * @param force
 *
 * @properties={typeid:24,uuid:"920AAF52-05CA-47A2-ADE3-AC6F8FD599F5"}
 */
function onSolutionClose_MenuCirugia(force) {
	plugins.scheduler.removeJob('1mins')
	//plugins.scheduler.removeJob('1min')
	return globals.vClose
}

/**
 * @properties={typeid:24,uuid:"53E13822-7FBC-4492-9064-808540457AF0"}
 */
function actualizaFechayHora() {
	globals.vFechaAhora0=application.getServerTimeStamp()
	globals.vFechaAhora9=application.getServerTimeStamp()
	globals.vFechaAhora=application.getServerTimeStamp()
}

/**
 *
 * @param arguments
 *
 * @properties={typeid:24,uuid:"10F9EFDB-C444-4C28-A459-646007B7A68A"}
 */
function llamada_desde_Menu(arguments) {
	var globalVariables = solutionModel.getGlobalVariables('globals');
	for (var e in globalVariables){
		globalVariables[e]=globalVariables[e].defaultValue
		
	}
	arguments=arguments.toString()
	arguments=arguments.split(';')
	//plugins.dialogs.showInfoDialog("arguments[0",arguments[0])
	globals.vLegajo=utils.stringToNumber(arguments[0])
	globals.vLega=utils.stringToNumber(arguments[1])
	globals.vOperador=arguments[2]
	globals.vTipoOperador=utils.stringToNumber(arguments[3])
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
	if(encontre_report){
		plugins.dialogs.showInfoDialog("Aviso de Reportes No Leidos","Usted tiene mensajes pendientes de Dirección General"+'\n'+"Para continuar la operación debe proceder a su lectura previa,"+'\n'+"en la opción varios del Menú."+'\n'+"Muchas Gracias.")
		globals.vOperadorActual=globals.vOperador
		globals.vLegajoActual=globals.vLega
		application.showForm("LoginCirugia")
		//globals.vClose=true
		//application.exit()
		//var args1 = globals.vLegajo+';'+globals.vLega+';'+globals.vOperador+';'+globals.vTipoOperador+';'+"true";
		//application.closeSolution('Menu','retorno_MenuCirugia',args1)
	}else{
		globals.vOperadorActual=globals.vOperador
		globals.vLegajoActual=globals.vLega
		application.showForm("tab_scr_tbc_admision")
	}
}

/**
 * TODO generated, please specify type and doc for the params
 * @param {String} arguments
 *
 * @properties={typeid:24,uuid:"08EDC62B-C9E7-4949-83EB-50EF78963EB3"}
 */
function llamada_desde_Consentimientos_menuimpr_dtl(arguments) {
	arguments=arguments.toString()
	arguments=arguments.split(';')
	//plugins.dialogs.showInfoDialog("arguments[0",arguments[0])
	globals.vLegajo=utils.stringToNumber(arguments[0])
	globals.vLega=utils.stringToNumber(arguments[1])
	globals.vOperador=arguments[2]
	globals.vTipoOperador=utils.stringToNumber(arguments[3])
	globals.vHiscli=utils.stringToNumber(arguments[4])
	globals.vApeyNom=arguments[5]
	globals.vSexo=utils.stringToNumber(arguments[6])
	globals.vFechaIngreso=utils.stringToNumber(arguments[7])
	globals.vHoraIngreso=utils.stringToNumber(arguments[8])
	globals.vOperadorActual=globals.vOperador
	globals.vLegajoActual=globals.vLega
	application.showForm("frm_menu_principal")
}
