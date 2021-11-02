/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"23221B48-3455-4414-AA96-C9F4436F4CD0",variableType:4}
 */
var foperacion = 7;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"5614FEB1-89CF-4ECB-BCC8-8A399EC7E1EB",variableType:8}
 */
var fanestesia = 6;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"25D89ACF-0097-4D0E-8912-202EF941357A",variableType:4}
 */
var fpulso = 3;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"F2E864AB-15DE-44D8-999A-F13EEE60D75C",variableType:4}
 */
var ftension_min = 2;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"79A0BD3A-5FC9-40EC-9D26-FAD09E0CC514",variableType:4}
 */
var ftension_max = 1;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"DAF695F3-380D-497B-8393-432CEB50BCD6",variableType:4}
 */
var fmedicion1 = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"06C51569-7DAC-46F8-B087-55044ACF78D5",variableType:4}
 */
var fPasoMin = 5;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"D5304AF9-2687-46C0-B0F4-1CCF1F38943A",variableType:93}
 */
var fFechaInicio = null;

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"40D518E2-1E64-4374-8976-A2CF4478A216"}
 */
function onAction_crear(event) {
	
	scopes.globals.fichaaneste_horas = scopes.globals.fichaaneste_horas + scopes.globals.fichaaneste_horas_agregar
	
	var $nombre = 'ficha_anestesica_grilla_tab'
		
	elements.tab_ficha.removeAllTabs()
	application.updateUI()
	history.removeForm($nombre)
	solutionModel.removeForm($nombre)
	
	
	//var $no_brd = solutionModel.createLineBorder(0,'');	
	var $no_brd = solutionModel.createLineBorder(0,'#F5F7F9');		//  odd, label.odd 
	var $font2  = solutionModel.createFont('Microsoft Sans Serif',1,9);
	
	var $xInicial 	= 5 // 10 
	var $yInicial 	= 5 
	var $ancho 		= 40
	var $alto 		= 15

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
	$frm.newLabel('',0,0,0,0).name = 'lbl_scrolls'
	//var $met 		= 	$frm.newMethod(nuevaMedicion())
	//ar $met_borra 	= 	$frm.newMethod(borraMedicion())
	
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
					var $medicion			= $frm.newLabel('', $inicio, $yInicial + 30 + ($alto * i), 40, 15)
					$medicion.name 			= 'med_'+$mediciones.getValue($i_m,7)
					$medicion.formIndex 	= 99
					$medicion.background	= $mediciones.getValue($i_m,3)  // COLOR
					$medicion.imageMedia	= solutionModel.getMedia($mediciones.getValue($i_m,4))
					$medicion.showFocus 	= false
					$medicion.showClick		= false
					$medicion.toolTipText	= $txt
//  TODO   // 		$medicion.onAction		= $met_borra
					//$medicion.transparent	= true
					$medicion.horizontalAlignment = SM_ALIGNMENT.CENTER
				}
				$i_m++
			}
		}		
	}
	
	for (var k = 1 ; k <= $mediciones2.getMaxRowIndex() ; k++){
		var $linea = 3  // 2
		if ($mediciones2.getValue(k,8) == 5){
			$linea = 4  // 3
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
		//*//*//$medicion2.onAction		= $met_borra
		$medicion2.transparent	= true
		$medicion2.styleClass	= 'negrita'
		$medicion2.horizontalAlignment = SM_ALIGNMENT.CENTER
	}
	
	forms[$nombre].controller.recreateUI()
	elements.tab_ficha.addTab($nombre)
}

/**
 * @properties={typeid:24,uuid:"CEB2B2DC-5CE1-45B5-AD6F-557277C3714F"}
 */
function buscarEscala() {
	var $ds = databaseManager.createEmptyDataSet()
	/*   original ascendente
	for (var i = 1 ; i <= 20 ; i++){
		$ds.addRow([i*10])
	}   */
	
	$ds.addRow([999999]) // operacion  06/06/2019
	$ds.addRow([99999])  // anestesia
	$ds.addRow([99998])  // sat
	$ds.addRow([99997])  // co2
	// descendente 
	for (var i = 1 ; i <= 20 ; i++){
		var j=200
		$ds.addRow([j - (i-1) * 10])
	}
	return $ds
}

