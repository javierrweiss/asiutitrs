dataSource:"db:/maestros/tbc_medicos_personal",
extendsID:"-1",
initialSort:"medperapeynom asc",
items:[
{
background:"#ffffff",
dataProviderID:"legajo_med",
editable:false,
fontType:"Tahoma,1,12",
foreground:"#000000",
horizontalAlignment:4,
location:"0,20",
margin:"0,0,0,10",
name:"codigo",
onActionMethodID:"8438553D-87B3-4268-A7C1-0CBBD231A25B",
size:"69,20",
typeid:4,
uuid:"45D6BC37-59BB-4E04-8F37-7B0522D9E9C1"
},
{
fontType:"Tahoma,1,11",
foreground:"#000000",
horizontalAlignment:0,
labelFor:"descripcion",
location:"68,0",
margin:"0,5,0,0",
name:"nome_descripcion_label",
size:"396,20",
text:"Apellido y Nombre",
transparent:true,
typeid:7,
uuid:"84D06B64-2590-4592-8C5C-8B475EB8216A"
},
{
height:480,
partType:5,
typeid:19,
uuid:"85CD2A58-AE8B-4327-B001-DDBDD6B0D69D"
},
{
fontType:"Tahoma,1,11",
foreground:"#000000",
horizontalAlignment:0,
labelFor:"codigo",
location:"0,0",
name:"nome_codi_label",
size:"69,20",
text:"Legajo",
transparent:true,
typeid:7,
uuid:"8BDA358A-609C-4424-B6BC-9C3C258B1C6D"
},
{
dataProviderID:"tipo_med",
editable:false,
fontType:"Tahoma,1,11",
foreground:"#000000",
location:"466,20",
name:"tipo",
onActionMethodID:"8438553D-87B3-4268-A7C1-0CBBD231A25B",
size:"28,20",
typeid:4,
uuid:"A0B26535-D81E-4FAB-9B62-48639B355D3F"
},
{
background:"#ffffff",
dataProviderID:"medperapeynom",
editable:false,
fontType:"Tahoma,1,12",
foreground:"#000000",
location:"68,20",
name:"descripcion",
onActionMethodID:"8438553D-87B3-4268-A7C1-0CBBD231A25B",
selectOnEnter:true,
size:"396,20",
typeid:4,
uuid:"A28BAE89-866F-48E3-A22E-A999D3D7C085"
},
{
fontType:"Tahoma,1,10",
foreground:"#000000",
labelFor:"tipo",
location:"465,0",
size:"27,20",
text:"Tipo",
transparent:true,
typeid:7,
uuid:"A7227FB2-6E23-443D-8B8E-C7D86F6772B0"
}
],
name:"protambu_frm_scroll_medicos_personal",
navigatorID:"-2",
onLoadMethodID:"-1",
onShowMethodID:"-1",
showInMenu:false,
size:"497,480",
styleName:"Sanatorio",
typeid:3,
uuid:"934C19B3-A9BF-4325-A4D4-5F1F0CB038CB",
view:3