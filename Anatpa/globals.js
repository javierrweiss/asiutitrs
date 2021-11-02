/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"8EC4DBEC-8F44-423A-AE15-752F0B216DB9",variableType:8}
 */
var Anatpa_interface_nroPedido = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"D4CAFDF0-2AED-4971-840E-CBF7034F30F7",variableType:8}
 */
var Anatpa_interface_servicio = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"B3347EB4-9BE5-418E-97B8-5791264A4DEA",variableType:4}
 */
var Anatpa_interface_tipoPaciente = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"0D4CE602-22CA-4D76-8E92-A5717C83E7B2",variableType:4}
 */
var Anatpa_interface_tipoMedico = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"F99F3205-C421-406F-A3A0-589895354D21",variableType:4}
 */
var Anatpa_interface_legajoMedico = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"60210894-6F2B-43FD-867A-8BAAF6074A8D",variableType:4}
 */
var Anatpa_interface_iva = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"D7266123-8275-4626-A9E3-2481641CAC72",variableType:4}
 */
var Anatpa_interface_hora = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"08FE8E12-764F-4B9C-ACFE-505ECEE4EDDC",variableType:4}
 */
var Anatpa_interface_fecha = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"9DDD85C8-EA07-4284-876E-A341025C4ED3",variableType:8}
 */
var Anatpa_reservasIPedido = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"6BE04F49-DDC3-4FBF-8CC1-2AF2A5FC8047",variableType:4}
 */
var Anatpa_reservasEsta = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"8F5D07E7-7854-4573-86D1-E9DF09E6C540",variableType:4}
 */
var Anatpa_reservasFech5 = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"9C108A58-0E3E-4397-A5B5-58FFB190E742",variableType:8}
 */
var Anatpa_reservasHisCli = 0;

/**
 * @properties={typeid:35,uuid:"867C0E69-11A9-4BA3-9B01-6C892E9C6D7D",variableType:-4}
 */
var Anatpa_permisos = new Array();

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"F843CFDE-25BD-4522-9730-30B265820078",variableType:8}
 */
var anatpa_interface_nroSolicitud = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"63CBF9D6-D9B9-44E6-9CF4-C1D6254E9289",variableType:4}
 */
var Anatpa_protocolo = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"370C4C17-6AB0-4E64-856D-C1D1216299DA",variableType:4}
 */
var Anatpa_grupo = 0;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"67AB058B-CA9F-4528-A841-90475FA97273"}
 */
var Anatpa_ploPlanx = '';

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"25227796-231A-4AD5-B097-FFAB24847958",variableType:4}
 */
var Anatpa_ploObra = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"D987B78B-93C2-45FB-B7AB-BE062CBC74F3",variableType:4}
 */
var Anatpa_cajaNro = 0;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"4EBCC39F-51AC-49FE-8354-165962B8881D"}
 */
var Anatpa_f_cajaAlfa = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"110A5D9C-4FB4-41F8-934E-14D623A9F02F"}
 */
var Anatpa_cajaAlfa = '';

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"5A243D5F-AE75-4B96-B5BC-3FA22A9F7BAC",variableType:4}
 */
var Anatpa_codObraSocial = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"DD52E986-E422-44D9-B60C-3F0629176C7C",variableType:4}
 */
var Anatpa_eventSourceButton = 0;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"FE7B6B35-DCF2-4758-8EAD-D92EA613E4F5"}
 */
var Anatpa_apeynom = '';

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"0CE998D7-53FC-4347-94A5-9FC4EB14671E",variableType:4}
 */
var Anatpa_hiscli = 0;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"5E49FA66-8424-44D9-B010-B04BFF46E889"}
 */
var Anatpa_hisclistrynro = '';

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"A14C9D93-DD06-41B0-BAB1-8666CE5A5B50",variableType:4}
 */
var Anatpa_activoFormBuscarPaciente = 0;

/**
 * @properties={typeid:24,uuid:"0F50F4F5-C561-410E-8EDC-E96AC7582B8C"}
 */
