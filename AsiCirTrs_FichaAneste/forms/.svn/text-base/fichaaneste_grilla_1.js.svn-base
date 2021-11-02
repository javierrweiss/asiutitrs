/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"C2831A51-FAE1-4E83-B3BB-3B7F2F073A25",variableType:4}
 */
var fmedicion1 = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"79F97D55-41A4-4468-90BC-F18211512374",variableType:4}
 */
var fPasoMin = 5;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"AE5C6490-E288-4EF6-AFBC-1A46E7851AFC",variableType:93}
 */
var fFechaInicio = null;

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"F4D04D6E-6629-4F5D-ABC9-F9FCCE875F72"}
 */
function onAction_crear(event) {
	/*
	// se agrega validacion scopes.globals.fichaaneste_vfecha_inicial y $horas_total
	if (scopes.globals.fichaaneste_vfecha_inicial == null || scopes.globals.fichaaneste_vfecha_inicial == 0)  
		{scopes.globals.fichaaneste_vmensaje = 'Debe ingresar Hora de Inicio '
		//globals.DIALOGS.showInfoDialog('Aviso',scopes.globals.fichaaneste_vmensaje,"Aceptar")
		plugins.dialogs.showInfoDialog('Aviso',scopes.globals.fichaaneste_vmensaje,"Aceptar")
		}
	var $horas_total = scopes.globals.fichaaneste_horas + scopes.globals.fichaaneste_horas_agregar 
	if ($horas_total  > 12 )  
		{scopes.globals.fichaaneste_vmensaje = 'Cantidad total de Horas debe ser menor que 12 '
		//globals.DIALOGS.showInfoDialog('Aviso',scopes.globals.fichaaneste_vmensaje,"Aceptar")	   // 15/8/2019
		plugins.dialogs.showInfoDialog('Aviso',scopes.globals.fichaaneste_vmensaje,"Aceptar")
		return}	
	*/
	scopes.globals.fichaaneste_horas = scopes.globals.fichaaneste_horas + scopes.globals.fichaaneste_horas_agregar
	
	var $nombre = 'ficha_anestesica_grilla_tab'
		
	elements.tab_ficha.removeAllTabs()
	application.updateUI()

	// 16-07-2019
	var $frm_scrolls = solutionModel.getForm($nombre)
	if ($frm_scrolls != null){
		var $lbl_scroll = forms[$nombre].elements.lbl_scrolls;
		var $tab_scroll	= Packages.javax.swing.SwingUtilities.getAncestorOfClass(Packages.javax.swing.JPanel, $lbl_scroll);
		var $scrolls 	= $tab_scroll.getVisibleRect();
	}
	
	history.removeForm($nombre)
	solutionModel.removeForm($nombre)
	
	//var $no_brd = solutionModel.createLineBorder(0,'');	
	var $no_brd = solutionModel.createLineBorder(0,'#F5F7F9');		//  odd, label.odd 
	var $font1  = solutionModel.createFont('Tahoma',0,7);
	var $font2  = solutionModel.createFont('Microsoft Sans Serif',1,9);
	var $font3  = solutionModel.createFont('Microsoft Sans Serif',SM_FONTSTYLE.BOLD,9);
	
	var $xInicial 	= 05 //20 
	var $yInicial 	= 05 //10 
	var $ancho 		= 40
	var $alto 		= 15
	//*//var $cols		= fHoras * 12 //Cada 5 minutos
	//var $cols		= scopes.globals.fichaaneste_horas * 12 //Cada 5 minutos
	var $cada_n_min = 60 / scopes.globals.fichaaneste_pasomin
	var $cols		= scopes.globals.fichaaneste_horas * $cada_n_min //Cada n minutos
	
	var $valores		= buscarEscala()
	var $mediciones 	= buscarMediciones(1)
	var $mediciones2 	= buscarMediciones(2)
	var $cant 			= $valores.getMaxRowIndex()
	
	var $frm 		= solutionModel.newForm($nombre,null,'Sanatorio',false,$ancho * $cols + $xInicial*2,$alto * ($cant) + $xInicial*2)
	$frm.navigator 	= SM_DEFAULTS.NONE
	//$frm.styleClass	= 'calendario'
	$frm.scrollbars = SM_SCROLLBAR.HORIZONTAL_SCROLLBAR_AS_NEEDED
	$frm.newLabel('',0,0,0,0).name = 'lbl_scrolls'    //  16-07-2019
	
	var $met 		= 	$frm.newMethod(nuevaMedicion())
	var $met_borra 	= 	$frm.newMethod(borraMedicion())
	
	// $frm.newLabel(txt,x,y,width,height)
	fFechaInicio = scopes.globals.fichaaneste_vfecha_inicial
	//Cabecera
	var $min 		= 0
	var $txt_col 	= ''
	for (var j = 1 ; j <= $cols ; j++){
		var $fecha = new Date(fFechaInicio.getFullYear(), fFechaInicio.getMonth(), fFechaInicio.getDate(), fFechaInicio.getHours(), fFechaInicio.getMinutes()+$min,0,0)
		$txt_col = $fecha.getHours()+':'+utils.numberFormat($fecha.getMinutes(),'00')      
		var $cab = $frm.newLabel($txt_col,$xInicial  + $ancho * j,$yInicial,$ancho,$alto)   
		$cab.transparent 	= true
		//$cab.styleClass 	= 'letrachica_negrita'
		$cab.horizontalAlignment = SM_ALIGNMENT.CENTER
		$cab.borderType = $no_brd
		$cab.fontType =$font2
		$min += fPasoMin
	}
	
	var $i_m 	= 1
	$yInicial 	= 0 - $alto
	for (var i = 1 ; i <= $cant ; i++){
		var $estilo = 'even'
		if (i % 2 == 1){
			$estilo = 'odd'
		}
		var $valor_txt
		switch ($valores.getValue(i,1)){
			case 99999: 
				$valor_txt = 'Anest';
				break;
			case 99998: 
				$valor_txt = 'SatO2';
				break;
			case 99997: 
				$valor_txt = 'CO2';
				break;
			case 999999: 
				$valor_txt = 'Oper.';
				break;
			default:
			$valor_txt = $valores.getValue(i,1)
		}
		var $nro = $frm.newLabel($valor_txt,$xInicial,$yInicial + (($alto) * i)+30,$ancho,$alto)
		$nro.styleClass 	= $estilo
		$nro.horizontalAlignment = SM_ALIGNMENT.CENTER
		if ($valor_txt == 'Anest' || $valor_txt == 'SatO2' || $valor_txt == 'CO2' || $valor_txt == 'Oper.')
			{$nro.fontType =$font3}   
		else
			{$nro.fontType =$font2}
		
		for (j = 1 ; j <= $cols ; j++){
			var $min2 = (j-1)*fPasoMin
			var $dia 	= $frm.newLabel('',$xInicial + ($ancho * j),$yInicial + ($alto * i)+30,$ancho,$alto)
			$dia.styleClass = $estilo
			$dia.name		= 'btn_'+$min2+'_'+$valores.getValue(i,1)
			$dia.showClick	= false
			$dia.showFocus	= false
			$dia.onAction 	= $met
			//$dia.toolTipText = '<html>Valor: '+ $valores.getValue(i,1) + '<br>' + 'Minuto: '+j*fPasoMin + '</html>'  // CAMBIO de orden
			$fecha = new Date(fFechaInicio.getFullYear(), fFechaInicio.getMonth(), fFechaInicio.getDate(), fFechaInicio.getHours(), fFechaInicio.getMinutes()+$min2,0,0)
			$txt_col = $fecha.getHours()+':'+utils.numberFormat($fecha.getMinutes(),'00')  
			$dia.toolTipText = '<html>Hora: ' + $txt_col  + '<br>Valor: ' + $valor_txt +  '</html>'

			
			//DIBUJAR MEDICIONES
			while ($mediciones.getValue($i_m,2) && $mediciones.getValue($i_m,2) >= $valores.getValue(i,1)){
				if ($mediciones.getValue($i_m,2) == $valores.getValue(i,1)){
					
					switch ($mediciones.getValue($i_m,2)){
						case 99999: 
							$valor_txt = 'Anest';
							break;
						case 999999: 
							$valor_txt = 'Oper.';
							break;
						default:
							$mediciones.getValue($i_m,2)
					}
					$fecha = new Date(fFechaInicio.getFullYear(), fFechaInicio.getMonth(), fFechaInicio.getDate(), fFechaInicio.getHours(), fFechaInicio.getMinutes()+$mediciones.getValue($i_m,1),0,0)
					$txt_col = $fecha.getHours()+':'+utils.numberFormat($fecha.getMinutes(),'00')  
					var $txt = '<html>Hora: '+ $txt_col + '<br>' +
								'Valor: '+ $valor_txt + '<br>' + 
								$mediciones.getValue($i_m,5) +
								'</html>'
					var $inicio 			= $xInicial + ($ancho * ($mediciones.getValue($i_m,1)/fPasoMin)) + $ancho
					var $medicion			= $frm.newLabel('', $inicio, $yInicial + 30 + ($alto * i), 40, 15)
					$medicion.name 			= 'med_'+$mediciones.getValue($i_m,7)
					$medicion.formIndex 	= 99
					$medicion.background	= $mediciones.getValue($i_m,3)   // Color
					$medicion.imageMedia	= solutionModel.getMedia($mediciones.getValue($i_m,4))   // simbolo
					$medicion.showFocus 	= false
					$medicion.showClick		= false
					$medicion.toolTipText	= $txt
					$medicion.onAction		= $met_borra
					//$medicion.transparent	= true  asi no saca fondo con color
					$medicion.horizontalAlignment = SM_ALIGNMENT.CENTER
				}
				$i_m++
			}
		}		
	}
	
	for (var k = 1 ; k <= $mediciones2.getMaxRowIndex() ; k++){
		var $linea = 3//2
		if ($mediciones2.getValue(k,8) == 5){
			$linea = 4//3
		}
		$fecha = new Date(fFechaInicio.getFullYear(), fFechaInicio.getMonth(), fFechaInicio.getDate(), fFechaInicio.getHours(), fFechaInicio.getMinutes()+$mediciones2.getValue(k,1),0,0)
		$txt_col = $fecha.getHours()+':'+utils.numberFormat($fecha.getMinutes(),'00')  
		var $txt2 = '<html>Hora: '+ $txt_col + '<br>' +
					'Valor: '+ $mediciones2.getValue(k,2) + '<br>' + 
					$mediciones2.getValue(k,5) +
					'</html>'
		var $inicio2 			= $xInicial + ($ancho * ($mediciones2.getValue(k,1)/fPasoMin)) + $ancho
		var $txt_medicion2 		= $mediciones2.getValue(k,2)
		var $medicion2			= $frm.newLabel($txt_medicion2, $inicio2, $yInicial + 30 + ($alto * $linea), 40, 15)
		$medicion2.name 		= 'med_'+$mediciones2.getValue(k,7)
		$medicion2.formIndex 	= 99
		$medicion2.showFocus 	= false
		$medicion2.showClick	= false
		$medicion2.toolTipText	= $txt2
		$medicion2.onAction		= $met_borra
		$medicion2.transparent	= true
		$medicion2.styleClass	= 'negrita'
		$medicion2.horizontalAlignment = SM_ALIGNMENT.CENTER
	}
	
	forms.fichaaneste_carga.grilla_horas = scopes.globals.fichaaneste_horas
	
	forms[$nombre].controller.recreateUI()
	elements.tab_ficha.addTab($nombre)
	//16-07-2019
	if ($frm_scrolls != null){
        $lbl_scroll = forms[$nombre].elements.lbl_scrolls;
        $tab_scroll    = Packages.javax.swing.SwingUtilities.getAncestorOfClass(Packages.javax.swing.JPanel, $lbl_scroll);
        $tab_scroll.scrollRectToVisible($scrolls)
        
	}
	
}

