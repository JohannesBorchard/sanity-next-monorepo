import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'cgtpkj8e',
    dataset: 'production',
  },
  studioHost: 'sanity-next-jb',
  autoUpdates: true,
})
