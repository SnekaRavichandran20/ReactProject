from controllers.user import (
    registerApi,
    loginApi,
    customUIApi,
    customLogoApi,
    updateApi,
    deleteApi,
    getUserApi,
    logoutApi,
    restoreDefaultApi
)

# intializing routes for all api's
def initialize_routes(api):
    # api.add_resourcer(LoginApi, '/api/auth/login')
    api.add_resource(registerApi, "/register")
    api.add_resource(loginApi, "/login")
    api.add_resource(customUIApi, "/custom-ui/<user_id>")
    api.add_resource(customLogoApi, "/custom-logo/<user_id>")
    api.add_resource(updateApi, "/update/<user_id>")
    api.add_resource(deleteApi, "/delete/<user_id>")
    api.add_resource(logoutApi, "/logout")
    api.add_resource(getUserApi, "/user-list")
    api.add_resource(restoreDefaultApi,"/restore/<user_id>")