/**
 * @properties={typeid:35,uuid:"A597D335-A037-4681-900B-BE3EEBEECEAF",variableType:-4}
 */
var f_tiene_consulta = true;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"6A5DD803-6BA6-45CA-B5BF-FDCA271C3BB9"}
 */
var f_largo_texto_inf = ' ';

/**
 * @properties={typeid:35,uuid:"B85A6B53-229D-4102-B660-CF4C380E3D92",variableType:-4}
 */
var f_existe_imapedi = false;

/**
 * @properties={typeid:35,uuid:"D9BE920D-61FE-4D3C-BC61-564D67A9DD70",variableType:-4}
 */
var f_cerrarForm = false;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"32F8DDE2-781D-434A-A409-467E5F61FD59"}
 */
var $campo = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"0CEDF2D7-6054-4120-A8D6-70EE21C1D399",variableType:4}
 */
var pide = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"DFB764CB-8C1B-4AFE-B063-ABDA94708797",variableType:4}
 */
var f_edad = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"90DDA9A6-5F19-44C7-B49D-B9AE3CE29979",variableType:93}
 */
var f_fecha_dia = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"A674570D-903B-4067-A9BC-B3975059AADA",variableType:4}
 */
var f_hubo_turno = 0;

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"8BDEA030-41C3-487F-AD89-5EAB932FE992"}
 * @AllowToRunInFind
 */
function onShow(firstShow, event) {
	var ing = atcons_vs_to_atcons_histpac_ing
	forms.AtCons_carga.elements.tabs.setTabEnabledAt(7,false)
	if(atcons_vs_to_tbc_reservas_nrohist.reservasipedido!=0){
		forms.AtCons_carga.elements.tabs.setTabEnabledAt(7,true)
		globals.AtCons_tiene_consulta=false
		globals.AtCons_nroPedido=atcons_vs_to_tbc_reservas_nrohist.reservasipedido
		globals.AtCons_servicio=atcons_vs_to_tbc_reservas_nrohist.reservasservicio
		
		if(atcons_reservas_to_tbc_resecod.getSize()>1){
			for(var ii=1;ii<=atcons_reservas_to_tbc_resecod.getSize()&&!globals.AtCons_tiene_consulta;ii++){
				atcons_reservas_to_tbc_resecod.setSelectedIndex(ii)
				if(atcons_reservas_to_tbc_resecod.resecodnumcod==420101){
					globals.AtCons_tiene_consulta=true
				}
			}
		}else{
			globals.AtCons_tiene_consulta=false
		}
	}else{
		globals.AtCons_nroPedido=0
		globals.AtCons_servicio=0
		globals.AtCons_tiene_consulta=true
	}

	if(globals.AtCons_tiene_consulta){
		//forms.AtCons_carga_motivo.elements.histpacmotivo.requestFocus()
		if  (ing.histpacmotivo == null || ing.histpacmotivo == '' || ing.histpacmotivo == ' '){		
				forms.AtCons_carga.elements.tabs.setTabFGColorAt(1, '#E60026')
		}else{
				forms.AtCons_carga.elements.tabs.setTabFGColorAt(1, '#000000')
		}
		if  (ing.histpacdiagno == null || ing.histpacdiagno == '' ||	ing.histpacdiagno == ' '){		
				forms.AtCons_carga.elements.tabs.setTabFGColorAt(3, '#E60026')
		}else{
				forms.AtCons_carga.elements.tabs.setTabFGColorAt(3,  '#000000')
		}

	 	if  (ing.histpactratam == null || ing.histpactratam == '' ||	ing.histpactratam == ' '){
	 	 		forms.AtCons_carga.elements.tabs.setTabFGColorAt(4, '#E60026')
 	 	}else{
	 	 		forms.AtCons_carga.elements.tabs.setTabFGColorAt(4, '#000000')
	 	}
	 	
		forms.AtCons_carga.elements.tabs.tabIndex=1
		forms.AtCons_carga.controller.focusFirstField()
		
	}else{
		forms.AtCons_carga.elements.tabs.setTabEnabledAt(7,true)
		forms.AtCons_carga.elements.tabs.tabIndex=7
		forms.AtCons_carga.controller.focusFirstField()
	}

	if  (ing.histpacmotivo == '' ||   
		ing.histpacmotivo == null ||
		ing.histpacmotivo == ' ')		
		{forms.AtCons_carga.elements.tabs.setTabFGColorAt(1, '#E60026')}
	else{forms.AtCons_carga.elements.tabs.setTabFGColorAt(1, '#000000')}

	if  (ing.histpacdiagno == '' ||
	 	ing.histpacdiagno == null ||
	 	ing.histpacdiagno == ' ')		
	 {forms.AtCons_carga.elements.tabs.setTabFGColorAt(3, '#E60026')}
	else{forms.AtCons_carga.elements.tabs.setTabFGColorAt(3,  '#000000')}

	if  (ing.histpactratam == '' ||
		ing.histpactratam == null ||
		ing.histpactratam == ' ')		
	{forms.AtCons_carga.elements.tabs.setTabFGColorAt(4, '#E60026')}
	else{forms.AtCons_carga.elements.tabs.setTabFGColorAt(4, '#000000')}
	//f_cerrarForm = false


	forms.AtCons_carga.elements.btn_cefalea.visible=false
	forms.AtCons_carga.elements.btn_cefalea.enabled=false		
	if(atcons_vs_to_tbc_reservas_nrohist.reservasesp==365){
		forms.AtCons_carga.elements.btn_cefalea.visible=true
		forms.AtCons_carga.elements.btn_cefalea.enabled=true
	}




	var j=0
	if(globals.AtCons_tiene_consulta){
		for(j=1;j<=6;j++){
			forms.AtCons_carga.elements.tabs.setTabEnabledAt(j,true)
		}
	}else{
		for(j=1;j<=6;j++){
			forms.AtCons_carga.elements.tabs.setTabEnabledAt(j,false)
		}
	}

	//elements.tabless_1.enabled=false
	if(globals.AtCons_servicio!=null&&globals.AtCons_servicio!=0){
		if(atcons_to_tbc_servicios.servpatologico!=1){
			if(atcons_vs_to_atcons_imapedet_inf.getSize()>0){
				atcons_vs_to_atcons_imapedet_inf.setSelectedIndex(1)
				globals.AtCons_patologico=atcons_vs_to_atcons_imapedet_inf.imapedipatologico
			}else{
				globals.AtCons_patologico=0
			}
			forms.AtCons_carga_informe.elements.patologico_lbl.visible=true
			forms.AtCons_carga_informe.elements.patologico_cbo.visible=true
		}else{
			forms.AtCons_carga_informe.elements.patologico_lbl.visible=false
			forms.AtCons_carga_informe.elements.patologico_cbo.visible=false
			globals.AtCons_patologico=1
		}
	}else{
		forms.AtCons_carga_informe.elements.patologico_lbl.visible=false
		forms.AtCons_carga_informe.elements.patologico_cbo.visible=false
		globals.AtCons_patologico=0
	}
	

var $fecha_tope = 20181231
		var $fechahoy = application.getServerTimeStamp() 
		var $anio = $fechahoy.getFullYear()
		var $mes  = $fechahoy.getMonth() + 1
		if ($mes < 10)
		{$mes = '0' + $mes}
		var $dia  = $fechahoy.getDate()
		if ($dia < 10)
			{$dia = '0' + $dia}
		//var $fectrahoy_aux  = $anio + '' + $mes + '' + $dia
		//var $fecha_int = utils.stringToNumber($fectrahoy_aux )
		var $fecha_int = $anio + '' + $mes + '' + $dia
		if ($fecha_int < $fecha_tope)
		{
	//		elements.hist_cli.fgcolor = '#DA81F5'
		}

application.updateUI()
//forms.AtCons_carga_motivo.elements.histpacmotivo.requestFocus()

}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"61317DA3-760C-4554-9C20-A9A8C8D93B26"}
 */
function onAction_en_espera(event) {
if(atcons_vs_to_tbc_reservas_nrohist.reservasipedido!=0){
	if(forms.AtCons_texto.elements.btn_graba.enabled){
		if (globals.DIALOGS.showQuestionDialog('¡Atención!','¿Está seguro que desea salir sin grabar el Informe de Prácticas?', 'Si', 'No') == 'Si'){
			forms.AtCons_texto.elements.btn_graba.enabled=false
			forms.AtCons_texto.elements.txt_texto.editable=false
			forms.AtCons_texto.f_informe=null
		}else{
			return
		}
	}else{
		forms.AtCons_texto.f_informe=null
	}
}else{
	forms.AtCons_texto.f_informe=null
}

/// RESERVAS
reservasatendi = 3  // pone estado en espera

/*
// desde   11/06/2018   xq al hacer save general graba tambien otros foundset usado en form de anatomia patologica
	var estado = databaseManager.saveData(foundset)
	if (estado == false) 
		{scopes.globals.AtCons_vmensaje = 'NO grabo correctamente EN ESPERA '
	    globals.DIALOGS.showInfoDialog('Aviso',scopes.globals.AtCons_vmensaje,"Aceptar")
	    return false}
    else
    { databaseManager.refreshRecordFromDatabase(foundset,0)}

	estado = databaseManager.saveData(foundset.atcons_reservas_to_atcons_histpac_ing)
	if (estado == false )
		{databaseManager.revertEditedRecords(foundset)
		scopes.globals.AtCons_vmensaje = 'NO grabo correctamente EN ESPERA Histpac temporario'
	    globals.DIALOGS.showInfoDialog('Aviso',scopes.globals.AtCons_vmensaje,"Aceptar")
	    return false}
// hasta
*/

// desde   19/06/2018 	poner save/try/catch  x c/ foundset
try {databaseManager.saveData(foundset)}
catch (msg){
	(plugins.dialogs.showInfoDialog("Error al grabar 'En espera' en tbc_reserva",msg.toString(),"ok"))
	//	application.output(msg.rhinoException.getMessage())
}
var error1=''
var error2=''
var i = 0
var array = databaseManager.getFailedRecords(foundset)
for (i = 0; i < array.length; i++) {
	var record = array[i];
	var jstable = databaseManager.getTable(record);
	var tableSQLName = jstable.getSQLName();
	error1='Error de Grabación en Tabla:' + tableSQLName + ' en server:' + jstable.getServerName() + ' falló la grabación. Avise a Sistemas, por favor!'
	error2='Error en grabación '+record.exception;
	if (record.exception.getErrorCode() == ServoyException.RECORD_VALIDATION_FAILED) {
		var thrown = record.exception.getValue()
		plugins.dialogs.showErrorDialog("Error de grabación","Record validation failed: " + thrown)
	}
}
if(error1!=''){
	plugins.dialogs.showErrorDialog("Error en grabacion de tbc_reserva",error1,"Ok")
	plugins.dialogs.showErrorDialog("Error en grabacion de tbc_reserva",error2,"Ok")
	plugins.dialogs.showInfoDialog("Reintentar","Reintente grabar!!")
	return false}
/// Tabla Auxiliar ATCONS_HISTPAC_ING
try {databaseManager.saveData(foundset.atcons_reservas_to_atcons_histpac_ing)}
catch (msg){
	(plugins.dialogs.showInfoDialog("Error al grabar 'En espera' en atcons_histpac_ing",msg.toString(),"ok"))
	//	application.output(msg.rhinoException.getMessage())
}
error1=''
error2=''
array = databaseManager.getFailedRecords(foundset.atcons_reservas_to_atcons_histpac_ing)
for (i = 0; i < array.length; i++) {
	record = array[i];
	jstable = databaseManager.getTable(record);
	tableSQLName = jstable.getSQLName();
	error1='Error de Grabación en Tabla:' + tableSQLName + ' en server:' + jstable.getServerName() + ' falló la grabación. Avise a Sistemas, por favor!'
	error2='Error en grabación '+record.exception;
	if (record.exception.getErrorCode() == ServoyException.RECORD_VALIDATION_FAILED) {
		thrown = record.exception.getValue()
		plugins.dialogs.showErrorDialog("Error de grabación","Record validation failed: " + thrown)
	}
}
if(error1!=''){
	plugins.dialogs.showErrorDialog("Error en grabacion de atcons_histpac_ing",error1,"Ok")
	plugins.dialogs.showErrorDialog("Error en grabacion de atcons_histpac_ing",error2,"Ok")
	plugins.dialogs.showInfoDialog("Reintentar","Reintente grabar!!")
		
	return false}

// hasta
	cerrar_window()
// TODO    ORIGINAL  con un solo save
/* 	
	var estado = databaseManager.saveData()   ORIGINAL	
	if (estado == true)  // refrescar para actualizar lo que muestra
		{ databaseManager.refreshRecordFromDatabase(foundset,0)}
	else
		{// TODO ver si va databaseManager.revertEditedRecords()
		scopes.globals.AtCons_vmensaje = 'NO grabo EN ESPERA correctamente'
        globals.DIALOGS.showInfoDialog('Aviso',scopes.globals.AtCons_vmensaje,"Aceptar")
		cerrar_window()
        return false}	
	*/
    
}

/**
 * @properties={typeid:24,uuid:"8A8D0842-1EFC-4848-A692-3256FB17A9E2"}
 */
function grabar_histpac_txt($fs_txt,$campo1,$numerador) {
//  $campo1 no puede estar en blanco : fue controlado antes de ir al save que llama a este metodo
	// Primero : reemplazar caracteres especiales del campo text_area
	var $campo2 = scopes.globals.conversion_caract_espec(utils.stringTrim($campo1))
	
	/*	 TXT-1     9(10)   | Nro.cabecera                               
		 TXT-1G    9(01)   | Grupo de Texto                             
		 TXT-2     9(01)   | 0-Registro Cabecera                        
		                   | 1-Texto                                    
		 TXT-3     9(04)   | Secuencia de registros                     
		                   | 0001 a 9999 para contenidos                 
		 TXT-4     X(78)   | Linea de Texto                             
		 TXT-6     9(04)   | Ultimo Nro. secuencia                      
		                   | (solo en reg.cabecera)   */   
	// Segundo : se quitan los 'enters' y se crea nueva linea	x c/u	
	// Tercero : partir las n partes del campo text_area  separadas por los enters en n reg. de 78 caracteres, controlando que no corte una palabra
	
	var $campo = new Array();
	$campo = $campo2.split('\n', 7800);
	var $cuantas_partes = 0
	$cuantas_partes = $campo.length 
	var ii = 0
	var lineascab = 0;
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
	for (var j = 1; j < lineas + 1; j++) 
	{
		var aux_largo_final = posicionInicial + 78
		if (aux_largo_final < longitudTexto)
		{
			// var vlarguito = $campo.substr(posicionInicial, 78)  // 08/05/2018
			var vlarguito = $campo[ii].substr(posicionInicial, 78)
			if (vlarguito != '') 
			{
				++lineascab   
				$fs_txt.newRecord() 
				$fs_txt.txt1  = $numerador
				$fs_txt.txt1g = 1   // grupo
				$fs_txt.txt2  = 1   // 1=linea de texto
				//$fs_txt.txt3  = j   // secuencia  // 09/05/2018
				$fs_txt.txt3  = lineascab   // secuencia     // 09/05/2018
				$fs_txt.txt6  = 0   // solo para cabecera 
				$fs_txt.txt4  = $campo[ii].substr(posicionInicial, 78) 

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
						$fs_txt.txt4 =  $aux_tex
						}
				}
				else  // el caracter 78 es espacio
				{posicionInicial = posicionInicial + 78}
			}  // cierra if larguito   x este else de ese if no deberia pasar nunca/
		}
		else   // para el renglon que tiene menos de 78 caracteres, ultimo renlon
		{  	//var dife = longitudTexto - posicionInicial
			//$fs_txt.txt4  = $campo.substr(posicionInicial, dife)
			var $auxi_txt4 = null
			if (lineas == 1)
				{if (longitudTexto == 0)
					{$auxi_txt4 = '                                                                              '}
				else
					{$auxi_txt4 = $campo[ii].substr(0, longitudTexto)}}
			else
				{//var dife = longitudTexto - $aux_pos
				 //$fs_txt.txt4 = $campo.substr($aux_pos, dife)  // Daba error cuando dife = 0
				var dife = longitudTexto - posicionInicial
				if (dife > 0)
				{$auxi_txt4 = $campo[ii].substr(posicionInicial, dife)}
				}
			if ($auxi_txt4 != null)
			{++lineascab   // 09/05/2018
				$fs_txt.newRecord() 
				$fs_txt.txt1  = $numerador
				$fs_txt.txt1g = 1   // grupo
				$fs_txt.txt2  = 1   // 1=linea de texto
				//$fs_txt.txt3  = j   // secuencia   // 09/05/2018
				$fs_txt.txt3  = lineascab   // secuencia   // 09/05/2018
				$fs_txt.txt6  = 0   // solo para cabecera 
				$fs_txt.txt4 = $auxi_txt4
			}
			//++lineascab
		}
		if ($auxi_txt4 != null)
		{
		// control logintud para no tener problema al grabar en arch. cobol
		if ($fs_txt.txt4.length > 78)
			{$fs_txt.txt4 = $fs_txt.txt4.substr(0, 77)}
		if ($fs_txt.txt4.length < 78)
			{$nn = $fs_txt.txt4.length
			for (var m = $nn + 1 ; m < 79 ; m++) 
				{$fs_txt.txt4 = $fs_txt.txt4 + ' '}
			}
		}
	}
	}//08/05/2018 
	// cabecera	
	$fs_txt.newRecord() // cabecera
	$fs_txt.txt1  = $numerador
	$fs_txt.txt1g = 1   // grupo
	$fs_txt.txt2  = 0   // 0=cabecera
	$fs_txt.txt3  = 0   // TOOD  va 0   // secuencia
	$fs_txt.txt4  = " "
	$fs_txt.txt6  = lineascab  // solo para cabecera 
	return true  
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"7513BDEE-8766-45E9-8069-9A30303B7EAB"}
 * @AllowToRunInFind
 */
