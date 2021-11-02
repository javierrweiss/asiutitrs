/**
 * @type {Boolean}
 *
 * @properties={typeid:35,uuid:"3F125BA2-76B3-49AA-A3F8-B4D9FB45200A",variableType:-4}
 */
var PacientesActuales = true;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"86D61499-9695-48B6-A580-E61EC804E140",variableType:4}
 */
var tabIndice = 0;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"7503C6DA-9F69-4BC3-87D1-246C34C14023"}
 */
var tables = '';

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"75209E44-6E5B-4B5A-BC9C-C67937C29135",variableType:4}
 */
var tabseq = 1;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"D9E8E615-517C-477D-A72B-BF356B239E06",variableType:4}
 */
var vAnesEstado = 1;

/**
 * @type {Boolean}
 *
 * @properties={typeid:35,uuid:"84070FAD-287C-4A25-841D-067225E68318",variableType:-4}
 */
var vAplicaFiltro = false;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"D951B860-21FC-47DA-9E90-AF115D906653",variableType:4}
 */
var vAsa = 0;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"0ED9F145-C63F-4A81-A255-DAD2738E7FEF"}
 */
var vCardiopatia = '   Cardiopatía';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"E5155329-3F24-49E6-8BF9-94FF7A3B80BA"}
 */
var vEdad = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"446E8686-7131-4A8C-887F-752537A85830"}
 */
var vEvalReali = '';

/**
 * @type {Boolean}
 *
 * @properties={typeid:35,uuid:"C1ECB11F-31FA-420E-B364-637A786691EE",variableType:-4}
 */
var vExisteAnestesia = false;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"0B34BC63-B08E-48DF-B015-7F143B926606",variableType:93}
 */
var vFechaAhora = new Date();

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"97D9E5E1-FBA1-4D2F-9A3D-24E1D79A2C8B"}
 */
var vHisclin_mascara = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"B720CCD8-8061-457B-9FDD-D9750AF4D3BB"}
 */
var vHoraInicio = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"1161141A-6F50-4198-BCDE-BABBCF17162F"}
 */
var vIntervenAlfa = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"F3A78422-A6E8-4A69-B6FD-D78DF67D278E"}
 */
var vMallampati = '';

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"B4D0E17E-8C3C-4230-A82F-A334669DC7ED",variableType:4}
 */
var vMaxima = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"77C9FC96-7791-4A33-A5FE-AC1644570273",variableType:4}
 */
var vMinima = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"CC235213-BD81-423A-A3AF-D7F2ABF13958",variableType:4}
 */
var vPresionMax = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"9FCF08DF-EF1F-472C-BD40-BB1E5F91BC1A",variableType:4}
 */
var vPresionMin = 0;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"12E4EDCC-80F7-4E7A-85AC-7D27EFDF3FBB"}
 */
var vPulsoCaracteristica = '';

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"9088FEAA-A7BA-4FAE-B144-99837F66A859",variableType:4}
 */
var vPulsoFrecuencia = 0;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"437932DB-9675-46F3-BA09-2F2498BB7294"}
 */
var vTilde1 = 'l';

/**
 * @properties={typeid:35,uuid:"CE737512-9082-494A-86AD-6DB26D0695A5",variableType:-4}
 */
var vTilde2;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"A3D03160-9DFA-4753-9679-B1D969C33175"}
 */
var vTipoCirugia = '';

/**
 * Callback method for when solution is opened.
 *
 * @properties={typeid:24,uuid:"55908C57-663F-465D-AA00-C616F8B76B1E"}
 */
function onSolutionOpen_EvaluacionAnestesicaPreoperatoria() {
	/**
	if(globals.vAplicaFiltro){
		if (globals.vEsHemodinamia=="Si"){
			databaseManager.addTableFilterParam("maestros","tbc_interven","itv_tipoestudio","=",2)
		}else{
			databaseManager.addTableFilterParam("maestros","tbc_interven","itv_tipoestudio","in",[0,1])
		}
		
	}
	*/
}

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"D183104F-2DD4-40C1-81B0-319E3DB2347B"}
 */
var vTipoInterv = '';

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"ECDBDCD3-1987-4B30-972E-91BF57479EC8"}
 */
function onAction(event) {
	globals.ConvierteCheksaGrabar(globals.tables)
	//globals.onShow_cuadros()
	forms.frm_anestesia_preoperatoria_dtl.MuestroEstadoBotonesChek()
	//history.back()
	forms.frm_anestesia_preoperatoria_dtl.elements.tabless_246.tabIndex = 1
	forms.cuadros_1.controller.focusFirstField()
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"56B27B0B-751B-43A7-A814-1BDA56933FC6"}
 */
