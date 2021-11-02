/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"D5024581-1255-4FB8-BA5A-23BED52C20E5"}
 * @AllowToRunInFind
 */
function onShow_resumen_2(firstShow, event) {
	resumen_Parametros()
	vs_to_hojauti_resumen.find()
	globals.items=3
	vs_to_hojauti_resumen.search()
	}

/**
 * @properties={typeid:24,uuid:"A24B2EF6-5C60-4A1E-ABE3-8CE57685F048"}
 */
function resumen_Parametros() {
	globals.limpiaTablas()
	globals.items=3
	var final_mes = new Array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);
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
				globals.tabla1[hora]=resumen_to_hojauti.param_ta_max
				globals.tabla1[24]='Tensión Arterial Máxima'
				globals.tabla2[hora]=resumen_to_hojauti.param_ta_min
				globals.tabla2[24]='Tensión Arterial Mínima'
				globals.tabla3[hora]=resumen_to_hojauti.param_fc
				globals.tabla3[24]='Frecuecia Cardíaca     '	
				globals.tabla4[hora]=resumen_to_hojauti.param_fr
				globals.tabla4[24]='Frecuecia Respiratoria '
				globals.tabla5[hora]=resumen_to_hojauti.param_temper
				globals.tabla5[24]='Temperatura            '
				globals.tabla6[hora]=resumen_to_hojauti.param_glasgow
				globals.tabla6[24]='Glasgow                '		
				globals.tabla7[hora]=resumen_to_hojauti.param_hgt
				globals.tabla7[24]='Hemoglucotest HGT      '
				globals.vHora=resumen_to_hojauti.hora
				globals.tabla8[hora]=resumen_to_hojauti.param_factor_hgt
				globals.tabla8[24]='Factor Corrección HGT  '
				globals.tabla9[hora]=resumen_to_hojauti.param_cant_hgt
				globals.tabla9[24]='Cant.Factor Correc. HGT'
				globals.tabla10[24]='Suministro Oxigeno'
				switch (resumen_to_hojauti.val_oxigeno) {
					case 0:globals.tabla10[hora]='';break;
					case 1:globals.tabla10[hora]='x Máscara';break;
					case 2:globals.tabla10[hora]='x Canula ';break;
					default:globals.tabla10[hora]='';break;
				}
				globals.tabla11[24]='Flujo de Oxigeno'
				globals.tabla11[hora]=resumen_to_hojauti.val_oxigeno_cant
				switch (resumen_to_hojauti.param_arm){
					case 1:globals.tabla12[hora]='TET';break;
					case 2:globals.tabla12[hora]='TQT';break;
					default:globals.tabla12[hora]='';break;	
				}
				globals.tabla12[24]='A.R.M.'
				switch (resumen_to_hojauti.param_vni){
					case 1:globals.tabla13[hora]='BIPAP';break;
					case 2:globals.tabla13[hora]='CPAP';break;
					case 3:globals.tabla13[hora]=resumen_to_hojauti.param_vni_otros;break;
					default:globals.tabla13[hora]='';break;	
				}
				globals.tabla13[24]='V.N.I.'
				switch (resumen_to_hojauti.param_modo_arm_vni){
					case 1:globals.tabla14[hora]='VCV';break;
					case 2:globals.tabla14[hora]='PCV';break;
					case 3:globals.tabla14[hora]='PSV';break;
					default:globals.tabla14[hora]='';break;	
				}
				globals.tabla14[24]='Modalidad'
				globals.tabla15[hora]=resumen_to_hojauti.param_fio2
				globals.tabla15[24]='FIO2               '
				globals.tabla16[hora]=resumen_to_hojauti.param_peep
				globals.tabla16[24]='PEEP               '	
				globals.tabla17[hora]=resumen_to_hojauti.param_fr_arm_vni
				globals.tabla17[24]='FR                 '		
				globals.tabla18[hora]=resumen_to_hojauti.param_vt
				globals.tabla18[24]='VT                 '			
				if(resumen_to_hojauti.param_tubo_t==1){
					globals.tabla19[hora]="Si"	
				}else{
					if(resumen_to_hojauti.param_tubo_t!=null){
						globals.tabla19[hora]="No"
					}
				}
				globals.tabla19[24]='Tubo T '
				globals.tabla20[hora]=resumen_to_hojauti.param_sat
				globals.tabla20[24]='SAT     '			
				globals.tabla21[hora]=resumen_to_hojauti.param_tam
				globals.tabla21[24]='Tensión Arterial Media TAM'	
				globals.tabla22[hora]=resumen_to_hojauti.param_pic
				globals.tabla22[24]='Presión Intr Craneana PIC'
				globals.tabla23[hora]=resumen_to_hojauti.param_ppc
				globals.tabla23[24]='PPC = TAM - PIC          '
				globals.tabla24[hora]=resumen_to_hojauti.param_pvc
				globals.tabla24[24]='PVC                      '
				globals.tabla25[hora]=resumen_to_hojauti.param_co2
				globals.tabla25[24]='CO2                      '		
				cargo_tabla=true	
			}
		}
	  }
	}
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
				globals.tabla1[hora]=resumen2_to_hojauti.param_ta_max
				globals.tabla1[24]='Tensión Arterial Máxima'
				globals.tabla2[hora]=resumen2_to_hojauti.param_ta_min
				globals.tabla2[24]='Tensión Arterial Mínima'
				globals.tabla3[hora]=resumen2_to_hojauti.param_fc
				globals.tabla3[24]='Frecuecia Cardíaca     '	
				globals.tabla4[hora]=resumen2_to_hojauti.param_fr
				globals.tabla4[24]='Frecuecia Respiratoria '
				globals.tabla5[hora]=resumen2_to_hojauti.param_temper
				globals.tabla5[24]='Temperatura            '
				globals.tabla6[hora]=resumen2_to_hojauti.param_glasgow
				globals.tabla6[24]='Glasgow                '		
				globals.tabla7[hora]=resumen2_to_hojauti.param_hgt
				globals.tabla7[24]='Hemoglucotest HGT      '
				globals.vHora=resumen2_to_hojauti.hora
				globals.tabla8[hora]=resumen2_to_hojauti.param_factor_hgt
				globals.tabla8[24]='Factor Corrección HGT  '
				globals.tabla9[hora]=resumen2_to_hojauti.param_cant_hgt
				globals.tabla9[24]='Cant.Factor Correc. HGT'
				globals.tabla10[24]='Suministro Oxigeno'
				switch (resumen2_to_hojauti.val_oxigeno) {
					case 0:globals.tabla10[hora]='';break;
					case 1:globals.tabla10[hora]='x Máscara';break;
					case 2:globals.tabla10[hora]='x Canula ';break;
					default:globals.tabla10[hora]='';break;
				}
				globals.tabla11[24]='Flujo de Oxigeno'
				globals.tabla11[hora]=resumen2_to_hojauti.val_oxigeno_cant
				switch (resumen2_to_hojauti.param_arm){
					case 1:globals.tabla12[hora]='TET';break;
					case 2:globals.tabla12[hora]='TQT';break;
					default:globals.tabla12[hora]='';break;	
				}
				globals.tabla12[24]='A.R.M.'
				switch (resumen2_to_hojauti.param_vni){
					case 1:globals.tabla13[hora]='BIPAP';break;
					case 2:globals.tabla13[hora]='CPAP';break;
					case 3:globals.tabla13[hora]=resumen2_to_hojauti.param_vni_otros;break;
					default:globals.tabla13[hora]='';break;	
				}
				globals.tabla13[24]='V.N.I.'
				switch (resumen2_to_hojauti.param_modo_arm_vni){
					case 1:globals.tabla14[hora]='VCV';break;
					case 2:globals.tabla14[hora]='PCV';break;
					case 3:globals.tabla14[hora]='PSV';break;
					default:globals.tabla14[hora]='';break;	
				}
				globals.tabla14[24]='Modalidad'
				globals.tabla15[hora]=resumen2_to_hojauti.param_fio2
				globals.tabla15[24]='FIO2               '
				globals.tabla16[hora]=resumen2_to_hojauti.param_peep
				globals.tabla16[24]='PEEP               '	
				globals.tabla17[hora]=resumen2_to_hojauti.param_fr_arm_vni
				globals.tabla17[24]='FR                 '		
				globals.tabla18[hora]=resumen2_to_hojauti.param_vt
				globals.tabla18[24]='VT                 '			
				if(resumen2_to_hojauti.param_tubo_t==1){
					globals.tabla19[hora]="Si"	
				}else{
					if(resumen2_to_hojauti.param_tubo_t!=null){
						globals.tabla19[hora]="No"
					}
				}
				globals.tabla19[24]='Tubo T '
				globals.tabla20[hora]=resumen2_to_hojauti.param_sat
				globals.tabla20[24]='SAT     '			
				globals.tabla21[hora]=resumen2_to_hojauti.param_tam
				globals.tabla21[24]='Tensión Arterial Media TAM'	
				globals.tabla22[hora]=resumen2_to_hojauti.param_pic
				globals.tabla22[24]='Presión Intr Craneana PIC'
				globals.tabla23[hora]=resumen2_to_hojauti.param_ppc
				globals.tabla23[24]='PPC = TAM - PIC          '
				globals.tabla24[hora]=resumen2_to_hojauti.param_pvc
				globals.tabla24[24]='PVC                      '
				globals.tabla25[hora]=resumen2_to_hojauti.param_co2
				globals.tabla25[24]='CO2                      '	
				cargo_tabla=true		
			}
		  }
		}
	}
	if(cargo_tabla){
		var tabla='';
		var tabla2='';
		for(var j=0;j<=25;j++){
			vs_to_hojauti_resumen.newRecord()
			vs_to_hojauti_resumen.hiscli=globals.vHiscli
			vs_to_hojauti_resumen.tipo_opera=globals.vTipoOperador
			vs_to_hojauti_resumen.nro_operador=globals.vLegajo
			vs_to_hojauti_resumen.fecha=globals.vFecha
			vs_to_hojauti_resumen.item=3
			vs_to_hojauti_resumen.subitems=j
			if (j>9){
				tabla = 'tabla'+ j.toString().substr(0,2)
			}else{
		    	tabla = 'tabla'+ j.toString().substr(0,1)
			}
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
		databaseManager.saveData(vs_to_hojauti_resumen)
	}
	globals.items=3

}
