/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"E37BCBF4-9297-4F8E-AEE5-2C6A9232F225"}
 */
var fprotoHTML1 = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"777CE34D-6E32-496D-8E8D-64F17F9EF05A",variableType:4}
 */
var fCuentaLineas = 0;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"98D6456B-2F17-486B-AEE3-F706761AB4BD"}
 */
var fTipoCondicion = '';

/**
 * @properties={typeid:35,uuid:"65A19C28-3379-414A-9237-C5820C11D82F",variableType:-4}
 */
var fds = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"B419FE79-DC62-4B46-ADAF-06A63D1079B2"}
 */
var fhtml = '';

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"B18F8BA4-A479-470C-AB6E-C446A0BF11FD",variableType:93}
 */
var fecha_impresion = new Date();

/**
 * @properties={typeid:24,uuid:"D3676A31-87F3-4293-A139-F22DBC41D5E0"}
 * @AllowToRunInFind
 */
function sub_buildReport() {
	//globals.vNroProtocolo=globals.reimpresor_protocolo;
	reimpresor_protocolo_to_tbc_ciruguar.setSelectedIndex(1)
	globals.reimpresor_fecha_ingreso=reimpresor_protocolo_to_tbc_ciruguar.cirgfechaingreso
	globals.reimpresor_hora_ingreso=reimpresor_protocolo_to_tbc_ciruguar.cirghoraingreso
	globals.lineas_impre=0;
	

	var conteo_final='';
	var fec_inicio = '';
	var hora_inicio= '';
	var fec_final='';
	var hora_final='';	
	var html = ''
	var i;
	var fecha_nac = reimpresor_vhiscli_to_tbc_hist_cab_new.histcabfechanac
	var fecha_hasta = reimpresor_vhiscli_to_tbc_ciruguar.cirgfechainicio
    globals.vEdad = globals.reimpresor_CalculaEdad(fecha_nac,fecha_hasta)
	fCuentaLineas=0;
	try{
		if(reimpresor_vhiscli_to_tbc_guardia.guariva==0){
			var $obr_24 = reimpresor_vhiscli_to_tbc_guardia.reimpresor_tbc_guardia_to_tbc_obras.obr_posiva
			if($obr_24!=2&&$obr_24!=3&&$obr_24!=7){
				fTipoCondicion='Con.IVA Cob'
				switch($obr_24){
					case 1:globals.vCondicion=" Responsable Inscripto   ";break;
					case 2:globals.vCondicion=" Responsable No Inscripto";break;
					case 3:globals.vCondicion=" R.No Insc.s/IVA         ";break;
					case 4:globals.vCondicion=" Exento                  ";break;
					case 5:globals.vCondicion=" Consumidor Final        ";break;
					case 6:globals.vCondicion=" Resp. Inscripto s/IVA   ";break;
					case 7:globals.vCondicion=" IVA Convenio            ";break;
					case 8:globals.vCondicion=" Monotributo             ";break;
				}
			}
		}else{
			fTipoCondicion="Prestación:";
			switch (reimpresor_vhiscli_to_tbc_guardia){
				case 1:globals.vCondicion="no gravada con IVA       ";break;
				case 2:globals.vCondicion="gravada con IVA alic.gral";break;
				case 3:globals.vCondicion="gravada con IVA alic.red.";break;
				default:globals.vCondicion="no gravada con IVA       ";break;
			}
		}
	}catch(msg){
		application.output(msg.message)	
	}
	
    
	globals.linea_aux = 0;
	
	
	globals.tip_profes=reimpresor_vhiscli_to_tbc_guardia.guar_tipomed
	globals.cod_profes=reimpresor_vhiscli_to_tbc_guardia.guar_medico
	globals.busco_profesional()
	globals.apeynom_cirujano=globals.apeynom_profes
	globals.matricula_cirujano=reimpresor_vhiscli_to_tbc_guardia.reimpresor_tbc_guardia_to_tbc_medicos_personal.medpermatricula
	globals.tip_profes=reimpresor_vhiscli_to_tbc_ciruguar.cirgtipotecnico
	globals.cod_profes=reimpresor_vhiscli_to_tbc_ciruguar.cirglegatecnico
	globals.busco_profesional()
	globals.apeynom_tecnico=globals.apeynom_profes
	
	
	
	var parametros = new Array()
	parametros[0]='frm_protocolo_prn1'
	parametros[1]=globals.vHiscli
	parametros[2]=globals.vNroProtocolo
	parametros[3]=globals.vLega
	parametros[4]=globals.vFechaActual
	parametros[5]=globals.vHoraCarga
	
	
	
	
	if(globals.vTipoListado==1||globals.vTipoListado==4){
	
	if(vs_to_tbc_alerta.getSize()>0){
		iniciaRegistroDatasetHtml()	
		fhtml += '<table width=100% cellpadding=1 cellspacing=0>'
		fhtml += '<tr>'
		fhtml += '<td width=100% align=center>' + 'ALERTA asistencial'+ '</td>'
		fhtml += '</tr>'
		fhtml += '</table>'	
		grabaDatasetHtml()
		
		var descri_alerta=''
		var cuenta_alertas=0
		for(var aa=2;aa<=21;aa++){
			if(vs_to_tbc_alerta['aler_tipaler_'+aa]==1){
				cuenta_alertas++
				if (cuenta_alertas>1){
					descri_alerta +=', '
				}
					
				switch (aa)
				{
					case 2:descri_alerta +='Hipertenso';break;
					case 3:descri_alerta +='Farmacodependiente';break;
					case 4:descri_alerta +='Diabético';break;
					case 5:descri_alerta +='Epiléptico';break;
					case 6:descri_alerta +='Con Glaucoma';break;
					case 7:descri_alerta +='Inmunodeprimido';break;
					case 8:descri_alerta +='Anticoagulado';break;
					case 9:descri_alerta +='Coronario';break;
					case 10:descri_alerta +='Asmático';break;
					case 11:descri_alerta +='Testigo de Jehová';break;
					case 12:descri_alerta +='Con Marcapasos';break;
					case 13:descri_alerta +='Con Prótesis metálica';break;
					case 14:descri_alerta +='Obesidad Clase II';break;
					case 15:descri_alerta +='Obesidad Clase III';break;
					case 16:descri_alerta +='Insuficiencia Renal';break;
					case 17:descri_alerta +='Escaras';break;
					case 18:descri_alerta +='Trombosis Venosa';break;
					case 19:descri_alerta +='Alerta Epidemiológica';break;
					case 20:descri_alerta +='Rechazo Terapéutico';break;
					case 21:descri_alerta +='Alerta Social';break;
				}
				if(cuenta_alertas>4){
					
					iniciaRegistroDatasetHtml()
					fhtml += '<table width=100% cellpadding=1 cellspacing=0>'
					fhtml += '<tr>'
					fhtml += '<td width=100% align=center>' + descri_alerta + '</td>'
					fhtml += '</tr>'
					fhtml += '</table>'	
		            grabaDatasetHtml()
					
					descri_alerta=''
					cuenta_alertas=0
				}
			}
				
		}
		if(cuenta_alertas>0&&cuenta_alertas<5){
			iniciaRegistroDatasetHtml()
			fhtml += '<table width=100% cellpadding=1 cellspacing=0>'
			fhtml += '<tr>'
			fhtml += '<td width=100% align=center>' + descri_alerta + '</td>'
			fhtml += '</tr>'
			fhtml += '</table>'	
			grabaDatasetHtml()
			descri_alerta=''
			cuenta_alertas=0
		}
		if(vs_to_tbc_alerta.aler_tipaler_1==1){
			iniciaRegistroDatasetHtml()
			fhtml += '<table width=100% cellpadding=1 cellspacing=0>'
			fhtml += '<tr>'
			fhtml += '<td width=100% align=center>' + 'Alérgico a: '+vs_to_tbc_alerta.aler_alergico + '</td>'
			fhtml += '</tr>'
			fhtml += '</table>'	
			grabaDatasetHtml()
		}
	}
		
	iniciaRegistroDatasetHtml()
	fhtml += '<hr width=100%>'
	grabaDatasetHtml()	
	
	if(reimpresor_vhiscli_to_tbc_ciruguar.cirggasasfinal==1){
		conteo_final='No'
	}
	else{
		if(reimpresor_vhiscli_to_tbc_ciruguar.cirggasasfinal==2){
		   conteo_final='Si'
		}
		else{
			conteo_final='-.-'
		}
	}
	
	globals.Interven=reimpresor_vhiscli_to_tbc_ciruguar.cirginterven
	iniciaRegistroDatasetHtml()
	fhtml += '<table width=100% cellpadding=1 cellspacing=0>'
	fhtml += '<tr>'
	fhtml += '<td width=50%>' + 'Cantidad de pinzas al inicio: '+ reimpresor_vhiscli_to_tbc_ciruguar.cirgpinzasinicio + '</td>'
	fhtml += '<td width=50%>' + 'Cantidad de pinzas al final: '+ reimpresor_vhiscli_to_tbc_ciruguar.cirgpinzasfinal + '</td>'
	fhtml += '</tr>'
	fhtml += '</table>'	
	grabaDatasetHtml()
	
	iniciaRegistroDatasetHtml()
	fhtml += '<table width=50% cellpadding=1 cellspacing=0>'
	fhtml += '<tr>'
	fhtml += '<td width=50%>' + 'Conteo de gasas al final dió bien: ' + conteo_final + '</td>'
	fhtml += '</tr>'
	fhtml += '</table>'	
	fhtml += '<hr width=100%>'
	grabaDatasetHtml()
	iniciaRegistroDatasetHtml()
	fhtml += '<hr width=100%>'
	grabaDatasetHtml()	
	iniciaRegistroDatasetHtml()
	fhtml += '<table width=100% cellpadding=1 cellspacing=0>'
	fhtml += '<tr>'
	fhtml += '<td width=50% align=center>' + 'Evaluación Pre-Quirúrgica'+'</td>'
	//fhtml += '<td width=2%>' + '&#124;'+ '</td>'
	fhtml += '<td width=50% align=center>' + 'Evaluación Post-Quirúrgica' + '</td>'
	fhtml += '</tr>'
	fhtml += '</table>'	
	grabaDatasetHtml()
	iniciaRegistroDatasetHtml()
	fhtml += '<table width=100% cellpadding=1 cellspacing=0>'
	fhtml += '<tr>'
	fhtml += '<td width=15%>' + ' Presión arterial'+'</td>'
	fhtml += '<td width=5%>' + ':'+'</td>'
	fhtml += '<td width=30%>' + reimpresor_vhiscli_to_tbc_ciruguar.cirgpresminpre+' - '+reimpresor_vhiscli_to_tbc_ciruguar.cirgpresmaxpre+'</td>'
	//fhtml += '<td width=2%>' + '&#124;'+ '</td>'
	fhtml += '<td width=15%>' + ' Presión arterial' + '</td>'
	fhtml += '<td width=5%>' + ':'+'</td>'
	fhtml += '<td width=30%>' + reimpresor_vhiscli_to_tbc_ciruguar.cirgpresminpost+' - '+reimpresor_vhiscli_to_tbc_ciruguar.cirgpresmaxpost + '</td>'
	fhtml += '</tr>'
	fhtml += '</table>'	
	grabaDatasetHtml()
	iniciaRegistroDatasetHtml()
	fhtml += '<table width=100% cellpadding=1 cellspacing=0>'
	fhtml += '<tr>'
	fhtml += '<td width=15%>' + ' Pulso'+'</td>'
	fhtml += '<td width=5%>' + ':'+'</td>'
	fhtml += '<td width=30%>' + reimpresor_vhiscli_to_tbc_ciruguar.cirgpulsopre+'</td>'
	//fhtml += '<td width=2%>' + '&#124;'+ '</td>'
	fhtml += '<td width=15%>' + ' Pulso' + '</td>'
	fhtml += '<td width=5%>' + ':'+'</td>'
	fhtml += '<td width=30%>' + reimpresor_vhiscli_to_tbc_ciruguar.cirgpulsopost + '</td>'
	fhtml += '</tr>'
	fhtml += '</table>'	
	grabaDatasetHtml()
	iniciaRegistroDatasetHtml()
	fhtml += '<table width=100% cellpadding=1 cellspacing=0>'
	fhtml += '<tr>'
	fhtml += '<td width=15%>' + ' Otras caract.'+'</td>'
	fhtml += '<td width=5%>' + ':'+'</td>'
	fhtml += '<td width=30%>' + reimpresor_vhiscli_to_tbc_ciruguar.cirgpulsopre+'</td>'
	//fhtml += '<td width=2%>' + '&#124;'+ '</td>'
	fhtml += '<td width=15%>' + ' Otras caract.' + '</td>'
	fhtml += '<td width=5%>' + ':'+'</td>'
	fhtml += '<td width=30%>' + reimpresor_vhiscli_to_tbc_ciruguar.cirgpulsopost + '</td>'
	fhtml += '</tr>'
	fhtml += '</table>'	
	grabaDatasetHtml()
	iniciaRegistroDatasetHtml()
	fhtml += '<hr width=100%>'
	grabaDatasetHtml()	
	iniciaRegistroDatasetHtml()
	fhtml += '<table width=80% cellpadding=1 cellspacing=0>'
	fhtml += '<tr>'
	fhtml += '<td width=80%>' + 'Preparación Pre-quirúrgica '  + '</td>'
	fhtml += '</tr>'
	fhtml += '</table>'	
    grabaDatasetHtml()
	
	iniciaRegistroDatasetHtml()
	fhtml += '<table width=100% cellpadding=1 cellspacing=0>'
	fhtml += '<tr>'
	fhtml += '<td width=50%>' + '¿Baño pre-quirúrgico? : '+ application.getValueListDisplayValue('reimpresor_vl_sino', reimpresor_vhiscli_to_tbc_ciruguar.cirgbaniopre) +'</td>'
	fhtml += '<td width=50%>' + '             ' +'</td>'
	fhtml += '</tr>'
	fhtml += '</table>'	
	grabaDatasetHtml()
	
	iniciaRegistroDatasetHtml()
	fhtml += '<table width=100% cellpadding=1 cellspacing=0>'
	fhtml += '<tr>'
	fhtml += '<td width=50%>' + '¿En ayunas? : '+ application.getValueListDisplayValue('reimpresor_vl_sino', reimpresor_vhiscli_to_tbc_ciruguar.cirgayunopre) + '</td>'
	fhtml += '<td width=50%>' + '            ' +'</td>'
	fhtml += '</tr>'
	fhtml += '</table>'	
	grabaDatasetHtml()
	iniciaRegistroDatasetHtml()
	fhtml += '<table width=100% cellpadding=1 cellspacing=0>'
	fhtml += '<tr>'
	fhtml += '<td width=50%>' + '¿Profilaxis antitetánica? : '+ application.getValueListDisplayValue('reimpresor_vl_sino', reimpresor_vhiscli_to_tbc_ciruguar.cirgantitpre) + '</td>'
	fhtml += '<td width=50%>' + ' ' +'</td>'
	fhtml += '</tr>'
	fhtml += '</table>'	
	grabaDatasetHtml()
	iniciaRegistroDatasetHtml()
	fhtml += '<hr width=100%>'
	grabaDatasetHtml()
	iniciaRegistroDatasetHtml()
	fhtml += '<table width=100% cellpadding=1 cellspacing=0>'
	fhtml += '<tr>'
	fhtml += '<td width=70%>' + 'Intervenvion Quirúrgica: '+ interven_to_tbc_interven.itv_descripcion +'</td>'
	fhtml += '<td width=30%>' + 'Quirófano :  '+ reimpresor_vhiscli_to_tbc_ciruguar.cirgnroquirofa +'</td>'
	fhtml += '</tr>'
	fhtml += '</table>'
	grabaDatasetHtml()	
	
	
	fec_inicio=reimpresor_vhiscli_to_tbc_ciruguar.cirgfechainicio
	fec_inicio=fec_inicio.toString()
	hora_inicio=reimpresor_vhiscli_to_tbc_ciruguar.cirghorainicio
	hora_inicio=hora_inicio.toString()
	fec_final=reimpresor_vhiscli_to_tbc_ciruguar.cirgfechafinal
	fec_final=fec_final.toString()
	hora_final=reimpresor_vhiscli_to_tbc_ciruguar.cirghorafinal
	hora_final=hora_final.toString()
	globals.vHora=hora_inicio
	fec_inicio=fec_inicio.substr(6,2)+'/'+fec_inicio.substr(4,2)+'/'+fec_inicio.substr(0,4)+'  '+globals.FormatearHora();
	globals.vHora=hora_final
	fec_final=fec_final.substr(6,2)+'/'+fec_final.substr(4,2)+'/'+fec_final.substr(0,4)+'  '+globals.FormatearHora();
	
	iniciaRegistroDatasetHtml()
	fhtml += '<table width=100% cellpadding=1 cellspacing=0>'
	fhtml += '<tr>'
	fhtml += '<td width=10%>' + '      '+'</td>'	
	fhtml += '<td width=40%>' + 'Comenzó : '+ fec_inicio +'</td>'
	fhtml += '<td width=40%>' + 'Finalizó : '+ fec_final +'</td>'
	fhtml += '<td width=10%>' + '      '+'</td>'
	fhtml += '</tr>'
	fhtml += '</table>'	
	grabaDatasetHtml()
	iniciaRegistroDatasetHtml()
	fhtml += '<hr width=100%>'
	grabaDatasetHtml()
	
	iniciaRegistroDatasetHtml()
	fhtml += '<table width=100% cellpadding=1 cellspacing=0>'
	fhtml += '<tr>'
	fhtml += '<td width=35%>' + '      '+'</td>'	
	fhtml += '<td width=30%>' + 'EQUIPO QUIRURGICO' +'</td>'
	fhtml += '<td width=35%>' + '      '+'</td>'
	fhtml += '</tr>'
	fhtml += '</table>'	
	grabaDatasetHtml()	
	globals.tip_profes=reimpresor_vhiscli_to_tbc_guardia.guar_tipomed	
	globals.cod_profes=reimpresor_vhiscli_to_tbc_guardia.guar_medico
	globals.busco_profesional()
	globals.apeynom_cirujano=globals.apeynom_profes
	globals.matricula_cirujano=reimpresor_vhiscli_to_tbc_guardia.reimpresor_tbc_guardia_to_tbc_medicos_personal.medpermatricula
	globals.tip_profes=reimpresor_vhiscli_to_tbc_ciruguar.cirgtipotecnico	
	globals.cod_profes=reimpresor_vhiscli_to_tbc_ciruguar.cirglegatecnico
	globals.busco_profesional()
	globals.apeynom_tecnico=globals.apeynom_profes
	
	buscaProfesionalesenValciru()
	
	iniciaRegistroDatasetHtml()
	fhtml += '<table width=100% cellpadding=1 cellspacing=0>'
	fhtml += '<tr>'
	fhtml += '<td width=50%>' + 'Cirujano : Dr.'+ globals.apeynom_cirujano +'</td>'
	fhtml += '<td width=50%>' + 'Ayudante 1ro. : Dr.'+ globals.apeynom_ayudante +'</td>'
	fhtml += '</tr>'
	fhtml += '</table>'	
	grabaDatasetHtml()
	iniciaRegistroDatasetHtml()
	fhtml += '<table width=100% cellpadding=1 cellspacing=0>'
	fhtml += '<tr>'
	fhtml += '<td width=50%>' + 'Anestesiólogo : Dr.'+ globals.apeynom_anestesista +'</td>'
	fhtml += '<td width=50%>' + 'Ayudante 2do. : Dr.'+ globals.apeynom_ayudante2 +'</td>'
	fhtml += '</tr>'
	fhtml += '</table>'	
	grabaDatasetHtml()
	iniciaRegistroDatasetHtml()
	fhtml += '<table width=100% cellpadding=1 cellspacing=0>'
	fhtml += '<tr>'
	fhtml += '<td width=50%>' + '                   ' +'</td>'
	fhtml += '<td width=50%>' + 'Instrumentadora : '+ globals.apeynom_instrumentadora +'</td>'
	fhtml += '</tr>'
	fhtml += '</table>'	
	grabaDatasetHtml()
	/*
	globals.tip_profes=utils.stringToNumber(fs['ciriieneonato'])	
	globals.cod_profes=utils.stringToNumber(fs['cirilegneonato'])
	globals.busco_profesional()
	globals.apeynom_neonatologo=globals.apeynom_profes
	*/
	
	
	iniciaRegistroDatasetHtml()
	fhtml += '<hr width=100%>'
	grabaDatasetHtml()
	iniciaRegistroDatasetHtml()
	fhtml += '<table width=50% cellpadding=1 cellspacing=0>'
	fhtml += '<tr>'
	fhtml += '<td width=50%>' + 'DIAGNOSTICO Y DESCRIPCIÓN OPERATORIA : ' +'</td>'
	fhtml += '</tr>'
	fhtml += '</table>'	
	grabaDatasetHtml()
	globals.protoHTML1=html;
	html='';
	globals.lineas_impre=22
	
	
	var largo_tbc = 0;
	var stexto_con_enter='';
	var sTextoBuscado = " ";
	var contador_enter = 0;
	var largo_texto = 0;
	var cantidad_lineas = 0;
	var div = 0;
	var rem = 0;
	var desde_sub=0;
	globals.reimpresor_grupoTexto=1;
	if(reimpresor_vhiscli_to_tbc_proamb_t.getSize()>0){
		largo_tbc = reimpresor_vhiscli_to_tbc_proamb_t.getSize()
		for ( i = 1 ; i <=largo_tbc ; i++ ){
			reimpresor_vhiscli_to_tbc_proamb_t.setSelectedIndex(i)
			iniciaRegistroDatasetHtml()	
			fhtml += '<table width=100% cellpadding=1 cellspacing=0>'
			fhtml += '<tr>'
			fhtml += '<td width=100%>' +reimpresor_vhiscli_to_tbc_proamb_t.proalinea + '</td>'
			fhtml += '</tr>'
			fhtml += '</table>'
			grabaDatasetHtml()
		}
	}else{
		stexto_con_enter = " ";
		sTextoBuscado = " ";
		sTextoBuscado='\n';
		contador_enter = 0;
		largo_texto = 0
		if(reimpresor_vhiscli_to_tbl_proamb_t.getSize()>0){
			largo_texto = reimpresor_vhiscli_to_tbl_proamb_t.texto.length
		}
		cantidad_lineas = 0
		div = 0
		rem = 0
		if(largo_texto <= 100){
			if(largo_texto>0){
				cantidad_lineas = 1
			}else{
				cantidad_lineas = 0
			}
		}else{
			div = parseInt(largo_texto/100)
			rem = largo_texto % 100
			if (rem > 0){
				rem = 1
			}
			cantidad_lineas = div + rem
		}
		//add header line
		//html += '<tr bgcolor="#cccccc"><td colspan="6" height=20><b>&nbsp;&nbsp;General Info</b></td></tr>'
		//html += '<tr><td><b>ID</b></td><td><b>Company Type</b></td><td><b>Industry</b></td>' +
		//'<td><b>Category</b></td></tr>'
		//if(globals.filas_texto > 0){
			//for ( i = 1 ; i <=globals.filas_texto ; i++ )
		
		desde_sub=0
		if(cantidad_lineas > 0){
			for ( i = 1 ; i <=cantidad_lineas ; i++ )
			{
			//record = vhisclin_to_tbc_admision.tbc_admision_to_tbc_obras.getRecord(i)
				desde_sub = 100 * (i - 1)
				html=''
				globals.tempHTML='';
			
				//html += '<p class="f45">'+vs1_to_tbl_protoc_txt.texto.substr(desde_sub,78)+'.</p>'
				iniciaRegistroDatasetHtml()	
				fhtml += '<table width=100% cellpadding=1 cellspacing=0>'
				fhtml += '<tr>'
				//html += '<td width=100%>' + globals.dataset_lineas_texto.getValue(i,1) + '</td>'
				fhtml += '<td width=100%>' +reimpresor_vhiscli_to_tbl_proamb_t.texto.substr(desde_sub,100) + '</td>'
				fhtml += '</tr>'
				fhtml += '</table>'
				grabaDatasetHtml()
					
				globals.lineas_impre++
				contador_enter = 0;
				//stexto_con_enter = globals.dataset_lineas_texto.getValue(i,1)
				stexto_con_enter = reimpresor_vhiscli_to_tbl_proamb_t.texto.substr(desde_sub,100)
				while (stexto_con_enter.indexOf(sTextoBuscado) > -1) {
					stexto_con_enter = stexto_con_enter.substring(stexto_con_enter.indexOf(sTextoBuscado)+sTextoBuscado.length,stexto_con_enter.length);
			      contador_enter++; 
			    }
			      globals.lineas_impre=globals.lineas_impre+contador_enter
				  
				globals.tempHTML=html;
				end_of_page()
			}
		}
	}
	
	
	fhtml=''
	iniciaRegistroDatasetHtml()
	fhtml += '<table width=100% cellpadding=1 cellspacing=0>'
	fhtml += '<tr>'
	fhtml += '<td width=55%>' + ' ' +'</td>'	
	fhtml += '<td width=40% align=center>' + '__________________________________' +'</td>'
	fhtml += '<td width=5%>' + ' ' +'</td>'
	fhtml += '</tr>'
	fhtml += '</table>'	
	grabaDatasetHtml()
	
	iniciaRegistroDatasetHtml()
	fhtml += '<table width=100% cellpadding=1 cellspacing=0>'
	fhtml += '<tr>'
	fhtml += '<td width=55%>' + ' ' +'</td>'	
	fhtml += '<td width=40% align=center>' + 'Dr. '+ globals.apeynom_cirujano +'</td>'
	fhtml += '<td width=5%>' + ' ' +'</td>'
	fhtml += '</tr>'
	fhtml += '</table>'	
	grabaDatasetHtml()
	
	iniciaRegistroDatasetHtml()
	fhtml += '<table width=100% cellpadding=1 cellspacing=0>'
	fhtml += '<tr>'
	fhtml += '<td width=55%>' + ' ' +'</td>'	
	fhtml += '<td width=40% align=center>' + 'Matrícula Nro. '+ globals.matricula_cirujano +'</td>'
	fhtml += '<td width=5%>' + ' ' +'</td>'
	fhtml += '</tr>'
	fhtml += '</table>'	
	grabaDatasetHtml()
		
	//html += '</body></html>'
	globals.lineas_impre++
	globals.lineas_impre++
	globals.lineas_impre++
	globals.tempHTML=html;
	end_of_page()
	globals.campoHTML3 = html
	html = ''	
	}

	if(globals.vTipoListado==2||globals.vTipoListado==4){
		
	
	//html += '<html><body>'
	/*
	if(vs_to_tbc_cirugint2.tbc_cirugint_to_tbc_medicos_personal.medpertipocontrato==2){
		if(vhisclin2_to_tbc_admision.adm_obrsoc_7==1766){
			html += '<hr width=100%>'
			html += 'Con Respecto a las prácticas médicas que se da cuenta en esta historia clínica declaro: a) que asumo integra y plenamente la responsabilidad'+'<br>'
			globals.lineas_impre++
			globals.tempHTML=html;
			end_of_page()
			html=''
			html += 'de los actos realizados y por las consecuencias que de dichos actos se deriven ya sea personalmente o que sean realizados por los integrantes'+'<br>'
			globals.lineas_impre++
			globals.tempHTML=html;
			end_of_page()
			html=''
			html += 'de mi equipo (entre otros: médicos, ayudantes) todos ellos designados y elegidos por mi;'+'\n'
			globals.lineas_impre++
			globals.tempHTML=html;
			end_of_page()
			html=''
			html += 'b) que realizo esta práctica ejerciendo libremente mi profesión de médico cirujano, sin dependencia alguna, científica o jurídica con el'+'<br>'
			globals.lineas_impre++
			globals.tempHTML=html;
			end_of_page()
			html=''
			html += 'Sanatorio Colegiales; c) que mis servicios profesionales no han sido contratados por el Sanatorio, no teniendo vínculo o relación alguna con él;'+'<br>'
			globals.lineas_impre++
			globals.tempHTML=html;
			end_of_page()
			html=''
			html += ' d) por consiguiente desligo al Sanatorio Colegiales depropiedad de Desarrollos en Salud SA, de toda responsabilidad, obligándome a mantener'+'<br>'
			globals.lineas_impre++
			globals.tempHTML=html;
			end_of_page()
			html=''
			html += 'indemne a este por las consecuencias resultantes de mis actos. '
			globals.lineas_impre++
			globals.tempHTML=html;
			end_of_page()
			html=''
		}else{
			html += '<hr width=100%>'
			html += 'Con Respecto a las prácticas médicas que se da cuenta en esta historia clínica declaro: a) que asumo integra y plenamente la responsabilidad'+'<br>'
			globals.lineas_impre++
			globals.tempHTML=html;
			end_of_page()
			html=''
			html += 'de los actos realizados y por las consecuencias que de dichos actos se deriven ya sea personalmente o que sean realizados por los integrantes'+'<br>'
			globals.lineas_impre++
			globals.tempHTML=html;
			end_of_page()
			html=''
			html += 'de mi equipo (entre otros: médicos, ayudantes, anestesiólogos, instrumentadoras, patólogos) todos ellos designados y elegidos por mi;'+'<br>'
			globals.lineas_impre++
			globals.tempHTML=html;
			end_of_page()
			html=''
			html += 'b) que realizo esta práctica ejerciendo libremente mi profesión de médico cirujano, sin dependencia alguna, científica o jurídica con el'+'<br>'
			globals.lineas_impre++
			globals.tempHTML=html;
			end_of_page()
			html=''
			html += 'Sanatorio Colegiales; c) que mis servicios profesionales no han sido contratados por el Sanatorio, no teniendo vínculo o relación alguna con él;'+'<br>'
			globals.lineas_impre++
			globals.tempHTML=html;
			end_of_page()
			html=''
			html += ' d) por consiguiente desligo al Sanatorio Colegiales depropiedad de Desarrollos en Salud SA, de toda responsabilidad, obligándome a mantener'+'<br>'
			globals.lineas_impre++
			globals.tempHTML=html;
			end_of_page()
			html=''
			html += 'indemne a este por las consecuencias resultantes de mis actos. '
			globals.lineas_impre++
			globals.tempHTML=html;
			end_of_page()
			html=''
		}
		
		html += '<p></p>'
		globals.lineas_impre++
		globals.tempHTML=html;
		end_of_page()
		html=''
			
		html += '<table width=100% cellpadding=1 cellspacing=0>'
		html += '<tr>'
		html += '<td width=55%>' + ' ' +'</td>'	
		html += '<td width=40% align=center>' + '__________________________________' +'</td>'
		html += '<td width=5%>' + ' ' +'</td>'
		html += '</tr>'
		html += '</table>'	
		
		html += '<table width=100% cellpadding=1 cellspacing=0>'
		html += '<tr>'
		html += '<td width=55%>' + ' ' +'</td>'	
		html += '<td width=40% align=center>' + 'Dr. '+ globals.apeynom_cirujano +'</td>'
		html += '<td width=5%>' + ' ' +'</td>'
		html += '</tr>'
		html += '</table>'	
		
		html += '<table width=100% cellpadding=1 cellspacing=0>'
		html += '<tr>'
		html += '<td width=55%>' + ' ' +'</td>'	
		html += '<td width=40% align=center>' + 'Matrícula Nro. '+ globals.matricula_cirujano +'</td>'
		html += '<td width=5%>' + ' ' +'</td>'
		html += '</tr>'
		globals.lineas_impre++
		globals.lineas_impre++
		globals.lineas_impre++
		globals.tempHTML=html;
		end_of_page()
		html=''
	}
	*/
	iniciaRegistroDatasetHtml()
	fhtml += '<hr width=100%>'
	grabaDatasetHtml()
	
	globals.lineas_impre++
	globals.tempHTML=html;
	end_of_page()
	html=''	
	iniciaRegistroDatasetHtml()	
	fhtml += '<table width=50% cellpadding=1 cellspacing=0>'
	fhtml += '<tr>'
	fhtml += '<td width=50%>' + 'HEMOTERAPIA : ' +'</td>'
	fhtml += '</tr>'
	fhtml += '</table>'	
	grabaDatasetHtml()
	
	
	var realizado_por = " ";
	globals.reimpresor_grupoTexto=2;
	if(reimpresor_vhiscli_to_tbc_proamb_t.getSize()>0){
		largo_tbc = reimpresor_vhiscli_to_tbc_proamb_t.getSize()
		for ( i = 1 ; i <=largo_tbc ; i++ ){
			reimpresor_vhiscli_to_tbc_proamb_t.setSelectedIndex(i)
			iniciaRegistroDatasetHtml()	
			fhtml += '<table width=100% cellpadding=1 cellspacing=0>'
			fhtml += '<tr>'
			fhtml += '<td width=100%>' +reimpresor_vhiscli_to_tbc_proamb_t.proalinea + '</td>'
			fhtml += '</tr>'
			fhtml += '</table>'
			grabaDatasetHtml()
		}
		reimpresor_vhiscli_to_tbc_proamb_t.setSelectedIndex(1)
		realizado_por = reimpresor_vhiscli_to_tbc_proamb_t.proalinea
	}else{
		stexto_con_enter = " ";
		sTextoBuscado = " ";
		sTextoBuscado='\n';
		contador_enter = 0;
		largo_texto = 0
		if(reimpresor_vhiscli_to_tbl_proamb_t.getSize()>0){
			largo_texto = reimpresor_vhiscli_to_tbl_proamb_t.texto.length
			realizado_por = reimpresor_vhiscli_to_tbl_proamb_t.linea_cab
		}
		cantidad_lineas = 0
		div = 0
		rem = 0
		if(largo_texto <= 130){
			if(largo_texto>0){
				cantidad_lineas = 1
			}else{
				cantidad_lineas = 0
			}
		}else{
			div = parseInt(largo_texto/130)
			rem = largo_texto % 130
			if (rem > 0){
				rem = 1
			}
			cantidad_lineas = div + rem
		}
		
		desde_sub=0
		if(cantidad_lineas > 0){
			for ( i = 1 ; i <=cantidad_lineas ; i++ )
			{
			//record = vhisclin_to_tbc_admision.tbc_admision_to_tbc_obras.getRecord(i)
				desde_sub = 130 * (i - 1)
				html=''
				globals.tempHTML='';
			
				//html += '<p class="f45">'+vs1_to_tbl_protoc_txt.texto.substr(desde_sub,78)+'.</p>'
				iniciaRegistroDatasetHtml()	
				fhtml += '<table width=100% cellpadding=1 cellspacing=0>'
				fhtml += '<tr>'
				//html += '<td width=100%>' + globals.dataset_lineas_texto.getValue(i,1) + '</td>'
				fhtml += '<td width=100%>' +reimpresor_vhiscli_to_tbl_proamb_t.texto.substr(desde_sub,130) + '</td>'
				fhtml += '</tr>'
				fhtml += '</table>'
				grabaDatasetHtml()
					
				globals.lineas_impre++
				contador_enter = 0;
				//stexto_con_enter = globals.dataset_lineas_texto.getValue(i,1)
				stexto_con_enter = reimpresor_vhiscli_to_tbl_proamb_t.texto.substr(desde_sub,130)
				while (stexto_con_enter.indexOf(sTextoBuscado) > -1) {
					stexto_con_enter = stexto_con_enter.substring(stexto_con_enter.indexOf(sTextoBuscado)+sTextoBuscado.length,stexto_con_enter.length);
			      contador_enter++; 
			    }
			      globals.lineas_impre=globals.lineas_impre+contador_enter
				  
				globals.tempHTML=html;
				end_of_page()
			}
		}
	}
	
	
	fhtml=''
	iniciaRegistroDatasetHtml()
	fhtml += '<table width=100% cellpadding=1 cellspacing=0>'
	fhtml += '<tr>'
	fhtml += '<td width=55%>' + 'Responsable : ' +realizado_por+'</td>'	
	fhtml += '<td width=40% align=center>' + '__________________________________' +'</td>'
	fhtml += '<td width=5%>' + ' ' +'</td>'
	fhtml += '</tr>'
	fhtml += '</table>'	
	grabaDatasetHtml()
	
	iniciaRegistroDatasetHtml()
	fhtml += '<table width=100% cellpadding=1 cellspacing=0>'
	fhtml += '<tr>'
	fhtml += '<td width=55%>' + ' ' +'</td>'	
	fhtml += '<td width=40% align=center>' + 'Firma y Sello' +'</td>'
	fhtml += '<td width=5%>' + ' ' +'</td>'
	fhtml += '</tr>'
	fhtml += '</table>'	
	grabaDatasetHtml()
	
	iniciaRegistroDatasetHtml()
	fhtml += '<table width=100% cellpadding=1 cellspacing=0>'
	fhtml += '<tr>'
	fhtml += '<td width=60%>' + ' ' +'</td>'		
	// TODO fhtml += '<td width=40%>' + 'Realizado por : ' +fs['cirileghemote']+'</td>'
	fhtml += '</tr>'
	fhtml += '</table>'
	grabaDatasetHtml()
	globals.lineas_impre++
	globals.tempHTML=html;
	end_of_page()
	html=''
		
	iniciaRegistroDatasetHtml()	
	fhtml += '<hr width=100%>'
	grabaDatasetHtml()
	globals.lineas_impre++
	globals.tempHTML=html;
	end_of_page()
	html=''
	
	iniciaRegistroDatasetHtml()
	fhtml += '<table width=50% cellpadding=1 cellspacing=0>'
	fhtml += '<tr>'
	fhtml += '<td width=50%>' + 'MONITOREO INTRAOPERATORIO : ' +'</td>'
	fhtml += '</tr>'
	fhtml += '</table>'
	grabaDatasetHtml()
	globals.lineas_impre++
	globals.tempHTML=html;
	end_of_page()
	html=''
		
	//plugins.dialogs.showInfoDialog("dataset texto","lleno dataset texto grupo 5")
	realizado_por = " ";
	globals.reimpresor_grupoTexto=3;
	if(reimpresor_vhiscli_to_tbc_proamb_t.getSize()>0){
		largo_tbc = reimpresor_vhiscli_to_tbc_proamb_t.getSize()
		for ( i = 1 ; i <=largo_tbc ; i++ ){
			reimpresor_vhiscli_to_tbc_proamb_t.setSelectedIndex(i)
			iniciaRegistroDatasetHtml()	
			fhtml += '<table width=100% cellpadding=1 cellspacing=0>'
			fhtml += '<tr>'
			fhtml += '<td width=100%>' +reimpresor_vhiscli_to_tbc_proamb_t.proalinea + '</td>'
			fhtml += '</tr>'
			fhtml += '</table>'
			grabaDatasetHtml()
		}
		reimpresor_vhiscli_to_tbc_proamb_t.setSelectedIndex(1)
		realizado_por = reimpresor_vhiscli_to_tbc_proamb_t.proalinea
	}else{
		stexto_con_enter = " ";
		sTextoBuscado = " ";
		sTextoBuscado='\n';
		contador_enter = 0;
		largo_texto = 0
		if(reimpresor_vhiscli_to_tbl_proamb_t.getSize()>0){
			largo_texto = reimpresor_vhiscli_to_tbl_proamb_t.texto.length
			realizado_por = reimpresor_vhiscli_to_tbl_proamb_t.linea_cab
		}
		cantidad_lineas = 0
		div = 0
		rem = 0
		if(largo_texto <= 130){
			if(largo_texto>0){
				cantidad_lineas = 1
			}else{
				cantidad_lineas = 0
			}
		}else{
			div = parseInt(largo_texto/130)
			rem = largo_texto % 130
			if (rem > 0){
				rem = 1
			}
			cantidad_lineas = div + rem
		}
		
		desde_sub=0
		if(cantidad_lineas > 0){
			for ( i = 1 ; i <=cantidad_lineas ; i++ )
			{
			//record = vhisclin_to_tbc_admision.tbc_admision_to_tbc_obras.getRecord(i)
				desde_sub = 130 * (i - 1)
				html=''
				globals.tempHTML='';
			
				//html += '<p class="f45">'+vs1_to_tbl_protoc_txt.texto.substr(desde_sub,78)+'.</p>'
				iniciaRegistroDatasetHtml()	
				fhtml += '<table width=100% cellpadding=1 cellspacing=0>'
				fhtml += '<tr>'
				//html += '<td width=100%>' + globals.dataset_lineas_texto.getValue(i,1) + '</td>'
				fhtml += '<td width=100%>' +reimpresor_vhiscli_to_tbl_proamb_t.texto.substr(desde_sub,130) + '</td>'
				fhtml += '</tr>'
				fhtml += '</table>'
				grabaDatasetHtml()
					
				globals.lineas_impre++
				contador_enter = 0;
				//stexto_con_enter = globals.dataset_lineas_texto.getValue(i,1)
				stexto_con_enter = reimpresor_vhiscli_to_tbl_proamb_t.texto.substr(desde_sub,130)
				while (stexto_con_enter.indexOf(sTextoBuscado) > -1) {
					stexto_con_enter = stexto_con_enter.substring(stexto_con_enter.indexOf(sTextoBuscado)+sTextoBuscado.length,stexto_con_enter.length);
			      contador_enter++; 
			    }
			      globals.lineas_impre=globals.lineas_impre+contador_enter
				  
				globals.tempHTML=html;
				end_of_page()
			}
		}
	}
	fhtml=''
	iniciaRegistroDatasetHtml()
	fhtml += '<table width=100% cellpadding=1 cellspacing=0>'
	fhtml += '<tr>'
	fhtml += '<td width=55%>' + 'Realizado por : ' +realizado_por+'</td>'	
	fhtml += '<td width=40% align=center>' + '__________________________________' +'</td>'
	fhtml += '<td width=5%>' + ' ' +'</td>'
	fhtml += '</tr>'
	fhtml += '</table>'	
	grabaDatasetHtml()
	
	iniciaRegistroDatasetHtml()
	fhtml += '<table width=100% cellpadding=1 cellspacing=0>'
	fhtml += '<tr>'
	fhtml += '<td width=55%>' + ' ' +'</td>'	
	fhtml += '<td width=40% align=center>' + 'Firma y Sello' +'</td>'
	fhtml += '<td width=5%>' + ' ' +'</td>'
	fhtml += '</tr>'
	fhtml += '</table>'	
	grabaDatasetHtml()
	
	iniciaRegistroDatasetHtml()
	fhtml += '<table width=100% cellpadding=1 cellspacing=0>'
	fhtml += '<tr>'
	fhtml += '<td width=60%>' + ' ' +'</td>'		
	// TODO fhtml += '<td width=40%>' + 'Realizado por : ' +fs['cirileghemote']+'</td>'
	fhtml += '</tr>'
	fhtml += '</table>'
	grabaDatasetHtml()
	globals.lineas_impre++
	globals.tempHTML=html;
	end_of_page()
	html=''
	
	
	iniciaRegistroDatasetHtml()
	fhtml += '<hr width=100%>'
	grabaDatasetHtml()
	globals.lineas_impre++
	globals.tempHTML=html;
	end_of_page()
	html=''
	
	iniciaRegistroDatasetHtml()
	fhtml += '<table width=50% cellpadding=1 cellspacing=0>'
	fhtml += '<tr>'
	fhtml += '<td width=50%>' + 'INTENSIFICADOR DE IMAGENES : ' +'</td>'
	fhtml += '</tr>'
	fhtml += '</table>'
	grabaDatasetHtml()
	realizado_por = " ";
	globals.reimpresor_grupoTexto=4;
	if(reimpresor_vhiscli_to_tbc_proamb_t.getSize()>0){
		largo_tbc = reimpresor_vhiscli_to_tbc_proamb_t.getSize()
		for ( i = 1 ; i <=largo_tbc ; i++ ){
			reimpresor_vhiscli_to_tbc_proamb_t.setSelectedIndex(i)
			iniciaRegistroDatasetHtml()	
			fhtml += '<table width=100% cellpadding=1 cellspacing=0>'
			fhtml += '<tr>'
			fhtml += '<td width=100%>' +reimpresor_vhiscli_to_tbc_proamb_t.proalinea + '</td>'
			fhtml += '</tr>'
			fhtml += '</table>'
			grabaDatasetHtml()
		}
		reimpresor_vhiscli_to_tbc_proamb_t.setSelectedIndex(1)
		realizado_por = reimpresor_vhiscli_to_tbc_proamb_t.proalinea
	}else{
		stexto_con_enter = " ";
		sTextoBuscado = " ";
		sTextoBuscado='\n';
		contador_enter = 0;
		largo_texto = 0
		if(reimpresor_vhiscli_to_tbl_proamb_t.getSize()>0){
			largo_texto = reimpresor_vhiscli_to_tbl_proamb_t.texto.length
			realizado_por = reimpresor_vhiscli_to_tbl_proamb_t.linea_cab
		}
		cantidad_lineas = 0
		div = 0
		rem = 0
		if(largo_texto <= 130){
			if(largo_texto>0){
				cantidad_lineas = 1
			}else{
				cantidad_lineas = 0
			}
		}else{
			div = parseInt(largo_texto/130)
			rem = largo_texto % 130
			if (rem > 0){
				rem = 1
			}
			cantidad_lineas = div + rem
		}
		
		desde_sub=0
		if(cantidad_lineas > 0){
			for ( i = 1 ; i <=cantidad_lineas ; i++ )
			{
			//record = vhisclin_to_tbc_admision.tbc_admision_to_tbc_obras.getRecord(i)
				desde_sub = 130 * (i - 1)
				html=''
				globals.tempHTML='';
			
				//html += '<p class="f45">'+vs1_to_tbl_protoc_txt.texto.substr(desde_sub,78)+'.</p>'
				iniciaRegistroDatasetHtml()	
				fhtml += '<table width=100% cellpadding=1 cellspacing=0>'
				fhtml += '<tr>'
				//html += '<td width=100%>' + globals.dataset_lineas_texto.getValue(i,1) + '</td>'
				fhtml += '<td width=100%>' +reimpresor_vhiscli_to_tbl_proamb_t.texto.substr(desde_sub,130) + '</td>'
				fhtml += '</tr>'
				fhtml += '</table>'
				grabaDatasetHtml()
					
				globals.lineas_impre++
				contador_enter = 0;
				//stexto_con_enter = globals.dataset_lineas_texto.getValue(i,1)
				stexto_con_enter = reimpresor_vhiscli_to_tbl_proamb_t.texto.substr(desde_sub,130)
				while (stexto_con_enter.indexOf(sTextoBuscado) > -1) {
					stexto_con_enter = stexto_con_enter.substring(stexto_con_enter.indexOf(sTextoBuscado)+sTextoBuscado.length,stexto_con_enter.length);
			      contador_enter++; 
			    }
			      globals.lineas_impre=globals.lineas_impre+contador_enter
				  
				globals.tempHTML=html;
				end_of_page()
			}
		}
	}
	
	iniciaRegistroDatasetHtml()
	fhtml += '<table width=100% cellpadding=1 cellspacing=0>'
	fhtml += '<tr>'
	fhtml += '<td width=60%>' + ' ' +'</td>'		
	fhtml += '<td width=40%>' + 'Técnico : ' +globals.apeynom_tecnico+'</td>'
	fhtml += '</tr>'
	fhtml += '</table>'
	grabaDatasetHtml()
	//initializoRegistroDatasetHtmlConSalto()
	//fhtml+='<div class="saltoDePagina"></div><div>Este texto aparece en la segunda pagina</div>'
	//grabaDatasetHtml()
	//globals.lineas_impre++
	//globals.tempHTML=html;
	//end_of_page()
	html=''
	}
	//***************************************************************************
	
	
	
	//************************************************************************
	if(globals.vTipoListado==3||globals.vTipoListado==4){
	   
		if(fCuentaLineas>45){
			fhtml = '<html><body>'
			fhtml += '<br>'
			fhtml += '</body></html>'	
			fds.addRow([fhtml])
			fhtml = '<html><body>'
			fhtml += '<br>'
			fhtml += '</body></html>'	
			fds.addRow([fhtml])
			fhtml = '<html><body>'
			fhtml += '<br>'
			fhtml += '</body></html>'	
			fds.addRow([fhtml])
			fhtml = '<html><body>'
			fhtml += '<br>'
			fhtml += '</body></html>'	
			fds.addRow([fhtml])
			fCuentaLineas=0
		}else{
			var $tope_pagina=50-fCuentaLineas
			for(var x=1;x<=$tope_pagina;x++){
				fhtml = '<html><body>'
				fhtml += '<br>'
				fhtml += '</body></html>'	
				fds.addRow([fhtml])
			}
			fCuentaLineas=0
		}
	iniciaRegistroDatasetHtml()	
	fhtml += '<hr width=100%>'
	grabaDatasetHtml()
	globals.lineas_impre++
	globals.tempHTML=html;
	end_of_page()
	html=''
	
	iniciaRegistroDatasetHtml()
	fhtml += '<table width=100% cellpadding=1 cellspacing=0>'
	fhtml += '<tr>'
	fhtml += '<td width=100% align=center>' + ' DETALLE PARA FACTURACION ' +'</td>'
	fhtml += '</tr>'
	fhtml += '</table>'
	grabaDatasetHtml()
	globals.lineas_impre++
	globals.tempHTML=html;
	end_of_page()
	html=''
		
	iniciaRegistroDatasetHtml()	
	fhtml += '<hr width=100%>'
	grabaDatasetHtml()
	globals.lineas_impre++
	globals.tempHTML=html;
	end_of_page()
	html=''
	
	iniciaRegistroDatasetHtml()
	fhtml += '<table width=100% cellpadding=1 cellspacing=0>'
	fhtml += '<tr>'
	fhtml += '<td width=100%>' + 'Intervención Quirúrgica / Prácticas' +'</td>'
	fhtml += '</tr>'
	fhtml += '</table>'
	grabaDatasetHtml()
	globals.lineas_impre++
	globals.tempHTML=html;
	end_of_page()
	html=''
		
	var $sql="select preghistclinica, pregfechaingreso, preghoraingreso, pregtiponome, pregcodnome, pregsecuencia from tbc_prest_guar\
        where PregHistClinica = ? and PregFechaIngreso = ? and PregHoraIngreso = ? \
        and (PregTipoPrest=3 or PregTipoPrest=1 or PregTipoPrest=7) \
        and PregEstado <> 9"
	var args = new Array();
	args[0]=globals.vHiscli;
	args[1]=globals.reimpresor_fecha_ingreso
	args[2]=globals.reimpresor_hora_ingreso
	var dataset = databaseManager.getDataSetByQuery("asistencial",$sql,args,-1)
	var largo_ds = dataset.getMaxRowIndex()
	if(largo_ds > 0){
		for(var j=1;j<=largo_ds;j++){
			globals.reimpresor_cod_nome=dataset.getValue(j,5)
			globals.reimpresor_tipo_nome=dataset.getValue(j,4)
			globals.reimpresor_secuencia=dataset.getValue(j,6)
			globals.ancho_col0=5;
			globals.ancho_col1=10;
			globals.ancho_col2=82;
			globals.ancho_col3=1;
			globals.ancho_col4=1;
			globals.ancho_col5=1;
			globals.column0= globals.reimpresor_tipo_nome
			globals.column1= globals.reimpresor_cod_nome
			globals.tipnome = globals.column0
			globals.codnome = globals.column1
			globals.busco_nomencla()
			if (globals.column0.length<2){
				  globals.column0= '0'+globals.column0
			}
			if(globals.column1.length>5){
			      globals.column1= globals.column1.substr(0,2)+'.'+globals.column1.substr(2,2)+'.'+globals.column1.substr(4,2)
			}else{
				  globals.column1= '0'+globals.column1.substr(0,1)+'.'+globals.column1.substr(1,2)+'.'+globals.column1.substr(3,2)
			}
			globals.column2=globals.descri_nome.substr(0,80)
			globals.column3 = '';globals.column4 = '';globals.column5 = '';
			grabar_tmp()
			if(reimpresor_vhiscli_to_tbc_val_ciru.getSize()>0){
				if(reimpresor_vhiscli_to_tbc_val_ciru.vcircodnome>0){
					globals.tip_profes=reimpresor_vhiscli_to_tbc_val_ciru.vcirtipaneste
					globals.cod_profes=reimpresor_vhiscli_to_tbc_val_ciru.vcircodaneste
					globals.busco_profesional()
					globals.apeynom_anestesista=globals.apeynom_profes
					globals.tip_profes=reimpresor_vhiscli_to_tbc_val_ciru.vcirtipayud1	
					globals.cod_profes=reimpresor_vhiscli_to_tbc_val_ciru.vcircodayud1
					globals.busco_profesional()
					globals.apeynom_ayudante=globals.apeynom_profes
					globals.tip_profes=reimpresor_vhiscli_to_tbc_val_ciru.vcirtipayud2	
					globals.cod_profes=reimpresor_vhiscli_to_tbc_val_ciru.vcircodayud2
					globals.busco_profesional()
					globals.apeynom_ayudante2=globals.apeynom_profes
					globals.tip_profes=reimpresor_vhiscli_to_tbc_val_ciru.vcirtipinstru
					globals.cod_profes=reimpresor_vhiscli_to_tbc_val_ciru.vcircodinstru
					globals.busco_profesional()
					globals.apeynom_instrumentadora=globals.apeynom_profes
					
					globals.ancho_col0=05;
					globals.ancho_col1=30;
					globals.ancho_col2=30;
					globals.ancho_col3=30;
					globals.ancho_col4=3;
					globals.ancho_col5=2;
					globals.column0='';
					globals.column1='Especialista Dr.';
					globals.column2=globals.apeynom_cirujano;
					if(reimpresor_vhiscli_to_tbc_val_ciru.vcirtipespec==0){
						globals.column3= ''
						globals.column4= reimpresor_vhiscli_to_tbc_val_ciru.vcirporespec
						globals.column5='%'
						globals.column3= globals.column4+globals.column5
						globals.column4=''
						globals.column5=''  
					}else{
						globals.column3= 'externo'
						globals.column4= ''
						globals.column5= ''
					}
					grabar_tmp()
					globals.column1='Ayudante 1ro.';
					globals.column2=globals.apeynom_ayudante;
					if(reimpresor_vhiscli_to_tbc_val_ciru.vcircodayud1!=0&&reimpresor_vhiscli_to_tbc_val_ciru.vcircodayud1!=null){
						if(reimpresor_vhiscli_to_tbc_val_ciru.vcirtipayud1==0){
							globals.column3= ''
							globals.column4= reimpresor_vhiscli_to_tbc_val_ciru.vcirporayud1
							globals.column5='%'
							globals.column3= globals.column4+globals.column5
							globals.column4=''
							globals.column5=''  
						}else{
							globals.column3= 'externo'
							globals.column4= ''
							globals.column5= ''
						}
						grabar_tmp()
					}
					globals.column1='Ayudante 2ro.';
					globals.column2=globals.apeynom_ayudante2;
					if(reimpresor_vhiscli_to_tbc_val_ciru.vcircodayud2!=0&&reimpresor_vhiscli_to_tbc_val_ciru.vcircodayud2!=null){
						if(reimpresor_vhiscli_to_tbc_val_ciru.vcirtipayud2==0){
							globals.column3= ''
							globals.column4= reimpresor_vhiscli_to_tbc_val_ciru.vcirporayud2
							globals.column5='%'
							globals.column3= globals.column4+globals.column5
							globals.column4=''
							globals.column5=''  
						}else{
							globals.column3= 'externo'
							globals.column4= ''
							globals.column5= ''
						}
						grabar_tmp()
					}
					globals.column1='Anestesiólogo';
					globals.column2=globals.apeynom_anestesista;
					if(reimpresor_vhiscli_to_tbc_val_ciru.vcircodaneste!=0&&reimpresor_vhiscli_to_tbc_val_ciru.vcircodaneste!=null){
						if(reimpresor_vhiscli_to_tbc_val_ciru.vcirtipaneste==0){
							globals.column3= ''
							globals.column4= reimpresor_vhiscli_to_tbc_val_ciru.vcirporaneste
							globals.column5='%'
							globals.column3= globals.column4+globals.column5
							globals.column4=''
							globals.column5=''  
						}else{
							globals.column3= 'externo'
							globals.column4= ''
							globals.column5= ''
						}
						grabar_tmp()
					}
					globals.column1='Instrumentadora';
					globals.column2=globals.apeynom_instrumentadora;
					if(reimpresor_vhiscli_to_tbc_val_ciru.vcircodinstru!=0&&reimpresor_vhiscli_to_tbc_val_ciru.vcircodinstru!=null){
						if(reimpresor_vhiscli_to_tbc_val_ciru.vcirtipinstru==0){
							globals.column3= ''
							globals.column4= reimpresor_vhiscli_to_tbc_val_ciru.vcirpaginstru
							globals.column5='%'
							globals.column3= globals.column4+globals.column5
							globals.column4=''
							globals.column5=''  
						}else{
							globals.column3= 'externo'
							globals.column4= ''
							globals.column5= ''
						}
						grabar_tmp()
					}
				}
			}
		}
	}
	
	iniciaRegistroDatasetHtml()
	fhtml += '<hr width=100% size=0>'
	grabaDatasetHtml()	
	globals.lineas_impre++
	globals.tempHTML=html;
	end_of_page()
	html=''
	
	iniciaRegistroDatasetHtml()
	fhtml += '<table width=100% cellpadding=1 cellspacing=0>'
	fhtml += '<tr>'
	fhtml += '<td width=100%>' + 'Medicamentos / Descartables' +'</td>'
	fhtml += '</tr>'
	fhtml += '</table>'
	grabaDatasetHtml()
	globals.lineas_impre++
	globals.tempHTML=html;
	end_of_page()
	html=''
	globals.reimpresor_preg_estado=9
	globals.reimpresor_tipo_prest=98
	var largo_rel_medicam = reimpresor_vs_medicam_to_tbc_prest_guar.getSize()
	if(largo_rel_medicam > 0){
		globals.ancho_col0=15;
		globals.ancho_col1=30;
		globals.ancho_col2=30;
		globals.ancho_col3=15;
		globals.ancho_col4=5;
		globals.ancho_col5=5;
		for(var z=1;z<=largo_rel_medicam;z++){
			reimpresor_vs_medicam_to_tbc_prest_guar.setSelectedIndex(z)
			if(reimpresor_vs_medicam_to_tbc_prest_guar.reimpresor_tbc_prest_guar_to_tbc_articulos.getSize()>0){
				globals.column0=reimpresor_vs_medicam_to_tbc_prest_guar.reimpresor_tbc_prest_guar_to_tbc_articulos.art_codigo
				//globals.vArticulo=vs_to_tbc_cirugint2.tbc_cirugint_to_tbc_medic_cir['medc_codart_'+utils.numberFormat(z,0)]
				globals.column1=reimpresor_vs_medicam_to_tbc_prest_guar.reimpresor_tbc_prest_guar_to_tbc_articulos.art_descrip
				globals.column2=reimpresor_vs_medicam_to_tbc_prest_guar.reimpresor_tbc_prest_guar_to_tbc_articulos.art_presenta
				globals.column3=reimpresor_vs_medicam_to_tbc_prest_guar.pregcantidad
				grabar_tmp1()
			}
		}
	}
	
	
	html=''
	html += '<p></p>'
	globals.lineas_impre++
	globals.tempHTML=html;
	end_of_page()
	html=''
		
	html += '<p></p>'
	globals.lineas_impre++
	globals.tempHTML=html;
	end_of_page()
	html=''
	
	iniciaRegistroDatasetHtml()
	fhtml += '<table width=100% cellpadding=1 cellspacing=0>'
	fhtml += '<tr>'
	fhtml += '<td width=55%>' + ' ' +'</td>'	
	fhtml += '<td width=40% align=center>' + '__________________________________' +'</td>'
	fhtml += '<td width=5%>' + ' ' +'</td>'
	fhtml += '</tr>'
	fhtml += '</table>'	
	grabaDatasetHtml()
	iniciaRegistroDatasetHtml()
	fhtml += '<table width=100% cellpadding=1 cellspacing=0>'
	fhtml += '<tr>'
	fhtml += '<td width=55%>' + ' ' +'</td>'	
	fhtml += '<td width=40% align=center>' + 'Dr. '+ globals.apeynom_cirujano +'</td>'
	fhtml += '<td width=5%>' + ' ' +'</td>'
	fhtml += '</tr>'
	fhtml += '</table>'	
	grabaDatasetHtml()
	iniciaRegistroDatasetHtml()
	fhtml += '<table width=100% cellpadding=1 cellspacing=0>'
	fhtml += '<tr>'
	fhtml += '<td width=55%>' + ' ' +'</td>'	
	fhtml += '<td width=40% align=center>' + 'Matrícula Nro. '+ globals.matricula_cirujano +'</td>'
	fhtml += '<td width=5%>' + ' ' +'</td>'
	fhtml += '</tr>'
	fhtml += '</table>'
	grabaDatasetHtml()
	globals.lineas_impre++
	globals.lineas_impre++
	globals.lineas_impre++
	globals.tempHTML=html;
	end_of_page()
	html=''
	}
}

