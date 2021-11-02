/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"343C89D0-2779-47E3-8E3F-3C423C875012",variableType:93}
 */
var fhoramin_inyec = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"3BCBCB93-7F3B-4716-9402-10A39A8E289F",variableType:4}
 */
var fmin_inyec = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"ED744D84-D83D-4B14-9355-1250CB3DBEA4",variableType:4}
 */
var fhora_inyec = null;

/**
 * Handle changed data.
 *
 * @param {Number} oldValue old value
 * @param {Number} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"88D3D2A0-512C-4008-916C-408CB10F4263"}
 */
function onDataChange_resp_espontanea(oldValue, newValue, event) {
    if (respiracion_espontanea == 1) 
    	{respiracion_asistida = 0
    	 resp_controlada_manual = 0
    	 resp_controlada_mecanica  = 0
    	 sistema_con_rehin_parcial = 0
    	 sistema_con_rehin_total   = 0
    	 sistema_sin_reinhalacion  = 0
    	elements.respiracion_controlada.enabled    = false
    	elements.resp_controlada_manual.enabled    = false
		elements.resp_controlada_mecanica.enabled  = false
		elements.sistema_sin_reinhalacion.enabled  = false
		elements.sistema_con_rehin_total.enabled   = false
		elements.sistema_con_rehin_parcial.enabled = false}
	else
		{elements.respiracion_controlada.enabled = true
			//respiracion_asistida = 1
		elements.respiracion_controlada.enabled    = true
		elements.resp_controlada_manual.enabled    = false
		elements.resp_controlada_mecanica.enabled  = false
		elements.sistema_sin_reinhalacion.enabled  = false
		elements.sistema_con_rehin_total.enabled   = false
		elements.sistema_con_rehin_parcial.enabled = false}
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
 * @properties={typeid:24,uuid:"9DB3E409-3D71-4362-86D1-0868C44DCB48"}
 */
function onDataChange_manual(oldValue, newValue, event) {
	if (respiracion_asistida == 1) {
		if (resp_controlada_manual == 1)
			{elements.resp_controlada_mecanica.enabled = false
			 elements.sistema_sin_reinhalacion.enabled  = true
			 elements.sistema_con_rehin_total.enabled   = true
			 elements.sistema_con_rehin_parcial.enabled = true
			resp_controlada_mecanica = 0}
		else
			{elements.resp_controlada_mecanica.enabled = true
			 elements.sistema_sin_reinhalacion.enabled  = false
			 elements.sistema_con_rehin_total.enabled   = false
			 elements.sistema_con_rehin_parcial.enabled = false}
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
 * @properties={typeid:24,uuid:"F099C4FE-2088-4A47-9E11-EC8A005C2E59"}
 */
function onDataChange_resp_mecanica(oldValue, newValue, event) {
	if (respiracion_asistida == 1) {
		if (resp_controlada_mecanica == 1)
				{elements.resp_controlada_manual.enabled = false
				 elements.sistema_sin_reinhalacion.enabled  = true
				 elements.sistema_con_rehin_total.enabled   = true
				 elements.sistema_con_rehin_parcial.enabled = true
				resp_controlada_manual = 0}
		else
			{elements.resp_controlada_manual.enabled = true
			 elements.sistema_sin_reinhalacion.enabled  = false
			 elements.sistema_con_rehin_total.enabled   = false
			 elements.sistema_con_rehin_parcial.enabled = false}
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
 * @properties={typeid:24,uuid:"678D366B-2BB9-4DC0-95D6-8A92B61FBD44"}
 */
function onDataChange_resp_asistida(oldValue, newValue, event) {
    if (respiracion_asistida == 1) 
    	{elements.resp_controlada_manual.enabled    = true
    	 elements.resp_controlada_mecanica.enabled  = true
   	    // elements.sistema_sin_reinhalacion.enabled  = true
	    // elements.sistema_con_rehin_total.enabled   = true
	    // elements.sistema_con_rehin_parcial.enabled = true
		 respiracion_espontanea   = 0
		 }
    	 else
    	 {elements.resp_controlada_manual.enabled    = false
    	  elements.resp_controlada_mecanica.enabled  = false
    	  elements.sistema_sin_reinhalacion.enabled  = false
		  elements.sistema_con_rehin_total.enabled   = false
		  elements.sistema_con_rehin_parcial.enabled = false
		  //respiracion_espontanea   = 0
    	  resp_controlada_manual   = 0
		  resp_controlada_mecanica = 0
		  sistema_con_rehin_parcial = 0
		  sistema_con_rehin_total   = 0
		  sistema_sin_reinhalacion  = 0
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
 * @properties={typeid:24,uuid:"014CA740-D2C7-4C96-8FE9-9FF6253500E1"}
 */
function onDataChange_sin_rehinalacion(oldValue, newValue, event) {
	if (respiracion_asistida == 1) {
		if (resp_controlada_mecanica == 1 || resp_controlada_manual == 1 ){
			if (sistema_sin_reinhalacion == 1 )
				{elements.sistema_con_rehin_total.enabled   = false
				 elements.sistema_con_rehin_parcial.enabled = false
				 sistema_con_rehin_total = 0
				 sistema_con_rehin_parcial = 0
				}
				else	
				{elements.sistema_con_rehin_total.enabled   = true
				 elements.sistema_con_rehin_parcial.enabled = true}
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
 * @properties={typeid:24,uuid:"35B56E27-3361-47E9-A47D-D862FEE58664"}
 */
function onDataChange_rehinalacion_parcial(oldValue, newValue, event) {
	if (respiracion_asistida == 1) {
		if (resp_controlada_mecanica == 1 || resp_controlada_manual == 1 ){
			if (sistema_con_rehin_parcial == 1 )
				{elements.sistema_con_rehin_total.enabled = false
				sistema_con_rehin_total = 0}
			else	
				{elements.sistema_con_rehin_total.enabled = true}
			}
		}
		else
		{
			if (sistema_con_rehin_parcial != 0 || sistema_con_rehin_parcial != null)
			{
				respiracion_asistida = 1
				elements.respiracion_controlada.requestFocus()
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
 * @properties={typeid:24,uuid:"8784C6A4-6D31-49F3-AC5C-AFB25AEDED3E"}
 */
function onDataChange_rehin_total(oldValue, newValue, event) {
	if (respiracion_asistida == 1) {
		if (sistema_con_rehin_total == 1)
			{elements.sistema_con_rehin_parcial.enabled = false
			 sistema_con_rehin_parcial = 0}
		else	
			{elements.sistema_con_rehin_parcial.enabled = true}
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
 * @properties={typeid:24,uuid:"765B4250-E961-487A-B10A-130B9263B425"}
 */
function onDataChange_intubacion(oldValue, newValue, event) {
	if (intubacion_traqueal == 1)
		{elements.tubo_nro.enabled   = true
		 elements.mango.enabled = true
		}
	else	
		{elements.tubo_nro.enabled   = false
		 elements.mango.enabled = false
		 tubo_nro = null
		 mango    = 0}
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
 * @properties={typeid:24,uuid:"AEF44EA9-879D-4246-B6D7-E5796F7DB0EE"}
 */
function onDataChange_tubo_nro(oldValue, newValue, event) {
	// ver si hay limites
	if (tubo_nro != 0 || tubo_nro != null) {
		if(intubacion_traqueal == 0 || intubacion_traqueal == null) 
			{intubacion_traqueal = 1}
		}

	return true
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"11CCC292-374D-4951-90FC-A72731B46997"}
 */
function onShow(firstShow, event) {
	if (intubacion_traqueal == 0 || intubacion_traqueal == null ) 
		{elements.tubo_nro.enabled = false
		 elements.mango.enabled = false}
	else
		{elements.tubo_nro.enabled = true
		 elements.mango.enabled = true}
	
	if (respiracion_espontanea == 1)
		{
		//elements.respiracion_controlada.enabled    = false
    	elements.resp_controlada_manual.enabled    = false
		elements.resp_controlada_mecanica.enabled  = false
		elements.sistema_sin_reinhalacion.enabled  = false
		elements.sistema_con_rehin_total.enabled   = false
		elements.sistema_con_rehin_parcial.enabled = false
		}
	else
		{
			//elements.respiracion_controlada.enabled = true
			if (respiracion_asistida == 1)
			{
		    	elements.resp_controlada_manual.enabled    = true
				elements.resp_controlada_mecanica.enabled  = true
				if (resp_controlada_manual == 1 || resp_controlada_mecanica == 1)
					{
						if (sistema_sin_reinhalacion == 1)
							{elements.sistema_sin_reinhalacion.enabled  = true
							 elements.sistema_con_rehin_total.enabled   = false
							 elements.sistema_con_rehin_parcial.enabled = false}
						else
							{elements.sistema_sin_reinhalacion.enabled  = false
							 elements.sistema_con_rehin_total.enabled   = true
							 elements.sistema_con_rehin_parcial.enabled = true}
					}
			}
		}
}