/**
 * @properties={typeid:24,uuid:"187FFE45-48EC-43FB-944D-964BBB732175"}
 */
function buscarEscala() {
	var $ds = databaseManager.createEmptyDataSet()
	/*   original ascendente
	for (var i = 1 ; i <= 20 ; i++){
		$ds.addRow([i*10])
	}   */
	
	$ds.addRow([999999])  
	$ds.addRow([99999])
	$ds.addRow([99998])
	$ds.addRow([99997])
	
	// descendente 
	for (var i = 1 ; i <= 20 ; i++){    
		var j = 200
		$ds.addRow([j - (i-1) * 10])
	}
	return $ds
}

/**
 * @properties={typeid:24,uuid:"6181A534-37CB-4156-B5DC-2BC6F4366579"}
 */
function nuevaMedicion() {
	return 'function nuevaMedicion(event){ '+
	
	'if (forms.fichaaneste_grilla_1.fmedicion1 == 0){ '+
		'globals.DIALOGS.showWarningDialog("Aviso","Debe elegir medición antes de marcar","OK"); '+
		'forms.fichaaneste_grilla_1.elements.medicion1.requestFocus(); '+
		'return ; '+
	'} '+	

	'var $elm = event.getElementName(); '+
	'var $lim1 = $elm.indexOf("_"); '+
	'var $lim2 = $elm.lastIndexOf("_"); '+
	'var $min = $elm.substring($lim1+1, $lim2); '+
	'var $valor = $elm.substring($lim2+1, $elm.length); '+
	'if (forms.fichaaneste_grilla_1.fmedicion1 == 6 && $valor != 99999 && $valor != 99998 && $valor != 99997 && $valor != 999999){ '+
		'globals.DIALOGS.showWarningDialog("Aviso","La anestesia sólo se puede marcar en el renglón de anestesia","OK"); '+
		'return; '+
	'} '+
	'if (forms.fichaaneste_grilla_1.fmedicion1 != 6 && $valor == 99999){ '+
		'globals.DIALOGS.showWarningDialog("Aviso","Sólo se puede marcar anestesia en el renglon de anestesia","OK"); '+
		'return; '+
	'} '+
	'if (forms.fichaaneste_grilla_1.fmedicion1 != 7 && $valor == 999999){ '+
	'globals.DIALOGS.showWarningDialog("Aviso","Sólo se puede marcar operacion en el renglon de operacion","OK"); '+
	'return; '+
'} '+
	//'if (forms.fichaaneste_grilla_1.fmedicion1 == 7 && $valor != 999999){ '+
	'if (forms.fichaaneste_grilla_1.fmedicion1 == 7 && $valor != 99999 && $valor != 99998 && $valor != 99997 && $valor != 999999){ '+
	'globals.DIALOGS.showWarningDialog("Aviso","Sólo se puede marcar operación en el renglon de operación","OK"); '+
	'return; '+
'} '+
	/* // desde
	'if (forms.fichaaneste_grilla_1.fmedicion1 == 0 && $valor == 99998 ){ '+
		'forms.fichaaneste_grilla_1.fmedicion1 = 4; '+
	'} '+
	'if (forms.fichaaneste_grilla_1.fmedicion1 == 0 && $valor == 99997){ '+
		'forms.fichaaneste_grilla_1.fmedicion1 = 5; '+
	'} '+	
	*/ // hasta
	

	'if ($valor == 99998){'+
		'forms.fichaaneste_grilla_1.fmedicion1 = 4'+
	'}'+
	'if ($valor == 99997){'+
		'forms.fichaaneste_grilla_1.fmedicion1 = 5'+
	'}'+

	'var $tipo_medicion = forms.fichaaneste_grilla_1.fmedicion1; '+
	'var $auxi_tipo = "";'+
	'if ($valor == 99998 || $valor == 99997){'+
		'$tipo_medicion = ($valor == 99998) ? 4 : 5;'+
	//	'$auxi_tipo == ($tipo_medicion == 4) ? "Aviso Carga de Saturacion" : "Aviso Carga de CO2";'+
	//	'var $titu = "Aviso - Carga " + $auxi_tipo;'+
	'if ($tipo_medicion == 4) {'+
		'$valor = globals.DIALOGS.showInputDialog("Aviso - Carga Saturación","Por favor, ingrese un valor de 0 a 100");'+
		'}'+
		'else'+
		'{'+
		'$valor = globals.DIALOGS.showInputDialog("Aviso - Aviso Carga de CO2","Por favor, ingrese un valor de 0 a 100");'+
		'}'+
		'if ($valor == null  || $valor == "0" || isNaN($valor)) return;'+
		'while ($valor < 0 || $valor > 100){'+
			'$valor = globals.DIALOGS.showInputDialog("Aviso","Por favor, ingrese un valor de 0 a 100");'+
			'if ($valor == null || $valor == "0"  || isNaN($valor)) return;'+
		'}'+
	'}'+
	'var $sql = "SELECT count(*) FROM fichaaneste_det "+'+
				'"WHERE fichaaneste_cab_id = ? and min_col = ? AND tipo_medicion_cod = ? ; "; '+
	'var $args = [forms.fichaaneste_carga.fichaaneste_cab_id, $min*1, forms.fichaaneste_grilla_1.fmedicion1]; '+
	'var $ds  = databaseManager.getDataSetByQuery("desal",$sql,$args,1); '+
	'var $cuantos = $ds.getValue(1,1); '+
	'if  ($cuantos > 0) '+
	'{ '+
		
		'fichaaneste_medicion_grilla_1_cod = forms.fichaaneste_grilla_1.fmedicion1; '+
		'var $medicion1_txt	= forms.fichaaneste_grilla_1.fichaaneste_medicion_grilla_1_cod.descripcion;'+
		'plugins.dialogs.showErrorDialog("Mediciones","Ya existe medicion " + $medicion1_txt +" para el horario elegido" + "min:" + $min + " valor:" + $valor,"OK"); '+
		'return;'+
	'} '+
	'var $sql = "INSERT INTO fichaaneste_det ( " + '+
				'"fichaaneste_cab_id, tipo_medicion_cod, min_col, valor) "+ '+
				'"VALUES (?,?,?,?);" ;'+
	'var $args = [forms.fichaaneste_carga.fichaaneste_cab_id, $tipo_medicion, $min*1, $valor*1]; '+
	'plugins.rawSQL.executeSQL("desal","fichaaneste_det",$sql,$args); '+
	//'application.output(plugins.rawSQL.getException()); '+
	
	// Se pidio que no sea como sigue (cargar toda una columna) y se pueda marcar la misma medicion de izq. a der. de una sola vez si se desea 6/6/2019
	/* 
	////  desde: asi despues de marcar como primera medicion t.max. va seleccionando t.min y luego pulso para marcar toda la columna de mediciones
	'if (forms.fichaaneste_grilla_1.fmedicion1 == 3) { ' +
		'forms.fichaaneste_grilla_1.fmedicion1 = 6 ;'+
		//'forms.fichaaneste_grilla_1.elements.medicion1.bgcolor = "#FFFFFF" ;' +
		'scopes.globals.fichaaneste_med_cod = 6 ;' +
		'forms.fichaaneste_grilla_1.elements.medicion1.bgcolor = fichaaneste_medicion_grilla_1_cod.color ;' +
		'forms.fichaaneste_grilla_1.elements.medicion1.requestFocus();' +
		'application.updateUI()}; '+   
	'if (forms.fichaaneste_grilla_1.fmedicion1 == 2) { '+
		'forms.fichaaneste_grilla_1.fmedicion1 = 3 ;'+
		//'forms.fichaaneste_grilla_1.elements.medicion1.bgcolor = "#FFFFFF" ;' +
		'scopes.globals.fichaaneste_med_cod = 3 ;' +
		'forms.fichaaneste_grilla_1.elements.medicion1.bgcolor = fichaaneste_medicion_grilla_1_cod.color ;' +
		'forms.fichaaneste_grilla_1.elements.medicion1.requestFocus();' +
		'application.updateUI()}; '+   
		//'application.output("Medicion nro:  " + forms.fichaaneste_grilla_1.fmedicion1); '+	
		//'application.output("Minuto: " + $min*1); '+
		//'application.output("Valor: " + $valor*1); '+
	'if (forms.fichaaneste_grilla_1.fmedicion1 == 1) { '+
		'forms.fichaaneste_grilla_1.fmedicion1 = 2; '+
		'scopes.globals.fichaaneste_med_cod = 2 ;' +
		'forms.fichaaneste_grilla_1.elements.medicion1.bgcolor = fichaaneste_medicion_grilla_1_cod.color ;' +
		'application.updateUI(); '+
		'application.output("Medicion nro:  " + forms.fichaaneste_grilla_1.fmedicion1); '+	
		'application.output("Minuto: " + $min*1); '+
		'application.output("Valor: " + $valor*1); '+
		'forms.fichaaneste_grilla_1.elements.medicion1.requestFocus()};' +
		////  hasta
		*/
	
	// solo para ver ubicacion
	//'application.output("Medicion nro:  " + forms.fichaaneste_grilla_1.fmedicion1); '+	
	//'application.output("Minuto: " + $min*1); '+
	//'application.output("Valor: " + $valor*1); '+
	//'application.output("medicion: " + forms.fichaaneste_grilla_1.fmedicion1); '+
	'forms.fichaaneste_carga.elements.tabs.removeTabAt(2); '+
	'forms.fichaaneste_carga.elements.tabs.addTab("fichaaneste_grilla_1","Grilla","Grilla","",null,null,null,null,1);'+
	'forms.fichaaneste_carga.elements.tabs.tabIndex = 2;'+

'}'
}

