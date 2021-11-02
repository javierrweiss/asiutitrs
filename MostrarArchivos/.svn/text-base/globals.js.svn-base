/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"57407503-DAB2-4F1D-B86E-8F96488AC8B3",variableType:4}
 */
var MostrarArchivos_vEmpresa = 0;
/**
 * @properties={typeid:35,uuid:"A832E2BD-5F6F-4CAF-B3C6-5CF3D1CF1A3D",variableType:-4}
 */
var gbl_permisos = new Array();

/**
 * @properties={typeid:35,uuid:"176C0EDF-502F-4546-A58F-B2EFB2571215",variableType:-4}
 */
var MostrarArchivos_vDigVerif = false;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"0ADEDCBD-6751-4F21-B457-5E9AEB8EE561",variableType:4}
 */
var MostrarArchivos_vTipoOperador = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"AA05473E-21EF-4BF5-A0EF-E77071C88581",variableType:4}
 */
var MostrarArchivos_digito_verificador = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"1B966DB8-AF73-4D2B-A579-FEA1DC3DAC76",variableType:4}
 */
var MostrarArchivos_vlargo = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"F651EDFD-E5E2-4AD6-99D7-62F3D03DC5E2",variableType:4}
 */
var MostrarArchivos_vClave = 0;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"8A79A4D7-86FB-4E95-81D9-BB3C34B7EDA7"}
 */
var MostrarArchivos_vOperador = '';

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"81C31E63-9316-4505-B3BB-148394B56508",variableType:4}
 */
var MostrarArchivos_vLega = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"D621DC89-0232-4C45-BF6F-EC8FAB697F94",variableType:4}
 */
var MostrarArchivos_vLegajo = 0;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"3761895C-7139-4C40-A45B-62287E8185DA"}
 */
var MostrarArchivos_busca_archivos = '';

/**
 * @properties={typeid:24,uuid:"733AE554-5896-41A5-96B9-80C72716B7E6"}
 */
function MostrarArchivos_calculaDigitoVerificador() {
	var aux_dig = new Array(5);
	if(globals.MostrarArchivos_vlargo==2){
		aux_dig[0] = 0
		aux_dig[1] = 0
		aux_dig[2] = 0
		aux_dig[3] = globals.MostrarArchivos_vLega.toString().substr(0,1);
		aux_dig[4] = globals.MostrarArchivos_vLega.toString().substr(1,1);
	}else{
		if (globals.MostrarArchivos_vlargo==3){
			aux_dig[0] = 0
			aux_dig[1] = 0
			aux_dig[2] = globals.MostrarArchivos_vLega.toString().substr(0,1);
			aux_dig[3] = globals.MostrarArchivos_vLega.toString().substr(1,1);
			aux_dig[4] = globals.MostrarArchivos_vLega.toString().substr(2,1);
		}else{
			if(globals.MostrarArchivos_vlargo==4){
				aux_dig[0] = 0
				aux_dig[1] = globals.MostrarArchivos_vLega.toString().substr(0,1);
				aux_dig[2] = globals.MostrarArchivos_vLega.toString().substr(1,1);
				aux_dig[3] = globals.MostrarArchivos_vLega.toString().substr(2,1);
				aux_dig[4] = globals.MostrarArchivos_vLega.toString().substr(3,1);
			}else{
				if(globals.MostrarArchivos_vlargo==5){
					aux_dig[0] = globals.MostrarArchivos_vLega.toString().substr(0,1);
					aux_dig[1] = globals.MostrarArchivos_vLega.toString().substr(1,1);
					aux_dig[2] = globals.MostrarArchivos_vLega.toString().substr(2,1);
					aux_dig[3] = globals.MostrarArchivos_vLega.toString().substr(3,1);
					aux_dig[4] = globals.MostrarArchivos_vLega.toString().substr(4,1);
				}
			}
		}
	}
	var verificador = 0;
	verificador = utils.stringToNumber(aux_dig[1]) + utils.stringToNumber(aux_dig[2]) * 3 + utils.stringToNumber(aux_dig[3]) * 9 + utils.stringToNumber(aux_dig[4]) * 7;
	var larg = verificador.toString().length - 1;
	if(globals.MostrarArchivos_digito_verificador!=verificador.toString().substr(larg,1)){
		globals.MostrarArchivos_vDigVerif=false
	}

}

/** 
 * @param args
 *
 * @properties={typeid:24,uuid:"C8616DE1-3E55-48C3-9BEA-C8D8C0DAF81E"}
 * @AllowToRunInFind
 */
function llamada_desde_Menu(args) {

    // Trae datos desde el Menu
    args = args.toString()
    args=args.split(';')
    globals.vLegajo=utils.stringToNumber(args[0])
    globals.vLega=utils.stringToNumber(args[1])
    globals.vOperador=args[2]
    globals.vTipoOperador=utils.stringToNumber(args[3])
    //globals.gbl_transacciones_1=args[4]
    globals.vEmpresa=args[5]
    globals.gbl_expanding_Nodes=args[6]
    globals.gbl_title = ' '
    	
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
    gbl_permisos = databaseManager.getDataSetByQuery("desal", $SQL, $Args, -1);	
    var $max = gbl_permisos.getMaxRowIndex()
	if(!$max){ return}
    
  //Pide legajo si la Solucion lo requiere
    if(gbl_permisos.getValue(1,7)== true){
    	var win = application.createWindow("Legajo",JSWindow.MODAL_DIALOG)	
        win.title= 'Legajo'
        win.resizable = false
        win.show(forms.psw_legajo)
		win.destroy()
		if(globals.gbl_user == false){return}
    }
  //Pide legajo si el Formulario lo requiere
    if(gbl_permisos.getValue(1,7)== false){	    	 
		 var fs = databaseManager.getFoundSet("desal","tbl_formulario")
		 fs.find()
		 fs['codigo_solucion']= $solucion
		 fs['codigo']= 'MostrarArchivos_frm_link_tab'
		 fs.search()
		 if(fs.getSize()>0 && fs['control_acceso'] == 1){
		   	 win = application.createWindow("Legajo",JSWindow.MODAL_DIALOG)	
            win.title= 'Legajo'
            win.resizable = false
            win.show(forms.psw_legajo)
	 	     win.destroy()
	 	     if(globals.gbl_user == false){return}
		 }			 	          
    }
         win = application.createWindow("Menu_itm",JSWindow.MODAL_DIALOG)
         win.title= globals.gbl_title
         win.resizable = false
         win.show(forms['MostrarArchivos_frm_link_tab'])
         win.destroy()
    
} 