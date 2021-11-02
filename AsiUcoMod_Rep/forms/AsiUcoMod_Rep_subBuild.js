/**
 * @properties={typeid:35,uuid:"9ED73C41-03D9-45BE-B1CC-4349E75C335B",variableType:-4}
 */
var dsAux = null;

/**
 * @properties={typeid:35,uuid:"0E2DA413-B24B-44BF-9C01-DB3C3630949B",variableType:-4}
 */
var esHoja = false;

/**
 * 
 * @param {String} value
 *
 * @return {String}
 * @properties={typeid:24,uuid:"4EDEBF5F-E63F-46F7-A069-65F8313F0754"}
 */
function getHtmlTexto(value) {
	
	var htmlTexto = "";
	
	if(utils.stringTrim(value).length > 0){
		
		htmlTexto += '<html><body>'
		htmlTexto += '<table width="1024">'
		htmlTexto += '<tr>'
		htmlTexto += '<td><pre>&nbsp;&nbsp;&nbsp;'+ value + '</pre></td>'
		htmlTexto += '</tr>'
		htmlTexto += '</table>'
		htmlTexto += '</body></html>';
	}
	
	return htmlTexto;
}

/**
 * 
 * @param {String} value
 *
 * @properties={typeid:24,uuid:"A0FCEC37-AD19-49F1-B10A-8924359CA9F8"}
 */
function getHtmlLinea(value) {
	
	var htmlTexto = "";
	
	htmlTexto += '<html><body>'
	htmlTexto += '<table width="1024">'
	htmlTexto += '<tr>'
	htmlTexto += '<td><pre>&nbsp;&nbsp;&nbsp;'+ value + '</pre></td>'
	htmlTexto += '</tr>'
	htmlTexto += '</table>'
	htmlTexto += '</body></html>';
	
	return htmlTexto;
}

/**
 * 
 * @param {Number} value
 *
 * @return {String}
 * @properties={typeid:24,uuid:"5DBDA9FA-D3E6-4670-A8F4-EFCD2C51618B"}
 */
function convertNumberToHour_HHMM(value) {
	
	var hora = "";
	
	if(value < 1){
		hora = "00:00";
	}
	else{
		if(value < 10){
			hora = "00:0" + value.toString().substr(0,1);
		}
		else{
			if(value < 100){
				hora = "00:" + value.toString().substr(0,2);
			}
			else{
				if(value < 1000){
					hora = "0" + value.toString().substr(0,1) + ":" + value.toString().substr(1,2);
				}
				else{
					if(value <= 2359){
						hora = value.toString().substr(0,2) + ":" + value.toString().substr(2,2);
					}
				}
			}
		}
	}

	return hora;
}

/**
 * 
 * @param {String} texto
 *
 * @return {String}
 * @properties={typeid:24,uuid:"B0C4D3FD-A250-409F-B847-12FCBEC1D201"}
 */
function getHTML(texto){
	
	var html = "";
	html += '<html><body>'
	html += '<table width="1024">'
	html += '<tr>'
	html += '<td>' + texto + '</td>'
	html += '</tr>'
	html += '</table>'
	html += '</body></html>';
	
	return html;
}

/**
 * 
 * @AllowToRunInFind
 * 
 * @param {Number} histClin
 * @param {Number} hiuFecha
 * @param {Number} hiuHora
 * @param {Number} tipoSalida
 * @param {Boolean} showWarning
 *
 * @return {String}
 * @properties={typeid:24,uuid:"7DBD42F1-368D-4B11-B595-5542C212C6CF"}
 */
