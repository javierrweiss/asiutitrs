/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"53251CC7-600E-4A5D-BA62-6217A50F445A",variableType:4}
 */
var reimpresor_histcli_unico = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"6291A018-4E51-40A9-BC4A-B4D63AC6D7DE",variableType:4}
 */
var reimpresor_tipoPac = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"06003D0F-3908-4763-AFE7-7CCEFBDB1DAF",variableType:4}
 */
var reimpresor_tipohc = 1;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"7FF85F5D-52D4-44C1-B807-2FAAACCA4670",variableType:4}
 */
var reimpresor_preg_estado = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"AC1A069C-BDDA-491F-BD1E-795C233EA366",variableType:4}
 */
var reimpresor_tipo_prest = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"2EE61E66-DC62-4FA2-9FE0-1533551317FA",variableType:4}
 */
var reimpresor_secuencia = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"4F3B2451-86ED-4529-8853-F6873D641FFE",variableType:4}
 */
var reimpresor_cod_nome = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"49DCD178-179E-490E-8650-86F873239FF2",variableType:4}
 */
var reimpresor_tipo_nome = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"186A3886-9856-40C4-9F1C-3E1414D71D99",variableType:4}
 */
var reimpresor_grupoTexto = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"FCA09888-31B2-460B-A3F1-2E814283D326",variableType:4}
 */
var reimpresor_hora_ingreso = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"F3AD7FCE-EB0E-43EC-B426-3639CE6EC88B",variableType:4}
 */
var reimpresor_fecha_ingreso = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"C3CB4876-603B-4692-A7EB-A88197333E19",variableType:4}
 */
var reimpresor_protocolo = 0;

/**
 * @properties={typeid:35,uuid:"3164C084-06DC-4068-95B0-6E2CF6C804E5",variableType:-4}
 */
var reimpresor_filas = null;

/**
 * @properties={typeid:24,uuid:"DF4C0318-F339-4A5E-8E23-B6CCBD0DA7D7"}
 */
function reimpresor_busqueda_protocolo() {
	var query = "select cirgprotocolo, cirghistclinica, cirgfechaingreso, cirghoraingreso from tbc_ciruguar CIRU\
                 inner join tbc_guardia GUA on GUA.Guar_HistClinica=CIRU.CirgHistClinica AND GUA.Guar_FechaIngreso=CIRU.CirgFechaIngreso AND GUA.Guar_HoraIngreso=CIRU.CirgHoraIngreso\
                 where CIRU.CirgHistClinica = ? and GUA.Guar_Estado > 3"
	//var query = "select cirihistcl, cirifechacarga, cirihoracarga from tbc_cirugint where cirihistcl = ? and ciritiponome = 0 and ciricodnome = 0 and ciriprotocolo > 0";
    var args = new Array();
    args[0]=globals.vHiscli;
    var dataset = new Array();
    dataset = databaseManager.getDataSetByQuery("asistencial", query, args, 300);
    globals.reimpresor_filas = dataset.getMaxRowIndex()
	if (globals.reimpresor_filas>0){
		//for(var i=0;i>globals.reimpresor_filas;i++){
			//globals.reimpresor_protocolo[i]=dataset.getValue(i,4)
		//}
		forms.reimpresor_frm_consulta_protocolo.elements.protocolo.setValueListItems(dataset)
	}
}

/**
 * Called when the valuelist needs data, it has 3 modes.
 * real and display params both null: return the whole list
 * only display is specified, called by a typeahead, return a filtered list
 * only real value is specified, called when the list doesnt contain the real value for the give record value, this will insert this value into the existing list
 *
 * @param {String} displayValue The value of a lookupfield that a user types
 * @param realValue The real value for a lookupfield where a display value should be get for
 * @param {JSRecord} record The current record for the valuelist.
 * @param {String} valueListName The valuelist name that triggers the method. (This is the FindRecord in find mode, which is like JSRecord has all the columns/dataproviders, but doesn't have its methods)
 * @param {Boolean} findMode True if foundset of this record is in find mode
 *
 * @returns {JSDataSet} A dataset with 1 or 2 columns display[,real]
 *
 * @properties={typeid:24,uuid:"96DC4999-ED3D-45BF-9970-E9DAFFEAF6BE"}
 */
function getDataSetForValueList_reimpresor_protocolo(displayValue, realValue, record, valueListName, findMode) {
	//var $args = [globals.vHiscli];
	var $args = [displayValue]
	var $sql = "select cirgprotocolo from tbc_ciruguar CIRU\
        inner join tbc_guardia GUA on GUA.Guar_HistClinica=CIRU.CirgHistClinica AND GUA.Guar_FechaIngreso=CIRU.CirgFechaIngreso AND GUA.Guar_HoraIngreso=CIRU.CirgHoraIngreso\
        where CIRU.CirgHistClinica = "+globals.vHiscli+" and GUA.Guar_Estado > 3"
	
	var result = null;
	result = databaseManager.getDataSetByQuery('asistencial',$sql,$args,300)

	return result;

}

