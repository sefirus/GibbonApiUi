import{a as ne}from"./chunk-MIO7QY3O.js";import{a as T,b as L,c as U}from"./chunk-ZIWOXXWQ.js";import{h as te,j as ie}from"./chunk-EA4CVY3K.js";import{U as B,V,Y as q,_ as A,ba as H,c as y,ca as $,da as G,ea as Y,fa as J,ha as K,ka as Q,l as W,la as X,m as z,ma as Z,o as _,oa as ee,ra as k}from"./chunk-BDVB6HW4.js";import{Bb as w,Cb as P,Kb as s,Lb as v,Mb as O,Nb as N,Ob as j,Pb as E,Rb as m,Sb as I,Wa as l,Xa as p,ba as h,la as d,ma as u,mb as x,ob as c,pc as F,qc as R,tc as D,ub as a,vb as r,wb as g}from"./chunk-I5VNOJVT.js";var le=i=>["/workspace-management",i],oe=(()=>{let e=class e{constructor(){this.workspace=null}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=d({type:e,selectors:[["app-card"]],inputs:{workspace:"workspace"},standalone:!0,features:[m],decls:13,vars:6,consts:[[1,"card-card",3,"routerLink"],[1,"card-imagecontainer"],[1,"card-image"],[1,"card-text"],[1,"card-tag"],[1,"card-text2"],[1,"card-textcontent"],[1,"card-text4"],[1,"card-text5"]],template:function(t,o){t&1&&(a(0,"div",0)(1,"div",1)(2,"div",2),g(3,"span",3),r(),a(4,"div",4)(5,"span",5)(6,"span"),s(7),r()()()(),a(8,"div",6)(9,"span",7),s(10),r(),a(11,"span",8),s(12),r()()()),t&2&&(c("routerLink",I(4,le,o.workspace.name)),l(7),O("Documents: ",o.workspace.numOfDocuments,""),l(3),v(o.workspace.name),l(2),O("Schema Objects: ",o.workspace.numOfSchemaObjects,""))},dependencies:[z],styles:["[_nghost-%COMP%]{display:contents}.card-card[_ngcontent-%COMP%]{width:317px;display:flex;overflow:hidden;position:relative;align-items:center;flex-shrink:0;border-color:#0000001a;border-style:solid;border-width:1px;border-radius:6px;flex-direction:column}.card-imagecontainer[_ngcontent-%COMP%]{display:flex;overflow:hidden;align-self:stretch;align-items:flex-start;flex-shrink:0}.card-image[_ngcontent-%COMP%]{width:317px;height:240px;display:flex;position:relative;flex-grow:1;align-self:stretch;align-items:flex-start;background-color:#d8d8d880}.card-text[_ngcontent-%COMP%]{top:112px;left:16px;color:#000;width:285px;height:auto;position:absolute;font-size:12px;font-style:Regular;text-align:center;font-family:Roboto;font-weight:400;line-height:16px;font-stretch:normal;text-decoration:none}.card-tag[_ngcontent-%COMP%]{top:0;left:0;width:98px;display:flex;padding:4px 8px;position:absolute;align-items:center;border-radius:6px 0;flex-direction:column;justify-content:center;background-color:#0000000d}.card-text2[_ngcontent-%COMP%]{color:#000;height:auto;font-size:12px;font-style:Medium;text-align:left;font-family:Roboto;font-weight:500;line-height:16px;font-stretch:normal;text-decoration:none}.card-textcontent[_ngcontent-%COMP%]{gap:4px;display:flex;padding:12px;align-self:stretch;align-items:flex-start;flex-direction:column}.card-text4[_ngcontent-%COMP%]{color:#000;height:auto;font-size:16px;align-self:stretch;font-style:Regular;text-align:left;font-family:Roboto;font-weight:400;line-height:24px;font-stretch:normal;text-decoration:none}.card-text5[_ngcontent-%COMP%]{color:#000;height:auto;font-size:20px;align-self:stretch;font-style:Medium;text-align:left;font-family:Roboto;font-weight:500;line-height:28px;font-stretch:normal;text-decoration:none}"]});let i=e;return i})();var M=class{constructor(e,f,n,t,o){this.id=e,this.name=f,this.accessLevel=n,this.numOfSchemaObjects=t,this.numOfDocuments=o}};function de(i,e){if(i&1&&(a(0,"mat-error"),s(1),r()),i&2){let f=P();l(),v(f.apiError)}}var ae=(()=>{let e=class e{constructor(n,t,o){this.http=n,this.router=t,this.dialogRef=o,this.workspaceName="",this.apiError=""}createWorkspace(){this.http.post(`${k.apiBaseUrl}/workspaces`,{name:this.workspaceName}).subscribe({next:n=>{this.router.navigate([`/workspace-management/${n.name}`]),this.dialogRef.close()},error:n=>{this.apiError=n.error?.error||"Unknown error occurred"}})}};e.\u0275fac=function(t){return new(t||e)(p(y),p(W),p(te))},e.\u0275cmp=d({type:e,selectors:[["app-create-workspace-dialog"]],standalone:!0,features:[m],decls:12,vars:2,consts:[[2,"width","100%","padding","var(--dl-space-space-unit)"],[3,"ngSubmit"],["appearance","fill",2,"width","100%"],["matInput","","name","workspaceName","type","email","required","",3,"ngModelChange","ngModel"],[4,"ngIf"],["type","submit","color","black","mat-raised-button",""]],template:function(t,o){t&1&&(a(0,"mat-card",0)(1,"mat-card-title"),s(2,"Create new workspace"),r(),a(3,"mat-card-content")(4,"form",1),w("ngSubmit",function(){return o.createWorkspace()}),a(5,"mat-form-field",2)(6,"mat-label"),s(7,"Enter Workspace Name"),r(),a(8,"input",3),E("ngModelChange",function(b){return j(o.workspaceName,b)||(o.workspaceName=b),b}),r()(),x(9,de,2,1,"mat-error",4),a(10,"button",5),s(11,"Create"),r()()()()),t&2&&(l(8),N("ngModel",o.workspaceName),l(),c("ngIf",o.apiError))},dependencies:[ee,T,U,L,V,q,Z,B,R,X,J,A,H,$,K,Q,Y,G]});let i=e;return i})();function me(i,e){if(i&1&&g(0,"app-card",14),i&2){let f=e.$implicit;c("workspace",f)}}var re=(()=>{let e=class e{constructor(n,t,o){this.http=n,this.authService=t,this.dialog=o,this.workspaces=[]}ngOnInit(){this.fetchWorkspaces()}fetchWorkspaces(){this.http.get(`${k.apiBaseUrl}/workspaces`).subscribe({next:n=>{this.workspaces=n.map(t=>new M(t.id,t.name,t.accessLevel,t.numOfSchemaObjects,t.numOfDocuments))},error:n=>{}})}addNewWorkspace(){this.dialog.open(ae,{})}};e.\u0275fac=function(t){return new(t||e)(p(y),p(ne),p(ie))},e.\u0275cmp=d({type:e,selectors:[["app-user-workspaces"]],standalone:!0,features:[m],decls:19,vars:1,consts:[[1,"page-container"],[1,"page-mainpage"],[1,"page-section"],[1,"page-container1"],[1,"page-text"],[1,"page-textfield"],[1,"page-text1"],[1,"page-section1"],[1,"page-list"],[3,"workspace",4,"ngFor","ngForOf"],[1,"page-card",3,"click"],[1,"page-imagecontainer"],[1,"page-image"],[1,"page-text4"],[3,"workspace"]],template:function(t,o){t&1&&(a(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"span",4),s(5,"Your Workspaces"),r()(),a(6,"div",5)(7,"span",6)(8,"span"),s(9,"Search in your Workspaces"),r(),g(10,"br"),r()()(),a(11,"div",7)(12,"div",8),x(13,me,1,1,"app-card",9),a(14,"div",10),w("click",function(){return o.addNewWorkspace()}),a(15,"div",11)(16,"div",12)(17,"span",13),s(18,"+"),r()()()()()()()()),t&2&&(l(13),c("ngForOf",o.workspaces))},dependencies:[oe,F],styles:["[_nghost-%COMP%]{display:contents}.page-container[_ngcontent-%COMP%]{width:100%;display:flex;overflow:auto;min-height:100vh;align-items:center;flex-direction:column}.page-mainpage[_ngcontent-%COMP%]{flex:1;width:auto;height:auto;display:flex;z-index:1;overflow:hidden;position:relative;align-self:stretch;align-items:flex-start;background-color:#fff}.page-section[_ngcontent-%COMP%]{flex:1;width:auto;display:flex;overflow:hidden;align-items:center;flex-shrink:0;padding-top:var(--dl-space-space-halfunit);padding-left:var(--dl-space-space-unit);padding-right:var(--dl-space-space-unit);padding-bottom:var(--dl-space-space-halfunit);justify-content:space-between}.page-container1[_ngcontent-%COMP%]{gap:24px;width:689px;display:flex;padding:0 25px;align-items:flex-start;flex-shrink:0;flex-direction:column;justify-content:center}.page-text[_ngcontent-%COMP%]{color:#000;height:auto;font-size:40px;font-style:Bold;text-align:center;font-family:Roboto;font-weight:700;line-height:48px;font-stretch:normal;text-decoration:none}.page-textfield[_ngcontent-%COMP%]{gap:4px;width:auto;height:auto;display:flex;padding:8px;align-items:center;flex-shrink:0;border-color:#0000001a;border-style:solid;border-width:1px;border-radius:6px;justify-content:flex-end}.page-text1[_ngcontent-%COMP%]{color:#00000080;height:auto;flex-grow:1;font-size:14px;font-style:Regular;text-align:left;font-family:Roboto;font-weight:400;line-height:20px;font-stretch:normal;text-decoration:none}.page-icsearch[_ngcontent-%COMP%]{width:20px;height:20px}.page-section1[_ngcontent-%COMP%]{gap:29px;top:var(--dl-space-space-fourunits);left:0;right:0;width:auto;height:auto;margin:auto;display:flex;z-index:1001;overflow:hidden;position:absolute;align-self:stretch;align-items:flex-start;padding-top:var(--dl-space-space-unit);padding-left:0;padding-right:0;flex-direction:column;padding-bottom:var(--dl-space-space-unit);justify-content:center}.page-list[_ngcontent-%COMP%]{gap:var(--dl-space-space-oneandhalfunits);height:auto;display:flex;z-index:1;flex-wrap:wrap;align-self:stretch;align-items:center;flex-shrink:0;padding-top:0;padding-left:var(--dl-space-space-twounits);padding-right:var(--dl-space-space-twounits);padding-bottom:0;justify-content:flex-start}.page-card[_ngcontent-%COMP%]{width:317px;height:320px;display:flex;overflow:hidden;align-items:center;flex-shrink:0;border-color:#0000001a;border-style:solid;border-width:1px;border-radius:6px;flex-direction:column}.page-imagecontainer[_ngcontent-%COMP%]{display:flex;overflow:hidden;align-self:stretch;align-items:flex-start;flex-shrink:0}.page-image[_ngcontent-%COMP%]{width:317px;height:320px;display:flex;position:relative;flex-grow:1;align-self:stretch;align-items:flex-start;background-color:#d8d8d880}.page-text4[_ngcontent-%COMP%]{top:152px;left:16px;color:#000;width:285px;height:auto;position:absolute;font-size:128px;font-style:Regular;text-align:center;font-family:Roboto;font-weight:400;line-height:16px;font-stretch:normal;text-decoration:none}"]});let i=e;return i})();var fe=[{path:"",component:re}],se=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=u({type:e}),e.\u0275inj=h({imports:[_.forChild(fe),_]});let i=e;return i})();var Le=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=u({type:e}),e.\u0275inj=h({imports:[D,se]});let i=e;return i})();export{Le as WorkspacePageModule};