/**
 * @properties={typeid:24,uuid:"2A47665D-C177-404A-9183-E2ECF06B96C2"}
 */
function graba_dataset_texto() {
	var html = '';
	globals.tempHTML='';
	if(globals.filas_texto > 0){
		for ( var i = 1 ; i <=globals.filas_texto ; i++ )
		{
			//record = vhisclin_to_tbc_admision.tbc_admision_to_tbc_obras.getRecord(i)
			var vector = new Array()
			var str = '';
			str = globals.dataset_lineas_texto.getValue(i,1)
			vector = str.split("\n")
			for (var ii = 0; ii<vector.length;ii++){
				
				html += '<table width=100% cellpadding=1 cellspacing=0>'
				html += '<tr>'
				//html += '<td width=100%>' + globals.dataset_lineas_texto.getValue(i,1) + '</td>'
				html += '<td width=100%>' + vector[ii] + '</td>'
				html += '</tr>'
				html += '</table>'	
				
			}
		}
		globals.lineas_impre++
		globals.tempHTML = html
		end_of_page()
		html=''
	}
}

/**
 * @properties={typeid:24,uuid:"93ABA3EC-B760-44DB-B526-06B9BEEF3D33"}
 */
function grabar_tmp() {
	var html = '';
	globals.tempHTML='';
	iniciaRegistroDatasetHtml()
	fhtml += '<table width=100% cellpadding=0 cellspacing=0>'
	fhtml += '<tr>'
	fhtml += '<td width=' + utils.numberFormat(globals.ancho_col0,0) + '% valign="middle" align="left">' + globals.column0 + '</td>'
	fhtml += '<td width=' + utils.numberFormat(globals.ancho_col1,0) + '% valign="middle" align="left">' + globals.column1 + '</td>'
	fhtml += '<td width=' + utils.numberFormat(globals.ancho_col2,0) + '% valign="middle" align="left">' + globals.column2 + '</td>'
	fhtml += '<td width=' + utils.numberFormat(globals.ancho_col3,0) + '% valign="middle" align="left">' + globals.column3 + '</td>'
	fhtml += '<td width=' + utils.numberFormat(globals.ancho_col4,0) + '% valign="middle" align="left">' + globals.column4 + '</td>'
	fhtml += '<td width=' + utils.numberFormat(globals.ancho_col5,0) + '% valign="middle" align="left">' + globals.column5 + '</td>'
	fhtml += '</tr>'
	fhtml += '</table>'
	grabaDatasetHtml()
	globals.lineas_impre++
	globals.tempHTML = html
	//end_of_page()
}