function onAction_fin_atencion(event) {
	
	var ing = atcons_reservas_to_atcons_histpac_ing
	
//// VALIDAR campos obligatorios
    if(globals.AtCons_tiene_consulta){
		if ((ing.histpacmotivo == null || 	
			ing.histpacmotivo == '' || 	ing.histpacmotivo == ' '))
			{scopes.globals.AtCons_vmensaje = 'Debe ingresar Motivo de la Consulta'
			//plugins.dialogs.showInfoDialog('Aviso' , globals.AtCons_vmensaje ,'Ok')
			globals.DIALOGS.showInfoDialog('Aviso',scopes.globals.AtCons_vmensaje,"Aceptar")
			return false}
	
		if ((ing.histpactratam == null ||
			ing.histpactratam == '' ||	ing.histpactratam == ' '))
			{scopes.globals.AtCons_vmensaje = 'Debe ingresar Tratamiento'
			globals.DIALOGS.showInfoDialog('Aviso',scopes.globals.AtCons_vmensaje,"Aceptar")	
			return false}
		
		if ((ing.histpacpatolo == null ||
			ing.histpacpatolo == '' ||	ing.histpacpatolo == ' '))
			{scopes.globals.AtCons_vmensaje = 'Debe ingresar Diagnostico'
			globals.DIALOGS.showInfoDialog('Aviso',scopes.globals.AtCons_vmensaje,"Aceptar")		
			return false}  
		if ((ing.histpacdiagno == null ||
			ing.histpacdiagno == '' ||	ing.histpacdiagno == ' '))
			{scopes.globals.AtCons_vmensaje = 'Debe ingresar diagnostico'
			globals.DIALOGS.showInfoDialog('Aviso',scopes.globals.AtCons_vmensaje,"Aceptar")		
			return false} 
		
		if(ing.ambulatxt == '' || ing.ambulatxt == ' ')   // 29/10/2018
			{ing.ambulatxt = null}
		
		if (((ing.ambulatxt != null  ) &&
			 (ing.ambulatipo != null   ) &&	
			 (ing.ambulaoxig != null   ) && 
			 (ing.ambulafectra != null ) &&
			 (ing.ambulahortra != null ) ) ||
			 ((ing.ambulatxt == null ) &&
			 (ing.ambulatipo == null   ) &&	
			 (ing.ambulaoxig == null   ) && 
			 (ing.ambulafectra == null ) &&
			 (ing.ambulahortra == null ) ))
			 {scopes.globals.AtCons_vmensaje = 'Estan todos informados o todos nulos'}
		else
		{  
			scopes.globals.AtCons_vmensaje = 'En Pedido de Ambulancia falta ingresar : ' 
			if (ing.ambulatxt == null)
				{scopes.globals.AtCons_vmensaje = scopes.globals.AtCons_vmensaje + '\n' + 'Motivo de Traslado'}
			if (ing.ambulatipo == null)
				{scopes.globals.AtCons_vmensaje = scopes.globals.AtCons_vmensaje + '\n' + 'Tipo de Ambulancia'}
			if (ing.ambulaoxig == null)
				{scopes.globals.AtCons_vmensaje = scopes.globals.AtCons_vmensaje + '\n' + 'Con o Sin Oxigeno'}		
			if (ing.ambulafectra == null)
				{scopes.globals.AtCons_vmensaje = scopes.globals.AtCons_vmensaje + '\n' + 'Fecha de Traslado'}		
			if (ing.ambulahortra == null)
				{scopes.globals.AtCons_vmensaje = scopes.globals.AtCons_vmensaje + '\n' + 'Hora de Traslado'}
			globals.DIALOGS.showInfoDialog('Aviso',scopes.globals.AtCons_vmensaje,"Aceptar")
			elements.tabs.tabIndex = 'ped_ambula'
			return false
		}
		if (ing.ambulatxt  != null  &&
		 	ing.ambulatipo != null  &&	
		 	ing.ambulaoxig != null  && 
		 	ing.ambulafectra != null  &&
		 	ing.ambulahortra != null)  {
			/*if (forms.AtCons_carga_ambula.onDataChange_fectraslado() == false)	
				{scopes.globals.AtCons_vmensaje = 'Verifique Fecha de Traslado del Pedido de Ambulancia' + '\n' + 'antes Cerrar la Atencion del Paciente'
				globals.DIALOGS.showInfoDialog('Aviso',scopes.globals.AtCons_vmensaje,"Aceptar")
				elements.tabs.tabIndex = 'ped_ambula'
				return false}  */
			if (ing.ambulafecped == null || ing.ambulahorped == null)
				{scopes.globals.AtCons_vmensaje = 'Verifique Fecha/Hora de Traslado del Pedido de Ambulancia' + '\n' + 'antes Cerrar la Atencion del Paciente'
				globals.DIALOGS.showInfoDialog('Aviso',scopes.globals.AtCons_vmensaje,"Aceptar")
				elements.tabs.tabIndex = 'ped_ambula'
				return false}
			var dia = ing.ambulafectra.getDate()
			if (dia < 10)
				{dia = '0' + dia}
			var mes = ing.ambulafectra.getMonth() + 1 
			if (mes < 10)
				{mes = '0' + mes}
			var anio = ing.ambulafectra.getFullYear()
			var fectra_aux  = anio + '' + mes + '' + dia
			var fectra_int = utils.stringToNumber(fectra_aux)
			if (fectra_int < ing.ambulafecped)
				{scopes.globals.AtCons_vmensaje = 'Fecha de Traslado no puede ser menor que la fecha actual ';
				globals.DIALOGS.showInfoDialog('Aviso',scopes.globals.AtCons_vmensaje,"Aceptar")
				elements.tabs.tabIndex = 'ped_ambula'
				return false}
			if (fectra_int == ing.ambulafecped && ing.ambulahortra < ing.ambulahorped)
				{scopes.globals.AtCons_vmensaje = 'Hora de Traslado no puede ser menor que la hora actual ';
				globals.DIALOGS.showInfoDialog('Aviso',scopes.globals.AtCons_vmensaje,"Aceptar")
				elements.tabs.tabIndex = 'ped_ambula'
				return false}
		}
		if (ing.yodocualcardio == 4 && ing.yodoenfcardio == '1' && 
			(ing.yodocardio4 == '' || ing.yodocardio4 == ' ' || ing.yodocardio4 == null)) 
			{scopes.globals.AtCons_vmensaje = 'Debe informar "Otros" Enf. Cardiovascular ';
			globals.DIALOGS.showInfoDialog('Aviso',scopes.globals.AtCons_vmensaje,"Aceptar")
			elements.tabs.tabIndex = 'estudios'
			forms.AtCons_carga_estudios.elements.cardio_4.requestFocus()
			return false}
		if ((ing.yodoaque == 4 && ing.yodoalergico == '1') && 
			(ing.yodoaque4 == '' || ing.yodoaque4 == ' ' || ing.yodoaque4 == null)) 
			{scopes.globals.AtCons_vmensaje = 'Debe informar "Otros" alergias ';
			globals.DIALOGS.showInfoDialog('Aviso',scopes.globals.AtCons_vmensaje,"Aceptar")
			elements.tabs.tabIndex = 'estudios'
			forms.AtCons_carga_estudios.elements.yodo_a_que4.requestFocus()
			return false}

		
		if (foundset.reservasesp==365){
			globals.vHiscli=foundset.reservashiscli
			globals.cefalea_fecha=foundset.reservasfech
			if(cefalea_vhiscli_to_tbl_cefalea.getSize()<1){
				scopes.globals.AtCons_vmensaje = 'Debe ingresar Protocolo de Cefalea ';
				globals.DIALOGS.showInfoDialog('Aviso',scopes.globals.AtCons_vmensaje,"Aceptar")
				elements.btn_cefalea.requestFocus()
				return false
			}
		}
		if (foundset.reservasesp==371||foundset.reservasesp==19){
			var confirma_asignacion = '';
			var ingresa_medicam=true;
			forms.atcons_entrega_medicam.f_apeynom=atcons_tbc_reservas_to_tbc_hist_cab.histcab_apellnom
			forms.atcons_entrega_medicam.f_hc=foundset.reservashiscli
			while (ingresa_medicam){
				var win = application.createWindow("asigna",JSWindow.MODAL_DIALOG)
				win.title = " ";
				win.setSize(425,240)
				win.show(forms.atcons_entrega_medicam)
				if(globals.AtCons_entrega_medicam){
					confirma_asignacion = globals.DIALOGS.showQuestionDialog("Confirma Asignación","Confirma que suministró medicación al paciente para suspensión del embarazo?","Si","No")
					if (confirma_asignacion=="Si"){
						ingresa_medicam=false
					}else{
						ingresa_medicam=true
					}
				}else{
					confirma_asignacion = globals.DIALOGS.showQuestionDialog("Atención!","Está seguro de no haber suministrado medicación al paciente para suspensión del embarazo?","Si","No")
					if (confirma_asignacion=="Si"){
						ingresa_medicam=false
					}else{
						ingresa_medicam=true
					}
				}
			}
		}
    }	
		if(!valida_atcons_imapdet_inf()){
			scopes.globals.AtCons_vmensaje = 'Debe ingresar Informe de prácticas realizadas ';
			globals.DIALOGS.showInfoDialog('Aviso',scopes.globals.AtCons_vmensaje,"Aceptar")
			forms.AtCons_carga_informe.elements.tabless.tabIndex=1
			return false
		}else{
			if(globals.AtCons_patologico==null){
				scopes.globals.AtCons_vmensaje = 'Debe ingresar si es patológico o no ';
				globals.DIALOGS.showInfoDialog('Aviso',scopes.globals.AtCons_vmensaje,"Aceptar")
				forms.AtCons_carga_informe.elements.tabless.tabIndex=1
				return false
			}
		}
		
		if (!forms.AtCons_carga_estudios.onHide(null))  // 29/06/2018
		{return false}
/// CONFIRMA CIERRE de ATENCION
		if(globals.DIALOGS.showQuestionDialog('¡Atención!','¿Está seguro que desea cerrar la atención del paciente?', 'No' , 'Si' ) == 'No')
		{return false}
		
// TODO poner al inicio de la solucion  21/06/2018	
//databaseManager.setAutoSave(false)
  
/////////////////////////////////////////////////////////////////////////////////////////////
// llenar con histpac_ing -> tbc_histpac, tbc_hist_txt , tbc_test_wells, tbc_yodo_hc, tbl_ambula
// tomar numeracion de tbl_parametros (desal) 
// actualizar estado y fec. atenc. en reservas

//// RESERVAS ACTUALIZAR  hora al final de la atencion y estado
    scopes.globals.AtCons_vhora_atenc = application.getServerTimeStamp()
	var $hora = scopes.globals.AtCons_vhora_atenc.getHours()
	var $min  = scopes.globals.AtCons_vhora_atenc.getMinutes()
	var $seg  = scopes.globals.AtCons_vhora_atenc.getSeconds()
	var $mseg = scopes.globals.AtCons_vhora_atenc.getMilliseconds()
	
	var $seg_ed =""
	if ($seg < 10)
		{$seg_ed = "0" + $seg}
	else{$seg_ed = $seg}
	
	var $mseg_ed=""		
	if ($mseg < 10)
		{$mseg_ed = "0" + $mseg}
	else
	if ($mseg > 99)
		{var $mseg_aux = $mseg + ''
		$mseg_ed = $mseg_aux.substr(1,2)}
		else{
			$mseg_ed = $mseg}
	/*	
	if ($mseg < 10)
		{$mseg = "0" + $mseg}
	else
	if ($mseg > 99)
		{var $mseg_aux = $mseg + ''
		 $mseg = $mseg_aux.substr(1,2) * 1}   */
    //reservashoraatenc = (globals.TimeToInteger(scopes.globals.AtCons_vhora_atenc,'hhmm') * 10000)
	if ($hora < 10)
		{$hora = '0' + $hora}
	if ($min < 10)
		{$min= '0' + $min}
	//reservashoraatenc =  $hora * 1000000 + $min * 10000  
	reservashoraatenc =  $hora +'' + $min + '' + '0000'
    reservasatendi = 1    // atendido
   /* 1=si fue atendido y carga historia Clin*  en  prog. cobol
      0=no fue atendido y carga historia   
      2=no carga historia clinica          
      3=Atendido en espera con historia    
      4=Tomado                             
      9=Paciente ausente/cancelado   */
	//var cuantos_hay = foundset.getSize()
	try {databaseManager.saveData(foundset)}  
	catch (msg){
		(plugins.dialogs.showInfoDialog("Error al grabar 'Cierre Atencion' en reservas",msg.toString(),"ok"))
		//	application.output(msg.rhinoException.getMessage())
	}
	var error1=''
	var error2=''
	
	var i = 0
	var array = databaseManager.getFailedRecords(foundset)
	for (i = 0; i < array.length; i++) {
		var record = array[i];
		var jstable = databaseManager.getTable(record);
		var tableSQLName = jstable.getSQLName();
		error1='Error de Grabación en Tabla:' + tableSQLName + ' en server:' + jstable.getServerName() + ' falló la grabación. Avise a Sistemas, por favor!'
		error2='Error en grabación '+record.exception;
		if (record.exception.getErrorCode() == ServoyException.RECORD_VALIDATION_FAILED) {
			var thrown = record.exception.getValue()
			plugins.dialogs.showErrorDialog("Error de grabación","Record validation failed: " + thrown)
		}
	}
	if(error1!=''){
		plugins.dialogs.showErrorDialog("Error en grabacion de reservas",error1,"Ok")
		plugins.dialogs.showErrorDialog("Error en grabacion de reservas",error2,"Ok")
		plugins.dialogs.showInfoDialog("Reintentar","Reintente grabar!!")
		return false
		}
if(globals.AtCons_tiene_consulta){	
	////NUMERACION para HISTPAC_TXT 
		var nro_motivo = null;
		var nro_de_contador = 16
		nro_motivo = numeracion_txt(nro_de_contador)
		if (nro_motivo == null) 
			{globals.DIALOGS.showWarningDialog("Atención!","No ha sido posible tomar el numero del Texto del Motivo. Vuelva a intentar.\nSi el problema persiste contacte al administrador del sistema.","Aceptar")
			return false}
	
			
				
	//// HIST_TXT  grabar  motivo, tratamiento, estudios   /////////////////////////////
		var fs_histpac_txt  = databaseManager.getFoundSet('asistencial', 'tbc_histpac_txt')
		
		//// MOTIVO 
		grabar_histpac_txt(fs_histpac_txt , atcons_reservas_to_atcons_histpac_ing.histpacmotivo, nro_motivo)
		/// GRABAR HISTPAC_TXT   MOTIVO 
		try {databaseManager.saveData(fs_histpac_txt)}
		catch (msg){
			(plugins.dialogs.showInfoDialog("Error al grabar 'Motivo' en tbc_histpac_txt",msg.toString(),"ok"))
		}	
		error1=''
		error2=''
		array = databaseManager.getFailedRecords(fs_histpac_txt)
		for (i = 0; i < array.length; i++) {
			record = array[i];
			jstable = databaseManager.getTable(record);
			tableSQLName = jstable.getSQLName();
			error1='Error de Grabación en Tabla:' + tableSQLName + ' en server:' + jstable.getServerName() + ' falló la grabación. Avise a Sistemas, por favor!'
			error2='Error en grabación '+record.exception;
			if (record.exception.getErrorCode() == ServoyException.RECORD_VALIDATION_FAILED) {
				thrown = record.exception.getValue()
				plugins.dialogs.showErrorDialog("Error de grabación","Record validation failed: " + thrown)
			}
		}
		if(error1!=''){
			plugins.dialogs.showErrorDialog("Error en grabacion de tbc_histpac_txt",error1,"Ok")
			plugins.dialogs.showErrorDialog("Error en grabacion de tbc_histpac_txt",error2,"Ok")
			plugins.dialogs.showInfoDialog("Reintentar","Reintente grabar!!")
			return false
			}
		
		//// TRATAMIENTO 	
		var nro_tratam = null;
		nro_de_contador = 16
		nro_tratam = numeracion_txt(nro_de_contador)
		if (nro_tratam == null)
			{globals.DIALOGS.showWarningDialog("Atención!","No ha sido posible tomar el numero del Texto del Tratamiento. Vuelva a intentar.\nSi el problema persiste contacte al administrador del sistema.","Aceptar")
			return false}
		
		grabar_histpac_txt(fs_histpac_txt , atcons_reservas_to_atcons_histpac_ing.histpactratam, nro_tratam) 
		/// GRABAR HISTPAC_TXT   TRATAMIENTO
		try {databaseManager.saveData(fs_histpac_txt)}
		catch (msg){
			(plugins.dialogs.showInfoDialog("Error al grabar 'Tratamiento' en tbc_histpac_txt",msg.toString(),"ok"))
		}	
		error1=''
		error2=''
		array = databaseManager.getFailedRecords(fs_histpac_txt)
		for (i = 0; i < array.length; i++) {
			record = array[i];
			jstable = databaseManager.getTable(record);
			tableSQLName = jstable.getSQLName();
			error1='Error de Grabación en Tabla:' + tableSQLName + ' en server:' + jstable.getServerName() + ' falló la grabación. Avise a Sistemas, por favor!'
			error2='Error en grabación '+record.exception;
			if (record.exception.getErrorCode() == ServoyException.RECORD_VALIDATION_FAILED) {
				thrown = record.exception.getValue()
				plugins.dialogs.showErrorDialog("Error de grabación","Record validation failed: " + thrown)
			}
		}
		if(error1!=''){
			plugins.dialogs.showErrorDialog("Error en grabacion de tbc_histpac_txt",error1,"Ok")
			plugins.dialogs.showErrorDialog("Error en grabacion de tbc_histpac_txt",error2,"Ok")
			plugins.dialogs.showInfoDialog("Reintentar","Reintente grabar!!")
			return false
			}
		
			/*	 TXT-1     9(10)   | Nro.cabecera                                |
				 TXT-1G    9(01)   | Grupo de Texto                              |
				 TXT-2     9(01)   | 0-Registro Cabecera                         |
				                   | 1-Texto                                     |
				 TXT-3     9(04)   | Secuencia de registros                      |
				                   | 0001 a 9999 para contenidos                 |
				 TXT-4     X(78)   | Linea de Texto                              |
				 TXT-6     9(04)   | Ultimo Nro. secuencia                       |
				                   | (solo en reg.cabecera)   */
				
		//// ESTUDIOS  TEXTO //crear cabecera y renglones
		var nro_estudio = 0
		if (ing.histpacestudi == null || ing.histpacestudi == "" || ing.histpacestudi == " ") 
			{//fs_histpac.histpacestudi = 0
			}  
		else{	nro_estudio = null
				nro_de_contador = 16
				nro_estudio = numeracion_txt(nro_de_contador)}
		if (nro_estudio == null)
			{globals.DIALOGS.showWarningDialog("Atención!","No ha sido posible  tomar el numero de texto del estudio. Vuelva a intentar.\nSi el problema persiste contacte al administrador del sistema.","Aceptar")
			return false}
		else
			{if (nro_estudio != 0)
				{grabar_histpac_txt(fs_histpac_txt , atcons_reservas_to_atcons_histpac_ing.histpacestudi, nro_estudio)
				//fs_histpac.histpacestudi = nro_estudio
				}
				/// GRABAR HISTPAC_TXT   ESTUDIOS
				try {databaseManager.saveData(fs_histpac_txt)}
				catch (msg){
					(plugins.dialogs.showInfoDialog("Error al grabar 'Estudios' en tbc_histpac_txt",msg.toString(),"ok"))
				}	
				error1=''
				error2=''
				array = databaseManager.getFailedRecords(fs_histpac_txt)
				for (i = 0; i < array.length; i++) {
					record = array[i];
					jstable = databaseManager.getTable(record);
					tableSQLName = jstable.getSQLName();
					error1='Error de Grabación en Tabla:' + tableSQLName + ' en server:' + jstable.getServerName() + ' falló la grabación. Avise a Sistemas, por favor!'
					error2='Error en grabación '+record.exception;
					if (record.exception.getErrorCode() == ServoyException.RECORD_VALIDATION_FAILED) {
						thrown = record.exception.getValue()
						plugins.dialogs.showErrorDialog("Error de grabación","Record validation failed: " + thrown)
					}
				}
				if(error1!=''){
					plugins.dialogs.showErrorDialog("Error en grabacion de tbc_histpac_txt",error1,"Ok")
					plugins.dialogs.showErrorDialog("Error en grabacion de tbc_histpac_txt",error2,"Ok")
					plugins.dialogs.showInfoDialog("Reintentar","Reintente grabar!!")
					return false
					}
				}		
		
	//// TEST WELLS   ///////////////////////////
		if (ing.test_si_no == 1)
		{var fs_tw = databaseManager.getFoundSet('asistencial', 'tbc_test_wells')
			fs_tw.newRecord()    // 14 campos
			fs_tw.testnro = ing.histpacnro
			fs_tw.testfec = ing.histpacfec
			fs_tw.testhor = reservashora
			//fs_tw.testhor = ing.histpach * 1000000 + ing.histpacm * 10000 + ing.histpacr
			fs_tw.teste   = 1
			fs_tw.testcancer     = ing.testcancer
			fs_tw.testparalisis  = ing.testparalisis
			fs_tw.testpostracion = ing.testpostracion
			fs_tw.testhipersensi = ing.testhipersensi
			fs_tw.testedema      = ing.testedema
			fs_tw.testhinchazon	 = ing.testhichazon
			fs_tw.testedemafovea = ing.testedemafovea
			fs_tw.testvenasnovari   = ing.testvenasnovari
			fs_tw.testdiagverosimil = ing.testdiagverosimil 
			fs_tw.testdimerod       = ing.testdimerod
			/// GRABA TEST_WELLS
			try {databaseManager.saveData(fs_tw)}
			catch (msg){
				(plugins.dialogs.showInfoDialog("Error al grabar tbc_test_wells",msg.toString(),"ok"))
			}	
			error1=''
			error2=''
			array = databaseManager.getFailedRecords(fs_tw)
			for (i = 0; i < array.length; i++) {
				record = array[i];
				jstable = databaseManager.getTable(record);
				tableSQLName = jstable.getSQLName();
				error1='Error de Grabación en Tabla:' + tableSQLName + ' en server:' + jstable.getServerName() + ' falló la grabación. Avise a Sistemas, por favor!'
				error2='Error en grabación '+record.exception;
				if (record.exception.getErrorCode() == ServoyException.RECORD_VALIDATION_FAILED) {
					thrown = record.exception.getValue()
					plugins.dialogs.showErrorDialog("Error de grabación","Record validation failed: " + thrown)
				}
			}
			if(error1!=''){
				plugins.dialogs.showErrorDialog("Error en grabacion de tbc_test_wells",error1,"Ok")
				plugins.dialogs.showErrorDialog("Error en grabacion de tbc_test_wells",error2,"Ok")
				plugins.dialogs.showInfoDialog("Reintentar","Reintente grabar!!")
				return false}
		}   // fin TEST Wells
		
	//// YODO     ///////////////////////////
		if (ing.histpacyodo == "1")
		{var fs_yodo = databaseManager.getFoundSet('asistencial', 'tbc_yodo_hc')	
			fs_yodo.newRecord()  // 14 campos  misma clave que histpac
			fs_yodo.yodohcnro = ing.histpacnro
			fs_yodo.yodohcfec = ing.histpacfec
			fs_yodo.yodohch = ing.histpach
			fs_yodo.yodohcm = ing.histpacm
			fs_yodo.yodohcr = ing.histpacr 
			fs_yodo.yodohce = 1
			if (ing.yodoalergico == '1')
				{fs_yodo.yodoalergico = 'S'}
			else
				{fs_yodo.yodoalergico = 'N'}
			fs_yodo.yodoaque     = ing.yodoaque      // #
			fs_yodo.yodoaque4    = ing.yodoaque4     // texto
			if (ing.yodoestcontraste == "1")
				{fs_yodo.yodoestcontraste =  'S' }      // S/N
			else
				{fs_yodo.yodoestcontraste =  'N' }  
			if (ing.yodoinsrenal == '1')
				{fs_yodo.yodoinsrenal   =  'S' }        // S/N
			else
				{fs_yodo.yodoinsrenal   =  'N' } 
			if (ing.yodoenfcardio == '1')
				{fs_yodo.yodoenfcardio  = 'S'}          // S/N
			else
				{fs_yodo.yodoenfcardio  = 'N'} 
			fs_yodo.yodocualcardio = ing.yodocualcardio    // #
			fs_yodo.yodocardio4    = ing.yodocardio4       // texto
			/// YODO
			try {databaseManager.saveData(fs_yodo)}
			catch (msg){
				(plugins.dialogs.showInfoDialog("Error al grabar tbc_yodo_hc",msg.toString(),"ok"))
			}	
			error1=''
			error2=''
			array = databaseManager.getFailedRecords(fs_yodo)
			for (i = 0; i < array.length; i++) {
				record = array[i];
				jstable = databaseManager.getTable(record);
				tableSQLName = jstable.getSQLName();
				error1='Error de Grabación en Tabla:' + tableSQLName + ' en server:' + jstable.getServerName() + ' falló la grabación. Avise a Sistemas, por favor!'
				error2='Error en grabación '+record.exception;
				if (record.exception.getErrorCode() == ServoyException.RECORD_VALIDATION_FAILED) {
					thrown = record.exception.getValue()
					plugins.dialogs.showErrorDialog("Error de grabación","Record validation failed: " + thrown)
				}
			}
			if(error1!=''){
				plugins.dialogs.showErrorDialog("Error en grabacion de tbc_yodo_hc",error1,"Ok")
				plugins.dialogs.showErrorDialog("Error en grabacion de tbc_yodo_hc",error2,"Ok")
				plugins.dialogs.showInfoDialog("Reintentar","Reintente grabar!!")
				return false}	
		}
	//// AMBULANCIA    ///////////////////////////
		
		//  se trae de carga_ambula la grabacion e impresion del pedido de ambulancia 05/06/2018
		if ((ing.ambulatxt == null    || ing.ambulatxt == ''    || ing.ambulatxt    == ' ') &&
			(ing.ambulatipo == null   || ing.ambulatipo == ''   || ing.ambulatipo   == ' ') &&	
			(ing.ambulaoxig == null   || ing.ambulaoxig  == ''  || ing.ambulaoxig   == ' ') && 
			(ing.ambulafectra == null || ing.ambulafectra == '' || ing.ambulafectra == ' ') &&
			(ing.ambulahortra == null || ing.ambulahortra == '' || ing.ambulahortra  == ' ') )
			{//fs_histpac.histpacpedambula  = 0
			ing.ambulapedido = 0}  // NO HUBO pedido de Ambulancia
		else
			{  	
			// NUMERACION PEDIDO de ambulancia
			var nro_ambula = null;
			nro_de_contador = 24
			nro_ambula = numeracion_txt(nro_de_contador)
			if (nro_ambula == null)
				{globals.DIALOGS.showWarningDialog("Atención!","No ha sido posible tomar el numero del Pedido de Traslado. Vuelva a intentar.\nSi el problema persiste contacte al administrador del sistema.","Aceptar")
				return false}
			// CREA reg. AMBULA
			var fs_ambula = databaseManager.getFoundSet('asistencial', 'tbc_ambula')	
			//fs_ambula  // 29 campos
			fs_ambula.newRecord() 	
			
			// Pone NUMERO de pedido en HISTPAC y AMBULA
			fs_ambula.ambulapedido   = nro_ambula 
			ing.ambulapedido	     = nro_ambula
			
			// NUMERACIO TEXTO TRASLADO del pedido ambulancia
			var nro_ambula_txt = null;
			nro_de_contador = 23
			nro_ambula_txt = numeracion_txt(nro_de_contador)
			if (nro_ambula_txt == null)
				{globals.DIALOGS.showWarningDialog("Atención!","No ha sido posible tomar el numero del Texto del Traslado. Vuelva a intentar.\nSi el problema persiste contacte al administrador del sistema.","Aceptar")
				return false}
			
			var fs_ambulatxt  = databaseManager.getFoundSet('asistencial', 'tbc_ambulatxt')
			grabar_histpac_txt(fs_ambulatxt , atcons_reservas_to_atcons_histpac_ing.ambulatxt, nro_ambula_txt)
			/// GRABA AMBULA_TXT
			try {databaseManager.saveData(fs_ambulatxt)}
			catch (msg){
				(plugins.dialogs.showInfoDialog("Error al grabar 'Texto del Pedido Ambulancia' en tbc_ambula_txt",msg.toString(),"ok"))
			}	
			error1=''
			error2=''
			array = databaseManager.getFailedRecords(fs_ambulatxt)
			for (i = 0; i < array.length; i++) {
				record = array[i];
				jstable = databaseManager.getTable(record);
				tableSQLName = jstable.getSQLName();
				error1='Error de Grabación en Tabla:' + tableSQLName + ' en server:' + jstable.getServerName() + ' falló la grabación. Avise a Sistemas, por favor!'
				error2='Error en grabación '+record.exception;
				if (record.exception.getErrorCode() == ServoyException.RECORD_VALIDATION_FAILED) {
					thrown = record.exception.getValue()
					plugins.dialogs.showErrorDialog("Error de grabación","Record validation failed: " + thrown)
				}
			}
			if(error1!=''){
				plugins.dialogs.showErrorDialog("Error en grabacion de tbc_ambula_txt",error1,"Ok")
				plugins.dialogs.showErrorDialog("Error en grabacion de tbc_ambula_txt",error2,"Ok")
				plugins.dialogs.showInfoDialog("Reintentar","Reintente grabar!!")
				return false}		
			
		// LLENA reg. AMBULA		
			fs_ambula.ambulatxt     = nro_ambula_txt 
			fs_ambula.ambulahisto   = ing.histpacnro     
			fs_ambula.ambulapedido1 = fs_ambula.ambulapedido   // ing.ambulapedido    
			fs_ambula.ambulafecped  = ing.ambulafecped
			fs_ambula.ambulahorped  = ing.ambulahorped
			var $_dia = ing.ambulafectra.getDate()
			if ($_dia < 10)
				{$_dia = '0' + $_dia}
			var $_mes = ing.ambulafectra.getMonth() + 1 
			if ($_mes < 10)
				{$_mes = '0' + $_mes}
			var $_anio = ing.ambulafectra.getFullYear()
			// es integer 
			fs_ambula.ambulafectra  = $_anio + '' + $_mes + '' + $_dia 
			fs_ambula.ambulaintamb  = 2  // 05/06/2018
			if (ing.ambulahortra < 1000)
				{fs_ambula.ambulahortra = '0' + ing.ambulahortra}
			else
				{fs_ambula.ambulahortra  = ing.ambulahortra}
			fs_ambula.ambulatipo    = ing.ambulatipo
			fs_ambula.ambulaoxig    = ing.ambulaoxig     // 0=sin  1=con oxigeno  05/06/2018
			fs_ambula.ambuladiag    = ing.histpacpatolo  // es codigo
			fs_ambula.ambulaedad    = scopes.globals.Atcons_paciente_edad
			fs_ambula.ambuladirdes  = ' '  // ing.ambuladirdes = lo ingresan en otro momento 27/04/2018 // text 30
			fs_ambula.ambulalocdes  = ' '  // ing.ambulalocdes = lo ingresan en otro momento 27/04/2018 // text 20
			fs_ambula.ambulacodmed  = ing.histpacmedfir   
			fs_ambula.ambulatipmed  = scopes.globals.AtCons_vmedico_tipo //  es lo mismo que se pone en anatomia patologica
			fs_ambula.ambulatipooperador = 0  //   se llenan en otro momento
			fs_ambula.ambulaestado       = 0  
			fs_ambula.ambulaoperador     = 0  
			fs_ambula.ambulafectraefec = 0    
			fs_ambula.ambulahortraefec = 0    
			fs_ambula.ambulacargo   = 2      // 05/06/2018       
			fs_ambula.ambulatipoegr = 2      // 05/06/2018       
			fs_ambula.ambulaempamb  = 0     
			fs_ambula.ambulaobra    = reservasobra     
			fs_ambula.ambulaplan    = reservasobrpla    // text 10
			fs_ambula.ambulanroben  = reservasnroben    // text 15   
			fs_ambula.ambulacodloc  = 0 
			/// GRABA AMBULA
			try {databaseManager.saveData(fs_ambula)}
			catch (msg){
				(plugins.dialogs.showInfoDialog("Error al grabar 'Pedido Ambulancia' tbc_ambula",msg.toString(),"ok"))
			}	
			error1=''
			error2=''
			array = databaseManager.getFailedRecords(fs_ambula)
			for (i = 0; i < array.length; i++) {
				record = array[i];
				jstable = databaseManager.getTable(record);
				tableSQLName = jstable.getSQLName();
				error1='Error de Grabación en Tabla:' + tableSQLName + ' en server:' + jstable.getServerName() + ' falló la grabación. Avise a Sistemas, por favor!'
				error2='Error en grabación '+record.exception;
				if (record.exception.getErrorCode() == ServoyException.RECORD_VALIDATION_FAILED) {
					thrown = record.exception.getValue()
					plugins.dialogs.showErrorDialog("Error de grabación","Record validation failed: " + thrown)
				}
			}
			if(error1!=''){
				plugins.dialogs.showErrorDialog("Error en grabacion de tbc_ambula",error1,"Ok")
				plugins.dialogs.showErrorDialog("Error en grabacion de tbc_ambula",error2,"Ok")
				plugins.dialogs.showInfoDialog("Reintentar","Reintente grabar!!")
				return false}
			}  // fin ambulancia
	
	
	// HISTPAC  /////////////////////////////	
		var fs_histpac  = databaseManager.getFoundSet('asistencial', 'tbc_histpac')
		fs_histpac.newRecord() 
		fs_histpac.histpacnro     = ing.histpacnro       // no null
		fs_histpac.histpacfec     = ing.histpacfec       // no null 
		fs_histpac.histpacr       = ing.histpacr         // no null  
		fs_histpac.histpacm       = ing.histpacm         // no null 
		fs_histpac.histpach       = ing.histpach         // no null 
		fs_histpac.histpace       = 1                    // no null
		fs_histpac.histpacespfir  = ing.histpacespfir    // no null
		fs_histpac.histpacnro1    = ing.histpacnro       // no null
		fs_histpac.histpacfec1    = ing.histpacfec       // no null
	    fs_histpac.histpacnro2    = ing.histpacnro       // no null
		fs_histpac.histpacespfir1 = ing.histpacespfir    // no null
		fs_histpac.histpacmedfir    =  ing.histpacmedfir    
	    fs_histpac.histpacmedfirnya = scopes.globals.AtCons_vmedico // not null
	    fs_histpac.histpacmedfirmat = ing.histpacmedfirmat 
	    fs_histpac.histpachorasobre = ing.histpachorasobre
		fs_histpac.histpachfinal = $hora   // es el time  del final
		fs_histpac.histpacmfinal = $min     
		//fs_histpac.histpacrfinal = $seg * 100 + $mseg 
		fs_histpac.histpacrfinal = $seg_ed +''+ $mseg_ed
		fs_histpac.histpacdiagno = ing.histpacdiagno      // no null
		fs_histpac.histpacpatolo = ing.histpacpatolo
		fs_histpac.histpachatenc = ing.histpachatenc   
		fs_histpac.histpacmatenc = ing.histpacmatenc  
		fs_histpac.histpacratenc = ing.histpacratenc
	    fs_histpac.histpacderiva = ing.histpacderiva
		fs_histpac.histpacderivads  = ing.histpacderivads 
		fs_histpac.histpacderivasec = ing.histpacderivasec   // no null
		fs_histpac.histpacobra   = ing.histpacobra  
	    fs_histpac.histpacpplan  = ing.histpacpplan    // no null
		fs_histpac.histpacplan   = ing.histpacplan     // no null
		fs_histpac.histpacafil   = ing.histpacafil     // no null
		//fs_histpac.histpacpedambula  = 0   // ing.histpacpedambula no puede ser null, si hay pedido lo llena mas abajo
		fs_histpac.histpacconshiv    = ing.histpacconshiv    // no null
	    fs_histpac.histpacinterconsu = ing.histpacinterconsu
		fs_histpac.histpacentregado  = ing.histpacentregado
		fs_histpac.histpacctro    = ing.histpacctro 
	    fs_histpac.histpaccancd   = ing.histpaccancd
		if (ing.histpacyodo == "1")
			{fs_histpac.histpacyodo    = 'S'}   // no null
		else
			{fs_histpac.histpacyodo    = 'N' }
		fs_histpac.histpacmotivo = nro_motivo
		fs_histpac.histpactratam = nro_tratam
		if (ing.histpacestudi == null || ing.histpacestudi == "" || ing.histpacestudi == " ") 
			{fs_histpac.histpacestudi = 0}
		else {	fs_histpac.histpacestudi = nro_estudio}
	
		fs_histpac.histpacpedambula = ing.ambulapedido
	
		
	/// GRABAR HISTPAC	
	try {databaseManager.saveData(fs_histpac)}
	catch (msg){
		(plugins.dialogs.showInfoDialog("Error al grabar tbc_histpac",msg.toString(),"ok"))
		//	application.output(msg.rhinoException.getMessage())
	}
	error1=''
	error2=''
	i = 0
	array = databaseManager.getFailedRecords(fs_histpac)
	for (i = 0; i < array.length; i++) {
		record = array[i];
		jstable = databaseManager.getTable(record);
		tableSQLName = jstable.getSQLName();
		error1='Error de Grabación en Tabla: ' + tableSQLName + ' en server: ' + jstable.getServerName() + ' falló la grabación. Avise a Sistemas, por favor!'
		error2='Error en grabación '+record.exception;
		if (record.exception.getErrorCode() == ServoyException.RECORD_VALIDATION_FAILED) {
			thrown = record.exception.getValue()
			plugins.dialogs.showErrorDialog("Error de grabación","Record validation failed: " + thrown)
		}
	}
	if(error1!=''){
		plugins.dialogs.showErrorDialog("Error en grabacion de tbc_histpac",error1,"Ok")
		plugins.dialogs.showErrorDialog("Error en grabacion de tbc_histpac",error2,"Ok")
		plugins.dialogs.showInfoDialog("Reintentar","Reintente grabar!!")
		return false
		}
	
	// REGRABA PROTOCOLO DE CEFALEA
	if (foundset.reservasesp==365){
		globals.vHiscli=foundset.reservashiscli
		globals.cefalea_fecha=foundset.reservasfech
		if(cefalea_vhiscli_to_tbl_cefalea.getSize()>0){
			if(cefalea_vhiscli_to_tbl_cefalea.histpacfec==null||cefalea_vhiscli_to_tbl_cefalea.histpacnro==null){
				cefalea_vhiscli_to_tbl_cefalea.histpacnro=ing.histpacnro
				cefalea_vhiscli_to_tbl_cefalea.histpacfec=ing.histpacfec
				cefalea_vhiscli_to_tbl_cefalea.histpach=ing.histpach
				cefalea_vhiscli_to_tbl_cefalea.histpacm=ing.histpacm
				cefalea_vhiscli_to_tbl_cefalea.histpacr=ing.histpacr
				cefalea_vhiscli_to_tbl_cefalea.histpace=ing.histpace
				
				try {databaseManager.saveData(cefalea_vhiscli_to_tbl_cefalea)}
				catch (msg){
					(plugins.dialogs.showInfoDialog("Error al grabar tbl_cefalea",msg.toString(),"ok"))
					//	application.output(msg.rhinoException.getMessage())
				}
				error1=''
				error2=''
				i = 0
				array = databaseManager.getFailedRecords(cefalea_vhiscli_to_tbl_cefalea)
				for (i = 0; i < array.length; i++) {
					record = array[i];
					jstable = databaseManager.getTable(record);
					tableSQLName = jstable.getSQLName();
					error1='Error de Grabación en Tabla: ' + tableSQLName + ' en server: ' + jstable.getServerName() + ' falló la grabación. Avise a Sistemas, por favor!'
					error2='Error en grabación '+record.exception;
					if (record.exception.getErrorCode() == ServoyException.RECORD_VALIDATION_FAILED) {
						thrown = record.exception.getValue()
						plugins.dialogs.showErrorDialog("Error de grabación","Record validation failed: " + thrown)
					}
				}
				if(error1!=''){
					plugins.dialogs.showErrorDialog("Error en grabacion de tbl_cefalea",error1,"Ok")
					plugins.dialogs.showErrorDialog("Error en grabacion de tbl_cefalea",error2,"Ok")
					plugins.dialogs.showInfoDialog("Reintentar","Reintente grabar!!")
					return false
				}
			}
		}
	}
	if (foundset.reservasesp==371||foundset.reservasesp==19&&globals.AtCons_entrega_medicam){
		globals.AtCons_obra=foundset.reservasobra
		graba_rend_medicam()
	}
}
// REGRABA IMAPEDI de informes de practicas en consultorio
if(f_existe_imapedi){
	actualizar_informe_practica()
}


if (ing.ambulapedido == 0 || ing.ambulapedido == null)  // no hubo pedido ambulancia
	{scopes.globals.AtCons_vmensaje = 'Finalizó atención correctamente'
	globals.DIALOGS.showInfoDialog('Aviso',scopes.globals.AtCons_vmensaje,"Aceptar")}
else
	{imprimir_ambula(ing)
	scopes.globals.AtCons_vmensaje = 'Finalizó atencion correctamente' + '\n' +
	'Se Imprimió Pedido de Ambulancia. nro ' + utils.numberFormat(ing.ambulapedido, '#')
	globals.DIALOGS.showInfoDialog('Aviso',scopes.globals.AtCons_vmensaje,"Aceptar")}
	
	databaseManager.revertEditedRecords(ing)
	
//// BORRAR tablas de Cronologia del paciente atendido consultada por el medico	  
	// 17/10/2018 y 22/10/2018  desde
	if (atcons_vs_to_tbl_cronoambcab.getSize() > 0)
	{
		if (!scopes.globals.Borrar_Cronologia())
		{scopes.globals.AtCons_vmensaje = 'No pudo borrar consulta anterior de cronologia correctamente' + '\n' +
		'Avise a Sistemas ' 
		globals.DIALOGS.showInfoDialog('Aviso',scopes.globals.AtCons_vmensaje,"Aceptar")}
	} // = 0 no hay  que borrar nada
	//  22/10/2018
	
	cerrar_window()
	//forms.AtCons_reservas.controller.loadRecords(atcons_vs_to_tbc_reservas) // 22/06/2018
	forms.AtCons_reservas.onShow(false,null)  //24/05/2018
	forms.AtCons_reservas.onAction_refresh()  //24/05/2018
	//forms.AtCons_reservas.controller.loadRecords(foundset)  // 22/06/2018 solo muestra el reg procesado
	return true	

}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"C3000958-0668-4066-B397-90670CFCB568"}
 */
