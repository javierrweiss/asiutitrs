/**
 * @properties={typeid:35,uuid:"3BDE17AB-EFED-4646-BEF9-6E5B5AEA8C78",variableType:-4}
 */
var dsAux = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"4DDD45EA-0812-4054-99BF-E334A13D8B84",variableType:93}
 */
var fecha_impresion = new Date();

/**
 * @properties={typeid:24,uuid:"CE1676E7-98DE-4CFA-BB93-E5520304EC23"}
 * @AllowToRunInFind
 */
function sub_buildReport() {
	//plugins.dialogs.showInfoDialog("protocolo",globals.protocolo)
	globals.lineas_impre=0;
	globals.vHisclin_edit=globals.vHiscli.toString()
	var largo = globals.vHisclin_edit.length
	globals.vHisclin_edit=globals.vHisclin_edit.substr(0,largo-1)+'/'+globals.vHisclin_edit.substr(largo-1,1)
	var responde='';var	banio='';var fec_banio='';var rasura='';var fec_rasura='';var rasura_con='';var conteo_final='';
	var fec_inicio = '';
	var hora_inicio= '';
	var fec_final='';
	var hora_final='';
	var hora_banio='';
	var hora_rasura='';
	var str=globals.protocolo
	
	str=str.toString()
	str=str.split('|')
	
    var args = new Array();
    args[0]=globals.vHiscli;
    args[1]=utils.stringToNumber(str[0])
	args[2]=utils.stringToNumber(str[1])
	args[3]=utils.stringToNumber(str[2])
	globals.Nprotocolo=globals.vNroProtocolo;
   
	var html1 = ''
	var i;
	var fecha_nac = vhisclin_to_tbc_admision_scroll.adm_fecnac
	try{
		globals.vEdad = globals.CalculoEdad(fecha_nac)+" "+globals.vTipoEdad
	}catch(msg){
		application.output(msg.message)
	}
	try{
		switch (vhisclin3_to_tbc_admision.adm_iva){
			case 1:globals.vCondicion="No Gravada";break;
			case 2:globals.vCondicion="Gravada Alicuota Gral.";break;
			case 3:globals.vCondicion="Gravada Alicuota Reduc.";break;
			default:globals.vCondicion="No Gravada";break;
		}
	}catch(msg){
		application.output(msg.message)
	}
	
	switch (vhisclin_to_tbc_admision_scroll.tbc_admision_scroll_to_tbc_obras.obr_tipclie){
		case 1:globals.vCategoria="PARTICULAR";break;
		case 2:globals.vCategoria="PREPAGA";break;
		case 3:globals.vCategoria="OBRA SOCIAL";break;
		case 4:globals.vCategoria="EMPRESAS";break;
		case 5:globals.vCategoria="COMPAÑÍA DE SEGUROS";break;
		case 6:globals.vCategoria="PERSONAL DEL SANATORIO";break;
		case 7:globals.vCategoria="PLAN SALUD";break;
		case 8:globals.vCategoria="GERENCIADORA";break;
		case 9:globals.vCategoria="PROFESIONAL";break;
		default:globals.vCategoria=" ";break;
	}
	//plugins.dialogs.showInfoDialog("getfoundset","antes del getfoundset")
    var fs = databaseManager.getFoundSet("asistencial","tbc_cirugint")
	var fs2 = databaseManager.getFoundSet("asistencial","tbc_cirugint_dtl")
	//plugins.dialogs.showInfoDialog("find1","antes del find1")
	fs.find()
	fs['cirihistcl'] = globals.vHiscli
	fs['ciritiponome'] = 0
	fs['ciricodnome'] = 0
	fs['ciriprotocolo'] = globals.vNroProtocolo
	fs['cirifechacarga'] = globals.vFechaCarga
	fs['cirihoracarga'] = globals.vHoraCarga
	fs.search()

	
	//plugins.dialogs.showInfoDialog("find2","antes del find2")
	globals.linea_aux = 0;
	//fs2.find()
	//fs2['cirihistcl'] = globals.vHiscli
	//fs2['ciritiponome'] = 1
	//fs2['ciricodnome'] = '>0'
	//fs2['ciriprotocolo'] = globals.vNroProtocolo
	//fs2['cirifechacarga'] = args[2]
	//fs2['cirihoracarga'] = args[3]
	//fs2.search()
	fs2.loadRecords(vs_to_tbc_cirugint_dtl)
	fs2.setSelectedIndex(2)
	
	globals.tip_profes=utils.stringToNumber(fs['ciriieciru'])	
	globals.cod_profes=utils.stringToNumber(fs['cirilegciru'])
	globals.busco_profesional()
	globals.apeynom_cirujano=globals.apeynom_profes
	//////globals.matricula_cirujano=vs_to_tbc_cirugint2.tbc_cirugint_to_tbc_medicos_personal.medpermatricula
	globals.tip_profes=utils.stringToNumber(fs['ciritipotecnico'])	
	globals.cod_profes=utils.stringToNumber(fs['cirilegatecnico'])
	globals.busco_profesional()
	globals.apeynom_tecnico=globals.apeynom_profes
	//globals.apeynom_anestesista=vs_to_tbc_cirugint2.tbc_cirugint_to_tbc_anestesia.tbc_anestesia_to_tbc_medicos_personal.medperapeynom
	globals.apeynom_monitoreo=fs['cirilegmonito']
	globals.apeynom_perfusionista=fs['cirilegperfus']
	
	
	var parametros = new Array()
	parametros[0]='frm_protocolo_prn1'
	parametros[1]=globals.vHiscli
	parametros[2]=globals.vNroProtocolo
	parametros[3]=globals.vLega
	parametros[4]=globals.vFechaActual
	parametros[5]=globals.vHoraCarga
	
	html1 = ''
	//html += '<html><body>'
	//html += '<html><style type="text/css"> p.f44{ text-indent: -17px;  position: absolute;  padding-left: 15px; line-height: 1em; width:400px; max-width: 405px; text-align: justify;} '
	//html += 'p.f43{ text-indent: -15px;  position: absolute;  padding-left: 15px; line-height: 1em; width:400px; max-width: 405px; text-align: justify;} '
	//html += 'p.f45{ line-height: 1em; width:400px; max-width: 405px; text-align: justify;}</style><body>'
		
	if(globals.vTipoListado==1||globals.vTipoListado==4){
		//CUERPO
	dsAux = databaseManager.createEmptyDataSet();
	dsAux.addColumn('html');	
	
	if(vs_to_tbc_alerta.getSize()>0){
		html1=''
		html1 += '<html><body>'
		html1 += '<table width=100% cellpadding=1 cellspacing=0>'
		html1 += '<tr>'
		html1 += '<td width=100% align=center>' + 'ALERTA asistencial'+ '</td>'
		html1 += '</tr>'
		html1 += '</table>'
		html1 += '</body></html>'
			
		dsAux.addRow([html1]);
		
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
					html1=''
					html1 += '<html><body>'
					html1 += '<table width=100% cellpadding=1 cellspacing=0>'
					html1 += '<tr>'
					html1 += '<td width=100% align=center>' + descri_alerta + '</td>'
					html1 += '</tr>'
					html1 += '</table>'	
					html1 += '</body></html>'
					dsAux.addRow([html1]);	
					descri_alerta=''
					cuenta_alertas=0
				}
			}
				
		}
		if(cuenta_alertas>0&&cuenta_alertas<5){
			html1=''
			html1 += '<html><body>'
			html1 += '<table width=100% cellpadding=1 cellspacing=0>'
			html1 += '<tr>'
			html1 += '<td width=100% align=center>' + descri_alerta + '</td>'
			html1 += '</tr>'
			html1 += '</table>'	
			html1 += '</body></html>'
			dsAux.addRow([html1]);	
			descri_alerta=''
			cuenta_alertas=0
		}
		if(vs_to_tbc_alerta.aler_tipaler_1==1){
			html1=''
			html1 += '<html><body>'
			html1 += '<table width=100% cellpadding=1 cellspacing=0>'
			html1 += '<tr>'
			html1 += '<td width=100% align=center>' + 'Alérgico a: '+vs_to_tbc_alerta.aler_alergico + '</td>'
			html1 += '</tr>'
			html1 += '</table>'	
			html1 += '</body></html>'
			dsAux.addRow([html1]);
		
		}
	}
	
	html1=''
	html1 += '<html><body>'
	html1 += '<hr width=100%>'
	html1 += '</body></html>'
	dsAux.addRow([html1]);
	
	if(utils.stringToNumber(fs['cirigasasfinal'])==1){
		conteo_final='No'
	}
	else{
		if(utils.stringToNumber(fs['cirigasasfinal'])==2){
		   conteo_final='Si'
		}
		else{
			conteo_final='-.-'
		}
	}
	if(utils.stringToNumber(fs['ciriresponde'])==1){
		responde="RESPONDE"
		if(utils.stringToNumber(fs['cirifechabanio'])==0){
			banio="No";
			fec_banio= "-.-";
		}
		else{
			banio="Si"
			fec_banio=fs['cirifechabanio']
			fec_banio=fec_banio.toString()
			//hora_banio=fs['ciri_horabanio'].toString()
			globals.vHora=fs['cirihorabanio']
			fec_banio=fec_banio.substr(6,2)+'/'+fec_banio.substr(4,2)+'/'+fec_banio.substr(0,4)+'  '+globals.FormatearHora()
			//' '+hora_banio.substr(0,2)+':'+hora_banio.substr(2,2)
		}
	}
	globals.Interven=utils.stringToNumber(fs['ciriinterven'])
	html1=''
	html1 += '<html><body>'
	html1 += '<table width=100% cellpadding=1 cellspacing=0>'
	html1 += '<tr>'
	html1 += '<td width=50%>' + 'Cantidad de pinzas al inicio: '+ fs['ciripinzasinicio'] + '</td>'
	html1 += '<td width=50%>' + 'Cantidad de pinzas al final: '+ fs['ciripinzasfinal'] + '</td>'
	html1 += '</tr>'
	html1 += '</table>'	
	html1 += '</body></html>'
	dsAux.addRow([html1]);	
	
	html1=''
	html1 += '<html><body>'
	html1 += '<table width=50% cellpadding=1 cellspacing=0>'
	html1 += '<tr>'
	html1 += '<td width=50%>' + 'Conteo de gasas al final dió bien: ' + conteo_final + '</td>'
	html1 += '</tr>'
	html1 += '</table>'	
	html1 += '<hr width=100%>'
	html1 += '</body></html>'
	dsAux.addRow([html1]);		
	
	html1=''
	html1 += '<html><body>'
	html1 += '<table width=80% cellpadding=1 cellspacing=0>'
	html1 += '<tr>'
	html1 += '<td width=80%>' + 'Preparación Pre-quirúrgica:    Estado de conciencia: ' + responde + '</td>'
	html1 += '</tr>'
	html1 += '</table>'
	html1 += '</body></html>'
	dsAux.addRow([html1]);

	html1=''
	html1 += '<html><body>'
	html1 += '<table width=100% cellpadding=1 cellspacing=0>'
	html1 += '<tr>'
	html1 += '<td width=50%>' + '¿Fue bañado? : '+ banio +'</td>'
	html1 += '<td width=50%>' + 'Fecha del baño  : '+ fec_banio +'</td>'
	html1 += '</tr>'
	html1 += '</table>'	
	html1 += '</body></html>'
	dsAux.addRow([html1]);
	
	if(utils.stringToNumber(fs['cirifecharasura'])==0){
		rasura="No";
		fec_rasura= "-.-";
	}
	else{
		rasura="Si"
		fec_rasura=fs['cirifecharasura']
		fec_rasura=fec_rasura.toString()
		hora_rasura=fs['cirihorarasura'].toString()
		globals.vHora=fs['cirihorarasura']
		fec_rasura=fec_rasura.substr(6,2)+'/'+fec_rasura.substr(4,2)+'/'+fec_rasura.substr(0,4)+'  '+globals.FormatearHora();
		if(utils.stringToNumber(fs['ciriconquerasura'])==1){
			rasura_con="Hoja de afeitar"
		}else{
			rasura_con="Eléctrica"
		}
	}
	html1=''
	html1 += '<html><body>'
	html1 += '<table width=100% cellpadding=1 cellspacing=0>'
	html1 += '<tr>'
	html1 += '<td width=50%>' + '¿Fue rasurado? : '+ rasura + '</td>'
	html1 += '<td width=50%>' + 'Fecha del rasurado: '+ fec_rasura +'</td>'
	html1 += '</tr>'
	html1 += '</table>'
	html1 += '</body></html>'
	dsAux.addRow([html1]);
	
	html1=''
	html1 += '<html><body>'
	html1 += '<table width=100% cellpadding=1 cellspacing=0>'
	html1 += '<tr>'
	html1 += '<td width=50%>' + '                  '+ '</td>'
	html1 += '<td width=50%>' + 'Rasurado con  : '+ rasura_con +'</td>'
	html1 += '</tr>'
	html1 += '</table>'
	html1 += '</body></html>'
	dsAux.addRow([html1]);
	
	html1=''
	html1 += '<html><body>'
	html1 += '<hr width=100%>'
	html1 += '</body></html>'
	dsAux.addRow([html1]);
	
	html1=''
	html1 += '<html><body>'
	html1 += '<table width=100% cellpadding=1 cellspacing=0>'
	html1 += '<tr>'
	html1 += '<td width=70%>' + 'Intervenvion Quirúrgica: '+ interven_to_tbc_interven.itv_descripcion +'</td>'
	html1 += '<td width=30%>' + 'Quirófano :  '+ fs['cirinroquirofa'] +'</td>'
	html1 += '</tr>'
	html1 += '</table>'
	html1 += '</body></html>'
	dsAux.addRow([html1]);
		
	//application.output(fs['cirifechainicio'])
	//application.output(fs['cirifechafinal'])
	try{
	fec_inicio=fs['cirifechainicio']
	fec_inicio=fec_inicio.toString()
	hora_inicio=fs['cirihorainicio']
	hora_inicio=hora_inicio.toString()
	fec_final=fs['cirifechafinal']
	fec_final=fec_final.toString()
	hora_final=fs['cirihorafinal']
	hora_final=hora_final.toString()
	globals.vHora=hora_inicio
	fec_inicio=fec_inicio.substr(6,2)+'/'+fec_inicio.substr(4,2)+'/'+fec_inicio.substr(0,4)+'  '+globals.FormatearHora();
	globals.vHora=hora_final
	fec_final=fec_final.substr(6,2)+'/'+fec_final.substr(4,2)+'/'+fec_final.substr(0,4)+'  '+globals.FormatearHora();
	}catch(msg){
		application.output(msg)
	}
	html1=''
	html1 += '<html><body>'
	html1 += '<table width=100% cellpadding=1 cellspacing=0>'
	html1 += '<tr>'
	html1 += '<td width=10%>' + '      '+'</td>'	
	html1 += '<td width=40%>' + 'Comenzó : '+ fec_inicio +'</td>'
	html1 += '<td width=40%>' + 'Finalizó : '+ fec_final +'</td>'
	html1 += '<td width=10%>' + '      '+'</td>'
	html1 += '</tr>'
	html1 += '</table>'	
	html1 += '</body></html>'
	dsAux.addRow([html1]);
	
	html1=''
	html1 += '<html><body>'
	html1 += '<hr width=100%>'
	html1 += '</body></html>'
	dsAux.addRow([html1]);
	
	html1=''
	html1 += '<html><body>'
	html1 += '<table width=100% cellpadding=1 cellspacing=0>'
	html1 += '<tr>'
	html1 += '<td width=35%>' + '      '+'</td>'	
	html1 += '<td width=30%>' + 'EQUIPO QUIRURGICO' +'</td>'
	html1 += '<td width=35%>' + '      '+'</td>'
	html1 += '</tr>'
	html1 += '</table>'
	html1 += '</body></html>'
	dsAux.addRow([html1]);
		
	globals.tip_profes=utils.stringToNumber(fs['ciriieciru'])	
	globals.cod_profes=utils.stringToNumber(fs['cirilegciru'])
	globals.busco_profesional()
	globals.apeynom_cirujano=globals.apeynom_profes
	globals.matricula_cirujano=vs_to_tbc_cirugint2_116.tbc_cirugint_to_tbc_medicos_personal_116.medpermatricula
	globals.tip_profes=utils.stringToNumber(fs['ciritipotecnico'])	
	globals.cod_profes=utils.stringToNumber(fs['cirilegatecnico'])
	globals.busco_profesional()
	globals.apeynom_tecnico=globals.apeynom_profes
	globals.tip_profes=utils.stringToNumber(fs2['ciritipmed_5'])	
	globals.cod_profes=utils.stringToNumber(fs2['ciricodmed_5'])
	globals.busco_profesional()
	globals.apeynom_anestesista=globals.apeynom_profes
	//globals.apeynom_anestesista=vs_to_tbc_cirugint2.tbc_cirugint_to_tbc_anestesia.tbc_anestesia_to_tbc_medicos_personal.medperapeynom
	globals.apeynom_monitoreo=fs['cirilegmonito']
	globals.apeynom_perfusionista=fs['cirilegperfus']
	globals.tip_profes=utils.stringToNumber(fs2['ciritipmed_2'])	
	globals.cod_profes=utils.stringToNumber(fs2['ciricodmed_2'])
	globals.busco_profesional()
	globals.apeynom_ayudante=globals.apeynom_profes
	globals.tip_profes=utils.stringToNumber(fs2['ciritipmed_3'])	
	globals.cod_profes=utils.stringToNumber(fs2['ciricodmed_3'])
	globals.busco_profesional()
	globals.apeynom_ayudante2=globals.apeynom_profes
	globals.tip_profes=utils.stringToNumber(fs2['ciritipmed_4'])	
	globals.cod_profes=utils.stringToNumber(fs2['ciricodmed_4'])
	globals.busco_profesional()
	globals.apeynom_ayudante3=globals.apeynom_profes
	globals.tip_profes=utils.stringToNumber(fs2['ciritipmed_7'])	
	globals.cod_profes=utils.stringToNumber(fs2['ciricodmed_7'])
	globals.busco_profesional()
	globals.apeynom_instrumentadora=globals.apeynom_profes
	
	html1=''
	html1 += '<html><body>'
	html1 += '<table width=100% cellpadding=1 cellspacing=0>'
	html1 += '<tr>'
	html1 += '<td width=50%>' + 'Cirujano : Dr.'+ globals.apeynom_cirujano +'</td>'
	html1 += '<td width=50%>' + 'Anestesiólogo: Dr.'+ globals.apeynom_anestesista +'</td>'
	html1 += '</tr>'
	html1 += '</table>'
	html1 += '</body></html>'
	dsAux.addRow([html1]);	
	
	html1=''
	html1 += '<html><body>'
	html1 += '<table width=100% cellpadding=1 cellspacing=0>'
	html1 += '<tr>'
	html1 += '<td width=50%>' + 'Ayudante : Dr.'+ globals.apeynom_ayudante +'</td>'
	html1 += '<td width=50%>' + 'Monitoreo: Dr.'+ globals.apeynom_monitoreo +'</td>'
	html1 += '</tr>'
	html1 += '</table>'
	html1 += '</body></html>'
	dsAux.addRow([html1]);
	
	html1=''
	html1 += '<html><body>'
	html1 += '<table width=100% cellpadding=1 cellspacing=0>'
	html1 += '<tr>'
	html1 += '<td width=50%>' + 'Ayudante 3º : Dr.'+ globals.apeynom_ayudante3 +'</td>'
	html1 += '<td width=50%>' + 'Ayudante 2º : Dr.'+ globals.apeynom_ayudante2 +'</td>'
	html1 += '</tr>'
	html1 += '</table>'
	html1 += '</body></html>'
	dsAux.addRow([html1]);	
	
	html1=''
	html1 += '<html><body>'
	html1 += '<table width=100% cellpadding=1 cellspacing=0>'
	html1 += '<tr>'
	html1 += '<td width=50%>' + 'Perfusionista : Dr.'+ globals.apeynom_perfusionista +'</td>'
	html1 += '<td width=50%>' + 'Instrumentadora : '+ globals.apeynom_instrumentadora +'</td>'
	html1 += '</tr>'
	html1 += '</table>'
	html1 += '</body></html>'
	dsAux.addRow([html1]);	
	
	globals.tip_profes=utils.stringToNumber(fs['ciriieneonato'])	
	globals.cod_profes=utils.stringToNumber(fs['cirilegneonato'])
	globals.busco_profesional()
	globals.apeynom_neonatologo=globals.apeynom_profes
	
	html1=''
	html1 += '<html><body>'
	html1 += '<table width=100% cellpadding=1 cellspacing=0>'
	html1 += '<tr>'
	html1 += '<td width=50%>' + 'Partero : '+ globals.apeynom_partero +'</td>'
	html1 += '<td width=50%>' + 'Neonatologo : Dr.'+ globals.apeynom_neonatologo +'</td>'
	html1 += '</tr>'
	html1 += '</table>'
	html1 += '</body></html>'
	dsAux.addRow([html1]);	
	html1=''
	html1 += '<html><body>'
	html1 += '<hr width=100%>'
	html1 += '</body></html>'
	dsAux.addRow([html1]);
	
	globals.tip_profes=utils.stringToNumber(fs['ciriieconsenti'])	
	if(globals.tip_profes==1){
		globals.tip_profes=0
	}
	globals.cod_profes=utils.stringToNumber(fs['cirilegconsenti'])
	globals.busco_profesional()
	globals.apeynom_consentimiento=globals.apeynom_profes
	html1=''
	html1 += '<html><body>'
	html1 += '<table width=100% cellpadding=1 cellspacing=0>'
	html1 += '<tr>'
	html1 += '<td width=80%>' + 'Controlo Consentimiento informado : '+ globals.apeynom_consentimiento+'</td>'
	html1 += '<td width=20%>' + '   ' +'</td>'
	html1 += '</tr>'
	html1 += '</table>'	
	html1 += '</body></html>'
	dsAux.addRow([html1]);
	html1=''
	html1 += '<html><body>'
	html1 += '<hr width=100%>'
	html1 += '</body></html>'
	dsAux.addRow([html1]);
	html1=''
	html1 += '<html><body>'
	html1 += '<table width=50% cellpadding=1 cellspacing=0>'
	html1 += '<tr>'
	html1 += '<td width=50%>' + 'DIAGNOSTICO PRE-OPERATORIO : ' +'</td>'
	html1 += '</tr>'
	html1 += '</table>'	
	html1 += '</body></html>'
	dsAux.addRow([html1]);
	
	globals.protoHTML1=html1;
	html1='';
	globals.lineas_impre=22
	//plugins.dialogs.showInfoDialog("dataset texto","lleno dataset texto grupo 1")
	globals.grupo_texto=1;
	globals.vItemTexto=1;
	globals.lleno_dataset_texto()
	if(globals.filas_texto > 0){
		for ( i = 1 ; i <=globals.filas_texto ; i++ ){
			globals.tempHTML='';
			html1=''
			html1 += '<html><body>'
			html1 += '<table width=100% cellpadding=1 cellspacing=0>'
			html1 += '<tr>'
			html1 += '<td width=100%>' + globals.dataset_lineas_texto.getValue(i,1) + '</td>'
			html1 += '</tr>'
			html1 += '</table>'
			html1 += '</body></html>'
			dsAux.addRow([html1]);	
			globals.lineas_impre++
			globals.tempHTML=html1;
		    end_of_page()
		}
	}
			
	var stexto_con_enter = " ";
	var sTextoBuscado = " ";
	sTextoBuscado='\n';
	var contador_enter = 0;
	var largo_texto = 0
	if(vs_to_tbl_protoc_txt.getSize()>0){
		largo_texto = vs_to_tbl_protoc_txt.texto.length
	}
	var cantidad_lineas = 0
	var div = 0
	var rem = 0
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
	//add header line
	//html += '<tr bgcolor="#cccccc"><td colspan="6" height=20><b>&nbsp;&nbsp;General Info</b></td></tr>'
	//html += '<tr><td><b>ID</b></td><td><b>Company Type</b></td><td><b>Industry</b></td>' +
	//'<td><b>Category</b></td></tr>'
	//
	
	var desde_sub=0
	if(cantidad_lineas > 0){
		for ( i = 1 ; i <=cantidad_lineas ; i++ )
		{
			//record = vhisclin_to_tbc_admision.tbc_admision_to_tbc_obras.getRecord(i)
			desde_sub = 130 * (i - 1)
			
			globals.tempHTML='';
		
			//html += '<p class="f45">'+vs1_to_tbl_protoc_txt.texto.substr(desde_sub,78)+'.</p>'
			html1=''
			html1 += '<html><body>'	
			html1 += '<table width=100% cellpadding=1 cellspacing=0>'
			html1 += '<tr>'
			//html += '<td width=100%>' + globals.dataset_lineas_texto.getValue(i,1) + '</td>'
			html1 += '<td width=100%>' + vs_to_tbl_protoc_txt.texto.substr(desde_sub,130) + '</td>'
			html1 += '</tr>'
			html1 += '</table>'
			html1 += '</body></html>'
			dsAux.addRow([html1]);
				
			globals.lineas_impre++
			contador_enter = 0;
			//stexto_con_enter = globals.dataset_lineas_texto.getValue(i,1)
			stexto_con_enter = vs1_to_tbl_protoc_txt.texto.substr(desde_sub,130)
			while (stexto_con_enter.indexOf(sTextoBuscado) > -1) {
				stexto_con_enter = stexto_con_enter.substring(stexto_con_enter.indexOf(sTextoBuscado)+sTextoBuscado.length,stexto_con_enter.length);
		      contador_enter++; 
		    }
		    globals.lineas_impre=globals.lineas_impre+contador_enter
	  
		    globals.tempHTML=html1;
		    end_of_page()
		}
	}
	
	html1=''
	html1 += '<html><body>'
	html1 += '<p></p>'
	html1 += '</body></html>'
	dsAux.addRow([html1]);
	
	globals.lineas_impre++
	globals.tempHTML=html1;
	end_of_page();
	
	html1=''
	html1 += '<html><body>'
	html1 += '<table width=50% cellpadding=1 cellspacing=0>'
	html1 += '<tr>'
	html1 += '<td width=50%>' + 'DIAGNOSTICO POST-OPERATORIO : ' +'</td>'
	html1 += '</tr>'
	html1 += '</table>'
	html1 += '</body></html>'
	dsAux.addRow([html1]);
	globals.lineas_impre++
	globals.tempHTML=html1;
	end_of_page()
	html1='';
	//plugins.dialogs.showInfoDialog("dataset texto","lleno dataset texto grupo 2")
	globals.grupo_texto=2;
	globals.vItemTexto=2;
	//globals.lleno_dataset_texto()
	globals.lleno_dataset_texto()
	if(globals.filas_texto > 0){
		for ( i = 1 ; i <=globals.filas_texto ; i++ ){
			globals.tempHTML='';
			html1=''
			html1 += '<html><body>'
			html1 += '<table width=100% cellpadding=1 cellspacing=0>'
			html1 += '<tr>'
			html1 += '<td width=100%>' + globals.dataset_lineas_texto.getValue(i,1) + '</td>'
			html1 += '</tr>'
			html1 += '</table>'
			html1 += '</body></html>'
			dsAux.addRow([html1]);
			globals.lineas_impre++
			globals.tempHTML=html1;
		    end_of_page()
		}
	}
	largo_texto = 0
	if(vs_to_tbl_protoc_txt.getSize()>0){
		largo_texto = vs_to_tbl_protoc_txt.texto.length
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
	//if(globals.filas_texto > 0){
		//for ( i = 1 ; i <=globals.filas_texto ; i++ )
		//{
			//record = vhisclin_to_tbc_admision.tbc_admision_to_tbc_obras.getRecord(i)
	desde_sub=0
	if(cantidad_lineas > 0){
		for ( i = 1 ; i <=cantidad_lineas ; i++ ){
					//record = vhisclin_to_tbc_admision.tbc_admision_to_tbc_obras.getRecord(i)
			desde_sub = 130 * (i - 1)
	html1=''
	html1 += '<html><body>'
	html1 += '<table width=100% cellpadding=1 cellspacing=0>'
	html1 += '<tr>'
	//html += '<td width=100%>' + globals.dataset_lineas_texto.getValue(i,1) + '</td>'
	html1 += '<td width=100%>' +  vs_to_tbl_protoc_txt.texto.substr(desde_sub,130) + '</td>'
	html1 += '</tr>'
	html1 += '</table>'
	html1 += '</body></html>'
	dsAux.addRow([html1]);	
	globals.lineas_impre++
	
	contador_enter = 0;
	stexto_con_enter =  vs_to_tbl_protoc_txt.texto.substr(desde_sub,130)
	while (stexto_con_enter.indexOf(sTextoBuscado) > -1) {
		stexto_con_enter = stexto_con_enter.substring(stexto_con_enter.indexOf(sTextoBuscado)+sTextoBuscado.length,stexto_con_enter.length);
      contador_enter++; 
      }
      globals.lineas_impre=globals.lineas_impre+contador_enter
	globals.tempHTML=html1;
	end_of_page()
		}
	}
	html1=''
	html1 += '<html><body>'
	html1 += '<p></p>'
	html1 += '</body></html>'
	dsAux.addRow([html1]);
	globals.lineas_impre++
	globals.tempHTML=html1;
	end_of_page()
	
	html1=''
	html1 += '<html><body>'
	html1 += '<table width=60% cellpadding=1 cellspacing=0>'
	html1 += '<tr>'
	html1 += '<td width=60%>' + 'OPERACION EFECTUADA Y DESCRIPCION : ' +'</td>'
	html1 += '</tr>'
	html1 += '</table>'
	html1 += '</body></html>'
	dsAux.addRow([html1]);
	globals.lineas_impre++
	globals.tempHTML=html1;
	end_of_page()
	//plugins.dialogs.showInfoDialog("dataset texto","lleno dataset texto grupo 3")		
	globals.grupo_texto=3;
	globals.vItemTexto=3;
	//globals.lleno_dataset_texto()
	globals.lleno_dataset_texto()
	if(globals.filas_texto > 0){
		for ( i = 1 ; i <=globals.filas_texto ; i++ ){
			globals.tempHTML='';
			html1=''
			html1 += '<html><body>'
			html1 += '<table width=100% cellpadding=1 cellspacing=0>'
			html1 += '<tr>'
			html1 += '<td width=100%>' + globals.dataset_lineas_texto.getValue(i,1) + '</td>'
			html1 += '</tr>'
			html1 += '</table>'
			html1 += '</body></html>'
			dsAux.addRow([html1]);
			globals.lineas_impre++
			globals.tempHTML=html1;
		    end_of_page()
		}
	}
	largo_texto = 0
	if(vs_to_tbl_protoc_txt.getSize()>0){
		largo_texto = vs_to_tbl_protoc_txt.texto.length
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
	//if(globals.filas_texto > 0){
		//for ( i = 1 ; i <=globals.filas_texto ; i++ )
		//{
			//record = vhisclin_to_tbc_admision.tbc_admision_to_tbc_obras.getRecord(i)
	desde_sub=0
	if(cantidad_lineas > 0){
		var sTexto = ''
		//for ( i = 1 ; i <=cantidad_lineas ; i++ ){
					//record = vhisclin_to_tbc_admision.tbc_admision_to_tbc_obras.getRecord(i)
			//desde_sub = 130 * (i - 1)
	//if(globals.filas_texto > 0){
		
		//for ( i = 1 ; i <=globals.filas_texto ; i++ )
		//{
			
			//sTexto += globals.dataset_lineas_texto.getValue(i,1)
			sTexto += vs_to_tbl_protoc_txt.texto
			
		//}
		contador_enter = 0;
		stexto_con_enter = sTexto
		while (stexto_con_enter.indexOf(sTextoBuscado) > -1) {
			stexto_con_enter = stexto_con_enter.substring(stexto_con_enter.indexOf(sTextoBuscado)+sTextoBuscado.length,stexto_con_enter.length);
	      contador_enter++; 
		}
		var kenter = sTexto.indexOf("\n");
		while (kenter > 0) {
			sTexto = sTexto.replace("\n", "<br>");
			kenter = sTexto.indexOf("\n");
		}
		
		html1=''
		html1 += '<html><body>'
		html1 += '<table width=100% cellpadding=1 cellspacing=0>'
		html1 += '<tr>'
		html1 += '<td width=95%>' + sTexto + '</td>'
		html1 += '<td width=5%>' + ' ' + '</td>'
		html1 += '</tr>'
		html1 += '</table>'
		html1 += '</body></html>'
		dsAux.addRow([html1]);	
		/*
		html=''
		html += '<p>'+sTexto+'</p>'
		*/
		globals.lineas_impre++
		
		
		/*
	html=''
	html += '<table width=100% cellpadding=1 cellspacing=0>'
	html += '<tr>'
	html += '<td width=100%>' + globals.dataset_lineas_texto.getValue(i,1) + '</td>'
	html += '</tr>'
	html += '</table>'
	globals.lineas_impre++
	contador_enter = 0;
	stexto_con_enter = globals.dataset_lineas_texto.getValue(i,1)
	while (stexto_con_enter.indexOf(sTextoBuscado) > -1) {
		stexto_con_enter = stexto_con_enter.substring(stexto_con_enter.indexOf(sTextoBuscado)+sTextoBuscado.length,stexto_con_enter.length);
      contador_enter++; 
	}
	*/
	globals.lineas_impre=globals.lineas_impre+contador_enter
	globals.tempHTML=html1;
	end_of_page()
		//}
	}
	
	html1=''
	html1 += '<html><body>'
	html1 += '<table width=100% cellpadding=1 cellspacing=0>'
	html1 += '<tr>'
	html1 += '<td width=55%>' + ' ' +'</td>'	
	html1 += '<td width=40% align=center>' + '__________________________________' +'</td>'
	html1 += '<td width=5%>' + ' ' +'</td>'
	html1 += '</tr>'
	html1 += '</table>'	
	html1 += '</body></html>'
	dsAux.addRow([html1]);
	
	html1=''
	html1 += '<html><body>'
	html1 += '<table width=100% cellpadding=1 cellspacing=0>'
	html1 += '<tr>'
	html1 += '<td width=55%>' + ' ' +'</td>'	
	html1 += '<td width=40% align=center>' + 'Dr. '+ globals.apeynom_cirujano +'</td>'
	html1 += '<td width=5%>' + ' ' +'</td>'
	html1 += '</tr>'
	html1 += '</table>'
	html1 += '</body></html>'
	dsAux.addRow([html1]);
	
	html1=''
	html1 += '<html><body>'
	html1 += '<table width=100% cellpadding=1 cellspacing=0>'
	html1 += '<tr>'
	html1 += '<td width=55%>' + ' ' +'</td>'	
	html1 += '<td width=40% align=center>' + 'Matrícula Nro. '+ globals.matricula_cirujano +'</td>'
	html1 += '<td width=5%>' + ' ' +'</td>'
	html1 += '</tr>'
	html1 += '</table>'	
	html1 += '</body></html>'
	dsAux.addRow([html1]);
	//html += '</body></html>'
	globals.lineas_impre++
	globals.lineas_impre++
	globals.lineas_impre++
	globals.tempHTML=html1;
	end_of_page()
	globals.campoHTML3 = html1
	html1 = ''	
	}

	if(globals.vTipoListado==2||globals.vTipoListado==4){
		
	
	//html += '<html><body>'
	try{
	if(vs_to_tbc_cirugint2_116.tbc_cirugint_to_tbc_medicos_personal_116.medpertipocontrato==2){
		if(vhisclin_to_tbc_admision_scroll.adm_obrsoc_7==1766){
			html1 += '<hr width=100%>'
			html1 += 'Con Respecto a las prácticas médicas que se da cuenta en esta historia clínica declaro: a) que asumo integra y plenamente la responsabilidad'+'<br>'
			globals.lineas_impre++
			globals.tempHTML=html1;
			end_of_page()
			html1=''
			html1 += 'de los actos realizados y por las consecuencias que de dichos actos se deriven ya sea personalmente o que sean realizados por los integrantes'+'<br>'
			globals.lineas_impre++
			globals.tempHTML=html1;
			end_of_page()
			html1=''
			html1 += 'de mi equipo (entre otros: médicos, ayudantes) todos ellos designados y elegidos por mi;'+'\n'
			globals.lineas_impre++
			globals.tempHTML=html1;
			end_of_page()
			html1=''
			html1 += 'b) que realizo esta práctica ejerciendo libremente mi profesión de médico cirujano, sin dependencia alguna, científica o jurídica con el'+'<br>'
			globals.lineas_impre++
			globals.tempHTML=html1;
			end_of_page()
			html1=''
			html1 += 'Sanatorio Colegiales; c) que mis servicios profesionales no han sido contratados por el Sanatorio, no teniendo vínculo o relación alguna con él;'+'<br>'
			globals.lineas_impre++
			globals.tempHTML=html1;
			end_of_page()
			html1=''
			html1 += ' d) por consiguiente desligo al Sanatorio Colegiales depropiedad de Desarrollos en Salud SA, de toda responsabilidad, obligándome a mantener'+'<br>'
			globals.lineas_impre++
			globals.tempHTML=html1;
			end_of_page()
			html1=''
			html1 += 'indemne a este por las consecuencias resultantes de mis actos. '
			globals.lineas_impre++
			globals.tempHTML=html1;
			end_of_page()
			html1=''
		}else{
			html1 += '<hr width=100%>'
			html1 += 'Con Respecto a las prácticas médicas que se da cuenta en esta historia clínica declaro: a) que asumo integra y plenamente la responsabilidad'+'<br>'
			globals.lineas_impre++
			globals.tempHTML=html1;
			end_of_page()
			html1=''
			html1 += 'de los actos realizados y por las consecuencias que de dichos actos se deriven ya sea personalmente o que sean realizados por los integrantes'+'<br>'
			globals.lineas_impre++
			globals.tempHTML=html1;
			end_of_page()
			html1=''
			html1 += 'de mi equipo (entre otros: médicos, ayudantes, anestesiólogos, instrumentadoras, patólogos) todos ellos designados y elegidos por mi;'+'<br>'
			globals.lineas_impre++
			globals.tempHTML=html1;
			end_of_page()
			html1=''
			html1 += 'b) que realizo esta práctica ejerciendo libremente mi profesión de médico cirujano, sin dependencia alguna, científica o jurídica con el'+'<br>'
			globals.lineas_impre++
			globals.tempHTML=html1;
			end_of_page()
			html1=''
			html1 += 'Sanatorio Colegiales; c) que mis servicios profesionales no han sido contratados por el Sanatorio, no teniendo vínculo o relación alguna con él;'+'<br>'
			globals.lineas_impre++
			globals.tempHTML=html1;
			end_of_page()
			html1=''
			html1 += ' d) por consiguiente desligo al Sanatorio Colegiales depropiedad de Desarrollos en Salud SA, de toda responsabilidad, obligándome a mantener'+'<br>'
			globals.lineas_impre++
			globals.tempHTML=html1;
			end_of_page()
			html1=''
			html1 += 'indemne a este por las consecuencias resultantes de mis actos. '
			globals.lineas_impre++
			globals.tempHTML=html1;
			end_of_page()
			html1=''
		}
		html1=''
		html1 += '<html><body>'
		html1 += '<p></p>'
		html1 += '</body></html>'
		dsAux.addRow([html1]);	
		globals.lineas_impre++
		globals.tempHTML=html1;
		end_of_page()
		html1=''
		
		html1=''
		html1 += '<html><body>'
		html1 += '<table width=100% cellpadding=1 cellspacing=0>'
		html1 += '<tr>'
		html1 += '<td width=55%>' + ' ' +'</td>'	
		html1 += '<td width=40% align=center>' + '__________________________________' +'</td>'
		html1 += '<td width=5%>' + ' ' +'</td>'
		html1 += '</tr>'
		html1 += '</table>'	
		html1 += '</body></html>'
		dsAux.addRow([html1]);	
		
		html1=''
		html1 += '<html><body>'
		html1 += '<table width=100% cellpadding=1 cellspacing=0>'
		html1 += '<tr>'
		html1 += '<td width=55%>' + ' ' +'</td>'	
		html1 += '<td width=40% align=center>' + 'Dr. '+ globals.apeynom_cirujano +'</td>'
		html1 += '<td width=5%>' + ' ' +'</td>'
		html1 += '</tr>'
		html1 += '</table>'	
		html1 += '</body></html>'
		dsAux.addRow([html1]);		
		
		html1=''
		html1 += '<html><body>'
		html1 += '<table width=100% cellpadding=1 cellspacing=0>'
		html1 += '<tr>'
		html1 += '<td width=55%>' + ' ' +'</td>'	
		html1 += '<td width=40% align=center>' + 'Matrícula Nro. '+ globals.matricula_cirujano +'</td>'
		html1 += '<td width=5%>' + ' ' +'</td>'
		html1 += '</tr>'
		html1 += '</table>'	
		html1 += '</body></html>'
		dsAux.addRow([html1]);		
		globals.lineas_impre++
		globals.lineas_impre++
		globals.lineas_impre++
		globals.tempHTML=html1;
		end_of_page()
		
	}
	}catch(msg){
		application.output(msg)
	}
	html1=''
	html1 += '<html><body>'
	html1 += '<hr width=100%>'
	html1 += '</body></html>'
	dsAux.addRow([html1]);
	globals.lineas_impre++
	globals.tempHTML=html1;
	end_of_page()
	html1=''
	html1 += '<html><body>'
	html1 += '<table width=50% cellpadding=1 cellspacing=0>'
	html1 += '<tr>'
	html1 += '<td width=50%>' + 'HEMOTERAPIA : ' +'</td>'
	html1 += '</tr>'
	html1 += '</table>'	
	html1 += '</body></html>'
	dsAux.addRow([html1]);
	globals.lineas_impre++
	globals.tempHTML=html1;
	end_of_page()
	html1=''
	//plugins.dialogs.showInfoDialog("dataset texto","lleno dataset texto grupo 4")
	globals.grupo_texto=4;
	globals.vItemTexto=4;
	largo_texto = 0
	if(vs_to_tbl_protoc_txt.getSize()>0){
		largo_texto = vs_to_tbl_protoc_txt.texto.length
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
		for ( i = 1 ; i <=cantidad_lineas ; i++ ){
			desde_sub = 130 * (i - 1)
			html1=''
			html1 += '<html><body>'
			html1 += '<table width=100% cellpadding=1 cellspacing=0>'
			html1 += '<tr>'
			html1 += '<td width=100%>' +  vs_to_tbl_protoc_txt.texto.substr(desde_sub,130) + '</td>'
			html1 += '</tr>'
			html1 += '</table>'
			html1 += '</body></html>'
			dsAux.addRow([html1]);	
			globals.lineas_impre++
			globals.tempHTML=html1;
			end_of_page()
			html1=''
		}
	}
	html1=''
	html1 += '<html><body>'
	html1 += '<table width=100% cellpadding=1 cellspacing=0>'
	html1 += '<tr>'
	html1 += '<td width=60%>' + ' ' +'</td>'		
	html1 += '<td width=40%>' + 'Realizado por : ' +fs['cirileghemote']+'</td>'
	html1 += '</tr>'
	html1 += '</table>'
	html1 += '</body></html>'
	dsAux.addRow([html1]);	
	globals.lineas_impre++
	globals.tempHTML=html1;
	end_of_page()
	html1=''
	html1=''
	html1 += '<html><body>'	
	html1 += '<hr width=100%>'
	html1 += '</body></html>'
	dsAux.addRow([html1]);
	globals.lineas_impre++
	globals.tempHTML=html1;
	end_of_page()
	html1=''
	html1=''
	html1 += '<html><body>'		
	html1 += '<table width=50% cellpadding=1 cellspacing=0>'
	html1 += '<tr>'
	html1 += '<td width=50%>' + 'MONITOREO INTRAOPERATORIO : ' +'</td>'
	html1 += '</tr>'
	html1 += '</table>'
	html1 += '</body></html>'
	dsAux.addRow([html1]);	
	globals.lineas_impre++
	globals.tempHTML=html1;
	end_of_page()
	html1=''
		
	//plugins.dialogs.showInfoDialog("dataset texto","lleno dataset texto grupo 5")
	globals.grupo_texto=5;
	globals.vItemTexto=5;
	largo_texto = 0
	if(vs_to_tbl_protoc_txt.getSize()>0){
		largo_texto = vs_to_tbl_protoc_txt.texto.length
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
		for ( i = 1 ; i <=cantidad_lineas ; i++ ){
			desde_sub = 130 * (i - 1)
			html1=''
			html1 += '<html><body>'
			html1 += '<table width=100% cellpadding=1 cellspacing=0>'
			html1 += '<tr>'
			html1 += '<td width=100%>' +  vs_to_tbl_protoc_txt.texto.substr(desde_sub,130) + '</td>'
			html1 += '</tr>'
			html1 += '</table>'
			html1 += '</body></html>'
			dsAux.addRow([html1]);	
			globals.lineas_impre++
			globals.tempHTML=html1;
			end_of_page()
			html1=''
		}
	}
	html1=''
	html1 += '<html><body>'
	html1 += '<table width=100% cellpadding=1 cellspacing=0>'
	html1 += '<tr>'
	html1 += '<td width=60%>' + ' ' +'</td>'		
	html1 += '<td width=40%>' + 'Realizado por : ' +fs['cirilegmonito']+'</td>'
	html1 += '</tr>'
	html1 += '</table>'
	html1 += '</body></html>'
	dsAux.addRow([html1]);	
	globals.lineas_impre++
	globals.tempHTML=html1;
	end_of_page()
	html1=''
	html1=''
	html1 += '<html><body>'
	html1 += '<hr width=100%>'
	html1 += '</body></html>'
	dsAux.addRow([html1]);
	globals.lineas_impre++
	globals.tempHTML=html1;
	end_of_page()
	html1=''
	html1=''
	html1 += '<html><body>'
	html1 += '<table width=50% cellpadding=1 cellspacing=0>'
	html1 += '<tr>'
	html1 += '<td width=50%>' + 'PERFUSIONISTA : ' +'</td>'
	html1 += '</tr>'
	html1 += '</table>'
	html1 += '</body></html>'
	dsAux.addRow([html1]);	
	globals.lineas_impre++
	globals.tempHTML=html1;
	end_of_page()
	html1=''
	
	//plugins.dialogs.showInfoDialog("dataset texto","lleno dataset texto grupo 8")
	globals.grupo_texto=8;
	globals.vItemTexto=8;
	largo_texto = 0
	if(vs_to_tbl_protoc_txt.getSize()>0){
		largo_texto = vs_to_tbl_protoc_txt.texto.length
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
		for ( i = 1 ; i <=cantidad_lineas ; i++ ){
			desde_sub = 130 * (i - 1)
			html1=''
			html1 += '<html><body>'
			html1 += '<table width=100% cellpadding=1 cellspacing=0>'
			html1 += '<tr>'
			html1 += '<td width=100%>' +  vs_to_tbl_protoc_txt.texto.substr(desde_sub,130) + '</td>'
			html1 += '</tr>'
			html1+= '</table>'
			html1 += '</body></html>'
			dsAux.addRow([html1]);	
			globals.lineas_impre++
			globals.tempHTML=html1;
			end_of_page()
			html1=''
		}
	}
	html1=''
	html1 += '<html><body>'
	html1 += '<table width=100% cellpadding=1 cellspacing=0>'
	html1 += '<tr>'
	html1 += '<td width=60%>' + ' ' +'</td>'		
	html1 += '<td width=40%>' + 'Realizado por : ' +fs['cirilegperfus']+'</td>'
	html1 += '</tr>'
	html1 += '</table>'
	html1 += '</body></html>'
	dsAux.addRow([html1]);	
	globals.lineas_impre++
	globals.tempHTML=html1;
	end_of_page()
	html1=''
	
	html1=''
	html1 += '<html><body>'
	html1 += '<hr width=100%>'
	html1 += '</body></html>'
	dsAux.addRow([html1]);	
	globals.lineas_impre++
	globals.tempHTML=html1;
	end_of_page()
	html1=''
	
	html1=''
	html1 += '<html><body>'
	html1 += '<table width=50% cellpadding=1 cellspacing=0>'
	html1 += '<tr>'
	html1 += '<td width=50%>' + 'INTENSIFICADOR DE IMAGENES : ' +'</td>'
	html1 += '</tr>'
	html1 += '</table>'
	html1 += '</body></html>'
	dsAux.addRow([html1]);	
	globals.lineas_impre++
	globals.tempHTML=html1;
	end_of_page()
	html1=''
	
	switch(fs['ciriintensi']){
		case 0:globals.linea_intensificador='NO';break;
		case 1:globals.linea_intensificador=' POR DISPAROS - Cantidad: '+fs['ciri_cantint'];break;
		case 1:globals.linea_intensificador=' USO CONTINUO - Cantidad de Horas: '+fs['ciri_horasint'];break;
	}
	html1=''
	html1 += '<html><body>'
	html1 += '<table width=50% cellpadding=1 cellspacing=0>'
	html1 += '<tr>'
	html1 += '<td width=50%>' + globals.linea_intensificador +'</td>'
	html1 += '</tr>'
	html1 += '</table>'
	html1 += '</body></html>'
	dsAux.addRow([html1]);	
	globals.lineas_impre++
	globals.tempHTML=html1;
	end_of_page()
	html1=''
	
	//plugins.dialogs.showInfoDialog("dataset texto","lleno dataset texto grupo 9")
	globals.grupo_texto=9;
	globals.vItemTexto=9;
	largo_texto = 0
	if(vs_to_tbl_protoc_txt.getSize()>0){
		largo_texto = vs_to_tbl_protoc_txt.texto.length
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
		for ( i = 1 ; i <=cantidad_lineas ; i++ ){
			desde_sub = 130 * (i - 1)
			html1=''
			html1 += '<html><body>'
			html1 += '<table width=100% cellpadding=1 cellspacing=0>'
			html1 += '<tr>'
			html1 += '<td width=100%>' +  vs_to_tbl_protoc_txt.texto.substr(desde_sub,130) + '</td>'
			html1 += '</tr>'
			html1 += '</table>'
			html1 += '</body></html>'
			dsAux.addRow([html1]);		
			globals.lineas_impre++
			globals.tempHTML=html1;
			end_of_page()
			html1=''
		}
	}
	html1=''
	html1 += '<html><body>'
	html1 += '<table width=100% cellpadding=1 cellspacing=0>'
	html1 += '<tr>'
	html1 += '<td width=60%>' + ' ' +'</td>'		
	html1 += '<td width=40%>' + 'Técnico : ' +globals.apeynom_tecnico+'</td>'
	html1 += '</tr>'
	html1 += '</table>'
	html1 += '</body></html>'
	dsAux.addRow([html1]);		
	globals.lineas_impre++
	globals.tempHTML=html1;
	end_of_page()
	html1=''
	
	//***************************************************************************
	
	var filas = vhisclin_to_tbc_obstetri.getSize()
	if(filas>0){
		var html=''
		html += '<hr width=100%>'
		globals.lineas_impre++
		globals.tempHTML=html;
		end_of_page()
		html=''
			
	   html += '<table width=100% cellpadding=1 cellspacing=0>'
	   html += '<tr>'
	   html += '<td width=100% align=center>' + ' DATOS DEL PARTO ' +'</td>'
	   html += '</tr>'
	   html += '</table>'
	   globals.lineas_impre++
		globals.tempHTML=html;
		end_of_page()
		html=''
	  
	   html += '<hr width=100%>'
	   globals.lineas_impre++
		globals.tempHTML=html;
		end_of_page()
		html=''
	   
		globals.parto_gesta=vhisclin_to_tbc_obstetri.obstetri_gesta
	   switch (vhisclin_to_tbc_obstetri.obstetri_acompanante)
       {
		 case 1:globals.parto_acompanante='Pareja';break;
		 case 2:globals.parto_acompanante='Familiar';break;
		 case 3:globals.parto_acompanante='Otro';break;
		 case 4:globals.parto_acompanante='Ninguno';break;
		 default:globals.parto_acompanante='Sin Informar';break;
	   }
	   
	   html += '<table width=100% cellpadding=1 cellspacing=0>'
	   html += '<tr>'
	   html += '<td width=100% align=left>' + ' Semanas de Gesta : '+ vhisclin_to_tbc_obstetri.obstetri_sem_gesta +'      Acompañante : '+globals.parto_acompanante +'</td>'
	   html += '</tr>'
	   html += '</table>'
	   globals.lineas_impre++
		globals.tempHTML=html;
		end_of_page()
		html=''
	   
	   switch (vhisclin_to_tbc_obstetri.obstetri_rup_membrana)
	   {
		  case 1:globals.parto_ruptura_prematura='No';break;
		  case 2:globals.parto_ruptura_prematura='Si';break;
		  default:globals.parto_ruptura_prematura='Sin Informar';break;
	   }
	   
	   html += '<table width=100% cellpadding=1 cellspacing=0>'
	   html += '<tr>'
	   html += '<td width=100% align=left>' + ' Ruptura Prematura de Membranas : '+globals.parto_ruptura_prematura +'</td>'
	   html += '</tr>'
	   html += '</table>'
	   globals.lineas_impre++
		globals.tempHTML=html;
		end_of_page()
		html=''
	   
	   if(vhisclin_to_tbc_obstetri.obstetri_rup_membrana==2){
		   globals.grupo_texto=16;
	       globals.lleno_dataset_obstetritxt()
		   graba_dataset_texto()
	   }
	   switch (vhisclin_to_tbc_obstetri.obstetri_liq_amni)
	   {
		  case 1:globals.parto_liq_amniotico='Claro';break;
		  case 2:globals.parto_liq_amniotico='Sanguinolente';break;
		  case 3:globals.parto_liq_amniotico='Menconial';break;
		  case 4:globals.parto_liq_amniotico='Otros';break;
		  default:globals.parto_liq_amniotico='Sin Informar';break;
	   }
	   
	   html += '<table width=100% cellpadding=1 cellspacing=0>'
	   html += '<tr>'
	   html += '<td width=100% align=left>' + ' Líquido Amniotico : '+globals.parto_liq_amniotico +'</td>'
	   html += '</tr>'
	   html += '</table>'
	   globals.lineas_impre++
		globals.tempHTML=html;
		end_of_page()
		html=''
	   
	   if(vhisclin_to_tbc_obstetri.obstetri_liq_amni==4){
		   globals.grupo_texto=17;
	       globals.lleno_dataset_obstetritxt()
		   graba_dataset_texto()
	   }
	   switch (vhisclin_to_tbc_obstetri.obstetri_iniciacion)
	   {
		  case 1:globals.parto_iniciacion='Espontáneo';break;
		  case 2:globals.parto_iniciacion='Inducido';break;
		  default:globals.parto_iniciacion='Sin Informar';break;
	   }
	   switch (vhisclin_to_tbc_obstetri.obstetri_presentacion)
	   {
		  case 1:globals.parto_presentacion='Cefálica';break;
		  case 2:globals.parto_presentacion='De Nalga';break;
		  case 3:globals.parto_presentacion='Transversal';break;
		  case 4:globals.parto_presentacion='Podálica';break;
		  case 5:globals.parto_presentacion='Otra';break;
		  default:globals.parto_presentacion='Sin Informar';break;
	   }
	   switch (vhisclin_to_tbc_obstetri.obstetri_terminacion)
	   {
		  case 1:globals.parto_terminacion='Espontáneo';break;
		  case 2:globals.parto_terminacion='Forceps';break;
		  case 3:globals.parto_terminacion='Cesárea';break;
		  default:globals.parto_terminacion='Sin Informar';break;
	   }
	  
	   html += '<table width=100% cellpadding=1 cellspacing=0>'
	   html += '<tr>'
	   html += '<td width=33% align=center>' + ' Iniciación : '+globals.parto_iniciacion +'</td>'
	   html += '<td width=33% align=center>' + ' Presentación : '+globals.parto_presentacion +'</td>'
	   html += '<td width=33% align=center>' + ' Terminación : '+globals.parto_terminacion +'</td>'
	   html += '</tr>'
	   html += '</table>'	
	   globals.lineas_impre++
		globals.tempHTML=html;
		end_of_page()
		html=''
			
	   switch (vhisclin_to_tbc_obstetri.obstetri_posic_parto)
	   {
		  case 1:globals.parto_posicion='Sentada';break;
		  case 2:globals.parto_posicion='Cuclillas';break;
		  case 3:globals.parto_posicion='Acostada';break;
		  default:globals.parto_posicion='Sin Informar';break;
	   }
	   switch (vhisclin_to_tbc_obstetri.obstetri_desgarro)
	   {
		  case 1:globals.parto_desgarro='No';break;
		  case 2:globals.parto_desgarro='Si';break;
		  default:globals.parto_desgarro='Sin Informar';break;
	   }
	   if(vhisclin_to_tbc_obstetri.obstetri_desgarro==2){  
		   globals.parto_grados = '  en Grados : '+vhisclin_to_tbc_obstetri.obstetri_desgarro_grados
	   }else{
		   globals.parto_grados=''
	   }
	   
	   html += '<table width=100% cellpadding=1 cellspacing=0>'
	   html += '<tr>'
	   html += '<td width=100% align=left>' + ' Posición Parto : '+ globals.parto_posicion +'    &nbsp&nbsp&nbsp&nbsp    Desgarro : '+globals.parto_desgarro +' &nbsp&nbsp  '+globals.parto_grados+'</td>'
	   html += '</tr>'
	   html += '</table>'	
	   globals.lineas_impre++
		globals.tempHTML=html;
		end_of_page()
		html=''
			
	   if(vhisclin_to_tbc_obstetri.obstetri_desgarro==2){
		   globals.grupo_texto=12;
	       globals.lleno_dataset_obstetritxt()
		   graba_dataset_texto()
	   }
	   switch (vhisclin_to_tbc_obstetri.obstetri_episiotomia)
	   {
		  case 1:globals.parto_episiotomia='No';break;
		  case 2:globals.parto_episiotomia='Si';break;
		  default:globals.parto_episiotomia='Sin Informar';break;
	   }
	   html += '<table width=100% cellpadding=1 cellspacing=0>'
	   html += '<tr>'
	   html += '<td width=100% align=left>' + ' Episiotomía : '+globals.parto_episiotomia +'</td>'
	   html += '</tr>'
	   html += '</table>'	
	   globals.lineas_impre++
		globals.tempHTML=html;
		end_of_page()
		html=''
			
	   if(vhisclin_to_tbc_obstetri.obstetri_episiotomia==2){
		   globals.grupo_texto=13;
	       globals.lleno_dataset_obstetritxt()
		   graba_dataset_texto()
	   }
	   switch (vhisclin_to_tbc_obstetri.obstetri_ligadura_cordon)
	   {
		  case 1:globals.parto_lig_cordon='Precoz';break;
		  case 2:globals.parto_lig_cordon='Tardía';break;
		  case 3:globals.parto_lig_cordon='Observ.';break;
		  default:globals.parto_lig_cordon='Sin Informar';break;
	   }
	   html += '<table width=100% cellpadding=1 cellspacing=0>'
	   html += '<tr>'
	   html += '<td width=100% align=left>' + ' Ligadura de Cordón : '+globals.parto_lig_cordon +'</td>'
	   html += '</tr>'
	   html += '</table>'	
	   globals.lineas_impre++
		globals.tempHTML=html;
		end_of_page()
		html=''
	   if(vhisclin_to_tbc_obstetri.obstetri_ligadura_cordon==3){
		   globals.grupo_texto=14;
	       globals.lleno_dataset_obstetritxt()
		   graba_dataset_texto()
	   }
	   switch (vhisclin_to_tbc_obstetri.obstetri_placenta_compl)
	   {
		  case 1:globals.parto_placenta='Si';break;
		  case 2:globals.parto_placenta='No';break;
		  default:globals.parto_placenta='Sin Informar';break;
	   }
	   
	   html += '<table width=100% cellpadding=1 cellspacing=0>'
	   html += '<tr>'
	   html += '<td width=100% align=left>' + ' Placenta Completa : '+globals.parto_placenta +'</td>'
	   html += '</tr>'
	   html += '</table>'	
	   globals.lineas_impre++
		globals.tempHTML=html;
		end_of_page()
		html=''
			
	   if(vhisclin_to_tbc_obstetri.obstetri_placenta_compl==2){
		   globals.grupo_texto=15;
	       globals.lleno_dataset_obstetritxt()
		   graba_dataset_texto()
	   }
	}
	salto_hoja()
	}
	
	//************************************************************************
	if(globals.vTipoListado==3||globals.vTipoListado==4){
	
	html1=''
	html1 += '<html><body>'	
	html1 += '<hr width=100%>'
	html1 += '</body></html>'
	dsAux.addRow([html1]);	
	globals.lineas_impre++
	globals.tempHTML=html1;
	end_of_page()
	
	html1=''
	html1 += '<html><body>'	
	html1 += '<table width=100% cellpadding=1 cellspacing=0>'
	html1 += '<tr>'
	html1 += '<td width=100% align=center>' + ' DETALLE PARA FACTURACION ' +'</td>'
	html1 += '</tr>'
	html1 += '</table>'
	html1 += '</body></html>'
	dsAux.addRow([html1]);	
	globals.lineas_impre++
	globals.tempHTML=html1;
	end_of_page()
		
	html1=''
	html1 += '<html><body>'
	html1 += '<hr width=100%>'
	html1 += '</body></html>'
	dsAux.addRow([html1]);		
	globals.lineas_impre++
	globals.tempHTML=html1;
	end_of_page()
		
	html1=''
	html1 += '<html><body>'
	html1 += '<table width=100% cellpadding=1 cellspacing=0>'
	html1 += '<tr>'
	html1 += '<td width=100%>' + 'Intervención Quirúrgica' +'</td>'
	html1 += '</tr>'
	html1 += '</table>'
	html1 += '</body></html>'
	dsAux.addRow([html1]);	
	globals.lineas_impre++
	globals.tempHTML=html1;
	end_of_page()
	html1=''
		
	fs.clear()
	fs2.clear()
	var fs3 = databaseManager.getFoundSet("asistencial","tbc_cirugint_dtl")
	
	fs3.loadRecords(vs_to_tbc_cirugint_dtl)
	//plugins.dialogs.showInfoDialog("Paso 18","paso 18")
	try{
		var cantidad_codigos = vs_to_tbc_cirugint_dtl.getSize();
	}catch(msg){
		application.output(msg)
	}
	//plugins.dialogs.showInfoDialog("registros",cantidad_codigos)
	
	for(var j=1;j<=cantidad_codigos;j++){
		vs_to_tbc_cirugint_dtl.setSelectedIndex(j)
		//plugins.dialogs.showInfoDialog("j",j)
		//plugins.dialogs.showInfoDialog("ciritiponome",fs3['ciritiponome'])
		if(vs_to_tbc_cirugint_dtl.ciricodnome>0){
		   globals.ancho_col0=5;
		   globals.ancho_col1=10;
		   globals.ancho_col2=82;
		   globals.ancho_col3=1;
		   globals.ancho_col4=1;
		   globals.ancho_col5=1;
		   globals.column0= vs_to_tbc_cirugint_dtl.ciritiponome
		   globals.column1= vs_to_tbc_cirugint_dtl.ciricodnome
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
		   globals.ancho_col0=05;
		   globals.ancho_col1=30;
		   globals.ancho_col2=30;
		   globals.ancho_col3=30;
		   globals.ancho_col4=3;
		   globals.ancho_col5=2;
		   for(var k=1;k<=7;k++){
			  globals.column0=' ';globals.column1='';globals.column2='';globals.column3='';globals.column4='';globals.column5 = '';
			  if(vs_to_tbc_cirugint_dtl['ciricodmed_'+utils.numberFormat(k,0)]!=0){
				switch (k){
					case 1:globals.column1='Especialista Dr.';break;
					case 2:globals.column1='Ayudante 1ro.';break;
					case 3:globals.column1='Ayudante 2ro.';break;
					case 4:globals.column1='Ayudante 3ro.';break;
					case 5:globals.column1='Anestesiólogo';break;
					case 6:globals.column1='Perfusionista';break;
					case 7:globals.column1='Instrumentadora';break;
				}
				globals.tip_profes=vs_to_tbc_cirugint_dtl['ciritipmed_'+utils.numberFormat(k,0)]
				globals.cod_profes=vs_to_tbc_cirugint_dtl['ciricodmed_'+utils.numberFormat(k,0)]
				globals.busco_profesional()
				globals.column2=globals.apeynom_profes
				if(vs_to_tbc_cirugint_dtl['ciritipmed_'+utils.numberFormat(k,0)]==0){
					globals.column3= ''
					globals.column4= vs_to_tbc_cirugint_dtl['ciriporcen_'+utils.numberFormat(k,0)]
					globals.column5='%'
					globals.column3= globals.column4+globals.column5
					globals.column4=''
					globals.column5=''  
					//plugins.dialogs.showInfoDialog("porce",globals.column3)
				}else{
					globals.column3= 'externo'
					globals.column4= ''
					globals.column5= ''
				}
				grabar_tmp()
			  }
	 	   }	
		   if(vs_to_tbc_cirugint_dtl['ciriporcen_8']!=0){
			  globals.column0=' ';globals.column1='';globals.column2='';globals.column3='';globals.column4='';globals.column5 = '';
			  globals.column1='Gastos';
			  globals.column4=vs_to_tbc_cirugint_dtl['ciriporcen_8']
			  globals.column5='%'
			  globals.column3=globals.column4+globals.column5	
			  globals.column4=''
			  globals.column5=''  
			  grabar_tmp()	
		   }
	    }
		//plugins.dialogs.showInfoDialog("pie",j)
	}
	html1=''
	html1 += '<html><body>'
	html1 += '<hr width=100% size=0>'
	html1 += '</body></html>'
	dsAux.addRow([html1]);	
	globals.lineas_impre++
	globals.tempHTML=html1;
	end_of_page()
	
	html1=''
	html1 += '<html><body>'
	html1 += '<table width=100% cellpadding=1 cellspacing=0>'
	html1 += '<tr>'
	html1 += '<td width=100%>' + 'Medicamentos / Descartables' +'</td>'
	html1 += '</tr>'
	html1 += '</table>'
	html1 += '</body></html>'
	dsAux.addRow([html1]);	
	globals.lineas_impre++
	globals.tempHTML=html1;
	end_of_page()
	html1=''
	try{	
	globals.vTipoArt=1
	//var cantidad_articulos = vs_to_tbc_cirugint2.tbc_cirugint_to_tbc_medic_cir.getSize();
	globals.ancho_col0=15;
	globals.ancho_col1=30;
	globals.ancho_col2=30;
	globals.ancho_col3=15;
	globals.ancho_col4=5;
	globals.ancho_col5=5;
	for(var z=1;z<=99&&vs_to_tbc_cirugint2_116.tbc_cirugint_116_to_tbc_medic_cir['medcarti_'+utils.numberFormat(z,0)]>0;z++){
		if(vs_to_tbc_cirugint2_116.tbc_cirugint_116_to_tbc_medic_cir['medcarti_'+utils.numberFormat(z,0)]>0){
			globals.column0=vs_to_tbc_cirugint2_116.tbc_cirugint_116_to_tbc_medic_cir['medcarti_'+utils.numberFormat(z,0)]
			globals.vArticulo=vs_to_tbc_cirugint2_116.tbc_cirugint_116_to_tbc_medic_cir['medcarti_'+utils.numberFormat(z,0)]
			globals.column1=varticulo_to_tbc_articulo_read.art_descrip
			globals.column2=varticulo_to_tbc_articulo_read.art_presenta
			globals.column3=vs_to_tbc_cirugint2_116.tbc_cirugint_116_to_tbc_medic_cir['medccant_'+utils.numberFormat(z,0)]
			grabar_tmp1()
		}
	}	
	}catch(msg){
		application.output(msg)
	}
	html1=''
	html1 += '<html><body>'
	html1 += '<p></p>'
	html1 += '</body></html>'
	dsAux.addRow([html1]);	
	globals.lineas_impre++
	globals.tempHTML=html1;
	end_of_page()
	
	html1=''
	html1 += '<html><body>'
	html1 += '<p></p>'
	html1 += '</body></html>'
	dsAux.addRow([html1]);	
	globals.lineas_impre++
	globals.tempHTML=html1;
	end_of_page()
	
	html1=''
	html1 += '<html><body>'	
	html1 += '<table width=100% cellpadding=1 cellspacing=0>'
	html1 += '<tr>'
	html1 += '<td width=55%>' + ' ' +'</td>'	
	html1 += '<td width=40% align=center>' + '__________________________________' +'</td>'
	html1 += '<td width=5%>' + ' ' +'</td>'
	html1 += '</tr>'
	html1 += '</table>'
	html1 += '</body></html>'
	dsAux.addRow([html1]);	
	
	html1=''
	html1 += '<html><body>'
	html1 += '<table width=100% cellpadding=1 cellspacing=0>'
	html1 += '<tr>'
	html1 += '<td width=55%>' + ' ' +'</td>'	
	html1 += '<td width=40% align=center>' + 'Dr. '+ globals.apeynom_cirujano +'</td>'
	html1 += '<td width=5%>' + ' ' +'</td>'
	html1 += '</tr>'
	html1 += '</table>'
	html1 += '</body></html>'
	dsAux.addRow([html1]);	
	
	html1=''
	html1 += '<html><body>'
	html1 += '<table width=100% cellpadding=1 cellspacing=0>'
	html1 += '<tr>'
	html1 += '<td width=55%>' + ' ' +'</td>'	
	html1 += '<td width=40% align=center>' + 'Matrícula Nro. '+ globals.matricula_cirujano +'</td>'
	html1 += '<td width=5%>' + ' ' +'</td>'
	html1 += '</tr>'
	html1 += '</table>'
	html1 += '</body></html>'
	dsAux.addRow([html1]);	
	globals.lineas_impre++
	globals.lineas_impre++
	globals.lineas_impre++
	globals.tempHTML=html1;
	end_of_page()
	html1=''
	}
	var formName = forms.frm_protocolo_impresion_print.controller.getName();
	var $frm = solutionModel.getForm(formName);
	var $tipos = [JSColumn.TEXT];
	$frm.dataSource = dsAux.createDataSource(formName, $tipos);
	forms[formName].controller.recreateUI();
	forms[formName].controller.print(false,false);
}

