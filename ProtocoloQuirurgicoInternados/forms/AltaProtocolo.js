/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"6BD6C032-1D83-4E7E-B536-2B28B4317368",variableType:4}
 */
var vNroAnestesia = 0;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"7E8FEDE8-5768-43D8-BADA-3AED80E1D777"}
 */
var vProcesosFaltantes = '';

/**
 * @type {Boolean}
 *
 * @properties={typeid:35,uuid:"2FAE6E39-76CA-4B51-8FC1-B4FB3586F762",variableType:-4}
 */
var vAltaProtocoloOk = false;


/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"9D905886-D01E-4DE3-A3A5-115A6DCD65A1"}
 */
function onShow_AltaProtocolo(firstShow, event) {
	globals.vPassOperadorConsenti=''
	globals.vOperadorConsenti=''
	globals.vFechaFinal=null
	vProcesosFaltantes=''
	elements.bean_243.visible=true
	elements.bean_243.minimum=1
	elements.bean_243.maximum=100
	elements.bean_243.stringPainted=true
	elements.bean_243.value = 0
	application.updateUI()	
	var ww = 0
	var name = 'alta'
	var names =''
	for(var i=10;i<=13;i++){
		names = name+i
		elements[names].visible=false
	}
	ww = ww + 5
	elements.bean_243.value = ww
	application.updateUI()
	for(i=20;i<=21;i++){
		names = name+i
		elements[names].visible=false
	}
	ww = ww + 5
	elements.bean_243.value = ww
	application.updateUI()
	for(i=30;i<=31;i++){
		names = name+i
		elements[names].visible=false
	}
	ww = ww + 5
	elements.bean_243.value = ww
	application.updateUI()
	for(i=40;i<=41;i++){
		names = name+i
		elements[names].visible=false
	}
	ww = ww + 5
	elements.bean_243.value = ww
	application.updateUI()
	for(i=50;i<=51;i++){
		names = name+i
		elements[names].visible=false
	}
	ww = ww + 5
	elements.bean_243.value = ww
	application.updateUI()
	vAltaProtocoloOk=true
	application.sleep(30)
	//refresh the second record from the foundset.
	databaseManager.refreshRecordFromDatabase(forms.AltaProtocolo.foundset,1)
	ww = ww + 10
	elements.bean_243.value = ww
	application.updateUI()
	//plugins.dialogs.showInfoDialog("Controlo_txt_9",vAltaProtocoloOk.toString())
	if(foundset.ciritipointerven==2){
		//globals.vEstado116=3
		//globals.vSector116=34
		globals.vEstado116=1
		globals.vSector116=66
	}else{
		globals.vEstado116=1
		globals.vSector116=66
	}
	try{
		Controlo_Ctrol_txt_9()
	}catch(msg){
		plugins.dialogs.showErrorDialog("Error Control Textos",msg.toString())
	}
	ww = ww + 5
	elements.bean_243.value = ww
	application.updateUI()
	//plugins.dialogs.showInfoDialog("Controlo_txt_9",vAltaProtocoloOk.toString())
	try{
		Controlo_Ctrol_Protocolo()
	}catch(msg){
		plugins.dialogs.showErrorDialog("Error Control Protocolo",msg.toString())
	}
	ww = ww + 5
	elements.bean_243.value = ww
	application.updateUI()
	//plugins.dialogs.showInfoDialog("Control_Protocolo",vAltaProtocoloOk.toString())
	try{
		Controlo_Codigos_Cirugia()
	}catch(msg){
		plugins.dialogs.showErrorDialog("Error Control Códigos Cirugía",msg.toString())
	}
	ww = ww + 5
	elements.bean_243.value = ww
	application.updateUI()
	//plugins.dialogs.showInfoDialog("Controlo_Codigos_Cirugia",vAltaProtocoloOk.toString())
	try{
		Controlo_Preparacion_PreQuirurgica()
	}catch(msg){
		plugins.dialogs.showErrorDialog("Error Control Preparación Prequirúrgica",msg.toString())
	}
	ww = ww + 5
	elements.bean_243.value = ww
	application.updateUI()
	//plugins.dialogs.showInfoDialog("Controlo_Preparación",vAltaProtocoloOk.toString())
	try{
		Controlo_Monitoreo_Intraoperatorio()
	}catch(msg){
		plugins.dialogs.showErrorDialog("Error Control Monitoreo Intraoperatorio",msg.toString())
	}
	ww = ww + 5
	elements.bean_243.value = ww
	application.updateUI()
	//plugins.dialogs.showInfoDialog("Controlo_MonitoreoIntraoperatorio",vAltaProtocoloOk.toString())
	try{
		Controlo_Carga_Hcir()
	}catch(msg){
		plugins.dialogs.showErrorDialog("Error Control Historia Clinica de Ingreso a Cirugía",msg.toString())
	}
	ww = ww + 5
	elements.bean_243.value = ww
	application.updateUI()
	//plugins.dialogs.showInfoDialog("Controlo_HC_Ingreso",vAltaProtocoloOk.toString())
	try{
		Controlo_Cajas_Cirugia()
	}catch(msg){
		plugins.dialogs.showErrorDialog("Error Control Cajas de Cirugía",msg.toString())
	}
	ww = ww + 5
	elements.bean_243.value = ww
	application.updateUI()
	//plugins.dialogs.showInfoDialog("Controlo_Cajas_cirugia",vAltaProtocoloOk.toString())
	try{
		Controlo_Seguqui()
	}catch(msg){
		plugins.dialogs.showErrorDialog("Error Control Seguridad Quirúrgica",msg.toString())
	}
	ww = ww + 5
	elements.bean_243.value = ww
	application.updateUI()
	//plugins.dialogs.showInfoDialog("Controlo_SeguridadQuirúrgica",vAltaProtocoloOk.toString())
	try{
		Controlo_Ciri_Anestesia()
	}catch(msg){
		plugins.dialogs.showErrorDialog("Error Control Anestesia",msg.toString())
	}
	ww = ww + 5
	elements.bean_243.value = ww
	application.updateUI()
	//plugins.dialogs.showInfoDialog("Controlo_Anestesia",vAltaProtocoloOk.toString())
	try{
		Controlo_Intervencion_Parto()
	}catch(msg){
		plugins.dialogs.showErrorDialog("Error Control Intervención Parto",msg.toString())
	}
	ww = ww + 5
	elements.bean_243.value = ww
	application.updateUI()
	//plugins.dialogs.showInfoDialog("Controlo_Parto",vAltaProtocoloOk.toString())
	try{
		Controlo_FichaAnestesica()
	}catch(msg){
		plugins.dialogs.showErrorDialog("Error Control Ficha Anestésica",msg.toString())
	}
	ww = ww + 5
	elements.bean_243.value = ww
	application.updateUI()
	try{
		Controla_Medicamentos_Cirugia()
	}catch(msg){
		plugins.dialogs.showErrorDialog("Error Control Medicamentos de Cirugía",msg.toString())
	}
	ww = ww + 10
	elements.bean_243.value = ww
	application.updateUI()
	try{
		if(foundset.cirianestesia==1){
			Controla_Medicamentos_Anestesia()
		}
	}catch(msg){
		plugins.dialogs.showErrorDialog("Error Control Medicamentos de Anestesia",msg.toString())
	}
	
	if(!vAltaProtocoloOk){
		plugins.dialogs.showWarningDialog("Datos Faltantes",vProcesosFaltantes)
		forms.form116_dtl.elements.tab_extension.tabIndex=1
		forms.Preparacion_dtl.controller.focusFirstField()
	}else{
		forms.AltaProtocolo.elements.btn_consenti.requestFocus()
	}
	elements.bean_243.visible=false
}

/**
 * @properties={typeid:24,uuid:"C36FD647-15F6-4A78-A846-9D4EB8919FC0"}
 * @AllowToRunInFind
 */
function Controlo_Ctrol_txt_9() {
	if(foundset.ciriintensi!=0){
		globals.vItemTexto
		if(vs_to_tbl_protoc_txt.getSize() < 1){
			vAltaProtocoloOk=false
			vProcesosFaltantes+="Falta Descripción Intensificador de Imágenes"+'\n'
		}
		/*
		var fs1 = databaseManager.getFoundSet("asistencial", "tbc_protoc_txt")
		fs1.find()
		fs1['protxt_protocolo'] = globals.vNroProtocolo
		fs1['protxt_grupo'] = 9
		fs1['protxt_nro1'] = 1
		fs1['protxt_secuen'] = 1
		fs1.search()
		if (fs1.getSize() < 1) {
			vAltaProtocoloOk=false
			vProcesosFaltantes+="Falta Descripción Intensificador de Imágenes"+'\n'
		}
		*/
	}
}

/**
 * @properties={typeid:24,uuid:"E1ABE1AD-5A2A-43EC-9032-FA19B1C1EDCB"}
 * @AllowToRunInFind
 */
function Controlo_Ctrol_Protocolo() {
	var z=0
	for(var i=1;i<=3&&vAltaProtocoloOk;i++){
		/*
		var fs2 = databaseManager.getFoundSet("asistencial", "tbc_protoc_txt")
		fs2.find()
		fs2['protxt_protocolo'] = globals.vNroProtocolo
		fs2['protxt_grupo'] = i
		fs2['protxt_nro1'] = 1
		fs2['protxt_secuen'] = 1
		fs2.search(true)
		if (fs2.getSize() < 1) {
			vAltaProtocoloOk=false
			z++
			if(z==1){
				vProcesosFaltantes="Datos faltantes: "+'\n'
			}
			switch (i){
				case 1:vProcesosFaltantes+="Falta Diagnóstico Pre-operatorio"+'\n'
				case 2:vProcesosFaltantes+="Falta Diagnóstico Post-operatorio"+'\n'
				case 3:vProcesosFaltantes+="Falta Operación Efectuada y Descripción"+'\n'
			}
		}
		*/
		globals.vItemTexto=i
		if (vs_to_tbl_protoc_txt.getSize() < 1) {
			vAltaProtocoloOk=false
			z++
			if(z==1){
				vProcesosFaltantes="Datos faltantes: "+'\n'
			}
			switch (i){
				case 1:vProcesosFaltantes+="Falta Diagnóstico Pre-operatorio"+'\n';break;
				case 2:vProcesosFaltantes+="Falta Diagnóstico Post-operatorio"+'\n';break;
				case 3:vProcesosFaltantes+="Falta Operación Efectuada y Descripción"+'\n';break;
			}
		}else{
			if(globals['proto'+i]!=vs_to_tbl_protoc_txt.texto){
				vAltaProtocoloOk=false
				switch (i){
				case 1:vProcesosFaltantes+="Falta Grabar última modificación en Diagnóstico Pre-operatorio"+'\n';break;
				case 2:vProcesosFaltantes+="Falta Grabar última modificación en Diagnóstico Post-operatorio"+'\n';break;
				case 3:vProcesosFaltantes+="Falta Grabar última modificación en Operación Efectuada y Descripción"+'\n';break;
				}
			}
		}
	}
}