function onSolutionOpen_anatpa() {
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
 * @properties={typeid:24,uuid:"F1954EA4-369C-4275-9535-0545019A6A2E"}
 */
function llamada_desde_Menu(args) {
	 
	// Trae datos desde el Menu
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
	globals.Anatpa_permisos = databaseManager.getDataSetByQuery("desal", $SQL, $Args, -1);	
    var $max = globals.Anatpa_permisos.getMaxRowIndex()
	if(!$max){ return}
    
    //Muestra Formulario Principal 
	if(globals.gbl_transacciones_1 != 0){
	    var $form = ''
	    switch (globals.gbl_transacciones_1){		
		    case  1: $form = 'Anatpa_frm_anatpaca'
			       ;break
		    case  2: $form = 'Anatpa_frm_reimpresion_solicitud'
	                ;break
	     }
	     
	     var win = application.createWindow("Menu_itm",JSWindow.MODAL_DIALOG)	
         win.title= globals.gbl_title
         win.resizable = false
         win.show(forms[$form])
		 win.destroy()
	}
}

/**
 * TODO generated, please specify type and doc for the params
 * @param $form
 *
 * @properties={typeid:24,uuid:"94771C1B-C8DF-4C98-8C89-2BAFCFC555A3"}
 */
function consulta_1046_controlarElementos($form) {
		var $tope_form = globals.Anatpa_permisos.getMaxRowIndex()
		var $element = forms[$form].elements.allnames
		var $tope_elem = $element.length
		
		for (var i = 1; i <= $tope_form; i++){		
			if ($form == globals.Anatpa_permisos.getValue(i,3)){
				for(var j=0;j <= $tope_elem; j++){
					if($element[j]== globals.Anatpa_permisos.getValue(i,4)){
						if(globals.Anatpa_permisos.getValue(i,5)==true){
							forms[$form].elements[$element[j]].visible = true
						}else{
							forms[$form].elements[$element[j]].visible = false
						}
						if(globals.Anatpa_permisos.getValue(i,6)==true){
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

/**
 * @properties={typeid:24,uuid:"050A3775-BF16-4DBF-A6F9-10E701F91FF7"}
 */
function Anatpa_getNoSi() {
	
	var text = '';
	if(arguments[0] != null )
		text = arguments[0] == 0? 'No':'Si';
	
	return text;
}

/**
 * @properties={typeid:24,uuid:"155D1479-5770-4D0F-BF89-BB709C4C70E6"}
 */
function Anatpa_convertNumbertToDate_DDMMAAAA() {
	var fecha = '';
	if(arguments[0] != '0')
		fecha = arguments[0].toString().substr(6,2)+"/"+arguments[0].toString().substr(4,2)+"/"+arguments[0].toString().substr(0,4);
	
	return fecha;
}

/**
 * TODO generated, please specify type and doc for the params
 * @param {Date} date
 * @param {Number} addCountDay
 * @param {JSDataSet} feriados
 * @param {Boolean} validarDom
 * @param {Boolean} validarFeriado
 *
 * @properties={typeid:24,uuid:"143046A2-B91D-40F3-AE47-12F1785F08FF"}
 */
function calcularFechaResultado(date,addCountDay,feriados,validarDom,validarFeriado){
	// calcular la cantidad de dias inicial
	date.setTime(date.getTime()+((1000*60*60*24)*addCountDay));
	
	if(validarDom){
		
		//valores para getDay() lu: 1, ma: 2, mi: 3, ju: 4, vi: 5, sa: 6, dom: 0
		var day = date.getDay();
		if( day == 0){
			// siempre que sea domingo solo se agrega un día
			date.setTime(date.getTime()+(1000*60*60*24));
		}
	}
	
	if(validarFeriado){
		//Es feriado
		var fecha = globals.FormatearFecha(date,'AAAAMMDD');
		var addDay = false;
		var i;
		for(i= 1; i<=feriados.getMaxRowIndex(); i++){
			if(fecha.equals(feriados.getValue(i,1))){
				addDay = true;
				break;
			}	
		}
		
		if(addDay){
			date = calcularFechaResultado(date,1,feriados,validarDom,validarFeriado);
		}
	}
	
	return date;
}

/**
 * TODO generated, please specify type and doc for the params
 * @param fecha_nac
 * @param fechaHasta
 *
 * @properties={typeid:24,uuid:"B475CF6E-2A8E-40C1-AC99-010F54BD006E"}
 */
function Anatpa_calcularEdad(fecha_nac,fechaHasta) {
	var final_mes = new Array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);

	//globals.fecha_aux = fecha_nac;
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
 * 
 * @param {String} $texto
 *
 * @return {String}
 * @properties={typeid:24,uuid:"B65AD340-90DD-4675-B509-5C80038D500B"}
 */
function Anatpa_conversion_caract_espec($texto) {
	// lista de carateres a reemplazar  los dos primeros son 'enter' y 'tab' respec.
	//var $ar_busq = ['\n','\r\n','	','á','é','í','ó','ú','Á','É','Í','Ó','Ú','ä','ë','ï','ö','ü','Ä','Ë','Ö','Ü','º','ª','à','è','ì','ò','ù','ñ','Ñ','Å','å','â','ê','î','ô','û','ÿ','ç','Ç']   // buscar todos los necesarios
	//var $ar_reem = [' ',' ',' ','a','e','i','o','u','A','E','I','O','U','a','e','i','o','u','A','E','O','U','.','.','a','e','i','o','u','#','#','A','a','a','e','i','o','u','y','c','C']
	// lista de carateres a reemplazar el primero son es 'tab' . NO trata aqui los 'enters'. Ver metodo global enter_conversion_nueva_linea   07/05/2018
	var $ar_busq = ['	','á','é','í','ó','ú','Á','É','Í','Ó','Ú','ä','ë','ï','ö','ü','Ä','Ë','Ö','Ü','º','ª','à','è','ì','ò','ù','ñ','Ñ','Å','å','â','ê','î','ô','û','ÿ','ç','Ç']   // buscar todos los necesarios
	var $ar_reem = [' ','a','e','i','o','u','A','E','I','O','U','a','e','i','o','u','A','E','O','U','.','.','a','e','i','o','u','#','#','A','a','a','e','i','o','u','y','c','C']
	//  del 032 al 095,  096 = no se,  y del 097 al 125  serían los rangos validos
	var cuantos = 0
	for (var i = 0 ; i < $ar_busq.length ; i++)
	{
		cuantos = utils.stringPatternCount($texto, $ar_busq[i])   // cuenta cuantos hay del caracter a buscar
		for (var j = 1 ; j < cuantos + 1 ; j++)    // reemplaza todos los caracteres del texto , el "replace" solo cambia el primero que encuentra
			{$texto = $texto.replace($ar_busq[i], $ar_reem[i])}
	}
	// rango valido
	for ( i = 0 ; i < $texto.length ; i++)
	{
	var $cod = $texto.charCodeAt(i)
	if ($cod < 32 || $cod > 125 )
		if ($cod != 10)  // 08/05/2018
		{$texto = $texto.replace($texto.substr(i , 1), ' ')}
	}
	return $texto
}
