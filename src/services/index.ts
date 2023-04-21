import AuthRepository from './authRepository'
import RelationRepository from './relationRepository'
import UtilRepository from './utilRepository'
import ChatRepository from './ChatRepository'

export const apiAuth: AuthRepository = new AuthRepository()
export const apiRelation: RelationRepository = new RelationRepository()
export const apiUtil: UtilRepository = new UtilRepository()
export const apiChat: ChatRepository = new ChatRepository()
