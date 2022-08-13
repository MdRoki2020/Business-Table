import React, { Fragment } from 'react'
import {useSelector} from 'react-redux'

const FullscreenLoader = () => {
  // const settings=useSelector((state)=>state.settings.loader)
  return (
    <div>
      <Fragment>
        <div className='{settings+"LoadingOverlay"}'>
          <div className='Line-progress'>
            <div className='indeterminate'></div>
          </div>
        </div>
      </Fragment>
    </div>
  )
}

export default FullscreenLoader;