/**
 * @properties={typeid:24,uuid:"27C0B871-E6D5-4AF4-8FC1-3D0EDD51BAAD"}
 */
function Controlo_Codigos_Cirugia() {
	var query = "select * from tbc_cirugint_dtl where cirihistcl = ? and ciritiponome = 1 and ciriprotocolo = ? and ciricodnome > 0";
    var args = new Array();
    args[0]=globals.vHiscli;
    args[1]=globals.vNroProtocolo;
    var dataset = new Array();
    dataset = databaseManager.getDataSetByQuery("asistencial", query, args, 10);
	//if(vs_to_tbc_cirugint_dtl.getSize()<1){
	if(dataset.getMaxRowIndex()<1){
		vAltaProtocoloOk=false
		vProcesosFaltantes+="No grabo opción 2, códigos de cirugía"+'\n'
	}
}

/**
 * @properties={typeid:24,uuid:"752FE74B-4051-4193-AF95-447207936933"}
 */
function Controlo_Preparacion_PreQuirurgica() {
	if(foundset.ciriresponde==0){
		vAltaProtocoloOk=false
		vProcesosFaltantes+="No ingreso Preparación Pre-quirúrgica"+'\n'
	}
}

/**
 * @properties={typeid:24,uuid:"6B367FDB-D611-485A-B1D3-56AD4548E5BA"}
 */
function Controlo_Monitoreo_Intraoperatorio() {
	if(foundset.cirilegpartero==0 && foundset.cirilegmonito==''){
		vAltaProtocoloOk=false
		vProcesosFaltantes+="No ingreso Monitoreo Intraoperatorio"+'\n'
	}
}

/**
 * @properties={typeid:24,uuid:"D55C6359-46D9-475A-A30B-DDBF2BB0F8D0"}
 */
function Controlo_Carga_Hcir() {
	if(vhiscli_unico_to_tbc_admision_scroll.adm_tipoing==2){
		if(vfecha_hora_to_tbc_hcicir_new.getSize()<1){
			vAltaProtocoloOk=false
			vProcesosFaltantes+="Falta ingresar Historia Clinica Operaciones Programadas"+'\n'
		}else{
			if(vfecha_hora_to_tbc_hcicir_new.hcirconsen.charAt(0)!='S'){
				if(vfecha_hora_to_tbc_hcicir_new.hcirconsen!=1){
					vAltaProtocoloOk=false
					vProcesosFaltantes+="Falta Consentimiento en Hist.Clinica Operaciones Programadas - "+vfecha_hora_to_tbc_hcicir_new.hcirconsen.charAt(0)+'\n'
				}
			}
			if(vfecha_hora_to_tbc_hcicir_new.hcirantite.charAt(0)!='S'){
				if(vfecha_hora_to_tbc_hcicir_new.hcirantite!=1){
					vAltaProtocoloOk=false
					vProcesosFaltantes+="Falta Antitetánica en Hist.Clinica Operaciones Programadas - "+vfecha_hora_to_tbc_hcicir_new.hcirantite.charAt(0)+'\n'
				}
			}
		}
	}
}

/**
 * @properties={typeid:24,uuid:"53D3183C-75C3-48F1-900D-A4E4206E35CE"}
 */
function Controlo_Cajas_Cirugia() {
	databaseManager.refreshRecordFromDatabase(vhiscli_to_tbc_cirugint.tbc_cirugint_to_tbc_cajcirugia,-1)
	if(vhiscli_to_tbc_cirugint.tbc_cirugint_to_tbc_cajcirugia.getSize()<1){
		vAltaProtocoloOk=false
		vProcesosFaltantes+="No tiene Cajas quirúrgicas, no puede dar alta"+'\n'
	}
}

/**
 * @properties={typeid:24,uuid:"8270070B-2B03-45FC-8B1E-BAEE942573BD"}
 * @AllowToRunInFind
 */
function Controlo_Seguqui() {
	databaseManager.refreshRecordFromDatabase(vhiscli_to_tbc_seguqui_new,-1)
	vhiscli_to_tbc_seguqui_new.find()
	vhiscli_to_tbc_seguqui_new.search(true)
	var query = "select * from tbc_seguqui_new where segtipohc = 0 and seghistclinica = ? and segprotocolo = ? ";
    var args = new Array();
    args[0]=globals.vHiscli;
    args[1]=globals.vNroProtocolo;
    var dataset = new Array();
    dataset = databaseManager.getDataSetByQuery("asistencial", query, args, 1);
    
	var fs = databaseManager.getFoundSet("asistencial","tbc_seguqui_new")
	
	fs.find()
	fs['segtipohc']=0
	fs['seghistclinica']=globals.vHiscli
	fs['segprotocolo']=globals.vNroProtocolo
	fs.search(true)
	var tieneSeguquiAntes=true
	var tieneSeguquiAIncision=true
	var tieneSeguqui=true
	//if(vhiscli_to_tbc_seguqui_new.getSize()>0){
	//if(fs.getSize()>0){
	if(dataset.getMaxRowIndex()>0){
		if(dataset.getValue(1,14)==0||dataset.getValue(1,15)==0||dataset.getValue(1,16)==0||dataset.getValue(1,17)==0||dataset.getValue(1,18)==0||dataset.getValue(1,19)==0||dataset.getValue(1,20)==0||dataset.getValue(1,10)==0||dataset.getValue(1,21)==0){
		//if(fs['segcirculident']==0||fs['segcirculbanio']==0||fs['segcirculmate']==0||fs['segcirculhiscli']==0||fs['segcirculestu']==0||fs['segcirculprote']==0||fs['segcirculconsen']==0||fs['segadmindiag']==0||fs['seglegacirculini']==0){
			tieneSeguquiAntes=false
		}
		if(dataset.getValue(1,23)==0||dataset.getValue(1,24)==0||dataset.getValue(1,25)==0||dataset.getValue(1,26)==0||dataset.getValue(1,28)==0||dataset.getValue(1,29)==0||dataset.getValue(1,30)==0||dataset.getValue(1,31)==0||dataset.getValue(1,62)==0||dataset.getValue(1,63)==0||dataset.getValue(1,64)==0){
		//if(fs['seganestident']==0||fs['seganestpulso']==0||fs['seganestseguri']==0||fs['seganestviaaerea']==0||fs['seganestacceso']==0||fs['seganestsangre']==0||fs['seglegaanestini']==0||fs['seganestcomorb']==0){
			tieneSeguquiAntes=false
		}
		if(dataset.getValue(1,33)==0||dataset.getValue(1,34)==0||dataset.getValue(1,35)==0||dataset.getValue(1,36)==0||dataset.getValue(1,37)==0){
		//if(fs['segciruident']==0||fs['segciruantibiot']==0||fs['segcirubisturi']==0||fs['segciruincidentes']==0||fs['seglegaciruini']==0){
			tieneSeguquiAntes=false
		}
		if(dataset.getValue(1,39)==0||dataset.getValue(1,42)==0||dataset.getValue(1,43)==0||dataset.getValue(1,44)==0||dataset.getValue(1,40)==0||dataset.getValue(1,45)==0){
		//if(fs['seganestrepasaini']==0||fs['seginstrurepasaini']==0||fs['seginstrugasasini']==0||fs['seginstrupinzasini']==0||fs['seglegaanestrepi']==0||fs['seglegainstruini']==0){
			tieneSeguquiAntes=false
		}
		if(dataset.getValue(1,47)==0||dataset.getValue(1,48)==0||dataset.getValue(1,49)==0){
		//if(fs['segciruproced']==0||fs['segciruindica']==0||fs['seglegacirufin']==0){
			tieneSeguqui=false
		}
		if(dataset.getValue(1,51)==0||dataset.getValue(1,54)==0||dataset.getValue(1,55)==0||dataset.getValue(1,52)==0||dataset.getValue(1,56)==0){
		//if(fs['seganestplan']==0||fs['seginstrugasasfin']==0||fs['seginstrupinzasfin']==0||fs['seglegaanestfin']==0||fs['seglegainstrufin']==0){
			tieneSeguqui=false
		}
		if(dataset.getValue(1,58)==0||dataset.getValue(1,60)==0||dataset.getValue(1,65)==0||dataset.getValue(1,66)==0||dataset.getValue(1,67)==0||dataset.getValue(1,68)==0){
		//if(fs['segcirculmuestras']==0||fs['seglegacirculfin']==0||fs['segcirculproinstru']==0||fs['segcirculnormot']==0||fs['segcirculparteciru']==0||fs['segcirculparteanes']==0){
			tieneSeguqui=false
		}
		if(dataset.getValue(1,69)==0||dataset.getValue(1,70)==0||dataset.getValue(1,71)==0||dataset.getValue(1,72)==0||dataset.getValue(1,73)==0||dataset.getValue(1,74)==0||dataset.getValue(1,75)==0){
		//if(fs['segcirculequipres']==0||fs['segcirculequifunc']==0||fs['segcirculidsipr']==0||fs['segcirculdecubi']==0||fs['segcirculimprev']==0||fs['segcirculanesproblema']==0||fs['seglegacirculcut']==0){
			tieneSeguquiAIncision=false
		}
	}else{
		tieneSeguquiAIncision=false
		tieneSeguqui=false
		tieneSeguquiAntes=false
	}
	if(!tieneSeguqui){
		vAltaProtocoloOk=false
		vProcesosFaltantes+="Falta llenar Seguridad Quirúrgica al final de la Cirugía"+'\n'
	}
	if(!tieneSeguquiAIncision){
		vAltaProtocoloOk=false
		vProcesosFaltantes+="Falta llenar Seguridad Quirúrgica antes de La Incisión Cutánea"+'\n'
	}
	if(!tieneSeguquiAntes){
		vAltaProtocoloOk=false
		vProcesosFaltantes+="Falta llenar Seguridad Quirúrgica antes de la Cirugía"+'\n'
	}
}

