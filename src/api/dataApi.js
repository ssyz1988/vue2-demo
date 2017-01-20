import Vue from  'vue'
import vueResource from 'vue-resource'
Vue.use(vueResource)
function Api (baseUrl) {
    var self = this;
    self.apiUrl = baseUrl || process.env.API_DOMAIN;
    Vue.http.interceptors.push( (request,next) => {
        next( (response) => {
            if(!response.ok){
            } else {
            }
            return response;
        });
    });
    return Vue.resource({}, {}, {
        getTemplateList: {
            method: 'GET',
            url: self.apiUrl + '/api/v1/pandora/biz/rule/template/list'
        },
        getRuleList: {
            method: 'GET',
            url: self.apiUrl + '/api/v1/pandora/biz/rule/list'
        },
        getMetaData: {
            method: 'GET',
            url: self.apiUrl + '/api/v1/pandora/admin/act/metaData/list'
        },
        getSingleTemplate: {
            method: 'GET',
            url: self.apiUrl + '/api/v1/pandora/admin/act/template/getById'
        },
        getSingleRule: {
            method: 'GET',
            url: self.apiUrl + '/api/v1/pandora/biz/rule/findByRuleId'
        },
        updateSingleRule: {
            method: 'GET',
            url: self.apiUrl + '/api/v1/pandora/biz/rule/save'
        },
        deleteSingleRule: {
            method: 'GET',
            url: self.apiUrl + '/api/v1/pandora/biz/rule/delete'
        }
    });
}
export default Api;