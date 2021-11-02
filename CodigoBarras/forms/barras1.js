/**
 * @properties={typeid:35,uuid:"5375668A-900A-4E4A-B7BA-70FFF22DA44D",variableType:-4}
 */
var valor3 = null;

/**
 * @properties={typeid:35,uuid:"BE7FA717-8667-4695-8CE0-C6628F133D8C",variableType:-4}
 */
var valor4 = null;

/**
 * @properties={typeid:35,uuid:"14FF3B5A-07B8-42D8-965F-66ED3BF78C2A",variableType:-4}
 */
var valor5 = null;

/**
 * @properties={typeid:35,uuid:"FA68A7A9-A606-4D26-9C99-68C9E686CD61",variableType:-4}
 */
var valor6 = null;

/**
 * @properties={typeid:35,uuid:"D472258D-7F74-42D0-AEA1-665CF5F35708",variableType:-4}
 */
var valor7 = null;

/**
 * @properties={typeid:35,uuid:"C8026DD7-D220-4962-8004-AFF3C05368CC",variableType:-4}
 */
var valor8 = null;

/**
 * @properties={typeid:35,uuid:"0E07A8DD-ED07-46CF-99C4-3A8F763BD37A",variableType:-4}
 */
var valor9 = null;

/**
 * @properties={typeid:35,uuid:"90218630-D76F-4947-8CCC-F873141916A1",variableType:-4}
 */
var valor10 = null;

/**
 * @properties={typeid:35,uuid:"EEBEE143-FBFB-409A-AAAF-163131E4E955",variableType:-4}
 */
var valor11 = null;

/**
 * @properties={typeid:35,uuid:"01BD7838-82EB-46FF-8084-C256B40EDC87",variableType:-4}
 */
var valor12 = null;

/**
 * @properties={typeid:35,uuid:"365874F2-489B-40F6-99CB-8575F04EE768",variableType:-4}
 */
var valor13 = null;

/**
 * @properties={typeid:35,uuid:"21F033A5-DEBA-4782-B8CD-55408D34E288",variableType:-4}
 */
var valor14 = null;

/**
 * @properties={typeid:35,uuid:"87FFFD10-A3E7-476A-B0DB-374ADFA113BD",variableType:-4}
 */
var valor15 = null;

/**
 * @properties={typeid:35,uuid:"4170685B-6530-4788-A292-E6B509737AC3",variableType:-4}
 */
var valor16 = null;

/**
 * @properties={typeid:35,uuid:"4EC60552-0FCF-4C89-AEF9-4B6F0C7BC4EA",variableType:-4}
 */
var valor2 = null;

/**
 * @properties={typeid:35,uuid:"61D991B2-AB42-4B3B-BDFE-C8C1B937F60A",variableType:-4}
 */
var valor1 = null;

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"5606DB66-4E70-4AD0-8246-6DD80DFCAC6D"}
 */
