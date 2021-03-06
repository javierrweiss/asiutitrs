/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"2ADBB687-D6AE-46A0-ABE6-C61645C3485B"}
 */
function onAction_btn_6(event) {
	globals.vDatasetSql=''
	application.updateUI()
	var hora_tbl = new Array()
	hora_tbl[0]='hora600'
	hora_tbl[1]='hora615'
	hora_tbl[2]='hora630'
	hora_tbl[3]='hora645'
	hora_tbl[4]='hora700'
	hora_tbl[5]='hora715'
	hora_tbl[6]='hora730'
	hora_tbl[7]='hora745'
	hora_tbl[8]='hora800'
	hora_tbl[9]='hora815'
	hora_tbl[10]='hora830'
	hora_tbl[11]='hora845'
	hora_tbl[12]='hora900'
	hora_tbl[13]='hora915'
	hora_tbl[14]='hora930'
	hora_tbl[15]='hora945'
		
	var hora_as = new Array()
	hora_as[0]='6:00'
	hora_as[1]='6:15'
	hora_as[2]='6:30'
	hora_as[3]='6:45'
	hora_as[4]='7:00'
	hora_as[5]='7:15'
	hora_as[6]='7:30'
	hora_as[7]='7:45'
	hora_as[8]='8:00'
	hora_as[9]='8:15'
	hora_as[10]='8:30'
	hora_as[11]='8:45'
	hora_as[12]='9:00'
	hora_as[13]='9:15'
	hora_as[14]='9:30'
	hora_as[15]='9:45'
		
	globals.vQuerySql='select concepto, '
		              + hora_tbl[0] + ' as "' + hora_as[0] +'", '
		              + hora_tbl[1] + ' as "' + hora_as[1] +'", '
		              + hora_tbl[2] + ' as "' + hora_as[2] +'", '
		              + hora_tbl[3] + ' as "' + hora_as[3] +'", '
		              + hora_tbl[4] + ' as "' + hora_as[4] +'", '
		              + hora_tbl[5] + ' as "' + hora_as[5] +'", '
		              + hora_tbl[6] + ' as "' + hora_as[6] +'", '
		              + hora_tbl[7] + ' as "' + hora_as[7] +'", '
		              + hora_tbl[8] + ' as "' + hora_as[8] +'", '
		              + hora_tbl[9] + ' as "' + hora_as[9] +'", '
		              + hora_tbl[10] + ' as "' + hora_as[10] +'", '
		              + hora_tbl[11] + ' as "' + hora_as[11] +'", '
		              + hora_tbl[12] + ' as "' + hora_as[12] +'", '
		              + hora_tbl[13] + ' as "' + hora_as[13] +'", '
		              + hora_tbl[14] + ' as "' + hora_as[14] +'", '
		              + hora_tbl[15] + ' as "' + hora_as[15] +'" '
		              + 'from hojauti_resumen_rcv where hiscli = '
					  + globals.vHiscli
		
	var vQuery = globals.vQuerySql;
	var vDataset = databaseManager.getDataSetByQuery("enfermeria", vQuery, null, 5000);
	globals.vDatasetSql='<html>'+vDataset.getAsHTML(true, true, false, true, true)+'</html>';
	application.updateUI()
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"A6A3EB99-F681-439D-80C7-F3DCAC862E01"}
 * @AllowToRunInFind
 */
function onShow_resumen_parametros_rcv(firstShow, event) {
	globals.vDatasetSql=''
	application.updateUI()
	resumen_Parametros_rcv()
	vs_to_hojauti_resumen_rcv.find()
	globals.items=3
	vs_to_hojauti_resumen_rcv.search()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"1C8D442E-763C-4765-BC8D-916D55B15F05"}
 */
