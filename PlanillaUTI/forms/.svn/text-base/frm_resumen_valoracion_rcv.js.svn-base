/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"E2750C0D-73E6-4A2F-844D-B8914667AB01"}
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
		              + globals.vHiscli + ' and item = 4'
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
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"234E7F2C-5D6B-4468-8640-EAFCE70DD2C6"}
 * @AllowToRunInFind
 */
function onShow_resumen_Valoracion_rcv(firstShow, event) {
	globals.vDatasetSql=''
	application.updateUI()
	resumen_Valoracion_rcv()
	vs_to_hojauti_resumen_rcv.find()
	globals.items=4
	vs_to_hojauti_resumen_rcv.search()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"5A8C0DEA-1948-46C3-B2FA-D2F458A03223"}
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
		              + globals.vHiscli + ' and item = 4'
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
 * @properties={typeid:24,uuid:"4F221B97-E914-47E8-8EC8-5363EF43DD4E"}
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
		              + globals.vHiscli + ' and item = 4'
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
 * @properties={typeid:24,uuid:"F901F316-6DEC-4EC7-808E-1E02F6E3732A"}
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
		              + globals.vHiscli + ' and item = 4'
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
 * @properties={typeid:24,uuid:"32DB4E44-ABD1-4878-9DC1-A4D5965B4369"}
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
		              + globals.vHiscli + ' and item = 4'
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
 * @properties={typeid:24,uuid:"7B402E3E-CA1D-46E4-BF38-8CA456C4E34C"}
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
		              + globals.vHiscli + ' and item = 4'
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
 * @properties={typeid:24,uuid:"50035A1A-8143-4457-A76A-1F113B62CA74"}
 * @AllowToRunInFind
 */
