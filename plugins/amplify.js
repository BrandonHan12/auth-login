import Amplify, { Auth } from 'aws-amplify'
import awsconfig from '~/aws-exports'
import { Hub } from 'aws-amplify'
import '@aws-amplify/ui-vue'

Amplify.configure(awsconfig)
