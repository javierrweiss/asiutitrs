/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"31B14D56-A97E-4ACC-88AE-A5F9778715BB"}
 */
function onAction_btn_6(event) {
	globals.vRangoHorario=1
	globals.vDatasetSql=''
	application.updateUI()
	var hora_tbl = new Array()
	hora_tbl[0]='hora6'
	hora_tbl[1]='hora7'
	hora_tbl[2]='hora8'
	hora_tbl[3]='hora9'
	hora_tbl[4]='hora10'
	hora_tbl[5]='hora11'
	hora_tbl[6]='hora12'
	hora_tbl[7]='hora13'
			
	var hora_as = new Array()
	hora_as[0]='6:00'
	hora_as[1]='7:00'
	hora_as[2]='8:00'
	hora_as[3]='9:00'
	hora_as[4]='10:00'
	hora_as[5]='11:00'
	hora_as[6]='12:00'
	hora_as[7]='13:00'
		
	globals.vQuerySql='select concepto, '
		              + hora_tbl[0] + ' as "' + hora_as[0] +'", '
		              + hora_tbl[1] + ' as "' + hora_as[1] +'", '
		              + hora_tbl[2] + ' as "' + hora_as[2] +'", '
		              + hora_tbl[3] + ' as "' + hora_as[3] +'", '
		              + hora_tbl[4] + ' as "' + hora_as[4] +'", '
		              + hora_tbl[5] + ' as "' + hora_as[5] +'", '
		              + hora_tbl[6] + ' as "' + hora_as[6] +'", '
		              + hora_tbl[7] + ' as "' + hora_as[7] +'", '
					  + 'turno6 as "Total 6 a 13 Hs", '
					  + 'total24 as "Total 24Hs" '
		              + 'from hojauti_resumen where hiscli = '
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
 * @properties={typeid:24,uuid:"55712311-2A76-4FDC-8E05-AFBF23C97E50"}
 * @AllowToRunInFind
 */
function resumen_balance() {
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
	
	if(vhiscli_to_hojauti_resumen.getSize()>0){
		var hc = globals.vHiscli
		var t_ope = globals.vTipoOperador
		var n_ope = globals.vLegajo
		
		var done = plugins.rawSQL.executeSQL("enfermeria", "hojauti_resumen", "delete from hojauti_resumen where hiscli = ? and tipo_opera = ? and nro_operador = ?", [hc,t_ope,n_ope])
		if (done) {
			//flush is required when changes are made in db
			plugins.rawSQL.flushAllClientsCache("enfermeria", "hojauti_resumen")
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
			globals[tabla3][24]=concepto_aux
			while(x<=otros_ingreso_resumen_to_hojauti_items.getSize()&&concepto_aux==otros_ingreso_resumen_to_hojauti_items.concepto&&z<10){
				if(otros_ingreso_resumen_to_hojauti_items.hora>500){
					globals[tabla3][utils.stringToNumber(otros_ingreso_resumen_to_hojauti_items.hora)/100]=utils.numberFormat((utils.stringToNumber(otros_ingreso_resumen_to_hojauti_items.cantidad)),"######")
					hora_aux=otros_ingreso_resumen_to_hojauti_items.hora
					if (hora_aux>=600&&hora_aux<1400){
						globals[tabla3][25]=utils.numberFormat((utils.stringToNumber(globals[tabla3][25])+utils.stringToNumber(globals[tabla3][utils.stringToNumber(otros_ingreso_resumen_to_hojauti_items.hora)/100])),"######")
					}else{
						if(hora_aux>=1400&&hora_aux<2200){
							globals[tabla3][26]=utils.numberFormat((utils.stringToNumber(globals[tabla3][26])+utils.stringToNumber(globals[tabla3][utils.stringToNumber(otros_ingreso_resumen_to_hojauti_items.hora)/100])),"######")
						}else{
							if((hora_aux>=2200&&hora_aux<2400)||(hora_aux>=0&&hora_aux<600)){
								globals[tabla3][27]=utils.numberFormat((utils.stringToNumber(globals[tabla3][27])+utils.stringToNumber(globals[tabla3][utils.stringToNumber(otros_ingreso_resumen_to_hojauti_items.hora)/100])),"######")
							}
						}
					}
					globals[tabla3][28]=utils.numberFormat((utils.stringToNumber(globals[tabla3][25])+utils.stringToNumber(globals[tabla3][26])+utils.stringToNumber(globals[tabla3][27])),"######")
					++z	
				}
				otros_ingreso_resumen_to_hojauti_items.setSelectedIndex(++x)
			}
		}
	}else{
		for(var v=0;v<10;v++){
			y=v+20
			tabla3 = 'tabla'+ y.toString().substr(0,2)
			for(w=0;w<=23;w++){
				globals[tabla3][w]=0
			}
			globals[tabla3][24]=''
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
			globals[tabla3][24]=concepto_aux
			while(x<=otros_ingreso_resumen2_to_hojauti_items.getSize()&&concepto_aux==otros_ingreso_resumen2_to_hojauti_items.concepto&&z<10){
				if(otros_ingreso_resumen2_to_hojauti_items.hora<600||otros_ingreso_resumen2_to_hojauti_items.hora>=2200){
					globals[tabla3][utils.stringToNumber(otros_ingreso_resumen2_to_hojauti_items.hora)/100]=utils.numberFormat((utils.stringToNumber(otros_ingreso_resumen2_to_hojauti_items.cantidad)),"######")
					hora_aux=otros_ingreso_resumen2_to_hojauti_items.hora
					if (hora_aux>=600&&hora_aux<1400){
						globals[tabla3][25]=utils.numberFormat((utils.stringToNumber(globals[tabla3][25])+utils.stringToNumber(globals[tabla3][utils.stringToNumber(otros_ingreso_resumen2_to_hojauti_items.hora)/100])),"######")
					}else{
						if(hora_aux>=1400&&hora_aux<2200){
							globals[tabla3][26]=utils.numberFormat((utils.stringToNumber(globals[tabla3][26])+utils.stringToNumber(globals[tabla3][utils.stringToNumber(otros_ingreso_resumen2_to_hojauti_items.hora)/100])),"######")
						}else{
							if((hora_aux>=2200&&hora_aux<2400)||(hora_aux>=0&&hora_aux<600)){
								globals[tabla3][27]=utils.numberFormat((utils.stringToNumber(globals[tabla3][27])+utils.stringToNumber(globals[tabla3][utils.stringToNumber(otros_ingreso_resumen2_to_hojauti_items.hora)/100])),"######")
							}
						}
					}
					globals[tabla3][28]=utils.numberFormat((utils.stringToNumber(globals[tabla3][25])+utils.stringToNumber(globals[tabla3][26])+utils.stringToNumber(globals[tabla3][27])),"######")
					++z
				}
				otros_ingreso_resumen2_to_hojauti_items.setSelectedIndex(++x)
			}
			
		}
	}else{
		for(var u=0;u<10;u++){
			y=u+30
			tabla3 = 'tabla'+ y.toString().substr(0,2)
			for(w=0;w<=23;w++){
				globals[tabla3][w]=0
			}
			globals[tabla3][24]=''
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
			p=m+52
			tabla4 = 'tabla'+ p.toString().substr(0,2)
			concepto_aux=otros_egresos_resumen_to_hojauti_items.concepto
			globals[tabla4][24]=concepto_aux
			
			while(n<=otros_egresos_resumen_to_hojauti_items.getSize()&&concepto_aux==otros_egresos_resumen_to_hojauti_items.concepto&&m<10){
				if(otros_egresos_resumen_to_hojauti_items.hora>500){
					globals[tabla4][utils.stringToNumber(otros_egresos_resumen_to_hojauti_items.hora)/100]=utils.numberFormat((utils.stringToNumber(otros_egresos_resumen_to_hojauti_items.cantidad)),"#####")
					hora_aux=otros_egresos_resumen_to_hojauti_items.hora
					if (hora_aux>=600&&hora_aux<1400){
						globals[tabla4][25]=utils.numberFormat((utils.stringToNumber(globals[tabla4][25])+utils.stringToNumber(globals[tabla4][utils.stringToNumber(otros_egresos_resumen_to_hojauti_items.hora)/100])),"######")
					}else{
						if(hora_aux>=1400&&hora_aux<2200){
							globals[tabla4][26]=utils.numberFormat((utils.stringToNumber(globals[tabla4][26])+utils.stringToNumber(globals[tabla4][utils.stringToNumber(otros_egresos_resumen_to_hojauti_items.hora)/100])),"######")
						}else{
							if((hora_aux>=2200&&hora_aux<2400)||(hora_aux>=0&&hora_aux<600)){
								globals[tabla4][27]=utils.numberFormat((utils.stringToNumber(globals[tabla4][27])+utils.stringToNumber(globals[tabla4][utils.stringToNumber(otros_egresos_resumen_to_hojauti_items.hora)/100])),"######")
							}
						}
					}
					globals[tabla4][28]=utils.numberFormat((utils.stringToNumber(globals[tabla4][25])+utils.stringToNumber(globals[tabla4][26])+utils.stringToNumber(globals[tabla4][27])),"######")
					++m
				}
				otros_egresos_resumen_to_hojauti_items.setSelectedIndex(++n)
			}
		}
	}else{
		for(var t=0;t<10;t++){
			p=t+52
			tabla4 = 'tabla'+ p.toString().substr(0,2)
			for(w=0;w<=23;w++){
					globals[tabla4][w]=0
			}
			globals[tabla4][24]=''
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
			
			p=m+62
			tabla4 = 'tabla'+ p.toString().substr(0,2)
			concepto_aux=otros_egresos_resumen2_to_hojauti_items.concepto
			globals[tabla4][24]=concepto_aux
			
			while(n<=otros_egresos_resumen2_to_hojauti_items.getSize()&&concepto_aux==otros_egresos_resumen2_to_hojauti_items.concepto&&m<10){
				if(otros_egresos_resumen2_to_hojauti_items.hora<600||otros_egresos_resumen2_to_hojauti_items.hora>=2200){
					globals[tabla4][utils.stringToNumber(otros_egresos_resumen2_to_hojauti_items.hora)/100]=utils.numberFormat((utils.stringToNumber(otros_egresos_resumen2_to_hojauti_items.cantidad)),"#####")
					hora_aux=otros_egresos_resumen2_to_hojauti_items.hora
					if (hora_aux>=600&&hora_aux<1400){
						globals[tabla4][25]=utils.numberFormat((utils.stringToNumber(globals[tabla4][25])+utils.stringToNumber(globals[tabla4][utils.stringToNumber(otros_egresos_resumen2_to_hojauti_items.hora)/100])),"######")
					}else{
						if(hora_aux>=1400&&hora_aux<2200){
							globals[tabla4][26]=utils.numberFormat((utils.stringToNumber(globals[tabla4][26])+utils.stringToNumber(globals[tabla4][utils.stringToNumber(otros_egresos_resumen2_to_hojauti_items.hora)/100])),"######")
						}else{
							if((hora_aux>=2200&&hora_aux<2400)||(hora_aux>=0&&hora_aux<600)){
								globals[tabla4][27]=utils.numberFormat((utils.stringToNumber(globals[tabla4][27])+utils.stringToNumber(globals[tabla4][utils.stringToNumber(otros_egresos_resumen2_to_hojauti_items.hora)/100])),"######")
							}
						}
					}
					globals[tabla4][28]=utils.numberFormat((utils.stringToNumber(globals[tabla4][25])+utils.stringToNumber(globals[tabla4][26])+utils.stringToNumber(globals[tabla4][27])),"######")
					++m
				}
				otros_egresos_resumen2_to_hojauti_items.setSelectedIndex(++n)
			}
		}
	}
	
	globals.tabla0[24]= '  Concepto   ';
	globals.tabla0[0]= '0:00';	
	globals.tabla0[1]= '1:00';
	globals.tabla0[2]= '2:00';
	globals.tabla0[3]= '3:00';
	globals.tabla0[4]= '4:00';
	globals.tabla0[5]= '5:00';
	globals.tabla0[6]= '6:00';
	globals.tabla0[7]= '7:00';
	globals.tabla0[8]= '8:00';
	globals.tabla0[9]= '9:00';
	globals.tabla0[10]= '10:00';
	globals.tabla0[11]= '11:00';
	globals.tabla0[12]= '12:00';
	globals.tabla0[13]= '13:00';
	globals.tabla0[14]= '14:00';
	globals.tabla0[15]= '15:00';
	globals.tabla0[16]= '16:00';
	globals.tabla0[17]= '17:00';
	globals.tabla0[18]= '18:00';
	globals.tabla0[19]= '19:00';
	globals.tabla0[20]= '20:00';
	globals.tabla0[21]= '21:00';
	globals.tabla0[22]= '22:00';
	globals.tabla0[23]= '23:00';
	globals.tabla0[25]= '6 a 13 Hs';
	globals.tabla0[26]= '14 a 21 Hs';
	globals.tabla0[27]= '22 a 5 Hs';
	globals.tabla0[28]= 'Total 24Hs';
	var hora=0;
	var minuto='';
	var cargo_tabla=false;
	//resumen_to_hojauti.find()
	//resumen_to_hojauti.search(false,false)
	if(resumen_to_hojauti.getSize()>0){
		for(var i=1;i<=resumen_to_hojauti.getSize();i++){
		  resumen_to_hojauti.setSelectedIndex(i)
		  if(resumen_to_hojauti.hora>500){
			if(resumen_to_hojauti.hora<1000){
				minuto=resumen_to_hojauti.hora.toString().substr(1,2)
			}else{
				minuto=resumen_to_hojauti.hora.toString().substr(2,2)
			}
			if(minuto=='00'){
				if(resumen_to_hojauti.hora<1000){
					hora=resumen_to_hojauti.hora.toString().substr(0,1)
				}else{
					hora=resumen_to_hojauti.hora.toString().substr(0,2)
				}
				switch (resumen_to_hojauti.bal_ing_hidrata_tipo) {
					case 1:globals.tabla1[hora]='V.Oral';break;
					case 2:globals.tabla1[hora]='V.Parent.';break;
					case 3:globals.tabla1[hora]='V.Enteral.';break;
					case 0:globals.tabla1[hora]='Ninguna';break;
				}
				globals.tabla1[24]='Hidratacion Tipo  '
				globals.tabla2[hora]=resumen_to_hojauti.bal_ing_hidrata_cant
				globals.tabla2[24]='Hidratacion Cant. '
				globals.tabla3[hora]=resumen_to_hojauti.bal_ing_dilucion
				globals.tabla3[24]='Dilución          '
				switch (resumen_to_hojauti.bal_ing_expansion_tipo) {
					case 1:globals.tabla4[hora]='Sol.Fisio';break;
					case 2:globals.tabla4[hora]='Ringer L.';break;
					case 3:globals.tabla4[hora]='Voluven';break;
					case 4:globals.tabla4[hora]='Haemaccel';break;
					case 5:globals.tabla4[hora]='Albumina';break;
					case 0:globals.tabla4[hora]='Ninguna';break;
				}	
				globals.tabla4[24]='Expansión Tipo    '
				globals.tabla5[hora]=resumen_to_hojauti.bal_ing_expansion_cant
				globals.tabla5[24]='Expansión Cant.   '
				switch (resumen_to_hojauti.bal_ing_sangre_tipo) {
					case 1:globals.tabla6[hora]='Glob.Rojo';break;
					case 2:globals.tabla6[hora]='Plasma';break;
					case 3:globals.tabla6[hora]='Plaquetas';break;
					case 0:globals.tabla6[hora]='Ninguno';break;
				}		
				globals.tabla6[24]='Sangre Tipo       '
				globals.tabla7[hora]=resumen_to_hojauti.bal_ing_sangre_cant
				globals.tabla7[24]='Sangre Cant.      '
				switch (resumen_to_hojauti.bal_ing_alimen_tipo) {
					case 1:globals.tabla8[hora]='Enteral';break;
					case 2:globals.tabla8[hora]='Parenteral';break;
					case 3:globals.tabla8[hora]='Oral';break;
					case 0:globals.tabla8[hora]='Ninguno';break;
				}			
				globals.tabla8[24]='Alimentación Tipo '
				globals.tabla9[hora]=resumen_to_hojauti.bal_ing_alimen_cant
				globals.tabla9[24]='Alimentación Cant.'
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
				globals.tabla10[24]='BIC-1   Tipo      '	
				globals.tabla11[hora]=resumen_to_hojauti.bal_ing_bic_1_cant
				globals.tabla11[24]='BIC-1   Cant.     '
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
				globals.tabla12[24]='BIC-2   Tipo      '	
				globals.tabla13[hora]=resumen_to_hojauti.bal_ing_bic_2_cant
				globals.tabla13[24]='BIC-2   Cant.     '
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
				globals.tabla14[24]='BIC-3   Tipo      '	
				globals.tabla15[hora]=resumen_to_hojauti.bal_ing_bic_3_cant
				globals.tabla15[24]='BIC-3   Cant.     '
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
				globals.tabla16[24]='BIC-4   Tipo      '	
				globals.tabla17[hora]=resumen_to_hojauti.bal_ing_bic_4_cant
				globals.tabla17[24]='BIC-4   Cant.     '
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
				globals.tabla18[24]='BIC-5   Tipo      '	
				globals.tabla19[hora]=resumen_to_hojauti.bal_ing_bic_5_cant
				globals.tabla19[24]='BIC-5   Cant.     '
			//-- Busca Otros Ingresos -----
				globals.vHora=hora
				if (hora>9){
					globals.vHora=globals.vHora.toString().substr(0,2)+'00'
				}else{
					globals.vHora=globals.vHora.toString().substr(0,1)+'00'
				}
				
				globals.tabla40[hora]=0	
				globals.tabla40[hora]= utils.numberFormat((utils.stringToNumber(globals.tabla2[hora])+utils.stringToNumber(globals.tabla3[hora])+utils.stringToNumber(globals.tabla5[hora])+utils.stringToNumber(globals.tabla7[hora])+utils.stringToNumber(globals.tabla9[hora])+utils.stringToNumber(globals.tabla11[hora])+utils.stringToNumber(globals.tabla13[hora])+utils.stringToNumber(globals.tabla15[hora])+utils.stringToNumber(globals.tabla17[hora])+utils.stringToNumber(globals.tabla19[hora])+utils.stringToNumber(globals.tabla20[hora])+utils.stringToNumber(globals.tabla21[hora])+utils.stringToNumber(globals.tabla22[hora])+utils.stringToNumber(globals.tabla23[hora])+utils.stringToNumber(globals.tabla24[hora])+utils.stringToNumber(globals.tabla25[hora])+utils.stringToNumber(globals.tabla26[hora])+utils.stringToNumber(globals.tabla27[hora])+utils.stringToNumber(globals.tabla28[hora])+utils.stringToNumber(globals.tabla29[hora])+utils.stringToNumber(globals.tabla30[hora])+utils.stringToNumber(globals.tabla31[hora])+utils.stringToNumber(globals.tabla32[hora])+utils.stringToNumber(globals.tabla33[hora])+utils.stringToNumber(globals.tabla34[hora])+utils.stringToNumber(globals.tabla35[hora])+utils.stringToNumber(globals.tabla36[hora])+utils.stringToNumber(globals.tabla37[hora])+utils.stringToNumber(globals.tabla38[hora])+utils.stringToNumber(globals.tabla39[hora])),"######")
				globals.tabla40[24]='Total Horario     '
				globals.tabla41[6]=utils.numberFormat((utils.stringToNumber(globals.tabla41[6])+utils.stringToNumber(globals.tabla40[hora])),"######")
				globals.tabla41[14]=globals.tabla41[6]
				globals.tabla41[22]=globals.tabla41[6]
				globals.tabla41[24]='Total en 24 Hs.  '
				switch (resumen_to_hojauti.bal_egr_diuresis_tipo) {
					case 1:globals.tabla42[hora]='Pañal';break;
					case 2:globals.tabla42[hora]='Enteral';break;
					case 3:globals.tabla42[hora]='Sonda Vesical';break;
					case 4:globals.tabla42[hora]='Micción Espontánea';break;
					case 0:globals.tabla42[hora]='Ninguno';break;
				}			
				globals.tabla42[24]='Diuresis Tipo '
				globals.tabla43[hora]=resumen_to_hojauti.bal_egr_diuresis_cant
				globals.tabla43[24]='Diuresis Cant.'	
				switch (resumen_to_hojauti.bal_egr_drenaje1_tipo) {
					case 1:globals.tabla44[hora]='Pleural';break;
					case 2:globals.tabla44[hora]='Cefálico';break;
					case 3:globals.tabla44[hora]='Abdominal';break;
					case 4:globals.tabla44[hora]='Cadera';break;
					case 5:globals.tabla44[hora]='Mediastínico';break;
					case 0:globals.tabla44[hora]='Ninguno';break;
				}			
				globals.tabla44[24]='Drenaje-1  Tipo '
				globals.tabla45[hora]=resumen_to_hojauti.bal_egr_drenaje1_cant
				globals.tabla45[24]='Drenaje-1  Cant.'	
				switch (resumen_to_hojauti.bal_egr_drenaje2_tipo) {
					case 1:globals.tabla46[hora]='Pleural';break;
					case 2:globals.tabla46[hora]='Cefálico';break;
					case 3:globals.tabla46[hora]='Abdominal';break;
					case 4:globals.tabla46[hora]='Cadera';break;
					case 5:globals.tabla46[hora]='Mediastínico';break;
					case 0:globals.tabla46[hora]='Ninguno';break;
				}			
				globals.tabla46[24]='Drenaje-2  Tipo '
				globals.tabla47[hora]=resumen_to_hojauti.bal_egr_drenaje2_cant
				globals.tabla47[24]='Drenaje-2  Cant.'	
				switch (resumen_to_hojauti.bal_egr_drenaje3_tipo) {
					case 1:globals.tabla48[hora]='Pleural';break;
					case 2:globals.tabla48[hora]='Cefálico';break;
					case 3:globals.tabla48[hora]='Abdominal';break;
					case 4:globals.tabla48[hora]='Cadera';break;
					case 5:globals.tabla48[hora]='Mediastínico';break;
					case 0:globals.tabla48[hora]='Ninguno';break;
				}			
				globals.tabla48[24]='Drenaje-3  Tipo '
				globals.tabla49[hora]=resumen_to_hojauti.bal_egr_drenaje3_cant
				globals.tabla49[24]='Drenaje-3  Cant.'
				switch (resumen_to_hojauti.bal_egr_drenaje4_tipo) {
					case 1:globals.tabla50[hora]='Pleural';break;
					case 2:globals.tabla50[hora]='Cefálico';break;
					case 3:globals.tabla50[hora]='Abdominal';break;
					case 4:globals.tabla50[hora]='Cadera';break;
					case 5:globals.tabla50[hora]='Mediastínico';break;
					case 0:globals.tabla50[hora]='Ninguno';break;
				}			
				globals.tabla50[24]='Drenaje-4  Tipo '
				globals.tabla51[hora]=resumen_to_hojauti.bal_egr_drenaje4_cant
				globals.tabla51[24]='Drenaje-4  Cant.'
				switch (resumen_to_hojauti.bal_egr_tipo_emesis) {
					case 1:globals.tabla72[hora]='Alimentario';break;
					case 2:globals.tabla72[hora]='Bilis';break;
					case 3:globals.tabla72[hora]='Sangre';break;
					case 4:globals.tabla72[hora]='Moco';break;
					case 5:globals.tabla72[hora]='Pus';break;
					case 0:globals.tabla72[hora]='Ninguno';break;
				}			
				globals.tabla72[24]='Emesis   Tipo '
				globals.tabla73[hora]=resumen_to_hojauti.bal_egr_cant_emesis
				globals.tabla73[24]='Emesis   Cant.'	
				globals.tabla74[hora]=resumen_to_hojauti.bal_egr_cant_dialisis
				globals.tabla74[24]='Dialisis  Cant.'	
				globals.tabla75[hora]=0	
				globals.tabla75[hora]= utils.numberFormat((utils.stringToNumber(globals.tabla43[hora])+utils.stringToNumber(globals.tabla45[hora])+utils.stringToNumber(globals.tabla47[hora])+utils.stringToNumber(globals.tabla48[hora])+utils.stringToNumber(globals.tabla49[hora])+utils.stringToNumber(globals.tabla51[hora])+utils.stringToNumber(globals.tabla52[hora])+utils.stringToNumber(globals.tabla53[hora])+utils.stringToNumber(globals.tabla54[hora])+utils.stringToNumber(globals.tabla55[hora])+utils.stringToNumber(globals.tabla56[hora])+utils.stringToNumber(globals.tabla57[hora])+utils.stringToNumber(globals.tabla58[hora])+utils.stringToNumber(globals.tabla59[hora])+utils.stringToNumber(globals.tabla60[hora])+utils.stringToNumber(globals.tabla61[hora])+utils.stringToNumber(globals.tabla62[hora])+utils.stringToNumber(globals.tabla63[hora])+utils.stringToNumber(globals.tabla64[hora])+utils.stringToNumber(globals.tabla65[hora])+utils.stringToNumber(globals.tabla66[hora])+utils.stringToNumber(globals.tabla67[hora])+utils.stringToNumber(globals.tabla68[hora])+utils.stringToNumber(globals.tabla69[hora])+utils.stringToNumber(globals.tabla70[hora])+utils.stringToNumber(globals.tabla71[hora])+utils.stringToNumber(globals.tabla73[hora])+utils.stringToNumber(globals.tabla74[hora])),"######")
				globals.tabla75[24]='Total Horario     '
				globals.tabla76[6]=utils.numberFormat((utils.stringToNumber(globals.tabla76[6])+utils.stringToNumber(globals.tabla75[hora])),"######")
				globals.tabla76[14]=globals.tabla76[6]
				globals.tabla76[22]=globals.tabla76[6]
				globals.tabla76[24]='Total en 24 Hs.  '
				globals.tabla77[6]=utils.numberFormat((utils.stringToNumber(globals.tabla41[6])-utils.stringToNumber(globals.tabla76[6])),"######")
				globals.tabla77[14]=globals.tabla77[6]
				globals.tabla77[22]=globals.tabla77[6]
				globals.tabla77[24]='BALANCE EN 24 HS.  '
				cargo_tabla=true
				if (hora>=6&&hora<14){
					globals.tabla2[25]=utils.numberFormat((utils.stringToNumber(globals.tabla2[25])+utils.stringToNumber(globals.tabla2[hora])),"######")
					globals.tabla3[25]=utils.numberFormat((utils.stringToNumber(globals.tabla3[25])+utils.stringToNumber(globals.tabla3[hora])),"######")
					globals.tabla5[25]=utils.numberFormat((utils.stringToNumber(globals.tabla5[25])+utils.stringToNumber(globals.tabla5[hora])),"######")
					globals.tabla7[25]=utils.numberFormat((utils.stringToNumber(globals.tabla7[25])+utils.stringToNumber(globals.tabla7[hora])),"######")
					globals.tabla9[25]=utils.numberFormat((utils.stringToNumber(globals.tabla9[25])+utils.stringToNumber(globals.tabla9[hora])),"######")
					globals.tabla11[25]=utils.numberFormat((utils.stringToNumber(globals.tabla11[25])+utils.stringToNumber(globals.tabla11[hora])),"######")
					globals.tabla13[25]=utils.numberFormat((utils.stringToNumber(globals.tabla13[25])+utils.stringToNumber(globals.tabla13[hora])),"######")
					globals.tabla15[25]=utils.numberFormat((utils.stringToNumber(globals.tabla15[25])+utils.stringToNumber(globals.tabla15[hora])),"######")
					globals.tabla17[25]=utils.numberFormat((utils.stringToNumber(globals.tabla17[25])+utils.stringToNumber(globals.tabla17[hora])),"######")
					globals.tabla19[25]=utils.numberFormat((utils.stringToNumber(globals.tabla19[25])+utils.stringToNumber(globals.tabla19[hora])),"######")
					globals.tabla40[25]=utils.numberFormat((utils.stringToNumber(globals.tabla40[25])+utils.stringToNumber(globals.tabla40[hora])),"######")
					globals.tabla43[25]=utils.numberFormat((utils.stringToNumber(globals.tabla43[25])+utils.stringToNumber(globals.tabla43[hora])),"######")
					globals.tabla45[25]=utils.numberFormat((utils.stringToNumber(globals.tabla45[25])+utils.stringToNumber(globals.tabla45[hora])),"######")
					globals.tabla47[25]=utils.numberFormat((utils.stringToNumber(globals.tabla47[25])+utils.stringToNumber(globals.tabla47[hora])),"######")
					globals.tabla49[25]=utils.numberFormat((utils.stringToNumber(globals.tabla49[25])+utils.stringToNumber(globals.tabla49[hora])),"######")
					globals.tabla51[25]=utils.numberFormat((utils.stringToNumber(globals.tabla51[25])+utils.stringToNumber(globals.tabla51[hora])),"######")
					globals.tabla73[25]=utils.numberFormat((utils.stringToNumber(globals.tabla73[25])+utils.stringToNumber(globals.tabla73[hora])),"######")
					globals.tabla74[25]=utils.numberFormat((utils.stringToNumber(globals.tabla74[25])+utils.stringToNumber(globals.tabla74[hora])),"######")
					globals.tabla75[25]=utils.numberFormat((utils.stringToNumber(globals.tabla75[25])+utils.stringToNumber(globals.tabla75[hora])),"######")
					globals.tabla78[25]=utils.numberFormat((utils.stringToNumber(globals.tabla40[25])-utils.stringToNumber(globals.tabla75[25])),"######")
					globals.tabla78[24]='BALANCE Turno '
				}else{
					if(hora>=14&&hora<22){
						globals.tabla2[26]=utils.numberFormat((utils.stringToNumber(globals.tabla2[26])+utils.stringToNumber(globals.tabla2[hora])),"######")
						globals.tabla3[26]=utils.numberFormat((utils.stringToNumber(globals.tabla3[26])+utils.stringToNumber(globals.tabla3[hora])),"######")
						globals.tabla5[26]=utils.numberFormat((utils.stringToNumber(globals.tabla5[26])+utils.stringToNumber(globals.tabla5[hora])),"######")
						globals.tabla7[26]=utils.numberFormat((utils.stringToNumber(globals.tabla7[26])+utils.stringToNumber(globals.tabla7[hora])),"######")
						globals.tabla9[26]=utils.numberFormat((utils.stringToNumber(globals.tabla9[26])+utils.stringToNumber(globals.tabla9[hora])),"######")
						globals.tabla11[26]=utils.numberFormat((utils.stringToNumber(globals.tabla11[26])+utils.stringToNumber(globals.tabla11[hora])),"######")
						globals.tabla13[26]=utils.numberFormat((utils.stringToNumber(globals.tabla13[26])+utils.stringToNumber(globals.tabla13[hora])),"######")
						globals.tabla15[26]=utils.numberFormat((utils.stringToNumber(globals.tabla15[26])+utils.stringToNumber(globals.tabla15[hora])),"######")
						globals.tabla17[26]=utils.numberFormat((utils.stringToNumber(globals.tabla17[26])+utils.stringToNumber(globals.tabla17[hora])),"######")
						globals.tabla19[26]=utils.numberFormat((utils.stringToNumber(globals.tabla19[26])+utils.stringToNumber(globals.tabla19[hora])),"######")
						globals.tabla40[26]=utils.numberFormat((utils.stringToNumber(globals.tabla40[26])+utils.stringToNumber(globals.tabla40[hora])),"######")
						globals.tabla43[26]=utils.numberFormat((utils.stringToNumber(globals.tabla43[26])+utils.stringToNumber(globals.tabla43[hora])),"######")
						globals.tabla45[26]=utils.numberFormat((utils.stringToNumber(globals.tabla45[26])+utils.stringToNumber(globals.tabla45[hora])),"######")
						globals.tabla47[26]=utils.numberFormat((utils.stringToNumber(globals.tabla47[26])+utils.stringToNumber(globals.tabla47[hora])),"######")
						globals.tabla49[26]=utils.numberFormat((utils.stringToNumber(globals.tabla49[26])+utils.stringToNumber(globals.tabla49[hora])),"######")
						globals.tabla51[26]=utils.numberFormat((utils.stringToNumber(globals.tabla51[26])+utils.stringToNumber(globals.tabla51[hora])),"######")
						globals.tabla73[26]=utils.numberFormat((utils.stringToNumber(globals.tabla73[26])+utils.stringToNumber(globals.tabla73[hora])),"######")
						globals.tabla74[26]=utils.numberFormat((utils.stringToNumber(globals.tabla74[26])+utils.stringToNumber(globals.tabla74[hora])),"######")
						globals.tabla75[26]=utils.numberFormat((utils.stringToNumber(globals.tabla75[26])+utils.stringToNumber(globals.tabla75[hora])),"######")
						globals.tabla78[26]=utils.numberFormat((utils.stringToNumber(globals.tabla40[26])-utils.stringToNumber(globals.tabla75[26])),"######")
						globals.tabla78[24]='BALANCE Turno '
					}else{
						if((hora>=22&&hora<24)||(hora>=0&&hora<6)){
							globals.tabla2[27]=utils.numberFormat((utils.stringToNumber(globals.tabla2[27])+utils.stringToNumber(globals.tabla2[hora])),"######")
							globals.tabla3[27]=utils.numberFormat((utils.stringToNumber(globals.tabla3[27])+utils.stringToNumber(globals.tabla3[hora])),"######")
							globals.tabla5[27]=utils.numberFormat((utils.stringToNumber(globals.tabla5[27])+utils.stringToNumber(globals.tabla5[hora])),"######")
							globals.tabla7[27]=utils.numberFormat((utils.stringToNumber(globals.tabla7[27])+utils.stringToNumber(globals.tabla7[hora])),"######")
							globals.tabla9[27]=utils.numberFormat((utils.stringToNumber(globals.tabla9[27])+utils.stringToNumber(globals.tabla9[hora])),"######")
							globals.tabla11[27]=utils.numberFormat((utils.stringToNumber(globals.tabla11[27])+utils.stringToNumber(globals.tabla11[hora])),"######")
							globals.tabla13[27]=utils.numberFormat((utils.stringToNumber(globals.tabla13[27])+utils.stringToNumber(globals.tabla13[hora])),"######")
							globals.tabla15[27]=utils.numberFormat((utils.stringToNumber(globals.tabla15[27])+utils.stringToNumber(globals.tabla15[hora])),"######")
							globals.tabla17[27]=utils.numberFormat((utils.stringToNumber(globals.tabla17[27])+utils.stringToNumber(globals.tabla17[hora])),"######")
							globals.tabla19[27]=utils.numberFormat((utils.stringToNumber(globals.tabla19[27])+utils.stringToNumber(globals.tabla19[hora])),"######")
							globals.tabla40[27]=utils.numberFormat((utils.stringToNumber(globals.tabla40[27])+utils.stringToNumber(globals.tabla40[hora])),"######")
							globals.tabla43[27]=utils.numberFormat((utils.stringToNumber(globals.tabla43[27])+utils.stringToNumber(globals.tabla43[hora])),"######")
							globals.tabla45[27]=utils.numberFormat((utils.stringToNumber(globals.tabla45[27])+utils.stringToNumber(globals.tabla45[hora])),"######")
							globals.tabla47[27]=utils.numberFormat((utils.stringToNumber(globals.tabla47[27])+utils.stringToNumber(globals.tabla47[hora])),"######")
							globals.tabla49[27]=utils.numberFormat((utils.stringToNumber(globals.tabla49[27])+utils.stringToNumber(globals.tabla49[hora])),"######")
							globals.tabla51[27]=utils.numberFormat((utils.stringToNumber(globals.tabla51[27])+utils.stringToNumber(globals.tabla51[hora])),"######")
							globals.tabla73[27]=utils.numberFormat((utils.stringToNumber(globals.tabla73[27])+utils.stringToNumber(globals.tabla73[hora])),"######")
							globals.tabla74[27]=utils.numberFormat((utils.stringToNumber(globals.tabla74[27])+utils.stringToNumber(globals.tabla74[hora])),"######")
							globals.tabla75[27]=utils.numberFormat((utils.stringToNumber(globals.tabla75[27])+utils.stringToNumber(globals.tabla75[hora])),"######")
							globals.tabla78[27]=utils.numberFormat((utils.stringToNumber(globals.tabla40[27])-utils.stringToNumber(globals.tabla75[27])),"######")
							globals.tabla78[24]='BALANCE Turno '
						}
					}
				}
				globals.tabla2[28]=utils.numberFormat((utils.stringToNumber(globals.tabla2[25])+utils.stringToNumber(globals.tabla2[26])+utils.stringToNumber(globals.tabla2[27])),"######")
				globals.tabla3[28]=utils.numberFormat((utils.stringToNumber(globals.tabla3[25])+utils.stringToNumber(globals.tabla3[26])+utils.stringToNumber(globals.tabla3[27])),"######")
				globals.tabla5[28]=utils.numberFormat((utils.stringToNumber(globals.tabla5[25])+utils.stringToNumber(globals.tabla5[26])+utils.stringToNumber(globals.tabla5[27])),"######")
				globals.tabla7[28]=utils.numberFormat((utils.stringToNumber(globals.tabla7[25])+utils.stringToNumber(globals.tabla7[26])+utils.stringToNumber(globals.tabla7[27])),"######")
				globals.tabla9[28]=utils.numberFormat((utils.stringToNumber(globals.tabla9[25])+utils.stringToNumber(globals.tabla9[26])+utils.stringToNumber(globals.tabla9[27])),"######")
				globals.tabla11[28]=utils.numberFormat((utils.stringToNumber(globals.tabla11[25])+utils.stringToNumber(globals.tabla11[26])+utils.stringToNumber(globals.tabla11[27])),"######")
				globals.tabla13[28]=utils.numberFormat((utils.stringToNumber(globals.tabla13[25])+utils.stringToNumber(globals.tabla13[26])+utils.stringToNumber(globals.tabla13[27])),"######")
				globals.tabla15[28]=utils.numberFormat((utils.stringToNumber(globals.tabla15[25])+utils.stringToNumber(globals.tabla15[26])+utils.stringToNumber(globals.tabla15[27])),"######")
				globals.tabla17[28]=utils.numberFormat((utils.stringToNumber(globals.tabla17[25])+utils.stringToNumber(globals.tabla17[26])+utils.stringToNumber(globals.tabla17[27])),"######")
				globals.tabla19[28]=utils.numberFormat((utils.stringToNumber(globals.tabla19[25])+utils.stringToNumber(globals.tabla19[26])+utils.stringToNumber(globals.tabla19[27])),"######")
				globals.tabla40[28]=utils.numberFormat((utils.stringToNumber(globals.tabla40[25])+utils.stringToNumber(globals.tabla40[26])+utils.stringToNumber(globals.tabla40[27])),"######")
				globals.tabla43[28]=utils.numberFormat((utils.stringToNumber(globals.tabla43[25])+utils.stringToNumber(globals.tabla43[26])+utils.stringToNumber(globals.tabla43[27])),"######")
				globals.tabla45[28]=utils.numberFormat((utils.stringToNumber(globals.tabla45[25])+utils.stringToNumber(globals.tabla45[26])+utils.stringToNumber(globals.tabla45[27])),"######")
				globals.tabla47[28]=utils.numberFormat((utils.stringToNumber(globals.tabla47[25])+utils.stringToNumber(globals.tabla47[26])+utils.stringToNumber(globals.tabla47[27])),"######")
				globals.tabla49[28]=utils.numberFormat((utils.stringToNumber(globals.tabla49[25])+utils.stringToNumber(globals.tabla49[26])+utils.stringToNumber(globals.tabla49[27])),"######")
				globals.tabla51[28]=utils.numberFormat((utils.stringToNumber(globals.tabla51[25])+utils.stringToNumber(globals.tabla51[26])+utils.stringToNumber(globals.tabla51[27])),"######")
				globals.tabla73[28]=utils.numberFormat((utils.stringToNumber(globals.tabla73[25])+utils.stringToNumber(globals.tabla73[26])+utils.stringToNumber(globals.tabla73[27])),"######")
				globals.tabla74[28]=utils.numberFormat((utils.stringToNumber(globals.tabla74[25])+utils.stringToNumber(globals.tabla74[26])+utils.stringToNumber(globals.tabla74[27])),"######")
				globals.tabla75[28]=utils.numberFormat((utils.stringToNumber(globals.tabla75[25])+utils.stringToNumber(globals.tabla75[26])+utils.stringToNumber(globals.tabla75[27])),"######")
			}
		  }
		}
	}
	
	
	
	if(resumen2_to_hojauti.getSize()>0){
		for(var tt=1;tt<=resumen2_to_hojauti.getSize();tt++){
			resumen2_to_hojauti.setSelectedIndex(tt)
			if(resumen2_to_hojauti.hora<600){
				if(resumen2_to_hojauti.hora<1000){
					minuto=resumen2_to_hojauti.hora.toString().substr(1,2)
				}else{
					minuto=resumen2_to_hojauti.hora.toString().substr(2,2)
				}
				if(minuto=='00'){
					if(resumen2_to_hojauti.hora<1000){
						hora=resumen2_to_hojauti.hora.toString().substr(0,1)
					}else{
						hora=resumen2_to_hojauti.hora.toString().substr(0,2)
					}
					switch (resumen2_to_hojauti.bal_ing_hidrata_tipo) {
						case 1:globals.tabla1[hora]='V.Oral';break;
						case 2:globals.tabla1[hora]='V.Parent.';break;
						case 3:globals.tabla1[hora]='V.Enteral.';break;
						case 0:globals.tabla1[hora]='Ninguna';break;
					}
					globals.tabla1[24]='Hidratacion Tipo  '
					globals.tabla2[hora]=resumen2_to_hojauti.bal_ing_hidrata_cant
					globals.tabla2[24]='Hidratacion Cant. '
					globals.tabla3[hora]=resumen2_to_hojauti.bal_ing_dilucion
					globals.tabla3[24]='Dilución          '
					switch (resumen2_to_hojauti.bal_ing_expansion_tipo) {
						case 1:globals.tabla4[hora]='Sol.Fisio';break;
						case 2:globals.tabla4[hora]='Ringer L.';break;
						case 3:globals.tabla4[hora]='Voluven';break;
						case 4:globals.tabla4[hora]='Haemaccel';break;
						case 5:globals.tabla4[hora]='Albumina';break;
						case 0:globals.tabla4[hora]='Ninguna';break;
					}	
					globals.tabla4[24]='Expansión Tipo    '
					globals.tabla5[hora]=resumen2_to_hojauti.bal_ing_expansion_cant
					globals.tabla5[24]='Expansión Cant.   '
					switch (resumen2_to_hojauti.bal_ing_sangre_tipo) {
						case 1:globals.tabla6[hora]='Glob.Rojo';break;
						case 2:globals.tabla6[hora]='Plasma';break;
						case 3:globals.tabla6[hora]='Plaquetas';break;
						case 0:globals.tabla6[hora]='Ninguno';break;
					}		
					globals.tabla6[24]='Sangre Tipo       '
					globals.tabla7[hora]=resumen2_to_hojauti.bal_ing_sangre_cant
					globals.tabla7[24]='Sangre Cant.      '
					switch (resumen2_to_hojauti.bal_ing_alimen_tipo) {
						case 1:globals.tabla8[hora]='Enteral';break;
						case 2:globals.tabla8[hora]='Parenteral';break;
						case 3:globals.tabla8[hora]='Oral';break;
						case 0:globals.tabla8[hora]='Ninguno';break;
					}			
					globals.tabla8[24]='Alimentación Tipo '
					globals.tabla9[hora]=resumen2_to_hojauti.bal_ing_alimen_cant
					globals.tabla9[24]='Alimentación Cant.'
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
					globals.tabla10[24]='BIC-1   Tipo      '	
					globals.tabla11[hora]=resumen2_to_hojauti.bal_ing_bic_1_cant
					globals.tabla11[24]='BIC-1   Cant.     '
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
					globals.tabla12[24]='BIC-2   Tipo      '	
					globals.tabla13[hora]=resumen2_to_hojauti.bal_ing_bic_2_cant
					globals.tabla13[24]='BIC-2   Cant.     '
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
					globals.tabla14[24]='BIC-3   Tipo      '	
					globals.tabla15[hora]=resumen2_to_hojauti.bal_ing_bic_3_cant
					globals.tabla15[24]='BIC-3   Cant.     '
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
					globals.tabla16[24]='BIC-4   Tipo      '	
					globals.tabla17[hora]=resumen2_to_hojauti.bal_ing_bic_4_cant
					globals.tabla17[24]='BIC-4   Cant.     '
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
					globals.tabla18[24]='BIC-5   Tipo      '	
					globals.tabla19[hora]=resumen2_to_hojauti.bal_ing_bic_5_cant
					globals.tabla19[24]='BIC-5   Cant.     '
				//-- Busca Otros Ingresos -----
					globals.vHora=hora
					if (hora>9){
						globals.vHora=globals.vHora.toString().substr(0,2)+'00'
					}else{
						globals.vHora=globals.vHora.toString().substr(0,1)+'00'
					}
					
					globals.tabla40[hora]=0	
					globals.tabla40[hora]= utils.numberFormat((utils.stringToNumber(globals.tabla2[hora])+utils.stringToNumber(globals.tabla3[hora])+utils.stringToNumber(globals.tabla5[hora])+utils.stringToNumber(globals.tabla7[hora])+utils.stringToNumber(globals.tabla9[hora])+utils.stringToNumber(globals.tabla11[hora])+utils.stringToNumber(globals.tabla13[hora])+utils.stringToNumber(globals.tabla15[hora])+utils.stringToNumber(globals.tabla17[hora])+utils.stringToNumber(globals.tabla19[hora])+utils.stringToNumber(globals.tabla20[hora])+utils.stringToNumber(globals.tabla21[hora])+utils.stringToNumber(globals.tabla22[hora])+utils.stringToNumber(globals.tabla23[hora])+utils.stringToNumber(globals.tabla24[hora])+utils.stringToNumber(globals.tabla25[hora])+utils.stringToNumber(globals.tabla26[hora])+utils.stringToNumber(globals.tabla27[hora])+utils.stringToNumber(globals.tabla28[hora])+utils.stringToNumber(globals.tabla29[hora])+utils.stringToNumber(globals.tabla30[hora])+utils.stringToNumber(globals.tabla31[hora])+utils.stringToNumber(globals.tabla32[hora])+utils.stringToNumber(globals.tabla33[hora])+utils.stringToNumber(globals.tabla34[hora])+utils.stringToNumber(globals.tabla35[hora])+utils.stringToNumber(globals.tabla36[hora])+utils.stringToNumber(globals.tabla37[hora])+utils.stringToNumber(globals.tabla38[hora])+utils.stringToNumber(globals.tabla39[hora])),"######")
					globals.tabla40[24]='Total Horario     '
					globals.tabla41[6]=utils.numberFormat((utils.stringToNumber(globals.tabla41[6])+utils.stringToNumber(globals.tabla40[hora])),"######")
					globals.tabla41[14]=globals.tabla41[6]
					globals.tabla41[22]=globals.tabla41[6]
					globals.tabla41[24]='Total en 24 Hs.  '
					switch (resumen2_to_hojauti.bal_egr_diuresis_tipo) {
						case 1:globals.tabla42[hora]='Pañal';break;
						case 2:globals.tabla42[hora]='Enteral';break;
						case 3:globals.tabla42[hora]='Sonda Vesical';break;
						case 4:globals.tabla42[hora]='Micción Espontánea';break;
						case 0:globals.tabla42[hora]='Ninguno';break;
					}			
					globals.tabla42[24]='Diuresis Tipo '
					globals.tabla43[hora]=resumen2_to_hojauti.bal_egr_diuresis_cant
					globals.tabla43[24]='Diuresis Cant.'	
					switch (resumen2_to_hojauti.bal_egr_drenaje1_tipo) {
						case 1:globals.tabla44[hora]='Pleural';break;
						case 2:globals.tabla44[hora]='Cefálico';break;
						case 3:globals.tabla44[hora]='Abdominal';break;
						case 4:globals.tabla44[hora]='Cadera';break;
						case 5:globals.tabla44[hora]='Mediastínico';break;
						case 0:globals.tabla44[hora]='Ninguno';break;
					}			
					globals.tabla44[24]='Drenaje-1  Tipo '
					globals.tabla45[hora]=resumen2_to_hojauti.bal_egr_drenaje1_cant
					globals.tabla45[24]='Drenaje-1  Cant.'	
					switch (resumen2_to_hojauti.bal_egr_drenaje2_tipo) {
						case 1:globals.tabla46[hora]='Pleural';break;
						case 2:globals.tabla46[hora]='Cefálico';break;
						case 3:globals.tabla46[hora]='Abdominal';break;
						case 4:globals.tabla46[hora]='Cadera';break;
						case 5:globals.tabla46[hora]='Mediastínico';break;
						case 0:globals.tabla46[hora]='Ninguno';break;
					}			
					globals.tabla46[24]='Drenaje-2  Tipo '
					globals.tabla47[hora]=resumen2_to_hojauti.bal_egr_drenaje2_cant
					globals.tabla47[24]='Drenaje-2  Cant.'	
					switch (resumen2_to_hojauti.bal_egr_drenaje3_tipo) {
						case 1:globals.tabla48[hora]='Pleural';break;
						case 2:globals.tabla48[hora]='Cefálico';break;
						case 3:globals.tabla48[hora]='Abdominal';break;
						case 4:globals.tabla48[hora]='Cadera';break;
						case 5:globals.tabla48[hora]='Mediastínico';break;
						case 0:globals.tabla48[hora]='Ninguno';break;
					}			
					globals.tabla48[24]='Drenaje-3  Tipo '
					globals.tabla49[hora]=resumen2_to_hojauti.bal_egr_drenaje3_cant
					globals.tabla49[24]='Drenaje-3  Cant.'
					switch (resumen2_to_hojauti.bal_egr_drenaje4_tipo) {
						case 1:globals.tabla50[hora]='Pleural';break;
						case 2:globals.tabla50[hora]='Cefálico';break;
						case 3:globals.tabla50[hora]='Abdominal';break;
						case 4:globals.tabla50[hora]='Cadera';break;
						case 5:globals.tabla50[hora]='Mediastínico';break;
						case 0:globals.tabla50[hora]='Ninguno';break;
					}			
					globals.tabla50[24]='Drenaje-4  Tipo '
					globals.tabla51[hora]=resumen2_to_hojauti.bal_egr_drenaje4_cant
					globals.tabla51[24]='Drenaje-4  Cant.'
					switch (resumen2_to_hojauti.bal_egr_tipo_emesis) {
						case 1:globals.tabla72[hora]='Alimentario';break;
						case 2:globals.tabla72[hora]='Bilis';break;
						case 3:globals.tabla72[hora]='Sangre';break;
						case 4:globals.tabla72[hora]='Moco';break;
						case 5:globals.tabla72[hora]='Pus';break;
						case 0:globals.tabla72[hora]='Ninguno';break;
					}			
					globals.tabla72[24]='Emesis   Tipo '
					globals.tabla73[hora]=resumen2_to_hojauti.bal_egr_cant_emesis
					globals.tabla73[24]='Emesis   Cant.'	
					globals.tabla74[hora]=resumen2_to_hojauti.bal_egr_cant_dialisis
					globals.tabla74[24]='Dialisis  Cant.'	
					globals.tabla75[hora]=0	
					globals.tabla75[hora]= utils.numberFormat((utils.stringToNumber(globals.tabla43[hora])+utils.stringToNumber(globals.tabla45[hora])+utils.stringToNumber(globals.tabla47[hora])+utils.stringToNumber(globals.tabla48[hora])+utils.stringToNumber(globals.tabla49[hora])+utils.stringToNumber(globals.tabla51[hora])+utils.stringToNumber(globals.tabla52[hora])+utils.stringToNumber(globals.tabla53[hora])+utils.stringToNumber(globals.tabla54[hora])+utils.stringToNumber(globals.tabla55[hora])+utils.stringToNumber(globals.tabla56[hora])+utils.stringToNumber(globals.tabla57[hora])+utils.stringToNumber(globals.tabla58[hora])+utils.stringToNumber(globals.tabla59[hora])+utils.stringToNumber(globals.tabla60[hora])+utils.stringToNumber(globals.tabla61[hora])+utils.stringToNumber(globals.tabla62[hora])+utils.stringToNumber(globals.tabla63[hora])+utils.stringToNumber(globals.tabla64[hora])+utils.stringToNumber(globals.tabla65[hora])+utils.stringToNumber(globals.tabla66[hora])+utils.stringToNumber(globals.tabla67[hora])+utils.stringToNumber(globals.tabla68[hora])+utils.stringToNumber(globals.tabla69[hora])+utils.stringToNumber(globals.tabla70[hora])+utils.stringToNumber(globals.tabla71[hora])+utils.stringToNumber(globals.tabla73[hora])+utils.stringToNumber(globals.tabla74[hora])),"######")
					globals.tabla75[24]='Total Horario     '
					globals.tabla76[6]=utils.numberFormat((utils.stringToNumber(globals.tabla76[6])+utils.stringToNumber(globals.tabla75[hora])),"######")
					globals.tabla76[14]=globals.tabla76[6]
					globals.tabla76[22]=globals.tabla76[6]
					globals.tabla76[24]='Total en 24 Hs.  '
					globals.tabla77[6]=utils.numberFormat((utils.stringToNumber(globals.tabla41[6])-utils.stringToNumber(globals.tabla76[6])),"######")
					globals.tabla77[14]=globals.tabla77[6]
					globals.tabla77[22]=globals.tabla77[6]
					globals.tabla77[24]='BALANCE EN 24 HS.  '
					cargo_tabla=true	
					if (hora>=6&&hora<14){
						globals.tabla2[25]=utils.numberFormat((utils.stringToNumber(globals.tabla2[25])+utils.stringToNumber(globals.tabla2[hora])),"######")
						globals.tabla3[25]=utils.numberFormat((utils.stringToNumber(globals.tabla3[25])+utils.stringToNumber(globals.tabla3[hora])),"######")
						globals.tabla5[25]=utils.numberFormat((utils.stringToNumber(globals.tabla5[25])+utils.stringToNumber(globals.tabla5[hora])),"######")
						globals.tabla7[25]=utils.numberFormat((utils.stringToNumber(globals.tabla7[25])+utils.stringToNumber(globals.tabla7[hora])),"######")
						globals.tabla9[25]=utils.numberFormat((utils.stringToNumber(globals.tabla9[25])+utils.stringToNumber(globals.tabla9[hora])),"######")
						globals.tabla11[25]=utils.numberFormat((utils.stringToNumber(globals.tabla11[25])+utils.stringToNumber(globals.tabla11[hora])),"######")
						globals.tabla13[25]=utils.numberFormat((utils.stringToNumber(globals.tabla13[25])+utils.stringToNumber(globals.tabla13[hora])),"######")
						globals.tabla15[25]=utils.numberFormat((utils.stringToNumber(globals.tabla15[25])+utils.stringToNumber(globals.tabla15[hora])),"######")
						globals.tabla17[25]=utils.numberFormat((utils.stringToNumber(globals.tabla17[25])+utils.stringToNumber(globals.tabla17[hora])),"######")
						globals.tabla19[25]=utils.numberFormat((utils.stringToNumber(globals.tabla19[25])+utils.stringToNumber(globals.tabla19[hora])),"######")
						globals.tabla40[25]=utils.numberFormat((utils.stringToNumber(globals.tabla40[25])+utils.stringToNumber(globals.tabla40[hora])),"######")
						globals.tabla43[25]=utils.numberFormat((utils.stringToNumber(globals.tabla43[25])+utils.stringToNumber(globals.tabla43[hora])),"######")
						globals.tabla45[25]=utils.numberFormat((utils.stringToNumber(globals.tabla45[25])+utils.stringToNumber(globals.tabla45[hora])),"######")
						globals.tabla47[25]=utils.numberFormat((utils.stringToNumber(globals.tabla47[25])+utils.stringToNumber(globals.tabla47[hora])),"######")
						globals.tabla49[25]=utils.numberFormat((utils.stringToNumber(globals.tabla49[25])+utils.stringToNumber(globals.tabla49[hora])),"######")
						globals.tabla51[25]=utils.numberFormat((utils.stringToNumber(globals.tabla51[25])+utils.stringToNumber(globals.tabla51[hora])),"######")
						globals.tabla73[25]=utils.numberFormat((utils.stringToNumber(globals.tabla73[25])+utils.stringToNumber(globals.tabla73[hora])),"######")
						globals.tabla74[25]=utils.numberFormat((utils.stringToNumber(globals.tabla74[25])+utils.stringToNumber(globals.tabla74[hora])),"######")
						globals.tabla75[25]=utils.numberFormat((utils.stringToNumber(globals.tabla75[25])+utils.stringToNumber(globals.tabla75[hora])),"######")
						globals.tabla78[25]=utils.numberFormat((utils.stringToNumber(globals.tabla40[25])-utils.stringToNumber(globals.tabla75[25])),"######")
						globals.tabla78[24]='BALANCE Turno '
					}else{
						if(hora>=14&&hora<22){
							globals.tabla2[26]=utils.numberFormat((utils.stringToNumber(globals.tabla2[26])+utils.stringToNumber(globals.tabla2[hora])),"######")
							globals.tabla3[26]=utils.numberFormat((utils.stringToNumber(globals.tabla3[26])+utils.stringToNumber(globals.tabla3[hora])),"######")
							globals.tabla5[26]=utils.numberFormat((utils.stringToNumber(globals.tabla5[26])+utils.stringToNumber(globals.tabla5[hora])),"######")
							globals.tabla7[26]=utils.numberFormat((utils.stringToNumber(globals.tabla7[26])+utils.stringToNumber(globals.tabla7[hora])),"######")
							globals.tabla9[26]=utils.numberFormat((utils.stringToNumber(globals.tabla9[26])+utils.stringToNumber(globals.tabla9[hora])),"######")
							globals.tabla11[26]=utils.numberFormat((utils.stringToNumber(globals.tabla11[26])+utils.stringToNumber(globals.tabla11[hora])),"######")
							globals.tabla13[26]=utils.numberFormat((utils.stringToNumber(globals.tabla13[26])+utils.stringToNumber(globals.tabla13[hora])),"######")
							globals.tabla15[26]=utils.numberFormat((utils.stringToNumber(globals.tabla15[26])+utils.stringToNumber(globals.tabla15[hora])),"######")
							globals.tabla17[26]=utils.numberFormat((utils.stringToNumber(globals.tabla17[26])+utils.stringToNumber(globals.tabla17[hora])),"######")
							globals.tabla19[26]=utils.numberFormat((utils.stringToNumber(globals.tabla19[26])+utils.stringToNumber(globals.tabla19[hora])),"######")
							globals.tabla40[26]=utils.numberFormat((utils.stringToNumber(globals.tabla40[26])+utils.stringToNumber(globals.tabla40[hora])),"######")
							globals.tabla43[26]=utils.numberFormat((utils.stringToNumber(globals.tabla43[26])+utils.stringToNumber(globals.tabla43[hora])),"######")
							globals.tabla45[26]=utils.numberFormat((utils.stringToNumber(globals.tabla45[26])+utils.stringToNumber(globals.tabla45[hora])),"######")
							globals.tabla47[26]=utils.numberFormat((utils.stringToNumber(globals.tabla47[26])+utils.stringToNumber(globals.tabla47[hora])),"######")
							globals.tabla49[26]=utils.numberFormat((utils.stringToNumber(globals.tabla49[26])+utils.stringToNumber(globals.tabla49[hora])),"######")
							globals.tabla51[26]=utils.numberFormat((utils.stringToNumber(globals.tabla51[26])+utils.stringToNumber(globals.tabla51[hora])),"######")
							globals.tabla73[26]=utils.numberFormat((utils.stringToNumber(globals.tabla73[26])+utils.stringToNumber(globals.tabla73[hora])),"######")
							globals.tabla74[26]=utils.numberFormat((utils.stringToNumber(globals.tabla74[26])+utils.stringToNumber(globals.tabla74[hora])),"######")
							globals.tabla75[26]=utils.numberFormat((utils.stringToNumber(globals.tabla75[26])+utils.stringToNumber(globals.tabla75[hora])),"######")
							globals.tabla78[26]=utils.numberFormat((utils.stringToNumber(globals.tabla40[26])-utils.stringToNumber(globals.tabla75[26])),"######")
							globals.tabla78[24]='BALANCE Turno '
						}else{
							if((hora>=22&&hora<24)||(hora>=0&&hora<6)){
								globals.tabla2[27]=utils.numberFormat((utils.stringToNumber(globals.tabla2[27])+utils.stringToNumber(globals.tabla2[hora])),"######")
								globals.tabla3[27]=utils.numberFormat((utils.stringToNumber(globals.tabla3[27])+utils.stringToNumber(globals.tabla3[hora])),"######")
								globals.tabla5[27]=utils.numberFormat((utils.stringToNumber(globals.tabla5[27])+utils.stringToNumber(globals.tabla5[hora])),"######")
								globals.tabla7[27]=utils.numberFormat((utils.stringToNumber(globals.tabla7[27])+utils.stringToNumber(globals.tabla7[hora])),"######")
								globals.tabla9[27]=utils.numberFormat((utils.stringToNumber(globals.tabla9[27])+utils.stringToNumber(globals.tabla9[hora])),"######")
								globals.tabla11[27]=utils.numberFormat((utils.stringToNumber(globals.tabla11[27])+utils.stringToNumber(globals.tabla11[hora])),"######")
								globals.tabla13[27]=utils.numberFormat((utils.stringToNumber(globals.tabla13[27])+utils.stringToNumber(globals.tabla13[hora])),"######")
								globals.tabla15[27]=utils.numberFormat((utils.stringToNumber(globals.tabla15[27])+utils.stringToNumber(globals.tabla15[hora])),"######")
								globals.tabla17[27]=utils.numberFormat((utils.stringToNumber(globals.tabla17[27])+utils.stringToNumber(globals.tabla17[hora])),"######")
								globals.tabla19[27]=utils.numberFormat((utils.stringToNumber(globals.tabla19[27])+utils.stringToNumber(globals.tabla19[hora])),"######")
								globals.tabla40[27]=utils.numberFormat((utils.stringToNumber(globals.tabla40[27])+utils.stringToNumber(globals.tabla40[hora])),"######")
								globals.tabla43[27]=utils.numberFormat((utils.stringToNumber(globals.tabla43[27])+utils.stringToNumber(globals.tabla43[hora])),"######")
								globals.tabla45[27]=utils.numberFormat((utils.stringToNumber(globals.tabla45[27])+utils.stringToNumber(globals.tabla45[hora])),"######")
								globals.tabla47[27]=utils.numberFormat((utils.stringToNumber(globals.tabla47[27])+utils.stringToNumber(globals.tabla47[hora])),"######")
								globals.tabla49[27]=utils.numberFormat((utils.stringToNumber(globals.tabla49[27])+utils.stringToNumber(globals.tabla49[hora])),"######")
								globals.tabla51[27]=utils.numberFormat((utils.stringToNumber(globals.tabla51[27])+utils.stringToNumber(globals.tabla51[hora])),"######")
								globals.tabla73[27]=utils.numberFormat((utils.stringToNumber(globals.tabla73[27])+utils.stringToNumber(globals.tabla73[hora])),"######")
								globals.tabla74[27]=utils.numberFormat((utils.stringToNumber(globals.tabla74[27])+utils.stringToNumber(globals.tabla74[hora])),"######")
								globals.tabla75[27]=utils.numberFormat((utils.stringToNumber(globals.tabla75[27])+utils.stringToNumber(globals.tabla75[hora])),"######")
								globals.tabla78[27]=utils.numberFormat((utils.stringToNumber(globals.tabla40[27])-utils.stringToNumber(globals.tabla75[27])),"######")
								globals.tabla78[24]='BALANCE Turno '
							}
						}
					}
					globals.tabla2[28]=utils.numberFormat((utils.stringToNumber(globals.tabla2[25])+utils.stringToNumber(globals.tabla2[26])+utils.stringToNumber(globals.tabla2[27])),"######")
					globals.tabla3[28]=utils.numberFormat((utils.stringToNumber(globals.tabla3[25])+utils.stringToNumber(globals.tabla3[26])+utils.stringToNumber(globals.tabla3[27])),"######")
					globals.tabla5[28]=utils.numberFormat((utils.stringToNumber(globals.tabla5[25])+utils.stringToNumber(globals.tabla5[26])+utils.stringToNumber(globals.tabla5[27])),"######")
					globals.tabla7[28]=utils.numberFormat((utils.stringToNumber(globals.tabla7[25])+utils.stringToNumber(globals.tabla7[26])+utils.stringToNumber(globals.tabla7[27])),"######")
					globals.tabla9[28]=utils.numberFormat((utils.stringToNumber(globals.tabla9[25])+utils.stringToNumber(globals.tabla9[26])+utils.stringToNumber(globals.tabla9[27])),"######")
					globals.tabla11[28]=utils.numberFormat((utils.stringToNumber(globals.tabla11[25])+utils.stringToNumber(globals.tabla11[26])+utils.stringToNumber(globals.tabla11[27])),"######")
					globals.tabla13[28]=utils.numberFormat((utils.stringToNumber(globals.tabla13[25])+utils.stringToNumber(globals.tabla13[26])+utils.stringToNumber(globals.tabla13[27])),"######")
					globals.tabla15[28]=utils.numberFormat((utils.stringToNumber(globals.tabla15[25])+utils.stringToNumber(globals.tabla15[26])+utils.stringToNumber(globals.tabla15[27])),"######")
					globals.tabla17[28]=utils.numberFormat((utils.stringToNumber(globals.tabla17[25])+utils.stringToNumber(globals.tabla17[26])+utils.stringToNumber(globals.tabla17[27])),"######")
					globals.tabla19[28]=utils.numberFormat((utils.stringToNumber(globals.tabla19[25])+utils.stringToNumber(globals.tabla19[26])+utils.stringToNumber(globals.tabla19[27])),"######")
					globals.tabla40[28]=utils.numberFormat((utils.stringToNumber(globals.tabla40[25])+utils.stringToNumber(globals.tabla40[26])+utils.stringToNumber(globals.tabla40[27])),"######")
					globals.tabla43[28]=utils.numberFormat((utils.stringToNumber(globals.tabla43[25])+utils.stringToNumber(globals.tabla43[26])+utils.stringToNumber(globals.tabla43[27])),"######")
					globals.tabla45[28]=utils.numberFormat((utils.stringToNumber(globals.tabla45[25])+utils.stringToNumber(globals.tabla45[26])+utils.stringToNumber(globals.tabla45[27])),"######")
					globals.tabla47[28]=utils.numberFormat((utils.stringToNumber(globals.tabla47[25])+utils.stringToNumber(globals.tabla47[26])+utils.stringToNumber(globals.tabla47[27])),"######")
					globals.tabla49[28]=utils.numberFormat((utils.stringToNumber(globals.tabla49[25])+utils.stringToNumber(globals.tabla49[26])+utils.stringToNumber(globals.tabla49[27])),"######")
					globals.tabla51[28]=utils.numberFormat((utils.stringToNumber(globals.tabla51[25])+utils.stringToNumber(globals.tabla51[26])+utils.stringToNumber(globals.tabla51[27])),"######")
					globals.tabla73[28]=utils.numberFormat((utils.stringToNumber(globals.tabla73[25])+utils.stringToNumber(globals.tabla73[26])+utils.stringToNumber(globals.tabla73[27])),"######")
					globals.tabla74[28]=utils.numberFormat((utils.stringToNumber(globals.tabla74[25])+utils.stringToNumber(globals.tabla74[26])+utils.stringToNumber(globals.tabla74[27])),"######")
					globals.tabla75[28]=utils.numberFormat((utils.stringToNumber(globals.tabla75[25])+utils.stringToNumber(globals.tabla75[26])+utils.stringToNumber(globals.tabla75[27])),"######")
				}
			}
		}
	}
		if(cargo_tabla){
			
			var tabla='';
			var tabla2='';
			for(var j=0;j<=78;j++){
				if (j>9){
					tabla = 'tabla'+ j.toString().substr(0,2)
				}else{
					tabla = 'tabla'+ j.toString().substr(0,1)
				}
				
				if (globals[tabla][24]!=''){
					vs_to_hojauti_resumen.newRecord()
					vs_to_hojauti_resumen.hiscli=globals.vHiscli
					vs_to_hojauti_resumen.tipo_opera=globals.vTipoOperador
					vs_to_hojauti_resumen.nro_operador=globals.vLegajo
					vs_to_hojauti_resumen.fecha=globals.vFecha
					vs_to_hojauti_resumen.item=1
					vs_to_hojauti_resumen.subitems=j
					vs_to_hojauti_resumen.concepto=globals[tabla][24]
					vs_to_hojauti_resumen.turno6='   '+globals[tabla][25]
					vs_to_hojauti_resumen.turno14='   '+globals[tabla][26]
					vs_to_hojauti_resumen.turno22='   '+globals[tabla][27]
					vs_to_hojauti_resumen.total24='   '+globals[tabla][28]
					for(var k=0;k<=23;k++){
						if (k>9){
							tabla2='hora'+k.toString().substr(0,2)
						}else{
							tabla2='hora'+k.toString().substr(0,1)
						}
									
						if(globals[tabla][k]!=0){
							if( globals[tabla][k]!=''){
								if( globals[tabla][k]!=null){
									vs_to_hojauti_resumen[tabla2]='   '+globals[tabla][k]									
								}else{
									vs_to_hojauti_resumen[tabla2]=''
								}
							}else{
								vs_to_hojauti_resumen[tabla2]='   '+globals[tabla][k]
							}
						}else{
							vs_to_hojauti_resumen[tabla2]=''
						}							 						      
					}
				}
			}
		databaseManager.saveData(vs_to_hojauti_resumen)
		}

	
	globals.items=1

}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"AE27DB39-7CA6-40B0-B98A-03F3B0A72045"}
 * @AllowToRunInFind
 */