function onAction_btn_10(event) {
	globals.vDatasetSql=''
	application.updateUI()
	var hora_tbl = new Array()
	hora_tbl[0]='hora1000'
	hora_tbl[1]='hora1015'
	hora_tbl[2]='hora1030'
	hora_tbl[3]='hora1045'
	hora_tbl[4]='hora1100'
	hora_tbl[5]='hora1115'
	hora_tbl[6]='hora1130'
	hora_tbl[7]='hora1145'
	hora_tbl[8]='hora1200'
	hora_tbl[9]='hora1215'
	hora_tbl[10]='hora1230'
	hora_tbl[11]='hora1245'
	hora_tbl[12]='hora1300'
	hora_tbl[13]='hora1315'
	hora_tbl[14]='hora1330'
	hora_tbl[15]='hora1345'
		
	var hora_as = new Array()
	hora_as[0]='10:00'
	hora_as[1]='10:15'
	hora_as[2]='10:30'
	hora_as[3]='10:45'
	hora_as[4]='11:00'
	hora_as[5]='11:15'
	hora_as[6]='11:30'
	hora_as[7]='11:45'
	hora_as[8]='12:00'
	hora_as[9]='12:15'
	hora_as[10]='12:30'
	hora_as[11]='12:45'
	hora_as[12]='13:00'
	hora_as[13]='13:15'
	hora_as[14]='13:30'
	hora_as[15]='13:45'
		
	globals.vQuerySql='select concepto, '
		              + hora_tbl[0] + ' as "' + hora_as[0] +'", '
		              + hora_tbl[1] + ' as "' + hora_as[1] +'", '
		              + hora_tbl[2] + ' as "' + hora_as[2] +'", '
		              + hora_tbl[3] + ' as "' + hora_as[3] +'", '
		              + hora_tbl[4] + ' as "' + hora_as[4] +'", '
		              + hora_tbl[5] + ' as "' + hora_as[5] +'", '
		              + hora_tbl[6] + ' as "' + hora_as[6] +'", '
		              + hora_tbl[7] + ' as "' + hora_as[7] +'", '
		              + hora_tbl[8] + ' as "' + hora_as[8] +'", '
		              + hora_tbl[9] + ' as "' + hora_as[9] +'", '
		              + hora_tbl[10] + ' as "' + hora_as[10] +'", '
		              + hora_tbl[11] + ' as "' + hora_as[11] +'", '
		              + hora_tbl[12] + ' as "' + hora_as[12] +'", '
		              + hora_tbl[13] + ' as "' + hora_as[13] +'", '
		              + hora_tbl[14] + ' as "' + hora_as[14] +'", '
		              + hora_tbl[15] + ' as "' + hora_as[15] +'" '
		              + 'from hojauti_resumen_rcv where hiscli = '
		              + globals.vHiscli + ' and item = 3'
		              + ' and tipo_opera = '+globals.vTipoOperador
					  + ' and nro_operador = '+globals.vLegajo
					  + ' and fecha = '+"'"+globals.vFecha+"'"
					  + ' order by hiscli asc, fecha asc, item asc, subitems asc, concepto asc'
		
	var vQuery = globals.vQuerySql;
	var vDataset = databaseManager.getDataSetByQuery("enfermeria", vQuery, null, 5000);
	globals.vDatasetSql='<html>'+vDataset.getAsHTML(true, true, false, true, true)+'</html>';
	application.updateUI()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"EFE08B8A-1922-435F-9278-F2C96552212B"}
 */
function onAction_btn_14(event) {
	globals.vDatasetSql=''
	application.updateUI()
	var hora_tbl = new Array()
	hora_tbl[0]='hora1400'
	hora_tbl[1]='hora1415'
	hora_tbl[2]='hora1430'
	hora_tbl[3]='hora1445'
	hora_tbl[4]='hora1500'
	hora_tbl[5]='hora1515'
	hora_tbl[6]='hora1530'
	hora_tbl[7]='hora1545'
	hora_tbl[8]='hora1600'
	hora_tbl[9]='hora1615'
	hora_tbl[10]='hora1630'
	hora_tbl[11]='hora1645'
	hora_tbl[12]='hora1700'
	hora_tbl[13]='hora1715'
	hora_tbl[14]='hora1730'
	hora_tbl[15]='hora1745'
		
	var hora_as = new Array()
	hora_as[0]='14:00'
	hora_as[1]='14:15'
	hora_as[2]='14:30'
	hora_as[3]='14:45'
	hora_as[4]='15:00'
	hora_as[5]='15:15'
	hora_as[6]='15:30'
	hora_as[7]='15:45'
	hora_as[8]='16:00'
	hora_as[9]='16:15'
	hora_as[10]='16:30'
	hora_as[11]='16:45'
	hora_as[12]='17:00'
	hora_as[13]='17:15'
	hora_as[14]='17:30'
	hora_as[15]='17:45'
		
	globals.vQuerySql='select concepto, '
		              + hora_tbl[0] + ' as "' + hora_as[0] +'", '
		              + hora_tbl[1] + ' as "' + hora_as[1] +'", '
		              + hora_tbl[2] + ' as "' + hora_as[2] +'", '
		              + hora_tbl[3] + ' as "' + hora_as[3] +'", '
		              + hora_tbl[4] + ' as "' + hora_as[4] +'", '
		              + hora_tbl[5] + ' as "' + hora_as[5] +'", '
		              + hora_tbl[6] + ' as "' + hora_as[6] +'", '
		              + hora_tbl[7] + ' as "' + hora_as[7] +'", '
		              + hora_tbl[8] + ' as "' + hora_as[8] +'", '
		              + hora_tbl[9] + ' as "' + hora_as[9] +'", '
		              + hora_tbl[10] + ' as "' + hora_as[10] +'", '
		              + hora_tbl[11] + ' as "' + hora_as[11] +'", '
		              + hora_tbl[12] + ' as "' + hora_as[12] +'", '
		              + hora_tbl[13] + ' as "' + hora_as[13] +'", '
		              + hora_tbl[14] + ' as "' + hora_as[14] +'", '
		              + hora_tbl[15] + ' as "' + hora_as[15] +'" '
		              + 'from hojauti_resumen_rcv where hiscli = '
		              + globals.vHiscli + ' and item = 3'
		              + ' and tipo_opera = '+globals.vTipoOperador
					  + ' and nro_operador = '+globals.vLegajo
					  + ' and fecha = '+"'"+globals.vFecha+"'"
					  + ' order by hiscli asc, fecha asc, item asc, subitems asc, concepto asc'
		
	var vQuery = globals.vQuerySql;
	var vDataset = databaseManager.getDataSetByQuery("enfermeria", vQuery, null, 5000);
	globals.vDatasetSql='<html>'+vDataset.getAsHTML(true, true, false, true, true)+'</html>';
	application.updateUI()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"CB94325A-6BB0-4879-82D2-8BDE198701CC"}
 */
