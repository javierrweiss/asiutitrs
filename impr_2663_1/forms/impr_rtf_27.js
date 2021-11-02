/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"6F12CE77-3509-4B6A-A493-AFCAFA99673F"}
 */
var frm_sexo = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"8E356692-6A91-4B0E-ADB9-9BB087AD896C"}
 */
var frm_documento_repres = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"A36A2D1A-1022-43F9-9458-9693D838CC4C"}
 */
var frm_representante = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"4536978B-C8D0-4975-BE8D-6FB52263FD7A"}
 */
var frm_domicilio = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"39ACD713-C6BD-479C-923C-7BC58249504D"}
 */
var frm_empresa = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"3F317743-E500-48A8-8E00-66A2639AA282"}
 */
var frm_prog = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"78F96211-38CE-4029-B743-92CACCE20181"}
 */
var frm_titulo = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"AA1A77BE-312F-482C-9B37-75EE3709BDD6",variableType:93}
 */
var fecha_impre = new Date();

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"34C953B8-95D8-4A8E-A0A3-49878CA44C71"}
 */
var frm_campoRTF = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"AF4BA882-F87D-4A98-9DB9-23C124B1A4E7"}
 */
var frm_campoHTML = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"694CD6F9-8460-4929-8735-B3D1AA7F225F"}
 */
var frm_leg = '9283/8';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"1F9730E5-9479-4F34-BB05-C0F850DF0218"}
 */
var frm_leg_nom = 'Walter Chazarreta';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"A0BE851E-4B56-4E15-9DE1-7E218E8188F2"}
 */
var frm_fecha_txt = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"BC35C340-3C6B-492F-A553-34F66D0E3B5E"}
 */
var frm_leg_dni = '16.355.412';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"4E264404-BD96-4DD7-B4CA-F4EE1D28A556"}
 */
var frm_leg_dom = 'Las cañitas 322';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"51CF5B87-6584-404D-BDEC-1B5FA528441D"}
 */
var frm_leg_local = 'Moron';

/**
 * @properties={typeid:24,uuid:"B0E06042-D926-4886-8B1C-23E9F138EE26"}
 * @AllowToRunInFind
 */
function sub_buildReport() {
	var mes = application.getServerTimeStamp().getMonth()   
	
	frm_fecha_txt = 'Buenos Aires, ' + application.getServerTimeStamp().getDate() + ' de ' + globals.Traer_nom_mes_corto(mes)
	              + ' del ' + application.getServerTimeStamp().getFullYear()
    frm_campoHTML = ''
	if(frm_sexo=='M'){
		frm_sexo='el Sr.'
	}else{
		frm_sexo='la Sra.'
	}
	var html = ''
	html += '<html><body>'
	html += '<p>Entre '+frm_empresa+', con domicilio en '+frm_domicilio+', C.A.B.A. '
	html += 'representada en este acto por '+frm_representante+', titular del documento nacional de identidad Nro. '+frm_documento_repres
	html += ' en su caracter de empleador, en adelante denominada LA EMPRESA, por una parte y '+frm_sexo+' '+frm_leg_nom
	html += ', titular del documento nacional de identidad Nro. '+frm_leg_dni+', con domicilio en '+frm_leg_dom+' '+frm_leg_local
	html += 'en adelante denominado EL TRABAJADOR, por la otra y CONSIDERANDO: </p>'
	/*
	html += '<table width=100% cellpadding=0 cellspacing=0>'
	html += '<tr>'
	//FONT FACE="arial">Texto de prueba 12345 con tipo ARIAL</FONT>
	html += '<td width=100% align="left"><p>Entre &nbsp;CIRUGIA &nbsp;ENDOVASCULAR S.A., &nbsp;con domicilio &nbsp;en &nbsp;Conde 849, &nbsp;C.A.B.A. &nbsp;representada &nbsp;en &nbsp;este acto &nbsp;por</p></td>'
	html += '</tr>'
	html += '</table>'		
		
	html += '<table width=100% cellpadding=0 cellspacing=0>'
	html += '<tr>'
	html += '<td width=100% align="left"><p>Juan Pablo Gonzalez, titular del documento nacional de identidad Nro. 22.179.240 en su caracter de empleador</p></td>'	
	html += '</tr>'
    html += '</table>'
	
	html += '<table width=100% cellpadding=0 cellspacing=0>'	
	html += '<tr>'
	html += '<td width=75% align=left>en adelante denominada LA EMPRESA, por una parte y el/la Sr/ra. '+ frm_leg_nom + ', </td>'
	html += '<td width=25% >-------------------</td>'
	html += '</tr>'
    html += '</table>'
	
	html += '<table width=100% cellpadding=0 cellspacing=0>'
	html += '<tr>'
	html += '<td width=55% align="left"><p>titular del documento nacional de identidad Nro. ' + frm_leg_dni + '</p></td>'
	html += '<td width=15% align="left"><p> con domicilio en </p></td>'
	html += '<td width=30% align="left"><p>'+ frm_leg_dom + ' ' + frm_leg_local + '</p></td>'
	//html += '<td width=2% align="left"><p>------</p></td>'
	html += '</tr>'
    html += '</table>'
		
    html += '<table width=100% cellpadding=0 cellspacing=0>'
	html += '<tr>'
	html += '<td width="88%" align="left"><p>en adelante denominado EL TRABAJADOR, por la otra considerando:</p></td>'
	html += '</tr>'
    html += '</table>'
	*/
	html += '</body></html>'
	frm_campoHTML = html	
}
