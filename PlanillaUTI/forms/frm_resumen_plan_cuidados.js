/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"818094EB-B02D-4B59-818D-A9AEC04831BB"}
 * @AllowToRunInFind
 */
function onShow_resumen_2(firstShow, event) {
	resumen_Plan_Cuidados()
	vs_to_hojauti_resumen.find()
	globals.items=2
	vs_to_hojauti_resumen.search()
}

/**
 * @properties={typeid:24,uuid:"05658B4F-BA16-495F-95EC-C81235503AAE"}
 * @AllowToRunInFind
 */
function resumen_Plan_Cuidados() {
	globals.limpiaTablas()
	globals.items=2
	var final_mes = new Array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);
	globals.vFechaSiguiente=globals.vFecha
	if (globals.vFechaSiguiente==null){
		globals.vFechaSiguiente=application.getServerTimeStamp()
	}
	var resto = globals.vFechaSiguiente.getFullYear() % 4;
	if (resto == 0) {final_mes[1] = 29;}
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
	var minuto=''
	var cargo_tabla=false;
	var item_upd=15
	var tabla5=''
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
			if(resumen_to_hojauti.plan_banio_cama==1){
				globals.tabla1[hora]='Si'	
			}else{
				if(resumen_to_hojauti.plan_banio_cama!=null){
					globals.tabla1[hora]='No'
				}
			}
			globals.tabla1[24]='Baño en Cama     '
			if(resumen_to_hojauti.plan_higiene_parcial==1){
				globals.tabla2[hora]='Si'	
			}else{
				if(resumen_to_hojauti.plan_higiene_parcial!=null){
					globals.tabla2[hora]='No'
				}		
			}
			globals.tabla2[24]='Higiene Parcial  '
			if(resumen_to_hojauti.plan_higiene_ocular==1){
				globals.tabla3[hora]='Si'	
			}else{
				if(resumen_to_hojauti.plan_higiene_ocular!=null){
					globals.tabla3[hora]='No'
				}
			}
			globals.tabla3[24]='Higiene Ocular '	
			if(resumen_to_hojauti.plan_lavado_bucal==1){
				globals.tabla4[hora]='Si'	
			}else{
				if(resumen_to_hojauti.plan_lavado_bucal!=null){
					globals.tabla4[hora]='No'
				}
			}
			globals.tabla4[24]='Lavado Bucal  '
			globals.tabla5[hora]=resumen_to_hojauti.plan_rota_decubito	
			globals.tabla5[24]='Rotación Decubito  '	
			if(resumen_to_hojauti.plan_alimentacion==1){
				globals.tabla6[hora]='Si'	
			}else{
				if(resumen_to_hojauti.plan_alimentacion!=null){
					globals.tabla6[hora]='No'
				}
			}
			globals.tabla6[24]='Alimentación  '	
			if(resumen_to_hojauti.plan_oxigeno==1){
				globals.tabla7[hora]='Si'	
			}else{
				if(resumen_to_hojauti.plan_oxigeno!=null){
					globals.tabla7[hora]='No'
				}
			}
			globals.tabla7[24]='Oxigenoterapia  '	
			globals.tabla8[hora]=resumen_to_hojauti.plan_curacion_herida
			globals.tabla8[24]='Curación de Heridas'
			globals.tabla9[hora]=resumen_to_hojauti.plan_curacion_escaras
			globals.tabla9[24]='Curación de Escaras'
			if(resumen_to_hojauti.plan_banio_prequir==1){
				globals.tabla10[hora]='Si'	
			}else{
				if(resumen_to_hojauti.plan_banio_prequir!=null){
					globals.tabla10[hora]='No'
				}
			}
			globals.tabla10[24]='Baño Prequirúrgico'
			if(resumen_to_hojauti.plan_admin_medica==1){
				globals.tabla11[hora]='Si'	
			}else{
				if(resumen_to_hojauti.plan_admin_medica!=null){
					globals.tabla11[hora]='No'
				}
			}
			globals.tabla11[24]='Administración de Medicación'	
			if(resumen_to_hojauti.plan_uso_barandas==1){
				globals.tabla12[hora]='Si'	
			}else{
				if(resumen_to_hojauti.plan_uso_barandas!=null){
					globals.tabla12[hora]='No'
				}
			}
			globals.tabla12[24]='Uso de Barandas'	
			switch (resumen_to_hojauti.plan_medidas_prev_upd) {
			case 1:globals.tabla15[hora]='Crema Barrera';break;
			case 2:globals.tabla15[hora]='Parches Duoderm';break;
			case 3:globals.tabla15[hora]='Aros de goma';break;
			case 4:globals.tabla15[hora]='Taloneras';break;
			case 5:globals.tabla15[hora]='Colchón de aire';break;
			case 6:globals.tabla15[hora]='Varias';break;
			case 0:globals.tabla15[hora]='Ninguno  ';break;
		    }		
			globals.tabla15[24]='Medidas de Prevencion UPD'
			if(resumen_to_hojauti.plan_visita_fliar==1){
				globals.tabla13[hora]='Si'	
			}else{
				if(resumen_to_hojauti.plan_visita_fliar!=null){
					globals.tabla13[hora]='No'
				}
			}
			globals.tabla13[24]='Visita Familiar'	
			if(resumen_to_hojauti.plan_movilizacion==1){
				globals.tabla14[hora]='Si'	
			}else{
				if(resumen_to_hojauti.plan_movilizacion!=null){
					globals.tabla14[hora]='No'
				}
			}
			globals.tabla14[24]='Movilización'
			item_upd=15
			tabla5=''
			if(resumen_to_hojauti.plan_medidas_prev_upd==6){
				item_upd++
				tabla5='tabla'+ item_upd.toString().substr(0,2)
				if(resumen_to_hojauti.plan_crema==1){
					globals[tabla5][hora]='Si'	
				}else{
					if(resumen_to_hojauti.plan_crema!=null){
						globals[tabla5][hora]='No'
					}
				}
				globals[tabla5][24]='Crema Barrera'
				item_upd++
				tabla5='tabla'+ item_upd.toString().substr(0,2)
				if(resumen_to_hojauti.plan_parches==1){
					globals[tabla5][hora]='Si'	
				}else{
					if(resumen_to_hojauti.plan_parches!=null){
						globals[tabla5][hora]='No'
					}
				}
				globals[tabla5][24]='Parches Duoderm'
				item_upd++
				tabla5='tabla'+ item_upd.toString().substr(0,2)
				if(resumen_to_hojauti.plan_aro==1){
					globals[tabla5][hora]='Si'	
				}else{
					if(resumen_to_hojauti.plan_aro!=null){
						globals[tabla5][hora]='No'
					}
				}
				globals[tabla5][24]='Aro de Goma'
				item_upd++
				tabla5='tabla'+ item_upd.toString().substr(0,2)
				if(resumen_to_hojauti.plan_talonera==1){
					globals[tabla5][hora]='Si'	
				}else{
					if(resumen_to_hojauti.plan_talonera!=null){
						globals[tabla5][hora]='No'
					}
				}
				globals[tabla5][24]='Taloneras'
				item_upd++
				tabla5='tabla'+ item_upd.toString().substr(0,2)
				if(resumen_to_hojauti.plan_colchon==1){
					globals[tabla5][hora]='Si'	
				}else{
					if(resumen_to_hojauti.plan_colchon!=null){
						globals[tabla5][hora]='No'
					}
				}
				globals[tabla5][24]='Colchón de Aire'
				
			}
			cargo_tabla=true
		   }
		}
	}
	}
	if(resumen2_to_hojauti.getSize()>0){
		for(var ii=1;ii<=resumen2_to_hojauti.getSize();ii++){
			resumen2_to_hojauti.setSelectedIndex(ii)
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
				if(resumen2_to_hojauti.plan_banio_cama==1){
					globals.tabla1[hora]='Si'	
				}else{
					if(resumen2_to_hojauti.plan_banio_cama!=null){
						globals.tabla1[hora]='No'
					}
				}
				globals.tabla1[24]='Baño en Cama     '
				if(resumen2_to_hojauti.plan_higiene_parcial==1){
					globals.tabla2[hora]='Si'	
				}else{
					if(resumen2_to_hojauti.plan_higiene_parcial!=null){
						globals.tabla2[hora]='No'
					}		
				}
				globals.tabla2[24]='Higiene Parcial  '
				if(resumen2_to_hojauti.plan_higiene_ocular==1){
					globals.tabla3[hora]='Si'	
				}else{
					if(resumen2_to_hojauti.plan_higiene_ocular!=null){
						globals.tabla3[hora]='No'
					}
				}
				globals.tabla3[24]='Higiene Ocular '	
				if(resumen2_to_hojauti.plan_lavado_bucal==1){
					globals.tabla4[hora]='Si'	
				}else{
					if(resumen2_to_hojauti.plan_lavado_bucal!=null){
						globals.tabla4[hora]='No'
					}
				}
				globals.tabla4[24]='Lavado Bucal  '
				globals.tabla5[hora]=resumen2_to_hojauti.plan_rota_decubito	
				globals.tabla5[24]='Rotación Decubito  '	
				if(resumen2_to_hojauti.plan_alimentacion==1){
					globals.tabla6[hora]='Si'	
				}else{
					if(resumen2_to_hojauti.plan_alimentacion!=null){
						globals.tabla6[hora]='No'
					}
				}
				globals.tabla6[24]='Alimentación  '	
				if(resumen2_to_hojauti.plan_oxigeno==1){
					globals.tabla7[hora]='Si'	
				}else{
					if(resumen2_to_hojauti.plan_oxigeno!=null){
						globals.tabla7[hora]='No'
					}
				}
				globals.tabla7[24]='Oxigenoterapia  '	
				globals.tabla8[hora]=resumen2_to_hojauti.plan_curacion_herida
				globals.tabla8[24]='Curación de Heridas'
				globals.tabla9[hora]=resumen2_to_hojauti.plan_curacion_escaras
				globals.tabla9[24]='Curación de Escaras'
				if(resumen2_to_hojauti.plan_banio_prequir==1){
					globals.tabla10[hora]='Si'	
				}else{
					if(resumen2_to_hojauti.plan_banio_prequir!=null){
						globals.tabla10[hora]='No'
					}
				}
				globals.tabla10[24]='Baño Prequirúrgico'
				if(resumen2_to_hojauti.plan_admin_medica==1){
					globals.tabla11[hora]='Si'	
				}else{
					if(resumen2_to_hojauti.plan_admin_medica!=null){
						globals.tabla11[hora]='No'
					}
				}
				globals.tabla11[24]='Administración de Medicación'	
				if(resumen2_to_hojauti.plan_uso_barandas==1){
					globals.tabla12[hora]='Si'	
				}else{
					if(resumen2_to_hojauti.plan_uso_barandas!=null){
						globals.tabla12[hora]='No'
					}
				}
				globals.tabla12[24]='Uso de Barandas'	
				switch (resumen2_to_hojauti.plan_medidas_prev_upd) {
				case 1:globals.tabla15[hora]='Crema Barrera';break;
				case 2:globals.tabla15[hora]='Parches Duoderm';break;
				case 3:globals.tabla15[hora]='Aros de goma';break;
				case 4:globals.tabla15[hora]='Taloneras';break;
				case 5:globals.tabla15[hora]='Colchón de aire';break;
				case 6:globals.tabla15[hora]='Varias';break;
				case 0:globals.tabla15[hora]='Ninguno  ';break;
			    }		
				globals.tabla15[24]='Medidas de Prevencion UPD'
				if(resumen2_to_hojauti.plan_visita_fliar==1){
					globals.tabla13[hora]='Si'	
				}else{
					if(resumen2_to_hojauti.plan_visita_fliar!=null){
						globals.tabla13[hora]='No'
					}
				}
				globals.tabla13[24]='Visita Familiar'	
				if(resumen2_to_hojauti.plan_movilizacion==1){
					globals.tabla14[hora]='Si'	
				}else{
					if(resumen2_to_hojauti.plan_movilizacion!=null){
						globals.tabla14[hora]='No'
					}
				}
				globals.tabla14[24]='Movilización'
				item_upd=15
				tabla5=''
				if(resumen2_to_hojauti.plan_medidas_prev_upd==6){
					item_upd++
					tabla5='tabla'+ item_upd.toString().substr(0,2)
					if(resumen2_to_hojauti.plan_crema==1){
						globals[tabla5][hora]='Si'	
					}else{
						if(resumen2_to_hojauti.plan_crema!=null){
							globals[tabla5][hora]='No'
						}
					}
					globals[tabla5][24]='Crema Barrera'
					item_upd++
					tabla5='tabla'+ item_upd.toString().substr(0,2)
					if(resumen2_to_hojauti.plan_parches==1){
						globals[tabla5][hora]='Si'	
					}else{
						if(resumen2_to_hojauti.plan_parches!=null){
							globals[tabla5][hora]='No'
						}
					}
					globals[tabla5][24]='Parches Duoderm'
					item_upd++
					tabla5='tabla'+ item_upd.toString().substr(0,2)
					if(resumen2_to_hojauti.plan_aro==1){
						globals[tabla5][hora]='Si'	
					}else{
						if(resumen2_to_hojauti.plan_aro!=null){
							globals[tabla5][hora]='No'
						}
					}
					globals[tabla5][24]='Aro de Goma'
					item_upd++
					tabla5='tabla'+ item_upd.toString().substr(0,2)
					if(resumen2_to_hojauti.plan_talonera==1){
						globals[tabla5][hora]='Si'	
					}else{
						if(resumen2_to_hojauti.plan_talonera!=null){
							globals[tabla5][hora]='No'
						}
					}
					globals[tabla5][24]='Taloneras'
					item_upd++
					tabla5='tabla'+ item_upd.toString().substr(0,2)
					if(resumen2_to_hojauti.plan_colchon==1){
						globals[tabla5][hora]='Si'	
					}else{
						if(resumen2_to_hojauti.plan_colchon!=null){
							globals[tabla5][hora]='No'
						}
					}
					globals[tabla5][24]='Colchón de Aire'
					
				}
				cargo_tabla=true
			}
			}
		}
	}
		resumen_planes_to_hojauti_items.find()
		globals.vTipoOtrosPlan='otrosplan'
		resumen_planes_to_hojauti_items.search()
		var tabla3=''
		var y=0	
		var concepto_aux=''
		var x = 1
		var z = 0
		if (resumen_planes_to_hojauti_items.getSize()>0){
			x = 1
			z = 0
			concepto_aux=''
			resumen_planes_to_hojauti_items.setSelectedIndex(x)
			
			while(x<=resumen_planes_to_hojauti_items.getSize()&&z<10){
				
				y=z+21
				tabla3 = 'tabla'+ y.toString().substr(0,2)
				concepto_aux=resumen_planes_to_hojauti_items.concepto
				globals[tabla3][24]=concepto_aux
				while(x<=resumen_planes_to_hojauti_items.getSize()&&concepto_aux==resumen_planes_to_hojauti_items.concepto&&z<10){
					if(resumen_planes_to_hojauti_items.hora>500){
						globals[tabla3][utils.stringToNumber(resumen_planes_to_hojauti_items.hora)/100]=resumen_planes_to_hojauti_items.cantidad
						cargo_tabla=true
						++z
					}
					resumen_planes_to_hojauti_items.setSelectedIndex(++x)
				}
				
			}
			
		}else{
			for(var v=0;v<10;v++){
				y=v+21
				tabla3 = 'tabla'+ y.toString().substr(0,2)
				for(var w=0;w<=23;w++){
					globals[tabla3][w]=0
				}
				globals[tabla3][24]=''
			}
		}
		resumen2_planes_to_hojauti_items.find()
		globals.vTipoOtrosPlan='otrosplan'
		resumen2_planes_to_hojauti_items.search()
		tabla3=''
		y=0	
		concepto_aux=''
		x = 1
		z = 0
		if (resumen2_planes_to_hojauti_items.getSize()>0){
			x = 1
			z = 0
			concepto_aux=''
			resumen2_planes_to_hojauti_items.setSelectedIndex(x)
			
			while(x<=resumen2_planes_to_hojauti_items.getSize()&&z<10){
				y=z+31
				tabla3 = 'tabla'+ y.toString().substr(0,2)
				concepto_aux=resumen2_planes_to_hojauti_items.concepto
				globals[tabla3][24]=concepto_aux
				while(x<=resumen2_planes_to_hojauti_items.getSize()&&concepto_aux==resumen2_planes_to_hojauti_items.concepto&&z<10){
					if(resumen2_planes_to_hojauti_items.hora<600){
						globals[tabla3][utils.stringToNumber(resumen2_planes_to_hojauti_items.hora)/100]=resumen2_planes_to_hojauti_items.cantidad
						cargo_tabla=true
						++z
					}
					resumen2_planes_to_hojauti_items.setSelectedIndex(++x)
				}
			}
			
		}else{
			for(var vv=0;vv<10;vv++){
				y=vv+31
				tabla3 = 'tabla'+ y.toString().substr(0,2)
				for(var ww=0;ww<=23;ww++){
					globals[tabla3][ww]=0
				}
				globals[tabla3][24]=''
			}
		}
	
	if(cargo_tabla){
		var tabla='';
		var tabla2='';
		for(var j=0;j<=40;j++){
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
				vs_to_hojauti_resumen.item=2
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
	globals.items=2

}
