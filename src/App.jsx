import '_scss/main.scss'
import '_modules/fontawesome/index.js'
import React from 'react'

import Menu from '_app/template/menu'
import Routes from '_routes/routes'

export default props => (
    <div>
        <Menu />
        <Routes />
    </div>
)
