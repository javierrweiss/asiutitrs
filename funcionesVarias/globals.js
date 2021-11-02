/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"008EA752-F149-4A0C-8B22-EE09ABFD1868",variableType:4}
 */
var vEstadoCirugia = 0;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"7819E81F-3CDC-491D-9616-F597CA7EA5EF"}
 */
var textoAyuda = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"824D5457-02FD-49BB-868C-1F0734ABDA8B"}
 */
var campo = '';

/**
 * @properties={typeid:24,uuid:"2EC11F00-7AA5-4643-824E-4E34EA880ED6"}
 */
function InicializaRegistroRelacion(base, tabla, relacion) {
	var table = databaseManager.getTable(base, tabla)
    var columnNamesArray = table.getColumnNames();
	for (var i = 0; i < foundset[relacion].alldataproviders.length; i++) {
        var name = foundset[relacion].alldataproviders[i];
        
        var columnNames = table.getColumnNames()
        
        var firstColumnName = columnNamesArray[i];
        var jscolumn = table.getColumn(firstColumnName);
        var columnLength = jscolumn.getLength();
        
        foundset[relacion][firstColumnName] = 0
       var columnType = jscolumn.getType();
       if (columnType == 12){
    	   foundset[relacion][firstColumnName] = ' '
         }
       
      // plugins.dialogs.showInfoDialog("column Name",firstColumnName)
	  // plugins.dialogs.showInfoDialog("valo column Name", vhisclin_to_tbc_anestesia[firstColumnName])
    }
}

/**
 * @properties={typeid:24,uuid:"45F8433E-0844-4EAD-8F1F-F9B952EC9A57"}
 */
function AjustoLongitudCampo_bis(campo1, longitud) {
	globals.campo = ''
	globals.campo = campo1
	var tipo = typeof(campo1)
	
	if(tipo == "string"){
		if(globals.campo.length > longitud){
			 return globals.campo.substr(0,longitud);
		}else{
			for(var i=0;i<longitud-globals.campo.length;i++){
				campo += '|'
			}
			
			return campo1
		}
	}else{
		globals.campo = utils.stringFormat(campo1,'##########')
		if(globals.campo.length < longitud){
			var aux = ''
			for(var j=0;j<longitud-globals.campo.length;j++){
				aux += '0'
			}
			return aux+utils.stringFormat(campo1,'##########')
		}else{
			return ' '
		}
		
	}
}

/**
 * @param {string} campo2
 * @param {string} tipo
 * @param {number} longitud
 * @properties={typeid:24,uuid:"AC21BC1D-C261-49B4-B82E-3D85F527615F"}
 */
function AjustoLongitudCampoNew(campo2, tipo, longitud) {
	var relleno = ''

    var valor = '0'          

      if (tipo == "texto") 

            valor='X'

      else

            campo2=campo2.toString()

                  

      if (campo2.length >= longitud) 

            return campo2.substr(0, longitud);

      else 

            for (var i = 0; i < longitud - campo2.length; i++) 

                  relleno += valor

      

      if (tipo == "texto")

            return campo2 + relleno

      else

            return relleno + campo2 


}



//METODOS GENNARI AUTOMATIZACION DE TAREAS
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"562C754C-3F49-47F9-83CB-381FAE2914BB"}
 */
var messageError = "No ha sido posible guardar el registro. Corrija los siguientes errores y vuelva a intentar."		//var borderError = 'LineBorder,1,#ff0000';


/**
 * @properties={typeid:35,uuid:"59848474-23C7-4764-839F-527EBB51BAC2",variableType:-4}
 */
var isValid = true;
/**
 * TODO generated, please specify type and doc for the params
 * @param formName
 * @param validarSinPropertys
 * @param patron
 * @param validarCantCaracteres
 * @param minCaracteres
 *
 * @properties={typeid:24,uuid:"A3DE3582-4B41-49BB-8948-F5B976B1845B"}
 */
