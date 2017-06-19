let apiService = function($resource, baseUrl) {
    return $resource(baseUrl, {}, {
        login: {
            url: baseUrl + 'login',
            method: 'GET',
            isArray: false,
        },
        register: {
            url: baseUrl + 'register',
            method: 'POST',
            isArray: false
        }
    })
};
apiService.$inject = ['$resource', 'baseUrl'];
export default apiService;