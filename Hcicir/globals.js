/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"D44C381B-1D2A-44A0-A69D-77208A0773C9",variableType:4}
 */
var Hcicir_vTipoTecnico = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"FDF60114-F5DD-415E-91B4-03F8EFA10522",variableType:4}
 */
var Hcicir_vTipoOperador = 0;

/**
 * @properties={typeid:35,uuid:"F57B8CA8-1023-4307-90ED-A7E02C1F1452",variableType:-4}
 */
var Hcicir_vSolomedicos = true;

/**
 * @properties={typeid:35,uuid:"EAE519F8-5775-4B7A-BB42-A22605F9395B",variableType:-4}
 */
var Hcicir_vDigVerif = false;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"B2554E70-1E5C-4AB2-AB49-8490A9856B87",variableType:8}
 */
var Hcicir_digito_verificador = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"2A99104E-25E5-47A5-AA85-E195B9E8C46C",variableType:8}
 */
var Hcicir_vlargo = 0;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"968D1FF0-9B9D-4DE9-8467-F9DE0356C77A"}
 */
var Hcicir_vPassOperador = '';

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"5C31B81C-C65B-4E19-9613-61B693647F60",variableType:8}
 */
var Hcicir_vClave = 0;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"403A4E95-8318-465D-8549-A7D317CB8E6C"}
 */
var Hcicir_vClave_str = ' ';
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"1BB8095E-755C-4096-8531-41A613AC18E0"}
 */
var Hcicir_vOperador = '';

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"A55FE5E2-3AC2-4E88-8D80-93FC4405986B",variableType:8}
 */
var Hcicir_vLegajo = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"033018FF-AF7D-4A2A-8CDB-BDF73707E49F",variableType:8}
 */
var Hcicir_vLega = 0;

/**
 * @properties={typeid:35,uuid:"3B58D441-F498-4B9E-9AE7-955183DB7438",variableType:-4}
 */
var Hcicir_permisos = new Array();

/**
 * @properties={typeid:35,uuid:"CD4565C0-E8BF-435B-ACD9-28070E77EB73",variableType:-4}
 */
var Hcicir_esAnestesista = false;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"5F9F0669-F56C-4FC4-852A-D5731AD4FB26",variableType:4}
 */
var Hcicir_codObraSocial = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"055443E7-BCA1-482F-BDC8-3E1F68B79623",variableType:4}
 */
var Hcicir_hiscli = 0;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"BAA357A4-A467-48A7-A44E-0FF92025C687"}
 */
var Hcicir_apeynom = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"3F1194A0-98A6-40C8-BA06-70B27FF75C46"}
 */
var Hcicir_hisclistrynro = '';

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"A6FA6592-9493-4DF9-96CE-3959BB07F5DB",variableType:4}
 */
var Hcicir_eventSourceButton = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"FCAF1143-F7AE-4D78-9783-4BA927626312",variableType:4}
 */
var Hcicir_activoFormBuscarPaciente = 0;

/**
 * @properties={typeid:24,uuid:"FAA91549-15D6-401B-9A41-FA655B21E542"}
 */
function onSolutionOpen_hcicir() {
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
    
    databaseManager.setAutoSave(false);
}

/**
 * TODO generated, please specify type and doc for the params
 * @param args
 *
 * @properties={typeid:24,uuid:"95838BD5-ACD2-4CCA-9275-897A40E60BFA"}
 */
function llamada_desde_Menu(args) {
	
	// Trae datos desde el Menu
	args = args.toString()
	args=args.split(';') 
	globals.vLegajo=utils.stringToNumber(args[0])
	globals.vLega=utils.stringToNumber(args[1])
	globals.vOperador=args[2]
	globals.vTipoOperador=utils.stringToNumber(args[3])
	globals.gbl_transacciones_1= 0 //args[4] 
	globals.vEmpresa=args[5]
	globals.gbl_expanding_Nodes=args[6]
	globals.gbl_title= 'Hist??ria Cl??nica de Ingreso a Cirug??a'
	forms.frm_menu.elements.frm_main.dividerLocation = 0.20	// divide ventana
	application.updateUI()
	
	//Cargar permisos
	var $ip         = application.getIPAddress()
	var $solucion   =  application.getSolutionName()	
	var $Args       = new Array()
	var $SQL ="select  PERF.codigo_perfil, PERF.codigo_solucion, PERF.codigo_formulario, PERF.codigo_elemento, " 
             +"PERF.visible, PERF.accesible "
	         +"from tbl_permiso "
             +"left join tbl_perfil_itm PERF on tbl_permiso.codigo_perfil = PERF.codigo_perfil "             
             +"where tbl_permiso.codigo_legajo = "
             + globals.vLega
			 if (globals.vLega == 0){
				 $SQL = $SQL + " and ip = '"
				 + $ip + "'"
			 }
			 $SQL = $SQL + " and PERF.codigo_solucion = '"
			 + $solucion
             +"' order by PERF.codigo_perfil asc, PERF.codigo_solucion asc, PERF.codigo_formulario asc, PERF.codigo_elemento asc"
    globals.Hcicir_permisos = databaseManager.getDataSetByQuery("desal", $SQL, $Args, -1);	
    var $max = globals.Hcicir_permisos.getMaxRowIndex()
	if(!$max){ return}
    
	//Pide legajo de medico para acceder aal form
	globals.Hcicir_vSolomedicos=true
	globals.Hcicir_esAnestesista=false
	globals.Hcicir_vLegajo=0
	globals.Hcicir_vLega=0
	globals.Hcicir_vOperador=''
	globals.Hcicir_vClave=0
    var win = application.createWindow("legajo_medico",JSWindow.MODAL_DIALOG)	
    win.title= 'Ingrese Legajo del m??dico'
    win.setSize(570,260)
    win.resizable = false
    win.show(forms.Hcicir_dlg_pideLegajoMedico)
	win.destroy()
	if(globals.Hcicir_esAnestesista && globals.Hcicir_vSolomedicos ){}
	else{return}

	//Muestra Formulario Principal
	win = application.createWindow("Menu_item",JSWindow.MODAL_DIALOG)	
    win.title= globals.gbl_title
    win.resizable = true	
    win.show(forms.Hcicir_frm_hist_clin_ingreso_cirugia)
	win.destroy()
	
}

