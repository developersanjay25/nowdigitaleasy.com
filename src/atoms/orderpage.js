import { atom } from "recoil"


// Atoms for Recoil
const cartt = atom({
  key : 'cartt',
  default : []
})

const cartticon = atom({
  key : 'cartticon',
  default : []
})

const alldomains = atom({
    key : 'alldomains',
    default : []
})

const yearss = atom({
  key : 'yearss',
  default : []
})

const addedtocartt = atom({
  key : 'addedtocartt',
  default : []
})

const stepperstepp = atom({
  key : 'stepperstepp',
  default : 0
})

const totalamountt = atom({
  key : 'totalamountt',
  default : 0
})

const invoiceidd = atom({
  key : 'invoiceidd',
  default : 0
})


const preloaderr = atom({
  key : 'preloaderr',
  default : 0
})


const pricingg = atom({
  key : 'pricingg',
  default : []
})


const snackbarr = atom({
  key : 'snackbarr',
  default : {
    seviority : '',
    open : false,
    message : ''
  }
})

const exactdomainn = atom({
  key : 'exactdomainn',
  default : []
})

export {cartt,cartticon,alldomains,yearss,addedtocartt , stepperstepp , totalamountt , invoiceidd , preloaderr , pricingg ,snackbarr , exactdomainn}