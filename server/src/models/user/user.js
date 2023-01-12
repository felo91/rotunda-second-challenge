module.exports.buildMakeUser = () => {
  function makeUser ({ id, username, avatarUrl } = {}) {
      if (!id)  throw new Error('User must have an id.')
      if (!username)  throw new Error('User must have a username.')

    return createObject ({ id, username, avatarUrl })
  }

  function makeUserFromGitHub ({ id, login, avatar_url } = {}) {
      if (!id)  throw new Error('User must have an id.')
      if (!login)  throw new Error('User must have a username.')

      return createObject({ id, username:login , avatarUrl: avatar_url })
  }

  function createObject ({ id, username, avatarUrl } = {}) {
      return Object.freeze({  
      getId: () => id,
      getUsername: () => login,
      getAvatarUrl: () => avatarUrl,
      getObjectData: () => ({ id, username, avatarUrl })
  })}

  return { makeUser, makeUserFromGitHub }
}