function subBuildReport(histClin,hiuFecha,hiuHora,tipoSalida,showWarning){
	
	esHoja = false;
	var absoluteFileName = '';
	
	globals.AsiUcoMod_Rep_hiuHisCli = histClin;
	globals.AsiUcoMod_Rep_hiuFecha = hiuFecha;
	globals.AsiUcoMod_Rep_hiuHora = hiuHora;
	
	if(asiucomod_rep_rel_buscar_hciuco.getSize() > 0){
		
		var fileNameReport = '';
		var texto = '';
		var medicoNombre = '';
		//var titulo = 'EPICRISIS';
		//var textoConfidencial = 'INFORME CONFIDENCIAL, Secreto Medico dentro de los alcances del articulo 154 del Codigo Penal.';
		//var direccion = 'Conde 851 - C.A.B.A. ( TE. 4556-4800 )';
	
		var formName = forms.AsiUcoMod_Rep_print.controller.getName();
		forms.AsiUcoMod_Rep_print.limpiarForm();
		
		//CABECERA
		
		globals.AsiUcoMod_Rep_adm_histClin = histClin;
		globals.AsiUcoMod_Rep_aler_histClin = histClin; 
		
		var medico = "Confeccionada por ";
		var matricula = "";
		
		if(asiucomod_rep_rel_buscar_hciuco.hiutipomed == 0){
			
			globals.AsiUcoMod_Rep_perLegajo = asiucomod_rep_rel_buscar_hciuco.hiulegajomed;
			if(asiucomod_rep_rel_buscar_personal.per_sexo == 'M'){
				medico += "el Dr. ";
				medicoNombre = "Dr. ";
			}
			else{
				medico += "la Dra. ";
				medicoNombre = "Dra. ";
			}
			medico += utils.stringTrim(asiucomod_rep_rel_buscar_personal.per_apelnom);
			matricula = asiucomod_rep_rel_buscar_personal.per_codmatri;
			medicoNombre += utils.stringTrim(asiucomod_rep_rel_buscar_personal.per_apelnom);
		}
		
		if(asiucomod_rep_rel_buscar_hciuco.hiutipomed == 1){
			globals.AsiUcoMod_Rep_medCodigo = asiucomod_rep_rel_buscar_hciuco.hiulegajomed;
			medico += "el Dr. " + utils.stringTrim(asiucomod_rep_rel_buscar_medicos.med_apenom);
			matricula = asiucomod_rep_rel_buscar_medicos.med_matricula;
			medicoNombre = "Dr. " + utils.stringTrim(asiucomod_rep_rel_buscar_medicos.med_apenom);
		}
		
		var date = globals.IntegerToDate(hiuFecha);
		medico += " el " + globals.getDayName(date,true) + " " + date.getDate() + " " + globals.getMonthName(date,true) + " / " + date.getFullYear() + " a las " + convertNumberToHour_HHMM(hiuHora) + " hrs.";
		
		var sexo = "";
		if(asiucomod_rep_rel_buscar_admision.adm_sexo == 1){
			sexo = "Femenino"; 
		}
		else{
			if(asiucomod_rep_rel_buscar_admision.adm_sexo == 2)
				sexo = "Masculino";	
		}
		
		// cargar Header
		
		forms.AsiUcoMod_Rep_print.f_fechaImpresion = application.getServerTimeStamp();
		forms.AsiUcoMod_Rep_print.f_medico = medico;
		forms.AsiUcoMod_Rep_print.f_matricula = matricula;
		forms.AsiUcoMod_Rep_print.f_sexo = sexo; 
		forms.AsiUcoMod_Rep_print.f_edad = globals.CalculoEdad(asiucomod_rep_rel_buscar_admision.adm_fecnac) + ' ' +  globals.vTipoEdad;;
		forms.AsiUcoMod_Rep_print.f_apelnom =  formatear_HistClinInter(asiucomod_rep_rel_buscar_admision.adm_histclin) + "  " + utils.stringTrim(asiucomod_rep_rel_buscar_admision.adm_apelnom); 
		forms.AsiUcoMod_Rep_print.f_histclinunica = asiucomod_rep_rel_buscar_admision.adm_histclinuni;
		forms.AsiUcoMod_Rep_print.f_habitacion = asiucomod_rep_rel_buscar_admision.adm_habita;
		forms.AsiUcoMod_Rep_print.f_cama = asiucomod_rep_rel_buscar_admision.adm_cama;
		globals.AsiUcoMod_Rep_obrCodigo = asiucomod_rep_rel_buscar_admision.adm_obrsoc;
		forms.AsiUcoMod_Rep_print.f_cobertura = utils.stringTrim(asiucomod_rep_rel_buscar_obrasocial.obr_razonsoc) + ' (' +asiucomod_rep_rel_buscar_obrasocial.obr_codigo + ')'; 
		forms.AsiUcoMod_Rep_print.f_histClinIngreso = asiucomod_rep_rel_buscar_admision.adm_histclinuni;
		// BUSCO-GUARDIA
		globals.AsiUcoMod_Rep_histCabNroUnico = asiucomod_rep_rel_buscar_admision.adm_histclinuni;
		if(asiucomod_rep_rel_buscar_hist_cab_new.getSize() > 0){

			if(asiucomod_rep_rel_buscar_hist_cab_new.histcabintobsamd > 0){
				
				globals.AsiUcoMod_Rep_guar_fechaIngreso = asiucomod_rep_rel_buscar_hist_cab_new.histcabintobsamd;
				globals.AsiUcoMod_Rep_guar_histClinica = asiucomod_rep_rel_buscar_hist_cab_new.histcabnrounico;
				globals.AsiUcoMod_Rep_guar_horaIngreso = asiucomod_rep_rel_buscar_hist_cab_new.histcabintobshor;
				
				if(asiucomod_rep_rel_buscar_guardia.getSize() > 0){
					
					var fechaIngreso = globals.IntegerToDate(asiucomod_rep_rel_buscar_guardia.guar_fechaingreso);
					forms.AsiUcoMod_Rep_print.f_ingreso = globals.getDayName(fechaIngreso,true) + " " + fechaIngreso.getDate() + " " + globals.getMonthName(fechaIngreso,true) + " / " + fechaIngreso.getFullYear() + " " + convertNumberToHour_HHMM(asiucomod_rep_rel_buscar_guardia.guar_horaingreso) + " hrs.";
					
					var fechaEgreso = globals.IntegerToDate(asiucomod_rep_rel_buscar_guardia.guar_fechaalta);
					if(fechaEgreso!=null){
						forms.AsiUcoMod_Rep_print.f_egreso = globals.getDayName(fechaEgreso,true) + " " + fechaEgreso.getDate() + " " + globals.getMonthName(fechaEgreso,true) + " / " + fechaEgreso.getFullYear() + " " + convertNumberToHour_HHMM(asiucomod_rep_rel_buscar_guardia.guar_horaalta) + " hrs.";
					}else{
						forms.AsiUcoMod_Rep_print.f_egreso = "sin fecha de egreso"
					}
				}
			}
			
		}
		
		//CUERPO
		dsAux = databaseManager.createEmptyDataSet();
		dsAux.addColumn('html');
		
		dsAux.addRow([getHTML('SIGNOS VITALES')]);
		
		texto = 'Frecuencia Cardiaca : ' + asiucomod_rep_rel_buscar_hciuco.hiufrecuenciacar + ' x minuto';
		texto += '    Frecuencia Respiratoria : ' + asiucomod_rep_rel_buscar_hciuco.hiufrecuenciares + ' x minuto';
		dsAux.addRow([getHtmlLinea(texto)]);
		
		texto = 'Tension Arterial Maxima : ' + asiucomod_rep_rel_buscar_hciuco.hiutensionmax + ' Minima : ' + asiucomod_rep_rel_buscar_hciuco.hiutensionmin;
		dsAux.addRow([getHtmlLinea(texto)]);
		
		texto = 'Temperatura : ' + application.getValueListDisplayValue('AsiUcoMod_Rep_vl_temperatura',asiucomod_rep_rel_buscar_hciuco.hiutipotemperatura) + ' ' + asiucomod_rep_rel_buscar_hciuco.hiutemperatura +'º';
		dsAux.addRow([getHtmlLinea(texto)]);
		
		//DIAGNOSTICO
		dsAux.addRow([getHTML('DIAGNOSTICOS')]);
		if(asiucomod_rep_rel_buscar_hciuco.hiupat1 > 0){
			
			globals.AsiUcoMod_Rep_patCodi = asiucomod_rep_rel_buscar_hciuco.hiupat1;
			dsAux.addRow([getHtmlLinea(asiucomod_rep_rel_buscar_patologia.pat_descrip)]);
		}
		
		if(asiucomod_rep_rel_buscar_hciuco.hiupat2 > 0){
			
			globals.AsiUcoMod_Rep_patCodi = asiucomod_rep_rel_buscar_hciuco.hiupat2;
			dsAux.addRow([getHtmlLinea(asiucomod_rep_rel_buscar_patologia.pat_descrip)]);
		}

		if(asiucomod_rep_rel_buscar_hciuco.hiupat3 > 0){
			
			globals.AsiUcoMod_Rep_patCodi = asiucomod_rep_rel_buscar_hciuco.hiupat3;
			dsAux.addRow([getHtmlLinea(asiucomod_rep_rel_buscar_patologia.pat_descrip)]);
		}
			
		//ALERTAS
		
		//dsAux.addRow([getHTML('ALERTAS')]);
		
		//INFORMES
		if(asiucomod_rep_rel_buscar_hciuco.hiumotivodeingreso == 1)
			setTextoInforme("Motivo de Ingreso",1);
		
		if(asiucomod_rep_rel_buscar_hciuco.hiudatossubjetivos == 1)
			setTextoInforme("Datos Subj.que Motivan Consul.",2);
		
		if(asiucomod_rep_rel_buscar_hciuco.hiuenfermedadactual == 1)
			setTextoInforme("Enfermedad Actual y sus Antec.",3);
		
		if(asiucomod_rep_rel_buscar_hciuco.hiuantecedentespersonal == 1)
			setTextoInforme("Antecedentes Personales",4);
		
		if(asiucomod_rep_rel_buscar_hciuco.hiuantecedentesheredo == 1)
			setTextoInforme("Antec.HeredoFamil.Importantes",5);
		
		if(asiucomod_rep_rel_buscar_hciuco.hiuexamenclinico == 1)
			setTextoInforme("Examen Clinico",6);
		
		if(asiucomod_rep_rel_buscar_hciuco.hiuexamencomplementario == 1)
			setTextoInforme("Examenes Complementarios",7);
		
		if(asiucomod_rep_rel_buscar_hciuco.hiucomentarioingreso == 1)
			setTextoInforme("Comentario de Ingreso",8);
		
		if(asiucomod_rep_rel_buscar_hciuco.hiuplanterapeutico == 1)
			setTextoInforme("Plan Terapeutico",10);
		
		if(asiucomod_rep_rel_buscar_hciuco.hiudiagnosdiferenciales == 1)
			setTextoInforme("Diagnosticos Diferenciales",11);
		
		if(asiucomod_rep_rel_buscar_hciuco.hiumedicacionhabitual == 1)
			setTextoInforme("Medicacion Habitual",12);
		
		dsAux.addRow(['']);
		dsAux.addRow([getHTML_column3_linea('','<hr/>','')]);
		dsAux.addRow([getHTML_column3('','Firma Medico','')]);
		dsAux.addRow([getHTML_column3('',medicoNombre,'')]);
		dsAux.addRow([getHTML_column3('','M.N.&nbsp;&nbsp;&nbsp;&nbsp;' + matricula,'')]);
		
		// IMPRESION
		var $frm = solutionModel.getForm(formName);
		var $tipos = [JSColumn.TEXT];
		$frm.dataSource = dsAux.createDataSource(formName, $tipos);
		forms[formName].controller.recreateUI();
		
		//Salida por impresora o DPF
		if(tipoSalida == 0){
			//Impresora
			forms[formName].controller.print(false,false);
		}
		else{
			
			if(tipoSalida == 1){
				
				//PDF Nombre del reporte
				fileNameReport = histClin.toString();
				fileNameReport += '-' + hiuFecha;
				fileNameReport += '-' + hiuHora;
				fileNameReport += '-HCIUCO';
	
				absoluteFileName = globals.GenerarReporte_servoyPDF(formName,fileNameReport);
			}
		}
	}
		
	return absoluteFileName;
}

