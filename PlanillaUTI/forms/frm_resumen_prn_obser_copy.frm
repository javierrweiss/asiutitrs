dataSource:"db:/enfermeria/hojauti_observaciones",
extendsID:"-1",
initialSort:"hiscli asc, fecha asc, hora asc",
items:[
{
borderType:"LineBorder,1,#000000",
dataProviderID:"vhiscli_to_tbc_admision.adm_histclinuni",
formIndex:7,
horizontalAlignment:4,
location:"708,83",
margin:"0,0,0,5",
transparent:true,
typeid:7,
uuid:"03BE1FB5-28CC-4A0D-8C29-2D69FA7DD46B",
verticalAlignment:0
},
{
borderType:"TitledBorder,Datos del Paciente,4,0",
formIndex:2,
lineSize:1,
location:"7,64",
size:"795,46",
transparent:true,
typeid:21,
uuid:"08C3DF0C-76EB-45CD-8FFA-300565368FD4"
},
{
borderType:"LineBorder,1,#000000",
dataProviderID:"vhiscli_to_tbc_admision.adm_habita",
formIndex:5,
horizontalAlignment:0,
location:"541,83",
size:"45,20",
transparent:true,
typeid:7,
uuid:"0DC91211-D7C6-40CB-9923-045FA6AEC11A",
verticalAlignment:0
},
{
height:116,
partType:2,
typeid:19,
uuid:"169FF161-8763-40BF-907E-BA2F9E722BD5"
},
{
formIndex:10,
horizontalAlignment:0,
location:"496,83",
size:"43,20",
text:"Habit.",
transparent:true,
typeid:7,
uuid:"3468C2DF-2ADF-4A85-8ACB-C41E86324431"
},
{
dataProviderID:"fecha",
editable:false,
formIndex:11,
format:"dd-MM-yyyy",
horizontalAlignment:0,
location:"420,20",
size:"96,20",
typeid:4,
uuid:"44BB3A8B-40CB-4F88-8CF9-8341745807F1"
},
{
formIndex:12,
horizontalAlignment:4,
location:"340,20",
margin:"0,0,0,5",
size:"80,20",
text:"Fecha:",
transparent:true,
typeid:7,
uuid:"4CB320CC-75F1-41F5-A7E7-AC26FA49FDDC"
},
{
borderType:"LineBorder,1,#000000",
dataProviderID:"vhiscli_to_tbc_admision.adm_cama",
formIndex:3,
horizontalAlignment:0,
location:"637,83",
size:"18,20",
transparent:true,
typeid:7,
uuid:"5E5E46C1-0516-4CC4-81A2-5831675CF1F3",
verticalAlignment:0
},
{
height:495,
partType:5,
typeid:19,
uuid:"9459799A-2C99-4C14-AE1D-2D9C13B118F0"
},
{
displaysTags:true,
horizontalAlignment:4,
location:"683,20",
size:"120,20",
text:"Hoja %%pageNumber%% de %%totalNumberOfPages%%",
transparent:true,
typeid:7,
uuid:"A07EF694-4A2E-419D-AE81-6435528E8387"
},
{
formIndex:1,
location:"660,83",
size:"41,20",
text:"H.C.U.",
transparent:true,
typeid:7,
uuid:"A4547F09-CEE9-4ED8-8BA4-0926E8F07CD9"
},
{
displaysTags:true,
fontType:"Times New Roman,0,14",
formIndex:13,
horizontalAlignment:0,
location:"321,42",
margin:"0,5,0,0",
size:"479,20",
text:"%%globals.vTituloResumen%%",
transparent:true,
typeid:7,
uuid:"AFA6B879-B137-40E9-80F2-A787F48A54E7"
},
{
formIndex:4,
horizontalAlignment:0,
location:"588,83",
size:"46,20",
text:"Cama",
transparent:true,
typeid:7,
uuid:"BA0CD238-2A58-4735-91DE-22D11F37EEAA"
},
{
formIndex:12,
horizontalAlignment:4,
location:"520,20",
margin:"0,0,0,5",
size:"53,20",
text:"Hora:",
transparent:true,
typeid:7,
uuid:"BD124D6D-ACD0-48AD-B5C1-15A5479AF6A6"
},
{
borderType:"LineBorder,1,#000000",
dataProviderID:"vhiscli_to_tbc_admision.hiscli",
formIndex:6,
horizontalAlignment:4,
location:"109,83",
margin:"0,0,0,5",
size:"87,20",
transparent:true,
typeid:7,
uuid:"C2519732-57C5-4EB3-9E5A-6779460F02C2",
verticalAlignment:0
},
{
dataProviderID:"fHora",
editable:false,
formIndex:11,
format:"|U",
horizontalAlignment:0,
location:"577,20",
size:"68,20",
typeid:4,
uuid:"D290D891-CC09-4E5D-9884-2A9FF41DE521"
},
{
borderType:"EmptyBorder,0,0,0,0",
dataProviderID:"fObservacion",
displayType:8,
displaysTags:true,
enabled:false,
formIndex:14,
location:"24,120",
size:"743,353",
transparent:true,
typeid:4,
uuid:"DCF95B1E-53C5-420B-8373-892A10B516E6"
},
{
imageMediaID:"97E0E77B-A2D4-4886-866B-60FA2A9917B2",
location:"2,0",
size:"311,68",
text:"",
typeid:7,
uuid:"F7D24344-6147-4AF9-9776-49247E864F6C"
},
{
borderType:"LineBorder,1,#000000",
dataProviderID:"vhiscli_to_tbc_admision.adm_apelnom",
formIndex:9,
horizontalAlignment:2,
location:"201,83",
margin:"0,5,0,0",
size:"292,20",
transparent:true,
typeid:7,
uuid:"FBCDABA7-8F11-4244-8F39-E6997AA1CE4A",
verticalAlignment:0
},
{
enabled:false,
formIndex:8,
location:"5,83",
size:"100,20",
text:"Nro. Internacion",
transparent:true,
typeid:7,
uuid:"FEF10475-CCCE-4702-AB12-1D162694EAA7"
}
],
name:"frm_resumen_prn_obser_copy",
navigatorID:"-1",
onShowMethodID:"-1",
showInMenu:true,
size:"812,124",
styleClass:"detail",
typeid:3,
uuid:"46A33ED3-588C-4314-AD7C-534369C942FC",
view:5