/**
 * @properties={typeid:24,uuid:"E9F4379D-0986-4782-938E-438AA648DE84"}
 */
function borraMedicion(){
	return 'function borraMedicion(event){ '+
			'var $id = utils.stringToNumber(event.getElementName()); '+
			'var $sql = "DELETE FROM fichaaneste_det WHERE fichaaneste_det_id = ?";' +
			'var $args =  [$id]; '+
			'plugins.rawSQL.executeSQL("desal","fichaaneste_det",$sql,$args); '+
			'forms.fichaaneste_carga.elements.tabs.removeTabAt(2); '+
			'forms.fichaaneste_carga.elements.tabs.addTab("fichaaneste_grilla_1","Grilla","Grilla","",null,null,null,null,1);'+
			'forms.fichaaneste_carga.elements.tabs.tabIndex = 2;'+
		'}'
}

/**
 *  @param {number} $grilla_nro
 * @properties={typeid:24,uuid:"B6444344-4169-4B34-8B26-CC96926EC507"}
 */
function buscarMediciones($grilla_nro) {
	var $sql = 'SELECT min_col, valor, tipo.color, tipo.simbolo, tipo.descripcion , tipo.grilla_nro, fichaaneste_det_id, tipo.codigo '+
				'FROM fichaaneste_det med '+
				'LEFT JOIN fichaaneste_tipomedicion tipo ON tipo.codigo = med.tipo_medicion_cod '+
				'WHERE fichaaneste_cab_id = ? AND tipo.grilla_nro = ? '+
				'ORDER BY valor desc, min_col'
	
	var $args = [scopes.globals.fichaaneste_cab_id, $grilla_nro]  
	var $ds = databaseManager.getDataSetByQuery('desal',$sql,$args,-1)
/*	var $ds = databaseManager.createEmptyDataSet()
	$ds.addRow([5, 20, '#FF9900' ])
	$ds.addRow([20, 30, '#229900' ])
	$ds.addRow([50, 50, '#FFBB22' ])
	$ds.addRow([80, 70, '#BBAA00' ])
	$ds.addRow([120, 100, '#7755DD' ])*/
	return $ds
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"BA8B6772-3FF8-444B-BCD2-3566633FA513"}
 */
