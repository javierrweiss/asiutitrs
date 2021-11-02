/**
 * @properties={typeid:24,uuid:"4ED78456-A168-4F84-9F3D-0623EB3850BB"}
 */
function onShow(){
		
	
	if(globals.ModoLecturaVisualizarFactoresYvaloracion || !asiutitrs_rel_tbc_hojati_to_tbc_hojati.hties1erevoldia==1){
		globals.modificarCampos('AsiUtiTrs_Hoja_Factor_Riesgo_Ulcera_Presion',globals.setearEnModoLecturaCampos,null);
		forms.AsiUtiTrs_Hoja_Factor_Riesgo_Ulcera_Presion.elements.btn_Confirmar_Factor_Valoracion.enabled=false;
	}else{
		globals.modificarCampos('AsiUtiTrs_Hoja_Factor_Riesgo_Ulcera_Presion',globals.habilitarCampos,null);
		forms.AsiUtiTrs_Hoja_Factor_Riesgo_Ulcera_Presion.elements.btn_Confirmar_Factor_Valoracion.enabled=true;
	}
	
	/*asiutitrs_rel_tbc_tvp_escaras_to_tbc_tvp_escaras.tehcli=scopes.globals.AsiUtiTrs_Hoja_hiiHisCli
	asiutitrs_rel_tbc_tvp_escaras_to_tbc_tvp_escaras.tefech=scopes.globals.AsiUtiTrs_Hoja_fechaHciint
	asiutitrs_rel_tbc_tvp_escaras_to_tbc_tvp_escaras.tehora=scopes.globals.AsiUtiTrs_Hoja_horaHciint*/
	
	if(asiutitrs_rel_tbc_tvp_escaras_to_tbc_tvp_escaras.getSize()==0){
		
		asiutitrs_rel_tbc_tvp_escaras_to_tbc_tvp_escaras.newRecord();
		
		scopes.globals.InicializarDatosDeRelacion(asiutitrs_rel_tbc_tvp_escaras_to_tbc_tvp_escaras, "asistencial", "tbc_tvp_escaras")
		asiutitrs_rel_tbc_tvp_escaras_to_tbc_tvp_escaras.tefech= asiutitrs_rel_tbc_hojati_to_tbc_hojati.htifecha
		asiutitrs_rel_tbc_tvp_escaras_to_tbc_tvp_escaras.tehora= asiutitrs_rel_tbc_hojati_to_tbc_hojati.htihora
		asiutitrs_rel_tbc_tvp_escaras_to_tbc_tvp_escaras.tehcli= asiutitrs_hoja_numero_to_tbc_admision.adm_histclin;
	}
	
	globals.AsiUtiTrs_Hoja_estado_mental=asiutitrs_rel_tbc_tvp_escaras_to_tbc_tvp_escaras.teesarnell_1;
	globals.AsiUtiTrs_Hoja_Incontinencia=asiutitrs_rel_tbc_tvp_escaras_to_tbc_tvp_escaras.teesarnell_2;
	globals.AsiUtiTrs_Hoja_actividad= asiutitrs_rel_tbc_tvp_escaras_to_tbc_tvp_escaras.teesarnell_3;
	globals.AsiUtiTrs_Hoja_movilidad=asiutitrs_rel_tbc_tvp_escaras_to_tbc_tvp_escaras.teesarnell_4;
	globals.AsiUtiTrs_Hoja_nutricion=asiutitrs_rel_tbc_tvp_escaras_to_tbc_tvp_escaras.teesarnell_5;
	globals.AsiUtiTrs_Hoja_aspecto_piel=asiutitrs_rel_tbc_tvp_escaras_to_tbc_tvp_escaras.teesarnell_6;
	globals.AsiUtiTrs_Hoja_sensibilidad_cutanea=asiutitrs_rel_tbc_tvp_escaras_to_tbc_tvp_escaras.teesarnell_7;
	calcularScore();
	calcularScoreArnell();

	
	
	/*asiutitrs_rel_tbc_hojati_to_tbc_hojati.newRecord();
	asiutirs_rel*/
	
}


/**
 * @properties={typeid:24,uuid:"AA764C5B-769B-4C1E-94E2-1AACA9E83A8A"}
 */
