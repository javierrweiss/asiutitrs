/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"1C243221-D218-4B70-8E9A-5B43A0ADED9F"}
 * @AllowToRunInFind
 */
function onShow_resumen_1(firstShow, event) {
	resumen_Valoracion()
	vs_to_hojauti_resumen.find()
	globals.items=4
	vs_to_hojauti_resumen.search()
}

/**
 * @properties={typeid:24,uuid:"D79F7728-411A-499F-88AA-AA8BE4A9F117"}
 * @AllowToRunInFind
 */
function resumen_Valoracion() {
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
	var cargo_tabla=false
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
			globals.tabla1[24]='Dolor  '
			switch (resumen_to_hojauti.val_tip_dolor) {
			    case 1:globals.tabla2[hora]='Quemante';break;
			    case 2:globals.tabla2[hora]='Punzante';break;
			    case 3:globals.tabla2[hora]='Opresivo';break;
			    case 0:globals.tabla2[hora]='Ninguno';break;
			    default:globals.tabla2[hora]='';break;
			}	
			globals.tabla2[24]='Dolor    Tipo '
			switch (resumen_to_hojauti.val_disnea) {
		          case 1:globals.tabla3[hora]='I';break;
		          case 2:globals.tabla3[hora]='II';break;
		          case 3:globals.tabla3[hora]='III';break;
		          case 4:globals.tabla3[hora]='IV';break;
		          case 0:globals.tabla3[hora]='No';break;
		          default:globals.tabla3[hora]='';break;
		    }	
		    globals.tabla3[24]='Disnea     '
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
			globals.tabla4[24]='Secreciones '	
			if(resumen_to_hojauti.val_hemorragia==1){
				globals.tabla5[hora]='Si'	
			}else{
				if(resumen_to_hojauti.val_hemorragia!=null){
					globals.tabla5[hora]='No'
				}
			}
			globals.tabla5[24]='Hemorragias '
			if(resumen_to_hojauti.val_hemo_vias_resp==1){
				globals.tabla6[hora]='Si'	
			}else{
				if(resumen_to_hojauti.val_hemo_vias_resp!=null){
					globals.tabla6[hora]='No'
				}
			}
			globals.tabla6[24]='Hemorragia Vías Resp.'
			if(resumen_to_hojauti.val_hemo_digestiva==1){
				globals.tabla7[hora]='Si'	
			}else{
				if(resumen_to_hojauti.val_hemo_digestiva!=null){
					globals.tabla7[hora]='No'
				}
			}
			globals.tabla7[24]='Hemorragia Digestiva'
			if(resumen_to_hojauti.val_hemo_mucosas==1){
				globals.tabla8[hora]='Si'	
			}else{
				if(resumen_to_hojauti.val_hemo_mucosas!=null){
					globals.tabla8[hora]='No'
				}
			}
			globals.tabla8[24]='Hemorragia Mucosas'	
			if(resumen_to_hojauti.val_hemo_hematuria==1){
				globals.tabla9[hora]='Si'	
			}else{
				if(resumen_to_hojauti.val_hemo_hematuria!=null){
					globals.tabla9[hora]='No'
				}
			}
			globals.tabla9[24]='Hemorragia Hematuria'
			switch (resumen_to_hojauti.val_convulsiones) {
				case 1:globals.tabla15[hora]='Mioclónicos';break;
				case 2:globals.tabla15[hora]='Atónicos';break;
				case 3:globals.tabla15[hora]='Tónico Clónicos';break;
				case 4:globals.tabla15[hora]='Generalizados';break;
				case 0:globals.tabla15[hora]='Ninguna';break;
				default:globals.tabla15[hora]='';break;
		    }	
		    globals.tabla15[24]='Convulsiones'	
			switch (resumen_to_hojauti.val_cianosis) {
				case 1:globals.tabla16[hora]='Central';break;
				case 2:globals.tabla16[hora]='Periférica';break;
				case 0:globals.tabla16[hora]='No';break;
				default:globals.tabla16[hora]='';break;
			}	
			globals.tabla16[24]='Cianosis'	
			if(resumen_to_hojauti.val_bronco_espasmo==1){
				globals.tabla17[hora]='Si'	
			}else{
				if(resumen_to_hojauti.val_bronco_espasmo!=null){
					globals.tabla17[hora]='No'
				}
			}
			globals.tabla17[24]='BroncoEspasmo'	
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
		    globals.tabla18[24]='Arritmias'	
		    if(resumen_to_hojauti.val_depresion_respir==1){
				globals.tabla19[hora]='Si'	
			}else{
				if(resumen_to_hojauti.val_depresion_respir!=null){
					globals.tabla19[hora]='No'
				}		
			}
			globals.tabla19[24]='Depresión Respiratoria'	
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
	    	globals.tabla20[24]='Estado de Conciencia'	
	    	if(resumen_to_hojauti.val_mcpt==1){
				globals.tabla21[hora]='Si'	
			}else{
				if(resumen_to_hojauti.val_mcpt!=null){
					globals.tabla21[hora]='No'
				}		
			}
			globals.tabla21[24]='Marcapasos Transitorio'
			if(resumen_to_hojauti.val_mcpd==1){
				globals.tabla22[hora]='Si'	
			}else{
				if(resumen_to_hojauti.val_mcpd!=null){
					globals.tabla22[hora]='No'
				}
			}
			globals.tabla22[24]='Marcapasos Definitivo'	
			if(resumen_to_hojauti.val_diuresis==1){
				globals.tabla22[hora]='Si'	
			}else{
				if(resumen_to_hojauti.val_diuresis!=null){
					globals.tabla22[hora]='No'
				}
			}
			globals.tabla22[24]='Diuresis'	
			if(resumen_to_hojauti.val_nauseas==1){
				globals.tabla23[hora]='Si'	
			}else{
				if(resumen_to_hojauti.val_nauseas!=null){
					globals.tabla23[hora]='No'
				}
			}
			globals.tabla23[24]='Nauseas'
			switch (resumen_to_hojauti.val_emesis) {
				case 0:globals.tabla24[hora]='No';break;
				case 1:globals.tabla24[hora]='Alimentario';break;
				case 2:globals.tabla24[hora]='Bilis';break;
				case 3:globals.tabla24[hora]='Sangre';break;
				case 4:globals.tabla24[hora]='Moco';break;
				case 5:globals.tabla24[hora]='Pus';break;
				default:globals.tabla24[hora]='';break;
	    	}
	    	globals.tabla24[24]='Emesis'
	    	switch (resumen_to_hojauti.val_catarsis_tip) {
	    		case 0:globals.tabla25[hora]='No';break;
	    		case 1:globals.tabla25[hora]='Diarréica';break;
	    		case 2:globals.tabla25[hora]='Semisólida';break;
	    		case 3:globals.tabla25[hora]='Sólida';break;
	    		case 4:globals.tabla25[hora]='Melena';break;
	    		default:globals.tabla25[hora]='';break;
	        }
	        globals.tabla25[24]='Catarsis   Tipo'
	    	switch (resumen_to_hojauti.val_catarsis_cant) {
	    		case 0:globals.tabla26[hora]='No';break;
	    		case 1:globals.tabla26[hora]='*';break;
	    		case 2:globals.tabla26[hora]='**';break;
	    		case 3:globals.tabla26[hora]='***';break;
	    		case 4:globals.tabla26[hora]='Abundante';break;
	    		default:globals.tabla26[hora]='';break;
	    	}
	    	globals.tabla26[24]='Catarsis   Cant.'			
	    	switch (resumen_to_hojauti.val_colostomia_tip) {
	    		case 0:globals.tabla27[hora]='No';break;
	    		case 1:globals.tabla27[hora]='Diarréica';break;
	    		case 2:globals.tabla27[hora]='Semisólida';break;
	    		case 3:globals.tabla27[hora]='Sólida';break;
	    		default:globals.tabla27[hora]='';break;
	    	}
	    	globals.tabla27[24]='Colostomía   Tipo'
	    	switch (resumen_to_hojauti.val_colostomia_cant) {
	    		case 0:globals.tabla28[hora]='No';break;
	    		case 1:globals.tabla28[hora]='*';break;
	    		case 2:globals.tabla28[hora]='**';break;
	    		case 3:globals.tabla28[hora]='***';break;
	    		case 4:globals.tabla28[hora]='Abundante';break;
	    		default:globals.tabla28[hora]='';break;
	    	}
	    	globals.tabla28[24]='Colostomía   Cant.'	
	    	switch (resumen_to_hojauti.val_piel) {
	    		case 0:globals.tabla29[hora]='Normal';break;
	    		case 1:globals.tabla29[hora]='Seca';break;
	    		case 2:globals.tabla29[hora]='Fría';break;
	    		case 3:globals.tabla29[hora]='Sudorosa';break;
	    		case 4:globals.tabla29[hora]='Libideses';break;
	    		case 5:globals.tabla29[hora]='Cicatrices';break;
	    		default:globals.tabla29[hora]='';break;
	    	}
	    	globals.tabla29[24]='Piel'	
	    	if(resumen_to_hojauti.val_edema==1){
				globals.tabla30[hora]='Si'	
			}else{
				globals.tabla30[hora]=''
			}
			globals.tabla30[24]='Edemas'
			if(resumen_to_hojauti.val_edema_mmss_d==1){
				globals.tabla31[hora]='Si'	
			}else{
				globals.tabla31[hora]=''
			}
			globals.tabla31[24]='MMSS  D'
			if(resumen_to_hojauti.val_edema_mmss_i==1){
				globals.tabla32[hora]='Si'	
			}else{
				globals.tabla32[hora]=''
			}
			globals.tabla32[24]='MMSS  I'
			if(resumen_to_hojauti.val_edema_mmii_d==1){
				globals.tabla33[hora]='Si'	
			}else{
				globals.tabla33[hora]=''
			}
			globals.tabla33[24]='MMII  D'
			if(resumen_to_hojauti.val_edema_mmii_i==1){
				globals.tabla34[hora]='Si'	
			}else{
				globals.tabla34[hora]=''
			}
			globals.tabla34[24]='MMII  I'
			if(resumen_to_hojauti.val_edema_sacro==1){
				globals.tabla35[hora]='Si'	
			}else{
				globals.tabla35[hora]=''
			}
			globals.tabla35[24]='SACRO'
			if(resumen_to_hojauti.val_edema_anasarca==1){
				globals.tabla36[hora]='Si'	
			}else{
				globals.tabla36[hora]=''
			}
			globals.tabla36[24]='ANASARCA'
			globals.tabla37[24]='- ESCARAS -'
			globals.tabla38[24]='--- Decubito Supino --'	
		 	switch (resumen_to_hojauti.val_esc_supino_codos) {
		 		case 0:globals.tabla39[hora]='';break;
		 		case 1:globals.tabla39[hora]='I';break;
		 		case 2:globals.tabla39[hora]='II';break;
		 		case 3:globals.tabla39[hora]='III';break;
		 		case 4:globals.tabla39[hora]='IV';break;
		 		default:globals.tabla39[hora]='';break;
    		}
    		globals.tabla39[24]='----- Codos'	
    		switch (resumen_to_hojauti.val_esc_supino_occipucio) {
    			case 0:globals.tabla40[hora]='';break;
    			case 1:globals.tabla40[hora]='I';break;
    			case 2:globals.tabla40[hora]='II';break;
    			case 3:globals.tabla40[hora]='III';break;
    			case 4:globals.tabla40[hora]='IV';break;
    			default:globals.tabla40[hora]='';break;
	 		}
	 		globals.tabla40[24]='----- Occipucio'	
    		switch (resumen_to_hojauti.val_esc_supino_omoplatos) {
			case 0:globals.tabla41[hora]='';break;
			case 1:globals.tabla41[hora]='I';break;
			case 2:globals.tabla41[hora]='II';break;
			case 3:globals.tabla41[hora]='III';break;
			case 4:globals.tabla41[hora]='IV';break;
			default:globals.tabla41[hora]='';break;
			}
			globals.tabla41[24]='----- Omóplatos'		
    		switch (resumen_to_hojauti.val_esc_supino_sacro) {
			case 0:globals.tabla42[hora]='';break;
			case 1:globals.tabla42[hora]='I';break;
			case 2:globals.tabla42[hora]='II';break;
			case 3:globals.tabla42[hora]='III';break;
			case 4:globals.tabla42[hora]='IV';break;
			default:globals.tabla42[hora]='';break;
			}
			globals.tabla42[24]='----- Sacro'		
    		switch (resumen_to_hojauti.val_esc_supino_talon) {
			case 0:globals.tabla43[hora]='';break;
			case 1:globals.tabla43[hora]='I';break;
			case 2:globals.tabla43[hora]='II';break;
			case 3:globals.tabla43[hora]='III';break;
			case 4:globals.tabla43[hora]='IV';break;
			default:globals.tabla43[hora]='';break;
			}
			globals.tabla43[24]='----- Talón'		
			globals.tabla44[24]='--- Decubito Prono --'
			switch (resumen_to_hojauti.val_esc_prono_dedos_del_pie) {
			case 0:globals.tabla45[hora]='';break;
			case 1:globals.tabla45[hora]='I';break;
			case 2:globals.tabla45[hora]='II';break;
			case 3:globals.tabla45[hora]='III';break;
			case 4:globals.tabla45[hora]='IV';break;
			default:globals.tabla45[hora]='';break;
			}
			globals.tabla45[24]='----- Dedos del Pie'
			switch (resumen_to_hojauti.val_esc_prono_hombro) {
			case 0:globals.tabla46[hora]='';break;
			case 1:globals.tabla46[hora]='I';break;
			case 2:globals.tabla46[hora]='II';break;
			case 3:globals.tabla46[hora]='III';break;
			case 4:globals.tabla46[hora]='IV';break;
			default:globals.tabla46[hora]='';break;
			}
			globals.tabla46[24]='----- Hombros'
			switch (resumen_to_hojauti.val_esc_prono_mejilla_oreja) {
			case 0:globals.tabla47[hora]='';break;
			case 1:globals.tabla47[hora]='I';break;
			case 2:globals.tabla47[hora]='II';break;
			case 3:globals.tabla47[hora]='III';break;
			case 4:globals.tabla47[hora]='IV';break;
			default:globals.tabla47[hora]='';break;
			}
			globals.tabla47[24]='----- Mejillas y Orejas'
			switch (resumen_to_hojauti.val_esc_prono_rodilla) {
			case 0:globals.tabla48[hora]='';break;
			case 1:globals.tabla48[hora]='I';break;
			case 2:globals.tabla48[hora]='II';break;
			case 3:globals.tabla48[hora]='III';break;
			case 4:globals.tabla48[hora]='IV';break;
			default:globals.tabla48[hora]='';break;
			}
			globals.tabla48[24]='----- Rodillas'
			switch (resumen_to_hojauti.val_esc_prono_genitales) {
			case 0:globals.tabla49[hora]='';break;
			case 1:globals.tabla49[hora]='I';break;
			case 2:globals.tabla49[hora]='II';break;
			case 3:globals.tabla49[hora]='III';break;
			case 4:globals.tabla49[hora]='IV';break;
			default:globals.tabla49[hora]='';break;
			}
			globals.tabla49[24]='----- '+globals.vGenitales
			globals.tabla50[24]='--- Decubito Lateral --'
			switch (resumen_to_hojauti.val_esc_lateral_cadera) {
			case 0:globals.tabla51[hora]='';break;
			case 1:globals.tabla51[hora]='I';break;
			case 2:globals.tabla51[hora]='II';break;
			case 3:globals.tabla51[hora]='III';break;
			case 4:globals.tabla51[hora]='IV';break;
			default:globals.tabla51[hora]='';break;
			}
			globals.tabla51[24]='----- Cadera'
			switch (resumen_to_hojauti.val_esc_lateral_codo) {
			case 0:globals.tabla52[hora]='';break;
			case 1:globals.tabla52[hora]='I';break;
			case 2:globals.tabla52[hora]='II';break;
			case 3:globals.tabla52[hora]='III';break;
			case 4:globals.tabla52[hora]='IV';break;
			default:globals.tabla52[hora]='';break;
			}
			globals.tabla52[24]='----- Codos'
			switch (resumen_to_hojauti.val_esc_lateral_costillas) {
			case 0:globals.tabla53[hora]='';break;
			case 1:globals.tabla53[hora]='I';break;
			case 2:globals.tabla53[hora]='II';break;
			case 3:globals.tabla53[hora]='III';break;
			case 4:globals.tabla53[hora]='IV';break;
			default:globals.tabla53[hora]='';break;
			}
			globals.tabla53[24]='----- Costillas'
			switch (resumen_to_hojauti.val_esc_lateral_hombro) {
			case 0:globals.tabla54[hora]='';break;
			case 1:globals.tabla54[hora]='I';break;
			case 2:globals.tabla54[hora]='II';break;
			case 3:globals.tabla54[hora]='III';break;
			case 4:globals.tabla54[hora]='IV';break;
			default:globals.tabla54[hora]='';break;
			}
			globals.tabla54[24]='----- Hombros'
			switch (resumen_to_hojauti.val_esc_lateral_oreja) {
			case 0:globals.tabla55[hora]='';break;
			case 1:globals.tabla55[hora]='I';break;
			case 2:globals.tabla55[hora]='II';break;
			case 3:globals.tabla55[hora]='III';break;
			case 4:globals.tabla55[hora]='IV';break;
			default:globals.tabla55[hora]='';break;
			}
			globals.tabla55[24]='----- Orejas'
			switch (resumen_to_hojauti.val_esc_lateral_rodillas) {
			case 0:globals.tabla56[hora]='';break;
			case 1:globals.tabla56[hora]='I';break;
			case 2:globals.tabla56[hora]='II';break;
			case 3:globals.tabla56[hora]='III';break;
			case 4:globals.tabla56[hora]='IV';break;
			default:globals.tabla56[hora]='';break;
			}
			globals.tabla56[24]='----- Rodillas'
			switch (resumen_to_hojauti.val_esc_lateral_tobillo) {
			case 0:globals.tabla57[hora]='';break;
			case 1:globals.tabla57[hora]='I';break;
			case 2:globals.tabla57[hora]='II';break;
			case 3:globals.tabla57[hora]='III';break;
			case 4:globals.tabla57[hora]='IV';break;
			default:globals.tabla57[hora]='';break;
			}
			globals.tabla57[24]='----- Tobillos'
			cargo_tabla=true
			//application.output(resumen_to_hojauti.val_oxigeno)
			/*
			if(resumen_to_hojauti.val_oxigeno!=0&&resumen_to_hojauti.val_oxigeno!=''&&resumen_to_hojauti.val_oxigeno!=null){
				globals.tabla76[24]='Suministro Oxigeno'
				switch (resumen_to_hojauti.val_oxigeno) {
				case 0:globals.tabla76[hora]='';break;
				case 1:globals.tabla76[hora]='x Máscara';break;
				case 2:globals.tabla76[hora]='x Canula ';break;
				default:globals.tabla76[hora]='';break;
				}
				globals.tabla77[24]='Flujo de Oxigeno'
				globals.tabla77[hora]=resumen_to_hojauti.val_oxigeno_cant
			}
			*/
		}
		}
		}
	}
	if(resumen2_to_hojauti.getSize()>0){
		for(var ii=1;ii<=resumen2_to_hojauti.getSize();ii++){
			resumen2_to_hojauti.setSelectedIndex(ii)
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
			globals.tabla1[24]='Dolor  '
			switch (resumen2_to_hojauti.val_tip_dolor) {
			    case 1:globals.tabla2[hora]='Quemante';break;
			    case 2:globals.tabla2[hora]='Punzante';break;
			    case 3:globals.tabla2[hora]='Opresivo';break;
			    case 0:globals.tabla2[hora]='Ninguno';break;
			    default:globals.tabla2[hora]='';break;
			}	
			globals.tabla2[24]='Dolor    Tipo '
			switch (resumen2_to_hojauti.val_disnea) {
		          case 1:globals.tabla3[hora]='I';break;
		          case 2:globals.tabla3[hora]='II';break;
		          case 3:globals.tabla3[hora]='III';break;
		          case 4:globals.tabla3[hora]='IV';break;
		          case 0:globals.tabla3[hora]='No';break;
		          default:globals.tabla3[hora]='';break;
		    }	
		    globals.tabla3[24]='Disnea     '
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
			globals.tabla4[24]='Secreciones '	
			if(resumen2_to_hojauti.val_hemorragia==1){
				globals.tabla5[hora]='Si'	
			}else{
				if(resumen2_to_hojauti.val_hemorragia!=null){
					globals.tabla5[hora]='No'
				}
			}
			globals.tabla5[24]='Hemorragias '
			if(resumen2_to_hojauti.val_hemo_vias_resp==1){
				globals.tabla6[hora]='Si'	
			}else{
				if(resumen2_to_hojauti.val_hemo_vias_resp!=null){
					globals.tabla6[hora]='No'
				}
			}
			globals.tabla6[24]='Hemorragia Vías Resp.'
			if(resumen2_to_hojauti.val_hemo_digestiva==1){
				globals.tabla7[hora]='Si'	
			}else{
				if(resumen2_to_hojauti.val_hemo_digestiva!=null){
					globals.tabla7[hora]='No'
				}
			}
			globals.tabla7[24]='Hemorragia Digestiva'
			if(resumen2_to_hojauti.val_hemo_mucosas==1){
				globals.tabla8[hora]='Si'	
			}else{
				if(resumen2_to_hojauti.val_hemo_mucosas!=null){
					globals.tabla8[hora]='No'
				}
			}
			globals.tabla8[24]='Hemorragia Mucosas'	
			if(resumen2_to_hojauti.val_hemo_hematuria==1){
				globals.tabla9[hora]='Si'	
			}else{
				if(resumen2_to_hojauti.val_hemo_hematuria!=null){
					globals.tabla9[hora]='No'
				}
			}
			globals.tabla9[24]='Hemorragia Hematuria'
			switch (resumen2_to_hojauti.val_convulsiones) {
				case 1:globals.tabla15[hora]='Mioclónicos';break;
				case 2:globals.tabla15[hora]='Atónicos';break;
				case 3:globals.tabla15[hora]='Tónico Clónicos';break;
				case 4:globals.tabla15[hora]='Generalizados';break;
				case 0:globals.tabla15[hora]='Ninguna';break;
				default:globals.tabla15[hora]='';break;
		    }	
		    globals.tabla15[24]='Convulsiones'	
			switch (resumen2_to_hojauti.val_cianosis) {
				case 1:globals.tabla16[hora]='Central';break;
				case 2:globals.tabla16[hora]='Periférica';break;
				case 0:globals.tabla16[hora]='No';break;
				default:globals.tabla16[hora]='';break;
			}	
			globals.tabla16[24]='Cianosis'	
			if(resumen2_to_hojauti.val_bronco_espasmo==1){
				globals.tabla17[hora]='Si'	
			}else{
				if(resumen2_to_hojauti.val_bronco_espasmo!=null){
					globals.tabla17[hora]='No'
				}
			}
			globals.tabla17[24]='BroncoEspasmo'	
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
		    globals.tabla18[24]='Arritmias'	
		    if(resumen2_to_hojauti.val_depresion_respir==1){
				globals.tabla19[hora]='Si'	
			}else{
				if(resumen2_to_hojauti.val_depresion_respir!=null){
					globals.tabla19[hora]='No'
				}		
			}
			globals.tabla19[24]='Depresión Respiratoria'	
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
	    	globals.tabla20[24]='Estado de Conciencia'	
	    	if(resumen2_to_hojauti.val_mcpt==1){
				globals.tabla21[hora]='Si'	
			}else{
				if(resumen2_to_hojauti.val_mcpt!=null){
					globals.tabla21[hora]='No'
				}		
			}
			globals.tabla21[24]='Marcapasos Transitorio'
			if(resumen2_to_hojauti.val_mcpd==1){
				globals.tabla22[hora]='Si'	
			}else{
				if(resumen2_to_hojauti.val_mcpd!=null){
					globals.tabla22[hora]='No'
				}
			}
			globals.tabla22[24]='Marcapasos Definitivo'	
			if(resumen2_to_hojauti.val_diuresis==1){
				globals.tabla22[hora]='Si'	
			}else{
				if(resumen2_to_hojauti.val_diuresis!=null){
					globals.tabla22[hora]='No'
				}
			}
			globals.tabla22[24]='Diuresis'	
			if(resumen2_to_hojauti.val_nauseas==1){
				globals.tabla23[hora]='Si'	
			}else{
				if(resumen2_to_hojauti.val_nauseas!=null){
					globals.tabla23[hora]='No'
				}
			}
			globals.tabla23[24]='Nauseas'
			switch (resumen2_to_hojauti.val_emesis) {
				case 0:globals.tabla24[hora]='No';break;
				case 1:globals.tabla24[hora]='Alimentario';break;
				case 2:globals.tabla24[hora]='Bilis';break;
				case 3:globals.tabla24[hora]='Sangre';break;
				case 4:globals.tabla24[hora]='Moco';break;
				case 5:globals.tabla24[hora]='Pus';break;
				default:globals.tabla24[hora]='';break;
	    	}
	    	globals.tabla24[24]='Emesis'
	    	switch (resumen2_to_hojauti.val_catarsis_tip) {
	    		case 0:globals.tabla25[hora]='No';break;
	    		case 1:globals.tabla25[hora]='Diarréica';break;
	    		case 2:globals.tabla25[hora]='Semisólida';break;
	    		case 3:globals.tabla25[hora]='Sólida';break;
	    		case 4:globals.tabla25[hora]='Melena';break;
	    		default:globals.tabla25[hora]='';break;
	        }
	        globals.tabla25[24]='Catarsis   Tipo'
	    	switch (resumen2_to_hojauti.val_catarsis_cant) {
	    		case 0:globals.tabla26[hora]='No';break;
	    		case 1:globals.tabla26[hora]='*';break;
	    		case 2:globals.tabla26[hora]='**';break;
	    		case 3:globals.tabla26[hora]='***';break;
	    		case 4:globals.tabla26[hora]='Abundante';break;
	    		default:globals.tabla26[hora]='';break;
	    	}
	    	globals.tabla26[24]='Catarsis   Cant.'			
	    	switch (resumen2_to_hojauti.val_colostomia_tip) {
	    		case 0:globals.tabla27[hora]='No';break;
	    		case 1:globals.tabla27[hora]='Diarréica';break;
	    		case 2:globals.tabla27[hora]='Semisólida';break;
	    		case 3:globals.tabla27[hora]='Sólida';break;
	    		default:globals.tabla27[hora]='';break;
	    	}
	    	globals.tabla27[24]='Colostomía   Tipo'
	    	switch (resumen2_to_hojauti.val_colostomia_cant) {
	    		case 0:globals.tabla28[hora]='No';break;
	    		case 1:globals.tabla28[hora]='*';break;
	    		case 2:globals.tabla28[hora]='**';break;
	    		case 3:globals.tabla28[hora]='***';break;
	    		case 4:globals.tabla28[hora]='Abundante';break;
	    		default:globals.tabla28[hora]='';break;
	    	}
	    	globals.tabla28[24]='Colostomía   Cant.'	
	    	switch (resumen2_to_hojauti.val_piel) {
	    		case 0:globals.tabla29[hora]='Normal';break;
	    		case 1:globals.tabla29[hora]='Seca';break;
	    		case 2:globals.tabla29[hora]='Fría';break;
	    		case 3:globals.tabla29[hora]='Sudorosa';break;
	    		case 4:globals.tabla29[hora]='Libideses';break;
	    		case 5:globals.tabla29[hora]='Cicatrices';break;
	    		default:globals.tabla29[hora]='';break;
	    	}
	    	globals.tabla29[24]='Piel'	
	    	if(resumen2_to_hojauti.val_edema==1){
				globals.tabla30[hora]='Si'	
			}else{
				globals.tabla30[hora]=''
			}
			globals.tabla30[24]='Edemas'
			if(resumen2_to_hojauti.val_edema_mmss_d==1){
				globals.tabla31[hora]='Si'	
			}else{
				globals.tabla31[hora]=''
			}
			globals.tabla31[24]='MMSS  D'
			if(resumen2_to_hojauti.val_edema_mmss_i==1){
				globals.tabla32[hora]='Si'	
			}else{
				globals.tabla32[hora]=''
			}
			globals.tabla32[24]='MMSS  I'
			if(resumen2_to_hojauti.val_edema_mmii_d==1){
				globals.tabla33[hora]='Si'	
			}else{
				globals.tabla33[hora]=''
			}
			globals.tabla33[24]='MMII  D'
			if(resumen2_to_hojauti.val_edema_mmii_i==1){
				globals.tabla34[hora]='Si'	
			}else{
				globals.tabla34[hora]=''
			}
			globals.tabla34[24]='MMII  I'
			if(resumen2_to_hojauti.val_edema_sacro==1){
				globals.tabla35[hora]='Si'	
			}else{
				globals.tabla35[hora]=''
			}
			globals.tabla35[24]='SACRO'
			if(resumen2_to_hojauti.val_edema_anasarca==1){
				globals.tabla36[hora]='Si'	
			}else{
				globals.tabla36[hora]=''
			}
			globals.tabla36[24]='ANASARCA'
			globals.tabla37[24]='- ESCARAS -'
			globals.tabla38[24]='--- Decubito Supino --'	
		 	switch (resumen2_to_hojauti.val_esc_supino_codos) {
		 		case 0:globals.tabla39[hora]='';break;
		 		case 1:globals.tabla39[hora]='I';break;
		 		case 2:globals.tabla39[hora]='II';break;
		 		case 3:globals.tabla39[hora]='III';break;
		 		case 4:globals.tabla39[hora]='IV';break;
		 		default:globals.tabla39[hora]='';break;
    		}
    		globals.tabla39[24]='----- Codos'	
    		switch (resumen2_to_hojauti.val_esc_supino_occipucio) {
    			case 0:globals.tabla40[hora]='';break;
    			case 1:globals.tabla40[hora]='I';break;
    			case 2:globals.tabla40[hora]='II';break;
    			case 3:globals.tabla40[hora]='III';break;
    			case 4:globals.tabla40[hora]='IV';break;
    			default:globals.tabla40[hora]='';break;
	 		}
	 		globals.tabla40[24]='----- Occipucio'	
    		switch (resumen2_to_hojauti.val_esc_supino_omoplatos) {
			case 0:globals.tabla41[hora]='';break;
			case 1:globals.tabla41[hora]='I';break;
			case 2:globals.tabla41[hora]='II';break;
			case 3:globals.tabla41[hora]='III';break;
			case 4:globals.tabla41[hora]='IV';break;
			default:globals.tabla41[hora]='';break;
			}
			globals.tabla41[24]='----- Omóplatos'		
    		switch (resumen2_to_hojauti.val_esc_supino_sacro) {
			case 0:globals.tabla42[hora]='';break;
			case 1:globals.tabla42[hora]='I';break;
			case 2:globals.tabla42[hora]='II';break;
			case 3:globals.tabla42[hora]='III';break;
			case 4:globals.tabla42[hora]='IV';break;
			default:globals.tabla42[hora]='';break;
			}
			globals.tabla42[24]='----- Sacro'		
    		switch (resumen2_to_hojauti.val_esc_supino_talon) {
			case 0:globals.tabla43[hora]='';break;
			case 1:globals.tabla43[hora]='I';break;
			case 2:globals.tabla43[hora]='II';break;
			case 3:globals.tabla43[hora]='III';break;
			case 4:globals.tabla43[hora]='IV';break;
			default:globals.tabla43[hora]='';break;
			}
			globals.tabla43[24]='----- Talón'		
			globals.tabla44[24]='--- Decubito Prono --'
			switch (resumen2_to_hojauti.val_esc_prono_dedos_del_pie) {
			case 0:globals.tabla45[hora]='';break;
			case 1:globals.tabla45[hora]='I';break;
			case 2:globals.tabla45[hora]='II';break;
			case 3:globals.tabla45[hora]='III';break;
			case 4:globals.tabla45[hora]='IV';break;
			default:globals.tabla45[hora]='';break;
			}
			globals.tabla45[24]='----- Dedos del Pie'
			switch (resumen2_to_hojauti.val_esc_prono_hombro) {
			case 0:globals.tabla46[hora]='';break;
			case 1:globals.tabla46[hora]='I';break;
			case 2:globals.tabla46[hora]='II';break;
			case 3:globals.tabla46[hora]='III';break;
			case 4:globals.tabla46[hora]='IV';break;
			default:globals.tabla46[hora]='';break;
			}
			globals.tabla46[24]='----- Hombros'
			switch (resumen2_to_hojauti.val_esc_prono_mejilla_oreja) {
			case 0:globals.tabla47[hora]='';break;
			case 1:globals.tabla47[hora]='I';break;
			case 2:globals.tabla47[hora]='II';break;
			case 3:globals.tabla47[hora]='III';break;
			case 4:globals.tabla47[hora]='IV';break;
			default:globals.tabla47[hora]='';break;
			}
			globals.tabla47[24]='----- Mejillas y Orejas'
			switch (resumen2_to_hojauti.val_esc_prono_rodilla) {
			case 0:globals.tabla48[hora]='';break;
			case 1:globals.tabla48[hora]='I';break;
			case 2:globals.tabla48[hora]='II';break;
			case 3:globals.tabla48[hora]='III';break;
			case 4:globals.tabla48[hora]='IV';break;
			default:globals.tabla48[hora]='';break;
			}
			globals.tabla48[24]='----- Rodillas'
			switch (resumen2_to_hojauti.val_esc_prono_genitales) {
			case 0:globals.tabla49[hora]='';break;
			case 1:globals.tabla49[hora]='I';break;
			case 2:globals.tabla49[hora]='II';break;
			case 3:globals.tabla49[hora]='III';break;
			case 4:globals.tabla49[hora]='IV';break;
			default:globals.tabla49[hora]='';break;
			}
			globals.tabla49[24]='----- '+globals.vGenitales
			globals.tabla50[24]='--- Decubito Lateral --'
			switch (resumen2_to_hojauti.val_esc_lateral_cadera) {
			case 0:globals.tabla51[hora]='';break;
			case 1:globals.tabla51[hora]='I';break;
			case 2:globals.tabla51[hora]='II';break;
			case 3:globals.tabla51[hora]='III';break;
			case 4:globals.tabla51[hora]='IV';break;
			default:globals.tabla51[hora]='';break;
			}
			globals.tabla51[24]='----- Cadera'
			switch (resumen2_to_hojauti.val_esc_lateral_codo) {
			case 0:globals.tabla52[hora]='';break;
			case 1:globals.tabla52[hora]='I';break;
			case 2:globals.tabla52[hora]='II';break;
			case 3:globals.tabla52[hora]='III';break;
			case 4:globals.tabla52[hora]='IV';break;
			default:globals.tabla52[hora]='';break;
			}
			globals.tabla52[24]='----- Codos'
			switch (resumen2_to_hojauti.val_esc_lateral_costillas) {
			case 0:globals.tabla53[hora]='';break;
			case 1:globals.tabla53[hora]='I';break;
			case 2:globals.tabla53[hora]='II';break;
			case 3:globals.tabla53[hora]='III';break;
			case 4:globals.tabla53[hora]='IV';break;
			default:globals.tabla53[hora]='';break;
			}
			globals.tabla53[24]='----- Costillas'
			switch (resumen2_to_hojauti.val_esc_lateral_hombro) {
			case 0:globals.tabla54[hora]='';break;
			case 1:globals.tabla54[hora]='I';break;
			case 2:globals.tabla54[hora]='II';break;
			case 3:globals.tabla54[hora]='III';break;
			case 4:globals.tabla54[hora]='IV';break;
			default:globals.tabla54[hora]='';break;
			}
			globals.tabla54[24]='----- Hombros'
			switch (resumen2_to_hojauti.val_esc_lateral_oreja) {
			case 0:globals.tabla55[hora]='';break;
			case 1:globals.tabla55[hora]='I';break;
			case 2:globals.tabla55[hora]='II';break;
			case 3:globals.tabla55[hora]='III';break;
			case 4:globals.tabla55[hora]='IV';break;
			default:globals.tabla55[hora]='';break;
			}
			globals.tabla55[24]='----- Orejas'
			switch (resumen2_to_hojauti.val_esc_lateral_rodillas) {
			case 0:globals.tabla56[hora]='';break;
			case 1:globals.tabla56[hora]='I';break;
			case 2:globals.tabla56[hora]='II';break;
			case 3:globals.tabla56[hora]='III';break;
			case 4:globals.tabla56[hora]='IV';break;
			default:globals.tabla56[hora]='';break;
			}
			globals.tabla56[24]='----- Rodillas'
			switch (resumen2_to_hojauti.val_esc_lateral_tobillo) {
			case 0:globals.tabla57[hora]='';break;
			case 1:globals.tabla57[hora]='I';break;
			case 2:globals.tabla57[hora]='II';break;
			case 3:globals.tabla57[hora]='III';break;
			case 4:globals.tabla57[hora]='IV';break;
			default:globals.tabla57[hora]='';break;
			}
			globals.tabla57[24]='----- Tobillos'
			cargo_tabla=true
			//application.output(resumen_to_hojauti.val_oxigeno)
			/*
			if(resumen_to_hojauti.val_oxigeno!=0&&resumen_to_hojauti.val_oxigeno!=''&&resumen_to_hojauti.val_oxigeno!=null){
				globals.tabla76[24]='Suministro Oxigeno'
				switch (resumen_to_hojauti.val_oxigeno) {
				case 0:globals.tabla76[hora]='';break;
				case 1:globals.tabla76[hora]='x Máscara';break;
				case 2:globals.tabla76[hora]='x Canula ';break;
				default:globals.tabla76[hora]='';break;
				}
				globals.tabla77[24]='Flujo de Oxigeno'
				globals.tabla77[hora]=resumen_to_hojauti.val_oxigeno_cant
			}
			*/
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
				globals[tabla3][24]=concepto_aux
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
				globals[tabla3][24]=''
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
				globals[tabla3][24]=concepto_aux
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
				globals[tabla3][24]=''
			}
		}
		resumen_valoriz_to_hojauti_items.find()
		globals.vTipoOtrosEgresos='arritmia'
		resumen_valoriz_to_hojauti_items.search()
		globals.tabla58[24]="- Otras Arritmias"
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
				globals[tabla3][24]=concepto_aux
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
				globals[tabla3][24]=''
			}
		}
		resumen2_valoriz_to_hojauti_items.find()
		globals.vTipoOtrosEgresos='arritmia'
		resumen2_valoriz_to_hojauti_items.search()
		globals.tabla58[24]="- Otras Arritmias"
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
				globals[tabla3][24]=concepto_aux
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
				y=v+62
				tabla3 = 'tabla'+ y.toString().substr(0,2)
				for(w=0;w<=23;w++){
					globals[tabla3][w]=0
				}
				globals[tabla3][24]=''
			}
		}
		resumen_valoriz_to_hojauti_items.find()
		globals.vTipoOtrosEgresos='heridas'
		resumen_valoriz_to_hojauti_items.search()
		globals.tabla64[24]="- Heridas"
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
				globals[tabla3][24]=concepto_aux
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
				y=v+65
				tabla3 = 'tabla'+ y.toString().substr(0,2)
				for(w=0;w<=23;w++){
					globals[tabla3][w]=0
				}
				globals[tabla3][24]=''
			}
		}
		resumen2_valoriz_to_hojauti_items.find()
		globals.vTipoOtrosEgresos='heridas'
		resumen2_valoriz_to_hojauti_items.search()
		globals.tabla64[24]="- Heridas"
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
				globals[tabla3][24]=concepto_aux
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
				for(w=0;w<=23;w++){
					globals[tabla3][w]=0
				}
				globals[tabla3][24]=''
			}
		}
		resumen_valoriz_to_hojauti_items.find()
		globals.vTipoOtrosEgresos='otrosvalor'
		resumen_valoriz_to_hojauti_items.search()
		globals.tabla70[24]="- Otras Valoraciones"
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
				globals[tabla3][24]=concepto_aux
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
				for(w=0;w<=23;w++){
					globals[tabla3][w]=0
				}
				globals[tabla3][24]=''
			}
		}
		resumen2_valoriz_to_hojauti_items.find()
		globals.vTipoOtrosEgresos='otrosvalor'
		resumen2_valoriz_to_hojauti_items.search()
		globals.tabla70[24]="- Otras Valoraciones"
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
				globals[tabla3][24]=concepto_aux
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
				for(w=0;w<=23;w++){
					globals[tabla3][w]=0
				}
				globals[tabla3][24]=''
			}
		}
		if(cargo_tabla){
		var tabla='';
		var tabla2='';
		for(var j=0;j<=77;j++){
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
			vs_to_hojauti_resumen.item=4
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
	globals.items=4

}