function onAction_historia_clinica(event) {
	elements.esperando.visible =  true
	application.updateUI()

//llama a script que invoca prog. cobol que arma cronologia todo lo que tiene para ese nro  de hist. clinica
	
	//// Setear  variables necesarias (3) para modulo de cronologia
	scopes.globals.AtCons_crono_vhisclinro = scopes.globals.AtCons_vhistcli
	scopes.globals.Atcons_crono_paciente = scopes.globals.Atcons_paciente_nya
	scopes.globals.Atcons_crono_obra = atcons_tbc_reservas_to_tbc_hist_cab.histcab_obra
	/*
	// desde aqui anular //
	//// Borrar cronologia existente
	if (atcons_reservas_to_atcons_histpac_ing.hist_hubo_crono == 0)
	{	
		if (!scopes.globals.Borrar_Cronologia())
			{scopes.globals.AtCons_vmensaje = 'No pudo borrar consulta de cronologia anterior correctamente' + '\n' +
			'Avise a Sistemas ' 
			globals.DIALOGS.showInfoDialog('Aviso',scopes.globals.AtCons_vmensaje,"Aceptar")}
		
		////LLAMAR pgm COBOL con SCRIPT - pasar historia clinica, tipo medico ,legajo medico)
		
		var  rta = ''
		rta = scopes.globals.Llama_Script_Cobol(scopes.globals.AtCons_vhistcli,scopes.globals.AtCons_vmedico_tipo,scopes.globals.AtCons_vlega)
		if (rta == null )
			{//globals.DIALOGS.showInfoDialog('Error','Rta  es null',"Aceptar")
				
				scopes.globals.AtCons_vmensaje = 'No pudo generar Cronología' + '\n' +
				'    Reintente nuevamente' 
				globals.DIALOGS.showInfoDialog('Aviso',scopes.globals.AtCons_vmensaje,"Aceptar")
				elements.esperando.visible =  false	
				application.updateUI()
				return
			}

		//if (atcons_vs_to_tbl_cronoambcab.getSize() = 0)
		//{globals.DIALOGS.showInfoDialog('Error','atcons_vs_to_tbl_cronoambcab.getSize = ' + atcons_vs_to_tbl_cronoambcab.getSize() ,"Aceptar")
		//	elements.esperando.visible =  false	
		//	application.updateUI()
		//	return
		//} 
		//lobals.DIALOGS.showInfoDialog('Error','atcons_vs_to_tbl_cronoambcab.getSize = ' + atcons_vs_to_tbl_cronoambcab.getSize() ,"Aceptar")
		//globals.DIALOGS.showInfoDialog('Error','marca crono = ' + atcons_reservas_to_atcons_histpac_ing.hist_hubo_crono ,"Aceptar")
		
						
		//scopes.globals.Llama_Script_Cobol(scopes.globals.AtCons_vhistcli,scopes.globals.AtCons_vmedico_tipo,scopes.globals.AtCons_vlega)
		//forms.AtCons_cronoamb_cab.controller.loadRecords(atcons_vs_to_tbl_cronoambcab)  	 //  27/11/2018
		//forms.AtCons_cronoamb_cab.onShow(true,event)	 //  27/11/2018
		//globals.DIALOGS.showInfoDialog('Error','show + load 1' ,"Aceptar")   //  27/11/2018
		if (atcons_vs_to_tbl_cronoambcab.getSize() > 0)
		{
		//// REGRABAR histpac_ing  con marca de cronologia para que llame al script solo una vez
			atcons_reservas_to_atcons_histpac_ing.hist_hubo_crono = 1  // VER esto: GRABA marca en histpac_ing
			try {databaseManager.saveData(atcons_reservas_to_atcons_histpac_ing)}
			catch (msg){
				(plugins.dialogs.showInfoDialog("Error en 'Atender Paciente' al grabar cronología en atcons_histpac_ing",msg.toString(),"ok"))
				//	application.output(msg.rhinoException.getMessage())
				}	
			var error1=''
			var error2=''
			var i = 0
			var array = databaseManager.getFailedRecords(atcons_reservas_to_atcons_histpac_ing)
			for (i = 0; i < array.length; i++) {
				var record = array[i];
				var jstable = databaseManager.getTable(record);
				var tableSQLName = jstable.getSQLName();
				error1='Error de Grabación en Tabla: ' + tableSQLName + ' en server: ' + jstable.getServerName() + ' falló la grabación. Avise a Sistemas, por favor!'
				error2='Error en grabación '+record.exception;
				if (record.exception.getErrorCode() == ServoyException.RECORD_VALIDATION_FAILED) {
					var thrown = record.exception.getValue()
					plugins.dialogs.showErrorDialog("Error de grabación","Record validation failed: " + thrown)
				}
			}
			if(error1!=''){
				plugins.dialogs.showErrorDialog("Error en grabacion de atcons_histpac_ing",error1,"Ok")
				plugins.dialogs.showErrorDialog("Error en grabacion de atcons_histpac_ing",error2,"Ok")
				plugins.dialogs.showInfoDialog("Reintentar","Reintente grabar!!")
				elements.esperando.visible =  false	
				application.updateUI()
				return}	
			}
		else
			{scopes.globals.AtCons_vmensaje = 'No hay información cargada para armar la Cronología' 
			globals.DIALOGS.showInfoDialog('Aviso',scopes.globals.AtCons_vmensaje,"Aceptar")
			elements.esperando.visible =  false	
			application.updateUI()
			return }
		
	}
	*/
	// hasta aqui anular //
	if (atcons_vs_to_tbl_cronoambcab.getSize() == 0)
	{
		var  rta = ''
		rta = scopes.globals.Llama_Script_Cobol(scopes.globals.AtCons_vhistcli,scopes.globals.AtCons_vmedico_tipo,scopes.globals.AtCons_vlega)
		if (rta == null )
			{//globals.DIALOGS.showInfoDialog('Error','Rta  es null',"Aceptar")
				
				scopes.globals.AtCons_vmensaje = 'No pudo generar Cronología' + '\n' +
				'    Reintente nuevamente' 
				globals.DIALOGS.showInfoDialog('Aviso',scopes.globals.AtCons_vmensaje,"Aceptar")
				elements.esperando.visible =  false	
				application.updateUI()
				return
			}
			//forms.AtCons_cronoamb_cab.onShow(true,event)	  // TODO 27/11/2018 asi func. ok
	}
	
	elements.esperando.visible =  false	
	application.updateUI()
	forms.AtCons_cronoamb_cab.onShow(true,event)	   // TODO 27/11/2018   probar 28/11/2018 asi
	//globals.DIALOGS.showInfoDialog('Error','show + load 2' ,"Aceptar")
	//globals.DIALOGS.showInfoDialog('Error','variable vhisclinro' + scopes.globals.AtCons_crono_vhisclinro ,"Aceptar")
	if (atcons_vs_to_tbl_cronoambcab.getSize() > 0)  // 12/12/2018  probar asi para que no vaya al form de crono cuando no tiene
	{
		var win = 
	application.createWindow("Atcons_crono",JSWindow.MODAL_DIALOG)
	         win.title = " Cronologia del Paciente";
	         win.setSize(950,720)  
	         win.show(forms.AtCons_crono_tab) 
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"E9BFDB24-5DBA-4764-8309-6E7F81FCBCF4"}
 */
function onAction_anatomia_patologica(event) {
	scopes.globals.Anatpa_hiscli = 	scopes.globals.AtCons_vhistcli
	// pasar las sig. variables 1/6/18
	scopes.globals.Anatpa_interface_tipoMedico = scopes.globals.AtCons_vmedico_tipo
	scopes.globals.Anatpa_interface_legajoMedico = scopes.globals.AtCons_vlega
	scopes.globals.Anatpa_interface_fecha = reservasfech
	scopes.globals.Anatpa_interface_hora = getHoraHHMM_deHHMMssmm(reservashora) 
	scopes.globals.Anatpa_interface_iva = reservasiva
	scopes.globals.Anatpa_interface_servicio = 21
	scopes.globals.Anatpa_interface_tipoPaciente = 2   
	scopes.globals.Anatpa_interface_nroPedido = globals.AtCons_nroPedido
	scopes.globals.anatpa_interface_nroSolicitud 
	var win = application.createWindow("Anatomia",JSWindow.MODAL_DIALOG)
	         win.title = " Solicitud de Anatomía Patológica";
	         // win.setSize(1000,650)  no poner
			 win.resizable = false
	         win.show(forms.Anatpa_interface_anatpaca)
	if (scopes.globals.anatpa_interface_nroSolicitud != 0){
		atcons_reservas_to_atcons_histpac_ing.hist_anat_pat = scopes.globals.anatpa_interface_nroSolicitud
		/*  SAVE ANTERIOR
		var estado = databaseManager.saveData(atcons_reservas_to_atcons_histpac_ing) 
		if (estado == false) 
	    {scopes.globals.AtCons_vmensaje = 'NO Grabó Nro. Solicitud de Anatomía Patológica \n en Tabla Auxiliar histpac_ing.'
	     globals.DIALOGS.showInfoDialog('Aviso',scopes.globals.AtCons_vmensaje,"Aceptar")
		 return
		}   */
		try {databaseManager.saveData(atcons_reservas_to_atcons_histpac_ing)}
		catch (msg){
			(plugins.dialogs.showInfoDialog("Error al grabar tbc_ambula_txt",msg.toString(),"ok"))
		}	
		var error1=''
		var error2=''
		var i = 0
		var array = databaseManager.getFailedRecords(atcons_reservas_to_atcons_histpac_ing)
		for (i = 0; i < array.length; i++) {
			var record = array[i];
			var jstable = databaseManager.getTable(record);
			var tableSQLName = jstable.getSQLName();
			error1='Error de Grabación en Tabla:' + tableSQLName + ' en server:' + jstable.getServerName() + ' falló la grabación. Avise a Sistemas, por favor!'
			error2='Error en grabación '+record.exception;
			if (record.exception.getErrorCode() == ServoyException.RECORD_VALIDATION_FAILED) {
				var thrown = record.exception.getValue()
				plugins.dialogs.showErrorDialog("Error de grabación","Record validation failed: " + thrown)
			}
		}
		if(error1!=''){   // TODO  ver que se hace porque esto no se puede regrabar
			plugins.dialogs.showErrorDialog("Error en grabacion de tbc_ambula_txt",error1,"Ok")
			plugins.dialogs.showErrorDialog("Error en grabacion de tbc_ambula_txt",error2,"Ok")
			plugins.dialogs.showInfoDialog("Reintentar","Reintente grabar!!")
			return false}
	}
}

/**
 * Handle hide window.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"76F14DCC-2B9D-4250-820F-5D771B2BD57B"}
 */
function onHide(event) {
	return f_cerrarForm
}

/**
 * @properties={typeid:24,uuid:"03197048-4978-4D62-B9B3-342D9E7EF3F0"}
 */
function onAction_cerrar() {
if(atcons_vs_to_tbc_reservas_nrohist.reservasipedido!=0){	
	if(forms.AtCons_texto.elements.btn_graba.enabled){
		if (globals.DIALOGS.showQuestionDialog('¡Atención!','¿Está seguro que desea salir sin grabar el Informe de Prácticas?', 'Si', 'No') == 'Si'){
			forms.AtCons_texto.elements.btn_graba.enabled=false
			forms.AtCons_texto.elements.txt_texto.editable=false
			forms.AtCons_texto.f_informe=null
		}else{
			return
		}
	}else{
		forms.AtCons_texto.f_informe=null
	}
}else{
	forms.AtCons_texto.f_informe=null
}
	var error1=''
	var error2=''
	var i = 0
if (atcons_reservas_to_atcons_histpac_ing.hist_anat_pat != 0)
	{scopes.globals.AtCons_vmensaje = 'No puede salir sin grabar porque hay una \n Solicitud de Anatomía Patólogica cargada. \n Debe ingresar la atencion.' 
	globals.DIALOGS.showInfoDialog('Aviso',scopes.globals.AtCons_vmensaje,"Aceptar")
	f_cerrarForm = false
	return}

if (atcons_reservas_to_atcons_histpac_ing.reservasatendi_orig == 0)
	{if (globals.DIALOGS.showQuestionDialog('¡Atención!','¿Está seguro que desea salir sin grabar?', 'Si', 'No') == 'Si'){
		f_cerrarForm = true
		atcons_reservas_to_atcons_histpac_ing.deleteRecord()
		reservasatendi = 0
		
/*  ORIGINAL
		var estado = databaseManager.saveData(foundset)
		if (estado == false) 
			{scopes.globals.AtCons_vmensaje = 'NO grabo estado "Sin Atender" en Reservas '
		    globals.DIALOGS.showInfoDialog('Aviso',scopes.globals.AtCons_vmensaje,"Aceptar")
		    return }   
*/		
		/// RESERVAS
		var cual_es = foundset.getSelectedIndex()
		try {databaseManager.saveData(foundset)}
		catch (msg){
			(plugins.dialogs.showInfoDialog("Error al grabar tbc_reserva al 'Salir'",msg.toString(),"ok"))
		}	
		
		var array = databaseManager.getFailedRecords(foundset)
		for (i = 0; i < array.length; i++) {
			var record = array[i];
			var jstable = databaseManager.getTable(record);
			var tableSQLName = jstable.getSQLName();
			error1='Error de Grabación en Tabla:' + tableSQLName + ' en server:' + jstable.getServerName() + ' falló la grabación. Avise a Sistemas, por favor!'
			error2='Error en grabación '+record.exception;
			if (record.exception.getErrorCode() == ServoyException.RECORD_VALIDATION_FAILED) {
				var thrown = record.exception.getValue()
				plugins.dialogs.showErrorDialog("Error de grabación","Record validation failed: " + thrown)
			}
		}
		if(error1!=''){  
			plugins.dialogs.showErrorDialog("Error en grabacion de tbc_ambula_txt",error1,"Ok")
			plugins.dialogs.showErrorDialog("Error en grabacion de tbc_ambula_txt",error2,"Ok")
			plugins.dialogs.showInfoDialog("Reintentar","Reintente grabar!!")
			return }
		
		cerrar_window()
		return}
		else
			{f_cerrarForm = false
			return}
	}

if (atcons_reservas_to_atcons_histpac_ing.reservasatendi_orig == 3)
	{if (databaseManager.hasRecordChanges(atcons_reservas_to_atcons_histpac_ing) == true)
		{
			if (globals.DIALOGS.showQuestionDialog('¡Atención!','¿Está seguro que desea salir sin grabar?', 'Si', 'No') == 'Si')
			{f_cerrarForm = true
			reservasatendi = 3
			databaseManager.revertEditedRecords(atcons_reservas_to_atcons_histpac_ing)
			/* ORIGINAL
			var estado = databaseManager.saveData(foundset)
			if (estado == false) 
				{scopes.globals.AtCons_vmensaje = 'NO grabo estado "Tomado" en Reservas '
			    globals.DIALOGS.showInfoDialog('Aviso',scopes.globals.AtCons_vmensaje,"Aceptar")
			    return } 
			*/
			// TODO
		    var cual_es = foundset.getSelectedIndex()
			try {databaseManager.saveData(foundset)}
			catch (msg){
				(plugins.dialogs.showInfoDialog("Error al grabar tbc_reservas al 'salir'",msg.toString(),"ok"))
			}	
			error1=''
			error2=''
			i = 0
			var array1 = databaseManager.getFailedRecords(foundset)
			for (i = 0; i < array1.length; i++) {
				var record1 = array1[i];
				var jstable1 = databaseManager.getTable(record1);
				var tableSQLName1 = jstable1.getSQLName();
				error1='Error de Grabación en Tabla:' + tableSQLName1 + ' en server:' + jstable1.getServerName() + ' falló la grabación. Avise a Sistemas, por favor!'
				error2='Error en grabación '+record1.exception;
				if (record1.exception.getErrorCode() == ServoyException.RECORD_VALIDATION_FAILED) {
					var thrown1 = record1.exception.getValue()
					plugins.dialogs.showErrorDialog("Error de grabación","Record validation failed: " + thrown)
				}
			}
			if(error1!=''){   // TODO  ver que se hace porque esto no se puede regrabar
				plugins.dialogs.showErrorDialog("Error en grabacion de tbc_ambula_txt",error1,"Ok")
				plugins.dialogs.showErrorDialog("Error en grabacion de tbc_ambula_txt",error2,"Ok")
				plugins.dialogs.showInfoDialog("Reintentar","Reintente grabar!!")
				return }
				
			cerrar_window()}
			else{f_cerrarForm = false}
		} // no hubo modificacion
		else 
			{f_cerrarForm = true
			 reservasatendi = 3 

			try {databaseManager.saveData(foundset)}
			catch (msg){
				(plugins.dialogs.showInfoDialog("Error al grabar tbc_reservas al 'salir'",msg.toString(),"ok"))
			}	
			error1=''
			error2=''
			i = 0
			var array2 = databaseManager.getFailedRecords(foundset)
			for (i = 0; i < array2.length; i++) {
				var record2 = array2[i];
				var jstable2 = databaseManager.getTable(record2);
				var tableSQLName2 = jstable2.getSQLName();
				error1='Error de Grabación en Tabla:' + tableSQLName2 + ' en server:' + jstable2.getServerName() + ' falló la grabación. Avise a Sistemas, por favor!'
				error2='Error en grabación '+record2.exception;
				if (record2.exception.getErrorCode() == ServoyException.RECORD_VALIDATION_FAILED) {
					var thrown2 = record2.exception.getValue()
					plugins.dialogs.showErrorDialog("Error de grabación","Record validation failed: " + thrown)
				}
			}
			if(error1!=''){   // TODO  ver que se hace porque esto no se puede regrabar
				plugins.dialogs.showErrorDialog("Error en grabacion de tbc_ambula_txt",error1,"Ok")
				plugins.dialogs.showErrorDialog("Error en grabacion de tbc_ambula_txt",error2,"Ok")
				plugins.dialogs.showInfoDialog("Reintentar","Reintente grabar!!")
				return }		
		    
			 cerrar_window()
			 return
		}
	}
/*
if (globals.DIALOGS.showQuestionDialog('¡Atención!','¿Está seguro que desea salir sin grabar?', 'Si', 'No') == 'Si')
	{f_cerrarForm = true
		atcons_reservas_to_atcons_histpac_ing.deleteRecord()
		reservasatendi = 0
		cerrar_window()}
	else
	{f_cerrarForm = false}  */
}

/**
 * @properties={typeid:24,uuid:"74293BC7-E2A1-413A-8D34-0B97FB99C4BD"}
 */
function cerrar_window() {
	forms.AtCons_carga_tab.elements.tabless.tabIndex=1
	forms.AtCons_carga_tab.elements.tabless.tabIndex=2
	var $win = application.getWindow(application.getActiveWindow().getName());
	if($win != null){
		$win.hide()
		$win.destroy()
		}
}

/**
 * @param {Number} value
 *
 * @return {String}
 * @properties={typeid:24,uuid:"1378E1A6-3FDF-485A-9A02-7DD871CBAE8E"}
 */
function getHoraHHMM_deHHMMssmm(value) 
{
	var hora = String(value);
	var result = '0';
	
	if(value > 0){
		
		if(hora.length > 4)
			result = hora.substr(0,hora.length - 4);
	}
	
	return result;
}

/**
 * @properties={typeid:24,uuid:"00E7BC01-E88A-4DA0-B59F-301189626885"}
 */
function imprimir_ambula($ing) {
	forms.AtCons_imp_ambula.f_fecha_impresion = application.getServerTimeStamp()
	forms.AtCons_imp_ambula.controller.loadRecords(atcons_reservas_to_atcons_histpac_ing.atcons_histpac_ing_id) 
	
forms.AtCons_imp_ambula.f_fecped = scopes.globals.globalConverteintafecha($ing.ambulafecped, 'integer')
forms.AtCons_imp_ambula.f_horped = scopes.globals.globalConverterIntaHora($ing.ambulahorped, 'integer')
forms.AtCons_imp_ambula.f_hortra = scopes.globals.globalConverterIntaHora($ing.ambulahortra, 'integer')

forms.AtCons_imp_ambula.f_sexo = ''
if (scopes.globals.Atcons_paciente_sexo == 1)
	{forms.AtCons_imp_ambula.f_sexo = "Femenino"}
if (scopes.globals.Atcons_paciente_sexo == 2)
	{forms.AtCons_imp_ambula.f_sexo = "Masculino"}

forms.AtCons_imp_ambula.f_ambulaoxigeno = ''	
if ($ing.ambulaoxig == 0)
	{forms.AtCons_imp_ambula.f_ambulaoxigeno = "Sin Oxigeno"}
if ($ing.ambulaoxig == 1)
	{forms.AtCons_imp_ambula.f_ambulaoxigeno = "Con Oxigeno"}
	
forms.AtCons_imp_ambula.f_ambulatipo = ''	
if ($ing.ambulatipo == 1)
	{forms.AtCons_imp_ambula.f_ambulatipo = "Comun"}
if ($ing.ambulatipo == 2)
	{forms.AtCons_imp_ambula.f_ambulatipo = "Comun con medico"}	
if ($ing.ambulatipo == 3)
	{forms.AtCons_imp_ambula.f_ambulatipo = "Alta Complejidad"}

	forms.AtCons_imp_ambula.controller.setPageFormat(210,297,10,10,10,10,1,0);
	forms.AtCons_imp_ambula.controller.print(true,false)
	
}

/**
 * @properties={typeid:24,uuid:"FD881076-37F0-4E78-9020-C40CDC272AF8"}
 */
function numeracion_txt($paramid) {
	var nro_tomado = null;
	var done0 = plugins.rawSQL.executeSQL("desal", "tbl_parametros", "begin; lock table tbl_parametros in row exclusive mode;")
	if (!done0) {
		var msg0 = plugins.rawSQL.getException().getMessage(); //see exception node for more info about the exception obj
		plugins.dialogs.showErrorDialog('Error', 'SQL exception: ' + msg0, 'Ok');
	}
	var done = plugins.rawSQL.executeSQL("desal", "tbl_parametros", "select * from tbl_parametros where paramid = " + $paramid + "for update;");
	if (!done) {
		var msg = plugins.rawSQL.getException().getMessage(); //see exception node for more info about the exception obj
		plugins.dialogs.showErrorDialog('Error', 'SQL exception: ' + msg, 'Ok');
	}

	var vQuery = " SELECT contador_entero FROM tbl_parametros WHERE paramid = " + $paramid;
	var vDataset = databaseManager.getDataSetByQuery("desal", vQuery, null, 1);
	
	var done1 = plugins.rawSQL.executeSQL("desal", "tbl_parametros", "update tbl_parametros set contador_entero = contador_entero + 1 where paramid = " + $paramid + "; commit;")
	if (done1) {
		
		nro_tomado = vDataset.getValue(1,1) + 1;
	}
	else{
		var msg1 = plugins.rawSQL.getException().getMessage(); //see exception node for more info about the exception obj
		plugins.dialogs.showErrorDialog('Error', 'SQL exception: ' + msg1, 'Ok')
	}
	return nro_tomado
}

/**
 * Called before the form component is rendered.
 *
 * @param {JSRenderEvent} event the render event
 *
 * @properties={typeid:24,uuid:"D9AAFBDB-65B3-46BF-8225-E0DC0607BEC6"}
 */
function onRender_histcli(event) {
	// para que lo muestre con distinto color hasta la fecha_tope -
	//Poner onload del form si se quiere asi
	var $fecha_tope = 20181231
	var $fechahoy = application.getServerTimeStamp() 
	var $anio = $fechahoy.getFullYear()
	var $mes  = $fechahoy.getMonth() + 1
	if ($mes < 10)
		{$mes = '0' + $mes}
	var $dia  = $fechahoy.getDate()
	if ($dia < 10)
		{$dia = '0' + $dia}
	var $fectrahoy_aux  = $anio + '' + $mes + '' + $dia
	var $fecha_int = utils.stringToNumber($fectrahoy_aux )
	if ($fecha_int < $fecha_tope)
	{
		elements.hist_cli.fgcolor = '#0080ff'  // azul vivo
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"C1220F38-C7CB-490D-A690-D546264BBDFD"}
 */
function onAction_btn_cefalea(event) {
	try {databaseManager.saveData(foundset.atcons_reservas_to_atcons_histpac_ing)}
	catch (msg){
		(plugins.dialogs.showInfoDialog("Error al grabar 'En espera' en atcons_histpac_ing",msg.toString(),"ok"))
		//	application.output(msg.rhinoException.getMessage())
	}
	var error1=''
	var error2=''
	var array = databaseManager.getFailedRecords(foundset.atcons_reservas_to_atcons_histpac_ing)
	for (var i = 0; i < array.length; i++) {
		var record = array[i];
		var jstable = databaseManager.getTable(record);
		var tableSQLName = jstable.getSQLName();
		error1='Error de Grabación en Tabla:' + tableSQLName + ' en server:' + jstable.getServerName() + ' falló la grabación. Avise a Sistemas, por favor!'
		error2='Error en grabación '+record.exception;
		if (record.exception.getErrorCode() == ServoyException.RECORD_VALIDATION_FAILED) {
			var thrown = record.exception.getValue()
			plugins.dialogs.showErrorDialog("Error de grabación","Record validation failed: " + thrown)
		}
	}
	if(error1!=''){
		plugins.dialogs.showErrorDialog("Error en grabacion de atcons_histpac_ing",error1,"Ok")
		plugins.dialogs.showErrorDialog("Error en grabacion de atcons_histpac_ing",error2,"Ok")
		plugins.dialogs.showInfoDialog("Reintentar","Reintente grabar!!")
			
		return false}
	globals.vHiscli=foundset.reservashiscli
	globals.cefalea_fecha=foundset.reservasfech
	forms.Cefalea_frm_principal.f_paciente=cefalea_vhiscli_to_tbc_hist_cab_new.histcabapellnom
	forms.Cefalea_frm_principal.f_histClinUnica=globals.vHiscli
	forms.Cefalea_frm_principal.f_cobertura=cefalea_vhiscli_to_tbc_hist_cab_new.tbc_hist_cab_new_to_tbc_obras.obr_razonsoc
	forms.Cefalea_frm_principal.f_edad=globals.CalculoEdad(cefalea_vhiscli_to_tbc_hist_cab_new.histcabfechanac)
	forms.Cefalea_frm_principal.f_medico=globals.AtCons_vmedico
	globals.cefalea_leg_medico=globals.AtCons_vlega
	globals.cefalea_tip_medico=globals.AtCons_vmedico_tipo
	globals.cefalea_especial=globals.AtCons_vespecial
	inicializaFormCefalea()
	var win = application.createWindow("Cefalea_itm",JSWindow.MODAL_DIALOG)
    win.title= "Protocolo de Cefalea"
    win.resizable = true
	 win.setSize(1250,700)
	 //win.resetBounds()
    win.show(forms.Cefalea_Inicio)
}

/**
 * @properties={typeid:24,uuid:"2DD9A410-E712-4450-AA87-99BE126AF0D8"}
 */
function inicializaFormCefalea(){
	if(cefalea_vhiscli_to_tbl_cefalea.histpacnro==null||cefalea_vhiscli_to_tbl_cefalea.histpacnro==0){
		forms.Cefalea_chk_0_semiologia.controller.readOnly=false
		forms.Cefalea_chk_10_sintomas.controller.readOnly=false
		forms.Cefalea_chk_12_factores.controller.readOnly=false
		forms.Cefalea_chk_13_remision.controller.readOnly=false
		forms.Cefalea_chk_14_resolutorio.controller.readOnly=false
		forms.Cefalea_chk_1_localizacion.controller.readOnly=false
		forms.Cefalea_chk_2_caracter.controller.readOnly=false
		forms.Cefalea_chk_4_causa.controller.readOnly=false
		forms.Cefalea_chk_5_aura.controller.readOnly=false
		forms.Cefalea_chk_7_presentacion.controller.readOnly=false
		forms.Cefalea_chk_9_sintomas.controller.readOnly=false
		forms.Cefalea_chk_modelo.controller.readOnly=false
		forms.Cefalea_ec_tab.controller.readOnly=false
		forms.Cefalea_efn_tab.controller.readOnly=false
		forms.Cefalea_txt_af.controller.readOnly=false
		forms.Cefalea_txt_ap.controller.readOnly=false
		forms.Cefalea_txt_ea.controller.readOnly=false
		forms.Cefalea_txt_ec_otros.controller.readOnly=false
		forms.Cefalea_txt_ec_rmn.controller.readOnly=false
		forms.Cefalea_txt_ec_rx.controller.readOnly=false
		forms.Cefalea_txt_ec_tac.controller.readOnly=false
		forms.Cefalea_txt_efn_conciencia.controller.readOnly=false
		forms.Cefalea_txt_efn_craneales.controller.readOnly=false
		forms.Cefalea_txt_efn_lenguaje.controller.readOnly=false
		forms.Cefalea_txt_efn_motor.controller.readOnly=false
		forms.Cefalea_txt_efn_otros.controller.readOnly=false
		forms.Cefalea_txt_efn_reflejos.controller.readOnly=false
		forms.Cefalea_txt_efn_sensibilidad.controller.readOnly=false
		forms.Cefalea_txt_efn_taxia.controller.readOnly=false
		forms.Cefalea_txt_habitos.controller.readOnly=false
		forms.Cefalea_txt_mc.controller.readOnly=false
	}else{
		forms.Cefalea_chk_0_semiologia.controller.readOnly=true 
		forms.Cefalea_chk_10_sintomas.controller.readOnly=true 
		forms.Cefalea_chk_12_factores.controller.readOnly=true 
		forms.Cefalea_chk_13_remision.controller.readOnly=true
		forms.Cefalea_chk_14_resolutorio.controller.readOnly=true 
		forms.Cefalea_chk_1_localizacion.controller.readOnly=true 
		forms.Cefalea_chk_2_caracter.controller.readOnly=true 
		forms.Cefalea_chk_4_causa.controller.readOnly=true 
		forms.Cefalea_chk_5_aura.controller.readOnly=true 
		forms.Cefalea_chk_7_presentacion.controller.readOnly=true 
		forms.Cefalea_chk_9_sintomas.controller.readOnly=true 
		forms.Cefalea_chk_modelo.controller.readOnly=true 
		forms.Cefalea_ec_tab.controller.readOnly=true 
		forms.Cefalea_efn_tab.controller.readOnly=true 
		forms.Cefalea_txt_af.controller.readOnly=true 
		forms.Cefalea_txt_ap.controller.readOnly=true 
		forms.Cefalea_txt_ea.controller.readOnly=true 
		forms.Cefalea_txt_ec_otros.controller.readOnly=true 
		forms.Cefalea_txt_ec_rmn.controller.readOnly=true 
		forms.Cefalea_txt_ec_rx.controller.readOnly=true 
		forms.Cefalea_txt_ec_tac.controller.readOnly=true 
		forms.Cefalea_txt_efn_conciencia.controller.readOnly=true 
		forms.Cefalea_txt_efn_craneales.controller.readOnly=true 
		forms.Cefalea_txt_efn_lenguaje.controller.readOnly=true 
		forms.Cefalea_txt_efn_motor.controller.readOnly=true 
		forms.Cefalea_txt_efn_otros.controller.readOnly=true 
		forms.Cefalea_txt_efn_reflejos.controller.readOnly=true 
		forms.Cefalea_txt_efn_sensibilidad.controller.readOnly=true 
		forms.Cefalea_txt_efn_taxia.controller.readOnly=true 
		forms.Cefalea_txt_habitos.controller.readOnly=true 
		forms.Cefalea_txt_mc.controller.readOnly=true 
	}
}

/**
 * @properties={typeid:24,uuid:"450F3095-40B0-4BF4-9E4A-E71C5855808D"}
 */
function valida_atcons_imapdet_inf(){
	//var query = "select imapedetestado, imapdet_textoinforme from atcons_imapdet_inf where ima_resecodesp = ? and ima_resecodmed = ? and ima_resecodfech = ? and ima_resecodhora = ? ";
	var query = "select imapedetestado, imapedettextoinforme, imapedipatologico, imapedetcodinom from atcons_imapedet_inf where imapedetservicio = ? and imapedetpedido = ? ";
    var args = new Array();
    args[0]=foundset.reservasservicio;
    args[1]=foundset.reservasipedido;
    var dataset = new Array();
    f_existe_imapedi=false;
    f_largo_texto_inf=''
    dataset = databaseManager.getDataSetByQuery("bases_auxiliares", query, args, 20);
	var retorno=true
	globals.AtCons_patologico=0
	if(dataset.getMaxRowIndex()>0){
		f_existe_imapedi=true
		for(var i=1;i<=dataset.getMaxRowIndex()&&retorno;i++){
			if(!dataset.getValue(i,1)){
				globals.AtCons_codinom=dataset.getValue(i,4)
				if(atcons_to_tbc_imapedet_new.getSize()>0){
					if(atcons_to_tbc_imapedet_new.idetestado<1){
						retorno=false
					}
				}
			}else{
				f_largo_texto_inf=dataset.getValue(i,2)
				if(f_largo_texto_inf!=null){
					if(f_largo_texto_inf.length==0){
						retorno=false
					}
				}else{
					retorno=false
				}
			}
			if(dataset.getValue(i,3)!=null){
				globals.AtCons_patologico=dataset.getValue(i,3)
			}
		}
	}else{
		retorno=true
	}
	return retorno;
}

/**
 * @properties={typeid:24,uuid:"28187C7A-502D-4068-A065-589FB362D403"}
 */
function actualizar_informe_practica(){
	var query = "select imapedetcodinom, imapedetpedido, imapedetservicio, imapedetnroinforme, imapedettextoinforme from atcons_imapedet_inf where imapedetservicio = ? and imapedetpedido = ? and imapedetestado = 't'";
    var args = new Array();
    args[0]=foundset.reservasservicio;
    args[1]=foundset.reservasipedido;
    var dataset = new Array();
    dataset = databaseManager.getDataSetByQuery("bases_auxiliares", query, args, 20);
    var fecha_actual=new Date();
    fecha_actual=application.getServerTimeStamp();
    var mes=0;
	var mes_ed='';
	var dia=0;
	var dia_ed='';
	var hora=0;
	var hora_ed='';
	var min=0;
	var min_ed='';
	mes=fecha_actual.getMonth()+1;
	dia=fecha_actual.getDate();
	hora=fecha_actual.getHours();
	min=fecha_actual.getMinutes();
	if(mes<10){
		mes_ed='0'+mes
	}else{
		mes_ed=mes
	}
	if(dia<10){
		dia_ed='0'+dia
	}else{
		dia_ed=dia
	}
	if(hora<10){
		hora_ed='0'+hora
	}else{
		hora_ed=hora
	}
	if(min<10){
		min_ed='0'+min
	}else{
		min_ed=min
	}
	if(dataset.getMaxRowIndex()>0){
		globals.AtCons_nroPedido=dataset.getValue(1,2)
		globals.AtCons_servicio=dataset.getValue(1,3)
		if(atcons_to_tbc_imapedi_new.ipedestado!=2){
			atcons_to_tbc_imapedi_new.ipedfecharesul=fecha_actual.getFullYear()+''+mes_ed+''+dia_ed
			atcons_to_tbc_imapedi_new.ipedhoraresul=hora_ed+''+min_ed
			atcons_to_tbc_imapedi_new.ipedestado=2
			atcons_to_tbc_imapedi_new.ipedpatologico=globals.AtCons_patologico
			atcons_to_tbc_imapedi_new.ipedlegatecni=globals.AtCons_vlega
			atcons_to_tbc_imapedi_new.ipedtipotecni=globals.AtCons_vmedico_tipo
			
			try{
				databaseManager.saveData(atcons_to_tbc_imapedi_new.getRecord(1));
				
			} catch(msg){
				globals.DIALOGS.showErrorDialog("Error en grabación", "\nSe ha producido un error de grabación. " + '\n' + "Avise a Sistemas, por favor.", "Aceptar")
			}
			var error1 = ''
			var error2 = ''
			var array = databaseManager.getFailedRecords(atcons_to_tbc_imapedi_new)
			for (var ii = 0; ii < array.length; ii++) {
				var record = array[ii];
				var jstable = databaseManager.getTable(record);
				var tableSQLName = jstable.getSQLName();
				error1 = 'Error de Grabación en Tabla:' + tableSQLName + ' en server:' + jstable.getServerName() + ' falló la grabación. Avise urgente a Sistemas, por favor!'
				error2 = 'Error en grabación ' + record.exception;
				if (record.exception.getErrorCode() == ServoyException.RECORD_VALIDATION_FAILED) {
					// exception thrown in pre-insert/update/delete event method
					var thrown = record.exception.getValue()
		
				}
			}
	
			if (error1 != '') {
				globals.DIALOGS.showErrorDialog("Error de grabación", "Record validation failed: " + thrown)
				globals.DIALOGS.showErrorDialog("Error en grabacion ", error1, "Aceptar")
				globals.DIALOGS.showErrorDialog("Error en grabacion ", error2, "Aceptar")
			}
		}
		for(var i=1;i<=dataset.getMaxRowIndex();i++){
			globals.AtCons_codinom=dataset.getValue(i,1)
			if(atcons_to_tbc_imapedet_new.idetestado<1){
				atcons_to_tbc_imapedet_new.idetestado=1
				atcons_to_tbc_imapedet_new.idetfechainfor=fecha_actual.getFullYear()+''+mes_ed+''+dia_ed
				atcons_to_tbc_imapedet_new.idetfechareali=fecha_actual.getFullYear()+''+mes_ed+''+dia_ed
				atcons_to_tbc_imapedet_new.idethorainfor=hora_ed+''+min_ed
				atcons_to_tbc_imapedet_new.idethorareali=hora_ed+''+min_ed
				atcons_to_tbc_imapedet_new.idetinforme=dataset.getValue(i,4)
				atcons_to_tbc_imapedet_new.idetpreinfor=0
				atcons_to_tbc_imapedet_new.idetmedinfor=globals.AtCons_vlega
				atcons_to_tbc_imapedet_new.idetieinfor=globals.AtCons_vmedico_tipo
				atcons_to_tbc_imapedet_new.idetflagpasaje=1
				atcons_to_tbc_imapedet_new.idettipoinf=1
				
				try{
					databaseManager.saveData(atcons_to_tbc_imapedet_new.getRecord(1));
					
				} catch(msg){
					globals.DIALOGS.showErrorDialog("Error en grabación", "\nSe ha producido un error de grabación. " + '\n' + "Avise a Sistemas, por favor.", "Aceptar")
				}
				var error3 = ''
				var error4 = ''
				var array1 = databaseManager.getFailedRecords(atcons_to_tbc_imapedet_new)
				for (var j = 0; j < array1.length; j++) {
					var record1 = array1[j];
					var jstable1 = databaseManager.getTable(record1);
					var tableSQLName1 = jstable1.getSQLName();
					error3 = 'Error de Grabación en Tabla:' + tableSQLName1 + ' en server:' + jstable1.getServerName() + ' falló la grabación. Avise urgente a Sistemas, por favor!'
					error4 = 'Error en grabación ' + record1.exception;
					if (record1.exception.getErrorCode() == ServoyException.RECORD_VALIDATION_FAILED) {
						// exception thrown in pre-insert/update/delete event method
						var thrown1 = record1.exception.getValue()
	
					}
				}
	
				if (error3 != '') {
					globals.DIALOGS.showErrorDialog("Error de grabación", "Record validation failed: " + thrown1)
					globals.DIALOGS.showErrorDialog("Error en grabacion ", error3, "Aceptar")
					globals.DIALOGS.showErrorDialog("Error en grabacion ", error4, "Aceptar")
				}
				
				//// Texto de Informe para grabar en IMATXT
				globals.AtCons_grupo=4
				globals.AtCons_nroinforme=dataset.getValue(i,4)
				if(atcosn_vs_to_tbc_imatxt.getSize()<1){
					grabar_imatxt(dataset.getValue(i,5), globals.AtCons_servicio, globals.AtCons_nroPedido, dataset.getValue(i,4))
				}
			}
		}
	}
	globals.AtCons_patologico=null
	forms.AtCons_texto.f_informe=null
}


/**
 * TODO generated, please specify type and doc for the params
 * @param $campo1
 * @param $servicio
 * @param $pedido
 * @param $nroinforme
 *
 * @properties={typeid:24,uuid:"CAB29218-FDDE-4250-B1BF-E69C5658AF2F"}
 */
function grabar_imatxt($campo1, $servicio, $pedido, $nroinforme){
	var $fs_imatxt  = databaseManager.getFoundSet('asistencial', 'tbc_imatxt')
//  $campo1 no puede estar en blanco : fue controlado antes de ir al save que llama a este metodo
	// Primero : reemplazar caracteres especiales del campo text_area
	var $campo2 = scopes.globals.conversion_caract_espec(utils.stringTrim($campo1))
	
	/*	 	ITXT-SERVICIO  : Servicio  
			ITXT-PEDIDO    : Nro. de Pedido
			ITXT-GRUPO     : Nro. de Grupo
			                 1-Resumen y Diagnostico          
			                 2-Motivos y fundamentos          
			                 3-Preinforme                     
			                 4-Informe definitivo escrito     
			                 5-Comentario dentro de un informe
			                 6-Certificado protesis implantada
			                 7-Cuestionario para Resonancia   
			ITXT-INFORME   : Nro. de Informe dentro del pedido   
			                 Para ITXT-GRUPO = 1, 2, 6 es 0      
			ITXT-ITEM-INF  : Nro. de item (IINF-ITEM-I) dentro de
			                 un informe de un determinado pedido 
			                 Solo para ITXT-GRUPO = 5            
			ITXT-LIN-RESP  : Nro. de linea de respuesta          
			                 (IINF-LIN-RESP)                     
			                 a un item pregunta dentro de un     
			                 informe de un determinado pedido    
			                 Solo para ITXT-GRUPO = 5            
			ITXT-ATRIB       Atributo de la linea, solo para     
			                 ITXT-GRUPO = 4                      
			                 " " o C-Comun, R-Resaltado,         
			                 S-Subrayado, A-Ambos                
   */   
	// Segundo : se quitan los 'enters' y se crea nueva linea	x c/u	
	// Tercero : partir las n partes del campo text_area  separadas por los enters en n reg. de 78 caracteres, controlando que no corte una palabra
	
	var $campo = new Array();
	$campo = $campo2.split('\n', 7800);
	var $cuantas_partes = 0
	$cuantas_partes = $campo.length 
	var ii = 0
	var lineascab = 0;
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
	for (var j = 1; j < lineas + 1; j++) 
	{
		var aux_largo_final = posicionInicial + 78
		if (aux_largo_final < longitudTexto)
		{
			// var vlarguito = $campo.substr(posicionInicial, 78)  // 08/05/2018
			var vlarguito = $campo[ii].substr(posicionInicial, 78)
			if (vlarguito != '') 
			{
				++lineascab   
				$fs_imatxt.newRecord() 
				$fs_imatxt.itxtservicio  = $servicio
				$fs_imatxt.itxtpedido = $pedido   // Nro. pedido en IMAPEDI
				$fs_imatxt.itxtgrupo = 4   // Informe definitivo
				$fs_imatxt.itxtinforme = $nroinforme // Nro. de informe
				$fs_imatxt.itxtiteminf = 0
				$fs_imatxt.itxtlinresp = 0
				$fs_imatxt.itxtsecuencia = lineascab   // secuencia     
				$fs_imatxt.itxtlinea  = $campo[ii].substr(posicionInicial, 78) // texto informe
				$fs_imatxt.itxtatrib = 'C'  // texto estilo comun

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
						$fs_imatxt.itxtlinea =  $aux_tex
						}
				}
				else  // el caracter 78 es espacio
				{posicionInicial = posicionInicial + 78}
			}  // cierra if larguito   x este else de ese if no deberia pasar nunca/
		}
		else   // para el renglon que tiene menos de 78 caracteres, ultimo renlon
		{  	//var dife = longitudTexto - posicionInicial
			//$fs_txt.txt4  = $campo.substr(posicionInicial, dife)
			var $auxi_txt4 = null
			if (lineas == 1)
				{if (longitudTexto == 0)
					{$auxi_txt4 = '                                                                              '}
				else
					{$auxi_txt4 = $campo[ii].substr(0, longitudTexto)}}
			else
				{//var dife = longitudTexto - $aux_pos
				 //$fs_txt.txt4 = $campo.substr($aux_pos, dife)  // Daba error cuando dife = 0
				var dife = longitudTexto - posicionInicial
				if (dife > 0)
				{$auxi_txt4 = $campo[ii].substr(posicionInicial, dife)}
				}
			if ($auxi_txt4 != null)
			{
				++lineascab   
				
				$fs_imatxt.newRecord() 
				$fs_imatxt.itxtservicio  = $servicio
				$fs_imatxt.itxtpedido = $pedido   // Nro. pedido en IMAPEDI
				$fs_imatxt.itxtgrupo = 4   // Informe definitivo
				$fs_imatxt.itxtinforme = $nroinforme // Nro. de informe
				$fs_imatxt.itxtiteminf = 0
				$fs_imatxt.itxtlinresp = 0
				$fs_imatxt.itxtsecuencia = lineascab   // secuencia     
				$fs_imatxt.itxtlinea  = $auxi_txt4  // texto informe
				$fs_imatxt.itxtatrib = 'C'  // texto estilo comun
				
			}
			
		}
		if ($auxi_txt4 != null)
		{
		// control logintud para no tener problema al grabar en arch. cobol
		if ($fs_imatxt.itxtlinea.length > 78)
			{$fs_imatxt.itxtlinea = $fs_imatxt.itxtlinea.substr(0, 77)}
		if ($fs_imatxt.itxtlinea.length < 78)
			{$nn = $fs_imatxt.itxtlinea.length
			for (var m = $nn + 1 ; m < 79 ; m++) 
				{$fs_imatxt.itxtlinea = $fs_imatxt.itxtlinea + ' '}
			}
		}
	}
	}	
	try {databaseManager.saveData($fs_imatxt)}
	catch (msg){
		(plugins.dialogs.showInfoDialog("Error al grabar 'Motivo' en tbc_imatxt",msg.toString(),"ok"))
	}	
	var error3=''
	var error4=''
	var array2 = databaseManager.getFailedRecords($fs_imatxt)
	for (var k = 0; k < array2.length; k++) {
		var record2 = array2[k];
		var jstable2 = databaseManager.getTable(record2);
		var tableSQLName2 = jstable2.getSQLName();
		error3='Error de Grabación en Tabla:' + tableSQLName2 + ' en server:' + jstable2.getServerName() + ' falló la grabación. Avise a Sistemas, por favor!'
		error4='Error en grabación '+record2.exception;
		if (record2.exception.getErrorCode() == ServoyException.RECORD_VALIDATION_FAILED) {
			var thrown2 = record2.exception.getValue()
			plugins.dialogs.showErrorDialog("Error de grabación","Record validation failed: " + thrown2)
		}
	}
	if(error3!=''){
		plugins.dialogs.showErrorDialog("Error en grabacion ",error3,"Ok")
		plugins.dialogs.showErrorDialog("Error en grabacion ",error4,"Ok")
		plugins.dialogs.showInfoDialog("Reintentar","Reintente grabar!!")
	}
}
/**
 * Handle focus gained event of an element on the form. Return false when the focus gained event of the element itself shouldn't be triggered.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"797F2528-A22A-4FFD-BAA4-AA0E13F7F96A"}
 */
