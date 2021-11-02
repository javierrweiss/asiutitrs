

/**
 * @properties={typeid:35,uuid:"119C987C-FEAB-42BE-A5F8-FD22B4FDC5C5",variableType:-4}
 */
var Srv_Login_Sanatorio_vSolomedicos=true

/**
 * @properties={typeid:35,uuid:"7D3D991C-1433-4743-AAD4-2E8DBCCEE2BD",variableType:-4}
 */
var Srv_Login_Sanatorio_esAnestesista=false


/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"111D722C-E50D-40E7-98DD-97DFBDBBD9FD",variableType:4}
 */
var Srv_Login_Sanatorio_Codigo_Especialidad=0;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"68224BFB-FDBF-47D7-B6F6-BCF353AB1163"}
 */
var Srv_Login_Sanatorio_Titulo_Login_Profesional='Ingrese Legajo del médico';

/**
 * @properties={typeid:35,uuid:"B01FADE3-9867-43FA-A57C-F13A448A0D17",variableType:-4}
 */
var Srv_Login_Sanatorio_esDelaEspecialidadMedica= false;



/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"EFA1B4C2-8EFE-48E9-B09D-2729E24423A3",variableType:4}
 */
var Srv_Login_Sanatorio_vTipoTecnico = 0;


/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"4E9FBE9F-94F1-4D20-A69B-17199A3B0154",variableType:4}
 */
var Srv_Login_Sanatorio_vTipoOperador = 0;


/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"BA5C0B3C-2D4D-44AF-9FF9-5AD3C3037CA5"}
 */
var Srv_Login_Sanatorio_vPassOperador = '';


/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"F7C39C23-5FEE-44B8-82D0-74231F95BA8C",variableType:4}
 */
var Srv_Login_Sanatorio_vLegajo=0

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"C16253D7-8C88-4206-A573-8804EC12EFDA",variableType:4}
 */
var Srv_Login_Sanatorio_vLega=0

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"495B6AA4-4AA0-454C-ADF7-A60CA319597C"}
 */
var Srv_Login_Sanatorio_vOperador=''

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"6C7CDD39-AC74-4401-9D90-10EAB0B1CDE9",variableType:4}
 */
var Srv_Login_Sanatorio_vClave=0

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"8BC4E6EE-66E4-4B57-B2B5-FD53C051C6E1",variableType:4}
 */
var Srv_Login_Sanatorio_vEspeMed = 0;
	
	

/**
 * @properties={typeid:35,uuid:"A8DC9CA7-D1CD-4DC2-846E-40063DB50B79",variableType:-4}
 */
var Srv_Login_Sanatorio_permisos = new Array();


/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"2C10A2E1-6A09-44C1-AEFB-B322EA00201E",variableType:4}
 */
var Srv_Login_Sanatorio_vlargo = 0

/**
 * @properties={typeid:35,uuid:"2B23711D-7293-48E2-9096-0392DBCBCFDC",variableType:-4}
 */
var Srv_Login_Sanatorio_vDigVerif = false;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"56BE7D3F-0D94-47DB-86BC-8715D01235E4",variableType:4}
 */
var Srv_Login_Sanatorio_digito_verificador = 0;
	
/**
 * @properties={typeid:24,uuid:"A5A8650F-95D5-484C-883E-346C2BE2900C"}
 */
function loginSolution(){
	
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
    Srv_Login_Sanatorio_permisos = databaseManager.getDataSetByQuery("desal", $SQL, $Args, -1);	
    var $max = globals.Srv_Login_Sanatorio_permisos.getMaxRowIndex()
	if(!$max){ return}
    
	
	
	
	
	//Pide legajo de medico para acceder al form
	if(globals.Srv_Login_Sanatorio_vSolomedicos==false){
		Srv_Login_Sanatorio_vSolomedicos=false
	}else{
		Srv_Login_Sanatorio_vSolomedicos=true
	}
	
	Srv_Login_Sanatorio_esAnestesista=false
	Srv_Login_Sanatorio_esDelaEspecialidadMedica = false; 
	Srv_Login_Sanatorio_vLegajo=0
	Srv_Login_Sanatorio_vLega=0
	Srv_Login_Sanatorio_vOperador=''
	Srv_Login_Sanatorio_vClave=0
	Srv_Login_Sanatorio_vEspeMed = 0;
	
	
	
	
    var win = application.createWindow("legajo_medico",JSWindow.MODAL_DIALOG)	
    win.title= globals.Srv_Login_Sanatorio_Titulo_Login_Profesional //'Ingrese Legajo del médico'
    win.setSize(570,260)
    win.resizable = false
    win.show(forms.Srv_Login_Sanatorio_dlg_pideLegajoMedico)
	win.destroy()
	
    
}


/**
 * @properties={typeid:24,uuid:"83397DF9-9209-4C85-B91B-B1B5DB230709"}
 */
function Srv_Login_Sanatorio_calculaDigitoVerificador() {
	var aux_dig = new Array(5);
	if(globals.Srv_Login_Sanatorio_vlargo==2){
		aux_dig[0] = 0
		aux_dig[1] = 0
		aux_dig[2] = 0
		aux_dig[3] = globals.Srv_Login_Sanatorio_vLega.toString().substr(0,1);
		aux_dig[4] = globals.Srv_Login_Sanatorio_vLega.toString().substr(1,1);
	}else{
		if (globals.Srv_Login_Sanatorio_vlargo==3){
			aux_dig[0] = 0
			aux_dig[1] = 0
			aux_dig[2] = globals.Srv_Login_Sanatorio_vLega.toString().substr(0,1);
			aux_dig[3] = globals.Srv_Login_Sanatorio_vLega.toString().substr(1,1);
			aux_dig[4] = globals.Srv_Login_Sanatorio_vLega.toString().substr(2,1);
		}else{
			if(globals.Srv_Login_Sanatorio_vlargo==4){
				aux_dig[0] = 0
				aux_dig[1] = globals.Srv_Login_Sanatorio_vLega.toString().substr(0,1);
				aux_dig[2] = globals.Srv_Login_Sanatorio_vLega.toString().substr(1,1);
				aux_dig[3] = globals.Srv_Login_Sanatorio_vLega.toString().substr(2,1);
				aux_dig[4] = globals.Srv_Login_Sanatorio_vLega.toString().substr(3,1);
			}else{
				if(globals.Srv_Login_Sanatorio_vlargo==5){
					aux_dig[0] = globals.Srv_Login_Sanatorio_vLega.toString().substr(0,1);
					aux_dig[1] = globals.Srv_Login_Sanatorio_vLega.toString().substr(1,1);
					aux_dig[2] = globals.Srv_Login_Sanatorio_vLega.toString().substr(2,1);
					aux_dig[3] = globals.Srv_Login_Sanatorio_vLega.toString().substr(3,1);
					aux_dig[4] = globals.Srv_Login_Sanatorio_vLega.toString().substr(4,1);
				}
			}
		}
	}
	var verificador = 0;
	verificador = utils.stringToNumber(aux_dig[1]) + utils.stringToNumber(aux_dig[2]) * 3 + utils.stringToNumber(aux_dig[3]) * 9 + utils.stringToNumber(aux_dig[4]) * 7;
	var larg = verificador.toString().length - 1;
	if(globals.Srv_Login_Sanatorio_digito_verificador!=verificador.toString().substr(larg,1)){
		globals.Srv_Login_Sanatorio_vDigVerif=false
	}

}
