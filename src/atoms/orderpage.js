import { atom } from "recoil"
import {recoilPersist } from 'recoil-persist'


const { persistAtom } = recoilPersist();

// Atoms for Recoil
const cartt = atom({
  key : 'cartt',
  default : [],
  effects_UNSTABLE: [persistAtom],
})

const cartticon = atom({
  key : 'cartticon',
  default : [],
  effects_UNSTABLE: [persistAtom],
})

const alldomains = atom({
    key : 'alldomains',
    default : [],
    effects_UNSTABLE: [persistAtom],
})

const yearss = atom({
  key : 'yearss',
  default : [],
  effects_UNSTABLE: [persistAtom],
})

const addedtocartt = atom({
  key : 'addedtocartt',
  default : [],
  effects_UNSTABLE: [persistAtom],
})

const stepperstepp = atom({
  key : 'stepperstepp',
  default : 0,
  effects_UNSTABLE: [persistAtom],
})

const totalamountt = atom({
  key : 'totalamountt',
  default : 0,
  effects_UNSTABLE: [persistAtom],
})

const invoiceidd = atom({
  key : 'invoiceidd',
  default : 0,
  effects_UNSTABLE: [persistAtom],
})


const preloaderr = atom({
  key : 'preloaderr',
  default : 0,
  effects_UNSTABLE: [persistAtom],
})


const pricingg = atom({
  key : 'pricingg',
  default : [],
  effects_UNSTABLE: [persistAtom],

})


const snackbarr = atom({
  key : 'snackbarr',
  default : {
    seviority : '',
    open : false,
    message : ''
  },
  effects_UNSTABLE: [persistAtom],
})

const exactdomainn = atom({
  key : 'exactdomainn',
  default : [],
  // effects_UNSTABLE: [persistAtom],
})

export {cartt,cartticon,alldomains,yearss,addedtocartt , stepperstepp , totalamountt , invoiceidd , preloaderr , pricingg ,snackbarr , exactdomainn}