function validateRequired(formName, validarSinPropertys, patron, validarCantCaracteres, minCaracteres) {
    var ok = true;
    var textReplace=(patron!=null && !globals.IsBlank(patron))?patron:'txt_';
    var flds = forms[formName].elements;
    var formularioModel = solutionModel.getForm(formName)
    for (var item in flds) {
        var elm = flds[item];
        var requerido = formularioModel.getField(item)==null? undefined: formularioModel.getField(item).getDesignTimeProperty('requerido')
        var name= (elm!=null && item!='Body')?elm.getName():null;
//        if("txt_fio2"==name){ // debug desa
//        	application.output(name);
//        }
        if(elm.enabled==false || elm.visible==false || (requerido!=undefined && requerido==false)){// SI ESTA DESHABILILTADO o Oculto NO VALIDO CAMPO.
        	continue;
    	}
        //application.output(name); ver campos que se validan
        if(patron!=null && !globals.IsBlank(patron)){
        	if(name!=null && name.indexOf(patron)==-1 && requerido==undefined){ //si propEncontra no es nula hay que validar igual o no.
        		continue;
        	}
        }
        if (name!=null && name.indexOf("grp")==-1 && requerido==true || name!=null && validarSinPropertys &&  requerido==undefined) {//si es requerido o no tiene definicion de requerido se valida igual(validar sin property)
            var dp = elm.getDataProviderID() //obtenemos variable asociada
            //if (!forms[formName].foundset.getSegetSelectedRecord()[dp]) { //esto se usaba para obtener el recurso.
            var arrRelacion = dp.split(".");
            if (dp.indexOf("rel")>0 &&!globals[arrRelacion[0]][arrRelacion[1]]>=1) {
               // forms[formName].elements[name].bgcolor = "#ffbc78";
                isValid = false;
                if(requerido && name.indexOf(textReplace)==-1){
        			messageError += "\nDebe ingresar: " + forms[formName].elements[name].getName().replace('txt_','').replace(/\_/g,' ');
        		}else{
        			messageError += "\nDebe ingresar: " + forms[formName].elements[name].getName().replace(textReplace,'').replace(/\_/g,' ');
        		}
        		if(validarCantCaracteres && requerido==undefined){
        			messageError+=' Con '+ minCaracteres +' caracteres como mínimo.';
        		}
            	
            }else if(dp.indexOf("rel")==-1 && dp.indexOf("cbo")==-1){
            	if((validarCantCaracteres && forms[formName][dp]!=null && forms[formName][dp].length<minCaracteres) || ""==utils.stringTrim(forms[formName][dp]) || "0"==utils.stringTrim(forms[formName][dp]) ){
            		
            		  //forms[formName].elements[name].bgcolor = "#ffbc78";
            		isValid = false;
            		if(requerido && name.indexOf(textReplace)==-1){
            			messageError += "\nDebe ingresar: " + forms[formName].elements[name].getName().replace('txt_','').replace(/\_/g,' ');
            		}else{
            			messageError += "\nDebe ingresar: " + forms[formName].elements[name].getName().replace(textReplace,'').replace(/\_/g,' ');
            		}
            		
            		
            		if(validarCantCaracteres && requerido==undefined){
            			messageError+=' Con '+ minCaracteres +' caracteres como mínimo.';
            		}
            	}else{
            		// forms[formName].elements[name].bgcolor = "#d4e8d4";
            	}
            }else if(dp.indexOf("cbo")!=-1){
               	if((validarCantCaracteres && forms[formName][dp]!=null && forms[formName][dp]<minCaracteres) ||  ""==utils.stringTrim(forms[formName][dp]) ){
            		
          		  //forms[formName].elements[name].bgcolor = "#ffbc78";
               		isValid = false;
          		if(requerido && name.indexOf(textReplace)==-1){
          			messageError += "\nDebe ingresar: " + forms[formName].elements[name].getName().replace('txt_','').replace(/\_/g,' ');
          		}else{
          			messageError += "\nDebe ingresar: " + forms[formName].elements[name].getName().replace(textReplace,'').replace(/\_/g,' ');
          		}
          		
          		
          		if(validarCantCaracteres && requerido==undefined){
          			messageError+=' Con '+ minCaracteres +' caracteres como mínimo.';
          		}
          	}else{
          		// forms[formName].elements[name].bgcolor = "#d4e8d4";
          	}
            }
            
            else {
                //forms[formName].elements[name].bgcolor = "#d4e8d4";
            }
            requerido=false;
        }
    }
    
    return ok;
}


