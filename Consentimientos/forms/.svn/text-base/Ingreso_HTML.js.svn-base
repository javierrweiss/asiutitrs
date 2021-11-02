/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"D153F266-BA75-4C50-A2C8-28F97F35E1FC",variableType:93}
 */
var fechaimpresion = new Date();

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"25E4FAAD-A095-4663-96DF-5F3AA63D011B"}
 */
function onAction(event) {
	    
		databaseManager.saveData()
		
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"5DC671D3-AB51-44FA-9DAC-3801A29F0CD1"}
 */
function onAction1(event) {
	//forms.Prueba_java.controller.print()
		
		var frm = currentcontroller.getName()
		
	   // var success = plugins.pdf_output.startMetaPrintJob('c:/temp/out.pdf')

		//execute the "print_default" method on each form
		globals.numeroJobs=1
		forms[frm].print_default()
		//plugins.pdf_output.endMetaPrintJob()
		
		// Open a file with the default application associated with it. (on Windows)
		//application.executeProgram("rundll32.exe", "url.dll,FileProtocolHandler", "c://temp//out.pdf"); 

	
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"E3E40F2F-CAB0-4463-B243-2634FEFA5FDF"}
 */
function onAction2(event) {
	     var pepe = forms.Prueba_java.foundset.tipo;
		 var $script = 'Option Explicit  \r\n';
		 $script +=	'Sub SearchAndRep(searchTerm, replaceTerm, WordApp)  \r\n';
		 $script +=	'   WordApp.Selection.GoTo 1  \r\n';
		 $script +=	'  With WordApp.Selection.Find  \r\n';
		 $script +=	'      .ClearFormatting  \r\n';
		 $script +=	'      .Replacement.ClearFormatting  \r\n';
		 $script +=	'       .MatchWholeWord = True  \r\n';
		 $script +=	'      .Text = searchTerm  \r\n';
		 $script +=	'        .Execute ,,,,,,,,,replaceTerm  \r\n';
	     $script +=	'    End With  \r\n';
		 $script +=	'End Sub  \r\n';

		 $script +=	'Dim WordApp \r\n';
	     $script +=	'Dim WordDoc \r\n';
		 $script +=	'Dim strReadCompName \r\n';
		 $script +=	'Dim strReadCompSN \r\n';
		  
		 $script +=	'Set WordApp = CreateObject("Word.Application")\r\n'; 
		 $script +=	'WordApp.Visible = TRUE \r\n';
		  
		 $script +=	'WordApp.Documents.Open("C:/Users/pgm3/Documents/IMPR-1058-4.doc")\r\n'; 
		 $script +=	'WordApp.Documents("IMPR-1058-4.doc").Activate \r\n';
		  
		 $script +=	'Set WordDoc = WordApp.ActiveDocument \r\n';
		  
		 //$script +=	'strReadCompName = InputBox("Enter Computer Name", "Name")\r\n'; 
		 $script +=	'strReadCompName = "'+ pepe.replace(" ","")+' '+pepe+'"\r\n';
		 $script +=	'strReadCompSN = "'+ forms.Prueba_java.foundset.tipo +'"\r\n';
		 //InputBox("Enter Serial Number", "Serial")\r\n'; 
		 $script +=	'SearchAndRep "ZZZZZZZZZZ", strReadCompName, WordApp \r\n';
		 $script +=	'SearchAndRep "WWWWWWWWWW", strReadCompSN, WordApp \r\n';
		 		 		  
		 $script +=	'WordDoc.PrintOut() \r\n';
		 $script +=	'WordDoc.Saved = TRUE \r\n';
		 $script +=	'WordApp.Quit \r\n';	 
		

	var $tempFile = plugins.file.createTempFile('myfile','.vbs');
	if ( plugins.file.writeTXTFile($tempFile, $script) ) {
	 application.executeProgram('rundll32', 'url.dll,FileProtocolHandler', $tempFile); 
	}
	
}

/**
 * @properties={typeid:24,uuid:"5C215E49-FA55-421B-9590-0C9DC84F3FF4"}
 */
function print_default() {
	forms.impr_html.foundset.selectRecord("talon-1")
	forms.impr_html2.sub_buildReport();
	//plugins.dialogs.showInfoDialog("anestesia",globals.vprocesa)
	
	   globals.printRoutine('impr_html2',true);
	  

}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"80932F90-741A-4955-A91D-F5D375232FED"}
 */
function onAction3_newRecord(event) {
	foundset.newRecord()
}