/**
 * @properties={typeid:24,uuid:"9AFA3897-53D8-4FD6-A1CE-895FDCD1134E"}
 */
function nuevaMedicion() {
	//forms.fichaaneste_grilla_1.elements.medicion1.bgcolor = "#FFFFFF"
		
	return 'function nuevaMedicion(event){ '+
	/*
	'if (forms.fichaaneste_grilla_1.fmedicion1 == 0){ '+
		'globals.DIALOGS.showWarningDialog("Aviso","Debe elegir medición antes de marcar","OK"); '+
		'forms.fichaaneste_grilla_1.elements.medicion1.requestFocus(); '+
		'return ; '+
	'} '+	
	*/
	'var $elm = event.getElementName(); '+
	'var $lim1 = $elm.indexOf("_"); '+
	'var $lim2 = $elm.lastIndexOf("_"); '+
	'var $min = $elm.substring($lim1+1, $lim2); '+
	'var $valor = $elm.substring($lim2+1, $elm.length); '+
	/*
	'if (forms.fichaaneste_grilla_1.fmedicion1 == 6 && $valor != 99999 && $valor != 99998 && $valor != 99997){ '+
		'globals.DIALOGS.showWarningDialog("Aviso","La anestesia sólo se puede marcar en el renglon de anestesia","OK"); '+
		'return; '+
	'} '+
	'if (forms.fichaaneste_grilla_1.fmedicion1 != 6 && $valor == 99999){ '+
		'globals.DIALOGS.showWarningDialog("Aviso","Sólo se puede marcar anestesia en el renglon de anestesia","OK"); '+
		'return; '+
	'} '+
	'var $tipo_medicion = forms.fichaaneste_grilla_1.fmedicion1; '+
	'if ($valor == 99998 || $valor == 99997){'+
		'$tipo_medicion = ($valor == 99998) ? 4 : 5;'+
		'$valor = globals.DIALOGS.showInputDialog("Aviso","Por favor, ingrese un valor de 0 a 100");'+
		'if ($valor == null  || $valor == "0" || isNaN($valor)) return;'+
		'while ($valor < 0 || $valor > 100){'+
			'$valor = globals.DIALOGS.showInputDialog("Aviso","Por favor, ingrese un valor de 0 a 100");'+
			'if ($valor == null || $valor == "0"  || isNaN($valor)) return;'+
		'}'+
	'}'+
	*/
	'var $sql = "SELECT count(*) FROM fichaaneste_det "+'+
				'"WHERE fichaaneste_cab_id = ? and min_col = ? AND tipo_medicion_cod = ? ; "; '+
	'var $args = [forms.fichaaneste_cons_tab.fichaaneste_cab_id, $min*1, forms.fichaaneste_grilla_1.fmedicion1]; '+
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
	//*//  desde
	'if (forms.fichaaneste_grilla_1.fmedicion1 == 2) { '+
		'forms.fichaaneste_grilla_1.fmedicion1 = 0 ;'+
		'forms.fichaaneste_grilla_1.elements.medicion1.bgcolor = "#FFFFFF" ;' +
		'application.updateUI(); '+
		'application.output("Medicion nro:  " + forms.fichaaneste_grilla_1.fmedicion1); '+	
		'application.output("Minuto: " + $min*1); '+
		'application.output("Valor: " + $valor*1); '+
		'forms.fichaaneste_grilla_1.elements.medicion1.requestFocus()};' +
	'if (forms.fichaaneste_grilla_1.fmedicion1 == 1) { '+
		'forms.fichaaneste_grilla_1.fmedicion1 = 2; '+
		'scopes.globals.fichaaneste_med_cod = 2 ;' +
		'forms.fichaaneste_grilla_1.elements.medicion1.bgcolor = fichaaneste_medicion_grilla_1_cod.color ;' +
		'application.updateUI(); '+
		'application.output("Medicion nro:  " + forms.fichaaneste_grilla_1.fmedicion1); '+	
		'application.output("Minuto: " + $min*1); '+
		'application.output("Valor: " + $valor*1); '+
		'forms.fichaaneste_grilla_1.elements.medicion1.requestFocus()};' +
		//*//  hasta
	'application.output("Medicion nro:  " + forms.fichaaneste_grilla_1.fmedicion1); '+	
	'application.output("Minuto: " + $min*1); '+
	'application.output("Valor: " + $valor*1); '+
	'forms.fichaaneste_carga.elements.tabs.removeTabAt(2); '+
	'forms.fichaaneste_carga.elements.tabs.addTab("fichaaneste_grilla_1","Grilla","Grilla","",null,null,null,null,1);'+
	'forms.fichaaneste_carga.elements.tabs.tabIndex = 2;'+

'}'
}

