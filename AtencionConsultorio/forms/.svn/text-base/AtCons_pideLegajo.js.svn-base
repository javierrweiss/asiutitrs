/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"C443F0B1-2EE7-41A4-A1C4-89936F37CBEF"}
 */
var legajo_alfa = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"A32C0485-892A-46A0-ACA8-468C3A7522C8",variableType:4}
 */
var f_hubo_especial = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"6098C6F4-56E6-4B24-936D-BC74B3196553",variableType:4}
 */
var f_hubo_grilla = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"091B7883-1E65-48FF-83BF-16603504F373",variableType:4}
 */
var es_externo = null;

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"D529C872-78B9-4F0E-938E-5F5D58131173"}
 */
function onAction_salir(event) {
	//application.setNumpadEnterAsFocusNextEnabled(false)
	//application.exit()  // para usar fuera de menu -  quitar cuando se ponga en menu
	
	//var $win = application.getWindow(application.getActiveWindow().getName());  
	var $win = application.getWindow("Menu_itm");
	if ($win != null){
		$win.hide() 
		$win.destroy()}
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"48A407B3-8893-4DB8-B508-FE6ED5A195F7"}
 */
function onShow(firstShow, event) {
	//application.setNumpadEnterAsFocusNextEnabled(true) // ya esta seteado
	scopes.globals.AtCons_vclave = null
	scopes.globals.AtCons_vlega = 0
	scopes.globals.AtCons_vlegajo = null
	scopes.globals.AtCons_vmedico = ''
	scopes.globals.AtCons_vpassmedico = ''
	forms.AtCons_pideLegajo.elements.legajo.requestFocus()
	scopes.globals.AtCons_vfecha = application.getServerTimeStamp() 
	var $anio = scopes.globals.AtCons_vfecha.getFullYear()
    var $mes  = scopes.globals.AtCons_vfecha.getMonth() + 1
    var $dia  = scopes.globals.AtCons_vfecha.getDate()
	if ($dia < 10)
		{$dia = '0' + $dia}
	if ($mes < 10)
		{$mes = '0' +$mes}
	scopes.globals.AtCons_vfecha_integer = $anio + '' + $mes + '' + $dia
	scopes.globals.AtCons_dieta_cod  = null
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
 * @properties={typeid:24,uuid:"7037C542-6C95-4A5E-838D-31F90C5CD703"}
 */
function onDataChange_clave(oldValue, newValue, event) {
	if (newValue == ''){scopes.globals.AtCons_vclave = null} // 27/4/2018
	if (!validar_clave())  
		 {forms.AtCons_pideLegajo.elements.clave.requestFocus()}
	else {
		if (scopes.globals.AtCons_vespecial == null || scopes.globals.AtCons_vespecial == 0) {
		forms.AtCons_pideLegajo.elements.especialidad.requestFocus()}
	}
	return 
}

/**
 * @properties={typeid:24,uuid:"0815FDA7-E3CA-4E86-A790-0C4062FDE7C9"}
 */
function validar_clave() {
	// buscar en hor-per
	scopes.globals.AtCons_vhor_peredias = 0
	scopes.globals.AtCons_vhor_peresemana = 0
	scopes.globals.AtCons_vhor_perlega = scopes.globals.AtCons_vlega
  	scopes.globals.AtCons_vhor_pertipo = globals.AtCons_vmedico_tipo
  	scopes.globals.AtCons_vpassmedico = ''
	if (atcons_vhorper_to_tbc_horper.getSize() > 0 )
	{
		if (atcons_vhorper_to_tbc_horper.hor_perclave != scopes.globals.AtCons_vclave)	
		{scopes.globals.AtCons_vpassmedico = 'Clave Invalida '
		scopes.globals.AtCons_vclave = null
		forms.AtCons_pideLegajo.elements.clave.requestFocus()
		return false}
		else
		{return true}	
	}
	else
	{
		forms.AtCons_pideLegajo.elements.clave.requestFocus()
		scopes.globals.AtCons_vpassmedico= 'Clave NO existe en HORPER '
		scopes.globals.AtCons_vclave = null
		forms.AtCons_pideLegajo.elements.clave.requestFocus()
		 return false
	}
}

/**
 * @properties={typeid:24,uuid:"CE847F6A-82A2-4CD9-BED6-B870D2DBD522"}
 * @AllowToRunInFind
 */
function validar_legajo() 
{	
	if(scopes.globals.AtCons_vlegajo != 0 && scopes.globals.AtCons_vlegajo != null && scopes.globals.AtCons_vlegajo != ''){
		scopes.globals.AtCons_vlega   = scopes.globals.AtCons_vlegajo
		scopes.globals.AtCons_vlargo  = scopes.globals.AtCons_vlega.toString().length - 1;
		if(globals.AtCons_vlargo != 0 ) 
		{
			globals.AtCons_vlega = globals.AtCons_vlega.toString().substr(0,globals.AtCons_vlargo)
			//scopes.globals.AtCons_vdigito_verificador = utils.stringToNumber(globals.AtCons_vlegajo.toString().substr(globals.AtCons_vlargo, 1))

				if (atcons_vlegajo_to_tbc_medtur.getSize() > 0) 
				{ //existe en medtur
				/*	if (atcons_vlegajo_to_tbc_medtur.medturbaja == 1)  // dado de baja en medtur
					{	scopes.globals.AtCons_vmedico = 'No existe en medtur'
						forms.AtCons_pideLegajo.elements.legajo.requestFocus()
						return false
					}  
					else  // NO dado de baja en medtur */
					if (atcons_vlegajo_to_tbc_medtur_no_baja.getSize() == 0)  // especialidad dada de baja en medtur?
					{	scopes.globals.AtCons_vmedico = 'No hay especialidades vigentes en Medtur'
						forms.AtCons_pideLegajo.elements.legajo.requestFocus()
						return false
					}
					else // NO dado de baja en medtur
					{	scopes.globals.AtCons_vmedico = atcons_vlegajo_to_tbc_medtur.medturnya
						if (atcons_vlegajo_to_tbc_medtur.medturtip == 'E')
						{// 'E' buscar en medicos
							es_externo = 1
							if (atcons_vlega_to_tbc_medicos.getSize() == 1 )
							{
								 if(atcons_vlega_to_tbc_medicos.med_bloqueo == 1) 
								{
									scopes.globals.AtCons_vmedico = 'Legajo Bloqueado'
									forms.AtCons_pideLegajo.elements.legajo.requestFocus()	
									return false
								}   
								else  // no esta bloqueado
								{scopes.globals.AtCons_vmedico_mat = atcons_vlega_to_tbc_medicos.med_matricula
									scopes.globals.AtCons_vmedico_tipo = 1	// se usara para anatomia patologica
									return true}
							} 
							else
							{	scopes.globals.AtCons_vmedico = 'No existe legajo en Medicos '
								forms.AtCons_pideLegajo.elements.legajo.requestFocus()	
								return false}
						}
						else
						{// 'I' buscar en personal
							es_externo = 0
							if (atcons_vlega_to_tbc_personal.getSize() > 0)
							{
								scopes.globals.AtCons_vmedico = atcons_vlega_to_tbc_personal.per_apelnom
								if (atcons_vlega_to_tbc_personal.per_fecbaja != 0) 
								{
								scopes.globals.AtCons_vmedico = 'Personal dado de baja'
								forms.AtCons_pideLegajo.elements.legajo.requestFocus()
								return false
								}
								else  // no esta dado de baja
								{scopes.globals.AtCons_vmedico_mat = atcons_vlega_to_tbc_personal.per_codmatri
								 scopes.globals.AtCons_vmedico_tipo = 0  // se usara para anatomia patologica
									return true}
							}
							else
							{	scopes.globals.AtCons_vmedico = 'No existe legajo en Personal '
								forms.AtCons_pideLegajo.elements.legajo.requestFocus()
								return false
							}
						}
					}
				}
				else
				{	scopes.globals.AtCons_vmedico = 'Legajo no existe en Medtur'
					forms.AtCons_pideLegajo.elements.legajo.requestFocus()	
				}
		}
		else
		{	scopes.globals.AtCons_vmedico = 'Debe ingresar legajo'
			forms.AtCons_pideLegajo.elements.legajo.requestFocus()
			return false
		}
	}
	else
	{	scopes.globals.AtCons_vmedico = 'Debe informar legajo'
		forms.AtCons_pideLegajo.elements.legajo.requestFocus()
		return false
	}

	//return true
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"C22DBF4E-36B1-424E-B4D2-0025091EF781"}
 */
function onAction_continuar(event) {
	f_hubo_grilla = 1
	if (validar_legajo())
	{	if (validar_clave())  
		{if (scopes.globals.AtCons_vespecial == null || scopes.globals.AtCons_vespecial == ' ' || scopes.globals.AtCons_vespecial == 0)
			{scopes.globals.AtCons_vmensaje = 'Debe informar Especialidad';
		    globals.DIALOGS.showInfoDialog('Especialidades',scopes.globals.AtCons_vmensaje,"Aceptar")
			return}
		 else 
		 {		// En COBOL graba horario de apertura en hor-fic = NO se hacer en este primer momneto
				// TODO    Luego Ver si falta hacer  13/04/2018
				// =====================================================================
			
			// TODO llamar metodo de reportes de direccion.  ver si esto queda o se saca .  Comprobar si esta ok   
			var argum = scopes.globals.AtCons_vlegajo + ';' + scopes.globals.AtCons_vlega + ';' + scopes.globals.AtCons_vmedico + ';' + es_externo
			/* 
			//if (globals.AtCons_llamada_desde_Menu(argum) == true)  // no hay reporte -> continua
			//{//  llama form elegir especialidad	
				//forms.AtCons_pideEspecial.controller.show()}
				// TODO si hay reporte que es hace ?
				//else {
			*/
			
			if (atcons_vlegajo_to_tbc_medtur_esp.medturhc == 2)	  // TODO probar
				{scopes.globals.AtCons_vmensaje = 'No Escribe Historia clínica en la especialidad seleccionada'
				 globals.DIALOGS.showInfoDialog('Especialidades',scopes.globals.AtCons_vmensaje,"Aceptar")
				 return }
			if (f_hubo_especial == 1 && f_hubo_grilla == 1)	
			{	
				// cerrar la window vigente // "Menu_itm"
				var $win1 = application.getWindow("Menu_itm");
		     	if ($win1 != null){
		     		$win1.hide()
		     		$win1.destroy()}
		     	//  llama form mostrar turnos del dia/especialidad
				var $win = application.createWindow("reservas",JSWindow.MODAL_DIALOG)
			        $win.title = " Atención Ambulatoria "
			        $win.setSize(1080,700)
					//$win.isUndecorated() 
			        $win.show(forms.atcons_tab_reservas)	
					$win.destroy()
			}
			else
			{
				if (f_hubo_especial != 1)
					{globals.AtCons_vmensaje = 'No encontró especialidades para el ese legajo'
					globals.DIALOGS.showInfoDialog('Especialidades',scopes.globals.AtCons_vmensaje,"Aceptar")
					return}
				if (f_hubo_grilla != 1)
					{scopes.globals.AtCons_vmensaje = 'No hay grilla de atencion para el dia de hoy';
					globals.DIALOGS.showInfoDialog('Especialidades',scopes.globals.AtCons_vmensaje,"Aceptar")}
				return}
			}
			//}
		 }
		else
		{forms.AtCons_pideLegajo.elements.clave.requestFocus()}
	}
	else 
	{forms.AtCons_pideLegajo.elements.legajo.requestFocus()}
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
 * @properties={typeid:24,uuid:"C6A43AC1-1E13-49C6-9C7F-C639BB50C9B9"}
 */
function onDataChange_lega(oldValue, newValue, event) {
	if (oldValue != newValue)
		{scopes.globals.AtCons_vespecial = null
		 scopes.globals.AtCons_vclave = null}
	if (validar_legajo())  
	{forms.AtCons_pideLegajo.elements.clave.requestFocus()}
	else
	{forms.AtCons_pideLegajo.elements.legajo.requestFocus()}
	
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
 * @properties={typeid:24,uuid:"83731AB9-3B5B-4F67-9127-DBC1F0F78962"}
 * @AllowToRunInFind
 */
function onDataChange_especialidad(oldValue, newValue, event) {
	if(atcons_vlegajo_to_tbc_medtur_esp.getSize() > 0)
		{if (atcons_vlegajo_to_tbc_medtur_esp.medturbaja != 1)
			{if (atcons_vlegajo_to_tbc_medtur_esp.medturhc == 2)	  // TODO probar
			{scopes.globals.AtCons_vmensaje = 'No Escribe Historia clínica en la especialidad seleccionada'
			 globals.DIALOGS.showInfoDialog('Especialidades',scopes.globals.AtCons_vmensaje,"Aceptar")
			 return }
			 else{f_hubo_especial = 1}
			}
		else
			{scopes.globals.AtCons_vmensaje = 'Especialidad dada de baja para el legajo en medtur'
			 globals.DIALOGS.showInfoDialog('Especialidades',scopes.globals.AtCons_vmensaje,"Aceptar")
			 scopes.globals.AtCons_vespecial = null
			 f_hubo_especial = 0
			 return}  // TODO probar
		}
	else
		{f_hubo_especial = 0
		globals.AtCons_vmensaje = 'No encontró especialidades para el ese legajo'
		globals.DIALOGS.showInfoDialog('Especialidades',scopes.globals.AtCons_vmensaje,"Aceptar")
		return}
		
	//var f_fecha = new Date()

	//var dia_semana = f_fecha.getDay()
	// tomar la fecha el server del onshow
	/*
	var dia_semana = scopes.globals.AtCons_vfecha.getDay()
	
		
		if (atcons_vlegajo_especial_to_tbc_medtur.find() == false)
		{scopes.globals.AtCons_vmensaje = 'No encontró especialidades para el legajo ingresado';
		globals.DIALOGS.showInfoDialog('Especialidades',scopes.globals.AtCons_vmensaje,"Aceptar")
		f_hubo_especial = 0
		return}

		if(atcons_vlegajo_especial_to_tbc_medtur.search() != 1)
		{globals.AtCons_vmensaje = 'No encontró especialidades para ese legajo'
		globals.DIALOGS.showInfoDialog('Especialidades',scopes.globals.AtCons_vmensaje,"Aceptar")
		f_hubo_especial = 0
		return}
	else
	{	if  (dia_semana == 1)   // lunes
			{if ((atcons_vlegajo_especial_to_tbc_medtur.medturmdhs_1 == 0 || atcons_vlegajo_especial_to_tbc_medtur.medturmdhs_1 == null && 
				  atcons_vlegajo_especial_to_tbc_medtur.medturmhhs_1 == 0 || atcons_vlegajo_especial_to_tbc_medtur.medturmhhs_1 == null)&&	
				 (atcons_vlegajo_especial_to_tbc_medtur.medturtdhs_1 == 0 || atcons_vlegajo_especial_to_tbc_medtur.medturtdhs_1 == null &&
				  atcons_vlegajo_especial_to_tbc_medtur.medturthhs_1 == 0 || atcons_vlegajo_especial_to_tbc_medtur.medturthhs_1 == null))
				  {globals.AtCons_vmensaje = 'No hay grilla de atencion para el dia lunes'
				  globals.DIALOGS.showInfoDialog('Especialidades',scopes.globals.AtCons_vmensaje,"Aceptar")}
				  else
				  {f_hubo_grilla = 1
					  return}}
		if (dia_semana == 2)   // martes
			{if ((atcons_vlegajo_especial_to_tbc_medtur.medturmdhs_2 == 0 || atcons_vlegajo_especial_to_tbc_medtur.medturmdhs_2 == null && 
				  atcons_vlegajo_especial_to_tbc_medtur.medturmhhs_2 == 0 || atcons_vlegajo_especial_to_tbc_medtur.medturmhhs_2 == null)&&	
				 (atcons_vlegajo_especial_to_tbc_medtur.medturtdhs_2 == 0 || atcons_vlegajo_especial_to_tbc_medtur.medturtdhs_2 == null &&
				  atcons_vlegajo_especial_to_tbc_medtur.medturthhs_2 == 0 || atcons_vlegajo_especial_to_tbc_medtur.medturthhs_2 == null))
				  {globals.AtCons_vmensaje = 'No hay grilla de atencion para el dia martes'
				  globals.DIALOGS.showInfoDialog('Especialidades',scopes.globals.AtCons_vmensaje,"Aceptar")}
				  else
				  {f_hubo_grilla = 1
				  return}}
		if (dia_semana == 3)   // miercoles
			{if ((atcons_vlegajo_especial_to_tbc_medtur.medturmdhs_3 == 0 || atcons_vlegajo_especial_to_tbc_medtur.medturmdhs_3 == null && 
		  	  atcons_vlegajo_especial_to_tbc_medtur.medturmhhs_3 == 0 || atcons_vlegajo_especial_to_tbc_medtur.medturmhhs_3 == null)&&	
		  	 (atcons_vlegajo_especial_to_tbc_medtur.medturtdhs_3 == 0 || atcons_vlegajo_especial_to_tbc_medtur.medturtdhs_3 == null &&
		  	  atcons_vlegajo_especial_to_tbc_medtur.medturthhs_3 == 0 || atcons_vlegajo_especial_to_tbc_medtur.medturthhs_3 == null))
					    {globals.AtCons_vmensaje = 'No hay grilla de atencion para el dia miercoles'
					    globals.DIALOGS.showInfoDialog('Especialidades',scopes.globals.AtCons_vmensaje,"Aceptar")}
				   else
				   {f_hubo_grilla = 1
					return}
			}
		if (dia_semana == 4)   // jueves
			{if ((atcons_vlegajo_especial_to_tbc_medtur.medturmdhs_4 == 0 || atcons_vlegajo_especial_to_tbc_medtur.medturmdhs_4 == null && 
		  	  atcons_vlegajo_especial_to_tbc_medtur.medturmhhs_4 == 0 || atcons_vlegajo_especial_to_tbc_medtur.medturmhhs_4 == null)&&	
		  	 (atcons_vlegajo_especial_to_tbc_medtur.medturtdhs_4 == 0 || atcons_vlegajo_especial_to_tbc_medtur.medturtdhs_4 == null &&
		  	  atcons_vlegajo_especial_to_tbc_medtur.medturthhs_4 == 0 || atcons_vlegajo_especial_to_tbc_medtur.medturthhs_4 == null))
				    {globals.AtCons_vmensaje = 'No hay grilla de atencion para el dia jueves'
				    globals.DIALOGS.showInfoDialog('Especialidades',scopes.globals.AtCons_vmensaje,"Aceptar")}
			   else
			   {f_hubo_grilla= 1
				return}}
		if (dia_semana == 5)   // viernes
			{if ((atcons_vlegajo_especial_to_tbc_medtur.medturmdhs_5 == 0 || atcons_vlegajo_especial_to_tbc_medtur.medturmdhs_5 == null && 
		  	  atcons_vlegajo_especial_to_tbc_medtur.medturmhhs_5 == 0 || atcons_vlegajo_especial_to_tbc_medtur.medturmhhs_5 == null)&&	
		  	 (atcons_vlegajo_especial_to_tbc_medtur.medturtdhs_5 == 0 || atcons_vlegajo_especial_to_tbc_medtur.medturtdhs_5 == null &&
		  	  atcons_vlegajo_especial_to_tbc_medtur.medturthhs_5 == 0 || atcons_vlegajo_especial_to_tbc_medtur.medturthhs_5 == null))
				    {globals.AtCons_vmensaje = 'No hay grilla de atencion para el dia viernes'
				    globals.DIALOGS.showInfoDialog('Especialidades',scopes.globals.AtCons_vmensaje,"Aceptar")}
			   else
			   {f_hubo_grilla = 1
				return}}
		if (dia_semana == 6)   // sabado
			{if ((atcons_vlegajo_especial_to_tbc_medtur.medturmdhs_6 == 0 || atcons_vlegajo_especial_to_tbc_medtur.medturmdhs_6 == null && 
			  	  atcons_vlegajo_especial_to_tbc_medtur.medturmhhs_6 == 0 || atcons_vlegajo_especial_to_tbc_medtur.medturmhhs_6 == null)&&	
			  	 (atcons_vlegajo_especial_to_tbc_medtur.medturtdhs_6 == 0 || atcons_vlegajo_especial_to_tbc_medtur.medturtdhs_6 == null &&
			  	  atcons_vlegajo_especial_to_tbc_medtur.medturthhs_6 == 0 || atcons_vlegajo_especial_to_tbc_medtur.medturthhs_6 == null))
				    {globals.AtCons_vmensaje = 'No hay grilla de atencion para el dia sabado'
				    globals.DIALOGS.showInfoDialog('Especialidades',scopes.globals.AtCons_vmensaje,"Aceptar")}
			 else
			   {f_hubo_grilla = 1
				return}}
		if (dia_semana == 7 || dia_semana == 0)   // domingo
			{if ((atcons_vlegajo_especial_to_tbc_medtur.medturmdhs_7 == 0 || atcons_vlegajo_especial_to_tbc_medtur.medturmdhs_7 == null && 
				  atcons_vlegajo_especial_to_tbc_medtur.medturmhhs_7 == 0 || atcons_vlegajo_especial_to_tbc_medtur.medturmhhs_7 == null)&&	
				 (atcons_vlegajo_especial_to_tbc_medtur.medturtdhs_7 == 0 || atcons_vlegajo_especial_to_tbc_medtur.medturtdhs_7 == null &&
				  atcons_vlegajo_especial_to_tbc_medtur.medturthhs_7 == 0 || atcons_vlegajo_especial_to_tbc_medtur.medturthhs_7 == null))
				  {globals.AtCons_vmensaje = 'No hay grilla de atencion para el dia domingo'
				  globals.DIALOGS.showInfoDialog('Especialidades',scopes.globals.AtCons_vmensaje,"Aceptar")}
			 else
			   {f_hubo_grilla = 1
				return}}		
			}
			f_hubo_grilla = 0
			*/
}