/**
 * 
 * @param {String} texto_1
 * @param {String} texto_2
 * @param {String} texto_3
 *
 * @return {String}
 * @properties={typeid:24,uuid:"506E8D97-2C62-4EE0-8A8D-099ABB7C022F"}
 */
function getHTML_column3(texto_1,texto_2,texto_3){
	
	var html = "";
	html += '<html><body>'
	html += '<table width="1024">'
	html += '<tr>'
	html += '<td width="25%">' + texto_1 + '</td>'
	html += '<td width="25%" align="center">' + texto_2  +'</td>'
	html += '<td width="50%">' + texto_3 + '</td>'
	html += '</tr>'
	html += '</table>'
	html += '</body></html>';
	
	return html;
}

/**
 * 
 * @param {String} texto_1
 * @param {String} texto_2
 * @param {String} texto_3
 *
 * @return {String}
 * @properties={typeid:24,uuid:"4A881221-C087-4106-BAFF-D3F1A875417A"}
 */
function getHTML_column3_linea(texto_1,texto_2,texto_3){
	
	var html = "";
	html += '<html><body>'
	html += '<table width="1024">'
	html += '<tr>'
	html += '<td width="30%">' + texto_1 + '</td>'
	html += '<td width="15%" align="center">' + texto_2  +'</td>'
	html += '<td width="55%">' + texto_3 + '</td>'
	html += '</tr>'
	html += '</table>'
	html += '</body></html>';
	
	return html;
}

