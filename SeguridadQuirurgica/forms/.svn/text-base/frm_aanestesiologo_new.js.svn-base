/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered thvhiscli_to_admisione action
 *
 * @properties={typeid:24,uuid:"CC0CE69B-863C-4F9A-9975-6DF2297C594A"}
 * @AllowToRunInFind
 */
function onShowAAnestesiologo(firstShow, event) {
	databaseManager.revertEditedRecords()
	if (globals.vanestesia == '  Si  '){
		if (globals.vexistesegu == 'N'){
			globals.valergia = '  '
			forms.frm_aanestesiologo_new.foundset.newRecord()
			globals.InicializarDatos('frm_aanestesiologo_new','asistencial','tbc_seguqui_new')
		}
	    else {
	    	forms.frm_aanestesiologo_new.foundset.find()
	    	forms.frm_aanestesiologo_new.foundset.segtipohc1 = 0
	    	forms.frm_aanestesiologo_new.foundset.seghistclinica1  = globals.vhiscli
	    	forms.frm_aanestesiologo_new.foundset.segprotocolo = globals.vprotocolo
	    	forms.frm_aanestesiologo_new.foundset.search()
	    	
	    	if (forms.frm_aanestesiologo_new.foundset.seganestalergia == 1){
	    		globals.valergia = 'No' 
	    		forms.frm_aanestesiologo_new.elements.anest_cuales.visible=false
				forms.frm_aanestesiologo_new.elements.cuales.visible=false
	    		}
	    	else {
	    		if (forms.frm_aanestesiologo_new.foundset.seganestalergia == 2){
	    			globals.valergia = 'Si'
	    			forms.frm_aanestesiologo_new.elements.anest_cuales.visible=true
					forms.frm_aanestesiologo_new.elements.cuales.visible=true
				}
			}
			if (forms.frm_aanestesiologo_new.foundset.seganestident == 1){
				forms.frm_aanestesiologo_new.foundset.seganestident = 0
			}
			else {
				if (forms.frm_aanestesiologo_new.foundset.seganestident == 2){
					forms.frm_aanestesiologo_new.foundset.seganestident = 1
				}
			}
			if (forms.frm_aanestesiologo_new.foundset.seganestpulso == 1){
				forms.frm_aanestesiologo_new.foundset.seganestpulso = 0
			}
			else {
				if (forms.frm_aanestesiologo_new.foundset.seganestpulso == 2){
					forms.frm_aanestesiologo_new.foundset.seganestpulso = 1
				}
			}
			if (forms.frm_aanestesiologo_new.foundset.seganestseguri == 1){
				forms.frm_aanestesiologo_new.foundset.seganestseguri = 0
			}
			else {
				if (forms.frm_aanestesiologo_new.foundset.seganestseguri == 2){
					forms.frm_aanestesiologo_new.foundset.seganestseguri = 1
				}
			}
			if (forms.frm_aanestesiologo_new.foundset.seganestviaaerea == 1){
				forms.frm_aanestesiologo_new.foundset.seganestviaaerea = 0
			}
			else {
				if (forms.frm_aanestesiologo_new.foundset.seganestviaaerea == 2){
					forms.frm_aanestesiologo_new.foundset.seganestviaaerea = 1
				}
			}
			if (forms.frm_aanestesiologo_new.foundset.seganestacceso == 1){
				forms.frm_aanestesiologo_new.foundset.seganestacceso = 0
			}
			else {
				if (forms.frm_aanestesiologo_new.foundset.seganestacceso == 2){
					forms.frm_aanestesiologo_new.foundset.seganestacceso = 1
				}
			}
			if (forms.frm_aanestesiologo_new.foundset.seganestsangre == 1){
				forms.frm_aanestesiologo_new.foundset.seganestsangre = 0
			}
			else {
				if (forms.frm_aanestesiologo_new.foundset.seganestsangre == 2){
					forms.frm_aanestesiologo_new.foundset.seganestsangre = 1
				}
			}
			if (forms.frm_aanestesiologo_new.foundset.seganestocular == 1){
				forms.frm_aanestesiologo_new.foundset.seganestocular = 0
				}
			else {
				if (forms.frm_aanestesiologo_new.foundset.seganestocular == 2){
					forms.frm_aanestesiologo_new.foundset.seganestocular = 1
				}
			}
			if (forms.frm_aanestesiologo_new.foundset.seganestdecubi == 1){
				forms.frm_aanestesiologo_new.foundset.seganestdecubi = 0
				}
			else {
				if (forms.frm_aanestesiologo_new.foundset.seganestdecubi == 2){
					forms.frm_aanestesiologo_new.foundset.seganestdecubi = 1
				}
			}
			globals.vApeynomAnestesiologo=seglegaanestini_to_tbc_medicos_personal.medperapeynom

		}
	}
	else {
		if (globals.vexistesegu == 'N'){
	    	forms.frm_aanestesiologo_new.foundset.newRecord()
      		globals.InicializarDatos('frm_aanestesiologo_new','asistencial','tbc_seguqui_new')
			forms.frm_aanestesiologo_new.foundset.seganestident    = 1
			forms.frm_aanestesiologo_new.foundset.seganestpulso    = 1
			forms.frm_aanestesiologo_new.foundset.seganestseguri   = 1
			forms.frm_aanestesiologo_new.foundset.seganestalergia  = 1
			forms.frm_aanestesiologo_new.foundset.seganestcuales   = ' '
			forms.frm_aanestesiologo_new.foundset.seganestviaaerea = 1
			forms.frm_aanestesiologo_new.foundset.seganestacceso   = 1
			forms.frm_aanestesiologo_new.foundset.seganestsangre   = 1
			forms.frm_aanestesiologo_new.foundset.seganestocular   = 1
			forms.frm_aanestesiologo_new.foundset.seganestdecubi   = 1
			forms.frm_aanestesiologo_new.foundset.segtipoanestini  = 9
			forms.frm_aanestesiologo_new.foundset.seglegaanestini = 999999
			forms.frm_aanestesiologo_new.foundset.seganestrepasaini = 1
			forms.frm_aanestesiologo_new.foundset.segtipoanestrepi  = 9
			forms.frm_aanestesiologo_new.foundset.seglegaanestrepi = 999999
			forms.frm_aanestesiologo_new.foundset.seganestplan          = 1
			forms.frm_aanestesiologo_new.foundset.segtipoanestfin     = 9
			forms.frm_aanestesiologo_new.foundset.seglegaanestfin    = 999999

			globals.vexistesegu = 'S'
		}
		else {
			forms.frm_aanestesiologo_new.foundset.find()
	    	forms.frm_aanestesiologo_new.foundset.segtipohc1 = 0
	    	forms.frm_aanestesiologo_new.foundset.seghistclinica1  = globals.vhiscli
	    	forms.frm_aanestesiologo_new.foundset.segprotocolo = globals.vprotocolo
	    	forms.frm_aanestesiologo_new.foundset.search()

			forms.frm_aanestesiologo_new.foundset.seganestident    = 1
			forms.frm_aanestesiologo_new.foundset.seganestpulso    = 1
			forms.frm_aanestesiologo_new.foundset.seganestseguri   = 1
			forms.frm_aanestesiologo_new.foundset.seganestalergia  = 1
			forms.frm_aanestesiologo_new.foundset.seganestcuales   = ' '
			forms.frm_aanestesiologo_new.foundset.seganestviaaerea = 1
			forms.frm_aanestesiologo_new.foundset.seganestacceso   = 1
			forms.frm_aanestesiologo_new.foundset.seganestsangre   = 1
			forms.frm_aanestesiologo_new.foundset.seganestocular   = 1
			forms.frm_aanestesiologo_new.foundset.seganestdecubi   = 1
			forms.frm_aanestesiologo_new.foundset.segtipoanestini  = 9
			forms.frm_aanestesiologo_new.foundset.seglegaanestini = 999999
			forms.frm_aanestesiologo_new.foundset.seganestrepasaini = 1
			forms.frm_aanestesiologo_new.foundset.segtipoanestrepi  = 9
			forms.frm_aanestesiologo_new.foundset.seglegaanestrepi = 999999
			forms.frm_aanestesiologo_new.foundset.seganestplan       = 1
			forms.frm_aanestesiologo_new.foundset.segtipoanestfin  = 9
			forms.frm_aanestesiologo_new.foundset.seglegaanestfin = 999999
		}
		
		databaseManager.saveData(forms.frm_aanestesiologo_new.foundset.getRecord(1))
		forms.frm_menu_0.elements.btn_volveramenu.visible=true
		forms.frm_menu_0.elements.tabless_opciones.tabIndex=1
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"91C7A2BA-0F54-451B-9DE2-1E4D5874C552"}
 */
function GrabaAAnestesiologo(event) {
	if (globals.vexistesegu == 'N'){
		forms.frm_aanestesiologo_new.foundset.segtipohc = 0
		forms.frm_aanestesiologo_new.foundset.segtipohc1 = 0
		forms.frm_aanestesiologo_new.foundset.seghistclinica   = globals.vhiscli
		forms.frm_aanestesiologo_new.foundset.seghistclinica1 = globals.vhiscli
		var fec = application.getServerTimeStamp()
		var fecha_actual = application.getServerTimeStamp()
		var anio=fecha_actual.getFullYear()
		var mes=fecha_actual.getMonth()+1
		var mes_ed
		if((fecha_actual.getMonth()+1)> 9){
			mes_ed=mes
		}else{
			mes_ed="0"+mes
		}
		var dia=fecha_actual.getDate()
		var dia_ed
		if(fecha_actual.getDate()>9){
			dia_ed=dia
		}else{
			dia_ed="0"+dia
		}
		var fecha_hoy=anio.toString()+mes_ed.toString()+dia_ed.toString()
		forms.frm_aanestesiologo_new.foundset.segfechacarga  = fecha_hoy
		forms.frm_aanestesiologo_new.foundset.seghoracarga = globals.FormatearFecha(fec,'HHMM')
		forms.frm_aanestesiologo_new.foundset.segprotocolo = 0

		if (globals.valergia == 'No'){
			forms.frm_aanestesiologo_new.foundset.seganestalergia = 1
			}
		else {
			if (globals.valergia == 'Si'){
				forms.frm_aanestesiologo_new.foundset.seganestalergia = 2
			}
			else {
				forms.frm_aanestesiologo_new.foundset.seganestalergia = 0
			}
		}
		if (forms.frm_aanestesiologo_new.foundset.seganestident == 0){
			forms.frm_aanestesiologo_new.foundset.seganestident = 1
			}
		else {
			if (forms.frm_aanestesiologo_new.foundset.seganestident == 1){
				forms.frm_aanestesiologo_new.foundset.seganestident = 2
			}
		}
		if (forms.frm_aanestesiologo_new.foundset.seganestpulso == 0){
			forms.frm_aanestesiologo_new.foundset.seganestpulso = 1
			}
		else {
			if (forms.frm_aanestesiologo_new.foundset.seganestpulso == 1){
				forms.frm_aanestesiologo_new.foundset.seganestpulso = 2
			}
		}
		if (forms.frm_aanestesiologo_new.foundset.seganestseguri == 0){
			forms.frm_aanestesiologo_new.foundset.seganestseguri = 1
			}
		else {
			if (forms.frm_aanestesiologo_new.foundset.seganestseguri == 1){
				forms.frm_aanestesiologo_new.foundset.seganestseguri = 2
			}
		}
		if (forms.frm_aanestesiologo_new.foundset.seganestviaaerea == 0){
			forms.frm_aanestesiologo_new.foundset.seganestviaaerea = 1
			}
		else {
			if (forms.frm_aanestesiologo_new.foundset.seganestviaaerea == 1){
				forms.frm_aanestesiologo_new.foundset.seganestviaaerea = 2
			}
		}
		if (forms.frm_aanestesiologo_new.foundset.seganestacceso == 0){
			forms.frm_aanestesiologo_new.foundset.seganestacceso = 1
			}
		else {
			if (forms.frm_aanestesiologo_new.foundset.seganestacceso == 1){
				forms.frm_aanestesiologo_new.foundset.seganestacceso = 2
			}
		}
		if (forms.frm_aanestesiologo_new.foundset.seganestsangre == 0){
			forms.frm_aanestesiologo_new.foundset.seganestsangre = 1
			}
		else {
			if (forms.frm_aanestesiologo_new.foundset.seganestsangre == 1){
				forms.frm_aanestesiologo_new.foundset.seganestsangre = 2
			}
		}
		if (forms.frm_aanestesiologo_new.foundset.seganestocular == 0){
			forms.frm_aanestesiologo_new.foundset.seganestocular = 1
			}
		else {
			if (forms.frm_aanestesiologo_new.foundset.seganestocular == 1){
				forms.frm_aanestesiologo_new.foundset.seganestocular = 2
			}
		}
		if (forms.frm_aanestesiologo_new.foundset.seganestdecubi == 0){
			forms.frm_aanestesiologo_new.foundset.seganestdecubi = 1
			}
		else {
			if (forms.frm_aanestesiologo_new.foundset.seganestdecubi == 1){
				forms.frm_aanestesiologo_new.foundset.seganestdecubi = 2
			}
		}
		globals.vexistesegu = 'S'
		//databaseManager.saveData()
	}
	else {
		if (globals.valergia == 'No'){
			forms.frm_aanestesiologo_new.foundset.seganestalergia = 1
			}
		else {
			if (globals.valergia == 'Si'){
				forms.frm_aanestesiologo_new.foundset.seganestalergia = 2
			}
		}
		if (forms.frm_aanestesiologo_new.foundset.seganestident == 0){
			forms.frm_aanestesiologo_new.foundset.seganestident = 1
			}
		else {
			if (forms.frm_aanestesiologo_new.foundset.seganestident == 1){
				forms.frm_aanestesiologo_new.foundset.seganestident = 2
			}
		}
		if (forms.frm_aanestesiologo_new.foundset.seganestpulso == 0){
			forms.frm_aanestesiologo_new.foundset.seganestpulso = 1
			}
		else {
			if (forms.frm_aanestesiologo_new.foundset.seganestpulso == 1){
				forms.frm_aanestesiologo_new.foundset.seganestpulso = 2
			}
		}
		if (forms.frm_aanestesiologo_new.foundset.seganestseguri == 0){
			forms.frm_aanestesiologo_new.foundset.seganestseguri = 1
			}
		else {
			if (forms.frm_aanestesiologo_new.foundset.seganestseguri == 1){
				forms.frm_aanestesiologo_new.foundset.seganestseguri = 2
			}
		}
		if (forms.frm_aanestesiologo_new.foundset.seganestviaaerea == 0){
			forms.frm_aanestesiologo_new.foundset.seganestviaaerea = 1
			}
		else {
			if (forms.frm_aanestesiologo_new.foundset.seganestviaaerea == 1){
				forms.frm_aanestesiologo_new.foundset.seganestviaaerea = 2
			}
		}
		if (forms.frm_aanestesiologo_new.foundset.seganestacceso == 0){
			forms.frm_aanestesiologo_new.foundset.seganestacceso = 1
			}
		else {
			if (forms.frm_aanestesiologo_new.foundset.seganestacceso == 1){
				forms.frm_aanestesiologo_new.foundset.seganestacceso = 2
			}
		}
		if (forms.frm_aanestesiologo_new.foundset.seganestsangre == 0){
			forms.frm_aanestesiologo_new.foundset.seganestsangre = 1
			}
		else {
			if (forms.frm_aanestesiologo_new.foundset.seganestsangre == 1){
				forms.frm_aanestesiologo_new.foundset.seganestsangre = 2
			}
		}
		if (forms.frm_aanestesiologo_new.foundset.seganestocular == 0){
			forms.frm_aanestesiologo_new.foundset.seganestocular = 1
			}
		else {
			if (forms.frm_aanestesiologo_new.foundset.seganestocular == 1){
				forms.frm_aanestesiologo_new.foundset.seganestocular = 2
			}
		}
		if (forms.frm_aanestesiologo_new.foundset.seganestdecubi == 0){
			forms.frm_aanestesiologo_new.foundset.seganestdecubi = 1
			}
		else {
			if (forms.frm_aanestesiologo_new.foundset.seganestdecubi == 1){
				forms.frm_aanestesiologo_new.foundset.seganestdecubi = 2
			}
		}
	}
	//databaseManager.saveData()
	databaseManager.saveData(forms.frm_aanestesiologo_new.foundset.getRecord(1))
	
	//databaseManager.refreshRecordFromDatabase(forms.frm_aanestesiologo_new.foundset, 1)
	if(forms.frm_aanestesiologo_new.foundset.seglegaanestini==0){
		globals.LegajoApeynomAnes=''
	}
	forms.frm_menu_0.elements.btn_volveramenu.visible=true
	globals.MuestroTildeSeguqui('frm_aanestesiologo_new')
	forms.frm_menu_0.elements.tabless_opciones.tabIndex=1
	forms.frm_menu_opciones.controller.focusFirstField()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"31CB1A29-E0EB-416A-938D-F47725D2CE81"}
 */
function onAction_aanestesiologo(event) {
	var win = application.createWindow("c",JSWindow.MODAL_DIALOG)
	win.title = "Búsqueda de Código de Anestesiólogo";
	win.setSize(850,550)
	win.show(forms.frm_busqueda_medicos_personal_copy)
	foundset.seglegaanestini=globals.vCodigoMedicoSegu
	globals.vApeynomAnestesiologo=globals.vApeynomMedicoSegu
	elements.btn_graba_aanestesiologo.requestFocus()
}

/**
 * Handle changed data.
 *
 * @param {String} oldValue old value
 * @param {String} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"B8B33537-4185-43BA-A7CF-7AC44AF738A5"}
 */
function onDataChange_Alergias(oldValue, newValue, event) {
	if(newValue=='Si'){
		forms.frm_aanestesiologo_new.elements.anest_cuales.visible=true
		forms.frm_aanestesiologo_new.elements.cuales.visible=true
	}else{
		forms.frm_aanestesiologo_new.elements.anest_cuales.visible=false
		forms.frm_aanestesiologo_new.elements.cuales.visible=false
	}
	return true
}

/**
 * @properties={typeid:24,uuid:"FE2FABB3-57EE-45CB-A755-FE5B006CADDF"}
 * @AllowToRunInFind
 */
function MuestroAnestesiologo() {
	if (globals.vanestesia == '  Si  '){
		if (globals.vexistesegu == 'N'){
			globals.valergia = '  '
			forms.frm_aanestesiologo_new.foundset.newRecord()
			globals.InicializarDatos('frm_aanestesiologo_new','asistencial','tbc_seguqui_new')
			
		}
	    else {
	    	
	    	forms.frm_aanestesiologo_new.foundset.find()
	    	forms.frm_aanestesiologo_new.foundset.segtipohc1 = 0
	    	forms.frm_aanestesiologo_new.foundset.seghistclinica1  = globals.vhiscli
	    	forms.frm_aanestesiologo_new.foundset.segprotocolo = globals.vprotocolo
	    	forms.frm_aanestesiologo_new.foundset.search()
			
	    	
	    	if (forms.frm_aanestesiologo_new.foundset.seganestalergia == 1){
	    		globals.valergia = 'No' 
	    		forms.frm_aanestesiologo_new.elements.anest_cuales.visible=false
				forms.frm_aanestesiologo_new.elements.cuales.visible=false
	    		}
	    	else {
	    		if (forms.frm_aanestesiologo_new.foundset.seganestalergia == 2){
	    			globals.valergia = 'Si'
	    			forms.frm_aanestesiologo_new.elements.anest_cuales.visible=true
					forms.frm_aanestesiologo_new.elements.cuales.visible=true
				}
			}
			if (forms.frm_aanestesiologo_new.foundset.seganestident == 1){
				forms.frm_aanestesiologo_new.foundset.seganestident = 0
			}
			else {
				if (forms.frm_aanestesiologo_new.foundset.seganestident == 2){
					forms.frm_aanestesiologo_new.foundset.seganestident = 1
				}
			}
			if (forms.frm_aanestesiologo_new.foundset.seganestpulso == 1){
				forms.frm_aanestesiologo_new.foundset.seganestpulso = 0
			}
			else {
				if (forms.frm_aanestesiologo_new.foundset.seganestpulso == 2){
					forms.frm_aanestesiologo_new.foundset.seganestpulso = 1
				}
			}
			if (forms.frm_aanestesiologo_new.foundset.seganestseguri == 1){
				forms.frm_aanestesiologo_new.foundset.seganestseguri = 0
			}
			else {
				if (forms.frm_aanestesiologo_new.foundset.seganestseguri == 2){
					forms.frm_aanestesiologo_new.foundset.seganestseguri = 1
				}
			}
			if (forms.frm_aanestesiologo_new.foundset.seganestviaaerea == 1){
				forms.frm_aanestesiologo_new.foundset.seganestviaaerea = 0
			}
			else {
				if (forms.frm_aanestesiologo_new.foundset.seganestviaaerea == 2){
					forms.frm_aanestesiologo_new.foundset.seganestviaaerea = 1
				}
			}
			if (forms.frm_aanestesiologo_new.foundset.seganestacceso == 1){
				forms.frm_aanestesiologo_new.foundset.seganestacceso = 0
			}
			else {
				if (forms.frm_aanestesiologo_new.foundset.seganestacceso == 2){
					forms.frm_aanestesiologo_new.foundset.seganestacceso = 1
				}
			}
			if (forms.frm_aanestesiologo_new.foundset.seganestsangre == 1){
				forms.frm_aanestesiologo_new.foundset.seganestsangre = 0
			}
			else {
				if (forms.frm_aanestesiologo_new.foundset.seganestsangre == 2){
					forms.frm_aanestesiologo_new.foundset.seganestsangre = 1
				}
			}
			if (forms.frm_aanestesiologo_new.foundset.seganestocular == 1){
				forms.frm_aanestesiologo_new.foundset.seganestocular = 0
				}
			else {
				if (forms.frm_aanestesiologo_new.foundset.seganestocular == 2){
					forms.frm_aanestesiologo_new.foundset.seganestocular = 1
				}
			}
			if (forms.frm_aanestesiologo_new.foundset.seganestdecubi == 1){
				forms.frm_aanestesiologo_new.foundset.seganestdecubi = 0
				}
			else {
				if (forms.frm_aanestesiologo_new.foundset.seganestdecubi == 2){
					forms.frm_aanestesiologo_new.foundset.seganestdecubi = 1
				}
			}
			globals.vApeynomAnestesiologo=seglegaanestini_to_tbc_medicos_personal.medperapeynom

		}
	}
	else {
		if (globals.vexistesegu == 'N'){
	    	forms.frm_aanestesiologo_new.foundset.newRecord()
      		globals.InicializarDatos('frm_aanestesiologo_new','asistencial','tbc_seguqui_new')
			forms.frm_aanestesiologo_new.foundset.seganestident    = 1
			forms.frm_aanestesiologo_new.foundset.seganestpulso    = 1
			forms.frm_aanestesiologo_new.foundset.seganestseguri   = 1
			forms.frm_aanestesiologo_new.foundset.seganestalergia  = 1
			forms.frm_aanestesiologo_new.foundset.seganestcuales   = ' '
			forms.frm_aanestesiologo_new.foundset.seganestviaaerea = 1
			forms.frm_aanestesiologo_new.foundset.seganestacceso   = 1
			forms.frm_aanestesiologo_new.foundset.seganestsangre   = 1
			forms.frm_aanestesiologo_new.foundset.seganestocular   = 1
			forms.frm_aanestesiologo_new.foundset.seganestdecubi   = 1
			forms.frm_aanestesiologo_new.foundset.segtipoanestini  = 9
			forms.frm_aanestesiologo_new.foundset.seglegaanestini = 999999
			forms.frm_aanestesiologo_new.foundset.seganestrepasaini = 1
			forms.frm_aanestesiologo_new.foundset.segtipoanestrepi  = 9
			forms.frm_aanestesiologo_new.foundset.seglegaanestrepi = 999999
			forms.frm_aanestesiologo_new.foundset.seganestplan          = 1
			forms.frm_aanestesiologo_new.foundset.segtipoanestfin     = 9
			forms.frm_aanestesiologo_new.foundset.seglegaanestfin    = 999999

			globals.vexistesegu = 'S'
		}
		else {
			
			forms.frm_aanestesiologo_new.foundset.find()
	    	forms.frm_aanestesiologo_new.foundset.segtipohc1 = 0
	    	forms.frm_aanestesiologo_new.foundset.seghistclinica1  = globals.vhiscli
	    	forms.frm_aanestesiologo_new.foundset.segprotocolo = globals.vprotocolo
	    	forms.frm_aanestesiologo_new.foundset.search()
	    	
			forms.frm_aanestesiologo_new.foundset.seganestident    = 1
			forms.frm_aanestesiologo_new.foundset.seganestpulso    = 1
			forms.frm_aanestesiologo_new.foundset.seganestseguri   = 1
			forms.frm_aanestesiologo_new.foundset.seganestalergia  = 1
			forms.frm_aanestesiologo_new.foundset.seganestcuales   = ' '
			forms.frm_aanestesiologo_new.foundset.seganestviaaerea = 1
			forms.frm_aanestesiologo_new.foundset.seganestacceso   = 1
			forms.frm_aanestesiologo_new.foundset.seganestsangre   = 1
			forms.frm_aanestesiologo_new.foundset.seganestocular   = 1
			forms.frm_aanestesiologo_new.foundset.seganestdecubi   = 1
			forms.frm_aanestesiologo_new.foundset.segtipoanestini  = 9
			forms.frm_aanestesiologo_new.foundset.seglegaanestini = 999999
			forms.frm_aanestesiologo_new.foundset.seganestrepasaini = 1
			forms.frm_aanestesiologo_new.foundset.segtipoanestrepi  = 9
			forms.frm_aanestesiologo_new.foundset.seglegaanestrepi = 999999
			forms.frm_aanestesiologo_new.foundset.seganestplan       = 1
			forms.frm_aanestesiologo_new.foundset.segtipoanestfin  = 9
			forms.frm_aanestesiologo_new.foundset.seglegaanestfin = 999999
		}
		
		databaseManager.saveData(forms.frm_aanestesiologo_new.foundset.getRecord(1))
		forms.frm_menu_0.elements.btn_volveramenu.visible=true
		forms.frm_menu_0.elements.tabless_opciones.tabIndex=1
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"1D6076CB-48DD-4DD4-8782-55D9BB75CEF5"}
 * @AllowToRunInFind
 */
function onAction_legajo_anestesiologo(event) {
	var largo = globals.LegajoApeynomAnes.length;
	var esnumero = true;
	for (var i= 0;i<largo && esnumero == true; i++){
		if (globals.LegajoApeynomAnes.charCodeAt(i)< 48 || globals.LegajoApeynomAnes.charCodeAt(i) > 57){
			esnumero = false
		}
	}
	
    if (esnumero){
    	var fs = databaseManager.getFoundSet('maestros','tbc_medicos_personal')
		fs.find()
		fs['medpercod']=utils.stringToNumber(globals.LegajoApeynomAnes.substr(0,largo-1))
		fs.search()
		if(fs.getSize()>0){
			fs.setSelectedIndex(1)
			if(fs['medperesp']==24){		
				globals.vApeynomAnestesiologo=fs['medperapeynom']
				forms.frm_aanestesiologo_new.foundset.seglegaanestini=fs['medpercod']
				globals.LegajoApeynomAnes=''
				elements.btn_graba_aanestesiologo.requestFocus()
			}else{
				globals.vApeynomAnestesiologo='El Profesional No es un Anestesiólogo'
				forms.frm_aanestesiologo_new.foundset.seglegaanestini=0
				globals.LegajoApeynomAnes=''
			}
		}else{
			globals.vApeynomAnestesiologo='Profesional Inexistente'
			forms.frm_aanestesiologo_new.foundset.seglegaanestini=0
			globals.LegajoApeynomAnes=''
		}
    }
    else{
    	    globals.vProfeAlfa = globals.LegajoApeynomAnes.toLocaleUpperCase()
 		    var win = application.createWindow("c",JSWindow.MODAL_DIALOG)
			win.title = "Búsqueda de Código de Anestesiólogo";
			win.setSize(850,550)
			win.show(forms.frm_busqueda_medicos_personal_copy)
			forms.frm_aanestesiologo_new.foundset.seglegaanestini=globals.vCodigoMedicoSegu
			globals.vApeynomAnestesiologo=globals.vApeynomMedicoSegu
			globals.LegajoApeynomAnes=''
			elements.btn_graba_aanestesiologo.requestFocus()
    }
	
}
