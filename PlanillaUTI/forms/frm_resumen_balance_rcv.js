
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"F53118BB-30CF-4260-ADE2-D8AF75B0A59E"}
 */
function onAction_btn_6(event) {
	globals.vRangoHorario=1
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
	hora_tbl[16]='hora1000'
	hora_tbl[17]='hora1015'
	hora_tbl[18]='hora1030'
	hora_tbl[19]='hora1045'
	hora_tbl[20]='hora1100'
	hora_tbl[21]='hora1115'
	hora_tbl[22]='hora1130'
	hora_tbl[23]='hora1145'
	hora_tbl[24]='hora1200'
	hora_tbl[25]='hora1215'
	hora_tbl[26]='hora1230'
	hora_tbl[27]='hora1245'
	hora_tbl[28]='hora1300'
	hora_tbl[29]='hora1315'
	hora_tbl[30]='hora1330'
	hora_tbl[31]='hora1345'	
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
	hora_as[16]='10:00'
	hora_as[17]='10:15'
	hora_as[18]='10:30'
	hora_as[19]='10:45'
	hora_as[20]='11:00'
	hora_as[21]='11:15'
	hora_as[22]='11:30'
	hora_as[23]='11:45'
	hora_as[24]='12:00'
	hora_as[25]='12:15'
	hora_as[26]='12:30'
	hora_as[27]='12:45'
	hora_as[28]='13:00'
	hora_as[29]='13:15'
	hora_as[30]='13:30'
	hora_as[31]='13:45'	
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
		              + hora_tbl[15] + ' as "' + hora_as[15] +'", '
		              + hora_tbl[16] + ' as "' + hora_as[16] +'", '
		              + hora_tbl[17] + ' as "' + hora_as[17] +'", '
		              + hora_tbl[18] + ' as "' + hora_as[18] +'", '
		              + hora_tbl[19] + ' as "' + hora_as[19] +'", '
		              + hora_tbl[20] + ' as "' + hora_as[20] +'", '
		              + hora_tbl[21] + ' as "' + hora_as[21] +'", '
		              + hora_tbl[22] + ' as "' + hora_as[22] +'", '
		              + hora_tbl[23] + ' as "' + hora_as[23] +'", '
		              + hora_tbl[24] + ' as "' + hora_as[24] +'", '
		              + hora_tbl[25] + ' as "' + hora_as[25] +'", '
		              + hora_tbl[26] + ' as "' + hora_as[26] +'", '
		              + hora_tbl[27] + ' as "' + hora_as[27] +'", '
		              + hora_tbl[28] + ' as "' + hora_as[28] +'", '
		              + hora_tbl[29] + ' as "' + hora_as[29] +'", '
		              + hora_tbl[30] + ' as "' + hora_as[30] +'", '
		              + hora_tbl[31] + ' as "' + hora_as[31] +'", '
		              + 'turno6 as "Total 6 a 13 Hs", '
					  + 'total24 as "Total 24Hs" '
		              + 'from hojauti_resumen_rcv where hiscli = '
		              + globals.vHiscli + ' and item = 1'
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
 * @properties={typeid:24,uuid:"266E886A-42AE-463E-9618-FAA8D90F136B"}
 * @AllowToRunInFind
 */
function resumen_balance_rcv_new() {
	globals.limpiaTablas()
	globals.tabla16[600]=0
	globals.tabla35[600]=0
	globals.tabla36[600]=0
	globals.limpiaTablas()
	globals.tabla16[6]=0
	globals.tabla33[6]=0
	globals.tabla34[6]=0
	var hora_aux=0
	var final_mes = new Array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);
	globals.vFechaSiguiente=globals.vFecha
	if (globals.vFechaSiguiente==null){
		globals.vFechaSiguiente=application.getServerTimeStamp()
	}
	var resto = globals.vFechaSiguiente.getFullYear() % 4;
	if (resto == 0) final_mes[1] = 29;
	if (final_mes[globals.vFechaSiguiente.getMonth()]==globals.vFechaSiguiente.getDate()){
		if(globals.vFechaSiguiente.getMonth()==11){
			globals.vFechaSiguiente=globals.vFechaSiguiente.setDate(1)
			globals.vFechaSiguiente=globals.vFechaSiguiente.setMonth(0)
			globals.vFechaSiguiente=globals.vFechaSiguiente.setFullYear(globals.vFechaSiguiente.getFullYear()+1)
		}else{
			globals.vFechaSiguiente=globals.vFechaSiguiente.setDate(1)
			globals.vFechaSiguiente=globals.vFechaSiguiente.setMonth(globals.vFechaSiguiente.getMonth()+1)
		}
	}else{
		globals.vFechaSiguiente=globals.vFechaSiguiente.setDate(globals.vFechaSiguiente.getDate()+1)
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
	
	var indice_acum=new Array()
	indice_acum[0]=1
	indice_acum[1]=0  
	indice_acum[2]=2 
	indice_acum[3]=3 
	indice_acum[4]=0
	indice_acum[5]=5  
	indice_acum[6]=0
	indice_acum[7]=7  
	indice_acum[8]=0
	indice_acum[9]=9
	indice_acum[10]=0
	indice_acum[11]=11
	indice_acum[12]=0
	indice_acum[13]=13
	indice_acum[14]=0
	indice_acum[15]=15
	indice_acum[16]=0
	indice_acum[17]=17
	indice_acum[18]=0
	indice_acum[19]=19
	indice_acum[20]=20
	indice_acum[21]=21
	indice_acum[22]=22
	indice_acum[23]=23
	indice_acum[24]=24
	indice_acum[25]=25
	indice_acum[26]=26
	indice_acum[27]=27
	indice_acum[28]=28
	indice_acum[29]=29
	indice_acum[30]=30
	indice_acum[31]=31
	indice_acum[32]=32
	indice_acum[33]=33
	indice_acum[34]=34
	indice_acum[35]=35
	indice_acum[36]=36
	indice_acum[37]=37
	indice_acum[38]=38
	indice_acum[39]=39
	indice_acum[40]=0
	indice_acum[41]=0
	indice_acum[42]=0
	indice_acum[43]=0
	indice_acum[44]=44
	indice_acum[45]=0
	indice_acum[46]=46
	indice_acum[47]=0
	indice_acum[48]=48
	indice_acum[49]=0
	indice_acum[50]=50
	indice_acum[51]=0
	indice_acum[52]=52
	indice_acum[53]=53
	indice_acum[54]=54
	indice_acum[55]=55
	indice_acum[56]=56
	indice_acum[57]=57
	indice_acum[58]=58
	indice_acum[59]=59
	indice_acum[60]=60
	indice_acum[61]=61
	indice_acum[62]=62
	indice_acum[63]=63
	indice_acum[64]=64
	indice_acum[65]=65
	indice_acum[66]=66
	indice_acum[67]=67
	indice_acum[68]=68
	indice_acum[69]=69
	indice_acum[70]=70
	indice_acum[71]=71
	indice_acum[72]=72
	indice_acum[73]=0
	indice_acum[74]=74
	indice_acum[75]=75
	indice_acum[76]=0
	indice_acum[77]=0
	indice_acum[78]=0
			
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
	
	otros_ingreso_resumen_to_hojauti_items.find()
	globals.vTipoOtrosIngresos='otrosing'
	otros_ingreso_resumen_to_hojauti_items.search()
	var tabla3=''
	var y=0	
	var w=0
	var x = 1
	var z = 0
	var concepto_aux
	if (otros_ingreso_resumen_to_hojauti_items.getSize()>0){
		concepto_aux=''
		otros_ingreso_resumen_to_hojauti_items.setSelectedIndex(x)
		
		while(x<=otros_ingreso_resumen_to_hojauti_items.getSize()&&z<10){
			y=z+20
			tabla3 = 'tabla'+ y.toString().substr(0,2)
			concepto_aux=otros_ingreso_resumen_to_hojauti_items.concepto
			globals[tabla3][2400]=concepto_aux
			while(x<=otros_ingreso_resumen_to_hojauti_items.getSize()&&concepto_aux==otros_ingreso_resumen_to_hojauti_items.concepto&&z<10){
				if(otros_ingreso_resumen_to_hojauti_items.hora>500){
					globals[tabla3][utils.stringToNumber(otros_ingreso_resumen_to_hojauti_items.hora)]=utils.numberFormat((utils.stringToNumber(otros_ingreso_resumen_to_hojauti_items.cantidad)),"######")
					hora_aux=otros_ingreso_resumen_to_hojauti_items.hora
					if (hora_aux>=600&&hora_aux<1400){
						globals[tabla3][2500]=utils.numberFormat((utils.stringToNumber(globals[tabla3][2500])+utils.stringToNumber(globals[tabla3][utils.stringToNumber(otros_ingreso_resumen_to_hojauti_items.hora)])),"######")
					}else{
						if(hora_aux>=1400&&hora_aux<2200){
							globals[tabla3][2600]=utils.numberFormat((utils.stringToNumber(globals[tabla3][2600])+utils.stringToNumber(globals[tabla3][utils.stringToNumber(otros_ingreso_resumen_to_hojauti_items.hora)])),"######")
						}else{
							if((hora_aux>=2200&&hora_aux<2400)||(hora_aux>=0&&hora_aux<600)){
								globals[tabla3][2700]=utils.numberFormat((utils.stringToNumber(globals[tabla3][2700])+utils.stringToNumber(globals[tabla3][utils.stringToNumber(otros_ingreso_resumen_to_hojauti_items.hora)])),"######")
							}
						}
					}
					globals[tabla3][2800]=utils.numberFormat((utils.stringToNumber(globals[tabla3][2500])+utils.stringToNumber(globals[tabla3][2600])+utils.stringToNumber(globals[tabla3][2700])),"######")
					++z	
				}
				otros_ingreso_resumen_to_hojauti_items.setSelectedIndex(++x)
			}
		}
	}else{
		for(var v=0;v<10;v++){
			y=v+20
			tabla3 = 'tabla'+ y.toString().substr(0,2)
			for(w=0;w<=2399;w++){
				globals[tabla3][w]=0
			}
			globals[tabla3][2400]=''
		}
	}
	tabla3=''
	y=0	
	w=0
	x = 1
	z = 0
	otros_ingreso_resumen2_to_hojauti_items.find()
	globals.vTipoOtrosIngresos='otrosing'
	otros_ingreso_resumen2_to_hojauti_items.search()
	if (otros_ingreso_resumen2_to_hojauti_items.getSize()>0){
		concepto_aux=''
		otros_ingreso_resumen2_to_hojauti_items.setSelectedIndex(x)
		
		while(x<=otros_ingreso_resumen2_to_hojauti_items.getSize()&&z<10){
			y=z+30
			tabla3 = 'tabla'+ y.toString().substr(0,2)
			concepto_aux=otros_ingreso_resumen2_to_hojauti_items.concepto
			globals[tabla3][2400]=concepto_aux
			while(x<=otros_ingreso_resumen2_to_hojauti_items.getSize()&&concepto_aux==otros_ingreso_resumen2_to_hojauti_items.concepto&&z<10){
				if(otros_ingreso_resumen2_to_hojauti_items.hora<600||otros_ingreso_resumen2_to_hojauti_items.hora>=2200){
					globals[tabla3][utils.stringToNumber(otros_ingreso_resumen2_to_hojauti_items.hora)]=utils.numberFormat((utils.stringToNumber(otros_ingreso_resumen2_to_hojauti_items.cantidad)),"######")
					hora_aux=otros_ingreso_resumen2_to_hojauti_items.hora
					if (hora_aux>=600&&hora_aux<1400){
						globals[tabla3][2500]=utils.numberFormat((utils.stringToNumber(globals[tabla3][2500])+utils.stringToNumber(globals[tabla3][utils.stringToNumber(otros_ingreso_resumen2_to_hojauti_items.hora)])),"######")
					}else{
						if(hora_aux>=1400&&hora_aux<2200){
							globals[tabla3][2600]=utils.numberFormat((utils.stringToNumber(globals[tabla3][2600])+utils.stringToNumber(globals[tabla3][utils.stringToNumber(otros_ingreso_resumen2_to_hojauti_items.hora)])),"######")
						}else{
							if((hora_aux>=2200&&hora_aux<2400)||(hora_aux>=0&&hora_aux<600)){
								globals[tabla3][2700]=utils.numberFormat((utils.stringToNumber(globals[tabla3][2700])+utils.stringToNumber(globals[tabla3][utils.stringToNumber(otros_ingreso_resumen2_to_hojauti_items.hora)])),"######")
							}
						}
					}
					globals[tabla3][2800]=utils.numberFormat((utils.stringToNumber(globals[tabla3][2500])+utils.stringToNumber(globals[tabla3][2600])+utils.stringToNumber(globals[tabla3][2700])),"######")
					++z
				}
				otros_ingreso_resumen2_to_hojauti_items.setSelectedIndex(++x)
			}
			
		}
	}else{
		for(var u=0;u<10;u++){
			y=u+30
			tabla3 = 'tabla'+ y.toString().substr(0,2)
			for(w=0;w<=2399;w++){
				globals[tabla3][w]=0
			}
			globals[tabla3][2400]=''
		}
	}
	
	var tabla4=''
	var p=0	
	var n = 1
	var m = 0
	otros_egresos_resumen_to_hojauti_items.find()
	globals.vTipoOtrosEgresos='otrosegr'
	otros_egresos_resumen_to_hojauti_items.search()
	if (otros_egresos_resumen_to_hojauti_items.getSize()>0){
		concepto_aux=''
		otros_egresos_resumen_to_hojauti_items.setSelectedIndex(n)
		
		while(n<=otros_egresos_resumen_to_hojauti_items.getSize()&&m<10){
			p=m+53
			tabla4 = 'tabla'+ p.toString().substr(0,2)
			concepto_aux=otros_egresos_resumen_to_hojauti_items.concepto
			globals[tabla4][2400]=concepto_aux
			
			while(n<=otros_egresos_resumen_to_hojauti_items.getSize()&&concepto_aux==otros_egresos_resumen_to_hojauti_items.concepto&&m<10){
				if(otros_egresos_resumen_to_hojauti_items.hora>500){
					globals[tabla4][utils.stringToNumber(otros_egresos_resumen_to_hojauti_items.hora)]=utils.numberFormat((utils.stringToNumber(otros_egresos_resumen_to_hojauti_items.cantidad)),"#####")
					hora_aux=otros_egresos_resumen_to_hojauti_items.hora
					if (hora_aux>=600&&hora_aux<1400){
						globals[tabla4][2500]=utils.numberFormat((utils.stringToNumber(globals[tabla4][2500])+utils.stringToNumber(globals[tabla4][utils.stringToNumber(otros_egresos_resumen_to_hojauti_items.hora)])),"######")
					}else{
						if(hora_aux>=1400&&hora_aux<2200){
							globals[tabla4][2600]=utils.numberFormat((utils.stringToNumber(globals[tabla4][2600])+utils.stringToNumber(globals[tabla4][utils.stringToNumber(otros_egresos_resumen_to_hojauti_items.hora)])),"######")
						}else{
							if((hora_aux>=2200&&hora_aux<2400)||(hora_aux>=0&&hora_aux<600)){
								globals[tabla4][2700]=utils.numberFormat((utils.stringToNumber(globals[tabla4][2700])+utils.stringToNumber(globals[tabla4][utils.stringToNumber(otros_egresos_resumen_to_hojauti_items.hora)])),"######")
							}
						}
					}
					globals[tabla4][2800]=utils.numberFormat((utils.stringToNumber(globals[tabla4][2500])+utils.stringToNumber(globals[tabla4][2600])+utils.stringToNumber(globals[tabla4][2700])),"######")
					++m
				}
				otros_egresos_resumen_to_hojauti_items.setSelectedIndex(++n)
			}
		}
	}else{
		for(var t=0;t<10;t++){
			p=t+53
			tabla4 = 'tabla'+ p.toString().substr(0,2)
			for(w=0;w<=2399;w++){
					globals[tabla4][w]=0
			}
			globals[tabla4][2400]=''
		}
	}	
	tabla4=''
	p=0	
	n = 1
	m = 0
	otros_egresos_resumen2_to_hojauti_items.find()
	globals.vTipoOtrosEgresos='otrosegr'
	otros_egresos_resumen2_to_hojauti_items.search()
	if (otros_egresos_resumen2_to_hojauti_items.getSize()>0){
		concepto_aux=''
		otros_egresos_resumen2_to_hojauti_items.setSelectedIndex(n)
		
		while(n<=otros_egresos_resumen2_to_hojauti_items.getSize()&&m<5){
			
			p=m+63
			tabla4 = 'tabla'+ p.toString().substr(0,2)
			concepto_aux=otros_egresos_resumen2_to_hojauti_items.concepto
			globals[tabla4][2400]=concepto_aux
			
			while(n<=otros_egresos_resumen2_to_hojauti_items.getSize()&&concepto_aux==otros_egresos_resumen2_to_hojauti_items.concepto&&m<10){
				if(otros_egresos_resumen2_to_hojauti_items.hora<600||otros_egresos_resumen2_to_hojauti_items.hora>=2200){
					globals[tabla4][utils.stringToNumber(otros_egresos_resumen2_to_hojauti_items.hora)]=utils.numberFormat((utils.stringToNumber(otros_egresos_resumen2_to_hojauti_items.cantidad)),"#####")
					hora_aux=otros_egresos_resumen2_to_hojauti_items.hora
					if (hora_aux>=600&&hora_aux<1400){
						globals[tabla4][2500]=utils.numberFormat((utils.stringToNumber(globals[tabla4][2500])+utils.stringToNumber(globals[tabla4][utils.stringToNumber(otros_egresos_resumen2_to_hojauti_items.hora)])),"######")
					}else{
						if(hora_aux>=1400&&hora_aux<2200){
							globals[tabla4][2600]=utils.numberFormat((utils.stringToNumber(globals[tabla4][2600])+utils.stringToNumber(globals[tabla4][utils.stringToNumber(otros_egresos_resumen2_to_hojauti_items.hora)])),"######")
						}else{
							if((hora_aux>=2200&&hora_aux<2400)||(hora_aux>=0&&hora_aux<600)){
								globals[tabla4][2700]=utils.numberFormat((utils.stringToNumber(globals[tabla4][2700])+utils.stringToNumber(globals[tabla4][utils.stringToNumber(otros_egresos_resumen2_to_hojauti_items.hora)])),"######")
							}
						}
					}
					globals[tabla4][2800]=utils.numberFormat((utils.stringToNumber(globals[tabla4][2500])+utils.stringToNumber(globals[tabla4][2600])+utils.stringToNumber(globals[tabla4][2700])),"######")
					++m
				}
				otros_egresos_resumen2_to_hojauti_items.setSelectedIndex(++n)
			}
		}
	}
	/*
	globals.tabla0[2346]= '  Concepto   ';
	globals.tabla0[600]='6:00'
	globals.tabla0[615]='6:15'
	globals.tabla0[630]='6:30'
	globals.tabla0[645]='6:45'
	globals.tabla0[700]='7:00'
	globals.tabla0[715]='7:15'
	globals.tabla0[730]='7:30'
	globals.tabla0[745]='7:45'
	globals.tabla0[800]='8:00'
	globals.tabla0[815]='8:15'
	globals.tabla0[830]='8:30'
	globals.tabla0[845]='8:45'
	globals.tabla0[900]='9:00'
	globals.tabla0[915]='9:15'
	globals.tabla0[930]='9:30'
	globals.tabla0[945]='9:45'
	globals.tabla0[0]='0:00'
	globals.tabla0[15]='0:15'
	globals.tabla0[30]='0:30'
	globals.tabla0[45]='0:45'
	globals.tabla0[100]='1:00'
	globals.tabla0[115]='1:15'
	globals.tabla0[130]='1:30'
	globals.tabla0[145]='1:45'
	globals.tabla0[200]='2:00'
	globals.tabla0[215]='2:15'
	globals.tabla0[230]='2:30'
	globals.tabla0[245]='2:45'
	globals.tabla0[300]='3:00'
	globals.tabla0[315]='3:15'
	globals.tabla0[330]='3:30'
	globals.tabla0[345]='3:45'
	globals.tabla0[400]='4:00'
	globals.tabla0[415]='4:15'
	globals.tabla0[430]='4:30'
	globals.tabla0[445]='4:45'
	globals.tabla0[500]='5:00'
	globals.tabla0[515]='5:15'
	globals.tabla0[530]='5:30'
	globals.tabla0[545]='5:45'
	globals.tabla0[1000]='10:00'
	globals.tabla0[1015]='10:15'
	globals.tabla0[1030]='10:30'
	globals.tabla0[1045]='10:45'
	globals.tabla0[1100]='11:00'
	globals.tabla0[1115]='11:15'
	globals.tabla0[1130]='11:30'
	globals.tabla0[1145]='11:45'
	globals.tabla0[1200]='12:00'
	globals.tabla0[1215]='12:15'
	globals.tabla0[1230]='12:30'
	globals.tabla0[1245]='12:45'
	globals.tabla0[1300]='13:00'
	globals.tabla0[1315]='13:15'
	globals.tabla0[1330]='13:30'
	globals.tabla0[1345]='13:45'
	globals.tabla0[1400]='14:00'
	globals.tabla0[1415]='14:15'
	globals.tabla0[1430]='14:30'
	globals.tabla0[1445]='14:45'
	globals.tabla0[1500]='15:00'
	globals.tabla0[1515]='15:15'
	globals.tabla0[1530]='15:30'
	globals.tabla0[1545]='15:45'
	globals.tabla0[1600]='16:00'
	globals.tabla0[1615]='16:15'
	globals.tabla0[1630]='16:30'
	globals.tabla0[1645]='16:45'
	globals.tabla0[1700]='17:00'
	globals.tabla0[1715]='17:15'
	globals.tabla0[1730]='17:30'
	globals.tabla0[1745]='17:45'
	globals.tabla0[1800]='18:00'
	globals.tabla0[1815]='18:15'
	globals.tabla0[1830]='18:30'
	globals.tabla0[1845]='18:45'
	globals.tabla0[1900]='19:00'
	globals.tabla0[1915]='19:15'
	globals.tabla0[1930]='19:30'
	globals.tabla0[1945]='19:45'
	globals.tabla0[2000]='20:00'
	globals.tabla0[2015]='20:15'
	globals.tabla0[2030]='20:30'
	globals.tabla0[2045]='20:45'
	globals.tabla0[2100]='21:00'
	globals.tabla0[2115]='21:15'
	globals.tabla0[2130]='21:30'
	globals.tabla0[2145]='21:45'
	globals.tabla0[2200]='22:00'
	globals.tabla0[2215]='22:15'
	globals.tabla0[2230]='22:30'
	globals.tabla0[2245]='22:45'
	globals.tabla0[2300]='23:00'
	globals.tabla0[2315]='23:15'
	globals.tabla0[2330]='23:30'
	globals.tabla0[2345]='23:45'
	*/
	globals.tabla42[2400]='  Concepto   ';
	globals.tabla42[600]='6:00'
	globals.tabla42[615]='6:15'
	globals.tabla42[630]='6:30'
	globals.tabla42[645]='6:45'
	globals.tabla42[700]='7:00'
	globals.tabla42[715]='7:15'
	globals.tabla42[730]='7:30'
	globals.tabla42[745]='7:45'
	globals.tabla42[800]='8:00'
	globals.tabla42[815]='8:15'
	globals.tabla42[830]='8:30'
	globals.tabla42[845]='8:45'
	globals.tabla42[900]='9:00'
	globals.tabla42[915]='9:15'
	globals.tabla42[930]='9:30'
	globals.tabla42[945]='9:45'
	globals.tabla42[0]='0:00'
	globals.tabla42[15]='0:15'
	globals.tabla42[30]='0:30'
	globals.tabla42[45]='0:45'
	globals.tabla42[100]='1:00'
	globals.tabla42[115]='1:15'
	globals.tabla42[130]='1:30'
	globals.tabla42[145]='1:45'
	globals.tabla42[200]='2:00'
	globals.tabla42[215]='2:15'
	globals.tabla42[230]='2:30'
	globals.tabla42[245]='2:45'
	globals.tabla42[300]='3:00'
	globals.tabla42[315]='3:15'
	globals.tabla42[330]='3:30'
	globals.tabla42[345]='3:45'
	globals.tabla42[400]='4:00'
	globals.tabla42[415]='4:15'
	globals.tabla42[430]='4:30'
	globals.tabla42[445]='4:45'
	globals.tabla42[500]='5:00'
	globals.tabla42[515]='5:15'
	globals.tabla42[530]='5:30'
	globals.tabla42[545]='5:45'
	globals.tabla42[1000]='10:00'
	globals.tabla42[1015]='10:15'
	globals.tabla42[1030]='10:30'
	globals.tabla42[1045]='10:45'
	globals.tabla42[1100]='11:00'
	globals.tabla42[1115]='11:15'
	globals.tabla42[1130]='11:30'
	globals.tabla42[1145]='11:45'
	globals.tabla42[1200]='12:00'
	globals.tabla42[1215]='12:15'
	globals.tabla42[1230]='12:30'
	globals.tabla42[1245]='12:45'
	globals.tabla42[1300]='13:00'
	globals.tabla42[1315]='13:15'
	globals.tabla42[1330]='13:30'
	globals.tabla42[1345]='13:45'
	globals.tabla42[1400]='14:00'
	globals.tabla42[1415]='14:15'
	globals.tabla42[1430]='14:30'
	globals.tabla42[1445]='14:45'
	globals.tabla42[1500]='15:00'
	globals.tabla42[1515]='15:15'
	globals.tabla42[1530]='15:30'
	globals.tabla42[1545]='15:45'
	globals.tabla42[1600]='16:00'
	globals.tabla42[1615]='16:15'
	globals.tabla42[1630]='16:30'
	globals.tabla42[1645]='16:45'
	globals.tabla42[1700]='17:00'
	globals.tabla42[1715]='17:15'
	globals.tabla42[1730]='17:30'
	globals.tabla42[1745]='17:45'
	globals.tabla42[1800]='18:00'
	globals.tabla42[1815]='18:15'
	globals.tabla42[1830]='18:30'
	globals.tabla42[1845]='18:45'
	globals.tabla42[1900]='19:00'
	globals.tabla42[1915]='19:15'
	globals.tabla42[1930]='19:30'
	globals.tabla42[1945]='19:45'
	globals.tabla42[2000]='20:00'
	globals.tabla42[2015]='20:15'
	globals.tabla42[2030]='20:30'
	globals.tabla42[2045]='20:45'
	globals.tabla42[2100]='21:00'
	globals.tabla42[2115]='21:15'
	globals.tabla42[2130]='21:30'
	globals.tabla42[2145]='21:45'
	globals.tabla42[2200]='22:00'
	globals.tabla42[2215]='22:15'
	globals.tabla42[2230]='22:30'
	globals.tabla42[2245]='22:45'
	globals.tabla42[2300]='23:00'
	globals.tabla42[2315]='23:15'
	globals.tabla42[2330]='23:30'
	globals.tabla42[2345]='23:45'
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
				
				switch (resumen_to_hojauti.bal_ing_hidrata_tipo) {
					case 1:globals.tabla1[hora]='V.Oral';break;
					case 2:globals.tabla1[hora]='V.Parent.';break;
					case 3:globals.tabla1[hora]='V.Enteral.';break;
					case 0:globals.tabla1[hora]='Ninguna';break;
					default:globals.tabla1[hora]='';break;
				}
				globals.tabla1[2400]='Hidratacion Tipo ' 
				if(resumen_to_hojauti.bal_ing_hidrata_cant!=null){
					if(hora>600){
						globals.tabla2[hora]=globals.tabla2[hora-1]+resumen_to_hojauti.bal_ing_hidrata_cant
					}else{
						globals.tabla2[hora]=resumen_to_hojauti.bal_ing_hidrata_cant
					}
				}else{
					globals.tabla2[hora]=0
				}	
				globals.tabla2[2400]='Hidratacion Cant. '
				if(resumen_to_hojauti.bal_ing_dilucion!=null){
					globals.tabla3[hora]=resumen_to_hojauti.bal_ing_dilucion
				}else{
					globals.tabla3[hora]=0
				}
				
				globals.tabla3[2400]='Dilución          '
				switch (resumen_to_hojauti.bal_ing_expansion_tipo) {
					case 1:globals.tabla4[hora]='Sol.Fisio';break;
					case 2:globals.tabla4[hora]='Ringer L.';break;
					case 3:globals.tabla4[hora]='Voluven';break;
					case 4:globals.tabla4[hora]='Haemaccel';break;
					case 5:globals.tabla4[hora]='Albumina';break;
					case 0:globals.tabla4[hora]='Ninguna';break;
					default:globals.tabla4[hora]='';break;
				}	
				globals.tabla4[2400]='Expansión Tipo    '
				if(resumen_to_hojauti.bal_ing_expansion_cant!=null){
					globals.tabla5[hora]=resumen_to_hojauti.bal_ing_expansion_cant
				}else{
					globals.tabla5[hora]=0
				}
				globals.tabla5[2400]='Expansión Cant.   '
				switch (resumen_to_hojauti.bal_ing_sangre_tipo) {
					case 1:globals.tabla6[hora]='Glob.Rojo';break;
					case 2:globals.tabla6[hora]='Plasma';break;
					case 3:globals.tabla6[hora]='Plaquetas';break;
					case 0:globals.tabla6[hora]='Ninguno';break;
				}		
				globals.tabla6[2400]='Sangre Tipo       '
				if(resumen_to_hojauti.bal_ing_sangre_cant!=null){
					globals.tabla7[hora]=resumen_to_hojauti.bal_ing_sangre_cant
				}else{
					globals.tabla7[hora]=0
				}
				globals.tabla7[2400]='Sangre Cant.      '
				switch (resumen_to_hojauti.bal_ing_alimen_tipo) {
					case 1:globals.tabla8[hora]='Enteral';break;
					case 2:globals.tabla8[hora]='Parenteral';break;
					case 3:globals.tabla8[hora]='Oral';break;
					case 0:globals.tabla8[hora]='Ninguno';break;
				}			
				globals.tabla8[2400]='Alimentación Tipo '
				if(resumen_to_hojauti.bal_ing_alimen_cant!=null){
					globals.tabla9[hora]=resumen_to_hojauti.bal_ing_alimen_cant
				}else{
					globals.tabla9[hora]=0
				}
				globals.tabla9[2400]='Alimentación Cant.'
				switch (resumen_to_hojauti.bal_ing_bic_1_tipo) {
				case 1:globals.tabla10[hora]='NTG      ';break;
				case 2:globals.tabla10[hora]='Fioritina';break;
				case 3:globals.tabla10[hora]='Milrinona';break;
				case 4:globals.tabla10[hora]='Ipsilon  ';break;
				case 5:globals.tabla10[hora]='Analgesia';break;
				case 6:globals.tabla10[hora]='Dobutamina';break;
				case 7:globals.tabla10[hora]='Dopamina  ';break;
				case 8:globals.tabla10[hora]='NPS       ';break;
				case 9:globals.tabla10[hora]='Biascor   ';break;
				case 10:globals.tabla10[hora]='Fentanilo ';break;
				case 11:globals.tabla10[hora]='Tiopenthal';break;
				case 12:globals.tabla10[hora]='Propofol  ';break;
				case 13:globals.tabla10[hora]='Midazolam ';break;
				case 14:globals.tabla10[hora]='Sedo-Analgesia';break;
				case 15:globals.tabla10[hora]='Fentanilo ';break;
				case 16:globals.tabla10[hora]='Lasix     ';break;
				case 17:globals.tabla10[hora]='Amiodarona ';break;
				case 0:globals.tabla10[hora]='Ninguna';break;
			}	
			globals.tabla10[2400]='BIC-1   Tipo      '	
			if(resumen_to_hojauti.bal_ing_bic_1_cant!=null){
				globals.tabla11[hora]=resumen_to_hojauti.bal_ing_bic_1_cant
			}else{
				globals.tabla11[hora]=0
			}
			globals.tabla11[2400]='BIC-1   Cant.     '
			switch (resumen_to_hojauti.bal_ing_bic_2_tipo) {
				case 1:globals.tabla12[hora]='NTG      ';break;
				case 2:globals.tabla12[hora]='Fioritina';break;
				case 3:globals.tabla12[hora]='Milrinona';break;
				case 4:globals.tabla12[hora]='Ipsilon  ';break;
				case 5:globals.tabla12[hora]='Analgesia';break;
				case 6:globals.tabla12[hora]='Dobutamina';break;
				case 7:globals.tabla12[hora]='Dopamina  ';break;
				case 8:globals.tabla12[hora]='NPS       ';break;
				case 9:globals.tabla12[hora]='Biascor   ';break;
				case 10:globals.tabla12[hora]='Fentanilo ';break;
				case 11:globals.tabla12[hora]='Tiopenthal';break;
				case 12:globals.tabla12[hora]='Propofol  ';break;
				case 13:globals.tabla12[hora]='Midazolam ';break;
				case 14:globals.tabla12[hora]='Sedo-Analgesia';break;
				case 15:globals.tabla12[hora]='Fentanilo ';break;
				case 16:globals.tabla12[hora]='Lasix     ';break;
				case 17:globals.tabla12[hora]='Amiodarona ';break;
				case 0:globals.tabla12[hora]='Ninguna';break;
			}	
			globals.tabla12[2400]='BIC-2   Tipo      '
			if(resumen_to_hojauti.bal_ing_bic_2_cant!=null){
				globals.tabla13[hora]=resumen_to_hojauti.bal_ing_bic_2_cant
			}else{
				globals.tabla13[hora]=0
			}
			globals.tabla13[2400]='BIC-2   Cant.     '
			switch (resumen_to_hojauti.bal_ing_bic_3_tipo) {
				case 1:globals.tabla14[hora]='NTG      ';break;
				case 2:globals.tabla14[hora]='Fioritina';break;
				case 3:globals.tabla14[hora]='Milrinona';break;
				case 4:globals.tabla14[hora]='Ipsilon  ';break;
				case 5:globals.tabla14[hora]='Analgesia';break;
				case 6:globals.tabla14[hora]='Dobutamina';break;
				case 7:globals.tabla14[hora]='Dopamina  ';break;
				case 8:globals.tabla14[hora]='NPS       ';break;
				case 9:globals.tabla14[hora]='Biascor   ';break;
				case 10:globals.tabla14[hora]='Fentanilo ';break;
				case 11:globals.tabla14[hora]='Tiopenthal';break;
				case 12:globals.tabla14[hora]='Propofol  ';break;
				case 13:globals.tabla14[hora]='Midazolam ';break;
				case 14:globals.tabla14[hora]='Sedo-Analgesia';break;
				case 15:globals.tabla14[hora]='Fentanilo ';break;
				case 16:globals.tabla14[hora]='Lasix     ';break;
				case 17:globals.tabla14[hora]='Amiodarona ';break;
				case 0:globals.tabla14[hora]='Ninguna';break;
			}	
			globals.tabla14[2400]='BIC-3   Tipo      '	
			if(resumen_to_hojauti.bal_ing_bic_3_cant!=null){
				globals.tabla15[hora]=resumen_to_hojauti.bal_ing_bic_3_cant
			}else{
				globals.tabla15[hora]=0
			}
			globals.tabla15[2400]='BIC-3   Cant.     '
			switch (resumen_to_hojauti.bal_ing_bic_4_tipo) {
				case 1:globals.tabla16[hora]='NTG      ';break;
				case 2:globals.tabla16[hora]='Fioritina';break;
				case 3:globals.tabla16[hora]='Milrinona';break;
				case 4:globals.tabla16[hora]='Ipsilon  ';break;
				case 5:globals.tabla16[hora]='Analgesia';break;
				case 6:globals.tabla16[hora]='Dobutamina';break;
				case 7:globals.tabla16[hora]='Dopamina  ';break;
				case 8:globals.tabla16[hora]='NPS       ';break;
				case 9:globals.tabla16[hora]='Biascor   ';break;
				case 10:globals.tabla16[hora]='Fentanilo ';break;
				case 11:globals.tabla16[hora]='Tiopenthal';break;
				case 12:globals.tabla16[hora]='Propofol  ';break;
				case 13:globals.tabla16[hora]='Midazolam ';break;
				case 14:globals.tabla16[hora]='Sedo-Analgesia';break;
				case 15:globals.tabla16[hora]='Fentanilo ';break;
				case 16:globals.tabla16[hora]='Lasix     ';break;
				case 17:globals.tabla16[hora]='Amiodarona ';break;
				case 0:globals.tabla16[hora]='Ninguna';break;
			}	
			globals.tabla16[2400]='BIC-4   Tipo      '	
			if(resumen_to_hojauti.bal_ing_bic_4_cant!=null){
				globals.tabla17[hora]=resumen_to_hojauti.bal_ing_bic_4_cant
			}else{
				globals.tabla17[hora]=0
			}
			globals.tabla17[2400]='BIC-4   Cant.     '
			switch (resumen_to_hojauti.bal_ing_bic_5_tipo) {
				case 1:globals.tabla18[hora]='NTG      ';break;
				case 2:globals.tabla18[hora]='Fioritina';break;
				case 3:globals.tabla18[hora]='Milrinona';break;
				case 4:globals.tabla18[hora]='Ipsilon  ';break;
				case 5:globals.tabla18[hora]='Analgesia';break;
				case 6:globals.tabla18[hora]='Dobutamina';break;
				case 7:globals.tabla18[hora]='Dopamina  ';break;
				case 8:globals.tabla18[hora]='NPS       ';break;
				case 9:globals.tabla18[hora]='Biascor   ';break;
				case 10:globals.tabla18[hora]='Fentanilo ';break;
				case 11:globals.tabla18[hora]='Tiopenthal';break;
				case 12:globals.tabla18[hora]='Propofol  ';break;
				case 13:globals.tabla18[hora]='Midazolam ';break;
				case 14:globals.tabla18[hora]='Sedo-Analgesia';break;
				case 15:globals.tabla18[hora]='Fentanilo ';break;
				case 16:globals.tabla18[hora]='Lasix     ';break;
				case 17:globals.tabla18[hora]='Amiodarona ';break;
				case 0:globals.tabla18[hora]='Ninguna';break;
			}	
			globals.tabla18[2400]='BIC-5   Tipo      '	
			if(resumen_to_hojauti.bal_ing_bic_5_cant!=null){
				globals.tabla19[hora]=resumen_to_hojauti.bal_ing_bic_5_cant
			}else{
				globals.tabla19[hora]=0
			}
			globals.tabla19[2400]='BIC-5   Cant.     '
			//-- Busca Otros Ingresos -----
				globals.vHora=hora
				//if (hora>9){
				//	globals.vHora=globals.vHora.toString().substr(0,2)+'00'
				//}else{
					//globals.vHora=globals.vHora.toString().substr(0,1)+'00'
				//}
				
				globals.tabla40[hora]=0	
				globals.tabla40[hora]= utils.numberFormat((utils.stringToNumber(globals.tabla2[hora])+utils.stringToNumber(globals.tabla3[hora])+utils.stringToNumber(globals.tabla5[hora])+utils.stringToNumber(globals.tabla7[hora])+utils.stringToNumber(globals.tabla9[hora])+utils.stringToNumber(globals.tabla11[hora])+utils.stringToNumber(globals.tabla13[hora])+utils.stringToNumber(globals.tabla15[hora])+utils.stringToNumber(globals.tabla17[hora])+utils.stringToNumber(globals.tabla19[hora])+utils.stringToNumber(globals.tabla20[hora])+utils.stringToNumber(globals.tabla21[hora])+utils.stringToNumber(globals.tabla22[hora])+utils.stringToNumber(globals.tabla23[hora])+utils.stringToNumber(globals.tabla24[hora])+utils.stringToNumber(globals.tabla25[hora])+utils.stringToNumber(globals.tabla26[hora])+utils.stringToNumber(globals.tabla27[hora])+utils.stringToNumber(globals.tabla28[hora])+utils.stringToNumber(globals.tabla29[hora])+utils.stringToNumber(globals.tabla30[hora])+utils.stringToNumber(globals.tabla31[hora])+utils.stringToNumber(globals.tabla32[hora])+utils.stringToNumber(globals.tabla33[hora])+utils.stringToNumber(globals.tabla34[hora])+utils.stringToNumber(globals.tabla35[hora])+utils.stringToNumber(globals.tabla36[hora])+utils.stringToNumber(globals.tabla37[hora])+utils.stringToNumber(globals.tabla38[hora])+utils.stringToNumber(globals.tabla39[hora])),"######")
				globals.tabla40[2400]='Total Horario     '
				globals.tabla41[600]=utils.numberFormat((utils.stringToNumber(globals.tabla41[600])+utils.stringToNumber(globals.tabla40[hora])),"######")
				globals.tabla41[1000]=globals.tabla41[600]
				globals.tabla41[1400]=globals.tabla41[600]
				globals.tabla41[1800]=globals.tabla41[600]
				globals.tabla41[2200]=globals.tabla41[600]
				globals.tabla41[200]=globals.tabla41[600]
				globals.tabla41[2400]='Total en 24 Hs.  '
					
				globals.tabla42[2400]= '  Concepto   ';
				if (hora.length==3){
					globals.tabla42[hora]= hora.substr(0,1)+":"+hora.substr(1,2)
				}else{
					globals.tabla42[hora]= hora.substr(0,2)+":"+hora.substr(2,2)
				}
					
				switch (resumen_to_hojauti.bal_egr_diuresis_tipo) {
					case 1:globals.tabla43[hora]='Pañal';break;
					case 2:globals.tabla43[hora]='Enteral';break;
					case 3:globals.tabla43[hora]='Sonda Vesical';break;
					case 4:globals.tabla43[hora]='Micción Espontánea';break;
					case 0:globals.tabla43[hora]='Ninguno';break;
				}			
				globals.tabla43[2400]='Diuresis Tipo '
				if(resumen_to_hojauti.bal_egr_diuresis_cant!=null){
					globals.tabla44[hora]=resumen_to_hojauti.bal_egr_diuresis_cant
				}else{
					globals.tabla44[hora]=0
				}
				globals.tabla44[2400]='Diuresis Cant.'	
				switch (resumen_to_hojauti.bal_egr_drenaje1_tipo) {
					case 1:globals.tabla45[hora]='Pleural';break;
					case 2:globals.tabla45[hora]='Cefálico';break;
					case 3:globals.tabla45[hora]='Abdominal';break;
					case 4:globals.tabla45[hora]='Cadera';break;
					case 5:globals.tabla45[hora]='Mediastínico';break;
					case 0:globals.tabla45[hora]='Ninguno';break;
				}			
				globals.tabla45[2400]='Drenaje-1  Tipo '
				if(resumen_to_hojauti.bal_egr_drenaje1_cant!=null){
					globals.tabla46[hora]=resumen_to_hojauti.bal_egr_drenaje1_cant
				}else{
					globals.tabla46[hora]=0
				}
				globals.tabla46[2400]='Drenaje-1  Cant.'	
				switch (resumen_to_hojauti.bal_egr_drenaje2_tipo) {
					case 1:globals.tabla47[hora]='Pleural';break;
					case 2:globals.tabla47[hora]='Cefálico';break;
					case 3:globals.tabla47[hora]='Abdominal';break;
					case 4:globals.tabla47[hora]='Cadera';break;
					case 5:globals.tabla47[hora]='Mediastínico';break;
					case 0:globals.tabla47[hora]='Ninguno';break;
				}			
				globals.tabla47[2400]='Drenaje-2  Tipo '
				if(resumen_to_hojauti.bal_egr_drenaje2_cant!=null){
					globals.tabla48[hora]=resumen_to_hojauti.bal_egr_drenaje2_cant
				}else{
					globals.tabla48[hora]=0
				}
				globals.tabla48[2400]='Drenaje-2  Cant.'	
				switch (resumen_to_hojauti.bal_egr_drenaje3_tipo) {
					case 1:globals.tabla49[hora]='Pleural';break;
					case 2:globals.tabla49[hora]='Cefálico';break;
					case 3:globals.tabla49[hora]='Abdominal';break;
					case 4:globals.tabla49[hora]='Cadera';break;
					case 5:globals.tabla49[hora]='Mediastínico';break;
					case 0:globals.tabla49[hora]='Ninguno';break;
				}			
				globals.tabla49[2400]='Drenaje-3  Tipo '
				if(resumen_to_hojauti.bal_egr_drenaje3_cant!=null){
					globals.tabla50[hora]=resumen_to_hojauti.bal_egr_drenaje3_cant
				}else{
					globals.tabla50[hora]=0
				}
				globals.tabla50[2400]='Drenaje-3  Cant.'
				switch (resumen_to_hojauti.bal_egr_drenaje4_tipo) {
					case 1:globals.tabla51[hora]='Pleural';break;
					case 2:globals.tabla51[hora]='Cefálico';break;
					case 3:globals.tabla51[hora]='Abdominal';break;
					case 4:globals.tabla51[hora]='Cadera';break;
					case 5:globals.tabla51[hora]='Mediastínico';break;
					case 0:globals.tabla51[hora]='Ninguno';break;
				}			
				globals.tabla51[2400]='Drenaje-4  Tipo '
				if(resumen_to_hojauti.bal_egr_drenaje4_cant!=null){
					globals.tabla52[hora]=resumen_to_hojauti.bal_egr_drenaje4_cant
				}else{
					globals.tabla52[hora]=0
				}
				globals.tabla52[2400]='Drenaje-4  Cant.'
				switch (resumen_to_hojauti.bal_egr_tipo_emesis) {
					case 1:globals.tabla73[hora]='Alimentario';break;
					case 2:globals.tabla73[hora]='Bilis';break;
					case 3:globals.tabla73[hora]='Sangre';break;
					case 4:globals.tabla73[hora]='Moco';break;
					case 5:globals.tabla73[hora]='Pus';break;
					case 0:globals.tabla73[hora]='Ninguno';break;
				}			
				globals.tabla73[2400]='Emesis   Tipo '
				if(resumen_to_hojauti.bal_egr_cant_emesis!=null){
					globals.tabla74[hora]=resumen_to_hojauti.bal_egr_cant_emesis
				}else{
					globals.tabla74[hora]=0
				}
				globals.tabla74[2400]='Emesis   Cant.'	
				if(resumen_to_hojauti.bal_egr_cant_dialisis!=null){
					globals.tabla75[hora]=resumen_to_hojauti.bal_egr_cant_dialisis
				}else{
					globals.tabla75[hora]=0
				}
				globals.tabla75[2400]='Dialisis  Cant.'	
				globals.tabla76[hora]=0	
				globals.tabla76[hora]= utils.numberFormat((utils.stringToNumber(globals.tabla44[hora])+utils.stringToNumber(globals.tabla46[hora])+utils.stringToNumber(globals.tabla48[hora])+utils.stringToNumber(globals.tabla50[hora])+utils.stringToNumber(globals.tabla52[hora])+utils.stringToNumber(globals.tabla53[hora])+utils.stringToNumber(globals.tabla54[hora])+utils.stringToNumber(globals.tabla55[hora])+utils.stringToNumber(globals.tabla56[hora])+utils.stringToNumber(globals.tabla57[hora])+utils.stringToNumber(globals.tabla58[hora])+utils.stringToNumber(globals.tabla59[hora])+utils.stringToNumber(globals.tabla60[hora])+utils.stringToNumber(globals.tabla61[hora])+utils.stringToNumber(globals.tabla62[hora])+utils.stringToNumber(globals.tabla63[hora])+utils.stringToNumber(globals.tabla64[hora])+utils.stringToNumber(globals.tabla65[hora])+utils.stringToNumber(globals.tabla66[hora])+utils.stringToNumber(globals.tabla67[hora])+utils.stringToNumber(globals.tabla68[hora])+utils.stringToNumber(globals.tabla69[hora])+utils.stringToNumber(globals.tabla70[hora])+utils.stringToNumber(globals.tabla71[hora])+utils.stringToNumber(globals.tabla72[hora])+utils.stringToNumber(globals.tabla74[hora])+utils.stringToNumber(globals.tabla75[hora])),"######")
				globals.tabla76[2400]='Total Horario     '
				globals.tabla77[600]=utils.numberFormat((utils.stringToNumber(globals.tabla77[600])+utils.stringToNumber(globals.tabla76[hora])),"######")
				globals.tabla77[1000]=globals.tabla77[600]
				globals.tabla77[1400]=globals.tabla77[600]
				globals.tabla77[1800]=globals.tabla77[600]
				globals.tabla77[2200]=globals.tabla77[600]
				globals.tabla77[200]=globals.tabla77[600]
				globals.tabla77[2400]='Total en 24 Hs.  '
				globals.tabla78[600]=utils.numberFormat((utils.stringToNumber(globals.tabla41[600])-utils.stringToNumber(globals.tabla77[600])),"######")
				globals.tabla78[1400]=globals.tabla78[600]
				globals.tabla78[2200]=globals.tabla78[600]
				globals.tabla78[2400]='BALANCE EN 24 HS.  '	
				cargo_tabla=true
				if (hora>=600&&hora<1400){
					globals.tabla2[2500]=utils.numberFormat((utils.stringToNumber(globals.tabla2[2500])+utils.stringToNumber(globals.tabla2[hora])),"######")
					globals.tabla3[2500]=utils.numberFormat((utils.stringToNumber(globals.tabla3[2500])+utils.stringToNumber(globals.tabla3[hora])),"######")
					globals.tabla5[2500]=utils.numberFormat((utils.stringToNumber(globals.tabla5[2500])+utils.stringToNumber(globals.tabla5[hora])),"######")
					globals.tabla7[2500]=utils.numberFormat((utils.stringToNumber(globals.tabla7[2500])+utils.stringToNumber(globals.tabla7[hora])),"######")
					globals.tabla9[2500]=utils.numberFormat((utils.stringToNumber(globals.tabla9[2500])+utils.stringToNumber(globals.tabla9[hora])),"######")
					globals.tabla11[2500]=utils.numberFormat((utils.stringToNumber(globals.tabla11[2500])+utils.stringToNumber(globals.tabla11[hora])),"######")
					globals.tabla13[2500]=utils.numberFormat((utils.stringToNumber(globals.tabla13[2500])+utils.stringToNumber(globals.tabla13[hora])),"######")
					globals.tabla15[2500]=utils.numberFormat((utils.stringToNumber(globals.tabla15[2500])+utils.stringToNumber(globals.tabla15[hora])),"######")
					globals.tabla17[2500]=utils.numberFormat((utils.stringToNumber(globals.tabla17[2500])+utils.stringToNumber(globals.tabla17[hora])),"######")
					globals.tabla19[2500]=utils.numberFormat((utils.stringToNumber(globals.tabla19[2500])+utils.stringToNumber(globals.tabla19[hora])),"######")
					globals.tabla40[2500]=utils.numberFormat((utils.stringToNumber(globals.tabla40[2500])+utils.stringToNumber(globals.tabla40[hora])),"######")
					globals.tabla44[2500]=utils.numberFormat((utils.stringToNumber(globals.tabla44[2500])+utils.stringToNumber(globals.tabla44[hora])),"######")
					globals.tabla46[2500]=utils.numberFormat((utils.stringToNumber(globals.tabla46[2500])+utils.stringToNumber(globals.tabla46[hora])),"######")
					globals.tabla48[2500]=utils.numberFormat((utils.stringToNumber(globals.tabla48[2500])+utils.stringToNumber(globals.tabla48[hora])),"######")
					globals.tabla50[2500]=utils.numberFormat((utils.stringToNumber(globals.tabla50[2500])+utils.stringToNumber(globals.tabla50[hora])),"######")
					globals.tabla52[2500]=utils.numberFormat((utils.stringToNumber(globals.tabla52[2500])+utils.stringToNumber(globals.tabla52[hora])),"######")
					globals.tabla74[2500]=utils.numberFormat((utils.stringToNumber(globals.tabla74[2500])+utils.stringToNumber(globals.tabla74[hora])),"######")
					globals.tabla75[2500]=utils.numberFormat((utils.stringToNumber(globals.tabla75[2500])+utils.stringToNumber(globals.tabla75[hora])),"######")
					globals.tabla76[2500]=utils.numberFormat((utils.stringToNumber(globals.tabla76[2500])+utils.stringToNumber(globals.tabla76[hora])),"######")
					globals.tabla78[2500]=utils.numberFormat((utils.stringToNumber(globals.tabla40[2500])-utils.stringToNumber(globals.tabla76[2500])),"######")
					globals.tabla78[2400]='BALANCE Turno '
				}else{
					if(hora>=1400&&hora<2200){
						globals.tabla2[2600]=utils.numberFormat((utils.stringToNumber(globals.tabla2[2600])+utils.stringToNumber(globals.tabla2[hora])),"######")
						globals.tabla3[2600]=utils.numberFormat((utils.stringToNumber(globals.tabla3[2600])+utils.stringToNumber(globals.tabla3[hora])),"######")
						globals.tabla5[2600]=utils.numberFormat((utils.stringToNumber(globals.tabla5[2600])+utils.stringToNumber(globals.tabla5[hora])),"######")
						globals.tabla7[2600]=utils.numberFormat((utils.stringToNumber(globals.tabla7[2600])+utils.stringToNumber(globals.tabla7[hora])),"######")
						globals.tabla9[2600]=utils.numberFormat((utils.stringToNumber(globals.tabla9[2600])+utils.stringToNumber(globals.tabla9[hora])),"######")
						globals.tabla11[2600]=utils.numberFormat((utils.stringToNumber(globals.tabla11[2600])+utils.stringToNumber(globals.tabla11[hora])),"######")
						globals.tabla13[2600]=utils.numberFormat((utils.stringToNumber(globals.tabla13[2600])+utils.stringToNumber(globals.tabla13[hora])),"######")
						globals.tabla15[2600]=utils.numberFormat((utils.stringToNumber(globals.tabla15[2600])+utils.stringToNumber(globals.tabla15[hora])),"######")
						globals.tabla17[2600]=utils.numberFormat((utils.stringToNumber(globals.tabla17[2600])+utils.stringToNumber(globals.tabla17[hora])),"######")
						globals.tabla19[2600]=utils.numberFormat((utils.stringToNumber(globals.tabla19[2600])+utils.stringToNumber(globals.tabla19[hora])),"######")
						globals.tabla40[2600]=utils.numberFormat((utils.stringToNumber(globals.tabla40[2600])+utils.stringToNumber(globals.tabla40[hora])),"######")
						globals.tabla44[2600]=utils.numberFormat((utils.stringToNumber(globals.tabla44[2600])+utils.stringToNumber(globals.tabla44[hora])),"######")
						globals.tabla46[2600]=utils.numberFormat((utils.stringToNumber(globals.tabla46[2600])+utils.stringToNumber(globals.tabla46[hora])),"######")
						globals.tabla48[2600]=utils.numberFormat((utils.stringToNumber(globals.tabla48[2600])+utils.stringToNumber(globals.tabla48[hora])),"######")
						globals.tabla50[2600]=utils.numberFormat((utils.stringToNumber(globals.tabla50[2600])+utils.stringToNumber(globals.tabla50[hora])),"######")
						globals.tabla52[2600]=utils.numberFormat((utils.stringToNumber(globals.tabla52[2600])+utils.stringToNumber(globals.tabla52[hora])),"######")
						globals.tabla74[2600]=utils.numberFormat((utils.stringToNumber(globals.tabla74[2600])+utils.stringToNumber(globals.tabla74[hora])),"######")
						globals.tabla75[2600]=utils.numberFormat((utils.stringToNumber(globals.tabla75[2600])+utils.stringToNumber(globals.tabla75[hora])),"######")
						globals.tabla76[2600]=utils.numberFormat((utils.stringToNumber(globals.tabla76[2600])+utils.stringToNumber(globals.tabla76[hora])),"######")
						globals.tabla78[2600]=utils.numberFormat((utils.stringToNumber(globals.tabla40[2600])-utils.stringToNumber(globals.tabla76[26])),"######")
						globals.tabla78[2400]='BALANCE Turno '
					}else{
						if((hora>=2200&&hora<2400)||(hora>=0&&hora<600)){
							globals.tabla2[2700]=utils.numberFormat((utils.stringToNumber(globals.tabla2[27])+utils.stringToNumber(globals.tabla2[hora])),"######")
							globals.tabla3[2700]=utils.numberFormat((utils.stringToNumber(globals.tabla3[27])+utils.stringToNumber(globals.tabla3[hora])),"######")
							globals.tabla5[2700]=utils.numberFormat((utils.stringToNumber(globals.tabla5[27])+utils.stringToNumber(globals.tabla5[hora])),"######")
							globals.tabla7[2700]=utils.numberFormat((utils.stringToNumber(globals.tabla7[27])+utils.stringToNumber(globals.tabla7[hora])),"######")
							globals.tabla9[2700]=utils.numberFormat((utils.stringToNumber(globals.tabla9[27])+utils.stringToNumber(globals.tabla9[hora])),"######")
							globals.tabla11[2700]=utils.numberFormat((utils.stringToNumber(globals.tabla11[27])+utils.stringToNumber(globals.tabla11[hora])),"######")
							globals.tabla13[2700]=utils.numberFormat((utils.stringToNumber(globals.tabla13[27])+utils.stringToNumber(globals.tabla13[hora])),"######")
							globals.tabla15[2700]=utils.numberFormat((utils.stringToNumber(globals.tabla15[27])+utils.stringToNumber(globals.tabla15[hora])),"######")
							globals.tabla17[2700]=utils.numberFormat((utils.stringToNumber(globals.tabla17[27])+utils.stringToNumber(globals.tabla17[hora])),"######")
							globals.tabla19[2700]=utils.numberFormat((utils.stringToNumber(globals.tabla19[27])+utils.stringToNumber(globals.tabla19[hora])),"######")
							globals.tabla40[2700]=utils.numberFormat((utils.stringToNumber(globals.tabla40[27])+utils.stringToNumber(globals.tabla40[hora])),"######")
							globals.tabla44[2700]=utils.numberFormat((utils.stringToNumber(globals.tabla44[27])+utils.stringToNumber(globals.tabla44[hora])),"######")
							globals.tabla46[2700]=utils.numberFormat((utils.stringToNumber(globals.tabla46[27])+utils.stringToNumber(globals.tabla46[hora])),"######")
							globals.tabla48[2700]=utils.numberFormat((utils.stringToNumber(globals.tabla48[27])+utils.stringToNumber(globals.tabla48[hora])),"######")
							globals.tabla50[2700]=utils.numberFormat((utils.stringToNumber(globals.tabla50[27])+utils.stringToNumber(globals.tabla50[hora])),"######")
							globals.tabla52[2700]=utils.numberFormat((utils.stringToNumber(globals.tabla52[27])+utils.stringToNumber(globals.tabla52[hora])),"######")
							globals.tabla74[2700]=utils.numberFormat((utils.stringToNumber(globals.tabla74[27])+utils.stringToNumber(globals.tabla74[hora])),"######")
							globals.tabla75[2700]=utils.numberFormat((utils.stringToNumber(globals.tabla73[27])+utils.stringToNumber(globals.tabla75[hora])),"######")
							globals.tabla76[2700]=utils.numberFormat((utils.stringToNumber(globals.tabla76[27])+utils.stringToNumber(globals.tabla76[hora])),"######")
							globals.tabla78[2700]=utils.numberFormat((utils.stringToNumber(globals.tabla40[27])-utils.stringToNumber(globals.tabla76[27])),"######")
							globals.tabla78[2400]='BALANCE Turno '
						}
					}
				}
				globals.tabla2[2800]=utils.numberFormat((utils.stringToNumber(globals.tabla2[2500])+utils.stringToNumber(globals.tabla2[2600])+utils.stringToNumber(globals.tabla2[2700])),"######")
				globals.tabla3[2800]=utils.numberFormat((utils.stringToNumber(globals.tabla3[2500])+utils.stringToNumber(globals.tabla3[2600])+utils.stringToNumber(globals.tabla3[2700])),"######")
				globals.tabla5[2800]=utils.numberFormat((utils.stringToNumber(globals.tabla5[2500])+utils.stringToNumber(globals.tabla5[2600])+utils.stringToNumber(globals.tabla5[2700])),"######")
				globals.tabla7[2800]=utils.numberFormat((utils.stringToNumber(globals.tabla7[2500])+utils.stringToNumber(globals.tabla7[2600])+utils.stringToNumber(globals.tabla7[2700])),"######")
				globals.tabla9[2800]=utils.numberFormat((utils.stringToNumber(globals.tabla9[2500])+utils.stringToNumber(globals.tabla9[2600])+utils.stringToNumber(globals.tabla9[2700])),"######")
				globals.tabla11[2800]=utils.numberFormat((utils.stringToNumber(globals.tabla11[2500])+utils.stringToNumber(globals.tabla11[2600])+utils.stringToNumber(globals.tabla11[2700])),"######")
				globals.tabla13[2800]=utils.numberFormat((utils.stringToNumber(globals.tabla13[2500])+utils.stringToNumber(globals.tabla13[2600])+utils.stringToNumber(globals.tabla13[2700])),"######")
				globals.tabla15[2800]=utils.numberFormat((utils.stringToNumber(globals.tabla15[2500])+utils.stringToNumber(globals.tabla15[2600])+utils.stringToNumber(globals.tabla15[2700])),"######")
				globals.tabla17[2800]=utils.numberFormat((utils.stringToNumber(globals.tabla17[2500])+utils.stringToNumber(globals.tabla17[2600])+utils.stringToNumber(globals.tabla17[2700])),"######")
				globals.tabla19[2800]=utils.numberFormat((utils.stringToNumber(globals.tabla19[2500])+utils.stringToNumber(globals.tabla19[2600])+utils.stringToNumber(globals.tabla19[2700])),"######")
				globals.tabla40[2800]=utils.numberFormat((utils.stringToNumber(globals.tabla40[2500])+utils.stringToNumber(globals.tabla40[2600])+utils.stringToNumber(globals.tabla40[2700])),"######")
				globals.tabla44[2800]=utils.numberFormat((utils.stringToNumber(globals.tabla44[2500])+utils.stringToNumber(globals.tabla44[2600])+utils.stringToNumber(globals.tabla44[2700])),"######")
				globals.tabla46[2800]=utils.numberFormat((utils.stringToNumber(globals.tabla46[2500])+utils.stringToNumber(globals.tabla46[2600])+utils.stringToNumber(globals.tabla46[2700])),"######")
				globals.tabla48[2800]=utils.numberFormat((utils.stringToNumber(globals.tabla48[2500])+utils.stringToNumber(globals.tabla48[2600])+utils.stringToNumber(globals.tabla48[2700])),"######")
				globals.tabla50[2800]=utils.numberFormat((utils.stringToNumber(globals.tabla50[2500])+utils.stringToNumber(globals.tabla50[2600])+utils.stringToNumber(globals.tabla50[2700])),"######")
				globals.tabla52[2800]=utils.numberFormat((utils.stringToNumber(globals.tabla52[2500])+utils.stringToNumber(globals.tabla52[2600])+utils.stringToNumber(globals.tabla52[2700])),"######")
				globals.tabla74[2800]=utils.numberFormat((utils.stringToNumber(globals.tabla74[2500])+utils.stringToNumber(globals.tabla74[2600])+utils.stringToNumber(globals.tabla74[2700])),"######")
				globals.tabla75[2800]=utils.numberFormat((utils.stringToNumber(globals.tabla75[2500])+utils.stringToNumber(globals.tabla75[2600])+utils.stringToNumber(globals.tabla75[2700])),"######")
				globals.tabla76[2800]=utils.numberFormat((utils.stringToNumber(globals.tabla76[2500])+utils.stringToNumber(globals.tabla76[2600])+utils.stringToNumber(globals.tabla76[2700])),"######")
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
					
					switch (resumen2_to_hojauti.bal_ing_hidrata_tipo) {
						case 1:globals.tabla1[hora]='V.Oral';break;
						case 2:globals.tabla1[hora]='V.Parent.';break;
						case 3:globals.tabla1[hora]='V.Enteral.';break;
						case 0:globals.tabla1[hora]='Ninguna';break;
						default:globals.tabla1[hora]='';break;
					}
					globals.tabla1[2400]='Hidratacion Tipo ' 
					if(resumen2_to_hojauti.bal_ing_hidrata_cant!=null){
						globals.tabla2[hora]=resumen2_to_hojauti.bal_ing_hidrata_cant
					}else{
						globals.tabla2[hora]=0
					}	
					globals.tabla2[2400]='Hidratacion Cant. '
					if(resumen2_to_hojauti.bal_ing_dilucion!=null){
						globals.tabla3[hora]=resumen2_to_hojauti.bal_ing_dilucion
					}else{
						globals.tabla3[hora]=0
					}
					
					globals.tabla3[2400]='Dilución          '
					switch (resumen2_to_hojauti.bal_ing_expansion_tipo) {
						case 1:globals.tabla4[hora]='Sol.Fisio';break;
						case 2:globals.tabla4[hora]='Ringer L.';break;
						case 3:globals.tabla4[hora]='Voluven';break;
						case 4:globals.tabla4[hora]='Haemaccel';break;
						case 5:globals.tabla4[hora]='Albumina';break;
						case 0:globals.tabla4[hora]='Ninguna';break;
						default:globals.tabla4[hora]='';break;
					}	
					globals.tabla4[2400]='Expansión Tipo    '
					if(resumen2_to_hojauti.bal_ing_expansion_cant!=null){
						globals.tabla5[hora]=resumen2_to_hojauti.bal_ing_expansion_cant
					}else{
						globals.tabla5[hora]=0
					}
					globals.tabla5[2400]='Expansión Cant.   '
					switch (resumen2_to_hojauti.bal_ing_sangre_tipo) {
						case 1:globals.tabla6[hora]='Glob.Rojo';break;
						case 2:globals.tabla6[hora]='Plasma';break;
						case 3:globals.tabla6[hora]='Plaquetas';break;
						case 0:globals.tabla6[hora]='Ninguno';break;
					}		
					globals.tabla6[2400]='Sangre Tipo       '
					if(resumen2_to_hojauti.bal_ing_sangre_cant!=null){
						globals.tabla7[hora]=resumen2_to_hojauti.bal_ing_sangre_cant
					}else{
						globals.tabla7[hora]=0
					}
					globals.tabla7[2400]='Sangre Cant.      '
					switch (resumen2_to_hojauti.bal_ing_alimen_tipo) {
						case 1:globals.tabla8[hora]='Enteral';break;
						case 2:globals.tabla8[hora]='Parenteral';break;
						case 3:globals.tabla8[hora]='Oral';break;
						case 0:globals.tabla8[hora]='Ninguno';break;
					}			
					globals.tabla8[2400]='Alimentación Tipo '
					if(resumen2_to_hojauti.bal_ing_alimen_cant!=null){
						globals.tabla9[hora]=resumen2_to_hojauti.bal_ing_alimen_cant
					}else{
						globals.tabla9[hora]=0
					}
					globals.tabla9[2400]='Alimentación Cant.'
					switch (resumen2_to_hojauti.bal_ing_bic_1_tipo) {
					case 1:globals.tabla10[hora]='NTG      ';break;
					case 2:globals.tabla10[hora]='Fioritina';break;
					case 3:globals.tabla10[hora]='Milrinona';break;
					case 4:globals.tabla10[hora]='Ipsilon  ';break;
					case 5:globals.tabla10[hora]='Analgesia';break;
					case 6:globals.tabla10[hora]='Dobutamina';break;
					case 7:globals.tabla10[hora]='Dopamina  ';break;
					case 8:globals.tabla10[hora]='NPS       ';break;
					case 9:globals.tabla10[hora]='Biascor   ';break;
					case 10:globals.tabla10[hora]='Fentanilo ';break;
					case 11:globals.tabla10[hora]='Tiopenthal';break;
					case 12:globals.tabla10[hora]='Propofol  ';break;
					case 13:globals.tabla10[hora]='Midazolam ';break;
					case 14:globals.tabla10[hora]='Sedo-Analgesia';break;
					case 15:globals.tabla10[hora]='Fentanilo ';break;
					case 16:globals.tabla10[hora]='Lasix     ';break;
					case 17:globals.tabla10[hora]='Amiodarona ';break;
					case 0:globals.tabla10[hora]='Ninguna';break;
				}	
				globals.tabla10[2400]='BIC-1   Tipo      '	
				if(resumen2_to_hojauti.bal_ing_bic_1_cant!=null){
					globals.tabla11[hora]=resumen2_to_hojauti.bal_ing_bic_1_cant
				}else{
					globals.tabla11[hora]=0
				}
				globals.tabla11[2400]='BIC-1   Cant.     '
				switch (resumen2_to_hojauti.bal_ing_bic_2_tipo) {
					case 1:globals.tabla12[hora]='NTG      ';break;
					case 2:globals.tabla12[hora]='Fioritina';break;
					case 3:globals.tabla12[hora]='Milrinona';break;
					case 4:globals.tabla12[hora]='Ipsilon  ';break;
					case 5:globals.tabla12[hora]='Analgesia';break;
					case 6:globals.tabla12[hora]='Dobutamina';break;
					case 7:globals.tabla12[hora]='Dopamina  ';break;
					case 8:globals.tabla12[hora]='NPS       ';break;
					case 9:globals.tabla12[hora]='Biascor   ';break;
					case 10:globals.tabla12[hora]='Fentanilo ';break;
					case 11:globals.tabla12[hora]='Tiopenthal';break;
					case 12:globals.tabla12[hora]='Propofol  ';break;
					case 13:globals.tabla12[hora]='Midazolam ';break;
					case 14:globals.tabla12[hora]='Sedo-Analgesia';break;
					case 15:globals.tabla12[hora]='Fentanilo ';break;
					case 16:globals.tabla12[hora]='Lasix     ';break;
					case 17:globals.tabla12[hora]='Amiodarona ';break;
					case 0:globals.tabla12[hora]='Ninguna';break;
				}	
				globals.tabla12[2400]='BIC-2   Tipo      '
				if(resumen2_to_hojauti.bal_ing_bic_2_cant!=null){
					globals.tabla13[hora]=resumen2_to_hojauti.bal_ing_bic_2_cant
				}else{
					globals.tabla13[hora]=0
				}
				globals.tabla13[2400]='BIC-2   Cant.     '
				switch (resumen2_to_hojauti.bal_ing_bic_3_tipo) {
					case 1:globals.tabla14[hora]='NTG      ';break;
					case 2:globals.tabla14[hora]='Fioritina';break;
					case 3:globals.tabla14[hora]='Milrinona';break;
					case 4:globals.tabla14[hora]='Ipsilon  ';break;
					case 5:globals.tabla14[hora]='Analgesia';break;
					case 6:globals.tabla14[hora]='Dobutamina';break;
					case 7:globals.tabla14[hora]='Dopamina  ';break;
					case 8:globals.tabla14[hora]='NPS       ';break;
					case 9:globals.tabla14[hora]='Biascor   ';break;
					case 10:globals.tabla14[hora]='Fentanilo ';break;
					case 11:globals.tabla14[hora]='Tiopenthal';break;
					case 12:globals.tabla14[hora]='Propofol  ';break;
					case 13:globals.tabla14[hora]='Midazolam ';break;
					case 14:globals.tabla14[hora]='Sedo-Analgesia';break;
					case 15:globals.tabla14[hora]='Fentanilo ';break;
					case 16:globals.tabla14[hora]='Lasix     ';break;
					case 17:globals.tabla14[hora]='Amiodarona ';break;
					case 0:globals.tabla14[hora]='Ninguna';break;
				}	
				globals.tabla14[2400]='BIC-3   Tipo      '	
				if(resumen2_to_hojauti.bal_ing_bic_3_cant!=null){
					globals.tabla15[hora]=resumen2_to_hojauti.bal_ing_bic_3_cant
				}else{
					globals.tabla15[hora]=0
				}
				globals.tabla15[2400]='BIC-3   Cant.     '
				switch (resumen2_to_hojauti.bal_ing_bic_4_tipo) {
					case 1:globals.tabla16[hora]='NTG      ';break;
					case 2:globals.tabla16[hora]='Fioritina';break;
					case 3:globals.tabla16[hora]='Milrinona';break;
					case 4:globals.tabla16[hora]='Ipsilon  ';break;
					case 5:globals.tabla16[hora]='Analgesia';break;
					case 6:globals.tabla16[hora]='Dobutamina';break;
					case 7:globals.tabla16[hora]='Dopamina  ';break;
					case 8:globals.tabla16[hora]='NPS       ';break;
					case 9:globals.tabla16[hora]='Biascor   ';break;
					case 10:globals.tabla16[hora]='Fentanilo ';break;
					case 11:globals.tabla16[hora]='Tiopenthal';break;
					case 12:globals.tabla16[hora]='Propofol  ';break;
					case 13:globals.tabla16[hora]='Midazolam ';break;
					case 14:globals.tabla16[hora]='Sedo-Analgesia';break;
					case 15:globals.tabla16[hora]='Fentanilo ';break;
					case 16:globals.tabla16[hora]='Lasix     ';break;
					case 17:globals.tabla16[hora]='Amiodarona ';break;
					case 0:globals.tabla16[hora]='Ninguna';break;
				}	
				globals.tabla16[2400]='BIC-4   Tipo      '	
				if(resumen2_to_hojauti.bal_ing_bic_4_cant!=null){
					globals.tabla17[hora]=resumen2_to_hojauti.bal_ing_bic_4_cant
				}else{
					globals.tabla17[hora]=0
				}
				globals.tabla17[2400]='BIC-4   Cant.     '
				switch (resumen2_to_hojauti.bal_ing_bic_5_tipo) {
					case 1:globals.tabla18[hora]='NTG      ';break;
					case 2:globals.tabla18[hora]='Fioritina';break;
					case 3:globals.tabla18[hora]='Milrinona';break;
					case 4:globals.tabla18[hora]='Ipsilon  ';break;
					case 5:globals.tabla18[hora]='Analgesia';break;
					case 6:globals.tabla18[hora]='Dobutamina';break;
					case 7:globals.tabla18[hora]='Dopamina  ';break;
					case 8:globals.tabla18[hora]='NPS       ';break;
					case 9:globals.tabla18[hora]='Biascor   ';break;
					case 10:globals.tabla18[hora]='Fentanilo ';break;
					case 11:globals.tabla18[hora]='Tiopenthal';break;
					case 12:globals.tabla18[hora]='Propofol  ';break;
					case 13:globals.tabla18[hora]='Midazolam ';break;
					case 14:globals.tabla18[hora]='Sedo-Analgesia';break;
					case 15:globals.tabla18[hora]='Fentanilo ';break;
					case 16:globals.tabla18[hora]='Lasix     ';break;
					case 17:globals.tabla18[hora]='Amiodarona ';break;
					case 0:globals.tabla18[hora]='Ninguna';break;
				}	
				globals.tabla18[2400]='BIC-5   Tipo      '	
				if(resumen2_to_hojauti.bal_ing_bic_5_cant!=null){
					globals.tabla19[hora]=resumen2_to_hojauti.bal_ing_bic_5_cant
				}else{
					globals.tabla19[hora]=0
				}
				globals.tabla19[2400]='BIC-5   Cant.     '
				//-- Busca Otros Ingresos -----
					globals.vHora=hora
					//if (hora>9){
					//	globals.vHora=globals.vHora.toString().substr(0,2)+'00'
					//}else{
						//globals.vHora=globals.vHora.toString().substr(0,1)+'00'
					//}
					
					globals.tabla40[hora]=0	
					globals.tabla40[hora]= utils.numberFormat((utils.stringToNumber(globals.tabla2[hora])+utils.stringToNumber(globals.tabla3[hora])+utils.stringToNumber(globals.tabla5[hora])+utils.stringToNumber(globals.tabla7[hora])+utils.stringToNumber(globals.tabla9[hora])+utils.stringToNumber(globals.tabla11[hora])+utils.stringToNumber(globals.tabla13[hora])+utils.stringToNumber(globals.tabla15[hora])+utils.stringToNumber(globals.tabla17[hora])+utils.stringToNumber(globals.tabla19[hora])+utils.stringToNumber(globals.tabla20[hora])+utils.stringToNumber(globals.tabla21[hora])+utils.stringToNumber(globals.tabla22[hora])+utils.stringToNumber(globals.tabla23[hora])+utils.stringToNumber(globals.tabla24[hora])+utils.stringToNumber(globals.tabla25[hora])+utils.stringToNumber(globals.tabla26[hora])+utils.stringToNumber(globals.tabla27[hora])+utils.stringToNumber(globals.tabla28[hora])+utils.stringToNumber(globals.tabla29[hora])+utils.stringToNumber(globals.tabla30[hora])+utils.stringToNumber(globals.tabla31[hora])+utils.stringToNumber(globals.tabla32[hora])+utils.stringToNumber(globals.tabla33[hora])+utils.stringToNumber(globals.tabla34[hora])+utils.stringToNumber(globals.tabla35[hora])+utils.stringToNumber(globals.tabla36[hora])+utils.stringToNumber(globals.tabla37[hora])+utils.stringToNumber(globals.tabla38[hora])+utils.stringToNumber(globals.tabla39[hora])),"######")
					globals.tabla40[2400]='Total Horario     '
					globals.tabla41[600]=utils.numberFormat((utils.stringToNumber(globals.tabla41[600])+utils.stringToNumber(globals.tabla40[hora])),"######")
					globals.tabla41[1000]=globals.tabla41[600]
					globals.tabla41[1400]=globals.tabla41[600]
					globals.tabla41[1800]=globals.tabla41[600]
					globals.tabla41[2200]=globals.tabla41[600]
					globals.tabla41[200]=globals.tabla41[600]
					globals.tabla41[2400]='Total en 24 Hs.  '
						
					globals.tabla42[2400]= '  Concepto   ';
					if (hora.length==3){
						globals.tabla42[hora]= hora.substr(0,1)+":"+hora.substr(1,2)
					}else{
						globals.tabla42[hora]= hora.substr(0,2)+":"+hora.substr(2,2)
					}
						
					switch (resumen2_to_hojauti.bal_egr_diuresis_tipo) {
						case 1:globals.tabla43[hora]='Pañal';break;
						case 2:globals.tabla43[hora]='Enteral';break;
						case 3:globals.tabla43[hora]='Sonda Vesical';break;
						case 4:globals.tabla43[hora]='Micción Espontánea';break;
						case 0:globals.tabla43[hora]='Ninguno';break;
					}			
					globals.tabla43[2400]='Diuresis Tipo '
					if(resumen2_to_hojauti.bal_egr_diuresis_cant!=null){
						globals.tabla44[hora]=resumen2_to_hojauti.bal_egr_diuresis_cant
					}else{
						globals.tabla44[hora]=0
					}
					globals.tabla44[2400]='Diuresis Cant.'	
					switch (resumen2_to_hojauti.bal_egr_drenaje1_tipo) {
						case 1:globals.tabla45[hora]='Pleural';break;
						case 2:globals.tabla45[hora]='Cefálico';break;
						case 3:globals.tabla45[hora]='Abdominal';break;
						case 4:globals.tabla45[hora]='Cadera';break;
						case 5:globals.tabla45[hora]='Mediastínico';break;
						case 0:globals.tabla45[hora]='Ninguno';break;
					}			
					globals.tabla45[2400]='Drenaje-1  Tipo '
					if(resumen2_to_hojauti.bal_egr_drenaje1_cant!=null){
						globals.tabla46[hora]=resumen2_to_hojauti.bal_egr_drenaje1_cant
					}else{
						globals.tabla46[hora]=0
					}
					globals.tabla46[2400]='Drenaje-1  Cant.'	
					switch (resumen2_to_hojauti.bal_egr_drenaje2_tipo) {
						case 1:globals.tabla47[hora]='Pleural';break;
						case 2:globals.tabla47[hora]='Cefálico';break;
						case 3:globals.tabla47[hora]='Abdominal';break;
						case 4:globals.tabla47[hora]='Cadera';break;
						case 5:globals.tabla47[hora]='Mediastínico';break;
						case 0:globals.tabla47[hora]='Ninguno';break;
					}			
					globals.tabla47[2400]='Drenaje-2  Tipo '
					if(resumen2_to_hojauti.bal_egr_drenaje2_cant!=null){
						globals.tabla48[hora]=resumen2_to_hojauti.bal_egr_drenaje2_cant
					}else{
						globals.tabla48[hora]=0
					}
					globals.tabla48[2400]='Drenaje-2  Cant.'	
					switch (resumen2_to_hojauti.bal_egr_drenaje3_tipo) {
						case 1:globals.tabla49[hora]='Pleural';break;
						case 2:globals.tabla49[hora]='Cefálico';break;
						case 3:globals.tabla49[hora]='Abdominal';break;
						case 4:globals.tabla49[hora]='Cadera';break;
						case 5:globals.tabla49[hora]='Mediastínico';break;
						case 0:globals.tabla49[hora]='Ninguno';break;
					}			
					globals.tabla49[2400]='Drenaje-3  Tipo '
					if(resumen2_to_hojauti.bal_egr_drenaje3_cant!=null){
						globals.tabla50[hora]=resumen2_to_hojauti.bal_egr_drenaje3_cant
					}else{
						globals.tabla50[hora]=0
					}
					globals.tabla50[2400]='Drenaje-3  Cant.'
					switch (resumen2_to_hojauti.bal_egr_drenaje4_tipo) {
						case 1:globals.tabla51[hora]='Pleural';break;
						case 2:globals.tabla51[hora]='Cefálico';break;
						case 3:globals.tabla51[hora]='Abdominal';break;
						case 4:globals.tabla51[hora]='Cadera';break;
						case 5:globals.tabla51[hora]='Mediastínico';break;
						case 0:globals.tabla51[hora]='Ninguno';break;
					}			
					globals.tabla51[2400]='Drenaje-4  Tipo '
					if(resumen2_to_hojauti.bal_egr_drenaje4_cant!=null){
						globals.tabla52[hora]=resumen2_to_hojauti.bal_egr_drenaje4_cant
					}else{
						globals.tabla52[hora]=0
					}
					globals.tabla52[2400]='Drenaje-4  Cant.'
					switch (resumen2_to_hojauti.bal_egr_tipo_emesis) {
						case 1:globals.tabla73[hora]='Alimentario';break;
						case 2:globals.tabla73[hora]='Bilis';break;
						case 3:globals.tabla73[hora]='Sangre';break;
						case 4:globals.tabla73[hora]='Moco';break;
						case 5:globals.tabla73[hora]='Pus';break;
						case 0:globals.tabla73[hora]='Ninguno';break;
					}			
					globals.tabla73[2400]='Emesis   Tipo '
					if(resumen2_to_hojauti.bal_egr_cant_emesis!=null){
						globals.tabla74[hora]=resumen2_to_hojauti.bal_egr_cant_emesis
					}else{
						globals.tabla74[hora]=0
					}
					globals.tabla74[2400]='Emesis   Cant.'	
					if(resumen2_to_hojauti.bal_egr_cant_dialisis!=null){
						globals.tabla75[hora]=resumen2_to_hojauti.bal_egr_cant_dialisis
					}else{
						globals.tabla75[hora]=0
					}
					globals.tabla75[2400]='Dialisis  Cant.'	
					globals.tabla76[hora]=0	
					globals.tabla76[hora]= utils.numberFormat((utils.stringToNumber(globals.tabla44[hora])+utils.stringToNumber(globals.tabla46[hora])+utils.stringToNumber(globals.tabla48[hora])+utils.stringToNumber(globals.tabla50[hora])+utils.stringToNumber(globals.tabla52[hora])+utils.stringToNumber(globals.tabla53[hora])+utils.stringToNumber(globals.tabla54[hora])+utils.stringToNumber(globals.tabla55[hora])+utils.stringToNumber(globals.tabla56[hora])+utils.stringToNumber(globals.tabla57[hora])+utils.stringToNumber(globals.tabla58[hora])+utils.stringToNumber(globals.tabla59[hora])+utils.stringToNumber(globals.tabla60[hora])+utils.stringToNumber(globals.tabla61[hora])+utils.stringToNumber(globals.tabla62[hora])+utils.stringToNumber(globals.tabla63[hora])+utils.stringToNumber(globals.tabla64[hora])+utils.stringToNumber(globals.tabla65[hora])+utils.stringToNumber(globals.tabla66[hora])+utils.stringToNumber(globals.tabla67[hora])+utils.stringToNumber(globals.tabla68[hora])+utils.stringToNumber(globals.tabla69[hora])+utils.stringToNumber(globals.tabla70[hora])+utils.stringToNumber(globals.tabla71[hora])+utils.stringToNumber(globals.tabla72[hora])+utils.stringToNumber(globals.tabla74[hora])+utils.stringToNumber(globals.tabla75[hora])),"######")
					globals.tabla76[2400]='Total Horario     '
					globals.tabla77[600]=utils.numberFormat((utils.stringToNumber(globals.tabla77[600])+utils.stringToNumber(globals.tabla76[hora])),"######")
					globals.tabla77[1400]=globals.tabla77[600]
					globals.tabla77[2200]=globals.tabla77[600]
					globals.tabla77[2400]='Total en 24 Hs.  '
					globals.tabla78[600]=utils.numberFormat((utils.stringToNumber(globals.tabla41[600])-utils.stringToNumber(globals.tabla77[600])),"######")
					globals.tabla78[1400]=globals.tabla78[600]
					globals.tabla78[2200]=globals.tabla78[600]
					globals.tabla78[2400]='BALANCE EN 24 HS.  '	
					cargo_tabla=true
					if (hora>=600&&hora<1400){
						globals.tabla2[2500]=utils.numberFormat((utils.stringToNumber(globals.tabla2[2500])+utils.stringToNumber(globals.tabla2[hora])),"######")
						globals.tabla3[2500]=utils.numberFormat((utils.stringToNumber(globals.tabla3[2500])+utils.stringToNumber(globals.tabla3[hora])),"######")
						globals.tabla5[2500]=utils.numberFormat((utils.stringToNumber(globals.tabla5[2500])+utils.stringToNumber(globals.tabla5[hora])),"######")
						globals.tabla7[2500]=utils.numberFormat((utils.stringToNumber(globals.tabla7[2500])+utils.stringToNumber(globals.tabla7[hora])),"######")
						globals.tabla9[2500]=utils.numberFormat((utils.stringToNumber(globals.tabla9[2500])+utils.stringToNumber(globals.tabla9[hora])),"######")
						globals.tabla11[2500]=utils.numberFormat((utils.stringToNumber(globals.tabla11[2500])+utils.stringToNumber(globals.tabla11[hora])),"######")
						globals.tabla13[2500]=utils.numberFormat((utils.stringToNumber(globals.tabla13[2500])+utils.stringToNumber(globals.tabla13[hora])),"######")
						globals.tabla15[2500]=utils.numberFormat((utils.stringToNumber(globals.tabla15[2500])+utils.stringToNumber(globals.tabla15[hora])),"######")
						globals.tabla17[2500]=utils.numberFormat((utils.stringToNumber(globals.tabla17[2500])+utils.stringToNumber(globals.tabla17[hora])),"######")
						globals.tabla19[2500]=utils.numberFormat((utils.stringToNumber(globals.tabla19[2500])+utils.stringToNumber(globals.tabla19[hora])),"######")
						globals.tabla40[2500]=utils.numberFormat((utils.stringToNumber(globals.tabla40[2500])+utils.stringToNumber(globals.tabla40[hora])),"######")
						globals.tabla44[2500]=utils.numberFormat((utils.stringToNumber(globals.tabla44[2500])+utils.stringToNumber(globals.tabla44[hora])),"######")
						globals.tabla46[2500]=utils.numberFormat((utils.stringToNumber(globals.tabla46[2500])+utils.stringToNumber(globals.tabla46[hora])),"######")
						globals.tabla48[2500]=utils.numberFormat((utils.stringToNumber(globals.tabla48[2500])+utils.stringToNumber(globals.tabla48[hora])),"######")
						globals.tabla50[2500]=utils.numberFormat((utils.stringToNumber(globals.tabla50[2500])+utils.stringToNumber(globals.tabla50[hora])),"######")
						globals.tabla52[2500]=utils.numberFormat((utils.stringToNumber(globals.tabla52[2500])+utils.stringToNumber(globals.tabla52[hora])),"######")
						globals.tabla74[2500]=utils.numberFormat((utils.stringToNumber(globals.tabla74[2500])+utils.stringToNumber(globals.tabla74[hora])),"######")
						globals.tabla75[2500]=utils.numberFormat((utils.stringToNumber(globals.tabla75[2500])+utils.stringToNumber(globals.tabla75[hora])),"######")
						globals.tabla76[2500]=utils.numberFormat((utils.stringToNumber(globals.tabla76[2500])+utils.stringToNumber(globals.tabla76[hora])),"######")
						globals.tabla78[2500]=utils.numberFormat((utils.stringToNumber(globals.tabla40[2500])-utils.stringToNumber(globals.tabla76[2500])),"######")
						globals.tabla78[2400]='BALANCE Turno '
					}else{
						if(hora>=1400&&hora<2200){
							globals.tabla2[2600]=utils.numberFormat((utils.stringToNumber(globals.tabla2[2600])+utils.stringToNumber(globals.tabla2[hora])),"######")
							globals.tabla3[2600]=utils.numberFormat((utils.stringToNumber(globals.tabla3[2600])+utils.stringToNumber(globals.tabla3[hora])),"######")
							globals.tabla5[2600]=utils.numberFormat((utils.stringToNumber(globals.tabla5[2600])+utils.stringToNumber(globals.tabla5[hora])),"######")
							globals.tabla7[2600]=utils.numberFormat((utils.stringToNumber(globals.tabla7[2600])+utils.stringToNumber(globals.tabla7[hora])),"######")
							globals.tabla9[2600]=utils.numberFormat((utils.stringToNumber(globals.tabla9[2600])+utils.stringToNumber(globals.tabla9[hora])),"######")
							globals.tabla11[2600]=utils.numberFormat((utils.stringToNumber(globals.tabla11[2600])+utils.stringToNumber(globals.tabla11[hora])),"######")
							globals.tabla13[2600]=utils.numberFormat((utils.stringToNumber(globals.tabla13[2600])+utils.stringToNumber(globals.tabla13[hora])),"######")
							globals.tabla15[2600]=utils.numberFormat((utils.stringToNumber(globals.tabla15[2600])+utils.stringToNumber(globals.tabla15[hora])),"######")
							globals.tabla17[2600]=utils.numberFormat((utils.stringToNumber(globals.tabla17[2600])+utils.stringToNumber(globals.tabla17[hora])),"######")
							globals.tabla19[2600]=utils.numberFormat((utils.stringToNumber(globals.tabla19[2600])+utils.stringToNumber(globals.tabla19[hora])),"######")
							globals.tabla40[2600]=utils.numberFormat((utils.stringToNumber(globals.tabla40[2600])+utils.stringToNumber(globals.tabla40[hora])),"######")
							globals.tabla44[2600]=utils.numberFormat((utils.stringToNumber(globals.tabla44[2600])+utils.stringToNumber(globals.tabla44[hora])),"######")
							globals.tabla46[2600]=utils.numberFormat((utils.stringToNumber(globals.tabla46[2600])+utils.stringToNumber(globals.tabla46[hora])),"######")
							globals.tabla48[2600]=utils.numberFormat((utils.stringToNumber(globals.tabla48[2600])+utils.stringToNumber(globals.tabla48[hora])),"######")
							globals.tabla50[2600]=utils.numberFormat((utils.stringToNumber(globals.tabla50[2600])+utils.stringToNumber(globals.tabla50[hora])),"######")
							globals.tabla52[2600]=utils.numberFormat((utils.stringToNumber(globals.tabla52[2600])+utils.stringToNumber(globals.tabla52[hora])),"######")
							globals.tabla74[2600]=utils.numberFormat((utils.stringToNumber(globals.tabla74[2600])+utils.stringToNumber(globals.tabla74[hora])),"######")
							globals.tabla75[2600]=utils.numberFormat((utils.stringToNumber(globals.tabla75[2600])+utils.stringToNumber(globals.tabla75[hora])),"######")
							globals.tabla76[2600]=utils.numberFormat((utils.stringToNumber(globals.tabla76[2600])+utils.stringToNumber(globals.tabla76[hora])),"######")
							globals.tabla78[2600]=utils.numberFormat((utils.stringToNumber(globals.tabla40[2600])-utils.stringToNumber(globals.tabla76[26])),"######")
							globals.tabla78[2400]='BALANCE Turno '
						}else{
							if((hora>=2200&&hora<2400)||(hora>=0&&hora<600)){
								globals.tabla2[2700]=utils.numberFormat((utils.stringToNumber(globals.tabla2[27])+utils.stringToNumber(globals.tabla2[hora])),"######")
								globals.tabla3[2700]=utils.numberFormat((utils.stringToNumber(globals.tabla3[27])+utils.stringToNumber(globals.tabla3[hora])),"######")
								globals.tabla5[2700]=utils.numberFormat((utils.stringToNumber(globals.tabla5[27])+utils.stringToNumber(globals.tabla5[hora])),"######")
								globals.tabla7[2700]=utils.numberFormat((utils.stringToNumber(globals.tabla7[27])+utils.stringToNumber(globals.tabla7[hora])),"######")
								globals.tabla9[2700]=utils.numberFormat((utils.stringToNumber(globals.tabla9[27])+utils.stringToNumber(globals.tabla9[hora])),"######")
								globals.tabla11[2700]=utils.numberFormat((utils.stringToNumber(globals.tabla11[27])+utils.stringToNumber(globals.tabla11[hora])),"######")
								globals.tabla13[2700]=utils.numberFormat((utils.stringToNumber(globals.tabla13[27])+utils.stringToNumber(globals.tabla13[hora])),"######")
								globals.tabla15[2700]=utils.numberFormat((utils.stringToNumber(globals.tabla15[27])+utils.stringToNumber(globals.tabla15[hora])),"######")
								globals.tabla17[2700]=utils.numberFormat((utils.stringToNumber(globals.tabla17[27])+utils.stringToNumber(globals.tabla17[hora])),"######")
								globals.tabla19[2700]=utils.numberFormat((utils.stringToNumber(globals.tabla19[27])+utils.stringToNumber(globals.tabla19[hora])),"######")
								globals.tabla40[2700]=utils.numberFormat((utils.stringToNumber(globals.tabla40[27])+utils.stringToNumber(globals.tabla40[hora])),"######")
								globals.tabla44[2700]=utils.numberFormat((utils.stringToNumber(globals.tabla44[27])+utils.stringToNumber(globals.tabla44[hora])),"######")
								globals.tabla46[2700]=utils.numberFormat((utils.stringToNumber(globals.tabla46[27])+utils.stringToNumber(globals.tabla46[hora])),"######")
								globals.tabla48[2700]=utils.numberFormat((utils.stringToNumber(globals.tabla48[27])+utils.stringToNumber(globals.tabla48[hora])),"######")
								globals.tabla50[2700]=utils.numberFormat((utils.stringToNumber(globals.tabla50[27])+utils.stringToNumber(globals.tabla50[hora])),"######")
								globals.tabla52[2700]=utils.numberFormat((utils.stringToNumber(globals.tabla52[27])+utils.stringToNumber(globals.tabla52[hora])),"######")
								globals.tabla74[2700]=utils.numberFormat((utils.stringToNumber(globals.tabla74[27])+utils.stringToNumber(globals.tabla74[hora])),"######")
								globals.tabla75[2700]=utils.numberFormat((utils.stringToNumber(globals.tabla73[27])+utils.stringToNumber(globals.tabla75[hora])),"######")
								globals.tabla76[2700]=utils.numberFormat((utils.stringToNumber(globals.tabla76[27])+utils.stringToNumber(globals.tabla76[hora])),"######")
								globals.tabla78[2700]=utils.numberFormat((utils.stringToNumber(globals.tabla40[27])-utils.stringToNumber(globals.tabla76[27])),"######")
								globals.tabla78[2400]='BALANCE Turno '
							}
						}
					}
					globals.tabla2[2800]=utils.numberFormat((utils.stringToNumber(globals.tabla2[2500])+utils.stringToNumber(globals.tabla2[2600])+utils.stringToNumber(globals.tabla2[2700])),"######")
					globals.tabla3[2800]=utils.numberFormat((utils.stringToNumber(globals.tabla3[2500])+utils.stringToNumber(globals.tabla3[2600])+utils.stringToNumber(globals.tabla3[2700])),"######")
					globals.tabla5[2800]=utils.numberFormat((utils.stringToNumber(globals.tabla5[2500])+utils.stringToNumber(globals.tabla5[2600])+utils.stringToNumber(globals.tabla5[2700])),"######")
					globals.tabla7[2800]=utils.numberFormat((utils.stringToNumber(globals.tabla7[2500])+utils.stringToNumber(globals.tabla7[2600])+utils.stringToNumber(globals.tabla7[2700])),"######")
					globals.tabla9[2800]=utils.numberFormat((utils.stringToNumber(globals.tabla9[2500])+utils.stringToNumber(globals.tabla9[2600])+utils.stringToNumber(globals.tabla9[2700])),"######")
					globals.tabla11[2800]=utils.numberFormat((utils.stringToNumber(globals.tabla11[2500])+utils.stringToNumber(globals.tabla11[2600])+utils.stringToNumber(globals.tabla11[2700])),"######")
					globals.tabla13[2800]=utils.numberFormat((utils.stringToNumber(globals.tabla13[2500])+utils.stringToNumber(globals.tabla13[2600])+utils.stringToNumber(globals.tabla13[2700])),"######")
					globals.tabla15[2800]=utils.numberFormat((utils.stringToNumber(globals.tabla15[2500])+utils.stringToNumber(globals.tabla15[2600])+utils.stringToNumber(globals.tabla15[2700])),"######")
					globals.tabla17[2800]=utils.numberFormat((utils.stringToNumber(globals.tabla17[2500])+utils.stringToNumber(globals.tabla17[2600])+utils.stringToNumber(globals.tabla17[2700])),"######")
					globals.tabla19[2800]=utils.numberFormat((utils.stringToNumber(globals.tabla19[2500])+utils.stringToNumber(globals.tabla19[2600])+utils.stringToNumber(globals.tabla19[2700])),"######")
					globals.tabla40[2800]=utils.numberFormat((utils.stringToNumber(globals.tabla40[2500])+utils.stringToNumber(globals.tabla40[2600])+utils.stringToNumber(globals.tabla40[2700])),"######")
					globals.tabla44[2800]=utils.numberFormat((utils.stringToNumber(globals.tabla44[2500])+utils.stringToNumber(globals.tabla44[2600])+utils.stringToNumber(globals.tabla44[2700])),"######")
					globals.tabla46[2800]=utils.numberFormat((utils.stringToNumber(globals.tabla46[2500])+utils.stringToNumber(globals.tabla46[2600])+utils.stringToNumber(globals.tabla46[2700])),"######")
					globals.tabla48[2800]=utils.numberFormat((utils.stringToNumber(globals.tabla48[2500])+utils.stringToNumber(globals.tabla48[2600])+utils.stringToNumber(globals.tabla48[2700])),"######")
					globals.tabla50[2800]=utils.numberFormat((utils.stringToNumber(globals.tabla50[2500])+utils.stringToNumber(globals.tabla50[2600])+utils.stringToNumber(globals.tabla50[2700])),"######")
					globals.tabla52[2800]=utils.numberFormat((utils.stringToNumber(globals.tabla52[2500])+utils.stringToNumber(globals.tabla52[2600])+utils.stringToNumber(globals.tabla52[2700])),"######")
					globals.tabla74[2800]=utils.numberFormat((utils.stringToNumber(globals.tabla74[2500])+utils.stringToNumber(globals.tabla74[2600])+utils.stringToNumber(globals.tabla74[2700])),"######")
					globals.tabla75[2800]=utils.numberFormat((utils.stringToNumber(globals.tabla75[2500])+utils.stringToNumber(globals.tabla75[2600])+utils.stringToNumber(globals.tabla75[2700])),"######")
					globals.tabla76[2800]=utils.numberFormat((utils.stringToNumber(globals.tabla76[2500])+utils.stringToNumber(globals.tabla76[2600])+utils.stringToNumber(globals.tabla76[2700])),"######")
					}
				}
			}
		if(cargo_tabla){
			var tabla='';
			var tabla2='';
			var acumulador=0;
			for(var jj=0;jj<=78;jj++){
				if (jj>9){
					tabla = 'tabla'+ jj.toString().substr(0,2)
				}else{
					tabla = 'tabla'+ jj.toString().substr(0,1)
				}
				if(jj==indice_acum[jj]){
					acumulador=0
					for(var kk=0;kk<=95;kk++){
						if(globals[tabla][indice_hora[kk]]!=0){
							globals[tabla][indice_hora[kk]]=utils.numberFormat((utils.stringToNumber(globals[tabla][indice_hora[kk]])+utils.stringToNumber(acumulador)),"######")
							acumulador=globals[tabla][indice_hora[kk]]
						}
					}
				}
					
			}
			for(var j=0;j<=78;j++){
				if (j>9){
					tabla = 'tabla'+ j.toString().substr(0,2)
				}else{
					tabla = 'tabla'+ j.toString().substr(0,1)
				}
				
				if (globals[tabla][2400]!=''){
					vs_to_hojauti_resumen_rcv.newRecord()
					vs_to_hojauti_resumen_rcv.hiscli=globals.vHiscli
					vs_to_hojauti_resumen_rcv.tipo_opera=globals.vTipoOperador
					vs_to_hojauti_resumen_rcv.nro_operador=globals.vLegajo
					vs_to_hojauti_resumen_rcv.fecha=globals.vFecha
					vs_to_hojauti_resumen_rcv.item=1
					vs_to_hojauti_resumen_rcv.subitems=j
					vs_to_hojauti_resumen_rcv.concepto=globals[tabla][2400]
					vs_to_hojauti_resumen_rcv.turno6='   '+globals[tabla][2500]
					vs_to_hojauti_resumen_rcv.turno14='   '+globals[tabla][2600]
					vs_to_hojauti_resumen_rcv.turno22='   '+globals[tabla][2700]
					vs_to_hojauti_resumen_rcv.total24='   '+globals[tabla][2800]
					for(var k=0;k<=95;k++){
						
						tabla2='hora'+indice_hora[k]
						
							if(globals[tabla][indice_hora[k]]!=0){
								if( globals[tabla][indice_hora[k]]!=''){
									if( globals[tabla][indice_hora[k]]!=null){
										
											vs_to_hojauti_resumen_rcv[tabla2]=globals[tabla][indice_hora[k]]
										
									}else{
										vs_to_hojauti_resumen_rcv[tabla2]=''
									}
								} else{
									vs_to_hojauti_resumen_rcv[tabla2]=globals[tabla][indice_hora[k]]
								}
							}else{
								vs_to_hojauti_resumen_rcv[tabla2]=''
							}
						
					}
				}
			}
		databaseManager.saveData(vs_to_hojauti_resumen_rcv)
	}
	globals.items=1

}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"43037337-CE82-4324-8064-EAD912F589E2"}
 * @AllowToRunInFind
 */