/**
 * @properties={typeid:24,uuid:"DEFE5AFB-C937-4656-99AE-6A2953468BAD"}
 */
function grabar_tmp1() {
	var html = '';
	globals.tempHTML='';
	iniciaRegistroDatasetHtml()
	fhtml += '<table width=100% cellpadding=0 cellspacing=0>'
	fhtml += '<tr>'
	fhtml += '<td width=10% valign="middle" align="right">' + globals.column0 + '</td>'
	fhtml += '<td width=5% valign="middle" align="right">     </td>'
	fhtml += '<td width=35% valign="middle" align="left">' + globals.column1 + '</td>'
	fhtml += '<td width=30% valign="middle" align="left">' + globals.column2 + '</td>'
	fhtml += '<td width=10% valign="middle" align="right">' + globals.column3 + '</td>'
	fhtml += '<td width=10% valign="middle" align="right">     </td>'
	fhtml += '</tr>'
	fhtml += '</table>'
	grabaDatasetHtml()
	globals.lineas_impre++
	globals.tempHTML = html
	end_of_page()
}

/**
 * @properties={typeid:24,uuid:"870A1494-D152-46D5-B0BB-3D87437C3C67"}
 */
function end_of_page() {
	if(globals.lineas_impre<52){
		globals.protoHTML1+=globals.tempHTML
	}else{
		if(globals.lineas_impre>51&&globals.lineas_impre<103){
			if(globals.protoHTML2==''){
				globals.protoHTML1+= '</body></html>'
				globals.protoHTML2+= '<html><body>'+globals.tempHTML
			}else{
				globals.protoHTML2+=globals.tempHTML
			}
		}else{
			if(globals.lineas_impre>102&&globals.lineas_impre<154){
				if(globals.protoHTML3==''){
					globals.protoHTML2+= '</body></html>'
					globals.protoHTML3+= '<html><body>'+globals.tempHTML
				}else{
					globals.protoHTML3+=globals.tempHTML
				}
			}else{
				if(globals.lineas_impre>153&&globals.lineas_impre<205){
					if(globals.protoHTML4==''){
						globals.protoHTML3+= '</body></html>'
						globals.protoHTML4+= '<html><body>'+globals.tempHTML
					}else{
						globals.protoHTML4+=globals.tempHTML
					}
				}else{
					if(globals.lineas_impre>204&&globals.lineas_impre<256){
						if(globals.protoHTML5==''){
							globals.protoHTML4+= '</body></html>'
							globals.protoHTML5+= '<html><body>'+globals.tempHTML
						}else{
							globals.protoHTML5+=globals.tempHTML
						}
					}else{
						if(globals.lineas_impre>255&&globals.lineas_impre<307){
							if(globals.protoHTML6==''){
								globals.protoHTML5+= '</body></html>'
								globals.protoHTML6+= '<html><body>'+globals.tempHTML
							}else{
								globals.protoHTML6+=globals.tempHTML
							}
						}
					}
				}
			}
		}
	}
}