/**
 * TODO generated, please specify type and doc for the params
 * @param nombreForm
 * @param funcComportamiento se debe pasar una funcion.
 * @param elementos 
 *
 * @properties={typeid:24,uuid:"3310B30E-D752-443B-A8AD-494531193B51"}
 */
function modificarCampos(nombreForm, funcComportamiento, elementos){ //opcion para los sin nombres
	  var flds = forms[nombreForm].elements;
	  var arrayElementos = ''
	  if(elementos!=null && elementos!=''){
		  arrayElementos = elementos.split(',');
	  }
	
	  var itemForm;
	 /* if(){
		  
	  }*/
	    for (itemForm in flds) {
	        var elmForm = flds[itemForm];
	        if(elmForm!=null){
	        	try { //cannot find fuction??? in object??? al editar?
	        	    var nameField= elmForm.getName();
	 		    	if(elementos!=undefined && elementos!=null && utils.stringTrim(elementos)!=""){
	 		    		
	 		    		for (var indiceElementos = 0; indiceElementos < arrayElementos.length; indiceElementos++) {
	 		    			 if(funcComportamiento!=null && nameField.indexOf(arrayElementos[indiceElementos])!=-1){ //necesita correccion.
	 	 	 		    		funcComportamiento(nombreForm,nameField);
	 	 		    		 }
	 		    		}
	 		    		
	 		    	}
	 		    	if(funcComportamiento!=null && nameField.indexOf('txt')!=-1 || nameField.indexOf('cbo')!=-1 || nameField.indexOf('grp')!=-1 || nameField.indexOf('chk')!=-1){
	 		    		funcComportamiento(nombreForm,nameField)
	 		    	}
	        	} catch (e) {
	        		// TODO: handle exception
	        		
	        	}
		    	
	        }
	 
	    }
}

// INICIO funciones compartamiento

/**
 * @properties={typeid:35,uuid:"8DD45692-24C7-4F23-ADBB-DDD8D94E40BE",variableType:-4}
 */
var setearEnModoLecturaCampos=function(nombreForm,nameField ){
	if(nombreForm!=null && nameField!=null ){
		  forms[nombreForm].elements[nameField].readOnly = true;
		  //forms[nombreForm].elements[nameField].enabled = false;
	}
}

/**
 * @properties={typeid:35,uuid:"1ACA893D-FA7D-4029-A707-3856CED267ED",variableType:-4}
 */
var setDisabledField=function(nombreForm,nameField ){
	if(nombreForm!=null && nameField!=null ){
		  forms[nombreForm].elements[nameField].enabled = false;
		  //forms[nombreForm].elements[nameField].enabled = false;
	}
}

/**
 * @properties={typeid:35,uuid:"59CF7757-5BC4-406B-9565-DF961615D5D6",variableType:-4}
 */
var habilitarCampos=function(nombreForm,nameField ){
	if(nombreForm!=null && nameField!=null ){
		  forms[nombreForm].elements[nameField].readOnly = false;
		  forms[nombreForm].elements[nameField].enabled	 = true;
	}
}

//FIN funciones compartamiento

/**
 * TODO generated, please specify type and doc for the params
 * @param Fecha
 *
 * @properties={typeid:24,uuid:"34263993-A95C-439E-912B-5492B94ED569"}
 */
function DateToEntero(Fecha) {
	var Retorno = 0
	if (Fecha != null) {
		var dia = Fecha.getDate()
		var mes = Fecha.getMonth() + 1
		var ano = Fecha.getFullYear()
		var dia_ed = ''
		var mes_ed = ''
		if(mes<10){
			mes_ed = '0'+mes
		}else{
			mes_ed = mes
		}
		if(dia<10){
			dia_ed = '0'+dia
		}else{
			dia_ed = dia
		}
		Retorno = ano + '' + mes_ed + '' + dia_ed
	}
	return (Retorno)
}