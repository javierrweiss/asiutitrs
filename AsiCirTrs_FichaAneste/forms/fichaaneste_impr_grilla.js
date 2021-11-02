/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"0089D176-6AF9-4645-ABA9-A4E43DE2A738",variableType:4}
 */
var foperacion = 7;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"FB025AA4-59ED-4BBF-8EE6-B89F9584CB24",variableType:8}
 */
var fanestesia = 6;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"B0C5244F-0828-424E-A07E-AB94E92F0396",variableType:4}
 */
var fpulso = 3;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"FA66DF42-9142-4DDF-A473-07A72967F7DD",variableType:4}
 */
var ftension_min = 2;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"C1F0CFC7-7B1B-45DF-9F71-BB78DB43AAFC",variableType:4}
 */
var ftension_max = 1;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"0B6A8EF4-8341-40BC-998F-E8DE026C8708",variableType:4}
 */
var fmedicion1 = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"295F82C4-C641-4864-985B-6DD4D4EDBEFF",variableType:4}
 */
var fPasoMin = 5;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"EAF9862E-8815-4FFD-93BF-8A07C0B0D52C",variableType:93}
 */
var fFechaInicio = null;

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"6D9B3E95-88AA-41E9-9327-E2655913CCD9"}
 */
function onAction_crear(event) {
	
	scopes.globals.fichaaneste_horas = scopes.globals.fichaaneste_horas + scopes.globals.fichaaneste_horas_agregar
	
	var $nombre = 'ficha_anestesica_grilla_tab_0'
		
	elements.tab_ficha.removeAllTabs()
	history.removeForm($nombre)
	solutionModel.removeForm($nombre)
	
	
	//var $no_brd = solutionModel.createLineBorder(0,'');	
	var $no_brd = solutionModel.createLineBorder(0,'#F5F7F9');		//  odd, label.odd 
	var $font   = solutionModel.createFont('Tahoma',0,7);

	var $xInicial 	= 5 //10 
	var $yInicial 	= 1 //5 
	var $ancho 		= 20
	var $alto 		= 10

	//var $cols		= scopes.globals.fichaaneste_horas * 12 //Cada 5 minutos
	var $cada_n_min = 60 / scopes.globals.fichaaneste_pasomin
	var $cols		= scopes.globals.fichaaneste_horas * $cada_n_min //Cada n minutos
	
	var $valores		= buscarEscala()
	var $mediciones 	= buscarMediciones(1)
	var $mediciones2 	= buscarMediciones(2)
	var $cant 			= $valores.getMaxRowIndex()
	
	var $frm 		= solutionModel.newForm($nombre,null,'Sanatorio',false,$ancho * $cols + $xInicial*2,$alto * ($cant) + $xInicial*2)
	$frm.navigator 	= SM_DEFAULTS.NONE
	$frm.scrollbars = SM_SCROLLBAR.HORIZONTAL_SCROLLBAR_AS_NEEDED
	$frm.transparent = true  // TODO
	$frm.newLabel('',0,0,0,0).name = 'lbl_scrolls'
	var $met 		= 	$frm.newMethod(nuevaMedicion())  // TODO creo que no se usa aqui en impresion junto con $met_borra
	//*//*//var $met_borra 	= 	$frm.newMethod(borraMedicion())
	
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
		$cab.fontType = $font
		$min += fPasoMin
	}
	var $i_m 	= 1
	$yInicial 	= 0 - $alto

	for (var i = 1 ; i <= $cant ; i++){
		/* var $estilo = 'even'
		if (i % 2 == 1){
			$estilo = 'odd'
		} */
		//var $estilo = '' 
		var $estilo = 	'odd'  // TODO ver si es menos gris al imprimir
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
		$nro.fontType =$font
		
		for (j = 1 ; j <= $cols ; j++){
			var $min2 = (j-1)*fPasoMin
			var $dia 	= $frm.newLabel('',$xInicial + ($ancho * j),$yInicial + ($alto * i)+30,$ancho,$alto)
			$dia.styleClass = $estilo
			$dia.name		= 'btn_'+$min2+'_'+$valores.getValue(i,1)
			$dia.showClick	= false
			$dia.showFocus	= false
//  TODO  //$dia.onAction 	= $met
			$fecha = new Date(fFechaInicio.getFullYear(), fFechaInicio.getMonth(), fFechaInicio.getDate(), fFechaInicio.getHours(), fFechaInicio.getMinutes()+$min2,0,0)
			$txt_col = $fecha.getHours()+':'+utils.numberFormat($fecha.getMinutes(),'00')  
			$dia.toolTipText = '<html>Hora: ' + $txt_col  + '<br>Valor: ' + $valor_txt +  '</html>'
			$dia.fontType = $font
			
			//DIBUJAR MEDICIONES
			while ($mediciones.getValue($i_m,2) && $mediciones.getValue($i_m,2) >= $valores.getValue(i,1)){
				if ($mediciones.getValue($i_m,2) == $valores.getValue(i,1)){
					
					switch ($mediciones.getValue($i_m,2)){
						case 99999: 
							$valor_txt = 'Anest';
							break;
						case 999999:    // VA?
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
					var $medicion			= $frm.newLabel('', $inicio, $yInicial + 30 + ($alto * i), 20, 10)
					// var $medicion			= $frm.newLabel('', $inicio, $yInicial + 30 + ($alto * i), 40, 15)
					$medicion.name 			= 'med_'+$mediciones.getValue($i_m,7)
					$medicion.formIndex 	= 99
	  // TODO color $medicion.background	= $mediciones.getValue($i_m,3)
					$medicion.imageMedia	= solutionModel.getMedia($mediciones.getValue($i_m,4))
					$medicion.showFocus 	= false
					$medicion.showClick		= false
					$medicion.toolTipText	= $txt
//  TODO   // 		$medicion.onAction		= $met_borra
					//$medicion.transparent	= true
					$medicion.horizontalAlignment = SM_ALIGNMENT.CENTER
					$medicion.fontType    = $font
					$medicion.transparent = true
				}
				$i_m++
			}
		}		
	}
	
	for (var k = 1 ; k <= $mediciones2.getMaxRowIndex() ; k++){
		var $linea = 3 //2
		if ($mediciones2.getValue(k,8) == 5){
			$linea = 4 //3
		}
		$fecha = new Date(fFechaInicio.getFullYear(), fFechaInicio.getMonth(), fFechaInicio.getDate(), fFechaInicio.getHours(), fFechaInicio.getMinutes()+$mediciones2.getValue(k,1),0,0)
		$txt_col = $fecha.getHours()+':'+utils.numberFormat($fecha.getMinutes(),'00')  
		var $txt2 = '<html>Hora: '+ $txt_col + '<br>' +
					'Valor: '+ $mediciones2.getValue(k,2) + '<br>' + 
					$mediciones2.getValue(k,5) +
					'</html>'
		var $inicio2 			= $xInicial + ($ancho * ($mediciones2.getValue(k,1)/fPasoMin)) + $ancho
		var $txt_medicion2 		= $mediciones2.getValue(k,2)
		var $medicion2			= $frm.newLabel($txt_medicion2, $inicio2, $yInicial + 30 + ($alto * $linea), 20, 10)
		//var $medicion2			= $frm.newLabel($txt_medicion2, $inicio2, $yInicial + 30 + ($alto * $linea), 40, 15)
		$medicion2.name 		= 'med_'+$mediciones2.getValue(k,7)
		$medicion2.formIndex 	= 99
		$medicion2.showFocus 	= false
		$medicion2.showClick	= false
		$medicion2.toolTipText	= $txt2
		//*//*//$medicion2.onAction		= $met_borra
		$medicion2.transparent	= true
		$medicion2.styleClass	= 'negrita'
		$medicion2.horizontalAlignment = SM_ALIGNMENT.CENTER
		$medicion2.fontType     = $font
		$medicion2.transparent  = true
	}
	
	forms[$nombre].controller.recreateUI()
	elements.tab_ficha.addTab($nombre)
}

