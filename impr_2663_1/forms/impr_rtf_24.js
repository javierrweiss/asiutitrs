/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"38BE2DC1-BF74-4B3C-8BC8-DDF69298D46B"}
 */
var frm_prog = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"8402A73A-A674-4472-8CDF-10A2B72BA2BB"}
 */
var frm_titulo = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"B510E177-7E6E-483F-B4B0-EB57275B793F",variableType:93}
 */
var fecha_impre = new Date();

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"3D4E97C1-7F68-445A-BCA9-9419D894CEC1"}
 */
var frm_campoRTF = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"A3C115E8-9818-4751-B92C-EC897CA139BE"}
 */
var frm_campoHTML = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"68C9A41A-37BB-4628-85E3-7F291B7E4192"}
 */
var frm_leg = '9283/8';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"4BE08C2C-10EC-453F-9E33-4B0C9F187FC5"}
 */
var frm_leg_nom = 'Walter Chazarreta';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"5BC5DB2B-3FEA-4E1D-B1AF-115F655B296A"}
 */
var frm_fecha_txt = '';

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"9D3976A1-E484-4B81-99A5-5F65C3396338",variableType:4}
 */
var frm_leg_puesto = 1648;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"16CC01E8-0BA1-4A0E-BFDE-4F6BF837B087"}
 */
var frm_leg_sector = 'Computos(CE)';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"D9189860-DB64-44A9-965F-F1562AD3E635"}
 */
var frm_leg_funcion = 'Programador';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"4363EC54-74D4-4187-88C9-2F49CB152F2A"}
 */
var frm_leg_categoria = 'Programador';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"28F5DCDC-AD20-4EC8-B593-00319A07DD9D"}
 */
var frm_leg_fecha_ing = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"85FE9A1A-8533-45AE-82EB-6466087E51A2"}
 */
var frm_leg_vto_cont = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"3BCDCF29-7B45-4AB2-BCDA-69EDC51AF3FE"}
 */
var frm_leg_horario = '';

/**
 * @properties={typeid:24,uuid:"01545824-46A6-4A56-8CBB-EEEDF78E1CC8"}
 * @AllowToRunInFind
 */
function sub_buildReport() {
	var mes = application.getServerTimeStamp().getMonth()   
	
	frm_fecha_txt = 'Buenos Aires, ' + application.getServerTimeStamp().getDate() + ' de ' + globals.Traer_nom_mes_corto(mes)
	              + ' del ' + application.getServerTimeStamp().getFullYear()
    frm_campoHTML = ''
	
	var html = ''
	html += '<html><body>'
	html += '<table width=100% cellpadding=0 cellspacing=0>'
	html += '<tr>'
	html += '<td width=10% align="left"><p>Legajo   : </p></td>'
	html += '<td width=10% align="left"><p>' + frm_leg + '</p></td>'
	html += '<td width=80% align="left"><p>' + frm_leg_nom + '</p></td>'
	html += '</tr>'
	html += '</table>'		
		
	html += '<table width=100% cellpadding=0 cellspacing=0>'
	html += '<tr>'
	html += '<td width="12%" align="left"><p>Puesto :</p></td>'
	html += '<td width="88%" align="left"><p>'+ frm_leg_puesto +'</p></td>'
	html += '</tr>'
		
	html += '<tr>'
	html += '<td width="12%" align="left"><p>Sector :</p></td>'
	html += '<td width="88%" align="left"><p>'+ frm_leg_sector +'</p></td>'
	html += '</tr>'

	html += '<tr>'
	html += '<td width="12%" align="left"><p>Función :</p></td>'
	html += '<td width="88%" align="left"><p>'+ frm_leg_sector +'</p></td>'
	html += '</tr>'
		
	html += '<tr>'
	html += '<td width="12%" align="left"><p>Categoría :</p></td>'
	html += '<td width="88%" align="left"><p>'+ frm_leg_categoria +'</p></td>'
	html += '</tr>'
    html += '</table>'
	
	html += '<table width=100% cellpadding=0 cellspacing=0>'
	html += '<tr>'
	html += '<td width="12%" align="left"><p>F. Ingreso :</p></td>'
	html += '<td width="10%" align="left"><p>'+ frm_leg_fecha_ing +'</p></td>'
	html += '<td width="5%" align="left"><p> </p></td>'
	html += '<td width="15%" align="left"><p>Vto. Contrato :</p></td>'
	html += '<td width="15%" align="left"><p>'+ frm_leg_vto_cont +'</p></td>'
	html += '<td width="43%" align="left"><p> </p></td>'
	html += '</tr>'
    html += '</table>'	
	
    html += '<table width=100% cellpadding=0 cellspacing=0>'
	html += '<tr>'
	html += '<td width="12%" align="left"><p>Horario :</p></td>'
	html += '<td width="88%" align="left"><p>'+ frm_leg_horario +'</p></td>'
	html += '</tr>'
    html += '</table>'

	
	html += '</tr>'
	
	
	
	
	
	
	html += '</body></html>'
	frm_campoHTML = html	
}