function onAction_btn_18(event) {
	globals.vDatasetSql=''
	application.updateUI()
	var hora_tbl = new Array()
	hora_tbl[0]='hora1800'
	hora_tbl[1]='hora1815'
	hora_tbl[2]='hora1830'
	hora_tbl[3]='hora1845'
	hora_tbl[4]='hora1900'
	hora_tbl[5]='hora1915'
	hora_tbl[6]='hora1930'
	hora_tbl[7]='hora1945'
	hora_tbl[8]='hora2000'
	hora_tbl[9]='hora2015'
	hora_tbl[10]='hora2030'
	hora_tbl[11]='hora2045'
	hora_tbl[12]='hora2100'
	hora_tbl[13]='hora2115'
	hora_tbl[14]='hora2130'
	hora_tbl[15]='hora2145'
		
	var hora_as = new Array()
	hora_as[0]='18:00'
	hora_as[1]='18:15'
	hora_as[2]='18:30'
	hora_as[3]='18:45'
	hora_as[4]='19:00'
	hora_as[5]='19:15'
	hora_as[6]='19:30'
	hora_as[7]='19:45'
	hora_as[8]='20:00'
	hora_as[9]='20:15'
	hora_as[10]='20:30'
	hora_as[11]='20:45'
	hora_as[12]='21:00'
	hora_as[13]='21:15'
	hora_as[14]='21:30'
	hora_as[15]='21:45'
		
	globals.vQuerySql='select concepto, '
		              + hora_tbl[0] + ' as "' + hora_as[0] +'", '
		              + hora_tbl[1] + ' as "' + hora_as[1] +'", '
		              + hora_tbl[2] + ' as "' + hora_as[2] +'", '
		              + hora_tbl[3] + ' as "' + hora_as[3] +'", '
		              + hora_tbl[4] + ' as "' + hora_as[4] +'", '
		              + hora_tbl[5] + ' as "' + hora_as[5] +'", '
		              + hora_tbl[6] + ' as "' + hora_as[6] +'", '
		              + hora_tbl[7] + ' as "' + hora_as[7] +'", '
		              + hora_tbl[8] + ' as "' + hora_as[8] +'", '
		              + hora_tbl[9] + ' as "' + hora_as[9] +'", '
		              + hora_tbl[10] + ' as "' + hora_as[10] +'", '
		              + hora_tbl[11] + ' as "' + hora_as[11] +'", '
		              + hora_tbl[12] + ' as "' + hora_as[12] +'", '
		              + hora_tbl[13] + ' as "' + hora_as[13] +'", '
		              + hora_tbl[14] + ' as "' + hora_as[14] +'", '
		              + hora_tbl[15] + ' as "' + hora_as[15] +'" '
		              + 'from hojauti_resumen_rcv where hiscli = '
		              + globals.vHiscli + ' and item = 3'
		              + ' and tipo_opera = '+globals.vTipoOperador
					  + ' and nro_operador = '+globals.vLegajo
					  + ' and fecha = '+"'"+globals.vFecha+"'"
					  + ' order by hiscli asc, fecha asc, item asc, subitems asc, concepto asc'
		
	var vQuery = globals.vQuerySql;
	var vDataset = databaseManager.getDataSetByQuery("enfermeria", vQuery, null, 5000);
	globals.vDatasetSql='<html>'+vDataset.getAsHTML(true, true, false, true, true)+'</html>';
	application.updateUI()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"8A0ADC6C-32F5-439A-B7AC-06A1EBCB44B0"}
 */