function onShow_barras1(firstShow, event) {
	// Creates a Code 39 linear barcode...
	/*
	valor1 = plugins.it2be_barcode.Code2of7(globals.gbl_etiqueta1, true );
	valor2 = plugins.it2be_barcode.Code2of7(globals.gbl_etiqueta2, true );
	valor3 = plugins.it2be_barcode.Code2of7(globals.gbl_etiqueta3, true );
	valor4 = plugins.it2be_barcode.Code2of7(globals.gbl_etiqueta4, true );
	valor5 = plugins.it2be_barcode.Code2of7(globals.gbl_etiqueta5,true );
	valor6 = plugins.it2be_barcode.Code2of7(globals.gbl_etiqueta6, true );
	valor7 = plugins.it2be_barcode.Code2of7(globals.gbl_etiqueta7, true );
	valor8 = plugins.it2be_barcode.Code2of7(globals.gbl_etiqueta8, true );
	valor9 = plugins.it2be_barcode.Code2of7(globals.gbl_etiqueta9, true );
	valor10 = plugins.it2be_barcode.Code2of7(globals.gbl_etiqueta10, true );
	valor11 = plugins.it2be_barcode.Code2of7(globals.gbl_etiqueta11, true );
	valor12 = plugins.it2be_barcode.Code2of7(globals.gbl_etiqueta12, true );
	valor13 = plugins.it2be_barcode.Code2of7(globals.gbl_etiqueta13,true );
	valor14 = plugins.it2be_barcode.Code2of7(globals.gbl_etiqueta14, true );
	valor15 = plugins.it2be_barcode.Code2of7(globals.gbl_etiqueta15, true );
	valor16 = plugins.it2be_barcode.Code2of7(globals.gbl_etiqueta16, true );
	*/
	for(var i=1;i<=16;i++){
		if(globals['gbl_etiqueta'+i].length<3){
			if(globals['gbl_etiqueta'+i].length<2){
				globals['gbl_etiqueta'+i]='00'+globals['gbl_etiqueta'+i]
			}else{
				globals['gbl_etiqueta'+i]='0'+globals['gbl_etiqueta'+i]
			}
		}
	}
	valor1 = plugins.it2be_barcode.Code39(globals.gbl_etiqueta1, false, true );
	valor2 = plugins.it2be_barcode.Code39(globals.gbl_etiqueta2,false, true );
	valor3 = plugins.it2be_barcode.Code39(globals.gbl_etiqueta3,false, true );
	valor4 = plugins.it2be_barcode.Code39(globals.gbl_etiqueta4,false, true );
	valor5 = plugins.it2be_barcode.Code39(globals.gbl_etiqueta5,false,true );
	valor6 = plugins.it2be_barcode.Code39(globals.gbl_etiqueta6, false,true );
	valor7 = plugins.it2be_barcode.Code39(globals.gbl_etiqueta7, false,true );
	valor8 = plugins.it2be_barcode.Code39(globals.gbl_etiqueta8, false,true );
	valor9 = plugins.it2be_barcode.Code39(globals.gbl_etiqueta9,false, true );
	valor10 = plugins.it2be_barcode.Code39(globals.gbl_etiqueta10,false, true );
	valor11 = plugins.it2be_barcode.Code39(globals.gbl_etiqueta11,false, true );
	valor12 = plugins.it2be_barcode.Code39(globals.gbl_etiqueta12,false, true );
	valor13 = plugins.it2be_barcode.Code39(globals.gbl_etiqueta13,false,true );
	valor14 = plugins.it2be_barcode.Code39(globals.gbl_etiqueta14,false, true );
	valor15 = plugins.it2be_barcode.Code39(globals.gbl_etiqueta15,false, true );
	valor16 = plugins.it2be_barcode.Code39(globals.gbl_etiqueta16,false, true );

	forms.barras1.controller.setPageFormat(210,315,10,10,7,0,1,0)
	//forms.barras1.controller.showPrintPreview()
	forms.barras1.controller.print(true, true)

}

/**
 * @properties={typeid:24,uuid:"CFEC99D8-D0F4-4656-B0CB-8D9E16139E91"}
 */
function sub_buildreport() {
	for(var i=1;i<=16;i++){
		if(globals['gbl_etiqueta'+i].length<3){
			if(globals['gbl_etiqueta'+i].length<2){
				if(globals['gbl_etiqueta'+i]!=''){
					globals['gbl_etiqueta'+i]='00'+globals['gbl_etiqueta'+i]
				}
			}else{
				globals['gbl_etiqueta'+i]='0'+globals['gbl_etiqueta'+i]
			}
		}
	}
	valor1 = plugins.it2be_barcode.Code39(globals.gbl_etiqueta1, false, true );
	valor2 = plugins.it2be_barcode.Code39(globals.gbl_etiqueta2,false, true );
	valor3 = plugins.it2be_barcode.Code39(globals.gbl_etiqueta3,false, true );
	valor4 = plugins.it2be_barcode.Code39(globals.gbl_etiqueta4,false, true );
	valor5 = plugins.it2be_barcode.Code39(globals.gbl_etiqueta5,false,true );
	valor6 = plugins.it2be_barcode.Code39(globals.gbl_etiqueta6, false,true );
	valor7 = plugins.it2be_barcode.Code39(globals.gbl_etiqueta7, false,true );
	valor8 = plugins.it2be_barcode.Code39(globals.gbl_etiqueta8, false,true );
	valor9 = plugins.it2be_barcode.Code39(globals.gbl_etiqueta9,false, true );
	valor10 = plugins.it2be_barcode.Code39(globals.gbl_etiqueta10,false, true );
	valor11 = plugins.it2be_barcode.Code39(globals.gbl_etiqueta11,false, true );
	valor12 = plugins.it2be_barcode.Code39(globals.gbl_etiqueta12,false, true );
	valor13 = plugins.it2be_barcode.Code39(globals.gbl_etiqueta13,false,true );
	valor14 = plugins.it2be_barcode.Code39(globals.gbl_etiqueta14,false, true );
	valor15 = plugins.it2be_barcode.Code39(globals.gbl_etiqueta15,false, true );
	valor16 = plugins.it2be_barcode.Code39(globals.gbl_etiqueta16,false, true );

}