function confirmarFactorValoracion(){
	
	var isFormValido = true;
	var mensajeAdvertencia =  "No ha sido posible guardar la solicitud. Corrija los siguientes errores y vuelva a intentar."
	
	/*
	if (globals.IsBlank(f_patologia1) || asiutitrs_rel_tbc_hojati_to_tbc_hojati.htidiagnos1<1) {
		messageError += "\nDebe ingresar al menos una patología.";*/
	
	
	if(globals.AsiUtiTrs_Hoja_estado_mental==0){
		isFormValido=false;
		mensajeAdvertencia += "\nDebe ingresar al menos una Estado Mental.";
	}
	
	
	if(globals.AsiUtiTrs_Hoja_Incontinencia==0){
		isFormValido=false;
		mensajeAdvertencia += "\nDebe ingresar una Incontinencia";
	}
	
	
	if(globals.AsiUtiTrs_Hoja_actividad==0){
		isFormValido=false;
		mensajeAdvertencia += "\nDebe ingresar al menos una Actividad";
	}
	
	
	if(globals.AsiUtiTrs_Hoja_movilidad==0){
		isFormValido=false;
		mensajeAdvertencia += "\nDebe ingresar al menos una Movilidad";
	}
	
	
	if(globals.AsiUtiTrs_Hoja_nutricion==0){
		isFormValido=false;
		mensajeAdvertencia += "\nDebe ingresar al menos una Nutrición";
	}
	
	
	if(globals.AsiUtiTrs_Hoja_aspecto_piel==0){
		isFormValido=false;
		mensajeAdvertencia += "\nDebe ingresar al menos una Sensibilidad cutanea";
	}
	
	
	if(globals.AsiUtiTrs_Hoja_sensibilidad_cutanea==0){
		isFormValido=false;
		mensajeAdvertencia += "\nDebe ingresar al menos una Estado Mental.";
	}
	
	if(!isFormValido){
		plugins.dialogs.showErrorDialog('!Alerta¡',mensajeAdvertencia,'Aceptar')
		return false;
	}
	
	try {
		asiutitrs_rel_tbc_tvp_escaras_to_tbc_tvp_escaras.teesarnell_1=globals.AsiUtiTrs_Hoja_estado_mental
		asiutitrs_rel_tbc_tvp_escaras_to_tbc_tvp_escaras.teesarnell_2=globals.AsiUtiTrs_Hoja_Incontinencia
		asiutitrs_rel_tbc_tvp_escaras_to_tbc_tvp_escaras.teesarnell_3=globals.AsiUtiTrs_Hoja_actividad
		asiutitrs_rel_tbc_tvp_escaras_to_tbc_tvp_escaras.teesarnell_4=globals.AsiUtiTrs_Hoja_movilidad
		asiutitrs_rel_tbc_tvp_escaras_to_tbc_tvp_escaras.teesarnell_5=globals.AsiUtiTrs_Hoja_nutricion
		asiutitrs_rel_tbc_tvp_escaras_to_tbc_tvp_escaras.teesarnell_6=globals.AsiUtiTrs_Hoja_aspecto_piel
		asiutitrs_rel_tbc_tvp_escaras_to_tbc_tvp_escaras.teesarnell_7=globals.AsiUtiTrs_Hoja_sensibilidad_cutanea
		calcularScore()
		calcularScoreArnell()
		
		if(globals.ModoLecturaVisualizarFactoresYvaloracion){
			//no guardar
		}else{
			//si guardar
			 databaseManager.saveData(asiutitrs_rel_tbc_tvp_escaras_to_tbc_tvp_escaras.getRecord(1));
		}
		
	} catch (e) {
		plugins.dialogs.showInfoDialog("Error al procesar escaras. Avise a Sistemas, por favor!",e.toString(),"ok")
	}
	
	globals.confirmaFactores=true;
	var $name = application.getActiveWindow().getName();
	var $win = application.getWindow($name);
	if($win!=null){
		$win.hide();
		$win.destroy();
	}
	
}
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"49DD4C64-8CD9-4FFA-956E-723335BE7164"}
 */
function onActionFactRiegoUlceraPresoinSiguiente(event) {
	var grabo = false;
	try {
		asiutitrs_rel_tbc_tvp_escaras_to_tbc_tvp_escaras.teesarnell_1=globals.AsiUtiTrs_Hoja_estado_mental
		asiutitrs_rel_tbc_tvp_escaras_to_tbc_tvp_escaras.teesarnell_2=globals.AsiUtiTrs_Hoja_Incontinencia
		asiutitrs_rel_tbc_tvp_escaras_to_tbc_tvp_escaras.teesarnell_3=globals.AsiUtiTrs_Hoja_actividad
		asiutitrs_rel_tbc_tvp_escaras_to_tbc_tvp_escaras.teesarnell_4=globals.AsiUtiTrs_Hoja_movilidad
		asiutitrs_rel_tbc_tvp_escaras_to_tbc_tvp_escaras.teesarnell_5=globals.AsiUtiTrs_Hoja_nutricion
		asiutitrs_rel_tbc_tvp_escaras_to_tbc_tvp_escaras.teesarnell_6=globals.AsiUtiTrs_Hoja_aspecto_piel
		asiutitrs_rel_tbc_tvp_escaras_to_tbc_tvp_escaras.teesarnell_7=globals.AsiUtiTrs_Hoja_sensibilidad_cutanea
		grabo = databaseManager.saveData(asiutitrs_rel_tbc_tvp_escaras_to_tbc_tvp_escaras.getRecord(1));
		
	} catch (e) {
		plugins.dialogs.showInfoDialog("Error al procesar escaras. Avise a Sistemas, por favor!",e.toString(),"ok")
	}

	return grabo;
//globals.confirmaFactores=true;
}