/**
 * @properties={typeid:24,uuid:"39EEF0BE-010C-4D83-B546-3B9720652055"}
 */
function graba_dataset_texto() {
	var html1 = '';
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
				html1=''
				html1 += '<html><body>'
				html1 += '<table width=100% cellpadding=1 cellspacing=0>'
				html1 += '<tr>'
				//html += '<td width=100%>' + globals.dataset_lineas_texto.getValue(i,1) + '</td>'
				html1 += '<td width=100%>' + vector[ii] + '</td>'
				html1 += '</tr>'
				html1 += '</table>'
				html1 += '</body></html>'
				dsAux.addRow([html1]);	
				
			}
		}
		globals.lineas_impre++
		globals.tempHTML = html1
		end_of_page()
		html1=''
	}
}

/**
 * @properties={typeid:24,uuid:"12A3D747-8AA5-40CD-8655-19ECEF666CA7"}
 */
function grabar_tmp() {
	var html1 = '';
	globals.tempHTML='';
	//html += '<html><body>'
	html1=''
	html1 += '<html><body>'
	html1 += '<table width=100% cellpadding=0 cellspacing=0>'
	html1 += '<tr>'
	html1 += '<td width=' + utils.numberFormat(globals.ancho_col0,0) + '% valign="middle" align="left">' + globals.column0 + '</td>'
	html1 += '<td width=' + utils.numberFormat(globals.ancho_col1,0) + '% valign="middle" align="left">' + globals.column1 + '</td>'
	html1 += '<td width=' + utils.numberFormat(globals.ancho_col2,0) + '% valign="middle" align="left">' + globals.column2 + '</td>'
	html1 += '<td width=' + utils.numberFormat(globals.ancho_col3,0) + '% valign="middle" align="left">' + globals.column3 + '</td>'
	html1 += '<td width=' + utils.numberFormat(globals.ancho_col4,0) + '% valign="middle" align="left">' + globals.column4 + '</td>'
	html1 += '<td width=' + utils.numberFormat(globals.ancho_col5,0) + '% valign="middle" align="left">' + globals.column5 + '</td>'
	html1 += '</tr>'
	html1 += '</table>'
	html1 += '</body></html>'
	dsAux.addRow([html1]);	
	//html += '</body></html>'
	globals.lineas_impre++
	globals.tempHTML = html1
	end_of_page()
}