/**
 * @properties={typeid:24,uuid:"0F5E43A1-E581-4BDF-BA4E-13B6D5024208"}
 */
function salto_hoja() {
	if(globals.lineas_impre<52){
		globals.lineas_impre=52
	}else{
		if(globals.lineas_impre>51&&globals.lineas_impre<103){
			globals.lineas_impre=103
		}else{
			if(globals.lineas_impre>102&&globals.lineas_impre<154){
				globals.lineas_impre=154
			}else{
				if(globals.lineas_impre>153&&globals.lineas_impre<205){
					globals.lineas_impre=205
				}else{
					if(globals.lineas_impre>204&&globals.lineas_impre<256){
						globals.lineas_impre=256
					}else{
						if(globals.lineas_impre>255&&globals.lineas_impre<307){
							globals.lineas_impre=307
						}
					}
				}
			}
		}
	}
}

/**
 * @properties={typeid:24,uuid:"35C9FE5E-055D-4974-BF93-685226EAC1CD"}
 */
function grabaDatasetHtml() {
	fhtml += '</body></html>'
	fds.addRow([fhtml])
	fCuentaLineas++
	if(fCuentaLineas>45){
		fhtml = '<html><body>'
		fhtml += '<br>'
		fhtml += '</body></html>'	
		fds.addRow([fhtml])
		fhtml = '<html><body>'
		fhtml += '<br>'
		fhtml += '</body></html>'	
		fds.addRow([fhtml])
		fhtml = '<html><body>'
		fhtml += '<br>'
		fhtml += '</body></html>'	
		fds.addRow([fhtml])
		fhtml = '<html><body>'
		fhtml += '<br>'
		fhtml += '</body></html>'	
		fds.addRow([fhtml])
		fCuentaLineas=0
	}
}

/**
 * @properties={typeid:24,uuid:"4A5575BB-BF65-421D-8035-9BF9291E98C4"}
 */
function iniciaRegistroDatasetHtml() {
	fhtml = '<html><body>'
	//fhtml += '<html><style type="text/css"> p.f44{ text-indent: -17px;  position: absolute;  padding-left: 15px; line-height: 1em; width:400px; max-width: 405px; text-align: justify;} '
	//fhtml += 'p.f43{ text-indent: -15px;  position: absolute;  padding-left: 15px; line-height: 1em; width:400px; max-width: 405px; text-align: justify;} '
	//fhtml += 'p.f45{ line-height: 1em; width:400px; max-width: 405px; text-align: justify;}</style><body>'
}