/**
 * TODO generated, please specify type and doc for the params
 * @param {String} texto_1
 * @param {String} texto_2
 *
 * @return {String}
 * @properties={typeid:24,uuid:"7A87ECF2-EA34-4FD9-A2BC-60E3F62651A3"}
 */
function getHTML_column2(texto_1,texto_2){
	
	var html = "";
	html += '<html><body>'
	html += '<table width="1024">'
	html += '<tr>'
	html += '<td width="8%">' + texto_1 + '</td>'
	html += '<td width="92%">' + texto_2  +'</td>'
	html += '</tr>'
	html += '</table>'
	html += '</body></html>';
	
	return html;
}

/**
 * 
 * @param tipo
 *
 * @properties={typeid:24,uuid:"98896C62-D080-4085-97FF-4AAB6F240A36"}
 */
function getTipoDoc (tipo) {
	var value = "";
	
	switch(tipo){
			
		case 1:{
			value = 'C.I.';
		}
		break;
		case 2:{
			value = 'L.E.';
		}
		break;
		case 3:{
			value = 'L.C.';
		}
		break;
		case 4:{
			value = 'D.N.I.';
		}
		break;
		case 5:{
			value = 'Pasap.';
		}
		break;
		default:
		break;
	}
	
	return value;
}

/**
 * 
 * @param {String} tituloItem
 * @param {Number} item
 *
 * @properties={typeid:24,uuid:"6770B026-3FA1-4471-848B-4C07CE37AFAC"}
 */