function onShow_resumen_balance_rcv(firstShow, event) {
	globals.vDatasetSql=''
	application.updateUI()
	balance_rcv_new()
	vs_to_hojauti_resumen_rcv.find()
	globals.items=1
	vs_to_hojauti_resumen_rcv.search()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"B839E2B7-3C63-4622-9562-FED8D415227B"}
 */
function onAction_btn_10(event) {
	globals.vRangoHorario=2
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
					  + globals.vHiscli
		
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
 * @properties={typeid:24,uuid:"B29B6A01-D79A-4A8E-A085-898D71359491"}
 */
function onAction_btn_14(event) {
	globals.vRangoHorario=2
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
	hora_tbl[16]='hora1800'
	hora_tbl[17]='hora1815'
	hora_tbl[18]='hora1830'
	hora_tbl[19]='hora1845'
	hora_tbl[20]='hora1900'
	hora_tbl[21]='hora1915'
	hora_tbl[22]='hora1930'
	hora_tbl[23]='hora1945'
	hora_tbl[24]='hora2000'
	hora_tbl[25]='hora2015'
	hora_tbl[26]='hora2030'
	hora_tbl[27]='hora2045'
	hora_tbl[28]='hora2100'
	hora_tbl[29]='hora2115'
	hora_tbl[30]='hora2130'
	hora_tbl[31]='hora2145'
		
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
	hora_as[16]='18:00'
	hora_as[17]='18:15'
	hora_as[18]='18:30'
	hora_as[19]='18:45'
	hora_as[20]='19:00'
	hora_as[21]='19:15'
	hora_as[22]='19:30'
	hora_as[23]='19:45'
	hora_as[24]='20:00'
	hora_as[25]='20:15'
	hora_as[26]='20:30'
	hora_as[27]='20:45'
	hora_as[28]='21:00'
	hora_as[29]='21:15'
	hora_as[30]='21:30'
	hora_as[31]='21:45' 
		
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
		              + hora_tbl[15] + ' as "' + hora_as[15] +'", '
		              + hora_tbl[16] + ' as "' + hora_as[16] +'", '
		              + hora_tbl[17] + ' as "' + hora_as[17] +'", '
		              + hora_tbl[18] + ' as "' + hora_as[18] +'", '
		              + hora_tbl[19] + ' as "' + hora_as[19] +'", '
		              + hora_tbl[20] + ' as "' + hora_as[20] +'", '
		              + hora_tbl[21] + ' as "' + hora_as[21] +'", '
		              + hora_tbl[22] + ' as "' + hora_as[22] +'", '
		              + hora_tbl[23] + ' as "' + hora_as[23] +'", '
		              + hora_tbl[24] + ' as "' + hora_as[24] +'", '
		              + hora_tbl[25] + ' as "' + hora_as[25] +'", '
		              + hora_tbl[26] + ' as "' + hora_as[26] +'", '
		              + hora_tbl[27] + ' as "' + hora_as[27] +'", '
		              + hora_tbl[28] + ' as "' + hora_as[28] +'", '
		              + hora_tbl[29] + ' as "' + hora_as[29] +'", '
		              + hora_tbl[30] + ' as "' + hora_as[30] +'", '
		              + hora_tbl[31] + ' as "' + hora_as[31] +'", '
		              + 'turno14 as "Total 14 a 21:45 Hs", '
					  + 'total24 as "Total 24Hs" '
		              + 'from hojauti_resumen_rcv where hiscli = '
		              + globals.vHiscli + ' and item = 1'
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
 * @properties={typeid:24,uuid:"EBCDC188-F2CF-43A3-9D9C-77B1E4B932BD"}
 */
function onAction_btn_18(event) {
	globals.vRangoHorario=4
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
					  + globals.vHiscli
		
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
 * @properties={typeid:24,uuid:"5A9AD0A6-6A6F-4227-ADEC-35DA36660F6E"}
 */
function onAction_btn_22(event) {
	globals.vRangoHorario=3
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
	hora_tbl[16]='hora200'
	hora_tbl[17]='hora215'
	hora_tbl[18]='hora230'
	hora_tbl[19]='hora245'
	hora_tbl[20]='hora300'
	hora_tbl[21]='hora315'
	hora_tbl[22]='hora330'
	hora_tbl[23]='hora345'
	hora_tbl[24]='hora400'
	hora_tbl[25]='hora415'
	hora_tbl[26]='hora430'
	hora_tbl[27]='hora445'
	hora_tbl[28]='hora500'
	hora_tbl[29]='hora515'
	hora_tbl[30]='hora530'
	hora_tbl[31]='hora545'
		
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
	hora_as[16]='2:00'
	hora_as[17]='2:15'
	hora_as[18]='2:30'
	hora_as[19]='2:45'
	hora_as[20]='3:00'
	hora_as[21]='3:15'
	hora_as[22]='3:30'
	hora_as[23]='3:45'
	hora_as[24]='4:00'
	hora_as[25]='4:15'
	hora_as[26]='4:30'
	hora_as[27]='4:45'
	hora_as[28]='5:00'
	hora_as[29]='5:15'
	hora_as[30]='5:30'
	hora_as[31]='5:45'	
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
		              + hora_tbl[15] + ' as "' + hora_as[15] +'", '
		              + hora_tbl[16] + ' as "' + hora_as[16] +'", '
		              + hora_tbl[17] + ' as "' + hora_as[17] +'", '
		              + hora_tbl[18] + ' as "' + hora_as[18] +'", '
		              + hora_tbl[19] + ' as "' + hora_as[19] +'", '
		              + hora_tbl[20] + ' as "' + hora_as[20] +'", '
		              + hora_tbl[21] + ' as "' + hora_as[21] +'", '
		              + hora_tbl[22] + ' as "' + hora_as[22] +'", '
		              + hora_tbl[23] + ' as "' + hora_as[23] +'", '
		              + hora_tbl[24] + ' as "' + hora_as[24] +'", '
		              + hora_tbl[25] + ' as "' + hora_as[25] +'", '
		              + hora_tbl[26] + ' as "' + hora_as[26] +'", '
		              + hora_tbl[27] + ' as "' + hora_as[27] +'", '
		              + hora_tbl[28] + ' as "' + hora_as[28] +'", '
		              + hora_tbl[29] + ' as "' + hora_as[29] +'", '
		              + hora_tbl[30] + ' as "' + hora_as[30] +'", '
		              + hora_tbl[31] + ' as "' + hora_as[31] +'", '
		              + 'turno22 as "Total 22 a 5:45 Hs", '
					  + 'total24 as "Total 24Hs" '
		              + 'from hojauti_resumen_rcv where hiscli = '
		              + globals.vHiscli + ' and item = 1'
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
 * @properties={typeid:24,uuid:"5806B763-F227-4DDB-8CFB-120AE4A49040"}
 */
function onAction_btn_2(event) {
	globals.vRangoHorario=6
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
					  + globals.vHiscli
		
	var vQuery = globals.vQuerySql;
	var vDataset = databaseManager.getDataSetByQuery("enfermeria", vQuery, null, 5000);
	globals.vDatasetSql='<html>'+vDataset.getAsHTML(true, true, false, true, true)+'</html>';
	application.updateUI()
}

/**
 * @properties={typeid:24,uuid:"238931D5-4398-434E-9F6C-8E3F40B69D2E"}
 * @AllowToRunInFind
 */
function balance_rcv_new() {
	globals.limpiaTablas()
	globals.tabla16[24]=0
	globals.tabla35[24]=0
	globals.tabla36[24]=0
	globals.limpiaTablas()
	globals.tabla16[6]=0
	globals.tabla33[6]=0
	globals.tabla34[6]=0
	var hora_ind=0
	var hora_aux=0
	var final_mes = new Array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);
	globals.vFechaSiguiente=globals.vFecha
	if (globals.vFechaSiguiente==null){
		globals.vFechaSiguiente=application.getServerTimeStamp()
	}
	var resto = globals.vFechaSiguiente.getFullYear() % 4;
	if (resto == 0) final_mes[1] = 29;
	if (final_mes[globals.vFechaSiguiente.getMonth()]==globals.vFechaSiguiente.getDate()){
		if(globals.vFechaSiguiente.getMonth()==11){
			globals.vFechaSiguiente=globals.vFechaSiguiente.setDate(1)
			globals.vFechaSiguiente=globals.vFechaSiguiente.setMonth(0)
			globals.vFechaSiguiente=globals.vFechaSiguiente.setFullYear(globals.vFechaSiguiente.getFullYear()+1)
		}else{
			globals.vFechaSiguiente=globals.vFechaSiguiente.setDate(1)
			globals.vFechaSiguiente=globals.vFechaSiguiente.setMonth(globals.vFechaSiguiente.getMonth()+1)
		}
	}else{
		globals.vFechaSiguiente=globals.vFechaSiguiente.setDate(globals.vFechaSiguiente.getDate()+1)
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
	
	var indice_acum=new Array()
	indice_acum[0]=1
	indice_acum[1]=0  
	indice_acum[2]=2 
	indice_acum[3]=3 
	indice_acum[4]=0
	indice_acum[5]=5  
	indice_acum[6]=0
	indice_acum[7]=7  
	indice_acum[8]=0
	indice_acum[9]=9
	indice_acum[10]=0
	indice_acum[11]=11
	indice_acum[12]=0
	indice_acum[13]=13
	indice_acum[14]=0
	indice_acum[15]=15
	indice_acum[16]=0
	indice_acum[17]=17
	indice_acum[18]=0
	indice_acum[19]=19
	indice_acum[20]=20
	indice_acum[21]=21
	indice_acum[22]=22
	indice_acum[23]=23
	indice_acum[24]=24
	indice_acum[25]=25
	indice_acum[26]=26
	indice_acum[27]=27
	indice_acum[28]=28
	indice_acum[29]=29
	indice_acum[30]=30
	indice_acum[31]=31
	indice_acum[32]=32
	indice_acum[33]=33
	indice_acum[34]=34
	indice_acum[35]=35
	indice_acum[36]=36
	indice_acum[37]=37
	indice_acum[38]=38
	indice_acum[39]=39
	indice_acum[40]=0
	indice_acum[41]=0
	indice_acum[42]=0
	indice_acum[43]=0
	indice_acum[44]=44
	indice_acum[45]=0
	indice_acum[46]=46
	indice_acum[47]=0
	indice_acum[48]=48
	indice_acum[49]=0
	indice_acum[50]=50
	indice_acum[51]=0
	indice_acum[52]=52
	indice_acum[53]=53
	indice_acum[54]=54
	indice_acum[55]=55
	indice_acum[56]=56
	indice_acum[57]=57
	indice_acum[58]=58
	indice_acum[59]=59
	indice_acum[60]=60
	indice_acum[61]=61
	indice_acum[62]=62
	indice_acum[63]=63
	indice_acum[64]=64
	indice_acum[65]=65
	indice_acum[66]=66
	indice_acum[67]=67
	indice_acum[68]=68
	indice_acum[69]=69
	indice_acum[70]=70
	indice_acum[71]=71
	indice_acum[72]=72
	indice_acum[73]=0
	indice_acum[74]=74
	indice_acum[75]=75
	indice_acum[76]=0
	indice_acum[77]=0
	indice_acum[78]=0
			
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
	
	otros_ingreso_resumen_to_hojauti_items.find()
	globals.vTipoOtrosIngresos='otrosing'
	otros_ingreso_resumen_to_hojauti_items.search()
	var tabla3=''
	var y=0	
	var w=0
	var x = 1
	var z = 0
	var concepto_aux
	if (otros_ingreso_resumen_to_hojauti_items.getSize()>0){
		concepto_aux=''
		otros_ingreso_resumen_to_hojauti_items.setSelectedIndex(x)
		
		while(x<=otros_ingreso_resumen_to_hojauti_items.getSize()&&z<10){
			y=z+20
			tabla3 = 'tabla'+ y.toString().substr(0,2)
			concepto_aux=otros_ingreso_resumen_to_hojauti_items.concepto
			globals[tabla3][96]=concepto_aux
			while(x<=otros_ingreso_resumen_to_hojauti_items.getSize()&&concepto_aux==otros_ingreso_resumen_to_hojauti_items.concepto&&z<10){
				if(otros_ingreso_resumen_to_hojauti_items.hora>500){
					hora_aux=otros_ingreso_resumen_to_hojauti_items.hora
					hora_ind=hora_vector(hora_aux)
					globals[tabla3][hora_ind]=utils.numberFormat((utils.stringToNumber(otros_ingreso_resumen_to_hojauti_items.cantidad)),"######")
					if (hora_aux>=600&&hora_aux<1400){
						globals[tabla3][97]=utils.numberFormat((utils.stringToNumber(globals[tabla3][97])+utils.stringToNumber(globals[tabla3][hora_ind])),"######")
					}else{
						if(hora_aux>=1400&&hora_aux<2200){
							globals[tabla3][98]=utils.numberFormat((utils.stringToNumber(globals[tabla3][98])+utils.stringToNumber(globals[tabla3][hora_ind])),"######")
						}else{
							if((hora_aux>=2200&&hora_aux<2400)||(hora_aux>=0&&hora_aux<600)){
								globals[tabla3][99]=utils.numberFormat((utils.stringToNumber(globals[tabla3][99])+utils.stringToNumber(globals[tabla3][hora_ind])),"######")
							}
						}
					}
					globals[tabla3][100]=utils.numberFormat((utils.stringToNumber(globals[tabla3][97])+utils.stringToNumber(globals[tabla3][98])+utils.stringToNumber(globals[tabla3][99])),"######")
					++z	
				}
				otros_ingreso_resumen_to_hojauti_items.setSelectedIndex(++x)
			}
		}
	}else{
		for(var v=0;v<10;v++){
			y=v+20
			tabla3 = 'tabla'+ y.toString().substr(0,2)
			for(w=0;w<=100;w++){
				globals[tabla3][w]=0
			}
			globals[tabla3][96]=''
		}
	}
	tabla3=''
	y=0	
	w=0
	x = 1
	z = 0
	otros_ingreso_resumen2_to_hojauti_items.find()
	globals.vTipoOtrosIngresos='otrosing'
	otros_ingreso_resumen2_to_hojauti_items.search()
	if (otros_ingreso_resumen2_to_hojauti_items.getSize()>0){
		concepto_aux=''
		otros_ingreso_resumen2_to_hojauti_items.setSelectedIndex(x)
		
		while(x<=otros_ingreso_resumen2_to_hojauti_items.getSize()&&z<10){
			y=z+30
			tabla3 = 'tabla'+ y.toString().substr(0,2)
			concepto_aux=otros_ingreso_resumen2_to_hojauti_items.concepto
			globals[tabla3][96]=concepto_aux
			while(x<=otros_ingreso_resumen2_to_hojauti_items.getSize()&&concepto_aux==otros_ingreso_resumen2_to_hojauti_items.concepto&&z<10){
				if(otros_ingreso_resumen2_to_hojauti_items.hora<600||otros_ingreso_resumen2_to_hojauti_items.hora>=2200){
					hora_aux=otros_ingreso_resumen2_to_hojauti_items.hora
					hora_ind=hora_vector(hora_aux)
					globals[tabla3][hora_ind]=utils.numberFormat((utils.stringToNumber(otros_ingreso_resumen2_to_hojauti_items.cantidad)),"######")
					
					if (hora_aux>=600&&hora_aux<1400){
						globals[tabla3][97]=utils.numberFormat((utils.stringToNumber(globals[tabla3][97])+utils.stringToNumber(globals[tabla3][hora_ind])),"######")
					}else{
						if(hora_aux>=1400&&hora_aux<2200){
							globals[tabla3][98]=utils.numberFormat((utils.stringToNumber(globals[tabla3][98])+utils.stringToNumber(globals[tabla3][hora_ind])),"######")
						}else{
							if((hora_aux>=2200&&hora_aux<2400)||(hora_aux>=0&&hora_aux<600)){
								globals[tabla3][99]=utils.numberFormat((utils.stringToNumber(globals[tabla3][99])+utils.stringToNumber(globals[tabla3][hora_ind])),"######")
							}
						}
					}
					globals[tabla3][100]=utils.numberFormat((utils.stringToNumber(globals[tabla3][97])+utils.stringToNumber(globals[tabla3][98])+utils.stringToNumber(globals[tabla3][99])),"######")
					++z
				}
				otros_ingreso_resumen2_to_hojauti_items.setSelectedIndex(++x)
			}
			
		}
	}else{
		for(var u=0;u<10;u++){
			y=u+30
			tabla3 = 'tabla'+ y.toString().substr(0,2)
			for(w=0;w<=100;w++){
				globals[tabla3][w]=0
			}
			globals[tabla3][96]=''
		}
	}
	
	var tabla4=''
	var p=0	
	var n = 1
	var m = 0
	otros_egresos_resumen_to_hojauti_items.find()
	globals.vTipoOtrosEgresos='otrosegr'
	otros_egresos_resumen_to_hojauti_items.search()
	if (otros_egresos_resumen_to_hojauti_items.getSize()>0){
		concepto_aux=''
		otros_egresos_resumen_to_hojauti_items.setSelectedIndex(n)
		
		while(n<=otros_egresos_resumen_to_hojauti_items.getSize()&&m<10){
			p=m+53
			tabla4 = 'tabla'+ p.toString().substr(0,2)
			concepto_aux=otros_egresos_resumen_to_hojauti_items.concepto
			globals[tabla4][96]=concepto_aux
			
			while(n<=otros_egresos_resumen_to_hojauti_items.getSize()&&concepto_aux==otros_egresos_resumen_to_hojauti_items.concepto&&m<10){
				if(otros_egresos_resumen_to_hojauti_items.hora>500){
					hora_aux=otros_egresos_resumen_to_hojauti_items.hora
					hora_ind=hora_vector(hora_aux)
					globals[tabla4][hora_ind]=utils.numberFormat((utils.stringToNumber(otros_egresos_resumen_to_hojauti_items.cantidad)),"#####")
					
					if (hora_aux>=600&&hora_aux<1400){
						globals[tabla4][97]=utils.numberFormat((utils.stringToNumber(globals[tabla4][97])+utils.stringToNumber(globals[tabla4][hora_ind])),"######")
					}else{
						if(hora_aux>=1400&&hora_aux<2200){
							globals[tabla4][98]=utils.numberFormat((utils.stringToNumber(globals[tabla4][98])+utils.stringToNumber(globals[tabla4][hora_ind])),"######")
						}else{
							if((hora_aux>=2200&&hora_aux<2400)||(hora_aux>=0&&hora_aux<600)){
								globals[tabla4][99]=utils.numberFormat((utils.stringToNumber(globals[tabla4][99])+utils.stringToNumber(globals[tabla4][hora_ind])),"######")
							}
						}
					}
					globals[tabla4][100]=utils.numberFormat((utils.stringToNumber(globals[tabla4][97])+utils.stringToNumber(globals[tabla4][98])+utils.stringToNumber(globals[tabla4][99])),"######")
					++m
				}
				otros_egresos_resumen_to_hojauti_items.setSelectedIndex(++n)
			}
		}
	}else{
		for(var t=0;t<10;t++){
			p=t+53
			tabla4 = 'tabla'+ p.toString().substr(0,2)
			for(w=0;w<=100;w++){
					globals[tabla4][w]=0
			}
			globals[tabla4][96]=''
		}
	}	
	tabla4=''
	p=0	
	n = 1
	m = 0
	otros_egresos_resumen2_to_hojauti_items.find()
	globals.vTipoOtrosEgresos='otrosegr'
	otros_egresos_resumen2_to_hojauti_items.search()
	if (otros_egresos_resumen2_to_hojauti_items.getSize()>0){
		concepto_aux=''
		otros_egresos_resumen2_to_hojauti_items.setSelectedIndex(n)
		
		while(n<=otros_egresos_resumen2_to_hojauti_items.getSize()&&m<5){
			
			p=m+63
			tabla4 = 'tabla'+ p.toString().substr(0,2)
			concepto_aux=otros_egresos_resumen2_to_hojauti_items.concepto
			globals[tabla4][96]=concepto_aux
			
			while(n<=otros_egresos_resumen2_to_hojauti_items.getSize()&&concepto_aux==otros_egresos_resumen2_to_hojauti_items.concepto&&m<10){
				if(otros_egresos_resumen2_to_hojauti_items.hora<600||otros_egresos_resumen2_to_hojauti_items.hora>=2200){
					hora_aux=otros_egresos_resumen2_to_hojauti_items.hora
					hora_ind=hora_vector(hora_aux)
					globals[tabla4][hora_ind]=utils.numberFormat((utils.stringToNumber(otros_egresos_resumen2_to_hojauti_items.cantidad)),"#####")
					
					if (hora_aux>=600&&hora_aux<1400){
						globals[tabla4][97]=utils.numberFormat((utils.stringToNumber(globals[tabla4][97])+utils.stringToNumber(globals[tabla4][hora_ind])),"######")
					}else{
						if(hora_aux>=1400&&hora_aux<2200){
							globals[tabla4][98]=utils.numberFormat((utils.stringToNumber(globals[tabla4][98])+utils.stringToNumber(globals[tabla4][hora_ind])),"######")
						}else{
							if((hora_aux>=2200&&hora_aux<2400)||(hora_aux>=0&&hora_aux<600)){
								globals[tabla4][99]=utils.numberFormat((utils.stringToNumber(globals[tabla4][99])+utils.stringToNumber(globals[tabla4][hora_ind])),"######")
							}
						}
					}
					globals[tabla4][100]=utils.numberFormat((utils.stringToNumber(globals[tabla4][97])+utils.stringToNumber(globals[tabla4][98])+utils.stringToNumber(globals[tabla4][99])),"######")
					++m
				}
				otros_egresos_resumen2_to_hojauti_items.setSelectedIndex(++n)
			}
		}
	}
	/*
	globals.tabla0[2346]= '  Concepto   ';
	globals.tabla0[600]='6:00'
	globals.tabla0[615]='6:15'
	globals.tabla0[630]='6:30'
	globals.tabla0[645]='6:45'
	globals.tabla0[700]='7:00'
	globals.tabla0[715]='7:15'
	globals.tabla0[730]='7:30'
	globals.tabla0[745]='7:45'
	globals.tabla0[800]='8:00'
	globals.tabla0[815]='8:15'
	globals.tabla0[830]='8:30'
	globals.tabla0[845]='8:45'
	globals.tabla0[900]='9:00'
	globals.tabla0[915]='9:15'
	globals.tabla0[930]='9:30'
	globals.tabla0[945]='9:45'
	globals.tabla0[0]='0:00'
	globals.tabla0[15]='0:15'
	globals.tabla0[30]='0:30'
	globals.tabla0[45]='0:45'
	globals.tabla0[100]='1:00'
	globals.tabla0[115]='1:15'
	globals.tabla0[130]='1:30'
	globals.tabla0[145]='1:45'
	globals.tabla0[200]='2:00'
	globals.tabla0[215]='2:15'
	globals.tabla0[230]='2:30'
	globals.tabla0[245]='2:45'
	globals.tabla0[300]='3:00'
	globals.tabla0[315]='3:15'
	globals.tabla0[330]='3:30'
	globals.tabla0[345]='3:45'
	globals.tabla0[400]='4:00'
	globals.tabla0[415]='4:15'
	globals.tabla0[430]='4:30'
	globals.tabla0[445]='4:45'
	globals.tabla0[500]='5:00'
	globals.tabla0[515]='5:15'
	globals.tabla0[530]='5:30'
	globals.tabla0[545]='5:45'
	globals.tabla0[1000]='10:00'
	globals.tabla0[1015]='10:15'
	globals.tabla0[1030]='10:30'
	globals.tabla0[1045]='10:45'
	globals.tabla0[1100]='11:00'
	globals.tabla0[1115]='11:15'
	globals.tabla0[1130]='11:30'
	globals.tabla0[1145]='11:45'
	globals.tabla0[1200]='12:00'
	globals.tabla0[1215]='12:15'
	globals.tabla0[1230]='12:30'
	globals.tabla0[1245]='12:45'
	globals.tabla0[1300]='13:00'
	globals.tabla0[1315]='13:15'
	globals.tabla0[1330]='13:30'
	globals.tabla0[1345]='13:45'
	globals.tabla0[1400]='14:00'
	globals.tabla0[1415]='14:15'
	globals.tabla0[1430]='14:30'
	globals.tabla0[1445]='14:45'
	globals.tabla0[1500]='15:00'
	globals.tabla0[1515]='15:15'
	globals.tabla0[1530]='15:30'
	globals.tabla0[1545]='15:45'
	globals.tabla0[1600]='16:00'
	globals.tabla0[1615]='16:15'
	globals.tabla0[1630]='16:30'
	globals.tabla0[1645]='16:45'
	globals.tabla0[1700]='17:00'
	globals.tabla0[1715]='17:15'
	globals.tabla0[1730]='17:30'
	globals.tabla0[1745]='17:45'
	globals.tabla0[1800]='18:00'
	globals.tabla0[1815]='18:15'
	globals.tabla0[1830]='18:30'
	globals.tabla0[1845]='18:45'
	globals.tabla0[1900]='19:00'
	globals.tabla0[1915]='19:15'
	globals.tabla0[1930]='19:30'
	globals.tabla0[1945]='19:45'
	globals.tabla0[2000]='20:00'
	globals.tabla0[2015]='20:15'
	globals.tabla0[2030]='20:30'
	globals.tabla0[2045]='20:45'
	globals.tabla0[2100]='21:00'
	globals.tabla0[2115]='21:15'
	globals.tabla0[2130]='21:30'
	globals.tabla0[2145]='21:45'
	globals.tabla0[2200]='22:00'
	globals.tabla0[2215]='22:15'
	globals.tabla0[2230]='22:30'
	globals.tabla0[2245]='22:45'
	globals.tabla0[2300]='23:00'
	globals.tabla0[2315]='23:15'
	globals.tabla0[2330]='23:30'
	globals.tabla0[2345]='23:45'
	*/
	globals.tabla42[0]='0:00'
	globals.tabla42[1]='0:15'
	globals.tabla42[2]='0:30'
	globals.tabla42[3]='0:45'
	globals.tabla42[4]='1:00'
	globals.tabla42[5]='1:15'
	globals.tabla42[6]='1:30'
	globals.tabla42[7]='1:45'
	globals.tabla42[8]='2:00'
	globals.tabla42[9]='2:15'
	globals.tabla42[10]='2:30'
	globals.tabla42[11]='2:45'
	globals.tabla42[12]='3:00'
	globals.tabla42[13]='3:15'
	globals.tabla42[14]='3:30'
	globals.tabla42[15]='3:45'
	globals.tabla42[16]='4:00'
	globals.tabla42[17]='4:15'
	globals.tabla42[18]='4:30'
	globals.tabla42[19]='4:45'
	globals.tabla42[20]='5:00'
	globals.tabla42[21]='5:15'
	globals.tabla42[22]='5:30'
	globals.tabla42[23]='5:45'
	globals.tabla42[24]='6:00'
	globals.tabla42[25]='6:15'
	globals.tabla42[26]='6:30'
	globals.tabla42[27]='6:45'
	globals.tabla42[28]='7:00'
	globals.tabla42[29]='7:15'
	globals.tabla42[30]='7:30'
	globals.tabla42[31]='7:45'
	globals.tabla42[32]='8:00'
	globals.tabla42[33]='8:15'
	globals.tabla42[34]='8:30'
	globals.tabla42[35]='8:45'
	globals.tabla42[36]='9:00'
	globals.tabla42[37]='9:15'
	globals.tabla42[38]='9:30'
	globals.tabla42[39]='9:45'
	globals.tabla42[40]='10:00'
	globals.tabla42[41]='10:15'
	globals.tabla42[42]='10:30'
	globals.tabla42[43]='10:45'
	globals.tabla42[44]='11:00'
	globals.tabla42[45]='11:15'
	globals.tabla42[46]='11:30'
	globals.tabla42[47]='11:45'
	globals.tabla42[48]='12:00'
	globals.tabla42[49]='12:15'
	globals.tabla42[50]='12:30'
	globals.tabla42[51]='12:45'
	globals.tabla42[52]='13:00'
	globals.tabla42[53]='13:15'
	globals.tabla42[54]='13:30'
	globals.tabla42[55]='13:45'
	globals.tabla42[56]='14:00'
	globals.tabla42[57]='14:15'
	globals.tabla42[58]='14:30'
	globals.tabla42[59]='14:45'
	globals.tabla42[60]='15:00'
	globals.tabla42[61]='15:15'
	globals.tabla42[62]='15:30'
	globals.tabla42[63]='15:45'
	globals.tabla42[64]='16:00'
	globals.tabla42[65]='16:15'
	globals.tabla42[66]='16:30'
	globals.tabla42[67]='16:45'
	globals.tabla42[68]='17:00'
	globals.tabla42[69]='17:15'
	globals.tabla42[70]='17:30'
	globals.tabla42[71]='17:45'
	globals.tabla42[72]='18:00'
	globals.tabla42[73]='18:15'
	globals.tabla42[74]='18:30'
	globals.tabla42[75]='18:45'
	globals.tabla42[76]='19:00'
	globals.tabla42[77]='19:15'
	globals.tabla42[78]='19:30'
	globals.tabla42[79]='19:45'
	globals.tabla42[80]='20:00'
	globals.tabla42[81]='20:15'
	globals.tabla42[82]='20:30'
	globals.tabla42[83]='20:45'
	globals.tabla42[84]='21:00'
	globals.tabla42[85]='21:15'
	globals.tabla42[86]='21:30'
	globals.tabla42[87]='21:45'
	globals.tabla42[88]='22:00'
	globals.tabla42[89]='22:15'
	globals.tabla42[90]='22:30'
	globals.tabla42[91]='22:45'
	globals.tabla42[92]='23:00'
	globals.tabla42[93]='23:15'
	globals.tabla42[94]='23:30'
	globals.tabla42[95]='23:45'
	globals.tabla42[96]='  Concepto   ';
	
	var hora=0;
	var cargo_tabla=false;
	if(resumen_to_hojauti.getSize()>0){
		for(var i=1;i<=resumen_to_hojauti.getSize();i++){
			resumen_to_hojauti.setSelectedIndex(i)
			if(resumen_to_hojauti.hora>500){
				if(resumen_to_hojauti.hora<1000){
					hora_ind=resumen_to_hojauti.hora.toString().substr(0,3)
				}else{
					hora_ind=resumen_to_hojauti.hora.toString().substr(0,4)
				}
				hora=hora_vector(hora_ind)
				switch (resumen_to_hojauti.bal_ing_hidrata_tipo) {
					case 1:globals.tabla1[hora]='V.Oral';break;
					case 2:globals.tabla1[hora]='V.Parent.';break;
					case 3:globals.tabla1[hora]='V.Enteral.';break;
					case 0:globals.tabla1[hora]='Ninguna';break;
					default:globals.tabla1[hora]='';break;
				}
				globals.tabla1[96]='Hidratacion Tipo ' 
				if(resumen_to_hojauti.bal_ing_hidrata_cant!=null){
					if(hora>600){
						globals.tabla2[hora]=globals.tabla2[hora-1]+resumen_to_hojauti.bal_ing_hidrata_cant
					}else{
						globals.tabla2[hora]=resumen_to_hojauti.bal_ing_hidrata_cant
					}
				}else{
					globals.tabla2[hora]=0
				}	
				globals.tabla2[96]='Hidratacion Cant. '
				if(resumen_to_hojauti.bal_ing_dilucion!=null){
					globals.tabla3[hora]=resumen_to_hojauti.bal_ing_dilucion
				}else{
					globals.tabla3[hora]=0
				}
				
				globals.tabla3[96]='Dilución          '
				switch (resumen_to_hojauti.bal_ing_expansion_tipo) {
					case 1:globals.tabla4[hora]='Sol.Fisio';break;
					case 2:globals.tabla4[hora]='Ringer L.';break;
					case 3:globals.tabla4[hora]='Voluven';break;
					case 4:globals.tabla4[hora]='Haemaccel';break;
					case 5:globals.tabla4[hora]='Albumina';break;
					case 0:globals.tabla4[hora]='Ninguna';break;
					default:globals.tabla4[hora]='';break;
				}	
				globals.tabla4[96]='Expansión Tipo    '
				if(resumen_to_hojauti.bal_ing_expansion_cant!=null){
					globals.tabla5[hora]=resumen_to_hojauti.bal_ing_expansion_cant
				}else{
					globals.tabla5[hora]=0
				}
				globals.tabla5[96]='Expansión Cant.   '
				switch (resumen_to_hojauti.bal_ing_sangre_tipo) {
					case 1:globals.tabla6[hora]='Glob.Rojo';break;
					case 2:globals.tabla6[hora]='Plasma';break;
					case 3:globals.tabla6[hora]='Plaquetas';break;
					case 0:globals.tabla6[hora]='Ninguno';break;
				}		
				globals.tabla6[96]='Sangre Tipo       '
				if(resumen_to_hojauti.bal_ing_sangre_cant!=null){
					globals.tabla7[hora]=resumen_to_hojauti.bal_ing_sangre_cant
				}else{
					globals.tabla7[hora]=0
				}
				globals.tabla7[96]='Sangre Cant.      '
				switch (resumen_to_hojauti.bal_ing_alimen_tipo) {
					case 1:globals.tabla8[hora]='Enteral';break;
					case 2:globals.tabla8[hora]='Parenteral';break;
					case 3:globals.tabla8[hora]='Oral';break;
					case 0:globals.tabla8[hora]='Ninguno';break;
				}			
				globals.tabla8[96]='Alimentación Tipo '
				if(resumen_to_hojauti.bal_ing_alimen_cant!=null){
					globals.tabla9[hora]=resumen_to_hojauti.bal_ing_alimen_cant
				}else{
					globals.tabla9[hora]=0
				}
				globals.tabla9[96]='Alimentación Cant.'
				switch (resumen_to_hojauti.bal_ing_bic_1_tipo) {
				case 1:globals.tabla10[hora]='NTG      ';break;
				case 2:globals.tabla10[hora]='Fioritina';break;
				case 3:globals.tabla10[hora]='Milrinona';break;
				case 4:globals.tabla10[hora]='Ipsilon  ';break;
				case 5:globals.tabla10[hora]='Analgesia';break;
				case 6:globals.tabla10[hora]='Dobutamina';break;
				case 7:globals.tabla10[hora]='Dopamina  ';break;
				case 8:globals.tabla10[hora]='NPS       ';break;
				case 9:globals.tabla10[hora]='Biascor   ';break;
				case 10:globals.tabla10[hora]='Fentanilo ';break;
				case 11:globals.tabla10[hora]='Tiopenthal';break;
				case 12:globals.tabla10[hora]='Propofol  ';break;
				case 13:globals.tabla10[hora]='Midazolam ';break;
				case 14:globals.tabla10[hora]='Sedo-Analgesia';break;
				case 15:globals.tabla10[hora]='Fentanilo ';break;
				case 16:globals.tabla10[hora]='Lasix     ';break;
				case 17:globals.tabla10[hora]='Amiodarona ';break;
				case 0:globals.tabla10[hora]='Ninguna';break;
			}	
			globals.tabla10[96]='BIC-1   Tipo      '	
			if(resumen_to_hojauti.bal_ing_bic_1_cant!=null){
				globals.tabla11[hora]=resumen_to_hojauti.bal_ing_bic_1_cant
			}else{
				globals.tabla11[hora]=0
			}
			globals.tabla11[96]='BIC-1   Cant.     '
			switch (resumen_to_hojauti.bal_ing_bic_2_tipo) {
				case 1:globals.tabla12[hora]='NTG      ';break;
				case 2:globals.tabla12[hora]='Fioritina';break;
				case 3:globals.tabla12[hora]='Milrinona';break;
				case 4:globals.tabla12[hora]='Ipsilon  ';break;
				case 5:globals.tabla12[hora]='Analgesia';break;
				case 6:globals.tabla12[hora]='Dobutamina';break;
				case 7:globals.tabla12[hora]='Dopamina  ';break;
				case 8:globals.tabla12[hora]='NPS       ';break;
				case 9:globals.tabla12[hora]='Biascor   ';break;
				case 10:globals.tabla12[hora]='Fentanilo ';break;
				case 11:globals.tabla12[hora]='Tiopenthal';break;
				case 12:globals.tabla12[hora]='Propofol  ';break;
				case 13:globals.tabla12[hora]='Midazolam ';break;
				case 14:globals.tabla12[hora]='Sedo-Analgesia';break;
				case 15:globals.tabla12[hora]='Fentanilo ';break;
				case 16:globals.tabla12[hora]='Lasix     ';break;
				case 17:globals.tabla12[hora]='Amiodarona ';break;
				case 0:globals.tabla12[hora]='Ninguna';break;
			}	
			globals.tabla12[96]='BIC-2   Tipo      '
			if(resumen_to_hojauti.bal_ing_bic_2_cant!=null){
				globals.tabla13[hora]=resumen_to_hojauti.bal_ing_bic_2_cant
			}else{
				globals.tabla13[hora]=0
			}
			globals.tabla13[96]='BIC-2   Cant.     '
			switch (resumen_to_hojauti.bal_ing_bic_3_tipo) {
				case 1:globals.tabla14[hora]='NTG      ';break;
				case 2:globals.tabla14[hora]='Fioritina';break;
				case 3:globals.tabla14[hora]='Milrinona';break;
				case 4:globals.tabla14[hora]='Ipsilon  ';break;
				case 5:globals.tabla14[hora]='Analgesia';break;
				case 6:globals.tabla14[hora]='Dobutamina';break;
				case 7:globals.tabla14[hora]='Dopamina  ';break;
				case 8:globals.tabla14[hora]='NPS       ';break;
				case 9:globals.tabla14[hora]='Biascor   ';break;
				case 10:globals.tabla14[hora]='Fentanilo ';break;
				case 11:globals.tabla14[hora]='Tiopenthal';break;
				case 12:globals.tabla14[hora]='Propofol  ';break;
				case 13:globals.tabla14[hora]='Midazolam ';break;
				case 14:globals.tabla14[hora]='Sedo-Analgesia';break;
				case 15:globals.tabla14[hora]='Fentanilo ';break;
				case 16:globals.tabla14[hora]='Lasix     ';break;
				case 17:globals.tabla14[hora]='Amiodarona ';break;
				case 0:globals.tabla14[hora]='Ninguna';break;
			}	
			globals.tabla14[96]='BIC-3   Tipo      '	
			if(resumen_to_hojauti.bal_ing_bic_3_cant!=null){
				globals.tabla15[hora]=resumen_to_hojauti.bal_ing_bic_3_cant
			}else{
				globals.tabla15[hora]=0
			}
			globals.tabla15[96]='BIC-3   Cant.     '
			switch (resumen_to_hojauti.bal_ing_bic_4_tipo) {
				case 1:globals.tabla16[hora]='NTG      ';break;
				case 2:globals.tabla16[hora]='Fioritina';break;
				case 3:globals.tabla16[hora]='Milrinona';break;
				case 4:globals.tabla16[hora]='Ipsilon  ';break;
				case 5:globals.tabla16[hora]='Analgesia';break;
				case 6:globals.tabla16[hora]='Dobutamina';break;
				case 7:globals.tabla16[hora]='Dopamina  ';break;
				case 8:globals.tabla16[hora]='NPS       ';break;
				case 9:globals.tabla16[hora]='Biascor   ';break;
				case 10:globals.tabla16[hora]='Fentanilo ';break;
				case 11:globals.tabla16[hora]='Tiopenthal';break;
				case 12:globals.tabla16[hora]='Propofol  ';break;
				case 13:globals.tabla16[hora]='Midazolam ';break;
				case 14:globals.tabla16[hora]='Sedo-Analgesia';break;
				case 15:globals.tabla16[hora]='Fentanilo ';break;
				case 16:globals.tabla16[hora]='Lasix     ';break;
				case 17:globals.tabla16[hora]='Amiodarona ';break;
				case 0:globals.tabla16[hora]='Ninguna';break;
			}	
			globals.tabla16[96]='BIC-4   Tipo      '	
			if(resumen_to_hojauti.bal_ing_bic_4_cant!=null){
				globals.tabla17[hora]=resumen_to_hojauti.bal_ing_bic_4_cant
			}else{
				globals.tabla17[hora]=0
			}
			globals.tabla17[96]='BIC-4   Cant.     '
			switch (resumen_to_hojauti.bal_ing_bic_5_tipo) {
				case 1:globals.tabla18[hora]='NTG      ';break;
				case 2:globals.tabla18[hora]='Fioritina';break;
				case 3:globals.tabla18[hora]='Milrinona';break;
				case 4:globals.tabla18[hora]='Ipsilon  ';break;
				case 5:globals.tabla18[hora]='Analgesia';break;
				case 6:globals.tabla18[hora]='Dobutamina';break;
				case 7:globals.tabla18[hora]='Dopamina  ';break;
				case 8:globals.tabla18[hora]='NPS       ';break;
				case 9:globals.tabla18[hora]='Biascor   ';break;
				case 10:globals.tabla18[hora]='Fentanilo ';break;
				case 11:globals.tabla18[hora]='Tiopenthal';break;
				case 12:globals.tabla18[hora]='Propofol  ';break;
				case 13:globals.tabla18[hora]='Midazolam ';break;
				case 14:globals.tabla18[hora]='Sedo-Analgesia';break;
				case 15:globals.tabla18[hora]='Fentanilo ';break;
				case 16:globals.tabla18[hora]='Lasix     ';break;
				case 17:globals.tabla18[hora]='Amiodarona ';break;
				case 0:globals.tabla18[hora]='Ninguna';break;
			}	
			globals.tabla18[96]='BIC-5   Tipo      '	
			if(resumen_to_hojauti.bal_ing_bic_5_cant!=null){
				globals.tabla19[hora]=resumen_to_hojauti.bal_ing_bic_5_cant
			}else{
				globals.tabla19[hora]=0
			}
			globals.tabla19[96]='BIC-5   Cant.     '
			//-- Busca Otros Ingresos -----
				globals.vHora=hora
				//if (hora>9){
				//	globals.vHora=globals.vHora.toString().substr(0,2)+'00'
				//}else{
					//globals.vHora=globals.vHora.toString().substr(0,1)+'00'
				//}
				
				globals.tabla40[hora]=0	
				globals.tabla40[hora]= utils.numberFormat((utils.stringToNumber(globals.tabla2[hora])+utils.stringToNumber(globals.tabla3[hora])+utils.stringToNumber(globals.tabla5[hora])+utils.stringToNumber(globals.tabla7[hora])+utils.stringToNumber(globals.tabla9[hora])+utils.stringToNumber(globals.tabla11[hora])+utils.stringToNumber(globals.tabla13[hora])+utils.stringToNumber(globals.tabla15[hora])+utils.stringToNumber(globals.tabla17[hora])+utils.stringToNumber(globals.tabla19[hora])+utils.stringToNumber(globals.tabla20[hora])+utils.stringToNumber(globals.tabla21[hora])+utils.stringToNumber(globals.tabla22[hora])+utils.stringToNumber(globals.tabla23[hora])+utils.stringToNumber(globals.tabla24[hora])+utils.stringToNumber(globals.tabla25[hora])+utils.stringToNumber(globals.tabla26[hora])+utils.stringToNumber(globals.tabla27[hora])+utils.stringToNumber(globals.tabla28[hora])+utils.stringToNumber(globals.tabla29[hora])+utils.stringToNumber(globals.tabla30[hora])+utils.stringToNumber(globals.tabla31[hora])+utils.stringToNumber(globals.tabla32[hora])+utils.stringToNumber(globals.tabla33[hora])+utils.stringToNumber(globals.tabla34[hora])+utils.stringToNumber(globals.tabla35[hora])+utils.stringToNumber(globals.tabla36[hora])+utils.stringToNumber(globals.tabla37[hora])+utils.stringToNumber(globals.tabla38[hora])+utils.stringToNumber(globals.tabla39[hora])),"######")
				globals.tabla40[96]='Total Horario     '
				globals.tabla41[24]=utils.numberFormat((utils.stringToNumber(globals.tabla41[24])+utils.stringToNumber(globals.tabla40[hora])),"######")
				globals.tabla41[40]=globals.tabla41[24]
				globals.tabla41[56]=globals.tabla41[24]
				globals.tabla41[72]=globals.tabla41[24]
				globals.tabla41[88]=globals.tabla41[24]
				globals.tabla41[8]=globals.tabla41[24]
				globals.tabla41[96]='Total en 24 Hs.  '
					
				globals.tabla42[96]= '  Concepto   ';
				if (hora_ind.length==3){
					globals.tabla42[hora]= hora_ind.substr(0,1)+":"+hora_ind.substr(1,2)
				}else{
					globals.tabla42[hora]= hora_ind.substr(0,2)+":"+hora_ind.substr(2,2)
				}
					
				switch (resumen_to_hojauti.bal_egr_diuresis_tipo) {
					case 1:globals.tabla43[hora]='Pañal';break;
					case 2:globals.tabla43[hora]='Enteral';break;
					case 3:globals.tabla43[hora]='Sonda Vesical';break;
					case 4:globals.tabla43[hora]='Micción Espontánea';break;
					case 0:globals.tabla43[hora]='Ninguno';break;
				}			
				globals.tabla43[96]='Diuresis Tipo '
				if(resumen_to_hojauti.bal_egr_diuresis_cant!=null){
					globals.tabla44[hora]=resumen_to_hojauti.bal_egr_diuresis_cant
				}else{
					globals.tabla44[hora]=0
				}
				globals.tabla44[96]='Diuresis Cant.'	
				switch (resumen_to_hojauti.bal_egr_drenaje1_tipo) {
					case 1:globals.tabla45[hora]='Pleural';break;
					case 2:globals.tabla45[hora]='Cefálico';break;
					case 3:globals.tabla45[hora]='Abdominal';break;
					case 4:globals.tabla45[hora]='Cadera';break;
					case 5:globals.tabla45[hora]='Mediastínico';break;
					case 0:globals.tabla45[hora]='Ninguno';break;
				}			
				globals.tabla45[96]='Drenaje-1  Tipo '
				if(resumen_to_hojauti.bal_egr_drenaje1_cant!=null){
					globals.tabla46[hora]=resumen_to_hojauti.bal_egr_drenaje1_cant
				}else{
					globals.tabla46[hora]=0
				}
				globals.tabla46[96]='Drenaje-1  Cant.'	
				switch (resumen_to_hojauti.bal_egr_drenaje2_tipo) {
					case 1:globals.tabla47[hora]='Pleural';break;
					case 2:globals.tabla47[hora]='Cefálico';break;
					case 3:globals.tabla47[hora]='Abdominal';break;
					case 4:globals.tabla47[hora]='Cadera';break;
					case 5:globals.tabla47[hora]='Mediastínico';break;
					case 0:globals.tabla47[hora]='Ninguno';break;
				}			
				globals.tabla47[96]='Drenaje-2  Tipo '
				if(resumen_to_hojauti.bal_egr_drenaje2_cant!=null){
					globals.tabla48[hora]=resumen_to_hojauti.bal_egr_drenaje2_cant
				}else{
					globals.tabla48[hora]=0
				}
				globals.tabla48[96]='Drenaje-2  Cant.'	
				switch (resumen_to_hojauti.bal_egr_drenaje3_tipo) {
					case 1:globals.tabla49[hora]='Pleural';break;
					case 2:globals.tabla49[hora]='Cefálico';break;
					case 3:globals.tabla49[hora]='Abdominal';break;
					case 4:globals.tabla49[hora]='Cadera';break;
					case 5:globals.tabla49[hora]='Mediastínico';break;
					case 0:globals.tabla49[hora]='Ninguno';break;
				}			
				globals.tabla49[96]='Drenaje-3  Tipo '
				if(resumen_to_hojauti.bal_egr_drenaje3_cant!=null){
					globals.tabla50[hora]=resumen_to_hojauti.bal_egr_drenaje3_cant
				}else{
					globals.tabla50[hora]=0
				}
				globals.tabla50[96]='Drenaje-3  Cant.'
				switch (resumen_to_hojauti.bal_egr_drenaje4_tipo) {
					case 1:globals.tabla51[hora]='Pleural';break;
					case 2:globals.tabla51[hora]='Cefálico';break;
					case 3:globals.tabla51[hora]='Abdominal';break;
					case 4:globals.tabla51[hora]='Cadera';break;
					case 5:globals.tabla51[hora]='Mediastínico';break;
					case 0:globals.tabla51[hora]='Ninguno';break;
				}			
				globals.tabla51[96]='Drenaje-4  Tipo '
				if(resumen_to_hojauti.bal_egr_drenaje4_cant!=null){
					globals.tabla52[hora]=resumen_to_hojauti.bal_egr_drenaje4_cant
				}else{
					globals.tabla52[hora]=0
				}
				globals.tabla52[96]='Drenaje-4  Cant.'
				switch (resumen_to_hojauti.bal_egr_tipo_emesis) {
					case 1:globals.tabla73[hora]='Alimentario';break;
					case 2:globals.tabla73[hora]='Bilis';break;
					case 3:globals.tabla73[hora]='Sangre';break;
					case 4:globals.tabla73[hora]='Moco';break;
					case 5:globals.tabla73[hora]='Pus';break;
					case 0:globals.tabla73[hora]='Ninguno';break;
				}			
				globals.tabla73[96]='Emesis   Tipo '
				if(resumen_to_hojauti.bal_egr_cant_emesis!=null){
					globals.tabla74[hora]=resumen_to_hojauti.bal_egr_cant_emesis
				}else{
					globals.tabla74[hora]=0
				}
				globals.tabla74[96]='Emesis   Cant.'	
				if(resumen_to_hojauti.bal_egr_cant_dialisis!=null){
					globals.tabla75[hora]=resumen_to_hojauti.bal_egr_cant_dialisis
				}else{
					globals.tabla75[hora]=0
				}
				globals.tabla75[96]='Dialisis  Cant.'	
				globals.tabla76[hora]=0	
				globals.tabla76[hora]= utils.numberFormat((utils.stringToNumber(globals.tabla44[hora])+utils.stringToNumber(globals.tabla46[hora])+utils.stringToNumber(globals.tabla48[hora])+utils.stringToNumber(globals.tabla50[hora])+utils.stringToNumber(globals.tabla52[hora])+utils.stringToNumber(globals.tabla53[hora])+utils.stringToNumber(globals.tabla54[hora])+utils.stringToNumber(globals.tabla55[hora])+utils.stringToNumber(globals.tabla56[hora])+utils.stringToNumber(globals.tabla57[hora])+utils.stringToNumber(globals.tabla58[hora])+utils.stringToNumber(globals.tabla59[hora])+utils.stringToNumber(globals.tabla60[hora])+utils.stringToNumber(globals.tabla61[hora])+utils.stringToNumber(globals.tabla62[hora])+utils.stringToNumber(globals.tabla63[hora])+utils.stringToNumber(globals.tabla64[hora])+utils.stringToNumber(globals.tabla65[hora])+utils.stringToNumber(globals.tabla66[hora])+utils.stringToNumber(globals.tabla67[hora])+utils.stringToNumber(globals.tabla68[hora])+utils.stringToNumber(globals.tabla69[hora])+utils.stringToNumber(globals.tabla70[hora])+utils.stringToNumber(globals.tabla71[hora])+utils.stringToNumber(globals.tabla72[hora])+utils.stringToNumber(globals.tabla74[hora])+utils.stringToNumber(globals.tabla75[hora])),"######")
				globals.tabla76[96]='Total Horario     '
				globals.tabla77[24]=utils.numberFormat((utils.stringToNumber(globals.tabla77[24])+utils.stringToNumber(globals.tabla76[hora])),"######")
				globals.tabla77[40]=globals.tabla77[24]
				globals.tabla77[56]=globals.tabla77[24]
				globals.tabla77[72]=globals.tabla77[24]
				globals.tabla77[88]=globals.tabla77[24]
				globals.tabla77[8]=globals.tabla77[24]
				globals.tabla77[96]='Total en 24 Hs.  '
				globals.tabla78[24]=utils.numberFormat((utils.stringToNumber(globals.tabla41[24])-utils.stringToNumber(globals.tabla77[24])),"######")
				globals.tabla78[40]=globals.tabla78[24]
				globals.tabla78[40]=globals.tabla78[24]
				globals.tabla78[96]='BALANCE EN 24 HS.  '	
				cargo_tabla=true
				/*
				if (hora>=600&&hora<1400){
					globals.tabla2[97]=utils.numberFormat((utils.stringToNumber(globals.tabla2[97])+utils.stringToNumber(globals.tabla2[hora])),"######")
					globals.tabla3[97]=utils.numberFormat((utils.stringToNumber(globals.tabla3[97])+utils.stringToNumber(globals.tabla3[hora])),"######")
					globals.tabla5[97]=utils.numberFormat((utils.stringToNumber(globals.tabla5[97])+utils.stringToNumber(globals.tabla5[hora])),"######")
					globals.tabla7[97]=utils.numberFormat((utils.stringToNumber(globals.tabla7[97])+utils.stringToNumber(globals.tabla7[hora])),"######")
					globals.tabla9[97]=utils.numberFormat((utils.stringToNumber(globals.tabla9[97])+utils.stringToNumber(globals.tabla9[hora])),"######")
					globals.tabla11[97]=utils.numberFormat((utils.stringToNumber(globals.tabla11[97])+utils.stringToNumber(globals.tabla11[hora])),"######")
					globals.tabla13[97]=utils.numberFormat((utils.stringToNumber(globals.tabla13[97])+utils.stringToNumber(globals.tabla13[hora])),"######")
					globals.tabla15[97]=utils.numberFormat((utils.stringToNumber(globals.tabla15[97])+utils.stringToNumber(globals.tabla15[hora])),"######")
					globals.tabla17[97]=utils.numberFormat((utils.stringToNumber(globals.tabla17[97])+utils.stringToNumber(globals.tabla17[hora])),"######")
					globals.tabla19[97]=utils.numberFormat((utils.stringToNumber(globals.tabla19[97])+utils.stringToNumber(globals.tabla19[hora])),"######")
					globals.tabla40[97]=utils.numberFormat((utils.stringToNumber(globals.tabla40[97])+utils.stringToNumber(globals.tabla40[hora])),"######")
					globals.tabla44[97]=utils.numberFormat((utils.stringToNumber(globals.tabla44[97])+utils.stringToNumber(globals.tabla44[hora])),"######")
					globals.tabla46[97]=utils.numberFormat((utils.stringToNumber(globals.tabla46[97])+utils.stringToNumber(globals.tabla46[hora])),"######")
					globals.tabla48[97]=utils.numberFormat((utils.stringToNumber(globals.tabla48[97])+utils.stringToNumber(globals.tabla48[hora])),"######")
					globals.tabla50[97]=utils.numberFormat((utils.stringToNumber(globals.tabla50[97])+utils.stringToNumber(globals.tabla50[hora])),"######")
					globals.tabla52[97]=utils.numberFormat((utils.stringToNumber(globals.tabla52[97])+utils.stringToNumber(globals.tabla52[hora])),"######")
					globals.tabla74[97]=utils.numberFormat((utils.stringToNumber(globals.tabla74[97])+utils.stringToNumber(globals.tabla74[hora])),"######")
					globals.tabla75[97]=utils.numberFormat((utils.stringToNumber(globals.tabla75[97])+utils.stringToNumber(globals.tabla75[hora])),"######")
					globals.tabla76[97]=utils.numberFormat((utils.stringToNumber(globals.tabla76[97])+utils.stringToNumber(globals.tabla76[hora])),"######")
					globals.tabla78[97]=utils.numberFormat((utils.stringToNumber(globals.tabla40[97])-utils.stringToNumber(globals.tabla76[97])),"######")
					globals.tabla78[96]='BALANCE Turno '
				}else{
					if(hora>=1400&&hora<2200){
						globals.tabla2[98]=utils.numberFormat((utils.stringToNumber(globals.tabla2[98])+utils.stringToNumber(globals.tabla2[hora])),"######")
						globals.tabla3[98]=utils.numberFormat((utils.stringToNumber(globals.tabla3[98])+utils.stringToNumber(globals.tabla3[hora])),"######")
						globals.tabla5[98]=utils.numberFormat((utils.stringToNumber(globals.tabla5[98])+utils.stringToNumber(globals.tabla5[hora])),"######")
						globals.tabla7[98]=utils.numberFormat((utils.stringToNumber(globals.tabla7[98])+utils.stringToNumber(globals.tabla7[hora])),"######")
						globals.tabla9[98]=utils.numberFormat((utils.stringToNumber(globals.tabla9[98])+utils.stringToNumber(globals.tabla9[hora])),"######")
						globals.tabla11[98]=utils.numberFormat((utils.stringToNumber(globals.tabla11[98])+utils.stringToNumber(globals.tabla11[hora])),"######")
						globals.tabla13[98]=utils.numberFormat((utils.stringToNumber(globals.tabla13[98])+utils.stringToNumber(globals.tabla13[hora])),"######")
						globals.tabla15[98]=utils.numberFormat((utils.stringToNumber(globals.tabla15[98])+utils.stringToNumber(globals.tabla15[hora])),"######")
						globals.tabla17[98]=utils.numberFormat((utils.stringToNumber(globals.tabla17[98])+utils.stringToNumber(globals.tabla17[hora])),"######")
						globals.tabla19[98]=utils.numberFormat((utils.stringToNumber(globals.tabla19[98])+utils.stringToNumber(globals.tabla19[hora])),"######")
						globals.tabla40[98]=utils.numberFormat((utils.stringToNumber(globals.tabla40[98])+utils.stringToNumber(globals.tabla40[hora])),"######")
						globals.tabla44[98]=utils.numberFormat((utils.stringToNumber(globals.tabla44[98])+utils.stringToNumber(globals.tabla44[hora])),"######")
						globals.tabla46[98]=utils.numberFormat((utils.stringToNumber(globals.tabla46[98])+utils.stringToNumber(globals.tabla46[hora])),"######")
						globals.tabla48[98]=utils.numberFormat((utils.stringToNumber(globals.tabla48[98])+utils.stringToNumber(globals.tabla48[hora])),"######")
						globals.tabla50[98]=utils.numberFormat((utils.stringToNumber(globals.tabla50[98])+utils.stringToNumber(globals.tabla50[hora])),"######")
						globals.tabla52[98]=utils.numberFormat((utils.stringToNumber(globals.tabla52[98])+utils.stringToNumber(globals.tabla52[hora])),"######")
						globals.tabla74[98]=utils.numberFormat((utils.stringToNumber(globals.tabla74[98])+utils.stringToNumber(globals.tabla74[hora])),"######")
						globals.tabla75[98]=utils.numberFormat((utils.stringToNumber(globals.tabla75[98])+utils.stringToNumber(globals.tabla75[hora])),"######")
						globals.tabla76[98]=utils.numberFormat((utils.stringToNumber(globals.tabla76[98])+utils.stringToNumber(globals.tabla76[hora])),"######")
						globals.tabla78[98]=utils.numberFormat((utils.stringToNumber(globals.tabla40[98])-utils.stringToNumber(globals.tabla76[98])),"######")
						globals.tabla78[96]='BALANCE Turno '
					}else{
						if((hora>=2200&&hora<2400)||(hora>=0&&hora<600)){
							globals.tabla2[99]=utils.numberFormat((utils.stringToNumber(globals.tabla2[99])+utils.stringToNumber(globals.tabla2[hora])),"######")
							globals.tabla3[99]=utils.numberFormat((utils.stringToNumber(globals.tabla3[99])+utils.stringToNumber(globals.tabla3[hora])),"######")
							globals.tabla5[99]=utils.numberFormat((utils.stringToNumber(globals.tabla5[99])+utils.stringToNumber(globals.tabla5[hora])),"######")
							globals.tabla7[99]=utils.numberFormat((utils.stringToNumber(globals.tabla7[99])+utils.stringToNumber(globals.tabla7[hora])),"######")
							globals.tabla9[99]=utils.numberFormat((utils.stringToNumber(globals.tabla9[99])+utils.stringToNumber(globals.tabla9[hora])),"######")
							globals.tabla11[99]=utils.numberFormat((utils.stringToNumber(globals.tabla11[99])+utils.stringToNumber(globals.tabla11[hora])),"######")
							globals.tabla13[99]=utils.numberFormat((utils.stringToNumber(globals.tabla13[99])+utils.stringToNumber(globals.tabla13[hora])),"######")
							globals.tabla15[99]=utils.numberFormat((utils.stringToNumber(globals.tabla15[99])+utils.stringToNumber(globals.tabla15[hora])),"######")
							globals.tabla17[99]=utils.numberFormat((utils.stringToNumber(globals.tabla17[99])+utils.stringToNumber(globals.tabla17[hora])),"######")
							globals.tabla19[99]=utils.numberFormat((utils.stringToNumber(globals.tabla19[99])+utils.stringToNumber(globals.tabla19[hora])),"######")
							globals.tabla40[99]=utils.numberFormat((utils.stringToNumber(globals.tabla40[99])+utils.stringToNumber(globals.tabla40[hora])),"######")
							globals.tabla44[99]=utils.numberFormat((utils.stringToNumber(globals.tabla44[99])+utils.stringToNumber(globals.tabla44[hora])),"######")
							globals.tabla46[99]=utils.numberFormat((utils.stringToNumber(globals.tabla46[99])+utils.stringToNumber(globals.tabla46[hora])),"######")
							globals.tabla48[99]=utils.numberFormat((utils.stringToNumber(globals.tabla48[99])+utils.stringToNumber(globals.tabla48[hora])),"######")
							globals.tabla50[99]=utils.numberFormat((utils.stringToNumber(globals.tabla50[99])+utils.stringToNumber(globals.tabla50[hora])),"######")
							globals.tabla52[99]=utils.numberFormat((utils.stringToNumber(globals.tabla52[99])+utils.stringToNumber(globals.tabla52[hora])),"######")
							globals.tabla74[99]=utils.numberFormat((utils.stringToNumber(globals.tabla74[99])+utils.stringToNumber(globals.tabla74[hora])),"######")
							globals.tabla75[99]=utils.numberFormat((utils.stringToNumber(globals.tabla73[99])+utils.stringToNumber(globals.tabla75[hora])),"######")
							globals.tabla76[99]=utils.numberFormat((utils.stringToNumber(globals.tabla76[99])+utils.stringToNumber(globals.tabla76[hora])),"######")
							globals.tabla78[99]=utils.numberFormat((utils.stringToNumber(globals.tabla40[99])-utils.stringToNumber(globals.tabla76[99])),"######")
							globals.tabla78[96]='BALANCE Turno '
						}
					}
				}
				globals.tabla2[100]=utils.numberFormat((utils.stringToNumber(globals.tabla2[97])+utils.stringToNumber(globals.tabla2[98])+utils.stringToNumber(globals.tabla2[99])),"######")
				globals.tabla3[100]=utils.numberFormat((utils.stringToNumber(globals.tabla3[97])+utils.stringToNumber(globals.tabla3[98])+utils.stringToNumber(globals.tabla3[99])),"######")
				globals.tabla5[100]=utils.numberFormat((utils.stringToNumber(globals.tabla5[97])+utils.stringToNumber(globals.tabla5[98])+utils.stringToNumber(globals.tabla5[99])),"######")
				globals.tabla7[100]=utils.numberFormat((utils.stringToNumber(globals.tabla7[97])+utils.stringToNumber(globals.tabla7[98])+utils.stringToNumber(globals.tabla7[99])),"######")
				globals.tabla9[100]=utils.numberFormat((utils.stringToNumber(globals.tabla9[97])+utils.stringToNumber(globals.tabla9[98])+utils.stringToNumber(globals.tabla9[99])),"######")
				globals.tabla11[100]=utils.numberFormat((utils.stringToNumber(globals.tabla11[97])+utils.stringToNumber(globals.tabla11[98])+utils.stringToNumber(globals.tabla11[99])),"######")
				globals.tabla13[100]=utils.numberFormat((utils.stringToNumber(globals.tabla13[97])+utils.stringToNumber(globals.tabla13[98])+utils.stringToNumber(globals.tabla13[99])),"######")
				globals.tabla15[100]=utils.numberFormat((utils.stringToNumber(globals.tabla15[97])+utils.stringToNumber(globals.tabla15[98])+utils.stringToNumber(globals.tabla15[99])),"######")
				globals.tabla17[100]=utils.numberFormat((utils.stringToNumber(globals.tabla17[97])+utils.stringToNumber(globals.tabla17[98])+utils.stringToNumber(globals.tabla17[99])),"######")
				globals.tabla19[100]=utils.numberFormat((utils.stringToNumber(globals.tabla19[97])+utils.stringToNumber(globals.tabla19[98])+utils.stringToNumber(globals.tabla19[99])),"######")
				globals.tabla40[100]=utils.numberFormat((utils.stringToNumber(globals.tabla40[97])+utils.stringToNumber(globals.tabla40[98])+utils.stringToNumber(globals.tabla40[99])),"######")
				globals.tabla44[100]=utils.numberFormat((utils.stringToNumber(globals.tabla44[97])+utils.stringToNumber(globals.tabla44[98])+utils.stringToNumber(globals.tabla44[99])),"######")
				globals.tabla46[100]=utils.numberFormat((utils.stringToNumber(globals.tabla46[97])+utils.stringToNumber(globals.tabla46[98])+utils.stringToNumber(globals.tabla46[99])),"######")
				globals.tabla48[100]=utils.numberFormat((utils.stringToNumber(globals.tabla48[97])+utils.stringToNumber(globals.tabla48[98])+utils.stringToNumber(globals.tabla48[99])),"######")
				globals.tabla50[100]=utils.numberFormat((utils.stringToNumber(globals.tabla50[97])+utils.stringToNumber(globals.tabla50[98])+utils.stringToNumber(globals.tabla50[99])),"######")
				globals.tabla52[100]=utils.numberFormat((utils.stringToNumber(globals.tabla52[97])+utils.stringToNumber(globals.tabla52[98])+utils.stringToNumber(globals.tabla52[99])),"######")
				globals.tabla74[100]=utils.numberFormat((utils.stringToNumber(globals.tabla74[97])+utils.stringToNumber(globals.tabla74[98])+utils.stringToNumber(globals.tabla74[99])),"######")
				globals.tabla75[100]=utils.numberFormat((utils.stringToNumber(globals.tabla75[97])+utils.stringToNumber(globals.tabla75[98])+utils.stringToNumber(globals.tabla75[99])),"######")
				globals.tabla76[100]=utils.numberFormat((utils.stringToNumber(globals.tabla76[97])+utils.stringToNumber(globals.tabla76[98])+utils.stringToNumber(globals.tabla76[99])),"######")
				*/
				}
			}
		}
		if(resumen2_to_hojauti.getSize()>0){
			for(var tt=1;tt<=resumen2_to_hojauti.getSize();tt++){
				resumen2_to_hojauti.setSelectedIndex(tt)
				if(resumen2_to_hojauti.hora<600){
					if(resumen2_to_hojauti.hora<1000){
						hora_ind=resumen2_to_hojauti.hora.toString().substr(0,3)
					}else{
						hora_ind=resumen2_to_hojauti.hora.toString().substr(0,4)
					}
					hora=hora_vector(hora_ind)
					switch (resumen2_to_hojauti.bal_ing_hidrata_tipo) {
						case 1:globals.tabla1[hora]='V.Oral';break;
						case 2:globals.tabla1[hora]='V.Parent.';break;
						case 3:globals.tabla1[hora]='V.Enteral.';break;
						case 0:globals.tabla1[hora]='Ninguna';break;
						default:globals.tabla1[hora]='';break;
					}
					globals.tabla1[96]='Hidratacion Tipo ' 
					if(resumen2_to_hojauti.bal_ing_hidrata_cant!=null){
						globals.tabla2[hora]=resumen2_to_hojauti.bal_ing_hidrata_cant
					}else{
						globals.tabla2[hora]=0
					}	
					globals.tabla2[96]='Hidratacion Cant. '
					if(resumen2_to_hojauti.bal_ing_dilucion!=null){
						globals.tabla3[hora]=resumen2_to_hojauti.bal_ing_dilucion
					}else{
						globals.tabla3[hora]=0
					}
					
					globals.tabla3[96]='Dilución          '
					switch (resumen2_to_hojauti.bal_ing_expansion_tipo) {
						case 1:globals.tabla4[hora]='Sol.Fisio';break;
						case 2:globals.tabla4[hora]='Ringer L.';break;
						case 3:globals.tabla4[hora]='Voluven';break;
						case 4:globals.tabla4[hora]='Haemaccel';break;
						case 5:globals.tabla4[hora]='Albumina';break;
						case 0:globals.tabla4[hora]='Ninguna';break;
						default:globals.tabla4[hora]='';break;
					}	
					globals.tabla4[96]='Expansión Tipo    '
					if(resumen2_to_hojauti.bal_ing_expansion_cant!=null){
						globals.tabla5[hora]=resumen2_to_hojauti.bal_ing_expansion_cant
					}else{
						globals.tabla5[hora]=0
					}
					globals.tabla5[96]='Expansión Cant.   '
					switch (resumen2_to_hojauti.bal_ing_sangre_tipo) {
						case 1:globals.tabla6[hora]='Glob.Rojo';break;
						case 2:globals.tabla6[hora]='Plasma';break;
						case 3:globals.tabla6[hora]='Plaquetas';break;
						case 0:globals.tabla6[hora]='Ninguno';break;
					}		
					globals.tabla6[96]='Sangre Tipo       '
					if(resumen2_to_hojauti.bal_ing_sangre_cant!=null){
						globals.tabla7[hora]=resumen2_to_hojauti.bal_ing_sangre_cant
					}else{
						globals.tabla7[hora]=0
					}
					globals.tabla7[96]='Sangre Cant.      '
					switch (resumen2_to_hojauti.bal_ing_alimen_tipo) {
						case 1:globals.tabla8[hora]='Enteral';break;
						case 2:globals.tabla8[hora]='Parenteral';break;
						case 3:globals.tabla8[hora]='Oral';break;
						case 0:globals.tabla8[hora]='Ninguno';break;
					}			
					globals.tabla8[96]='Alimentación Tipo '
					if(resumen2_to_hojauti.bal_ing_alimen_cant!=null){
						globals.tabla9[hora]=resumen2_to_hojauti.bal_ing_alimen_cant
					}else{
						globals.tabla9[hora]=0
					}
					globals.tabla9[96]='Alimentación Cant.'
					switch (resumen2_to_hojauti.bal_ing_bic_1_tipo) {
					case 1:globals.tabla10[hora]='NTG      ';break;
					case 2:globals.tabla10[hora]='Fioritina';break;
					case 3:globals.tabla10[hora]='Milrinona';break;
					case 4:globals.tabla10[hora]='Ipsilon  ';break;
					case 5:globals.tabla10[hora]='Analgesia';break;
					case 6:globals.tabla10[hora]='Dobutamina';break;
					case 7:globals.tabla10[hora]='Dopamina  ';break;
					case 8:globals.tabla10[hora]='NPS       ';break;
					case 9:globals.tabla10[hora]='Biascor   ';break;
					case 10:globals.tabla10[hora]='Fentanilo ';break;
					case 11:globals.tabla10[hora]='Tiopenthal';break;
					case 12:globals.tabla10[hora]='Propofol  ';break;
					case 13:globals.tabla10[hora]='Midazolam ';break;
					case 14:globals.tabla10[hora]='Sedo-Analgesia';break;
					case 15:globals.tabla10[hora]='Fentanilo ';break;
					case 16:globals.tabla10[hora]='Lasix     ';break;
					case 17:globals.tabla10[hora]='Amiodarona ';break;
					case 0:globals.tabla10[hora]='Ninguna';break;
				}	
				globals.tabla10[96]='BIC-1   Tipo      '	
				if(resumen2_to_hojauti.bal_ing_bic_1_cant!=null){
					globals.tabla11[hora]=resumen2_to_hojauti.bal_ing_bic_1_cant
				}else{
					globals.tabla11[hora]=0
				}
				globals.tabla11[96]='BIC-1   Cant.     '
				switch (resumen2_to_hojauti.bal_ing_bic_2_tipo) {
					case 1:globals.tabla12[hora]='NTG      ';break;
					case 2:globals.tabla12[hora]='Fioritina';break;
					case 3:globals.tabla12[hora]='Milrinona';break;
					case 4:globals.tabla12[hora]='Ipsilon  ';break;
					case 5:globals.tabla12[hora]='Analgesia';break;
					case 6:globals.tabla12[hora]='Dobutamina';break;
					case 7:globals.tabla12[hora]='Dopamina  ';break;
					case 8:globals.tabla12[hora]='NPS       ';break;
					case 9:globals.tabla12[hora]='Biascor   ';break;
					case 10:globals.tabla12[hora]='Fentanilo ';break;
					case 11:globals.tabla12[hora]='Tiopenthal';break;
					case 12:globals.tabla12[hora]='Propofol  ';break;
					case 13:globals.tabla12[hora]='Midazolam ';break;
					case 14:globals.tabla12[hora]='Sedo-Analgesia';break;
					case 15:globals.tabla12[hora]='Fentanilo ';break;
					case 16:globals.tabla12[hora]='Lasix     ';break;
					case 17:globals.tabla12[hora]='Amiodarona ';break;
					case 0:globals.tabla12[hora]='Ninguna';break;
				}	
				globals.tabla12[96]='BIC-2   Tipo      '
				if(resumen2_to_hojauti.bal_ing_bic_2_cant!=null){
					globals.tabla13[hora]=resumen2_to_hojauti.bal_ing_bic_2_cant
				}else{
					globals.tabla13[hora]=0
				}
				globals.tabla13[96]='BIC-2   Cant.     '
				switch (resumen2_to_hojauti.bal_ing_bic_3_tipo) {
					case 1:globals.tabla14[hora]='NTG      ';break;
					case 2:globals.tabla14[hora]='Fioritina';break;
					case 3:globals.tabla14[hora]='Milrinona';break;
					case 4:globals.tabla14[hora]='Ipsilon  ';break;
					case 5:globals.tabla14[hora]='Analgesia';break;
					case 6:globals.tabla14[hora]='Dobutamina';break;
					case 7:globals.tabla14[hora]='Dopamina  ';break;
					case 8:globals.tabla14[hora]='NPS       ';break;
					case 9:globals.tabla14[hora]='Biascor   ';break;
					case 10:globals.tabla14[hora]='Fentanilo ';break;
					case 11:globals.tabla14[hora]='Tiopenthal';break;
					case 12:globals.tabla14[hora]='Propofol  ';break;
					case 13:globals.tabla14[hora]='Midazolam ';break;
					case 14:globals.tabla14[hora]='Sedo-Analgesia';break;
					case 15:globals.tabla14[hora]='Fentanilo ';break;
					case 16:globals.tabla14[hora]='Lasix     ';break;
					case 17:globals.tabla14[hora]='Amiodarona ';break;
					case 0:globals.tabla14[hora]='Ninguna';break;
				}	
				globals.tabla14[96]='BIC-3   Tipo      '	
				if(resumen2_to_hojauti.bal_ing_bic_3_cant!=null){
					globals.tabla15[hora]=resumen2_to_hojauti.bal_ing_bic_3_cant
				}else{
					globals.tabla15[hora]=0
				}
				globals.tabla15[96]='BIC-3   Cant.     '
				switch (resumen2_to_hojauti.bal_ing_bic_4_tipo) {
					case 1:globals.tabla16[hora]='NTG      ';break;
					case 2:globals.tabla16[hora]='Fioritina';break;
					case 3:globals.tabla16[hora]='Milrinona';break;
					case 4:globals.tabla16[hora]='Ipsilon  ';break;
					case 5:globals.tabla16[hora]='Analgesia';break;
					case 6:globals.tabla16[hora]='Dobutamina';break;
					case 7:globals.tabla16[hora]='Dopamina  ';break;
					case 8:globals.tabla16[hora]='NPS       ';break;
					case 9:globals.tabla16[hora]='Biascor   ';break;
					case 10:globals.tabla16[hora]='Fentanilo ';break;
					case 11:globals.tabla16[hora]='Tiopenthal';break;
					case 12:globals.tabla16[hora]='Propofol  ';break;
					case 13:globals.tabla16[hora]='Midazolam ';break;
					case 14:globals.tabla16[hora]='Sedo-Analgesia';break;
					case 15:globals.tabla16[hora]='Fentanilo ';break;
					case 16:globals.tabla16[hora]='Lasix     ';break;
					case 17:globals.tabla16[hora]='Amiodarona ';break;
					case 0:globals.tabla16[hora]='Ninguna';break;
				}	
				globals.tabla16[96]='BIC-4   Tipo      '	
				if(resumen2_to_hojauti.bal_ing_bic_4_cant!=null){
					globals.tabla17[hora]=resumen2_to_hojauti.bal_ing_bic_4_cant
				}else{
					globals.tabla17[hora]=0
				}
				globals.tabla17[96]='BIC-4   Cant.     '
				switch (resumen2_to_hojauti.bal_ing_bic_5_tipo) {
					case 1:globals.tabla18[hora]='NTG      ';break;
					case 2:globals.tabla18[hora]='Fioritina';break;
					case 3:globals.tabla18[hora]='Milrinona';break;
					case 4:globals.tabla18[hora]='Ipsilon  ';break;
					case 5:globals.tabla18[hora]='Analgesia';break;
					case 6:globals.tabla18[hora]='Dobutamina';break;
					case 7:globals.tabla18[hora]='Dopamina  ';break;
					case 8:globals.tabla18[hora]='NPS       ';break;
					case 9:globals.tabla18[hora]='Biascor   ';break;
					case 10:globals.tabla18[hora]='Fentanilo ';break;
					case 11:globals.tabla18[hora]='Tiopenthal';break;
					case 12:globals.tabla18[hora]='Propofol  ';break;
					case 13:globals.tabla18[hora]='Midazolam ';break;
					case 14:globals.tabla18[hora]='Sedo-Analgesia';break;
					case 15:globals.tabla18[hora]='Fentanilo ';break;
					case 16:globals.tabla18[hora]='Lasix     ';break;
					case 17:globals.tabla18[hora]='Amiodarona ';break;
					case 0:globals.tabla18[hora]='Ninguna';break;
				}	
				globals.tabla18[96]='BIC-5   Tipo      '	
				if(resumen2_to_hojauti.bal_ing_bic_5_cant!=null){
					globals.tabla19[hora]=resumen2_to_hojauti.bal_ing_bic_5_cant
				}else{
					globals.tabla19[hora]=0
				}
				globals.tabla19[96]='BIC-5   Cant.     '
				//-- Busca Otros Ingresos -----
					globals.vHora=hora
					//if (hora>9){
					//	globals.vHora=globals.vHora.toString().substr(0,2)+'00'
					//}else{
						//globals.vHora=globals.vHora.toString().substr(0,1)+'00'
					//}
					
					globals.tabla40[hora]=0	
					globals.tabla40[hora]= utils.numberFormat((utils.stringToNumber(globals.tabla2[hora])+utils.stringToNumber(globals.tabla3[hora])+utils.stringToNumber(globals.tabla5[hora])+utils.stringToNumber(globals.tabla7[hora])+utils.stringToNumber(globals.tabla9[hora])+utils.stringToNumber(globals.tabla11[hora])+utils.stringToNumber(globals.tabla13[hora])+utils.stringToNumber(globals.tabla15[hora])+utils.stringToNumber(globals.tabla17[hora])+utils.stringToNumber(globals.tabla19[hora])+utils.stringToNumber(globals.tabla20[hora])+utils.stringToNumber(globals.tabla21[hora])+utils.stringToNumber(globals.tabla22[hora])+utils.stringToNumber(globals.tabla23[hora])+utils.stringToNumber(globals.tabla24[hora])+utils.stringToNumber(globals.tabla25[hora])+utils.stringToNumber(globals.tabla26[hora])+utils.stringToNumber(globals.tabla27[hora])+utils.stringToNumber(globals.tabla28[hora])+utils.stringToNumber(globals.tabla29[hora])+utils.stringToNumber(globals.tabla30[hora])+utils.stringToNumber(globals.tabla31[hora])+utils.stringToNumber(globals.tabla32[hora])+utils.stringToNumber(globals.tabla33[hora])+utils.stringToNumber(globals.tabla34[hora])+utils.stringToNumber(globals.tabla35[hora])+utils.stringToNumber(globals.tabla36[hora])+utils.stringToNumber(globals.tabla37[hora])+utils.stringToNumber(globals.tabla38[hora])+utils.stringToNumber(globals.tabla39[hora])),"######")
					globals.tabla40[96]='Total Horario     '
					globals.tabla41[24]=utils.numberFormat((utils.stringToNumber(globals.tabla41[24])+utils.stringToNumber(globals.tabla40[hora])),"######")
					globals.tabla41[40]=globals.tabla41[24]
					globals.tabla41[56]=globals.tabla41[24]
					globals.tabla41[72]=globals.tabla41[24]
					globals.tabla41[88]=globals.tabla41[24]
					globals.tabla41[8]=globals.tabla41[24]
					globals.tabla41[96]='Total en 24 Hs.  '
						
					globals.tabla42[96]= '  Concepto   ';
					if (hora_ind.length==3){
						globals.tabla42[hora]= hora_ind.substr(0,1)+":"+hora_ind.substr(1,2)
					}else{
						globals.tabla42[hora]= hora_ind.substr(0,2)+":"+hora_ind.substr(2,2)
					}
						
					switch (resumen2_to_hojauti.bal_egr_diuresis_tipo) {
						case 1:globals.tabla43[hora]='Pañal';break;
						case 2:globals.tabla43[hora]='Enteral';break;
						case 3:globals.tabla43[hora]='Sonda Vesical';break;
						case 4:globals.tabla43[hora]='Micción Espontánea';break;
						case 0:globals.tabla43[hora]='Ninguno';break;
					}			
					globals.tabla43[96]='Diuresis Tipo '
					if(resumen2_to_hojauti.bal_egr_diuresis_cant!=null){
						globals.tabla44[hora]=resumen2_to_hojauti.bal_egr_diuresis_cant
					}else{
						globals.tabla44[hora]=0
					}
					globals.tabla44[96]='Diuresis Cant.'	
					switch (resumen2_to_hojauti.bal_egr_drenaje1_tipo) {
						case 1:globals.tabla45[hora]='Pleural';break;
						case 2:globals.tabla45[hora]='Cefálico';break;
						case 3:globals.tabla45[hora]='Abdominal';break;
						case 4:globals.tabla45[hora]='Cadera';break;
						case 5:globals.tabla45[hora]='Mediastínico';break;
						case 0:globals.tabla45[hora]='Ninguno';break;
					}			
					globals.tabla45[96]='Drenaje-1  Tipo '
					if(resumen2_to_hojauti.bal_egr_drenaje1_cant!=null){
						globals.tabla46[hora]=resumen2_to_hojauti.bal_egr_drenaje1_cant
					}else{
						globals.tabla46[hora]=0
					}
					globals.tabla46[96]='Drenaje-1  Cant.'	
					switch (resumen2_to_hojauti.bal_egr_drenaje2_tipo) {
						case 1:globals.tabla47[hora]='Pleural';break;
						case 2:globals.tabla47[hora]='Cefálico';break;
						case 3:globals.tabla47[hora]='Abdominal';break;
						case 4:globals.tabla47[hora]='Cadera';break;
						case 5:globals.tabla47[hora]='Mediastínico';break;
						case 0:globals.tabla47[hora]='Ninguno';break;
					}			
					globals.tabla47[96]='Drenaje-2  Tipo '
					if(resumen2_to_hojauti.bal_egr_drenaje2_cant!=null){
						globals.tabla48[hora]=resumen2_to_hojauti.bal_egr_drenaje2_cant
					}else{
						globals.tabla48[hora]=0
					}
					globals.tabla48[96]='Drenaje-2  Cant.'	
					switch (resumen2_to_hojauti.bal_egr_drenaje3_tipo) {
						case 1:globals.tabla49[hora]='Pleural';break;
						case 2:globals.tabla49[hora]='Cefálico';break;
						case 3:globals.tabla49[hora]='Abdominal';break;
						case 4:globals.tabla49[hora]='Cadera';break;
						case 5:globals.tabla49[hora]='Mediastínico';break;
						case 0:globals.tabla49[hora]='Ninguno';break;
					}			
					globals.tabla49[96]='Drenaje-3  Tipo '
					if(resumen2_to_hojauti.bal_egr_drenaje3_cant!=null){
						globals.tabla50[hora]=resumen2_to_hojauti.bal_egr_drenaje3_cant
					}else{
						globals.tabla50[hora]=0
					}
					globals.tabla50[96]='Drenaje-3  Cant.'
					switch (resumen2_to_hojauti.bal_egr_drenaje4_tipo) {
						case 1:globals.tabla51[hora]='Pleural';break;
						case 2:globals.tabla51[hora]='Cefálico';break;
						case 3:globals.tabla51[hora]='Abdominal';break;
						case 4:globals.tabla51[hora]='Cadera';break;
						case 5:globals.tabla51[hora]='Mediastínico';break;
						case 0:globals.tabla51[hora]='Ninguno';break;
					}			
					globals.tabla51[96]='Drenaje-4  Tipo '
					if(resumen2_to_hojauti.bal_egr_drenaje4_cant!=null){
						globals.tabla52[hora]=resumen2_to_hojauti.bal_egr_drenaje4_cant
					}else{
						globals.tabla52[hora]=0
					}
					globals.tabla52[96]='Drenaje-4  Cant.'
					switch (resumen2_to_hojauti.bal_egr_tipo_emesis) {
						case 1:globals.tabla73[hora]='Alimentario';break;
						case 2:globals.tabla73[hora]='Bilis';break;
						case 3:globals.tabla73[hora]='Sangre';break;
						case 4:globals.tabla73[hora]='Moco';break;
						case 5:globals.tabla73[hora]='Pus';break;
						case 0:globals.tabla73[hora]='Ninguno';break;
					}			
					globals.tabla73[96]='Emesis   Tipo '
					if(resumen2_to_hojauti.bal_egr_cant_emesis!=null){
						globals.tabla74[hora]=resumen2_to_hojauti.bal_egr_cant_emesis
					}else{
						globals.tabla74[hora]=0
					}
					globals.tabla74[96]='Emesis   Cant.'	
					if(resumen2_to_hojauti.bal_egr_cant_dialisis!=null){
						globals.tabla75[hora]=resumen2_to_hojauti.bal_egr_cant_dialisis
					}else{
						globals.tabla75[hora]=0
					}
					globals.tabla75[96]='Dialisis  Cant.'	
					globals.tabla76[hora]=0	
					globals.tabla76[hora]= utils.numberFormat((utils.stringToNumber(globals.tabla44[hora])+utils.stringToNumber(globals.tabla46[hora])+utils.stringToNumber(globals.tabla48[hora])+utils.stringToNumber(globals.tabla50[hora])+utils.stringToNumber(globals.tabla52[hora])+utils.stringToNumber(globals.tabla53[hora])+utils.stringToNumber(globals.tabla54[hora])+utils.stringToNumber(globals.tabla55[hora])+utils.stringToNumber(globals.tabla56[hora])+utils.stringToNumber(globals.tabla57[hora])+utils.stringToNumber(globals.tabla58[hora])+utils.stringToNumber(globals.tabla59[hora])+utils.stringToNumber(globals.tabla60[hora])+utils.stringToNumber(globals.tabla61[hora])+utils.stringToNumber(globals.tabla62[hora])+utils.stringToNumber(globals.tabla63[hora])+utils.stringToNumber(globals.tabla64[hora])+utils.stringToNumber(globals.tabla65[hora])+utils.stringToNumber(globals.tabla66[hora])+utils.stringToNumber(globals.tabla67[hora])+utils.stringToNumber(globals.tabla68[hora])+utils.stringToNumber(globals.tabla69[hora])+utils.stringToNumber(globals.tabla70[hora])+utils.stringToNumber(globals.tabla71[hora])+utils.stringToNumber(globals.tabla72[hora])+utils.stringToNumber(globals.tabla74[hora])+utils.stringToNumber(globals.tabla75[hora])),"######")
					globals.tabla76[96]='Total Horario     '
					globals.tabla77[24]=utils.numberFormat((utils.stringToNumber(globals.tabla77[24])+utils.stringToNumber(globals.tabla76[hora])),"######")
					globals.tabla77[56]=globals.tabla77[24]
					globals.tabla77[88]=globals.tabla77[24]
					globals.tabla77[96]='Total en 24 Hs.  '
					globals.tabla78[24]=utils.numberFormat((utils.stringToNumber(globals.tabla41[24])-utils.stringToNumber(globals.tabla77[24])),"######")
					globals.tabla78[56]=globals.tabla78[24]
					globals.tabla78[88]=globals.tabla78[24]
					globals.tabla78[96]='BALANCE EN 24 HS.  '	
					cargo_tabla=true
					/*
					if (hora>=600&&hora<1400){
						globals.tabla2[97]=utils.numberFormat((utils.stringToNumber(globals.tabla2[97])+utils.stringToNumber(globals.tabla2[hora])),"######")
						globals.tabla3[97]=utils.numberFormat((utils.stringToNumber(globals.tabla3[97])+utils.stringToNumber(globals.tabla3[hora])),"######")
						globals.tabla5[97]=utils.numberFormat((utils.stringToNumber(globals.tabla5[97])+utils.stringToNumber(globals.tabla5[hora])),"######")
						globals.tabla7[97]=utils.numberFormat((utils.stringToNumber(globals.tabla7[97])+utils.stringToNumber(globals.tabla7[hora])),"######")
						globals.tabla9[97]=utils.numberFormat((utils.stringToNumber(globals.tabla9[97])+utils.stringToNumber(globals.tabla9[hora])),"######")
						globals.tabla11[97]=utils.numberFormat((utils.stringToNumber(globals.tabla11[97])+utils.stringToNumber(globals.tabla11[hora])),"######")
						globals.tabla13[97]=utils.numberFormat((utils.stringToNumber(globals.tabla13[97])+utils.stringToNumber(globals.tabla13[hora])),"######")
						globals.tabla15[97]=utils.numberFormat((utils.stringToNumber(globals.tabla15[97])+utils.stringToNumber(globals.tabla15[hora])),"######")
						globals.tabla17[97]=utils.numberFormat((utils.stringToNumber(globals.tabla17[97])+utils.stringToNumber(globals.tabla17[hora])),"######")
						globals.tabla19[97]=utils.numberFormat((utils.stringToNumber(globals.tabla19[97])+utils.stringToNumber(globals.tabla19[hora])),"######")
						globals.tabla40[97]=utils.numberFormat((utils.stringToNumber(globals.tabla40[97])+utils.stringToNumber(globals.tabla40[hora])),"######")
						globals.tabla44[97]=utils.numberFormat((utils.stringToNumber(globals.tabla44[97])+utils.stringToNumber(globals.tabla44[hora])),"######")
						globals.tabla46[97]=utils.numberFormat((utils.stringToNumber(globals.tabla46[97])+utils.stringToNumber(globals.tabla46[hora])),"######")
						globals.tabla48[97]=utils.numberFormat((utils.stringToNumber(globals.tabla48[97])+utils.stringToNumber(globals.tabla48[hora])),"######")
						globals.tabla50[97]=utils.numberFormat((utils.stringToNumber(globals.tabla50[97])+utils.stringToNumber(globals.tabla50[hora])),"######")
						globals.tabla52[97]=utils.numberFormat((utils.stringToNumber(globals.tabla52[97])+utils.stringToNumber(globals.tabla52[hora])),"######")
						globals.tabla74[97]=utils.numberFormat((utils.stringToNumber(globals.tabla74[97])+utils.stringToNumber(globals.tabla74[hora])),"######")
						globals.tabla75[97]=utils.numberFormat((utils.stringToNumber(globals.tabla75[97])+utils.stringToNumber(globals.tabla75[hora])),"######")
						globals.tabla76[97]=utils.numberFormat((utils.stringToNumber(globals.tabla76[97])+utils.stringToNumber(globals.tabla76[hora])),"######")
						globals.tabla78[97]=utils.numberFormat((utils.stringToNumber(globals.tabla40[97])-utils.stringToNumber(globals.tabla76[97])),"######")
						globals.tabla78[96]='BALANCE Turno '
					}else{
						if(hora>=1400&&hora<2200){
							globals.tabla2[98]=utils.numberFormat((utils.stringToNumber(globals.tabla2[98])+utils.stringToNumber(globals.tabla2[hora])),"######")
							globals.tabla3[98]=utils.numberFormat((utils.stringToNumber(globals.tabla3[98])+utils.stringToNumber(globals.tabla3[hora])),"######")
							globals.tabla5[98]=utils.numberFormat((utils.stringToNumber(globals.tabla5[98])+utils.stringToNumber(globals.tabla5[hora])),"######")
							globals.tabla7[98]=utils.numberFormat((utils.stringToNumber(globals.tabla7[98])+utils.stringToNumber(globals.tabla7[hora])),"######")
							globals.tabla9[98]=utils.numberFormat((utils.stringToNumber(globals.tabla9[98])+utils.stringToNumber(globals.tabla9[hora])),"######")
							globals.tabla11[98]=utils.numberFormat((utils.stringToNumber(globals.tabla11[98])+utils.stringToNumber(globals.tabla11[hora])),"######")
							globals.tabla13[98]=utils.numberFormat((utils.stringToNumber(globals.tabla13[98])+utils.stringToNumber(globals.tabla13[hora])),"######")
							globals.tabla15[98]=utils.numberFormat((utils.stringToNumber(globals.tabla15[98])+utils.stringToNumber(globals.tabla15[hora])),"######")
							globals.tabla17[98]=utils.numberFormat((utils.stringToNumber(globals.tabla17[98])+utils.stringToNumber(globals.tabla17[hora])),"######")
							globals.tabla19[98]=utils.numberFormat((utils.stringToNumber(globals.tabla19[98])+utils.stringToNumber(globals.tabla19[hora])),"######")
							globals.tabla40[98]=utils.numberFormat((utils.stringToNumber(globals.tabla40[98])+utils.stringToNumber(globals.tabla40[hora])),"######")
							globals.tabla44[98]=utils.numberFormat((utils.stringToNumber(globals.tabla44[98])+utils.stringToNumber(globals.tabla44[hora])),"######")
							globals.tabla46[98]=utils.numberFormat((utils.stringToNumber(globals.tabla46[98])+utils.stringToNumber(globals.tabla46[hora])),"######")
							globals.tabla48[98]=utils.numberFormat((utils.stringToNumber(globals.tabla48[98])+utils.stringToNumber(globals.tabla48[hora])),"######")
							globals.tabla50[98]=utils.numberFormat((utils.stringToNumber(globals.tabla50[98])+utils.stringToNumber(globals.tabla50[hora])),"######")
							globals.tabla52[98]=utils.numberFormat((utils.stringToNumber(globals.tabla52[98])+utils.stringToNumber(globals.tabla52[hora])),"######")
							globals.tabla74[98]=utils.numberFormat((utils.stringToNumber(globals.tabla74[98])+utils.stringToNumber(globals.tabla74[hora])),"######")
							globals.tabla75[98]=utils.numberFormat((utils.stringToNumber(globals.tabla75[98])+utils.stringToNumber(globals.tabla75[hora])),"######")
							globals.tabla76[98]=utils.numberFormat((utils.stringToNumber(globals.tabla76[98])+utils.stringToNumber(globals.tabla76[hora])),"######")
							globals.tabla78[98]=utils.numberFormat((utils.stringToNumber(globals.tabla40[98])-utils.stringToNumber(globals.tabla76[98])),"######")
							globals.tabla78[96]='BALANCE Turno '
						}else{
							if((hora>=2200&&hora<2400)||(hora>=0&&hora<600)){
								globals.tabla2[99]=utils.numberFormat((utils.stringToNumber(globals.tabla2[99])+utils.stringToNumber(globals.tabla2[hora])),"######")
								globals.tabla3[99]=utils.numberFormat((utils.stringToNumber(globals.tabla3[99])+utils.stringToNumber(globals.tabla3[hora])),"######")
								globals.tabla5[99]=utils.numberFormat((utils.stringToNumber(globals.tabla5[99])+utils.stringToNumber(globals.tabla5[hora])),"######")
								globals.tabla7[99]=utils.numberFormat((utils.stringToNumber(globals.tabla7[99])+utils.stringToNumber(globals.tabla7[hora])),"######")
								globals.tabla9[99]=utils.numberFormat((utils.stringToNumber(globals.tabla9[99])+utils.stringToNumber(globals.tabla9[hora])),"######")
								globals.tabla11[99]=utils.numberFormat((utils.stringToNumber(globals.tabla11[99])+utils.stringToNumber(globals.tabla11[hora])),"######")
								globals.tabla13[99]=utils.numberFormat((utils.stringToNumber(globals.tabla13[99])+utils.stringToNumber(globals.tabla13[hora])),"######")
								globals.tabla15[99]=utils.numberFormat((utils.stringToNumber(globals.tabla15[99])+utils.stringToNumber(globals.tabla15[hora])),"######")
								globals.tabla17[99]=utils.numberFormat((utils.stringToNumber(globals.tabla17[99])+utils.stringToNumber(globals.tabla17[hora])),"######")
								globals.tabla19[99]=utils.numberFormat((utils.stringToNumber(globals.tabla19[99])+utils.stringToNumber(globals.tabla19[hora])),"######")
								globals.tabla40[99]=utils.numberFormat((utils.stringToNumber(globals.tabla40[99])+utils.stringToNumber(globals.tabla40[hora])),"######")
								globals.tabla44[99]=utils.numberFormat((utils.stringToNumber(globals.tabla44[99])+utils.stringToNumber(globals.tabla44[hora])),"######")
								globals.tabla46[99]=utils.numberFormat((utils.stringToNumber(globals.tabla46[99])+utils.stringToNumber(globals.tabla46[hora])),"######")
								globals.tabla48[99]=utils.numberFormat((utils.stringToNumber(globals.tabla48[99])+utils.stringToNumber(globals.tabla48[hora])),"######")
								globals.tabla50[99]=utils.numberFormat((utils.stringToNumber(globals.tabla50[99])+utils.stringToNumber(globals.tabla50[hora])),"######")
								globals.tabla52[99]=utils.numberFormat((utils.stringToNumber(globals.tabla52[99])+utils.stringToNumber(globals.tabla52[hora])),"######")
								globals.tabla74[99]=utils.numberFormat((utils.stringToNumber(globals.tabla74[99])+utils.stringToNumber(globals.tabla74[hora])),"######")
								globals.tabla75[99]=utils.numberFormat((utils.stringToNumber(globals.tabla73[99])+utils.stringToNumber(globals.tabla75[hora])),"######")
								globals.tabla76[99]=utils.numberFormat((utils.stringToNumber(globals.tabla76[99])+utils.stringToNumber(globals.tabla76[hora])),"######")
								globals.tabla78[99]=utils.numberFormat((utils.stringToNumber(globals.tabla40[99])-utils.stringToNumber(globals.tabla76[99])),"######")
								globals.tabla78[96]='BALANCE Turno '
							}
						}
					}
					globals.tabla2[100]=utils.numberFormat((utils.stringToNumber(globals.tabla2[97])+utils.stringToNumber(globals.tabla2[98])+utils.stringToNumber(globals.tabla2[99])),"######")
					globals.tabla3[100]=utils.numberFormat((utils.stringToNumber(globals.tabla3[97])+utils.stringToNumber(globals.tabla3[98])+utils.stringToNumber(globals.tabla3[99])),"######")
					globals.tabla5[100]=utils.numberFormat((utils.stringToNumber(globals.tabla5[97])+utils.stringToNumber(globals.tabla5[98])+utils.stringToNumber(globals.tabla5[99])),"######")
					globals.tabla7[100]=utils.numberFormat((utils.stringToNumber(globals.tabla7[97])+utils.stringToNumber(globals.tabla7[98])+utils.stringToNumber(globals.tabla7[99])),"######")
					globals.tabla9[100]=utils.numberFormat((utils.stringToNumber(globals.tabla9[97])+utils.stringToNumber(globals.tabla9[98])+utils.stringToNumber(globals.tabla9[99])),"######")
					globals.tabla11[100]=utils.numberFormat((utils.stringToNumber(globals.tabla11[97])+utils.stringToNumber(globals.tabla11[98])+utils.stringToNumber(globals.tabla11[99])),"######")
					globals.tabla13[100]=utils.numberFormat((utils.stringToNumber(globals.tabla13[97])+utils.stringToNumber(globals.tabla13[98])+utils.stringToNumber(globals.tabla13[99])),"######")
					globals.tabla15[100]=utils.numberFormat((utils.stringToNumber(globals.tabla15[97])+utils.stringToNumber(globals.tabla15[98])+utils.stringToNumber(globals.tabla15[99])),"######")
					globals.tabla17[100]=utils.numberFormat((utils.stringToNumber(globals.tabla17[97])+utils.stringToNumber(globals.tabla17[98])+utils.stringToNumber(globals.tabla17[99])),"######")
					globals.tabla19[100]=utils.numberFormat((utils.stringToNumber(globals.tabla19[97])+utils.stringToNumber(globals.tabla19[98])+utils.stringToNumber(globals.tabla19[99])),"######")
					globals.tabla40[100]=utils.numberFormat((utils.stringToNumber(globals.tabla40[97])+utils.stringToNumber(globals.tabla40[98])+utils.stringToNumber(globals.tabla40[99])),"######")
					globals.tabla44[100]=utils.numberFormat((utils.stringToNumber(globals.tabla44[97])+utils.stringToNumber(globals.tabla44[98])+utils.stringToNumber(globals.tabla44[99])),"######")
					globals.tabla46[100]=utils.numberFormat((utils.stringToNumber(globals.tabla46[97])+utils.stringToNumber(globals.tabla46[98])+utils.stringToNumber(globals.tabla46[99])),"######")
					globals.tabla48[100]=utils.numberFormat((utils.stringToNumber(globals.tabla48[97])+utils.stringToNumber(globals.tabla48[98])+utils.stringToNumber(globals.tabla48[99])),"######")
					globals.tabla50[100]=utils.numberFormat((utils.stringToNumber(globals.tabla50[97])+utils.stringToNumber(globals.tabla50[98])+utils.stringToNumber(globals.tabla50[99])),"######")
					globals.tabla52[100]=utils.numberFormat((utils.stringToNumber(globals.tabla52[97])+utils.stringToNumber(globals.tabla52[98])+utils.stringToNumber(globals.tabla52[99])),"######")
					globals.tabla74[100]=utils.numberFormat((utils.stringToNumber(globals.tabla74[97])+utils.stringToNumber(globals.tabla74[98])+utils.stringToNumber(globals.tabla74[99])),"######")
					globals.tabla75[100]=utils.numberFormat((utils.stringToNumber(globals.tabla75[97])+utils.stringToNumber(globals.tabla75[98])+utils.stringToNumber(globals.tabla75[99])),"######")
					globals.tabla76[100]=utils.numberFormat((utils.stringToNumber(globals.tabla76[97])+utils.stringToNumber(globals.tabla76[98])+utils.stringToNumber(globals.tabla76[99])),"######")
					*/
					}
				}
			}
		if(cargo_tabla){
			var tabla='';
			var tabla2='';
			var acumulador=0;
			for(var jj=0;jj<=78;jj++){
				if (jj>9){
					tabla = 'tabla'+ jj.toString().substr(0,2)
				}else{
					tabla = 'tabla'+ jj.toString().substr(0,1)
				}
				if(jj==indice_acum[jj]){
					acumulador=0
					for(var kk=0;kk<=95;kk++){
						if(globals[tabla][kk]!=0){
							globals[tabla][kk]=utils.numberFormat((utils.stringToNumber(globals[tabla][kk])+utils.stringToNumber(acumulador)),"######")
							acumulador=globals[tabla][kk]
						}
					}
				}
					
			}
			for(var j=0;j<=78;j++){
				if (j>9){
					tabla = 'tabla'+ j.toString().substr(0,2)
				}else{
					tabla = 'tabla'+ j.toString().substr(0,1)
				}
				
				if (globals[tabla][96]!=''){
					vs_to_hojauti_resumen_rcv.newRecord()
					vs_to_hojauti_resumen_rcv.hiscli=globals.vHiscli
					vs_to_hojauti_resumen_rcv.tipo_opera=globals.vTipoOperador
					vs_to_hojauti_resumen_rcv.nro_operador=globals.vLegajo
					vs_to_hojauti_resumen_rcv.fecha=globals.vFecha
					vs_to_hojauti_resumen_rcv.item=1
					vs_to_hojauti_resumen_rcv.subitems=j
					vs_to_hojauti_resumen_rcv.concepto=globals[tabla][96]
					vs_to_hojauti_resumen_rcv.turno6='   '+globals[tabla][97]
					vs_to_hojauti_resumen_rcv.turno14='   '+globals[tabla][98]
					vs_to_hojauti_resumen_rcv.turno22='   '+globals[tabla][99]
					vs_to_hojauti_resumen_rcv.total24='   '+globals[tabla][100]
					for(var k=0;k<=95;k++){
						
						tabla2='hora'+indice_hora[k]
						
							if(globals[tabla][k]!=0){
								if( globals[tabla][k]!=''){
									if( globals[tabla][k]!=null){
										
											vs_to_hojauti_resumen_rcv[tabla2]=globals[tabla][k]
										
									}else{
										vs_to_hojauti_resumen_rcv[tabla2]=''
									}
								} else{
									vs_to_hojauti_resumen_rcv[tabla2]=globals[tabla][k]
								}
							}else{
								vs_to_hojauti_resumen_rcv[tabla2]=''
							}
						
					}
				}
			}
		databaseManager.saveData(vs_to_hojauti_resumen_rcv)
	}
	globals.items=1

}

/**
 * @properties={typeid:24,uuid:"69A3B655-EE5B-4C56-B0E7-CA4B9A7F00E2"}
 */
function hora_vector(hora) {
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
	indice_hora[97]=2500
	indice_hora[98]=2600
	indice_hora[99]=2700
	indice_hora[100]=2800
	var encontrado=false
	var indice=0
	for(var i=0;i<=100&&!encontrado;i++){
		if(indice_hora[i]==hora){
			encontrado=true
			indice=i
		}
	}
	return indice
}
