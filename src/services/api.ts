interface Response {
  data: {
    user: {
      name: string;
      email: string;
    };
    token: string;
  }
}

export function post(text: string, user: object): Promise<Response> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        data: {
          token: 'sdfas8dufoiasdfj89sadfhio90-sd990-sdfjksdfljsd8f787asd9fyhasudfhui',
          user: {
            name: 'John Doe',
            email: 'johndoe@email.com'
          }
        }
      })
    }, 500)
  })
}

export const defaults = {
  headers: {
    Authorization: '',
  },
};