function setTextoInforme (tituloItem,item){
	
	dsAux.addRow([getHTML(tituloItem.toUpperCase())]);
	var sqlInfo = ''
	if(esHoja){
		 sqlInfo = "select linea from asiucotrs_hojaucotxt"
		+ " where histclinica = " + asiucomod_rep_rel_buscar_hojauco.huchiscli
		+ " and fecha = " + asiucomod_rep_rel_buscar_hojauco.hucfecha
		+ " and hora = " + asiucomod_rep_rel_buscar_hojauco.huchora
		+ " and grupo = " + 1
		+ " and item = " + item;
	}else{
		 sqlInfo = "select linea from asiucotrs_hciucotxt"
		+ " where histclinica = " + asiucomod_rep_rel_buscar_hciuco.hiuhiscli
		+ " and fecha = " + asiucomod_rep_rel_buscar_hciuco.hiufecha
		+ " and hora = " + asiucomod_rep_rel_buscar_hciuco.hiuhora
		+ " and grupo = " + 2
		+ " and item = " + item;
	}

	var ds_info = databaseManager.getDataSetByQuery('desal',sqlInfo,null,-1);
	
	
	
	// Si el informe no esta en postgres lo busca en relativity
	if(ds_info.getMaxRowIndex() > 0){
		
		var $campo2 = utils.stringTrim(ds_info.getValue(1,1));
		var lineaTexto = '';
		
		// Segundo : se quitan los 'enters' y se crea nueva linea	x c/u
		var $campo = new Array();
		$campo = $campo2.split('\n', 7800);
		var $cuantas_partes = 0
		$cuantas_partes = $campo.length 
		var ii = 0
		//var lineascab = 0;
		for (var i = 1; i < $cuantas_partes + 1; i++)
		{
		var longitudTexto = 0
		var lineas = 0
		ii = i - 1
		longitudTexto = $campo[ii].length
		var posicionInicial = 0
		if (longitudTexto > 78)
		{	//lineas = Math.round(longitudTexto / 78)  //original
			lineas = Math.floor(longitudTexto / 78)
			var resto = longitudTexto % 78
			if (resto > 0)
				{++lineas}
		}
		else {lineas = 1}
		
		var $aux_tex = ''
		var $aux_texto_79 = ''
		var $aux_pos = 77
		var $txt4 = ''

		// n lineas/reg de texto
		for (var j = 1; j < lineas + 1; j++) {
			
			var aux_largo_final = posicionInicial + 78
			if (aux_largo_final < longitudTexto)
			{
				var vlarguito = $campo[ii].substr(posicionInicial, 78)
				if (vlarguito != '') 
				{
					//++lineascab
					lineaTexto = $campo[ii].substr(posicionInicial, 78)
					
					$txt4  = $campo[ii].substr(posicionInicial, 78)  		
					$aux_tex = $txt4.substr (77,1) 
					if ($aux_tex != ' ')
					{
						$aux_texto_79 = $campo[ii].substr(posicionInicial + 78, 1)  // caracter 79
						$aux_tex = $txt4.substr (77,1)        // caracter 78
						if ($aux_texto_79 == ' ')  //  asi estaría ok, porque la palabra termina justo en la 78
							{posicionInicial = posicionInicial + 79}   // 78 para que no ponga un blanco al iniciar
						else  // queda cortada la palabra, va hacia atras hasta encontrar un espacio
							{$aux_pos =  posicionInicial + 77   
							for (var k = 77; k > 1; k--)
							{
								$aux_tex = $txt4.substr(k,1)
								if ($aux_tex != ' ')
									{$aux_pos = $aux_pos - 1}
								else     // rellena a derecha con espacios los caracteres de la palabra que estaba cortada hasta completar 78
								{	var $nn = $aux_pos - posicionInicial
									$aux_tex = $txt4.substr(0,$nn)
									for (var l = $nn ; l < 78 ; l++) 
									{$aux_tex = $aux_tex + ' '}
									var longitudTexto1 = longitudTexto + 78 - $nn
									if (longitudTexto1 > 78)
									{
									var lineas1 = Math.floor(longitudTexto1 / 78)
									resto = longitudTexto1 % 78
									if (resto > 0)
										{++lineas1} 
									}
									else{lineas1 = 1} 
									lineas = lineas1
									break
								}
							}
							posicionInicial = $aux_pos + 1
							lineaTexto =  $aux_tex
							}
					}
					else {
						
						posicionInicial = posicionInicial + 78
					}
				} 
			}
			else  
			{  	
				
				//++lineascab
				
				if (lineas == 1)
					{if (longitudTexto == 0)
						{lineaTexto = '                                                                              '}
					else
						{lineaTexto = $campo[ii].substr(0, longitudTexto)}}
				else {
					 
					var dife = longitudTexto - posicionInicial
					lineaTexto = $campo[ii].substr(posicionInicial, dife)
				}
			}
			
			// control logintud para no tener problema al grabar en arch. cobol
			if (lineaTexto.length > 78){
				lineaTexto = lineaTexto.substr(0, 77)
			}
			
			if (lineaTexto.length < 78){
				
				$nn = lineaTexto.length
				for (var m = $nn + 1 ; m < 79 ; m++) {
					
					lineaTexto = lineaTexto + ' '
				}
			}
			
			try{
				
				dsAux.addRow([getHtmlLinea(lineaTexto)]);
				
			}catch (msg){
				//	application.output(msg.rhinoException.getMessage())
			}
			
			}
		}
		
	}
	else{
		var sqlObserva=''
		if(esHoja){
			 sqlObserva = "select HucxLinea from tbc_hucotxt"
			+ " where HucxHiscli = " + asiucomod_rep_rel_buscar_hojauco.huchiscli
			+ " and HucxFecha = " + asiucomod_rep_rel_buscar_hojauco.hucfecha
			+ " and HucxHora = " + asiucomod_rep_rel_buscar_hojauco.huchora
			+ " and HucxGrupo = " + 1
			+ " and HucxItem = " + item
			+ " order by HucxSec";
			
		}else{
			// Obteniendo datos de observacion de relativity
			 sqlObserva = "select HiucxLinea from tbc_hciucotxt"
				+ " where HiucxHiscli = " + asiucomod_rep_rel_buscar_hciuco.hiuhiscli
				+ " and HiucxFecha = " + asiucomod_rep_rel_buscar_hciuco.hiufecha
				+ " and HiucxHora = " + asiucomod_rep_rel_buscar_hciuco.hiuhora
				+ " and HiucxGrupo = " + 2
				+ " and HiucxItem = " + item
				+ " order by HiucxSec";
		}
		var ds_hciintTXT = databaseManager.getDataSetByQuery('asistencial',sqlObserva,null,-1);
		
		for(var n=1 ; n <= ds_hciintTXT.getMaxRowIndex() ; n++){
			
			dsAux.addRow([getHtmlLinea(ds_hciintTXT.getValue(n,1))]);
		}
	}
}