function onShow_checks(firstShow, event) {
	globals.InitializarCheks(globals.tables)
}

/**
 * @properties={typeid:24,uuid:"8325FC40-EDC3-4455-AB50-83F86ABC14B5"}
 */
function InitializarCheks_bis(form) {
	for (var i = 0; i < forms[form].elements.allnames.length; i++) {

        var name = forms[form].elements.allnames[i];   // nombre de el elemento

        var elem = forms[form].elements[name];         // propiedades del elemento

      
        
        //plugins.dialogs.showInfoDialog("",elem.getElementType(),"ok")
        
        if (elem.getElementType() == 'CHECK') {
        	switch (forms[form].foundset[name]){
    	          case "X": forms[form].foundset[name] = '1';break;
    	          case "x": forms[form].foundset[name] = '1';break;
    	          case " ": forms[form].foundset[name] = '0';break;
    	    }
          
        }
  }
}

/**
 * @properties={typeid:24,uuid:"DFA7401F-3B1B-44C5-B64D-01E12011E5B3"}
 */
function ConvierteCheksaGrabar_bis(form) {
	//plugins.dialogs.showInfoDialog("",form,"ok")
	for (var i = 0; i < forms[form].elements.allnames.length; i++) {

        var name = forms[form].elements.allnames[i];   // nombre de el elemento

        var elem = forms[form].elements[name];         // propiedades del elemento

      
        
        //plugins.dialogs.showInfoDialog("",elem.getElementType(),"ok")
       // plugins.dialogs.showInfoDialog("",elem.getElementType(),"ok")
        if (elem.getElementType() == 'CHECK') {
        	 switch (forms[form].foundset[name]){
        	    case "1": forms[form].foundset[name] = 'X';break;
        	    case "0": forms[form].foundset[name] = ' ';break;
        	    default: forms[form].foundset[name] = ' ';break;
        	 }
        }
	} 
}

/**
 * @properties={typeid:24,uuid:"8BF14DE9-DD86-49CB-8B08-EE65CD47691F"}
 */
function DesmarcaCheks_bis(form) {
	for (var i = 0; i < forms[form].elements.allnames.length; i++) {

        var name = forms[form].elements.allnames[i];   // nombre de el elemento

        var elem = forms[form].elements[name];         // propiedades del elemento

      
        
        //plugins.dialogs.showInfoDialog("",elem.getElementType(),"ok")
       // plugins.dialogs.showInfoDialog("",elem.getElementType(),"ok")
        if (elem.getElementType() == 'CHECK') {
        	 switch (forms[form].foundset[name]){
        	    case "1": forms[form].foundset[name] = '0';break;
        	    case "0": forms[form].foundset[name] = '0';break;
        	 }
        }
	} 
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"AE222482-A259-4315-8690-A65DE33F49C5"}
 */
function onAction_DesmarcaCheks(event) {
	globals.DesmarcaCheks(globals.tables)
}

/**
 * @properties={typeid:24,uuid:"BD4C851A-7A04-4834-A939-BD05895A90CD"}
 */
function onShow_cuadros() {
	if (globals.vHiscli > 0){
		for (var i = 0; i < forms.cuadros_1.elements.allnames.length-1; i++) {

	        var name = forms.cuadros_1.elements.allnames[i];   // nombre de el elemento

	        var elem = forms.cuadros_1.elements[name];         // propiedades del elemento
             
	       
	        if (elem.getElementType() == 'BUTTON') {
	        	 switch (name){
	        	    case "btn_1":forms.cuadros_1.elements.btn_1.imageURL = "media:///space.png"; if(validoIngresoCheks("frm_complic_preope")){forms.cuadros_1.elements.btn_1.imageURL = "media:///check.png" };break;
	        	    case "btn_2":forms.cuadros_1.elements.btn_2.imageURL = "media:///space.png"; if(validoIngresoCheks("frm_clinica_preope")){forms.cuadros_1.elements.btn_2.imageURL = "media:///check.png" };break;
	        	    case "btn_3":forms.cuadros_1.elements.btn_3.imageURL = "media:///space.png"; if(validoIngresoCheks("frm_tratam_previos")){forms.cuadros_1.elements.btn_3.imageURL = "media:///check.png" };break;
	        	    case "btn_4":forms.cuadros_1.elements.btn_4.imageURL = "media:///space.png"; if(validoIngresoCheks("frm_exam_cabeza_cuello")){forms.cuadros_1.elements.btn_4.imageURL = "media:///check.png" };break;
	        	    case "btn_5":forms.cuadros_1.elements.btn_5.imageURL = "media:///space.png"; if(validoIngresoCheks("frm_anes_regional")){forms.cuadros_1.elements.btn_5.imageURL = "media:///check.png" };break;
	        	    case "btn_6":forms.cuadros_1.elements.btn_6.imageURL = "media:///space.png"; if(validoIngresoCheks("frm_exam_complemen")){forms.cuadros_1.elements.btn_6.imageURL = "media:///check.png" };break;
	        	    case "btn_7":forms.cuadros_1.elements.btn_7.imageURL = "media:///space.png"; if(validoIngresoCheks("frm_psi_pre")){forms.cuadros_1.elements.btn_7.imageURL = "media:///check.png" };break;
	        	    case "btn_8":forms.cuadros_1.elements.btn_8.imageURL = "media:///space.png"; if(validoIngresoCheks("frm_exa_esp")){forms.cuadros_1.elements.btn_8.imageURL = "media:///check.png" };break;
	        	 }
	        }
		} 
	  }
}

