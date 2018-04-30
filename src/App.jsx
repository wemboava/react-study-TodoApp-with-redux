import React from 'react'
import ReactDOM from 'react-dom'
// import Primeiro, { Segundo } from '_components/component'
// import Family from '_components/family'
// import Member from '_components/member'
// import ClassComponent from '_components/classComponent'
import Field from '_components/field'

ReactDOM.render(
    // <ClassComponent label='Contador' initialValue={10} value={10} />
    
    <Field initialValue='Teste' />
    // <Family lastname='Emboava'>
    //     <Member name='willian' />
    //     <Member name='joao' />
    //     <Member name='maria' />
    // </Family>
, document.getElementById('app'))