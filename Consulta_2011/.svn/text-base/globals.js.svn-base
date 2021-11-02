
/**
 * @properties={typeid:35,uuid:"C20D3852-1407-4FE1-95A7-F615EDA34648",variableType:-4}
 */
var consulta_2011_permisos = new Array();

/**
 * @properties={typeid:35,uuid:"0160BD22-09F2-4877-87BD-FDFED6F3E878",variableType:-4}
 */
var gbl_cerrarConsultaRegistro = false;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"BF7AB83C-0EFE-4C06-9BBC-39FEF882A491"}
 */
var gbl_tempHTML = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"2905B910-227D-4A9C-AFD3-C08F767AB2B4"}
 */
var gbl_column3 = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"4998219B-AA28-4309-AD69-35B4FE9F5A96"}
 */
var gbl_column2 = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"D0791F77-AA4A-4CBA-9953-D5154AA2458F"}
 */
var gbl_column1 = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"48C6284E-4E5D-406D-B925-543D91A1C575"}
 */
var gbl_column0 = '';

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"C5B5A1EA-7654-44A2-9E0A-200BBF2829E5",variableType:4}
 */
var gbl_vArticulo = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"EC073838-7FE3-48DF-A04D-AEC3731177A5",variableType:4}
 */
var gbl_vTipoArt = 0;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"6246C598-D151-406D-9D0E-2A4F651D122D"}
 */
var gbl_evaluacionText = '';

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"E5AC0BB8-61A9-42A5-8F3D-7233A2B89A6E",variableType:4}
 */
var gbl_historiaClinica = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"CC05FBD9-D832-4467-AC94-313CCC3EE3A7",variableType:4}
 */
var gbl_protocolo = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"53D9854F-90F4-48BC-9CB3-C0F0273D1D67",variableType:4}
 */
var gbl_parUltNumero_1 = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"71523FCA-2AB9-4A92-A95F-75092C4D45A4",variableType:4}
 */
var gbl_grupo = 0;

/**
 * @properties={typeid:24,uuid:"F741BEE7-680C-4E2C-85E6-3B2DDC49A55B"}
 */
function convertNumbertToDate_DDMMAAAA() {
		
	var fecha = '';
	if(arguments[0] != '0')
		fecha = arguments[0].toString().substr(6,2)+"/"+arguments[0].toString().substr(4,2)+"/"+arguments[0].toString().substr(0,4);
	
	return fecha;
}

/**
 * @properties={typeid:24,uuid:"BAF7B558-CDAD-47DF-AB9A-145163E90D53"}
 */
function convertNumberToLegajo() {
	var leg = '';
	if(arguments[0] != '0')
		leg = arguments[0].toString().substr(0,(arguments[0].toString().length - 1))+"/"+arguments[0].toString().substr((arguments[0].toString().length - 1),1);
	
	return leg;
}

/**
 * @properties={typeid:24,uuid:"692CE7A8-BCA7-465D-A324-240786975F8D"}
 */
function convertNumberToHour_HHMM() {
	
	var hora = '';
	
	switch(arguments[0].toString().length){
		
		case 1: 
			hora = '00:0'+ arguments[0].toString();
			break;
		case 2:
			hora = '00:'+ arguments[0].toString();
			break;
		case 3:
			hora = '0'+ arguments[0].toString().substr(0,1) + ':' + arguments[0].toString().substr(1,2);
			break;
		case 4:
			hora = arguments[0].toString().substr(0,2) + ':' + arguments[0].toString().substr(2,2);
			break;
		default:
			hora = '';
			break;
	}

	return hora;
}
/**
 * @properties={typeid:24,uuid:"5AD4936A-3F08-439A-A5E6-F16541019563"}
 */
function onSolutionOpen_Registro() {
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
    databaseManager.setAutoSave(false)
}

/** 
 * @param args
 *
 * @properties={typeid:24,uuid:"5A9C3697-3E9B-4E46-8A82-FFF087BA417B"}
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
	globals.gbl_title= 'Libro de Pacientes Internados'
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
    globals.consulta_2011_permisos = databaseManager.getDataSetByQuery("desal", $SQL, $Args, -1);	
    var $max = globals.consulta_2011_permisos.getMaxRowIndex()
	if(!$max){ return}	
    
	//Muestra Formulario Principal
	var win = application.createWindow("Menu_item",JSWindow.MODAL_DIALOG)	
    win.title= globals.gbl_title
    win.resizable = true	 
    win.show(forms.frm_registro_pacientes_internados)
	win.destroy()
}

/**
 * @param fecha_nac
 * @param fechaHasta
 *
 * @properties={typeid:24,uuid:"50972E8D-8D60-4421-9AC8-E19118C956C6"}
 */