/**
 * 
 * @param {Number} value
 *
 * @properties={typeid:24,uuid:"139F5E8D-9146-4392-9E3A-6D29E1C92353"}
 */
function formatear_HistClinInter(value)
{
	var hiscli1 = value.toString();
	switch (hiscli1.length){
		case 2:	hiscli1 = hiscli1.substr(0,1)+'/'+hiscli1.substr(1,1);break;
		case 3:	hiscli1 = hiscli1.substr(0,2)+'/'+hiscli1.substr(2,1);break;
		case 4:	hiscli1 = hiscli1.substr(0,3)+'/'+hiscli1.substr(3,1);break;
		case 5:	hiscli1 = hiscli1.substr(0,4)+'/'+hiscli1.substr(4,1);break;
		case 6:	hiscli1 = hiscli1.substr(0,5)+'/'+hiscli1.substr(5,1);break;
		case 7:	hiscli1 = hiscli1.substr(0,6)+'/'+hiscli1.substr(6,1);break;
		case 8:	hiscli1 = hiscli1.substr(0,7)+'/'+hiscli1.substr(7,1);break;
	}	
	return hiscli1;
}


/**
 * TODO generated, please specify type and doc for the params
 * @param histClin
 * @param hiuFecha
 * @param hiuHora
 * @param tipoSalida
 * @param showWarning
 *
 * @properties={typeid:24,uuid:"F6D9DF25-EC19-49E1-B9AB-13EFDA3E87B5"}
 */