function onElementFocusGained_atcons_carga(event) {
	// TODO Auto-generated method stub
	return true
}

/**
 * Callback method when the user changes tab in a tab panel or divider position in split pane.
 *
 * @param {Number} previousIndex index of tab shown before the change
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"38FB2BC0-FA28-44FE-8447-DD00F77115C3"}
 */
function onTabChange_atcons_carga(previousIndex, event) {
	var ing = atcons_vs_to_atcons_histpac_ing
	forms.AtCons_carga.elements.tabs.setTabEnabledAt(7,false)
	if(atcons_vs_to_tbc_reservas_nrohist.reservasipedido!=0){
		forms.AtCons_carga.elements.tabs.setTabEnabledAt(7,true)
		globals.AtCons_tiene_consulta=false
		globals.AtCons_nroPedido=atcons_vs_to_tbc_reservas_nrohist.reservasipedido
		globals.AtCons_servicio=atcons_vs_to_tbc_reservas_nrohist.reservasservicio
		
		if(atcons_reservas_to_tbc_resecod.getSize()>1){
			for(var ii=1;ii<=atcons_reservas_to_tbc_resecod.getSize()&&!globals.AtCons_tiene_consulta;ii++){
				atcons_reservas_to_tbc_resecod.setSelectedIndex(ii)
				if(atcons_reservas_to_tbc_resecod.resecodnumcod==420101){
					globals.AtCons_tiene_consulta=true
				}
			}
		}else{
			globals.AtCons_tiene_consulta=false
		}
	}else{
		globals.AtCons_nroPedido=0
		globals.AtCons_servicio=0
		globals.AtCons_tiene_consulta=true
	}

	if(globals.AtCons_tiene_consulta){
		//forms.AtCons_carga_motivo.elements.histpacmotivo.requestFocus()
		if  (ing.histpacmotivo == null || ing.histpacmotivo == '' || ing.histpacmotivo == ' '){		
				forms.AtCons_carga.elements.tabs.setTabFGColorAt(1, '#E60026')
		}else{
				forms.AtCons_carga.elements.tabs.setTabFGColorAt(1, '#000000')
		}
		if  (ing.histpacdiagno == null || ing.histpacdiagno == '' ||	ing.histpacdiagno == ' '){		
				forms.AtCons_carga.elements.tabs.setTabFGColorAt(3, '#E60026')
		}else{
				forms.AtCons_carga.elements.tabs.setTabFGColorAt(3,  '#000000')
		}

	 	if  (ing.histpactratam == null || ing.histpactratam == '' ||	ing.histpactratam == ' '){
	 	 		forms.AtCons_carga.elements.tabs.setTabFGColorAt(4, '#E60026')
 	 	}else{
	 	 		forms.AtCons_carga.elements.tabs.setTabFGColorAt(4, '#000000')
	 	}
	 	/*
		forms.AtCons_carga.elements.tabs.tabIndex=1
		forms.AtCons_carga.controller.focusFirstField()
		*/
	}else{
		forms.AtCons_carga.elements.tabs.setTabEnabledAt(7,true)
		forms.AtCons_carga.elements.tabs.tabIndex=7
		forms.AtCons_carga.controller.focusFirstField()
	}

	if  (ing.histpacmotivo == '' ||   
		ing.histpacmotivo == null ||
		ing.histpacmotivo == ' ')		
		{forms.AtCons_carga.elements.tabs.setTabFGColorAt(1, '#E60026')}
	else{forms.AtCons_carga.elements.tabs.setTabFGColorAt(1, '#000000')}

	if  (ing.histpacdiagno == '' ||
	 	ing.histpacdiagno == null ||
	 	ing.histpacdiagno == ' ')		
	 {forms.AtCons_carga.elements.tabs.setTabFGColorAt(3, '#E60026')}
	else{forms.AtCons_carga.elements.tabs.setTabFGColorAt(3,  '#000000')}

	if  (ing.histpactratam == '' ||
		ing.histpactratam == null ||
		ing.histpactratam == ' ')		
	{forms.AtCons_carga.elements.tabs.setTabFGColorAt(4, '#E60026')}
	else{forms.AtCons_carga.elements.tabs.setTabFGColorAt(4, '#000000')}
	//f_cerrarForm = false


	forms.AtCons_carga.elements.btn_cefalea.visible=false
	forms.AtCons_carga.elements.btn_cefalea.enabled=false		
	if(atcons_vs_to_tbc_reservas_nrohist.reservasesp==365){
		forms.AtCons_carga.elements.btn_cefalea.visible=true
		forms.AtCons_carga.elements.btn_cefalea.enabled=true
	}




	var j=0
	if(globals.AtCons_tiene_consulta){
		for(j=1;j<=6;j++){
			forms.AtCons_carga.elements.tabs.setTabEnabledAt(j,true)
		}
	}else{
		for(j=1;j<=6;j++){
			forms.AtCons_carga.elements.tabs.setTabEnabledAt(j,false)
		}
	}

	//elements.tabless_1.enabled=false
	if(globals.AtCons_servicio!=null&&globals.AtCons_servicio!=0){
		if(atcons_to_tbc_servicios.servpatologico!=1){
			if(atcons_vs_to_atcons_imapedet_inf.getSize()>0){
				atcons_vs_to_atcons_imapedet_inf.setSelectedIndex(1)
				globals.AtCons_patologico=atcons_vs_to_atcons_imapedet_inf.imapedipatologico
			}else{
				globals.AtCons_patologico=0
			}
			forms.AtCons_carga_informe.elements.patologico_lbl.visible=true
			forms.AtCons_carga_informe.elements.patologico_cbo.visible=true
		}else{
			forms.AtCons_carga_informe.elements.patologico_lbl.visible=false
			forms.AtCons_carga_informe.elements.patologico_cbo.visible=false
			globals.AtCons_patologico=1
		}
	}else{
		forms.AtCons_carga_informe.elements.patologico_lbl.visible=false
		forms.AtCons_carga_informe.elements.patologico_cbo.visible=false
		globals.AtCons_patologico=0
	}
	application.updateUI()
}

