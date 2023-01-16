(()=>{"use strict";var e={749:(e,r,o)=>{o.r(r),o.d(r,{default:()=>L});const t=require("express");var s=o.n(t);const n=require("joi");var a=o.n(n);o(142).config();const d=a().object().keys({NODE_ENV:a().string().default("development").valid("development","production"),PORT:a().number().default(8080),VERSION:a().string(),MYSQL_HOST:a().string().default("127.0.0.1"),MYSQL_PORT:a().number().default(3306),MYSQL_USER:a().string(),MYSQL_PASS:a().string(),MYSQL_DATABASE:a().string()}).unknown().required(),{error:l,value:i}=d.validate(process.env);if(l)throw new Error(`Config validation error: ${l.message}`);const u={version:i.VERSION,env:i.NODE_ENV,port:i.PORT,mysql_host:i.MYSQL_HOST,mysql_port:i.MYSQL_PORT,mysql_user:i.MYSQL_USER,mysql_pass:i.MYSQL_PASS,mysql_database:i.MYSQL_DATABASE},c=require("mysql"),p=o.n(c)().createPool({connectionLimit:10,host:u.mysql_host,user:u.mysql_user,password:u.mysql_pass,database:u.mysql_database,port:u.mysql_port}),S=s().Router();S.route("/").get(((e,r)=>{new Promise(((e,r)=>{p.getConnection(((o,t)=>{o?r(o):t.query("SELECT * FROM Note",((o,s)=>{o?(console.log("SQL error:",o),r(o)):e(s),t.release()}))}))})).then((e=>{r.send(e)})).catch((e=>r.send(e)))})),S.route("/").post(((e,r)=>{(e=>new Promise(((r,o)=>{p.getConnection(((t,s)=>{t?o(t):s.query("INSERT INTO Note SET ?",e,((e,t)=>{e?(console.log("SQL error",e),o(e)):1===t.affectedRows?r(`sucess ! note_id: ${t.insertId}`):(console.log("沒有更動到資料"),o("no change...")),s.release()}))}))})))(e.body).then((e=>{r.send(e)})).catch((e=>{r.send(e)}))})),S.route("/").delete(((e,r)=>{(e=>new Promise(((r,o)=>{p.getConnection(((t,s)=>{t?o(t):s.query("DELETE from Note WHERE id = ?",e,((t,n)=>{t?(console.log("SQL error",t),o(t)):1===n.affectedRows?r(`sucess ! note_id: ${e}`):(console.log("沒有更動到資料"),o("no change...")),s.release()}))}))})))(e.headers.id).then((e=>r.send(e))).catch((e=>r.send(e)))}));const m=S,y=s().Router();y.use("/note",m);const g=y,_=require("body-parser");var v=o.n(_);const f=require("cors");var E=o.n(f);const q=require("morgan");var h=o.n(q);const b=s()();b.use(v().json()),b.use(v().urlencoded({extends:!0})),b.use(E()()),b.use(h()("dev")),b.use("/api",g);const O=b;(e=o.hmd(e)).parent||O.listen(u.port,(()=>{console.log(`server started on port https://127.0.0.1:${u.port} ${u.env}`)}));const L=O},142:e=>{e.exports=require("dotenv")}},r={};function o(t){var s=r[t];if(void 0!==s)return s.exports;var n=r[t]={id:t,loaded:!1,exports:{}};return e[t](n,n.exports,o),n.loaded=!0,n.exports}o.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return o.d(r,{a:r}),r},o.d=(e,r)=>{for(var t in r)o.o(r,t)&&!o.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},o.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),o.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var t=o(749);module.exports=t})();