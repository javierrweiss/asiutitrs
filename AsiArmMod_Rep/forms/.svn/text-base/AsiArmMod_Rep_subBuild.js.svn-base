/**
 * @properties={typeid:35,uuid:"F970213F-11BC-42A2-9F25-1609C95B8B14",variableType:-4}
 */
var dsAux = null;

/**
 * 
 * @param {String} value
 *
 * @return {String}
 * @properties={typeid:24,uuid:"29F11746-F62C-4893-A28A-3AE18113F848"}
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
 * @properties={typeid:24,uuid:"34B3F12D-8CF1-44FE-A43E-C5C969E81A99"}
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
 * @properties={typeid:24,uuid:"1585F7A7-A559-43EF-A8C9-F97EEEC2C29C"}
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
 * @properties={typeid:24,uuid:"E7ABBDD2-D9D0-46D0-A700-0824D6A52CC4"}
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
 * @param {Number} armFecha
 * @param {Number} armHora
 * @param {Number} armTipoLega
 * @param {Number} armNumLega
 * @param {Number} tipoSalida
 * @param {Boolean} showWarning
 *
 * @return {String}
 * @properties={typeid:24,uuid:"2A734630-A904-4A97-A76D-B703674197D5"}
 */
function subBuildReport(histClin,armFecha,armHora,armTipoLega,armNumLega,tipoSalida,showWarning){
		
	var absoluteFileName = '';
	var armInvasiva = 0;
	var armModo = 0;
	var sqlArm = "select * from tbc_arm_dia_noinva" + " where ArmHcli = " + histClin + " and ArmFech = " + armFecha + " and ArmHora = " + armHora;
	var dsArm = databaseManager.getDataSetByQuery('asistencial', sqlArm, null, -1);
	
	if(dsArm.getMaxRowIndex() > 0){
		
		armInvasiva = dsArm.getValue(1,13);//armInvasiva
		if(armInvasiva == 2){
			
			// arm modo 3
			sqlArm = "select * from tbc_arm_dia_invaps" + " where ArmHcli = " + histClin + " and ArmFech = " + armFecha + " and ArmHora = " + armHora;
			dsArm = databaseManager.getDataSetByQuery('asistencial', sqlArm, null, -1);
			if(dsArm.getMaxRowIndex() > 0)
				armModo = dsArm.getValue(1,18);//armModo
			
			if(armModo == 1){
				
				sqlArm = "select * from tbc_arm_dia_invavc" + " where ArmHcli = " + histClin + " and ArmFech = " + armFecha + " and ArmHora = " + armHora;
				dsArm = databaseManager.getDataSetByQuery('asistencial', sqlArm, null, -1);
			}
			
			if(armModo == 2){
				
				sqlArm = "select * from tbc_arm_dia_invapc" + " where ArmHcli = " + histClin + " and ArmFech = " + armFecha + " and ArmHora = " + armHora;
				dsArm = databaseManager.getDataSetByQuery('asistencial', sqlArm, null, -1);
			}
		}
		
		var fileNameReport = '';
		var texto = '';
		var texto_2 = '';
		var medicoNombre = '';
		var matricula = "";
		var fechaInforme = '';
		//var titulo = 'ASISTENCIA RESPIRATORIA MECANICA';
		
		//var textoConfidencial = 'INFORME CONFIDENCIAL, Secreto Medico dentro de los alcances del articulo 154 del Codigo Penal.';
		
		//var direccion = 'Conde 851 - C.A.B.A. ( TE. 4556-4800 )';
	
		var formName = forms.AsiArmMod_Rep_print.controller.getName();
		forms.AsiArmMod_Rep_print.limpiarForm();
		
		//CABECERA
		
		globals.AsiArmMod_Rep_admHistClin = histClin;
		 
		if(dsArm.getValue(1,8) == 0){//armtiplega
			
			globals.AsiArmMod_Rep_perLegajo = dsArm.getValue(1,9);//armnumlega
			matricula = asiarmmod_rep_rel_buscar_personal.per_codmatri;
			medicoNombre += utils.stringTrim(asiarmmod_rep_rel_buscar_personal.per_apelnom);
		}
		
		if(dsArm.getValue(1,8) == 1){//armtiplega
			
			globals.AsiArmMod_Rep_medCodigo = dsArm.getValue(1,9);
			matricula = asiarmmod_rep_rel_buscar_medicos.med_matricula;
			medicoNombre = utils.stringTrim(asiarmmod_rep_rel_buscar_medicos.med_apenom);
		}
		
		var fechaAux = armFecha.toString();
		fechaInforme = 'INFORME DEL DIA ' + fechaAux.substr(6,2)+'/'+fechaAux.substr(4,2)+'/'+fechaAux.substr(0,4) + " HORA " + convertNumberToHour_HHMM(armHora);
		
		// cargar Header
		
		forms.AsiArmMod_Rep_print.f_fechaImpresion = application.getServerTimeStamp();
		
		forms.AsiArmMod_Rep_print.f_apelnom =  formatear_HistClinInter(asiarmmod_rep_rel_buscar_admision.adm_histclin) + "  " + utils.stringTrim(asiarmmod_rep_rel_buscar_admision.adm_apelnom); 

		globals.AsiArmMod_Rep_obrCodigo = asiarmmod_rep_rel_buscar_admision.adm_obrsoc;
		forms.AsiArmMod_Rep_print.f_cobertura = utils.stringTrim(asiarmmod_rep_rel_buscar_obras.obr_razonsoc) + ' (' +asiarmmod_rep_rel_buscar_obras.obr_codigo + ')';
		forms.AsiArmMod_Rep_print.f_fechaInforme = fechaInforme;
		
		//CUERPO
		dsAux = databaseManager.createEmptyDataSet();
		dsAux.addColumn('html');
		
		//INFORMES
		
		//setTextoInforme("Diagnostico y motivo de ingreso :",1);
		setTextoInforme("Comentarios :",2,histClin,armFecha,armHora);
		setTextoInforme("Causa de la salida de A.R.M. :",3,histClin,armFecha,armHora);
		
		dsAux.addRow(['']);
		if(dsArm.getValue(1,10) > 0 && dsArm.getValue(1,10) < 8){//armconcie
			
			dsAux.addRow([getHTML('Estado de conciencia :')]);
			if(dsArm.getValue(1,10) == 7)
				texto = utils.stringTrim(dsArm.getValue(1,11));//armconciex
			else
				texto = getConciencia(dsArm.getValue(1,10));
			
			dsAux.addRow([getHtmlLinea(texto)]);
		}
		
		if(dsArm.getValue(1,12) > 0 && dsArm.getValue(1,12) < 8){//armramsay
			
			dsAux.addRow([getHTML('Score de RAMSAY :')]);
			texto = getRamsay(dsArm.getValue(1,12));
			
			dsAux.addRow([getHtmlLinea(texto)]);
		}
		
		dsAux.addRow(['']);
		if(armInvasiva == 1){
			
			texto = 'NO INVASIVA';
			texto_2 = '';
			if(dsArm.getValue(1,16) == 1)//armcontinua
				texto_2 = 'CONTINUA';
			if(dsArm.getValue(1,16) == 2)
				texto_2 = 'INTERMITENTE';
			
			dsAux.addRow([getHTML_column3_item('A.R.M. Tipo :',texto,'')]);
			dsAux.addRow([getHTML_column3_item('Modo :',texto_2,'')]);
		}
		
		if(armInvasiva == 2){
			
			texto = 'INVASIVA';
			texto_2 = '';
			if(armModo == 1)
				texto_2 = 'A/C VC';
			if(armModo == 2)
				texto_2 = 'A/C PC';
			if(armModo == 3)
				texto_2 = 'CPAP/PS';
			
			dsAux.addRow([getHTML_column3_item('A.R.M. Tipo :',texto,'')]);
			dsAux.addRow([getHTML_column3_item('Modo :',texto_2,'')]);
		}
		
		dsAux.addRow(['']);
		if(armInvasiva == 1 ){
			
			// IMPRI-0
			dsAux.addRow([getHTML_column3_item('IPAP',dsArm.getValue(1,17), ' cm H2O')]);//armipap
			dsAux.addRow([getHTML_column3_item('EPAP',dsArm.getValue(1,18), ' cm H2O')]);//armepap
			
			if(dsArm.getValue(1,19) > 0)//armflujoo2
				dsAux.addRow([getHTML_column3_item('Flujo O2',utils.numberFormat(dsArm.getValue(1,19),1), ' lt/min')]);//armflujoo2
			else
				dsAux.addRow([getHTML_column3_item('FIO2',utils.numberFormat(dsArm.getValue(1,20),1), ' %')]);//armfio2
				
			dsAux.addRow([getHTML_column3_item('VT Aprox',dsArm.getValue(1,21), ' ml')]);//armvtaprox
			dsAux.addRow([getHTML_column3_item('Frecuencia Respiratoria',dsArm.getValue(1,22), ' resp/min')]);//armfr
			dsAux.addRow([getHTML_column3_item('Rampa',utils.numberFormat(dsArm.getValue(1,23),1), ' seg')]);//armrampa
			dsAux.addRow([getHTML_column3_item('Saturacion de O2',utils.numberFormat(dsArm.getValue(1,24),1), ' %')]);//armsato2
		}
		else{
			
			texto_2 = '';
			if(dsArm.getValue(1,16) == 1)//armiot
				texto_2 = 'SI';	
			if(dsArm.getValue(1,16) == 2)//armiot
				texto_2 = 'NO';
			
			dsAux.addRow([getHTML_column3_item('IOT',texto_2, '')]);
			dsAux.addRow([getHTML_column3_item('Presion Manguito',dsArm.getValue(1,17), ' cm H2O')]);//armpresmang
			
			if(armModo == 1 ){
				
				// IMPRI-1
				dsAux.addRow([getHTML_column3_item('VT',dsArm.getValue(1,19), ' ml')]);//arm1vt
				dsAux.addRow([getHTML_column3_item('Frecuencia Respiratoria',dsArm.getValue(1,20), ' resp/min')]);//arm1fr
				dsAux.addRow([getHTML_column3_item('PEEP',dsArm.getValue(1,21), ' cm H2O')]);//arm1peep
				dsAux.addRow([getHTML_column3_item('FIO2',utils.numberFormat(dsArm.getValue(1,22),1), ' %')]);//arm1fio2
				dsAux.addRow([getHTML_column3_item('Saturacion de O2',utils.numberFormat(dsArm.getValue(1,23),1), ' %')]);//arm1sato2
				dsAux.addRow([getHTML_column3_item('PAFI',dsArm.getValue(1,24), '')]);//arm1pafi
				dsAux.addRow([getHTML_column3_item('CEST',dsArm.getValue(1,25), '')]);//arm1cest
				dsAux.addRow([getHTML_column3_item('PPico',dsArm.getValue(1,26), ' cm H2O')]);//arm1ppico
				dsAux.addRow([getHTML_column3_item('PPlateau',dsArm.getValue(1,27), ' cm H2O')]);//arm1pplateau
				dsAux.addRow([getHTML_column3_item('Sensibildad',dsArm.getValue(1,28), ' cm H2O')]);//arm1sensib
				dsAux.addRow([getHTML_column3_item('Pausa Inspiratoria',utils.numberFormat(dsArm.getValue(1,29),1), ' seg')]);//arm1pausainsp
				dsAux.addRow([getHTML_column3_item('Relacion I:E','1 : ' + utils.numberFormat(dsArm.getValue(1,30),1), '')]);//arm1relie
				
			}
			
			if(armModo == 2 ){
				
				// IMPRI-2
				dsAux.addRow([getHTML_column3_item('PINS',dsArm.getValue(1,19), ' cm H2O')]);//arm2pins
				dsAux.addRow([getHTML_column3_item('TINS',utils.numberFormat(dsArm.getValue(1,20),1), ' cm H2O')]);//arm2tins
				dsAux.addRow([getHTML_column3_item('Frecuencia Respiratoria',dsArm.getValue(1,21), ' resp/min')]);//arm2fr
				dsAux.addRow([getHTML_column3_item('VT Aprox.',dsArm.getValue(1,22), ' ml')]);//arm2vtaprox
				dsAux.addRow([getHTML_column3_item('FIO2',utils.numberFormat(dsArm.getValue(1,23),1), ' %')]);//arm2fio2
				dsAux.addRow([getHTML_column3_item('Saturacion de O2',utils.numberFormat(dsArm.getValue(1,24),1), ' %')]);//arm2sato2
				dsAux.addRow([getHTML_column3_item('PAFI',dsArm.getValue(1,25), '')]);//arm2pafio2
				dsAux.addRow([getHTML_column3_item('CEST',dsArm.getValue(1,26), '')]);//arm2cest
				dsAux.addRow([getHTML_column3_item('Relacion I:E','1 : ' + utils.numberFormat(dsArm.getValue(1,27),1), '')]);//arm2relie
				
			}
			
			if(armModo == 3 ){
				
				// IMPRI-3
				dsAux.addRow([getHTML_column3_item('CPAP',dsArm.getValue(1,19), ' cm H2O')]);//arm3cpap
				dsAux.addRow([getHTML_column3_item('PS',dsArm.getValue(1,20), ' cm H2O')]);//arm3ps
				dsAux.addRow([getHTML_column3_item('FIO2',utils.numberFormat(dsArm.getValue(1,21),1), ' %')]);//arm3fio2
				dsAux.addRow([getHTML_column3_item('Fr.Resp.Aprox.',dsArm.getValue(1,22), ' resp/min')]);//arm3fraprox
				dsAux.addRow([getHTML_column3_item('VT Aprox.',dsArm.getValue(1,23), ' ml')]);//arm3vtaprox
				dsAux.addRow([getHTML_column3_item('PAFI O2',dsArm.getValue(1,24), '')]);//arm3pafio2
			}
		}
		
		dsAux.addRow(['']);
		dsAux.addRow(['']);
		dsAux.addRow([getHTML_column3_linea('','<hr/>','')]);
		//dsAux.addRow([getHTML_column3('','Firma Medico','')]);
		dsAux.addRow([getHTML_column3('','Dr/a. ' + medicoNombre,'')]);
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
				fileNameReport += '-' + armFecha;
				fileNameReport += '-' + armHora;
				fileNameReport += '-ARM';
	
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
 * @properties={typeid:24,uuid:"A10647D8-11A7-44C9-99C7-4710DEF8E3EE"}
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
 * @properties={typeid:24,uuid:"69AFE1AB-151B-4649-9E0E-71FE5C2BB667"}
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
 * @param texto_1
 * @param texto_2
 * @param texto_3
 *
 * @properties={typeid:24,uuid:"593E35F1-7636-468D-912D-BBB7D04B4D18"}
 */
function getHTML_column3_item(texto_1,texto_2,texto_3){
	
	var html = "";
	html += '<html><body>'
	html += '<table width="1024">'
	html += '<tr>'
	html += '<td width="15%">' + texto_1 + '</td>'
	html += '<td width="10%" align="right">' + texto_2  +'</td>'
	html += '<td width="75%" align="left">' + texto_3 + '</td>'
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
 * @properties={typeid:24,uuid:"312E1605-12FC-409B-912C-B06ED862D566"}
 */
function getHTML_column2(texto_1,texto_2){
	
	var html = "";
	html += '<html><body>'
	html += '<table width="1024">'
	html += '<tr>'
	html += '<td width="25%">' + texto_1 + '</td>'
	html += '<td width="75%">' + texto_2  +'</td>'
	html += '</tr>'
	html += '</table>'
	html += '</body></html>';
	
	return html;
}

/**
 * 
 * @param {Number} tipoC
 *
 * @properties={typeid:24,uuid:"A9C520D5-AA43-4F53-96B3-79D0B85F48B9"}
 */
function getConciencia (tipoC) {
	var value = "";
	
	switch(tipoC){
			
		case 1:{
			value = 'LUCIDO';
		}
		break;
		case 2:{
			value = 'DESORIENTADO';
		}
		break;
		case 3:{
			value = 'EXCITADO';
		}
		break;
		case 4:{
			value = 'CONFUSO';
		}
		break;
		case 5:{
			value = 'ESTUPOROSO';
		}
		break;
		case 6:{
			value = 'EN COMA';
		}
		break;
		default:
		break;
	}
	
	return value;
}

/**
 * 
 * @param {Number} tipoR
 *
 * @properties={typeid:24,uuid:"A1E4F6BA-C7D7-4271-BFC6-D003E39AB424"}
 */
function getRamsay (tipoR) {
	var value = "";
	
	switch(tipoR){
			
		case 1:{
			value = 'AGITADO, ANSIOSO, CON EXITACION SICOMOTRIZ';
		}
		break;
		case 2:{
			value = 'TRANQUILO, COLABORADOR';
		}
		break;
		case 3:{
			value = 'DESCANSA, RESPONDE A ESTIMULOS VERBALES';
		}
		break;
		case 4:{
			value = 'DORMIDO, RESPONDE A ESTIMULOS TACTILES';
		}
		break;
		case 5:{
			value = 'DORMIDO, RESPONDE A ESTIMULOS NOCIORECEPTIVOS INTENSOS';
		}
		break;
		case 6:{
			value = 'DORMIDO, SIN RESPUESTA A ESTIMULOS';
		}
		break;
		case 7:{
			value = 'PARALIZADO';
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
 * @param {Number} armGrupo
 * @param {Number} histClin
 * @param {Number} armFecha
 * @param {Number} armHora
 *
 * @properties={typeid:24,uuid:"5181BF0D-5328-4F87-821B-7ADF2F9937A6"}
 */
function setTextoInforme (tituloItem,armGrupo,histClin,armFecha,armHora){
	
	var sqlInfo = "select linea from asiarmtrs_armtxt"
	+ " where histclinica = " + histClin
	+ " and fecha = " + armFecha
	+ " and hora = " + armHora
	+ " and grupo = " + armGrupo;

	var ds_info = databaseManager.getDataSetByQuery('desal',sqlInfo,null,-1);
	
	// Si el informe no esta en postgres lo busca en relativity
	if(ds_info.getMaxRowIndex() > 0){
		
		dsAux.addRow(['']);
		dsAux.addRow([getHTML(tituloItem)]);
		
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
		
		// Obteniendo datos de observacion de relativity
		var sqlObserva = "select ArmTxtTexto from tbc_arm_txt"
			+ " where ArmTxtHcli = " + histClin
			+ " and ArmTxtFech = " + armFecha
			+ " and ArmTxtHora = " + armHora
			+ " and ArmTxtTipo = " + armGrupo
			+ " order by ArmTxtSeq";
			var ds_armTXT = databaseManager.getDataSetByQuery('asistencial',sqlObserva,null,-1);
			
		if(ds_armTXT.getMaxRowIndex() > 0){
			
			dsAux.addRow(['']);
			dsAux.addRow([getHTML(tituloItem)]);
		}
		
		for(var n=1 ; n <= ds_armTXT.getMaxRowIndex() ; n++){
			
			dsAux.addRow([getHtmlLinea(ds_armTXT.getValue(n,1))]);
		}
	}
}

/**
 * 
 * @param {Number} value
 *
 * @properties={typeid:24,uuid:"685B5BC4-13F4-4A0C-8725-DD18D4D43ECF"}
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
