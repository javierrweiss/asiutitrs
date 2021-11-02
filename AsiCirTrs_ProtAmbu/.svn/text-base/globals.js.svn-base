/**
 * @properties={typeid:35,uuid:"3BD8A3B7-BB78-4946-ADB8-5BACE24A9CEA",variableType:-4}
 */
var protambu_cron = false;

/**
 * @properties={typeid:35,uuid:"76B7D59C-CF2E-43CB-9796-6C9283DBBBC2",variableType:-4}
 */
var gbl_permisos_ProtAmbu = new Array();

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"7324B3A8-E0CB-4627-B17A-55971C14BB18"}
 */
var protambu_Sexo = 'l';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"C148CF13-1632-4827-B543-715C768FBF56"}
 */
var protambu_ObraSocial = '';

/**
 * @properties={typeid:35,uuid:"74033D8A-931C-4E22-A3E1-BD58DE8635FE",variableType:-4}
 */
var protambu_EsAnestesista = false;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"9D8674FC-4420-45C5-90BF-66E18BD0F2B1",variableType:93}
 */
var protambu_fechayhora_actual = new Date();

/**
 * Callback method for when solution is opened.
 *
 * @properties={typeid:24,uuid:"F0554423-7C9E-4D03-B9D4-DC4DC657A7E9"}
 */
function onSolutionOpen_ProtAmbu() {
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
	databaseManager.setAutoSave(false);
    globals.vClose=false
}

/**
 * @properties={typeid:24,uuid:"8D97DD00-7B3D-453C-85BD-24BFED69F9BC"}
 */
function actualizaFechayHora() {
	globals.vFechaAhora9=application.getServerTimeStamp()
	globals.vFechaAhora=application.getServerTimeStamp()
}

/**
 * @properties={typeid:24,uuid:"A9705606-31E2-4B18-B878-10382C87D823"}
 * @AllowToRunInFind
 */
function llamada_a_AsiCirTrs_ProtAmbu(args) {
	
	var globalVariables = solutionModel.getGlobalVariables('globals');
	for (var e in globalVariables){
		globalVariables[e]=globalVariables[e].defaultValue
		
	}
	
	if(args != null && args !=''){
		args = args.toString()
		args=args.split(';')
		globals.vLegajo=utils.stringToNumber(args[0])
		globals.vLega=utils.stringToNumber(args[1])
		globals.vOperador=args[2]
		globals.vTipoOperador=utils.stringToNumber(args[3])
		globals.gbl_transacciones_1=args[4]
		globals.vEmpresa=args[5]
		globals.gbl_expanding_Nodes=args[6]
		globals.gbl_title = ' '
	}
    

    //Cargar permisos
    var $ip         = application.getIPAddress()
    var $solucion   =  application.getSolutionName()
    var $Args       = new Array()
    var $SQL ="select  PERF.codigo_perfil, PERF.codigo_solucion, PERF.codigo_formulario, PERF.codigo_elemento, "
             +"PERF.visible, PERF.accesible, SOL.control_acceso "
             +"from tbl_permiso "
             +"left join tbl_perfil_itm PERF on tbl_permiso.codigo_perfil = PERF.codigo_perfil "
             +"left join tbl_solucion SOL on PERF.codigo_solucion = SOL.codigo "
             +"where tbl_permiso.codigo_legajo = "
             + globals.vLega
             if (globals.vLega == 0){
                 $SQL = $SQL + " and ip = '"
                 + $ip + "'"
             }
             $SQL = $SQL + " and PERF.codigo_solucion = '"
             + $solucion
             +"' order by PERF.codigo_perfil asc, PERF.codigo_solucion asc, PERF.codigo_formulario asc, PERF.codigo_elemento asc"
    gbl_permisos_ProtAmbu = databaseManager.getDataSetByQuery("desal", $SQL, $Args, -1);
    var $max = gbl_permisos_ProtAmbu.getMaxRowIndex()
    if(!$max){ return}

    //Pide legajo si la Solucion lo requiere
    if(gbl_permisos_ProtAmbu.getValue(1,7)== true){
        var win = application.createWindow("Legajo",JSWindow.MODAL_DIALOG)
        win.title= 'Legajo'
        win.resizable = false
        win.show(forms.psw_legajo)
        win.destroy()
        if(globals.gbl_user == false){return}
        globals.vLega=globals.gbl_Lega_ac
        globals.vOperador=globals.gbl_nombre_legajo_ac
        globals.vTipoOperador=globals.gbl_tipo_Legajo_ac
    }
    //Muestra Formulario Principal
    if(globals.gbl_transacciones_1 != 0){
        var $form = ' '
        
        switch (globals.gbl_transacciones_1){
            case  1: $form = 'protambu_tab_pacientes_en_espera'
                   ;break
            case  2: $form = 'reimpresor_tab_scr_pacientes'
               ;break
         }
         
         //Pide legajo si el Formulario lo requiere
         if(gbl_permisos_ProtAmbu.getValue(1,7)== false){
             var fs = databaseManager.getFoundSet("desal","tbl_formulario")
             fs.find()
             fs['codigo_solucion']= $solucion
             fs['codigo']= $form
             fs.search()
             if(fs.getSize()>0 && fs['control_acceso'] == 1){
                    win = application.createWindow("Legajo",JSWindow.MODAL_DIALOG)
                 win.title= 'Legajo'
                 win.resizable = false
                 win.show(forms.psw_legajo)
                   win.destroy()
                   if(globals.gbl_user == false){return}
                   globals.vLega=globals.gbl_Lega_ac
			       globals.vOperador=globals.gbl_nombre_legajo_ac
			       globals.vTipoOperador=globals.gbl_tipo_Legajo_ac
             }
         }
         globals.gbl_permisos=gbl_permisos_ProtAmbu
         globals.vOperadorActual=globals.vOperador
         win = application.createWindow("Menu_itm",JSWindow.MODAL_DIALOG)
         win.title= globals.gbl_title
         win.resizable = true
		 win.setSize(1200,750)
		 //win.resetBounds()
         win.show(forms[$form])
         win.destroy()
    } 
}