/**
 * @properties={typeid:24,uuid:"37EDA06E-2DB4-478D-8C6F-49535C37684F"}
 */
function validoIngresoCheks(form) {
	var tieneCheks = false;
	var salir = false;
	
	//plugins.dialogs.showInfoDialog("largo",forms[form].elements.allnames.length,"ok")
	for (var i = 0; i < (forms[form].elements.allnames.length-1) && !tieneCheks;i++){ // && !salir; i++) {

        var name = forms[form].elements.allnames[i];   // nombre de el elemento

        var elem = forms[form].elements[name];         // propiedades del elemento

        
        //plugins.dialogs.showInfoDialog("j",j,"ok")
		//plugins.dialogs.showInfoDialog("foundset",forms[form].foundset['anes_histclin'],"ok")
		if (elem.getElementType() == 'CHECK') {
        	plugins.dialogs.showInfoDialog("name",name,"ok")
           	//switch (forms[form].foundset[name]){
           	switch (vhisclin_to_tbc_anestesia[name]){
    	          case "X": tieneCheks = true;salir=true;break;
    	          case "x": tieneCheks = true;salir=true;break;
    	          case "1": tieneCheks = true;salir=true;break;
        	}
          
        }
      
     }
     //plugins.dialogs.showInfoDialog("salir",salir)
  //plugins.dialogs.showInfoDialog("tiene chekcs",tieneCheks)	
  if (tieneCheks){
	  return true
  }
  else{
	  return false
  }
}

/**
 * @properties={typeid:24,uuid:"4878198E-BB54-45AD-B6C4-13B2B3AE8722"}
 */
function validoCamposCabecera(form) {
	var completo = true;
    for (var i = 0; i < (forms[form].elements.allnames.length-1) && completo;i++){

        var name = forms[form].elements.allnames[i];   // nombre de el elemento

        var elem = forms[form].elements[name];         // propiedades del elemento

        
        //plugins.dialogs.showInfoDialog("name",name,"ok")
		if(name != 'tabless_246'){
		   var tipo = forms[form].elements[name].getDataProviderID()
		   var valor = forms[form].foundset[tipo]
		}
		//plugins.dialogs.showInfoDialog("valor",valor)
		
        switch (name){
        	case 'tabless_246':break;
        	case 'legajo':break;
        	case 'horainicio':if(globals.vHoraInicio == '')completo=false;break;
        	case 'tipointerven':if(globals.vTipoInterv == '')completo=false;break;
        	case 'interven':if(globals.vInterven == '' || globals.vInterven == 0)completo=false;break;
        	case 'mallampati':if(valor==0)completo=false;break;
        	case 'tipocirugia':if(valor==0)completo=false;break;
        	case 'evaluacion':if(valor==0)completo=false;break;
        	case 'pulsofrec':if(valor==0)completo=false;break;
        	case 'pulsocarac':if(valor=='')completo=false;break;
        	case 'presiomax':if(valor==0)completo=false;break;
        	case 'presiomin':if(valor==0)completo=false;break;
        	case 'asa':if(valor==0)completo=false;break;
        	//case 'edad':if(globals.vEdad == ' ' || globals.vHiscli == 0)completo=false;break;
        	//default: if(valor == null || valor == 0 || valor == '')completo = false;break; 
        }        
       
    }
    return completo
}