function onShow(firstShow, event) {

	fPasoMin = scopes.globals.fichaaneste_pasomin  // promedio : 3hs 6/6/2019
	if (scopes.globals.fichaaneste_vfecha_inicial == 0)
		{elements.fichaaneste_hora_inicio_grilla_date.requestFocus()}
	else{
	// solo esto estaba	
		elements.esperando.visible =  true
		application.updateUI()
		
		onAction_crear(event)
		
		elements.esperando.visible =  false
		application.updateUI()
		if(firstShow){
			elements.fichaaneste_hora_inicio_grilla_date.requestFocus()
			fmedicion1 = 1
			scopes.globals.fichaaneste_med_cod = fmedicion1
			elements.medicion1.bgcolor	= fichaaneste_medicion_grilla_1_cod.color}
	}
}

/**
 * Handle changed data.
 *
 * @param {Number} oldValue old value
 * @param {Number} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"5DBEA408-AAC6-4754-9929-CBBDB77C0D38"}
 */
function onDataChange_medicion1(oldValue, newValue, event) {
	scopes.globals.fichaaneste_med_cod = fmedicion1
	elements.medicion1.bgcolor	= fichaaneste_medicion_grilla_1_cod.color
	return true
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"1CFA696E-C2A1-4510-95C1-B2AFF8CB537B"}
 */
