/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"C31BFC5A-70EC-445B-B3E5-85437BE969E3"}
 */
var html = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"8E0D163F-D73B-4DC5-9D2C-49641DE65461"}
 */
var f_fechaHasta = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"06183B0B-099E-4E72-8DFA-3C8C9A4DD800"}
 */
var f_fechaDesde = '';

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"3132CB4E-7EF2-452E-B861-ABD5B0B0D3CB",variableType:93}
 */
var fecha_impresion = new Date();

/**
 * @properties={typeid:24,uuid:"F32EE767-AE24-4140-A7C4-43DEA5E641F0"}
 * @AllowToRunInFind
 */
function sub_buildReport() {
	
	// Inicializando html
	html = '';
	html = '<html><body>'
	var i;
	var j;
	globals.gbl_tempHTML = '';
		
	var fechaDesde = globals.FormatearFecha(forms.frm_protocolos_quirurgicos.f_fechaDesde,"AAAAMMDD");
	var fechaHasta = globals.FormatearFecha(forms.frm_protocolos_quirurgicos.f_fechaHasta,"AAAAMMDD");
	
	f_fechaDesde = fechaDesde.substr(0,2) + '/' + fechaDesde.substr(2,2) + '/' + fechaDesde.substr(4,4); 
	f_fechaHasta = fechaHasta.substr(0,2) + '/' + fechaHasta.substr(2,2) + '/' + fechaHasta.substr(4,4);
	
	var $sql = 'SELECT cirihistcl, ciriprotocolo, cirifechacarga, cirifechainicio, cirihorainicio, cirifechafinal, cirihorafinal, ADMISION.Adm_ApelNom as nombre';
	$sql += ' ,obras.Obr_RazonSoc as cobertura, ADMISION.Adm_PlanObr as plan';
	$sql += ' ,ciriresponde,cirifechabanio,cirihorabanio,cirifecharasura,cirihorarasura';
	$sql += ' ,ciriieconsenti,plog.per_apelnom,mep.medperapeynom';
 	$sql += ' FROM tbc_cirugint';
 	$sql += ' left join tbc_admision_scroll ADMISION on ADMISION.Adm_HistClin=tbc_cirugint.CiriHistCl';
 	$sql += ' left join maestros.tbc_obras obras on obras.Obr_Codigo= ADMISION.Adm_ObrSoc';
 	$sql += ' left join validalegajo.tbc_personal_login  plog on plog.per_legajo = cirilegconsenti';
 	$sql += ' left join maestros.tbc_medicos_personal mep on mep.MedPerCod = cirilegconsenti';
    $sql += ' WHERE CiriFechaCarga >= ' + fechaDesde;
    $sql += ' and CiriFechaCarga <= ' + fechaHasta;
    $sql += ' and CiriCodNome=0 and CiriTipoNome=0'
    //$sql += ' order by ciriprotocolo'

    var $dsProto = databaseManager.getDataSetByQuery('asistencial',$sql,null,-1);	
	var max = $dsProto.getMaxRowIndex();
	
	if(max > 0)
	{
		var $sqlInter = 'SELECT ciriprotocolo,nom.Nome_Tipo, nom.Nome_Codigo, nom.Nome_Descr'
		+ ' ,cir.CiriCodMed_1,prof.medperapeynom especialista,cir.CiriPorcen_1,prof.medpertipoie'
		+ ' ,cir.CiriCodMed_2,ayu_2.MedPerApeynom ayu2,cir.CiriPorcen_2,ayu_2.medpertipoie'
		+ ' ,cir.CiriCodMed_3,ayu_3.MedPerApeynom ayu3,cir.CiriPorcen_3,ayu_3.medpertipoie'
		+ ' ,cir.CiriCodMed_4,ayu_4.MedPerApeynom ayu4,cir.CiriPorcen_4,ayu_4.medpertipoie'
		+ ' ,cir.CiriCodMed_5,ayu_5.MedPerApeynom ayu5,cir.CiriPorcen_5,ayu_5.medpertipoie'
		+ ' ,cir.CiriCodMed_7,ayu_7.per_apelnom ayu7,cir.CiriPorcen_7'
		+ ' FROM tbc_cirugint_dtl cir'
		+ ' left join maestros.tbc_nomencla nom on nom.Nome_Codigo = cir.CiriCodNome and nom.Nome_Tipo = cir.CiriTipoNome'
		+ ' left join maestros.tbc_medicos_personal prof on prof.medpercod = cir.CiriCodMed_1'
		+ ' left join maestros.tbc_medicos_personal ayu_2 on ayu_2.MedPerCod = cir.CiriCodMed_2'
		+ ' left join maestros.tbc_medicos_personal ayu_3 on ayu_3.MedPerCod = cir.CiriCodMed_3'
		+ ' left join maestros.tbc_medicos_personal ayu_4 on ayu_4.MedPerCod = cir.CiriCodMed_4'
		+ ' left join maestros.tbc_medicos_personal ayu_5 on ayu_5.MedPerCod = cir.CiriCodMed_5'
		+ ' left join validalegajo.tbc_personal_login ayu_7 on ayu_7.per_legajo = cir.CiriCodMed_7'
		+ ' WHERE CiriCodNome <> 0 and CiriTipoNome <> 0'
		+ ' AND CiriFechaCarga >= '+  fechaDesde
		+ ' AND CiriFechaCarga <= ' + fechaHasta
		
		var $dsInter = databaseManager.getDataSetByQuery('asistencial',$sqlInter,null,-1);
		var maxInter = $dsInter.getMaxRowIndex();
		
		//build a table for list
		html += '<table width=100% cellpadding=1 cellspacing=1>'
		// Recorriendo protocolos
		for ( i = 1 ; i <=max ; i++ )
		{
			html += '<tr>'				
			html += '<td valign="middle" align="left" width=20%>' + '<b>Protocolo: ' + $dsProto.getValue(i,2) + ' ' + getNumberToDate($dsProto.getValue(i,3)) + '</td>'
			html += '<td valign="middle" align="left" width=38%>' + 'Paciente: ' + convertNumberToLegajo($dsProto.getValue(i,1)) + ' '+ $dsProto.getValue(i,8) + '</td>'			
			html += '<td valign="middle" align="left" width=30%>' +'</td>'			
			html += '<td valign="middle" align="left" width=12%>' + '</td>'
			html += '</tr>'
			html += '<tr>'
			html += '<td></td>'	
			html += '<td valign="middle" align="left" colspan="2">' + 'Cobertura ' + $dsProto.getValue(i,9) + '</td>'			
			html += '<td valign="middle" align="left">' + 'Plan: ' + $dsProto.getValue(i,10) + '</td>'
			html += '</tr>'
			html += '<tr>'
			html += '<td></td>'	
			html += '<td>' + 'Inicio cirugia: '+  getFechaHora($dsProto.getValue(i,4),$dsProto.getValue(i,5)) + '</td>'
			html += '<td>' + 'Finalizo cirugia: '+ getFechaHora($dsProto.getValue(i,6),$dsProto.getValue(i,7)) + '</td>'
			html += '</tr>'
				
			html += '<tr>'
			html += '<td></td>'
			html += '<td valign="middle">' + '&nbsp;&nbsp;&nbsp;&nbsp;Estado de conciencia: ' + '</td>'				
			html += '<td valign="middle">' + application.getValueListDisplayValue('vl_estadoConciencia', $dsProto.getValue(i,11)) + '</td>'
			html += '</tr>'
			html += '<tr>'
			html += '<td></td>'
			html += '<td valign="middle">' + '&nbsp;&nbsp;&nbsp;&nbsp;Fue bañado: ' + '</td>'
			html += '<td>' + getFechaHora($dsProto.getValue(i,12),$dsProto.getValue(i,13)) + '</td>'
			html += '</tr>'
			html += '<tr>'
			html += '<td></td>'
			html += '<td valign="middle">' + '&nbsp;&nbsp;&nbsp;&nbsp;Fue rasurado: ' + '</td>'
			if($dsProto.getValue(i,14) == 0){
				html += '<td>' + 'No' + '</td>'
			}
			else{
				html += '<td>' + getFechaHora($dsProto.getValue(i,14),$dsProto.getValue(i,15)) + '</td>'
			}	
			html += '</tr>'
			html += '<tr>'
			html += '<td></td>'
			html += '<td valign="middle">' + '&nbsp;&nbsp;&nbsp;&nbsp;Controlo consentimiento informado: ' + '</td>'
			if($dsProto.getValue(i,16) == 0){
				html += '<td>' + $dsProto.getValue(i,17) + '</td>'
			}
			else{
				html += '<td>' + $dsProto.getValue(i,18) + '</td>'
			}
			html += '</tr>'
				
			// Analizando Intervenciones			
			
				//html += '<table width=100% cellpadding=1 cellspacing=0>'
			for ( j = 1 ; j <=maxInter ; j++ )
			{
				if($dsProto.getValue(i,2) == $dsInter.getValue(j,1)){
						
					html += '<tr>'
					html += '<td></td>'
					html += '<td valign="middle" colspan="4">' + 'Intervencion: ' + formatCodigoIntervencion($dsInter.getValue(j,2) ,$dsInter.getValue(j,3)) + ' ' + $dsInter.getValue(j,4) + '</td>'				
					html += '</tr>'
							
					if($dsInter.getValue(j,5) > 0)
						agregarPersonal("Especialista Dr.",$dsInter.getValue(j,6),$dsInter.getValue(j,7),$dsInter.getValue(j,8))
					if($dsInter.getValue(j,9) > 0)
						agregarPersonal("Ayudante 1ro.",$dsInter.getValue(j,10),$dsInter.getValue(j,11),$dsInter.getValue(j,12))
					if($dsInter.getValue(j,13) > 0)
						agregarPersonal("Ayudante 2do.",$dsInter.getValue(j,14),$dsInter.getValue(j,15),$dsInter.getValue(j,16))
					if($dsInter.getValue(j,17) > 0)
						agregarPersonal("Ayudante 3ro.",$dsInter.getValue(j,18),$dsInter.getValue(j,19),$dsInter.getValue(j,20))
					if($dsInter.getValue(j,21) > 0)
						agregarPersonal("Anestesista.",$dsInter.getValue(j,22),$dsInter.getValue(j,23),$dsInter.getValue(j,24))
					if($dsInter.getValue(j,25) > 0)
						agregarPersonal("Instrumentista.",$dsInter.getValue(j,26),'',$dsInter.getValue(j,27))
							
					break;
						
					}						
				}
				//html += '</table><p>'
					
		}
		html += '</table><p>'
		
	}
	
	html += '</body></html>'
	globals.gbl_tempHTML = html
}

