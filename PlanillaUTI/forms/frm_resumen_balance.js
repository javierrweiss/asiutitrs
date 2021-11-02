
/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"57F44A1C-8652-484C-B172-74F01EFFF866"}
 * @AllowToRunInFind
 */
function onShow_resumen_1(firstShow, event) {
	resumen_Balance()
	vs_to_hojauti_resumen.find()
	globals.items=1
	vs_to_hojauti_resumen.search()
}

/**
 * @properties={typeid:24,uuid:"B91137BF-BAD6-45B1-8689-06EA0F1250D1"}
 * @AllowToRunInFind
 */
function resumen_Balance() {
	globals.limpiaTablas()
	globals.tabla16[6]=0
	globals.tabla33[6]=0
	globals.tabla34[6]=0
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
		
		while(x<=otros_ingreso_resumen_to_hojauti_items.getSize()&&z<5){
			if(otros_ingreso_resumen_to_hojauti_items.hora>500){
			y=z+20
			tabla3 = 'tabla'+ y.toString().substr(0,2)
			concepto_aux=otros_ingreso_resumen_to_hojauti_items.concepto
			globals[tabla3][24]=concepto_aux
			while(x<=otros_ingreso_resumen_to_hojauti_items.getSize()&&concepto_aux==otros_ingreso_resumen_to_hojauti_items.concepto&&z<5){
				globals[tabla3][utils.stringToNumber(otros_ingreso_resumen_to_hojauti_items.hora)/100]=utils.numberFormat((utils.stringToNumber(otros_ingreso_resumen_to_hojauti_items.cantidad)),"######")
				otros_ingreso_resumen_to_hojauti_items.setSelectedIndex(++x)
			}
			}
			++z
		}
		
	}else{
		for(var v=0;v<5;v++){
			y=v+20
			tabla3 = 'tabla'+ y.toString().substr(0,2)
			for(w=0;w<=23;w++){
				globals[tabla3][w]=0
			}
			globals[tabla3][24]=''
		}
	}
	otros_ingreso_resumen2_to_hojauti_items.find()
	globals.vTipoOtrosIngresos='otrosing'
	otros_ingreso_resumen2_to_hojauti_items.search()
	if (otros_ingreso_resumen2_to_hojauti_items.getSize()>0){
		concepto_aux=''
		otros_ingreso_resumen2_to_hojauti_items.setSelectedIndex(x)
		
		while(x<=otros_ingreso_resumen2_to_hojauti_items.getSize()&&z<5){
			if(otros_ingreso_resumen2_to_hojauti_items.hora<600){
			y=z+20
			tabla3 = 'tabla'+ y.toString().substr(0,2)
			concepto_aux=otros_ingreso_resumen2_to_hojauti_items.concepto
			globals[tabla3][24]=concepto_aux
			while(x<=otros_ingreso_resumen2_to_hojauti_items.getSize()&&concepto_aux==otros_ingreso_resumen2_to_hojauti_items.concepto&&z<5){
				globals[tabla3][utils.stringToNumber(otros_ingreso_resumen2_to_hojauti_items.hora)/100]=utils.numberFormat((utils.stringToNumber(otros_ingreso_resumen2_to_hojauti_items.cantidad)),"######")
				otros_ingreso_resumen2_to_hojauti_items.setSelectedIndex(++x)
			}
			}
			++z
		}
		
	}else{
		for(var vv=0;v<5;v++){
			y=vv+20
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
		
		while(n<=otros_egresos_resumen_to_hojauti_items.getSize()&&m<5){
			if(otros_egresos_resumen_to_hojauti_items.hora>500){
			p=m+37
			tabla4 = 'tabla'+ p.toString().substr(0,2)
			concepto_aux=otros_egresos_resumen_to_hojauti_items.concepto
			globals[tabla4][24]=concepto_aux
			while(n<=otros_egresos_resumen_to_hojauti_items.getSize()&&concepto_aux==otros_egresos_resumen_to_hojauti_items.concepto){
				globals[tabla4][utils.stringToNumber(otros_egresos_resumen_to_hojauti_items.hora)/100]=utils.numberFormat((utils.stringToNumber(otros_egresos_resumen_to_hojauti_items.cantidad)),"#####")
				otros_egresos_resumen_to_hojauti_items.setSelectedIndex(++n)
			}
			}
			++m
		}
	}else{
		for(var t=0;t<5;t++){
			p=t+37
			tabla4 = 'tabla'+ p.toString().substr(0,2)
			for(w=0;w<=23;w++){
					globals[tabla4][w]=0
			}
			globals[tabla4][24]=''
		}
	}	
	otros_egresos_resumen2_to_hojauti_items.find()
	globals.vTipoOtrosEgresos='otrosegr'
	otros_egresos_resumen2_to_hojauti_items.search()
	if (otros_egresos_resumen2_to_hojauti_items.getSize()>0){
		concepto_aux=''
		otros_egresos_resumen2_to_hojauti_items.setSelectedIndex(n)
		
		while(n<=otros_egresos_resumen2_to_hojauti_items.getSize()&&m<5){
			if(otros_egresos_resumen2_to_hojauti_items.hora<600){
			p=m+37
			tabla4 = 'tabla'+ p.toString().substr(0,2)
			concepto_aux=otros_egresos_resumen2_to_hojauti_items.concepto
			globals[tabla4][24]=concepto_aux
			while(n<=otros_egresos_resumen2_to_hojauti_items.getSize()&&concepto_aux==otros_egresos_resumen2_to_hojauti_items.concepto){
				globals[tabla4][utils.stringToNumber(otros_egresos_resumen2_to_hojauti_items.hora)/100]=utils.numberFormat((utils.stringToNumber(otros_egresos_resumen2_to_hojauti_items.cantidad)),"#####")
				otros_egresos_resumen2_to_hojauti_items.setSelectedIndex(++n)
			}
			}
			++m
		}
	}else{
		for(var tz=0;tz<5;tz++){
			p=tz+37
			tabla4 = 'tabla'+ p.toString().substr(0,2)
			for(w=0;w<=23;w++){
					globals[tabla4][w]=0
			}
			globals[tabla4][24]=''
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
				
				globals.tabla25[hora]=0	
				globals.tabla25[hora]= utils.numberFormat((utils.stringToNumber(globals.tabla2[hora])+utils.stringToNumber(globals.tabla3[hora])+utils.stringToNumber(globals.tabla5[hora])+utils.stringToNumber(globals.tabla7[hora])+utils.stringToNumber(globals.tabla9[hora])+utils.stringToNumber(globals.tabla11[hora])+utils.stringToNumber(globals.tabla13[hora])+utils.stringToNumber(globals.tabla15[hora])+utils.stringToNumber(globals.tabla17[hora])+utils.stringToNumber(globals.tabla19[hora])+utils.stringToNumber(globals.tabla20[hora])+utils.stringToNumber(globals.tabla21[hora])+utils.stringToNumber(globals.tabla22[hora])+utils.stringToNumber(globals.tabla23[hora])+utils.stringToNumber(globals.tabla24[hora])),"######")
				globals.tabla25[24]='Total Horario     '
				globals.tabla26[6]=utils.numberFormat((utils.stringToNumber(globals.tabla26[6])+utils.stringToNumber(globals.tabla25[hora])),"######")
				globals.tabla26[24]='Total en 24 Hs.  '
				switch (resumen_to_hojauti.bal_egr_diuresis_tipo) {
					case 1:globals.tabla27[hora]='Pañal';break;
					case 2:globals.tabla27[hora]='Enteral';break;
					case 3:globals.tabla27[hora]='Sonda Vesical';break;
					case 4:globals.tabla27[hora]='Micción Espontánea';break;
					case 0:globals.tabla27[hora]='Ninguno';break;
				}			
				globals.tabla27[24]='Diuresis Tipo '
				globals.tabla28[hora]=resumen_to_hojauti.bal_egr_diuresis_cant
				globals.tabla28[24]='Diuresis Cant.'	
				switch (resumen_to_hojauti.bal_egr_drenaje1_tipo) {
					case 1:globals.tabla29[hora]='Pleural';break;
					case 2:globals.tabla29[hora]='Cefálico';break;
					case 3:globals.tabla29[hora]='Abdominal';break;
					case 4:globals.tabla29[hora]='Cadera';break;
					case 5:globals.tabla29[hora]='Mediastínico';break;
					case 0:globals.tabla29[hora]='Ninguno';break;
				}			
				globals.tabla29[24]='Drenaje-1  Tipo '
				globals.tabla30[hora]=resumen_to_hojauti.bal_egr_drenaje1_cant
				globals.tabla30[24]='Drenaje-1  Cant.'	
				switch (resumen_to_hojauti.bal_egr_drenaje2_tipo) {
					case 1:globals.tabla31[hora]='Pleural';break;
					case 2:globals.tabla31[hora]='Cefálico';break;
					case 3:globals.tabla31[hora]='Abdominal';break;
					case 4:globals.tabla31[hora]='Cadera';break;
					case 5:globals.tabla31[hora]='Mediastínico';break;
					case 0:globals.tabla31[hora]='Ninguno';break;
				}			
				globals.tabla31[24]='Drenaje-2  Tipo '
				globals.tabla32[hora]=resumen_to_hojauti.bal_egr_drenaje2_cant
				globals.tabla32[24]='Drenaje-2  Cant.'	
				switch (resumen_to_hojauti.bal_egr_drenaje3_tipo) {
					case 1:globals.tabla33[hora]='Pleural';break;
					case 2:globals.tabla33[hora]='Cefálico';break;
					case 3:globals.tabla33[hora]='Abdominal';break;
					case 4:globals.tabla33[hora]='Cadera';break;
					case 5:globals.tabla33[hora]='Mediastínico';break;
					case 0:globals.tabla33[hora]='Ninguno';break;
				}			
				globals.tabla33[24]='Drenaje-3  Tipo '
				globals.tabla34[hora]=resumen_to_hojauti.bal_egr_drenaje3_cant
				globals.tabla34[24]='Drenaje-3  Cant.'
				switch (resumen_to_hojauti.bal_egr_drenaje4_tipo) {
					case 1:globals.tabla35[hora]='Pleural';break;
					case 2:globals.tabla35[hora]='Cefálico';break;
					case 3:globals.tabla35[hora]='Abdominal';break;
					case 4:globals.tabla35[hora]='Cadera';break;
					case 5:globals.tabla35[hora]='Mediastínico';break;
					case 0:globals.tabla35[hora]='Ninguno';break;
				}			
				globals.tabla35[24]='Drenaje-4  Tipo '
				globals.tabla36[hora]=resumen_to_hojauti.bal_egr_drenaje4_cant
				globals.tabla36[24]='Drenaje-4  Cant.'
				switch (resumen_to_hojauti.bal_egr_tipo_emesis) {
					case 1:globals.tabla42[hora]='Alimentario';break;
					case 2:globals.tabla42[hora]='Bilis';break;
					case 3:globals.tabla42[hora]='Sangre';break;
					case 4:globals.tabla42[hora]='Moco';break;
					case 5:globals.tabla42[hora]='Pus';break;
					case 0:globals.tabla42[hora]='Ninguno';break;
				}			
				globals.tabla42[24]='Emesis   Tipo '
				globals.tabla43[hora]=resumen_to_hojauti.bal_egr_cant_emesis
				globals.tabla43[24]='Emesis   Cant.'	
				globals.tabla44[hora]=resumen_to_hojauti.bal_egr_cant_dialisis
				globals.tabla44[24]='Dialisis  Cant.'	
				globals.tabla45[hora]=0	
				globals.tabla45[hora]= utils.numberFormat((utils.stringToNumber(globals.tabla28[hora])+utils.stringToNumber(globals.tabla30[hora])+utils.stringToNumber(globals.tabla32[hora])+utils.stringToNumber(globals.tabla34[hora])+utils.stringToNumber(globals.tabla36[hora])+utils.stringToNumber(globals.tabla37[hora])+utils.stringToNumber(globals.tabla38[hora])+utils.stringToNumber(globals.tabla39[hora])+utils.stringToNumber(globals.tabla40[hora])+utils.stringToNumber(globals.tabla41[hora])+utils.stringToNumber(globals.tabla43[hora])+utils.stringToNumber(globals.tabla44[hora])),"######")
				globals.tabla45[24]='Total Horario     '
				globals.tabla46[6]=utils.numberFormat((utils.stringToNumber(globals.tabla46[6])+utils.stringToNumber(globals.tabla45[hora])),"######")
				globals.tabla46[24]='Total en 24 Hs.  '
				globals.tabla47[6]=utils.numberFormat((utils.stringToNumber(globals.tabla26[6])-utils.stringToNumber(globals.tabla46[6])),"######")
				globals.tabla47[24]='BALANCE EN 24 HS.  '
				cargo_tabla=true
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
					
					globals.tabla25[hora]=0	
					globals.tabla25[hora]= utils.numberFormat((utils.stringToNumber(globals.tabla2[hora])+utils.stringToNumber(globals.tabla3[hora])+utils.stringToNumber(globals.tabla5[hora])+utils.stringToNumber(globals.tabla7[hora])+utils.stringToNumber(globals.tabla9[hora])+utils.stringToNumber(globals.tabla11[hora])+utils.stringToNumber(globals.tabla13[hora])+utils.stringToNumber(globals.tabla15[hora])+utils.stringToNumber(globals.tabla17[hora])+utils.stringToNumber(globals.tabla19[hora])+utils.stringToNumber(globals.tabla20[hora])+utils.stringToNumber(globals.tabla21[hora])+utils.stringToNumber(globals.tabla22[hora])+utils.stringToNumber(globals.tabla23[hora])+utils.stringToNumber(globals.tabla24[hora])),"######")
					globals.tabla25[24]='Total Horario     '
					globals.tabla26[6]=utils.numberFormat((utils.stringToNumber(globals.tabla26[6])+utils.stringToNumber(globals.tabla25[hora])),"######")
					globals.tabla26[24]='Total en 24 Hs.  '
					switch (resumen2_to_hojauti.bal_egr_diuresis_tipo) {
						case 1:globals.tabla27[hora]='Pañal';break;
						case 2:globals.tabla27[hora]='Enteral';break;
						case 3:globals.tabla27[hora]='Sonda Vesical';break;
						case 4:globals.tabla27[hora]='Micción Espontánea';break;
						case 0:globals.tabla27[hora]='Ninguno';break;
					}			
					globals.tabla27[24]='Diuresis Tipo '
					globals.tabla28[hora]=resumen2_to_hojauti.bal_egr_diuresis_cant
					globals.tabla28[24]='Diuresis Cant.'	
					switch (resumen2_to_hojauti.bal_egr_drenaje1_tipo) {
						case 1:globals.tabla29[hora]='Pleural';break;
						case 2:globals.tabla29[hora]='Cefálico';break;
						case 3:globals.tabla29[hora]='Abdominal';break;
						case 4:globals.tabla29[hora]='Cadera';break;
						case 5:globals.tabla29[hora]='Mediastínico';break;
						case 0:globals.tabla29[hora]='Ninguno';break;
					}			
					globals.tabla29[24]='Drenaje-1  Tipo '
					globals.tabla30[hora]=resumen2_to_hojauti.bal_egr_drenaje1_cant
					globals.tabla30[24]='Drenaje-1  Cant.'	
					switch (resumen2_to_hojauti.bal_egr_drenaje2_tipo) {
						case 1:globals.tabla31[hora]='Pleural';break;
						case 2:globals.tabla31[hora]='Cefálico';break;
						case 3:globals.tabla31[hora]='Abdominal';break;
						case 4:globals.tabla31[hora]='Cadera';break;
						case 5:globals.tabla31[hora]='Mediastínico';break;
						case 0:globals.tabla31[hora]='Ninguno';break;
					}			
					globals.tabla31[24]='Drenaje-2  Tipo '
					globals.tabla32[hora]=resumen2_to_hojauti.bal_egr_drenaje2_cant
					globals.tabla32[24]='Drenaje-2  Cant.'	
					switch (resumen2_to_hojauti.bal_egr_drenaje3_tipo) {
						case 1:globals.tabla33[hora]='Pleural';break;
						case 2:globals.tabla33[hora]='Cefálico';break;
						case 3:globals.tabla33[hora]='Abdominal';break;
						case 4:globals.tabla33[hora]='Cadera';break;
						case 5:globals.tabla33[hora]='Mediastínico';break;
						case 0:globals.tabla33[hora]='Ninguno';break;
					}			
					globals.tabla33[24]='Drenaje-3  Tipo '
					globals.tabla34[hora]=resumen2_to_hojauti.bal_egr_drenaje3_cant
					globals.tabla34[24]='Drenaje-3  Cant.'
					switch (resumen2_to_hojauti.bal_egr_drenaje4_tipo) {
						case 1:globals.tabla35[hora]='Pleural';break;
						case 2:globals.tabla35[hora]='Cefálico';break;
						case 3:globals.tabla35[hora]='Abdominal';break;
						case 4:globals.tabla35[hora]='Cadera';break;
						case 5:globals.tabla35[hora]='Mediastínico';break;
						case 0:globals.tabla35[hora]='Ninguno';break;
					}			
					globals.tabla35[24]='Drenaje-4  Tipo '
					globals.tabla36[hora]=resumen2_to_hojauti.bal_egr_drenaje4_cant
					globals.tabla36[24]='Drenaje-4  Cant.'
					switch (resumen2_to_hojauti.bal_egr_tipo_emesis) {
						case 1:globals.tabla42[hora]='Alimentario';break;
						case 2:globals.tabla42[hora]='Bilis';break;
						case 3:globals.tabla42[hora]='Sangre';break;
						case 4:globals.tabla42[hora]='Moco';break;
						case 5:globals.tabla42[hora]='Pus';break;
						case 0:globals.tabla42[hora]='Ninguno';break;
					}			
					globals.tabla42[24]='Emesis   Tipo '
					globals.tabla43[hora]=resumen2_to_hojauti.bal_egr_cant_emesis
					globals.tabla43[24]='Emesis   Cant.'	
					globals.tabla44[hora]=resumen2_to_hojauti.bal_egr_cant_dialisis
					globals.tabla44[24]='Dialisis  Cant.'	
					globals.tabla45[hora]=0	
					globals.tabla45[hora]= utils.numberFormat((utils.stringToNumber(globals.tabla28[hora])+utils.stringToNumber(globals.tabla30[hora])+utils.stringToNumber(globals.tabla32[hora])+utils.stringToNumber(globals.tabla34[hora])+utils.stringToNumber(globals.tabla36[hora])+utils.stringToNumber(globals.tabla37[hora])+utils.stringToNumber(globals.tabla38[hora])+utils.stringToNumber(globals.tabla39[hora])+utils.stringToNumber(globals.tabla40[hora])+utils.stringToNumber(globals.tabla41[hora])+utils.stringToNumber(globals.tabla43[hora])+utils.stringToNumber(globals.tabla44[hora])),"######")
					globals.tabla45[24]='Total Horario     '
					globals.tabla46[6]=utils.numberFormat((utils.stringToNumber(globals.tabla46[6])+utils.stringToNumber(globals.tabla45[hora])),"######")
					globals.tabla46[24]='Total en 24 Hs.  '
					globals.tabla47[6]=utils.numberFormat((utils.stringToNumber(globals.tabla26[6])-utils.stringToNumber(globals.tabla46[6])),"######")
					globals.tabla47[24]='BALANCE EN 24 HS.  '
					cargo_tabla=true	
				}
			}
		}
		if(cargo_tabla){
			var tabla='';
			var tabla2='';
			for(var j=0;j<=47;j++){
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
					for(var k=0;k<=23;k++){
						if (k>9){
							tabla2='hora'+k.toString().substr(0,2)
						}else{
							tabla2='hora'+k.toString().substr(0,1)
						}
									
						if(globals[tabla][k]!=0){
							if( globals[tabla][k]!=''){
								if( globals[tabla][k]!=null){
									vs_to_hojauti_resumen[tabla2]=globals[tabla][k]									
								}	  
							} 
						}      
					}
				}
			}
		databaseManager.saveData(vs_to_hojauti_resumen)
		}
	}
	globals.items=1

}