/**
 * @properties={typeid:24,uuid:"7FC1CF7B-B21E-4D6A-B7E7-7C7045C38989"}
 */
function Hcicir_convertNumbertToDate_DDMMAAAA() {
	var fecha = '';
	if(arguments[0] != '0')
		fecha = arguments[0].toString().substr(6,2)+"/"+arguments[0].toString().substr(4,2)+"/"+arguments[0].toString().substr(0,4);
	
	return fecha;
}

/**
 * @properties={typeid:24,uuid:"468AD3F9-103F-4F92-98F6-021B53152B22"}
 */
function Hcicir_convertNumberToHour_HHMM() {
	
	var hora = "";
	var value = arguments[0];
	
	if(value < 100){
		hora = "00:00";
	}
	else{
		if(value < 1000){
			hora = "00:0" + value.toString().substr(0,1);
		}
		else{
			if(value < 10000){
				hora = "00:" + value.toString().substr(0,2);
			}
			else{
				if(value < 100000){
					hora = "0" + value.toString().substr(0,1) + ":" + value.toString().substr(1,2);
				}
				else{
					if(value <= 235959){
						hora = value.toString().substr(0,2) + ":" + value.toString().substr(2,2);
					}
				}
			}
		}
	}

	return hora;
}

/**
 * @properties={typeid:24,uuid:"869EEE5F-D38E-457B-A7AC-1E70E691BB69"}
 */
function hcicir_calculaDigitoVerificador() {
	var aux_dig = new Array(5);
	if(globals.Hcicir_vlargo==2){
		aux_dig[0] = 0
		aux_dig[1] = 0
		aux_dig[2] = 0
		aux_dig[3] = globals.Hcicir_vLega.toString().substr(0,1);
		aux_dig[4] = globals.Hcicir_vLega.toString().substr(1,1);
	}else{
		if (globals.Hcicir_vlargo==3){
			aux_dig[0] = 0
			aux_dig[1] = 0
			aux_dig[2] = globals.Hcicir_vLega.toString().substr(0,1);
			aux_dig[3] = globals.Hcicir_vLega.toString().substr(1,1);
			aux_dig[4] = globals.Hcicir_vLega.toString().substr(2,1);
		}else{
			if(globals.Hcicir_vlargo==4){
				aux_dig[0] = 0
				aux_dig[1] = globals.Hcicir_vLega.toString().substr(0,1);
				aux_dig[2] = globals.Hcicir_vLega.toString().substr(1,1);
				aux_dig[3] = globals.Hcicir_vLega.toString().substr(2,1);
				aux_dig[4] = globals.Hcicir_vLega.toString().substr(3,1);
			}else{
				if(globals.Hcicir_vlargo==5){
					aux_dig[0] = globals.Hcicir_vLega.toString().substr(0,1);
					aux_dig[1] = globals.Hcicir_vLega.toString().substr(1,1);
					aux_dig[2] = globals.Hcicir_vLega.toString().substr(2,1);
					aux_dig[3] = globals.Hcicir_vLega.toString().substr(3,1);
					aux_dig[4] = globals.Hcicir_vLega.toString().substr(4,1);
				}
			}
		}
	}
	var verificador = 0;
	verificador = utils.stringToNumber(aux_dig[1]) + utils.stringToNumber(aux_dig[2]) * 3 + utils.stringToNumber(aux_dig[3]) * 9 + utils.stringToNumber(aux_dig[4]) * 7;
	var larg = verificador.toString().length - 1;
	if(globals.Hcicir_digito_verificador!=verificador.toString().substr(larg,1)){
		globals.Hcicir_vDigVerif=false
	}

}