/**
 * @properties={typeid:24,uuid:"7765AC3E-6896-45C5-8814-D5481BC1B03A"}
 * @AllowToRunInFind
 */
function Controlo_Ciri_Anestesia() {
	var fs = databaseManager.getFoundSet("asistencial","tbc_anestesia")
	var fecha_hoy = new Date()
	var fecha = 0
	var fecha_aux = 0
	fecha_aux = application.getServerTimeStamp().getTime() - ((1000 * 60 * 60 * 24) * 2)
	var fecha_ant = new Date(fecha_hoy.setTime(fecha_aux))
	fecha = globals.DateToEntero(fecha_ant)
	fs.clear()
	fs.find()
	fs['anes_estado']= '<2'
	fs['anes_histclin']= globals.vHiscli
	fs['anes_feccarga']= '>='+fecha
	fs.search(true)
	var tieneAnestesia=true
	if(vhiscli_to_tbc_cirugint.cirianestesia==1){
		//if(vhiscli_to_tbc_anestesia.getSize()>0){
		if(fs.getSize()>0){
			fs.setSelectedIndex(1)
			//if(vhiscli_to_tbc_anestesia.anes_inhend==0){
			if(fs['anes_inhend']==0){
				vProcesosFaltantes+="Falta ingresar Tipo de Anestesia en Evaluación Anestesia Post-operatoria"+'\n'
				//plugins.dialogs.showInfoDialog("Anestesia - Tipo Anestesia",vProcesosFaltantes)
				tieneAnestesia=false
			}
			//if(vhiscli_to_tbc_anestesia.anes_espasi==0){
			if(fs['anes_espasi']==0){
				vProcesosFaltantes+="Falta ingresar Tipo de Respiración en Evaluación Anestesia Post-operatoria"+'\n'
				//plugins.dialogs.showInfoDialog("Anestesia - Respiracion",vProcesosFaltantes)
				tieneAnestesia=false
			}
			//if(vhiscli_to_tbc_anestesia.anes_circuito==0){
			if(fs['anes_circuito']==0){
				vProcesosFaltantes+="Falta ingresar Circuito en Evaluación Anestesia Post-operatoria"+'\n'
				//plugins.dialogs.showInfoDialog("Anestesia - Circuito",vProcesosFaltantes)
				tieneAnestesia=false
			}
			//if(vhiscli_to_tbc_anestesia.anes_apgar==0){
			if(fs['anes_apgar']==0){
				vProcesosFaltantes+="Falta ingresar Apgar en Evaluación Anestesia Post-operatoria"+'\n'
				//plugins.dialogs.showInfoDialog("Anestesia - Apgar",vProcesosFaltantes)
				tieneAnestesia=false
			}
			//if(vhiscli_to_tbc_anestesia.anes_espasi==2&&vhiscli_to_tbc_anestesia.anes_mecman==0){
			if(fs['anes_espasi']==2&&fs['anes_mecman']==0){
				vProcesosFaltantes+="Falta ingresar Respiración Controlada en Evaluación Anestesia Post-operatoria"+'\n'
				//plugins.dialogs.showInfoDialog("Anestesia - Control de Respiracion",vProcesosFaltantes)
				tieneAnestesia=false
			}
			//if(vhiscli_to_tbc_anestesia.anes_condicion==''||vhiscli_to_tbc_anestesia.anes_condicion==null){
			if(fs['anes_condicion']==''||fs['anes_condicion']==null){
				vProcesosFaltantes+="Falta ingresar Condición en Evaluación Anestesia Post-operatoria"+'\n'
				//plugins.dialogs.showInfoDialog("Anestesia - Condición",vProcesosFaltantes)
				tieneAnestesia=false
			}
			var j=0
			for(var i=1;i<9;i++){
				var name1 = 'anes_anesoper_'+i
				//if(vhiscli_to_tbc_anestesia[name1]>0){
					//j=+vhiscli_to_tbc_anestesia[name1]
				if(fs[name1]>0){
					j=+fs[name1]

				}
			}
			if(j==0){
				vProcesosFaltantes+="Falta ingresar Estado del paciente en Evaluación Anestesia Post-operatoria"+'\n'
				//plugins.dialogs.showInfoDialog("Anestesia - Estado Paciente",vProcesosFaltantes)
				tieneAnestesia=false
			}
			/*
			var l=0
			for(var k=1;k<3;k++){
				var name2= 'anes_shock_'+k
				l=+vhiscli_to_tbc_anestesia[name2]
			}
			if(l==0){
				tieneAnestesia=false
			}
			*/
			var n=0
			for(var m=1;m<=5;m++){
				var name3= 'anes_esca_'+m
				//if(vhiscli_to_tbc_anestesia[name3]>0){
					//n=+vhiscli_to_tbc_anestesia[name3]
				if(fs[name3]>0){
					n=+fs[name3]
				}
			}
			if(n==0){
				vProcesosFaltantes+="Falta Completar Escala de Alderete en Evaluación Anestesia Post-operatoria"+'\n'
				//plugins.dialogs.showInfoDialog("Anestesia - Alderete",vProcesosFaltantes)
				tieneAnestesia=false
			}
		}else{
			vProcesosFaltantes+="No grabó Evaluación Anestesia Post-operatoria"+'\n'
			//plugins.dialogs.showInfoDialog("Anestesia - Sin registro",vProcesosFaltantes)
			tieneAnestesia=false
		}
		if(!tieneAnestesia){
			vAltaProtocoloOk=false
		}
	}else{
		if(fs.getSize()>0){
			vProcesosFaltantes+="Existe registro de Evaluación Anestésica"+'\n'
			vProcesosFaltantes+="y el Protocolo no tiene marca de Anestesia, grabe la marca por favor!"+'\n'
			//plugins.dialogs.showInfoDialog("Anestesia - Sin registro",vProcesosFaltantes)
			tieneAnestesia=false
			vAltaProtocoloOk=false
		}
	}
}

/**
 * @properties={typeid:24,uuid:"5A9C5185-0B0C-44DC-A794-4106CFBDBAF3"}
 */
function Controlo_Intervencion_Parto() {
	if(foundset.ciriinterven==161||foundset.ciriinterven==162||foundset.ciriinterven==878){
		if(foundset.ciriparto!=1){
			vAltaProtocoloOk=false
			vProcesosFaltantes+="No grabó Datos del Parto"+'\n'
		}
	}
}

/**
 * Handle changed data.
 *
 * @param oldValue old value
 * @param newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"AEEF436F-B74B-4970-9095-B7CA1AAA0203"}
 */
function onDataChange_firmo_consenti(oldValue, newValue, event) {
	var name = 'alta'
	var names =''
	var i=0
	if(vAltaProtocoloOk){
		if(newValue=='S'){
			for(i=10;i<=13;i++){
				names = name+i
				elements[names].visible=true
			}
		}else{
			for(i=10;i<=13;i++){
				names = name+i
				elements[names].visible=false
			}
		}
		elements.alta11.requestFocus()
		return true
	}else{
		return false
	}
}

/**
 * Handle changed data.
 *
 * @param oldValue old value
 * @param newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"43643C79-EBA6-4DD0-B7CB-A368DB23C094"}
 */
function onDataChange_LegajoConsenti(oldValue, newValue, event) {
	if(globals.vLegajoConsenti!=0&&globals.vLegajoConsenti!=null&&globals.vLegajoConsenti!=''){
		globals.vLegaConsenti=globals.vLegajoConsenti
		globals.vlargoConsenti= globals.vLegaConsenti.toString().length - 1;
		if(globals.vlargoConsenti!=0){
			globals.vLegaConsenti=globals.vLegaConsenti.toString().substr(0,globals.vlargoConsenti)
			globals.digito_verificadorConsenti = utils.stringToNumber(globals.vLegajoConsenti.toString().substr(globals.vlargoConsenti, 1))
			if (globals.digito_verificadorConsenti == 0){
				if (vlegajoconsenti_to_tbc_medicos.getSize()>0){
					globals.vOperadorConsenti=vlegajoconsenti_to_tbc_medicos.med_apenom;
					elements.alta13.requestFocus()
					return true
				}else{
					if(vlegajoconsenti_to_tbc_personal_login.getSize()>0){
						globals.vDigVerifConsenti=true
						calculaDigitoVerificadorConsenti()
	    		
						if(!globals.vDigVerifConsenti){
							globals.vOperadorConsenti="Digito verificador erroneo";
							return false
						}else{
							if(vlegajoconsenti_to_tbc_personal_login.per_fecbaja!=0){
								globals.vOperador="El legajo tiene fecha de baja";
								return false
							}else{
								globals.vOperadorConsenti=vlegajoconsenti_to_tbc_personal_login.per_apelnom;
								elements.alta13.requestFocus()
								return true
							}
						}
					}else{
						return false
					}
				}
			}else{
				if(vlegajoconsenti_to_tbc_personal_login.getSize()>0){
					globals.vDigVerifConsenti=true
					calculaDigitoVerificadorConsenti()
					if(!globals.vDigVerifConsenti){
						globals.vOperadorConsenti="Digito verificador erroneo";
						return false
					}else{
						if(vlegajoconsenti_to_tbc_personal_login.per_fecbaja!=0){
							globals.vOperador="El legajo tiene fecha de baja";
							return false
						}else{
							globals.vOperadorConsenti=vlegajoconsenti_to_tbc_personal_login.per_apelnom;
						/**
						if(vs_to_permisos_grales.getSize()<1){
							plugins.dialogs.showInfoDialog("",globals.vTipoOperador)
							plugins.dialogs.showInfoDialog("",globals.vLegajo)
							if(usuarios_to_usuarios_grupos.getSize()<1){
								globals.vAvisoError="No tiene permisos de acceso"
								globals.muestraAvisoError()	
								return false
							}else{
								if(usuarios_to_usuarios_grupos.usuarios_grupos_to_permisos_grupos.getSize()<1){
									globals.vAvisoError="No tiene permisos de acceso"
									globals.muestraAvisoError()	
									return false
								}else{
									forms.LoginCirugia.elements.clave.requestFocus()
									return true
								}
							}
							*/
						//}else{
						
						    elements.alta13.requestFocus()
							return true
						}	
					}
				}else{
					return false
				}
			}
		}else{
			return false
		}
	}else{
		return false
	}
}