function onAction_btn_22(event) {
	globals.vDatasetSql=''
	application.updateUI()
	var hora_tbl = new Array()
	hora_tbl[0]='hora2200'
	hora_tbl[1]='hora2215'
	hora_tbl[2]='hora2230'
	hora_tbl[3]='hora2245'
	hora_tbl[4]='hora2300'
	hora_tbl[5]='hora2315'
	hora_tbl[6]='hora2330'
	hora_tbl[7]='hora2345'
	hora_tbl[8]='hora0'
	hora_tbl[9]='hora15'
	hora_tbl[10]='hora30'
	hora_tbl[11]='hora45'
	hora_tbl[12]='hora100'
	hora_tbl[13]='hora115'
	hora_tbl[14]='hora130'
	hora_tbl[15]='hora145'
		
	var hora_as = new Array()
	hora_as[0]='22:00'
	hora_as[1]='22:15'
	hora_as[2]='22:30'
	hora_as[3]='22:45'
	hora_as[4]='23:00'
	hora_as[5]='23:15'
	hora_as[6]='23:30'
	hora_as[7]='23:45'
	hora_as[8]='0:00'
	hora_as[9]='0:15'
	hora_as[10]='0:30'
	hora_as[11]='0:45'
	hora_as[12]='1:00'
	hora_as[13]='1:15'
	hora_as[14]='1:30'
	hora_as[15]='1:45'
		
	globals.vQuerySql='select concepto, '
		              + hora_tbl[0] + ' as "' + hora_as[0] +'", '
		              + hora_tbl[1] + ' as "' + hora_as[1] +'", '
		              + hora_tbl[2] + ' as "' + hora_as[2] +'", '
		              + hora_tbl[3] + ' as "' + hora_as[3] +'", '
		              + hora_tbl[4] + ' as "' + hora_as[4] +'", '
		              + hora_tbl[5] + ' as "' + hora_as[5] +'", '
		              + hora_tbl[6] + ' as "' + hora_as[6] +'", '
		              + hora_tbl[7] + ' as "' + hora_as[7] +'", '
		              + hora_tbl[8] + ' as "' + hora_as[8] +'", '
		              + hora_tbl[9] + ' as "' + hora_as[9] +'", '
		              + hora_tbl[10] + ' as "' + hora_as[10] +'", '
		              + hora_tbl[11] + ' as "' + hora_as[11] +'", '
		              + hora_tbl[12] + ' as "' + hora_as[12] +'", '
		              + hora_tbl[13] + ' as "' + hora_as[13] +'", '
		              + hora_tbl[14] + ' as "' + hora_as[14] +'", '
		              + hora_tbl[15] + ' as "' + hora_as[15] +'" '
		              + 'from hojauti_resumen_rcv where hiscli = '
		              + globals.vHiscli + ' and item = 3'
		              + ' and tipo_opera = '+globals.vTipoOperador
					  + ' and nro_operador = '+globals.vLegajo
					  + ' and fecha = '+"'"+globals.vFecha+"'"
					  + ' order by hiscli asc, fecha asc, item asc, subitems asc, concepto asc'
		
	var vQuery = globals.vQuerySql;
	var vDataset = databaseManager.getDataSetByQuery("enfermeria", vQuery, null, 5000);
	globals.vDatasetSql='<html>'+vDataset.getAsHTML(true, true, false, true, true)+'</html>';
	application.updateUI()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"2112FC98-7998-49B4-B235-93DBAB2CC11F"}
 */
