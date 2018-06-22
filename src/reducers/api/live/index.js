const initialState = {
  endpoint: 'http://api.wekindred.com',
  login: 'auth/login',
  refreshauth: 'auth/refresh',
  desireSubmit: 'event/desire',
  masturbationSubmit: 'event/masturbation',
  sexSubmit: 'event/sex',
  utillist: '/utillist',
  user: {
    forgottenGenerate: {
      type: 'put',
      url: '/user/password/generatecode'
    },
    forgottenReset: {
      type: 'put',
      url: '/user/password/reset'
    },
    register: {
      type: 'post',
      url: '/user/register'
    }
  }
};

export default function(state = initialState) {
  return state;
}