/**
 * @properties={typeid:24,uuid:"F8ACB9C3-9ACA-405A-8839-BF46BABE66AA"}
 */
function agregarPersonal(titulo,medperapeynom,ciriporcen,medpertipoie){
	
	html += '<tr>'
	html += '<td></td>'
	html += '<td valign="middle">' + '&nbsp;&nbsp;&nbsp;&nbsp;' + titulo + '</td>'
	html += '<td valign="middle">' + medperapeynom + '</td>'
	if(medpertipoie == 1)
		html += '<td valign="middle">' + '( ' + application.getValueListDisplayValue('vl_tipo_medico', medpertipoie) + ' ) ' + '% ' + ciriporcen + '</td>'
	else
		html += '<td valign="middle">' + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;% ' + ciriporcen + '</td>'
	html += '</tr>'
}

/**
 * @properties={typeid:24,uuid:"1428BC7B-9BA7-428B-93DC-F0E49010B4C3"}
 */
function getFechaHora(fecha, hora){
	var fechaHora = "No";
	if(fecha > 0)
		fechaHora =  getNumberToDate(fecha)+ ' ' + convertNumberToHour_HHMM(hora);
	return fechaHora;
}

/**
 * @properties={typeid:24,uuid:"A3774079-037F-4A87-9648-09930787DB3E"}
 */
