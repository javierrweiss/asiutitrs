/**
 * @properties={typeid:35,uuid:"6D3F4A4E-7BAB-43D7-9829-12D1BCB73598",variableType:-4}
 */
var consulta_288_permisos = new Array();

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"EEC8775B-A293-489C-8268-D7CB787047EB"}
 */
var consulta_288_html_laboratorio = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"E9D43A14-CB2E-4EE4-935E-221906E480FA"}
 */
var consulta_288_html_escAlderete = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"5978CAC6-BBE6-440C-B338-7CE783C81499"}
 */
var consulta_288_html_evalAnestPre = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"8E2D3A6C-A683-4967-9FCF-E8CF9DB89D5E"}
 */
var consulta_288_txtEvaluacionAnestPost = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"9A1C9128-5BC3-43FF-8FC1-6C06CF187CC2"}
 */
var consulta_288_anestesiaMedic = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"7BDD944C-3C91-4189-9496-72C46FC4C26D"}
 */
var consulta_288_txtAnestesiaComent = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"35F49736-55D3-4222-ACBB-81DEEFAD0F01"}
 */
var consulta_288_txtIntensificador = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"B2F91140-E516-4AB8-8B1F-C829F4BC6CDA"}
 */
var consulta_288_txtMonitoreo = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"9CCD9C6B-84B1-45A0-AA1E-95D269C42E0D"}
 */
var consulta_288_txtHemoterapia = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"DC7E290A-0BB9-4A97-8CE6-32EDC35D24C6"}
 */
var consulta_288_txtDiagnostico = '';

/**
 * @properties={typeid:24,uuid:"06A69ADF-C77C-4F95-AF93-CC983561D840"}
 */
function onSolutionOpen_consulta_288() {
	
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
 * @properties={typeid:24,uuid:"7F26AE3D-B2B8-4ECA-ADA0-6F73D2D3F034"}
 */
function consulta_288_convertNumbertToDate_DDMMAAAA() {
	var fecha = '';
	if(arguments[0] != '0')
		fecha = arguments[0].toString().substr(6,2)+"/"+arguments[0].toString().substr(4,2)+"/"+arguments[0].toString().substr(0,4);
	
	return fecha;
}

/**
 * @properties={typeid:24,uuid:"0CF03EC1-2918-45F3-AEBA-3B931FBFCCB6"}
 */
function consulta_288_convertNumberToHour_HHMM() {
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
 * TODO generated, please specify type and doc for the params
 * @param args
 *
 * @properties={typeid:24,uuid:"7921B8D0-159D-4DF4-B097-32010B1AF6F6"}
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
	globals.gbl_title= 'Consulta de Protocolos Quirurgicos Ambulatorios'
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
    globals.consulta_288_permisos = databaseManager.getDataSetByQuery("desal", $SQL, $Args, -1);	
    var $max = globals.consulta_288_permisos.getMaxRowIndex()
	if(!$max){ return}	
    
	//Muestra Formulario Principal
	var win = application.createWindow("Menu_item",JSWindow.MODAL_DIALOG)	
    win.title= globals.gbl_title
    win.resizable = true	
    win.show(forms.consulta_288_frm_protocolo_quirurgico_ambulatorio)
	win.destroy()
	
	}

/**
 * @properties={typeid:24,uuid:"DBA1F4EE-7215-407C-9021-18DEC0F4D8A2"}
 */
function consulta_288_calcularEdad(fecha_nac,fechaHasta) {
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
 * @properties={typeid:24,uuid:"037AABEF-76CB-4574-8C3D-D7BDEFBE38F6"}
 */
function consulta_288_controlarElementos($form) {
	var $tope_form = globals.consulta_288_permisos.getMaxRowIndex()
	var $element = forms[$form].elements.allnames
	var $tope_elem = $element.length
	
	for (var i = 1; i <= $tope_form; i++){		
		if ($form == globals.consulta_288_permisos.getValue(i,3)){
			for(var j=0;j <= $tope_elem; j++){
				if($element[j]== globals.consulta_288_permisos.getValue(i,4)){
					if(globals.consulta_288_permisos.getValue(i,5)==true){
						forms[$form].elements[$element[j]].visible = true
					}else{
						forms[$form].elements[$element[j]].visible = false
					}
					if(globals.consulta_288_permisos.getValue(i,6)==true){
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
