/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"711BE3B0-8C8E-4361-B2CE-2F137D0FD988"}
 */
function onActionConfirmaFechaIngTerapia(event) {
	
	
	var fechaActual = application.getServerTimeStamp();
	var hoy = globals.FormatearFecha(fechaActual,"AAAAMMDD");
	var horahoy= globals.FormatearFecha(fechaActual,"HHMM");
	
	var fechaAux=new Date();
	fechaAux.setDate( fechaActual.getDate() - 1 );
	fechaAux.setHours(0);
	fechaAux.setMinutes(0);
	fechaAux.setMilliseconds(0);
	fechaAux.setSeconds(0,0);
	

	
	if(globals.fechaIngresoTerapia<fechaAux || globals.fechaIngresoTerapia>fechaActual){
		 plugins.dialogs.showInfoDialog("Error en Fecha","La fecha debe estar comprendida entre hoy y ayer");
		  return false;
	}
	
	if(hoy==globals.FormatearFecha(globals.fechaIngresoTerapia,'AAAAMMDD') && utils.stringToNumber(globals.horaIngresoTerapia)>utils.stringToNumber(horahoy)){ 
		 plugins.dialogs.showInfoDialog("Error en Fecha","La hora debe ser menor");
		return false;
	}
	
	if(globals.IsBlank(globals.horaIngresoTerapia)){
		 plugins.dialogs.showInfoDialog("Error en Hora","El campo 'Hora de ingreso a Terapia' no puede permanecer vacío");
		  return false;
	}
	 var resultado=0;
	  var largo = globals.horaIngresoTerapia.length;
	  var esnumero = true;
	  for (var i= 0;i<largo && esnumero == true; i++){
			if (globals.horaIngresoTerapia.charCodeAt(i)< 48 || globals.horaIngresoTerapia.charCodeAt(i) > 57){
				esnumero = false
			}
	  }
	  if (esnumero){
	    if(globals.horaIngresoTerapia>59&&globals.horaIngresoTerapia<100){
		  plugins.dialogs.showInfoDialog("Error en Hora","Valor en minutos erróneo")
		  return false;
	    }else{
		  if(globals.horaIngresoTerapia>2359){
			  plugins.dialogs.showInfoDialog("Error en Hora","Valor en Horas erróneo")
			  return false;
		  }else{
			  resultado=Math.floor(globals.horaIngresoTerapia/100);
			   resultado=resultado*100;
			  resultado=globals.horaIngresoTerapia-resultado;
			  if(resultado>59&&resultado<100){
				  plugins.dialogs.showInfoDialog("Error en Hora","Valor en minutos erróneo")
				  return false;
			  }
		  }
	    }
	 globals.horaIngresoTerapia=FormatearHora(globals.horaIngresoTerapia);
	 
		if( globals.DIALOGS.showQuestionDialog('¡Atención!','¿Está seguro que la hora cargada: '+globals.horaIngresoTerapia+' es la correcta ?', 'Sí', 'No')=='Sí'){
			if(globals.fechaIngresoTerapia && globals.horaIngresoTerapia){
				globals.fechaIngresadaTerapia=true;
				globals.confirmaFechaIngresoTerapia=true;
				globals.closeFechaIngresoTerapia=true;
				var name=application.getActiveWindow()
				name.getName()
				var $win=application.getWindow(name.getName())
				if($win!=null){
					$win.hide()
					$win.destroy()
					forms.HciutiTrs_frm_hist_clin_ingreso_utiTrs.f_cerrarForm=true;
				}
				//forms.HciutiTrs_frm_hist_clin_ingreso_utiTrs.controller.recreateUI()
				
				if(application.getApplicationType()==APPLICATION_TYPES.WEB_CLIENT)
				{	
					if(globals.fechaIngresadaTerapia){
						forms.HciutiTrs_frm_hist_clin_ingreso_utiTrs.loadHciint();
					}
					else{
						forms.HciutiTrs_frm_hist_clin_ingreso_utiTrs.limpiarForm();
						forms.HciutiTrs_frm_hist_clin_ingreso_utiTrs.elements.txt_paciente.editable=true;
						forms.HciutiTrs_frm_hist_clin_ingreso_utiTrs.elements.txt_paciente.requestFocus();
					}
				}
			}else{
				//mostrar algo
				globals.DIALOGS.showWarningDialog("Campos incompletos","Debe cargar todos los campos");
			}
			  
		}
	 
	  return true
	  }else{
		  globals.horaIngresoTerapia='';
		  return false
	  }
	  
}

