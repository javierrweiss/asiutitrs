dataSource:"db:/maestros/tbc_medicos_personal",
extendsID:"-1",
initialSort:"medperapeynom asc",
items:[
{
background:"#c0c0c0",
fontType:"Tahoma,0,12",
horizontalAlignment:0,
labelFor:"codigo",
location:"0,0",
size:"69,20",
text:"Legajo",
typeid:7,
uuid:"1CDC281D-C5A3-47D8-A1C7-B1576F333DEC"
},
{
background:"#c0c0c0",
fontType:"Tahoma,0,12",
horizontalAlignment:0,
labelFor:"descripcion",
location:"68,0",
margin:"0,5,0,0",
size:"347,20",
text:"Apellido y Nombre",
typeid:7,
uuid:"3B0199F0-F938-401A-A2DA-77EBDB8CA4AC"
},
{
dataProviderID:"prote_legajo1",
editable:false,
fontType:"Microsoft Sans Serif,0,12",
foreground:"#000000",
horizontalAlignment:4,
location:"0,20",
margin:"0,0,0,10",
name:"codigo",
onActionMethodID:"D653F317-B839-4682-A738-EFE6F5D4D3E6",
onFocusGainedMethodID:"06F5F789-DCB9-498F-836C-DDC20180A99C",
selectOnEnter:true,
size:"69,20",
typeid:4,
uuid:"6706236F-E967-4064-88BB-2BC66AAB58E7"
},
{
dataProviderID:"medperapeynom",
editable:false,
fontType:"Microsoft Sans Serif,0,12",
foreground:"#000000",
location:"68,20",
name:"descripcion",
onActionMethodID:"D653F317-B839-4682-A738-EFE6F5D4D3E6",
onFocusGainedMethodID:"D653F317-B839-4682-A738-EFE6F5D4D3E6",
selectOnEnter:true,
size:"347,20",
typeid:4,
uuid:"8CDED696-4FA5-4EBC-857D-F1C7D20FEBBA"
},
{
height:42,
partType:5,
typeid:19,
uuid:"9A0517C6-E5CF-4A73-853B-13BAC0D24B61"
}
],
name:"prote_tbl_medicos",
navigatorID:"-1",
onLoadMethodID:"-1",
onShowMethodID:"-1",
scrollbars:32,
showInMenu:false,
size:"415,480",
typeid:3,
uuid:"9C772EDC-05E7-4E6D-A012-FC852875E180",
view:3