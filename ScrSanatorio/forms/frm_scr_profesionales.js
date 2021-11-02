/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"58F88E88-5D65-437B-A6B0-56C918F0F67E",variableType:4}
 */
var codigo = 0; 
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"3B7795E8-F620-4B41-A91F-2BA9A311DD73",variableType:4}
 */
var estado = 0;
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"DDA4AD7A-3A28-4F97-81AC-5E828EE0C6AA"}
 */
var descripcion = '';

/** 
 * @param event
 *
 * @properties={typeid:24,uuid:"B03FE923-DCA8-41EB-8942-F2A1A5511137"}
 */
function onRecordSelection_frm_scr_visitantes(event) {
	globals.gbl_profesional = foundset.codigo
	application.getWindow('Busca_profe').hide();
}

/**
 * @AllowToRunInFind
 *
 * @properties={typeid:24,uuid:"4D226CCC-D251-4B4C-9456-654945452849"}
 */
function filtra(){
	var largo = globals.gbl_con_busca.length;
    var esnumero = true;
    
    for (var i= 0;i<largo && esnumero == true; i++){
	   if (globals.gbl_con_busca.charCodeAt(i)< 48 || globals.gbl_con_busca.charCodeAt(i) > 57){
		   esnumero = false
	   }
    }

    foundset.find()
	if(esnumero){
		foundset.codigo = '>= ' +  utils.stringToNumber(globals.gbl_con_busca.valueOf())
	}else{
		foundset.descripcion = '>' +  globals.gbl_con_busca.valueOf()		
	}
	
    switch (forms.frm_tab_profesionales.frm_campo_N2){      
        case 1 : foundset.estado = 'Operativo';break	             
        case 2 : foundset.estado = 'No Operativo'; break             
    }
	foundset.search()	
	
	if(esnumero){
		foundset.sort('codigo asc')
	}else{
		foundset.sort('descripcion asc')	
	}
}