/**
 * @properties={typeid:24,uuid:"592379FE-4714-4995-92EE-7F5E71E51780"}
 */
function graba_rend_medicam(){
	var $fecha_actual = application.getServerTimeStamp()
	var $anio=0
	$anio=$fecha_actual.getFullYear()
	var $mes = 0
	var $mes_ed = ' '
	var $dia = 0
	var $dia_ed = ' '
	var $hora = 0
	var $min = 0
	var $hora_ed = ' '
	var $min_ed = ' '
	var $planX=' '
	$dia=$fecha_actual.getDate()
	$mes=$fecha_actual.getMonth()+1
	$hora=$fecha_actual.getHours()
	$min=$fecha_actual.getMinutes()
	if($mes<10){
		$mes_ed='0'+$mes
	}else{
		$mes_ed=$mes
	}
	if($dia<10){
		$dia_ed='0'+$dia
	}else{
		$dia_ed=$dia
	}
	if($hora<10){
		$hora_ed='0'+$hora
	}else{
		$hora_ed=$hora
	}
	if($min<10){
		$min_ed='0'+$min
	}else{
		$min_ed=$min
	}
	globals.AtCons_periodo=$anio+''+$mes_ed
	if(atcons_obra_to_tbc_obras.obr_cantcierres==4){
		if($dia>=22){
			globals.AtCons_cierre=4
		}else{
			if($dia>=15){
				globals.AtCons_cierre=3
			}else{
				if($dia>=8){
					globals.AtCons_cierre=2
				}else{
					if($dia>=1){
						globals.AtCons_cierre=1
					}
				}
			}
		}
	}else{
		if(atcons_obra_to_tbc_obras.obr_cantcierres==3){
			if($dia>=21){
				globals.AtCons_cierre=3
			}else{
				if($dia>=11){
					globals.AtCons_cierre=2
				}else{
					if($dia>=1){
						globals.AtCons_cierre=1
					}
				}
			}
		}else{
			if(atcons_obra_to_tbc_obras.obr_cantcierres==2){
				if($dia>=16){
					globals.AtCons_cierre=2
				}else{
					if($dia>=1){
						globals.AtCons_cierre=1
					}
				}
			}else{
				globals.AtCons_cierre=1
			}
		}
	}
	if(atcons_vs_to_tbc_rend_cab.getSize()<1){
		atcons_vs_to_tbc_rend_cab.newRecord()
		globals.InicializarDatosDeRelacion(atcons_vs_to_tbc_rend_cab,"asistencial","tbc_rend_cab")
		//inicializar_rend_cab()
		atcons_vs_to_tbc_rend_cab.rcadmision1=2
		atcons_vs_to_tbc_rend_cab.rcadmision2=2
		atcons_vs_to_tbc_rend_cab.rcadmision3=2
		atcons_vs_to_tbc_rend_cab.rcadmision4=2
		atcons_vs_to_tbc_rend_cab.rcadmision=2
		
		atcons_vs_to_tbc_rend_cab.rcempresa1=1
		atcons_vs_to_tbc_rend_cab.rcempresa2=1
		atcons_vs_to_tbc_rend_cab.rcempresa3=1
		atcons_vs_to_tbc_rend_cab.rcempresa4=1
		atcons_vs_to_tbc_rend_cab.rcempresa5=1
		atcons_vs_to_tbc_rend_cab.rcempresa=1
		
		atcons_vs_to_tbc_rend_cab.rchclinica2=globals.AtCons_vhistcli
		atcons_vs_to_tbc_rend_cab.rchclinica3=globals.AtCons_vhistcli
		atcons_vs_to_tbc_rend_cab.rchclinica5=globals.AtCons_vhistcli
		atcons_vs_to_tbc_rend_cab.rchclinica=globals.AtCons_vhistcli
		
		atcons_vs_to_tbc_rend_cab.rccierre2=globals.AtCons_cierre
		atcons_vs_to_tbc_rend_cab.rccierre3=globals.AtCons_cierre
		atcons_vs_to_tbc_rend_cab.rccierre=globals.AtCons_cierre
		
		atcons_vs_to_tbc_rend_cab.rcperiodo2=globals.AtCons_periodo
		atcons_vs_to_tbc_rend_cab.rcperiodo6=globals.AtCons_periodo
		atcons_vs_to_tbc_rend_cab.rcperiodo=globals.AtCons_periodo
		atcons_vs_to_tbc_rend_cab.rcperiodo3=globals.AtCons_periodo
		
		atcons_vs_to_tbc_rend_cab.rcestado5=0
		atcons_vs_to_tbc_rend_cab.rcestado=0
		atcons_vs_to_tbc_rend_cab.rcobra5=globals.AtCons_obra
		atcons_vs_to_tbc_rend_cab.rcobra=globals.AtCons_obra
		atcons_vs_to_tbc_rend_cab.rcfactura=0
		atcons_vs_to_tbc_rend_cab.rctipograb=2
		
		atcons_vs_to_tbc_rend_cab.rciva=foundset.reservasiva
		
		globals.AtCons_hiscli=globals.AtCons_vhistcli
		if(atcons_tbc_reservas_to_tbc_plan_obra.getSize()>0){
			if(atcons_tbc_reservas_to_tbc_plan_obra.ploplanx!=null){
				$planX=atcons_tbc_reservas_to_tbc_plan_obra.ploplanx
			}else{
				$planX=' '
			}
		}else{
			$planX=' '
		}
		atcons_vs_to_tbc_rend_cab.rcfecha = $anio+''+$mes_ed+''+$dia_ed;
		atcons_vs_to_tbc_rend_cab.rchora = $hora_ed+''+$min_ed;
		atcons_vs_to_tbc_rend_cab.rcimpobra = 0;
		atcons_vs_to_tbc_rend_cab.rcimppaciente1 = 0;
		atcons_vs_to_tbc_rend_cab.rcimppaciente2 = 0;
		atcons_vs_to_tbc_rend_cab.rcimpfiller = 0;
		atcons_vs_to_tbc_rend_cab.rcplan = $planX;
		atcons_vs_to_tbc_rend_cab.rcafiliado = atcons_vhistcli_to_tbc_hist_cab.histcab_nrobenef;
		atcons_vs_to_tbc_rend_cab.rcfechaemision = $anio+''+$mes_ed+''+$dia_ed;
		atcons_vs_to_tbc_rend_cab.rchoraemision = $hora_ed+''+$min_ed;
		atcons_vs_to_tbc_rend_cab.rcatencion = 1;
		atcons_vs_to_tbc_rend_cab.rcsecuencia = scopes.globals.numeracion_txt(27)
		if(atcons_vs_to_tbc_rend_cab.rcsecuencia > 0){
			try{
				databaseManager.saveData(atcons_vs_to_tbc_rend_cab.getRecord(1));
				
			} catch(msg){
				globals.DIALOGS.showErrorDialog("Error en grabación", "\nSe ha producido un error de grabación. " + '\n' + "Avise a Sistemas, por favor.", "Aceptar")
			}
			var error3 = ''
			var error4 = ''
			var array1 = databaseManager.getFailedRecords(atcons_vs_to_tbc_rend_cab)
			for (var j = 0; j < array1.length; j++) {
				var record1 = array1[j];
				var jstable1 = databaseManager.getTable(record1);
				var tableSQLName1 = jstable1.getSQLName();
				error3 = 'Error de Grabación en Tabla:' + tableSQLName1 + ' en server:' + jstable1.getServerName() + ' falló la grabación. Avise urgente a Sistemas, por favor!'
				error4 = 'Error en grabación ' + record1.exception;
				if (record1.exception.getErrorCode() == ServoyException.RECORD_VALIDATION_FAILED) {
					// exception thrown in pre-insert/update/delete event method
					var thrown1 = record1.exception.getValue()

				}
			}

			if (error3 != '') {
				globals.DIALOGS.showErrorDialog("Error de grabación", "Record validation failed: " + thrown1)
				globals.DIALOGS.showErrorDialog("Error en grabacion ", error3, "Aceptar")
				globals.DIALOGS.showErrorDialog("Error en grabacion ", error4, "Aceptar")
			}
		}
	}
	globals.AtCons_fecha_rend=$anio+''+$mes_ed+''+$dia_ed;
	globals.AtCons_hora_rend=$hora_ed+''+$min_ed;
	globals.AtCons_codinom=420101;
	globals.AtCons_codart_rend=8904;
	globals.AtCons_nome_panta=12;
	try{
		if(atcons_vs_to_tbc_rend_med.getSize()<1){
			insertaRegistroRendMed()
		}
	}catch(msg){
		globals.DIALOGS.showErrorDialog("Error en grabación", "\nSe ha producido un error de grabación. " + '\n' + "Avise a Sistemas, por favor.", "Aceptar")
	}
	
	globals.AtCons_nome_panta=10;
	try{
		if(atcons_vs_to_tbc_rend_det.getSize()<1){
			insertaRegistroRendDet()
		}
	}catch(msg){
		globals.DIALOGS.showErrorDialog("Error en grabación", "\nSe ha producido un error de grabación. " + '\n' + "Avise a Sistemas, por favor.", "Aceptar")
	}
	
	
}

