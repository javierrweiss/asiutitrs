/**
 * @properties={typeid:36,uuid:"E9D62CEA-61FA-4756-A7AB-EB1E2A438CF2"}
 */
function tipo_docu(){
  	var tip_d = ''
    switch (adm_tipdocu){
		case 1:	tip_d = 'C.I.';break;
		case 2:	tip_d = 'L.E.';break;
		case 3:	tip_d = 'L.C.';break;
		case 4:	tip_d = 'D.N.I.';break;
		case 5:	tip_d = 'PAS.';break;
    }
	return tip_d;
}

/**
 * @properties={typeid:36,uuid:"C40EFC3E-BDF4-43EC-B646-83814DBFB530"}
 */
function hiscli2()
{
	var hiscli1 = adm_histclin.toString();
	switch (hiscli1.length){
		case 2:	hiscli1 = hiscli1.substr(0,1)+'/'+hiscli1.substr(1,1);break;
		case 3:	hiscli1 = hiscli1.substr(0,2)+'/'+hiscli1.substr(2,1);break;
		case 4:	hiscli1 = hiscli1.substr(0,3)+'/'+hiscli1.substr(3,1);break;
		case 5:	hiscli1 = hiscli1.substr(0,4)+'/'+hiscli1.substr(4,1);break;
		case 6:	hiscli1 = hiscli1.substr(0,5)+'/'+hiscli1.substr(5,1);break;
		case 7:	hiscli1 = hiscli1.substr(0,6)+'/'+hiscli1.substr(6,1);break;
		case 8:	hiscli1 = hiscli1.substr(0,7)+'/'+hiscli1.substr(7,1);break;
	}	
	return hiscli1;
}

/**
 * @properties={typeid:36,uuid:"F7DE89ED-0399-44EA-B971-437255BC4651"}
 */
function fechaepic2()
{
	var fechaepic_ed = adm_fecepic.toString();
	if (fechaepic_ed=='0'){
		fechaepic_ed=''
	}else{
	fechaepic_ed = fechaepic_ed.substr(6,2)+'/'+fechaepic_ed.substr(4,2)+'/'+fechaepic_ed.substr(0,4);
	}
	return fechaepic_ed;
}

/**
 * @properties={typeid:36,uuid:"8B68CF1C-D234-4EBC-8A4D-0AD3D6A53AD4"}
 */
function fechaing2()
{ 
	var fecing = adm_fecing.toString();
	fecing = fecing.substr(6,2)+'/'+fecing.substr(4,2)+'/'+fecing.substr(0,4);
	return fecing;
}
