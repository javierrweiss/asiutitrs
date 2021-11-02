/**
 * @properties={type:12,typeid:36,uuid:"91CECEE9-E29A-48CF-9AEB-13333588D963"}
 */
function caracter_con()
{
	var caracter='';
	switch (prose_carac_con){
		case 0:caracter='no tratado';break;
		case 1:caracter='monto fijo';break;
		case 2:caracter='prestación';break;
		case 3:caracter='capita';break;
		case 4:caracter='por horas';break;
		case 5:caracter=prose_otro_cara;break;
	}
	return caracter;
}

/**
 * @properties={type:12,typeid:36,uuid:"FD5823D1-74BA-4E3F-9E62-42B12068D7D0"}
 */
function descri_sector()
{
	globals.vSector=prose_sector
	return vsector_to_tbc_sector.sector_2_2;
}