function onAction_agregar_horas(event) {
	if (forms.fichaaneste_carga.hora_inicio_grilla == null || forms.fichaaneste_carga.hora_inicio_grilla == 0)
		{onDataChange_hora_inicio_grilla(null, null, null)} // en algun caso quedaba grabada en cero
	if (onDataChange_fhoras_agregar(null, null, null))
	{
	elements.esperando.visible =  true
	application.updateUI()
	onAction_crear(event)
	scopes.globals.fichaaneste_horas_agregar = 0 
	elements.esperando.visible =  false
	application.updateUI()
	}
}

/**
 * Handle changed data.
 *
 * @param {Number} oldValue old value
 * @param {Number} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"D4B6DD09-6CF0-4741-9647-6B65F27CDA7D"}
 */
function onDataChange_fhoras_agregar(oldValue, newValue, event) {
	//16-08-2019   se pone validacion en onAction en ve de onDataChange xq da problema con los mensaes en mod_dialogs
	// limite maximo 12 horas - 6/6/2019
	if (scopes.globals.fichaaneste_horas_agregar > 10)    // por defecto arranca con 2
		{scopes.globals.fichaaneste_vmensaje = 'Horas a agregar debe ser menor que 10 '
		globals.DIALOGS.showErrorDialog('Aviso',scopes.globals.fichaaneste_vmensaje,"Aceptar")   
		//plugins.dialogs.showInfoDialog('Aviso',scopes.globals.fichaaneste_vmensaje,"Aceptar")   // 15/8/2019
		elements.hs_a_agregar.requestFocus()
		return false}
	if (scopes.globals.fichaaneste_horas_agregar < 0 )  
		{scopes.globals.fichaaneste_vmensaje = 'Horas a agregar debe ser igual o mayor que cero '
		globals.DIALOGS.showErrorDialog('Aviso',scopes.globals.fichaaneste_vmensaje,"Aceptar")    
		//plugins.dialogs.showInfoDialog('Aviso',scopes.globals.fichaaneste_vmensaje,"Aceptar")   // 15/8/2019
		elements.hs_a_agregar.requestFocus()
		return false}
	var $horas_total = scopes.globals.fichaaneste_horas + scopes.globals.fichaaneste_horas_agregar 
	if ($horas_total  > 12 )  
		{scopes.globals.fichaaneste_vmensaje = 'Cantidad total de Horas debe ser menor que 12 \n Total horas hasta el momento: '
			+ scopes.globals.fichaaneste_horas + '\n Horas a agregar: ' + scopes.globals.fichaaneste_horas_agregar 
		globals.DIALOGS.showErrorDialog('Aviso',scopes.globals.fichaaneste_vmensaje,"Aceptar")	   
		elements.hs_a_agregar.requestFocus()
		scopes.globals.fichaaneste_horas_agregar = 0
		return false}
	
	return true
}

/**
 * Handle changed data.
 *
 * @param {Date} oldValue old value
 * @param {Date} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"85D54BF7-C51D-46B2-885B-430D732BD849"}
 */
function onDataChange_hora_inicio_grilla(oldValue, newValue, event) {
	var $fec = scopes.globals.fichaaneste_hora_inicio_grilla_date
	var $hora = $fec.getHours()
	var $min  = $fec.getMinutes()
	if ($min < 10)
		{$min = '0' + $min}	
	if ($hora < 10)
		{$hora = '0' + $hora}

	scopes.globals.fichaaneste_hora_inicio_grilla =  $hora +'' + $min 
	forms.fichaaneste_carga.hora_inicio_grilla    = scopes.globals.fichaaneste_hora_inicio_grilla
	scopes.globals.fichaaneste_vfecha_inicial     = new Date($fec.getFullYear(), $fec.getMonth(), $fec.getDate(), $hora, $min ,0,0)
	forms.fichaaneste_carga.fecha_inicio          = scopes.globals.fichaaneste_vfecha_inicial
	
	return true
}
