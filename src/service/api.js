import { create } from "apisauce"

const api = create ({
    baseURL :"https://minha-primeira-api-nod.herokuapp.com/"
})

api.addResponseTransform (response => {
    if (!response.ok) throw response
})

export default api