function onAction_btn_2(event) {
	globals.vDatasetSql=''
	application.updateUI()
	var hora_tbl = new Array()
	hora_tbl[0]='hora200'
	hora_tbl[1]='hora215'
	hora_tbl[2]='hora230'
	hora_tbl[3]='hora245'
	hora_tbl[4]='hora300'
	hora_tbl[5]='hora315'
	hora_tbl[6]='hora330'
	hora_tbl[7]='hora345'
	hora_tbl[8]='hora400'
	hora_tbl[9]='hora415'
	hora_tbl[10]='hora430'
	hora_tbl[11]='hora445'
	hora_tbl[12]='hora500'
	hora_tbl[13]='hora515'
	hora_tbl[14]='hora530'
	hora_tbl[15]='hora545'
		
	var hora_as = new Array()
	hora_as[0]='2:00'
	hora_as[1]='2:15'
	hora_as[2]='2:30'
	hora_as[3]='2:45'
	hora_as[4]='3:00'
	hora_as[5]='3:15'
	hora_as[6]='3:30'
	hora_as[7]='3:45'
	hora_as[8]='4:00'
	hora_as[9]='4:15'
	hora_as[10]='4:30'
	hora_as[11]='4:45'
	hora_as[12]='5:00'
	hora_as[13]='5:15'
	hora_as[14]='5:30'
	hora_as[15]='5:45'
		
	globals.vQuerySql='select concepto, '
		              + hora_tbl[0] + ' as "' + hora_as[0] +'", '
		              + hora_tbl[1] + ' as "' + hora_as[1] +'", '
		              + hora_tbl[2] + ' as "' + hora_as[2] +'", '
		              + hora_tbl[3] + ' as "' + hora_as[3] +'", '
		              + hora_tbl[4] + ' as "' + hora_as[4] +'", '
		              + hora_tbl[5] + ' as "' + hora_as[5] +'", '
		              + hora_tbl[6] + ' as "' + hora_as[6] +'", '
		              + hora_tbl[7] + ' as "' + hora_as[7] +'", '
		              + hora_tbl[8] + ' as "' + hora_as[8] +'", '
		              + hora_tbl[9] + ' as "' + hora_as[9] +'", '
		              + hora_tbl[10] + ' as "' + hora_as[10] +'", '
		              + hora_tbl[11] + ' as "' + hora_as[11] +'", '
		              + hora_tbl[12] + ' as "' + hora_as[12] +'", '
		              + hora_tbl[13] + ' as "' + hora_as[13] +'", '
		              + hora_tbl[14] + ' as "' + hora_as[14] +'", '
		              + hora_tbl[15] + ' as "' + hora_as[15] +'" '
		              + 'from hojauti_resumen_rcv where hiscli = '
		              + globals.vHiscli + ' and item = 3'
		              + ' and tipo_opera = '+globals.vTipoOperador
					  + ' and nro_operador = '+globals.vLegajo
					  + ' and fecha = '+"'"+globals.vFecha+"'"
					  + ' order by hiscli asc, fecha asc, item asc, subitems asc, concepto asc'
		
	var vQuery = globals.vQuerySql;
	var vDataset = databaseManager.getDataSetByQuery("enfermeria", vQuery, null, 5000);
	globals.vDatasetSql='<html>'+vDataset.getAsHTML(true, true, false, true, true)+'</html>';
	application.updateUI()
}

/**
 * @properties={typeid:24,uuid:"91185689-4A4D-4DDE-9D45-3478C5929CA0"}
 */