function getNumberToDate(date){
	
	return String(date).substr(6,2) + '/' + String(date).substr(4,2) + '/' + String(date).substr(0,4);
}

/**
 * @properties={typeid:24,uuid:"7EF0F53A-3873-438B-8026-A8CC6BE6D8FB"}
 */
function convertNumberToHour_HHMM(hour) {
	
	var hora = '';
	
	switch(hour.toString().length){
		
		case 1: 
			hora = '00:0'+ arguments[0].toString();
			break;
		case 2:
			hora = '00:'+ arguments[0].toString();
			break;
		case 3:
			hora = '0'+ arguments[0].toString().substr(0,1) + ':' + arguments[0].toString().substr(1,2);
			break;
		case 4:
			hora = arguments[0].toString().substr(0,2) + ':' + arguments[0].toString().substr(2,2);
			break;
		default:
			hora = '';
			break;
	}

	return hora;
}

/**
 * TODO generated, please specify type and doc for the params
 * @param legajo
 *
 * @properties={typeid:24,uuid:"01155BE3-BE48-4C2C-9CE9-4C2A7914E60F"}
 */
function convertNumberToLegajo(legajo) {
	var leg = '';
	if(legajo != '0')
		leg = legajo.toString().substr(0,(legajo.toString().length - 1))+"/"+legajo.toString().substr((legajo.toString().length - 1),1);
	
	return leg;
}

/**
 * TODO generated, please specify type and doc for the params
 * @param tipoCod
 * @param codigo
 *
 * @properties={typeid:24,uuid:"55A04976-96D6-4AB2-B81E-B71CB634BD61"}
 */
function formatCodigoIntervencion(tipoCod,codigo){
	var code = String(tipoCod);
	if(code < 10){
		code =  '0' + tipoCod;
	}
	
	var codeNom = String(codigo);
	if(codeNom.length == 5){
		code += ' 0' + codeNom.substr(0,1) + '.' + codeNom.substr(1,2) + '.' + codeNom.substr(3,2);
	}
	else{
		code += ' ' + codeNom.substr(0,2) + '.' + codeNom.substr(2,2) + '.' + codeNom.substr(4,2);
	}
	return code;
}