/**
 * @properties={typeid:24,uuid:"A945F954-2ED2-4963-94F6-260573FB7EC3"}
 */
function calculaDigitoVerificadorConsenti() {
	var aux_dig = new Array(5);
	if(globals.vlargoConsenti==2){
		aux_dig[0] = 0
		aux_dig[1] = 0
		aux_dig[2] = 0
		aux_dig[3] = globals.vLegaConsenti.toString().substr(0,1);
		aux_dig[4] = globals.vLegaConsenti.toString().substr(1,1);
	}else{
		if (globals.vlargoConsenti==3){
			aux_dig[0] = 0
			aux_dig[1] = 0
			aux_dig[2] = globals.vLegaConsenti.toString().substr(0,1);
			aux_dig[3] = globals.vLegaConsenti.toString().substr(1,1);
			aux_dig[4] = globals.vLegaConsenti.toString().substr(2,1);
		}else{
			if(globals.vlargoConsenti==4){
				aux_dig[0] = 0
				aux_dig[1] = globals.vLegaConsenti.toString().substr(0,1);
				aux_dig[2] = globals.vLegaConsenti.toString().substr(1,1);
				aux_dig[3] = globals.vLegaConsenti.toString().substr(2,1);
				aux_dig[4] = globals.vLegaConsenti.toString().substr(3,1);
			}else{
				if(globals.vlargoConsenti==5){
					aux_dig[0] = globals.vLegaConsenti.toString().substr(0,1);
					aux_dig[1] = globals.vLegaConsenti.toString().substr(1,1);
					aux_dig[2] = globals.vLegaConsenti.toString().substr(2,1);
					aux_dig[3] = globals.vLegaConsenti.toString().substr(3,1);
					aux_dig[4] = globals.vLegaConsenti.toString().substr(4,1);
				}
			}
		}
	}
	var verificador = 0;
	verificador = utils.stringToNumber(aux_dig[1]) + utils.stringToNumber(aux_dig[2]) * 3 + utils.stringToNumber(aux_dig[3]) * 9 + utils.stringToNumber(aux_dig[4]) * 7;
	var larg = verificador.toString().length - 1;
	if(globals.digito_verificadorConsenti!=verificador.toString().substr(larg,1)){
		globals.vDigVerifConsenti=false
	}

}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"5250942D-0E84-472B-9916-C2CE2DB1CE7B"}
 */
function onAction_claveConsenti(event) {
	globals.vFechaFinal=application.getServerTimeStamp()
	var user = false;
	if(globals.vLegajoConsenti!=0&&globals.vLegajoConsenti!=null){
	globals.vPassOperadorConsenti=''
	globals.vLegaConsenti=globals.vLegajoConsenti
	globals.vlargoConsenti= globals.vLegaConsenti.toString().length - 1;
    globals.vLegaConsenti=globals.vLegaConsenti.toString().substr(0,globals.vlargoConsenti)
	globals.digito_verificadorConsenti = utils.stringToNumber(globals.vLegajoConsenti.toString().substr(globals.vlargoConsenti, 1))
	if (globals.digito_verificadorConsenti == 0){
		if (vlegajoconsenti_to_tbc_medicos.getSize()>0){
			globals.vOperadorConsenti=vlegajoconsenti_to_tbc_medicos.med_apenom;
			if(globals.vClaveConsenti!=vlegajoconsenti_to_tbc_medicos.med_clave){
				globals.vPassOperadorConsenti="Clave Incorrecta";
			}else{
			   globals.vTipoOperadorConsenti=1
			   user=true
			}
		}else{
	    	if(vlegajoconsenti_to_tbc_personal_login.getSize()>0){
	    		globals.vDigVerifConsenti=true
		       calculaDigitoVerificadorConsenti()
		       if(!globals.vDigVerifConsenti){
		    	   globals.vOperadorConsenti="Digito verificador erroneo";
		       }else{
		    	   if(globals.vClaveConsenti!=vlegajoconsenti_to_tbc_clave_legajo.hor_perclave){
						globals.vPassOperadorConsenti="Clave Incorrecta";
					}else{
					   globals.vTipoOperadorConsenti=1
					   user=true
					}
			   }
	    	}else{
	    		globals.vOperadorConsenti="Operador No Valido";
	    		
	    	}
		}
	}else{
		if(vlegajoconsenti_to_tbc_personal_login.getSize()>0){
				globals.vDigVerifConsenti=true
		       calculaDigitoVerificadorConsenti()
		       if(!globals.vDigVerifConsenti){
		    	   globals.vOperadorConsenti="Digito verificador erroneo";
		       }else{
			      globals.vOperadorConsenti=vlegajoconsenti_to_tbc_personal_login.per_apelnom;
			      if(globals.vClaveConsenti!=vlegajoconsenti_to_tbc_clave_legajo.hor_perclave){
						globals.vPassOperadorConsenti="Clave Incorrecta";
					}else{
						globals.vTipoOperadorConsenti=1
						user=true
					}
		       }
	    	}else{
	    		
	    		globals.vOperadorConsenti="Operador No Valido";
	    		
	    	}
	}
	}	
	
    if(user){
	     elements.alta20.visible=true
	     elements.alta21.visible=true
		 elements.alta21.enabled=false
		 elements.alta21.editable=false
		 //elements.alta21.requestFocus()
		 elements.alta30.visible=true
	     elements.alta31.visible=true
		 elements.alta31.requestFocus()
	}else{
		elements.alta13.requestFocus()
	}
}

/**
 * Handle changed data.
 *
 * @param oldValue old value
 * @param newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"427B756A-4627-455B-82F0-36903A43A72D"}
 */
function onDataChange_claveConsenti(oldValue, newValue, event) {
	// TODO Auto-generated method stub
	return true
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"7231CC89-1123-410D-918D-3316EBB055D9"}
 */
function onAction_fechaFinal(event) {
	if(globals.vFechaFinal==null){
		globals.vFechaFinal=application.getServerTimeStamp()
		elements.alta30.visible=true
		elements.alta31.visible=true
		elements.alta31.requestFocus()
	}else{
		globals.vFechaAhora9=application.getServerTimeStamp()
		if(globals.vFechaFinal>globals.vFechaAhora9){
			globals.vFechaFinal=null
			elements.alta21.requestFocus()
		}else{
			elements.alta30.visible=true
			elements.alta31.visible=true
			elements.alta31.requestFocus()
		}
	}
	
}

/**
 * Handle changed data.
 *
 * @param oldValue old value
 * @param newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"0F4F3C80-75CB-464A-95F0-7EAEC37B7F2E"}
 */
function onDataChange_pinzasfinal(oldValue, newValue, event) {
	elements.alta40.visible=true
	elements.alta41.visible=true
	elements.alta41.requestFocus()
	return true
}

/**
 * Handle changed data.
 *
 * @param oldValue old value
 * @param newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"EA3E78B1-3736-4142-B424-3FF53E9E78BB"}
 */
function onDataChange_gasasfinal(oldValue, newValue, event) {
	elements.alta50.visible=true
	elements.alta51.visible=true
	elements.alta51.requestFocus()
	return true
}

/**
 * Handle changed data.
 *
 * @param oldValue old value
 * @param newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"E7107EA1-0F36-47C2-825D-747F9345A280"}
 */
