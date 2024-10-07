const serverDomain = 'https://employee-crud-vercel-t2l1.vercel.app'

const summaryAPI = {
    add : {
        url: `${serverDomain}/api/add`,
        method: 'post'
    },
    get : {
        url: `${serverDomain}/api/get`,
        method: 'get'
    },
    delete : {
        url: `${serverDomain}/api/delete`,
        method: 'delete'
    },
    update : {
        url: `${serverDomain}/api/edit`,
        method: 'put'
    }
}

export default summaryAPI