/**
 * Handle hide window.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"EE4388C5-A2BA-4059-A357-2D62D14896ED"}
 */
function onHideCierreFactores(event) {
	// TODO Auto-generated method stub
	
	if(globals.confirmaFactores==true){
		/*var winIngreso = application.createWindow("Valoracoin_Ulcera_Cubito",JSWindow.MODAL_DIALOG)	
	    winIngreso.title= 'Valoración de Riesgo de Ulcera por DECUBITO (Escala de Arnell)'
	    winIngreso.resizable = false	
	    winIngreso.show(forms.AsiUtiTrs_Hoja_Val_Riesgo_Ulcera_DeCubito)*/
		
		
	}else{
		if(globals.ModoLecturaVisualizarFactoresYvaloracion || !asiutitrs_rel_tbc_hojati_to_tbc_hojati.hties1erevolcc==1){
			return true;
		}else{
			plugins.dialogs.showErrorDialog("Factores","Los cambios no fueron guardados")
		}
		
	}
	return true
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
 * @properties={typeid:24,uuid:"79A9CC40-5143-4F8D-A6DC-44EF80ECDB4F"}
 */
function onDataChangeValoraciones(oldValue, newValue, event) {
	// TODO Auto-generated method stub
	
	
	calcularScoreArnell()
     
	return true
}



/**
 * @properties={typeid:24,uuid:"B0CAD874-F530-403F-8DC7-B8D5161903C2"}
 */
function calcularScore(){
   /* IF TE-ES-NEOP > 0               ADD 1 TO TE-ES-SCORE.
    IF TE-ES-CONS > 0               ADD 1 TO TE-ES-SCORE.
    IF TE-ES-QUIR > 0               ADD 1 TO TE-ES-SCORE.
    IF TE-ES-NUTR-OCCU NOT = ZEROES ADD 1 TO TE-ES-SCORE.
    IF TE-ES-APAT-OCCU NOT = ZEROES ADD 1 TO TE-ES-SCORE.
    IF TE-ES-SENS > 0               ADD 1 TO TE-ES-SCORE.
    IF TE-ES-DESH > 0               ADD 1 TO TE-ES-SCORE.*/
    var scoreCalculado = 0;
    
    if(asiutitrs_rel_tbc_tvp_escaras_to_tbc_tvp_escaras.teesneop>0){
    	scoreCalculado++;
    }
    if(asiutitrs_rel_tbc_tvp_escaras_to_tbc_tvp_escaras.teescons>0){
    	scoreCalculado++;
    }
    if(asiutitrs_rel_tbc_tvp_escaras_to_tbc_tvp_escaras.teesquir>0){
    	scoreCalculado++;
    }
    if(asiutitrs_rel_tbc_tvp_escaras_to_tbc_tvp_escaras.teessens>0){
    	scoreCalculado++;
    }
    if(asiutitrs_rel_tbc_tvp_escaras_to_tbc_tvp_escaras.teesdesh>0){
    	scoreCalculado++;
    }
    if(asiutitrs_rel_tbc_tvp_escaras_to_tbc_tvp_escaras.teesapat_1>0 ||
    asiutitrs_rel_tbc_tvp_escaras_to_tbc_tvp_escaras.teesapat_2>0 ||
    asiutitrs_rel_tbc_tvp_escaras_to_tbc_tvp_escaras.teesapat_3>0 ||
    asiutitrs_rel_tbc_tvp_escaras_to_tbc_tvp_escaras.teesapat_4>0 ||
    asiutitrs_rel_tbc_tvp_escaras_to_tbc_tvp_escaras.teesapat_5>0 ||
    asiutitrs_rel_tbc_tvp_escaras_to_tbc_tvp_escaras.teesapat_6>0 ||
    asiutitrs_rel_tbc_tvp_escaras_to_tbc_tvp_escaras.teesapat_7>0 ||
    asiutitrs_rel_tbc_tvp_escaras_to_tbc_tvp_escaras.teesapat_8>0 ||
    asiutitrs_rel_tbc_tvp_escaras_to_tbc_tvp_escaras.teesapat_9>0){
    			scoreCalculado++;
    }
    
    if(asiutitrs_rel_tbc_tvp_escaras_to_tbc_tvp_escaras.teesnutr_1>0 ||
    asiutitrs_rel_tbc_tvp_escaras_to_tbc_tvp_escaras.teesnutr_2>0 ||
    asiutitrs_rel_tbc_tvp_escaras_to_tbc_tvp_escaras.teesnutr_3>0 ||
    asiutitrs_rel_tbc_tvp_escaras_to_tbc_tvp_escaras.teesnutr_4>0 ||
    asiutitrs_rel_tbc_tvp_escaras_to_tbc_tvp_escaras.teesnutr_5>0 
    		){
    	scoreCalculado++;
    }
    asiutitrs_rel_tbc_tvp_escaras_to_tbc_tvp_escaras.teesscore=scoreCalculado;
    
    
    
}
/**
 * @properties={typeid:24,uuid:"2626768E-EC15-4D5A-82C1-C08E33CDDCF0"}
 */
function calcularScoreArnell(){
	
	
	asiutitrs_rel_tbc_tvp_escaras_to_tbc_tvp_escaras.teesarnell_1=globals.AsiUtiTrs_Hoja_estado_mental
	asiutitrs_rel_tbc_tvp_escaras_to_tbc_tvp_escaras.teesarnell_2=globals.AsiUtiTrs_Hoja_Incontinencia
	asiutitrs_rel_tbc_tvp_escaras_to_tbc_tvp_escaras.teesarnell_3=globals.AsiUtiTrs_Hoja_actividad
	asiutitrs_rel_tbc_tvp_escaras_to_tbc_tvp_escaras.teesarnell_4=globals.AsiUtiTrs_Hoja_movilidad
	asiutitrs_rel_tbc_tvp_escaras_to_tbc_tvp_escaras.teesarnell_5=globals.AsiUtiTrs_Hoja_nutricion
	asiutitrs_rel_tbc_tvp_escaras_to_tbc_tvp_escaras.teesarnell_6=globals.AsiUtiTrs_Hoja_aspecto_piel
	asiutitrs_rel_tbc_tvp_escaras_to_tbc_tvp_escaras.teesarnell_7=globals.AsiUtiTrs_Hoja_sensibilidad_cutanea
	
	
	
	var scoreArnellCalculado=0;
	
	
	var puntunacionEstadoMental=[0,1,2,3]
	var puntunacionIncontinencia=[0,2,4,6]
	var puntunacionActividad=[0,2,4,6]
	var puntunacionMovilidad=[0,2,4,6]
	var puntunacionNutricion=[0,1,2,3]
	var puntunacionAspectoPiel=[0,1,2,3]
	var puntunacionSensibilidadCutanea=[0,1,2,3]
	
	scoreArnellCalculado =
     ( ( puntunacionEstadoMental[asiutitrs_rel_tbc_tvp_escaras_to_tbc_tvp_escaras.teesarnell_1-1] ) * 1 ) +
     ( (  puntunacionIncontinencia[asiutitrs_rel_tbc_tvp_escaras_to_tbc_tvp_escaras.teesarnell_2-1] ) * 2 ) +
     ( (  puntunacionActividad[asiutitrs_rel_tbc_tvp_escaras_to_tbc_tvp_escaras.teesarnell_3-1] ) * 2 ) +
     ( ( puntunacionMovilidad[asiutitrs_rel_tbc_tvp_escaras_to_tbc_tvp_escaras.teesarnell_4-1] ) * 2 ) +
     ( (  puntunacionNutricion[asiutitrs_rel_tbc_tvp_escaras_to_tbc_tvp_escaras.teesarnell_5-1]) * 1 ) +
     ( ( puntunacionAspectoPiel[asiutitrs_rel_tbc_tvp_escaras_to_tbc_tvp_escaras.teesarnell_6-1] ) * 1 ) +
     ( (  puntunacionSensibilidadCutanea[asiutitrs_rel_tbc_tvp_escaras_to_tbc_tvp_escaras.teesarnell_7-1] ) * 1 );
	
	asiutitrs_rel_tbc_tvp_escaras_to_tbc_tvp_escaras.tearnellscore=scoreArnellCalculado;
	
	
}