function onDataChange_fechafinal(oldValue, newValue, event) {
	if(globals.vFechaFinal==null){
		globals.vFechaFinal=application.getServerTimeStamp()
		elements.alta30.visible=true
		elements.alta31.visible=true
		elements.alta31.requestFocus()
		return true
	}else{
		globals.vFechaAhora9=application.getServerTimeStamp()
		if(globals.vFechaFinal>globals.vFechaAhora9){
			globals.vFechaFinal=null
			elements.alta21.requestFocus()
			return false
		}else{
			if(globals.vFechaFinal<globals.vFechaInicio){
				globals.vFechaFinal=null
				elements.alta21.requestFocus()
				return false
			}else{
				elements.alta30.visible=true
				elements.alta31.visible=true
				elements.alta31.requestFocus()
				return true
			}
		}
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"D0B2A8FF-727A-4E32-A7B1-BBCA1771FB9D"}
 * @AllowToRunInFind
 */
function onAction_Confirma_Alta(event) {
	if(vciri_legciru_to_tbc_medicos_personal.getSize()<1){
		plugins.dialogs.showWarningDialog("Error en Cirujano","Código de Cirujano Inexistente. Ingrese un código correcto para poder grabar.","Ok")
		return 
	}
	if(vinterven0_to_tbc_interven.getSize()<1){
		plugins.dialogs.showWarningDialog("Error en Intervención","Código de Intervención Inexistente. Ingrese un código válido para poder grabar.","Ok")
		return
	}
	if(!buscaProtocoloAbierto(globals.vciri_legciru)){
		plugins.dialogs.showWarningDialog("Error en Cirujano","Código de Cirujano con protocolo sin cerrar. Ingrese un código correcto para poder grabar.","Ok")
		return
	}
	if(!vAltaProtocoloOk){
		plugins.dialogs.showWarningDialog("Error en Controles","El Protocolo no puede cerrarse. Verificar datos cargados.","Ok")
		return
	}
	elements.bean_243.visible=true
	elements.bean_243.minimum=1
	elements.bean_243.maximum=100
	elements.bean_243.stringPainted=true
	elements.bean_243.value = 0
	application.updateUI()	
	var ww = 0
	if(foundset.ciritipointerven==2){
		//globals.vEstado116=3
		//globals.vSector116=34
		globals.vEstado116=1
		globals.vSector116=66
	}else{
		globals.vEstado116=1
		globals.vSector116=66
	}
	globals.vFechaFinal = application.getServerTimeStamp()
	var aniofinal = globals.vFechaFinal.getFullYear()
	var mesfinal = globals.vFechaFinal.getMonth()+1
	var diafinal = globals.vFechaFinal.getDate()
	
	var horafinal = globals.vFechaFinal.getHours()
	var minutofinal = globals.vFechaFinal.getMinutes()
	var mesfinal_ed=''
	var diafinal_ed=''
	if(mesfinal<10){
		mesfinal_ed='0'+mesfinal
	}else{
		mesfinal_ed = mesfinal
	}
	if(diafinal<10){
		diafinal_ed='0'+diafinal
	}else{
		diafinal_ed=diafinal
	}
	var hora_ed=''
	var minutos_ed=''
	if (horafinal<10){
		hora_ed='0'+horafinal
	}else{
		hora_ed=horafinal
	}
	if(minutofinal<10){
		minutos_ed='0'+minutofinal
	}else{
		minutos_ed=minutofinal
	}
	var error1 = ''
	var error2 = ''
	var array = new Array()
	var i = 0
	var record = null
	var jstable = null
	var tableSQLName = null
	var thrown = null
	
	forms.AltaProtocolo.foundset.cirifechafinal=aniofinal+''+mesfinal_ed+''+diafinal_ed
	forms.AltaProtocolo.foundset.cirihorafinal=hora_ed+''+minutos_ed
	forms.AltaProtocolo.foundset.ciriconsenti='S'
	forms.AltaProtocolo.foundset.ciriieconsenti=globals.vTipoOperadorConsenti
	forms.AltaProtocolo.foundset.cirilegconsenti=globals.vLegaConsenti
	forms.AltaProtocolo.foundset.ciriestado=1
	
	if(vs_to_tbc_anatpaca.getSize()>0){
		forms.AltaProtocolo.foundset.ciripatologia=1
	}
	
	try{
		databaseManager.saveData(forms.AltaProtocolo.foundset.getRecord(1))
		array = databaseManager.getFailedRecords(forms.AltaProtocolo.foundset)
		for (i = 0; i < array.length; i++) {
			record = array[i];
			jstable = databaseManager.getTable(record);
			tableSQLName = jstable.getSQLName();
			//plugins.dialogs.showErrorDialog("Error de Grabación",'Tabla:' + tableSQLName + ' en server:' + jstable.getServerName() + ' falló la grabación. Avise urgente a Sistemas, por favor!')
			//plugins.dialogs.showErrorDialog("Error en grabación de tbc_cirugint",record.exception);
			error1='Error de Grabación en Tabla:' + tableSQLName + ' en server:' + jstable.getServerName() + ' falló la grabación. Avise urgente a Sistemas, por favor!'
			error2='Error en grabación de tbc_cirugint '+record.exception;
			application.output(record.exception)
			if (record.exception.getErrorCode() == ServoyException.RECORD_VALIDATION_FAILED) {
			// exception thrown in pre-insert/update/delete event method
				 thrown = record.exception.getValue()
				//plugins.dialogs.showErrorDialog("Error de grabación","Record validation failed: " + thrown)
			}
		// find out the table of the record (similar to getEditedRecords)
			application.output("Error de Grabación Tabla:" + tableSQLName + " en server:" + jstable.getServerName() + " falló la grabación.")
		}
		if(error1!=''){
			forms.frm_consulta_protocolo.grabaLog("Error Graba tbc_cirugint "+error1)
			forms.frm_consulta_protocolo.grabaLog("Error Graba tbc_cirugint "+error2)
			plugins.dialogs.showErrorDialog("Error en grabación","Se ha producido un error de grabación. "+'\n'+"Avise a Sistemas, por favor.", "Ok")
			plugins.dialogs.showErrorDialog("Error de grabación al Alta de Protocolo","Record validation failed: " + thrown)
			plugins.dialogs.showErrorDialog("Error en grabacion en tbc_cirugint al Alta",error1,"Ok")
			plugins.dialogs.showErrorDialog("Error en grabacion en tbc_cirugint al Alta",error2,"Ok")
		}
	}catch (msg){
		forms.frm_consulta_protocolo.grabaLog(msg.message)
		forms.frm_consulta_protocolo.grabaLog("Error Graba_tbc_cirugint")
		(plugins.dialogs.showInfoDialog("Prueba de error",msg.toString(),"ok"))
	}	
	ww = ww + 10
	elements.bean_243.value = ww
	application.updateUI()
	//databaseManager.refreshRecordFromDatabase(forms.AltaProtocolo.foundset,1)
	var fechaactual =application.getServerTimeStamp()
	var anio2 = fechaactual.getFullYear()
	var mes2 = fechaactual.getMonth()+1
	var dia2 = fechaactual.getDate()
	var mes_ed2
	var dia_ed2
	if(mes2<10){
		mes_ed2='0'+mes2
	}else{
		mes_ed2 = mes2
	}
	if(dia2<10){
		dia_ed2='0'+dia2
	}else{
		dia_ed2=dia2
	}
	var fs2 = databaseManager.getFoundSet("asistencial", "tbc_segpac")
	var fs3 = databaseManager.getFoundSet("asistencial", "tbc_segpac")
	fs2.find()
	fs2['sepa_histclin'] = globals.vHiscli
	fs2['sepa_esp'] = vciri_legciru_to_tbc_medicos_personal.medperesp
	fs2.search()
	error1=''
	error2=''
	if (fs2.getSize() < 1) {
		fs2.newRecord()
		fs2['sepa_esp']=vciri_legciru_to_tbc_medicos_personal.medperesp
		fs2['sepa_histclin'] = globals.vHiscli
		fs2['sepa_secu']=0
		fs2['sepa_estado']=0
		fs2['sepa_fecinicio']=anio2+''+mes_ed2+''+dia_ed2
		fs2['sepa_fecfinal']=0
		fs2['sepa_origentipo']=2
		fs2['sepa_origennro']=globals.vNroProtocolo
		fs2['sepa_legmed']=forms.AltaProtocolo.foundset.cirilegciru
		fs2['sepa_tiplegmed']=forms.AltaProtocolo.foundset.ciriieciru
		fs2['sepa_tiplegmedfinal']=0
		fs2['sepa_legmedfinal']=0
		fs2['sepa_filler']=' '
		
		try{
			databaseManager.saveData(fs2.getRecord(1))
			array = databaseManager.getFailedRecords(fs2)
			for (i = 0; i < array.length; i++) {
				record = array[i];
				jstable = databaseManager.getTable(record);
				tableSQLName = jstable.getSQLName();
				//plugins.dialogs.showErrorDialog("Error de Grabación",'Tabla:' + tableSQLName + ' en server:' + jstable.getServerName() + ' falló la grabación. Avise urgente a Sistemas, por favor!')
				//plugins.dialogs.showErrorDialog("Error en grabación de tbc_cirugint",record.exception);
				error1='Error de Grabación en Tabla:' + tableSQLName + ' en server:' + jstable.getServerName() + ' falló la grabación. Avise urgente a Sistemas, por favor!'
				error2='Error en grabación de tbc_segpac '+record.exception;
				application.output(record.exception)
				if (record.exception.getErrorCode() == ServoyException.RECORD_VALIDATION_FAILED) {
				// exception thrown in pre-insert/update/delete event method
					thrown = record.exception.getValue()
					//plugins.dialogs.showErrorDialog("Error de grabación","Record validation failed: " + thrown)
				}
			// find out the table of the record (similar to getEditedRecords)
				application.output("Error de Grabación Tabla:" + tableSQLName + " en server:" + jstable.getServerName() + " falló la grabación.")
			}
			if(error1!=''){
				forms.frm_consulta_protocolo.grabaLog("Error Graba_tbc_segpac"+error1)
				forms.frm_consulta_protocolo.grabaLog("Error Graba_tbc_segpac"+error2)
				plugins.dialogs.showErrorDialog("Error en grabación","Se ha producido un error de grabación. "+'\n'+"Avise a Sistemas, por favor.", "Ok")
				plugins.dialogs.showErrorDialog("Error de grabación al Alta de Protocolo","Record validation failed: " + thrown)
				plugins.dialogs.showErrorDialog("Error en grabacion en tbc_segpac al Alta",error1,"Ok")
				plugins.dialogs.showErrorDialog("Error en grabacion en tbc_segpac al Alta",error2,"Ok")
			}
		}catch (msg){
			forms.frm_consulta_protocolo.grabaLog(msg.message)
			forms.frm_consulta_protocolo.grabaLog("Error Graba_tbc_segpac")
			(plugins.dialogs.showInfoDialog("Prueba de error",msg.toString(),"ok"))
		}	
		
	}else{
		fs3.find()
		fs3['sepa_histclin'] = globals.vHiscli
		fs3['sepa_esp'] = vciri_legciru_to_tbc_medicos_personal.medperesp
		fs3['sepa_estado']=0
		fs3.search()
		if(fs3.getSize()<1){
			var secu=0
			for(var j=1;j<=fs2.getSize();j++){
				fs2.setSelectedIndex(j)
				secu=fs2['sepa_secu']
			}
			fs3.newRecord()
			fs3['sepa_esp']=vciri_legciru_to_tbc_medicos_personal.medperesp
			fs3['sepa_histclin'] = globals.vHiscli
			fs3['sepa_secu']=secu+1
			fs3['sepa_estado']=0
			fs3['sepa_fecinicio']=anio2+''+mes_ed2+''+dia_ed2
			fs3['sepa_fecfinal']=0
			fs3['sepa_origentipo']=2
			fs3['sepa_origennro']=globals.vNroProtocolo
			fs3['sepa_legmed']=forms.AltaProtocolo.foundset.cirilegciru
			fs3['sepa_tiplegmed']=forms.AltaProtocolo.foundset.ciriieciru
			fs3['sepa_tiplegmedfinal']=0
			fs3['sepa_legmedfinal']=0
			fs3['sepa_filler']=' '
			
			try{
				databaseManager.saveData(fs3.getRecord(1))
			}catch (msg){
				forms.frm_consulta_protocolo.grabaLog(msg.message)
				forms.frm_consulta_protocolo.grabaLog("Error Graba_tbc_segpac")
				(plugins.dialogs.showInfoDialog("Prueba de error",msg.toString(),"ok"))
			}	
			array = databaseManager.getFailedRecords(fs3)
			for (i = 0; i < array.length; i++) {
				record = array[i];
				jstable = databaseManager.getTable(record);
				tableSQLName = jstable.getSQLName();
				//plugins.dialogs.showErrorDialog("Error de Grabación",'Tabla:' + tableSQLName + ' en server:' + jstable.getServerName() + ' falló la grabación. Avise urgente a Sistemas, por favor!')
				//plugins.dialogs.showErrorDialog("Error en grabación de tbc_cirugint",record.exception);
				error1='Error de Grabación en Tabla:' + tableSQLName + ' en server:' + jstable.getServerName() + ' falló la grabación. Avise urgente a Sistemas, por favor!'
				error2='Error en grabación de tbc_segpac '+record.exception;
				application.output(record.exception)
				if (record.exception.getErrorCode() == ServoyException.RECORD_VALIDATION_FAILED) {
				// exception thrown in pre-insert/update/delete event method
					thrown = record.exception.getValue()
					//plugins.dialogs.showErrorDialog("Error de grabación","Record validation failed: " + thrown)
				}
			// find out the table of the record (similar to getEditedRecords)
				application.output("Error de Grabación Tabla:" + tableSQLName + " en server:" + jstable.getServerName() + " falló la grabación.")
			}
			if(error1!=''){
				forms.frm_consulta_protocolo.grabaLog("Error Graba_tbc_segpac"+error1)
				forms.frm_consulta_protocolo.grabaLog("Error Graba_tbc_segpac"+error2)
				plugins.dialogs.showErrorDialog("Error en grabación","Se ha producido un error de grabación. "+'\n'+"Avise a Sistemas, por favor.", "Ok")
				plugins.dialogs.showErrorDialog("Error de grabación al Alta de Protocolo","Record validation failed: " + thrown)
				plugins.dialogs.showErrorDialog("Error en grabacion en tbc_segpac al Alta",error1,"Ok")
				plugins.dialogs.showErrorDialog("Error en grabacion en tbc_segpac al Alta",error2,"Ok")
			}
		}
	}
	ww = ww + 10
	elements.bean_243.value = ww
	application.updateUI()
	try{
		Graba_Medic_cir()
	}catch(msg){
		forms.frm_consulta_protocolo.grabaLog(msg.message)
		forms.frm_consulta_protocolo.grabaLog("Error Graba_Medic_cir()")
		plugins.dialogs.showErrorDialog("Error en grabación MEDIC-CIR","Se ha producido un error de grabación. "+'\n'+"Avise a Sistemas, por favor.", "Ok")
	}
	ww = ww + 10
	elements.bean_243.value = ww
	application.updateUI()
	try{
		Actualiza_Anestesia()
	}catch(msg){
		forms.frm_consulta_protocolo.grabaLog(msg.message)
		forms.frm_consulta_protocolo.grabaLog("Error en Actualiza_Anestesia()")
		plugins.dialogs.showErrorDialog("Error en Actualiza Anestesia",msg.message)
	}finally{
		forms.frm_consulta_protocolo.grabaLog("Actualiza_Anestesia()")
	}
	ww = ww + 10
	elements.bean_243.value = ww
	application.updateUI()
	var fs_fichaanestesica = databaseManager.getFoundSet("desal","fichaaneste_cab")
	fs_fichaanestesica.find()
	fs_fichaanestesica['histcli_unico']=globals.vHiscli
	fs_fichaanestesica['tbc_anest_carga_fecha']=globals.vFeccarga
	fs_fichaanestesica['tbc_anest_carga_hora']=globals.vHorcarga
	fs_fichaanestesica.search()
	var largo_fichaanes = fs_fichaanestesica.getSize()
	if(largo_fichaanes > 0){
		fs_fichaanestesica['cirprotocolo']=foundset.ciriprotocolo
		fs_fichaanestesica['anes_numero']=vhiscli_to_tbc_anestesia.anes_numero
		try{
			databaseManager.saveData(fs_fichaanestesica)
			var error3 = ''
			var error4 = ''
			var array1 = databaseManager.getFailedRecords(fs_fichaanestesica)
			for (i = 0; i < array1.length; i++) {
				var record1 = array1[i];
				var jstable1 = databaseManager.getTable(record1);
				var tableSQLName1 = jstable1.getSQLName();
				error3='Error de Grabación en Tabla:' + tableSQLName1 + ' en server:' + jstable1.getServerName() + ' falló la grabación. Avise urgente a Sistemas, por favor!'
				error4='Error en grabación '+record1.exception;
				if (record1.exception.getErrorCode() == ServoyException.RECORD_VALIDATION_FAILED) {
			// exception thrown in pre-insert/update/delete event method
					 var thrown1 = record1.exception.getValue()
					//plugins.dialogs.showErrorDialog("Error de grabación","Record validation failed: " + thrown)
				}
			}
			if(error3!=''){
				forms.frm_consulta_protocolo.grabaLog("Error Graba_Ficha_Anestesica "+error3)
				forms.frm_consulta_protocolo.grabaLog("Error Graba_Ficha_Anestesica "+error4)
				plugins.dialogs.showErrorDialog("Error en grabación","Se ha producido un error de grabación. "+'\n'+"Avise a Sistemas, por favor.", "Ok")
				plugins.dialogs.showErrorDialog("Error de grabación","Record validation failed: " + thrown1)
				plugins.dialogs.showErrorDialog("Error en grabacion en Ficha Anestesica",error3,"Ok")
				plugins.dialogs.showErrorDialog("Error en grabacion en Ficha Anestesica",error4,"Ok")
			}
			
		}catch (msg){
			forms.frm_consulta_protocolo.grabaLog(msg.message)
			forms.frm_consulta_protocolo.grabaLog("Error Ficha Anestesica()")
			(plugins.dialogs.showInfoDialog("Prueba de error Ficha Anestesica",msg.toString(),"ok"))
		}finally{
			forms.frm_consulta_protocolo.grabaLog("Ficha_Anestesica()")
		}
		
	}
	ww = ww + 20
	elements.bean_243.value = ww
	application.updateUI()
	
	globals.Tipopac=0
	globals.vListado='Protocolo Quirúrgico'
	globals.vTipoListado=4
	globals.protocolo=globals.vNroProtocolo+"|"+foundset.cirifechacarga+"|"+foundset.cirihoracarga
	globals.vPacApeynom = vhisclin_to_tbc_admision_scroll.adm_apelnom
	try{
		forms.frm_consulta_protocolo.Imprime_Protocolo()
	}catch(msg){
		plugins.dialogs.showErrorDialog("Error en Imprime_Protocolo()",msg.message)
	}
	ww = ww + 20
	elements.bean_243.value = ww
	application.updateUI()
	
	try{
		forms.frm_consulta_protocolo.Genera_Protocolo_en_Pdf()
	}catch(msg){
		plugins.dialogs.showErrorDialog("Error en Genera Protocolo en PDF",msg.message)
	}
	ww = ww + 10
	elements.bean_243.value = ww
	application.updateUI()
	/*
	if(vs_to_tbc_anatpaca.getSize()>0){
		try{
			ImprimeAnatomiaPatologica()
		}catch(msg){
			plugins.dialogs.showErrorDialog("Error en ImprimeAnatomiaPatologica()",msg.message)
		}
	}
	ww = ww + 10
	elements.bean_243.value = ww
	application.updateUI()
	
	if(globals.proto6!=''&&globals.proto6!=null){
		
		try{
			ImprimeCertificadoImplante()
		}catch(msg){
			plugins.dialogs.showErrorDialog("Error en ImprimeCertificadoImplante()",msg.message)
		}
	}
	ww = ww + 10
	elements.bean_243.value = ww
	application.updateUI()
	*/
	if(forms.AltaProtocolo.foundset.ciriparto==1){
		GrabaProtocoloObstetri()
	}
	ww = ww + 10
	elements.bean_243.value = ww
	application.updateUI()
	try{
		globals.DeslocHcir()
	}catch(msg){
		plugins.dialogs.showErrorDialog("Error en globals.DeslocHcir()",msg.message)
	}
	
	forms.AltaProtocolo.foundset.loadAllRecords()
	
	globals.vListado=''
	globals.vTipoListado=0
	globals.protocolo=''
	globals.vLegajo=0
	globals.vClave=0
	globals.vOperador=''
	globals.vPassOperador=''
	globals.vHiscli1=0
	globals.vhclin9=0
	globals.vHiscli=0
	globals.vHisclin=0
	globals.vNroProtocolo=0
	globals.vClose=true
	var args = globals.vLegajo+';'+globals.vLega+';'+globals.vOperador+';'+globals.vTipoOperador+';'+"true";
	application.closeSolution('Menu','retorno_MenuCirugia',args)
	//application.showForm("frm_menu_principal")
}

/**
 * @properties={typeid:24,uuid:"4D972DE2-CEDE-4E69-A851-AC07162420AD"}
 */
function GrabaProtocoloObstetri() {
	if(vhiscli_to_tbc_cirugint.tbc_cirugint_to_tbc_obstetri_gesta.getSize()>0){
		vhiscli_to_tbc_cirugint.tbc_cirugint_to_tbc_obstetri_gesta.obstetri_protocolo_quiru=vhiscli_to_tbc_cirugint.ciriprotocolo
		vhiscli_to_tbc_cirugint.tbc_cirugint_to_tbc_obstetri_gesta.obstetri_protocolo_fec=vhiscli_to_tbc_cirugint.cirifechacarga1
		vhiscli_to_tbc_cirugint.tbc_cirugint_to_tbc_obstetri_gesta.obstetri_protocolo_hora=vhiscli_to_tbc_cirugint.cirihoracarga1
		vhiscli_to_tbc_cirugint.tbc_cirugint_to_tbc_obstetri_gesta.obstetri_fec_parto_aa=utils.stringToNumber(vhiscli_to_tbc_cirugint.cirifechafinal.toString().substr(0,4))
		vhiscli_to_tbc_cirugint.tbc_cirugint_to_tbc_obstetri_gesta.obstetri_fec_parto_mm=utils.stringToNumber(vhiscli_to_tbc_cirugint.cirifechafinal.toString().substr(4,2))
		vhiscli_to_tbc_cirugint.tbc_cirugint_to_tbc_obstetri_gesta.obstetri_fec_parto_dd=utils.stringToNumber(vhiscli_to_tbc_cirugint.cirifechafinal.toString().substr(6,2))
		
		try{
			databaseManager.saveData(vhiscli_to_tbc_cirugint.tbc_cirugint_to_tbc_obstetri_gesta.getRecord(1))
		}catch (msg){
			(plugins.dialogs.showInfoDialog("Prueba de error",msg.toString(),"ok"))
		}	
		
	}
}

/**
 * @properties={typeid:24,uuid:"B10A0DD7-7640-45FF-AA04-D444AC9587FB"}
 */
function ImprimeAnatomiaPatologica() {
	globals.anatopatHOJA1='';
	globals.anatopatHOJA2='';
	globals.anatopatHOJA3='';
	globals.anatopatHOJA4='';
	globals.anatopatHTML1='';
	globals.anatopatHTML2='';
	globals.anatopatHTML3='';
	globals.anatopatHTML4='';
			
	forms.frm_anatomia_patologica_html_1_copy.sub_buildReport();
	forms.frm_anatomia_patologica_html_3_copy.sub_buildReport_2();
	if(globals.anatopatHTML4!=''&&globals.anatopatHTML3!=''&&globals.anatopatHTML2!=''&&globals.anatopatHTML1!=''){
		globals.anatopatHOJA4='Hoja 4 de 4'
		globals.anatopatHOJA3='Hoja 3 de 4'
		globals.anatopatHOJA2='Hoja 2 de 4'
		globals.anatopatHOJA1='Hoja 1 de 4'
	}else{
		if(globals.anatopatHTML3!=''&&globals.anatopatHTML2!=''&&globals.anatopatHTML1!=''){
			globals.anatopatHOJA3='Hoja 3 de 3'
			globals.anatopatHOJA2='Hoja 2 de 3'
			globals.anatopatHOJA1='Hoja 1 de 3'
		}else{
			if(globals.anatopatHTML3!=''&&globals.anatopatHTML1!=''){
				globals.anatopatHOJA3='Hoja 2 de 2'
				globals.anatopatHOJA1='Hoja 1 de 2'
			}else{
				globals.anatopatHOJA1='Hoja 1 de 1'
			}
		}
	}
	globals.vfrmActual='frm_anatomia_patologica_html_1_copy'
	globals.printRoutine5('frm_anatomia_patologica_html_1_copy', null);
	
	if(globals.anatopatHTML2!=''){
		globals.vfrmActual='frm_anatomia_patologica_html_2_copy'
		
		globals.printRoutine5('frm_anatomia_patologica_html_2_copy', null);
		
	}
	
	globals.vfrmActual='frm_anatomia_patologica_html_3_copy'
	
	globals.printRoutine5('frm_anatomia_patologica_html_3_copy', null);
	if(globals.anatopatHTML4!=''){
		globals.vfrmActual='frm_anatomia_patologica_html_4_copy'
		
		globals.printRoutine5('frm_anatomia_patologica_html_4_copy', null);
		
	}
	
	globals.anatopatHTML1='';
	forms.frm_anatomia_patologica_html_1_copy.sub_buildReport();
	globals.anatopatHOJA1='Hoja 1 de 1'
	globals.vfrmActual='frm_anatomia_patologica_html_1_copy'
	globals.printRoutine5('frm_anatomia_patologica_html_1_copy', null);
}

/**
 * @properties={typeid:24,uuid:"A0EC2ED9-207F-4652-A456-406B2AEAB9FA"}
 */
function ImprimeCertificadoImplante() {
	vhiscli_to_tbc_protesis.setSelectedIndex(1)
	globals.vNroPedidoProtesis=vhiscli_to_tbc_protesis.prote_nroprote
	forms.frm_certificado_implante_html_1_copy.sub_buildReport();
	globals.vfrmActual='frm_certificado_implante_html_1_copy'
	globals.printRoutine5('frm_certificado_implante_html_1_copy', null);
		
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"63C57D79-508F-4F1C-9189-4A57FC0F6343"}
 */
function onAction_pinzasfinal(event) {
	elements.alta40.visible=true
	elements.alta41.visible=true
	elements.alta41.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"96A761B3-D35D-43A0-925A-301CD3D49949"}
 */
function onAction_gasasfinal(event) {
	elements.alta50.visible=true
	elements.alta51.visible=true
	elements.alta51.requestFocus()
	return true
}

/**
 * TODO generated, please specify type and doc for the params
 * @param codigo
 *
 * @properties={typeid:24,uuid:"0B35E72C-532B-4CF1-A8E6-C34CA72BE2BC"}
 */
function buscaProtocoloAbierto(codigo) {
	var fecha_actual=application.getServerTimeStamp();
	var anio = fecha_actual.getFullYear();
	var mes = fecha_actual.getMonth();
	//var dia = fecha_actual.getDate();
	var mes_ed='';
	//var dia_ed='';
	if(mes<10){
		mes_ed='0'+mes
	}else{
		mes_ed=mes
	}
	var protocolo_abierto='';

	var protocolos_abiertos=new Array();
	var encontro_proto=false;
	var kant_protocolos_abiertos=0;
	var fecha_selec=anio+''+mes_ed+''+'01'
	var sql = "select ciriprotocolo, cirilegciru from tbc_cirugint where CiriFechaCarga>="+fecha_selec+" and CiriEstado=0 and CiriTipoNome=0"
	var dataset = databaseManager.getDataSetByQuery("asistencial",sql,null,-1)
	var kanti = dataset.getMaxRowIndex()
	if(kanti>0){
		protocolos_abiertos[0]=dataset.getValue(1,1)
		for(var i=1;i<=kanti;i++){
			if(dataset.getValue(i,1)!=globals.vNroProtocolo){
				var sql2 = "select ciricodmed_1, ciricodmed_2, ciricodmed_3, ciricodmed_4, ciricodmed_5, ciricodmed_6, ciricodmed_7, ciricodmed_8, ciricodmed_9, ciricodmed_10 from tbc_cirugint_dtl where CiriProtocolo="+dataset.getValue(i,1)+" and CiriTipoNome<>0"
				var dataset2 = databaseManager.getDataSetByQuery("asistencial",sql2,null,-1)
				var kanti2 = dataset2.getMaxRowIndex()
				if(kanti2>0){
					for(var j=1;j<=kanti2;j++){
						for(var k=1;k<=10;k++){
							if(codigo==dataset2.getValue(j,k)){
								kant_protocolos_abiertos++
								for(var s=0;s<protocolos_abiertos.length&&!encontro_proto;s++){
									if(protocolos_abiertos[s]==dataset.getValue(i,1)){
										encontro_proto=true
									}else{
										protocolos_abiertos[s]=dataset.getValue(i,1)
									}
								}
								if(!encontro_proto){
									protocolo_abierto+=dataset.getValue(i,1)+' '
								}else{
									encontro_proto=true
								}
							}
						}
					}
				}
			}	
		}
		if(kant_protocolos_abiertos>0){
			plugins.dialogs.showWarningDialog("Protocolo sin Cerrar","El Profesional con código "+codigo+" tiene el protocolo "+protocolos_abiertos+" sin cerrar","Ok")
			return false
		}else{
			return true
		}
	}else{
		return true
	}
}
/**
 * @properties={typeid:24,uuid:"6380688A-0F63-4417-89FF-84BD1D1D1171"}
 */
function Controlo_FichaAnestesica() {
	//var retorno = false
	/*
	plugins.dialogs.showInfoDialog("Controlo FichaAnestesica: histcli_unico","nro: "+vhiscli_unico_to_tbc_admision_scroll.adm_histclinuni)
	plugins.dialogs.showInfoDialog("Controlo FichaAnestesica: fecha de carga","nro: "+globals.vFeccarga)
	plugins.dialogs.showInfoDialog("Controlo FichaAnestesica: Hora de carga","nro: "+globals.vHorcarga)
	*/
	if(vhiscli_to_tbc_cirugint.cirianestesia!=1){
		return
	}
	var sql = "select histcli, fecha_final from fichaaneste_cab where histcli_unico="+vhiscli_unico_to_tbc_admision_scroll.adm_histclinuni+" and tbc_anest_carga_fecha="+globals.vFeccarga+" and tbc_anest_carga_hora="+globals.vHorcarga
	var $dataset = databaseManager.getDataSetByQuery("desal",sql,null,-1)
	if($dataset.getMaxRowIndex()>0){
		if($dataset.getValue(1,2)==null){
				//retorno = true
				vAltaProtocoloOk=false
				vProcesosFaltantes+="Falta finalizar Ficha Anestésica "+'\n'
		}
	}else{
			vAltaProtocoloOk=false
			vProcesosFaltantes+="Falta cargar Ficha Anestésica "+'\n'
	}
	//return retorno
}

/**
 * @properties={typeid:24,uuid:"8B6C90FE-8F7D-4894-8F1C-D4CE7ADCAEDE"}
 */
function Controla_Medicamentos_Cirugia() {
	var query = "select * from tbc_his_lectora where hlec_histclin = ? and hlec_estado = ? and hlec_sector = ? and hlec_protocolo = ? and hlec_imed = 1";
    var args = new Array();
    args[0]=globals.vHiscli;
    args[1]=globals.vEstado116;
    args[2]=globals.vSector116;
    args[3]=globals.vNroProtocolo;
    var dataset = new Array();
    dataset = databaseManager.getDataSetByQuery("asistencial", query, args, 10);
	//if(vs_to_tbc_cirugint_dtl.getSize()<1){
	if(dataset.getMaxRowIndex()<1){
		vAltaProtocoloOk=false
		vProcesosFaltantes+="Falta ingresar medicamentos de la cirugía"+'\n'
	}	
}

/**
 * @properties={typeid:24,uuid:"FABB2077-8BB0-4BAB-AD84-F062B7740FA0"}
 */
function Controla_Medicamentos_Anestesia() {
	var query = "select * from tbc_his_lectora where hlec_histclin = ? and hlec_estado = ? and hlec_sector = ? and hlec_protocolo = ? and hlec_imed = 2";
    var args = new Array();
    args[0]=globals.vHiscli;
    args[1]=globals.vEstado116;
    args[2]=globals.vSector116;
    args[3]=globals.vNroProtocolo;
    var dataset = new Array();
    dataset = databaseManager.getDataSetByQuery("asistencial", query, args, 10);
	//if(vs_to_tbc_cirugint_dtl.getSize()<1){
	if(dataset.getMaxRowIndex()<1){
		vAltaProtocoloOk=false
		vProcesosFaltantes+="Falta ingresar medicamentos de la anestesia"+'\n'
	}
}

/**
 * @properties={typeid:24,uuid:"4560E765-F3C8-4C5A-B90F-07743C29BDE3"}
 */
function Graba_Medic_cir() {
	if(foundset.ciritipointerven==2){
		//globals.vEstado116=3
		//globals.vSector116=34
		globals.vEstado116=1
		globals.vSector116=66
	}else{
		globals.vEstado116=1
		globals.vSector116=66
	}
	globals.vTipoArticulo=1
	var query_cirugia = "select hlec_art, hlec_cant from tbc_his_lectora where hlec_histclin = ? and hlec_estado = ? and hlec_sector = ? and hlec_protocolo = ? and hlec_imed = 1";
    var args = new Array();
    args[0]=globals.vHiscli;
    args[1]=globals.vEstado116;
    args[2]=globals.vSector116;
    args[3]=globals.vNroProtocolo;
    var dataset_cirugia = new Array();
    dataset_cirugia = databaseManager.getDataSetByQuery("asistencial", query_cirugia, args, 99);
    if(dataset_cirugia.getMaxRowIndex()>0){
    	vs116_to_tbc_medic_cir.newRecord()
		globals.InicializarDatosDeRelacion(vs116_to_tbc_medic_cir,"asistencial","tbc_medic_cir")
		for (var i=1;i<=dataset_cirugia.getMaxRowIndex();i++){
			vs116_to_tbc_medic_cir['medcarti_'+i]=dataset_cirugia.getValue(i,1)
			vs116_to_tbc_medic_cir['medccant_'+i]=dataset_cirugia.getValue(i,2)
		}
		vs116_to_tbc_medic_cir.medcprotocolo=globals.vNroProtocolo
		vs116_to_tbc_medic_cir.medctipo=globals.vTipoArticulo
		
		try{
			databaseManager.saveData(vs116_to_tbc_medic_cir.getRecord(1))
		}catch (msg){
			forms.frm_consulta_protocolo.grabaLog("Error Graba_TBC_MEDIC-CIR "+msg.message)
			(plugins.dialogs.showInfoDialog("Error al grabar MEDIC-CIR",msg.toString(),"ok"))
		}
		var error1=''
		var error2=''
		var array = databaseManager.getFailedRecords(vs116_to_tbc_medic_cir)
		for ( i = 0; i < array.length; i++) {
			var record = array[i];
			var jstable = databaseManager.getTable(record);
			var tableSQLName = jstable.getSQLName();
			error1='Error de Grabación en Tabla:' + tableSQLName + ' en server:' + jstable.getServerName() + ' falló la grabación. Avise urgente a Sistemas, por favor!'
			error2='Error en grabación '+record.exception;
			if (record.exception.getErrorCode() == ServoyException.RECORD_VALIDATION_FAILED) {
		// exception thrown in pre-insert/update/delete event method
				var thrown = record.exception.getValue()
				plugins.dialogs.showErrorDialog("Error de grabación","Record validation failed: " + thrown)
			}
		}
		if(error1!=''){
			forms.frm_consulta_protocolo.grabaLog("Error Graba_TBC_MEDIC-CIR "+error1)
			forms.frm_consulta_protocolo.grabaLog("Error Graba_TBC_MEDIC-CIR "+error2)
			plugins.dialogs.showErrorDialog("Error en grabacion de MEDIC-CIR",error1,"Ok")
			plugins.dialogs.showErrorDialog("Error en grabacion de MEDIC-CIR",error2,"Ok")
		}
	}
	globals.vTipoArticulo=2
	var query_anestesia = "select hlec_art, hlec_cant from tbc_his_lectora where hlec_histclin = ? and hlec_estado = ? and hlec_sector = ? and hlec_protocolo = ? and hlec_imed = 2";
    var dataset_anestesia = new Array();
    dataset_anestesia = databaseManager.getDataSetByQuery("asistencial", query_anestesia, args, 99);
	if(dataset_anestesia.getMaxRowIndex()>0){
		vs116_to_tbc_medic_cir.newRecord()
		globals.InicializarDatosDeRelacion(vs116_to_tbc_medic_cir,"asistencial","tbc_medic_cir")
		for (var j=1;j<=dataset_anestesia.getMaxRowIndex();j++){
			vs116_to_tbc_medic_cir['medcarti_'+j]=dataset_anestesia.getValue(j,1)
			vs116_to_tbc_medic_cir['medccant_'+j]=dataset_anestesia.getValue(j,2)
		}
		vs116_to_tbc_medic_cir.medcprotocolo=globals.vNroProtocolo
		vs116_to_tbc_medic_cir.medctipo=globals.vTipoArticulo
		try{
			databaseManager.saveData(vs116_to_tbc_medic_cir.getRecord(1))
		}catch (msg){
			forms.frm_consulta_protocolo.grabaLog("Error Graba_MEDIC-CIR "+msg.message)
			(plugins.dialogs.showInfoDialog("Error al grabar MEDIC-CIR",msg.toString(),"ok"))
		}
		var error3=''
		var error4=''
		var array1 = databaseManager.getFailedRecords(vs116_to_tbc_medic_cir)
		for ( j = 0; j < array1.length; j++) {
			var record1 = array1[j];
			var jstable1 = databaseManager.getTable(record1);
			var tableSQLName1 = jstable1.getSQLName();
			error3='Error de Grabación en Tabla:' + tableSQLName1 + ' en server:' + jstable1.getServerName() + ' falló la grabación. Avise urgente a Sistemas, por favor!'
			error4='Error en grabación '+record1.exception;
			if (record1.exception.getErrorCode() == ServoyException.RECORD_VALIDATION_FAILED) {
		// exception thrown in pre-insert/update/delete event method
				var thrown1 = record1.exception.getValue()
				plugins.dialogs.showErrorDialog("Error de grabación","Record validation failed: " + thrown1)
			}
		}
		if(error3!=''){
			forms.frm_consulta_protocolo.grabaLog("Error Graba_TBC_MEDIC-CIR "+error3)
			forms.frm_consulta_protocolo.grabaLog("Error Graba_TBC_MEDIC-CIR "+error4)
			plugins.dialogs.showErrorDialog("Error en grabacion de MEDIC-CIR",error3,"Ok")
			plugins.dialogs.showErrorDialog("Error en grabacion de MEDIC-CIR",error4,"Ok")
		}
	}	
}

/**
 * @AllowToRunInFind
 *
 * @properties={typeid:24,uuid:"389F4B4C-640A-478D-BC8C-F69AB3CD8F30"}
 */
function Actualiza_Anestesia() {
	/////////////////////// Actualiza PARAM, campo prm_32 último Nro de Hoja de Anestesia ////////////////
	var done0 = plugins.rawSQL.executeSQL("parametros", "param", "begin; lock table param in row exclusive mode;")
	if (!done0) {
		var msg0 = plugins.rawSQL.getException().getMessage(); //see exception node for more info about the exception obj
		plugins.dialogs.showErrorDialog('Error', 'SQL exception: ' + msg0, 'Ok')
	}
	var done = plugins.rawSQL.executeSQL("parametros", "param", "select * from param where key_param = 1 for update;")
	if (!done) {
		var msg = plugins.rawSQL.getException().getMessage(); //see exception node for more info about the exception obj
		plugins.dialogs.showErrorDialog('Error', 'SQL exception: ' + msg, 'Ok')
	}

	var vQuery = " SELECT prm_32 FROM param WHERE key_param = 1";
	var vDataset = databaseManager.getDataSetByQuery("parametros", vQuery, null, 1);
	
	//plugins.dialogs.showInfoDialog("contador",vDataset.getValue(1,1));
	
	vNroAnestesia=vDataset.getValue(1,1)+1;
	
	var done1 = plugins.rawSQL.executeSQL("parametros", "param", "update param set prm_32 = prm_32 + 1 where key_param = 1; commit;")
	if (!done1) {
		var msg1 = plugins.rawSQL.getException().getMessage(); //see exception node for more info about the exception obj
		plugins.dialogs.showErrorDialog('Error', 'SQL exception: ' + msg1, 'Ok')
	}
	/////////////////////////// Actualiza campo anes_numero de tabla tbc_anestesia ///////////////////////
	var fs = databaseManager.getFoundSet("asistencial","tbc_anestesia")
	if(fs.find()){
		fs['anes_protocolo']=globals.vNroProtocolo
		fs.search()
	}
	if(fs.getSize()>0){
		for(var jj=1;jj<=fs.getSize();jj++){
			fs.setSelectedIndex(jj)
			fs['anes_numero']=vNroAnestesia
			fs['anes_estado']=2
			/*
			elements.bean_243.value = i
			application.updateUI()
			*/
			try{
				databaseManager.saveData(fs.getRecord(1))
			}catch (msg){
				(plugins.dialogs.showInfoDialog("Error al actualizar ANESTESIA",msg.toString(),"ok"))
			}
			var error1=''
			var error2=''
			var array = databaseManager.getFailedRecords(fs)
			for (var i = 0; i < array.length; i++) {
				var record = array[i];
				var jstable = databaseManager.getTable(record);
				var tableSQLName = jstable.getSQLName();
				error1='Error de Grabación en Tabla:' + tableSQLName + ' en server:' + jstable.getServerName() + ' falló la grabación. Avise urgente a Sistemas, por favor!'
				error2='Error en grabación '+record.exception;
				if (record.exception.getErrorCode() == ServoyException.RECORD_VALIDATION_FAILED) {
			// exception thrown in pre-insert/update/delete event method
					var thrown = record.exception.getValue()
					plugins.dialogs.showErrorDialog("Error de grabación","Record validation failed: " + thrown)
				}
			}
			if(error1!=''){
				forms.frm_consulta_protocolo.grabaLog("Error Graba_tbc_anestesia"+error1)
				forms.frm_consulta_protocolo.grabaLog("Error Graba_tbc_anestesia"+error2)
				plugins.dialogs.showErrorDialog("Error en grabacion de tbc_anestesia al Alta",error1,"Ok")
				plugins.dialogs.showErrorDialog("Error en grabacion de tbc_anestesia al Alta",error2,"Ok")
			}
		}
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"05092055-F526-4111-979A-316B933D4113"}
 */
function onAction_cancela(event) {
	globals.vPassOperadorConsenti=''
	globals.vOperadorConsenti=''
	globals.vLegajoConsenti=0
	globals.vClaveConsenti=0
	globals.vFechaFinal=null
	vProcesosFaltantes=''
		
	var name = 'alta'
	var names =''
	for(var i=10;i<=13;i++){
		names = name+i
		elements[names].visible=false
	}
	
	for(i=20;i<=21;i++){
		names = name+i
		elements[names].visible=false
	}
	
	for(i=30;i<=31;i++){
		names = name+i
		elements[names].visible=false
	}
	
	for(i=40;i<=41;i++){
		names = name+i
		elements[names].visible=false
	}
	
	for(i=50;i<=51;i++){
		names = name+i
		elements[names].visible=false
	}
	foundset.ciriconsenti='N'
	foundset.cirigasasfinal=1
	foundset.ciripinzasfinal=0
	application.updateUI()
	forms.form116_dtl.elements.tab_extension.tabIndex=1
	forms.Preparacion_dtl.controller.focusFirstField()
	application.updateUI()
}