/**
 * @properties={typeid:24,uuid:"66E1D7A5-0EC3-46DB-9734-E4C42E3425E3"}
 */
function inicializar_rend_cab(){
	atcons_vs_to_tbc_rend_cab.rcadmision1=0
	atcons_vs_to_tbc_rend_cab.rcadmision2=0
	atcons_vs_to_tbc_rend_cab.rcadmision3=0
	atcons_vs_to_tbc_rend_cab.rcadmision4=0
	atcons_vs_to_tbc_rend_cab.rcadmision=0
	atcons_vs_to_tbc_rend_cab.rcafiliado=' '
	atcons_vs_to_tbc_rend_cab.rcatencion=0
	atcons_vs_to_tbc_rend_cab.rccierre2=0
	atcons_vs_to_tbc_rend_cab.rccierre3=0
	atcons_vs_to_tbc_rend_cab.rccierre=0
	atcons_vs_to_tbc_rend_cab.rcempresa1=0
	atcons_vs_to_tbc_rend_cab.rcempresa2=0
	atcons_vs_to_tbc_rend_cab.rcempresa3=0
	atcons_vs_to_tbc_rend_cab.rcempresa4=0
	atcons_vs_to_tbc_rend_cab.rcempresa5=0
	atcons_vs_to_tbc_rend_cab.rcempresa=0
	atcons_vs_to_tbc_rend_cab.rcestado5=0
	atcons_vs_to_tbc_rend_cab.rcestado=0
	atcons_vs_to_tbc_rend_cab.rcfactura=0
	atcons_vs_to_tbc_rend_cab.rcfecha=0
	atcons_vs_to_tbc_rend_cab.rcfechaemision=0
	atcons_vs_to_tbc_rend_cab.rchclinica2=0
	atcons_vs_to_tbc_rend_cab.rchclinica3=0
	atcons_vs_to_tbc_rend_cab.rchclinica5=0
	atcons_vs_to_tbc_rend_cab.rchclinica=0
	atcons_vs_to_tbc_rend_cab.rchcturnos=0
	atcons_vs_to_tbc_rend_cab.rchora=0
	atcons_vs_to_tbc_rend_cab.rchoraemision=0
	atcons_vs_to_tbc_rend_cab.rcimpfiller=0
	atcons_vs_to_tbc_rend_cab.rcimpobra=0
	atcons_vs_to_tbc_rend_cab.rcimppaciente1=0
	atcons_vs_to_tbc_rend_cab.rcimppaciente2=0
	atcons_vs_to_tbc_rend_cab.rciva=0
	atcons_vs_to_tbc_rend_cab.rcletrafc=' '
	atcons_vs_to_tbc_rend_cab.rcmarca=0
}

