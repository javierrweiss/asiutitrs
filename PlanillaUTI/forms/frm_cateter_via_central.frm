dataSource:"db:/enfermeria/hojauti_cateteres",
extendsID:"-1",
items:[
{
location:"751,5",
name:"lbl_tiene",
size:"52,20",
text:"Tiene?",
transparent:true,
typeid:7,
uuid:"19117C24-CCE3-49DA-B1B1-FDE2FC9DE173"
},
{
fontType:"Tahoma,0,14",
location:"479,5",
name:"btn_cancela",
onActionMethodID:"F271EB7A-763B-4B34-949C-8624DFC13909",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
size:"85,20",
text:"Cancela",
typeid:7,
uuid:"2998598E-3E75-47A7-AF4E-8F3C7AD7BA05"
},
{
height:26,
partType:5,
typeid:19,
uuid:"364594F0-ABCB-4F11-9717-EC60A18507DB"
},
{
dataProviderID:"cateter_sino",
displayType:2,
location:"813,5",
name:"cateter_sino",
onDataChangeMethodID:"C4CF2097-AAF6-44F9-A5EE-918CCF81ADE5",
size:"60,20",
typeid:4,
uuid:"4403B31B-5E40-4406-878F-A271B69CF73A",
valuelistID:"C69107CC-7695-4ADF-A507-CE39C4D1C878"
},
{
dataProviderID:"fecha",
editable:false,
enabled:false,
fontType:"Verdana,1,14",
format:"dd-MM-yyyy|dd-MM-yyyy",
horizontalAlignment:0,
location:"567,5",
size:"110,20",
typeid:4,
uuid:"5309B6A4-DC8F-4CE5-9E05-78CAAAE3581E"
},
{
dataProviderID:"hora_edit",
fontType:"Verdana,1,14",
horizontalAlignment:0,
location:"689,5",
size:"54,20",
text:"type",
transparent:true,
typeid:7,
uuid:"58024898-C8ED-4C3E-9FC7-6F8D91164DF6"
},
{
fontType:"Verdana,0,14",
horizontalAlignment:0,
location:"5,5",
size:"228,20",
text:"Vía Central",
transparent:true,
typeid:7,
uuid:"6A22F6F5-D031-4734-907C-C975AB3EFFE3"
},
{
fontType:"Tahoma,0,14",
location:"238,5",
name:"agrega",
onActionMethodID:"ECE36105-1EC2-4CAA-BC19-9B8C3DF70C31",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
size:"102,20",
text:"Informa",
typeid:7,
uuid:"83644791-DB37-4775-B8F2-B6E6C95039DE"
},
{
dataProviderID:"valores",
displayType:2,
fontType:"Tahoma,0,14",
location:"355,5",
name:"valores",
onActionMethodID:"19A42E84-81E2-4ACF-BE5C-E71EDBCE221F",
onDataChangeMethodID:"58B68C43-D23E-4DC6-B771-27BC1B70CA9F",
onFocusGainedMethodID:"5A6FD109-D326-4979-8B41-9BC074E1F45A",
onFocusLostMethodID:"1D58F87A-72D9-4844-A76A-8B0B143EC6B8",
size:"115,20",
typeid:4,
uuid:"C51592B0-A2B0-4C16-A98C-20D0A26895E6",
valuelistID:"319FB7A7-BA06-4268-B6FF-A74E39439AC0"
},
{
dataProviderID:"cateter_texto",
location:"948,5",
name:"cateter_texto",
onDataChangeMethodID:"0BC0E61E-6BE5-42E9-BC58-21FF2359897B",
size:"236,20",
typeid:4,
uuid:"DD4A7433-8DFF-4FE6-A0C8-BB1D00B5A21A"
},
{
location:"885,5",
name:"lbl_ubica",
size:"69,20",
text:"Ubicacón",
transparent:true,
typeid:7,
uuid:"E88B5996-01D6-4C1D-99D8-FDA5F248C874"
}
],
name:"frm_cateter_via_central",
navigatorID:"-2",
onShowMethodID:"4DB0E1CA-FC24-4456-B85A-9CBB4ED51C79",
showInMenu:true,
size:"1200,26",
styleName:"planillaUti",
typeid:3,
uuid:"E7DC561C-AE22-474F-A432-E41EA1C26219"