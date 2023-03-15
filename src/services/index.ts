import AuthRepository from './authRepository'
import RelationRepository from './relationRepository'
import UtilRepository from './utilRepository'
import ChatRepository from './ChatRepository'

type RepositoryName = 'auth' | 'relations' | 'util' | 'chat'

export default function getRepository(name: RepositoryName): any {
  switch (name) {
    case 'auth':
      return new AuthRepository()
    case 'relations':
      return new RelationRepository()
    case 'util':
      return new UtilRepository()
    case 'chat':
      return new ChatRepository()
  }
}
