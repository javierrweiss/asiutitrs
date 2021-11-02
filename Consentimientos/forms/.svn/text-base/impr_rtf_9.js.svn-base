/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"A1FDE8B4-6850-4DC4-9237-3E4BA48294ED",variableType:93}
 */
var fecha_impre = new Date();

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"2C6497B2-37D1-41E7-A1A4-3C48D7A85234",variableType:93}
 */
var fechadeldia = new Date();

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"D3EB0660-8641-47AD-89FB-949935EFBFC3"}
 */
var mes = '';

/**
 * @properties={typeid:24,uuid:"D051E56B-2CF9-4DE7-8661-4AFE828194AB"}
 */
function sub_buildReport()
{
	var fechadeldia = new Date(); 
	var mes = '';
	var dia = 0
	var año = 0
	dia = fechadeldia.getDate()
	año = fechadeldia.getFullYear()
	switch (fechadeldia.getMonth()) {
	case 0:
		mes = 'Enero';
		break;
	case 1:
		mes = 'Febrero';
		break;
	case 2:
		mes = 'Marzo';
		break;
	case 3:
		mes = 'Abril';
		break;
	case 4:
		mes = 'Mayo';
		break;
	case 5:
		mes = 'Junio';
		break;
	case 6:
		mes = 'Julio';
		break;
	case 7:
		mes = 'Agosto';
		break;
	case 8:
		mes = 'Setiembre';
		break;
	case 9:
		mes = 'Octubre';
		break;
	case 10:
		mes = 'Noviembre';
		break;
	case 11:
		mes = 'Diciembre';
		break;
	}
	

	globals.campoRTF = texto_to_consentimientos.rtf_html;
	var html = ''
	html += '<html><body>'
	html += '<table width=100% cellpadding=0 cellspacing=0>'
	html += '<tr>'
		
	html += '<td width="35%" align="left"><p>CABA,</p></td>'
	html += '<td width="65%" align="left"><p>' + dia + ' de ' + mes + ' de ' + año  + '</td>'
	html += '</tr>'
	html += '<tr>'
	html += '</tr>'
	html += '<tr>'		
	
	
	html += '<td width="35%" align="left"><p>Nombre y Apellido: </p></td>'
	html += '<td width="65%" align="left"><p>' + globals.apeynom + '</td>'
	html += '</tr>'
	html += '<tr>'
	html += '<td width="35%" align="left"><p>Tipo y Nro. de Doc.: </p></td>'
	html += '<td width="15%" align="left"><p>' + globals.tipo_docu + ' ' + globals.documento + '</p></td>'
	html += '</tr>'
		
	html += '<tr>'
	html += '<td width="35%" align="left"><p>Historia Clínica Única: </p></td>'
	html += '<td width="15%" align="left"><p>' + globals.hist_cli_unica + '</td>' 
	
	
	
	html += '<tr>'
	html += '<td width="35%" align="left"><p>Número de Internación:</p></td>'
	html += '<td width="15%" align="left"><p>' + globals.hist_clinica + '</td>'
	
	html += '<td width="15%" align="left"><p>Habitación: </td>'
	html += '<td width="35%" align="left"><p>' + globals.habitacion + '</td>'
	
	html += '<td width="15%" align="left"><p>Cama: </td>'
	html += '<td width="35%" align="left"><p>' + globals.cama + '</td>'
	html += '</tr>'
	
	html += '<tr>'
	html += '<td width="22%" align="left"><p>Obra Social: </p></td>'
	html += '<td width="30%" align="left"><p>' + globals.obra_social + '</td>'
	
	html += '<td width="15%" align="left"><p>Afiliado Nro.</td>'
	html += '<td width="35%" align="left"><p>' + globals.afiliado + '</td>'
	
	html += '</tr>'
		
	html +=  '<tr> <br> </br> </tr>'
	html +=  '<br> </br>'
		
	html += '<tr>'
	html += '<td width="100" align="left"><p>Paciente</p></td>'
	html += '</tr>'
	html += '</table>'	
	
	
	html += '<table width=100% cellpadding=0 cellspacing=0>'
	html += '<tr>'
	//html += '<td width="1"  align="letf">           </td>'	
	html += '<td width="100" align="left"><p>        Firma .............................................................</p></td>'
	html += '</tr>'
	
	
	html += '</table></body></html>'
	globals.campoHTML = html
		
}

/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"FE52D3AE-BDA5-4E16-8C82-295DD8965E6C"}
 */
function onLoad_inicializa_fecha(event) {
	fecha_impre = application.getServerTimeStamp()
}
