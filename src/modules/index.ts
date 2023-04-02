import type { ModuleInterface } from '@/interface/module'
import AuthModule from '@/modules/Auth'
import ChatModule from '@/modules/Chat'

const listModule: Record<string, ModuleInterface> = {
  AuthModule,
  ChatModule
}

export default listModule