/**
 * Callback method for when solution is opened.
 *
 * @properties={typeid:24,uuid:"D1899618-336F-459D-AA78-D7D14C4653E2"}
 */
function onSolutionOpen1_reimpresorProtocolosQuirurgicos() {
	//globals.vHiscli=315572;
	//globals.reimpresor_fecha_ingreso=20141212
	//globals.reimpresor_hora_ingreso=854
}

/**
 * @param {number} fecha_nac
 * @param {number} fecha_hasta
 * 
 * @properties={typeid:24,uuid:"F4D6E428-E5F8-4791-ADEC-174BF36CB01A"}
 */
function reimpresor_CalculaEdad(fecha_nac, fecha_hasta) {
	var final_mes = new Array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);

	var fecha_aux1 = fecha_nac.toString()
	var fecha_aux2 = fecha_hasta.toString()
	var anio_nac = utils.stringToNumber(fecha_aux1.substr(0,4))
	var mes_nac = utils.stringToNumber(fecha_aux1.substr(4,2))
	var dia_nac = utils.stringToNumber(fecha_aux1.substr(6,2))
	var anio_hasta = utils.stringToNumber(fecha_aux2.substr(0,4))
	var mes_hasta = utils.stringToNumber(fecha_aux2.substr(4,2))
	var dia_hasta = utils.stringToNumber(fecha_aux2.substr(6,2))
	var resto = anio_hasta % 4;
	if (resto == 0) final_mes[1] = 29;
	var edad = anio_hasta - anio_nac;
	var tipoEdad = '';
	if (edad != 0) {
		if (mes_hasta < mes_nac) {
			--edad;
		} else {
			if (mes_hasta == mes_nac) {
				if (dia_hasta < dia_nac) {
					--edad;
				}
			}
		}
		if (edad > 1) {
			tipoEdad = "años";
		} else {
			if (edad == 1){
			    tipoEdad = "año";
			}else{
				if (mes_nac > mes_hasta){
					edad = mes_nac - mes_hasta 
				}else{
				    edad = mes_hasta - mes_nac
				}
				if (edad != 0) {
					if (edad > 1) {
						tipoEdad = "meses";
					} else {
						if (dia_hasta < dia_nac) {
							edad = (dia_hasta + final_mes[mes_nac]) - dia_nac;
							tipoEdad = "días"
						} else {
							tipoEdad = "mes";
						}
					}
				} else {
					if (dia_nac > dia_hasta){
						edad = dia_nac - dia_hasta 
					}else{
					    edad = dia_hasta - dia_nac
					}
					if (edad > 1) {
						tipoEdad = "días";
					} else {
						edad = 1;
						tipoEdad = "día";
					}
				}				
			}				
		}
	} else {
		if (mes_nac > mes_hasta){
			edad = mes_nac - mes_hasta 
		}else{
		    edad = mes_hasta - mes_nac
		}
		if (edad != 0) {
			if (edad > 1) {
				tipoEdad = "meses";
			} else {
				if (dia_hasta < dia_nac) {
					edad = (dia_hasta + final_mes[mes_nac]) - dia_nac;
					tipoEdad = "días"
				} else {
					tipoEdad = "mes";
				}
			}
		} else {
			if (dia_nac > dia_hasta){
				edad = dia_nac - dia_hasta 
			}else{
			    edad = dia_hasta - dia_nac
			}
			if (edad > 1) {
				tipoEdad = "días";
			} else {
				edad = 1;
				tipoEdad = "día";
			}
		}
	}
	return edad.toString() +' '+ tipoEdad
}

/**
 * @properties={typeid:24,uuid:"7FCBA5C5-6205-47FC-877A-FB3A7D259197"}
 */
function refresca_reimpresor_protocolo() {
	var $sql = "select cirgprotocolo from tbc_ciruguar CIRU\
        inner join tbc_guardia GUA on GUA.Guar_HistClinica=CIRU.CirgHistClinica AND GUA.Guar_FechaIngreso=CIRU.CirgFechaIngreso AND GUA.Guar_HoraIngreso=CIRU.CirgHoraIngreso\
        where CIRU.CirgHistClinica = "+globals.vHiscli+" and GUA.Guar_Estado > 3"
	
	var result = null;
	result = databaseManager.getDataSetByQuery('asistencial',$sql,null,300)
	return result
}
