const slug=s=>s.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
const rm=matchMedia('(prefers-reduced-motion:reduce)').matches;
setTimeout(()=>{const p=document.getElementById('pre');if(p)p.style.display='none'},4500);
let RET=false;try{RET=sessionStorage.getItem('mn_wa')==='1'}catch(e){}
function waBack(){let f=false;try{f=sessionStorage.getItem('mn_wa')==='1';sessionStorage.removeItem('mn_wa')}catch(e){}if(!f)return;close_();wb.hidden=false;clearTimeout(waBack.t);waBack.t=setTimeout(()=>wb.hidden=true,9000)}
document.addEventListener('click',e=>{const a=e.target.closest('a[href*="wa.me"]');if(a){try{sessionStorage.setItem('mn_wa','1');sessionStorage.setItem('mn_pos',JSON.stringify({h:location.hash,y:scrollY}))}catch(x){}}});
document.addEventListener('visibilitychange',()=>{if(!document.hidden)waBack()});addEventListener('pageshow',e=>{if(e.persisted)waBack()});
wbb.onclick=()=>{wb.hidden=true};
const WA=n=>'https://wa.me/237652311022?text='+encodeURIComponent(n);
const MSG='Hello Vernyuy Services. I saw your fashion website demonstration and would like to know how I can get a similar website for my fashion business.';
wa1.href=wa2.href=WA(MSG);
const P=[
{id:1,n:'Ivory Wrap Dress',p:240,o:null,c:'#d9c9ad',k:['#d9c9ad','#000','#6b4a33'],t:'New'},
{id:2,n:'Noir Block Heel',p:180,o:null,c:'#222',k:['#000','#b08d4f'],t:'New'},
{id:3,n:'Camel Structured Tote',p:320,o:400,c:'#a67b50',k:['#a67b50','#000'],t:'−20%'},
{id:4,n:'Cloud Leather Sneaker',p:150,o:null,c:'#c9bfae',k:['#fff','#e4d8c3'],t:'New'},
{id:5,n:'Gilded Strap Sandal',p:130,o:170,c:'#8a6446',k:['#b08d4f','#000'],t:'−25%'},
{id:6,n:'Silk Evening Gown',p:420,o:600,c:'#3b2a1e',k:['#000','#3b2a1e'],t:'−30%'},
{id:7,n:'Tailored Wool Blazer',p:290,o:null,c:'#6b5a49',k:['#6b5a49','#000'],t:'New'},
{id:8,n:'Muted Gold Cuff',p:95,o:130,c:'#b08d4f',k:['#b08d4f'],t:'−27%'}];
const X=[[9,'Linen Midi Dress',210,0,'#c9bfae','Dresses','New'],[10,'Emerald Slip Dress',260,320,'#2f4a3c','Dresses','−19%'],[11,'Poplin Shirt Dress',175,0,'#e4d8c3','Dresses','Best seller'],[12,'Pleated Day Dress',195,0,'#a67b50','Dresses','New'],[13,'Leather Loafer',165,0,'#3b2a1e','Shoes','Best seller'],[14,'Ankle Boot',210,260,'#222','Shoes','−19%'],[15,'Pointed Pump',175,0,'#6b4a33','Shoes','New'],[16,'Mini Crossbody',240,0,'#8a6446','Handbags','New'],[17,'Slouch Hobo Bag',280,350,'#3b2a1e','Handbags','−20%'],[18,'Evening Clutch',150,0,'#b08d4f','Handbags','Best seller'],[19,'Court Sneaker',140,0,'#e4d8c3','Sneakers','Best seller'],[20,'Suede Runner',160,190,'#8d8272','Sneakers','−16%'],[21,'Braided Sandal',110,0,'#a67b50','Sandals','New'],[22,'Slingback Heel',185,0,'#222','Sandals','Best seller'],[23,'Silk Scarf',85,0,'#b08d4f','Accessories','New'],[24,'Leather Belt',70,0,'#3b2a1e','Accessories','Best seller'],[25,'Square Sunglasses',120,150,'#222','Accessories','−20%'],[26,'Wide-Leg Trouser',150,0,'#6b5a49','Clothing','New'],[27,'Knit Polo',90,0,'#c9bfae','Clothing','Best seller']];
X.forEach(x=>P.push({id:x[0],n:x[1],p:x[2],o:x[3]||null,c:x[4],k:[x[4],'#000'],cat:x[5],t:x[6]}));
const CAT={1:'Dresses',2:'Shoes',3:'Handbags',4:'Sneakers',5:'Sandals',6:'Dresses',7:'Clothing',8:'Accessories'};P.forEach(p=>p.cat=p.cat||CAT[p.id]);
const NEW={1:['White Wrap Dress',14500],2:['Black Block Heel Shoes',12000],3:['Brown Leather Tote Bag',18000,22500],4:['White Leather Sneakers',15000],5:['Gold Strap Flat Sandals',6500,8500],6:['Black Satin Evening Gown',20000,28000],7:['Beige Tailored Blazer',16000],8:['Gold Cuff Bracelet',5000,6500],9:['Linen Midi Dress',11000],10:['Green Satin Slip Dress',13000,16000],11:['Striped Shirt Dress',9500],12:['Pleated Day Dress',10500],13:['Brown Leather Loafers',14000],14:['Black Leather Ankle Boots',19000,24000],15:['Pointed Toe Pumps',12500],16:['Mini Crossbody Bag',13500],17:['Slouch Shoulder Bag',15500,19500],18:['Gold Evening Clutch',8500],19:['White Court Sneakers',12000],20:['Grey Suede Running Sneakers',11500,14000],21:['Braided Leather Sandals',7500],22:['Black Slingback Heels',11000],23:['Printed Silk Scarf',5500],24:['Brown Leather Belt',6000],25:['Square Sunglasses',7000,9000],26:['Wide-Leg Trousers',10000],27:['Knit Polo Shirt',8000]};
const NM={};P.forEach(p=>{const x=NEW[p.id];NM[p.n]=x[0];p.n=x[0];p.p=x[1];p.o=x[2]||null;if(p.o)p.t='\u2212'+Math.round((1-p.p/p.o)*100)+'%'});
const sil='<svg viewBox="0 0 100 160" fill="#fff"><path d="M50 4c6 0 9 5 8 11l-3 8 14 12-6 46 16 70H21l16-70-6-46 14-12-3-8c-1-6 2-11 8-11z"/></svg>';
const $=s=>document.querySelector(s),money=n=>n.toLocaleString('en-US')+' XAF';
const cats=[['Dresses','#6b4a33'],['Shoes','#222'],['Handbags','#a67b50'],['Sneakers','#8d8272'],['Sandals & Heels','#b08d4f'],['Accessories','#3b2a1e']];
$('#cats').innerHTML=cats.map(c=>`<a class="ph" href="#products" data-cat="${c[0]}" data-img="categories/${slug(c[0])}" style="--c:${c[1]}">${c[0]}</a>`).join('');
const card=p=>`<article class="card"><div class="ph" data-img="products/${slug(p.n)}" style="--c:${p.c}">${sil}<span class="tag">${p.t}</span></div><div class="row"><span class="nm">${p.n}</span><span>${p.o?`<span class="was">${money(p.o)}</span>`:''}${money(p.p)}</span></div><div class="dots">${p.k.map(k=>`<i style="background:${k}"></i>`).join('')}</div><div class="acts"><button data-q="${p.id}">Quick view</button><button data-a="${p.id}">Add to bag</button></div></article>`;
$('#grid').innerHTML=P.slice(0,4).map(card).join('');
$('#sale').innerHTML=P.filter(p=>p.o).slice(0,4).map(card).join('');
let bag=[];try{bag=JSON.parse(localStorage.getItem('mn_bag')||'[]')}catch(e){}
const save=()=>{try{localStorage.setItem('mn_bag',JSON.stringify(bag))}catch(e){}render()};
function render(){cnt.textContent=bag.reduce((a,b)=>a+b.q,0);
items.innerHTML=bag.length?bag.map((b,i)=>{const p=P.find(x=>x.id==b.id);return `<div class="li"><div class="ph" style="--c:${p.c}"></div><div>${p.n}<br><small>${b.s} · ${money(p.p)}</small></div><div class="q"><button data-m="${i}">−</button> ${b.q} <button data-pl="${i}">+</button><br><a href="#" data-r="${i}"><small>Remove</small></a></div></div>`}).join(''):'<p>Your bag is empty.</p>';
const t=bag.reduce((a,b)=>a+b.q*P.find(x=>x.id==b.id).p,0);sub.textContent=money(t);
ck.href=WA('Hello Maison Nyuy, I would like to enquire about: '+bag.map(b=>b.q+'× '+P.find(x=>x.id==b.id).n).join(', '))}
function add(id,s='M',q=1){const f=bag.find(b=>b.id==id&&b.s==s);f?f.q+=q:bag.push({id,s,q});save();open_('drawer')}
const open_=id=>{$('#'+id).classList.add('on');ov.classList.add('on')},close_=()=>{document.querySelectorAll('.on:not(.ann span)').forEach(e=>{if(e.matches('.drawer,.modal,.ov'))e.classList.remove('on')})};
ov.onclick=mx.onclick=dx.onclick=dc.onclick=close_;document.addEventListener('keydown',e=>{if(e.key=='Escape')close_()});modal.onclick=e=>{if(e.target==modal)close_()};
bagBtn.onclick=()=>open_('drawer');
let cur,qty=1,size='M';
document.addEventListener('click',e=>{const t=e.target;
if(t.dataset.a)add(+t.dataset.a);
if(t.dataset.q){cur=P.find(p=>p.id==t.dataset.q);qty=1;size='M';qv.textContent=1;mn.textContent=cur.n;mp.innerHTML=(cur.o?`<span class="was">${money(cur.o)}</span>`:'')+money(cur.p);mimg.style.setProperty('--c',cur.c);mimg.dataset.img='products/'+slug(cur.n);mimg.removeAttribute('data-ok');mimg.style.backgroundImage='';mimg.style.color='';mimg.innerHTML=sil;
sz.innerHTML=['XS','S','M','L'].map(s=>`<button class="${s=='M'?'s':''}">${s}</button>`).join('');cl.innerHTML=cur.k.map((k,i)=>`<button class="${i?'':'s'}" style="background:${k};width:32px;height:32px"></button>`).join('');mwa.href=WA('Hello Maison Nyuy, I would like to enquire about: '+cur.n);open_('modal');ov.classList.add('on')}
if(t.parentElement==sz||t.parentElement==cl){[...t.parentElement.children].forEach(b=>b.classList.remove('s'));t.classList.add('s');if(t.parentElement==sz)size=t.textContent}
if(t.dataset.m!==undefined){const b=bag[t.dataset.m];b.q--;if(b.q<1)bag.splice(t.dataset.m,1);save()}
if(t.dataset.pl!==undefined){bag[t.dataset.pl].q++;save()}
if(t.dataset.r!==undefined){e.preventDefault();bag.splice(t.dataset.r,1);save()}});
qm.onclick=()=>{qty=Math.max(1,qty-1);qv.textContent=qty};qp.onclick=()=>{qty++;qv.textContent=qty};
madd.onclick=()=>{close_();add(cur.id,size,qty)};
render();
$('#hs').innerHTML=[...P].slice(0,8).reverse().map(card).join('');
const sts=[['Casual Looks','#8d8272'],['Office Wear','#3b2a1e'],['Evening Elegance','#1c130c'],['Weekend Style','#a67b50'],['Luxury Collection','#b08d4f']];
$('#sty').innerHTML=sts.map(s=>`<a class="ph" href="#new" data-img="styles/${slug(s[0])}" style="--c:${s[1]}">${s[0]}</a>`).join('');
const gl=[['Layered neutrals','#6b4a33'],['Heel of the week','#222'],['Tote, filled','#a67b50'],['Evening, unhurried','#3b2a1e'],['Sunday sneakers','#8d8272'],['Gold details','#b08d4f']];
$('#gal').innerHTML=gl.map(g=>`<a href="#new"><div class="ph" data-img="gallery/${slug(g[0])}" style="--c:${g[1]}">${g[0]}</div></a>`).join('');
const T=[['Amina K.','Fits like it was made for me. The wrap dress has been to three weddings already.',5],['Grace T.','The blazer is the best thing in my wardrobe. Delivery was quick and the packaging was beautiful.',5],['Daniel M.','Bought the sneakers on a whim. Comfortable from the first day, and they go with everything.',4]];
let ti=0;function showT(d){ti=(ti+d+T.length)%T.length;const t=T[ti];const set=()=>{tq.textContent='“'+t[1]+'”';tn.textContent=t[0];tav.textContent=t[0][0];tst.textContent='★'.repeat(t[2])+'☆'.repeat(5-t[2])};window.gsap&&!rm?gsap.timeline().to('#ts',{opacity:0,x:-30*(d||1),duration:.3,onComplete:set}).fromTo('#ts',{x:30*(d||1)},{opacity:1,x:0,duration:.5}):set()}
showT(0);tp.onclick=()=>showT(-1);tn2.onclick=()=>showT(1);setInterval(()=>showT(1),7000);
nl3.onsubmit=e=>{e.preventDefault();const ok=/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(nle.value);nlm3.textContent=ok?'Thank you. Your first note arrives soon.':'Enter a valid email address, for example name@example.com.';if(ok)nl3.reset()};
burger.onclick=()=>{nav.classList.toggle('open');burger.textContent=nav.classList.contains('open')?'Close':'Menu'};
nav.onclick=()=>{nav.classList.remove('open');burger.textContent='Menu'};
nl.onsubmit=e=>{e.preventDefault();nlm.textContent='Thank you — you are on the list.';nl.reset()};
let ai=0;const as=[...document.querySelectorAll('#ann span')];setInterval(()=>{as[ai].classList.remove('on');ai=(ai+1)%as.length;as[ai].classList.add('on')},3200);
if(rm||RET||!window.gsap){pre.remove()}else{gsap.registerPlugin(ScrollTrigger);
const tl=gsap.timeline();
tl.from('#pre',{opacity:1,duration:.1}).to('#pre',{yPercent:-100,duration:.9,ease:'power4.inOut',delay:.7})
.from('#heroImg',{scale:1.25,duration:1.6,ease:'power3.out'},'-=.4')
.from('#h1 i',{yPercent:110,duration:1,stagger:.12,ease:'power4.out'},'-=1.2')
.from('.hero p,.hero .btns',{opacity:0,y:16,duration:.7,stagger:.15},'-=.5');
gsap.to('#heroImg',{yPercent:10,ease:'none',scrollTrigger:{trigger:'.hero',scrub:true}});
gsap.from('#campImg',{clipPath:'inset(0 100% 0 0)',duration:1.3,ease:'power3.inOut',scrollTrigger:{trigger:'.camp',start:'top 70%'}});
gsap.from('.cats a',{clipPath:'inset(100% 0 0 0)',duration:1,stagger:.1,ease:'power3.out',scrollTrigger:{trigger:'.cats',start:'top 80%'}});
gsap.from('.ed h2',{opacity:0,letterSpacing:'.12em',duration:1.4,scrollTrigger:{trigger:'.ed',start:'top 75%'}});
gsap.from('#grid .card',{opacity:0,x:40,stagger:.12,duration:.8,scrollTrigger:{trigger:'#grid',start:'top 85%'}});
gsap.from('#gal a',{clipPath:'inset(0 0 100% 0)',duration:1,stagger:.12,ease:'power3.out',scrollTrigger:{trigger:'#gal',start:'top 80%'}});
gsap.from('#sty a',{scaleY:.6,transformOrigin:'bottom',opacity:0,duration:.9,stagger:.1,ease:'power3.out',scrollTrigger:{trigger:'#sty',start:'top 80%'}});
gsap.to('#finBg',{yPercent:12,ease:'none',scrollTrigger:{trigger:'.fin',scrub:true}});
}
const A={tab:'overview',del:new Set(),stk:id=>[24,6,4,41,0,3,18,52,9,2,15,30,12,8,20,5,33,17,26,11,19,7,44,28,13,22,36][id-1]};
const aM=n=>n.toLocaleString('en-US')+' XAF',aSt={Delivered:'ok',Pending:'wa',Cancelled:'bd',Shipped:''},aP=()=>P.filter(p=>!A.del.has(p.id)),aSq=p=>`<i class='sq' style='background:${p.c}'></i>`;
const aO=[['MN-1048','Amina Kone','Ivory Wrap Dress','12 Nov 2026',240,'Pending'],['MN-1047','Grace Tabi','Camel Structured Tote','12 Nov 2026',320,'Shipped'],['MN-1046','Daniel Mbah','Cloud Leather Sneaker','11 Nov 2026',150,'Delivered'],['MN-1045','Sandrine Eko','Silk Evening Gown','11 Nov 2026',420,'Pending'],['MN-1044','Paul Ndi','Tailored Wool Blazer','10 Nov 2026',290,'Delivered'],['MN-1043','Lydia Fon','Gilded Strap Sandal','10 Nov 2026',130,'Cancelled'],['MN-1042','Joel Biya','Suede Runner','09 Nov 2026',160,'Shipped'],['MN-1041','Mireille Ayuk','Mini Crossbody','09 Nov 2026',240,'Delivered']];
const aT=(h,r)=>`<div class='tw'><table><tr>${h.map(x=>`<th>${x}</th>`).join('')}</tr>${r.map(x=>`<tr>${x.map(c=>`<td>${c}</td>`).join('')}</tr>`).join('')}</table></div>`;
const aOT=r=>aT(['Order','Customer','Product','Date','Amount','Status'],r.map(o=>[o[0],o[1],NM[o[2]]||o[2],o[3],aM((P.find(p=>p.n==(NM[o[2]]||o[2]))||{p:o[4]}).p),`<span class='${aSt[o[5]]}'>${o[5]}</span>`]));
const aLv=s=>s==0?`<span class='bd'>Out of stock</span>`:s<=6?`<span class='wa'>Low</span>`:`<span class='ok'>In stock</span>`;
const aC=()=>{const d=[11,13,15,14,17,19,18,21,22,24,25,27];return `<svg viewBox='0 0 590 180' width='100%' role='img' aria-label='Monthly sales in millions of XAF'>`+d.map((v,i)=>{const h=v/30*130,x=6+i*48;return `<rect x='${x}' y='${150-h}' width='34' height='${h}' fill='${i==11?'#111':'#aaa'}'/><text x='${x+17}' y='${146-h}' font-size='10' text-anchor='middle'>${(v/10).toFixed(1)}M</text><text x='${x+17}' y='170' font-size='11' text-anchor='middle'>${'JFMAMJJASOND'[i]}</text>`}).join('')+`</svg>`};
const AV={
overview:()=>`<div class='kp'>${[['Total products',aP().length+101],['Total orders','1,284'],['Monthly sales',aM(2700000)],['Pending orders',23]].map(k=>`<div>${k[0]}<b>${k[1]}</b></div>`).join('')}</div><h2>Sales, last 12 months (millions of XAF)</h2>${aC()}<div class='g2'><div><h2>Best sellers</h2>${aT(['Product','Sold'],[[NM['Cloud Leather Sneaker'],186],[NM['Ivory Wrap Dress'],152],[NM['Camel Structured Tote'],131],[NM['Gilded Strap Sandal'],118],[NM['Muted Gold Cuff'],97]])}</div><div><h2>Low stock</h2>${aT(['Product','Left'],aP().filter(p=>A.stk(p.id)<=6).map(p=>[aSq(p)+p.n,A.stk(p.id)]))}</div></div><h2>Recent orders</h2>${aOT(aO.slice(0,5))}`,
products:()=>`<h2>All products</h2>${aT(['Product','Category','Price','Stock','Status','Actions'],aP().map(p=>[aSq(p)+p.n,p.cat,aM(p.p),A.stk(p.id),aLv(A.stk(p.id)),`<button class='b' data-am='Demo: editing ${p.n}'>Edit</button> <button class='b' data-ad='${p.id}'>Delete</button>`]))}`,
orders:()=>`<h2>Orders</h2>${aOT(aO)}`,
inventory:()=>`<h2>Stock levels</h2>${aT(['Product','Units','Level','Alert'],[...aP()].sort((a,b)=>A.stk(a.id)-A.stk(b.id)).map(p=>[aSq(p)+p.n,A.stk(p.id),`<span class='bar'><i style='width:${Math.min(100,A.stk(p.id)/50*100)}%'></i></span>`,aLv(A.stk(p.id))]))}`,
categories:()=>`<h2>Categories</h2>${aT(['Category','Products','Action'],['Dresses','Clothing','Shoes','Handbags','Sneakers','Sandals','Accessories'].map(c=>{const l=aP().filter(p=>p.cat==c);return [`<i class='sq' style='background:${l[0]?l[0].c:'#ccc'}'></i>`+c,l.length,`<button class='b' data-am='Demo: managing ${c}'>Manage</button>`]}))}`,
website:()=>`<h2>Homepage banners</h2>${['Autumn 26 hero','The Elevated Collection','Weekend sale'].map((b,i)=>`<label class='ar'><input type='checkbox' ${i<2?'checked':''}> ${b}</label>`).join('')}<h2>Announcement messages</h2>${['Discover our latest collection','New arrivals just dropped','Special offers on selected styles'].map(m=>`<input class='ai' value='${m}' aria-label='Announcement message'>`).join('')}<button class='b' data-am='Messages saved (demo)'>Save messages</button><h2>Featured products</h2>${aP().slice(0,6).map((p,i)=>`<label class='ar'><input type='checkbox' ${i%2==0?'checked':''}> ${p.n}</label>`).join('')}<h2>Promotional section</h2><label class='ar'><input type='checkbox' checked> Show special offers</label><label class='ar'>Headline discount (%) <input type='number' value='30' min='5' max='60' style='width:70px;padding:4px'></label><br><button class='b' data-am='Promotion updated (demo)'>Update promotion</button>`};
const AC={overview:['Export report','Set sales target'],products:['Add product','Import products','Export list'],orders:['Create order','Export orders','Print invoices'],inventory:['Update stock','Set low-stock alerts','Reorder'],categories:['Manage categories','Add category'],website:['Preview homepage','Add banner','Add announcement']};
function adm(){admt.innerHTML=['overview','products','orders','inventory','categories','website'].map(k=>`<button class='${k==A.tab?'on':''}' data-at='${k}'>${k[0].toUpperCase()+k.slice(1)}</button>`).join('');admc.innerHTML=`<p class='ac'>${AC[A.tab].map(a=>`<button class='b' data-am='Demo: ${a} would open here'>${a}</button>`).join(' ')}</p>`+AV[A.tab]()}
document.addEventListener('click',e=>{const t=e.target;if(t.dataset.at){A.tab=t.dataset.at;admm.textContent='';adm()}if(t.dataset.am)admm.textContent=t.dataset.am;if(t.dataset.ad){A.del.add(+t.dataset.ad);adm();admm.textContent='Product deleted (demo). It returns when you reload.'}});
const cl7=['All','Dresses','Clothing','Shoes','Handbags','Sneakers','Sandals','Accessories'];
let F={cat:'All',q:'',sort:'feat',price:'all'};
function shop(){let r=P.filter(p=>(F.cat=='All'||p.cat==F.cat)&&(p.n+' '+p.cat).toLowerCase().includes(F.q)&&(F.price=='all'||(F.price=='u100'?p.p<10000:F.price=='m'?p.p>=10000&&p.p<=15000:p.p>15000)));
if(F.sort=='lo')r.sort((a,b)=>a.p-b.p);if(F.sort=='hi')r.sort((a,b)=>b.p-a.p);if(F.sort=='az')r.sort((a,b)=>a.n.localeCompare(b.n));
sgrid.innerHTML=r.map(card).join('');rc.textContent=r.length+(r.length==1?' piece':' pieces');empty.hidden=r.length>0;
chips.innerHTML=cl7.map(c=>`<button class="${c==F.cat?'s':''}" data-f="${c}">${c}</button>`).join('');
if(window.gsap&&!rm)gsap.from('#sgrid .card',{opacity:0,y:24,stagger:.025,duration:.5,clearProps:'all'})}
sq.oninput=()=>{F.q=sq.value.trim().toLowerCase();shop()};ss.onchange=()=>{F.sort=ss.value;shop()};sp.onchange=()=>{F.price=sp.value;shop()};
clr.onclick=()=>{F={cat:'All',q:'',sort:'feat',price:'all'};sq.value='';ss.value='feat';sp.value='all';shop()};
document.addEventListener('click',e=>{const f=e.target.dataset.f;if(f){F.cat=f;shop()}const c=e.target.closest('[data-cat]');if(c){F.cat=c.dataset.cat.startsWith('Sandals')?'Sandals':c.dataset.cat;shop()}});
cf.onsubmit=e=>{e.preventDefault();const bad=!cn.value.trim()?'Enter your name.':!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(ce.value)?'Enter a valid email address.':cm.value.trim().length<10?'Write a message of at least 10 characters.':'';cmsg.className=bad?'bad':'good';cmsg.textContent=bad||'Thank you. We will reply within one working day.';if(!bad)cf.reset()};
const V={admin:'adminv',collections:'collectionsv',about:'aboutv',products:'shopv','contact-us':'contactv',faq:'faqv'};
let lastR=0;function route(first){lastR=Date.now();const h=location.hash.slice(1),id=V[h],s=!!id;['shopv','contactv','faqv','aboutv','collectionsv','adminv'].forEach(v=>document.getElementById(v).hidden=v!=id);document.getElementById('top').hidden=s;
if(s){shop();scrollTo({top:0,behavior:'instant'});if(h=='admin')adm();if(h=='collections'&&window.gsap&&!rm)gsap.fromTo('#collectionsv .ph',{clipPath:'inset(0 100% 0 0)'},{clipPath:'inset(0 0% 0 0)',duration:1.1,stagger:.1,ease:'power3.out',overwrite:true,clearProps:'clipPath'});if(h=='about'&&window.gsap&&!rm)gsap.fromTo('#aboutv .ph',{clipPath:'inset(0 0 100% 0)'},{clipPath:'inset(0 0 0% 0)',duration:1.1,stagger:.15,ease:'power3.out',overwrite:true,clearProps:'clipPath'})}else{const el=h&&document.getElementById(h);if(window.ScrollTrigger)ScrollTrigger.refresh();el?el.scrollIntoView():scrollTo(0,0)}
if(s&&window.ScrollTrigger)ScrollTrigger.refresh();if(!first&&window.gsap&&!rm)gsap.fromTo(s?'#'+id:'#top',{opacity:0},{opacity:1,duration:.5,overwrite:true,clearProps:'opacity'})}
addEventListener('hashchange',()=>route());route(true);
if(RET){try{const p=JSON.parse(sessionStorage.getItem('mn_pos')||'null');if(p&&p.h==location.hash)setTimeout(()=>scrollTo({top:p.y,behavior:'instant'}),80)}catch(e){}waBack()}
document.addEventListener('click',e=>{const a=e.target.closest('a[href^="#"]');if(a)setTimeout(()=>{if(Date.now()-lastR>60)route()},60)});

function loadImgs(){document.querySelectorAll('[data-img]:not([data-ok])').forEach(el=>{el.dataset.ok=1;const u='assets/images/'+el.dataset.img+'.jpg',i=new Image();i.onload=()=>{el.style.backgroundImage='url('+u+')';el.style.backgroundSize='cover';el.style.backgroundPosition='center';el.style.color='transparent';el.querySelectorAll('svg').forEach(s=>s.remove())};i.src=u})}
new MutationObserver(loadImgs).observe(document.body,{childList:true,subtree:true});loadImgs();
