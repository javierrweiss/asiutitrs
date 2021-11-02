/**
 * @properties={typeid:35,uuid:"FEF67907-B5F4-4B02-91E9-B8B93EE9D865",variableType:-4}
 */
var smsciru_close = false;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"3D43C8C1-E389-43AE-82DF-FBD61F9FF090",variableType:4}
 */
var smsciru_hiscliunica = 0;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"EC45EF3E-FA28-4906-82DF-987C8EF9FE73"}
 */
var smsciru_textosms = '';

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"72EF55BD-B2FD-42D9-A707-7BBB2AC98023",variableType:93}
 */
var smsciru_fecha_actual = new Date();

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"C6309578-1CF9-41B8-8AC1-D1DA582677E8",variableType:4}
 */
var smsciru_codObraSocial = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"F02B3230-6FA0-4136-A8C9-254FE75C5ED5",variableType:4}
 */
var smsciru_gbl_activoFormBuscarInternado = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"C3F8A1C0-87E1-485A-A779-2A6E4E8489EB",variableType:4}
 */
var smsciru_gbl_eventSourceButton = 0;
/**
 * TODO generated, please specify type and doc for the params
 * @param codigo
 *
 * @properties={typeid:24,uuid:"98E63785-101F-4955-8C1E-F316F20B8311"}
 */
function smsciru_formatearNumeroIntervencion(codigo) {
	var hiscli1 = codigo.toString();
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
 * @param args
 *
 * @properties={typeid:24,uuid:"1FC91810-7EE7-4EBD-888C-2671834CCF0A"}
 */
function llamada_desde_Menu(args) {

    // Trae datos desde el Menu
    args = args.toString()
    args=args.split(';')
    globals.vLegajo=utils.stringToNumber(args[0])
    globals.vLega=utils.stringToNumber(args[1])
    globals.vOperador=args[2]
    globals.vTipoOperador=utils.stringToNumber(args[3])
    //globals.gbl_transacciones_1=args[4]
    globals.vEmpresa=args[5]
    globals.gbl_expanding_Nodes=args[6]
    globals.gbl_title = ' '

 
         var win = application.createWindow("Menu_sms",JSWindow.MODAL_DIALOG)
         win.title= globals.gbl_title
         win.resizable = false
         win.show(forms['smsciru_frm_enviasms_ini'])
         //win.destroy()
    
} 