function resumen_Valoracion_rcv() {
	globals.limpiaTablas()
	globals.items=4
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
	var cargo_tabla=false
	if(resumen_to_hojauti.getSize()>0){
		for(var i=1;i<=resumen_to_hojauti.getSize();i++){
			resumen_to_hojauti.setSelectedIndex(i)
			if(resumen_to_hojauti.hora>500){
				if(resumen_to_hojauti.hora<1000){
					hora=resumen_to_hojauti.hora.toString().substr(0,3)
				}else{
					hora=resumen_to_hojauti.hora.toString().substr(0,4)
				}
			
				switch (resumen_to_hojauti.val_dolor) {
				    case 0:globals.tabla1[hora]='0=Ausen.';break;
					case 1:globals.tabla1[hora]=' 1 ';break;
					case 2:globals.tabla1[hora]=' 2 ';break;
					case 3:globals.tabla1[hora]=' 3 ';break;
					case 4:globals.tabla1[hora]=' 4 ';break;
					case 5:globals.tabla1[hora]=' 5 ';break;
					case 6:globals.tabla1[hora]=' 6 ';break;
					case 7:globals.tabla1[hora]=' 7 ';break;
					case 8:globals.tabla1[hora]=' 8 ';break;
					case 9:globals.tabla1[hora]=' 9 ';break;
					case 10:globals.tabla1[hora]='10=Máx.';break;
					default:globals.tabla1[hora]='';break;
				}
				globals.tabla1[2400]='Dolor  '
				switch (resumen_to_hojauti.val_tip_dolor) {
				    case 1:globals.tabla2[hora]='Quemante';break;
				    case 2:globals.tabla2[hora]='Punzante';break;
				    case 3:globals.tabla2[hora]='Opresivo';break;
				    case 0:globals.tabla2[hora]='Ninguno';break;
				    default:globals.tabla2[hora]='';break;
				}	
				globals.tabla2[2400]='Dolor    Tipo '
				switch (resumen_to_hojauti.val_disnea) {
			          case 1:globals.tabla3[hora]='I';break;
			          case 2:globals.tabla3[hora]='II';break;
			          case 3:globals.tabla3[hora]='III';break;
			          case 4:globals.tabla3[hora]='IV';break;
			          case 0:globals.tabla3[hora]='No';break;
			          default:globals.tabla3[hora]='';break;
			    }	
			    globals.tabla3[2400]='Disnea     '
			    switch (resumen_to_hojauti.val_secreciones) {
			    	case 0:globals.tabla4[hora]='Ninguna';break;
			    	case 1:globals.tabla4[hora]='Mucosa';break;
					case 2:globals.tabla4[hora]='Mucopurulenta';break;
					case 3:globals.tabla4[hora]='Fétida';break;
					case 4:globals.tabla4[hora]='Sanguinolenta';break;
					case 5:globals.tabla4[hora]='Hemorrágica';break;
					case 6:globals.tabla4[hora]='Hemoptisis';break;
					case 7:globals.tabla4[hora]='Rubiginosa';break;
					case 8:globals.tabla4[hora]='Espumosa';break;
					default:globals.tabla4[hora]='';break;
				}
				globals.tabla4[2400]='Secreciones '	
				if(resumen_to_hojauti.val_hemorragia==1){
					globals.tabla5[hora]='Si'	
				}else{
					if(resumen_to_hojauti.val_hemorragia!=null){
						globals.tabla5[hora]='No'
					}
				}
				globals.tabla5[2400]='Hemorragias '
				if(resumen_to_hojauti.val_hemo_vias_resp==1){
					globals.tabla6[hora]='Si'	
				}else{
					if(resumen_to_hojauti.val_hemo_vias_resp!=null){
						globals.tabla6[hora]='No'
					}
				}
				globals.tabla6[2400]='Hemorragia Vías Resp.'
				if(resumen_to_hojauti.val_hemo_digestiva==1){
					globals.tabla7[hora]='Si'	
				}else{
					if(resumen_to_hojauti.val_hemo_digestiva!=null){
						globals.tabla7[hora]='No'
					}
				}
				globals.tabla7[2400]='Hemorragia Digestiva'
				if(resumen_to_hojauti.val_hemo_mucosas==1){
					globals.tabla8[hora]='Si'	
				}else{
					if(resumen_to_hojauti.val_hemo_mucosas!=null){
						globals.tabla8[hora]='No'
					}
				}
				globals.tabla8[2400]='Hemorragia Mucosas'	
				if(resumen_to_hojauti.val_hemo_hematuria==1){
					globals.tabla9[hora]='Si'	
				}else{
					if(resumen_to_hojauti.val_hemo_hematuria!=null){
						globals.tabla9[hora]='No'
					}
				}
				globals.tabla9[2400]='Hemorragia Hematuria'
				switch (resumen_to_hojauti.val_convulsiones) {
					case 1:globals.tabla15[hora]='Mioclónicos';break;
					case 2:globals.tabla15[hora]='Atónicos';break;
					case 3:globals.tabla15[hora]='Tónico Clónicos';break;
					case 4:globals.tabla15[hora]='Generalizados';break;
					case 0:globals.tabla15[hora]='Ninguna';break;
					default:globals.tabla15[hora]='';break;
			    }	
			    globals.tabla15[2400]='Convulsiones'	
				switch (resumen_to_hojauti.val_cianosis) {
					case 1:globals.tabla16[hora]='Central';break;
					case 2:globals.tabla16[hora]='Periférica';break;
					case 0:globals.tabla16[hora]='No';break;
					default:globals.tabla16[hora]='';break;
				}	
				globals.tabla16[2400]='Cianosis'	
				if(resumen_to_hojauti.val_bronco_espasmo==1){
					globals.tabla17[hora]='Si'	
				}else{
					if(resumen_to_hojauti.val_bronco_espasmo!=null){
						globals.tabla17[hora]='No'
					}
				}
				globals.tabla17[2400]='BroncoEspasmo'	
			    switch (resumen_to_hojauti.val_arritmia) {
			    	case 0:globals.tabla18[hora]='Ninguna';break;
			    	case 1:globals.tabla18[hora]='Fibrilación Auricular';break;
			    	case 2:globals.tabla18[hora]='Aleteo Auricular';break;
			    	case 3:globals.tabla18[hora]='Taquicardia Supraventricular Paroxística';break;
			    	case 4:globals.tabla18[hora]='Síndrome de Wolff-Parkinson-White';break;
			    	case 5:globals.tabla18[hora]='Taquicardia Ventricular';break;
			    	case 6:globals.tabla18[hora]='Fibrilación Ventricular';break;
			    	case 7:globals.tabla18[hora]='Bradiarritmias  ';break;
			    	  	default:globals.tabla18[hora]='';break;
			    }
			    globals.tabla18[2400]='Arritmias'	
			    if(resumen_to_hojauti.val_depresion_respir==1){
					globals.tabla19[hora]='Si'	
				}else{
					if(resumen_to_hojauti.val_depresion_respir!=null){
						globals.tabla19[hora]='No'
					}		
				}
				globals.tabla19[2400]='Depresión Respiratoria'	
				switch (resumen_to_hojauti.val_conciencia) {
					case 0:globals.tabla20[hora]='Lúcido';break;
					case 1:globals.tabla20[hora]='Confuso';break;
					case 2:globals.tabla20[hora]='Omnubilado';break;
					case 3:globals.tabla20[hora]='Somnoliento';break;
					case 4:globals.tabla20[hora]='Estuporoso';break;
					case 5:globals.tabla20[hora]='Coma';break;
					case 6:globals.tabla20[hora]='Excitación';break;
					case 7:globals.tabla20[hora]='Manía';break;
					case 8:globals.tabla20[hora]='Delirio';break;
		    	  	default:globals.tabla20[hora]='';break;
		    	}
		    	globals.tabla20[2400]='Estado de Conciencia'	
		    	if(resumen_to_hojauti.val_mcpt==1){
					globals.tabla21[hora]='Si'	
				}else{
					if(resumen_to_hojauti.val_mcpt!=null){
						globals.tabla21[hora]='No'
					}		
				}
				globals.tabla21[2400]='Marcapasos Transitorio'
				if(resumen_to_hojauti.val_mcpd==1){
					globals.tabla22[hora]='Si'	
				}else{
					if(resumen_to_hojauti.val_mcpd!=null){
						globals.tabla22[hora]='No'
					}
				}
				globals.tabla22[2400]='Marcapasos Definitivo'	
				if(resumen_to_hojauti.val_diuresis==1){
					globals.tabla22[hora]='Si'	
				}else{
					if(resumen_to_hojauti.val_diuresis!=null){
						globals.tabla22[hora]='No'
					}
				}
				globals.tabla22[2400]='Diuresis'	
				if(resumen_to_hojauti.val_nauseas==1){
					globals.tabla23[hora]='Si'	
				}else{
					if(resumen_to_hojauti.val_nauseas!=null){
						globals.tabla23[hora]='No'
					}
				}
				globals.tabla23[2400]='Nauseas'
				switch (resumen_to_hojauti.val_emesis) {
					case 0:globals.tabla24[hora]='No';break;
					case 1:globals.tabla24[hora]='Alimentario';break;
					case 2:globals.tabla24[hora]='Bilis';break;
					case 3:globals.tabla24[hora]='Sangre';break;
					case 4:globals.tabla24[hora]='Moco';break;
					case 5:globals.tabla24[hora]='Pus';break;
					default:globals.tabla24[hora]='';break;
		    	}
		    	globals.tabla24[2400]='Emesis'
		    	switch (resumen_to_hojauti.val_catarsis_tip) {
		    		case 0:globals.tabla25[hora]='No';break;
		    		case 1:globals.tabla25[hora]='Diarréica';break;
		    		case 2:globals.tabla25[hora]='Semisólida';break;
		    		case 3:globals.tabla25[hora]='Sólida';break;
		    		case 4:globals.tabla25[hora]='Melena';break;
		    		default:globals.tabla25[hora]='';break;
		        }
		        globals.tabla25[2400]='Catarsis   Tipo'
		    	switch (resumen_to_hojauti.val_catarsis_cant) {
		    		case 0:globals.tabla26[hora]='No';break;
		    		case 1:globals.tabla26[hora]='*';break;
		    		case 2:globals.tabla26[hora]='**';break;
		    		case 3:globals.tabla26[hora]='***';break;
		    		case 4:globals.tabla26[hora]='Abundante';break;
		    		default:globals.tabla26[hora]='';break;
		    	}
		    	globals.tabla26[2400]='Catarsis   Cant.'			
		    	switch (resumen_to_hojauti.val_colostomia_tip) {
		    		case 0:globals.tabla27[hora]='No';break;
		    		case 1:globals.tabla27[hora]='Diarréica';break;
		    		case 2:globals.tabla27[hora]='Semisólida';break;
		    		case 3:globals.tabla27[hora]='Sólida';break;
		    		default:globals.tabla27[hora]='';break;
		    	}
		    	globals.tabla27[2400]='Colostomía   Tipo'
		    	switch (resumen_to_hojauti.val_colostomia_cant) {
		    		case 0:globals.tabla28[hora]='No';break;
		    		case 1:globals.tabla28[hora]='*';break;
		    		case 2:globals.tabla28[hora]='**';break;
		    		case 3:globals.tabla28[hora]='***';break;
		    		case 4:globals.tabla28[hora]='Abundante';break;
		    		default:globals.tabla28[hora]='';break;
		    	}
		    	globals.tabla28[2400]='Colostomía   Cant.'	
		    	switch (resumen_to_hojauti.val_piel) {
		    		case 0:globals.tabla29[hora]='Normal';break;
		    		case 1:globals.tabla29[hora]='Seca';break;
		    		case 2:globals.tabla29[hora]='Fría';break;
		    		case 3:globals.tabla29[hora]='Sudorosa';break;
		    		case 4:globals.tabla29[hora]='Libideses';break;
		    		case 5:globals.tabla29[hora]='Cicatrices';break;
		    		default:globals.tabla29[hora]='';break;
		    	}
		    	globals.tabla29[2400]='Piel'	
		    	if(resumen_to_hojauti.val_edema==1){
					globals.tabla30[hora]='Si'	
				}else{
					globals.tabla30[hora]=''
				}
				globals.tabla30[2400]='Edemas'
				if(resumen_to_hojauti.val_edema_mmss_d==1){
					globals.tabla31[hora]='Si'	
				}else{
					globals.tabla31[hora]=''
				}
				globals.tabla31[2400]='MMSS  D'
				if(resumen_to_hojauti.val_edema_mmss_i==1){
					globals.tabla32[hora]='Si'	
				}else{
					globals.tabla32[hora]=''
				}
				globals.tabla32[2400]='MMSS  I'
				if(resumen_to_hojauti.val_edema_mmii_d==1){
					globals.tabla33[hora]='Si'	
				}else{
					globals.tabla33[hora]=''
				}
				globals.tabla33[2400]='MMII  D'
				if(resumen_to_hojauti.val_edema_mmii_i==1){
					globals.tabla34[hora]='Si'	
				}else{
					globals.tabla34[hora]=''
				}
				globals.tabla34[2400]='MMII  I'
				if(resumen_to_hojauti.val_edema_sacro==1){
					globals.tabla35[hora]='Si'	
				}else{
					globals.tabla35[hora]=''
				}
				globals.tabla35[2400]='SACRO'
				if(resumen_to_hojauti.val_edema_anasarca==1){
					globals.tabla36[hora]='Si'	
				}else{
					globals.tabla36[hora]=''
				}
				globals.tabla36[2400]='ANASARCA'
				globals.tabla37[2400]='- ESCARAS -'
				globals.tabla38[2400]='--- Decubito Supino --'	
			 	switch (resumen_to_hojauti.val_esc_supino_codos) {
			 		case 0:globals.tabla39[hora]='';break;
			 		case 1:globals.tabla39[hora]='I';break;
			 		case 2:globals.tabla39[hora]='II';break;
			 		case 3:globals.tabla39[hora]='III';break;
			 		case 4:globals.tabla39[hora]='IV';break;
			 		default:globals.tabla39[hora]='';break;
	    		}
	    		globals.tabla39[2400]='----- Codos'	
	    		switch (resumen_to_hojauti.val_esc_supino_occipucio) {
	    			case 0:globals.tabla40[hora]='';break;
	    			case 1:globals.tabla40[hora]='I';break;
	    			case 2:globals.tabla40[hora]='II';break;
	    			case 3:globals.tabla40[hora]='III';break;
	    			case 4:globals.tabla40[hora]='IV';break;
	    			default:globals.tabla40[hora]='';break;
		 		}
		 		globals.tabla40[2400]='----- Occipucio'	
	    		switch (resumen_to_hojauti.val_esc_supino_omoplatos) {
				case 0:globals.tabla41[hora]='';break;
				case 1:globals.tabla41[hora]='I';break;
				case 2:globals.tabla41[hora]='II';break;
				case 3:globals.tabla41[hora]='III';break;
				case 4:globals.tabla41[hora]='IV';break;
				default:globals.tabla41[hora]='';break;
				}
				globals.tabla41[2400]='----- Omóplatos'		
	    		switch (resumen_to_hojauti.val_esc_supino_sacro) {
				case 0:globals.tabla42[hora]='';break;
				case 1:globals.tabla42[hora]='I';break;
				case 2:globals.tabla42[hora]='II';break;
				case 3:globals.tabla42[hora]='III';break;
				case 4:globals.tabla42[hora]='IV';break;
				default:globals.tabla42[hora]='';break;
				}
				globals.tabla42[2400]='----- Sacro'		
	    		switch (resumen_to_hojauti.val_esc_supino_talon) {
				case 0:globals.tabla43[hora]='';break;
				case 1:globals.tabla43[hora]='I';break;
				case 2:globals.tabla43[hora]='II';break;
				case 3:globals.tabla43[hora]='III';break;
				case 4:globals.tabla43[hora]='IV';break;
				default:globals.tabla43[hora]='';break;
				}
				globals.tabla43[2400]='----- Talón'		
				globals.tabla44[2400]='--- Decubito Prono --'
				switch (resumen_to_hojauti.val_esc_prono_dedos_del_pie) {
				case 0:globals.tabla45[hora]='';break;
				case 1:globals.tabla45[hora]='I';break;
				case 2:globals.tabla45[hora]='II';break;
				case 3:globals.tabla45[hora]='III';break;
				case 4:globals.tabla45[hora]='IV';break;
				default:globals.tabla45[hora]='';break;
				}
				globals.tabla45[2400]='----- Dedos del Pie'
				switch (resumen_to_hojauti.val_esc_prono_hombro) {
				case 0:globals.tabla46[hora]='';break;
				case 1:globals.tabla46[hora]='I';break;
				case 2:globals.tabla46[hora]='II';break;
				case 3:globals.tabla46[hora]='III';break;
				case 4:globals.tabla46[hora]='IV';break;
				default:globals.tabla46[hora]='';break;
				}
				globals.tabla46[2400]='----- Hombros'
				switch (resumen_to_hojauti.val_esc_prono_mejilla_oreja) {
				case 0:globals.tabla47[hora]='';break;
				case 1:globals.tabla47[hora]='I';break;
				case 2:globals.tabla47[hora]='II';break;
				case 3:globals.tabla47[hora]='III';break;
				case 4:globals.tabla47[hora]='IV';break;
				default:globals.tabla47[hora]='';break;
				}
				globals.tabla47[2400]='----- Mejillas y Orejas'
				switch (resumen_to_hojauti.val_esc_prono_rodilla) {
				case 0:globals.tabla48[hora]='';break;
				case 1:globals.tabla48[hora]='I';break;
				case 2:globals.tabla48[hora]='II';break;
				case 3:globals.tabla48[hora]='III';break;
				case 4:globals.tabla48[hora]='IV';break;
				default:globals.tabla48[hora]='';break;
				}
				globals.tabla48[2400]='----- Rodillas'
				switch (resumen_to_hojauti.val_esc_prono_genitales) {
				case 0:globals.tabla49[hora]='';break;
				case 1:globals.tabla49[hora]='I';break;
				case 2:globals.tabla49[hora]='II';break;
				case 3:globals.tabla49[hora]='III';break;
				case 4:globals.tabla49[hora]='IV';break;
				default:globals.tabla49[hora]='';break;
				}
				globals.tabla49[2400]='----- '+globals.vGenitales
				globals.tabla50[2400]='--- Decubito Lateral --'
				switch (resumen_to_hojauti.val_esc_lateral_cadera) {
				case 0:globals.tabla51[hora]='';break;
				case 1:globals.tabla51[hora]='I';break;
				case 2:globals.tabla51[hora]='II';break;
				case 3:globals.tabla51[hora]='III';break;
				case 4:globals.tabla51[hora]='IV';break;
				default:globals.tabla51[hora]='';break;
				}
				globals.tabla51[2400]='----- Cadera'
				switch (resumen_to_hojauti.val_esc_lateral_codo) {
				case 0:globals.tabla52[hora]='';break;
				case 1:globals.tabla52[hora]='I';break;
				case 2:globals.tabla52[hora]='II';break;
				case 3:globals.tabla52[hora]='III';break;
				case 4:globals.tabla52[hora]='IV';break;
				default:globals.tabla52[hora]='';break;
				}
				globals.tabla52[2400]='----- Codos'
				switch (resumen_to_hojauti.val_esc_lateral_costillas) {
				case 0:globals.tabla53[hora]='';break;
				case 1:globals.tabla53[hora]='I';break;
				case 2:globals.tabla53[hora]='II';break;
				case 3:globals.tabla53[hora]='III';break;
				case 4:globals.tabla53[hora]='IV';break;
				default:globals.tabla53[hora]='';break;
				}
				globals.tabla53[2400]='----- Costillas'
				switch (resumen_to_hojauti.val_esc_lateral_hombro) {
				case 0:globals.tabla54[hora]='';break;
				case 1:globals.tabla54[hora]='I';break;
				case 2:globals.tabla54[hora]='II';break;
				case 3:globals.tabla54[hora]='III';break;
				case 4:globals.tabla54[hora]='IV';break;
				default:globals.tabla54[hora]='';break;
				}
				globals.tabla54[2400]='----- Hombros'
				switch (resumen_to_hojauti.val_esc_lateral_oreja) {
				case 0:globals.tabla55[hora]='';break;
				case 1:globals.tabla55[hora]='I';break;
				case 2:globals.tabla55[hora]='II';break;
				case 3:globals.tabla55[hora]='III';break;
				case 4:globals.tabla55[hora]='IV';break;
				default:globals.tabla55[hora]='';break;
				}
				globals.tabla55[2400]='----- Orejas'
				switch (resumen_to_hojauti.val_esc_lateral_rodillas) {
				case 0:globals.tabla56[hora]='';break;
				case 1:globals.tabla56[hora]='I';break;
				case 2:globals.tabla56[hora]='II';break;
				case 3:globals.tabla56[hora]='III';break;
				case 4:globals.tabla56[hora]='IV';break;
				default:globals.tabla56[hora]='';break;
				}
				globals.tabla56[2400]='----- Rodillas'
				switch (resumen_to_hojauti.val_esc_lateral_tobillo) {
				case 0:globals.tabla57[hora]='';break;
				case 1:globals.tabla57[hora]='I';break;
				case 2:globals.tabla57[hora]='II';break;
				case 3:globals.tabla57[hora]='III';break;
				case 4:globals.tabla57[hora]='IV';break;
				default:globals.tabla57[hora]='';break;
				}
				globals.tabla57[2400]='----- Tobillos'
				cargo_tabla=true
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
					
						switch (resumen2_to_hojauti.val_dolor) {
						    case 0:globals.tabla1[hora]='0=Ausen.';break;
							case 1:globals.tabla1[hora]=' 1 ';break;
							case 2:globals.tabla1[hora]=' 2 ';break;
							case 3:globals.tabla1[hora]=' 3 ';break;
							case 4:globals.tabla1[hora]=' 4 ';break;
							case 5:globals.tabla1[hora]=' 5 ';break;
							case 6:globals.tabla1[hora]=' 6 ';break;
							case 7:globals.tabla1[hora]=' 7 ';break;
							case 8:globals.tabla1[hora]=' 8 ';break;
							case 9:globals.tabla1[hora]=' 9 ';break;
							case 10:globals.tabla1[hora]='10=Máx.';break;
							default:globals.tabla1[hora]='';break;
						}
						globals.tabla1[2400]='Dolor  '
						switch (resumen2_to_hojauti.val_tip_dolor) {
						    case 1:globals.tabla2[hora]='Quemante';break;
						    case 2:globals.tabla2[hora]='Punzante';break;
						    case 3:globals.tabla2[hora]='Opresivo';break;
						    case 0:globals.tabla2[hora]='Ninguno';break;
						    default:globals.tabla2[hora]='';break;
						}	
						globals.tabla2[2400]='Dolor    Tipo '
						switch (resumen2_to_hojauti.val_disnea) {
					          case 1:globals.tabla3[hora]='I';break;
					          case 2:globals.tabla3[hora]='II';break;
					          case 3:globals.tabla3[hora]='III';break;
					          case 4:globals.tabla3[hora]='IV';break;
					          case 0:globals.tabla3[hora]='No';break;
					          default:globals.tabla3[hora]='';break;
					    }	
					    globals.tabla3[2400]='Disnea     '
					    switch (resumen2_to_hojauti.val_secreciones) {
					    	case 0:globals.tabla4[hora]='Ninguna';break;
					    	case 1:globals.tabla4[hora]='Mucosa';break;
							case 2:globals.tabla4[hora]='Mucopurulenta';break;
							case 3:globals.tabla4[hora]='Fétida';break;
							case 4:globals.tabla4[hora]='Sanguinolenta';break;
							case 5:globals.tabla4[hora]='Hemorrágica';break;
							case 6:globals.tabla4[hora]='Hemoptisis';break;
							case 7:globals.tabla4[hora]='Rubiginosa';break;
							case 8:globals.tabla4[hora]='Espumosa';break;
							default:globals.tabla4[hora]='';break;
						}
						globals.tabla4[2400]='Secreciones '	
						if(resumen2_to_hojauti.val_hemorragia==1){
							globals.tabla5[hora]='Si'	
						}else{
							if(resumen2_to_hojauti.val_hemorragia!=null){
								globals.tabla5[hora]='No'
							}
						}
						globals.tabla5[2400]='Hemorragias '
						if(resumen2_to_hojauti.val_hemo_vias_resp==1){
							globals.tabla6[hora]='Si'	
						}else{
							if(resumen2_to_hojauti.val_hemo_vias_resp!=null){
								globals.tabla6[hora]='No'
							}
						}
						globals.tabla6[2400]='Hemorragia Vías Resp.'
						if(resumen2_to_hojauti.val_hemo_digestiva==1){
							globals.tabla7[hora]='Si'	
						}else{
							if(resumen2_to_hojauti.val_hemo_digestiva!=null){
								globals.tabla7[hora]='No'
							}
						}
						globals.tabla7[2400]='Hemorragia Digestiva'
						if(resumen2_to_hojauti.val_hemo_mucosas==1){
							globals.tabla8[hora]='Si'	
						}else{
							if(resumen2_to_hojauti.val_hemo_mucosas!=null){
								globals.tabla8[hora]='No'
							}
						}
						globals.tabla8[2400]='Hemorragia Mucosas'	
						if(resumen2_to_hojauti.val_hemo_hematuria==1){
							globals.tabla9[hora]='Si'	
						}else{
							if(resumen2_to_hojauti.val_hemo_hematuria!=null){
								globals.tabla9[hora]='No'
							}
						}
						globals.tabla9[2400]='Hemorragia Hematuria'
						switch (resumen2_to_hojauti.val_convulsiones) {
							case 1:globals.tabla15[hora]='Mioclónicos';break;
							case 2:globals.tabla15[hora]='Atónicos';break;
							case 3:globals.tabla15[hora]='Tónico Clónicos';break;
							case 4:globals.tabla15[hora]='Generalizados';break;
							case 0:globals.tabla15[hora]='Ninguna';break;
							default:globals.tabla15[hora]='';break;
					    }	
					    globals.tabla15[2400]='Convulsiones'	
						switch (resumen2_to_hojauti.val_cianosis) {
							case 1:globals.tabla16[hora]='Central';break;
							case 2:globals.tabla16[hora]='Periférica';break;
							case 0:globals.tabla16[hora]='No';break;
							default:globals.tabla16[hora]='';break;
						}	
						globals.tabla16[2400]='Cianosis'	
						if(resumen2_to_hojauti.val_bronco_espasmo==1){
							globals.tabla17[hora]='Si'	
						}else{
							if(resumen2_to_hojauti.val_bronco_espasmo!=null){
								globals.tabla17[hora]='No'
							}
						}
						globals.tabla17[2400]='BroncoEspasmo'	
					    switch (resumen2_to_hojauti.val_arritmia) {
					    	case 0:globals.tabla18[hora]='Ninguna';break;
					    	case 1:globals.tabla18[hora]='Fibrilación Auricular';break;
					    	case 2:globals.tabla18[hora]='Aleteo Auricular';break;
					    	case 3:globals.tabla18[hora]='Taquicardia Supraventricular Paroxística';break;
					    	case 4:globals.tabla18[hora]='Síndrome de Wolff-Parkinson-White';break;
					    	case 5:globals.tabla18[hora]='Taquicardia Ventricular';break;
					    	case 6:globals.tabla18[hora]='Fibrilación Ventricular';break;
					    	case 7:globals.tabla18[hora]='Bradiarritmias  ';break;
					    	  	default:globals.tabla18[hora]='';break;
					    }
					    globals.tabla18[2400]='Arritmias'	
					    if(resumen2_to_hojauti.val_depresion_respir==1){
							globals.tabla19[hora]='Si'	
						}else{
							if(resumen2_to_hojauti.val_depresion_respir!=null){
								globals.tabla19[hora]='No'
							}		
						}
						globals.tabla19[2400]='Depresión Respiratoria'	
						switch (resumen2_to_hojauti.val_conciencia) {
							case 0:globals.tabla20[hora]='Lúcido';break;
							case 1:globals.tabla20[hora]='Confuso';break;
							case 2:globals.tabla20[hora]='Omnubilado';break;
							case 3:globals.tabla20[hora]='Somnoliento';break;
							case 4:globals.tabla20[hora]='Estuporoso';break;
							case 5:globals.tabla20[hora]='Coma';break;
							case 6:globals.tabla20[hora]='Excitación';break;
							case 7:globals.tabla20[hora]='Manía';break;
							case 8:globals.tabla20[hora]='Delirio';break;
				    	  	default:globals.tabla20[hora]='';break;
				    	}
				    	globals.tabla20[2400]='Estado de Conciencia'	
				    	if(resumen2_to_hojauti.val_mcpt==1){
							globals.tabla21[hora]='Si'	
						}else{
							if(resumen2_to_hojauti.val_mcpt!=null){
								globals.tabla21[hora]='No'
							}		
						}
						globals.tabla21[2400]='Marcapasos Transitorio'
						if(resumen2_to_hojauti.val_mcpd==1){
							globals.tabla22[hora]='Si'	
						}else{
							if(resumen2_to_hojauti.val_mcpd!=null){
								globals.tabla22[hora]='No'
							}
						}
						globals.tabla22[2400]='Marcapasos Definitivo'	
						if(resumen2_to_hojauti.val_diuresis==1){
							globals.tabla22[hora]='Si'	
						}else{
							if(resumen2_to_hojauti.val_diuresis!=null){
								globals.tabla22[hora]='No'
							}
						}
						globals.tabla22[2400]='Diuresis'	
						if(resumen2_to_hojauti.val_nauseas==1){
							globals.tabla23[hora]='Si'	
						}else{
							if(resumen2_to_hojauti.val_nauseas!=null){
								globals.tabla23[hora]='No'
							}
						}
						globals.tabla23[2400]='Nauseas'
						switch (resumen2_to_hojauti.val_emesis) {
							case 0:globals.tabla24[hora]='No';break;
							case 1:globals.tabla24[hora]='Alimentario';break;
							case 2:globals.tabla24[hora]='Bilis';break;
							case 3:globals.tabla24[hora]='Sangre';break;
							case 4:globals.tabla24[hora]='Moco';break;
							case 5:globals.tabla24[hora]='Pus';break;
							default:globals.tabla24[hora]='';break;
				    	}
				    	globals.tabla24[2400]='Emesis'
				    	switch (resumen2_to_hojauti.val_catarsis_tip) {
				    		case 0:globals.tabla25[hora]='No';break;
				    		case 1:globals.tabla25[hora]='Diarréica';break;
				    		case 2:globals.tabla25[hora]='Semisólida';break;
				    		case 3:globals.tabla25[hora]='Sólida';break;
				    		case 4:globals.tabla25[hora]='Melena';break;
				    		default:globals.tabla25[hora]='';break;
				        }
				        globals.tabla25[2400]='Catarsis   Tipo'
				    	switch (resumen2_to_hojauti.val_catarsis_cant) {
				    		case 0:globals.tabla26[hora]='No';break;
				    		case 1:globals.tabla26[hora]='*';break;
				    		case 2:globals.tabla26[hora]='**';break;
				    		case 3:globals.tabla26[hora]='***';break;
				    		case 4:globals.tabla26[hora]='Abundante';break;
				    		default:globals.tabla26[hora]='';break;
				    	}
				    	globals.tabla26[2400]='Catarsis   Cant.'			
				    	switch (resumen2_to_hojauti.val_colostomia_tip) {
				    		case 0:globals.tabla27[hora]='No';break;
				    		case 1:globals.tabla27[hora]='Diarréica';break;
				    		case 2:globals.tabla27[hora]='Semisólida';break;
				    		case 3:globals.tabla27[hora]='Sólida';break;
				    		default:globals.tabla27[hora]='';break;
				    	}
				    	globals.tabla27[2400]='Colostomía   Tipo'
				    	switch (resumen2_to_hojauti.val_colostomia_cant) {
				    		case 0:globals.tabla28[hora]='No';break;
				    		case 1:globals.tabla28[hora]='*';break;
				    		case 2:globals.tabla28[hora]='**';break;
				    		case 3:globals.tabla28[hora]='***';break;
				    		case 4:globals.tabla28[hora]='Abundante';break;
				    		default:globals.tabla28[hora]='';break;
				    	}
				    	globals.tabla28[2400]='Colostomía   Cant.'	
				    	switch (resumen2_to_hojauti.val_piel) {
				    		case 0:globals.tabla29[hora]='Normal';break;
				    		case 1:globals.tabla29[hora]='Seca';break;
				    		case 2:globals.tabla29[hora]='Fría';break;
				    		case 3:globals.tabla29[hora]='Sudorosa';break;
				    		case 4:globals.tabla29[hora]='Libideses';break;
				    		case 5:globals.tabla29[hora]='Cicatrices';break;
				    		default:globals.tabla29[hora]='';break;
				    	}
				    	globals.tabla29[2400]='Piel'	
				    	if(resumen2_to_hojauti.val_edema==1){
							globals.tabla30[hora]='Si'	
						}else{
							globals.tabla30[hora]=''
						}
						globals.tabla30[2400]='Edemas'
						if(resumen2_to_hojauti.val_edema_mmss_d==1){
							globals.tabla31[hora]='Si'	
						}else{
							globals.tabla31[hora]=''
						}
						globals.tabla31[2400]='MMSS  D'
						if(resumen2_to_hojauti.val_edema_mmss_i==1){
							globals.tabla32[hora]='Si'	
						}else{
							globals.tabla32[hora]=''
						}
						globals.tabla32[2400]='MMSS  I'
						if(resumen2_to_hojauti.val_edema_mmii_d==1){
							globals.tabla33[hora]='Si'	
						}else{
							globals.tabla33[hora]=''
						}
						globals.tabla33[2400]='MMII  D'
						if(resumen2_to_hojauti.val_edema_mmii_i==1){
							globals.tabla34[hora]='Si'	
						}else{
							globals.tabla34[hora]=''
						}
						globals.tabla34[2400]='MMII  I'
						if(resumen2_to_hojauti.val_edema_sacro==1){
							globals.tabla35[hora]='Si'	
						}else{
							globals.tabla35[hora]=''
						}
						globals.tabla35[2400]='SACRO'
						if(resumen2_to_hojauti.val_edema_anasarca==1){
							globals.tabla36[hora]='Si'	
						}else{
							globals.tabla36[hora]=''
						}
						globals.tabla36[2400]='ANASARCA'
						globals.tabla37[2400]='- ESCARAS -'
						globals.tabla38[2400]='--- Decubito Supino --'	
					 	switch (resumen2_to_hojauti.val_esc_supino_codos) {
					 		case 0:globals.tabla39[hora]='';break;
					 		case 1:globals.tabla39[hora]='I';break;
					 		case 2:globals.tabla39[hora]='II';break;
					 		case 3:globals.tabla39[hora]='III';break;
					 		case 4:globals.tabla39[hora]='IV';break;
					 		default:globals.tabla39[hora]='';break;
			    		}
			    		globals.tabla39[2400]='----- Codos'	
			    		switch (resumen2_to_hojauti.val_esc_supino_occipucio) {
			    			case 0:globals.tabla40[hora]='';break;
			    			case 1:globals.tabla40[hora]='I';break;
			    			case 2:globals.tabla40[hora]='II';break;
			    			case 3:globals.tabla40[hora]='III';break;
			    			case 4:globals.tabla40[hora]='IV';break;
			    			default:globals.tabla40[hora]='';break;
				 		}
				 		globals.tabla40[2400]='----- Occipucio'	
			    		switch (resumen2_to_hojauti.val_esc_supino_omoplatos) {
						case 0:globals.tabla41[hora]='';break;
						case 1:globals.tabla41[hora]='I';break;
						case 2:globals.tabla41[hora]='II';break;
						case 3:globals.tabla41[hora]='III';break;
						case 4:globals.tabla41[hora]='IV';break;
						default:globals.tabla41[hora]='';break;
						}
						globals.tabla41[2400]='----- Omóplatos'		
			    		switch (resumen2_to_hojauti.val_esc_supino_sacro) {
						case 0:globals.tabla42[hora]='';break;
						case 1:globals.tabla42[hora]='I';break;
						case 2:globals.tabla42[hora]='II';break;
						case 3:globals.tabla42[hora]='III';break;
						case 4:globals.tabla42[hora]='IV';break;
						default:globals.tabla42[hora]='';break;
						}
						globals.tabla42[2400]='----- Sacro'		
			    		switch (resumen2_to_hojauti.val_esc_supino_talon) {
						case 0:globals.tabla43[hora]='';break;
						case 1:globals.tabla43[hora]='I';break;
						case 2:globals.tabla43[hora]='II';break;
						case 3:globals.tabla43[hora]='III';break;
						case 4:globals.tabla43[hora]='IV';break;
						default:globals.tabla43[hora]='';break;
						}
						globals.tabla43[2400]='----- Talón'		
						globals.tabla44[2400]='--- Decubito Prono --'
						switch (resumen2_to_hojauti.val_esc_prono_dedos_del_pie) {
						case 0:globals.tabla45[hora]='';break;
						case 1:globals.tabla45[hora]='I';break;
						case 2:globals.tabla45[hora]='II';break;
						case 3:globals.tabla45[hora]='III';break;
						case 4:globals.tabla45[hora]='IV';break;
						default:globals.tabla45[hora]='';break;
						}
						globals.tabla45[2400]='----- Dedos del Pie'
						switch (resumen2_to_hojauti.val_esc_prono_hombro) {
						case 0:globals.tabla46[hora]='';break;
						case 1:globals.tabla46[hora]='I';break;
						case 2:globals.tabla46[hora]='II';break;
						case 3:globals.tabla46[hora]='III';break;
						case 4:globals.tabla46[hora]='IV';break;
						default:globals.tabla46[hora]='';break;
						}
						globals.tabla46[2400]='----- Hombros'
						switch (resumen2_to_hojauti.val_esc_prono_mejilla_oreja) {
						case 0:globals.tabla47[hora]='';break;
						case 1:globals.tabla47[hora]='I';break;
						case 2:globals.tabla47[hora]='II';break;
						case 3:globals.tabla47[hora]='III';break;
						case 4:globals.tabla47[hora]='IV';break;
						default:globals.tabla47[hora]='';break;
						}
						globals.tabla47[2400]='----- Mejillas y Orejas'
						switch (resumen2_to_hojauti.val_esc_prono_rodilla) {
						case 0:globals.tabla48[hora]='';break;
						case 1:globals.tabla48[hora]='I';break;
						case 2:globals.tabla48[hora]='II';break;
						case 3:globals.tabla48[hora]='III';break;
						case 4:globals.tabla48[hora]='IV';break;
						default:globals.tabla48[hora]='';break;
						}
						globals.tabla48[2400]='----- Rodillas'
						switch (resumen2_to_hojauti.val_esc_prono_genitales) {
						case 0:globals.tabla49[hora]='';break;
						case 1:globals.tabla49[hora]='I';break;
						case 2:globals.tabla49[hora]='II';break;
						case 3:globals.tabla49[hora]='III';break;
						case 4:globals.tabla49[hora]='IV';break;
						default:globals.tabla49[hora]='';break;
						}
						globals.tabla49[2400]='----- '+globals.vGenitales
						globals.tabla50[2400]='--- Decubito Lateral --'
						switch (resumen2_to_hojauti.val_esc_lateral_cadera) {
						case 0:globals.tabla51[hora]='';break;
						case 1:globals.tabla51[hora]='I';break;
						case 2:globals.tabla51[hora]='II';break;
						case 3:globals.tabla51[hora]='III';break;
						case 4:globals.tabla51[hora]='IV';break;
						default:globals.tabla51[hora]='';break;
						}
						globals.tabla51[2400]='----- Cadera'
						switch (resumen2_to_hojauti.val_esc_lateral_codo) {
						case 0:globals.tabla52[hora]='';break;
						case 1:globals.tabla52[hora]='I';break;
						case 2:globals.tabla52[hora]='II';break;
						case 3:globals.tabla52[hora]='III';break;
						case 4:globals.tabla52[hora]='IV';break;
						default:globals.tabla52[hora]='';break;
						}
						globals.tabla52[2400]='----- Codos'
						switch (resumen2_to_hojauti.val_esc_lateral_costillas) {
						case 0:globals.tabla53[hora]='';break;
						case 1:globals.tabla53[hora]='I';break;
						case 2:globals.tabla53[hora]='II';break;
						case 3:globals.tabla53[hora]='III';break;
						case 4:globals.tabla53[hora]='IV';break;
						default:globals.tabla53[hora]='';break;
						}
						globals.tabla53[2400]='----- Costillas'
						switch (resumen2_to_hojauti.val_esc_lateral_hombro) {
						case 0:globals.tabla54[hora]='';break;
						case 1:globals.tabla54[hora]='I';break;
						case 2:globals.tabla54[hora]='II';break;
						case 3:globals.tabla54[hora]='III';break;
						case 4:globals.tabla54[hora]='IV';break;
						default:globals.tabla54[hora]='';break;
						}
						globals.tabla54[2400]='----- Hombros'
						switch (resumen2_to_hojauti.val_esc_lateral_oreja) {
						case 0:globals.tabla55[hora]='';break;
						case 1:globals.tabla55[hora]='I';break;
						case 2:globals.tabla55[hora]='II';break;
						case 3:globals.tabla55[hora]='III';break;
						case 4:globals.tabla55[hora]='IV';break;
						default:globals.tabla55[hora]='';break;
						}
						globals.tabla55[2400]='----- Orejas'
						switch (resumen2_to_hojauti.val_esc_lateral_rodillas) {
						case 0:globals.tabla56[hora]='';break;
						case 1:globals.tabla56[hora]='I';break;
						case 2:globals.tabla56[hora]='II';break;
						case 3:globals.tabla56[hora]='III';break;
						case 4:globals.tabla56[hora]='IV';break;
						default:globals.tabla56[hora]='';break;
						}
						globals.tabla56[2400]='----- Rodillas'
						switch (resumen2_to_hojauti.val_esc_lateral_tobillo) {
						case 0:globals.tabla57[hora]='';break;
						case 1:globals.tabla57[hora]='I';break;
						case 2:globals.tabla57[hora]='II';break;
						case 3:globals.tabla57[hora]='III';break;
						case 4:globals.tabla57[hora]='IV';break;
						default:globals.tabla57[hora]='';break;
						}
						globals.tabla57[2400]='----- Tobillos'
						cargo_tabla=true
					}
				}
			}

			resumen_valoriz_to_hojauti_items.find()
			globals.vTipoOtrosEgresos='hemorragia'
			resumen_valoriz_to_hojauti_items.search()
			var tabla3=''
			var y=0	
			var concepto_aux
			var x = 1
			var z = 0
			var v = 0
			var w = 0
			if (resumen_valoriz_to_hojauti_items.getSize()>0){
				concepto_aux=''
				resumen_valoriz_to_hojauti_items.setSelectedIndex(x)
				
				while(x<=resumen_valoriz_to_hojauti_items.getSize()&&z<3){
					
					y=z+10
					tabla3 = 'tabla'+ y.toString().substr(0,2)
					concepto_aux=resumen_valoriz_to_hojauti_items.concepto
					globals[tabla3][2400]=concepto_aux
					while(x<=resumen_valoriz_to_hojauti_items.getSize()&&concepto_aux==resumen_valoriz_to_hojauti_items.concepto&&z<3){
						if(resumen_valoriz_to_hojauti_items.hora>500){
							globals[tabla3][utils.stringToNumber(resumen_valoriz_to_hojauti_items.hora)/100]='X'
							cargo_tabla=true
							++z
						}
						resumen_valoriz_to_hojauti_items.setSelectedIndex(++x)
					}
				}
				
			}else{
				for(v=0;v<3;v++){
					y=v+10
					tabla3 = 'tabla'+ y.toString().substr(0,2)
					for(w=0;w<=23;w++){
						globals[tabla3][w]=0
					}
					globals[tabla3][2400]=''
				}
			}
			resumen2_valoriz_to_hojauti_items.find()
			globals.vTipoOtrosEgresos='hemorragia'
			resumen2_valoriz_to_hojauti_items.search()
			tabla3=''
			y=0	
			concepto_aux=''
			x = 1
			z = 0
			v = 0
			w = 0
			if (resumen2_valoriz_to_hojauti_items.getSize()>0){
				concepto_aux=''
				resumen2_valoriz_to_hojauti_items.setSelectedIndex(x)
				
				while(x<=resumen2_valoriz_to_hojauti_items.getSize()&&z<2){
					
					y=z+13
					tabla3 = 'tabla'+ y.toString().substr(0,2)
					concepto_aux=resumen2_valoriz_to_hojauti_items.concepto
					globals[tabla3][2400]=concepto_aux
					while(x<=resumen2_valoriz_to_hojauti_items.getSize()&&concepto_aux==resumen2_valoriz_to_hojauti_items.concepto&&z<2){
						if(resumen2_valoriz_to_hojauti_items.hora<600){
							globals[tabla3][utils.stringToNumber(resumen2_valoriz_to_hojauti_items.hora)/100]='X'
							cargo_tabla=true
							++z
						}
						resumen2_valoriz_to_hojauti_items.setSelectedIndex(++x)
					}
				}
				
			}else{
				for(v=0;v<2;v++){
					y=v+13
					tabla3 = 'tabla'+ y.toString().substr(0,2)
					for(w=0;w<=23;w++){
						globals[tabla3][w]=0
					}
					globals[tabla3][2400]=''
				}
			}
			resumen_valoriz_to_hojauti_items.find()
			globals.vTipoOtrosEgresos='arritmia'
			resumen_valoriz_to_hojauti_items.search()
			globals.tabla58[2400]="- Otras Arritmias"
			tabla3=''
			y=0	
			if (resumen_valoriz_to_hojauti_items.getSize()>0){
				x = 1
				z = 0
				concepto_aux=''
				resumen_valoriz_to_hojauti_items.setSelectedIndex(x)
				
				while(x<=resumen_valoriz_to_hojauti_items.getSize()&&z<3){
					
					y=z+59
					tabla3 = 'tabla'+ y.toString().substr(0,2)
					concepto_aux=resumen_valoriz_to_hojauti_items.concepto
					globals[tabla3][2400]=concepto_aux
					while(x<=resumen_valoriz_to_hojauti_items.getSize()&&concepto_aux==resumen_valoriz_to_hojauti_items.concepto&&z<3){
						if(resumen_valoriz_to_hojauti_items.hora>500){
							globals[tabla3][utils.stringToNumber(resumen_valoriz_to_hojauti_items.hora)/100]='X'
							cargo_tabla=true
							++z
						}
						resumen_valoriz_to_hojauti_items.setSelectedIndex(++x)
					}
					
				}
				
			}else{
				for(v=0;v<3;v++){
					y=v+59
					tabla3 = 'tabla'+ y.toString().substr(0,2)
					for(w=0;w<=23;w++){
						globals[tabla3][w]=0
					}
					globals[tabla3][2400]=''
				}
			}
			resumen2_valoriz_to_hojauti_items.find()
			globals.vTipoOtrosEgresos='arritmia'
			resumen2_valoriz_to_hojauti_items.search()
			globals.tabla58[2400]="- Otras Arritmias"
			tabla3=''
			y=0	
			if (resumen2_valoriz_to_hojauti_items.getSize()>0){
				x = 1
				z = 0
				concepto_aux=''
				resumen2_valoriz_to_hojauti_items.setSelectedIndex(x)
				
				while(x<=resumen2_valoriz_to_hojauti_items.getSize()&&z<2){
					
					y=z+62
					tabla3 = 'tabla'+ y.toString().substr(0,2)
					concepto_aux=resumen2_valoriz_to_hojauti_items.concepto
					globals[tabla3][2400]=concepto_aux
					while(x<=resumen2_valoriz_to_hojauti_items.getSize()&&concepto_aux==resumen2_valoriz_to_hojauti_items.concepto&&z<2){
						if(resumen2_valoriz_to_hojauti_items.hora<600){
							globals[tabla3][utils.stringToNumber(resumen2_valoriz_to_hojauti_items.hora)/100]='X'
							cargo_tabla=true
							++z
						}
						resumen2_valoriz_to_hojauti_items.setSelectedIndex(++x)
					}
				}
				
			}else{
				for(v=0;v<5;v++){
					y=v+62
					tabla3 = 'tabla'+ y.toString().substr(0,2)
					for(w=0;w<=23;w++){
						globals[tabla3][w]=0
					}
					globals[tabla3][2400]=''
				}
			}
			resumen_valoriz_to_hojauti_items.find()
			globals.vTipoOtrosEgresos='heridas'
			resumen_valoriz_to_hojauti_items.search()
			globals.tabla64[2400]="- Heridas"
			tabla3=''
			y=0	
			if (resumen_valoriz_to_hojauti_items.getSize()>0){
				x = 1
				z = 0
				concepto_aux=''
				resumen_valoriz_to_hojauti_items.setSelectedIndex(x)
				
				while(x<=resumen_valoriz_to_hojauti_items.getSize()&&z<3){
					
					y=z+65
					tabla3 = 'tabla'+ y.toString().substr(0,2)
					concepto_aux=resumen_valoriz_to_hojauti_items.concepto
					globals[tabla3][2400]=concepto_aux
					while(x<=resumen_valoriz_to_hojauti_items.getSize()&&concepto_aux==resumen_valoriz_to_hojauti_items.concepto&&z<2){
						if(resumen_valoriz_to_hojauti_items.hora>500){
							globals[tabla3][utils.stringToNumber(resumen_valoriz_to_hojauti_items.hora)/100]=resumen_valoriz_to_hojauti_items.cantidad
						
							cargo_tabla=true
							++z
						}
						resumen_valoriz_to_hojauti_items.setSelectedIndex(++x)
					}
				}
			}else{
				for(v=0;v<3;v++){
					y=v+65
					tabla3 = 'tabla'+ y.toString().substr(0,2)
					for(w=0;w<=95;w++){
						globals[tabla3][indice_hora[w]]=0
					}
					globals[tabla3][2400]=''
				}
			}
			resumen2_valoriz_to_hojauti_items.find()
			globals.vTipoOtrosEgresos='heridas'
			resumen2_valoriz_to_hojauti_items.search()
			globals.tabla64[2400]="- Heridas"
			tabla3=''
			y=0	
			if (resumen2_valoriz_to_hojauti_items.getSize()>0){
				x = 1
				z = 0
				concepto_aux=''
				resumen2_valoriz_to_hojauti_items.setSelectedIndex(x)
				
				while(x<=resumen2_valoriz_to_hojauti_items.getSize()&&z<2){
					
					y=z+68
					tabla3 = 'tabla'+ y.toString().substr(0,2)
					concepto_aux=resumen2_valoriz_to_hojauti_items.concepto
					globals[tabla3][2400]=concepto_aux
					while(x<=resumen2_valoriz_to_hojauti_items.getSize()&&concepto_aux==resumen2_valoriz_to_hojauti_items.concepto&&z<2){
						if(resumen2_valoriz_to_hojauti_items.hora<600){
							globals[tabla3][utils.stringToNumber(resumen2_valoriz_to_hojauti_items.hora)/100]=resumen2_valoriz_to_hojauti_items.cantidad
							cargo_tabla=true
							++z
						}
						resumen2_valoriz_to_hojauti_items.setSelectedIndex(++x)
					}
					
				}
				
			}else{
				for(v=0;v<2;v++){
					y=v+68
					tabla3 = 'tabla'+ y.toString().substr(0,2)
					for(w=0;w<=95;w++){
						globals[tabla3][indice_hora[w]]=0
					}
					globals[tabla3][2400]=''
				}
			}
			resumen_valoriz_to_hojauti_items.find()
			globals.vTipoOtrosEgresos='otrosvalor'
			resumen_valoriz_to_hojauti_items.search()
			globals.tabla70[2400]="- Otras Valoraciones"
			tabla3=''
			y=0	
			if (resumen_valoriz_to_hojauti_items.getSize()>0){
				x = 1
				z = 0
				concepto_aux=''
				resumen_valoriz_to_hojauti_items.setSelectedIndex(x)
				
				while(x<=resumen_valoriz_to_hojauti_items.getSize()&&z<3){
					
					y=z+71
					tabla3 = 'tabla'+ y.toString().substr(0,2)
					concepto_aux=resumen_valoriz_to_hojauti_items.concepto
					globals[tabla3][2400]=concepto_aux
					while(x<=resumen_valoriz_to_hojauti_items.getSize()&&concepto_aux==resumen_valoriz_to_hojauti_items.concepto&&z<3){
						if(resumen_valoriz_to_hojauti_items.hora>500){
							globals[tabla3][utils.stringToNumber(resumen_valoriz_to_hojauti_items.hora)/100]=resumen_valoriz_to_hojauti_items.cantidad
							cargo_tabla=true
							++z
						}
						resumen_valoriz_to_hojauti_items.setSelectedIndex(++x)
					}				
				}
			}else{
				for(v=0;v<3;v++){
					y=v+71
					tabla3 = 'tabla'+ y.toString().substr(0,2)
					for(w=0;w<=95;w++){
						globals[tabla3][indice_hora[w]]=0
					}
					globals[tabla3][2400]=''
				}
			}
			resumen2_valoriz_to_hojauti_items.find()
			globals.vTipoOtrosEgresos='otrosvalor'
			resumen2_valoriz_to_hojauti_items.search()
			globals.tabla70[2400]="- Otras Valoraciones"
			tabla3=''
			y=0	
			if (resumen2_valoriz_to_hojauti_items.getSize()>0){
				x = 1
				z = 0
				concepto_aux=''
				resumen2_valoriz_to_hojauti_items.setSelectedIndex(x)
				
				while(x<=resumen2_valoriz_to_hojauti_items.getSize()&&z<2){
					
					y=z+74
					tabla3 = 'tabla'+ y.toString().substr(0,2)
					concepto_aux=resumen2_valoriz_to_hojauti_items.concepto
					globals[tabla3][2400]=concepto_aux
					while(x<=resumen2_valoriz_to_hojauti_items.getSize()&&concepto_aux==resumen2_valoriz_to_hojauti_items.concepto&&z<2){
						if(resumen2_valoriz_to_hojauti_items.hora<600){
							globals[tabla3][utils.stringToNumber(resumen2_valoriz_to_hojauti_items.hora)/100]=resumen2_valoriz_to_hojauti_items.cantidad
						
							cargo_tabla=true
							++z
						}
						resumen2_valoriz_to_hojauti_items.setSelectedIndex(++x)
					}
					
				}
				
			}else{
				for(v=0;v<2;v++){
					y=v+74
					tabla3 = 'tabla'+ y.toString().substr(0,2)
					for(w=0;w<=95;w++){
						globals[tabla3][indice_hora[w]]=0
					}
					globals[tabla3][2400]=''
				}
			}
			var tabla='';
			var tabla2='';
		

		for(var j=1;j<=77;j++){
			if (j>9){
				tabla = 'tabla'+ j.toString().substr(0,2)
			}else{
		    	tabla = 'tabla'+ j.toString().substr(0,1)
			}
			if(globals[tabla][2400]!=''){
			vs_to_hojauti_resumen_rcv.newRecord()
			vs_to_hojauti_resumen_rcv.hiscli=globals.vHiscli
			vs_to_hojauti_resumen_rcv.tipo_opera=globals.vTipoOperador
			vs_to_hojauti_resumen_rcv.nro_operador=globals.vLegajo
			vs_to_hojauti_resumen_rcv.fecha=globals.vFecha
			vs_to_hojauti_resumen_rcv.item=4
			vs_to_hojauti_resumen_rcv.subitems=j
			
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
		}
		databaseManager.saveData(vs_to_hojauti_resumen_rcv)
	}
	globals.items=4

}