/**
 * @properties={typeid:24,uuid:"9697FFE1-0DD5-4642-9F25-BEDAC62EDD32"}
 */
function insertaRegistroRendMed(){
	atcons_vs_to_tbc_rend_med.newRecord();
	globals.InicializarDatosDeRelacion(atcons_vs_to_tbc_rend_med,"asistencial","tbc_rend_med");
	
	atcons_vs_to_tbc_rend_med.rmempresa = 1;
	atcons_vs_to_tbc_rend_med.rmadmision = 2;
	atcons_vs_to_tbc_rend_med.rmadmision1 = 2;
	atcons_vs_to_tbc_rend_med.rmhclinica = globals.AtCons_vhistcli;
	atcons_vs_to_tbc_rend_med.rmperiodo = globals.AtCons_periodo;
	atcons_vs_to_tbc_rend_med.rmcierre = globals.AtCons_cierre;
	atcons_vs_to_tbc_rend_med.rmpantalla = globals.AtCons_nome_panta;
	atcons_vs_to_tbc_rend_med.rmfecha = globals.AtCons_fecha_rend;
	atcons_vs_to_tbc_rend_med.rmhora = globals.AtCons_hora_rend;
	atcons_vs_to_tbc_rend_med.rmtipo = 1;
	atcons_vs_to_tbc_rend_med.rmcodnom = globals.AtCons_codinom;
	atcons_vs_to_tbc_rend_med.rmcantidad=1;
	atcons_vs_to_tbc_rend_med.rmcodart=globals.AtCons_codart_rend;
	atcons_vs_to_tbc_rend_med.rmtipofarm=1;
	try{
		databaseManager.saveData(atcons_vs_to_tbc_rend_med.getRecord(1));
		
	} catch(msg){
		globals.DIALOGS.showErrorDialog("Error en grabación", "\nSe ha producido un error de grabación. " + '\n' + "Avise a Sistemas, por favor.", "Aceptar")
	}
	var error3 = ''
	var error4 = ''
	var array1 = databaseManager.getFailedRecords(atcons_vs_to_tbc_rend_med)
	for (var j = 0; j < array1.length; j++) {
		var record1 = array1[j];
		var jstable1 = databaseManager.getTable(record1);
		var tableSQLName1 = jstable1.getSQLName();
		error3 = 'Error de Grabación en Tabla:' + tableSQLName1 + ' en server:' + jstable1.getServerName() + ' falló la grabación. Avise urgente a Sistemas, por favor!'
		error4 = 'Error en grabación ' + record1.exception;
		if (record1.exception.getErrorCode() == ServoyException.RECORD_VALIDATION_FAILED) {
			// exception thrown in pre-insert/update/delete event method
			var thrown1 = record1.exception.getValue()

		}
	}

	if (error3 != '') {
		globals.DIALOGS.showErrorDialog("Error de grabación", "Record validation failed: " + thrown1)
		globals.DIALOGS.showErrorDialog("Error en grabacion ", error3, "Aceptar")
		globals.DIALOGS.showErrorDialog("Error en grabacion ", error4, "Aceptar")
	}
}