/**
 * @properties={typeid:24,uuid:"71461F54-CBEB-4C89-9F30-48EF01AF1934"}
 */
function borraMedicion(){
	return 'function borraMedicion(event){ '+
			'var $id = utils.stringToNumber(event.getElementName()); '+
			'var $sql = "DELETE FROM fichaaneste_det WHERE fichaaneste_det_id = ?";' +
			'var $args =  [$id]; '+
			'plugins.rawSQL.executeSQL("desal","fichaaneste_det",$sql,$args); '+
			'forms.fichaaneste_carga.elements.tabs.removeTabAt(2); '+
			'forms.fichaaneste_carga.elements.tabs.addTab("fichaaneste_cons_grilla_1","Grilla","Grilla","",null,null,null,null,1);'+
			'forms.fichaaneste_carga.elements.tabs.tabIndex = 2;'+
		'}'
}

/**
 *  @param {number} $grilla_nro
 * @properties={typeid:24,uuid:"BF021AF9-9E3A-4DCD-8432-4C1DA1AAB245"}
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
 * @properties={typeid:24,uuid:"2FF49719-DE23-4BA5-8B00-5C182C19335F"}
 */
function onShow(firstShow, event) {
	
	fFechaInicio = forms.fichaaneste_carga.foundset.fecha_inicio  
	elements.esperando.visible =  true
	application.updateUI()
	
	onAction_crear(event)
	
	elements.esperando.visible =  false
	application.updateUI()

}

/**
 * Called before the form component is rendered.
 *
 * @param {JSRenderEvent} event the render event
 *
 * @properties={typeid:24,uuid:"5C02B8C6-A9D5-406A-848D-C75D5091FD16"}
 */
function onRender_tmax(event) {

	scopes.globals.fichaaneste_med_cod = 1
	event.getRenderable().bgcolor = fichaaneste_medicion_grilla_1_cod.color
}

/**
 * Called before the form component is rendered.
 *
 * @param {JSRenderEvent} event the render event
 *
 * @properties={typeid:24,uuid:"AF82B3E4-1F26-417F-90E7-84BDCCC4A3EC"}
 */
function onRender_tmin(event) {
	scopes.globals.fichaaneste_med_cod = 2
	event.getRenderable().bgcolor = fichaaneste_medicion_grilla_1_cod.color
}

/**
 * Called before the form component is rendered.
 *
 * @param {JSRenderEvent} event the render event
 *
 * @properties={typeid:24,uuid:"B43A7701-A351-490F-9492-899CCD42FB98"}
 */
function onRender_pulso(event) {
	scopes.globals.fichaaneste_med_cod = 3
	event.getRenderable().bgcolor = fichaaneste_medicion_grilla_1_cod.color
	//event.getRenderable().border = 'LineBorder,1,fichaaneste_medicion_grilla_1_cod.color'
}

/**
 * Called before the form component is rendered.
 *
 * @param {JSRenderEvent} event the render event
 *
 * @properties={typeid:24,uuid:"CD93CA1A-6A38-446D-90B0-2B43F9EC51BD"}
 */
function onRender_anestesia(event) {
	scopes.globals.fichaaneste_med_cod = 6
	event.getRenderable().bgcolor = fichaaneste_medicion_grilla_1_cod.color
}

/**
 * Called before the form component is rendered.
 *
 * @param {JSRenderEvent} event the render event
 *
 * @properties={typeid:24,uuid:"9F84DB58-4B7F-4656-95DD-DC06A9AE1533"}
 */
function onRender_operacion(event) {
	scopes.globals.fichaaneste_med_cod = 7
	event.getRenderable().bgcolor = fichaaneste_medicion_grilla_1_cod.color
}