/**
 * @properties={typeid:24,uuid:"510E4581-A353-4717-A382-8866A10C32B2"}
 * @AllowToRunInFind
 */
function sub_buildReportNew() {
	fds = databaseManager.createEmptyDataSet()
	fds.addColumn('fprotoHTML1',1,JSColumn.TEXT)
	
	sub_buildReport()
	
	var $tipos = [JSColumn.TEXT]
	var $frm = solutionModel.getForm('reimpresor_frm_protocolo')
	$frm.dataSource = fds.createDataSource('Ds_Impr', $tipos)
	forms.reimpresor_frm_protocolo.controller.recreateUI()
	forms.reimpresor_frm_protocolo.controller.loadAllRecords()
	forms.reimpresor_frm_protocolo.controller.setPageFormat(210,297,10,10,10,10,1,0)
	//forms.reimpresor_frm_protocolo.controller.print(false,false,plugins.pdf_output.getPDFPrinter('c:/temp/out.pdf'));
	forms.reimpresor_frm_protocolo.controller.print(false,false);
}

/**
 * @properties={typeid:24,uuid:"82EFAC8B-A6E3-4319-A34E-1BAA40B941BE"}
 */
function buscaProfesionalesenValciru() {
	var $sql="select preghistclinica, pregfechaingreso, preghoraingreso, pregtiponome, pregcodnome, pregsecuencia from tbc_prest_guar\
	          where PregHistClinica = ? and PregFechaIngreso = ? and PregHoraIngreso = ? \
	          and (PregTipoPrest=3 or PregTipoPrest=1 or PregTipoPrest=7 or PregTipoPrest=8 or PregTipoPrest=9) \
	          and PregEstado <> 9"
	var args = new Array();
	args[0]=globals.vHiscli;
	args[1]=globals.reimpresor_fecha_ingreso
	args[2]=globals.reimpresor_hora_ingreso
	var dataset = databaseManager.getDataSetByQuery("asistencial",$sql,args,-1)
	var largo_ds = dataset.getMaxRowIndex()
	if(largo_ds > 0){
		globals.reimpresor_cod_nome=dataset.getValue(1,5)
		globals.reimpresor_tipo_nome=dataset.getValue(1,4)
		globals.reimpresor_secuencia=dataset.getValue(1,6)
		if(reimpresor_vhiscli_to_tbc_val_ciru.getSize()>0){
			globals.tip_profes=reimpresor_vhiscli_to_tbc_val_ciru.vcirtipaneste
			globals.cod_profes=reimpresor_vhiscli_to_tbc_val_ciru.vcircodaneste
			globals.busco_profesional()
			globals.apeynom_anestesista=globals.apeynom_profes
			globals.tip_profes=reimpresor_vhiscli_to_tbc_val_ciru.vcirtipayud1	
			globals.cod_profes=reimpresor_vhiscli_to_tbc_val_ciru.vcircodayud1
			globals.busco_profesional()
			globals.apeynom_ayudante=globals.apeynom_profes
			globals.tip_profes=reimpresor_vhiscli_to_tbc_val_ciru.vcirtipayud2	
			globals.cod_profes=reimpresor_vhiscli_to_tbc_val_ciru.vcircodayud2
			globals.busco_profesional()
			globals.apeynom_ayudante2=globals.apeynom_profes
			globals.tip_profes=reimpresor_vhiscli_to_tbc_val_ciru.vcirtipinstru
			globals.cod_profes=reimpresor_vhiscli_to_tbc_val_ciru.vcircodinstru
			globals.busco_profesional()
			globals.apeynom_instrumentadora=globals.apeynom_profes
		}else{
			globals.reimpresor_cod_nome=dataset.getValue(2,5)
			globals.reimpresor_tipo_nome=dataset.getValue(2,4)
			globals.reimpresor_secuencia=dataset.getValue(2,6)
			if(reimpresor_vhiscli_to_tbc_val_ciru.getSize()>0){
				globals.tip_profes=reimpresor_vhiscli_to_tbc_val_ciru.vcirtipaneste
				globals.cod_profes=reimpresor_vhiscli_to_tbc_val_ciru.vcircodaneste
				globals.busco_profesional()
				globals.apeynom_anestesista=globals.apeynom_profes
				globals.tip_profes=reimpresor_vhiscli_to_tbc_val_ciru.vcirtipayud1	
				globals.cod_profes=reimpresor_vhiscli_to_tbc_val_ciru.vcircodayud1
				globals.busco_profesional()
				globals.apeynom_ayudante=globals.apeynom_profes
				globals.tip_profes=reimpresor_vhiscli_to_tbc_val_ciru.vcirtipayud2	
				globals.cod_profes=reimpresor_vhiscli_to_tbc_val_ciru.vcircodayud2
				globals.busco_profesional()
				globals.apeynom_ayudante2=globals.apeynom_profes
				globals.tip_profes=reimpresor_vhiscli_to_tbc_val_ciru.vcirtipinstru
				globals.cod_profes=reimpresor_vhiscli_to_tbc_val_ciru.vcircodinstru
				globals.busco_profesional()
				globals.apeynom_instrumentadora=globals.apeynom_profes
			}else{
				globals.reimpresor_cod_nome=dataset.getValue(3,5)
				globals.reimpresor_tipo_nome=dataset.getValue(3,4)
				globals.reimpresor_secuencia=dataset.getValue(3,6)
				if(reimpresor_vhiscli_to_tbc_val_ciru.getSize()>0){
					globals.tip_profes=reimpresor_vhiscli_to_tbc_val_ciru.vcirtipaneste
					globals.cod_profes=reimpresor_vhiscli_to_tbc_val_ciru.vcircodaneste
					globals.busco_profesional()
					globals.apeynom_anestesista=globals.apeynom_profes
					globals.tip_profes=reimpresor_vhiscli_to_tbc_val_ciru.vcirtipayud1	
					globals.cod_profes=reimpresor_vhiscli_to_tbc_val_ciru.vcircodayud1
					globals.busco_profesional()
					globals.apeynom_ayudante=globals.apeynom_profes
					globals.tip_profes=reimpresor_vhiscli_to_tbc_val_ciru.vcirtipayud2	
					globals.cod_profes=reimpresor_vhiscli_to_tbc_val_ciru.vcircodayud2
					globals.busco_profesional()
					globals.apeynom_ayudante2=globals.apeynom_profes
					globals.tip_profes=reimpresor_vhiscli_to_tbc_val_ciru.vcirtipinstru
					globals.cod_profes=reimpresor_vhiscli_to_tbc_val_ciru.vcircodinstru
					globals.busco_profesional()
					globals.apeynom_instrumentadora=globals.apeynom_profes
				}else{
					globals.reimpresor_cod_nome=dataset.getValue(4,5)
					globals.reimpresor_tipo_nome=dataset.getValue(4,4)
					globals.reimpresor_secuencia=dataset.getValue(4,6)
					if(reimpresor_vhiscli_to_tbc_val_ciru.getSize()>0){
						globals.tip_profes=reimpresor_vhiscli_to_tbc_val_ciru.vcirtipaneste
						globals.cod_profes=reimpresor_vhiscli_to_tbc_val_ciru.vcircodaneste
						globals.busco_profesional()
						globals.apeynom_anestesista=globals.apeynom_profes
						globals.tip_profes=reimpresor_vhiscli_to_tbc_val_ciru.vcirtipayud1	
						globals.cod_profes=reimpresor_vhiscli_to_tbc_val_ciru.vcircodayud1
						globals.busco_profesional()
						globals.apeynom_ayudante=globals.apeynom_profes
						globals.tip_profes=reimpresor_vhiscli_to_tbc_val_ciru.vcirtipayud2	
						globals.cod_profes=reimpresor_vhiscli_to_tbc_val_ciru.vcircodayud2
						globals.busco_profesional()
						globals.apeynom_ayudante2=globals.apeynom_profes
						globals.tip_profes=reimpresor_vhiscli_to_tbc_val_ciru.vcirtipinstru
						globals.cod_profes=reimpresor_vhiscli_to_tbc_val_ciru.vcircodinstru
						globals.busco_profesional()
						globals.apeynom_instrumentadora=globals.apeynom_profes
					}
				}
			}
		}
	}
}

/**
 * @properties={typeid:24,uuid:"725AAF5A-4DC3-4582-A684-6D911271DB8B"}
 */
function initializoRegistroDatasetHtmlConSalto() {
	fhtml = '<html><head><style>@media print{.saltoDePagina{display:block;page-break-before:always;}}</style></head><body>'
}

/**
 * @AllowToRunInFind
 *
 * @return {String}
 * @properties={typeid:24,uuid:"20FBE0DD-7BB0-4226-B72F-31366EF48CEF"}
 */
function sub_buildReportNew_PDF() {
	fds = databaseManager.createEmptyDataSet()
	fds.addColumn('fprotoHTML1',1,JSColumn.TEXT)
	
	sub_buildReport_PDF(false);
	
	var $tipos = [JSColumn.TEXT]
	var $frm = solutionModel.getForm('reimpresor_frm_protocolo')
	$frm.dataSource = fds.createDataSource('Ds_Impr', $tipos)
	forms.reimpresor_frm_protocolo.controller.recreateUI()
	forms.reimpresor_frm_protocolo.controller.loadAllRecords()
	forms.reimpresor_frm_protocolo.controller.setPageFormat(210,297,10,10,10,10,1,0)
	//forms.reimpresor_frm_protocolo.controller.print(false,false,plugins.pdf_output.getPDFPrinter('c:/temp/out.pdf'));
	//forms.reimpresor_frm_protocolo.controller.print(false,false);
	
	var formName = controller.getName();
	var fileNameReport = "PROTOCOLO-QUIRURGICO-AMB-" + globals.reimpresor_protocolo;
	var absoluteFile = '';
	absoluteFile = globals.GenerarReporte_servoyPDF(formName,fileNameReport);
	
	return absoluteFile;
}

/**
 * TODO generated, please specify type and doc for the params
 * @param {Boolean} detalleFacturacion
 *
 * @properties={typeid:24,uuid:"E6D7FEF8-FBB9-4359-9202-7E77F4E84BDB"}
 */
