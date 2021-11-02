/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"8007CE29-A89D-481D-94DA-31871FF44CF9",variableType:4}
 */
var AsiUcoMod_Rep_guar_horaIngreso = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"00DD839C-0C0E-4C74-84D9-4E58CC54204B",variableType:8}
 */
var AsiUcoMod_Rep_guar_histClinica = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"9C03C001-1E57-4DEF-BDDA-AA3BFE4DBE5D",variableType:4}
 */
var AsiUcoMod_Rep_guar_fechaIngreso = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"6BD0E6BC-A0E3-4CB5-B7FB-E601557A9259",variableType:8}
 */
var AsiUcoMod_Rep_histCabNroUnico = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"C438DDFD-5A82-473B-9B6D-D01806986575",variableType:4}
 */
var AsiUcoMod_Rep_perLegajo = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"EF2AAB70-FBA9-4EDC-B0ED-B16B164B765E",variableType:4}
 */
var AsiUcoMod_Rep_patCodi = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"62FCE06F-F07B-4AF2-AC65-64CA378739C7",variableType:4}
 */
var AsiUcoMod_Rep_obrCodigo = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"A4536DB3-DC7C-481D-81E5-697C6E47B304",variableType:8}
 */
var AsiUcoMod_Rep_medCodigo = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"7041B37B-E346-4629-811E-0E3FA1828948",variableType:4}
 */
var AsiUcoMod_Rep_hiuHora = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"90196F16-5C72-44BB-9410-4F346309F99D",variableType:4}
 */
var AsiUcoMod_Rep_hiuFecha = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"ED0100FD-992E-4320-8003-DCA72B4E88CC",variableType:8}
 */
var AsiUcoMod_Rep_hiuHisCli = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"272B54C7-9F10-4569-9780-33B06B09305C",variableType:8}
 */
var AsiUcoMod_Rep_aler_histClin = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"651C25EC-64E0-4CDE-A4AA-5DF8A4133854",variableType:8}
 */
var AsiUcoMod_Rep_adm_histClin = 0;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"E7991849-3475-459F-98E7-0FCC36BDF02F"}
 */
var users = null;


/**
 * 
 * @param {Number} histClin
 * @param {Number} hiuFecha
 * @param {Number} hiuHora
 * @param {Number} tipoSalida
 * @param {Boolean} showWarning
 *
 * @return {String}
 * @properties={typeid:24,uuid:"C75E6779-DB72-4F03-B19E-73B63970D9CE"}
 */
function AsiUcoMod_Rep_imprimir(histClin,hiuFecha,hiuHora,tipoSalida,showWarning) {
	
	var absoluteFileName = '';
	
	absoluteFileName = forms.AsiUcoMod_Rep_subBuild.subBuildReport(histClin,hiuFecha,hiuHora,tipoSalida,showWarning);
	
	return absoluteFileName;
}

/**
 * TODO generated, please specify type and doc for the params
 * @param histClin
 * @param hiuFecha
 * @param hiuHora
 * @param tipoSalida
 * @param showWarning
 *
 * @properties={typeid:24,uuid:"EFBD1BD8-D3C9-43D2-B940-5471394F9D05"}
 */
function AsiUcoMod_Rep_imprimirHoja(histClin,hiuFecha,hiuHora,tipoSalida,showWarning) {
	
	var absoluteFileName = '';
	absoluteFileName = forms.AsiUcoMod_Rep_subBuild.subBuildReportHoja(histClin,hiuFecha,hiuHora,tipoSalida,showWarning);
	return absoluteFileName;
}


/**
 * 
 * @param {Number} fecha_nac
 * @param {Number} fechaHasta
 *
 * @properties={typeid:24,uuid:"D5E94FB9-E00C-42BC-AB02-364C4EFF2DEE"}
 */
function AsiUcoMod_Rep_calcularEdad(fecha_nac,fechaHasta) {
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
