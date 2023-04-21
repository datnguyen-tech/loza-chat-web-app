import type { ModuleInterface } from '@/interface/module'
import AuthModule from '@/modules/Auth'
import ChatModule from '@/modules/Chat'
import ContactModule from './Contact'

const listModule: Record<string, ModuleInterface> = {
  AuthModule,
  ChatModule,
  ContactModule
}

export default listModule
