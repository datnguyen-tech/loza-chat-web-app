export interface IUser {
  _id: string
  fullName: string
  avatar: string
  banner: string
  email: string
  gender: string
  birthday: string
  isFriend?: boolean
  [x: string]: any
}

export interface IApiResponse<T> {
  content: T
  total?: number
  data?: Record<string, any>
  page?: number
  limit?: number
}

export interface IUserRequest {
  _id: string
  message: string
  fromId: IUser
}

export interface IConversation {
  _id: string
  conversationName?: string
  conversationType: 'DM' | 'GROUP'
  members: IUser[]
  createdBy: string
  conversationThumb?: string
  lastMessageId: string
  lastMessage: IMessage
  updatedAt: string
}

export interface IFile {
  _id?: string
  fileName: string
  fileSize: number
  url: string
  fileType: 'IMAGE' | 'VIDEO'
  [x: string]: any
}

type TypeMessage = 'HTML' | 'TEXT' | 'FILE' | 'IMAGE' | 'VIDEO'
export interface IMessage {
  _id?: string
  sender: IUser
  conversationId: string
  type: TypeMessage
  content: string
  file: IFile
  status: 'PUBLIC' | 'DELETE_ME' | 'DELETE_GROUP'
  createdAt: string
  fileName?: ''
  [x: string]: any
}

export interface IRequestBodyConversation {
  conversationName?: string
  conversationType: 'DM' | 'GROUP'
  conversationThumb?: string
  receiver?: string
  members?: string[]
}

export interface IRequestBodyMessage {
  conversationId: string
  type: TypeMessage
  content: string
  file?: string
  sticker?: string
  reply?: string
}