function sub_buildReport_PDF(detalleFacturacion) {
	//globals.vNroProtocolo=globals.reimpresor_protocolo;
	reimpresor_protocolo_to_tbc_ciruguar.setSelectedIndex(1)
	globals.reimpresor_fecha_ingreso=reimpresor_protocolo_to_tbc_ciruguar.cirgfechaingreso
	globals.reimpresor_hora_ingreso=reimpresor_protocolo_to_tbc_ciruguar.cirghoraingreso
	globals.lineas_impre=0;
	

	var conteo_final='';
	var fec_inicio = '';
	var hora_inicio= '';
	var fec_final='';
	var hora_final='';	
	var html = ''
	var i;
	var fecha_nac = reimpresor_vhiscli_to_tbc_hist_cab_new.histcabfechanac
	var fecha_hasta = reimpresor_vhiscli_to_tbc_ciruguar.cirgfechainicio
    globals.vEdad = globals.reimpresor_CalculaEdad(fecha_nac,fecha_hasta)
	fCuentaLineas=0;
	try{
		if(reimpresor_vhiscli_to_tbc_guardia.guariva==0){
			var $obr_24 = reimpresor_vhiscli_to_tbc_guardia.reimpresor_tbc_guardia_to_tbc_obras.obr_posiva
			if($obr_24!=2&&$obr_24!=3&&$obr_24!=7){
				fTipoCondicion='Con.IVA Cob'
				switch($obr_24){
					case 1:globals.vCondicion=" Responsable Inscripto   ";break;
					case 2:globals.vCondicion=" Responsable No Inscripto";break;
					case 3:globals.vCondicion=" R.No Insc.s/IVA         ";break;
					case 4:globals.vCondicion=" Exento                  ";break;
					case 5:globals.vCondicion=" Consumidor Final        ";break;
					case 6:globals.vCondicion=" Resp. Inscripto s/IVA   ";break;
					case 7:globals.vCondicion=" IVA Convenio            ";break;
					case 8:globals.vCondicion=" Monotributo             ";break;
				}
			}
		}else{
			fTipoCondicion="Prestación:";
			switch (reimpresor_vhiscli_to_tbc_guardia){
				case 1:globals.vCondicion="no gravada con IVA       ";break;
				case 2:globals.vCondicion="gravada con IVA alic.gral";break;
				case 3:globals.vCondicion="gravada con IVA alic.red.";break;
				default:globals.vCondicion="no gravada con IVA       ";break;
			}
		}
	}catch(msg){
		application.output(msg.message)	
	}
	
    
	globals.linea_aux = 0;
	
	
	globals.tip_profes=reimpresor_vhiscli_to_tbc_guardia.guar_tipomed
	globals.cod_profes=reimpresor_vhiscli_to_tbc_guardia.guar_medico
	globals.busco_profesional()
	globals.apeynom_cirujano=globals.apeynom_profes
	globals.matricula_cirujano=reimpresor_vhiscli_to_tbc_guardia.reimpresor_tbc_guardia_to_tbc_medicos_personal.medpermatricula
	globals.tip_profes=reimpresor_vhiscli_to_tbc_ciruguar.cirgtipotecnico
	globals.cod_profes=reimpresor_vhiscli_to_tbc_ciruguar.cirglegatecnico
	globals.busco_profesional()
	globals.apeynom_tecnico=globals.apeynom_profes
	
	
	
	var parametros = new Array()
	parametros[0]='frm_protocolo_prn1'
	parametros[1]=globals.vHiscli
	parametros[2]=globals.vNroProtocolo
	parametros[3]=globals.vLega
	parametros[4]=globals.vFechaActual
	parametros[5]=globals.vHoraCarga
	
	
	
	
	if(globals.vTipoListado==1||globals.vTipoListado==4){
	//TODO Para ambulatorio tipo Admision debe ser igual a 1
	if(vs_to_tbc_alerta.getSize()>0){
		iniciaRegistroDatasetHtml()	
		fhtml += '<table width="1024">'
		fhtml += '<tr>'
		fhtml += '<td width="50%" align=center>' + 'ALERTA asistencial'+ '</td>'
		fhtml += '<td width="50%"></td>'
		fhtml += '</tr>'
		fhtml += '</table>'	
		grabaDatasetHtml()
		
		var descri_alerta=''
		var cuenta_alertas=0
		for(var aa=2;aa<=21;aa++){
			if(vs_to_tbc_alerta['aler_tipaler_'+aa]==1){
				cuenta_alertas++
				if (cuenta_alertas>1){
					descri_alerta +=', '
				}
					
				switch (aa)
				{
					case 2:descri_alerta +='Hipertenso';break;
					case 3:descri_alerta +='Farmacodependiente';break;
					case 4:descri_alerta +='Diabético';break;
					case 5:descri_alerta +='Epiléptico';break;
					case 6:descri_alerta +='Con Glaucoma';break;
					case 7:descri_alerta +='Inmunodeprimido';break;
					case 8:descri_alerta +='Anticoagulado';break;
					case 9:descri_alerta +='Coronario';break;
					case 10:descri_alerta +='Asmático';break;
					case 11:descri_alerta +='Testigo de Jehová';break;
					case 12:descri_alerta +='Con Marcapasos';break;
					case 13:descri_alerta +='Con Prótesis metálica';break;
					case 14:descri_alerta +='Obesidad Clase II';break;
					case 15:descri_alerta +='Obesidad Clase III';break;
					case 16:descri_alerta +='Insuficiencia Renal';break;
					case 17:descri_alerta +='Escaras';break;
					case 18:descri_alerta +='Trombosis Venosa';break;
					case 19:descri_alerta +='Alerta Epidemiológica';break;
					case 20:descri_alerta +='Rechazo Terapéutico';break;
					case 21:descri_alerta +='Alerta Social';break;
				}
				if(cuenta_alertas>4){
					
					iniciaRegistroDatasetHtml()
					fhtml += '<table width="1024">'
					fhtml += '<tr>'
					fhtml += '<td width="50%" align=center>' + descri_alerta + '</td>'
					fhtml += '<td width="50%"></td>'
					fhtml += '</tr>'
					fhtml += '</table>'	
		            grabaDatasetHtml()
					
					descri_alerta=''
					cuenta_alertas=0
				}
			}
				
		}
		if(cuenta_alertas>0&&cuenta_alertas<5){
			iniciaRegistroDatasetHtml()
			fhtml += '<table width="1024">'
			fhtml += '<tr>'
			fhtml += '<td width="50%" align=center>' + descri_alerta + '</td>'
			fhtml += '<td width="50%"></td>'
			fhtml += '</tr>'
			fhtml += '</table>'	
			grabaDatasetHtml()
			descri_alerta=''
			cuenta_alertas=0
		}
		if(vs_to_tbc_alerta.aler_tipaler_1==1){
			iniciaRegistroDatasetHtml()
			fhtml += '<table width="1024">'
			fhtml += '<tr>'
			fhtml += '<td width="50%" align=center>' + 'Alérgico a: '+vs_to_tbc_alerta.aler_alergico + '</td>'
			fhtml += '<td width="50%"></td>'
			fhtml += '</tr>'
			fhtml += '</table>'	
			grabaDatasetHtml()
		}
	}
		
	iniciaRegistroDatasetHtml()
	fhtml += '<hr width="1070">'
	grabaDatasetHtml()	
	
	if(reimpresor_vhiscli_to_tbc_ciruguar.cirggasasfinal==1){
		conteo_final='No'
	}
	else{
		if(reimpresor_vhiscli_to_tbc_ciruguar.cirggasasfinal==2){
		   conteo_final='Si'
		}
		else{
			conteo_final='-.-'
		}
	}
	
	globals.Interven=reimpresor_vhiscli_to_tbc_ciruguar.cirginterven
	iniciaRegistroDatasetHtml()
	fhtml += '<table width="1024">'
	fhtml += '<tr>'
	fhtml += '<td width="20%">' + 'Cantidad de pinzas al inicio: '+ reimpresor_vhiscli_to_tbc_ciruguar.cirgpinzasinicio + '</td>'
	fhtml += '<td width="80%">' + 'Cantidad de pinzas al final: '+ reimpresor_vhiscli_to_tbc_ciruguar.cirgpinzasfinal + '</td>'
	fhtml += '</tr>'
	fhtml += '</table>'	
	grabaDatasetHtml()
	
	iniciaRegistroDatasetHtml()
	fhtml += '<table width="1024">'
	fhtml += '<tr>'
	fhtml += '<td width="50%">' + 'Conteo de gasas al final dió bien: ' + conteo_final + '</td>'
	fhtml += '</tr>'
	fhtml += '</table>'	
	//fhtml += '<hr width="1070">'
	grabaDatasetHtml()
	iniciaRegistroDatasetHtml()
	fhtml += '<hr width="1070">'
	grabaDatasetHtml()	
	iniciaRegistroDatasetHtml()
	fhtml += '<table width="1024">'
	fhtml += '<tr>'
	fhtml += '<td width="20%" align=center>' + 'Evaluación Pre-Quirúrgica'+'</td>'
	//fhtml += '<td width=2%>' + '&#124;'+ '</td>'
	fhtml += '<td width="20%" align=center>' + 'Evaluación Post-Quirúrgica' + '</td>'
	fhtml += '<td width="60%"></td>'
	fhtml += '</tr>'
	fhtml += '</table>'	
	grabaDatasetHtml()
	iniciaRegistroDatasetHtml()
	fhtml += '<table width="1024">'
	fhtml += '<tr>'
	fhtml += '<td width="10%">' + ' Presión arterial'+'</td>'
	fhtml += '<td width="1%">' + ':'+'</td>'
	fhtml += '<td width="10%">' + reimpresor_vhiscli_to_tbc_ciruguar.cirgpresminpre+' - '+reimpresor_vhiscli_to_tbc_ciruguar.cirgpresmaxpre+'</td>'
	//fhtml += '<td width=2%>' + '&#124;'+ '</td>'
	fhtml += '<td width="10%">' + ' Presión arterial' + '</td>'
	fhtml += '<td width="1%">' + ':'+'</td>'
	fhtml += '<td width="73%">' + reimpresor_vhiscli_to_tbc_ciruguar.cirgpresminpost+' - '+reimpresor_vhiscli_to_tbc_ciruguar.cirgpresmaxpost + '</td>'
	fhtml += '</tr>'
	fhtml += '</table>'	
	grabaDatasetHtml()
	iniciaRegistroDatasetHtml()
	fhtml += '<table width="1024">'
	fhtml += '<tr>'
	fhtml += '<td width="10%">' + ' Pulso'+'</td>'
	fhtml += '<td width="1%">' + ':'+'</td>'
	fhtml += '<td width="10%">' + reimpresor_vhiscli_to_tbc_ciruguar.cirgpulsopre+'</td>'
	//fhtml += '<td width=2%>' + '&#124;'+ '</td>'
	fhtml += '<td width="10%">' + ' Pulso' + '</td>'
	fhtml += '<td width="1%">' + ':'+'</td>'
	fhtml += '<td width="73%">' + reimpresor_vhiscli_to_tbc_ciruguar.cirgpulsopost + '</td>'
	fhtml += '</tr>'
	fhtml += '</table>'	
	grabaDatasetHtml()
	iniciaRegistroDatasetHtml()
	fhtml += '<table width="1024">'
	fhtml += '<tr>'
	fhtml += '<td width="10%">' + ' Otras caract.'+'</td>'
	fhtml += '<td width="1%">' + ':'+'</td>'
	fhtml += '<td width="10%">' + reimpresor_vhiscli_to_tbc_ciruguar.cirgpulsopre+'</td>'
	//fhtml += '<td width=2%>' + '&#124;'+ '</td>'
	fhtml += '<td width="10%">' + ' Otras caract.' + '</td>'
	fhtml += '<td width="1%">' + ':'+'</td>'
	fhtml += '<td width="73%">' + reimpresor_vhiscli_to_tbc_ciruguar.cirgpulsopost + '</td>'
	fhtml += '</tr>'
	fhtml += '</table>'	
	grabaDatasetHtml()
	iniciaRegistroDatasetHtml()
	fhtml += '<hr width="1070">'
	grabaDatasetHtml()	
	iniciaRegistroDatasetHtml()
	fhtml += '<table width="1024">'
	fhtml += '<tr>'
	fhtml += '<td width="80%">' + 'Preparación Pre-quirúrgica '  + '</td>'
	fhtml += '</tr>'
	fhtml += '</table>'	
    grabaDatasetHtml()
	
	iniciaRegistroDatasetHtml()
	fhtml += '<table width="1024">'
	fhtml += '<tr>'
	fhtml += '<td width="50%">' + '¿Baño pre-quirúrgico? : '+ application.getValueListDisplayValue('reimpresor_vl_sino', reimpresor_vhiscli_to_tbc_ciruguar.cirgbaniopre) +'</td>'
	fhtml += '<td width="50%">' + '             ' +'</td>'
	fhtml += '</tr>'
	fhtml += '</table>'	
	grabaDatasetHtml()
	
	iniciaRegistroDatasetHtml()
	fhtml += '<table width="1024">'
	fhtml += '<tr>'
	fhtml += '<td width="50%">' + '¿En ayunas? : '+ application.getValueListDisplayValue('reimpresor_vl_sino', reimpresor_vhiscli_to_tbc_ciruguar.cirgayunopre) + '</td>'
	fhtml += '<td width="50%">' + '            ' +'</td>'
	fhtml += '</tr>'
	fhtml += '</table>'	
	grabaDatasetHtml()
	iniciaRegistroDatasetHtml()
	fhtml += '<table width="1024">'
	fhtml += '<tr>'
	fhtml += '<td width="50%">' + '¿Profilaxis antitetánica? : '+ application.getValueListDisplayValue('reimpresor_vl_sino', reimpresor_vhiscli_to_tbc_ciruguar.cirgantitpre) + '</td>'
	fhtml += '<td width="50%">' + ' ' +'</td>'
	fhtml += '</tr>'
	fhtml += '</table>'	
	grabaDatasetHtml()
	iniciaRegistroDatasetHtml()
	fhtml += '<hr width="1070">'
	grabaDatasetHtml()
	iniciaRegistroDatasetHtml()
	fhtml += '<table width="1024">'
	fhtml += '<tr>'
	fhtml += '<td width="45%">' + 'Intervenvion Quirúrgica: '+ interven_to_tbc_interven.itv_descripcion +'</td>'
	fhtml += '<td width="55%">' + 'Quirófano :  '+ reimpresor_vhiscli_to_tbc_ciruguar.cirgnroquirofa +'</td>'
	fhtml += '</tr>'
	fhtml += '</table>'
	grabaDatasetHtml()	
	
	
	fec_inicio=reimpresor_vhiscli_to_tbc_ciruguar.cirgfechainicio
	fec_inicio=fec_inicio.toString()
	hora_inicio=reimpresor_vhiscli_to_tbc_ciruguar.cirghorainicio
	hora_inicio=hora_inicio.toString()
	fec_final=reimpresor_vhiscli_to_tbc_ciruguar.cirgfechafinal
	fec_final=fec_final.toString()
	hora_final=reimpresor_vhiscli_to_tbc_ciruguar.cirghorafinal
	hora_final=hora_final.toString()
	globals.vHora=hora_inicio
	fec_inicio=fec_inicio.substr(6,2)+'/'+fec_inicio.substr(4,2)+'/'+fec_inicio.substr(0,4)+'  '+globals.FormatearHora();
	globals.vHora=hora_final
	fec_final=fec_final.substr(6,2)+'/'+fec_final.substr(4,2)+'/'+fec_final.substr(0,4)+'  '+globals.FormatearHora();
	
	iniciaRegistroDatasetHtml()
	fhtml += '<table width="1024">'
	fhtml += '<tr>'
	fhtml += '<td width="5%">' + '      '+'</td>'	
	fhtml += '<td width="16%">' + 'Comenzó : '+ fec_inicio +'</td>'
	fhtml += '<td width="21%">' + 'Finalizó : '+ fec_final +'</td>'
	fhtml += '<td width="58%">' + '      '+'</td>'
	fhtml += '</tr>'
	fhtml += '</table>'	
	grabaDatasetHtml()
	iniciaRegistroDatasetHtml()
	fhtml += '<hr width="1070">'
	grabaDatasetHtml()
	
	iniciaRegistroDatasetHtml()
	fhtml += '<table width="1024">'
	fhtml += '<tr>'
	fhtml += '<td width="20%">' + '      '+'</td>'	
	fhtml += '<td width="30%">' + 'EQUIPO QUIRURGICO' +'</td>'
	fhtml += '<td width="50%">' + '      '+'</td>'
	fhtml += '</tr>'
	fhtml += '</table>'	
	grabaDatasetHtml()	
	globals.tip_profes=reimpresor_vhiscli_to_tbc_guardia.guar_tipomed	
	globals.cod_profes=reimpresor_vhiscli_to_tbc_guardia.guar_medico
	globals.busco_profesional()
	globals.apeynom_cirujano=globals.apeynom_profes
	globals.matricula_cirujano=reimpresor_vhiscli_to_tbc_guardia.reimpresor_tbc_guardia_to_tbc_medicos_personal.medpermatricula
	globals.tip_profes=reimpresor_vhiscli_to_tbc_ciruguar.cirgtipotecnico	
	globals.cod_profes=reimpresor_vhiscli_to_tbc_ciruguar.cirglegatecnico
	globals.busco_profesional()
	globals.apeynom_tecnico=globals.apeynom_profes
	
	buscaProfesionalesenValciru()
	
	iniciaRegistroDatasetHtml()
	fhtml += '<table width="1024">'
	fhtml += '<tr>'
	fhtml += '<td width="25%">' + 'Cirujano : Dr.'+ globals.apeynom_cirujano +'</td>'
	fhtml += '<td width="75%">' + 'Ayudante 1ro. : Dr.'+ globals.apeynom_ayudante +'</td>'
	fhtml += '</tr>'
	fhtml += '</table>'	
	grabaDatasetHtml()
	iniciaRegistroDatasetHtml()
	fhtml += '<table width="1024">'
	fhtml += '<tr>'
	fhtml += '<td width="25%">' + 'Anestesiólogo : Dr.'+ globals.apeynom_anestesista +'</td>'
	fhtml += '<td width="75%">' + 'Ayudante 2do. : Dr.'+ globals.apeynom_ayudante2 +'</td>'
	fhtml += '</tr>'
	fhtml += '</table>'	
	grabaDatasetHtml()
	iniciaRegistroDatasetHtml()
	fhtml += '<table width="1024">'
	fhtml += '<tr>'
	fhtml += '<td width="25%">' + '                   ' +'</td>'
	fhtml += '<td width="75%">' + 'Instrumentadora : '+ globals.apeynom_instrumentadora +'</td>'
	fhtml += '</tr>'
	fhtml += '</table>'	
	grabaDatasetHtml()
	/*
	globals.tip_profes=utils.stringToNumber(fs['ciriieneonato'])	
	globals.cod_profes=utils.stringToNumber(fs['cirilegneonato'])
	globals.busco_profesional()
	globals.apeynom_neonatologo=globals.apeynom_profes
	*/
	
	
	iniciaRegistroDatasetHtml()
	fhtml += '<hr width="1070">'
	grabaDatasetHtml()
	iniciaRegistroDatasetHtml()
	fhtml += '<table width="1024">'
	fhtml += '<tr>'
	fhtml += '<td width="50%">' + 'DIAGNOSTICO Y DESCRIPCIÓN OPERATORIA : ' +'</td>'
	fhtml += '</tr>'
	fhtml += '</table>'	
	grabaDatasetHtml()
	globals.protoHTML1=html;
	html='';
	globals.lineas_impre=22
	
	
	var largo_tbc = 0;
	var stexto_con_enter='';
	var sTextoBuscado = " ";
	var contador_enter = 0;
	var largo_texto = 0;
	var cantidad_lineas = 0;
	var div = 0;
	var rem = 0;
	var desde_sub=0;
	globals.reimpresor_grupoTexto=1;
	if(reimpresor_vhiscli_to_tbc_proamb_t.getSize()>0){
		largo_tbc = reimpresor_vhiscli_to_tbc_proamb_t.getSize()
		for ( i = 1 ; i <=largo_tbc ; i++ ){
			reimpresor_vhiscli_to_tbc_proamb_t.setSelectedIndex(i)
			iniciaRegistroDatasetHtml()	
			fhtml += '<table width="1024">'
			fhtml += '<tr>'
			fhtml += '<td width="100%">' +reimpresor_vhiscli_to_tbc_proamb_t.proalinea + '</td>'
			fhtml += '</tr>'
			fhtml += '</table>'
			grabaDatasetHtml()
		}
	}else{
		stexto_con_enter = " ";
		sTextoBuscado = " ";
		sTextoBuscado='\n';
		contador_enter = 0;
		largo_texto = 0
		if(reimpresor_vhiscli_to_tbl_proamb_t.getSize()>0){
			largo_texto = reimpresor_vhiscli_to_tbl_proamb_t.texto.length
		}
		cantidad_lineas = 0
		div = 0
		rem = 0
		if(largo_texto <= 100){
			if(largo_texto>0){
				cantidad_lineas = 1
			}else{
				cantidad_lineas = 0
			}
		}else{
			div = parseInt(largo_texto/100)
			rem = largo_texto % 100
			if (rem > 0){
				rem = 1
			}
			cantidad_lineas = div + rem
		}
		//add header line
		//html += '<tr bgcolor="#cccccc"><td colspan="6" height=20><b>&nbsp;&nbsp;General Info</b></td></tr>'
		//html += '<tr><td><b>ID</b></td><td><b>Company Type</b></td><td><b>Industry</b></td>' +
		//'<td><b>Category</b></td></tr>'
		//if(globals.filas_texto > 0){
			//for ( i = 1 ; i <=globals.filas_texto ; i++ )
		
		desde_sub=0
		if(cantidad_lineas > 0){
			for ( i = 1 ; i <=cantidad_lineas ; i++ )
			{
			//record = vhisclin_to_tbc_admision.tbc_admision_to_tbc_obras.getRecord(i)
				desde_sub = 100 * (i - 1)
				html=''
				globals.tempHTML='';
			
				//html += '<p class="f45">'+vs1_to_tbl_protoc_txt.texto.substr(desde_sub,78)+'.</p>'
				iniciaRegistroDatasetHtml()	
				fhtml += '<table width="1024">'
				fhtml += '<tr>'
				//html += '<td width=100%>' + globals.dataset_lineas_texto.getValue(i,1) + '</td>'
				fhtml += '<td width="100%">' +reimpresor_vhiscli_to_tbl_proamb_t.texto.substr(desde_sub,100) + '</td>'
				fhtml += '</tr>'
				fhtml += '</table>'
				grabaDatasetHtml()
					
				globals.lineas_impre++
				contador_enter = 0;
				//stexto_con_enter = globals.dataset_lineas_texto.getValue(i,1)
				stexto_con_enter = reimpresor_vhiscli_to_tbl_proamb_t.texto.substr(desde_sub,100)
				while (stexto_con_enter.indexOf(sTextoBuscado) > -1) {
					stexto_con_enter = stexto_con_enter.substring(stexto_con_enter.indexOf(sTextoBuscado)+sTextoBuscado.length,stexto_con_enter.length);
			      contador_enter++; 
			    }
			      globals.lineas_impre=globals.lineas_impre+contador_enter
				  
				globals.tempHTML=html;
				end_of_page()
			}
		}
	}
	
	
	fhtml=''
	iniciaRegistroDatasetHtml()
	fhtml += '<table width="1024">'
	fhtml += '<tr>'
	fhtml += '<td width="30%">' + ' ' +'</td>'	
	fhtml += '<td width="20%" align=center>' + '__________________________________' +'</td>'
	fhtml += '<td width="50%">' + ' ' +'</td>'
	fhtml += '</tr>'
	fhtml += '</table>'	
	grabaDatasetHtml()
	
	iniciaRegistroDatasetHtml()
	fhtml += '<table width="1024">'
	fhtml += '<tr>'
	fhtml += '<td width="30%">' + ' ' +'</td>'	
	fhtml += '<td width="20%" align=center>' + 'Dr. '+ globals.apeynom_cirujano +'</td>'
	fhtml += '<td width="50%">' + ' ' +'</td>'
	fhtml += '</tr>'
	fhtml += '</table>'	
	grabaDatasetHtml()
	
	iniciaRegistroDatasetHtml()
	fhtml += '<table width="1024">'
	fhtml += '<tr>'
	fhtml += '<td width="30%">' + ' ' +'</td>'	
	fhtml += '<td width="20%" align=center>' + 'Matrícula Nro. '+ globals.matricula_cirujano +'</td>'
	fhtml += '<td width="50%">' + ' ' +'</td>'
	fhtml += '</tr>'
	fhtml += '</table>'	
	grabaDatasetHtml()
		
	//html += '</body></html>'
	globals.lineas_impre++
	globals.lineas_impre++
	globals.lineas_impre++
	globals.tempHTML=html;
	end_of_page()
	globals.campoHTML3 = html
	html = ''	
	}

	if(globals.vTipoListado==2||globals.vTipoListado==4){
		
	
	//html += '<html><body>'
	/*
	if(vs_to_tbc_cirugint2.tbc_cirugint_to_tbc_medicos_personal.medpertipocontrato==2){
		if(vhisclin2_to_tbc_admision.adm_obrsoc_7==1766){
			html += '<hr width=100%>'
			html += 'Con Respecto a las prácticas médicas que se da cuenta en esta historia clínica declaro: a) que asumo integra y plenamente la responsabilidad'+'<br>'
			globals.lineas_impre++
			globals.tempHTML=html;
			end_of_page()
			html=''
			html += 'de los actos realizados y por las consecuencias que de dichos actos se deriven ya sea personalmente o que sean realizados por los integrantes'+'<br>'
			globals.lineas_impre++
			globals.tempHTML=html;
			end_of_page()
			html=''
			html += 'de mi equipo (entre otros: médicos, ayudantes) todos ellos designados y elegidos por mi;'+'\n'
			globals.lineas_impre++
			globals.tempHTML=html;
			end_of_page()
			html=''
			html += 'b) que realizo esta práctica ejerciendo libremente mi profesión de médico cirujano, sin dependencia alguna, científica o jurídica con el'+'<br>'
			globals.lineas_impre++
			globals.tempHTML=html;
			end_of_page()
			html=''
			html += 'Sanatorio Colegiales; c) que mis servicios profesionales no han sido contratados por el Sanatorio, no teniendo vínculo o relación alguna con él;'+'<br>'
			globals.lineas_impre++
			globals.tempHTML=html;
			end_of_page()
			html=''
			html += ' d) por consiguiente desligo al Sanatorio Colegiales depropiedad de Desarrollos en Salud SA, de toda responsabilidad, obligándome a mantener'+'<br>'
			globals.lineas_impre++
			globals.tempHTML=html;
			end_of_page()
			html=''
			html += 'indemne a este por las consecuencias resultantes de mis actos. '
			globals.lineas_impre++
			globals.tempHTML=html;
			end_of_page()
			html=''
		}else{
			html += '<hr width=100%>'
			html += 'Con Respecto a las prácticas médicas que se da cuenta en esta historia clínica declaro: a) que asumo integra y plenamente la responsabilidad'+'<br>'
			globals.lineas_impre++
			globals.tempHTML=html;
			end_of_page()
			html=''
			html += 'de los actos realizados y por las consecuencias que de dichos actos se deriven ya sea personalmente o que sean realizados por los integrantes'+'<br>'
			globals.lineas_impre++
			globals.tempHTML=html;
			end_of_page()
			html=''
			html += 'de mi equipo (entre otros: médicos, ayudantes, anestesiólogos, instrumentadoras, patólogos) todos ellos designados y elegidos por mi;'+'<br>'
			globals.lineas_impre++
			globals.tempHTML=html;
			end_of_page()
			html=''
			html += 'b) que realizo esta práctica ejerciendo libremente mi profesión de médico cirujano, sin dependencia alguna, científica o jurídica con el'+'<br>'
			globals.lineas_impre++
			globals.tempHTML=html;
			end_of_page()
			html=''
			html += 'Sanatorio Colegiales; c) que mis servicios profesionales no han sido contratados por el Sanatorio, no teniendo vínculo o relación alguna con él;'+'<br>'
			globals.lineas_impre++
			globals.tempHTML=html;
			end_of_page()
			html=''
			html += ' d) por consiguiente desligo al Sanatorio Colegiales depropiedad de Desarrollos en Salud SA, de toda responsabilidad, obligándome a mantener'+'<br>'
			globals.lineas_impre++
			globals.tempHTML=html;
			end_of_page()
			html=''
			html += 'indemne a este por las consecuencias resultantes de mis actos. '
			globals.lineas_impre++
			globals.tempHTML=html;
			end_of_page()
			html=''
		}
		
		html += '<p></p>'
		globals.lineas_impre++
		globals.tempHTML=html;
		end_of_page()
		html=''
			
		html += '<table width=100% cellpadding=1 cellspacing=0>'
		html += '<tr>'
		html += '<td width=55%>' + ' ' +'</td>'	
		html += '<td width=40% align=center>' + '__________________________________' +'</td>'
		html += '<td width=5%>' + ' ' +'</td>'
		html += '</tr>'
		html += '</table>'	
		
		html += '<table width=100% cellpadding=1 cellspacing=0>'
		html += '<tr>'
		html += '<td width=55%>' + ' ' +'</td>'	
		html += '<td width=40% align=center>' + 'Dr. '+ globals.apeynom_cirujano +'</td>'
		html += '<td width=5%>' + ' ' +'</td>'
		html += '</tr>'
		html += '</table>'	
		
		html += '<table width=100% cellpadding=1 cellspacing=0>'
		html += '<tr>'
		html += '<td width=55%>' + ' ' +'</td>'	
		html += '<td width=40% align=center>' + 'Matrícula Nro. '+ globals.matricula_cirujano +'</td>'
		html += '<td width=5%>' + ' ' +'</td>'
		html += '</tr>'
		globals.lineas_impre++
		globals.lineas_impre++
		globals.lineas_impre++
		globals.tempHTML=html;
		end_of_page()
		html=''
	}
	*/
	iniciaRegistroDatasetHtml()
	fhtml += '<hr width="1070">'
	grabaDatasetHtml()
	
	globals.lineas_impre++
	globals.tempHTML=html;
	end_of_page()
	html=''	
	iniciaRegistroDatasetHtml()	
	fhtml += '<table width="1024">'
	fhtml += '<tr>'
	fhtml += '<td width="50%">' + 'HEMOTERAPIA : ' +'</td>'
	fhtml += '</tr>'
	fhtml += '</table>'	
	grabaDatasetHtml()
	
	
	var realizado_por = " ";
	globals.reimpresor_grupoTexto=2;
	if(reimpresor_vhiscli_to_tbc_proamb_t.getSize()>0){
		largo_tbc = reimpresor_vhiscli_to_tbc_proamb_t.getSize()
		for ( i = 1 ; i <=largo_tbc ; i++ ){
			reimpresor_vhiscli_to_tbc_proamb_t.setSelectedIndex(i)
			iniciaRegistroDatasetHtml()	
			fhtml += '<table width="1024">'
			fhtml += '<tr>'
			fhtml += '<td width="100%">' +reimpresor_vhiscli_to_tbc_proamb_t.proalinea + '</td>'
			fhtml += '</tr>'
			fhtml += '</table>'
			grabaDatasetHtml()
		}
		reimpresor_vhiscli_to_tbc_proamb_t.setSelectedIndex(1)
		realizado_por = reimpresor_vhiscli_to_tbc_proamb_t.proalinea
	}else{
		stexto_con_enter = " ";
		sTextoBuscado = " ";
		sTextoBuscado='\n';
		contador_enter = 0;
		largo_texto = 0
		if(reimpresor_vhiscli_to_tbl_proamb_t.getSize()>0){
			largo_texto = reimpresor_vhiscli_to_tbl_proamb_t.texto.length
			realizado_por = reimpresor_vhiscli_to_tbl_proamb_t.linea_cab
		}
		cantidad_lineas = 0
		div = 0
		rem = 0
		if(largo_texto <= 130){
			if(largo_texto>0){
				cantidad_lineas = 1
			}else{
				cantidad_lineas = 0
			}
		}else{
			div = parseInt(largo_texto/130)
			rem = largo_texto % 130
			if (rem > 0){
				rem = 1
			}
			cantidad_lineas = div + rem
		}
		
		desde_sub=0
		if(cantidad_lineas > 0){
			for ( i = 1 ; i <=cantidad_lineas ; i++ )
			{
			//record = vhisclin_to_tbc_admision.tbc_admision_to_tbc_obras.getRecord(i)
				desde_sub = 130 * (i - 1)
				html=''
				globals.tempHTML='';
			
				//html += '<p class="f45">'+vs1_to_tbl_protoc_txt.texto.substr(desde_sub,78)+'.</p>'
				iniciaRegistroDatasetHtml()	
				fhtml += '<table width="1024">'
				fhtml += '<tr>'
				//html += '<td width=100%>' + globals.dataset_lineas_texto.getValue(i,1) + '</td>'
				fhtml += '<td width="100%">' +reimpresor_vhiscli_to_tbl_proamb_t.texto.substr(desde_sub,130) + '</td>'
				fhtml += '</tr>'
				fhtml += '</table>'
				grabaDatasetHtml()
					
				globals.lineas_impre++
				contador_enter = 0;
				//stexto_con_enter = globals.dataset_lineas_texto.getValue(i,1)
				stexto_con_enter = reimpresor_vhiscli_to_tbl_proamb_t.texto.substr(desde_sub,130)
				while (stexto_con_enter.indexOf(sTextoBuscado) > -1) {
					stexto_con_enter = stexto_con_enter.substring(stexto_con_enter.indexOf(sTextoBuscado)+sTextoBuscado.length,stexto_con_enter.length);
			      contador_enter++; 
			    }
			      globals.lineas_impre=globals.lineas_impre+contador_enter
				  
				globals.tempHTML=html;
				end_of_page()
			}
		}
	}
	
	
	fhtml=''
	iniciaRegistroDatasetHtml()
	fhtml += '<table width="1024">'
	fhtml += '<tr>'
	fhtml += '<td width="30%">' + 'Responsable : ' +realizado_por+'</td>'	
	fhtml += '<td width="20%" align=center>' + '__________________________________' +'</td>'
	fhtml += '<td width="50%">' + ' ' +'</td>'
	fhtml += '</tr>'
	fhtml += '</table>'	
	grabaDatasetHtml()
	
	iniciaRegistroDatasetHtml()
	fhtml += '<table width="1024">'
	fhtml += '<tr>'
	fhtml += '<td width="30%">' + ' ' +'</td>'	
	fhtml += '<td width="20%" align=center>' + 'Firma y Sello' +'</td>'
	fhtml += '<td width="50%">' + ' ' +'</td>'
	fhtml += '</tr>'
	fhtml += '</table>'	
	grabaDatasetHtml()
	
	iniciaRegistroDatasetHtml()
	fhtml += '<table width="1024">'
	fhtml += '<tr>'
	fhtml += '<td width="60%">' + ' ' +'</td>'		
	// TODO fhtml += '<td width=40%>' + 'Realizado por : ' +fs['cirileghemote']+'</td>'
	fhtml += '</tr>'
	fhtml += '</table>'
	grabaDatasetHtml()
	globals.lineas_impre++
	globals.tempHTML=html;
	end_of_page()
	html=''
		
	iniciaRegistroDatasetHtml()	
	fhtml += '<hr width="1070">'
	grabaDatasetHtml()
	globals.lineas_impre++
	globals.tempHTML=html;
	end_of_page()
	html=''
	
	iniciaRegistroDatasetHtml()
	fhtml += '<table width=1024>'
	fhtml += '<tr>'
	fhtml += '<td width="50%">' + 'MONITOREO INTRAOPERATORIO : ' +'</td>'
	fhtml += '</tr>'
	fhtml += '</table>'
	grabaDatasetHtml()
	globals.lineas_impre++
	globals.tempHTML=html;
	end_of_page()
	html=''
		
	//plugins.dialogs.showInfoDialog("dataset texto","lleno dataset texto grupo 5")
	realizado_por = " ";
	globals.reimpresor_grupoTexto=3;
	if(reimpresor_vhiscli_to_tbc_proamb_t.getSize()>0){
		largo_tbc = reimpresor_vhiscli_to_tbc_proamb_t.getSize()
		for ( i = 1 ; i <=largo_tbc ; i++ ){
			reimpresor_vhiscli_to_tbc_proamb_t.setSelectedIndex(i)
			iniciaRegistroDatasetHtml()	
			fhtml += '<table width="1024">'
			fhtml += '<tr>'
			fhtml += '<td width="100%">' +reimpresor_vhiscli_to_tbc_proamb_t.proalinea + '</td>'
			fhtml += '</tr>'
			fhtml += '</table>'
			grabaDatasetHtml()
		}
		reimpresor_vhiscli_to_tbc_proamb_t.setSelectedIndex(1)
		realizado_por = reimpresor_vhiscli_to_tbc_proamb_t.proalinea
	}else{
		stexto_con_enter = " ";
		sTextoBuscado = " ";
		sTextoBuscado='\n';
		contador_enter = 0;
		largo_texto = 0
		if(reimpresor_vhiscli_to_tbl_proamb_t.getSize()>0){
			largo_texto = reimpresor_vhiscli_to_tbl_proamb_t.texto.length
			realizado_por = reimpresor_vhiscli_to_tbl_proamb_t.linea_cab
		}
		cantidad_lineas = 0
		div = 0
		rem = 0
		if(largo_texto <= 130){
			if(largo_texto>0){
				cantidad_lineas = 1
			}else{
				cantidad_lineas = 0
			}
		}else{
			div = parseInt(largo_texto/130)
			rem = largo_texto % 130
			if (rem > 0){
				rem = 1
			}
			cantidad_lineas = div + rem
		}
		
		desde_sub=0
		if(cantidad_lineas > 0){
			for ( i = 1 ; i <=cantidad_lineas ; i++ )
			{
			//record = vhisclin_to_tbc_admision.tbc_admision_to_tbc_obras.getRecord(i)
				desde_sub = 130 * (i - 1)
				html=''
				globals.tempHTML='';
			
				//html += '<p class="f45">'+vs1_to_tbl_protoc_txt.texto.substr(desde_sub,78)+'.</p>'
				iniciaRegistroDatasetHtml()	
				fhtml += '<table width="1024">'
				fhtml += '<tr>'
				//html += '<td width=100%>' + globals.dataset_lineas_texto.getValue(i,1) + '</td>'
				fhtml += '<td width="100%">' +reimpresor_vhiscli_to_tbl_proamb_t.texto.substr(desde_sub,130) + '</td>'
				fhtml += '</tr>'
				fhtml += '</table>'
				grabaDatasetHtml()
					
				globals.lineas_impre++
				contador_enter = 0;
				//stexto_con_enter = globals.dataset_lineas_texto.getValue(i,1)
				stexto_con_enter = reimpresor_vhiscli_to_tbl_proamb_t.texto.substr(desde_sub,130)
				while (stexto_con_enter.indexOf(sTextoBuscado) > -1) {
					stexto_con_enter = stexto_con_enter.substring(stexto_con_enter.indexOf(sTextoBuscado)+sTextoBuscado.length,stexto_con_enter.length);
			      contador_enter++; 
			    }
			      globals.lineas_impre=globals.lineas_impre+contador_enter
				  
				globals.tempHTML=html;
				end_of_page()
			}
		}
	}
	fhtml=''
	iniciaRegistroDatasetHtml()
	fhtml += '<table width="1024">'
	fhtml += '<tr>'
	fhtml += '<td width="30%">' + 'Realizado por : ' +realizado_por+'</td>'	
	fhtml += '<td width="20%" align=center>' + '__________________________________' +'</td>'
	fhtml += '<td width="50%">' + ' ' +'</td>'
	fhtml += '</tr>'
	fhtml += '</table>'	
	grabaDatasetHtml()
	
	iniciaRegistroDatasetHtml()
	fhtml += '<table width="1024">'
	fhtml += '<tr>'
	fhtml += '<td width="30%">' + ' ' +'</td>'	
	fhtml += '<td width="20%" align=center>' + 'Firma y Sello' +'</td>'
	fhtml += '<td width="50%">' + ' ' +'</td>'
	fhtml += '</tr>'
	fhtml += '</table>'	
	grabaDatasetHtml()
	
	iniciaRegistroDatasetHtml()
	fhtml += '<table width="1024">'
	fhtml += '<tr>'
	fhtml += '<td width="60%">' + ' ' +'</td>'		
	// TODO fhtml += '<td width=40%>' + 'Realizado por : ' +fs['cirileghemote']+'</td>'
	fhtml += '</tr>'
	fhtml += '</table>'
	grabaDatasetHtml()
	globals.lineas_impre++
	globals.tempHTML=html;
	end_of_page()
	html=''
	
	
	iniciaRegistroDatasetHtml()
	fhtml += '<hr width="1070">'
	grabaDatasetHtml()
	globals.lineas_impre++
	globals.tempHTML=html;
	end_of_page()
	html=''
	
	iniciaRegistroDatasetHtml()
	fhtml += '<table width="1024">'
	fhtml += '<tr>'
	fhtml += '<td width="50%">' + 'INTENSIFICADOR DE IMAGENES : ' +'</td>'
	fhtml += '</tr>'
	fhtml += '</table>'
	grabaDatasetHtml()
	realizado_por = " ";
	globals.reimpresor_grupoTexto=4;
	if(reimpresor_vhiscli_to_tbc_proamb_t.getSize()>0){
		largo_tbc = reimpresor_vhiscli_to_tbc_proamb_t.getSize()
		for ( i = 1 ; i <=largo_tbc ; i++ ){
			reimpresor_vhiscli_to_tbc_proamb_t.setSelectedIndex(i)
			iniciaRegistroDatasetHtml()	
			fhtml += '<table width="1024">'
			fhtml += '<tr>'
			fhtml += '<td width="100%">' +reimpresor_vhiscli_to_tbc_proamb_t.proalinea + '</td>'
			fhtml += '</tr>'
			fhtml += '</table>'
			grabaDatasetHtml()
		}
		reimpresor_vhiscli_to_tbc_proamb_t.setSelectedIndex(1)
		realizado_por = reimpresor_vhiscli_to_tbc_proamb_t.proalinea
	}else{
		stexto_con_enter = " ";
		sTextoBuscado = " ";
		sTextoBuscado='\n';
		contador_enter = 0;
		largo_texto = 0
		if(reimpresor_vhiscli_to_tbl_proamb_t.getSize()>0){
			largo_texto = reimpresor_vhiscli_to_tbl_proamb_t.texto.length
			realizado_por = reimpresor_vhiscli_to_tbl_proamb_t.linea_cab
		}
		cantidad_lineas = 0
		div = 0
		rem = 0
		if(largo_texto <= 130){
			if(largo_texto>0){
				cantidad_lineas = 1
			}else{
				cantidad_lineas = 0
			}
		}else{
			div = parseInt(largo_texto/130)
			rem = largo_texto % 130
			if (rem > 0){
				rem = 1
			}
			cantidad_lineas = div + rem
		}
		
		desde_sub=0
		if(cantidad_lineas > 0){
			for ( i = 1 ; i <=cantidad_lineas ; i++ )
			{
			//record = vhisclin_to_tbc_admision.tbc_admision_to_tbc_obras.getRecord(i)
				desde_sub = 130 * (i - 1)
				html=''
				globals.tempHTML='';
			
				//html += '<p class="f45">'+vs1_to_tbl_protoc_txt.texto.substr(desde_sub,78)+'.</p>'
				iniciaRegistroDatasetHtml()	
				fhtml += '<table width="1024">'
				fhtml += '<tr>'
				//html += '<td width=100%>' + globals.dataset_lineas_texto.getValue(i,1) + '</td>'
				fhtml += '<td width="100%">' +reimpresor_vhiscli_to_tbl_proamb_t.texto.substr(desde_sub,130) + '</td>'
				fhtml += '</tr>'
				fhtml += '</table>'
				grabaDatasetHtml()
					
				globals.lineas_impre++
				contador_enter = 0;
				//stexto_con_enter = globals.dataset_lineas_texto.getValue(i,1)
				stexto_con_enter = reimpresor_vhiscli_to_tbl_proamb_t.texto.substr(desde_sub,130)
				while (stexto_con_enter.indexOf(sTextoBuscado) > -1) {
					stexto_con_enter = stexto_con_enter.substring(stexto_con_enter.indexOf(sTextoBuscado)+sTextoBuscado.length,stexto_con_enter.length);
			      contador_enter++; 
			    }
			      globals.lineas_impre=globals.lineas_impre+contador_enter
				  
				globals.tempHTML=html;
				end_of_page()
			}
		}
	}
	
	iniciaRegistroDatasetHtml()
	fhtml += '<table width="1024">'
	fhtml += '<tr>'
	fhtml += '<td width="30%">' + ' ' +'</td>'		
	fhtml += '<td width="70%">' + 'Técnico : ' +globals.apeynom_tecnico+'</td>'
	fhtml += '</tr>'
	fhtml += '</table>'
	grabaDatasetHtml()
	//initializoRegistroDatasetHtmlConSalto()
	//fhtml+='<div class="saltoDePagina"></div><div>Este texto aparece en la segunda pagina</div>'
	//grabaDatasetHtml()
	//globals.lineas_impre++
	//globals.tempHTML=html;
	//end_of_page()
	html=''
	}
	//***************************************************************************
	
	
	
	//************************************************************************
	if(globals.vTipoListado==3||globals.vTipoListado==4){
	   
		if(fCuentaLineas>45){
			fhtml = '<html><body>'
			fhtml += '<br>'
			fhtml += '</body></html>'	
			fds.addRow([fhtml])
			fhtml = '<html><body>'
			fhtml += '<br>'
			fhtml += '</body></html>'	
			fds.addRow([fhtml])
			fhtml = '<html><body>'
			fhtml += '<br>'
			fhtml += '</body></html>'	
			fds.addRow([fhtml])
			fhtml = '<html><body>'
			fhtml += '<br>'
			fhtml += '</body></html>'	
			fds.addRow([fhtml])
			fCuentaLineas=0
		}else{
			var $tope_pagina=50-fCuentaLineas
			for(var x=1;x<=$tope_pagina;x++){
				fhtml = '<html><body>'
				fhtml += '<br>'
				fhtml += '</body></html>'	
				fds.addRow([fhtml])
			}
			fCuentaLineas=0
		}
		
	if(detalleFacturacion){
		
	//TODO modificar diseño para S.O. LINUX
	iniciaRegistroDatasetHtml()	
	fhtml += '<hr width="1070">'
	grabaDatasetHtml()
	globals.lineas_impre++
	globals.tempHTML=html;
	end_of_page()
	html=''
	
	iniciaRegistroDatasetHtml()
	fhtml += '<table width="1024">'
	fhtml += '<tr>'
	fhtml += '<td width="100%" align=center>' + ' DETALLE PARA FACTURACION ' +'</td>'
	fhtml += '</tr>'
	fhtml += '</table>'
	grabaDatasetHtml()
	globals.lineas_impre++
	globals.tempHTML=html;
	end_of_page()
	html=''
		
	iniciaRegistroDatasetHtml()	
	fhtml += '<hr width="1070">'
	grabaDatasetHtml()
	globals.lineas_impre++
	globals.tempHTML=html;
	end_of_page()
	html=''
	
	iniciaRegistroDatasetHtml()
	fhtml += '<table width="1024">'
	fhtml += '<tr>'
	fhtml += '<td width="100%">' + 'Intervención Quirúrgica / Prácticas' +'</td>'
	fhtml += '</tr>'
	fhtml += '</table>'
	grabaDatasetHtml()
	globals.lineas_impre++
	globals.tempHTML=html;
	end_of_page()
	html=''
		
	var $sql="select preghistclinica, pregfechaingreso, preghoraingreso, pregtiponome, pregcodnome, pregsecuencia from tbc_prest_guar\
        where PregHistClinica = ? and PregFechaIngreso = ? and PregHoraIngreso = ? \
        and (PregTipoPrest=3 or PregTipoPrest=1 or PregTipoPrest=7) \
        and PregEstado <> 9"
	var args = new Array();
	args[0]=globals.vHiscli;
	args[1]=globals.reimpresor_fecha_ingreso
	args[2]=globals.reimpresor_hora_ingreso
	var dataset = databaseManager.getDataSetByQuery("asistencial",$sql,args,-1)
	var largo_ds = dataset.getMaxRowIndex()
	if(largo_ds > 0){
		for(var j=1;j<=largo_ds;j++){
			globals.reimpresor_cod_nome=dataset.getValue(j,5)
			globals.reimpresor_tipo_nome=dataset.getValue(j,4)
			globals.reimpresor_secuencia=dataset.getValue(j,6)
			globals.ancho_col0=5;
			globals.ancho_col1=10;
			globals.ancho_col2=82;
			globals.ancho_col3=1;
			globals.ancho_col4=1;
			globals.ancho_col5=1;
			globals.column0= globals.reimpresor_tipo_nome
			globals.column1= globals.reimpresor_cod_nome
			globals.tipnome = globals.column0
			globals.codnome = globals.column1
			globals.busco_nomencla()
			if (globals.column0.length<2){
				  globals.column0= '0'+globals.column0
			}
			if(globals.column1.length>5){
			      globals.column1= globals.column1.substr(0,2)+'.'+globals.column1.substr(2,2)+'.'+globals.column1.substr(4,2)
			}else{
				  globals.column1= '0'+globals.column1.substr(0,1)+'.'+globals.column1.substr(1,2)+'.'+globals.column1.substr(3,2)
			}
			globals.column2=globals.descri_nome.substr(0,80)
			globals.column3 = '';globals.column4 = '';globals.column5 = '';
			grabar_tmp()
			if(reimpresor_vhiscli_to_tbc_val_ciru.getSize()>0){
				if(reimpresor_vhiscli_to_tbc_val_ciru.vcircodnome>0){
					globals.tip_profes=reimpresor_vhiscli_to_tbc_val_ciru.vcirtipaneste
					globals.cod_profes=reimpresor_vhiscli_to_tbc_val_ciru.vcircodaneste
					globals.busco_profesional()
					globals.apeynom_anestesista=globals.apeynom_profes
					globals.tip_profes=reimpresor_vhiscli_to_tbc_val_ciru.vcirtipayud1	
					globals.cod_profes=reimpresor_vhiscli_to_tbc_val_ciru.vcircodayud1
					globals.busco_profesional()
					globals.apeynom_ayudante=globals.apeynom_profes
					globals.tip_profes=reimpresor_vhiscli_to_tbc_val_ciru.vcirtipayud2	
					globals.cod_profes=reimpresor_vhiscli_to_tbc_val_ciru.vcircodayud2
					globals.busco_profesional()
					globals.apeynom_ayudante2=globals.apeynom_profes
					globals.tip_profes=reimpresor_vhiscli_to_tbc_val_ciru.vcirtipinstru
					globals.cod_profes=reimpresor_vhiscli_to_tbc_val_ciru.vcircodinstru
					globals.busco_profesional()
					globals.apeynom_instrumentadora=globals.apeynom_profes
					
					globals.ancho_col0=05;
					globals.ancho_col1=30;
					globals.ancho_col2=30;
					globals.ancho_col3=30;
					globals.ancho_col4=3;
					globals.ancho_col5=2;
					globals.column0='';
					globals.column1='Especialista Dr.';
					globals.column2=globals.apeynom_cirujano;
					if(reimpresor_vhiscli_to_tbc_val_ciru.vcirtipespec==0){
						globals.column3= ''
						globals.column4= reimpresor_vhiscli_to_tbc_val_ciru.vcirporespec
						globals.column5='%'
						globals.column3= globals.column4+globals.column5
						globals.column4=''
						globals.column5=''  
					}else{
						globals.column3= 'externo'
						globals.column4= ''
						globals.column5= ''
					}
					grabar_tmp()
					globals.column1='Ayudante 1ro.';
					globals.column2=globals.apeynom_ayudante;
					if(reimpresor_vhiscli_to_tbc_val_ciru.vcircodayud1!=0&&reimpresor_vhiscli_to_tbc_val_ciru.vcircodayud1!=null){
						if(reimpresor_vhiscli_to_tbc_val_ciru.vcirtipayud1==0){
							globals.column3= ''
							globals.column4= reimpresor_vhiscli_to_tbc_val_ciru.vcirporayud1
							globals.column5='%'
							globals.column3= globals.column4+globals.column5
							globals.column4=''
							globals.column5=''  
						}else{
							globals.column3= 'externo'
							globals.column4= ''
							globals.column5= ''
						}
						grabar_tmp()
					}
					globals.column1='Ayudante 2ro.';
					globals.column2=globals.apeynom_ayudante2;
					if(reimpresor_vhiscli_to_tbc_val_ciru.vcircodayud2!=0&&reimpresor_vhiscli_to_tbc_val_ciru.vcircodayud2!=null){
						if(reimpresor_vhiscli_to_tbc_val_ciru.vcirtipayud2==0){
							globals.column3= ''
							globals.column4= reimpresor_vhiscli_to_tbc_val_ciru.vcirporayud2
							globals.column5='%'
							globals.column3= globals.column4+globals.column5
							globals.column4=''
							globals.column5=''  
						}else{
							globals.column3= 'externo'
							globals.column4= ''
							globals.column5= ''
						}
						grabar_tmp()
					}
					globals.column1='Anestesiólogo';
					globals.column2=globals.apeynom_anestesista;
					if(reimpresor_vhiscli_to_tbc_val_ciru.vcircodaneste!=0&&reimpresor_vhiscli_to_tbc_val_ciru.vcircodaneste!=null){
						if(reimpresor_vhiscli_to_tbc_val_ciru.vcirtipaneste==0){
							globals.column3= ''
							globals.column4= reimpresor_vhiscli_to_tbc_val_ciru.vcirporaneste
							globals.column5='%'
							globals.column3= globals.column4+globals.column5
							globals.column4=''
							globals.column5=''  
						}else{
							globals.column3= 'externo'
							globals.column4= ''
							globals.column5= ''
						}
						grabar_tmp()
					}
					globals.column1='Instrumentadora';
					globals.column2=globals.apeynom_instrumentadora;
					if(reimpresor_vhiscli_to_tbc_val_ciru.vcircodinstru!=0&&reimpresor_vhiscli_to_tbc_val_ciru.vcircodinstru!=null){
						if(reimpresor_vhiscli_to_tbc_val_ciru.vcirtipinstru==0){
							globals.column3= ''
							globals.column4= reimpresor_vhiscli_to_tbc_val_ciru.vcirpaginstru
							globals.column5='%'
							globals.column3= globals.column4+globals.column5
							globals.column4=''
							globals.column5=''  
						}else{
							globals.column3= 'externo'
							globals.column4= ''
							globals.column5= ''
						}
						grabar_tmp()
					}
				}
			}
		}
	}
	
	iniciaRegistroDatasetHtml()
	fhtml += '<hr width="1070">'
	grabaDatasetHtml()	
	globals.lineas_impre++
	globals.tempHTML=html;
	end_of_page()
	html=''
	
	iniciaRegistroDatasetHtml()
	fhtml += '<table width="1024">'
	fhtml += '<tr>'
	fhtml += '<td width="100%">' + 'Medicamentos / Descartables' +'</td>'
	fhtml += '</tr>'
	fhtml += '</table>'
	grabaDatasetHtml()
	globals.lineas_impre++
	globals.tempHTML=html;
	end_of_page()
	html=''
	globals.reimpresor_preg_estado=9
	globals.reimpresor_tipo_prest=98
	var largo_rel_medicam = reimpresor_vs_medicam_to_tbc_prest_guar.getSize()
	if(largo_rel_medicam > 0){
		globals.ancho_col0=15;
		globals.ancho_col1=30;
		globals.ancho_col2=30;
		globals.ancho_col3=15;
		globals.ancho_col4=5;
		globals.ancho_col5=5;
		for(z=1;z<=largo_rel_medicam;z++){
			reimpresor_vs_medicam_to_tbc_prest_guar.setSelectedIndex(z)
			if(reimpresor_vs_medicam_to_tbc_prest_guar.reimpresor_tbc_prest_guar_to_tbc_articulos.getSize()>0){
				globals.column0=reimpresor_vs_medicam_to_tbc_prest_guar.reimpresor_tbc_prest_guar_to_tbc_articulos.art_codigo
				//globals.vArticulo=vs_to_tbc_cirugint2.tbc_cirugint_to_tbc_medic_cir['medc_codart_'+utils.numberFormat(z,0)]
				globals.column1=reimpresor_vs_medicam_to_tbc_prest_guar.reimpresor_tbc_prest_guar_to_tbc_articulos.art_descrip
				globals.column2=reimpresor_vs_medicam_to_tbc_prest_guar.reimpresor_tbc_prest_guar_to_tbc_articulos.art_presenta
				globals.column3=reimpresor_vs_medicam_to_tbc_prest_guar.pregcantidad
				grabar_tmp1()
			}
		}
	}
	
	
	html=''
	html += '<p></p>'
	globals.lineas_impre++
	globals.tempHTML=html;
	end_of_page()
	html=''
		
	html += '<p></p>'
	globals.lineas_impre++
	globals.tempHTML=html;
	end_of_page()
	html=''
	
	iniciaRegistroDatasetHtml()
	fhtml += '<table width="1024">'
	fhtml += '<tr>'
	fhtml += '<td width="30%">' + ' ' +'</td>'	
	fhtml += '<td width="20%" align=center>' + '__________________________________' +'</td>'
	fhtml += '<td width="50%">' + ' ' +'</td>'
	fhtml += '</tr>'
	fhtml += '</table>'	
	grabaDatasetHtml()
	iniciaRegistroDatasetHtml()
	fhtml += '<table width="1024">'
	fhtml += '<tr>'
	fhtml += '<td width="30%">' + ' ' +'</td>'	
	fhtml += '<td width="20%" align=center>' + 'Dr. '+ globals.apeynom_cirujano +'</td>'
	fhtml += '<td width="50%">' + ' ' +'</td>'
	fhtml += '</tr>'
	fhtml += '</table>'	
	grabaDatasetHtml()
	iniciaRegistroDatasetHtml()
	fhtml += '<table width="1024">'
	fhtml += '<tr>'
	fhtml += '<td width="30%">' + ' ' +'</td>'	
	fhtml += '<td width="20%" align=center>' + 'Matrícula Nro. '+ globals.matricula_cirujano +'</td>'
	fhtml += '<td width="50%">' + ' ' +'</td>'
	fhtml += '</tr>'
	fhtml += '</table>'
	grabaDatasetHtml()
	}
	globals.lineas_impre++
	globals.lineas_impre++
	globals.lineas_impre++
	globals.tempHTML=html;
	end_of_page()
	html=''
	}
}
