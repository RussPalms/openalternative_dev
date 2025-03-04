export type RepositoryQueryResult = {
  repository: {
    stargazerCount: number
    forkCount: number
    watchers: {
      totalCount: number
    }
    mentionableUsers: {
      totalCount: number
    }
    licenseInfo: {
      spdxId: string
    } | null
    repositoryTopics: {
      nodes: Array<{
        topic: {
          name: string
        }
      }>
    }
    defaultBranchRef: {
      target: {
        history: {
          totalCount: number
          pageInfo: {
            startCursor: string
            endCursor: string
          }
          nodes: Array<{
            committedDate: string
          }>
        }
      }
    }
  }
}

export type FirstCommitQueryResult = {
  repository: {
    defaultBranchRef: {
      target: {
        history: {
          nodes: Array<{
            committedDate: string
          }>
        }
      }
    }
  }
}
