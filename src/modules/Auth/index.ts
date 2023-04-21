import type { ModuleInterface } from '@/interface/module'
import AuthRouter from '@/modules/Auth/router'

const AuthModule: ModuleInterface = {
  router: AuthRouter
}

export default AuthModule