function onShow_resumen_balance(firstShow, event) {
	globals.vDatasetSql=''
	application.updateUI()
	resumen_balance()
	vs_to_hojauti_resumen.find()
	globals.items=1
	vs_to_hojauti_resumen.search()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"75B00C99-9552-467E-A92C-5512486321DC"}
 */
function onAction_btn_14(event) {
	globals.vRangoHorario=2
	globals.vDatasetSql=''
	application.updateUI()
	var hora_tbl = new Array()
	hora_tbl[0]='hora14'
	hora_tbl[1]='hora15'
	hora_tbl[2]='hora16'
	hora_tbl[3]='hora17'
	hora_tbl[4]='hora18'
	hora_tbl[5]='hora19'
	hora_tbl[6]='hora20'
	hora_tbl[7]='hora21'
		
	var hora_as = new Array()
	hora_as[0]='14:00'
	hora_as[1]='15:00'
	hora_as[2]='16:00'
	hora_as[3]='17:00'
	hora_as[4]='18:00'
	hora_as[5]='19:00'
	hora_as[6]='20:00'
	hora_as[7]='21:00'
		
	globals.vQuerySql='select concepto, '
		              + hora_tbl[0] + ' as "' + hora_as[0] +'", '
		              + hora_tbl[1] + ' as "' + hora_as[1] +'", '
		              + hora_tbl[2] + ' as "' + hora_as[2] +'", '
		              + hora_tbl[3] + ' as "' + hora_as[3] +'", '
		              + hora_tbl[4] + ' as "' + hora_as[4] +'", '
		              + hora_tbl[5] + ' as "' + hora_as[5] +'", '
		              + hora_tbl[6] + ' as "' + hora_as[6] +'", '
		              + hora_tbl[7] + ' as "' + hora_as[7] +'", '
		              + 'turno14 as "Turno 14 a 21", '
					  + 'total24 as "Total 24Hs" '
		              + 'from hojauti_resumen where hiscli = '
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
 * @properties={typeid:24,uuid:"B51A4B4C-6193-4BB0-A76B-88F999E4380A"}
 */
function onAction_btn_22(event) {
	globals.vRangoHorario=3
	globals.vDatasetSql=''
	application.updateUI()
	var hora_tbl = new Array()
	hora_tbl[0]='hora22'
	hora_tbl[1]='hora23'
	hora_tbl[2]='hora0'
	hora_tbl[3]='hora1'
	hora_tbl[4]='hora2'
	hora_tbl[5]='hora3'
	hora_tbl[6]='hora4'
	hora_tbl[7]='hora5'
		
	var hora_as = new Array()
	hora_as[0]='22:00'
	hora_as[1]='23:00'
	hora_as[2]='0:00'
	hora_as[3]='1:00'
	hora_as[4]='2:00'
	hora_as[5]='3:00'
	hora_as[6]='4:00'
	hora_as[7]='5:00'
		
	globals.vQuerySql='select concepto, '
		              + hora_tbl[0] + ' as "' + hora_as[0] +'", '
		              + hora_tbl[1] + ' as "' + hora_as[1] +'", '
		              + hora_tbl[2] + ' as "' + hora_as[2] +'", '
		              + hora_tbl[3] + ' as "' + hora_as[3] +'", '
		              + hora_tbl[4] + ' as "' + hora_as[4] +'", '
		              + hora_tbl[5] + ' as "' + hora_as[5] +'", '
		              + hora_tbl[6] + ' as "' + hora_as[6] +'", '
		              + hora_tbl[7] + ' as "' + hora_as[7] +'", '
		              + 'turno22 as "Total 22 a 5 Hs", '
					  + 'total24 as "Total 24Hs" '
		              + 'from hojauti_resumen where hiscli = '
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