/**
 * @properties={typeid:24,uuid:"34C4DD28-460D-4F45-8A54-30838A54A4F8"}
 */
function grabar_tmp1() {
	var html1 = '';
	globals.tempHTML='';
	html1=''
	html1 += '<html><body>'
	html1 += '<table width=100% cellpadding=0 cellspacing=0>'
	html1 += '<tr>'
	html1 += '<td width=10% valign="middle" align="right">' + globals.column0 + '</td>'
	html1 += '<td width=5% valign="middle" align="right">     </td>'
	html1 += '<td width=35% valign="middle" align="left">' + globals.column1 + '</td>'
	html1 += '<td width=30% valign="middle" align="left">' + globals.column2 + '</td>'
	html1 += '<td width=10% valign="middle" align="right">' + globals.column3 + '</td>'
	html1 += '<td width=10% valign="middle" align="right">     </td>'
	html1 += '</tr>'
	html1 += '</table>'
	html1 += '</body></html>'
	dsAux.addRow([html1]);	
	//html += '</body></html>'
	globals.lineas_impre++
	globals.tempHTML = html1
	end_of_page()
}

/**
 * @properties={typeid:24,uuid:"EF1C7FCF-41A5-438A-9E72-9A2AD5C877E6"}
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
 * @properties={typeid:24,uuid:"795591FB-F7B7-45E8-A5F1-83CB7F4E5CDB"}
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