/**
 * @properties={typeid:24,uuid:"15160DD1-66C3-45E9-B86B-2A481461DFB7"}
 */
function buscarEscala() {
	var $ds = databaseManager.createEmptyDataSet()
	/*   original ascendente
	for (var i = 1 ; i <= 20 ; i++){
		$ds.addRow([i*10])
	}   */
	$ds.addRow([999999])  // TODO ver medicion "operacion"  06/06/2019
	$ds.addRow([99999])
	$ds.addRow([99998])
	$ds.addRow([99997])
	// descendente 
	for (var i = 1 ; i <= 20 ; i++){
		var j=200
		$ds.addRow([j - (i-1) * 10])
	}
	return $ds
}

/**
 * @properties={typeid:24,uuid:"1E50E563-5142-4A96-9091-E70CE16EE78E"}
 */
function nuevaMedicion() {
	//forms.fichaaneste_grilla_1.elements.medicion1.bgcolor = "#FFFFFF"
		
	return 'function nuevaMedicion(event){ '+
	'var $elm = event.getElementName(); '+
	'var $lim1 = $elm.indexOf("_"); '+
	'var $lim2 = $elm.lastIndexOf("_"); '+
	'var $min = $elm.substring($lim1+1, $lim2); '+
	'var $valor = $elm.substring($lim2+1, $elm.length); '+
	'var $sql = "INSERT INTO fichaaneste_det ( " + '+
				'"fichaaneste_cab_id, tipo_medicion_cod, min_col, valor) "+ '+
				'"VALUES (?,?,?,?);" ;'+
	'var $args = [forms.fichaaneste_cons_tab.fichaaneste_cab_id, $tipo_medicion, $min*1, $valor*1]; '+
	'plugins.rawSQL.executeSQL("desal","fichaaneste_det",$sql,$args); '+
	//'application.output(plugins.rawSQL.getException()); '+
	/*
	'application.output("Medicion nro:  " + forms.fichaaneste_impr_grilla.fmedicion1); '+	
	'application.output("Minuto: " + $min*1); '+
	'application.output("Valor: " + $valor*1); '+
	*/
	'forms.fichaaneste_cons_tab.elements.tabs.removeTabAt(2); '+
	'forms.fichaaneste_cons_tab.elements.tabs.addTab("fichaaneste_impr_grilla","Grilla","Grilla","",null,null,null,null,1);'+
	'forms.fichaaneste_cons_tab.elements.tabs.tabIndex = 2;'+

'}'
}

