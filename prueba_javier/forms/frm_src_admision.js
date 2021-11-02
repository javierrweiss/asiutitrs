




/**
 * @properties={typeid:24,uuid:"B7A80A52-C64D-49A3-A08E-EADDE859E8B3"}
 */
function dbToObject_NumberToDate(value, INTEGER) {
	// TODO Auto-generated method stub
	var nToStr = value.toString();
	
	return utils.dateFormat(nToStr,'yyyyMMdd');
}
