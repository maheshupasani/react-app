import axios from 'axios';

const CommonService = {
    // axios Get URL { url:string }
    axiosGet: function(params){
        if(typeof params == 'object'){
            axios.get(params.url).then(response => {
                return {
                    status : true,
                    message : response.data
                }
            }).catch(error => {
                console.log(error)
            })
        }else{
            return {
                status : false,
                message : 'query only accepts object,'+ typeof params +' given.'
            }
        }
    },// axiosGet ends here
    // axios Post URL { url:string,param:object }
    axiosPost: function(params){
        if(typeof params == 'object'){
            axios.post(params.url,params.param).then(response => {
                return {
                    status : true,
                    message : response.data
                }
            }).catch(error => {
                console.log(error)
            })
        }else{
            return {
                status : false,
                message : 'query only accepts object,'+ typeof params +' given.'
            }
        }
    } // axiosPost ends here
}
export default CommonService;