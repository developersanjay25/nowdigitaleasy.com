import { atom } from "recoil";


import {recoilPersist } from 'recoil-persist'


const { persistAtom } = recoilPersist();


// Atoms for Recoil
const opendialogg = atom({
    key : 'opendialogg',
    default : {open :false, pid : 2}
  });

  const hostingdialogstepp = atom({
    key : 'hostingdialogstepp',
    default : 0
  });

  const dialogsizee = atom({
    key : 'dialogsizee',
    default : 'md'
  });


  const GSuitedataa = atom({
    key : 'GSuitedataa',
    default : {product : []}
  });

  const g_emailCart = atom({
    key : 'g_emailCart',
    default : {type : 'g-workspace',domainforgwork : '' , mailcount : 3,price : 0,duration : "annually",name : '' ,pid : ''}
  });

  const gsuiteprice = atom({
    key : 'gsuiteprice',
    default : {},
    effects_UNSTABLE: [persistAtom],
  });
  


  export {opendialogg , hostingdialogstepp , GSuitedataa , dialogsizee , g_emailCart , gsuiteprice}