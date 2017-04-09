import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path : 'sign_in',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const SignIn = require('./containers/SignInContainer').default
      const reducer = require('./modules/sign_in').default

      /*  Add the reducer to the store on key 'counter'  */
      injectReducer(store, { key: 'sign_in', reducer })

      /*  Return getComponent   */
      cb(null, SignIn)

    /* Webpack named bundle   */
    }, 'sign_in')
  }
})