function resumen_Parametros_rcv() {
	globals.limpiaTablas()
	globals.items=3
	var final_mes = new Array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);
	globals.vFechaSiguiente=globals.vFecha
	if (globals.vFechaSiguiente==null){
		globals.vFechaSiguiente=application.getServerTimeStamp()
	}
	var resto = globals.vFechaSiguiente.getFullYear() % 4;
	if (resto == 0) final_mes[1] = 29;
	if (final_mes[globals.vFechaSiguiente.getMonth()]==globals.vFechaSiguiente.getDate()){
		globals.vFechaSiguiente=globals.vFechaSiguiente.setDate(1)
		globals.vFechaSiguiente=globals.vFechaSiguiente.setMonth(globals.vFechaSiguiente.getMonth()+1)
	}else{
		globals.vFechaSiguiente=globals.vFechaSiguiente.setDate(globals.vFechaSiguiente.getDate()+1)
	}	
	
	if(vhiscli_to_hojauti_resumen_rcv.getSize()>0){
		var hc = globals.vHiscli
		var t_ope = globals.vTipoOperador
		var n_ope = globals.vLegajo
		
		var done = plugins.rawSQL.executeSQL("enfermeria", "hojauti_resumen_rcv", "delete from hojauti_resumen_rcv where hiscli = ? and tipo_opera = ? and nro_operador = ?", [hc,t_ope,n_ope])
		if (done) {
			//flush is required when changes are made in db
			plugins.rawSQL.flushAllClientsCache("enfermeria", "hojauti_resumen_rcv")
		} else {
			var msg = plugins.rawSQL.getException().getMessage(); //see exception node for more info about the exception obj
			plugins.dialogs.showErrorDialog('Error', 'SQL exception: ' + msg, 'Ok')
		}
	}
	var indice_hora=new Array()
	indice_hora[0]=0
	indice_hora[1]=15
	indice_hora[2]=30
	indice_hora[3]=45
	indice_hora[4]=100
	indice_hora[5]=115
	indice_hora[6]=130
	indice_hora[7]=145
	indice_hora[8]=200
	indice_hora[9]=215
	indice_hora[10]=230
	indice_hora[11]=245
	indice_hora[12]=300
	indice_hora[13]=315
	indice_hora[14]=330
	indice_hora[15]=345
	indice_hora[16]=400
	indice_hora[17]=415
	indice_hora[18]=430
	indice_hora[19]=445
	indice_hora[20]=500
	indice_hora[21]=515
	indice_hora[22]=530
	indice_hora[23]=545
	indice_hora[24]=600
	indice_hora[25]=615
	indice_hora[26]=630
	indice_hora[27]=645
	indice_hora[28]=700
	indice_hora[29]=715
	indice_hora[30]=730
	indice_hora[31]=745
	indice_hora[32]=800
	indice_hora[33]=815
	indice_hora[34]=830
	indice_hora[35]=845
	indice_hora[36]=900
	indice_hora[37]=915
	indice_hora[38]=930
	indice_hora[39]=945
	indice_hora[40]=1000
	indice_hora[41]=1015
	indice_hora[42]=1030
	indice_hora[43]=1045
	indice_hora[44]=1100
	indice_hora[45]=1115
	indice_hora[46]=1130
	indice_hora[47]=1145
	indice_hora[48]=1200
	indice_hora[49]=1215
	indice_hora[50]=1230
	indice_hora[51]=1245
	indice_hora[52]=1300
	indice_hora[53]=1315
	indice_hora[54]=1330
	indice_hora[55]=1345
	indice_hora[56]=1400
	indice_hora[57]=1415
	indice_hora[58]=1430
	indice_hora[59]=1445
	indice_hora[60]=1500
	indice_hora[61]=1515
	indice_hora[62]=1530
	indice_hora[63]=1545
	indice_hora[64]=1600
	indice_hora[65]=1615
	indice_hora[66]=1630
	indice_hora[67]=1645
	indice_hora[68]=1700
	indice_hora[69]=1715
	indice_hora[70]=1730
	indice_hora[71]=1745
	indice_hora[72]=1800
	indice_hora[73]=1815
	indice_hora[74]=1830
	indice_hora[75]=1845
	indice_hora[76]=1900
	indice_hora[77]=1915
	indice_hora[78]=1930
	indice_hora[79]=1945
	indice_hora[80]=2000
	indice_hora[81]=2015
	indice_hora[82]=2030
	indice_hora[83]=2045
	indice_hora[84]=2100
	indice_hora[85]=2115
	indice_hora[86]=2130
	indice_hora[87]=2145
	indice_hora[88]=2200
	indice_hora[89]=2215
	indice_hora[90]=2230
	indice_hora[91]=2245
	indice_hora[92]=2300
	indice_hora[93]=2315
	indice_hora[94]=2330
	indice_hora[95]=2345
	indice_hora[96]=2400
	
	var hora=0;
	var cargo_tabla=false;
	if(resumen_to_hojauti.getSize()>0){
		for(var i=1;i<=resumen_to_hojauti.getSize();i++){
			resumen_to_hojauti.setSelectedIndex(i)
			if(resumen_to_hojauti.hora>500){
				if(resumen_to_hojauti.hora<1000){
					hora=resumen_to_hojauti.hora.toString().substr(0,3)
				}else{
					hora=resumen_to_hojauti.hora.toString().substr(0,4)
				}
				globals.tabla1[hora]=resumen_to_hojauti.param_ta_max
				globals.tabla1[2400]='Tensi??n Arterial M??xima'
				globals.tabla2[hora]=resumen_to_hojauti.param_ta_min
				globals.tabla2[2400]='Tensi??n Arterial M??nima'
				globals.tabla3[hora]=resumen_to_hojauti.param_fc
				globals.tabla3[2400]='Frecuecia Card??aca     '	
				globals.tabla4[hora]=resumen_to_hojauti.param_fr
				globals.tabla4[2400]='Frecuecia Respiratoria '
				globals.tabla5[hora]=resumen_to_hojauti.param_temper
				globals.tabla5[2400]='Temperatura            '
				globals.tabla6[hora]=resumen_to_hojauti.param_glasgow
				globals.tabla6[2400]='Glasgow                '		
				globals.tabla7[hora]=resumen_to_hojauti.param_hgt
				globals.tabla7[2400]='Hemoglucotest HGT      '
				globals.vHora=resumen_to_hojauti.hora
				globals.tabla8[hora]=resumen_to_hojauti.param_factor_hgt
				globals.tabla8[2400]='Factor Correcci??n HGT  '
				globals.tabla9[hora]=resumen_to_hojauti.param_cant_hgt
				globals.tabla9[2400]='Cant.Factor Correc. HGT'
				globals.tabla10[2400]='Suministro Oxigeno'
				switch (resumen_to_hojauti.val_oxigeno) {
					case 0:globals.tabla10[hora]='';break;
					case 1:globals.tabla10[hora]='x M??scara';break;
					case 2:globals.tabla10[hora]='x Canula ';break;
					default:globals.tabla10[hora]='';break;
				}
				globals.tabla11[2400]='Flujo de Oxigeno'
				globals.tabla11[hora]=resumen_to_hojauti.val_oxigeno_cant
				switch (resumen_to_hojauti.param_arm){
					case 1:globals.tabla12[hora]='TET';break;
					case 2:globals.tabla12[hora]='TQT';break;
					default:globals.tabla12[hora]='';break;	
				}
				globals.tabla12[2400]='A.R.M.'
				switch (resumen_to_hojauti.param_vni){
					case 1:globals.tabla13[hora]='BIPAP';break;
					case 2:globals.tabla13[hora]='CPAP';break;
					case 3:globals.tabla13[hora]=resumen_to_hojauti.param_vni_otros;break;
					default:globals.tabla13[hora]='';break;	
				}
				globals.tabla13[2400]='V.N.I.'
				switch (resumen_to_hojauti.param_modo_arm_vni){
					case 1:globals.tabla14[hora]='VCV';break;
					case 2:globals.tabla14[hora]='PCV';break;
					case 3:globals.tabla14[hora]='PSV';break;
					default:globals.tabla14[hora]='';break;	
				}
				globals.tabla14[2400]='Modalidad'
				globals.tabla15[hora]=resumen_to_hojauti.param_fio2
				globals.tabla15[2400]='FIO2               '
				globals.tabla16[hora]=resumen_to_hojauti.param_peep
				globals.tabla16[2400]='PEEP               '	
				globals.tabla17[hora]=resumen_to_hojauti.param_fr_arm_vni
				globals.tabla17[2400]='FR                 '		
				globals.tabla18[hora]=resumen_to_hojauti.param_vt
				globals.tabla18[2400]='VT                 '			
				if(resumen_to_hojauti.param_tubo_t==1){
					globals.tabla19[hora]="Si"	
				}else{
					if(resumen_to_hojauti.param_tubo_t!=null){
						globals.tabla19[hora]="No"
					}
				}
				globals.tabla19[2400]='Tubo T '
				globals.tabla20[hora]=resumen_to_hojauti.param_sat
				globals.tabla20[2400]='SAT     '			
				globals.tabla21[hora]=resumen_to_hojauti.param_tam
				globals.tabla21[2400]='Tensi??n Arterial Media TAM'	
				globals.tabla22[hora]=resumen_to_hojauti.param_pic
				globals.tabla22[2400]='Presi??n Intr Craneana PIC'
				globals.tabla23[hora]=resumen_to_hojauti.param_ppc
				globals.tabla23[2400]='PPC = TAM - PIC          '
				globals.tabla24[hora]=resumen_to_hojauti.param_pvc
				globals.tabla24[2400]='PVC                      '
				globals.tabla25[hora]=resumen_to_hojauti.param_co2
				globals.tabla25[2400]='CO2                      '
				cargo_tabla=true
			}
		}
	}
	if(resumen2_to_hojauti.getSize()>0){
		for(var tt=1;tt<=resumen2_to_hojauti.getSize();tt++){
			resumen2_to_hojauti.setSelectedIndex(tt)
			if(resumen2_to_hojauti.hora<600){
				if(resumen2_to_hojauti.hora<1000){
					hora=resumen2_to_hojauti.hora.toString().substr(0,3)
				}else{
					hora=resumen2_to_hojauti.hora.toString().substr(0,4)
				}
				globals.tabla1[hora]=resumen2_to_hojauti.param_ta_max
				globals.tabla1[2400]='Tensi??n Arterial M??xima'
				globals.tabla2[hora]=resumen2_to_hojauti.param_ta_min
				globals.tabla2[2400]='Tensi??n Arterial M??nima'
				globals.tabla3[hora]=resumen2_to_hojauti.param_fc
				globals.tabla3[2400]='Frecuecia Card??aca     '	
				globals.tabla4[hora]=resumen2_to_hojauti.param_fr
				globals.tabla4[2400]='Frecuecia Respiratoria '
				globals.tabla5[hora]=resumen2_to_hojauti.param_temper
				globals.tabla5[2400]='Temperatura            '
				globals.tabla6[hora]=resumen2_to_hojauti.param_glasgow
				globals.tabla6[2400]='Glasgow                '		
				globals.tabla7[hora]=resumen2_to_hojauti.param_hgt
				globals.tabla7[2400]='Hemoglucotest HGT      '
				globals.vHora=resumen2_to_hojauti.hora
				globals.tabla8[hora]=resumen2_to_hojauti.param_factor_hgt
				globals.tabla8[2400]='Factor Correcci??n HGT  '
				globals.tabla9[hora]=resumen2_to_hojauti.param_cant_hgt
				globals.tabla9[2400]='Cant.Factor Correc. HGT'
				globals.tabla10[2400]='Suministro Oxigeno'
				switch (resumen2_to_hojauti.val_oxigeno) {
					case 0:globals.tabla10[hora]='';break;
					case 1:globals.tabla10[hora]='x M??scara';break;
					case 2:globals.tabla10[hora]='x Canula ';break;
					default:globals.tabla10[hora]='';break;
				}
				globals.tabla11[2400]='Flujo de Oxigeno'
				globals.tabla11[hora]=resumen2_to_hojauti.val_oxigeno_cant
				switch (resumen2_to_hojauti.param_arm){
					case 1:globals.tabla12[hora]='TET';break;
					case 2:globals.tabla12[hora]='TQT';break;
					default:globals.tabla12[hora]='';break;	
				}
				globals.tabla12[2400]='A.R.M.'
				switch (resumen2_to_hojauti.param_vni){
					case 1:globals.tabla13[hora]='BIPAP';break;
					case 2:globals.tabla13[hora]='CPAP';break;
					case 3:globals.tabla13[hora]=resumen2_to_hojauti.param_vni_otros;break;
					default:globals.tabla13[hora]='';break;	
				}
				globals.tabla13[2400]='V.N.I.'
				switch (resumen2_to_hojauti.param_modo_arm_vni){
					case 1:globals.tabla14[hora]='VCV';break;
					case 2:globals.tabla14[hora]='PCV';break;
					case 3:globals.tabla14[hora]='PSV';break;
					default:globals.tabla14[hora]='';break;	
				}
				globals.tabla14[2400]='Modalidad'
				globals.tabla15[hora]=resumen2_to_hojauti.param_fio2
				globals.tabla15[2400]='FIO2               '
				globals.tabla16[hora]=resumen2_to_hojauti.param_peep
				globals.tabla16[2400]='PEEP               '	
				globals.tabla17[hora]=resumen2_to_hojauti.param_fr_arm_vni
				globals.tabla17[2400]='FR                 '		
				globals.tabla18[hora]=resumen2_to_hojauti.param_vt
				globals.tabla18[2400]='VT                 '			
				if(resumen2_to_hojauti.param_tubo_t==1){
					globals.tabla19[hora]="Si"	
				}else{
					if(resumen2_to_hojauti.param_tubo_t!=null){
						globals.tabla19[hora]="No"
					}
				}
				globals.tabla19[2400]='Tubo T '
				globals.tabla20[hora]=resumen2_to_hojauti.param_sat
				globals.tabla20[2400]='SAT     '			
				globals.tabla21[hora]=resumen2_to_hojauti.param_tam
				globals.tabla21[2400]='Tensi??n Arterial Media TAM'	
				globals.tabla22[hora]=resumen2_to_hojauti.param_pic
				globals.tabla22[2400]='Presi??n Intr Craneana PIC'
				globals.tabla23[hora]=resumen2_to_hojauti.param_ppc
				globals.tabla23[2400]='PPC = TAM - PIC          '
				globals.tabla24[hora]=resumen2_to_hojauti.param_pvc
				globals.tabla24[2400]='PVC                      '
				globals.tabla25[hora]=resumen2_to_hojauti.param_co2
				globals.tabla25[2400]='CO2                      '
				cargo_tabla=true
			}
		}
	}
		if(cargo_tabla){
			var tabla='';
			var tabla2='';
			for(var j=1;j<=25;j++){
				vs_to_hojauti_resumen_rcv.newRecord()
				vs_to_hojauti_resumen_rcv.hiscli=globals.vHiscli
				vs_to_hojauti_resumen_rcv.tipo_opera=globals.vTipoOperador
				vs_to_hojauti_resumen_rcv.nro_operador=globals.vLegajo
				vs_to_hojauti_resumen_rcv.fecha=globals.vFecha
				vs_to_hojauti_resumen_rcv.item=3
				vs_to_hojauti_resumen_rcv.subitems=j
				if (j>9){
					tabla = 'tabla'+ j.toString().substr(0,2)
				}else{
					tabla = 'tabla'+ j.toString().substr(0,1)
				}
				vs_to_hojauti_resumen_rcv.concepto=globals[tabla][2400]
				for(var k=0;k<=95;k++){
				
					tabla2='hora'+indice_hora[k]
				
					if(globals[tabla][indice_hora[k]]!=0){
						if( globals[tabla][indice_hora[k]]!=''){
							if( globals[tabla][indice_hora[k]]!=null){
								vs_to_hojauti_resumen_rcv[tabla2]=globals[tabla][indice_hora[k]]
							}else{
								vs_to_hojauti_resumen_rcv[tabla2]=''
							}
						}else{
							vs_to_hojauti_resumen_rcv[tabla2]=''
						}
					}else{
						vs_to_hojauti_resumen_rcv[tabla2]=''
					}
				}
			}
			databaseManager.saveData(vs_to_hojauti_resumen_rcv)
		}
	
	globals.items=3

}