/**
 * TODO generated, please specify type and doc for the params
 * @param horaparametro
 *
 * @properties={typeid:24,uuid:"03CDE07E-5726-4CFE-9284-7A79AE062C9F"}
 */
function FormatearHora(horaparametro) {
	var hora
	var hora_aux = horaparametro;
	var longitud_hora = hora_aux.length
	switch (longitud_hora) {
	case 1:
		return hora = '0:0' + hora_aux;
		break;
	case 2:
		return hora = '0:' + hora_aux;
		break;
	case 3:
		return hora = '0' + hora_aux.substr(0, 1) + ':' + hora_aux.substr(1, 2);
		break;
	case 4:
		return hora = hora_aux.substr(0, 2) + ':' + hora_aux.substr(2, 2);
		break;
	case 5:
		return hora = '0' + hora_aux.substr(0, 1) + ':' + hora_aux.substr(1, 2) + ':' + hora_aux.substr(3, 2);
		break;
	case 6:
		return hora = hora_aux.substr(0, 2) + ':' + hora_aux.substr(2, 2) + ':' + hora_aux.substr(4, 2);
		break;
	case 7:
		return hora = '0' + hora_aux.substr(0, 1) + ':' + hora_aux.substr(1, 2) + ':' + hora_aux.substr(3, 2) + ':' + hora_aux.substr(5, 2);
		break;
	case 8:
		return hora = hora_aux.substr(0, 2) + ':' + hora_aux.substr(2, 2) + ':' + hora_aux.substr(4, 2) + ':' + hora_aux.substr(6, 2);
		break;
	default:
		return '0';
		break;
	}

}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"F557573C-DB7F-4268-AA41-BBD34E32E564"}
 */
function onShow(firstShow, event) {
	globals.closeFechaIngresoTerapia=false;
	globals.confirmaFechaIngresoTerapia=false;
	globals.fechaIngresoTerapia =utils.timestampToDate( application.getServerTimeStamp());
	globals.horaIngresoTerapia=0;
	globals.minIngresoTerapia=0;
	elements.botonConfirmar.requestFocus()
}

/**
 * Handle hide window.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"06F038E3-0ED9-4084-9195-804850DA5468"}
 */
function onHide(event) {
	if(!globals.closeFechaIngresoTerapia){
		globals.DIALOGS.showInfoDialog("Atención","Para cerrar el programa debe presionar el boton Salir.","Aceptar")
		return false;
	}else{
		return true;
	}
		

}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"2CF38903-7C46-422E-8700-BBD70613C1C9"}
 */
function onActionSalir(event) {
	globals.closeFechaIngresoTerapia=true;
	globals.confirmaFechaIngresoTerapia=false;
	globals.bloquearHistClin(globals.AsiUtiTrs_hiiHisCli.toString(),false)
	var name=application.getActiveWindow()
	name.getName()
	var $win=application.getWindow(name.getName())
	if($win!=null){
		$win.hide()
		$win.destroy()
		
	}
	
	
	return true;
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"C44A9669-AC65-43AB-9E28-1CCD262AF835"}
 */
function onEnterFocusSecuence(event) {
		forms.AsiUtiTrs_dlg_fechaIngresoTerapia.elements.botonConfirmar.requestFocus();
		
}
