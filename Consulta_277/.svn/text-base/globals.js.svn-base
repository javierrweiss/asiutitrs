/**
 * @properties={typeid:35,uuid:"2C825ED1-5B73-49EC-9D01-F302A5C2B0BC",variableType:-4}
 */
var consulta_277_permisos = new Array();

/**
 * @properties={typeid:35,uuid:"BEDDD9D9-3324-4EA9-AB07-FDC3BEC88387",variableType:-4}
 */
var gbl_cerrarConsultaProtocolo = false;

/**
 * @properties={typeid:35,uuid:"CAE7BC4A-E823-4DC9-B03C-C7A4B528DA47",variableType:-4}
 */
var gbl_cerrarDetalleProtocolo = false;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"702458F3-7DF8-4646-B8EA-C4EF16AE0046"}
 */
var gbl_tempHTML = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"721A9D2F-3FFC-4FD8-93E4-5DFA88445689"}
 */
var gbl_column3 = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"068294C4-5312-4998-AC2B-BA4752308916"}
 */
var gbl_column2 = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"AD5D36EE-4743-41B8-9DF0-E6C0C17F1DB2"}
 */
var gbl_column1 = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"3FB6291C-7DEA-49AC-B726-526C9CA2870D"}
 */
var gbl_column0 = '';

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"3FFCE7C7-83EE-4C89-AFCA-0A2940F43B86",variableType:4}
 */
var gbl_vArticulo = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"55C25694-1DF4-4436-B19C-79B0E81C1A4B",variableType:4}
 */
var gbl_vTipoArt = 0;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"A04613F3-FEB2-430E-9CE4-4026DF5F926C"}
 */
var gbl_evaluacionText = '';

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"DC7C2842-2166-4930-BFE4-52834CFFE813",variableType:8}
 */
var gbl_historiaClinica = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"DCB2A7C5-8DC1-4908-9633-068610A2F865",variableType:4}
 */
var gbl_protocolo = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"4F45C3D6-5F1F-412E-9EED-E9C42BB9CFF3",variableType:4}
 */
var gbl_parUltNumero_1 = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"ECAACF73-2782-4880-B55E-A0AA9F814FD8",variableType:4}
 */
var gbl_grupo = 0;

/**
 * @properties={typeid:24,uuid:"4289CFEB-C357-4721-95DD-0C7233F48522"}
 */
function convertNumbertToDate_DDMMAAAA() {
		
	var fecha = '';
	if(arguments[0] != '0')
		fecha = arguments[0].toString().substr(6,2)+"/"+arguments[0].toString().substr(4,2)+"/"+arguments[0].toString().substr(0,4);
	
	return fecha;
}

/**
 * @properties={typeid:24,uuid:"75545929-2319-4396-A390-FE7A6FEFF357"}
 */
function convertNumberToLegajo() {
	var leg = '';
	if(arguments[0] != '0')
		leg = arguments[0].toString().substr(0,(arguments[0].toString().length - 1))+"/"+arguments[0].toString().substr((arguments[0].toString().length - 1),1);
	
	return leg;
}

/**
 * @properties={typeid:24,uuid:"B7E6A49C-079B-4982-99B8-8423D614B15C"}
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
 * @properties={typeid:24,uuid:"A44F1982-791E-4407-84BF-9B432CD6106D"}
 */
function getParUltNumero_1() {
	
	var sql1 = 'SELECT parultnumero_1'
		+ ' FROM tbc_param_his'		
		+ ' WHERE ParArchivo = 6';

	var ds = databaseManager.getDataSetByQuery('asistencial',sql1,null,-1);		
	if(ds.getMaxRowIndex() > 0){
		gbl_parUltNumero_1 = Number(ds.getValue(1,1));					
	}
}

/**
 * Callback method for when solution is opened.
 *
 * @properties={typeid:24,uuid:"7067C5ED-0C32-4560-A8EB-F5D4232CCE64"}
 */
function onSolutionOpen_Protocolos() {
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
 * TODO generated, please specify type and doc for the params
 * @param args
 *
 * @properties={typeid:24,uuid:"42D93948-37D7-4F72-9311-B63F07A888C8"}
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
	globals.gbl_title= 'Consulta de Protocolos Quirurgicos Internados'
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
    globals.consulta_277_permisos = databaseManager.getDataSetByQuery("desal", $SQL, $Args, -1);	
    var $max = globals.consulta_277_permisos.getMaxRowIndex()
	if(!$max){ return}	
    
	//Muestra Formulario Principal
	var win = application.createWindow("Menu_item",JSWindow.MODAL_DIALOG)	
    win.title= globals.gbl_title
    win.resizable = true	
    win.show(forms.frm_protocolos_quirurgicos)
	win.destroy()
}

/**
 * @properties={typeid:24,uuid:"8A28CB7D-D36D-4B9B-ADB8-0B46846C2DBB"}
 */
function consulta_277_calcularEdad(fecha_nac,fechaHasta) {
	var final_mes = new Array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);

	globals.fecha_aux = fecha_nac;
	var fecha_aux1 = fecha_nac!=null?fecha_nac.toString():''
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
 * @properties={typeid:24,uuid:"8D9F5DE9-407A-4A4C-966B-C96D1AC30A03"}
 */
function consulta_277_controlarElementos($form) {
	var $tope_form = globals.consulta_277_permisos.getMaxRowIndex()
	var $element = forms[$form].elements.allnames
	var $tope_elem = $element.length
	
	for (var i = 1; i <= $tope_form; i++){		
		if ($form == globals.consulta_277_permisos.getValue(i,3)){
			for(var j=0;j <= $tope_elem; j++){
				if($element[j]== globals.consulta_277_permisos.getValue(i,4)){
					if(globals.consulta_277_permisos.getValue(i,5)==true){
						forms[$form].elements[$element[j]].visible = true
					}else{
						forms[$form].elements[$element[j]].visible = false
					}
					if(globals.consulta_277_permisos.getValue(i,6)==true){
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