function consulta_2011_calcularEdad(fecha_nac,fechaHasta) {
	var final_mes = new Array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);

	globals.fecha_aux = fecha_nac;
	var fecha_aux1 = fecha_nac.toString()
	var anio_nac = utils.stringToNumber(fecha_aux1.substr(0,4))
	var mes_nac = utils.stringToNumber(fecha_aux1.substr(4,2))
	var dia_nac = utils.stringToNumber(fecha_aux1.substr(6,2))
	
	var fecha_aux2 = fechaHasta.toString()
	var anio_hasta = utils.stringToNumber(fecha_aux2.substr(0,4))
	var mes_hasta = utils.stringToNumber(fecha_aux2.substr(4,2))
	var dia_hasta = utils.stringToNumber(fecha_aux2.substr(6,2))
	
	var anio_actual = anio_hasta;
	var resto = anio_actual % 4;
	if (resto == 0) final_mes[1] = 29;
	var edad = anio_hasta - anio_nac;
	if (edad != 0) {
		if ((mes_hasta) < mes_nac) {
			--edad;
		} else {
			if ((mes_hasta) == mes_nac) {
				if (dia_hasta < dia_nac) {
					--edad;
				}
			}
		}
		
		if (edad > 1) {
			globals.vTipoEdad = "años";
		} else {
			if (edad == 1){
			    globals.vTipoEdad = "año";
			}else{
				if (mes_nac > (mes_hasta)){
					edad = mes_nac - (mes_hasta) 
				}else{
				    edad = (mes_hasta) - mes_nac
				}
				if (edad != 0) {
					if (edad > 1) {
						globals.vTipoEdad = "meses";
					} else {
						if (dia_hasta < dia_nac) {
							edad = (dia_hasta + final_mes[mes_nac]) - dia_nac;
							globals.vTipoEdad = "días"
						} else {
							globals.vTipoEdad = "mes";
						}
					}
				} else {
					if (dia_nac > (mes_hasta)){
						edad = dia_nac - (mes_hasta) 
					}else{
					    edad = dia_hasta - dia_nac
					}
					if (edad > 1) {
						globals.vTipoEdad = "días";
					} else {
						edad = 1;
						globals.vTipoEdad = "día";
					}
				}				
			}				
		}
	} else {
		if (mes_nac > (mes_hasta)){
			edad = mes_nac - (mes_hasta) 
		}else{
		    edad = (mes_hasta) - mes_nac
		}
		if (edad != 0) {
			if (edad > 1) {
				globals.vTipoEdad = "meses";
			} else {
				if (dia_hasta < dia_nac) {
					edad = (dia_hasta + final_mes[mes_nac]) - dia_nac;
					globals.vTipoEdad = "días"
				} else {
					globals.vTipoEdad = "mes";
				}
			}
		} else {
			if (dia_nac > (mes_hasta)){
				edad = dia_nac - (mes_hasta) 
			}else{
			    edad = dia_hasta - dia_nac
			}
			if (edad > 1) {
				globals.vTipoEdad = "días";
			} else {
				edad = 1;
				globals.vTipoEdad = "día";
			}
		}
	}
	return edad
}

/** 
 * @param $form
 *
 * @properties={typeid:24,uuid:"3CA0ECD6-1D96-4805-978D-DB9A58DC167B"}
 */
function consulta_2011_controlarElementos($form) {
	var $tope_form = globals.consulta_2011_permisos.getMaxRowIndex()
	var $element = forms[$form].elements.allnames
	var $tope_elem = $element.length
	
	for (var i = 1; i <= $tope_form; i++){		
		if ($form == globals.consulta_2011_permisos.getValue(i,3)){
			for(var j=0;j <= $tope_elem; j++){
				if($element[j]== globals.consulta_2011_permisos.getValue(i,4)){
					if(globals.consulta_2011_permisos.getValue(i,5)==true){
						forms[$form].elements[$element[j]].visible = true
					}else{
						forms[$form].elements[$element[j]].visible = false
					}
					if(globals.consulta_2011_permisos.getValue(i,6)==true){
						forms[$form].elements[$element[j]].enabled = true
					}else{
						forms[$form].elements[$element[j]].enabled = false
					}
					j = 99
				}
			}
		}
	}
}