function subBuildReportHoja(histClin,hiuFecha,hiuHora,tipoSalida,showWarning){
	
	var absoluteFileName = '';
	esHoja = true;
	globals.AsiUcoMod_Rep_hiuHisCli = histClin;
	globals.AsiUcoMod_Rep_hiuFecha = hiuFecha;
	globals.AsiUcoMod_Rep_hiuHora = hiuHora;
	
	if(asiucomod_rep_rel_buscar_hojauco.getSize() > 0){
		
		var fileNameReport = '';
		var texto = '';
		var medicoNombre = '';
		//var titulo = 'EPICRISIS';
		//var textoConfidencial = 'INFORME CONFIDENCIAL, Secreto Medico dentro de los alcances del articulo 154 del Codigo Penal.';
		//var direccion = 'Conde 851 - C.A.B.A. ( TE. 4556-4800 )';
	
		var formName = forms.AsiUcoMod_Rep_print.controller.getName();
		forms.AsiUcoMod_Rep_print.limpiarForm();
		
		//CABECERA
		
		globals.AsiUcoMod_Rep_adm_histClin = histClin;
		globals.AsiUcoMod_Rep_aler_histClin = histClin; 
		
		var medico = "Confeccionada por ";
		var matricula = "";
		
		if(asiucomod_rep_rel_buscar_hojauco.huctipomed == 0){
			
			globals.AsiUcoMod_Rep_perLegajo = asiucomod_rep_rel_buscar_hojauco.huclegajomed;
			if(asiucomod_rep_rel_buscar_personal.per_sexo == 'M'){
				medico += "el Dr. ";
				medicoNombre = "Dr. ";
			}
			else{
				medico += "la Dra. ";
				medicoNombre = "Dra. ";
			}
			medico += utils.stringTrim(asiucomod_rep_rel_buscar_personal.per_apelnom);
			matricula = asiucomod_rep_rel_buscar_personal.per_codmatri;
			medicoNombre += utils.stringTrim(asiucomod_rep_rel_buscar_personal.per_apelnom);
		}
		
		if(asiucomod_rep_rel_buscar_hojauco.huctipomed == 1){
			globals.AsiUcoMod_Rep_medCodigo = asiucomod_rep_rel_buscar_hojauco.huclegajomed;
			medico += "el Dr. " + utils.stringTrim(asiucomod_rep_rel_buscar_medicos.med_apenom);
			matricula = asiucomod_rep_rel_buscar_medicos.med_matricula;
			medicoNombre = "Dr. " + utils.stringTrim(asiucomod_rep_rel_buscar_medicos.med_apenom);
		}
		
		var date = globals.IntegerToDate(hiuFecha);
		medico += " el " + globals.getDayName(date,true) + " " + date.getDate() + " " + globals.getMonthName(date,true) + " / " + date.getFullYear() + " a las " + convertNumberToHour_HHMM(hiuHora) + " hrs.";
		
		var sexo = "";
		if(asiucomod_rep_rel_buscar_admision.adm_sexo == 1){
			sexo = "Femenino"; 
		}
		else{
			if(asiucomod_rep_rel_buscar_admision.adm_sexo == 2)
				sexo = "Masculino";	
		}
		
		// cargar Header
		
		forms.AsiUcoMod_Rep_print.f_fechaImpresion = application.getServerTimeStamp();
		forms.AsiUcoMod_Rep_print.f_medico = medico;
		forms.AsiUcoMod_Rep_print.f_matricula = matricula;
		forms.AsiUcoMod_Rep_print.f_sexo = sexo; 
		forms.AsiUcoMod_Rep_print.f_edad = globals.CalculoEdad(asiucomod_rep_rel_buscar_admision.adm_fecnac) + ' ' +  globals.vTipoEdad;;
		forms.AsiUcoMod_Rep_print.f_apelnom =  formatear_HistClinInter(asiucomod_rep_rel_buscar_admision.adm_histclin) + "  " + utils.stringTrim(asiucomod_rep_rel_buscar_admision.adm_apelnom); 
		forms.AsiUcoMod_Rep_print.f_histclinunica = asiucomod_rep_rel_buscar_admision.adm_histclinuni;
		forms.AsiUcoMod_Rep_print.f_habitacion = asiucomod_rep_rel_buscar_admision.adm_habita;
		forms.AsiUcoMod_Rep_print.f_cama = asiucomod_rep_rel_buscar_admision.adm_cama;
		globals.AsiUcoMod_Rep_obrCodigo = asiucomod_rep_rel_buscar_admision.adm_obrsoc;
		forms.AsiUcoMod_Rep_print.f_cobertura = utils.stringTrim(asiucomod_rep_rel_buscar_obrasocial.obr_razonsoc) + ' (' +asiucomod_rep_rel_buscar_obrasocial.obr_codigo + ')'; 
		forms.AsiUcoMod_Rep_print.f_histClinIngreso = asiucomod_rep_rel_buscar_admision.adm_histclinuni;
		// BUSCO-GUARDIA
		globals.AsiUcoMod_Rep_histCabNroUnico = asiucomod_rep_rel_buscar_admision.adm_histclinuni;
		if(asiucomod_rep_rel_buscar_hist_cab_new.getSize() > 0){

			if(asiucomod_rep_rel_buscar_hist_cab_new.histcabintobsamd > 0){
				
				globals.AsiUcoMod_Rep_guar_fechaIngreso = asiucomod_rep_rel_buscar_hist_cab_new.histcabintobsamd;
				globals.AsiUcoMod_Rep_guar_histClinica = asiucomod_rep_rel_buscar_hist_cab_new.histcabnrounico;
				globals.AsiUcoMod_Rep_guar_horaIngreso = asiucomod_rep_rel_buscar_hist_cab_new.histcabintobshor;
				
				if(asiucomod_rep_rel_buscar_guardia.getSize() > 0){
					
					var fechaIngreso = globals.IntegerToDate(asiucomod_rep_rel_buscar_guardia.guar_fechaingreso);
					forms.AsiUcoMod_Rep_print.f_ingreso = globals.getDayName(fechaIngreso,true) + " " + fechaIngreso.getDate() + " " + globals.getMonthName(fechaIngreso,true) + " / " + fechaIngreso.getFullYear() + " " + convertNumberToHour_HHMM(asiucomod_rep_rel_buscar_guardia.guar_horaingreso) + " hrs.";
					
					var fechaEgreso = globals.IntegerToDate(asiucomod_rep_rel_buscar_guardia.guar_fechaalta);
					if(fechaEgreso!=null){
						forms.AsiUcoMod_Rep_print.f_egreso = globals.getDayName(fechaEgreso,true) + " " + fechaEgreso.getDate() + " " + globals.getMonthName(fechaEgreso,true) + " / " + fechaEgreso.getFullYear() + " " + convertNumberToHour_HHMM(asiucomod_rep_rel_buscar_guardia.guar_horaalta) + " hrs.";
					}else{
						forms.AsiUcoMod_Rep_print.f_egreso = "sin fecha de egreso"
					}
				}
			}
			
		}
		
		//CUERPO
		dsAux = databaseManager.createEmptyDataSet();
		dsAux.addColumn('html');
		
		dsAux.addRow([getHTML('SIGNOS VITALES')]);
		
		texto = 'Pulso Frencuencia : ' + asiucomod_rep_rel_buscar_hojauco.hucpulsofrecuencia + ' x minuto';
		dsAux.addRow([getHtmlLinea(texto)]);
		
		texto = 'Frecuencia Cardiaca : ' + asiucomod_rep_rel_buscar_hojauco.hucfrecuenciacar + ' x minuto';
		texto += '    Frecuencia Respiratoria : ' + asiucomod_rep_rel_buscar_hojauco.hucfrecuenciares + ' x minuto';
		dsAux.addRow([getHtmlLinea(texto)]);
		
		texto = 'Tension Arterial Maxima : ' + asiucomod_rep_rel_buscar_hojauco.huctensionmax + ' Minima : ' + asiucomod_rep_rel_buscar_hojauco.huctensionmin;
		dsAux.addRow([getHtmlLinea(texto)]);
		
		texto = 'Temperatura : ' + application.getValueListDisplayValue('AsiUcoMod_Rep_vl_temperatura',asiucomod_rep_rel_buscar_hojauco.huctipotemperatura) + ' ' + asiucomod_rep_rel_buscar_hojauco.huctemperatura +'º';
		dsAux.addRow([getHtmlLinea(texto)]);
		
		texto = 'Sonda : ' + application.getValueListDisplayValue('AsiUcoMod_Rep_vl_sonda',asiucomod_rep_rel_buscar_hojauco.hucsonda) + ' ' + asiucomod_rep_rel_buscar_hojauco.hucsondaobs;
		dsAux.addRow([getHtmlLinea(texto)]);
		
		//DIAGNOSTICO
		dsAux.addRow([getHTML('DIAGNOSTICOS')]);
		if(asiucomod_rep_rel_buscar_hojauco.hucpat1 > 0){
			
			globals.AsiUcoMod_Rep_patCodi = asiucomod_rep_rel_buscar_hojauco.hucpat1;
			dsAux.addRow([getHtmlLinea(asiucomod_rep_rel_buscar_patologia.pat_descrip)]);
		}
		
		if(asiucomod_rep_rel_buscar_hojauco.hucpat2 > 0){
			
			globals.AsiUcoMod_Rep_patCodi = asiucomod_rep_rel_buscar_hojauco.hucpat2;
			dsAux.addRow([getHtmlLinea(asiucomod_rep_rel_buscar_patologia.pat_descrip)]);
		}

		if(asiucomod_rep_rel_buscar_hojauco.hucpat3 > 0){
			
			globals.AsiUcoMod_Rep_patCodi = asiucomod_rep_rel_buscar_hojauco.hucpat3;
			dsAux.addRow([getHtmlLinea(asiucomod_rep_rel_buscar_patologia.pat_descrip)]);
		}
			
		//ALERTAS
		
		//dsAux.addRow([getHTML('ALERTAS')]);
		
		

		//INFORMES
		if(asiucomod_rep_rel_buscar_hojauco.hucmotivodeingreso == 1)
			setTextoInforme("Motivo de Ingreso",1);
		
		if(asiucomod_rep_rel_buscar_hojauco.hucdatossubjetivos == 1)
			setTextoInforme("Datos Subjetivos",2);
		
		if(asiucomod_rep_rel_buscar_hojauco.hucexamenfisico == 1)
			setTextoInforme("Exámen fisico.",3);
		
		if(asiucomod_rep_rel_buscar_hojauco.hucelectrocardiograma == 1)
			setTextoInforme("Electrocardiogramas",4);
		
		if(asiucomod_rep_rel_buscar_hojauco.hucrayosx == 1)
			setTextoInforme("Rayos X de Torax",5);
		
		if(asiucomod_rep_rel_buscar_hojauco.huclaboratorio == 1)
			setTextoInforme("Laboratorios",6);
		
		
		
		if(asiucomod_rep_rel_buscar_hojauco.hucotros == 1)
			setTextoInforme("Otros",7);
		
		if(asiucomod_rep_rel_buscar_hojauco.hucbalancehidrico == 1)
			setTextoInforme("Balance Hidrico",8);
		
		if(asiucomod_rep_rel_buscar_hojauco.hucplandiagnostico == 1)
			setTextoInforme("Plan Diagnostico",9);
	
		
		if(asiucomod_rep_rel_buscar_hojauco.hucplanterapeutico == 1)
			setTextoInforme("Plan Terapeutico",10);
		
		if(asiucomod_rep_rel_buscar_hojauco.hucobservaciones == 1)
			setTextoInforme("Observaciones",11);
		
		if(asiucomod_rep_rel_buscar_hojauco.hucjustificauco == 1)
			setTextoInforme("Justificación Permanencia en UCO",12);
		
		dsAux.addRow(['']);
		dsAux.addRow([getHTML_column3_linea('','<hr/>','')]);
		dsAux.addRow([getHTML_column3('','Firma Medico','')]);
		dsAux.addRow([getHTML_column3('',medicoNombre,'')]);
		dsAux.addRow([getHTML_column3('','M.N.&nbsp;&nbsp;&nbsp;&nbsp;' + matricula,'')]);
		
		// IMPRESION
		var $frm = solutionModel.getForm(formName);
		var $tipos = [JSColumn.TEXT];
		$frm.dataSource = dsAux.createDataSource(formName, $tipos);
		forms[formName].controller.recreateUI();
		
		//Salida por impresora o DPF
		if(tipoSalida == 0){
			//Impresora
			forms[formName].controller.print(false,false);
		}
		else{
			
			if(tipoSalida == 1){
				
				//PDF Nombre del reporte
				fileNameReport = histClin.toString();
				fileNameReport += '-' + hiuFecha;
				fileNameReport += '-' + hiuHora;
				fileNameReport += '-HOJA_UCO';
	
				absoluteFileName = globals.GenerarReporte_servoyPDF(formName,fileNameReport);
			}
		}
	}
		
	return absoluteFileName;
}

