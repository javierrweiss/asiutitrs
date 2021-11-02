/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"E46A6B94-8BCD-4ED6-B46B-5CDD6808CEDB",variableType:93}
 */
var fechaimpresion = new Date();

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"B75E4E7F-04D4-4DED-B30B-23F3152783EB"}
 */
function onAction(event) {
	    
		databaseManager.saveData()
		
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"14EA8FC3-C6CA-4052-87F2-9B85C1547922"}
 */
function onAction1(event) {
	forms.IngresoRTF_dtl.controller.print()
		
	//application.updateUI(); //to make sure the Servoy window doesn't grab focus after showing the Jasper Viewer
		
	//plugins.jasperPluginRMI.runReport('parametros','report12.jasper','c:/myReport.pdf',OUTPUT_FORMAT.PDF,{pcustomerid: forms.Prueba_java.tipo});
	
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"E7C6E4EB-BD6C-4EEA-9FB7-BCA0913E1A74"}
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
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"2AC50295-8EB1-4C19-8D4F-FAEAD46491CC"}
 */
function onAction3(event) {
	foundset.newRecord()
}