/**
 * @properties={typeid:24,uuid:"70D8B706-7A26-485A-A6E1-886CE00E3975"}
 */
function insertaRegistroRendDet(){
	atcons_vs_to_tbc_rend_det.newRecord();
	globals.InicializarDatosDeRelacion(atcons_vs_to_tbc_rend_det,"asistencial","tbc_rend_det");
	
	atcons_vs_to_tbc_rend_det.rdempresa = 1;
	atcons_vs_to_tbc_rend_det.rdadmision = 2;
	atcons_vs_to_tbc_rend_det.rdadmision1 = 2;
	atcons_vs_to_tbc_rend_det.rdhclinica = globals.AtCons_vhistcli;
	atcons_vs_to_tbc_rend_det.rdperiodo = globals.AtCons_periodo;
	atcons_vs_to_tbc_rend_det.rdcierre = globals.AtCons_cierre;
	atcons_vs_to_tbc_rend_det.rdpantalla = globals.AtCons_nome_panta;
	atcons_vs_to_tbc_rend_det.rdfecha = globals.AtCons_fecha_rend;
	atcons_vs_to_tbc_rend_det.rdhora = globals.AtCons_hora_rend;
	atcons_vs_to_tbc_rend_det.rdtipo = 1;
	atcons_vs_to_tbc_rend_det.rdcodnom = globals.AtCons_codinom;
	atcons_vs_to_tbc_rend_det.rdmodalidad = 4;
	atcons_vs_to_tbc_rend_det.rdfechahasta = 0;
	atcons_vs_to_tbc_rend_det.rdduracion = 0;
	atcons_vs_to_tbc_rend_det.rddias = 1;
	//atcons_vs_to_tbc_rend_det.rdcantmod = 1;
	atcons_vs_to_tbc_rend_det.rdespec=foundset.reservasesp;
	atcons_vs_to_tbc_rend_det.rdmed=foundset.reservasmed;
	
	if(atcons_gbl_to_tbc_medicos_personal.getSize()>0){
		atcons_vs_to_tbc_rend_det.rdtipomed=atcons_gbl_to_tbc_medicos_personal.medpertipoie
	}
	
	try{
		databaseManager.saveData(atcons_vs_to_tbc_rend_det.getRecord(1));
		
	} catch(msg){
		globals.DIALOGS.showErrorDialog("Error en grabación", "\nSe ha producido un error de grabación. " + '\n' + "Avise a Sistemas, por favor.", "Aceptar")
	}
	var error3 = ''
	var error4 = ''
	var array1 = databaseManager.getFailedRecords(atcons_vs_to_tbc_rend_det)
	for (var j = 0; j < array1.length; j++) {
		var record1 = array1[j];
		var jstable1 = databaseManager.getTable(record1);
		var tableSQLName1 = jstable1.getSQLName();
		error3 = 'Error de Grabación en Tabla:' + tableSQLName1 + ' en server:' + jstable1.getServerName() + ' falló la grabación. Avise urgente a Sistemas, por favor!'
		error4 = 'Error en grabación ' + record1.exception;
		if (record1.exception.getErrorCode() == ServoyException.RECORD_VALIDATION_FAILED) {
			// exception thrown in pre-insert/update/delete event method
			var thrown1 = record1.exception.getValue()

		}
	}

	if (error3 != '') {
		globals.DIALOGS.showErrorDialog("Error de grabación", "Record validation failed: " + thrown1)
		globals.DIALOGS.showErrorDialog("Error en grabacion ", error3, "Aceptar")
		globals.DIALOGS.showErrorDialog("Error en grabacion ", error4, "Aceptar")
	}
}