/**
 *  @param {number} $grilla_nro
 * @properties={typeid:24,uuid:"2BFAE9B6-6475-4415-BBF5-2450F9C5458E"}
 */
function buscarMediciones($grilla_nro) {
	var $sql = 'SELECT min_col, valor, tipo.color, tipo.simbolo, tipo.descripcion , tipo.grilla_nro, fichaaneste_det_id, tipo.codigo '+
				'FROM fichaaneste_det med '+
				'LEFT JOIN fichaaneste_tipomedicion tipo ON tipo.codigo = med.tipo_medicion_cod '+
				'WHERE fichaaneste_cab_id = ? AND tipo.grilla_nro = ? '+
				'ORDER BY valor desc, min_col'
	
	var $args = [scopes.globals.fichaaneste_cab_id, $grilla_nro]  
	var $ds = databaseManager.getDataSetByQuery('desal',$sql,$args,-1)

	return $ds
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"1D236B66-57FA-42CA-B254-ED9322F6C955"}
 */
function onShow(firstShow, event) {
	onAction_crear(event)
}

/**
 * Called before the form component is rendered.
 *
 * @param {JSRenderEvent} event the render event
 *
 * @properties={typeid:24,uuid:"59EE00B4-2656-4C98-AA3B-4A75D2B17B44"}
 */
function onRender_tmax(event) {
	onAction_crear(event)   // TODO   10/07/2019
	//scopes.globals.fichaaneste_med_cod = 1
	//event.getRenderable().bgcolor = fichaaneste_medicion_grilla_1_cod.color
}

/**
 * Called before the form component is rendered.
 *
 * @param {JSRenderEvent} event the render event
 *
 * @properties={typeid:24,uuid:"A0594F6E-20EF-4969-A37A-ED83E609E448"}
 */
function onRender_tmin(event) {
	//scopes.globals.fichaaneste_med_cod = 2
	//event.getRenderable().bgcolor = fichaaneste_medicion_grilla_1_cod.color
}

/**
 * Called before the form component is rendered.
 *
 * @param {JSRenderEvent} event the render event
 *
 * @properties={typeid:24,uuid:"2C392B88-FD28-495B-8214-D53EE6EE865D"}
 */
function onRender_pulso(event) {
	//scopes.globals.fichaaneste_med_cod = 3
	//event.getRenderable().bgcolor = fichaaneste_medicion_grilla_1_cod.color
	//*//event.getRenderable().border = 'LineBorder,1,fichaaneste_medicion_grilla_1_cod.color'
}

/**
 * Called before the form component is rendered.
 *
 * @param {JSRenderEvent} event the render event
 *
 * @properties={typeid:24,uuid:"C535647B-2E60-4F50-977F-3933E17EB072"}
 */
function onRender_anestesia(event) {
	//scopes.globals.fichaaneste_med_cod = 6
	//event.getRenderable().bgcolor = fichaaneste_medicion_grilla_1_cod.color
}
